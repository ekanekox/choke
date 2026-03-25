(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 35134, i => {
    "use strict";
    var t = i.i(91398),
        n = i.i(94182),
        o = i.i(91788),
        e = i.i(60814);
    let d = e.default.div.withConfig({
        displayName: "UnicornStudioWidget__UnicornStudioWidgetWrapper",
        componentId: "sc-c6eb16cc-0"
    })
    `
  width: 100vw;
  margin: 0 auto;
  aspect-ratio: 1440 / 350;
  position: relative;
  overflow: hidden;
`, r = e.default.div.withConfig({
        displayName: "UnicornStudioWidget__TopGradientOverlay",
        componentId: "sc-c6eb16cc-1"
    })
    `
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 25%;
  pointer-events: none;
  z-index: 1;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0) 100%
  );
`;
    i.s(["default", 0, ({
        projectId: i
    }) => {
        let e = (0, o.useRef)(null),
            u = i || "dGoBgZekVa7sMOp54NtG";
        return (0, o.useEffect)(() => {
            let i, t = () => {
                if (document.querySelector(`[data-us-project="${u}"]`) && window.UnicornStudio && "function" == typeof window.UnicornStudio.init) {
                    window.UnicornStudio.init(), window.UnicornStudio.isInitialized = !0;
                    return
                }
                i = setTimeout(t, 50)
            };
            return t(), () => {
                i && clearTimeout(i)
            }
        }, [u]), (0, t.jsxs)(d, {
            children: [(0, t.jsx)(n.default, {
                src: "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.25/dist/unicornStudio.umd.js",
                strategy: "afterInteractive",
                onLoad: () => {
                    e.current && window.UnicornStudio ? .init && (window.UnicornStudio.init(), window.UnicornStudio.isInitialized = !0)
                }
            }), (0, t.jsx)("div", {
                ref: e,
                "data-us-project": u,
                "data-us-production": "true",
                style: {
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%"
                }
            }), (0, t.jsx)(r, {
                "aria-hidden": "true"
            })]
        })
    }])
}, 38741, i => {
    i.n(i.i(35134))
}]);