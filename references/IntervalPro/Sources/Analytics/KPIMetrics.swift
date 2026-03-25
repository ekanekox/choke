import Foundation
import IntervalModels

public struct KPIReport: Sendable {
    public var weeklyActiveUsers: Int
    public var sessionsPerWeek: Double
    public var completionRate: Double
    public var missedAlertRate: Double
    public var d30Retention: Double
    public var premiumConversion: Double

    public init(
        weeklyActiveUsers: Int,
        sessionsPerWeek: Double,
        completionRate: Double,
        missedAlertRate: Double,
        d30Retention: Double,
        premiumConversion: Double
    ) {
        self.weeklyActiveUsers = weeklyActiveUsers
        self.sessionsPerWeek = sessionsPerWeek
        self.completionRate = completionRate
        self.missedAlertRate = missedAlertRate
        self.d30Retention = d30Retention
        self.premiumConversion = premiumConversion
    }
}

public enum KPICalculator {
    public static func report(
        sessions: [WorkoutSession],
        usersInWindow: Int,
        missedAlerts: Int,
        totalAlerts: Int,
        retainedUsers: Int,
        totalUsers: Int,
        premiumUsers: Int
    ) -> KPIReport {
        let completed = sessions.filter { $0.status == .completed }.count
        let completionRate = sessions.isEmpty ? 0 : Double(completed) / Double(sessions.count)
        let sessionsPerWeek = usersInWindow == 0 ? 0 : Double(sessions.count) / Double(usersInWindow)
        let missedRate = totalAlerts == 0 ? 0 : Double(missedAlerts) / Double(totalAlerts)
        let d30Retention = totalUsers == 0 ? 0 : Double(retainedUsers) / Double(totalUsers)
        let premiumConversion = totalUsers == 0 ? 0 : Double(premiumUsers) / Double(totalUsers)

        return KPIReport(
            weeklyActiveUsers: usersInWindow,
            sessionsPerWeek: sessionsPerWeek,
            completionRate: completionRate,
            missedAlertRate: missedRate,
            d30Retention: d30Retention,
            premiumConversion: premiumConversion
        )
    }
}
