import Foundation

public enum WorkoutMode: String, Codable, CaseIterable, Sendable {
    case hiit
    case tabata
    case emom
    case amrap
    case pyramid
    case custom
}

public enum StepKind: String, Codable, CaseIterable, Sendable {
    case warmup
    case work
    case rest
    case recovery
    case cooldown
}

public enum PhaseColorToken: String, Codable, CaseIterable, Sendable {
    case work
    case rest
    case warmup
    case recovery
    case alert
}

public enum SessionSource: String, Codable, Sendable {
    case iphone
    case ipad
    case watchStandalone
    case watchMirrored
}

public enum SessionStatus: String, Codable, Sendable {
    case planned
    case running
    case paused
    case completed
    case abandoned
}

public struct WorkoutPreset: Identifiable, Codable, Sendable, Hashable {
    public let id: UUID
    public var name: String
    public var mode: WorkoutMode
    public var steps: [IntervalStep]
    public var tags: [String]
    public var isPremium: Bool
    public var updatedAt: Date

    public init(
        id: UUID = UUID(),
        name: String,
        mode: WorkoutMode,
        steps: [IntervalStep],
        tags: [String] = [],
        isPremium: Bool,
        updatedAt: Date = Date()
    ) {
        self.id = id
        self.name = name
        self.mode = mode
        self.steps = steps
        self.tags = tags
        self.isPremium = isPremium
        self.updatedAt = updatedAt
    }
}

public struct IntervalStep: Identifiable, Codable, Sendable, Hashable {
    public let id: UUID
    public var kind: StepKind
    public var durationSec: Int
    public var targetRPE: Int?
    public var colorToken: PhaseColorToken
    public var cueProfileId: UUID?

    public init(
        id: UUID = UUID(),
        kind: StepKind,
        durationSec: Int,
        targetRPE: Int? = nil,
        colorToken: PhaseColorToken,
        cueProfileId: UUID? = nil
    ) {
        self.id = id
        self.kind = kind
        self.durationSec = durationSec
        self.targetRPE = targetRPE
        self.colorToken = colorToken
        self.cueProfileId = cueProfileId
    }
}

public struct WorkoutSession: Identifiable, Codable, Sendable, Hashable {
    public let id: UUID
    public var presetId: UUID?
    public var startedAt: Date
    public var endedAt: Date?
    public var source: SessionSource
    public var status: SessionStatus
    public var plannedSec: Int
    public var actualSec: Int

    public init(
        id: UUID = UUID(),
        presetId: UUID? = nil,
        startedAt: Date = Date(),
        endedAt: Date? = nil,
        source: SessionSource,
        status: SessionStatus,
        plannedSec: Int,
        actualSec: Int
    ) {
        self.id = id
        self.presetId = presetId
        self.startedAt = startedAt
        self.endedAt = endedAt
        self.source = source
        self.status = status
        self.plannedSec = plannedSec
        self.actualSec = actualSec
    }
}

public struct SessionMetrics: Codable, Sendable, Hashable {
    public var sessionId: UUID
    public var caloriesKcal: Double?
    public var avgHeartRate: Double?
    public var maxHeartRate: Double?
    public var adherencePct: Double

    public init(
        sessionId: UUID,
        caloriesKcal: Double? = nil,
        avgHeartRate: Double? = nil,
        maxHeartRate: Double? = nil,
        adherencePct: Double
    ) {
        self.sessionId = sessionId
        self.caloriesKcal = caloriesKcal
        self.avgHeartRate = avgHeartRate
        self.maxHeartRate = maxHeartRate
        self.adherencePct = adherencePct
    }
}

public struct WorkoutSegment: Identifiable, Codable, Sendable, Hashable {
    public let id: UUID
    public var step: IntervalStep
    public var startOffsetSec: Int
    public var endOffsetSec: Int
    public var roundIndex: Int
    public var cycleIndex: Int

    public init(
        id: UUID = UUID(),
        step: IntervalStep,
        startOffsetSec: Int,
        endOffsetSec: Int,
        roundIndex: Int,
        cycleIndex: Int
    ) {
        self.id = id
        self.step = step
        self.startOffsetSec = startOffsetSec
        self.endOffsetSec = endOffsetSec
        self.roundIndex = roundIndex
        self.cycleIndex = cycleIndex
    }

