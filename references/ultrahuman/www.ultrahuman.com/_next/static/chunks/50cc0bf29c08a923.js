(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 71588, t => {
    t.v("/_next/static/media/chat-bubbles.2bd81f1f.svg")
}, 69752, t => {
    t.v("/_next/static/media/cross-icon.6b992514.svg")
}, 2756, t => {
    "use strict";
    var e = t.i(91398),
        a = t.i(60814);
    let i = {
        src: t.i(71588).default,
        width: 28,
        height: 28,
        blurWidth: 0,
        blurHeight: 0
    };
    var o = t.i(26019),
        n = t.i(91788),
        r = t.i(57134),
        l = t.i(11869),
        s = t.i(81022);
    let d = {
        src: t.i(69752).default,
        width: 16,
        height: 16,
        blurWidth: 0,
        blurHeight: 0
    };
    var p = t.i(40290),
        h = t.i(3828);

    function c(t, e) {
        return RegExp("^" + e.split("*").map(t => t.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1")).join(".*") + "$").test(t)
    }
    let b = (0, a.default)(({
        className: t,
        trackingParams: a
    }) => (0, e.jsx)("div", {
        className: t,
        children: (0, e.jsx)(s.TypeformSnippet, {
            typeformId: "yOi1E7Wy",
            frameTitle: "Book a call",
            className: "typeform-container",
            trackingParams: a
        })
    })).withConfig({
        displayName: "WAChatbot__BookCallTFComponentDiv",
        componentId: "sc-5908e670-0"
    })
    `
  height: 80vh;
  width: calc(100vw - 48px);

  @media (min-width: ${({theme:t})=>t.global.tablet.maxWidth}) {
    height: 500px;
    width: 780px;
  }

  .typeform-container {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
`, u = () => (0, e.jsx)(m, {}), m = (0, a.default)(({
        className: t
    }) => {
        let a = (0, h.useRouter)(),
            s = (0, n.useContext)(r.ModalContext),
            [u, m] = (0, n.useState)(!1);
        if (l.NO_WA_CHATBOT_PAGES.some(t => a.pathname.startsWith(t))) return null;
        let g = () => {
                switch (a.pathname.split("/")[1]) {
                    case "pricing":
                        return `Hey hey 👋🏻
I've been browsing the Ultrahuman M1 pricing and wanted to learn more about it.`;
                    case "m1":
                        return `Hey hey 👋🏻
I've been browsing the Ultrahuman M1 product, and I wanted to hit you up about it.`;
                    case "ring":
                        return `Hey hey 👋🏻
I've been browsing the Ultrahuman Ring, and I wanted to hit you up about it.`;
                    case "rare":
                        return `Hey hey 👋🏻
I've been browsing the Ultrahuman Rare, and I wanted to hit you up about it.`;
                    default:
                        return `Hey hey 👋🏻
I've been browsing your website and wanted to learn more about Ultrahuman products.`
                }
            },
            x = l.WA_CHATBOT_ALTERNATE_MOBILE_UI_PAGES.map(t => RegExp(`^${t.replace("*",".*")}$`)).some(t => t.test(a.pathname)) && !l.WA_CHATBOT_ALTERNATE_MOBILE_UI_EXCEPTIONS.includes(a.pathname);
        return (0, e.jsxs)("div", {
            className: `${t} ${x?"alternate-mobile":""}`,
            children: [(0, e.jsxs)("div", {
                className: `chatbot-container ${u?"active":""}`,
                children: [(0, e.jsxs)("button", {
                    onClick: () => {
                        if (console.log(g()), window && void 0 != document) {
                            let t = encodeURIComponent(g());
                            window.open(`https://api.whatsapp.com/send?phone=14158778980&text=${t} `, "_blank")
                        }
                        m(!1)
                    },
                    children: ["Instant WhatsApp Support", (0, e.jsx)(p.CaretUp, {
                        style: {
                            transform: "rotate(90deg)"
                        }
                    })]
                }), c(a.pathname, "/ring/order*") || c(a.pathname, "/ring/claim*") ? (0, e.jsxs)("button", {
                    onClick: () => {
                        window.open("mailto:support@ultrahuman.com", "_blank")
                    },
                    children: ["Email support", (0, e.jsx)(p.CaretUp, {
                        style: {
                            transform: "rotate(90deg)"
                        }
                    })]
                }) : (0, e.jsxs)("button", {
                    onClick: () => {
                        let t = "website";
                        window && (t = window.location.hostname + window.location.pathname), s.set((0, e.jsx)(b, {
                            trackingParams: {
                                utm_source: t,
                                utm_medium: "float-button"
                            }
                        })), s.setCloseButtonTheme("light"), s.show(), m(!1)
                    },
                    children: ["Pre-Purchase Consultation", (0, e.jsx)(p.CaretUp, {
                        style: {
                            transform: "rotate(90deg)"
                        }
                    })]
                })]
            }), (0, e.jsx)("button", {
                onClick: () => m(!u),
                className: "chatbot-toggle-button",
                style: {
                    background: u ? "transparent" : "",
                    backdropFilter: u ? "none" : void 0,
                    border: u ? "none" : void 0
                },
                children: u ? (0, e.jsx)(o.default, {
                    src: d,
                    className: "crossbtn",
                    alt: "chat_bot_icon"
                }) : (0, e.jsx)(o.default, {
                    src: i,
                    alt: "chat_bot_icon"
                })
            })]
        })
    }).withConfig({
        displayName: "WAChatbot",
        componentId: "sc-5908e670-1"
    })
    `
  --cb-btn-w: 50px;

  z-index: 100;

  position: fixed;
  bottom: 0;
  right: 0;
  padding: 16px;
  width: 60px;
  height: 60px;

  .chatbot-container {
    position: absolute;
    bottom: 16px;
    right: 16px;
    transition: all 0.3s ease-in-out;
    clip-path: circle(0% at 85% 85%);

    background: rgba(0, 0, 0, 0.7);
    -webkit-backdrop-filter: blur(24px);
    backdrop-filter: blur(24px);
    // filter: invert(100%);
    width: calc(100vw - 32px);
    padding: 24px;
    border-radius: 24px;

    display: flex;
    flex-direction: column;
    gap: 24px;

    @media (min-width: ${({theme:t})=>t.globalV2.md.maxWidth}) {
      width: 300px;
    }

    &.active {
      clip-path: circle(200% at 100% 100%);
    }

    button {
      padding: 8px 0px;
      border: none;
      background: none;
      color: #ffffff;
      font-size: 1.6rem;
      text-align: left;
      cursor: pointer;

      &:hover {
        svg {
          transform: translate(4px) rotate(90deg) !important;
        }
      }

      svg {
        display: inline-block;
        height: 1rem;
        width: auto;
        margin-left: 8px;
        transition: all 0.2s ease-in-out;
      }
    }
  }
  .chatbot-toggle-button {
    position: absolute;
    bottom: 16px;
    right: 16px;
    border: 1px solid #ffffff40;
    width: var(--cb-btn-w);
    height: var(--cb-btn-w);
    padding: 1px;
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
    cursor: pointer;
    border-radius: 50%;

    background: rgba(0, 0, 0, 0.8);
    // filter: invert(100%);

    img,
    svg {
      width: calc(var(--cb-btn-w) - 24px);
      transform: translateY(2px);
      height: auto;
      padding: 1px;
    }

    .crossbtn {
      position: relative;
      width: 16px;
    }
  }

  &.alternate-mobile {
    @media (max-width: ${({theme:t})=>t.globalV2.md.maxWidth}) {
      .chatbot-toggle-button {
        right: 0;
        border-radius: 50% 0 0 50%;
        bottom: 112px;
        height: 54px;
        width: 54px;
      }
    }

    @media (min-width: ${({theme:t})=>t.globalV2.md.maxWidth}) {
      .chatbot-toggle-button {
        bottom: 72px;
      }
    }
  }
`;
    t.s(["BookCallTFComponentDiv", 0, b, "ChatBot", 0, u, "default", 0, u], 2756)
}, 14075, t => {
    t.n(t.i(2756))
}]);