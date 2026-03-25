// swift-tools-version: 6.2
import PackageDescription

let package = Package(
    name: "IntervalPro",
    platforms: [
        .iOS(.v17),
        .macOS(.v14),
        .watchOS(.v10)
    ],
    products: [
        .library(name: "TimerCore", targets: ["TimerCore"]),
        .library(name: "WorkoutComposer", targets: ["WorkoutComposer"]),
        .library(name: "CueEngine", targets: ["CueEngine"]),
        .library(name: "DataStore", targets: ["DataStore"]),
        .library(name: "SyncEngine", targets: ["SyncEngine"]),
        .library(name: "HealthEngine", targets: ["HealthEngine"]),
        .library(name: "Monetization", targets: ["Monetization"]),
        .library(name: "Analytics", targets: ["Analytics"]),
        .library(name: "WorkoutExecution", targets: ["WorkoutExecution"]),
        .library(name: "DesignSystem", targets: ["DesignSystem"]),
        .library(name: "IntervalAppFeature", targets: ["AppFeature"])
    ],
    targets: [
        .target(name: "IntervalModels"),
        .target(
            name: "TimerCore",
            dependencies: ["IntervalModels"]
        ),
        .target(
            name: "WorkoutComposer",
            dependencies: ["IntervalModels"]
        ),
        .target(
            name: "CueEngine",
            dependencies: ["IntervalModels"]
        ),
        .target(
            name: "DataStore",
            dependencies: ["IntervalModels"]
        ),
        .target(
            name: "SyncEngine",
            dependencies: ["IntervalModels", "DataStore"]
        ),
        .target(
            name: "HealthEngine",
            dependencies: ["IntervalModels"]
        ),
        .target(
            name: "Monetization",
            dependencies: ["IntervalModels"]
        ),
        .target(
            name: "Analytics",
            dependencies: ["IntervalModels"]
        ),
        .target(
            name: "DesignSystem",
            dependencies: []
        ),
        .target(
            name: "WorkoutExecution",
            dependencies: ["IntervalModels", "TimerCore", "CueEngine", "HealthEngine", "Analytics"]
        ),
        .target(
            name: "AppFeature",
            dependencies: [
                "IntervalModels",
                "TimerCore",
                "WorkoutComposer",
                "DataStore",
                "SyncEngine",
                "HealthEngine",
                "Monetization",
                "Analytics",
                "WorkoutExecution",
                "DesignSystem"
            ]
        )
    ]
)
