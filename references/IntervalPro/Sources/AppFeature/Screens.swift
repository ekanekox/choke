#if canImport(SwiftUI)
import DesignSystem
import IntervalModels
import SwiftUI
import WorkoutComposer

struct HomeView: View {
    @ObservedObject var viewModel: AppRootViewModel

    var body: some View {
        NavigationStack {
            ZStack {
                UHTheme.background.ignoresSafeArea()

                VStack(alignment: .leading, spacing: UHSpacing.medium) {
                    Text("IntervalPro")
                        .font(.custom(UHTypographyToken.graphik.rawValue, size: 34))
                        .foregroundStyle(UHTheme.primaryText)

                    quickStartCard
                    recentPresets
                    Spacer()
                }
                .padding(.horizontal, UHSpacing.small)
                .padding(.top, UHSpacing.medium)
            }
        }
    }

    private var quickStartCard: some View {
        VStack(alignment: .leading, spacing: UHSpacing.small) {
            Text("Quick Start")
                .font(.custom(UHTypographyToken.graphik.rawValue, size: 20))
                .foregroundStyle(UHTheme.primaryText)

            Text("Create and launch a workout in 3 taps.")
                .font(.custom(UHTypographyToken.graphik.rawValue, size: 15))
                .foregroundStyle(UHTheme.secondaryText)

            Button("Create Workout") {
                viewModel.selectedTab = .create
            }
            .buttonStyle(PrimaryWorkoutButtonStyle())
        }
        .padding(UHSpacing.small)
        .background(
            RoundedRectangle(cornerRadius: UHRadii.card)
                .fill(UHTheme.surface)
        )
    }

    private var recentPresets: some View {
        VStack(alignment: .leading, spacing: UHSpacing.small) {
            Text("Recent Presets")
                .font(.custom(UHTypographyToken.graphik.rawValue, size: 18))
                .foregroundStyle(UHTheme.primaryText)

            if viewModel.presets.isEmpty {
                Text("No presets yet")
                    .foregroundStyle(UHTheme.secondaryText)
            } else {
                ForEach(viewModel.presets.prefix(3)) { preset in
                    HStack {
                        Text(preset.name)
                            .foregroundStyle(UHTheme.primaryText)
                        Spacer()
                        Text(preset.mode.rawValue.uppercased())
                            .font(.custom(UHTypographyToken.jetbrainsMono.rawValue, size: 12))
                            .foregroundStyle(UHTheme.secondaryText)
                    }
                    .padding(.vertical, 4)
                }
            }
        }
        .padding(UHSpacing.small)
        .background(
            RoundedRectangle(cornerRadius: UHRadii.card)
                .fill(UHTheme.surfaceSecondary)
        )
    }
}

struct CreateWizardView: View {
    @ObservedObject var viewModel: AppRootViewModel

    @State private var mode: WorkoutMode = .hiit
    @State private var workSec: Int = 30
    @State private var restSec: Int = 15
    @State private var rounds: Int = 8
    @State private var planName: String = "Morning Intervals"

    var body: some View {
        NavigationStack {
            Form {
                Section("Tap 1: Mode") {
                    Picker("Mode", selection: $mode) {
                        ForEach(WorkoutMode.allCases, id: \.self) { mode in
                            Text(mode.rawValue.uppercased()).tag(mode)
                        }
                    }
                    .pickerStyle(.segmented)
                }

                Section("Tap 2: Parameters") {
                    Stepper("Work: \(workSec)s", value: $workSec, in: 5...180, step: 5)
                    Stepper("Rest: \(restSec)s", value: $restSec, in: 0...120, step: 5)
                    Stepper("Rounds: \(rounds)", value: $rounds, in: 1...40)
                    TextField("Plan name", text: $planName)
                }

                Section("Tap 3: Preview + Start") {
                    Button("Preview Sequence") {
                        viewModel.createFromWizard(
                            CreateWizardSelection(mode: mode, workSec: workSec, restSec: restSec, rounds: rounds),
                            name: planName
                        )
                    }

                    if let plan = viewModel.generatedPlan {
                        VStack(alignment: .leading, spacing: 8) {
                            Text("\(plan.name) • \(plan.totalDurationSec)s")
                            Text("\(plan.segments.count) segments")
                                .foregroundStyle(.secondary)
                        }

                        Button("Start Workout") {
                            viewModel.startGeneratedWorkout()
                        }
                        .buttonStyle(PrimaryWorkoutButtonStyle())

                        Button("Save Preset") {
                            viewModel.saveCurrentPlanAsPreset(name: plan.name, isPremium: mode.isPremium)
                        }
                    }
                }
            }
            .navigationTitle("Create")
        }
    }
}

struct TemplateLibraryView: View {
    @ObservedObject var viewModel: AppRootViewModel
    @State private var activeShareLink: URL?

    var body: some View {
        NavigationStack {
            List(viewModel.presets) { preset in
                VStack(alignment: .leading, spacing: 8) {
                    Text(preset.name)
                        .font(.headline)
                    Text(preset.mode.rawValue.uppercased())
                        .font(.caption)
                        .foregroundStyle(.secondary)

                    HStack {
                        Button("Use") {
                            let selection = CreateWizardSelection(mode: preset.mode, workSec: preset.steps.first?.durationSec ?? 30, restSec: preset.steps.dropFirst().first?.durationSec ?? 15, rounds: max(preset.steps.count / 2, 1))
                            viewModel.createFromWizard(selection, name: preset.name)
                            viewModel.selectedTab = .create
                        }

                        Button("Share") {
                            Task {
                                activeShareLink = await viewModel.shareLink(for: preset)
                            }
                        }
                    }
                }
                .padding(.vertical, 6)
            }
            .navigationTitle("Template Library")
            .overlay(alignment: .bottom) {
                if let link = activeShareLink {
                    Text(link.absoluteString)
                        .font(.caption)
                        .padding(10)
                        .background(.ultraThinMaterial)
                        .clipShape(RoundedRectangle(cornerRadius: 10))
                        .padding()
                }
            }
        }
    }
}

