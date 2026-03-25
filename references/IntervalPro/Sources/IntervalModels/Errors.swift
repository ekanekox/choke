import Foundation

public enum IntervalProError: LocalizedError {
    case invalidPlan
    case invalidShareURL
    case unsupportedModeForEntitlement
    case presetNotFound

    public var errorDescription: String? {
        switch self {
        case .invalidPlan:
            return "Workout plan is invalid and cannot be executed."
        case .invalidShareURL:
            return "Share URL is invalid or expired."
        case .unsupportedModeForEntitlement:
            return "Selected workout mode requires premium access."
        case .presetNotFound:
            return "Preset could not be found."
        }
    }
}
