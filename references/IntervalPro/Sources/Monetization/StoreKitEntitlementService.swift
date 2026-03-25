import Foundation
import IntervalModels
#if canImport(StoreKit)
import StoreKit
#endif

public actor StoreKitEntitlementService: EntitlementService {
    private(set) var cachedTier: EntitlementTier = .free

    public init() {}

    public func currentEntitlement() async -> EntitlementTier {
        #if canImport(StoreKit)
        for await result in Transaction.currentEntitlements {
            guard case .verified(let transaction) = result else { continue }
            if transaction.productType == .autoRenewable {
                cachedTier = .premium
                return .premium
            }
        }
        #endif

        return cachedTier
    }

    public func isFeatureEnabled(_ feature: PremiumFeature) async -> Bool {
        let tier = await currentEntitlement()
        switch tier {
        case .premium:
            return true
        case .trial:
            return feature != .templatePublishing
        case .free:
            return false
        }
    }

    public func purchasePremium() async throws {
        #if canImport(StoreKit)
        // Product IDs should be injected from app config.
        #endif
        cachedTier = .premium
    }

    public func restorePurchases() async throws {
        #if canImport(StoreKit)
        try await AppStore.sync()
        #endif
        _ = await currentEntitlement()
    }
}

public enum FreeTierPolicy {
    public static let maxSavedPresets = 30
    public static let analyticsHistoryDays = 30

    public static func modeAllowedInFree(_ mode: WorkoutMode) -> Bool {
        switch mode {
        case .hiit, .tabata, .custom:
            return true
        case .emom, .amrap, .pyramid:
            return false
        }
    }
}
