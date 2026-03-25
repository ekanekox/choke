#if canImport(SwiftUI)
import DesignSystem
import SwiftUI

public struct AppRootView: View {
    @StateObject private var viewModel: AppRootViewModel

    public init(viewModel: @autoclosure @escaping () -> AppRootViewModel = AppRootViewModel()) {
        _viewModel = StateObject(wrappedValue: viewModel())
    }

    public var body: some View {
        TabView(selection: $viewModel.selectedTab) {
            HomeView(viewModel: viewModel)
                .tabItem { Label("Home", systemImage: "house") }
                .tag(AppScreen.home)

            CreateWizardView(viewModel: viewModel)
                .tabItem { Label("Create", systemImage: "plus.circle") }
                .tag(AppScreen.create)

            TemplateLibraryView(viewModel: viewModel)
                .tabItem { Label("Library", systemImage: "square.stack") }
                .tag(AppScreen.library)

            ActiveWorkoutView(viewModel: viewModel)
                .tabItem { Label("Workout", systemImage: "timer") }
                .tag(AppScreen.workout)

            AnalyticsDashboardView(viewModel: viewModel)
                .tabItem { Label("Analytics", systemImage: "chart.xyaxis.line") }
                .tag(AppScreen.analytics)

            SettingsView(viewModel: viewModel)
                .tabItem { Label("Settings", systemImage: "gear") }
                .tag(AppScreen.settings)
        }
        .preferredColorScheme(.dark)
        .accentColor(UHTheme.phaseColor(kind: .work))
        .task {
            viewModel.bootstrap()
        }
        .sheet(isPresented: $viewModel.showPremiumUpsell) {
            PremiumUpsellView(viewModel: viewModel)
                .presentationDetents([.medium])
        }
    }
}
#endif
