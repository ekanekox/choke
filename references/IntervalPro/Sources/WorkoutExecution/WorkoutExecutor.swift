import Analytics
import Combine
import CueEngine
import Foundation
import HealthEngine
import IntervalModels
import TimerCore

@MainActor
public final class WorkoutExecutor {
    public var statePublisher: AnyPublisher<TimerState, Never> {
        timerEngine.statePublisher
    }

    private let timerEngine: TimerEngine
    private let cueScheduler: CueScheduling
    private let healthService: HealthService
    private let analytics: AnalyticsTracking

    private var cancellables = Set<AnyCancellable>()
    private var activeSession: WorkoutSession?

    public init(
        timerEngine: TimerEngine,
        cueScheduler: CueScheduling,
        healthService: HealthService,
        analytics: AnalyticsTracking
    ) {
        self.timerEngine = timerEngine
        self.cueScheduler = cueScheduler
        self.healthService = healthService
        self.analytics = analytics
        bindCompletionTracking()
    }

    public func start(
        plan: WorkoutPlan,
        cueProfile: CueProfile = .balanced,
        source: SessionSource,
        presetId: UUID? = nil
    ) async throws {
        guard WorkoutPlanValidator.validate(plan) else {
            throw IntervalProError.invalidPlan
        }

        try await healthService.requestPermissions()
        try await healthService.startWorkout(type: activityType(for: plan.mode))

        let timeline = TimelineEventFactory.makeTimelineEvents(for: plan)
        cueScheduler.schedule(for: timeline, profile: cueProfile)

        activeSession = WorkoutSession(
            presetId: presetId,
            source: source,
            status: .running,
            plannedSec: plan.totalDurationSec,
            actualSec: 0
        )

        analytics.track(.workoutStarted, properties: [
            "mode": plan.mode.rawValue,
            "durationSec": "\(plan.totalDurationSec)"
        ])

        timerEngine.start(plan: plan)
    }

    public func pause() {
        timerEngine.pause()
    }

    public func resume() {
        timerEngine.resume()
    }

    public func skipStep() {
        timerEngine.skipStep()
    }

    public func adjustCurrentStep(seconds: Int) {
        timerEngine.adjustCurrentStep(seconds: seconds)
    }

    private func bindCompletionTracking() {
        timerEngine.statePublisher
            .sink { [weak self] state in
                guard let self else { return }
                guard var session = self.activeSession else { return }

                session.actualSec = state.elapsedSec

                if state.playbackState == .completed {
                    session.status = .completed
                    session.endedAt = Date()
                    self.activeSession = session

                    let adherence = session.plannedSec == 0 ? 0 : Double(session.actualSec) / Double(session.plannedSec)
                    let metrics = SessionMetrics(sessionId: session.id, adherencePct: min(adherence, 1))

                    let healthService = self.healthService
                    Task { [session, metrics, healthService] in
                        try? await healthService.finalizeWorkout(session: session, metrics: metrics)
                    }

                    self.analytics.track(.workoutCompleted, properties: [
                        "sessionId": session.id.uuidString,
                        "actualSec": "\(session.actualSec)",
                        "plannedSec": "\(session.plannedSec)"
                    ])
                } else {
                    self.activeSession = session
                }
            }
            .store(in: &cancellables)
    }

    private func activityType(for mode: WorkoutMode) -> WorkoutActivityType {
        switch mode {
        case .hiit, .tabata, .emom, .amrap, .pyramid:
            return .highIntensityIntervalTraining
        case .custom:
            return .functionalStrengthTraining
        }
    }
}
