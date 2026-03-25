import Foundation

public enum UHColorToken: String, CaseIterable, Sendable {
    case black = "#000000"
    case white = "#FFFFFF"
    case surfacePrimary = "#101010"
    case surfaceSecondary = "#212121"
    case textSecondary = "#46494D"
    case work = "#0EFF27"
    case rest = "#037FFC"
    case warmup = "#FCDD00"
    case recovery = "#8CFB8D"
    case alert = "#FF0000"
}

public enum UHTypographyToken: String, CaseIterable, Sendable {
    case graphik = "graphik"
    case jetbrainsMono = "JetBrains Mono"
    case twkEverett = "twkEverett"
}

public enum UHSpacing {
    public static let xSmall: Double = 8
    public static let small: Double = 16
    public static let medium: Double = 24
    public static let large: Double = 32
    public static let xLarge: Double = 48
}

public enum UHRadii {
    public static let button: Double = 12
    public static let card: Double = 14
}
