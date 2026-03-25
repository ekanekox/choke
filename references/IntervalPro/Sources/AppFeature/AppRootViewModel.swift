import Analytics
import Combine
import CueEngine
import DataStore
import Foundation
import HealthEngine
import IntervalModels
import Monetization
import SyncEngine
import TimerCore
import WorkoutComposer
import WorkoutExecution

@MainActor
public final class AppRootViewModel: ObservableObject {
    @Published public var presets: [WorkoutPreset] = []
    @Published public var generatedPlan: WorkoutPlan?
    @Published public var timerState: TimerState = .idle
    @Published public var selectedTab: AppScreen = .home
    @Published public var showPremiumUpsell = false

    public let workoutRepository: FileWorkoutRepository
    public let sessionRepository: FileSessionRepository
    public let syncService: CloudKitSyncService
    public let entitlementService: StoreKitEntitlementService
    public let analyticsTracker: ConsoleAnalyticsTracker

    private let timerEngine: MonotonicTimerEngine
    private let cueScheduler: DefaultCueScheduler
    private let healthService: DefaultHealthService
    private let workoutExecutor: WorkoutExecutor

    private var cancellables = Set<AnyCancellable>()

    public init(baseDirectory: URL? = nil) {
        self.workoutRepository = FileWorkoutRepository(baseDirectory: baseDirectory)
        self.sessionRepository = FileSessionRepository(baseDirectory: baseDirectory)
        self.syncService = CloudKitSyncService(workoutRepository: workoutRepository)
        self.entitlementService = StoreKitEntitlementService()
        self.analyticsTracker = ConsoleAnalyticsTracker()

        self.timerEngine = MonotonicTimerEngine()
        self.cueScheduler = DefaultCueScheduler()
        self.healthService = DefaultHealthService()

        self.workoutExecutor = WorkoutExecutor(
            timerEngine: timerEngine,
            cueScheduler: cueScheduler,
            healthService: healthService,
            analytics: analyticsTracker
        )

        bindTimerState()
    }

    public func bootstrap() {
        Task {
            presets = (try? await workoutRepository.fetchPresets()) ?? []
            if presets.isEmpty {
                try? await seedPresets()
                presets = (try? await workoutRepository.fetchPresets()) ?? []
            }
        }
    }

    public func createFromWizard(_ selection: CreateWizardSelection, name: String) {
        Task {
            let request = CreateWizardPresetBuilder.request(from: selection, name: name)
            if request.isPremiumMode {
                let isAllowed = await entitlementService.isFeatureEnabled(.advancedModes)
                if !isAllowed {
                    showPremiumUpsell = true
                    return
                }
            }

            generatedPlan = try? WorkoutComposer.generatePlan(from: request)
        }
    }

    public func saveCurrentPlanAsPreset(name: String, isPremium: Bool) {
        guard let generatedPlan else { return }

        Task {
            let preset = WorkoutPreset(
                name: name,
                mode: generatedPlan.mode,
                steps: generatedPlan.segments.map(\.step),
                tags: ["custom"],
                isPremium: isPremium,
                updatedAt: Date()
            )

            try? await workoutRepository.savePreset(preset)
            presets = (try? await workoutRepository.fetchPresets()) ?? []
            analyticsTracker.track(.presetCreated, properties: ["mode": preset.mode.rawValue])
        }
    }

    public func startGeneratedWorkout() {
        guard let generatedPlan else { return }

        Task {
            try? await workoutExecutor.start(plan: generatedPlan, source: .iphone)
            selectedTab = .workout
        }
    }

    public func pauseWorkout() {
        workoutExecutor.pause()
    }

    public func resumeWorkout() {
        workoutExecutor.resume()
    }

    public func skipStep() {
        workoutExecutor.skipStep()
    }

    public func adjustStep(seconds: Int) {
        workoutExecutor.adjustCurrentStep(seconds: seconds)
    }

    public func shareLink(for preset: WorkoutPreset) async -> URL? {
        try? await syncService.makeShareLink(for: preset.id)
    }

    public func importShareLink(_ url: URL) {
        Task {
            guard let imported = try? await syncService.importShareLink(url) else { return }
            presets.insert(imported, at: 0)
            analyticsTracker.track(.shareLinkImported, properties: ["presetId": imported.id.uuidString])
        }
    }

    private func bindTimerState() {
        workoutExecutor.statePublisher
            .receive(on: DispatchQueue.main)
            .sink { [weak self] state in
                self?.timerState = state
            }
            .store(in: &cancellables)
    }

    private func seedPresets() async throws {
        let templates = WorkoutComposer.quickPresetTemplates()
        for template in templates {
            try await workoutRepository.savePreset(template.preset)
        }
    }
}

public enum AppScreen: String, CaseIterable, Identifiable {
    case onboarding
    case home
    case create
    case library
    case workout
    case summary
    case analytics
    case settings
    case premium

    public var id: String { rawValue }
}
