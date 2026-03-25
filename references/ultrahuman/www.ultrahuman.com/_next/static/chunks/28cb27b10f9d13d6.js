(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 2756, t => {
    "use strict";
    var e = t.i(91398),
        n = t.i(60814);
    let i = {
        src: t.i(71588).default,
        width: 28,
        height: 28,
        blurWidth: 0,
        blurHeight: 0
    };
    var r = t.i(26019),
        o = t.i(91788),
        a = t.i(57134),
        l = t.i(11869),
        c = t.i(81022);
    let s = {
        src: t.i(69752).default,
        width: 16,
        height: 16,
        blurWidth: 0,
        blurHeight: 0
    };
    var d = t.i(40290),
        u = t.i(3828);

    function f(t, e) {
        return RegExp("^" + e.split("*").map(t => t.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1")).join(".*") + "$").test(t)
    }
    let m = (0, n.default)(({
        className: t,
        trackingParams: n
    }) => (0, e.jsx)("div", {
        className: t,
        children: (0, e.jsx)(c.TypeformSnippet, {
            typeformId: "yOi1E7Wy",
            frameTitle: "Book a call",
            className: "typeform-container",
            trackingParams: n
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
`, p = () => (0, e.jsx)(h, {}), h = (0, n.default)(({
        className: t
    }) => {
        let n = (0, u.useRouter)(),
            c = (0, o.useContext)(a.ModalContext),
            [p, h] = (0, o.useState)(!1);
        if (l.NO_WA_CHATBOT_PAGES.some(t => n.pathname.startsWith(t))) return null;
        let g = () => {
                switch (n.pathname.split("/")[1]) {
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
            x = l.WA_CHATBOT_ALTERNATE_MOBILE_UI_PAGES.map(t => RegExp(`^${t.replace("*",".*")}$`)).some(t => t.test(n.pathname)) && !l.WA_CHATBOT_ALTERNATE_MOBILE_UI_EXCEPTIONS.includes(n.pathname);
        return (0, e.jsxs)("div", {
            className: `${t} ${x?"alternate-mobile":""}`,
            children: [(0, e.jsxs)("div", {
                className: `chatbot-container ${p?"active":""}`,
                children: [(0, e.jsxs)("button", {
                    onClick: () => {
                        if (console.log(g()), window && void 0 != document) {
                            let t = encodeURIComponent(g());
                            window.open(`https://api.whatsapp.com/send?phone=14158778980&text=${t} `, "_blank")
                        }
                        h(!1)
                    },
                    children: ["Instant WhatsApp Support", (0, e.jsx)(d.CaretUp, {
                        style: {
                            transform: "rotate(90deg)"
                        }
                    })]
                }), f(n.pathname, "/ring/order*") || f(n.pathname, "/ring/claim*") ? (0, e.jsxs)("button", {
                    onClick: () => {
                        window.open("mailto:support@ultrahuman.com", "_blank")
                    },
                    children: ["Email support", (0, e.jsx)(d.CaretUp, {
                        style: {
                            transform: "rotate(90deg)"
                        }
                    })]
                }) : (0, e.jsxs)("button", {
                    onClick: () => {
                        let t = "website";
                        window && (t = window.location.hostname + window.location.pathname), c.set((0, e.jsx)(m, {
                            trackingParams: {
                                utm_source: t,
                                utm_medium: "float-button"
                            }
                        })), c.setCloseButtonTheme("light"), c.show(), h(!1)
                    },
                    children: ["Pre-Purchase Consultation", (0, e.jsx)(d.CaretUp, {
                        style: {
                            transform: "rotate(90deg)"
                        }
                    })]
                })]
            }), (0, e.jsx)("button", {
                onClick: () => h(!p),
                className: "chatbot-toggle-button",
                style: {
                    background: p ? "transparent" : "",
                    backdropFilter: p ? "none" : void 0,
                    border: p ? "none" : void 0
                },
                children: p ? (0, e.jsx)(r.default, {
                    src: s,
                    className: "crossbtn",
                    alt: "chat_bot_icon"
                }) : (0, e.jsx)(r.default, {
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
    t.s(["BookCallTFComponentDiv", 0, m, "ChatBot", 0, p, "default", 0, p], 2756)
}, 88234, t => {
    "use strict";
    var e = t.i(60814);
    let n = e.css `
  color: #313449;
  // background: linear-gradient(98.35deg, #ffffff 1.84%, #757575 228.23%);
  background: linear-gradient(182.76deg, #60629e -17.03%, #313449 97.55%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`,
        i = e.default.h1.withConfig({
            displayName: "styleConstants__H1",
            componentId: "sc-c7910cef-0"
        })
    `
  font-size: 4rem;
  font-weight: ${({theme:t})=>t.typographyV2.fontWeight.semibold};
  line-height: 100%;
  letter-spacing: -3px;

  ${n}

  @media (min-width: ${({theme:t})=>t.globalV2.sm.maxWidth}) {
  }

  @media (min-width: ${({theme:t})=>t.globalV2.md.maxWidth}) {
    font-size: ${({theme:t})=>t.typographyV2.fontSize.xlarge};
  }

  @media (min-width: ${({theme:t})=>t.globalV2.lg.maxWidth}) {
  }

  @media (min-width: ${({theme:t})=>t.globalV2.xl.maxWidth}) {
    font-size: 8rem;
  }
`;
    e.default.h1.withConfig({
        displayName: "styleConstants__H1_OPT",
        componentId: "sc-c7910cef-1"
    })
    `
  font-size: 44px;
  font-weight: ${({theme:t})=>t.typographyV2.fontWeight.semibold};
  line-height: 120%;
  letter-spacing: -1px;
`, e.default.h2.withConfig({
        displayName: "styleConstants__H2",
        componentId: "sc-c7910cef-2"
    })
    `
  font-size: 36px;
  font-weight: ${({theme:t})=>t.typographyV2.fontWeight.semibold};
  line-height: 120%;
  letter-spacing: -2px;

  @media (min-width: ${({theme:t})=>t.globalV2.sm.maxWidth}) {
  }

  @media (min-width: ${({theme:t})=>t.globalV2.md.maxWidth}) {
    font-size: ${({theme:t})=>t.typographyV2.fontSize.extralarge};
  }

  @media (min-width: ${({theme:t})=>t.globalV2.lg.maxWidth}) {
  }

  @media (min-width: ${({theme:t})=>t.globalV2.xl.maxWidth}) {
    // font-size: ${({theme:t})=>t.typographyV2.fontSize.ultralarge};
  }
`, e.default.h2.withConfig({
        displayName: "styleConstants__H2Large",
        componentId: "sc-c7910cef-3"
    })
    `
  font-size: ${({theme:t})=>t.typographyV2.fontSize.extralarge};
  font-weight: ${({theme:t})=>t.typographyV2.fontWeight.semibold};
  line-height: 100%;
  letter-spacing: -3px;

  @media (min-width: ${({theme:t})=>t.globalV2.sm.maxWidth}) {
  }

  @media (min-width: ${({theme:t})=>t.globalV2.md.maxWidth}) {
    font-size: ${({theme:t})=>t.typographyV2.fontSize.xlarge};
  }

  @media (min-width: ${({theme:t})=>t.globalV2.lg.maxWidth}) {
  }

  @media (min-width: ${({theme:t})=>t.globalV2.xl.maxWidth}) {
    font-size: 8rem;
  }
`, e.default.p.withConfig({
        displayName: "styleConstants__PLargeGradient",
        componentId: "sc-c7910cef-4"
    })
    `
  font-size: 36px;
  font-weight: ${({theme:t})=>t.typographyV2.fontWeight.semibold};
  line-height: 120%;
  letter-spacing: -2px;

  ${n}

  @media (min-width: ${({theme:t})=>t.globalV2.sm.maxWidth}) {
  }

  @media (min-width: ${({theme:t})=>t.globalV2.md.maxWidth}) {
    font-size: ${({theme:t})=>t.typographyV2.fontSize.extralarge};
  }

  @media (min-width: ${({theme:t})=>t.globalV2.lg.maxWidth}) {
  }

  @media (min-width: ${({theme:t})=>t.globalV2.xl.maxWidth}) {
    // font-size: ${({theme:t})=>t.typographyV2.fontSize.ultralarge};
  }
`;
    let r = e.default.h2.withConfig({
        displayName: "styleConstants__H2_OPT",
        componentId: "sc-c7910cef-5"
    })
    `
  font-size: 24px;
  font-weight: ${({theme:t})=>t.typographyV2.fontWeight.semibold};
  line-height: 133%;
  letter-spacing: -2%;

  // @media (min-width: ${({theme:t})=>t.globalV2.sm.maxWidth}) {
  // }

  // @media (min-width: ${({theme:t})=>t.globalV2.md.maxWidth}) {
  //   font-size: ${({theme:t})=>t.typographyV2.fontSize.extralarge};
  // }

  // @media (min-width: ${({theme:t})=>t.globalV2.lg.maxWidth}) {
  // }

  // @media (min-width: ${({theme:t})=>t.globalV2.xl.maxWidth}) {
  //   // font-size: ${({theme:t})=>t.typographyV2.fontSize.ultralarge};
  // }
`;
    e.default.h2.withConfig({
        displayName: "styleConstants__H2Small",
        componentId: "sc-c7910cef-6"
    })
    `
  font-size: ${({theme:t})=>t.typographyV2.fontSize.mediumsmall};
  font-weight: ${({theme:t})=>t.typographyV2.fontWeight.regular};
  line-height: 100%;

  @media (min-width: ${({theme:t})=>t.globalV2.md.maxWidth}) {
    font-size: ${({theme:t})=>t.typographyV2.fontSize.medium};
  }
`, e.default.h3.withConfig({
        displayName: "styleConstants__H3",
        componentId: "sc-c7910cef-7"
    })
    `
  font-size: ${({theme:t})=>t.typographyV2.fontSize.large};
  font-weight: ${({theme:t})=>t.typographyV2.fontWeight.semibold};
  line-height: 100%;
  letter-spacing: 0.14em;
  text-align: left;
  line-height: 120%;
  letter-spacing: -1.2px;
`, e.default.p.withConfig({
        displayName: "styleConstants__P_OPT",
        componentId: "sc-c7910cef-8"
    })
    `
  font-size: 15px;
  line-height: 140%;
  letter-spacing: -0.3px;

  @media (min-width: ${({theme:t})=>t.globalV2.sm.maxWidth}) {
  }

  @media (min-width: ${({theme:t})=>t.globalV2.md.maxWidth}) {
    // font-size: ${({theme:t})=>t.typographyV2.fontSize.medium};
  }

  @media (min-width: ${({theme:t})=>t.globalV2.lg.maxWidth}) {
  }

  @media (min-width: ${({theme:t})=>t.globalV2.xl.maxWidth}) {
  }
`, e.default.p.withConfig({
        displayName: "styleConstants__PBody",
        componentId: "sc-c7910cef-9"
    })
    `
  font-size: 1.8rem;
  line-height: 140%;
`;
    let o = e.default.p.withConfig({
        displayName: "styleConstants__P",
        componentId: "sc-c7910cef-10"
    })
    `
  font-size: ${({theme:t})=>t.typographyV2.fontSize.small};
  line-height: 110%;

  @media (min-width: ${({theme:t})=>t.globalV2.sm.maxWidth}) {
  }

  @media (min-width: ${({theme:t})=>t.globalV2.md.maxWidth}) {
    font-size: ${({theme:t})=>t.typographyV2.fontSize.medium};
  }

  @media (min-width: ${({theme:t})=>t.globalV2.lg.maxWidth}) {
  }

  @media (min-width: ${({theme:t})=>t.globalV2.xl.maxWidth}) {
  }
`;
    e.default.p.withConfig({
        displayName: "styleConstants__PLarge",
        componentId: "sc-c7910cef-11"
    })
    `
  font-size: ${({theme:t})=>t.typographyV2.fontSize.extralarge};
  font-weight: ${({theme:t})=>t.typographyV2.fontWeight.semibold};
  line-height: 100%;
  letter-spacing: -3px;

  &.larger {
    font-size: 6.4rem;
  }

  @media (min-width: ${({theme:t})=>t.globalV2.sm.maxWidth}) {
  }

  @media (min-width: ${({theme:t})=>t.globalV2.md.maxWidth}) {
    font-size: ${({theme:t})=>t.typographyV2.fontSize.xxlarge};
    &.larger {
      font-size: 11rem;
    }
  }

  @media (min-width: ${({theme:t})=>t.globalV2.lg.maxWidth}) {
  }

  @media (min-width: ${({theme:t})=>t.globalV2.xl.maxWidth}) {
    font-size: ${({theme:t})=>t.typographyV2.fontSize.ultralarge};

    &.larger {
      font-size: 14rem;
    }
  }
`, e.default.div.withConfig({
        displayName: "styleConstants__LeftSideTextWrapper",
        componentId: "sc-c7910cef-12"
    })
    `
  width: 100%;

  @media (min-width: ${({theme:t})=>t.globalV2.sm.maxWidth}) {
  }

  @media (min-width: ${({theme:t})=>t.globalV2.md.maxWidth}) {
    width: 50%;
  }

  @media (min-width: ${({theme:t})=>t.globalV2.lg.maxWidth}) {
    // width: 65%;
  }

  @media (min-width: ${({theme:t})=>t.globalV2.xl.maxWidth}) {
  }
`;
    let a = e.css `
  padding: 9.6rem 0;
  @media (min-width: ${({theme:t})=>t.global.tablet.maxWidth}) {
    padding: 15rem 0;
  }
`;
    e.css `
  padding: 5.2rem 0;
  @media (min-width: ${({theme:t})=>t.global.tablet.maxWidth}) {
    padding: 10rem 0;
  }
`, t.s(["H1", 0, i, "H2_OPT", 0, r, "P", 0, o, "SectionPadding", 0, a])
}, 64130, t => {
    "use strict";
    var e = t.i(91398);
    t.i(64157);
    var n = t.i(71179),
        i = t.i(88234),
        r = t.i(91788),
        o = t.i(60814),
        a = t.i(19231);
    let l = o.default.h2.withConfig({
        displayName: "FAQSection__H2",
        componentId: "sc-baadec64-0"
    })
    `
  text-align: center;
  font-size: 32px;
  font-weight: 500;
  line-height: 120%; /* 38.4px */
  letter-spacing: -0.96px;

  @media (min-width: ${({theme:t})=>t.global.tablet.maxWidth}) {
    font-size: 48px;
    letter-spacing: -1.6px;
  }
`, c = (0, o.default)(({
        className: t,
        title: n,
        description: i
    }) => (0, e.jsxs)("div", {
        className: `${t} faq-element`,
        children: [n ? (0, e.jsx)("h5", {
            children: n
        }) : null, (0, e.jsx)("div", {
            className: `description ${n?"":"text-center"}`,
            children: i
        })]
    })).withConfig({
        displayName: "FAQSection__FAQElement",
        componentId: "sc-baadec64-1"
    })
    `
  display: flex;
  flex-direction: column;
  gap: 8px;

  padding: 40px 0;
  &:first-child {
    padding-top: 0;
  }

  @media (min-width: ${({theme:t})=>t.global.tablet.maxWidth}) {
    padding: 48px 0;
    &:first-child {
      padding-top: 0;
    }

    flex-direction: row;
  }

  h5 {
    font-size: 18px;
    font-weight: 500;
    line-height: 140%;
    letter-spacing: -0.32px;

    @media (min-width: ${({theme:t})=>t.global.tablet.maxWidth}) {
      font-size: 20px;
      letter-spacing: -0.4px;
      text-align: left;
      flex: 0 0 40%;
      margin: 0 auto;
    }

    @media (min-width: ${({theme:t})=>t.global.tablet.maxWidth}) {
    }
  }

  & .description {
    color: var(--description-color);
    font-size: 14px;
    line-height: 150%; /* 19.6px */
    letter-spacing: -0.28px;
    @media (min-width: ${({theme:t})=>t.global.tablet.maxWidth}) {
      font-size: 16px;
      letter-spacing: -0.32px;
      max-width: 56ch;
      min-width: 56ch;
      margin: 0 auto;
    }

    .notes {
      font-size: 14px;
    }

    a,
    b,
    strong {
      color: var(--link-color);
      font-weight: 400;
    }

    ul,
    ol {
      padding-left: 0;
      list-style-position: inside;

      li {
        padding-left: 1.5em;
        text-indent: -1.5em;
      }
    }

    &.text-center {
      text-align: center;
    }
  }
`, s = (0, o.default)(({
        className: t,
        faqData: i,
        bgColor: o = "black",
        htmlId: s,
        pb: d
    }) => {
        let {
            t: u
        } = (0, n.useTranslation)("ring"), f = (0, r.useRef)(null);
        return (0, e.jsx)("section", {
            className: `${t} ${o} ${d}`,
            id: s,
            ref: f,
            children: (0, e.jsxs)(a.Container, {
                className: "container",
                children: [(0, e.jsx)(l, {
                    children: u("ring.faq.head")
                }), (0, e.jsx)("div", {
                    className: "faq-container",
                    children: i.map((t, n) => (0, e.jsx)(c, { ...t
                    }, n))
                })]
            })
        })
    }).withConfig({
        displayName: "FAQSection",
        componentId: "sc-baadec64-2"
    })
    `
  ${i.SectionPadding}

  --background: #000;
  --text-color: #fff;
  --link-color: #fff;
  --link-hover-color: #7d7d7d;
  --description-color: rgba(255, 255, 255, 0.6);
  --border-color: rgba(255, 255, 255, 0.12);

  &.white {
    --background: #fff;
    --text-color: #000;
    --link-color: #000;
    --description-color: rgba(0, 0, 0, 0.6);
    --border-color: rgba(0, 0, 0, 0.12);
  }

  &.grey {
    --background: #f7f7f7;
    --text-color: #000;
    --link-color: #000;
    --description-color: rgba(0, 0, 0, 0.6);
    --border-color: rgba(0, 0, 0, 0.12);
  }

  &.pb-0 {
    padding-bottom: 0;
  }

  background: var(--background);
  color: var(--text-color);

  & .container {
    display: flex;
    flex-direction: column;
    gap: 96px;

    @media (min-width: ${({theme:t})=>t.global.tablet.maxWidth}) {
      gap: 150px;
    }
  }

  .faq-element + .faq-element {
    border-top: 1px solid var(--border-color);
  }

  a {
    display: inline-flex;
    align-items: center;
    gap: 6px;

    &:hover {
      text-decoration: underline;
      text-underline-offset: 10px;
      text-decoration-color: var(--link-hover-color);
    }
  }
`;
    t.s(["FAQSection", 0, s])
}, 69949, t => {
    "use strict";
    var e = t.i(60814);
    let n = e.default.div.withConfig({
        displayName: "BottomBar__LeftPanel",
        componentId: "sc-5820f92-0"
    })
    `
  grid-column: 2 / -2;
  position: relative;

  display: none;
  justify-content: flex-start;
  align-items: center;

  @media (min-width: ${({theme:t})=>t.global.phone.maxWidth}) {
    display: flex;
    grid-column: 1 / 6;
    padding-left: 24px;
  }
`, i = e.default.div.withConfig({
        displayName: "BottomBar__MidPanelPhone",
        componentId: "sc-5820f92-1"
    })
    `
  grid-column: 1/-1;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 8px 0;

  @media (min-width: ${({theme:t})=>t.global.phone.maxWidth}) {
    display: none;
  }
`, r = e.default.div.withConfig({
        displayName: "BottomBar__MidPanel",
        componentId: "sc-5820f92-2"
    })
    `
  grid-column: 1 / -1;
  display: none;
  position: relative;

  @media (min-width: ${({theme:t})=>t.global.phone.maxWidth}) {
    display: flex;
    justify-content: center;
    grid-column: 6 / 8;

    flex-direction: column;
    align-items: end;
  }

  @media (min-width: ${({theme:t})=>t.globalV2.xxl.minWidth}) {
    grid-column: 6 / 8;
  }
`, o = e.default.div.withConfig({
        displayName: "BottomBar__RightPanel",
        componentId: "sc-5820f92-3"
    })
    `
  grid-column: 1 / -1;
  position: relative;

  display: flex;
  flex-direction: column;

  @media (min-width: ${({theme:t})=>t.global.phone.maxWidth}) {
    grid-column: 8 / 11;
    padding-right: 48px;
  }

  @media (min-width: ${({theme:t})=>t.globalV2.xxl.minWidth}) {
    grid-column: 8 / 11;
  }
`;
    t.s(["LeftPanel", 0, n, "MidPanel", 0, r, "MidPanelPhone", 0, i, "RightPanel", 0, o])
}, 14681, t => {
    "use strict";
    var e = t.i(91788);

    function n(t) {
        return "[object Object]" === Object.prototype.toString.call(t) || Array.isArray(t)
    }

    function i(t, e) {
        let r = Object.keys(t),
            o = Object.keys(e);
        return r.length === o.length && JSON.stringify(Object.keys(t.breakpoints || {})) === JSON.stringify(Object.keys(e.breakpoints || {})) && r.every(r => {
            let o = t[r],
                a = e[r];
            return "function" == typeof o ? `${o}` == `${a}` : n(o) && n(a) ? i(o, a) : o === a
        })
    }

    function r(t) {
        return t.concat().sort((t, e) => t.name > e.name ? 1 : -1).map(t => t.options)
    }

    function o(t) {
        return "number" == typeof t
    }

    function a(t) {
        return "string" == typeof t
    }

    function l(t) {
        return "boolean" == typeof t
    }

    function c(t) {
        return "[object Object]" === Object.prototype.toString.call(t)
    }

    function s(t) {
        return Math.abs(t)
    }

    function d(t) {
        return Math.sign(t)
    }

    function u(t) {
        return h(t).map(Number)
    }

    function f(t) {
        return t[m(t)]
    }

    function m(t) {
        return Math.max(0, t.length - 1)
    }

    function p(t, e = 0) {
        return Array.from(Array(t), (t, n) => e + n)
    }

    function h(t) {
        return Object.keys(t)
    }

    function g(t, e) {
        return void 0 !== e.MouseEvent && t instanceof e.MouseEvent
    }

    function x() {
        let t = [],
            e = {
                add: function(n, i, r, o = {
                    passive: !0
                }) {
                    let a;
                    return "addEventListener" in n ? (n.addEventListener(i, r, o), a = () => n.removeEventListener(i, r, o)) : (n.addListener(r), a = () => n.removeListener(r)), t.push(a), e
                },
                clear: function() {
                    t = t.filter(t => t())
                }
            };
        return e
    }

    function b(t = 0, e = 0) {
        let n = s(t - e);

        function i(n) {
            return n < t || n > e
        }
        return {
            length: n,
            max: e,
            min: t,
            constrain: function(n) {
                return i(n) ? n < t ? t : e : n
            },
            reachedAny: i,
            reachedMax: function(t) {
                return t > e
            },
            reachedMin: function(e) {
                return e < t
            },
            removeOffset: function(t) {
                return n ? t - n * Math.ceil((t - e) / n) : t
            }
        }
    }

    function y(t) {
        let e = t;

        function n(t) {
            return o(t) ? t : t.get()
        }
        return {
            get: function() {
                return e
            },
            set: function(t) {
                e = n(t)
            },
            add: function(t) {
                e += n(t)
            },
            subtract: function(t) {
                e -= n(t)
            }
        }
    }

    function w(t, e) {
        let n = "x" === t.scroll ? function(t) {
                return `translate3d(${t}px,0px,0px)`
            } : function(t) {
                return `translate3d(0px,${t}px,0px)`
            },
            i = e.style,
            r = null,
            o = !1;
        return {
            clear: function() {
                !o && (i.transform = "", e.getAttribute("style") || e.removeAttribute("style"))
            },
            to: function(e) {
                if (o) return;
                let a = Math.round(100 * t.direction(e)) / 100;
                a !== r && (i.transform = n(a), r = a)
            },
            toggleActive: function(t) {
                o = !t
            }
        }
    }
    let v = {
        align: "center",
        axis: "x",
        container: null,
        slides: null,
        containScroll: "trimSnaps",
        direction: "ltr",
        slidesToScroll: 1,
        inViewThreshold: 0,
        breakpoints: {},
        dragFree: !1,
        dragThreshold: 10,
        loop: !1,
        skipSnaps: !1,
        duration: 25,
        startIndex: 0,
        active: !0,
        watchDrag: !0,
        watchResize: !0,
        watchSlides: !0,
        watchFocus: !0
    };

    function $(t, e, n) {
        let i, r, C, S, W, z, I, k, V = t.ownerDocument,
            _ = V.defaultView,
            N = function(t) {
                function e(t, e) {
                    return function t(e, n) {
                        return [e, n].reduce((e, n) => (h(n).forEach(i => {
                            let r = e[i],
                                o = n[i],
                                a = c(r) && c(o);
                            e[i] = a ? t(r, o) : o
                        }), e), {})
                    }(t, e || {})
                }
                return {
                    mergeOptions: e,
                    optionsAtMedia: function(n) {
                        let i = n.breakpoints || {},
                            r = h(i).filter(e => t.matchMedia(e).matches).map(t => i[t]).reduce((t, n) => e(t, n), {});
                        return e(n, r)
                    },
                    optionsMediaQueries: function(e) {
                        return e.map(t => h(t.breakpoints || {})).reduce((t, e) => t.concat(e), []).map(t.matchMedia)
                    }
                }
            }(_),
            T = (k = [], {
                init: function(t, e) {
                    return (k = e.filter(({
                        options: t
                    }) => !1 !== N.optionsAtMedia(t).active)).forEach(e => e.init(t, N)), e.reduce((t, e) => Object.assign(t, {
                        [e.name]: e
                    }), {})
                },
                destroy: function() {
                    k = k.filter(t => t.destroy())
                }
            }),
            j = x(),
            A = (r = {}, C = {
                init: function(t) {
                    i = t
                },
                emit: function(t) {
                    return (r[t] || []).forEach(e => e(i, t)), C
                },
                off: function(t, e) {
                    return r[t] = (r[t] || []).filter(t => t !== e), C
                },
                on: function(t, e) {
                    return r[t] = (r[t] || []).concat([e]), C
                },
                clear: function() {
                    r = {}
                }
            }),
            {
                mergeOptions: P,
                optionsAtMedia: E,
                optionsMediaQueries: L
            } = N,
            {
                on: O,
                off: M,
                emit: B
            } = A,
            F = !1,
            H = P(v, $.globalOptions),
            R = P(H),
            D = [];

        function U(e, n) {
            F || (R = E(H = P(H, e)), D = n || D, function() {
                let {
                    container: e,
                    slides: n
                } = R;
                z = (a(e) ? t.querySelector(e) : e) || t.children[0];
                let i = a(n) ? z.querySelectorAll(n) : n;
                I = [].slice.call(i || z.children)
            }(), S = function e(n) {
                let i = function(t, e, n, i, r, c, v) {
                    var $, C;
                    let S, W, z, I, k, V, _, N, T, j, A, P, E, L, {
                            align: O,
                            axis: M,
                            direction: B,
                            startIndex: F,
                            loop: H,
                            duration: R,
                            dragFree: D,
                            dragThreshold: U,
                            inViewThreshold: q,
                            slidesToScroll: G,
                            skipSnaps: Q,
                            containScroll: J,
                            watchResize: X,
                            watchSlides: K,
                            watchDrag: Y,
                            watchFocus: Z
                        } = c,
                        tt = {
                            measure: function(t) {
                                let {
                                    offsetTop: e,
                                    offsetLeft: n,
                                    offsetWidth: i,
                                    offsetHeight: r
                                } = t;
                                return {
                                    top: e,
                                    right: n + i,
                                    bottom: e + r,
                                    left: n,
                                    width: i,
                                    height: r
                                }
                            }
                        },
                        te = tt.measure(e),
                        tn = n.map(tt.measure),
                        ti = (W = "rtl" === B, I = (z = "y" === M) || !W ? 1 : -1, k = z ? "top" : W ? "right" : "left", V = z ? "bottom" : W ? "left" : "right", {
                            scroll: z ? "y" : "x",
                            cross: z ? "x" : "y",
                            startEdge: k,
                            endEdge: V,
                            measureSize: function(t) {
                                let {
                                    height: e,
                                    width: n
                                } = t;
                                return z ? e : n
                            },
                            direction: function(t) {
                                return t * I
                            }
                        }),
                        tr = ti.measureSize(te),
                        to = {
                            measure: function(t) {
                                return t / 100 * tr
                            }
                        },
                        ta = ($ = O, C = tr, S = {
                            start: function() {
                                return 0
                            },
                            center: function(t) {
                                return (C - t) / 2
                            },
                            end: function(t) {
                                return C - t
                            }
                        }, {
                            measure: function(t, e) {
                                return a($) ? S[$](t) : $(C, t, e)
                            }
                        }),
                        tl = !H && !!J,
                        {
                            slideSizes: tc,
                            slideSizesWithGaps: ts,
                            startGap: td,
                            endGap: tu
                        } = function(t, e, n, i, r, o) {
                            let {
                                measureSize: a,
                                startEdge: l,
                                endEdge: c
                            } = t, d = n[0] && r, u = function() {
                                if (!d) return 0;
                                let t = n[0];
                                return s(e[l] - t[l])
                            }(), p = d ? parseFloat(o.getComputedStyle(f(i)).getPropertyValue(`margin-${c}`)) : 0, h = n.map(a), g = n.map((t, e, n) => {
                                let i = e === m(n);
                                return e ? i ? h[e] + p : n[e + 1][l] - t[l] : h[e] + u
                            }).map(s);
                            return {
                                slideSizes: h,
                                slideSizesWithGaps: g,
                                startGap: u,
                                endGap: p
                            }
                        }(ti, te, tn, n, H || !!J, r),
                        tf = function(t, e, n, i, r, a, l, c, d) {
                            let {
                                startEdge: p,
                                endEdge: h,
                                direction: g
                            } = t, x = o(n);
                            return {
                                groupSlides: function(t) {
                                    return x ? u(t).filter(t => t % n == 0).map(e => t.slice(e, e + n)) : t.length ? u(t).reduce((n, o, d) => {
                                        let u = f(n) || 0,
                                            x = o === m(t),
                                            b = r[p] - a[u][p],
                                            y = r[p] - a[o][h],
                                            w = i || 0 !== u ? 0 : g(l),
                                            v = s(y - (!i && x ? g(c) : 0) - (b + w));
                                        return d && v > e + 2 && n.push(o), x && n.push(t.length), n
                                    }, []).map((e, n, i) => {
                                        let r = Math.max(i[n - 1] || 0);
                                        return t.slice(r, e)
                                    }) : []
                                }
                            }
                        }(ti, tr, G, H, te, tn, td, tu, 0),
                        {
                            snaps: tm,
                            snapsAligned: tp
                        } = function(t, e, n, i, r) {
                            let {
                                startEdge: o,
                                endEdge: a
                            } = t, {
                                groupSlides: l
                            } = r, c = l(i).map(t => f(t)[a] - t[0][o]).map(s).map(e.measure), d = i.map(t => n[o] - t[o]).map(t => -s(t)), u = l(d).map(t => t[0]).map((t, e) => t + c[e]);
                            return {
                                snaps: d,
                                snapsAligned: u
                            }
                        }(ti, ta, te, tn, tf),
                        th = -f(tm) + f(ts),
                        {
                            snapsContained: tg,
                            scrollContainLimit: tx
                        } = function(t, e, n, i, r) {
                            let o, a, l = b(-e + t, 0),
                                c = n.map((t, e) => {
                                    let {
                                        min: i,
                                        max: r
                                    } = l, o = l.constrain(t), a = e === m(n);
                                    return e ? a || function(t, e) {
                                        return 1 >= s(t - e)
                                    }(i, o) ? i : function(t, e) {
                                        return 1 >= s(t - e)
                                    }(r, o) ? r : o : r
                                }).map(t => parseFloat(t.toFixed(3))),
                                d = (o = c[0], a = f(c), b(c.lastIndexOf(o), c.indexOf(a) + 1));
                            return {
                                snapsContained: function() {
                                    if (e <= t + 2) return [l.max];
                                    if ("keepSnaps" === i) return c;
                                    let {
                                        min: n,
                                        max: r
                                    } = d;
                                    return c.slice(n, r)
                                }(),
                                scrollContainLimit: d
                            }
                        }(tr, th, tp, J, 0),
                        tb = tl ? tg : tp,
                        {
                            limit: ty
                        } = (_ = tb[0], {
                            limit: b(H ? _ - th : f(tb), _)
                        }),
                        tw = function t(e, n, i) {
                            let {
                                constrain: r
                            } = b(0, e), o = e + 1, a = l(n);

                            function l(t) {
                                return i ? s((o + t) % o) : r(t)
                            }

                            function c() {
                                return t(e, a, i)
                            }
                            let d = {
                                get: function() {
                                    return a
                                },
                                set: function(t) {
                                    return a = l(t), d
                                },
                                add: function(t) {
                                    return c().set(a + t)
                                },
                                clone: c
                            };
                            return d
                        }(m(tb), F, H),
                        tv = tw.clone(),
                        t$ = u(n),
                        tC = function(t, e, n, i) {
                            let r = x(),
                                o = 1e3 / 60,
                                a = null,
                                l = 0,
                                c = 0;

                            function s(t) {
                                if (!c) return;
                                a || (a = t, n(), n());
                                let r = t - a;
                                for (a = t, l += r; l >= o;) n(), l -= o;
                                i(l / o), c && (c = e.requestAnimationFrame(s))
                            }

                            function d() {
                                e.cancelAnimationFrame(c), a = null, l = 0, c = 0
                            }
                            return {
                                init: function() {
                                    r.add(t, "visibilitychange", () => {
                                        t.hidden && (a = null, l = 0)
                                    })
                                },
                                destroy: function() {
                                    d(), r.clear()
                                },
                                start: function() {
                                    c || (c = e.requestAnimationFrame(s))
                                },
                                stop: d,
                                update: n,
                                render: i
                            }
                        }(i, r, () => (({
                            dragHandler: t,
                            scrollBody: e,
                            scrollBounds: n,
                            options: {
                                loop: i
                            }
                        }) => {
                            i || n.constrain(t.pointerDown()), e.seek()
                        })(tL), t => (({
                            scrollBody: t,
                            translate: e,
                            location: n,
                            offsetLocation: i,
                            previousLocation: r,
                            scrollLooper: o,
                            slideLooper: a,
                            dragHandler: l,
                            animation: c,
                            eventHandler: s,
                            scrollBounds: d,
                            options: {
                                loop: u
                            }
                        }, f) => {
                            let m = t.settled(),
                                p = !d.shouldConstrain(),
                                h = u ? m : m && p,
                                g = h && !l.pointerDown();
                            g && c.stop();
                            let x = n.get() * f + r.get() * (1 - f);
                            i.set(x), u && (o.loop(t.direction()), a.loop()), e.to(i.get()), g && s.emit("settle"), h || s.emit("scroll")
                        })(tL, t)),
                        tS = tb[tw.get()],
                        tW = y(tS),
                        tz = y(tS),
                        tI = y(tS),
                        tk = y(tS),
                        tV = function(t, e, n, i, r, o) {
                            let a = 0,
                                l = 0,
                                c = r,
                                u = .68,
                                f = t.get(),
                                m = 0;

                            function p(t) {
                                return c = t, g
                            }

                            function h(t) {
                                return u = t, g
                            }
                            let g = {
                                direction: function() {
                                    return l
                                },
                                duration: function() {
                                    return c
                                },
                                velocity: function() {
                                    return a
                                },
                                seek: function() {
                                    let e = i.get() - t.get(),
                                        r = 0;
                                    return c ? (n.set(t), a += e / c, a *= u, f += a, t.add(a), r = f - m) : (a = 0, n.set(i), t.set(i), r = e), l = d(r), m = f, g
                                },
                                settled: function() {
                                    return .001 > s(i.get() - e.get())
                                },
                                useBaseFriction: function() {
                                    return h(.68)
                                },
                                useBaseDuration: function() {
                                    return p(r)
                                },
                                useFriction: h,
                                useDuration: p
                            };
                            return g
                        }(tW, tI, tz, tk, R, 0),
                        t_ = function(t, e, n, i, r) {
                            let {
                                reachedAny: o,
                                removeOffset: a,
                                constrain: l
                            } = i;

                            function c(t) {
                                return t.concat().sort((t, e) => s(t) - s(e))[0]
                            }

                            function u(e, i) {
                                let r = [e, e + n, e - n];
                                if (!t) return e;
                                if (!i) return c(r);
                                let o = r.filter(t => d(t) === i);
                                return o.length ? c(o) : f(r) - n
                            }
                            return {
                                byDistance: function(n, i) {
                                    let c = r.get() + n,
                                        {
                                            index: d,
                                            distance: f
                                        } = function(n) {
                                            let i = t ? a(n) : l(n),
                                                {
                                                    index: r
                                                } = e.map((t, e) => ({
                                                    diff: u(t - i, 0),
                                                    index: e
                                                })).sort((t, e) => s(t.diff) - s(e.diff))[0];
                                            return {
                                                index: r,
                                                distance: i
                                            }
                                        }(c),
                                        m = !t && o(c);
                                    if (!i || m) return {
                                        index: d,
                                        distance: n
                                    };
                                    let p = n + u(e[d] - f, 0);
                                    return {
                                        index: d,
                                        distance: p
                                    }
                                },
                                byIndex: function(t, n) {
                                    let i = u(e[t] - r.get(), n);
                                    return {
                                        index: t,
                                        distance: i
                                    }
                                },
                                shortcut: u
                            }
                        }(H, tb, th, ty, tk),
                        tN = function(t, e, n, i, r, o, a) {
                            function l(r) {
                                let l = r.distance,
                                    c = r.index !== e.get();
                                o.add(l), l && (i.duration() ? t.start() : (t.update(), t.render(1), t.update())), c && (n.set(e.get()), e.set(r.index), a.emit("select"))
                            }
                            return {
                                distance: function(t, e) {
                                    l(r.byDistance(t, e))
                                },
                                index: function(t, n) {
                                    let i = e.clone().set(t);
                                    l(r.byIndex(i.get(), n))
                                }
                            }
                        }(tC, tw, tv, tV, t_, tk, v),
                        tT = function(t) {
                            let {
                                max: e,
                                length: n
                            } = t;
                            return {
                                get: function(t) {
                                    return n ? -((t - e) / n) : 0
                                }
                            }
                        }(ty),
                        tj = x(),
                        tA = (T = {}, j = null, A = null, P = !1, {
                            init: function() {
                                N = new IntersectionObserver(t => {
                                    P || (t.forEach(t => {
                                        T[n.indexOf(t.target)] = t
                                    }), j = null, A = null, v.emit("slidesInView"))
                                }, {
                                    root: e.parentElement,
                                    threshold: q
                                }), n.forEach(t => N.observe(t))
                            },
                            destroy: function() {
                                N && N.disconnect(), P = !0
                            },
                            get: function(t = !0) {
                                if (t && j) return j;
                                if (!t && A) return A;
                                let e = h(T).reduce((e, n) => {
                                    let i = parseInt(n),
                                        {
                                            isIntersecting: r
                                        } = T[i];
                                    return (t && r || !t && !r) && e.push(i), e
                                }, []);
                                return t && (j = e), t || (A = e), e
                            }
                        }),
                        {
                            slideRegistry: tP
                        } = function(t, e, n, i, r, o) {
                            let a, {
                                    groupSlides: l
                                } = r,
                                {
                                    min: c,
                                    max: s
                                } = i;
                            return {
                                slideRegistry: (a = l(o), 1 === n.length ? [o] : t && "keepSnaps" !== e ? a.slice(c, s).map((t, e, n) => {
                                    let i = e === m(n);
                                    return e ? i ? p(m(o) - f(n)[0] + 1, f(n)[0]) : t : p(f(n[0]) + 1)
                                }) : a)
                            }
                        }(tl, J, tb, tx, tf, t$),
                        tE = function(t, e, n, i, r, a, c, s) {
                            let d = {
                                    passive: !0,
                                    capture: !0
                                },
                                u = 0;

                            function f(t) {
                                "Tab" === t.code && (u = new Date().getTime())
                            }
                            return {
                                init: function(m) {
                                    s && (a.add(document, "keydown", f, !1), e.forEach((e, f) => {
                                        a.add(e, "focus", e => {
                                            (l(s) || s(m, e)) && function(e) {
                                                if (new Date().getTime() - u > 10) return;
                                                c.emit("slideFocusStart"), t.scrollLeft = 0;
                                                let a = n.findIndex(t => t.includes(e));
                                                o(a) && (r.useDuration(0), i.index(a, 0), c.emit("slideFocus"))
                                            }(f)
                                        }, d)
                                    }))
                                }
                            }
                        }(t, n, tP, tN, tV, tj, v, Z),
                        tL = {
                            ownerDocument: i,
                            ownerWindow: r,
                            eventHandler: v,
                            containerRect: te,
                            slideRects: tn,
                            animation: tC,
                            axis: ti,
                            dragHandler: function(t, e, n, i, r, o, a, c, u, f, m, p, h, y, w, v, $, C, S) {
                                let {
                                    cross: W,
                                    direction: z
                                } = t, I = ["INPUT", "SELECT", "TEXTAREA"], k = {
                                    passive: !1
                                }, V = x(), _ = x(), N = b(50, 225).constrain(y.measure(20)), T = {
                                    mouse: 300,
                                    touch: 400
                                }, j = {
                                    mouse: 500,
                                    touch: 600
                                }, A = w ? 43 : 25, P = !1, E = 0, L = 0, O = !1, M = !1, B = !1, F = !1;

                                function H(t) {
                                    if (!g(t, i) && t.touches.length >= 2) return R(t);
                                    let e = o.readPoint(t),
                                        n = o.readPoint(t, W),
                                        a = s(e - E),
                                        l = s(n - L);
                                    if (!M && !F && (!t.cancelable || !(M = a > l))) return R(t);
                                    let d = o.pointerMove(t);
                                    a > v && (B = !0), f.useFriction(.3).useDuration(.75), c.start(), r.add(z(d)), t.preventDefault()
                                }

                                function R(t) {
                                    var e;
                                    let n, i, r = m.byDistance(0, !1).index !== p.get(),
                                        a = o.pointerUp(t) * (w ? j : T)[F ? "mouse" : "touch"],
                                        l = (e = z(a), n = p.add(-1 * d(e)), i = m.byDistance(e, !w).distance, w || s(e) < N ? i : $ && r ? .5 * i : m.byIndex(n.get(), 0).distance),
                                        c = function(t, e) {
                                            var n, i;
                                            if (0 === t || 0 === e || s(t) <= s(e)) return 0;
                                            let r = (n = s(t), i = s(e), s(n - i));
                                            return s(r / t)
                                        }(a, l);
                                    M = !1, O = !1, _.clear(), f.useDuration(A - 10 * c).useFriction(.68 + c / 50), u.distance(l, !w), F = !1, h.emit("pointerUp")
                                }

                                function D(t) {
                                    B && (t.stopPropagation(), t.preventDefault(), B = !1)
                                }
                                return {
                                    init: function(t) {
                                        S && V.add(e, "dragstart", t => t.preventDefault(), k).add(e, "touchmove", () => void 0, k).add(e, "touchend", () => void 0).add(e, "touchstart", c).add(e, "mousedown", c).add(e, "touchcancel", R).add(e, "contextmenu", R).add(e, "click", D, !0);

                                        function c(c) {
                                            (l(S) || S(t, c)) && function(t) {
                                                let l, c = g(t, i);
                                                if ((F = c, B = w && c && !t.buttons && P, P = s(r.get() - a.get()) >= 2, !c || 0 === t.button) && (l = t.target.nodeName || "", !I.includes(l))) {
                                                    let i;
                                                    O = !0, o.pointerDown(t), f.useFriction(0).useDuration(0), r.set(a), i = F ? n : e, _.add(i, "touchmove", H, k).add(i, "touchend", R).add(i, "mousemove", H, k).add(i, "mouseup", R), E = o.readPoint(t), L = o.readPoint(t, W), h.emit("pointerDown")
                                                }
                                            }(c)
                                        }
                                    },
                                    destroy: function() {
                                        V.clear(), _.clear()
                                    },
                                    pointerDown: function() {
                                        return O
                                    }
                                }
                            }(ti, t, i, r, tk, function(t, e) {
                                let n, i;

                                function r(t) {
                                    return t.timeStamp
                                }

                                function o(n, i) {
                                    let r = i || t.scroll,
                                        o = `client${"x"===r?"X":"Y"}`;
                                    return (g(n, e) ? n : n.touches[0])[o]
                                }
                                return {
                                    pointerDown: function(t) {
                                        return n = t, i = t, o(t)
                                    },
                                    pointerMove: function(t) {
                                        let e = o(t) - o(i),
                                            a = r(t) - r(n) > 170;
                                        return i = t, a && (n = t), e
                                    },
                                    pointerUp: function(t) {
                                        if (!n || !i) return 0;
                                        let e = o(i) - o(n),
                                            a = r(t) - r(n),
                                            l = r(t) - r(i) > 170,
                                            c = e / a;
                                        return a && !l && s(c) > .1 ? c : 0
                                    },
                                    readPoint: o
                                }
                            }(ti, r), tW, tC, tN, tV, t_, tw, v, to, D, U, Q, 0, Y),
                            eventStore: tj,
                            percentOfView: to,
                            index: tw,
                            indexPrevious: tv,
                            limit: ty,
                            location: tW,
                            offsetLocation: tI,
                            previousLocation: tz,
                            options: c,
                            resizeHandler: function(t, e, n, i, r, o, a) {
                                let c, d, u = [t].concat(i),
                                    f = [],
                                    m = !1;

                                function p(t) {
                                    return r.measureSize(a.measure(t))
                                }
                                return {
                                    init: function(r) {
                                        o && (d = p(t), f = i.map(p), c = new ResizeObserver(n => {
                                            (l(o) || o(r, n)) && function(n) {
                                                for (let o of n) {
                                                    if (m) return;
                                                    let n = o.target === t,
                                                        a = i.indexOf(o.target),
                                                        l = n ? d : f[a];
                                                    if (s(p(n ? t : i[a]) - l) >= .5) {
                                                        r.reInit(), e.emit("resize");
                                                        break
                                                    }
                                                }
                                            }(n)
                                        }), n.requestAnimationFrame(() => {
                                            u.forEach(t => c.observe(t))
                                        }))
                                    },
                                    destroy: function() {
                                        m = !0, c && c.disconnect()
                                    }
                                }
                            }(e, v, r, n, ti, X, tt),
                            scrollBody: tV,
                            scrollBounds: function(t, e, n, i, r) {
                                let o = r.measure(10),
                                    a = r.measure(50),
                                    l = b(.1, .99),
                                    c = !1;

                                function d() {
                                    return !c && !!t.reachedAny(n.get()) && !!t.reachedAny(e.get())
                                }
                                return {
                                    shouldConstrain: d,
                                    constrain: function(r) {
                                        if (!d()) return;
                                        let c = t.reachedMin(e.get()) ? "min" : "max",
                                            u = s(t[c] - e.get()),
                                            f = n.get() - e.get(),
                                            m = l.constrain(u / a);
                                        n.subtract(f * m), !r && s(f) < o && (n.set(t.constrain(n.get())), i.useDuration(25).useBaseFriction())
                                    },
                                    toggleActive: function(t) {
                                        c = !t
                                    }
                                }
                            }(ty, tI, tk, tV, to),
                            scrollLooper: function(t, e, n, i) {
                                let {
                                    reachedMin: r,
                                    reachedMax: o
                                } = b(e.min + .1, e.max + .1);
                                return {
                                    loop: function(e) {
                                        if (!(1 === e ? o(n.get()) : -1 === e && r(n.get()))) return;
                                        let a = -1 * e * t;
                                        i.forEach(t => t.add(a))
                                    }
                                }
                            }(th, ty, tI, [tW, tI, tz, tk]),
                            scrollProgress: tT,
                            scrollSnapList: tb.map(tT.get),
                            scrollSnaps: tb,
                            scrollTarget: t_,
                            scrollTo: tN,
                            slideLooper: function(t, e, n, i, r, o, a, l, c) {
                                let s = u(r),
                                    d = u(r).reverse(),
                                    f = h(p(d, a[0]), n, !1).concat(h(p(s, e - a[0] - 1), -n, !0));

                                function m(t, e) {
                                    return t.reduce((t, e) => t - r[e], e)
                                }

                                function p(t, e) {
                                    return t.reduce((t, n) => m(t, e) > 0 ? t.concat([n]) : t, [])
                                }

                                function h(r, a, s) {
                                    let d = o.map((t, n) => ({
                                        start: t - i[n] + .5 + a,
                                        end: t + e - .5 + a
                                    }));
                                    return r.map(e => {
                                        let i = s ? 0 : -n,
                                            r = s ? n : 0,
                                            o = d[e][s ? "end" : "start"];
                                        return {
                                            index: e,
                                            loopPoint: o,
                                            slideLocation: y(-1),
                                            translate: w(t, c[e]),
                                            target: () => l.get() > o ? i : r
                                        }
                                    })
                                }
                                return {
                                    canLoop: function() {
                                        return f.every(({
                                            index: t
                                        }) => .1 >= m(s.filter(e => e !== t), e))
                                    },
                                    clear: function() {
                                        f.forEach(t => t.translate.clear())
                                    },
                                    loop: function() {
                                        f.forEach(t => {
                                            let {
                                                target: e,
                                                translate: n,
                                                slideLocation: i
                                            } = t, r = e();
                                            r !== i.get() && (n.to(r), i.set(r))
                                        })
                                    },
                                    loopPoints: f
                                }
                            }(ti, tr, th, tc, ts, tm, tb, tI, n),
                            slideFocus: tE,
                            slidesHandler: (L = !1, {
                                init: function(t) {
                                    K && (E = new MutationObserver(e => {
                                        !L && (l(K) || K(t, e)) && function(e) {
                                            for (let n of e)
                                                if ("childList" === n.type) {
                                                    t.reInit(), v.emit("slidesChanged");
                                                    break
                                                }
                                        }(e)
                                    })).observe(e, {
                                        childList: !0
                                    })
                                },
                                destroy: function() {
                                    E && E.disconnect(), L = !0
                                }
                            }),
                            slidesInView: tA,
                            slideIndexes: t$,
                            slideRegistry: tP,
                            slidesToScroll: tf,
                            target: tk,
                            translate: w(ti, e)
                        };
                    return tL
                }(t, z, I, V, _, n, A);
                return n.loop && !i.slideLooper.canLoop() ? e(Object.assign({}, n, {
                    loop: !1
                })) : i
            }(R), L([H, ...D.map(({
                options: t
            }) => t)]).forEach(t => j.add(t, "change", q)), R.active && (S.translate.to(S.location.get()), S.animation.init(), S.slidesInView.init(), S.slideFocus.init(X), S.eventHandler.init(X), S.resizeHandler.init(X), S.slidesHandler.init(X), S.options.loop && S.slideLooper.loop(), z.offsetParent && I.length && S.dragHandler.init(X), W = T.init(X, D)))
        }

        function q(t, e) {
            let n = J();
            G(), U(P({
                startIndex: n
            }, t), e), A.emit("reInit")
        }

        function G() {
            S.dragHandler.destroy(), S.eventStore.clear(), S.translate.clear(), S.slideLooper.clear(), S.resizeHandler.destroy(), S.slidesHandler.destroy(), S.slidesInView.destroy(), S.animation.destroy(), T.destroy(), j.clear()
        }

        function Q(t, e, n) {
            R.active && !F && (S.scrollBody.useBaseFriction().useDuration(!0 === e ? 0 : R.duration), S.scrollTo.index(t, n || 0))
        }

        function J() {
            return S.index.get()
        }
        let X = {
            canScrollNext: function() {
                return S.index.add(1).get() !== J()
            },
            canScrollPrev: function() {
                return S.index.add(-1).get() !== J()
            },
            containerNode: function() {
                return z
            },
            internalEngine: function() {
                return S
            },
            destroy: function() {
                F || (F = !0, j.clear(), G(), A.emit("destroy"), A.clear())
            },
            off: M,
            on: O,
            emit: B,
            plugins: function() {
                return W
            },
            previousScrollSnap: function() {
                return S.indexPrevious.get()
            },
            reInit: q,
            rootNode: function() {
                return t
            },
            scrollNext: function(t) {
                Q(S.index.add(1).get(), t, -1)
            },
            scrollPrev: function(t) {
                Q(S.index.add(-1).get(), t, 1)
            },
            scrollProgress: function() {
                return S.scrollProgress.get(S.offsetLocation.get())
            },
            scrollSnapList: function() {
                return S.scrollSnapList
            },
            scrollTo: Q,
            selectedScrollSnap: J,
            slideNodes: function() {
                return I
            },
            slidesInView: function() {
                return S.slidesInView.get()
            },
            slidesNotInView: function() {
                return S.slidesInView.get(!1)
            }
        };
        return U(e, n), setTimeout(() => A.emit("init"), 0), X
    }

    function C(t = {}, n = []) {
        let o = (0, e.useRef)(t),
            a = (0, e.useRef)(n),
            [l, c] = (0, e.useState)(),
            [s, d] = (0, e.useState)(),
            u = (0, e.useCallback)(() => {
                l && l.reInit(o.current, a.current)
            }, [l]);
        return (0, e.useEffect)(() => {
            i(o.current, t) || (o.current = t, u())
        }, [t, u]), (0, e.useEffect)(() => {
            ! function(t, e) {
                if (t.length !== e.length) return !1;
                let n = r(t),
                    o = r(e);
                return n.every((t, e) => i(t, o[e]))
            }(a.current, n) && (a.current = n, u())
        }, [n, u]), (0, e.useEffect)(() => {
            if ("u" > typeof window && window.document && window.document.createElement && s) {
                $.globalOptions = C.globalOptions;
                let t = $(s, o.current, a.current);
                return c(t), () => t.destroy()
            }
            c(void 0)
        }, [s, c]), [d, l]
    }
    $.globalOptions = void 0, C.globalOptions = void 0, t.s(["default", () => C], 14681)
}, 86236, t => {
    "use strict";
    let e = t.i(91788).useLayoutEffect;
    t.s(["useIsomorphicLayoutEffect", 0, e])
}, 8762, t => {
    "use strict";
    var e = t.i(91788),
        n = t.i(18888),
        i = t.i(86236),
        r = t.i(92195),
        o = t.i(62774);

    function a(t, l = () => {}) {
        let c = (0, e.useMemo)(() => n.default.context(l, t), [t]),
            s = (0, e.useMemo)(() => (0, o.debounce)(() => r.ScrollTrigger.refresh(), 300), []);
        return (0, i.useIsomorphicLayoutEffect)(() => (window.addEventListener("resize", s), () => {
            window.removeEventListener("resize", s), c.revert()
        }), [s]), c
    }
    t.s(["useGsapContext", () => a])
}, 82382, t => {
    "use strict";
    var e = t.i(50461),
        n = t.i(91398),
        i = t.i(91788),
        r = t.i(18888),
        o = t.i(92195),
        a = t.i(86236);
    t.i(22367);
    let l = (0, i.createContext)({
            master: null,
            add: () => {},
            schedule: () => {},
            getSettings: () => ({
                updateInterval: 80,
                showNested: !0,
                height: "medium",
                showLabels: !0,
                opacity: .9,
                enabled: !0
            }),
            updateSettings: () => {}
        }),
        c = "ultrahuman-timeline-settings";
    t.s(["MasterTimelineProvider", 0, ({
        children: t
    }) => {
        let s = (0, i.useRef)(null),
            d = (0, i.useRef)(0),
            u = (0, i.useRef)(new Map);
        (0, i.useRef)({
            time: 0,
            duration: 0,
            sections: []
        });
        let f = (0, i.useRef)((() => {
                try {
                    let t = localStorage.getItem(c);
                    if (t) {
                        let e = JSON.parse(t);
                        return {
                            updateInterval: e.updateInterval ? ? 80,
                            showNested: e.showNested ? ? !0,
                            height: e.height ? ? "medium",
                            showLabels: e.showLabels ? ? !0,
                            opacity: e.opacity ? ? .9,
                            enabled: e.enabled ? ? !0
                        }
                    }
                } catch (t) {
                    console.warn("Failed to load timeline settings:", t)
                }
                return {
                    updateInterval: 80,
                    showNested: !0,
                    height: "medium",
                    showLabels: !0,
                    opacity: .9,
                    enabled: !0
                }
            })()),
            m = (0, i.useRef)(null),
            p = (0, i.useRef)(null),
            h = "true" === String(e.default.env.NEXT_PUBLIC_SHOW_ANIMATION_TIMELINE || "").toLowerCase() && !1,
            [g, x] = i.default.useState(!1),
            b = (0, i.useCallback)(() => {}, [h]),
            y = (0, i.useCallback)(() => ({ ...f.current
            }), []),
            w = (0, i.useCallback)(t => {
                let e = { ...f.current,
                    ...t
                };
                f.current = e;
                try {
                    localStorage.setItem(c, JSON.stringify(e))
                } catch (t) {
                    console.warn("Failed to save timeline settings:", t)
                }
                void 0 !== t.updateInterval && m.current && clearInterval(m.current), void 0 !== t.enabled && m.current && (clearInterval(m.current), m.current = null)
            }, [b, h]);
        (0, a.useIsomorphicLayoutEffect)(() => {
            s.current = r.gsap.timeline({
                paused: !0
            }), d.current = 0;
            let t = requestAnimationFrame(() => o.ScrollTrigger.refresh());
            return () => {
                s.current && (s.current.kill(), s.current = null), m.current && (clearInterval(m.current), m.current = null), u.current.clear(), d.current = 0, cancelAnimationFrame(t)
            }
        }, [b, h]), i.default.useEffect(() => {
            x(!0)
        }, []);
        let v = (0, i.useCallback)((t, e, n) => {
                if (!s.current || !t) return;
                let i = "number" == typeof n && isFinite(n) ? n : d.current,
                    r = e || `timeline-${d.current}`;
                s.current.addLabel(r, i), s.current.add(t, i), d.current += 1, o.ScrollTrigger.refresh()
            }, [h]),
            $ = (0, i.useCallback)((t, e) => {
                if (!s.current || "function" != typeof t) return;
                let n = d.current,
                    i = e || `callback-${d.current}`;
                s.current.addLabel(i, n), s.current.add(t, n), d.current += 1, o.ScrollTrigger.refresh()
            }, [h]);
        (0, i.useCallback)((t, e, n) => null, [h]), (0, i.useCallback)(t => {
            p.current = t
        }, []);
        let C = (0, i.useMemo)(() => ({
            master: s.current,
            add: v,
            schedule: $,
            getSettings: y,
            updateSettings: w
        }), [v, $, y, w]);
        return (0, n.jsxs)(l.Provider, {
            value: C,
            children: [t, null]
        })
    }, "useMasterTimeline", 0, () => (0, i.useContext)(l)])
}, 52935, 27005, t => {
    "use strict";
    var e = t.i(91398);
    t.i(64157);
    var n = t.i(71179),
        i = t.i(8762),
        r = t.i(91788),
        o = t.i(60814),
        a = t.i(86236),
        l = t.i(2756),
        c = t.i(19231),
        s = t.i(57134),
        d = t.i(48095),
        u = t.i(18888),
        f = t.i(82382),
        m = t.i(57232),
        p = t.i(73528);
    let h = (t, n) => t.split(" ").map((t, i) => (0, e.jsxs)(e.Fragment, {
        children: [(0, e.jsx)("span", {
            style: {
                display: "inline-block"
            },
            className: n,
            children: t
        }, i), " "]
    }));
    t.s(["splitTextIntoSpans", 0, h], 27005);
    let g = (0, o.default)(({
        className: t,
        title: o
    }) => {
        let g = (0, i.useGsapContext)(),
            {
                add: x
            } = (0, f.useMasterTimeline)(),
            {
                width: b
            } = (0, m.useWindowSize)(),
            y = (0, r.useRef)(null),
            w = (0, r.useRef)(!1),
            v = (0, r.useContext)(s.ModalContext),
            $ = (0, r.useRef)(null);
        (0, a.useIsomorphicLayoutEffect)(() => ($.current = new IntersectionObserver(t => {
            t[0].isIntersecting && y.current && window && !w.current && (g.add(() => {
                let t = y.current;
                if (!t) return;
                let e = t.querySelectorAll(".tc-1 > span"),
                    n = t.querySelector(".tc-2"),
                    i = t.querySelectorAll(".tc-2 > span"),
                    r = u.default.timeline({
                        defaults: {
                            duration: 1,
                            ease: "power2.easeInOut"
                        },
                        scrollTrigger: {
                            trigger: t,
                            start: "top top",
                            end: "bottom bottom",
                            scrub: .2,
                            immediateRender: !1
                        }
                    });
                u.default.set([n, i], {
                    willChange: "opacity, visibility"
                }), r.fromTo(e, {
                    autoAlpha: .2
                }, {
                    autoAlpha: 1,
                    duration: .35,
                    stagger: .2
                }, .2).to(e, {
                    autoAlpha: 0,
                    duration: .35
                }, "+=0.5").to(n, {
                    autoAlpha: 1,
                    duration: .01
                }, "+=0.5").fromTo(i, {
                    autoAlpha: .2
                }, {
                    autoAlpha: 1,
                    duration: .35,
                    stagger: .2
                }).addPause(5.5).eventCallback("onComplete", () => {
                    u.default.set([e, n, i], {
                        willChange: "auto"
                    })
                }), x(r, "buy-product-wizard")
            }), w.current = !0)
        }, {
            root: null,
            rootMargin: "100px",
            threshold: 0
        }), y.current && $.current.observe(y.current), () => {
            $.current && $.current.disconnect()
        }), []);
        let {
            t: C
        } = (0, n.useTranslation)("ring");
        return (0, e.jsx)("section", {
            className: t,
            ref: y,
            children: (0, e.jsx)("div", {
                className: "sticky-wrapper",
                children: (0, e.jsxs)(c.Container, {
                    children: [(0, e.jsx)(d.PLargeGradient, {
                        className: "anim-text-content tc-1",
                        children: h(o)
                    }), (0, e.jsxs)(d.PLargeGradient, {
                        className: "anim-text-content tc-2",
                        children: [h(C("ring.productWizard.contentB_A")), b >= 992 ? (0, e.jsx)("br", {}) : null, " ", h(C("ring.productWizard.contentB_B")), (0, e.jsxs)("span", {
                            style: {
                                fontSize: "24px",
                                fontWeight: "400",
                                lineHeight: "normal",
                                letterSpacing: "-0.96px",
                                display: "block",
                                marginTop: "1.6rem"
                            },
                            children: [C("ring.productWizard.contentC.textA"), " ", (0, e.jsx)("br", {}), C("ring.productWizard.contentC.textB")]
                        }), (0, e.jsx)("span", {
                            style: {
                                fontSize: "24px",
                                fontWeight: "400",
                                lineHeight: "normal",
                                letterSpacing: "-0.96px",
                                display: "block",
                                marginTop: "4rem"
                            },
                            children: (0, e.jsx)("button", {
                                onClick: () => {
                                    let t = "website";
                                    window && (t = window.location.hostname + window.location.pathname), p.default.track("product wizard talk to expert - CLICK"), v.set((0, e.jsx)(l.BookCallTFComponentDiv, {
                                        trackingParams: {
                                            utm_source: t,
                                            utm_medium: "product-wizard-section"
                                        }
                                    })), v.setCloseButtonTheme("light"), v.show()
                                },
                                children: C("ring.productWizard.contentC.btnText")
                            })
                        })]
                    })]
                })
            })
        })
    }).withConfig({
        displayName: "ProductWizard",
        componentId: "sc-6c3f2612-0"
    })
    `
  height: 250vh;
  height: 250lvh;
  position: relative;
  background: ${({backgroundColor:t})=>t||"#fff"};
  .sticky-wrapper {
    width: 100%;
    overflow: hidden;
    position: sticky;
    top: 0;
    height: 100vh;
    height: 100lvh;

    @media (min-width: ${({theme:t})=>t.globalV2.lg.minWidth}) {
      ${d.SectionPadding}
    }

    & > div {
      position: relative;
      height: 100%;
      display: grid;
      place-items: center;
      padding: 48px 12px;
    }

    & .anim-text-content {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      width: calc(100% - 32px);
      z-index: 1;
      text-align: center;
      font-size: 40px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;

      @media (min-width: ${({theme:t})=>t.globalV2.lg.minWidth}) {
        width: 24ch;
        font-size: 68px;
        letter-spacing: -2.72px;
      }

      span {
        color: rgba(0, 0, 0);
        //opacity: 0;
      }
    }

    .anim-text-content.tc-1 > span {
      opacity: 0.2;
    }

    .tc-2 {
      opacity: 0;
      visibility: hidden;
    }

    .anim-text-content.tc-2 > span {
      opacity: 0.2;
    }
  }

  text-align: center;

  button {
    border: none;
    outline: none;
    text-align: left;
    background: #000;
    color: #fff;
    text-align: center;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 120%; /* 18px */
    letter-spacing: -0.3px;
    display: inline-flex;
    padding: 11px 24px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 35px;
  }
`;
    t.s(["ProductWizard", 0, g], 52935)
}]);