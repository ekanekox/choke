# IntervalPro

Apple-first interval and workout timer architecture scaffold aligned to the V1 blueprint.

## Implemented in this scaffold

- Modular package boundaries:
  - `TimerCore`
  - `WorkoutComposer`
  - `CueEngine`
  - `WorkoutExecution`
  - `DataStore`
  - `SyncEngine`
  - `HealthEngine`
  - `Monetization`
  - `Analytics`
  - `DesignSystem`
  - `AppFeature`
- Core domain models and protocols:
  - `WorkoutPreset`, `IntervalStep`, `WorkoutSession`, `SessionMetrics`
  - `TimerEngine`, `CueScheduling`, `WorkoutRepository`, `SyncService`, `HealthService`
- Deterministic mode composition:
  - HIIT, Tabata, EMOM, AMRAP, Pyramid, Custom
- Monotonic timer engine:
  - start, pause, resume, skip, adjust step duration
- Sync/share contract:
  - universal share links (`https://intervalpro.app/preset/<token>`)
- Freemium guardrails:
  - mode gating and entitlement service skeleton
- SwiftUI feature screens:
  - Home, Create Wizard, Library, Active Workout, Analytics, Settings, Premium Upsell
- Tests:
  - composer mode generation
  - timer completion/skip behavior
  - share link import/export

## Build

```bash
cd /Users/kaneko/ekanekox/apps/IntervalPro
swift build
```

## Notes

- Built as a Swift Package so it can be imported into an iOS/watchOS Xcode app target.
- In this environment, full Xcode project generation is unavailable (`xcodebuild` not installed), so the app layer is provided as package-based SwiftUI feature modules ready to attach to app targets.
- CloudKit/HealthKit/StoreKit code paths are included as platform-conditional stubs where runtime app entitlements/capabilities are required.
- Test specs are included under `Tests/`, but this shell environment lacks Apple test frameworks (`XCTest`/`swift-testing`) through CLI tools alone. Run tests from a full Xcode toolchain/CI profile.
