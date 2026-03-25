(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 32226, e => {
    "use strict";
    var t, i = e.i(91398),
        a = e.i(54134),
        n = e.i(64130),
        r = e.i(79546),
        o = e.i(19231),
        l = e.i(60814);
    let s = l.css `
  padding: 4.8rem 0;
  @media (min-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
    padding: 15rem 0;
  }
`,
        d = l.default.h2.withConfig({
            displayName: "StyleConstants__H2",
            componentId: "sc-d0f20ce-0"
        })
    `
  font-size: ${({theme:e})=>e.typographyV2.fontSize.large};
  font-weight: 500;
  letter-spacing: -0.96px;
  overflow: hidden;

  @media (min-width: ${({theme:e})=>e.globalV2.md.minWidth}) {
    letter-spacing: -1.6px;
    font-size: ${({theme:e})=>e.typographyV2.fontSize.extralarge};
  }

  span {
    display: inline-block;
  }
`, c = l.default.p.withConfig({
        displayName: "StyleConstants__P",
        componentId: "sc-d0f20ce-1"
    })
    `
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.6);
  letter-spacing: -0.48px;

  @media (min-width: ${({theme:e})=>e.globalV2.md.minWidth}) {
    letter-spacing: -0.48px;
    font-size: 2rem;
  }

  b {
    font-weight: 400;
    color: #ffffff;
  }
`;
    var h = e.i(21666),
        p = e.i(78198),
        m = e.i(91788),
        u = e.i(57232),
        g = e.i(50687);
    let f = l.default.div.withConfig({
        displayName: "Tabs__IconContainer",
        componentId: "sc-e4a69a0c-0"
    })
    `
  position: relative;
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;

  img {
    object-fit: contain;
  }
`, x = l.default.div.withConfig({
        displayName: "Tabs__TabsContainer",
        componentId: "sc-e4a69a0c-1"
    })
    `
  display: flex;
`, y = l.default.div.withConfig({
        displayName: "Tabs__TabsBar",
        componentId: "sc-e4a69a0c-2"
    })
    `
  margin: 0 auto;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  justify-content: space-between;
  border-radius: 30px;
  background: rgba(255, 255, 255, 0.4);
  box-shadow: 0px 3px 24px 0px rgba(0, 0, 0, 0.15);
  -webkit-backdrop-filter: blur(22px);
  backdrop-filter: blur(22px);
  position: relative;
  overflow: hidden;

  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    max-width: 70%;
    padding: 0 1px;
  }

  @media (max-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    ${({$compactSm:e})=>!e&&`
    width: fit - content;
    max - width: 100 % ;
    `}
  }
`, b = l.default.span.withConfig({
        displayName: "Tabs__FloaterSpan",
        componentId: "sc-e4a69a0c-3"
    })
    `
  display: block;
  padding: 1px;
  min-height: 20px;
  min-width: 20px;
  background: #ffffff;
  position: absolute;
  top: 4px;
  left: 0px;
  border-radius: 40px;
  z-index: 1;
  transition: all 0.3s ease-in-out;

  @media (max-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    margin: 0 4px;
  }
`, w = l.default.button.withConfig({
        displayName: "Tabs__Tab",
        componentId: "sc-e4a69a0c-4"
    })
    `
  position: relative;
  border-radius: 40px;
  background: transparent;
  box-shadow: 0px 0px 8px 0px transparent;
  display: flex;
  border: none;
  width: ${e=>e.$isMobile&&!e.$compactSm?"auto":e.$active?"149.5px":"48px"};
  padding: 6px 24px;
  height: 100%;
  justify-content: center;
  align-items: center;
  gap: 8px;
  z-index: 2;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  white-space: nowrap;

  @media (min-width: ${({theme:e})=>e.globalV2.md.minWidth}) {
    font-size: 1.7rem;
    letter-spacing: -0.64px;
    width: 150px;
  }

  span {
    color: #000;
    font-size: 1.7rem;
    font-style: normal;
    font-weight: 500;
    line-height: 100%;
    letter-spacing: -0.56px;
    // padding: 6px 12px;
    display: inline-block;
    padding: 4px 0px;
  }
`, v = (0, m.memo)(({
        tab: e,
        isActive: t,
        isMobile: a,
        compactSm: n,
        onClick: r,
        tabRef: o
    }) => (0, i.jsxs)(w, {
        $active: t,
        $compactSm: n,
        $isMobile: a,
        onClick: r,
        ref: o,
        children: [e.icon && (0, i.jsx)(f, {
            children: "string" == typeof e.icon ? (0, i.jsx)("img", {
                src: e.icon,
                alt: e.title,
                width: a ? 14 : 16,
                height: a ? 14 : 16
            }) : e.icon
        }), !a || !n || t && e.title ? (0, i.jsx)("span", {
            children: e.title
        }) : null]
    }, e.value));
    v.displayName = "TabComponent";
    let j = (0, m.memo)(({
        tabs: e,
        value: t,
        onChange: a,
        className: n,
        compactSm: r = !0
    }) => {
        let o = (0, m.useRef)(null),
            l = (0, m.useRef)(null),
            s = (0, m.useRef)([]),
            {
                width: d
            } = (0, u.useWindowSize)(),
            c = d < g.PHONE_MAX_WIDTH_IN_PX,
            h = t ? e.findIndex(e => e.value === t) : 0;
        (0, m.useEffect)(() => {
            s.current = s.current.slice(0, e.length)
        }, [e.length]);
        let p = (0, m.useCallback)(e => {
            if (!o.current || !l.current) return;
            let t = s.current.filter(Boolean),
                i = l.current.getBoundingClientRect();
            if (e >= 0 && e < t.length && t[e]) {
                let a = t[e];
                if (!a) return;
                let n = a.getBoundingClientRect();
                if (c)
                    if (r) {
                        let t = n.height - 8,
                            i = 0;
                        if (0 === e) i = 0;
                        else
                            for (let t = 0; t < e; t++) i += 52;
                        o.current.style.width = "141.5px", o.current.style.height = `${t}px`, o.current.style.left = `${i}px`
                    } else {
                        let t = n.width - 8,
                            i = n.height - 8,
                            a = 0;
                        for (let t = 0; t < e; t++) {
                            let e = s.current[t];
                            e && (a += e.getBoundingClientRect().width + 4)
                        }
                        o.current.style.width = `${t}px`, o.current.style.height = `${i}px`, o.current.style.left = `${a}px`
                    }
                else {
                    let e = n.width - 8,
                        t = n.height - 8,
                        a = n.left - i.left + 4;
                    o.current.style.width = `${e}px`, o.current.style.height = `${t}px`, o.current.style.left = `${a}px`
                }
            }
        }, [c, r]);
        (0, m.useEffect)(() => {
            let e = setTimeout(() => {
                p(h)
            }, 50);
            return () => clearTimeout(e)
        }, [h, d, p]), (0, m.useEffect)(() => {
            let e = () => {
                p(h)
            };
            return window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
        }, [h, p]);
        let f = (0, m.useCallback)((e, t) => {
            p(t), a(e)
        }, [a, p]);
        return (0, i.jsx)(x, {
            className: n,
            children: (0, i.jsxs)(y, {
                ref: l,
                $compactSm: r,
                children: [(0, i.jsx)(b, {
                    ref: o
                }), e.map((e, t) => (0, i.jsx)(v, {
                    tab: e,
                    isActive: t === h,
                    isMobile: c,
                    compactSm: r,
                    onClick: () => f(e.value, t),
                    tabRef: e => {
                        s.current[t] = e
                    }
                }, e.value))]
            })
        })
    });
    j.displayName = "Tabs";
    var U = e.i(22631),
        $ = e.i(59505),
        C = e.i(59207);
    let W = l.keyframes `
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,
        k = l.keyframes `
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-40px);
  }
