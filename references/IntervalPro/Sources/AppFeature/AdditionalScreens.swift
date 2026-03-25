#if canImport(SwiftUI)
import DesignSystem
import IntervalModels
import SwiftUI

public struct OnboardingView: View {
    public init() {}

    public var body: some View {
        VStack(spacing: UHSpacing.medium) {
            Text("Train Smarter")
                .font(.largeTitle)
            Text("Create interval workouts in 3 taps, sync across devices, and track consistency.")
                .multilineTextAlignment(.center)
                .foregroundStyle(.secondary)
            Button("Get Started") {}
                .buttonStyle(PrimaryWorkoutButtonStyle())
        }
        .padding(UHSpacing.medium)
        .background(UHTheme.background.ignoresSafeArea())
        .foregroundStyle(UHTheme.primaryText)
    }
}

public struct SequenceEditorView: View {
    @State public var steps: [IntervalStep]

    public init(steps: [IntervalStep]) {
        _steps = State(initialValue: steps)
    }

    public var body: some View {
        List {
            ForEach($steps) { $step in
                VStack(alignment: .leading) {
                    Text(step.kind.rawValue.capitalized)
                    Stepper("Duration: \(step.durationSec)s", value: $step.durationSec, in: 1...600)
                }
            }
        }
        .navigationTitle("Sequence Editor")
    }
}

public struct SessionSummaryView: View {
    public let session: WorkoutSession

    public init(session: WorkoutSession) {
        self.session = session
    }

    public var body: some View {
        VStack(alignment: .leading, spacing: UHSpacing.small) {
            Text("Session Summary")
                .font(.title2)
            Text("Status: \(session.status.rawValue)")
            Text("Planned: \(session.plannedSec)s")
            Text("Actual: \(session.actualSec)s")
        }
        .padding(UHSpacing.medium)
    }
}
#endif