    public var durationSec: Int {
        endOffsetSec - startOffsetSec
    }
}

public struct WorkoutPlan: Identifiable, Codable, Sendable, Hashable {
    public let id: UUID
    public var name: String
    public var mode: WorkoutMode
    public var segments: [WorkoutSegment]
    public var generatedAt: Date

    public init(
        id: UUID = UUID(),
        name: String,
        mode: WorkoutMode,
        segments: [WorkoutSegment],
        generatedAt: Date = Date()
    ) {
        self.id = id
        self.name = name
        self.mode = mode
        self.segments = segments
        self.generatedAt = generatedAt
    }

    public var totalDurationSec: Int {
        segments.last?.endOffsetSec ?? 0
    }
}

public enum TimerPlaybackState: String, Codable, Sendable {
    case idle
    case running
    case paused
    case completed
}

public struct TimerState: Sendable, Equatable {
    public var playbackState: TimerPlaybackState
    public var currentSegmentIndex: Int?
    public var currentSegment: WorkoutSegment?
    public var elapsedSec: Int
    public var secondsRemainingInSegment: Int
    public var totalDurationSec: Int
    public var updatedAt: Date

    public init(
        playbackState: TimerPlaybackState,
        currentSegmentIndex: Int?,
        currentSegment: WorkoutSegment?,
        elapsedSec: Int,
        secondsRemainingInSegment: Int,
        totalDurationSec: Int,
        updatedAt: Date = Date()
    ) {
        self.playbackState = playbackState
        self.currentSegmentIndex = currentSegmentIndex
        self.currentSegment = currentSegment
        self.elapsedSec = elapsedSec
        self.secondsRemainingInSegment = secondsRemainingInSegment
        self.totalDurationSec = totalDurationSec
        self.updatedAt = updatedAt
    }

    public static let idle = TimerState(
        playbackState: .idle,
        currentSegmentIndex: nil,
        currentSegment: nil,
        elapsedSec: 0,
        secondsRemainingInSegment: 0,
        totalDurationSec: 0
    )
}

public enum TimelineEventType: String, Codable, Sendable {
    case stepStarted
    case stepEnded
    case lastTenSeconds
    case workoutCompleted
}

public struct TimelineEvent: Codable, Sendable, Hashable {
    public var type: TimelineEventType
    public var offsetSec: Int
    public var segmentIndex: Int?

    public init(type: TimelineEventType, offsetSec: Int, segmentIndex: Int? = nil) {
        self.type = type
        self.offsetSec = offsetSec
        self.segmentIndex = segmentIndex
    }
}

public struct CueProfile: Identifiable, Codable, Sendable, Hashable {
    public let id: UUID
    public var name: String
    public var voiceEnabled: Bool
    public var hapticEnabled: Bool
    public var soundEnabled: Bool
    public var lastTenSecondsVoiceCue: Bool
    public var duckBackgroundMusic: Bool
    public var silentMode: Bool

    public init(
        id: UUID = UUID(),
        name: String,
        voiceEnabled: Bool,
        hapticEnabled: Bool,
        soundEnabled: Bool,
        lastTenSecondsVoiceCue: Bool,
        duckBackgroundMusic: Bool,
        silentMode: Bool
    ) {
        self.id = id
        self.name = name
        self.voiceEnabled = voiceEnabled
        self.hapticEnabled = hapticEnabled
        self.soundEnabled = soundEnabled
        self.lastTenSecondsVoiceCue = lastTenSecondsVoiceCue
        self.duckBackgroundMusic = duckBackgroundMusic
        self.silentMode = silentMode
    }

    public static let balanced = CueProfile(
        name: "Balanced",
        voiceEnabled: true,
        hapticEnabled: true,
        soundEnabled: true,
        lastTenSecondsVoiceCue: true,
        duckBackgroundMusic: true,
        silentMode: false
    )
}

#if canImport(HealthKit)
import HealthKit
public typealias WorkoutActivityType = HKWorkoutActivityType
#else
public enum WorkoutActivityType: String, Codable, Sendable {
    case highIntensityIntervalTraining
    case running
    case functionalStrengthTraining
}
#endif

public enum EntitlementTier: String, Codable, Sendable {
    case free
    case trial
    case premium
}
