import Foundation
import IntervalModels

public enum TimelineEventFactory {
    public static func makeTimelineEvents(for plan: WorkoutPlan) -> [TimelineEvent] {
        var events: [TimelineEvent] = []

        for (index, segment) in plan.segments.enumerated() {
            events.append(TimelineEvent(type: .stepStarted, offsetSec: segment.startOffsetSec, segmentIndex: index))
            events.append(TimelineEvent(type: .stepEnded, offsetSec: segment.endOffsetSec, segmentIndex: index))

            if segment.durationSec >= 10 {
                events.append(
                    TimelineEvent(
                        type: .lastTenSeconds,
                        offsetSec: segment.endOffsetSec - 10,
                        segmentIndex: index
                    )
                )
            }
        }

        events.append(TimelineEvent(type: .workoutCompleted, offsetSec: plan.totalDurationSec, segmentIndex: nil))
        return events.sorted { $0.offsetSec < $1.offsetSec }
    }
}
