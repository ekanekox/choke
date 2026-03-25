import Combine
import Foundation
import IntervalModels

public final class MonotonicTimerEngine: TimerEngine {
    public var statePublisher: AnyPublisher<TimerState, Never> {
        subject.eraseToAnyPublisher()
    }

    private let queue = DispatchQueue(label: "com.intervalpro.timer-engine")
    private let subject = CurrentValueSubject<TimerState, Never>(.idle)
    private var ticker: DispatchSourceTimer?

    private var plan: WorkoutPlan?
    private var segments: [WorkoutSegment] = []
    private var elapsedBeforePause: TimeInterval = 0
    private var runStartUptime: TimeInterval?
    private var playbackState: TimerPlaybackState = .idle

    public init() {}

    deinit {
        ticker?.setEventHandler {}
        ticker?.cancel()
        ticker = nil
    }

    public func start(plan: WorkoutPlan) {
        queue.sync {
            guard !plan.segments.isEmpty else {
                subject.send(.idle)
                return
            }

            self.plan = plan
            self.segments = plan.segments.sorted { $0.startOffsetSec < $1.startOffsetSec }
            self.elapsedBeforePause = 0
            self.runStartUptime = uptimeNow()
            self.playbackState = .running
            startTickerLockedIfNeeded()
            publishStateLocked()
        }
    }

    public func pause() {
        queue.sync {
            guard playbackState == .running else { return }
            elapsedBeforePause = effectiveElapsedLocked()
            runStartUptime = nil
            playbackState = .paused
            publishStateLocked()
        }
    }

    public func resume() {
        queue.sync {
            guard playbackState == .paused else { return }
            runStartUptime = uptimeNow()
            playbackState = .running
            startTickerLockedIfNeeded()
            publishStateLocked()
        }
    }

    public func skipStep() {
        queue.sync {
            guard plan != nil else { return }
            let elapsedSec = Int(effectiveElapsedLocked())

            guard let index = indexForElapsed(elapsedSec) else {
                completeLocked()
                return
            }

            elapsedBeforePause = TimeInterval(segments[index].endOffsetSec)
            if playbackState == .running {
                runStartUptime = uptimeNow()
            }
            publishStateLocked()
        }
    }

    public func adjustCurrentStep(seconds: Int) {
        guard seconds != 0 else { return }

        queue.sync {
            guard plan != nil else { return }
            let elapsedSec = Int(effectiveElapsedLocked())
            guard let index = indexForElapsed(elapsedSec) else { return }

            let currentDuration = segments[index].durationSec
            let updatedDuration = max(1, currentDuration + seconds)
            let delta = updatedDuration - currentDuration
            guard delta != 0 else { return }

            segments[index].step.durationSec = updatedDuration
            segments[index].endOffsetSec += delta

            if index + 1 < segments.count {
                for segmentIndex in (index + 1)..<segments.count {
                    segments[segmentIndex].startOffsetSec += delta
                    segments[segmentIndex].endOffsetSec += delta
                }
            }

            if var plan {
                plan.segments = segments
                self.plan = plan
            }

            let elapsed = Int(effectiveElapsedLocked())
            if let totalDuration = segments.last?.endOffsetSec, elapsed >= totalDuration {
                completeLocked()
                return
            }

            publishStateLocked()
        }
    }

    private func startTickerLockedIfNeeded() {
        guard ticker == nil else { return }

        let source = DispatchSource.makeTimerSource(queue: queue)
        source.schedule(deadline: .now(), repeating: .milliseconds(100), leeway: .milliseconds(40))
        source.setEventHandler { [weak self] in
            self?.tickLocked()
        }
        source.resume()
        ticker = source
    }

    private func tickLocked() {
        guard playbackState == .running else { return }
        publishStateLocked()

        let elapsed = Int(effectiveElapsedLocked())
        if let totalDuration = segments.last?.endOffsetSec, elapsed >= totalDuration {
            completeLocked()
        }
    }

    private func completeLocked() {
        playbackState = .completed
        elapsedBeforePause = TimeInterval(segments.last?.endOffsetSec ?? 0)
        runStartUptime = nil
        publishStateLocked()

        ticker?.setEventHandler {}
        ticker?.cancel()
        ticker = nil
    }

    private func publishStateLocked() {
        let elapsed = Int(effectiveElapsedLocked())
        let totalDuration = segments.last?.endOffsetSec ?? 0
        let index = indexForElapsed(elapsed)
        let segment = index.flatMap { segments[safe: $0] }

        let secondsRemaining: Int
        if let segment {
            secondsRemaining = max(segment.endOffsetSec - elapsed, 0)
        } else {
            secondsRemaining = 0
        }

        let state = TimerState(
            playbackState: playbackState,
            currentSegmentIndex: index,
            currentSegment: segment,
            elapsedSec: min(elapsed, totalDuration),
            secondsRemainingInSegment: secondsRemaining,
            totalDurationSec: totalDuration,
            updatedAt: Date()
        )

        subject.send(state)
    }

    private func effectiveElapsedLocked() -> TimeInterval {
        guard playbackState == .running, let runStartUptime else {
            return elapsedBeforePause
        }

        return elapsedBeforePause + max(uptimeNow() - runStartUptime, 0)
    }

    private func indexForElapsed(_ elapsedSec: Int) -> Int? {
        segments.firstIndex { elapsedSec < $0.endOffsetSec }
    }

    private func uptimeNow() -> TimeInterval {
        ProcessInfo.processInfo.systemUptime
    }
}

private extension Collection {
    subscript(safe index: Index) -> Element? {
        guard indices.contains(index) else { return nil }
        return self[index]
    }
}
