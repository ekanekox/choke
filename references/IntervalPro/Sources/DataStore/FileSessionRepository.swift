import Foundation
import IntervalModels

public actor FileSessionRepository: SessionRepository {
    private let sessionsFileURL: URL
    private let metricsFileURL: URL

    private var sessions: [WorkoutSession] = []
    private var metricsBySessionID: [UUID: SessionMetrics] = [:]

    public init(baseDirectory: URL? = nil) {
        let root = baseDirectory ?? FileManager.default.urls(for: .applicationSupportDirectory, in: .userDomainMask).first ?? URL(fileURLWithPath: NSTemporaryDirectory())
        self.sessionsFileURL = root.appendingPathComponent("intervalpro-sessions.json")
        self.metricsFileURL = root.appendingPathComponent("intervalpro-session-metrics.json")
    }

    public func saveSession(_ session: WorkoutSession, metrics: SessionMetrics?) async throws {
        try await ensureLoaded()

        if let index = sessions.firstIndex(where: { $0.id == session.id }) {
            sessions[index] = session
        } else {
            sessions.append(session)
        }

        if let metrics {
            metricsBySessionID[session.id] = metrics
        }

        try persist()
    }

    public func fetchSessions(limit: Int = 100) async throws -> [WorkoutSession] {
        try await ensureLoaded()

        return sessions
            .sorted { $0.startedAt > $1.startedAt }
            .prefix(limit)
            .map { $0 }
    }

    public func metrics(for sessionID: UUID) async throws -> SessionMetrics? {
        try await ensureLoaded()
        return metricsBySessionID[sessionID]
    }

    private func ensureLoaded() async throws {
        if sessions.isEmpty, FileManager.default.fileExists(atPath: sessionsFileURL.path) {
            let data = try Data(contentsOf: sessionsFileURL)
            sessions = try JSONDecoder.iso8601.decode([WorkoutSession].self, from: data)
        }

        if metricsBySessionID.isEmpty, FileManager.default.fileExists(atPath: metricsFileURL.path) {
            let data = try Data(contentsOf: metricsFileURL)
            metricsBySessionID = try JSONDecoder.iso8601.decode([UUID: SessionMetrics].self, from: data)
        }
    }

    private func persist() throws {
        try FileManager.default.createDirectory(at: sessionsFileURL.deletingLastPathComponent(), withIntermediateDirectories: true)

        let sessionsData = try JSONEncoder.pretty.encode(sessions)
        try sessionsData.write(to: sessionsFileURL, options: .atomic)

        let metricsData = try JSONEncoder.pretty.encode(metricsBySessionID)
        try metricsData.write(to: metricsFileURL, options: .atomic)
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
