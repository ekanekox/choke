(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 13308, e => {
    "use strict";
    var t = e.i(91398),
        i = e.i(60814);
    let n = (0, i.default)(({
        className: e,
        children: i,
        ctaText: n,
        ctaOnClick: o
    }) => (0, t.jsxs)("div", {
        className: e,
        onClick: e => e.stopPropagation(),
        "aria-hidden": "true",
        children: [(0, t.jsx)("div", {
            className: "children-container",
            children: i
        }), n && n.length ? (0, t.jsx)("div", {
            className: "sticky-container",
            children: (0, t.jsx)("button", {
                onClick: o,
                children: n
            })
        }) : null]
    })).withConfig({
        displayName: "ImageModal",
        componentId: "sc-382bf985-0"
    })
    `
  position: relative;
  width: 89rem;
  margin: auto;
  z-index: 12;
  overflow: hidden;
  max-height: 85vh;
  border-radius: 2.4rem;
  overflow: auto;
  background-color: #fff;
  .children-container {
    overflow-y: auto;
    flex-grow: 1; /* This allows the children to take all available space */
  }

  .sticky-container {
    position: sticky;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    color: white;
    padding: 1rem;
    text-align: center;
    border: none;
    display: flex;
    justify-content: center;
    z-index: 6;
    cursor: pointer;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.9) 107.81%
    );
    -webkit-backdrop-filter: blur(7.5px);
    backdrop-filter: blur(7.5px);

    button {
      border-radius: 32px;
      background: #000000;
      border: none;
      padding: 1.2rem 3.2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;
      color: #fff;
      text-align: center;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 16px; /* 100% */
      letter-spacing: -0.32px;
      transition: all 0.2s ease-in-out;

      &:hover {
        background-color: #000000cc;
      }
    }
  }
`;
    e.s(["ImageModal", 0, n])
}, 71588, e => {
    e.v("/_next/static/media/chat-bubbles.2bd81f1f.svg")
}, 69752, e => {
    e.v("/_next/static/media/cross-icon.6b992514.svg")
}, 88492, e => {
    e.v("/_next/static/media/birthday-icon.7c114bbc.svg")
}, 48095, e => {
    "use strict";
    var t = e.i(60814);
    let i = t.css `
  color: #ffffff;
  background: linear-gradient(98.35deg, #ffffff 1.84%, #757575 228.23%);

  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`,
        n = t.default.h1.withConfig({
            displayName: "styleConstants__H1",
            componentId: "sc-aac63a44-0"
        })
    `
  font-size: ${({theme:e})=>e.typographyV2.fontSize.extralarge};
  font-weight: ${({theme:e})=>e.typographyV2.fontWeight.semibold};
  line-height: 100%;
  letter-spacing: -3px;

  ${i}

  @media (min-width: ${({theme:e})=>e.globalV2.sm.maxWidth}) {
  }

  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    font-size: ${({theme:e})=>e.typographyV2.fontSize.xlarge};
  }

  @media (min-width: ${({theme:e})=>e.globalV2.lg.maxWidth}) {
  }

  @media (min-width: ${({theme:e})=>e.globalV2.xl.maxWidth}) {
    font-size: ${({theme:e})=>e.typographyV2.fontSize.xxlarge};
  }
`, o = t.default.h1.withConfig({
        displayName: "styleConstants__H1_OPT",
        componentId: "sc-aac63a44-1"
    })
    `
  font-size: 44px;
  font-weight: ${({theme:e})=>e.typographyV2.fontWeight.semibold};
  line-height: 120%;
  letter-spacing: -1px;

  // @media (min-width: ${({theme:e})=>e.globalV2.sm.maxWidth}) {
  // }

  // @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
  //   font-size: ${({theme:e})=>e.typographyV2.fontSize.xlarge};
  // }

  // @media (min-width: ${({theme:e})=>e.globalV2.lg.maxWidth}) {
  // }

  // @media (min-width: ${({theme:e})=>e.globalV2.xl.maxWidth}) {
  //   font-size: ${({theme:e})=>e.typographyV2.fontSize.xxlarge};
  // }
`, a = t.default.h2.withConfig({
        displayName: "styleConstants__H2",
        componentId: "sc-aac63a44-2"
    })
    `
  font-size: 36px;
  font-weight: ${({theme:e})=>e.typographyV2.fontWeight.semibold};
  line-height: 120%;
  letter-spacing: -2px;

  ${i}

  @media (min-width: ${({theme:e})=>e.globalV2.sm.maxWidth}) {
  }

  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    font-size: ${({theme:e})=>e.typographyV2.fontSize.extralarge};
  }

  @media (min-width: ${({theme:e})=>e.globalV2.lg.maxWidth}) {
  }

  @media (min-width: ${({theme:e})=>e.globalV2.xl.maxWidth}) {
    // font-size: ${({theme:e})=>e.typographyV2.fontSize.ultralarge};
  }
`, r = t.default.p.withConfig({
        displayName: "styleConstants__PLargeGradient",
        componentId: "sc-aac63a44-3"
    })
    `
  font-size: 36px;
  font-weight: ${({theme:e})=>e.typographyV2.fontWeight.semibold};
  line-height: 120%;
  letter-spacing: -2px;

  ${i}

  @media (min-width: ${({theme:e})=>e.globalV2.sm.maxWidth}) {
  }

  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    font-size: ${({theme:e})=>e.typographyV2.fontSize.extralarge};
  }

  @media (min-width: ${({theme:e})=>e.globalV2.lg.maxWidth}) {
  }

  @media (min-width: ${({theme:e})=>e.globalV2.xl.maxWidth}) {
    // font-size: ${({theme:e})=>e.typographyV2.fontSize.ultralarge};
  }
`, l = t.default.h2.withConfig({
        displayName: "styleConstants__H2_OPT",
        componentId: "sc-aac63a44-4"
    })
    `
  font-size: 24px;
  font-weight: ${({theme:e})=>e.typographyV2.fontWeight.semibold};
  line-height: 133%;
  letter-spacing: -2%;

  // @media (min-width: ${({theme:e})=>e.globalV2.sm.maxWidth}) {
  // }

  // @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
  //   font-size: ${({theme:e})=>e.typographyV2.fontSize.extralarge};
  // }

  // @media (min-width: ${({theme:e})=>e.globalV2.lg.maxWidth}) {
  // }

  // @media (min-width: ${({theme:e})=>e.globalV2.xl.maxWidth}) {
  //   // font-size: ${({theme:e})=>e.typographyV2.fontSize.ultralarge};
  // }
`;
    t.default.h2.withConfig({
        displayName: "styleConstants__H2Small",
        componentId: "sc-aac63a44-5"
    })
    `
  font-size: ${({theme:e})=>e.typographyV2.fontSize.mediumsmall};
  font-weight: ${({theme:e})=>e.typographyV2.fontWeight.regular};
  line-height: 100%;

  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    font-size: ${({theme:e})=>e.typographyV2.fontSize.medium};
  }
`;
    let d = t.default.h3.withConfig({
        displayName: "styleConstants__H3",
        componentId: "sc-aac63a44-6"
    })
    `
  font-size: ${({theme:e})=>e.typographyV2.fontSize.mediumsmall};
  font-weight: ${({theme:e})=>e.typographyV2.fontWeight.semibold};
  line-height: 100%;
  font-size: 12px;
  letter-spacing: 0.14em;
  text-align: left;
`, s = t.default.p.withConfig({
        displayName: "styleConstants__P_OPT",
        componentId: "sc-aac63a44-7"
    })
    `
  font-size: 15px;
  line-height: 140%;
  letter-spacing: -0.3px;

  @media (min-width: ${({theme:e})=>e.globalV2.sm.maxWidth}) {
  }

  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    // font-size: ${({theme:e})=>e.typographyV2.fontSize.medium};
  }

  @media (min-width: ${({theme:e})=>e.globalV2.lg.maxWidth}) {
  }

  @media (min-width: ${({theme:e})=>e.globalV2.xl.maxWidth}) {
  }
`, c = t.default.p.withConfig({
        displayName: "styleConstants__PBody",
        componentId: "sc-aac63a44-8"
    })
    `
  font-size: 1.8rem;
  line-height: 140%;
`, h = t.default.p.withConfig({
        displayName: "styleConstants__P",
        componentId: "sc-aac63a44-9"
    })
    `
  font-size: ${({theme:e})=>e.typographyV2.fontSize.small};
  line-height: 110%;
  color: #ffffff;

  @media (min-width: ${({theme:e})=>e.globalV2.sm.maxWidth}) {
  }

  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    font-size: ${({theme:e})=>e.typographyV2.fontSize.medium};
  }

  @media (min-width: ${({theme:e})=>e.globalV2.lg.maxWidth}) {
  }

  @media (min-width: ${({theme:e})=>e.globalV2.xl.maxWidth}) {
  }
`;
    t.default.p.withConfig({
        displayName: "styleConstants__PLarge",
        componentId: "sc-aac63a44-10"
    })
    `
  font-size: ${({theme:e})=>e.typographyV2.fontSize.extralarge};
  font-weight: ${({theme:e})=>e.typographyV2.fontWeight.semibold};
  line-height: 100%;
  letter-spacing: -3px;

  &.larger {
    font-size: 6.4rem;
  }

  @media (min-width: ${({theme:e})=>e.globalV2.sm.maxWidth}) {
  }

  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    font-size: ${({theme:e})=>e.typographyV2.fontSize.xxlarge};
    &.larger {
      font-size: 11rem;
    }
  }

  @media (min-width: ${({theme:e})=>e.globalV2.lg.maxWidth}) {
  }

  @media (min-width: ${({theme:e})=>e.globalV2.xl.maxWidth}) {
    font-size: ${({theme:e})=>e.typographyV2.fontSize.ultralarge};

    &.larger {
      font-size: 14rem;
    }
  }
`, t.default.div.withConfig({
        displayName: "styleConstants__LeftSideTextWrapper",
        componentId: "sc-aac63a44-11"
    })
    `
  width: 100%;

  @media (min-width: ${({theme:e})=>e.globalV2.sm.maxWidth}) {
  }

  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    width: 50%;
  }

  @media (min-width: ${({theme:e})=>e.globalV2.lg.maxWidth}) {
    // width: 65%;
  }

  @media (min-width: ${({theme:e})=>e.globalV2.xl.maxWidth}) {
  }
`;
    let m = t.css `
  padding: 4.8rem 0;
  @media (min-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
    padding: 10rem 0;
  }
`;
    e.s(["H1", 0, n, "H1_OPT", 0, o, "H2", 0, a, "H2_OPT", 0, l, "H3", 0, d, "P", 0, h, "PBody", 0, c, "PLargeGradient", 0, r, "P_OPT", 0, s, "SectionPadding", 0, m])
}, 38927, e => {
    "use strict";
    var t = e.i(91398);
    e.s(["Checkmark", 0, e => (0, t.jsx)("svg", {
        className: e.className,
        style: e.style,
        width: "13",
        height: "10",
        viewBox: "0 0 13 10",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: (0, t.jsx)("path", {
            d: "M4.2416 10L0 5.17516L1.52211 3.83703L4.33675 7.0384L11.3754 0L12.8083 1.43312L4.2416 10Z",
            fill: e.fill ? ? "#3F8707"
        })
    })])
}, 52935, 27005, e => {
    "use strict";
    var t = e.i(91398);
    e.i(64157);
    var i = e.i(71179),
        n = e.i(8762),
        o = e.i(91788),
        a = e.i(60814),
        r = e.i(86236),
        l = e.i(2756),
        d = e.i(19231),
        s = e.i(57134),
        c = e.i(48095),
        h = e.i(18888),
        m = e.i(82382),
        g = e.i(57232),
        p = e.i(73528);
    let x = (e, i) => e.split(" ").map((e, n) => (0, t.jsxs)(t.Fragment, {
        children: [(0, t.jsx)("span", {
            style: {
                display: "inline-block"
            },
            className: i,
            children: e
        }, n), " "]
    }));
    e.s(["splitTextIntoSpans", 0, x], 27005);
    let f = (0, a.default)(({
        className: e,
        title: a
    }) => {
        let f = (0, n.useGsapContext)(),
            {
                add: u
            } = (0, m.useMasterTimeline)(),
            {
                width: b
            } = (0, g.useWindowSize)(),
            w = (0, o.useRef)(null),
            y = (0, o.useRef)(!1),
            j = (0, o.useContext)(s.ModalContext),
            v = (0, o.useRef)(null);
        (0, r.useIsomorphicLayoutEffect)(() => (v.current = new IntersectionObserver(e => {
            e[0].isIntersecting && w.current && window && !y.current && (f.add(() => {
                let e = w.current;
                if (!e) return;
                let t = e.querySelectorAll(".tc-1 > span"),
                    i = e.querySelector(".tc-2"),
                    n = e.querySelectorAll(".tc-2 > span"),
                    o = h.default.timeline({
                        defaults: {
                            duration: 1,
                            ease: "power2.easeInOut"
                        },
                        scrollTrigger: {
                            trigger: e,
                            start: "top top",
                            end: "bottom bottom",
                            scrub: .2,
                            immediateRender: !1
                        }
                    });
                h.default.set([i, n], {
                    willChange: "opacity, visibility"
                }), o.fromTo(t, {
                    autoAlpha: .2
                }, {
                    autoAlpha: 1,
                    duration: .35,
                    stagger: .2
                }, .2).to(t, {
                    autoAlpha: 0,
                    duration: .35
                }, "+=0.5").to(i, {
                    autoAlpha: 1,
                    duration: .01
                }, "+=0.5").fromTo(n, {
                    autoAlpha: .2
                }, {
                    autoAlpha: 1,
                    duration: .35,
                    stagger: .2
                }).addPause(5.5).eventCallback("onComplete", () => {
                    h.default.set([t, i, n], {
                        willChange: "auto"
                    })
                }), u(o, "buy-product-wizard")
            }), y.current = !0)
        }, {
            root: null,
            rootMargin: "100px",
            threshold: 0
        }), w.current && v.current.observe(w.current), () => {
            v.current && v.current.disconnect()
        }), []);
        let {
            t: S
        } = (0, i.useTranslation)("ring");
        return (0, t.jsx)("section", {
            className: e,
            ref: w,
            children: (0, t.jsx)("div", {
                className: "sticky-wrapper",
                children: (0, t.jsxs)(d.Container, {
                    children: [(0, t.jsx)(c.PLargeGradient, {
                        className: "anim-text-content tc-1",
                        children: x(a)
                    }), (0, t.jsxs)(c.PLargeGradient, {
                        className: "anim-text-content tc-2",
                        children: [x(S("ring.productWizard.contentB_A")), b >= 992 ? (0, t.jsx)("br", {}) : null, " ", x(S("ring.productWizard.contentB_B")), (0, t.jsxs)("span", {
                            style: {
                                fontSize: "24px",
                                fontWeight: "400",
                                lineHeight: "normal",
                                letterSpacing: "-0.96px",
                                display: "block",
                                marginTop: "1.6rem"
                            },
                            children: [S("ring.productWizard.contentC.textA"), " ", (0, t.jsx)("br", {}), S("ring.productWizard.contentC.textB")]
                        }), (0, t.jsx)("span", {
                            style: {
                                fontSize: "24px",
                                fontWeight: "400",
                                lineHeight: "normal",
                                letterSpacing: "-0.96px",
                                display: "block",
                                marginTop: "4rem"
                            },
                            children: (0, t.jsx)("button", {
                                onClick: () => {
                                    let e = "website";
                                    window && (e = window.location.hostname + window.location.pathname), p.default.track("product wizard talk to expert - CLICK"), j.set((0, t.jsx)(l.BookCallTFComponentDiv, {
                                        trackingParams: {
                                            utm_source: e,
                                            utm_medium: "product-wizard-section"
                                        }
                                    })), j.setCloseButtonTheme("light"), j.show()
                                },
                                children: S("ring.productWizard.contentC.btnText")
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
  background: ${({backgroundColor:e})=>e||"#fff"};
  .sticky-wrapper {
    width: 100%;
    overflow: hidden;
    position: sticky;
    top: 0;
    height: 100vh;
    height: 100lvh;

    @media (min-width: ${({theme:e})=>e.globalV2.lg.minWidth}) {
      ${c.SectionPadding}
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

      @media (min-width: ${({theme:e})=>e.globalV2.lg.minWidth}) {
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
    e.s(["ProductWizard", 0, f], 52935)
}, 2756, e => {
    "use strict";
    var t = e.i(91398),
        i = e.i(60814);
    let n = {
        src: e.i(71588).default,
        width: 28,
        height: 28,
        blurWidth: 0,
        blurHeight: 0
    };
    var o = e.i(26019),
        a = e.i(91788),
        r = e.i(57134),
        l = e.i(11869),
        d = e.i(81022);
    let s = {
        src: e.i(69752).default,
        width: 16,
        height: 16,
        blurWidth: 0,
        blurHeight: 0
    };
    var c = e.i(40290),
        h = e.i(3828);

    function m(e, t) {
        return RegExp("^" + t.split("*").map(e => e.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1")).join(".*") + "$").test(e)
    }
    let g = (0, i.default)(({
        className: e,
        trackingParams: i
    }) => (0, t.jsx)("div", {
        className: e,
        children: (0, t.jsx)(d.TypeformSnippet, {
            typeformId: "yOi1E7Wy",
            frameTitle: "Book a call",
            className: "typeform-container",
            trackingParams: i
        })
    })).withConfig({
        displayName: "WAChatbot__BookCallTFComponentDiv",
        componentId: "sc-5908e670-0"
    })
    `
  height: 80vh;
  width: calc(100vw - 48px);

  @media (min-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
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
`, p = () => (0, t.jsx)(x, {}), x = (0, i.default)(({
        className: e
    }) => {
        let i = (0, h.useRouter)(),
            d = (0, a.useContext)(r.ModalContext),
            [p, x] = (0, a.useState)(!1);
        if (l.NO_WA_CHATBOT_PAGES.some(e => i.pathname.startsWith(e))) return null;
        let f = () => {
                switch (i.pathname.split("/")[1]) {
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
            u = l.WA_CHATBOT_ALTERNATE_MOBILE_UI_PAGES.map(e => RegExp(`^${e.replace("*",".*")}$`)).some(e => e.test(i.pathname)) && !l.WA_CHATBOT_ALTERNATE_MOBILE_UI_EXCEPTIONS.includes(i.pathname);
        return (0, t.jsxs)("div", {
            className: `${e} ${u?"alternate-mobile":""}`,
            children: [(0, t.jsxs)("div", {
                className: `chatbot-container ${p?"active":""}`,
                children: [(0, t.jsxs)("button", {
                    onClick: () => {
                        if (console.log(f()), window && void 0 != document) {
                            let e = encodeURIComponent(f());
                            window.open(`https://api.whatsapp.com/send?phone=14158778980&text=${e} `, "_blank")
                        }
                        x(!1)
                    },
                    children: ["Instant WhatsApp Support", (0, t.jsx)(c.CaretUp, {
                        style: {
                            transform: "rotate(90deg)"
                        }
                    })]
                }), m(i.pathname, "/ring/order*") || m(i.pathname, "/ring/claim*") ? (0, t.jsxs)("button", {
                    onClick: () => {
                        window.open("mailto:support@ultrahuman.com", "_blank")
                    },
                    children: ["Email support", (0, t.jsx)(c.CaretUp, {
                        style: {
                            transform: "rotate(90deg)"
                        }
                    })]
                }) : (0, t.jsxs)("button", {
                    onClick: () => {
                        let e = "website";
                        window && (e = window.location.hostname + window.location.pathname), d.set((0, t.jsx)(g, {
                            trackingParams: {
                                utm_source: e,
                                utm_medium: "float-button"
                            }
                        })), d.setCloseButtonTheme("light"), d.show(), x(!1)
                    },
                    children: ["Pre-Purchase Consultation", (0, t.jsx)(c.CaretUp, {
                        style: {
                            transform: "rotate(90deg)"
                        }
                    })]
                })]
            }), (0, t.jsx)("button", {
                onClick: () => x(!p),
                className: "chatbot-toggle-button",
                style: {
                    background: p ? "transparent" : "",
                    backdropFilter: p ? "none" : void 0,
                    border: p ? "none" : void 0
                },
                children: p ? (0, t.jsx)(o.default, {
                    src: s,
                    className: "crossbtn",
                    alt: "chat_bot_icon"
                }) : (0, t.jsx)(o.default, {
                    src: n,
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

    @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
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
    @media (max-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
      .chatbot-toggle-button {
        right: 0;
        border-radius: 50% 0 0 50%;
        bottom: 112px;
        height: 54px;
        width: 54px;
      }
    }

    @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
      .chatbot-toggle-button {
        bottom: 72px;
      }
    }
  }
`;
    e.s(["BookCallTFComponentDiv", 0, g, "ChatBot", 0, p, "default", 0, p], 2756)
}, 88234, e => {
    "use strict";
    var t = e.i(60814);
    let i = t.css `
  color: #313449;
  // background: linear-gradient(98.35deg, #ffffff 1.84%, #757575 228.23%);
  background: linear-gradient(182.76deg, #60629e -17.03%, #313449 97.55%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`,
        n = t.default.h1.withConfig({
            displayName: "styleConstants__H1",
            componentId: "sc-c7910cef-0"
        })
    `
  font-size: 4rem;
  font-weight: ${({theme:e})=>e.typographyV2.fontWeight.semibold};
  line-height: 100%;
  letter-spacing: -3px;

  ${i}

  @media (min-width: ${({theme:e})=>e.globalV2.sm.maxWidth}) {
  }

  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    font-size: ${({theme:e})=>e.typographyV2.fontSize.xlarge};
  }

  @media (min-width: ${({theme:e})=>e.globalV2.lg.maxWidth}) {
  }

  @media (min-width: ${({theme:e})=>e.globalV2.xl.maxWidth}) {
    font-size: 8rem;
  }
`;
    t.default.h1.withConfig({
        displayName: "styleConstants__H1_OPT",
        componentId: "sc-c7910cef-1"
    })
    `
  font-size: 44px;
  font-weight: ${({theme:e})=>e.typographyV2.fontWeight.semibold};
  line-height: 120%;
  letter-spacing: -1px;
`, t.default.h2.withConfig({
        displayName: "styleConstants__H2",
        componentId: "sc-c7910cef-2"
    })
    `
  font-size: 36px;
  font-weight: ${({theme:e})=>e.typographyV2.fontWeight.semibold};
  line-height: 120%;
  letter-spacing: -2px;

  @media (min-width: ${({theme:e})=>e.globalV2.sm.maxWidth}) {
  }

  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    font-size: ${({theme:e})=>e.typographyV2.fontSize.extralarge};
  }

  @media (min-width: ${({theme:e})=>e.globalV2.lg.maxWidth}) {
  }

  @media (min-width: ${({theme:e})=>e.globalV2.xl.maxWidth}) {
    // font-size: ${({theme:e})=>e.typographyV2.fontSize.ultralarge};
  }
`, t.default.h2.withConfig({
        displayName: "styleConstants__H2Large",
        componentId: "sc-c7910cef-3"
    })
    `
  font-size: ${({theme:e})=>e.typographyV2.fontSize.extralarge};
  font-weight: ${({theme:e})=>e.typographyV2.fontWeight.semibold};
  line-height: 100%;
  letter-spacing: -3px;

  @media (min-width: ${({theme:e})=>e.globalV2.sm.maxWidth}) {
  }

  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    font-size: ${({theme:e})=>e.typographyV2.fontSize.xlarge};
  }

  @media (min-width: ${({theme:e})=>e.globalV2.lg.maxWidth}) {
  }

  @media (min-width: ${({theme:e})=>e.globalV2.xl.maxWidth}) {
    font-size: 8rem;
  }
`, t.default.p.withConfig({
        displayName: "styleConstants__PLargeGradient",
        componentId: "sc-c7910cef-4"
    })
    `
  font-size: 36px;
  font-weight: ${({theme:e})=>e.typographyV2.fontWeight.semibold};
  line-height: 120%;
  letter-spacing: -2px;

  ${i}

  @media (min-width: ${({theme:e})=>e.globalV2.sm.maxWidth}) {
  }

  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    font-size: ${({theme:e})=>e.typographyV2.fontSize.extralarge};
  }

  @media (min-width: ${({theme:e})=>e.globalV2.lg.maxWidth}) {
  }

  @media (min-width: ${({theme:e})=>e.globalV2.xl.maxWidth}) {
    // font-size: ${({theme:e})=>e.typographyV2.fontSize.ultralarge};
  }
`;
    let o = t.default.h2.withConfig({
        displayName: "styleConstants__H2_OPT",
        componentId: "sc-c7910cef-5"
    })
    `
  font-size: 24px;
  font-weight: ${({theme:e})=>e.typographyV2.fontWeight.semibold};
  line-height: 133%;
  letter-spacing: -2%;

  // @media (min-width: ${({theme:e})=>e.globalV2.sm.maxWidth}) {
  // }

  // @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
  //   font-size: ${({theme:e})=>e.typographyV2.fontSize.extralarge};
  // }

  // @media (min-width: ${({theme:e})=>e.globalV2.lg.maxWidth}) {
  // }

  // @media (min-width: ${({theme:e})=>e.globalV2.xl.maxWidth}) {
  //   // font-size: ${({theme:e})=>e.typographyV2.fontSize.ultralarge};
  // }
`;
    t.default.h2.withConfig({
        displayName: "styleConstants__H2Small",
        componentId: "sc-c7910cef-6"
    })
    `
  font-size: ${({theme:e})=>e.typographyV2.fontSize.mediumsmall};
  font-weight: ${({theme:e})=>e.typographyV2.fontWeight.regular};
  line-height: 100%;

  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    font-size: ${({theme:e})=>e.typographyV2.fontSize.medium};
  }
`, t.default.h3.withConfig({
        displayName: "styleConstants__H3",
        componentId: "sc-c7910cef-7"
    })
    `
  font-size: ${({theme:e})=>e.typographyV2.fontSize.large};
  font-weight: ${({theme:e})=>e.typographyV2.fontWeight.semibold};
  line-height: 100%;
  letter-spacing: 0.14em;
  text-align: left;
  line-height: 120%;
  letter-spacing: -1.2px;
`, t.default.p.withConfig({
        displayName: "styleConstants__P_OPT",
        componentId: "sc-c7910cef-8"
    })
    `
  font-size: 15px;
  line-height: 140%;
  letter-spacing: -0.3px;

  @media (min-width: ${({theme:e})=>e.globalV2.sm.maxWidth}) {
  }

  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    // font-size: ${({theme:e})=>e.typographyV2.fontSize.medium};
  }

  @media (min-width: ${({theme:e})=>e.globalV2.lg.maxWidth}) {
  }

  @media (min-width: ${({theme:e})=>e.globalV2.xl.maxWidth}) {
  }
`, t.default.p.withConfig({
        displayName: "styleConstants__PBody",
        componentId: "sc-c7910cef-9"
    })
    `
  font-size: 1.8rem;
  line-height: 140%;
`;
    let a = t.default.p.withConfig({
        displayName: "styleConstants__P",
        componentId: "sc-c7910cef-10"
    })
    `
  font-size: ${({theme:e})=>e.typographyV2.fontSize.small};
  line-height: 110%;

  @media (min-width: ${({theme:e})=>e.globalV2.sm.maxWidth}) {
  }

  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    font-size: ${({theme:e})=>e.typographyV2.fontSize.medium};
  }

  @media (min-width: ${({theme:e})=>e.globalV2.lg.maxWidth}) {
  }

  @media (min-width: ${({theme:e})=>e.globalV2.xl.maxWidth}) {
  }
`;
    t.default.p.withConfig({
        displayName: "styleConstants__PLarge",
        componentId: "sc-c7910cef-11"
    })
    `
  font-size: ${({theme:e})=>e.typographyV2.fontSize.extralarge};
  font-weight: ${({theme:e})=>e.typographyV2.fontWeight.semibold};
  line-height: 100%;
  letter-spacing: -3px;

  &.larger {
    font-size: 6.4rem;
  }

  @media (min-width: ${({theme:e})=>e.globalV2.sm.maxWidth}) {
  }

  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    font-size: ${({theme:e})=>e.typographyV2.fontSize.xxlarge};
    &.larger {
      font-size: 11rem;
    }
  }

  @media (min-width: ${({theme:e})=>e.globalV2.lg.maxWidth}) {
  }

  @media (min-width: ${({theme:e})=>e.globalV2.xl.maxWidth}) {
    font-size: ${({theme:e})=>e.typographyV2.fontSize.ultralarge};

    &.larger {
      font-size: 14rem;
    }
  }
`, t.default.div.withConfig({
        displayName: "styleConstants__LeftSideTextWrapper",
        componentId: "sc-c7910cef-12"
    })
    `
  width: 100%;

  @media (min-width: ${({theme:e})=>e.globalV2.sm.maxWidth}) {
  }

  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    width: 50%;
  }

  @media (min-width: ${({theme:e})=>e.globalV2.lg.maxWidth}) {
    // width: 65%;
  }

  @media (min-width: ${({theme:e})=>e.globalV2.xl.maxWidth}) {
  }
`;
    let r = t.css `
  padding: 9.6rem 0;
  @media (min-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
    padding: 15rem 0;
  }
`;
    t.css `
  padding: 5.2rem 0;
  @media (min-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
    padding: 10rem 0;
  }
`, e.s(["H1", 0, n, "H2_OPT", 0, o, "P", 0, a, "SectionPadding", 0, r])
}, 64130, e => {
    "use strict";
    var t = e.i(91398);
    e.i(64157);
    var i = e.i(71179),
        n = e.i(88234),
        o = e.i(91788),
        a = e.i(60814),
        r = e.i(19231);
    let l = a.default.h2.withConfig({
        displayName: "FAQSection__H2",
        componentId: "sc-baadec64-0"
    })
    `
  text-align: center;
  font-size: 32px;
  font-weight: 500;
  line-height: 120%; /* 38.4px */
  letter-spacing: -0.96px;

  @media (min-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
    font-size: 48px;
    letter-spacing: -1.6px;
  }
`, d = (0, a.default)(({
        className: e,
        title: i,
        description: n
    }) => (0, t.jsxs)("div", {
        className: `${e} faq-element`,
        children: [i ? (0, t.jsx)("h5", {
            children: i
        }) : null, (0, t.jsx)("div", {
            className: `description ${i?"":"text-center"}`,
            children: n
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

  @media (min-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
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

    @media (min-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
      font-size: 20px;
      letter-spacing: -0.4px;
      text-align: left;
      flex: 0 0 40%;
      margin: 0 auto;
    }

    @media (min-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
    }
  }

  & .description {
    color: var(--description-color);
    font-size: 14px;
    line-height: 150%; /* 19.6px */
    letter-spacing: -0.28px;
    @media (min-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
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
`, s = (0, a.default)(({
        className: e,
        faqData: n,
        bgColor: a = "black",
        htmlId: s,
        pb: c
    }) => {
        let {
            t: h
        } = (0, i.useTranslation)("ring"), m = (0, o.useRef)(null);
        return (0, t.jsx)("section", {
            className: `${e} ${a} ${c}`,
            id: s,
            ref: m,
            children: (0, t.jsxs)(r.Container, {
                className: "container",
                children: [(0, t.jsx)(l, {
                    children: h("ring.faq.head")
                }), (0, t.jsx)("div", {
                    className: "faq-container",
                    children: n.map((e, i) => (0, t.jsx)(d, { ...e
                    }, i))
                })]
            })
        })
    }).withConfig({
        displayName: "FAQSection",
        componentId: "sc-baadec64-2"
    })
    `
  ${n.SectionPadding}

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

    @media (min-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
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
    e.s(["FAQSection", 0, s])
}, 69949, e => {
    "use strict";
    var t = e.i(60814);
    let i = t.default.div.withConfig({
        displayName: "BottomBar__LeftPanel",
        componentId: "sc-5820f92-0"
    })
    `
  grid-column: 2 / -2;
  position: relative;

  display: none;
  justify-content: flex-start;
  align-items: center;

  @media (min-width: ${({theme:e})=>e.global.phone.maxWidth}) {
    display: flex;
    grid-column: 1 / 6;
    padding-left: 24px;
  }
`, n = t.default.div.withConfig({
        displayName: "BottomBar__MidPanelPhone",
        componentId: "sc-5820f92-1"
    })
    `
  grid-column: 1/-1;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 8px 0;

  @media (min-width: ${({theme:e})=>e.global.phone.maxWidth}) {
    display: none;
  }
`, o = t.default.div.withConfig({
        displayName: "BottomBar__MidPanel",
        componentId: "sc-5820f92-2"
    })
    `
  grid-column: 1 / -1;
  display: none;
  position: relative;

  @media (min-width: ${({theme:e})=>e.global.phone.maxWidth}) {
    display: flex;
    justify-content: center;
    grid-column: 6 / 8;

    flex-direction: column;
    align-items: end;
  }

  @media (min-width: ${({theme:e})=>e.globalV2.xxl.minWidth}) {
    grid-column: 6 / 8;
  }
`, a = t.default.div.withConfig({
        displayName: "BottomBar__RightPanel",
        componentId: "sc-5820f92-3"
    })
    `
  grid-column: 1 / -1;
  position: relative;

  display: flex;
  flex-direction: column;

  @media (min-width: ${({theme:e})=>e.global.phone.maxWidth}) {
    grid-column: 8 / 11;
    padding-right: 48px;
  }

  @media (min-width: ${({theme:e})=>e.globalV2.xxl.minWidth}) {
    grid-column: 8 / 11;
  }
`;
    e.s(["LeftPanel", 0, i, "MidPanel", 0, o, "MidPanelPhone", 0, n, "RightPanel", 0, a])
}, 94600, 52345, 19661, e => {
    "use strict";
    var t = e.i(91398),
        i = e.i(61791),
        n = e.i(21666),
        o = e.i(60814),
        a = e.i(2100),
        r = e.i(91788);
    e.i(64157);
    var l = e.i(71179);
    let d = o.css `
  margin: 4.8rem 0;
  @media (min-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
    margin: 9.6rem 0;
  }
`,
        s = o.default.div.withConfig({
            displayName: "Contents__Wrapper",
            componentId: "sc-f8e2697e-0"
        })
    `
  ${a.gridMixin}
  // padding: 0 20px;
  ${i.sectionPadding}
  ${d}

  margin-top: 0 !important;
  background-color: ${({backgroundColor:e})=>e||"transparent"};
`, c = [{
        image: "web_v2/illustrations/content-ring-air.png/w_800"
    }, {
        image: "web_v2/illustrations/content-charger.png/w_800"
    }, {
        image: "web_v2/illustrations/content-cable.png/w_800"
    }], h = (0, o.default)(({
        className: e,
        htmlId: o,
        contentData: a,
        backgroundColor: d,
        contentsPadding: c,
        $contentsBackgroundColor: h,
        titleA: m,
        titleB: g
    }) => {
        let {
            t: p
        } = (0, l.useTranslation)("ring"), x = (0, r.useRef)(null), f = (() => {
            let {
                t: e
            } = (0, l.useTranslation)("ring");
            return [{
                image: "web_v2/illustrations/content-ring-air.png/w_800",
                title: e("ring.contents.data.Ring")
            }, {
                image: "web_v2/illustrations/content-charger.png/w_800",
                title: e("ring.contents.data.Charger")
            }, {
                image: "web_v2/illustrations/content-cable.png/w_800",
                title: e("ring.contents.data.Cable")
            }]
        })(), u = m || p("ring.contents.titleA"), b = g || p("ring.contents.titleB");
        return (0, t.jsx)(s, {
            className: e,
            id: o,
            ref: x,
            "aria-labelledby": "contents-heading",
            backgroundColor: d,
            children: (0, t.jsxs)("div", {
                children: [(0, t.jsxs)(i.H2Large, {
                    id: "contents-heading",
                    className: "title",
                    children: [u, " ", (0, t.jsx)("span", {
                        children: b
                    })]
                }), (0, t.jsx)("ul", {
                    className: "contents",
                    "aria-label": "Contents of the box",
                    style: {
                        padding: c
                    },
                    children: (a || f).map((e, i) => (0, t.jsxs)("li", {
                        className: "box-content-element-wrapper",
                        children: [(0, t.jsx)("div", {
                            className: "box-content-element",
                            role: "img",
                            "aria-label": `Image of ${e.title}`,
                            children: (0, t.jsx)(n.CustomImage, {
                                src: e.image,
                                alt: "",
                                width: "200",
                                height: "200",
                                "aria-hidden": "true"
                            })
                        }), (0, t.jsx)("p", {
                            children: e.title
                        })]
                    }, i))
                })]
            })
        })
    }).withConfig({
        displayName: "Contents",
        componentId: "sc-f8e2697e-1"
    })
    `
  > div {
    grid-column: ${({contentData:e})=>(e||c).length>3?"1/-1":"2/-2"};

    @media (min-width: ${({theme:e})=>e.globalV2.md.minWidth}) {
    padding: ${({contentData:e})=>(e||c).length>3?"0 40px":"initial"};
  }

  .contents {
    ${a.hideScrollbar}
    display: flex;
    flex-wrap: no-wrap;
    overflow-x: auto;
    gap: 10px;
    scroll-snap-type: x mandatory;
    list-style: none;
    padding: 0;
    margin: 0;

    @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
      border-radius: 40px;
      backgroundColor: ${({$contentsBackgroundColor:e})=>e||"rgba(238, 238, 238, 1)"};
    }

    .box-content-element-wrapper {
      flex-shrink: 0;
      scroll-snap-align: center;
      text-align: center;

      width: ${({contentData:e})=>(e||c).length>3?"unset":"80%"};

      @media (min-width: ${({theme:e})=>e.global.phone.maxWidth}) {
        width: ${({contentData:e})=>(e||c).length>3?"20%":"33%"};
        margin: ${({contentData:e})=>(e||c).length>3?"40px 0":"unset"};
      }

      p {
        font-size: ${({contentData:e})=>(e||c).length>3?"2rem":"2.8rem"};
        font-weight: 500;
        padding: 24px 0 48px;
        letter-spacing: -0.8px;

        @media (min-width: ${({theme:e})=>e.global.phone.maxWidth}) {
          padding: 0px 0 48px;
        }
      }

      .box-content-element {
        background: ${({$contentsBackgroundColor:e})=>e||"rgba(238, 238, 238, 1)"};

        img {
          height: ${({contentData:e})=>(e||c).length>3?"220px":"300px"};
          width: auto;
        

          @media (min-width: ${({theme:e})=>e.globalV2.xl.maxWidth}) {
            height: 300px;

          }
        }
      }
    }
  }

  & .title {
    color: #000000;
    letter-spacing: -1.92px;
  }

  @media (min-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
    overflow-x: hidden;
    .contents {
      background: ${({$contentsBackgroundColor:e})=>e||"rgba(238, 238, 238, 1)"};
      justify-content: ${({contentData:e})=>(e||c).length>3?"center":"justify-content"};
      gap: ${({contentData:e})=>(e||c).length>3?"50px":"unset"};
    }
  }
`;
    e.s(["Contents", 0, h], 94600);
    var m = e.i(8762),
        g = e.i(86236),
        p = e.i(18888);
    let x = o.default.div.withConfig({
        displayName: "TechnicalSpecsHeroPro__PlaceholderSlot",
        componentId: "sc-3feafa04-0"
    })
    `
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.06);
  color: rgba(255, 255, 255, 0.25);
  font-size: 1.4rem;
  font-weight: 500;
  text-align: center;
  padding: 24px;
`, f = o.default.section.withConfig({
        displayName: "TechnicalSpecsHeroPro__HeroContainer",
        componentId: "sc-3feafa04-1"
    })
    `
  padding: 32px 24px 0;

  @media (min-width: ${({theme:e})=>e.globalV2.sm.maxWidth}) {
    padding: 76px 24px 0;
  }

  .hero-content {
    display: flex;
    flex-direction: column;
    gap: 16px;

    @media (min-width: ${({theme:e})=>e.globalV2.sm.maxWidth}) {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  .hero-panel {
    width: 100%;
    flex-shrink: 0;
    flex-grow: 0;

    @media (min-width: ${({theme:e})=>e.globalV2.sm.maxWidth}) {
      width: calc(50% - 12px);
    }
  }

  .hero-caption {
    margin-top: 16px;
    font-size: 1.9rem;

    @media (min-width: ${({theme:e})=>e.globalV2.sm.maxWidth}) {
      font-size: 2.2rem;
    }

    b {
      font-weight: 500;
    }
  }
`, u = o.default.div.withConfig({
        displayName: "TechnicalSpecsHeroPro__HeroImgWrap",
        componentId: "sc-3feafa04-2"
    })
    `
  position: relative;
  aspect-ratio: 1 / 1;
  background: transparent;
  border-radius: 24px;
  overflow: hidden;
`, b = o.default.div.withConfig({
        displayName: "TechnicalSpecsHeroPro__HeroBackgroundLayer",
        componentId: "sc-3feafa04-3"
    })
    `
  position: absolute;
  inset: 0;
  z-index: 0;

  img,
  > span {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  > span {
    display: block !important;
  }
`, w = o.default.div.withConfig({
        displayName: "TechnicalSpecsHeroPro__HeroImgInner",
        componentId: "sc-3feafa04-4"
    })
    `
  position: absolute;
  inset: 0;
  z-index: 1;
  display: flex;
  align-items: ${({$position:e})=>"flex-start"};
  justify-content: ${({$position:e})=>"left"===e?"flex-start":"flex-end"};
  overflow: hidden;
  padding: ${({$position:e})=>"left"===e?"0 0 8% 12%":"0"};
  box-sizing: border-box;

  img {
    object-fit: ${({$position:e})=>"left"===e?"contain":"cover"};
    object-position: ${({$position:e})=>"left"===e?"center top":"right top"};
    max-width: 100%;
    max-height: 100%;
    width: ${({$position:e})=>"right"===e?"100%":"auto"};
    height: ${({$position:e})=>"right"===e?"100%":"auto"};
  }

  /* Next Image with fill renders span > img. Offsets come from GSAP (yPercent) on this inner. */
  > span {
    max-width: 100%;
    max-height: 100%;
    display: flex !important;
    align-items: inherit;
    justify-content: inherit;
    ${({$position:e})=>"right"===e&&`
    width: 100 % ;
    height: 100 % ;
    `}

    img {
      object-fit: ${({$position:e})=>"left"===e?"contain":"cover"};
      object-position: ${({$position:e})=>"left"===e?"center top":"right top"};
      max-width: 100%;
      max-height: 100%;
      width: ${({$position:e})=>"right"===e?"100%":"auto"} !important;
      height: ${({$position:e})=>"right"===e?"100%":"auto"} !important;
    }
  }

  > div {
    max-width: 100%;
    max-height: 100%;
    display: flex;
    align-items: inherit;
    justify-content: inherit;
  }
`;

    function y(e, t) {
        return t ? t.includes("ring.") ? e(t) : t : ""
    }

    function j({
        imageLeftSrc: e,
        imageLeftAlt: i = "Ultrahuman Ring PRO",
        imageRightSrc: o,
        imageRightAlt: a = "Ring PRO Charger",
        backgroundLeftSrc: d,
        backgroundRightSrc: s,
        captionLeftTextBold: c,
        captionLeftTextNormal: h,
        captionRightTextBold: j,
        captionRightTextNormal: v,
        className: S
    }) {
        let {
            t: $
        } = (0, l.useTranslation)("ring"), z = (0, r.useRef)(null), C = (0, r.useRef)(null), k = (0, r.useRef)(null), I = (0, m.useGsapContext)();
        return (0, g.useIsomorphicLayoutEffect)(() => {
            let e = setTimeout(() => {
                z.current && C.current && k.current && I.add(() => {
                    let e = p.default.timeline({
                        scrollTrigger: {
                            trigger: z.current,
                            start: "top bottom",
                            end: "bottom top",
                            scrub: 0
                        }
                    });
                    e.fromTo(C.current, {
                        yPercent: 40
                    }, {
                        yPercent: 10
                    }, 0), e.fromTo(k.current, {
                        yPercent: 0,
                        scale: 1
                    }, {
                        yPercent: -10,
                        scale: 1.1
                    }, 0)
                })
            }, 100);
            return () => clearTimeout(e)
        }, [I]), (0, t.jsx)(f, {
            className: S,
            ref: z,
            "aria-hidden": "true",
            children: (0, t.jsxs)("div", {
                className: "hero-content",
                children: [(0, t.jsxs)("div", {
                    className: "hero-panel",
                    children: [(0, t.jsxs)(u, {
                        children: [d && (0, t.jsx)(b, {
                            "aria-hidden": "true",
                            children: (0, t.jsx)(n.CustomImage, {
                                src: d,
                                alt: "",
                                fill: !0,
                                sizes: "(max-width: 768px) 100vw, 50vw"
                            })
                        }), (0, t.jsx)(w, {
                            $position: "left",
                            ref: C,
                            children: e ? (0, t.jsx)(n.CustomImage, {
                                src: e,
                                alt: i,
                                fill: !0,
                                sizes: "(max-width: 768px) 100vw, 50vw"
                            }) : (0, t.jsx)(x, {
                                children: "Ring PRO (asset placeholder)"
                            })
                        })]
                    }), (null != c || null != h) && (0, t.jsxs)("p", {
                        className: "hero-caption",
                        children: [(0, t.jsx)("b", {
                            children: y($, c)
                        }), " ", y($, h)]
                    })]
                }), (0, t.jsxs)("div", {
                    className: "hero-panel",
                    children: [(0, t.jsxs)(u, {
                        children: [s && (0, t.jsx)(b, {
                            "aria-hidden": "true",
                            children: (0, t.jsx)(n.CustomImage, {
                                src: s,
                                alt: "",
                                fill: !0,
                                sizes: "(max-width: 768px) 100vw, 50vw"
                            })
                        }), (0, t.jsx)(w, {
                            $position: "right",
                            ref: k,
                            children: o ? (0, t.jsx)(n.CustomImage, {
                                src: o,
                                alt: a,
                                fill: !0,
                                sizes: "(max-width: 768px) 100vw, 50vw"
                            }) : (0, t.jsx)(x, {
                                children: "Ring PRO Charger (asset placeholder)"
                            })
                        })]
                    }), (null != j || null != v) && (0, t.jsxs)("p", {
                        className: "hero-caption",
                        children: [(0, t.jsx)("b", {
                            children: y($, j)
                        }), " ", y($, v)]
                    })]
                })]
            })
        })
    }
    let v = "web_v2/ring-pro/buy-v2/tech-specs",
        S = {
            heroSection: {
                type: "images",
                images: [{
                    src: "web_v2/illustrations/air-front-tilt.png/w_1920",
                    alt: "UH Ring AIR",
                    textBold: "ring.techSpec.twoImgInfo.lightA",
                    textNormal: "ring.techSpec.twoImgInfo.lightB"
                }, {
                    src: "web_v2/illustrations/air-full-tilt.png/w_1920",
                    alt: "UH Ring AIR",
                    textBold: "ring.techSpec.twoImgInfo.sleekA",
                    textNormal: "ring.techSpec.twoImgInfo.sleekB"
                }]
            },
            accordionItems: [{
                titleKey: "ring.MODEL",
                content: [
                    [{
                        key: "ring.techSpec.model.desc"
                    }]
                ]
            }, {
                titleKey: "ring.BODY",
                content: [
                    [{
                        key: "ring.DIMENSIONS",
                        bold: !0
                    }, {
                        key: "ring.techSpec.body.width"
                    }, {
                        key: "ring.techSpec.body.thickness"
                    }],
                    [{
                        key: "ring.WEIGHT",
                        bold: !0
                    }, {
                        key: "ring.techSpec.body.weight"
                    }]
                ]
            }, {
                titleKey: "ring.MATERIAL",
                content: [
                    [{
                        key: "ring.techSpec.material.descA"
                    }, {
                        key: "ring.techSpec.material.descB"
                    }]
                ]
            }, {
                titleKey: "ring.CONNECTIVITY",
                content: [
                    [{
                        key: "ring.techSpec.connectivity.descA"
                    }, {
                        key: "ring.techSpec.connectivity.descB"
                    }, {
                        key: "ring.techSpec.connectivity.descC"
                    }, {
                        key: "ring.techSpec.connectivity.descD"
                    }, {
                        key: "ring.techSpec.connectivity.descE"
                    }]
                ]
            }, {
                titleKey: "ring.SENSORS",
                content: [
                    [{
                        key: "ring.techSpec.sensors.descA"
                    }, {
                        key: "ring.techSpec.sensors.descB"
                    }, {
                        key: "ring.techSpec.sensors.descC"
                    }, {
                        key: "ring.techSpec.sensors.descD"
                    }, {
                        key: "ring.techSpec.sensors.descE"
                    }, {
                        key: "ring.techSpec.sensors.descF"
                    }]
                ]
            }, {
                titleKey: "ring.BATTERY",
                content: [
                    [{
                        key: "ring.techSpec.battery.descA"
                    }, {
                        key: "ring.techSpec.battery.descB"
                    }, {
                        key: "ring.techSpec.battery.descC"
                    }]
                ]
            }]
        };

    function $(e, t) {
        let i = t ? ? {
            imageLeftSrc: `${v}/ring.png/w_1920`,
            imageLeftAlt: "Ultrahuman Ring PRO",
            imageRightSrc: `${v}/case.png/w_1920`,
            imageRightAlt: "Ring PRO Charger",
            backgroundLeftSrc: `${v}/bg-clean/ring-bg.png/w_1920`,
            backgroundRightSrc: `${v}/bg-clean/charger-bg.png/w_1920`,
            captionLeftTextBold: "ring.techSpec.ringPro.twoImgInfo.lightA",
            captionLeftTextNormal: "ring.techSpec.ringPro.twoImgInfo.lightB",
            captionRightTextBold: "ring.techSpec.ringPro.twoImgInfo.sleekA",
            captionRightTextNormal: "ring.techSpec.ringPro.twoImgInfo.sleekB"
        };
        return {
            heroSection: {
                type: "custom",
                content: r.default.createElement(j, {
                    imageLeftSrc: i.imageLeftSrc,
                    imageLeftAlt: i.imageLeftAlt,
                    imageRightSrc: i.imageRightSrc,
                    imageRightAlt: i.imageRightAlt,
                    backgroundLeftSrc: i.backgroundLeftSrc,
                    backgroundRightSrc: i.backgroundRightSrc,
                    captionLeftTextBold: i.captionLeftTextBold,
                    captionLeftTextNormal: i.captionLeftTextNormal,
                    captionRightTextBold: i.captionRightTextBold,
                    captionRightTextNormal: i.captionRightTextNormal
                })
            },
            accordionItems: [{
                titleKey: "ring.MATERIAL",
                content: [
                    [{
                        key: "ring.techSpec.ringPro.material.descA"
                    }, {
                        key: "ring.techSpec.ringPro.material.descB"
                    }, {
                        key: "ring.techSpec.ringPro.material.descC"
                    }]
                ]
            }, {
                titleKey: "ring.CONNECTIVITY",
                content: [
                    [{
                        key: "ring.techSpec.ringPro.connectivity.descA"
                    }, {
                        key: "ring.techSpec.ringPro.connectivity.descB"
                    }]
                ]
            }, {
                titleKey: "ring.techSpec.ringPro.batteryCapacityTitle",
                content: [
                    [{
                        key: "ring.techSpec.ringPro.batteryCapacity.descA"
                    }]
                ]
            }, {
                titleKey: "ring.techSpec.ringPro.otherKeySpecsTitle",
                content: [
                    [{
                        key: "ring.techSpec.ringPro.otherKeySpecs.descA"
                    }, {
                        key: "ring.techSpec.ringPro.otherKeySpecs.descB"
                    }, {
                        key: "ring.techSpec.ringPro.otherKeySpecs.descC"
                    }]
                ]
            }, {
                titleKey: "ring.techSpec.ringPro.chargingCase.sectionTitle",
                content: [
                    [{
                        key: "ring.MATERIAL",
                        bold: !0
                    }, {
                        key: "ring.techSpec.ringPro.chargingCase.materials.descA"
                    }],
                    [{
                        key: "ring.CONNECTIVITY",
                        bold: !0
                    }, {
                        key: "ring.techSpec.ringPro.chargingCase.connectivity.descA"
                    }, {
                        key: "ring.techSpec.ringPro.chargingCase.connectivity.descB"
                    }],
                    [{
                        key: "ring.techSpec.ringPro.otherKeySpecsTitle",
                        bold: !0
                    }, {
                        key: "ring.techSpec.ringPro.chargingCase.otherKeySpecs.descA"
                    }],
                    [{
                        key: "ring.techSpec.ringPro.chargingCase.otherKeySpecs.descB"
                    }],
                    [{
                        key: "ring.techSpec.ringPro.chargingCase.otherKeySpecs.descC"
                    }],
                    [{
                        key: "ring.techSpec.ringPro.chargingCase.otherKeySpecs.descD"
                    }],
                    [{
                        key: "ring.techSpec.ringPro.chargingCase.otherKeySpecs.descE"
                    }],
                    [{
                        key: "ring.techSpec.ringPro.chargingCase.otherKeySpecs.descF"
                    }],
                    [{
                        key: "ring.techSpec.ringPro.chargingCase.otherKeySpecs.descG"
                    }]
                ]
            }]
        }
    }

    function z(e, t) {
        return e.map(e => ({
            title: r.default.createElement("span", {
                className: "bold"
            }, t(e.titleKey)),
            content: r.default.createElement(r.default.Fragment, null, ...e.content.map((e, i) => r.default.createElement("div", {
                key: i,
                className: "content"
            }, ...e.map((e, i) => r.default.createElement("div", {
                key: i,
                className: "content-row"
            }, e.bold ? r.default.createElement("span", {
                className: "bold"
            }, t(e.key)) : r.default.createElement("span", null, t(e.key)))))))
        }))
    }
    e.s(["defaultTechnicalSpecsConfig", 0, S, "getRingProTechnicalSpecsConfig", () => $, "resolveAccordionSections", () => z], 52345);
    let C = (0, o.default)(({
        className: e,
        images: i,
        imageBackgroundColor: o
    }) => {
        let {
            t: a
        } = (0, l.useTranslation)("ring"), d = (0, r.useRef)(null), s = (0, r.useRef)(null), c = (0, r.useRef)(null), h = (0, m.useGsapContext)(), x = i || [{
            src: "web_v2/illustrations/air-front-tilt.png/w_1920",
            alt: "UH Ring AIR",
            textBold: "ring.techSpec.twoImgInfo.lightA",
            textNormal: "ring.techSpec.twoImgInfo.lightB"
        }, {
            src: "web_v2/illustrations/air-full-tilt.png/w_1920",
            alt: "UH Ring AIR",
            textBold: "ring.techSpec.twoImgInfo.sleekA",
            textNormal: "ring.techSpec.twoImgInfo.sleekB"
        }];
        return (0, g.useIsomorphicLayoutEffect)(() => {
            let e = setTimeout(() => {
                window && s.current && c.current && h.add(() => {
                    let e = p.default.timeline({
                        defaults: {
                            duration: 1
                        },
                        scrollTrigger: {
                            trigger: d.current,
                            start: "top bottom",
                            end: "bottom top",
                            scrub: 0
                        }
                    });
                    e.fromTo(s.current, {
                        y: 200,
                        scale: 1
                    }, {
                        y: -100,
                        scale: 1.2
                    }), e.fromTo(c.current, {
                        y: 200,
                        scale: 2.5
                    }, {
                        y: -100,
                        scale: 1.5
                    }, "-=1")
                })
            }, 100);
            return () => {
                e && clearTimeout(e)
            }
        }, []), (0, t.jsx)("section", {
            className: e,
            ref: d,
            children: (0, t.jsxs)("div", {
                className: "content",
                children: [(0, t.jsxs)("div", {
                    className: "img-info-element",
                    children: [(0, t.jsx)("div", {
                        className: "img-container",
                        style: {
                            background: o || "#000"
                        },
                        children: (0, t.jsx)(n.CustomImage, {
                            ref: s,
                            src: x[0] ? .src,
                            fill: !0,
                            alt: x[0] ? .alt
                        })
                    }), (0, t.jsxs)("p", {
                        children: [(0, t.jsx)("b", {
                            children: x[0] ? .textBold ? .includes("ring.techSpec.") ? a(x[0].textBold) : x[0] ? .textBold
                        }), " ", x[0] ? .textNormal ? .includes("ring.techSpec.") ? a(x[0].textNormal) : x[0] ? .textNormal]
                    })]
                }), x[1] && (0, t.jsxs)("div", {
                    className: "img-info-element",
                    children: [(0, t.jsx)("div", {
                        className: "img-container",
                        style: {
                            background: o || "#000"
                        },
                        children: (0, t.jsx)(n.CustomImage, {
                            ref: c,
                            src: x[1].src,
                            fill: !0,
                            alt: x[1].alt
                        })
                    }), (0, t.jsxs)("p", {
                        children: [(0, t.jsx)("b", {
                            children: x[1].textBold ? .includes("ring.techSpec.") ? a(x[1].textBold) : x[1].textBold
                        }), " ", x[1].textNormal ? .includes("ring.techSpec.") ? a(x[1].textNormal) : x[1].textNormal]
                    })]
                })]
            })
        })
    }).withConfig({
        displayName: "TechnicalSpecs__TwoImageSection",
        componentId: "sc-b0eb6301-0"
    })
    `
  padding: 32px 24px 0;

  @media (min-width: ${({theme:e})=>e.globalV2.sm.maxWidth}) {
    padding: 76px 24px 0;
  }

  & > .content {
    display: flex;
    flex-direction: column;
    gap: 16px;

    @media (min-width: ${({theme:e})=>e.globalV2.sm.maxWidth}) {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  .img-info-element {
    width: 100%;
    flex-shrink: 0;
    flex-grow: 0;

    @media (min-width: ${({theme:e})=>e.globalV2.sm.maxWidth}) {
      width: calc(50% - 12px);
    }

    .img-container {
      position: relative;
      aspect-ratio: 1 / 1;
      background: #000;
      overflow: hidden;

      img {
        object-fit: cover;
      }
    }

    p {
      margin-top: 16px;
      font-size: 1.9rem;

      @media (min-width: ${({theme:e})=>e.globalV2.sm.maxWidth}) {
        font-size: 2.2rem;
      }

      b {
        font-weight: 500;
      }
    }
  }
`, k = (0, o.default)(({
        className: e,
        htmlId: i,
        config: n,
        title: o,
        images: a,
        accordionItems: d,
        imageBackgroundColor: s
    }) => {
        let {
            t: c
        } = (0, l.useTranslation)("ring"), h = (0, r.useRef)(null), m = "images" === S.heroSection.type ? S.heroSection.images : [], g = n ? ? (d || a ? {
            heroSection: {
                type: "images",
                images: a ? ? m
            },
            accordionItems: S.accordionItems
        } : S), p = !n && d ? d : z(g.accordionItems, c), x = o ? ? g.title ? ? c("ring.TECH_SPECIFICATIONS"), f = s ? ? g.imageBackgroundColor;
        return (0, t.jsxs)("section", {
            className: e,
            id: i,
            ref: h,
            children: [(0, t.jsx)("h3", {
                children: x
            }), "custom" === g.heroSection.type ? g.heroSection.content : (0, t.jsx)(C, {
                images: g.heroSection.images,
                imageBackgroundColor: f
            }), (0, t.jsx)(I, {
                accordionItems: p
            })]
        })
    }).withConfig({
        displayName: "TechnicalSpecs",
        componentId: "sc-b0eb6301-1"
    })
    `
  padding: 150px 0;

  h3:last-of-type {
    color: #000;
  }

  h3 {
    color: rgb(109, 114, 120);
    font-size: 48px;
    font-weight: 500;
    letter-spacing: -0.38px;
    line-height: 56px;
    text-align: center;
  }

  @media (min-width: 480px) {
    h3 {
      font-size: 64px;
      letter-spacing: -0.63px;
      line-height: 72px;
    }
  }
`, I = (0, o.default)(({
        className: e,
        accordionItems: i
    }) => {
        let [n, o] = (0, r.useState)(!1);
        return (0, r.useEffect)(() => {
            function e() {
                window.innerWidth < 768 ? o(!0) : o(!1)
            }
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
        }, []), (0, t.jsx)("div", {
            className: e,
            children: (0, t.jsx)("div", {
                children: n ? (0, t.jsx)(N, {
                    accordionItems: i
                }) : (0, t.jsx)(W, {
                    accordionItems: i
                })
            })
        })
    }).withConfig({
        displayName: "TechnicalSpecs__TechnicalSpec",
        componentId: "sc-b0eb6301-2"
    })
    `
  ${a.gridMixin}
  padding: 38px 0 150px 0;
  margin-bottom: 0 !important;

  color: rgba(0, 0, 0, 0.6);
  font-size: 1.8rem;
  line-height: 2.2rem;

  @media (min-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
    font-size: 2.2rem;
    line-height: 2.8rem;
    padding: 76px 0 150px 0;
  }

  > div {
    grid-column: 2/-2;
  }

  h3:last-of-type {
    color: #000;
  }

  h3 {
    color: rgb(109, 114, 120);
    font-size: 48px;
    font-weight: 500;
    letter-spacing: -0.38px;
    line-height: 56px;
  }

  .bold {
    color: #000;
    font-size: 24px;
    font-weight: 500;
    height: 32px;
    line-height: 32px;
  }

  .specs {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

  .flex {
    display: flex;
  }

  .flex.flex-column {
    flex-direction: column;
  }

  & .content {
    display: flex;
    flex-direction: column;
    gap: 16px;
    height: 100%;
  }

  @media screen and (min-width: 480px) {
    h3 {
      font-size: 80px;
      letter-spacing: -0.63px;
      line-height: 80px;
    }
  }
`, W = (0, o.default)(({
        className: e,
        accordionItems: i
    }) => (0, t.jsx)("table", {
        className: e,
        children: (0, t.jsx)("tbody", {
            children: (i ? ? []).map((e, i) => (0, t.jsxs)("tr", {
                children: [(0, t.jsx)("td", {}), (0, t.jsx)("td", {
                    children: (0, t.jsx)("span", {
                        className: "bold",
                        children: e.title
                    })
                }), (0, t.jsx)("td", {
                    children: (0, t.jsx)("div", {
                        className: "content",
                        children: e.content
                    })
                }), (0, t.jsx)("td", {
                    children: (0, t.jsx)("div", {})
                })]
            }, i))
        })
    })).withConfig({
        displayName: "TechnicalSpecs__DesktopTable",
        componentId: "sc-b0eb6301-3"
    })
    `
  width: 100%;
  border-collapse: collapse;

  tr {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    &:last-child {
      border-bottom: 0;
    }
  }

  & .content {
    height: 100%;
  }

  .content-row {
    display: block;
    margin-bottom: 12px;
    line-height: 1.4;
  }

  .content-row:last-child {
    margin-bottom: 0;
  }

  .content-row .bold {
    display: block;
    margin-bottom: 4px;
  }

  td {
    vertical-align: initial;
    padding: 48px 10px;
    max-width: 30vw;
    height: 100%;
  }

  .bold {
    color: #000;
    font-size: 24px;
    font-weight: 500;
    line-height: 32px;
  }

  .spacer {
    margin-bottom: 120px;
  }
`, _ = (0, o.default)(({
        className: e,
        data: i
    }) => {
        let [n, o] = (0, r.useState)(0);
        return (0, t.jsx)("div", {
            className: `${e} accordion`,
            children: i.map((e, i) => {
                let {
                    title: a,
                    content: r
                } = e;
                return (0, t.jsxs)("div", {
                    className: `accordion-item ${n===i?"active":""} `,
                    children: [(0, t.jsx)("div", {
                        className: "accordion-header",
                        onClick: () => {
                            o(n === i ? -1 : i)
                        },
                        onKeyDown: e => {
                            13 === e.keyCode && o(n === i ? -1 : i)
                        },
                        role: "presentation",
                        tabIndex: 0,
                        children: (0, t.jsxs)(t.Fragment, {
                            children: [a, (0, t.jsx)("span", {
                                className: "icon",
                                children: n === i ? "-" : "+"
                            })]
                        })
                    }), (0, t.jsx)("div", {
                        className: "accordion-body",
                        children: r
                    })]
                }, i)
            })
        })
    }).withConfig({
        displayName: "TechnicalSpecs__Accordion",
        componentId: "sc-b0eb6301-4"
    })
    `
  width: 100%;

  .accordion-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    .bold {
      font-size: 24px;
      font-weight: 500;
      line-height: 32px;
    }
  }

  .accordion-item {
    padding: 32px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }

  & .content {
    padding-top: 32px;
  }

  .content-row {
    display: block;
    margin-bottom: 12px;
    line-height: 1.4;
  }

  .content-row:last-child {
    margin-bottom: 0;
  }

  .content-row .bold {
    display: block;
    margin-bottom: 4px;
  }

  .content:last-of-type {
    padding-bottom: 32px;
  }

  .icon {
    font-size: 32px;
    line-height: 32px;
    width: 40px;
    text-align: right;
  }

  .accordion-body {
    max-height: 0;
    overflow: hidden;
    text-transform: cubic-bezier(0.95, 0.05, 0.795, 0.035);
    transition-duration: 0.5s;
    transition-property: max-height;
    z-index: 1;
    position: relative;
    display: flex;
    flex-wrap: wrap;
  }

  .accordion-item.active .accordion-body {
    max-height: 100rem;
    transition-timing-function: cubic-bezier(0.895, 0.03, 0.685, 0.22);
    transition-duration: 0.5s;
    transition-property: max-height;
  }

  .content.img {
    width: 100%;
  }

  @media screen and (min-width: 400px) {
    .accordion-body .content {
      padding: 32px 10px;
    }

    & .content {
      max-width: 50%;
    }

    .content.img {
      max-width: unset;
      align-items: center;
    }

    .content:only-child {
      max-width: unset;
    }
  }
`, N = (0, o.default)(({
        className: e,
        accordionItems: i
    }) => (0, t.jsx)("div", {
        className: e,
        children: (0, t.jsx)(_, {
            data: i ? ? []
        })
    })).withConfig({
        displayName: "TechnicalSpecs__MobileAccordion",
        componentId: "sc-b0eb6301-5"
    })
    `
  .bold {
    font-size: 18px;
    font-weight: 500;
    height: 32px;
    line-height: 32px;
  }
`;
    e.s(["TechnicalSpecs", 0, k], 19661)
}, 62114, e => {
    "use strict";
    var t = e.i(91398);
    e.i(64157);
    var i = e.i(71179),
        n = e.i(57706),
        o = e.i(53147),
        a = e.i(60814),
        r = e.i(57232),
        l = e.i(21666);
    (0, a.default)(({
        className: e,
        tradeInValue: n
    }) => {
        let {
            t: o
        } = (0, i.useTranslation)("ring"), {
            width: a
        } = (0, r.useWindowSize)();
        return (0, t.jsxs)("div", {
            className: e,
            children: [(0, t.jsx)("h3", {
                children: o("ring.productSelection.tradeInSection.title")
            }), (0, t.jsxs)("p", {
                className: "description",
                children: ["Get up to ", n, " in trade-in credit towards your new Ring AIR"]
            }), (0, t.jsx)("div", {
                className: "img-container",
                children: a > 992 ? (0, t.jsx)(l.CustomImage, {
                    src: "web_v2/offer_modal/trade.png",
                    fill: !0,
                    alt: "trade-in"
                }) : (0, t.jsx)(l.CustomImage, {
                    src: "web_v2/offer_modal/trade_resp.png",
                    fill: !0,
                    alt: "trade-in"
                })
            }), (0, t.jsxs)("div", {
                className: "content",
                children: [(0, t.jsx)("p", {
                    className: "directions",
                    children: o("ring.productSelection.tradeInSection.modal.bulletHead")
                }), (0, t.jsx)("br", {}), (0, t.jsx)("br", {}), (0, t.jsx)("h4", {
                    children: o("ring.productSelection.tradeInSection.modal.bulletA.title")
                }), (0, t.jsx)("p", {
                    children: o("ring.productSelection.tradeInSection.modal.bulletA.description")
                }), (0, t.jsx)("br", {}), (0, t.jsx)("br", {}), (0, t.jsx)("h4", {
                    children: o("ring.productSelection.tradeInSection.modal.bulletB.title")
                }), (0, t.jsx)("p", {
                    children: o("ring.productSelection.tradeInSection.modal.bulletB.description")
                }), (0, t.jsx)("br", {}), (0, t.jsx)("br", {}), (0, t.jsxs)("p", {
                    className: "tip",
                    children: [(0, t.jsxs)("b", {
                        children: [" ", o("ring.productSelection.tradeInSection.modal.tip.title")]
                    }), o("ring.productSelection.tradeInSection.modal.tip.description")]
                }), (0, t.jsx)("br", {}), (0, t.jsx)("br", {}), (0, t.jsx)("h4", {
                    children: o("ring.productSelection.tradeInSection.modal.bulletC.title")
                }), (0, t.jsx)("p", {
                    children: o("ring.productSelection.tradeInSection.modal.bulletC.description")
                }), (0, t.jsx)("br", {}), (0, t.jsx)("br", {}), (0, t.jsx)("h4", {
                    children: o("ring.productSelection.tradeInSection.modal.bulletD.title")
                }), (0, t.jsx)("p", {
                    children: o("ring.productSelection.tradeInSection.modal.bulletD.description")
                }), (0, t.jsx)("br", {}), (0, t.jsx)("br", {}), (0, t.jsx)("h4", {
                    children: o("ring.productSelection.tradeInSection.modal.bulletE.title")
                }), (0, t.jsx)("p", {
                    children: o("ring.productSelection.tradeInSection.modal.bulletE.description")
                }), (0, t.jsx)("br", {}), (0, t.jsx)("br", {}), (0, t.jsx)("p", {
                    children: o("ring.productSelection.tradeInSection.modal.bulletE.shipText")
                }), (0, t.jsx)("br", {}), (0, t.jsx)("br", {}), (0, t.jsx)("p", {
                    className: "country",
                    children: (0, t.jsx)("b", {
                        children: "United Kingdom"
                    })
                }), (0, t.jsxs)("p", {
                    children: ["Unit 3 Parkway Way, Kettlebridge Road, Sheffield, S9 3AJ.", (0, t.jsx)("br", {}), "Contact: 8081349514"]
                }), (0, t.jsx)("br", {}), (0, t.jsx)("br", {}), (0, t.jsx)("p", {
                    className: "country",
                    children: (0, t.jsx)("b", {
                        children: "United States"
                    })
                }), (0, t.jsxs)("p", {
                    children: ["6052 Bandini Blvd, Commerce, CA 90040.", (0, t.jsx)("br", {}), "Contact: 8003817934"]
                }), (0, t.jsx)("br", {}), (0, t.jsx)("br", {}), (0, t.jsx)("p", {
                    className: "country",
                    children: (0, t.jsx)("b", {
                        children: "Europe"
                    })
                }), (0, t.jsxs)("p", {
                    children: ["Pievu str. 1, Karmėlava, Kaunas region, Lithuania 54464.", (0, t.jsx)("br", {}), "Contact: 80023371"]
                }), (0, t.jsx)("br", {}), (0, t.jsx)("br", {}), (0, t.jsx)("p", {
                    className: "country",
                    children: (0, t.jsx)("b", {
                        children: "India"
                    })
                }), (0, t.jsxs)("p", {
                    children: ["AM Chambers, 2nd & 3rd Floor, Survey No 49/1, 49/3 Garvebhavipalya, 7th Mile, Hosur Main Road, Bommanahalli, Karnataka, India, 560068", (0, t.jsx)("br", {}), "Contact: 18001028693"]
                }), (0, t.jsx)("br", {}), (0, t.jsx)("br", {}), (0, t.jsx)("p", {
                    className: "country",
                    children: (0, t.jsx)("b", {
                        children: "UAE"
                    })
                }), (0, t.jsxs)("p", {
                    children: ["IQ Fulfillment General Warehousing, Dubai Investment Park - 1 Warehouse. Ultrahuman Warehouse No. 5.", (0, t.jsx)("br", {}), "Contact: 800035703249"]
                }), (0, t.jsx)("br", {}), (0, t.jsx)("br", {}), (0, t.jsx)("h4", {
                    children: o("ring.productSelection.tradeInSection.modal.bulletF.title")
                }), (0, t.jsx)("p", {
                    children: o("ring.productSelection.tradeInSection.modal.bulletF.description")
                })]
            })]
        })
    }).withConfig({
        displayName: "secondaryOffers__TradeInOffer",
        componentId: "sc-eb17154a-0"
    })
    `
  margin: auto;
  position: relative;
  // border-radius: 24px;
  height: 100%;
  background: #fff;
  display: flex;
  padding: 24px 16px;
  // margin-bottom: 4vh;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  flex-shrink: 0;
  scroll-behavior: smooth;

  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    padding: 40px;
    width: 100%;
    z-index: 5;
  }

  .closeBtnNew {
    margin-top: 4rem;
    position: sticky;
    top: 1.2rem;
    z-index: 5;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background: #000;
  }

  h3 {
    color: #000;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 120%; /* 28.8px */
    letter-spacing: -0.96px;

    @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
      font-size: 32px;
      line-height: 100%; /* 35.216px */
      letter-spacing: -1.28px;
    }
  }

  p.description {
    color: #000;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 18.2px */
    letter-spacing: -0.56px;

    @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
      font-size: 18px;
      letter-spacing: -0.72px;
    }
  }

  .img-container {
    margin: 0.8rem 0;
    width: 100%;
    height: 20rem;
    position: relative;
    overflow: hidden;
    border-radius: 0.4rem;
    // background: #000;

    @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
      margin: 1.6rem 0;
      height: 30rem;
    }

    img {
      width: 100%;
      height: auto;
      // object-fit: contain;
      // object-position: bottom;
    }
  }

  & .content {
    //   border: 1px solid blue;
    position: relative;
    width: 100%;
    color: #000;

    p {
      font-size: 1.7rem;

      b {
        font-weight: 500;
      }
    }

    p.directions {
      color: #000;
      font-size: 1.6rem;
      font-style: normal;
      font-weight: 500;
      line-height: 130%; /* 20.8px */
      letter-spacing: -0.64px;
    }

    p.country {
      padding-bottom: 0.4rem;
    }

    h4 {
      color: #000;
      font-size: 2rem;
      font-style: normal;
      font-weight: 500;
      line-height: 110%; /* 22px */
      letter-spacing: -0.8px;
      padding-bottom: 0.4rem;
    }

    p {
      color: #000;
      font-size: 1.6rem;
      font-style: normal;
      font-weight: 400;
      line-height: 130%; /* 20.8px */
      letter-spacing: -0.64px;
    }
  }
`;
    let d = [{
            title: "Choose Sika or Flex at checkout",
            description: "At checkout, select “Sika - Pay with your HSA/FSA” or “Flex | Pay with HSA/FSA”.",
            image: "1.png"
        }, {
            title: "Pay using your HSA/FSA card",
            description: "Enter your HSA/FSA card details to complete the purchase.",
            image: "2.png"
        }, {
            title: "Get an itemized receipt",
            description: "Your order confirmation email includes an invoice that serves as an itemized receipt. A Letter of Medical Necessity (LOMN) isn’t required for Ring AIR or Add Ons, as they’re classified as ‘always eligible’ in the SIGIS product list.",
            image: "3-1.png"
        }],
        s = (0, a.default)(({
            className: e
        }) => (0, t.jsxs)("div", {
            className: e,
            children: [(0, t.jsx)("h3", {
                children: "Use your HSA/FSA to save on Ring AIR"
            }), (0, t.jsx)("p", {
                className: "description",
                children: "Save more with your pre-tax dollars. The Ring AIR, Ring Rare, Software Plugins, and Voyager Charger are all HSA/FSA eligible."
            }), (0, t.jsx)("div", {
                className: "img-container",
                children: (0, t.jsx)(l.CustomImage, {
                    src: "web_v2/offer_modal/hsa-fsa-modal-header.png",
                    fill: !0,
                    alt: "trade-in"
                })
            }), (0, t.jsxs)("div", {
                className: "content",
                children: [(0, t.jsx)("p", {
                    className: "directions",
                    children: "How it works"
                }), (0, t.jsx)("br", {}), (0, t.jsx)("br", {}), d.map((e, i) => (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsxs)("h4", {
                        children: [(0, t.jsxs)("span", {
                            className: "caption",
                            children: ["STEP ", i + 1]
                        }), d[i].title]
                    }), (0, t.jsx)("p", {
                        children: d[i].description
                    }), (0, t.jsx)("div", {
                        className: "img-container",
                        children: (0, t.jsx)(l.CustomImage, {
                            src: `web_v2/offer_modal/hsa-fsa/0${i+1}.png`,
                            fill: !0,
                            alt: "trade-in"
                        })
                    }), (0, t.jsx)("br", {})]
                })), (0, t.jsx)("br", {}), (0, t.jsx)("br", {}), (0, t.jsx)("br", {}), (0, t.jsxs)("p", {
                    children: ["Need help? Reach out anytime at", " ", (0, t.jsx)("a", {
                        href: "mailto:support@ultrahuman.com",
                        children: "support@ultrahuman.com"
                    }), " — we've got your back."]
                }), (0, t.jsx)("br", {}), (0, t.jsx)("br", {}), (0, t.jsx)(o.default, {
                    href: "/hsa-fsa",
                    className: "cta",
                    passHref: !0,
                    children: (0, t.jsx)(n.PrimaryCTA, {
                        color: "black",
                        children: "Explore now"
                    })
                })]
            })]
        })).withConfig({
            displayName: "secondaryOffers__HsaFsaOffer",
            componentId: "sc-eb17154a-1"
        })
    `
  margin: auto;
  position: relative;
  // border-radius: 24px;
  height: 100%;
  background: #fff;
  display: flex;
  padding: 24px 16px;
  // margin-bottom: 4vh;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  flex-shrink: 0;
  scroll-behavior: smooth;

  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    padding: 40px;
    width: 100%;
    z-index: 5;
  }

  .closeBtnNew {
    margin-top: 4rem;
    position: sticky;
    top: 1.2rem;
    z-index: 5;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background: #000;
  }

  h3 {
    color: #000;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 120%; /* 28.8px */
    letter-spacing: -0.96px;
    max-width: 16ch;

    @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
      max-width: unset;
      font-size: 32px;
      line-height: 100%; /* 35.216px */
      letter-spacing: -1.28px;
    }
  }

  p.description {
    color: #000;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 18.2px */
    letter-spacing: -0.56px;

    @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
      font-size: 18px;
      letter-spacing: -0.72px;
    }
  }

  .img-container {
    margin: 0.8rem 0;
    width: 100%;
    height: 20rem;
    position: relative;
    overflow: hidden;
    border-radius: 12px;

    @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
      margin: 1.6rem 0;
      height: 30rem;
    }

    img {
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  }

  & .content {
    //   border: 1px solid blue;
    position: relative;
    width: 100%;
    color: #000;

    p {
      font-size: 1.7rem;

      b {
        font-weight: 500;
      }
    }

    p.directions {
      color: #000;
      font-size: 2.1rem;
      font-style: normal;
      font-weight: 500;
      line-height: 130%; /* 20.8px */
      letter-spacing: -0.84px;
    }

    p.country {
      padding-bottom: 0.4rem;
    }

    h4 {
      color: #000;
      font-size: 2rem;
      font-style: normal;
      font-weight: 500;
      line-height: 110%; /* 22px */
      letter-spacing: -0.8px;
      padding-bottom: 0.4rem;

      .caption {
        display: block;
        margin-bottom: 4px;
        color: rgba(0, 0, 0, 0.4);
        font-size: 1.2rem;
        font-style: normal;
        font-weight: 500;
        line-height: 100%; /* 12px */
        letter-spacing: 0.24rem;
        text-transform: uppercase;
      }
    }

    p {
      color: #000;
      font-size: 1.6rem;
      font-style: normal;
      font-weight: 400;
      line-height: 130%; /* 20.8px */
      letter-spacing: -0.64px;

      a {
        font-weight: 500;
      }
    }

    .cta {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
      width: fit-content;
    }
  }
`, c = (0, a.default)(({
        className: e
    }) => {
        let {
            width: i
        } = (0, r.useWindowSize)();
        return (0, t.jsxs)("div", {
            className: e,
            children: [(0, t.jsx)("h3", {
                children: "Recognizing Heroes of the World"
            }), (0, t.jsx)("div", {
                className: "img-container",
                children: i > 992 ? (0, t.jsx)(l.CustomImage, {
                    src: "web_v2/hero/modal/SpecialPricing.jpg",
                    fill: !0,
                    alt: "heroes"
                }) : (0, t.jsx)(l.CustomImage, {
                    src: "web_v2/hero/modal/SpecialPricing_Mobile.jpg",
                    fill: !0,
                    alt: "heroes"
                })
            }), (0, t.jsxs)("div", {
                className: "content",
                children: [(0, t.jsx)("p", {
                    children: "If you serve, care, innovate, and inspire, you deserve recognition. In honour of your impact, enjoy exclusive pricing on the Ring AIR. Applicable if you're a veteran or military personnel, athlete, scientist or researcher, student, or healthcare worker. ID verification will be required to fulfill the order."
                }), (0, t.jsx)("br", {})]
            })]
        })
    }).withConfig({
        displayName: "secondaryOffers__HeroDiscountOffer",
        componentId: "sc-eb17154a-2"
    })
    `
  margin: auto;
  position: relative;
  // border-radius: 24px;
  height: 100%;
  background: #fff;
  display: flex;
  padding: 24px 16px;
  // margin-bottom: 4vh;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  flex-shrink: 0;
  scroll-behavior: smooth;

  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    padding: 40px;
    width: 100%;
    z-index: 5;
    // margin-bottom: 120px;
  }

  .closeBtnNew {
    margin-top: 4rem;
    position: sticky;
    top: 1.2rem;
    z-index: 5;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background: #000;
  }

  h3 {
    color: #000;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 120%; /* 28.8px */
    letter-spacing: -0.96px;
    width: 90%;

    @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
      font-size: 32px;
      line-height: 100%; /* 35.216px */
      letter-spacing: -1.28px;
    }
  }

  p.description {
    color: #000;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 18.2px */
    letter-spacing: -0.56px;

    @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
      font-size: 18px;
      letter-spacing: -0.72px;
    }
  }

  .img-container {
    margin: 0.8rem 0;
    height: 20rem;
    width: 100%;
    position: relative;
    overflow: hidden;
    border-radius: 0.4rem;
    // background: #000;

    @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
      margin: 1.6rem 0;
      height: 30rem;
    }

    img {
      width: 100%;
      height: auto !important;
      // object-fit: contain;
      // object-position: bottom;
    }
  }

  & .content {
    //   border: 1px solid blue;
    position: relative;
    width: 100%;
    color: #000;

    p {
      font-size: 1.7rem;

      b {
        font-weight: 500;
      }
    }

    p.directions {
      color: #000;
      font-size: 1.6rem;
      font-style: normal;
      font-weight: 500;
      line-height: 130%; /* 20.8px */
      letter-spacing: -0.64px;
    }

    p.country {
      padding-bottom: 0.4rem;
    }

    h4 {
      color: #000;
      font-size: 2rem;
      font-style: normal;
      font-weight: 500;
      line-height: 110%; /* 22px */
      letter-spacing: -0.8px;
      padding-bottom: 0.4rem;
    }

    p {
      color: #000;
      font-size: 1.6rem;
      font-style: normal;
      font-weight: 400;
      line-height: 130%; /* 20.8px */
      letter-spacing: -0.64px;
    }
  }
`;
    (0, a.default)(({
        className: e
    }) => {
        let {
            t: n
        } = (0, i.useTranslation)("ring"), {
            width: o
        } = (0, r.useWindowSize)();
        return (0, t.jsxs)("div", {
            className: e,
            children: [(0, t.jsx)("h3", {
                children: "UltraWork"
            }), (0, t.jsx)("p", {
                className: "description",
                children: n("ring.productSelection.tradeInSection.modal.subHead")
            }), (0, t.jsx)("div", {
                className: "img-container",
                children: o > 992 ? (0, t.jsx)(l.CustomImage, {
                    src: "web_v2/offer_modal/ultrawork.png",
                    fill: !0,
                    alt: "ultra-work"
                }) : (0, t.jsx)(l.CustomImage, {
                    src: "web_v2/offer_modal/ultrawork_resp.png",
                    fill: !0,
                    alt: "ultra-work"
                })
            }), (0, t.jsxs)("div", {
                className: "content",
                children: [(0, t.jsx)("h4", {
                    children: "Heading A"
                }), (0, t.jsx)("p", {
                    children: "You will periodically receive personalized nudges and insights to make lifestyle changes that will help you improve on the contributors that impact this score. By improving your performance in each contributing factor, you'll boost your overall score."
                }), (0, t.jsx)("br", {}), (0, t.jsx)("p", {
                    children: "You will periodically receive personalized nudges and insights to make lifestyle changes that will help you improve on the contributors that impact this score. By improving your performance in each contributing factor, you'll boost your overall score."
                })]
            })]
        })
    }).withConfig({
        displayName: "secondaryOffers__UltraWorkOffer",
        componentId: "sc-eb17154a-3"
    })
    `
  margin: auto;
  position: relative;
  // border-radius: 24px;
  height: 100%;
  background: #fff;
  display: flex;
  padding: 24px 16px;
  // margin-bottom: 4vh;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  flex-shrink: 0;
  scroll-behavior: smooth;

  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    padding: 40px;
    width: 100%;
    z-index: 5;
    // margin-bottom: 120px;
  }

  .closeBtnNew {
    margin-top: 4rem;
    position: sticky;
    top: 1.2rem;
    z-index: 5;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background: #000;
  }

  h3 {
    color: #000;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 120%; /* 28.8px */
    letter-spacing: -0.96px;

    @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
      font-size: 32px;
      line-height: 100%; /* 35.216px */
      letter-spacing: -1.28px;
    }
  }

  p.description {
    color: #000;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 18.2px */
    letter-spacing: -0.56px;

    @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
      font-size: 18px;
      letter-spacing: -0.72px;
    }
  }

  .img-container {
    margin: 0.8rem 0;
    height: 20rem;
    width: 100%;
    position: relative;
    overflow: hidden;
    border-radius: 0.4rem;
    // background: #000;

    @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
      margin: 1.6rem 0;
      height: 300px;
    }

    img {
      width: 100%;
      height: auto;
      // object-fit: contain;
      // object-position: bottom;
    }
  }

  & .content {
    //   border: 1px solid blue;
    position: relative;
    width: 100%;
    color: #000;

    p {
      font-size: 1.7rem;

      b {
        font-weight: 500;
      }
    }

    p.directions {
      color: #000;
      font-size: 1.6rem;
      font-style: normal;
      font-weight: 500;
      line-height: 130%; /* 20.8px */
      letter-spacing: -0.64px;
    }

    p.country {
      padding-bottom: 0.4rem;
    }

    h4 {
      color: #000;
      font-size: 2rem;
      font-style: normal;
      font-weight: 500;
      line-height: 110%; /* 22px */
      letter-spacing: -0.8px;
      padding-bottom: 0.4rem;
    }

    p {
      color: #000;
      font-size: 1.6rem;
      font-style: normal;
      font-weight: 400;
      line-height: 130%; /* 20.8px */
      letter-spacing: -0.64px;
    }
  }
`, e.s(["HeroDiscountOffer", 0, c, "HsaFsaOffer", 0, s])
}]);