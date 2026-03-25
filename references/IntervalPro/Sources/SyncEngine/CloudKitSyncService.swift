import DataStore
import Foundation
import IntervalModels
#if canImport(CloudKit)
import CloudKit
#endif

public actor CloudKitSyncService: SyncService {
    private let workoutRepository: FileWorkoutRepository
    private let shareHost: String

    #if canImport(CloudKit)
    private let privateDatabase: CKDatabase
    #endif

    public init(workoutRepository: FileWorkoutRepository, shareHost: String = UniversalLinkContract.host) {
        self.workoutRepository = workoutRepository
        self.shareHost = shareHost
        #if canImport(CloudKit)
        self.privateDatabase = CKContainer.default().privateCloudDatabase
        #endif
    }

    public func syncNow() async throws {
        #if canImport(CloudKit)
        // Schema placeholder for Phase 3 sync implementation.
        _ = privateDatabase
        #endif
        _ = try await workoutRepository.fetchPresets()
    }

    public func makeShareLink(for presetId: UUID) async throws -> URL {
        _ = try await workoutRepository.preset(by: presetId)
        return URL(string: "https://\(shareHost)\(UniversalLinkContract.presetPathPrefix)\(presetId.uuidString.lowercased())")!
    }

    public func importShareLink(_ url: URL) async throws -> WorkoutPreset {
        guard let token = shareToken(from: url), let uuid = UUID(uuidString: token) else {
            throw IntervalProError.invalidShareURL
        }

        if let existing = try? await workoutRepository.preset(by: uuid) {
            return existing
        }

        let imported = WorkoutPreset(
            id: uuid,
            name: "Imported Preset \(uuid.uuidString.prefix(6))",
            mode: .custom,
            steps: [
                IntervalStep(kind: .work, durationSec: 30, colorToken: .work),
                IntervalStep(kind: .rest, durationSec: 15, colorToken: .rest)
            ],
            tags: ["imported"],
            isPremium: false,
            updatedAt: Date()
        )

        try await workoutRepository.savePreset(imported)
        return imported
    }

    private func shareToken(from url: URL) -> String? {
        let expectedPrefix = UniversalLinkContract.presetPathPrefix
        guard url.host == shareHost else { return nil }
        guard url.path.hasPrefix(expectedPrefix) else { return nil }

        let token = url.path.replacingOccurrences(of: expectedPrefix, with: "")
        return token.isEmpty ? nil : token
    }
}

public enum SyncConflictResolver {
    public static func resolve(local: WorkoutPreset, remote: WorkoutPreset) -> WorkoutPreset {
        PresetMergePolicy.merge(local: local, remote: remote)
    }
}