`,
        I = l.default.div.withConfig({
            displayName: "FeatureBentoSection__CardElement",
            componentId: "sc-709ffc2a-0"
        })
    `
  background-color: #1a1a1a;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 24px;
  overflow: hidden;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: relative;
  opacity: 0;

  animation: ${({$isVisible:e,$animationDelay:t})=>e?l.css`
    $ {
        W
    }
    0.6 s ease - out forwards $ {
        t || 0
    }
    ms
        `:l.css`
    $ {
        k
    }
    0.4 s ease - in forwards $ {
        t || 0
    }
    ms
        `};
  height: 100%;

  @media (min-width: ${({theme:e})=>e.globalV2.lg.minWidth}) {
    padding: 32px;

    ${({$lgFlexRow:e})=>e?`
    flex - direction: row;
    align - items: center;
    `:""}
  }

  & .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
  }

  & > *:not(.overlay) {
    position: relative;
  }

  p.caption {
    font-size: 1.4rem;
    line-height: 16px;
    // color: #ffffff;
    color: ${({$color:e})=>e??"#ffffff"};
    margin-top: 8px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  h4 {
    color: ${({$color:e})=>e??"#ffffff"};
    font-size: 2.8rem;
    font-weight: 500;
    letter-spacing: -0.84px;
    line-height: 1.25;

    @media (min-width: ${({theme:e})=>e.globalV2.md.minWidth}) {
      font-size: 3.2rem;
    }
    @media (min-width: ${({theme:e})=>e.globalV2.lg.minWidth}) {
      letter-spacing: -0.96px;
      font-size: 4rem;
    }
    @media (min-width: ${({theme:e})=>e.globalV2.xxl.minWidth}) {
      letter-spacing: -1.08px;
      font-size: 4.2rem;
    }

    &.lg {
      font-size: 4rem;
      line-height: 1.1;

      @media (min-width: ${({theme:e})=>e.globalV2.md.minWidth}) {
        font-size: 4rem;
      }
      @media (min-width: ${({theme:e})=>e.globalV2.lg.minWidth}) {
        letter-spacing: -2px;
        font-size: 6rem;
      }
      @media (min-width: ${({theme:e})=>e.globalV2.xxl.minWidth}) {
        // font-size: 8.8rem;
      }
    }

    &.xl {
      font-size: 4.4rem;
      line-height: 1;
      letter-spacing: -2px;

      @media (min-width: ${({theme:e})=>e.globalV2.sm.minWidth}) {
        font-size: 5.6rem;
      }

      @media (min-width: ${({theme:e})=>e.globalV2.md.minWidth}) {
        font-size: 5.6rem;
      }
      @media (min-width: ${({theme:e})=>e.globalV2.lg.minWidth}) {
        // font-size: 6rem;
      }
      @media (min-width: ${({theme:e})=>e.globalV2.xxl.minWidth}) {
        font-size: 7.2rem;
      }
    }

    &.bg-grad-blue {
      width: fit-content;
      padding: 2px 0;
      background: linear-gradient(120deg, #5de4ff 5.74%, #5082ff 68.39%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  p.description {
    font-size: 1.6rem;
    line-height: 1.5;
    // color: #ffffff;
    color: ${({$color:e})=>e??"#ffffff"};
    letter-spacing: -0.48;

    &.secondary {
      // color: rgba(255, 255, 255, 0.5);
      color: ${({$color:e})=>e?e+"66":"#ffffff66"};
    }

    @media (min-width: ${({theme:e})=>e.globalV2.md.minWidth}) {
      letter-spacing: -0.6px;
      font-size: 1.9rem;
      // line-height: 28px;
    }
  }

  img {
    max-width: 100%;
    height: auto;
  }

  img.w-full {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`;
    var N = ((t = {}).RING = "ring", t.HOME = "home", t);
    let X = (0, l.default)(({
        className: e,
        defaultAvtiveTab: t
    }) => {
        let {
            store: a
        } = (0, m.useContext)(r.CartContext), [n, l] = (0, m.useState)(t ? ? "ring"), s = {
            id: "m1-discount",
            fullWidth: !0,
            component: (e, t) => (0, i.jsxs)(I, {
                $isVisible: e,
                $animationDelay: t,
                $fullWidth: !0,
                $lgFlexRow: !0,
                style: {
                    display: "flex",
                    justifyContent: "center"
                },
                children: [(0, i.jsx)(h.CustomImage, {
                    src: "web_v2/ultrahumanX/landing-page/m1-uhx.png",
                    alt: "hello",
                    height: "500",
                    width: "500",
                    style: {
                        alignSelf: "center"
                    }
                }), (0, i.jsx)("div", {
                    className: "",
                    children: (0, i.jsx)("h4", {
                        className: "lg",
                        style: {
                            maxWidth: "14ch",
                            lineHeight: "1.2"
                        },
                        children: "Enjoy 15% off on all M1 plans"
                    })
                })]
            })
        }, u = [{
            id: "ring-theft",
            component: (e, t) => (0, i.jsxs)(I, {
                $isVisible: e,
                $animationDelay: t,
                children: [(0, i.jsx)("p", {
                    className: "caption",
                    children: "Only with 2 year coverage plan"
                }), (0, i.jsxs)("h4", {
                    className: "lg bg-grad-blue",
                    style: {
                        marginTop: "8px"
                    },
                    children: ["Theft", (0, i.jsx)("br", {}), "and loss", (0, i.jsx)("br", {}), "coverage."]
                }), (0, i.jsx)("p", {
                    className: "description",
                    style: {
                        maxWidth: "32ch"
                    },
                    children: "Your peace of mind is precious. We'll cover theft or loss redeemable once during your coverage period."
                })]
            })
        }, {
            id: "ring-weight",
            component: (e, t) => (0, i.jsxs)(I, {
                $isVisible: e,
                $animationDelay: t,
                style: {
                    backgroundImage: `url(${(0,p.getCompressedAssetUrl)("/web_v2/ultrahumanX/landing-page/ring-w-jumping-rope.png")})`
                },
                children: [(0, i.jsx)("div", {
                    className: "overlay"
                }), (0, i.jsx)("p", {
                    className: "caption",
                    children: "Only with 2 year coverage plan"
                }), (0, i.jsx)("h4", {
                    style: {
                        marginTop: "8px"
                    },
                    children: "Weight loss coverage"
                }), (0, i.jsx)("p", {
                    className: "description",
                    style: {
                        maxWidth: "32ch"
                    },
                    children: "Hit your weight loss goals with Ultrahuman Ring AIR? We make it easy to size down with a free ring replacement, available once during your coverage period."
                })]
            })
        }, {
            id: "ring-pregnancy",
            component: (e, t) => (0, i.jsxs)(I, {
                $isVisible: e,
                $animationDelay: t,
                $color: "#fff",
                style: {
                    backgroundImage: `url(${(0,p.getCompressedAssetUrl)("/web_v2/ultrahumanX/landing-page/ring-pregnancy-2.png")})`
                },
                children: [(0, i.jsx)("p", {
                    className: "caption",
                    children: "Only with 2 year coverage plan"
                }), (0, i.jsx)("h4", {
                    style: {
                        marginTop: "8px"
                    },
                    children: "Pregnancy Fit Coverage"
                }), (0, i.jsx)("p", {
                    className: "description",
                    style: {
                        maxWidth: "32ch"
                    },
                    children: "Your body changes during pregnancy and your ring fit can too. We offer a one-time size change per coverage period so your health tracking adapts with you, not the other way around."
                })]
            })
        }, {
            id: "ring-damage",
            component: (e, t) => (0, i.jsx)(I, {
                $isVisible: e,
                $animationDelay: t,
                style: {
                    backgroundImage: `url(${(0,p.getCompressedAssetUrl)("/web_v2/ultrahumanX/landing-page/ring-in-hand.png")})`
                },
                children: (0, i.jsx)("h4", {
                    style: {
                        maxWidth: "16ch"
                    },
                    children: "Accidental damage and knock protection"
                })
            })
        }, {
            id: "ring-support",
            component: (e, t) => (0, i.jsxs)(I, {
                $isVisible: e,
                $animationDelay: t,
                $color: "#000000",
                style: {
                    backgroundColor: "#eeeeee",
                    color: "#000000",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between"
                },
                children: [(0, i.jsx)("h4", {
                    children: "Priority support"
                }), (0, i.jsx)(h.CustomImage, {
                    className: "w-full",
                    src: "web_v2/ultrahumanX/landing-page/priority-support.png/w_1180",
                    width: "1256",
                    height: "1126",
                    alt: "ultracare"
                })]
            })
        }, {
            id: "ring-returns",
            component: (e, t) => (0, i.jsx)(I, {
                $isVisible: e,
                $animationDelay: t,
                style: {
                    backgroundImage: `url(${(0,p.getCompressedAssetUrl)("/web_v2/ultrahumanX/bg/GREEN-BLUE-GRADIENT.png")})`,
                    display: "flex",
                    justifyContent: "flex-end"
                },
                children: (0, i.jsxs)("h4", {
                    className: "xl",
                    style: {
                        maxWidth: "unset",
                        fontWeight: 600,
                        color: "rgba(255, 255, 255, 0.28)",
                        mixBlendMode: "plus-lighter"
                    },
                    children: ["Free,", (0, i.jsx)("br", {}), "express", (0, i.jsx)("br", {}), "and hassle-free", (0, i.jsx)("br", {}), "returns and replacement."]
                })
            })
        }, { ...s
        }], g = [{
            id: "home-env-protection",
            component: (e, t) => (0, i.jsxs)(I, {
                $isVisible: e,
                $animationDelay: t,
                style: {
                    backgroundImage: `url(${(0,p.getCompressedAssetUrl)("/web_v2/ultrahumanX/landing-page/home/env-home-bg.png")})`,
                    backgroundPositionY: "bottom"
                },
                children: [(0, i.jsx)("p", {
                    className: "caption",
                    children: "Only with 2 year coverage plan"
                }), (0, i.jsx)("h4", {
                    style: {
                        marginTop: "8px"
                    },
                    children: "Environmental wear protection"
                }), (0, i.jsx)("p", {
                    className: "description",
                    style: {
                        maxWidth: "32ch"
                    },
                    children: "Covers damage from humidity, dust, power fluctuations, and natural events. Includes one free repair or replacement per coverage period after diagnostic."
                })]
            })
        }, {
            id: "home-beta-access",
            component: (e, t) => (0, i.jsxs)(I, {
                $isVisible: e,
                $animationDelay: t,
                style: {
                    backgroundImage: `url(${(0,p.getCompressedAssetUrl)("/web_v2/ultrahumanX/bg/green-lines-grad-bg.png")})`,
                    backgroundPosition: "right"
                },
                children: [(0, i.jsx)("p", {
                    className: "caption",
                    children: "Only with 2 year coverage plan"
                }), (0, i.jsx)("h4", {
                    style: {
                        marginTop: "8px",
                        color: "#00FF7A"
                    },
                    children: "Ultrahuman Beta Access"
                }), (0, i.jsx)("p", {
                    className: "description",
                    style: {
                        maxWidth: "32ch"
                    },
                    children: "As an UltrahumanX member, you’ll gain exclusive early access to experimental features designed for Ultrahuman Home."
                })]
            })
        }, {
            id: "home-accidental-damage",
            component: (e, t) => (0, i.jsxs)(I, {
                $isVisible: e,
                $animationDelay: t,
                style: {
                    backgroundColor: "rgb(18,18,18)",
                    backgroundImage: `url(${(0,p.getCompressedAssetUrl)("/web_v2/ultrahumanX/landing-page/home/home-view.png")})`,
                    backgroundPositionY: "24px"
                },
                children: [(0, i.jsx)("p", {
                    className: "caption",
                    children: "Only with 2 year coverage plan"
                }), (0, i.jsx)("h4", {
                    style: {
                        marginTop: "8px"
                    },
                    children: "Accidental Damage Protection"
                }), (0, i.jsx)("p", {
                    className: "description",
                    style: {
                        maxWidth: "32ch"
                    },
                    children: "Covers one repair or replacement if the device is accidentally damaged during setup, repositioning, or handling - built for the everyday realities of home use."
                })]
            })
        }, {
            id: "home-support",
            component: (e, t) => (0, i.jsxs)(I, {
                $isVisible: e,
                $animationDelay: t,
                $color: "#000000",
                style: {
                    backgroundColor: "#eeeeee",
                    color: "#000000",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between"
                },
                children: [(0, i.jsx)("h4", {
                    children: "Priority support"
                }), (0, i.jsx)(h.CustomImage, {
                    className: "w-full",
                    src: "web_v2/ultrahumanX/landing-page/home/home-priority-support.png",
                    width: "1256",
                    height: "1126",
                    alt: "ultracare"
                })]
            })
        }, {
            id: "home-returns",
            fullWidth: !0,
            component: (e, t) => (0, i.jsx)(I, {
                $isVisible: e,
                $animationDelay: t,
                $fullWidth: !0,
                style: {
                    backgroundImage: `url(${(0,p.getCompressedAssetUrl)("/web_v2/ultrahumanX/landing-page/home/green-gradient.png")})`,
                    display: "flex",
                    justifyContent: "center"
                },
                children: (0, i.jsx)("h4", {
                    className: "xl",
                    style: {
                        maxWidth: "14ch",
                        fontWeight: 600,
                        color: "rgb(0, 255, 122, 1)",
                        lineHeight: "1.2"
                    },
                    children: "Free, express and hassle-free returns and replacement."
                })
            })
        }, { ...s
        }], f = a !== C.ShopifyStore.US ? [{
            title: "Ring AIR",
            value: "ring",
            icon: (0, i.jsx)($.UHRingFill, {
                fill: "#000000"
            })
        }, {
            title: "Home",
            value: "home",
            icon: (0, i.jsx)(U.UHHomeFill, {
                fill: "#000000"
            })
        }] : [{
            title: "Home",
            value: "home",
            icon: (0, i.jsx)(U.UHHomeFill, {
                fill: "#000000"
            })
        }];
        return (0, i.jsx)("section", {
            className: e,
            children: (0, i.jsxs)(o.Container, {
                children: [(0, i.jsxs)("div", {
                    className: "uhx-text-content",
                    children: [(0, i.jsx)(d, {
                        className: "title",
                        children: "Unbeatable membership benefits"
                    }), (0, i.jsx)(c, {
                        children: "Designed to help you unlock the best price and protect all your Ultrahuman products."
                    }), (0, i.jsx)("div", {
                        className: "tabs-container",
                        children: (0, i.jsx)(j, {
                            tabs: f,
                            onChange: e => l(e),
                            value: n,
                            compactSm: !1
                        })
                    })]
                }), (0, i.jsxs)("div", {
                    className: "bento-content",
                    children: [a !== C.ShopifyStore.US ? u.map((e, t) => (0, i.jsx)("div", {
                        className: e.fullWidth ? "full-width" : "",
                        style: {
                            display: "ring" === n ? "block" : "none"
                        },
                        children: e.component("ring" === n, 150 * t)
                    }, e.id)) : null, g.map((e, t) => (0, i.jsx)("div", {
                        className: e.fullWidth ? "full-width" : "",
                        style: {
                            display: "home" === n ? "block" : "none"
                        },
                        children: e.component("home" === n, 150 * t)
                    }, e.id))]
                })]
            })
        })
    }).withConfig({
        displayName: "FeatureBentoSection",
        componentId: "sc-709ffc2a-1"
    })
    `
  ${s}

  max-width: 1200px;
  margin: 0 auto;

  background: #000000;
  color: #ffffff;

  & .uhx-text-content {
    margin: 0 auto;
    text-align: center;

    h2 {
      margin-bottom: 8px;
    }

    p {
      max-width: 48ch;
      margin: 0 auto;
      margin-bottom: 24px;
    }
  }

  .bento-content {
    margin-top: 32px;
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
    gap: 16px;
    width: 100%;

    @media (min-width: ${({theme:e})=>e.globalV2.lg.minWidth}) {
      grid-template-columns: 1fr 1fr;
      margin: 0 auto;
      margin-top: 48px;
    }

    & > div {
      width: 100%;
      min-height: 400px;
      height: 100%;

      @media (min-width: ${({theme:e})=>e.globalV2.lg.minWidth}) {
        min-height: 500px;

        &.full-width {
          grid-column: span 2;
        }
      }
      @media (min-width: ${({theme:e})=>e.globalV2.xxl.minWidth}) {
        min-height: 600px;
      }
    }
  }
`;
    var A = e.i(68734),
        F = e.i(72455),
        S = e.i(21395),
        R = e.i(27252),
        z = e.i(53147),
        T = e.i(56560),
        _ = e.i(1814),
        H = e.i(32899),
        V = e.i(228);
    let Y = (0, l.default)(({
        className: e,
        validity: t,
        price: a,
        currency: n,
        saving: o,
        billedAt: l,
        highlighted: s,
        benefits: d,
        checkoutUrl: c
    }) => {
        let h = (0, m.useContext)(r.CartContext),
            p = (0, H.useForwardSearchParamsShopify)();
        return (0, i.jsxs)("div", {
            className: `${e} ${s?"highlighted":""}`,
            children: [(0, i.jsxs)("div", {
                className: "card-header",
                children: [(0, i.jsxs)("div", {
                    className: "row",
                    children: [(0, i.jsxs)("p", {
                        className: "caption",
                        children: [t, " YEAR MEMBERSHIP"]
                    }), o ? (0, i.jsxs)("span", {
                        className: "save-tag",
                        children: ["Save ", o, "%"]
                    }) : null]
                }), (0, i.jsxs)("div", {
                    className: "row",
                    children: [n && a ? (0, i.jsxs)("p", {
                        className: "price",
                        children: [_.CurrencySymbol[n], (0, _.formatPriceWithComma)(Number(a)), (0, i.jsx)("i", {
                            children: " / year"
                        })]
                    }) : null, (0, i.jsxs)("p", {
                        className: "billed-at",
                        children: ["Billed ", n ? _.CurrencySymbol[n] : null, l, " one time", (0, i.jsx)("br", {}), h.taxString, "."]
                    })]
                })]
            }), (0, i.jsx)("hr", {}), (0, i.jsx)("div", {
                className: "benefits-container",
                children: d ? .map((e, t) => (0, i.jsxs)("div", {
                    className: "benefit",
                    children: [(0, i.jsx)("img", {
                        src: e.image,
                        alt: e.title,
                        width: 48,
                        height: 48
                    }), (0, i.jsx)("p", {
                        children: e.title
                    }), "included" === e.state ? (0, i.jsx)(R.TickWhite, {
                        className: "state-icon",
                        fill: "#00FF66"
                    }) : null, "preincluded" === e.state ? (0, i.jsx)(R.TickWhite, {
                        className: "state-icon",
                        fill: "rgba(255,255,255,0.9)"
                    }) : null, "locked" === e.state ? (0, i.jsx)(S.Lock, {
                        className: "state-icon",
                        fill: "rgba(255,255,255,0.9)"
                    }) : null]
                }, t))
            }), (0, i.jsx)("div", {
                className: "cta-container",
                children: (0, i.jsx)(z.default, {
                    href: p(c, void 0, h.store ? ? void 0),
                    className: `cta ${s?"primary":""}`,
                    children: "Buy now"
                })
            })]
        })
    }).withConfig({
        displayName: "BuySection__ProductCard",
        componentId: "sc-b3bab23-0"
    })
    `
  width: 100%;
  max-width: 500px;
  padding: 16px;
  border-radius: 24px;
  // background-color: rgba(255, 255, 255, 0.07);
  background: radial-gradient(
      65.96% 39.81% at 50.15% -13.15%,
      rgba(255, 255, 255, 0.3) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    rgba(255, 255, 255, 0.07);
  -webkit-backdrop-filter: blur(44px);
  backdrop-filter: blur(44px);

  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (min-width: ${({theme:e})=>e.globalV2.md.minWidth}) {
    max-width: var(--card-max-width-lg, 400px);
    max-width: 400px;
    padding: 20px;
  }

  .disclaimer-in-card {
    color: rgba(255, 255, 255, 0.5);
    text-align: center;
    font-size: 1.1rem;
  }

  .card-header {
    display: flex;
    flex-direction: column;
    gap: 8px;

    @media (min-width: ${({theme:e})=>e.globalV2.md.minWidth}) {
    }

    .row {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 8px;
    }

    .price {
      color: #fff;
      font-size: 2.4rem;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: -0.45px;

      i {
        font-style: normal;
        color: rgba(255 255 255 / 60%);
      }
    }

    .billed-at {
      color: rgba(255, 255, 255, 0.5);
      font-size: 1.3rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: -0.43px;
      text-align: right;
    }
  }

  span.save-tag {
    border-radius: 4px;
    color: #000000;
    background: #ffffff;
    font-size: 1.3rem;
    font-style: normal;
    font-weight: 500;
    line-height: 13px; /* 100% */
    letter-spacing: -0.24px;
    white-space: nowrap;

    // transform: translateY(-2px);
    display: inline-block;

    padding: 2px 4px 2px 6px;

    position: relative;

    // span {
    //   border-radius: 3px;
    //   background: rgb(255 255 255 / 10%);
    //   padding: 3px 6px;
    //   display: inline-block;
    // }
  }

  p.caption {
    font-size: 1.4rem;
    color: rgba(255, 255, 255, 0.7);
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: 0.68px;
  }

  .cta-container {
    padding-top: 8px;

    .cta {
      display: inline-block;
      padding: 12px 20px;
      border-radius: 8px;
      background: transparent;
      border: 0;
      cursor: pointer !important;
      white-space: nowrap;

      border-radius: 16px;

      width: 100%;

      color: #ffffff;
      border: 1px solid rgba(255 255 255 / 24%);
      text-align: center;
      font-size: 1.6rem;
      font-style: normal;
      font-weight: 500;
      line-height: 16px; /* 106.667% */
      transition: all 0.3s ease-in-out;

      &.primary {
        background: #ffffff;
        color: #000000;
      }

      &:hover {
        transform: scale(1.02);

        color: #000000;
        background: #ffffff;
      }
    }
  }

  hr {
    border: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    border-top: 1px solid rgba(0, 0, 0, 0.24);
    margin: 4px 0;

    @media (min-width: ${({theme:e})=>e.globalV2.md.minWidth}) {
      margin: 12px 0;
    }
  }

  .benefits-container {
    display: flex;
    flex-direction: column;
    gap: 8px;

    &.sm {
      display: flex;

      @media (min-width: ${({theme:e})=>e.globalV2.md.minWidth}) {
        display: none;
      }
    }

    &.md {
      display: none;

      @media (min-width: ${({theme:e})=>e.globalV2.md.minWidth}) {
        display: flex;
      }
    }

    .benefit {
      display: flex;
      gap: 12px;
      align-items: center;

      img {
        height: 24px;
        width: auto;

        @media (min-width: ${({theme:e})=>e.globalV2.md.minWidth}) {
          width: 40px;
          height: 40px;
        }
      }

      .state-icon {
        width: 16px;
        height: 16px;
        justify-self: flex-end;
        display: inline-block;
        margin-left: auto;
      }

      p {
        color: rgba(255, 255, 255, 0.6);
        font-size: 1.45rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: -0.43px;

        b {
          font-weight: inherit;
          color: #ffffff;
        }

        @media (min-width: ${({theme:e})=>e.globalV2.md.minWidth}) {
          font-size: 1.6rem;
        }
      }
    }
  }
`, E = (0, l.default)(({
        className: e,
        country: t
    }) => {
        let a = (0, m.useContext)(r.CartContext),
            {
                store: n,
                currency: l
            } = (0, m.useContext)(r.CartContext),
            s = T.standaloneUhxShopifyMap[a.store ? ? C.ShopifyStore.ROW],
            d = Math.floor((s.Year1.price - s.Year2.price / 2) / s.Year1.price * 100),
            c = (() => {
                switch (a.store) {
                    case C.ShopifyStore.US:
                        return "Enjoy 15% off on M1 Live all plans";
                    case C.ShopifyStore.AE:
                        return "Enjoy 12% off on M1 Live all plans";
                    case C.ShopifyStore.IN:
                    case C.ShopifyStore.EU:
                    case C.ShopifyStore.GB:
                    case C.ShopifyStore.AU:
                        return "Enjoy 15% off on all M1 plans";
                    case C.ShopifyStore.CA:
                    case C.ShopifyStore.ROW:
                    default:
                        return "Enjoy 15% off on all M1 Live plans"
                }
            })(),
            h = "US" !== t ? ["¹ Only applicable for Ring AIR", "² A single replacement can be used for any one of the following reasons: loss or theft, weight-loss related size changes, or pregnancy-related fit changes."] : [];
        return (0, i.jsxs)("section", {
            className: e,
            children: [(0, i.jsx)(o.Container, {
                children: [s.Year1, s.Year2].map(e => {
                    var t;
                    let a;
                    return (0, i.jsx)(Y, {
                        validity: `${e.validityInYears}`,
                        checkoutUrl: e.checkouturl,
                        price: e.pricePerYear,
                        billedAt: e.price.toString(),
                        currency: l ? ? V.Currency.usd,
                        highlighted: 2 === e.validityInYears,
                        saving: 2 === e.validityInYears ? d : void 0,
                        benefits: (a = [{
                            title: "Accidental damage protection",
                            state: 1 === (t = e.validityInYears) ? "included" : "preincluded",
                            image: (0, p.getAssetUrl)("/web_v2/ultrahumanX/icons/accidental.svg")
                        }, {
                            title: "Free, express replacements",
                            state: 1 === t ? "included" : "preincluded",
                            image: (0, p.getAssetUrl)("/web_v2/ultrahumanX/icons/replacements.svg")
                        }, {
                            title: "Priority support",
                            state: 1 === t ? "included" : "preincluded",
                            image: (0, p.getAssetUrl)("/web_v2/ultrahumanX/icons/support.svg")
                        }, {
                            title: c,
                            state: 1 === t ? "included" : "preincluded",
                            image: (0, p.getAssetUrl)("/web_v2/ultrahumanX/icons/m1.svg")
                        }], n !== C.ShopifyStore.US && a.push({
                            title: "Theft and loss protection ¹˒²",
                            state: 2 === t ? "included" : "locked",
                            image: (0, p.getAssetUrl)("/web_v2/ultrahumanX/icons/loss-coverage.svg")
                        }, {
                            title: "Weight loss coverage ¹˒²",
                            state: 2 === t ? "included" : "locked",
                            image: (0, p.getAssetUrl)("/web_v2/ultrahumanX/icons/weightloss-coverage.svg")
                        }, {
                            title: "Pregnancy Fit Coverage ¹˒²",
                            state: 2 === t ? "included" : "locked",
                            image: (0, p.getAssetUrl)("/web_v2/ultrahumanX/icons/pregnancy.svg")
                        }), a)
                    }, e.variantId)
                })
            }), (0, i.jsx)(o.Container, {
                children: (0, i.jsxs)("div", {
                    className: "disclaimer",
                    children: [(0, i.jsx)("b", {
                        children: "Disclaimer:"
                    }), (0, i.jsx)("br", {}), (0, i.jsx)("br", {}), "US" === t ? "UltrahumanX must be activated within 30 days of your device's original purchase date. UltrahumanX membership covers all your Ultrahuman devices for the full duration of your selected plan. This applies to M1 CGM, Home Monitor, and Ring AIR devices (purchased before Oct 21, 2025)." : "UltrahumanX must be activated within 30 days of your device's original purchase date. UltrahumanX membership covers all your Ultrahuman devices for the full duration of your selected plan. This applies to Ring AIR, Home Monitor, and M1.", h.length > 0 && (0, i.jsx)("div", {
                        className: "numbered-disclaimers",
                        children: h.map((e, t) => (0, i.jsx)("p", {
                            children: e
                        }, t))
                    })]
                })
            })]
        })
    }).withConfig({
        displayName: "BuySection",
        componentId: "sc-b3bab23-1"
    })
    `
  margin-top: 64px;
  position: relative;
  color: #ffffff;

  ${s}

  padding-top: 32px !important;

  @media (min-width: ${({theme:e})=>e.globalV2.md.minWidth}) {
    --card-max-width-lg: 400px;
  }

  & > div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 16px;

    @media (min-width: ${({theme:e})=>e.globalV2.md.minWidth}) {
      flex-direction: row;
      align-items: center;
    }
  }

  .disclaimer {
    margin-top: 32px;
    font-size: 1.3rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.4;
    letter-spacing: -0.43px;

    max-width: 100%;
    width: calc(var(--card-max-width-lg, 100%) * 2 + 16px);

    border-radius: 12px;
    padding: 16px;
    background: rgba(255 255 255 / 7%);
    color: rgba(255 255 255 / 60%);

    b {
      color: #ffffff;
      font-weight: inherit;
    }

    .numbered-disclaimers {
      margin-top: 12px;
      text-align: left;

      p {
        margin-bottom: 4px;
      }
    }
  }
`;
    var P = e.i(19230);
    let M = (0, l.default)(({
        className: e,
        country: t
    }) => {
        let a = (0, p.getCompressedAssetUrl)("/web_v2/videos/uhx-gradient.mp4/w_1920"),
            n = (0, p.getCompressedAssetUrl)("/web_v2/videos/uhx-gradient.mp4/w_1920"),
            r = (0, A.useAutoPlayVideoRef)(),
            l = (0, m.useRef)(null);
        return (0, F.useLottieAnimation)(l, {
            path: "/lottie/ultrahumanX-rotate.json",
            renderer: "svg",
            loop: !0,
            autoplay: !1,
            onInstance: e => {
                e.isPaused && e.play()
            }
        }), (0, m.useEffect)(() => {
            let e = () => {
                if (r.current) {
                    if (window.innerWidth > window.innerHeight && (!r.current.src || !r.current.src.endsWith(n))) {
                        r.current.src = n;
                        return
                    }
                    if (window.innerWidth < window.innerHeight && (!r.current.src || !r.current.src.endsWith(a))) {
                        r.current.src = a;
                        return
                    }
                }
            };
            return window.addEventListener("resize", e), e(), () => {
                window.removeEventListener("resize", e)
            }
        }, []), (0, i.jsxs)("section", {
            className: e,
            children: [(0, i.jsx)("div", {
                className: "video-container",
                children: (0, i.jsx)("video", {
                    preload: "none",
                    loop: !0,
                    autoPlay: !0,
                    muted: !0,
                    playsInline: !0,
                    ref: r,
                    children: (0, i.jsx)("source", {
                        src: a,
                        type: "video/mp4"
                    })
                })
            }), (0, i.jsx)("div", {
                className: "hero-container",
                children: (0, i.jsxs)(o.Container, {
                    className: "content",
                    children: [(0, i.jsx)("div", {
                        className: "countrySelector",
                        style: {
                            width: "100%",
                            display: "flex",
                            justifyContent: "flex-end",
                            padding: "0 16px"
                        },
                        children: (0, i.jsx)(P.RegionSelector, {})
                    }), (0, i.jsx)("div", {
                        className: "lottie-container",
                        ref: l
                    }), (0, i.jsx)("h1", {
                        children: "UltrahumanX Membership"
                    }), (0, i.jsxs)(c, {
                        className: "description",
                        children: ["UltrahumanX is your ", (0, i.jsx)("b", {
                            children: "peace of mind"
                        }), ", packed with unbeatable benefits. ", (0, i.jsx)("b", {
                            children: "Protection"
                        }), " from accidental damage, loss, or theft. ", (0, i.jsx)("b", {
                            children: "Priority support"
                        }), " and", " ", (0, i.jsx)("b", {
                            children: "effortless returns and replacements"
                        }), ". Everything you need and more, seamlessly built in—so you can focus on what matters most: ", (0, i.jsx)("b", {
                            children: "your health"
                        }), "."]
                    })]
                })
            }), (0, i.jsx)(E, {
                country: t
            })]
        })
    }).withConfig({
        displayName: "HeroSection",
        componentId: "sc-1feb72cd-0"
    })
    `
  position: relative;
  // padding: 16px;
  background: #000000;
  color: #ffffff;
  // height: 100vh;
  // height: 100lvh;
  // padding-top: 96px;
  overflow: hidden;

  @media (min-width: ${({theme:e})=>e.globalV2.md.minWidth}) {
    // padding: 48px;
    padding-top: 96px;
  }

  .video-container {
    position: absolute;
    bacgdround: #000;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    min-width: 100%;
    min-height: 100%;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -1px;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 1) 30%,
        rgba(0, 0, 0, 0.5) 60%,
        rgba(0, 0, 0, 0.3) 80%
      );
    }

    video {
      bacgdround: #000;
      width: 100%;
      height: 100%;
      min-width: 100%;
      min-height: 100%;
      object-fit: cover;
    }
  }

  .hero-container {
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    // overflow: hidden;
    padding-top: 96px;

    @media (min-width: ${({theme:e})=>e.globalV2.md.minWidth}) {
      padding-top: 0;
    }

    border-radius: 24px 24px 0 0;
  }

  & .content {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    z-index: 1;

    .lottie-container {
      position: relative;
      width: 180px;
      height: 180px;

      @media (min-width: ${({theme:e})=>e.globalV2.lg.minWidth}) {
        width: 240px;
        height: 240px;
      }
    }

    .rare-link {
      color: #ffffff;
      font-size: 1.6rem;
      padding: 8px 16px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.25);
      margin-top: 48px;
      letter-spacing: -0.05rem;
      text-align: center;

      svg {
        margin-left: 8px;
      }
    }
  }

  h1 {
    font-size: ${({theme:e})=>e.typographyV2.fontSize.large};
    font-weight: 500;
    letter-spacing: -0.96px;
    overflow: hidden;
    text-align: center;

    @media (min-width: ${({theme:e})=>e.globalV2.md.minWidth}) {
      letter-spacing: -1.6px;
      font-size: ${({theme:e})=>e.typographyV2.fontSize.extralarge};
    }

    span {
      display: inline-block;
    }
  }

  & .description {
    max-width: 64ch;
    text-align: center;
  }
