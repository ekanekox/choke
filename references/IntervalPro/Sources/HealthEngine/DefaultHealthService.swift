import Foundation
import IntervalModels
#if canImport(HealthKit)
import HealthKit
#endif

public final class DefaultHealthService: HealthService,  Sendable {
    #if canImport(HealthKit)
    private let healthStore = HKHealthStore()
    #endif

    public init() {}

    public func requestPermissions() async throws {
        #if canImport(HealthKit)
        guard HKHealthStore.isHealthDataAvailable() else { return }

        let write: Set<HKSampleType> = [
            HKObjectType.workoutType(),
            HKObjectType.quantityType(forIdentifier: .activeEnergyBurned)!
        ]

        let read: Set<HKObjectType> = [
            HKObjectType.quantityType(forIdentifier: .heartRate)!,
            HKObjectType.quantityType(forIdentifier: .activeEnergyBurned)!
        ]

        try await healthStore.requestAuthorization(toShare: write, read: read)
        #endif
    }

    public func startWorkout(type: WorkoutActivityType) async throws {
        #if canImport(HealthKit) && !os(macOS)
        let config = HKWorkoutConfiguration()
        config.activityType = type
        config.locationType = .indoor
        _ = try HKWorkoutSession(healthStore: healthStore, configuration: config)
        #else
        _ = type
        #endif
    }

    public func finalizeWorkout(session: WorkoutSession, metrics: SessionMetrics) async throws {
        #if canImport(HealthKit) && !os(macOS)
        let activityType: HKWorkoutActivityType = .highIntensityIntervalTraining
        let workout = HKWorkout(
            activityType: activityType,
            start: session.startedAt,
            end: session.endedAt ?? Date(),
            duration: TimeInterval(session.actualSec),
            totalEnergyBurned: metrics.caloriesKcal.map {
                HKQuantity(unit: .kilocalorie(), doubleValue: $0)
            },
            totalDistance: nil,
            metadata: [
                HKMetadataKeyWorkoutBrandName: "IntervalPro",
                "adherencePct": metrics.adherencePct
            ]
        )

        try await healthStore.save(workout)
        #else
        _ = session
        _ = metrics
        #endif
    }
}
