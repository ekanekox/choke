import Combine
import Foundation
import IntervalModels
@testable import TimerCore
@testable import WorkoutComposer
import Testing

@Test("Tabata builds expected duration")
func tabataBuildsExpectedDuration() throws {
    let plan = try WorkoutComposer.generatePlan(
        from: .tabata(name: "Tabata", rounds: 8, warmupSec: 30, cooldownSec: 30)
    )

    #expect(plan.mode == .tabata)
    #expect(plan.totalDurationSec == (30 + (8 * 20) + (7 * 10) + 30))
}

@Test("EMOM rounds convert to minute boundaries")
func emomBuildsMinuteBoundaries() throws {
    let plan = try WorkoutComposer.generatePlan(
        from: .emom(name: "EMOM", minutes: 5, workSec: 40, warmupSec: 0, cooldownSec: 0)
    )

    #expect(plan.totalDurationSec == 300)
    #expect(plan.segments.filter { $0.step.kind == .work }.count == 5)
    #expect(plan.segments.filter { $0.step.kind == .rest }.allSatisfy { $0.durationSec == 20 })
}

@Test("Pyramid ascends and descends")
func pyramidBuildsExpectedPattern() throws {
    let plan = try WorkoutComposer.generatePlan(
        from: .pyramid(name: "Pyramid", startSec: 10, peakSec: 30, stepSec: 10, restSec: 5, warmupSec: 0, cooldownSec: 0)
    )

    let workDurations = plan.segments.filter { $0.step.kind == .work }.map(\.durationSec)
    #expect(workDurations == [10, 20, 30, 20, 10])
}

@Test("Timer engine reaches completed state")
func timerCompletesPlan() async throws {
    let engine = MonotonicTimerEngine()
    let stateStore = AsyncStateStore()

    let cancellable = engine.statePublisher
        .sink { state in
            Task {
                await stateStore.set(state)
            }
        }

    let plan = WorkoutPlan(
        name: "Short",
        mode: .custom,
        segments: [
            WorkoutSegment(step: IntervalStep(kind: .work, durationSec: 1, colorToken: .work), startOffsetSec: 0, endOffsetSec: 1, roundIndex: 1, cycleIndex: 1),
            WorkoutSegment(step: IntervalStep(kind: .rest, durationSec: 1, colorToken: .rest), startOffsetSec: 1, endOffsetSec: 2, roundIndex: 1, cycleIndex: 1)
        ]
    )

    engine.start(plan: plan)
    try await Task.sleep(for: .seconds(3))

    let latest = await stateStore.value
    #expect(latest.playbackState == .completed)
    cancellable.cancel()
}

@Test("Skipping step advances to next segment")
func timerSkipAdvances() async throws {
    let engine = MonotonicTimerEngine()
    let stateStore = AsyncStateStore()

    let cancellable = engine.statePublisher
        .sink { state in
            Task {
                await stateStore.set(state)
            }
        }

    let plan = WorkoutPlan(
        name: "Skip",
        mode: .custom,
        segments: [
            WorkoutSegment(step: IntervalStep(kind: .work, durationSec: 10, colorToken: .work), startOffsetSec: 0, endOffsetSec: 10, roundIndex: 1, cycleIndex: 1),
            WorkoutSegment(step: IntervalStep(kind: .rest, durationSec: 10, colorToken: .rest), startOffsetSec: 10, endOffsetSec: 20, roundIndex: 1, cycleIndex: 1)
        ]
    )

    engine.start(plan: plan)
    engine.skipStep()
    try await Task.sleep(for: .milliseconds(250))

    let latest = await stateStore.value
    #expect(latest.currentSegment?.step.kind == .rest)
    cancellable.cancel()
}

actor AsyncStateStore {
    private(set) var value: TimerState = .idle

    func set(_ state: TimerState) {
        value = state
    }
}
