import Foundation
import IntervalModels
#if canImport(UserNotifications)
import UserNotifications
#endif

public struct ScheduledCue: Sendable, Hashable {
    public var event: TimelineEvent
    public var spokenText: String

    public init(event: TimelineEvent, spokenText: String) {
        self.event = event
        self.spokenText = spokenText
    }
}

public final class DefaultCueScheduler: CueScheduling {
    public private(set) var scheduledCues: [ScheduledCue] = []

    public init() {}

    public func schedule(for timeline: [TimelineEvent], profile: CueProfile) {
        scheduledCues = timeline.map { event in
            ScheduledCue(event: event, spokenText: Self.spokenCue(for: event))
        }

        guard !profile.silentMode else { return }

        #if canImport(UserNotifications)
        let center = UNUserNotificationCenter.current()
        center.removePendingNotificationRequests(withIdentifiers: scheduledCues.map { $0.event.eventID })

        if profile.soundEnabled || profile.voiceEnabled {
            for cue in scheduledCues where cue.event.offsetSec > 0 {
                let content = UNMutableNotificationContent()
                content.title = "IntervalPro"
                content.body = cue.spokenText
                content.sound = profile.soundEnabled ? .default : nil

                let trigger = UNTimeIntervalNotificationTrigger(
                    timeInterval: TimeInterval(cue.event.offsetSec),
                    repeats: false
                )

                let request = UNNotificationRequest(
                    identifier: cue.event.eventID,
                    content: content,
                    trigger: trigger
                )

                center.add(request)
            }
        }
        #endif
    }

    private static func spokenCue(for event: TimelineEvent) -> String {
        switch event.type {
        case .stepStarted:
            return "Start"
        case .stepEnded:
            return "Switch"
        case .lastTenSeconds:
            return "Last ten seconds"
        case .workoutCompleted:
            return "Workout complete"
        }
    }
}

private extension TimelineEvent {
    var eventID: String {
        "\(type.rawValue)-\(offsetSec)-\(segmentIndex ?? -1)"
    }
}
