import Foundation
import IntervalModels

public enum WorkoutPlanValidator {
    public static func validate(_ plan: WorkoutPlan) -> Bool {
        guard !plan.segments.isEmpty else { return false }

        var previousEnd = 0
        for segment in plan.segments {
            guard segment.startOffsetSec >= previousEnd else { return false }
            guard segment.endOffsetSec > segment.startOffsetSec else { return false }
            previousEnd = segment.endOffsetSec
        }

        return true
    }
}
