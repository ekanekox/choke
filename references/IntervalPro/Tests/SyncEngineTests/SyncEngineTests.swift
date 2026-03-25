import DataStore
import Foundation
import IntervalModels
@testable import SyncEngine
import Testing

@Test("Share link includes preset token")
func shareLinkContainsToken() async throws {
    let directory = FileManager.default.temporaryDirectory.appendingPathComponent(UUID().uuidString)
    let repository = FileWorkoutRepository(baseDirectory: directory)
    let preset = WorkoutPreset(
        name: "Share Test",
        mode: .hiit,
        steps: [
            IntervalStep(kind: .work, durationSec: 30, colorToken: .work),
            IntervalStep(kind: .rest, durationSec: 15, colorToken: .rest)
        ],
        isPremium: false
    )

    try await repository.savePreset(preset)

    let sync = CloudKitSyncService(workoutRepository: repository)
    let url = try await sync.makeShareLink(for: preset.id)

    #expect(url.absoluteString.contains(preset.id.uuidString.lowercased()))
}

@Test("Importing share link creates placeholder preset")
func importingShareLinkCreatesPreset() async throws {
    let directory = FileManager.default.temporaryDirectory.appendingPathComponent(UUID().uuidString)
    let repository = FileWorkoutRepository(baseDirectory: directory)
    let sync = CloudKitSyncService(workoutRepository: repository)

    let token = UUID()
    let url = URL(string: "https://intervalpro.app/preset/\(token.uuidString.lowercased())")!

    let imported = try await sync.importShareLink(url)

    #expect(imported.id == token)
    #expect(imported.tags == ["imported"])
}
