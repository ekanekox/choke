import Combine
import Foundation

public protocol TimerEngine: AnyObject {
    func start(plan: WorkoutPlan)
    func pause()
    func resume()
    func skipStep()
    func adjustCurrentStep(seconds: Int)
    var statePublisher: AnyPublisher<TimerState, Never> { get }
}

public protocol CueScheduling {
    func schedule(for timeline: [TimelineEvent], profile: CueProfile)
}

public protocol WorkoutRepository {
    func savePreset(_ preset: WorkoutPreset) async throws
    func fetchPresets() async throws -> [WorkoutPreset]
}

public protocol SyncService {
    func syncNow() async throws
    func makeShareLink(for presetId: UUID) async throws -> URL
    func importShareLink(_ url: URL) async throws -> WorkoutPreset
}

public protocol HealthService: Sendable {
    func requestPermissions() async throws
    func startWorkout(type: WorkoutActivityType) async throws
    func finalizeWorkout(session: WorkoutSession, metrics: SessionMetrics) async throws
}

public protocol EntitlementService {
    func currentEntitlement() async -> EntitlementTier
    func isFeatureEnabled(_ feature: PremiumFeature) async -> Bool
    func purchasePremium() async throws
    func restorePurchases() async throws
}

public protocol AnalyticsTracking {
    func track(_ event: AnalyticsEventName, properties: [String: String])
}

public protocol SessionRepository {
    func saveSession(_ session: WorkoutSession, metrics: SessionMetrics?) async throws
    func fetchSessions(limit: Int) async throws -> [WorkoutSession]
}
