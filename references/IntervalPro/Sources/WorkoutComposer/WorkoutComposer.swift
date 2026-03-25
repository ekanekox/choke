import Foundation
import IntervalModels

public enum WorkoutGenerationRequest: Sendable {
    case hiit(name: String, workSec: Int, restSec: Int, rounds: Int, cycles: Int, cycleRestSec: Int, warmupSec: Int, cooldownSec: Int)
    case tabata(name: String, rounds: Int, warmupSec: Int, cooldownSec: Int)
    case emom(name: String, minutes: Int, workSec: Int, warmupSec: Int, cooldownSec: Int)
    case amrap(name: String, totalMinutes: Int, workSec: Int, restSec: Int, warmupSec: Int, cooldownSec: Int)
    case pyramid(name: String, startSec: Int, peakSec: Int, stepSec: Int, restSec: Int, warmupSec: Int, cooldownSec: Int)
    case custom(name: String, steps: [IntervalStep], rounds: Int, cycles: Int)

    public var mode: WorkoutMode {
        switch self {
        case .hiit: .hiit
        case .tabata: .tabata
        case .emom: .emom
        case .amrap: .amrap
        case .pyramid: .pyramid
        case .custom: .custom
        }
    }

    public var isPremiumMode: Bool {
        switch self {
        case .emom, .amrap, .pyramid:
            return true
        case .hiit, .tabata, .custom:
            return false
        }
    }
}

