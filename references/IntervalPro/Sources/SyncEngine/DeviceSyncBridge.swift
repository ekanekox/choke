import Foundation
import IntervalModels
#if canImport(WatchConnectivity)
import WatchConnectivity
#endif

public protocol DeviceSyncBridge {
    func pushState(_ state: TimerState)
    func reconcileCompletedSession(_ session: WorkoutSession) async
}

public final class WatchConnectivityBridge: NSObject, DeviceSyncBridge {
    #if canImport(WatchConnectivity)
    private let session = WCSession.isSupported() ? WCSession.default : nil
    #endif

    public override init() {
        super.init()
        #if canImport(WatchConnectivity)
        session?.delegate = self
        session?.activate()
        #endif
    }

    public func pushState(_ state: TimerState) {
        #if canImport(WatchConnectivity)
        guard let session, session.isReachable else { return }
        let payload: [String: Any] = [
            "playbackState": state.playbackState.rawValue,
            "elapsedSec": state.elapsedSec,
            "remainingSec": state.secondsRemainingInSegment,
            "updatedAt": state.updatedAt.timeIntervalSince1970
        ]
        session.sendMessage(payload, replyHandler: nil)
        #else
        _ = state
        #endif
    }

    public func reconcileCompletedSession(_ session: WorkoutSession) async {
        _ = session
    }
}

#if canImport(WatchConnectivity)
extension WatchConnectivityBridge: WCSessionDelegate {
    public func session(
        _ session: WCSession,
        activationDidCompleteWith activationState: WCSessionActivationState,
        error: Error?
    ) {}

    #if os(iOS)
    public func sessionDidBecomeInactive(_ session: WCSession) {}
    public func sessionDidDeactivate(_ session: WCSession) {
        session.activate()
    }
    #endif

    public func session(_ session: WCSession, didReceiveMessage message: [String: Any]) {}
}
#endif
