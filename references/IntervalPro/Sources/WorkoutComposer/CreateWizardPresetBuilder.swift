import Foundation
import IntervalModels

public struct CreateWizardSelection: Sendable {
    public var mode: WorkoutMode
    public var workSec: Int
    public var restSec: Int
    public var rounds: Int

    public init(mode: WorkoutMode, workSec: Int, restSec: Int, rounds: Int) {
        self.mode = mode
        self.workSec = workSec
        self.restSec = restSec
        self.rounds = rounds
    }
}

public enum CreateWizardPresetBuilder {
    // 3-tap wizard mapping: mode -> key params -> preview/create
    public static func request(from selection: CreateWizardSelection, name: String) -> WorkoutGenerationRequest {
        switch selection.mode {
        case .hiit:
            return .hiit(
                name: name,
                workSec: selection.workSec,
                restSec: selection.restSec,
                rounds: selection.rounds,
                cycles: 1,
                cycleRestSec: 0,
                warmupSec: 30,
                cooldownSec: 30
            )
        case .tabata:
            return .tabata(name: name, rounds: selection.rounds, warmupSec: 30, cooldownSec: 30)
        case .emom:
            return .emom(name: name, minutes: selection.rounds, workSec: selection.workSec, warmupSec: 30, cooldownSec: 30)
        case .amrap:
            return .amrap(name: name, totalMinutes: selection.rounds, workSec: selection.workSec, restSec: selection.restSec, warmupSec: 30, cooldownSec: 30)
        case .pyramid:
            return .pyramid(name: name, startSec: selection.workSec, peakSec: selection.workSec + (selection.rounds * 10), stepSec: 10, restSec: selection.restSec, warmupSec: 30, cooldownSec: 30)
        case .custom:
            let steps = [
                IntervalStep(kind: .work, durationSec: selection.workSec, colorToken: .work),
                IntervalStep(kind: .rest, durationSec: selection.restSec, colorToken: .rest)
            ]
            return .custom(name: name, steps: steps, rounds: selection.rounds, cycles: 1)
        }
    }
}