struct ActiveWorkoutView: View {
    @ObservedObject var viewModel: AppRootViewModel

    var body: some View {
        ZStack {
            UHTheme.background.ignoresSafeArea()

            VStack(spacing: UHSpacing.medium) {
                Text(viewModel.timerState.currentSegment?.step.kind.rawValue.uppercased() ?? "READY")
                    .font(.custom(UHTypographyToken.graphik.rawValue, size: 22))
                    .foregroundStyle(currentPhaseColor)

                Text("\(viewModel.timerState.secondsRemainingInSegment)")
                    .font(.custom(UHTypographyToken.jetbrainsMono.rawValue, size: 96))
                    .monospacedDigit()
                    .foregroundStyle(UHTheme.primaryText)
                    .accessibilityLabel("Seconds remaining \(viewModel.timerState.secondsRemainingInSegment)")

                Text("\(viewModel.timerState.elapsedSec) / \(viewModel.timerState.totalDurationSec) sec")
                    .foregroundStyle(UHTheme.secondaryText)

                HStack(spacing: UHSpacing.small) {
                    Button("-10s") { viewModel.adjustStep(seconds: -10) }
                    Button("Pause") { viewModel.pauseWorkout() }
                    Button("Skip") { viewModel.skipStep() }
                    Button("+10s") { viewModel.adjustStep(seconds: 10) }
                }
                .buttonStyle(PrimaryWorkoutButtonStyle())
            }
            .padding(UHSpacing.small)
        }
    }

    private var currentPhaseColor: Color {
        switch viewModel.timerState.currentSegment?.step.kind {
        case .work:
            return UHTheme.phaseColor(kind: .work)
        case .rest:
            return UHTheme.phaseColor(kind: .rest)
        case .warmup:
            return UHTheme.phaseColor(kind: .warmup)
        case .recovery:
            return UHTheme.phaseColor(kind: .recovery)
        case .cooldown:
            return UHTheme.phaseColor(kind: .cooldown)
        case .none:
            return UHTheme.phaseColor(kind: .alert)
        }
    }
}

struct AnalyticsDashboardView: View {
    @ObservedObject var viewModel: AppRootViewModel

    var body: some View {
        NavigationStack {
            VStack(alignment: .leading, spacing: UHSpacing.small) {
                Text("Analytics")
                    .font(.title2)

                Text("Tracked events: \(viewModel.analyticsTracker.events.count)")
                    .foregroundStyle(.secondary)

                VStack(alignment: .leading, spacing: 8) {
                    Text("Consistency")
                        .font(.headline)
                    RoundedRectangle(cornerRadius: 8)
                        .fill(UHTheme.phaseColor(kind: .work).opacity(0.25))
                        .frame(height: 14)
                        .overlay(alignment: .leading) {
                            RoundedRectangle(cornerRadius: 8)
                                .fill(UHTheme.phaseColor(kind: .work))
                                .frame(width: 180, height: 14)
                        }
                }
                .padding()
                .background(UHTheme.surface)
                .clipShape(RoundedRectangle(cornerRadius: UHRadii.card))

                Spacer()
            }
            .padding(UHSpacing.small)
            .background(UHTheme.background.ignoresSafeArea())
            .foregroundStyle(UHTheme.primaryText)
        }
    }
}

struct SettingsView: View {
    @ObservedObject var viewModel: AppRootViewModel
    @State private var duckMusic = true
    @State private var silentMode = false

    var body: some View {
        NavigationStack {
            Form {
                Section("Audio cues") {
                    Toggle("Duck background music", isOn: $duckMusic)
                    Toggle("Silent mode", isOn: $silentMode)
                }

                Section("Health") {
                    Text("Workout write + HR/energy read enabled on permission.")
                }

                Section("Premium") {
                    Button("Upgrade") {
                        viewModel.showPremiumUpsell = true
                    }
                }
            }
            .navigationTitle("Settings")
        }
    }
}

struct PremiumUpsellView: View {
    @ObservedObject var viewModel: AppRootViewModel

    var body: some View {
        VStack(alignment: .leading, spacing: UHSpacing.small) {
            Text("IntervalPro Premium")
                .font(.title2)

            Text("Unlock EMOM, AMRAP, Pyramid, unlimited presets, and full analytics.")
                .foregroundStyle(.secondary)

            Button("Start 14-Day Trial") {
                Task {
                    try? await viewModel.entitlementService.purchasePremium()
                    viewModel.showPremiumUpsell = false
                }
            }
            .buttonStyle(PrimaryWorkoutButtonStyle())
        }
        .padding(UHSpacing.medium)
        .background(UHTheme.background)
        .foregroundStyle(UHTheme.primaryText)
    }
}

private extension WorkoutMode {
    var isPremium: Bool {
        switch self {
        case .emom, .amrap, .pyramid:
            return true
        case .hiit, .tabata, .custom:
            return false
        }
    }
}
#endif
