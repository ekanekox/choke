import Foundation
#if canImport(SwiftUI)
import SwiftUI

public enum UHTheme {
    public static let background = Color(hex: UHColorToken.black.rawValue)
    public static let primaryText = Color(hex: UHColorToken.white.rawValue)
    public static let secondaryText = Color(hex: UHColorToken.textSecondary.rawValue)
    public static let surface = Color(hex: UHColorToken.surfacePrimary.rawValue)
    public static let surfaceSecondary = Color(hex: UHColorToken.surfaceSecondary.rawValue)

    public static func phaseColor(kind: StepKindLike) -> Color {
        switch kind {
        case .work:
            return Color(hex: UHColorToken.work.rawValue)
        case .rest:
            return Color(hex: UHColorToken.rest.rawValue)
        case .warmup:
            return Color(hex: UHColorToken.warmup.rawValue)
        case .recovery, .cooldown:
            return Color(hex: UHColorToken.recovery.rawValue)
        case .alert:
            return Color(hex: UHColorToken.alert.rawValue)
        }
    }
}

public enum StepKindLike {
    case warmup
    case work
    case rest
    case recovery
    case cooldown
    case alert
}

public struct PrimaryWorkoutButtonStyle: ButtonStyle {
    public init() {}

    public func makeBody(configuration: Configuration) -> some View {
        configuration.label
            .font(.custom(UHTypographyToken.graphik.rawValue, size: 17))
            .foregroundStyle(UHTheme.primaryText)
            .frame(maxWidth: .infinity)
            .frame(minHeight: 44)
            .background(
                RoundedRectangle(cornerRadius: UHRadii.button)
                    .fill(configuration.isPressed ? UHTheme.surfaceSecondary : UHTheme.surface)
            )
    }
}

private extension Color {
    init(hex: String) {
        let cleaned = hex.replacingOccurrences(of: "#", with: "")
        let value = Int(cleaned, radix: 16) ?? 0
        let red = Double((value >> 16) & 0xFF) / 255.0
        let green = Double((value >> 8) & 0xFF) / 255.0
        let blue = Double(value & 0xFF) / 255.0
        self.init(red: red, green: green, blue: blue)
    }
}
#endif
