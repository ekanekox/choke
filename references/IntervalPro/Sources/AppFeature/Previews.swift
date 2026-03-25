#if canImport(SwiftUI)
import IntervalModels
import SwiftUI

@MainActor
private enum PreviewFactory {
    static func viewModel() -> AppRootViewModel {
        let vm = AppRootViewModel(baseDirectory: FileManager.default.temporaryDirectory)

        let sampleSteps = [
            IntervalStep(kind: .warmup, durationSec: 30, colorToken: .warmup),
            IntervalStep(kind: .work, durationSec: 40, colorToken: .work),
            IntervalStep(kind: .rest, durationSec: 20, colorToken: .rest),
            IntervalStep(kind: .work, durationSec: 40, colorToken: .work),
            IntervalStep(kind: .cooldown, durationSec: 30, colorToken: .recovery)
        ]

        vm.presets = [
            WorkoutPreset(name: "Power HIIT", mode: .hiit, steps: sampleSteps, tags: ["hiit"], isPremium: false),
            WorkoutPreset(name: "EMOM Strength", mode: .emom, steps: sampleSteps, tags: ["strength"], isPremium: true),
            WorkoutPreset(name: "Pyramid Burner", mode: .pyramid, steps: sampleSteps, tags: ["cardio"], isPremium: true)
        ]

        let segments = [
            WorkoutSegment(step: sampleSteps[0], startOffsetSec: 0, endOffsetSec: 30, roundIndex: 0, cycleIndex: 0),
            WorkoutSegment(step: sampleSteps[1], startOffsetSec: 30, endOffsetSec: 70, roundIndex: 1, cycleIndex: 1),
            WorkoutSegment(step: sampleSteps[2], startOffsetSec: 70, endOffsetSec: 90, roundIndex: 1, cycleIndex: 1),
            WorkoutSegment(step: sampleSteps[3], startOffsetSec: 90, endOffsetSec: 130, roundIndex: 2, cycleIndex: 1),
            WorkoutSegment(step: sampleSteps[4], startOffsetSec: 130, endOffsetSec: 160, roundIndex: 0, cycleIndex: 0)
        ]

        vm.generatedPlan = WorkoutPlan(name: "Preview Session", mode: .hiit, segments: segments)
        vm.timerState = TimerState(
            playbackState: .running,
            currentSegmentIndex: 1,
            currentSegment: segments[1],
            elapsedSec: 42,
            secondsRemainingInSegment: 28,
            totalDurationSec: 160
        )

        return vm
    }
}

@MainActor
struct AppFeaturePreviewProvider: PreviewProvider {
    static var previews: some View {
        Group {
            AppRootView(viewModel: PreviewFactory.viewModel())
                .previewDisplayName("App Root")

            HomeView(viewModel: PreviewFactory.viewModel())
                .previewDisplayName("Home")

            CreateWizardView(viewModel: PreviewFactory.viewModel())
                .previewDisplayName("Create Wizard")

            TemplateLibraryView(viewModel: PreviewFactory.viewModel())
                .previewDisplayName("Template Library")

            ActiveWorkoutView(viewModel: PreviewFactory.viewModel())
                .previewDisplayName("Active Workout")

            AnalyticsDashboardView(viewModel: PreviewFactory.viewModel())
                .previewDisplayName("Analytics")

            SettingsView(viewModel: PreviewFactory.viewModel())
                .previewDisplayName("Settings")

            PremiumUpsellView(viewModel: PreviewFactory.viewModel())
                .previewDisplayName("Premium Upsell")
        }
        .preferredColorScheme(.dark)
    }
}
#endif
