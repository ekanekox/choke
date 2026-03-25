import Foundation

public enum PremiumFeature: String, Codable, CaseIterable, Sendable {
    case advancedModes
    case unlimitedPresets
    case advancedAudioCues
    case fullAnalytics
    case templatePublishing
    case coachCollections
}

public enum AnalyticsEventName: String, Codable, CaseIterable, Sendable {
    case onboardingCompleted = "onboarding_completed"
    case presetCreated = "preset_created"
    case workoutStarted = "workout_started"
    case workoutCompleted = "workout_completed"
    case workoutAbandoned = "workout_abandoned"
    case alertMissed = "alert_missed"
    case shareLinkCreated = "share_link_created"
    case shareLinkImported = "share_link_imported"
    case subscriptionStarted = "subscription_started"
    case subscriptionRenewed = "subscription_renewed"
}

public struct WorkoutTemplate: Identifiable, Codable, Sendable, Hashable {
    public let id: UUID
    public var title: String
    public var description: String
    public var preset: WorkoutPreset
    public var category: String

    public init(
        id: UUID = UUID(),
        title: String,
        description: String,
        preset: WorkoutPreset,
        category: String
    ) {
        self.id = id
        self.title = title
        self.description = description
        self.preset = preset
        self.category = category
    }
}