public enum WorkoutComposer {
    public static func generatePlan(from request: WorkoutGenerationRequest) throws -> WorkoutPlan {
        var segments: [WorkoutSegment] = []
        var cursor = 0
        var round = 1
        var cycle = 1

        func append(_ step: IntervalStep, roundIndex: Int, cycleIndex: Int) {
            let start = cursor
            let end = cursor + step.durationSec
            segments.append(
                WorkoutSegment(
                    step: step,
                    startOffsetSec: start,
                    endOffsetSec: end,
                    roundIndex: roundIndex,
                    cycleIndex: cycleIndex
                )
            )
            cursor = end
        }

        switch request {
        case let .hiit(name, workSec, restSec, rounds, cycles, cycleRestSec, warmupSec, cooldownSec):
            try assertPositive([workSec, restSec, rounds, cycles])
            if warmupSec > 0 {
                append(step(kind: .warmup, durationSec: warmupSec, color: .warmup), roundIndex: 0, cycleIndex: 0)
            }

            for cycleIndex in 1...cycles {
                cycle = cycleIndex
                for roundIndex in 1...rounds {
                    round = roundIndex
                    append(step(kind: .work, durationSec: workSec, color: .work), roundIndex: round, cycleIndex: cycle)
                    append(step(kind: .rest, durationSec: restSec, color: .rest), roundIndex: round, cycleIndex: cycle)
                }
                if cycleIndex < cycles, cycleRestSec > 0 {
                    append(step(kind: .recovery, durationSec: cycleRestSec, color: .recovery), roundIndex: round, cycleIndex: cycle)
                }
            }

            if cooldownSec > 0 {
                append(step(kind: .cooldown, durationSec: cooldownSec, color: .recovery), roundIndex: round, cycleIndex: cycle)
            }

            return WorkoutPlan(name: name, mode: .hiit, segments: segments)

        case let .tabata(name, rounds, warmupSec, cooldownSec):
            try assertPositive([rounds])
            let workSec = 20
            let restSec = 10

            if warmupSec > 0 {
                append(step(kind: .warmup, durationSec: warmupSec, color: .warmup), roundIndex: 0, cycleIndex: 0)
            }

            for roundIndex in 1...rounds {
                round = roundIndex
                append(step(kind: .work, durationSec: workSec, color: .work), roundIndex: round, cycleIndex: 1)
                if roundIndex < rounds {
                    append(step(kind: .rest, durationSec: restSec, color: .rest), roundIndex: round, cycleIndex: 1)
                }
            }

            if cooldownSec > 0 {
                append(step(kind: .cooldown, durationSec: cooldownSec, color: .recovery), roundIndex: round, cycleIndex: 1)
            }

            return WorkoutPlan(name: name, mode: .tabata, segments: segments)

        case let .emom(name, minutes, workSec, warmupSec, cooldownSec):
            try assertPositive([minutes, workSec])
            guard workSec < 60 else {
                throw IntervalProError.invalidPlan
            }

            if warmupSec > 0 {
                append(step(kind: .warmup, durationSec: warmupSec, color: .warmup), roundIndex: 0, cycleIndex: 0)
            }

            for minute in 1...minutes {
                round = minute
                append(step(kind: .work, durationSec: workSec, color: .work), roundIndex: round, cycleIndex: 1)
                let rest = 60 - workSec
                if rest > 0 {
                    append(step(kind: .rest, durationSec: rest, color: .rest), roundIndex: round, cycleIndex: 1)
                }
            }

            if cooldownSec > 0 {
                append(step(kind: .cooldown, durationSec: cooldownSec, color: .recovery), roundIndex: round, cycleIndex: 1)
            }

            return WorkoutPlan(name: name, mode: .emom, segments: segments)

        case let .amrap(name, totalMinutes, workSec, restSec, warmupSec, cooldownSec):
            try assertPositive([totalMinutes, workSec])
            let totalDuration = totalMinutes * 60

            if warmupSec > 0 {
                append(step(kind: .warmup, durationSec: warmupSec, color: .warmup), roundIndex: 0, cycleIndex: 0)
            }

            var workBlock = step(kind: .work, durationSec: workSec, color: .work)
            let restBlock = step(kind: .rest, durationSec: max(restSec, 0), color: .rest)

            while cursor < totalDuration {
                round += 1
                if cursor + workBlock.durationSec > totalDuration {
                    workBlock.durationSec = totalDuration - cursor
                }
                append(workBlock, roundIndex: round, cycleIndex: 1)

                guard cursor < totalDuration else { break }
                if restBlock.durationSec > 0 {
                    var trimmedRest = restBlock
                    if cursor + trimmedRest.durationSec > totalDuration {
                        trimmedRest.durationSec = totalDuration - cursor
                    }
                    append(trimmedRest, roundIndex: round, cycleIndex: 1)
                }
            }

            if cooldownSec > 0 {
                append(step(kind: .cooldown, durationSec: cooldownSec, color: .recovery), roundIndex: round, cycleIndex: 1)
            }

            return WorkoutPlan(name: name, mode: .amrap, segments: segments)

        case let .pyramid(name, startSec, peakSec, stepSec, restSec, warmupSec, cooldownSec):
            try assertPositive([startSec, peakSec, stepSec])
            guard startSec <= peakSec else {
                throw IntervalProError.invalidPlan
            }

            if warmupSec > 0 {
                append(step(kind: .warmup, durationSec: warmupSec, color: .warmup), roundIndex: 0, cycleIndex: 0)
            }

            var levels: [Int] = []
            var value = startSec
            while value <= peakSec {
                levels.append(value)
                value += stepSec
            }

            let descending = levels.dropLast().reversed()
            let sequence = levels + descending

            for (index, seconds) in sequence.enumerated() {
                round = index + 1
                append(step(kind: .work, durationSec: seconds, color: .work), roundIndex: round, cycleIndex: 1)
                if restSec > 0, index < sequence.count - 1 {
                    append(step(kind: .rest, durationSec: restSec, color: .rest), roundIndex: round, cycleIndex: 1)
                }
            }

            if cooldownSec > 0 {
                append(step(kind: .cooldown, durationSec: cooldownSec, color: .recovery), roundIndex: round, cycleIndex: 1)
            }

            return WorkoutPlan(name: name, mode: .pyramid, segments: segments)

        case let .custom(name, steps, rounds, cycles):
            try assertPositive([rounds, cycles])
            guard !steps.isEmpty else {
                throw IntervalProError.invalidPlan
            }

            for cycleIndex in 1...cycles {
                cycle = cycleIndex
                for roundIndex in 1...rounds {
                    round = roundIndex
                    for step in steps {
                        append(step, roundIndex: round, cycleIndex: cycle)
                    }
                }
            }

            return WorkoutPlan(name: name, mode: .custom, segments: segments)
        }
    }

    public static func quickPresetTemplates() -> [WorkoutTemplate] {
        [
            WorkoutTemplate(
                title: "Classic Tabata",
                description: "8 rounds of 20s work / 10s rest",
                preset: WorkoutPreset(
                    name: "Classic Tabata",
                    mode: .tabata,
                    steps: [
                        step(kind: .work, durationSec: 20, color: .work),
                        step(kind: .rest, durationSec: 10, color: .rest)
                    ],
                    isPremium: false
                ),
                category: "HIIT"
            ),
            WorkoutTemplate(
                title: "12m EMOM Strength",
                description: "Work each minute, recover with leftover time",
                preset: WorkoutPreset(
                    name: "12m EMOM Strength",
                    mode: .emom,
                    steps: [step(kind: .work, durationSec: 40, color: .work)],
                    isPremium: true
                ),
                category: "Strength"
            )
        ]
    }

    private static func step(kind: StepKind, durationSec: Int, color: PhaseColorToken) -> IntervalStep {
        IntervalStep(kind: kind, durationSec: durationSec, colorToken: color)
    }

    private static func assertPositive(_ values: [Int]) throws {
        guard values.allSatisfy({ $0 > 0 }) else {
            throw IntervalProError.invalidPlan
        }
    }
}
