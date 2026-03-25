import Foundation
import IntervalModels

public struct TrackedEvent: Sendable, Hashable {
    public var name: AnalyticsEventName
    public var properties: [String: String]
    public var timestamp: Date

    public init(name: AnalyticsEventName, properties: [String: String], timestamp: Date = Date()) {
        self.name = name
        self.properties = properties
        self.timestamp = timestamp
    }
}

public final class ConsoleAnalyticsTracker: AnalyticsTracking {
    public private(set) var events: [TrackedEvent] = []

    public init() {}

    public func track(_ event: AnalyticsEventName, properties: [String: String] = [:]) {
        events.append(TrackedEvent(name: event, properties: properties))
        #if DEBUG
        print("[Analytics] \(event.rawValue): \(properties)")
        #endif
    }
}
