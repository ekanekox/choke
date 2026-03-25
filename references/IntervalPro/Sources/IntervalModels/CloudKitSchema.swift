import Foundation

public enum CloudKitRecordType: String, CaseIterable, Sendable {
    case userProfile = "UserProfile"
    case preset = "Preset"
    case presetStep = "PresetStep"
    case session = "Session"
    case sessionMetric = "SessionMetric"
    case cueProfile = "CueProfile"
    case templateCollection = "TemplateCollection"
    case entitlementSnapshot = "EntitlementSnapshot"
}

public enum UniversalLinkContract {
    public static let host = "intervalpro.app"
    public static let presetPathPrefix = "/preset/"

    public static func presetURL(token: String) -> URL {
        URL(string: "https://\(host)\(presetPathPrefix)\(token)")!
    }
}
