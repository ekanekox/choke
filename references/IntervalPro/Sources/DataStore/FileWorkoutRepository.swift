import Foundation
import IntervalModels

public actor FileWorkoutRepository: WorkoutRepository {
    private let fileURL: URL
    private var cache: [WorkoutPreset] = []

    public init(baseDirectory: URL? = nil) {
        let root = baseDirectory ?? FileManager.default.urls(for: .applicationSupportDirectory, in: .userDomainMask).first ?? URL(fileURLWithPath: NSTemporaryDirectory())
        self.fileURL = root.appendingPathComponent("intervalpro-presets.json")
    }

    public func savePreset(_ preset: WorkoutPreset) async throws {
        try await ensureLoaded()

        if let index = cache.firstIndex(where: { $0.id == preset.id }) {
            cache[index] = PresetMergePolicy.merge(local: cache[index], remote: preset)
        } else {
            cache.append(preset)
        }

        try persist()
    }

    public func fetchPresets() async throws -> [WorkoutPreset] {
        try await ensureLoaded()
        return cache.sorted { $0.updatedAt > $1.updatedAt }
    }

    public func preset(by id: UUID) async throws -> WorkoutPreset {
        try await ensureLoaded()
        guard let preset = cache.first(where: { $0.id == id }) else {
            throw IntervalProError.presetNotFound
        }
        return preset
    }

    private func ensureLoaded() async throws {
        guard cache.isEmpty else { return }
        if FileManager.default.fileExists(atPath: fileURL.path) {
            let data = try Data(contentsOf: fileURL)
            cache = try JSONDecoder.iso8601.decode([WorkoutPreset].self, from: data)
        }
    }

    private func persist() throws {
        try FileManager.default.createDirectory(at: fileURL.deletingLastPathComponent(), withIntermediateDirectories: true)
        let data = try JSONEncoder.pretty.encode(cache)
        try data.write(to: fileURL, options: .atomic)
    }
}

public enum PresetMergePolicy {
    // Latest update timestamp wins for scalar fields; tags are merged uniquely.
    public static func merge(local: WorkoutPreset, remote: WorkoutPreset) -> WorkoutPreset {
        let primary = local.updatedAt >= remote.updatedAt ? local : remote
        let secondary = primary.id == local.id && primary.updatedAt == local.updatedAt ? remote : local

        var merged = primary
        merged.tags = Array(Set(primary.tags + secondary.tags)).sorted()
        return merged
    }
}

private extension JSONEncoder {
    static var pretty: JSONEncoder {
        let encoder = JSONEncoder()
        encoder.outputFormatting = [.prettyPrinted, .sortedKeys]
        encoder.dateEncodingStrategy = .iso8601
        return encoder
    }
}

private extension JSONDecoder {
    static var iso8601: JSONDecoder {
        let decoder = JSONDecoder()
        decoder.dateDecodingStrategy = .iso8601
        return decoder
    }
}