`, B = [{
        title: "What does UltrahumanX cover?",
        description: (0, i.jsx)(i.Fragment, {
            children: "UltrahumanX protects your Ring AIR, Home, and M1. You can choose between 1-year and 2-year plans that include accidental protection, priority support, fast replacements, and other exclusive benefits."
        })
    }, {
        title: "How long is UltrahumanX valid for?",
        description: (0, i.jsxs)(i.Fragment, {
            children: ["The validity of your UltrahumanX plan depends on your chosen coverage.", (0, i.jsxs)("ul", {
                children: [(0, i.jsxs)("li", {
                    children: [(0, i.jsx)("strong", {
                        children: "UltrahumanX 1-Year Coverage:"
                    }), " ", (0, i.jsx)("p", {
                        children: "Valid for 1 year from the date of the first device (ring, home or M1) activation."
                    })]
                }), (0, i.jsxs)("li", {
                    children: [(0, i.jsx)("strong", {
                        children: "UltrahumanX 2-Year Coverage:"
                    }), " ", (0, i.jsx)("p", {
                        children: "Valid for 2 years from the date of the first device (ring, home or M1) activation."
                    })]
                })]
            }), "If your device is not activated within 60 days of purchase, the UltrahumanX subscription will be automatically activated."]
        })
    }, {
        title: "How does extended coverage work?",
        description: (0, i.jsx)(i.Fragment, {
            children: "If you have the UltrahumanX 1-year coverage, your standard warranty is extended to include accidental damage protection for Ring AIR, Home, and M1. With the 2-year plan, you get everything in the 1-year plan plus added benefits. Ring AIR is also covered for theft, loss, and a one-time size exchange if you lose weight. For Ultrahuman Home, the 2-year plan adds exclusive coverage under Environmental Wear Protection, and early access to experimental features through Ultrahuman Beta Access."
        })
    }, {
        title: "Can I purchase my UltrahumanX membership after buying my Ring AIR or Home?",
        description: (0, i.jsx)(i.Fragment, {
            children: "Yes, you can purchase UltrahumanX within 30 days of your order date."
        })
    }, {
        title: "Can I upgrade my UltrahumanX plan after purchase?",
        description: (0, i.jsx)(i.Fragment, {
            children: "Yes. You can upgrade within 30 days of your original purchase."
        })
    }, {
        title: "Can I extend my UltrahumanX membership?",
        description: (0, i.jsx)(i.Fragment, {
            children: "Yes. You can renew your membership within 15 days after your 1-year UltrahumanX plan expires to continue coverage. If you’ve purchased the 2-year plan, you’ve already reached the maximum coverage available."
        })
    }, {
        title: "What happens if I lose my Ring AIR?",
        description: (0, i.jsx)(i.Fragment, {
            children: "In the unfortunate event that you lose your ring, you can request a replacement as long as your UltrahumanX 2-year coverage membership is active. To file your claim, simply contact our support team and provide the necessary documents to validate the loss or theft."
        })
    }, {
        title: "How do replacements work?",
        description: (0, i.jsxs)(i.Fragment, {
            children: ["For Home and Ring AIR, we repair or replace the device depending on the issue. Ring AIR and Home are eligible for one replacement each during the membership period.", (0, i.jsx)("br", {}), (0, i.jsx)("br", {}), "For M1, you can replace up to two sensors per year if they're accidentally damaged or faulty. For any extras, we issue a refund and arrange for return."]
        })
    }, {
        title: "What is weight loss coverage?",
        description: (0, i.jsx)(i.Fragment, {
            children: "Only applicable for the Ring AIR. The 2-year membership allows you to exchange your ring for a smaller size once if you lose weight. Just meet the eligibility criteria outlined in the terms, and you're good to go."
        })
    }, {
        title: "What is Pregnancy Fit Coverage?",
        description: (0, i.jsxs)(i.Fragment, {
            children: ["Pregnancy Fit Coverage allows eligible UltrahumanX members to request a one-time ring size replacement if pregnancy-related finger swelling makes the ring uncomfortable or unwearable. The goal is to help you continue wearing your ring comfortably throughout pregnancy.", (0, i.jsx)("br", {}), (0, i.jsx)("br", {}), "This benefit applies only to Ultrahuman Ring AIR and is available exclusively under the UltrahumanX 2-Year plan."]
        })
    }, {
        title: "Who is eligible for Pregnancy Fit Coverage?",
        description: (0, i.jsx)(i.Fragment, {
            children: "If you have an active UltrahumanX 2-Year plan and are pregnant, you're eligible for Pregnancy Fit Coverage if changes in finger size during pregnancy make it difficult to continue wearing your ring comfortably. Eligibility is limited to users of Ultrahuman Ring AIR."
        })
    }, {
        title: "When can I request a pregnancy fit replacement?",
        description: (0, i.jsx)(i.Fragment, {
            children: "You can request a replacement once pregnancy-related finger swelling makes your current ring difficult or unsafe to wear. There is no fixed trimester requirement."
        })
    }, {
        title: "Do I need to provide medical documentation for pregnancy fit coverage?",
        description: (0, i.jsxs)(i.Fragment, {
            children: ["No medical documentation is required. Ultrahuman relies on user self-attestation to keep the process simple and respectful.", (0, i.jsx)("br", {}), (0, i.jsx)("br", {}), "Ultrahuman may request limited additional information in exceptional cases to validate eligibility or prevent misuse."]
        })
    }, {
        title: "What happens after pregnancy if my finger size changes again?",
        description: (0, i.jsxs)(i.Fragment, {
            children: ["Post-pregnancy size changes are not automatically covered. Any additional replacements would follow standard UltrahumanX replacement policies.", (0, i.jsx)("br", {}), (0, i.jsx)("br", {}), "If the replacement entitlement has already been used under Pregnancy Fit Coverage, no further ring replacements will be available under the same UltrahumanX plan."]
        })
    }, {
        title: "How many replacements are included with the UltrahumanX 2-Year plan?",
        description: (0, i.jsxs)(i.Fragment, {
            children: ["The UltrahumanX 2-Year plan includes one ring replacement for the entire duration of the plan.", (0, i.jsx)("br", {}), (0, i.jsx)("br", {}), "This single replacement can be used for ", (0, i.jsx)("strong", {
                children: "any one"
            }), " of the following reasons: loss or theft, weight-loss related size changes, or pregnancy-related fit changes. These reasons do not stack, and once a replacement is used, no additional replacements are available under the same plan. This limit applies irrespective of the order in which these events occur."]
        })
    }, {
        title: "What do returns and replacements include?",
        description: (0, i.jsx)(i.Fragment, {
            children: "You get fast, free, and easy returns or replacements on the Ring AIR, Home, and M1 throughout your coverage period."
        })
    }, {
        title: "What is Environmental Wear Protection?",
        description: (0, i.jsx)(i.Fragment, {
            children: "Available with the 2-year plan for Home. This protection covers your device against unprecedented factors like extreme humidity, dust, power surges, and even natural disasters. This plan covers one repair or replacement after a sensor diagnostic has been performed."
        })
    }, {
        title: "What is Ultrahuman Beta Access?",
        description: (0, i.jsx)(i.Fragment, {
            children: "Included with the 2-year plan for Home. You’re among the first to experience what’s next on home health tracking. You get early access to new advancements and upcoming features, built to enhance the health of your home."
        })
    }, {
        title: "What is the member-only special price?",
        description: (0, i.jsx)(i.Fragment, {
            children: "As an UltrahumanX member, you get 15 per cent off every Ultrahuman M1 purchase. You also unlock exclusive pricing on Ultrahuman accessories."
        })
    }, {
        title: "How do I access special prices for M1?",
        description: (0, i.jsx)(i.Fragment, {
            children: 'Log in to the Ultrahuman app using the email linked to your UltrahumanX purchase. Go to the Metabolism tab and tap "Buy Sensors" to see your exclusive rates.'
        })
    }, {
        title: "Can I cancel UltrahumanX if I change my mind?",
        description: (0, i.jsx)(i.Fragment, {
            children: "Yes. If the plan hasn't been used and you cancel within 60 days of purchase, you're eligible for a full refund."
        })
    }, {
        title: "Can I get a refund for my device, on UltrahumanX?",
        description: (0, i.jsx)(i.Fragment, {
            children: "Yes. A full refund is available within 30 days of purchase."
        })
    }, {
        title: "Are there any exclusions?",
        description: (0, i.jsx)(i.Fragment, {
            children: "There are exclusions, under the 2-year plan. The Environmental Wear Protection and Accidental Damage benefits will be void if your Ultrahuman Home device has been opened, modified, or serviced by anyone outside the Ultrahuman Team. To maintain your coverage, please ensure that all servicing is carried out exclusively through the Ultrahuman Team."
        })
    }, {
        title: "What happens if I purchase UltrahumanX twice, once with Home and once with Ring AIR?",
        description: (0, i.jsx)(i.Fragment, {
            children: "If you accidentally bought UltrahumanX with both products, we have got you covered! Your coverage validity will be extended based on the one you purchased most recently. The latest purchase sets your updated coverage period."
        })
    }], D = [{
        title: "What does UltrahumanX cover?",
        description: (0, i.jsx)(i.Fragment, {
            children: "UltrahumanX protects your Home, and M1. You can choose between 1-year and 2-year plans that include accidental protection, priority support, fast replacements, and other exclusive benefits."
        })
    }, {
        title: "How long is UltrahumanX valid for?",
        description: (0, i.jsxs)(i.Fragment, {
            children: ["The validity of your UltrahumanX plan depends on your chosen coverage.", (0, i.jsxs)("ul", {
                children: [(0, i.jsxs)("li", {
                    children: [(0, i.jsx)("strong", {
                        children: "UltrahumanX 1-Year Coverage:"
                    }), " ", (0, i.jsx)("p", {
                        children: "Valid for 1 year from the date of the first device (Home or M1) activation."
                    })]
                }), (0, i.jsxs)("li", {
                    children: [(0, i.jsx)("strong", {
                        children: "UltrahumanX 2-Year Coverage:"
                    }), " ", (0, i.jsx)("p", {
                        children: "Valid for 2 years from the date of the first device (Home or M1) activation."
                    })]
                })]
            }), "If your device is not activated within 60 days of purchase, the UltrahumanX subscription will be automatically activated."]
        })
    }, {
        title: "How does extended coverage work?",
        description: (0, i.jsx)(i.Fragment, {
            children: "If you have the UltrahumanX 1-year coverage, your standard warranty is extended to include accidental damage protection for Home, and M1. With the 2-year plan, you get everything in the 1-year plan plus added benefits. For Ultrahuman Home, the 2-year plan adds exclusive coverage under Environmental Wear Protection, and early access to experimental features through Ultrahuman Beta Access."
        })
    }, {
        title: "Can I purchase my UltrahumanX membership after buying my Home or M1?",
        description: (0, i.jsx)(i.Fragment, {
            children: "Yes, you can purchase UltrahumanX within 30 days of your order date."
        })
    }, {
        title: "Can I upgrade my UltrahumanX plan after purchase?",
        description: (0, i.jsx)(i.Fragment, {
            children: "Yes. You can upgrade within 30 days of your original purchase."
        })
    }, {
        title: "Can I extend my UltrahumanX membership?",
        description: (0, i.jsx)(i.Fragment, {
            children: "Yes. You can renew your membership within 15 days after your 1-year UltrahumanX plan expires to continue coverage. If you’ve purchased the 2-year plan, you’ve already reached the maximum coverage available."
        })
    }, {
        title: "How do replacements work?",
        description: (0, i.jsxs)(i.Fragment, {
            children: ["For Home, we repair or replace the device depending on the issue. Home is eligible for one replacement each during the membership period.", (0, i.jsx)("br", {}), (0, i.jsx)("br", {}), "For M1, you can replace up to two sensors per year if they're accidentally damaged or faulty. For any extras, we issue a refund and arrange for return."]
        })
    }, {
        title: "What do returns and replacements include?",
        description: (0, i.jsx)(i.Fragment, {
            children: "You get fast, free, and easy returns or replacements on the Home, and M1 throughout your coverage period."
        })
    }, {
        title: "What is Environmental Wear Protection?",
        description: (0, i.jsx)(i.Fragment, {
            children: "Available with the 2-year plan for Home. This protection covers your device against unprecedented factors like extreme humidity, dust, power surges, and even natural disasters. This plan covers one repair or replacement after a sensor diagnostic has been performed."
        })
    }, {
        title: "What is Ultrahuman Beta Access?",
        description: (0, i.jsx)(i.Fragment, {
            children: "Included with the 2-year plan for Home. You’re among the first to experience what’s next on home health tracking. You get early access to new advancements and upcoming features, built to enhance the health of your home."
        })
    }, {
        title: "What is the member-only special price?",
        description: (0, i.jsx)(i.Fragment, {
            children: "As an UltrahumanX member, you get 15 per cent off every Ultrahuman M1 purchase. You also unlock exclusive pricing on Ultrahuman accessories."
        })
    }, {
        title: "How do I access special prices for M1?",
        description: (0, i.jsx)(i.Fragment, {
            children: 'Log in to the Ultrahuman app using the email linked to your UltrahumanX purchase. Go to the Metabolism tab and tap "Buy Sensors" to see your exclusive rates.'
        })
    }, {
        title: "Can I cancel UltrahumanX if I change my mind?",
        description: (0, i.jsx)(i.Fragment, {
            children: "Yes. If the plan hasn't been used and you cancel within 60 days of purchase, you're eligible for a full refund."
        })
    }, {
        title: "Can I get a refund for my device, on UltrahumanX?",
        description: (0, i.jsx)(i.Fragment, {
            children: "Yes. A full refund is available within 30 days of purchase."
        })
    }, {
        title: "Are there any exclusions?",
        description: (0, i.jsx)(i.Fragment, {
            children: "There are exclusions, under the 2-year plan. The Environmental Wear Protection and Accidental Damage benefits will be void if your Ultrahuman Home device has been opened, modified, or serviced by anyone outside the Ultrahuman Team. To maintain your coverage, please ensure that all servicing is carried out exclusively through the Ultrahuman Team."
        })
    }, {
        title: "What happens if I purchase UltrahumanX twice, once with Home and once with M1?",
        description: (0, i.jsx)(i.Fragment, {
            children: "If you accidentally bought UltrahumanX with both products, we have got you covered! Your coverage validity will be extended based on the one you purchased most recently. The latest purchase sets your updated coverage period."
        })
    }];
    var L = e.i(8762),
        O = e.i(86236),
        q = e.i(18888),
        G = e.i(57706),
        K = e.i(2100),
        J = e.i(83978);
    let Q = (0, p.getCompressedAssetUrl)("/web_v2/rare/videos/gold-pellets-ring.mp4/w_1920"),
        Z = (0, p.getCompressedAssetUrl)("/web_v2/rare/videos/hero-rare-1920-2.mp4/w_1920"),
        ee = () => {
            let e = (0, A.useAutoPlayVideoRef)(),
                t = (0, m.useRef)(null),
                a = (0, m.useRef)(null),
                n = (0, L.useGsapContext)();
            return (0, m.useEffect)(() => {
                let t = () => {
                    if (e.current) {
                        if (window.innerWidth > window.innerHeight && (!e.current.src || !e.current.src.endsWith(Z))) {
                            e.current.src = Z;
                            return
                        }
                        if (window.innerWidth < window.innerHeight && (!e.current.src || !e.current.src.endsWith(Q))) {
                            e.current.src = Q;
                            return
                        }
                    }
                };
                return window.addEventListener("resize", t), t(), () => {
                    window.removeEventListener("resize", t)
                }
            }, []), (0, O.useIsomorphicLayoutEffect)(() => {
                t.current && n.add(() => {
                    if (!t.current) return;
                    let e = q.default.timeline({
                        defaults: {
                            duration: 1,
                            ease: "power2.out"
                        }
                    });
                    e.fromTo(t.current ? .querySelectorAll(".hero-letters"), {
                        opacity: 0,
                        yPercent: 100
                    }, {
                        opacity: 1,
                        yPercent: 0,
                        stagger: .04
                    }), e.fromTo(a.current, {
                        opacity: 0,
                        yPercent: 100
                    }, {
                        opacity: 1,
                        yPercent: 0,
                        duration: .2
                    })
                })
            }, []), (0, i.jsxs)(et, {
                children: [(0, i.jsx)("video", {
                    preload: "none",
                    loop: !0,
                    autoPlay: !0,
                    muted: !0,
                    playsInline: !0,
                    ref: e,
                    children: (0, i.jsx)("source", {
                        src: Q,
                        type: "video/mp4"
                    })
                }), (0, i.jsx)(o.Container, {
                    className: "container",
                    children: (0, i.jsxs)("div", {
                        className: "content",
                        children: [(0, i.jsxs)("h1", {
                            ref: t,
                            children: [(0, i.jsx)("span", {
                                className: "sentence",
                                children: "EXCLUSIVE BENEFITS FOR"
                            }), (0, i.jsx)("span", {
                                className: "sentence",
                                children: "ULTRAHUMAN RING RARE"
                            })]
                        }), (0, i.jsx)("div", {
                            className: "cta-container",
                            children: (0, i.jsxs)(G.FlatLink, {
                                style: {
                                    color: "#ffffff"
                                },
                                href: {
                                    pathname: "/rare",
                                    hash: "rare-uhx-benefits"
                                },
                                children: ["Checkout exclusive Rare Ring UHX benefits ", (0, i.jsx)(J.RightArrow, {})]
                            })
                        })]
                    })
                })]
            })
        },
        et = l.default.section.withConfig({
            displayName: "RarebenefitsBannerSection__ContainerRoot",
            componentId: "sc-2b32a747-0"
        })
    `
  position: relative;
  height: 70vh;
  height: 70lvh;
  width: 100%;

  ${K.HelveticaNeueFontMixin}

  ${s}

  transition: all 0.2s ease-in-out;

  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    object-fit: cover;
    object-position: center;
    filter: brightness(0.85);

    pointer-events: none;
  }

  & .container {
    height: 100%;
    display: grid;
    place-items: center;

    & .content {
      position: relative;

      h1 {
        color: #fefdf9;
        text-align: center;
        font-weight: 300;

        text-transform: uppercase;
        line-height: 100%; /* 72px */
        font-size: 3rem;
        letter-spacing: -1px;

        @media (min-width: 320px) {
          font-size: 3.2rem;
          letter-spacing: -1.6px;
        }

        @media (min-width: 361px) {
          font-size: 3.6rem;
          letter-spacing: -1.6px;
        }

        @media (min-width: ${({theme:e})=>e.globalV2.md.minWidth}) {
          font-size: 5.2rem;
          letter-spacing: -1.6px;
        }

        @media (min-width: ${({theme:e})=>e.globalV2.lg.minWidth}) {
          font-size: 7.2rem;
          letter-spacing: -2px;
        }

        .sentence {
          display: block;
          overflow: hidden;

          span,
          i {
            display: inline-block;
          }
        }
      }

      .cta-container {
        padding-top: 40px;
        overflow: hidden;
        text-align: center;
        a {
          display: inline-block;
        }
      }
    }
  }
`;
    e.s(["__N_SSP", () => !0, "default", 0, ({
        region: e
    }) => {
        let t = "US" === e;
        return (0, i.jsxs)("main", {
            style: {
                backgroundColor: "#000"
            },
            children: [(0, i.jsx)(a.SEO, {
                title: "Ultrahuman | Ultrahuman X",
                description: "An extended coverage and special benefits program on Ultrahuman products.",
                basePath: "/x"
            }), (0, i.jsx)(M, {
                country: t ? "US" : void 0
            }), (0, i.jsx)(X, {
                defaultAvtiveTab: t ? N.HOME : void 0
            }), !t && (0, i.jsx)(ee, {}), (0, i.jsx)(n.FAQSection, {
                faqData: t ? D : B
            })]
        })
    }], 32226)
}, 55543, (e, t, i) => {
    (window.__NEXT_P = window.__NEXT_P || []).push(["/x", () => e.r(32226)]), t.hot && t.hot.dispose(function() {
        window.__NEXT_P.push(["/x"])
    })
}]);