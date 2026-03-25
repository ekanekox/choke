(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 44095, e => {
    "use strict";
    var i = e.i(91398);
    e.i(64157);
    var t = e.i(71179),
        r = e.i(3828),
        a = e.i(91788),
        n = e.i(73528),
        s = e.i(88061),
        o = e.i(69949),
        l = e.i(60814),
        c = e.i(82702),
        d = e.i(64034),
        h = e.i(1814),
        m = e.i(79546),
        p = e.i(17162),
        g = e.i(2100),
        x = e.i(57134),
        u = e.i(56375),
        f = e.i(15110),
        b = e.i(49317);
    let j = (0, l.default)(({
        className: e
    }) => {
        let {
            t: r
        } = (0, t.useTranslation)("ring"), l = (0, a.useContext)(u.RingSelectionContext), g = (0, a.useContext)(m.CartContext), j = (0, a.useContext)(x.ModalContext), {
            resetCounter: w
        } = (0, b.useRetouchFlowContext)(), {
            size: y,
            uhx: v,
            uhxCart: N,
            shippingEstimate: _,
            color: k,
            defaultCurrency: C,
            engraving: S,
            notServicable: I,
            goToNextStep: R,
            isLoading: A,
            tradeInDevice: T,
            tradeInCredit: W
        } = l, M = () => {
            A || (n.default.track("ring-air-checkout", {
                clicked: !0
            }), w(), l.checkout(), j.hide())
        }, {
            store: z
        } = g, F = (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsxs)(o.MidPanel, {
                children: [(0, i.jsxs)("p", {
                    className: "total-price-single",
                    children: [l.currencySymbol, (0, h.formatPriceWithComma)(l.effectivePrice), (0, i.jsxs)("span", {
                        className: "tax-disclaimer",
                        children: ["(", g.taxString, ".)"]
                    })]
                }), T && W > 0 && (0, i.jsxs)("p", {
                    className: "trade-in-credit",
                    children: ["-", l.currencySymbol, (0, h.formatPriceWithComma)(W), " (Trade-in credits)"]
                })]
            }), (0, i.jsxs)(o.MidPanelPhone, {
                onClick: () => {
                    let e = document.getElementById("order-summary-card");
                    e && e.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    })
                },
                children: [(0, i.jsxs)("div", {
                    className: "mid-panel-phone-row",
                    children: [(0, i.jsx)("div", {
                        className: "subtitle-text-btn",
                        children: "Total"
                    }), (0, i.jsxs)("p", {
                        className: "total-price-single",
                        children: [l.currencySymbol, (0, h.formatPriceWithComma)(l.effectivePrice), (0, i.jsxs)("span", {
                            className: "tax-disclaimer",
                            children: ["(", g.taxString, ".)"]
                        })]
                    })]
                }), T && W > 0 && (0, i.jsxs)("p", {
                    className: "trade-in-credit",
                    children: ["-", l.currencySymbol, (0, h.formatPriceWithComma)(W), " (Trade-in credits)"]
                })]
            })]
        });
        return !0 === I ? null : (0, i.jsxs)("div", {
            className: e,
            children: [(0, i.jsx)(o.LeftPanel, {
                children: _ ? (0, i.jsxs)("p", {
                    className: "chat-specialist",
                    children: [(0, i.jsx)(s.ShippingBox, {}), " ", _]
                }) : null
            }), l.size ? F : null, (0, i.jsx)(o.RightPanel, {
                children: y && (v || null !== N) ? (0, i.jsx)(f.PrimaryButton, {
                    onClick: () => {
                        l.size && (l.size ? n.default.track("Bottom bar addto cart - CLICK") : n.default.track("Bottom bar select color-size - CLICK")), M()
                    },
                    disabled: A || !(y && (v || null !== N)),
                    "aria-busy": A,
                    "data-buttontype": "add to cart",
                    "data-variantId": k && y && C ? d.productMap_air_ring[k] ? .[y] ? .[(0, c.getEngravingKey)(S)] ? .variantId[z] : "",
                    "data-product": "Ultrahuman Ring AIR",
                    children: A ? (0, i.jsx)(i.Fragment, {
                        children: (0, i.jsx)(p.DotSpinner, {
                            color: "#000000"
                        })
                    }) : (0, i.jsx)(i.Fragment, {
                        children: r(l.size ? "ring.productSelection.cartSummary.addToCart" : "ring.productSelection.cartSummary.colorSize")
                    })
                }) : (0, i.jsx)(f.PrimaryButton, {
                    onClick: R,
                    "data-buttontype": "go to next step",
                    "data-variantId": k && y && C ? d.productMap_air_ring[k] ? .[y] ? .[(0, c.getEngravingKey)(S)] ? .variantId[z] : "",
                    "data-product": "Ultrahuman Ring AIR",
                    children: r("ring.CONTINUE")
                })
            })]
        })
    }).withConfig({
        displayName: "BottomBar",
        componentId: "sc-327cc202-0"
    })
    `
  background: rgba(245, 245, 245, 1);
  -webkit-backdrop-filter: blur(24px);
  backdrop-filter: blur(24px);
  position: sticky;
  bottom: 0;
  z-index: 100;
  color: ${({theme:e})=>e.colorsV2.primary};
  padding: 8px;
  box-shadow: inset 0 2px 2px white;

  .tax-disclaimer {
    text-align: center;
    font-size: 14px;
    font-weight: 400;
    line-height: 23px; /* 164.286% */
    letter-spacing: -0.28px;
  }


  ${g.gridMixin}

  @media (min-width: ${({theme:e})=>e.global.phone.maxWidth}) {
    align-items: center;
    height: 72px
    padding: 0;
  }

  .blue-btn {
    background: ${({theme:e})=>e.colors.accent};
    border: none;
    color: ${({theme:e})=>e.colors.primary};
    font-size: 1.7rem;
    font-weight: 500;
    padding: 2.4rem 0;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    border-radius: 8px;
    padding: 1.2rem;

    &:disabled {
      background-color: rgba(0, 0, 0, 0.1);
      color: rgba(0, 0, 0, 0.4);
      cursor: not-allowed;
    }
  }

  .chat-specialist {
    font-size: 1.6rem;
    color: rgba(0,0,0,1);
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: none;


    strong {
      font-weight: 500
    }
      img,
      svg {
        height: 3rem;
        margin-right: 4px;
        // transform: translateY(4px);
      }
  }


  // mid panel

  .subtitle-text-btn {
    height: 100%;
    display: flex;
    align-items: center;

    font-size: 1.5rem;
    font-weight: 500;
    color: rgba(0,0,0,0.5);

    svg {
      height: 0.8rem;
      path {
        fill: rgba(0,0,0,0.5);
      }
    }
  }

  .total-price-single {
    display: flex;
    align-items: center;
    gap: 2px;
    font-size: 1.6rem;
    font-weight: 500;
  }
  .trade-in-credit {
    font-size: 1.2rem;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.5);
  }
  .mid-panel-phone-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }
  ${o.MidPanelPhone} {
    flex-wrap: wrap;
    .trade-in-credit {
      width: 100%;
      text-align: right;
    }
  }
  .total-price {
    font-weight: 500;
    font-size: 1.6rem;
    text-align: right

  }
  .effective-price {
    font-weight: 400;
    font-size: 1.4rem;
    text-align: right

  }


`;
    var w = e.i(55367),
        y = e.i(19231),
        v = e.i(21666),
        N = e.i(61791);
    let _ = (0, l.default)(({
        className: e
    }) => {
        let {
            t: r
        } = (0, t.useTranslation)("ring");
        return (0, i.jsx)("section", {
            className: e,
            children: (0, i.jsx)(y.Container, {
                children: (0, i.jsxs)("div", {
                    className: "content",
                    children: [(0, i.jsx)("div", {
                        className: "img-container",
                        children: (0, i.jsx)(v.CustomImage, {
                            src: "web_v2/ring-buy/ultracare-ring-2.png",
                            alt: "ultracare",
                            width: "1584",
                            height: 1632
                        })
                    }), (0, i.jsxs)("div", {
                        className: "text-container",
                        children: [(0, i.jsx)("h3", {
                            children: r("ring.ultracare.heading")
                        }), (0, i.jsx)("p", {
                            children: r("ring.ultracare.description")
                        })]
                    })]
                })
            })
        })
    }).withConfig({
        displayName: "UltracareInfoSection",
        componentId: "sc-e3b5ae7d-0"
    })
    `
  ${N.sectionPadding}

  & .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    gap: 1.15rem;

    background: #000000;
    border-radius: 24px;
    padding: 24px;
    color: #ffffff;

    @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
      flex-direction: row;
      gap: 48px;
      padding: 48px;
      justify-content: space-between;
    }

    & > div {
      flex-grow: 0;
      flex-shrink: 0;

      @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
        width: calc(50% - 24px) !important;
      }
    }

    .img-container {
      width: 100%;
      margin-bottom: 24px;
      img {
        width: 100%;
        height: auto;
      }

      @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
        // width: unset;
        margin-bottom: 24px;
        order: 2;
        margin-bottom: unset;
      }
    }

    .text-container {
      h3 {
        font-size: 28px;
        font-style: normal;
        font-weight: 500;
        line-height: 100%; /* 35.216px */
        letter-spacing: -1.12px;
        background: linear-gradient(91deg, #fff 0.9%, #999 135.14%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

        width: 12ch;

        padding: 8px 0;

        @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
          font-size: 35.216px;
          letter-spacing: -1.409px;
          order: 1;
        }
      }

      p {
        margin-top: 8px;
        color: rgba(255, 255, 255, 0.5);
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 130%; /* 26px */
        letter-spacing: -0.64px;

        @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
          max-width: 32ch;
          font-size: 20px;
          letter-spacing: -0.8px;
          margin-bottom: 48px;
        }
      }
    }
  }
`;
    var k = e.i(94600),
        C = e.i(54134),
        S = e.i(19661),
        I = e.i(4753),
        R = e.i(3115),
        A = e.i(40290),
        T = e.i(46737),
        W = e.i(2488);
    let M = [{
            id: "ring-contents",
            messageId: "ring.secondaryHeader.a"
        }, {
            id: "ring-reviews",
            messageId: "ring.secondaryHeader.g"
        }, {
            id: "ring-sleep",
            messageId: "ring.secondaryHeader.b"
        }, {
            id: "ring-comparision",
            messageId: "ring.secondaryHeader.c"
        }, {
            id: "ring-capabilities",
            messageId: "ring.secondaryHeader.d"
        }, {
            id: "ring-specs",
            messageId: "ring.secondaryHeader.e"
        }, {
            id: "ring-faq",
            messageId: "ring.secondaryHeader.f"
        }],
        z = M.map(e => e.id),
        F = l.default.div.withConfig({
            displayName: "SecondaryNavbar__Nav",
            componentId: "sc-499ae5bf-0"
        })
    `
  width: 100%;
  overflow-x: auto;
  ${g.hideScrollbar}
  display: flex;
  flex-direction: row;
  gap: 12px;

  justify-content: flex-start;

  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    gap: 16px;
    justify-content: center;
    width: fit-content;
  }
`, V = l.default.div.withConfig({
        displayName: "SecondaryNavbar__MobileNav",
        componentId: "sc-499ae5bf-1"
    })
    `
  display: flex;
  flex-direction: column;
  gap: 16px;

  align-items: center;
`, U = l.default.button.withConfig({
        displayName: "SecondaryNavbar__NavItem",
        componentId: "sc-499ae5bf-2"
    })
    `
  flex-shrink: 0;
  border: none;
  background: transparent;
  color: #000000;
  font-size: 16px;
  font-weight: 400;
  transition: box-shadow 0.3s ease-in-out;
  letter-spacing: -0.8px;

  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    padding: 16px 8px;
  }

  &.active {
    box-shadow: inset 0px -2px 0px #000000;
  }
`, D = l.default.button.withConfig({
        displayName: "SecondaryNavbar__MobileNavItem",
        componentId: "sc-499ae5bf-3"
    })
    `
  flex-shrink: 0;
  border: none;
  background: transparent;
  color: rgba(0, 0, 0, 0.35);
  font-size: 16px;
  font-weight: 500;
  transition: box-shadow 0.3s ease-in-out;
  // opacity: 0;
  animation: fadeIn 0.3s ease-in-out forwards;
  letter-spacing: -0.8px;

  &.active {
    color: #000000;
  }
`, $ = (0, l.default)(({
        className: e
    }) => {
        let r = (0, T.useGlobalUI)(),
            {
                t: n
            } = (0, t.useTranslation)("ring"),
            [s, o] = (0, a.useState)(!1),
            l = (0, a.useRef)(!1),
            c = (0, a.useRef)(null),
            d = (0, a.useCallback)(e => {
                let i = document.getElementById(e);
                if (!i) return;
                l.current = !0;
                let t = i.getBoundingClientRect().top + window.scrollY - 30,
                    r = window.scrollY,
                    a = t - r,
                    n = null,
                    s = e => {
                        null === n && (n = e);
                        let i = e - n,
                            t = Math.min(i / 800, 1),
                            o = t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
                        window.scrollTo(0, r + a * o), i < 800 ? requestAnimationFrame(s) : setTimeout(() => {
                            l.current = !1, c.current && c.current()
                        }, 100)
                    };
                requestAnimationFrame(s)
            }, [r.headerVisible, r.headerHeight]),
            h = (0, W.default)(z, 60, l, c),
            m = M.find(e => e.id === h) ? ? M[0],
            p = (0, i.jsx)(F, {
                children: M.map(e => (0, i.jsx)(U, {
                    onClick: () => d(e.id),
                    className: h === e.id ? "active" : "",
                    "data-buttontype": `secondary_navbar_${e.id}`,
                    children: n(e.messageId)
                }, e.id))
            }),
            g = (0, i.jsx)(V, {
                children: M.map((e, t) => (0, i.jsx)(D, {
                    onClick: () => d(e.id),
                    className: h === e.id ? "active" : "",
                    style: {
                        animationDelay: `${.05*t}s`
                    },
                    "data-buttontype": `secondary_navbar_${e.id}_mobile`,
                    children: n(e.messageId)
                }, e.id))
            });
        return (0, i.jsx)("div", {
            className: `${e}`,
            style: {
                top: `${r.headerVisible?r.headerHeight:0}px`
            },
            children: (0, i.jsxs)(y.Container, {
                onClick: () => o(!1),
                "aria-hidden": !0,
                children: [(0, i.jsx)("div", {
                    className: "content d-sm-none",
                    children: p
                }), (0, i.jsxs)("div", {
                    className: "content-mobile d-lg-none",
                    onClick: e => {
                        e.stopPropagation(), o(e => !e)
                    },
                    "aria-hidden": !0,
                    children: [(0, i.jsxs)("p", {
                        className: "section-title-visible",
                        children: [n(m.messageId), " ", (0, i.jsx)(A.CaretUp, {
                            fill: "#000000",
                            style: {
                                transform: "rotate(180deg)",
                                height: "8px"
                            }
                        })]
                    }), s ? (0, i.jsx)("div", {
                        className: "mobile-nav",
                        children: g
                    }) : null]
                })]
            })
        })
    }).withConfig({
        displayName: "SecondaryNavbar__SecondaryNavbar_RingAir",
        componentId: "sc-499ae5bf-4"
    })
    `
  color: black;
  position: sticky;
  top: 12px;
  transition: all 0.3s ease-in-out;
  z-index: 100;
  padding-top: 12px;
  margin-bottom: 80px;

  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    margin-bottom: unset;
    top: 0px;
    padding-top: unset;
    display: block;
    background: rgba(255, 255, 255, 0.6);
    -webkit-backdrop-filter: blur(24px);
    backdrop-filter: blur(24px);
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  }

  .d-sm-none {
    display: none !important;

    @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
      display: flex !important;
    }
  }

  .d-lg-none {
    display: initial;

    @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
      display: none !important;
    }
  }

  p.section-title-visible {
    color: #000;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%; /* 16px */
    letter-spacing: -0.64px;
  }

  .content-mobile {
    position: absolute;
    top: 12px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;

    border: rgba(0, 0, 0, 0.15) 1.25px solid;
    box-shadow: 0px 1px 4px 0px rgba(255, 255, 255, 0.35) inset;

    width: 90%;
    margin: 0 auto;

    background: rgba(255, 255, 255, 0.6);
    -webkit-backdrop-filter: blur(24px);
    backdrop-filter: blur(24px);
    padding: 12px;
    border-radius: 24px;

    transition: all 0.3s ease-in-out;
    overflow: hidden;

    .mobile-nav {
      animation: ${l.keyframes`
        from {
          height: 0;
        } to {
          height: 225px;
        }
      `} 0.3s ease-in-out forwards;
    }
  }

  & .content {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 80%;
    margin: 0 auto;

    background: rgba(255, 255, 255, 0.6);
    -webkit-backdrop-filter: blur(24px);
    backdrop-filter: blur(24px);
    padding: 12px;
    border-radius: 50px;

    @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
      background: transparent;
      -webkit-backdrop-filter: none;
      backdrop-filter: none;
      padding: unset;
      border-radius: 0px;
    }

    h4 {
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 16px;
      color: #000000;

      padding: 16px 0;
    }

    .chat-specialist {
      a {
        font-weight: 400;
        font-size: 16px;
        line-height: 17px;

        letter-spacing: -0.03em;

        background: transparent;
        border: none;
        cursor: pointer;

        display: flex;
        align-items: center;
        gap: 4px;

        color: ${({theme:e})=>e.colorsV2.primary};

        svg {
          width: 1rem;
          path {
            fill: #000000;
          }
        }
      }
    }
  }
`;
    var E = e.i(8762),
        P = e.i(18888),
        B = e.i(82382),
        O = e.i(86236),
        L = e.i(57232);
    let G = (0, l.default)(({
        className: e
    }) => {
        let r = (0, E.useGsapContext)(),
            {
                add: n
            } = (0, B.useMasterTimeline)(),
            s = (0, a.useRef)(null),
            o = (0, a.useRef)(null),
            {
                t: l
            } = (0, t.useTranslation)("ring");
        return (0, O.useIsomorphicLayoutEffect)(() => (o.current = new IntersectionObserver(e => {
            e[0].isIntersecting && s.current && window && r.add(() => {
                let e = P.default.timeline({
                    defaults: {
                        duration: .5,
                        ease: "power2.easeInOut"
                    },
                    scrollTrigger: {
                        trigger: s.current,
                        start: "top center ",
                        end: "50px",
                        scrub: .2,
                        immediateRender: !1
                    }
                });
                e.fromTo("h3 > span", {
                    autoAlpha: 0
                }, {
                    autoAlpha: 1,
                    duration: .35,
                    stagger: .05
                }, .2), e.set("h3 > span", {
                    autoAlpha: 1
                }), n(e, "buy-bg-blurred-content1")
            })
        }, {
            root: null,
            threshold: 0
        }), o.current.observe(s.current), () => {
            o.current && o.current.disconnect()
        }), []), (0, i.jsx)("div", {
            ref: s,
            className: e,
            children: (0, i.jsx)("h3", {
                children: l("ring.bgBlurredSection.contentA").split(" ").map((e, t) => (0, i.jsxs)("span", {
                    children: [e, " "]
                }, `detail-text-${t}`))
            })
        })
    }).withConfig({
        displayName: "BgBlurredText__Content1",
        componentId: "sc-22146ce3-0"
    })
    `
  height: 100vh;
  width: 100vw;
  display: grid;
  place-items: center;

  h3 {
    max-width: 85ch;

    @media (max-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
      padding: 0 20px;
    }

    span {
      @media (max-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
        color: #fff;
        text-align: center;
        font-size: 48px;
        font-style: normal;
        font-weight: 500;
        line-height: 110%; /* 52.8px */
        letter-spacing: -1.92px;
      }
    }
  }
`, H = (0, l.default)(({
        className: e
    }) => {
        let {
            t: r
        } = (0, t.useTranslation)("ring"), n = (0, E.useGsapContext)(), {
            add: s
        } = (0, B.useMasterTimeline)(), o = (0, a.useRef)(null), l = (0, a.useRef)(null), {
            width: c
        } = (0, L.useWindowSize)(), d = c < 700, h = [{
            title: (0, i.jsxs)(i.Fragment, {
                children: [r("ring.bgBlurredSection.contentB.a"), " ", d ? null : (0, i.jsx)("br", {}), r("ring.bgBlurredSection.contentB.aa")]
            }),
            description: r("ring.bgBlurredSection.contentB.a_desc")
        }, {
            title: (0, i.jsxs)(i.Fragment, {
                children: [r("ring.bgBlurredSection.contentB.b"), " ", d ? null : (0, i.jsx)("br", {}), r("ring.bgBlurredSection.contentB.bb")]
            }),
            description: r("ring.bgBlurredSection.contentB.b_desc")
        }, {
            title: (0, i.jsxs)(i.Fragment, {
                children: [r("ring.bgBlurredSection.contentB.c"), " ", d ? null : (0, i.jsx)("br", {}), r("ring.bgBlurredSection.contentB.cc")]
            }),
            description: r("ring.bgBlurredSection.contentB.c_desc")
        }];
        return (0, O.useIsomorphicLayoutEffect)(() => (l.current = new IntersectionObserver(e => {
            e[0].isIntersecting && o.current && window && n.add(() => {
                let e = P.default.timeline({
                    defaults: {
                        duration: .5,
                        ease: "power2.easeInOut"
                    },
                    scrollTrigger: {
                        trigger: o.current,
                        start: "top center ",
                        end: "50px",
                        scrub: .2,
                        immediateRender: !1
                    }
                });
                e.fromTo(".config-contents", {
                    autoAlpha: 0
                }, {
                    autoAlpha: 1,
                    duration: .35,
                    stagger: .06
                }, .2), s(e, "buy-bg-blurred-content2")
            })
        }, {
            root: null,
            threshold: 0
        }), l.current.observe(o.current), () => {
            l.current && l.current.disconnect()
        }), []), (0, i.jsx)("div", {
            ref: o,
            className: e,
            children: (0, i.jsx)("div", {
                className: "config-contents",
                children: h.map((e, t) => (0, i.jsxs)("div", {
                    className: "config",
                    children: [(0, i.jsx)("h3", {
                        children: e.title
                    }), (0, i.jsx)("p", {
                        children: e.description
                    })]
                }, `config-${t}`))
            })
        })
    }).withConfig({
        displayName: "BgBlurredText__Content2",
        componentId: "sc-22146ce3-1"
    })
    `
  color: #fff;
  height: 100vh;
  width: 100vw;
  display: grid;
  place-items: center;

  .config-contents {
    max-width: 900px;
    display: flex;
    flex-direction: column;
    gap: 60px;

    @media (min-width: ${({theme:e})=>e.globalV2.xl.maxWidth}) {
      gap: 80px;
    }

    .config {
      display: flex;
      gap: 8px;
      flex-direction: column;
      width: 100%;
      align-items: center;
      padding: 0 20px;

      @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
        flex-direction: row;
        gap: 48px;
        padding: unset;
      }

      p {
        flex: 1;
      }

      h3 {
      }
    }
  }

  h3 {
    color: #fff;
    text-align: center;
    font-size: 36px;
    font-style: normal;
    font-weight: 500;
    line-height: 90%; /* 32.4px */
    letter-spacing: -1.44px;
    text-transform: capitalize;
    width: 100%;

    @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
      width: 9ch;
      font-size: 48px;
      text-align: left;
      line-height: 90%; /* 46.8px */
      letter-spacing: -2.08px;
    }
  }

  p {
    color: #fff;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 120%; /* 19.2px */
    letter-spacing: -0.64px;
    width: 91%;
    @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
      text-align: left;
      max-width: 29ch;
      font-size: 20px;
      line-height: 120%; /* 24px */
      letter-spacing: -0.8px;
    }
  }

  @media (min-width: ${({theme:e})=>e.global.phone.maxWidth}) {
    gap: 150px;
    .config {
      flex-direction: row;
    }
  }
`, q = (0, l.default)(({
        className: e,
        htmlId: t
    }) => (0, i.jsxs)("div", {
        className: e,
        id: t,
        children: [(0, i.jsx)(v.CustomImage, {
            src: "web_v2/backgrounds/ultrahumanSleepRecovert.png/w_1920",
            alt: "",
            fill: !0,
            className: "img-container"
        }), (0, i.jsx)("div", {
            className: "backdrop"
        }), (0, i.jsx)("div", {
            className: "content content-1",
            children: (0, i.jsx)(G, {})
        }), (0, i.jsx)("div", {
            className: "content content-2",
            children: (0, i.jsx)(H, {})
        })]
    })).withConfig({
        displayName: "BgBlurredText",
        componentId: "sc-22146ce3-2"
    })
    `
  height: 200vh;
  position: relative;

  text-align: center;

  & .content {
    position: absolute;
    display: grid;
    place-items: center;
  }

  .content-1 {
    z-index: 4;
    top: 12vh;
  }

  .content-2 {
    z-index: 4;
    bottom: 0;
  }

  span {
    color: #fff;
    text-align: center;
    font-size: 68px;
    font-style: normal;
    font-weight: 500;
    line-height: 110%; /* 74.8px */
    letter-spacing: -2.72px;
  }
  .img-container {
    position: sticky !important;
    top: 0 !important;
    left: 0 !important;
    right: 0 !important;
    height: 100vh !important;
    width: 100vw !important;
    object-fit: cover;
    object-position: top;
    z-index: 2;
  }

  .backdrop {
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    right: 0 !important;
    z-index: 3;
    height: 100%;
    background: linear-gradient(
      46deg,
      #000 -11.46%,
      rgba(0, 0, 0, 0.53) 50.47%,
      rgba(0, 0, 0, 0) 107.66%
    );
  }
`;
    var Y = e.i(94197),
        K = e.i(52935),
        J = e.i(74249),
        Q = e.i(48095);
    let X = (0, i.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "41",
            height: "40",
            viewBox: "0 0 41 40",
            fill: "none",
            children: [(0, i.jsxs)("g", {
                filter: "url(#filter0_b_2183_8910)",
                children: [(0, i.jsx)("circle", {
                    cx: "20.5547",
                    cy: "20",
                    r: "20",
                    fill: "white",
                    fillOpacity: "0.6"
                }), (0, i.jsx)("circle", {
                    cx: "20.5547",
                    cy: "20",
                    r: "19.5",
                    stroke: "url(#paint0_linear_2183_8910)",
                    strokeOpacity: "0.3"
                })]
            }), (0, i.jsx)("path", {
                d: "M21.86 18.3362H28.8681V20.8365H21.86V28.0911H19.3245V20.8365H12.3164V18.3362H19.3245V11.0464H21.86V18.3362Z",
                fill: "black"
            }), (0, i.jsxs)("defs", {
                children: [(0, i.jsxs)("filter", {
                    id: "filter0_b_2183_8910",
                    x: "-3.44531",
                    y: "-4",
                    width: "48",
                    height: "48",
                    filterUnits: "userSpaceOnUse",
                    "color-interpolation-filters": "sRGB",
                    children: [(0, i.jsx)("feFlood", {
                        "flood-opacity": "0",
                        result: "BackgroundImageFix"
                    }), (0, i.jsx)("feGaussianBlur", { in: "BackgroundImageFix",
                        stdDeviation: "2"
                    }), (0, i.jsx)("feComposite", {
                        in2: "SourceAlpha",
                        operator: "in",
                        result: "effect1_backgroundBlur_2183_8910"
                    }), (0, i.jsx)("feBlend", {
                        mode: "normal",
                        in: "SourceGraphic",
                        in2: "effect1_backgroundBlur_2183_8910",
                        result: "shape"
                    })]
                }), (0, i.jsxs)("linearGradient", {
                    id: "paint0_linear_2183_8910",
                    x1: "39.5547",
                    y1: "-2.84836e-06",
                    x2: "9.05469",
                    y2: "35.5",
                    gradientUnits: "userSpaceOnUse",
                    children: [(0, i.jsx)("stop", {
                        "stop-color": "white"
                    }), (0, i.jsx)("stop", {
                        offset: "1",
                        "stop-color": "white",
                        "stop-opacity": "0"
                    })]
                })]
            })]
        }),
        Z = (0, i.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "41",
            height: "41",
            viewBox: "0 0 41 41",
            fill: "none",
            children: [(0, i.jsxs)("g", {
                filter: "url(#filter0_b_1611_27246)",
                children: [(0, i.jsx)("circle", {
                    cx: "20.0781",
                    cy: "20.502",
                    r: "20",
                    fill: "#EEEEEE"
                }), (0, i.jsx)("circle", {
                    cx: "20.0781",
                    cy: "20.502",
                    r: "19.5",
                    stroke: "url(#paint0_linear_1611_27246)",
                    strokeOpacity: "0.3"
                })]
            }), (0, i.jsx)("path", {
                d: "M21.3835 18.8381H28.3915V21.3385H21.3835V28.5931H18.8479V21.3385H11.8398V18.8381H18.8479V11.5483H21.3835V18.8381Z",
                fill: "black"
            }), (0, i.jsxs)("defs", {
                children: [(0, i.jsxs)("filter", {
                    id: "filter0_b_1611_27246",
                    x: "-3.92188",
                    y: "-3.49805",
                    width: "48",
                    height: "48",
                    filterUnits: "userSpaceOnUse",
                    "color-interpolation-filters": "sRGB",
                    children: [(0, i.jsx)("feFlood", {
                        "flood-opacity": "0",
                        result: "BackgroundImageFix"
                    }), (0, i.jsx)("feGaussianBlur", { in: "BackgroundImageFix",
                        stdDeviation: "2"
                    }), (0, i.jsx)("feComposite", {
                        in2: "SourceAlpha",
                        operator: "in",
                        result: "effect1_backgroundBlur_1611_27246"
                    }), (0, i.jsx)("feBlend", {
                        mode: "normal",
                        in: "SourceGraphic",
                        in2: "effect1_backgroundBlur_1611_27246",
                        result: "shape"
                    })]
                }), (0, i.jsxs)("linearGradient", {
                    id: "paint0_linear_1611_27246",
                    x1: "39.0781",
                    y1: "0.50195",
                    x2: "8.57812",
                    y2: "36.002",
                    gradientUnits: "userSpaceOnUse",
                    children: [(0, i.jsx)("stop", {
                        "stop-color": "white"
                    }), (0, i.jsx)("stop", {
                        offset: "1",
                        "stop-color": "white",
                        "stop-opacity": "0"
                    })]
                })]
            })]
        }),
        ee = (0, i.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "41",
            height: "41",
            viewBox: "0 0 41 41",
            fill: "none",
            children: [(0, i.jsxs)("g", {
                filter: "url(#filter0_b_1611_27246)",
                children: [(0, i.jsx)("circle", {
                    cx: "20.0781",
                    cy: "20.502",
                    r: "20",
                    fill: "#fff",
                    fillOpacity: "0.6"
                }), (0, i.jsx)("circle", {
                    cx: "20.0781",
                    cy: "20.502",
                    r: "19.5",
                    stroke: "url(#paint0_linear_1611_27246)",
                    strokeOpacity: "0.3"
                })]
            }), (0, i.jsx)("path", {
                d: "M21.3835 18.8381H28.3915V21.3385H21.3835V28.5931H18.8479V21.3385H11.8398V18.8381H18.8479V11.5483H21.3835V18.8381Z",
                fill: "black"
            }), (0, i.jsxs)("defs", {
                children: [(0, i.jsxs)("filter", {
                    id: "filter0_b_1611_27246",
                    x: "-3.92188",
                    y: "-3.49805",
                    width: "48",
                    height: "48",
                    filterUnits: "userSpaceOnUse",
                    "color-interpolation-filters": "sRGB",
                    children: [(0, i.jsx)("feFlood", {
                        "flood-opacity": "0",
                        result: "BackgroundImageFix"
                    }), (0, i.jsx)("feGaussianBlur", { in: "BackgroundImageFix",
                        stdDeviation: "2"
                    }), (0, i.jsx)("feComposite", {
                        in2: "SourceAlpha",
                        operator: "in",
                        result: "effect1_backgroundBlur_1611_27246"
                    }), (0, i.jsx)("feBlend", {
                        mode: "normal",
                        in: "SourceGraphic",
                        in2: "effect1_backgroundBlur_1611_27246",
                        result: "shape"
                    })]
                }), (0, i.jsxs)("linearGradient", {
                    id: "paint0_linear_1611_27246",
                    x1: "39.0781",
                    y1: "0.50195",
                    x2: "8.57812",
                    y2: "36.002",
                    gradientUnits: "userSpaceOnUse",
                    children: [(0, i.jsx)("stop", {
                        "stop-color": "white"
                    }), (0, i.jsx)("stop", {
                        offset: "1",
                        "stop-color": "white",
                        "stop-opacity": "0"
                    })]
                })]
            })]
        }),
        ei = (0, i.jsxs)("svg", {
            width: "752",
            height: "219",
            viewBox: "0 0 752 219",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, i.jsx)("rect", {
                x: "0.5",
                y: "0.974365",
                width: "18.4295",
                height: "35.8901",
                fill: "white"
            }), (0, i.jsx)("rect", {
                x: "23.5352",
                y: "0.974365",
                width: "10.7505",
                height: "35.8901",
                fill: "white"
            }), (0, i.jsx)("rect", {
                x: "41.9609",
                y: "0.974365",
                width: "12.2863",
                height: "35.8901",
                fill: "white"
            }), (0, i.jsx)("rect", {
                x: "17.3945",
                y: "121.694",
                width: "7.67896",
                height: "35.8901",
                fill: "#A34DCC"
            }), (0, i.jsx)("rect", {
                x: "52.7148",
                y: "121.694",
                width: "6.14317",
                height: "35.8901",
                fill: "#A34DCC"
            }), (0, i.jsx)("rect", {
                x: "57.3242",
                y: "182.599",
                width: "7.67896",
                height: "35.8901",
                fill: "#4D269B"
            }), (0, i.jsx)("rect", {
                x: "72.6836",
                y: "182.599",
                width: "19.9653",
                height: "35.8901",
                fill: "#4D269B"
            }), (0, i.jsx)("rect", {
                x: "32.7578",
                y: "121.694",
                width: "10.7505",
                height: "35.8901",
                fill: "#A34DCC"
            }), (0, i.jsx)("rect", {
                x: "63.4688",
                y: "121.694",
                width: "10.7505",
                height: "35.8901",
                fill: "#A34DCC"
            }), (0, i.jsx)("rect", {
                x: "91.1094",
                y: "121.694",
                width: "148.97",
                height: "35.8898",
                fill: "#A34DCC"
            }), (0, i.jsx)("rect", {
                x: "249.293",
                y: "121.694",
                width: "93.6833",
                height: "35.8901",
                fill: "#A34DCC"
            }), (0, i.jsx)("rect", {
                width: "43.0022",
                height: "35.8901",
                transform: "matrix(-1 0 0 1 392.176 121.65)",
                fill: "#A34DCC"
            }), (0, i.jsx)("rect", {
                x: "400.141",
                y: "121.65",
                width: "42.9145",
                height: "35.756",
                fill: "#A34DCC"
            }), (0, i.jsx)("rect", {
                x: "453.559",
                y: "121.694",
                width: "61.4317",
                height: "35.8901",
                fill: "#A34DCC"
            }), (0, i.jsx)("rect", {
                x: "539.555",
                y: "121.694",
                width: "18.4295",
                height: "35.8901",
                fill: "#A34DCC"
            }), (0, i.jsx)("rect", {
                x: "568.738",
                y: "121.694",
                width: "13.8221",
                height: "35.8901",
                fill: "#A34DCC"
            }), (0, i.jsx)("rect", {
                x: "633.234",
                y: "121.694",
                width: "10.7505",
                height: "35.8901",
                fill: "#A34DCC"
            }), (0, i.jsx)("rect", {
                x: "665.492",
                y: "121.694",
                width: "9.21475",
                height: "35.8901",
                fill: "#A34DCC"
            }), (0, i.jsx)("rect", {
                x: "673.164",
                y: "61.8787",
                width: "12.2863",
                height: "35.8901",
                fill: "#F973FE"
            }), (0, i.jsx)("rect", {
                x: "683.926",
                y: "0.974365",
                width: "67.5748",
                height: "35.8901",
                fill: "white"
            }), (0, i.jsx)("rect", {
                x: "642.453",
                y: "0.974365",
                width: "24.5727",
                height: "35.8901",
                fill: "white"
            }), (0, i.jsx)("rect", {
                x: "613.277",
                y: "0.974365",
                width: "21.5011",
                height: "35.8901",
                fill: "white"
            }), (0, i.jsx)("rect", {
                x: "390.746",
                y: "0.974365",
                width: "10.7286",
                height: "35.756",
                fill: "white"
            }), (0, i.jsx)("rect", {
                x: "581.027",
                y: "61.8787",
                width: "33.7874",
                height: "35.8901",
                fill: "#F973FE"
            }), (0, i.jsx)("rect", {
                x: "513.453",
                y: "61.8787",
                width: "27.6443",
                height: "35.8901",
                fill: "#F973FE"
            }), (0, i.jsx)("rect", {
                x: "556.457",
                y: "61.8787",
                width: "13.8221",
                height: "35.8901",
                fill: "#F973FE"
            }), (0, i.jsx)("rect", {
                x: "441.273",
                y: "61.8787",
                width: "13.8221",
                height: "35.8901",
                fill: "#F973FE"
            }), (0, i.jsx)("rect", {
                x: "341.438",
                y: "61.8787",
                width: "9.21475",
                height: "35.8901",
                fill: "#F973FE"
            }), (0, i.jsx)("rect", {
                x: "238.551",
                y: "61.8787",
                width: "12.2863",
                height: "35.8901",
                fill: "#F973FE"
            }), (0, i.jsx)("rect", {
                x: "17.3945",
                y: "36.8657",
                width: "1.53579",
                height: "84.8312",
                fill: "url(#paint0_linear_1581_24757)"
            }), (0, i.jsx)("rect", {
                x: "23.5352",
                y: "36.8655",
                width: "1.53579",
                height: "84.8312",
                fill: "url(#paint1_linear_1581_24757)"
            }), (0, i.jsx)("rect", {
                x: "32.7578",
                y: "36.8657",
                width: "1.53579",
                height: "84.8312",
                fill: "url(#paint2_linear_1581_24757)"
            }), (0, i.jsx)("rect", {
                x: "41.9609",
                y: "36.8657",
                width: "1.53579",
                height: "84.8312",
                fill: "url(#paint3_linear_1581_24757)"
            }), (0, i.jsx)("rect", {
                x: "52.7148",
                y: "36.8657",
                width: "1.53579",
                height: "84.8312",
                fill: "url(#paint4_linear_1581_24757)"
            }), (0, i.jsx)("rect", {
                x: "57.3242",
                y: "157.585",
                width: "1.53579",
                height: "25.0143",
                fill: "url(#paint5_linear_1581_24757)"
            }), (0, i.jsx)("rect", {
                x: "63.4688",
                y: "157.585",
                width: "1.53579",
                height: "25.0143",
                fill: "url(#paint6_linear_1581_24757)"
            }), (0, i.jsx)("rect", {
                x: "72.6836",
                y: "157.585",
                width: "1.53579",
                height: "25.0143",
                fill: "url(#paint7_linear_1581_24757)"
            }), (0, i.jsx)("rect", {
                x: "91.1094",
                y: "157.585",
                width: "1.53579",
                height: "25.0143",
                fill: "url(#paint8_linear_1581_24757)"
            }), (0, i.jsx)("rect", {
                x: "238.551",
                y: "97.7676",
                width: "1.53579",
                height: "23.9267",
                fill: "url(#paint9_linear_1581_24757)"
            }), (0, i.jsx)("rect", {
                x: "249.293",
                y: "97.7676",
                width: "1.53579",
                height: "23.9267",
                fill: "url(#paint10_linear_1581_24757)"
            }), (0, i.jsx)("rect", {
                x: "341.438",
                y: "97.7676",
                width: "1.53579",
                height: "23.9267",
                fill: "url(#paint11_linear_1581_24757)"
            }), (0, i.jsx)("rect", {
                x: "349.113",
                y: "97.7676",
                width: "1.53579",
                height: "23.9267",
                fill: "url(#paint12_linear_1581_24757)"
            }), (0, i.jsx)("rect", {
                x: "390.746",
                y: "36.7295",
                width: "1.34108",
                height: "84.9205",
                fill: "url(#paint13_linear_1581_24757)"
            }), (0, i.jsx)("rect", {
                x: "400.141",
                y: "36.7295",
                width: "1.34108",
                height: "84.9205",
                fill: "url(#paint14_linear_1581_24757)"
            }), (0, i.jsx)("rect", {
                x: "441.273",
                y: "97.7676",
                width: "1.53579",
                height: "23.9267",
                fill: "url(#paint15_linear_1581_24757)"
            }), (0, i.jsx)("rect", {
                x: "453.559",
                y: "97.7676",
                width: "1.53579",
                height: "23.9267",
                fill: "url(#paint16_linear_1581_24757)"
            }), (0, i.jsx)("rect", {
                x: "513.453",
                y: "97.7676",
                width: "1.53579",
                height: "23.9267",
                fill: "url(#paint17_linear_1581_24757)"
            }), (0, i.jsx)("rect", {
                x: "539.555",
                y: "97.7676",
                width: "1.53579",
                height: "23.9267",
                fill: "url(#paint18_linear_1581_24757)"
            }), (0, i.jsx)("rect", {
                x: "556.457",
                y: "97.7676",
                width: "1.53579",
                height: "23.9267",
                fill: "url(#paint19_linear_1581_24757)"
            }), (0, i.jsx)("rect", {
                x: "568.738",
                y: "97.7676",
                width: "1.53579",
                height: "23.9267",
                fill: "url(#paint20_linear_1581_24757)"
            }), (0, i.jsx)("rect", {
                x: "581.027",
                y: "97.7676",
                width: "1.53579",
                height: "23.9267",
                fill: "url(#paint21_linear_1581_24757)"
            }), (0, i.jsx)("rect", {
                x: "613.277",
                y: "36.8655",
                width: "1.53579",
                height: "25.0143",
                fill: "url(#paint22_linear_1581_24757)"
            }), (0, i.jsx)("rect", {
                x: "683.926",
                y: "36.8657",
                width: "1.53579",
                height: "25.0143",
                fill: "url(#paint23_linear_1581_24757)"
            }), (0, i.jsx)("rect", {
                x: "633.234",
                y: "36.8657",
                width: "1.53579",
                height: "84.8312",
                fill: "url(#paint24_linear_1581_24757)"
            }), (0, i.jsx)("rect", {
                x: "642.453",
                y: "36.8657",
                width: "1.53579",
                height: "84.8312",
                fill: "url(#paint25_linear_1581_24757)"
            }), (0, i.jsx)("rect", {
                x: "665.492",
                y: "36.8657",
                width: "1.53579",
                height: "84.8312",
                fill: "url(#paint26_linear_1581_24757)"
            }), (0, i.jsx)("rect", {
                x: "673.164",
                y: "97.7676",
                width: "1.53579",
                height: "23.9267",
                fill: "url(#paint27_linear_1581_24757)"
            }), (0, i.jsxs)("defs", {
                children: [(0, i.jsxs)("linearGradient", {
                    id: "paint0_linear_1581_24757",
                    x1: "18.1624",
                    y1: "36.8657",
                    x2: "18.1624",
                    y2: "121.697",
                    gradientUnits: "userSpaceOnUse",
                    children: [(0, i.jsx)("stop", {
                        "stop-color": "white"
                    }), (0, i.jsx)("stop", {
                        offset: "1",
                        "stop-color": "#A34DCC"
                    })]
                }), (0, i.jsxs)("linearGradient", {
                    id: "paint1_linear_1581_24757",
                    x1: "24.3031",
                    y1: "36.8655",
                    x2: "24.3031",
                    y2: "121.697",
                    gradientUnits: "userSpaceOnUse",
                    children: [(0, i.jsx)("stop", {
                        "stop-color": "white"
                    }), (0, i.jsx)("stop", {
                        offset: "1",
                        "stop-color": "#A34DCC"
                    })]
                }), (0, i.jsxs)("linearGradient", {
                    id: "paint2_linear_1581_24757",
                    x1: "33.5257",
                    y1: "36.8657",
                    x2: "33.5257",
                    y2: "121.697",
                    gradientUnits: "userSpaceOnUse",
                    children: [(0, i.jsx)("stop", {
                        "stop-color": "white"
                    }), (0, i.jsx)("stop", {
                        offset: "1",
                        "stop-color": "#A34DCC"
                    })]
                }), (0, i.jsxs)("linearGradient", {
                    id: "paint3_linear_1581_24757",
                    x1: "42.7288",
                    y1: "36.8657",
                    x2: "42.7288",
                    y2: "121.697",
                    gradientUnits: "userSpaceOnUse",
                    children: [(0, i.jsx)("stop", {
                        "stop-color": "white"
                    }), (0, i.jsx)("stop", {
                        offset: "1",
                        "stop-color": "#A34DCC"
                    })]
                }), (0, i.jsxs)("linearGradient", {
                    id: "paint4_linear_1581_24757",
                    x1: "53.4827",
                    y1: "36.8657",
                    x2: "53.4827",
                    y2: "121.697",
                    gradientUnits: "userSpaceOnUse",
                    children: [(0, i.jsx)("stop", {
                        "stop-color": "white"
                    }), (0, i.jsx)("stop", {
                        offset: "1",
                        "stop-color": "#A34DCC"
                    })]
                }), (0, i.jsxs)("linearGradient", {
                    id: "paint5_linear_1581_24757",
                    x1: "58.0921",
                    y1: "157.585",
                    x2: "58.0921",
                    y2: "182.6",
                    gradientUnits: "userSpaceOnUse",
                    children: [(0, i.jsx)("stop", {
                        "stop-color": "#A34DCC"
                    }), (0, i.jsx)("stop", {
                        offset: "1",
                        "stop-color": "#4D269B"
                    })]
                }), (0, i.jsxs)("linearGradient", {
                    id: "paint6_linear_1581_24757",
                    x1: "64.2366",
                    y1: "157.585",
                    x2: "64.2366",
                    y2: "182.6",
                    gradientUnits: "userSpaceOnUse",
                    children: [(0, i.jsx)("stop", {
                        "stop-color": "#A34DCC"
                    }), (0, i.jsx)("stop", {
                        offset: "1",
                        "stop-color": "#4D269B"
                    })]
                }), (0, i.jsxs)("linearGradient", {
                    id: "paint7_linear_1581_24757",
                    x1: "73.4515",
                    y1: "157.585",
                    x2: "73.4515",
                    y2: "182.6",
                    gradientUnits: "userSpaceOnUse",
                    children: [(0, i.jsx)("stop", {
                        "stop-color": "#A34DCC"
                    }), (0, i.jsx)("stop", {
                        offset: "1",
                        "stop-color": "#4D269B"
                    })]
                }), (0, i.jsxs)("linearGradient", {
                    id: "paint8_linear_1581_24757",
                    x1: "91.8773",
                    y1: "157.585",
                    x2: "91.8773",
                    y2: "182.6",
                    gradientUnits: "userSpaceOnUse",
                    children: [(0, i.jsx)("stop", {
                        "stop-color": "#A34DCC"
                    }), (0, i.jsx)("stop", {
                        offset: "1",
                        "stop-color": "#4D269B"
                    })]
                }), (0, i.jsxs)("linearGradient", {
                    id: "paint9_linear_1581_24757",
                    x1: "239.319",
                    y1: "97.7676",
                    x2: "239.319",
                    y2: "121.694",
                    gradientUnits: "userSpaceOnUse",
                    children: [(0, i.jsx)("stop", {
                        "stop-color": "#F973FE"
                    }), (0, i.jsx)("stop", {
                        offset: "1",
                        "stop-color": "#A34DCC"
                    })]
                }), (0, i.jsxs)("linearGradient", {
                    id: "paint10_linear_1581_24757",
                    x1: "250.061",
                    y1: "97.7676",
                    x2: "250.061",
                    y2: "121.694",
                    gradientUnits: "userSpaceOnUse",
                    children: [(0, i.jsx)("stop", {
                        "stop-color": "#F973FE"
                    }), (0, i.jsx)("stop", {
                        offset: "1",
                        "stop-color": "#A34DCC"
                    })]
                }), (0, i.jsxs)("linearGradient", {
                    id: "paint11_linear_1581_24757",
                    x1: "342.205",
                    y1: "97.7676",
                    x2: "342.205",
                    y2: "121.694",
                    gradientUnits: "userSpaceOnUse",
                    children: [(0, i.jsx)("stop", {
                        "stop-color": "#F973FE"
                    }), (0, i.jsx)("stop", {
                        offset: "1",
                        "stop-color": "#A34DCC"
                    })]
                }), (0, i.jsxs)("linearGradient", {
                    id: "paint12_linear_1581_24757",
                    x1: "349.881",
                    y1: "97.7676",
                    x2: "349.881",
                    y2: "121.694",
                    gradientUnits: "userSpaceOnUse",
                    children: [(0, i.jsx)("stop", {
                        "stop-color": "#F973FE"
                    }), (0, i.jsx)("stop", {
                        offset: "1",
                        "stop-color": "#A34DCC"
                    })]
                }), (0, i.jsxs)("linearGradient", {
                    id: "paint13_linear_1581_24757",
                    x1: "391.417",
                    y1: "36.7295",
                    x2: "391.417",
                    y2: "121.65",
                    gradientUnits: "userSpaceOnUse",
                    children: [(0, i.jsx)("stop", {
                        "stop-color": "white"
                    }), (0, i.jsx)("stop", {
                        offset: "1",
                        "stop-color": "#A34DCC"
                    })]
                }), (0, i.jsxs)("linearGradient", {
                    id: "paint14_linear_1581_24757",
                    x1: "400.811",
                    y1: "36.7295",
                    x2: "400.811",
                    y2: "121.65",
                    gradientUnits: "userSpaceOnUse",
                    children: [(0, i.jsx)("stop", {
                        "stop-color": "white"
                    }), (0, i.jsx)("stop", {
                        offset: "1",
                        "stop-color": "#A34DCC"
                    })]
                }), (0, i.jsxs)("linearGradient", {
                    id: "paint15_linear_1581_24757",
                    x1: "442.041",
                    y1: "97.7676",
                    x2: "442.041",
                    y2: "121.694",
                    gradientUnits: "userSpaceOnUse",
                    children: [(0, i.jsx)("stop", {
                        "stop-color": "#F973FE"
                    }), (0, i.jsx)("stop", {
                        offset: "1",
                        "stop-color": "#A34DCC"
                    })]
                }), (0, i.jsxs)("linearGradient", {
                    id: "paint16_linear_1581_24757",
                    x1: "454.326",
                    y1: "97.7676",
                    x2: "454.326",
                    y2: "121.694",
                    gradientUnits: "userSpaceOnUse",
                    children: [(0, i.jsx)("stop", {
                        "stop-color": "#F973FE"
                    }), (0, i.jsx)("stop", {
                        offset: "1",
                        "stop-color": "#A34DCC"
                    })]
                }), (0, i.jsxs)("linearGradient", {
                    id: "paint17_linear_1581_24757",
                    x1: "514.221",
                    y1: "97.7676",
                    x2: "514.221",
                    y2: "121.694",
                    gradientUnits: "userSpaceOnUse",
                    children: [(0, i.jsx)("stop", {
                        "stop-color": "#F973FE"
                    }), (0, i.jsx)("stop", {
                        offset: "1",
                        "stop-color": "#A34DCC"
                    })]
                }), (0, i.jsxs)("linearGradient", {
                    id: "paint18_linear_1581_24757",
                    x1: "540.323",
                    y1: "97.7676",
                    x2: "540.323",
                    y2: "121.694",
                    gradientUnits: "userSpaceOnUse",
                    children: [(0, i.jsx)("stop", {
                        "stop-color": "#F973FE"
                    }), (0, i.jsx)("stop", {
                        offset: "1",
                        "stop-color": "#A34DCC"
                    })]
                }), (0, i.jsxs)("linearGradient", {
                    id: "paint19_linear_1581_24757",
                    x1: "557.225",
                    y1: "97.7676",
                    x2: "557.225",
                    y2: "121.694",
                    gradientUnits: "userSpaceOnUse",
                    children: [(0, i.jsx)("stop", {
                        "stop-color": "#F973FE"
                    }), (0, i.jsx)("stop", {
                        offset: "1",
                        "stop-color": "#A34DCC"
                    })]
                }), (0, i.jsxs)("linearGradient", {
                    id: "paint20_linear_1581_24757",
                    x1: "569.506",
                    y1: "97.7676",
                    x2: "569.506",
                    y2: "121.694",
                    gradientUnits: "userSpaceOnUse",
                    children: [(0, i.jsx)("stop", {
                        "stop-color": "#F973FE"
                    }), (0, i.jsx)("stop", {
                        offset: "1",
                        "stop-color": "#A34DCC"
                    })]
                }), (0, i.jsxs)("linearGradient", {
                    id: "paint21_linear_1581_24757",
                    x1: "581.795",
                    y1: "97.7676",
                    x2: "581.795",
                    y2: "121.694",
                    gradientUnits: "userSpaceOnUse",
                    children: [(0, i.jsx)("stop", {
                        "stop-color": "#F973FE"
                    }), (0, i.jsx)("stop", {
                        offset: "1",
                        "stop-color": "#A34DCC"
                    })]
                }), (0, i.jsxs)("linearGradient", {
                    id: "paint22_linear_1581_24757",
                    x1: "614.045",
                    y1: "36.8655",
                    x2: "614.045",
                    y2: "61.8798",
                    gradientUnits: "userSpaceOnUse",
                    children: [(0, i.jsx)("stop", {
                        "stop-color": "white"
                    }), (0, i.jsx)("stop", {
                        offset: "1",
                        "stop-color": "#F973FE"
                    })]
                }), (0, i.jsxs)("linearGradient", {
                    id: "paint23_linear_1581_24757",
                    x1: "684.694",
                    y1: "36.8657",
                    x2: "684.694",
                    y2: "61.88",
                    gradientUnits: "userSpaceOnUse",
                    children: [(0, i.jsx)("stop", {
                        "stop-color": "white"
                    }), (0, i.jsx)("stop", {
                        offset: "1",
                        "stop-color": "#F973FE"
                    })]
                }), (0, i.jsxs)("linearGradient", {
                    id: "paint24_linear_1581_24757",
                    x1: "634.002",
                    y1: "36.8657",
                    x2: "634.002",
                    y2: "121.697",
                    gradientUnits: "userSpaceOnUse",
                    children: [(0, i.jsx)("stop", {
                        "stop-color": "white"
                    }), (0, i.jsx)("stop", {
                        offset: "1",
                        "stop-color": "#A34DCC"
                    })]
                }), (0, i.jsxs)("linearGradient", {
                    id: "paint25_linear_1581_24757",
                    x1: "643.221",
                    y1: "36.8657",
                    x2: "643.221",
                    y2: "121.697",
                    gradientUnits: "userSpaceOnUse",
                    children: [(0, i.jsx)("stop", {
                        "stop-color": "white"
                    }), (0, i.jsx)("stop", {
                        offset: "1",
                        "stop-color": "#A34DCC"
                    })]
                }), (0, i.jsxs)("linearGradient", {
                    id: "paint26_linear_1581_24757",
                    x1: "666.26",
                    y1: "36.8657",
                    x2: "666.26",
                    y2: "121.697",
                    gradientUnits: "userSpaceOnUse",
                    children: [(0, i.jsx)("stop", {
                        "stop-color": "white"
                    }), (0, i.jsx)("stop", {
                        offset: "1",
                        "stop-color": "#A34DCC"
                    })]
                }), (0, i.jsxs)("linearGradient", {
                    id: "paint27_linear_1581_24757",
                    x1: "673.932",
                    y1: "97.7676",
                    x2: "673.932",
                    y2: "121.694",
                    gradientUnits: "userSpaceOnUse",
                    children: [(0, i.jsx)("stop", {
                        "stop-color": "#F973FE"
                    }), (0, i.jsx)("stop", {
                        offset: "1",
                        "stop-color": "#A34DCC"
                    })]
                })]
            })]
        }),
        et = (0, i.jsxs)("svg", {
            width: "279",
            height: "182",
            viewBox: "0 0 279 182",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, i.jsx)("rect", {
                x: "-0.25",
                y: "0.818848",
                width: "6.84664",
                height: "29.7378",
                fill: "white"
            }), (0, i.jsx)("rect", {
                x: "8.30859",
                y: "0.818848",
                width: "3.99388",
                height: "29.7378",
                fill: "white"
            }), (0, i.jsx)("rect", {
                x: "15.1523",
                y: "0.818848",
                width: "4.56443",
                height: "29.7378",
                fill: "white"
            }), (0, i.jsx)("rect", {
                x: "6.02734",
                y: "100.845",
                width: "2.85277",
                height: "29.7378",
                fill: "#A34DCC"
            }), (0, i.jsx)("rect", {
                x: "19.1484",
                y: "100.845",
                width: "2.28221",
                height: "29.7378",
                fill: "#A34DCC"
            }), (0, i.jsx)("rect", {
                x: "20.8594",
                y: "151.309",
                width: "2.85277",
                height: "29.7378",
                fill: "#4D269B"
            }), (0, i.jsx)("rect", {
                x: "26.5664",
                y: "151.309",
                width: "7.4172",
                height: "29.7378",
                fill: "#4D269B"
            }), (0, i.jsx)("rect", {
                x: "11.7344",
                y: "100.845",
                width: "3.99388",
                height: "29.7378",
                fill: "#A34DCC"
            }), (0, i.jsx)("rect", {
                x: "23.1445",
                y: "100.845",
                width: "3.99388",
                height: "29.7378",
                fill: "#A34DCC"
            }), (0, i.jsx)("rect", {
                x: "33.4102",
                y: "100.844",
                width: "55.3432",
                height: "29.7375",
                fill: "#A34DCC"
            }), (0, i.jsx)("rect", {
                x: "92.1797",
                y: "100.845",
                width: "34.8038",
                height: "29.7378",
                fill: "#A34DCC"
            }), (0, i.jsx)("rect", {
                width: "15.9755",
                height: "29.7378",
                transform: "matrix(-1 0 0 1 145.258 100.808)",
                fill: "#A34DCC"
            }), (0, i.jsx)("rect", {
                x: "148.219",
                y: "100.808",
                width: "15.9429",
                height: "29.6267",
                fill: "#A34DCC"
            }), (0, i.jsx)("rect", {
                x: "168.062",
                y: "100.844",
                width: "22.8222",
                height: "29.7378",
                fill: "#A34DCC"
            }), (0, i.jsx)("rect", {
                x: "200.012",
                y: "100.845",
                width: "6.84664",
                height: "29.7378",
                fill: "#A34DCC"
            }), (0, i.jsx)("rect", {
                x: "210.852",
                y: "100.845",
                width: "5.13498",
                height: "29.7378",
                fill: "#A34DCC"
            }), (0, i.jsx)("rect", {
                x: "234.812",
                y: "100.845",
                width: "3.99388",
                height: "29.7378",
                fill: "#A34DCC"
            }), (0, i.jsx)("rect", {
                x: "246.797",
                y: "100.845",
                width: "3.42332",
                height: "29.7378",
                fill: "#A34DCC"
            }), (0, i.jsx)("rect", {
                x: "249.648",
                y: "51.2827",
                width: "4.56443",
                height: "29.7378",
                fill: "#F973FE"
            }), (0, i.jsx)("rect", {
                x: "253.645",
                y: "0.818848",
                width: "25.1044",
                height: "29.7378",
                fill: "white"
            }), (0, i.jsx)("rect", {
                x: "238.238",
                y: "0.818848",
                width: "9.12886",
                height: "29.7378",
                fill: "white"
            }), (0, i.jsx)("rect", {
                x: "227.398",
                y: "0.818848",
                width: "7.98775",
                height: "29.7378",
                fill: "white"
            }), (0, i.jsx)("rect", {
                x: "144.727",
                y: "0.818848",
                width: "3.98573",
                height: "29.6267",
                fill: "white"
            }), (0, i.jsx)("rect", {
                x: "215.418",
                y: "51.2827",
                width: "12.5522",
                height: "29.7378",
                fill: "#F973FE"
            }), (0, i.jsx)("rect", {
                x: "190.316",
                y: "51.2827",
                width: "10.27",
                height: "29.7378",
                fill: "#F973FE"
            }), (0, i.jsx)("rect", {
                x: "206.289",
                y: "51.2827",
                width: "5.13498",
                height: "29.7378",
                fill: "#F973FE"
            }), (0, i.jsx)("rect", {
                x: "163.5",
                y: "51.2827",
                width: "5.13498",
                height: "29.7378",
                fill: "#F973FE"
            }), (0, i.jsx)("rect", {
                x: "126.41",
                y: "51.2827",
                width: "3.42332",
                height: "29.7378",
                fill: "#F973FE"
            }), (0, i.jsx)("rect", {
                x: "88.1875",
                y: "51.2827",
                width: "4.56443",
                height: "29.7378",
                fill: "#F973FE"
            }), (0, i.jsx)("rect", {
                x: "6.02734",
                y: "30.5581",
                width: "0.570554",
                height: "70.2893",
                fill: "url(#paint0_linear_1581_25439)"
            }), (0, i.jsx)("rect", {
                x: "8.30859",
                y: "30.5566",
                width: "0.570554",
                height: "70.2893",
                fill: "url(#paint1_linear_1581_25439)"
            }), (0, i.jsx)("rect", {
                x: "11.7344",
                y: "30.5581",
                width: "0.570554",
                height: "70.2893",
                fill: "url(#paint2_linear_1581_25439)"
            }), (0, i.jsx)("rect", {
                x: "15.1523",
                y: "30.5581",
                width: "0.570554",
                height: "70.2893",
                fill: "url(#paint3_linear_1581_25439)"
            }), (0, i.jsx)("rect", {
                x: "19.1484",
                y: "30.5581",
                width: "0.570554",
                height: "70.2893",
                fill: "url(#paint4_linear_1581_25439)"
            }), (0, i.jsx)("rect", {
                x: "20.8594",
                y: "130.583",
                width: "0.570554",
                height: "20.7263",
                fill: "url(#paint5_linear_1581_25439)"
            }), (0, i.jsx)("rect", {
                x: "23.1445",
                y: "130.583",
                width: "0.570554",
                height: "20.7263",
                fill: "url(#paint6_linear_1581_25439)"
            }), (0, i.jsx)("rect", {
                x: "26.5664",
                y: "130.583",
                width: "0.570554",
                height: "20.7263",
                fill: "url(#paint7_linear_1581_25439)"
            }), (0, i.jsx)("rect", {
                x: "33.4102",
                y: "130.583",
                width: "0.570554",
                height: "20.7263",
                fill: "url(#paint8_linear_1581_25439)"
            }), (0, i.jsx)("rect", {
                x: "88.1875",
                y: "81.0195",
                width: "0.570554",
                height: "19.8252",
                fill: "url(#paint9_linear_1581_25439)"
            }), (0, i.jsx)("rect", {
                x: "92.1797",
                y: "81.0195",
                width: "0.570554",
                height: "19.8252",
                fill: "url(#paint10_linear_1581_25439)"
            }), (0, i.jsx)("rect", {
                x: "126.41",
                y: "81.0195",
                width: "0.570554",
                height: "19.8252",
                fill: "url(#paint11_linear_1581_25439)"
            }), (0, i.jsx)("rect", {
                x: "129.262",
                y: "81.0195",
                width: "0.570554",
                height: "19.8252",
                fill: "url(#paint12_linear_1581_25439)"
            }), (0, i.jsx)("rect", {
                x: "144.727",
                y: "30.4448",
                width: "0.498216",
                height: "70.3633",
                fill: "url(#paint13_linear_1581_25439)"
            }), (0, i.jsx)("rect", {
                x: "148.219",
                y: "30.4448",
                width: "0.498216",
                height: "70.3633",
                fill: "url(#paint14_linear_1581_25439)"
            }), (0, i.jsx)("rect", {
                x: "163.5",
                y: "81.0195",
                width: "0.570554",
                height: "19.8252",
                fill: "url(#paint15_linear_1581_25439)"
            }), (0, i.jsx)("rect", {
                x: "168.062",
                y: "81.0195",
                width: "0.570554",
                height: "19.8252",
                fill: "url(#paint16_linear_1581_25439)"
            }), (0, i.jsx)("rect", {
                x: "190.316",
                y: "81.0195",
                width: "0.570554",
                height: "19.8252",
                fill: "url(#paint17_linear_1581_25439)"
            }), (0, i.jsx)("rect", {
                x: "200.012",
                y: "81.0195",
                width: "0.570554",
                height: "19.8252",
                fill: "url(#paint18_linear_1581_25439)"
            }), (0, i.jsx)("rect", {
                x: "206.289",
                y: "81.0195",
                width: "0.570554",
                height: "19.8252",
                fill: "url(#paint19_linear_1581_25439)"
            }), (0, i.jsx)("rect", {
                x: "210.852",
                y: "81.0195",
                width: "0.570554",
                height: "19.8252",
                fill: "url(#paint20_linear_1581_25439)"
            }), (0, i.jsx)("rect", {
                x: "215.418",
                y: "81.0195",
                width: "0.570554",
                height: "19.8252",
                fill: "url(#paint21_linear_1581_25439)"
            }), (0, i.jsx)("rect", {
                x: "227.398",
                y: "30.5566",
                width: "0.570554",
                height: "20.7263",
                fill: "url(#paint22_linear_1581_25439)"
            }), (0, i.jsx)("rect", {
                x: "253.645",
                y: "30.5581",
                width: "0.570554",
                height: "20.7263",
                fill: "url(#paint23_linear_1581_25439)"
            }), (0, i.jsx)("rect", {
                x: "234.812",
                y: "30.5581",
                width: "0.570554",
                height: "70.2893",
                fill: "url(#paint24_linear_1581_25439)"
            }), (0, i.jsx)("rect", {
                x: "238.238",
                y: "30.5581",
                width: "0.570554",
                height: "70.2893",
                fill: "url(#paint25_linear_1581_25439)"
            }), (0, i.jsx)("rect", {
                x: "246.797",
                y: "30.5581",
                width: "0.570554",
                height: "70.2893",
                fill: "url(#paint26_linear_1581_25439)"
            }), (0, i.jsx)("rect", {
                x: "249.648",
                y: "81.0195",
                width: "0.570554",
                height: "19.8252",
                fill: "url(#paint27_linear_1581_25439)"
            }), (0, i.jsxs)("defs", {
                children: [(0, i.jsxs)("linearGradient", {
                    id: "paint0_linear_1581_25439",
                    x1: "6.31262",
                    y1: "30.5581",
                    x2: "6.31262",
                    y2: "100.847",
                    gradientUnits: "userSpaceOnUse",
                    children: [(0, i.jsx)("stop", {
                        "stop-color": "white"
                    }), (0, i.jsx)("stop", {
                        offset: "1",
                        "stop-color": "#A34DCC"
                    })]
                }), (0, i.jsxs)("linearGradient", {
                    id: "paint1_linear_1581_25439",
                    x1: "8.59387",
                    y1: "30.5566",
                    x2: "8.59387",
                    y2: "100.846",
                    gradientUnits: "userSpaceOnUse",
                    children: [(0, i.jsx)("stop", {
                        "stop-color": "white"
                    }), (0, i.jsx)("stop", {
                        offset: "1",
                        "stop-color": "#A34DCC"
                    })]
                }), (0, i.jsxs)("linearGradient", {
                    id: "paint2_linear_1581_25439",
                    x1: "12.0197",
                    y1: "30.5581",
                    x2: "12.0197",
                    y2: "100.847",
                    gradientUnits: "userSpaceOnUse",
                    children: [(0, i.jsx)("stop", {
                        "stop-color": "white"
                    }), (0, i.jsx)("stop", {
                        offset: "1",
                        "stop-color": "#A34DCC"
                    })]
                }), (0, i.jsxs)("linearGradient", {
                    id: "paint3_linear_1581_25439",
                    x1: "15.4376",
                    y1: "30.5581",
                    x2: "15.4376",
                    y2: "100.847",
                    gradientUnits: "userSpaceOnUse",
                    children: [(0, i.jsx)("stop", {
                        "stop-color": "white"
                    }), (0, i.jsx)("stop", {
                        offset: "1",
                        "stop-color": "#A34DCC"
                    })]
                }), (0, i.jsxs)("linearGradient", {
                    id: "paint4_linear_1581_25439",
                    x1: "19.4337",
                    y1: "30.5581",
                    x2: "19.4337",
                    y2: "100.847",
                    gradientUnits: "userSpaceOnUse",
                    children: [(0, i.jsx)("stop", {
                        "stop-color": "white"
                    }), (0, i.jsx)("stop", {
                        offset: "1",
                        "stop-color": "#A34DCC"
                    })]
                }), (0, i.jsxs)("linearGradient", {
                    id: "paint5_linear_1581_25439",
                    x1: "21.1447",
                    y1: "130.583",
                    x2: "21.1447",
                    y2: "151.309",
                    gradientUnits: "userSpaceOnUse",
                    children: [(0, i.jsx)("stop", {
                        "stop-color": "#A34DCC"
                    }), (0, i.jsx)("stop", {
                        offset: "1",
                        "stop-color": "#4D269B"
                    })]
                }), (0, i.jsxs)("linearGradient", {
                    id: "paint6_linear_1581_25439",
                    x1: "23.4298",
                    y1: "130.583",
                    x2: "23.4298",
                    y2: "151.309",
                    gradientUnits: "userSpaceOnUse",
                    children: [(0, i.jsx)("stop", {
                        "stop-color": "#A34DCC"
                    }), (0, i.jsx)("stop", {
                        offset: "1",
                        "stop-color": "#4D269B"
                    })]
                }), (0, i.jsxs)("linearGradient", {
                    id: "paint7_linear_1581_25439",
                    x1: "26.8517",
                    y1: "130.583",
                    x2: "26.8517",
                    y2: "151.309",
                    gradientUnits: "userSpaceOnUse",
                    children: [(0, i.jsx)("stop", {
                        "stop-color": "#A34DCC"
                    }), (0, i.jsx)("stop", {
                        offset: "1",
                        "stop-color": "#4D269B"
                    })]
                }), (0, i.jsxs)("linearGradient", {
                    id: "paint8_linear_1581_25439",
                    x1: "33.6954",
                    y1: "130.583",
                    x2: "33.6954",
                    y2: "151.309",
                    gradientUnits: "userSpaceOnUse",
                    children: [(0, i.jsx)("stop", {
                        "stop-color": "#A34DCC"
                    }), (0, i.jsx)("stop", {
                        offset: "1",
                        "stop-color": "#4D269B"
                    })]
                }), (0, i.jsxs)("linearGradient", {
                    id: "paint9_linear_1581_25439",
                    x1: "88.4728",
                    y1: "81.0195",
                    x2: "88.4728",
                    y2: "100.845",
                    gradientUnits: "userSpaceOnUse",
                    children: [(0, i.jsx)("stop", {
                        "stop-color": "#F973FE"
                    }), (0, i.jsx)("stop", {
                        offset: "1",
                        "stop-color": "#A34DCC"
                    })]
                }), (0, i.jsxs)("linearGradient", {
                    id: "paint10_linear_1581_25439",
                    x1: "92.465",
                    y1: "81.0195",
                    x2: "92.465",
                    y2: "100.845",
                    gradientUnits: "userSpaceOnUse",
                    children: [(0, i.jsx)("stop", {
                        "stop-color": "#F973FE"
                    }), (0, i.jsx)("stop", {
                        offset: "1",
                        "stop-color": "#A34DCC"
                    })]
                }), (0, i.jsxs)("linearGradient", {
                    id: "paint11_linear_1581_25439",
                    x1: "126.695",
                    y1: "81.0195",
                    x2: "126.695",
                    y2: "100.845",
                    gradientUnits: "userSpaceOnUse",
                    children: [(0, i.jsx)("stop", {
                        "stop-color": "#F973FE"
                    }), (0, i.jsx)("stop", {
                        offset: "1",
                        "stop-color": "#A34DCC"
                    })]
                }), (0, i.jsxs)("linearGradient", {
                    id: "paint12_linear_1581_25439",
                    x1: "129.547",
                    y1: "81.0195",
                    x2: "129.547",
                    y2: "100.845",
                    gradientUnits: "userSpaceOnUse",
                    children: [(0, i.jsx)("stop", {
                        "stop-color": "#F973FE"
                    }), (0, i.jsx)("stop", {
                        offset: "1",
                        "stop-color": "#A34DCC"
                    })]
                }), (0, i.jsxs)("linearGradient", {
                    id: "paint13_linear_1581_25439",
                    x1: "144.976",
                    y1: "30.4448",
                    x2: "144.976",
                    y2: "100.808",
                    gradientUnits: "userSpaceOnUse",
                    children: [(0, i.jsx)("stop", {
                        "stop-color": "white"
                    }), (0, i.jsx)("stop", {
                        offset: "1",
                        "stop-color": "#A34DCC"
                    })]
                }), (0, i.jsxs)("linearGradient", {
                    id: "paint14_linear_1581_25439",
                    x1: "148.468",
                    y1: "30.4448",
                    x2: "148.468",
                    y2: "100.808",
                    gradientUnits: "userSpaceOnUse",
                    children: [(0, i.jsx)("stop", {
                        "stop-color": "white"
                    }), (0, i.jsx)("stop", {
                        offset: "1",
                        "stop-color": "#A34DCC"
                    })]
                }), (0, i.jsxs)("linearGradient", {
                    id: "paint15_linear_1581_25439",
                    x1: "163.785",
                    y1: "81.0195",
                    x2: "163.785",
                    y2: "100.845",
                    gradientUnits: "userSpaceOnUse",
                    children: [(0, i.jsx)("stop", {
                        "stop-color": "#F973FE"
                    }), (0, i.jsx)("stop", {
                        offset: "1",
                        "stop-color": "#A34DCC"
                    })]
                }), (0, i.jsxs)("linearGradient", {
                    id: "paint16_linear_1581_25439",
                    x1: "168.348",
                    y1: "81.0195",
                    x2: "168.348",
                    y2: "100.845",
                    gradientUnits: "userSpaceOnUse",
                    children: [(0, i.jsx)("stop", {
                        "stop-color": "#F973FE"
                    }), (0, i.jsx)("stop", {
                        offset: "1",
                        "stop-color": "#A34DCC"
                    })]
                }), (0, i.jsxs)("linearGradient", {
                    id: "paint17_linear_1581_25439",
                    x1: "190.602",
                    y1: "81.0195",
                    x2: "190.602",
                    y2: "100.845",
                    gradientUnits: "userSpaceOnUse",
                    children: [(0, i.jsx)("stop", {
                        "stop-color": "#F973FE"
                    }), (0, i.jsx)("stop", {
                        offset: "1",
                        "stop-color": "#A34DCC"
                    })]
                }), (0, i.jsxs)("linearGradient", {
                    id: "paint18_linear_1581_25439",
                    x1: "200.297",
                    y1: "81.0195",
                    x2: "200.297",
                    y2: "100.845",
                    gradientUnits: "userSpaceOnUse",
                    children: [(0, i.jsx)("stop", {
                        "stop-color": "#F973FE"
                    }), (0, i.jsx)("stop", {
                        offset: "1",
                        "stop-color": "#A34DCC"
                    })]
                }), (0, i.jsxs)("linearGradient", {
                    id: "paint19_linear_1581_25439",
                    x1: "206.574",
                    y1: "81.0195",
                    x2: "206.574",
                    y2: "100.845",
                    gradientUnits: "userSpaceOnUse",
                    children: [(0, i.jsx)("stop", {
                        "stop-color": "#F973FE"
                    }), (0, i.jsx)("stop", {
                        offset: "1",
                        "stop-color": "#A34DCC"
                    })]
                }), (0, i.jsxs)("linearGradient", {
                    id: "paint20_linear_1581_25439",
                    x1: "211.137",
                    y1: "81.0195",
                    x2: "211.137",
                    y2: "100.845",
                    gradientUnits: "userSpaceOnUse",
                    children: [(0, i.jsx)("stop", {
                        "stop-color": "#F973FE"
                    }), (0, i.jsx)("stop", {
                        offset: "1",
                        "stop-color": "#A34DCC"
                    })]
                }), (0, i.jsxs)("linearGradient", {
                    id: "paint21_linear_1581_25439",
                    x1: "215.703",
                    y1: "81.0195",
                    x2: "215.703",
                    y2: "100.845",
                    gradientUnits: "userSpaceOnUse",
                    children: [(0, i.jsx)("stop", {
                        "stop-color": "#F973FE"
                    }), (0, i.jsx)("stop", {
                        offset: "1",
                        "stop-color": "#A34DCC"
                    })]
                }), (0, i.jsxs)("linearGradient", {
                    id: "paint22_linear_1581_25439",
                    x1: "227.684",
                    y1: "30.5566",
                    x2: "227.684",
                    y2: "51.283",
                    gradientUnits: "userSpaceOnUse",
                    children: [(0, i.jsx)("stop", {
                        "stop-color": "white"
                    }), (0, i.jsx)("stop", {
                        offset: "1",
                        "stop-color": "#F973FE"
                    })]
                }), (0, i.jsxs)("linearGradient", {
                    id: "paint23_linear_1581_25439",
                    x1: "253.93",
                    y1: "30.5581",
                    x2: "253.93",
                    y2: "51.2844",
                    gradientUnits: "userSpaceOnUse",
                    children: [(0, i.jsx)("stop", {
                        "stop-color": "white"
                    }), (0, i.jsx)("stop", {
                        offset: "1",
                        "stop-color": "#F973FE"
                    })]
                }), (0, i.jsxs)("linearGradient", {
                    id: "paint24_linear_1581_25439",
                    x1: "235.098",
                    y1: "30.5581",
                    x2: "235.098",
                    y2: "100.847",
                    gradientUnits: "userSpaceOnUse",
                    children: [(0, i.jsx)("stop", {
                        "stop-color": "white"
                    }), (0, i.jsx)("stop", {
                        offset: "1",
                        "stop-color": "#A34DCC"
                    })]
                }), (0, i.jsxs)("linearGradient", {
                    id: "paint25_linear_1581_25439",
                    x1: "238.524",
                    y1: "30.5581",
                    x2: "238.524",
                    y2: "100.847",
                    gradientUnits: "userSpaceOnUse",
                    children: [(0, i.jsx)("stop", {
                        "stop-color": "white"
                    }), (0, i.jsx)("stop", {
                        offset: "1",
                        "stop-color": "#A34DCC"
                    })]
                }), (0, i.jsxs)("linearGradient", {
                    id: "paint26_linear_1581_25439",
                    x1: "247.082",
                    y1: "30.5581",
                    x2: "247.082",
                    y2: "100.847",
                    gradientUnits: "userSpaceOnUse",
                    children: [(0, i.jsx)("stop", {
                        "stop-color": "white"
                    }), (0, i.jsx)("stop", {
                        offset: "1",
                        "stop-color": "#A34DCC"
                    })]
                }), (0, i.jsxs)("linearGradient", {
                    id: "paint27_linear_1581_25439",
                    x1: "249.934",
                    y1: "81.0195",
                    x2: "249.934",
                    y2: "100.845",
                    gradientUnits: "userSpaceOnUse",
                    children: [(0, i.jsx)("stop", {
                        "stop-color": "#F973FE"
                    }), (0, i.jsx)("stop", {
                        offset: "1",
                        "stop-color": "#A34DCC"
                    })]
                })]
            })]
        });
    var er = e.i(78198);
    let ea = (0, l.default)(({
        className: e,
        handleDynamicRecovery: r,
        handleStress: a,
        handleSkinTemperature: n,
        handleHRVfactor: s
    }) => {
        let {
            t: o
        } = (0, t.useTranslation)("ring");
        return (0, i.jsxs)("section", {
            className: e,
            "aria-labelledby": "recovery-section-heading",
            children: [(0, i.jsxs)("div", {
                className: "top",
                children: [(0, i.jsx)("h2", {
                    id: "recovery-section-heading",
                    children: o("ring.bentoRecoverySection.head")
                }), (0, i.jsx)("p", {
                    children: o("ring.bentoRecoverySection.subHead")
                })]
            }), (0, i.jsxs)("div", {
                className: "top-left",
                children: [(0, i.jsxs)("div", {
                    className: "content",
                    children: [(0, i.jsx)("h4", {
                        id: "dynamic-recovery-title",
                        children: o("ring.bentoRecoverySection.dynamicRecoveryCard.title")
                    }), (0, i.jsx)("h3", {
                        children: o("ring.bentoRecoverySection.dynamicRecoveryCard.subtitle")
                    }), (0, i.jsx)("div", {
                        className: "img-container",
                        role: "img",
                        "aria-label": "Dynamic recovery visualization",
                        children: (0, i.jsx)(v.CustomImage, {
                            src: "web_v2/ring-buy/recovery/png/dynamicDesk.png",
                            fill: !0,
                            alt: "",
                            className: "dynamic-recovery-img",
                            "aria-hidden": "true"
                        })
                    })]
                }), (0, i.jsx)("button", {
                    className: "expand",
                    onClick: r,
                    "aria-label": "Learn more about dynamic recovery",
                    "aria-describedby": "dynamic-recovery-title",
                    children: ee
                })]
            }), (0, i.jsxs)("div", {
                className: "top-right",
                children: [(0, i.jsxs)("div", {
                    className: "content",
                    children: [(0, i.jsx)("h4", {
                        id: "skin-temperature-title",
                        children: o("ring.bentoRecoverySection.skinTemperatureCard.title")
                    }), (0, i.jsxs)("h3", {
                        children: [o("ring.bentoRecoverySection.skinTemperatureCard.subtitleA"), " ", (0, i.jsx)("br", {}), " ", o("ring.bentoRecoverySection.skinTemperatureCard.subtitleB"), " ", (0, i.jsx)("br", {}), " ", o("ring.bentoRecoverySection.skinTemperatureCard.subtitleC")]
                    }), (0, i.jsx)("div", {
                        className: "img-container",
                        role: "img",
                        "aria-label": "Skin temperature visualization",
                        children: (0, i.jsx)(v.CustomImage, {
                            src: "web_v2/ring-buy/recovery/svg/skinTempRing.png",
                            fill: !0,
                            alt: "",
                            className: "temperature-img",
                            "aria-hidden": "true"
                        })
                    })]
                }), (0, i.jsx)("button", {
                    className: "expand dark-hover",
                    onClick: n,
                    "aria-label": "Learn more about skin temperature monitoring",
                    "aria-describedby": "skin-temperature-title",
                    children: Z
                })]
            }), (0, i.jsxs)("div", {
                className: "bottom-left",
                children: [" ", (0, i.jsxs)("div", {
                    className: "content",
                    children: [(0, i.jsx)("h4", {
                        id: "hrv-factor-title",
                        children: o("ring.bentoRecoverySection.hrvCard.title")
                    }), (0, i.jsxs)("h3", {
                        children: [o("ring.bentoRecoverySection.hrvCard.subtitleA"), " ", (0, i.jsx)("br", {}), " ", o("ring.bentoRecoverySection.hrvCard.subtitleB")]
                    })]
                }), (0, i.jsx)("div", {
                    className: "img-container",
                    role: "img",
                    "aria-label": "HRV factor visualization",
                    children: (0, i.jsx)(v.CustomImage, {
                        src: "web_v2/ring-buy/recovery/svg/hrvFactor.svg",
                        fill: !0,
                        alt: "",
                        className: "hrv-factor",
                        "aria-hidden": "true"
                    })
                }), (0, i.jsx)("div", {
                    className: "mask-container"
                }), (0, i.jsx)("button", {
                    className: "expand dark-hover",
                    onClick: s,
                    "aria-label": "Learn more about HRV factor monitoring",
                    "aria-describedby": "hrv-factor-title",
                    children: Z
                })]
            }), (0, i.jsxs)("div", {
                className: "bottom-right",
                children: [(0, i.jsxs)("div", {
                    className: "content",
                    children: [(0, i.jsx)("h4", {
                        id: "stress-title",
                        children: o("ring.bentoRecoverySection.stressCard.title")
                    }), (0, i.jsxs)("h3", {
                        children: [o("ring.bentoRecoverySection.stressCard.subtitleA"), " ", (0, i.jsx)("br", {}), " ", o("ring.bentoRecoverySection.stressCard.subtitleB")]
                    }), (0, i.jsx)("div", {
                        className: "img-container",
                        role: "img",
                        "aria-label": "Stress impact visualization",
                        children: (0, i.jsx)(v.CustomImage, {
                            src: "web_v2/ring-buy/recovery/svg/assetStress.svg",
                            fill: !0,
                            alt: "",
                            className: "stress-img",
                            "aria-hidden": "true"
                        })
                    })]
                }), (0, i.jsx)("button", {
                    className: "expand",
                    onClick: a,
                    "aria-label": "Learn more about stress impact",
                    "aria-describedby": "stress-title",
                    children: ee
                })]
            })]
        })
    }).withConfig({
        displayName: "DesktopRecoveryComponent",
        componentId: "sc-c75869cc-0"
    })
    `
  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    position: relative;
    display: grid;
    grid-template-columns: repeat(11, 1fr);
    grid-template-rows: 18rem 53rem 53rem;
    justify-content: center;
    gap: 1.2rem 1.4rem;
    height: 100%;
    padding: 48px 12px;
  }

  .top {
    grid-column: 1 / span 11;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    margin-bottom: 4.2rem;

    @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
      gap: 8.1%;
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: 0;
    }

    h2 {
      color: #000;
      max-width: 15ch;
      font-size: 32px;
      font-style: normal;
      font-weight: 500;
      line-height: 100%; /* 48px */
      letter-spacing: -1.28px;

      @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
        font-size: 48px;
        letter-spacing: -1.92px;
      }
    }

    p {
      color: #000;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 130%; /* 26px */
      letter-spacing: -0.64px;
      @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
        max-width: 40ch;
        font-size: 20px;
        letter-spacing: -0.8px;
      }
    }
  }

  .top-left {
    position: relative;
    text-align: center;
    border-radius: 24px;
    grid-row: 2 / 3;
    background: #000;
    padding: 3.6rem 2.4rem;
    grid-column: 1 / span 7;
    overflow: hidden;

    .img-container {
      position: absolute;
      // margin: 63px auto 9px;
      bottom: -10px;
      left: 0;
      width: 100%;
      height: 100%;
      // border : 1px solid red;

      img {
        width: 100%;
        height: auto;
        object-fit: contain;
        object-position: bottom;
      }
    }

    h4,
    h3 {
      text-align: left;
      z-index: 2;
    }
  }

  .top-right {
    position: relative;
    border-radius: 24px;
    background: #fff;
    overflow: hidden;
    padding: 3.6rem 2.4rem;
    grid-column: 8 / span 4;
    grid-row: 2 / 3;

    & .content {
      height: 100%;
      justify-content: flex-start;
      align-items: left;

      h4,
      h3 {
        color: #000;
      }

      h3 {
        background: linear-gradient(91deg, #000 0.9%, #999 135.14%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
    .img-container {
      position: absolute;
      // margin: 0 auto;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      img {
        width: 100%;
        object-position: right;
        object-fit: contain;
        height: auto;
      }
    }
  }

  .bottom-left {
    position: relative;
    padding: 3.2rem 2.4rem 0;
    grid-column: 1 / span 11;
    grid-row: 4 / 5;
    border-radius: 24px;
    background: #fff;
    overflow: hidden;
    @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
      padding: 3.6rem 2.4rem;
      grid-column: 1 / span 5;
      grid-row: 3 / 4;
    }

    & .content {
      height: 100%;
      justify-content: flex-end;
      align-items: center;

      h4 {
        color: #000;
        opacity: 0.7;
      }

      h3 {
        color: #000;
        background: transparent !important;
        text-align: center;
        background-clip: unset !important;
        -webkit-background-clip: unset !important;
        -webkit-text-fill-color: unset !important;
      }
    }
    .img-container {
      position: absolute;
      margin: 0 auto;
      top: 0;
      left: 5%;
      // left: calc(50% - 15.5rem);
      width: 90%;
      height: 100%;

      img {
        object-position: center 0;
        object-fit: contain;
        height: auto;
      }
    }
  }

  .bottom-right {
    position: relative;
    border-radius: 24px;
    background-image: url(${(0,er.getCompressedAssetUrl)("/web_v2/ring-buy/sleep/png/tinted.png")});
    overflow: hidden;
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: cover;
    padding: 3.6rem 2.4rem;
    grid-column: 6 / span 6;
    grid-row: 3 / span 1;

    @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
      text-align: center;
    }

    h3 {
      width: 80%;
      @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
        width: 100%;
      }
    }

    svg {
      width: 100%;
      height: auto;
      position: absolute;
      left: 0;
      bottom: 10.5rem;
    }

    .img-container {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      img {
        width: 100%;
        height: unset;
        object-fit: contain;
        aspect-ratio: 643/330;
        object-position: center 80%;
      }
    }

    .points {
      position: absolute;
      bottom: 5.4rem;
      margin: 0 auto;
      display: flex;
      gap: 4.7rem;
      left: 0;
      width: 100%;
      justify-content: center;
      align-items: center;
      color: rgba(255, 255, 255, 0.5);
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 16px; /* 100% */
      letter-spacing: -0.16px;
      text-transform: uppercase;

      .point {
        &::before {
          display: inline-block;
          content: '';
          margin: 0 0.8rem;
          width: 1.3rem;
          height: 1.3rem;
          border-radius: 50%;
          // overflow: hidden;
          background: #fff;
        }

        &:nth-child(2)::before {
          background: #f973fe;
        }

        &:nth-child(3)::before {
          background: #a34dcc;
        }

        &:nth-child(4)::before {
          background: #4d269b;
        }
      }
    }

    .expand > svg {
      bottom: 0;
    }
  }

  button.dark-hover {
    &:hover {
      circle {
        fill: #000;
      }

      path {
        fill: white;
      }
    }
  }

  button.expand {
    &:hover {
      circle {
        fill-opacity: 1;
      }
    }
  }
`, en = (0, l.default)(({
        className: e,
        handleDynamicRecovery: r,
        handleStress: a,
        handleSkinTemperature: n,
        handleHRVfactor: s
    }) => {
        let {
            t: o
        } = (0, t.useTranslation)("ring");
        return (0, i.jsxs)("section", {
            className: e,
            "aria-labelledby": "mobile-recovery-section-heading",
            children: [(0, i.jsxs)("div", {
                className: "head",
                children: [(0, i.jsx)("h2", {
                    id: "mobile-recovery-section-heading",
                    children: o("ring.bentoRecoverySection.head")
                }), (0, i.jsx)("p", {
                    children: o("ring.bentoRecoverySection.subHead")
                })]
            }), (0, i.jsx)("div", {
                className: "sleep-items-container",
                children: (0, i.jsxs)("div", {
                    className: "items",
                    children: [(0, i.jsxs)("div", {
                        className: "item recovery",
                        children: [(0, i.jsxs)("div", {
                            className: "content",
                            children: [(0, i.jsx)("h4", {
                                id: "mobile-dynamic-recovery-title",
                                children: o("ring.bentoRecoverySection.dynamicRecoveryCard.title")
                            }), (0, i.jsx)("h3", {
                                children: o("ring.bentoRecoverySection.dynamicRecoveryCard.subtitle")
                            })]
                        }), (0, i.jsx)("button", {
                            className: "expand",
                            onClick: r,
                            "aria-label": "Learn more about dynamic recovery",
                            "aria-describedby": "mobile-dynamic-recovery-title",
                            children: ee
                        })]
                    }), (0, i.jsxs)("div", {
                        className: "item temperature",
                        children: [(0, i.jsxs)("div", {
                            className: "content",
                            children: [(0, i.jsx)("h4", {
                                id: "mobile-skin-temperature-title",
                                children: o("ring.bentoRecoverySection.skinTemperatureCard.title")
                            }), (0, i.jsxs)("h3", {
                                children: [o("ring.bentoRecoverySection.skinTemperatureCard.subtitleA"), " ", o("ring.bentoRecoverySection.skinTemperatureCard.subtitleB"), " ", o("ring.bentoRecoverySection.skinTemperatureCard.subtitleC")]
                            }), (0, i.jsx)("div", {
                                className: "img-container",
                                role: "img",
                                "aria-label": "Skin temperature visualization",
                                children: (0, i.jsx)(v.CustomImage, {
                                    src: "web_v2/ring-buy/recovery/svg/tempRes.svg",
                                    fill: !0,
                                    alt: "",
                                    className: "temperature-img",
                                    "aria-hidden": "true"
                                })
                            })]
                        }), (0, i.jsx)("button", {
                            className: "expand",
                            onClick: n,
                            "aria-label": "Learn more about skin temperature monitoring",
                            "aria-describedby": "mobile-skin-temperature-title",
                            children: Z
                        })]
                    }), (0, i.jsxs)("div", {
                        className: "item hrv",
                        children: [(0, i.jsxs)("div", {
                            className: "content",
                            children: [(0, i.jsx)("h4", {
                                id: "mobile-hrv-factor-title",
                                children: o("ring.bentoRecoverySection.hrvCard.title")
                            }), (0, i.jsxs)("h3", {
                                children: [o("ring.bentoRecoverySection.hrvCard.subtitleA"), (0, i.jsx)("br", {}), " ", o("ring.bentoRecoverySection.hrvCard.subtitleB")]
                            }), (0, i.jsx)("div", {
                                className: "img-container",
                                role: "img",
                                "aria-label": "HRV factor visualization",
                                children: (0, i.jsx)(v.CustomImage, {
                                    src: "web_v2/ring-buy/recovery/svg/hrvFactor.svg",
                                    fill: !0,
                                    alt: "",
                                    className: "contributorImg",
                                    "aria-hidden": "true"
                                })
                            })]
                        }), (0, i.jsx)("button", {
                            className: "expand",
                            onClick: s,
                            "aria-label": "Learn more about HRV factor monitoring",
                            "aria-describedby": "mobile-hrv-factor-title",
                            children: Z
                        })]
                    }), (0, i.jsxs)("div", {
                        className: "item stress",
                        children: [(0, i.jsxs)("div", {
                            className: "content",
                            children: [(0, i.jsx)("h4", {
                                id: "mobile-stress-title",
                                children: o("ring.bentoRecoverySection.stressCard.title")
                            }), (0, i.jsxs)("h3", {
                                children: [o("ring.bentoRecoverySection.stressCard.subtitleA"), " ", o("ring.bentoRecoverySection.stressCard.subtitleB")]
                            })]
                        }), (0, i.jsx)("button", {
                            className: "expand",
                            onClick: a,
                            "aria-label": "Learn more about stress impact",
                            "aria-describedby": "mobile-stress-title",
                            children: ee
                        })]
                    })]
                })
            })]
        })
    }).withConfig({
        displayName: "MobileRecoveryComponent",
        componentId: "sc-1274a960-0"
    })
    `
  position: relative;
  width: 100%;
  overflow: hidden;
  padding: 9rem 0;

  .head {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    h2 {
      color: #000;
      max-width: 15ch;
      font-size: 32px;
      font-style: normal;
      font-weight: 500;
      line-height: 100%; /* 48px */
      letter-spacing: -1.28px;
    }

    p {
      color: #000;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 130%; /* 26px */
      letter-spacing: -0.64px;
    }
  }

  .sleep-items-container {
    margin: 6.4rem auto 4.2rem;
    overflow: auto;
    ${g.hideScrollbar}

    .items {
      position: relative;
      display: inline-flex;
      flex-direction: row;
      gap: 1.2rem;
      flex-shrink: 0;

      .item {
        border-radius: 24px;
        position: relative;
        width: 27.8rem;
        padding: 3.6rem 2.4rem;
        height: 44.7rem;
        overflow: hidden;

        & .content {
          display: flex;
          flex-direction: column;
          gap: 0.9rem;
        }
      }

      .recovery {
        & .content {
          text-align: left;
        }
        background-color: #000;
        background-image: url(${(0,er.getCompressedAssetUrl)("/web_v2/ring-buy/recovery/png/recoveryAsset.png")});
        background-repeat: no-repeat;
        background-position: bottom;
        background-size: contain;
      }

      .hrv {
        background: #fff;

        & .content {
          height: 100%;
          justify-content: flex-end;
          h4 {
            color: #000;
            opacity: 0.7;
          }

          h3 {
            background: linear-gradient(91deg, #000 0.9%, #999 135.14%);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        }

        .img-container {
          width: 100%;
          margin-bottom: 0;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;

          img {
            object-position: top center;
            object-fit: contain;
            height: auto;
          }
        }
      }

      .temperature {
        background: #fff;

        h4 {
          color: #000;
          opacity: 0.7;
        }

        h3 {
          color: #000;
          background: transparent !important;
          background-clip: unset !important;
          -webkit-background-clip: unset !important;
          -webkit-text-fill-color: unset !important;
        }

        .img-container {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 85%;

          img {
            width: auto;
            height: 100%;
            object-position: bottom right;
            object-fit: contain;
          }
        }
      }

      .stress {
        & .content {
          text-align: left;
        }
        background-image: url(${(0,er.getCompressedAssetUrl)("/web_v2/ring-buy/recovery/png/stress.png")});
        background-repeat: no-repeat;
        background-position: bottom;
        background-size: cover;

        h4 {
          color: #fff;
          opacity: 0.7;
        }

        h3 {
          color: #fff;
          background: transparent !important;
          background-clip: unset !important;
          -webkit-background-clip: unset !important;
          -webkit-text-fill-color: unset !important;
        }
      }
    }
  }
`, es = (0, l.default)(({
        className: e
    }) => {
        let {
            t: r
        } = (0, t.useTranslation)("ring"), {
            width: a
        } = (0, L.useWindowSize)();
        return (0, i.jsx)("div", {
            className: e,
            onClick: e => e.stopPropagation(),
            onKeyDown: e => e.stopPropagation(),
            role: "button",
            tabIndex: 0,
            "aria-labelledby": "hrv-factor-modal-heading",
            children: (0, i.jsxs)("div", {
                className: "container",
                children: [(0, i.jsx)("h4", {
                    id: "hrv-factor-modal-heading",
                    children: r("ring.bentoRecoverySection.hrvCard.modal.head")
                }), (0, i.jsx)("h3", {
                    children: r("ring.bentoRecoverySection.hrvCard.modal.subHead")
                }), (0, i.jsx)("div", {
                    className: "modal-items",
                    children: (0, i.jsxs)("div", {
                        className: "item",
                        children: [(0, i.jsxs)("p", {
                            className: "text-mid",
                            children: [r("ring.bentoRecoverySection.hrvCard.modal.cardA.descA"), " ", (0, i.jsx)("span", {
                                className: "bold",
                                children: r("ring.bentoRecoverySection.hrvCard.modal.cardA.descBold")
                            }), " ", r("ring.bentoRecoverySection.hrvCard.modal.cardA.descB"), (0, i.jsx)("br", {}), (0, i.jsx)("br", {}), r("ring.bentoRecoverySection.hrvCard.modal.cardA.descC")]
                        }), (0, i.jsx)("div", {
                            className: "img-container",
                            role: "img",
                            "aria-label": "HRV factor visualization",
                            children: a > 992 ? (0, i.jsx)(v.CustomImage, {
                                src: "web_v2/ring-buy/sleep/png/HRVFlipNew.png",
                                fill: !0,
                                alt: "",
                                className: "hrv-flip-a",
                                "aria-hidden": "true"
                            }) : (0, i.jsx)(v.CustomImage, {
                                src: "web_v2/ring-buy/recovery/svg/flip/hrvFlipAresp.svg",
                                fill: !0,
                                alt: "",
                                className: "hrv-flip-a",
                                "aria-hidden": "true"
                            })
                        })]
                    })
                })]
            })
        })
    }).withConfig({
        displayName: "HRVfactorModal",
        componentId: "sc-ef3e3f8-0"
    })
    `
  position: relative;
  width: 89rem;
  margin: auto;
  z-index: 12;
  overflow: hidden;

  & .container {
    margin: auto;
    position: relative;
    border-radius: 24px;
    // height: 100%;
    background: #fff;
    display: flex;
    padding: 44px 15.5px 22px;
    margin-bottom: 120px;
    flex-direction: column;
    align-items: flex-start;
    gap: 11px;
    flex-shrink: 0;
    scroll-behavior: smooth;

    @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
      padding: 40px;
      width: 89rem;
      z-index: 5;
    }

    h3 {
      font-size: 32px;
      font-style: normal;
      font-weight: 500;
      line-height: 100%; /* 35.216px */
      letter-spacing: -1.28px;
      color: #000;

      @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
        font-size: 35.216px;
        letter-spacing: -1.409px;
      }
    }

    h4 {
      color: #000;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 100%; /* 14px */
      letter-spacing: 3.04px;
      text-transform: uppercase;
      opacity: 0.7;

      @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
        font-size: 16px;
        letter-spacing: 5.04px;
      }
    }

    h3,
    h4 {
      @media (max-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
        padding-left: 8.5px;
      }
    }

    .modal-items {
      margin-top: 2.6rem;
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 3.7rem;

      .item {
        overflow: hidden;
        display: flex;
        justify-content: space-between;
        border-radius: 2.4rem;
        width: 100%;
        height: 78.5rem;
        padding: 1.6rem;
        position: relative;

        @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
          padding: 4rem;
          height: 72.4rem;
        }

        p {
          color: rgba(255, 255, 255, 0.7);
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
          line-height: 130%; /* 20.8px */
          letter-spacing: -0.64px;

          &.text-left {
            max-width: 100%;

            @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
              max-width: 40%;
            }
          }

          &.text-right {
            color: #000;
            max-width: 100%;
            margin-right: 0;
          }

          &.text-mid {
            max-width: 100%;
          }

          .bold {
            color: #fff;
            font-weight: 500;
            opacity: 1;
          }
        }

        &:nth-child(1) {
          gap: 5rem;
          position: relative;
          background: #000;
          justify-content: space-between;

          p {
            @media (max-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
              color: rgba(255, 255, 255, 0.7);
              font-size: 16px;
              font-style: normal;
              font-weight: 400;
              line-height: 130%; /* 20.8px */
              letter-spacing: -0.64px;
              margin: 1.4rem;
            }
          }

          .img-container {
            position: absolute;
            width: 100%;
            height: 40%;
            bottom: 0;
            left: 0;

            @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
              height: 100%;
            }

            img {
              width: 100%;
              height: auto;
              object-fit: contain;
              object-position: bottom;
            }
          }
        }

        &:nth-child(2) {
          flex-direction: row-reverse;
          background: #eee;
          height: 49.4rem;
          align-items: center;
          p {
            width: 50%;
          }

          .img-container {
            position: absolute;
            width: 322.1px;
            height: 100%;
            bottom: 0;
            left: 4rem;

            img {
              width: 100%;
              height: auto;
              object-fit: contain;
              object-position: bottom;
            }
          }
        }
      }
    }
  }
`, eo = (0, l.default)(({
        className: e
    }) => {
        let {
            t: r
        } = (0, t.useTranslation)("ring");
        return (0, i.jsx)("div", {
            className: e,
            onClick: e => e.stopPropagation(),
            onKeyDown: e => e.stopPropagation(),
            role: "button",
            tabIndex: 0,
            "aria-labelledby": "stress-modal-heading",
            children: (0, i.jsxs)("div", {
                className: "container",
                children: [(0, i.jsx)("h4", {
                    id: "stress-modal-heading",
                    children: r("ring.bentoRecoverySection.stressCard.modal.head")
                }), (0, i.jsxs)("h3", {
                    children: [r("ring.bentoRecoverySection.stressCard.modal.subHeadA"), (0, i.jsx)("br", {}), " ", r("ring.bentoRecoverySection.stressCard.modal.subHeadB")]
                }), (0, i.jsx)("div", {
                    className: "modal-items",
                    children: (0, i.jsxs)("div", {
                        className: "item",
                        children: [(0, i.jsxs)("p", {
                            className: "text-mid",
                            children: [r("ring.bentoRecoverySection.stressCard.modal.cardA.descA"), " ", (0, i.jsx)("span", {
                                className: "bold",
                                children: r("ring.bentoRecoverySection.stressCard.modal.cardA.descBold")
                            }), " ", r("ring.bentoRecoverySection.stressCard.modal.cardA.descB")]
                        }), (0, i.jsx)("div", {
                            className: "img-container",
                            role: "img",
                            "aria-label": "Stress impact visualization",
                            children: (0, i.jsx)(v.CustomImage, {
                                src: "web_v2/ring-buy/recovery/svg/stressFlipAresp.svg",
                                fill: !0,
                                alt: "",
                                className: "sleep-index",
                                "aria-hidden": "true"
                            })
                        })]
                    })
                })]
            })
        })
    }).withConfig({
        displayName: "StressModal",
        componentId: "sc-7f0f3efe-0"
    })
    `
  position: relative;
  width: 89rem;
  margin: auto;
  z-index: 12;
  overflow: hidden;
  font-size: 34px;

  & .container {
    margin: auto;
    position: relative;
    border-radius: 24px;
    height: 100%;
    background: #fff;
    display: flex;
    padding: 44px 15.5px 22px;
    margin-bottom: 4vh;
    flex-direction: column;
    align-items: flex-start;
    gap: 11px;
    flex-shrink: 0;
    scroll-behavior: smooth;

    @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
      padding: 40px;
      width: 89rem;
      margin-bottom: 120px;
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
      font-size: 32px;
      font-style: normal;
      font-weight: 500;
      line-height: 100%; /* 35.216px */
      letter-spacing: -1.28px;
      color: #000;

      @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
        font-size: 35.216px;
        letter-spacing: -1.409px;
      }
    }

    h4 {
      color: #000;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 100%; /* 14px */
      letter-spacing: 3.04px;
      text-transform: uppercase;
      opacity: 0.7;

      @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
        font-size: 16px;
        letter-spacing: 5.04px;
      }
    }

    h3,
    h4 {
      @media (max-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
        padding-left: 8.5px;
      }
    }

    .modal-items {
      margin-top: 2.6rem;
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 3.7rem;

      .item {
        overflow: hidden;
        display: flex;
        justify-content: space-between;
        border-radius: 2.4rem;
        width: 100%;
        height: 73.6rem;
        padding: 1.6rem;
        position: relative;

        @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
          padding: 4rem;
          height: 99.6rem;
        }

        p {
          color: rgba(255, 255, 255, 0.7);
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
          line-height: 130%; /* 20.8px */
          letter-spacing: -0.64px;

          &.text-left {
            max-width: 100%;

            color: #000;
            font-size: 18px;
            font-style: normal;
            font-weight: 400;
            line-height: 130%; /* 26px */
            letter-spacing: -0.8px;
            align-self: center;
            vertical-align: center;

            @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
              max-width: 40%;
            }
          }

          &.text-right {
            color: #000;
            max-width: 100%;
            margin-right: 0;

            @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
              max-width: 40%;
            }
          }

          &.text-mid {
            max-width: 100%;
          }

          .bold {
            color: #fff;
            font-weight: 500;
            opacity: 1;
          }
        }

        &:nth-child(1) {
          flex-direction: column;
          background: #000;

          @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
            flex-direction: row;
          }

          p {
            @media (max-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
              color: rgba(255, 255, 255, 0.7);
              font-size: 16px;
              font-style: normal;
              font-weight: 400;
              line-height: 130%; /* 20.8px */
              letter-spacing: -0.64px;
              margin: 1.4rem;
            }
          }

          .img-container {
            width: 68rem;
            position: absolute;
            bottom: 3rem;
            left: calc(50% - 34rem);
            height: 100%;

            @media (max-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
              position: absolute;
              left: 0%;
              width: 100%;
              bottom: 0;
              height: 100%;
            }

            img {
              width: 100%;
              height: auto;
              object-position: bottom;
              object-fit: contain;
            }
          }
        }
      }
    }
  }
`, el = (0, l.default)(({
        className: e
    }) => {
        let {
            t: r
        } = (0, t.useTranslation)("ring"), {
            width: a
        } = (0, L.useWindowSize)();
        return (0, i.jsx)("div", {
            className: e,
            onClick: e => e.stopPropagation(),
            onKeyDown: e => e.stopPropagation(),
            role: "button",
            tabIndex: 0,
            "aria-labelledby": "dynamic-recovery-modal-heading",
            children: (0, i.jsxs)("div", {
                className: "container",
                children: [(0, i.jsx)("h4", {
                    id: "dynamic-recovery-modal-heading",
                    children: r("ring.bentoRecoverySection.dynamicRecoveryCard.title")
                }), (0, i.jsx)("h3", {
                    children: r("ring.bentoRecoverySection.dynamicRecoveryCard.subtitle")
                }), (0, i.jsxs)("div", {
                    className: "modal-items",
                    children: [(0, i.jsxs)("div", {
                        className: "item",
                        children: [(0, i.jsx)("p", {
                            className: "text-left",
                            children: r("ring.bentoRecoverySection.dynamicRecoveryCard.modal.cardA.desc")
                        }), (0, i.jsx)("div", {
                            className: "img-container",
                            role: "img",
                            "aria-label": "Dynamic recovery mobile visualization",
                            children: (0, i.jsx)(v.CustomImage, {
                                src: "web_v2/ring-buy/recovery/png/flip/mobile.png",
                                fill: !0,
                                alt: "",
                                className: "recovery-flip-img",
                                "aria-hidden": "true"
                            })
                        }), a > 992 ? (0, i.jsxs)("div", {
                            className: "mask-container",
                            role: "img",
                            "aria-label": "Dynamic recovery mask overlay",
                            children: [" ", (0, i.jsx)(v.CustomImage, {
                                src: "web_v2/ring-buy/recovery/svg/flip/recoveryFlipAMask.svg",
                                fill: !0,
                                alt: "",
                                className: "recovery-flip-img",
                                "aria-hidden": "true"
                            })]
                        }) : null]
                    }), (0, i.jsxs)("div", {
                        className: "item",
                        children: [(0, i.jsx)("p", {
                            className: "text-mid",
                            children: r("ring.bentoRecoverySection.dynamicRecoveryCard.modal.cardB.desc")
                        }), (0, i.jsx)("div", {
                            className: "img-container",
                            role: "img",
                            "aria-label": "Recovery nudge visualization",
                            children: (0, i.jsx)(v.CustomImage, {
                                src: "web_v2/ring-buy/recovery/png/flip/recovery_nudge.png",
                                fill: !0,
                                alt: "",
                                className: "sleep-index",
                                "aria-hidden": "true"
                            })
                        })]
                    })]
                })]
            })
        })
    }).withConfig({
        displayName: "DynamiCRecoveryModal__DynamicRecoveryModal",
        componentId: "sc-d04e56e1-0"
    })
    `
  font-size: 34px;
  position: relative;
  margin: auto;
  z-index: 12;
  overflow: hidden;

  & .container {
    margin: auto;
    position: relative;
    border-radius: 24px;
    height: 100%;
    background: #fff;
    display: flex;
    padding: 44px 15.5px 22px;
    margin-bottom: 4vh;
    flex-direction: column;
    align-items: flex-start;
    gap: 11px;
    flex-shrink: 0;
    scroll-behavior: smooth;

    @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
      padding: 40px;
      width: 89rem;
      margin-bottom: 120px;
    }

    h3 {
      font-size: 32px;
      font-style: normal;
      font-weight: 500;
      line-height: 100%; /* 35.216px */
      letter-spacing: -1.28px;
      color: #000;

      @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
        font-size: 35.216px;
        letter-spacing: -1.409px;
      }
    }

    h4 {
      color: #000;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 100%; /* 14px */
      letter-spacing: 3.04px;
      text-transform: uppercase;
      opacity: 0.7;

      @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
        font-size: 16px;
        letter-spacing: 5.04px;
      }
    }

    h3,
    h4 {
      @media (max-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
        padding-left: 8.5px;
      }
    }

    .modal-items {
      margin-top: 4.1rem;
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 1.6rem;

      @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
        margin-top: 2.6rem;
      }

      .item {
        overflow: hidden;
        display: flex;
        justify-content: space-between;
        border-radius: 2.4rem;
        width: 100%;
        height: 47.2rem;
        padding: 1.6rem;
        position: relative;

        @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
          padding: 4rem;
          width: 100%;
          height: 59.4rem;
        }

        p {
          color: rgba(255, 255, 255, 0.7);
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
          line-height: 130%; /* 20.8px */
          letter-spacing: -0.64px;

          &.text-left {
            max-width: 100%;
            font-style: normal;
            font-weight: 400;
            line-height: 130%; /* 26px */
            letter-spacing: -0.8px;

            @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
              max-width: 45%;
            }
          }

          &.text-right {
            color: #000;
            max-width: 100%;
            margin-right: 0;

            @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
              max-width: 40%;
            }
          }

          &.text-mid {
            max-width: 100%;
          }

          .bold {
            color: #fff;
            font-weight: 500;
            opacity: 1;
          }
        }

        &:nth-child(1) {
          flex-direction: column;
          background: #000;
          justify-content: flex-start;
          align-items: flex-start;
          height: 43.3rem;

          @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
            flex-direction: row;
            height: 59.4rem;
            box-shadow: unset;
          }

          p {
            margin-top: 4rem;

            @media (max-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
              color: rgba(255, 255, 255, 0.7);
              font-size: 16px;
              font-style: normal;
              font-weight: 400;
              line-height: 130%; /* 20.8px */
              letter-spacing: -0.64px;
              margin: 1.4rem;
            }
          }

          .img-container {
            z-index: 4;
            width: 100%;
            margin-bottom: 0;
            position: absolute;
            bottom: 0;
            right: 4rem;
            height: 100%;
            display: flex;
            justify-content: flex-end;

            @media (max-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
              right: -5%;
              width: 80%;
              bottom: -10%;
              height: 60%;
            }

            img {
              width: auto;
              height: 100%;
              object-position: right;
              object-fit: contain;

              @media (max-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
                object-position: bottom;
              }
            }
          }

          .mask-container {
            z-index: 3;
            width: 37.2rem;
            margin-bottom: 0;
            position: absolute;
            bottom: 12rem;
            left: 4rem;
            height: 100%;
            display: flex;
            justify-content: flex-end;

            img {
              width: 100%;
              height: auto;
              object-position: bottom;
              object-fit: contain;
            }
          }
        }

        &:nth-child(2) {
          flex-direction: column;
          background: #000;

          @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
            flex-direction: row;
          }

          p {
            @media (max-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
              color: rgba(255, 255, 255, 0.7);
              font-size: 16px;
              font-style: normal;
              font-weight: 400;
              line-height: 130%; /* 20.8px */
              letter-spacing: -0.64px;
              margin: 2.4rem 1.4rem;
              margin-top: 2.4rem;
            }
          }

          .img-container {
            width: 41.2rem;
            margin-bottom: 0;
            position: absolute;
            bottom: 0;
            left: calc(50% - 20.6rem);
            height: 100%;
            display: flex;
            justify-content: flex-end;

            @media (max-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
              height: 50%;
            }

            img {
              width: 100%;
              height: auto;
              object-position: 50% 80%;
              object-fit: contain;

              @media (max-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
                object-position: 50% -40px;
              }
            }
          }
        }

        &:nth-child(3),
        :nth-child(6) {
          border-radius: 0;
          border: none;
          align-items: center;
          height: 50vh;
          gap: 5%;
          background: #fff;
          padding: 0;
          flex-direction: column;

          @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
            flex-direction: row;
            gap: 10%;
          }
          .img-card {
            width: 100%;
            height: 100%;
            border: 1px solid red;
            border-radius: 2.4rem;
            margin: 0;

            @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
              width: 40%;
            }
          }
        }
      }
    }
  }
`;
    var ec = e.i(65217);
    let ed = (0, l.default)(({
        className: e
    }) => {
        let {
            t: r
        } = (0, t.useTranslation)("ring");
        return (0, i.jsx)("div", {
            className: e,
            onClick: e => e.stopPropagation(),
            onKeyDown: e => e.stopPropagation(),
            role: "button",
            tabIndex: 0,
            "aria-labelledby": "skin-temperature-modal-heading",
            children: (0, i.jsxs)("div", {
                className: "container",
                children: [(0, i.jsx)("h4", {
                    id: "skin-temperature-modal-heading",
                    children: r("ring.bentoRecoverySection.skinTemperatureCard.modal.head")
                }), (0, i.jsxs)("h3", {
                    children: [r("ring.bentoRecoverySection.skinTemperatureCard.modal.subHead"), (0, i.jsx)("br", {}), " ", r("ring.bentoRecoverySection.skinTemperatureCard.modal.subHeadB")]
                }), (0, i.jsx)("div", {
                    className: "modal-items",
                    children: (0, i.jsxs)("div", {
                        className: "item",
                        children: [(0, i.jsx)("p", {
                            className: "text-mid",
                            children: r("ring.bentoRecoverySection.skinTemperatureCard.modal.cardA.desc")
                        }), (0, i.jsx)("div", {
                            className: "img-container",
                            role: "img",
                            "aria-label": "Skin temperature visualization",
                            children: (0, i.jsx)(v.CustomImage, {
                                src: "web_v2/ring-buy/recovery/png/flip/tempFlip.png",
                                fill: !0,
                                alt: "",
                                className: "skin-temperature-flip",
                                "aria-hidden": "true"
                            })
                        })]
                    })
                })]
            })
        })
    }).withConfig({
        displayName: "SkinTemperatureModal",
        componentId: "sc-1169782-0"
    })
    `
  position: relative;
  margin: auto;
  z-index: 12;
  overflow: hidden;
  font-size: 34px;

  & .container {
    margin: auto;
    position: relative;
    border-radius: 24px;
    height: 100%;
    background: #fff;
    display: flex;
    padding: 44px 15.5px 22px;
    margin-bottom: 4vh;
    flex-direction: column;
    align-items: flex-start;
    gap: 11px;
    flex-shrink: 0;
    scroll-behavior: smooth;

    @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
      padding: 40px;
      width: 89rem;
      z-index: 5;
      margin-bottom: 120px;
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
      font-size: 32px;
      font-style: normal;
      font-weight: 500;
      line-height: 100%; /* 35.216px */
      letter-spacing: -1.28px;
      color: #000;

      @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
        font-size: 35.216px;
        letter-spacing: -1.409px;
      }
    }

    h4 {
      color: #000;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 100%; /* 14px */
      letter-spacing: 3.04px;
      text-transform: uppercase;
      opacity: 0.7;

      @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
        font-size: 16px;
        letter-spacing: 5.04px;
      }
    }

    h3,
    h4 {
      @media (max-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
        padding-left: 8.5px;
      }
    }

    p.description {
      color: #000;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 130%; /* 23.4px */
      letter-spacing: -0.72px;
    }

    .modal-items {
      margin-top: 4.1rem;
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;

      @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
        margin-top: 2.6rem;
        gap: 3.7rem;
      }

      .item {
        overflow: hidden;
        display: flex;
        justify-content: space-between;
        border-radius: 2.4rem;
        width: 100%;
        height: 47.2rem;
        padding: 1.6rem;
        position: relative;

        @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
          padding: 4rem;
          width: 100%;
          height: 59.4rem;
        }

        h5 {
          color: #fff;
          font-size: 20px;
          font-style: normal;
          font-weight: 600;
          line-height: 130%; /* 26px */
          letter-spacing: -0.8px;
        }

        p {
          color: rgba(255, 255, 255, 0.7);
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
          line-height: 130%; /* 20.8px */
          letter-spacing: -0.64px;

          &.text-left {
            max-width: 100%;
            font-style: normal;
            font-weight: 400;
            line-height: 130%; /* 26px */
            letter-spacing: -0.8px;

            @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
              max-width: 45%;
            }
          }

          &.text-right {
            max-width: 100%;
            margin-right: 0;
          }

          &.text-mid {
            max-width: 100%;
          }
        }

        &:nth-child(1) {
          justify-content: flex-start;
          flex-direction: column;
          gap: 0.2rem;
          background: #000;

          p {
            @media (max-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
              color: rgba(255, 255, 255, 0.7);
              font-size: 16px;
              font-style: normal;
              font-weight: 400;
              line-height: 130%; /* 20.8px */
              letter-spacing: -0.64px;
              margin: 1.4rem;
            }
          }

          .img-container {
            width: 120%;
            position: absolute;
            bottom: 0;
            left: -10%;
            height: 100%;
            display: flex;
            justify-content: flex-end;

            @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
              width: 100%;
              left: 0;
            }

            img {
              width: 100%;
              height: auto;
              object-fit: contain;
              object-position: bottom;
            }
          }
        }
      }
    }
  }
`, eh = (0, l.default)(({
        className: e
    }) => {
        let {
            width: t
        } = (0, L.useWindowSize)(), r = (0, a.useContext)(ec.MagicModalNewContext), s = () => {
            n.default.track("dynamic recovery modal - CLICK"), r.set((0, i.jsx)(el, {})), r.show()
        }, o = () => {
            n.default.track("stress modal - CLICK"), r.set((0, i.jsx)(eo, {})), r.show()
        }, l = () => {
            n.default.track("skin temperature modal - CLICK"), r.set((0, i.jsx)(ed, {})), r.show()
        }, c = () => {
            n.default.track("hrv factor modal - CLICK"), r.set((0, i.jsx)(es, {})), r.show()
        };
        return (0, i.jsx)("section", {
            className: e,
            children: (0, i.jsx)(y.Container, {
                children: t > 992 ? (0, i.jsx)(ea, {
                    handleDynamicRecovery: s,
                    handleHRVfactor: c,
                    handleSkinTemperature: l,
                    handleStress: o
                }) : (0, i.jsx)(en, {
                    handleDynamicRecovery: s,
                    handleHRVfactor: c,
                    handleSkinTemperature: l,
                    handleStress: o
                })
            })
        })
    }).withConfig({
        displayName: "UnderstandYourRecovery",
        componentId: "sc-c8c6ab93-0"
    })
    `
  position: relative;
  background: #eee;

  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    width: 100vw;
    height: 100%;
    background: #eee;
    overflow: hidden;
    ${Q.SectionPadding}
  }

  button {
    position: absolute;
    bottom: 1.4rem;
    right: 1.4rem;
    background: none;
    border: none;
    width: 4rem;
    height: 4rem;
  }

  & .content {
    display: flex;
    flex-direction: column;
    gap: 1.15rem;

    h3 {
      font-size: 28px;
      font-style: normal;
      font-weight: 500;
      line-height: 100%; /* 35.216px */
      letter-spacing: -1.12px;
      background: linear-gradient(91deg, #fff 0.9%, #999 135.14%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;

      @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
        font-size: 35.216px;
        letter-spacing: -1.409px;
      }
    }

    h4 {
      color: #fff;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 100%; /* 14px */
      letter-spacing: 3.04px;
      text-transform: uppercase;
      opacity: 0.7;

      @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
        letter-spacing: 5.04px;
      }
    }
  }
`, em = (0, l.default)(({
        className: e
    }) => {
        let {
            t: r
        } = (0, t.useTranslation)("ring"), {
            width: a
        } = (0, L.useWindowSize)();
        return (0, i.jsx)("div", {
            className: e,
            onClick: e => e.stopPropagation(),
            onKeyDown: e => e.stopPropagation(),
            role: "button",
            tabIndex: 0,
            "aria-labelledby": "sleep-contributor-modal-heading",
            children: (0, i.jsxs)("div", {
                className: "container",
                children: [(0, i.jsxs)("h4", {
                    id: "sleep-contributor-modal-heading",
                    children: [" ", r("ring.bentoSleepSection.sleepContributorsCard.modal.head")]
                }), (0, i.jsx)("h3", {
                    children: r("ring.bentoSleepSection.sleepContributorsCard.modal.subHead")
                }), (0, i.jsx)("div", {
                    className: "modal-items",
                    children: (0, i.jsxs)("div", {
                        className: "item",
                        children: [(0, i.jsx)("p", {
                            className: "text-mid",
                            children: r("ring.bentoSleepSection.sleepContributorsCard.modal.cardA.desc")
                        }), a > 992 ? (0, i.jsx)("div", {
                            className: "img-container",
                            role: "img",
                            "aria-label": "Sleep contributors visualization",
                            children: (0, i.jsx)(v.CustomImage, {
                                src: "web_v2/ring-buy/sleep/svg/flip/sleepContributorFlipA.svg",
                                fill: !0,
                                alt: "",
                                className: "sleep-index",
                                "aria-hidden": "true"
                            })
                        }) : null]
                    })
                })]
            })
        })
    }).withConfig({
        displayName: "SleepContributorModal",
        componentId: "sc-f39b537a-0"
    })
    `
  position: relative;
  width: 89rem;
  margin: auto;
  z-index: 12;
  overflow: hidden;
  font-size: 34px;

  span.bold {
    color: #fff;
    font-weight: 500;
    opacity: 1;
  }

  span.thin {
    color: #fff;
    font-weight: 400;
  }

  & .container {
    margin: auto;
    position: relative;
    border-radius: 24px;
    height: 100%;
    background: #fff;
    display: flex;
    padding: 44px 15.5px 22px;
    margin-bottom: 4vh;
    flex-direction: column;
    align-items: flex-start;
    gap: 11px;
    flex-shrink: 0;
    scroll-behavior: smooth;

    @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
      padding: 40px;
      width: 89rem;
      z-index: 5;
      margin-bottom: 120px;
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
      font-size: 32px;
      font-style: normal;
      font-weight: 500;
      line-height: 100%; /* 35.216px */
      letter-spacing: -1.28px;
      color: #000;

      @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
        font-size: 35.216px;
        letter-spacing: -1.409px;
      }
    }

    h4 {
      color: #000;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 100%; /* 14px */
      letter-spacing: 3.04px;
      text-transform: uppercase;
      opacity: 0.7;

      @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
        font-size: 16px;
        letter-spacing: 5.04px;
      }
    }

    h3,
    h4 {
      @media (max-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
        padding-left: 8.5px;
      }
    }

    .modal-items {
      margin-top: 2.6rem;
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;

      @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
        margin-top: 2.6rem;
        gap: 3.7rem;
      }

      .item {
        overflow: hidden;
        display: flex;
        justify-content: center;
        flex-direction: column;
        border-radius: 2.4rem;
        width: 100%;
        height: 47.2rem;
        border: 1px solid black;
        padding: 1.6rem;
        position: relative;

        @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
          padding: 4rem;
          height: 49.4rem;
        }

        p {
          color: rgba(255, 255, 255, 0.7);
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 130%; /* 20.8px */
          letter-spacing: -0.64px;
          margin: 1.4rem;

          @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
            font-size: 18px;
            margin: 0;
          }

          &.text-left {
            max-width: 100%;

            @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
              max-width: 40%;
            }
          }

          &.text-right {
            color: #000;
            max-width: 100%;
            margin-right: 0;

            @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
              max-width: 40%;
            }
          }

          &.text-mid {
            max-width: 100%;
          }
        }

        &:nth-child(1) {
          gap: 5rem;
          position: relative;
          background: linear-gradient(151deg, #26632c 1.4%, #06270a 123.67%);
          justify-content: space-between;
          align-items: flex-start;
          height: 100%;

          @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
            align-items: center;
            height: 69.2rem;
          }

          .img-container {
            position: relative;
            width: 100%;
            height: 100%;

            img {
              width: 100%;
              height: unset;
              object-fit: contain;
            }
          }
        }

        &:nth-child(2) {
          flex-direction: column-reverse;
          background: #0e0e0e;
          height: 34rem;

          @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
            height: 47.2rem;
            flex-direction: column;
          }

          .img-container {
            position: absolute;
            top: 2%;
            right: 0;
            margin: 0 auto;
            width: calc(100% + 4rem);
            height: 9rem;

            @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
              top: unset;
              bottom: 20%;
              left: 0;
            }

            img {
              width: 100%;
              height: auto;
              object-fit: contain;
            }
          }
        }
      }
    }
  }
`, ep = (0, l.default)(({
        className: e
    }) => {
        let {
            t: r
        } = (0, t.useTranslation)("ring"), {
            width: a
        } = (0, L.useWindowSize)();
        return (0, i.jsx)("div", {
            className: e,
            onClick: e => e.stopPropagation(),
            onKeyDown: e => e.stopPropagation(),
            role: "button",
            tabIndex: 0,
            "aria-labelledby": "sleep-stages-modal-heading",
            children: (0, i.jsxs)("div", {
                className: "container",
                children: [(0, i.jsx)("h4", {
                    id: "sleep-stages-modal-heading",
                    children: r("ring.bentoSleepSection.sleepStagesCard.modal.head")
                }), (0, i.jsx)("h3", {
                    children: r("ring.bentoSleepSection.sleepStagesCard.modal.subHead")
                }), (0, i.jsxs)("div", {
                    className: "modal-items",
                    children: [(0, i.jsxs)("div", {
                        className: "item",
                        children: [(0, i.jsx)("p", {
                            className: "text-mid",
                            children: r("ring.bentoSleepSection.sleepStagesCard.modal.cardA.desc")
                        }), (0, i.jsx)("div", {
                            className: "img-container",
                            role: "img",
                            "aria-label": "Sleep stages visualization",
                            children: (0, i.jsx)(v.CustomImage, {
                                src: "web_v2/ring-buy/sleep/svg/flip/sleepStagesFlipA.svg",
                                fill: !0,
                                alt: "",
                                className: "sleep-index",
                                "aria-hidden": "true"
                            })
                        })]
                    }), (0, i.jsxs)("div", {
                        className: "item",
                        children: [(0, i.jsx)("p", {
                            className: "text-mid",
                            children: r("ring.bentoSleepSection.sleepStagesCard.modal.cardB.desc")
                        }), a > 992 ? (0, i.jsx)("div", {
                            className: "img-container",
                            role: "img",
                            "aria-label": "Sleep stages detailed visualization",
                            children: (0, i.jsx)(v.CustomImage, {
                                src: "web_v2/ring-buy/sleep/svg/flip/sleepStagesFlipBA.svg",
                                fill: !0,
                                alt: "",
                                className: "sleep-index",
                                "aria-hidden": "true"
                            })
                        }) : null]
                    })]
                })]
            })
        })
    }).withConfig({
        displayName: "SleepStagesModal",
        componentId: "sc-95e8b95b-0"
    })
    `
  position: relative;
  width: 89rem;
  margin: auto;
  z-index: 12;
  overflow: hidden;
  font-size: 34px;

  span.bold {
    color: #fff;
    font-weight: 500;
    opacity: 1;
  }

  & .container {
    margin: auto;
    position: relative;
    border-radius: 24px;
    height: 100%;
    background: #fff;
    display: flex;
    padding: 44px 15.5px 22px;
    margin-bottom: 4vh;
    flex-direction: column;
    align-items: flex-start;
    gap: 11px;
    flex-shrink: 0;
    scroll-behavior: smooth;

    @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
      padding: 40px;
      width: 89rem;
      z-index: 5;
      margin-bottom: 120px;
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
      font-size: 32px;
      font-style: normal;
      font-weight: 500;
      line-height: 100%; /* 35.216px */
      letter-spacing: -1.28px;
      color: #000;

      @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
        font-size: 35.216px;
        letter-spacing: -1.409px;
      }
    }

    h4 {
      color: #000;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 100%; /* 14px */
      letter-spacing: 3.04px;
      text-transform: uppercase;
      opacity: 0.7;

      @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
        font-size: 16px;
        letter-spacing: 5.04px;
      }
    }

    h3,
    h4 {
      @media (max-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
        padding-left: 8.5px;
      }
    }

    .modal-items {
      margin-top: 4.1rem;
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 1.6rem;

      @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
        margin-top: 2.6rem;
      }

      .item {
        overflow: hidden;
        display: flex;
        justify-content: space-between;
        border-radius: 2.4rem;
        width: 100%;
        height: 41rem;
        padding: 1.6rem;
        position: relative;

        @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
          padding: 4rem;
          height: 59.4rem;
        }

        p {
          color: rgba(255, 255, 255, 0.7);
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 130%; /* 20.8px */
          letter-spacing: -0.64px;
          margin: 1.4rem;

          @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
            font-size: 18px;
            margin: 0;
          }

          &.text-mid {
            max-width: 100%;
          }
        }

        &:nth-child(1) {
          flex-direction: column;
          background: #000;

          @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
            flex-direction: row;
          }

          .img-container {
            width: 100%;
            margin-bottom: 4rem;
            position: absolute;
            bottom: 0;
            left: 0;
            height: 100%;
            display: flex;
            justify-content: flex-end;

            @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
              height: 29rem;
            }

            img {
              width: 100%;
              height: auto;
              aspect-ratio: 405/208;
              object-fit: contain;
              object-position: bottom;

              @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
                object-fit: cover;
              }
            }
          }
        }

        &:nth-child(2) {
          position: relative;
          background: #eee;
          background-image: url(${(0,er.getCompressedAssetUrl)("/web_v2/ring-buy/sleep/png/flip/sleepStagesFlipBresp.png")});
          background-repeat: no-repeat;
          background-position: -15% bottom;
          background-size: cover;

          @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
            background-image: url(${(0,er.getCompressedAssetUrl)("/web_v2/ring-buy/sleep/png/stagesBg.png")});
          }

          .img-container {
            position: absolute;
            bottom: 13.5rem;
            right: 3rem;
            margin-right: 0;
            width: 39.7rem;
            height: 18.5rem;

            img {
              position: absolute;
              object-fit: contain;
              width: 100%;
              height: auto;
              bottom: 0;
              right: 0;
            }
          }

          p {
            font-style: normal;
            font-weight: 400;
            line-height: 130%; /* 26px */
            letter-spacing: -0.8px;
          }
        }

        &:nth-child(3),
        :nth-child(6) {
          border-radius: 0;
          border: none;
          align-items: center;
          height: 50vh;
          gap: 5%;
          background: #fff;
          padding: 0;
          flex-direction: column;

          @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
            flex-direction: row;
            gap: 10%;
          }
          .img-card {
            width: 100%;
            height: 100%;
            border: 1px solid red;
            border-radius: 2.4rem;
            margin: 0;

            @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
              width: 40%;
            }
          }
        }
      }
    }
  }
`, eg = (0, l.default)(({
        className: e
    }) => {
        let {
            t: r
        } = (0, t.useTranslation)("ring"), {
            width: a
        } = (0, L.useWindowSize)();
        return (0, i.jsx)("div", {
            className: e,
            onClick: e => e.stopPropagation(),
            onKeyDown: e => e.stopPropagation(),
            role: "button",
            tabIndex: 0,
            "aria-labelledby": "sleep-score-modal-heading",
            children: (0, i.jsxs)("div", {
                className: "container",
                children: [(0, i.jsx)("h4", {
                    id: "sleep-score-modal-heading",
                    children: r("ring.bentoSleepSection.sleepCard.modal.head")
                }), (0, i.jsx)("h3", {
                    children: r("ring.bentoSleepSection.sleepCard.modal.subHead")
                }), (0, i.jsx)("div", {
                    className: "modal-items",
                    children: (0, i.jsxs)("div", {
                        className: "item",
                        children: [(0, i.jsxs)("p", {
                            className: "text-mid",
                            children: [r("ring.bentoSleepSection.sleepCard.modal.cardA.descA"), " ", (0, i.jsx)("span", {
                                className: "bold",
                                children: r("ring.bentoSleepSection.sleepCard.modal.cardA.descBold")
                            }), " ", r("ring.bentoSleepSection.sleepCard.modal.cardA.descB")]
                        }), (0, i.jsx)("div", {
                            className: "img-container",
                            role: "img",
                            "aria-label": "Sleep score algorithm visualization",
                            children: a > 992 ? (0, i.jsx)(v.CustomImage, {
                                src: "web_v2/ring-buy/sleep/png/flip/sleepScoreFlipAlg.png",
                                fill: !0,
                                alt: "",
                                className: "sleep-score-modal",
                                "aria-hidden": "true"
                            }) : (0, i.jsx)(v.CustomImage, {
                                src: "web_v2/ring-buy/sleep/png/flip/sleepScoreFlipAresp.png",
                                fill: !0,
                                alt: "",
                                className: "sleep-score-modal",
                                "aria-hidden": "true"
                            })
                        })]
                    })
                })]
            })
        })
    }).withConfig({
        displayName: "SleepScoreModal",
        componentId: "sc-851a2a7d-0"
    })
    `
  position: relative;
  width: 89rem;
  margin: auto;
  z-index: 12;
  overflow: hidden;
  font-size: 34px;

  span.bold {
    color: #fff;
    font-weight: 500;
    opacity: 1;
  }

  & .container {
    margin: auto;
    position: relative;
    border-radius: 24px;
    height: 100%;
    background: #fff;
    display: flex;
    padding: 44px 15.5px 22px;
    margin-bottom: 4vh;
    flex-direction: column;
    align-items: flex-start;
    gap: 11px;
    flex-shrink: 0;
    scroll-behavior: smooth;

    @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
      padding: 40px;
      width: 89rem;
      margin-bottom: 120px;
    }

    h3 {
      font-size: 32px;
      font-style: normal;
      font-weight: 500;
      line-height: 100%; /* 35.216px */
      letter-spacing: -1.28px;
      color: #000;

      @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
        font-size: 35.216px;
        letter-spacing: -1.409px;
      }
    }

    h4 {
      color: #000;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 100%; /* 14px */
      letter-spacing: 3.04px;
      text-transform: uppercase;
      opacity: 0.7;

      @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
        font-size: 16px;
        letter-spacing: 5.04px;
      }
    }

    h3,
    h4 {
      @media (max-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
        padding-left: 8.5px;
      }
    }

    .modal-items {
      margin-top: 4.1rem;
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;

      @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
        margin-top: 2.6rem;
        gap: 3.7rem;
      }

      .item {
        overflow: hidden;
        display: flex;
        justify-content: space-between;
        border-radius: 2.4rem;
        width: 100%;
        height: 57.2rem;
        padding: 1.6rem;
        position: relative;

        @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
          padding: 4rem;
          height: 59.4rem;
        }

        p {
          color: rgba(255, 255, 255, 0.7);
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 130%; /* 20.8px */
          letter-spacing: -0.64px;

          @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
            max-width: 40%;
            letter-spacing: -0.8px;
            font-size: 20px;
          }

          &.text-left {
            max-width: 100%;
            color: #000;
            font-style: normal;
            font-weight: 400;
            line-height: 130%; /* 26px */

            align-self: center;
            vertical-align: center;

            @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
              max-width: 40%;
              letter-spacing: -0.8px;
              font-size: 20px;
            }
          }

          &.text-right {
            color: #000;
            max-width: 100%;
            margin-right: 0;

            @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
              max-width: 40%;
            }
          }

          &.text-mid {
            max-width: 100%;
          }
        }

        &:nth-child(1) {
          height: 81rem;
          flex-direction: column;
          background: #000;

          @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
            flex-direction: row;
            height: 74rem;
          }

          p {
            margin-top: 0;

            @media (max-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
              color: rgba(255, 255, 255, 0.7);
              font-size: 16px;
              font-style: normal;
              font-weight: 400;
              line-height: 130%; /* 20.8px */
              letter-spacing: -0.64px;
              margin: 1.4rem;
            }
          }

          .img-container {
            width: 100%;
            margin-bottom: 0;
            position: absolute;
            bottom: 0;
            left: 0;
            height: 62%;
            display: flex;
            justify-content: flex-end;

            @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
              width: 81rem;
              height: 41.6rem;
            }

            img {
              width: 100%;
              height: auto;
              aspect-ratio: 405/208;
              object-fit: cover;
            }
          }
        }

        &:nth-child(2) {
          position: relative;
          background: #eee;
          height: 43.4rem;

          @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
            height: 49.4rem;
          }

          p {
            color: #000;
            margin-top: 4rem;

            @media (max-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
              font-size: 16px;
              font-style: normal;
              font-weight: 400;
              line-height: 130%; /* 20.8px */
              letter-spacing: -0.64px;
              margin: 1.4rem;
            }
          }

          .img-container {
            position: absolute;
            bottom: -10%;
            right: 0;
            margin-right: 0;
            width: 100%;
            height: 62%;

            @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
              right: 2.6rem;
              margin-right: 0;
              width: 38.3rem;
              height: 100%;
              bottom: 0;
            }

            img {
              // position: absolute;
              object-position: bottom;
              object-fit: contain;
              width: 100%;
              aspect-ratio: 383/453;
              height: auto;
              bottom: 0;
              right: 0;
            }
          }
        }

        &:nth-child(3),
        :nth-child(6) {
          border-radius: 0;
          border: none;
          align-items: center;
          height: 50vh;
          gap: 5%;
          background: #fff;
          padding: 0;
          flex-direction: column;

          @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
            flex-direction: row;
            gap: 10%;
          }
          .img-card {
            width: 100%;
            height: 100%;
            border: 1px solid red;
            border-radius: 2.4rem;
            margin: 0;

            @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
              width: 40%;
            }
          }
        }
      }
    }
  }
`, ex = (0, l.default)(({
        className: e,
        handleSleepScore: r,
        handleSleepStage: a,
        handleSleepContributor: n,
        handleAdvancedMetrics: s
    }) => {
        let {
            t: o
        } = (0, t.useTranslation)("ring");
        return (0, i.jsxs)("div", {
            className: e,
            children: [(0, i.jsxs)("div", {
                className: "head",
                children: [(0, i.jsxs)("h2", {
                    children: [o("ring.bentoSleepSection.head.a"), (0, i.jsx)("br", {}), o("ring.bentoSleepSection.head.b")]
                }), (0, i.jsx)("p", {
                    children: o("ring.bentoSleepSection.subhead")
                })]
            }), (0, i.jsx)("div", {
                className: "sleep-items-container",
                children: (0, i.jsxs)("div", {
                    className: "items",
                    children: [(0, i.jsxs)("div", {
                        className: "item score",
                        children: [(0, i.jsxs)("div", {
                            className: "content",
                            children: [(0, i.jsxs)("h4", {
                                children: [" ", o("ring.bentoSleepSection.sleepCard.title")]
                            }), (0, i.jsxs)("h3", {
                                children: [" ", o("ring.bentoSleepSection.sleepCard.subtitle")]
                            }), (0, i.jsx)("div", {
                                className: "img-container",
                                children: (0, i.jsx)(v.CustomImage, {
                                    src: "web_v2/ring-buy/sleep/svg/sleepIndexResp.svg",
                                    fill: !0,
                                    alt: "sleep-index",
                                    className: "sleep-index"
                                })
                            })]
                        }), (0, i.jsx)("button", {
                            className: "expand",
                            onClick: r,
                            children: ee
                        })]
                    }), (0, i.jsxs)("div", {
                        className: "item contributors",
                        children: [(0, i.jsxs)("div", {
                            className: "content",
                            children: [(0, i.jsxs)("h4", {
                                children: [" ", o("ring.bentoSleepSection.sleepContributorsCard.title")]
                            }), (0, i.jsxs)("h3", {
                                children: [o("ring.bentoSleepSection.sleepContributorsCard.subtitleA"), (0, i.jsx)("br", {}), " ", o("ring.bentoSleepSection.sleepContributorsCard.subtitleB")]
                            }), (0, i.jsx)("div", {
                                className: "img-container",
                                children: (0, i.jsx)(v.CustomImage, {
                                    src: "web_v2/ring-buy/sleep/png/contributor_res.png",
                                    fill: !0,
                                    alt: "contributor-img",
                                    className: "contributorImg"
                                })
                            })]
                        }), (0, i.jsx)("button", {
                            className: "expand",
                            onClick: n,
                            children: X
                        })]
                    }), (0, i.jsxs)("div", {
                        className: "item stages",
                        children: [(0, i.jsxs)("div", {
                            className: "content",
                            children: [(0, i.jsx)("h4", {
                                children: o("ring.bentoSleepSection.sleepStagesCard.title")
                            }), (0, i.jsx)("h3", {
                                children: o("ring.bentoSleepSection.sleepStagesCard.subtitleA")
                            }), (0, i.jsx)("div", {
                                className: "sleep-graph",
                                children: et
                            })]
                        }), (0, i.jsx)("button", {
                            className: "expand",
                            onClick: a,
                            children: ee
                        })]
                    }), (0, i.jsxs)("div", {
                        className: "item metrics",
                        children: [(0, i.jsxs)("div", {
                            className: "content",
                            children: [(0, i.jsx)("h4", {
                                children: o("ring.bentoSleepSection.advancedMetricsCard.title")
                            }), (0, i.jsxs)("h3", {
                                children: [o("ring.bentoSleepSection.advancedMetricsCard.subtitleA"), (0, i.jsx)("br", {}), " ", o("ring.bentoSleepSection.advancedMetricsCard.subtitleB")]
                            })]
                        }), (0, i.jsx)("div", {
                            className: "img-container",
                            children: (0, i.jsx)(v.CustomImage, {
                                src: "web_v2/ring-buy/sleep/png/lonngevityBg.png",
                                fill: !0,
                                alt: "longevity-img",
                                className: "longevity"
                            })
                        }), (0, i.jsx)("button", {
                            className: "expand",
                            onClick: s,
                            children: ee
                        })]
                    })]
                })
            })]
        })
    }).withConfig({
        displayName: "MobileSleepComponent",
        componentId: "sc-e0354e5d-0"
    })
    `
  position: relative;
  width: 100%;
  overflow: hidden;
  padding: 9rem 0;

  .head {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    h2 {
      color: #000;
      max-width: 15ch;
      font-size: 32px;
      font-style: normal;
      font-weight: 500;
      line-height: 100%; /* 48px */
      letter-spacing: -1.28px;
    }

    p {
      color: #000;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 130%; /* 26px */
      letter-spacing: -0.64px;
    }
  }

  .sleep-items-container {
    margin: 6.4rem auto 4.2rem;
    overflow: auto;
    ${g.hideScrollbar}

    .items {
      position: relative;
      display: inline-flex;
      flex-direction: row;
      gap: 1.2rem;
      flex-shrink: 0;

      .item {
        border-radius: 24px;
        position: relative;
        width: 27.8rem;
        padding: 3.6rem 2.4rem;
        height: 44.7rem;
        overflow: hidden;

        & .content {
          display: flex;
          flex-direction: column;
          gap: 0.9rem;
        }
      }

      .score {
        & .content {
          text-align: left;
        }
        background-image: url(${(0,er.getCompressedAssetUrl)("/web_v2/ring-buy/sleep/png/sleepScoreBg.png/w_900")});
        background-repeat: no-repeat;
        background-position: bottom;
        background-size: cover;

        .img-container {
          margin: 60px auto 9px;
          position: relative;
          width: 22.3rem;
          height: 17.1rem;

          img {
            width: 100%;
            height: unset !important;
            aspect-ratio: 226/172;
          }
        }
      }

      .contributors {
        background: #eee;

        & .content {
          height: 100%;
          justify-content: flex-end;
          h4 {
            color: #000;
            opacity: 0.7;
          }

          h3 {
            background: linear-gradient(91deg, #000 0.9%, #999 135.14%);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        }

        .img-container {
          width: 100%;
          margin-bottom: 0;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 45.7rem;

          img {
            object-position: center 0;
            object-fit: contain;
            height: unset !important;
          }
        }
      }

      .stages {
        background: #000;

        .sleep-graph {
          svg {
            width: 100%;
            height: auto;
            position: absolute;
            left: 0;
            bottom: 3.5rem;
          }
        }
      }

      .metrics {
        border-radius: 24px;

        h3,
        h4 {
          position: relative;
          z-index: 2;
          text-align: left;
        }

        h4 {
          color: #fff;
          opacity: 0.7;
        }

        h3 {
          color: #fff;
          background: transparent !important;
          background-clip: unset !important;
          -webkit-background-clip: unset !important;
          -webkit-text-fill-color: unset !important;
        }

        .img-container {
          z-index: 1;
          width: 100%;
          margin-bottom: 0;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;

          img {
            object-position: center 0;
            object-fit: contain;
            height: unset !important;
          }
        }
      }
    }
  }
`, eu = (0, l.default)(({
        className: e,
        handleSleepScore: r,
        handleSleepStage: a,
        handleSleepContributor: n,
        handleAdvancedMetrics: s
    }) => {
        let {
            t: o
        } = (0, t.useTranslation)("ring");
        return (0, i.jsxs)("section", {
            className: e,
            "aria-labelledby": "sleep-section-heading",
            "aria-label": "Sleep Features Overview",
            children: [(0, i.jsxs)("header", {
                className: "top",
                children: [(0, i.jsxs)("h2", {
                    id: "sleep-section-heading",
                    children: [o("ring.bentoSleepSection.head.a"), (0, i.jsx)("br", {}), o("ring.bentoSleepSection.head.b")]
                }), (0, i.jsx)("p", {
                    children: o("ring.bentoSleepSection.subhead")
                })]
            }), (0, i.jsxs)("article", {
                className: "top-left",
                role: "region",
                "aria-labelledby": "sleep-score-heading",
                children: [(0, i.jsxs)("div", {
                    className: "content",
                    children: [(0, i.jsx)("h4", {
                        id: "sleep-score-heading",
                        children: o("ring.bentoSleepSection.sleepCard.title")
                    }), (0, i.jsx)("h3", {
                        children: o("ring.bentoSleepSection.sleepCard.subtitle")
                    }), (0, i.jsx)("div", {
                        className: "img-container",
                        role: "img",
                        "aria-label": "Sleep score visualization",
                        children: (0, i.jsx)(v.CustomImage, {
                            src: "web_v2/ring-buy/sleep/svg/sleepIndex.svg",
                            fill: !0,
                            alt: "",
                            className: "sleep-index",
                            "aria-hidden": "true"
                        })
                    })]
                }), (0, i.jsxs)("button", {
                    className: "expand",
                    onClick: r,
                    "aria-label": "Learn more about sleep score",
                    "aria-describedby": "sleep-score-heading",
                    type: "button",
                    children: [(0, i.jsx)("span", {
                        className: "sr-only",
                        children: "Expand sleep score information"
                    }), ee]
                })]
            }), (0, i.jsxs)("article", {
                className: "top-right",
                role: "region",
                "aria-labelledby": "sleep-contributors-heading",
                children: [(0, i.jsxs)("div", {
                    className: "content",
                    children: [(0, i.jsx)("h4", {
                        id: "sleep-contributors-heading",
                        children: o("ring.bentoSleepSection.sleepContributorsCard.title")
                    }), (0, i.jsxs)("h3", {
                        children: [o("ring.bentoSleepSection.sleepContributorsCard.subtitleA"), " ", (0, i.jsx)("br", {}), " ", o("ring.bentoSleepSection.sleepContributorsCard.subtitleB")]
                    }), (0, i.jsx)("div", {
                        className: "img-container",
                        role: "img",
                        "aria-label": "Sleep contributors visualization",
                        children: (0, i.jsx)(v.CustomImage, {
                            src: "web_v2/ring-buy/sleep/png/sleepContrbutorAsset.png",
                            fill: !0,
                            alt: "",
                            className: "contributorImg",
                            "aria-hidden": "true"
                        })
                    })]
                }), (0, i.jsxs)("button", {
                    className: "expand dark-hover",
                    onClick: n,
                    "aria-label": "Learn more about sleep contributors",
                    "aria-describedby": "sleep-contributors-heading",
                    type: "button",
                    children: [(0, i.jsx)("span", {
                        className: "sr-only",
                        children: "Expand sleep contributors information"
                    }), X]
                })]
            }), (0, i.jsxs)("article", {
                className: "bottom-left",
                role: "region",
                "aria-labelledby": "advanced-metrics-heading",
                children: [(0, i.jsxs)("div", {
                    className: "content",
                    children: [(0, i.jsx)("h4", {
                        id: "advanced-metrics-heading",
                        children: o("ring.bentoSleepSection.advancedMetricsCard.title")
                    }), (0, i.jsxs)("h3", {
                        children: [o("ring.bentoSleepSection.advancedMetricsCard.subtitleA"), " ", (0, i.jsx)("br", {}), " ", o("ring.bentoSleepSection.advancedMetricsCard.subtitleB")]
                    })]
                }), (0, i.jsx)("div", {
                    className: "img-container",
                    role: "img",
                    "aria-label": "Advanced sleep metrics visualization",
                    children: (0, i.jsx)(v.CustomImage, {
                        src: "web_v2/ring-buy/sleep/png/advMbg.png",
                        fill: !0,
                        alt: "",
                        className: "metrics-bg",
                        "aria-hidden": "true"
                    })
                }), (0, i.jsxs)("button", {
                    className: "expand",
                    onClick: s,
                    "aria-label": "Learn more about advanced sleep metrics",
                    "aria-describedby": "advanced-metrics-heading",
                    type: "button",
                    children: [(0, i.jsx)("span", {
                        className: "sr-only",
                        children: "Expand advanced metrics information"
                    }), ee]
                })]
            }), (0, i.jsxs)("article", {
                className: "bottom-right",
                role: "region",
                "aria-labelledby": "sleep-stages-heading",
                children: [(0, i.jsxs)("div", {
                    className: "content",
                    children: [(0, i.jsx)("h4", {
                        id: "sleep-stages-heading",
                        children: o("ring.bentoSleepSection.sleepStagesCard.title")
                    }), (0, i.jsx)("h3", {
                        children: o("ring.bentoSleepSection.sleepStagesCard.subtitleA")
                    }), (0, i.jsxs)("div", {
                        className: "sleep-graph",
                        role: "img",
                        "aria-label": "Sleep stages graph visualization",
                        children: [(0, i.jsx)("span", {
                            className: "sr-only",
                            children: "Sleep stages graph showing different sleep phases"
                        }), ei]
                    })]
                }), (0, i.jsxs)("ul", {
                    className: "points",
                    "aria-label": "Sleep stages legend",
                    children: [(0, i.jsxs)("li", {
                        className: "point",
                        children: [(0, i.jsx)("span", {
                            className: "sr-only",
                            children: "Stage: "
                        }), o("ring.bentoSleepSection.sleepStagesCard.bulletA")]
                    }), (0, i.jsxs)("li", {
                        className: "point",
                        children: [(0, i.jsx)("span", {
                            className: "sr-only",
                            children: "Stage: "
                        }), o("ring.bentoSleepSection.sleepStagesCard.bulletB")]
                    }), (0, i.jsxs)("li", {
                        className: "point",
                        children: [(0, i.jsx)("span", {
                            className: "sr-only",
                            children: "Stage: "
                        }), o("ring.bentoSleepSection.sleepStagesCard.bulletC")]
                    }), (0, i.jsxs)("li", {
                        className: "point",
                        children: [(0, i.jsx)("span", {
                            className: "sr-only",
                            children: "Stage: "
                        }), o("ring.bentoSleepSection.sleepStagesCard.bulletD")]
                    })]
                }), (0, i.jsxs)("button", {
                    className: "expand",
                    onClick: a,
                    "aria-label": "Learn more about sleep stages",
                    "aria-describedby": "sleep-stages-heading",
                    type: "button",
                    children: [(0, i.jsx)("span", {
                        className: "sr-only",
                        children: "Expand sleep stages information"
                    }), ee]
                })]
            })]
        })
    }).withConfig({
        displayName: "DesktopSleepComponent",
        componentId: "sc-1fba482b-0"
    })
    `
  /* Screen reader only text */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  /* Focus styles for better keyboard navigation */
  button:focus-visible {
    outline: 2px solid #007bff;
    outline-offset: 2px;
    border-radius: 50%;
  }

  /* Ensure proper focus management */
  button.expand {
    &:focus-visible {
      outline: 2px solid #007bff;
      outline-offset: 2px;
      border-radius: 50%;
    }
  }

  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    position: relative;
    display: grid;
    grid-template-columns: repeat(11, 1fr);
    grid-template-rows: 18rem 53rem 53rem;
    justify-content: center;
    gap: 1.2rem 1.4rem;
    height: 100%;
    padding: 48px 12px;
  }

  .top {
    grid-column: 1 / span 11;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    margin-bottom: 4.2rem;

    @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
      gap: 8.1%;
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: 0;
    }

    h2 {
      color: #000;
      max-width: 15ch;
      font-size: 32px;
      font-style: normal;
      font-weight: 500;
      line-height: 100%; /* 48px */
      letter-spacing: -1.28px;

      @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
        font-size: 48px;
        letter-spacing: -1.92px;
      }
    }

    p {
      color: #000;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 130%; /* 26px */
      letter-spacing: -0.64px;
      @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
        max-width: 40ch;
        font-size: 20px;
        letter-spacing: -0.8px;
      }
    }
  }

  .top-left {
    position: relative;
    text-align: center;
    border-radius: 24px;
    grid-row: 2 / 3;
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: cover;
    background-image: url(${(0,er.getCompressedAssetUrl)("/web_v2/ring-buy/sleep/png/sleepScoreBg.png/w_1200")});
    padding: 3.6rem 2.4rem;
    grid-column: 1 / span 6;

    .img-container {
      position: relative;
      margin: 63px auto 9px;
      width: 38.6rem;
      height: 29.7rem;

      img {
        width: 100%;
        height: unset !important;
        aspect-ratio: 391/299;
      }
    }

    h3 {
      margin: auto;
    }
  }

  .top-right {
    position: relative;
    border-radius: 24px;
    background: #eee;
    overflow: hidden;
    padding: 3.6rem 2.4rem;
    grid-column: 7 / span 5;
    grid-row: 2 / 3;

    & .content {
      height: 100%;
      justify-content: flex-end;
      align-items: center;

      h4 {
        color: #000;
        opacity: 0.7;
      }

      h3 {
        color: #000;
        background: transparent !important;
        text-align: center;
        background-clip: unset !important;
        -webkit-background-clip: unset !important;
        -webkit-text-fill-color: unset !important;
      }
    }
    .img-container {
      position: absolute;
      margin: 0 auto;
      top: -2%;
      left: 5%;
      width: 90%;
      height: 38.9rem;

      img {
        width: 100%;
        height: auto;
        object-position: center 0;
        object-fit: contain;
      }
    }
  }

  .bottom-left {
    position: relative;
    padding: 3.2rem 2.4rem 0;
    grid-column: 1 / span 11;
    grid-row: 4 / 5;
    border-radius: 24px;
    background: #323232;
    overflow: hidden;
    background: radial-gradient(
      51.26% 89.52% at 90.25% 67.06%,
      #4f3d44 0%,
      #593833 100%
    );
    @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
      padding: 3.6rem 2.4rem 0;
      grid-column: 1 / span 4;
      grid-row: 3 / 4;
    }

    .img-container {
      position: absolute;
      left: 0;
      bottom: -10px;
      width: 100%;
      height: 100%;

      @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
        // bottom: 0;
      }

      img {
        width: 100%;
        height: auto;
        object-fit: contain;
        object-position: bottom;
      }
    }

    .mask-container {
      position: absolute;
      margin-left: calc(50% - 16.25rem);
      left: 0;
      bottom: 40%;
      width: 32.5rem;
      height: 100%;

      img {
        width: 100%;
        height: auto;
        aspect-ratio: 325/184;
        object-fit: contain;
        object-position: bottom;
      }
    }
  }

  .bottom-right {
    position: relative;
    border-radius: 24px;
    background: #000;
    overflow: hidden;
    padding: 3.6rem 2.4rem;
    grid-column: 5 / span 7;
    grid-row: 3 / span 1;

    h3 {
      width: 80%;
    }

    svg {
      width: 100%;
      height: auto;
      position: absolute;
      left: 0;
      bottom: 10.5rem;
    }

    .points {
      position: absolute;
      bottom: 5.4rem;
      margin: 0 auto;
      display: flex;
      gap: 4.7rem;
      left: 0;
      width: 100%;
      justify-content: center;
      align-items: center;
      color: rgba(255, 255, 255, 0.5);
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 16px; /* 100% */
      letter-spacing: -0.16px;
      text-transform: uppercase;
      list-style: none;
      padding: 0;
      margin: 0;

      .point {
        display: flex;
        align-items: center;

        &::before {
          display: inline-block;
          content: '';
          margin: 0 0.8rem;
          width: 1.3rem;
          height: 1.3rem;
          border-radius: 50%;
          // overflow: hidden;
          background: #fff;
          flex-shrink: 0;
        }

        &:nth-child(2)::before {
          background: #f973fe;
        }

        &:nth-child(3)::before {
          background: #a34dcc;
        }

        &:nth-child(4)::before {
          background: #4d269b;
        }
      }
    }

    .expand > svg {
      bottom: 0;
    }
  }

  button.dark-hover {
    &:hover {
      circle {
        fill: #000;
      }

      path {
        fill: white;
      }
    }
  }

  button.expand {
    &:hover {
      circle {
        fill-opacity: 1;
      }
    }
  }

  /* High contrast mode support */
  @media (prefers-contrast: high) {
    button.expand {
      border: 2px solid currentColor;
    }

    .points .point::before {
      border: 1px solid currentColor;
    }
  }

  /* Reduced motion support */
  @media (prefers-reduced-motion: reduce) {
    button.expand:focus-visible {
      outline-offset: 1px;
    }
  }
`, ef = (0, l.default)(({
        className: e
    }) => {
        let {
            t: r
        } = (0, t.useTranslation)("ring"), {
            width: a
        } = (0, L.useWindowSize)();
        return (0, i.jsx)("div", {
            className: e,
            onClick: e => e.stopPropagation(),
            onKeyDown: e => e.stopPropagation(),
            role: "button",
            tabIndex: 0,
            "aria-labelledby": "advanced-metrics-modal-heading",
            children: (0, i.jsxs)("div", {
                className: "container",
                children: [(0, i.jsx)("h4", {
                    id: "advanced-metrics-modal-heading",
                    children: r("ring.bentoSleepSection.advancedMetricsCard.modal.head")
                }), (0, i.jsx)("h3", {
                    children: r("ring.bentoSleepSection.advancedMetricsCard.modal.subHead")
                }), (0, i.jsx)("p", {
                    className: "description",
                    children: r("ring.bentoSleepSection.advancedMetricsCard.modal.description")
                }), (0, i.jsxs)("div", {
                    className: "modal-items",
                    children: [(0, i.jsxs)("div", {
                        className: "item",
                        children: [(0, i.jsxs)("h5", {
                            children: [r("ring.bentoSleepSection.advancedMetricsCard.modal.cardA.title"), " "]
                        }), (0, i.jsxs)("p", {
                            className: "text-mid",
                            children: [r("ring.bentoSleepSection.advancedMetricsCard.modal.cardA.descA"), " ", (0, i.jsx)("span", {
                                className: "thin",
                                children: r("ring.bentoSleepSection.advancedMetricsCard.modal.cardA.descThin")
                            }), " ", r("ring.bentoSleepSection.advancedMetricsCard.modal.cardA.descB")]
                        }), (0, i.jsx)("div", {
                            className: "img-container",
                            role: "img",
                            "aria-label": "Advanced metrics visualization",
                            children: a > 992 ? (0, i.jsx)(v.CustomImage, {
                                src: "web_v2/ring-buy/sleep/png/flip/advancedMetricsFlipAlg.png",
                                fill: !0,
                                alt: "",
                                className: "sleep-index",
                                "aria-hidden": "true"
                            }) : (0, i.jsx)(v.CustomImage, {
                                src: "web_v2/ring-buy/sleep/png/flip/metricsFlipAresp.png",
                                fill: !0,
                                alt: "",
                                className: "sleep-index",
                                "aria-hidden": "true"
                            })
                        })]
                    }), (0, i.jsxs)("div", {
                        className: "item",
                        children: [(0, i.jsx)("h5", {
                            children: r("ring.bentoSleepSection.advancedMetricsCard.modal.cardB.title")
                        }), (0, i.jsx)("p", {
                            className: "text-mid",
                            children: r("ring.bentoSleepSection.advancedMetricsCard.modal.cardB.desc")
                        }), (0, i.jsx)("div", {
                            className: "img-container",
                            role: "img",
                            "aria-label": "Morning alertness visualization",
                            children: a > 992 ? (0, i.jsx)(v.CustomImage, {
                                src: "web_v2/ring-buy/sleep/svg/flip/advancedMetricsFlipC.svg",
                                fill: !0,
                                alt: "",
                                className: "advanced-metrics-morning-alertness",
                                "aria-hidden": "true"
                            }) : null
                        })]
                    }), (0, i.jsxs)("div", {
                        className: "item",
                        children: [(0, i.jsx)("h5", {
                            children: r("ring.bentoSleepSection.advancedMetricsCard.modal.cardC.title")
                        }), (0, i.jsx)("p", {
                            className: a > 992 ? "text-right" : "text-mid",
                            children: r("ring.bentoSleepSection.advancedMetricsCard.modal.cardC.desc")
                        }), (0, i.jsx)("div", {
                            className: "img-container",
                            role: "img",
                            "aria-label": "Advanced metrics detailed visualization",
                            children: a > 992 ? (0, i.jsx)(v.CustomImage, {
                                src: "web_v2/ring-buy/sleep/svg/flip/advancedMetricsFlipE.svg",
                                fill: !0,
                                alt: "",
                                className: "advanced-metrics-morning-alertness",
                                "aria-hidden": "true"
                            }) : null
                        })]
                    })]
                })]
            })
        })
    }).withConfig({
        displayName: "AdvancedMetricsModal",
        componentId: "sc-3b14a4b7-0"
    })
    `
  position: relative;
  width: 89rem;
  margin: auto;
  z-index: 12;
  overflow: hidden;
  font-size: 34px;

  & .container {
    margin: auto;
    position: relative;
    border-radius: 24px;
    height: 100%;
    background: #fff;
    display: flex;
    padding: 44px 15.5px 22px;
    margin-bottom: 4vh;
    flex-direction: column;
    align-items: flex-start;
    gap: 11px;
    flex-shrink: 0;
    scroll-behavior: smooth;

    @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
      padding: 40px;
      width: 89rem;
      z-index: 5;
      margin-bottom: 120px;
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
      font-size: 32px;
      font-style: normal;
      font-weight: 500;
      line-height: 100%; /* 35.216px */
      letter-spacing: -1.28px;
      color: #000;

      @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
        font-size: 35.216px;
        letter-spacing: -1.409px;
      }
    }

    h4 {
      color: #000;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 100%; /* 14px */
      letter-spacing: 3.04px;
      text-transform: uppercase;
      opacity: 0.7;

      @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
        font-size: 16px;
        letter-spacing: 5.04px;
      }
    }

    h3,
    h4,
    p.description {
      @media (max-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
        padding-left: 8.5px;
      }
    }

    p.description {
      color: #000;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 130%; /* 23.4px */
      letter-spacing: -0.72px;
    }

    .modal-items {
      margin-top: 4.1rem;
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 1.6rem;

      @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
        margin-top: 2.6rem;
      }

      .item {
        overflow: hidden;
        display: flex;
        justify-content: space-between;
        border-radius: 2.4rem;
        width: 100%;
        height: 45.2rem;
        padding: 1.6rem;
        position: relative;

        @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
          padding: 4rem;
          height: 59.4rem;
        }

        h5 {
          color: #fff;
          font-style: normal;
          font-weight: 600;
          line-height: 130%; /* 26px */
          font-size: 20px;
          letter-spacing: -0.8px;

          @media (max-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
            margin: 1.4rem 1.4rem 0;
            font-size: 16px;
            letter-spacing: -0.6px;
          }
        }

        p {
          opacity: 0.8;
          color: rgba(255, 255, 255, 0.7);
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 130%; /* 20.8px */
          letter-spacing: -0.64px;
          margin: 0 1.4rem 1.4rem;

          @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
            font-size: 18px;
            margin: 0;
          }

          &.text-right {
            max-width: 100%;
            margin-right: 0;
          }

          &.text-mid {
            max-width: 100%;
          }
        }

        &:nth-child(1) {
          justify-content: flex-start;
          flex-direction: column;
          gap: 0.2rem;
          background: #121212;
          height: 52.9rem;

          @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
            height: 59.4rem;
          }

          span.thin {
            color: #fff;
            font-weight: 400;
            opacity: 1;
          }

          .img-container {
            width: 100%;
            position: absolute;
            bottom: 0;
            left: 0;
            height: 100%;
            display: flex;
            justify-content: flex-end;

            img {
              width: 100%;
              height: auto;
              object-fit: contain;
              object-position: bottom;
            }
          }
        }

        &:nth-child(2) {
          background-image: url(${(0,er.getCompressedAssetUrl)("/web_v2/ring-buy/sleep/png/flip/metricsFlipBresp.png")});
          background-repeat: no-repeat;
          background-position: bottom;
          background-size: cover;
          justify-content: flex-start;
          flex-direction: column;
          gap: 0.2rem;

          @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
            background-image: url(${(0,er.getCompressedAssetUrl)("/web_v2/ring-buy/sleep/png/flip/advancedMetricsFlipBlg.png")});
          }

          .img-container {
            width: 29.6rem;
            position: absolute;
            bottom: 7rem;
            left: 4rem;
            height: 100%;
            display: flex;
            justify-content: flex-end;

            img {
              width: 100%;
              height: auto;
              object-fit: contain;
              object-position: bottom;
            }
          }
        }

        &:nth-child(3) {
          background-image: url(${(0,er.getCompressedAssetUrl)("/web_v2/ring-buy/sleep/png/flip/metricsFlipCresp.png")});
          background-repeat: no-repeat;
          background-position: bottom;
          background-size: cover;
          justify-content: flex-start;
          align-items: flex-start;
          flex-direction: column;
          gap: 0.2rem;

          @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
            align-items: flex-end;
            background-image: url(${(0,er.getCompressedAssetUrl)("/web_v2/ring-buy/sleep/png/flip/advancedMetricsFlipDlg.png")});
          }

          h5 {
            width: 47%;
          }

          p {
            @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
              width: 47%;
            }
          }

          .img-container {
            width: 33.6rem;
            position: absolute;
            bottom: 8rem;
            right: 4rem;
            height: 47%;
            display: flex;
            justify-content: flex-end;

            img {
              width: 100%;
              height: auto;
              object-fit: contain;
              //   object-position: bottom 50%;
            }
          }
        }
      }
    }
  }
`, eb = (0, l.default)(({
        className: e,
        htmlId: t
    }) => {
        let {
            width: r
        } = (0, L.useWindowSize)(), s = (0, a.useContext)(ec.MagicModalNewContext), o = () => {
            n.default.track("sleep score modal - CLICK"), s.set((0, i.jsx)(eg, {})), s.show()
        }, l = () => {
            n.default.track("sleep stages modal - CLICK"), s.set((0, i.jsx)(ep, {})), s.show()
        }, c = () => {
            n.default.track("sleep contributor modal - CLICK"), s.set((0, i.jsx)(em, {})), s.show()
        }, d = () => {
            n.default.track("advanced modal - CLICK"), s.set((0, i.jsx)(ef, {})), s.show()
        }, h = (0, a.useRef)(null);
        return (0, i.jsx)("section", {
            className: e,
            id: t,
            ref: h,
            children: (0, i.jsx)(y.Container, {
                children: r > 992 ? (0, i.jsx)(eu, {
                    handleSleepScore: o,
                    handleSleepStage: l,
                    handleSleepContributor: c,
                    handleAdvancedMetrics: d
                }) : (0, i.jsx)(ex, {
                    handleSleepScore: o,
                    handleSleepStage: l,
                    handleSleepContributor: c,
                    handleAdvancedMetrics: d
                })
            })
        })
    }).withConfig({
        displayName: "UnderstandYourSleep",
        componentId: "sc-c13763f7-0"
    })
    `
  position: relative;
  background: #fff;

  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    width: 100vw;
    height: 100%;
    background: #fff;
    overflow: hidden;
    ${Q.SectionPadding}
  }

  button {
    position: absolute;
    bottom: 1.4rem;
    right: 1.4rem;
    background: none;
    border: none;
    width: 4rem;
    height: 4rem;
    z-index: 1;
  }

  & .content {
    display: flex;
    flex-direction: column;
    gap: 1.15rem;

    h3 {
      font-size: 28px;
      font-style: normal;
      font-weight: 500;
      line-height: 100%; /* 35.216px */
      letter-spacing: -1.12px;
      background: linear-gradient(91deg, #fff 0.9%, #999 135.14%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;

      @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
        font-size: 35.216px;
        letter-spacing: -1.409px;
      }
    }

    h4 {
      color: #fff;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 100%; /* 14px */
      letter-spacing: 3.04px;
      text-transform: uppercase;
      opacity: 0.7;

      @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
        letter-spacing: 5.04px;
      }
    }
  }
`, ej = (0, l.default)(({
        className: e,
        data: r,
        selectedActivityTrackerId: a
    }) => {
        let {
            t: n
        } = (0, t.useTranslation)("ring");
        return (0, i.jsx)("table", {
            className: e,
            children: (0, i.jsxs)("tbody", {
                children: [(0, i.jsxs)("tr", {
                    className: "top-border",
                    children: [(0, i.jsx)("td", {
                        className: "property property-head",
                        role: "columnheader",
                        children: (0, i.jsx)("span", {
                            className: " ",
                            children: n("ring.comparison.feature.form.head")
                        })
                    }), (0, i.jsx)("td", {
                        className: ""
                    })]
                }), (0, i.jsx)("tr", {
                    className: "",
                    children: (0, i.jsx)("td", {
                        className: "property ",
                        role: "rowheader",
                        children: (0, i.jsx)("span", {
                            className: " ",
                            children: n("ring.comparison.feature.form.categoryA")
                        })
                    })
                }), (0, i.jsxs)("tr", {
                    children: [(0, i.jsx)("td", {
                        children: (0, i.jsxs)("div", {
                            className: "content",
                            children: [(0, i.jsx)("div", {
                                className: "img-container",
                                children: (0, i.jsx)(v.CustomImage, {
                                    src: "web_v2/ring-buy/comparison/uh_weight.svg",
                                    width: 42,
                                    height: 42,
                                    alt: "weight-icon",
                                    className: "weight-icon"
                                })
                            }), (0, i.jsxs)("span", {
                                className: "bold-text",
                                children: [" ", n("ring.comparison.uhRing.form.weight.bold")]
                            }), (0, i.jsx)("span", {
                                className: "sub-bold-text",
                                children: n("ring.comparison.uhRing.form.weight.sub")
                            }), (0, i.jsx)("span", {
                                className: "thin-text",
                                children: n("ring.comparison.uhRing.form.weight.thin")
                            })]
                        })
                    }), (0, i.jsx)("td", {
                        children: (0, i.jsxs)("div", {
                            className: "content",
                            children: [(0, i.jsx)(v.CustomImage, {
                                src: r[a] ? .weightIcon ? r[a].weightIcon : "",
                                width: 0 == a ? 36 : 42,
                                height: 0 == a ? 36 : 42,
                                alt: "weight-icon",
                                className: "weight-icon"
                            }), (0, i.jsx)("span", {
                                className: "bold-text",
                                children: r[a] ? .weight ? r[a].weight : ""
                            }), (0, i.jsx)("span", {
                                className: "sub-bold-text",
                                children: r[a] ? .weightSub ? r[a].weightSub : ""
                            }), (0, i.jsx)("span", {
                                className: "thin-text",
                                children: r[a] ? .weightThin ? r[a].weightThin : ""
                            })]
                        })
                    })]
                }), (0, i.jsx)("tr", {
                    className: "",
                    children: (0, i.jsx)("td", {
                        className: "property ",
                        children: (0, i.jsx)("span", {
                            className: " ",
                            children: n("ring.comparison.feature.form.categoryB")
                        })
                    })
                }), (0, i.jsxs)("tr", {
                    children: [(0, i.jsx)("td", {
                        children: (0, i.jsxs)("div", {
                            className: "content",
                            children: [(0, i.jsx)(v.CustomImage, {
                                src: "web_v2/ring-buy/comparison/formFator_ring.svg",
                                width: 42,
                                height: 42,
                                alt: "ring-icon",
                                className: "ring-icon"
                            }), (0, i.jsxs)("span", {
                                className: "bold-text",
                                children: [n("ring.comparison.uhRing.form.formFactor.a"), (0, i.jsx)("br", {}), n("ring.comparison.uhRing.form.formFactor.b")]
                            })]
                        })
                    }), (0, i.jsx)("td", {
                        children: (0, i.jsxs)("div", {
                            className: "content",
                            children: [(0, i.jsx)(v.CustomImage, {
                                src: r[a] ? .formFactorIcon ? r[a].formFactorIcon : "",
                                width: 42,
                                height: 42,
                                alt: "form-factor-icon",
                                className: "form-factor-icon"
                            }), (0, i.jsxs)("span", {
                                className: "bold-text",
                                children: [r[a] ? .formFactor ? r[a].formFactor : "", (0, i.jsx)("br", {}), r[a] ? .formFactorDisplay ? r[a].formFactorDisplay : ""]
                            })]
                        })
                    })]
                }), (0, i.jsxs)("tr", {
                    className: "top-border",
                    children: [(0, i.jsx)("td", {
                        className: "property property-head",
                        role: "columnheader",
                        children: (0, i.jsxs)("span", {
                            className: "",
                            children: [n("ring.comparison.feature.realtime.head.a"), (0, i.jsx)("br", {}), n("ring.comparison.feature.realtime.head.b")]
                        })
                    }), (0, i.jsx)("td", {
                        className: ""
                    })]
                }), (0, i.jsx)("tr", {
                    className: "",
                    children: (0, i.jsx)("td", {
                        className: "property",
                        role: "rowheader",
                        children: (0, i.jsx)("span", {
                            className: "",
                            children: n("ring.comparison.feature.realtime.categoryA.a")
                        })
                    })
                }), (0, i.jsxs)("tr", {
                    children: [(0, i.jsx)("td", {
                        children: (0, i.jsxs)("div", {
                            className: "content",
                            children: [(0, i.jsx)("span", {
                                className: "bold-text",
                                children: n("ring.comparison.uhRing.realTimeMetrics.hrMonitoring.bold")
                            }), (0, i.jsxs)("span", {
                                className: "thin-text",
                                children: [" ", n("ring.comparison.uhRing.realTimeMetrics.hrMonitoring.thin")]
                            })]
                        })
                    }), (0, i.jsx)("td", {
                        children: (0, i.jsxs)("div", {
                            className: "content",
                            children: [(0, i.jsx)("span", {
                                className: "bold-text",
                                children: r[a] ? .heartRateMonitoring ? r[a].heartRateMonitoring : ""
                            }), (0, i.jsx)("span", {
                                className: "thin-text",
                                children: r[a] ? .heartRateMonitoringSub ? r[a].heartRateMonitoringSub : ""
                            })]
                        })
                    })]
                }), (0, i.jsx)("tr", {
                    children: (0, i.jsx)("td", {
                        className: "property",
                        role: "rowheader",
                        children: (0, i.jsx)("span", {
                            className: "",
                            children: n("ring.comparison.feature.realtime.categoryB")
                        })
                    })
                }), (0, i.jsxs)("tr", {
                    children: [(0, i.jsx)("td", {
                        children: (0, i.jsxs)("div", {
                            className: "content",
                            children: [(0, i.jsx)("span", {
                                className: "bold-text",
                                children: n("ring.comparison.uhRing.realTimeMetrics.hrvMonitoring.bold")
                            }), (0, i.jsx)("span", {
                                className: "thin-text",
                                children: n("ring.comparison.uhRing.realTimeMetrics.hrvMonitoring.thin")
                            })]
                        })
                    }), (0, i.jsx)("td", {
                        children: (0, i.jsxs)("div", {
                            className: "content",
                            children: [(0, i.jsx)("span", {
                                className: "bold-text",
                                children: r[a] ? .hrvMonitoringRtm ? r[a] ? .hrvMonitoringRtm : ""
                            }), (0, i.jsx)("span", {
                                className: "thin-text",
                                children: r[a] ? .hrvMonitoringRtmSub ? r[a] ? .hrvMonitoringRtmSub : ""
                            })]
                        })
                    })]
                }), (0, i.jsx)("tr", {
                    children: (0, i.jsx)("td", {
                        className: "property",
                        role: "rowheader",
                        children: (0, i.jsxs)("span", {
                            className: "",
                            children: [n("ring.comparison.feature.realtime.categoryC.a"), (0, i.jsx)("br", {}), n("ring.comparison.feature.realtime.categoryC.b")]
                        })
                    })
                }), (0, i.jsxs)("tr", {
                    children: [(0, i.jsx)("td", {
                        children: (0, i.jsxs)("div", {
                            className: "content",
                            children: [(0, i.jsx)("span", {
                                className: "bold-text",
                                children: n("ring.comparison.uhRing.realTimeMetrics.skinTemp.bold")
                            }), (0, i.jsx)("span", {
                                className: "thin-text",
                                children: n("ring.comparison.uhRing.realTimeMetrics.skinTemp.thin")
                            })]
                        })
                    }), (0, i.jsx)("td", {
                        children: (0, i.jsxs)("div", {
                            className: "content",
                            children: [(0, i.jsx)("span", {
                                className: "bold-text",
                                children: r[a] ? .skinTempTracking ? r[a] ? .skinTempTracking : ""
                            }), (0, i.jsx)("span", {
                                className: "thin-text",
                                children: r[a] ? .skinTempTrackingSub ? r[a] ? .skinTempTrackingSub : ""
                            })]
                        })
                    })]
                }), (0, i.jsxs)("tr", {
                    className: "top-border",
                    children: [(0, i.jsx)("td", {
                        className: "property property-head",
                        role: "columnheader",
                        children: (0, i.jsx)("span", {
                            className: "",
                            children: n("ring.comparison.feature.sleep.head")
                        })
                    }), (0, i.jsx)("td", {
                        className: ""
                    })]
                }), (0, i.jsx)("tr", {
                    className: "",
                    children: (0, i.jsx)("td", {
                        className: "property",
                        role: "rowheader",
                        children: (0, i.jsx)("span", {
                            className: "",
                            children: n("ring.comparison.feature.sleep.categoryA")
                        })
                    })
                }), (0, i.jsxs)("tr", {
                    children: [(0, i.jsx)("td", {
                        children: (0, i.jsx)("div", {
                            className: "content",
                            children: (0, i.jsx)(v.CustomImage, {
                                src: "web_v2/ring-buy/comparison/checkmark_new.svg",
                                width: 30,
                                height: 31,
                                alt: "checkmark-icon",
                                className: "checkmark-icon"
                            })
                        })
                    }), (0, i.jsx)("td", {
                        children: (0, i.jsx)("div", {
                            className: "content",
                            children: r[a] ? .sleepTracking ? (0, i.jsx)(v.CustomImage, {
                                src: "web_v2/ring-buy/comparison/checkmark_new.svg",
                                width: 30,
                                height: 31,
                                alt: "checkmark-icon",
                                className: "checkmark-icon"
                            }) : (0, i.jsx)(v.CustomImage, {
                                src: "web_v2/ring-buy/comparison/crossmark_new.svg",
                                width: 30,
                                height: 31,
                                alt: "cross-icon",
                                className: "cross-icon"
                            })
                        })
                    })]
                }), (0, i.jsx)("tr", {
                    className: "",
                    children: (0, i.jsx)("td", {
                        className: "property",
                        role: "rowheader",
                        children: (0, i.jsxs)("span", {
                            className: "",
                            children: [n("ring.comparison.feature.sleep.categoryB"), " "]
                        })
                    })
                }), (0, i.jsxs)("tr", {
                    children: [(0, i.jsx)("td", {
                        children: (0, i.jsx)("div", {
                            className: "content",
                            children: (0, i.jsx)("span", {
                                className: "bold-text",
                                children: n("ring.comparison.uhRing.sleep.sleepMetrics")
                            })
                        })
                    }), (0, i.jsx)("td", {
                        children: (0, i.jsx)("div", {
                            className: "content",
                            children: (0, i.jsx)("span", {
                                className: "bold-text",
                                children: r[a] ? .sleepMetrics ? r[a].sleepMetrics : ""
                            })
                        })
                    })]
                }), (0, i.jsxs)("tr", {
                    className: "top-border",
                    children: [(0, i.jsx)("td", {
                        className: "property property-head",
                        role: "columnheader",
                        children: (0, i.jsx)("span", {
                            className: "",
                            children: n("ring.comparison.feature.movementWorkout.head")
                        })
                    }), (0, i.jsx)("td", {
                        className: ""
                    })]
                }), (0, i.jsx)("tr", {
                    children: (0, i.jsx)("td", {
                        className: "property",
                        role: "rowheader",
                        children: (0, i.jsx)("span", {
                            className: "",
                            children: n("ring.comparison.feature.movementWorkout.categoryA")
                        })
                    })
                }), (0, i.jsxs)("tr", {
                    children: [(0, i.jsx)("td", {
                        children: (0, i.jsx)("div", {
                            className: "content",
                            children: (0, i.jsx)(v.CustomImage, {
                                src: "web_v2/ring-buy/comparison/checkmark_new.svg",
                                width: 30,
                                height: 31,
                                alt: "checkmark-icon",
                                className: "checkmark-icon"
                            })
                        })
                    }), (0, i.jsx)("td", {
                        children: (0, i.jsxs)("div", {
                            className: "content",
                            children: [" ", r[a] ? .stepCounting ? (0, i.jsx)(v.CustomImage, {
                                src: "web_v2/ring-buy/comparison/checkmark_new.svg",
                                width: 30,
                                height: 31,
                                alt: "checkmark-icon",
                                className: "checkmark-icon"
                            }) : (0, i.jsx)(v.CustomImage, {
                                src: "web_v2/ring-buy/comparison/crossmark_new.svg",
                                width: 28,
                                height: 31,
                                alt: "cross-icon",
                                className: "cross-icon"
                            })]
                        })
                    })]
                }), (0, i.jsx)("tr", {
                    children: (0, i.jsx)("td", {
                        className: "property",
                        children: (0, i.jsx)("span", {
                            className: "",
                            children: n("ring.comparison.feature.movementWorkout.categoryB")
                        })
                    })
                }), (0, i.jsxs)("tr", {
                    children: [(0, i.jsx)("td", {
                        children: (0, i.jsx)("div", {
                            className: "content",
                            children: (0, i.jsx)(v.CustomImage, {
                                src: "web_v2/ring-buy/comparison/checkmark_new.svg",
                                width: 30,
                                height: 31,
                                alt: "checkmark-icon",
                                className: "checkmark-icon"
                            })
                        })
                    }), (0, i.jsx)("td", {
                        children: (0, i.jsxs)("div", {
                            className: "content",
                            children: [" ", r[a] ? .distance ? (0, i.jsx)(v.CustomImage, {
                                src: "web_v2/ring-buy/comparison/checkmark_new.svg",
                                width: 30,
                                height: 31,
                                alt: "checkmark-icon",
                                className: "checkmark-icon"
                            }) : (0, i.jsx)(v.CustomImage, {
                                src: "web_v2/ring-buy/comparison/crossmark_new.svg",
                                width: 28,
                                height: 31,
                                alt: "cross-icon",
                                className: "cross-icon"
                            })]
                        })
                    })]
                }), (0, i.jsx)("tr", {
                    children: (0, i.jsx)("td", {
                        className: "property",
                        children: (0, i.jsx)("span", {
                            className: "",
                            children: n("ring.comparison.feature.movementWorkout.categoryC")
                        })
                    })
                }), (0, i.jsxs)("tr", {
                    children: [(0, i.jsx)("td", {
                        children: (0, i.jsx)("div", {
                            className: "content",
                            children: (0, i.jsx)(v.CustomImage, {
                                src: "web_v2/ring-buy/comparison/checkmark_new.svg",
                                width: 30,
                                height: 31,
                                alt: "checkmark-icon",
                                className: "checkmark-icon"
                            })
                        })
                    }), (0, i.jsx)("td", {
                        children: (0, i.jsx)("div", {
                            className: "content",
                            children: r[a] ? .vo2Max ? (0, i.jsx)(v.CustomImage, {
                                src: "web_v2/ring-buy/comparison/checkmark_new.svg",
                                width: 30,
                                height: 31,
                                alt: "checkmark-icon",
                                className: "checkmark-icon"
                            }) : (0, i.jsx)(v.CustomImage, {
                                src: "web_v2/ring-buy/comparison/crossmark_new.svg",
                                width: 28,
                                height: 31,
                                alt: "cross-icon",
                                className: "cross-icon"
                            })
                        })
                    })]
                }), (0, i.jsxs)("tr", {
                    className: "top-border",
                    children: [(0, i.jsx)("td", {
                        className: "property property-head",
                        children: (0, i.jsx)("span", {
                            className: "",
                            children: n("ring.comparison.feature.recovery.head")
                        })
                    }), (0, i.jsx)("td", {
                        className: ""
                    })]
                }), (0, i.jsx)("tr", {
                    className: "",
                    children: (0, i.jsx)("td", {
                        className: "property",
                        children: (0, i.jsx)("span", {
                            className: "",
                            children: n("ring.comparison.feature.recovery.categoryA")
                        })
                    })
                }), (0, i.jsxs)("tr", {
                    children: [(0, i.jsx)("td", {
                        children: (0, i.jsx)("div", {
                            className: "content",
                            children: (0, i.jsx)("span", {
                                className: "bold-text",
                                children: n("ring.comparison.uhRing.recovery.hrvMetrics")
                            })
                        })
                    }), (0, i.jsx)("td", {
                        children: (0, i.jsx)("div", {
                            className: "content",
                            children: (0, i.jsx)("span", {
                                className: "bold-text",
                                children: r[a] ? .hrvMetrics ? r[a].hrvMetrics : ""
                            })
                        })
                    })]
                }), (0, i.jsx)("tr", {
                    children: (0, i.jsx)("td", {
                        className: "property",
                        children: (0, i.jsx)("span", {
                            className: "",
                            children: n("ring.comparison.feature.recovery.categoryC")
                        })
                    })
                }), (0, i.jsxs)("tr", {
                    children: [(0, i.jsx)("td", {
                        children: (0, i.jsx)("div", {
                            className: "content",
                            children: (0, i.jsx)(v.CustomImage, {
                                src: "web_v2/ring-buy/comparison/checkmark_new.svg",
                                width: 30,
                                height: 31,
                                alt: "checkmark-icon",
                                className: "checkmark-icon"
                            })
                        })
                    }), (0, i.jsx)("td", {
                        children: (0, i.jsx)("div", {
                            className: "content",
                            children: (0, i.jsx)("span", {
                                className: "bold-text",
                                children: r[a] ? .stressMonitoring ? (0, i.jsx)(v.CustomImage, {
                                    src: "web_v2/ring-buy/comparison/checkmark_new.svg",
                                    width: 30,
                                    height: 31,
                                    alt: "checkmark-icon",
                                    className: "checkmark-icon"
                                }) : (0, i.jsx)(v.CustomImage, {
                                    src: "web_v2/ring-buy/comparison/crossmark_new.svg",
                                    width: 28,
                                    height: 31,
                                    alt: "cross-icon",
                                    className: "cross-icon"
                                })
                            })
                        })
                    })]
                }), (0, i.jsxs)("tr", {
                    className: "top-border",
                    children: [(0, i.jsx)("td", {
                        className: "property property-head",
                        children: (0, i.jsx)("span", {
                            className: "",
                            children: n("ring.comparison.feature.function.head")
                        })
                    }), (0, i.jsx)("td", {
                        className: ""
                    })]
                }), (0, i.jsx)("tr", {
                    children: (0, i.jsx)("td", {
                        className: "property",
                        children: (0, i.jsx)("span", {
                            className: "",
                            children: n("ring.comparison.feature.function.categoryA")
                        })
                    })
                }), (0, i.jsxs)("tr", {
                    children: [(0, i.jsx)("td", {
                        children: (0, i.jsxs)("div", {
                            className: "content",
                            children: [(0, i.jsx)(v.CustomImage, {
                                src: "web_v2/ring-buy/comparison/uh_battery.svg",
                                width: 52,
                                height: 24.9,
                                alt: "uh-battery-icon",
                                className: "uh-battery-icon"
                            }), (0, i.jsx)("span", {
                                className: "bold-text",
                                children: n("ring.comparison.uhRing.function.batteryLife.bold")
                            })]
                        })
                    }), (0, i.jsx)("td", {
                        children: (0, i.jsxs)("div", {
                            className: "content",
                            children: [(0, i.jsx)(v.CustomImage, {
                                src: r[a] ? .batteryLifeIcon ? r[a].batteryLifeIcon : "",
                                width: 52,
                                height: 24.9,
                                alt: "battery-icon",
                                className: "battery-icon"
                            }), (0, i.jsx)("span", {
                                className: "bold-text",
                                children: r[a] ? .batteryLife ? r[a] ? .batteryLife : ""
                            }), (0, i.jsx)("span", {
                                className: "thin-text",
                                children: r[a] ? .batteryLifeSub ? r[a] ? .batteryLifeSub : ""
                            })]
                        })
                    })]
                }), (0, i.jsx)("tr", {
                    children: (0, i.jsx)("td", {
                        className: "property",
                        children: (0, i.jsxs)("span", {
                            className: "",
                            children: [n("ring.comparison.feature.function.categoryB.a"), " ", n("ring.comparison.feature.function.categoryB.b")]
                        })
                    })
                }), (0, i.jsxs)("tr", {
                    children: [(0, i.jsx)("td", {
                        children: (0, i.jsx)("div", {
                            className: "content",
                            children: (0, i.jsx)("span", {
                                className: "bold-text",
                                children: n("ring.comparison.uhRing.function.fullChargingTime.bold")
                            })
                        })
                    }), (0, i.jsx)("td", {
                        children: (0, i.jsxs)("div", {
                            className: "content",
                            children: [(0, i.jsx)("span", {
                                className: "bold-text",
                                children: r[a] ? .fullChargingTime ? r[a] ? .fullChargingTime : ""
                            }), (0, i.jsx)("span", {
                                className: "thin-text",
                                children: r[a] ? .fullChargingSub ? r[a] ? .fullChargingSub : ""
                            })]
                        })
                    })]
                }), (0, i.jsx)("tr", {
                    children: (0, i.jsx)("td", {
                        className: "property",
                        children: (0, i.jsx)("span", {
                            className: "",
                            children: n("ring.comparison.feature.function.categoryC")
                        })
                    })
                }), (0, i.jsxs)("tr", {
                    children: [(0, i.jsx)("td", {
                        children: (0, i.jsx)("div", {
                            className: "content",
                            children: (0, i.jsx)("span", {
                                className: "bold-text",
                                children: n("ring.comparison.uhRing.function.waterProof.bold")
                            })
                        })
                    }), (0, i.jsx)("td", {
                        children: (0, i.jsx)("div", {
                            className: "content",
                            children: (0, i.jsx)("span", {
                                className: "bold-text",
                                children: r[a] ? .waterproof ? r[a] ? .waterproof : ""
                            })
                        })
                    })]
                }), (0, i.jsx)("tr", {
                    children: (0, i.jsx)("td", {
                        className: "property",
                        children: (0, i.jsx)("span", {
                            className: "",
                            children: n("ring.comparison.feature.function.categoryD")
                        })
                    })
                }), (0, i.jsxs)("tr", {
                    children: [(0, i.jsx)("td", {
                        children: (0, i.jsx)("div", {
                            className: "content",
                            children: (0, i.jsx)(v.CustomImage, {
                                src: "web_v2/ring-buy/comparison/crossmark_new.svg",
                                width: 30,
                                height: 31,
                                alt: "checkmark-icon",
                                className: "checkmark-icon"
                            })
                        })
                    }), (0, i.jsx)("td", {
                        children: (0, i.jsx)("div", {
                            className: "content",
                            children: (0, i.jsx)("span", {
                                className: "bold-text",
                                children: r[a] ? .gps ? (0, i.jsx)(v.CustomImage, {
                                    src: "web_v2/ring-buy/comparison/checkmark_new.svg",
                                    width: 30,
                                    height: 31,
                                    alt: "checkmark-icon",
                                    className: "checkmark-icon"
                                }) : (0, i.jsx)(v.CustomImage, {
                                    src: "web_v2/ring-buy/comparison/crossmark_new.svg",
                                    width: 28,
                                    height: 31,
                                    alt: "cross-icon",
                                    className: "cross-icon"
                                })
                            })
                        })
                    })]
                }), (0, i.jsx)("tr", {
                    children: (0, i.jsx)("td", {
                        className: "property",
                        children: (0, i.jsx)("span", {
                            className: "",
                            children: n("ring.comparison.feature.function.categoryE")
                        })
                    })
                }), (0, i.jsxs)("tr", {
                    children: [(0, i.jsx)("td", {
                        children: (0, i.jsx)("div", {
                            className: "content",
                            children: (0, i.jsx)(v.CustomImage, {
                                src: "web_v2/ring-buy/comparison/checkmark_new.svg",
                                width: 30,
                                height: 31,
                                alt: "checkmark-icon",
                                className: "checkmark-icon"
                            })
                        })
                    }), (0, i.jsx)("td", {
                        children: (0, i.jsx)("div", {
                            className: "content",
                            children: (0, i.jsx)("span", {
                                className: "bold-text",
                                children: r[a] ? .airplaneMode ? (0, i.jsx)(v.CustomImage, {
                                    src: "web_v2/ring-buy/comparison/checkmark_new.svg",
                                    width: 30,
                                    height: 31,
                                    alt: "checkmark-icon",
                                    className: "checkmark-icon"
                                }) : (0, i.jsx)(v.CustomImage, {
                                    src: "web_v2/ring-buy/comparison/crossmark_new.svg",
                                    width: 28,
                                    height: 31,
                                    alt: "cross-icon",
                                    className: "cross-icon"
                                })
                            })
                        })
                    })]
                }), (0, i.jsx)("tr", {
                    children: (0, i.jsx)("td", {
                        className: "property",
                        children: (0, i.jsx)("span", {
                            className: "",
                            children: n("ring.comparison.feature.function.categoryF")
                        })
                    })
                }), (0, i.jsxs)("tr", {
                    children: [(0, i.jsx)("td", {
                        children: (0, i.jsx)("div", {
                            className: "content",
                            children: (0, i.jsx)(v.CustomImage, {
                                src: "web_v2/ring-buy/comparison/checkmark_new.svg",
                                width: 30,
                                height: 31,
                                alt: "checkmark-icon",
                                className: "checkmark-icon"
                            })
                        })
                    }), (0, i.jsx)("td", {
                        children: (0, i.jsx)("div", {
                            className: "content",
                            children: r[a] ? .findMyDevice ? (0, i.jsx)(v.CustomImage, {
                                src: "web_v2/ring-buy/comparison/checkmark_new.svg",
                                width: 30,
                                height: 31,
                                alt: "checkmark-icon",
                                className: "checkmark-icon"
                            }) : (0, i.jsx)(v.CustomImage, {
                                src: "web_v2/ring-buy/comparison/crossmark_new.svg",
                                width: 28,
                                height: 31,
                                alt: "cross-icon",
                                className: "cross-icon"
                            })
                        })
                    })]
                }), (0, i.jsx)("tr", {
                    children: (0, i.jsx)("td", {
                        className: "property",
                        children: (0, i.jsxs)("span", {
                            className: "",
                            children: [n("ring.comparison.feature.function.categoryH.a"), " ", n("ring.comparison.feature.function.categoryH.b")]
                        })
                    })
                }), (0, i.jsxs)("tr", {
                    children: [(0, i.jsx)("td", {
                        children: (0, i.jsx)("div", {
                            className: "content",
                            children: (0, i.jsx)(v.CustomImage, {
                                src: "web_v2/ring-buy/comparison/checkmark_new.svg",
                                width: 30,
                                height: 31,
                                alt: "checkmark-icon",
                                className: "checkmark-icon"
                            })
                        })
                    }), (0, i.jsx)("td", {
                        children: (0, i.jsx)("div", {
                            className: "content",
                            children: (0, i.jsx)("span", {
                                className: "bold-text",
                                children: r[a] ? .realTimeNotifications ? (0, i.jsx)(v.CustomImage, {
                                    src: "web_v2/ring-buy/comparison/checkmark_new.svg",
                                    width: 30,
                                    height: 31,
                                    alt: "checkmark-icon",
                                    className: "checkmark-icon"
                                }) : (0, i.jsx)(v.CustomImage, {
                                    src: "web_v2/ring-buy/comparison/crossmark_new.svg",
                                    width: 28,
                                    height: 31,
                                    alt: "cross-icon",
                                    className: "cross-icon"
                                })
                            })
                        })
                    })]
                }), (0, i.jsxs)("tr", {
                    className: "top-border",
                    children: [(0, i.jsx)("td", {
                        className: "property property-head",
                        children: (0, i.jsx)("span", {
                            className: "",
                            children: n("ring.comparison.feature.uniqueValProp.head")
                        })
                    }), (0, i.jsx)("td", {
                        className: ""
                    })]
                }), (0, i.jsx)("tr", {
                    children: (0, i.jsx)("td", {
                        className: "property",
                        children: (0, i.jsx)("span", {
                            className: "",
                            children: n("ring.comparison.feature.uniqueValProp.categoryA")
                        })
                    })
                }), (0, i.jsxs)("tr", {
                    children: [(0, i.jsxs)("td", {
                        children: [" ", (0, i.jsxs)("div", {
                            className: "content",
                            children: [(0, i.jsx)(v.CustomImage, {
                                src: "web_v2/ring-buy/comparison/formFator_ring.svg",
                                width: 42,
                                height: 42,
                                alt: "ring-icon",
                                className: "ring-icon"
                            }), (0, i.jsxs)("span", {
                                className: "bold-text",
                                children: [n("ring.comparison.uhRing.form.formFactor.a"), (0, i.jsx)("br", {}), n("ring.comparison.uhRing.form.formFactor.b")]
                            })]
                        })]
                    }), (0, i.jsx)("td", {
                        children: (0, i.jsxs)("div", {
                            className: "content",
                            children: [(0, i.jsx)(v.CustomImage, {
                                src: r[a] ? .formFactorIcon ? r[a].formFactorIcon : "",
                                width: 42,
                                height: 42,
                                alt: "form-factor-icon",
                                className: "form-factor-icon"
                            }), (0, i.jsxs)("span", {
                                className: "bold-text",
                                children: [r[a] ? .formFactor ? r[a] ? .formFactor : "", (0, i.jsx)("br", {}), r[a] ? .formFactorDisplay ? r[a] ? .formFactorDisplay : ""]
                            })]
                        })
                    })]
                }), (0, i.jsx)("tr", {
                    children: (0, i.jsx)("td", {
                        className: "property",
                        children: (0, i.jsx)("span", {
                            className: "",
                            children: n("ring.comparison.feature.uniqueValProp.categoryB")
                        })
                    })
                }), (0, i.jsxs)("tr", {
                    children: [(0, i.jsx)("td", {
                        children: (0, i.jsx)("div", {
                            className: "content",
                            children: (0, i.jsx)(v.CustomImage, {
                                src: "web_v2/ring-buy/comparison/checkmark_new.svg",
                                width: 30,
                                height: 31,
                                alt: "checkmark-icon",
                                className: "checkmark-icon"
                            })
                        })
                    }), (0, i.jsx)("td", {
                        children: (0, i.jsx)("div", {
                            className: "content",
                            children: (0, i.jsx)("span", {
                                className: "bold-text",
                                children: r[a] ? .circadianRhythmTracking ? (0, i.jsx)(v.CustomImage, {
                                    src: "web_v2/ring-buy/comparison/checkmark_new.svg",
                                    width: 30,
                                    height: 31,
                                    alt: "checkmark-icon",
                                    className: "checkmark-icon"
                                }) : (0, i.jsx)(v.CustomImage, {
                                    src: "web_v2/ring-buy/comparison/crossmark_new.svg",
                                    width: 28,
                                    height: 31,
                                    alt: "cross-icon",
                                    className: "cross-icon"
                                })
                            })
                        })
                    })]
                }), (0, i.jsx)("tr", {
                    children: (0, i.jsx)("td", {
                        className: "property",
                        children: (0, i.jsx)("span", {
                            className: "",
                            children: n("ring.comparison.feature.uniqueValProp.categoryG")
                        })
                    })
                }), (0, i.jsxs)("tr", {
                    children: [(0, i.jsx)("td", {
                        children: (0, i.jsx)("div", {
                            className: "content",
                            children: (0, i.jsx)(v.CustomImage, {
                                src: "web_v2/ring-buy/comparison/checkmark_new.svg",
                                width: 30,
                                height: 31,
                                alt: "checkmark-icon",
                                className: "checkmark-icon"
                            })
                        })
                    }), (0, i.jsx)("td", {
                        children: (0, i.jsx)("div", {
                            className: "content",
                            children: (0, i.jsx)("span", {
                                className: "bold-text",
                                children: r[a] ? .tempBasedOvulation ? (0, i.jsx)(v.CustomImage, {
                                    src: "web_v2/ring-buy/comparison/checkmark_new.svg",
                                    width: 30,
                                    height: 31,
                                    alt: "checkmark-icon",
                                    className: "checkmark-icon"
                                }) : (0, i.jsx)(v.CustomImage, {
                                    src: "web_v2/ring-buy/comparison/crossmark_new.svg",
                                    width: 28,
                                    height: 31,
                                    alt: "cross-icon",
                                    className: "cross-icon"
                                })
                            })
                        })
                    })]
                }), (0, i.jsx)("tr", {
                    children: (0, i.jsx)("td", {
                        className: "property",
                        children: (0, i.jsx)("span", {
                            className: "",
                            children: n("ring.comparison.feature.uniqueValProp.categoryC")
                        })
                    })
                }), (0, i.jsxs)("tr", {
                    children: [(0, i.jsx)("td", {
                        children: (0, i.jsx)("div", {
                            className: "content",
                            children: (0, i.jsx)(v.CustomImage, {
                                src: "web_v2/ring-buy/comparison/checkmark_new.svg",
                                width: 30,
                                height: 31,
                                alt: "checkmark-icon",
                                className: "checkmark-icon"
                            })
                        })
                    }), (0, i.jsx)("td", {
                        children: (0, i.jsx)("div", {
                            className: "content",
                            children: (0, i.jsx)("span", {
                                className: "bold-text",
                                children: r[a] ? .caffeineWindowDetection ? (0, i.jsx)(v.CustomImage, {
                                    src: "web_v2/ring-buy/comparison/checkmark_new.svg",
                                    width: 30,
                                    height: 31,
                                    alt: "checkmark-icon",
                                    className: "checkmark-icon"
                                }) : (0, i.jsx)(v.CustomImage, {
                                    src: "web_v2/ring-buy/comparison/crossmark_new.svg",
                                    width: 28,
                                    height: 31,
                                    alt: "cross-icon",
                                    className: "cross-icon"
                                })
                            })
                        })
                    })]
                }), (0, i.jsx)("tr", {
                    children: (0, i.jsx)("td", {
                        className: "property",
                        children: (0, i.jsx)("span", {
                            className: "",
                            children: n("ring.comparison.feature.uniqueValProp.categoryD")
                        })
                    })
                }), (0, i.jsxs)("tr", {
                    children: [(0, i.jsx)("td", {
                        children: (0, i.jsxs)("div", {
                            className: "content",
                            children: [(0, i.jsx)(v.CustomImage, {
                                src: "web_v2/ring-buy/comparison/checkmark_new.svg",
                                width: 30,
                                height: 31,
                                alt: "checkmark-icon",
                                className: "checkmark-icon"
                            }), (0, i.jsx)("span", {
                                className: "sub-bold-text",
                                children: n("ring.comparison.uhRing.uniqueValProp.afibDetection")
                            })]
                        })
                    }), (0, i.jsx)("td", {
                        children: (0, i.jsx)("div", {
                            className: "content",
                            children: (0, i.jsx)("span", {
                                className: "bold-text",
                                children: r[a] ? .afibDetection ? (0, i.jsx)(v.CustomImage, {
                                    src: "web_v2/ring-buy/comparison/checkmark_new.svg",
                                    width: 30,
                                    height: 31,
                                    alt: "checkmark-icon",
                                    className: "checkmark-icon"
                                }) : (0, i.jsx)(v.CustomImage, {
                                    src: "web_v2/ring-buy/comparison/crossmark_new.svg",
                                    width: 28,
                                    height: 31,
                                    alt: "cross-icon",
                                    className: "cross-icon"
                                })
                            })
                        })
                    })]
                }), (0, i.jsx)("tr", {
                    children: (0, i.jsx)("td", {
                        className: "property",
                        children: (0, i.jsx)("span", {
                            className: "",
                            children: n("ring.comparison.feature.uniqueValProp.categoryE")
                        })
                    })
                }), (0, i.jsxs)("tr", {
                    children: [(0, i.jsx)("td", {
                        children: (0, i.jsx)("div", {
                            className: "content",
                            children: (0, i.jsxs)("span", {
                                className: "bold-text",
                                children: [n("ring.comparison.feature.subscription.notReq"), " "]
                            })
                        })
                    }), (0, i.jsx)("td", {
                        children: (0, i.jsx)("div", {
                            className: "content",
                            children: (0, i.jsx)("span", {
                                className: "bold-text",
                                children: r[a] ? .subscriptionRequired ? r[a] ? .subscriptionRequired : null
                            })
                        })
                    })]
                }), (0, i.jsx)("tr", {
                    children: (0, i.jsx)("td", {
                        className: "property",
                        children: (0, i.jsx)("span", {
                            className: "",
                            children: n("ring.comparison.feature.uniqueValProp.categoryF")
                        })
                    })
                }), (0, i.jsxs)("tr", {
                    children: [(0, i.jsx)("td", {
                        children: (0, i.jsx)("div", {
                            className: "content",
                            children: (0, i.jsx)(v.CustomImage, {
                                src: "web_v2/ring-buy/comparison/checkmark_new.svg",
                                width: 30,
                                height: 31,
                                alt: "checkmark-icon",
                                className: "checkmark-icon"
                            })
                        })
                    }), (0, i.jsx)("td", {
                        children: (0, i.jsx)("div", {
                            className: "content",
                            children: (0, i.jsx)("span", {
                                className: "bold-text",
                                children: r[a] ? .performanceCoach ? (0, i.jsx)(v.CustomImage, {
                                    src: "web_v2/ring-buy/comparison/checkmark_new.svg",
                                    width: 30,
                                    height: 31,
                                    alt: "checkmark-icon",
                                    className: "checkmark-icon"
                                }) : (0, i.jsx)(v.CustomImage, {
                                    src: "web_v2/ring-buy/comparison/crossmark_new.svg",
                                    width: 28,
                                    height: 31,
                                    alt: "cross-icon",
                                    className: "cross-icon"
                                })
                            })
                        })
                    })]
                }), (0, i.jsxs)("tr", {
                    className: "top-border",
                    children: [(0, i.jsx)("td", {
                        className: "property property-head",
                        children: (0, i.jsxs)("span", {
                            className: "",
                            children: [" ", n("ring.comparison.feature.pricing.head")]
                        })
                    }), (0, i.jsx)("td", {
                        className: ""
                    })]
                }), (0, i.jsx)("tr", {
                    children: (0, i.jsx)("td", {
                        className: "property",
                        children: (0, i.jsx)("span", {
                            className: "",
                            children: n("ring.comparison.feature.pricing.categoryA")
                        })
                    })
                }), (0, i.jsxs)("tr", {
                    children: [(0, i.jsx)("td", {
                        children: (0, i.jsx)("div", {
                            className: "content",
                            children: (0, i.jsx)("span", {
                                className: "bold-text",
                                children: n("ring.comparison.uhRing.pricing")
                            })
                        })
                    }), (0, i.jsx)("td", {
                        children: (0, i.jsx)("div", {
                            className: "content",
                            children: (0, i.jsx)("span", {
                                className: "bold-text",
                                children: r[a] ? .priceRange ? r[a] ? .priceRange : "No"
                            })
                        })
                    })]
                })]
            })
        })
    }).withConfig({
        displayName: "MobileTable",
        componentId: "sc-b0164cbc-0"
    })
    `
  position: relative;
  width: 100%;
  border-collapse: collapse;

  tr {
    position: relative;
    width: 100%;
    &.top-border {
      border-top: 1px solid rgba(0, 0, 0, 0.1);
    }

    // &:first-child {
    //   border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    // }
  }

  .thin-text {
    color: #000;
    text-align: left;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 16.8px */
    letter-spacing: -0.56px;

    @media (min-width: ${({theme:e})=>e.globalV2.lg.minWidth}) {
      font-size: 16px;
      text-align: center;
      letter-spacing: -0.64px;
    }
  }

  .sub-bold-text {
    font-size: 12px;
    letter-spacing: -0.48px;
    color: #000;
    font-style: normal;
    font-weight: 500;
    line-height: 160%;
    margin-bottom: 2px;

    @media (min-width: ${({theme:e})=>e.globalV2.lg.minWidth}) {
      font-size: 14px;
      text-align: center;
      letter-spacing: -0.56px;
    }
  }

  & .content {
    height: 100%;
    text-align: left;
    display: flex;
    flex-direction: column;
    .img-container {
      margin: 0 auto 9px 0;
      position: relative;
      width: 3.2rem;
      height: 3.2rem;
      aspect-ratio: 1/1;

      img {
        height: unset !important;
        aspect-ratio: 1/1;
      }
    }

    select {
      appearence: none;
      background-image: url(${(0,er.getAssetUrl)("/web/icons/down-caret.svg")});
    }

    button,
    select {
      border: none;
      outline: none;
      text-align: left;
      background: transparent;
    }
  }

  td {
    vertical-align: initial;
    text-align: left;
    padding: 17px 8px 56px;
    height: 100%;
    width: 50%;

    &:first-child {
      position: relative;
      .prop {
        position: absolute;
        top: 0;
        left: 90%;
        color: blue;
        font-size: 14px;
      }
    }

    &.title {
      padding: 25px 8px;
    }

    &.property {
      color: #000;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 120%; /* 19.2px */
      letter-spacing: -0.64px;
      padding: 0 8px;
    }

    &.property-head {
      color: #000;
      font-weight: 600;
      padding: 47px 8px 32px;
    }
  }

  .bold {
    color: #000;
    font-size: 17px;
    font-weight: 500;
    line-height: 30px;
  }

  .spacer {
    margin-bottom: 120px;
  }
`, ew = (0, l.default)(({
        className: e,
        data: r,
        comparatorsOrder: n
    }) => {
        let {
            t: s
        } = (0, t.useTranslation)("ring"), o = (0, a.useRef)(null);
        return (0, i.jsx)("table", {
            className: e,
            ref: o,
            children: (0, i.jsxs)("tbody", {
                children: [(0, i.jsx)("tr", {
                    children: (0, i.jsx)("th", {
                        className: "property property-head",
                        scope: "col",
                        colSpan: n.length,
                        children: (0, i.jsx)("span", {
                            className: "",
                            children: s("ring.comparison.feature.form.head")
                        })
                    })
                }), (0, i.jsxs)("tr", {
                    children: [(0, i.jsx)("th", {
                        className: "property",
                        scope: "row",
                        children: (0, i.jsx)("span", {
                            className: "",
                            children: s("ring.comparison.feature.form.categoryA")
                        })
                    }), (0, i.jsx)("td", {
                        children: (0, i.jsxs)("div", {
                            className: "content",
                            children: [(0, i.jsx)("div", {
                                className: "img-container",
                                children: (0, i.jsx)(v.CustomImage, {
                                    src: "web_v2/ring-buy/comparison/uh_weight.svg",
                                    width: 52,
                                    height: 52,
                                    alt: "weight-icon",
                                    className: "weight-icon"
                                })
                            }), (0, i.jsx)("span", {
                                className: "bold-text",
                                children: s("ring.comparison.uhRing.form.weight.bold")
                            }), (0, i.jsx)("span", {
                                className: "sub-bold-text",
                                children: s("ring.comparison.uhRing.form.weight.sub")
                            }), (0, i.jsx)("span", {
                                className: "thin-text",
                                children: s("ring.comparison.uhRing.form.weight.thin")
                            })]
                        })
                    }), r && n ? n.map((e, t) => {
                        if (t !== n.length - 1) return (0, i.jsx)("td", {
                            className: "desk",
                            children: (0, i.jsxs)("div", {
                                className: "content",
                                children: [(0, i.jsx)("div", {
                                    className: "img-container",
                                    children: (0, i.jsx)(v.CustomImage, {
                                        src: r[e].weightIcon ? r[e].weightIcon : "",
                                        width: 0 == e ? 46 : 52,
                                        height: 0 == e ? 46 : 52,
                                        alt: "weight-icon",
                                        className: "weight-icon"
                                    })
                                }), (0, i.jsx)("span", {
                                    className: "bold-text",
                                    children: r[e].weight ? r[e].weight : ""
                                }), (0, i.jsx)("span", {
                                    className: "sub-bold-text",
                                    children: r[e].weightSub ? r[e].weightSub : ""
                                }), (0, i.jsx)("span", {
                                    className: "thin-text",
                                    children: r[e].weightThin ? r[e].weightThin : ""
                                })]
                            })
                        }, t)
                    }) : null]
                }), (0, i.jsxs)("tr", {
                    children: [(0, i.jsx)("th", {
                        className: "property",
                        scope: "row",
                        children: (0, i.jsx)("span", {
                            className: "",
                            children: s("ring.comparison.feature.form.categoryB")
                        })
                    }), (0, i.jsx)("td", {
                        children: (0, i.jsxs)("div", {
                            className: "content",
                            children: [(0, i.jsx)("div", {
                                className: "img-container",
                                children: (0, i.jsx)(v.CustomImage, {
                                    src: "web_v2/ring-buy/comparison/formFator_ring.svg",
                                    width: 52,
                                    height: 52,
                                    alt: "ring-icon",
                                    className: "ring-icon"
                                })
                            }), (0, i.jsxs)("span", {
                                className: "bold-text",
                                children: [s("ring.comparison.uhRing.form.formFactor.a"), (0, i.jsx)("br", {}), s("ring.comparison.uhRing.form.formFactor.b")]
                            })]
                        })
                    }), r && n ? n.map((e, t) => {
                        if (t !== n.length - 1) return (0, i.jsx)("td", {
                            className: "desk",
                            children: (0, i.jsxs)("div", {
                                className: "content",
                                children: [(0, i.jsx)("div", {
                                    className: "img-container",
                                    children: (0, i.jsx)(v.CustomImage, {
                                        src: r[e].formFactorIcon ? r[e].formFactorIcon : "",
                                        width: 52,
                                        height: 52,
                                        alt: "form-factor-icon",
                                        className: "form-factor-icon"
                                    })
                                }), (0, i.jsxs)("span", {
                                    className: "bold-text",
                                    children: [r[e].formFactor ? r[e].formFactor : "", (0, i.jsx)("br", {}), r[e].formFactorDisplay ? r[e].formFactorDisplay : ""]
                                })]
                            })
                        }, t)
                    }) : null]
                }), (0, i.jsx)("tr", {
                    children: (0, i.jsx)("td", {
                        className: "col-span",
                        colSpan: n.length + 1,
                        children: (0, i.jsx)("div", {
                            className: "break"
                        })
                    })
                }), (0, i.jsx)("tr", {
                    children: (0, i.jsx)("th", {
                        className: "property property-head",
                        scope: "col",
                        colSpan: n.length,
                        children: (0, i.jsxs)("span", {
                            className: "",
                            children: [s("ring.comparison.feature.realtime.head.a"), " ", s("ring.comparison.feature.realtime.head.b")]
                        })
                    })
                }), (0, i.jsxs)("tr", {
                    children: [(0, i.jsx)("th", {
                        className: "property",
                        scope: "row",
                        children: (0, i.jsxs)("span", {
                            className: "",
                            children: [s("ring.comparison.feature.realtime.categoryA.a"), (0, i.jsx)("br", {}), s("ring.comparison.feature.realtime.categoryA.b")]
                        })
                    }), (0, i.jsx)("td", {
                        children: (0, i.jsxs)("div", {
                            className: "content",
                            children: [(0, i.jsx)("span", {
                                className: "bold-text",
                                children: s("ring.comparison.uhRing.realTimeMetrics.hrMonitoring.bold")
                            }), (0, i.jsx)("span", {
                                className: "thin-text",
                                children: s("ring.comparison.uhRing.realTimeMetrics.hrMonitoring.thin")
                            })]
                        })
                    }), r && n ? n.map((e, t) => {
                        if (t !== n.length - 1) return (0, i.jsx)("td", {
                            className: "desk",
                            children: (0, i.jsxs)("div", {
                                className: "content",
                                children: [(0, i.jsx)("span", {
                                    className: "bold-text",
                                    children: r[e].heartRateMonitoring ? r[e].heartRateMonitoring : ""
                                }), (0, i.jsx)("span", {
                                    className: "thin-text",
                                    children: r[e].heartRateMonitoringSub ? r[e].heartRateMonitoringSub : ""
                                })]
                            })
                        }, t)
                    }) : null]
                }), (0, i.jsxs)("tr", {
                    children: [(0, i.jsx)("th", {
                        className: "property",
                        scope: "row",
                        children: (0, i.jsx)("span", {
                            className: "",
                            children: s("ring.comparison.feature.realtime.categoryB")
                        })
                    }), (0, i.jsx)("td", {
                        children: (0, i.jsxs)("div", {
                            className: "content",
                            children: [(0, i.jsx)("span", {
                                className: "bold-text",
                                children: s("ring.comparison.uhRing.realTimeMetrics.hrvMonitoring.bold")
                            }), (0, i.jsx)("span", {
                                className: "thin-text",
                                children: s("ring.comparison.uhRing.realTimeMetrics.hrvMonitoring.thin")
                            })]
                        })
                    }), r && n ? n.map((e, t) => {
                        if (t !== n.length - 1) return (0, i.jsx)("td", {
                            className: "desk",
                            children: (0, i.jsxs)("div", {
                                className: "content",
                                children: [(0, i.jsx)("span", {
                                    className: "bold-text",
                                    children: r[e].hrvMonitoringRtm ? r[e].hrvMonitoringRtm : ""
                                }), (0, i.jsx)("span", {
                                    className: "thin-text",
                                    children: r[e].hrvMonitoringRtmSub ? r[e].hrvMonitoringRtmSub : ""
                                })]
                            })
                        }, t)
                    }) : null]
                }), (0, i.jsxs)("tr", {
                    children: [(0, i.jsx)("th", {
                        className: "property",
                        scope: "row",
                        children: (0, i.jsxs)("span", {
                            className: "",
                            children: [s("ring.comparison.feature.realtime.categoryC.a"), (0, i.jsx)("br", {}), s("ring.comparison.feature.realtime.categoryC.b")]
                        })
                    }), (0, i.jsx)("td", {
                        children: (0, i.jsxs)("div", {
                            className: "content",
                            children: [(0, i.jsx)("span", {
                                className: "bold-text",
                                children: s("ring.comparison.uhRing.realTimeMetrics.skinTemp.bold")
                            }), (0, i.jsx)("span", {
                                className: "thin-text",
                                children: s("ring.comparison.uhRing.realTimeMetrics.skinTemp.thin")
                            })]
                        })
                    }), r && n ? n.map((e, t) => {
                        if (t !== n.length - 1) return (0, i.jsx)("td", {
                            className: "desk",
                            children: (0, i.jsxs)("div", {
                                className: "content",
                                children: [(0, i.jsx)("span", {
                                    className: "bold-text",
                                    children: r[e].skinTempTracking ? r[e].skinTempTracking : ""
                                }), (0, i.jsx)("span", {
                                    className: "thin-text",
                                    children: r[e].skinTempTrackingSub ? r[e].skinTempTrackingSub : ""
                                })]
                            })
                        }, t)
                    }) : null]
                }), (0, i.jsx)("tr", {
                    children: (0, i.jsx)("td", {
                        className: "col-span",
                        colSpan: n.length + 1,
                        children: (0, i.jsx)("div", {
                            className: "break"
                        })
                    })
                }), (0, i.jsx)("tr", {
                    children: (0, i.jsx)("th", {
                        className: "property property-head",
                        scope: "col",
                        colSpan: n.length,
                        children: (0, i.jsx)("span", {
                            className: "",
                            children: s("ring.comparison.feature.sleep.head")
                        })
                    })
                }), (0, i.jsxs)("tr", {
                    children: [(0, i.jsx)("th", {
                        className: "property",
                        scope: "row",
                        children: (0, i.jsx)("span", {
                            className: "",
                            children: s("ring.comparison.feature.sleep.categoryA")
                        })
                    }), (0, i.jsx)("td", {
                        children: (0, i.jsx)("div", {
                            className: "content",
                            children: (0, i.jsx)("div", {
                                className: "img-container",
                                children: (0, i.jsx)(v.CustomImage, {
                                    src: "web_v2/ring-buy/comparison/checkmark_new.svg",
                                    width: 30,
                                    height: 31,
                                    alt: "checkmark-icon",
                                    className: "checkmark-icon"
                                })
                            })
                        })
                    }), r && n ? n.map((e, t) => {
                        if (t !== n.length - 1) return (0, i.jsx)("td", {
                            className: "desk",
                            children: (0, i.jsx)("div", {
                                className: "content",
                                children: (0, i.jsx)("div", {
                                    className: "img-container",
                                    children: r[e].sleepTracking ? (0, i.jsx)(v.CustomImage, {
                                        src: "web_v2/ring-buy/comparison/checkmark_new.svg",
                                        width: 30,
                                        height: 31,
                                        alt: "checkmark-icon",
                                        className: "checkmark-icon"
                                    }) : (0, i.jsx)(v.CustomImage, {
                                        src: "web_v2/ring-buy/comparison/crossmark_new.svg",
                                        width: 28,
                                        height: 31,
                                        alt: "cross-icon",
                                        className: "cross-icon"
                                    })
                                })
                            })
                        }, t)
                    }) : null]
                }), (0, i.jsxs)("tr", {
                    children: [(0, i.jsx)("th", {
                        className: "property",
                        scope: "row",
                        children: (0, i.jsx)("span", {
                            className: "",
                            children: s("ring.comparison.feature.sleep.categoryB")
                        })
                    }), (0, i.jsx)("td", {
                        children: (0, i.jsx)("div", {
                            className: "content",
                            children: (0, i.jsx)("span", {
                                className: "bold-text",
                                children: s("ring.comparison.uhRing.sleep.sleepMetrics")
                            })
                        })
                    }), r && n ? n.map((e, t) => {
                        if (t !== n.length - 1) return (0, i.jsx)("td", {
                            className: "desk",
                            children: (0, i.jsx)("div", {
                                className: "content",
                                children: (0, i.jsx)("span", {
                                    className: "bold-text",
                                    children: r[e].sleepMetrics ? r[e].sleepMetrics : ""
                                })
                            })
                        }, t)
                    }) : null]
                }), (0, i.jsx)("tr", {
                    children: (0, i.jsx)("td", {
                        className: "col-span",
                        colSpan: n.length + 1,
                        children: (0, i.jsx)("div", {
                            className: "break"
                        })
                    })
                }), (0, i.jsx)("tr", {
                    children: (0, i.jsx)("th", {
                        className: "property property-head",
                        scope: "col",
                        colSpan: n.length,
                        children: (0, i.jsx)("span", {
                            className: "",
                            children: s("ring.comparison.feature.movementWorkout.head")
                        })
                    })
                }), (0, i.jsxs)("tr", {
                    children: [(0, i.jsx)("th", {
                        className: "property",
                        scope: "row",
                        children: (0, i.jsx)("span", {
                            className: "",
                            children: s("ring.comparison.feature.movementWorkout.categoryA")
                        })
                    }), (0, i.jsx)("td", {
                        children: (0, i.jsx)("div", {
                            className: "content",
                            children: (0, i.jsx)("div", {
                                className: "img-container",
                                children: (0, i.jsx)(v.CustomImage, {
                                    src: "web_v2/ring-buy/comparison/checkmark_new.svg",
                                    width: 30,
                                    height: 31,
                                    alt: "checkmark-icon",
                                    className: "checkmark-icon"
                                })
                            })
                        })
                    }), r && n ? n.map((e, t) => {
                        if (t !== n.length - 1) return (0, i.jsx)("td", {
                            className: "desk",
                            children: (0, i.jsx)("div", {
                                className: "content",
                                children: (0, i.jsx)("div", {
                                    className: "img-container",
                                    children: r[e].stepCounting ? (0, i.jsx)(v.CustomImage, {
                                        src: "web_v2/ring-buy/comparison/checkmark_new.svg",
                                        width: 30,
                                        height: 31,
                                        alt: "checkmark-icon",
                                        className: "checkmark-icon"
                                    }) : (0, i.jsx)(v.CustomImage, {
                                        src: "web_v2/ring-buy/comparison/crossmark_new.svg",
                                        width: 28,
                                        height: 31,
                                        alt: "cross-icon",
                                        className: "cross-icon"
                                    })
                                })
                            })
                        }, t)
                    }) : null]
                }), (0, i.jsxs)("tr", {
                    children: [(0, i.jsx)("th", {
                        className: "property",
                        scope: "row",
                        children: (0, i.jsx)("span", {
                            className: "",
                            children: s("ring.comparison.feature.movementWorkout.categoryB")
                        })
                    }), (0, i.jsx)("td", {
                        children: (0, i.jsx)("div", {
                            className: "content",
                            children: (0, i.jsx)("div", {
                                className: "img-container",
                                children: (0, i.jsx)(v.CustomImage, {
                                    src: "web_v2/ring-buy/comparison/checkmark_new.svg",
                                    width: 30,
                                    height: 31,
                                    alt: "checkmark-icon",
                                    className: "checkmark-icon"
                                })
                            })
                        })
                    }), r && n ? n.map((e, t) => {
                        if (t !== n.length - 1) return (0, i.jsx)("td", {
                            className: "desk",
                            children: (0, i.jsx)("div", {
                                className: "content",
                                children: (0, i.jsx)("div", {
                                    className: "img-container",
                                    children: r[e].distance ? (0, i.jsx)(v.CustomImage, {
                                        src: "web_v2/ring-buy/comparison/checkmark_new.svg",
                                        width: 30,
                                        height: 31,
                                        alt: "checkmark-icon",
                                        className: "checkmark-icon"
                                    }) : (0, i.jsx)(v.CustomImage, {
                                        src: "web_v2/ring-buy/comparison/crossmark_new.svg",
                                        width: 28,
                                        height: 31,
                                        alt: "cross-icon",
                                        className: "cross-icon"
                                    })
                                })
                            })
                        }, t)
                    }) : null]
                }), (0, i.jsxs)("tr", {
                    children: [(0, i.jsx)("th", {
                        className: "property",
                        scope: "row",
                        children: (0, i.jsx)("span", {
                            className: "",
                            children: s("ring.comparison.feature.movementWorkout.categoryC")
                        })
                    }), (0, i.jsx)("td", {
                        children: (0, i.jsx)("div", {
                            className: "content",
                            children: (0, i.jsx)("div", {
                                className: "img-container",
                                children: (0, i.jsx)(v.CustomImage, {
                                    src: "web_v2/ring-buy/comparison/checkmark_new.svg",
                                    width: 30,
                                    height: 31,
                                    alt: "checkmark-icon",
                                    className: "checkmark-icon"
                                })
                            })
                        })
                    }), r && n ? n.map((e, t) => {
                        if (t !== n.length - 1) return (0, i.jsx)("td", {
                            className: "desk",
                            children: (0, i.jsx)("div", {
                                className: "content",
                                children: (0, i.jsx)("div", {
                                    className: "img-container",
                                    children: r[e].vo2Max ? (0, i.jsx)(v.CustomImage, {
                                        src: "web_v2/ring-buy/comparison/checkmark_new.svg",
                                        width: 30,
                                        height: 31,
                                        alt: "checkmark-icon",
                                        className: "checkmark-icon"
                                    }) : (0, i.jsx)(v.CustomImage, {
                                        src: "web_v2/ring-buy/comparison/crossmark_new.svg",
                                        width: 28,
                                        height: 31,
                                        alt: "cross-icon",
                                        className: "cross-icon"
                                    })
                                })
                            })
                        }, t)
                    }) : null]
                }), (0, i.jsx)("tr", {
                    children: (0, i.jsx)("td", {
                        className: "col-span",
                        colSpan: n.length + 1,
                        children: (0, i.jsx)("div", {
                            className: "break"
                        })
                    })
                }), (0, i.jsx)("tr", {
                    children: (0, i.jsx)("th", {
                        className: "property property-head",
                        scope: "col",
                        colSpan: n.length,
                        children: (0, i.jsx)("span", {
                            className: "",
                            children: s("ring.comparison.feature.recovery.head")
                        })
                    })
                }), (0, i.jsxs)("tr", {
                    children: [(0, i.jsx)("th", {
                        className: "property",
                        scope: "row",
                        children: (0, i.jsx)("span", {
                            className: "",
                            children: s("ring.comparison.feature.recovery.categoryA")
                        })
                    }), (0, i.jsx)("td", {
                        children: (0, i.jsx)("div", {
                            className: "content",
                            children: (0, i.jsx)("span", {
                                className: "bold-text",
                                children: s("ring.comparison.uhRing.recovery.hrvMetrics")
                            })
                        })
                    }), r && n ? n.map((e, t) => {
                        if (t !== n.length - 1) return (0, i.jsx)("td", {
                            className: "desk",
                            children: (0, i.jsx)("div", {
                                className: "content",
                                children: (0, i.jsx)("span", {
                                    className: "bold-text",
                                    children: r[e].hrvMetrics ? r[e].hrvMetrics : ""
                                })
                            })
                        }, t)
                    }) : null]
                }), (0, i.jsxs)("tr", {
                    children: [(0, i.jsx)("th", {
                        className: "property",
                        scope: "row",
                        children: (0, i.jsx)("span", {
                            className: "",
                            children: s("ring.comparison.feature.recovery.categoryC")
                        })
                    }), (0, i.jsx)("td", {
                        children: (0, i.jsx)("div", {
                            className: "content",
                            children: (0, i.jsx)("div", {
                                className: "img-container",
                                children: (0, i.jsx)(v.CustomImage, {
                                    src: "web_v2/ring-buy/comparison/checkmark_new.svg",
                                    width: 30,
                                    height: 31,
                                    alt: "checkmark-icon",
                                    className: "checkmark-icon"
                                })
                            })
                        })
                    }), r && n ? n.map((e, t) => {
                        if (t !== n.length - 1) return (0, i.jsx)("td", {
                            className: "desk",
                            children: (0, i.jsx)("div", {
                                className: "content",
                                children: (0, i.jsx)("div", {
                                    className: "img-container",
                                    children: r[e].stressMonitoring ? (0, i.jsx)(v.CustomImage, {
                                        src: "web_v2/ring-buy/comparison/checkmark_new.svg",
                                        width: 30,
                                        height: 31,
                                        alt: "checkmark-icon",
                                        className: "checkmark-icon"
                                    }) : (0, i.jsx)(v.CustomImage, {
                                        src: "web_v2/ring-buy/comparison/crossmark_new.svg",
                                        width: 28,
                                        height: 31,
                                        alt: "cross-icon",
                                        className: "cross-icon"
                                    })
                                })
                            })
                        }, t)
                    }) : null]
                }), (0, i.jsx)("tr", {
                    children: (0, i.jsx)("td", {
                        className: "col-span",
                        colSpan: n.length + 1,
                        children: (0, i.jsx)("div", {
                            className: "break"
                        })
                    })
                }), (0, i.jsx)("tr", {
                    children: (0, i.jsx)("th", {
                        className: "property property-head",
                        scope: "col",
                        colSpan: n.length,
                        children: (0, i.jsx)("span", {
                            className: "",
                            children: s("ring.comparison.feature.function.head")
                        })
                    })
                }), (0, i.jsxs)("tr", {
                    children: [(0, i.jsx)("th", {
                        className: "property",
                        scope: "row",
                        children: (0, i.jsx)("span", {
                            className: "",
                            children: s("ring.comparison.feature.function.categoryA")
                        })
                    }), (0, i.jsx)("td", {
                        children: (0, i.jsxs)("div", {
                            className: "content",
                            children: [(0, i.jsx)("div", {
                                className: "img-container",
                                children: (0, i.jsx)(v.CustomImage, {
                                    src: "web_v2/ring-buy/comparison/uh_battery.svg",
                                    width: 52,
                                    height: 24.9,
                                    alt: "uh-battery-icon",
                                    className: "uh-battery-icon"
                                })
                            }), (0, i.jsx)("span", {
                                className: "bold-text",
                                children: s("ring.comparison.uhRing.function.batteryLife.bold")
                            })]
                        })
                    }), r && n ? n.map((e, t) => {
                        if (t !== n.length - 1) return (0, i.jsx)("td", {
                            className: "desk",
                            children: (0, i.jsxs)("div", {
                                className: "content",
                                children: [(0, i.jsx)("div", {
                                    className: "img-container",
                                    children: (0, i.jsx)(v.CustomImage, {
                                        src: r[e].batteryLifeIcon ? r[e].batteryLifeIcon : "",
                                        width: 52,
                                        height: 24.9,
                                        alt: "battery-icon",
                                        className: "battery-icon"
                                    })
                                }), (0, i.jsx)("span", {
                                    className: "bold-text",
                                    children: r[e].batteryLife ? r[e].batteryLife : ""
                                })]
                            })
                        }, t)
                    }) : null]
                }), (0, i.jsxs)("tr", {
                    children: [(0, i.jsx)("th", {
                        className: "property",
                        scope: "row",
                        children: (0, i.jsxs)("span", {
                            className: "",
                            children: [s("ring.comparison.feature.function.categoryB.a"), (0, i.jsx)("br", {}), s("ring.comparison.feature.function.categoryB.b")]
                        })
                    }), (0, i.jsx)("td", {
                        children: (0, i.jsx)("div", {
                            className: "content",
                            children: (0, i.jsx)("span", {
                                className: "bold-text",
                                children: s("ring.comparison.uhRing.function.fullChargingTime.bold")
                            })
                        })
                    }), r && n ? n.map((e, t) => {
                        if (t !== n.length - 1) return (0, i.jsx)("td", {
                            className: "desk",
                            children: (0, i.jsxs)("div", {
                                className: "content",
                                children: [(0, i.jsxs)("span", {
                                    className: "bold-text",
                                    children: [r[e].fullChargingTime ? r[e].fullChargingTime : "", " "]
                                }), (0, i.jsx)("span", {
                                    className: "thin-text",
                                    children: r[e].fullChargingSub ? r[e].fullChargingSub : ""
                                })]
                            })
                        }, t)
                    }) : null]
                }), (0, i.jsxs)("tr", {
                    children: [(0, i.jsx)("th", {
                        className: "property",
                        scope: "row",
                        children: (0, i.jsx)("span", {
                            className: "",
                            children: s("ring.comparison.feature.function.categoryC")
                        })
                    }), (0, i.jsx)("td", {
                        children: (0, i.jsx)("div", {
                            className: "content",
                            children: (0, i.jsx)("span", {
                                className: "bold-text",
                                children: s("ring.comparison.uhRing.function.waterProof.bold")
                            })
                        })
                    }), r && n ? n.map((e, t) => {
                        if (t !== n.length - 1) return (0, i.jsx)("td", {
                            className: "desk",
                            children: (0, i.jsx)("div", {
                                className: "content",
                                children: (0, i.jsxs)("span", {
                                    className: "bold-text",
                                    children: [r[e].waterproof ? r[e].waterproof : "", " "]
                                })
                            })
                        }, t)
                    }) : null]
                }), (0, i.jsxs)("tr", {
                    children: [(0, i.jsx)("th", {
                        className: "property",
                        scope: "row",
                        children: (0, i.jsx)("span", {
                            className: "",
                            children: s("ring.comparison.feature.function.categoryD")
                        })
                    }), (0, i.jsx)("td", {
                        children: (0, i.jsx)("div", {
                            className: "content",
                            children: (0, i.jsx)("div", {
                                className: "img-container",
                                children: (0, i.jsx)(v.CustomImage, {
                                    src: "web_v2/ring-buy/comparison/crossmark_new.svg",
                                    width: 28,
                                    height: 31,
                                    alt: "cross-icon",
                                    className: "cross-icon"
                                })
                            })
                        })
                    }), r && n ? n.map((e, t) => {
                        if (t !== n.length - 1) return (0, i.jsx)("td", {
                            className: "desk",
                            children: (0, i.jsx)("div", {
                                className: "content",
                                children: (0, i.jsx)("div", {
                                    className: "img-container",
                                    children: r[e].gps ? (0, i.jsx)(v.CustomImage, {
                                        src: "web_v2/ring-buy/comparison/checkmark_new.svg",
                                        width: 30,
                                        height: 31,
                                        alt: "checkmark-icon",
                                        className: "checkmark-icon"
                                    }) : (0, i.jsx)(v.CustomImage, {
                                        src: "web_v2/ring-buy/comparison/crossmark_new.svg",
                                        width: 28,
                                        height: 31,
                                        alt: "cross-icon",
                                        className: "cross-icon"
                                    })
                                })
                            })
                        }, t)
                    }) : null]
                }), (0, i.jsxs)("tr", {
                    children: [(0, i.jsx)("th", {
                        className: "property",
                        scope: "row",
                        children: (0, i.jsx)("span", {
                            className: "",
                            children: s("ring.comparison.feature.function.categoryE")
                        })
                    }), (0, i.jsx)("td", {
                        children: (0, i.jsx)("div", {
                            className: "content",
                            children: (0, i.jsx)("div", {
                                className: "img-container",
                                children: (0, i.jsx)(v.CustomImage, {
                                    src: "web_v2/ring-buy/comparison/checkmark_new.svg",
                                    width: 30,
                                    height: 31,
                                    alt: "checkmark-icon",
                                    className: "checkmark-icon"
                                })
                            })
                        })
                    }), r && n ? n.map((e, t) => {
                        if (t !== n.length - 1) return (0, i.jsx)("td", {
                            className: "desk",
                            children: (0, i.jsx)("div", {
                                className: "content",
                                children: (0, i.jsx)("div", {
                                    className: "img-container",
                                    children: r[e].airplaneMode ? (0, i.jsx)(v.CustomImage, {
                                        src: "web_v2/ring-buy/comparison/checkmark_new.svg",
                                        width: 30,
                                        height: 31,
                                        alt: "checkmark-icon",
                                        className: "checkmark-icon"
                                    }) : (0, i.jsx)(v.CustomImage, {
                                        src: "web_v2/ring-buy/comparison/crossmark_new.svg",
                                        width: 28,
                                        height: 31,
                                        alt: "cross-icon",
                                        className: "cross-icon"
                                    })
                                })
                            })
                        }, t)
                    }) : null]
                }), (0, i.jsxs)("tr", {
                    children: [(0, i.jsx)("th", {
                        className: "property",
                        scope: "row",
                        children: (0, i.jsx)("span", {
                            className: "",
                            children: s("ring.comparison.feature.function.categoryF")
                        })
                    }), (0, i.jsx)("td", {
                        children: (0, i.jsx)("div", {
                            className: "content",
                            children: (0, i.jsx)("div", {
                                className: "img-container",
                                children: (0, i.jsx)(v.CustomImage, {
                                    src: "web_v2/ring-buy/comparison/checkmark_new.svg",
                                    width: 30,
                                    height: 31,
                                    alt: "checkmark-icon",
                                    className: "checkmark-icon"
                                })
                            })
                        })
                    }), r && n ? n.map((e, t) => {
                        if (t !== n.length - 1) return (0, i.jsx)("td", {
                            className: "desk",
                            children: (0, i.jsx)("div", {
                                className: "content",
                                children: (0, i.jsx)("div", {
                                    className: "img-container",
                                    children: r[e].findMyDevice ? (0, i.jsx)(v.CustomImage, {
                                        src: "web_v2/ring-buy/comparison/checkmark_new.svg",
                                        width: 30,
                                        height: 31,
                                        alt: "checkmark-icon",
                                        className: "checkmark-icon"
                                    }) : (0, i.jsx)(v.CustomImage, {
                                        src: "web_v2/ring-buy/comparison/crossmark_new.svg",
                                        width: 28,
                                        height: 31,
                                        alt: "cross-icon",
                                        className: "cross-icon"
                                    })
                                })
                            })
                        }, t)
                    }) : null]
                }), (0, i.jsxs)("tr", {
                    children: [(0, i.jsx)("th", {
                        className: "property",
                        scope: "row",
                        children: (0, i.jsxs)("span", {
                            className: "",
                            children: [s("ring.comparison.feature.function.categoryH.a"), (0, i.jsx)("br", {}), s("ring.comparison.feature.function.categoryH.b")]
                        })
                    }), (0, i.jsx)("td", {
                        children: (0, i.jsx)("div", {
                            className: "content",
                            children: (0, i.jsx)("div", {
                                className: "img-container",
                                children: (0, i.jsx)(v.CustomImage, {
                                    src: "web_v2/ring-buy/comparison/checkmark_new.svg",
                                    width: 30,
                                    height: 31,
                                    alt: "checkmark-icon",
                                    className: "checkmark-icon"
                                })
                            })
                        })
                    }), r && n ? n.map((e, t) => {
                        if (t !== n.length - 1) return (0, i.jsx)("td", {
                            className: "desk",
                            children: (0, i.jsx)("div", {
                                className: "content",
                                children: (0, i.jsx)("div", {
                                    className: "img-container",
                                    children: r[e].realTimeNotifications ? (0, i.jsx)(v.CustomImage, {
                                        src: "web_v2/ring-buy/comparison/checkmark_new.svg",
                                        width: 30,
                                        height: 31,
                                        alt: "checkmark-icon",
                                        className: "checkmark-icon"
                                    }) : (0, i.jsx)(v.CustomImage, {
                                        src: "web_v2/ring-buy/comparison/crossmark_new.svg",
                                        width: 28,
                                        height: 31,
                                        alt: "cross-icon",
                                        className: "cross-icon"
                                    })
                                })
                            })
                        }, t)
                    }) : null]
                }), (0, i.jsx)("tr", {
                    className: "col-span",
                    children: (0, i.jsx)("td", {
                        colSpan: n.length + 1,
                        children: (0, i.jsx)("div", {
                            className: "break"
                        })
                    })
                }), (0, i.jsx)("tr", {
                    children: (0, i.jsx)("th", {
                        className: "property property-head",
                        scope: "col",
                        colSpan: n.length,
                        children: (0, i.jsx)("span", {
                            className: "",
                            children: s("ring.comparison.feature.uniqueValProp.head")
                        })
                    })
                }), (0, i.jsxs)("tr", {
                    children: [(0, i.jsx)("th", {
                        className: "property",
                        scope: "row",
                        children: (0, i.jsx)("span", {
                            className: "",
                            children: s("ring.comparison.feature.uniqueValProp.categoryA")
                        })
                    }), (0, i.jsx)("td", {
                        children: (0, i.jsxs)("div", {
                            className: "content",
                            children: [(0, i.jsx)("div", {
                                className: "img-container",
                                children: (0, i.jsx)(v.CustomImage, {
                                    src: "web_v2/ring-buy/comparison/formFator_ring.svg",
                                    width: 42,
                                    height: 42,
                                    alt: "ring-icon",
                                    className: "ring-icon"
                                })
                            }), (0, i.jsxs)("span", {
                                className: "bold-text",
                                children: [s("ring.comparison.uhRing.form.formFactor.a"), (0, i.jsx)("br", {}), s("ring.comparison.uhRing.form.formFactor.b")]
                            })]
                        })
                    }), r && n ? n.map((e, t) => {
                        if (t !== n.length - 1) return (0, i.jsx)("td", {
                            className: "desk",
                            children: (0, i.jsxs)("div", {
                                className: "content",
                                children: [(0, i.jsx)("div", {
                                    className: "img-container",
                                    children: (0, i.jsx)(v.CustomImage, {
                                        src: r[e].formFactorIcon ? r[e].formFactorIcon : "",
                                        width: 42,
                                        height: 42,
                                        alt: "form-factor-icon",
                                        className: "form-factor-icon"
                                    })
                                }), (0, i.jsxs)("span", {
                                    className: "bold-text",
                                    children: [r[e].formFactor ? r[e].formFactor : "", (0, i.jsx)("br", {}), r[e].formFactorDisplay ? r[e].formFactorDisplay : ""]
                                })]
                            })
                        }, t)
                    }) : null]
                }), (0, i.jsxs)("tr", {
                    children: [(0, i.jsx)("th", {
                        className: "property",
                        scope: "row",
                        children: (0, i.jsx)("span", {
                            className: "",
                            children: s("ring.comparison.feature.uniqueValProp.categoryB")
                        })
                    }), (0, i.jsx)("td", {
                        children: (0, i.jsx)("div", {
                            className: "content",
                            children: (0, i.jsx)("div", {
                                className: "img-container",
                                children: (0, i.jsx)(v.CustomImage, {
                                    src: "web_v2/ring-buy/comparison/checkmark_new.svg",
                                    width: 30,
                                    height: 31,
                                    alt: "checkmark-icon",
                                    className: "checkmark-icon"
                                })
                            })
                        })
                    }), r && n ? n.map((e, t) => {
                        if (t !== n.length - 1) return (0, i.jsx)("td", {
                            className: "desk",
                            children: (0, i.jsx)("div", {
                                className: "content",
                                children: (0, i.jsx)("div", {
                                    className: "img-container",
                                    children: r[e].circadianRhythmTracking ? (0, i.jsx)(v.CustomImage, {
                                        src: "web_v2/ring-buy/comparison/checkmark_new.svg",
                                        width: 30,
                                        height: 31,
                                        alt: "checkmark-icon",
                                        className: "checkmark-icon"
                                    }) : (0, i.jsx)(v.CustomImage, {
                                        src: "web_v2/ring-buy/comparison/crossmark_new.svg",
                                        width: 28,
                                        height: 31,
                                        alt: "cross-icon",
                                        className: "cross-icon"
                                    })
                                })
                            })
                        }, t)
                    }) : null]
                }), (0, i.jsxs)("tr", {
                    children: [(0, i.jsx)("th", {
                        className: "property",
                        scope: "row",
                        children: (0, i.jsx)("span", {
                            className: "",
                            children: s("ring.comparison.feature.uniqueValProp.categoryG")
                        })
                    }), (0, i.jsx)("td", {
                        children: (0, i.jsx)("div", {
                            className: "content",
                            children: (0, i.jsx)("div", {
                                className: "img-container",
                                children: (0, i.jsx)(v.CustomImage, {
                                    src: "web_v2/ring-buy/comparison/checkmark_new.svg",
                                    width: 30,
                                    height: 31,
                                    alt: "checkmark-icon",
                                    className: "checkmark-icon"
                                })
                            })
                        })
                    }), r && n ? n.map((e, t) => {
                        if (t !== n.length - 1) return (0, i.jsx)("td", {
                            className: "desk",
                            children: (0, i.jsx)("div", {
                                className: "content",
                                children: (0, i.jsx)("div", {
                                    className: "img-container",
                                    children: r[e].tempBasedOvulation ? (0, i.jsx)(v.CustomImage, {
                                        src: "web_v2/ring-buy/comparison/checkmark_new.svg",
                                        width: 30,
                                        height: 31,
                                        alt: "checkmark-icon",
                                        className: "checkmark-icon"
                                    }) : (0, i.jsx)(v.CustomImage, {
                                        src: "web_v2/ring-buy/comparison/crossmark_new.svg",
                                        width: 28,
                                        height: 31,
                                        alt: "cross-icon",
                                        className: "cross-icon"
                                    })
                                })
                            })
                        }, t)
                    }) : null]
                }), (0, i.jsxs)("tr", {
                    children: [(0, i.jsx)("th", {
                        className: "property",
                        scope: "row",
                        children: (0, i.jsx)("span", {
                            className: "",
                            children: s("ring.comparison.feature.uniqueValProp.categoryC")
                        })
                    }), (0, i.jsx)("td", {
                        children: (0, i.jsx)("div", {
                            className: "content",
                            children: (0, i.jsx)("div", {
                                className: "img-container",
                                children: (0, i.jsx)(v.CustomImage, {
                                    src: "web_v2/ring-buy/comparison/checkmark_new.svg",
                                    width: 30,
                                    height: 31,
                                    alt: "checkmark-icon",
                                    className: "checkmark-icon"
                                })
                            })
                        })
                    }), r && n ? n.map((e, t) => {
                        if (t !== n.length - 1) return (0, i.jsx)("td", {
                            className: "desk",
                            children: (0, i.jsx)("div", {
                                className: "content",
                                children: (0, i.jsx)("div", {
                                    className: "img-container",
                                    children: r[e].caffeineWindowDetection ? (0, i.jsx)(v.CustomImage, {
                                        src: "web_v2/ring-buy/comparison/checkmark_new.svg",
                                        width: 30,
                                        height: 31,
                                        alt: "checkmark-icon",
                                        className: "checkmark-icon"
                                    }) : (0, i.jsx)(v.CustomImage, {
                                        src: "web_v2/ring-buy/comparison/crossmark_new.svg",
                                        width: 28,
                                        height: 31,
                                        alt: "cross-icon",
                                        className: "cross-icon"
                                    })
                                })
                            })
                        }, t)
                    }) : null]
                }), (0, i.jsxs)("tr", {
                    children: [(0, i.jsx)("th", {
                        className: "property",
                        scope: "row",
                        children: (0, i.jsx)("span", {
                            className: "",
                            children: s("ring.comparison.feature.uniqueValProp.categoryD")
                        })
                    }), (0, i.jsx)("td", {
                        children: (0, i.jsxs)("div", {
                            className: "content",
                            children: [(0, i.jsx)("div", {
                                className: "img-container",
                                children: (0, i.jsx)(v.CustomImage, {
                                    src: "web_v2/ring-buy/comparison/checkmark_new.svg",
                                    width: 30,
                                    height: 31,
                                    alt: "checkmark-icon",
                                    className: "checkmark-icon"
                                })
                            }), (0, i.jsx)("span", {
                                className: "sub-bold-text",
                                children: "(limited regions)"
                            })]
                        })
                    }), r && n ? n.map((e, t) => {
                        if (t !== n.length - 1) return (0, i.jsx)("td", {
                            className: "desk",
                            children: (0, i.jsx)("div", {
                                className: "content",
                                children: (0, i.jsx)("div", {
                                    className: "img-container",
                                    children: r[e].afibDetection ? (0, i.jsx)(v.CustomImage, {
                                        src: "web_v2/ring-buy/comparison/checkmark_new.svg",
                                        width: 30,
                                        height: 31,
                                        alt: "checkmark-icon",
                                        className: "checkmark-icon"
                                    }) : (0, i.jsx)(v.CustomImage, {
                                        src: "web_v2/ring-buy/comparison/crossmark_new.svg",
                                        width: 28,
                                        height: 31,
                                        alt: "cross-icon",
                                        className: "cross-icon"
                                    })
                                })
                            })
                        }, t)
                    }) : null]
                }), (0, i.jsxs)("tr", {
                    children: [(0, i.jsx)("th", {
                        className: "property",
                        scope: "row",
                        children: (0, i.jsx)("span", {
                            className: "",
                            children: s("ring.comparison.feature.uniqueValProp.categoryE")
                        })
                    }), (0, i.jsx)("td", {
                        children: (0, i.jsx)("div", {
                            className: "content",
                            children: (0, i.jsx)("span", {
                                className: "bold-text",
                                children: "Not Required"
                            })
                        })
                    }), r && n ? n.map((e, t) => {
                        if (t !== n.length - 1) return (0, i.jsx)("td", {
                            className: "desk",
                            children: (0, i.jsx)("div", {
                                className: "content",
                                children: (0, i.jsx)("span", {
                                    className: "bold-text",
                                    children: r[e].subscriptionRequired ? r[e].subscriptionRequired : ""
                                })
                            })
                        }, t)
                    }) : null]
                }), (0, i.jsxs)("tr", {
                    children: [(0, i.jsx)("th", {
                        className: "property",
                        scope: "row",
                        children: (0, i.jsx)("span", {
                            className: "",
                            children: s("ring.comparison.feature.uniqueValProp.categoryF")
                        })
                    }), (0, i.jsx)("td", {
                        children: (0, i.jsx)("div", {
                            className: "content",
                            children: (0, i.jsx)("div", {
                                className: "img-container",
                                children: (0, i.jsx)(v.CustomImage, {
                                    src: "web_v2/ring-buy/comparison/checkmark_new.svg",
                                    width: 30,
                                    height: 31,
                                    alt: "checkmark-icon",
                                    className: "checkmark-icon"
                                })
                            })
                        })
                    }), r && n ? n.map((e, t) => {
                        if (t !== n.length - 1) return (0, i.jsx)("td", {
                            className: "desk",
                            children: (0, i.jsx)("div", {
                                className: "content",
                                children: (0, i.jsx)("div", {
                                    className: "img-container",
                                    children: r[e].performanceCoach ? (0, i.jsx)(v.CustomImage, {
                                        src: "web_v2/ring-buy/comparison/checkmark_new.svg",
                                        width: 30,
                                        height: 31,
                                        alt: "checkmark-icon",
                                        className: "checkmark-icon"
                                    }) : (0, i.jsx)(v.CustomImage, {
                                        src: "web_v2/ring-buy/comparison/crossmark_new.svg",
                                        width: 28,
                                        height: 31,
                                        alt: "cross-icon",
                                        className: "cross-icon"
                                    })
                                })
                            })
                        }, t)
                    }) : null]
                }), (0, i.jsx)("tr", {
                    className: "col-span",
                    children: (0, i.jsx)("td", {
                        colSpan: n.length + 1,
                        children: (0, i.jsx)("div", {
                            className: "break"
                        })
                    })
                }), (0, i.jsx)("tr", {
                    children: (0, i.jsx)("th", {
                        className: "property property-head",
                        scope: "col",
                        colSpan: n.length,
                        children: (0, i.jsx)("span", {
                            className: "",
                            children: s("ring.comparison.feature.pricing.head")
                        })
                    })
                }), (0, i.jsxs)("tr", {
                    children: [(0, i.jsx)("th", {
                        className: "property",
                        scope: "row",
                        children: (0, i.jsx)("span", {
                            className: "",
                            children: s("ring.comparison.feature.pricing.categoryA")
                        })
                    }), (0, i.jsx)("td", {
                        children: (0, i.jsx)("div", {
                            className: "content",
                            children: (0, i.jsx)("span", {
                                className: "bold-text",
                                children: s("ring.comparison.uhRing.pricing")
                            })
                        })
                    }), r && n ? n.map((e, t) => {
                        if (t !== n.length - 1) return (0, i.jsx)("td", {
                            className: "desk",
                            children: (0, i.jsx)("div", {
                                className: "content",
                                children: (0, i.jsx)("span", {
                                    className: "bold-text",
                                    children: r[e].priceRange ? r[e].priceRange : ""
                                })
                            })
                        }, t)
                    }) : null]
                })]
            })
        })
    }).withConfig({
        displayName: "DesktopTableNew",
        componentId: "sc-b207f5b2-0"
    })
    `
  position: relative;
  width: 100%;
  border-collapse: collapse;
  z-index: 1;
  overflow: hidden;

  .col-span {
    width: 100%;
    position: relative;

    .break {
      width: 100%;
      border-top: 1px solid rgb(0, 0, 0);
      opacity: 0.1;
    }
  }

  & .content {
    height: 100%;
    font-size: 16px;
    text-align: center;
    display: flex;
    flex-direction: column;
    .img-container {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: auto;
      position: relative;
      width: 6.2rem;
      height: 6.2rem;
      aspect-ratio: 1/1;

      img {
        height: unset !important;
        aspect-ratio: 1/1;
      }
    }
  }

  td {
    vertical-align: initial;
    text-align: center;
    padding: 24px 10px;
    height: 100%;
    width: 20.5%;
    border: none;

    &:first-child {
      text-align: left;
    }

    &:nth-child(2) {
      border-right: 1px solid rgba(0, 0, 0, 0.15);
    }

    &.property {
      color: #000;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 120%; /* 19.2px */
      width: 18%;
    }

    &.property-head {
      color: #000;
      font-weight: 600;
    }
  }

  .property-head {
    color: #000;
    font-weight: 600;
  }

  .bold {
    color: #000;
    font-size: 19px;
    font-weight: 500;
    line-height: 32px;
  }

  .spacer {
    margin-bottom: 120px;
  }
`, ey = (0, l.default)(({
        className: e,
        htmlId: r
    }) => {
        let n, {
                t: s
            } = (0, t.useTranslation)("ring"),
            o = (0, T.useGlobalUI)(),
            [l, c] = (0, a.useState)([0, 1, 2]),
            {
                width: d
            } = (0, L.useWindowSize)(),
            [h, m] = (0, a.useState)(0),
            p = (0, E.useGsapContext)(),
            g = (0, a.useRef)(null),
            x = d < 768,
            u = [{
                title: s("ring.comparison.garminWatch.title"),
                id: 0,
                formFactor: s("ring.comparison.garminWatch.form.formFactor.a"),
                formFactorDisplay: s("ring.comparison.garminWatch.form.formFactor.b"),
                formFactorIcon: "web_v2/ring-buy/comparison/formFactor_watch.svg",
                weight: s("ring.comparison.garminWatch.form.weight.bold"),
                weightIcon: "web_v2/ring-buy/comparison/garmin_weight.svg",
                weightSub: s("ring.comparison.garminWatch.form.weight.sub"),
                weightThin: s("ring.comparison.garminWatch.form.weight.thin"),
                sleepTracking: !0,
                sleepMetrics: s("ring.comparison.garminWatch.sleep.sleepMetrics"),
                movementAndWorkoutTracking: !0,
                movementAndWorkoutTrackingParams: "(steps, workouts)",
                stepCounting: !0,
                distance: !0,
                calories: !0,
                heartRateMonitoring: s("ring.comparison.garminWatch.realTimeMetrics.hrMonitoring.bold"),
                heartRateMonitoringSub: s("ring.comparison.garminWatch.realTimeMetrics.hrMonitoring.thin"),
                vo2Max: !0,
                gps: !0,
                hrvMonitoringRtm: s("ring.comparison.garminWatch.realTimeMetrics.hrvMonitoring.bold"),
                hrvMonitoringRtmSub: s("ring.comparison.garminWatch.realTimeMetrics.hrvMonitoring.thin"),
                hrvMonitoring: "Static and non-actionable",
                hrvMonitoringSub: "throughout the day",
                hrvMetrics: s("ring.comparison.garminWatch.recovery.hrvMetrics"),
                skinTempTracking: s("ring.comparison.garminWatch.realTimeMetrics.skinTemp.bold"),
                skinTempTrackingSub: s("ring.comparison.garminWatch.realTimeMetrics.skinTemp.thin"),
                temperatureTracking: !0,
                temperatureTrackingSub: "(varies by model)",
                stressMonitoring: !0,
                spo2Monitoring: !0,
                respiratoryRate: !0,
                batteryLife: s("ring.comparison.garminWatch.function.batteryLife.bold"),
                batteryLifeIcon: "web_v2/ring-buy/comparison/garmin_battery.svg",
                batteryLifeSub: "(varies by model)",
                fullChargingTime: s("ring.comparison.garminWatch.function.fullChargingTime.bold"),
                fullChargingSub: s("ring.comparison.garminWatch.function.fullChargingTime.thin"),
                waterproof: s("ring.comparison.garminWatch.function.waterProof.bold"),
                airplaneMode: !0,
                findMyDevice: !0,
                goalTracking: !0,
                realTimeNotifications: !0,
                circadianRhythmTracking: !1,
                caffeineWindowDetection: !1,
                afibDetection: !1,
                subscriptionRequired: s("ring.comparison.feature.subscription.notReq"),
                performanceCoach: !1,
                tempBasedOvulation: !1,
                priceRange: s("ring.comparison.garminWatch.pricing")
            }, {
                title: s("ring.comparison.ouraRing.title"),
                id: 2,
                formFactor: s("ring.comparison.ouraRing.form.formFactor.a"),
                formFactorDisplay: s("ring.comparison.ouraRing.form.formFactor.b"),
                formFactorIcon: "web_v2/ring-buy/comparison/formFator_ring.svg",
                weight: s("ring.comparison.ouraRing.form.weight.bold"),
                weightIcon: "web_v2/ring-buy/comparison/pennies.svg",
                weightSub: s("ring.comparison.ouraRing.form.weight.sub"),
                weightThin: s("ring.comparison.ouraRing.form.weight.thin"),
                sleepTracking: !0,
                sleepMetrics: s("ring.comparison.ouraRing.sleep.sleepMetrics"),
                movementAndWorkoutTracking: !0,
                movementAndWorkoutTrackingParams: "(steps, workouts)",
                stepCounting: !0,
                distance: !0,
                calories: !0,
                heartRateMonitoring: s("ring.comparison.ouraRing.realTimeMetrics.hrMonitoring.bold"),
                heartRateMonitoringSub: s("ring.comparison.ouraRing.realTimeMetrics.hrMonitoring.thin"),
                vo2Max: !0,
                gps: !1,
                hrvMonitoringRtm: s("ring.comparison.ouraRing.realTimeMetrics.hrvMonitoring.bold"),
                hrvMonitoringRtmSub: "",
                hrvMonitoring: "Yes",
                hrvMonitoringSub: "",
                hrvMetrics: s("ring.comparison.ouraRing.recovery.hrvMetrics"),
                skinTempTracking: s("ring.comparison.ouraRing.realTimeMetrics.skinTemp.bold"),
                skinTempTrackingSub: s("ring.comparison.ouraRing.realTimeMetrics.skinTemp.thin"),
                temperatureTracking: !0,
                temperatureTrackingSub: "",
                stressMonitoring: !0,
                spo2Monitoring: !0,
                respiratoryRate: !0,
                batteryLifeIcon: "web_v2/ring-buy/comparison/uh_battery.svg",
                batteryLife: s("ring.comparison.ouraRing.function.batteryLife.bold"),
                batteryLifeSub: "",
                fullChargingTime: s("ring.comparison.ouraRing.function.fullChargingTime.bold"),
                fullChargingSub: "",
                waterproof: s("ring.comparison.ouraRing.function.waterProof.bold"),
                airplaneMode: !0,
                findMyDevice: !0,
                goalTracking: !0,
                realTimeNotifications: !1,
                circadianRhythmTracking: !0,
                caffeineWindowDetection: !1,
                afibDetection: !1,
                subscriptionRequired: s("ring.comparison.feature.subscription.req"),
                performanceCoach: !1,
                tempBasedOvulation: !0,
                priceRange: s("ring.comparison.ouraRing.pricing")
            }, {
                title: s("ring.comparison.appleWatch.title"),
                id: 3,
                formFactor: s("ring.comparison.appleWatch.form.formFactor.a"),
                formFactorDisplay: s("ring.comparison.appleWatch.form.formFactor.b"),
                formFactorIcon: "web_v2/ring-buy/comparison/formFactor_watch.svg",
                weight: s("ring.comparison.appleWatch.form.weight.bold"),
                weightIcon: "web_v2/ring-buy/comparison/apple_weight.svg",
                weightSub: "",
                weightThin: s("ring.comparison.appleWatch.form.weight.thin"),
                sleepTracking: !0,
                sleepMetrics: s("ring.comparison.appleWatch.sleep.sleepMetrics"),
                movementAndWorkoutTracking: !0,
                movementAndWorkoutTrackingParams: "(steps, workouts)",
                stepCounting: !0,
                distance: !0,
                calories: !0,
                heartRateMonitoring: s("ring.comparison.appleWatch.realTimeMetrics.hrMonitoring.bold"),
                heartRateMonitoringSub: s("ring.comparison.appleWatch.realTimeMetrics.hrMonitoring.thin"),
                vo2Max: !0,
                gps: !0,
                hrvMonitoringRtm: s("ring.comparison.appleWatch.realTimeMetrics.hrvMonitoring.bold"),
                hrvMonitoringRtmSub: s("ring.comparison.appleWatch.realTimeMetrics.hrvMonitoring.thin"),
                hrvMonitoring: "Static and non-actionable",
                hrvMonitoringSub: "throughout the day",
                hrvMetrics: s("ring.comparison.appleWatch.recovery.hrvMetrics"),
                skinTempTracking: s("ring.comparison.appleWatch.realTimeMetrics.skinTemp.bold"),
                skinTempTrackingSub: s("ring.comparison.appleWatch.realTimeMetrics.skinTemp.thin"),
                temperatureTracking: !0,
                temperatureTrackingSub: "",
                stressMonitoring: !0,
                spo2Monitoring: !0,
                respiratoryRate: !0,
                batteryLife: s("ring.comparison.appleWatch.function.batteryLife.bold"),
                batteryLifeIcon: "web_v2/ring-buy/comparison/apple_battery.svg",
                batteryLifeSub: "",
                fullChargingTime: s("ring.comparison.appleWatch.function.fullChargingTime.bold"),
                fullChargingSub: "",
                waterproof: s("ring.comparison.appleWatch.function.waterProof.bold"),
                airplaneMode: !0,
                findMyDevice: !0,
                goalTracking: !0,
                realTimeNotifications: !0,
                circadianRhythmTracking: !1,
                caffeineWindowDetection: !1,
                afibDetection: !0,
                subscriptionRequired: s("ring.comparison.feature.subscription.notReq"),
                performanceCoach: !1,
                tempBasedOvulation: !1,
                priceRange: s("ring.comparison.appleWatch.pricing")
            }];
        return (0, a.useEffect)(() => {
            l ? .length > 3 && g.current && window && p.add(() => {
                let e = P.default.timeline({
                    defaults: {
                        duration: 1,
                        ease: "power2.easeInOut"
                    }
                });
                e.set(".th", {
                    xPercent: 75
                }), e.set(".th", {
                    xPercent: 75
                }), e.fromTo(".th", {
                    xPercent: 75
                }, {
                    xPercent: 0,
                    duration: .35,
                    stagger: .1
                })
            })
        }, [l]), (0, i.jsx)("div", {
            className: e,
            id: r,
            children: (0, i.jsxs)("div", {
                className: "sticky-wrapper",
                children: [(0, i.jsx)("h3", {
                    children: s("ring.comparison.head")
                }), (0, i.jsx)("p", {
                    className: "subHead",
                    children: s("ring.comparison.subHead")
                }), (0, i.jsx)("div", {
                    id: "comparison-table-summary",
                    className: "sr-only",
                    "aria-hidden": "true",
                    children: (n = l.slice(0, -1).map(e => {
                        let i = u[e];
                        return "string" == typeof i.title ? i.title : "Product"
                    }), `Comparison table showing features of Ultrahuman Ring AIR compared to ${n.join(", ")}. Features include form factor, weight, real-time metrics, sleep tracking, movement tracking, heart rate monitoring, HRV monitoring, skin temperature tracking, battery life, and other health monitoring capabilities.`)
                }), x ? (0, i.jsx)("table", {
                    className: "thead",
                    style: {
                        position: "sticky",
                        top: o.headerVisible ? `${Number(o.headerHeight)+51}px` : "51px"
                    },
                    "aria-describedby": "comparison-table-summary",
                    children: (0, i.jsx)("thead", {
                        children: (0, i.jsxs)("tr", {
                            children: [(0, i.jsx)("th", {
                                className: "title",
                                scope: "col",
                                children: (0, i.jsx)("div", {
                                    className: "title-content",
                                    children: (0, i.jsx)("span", {
                                        className: "bold",
                                        children: s("ring.comparison.uhRing.title")
                                    })
                                })
                            }), (0, i.jsx)("th", {
                                className: "title",
                                scope: "col",
                                children: (0, i.jsx)("div", {
                                    className: "title-content",
                                    children: (0, i.jsx)("select", {
                                        name: "activity-tracker",
                                        className: "bold",
                                        id: "activity-tracker",
                                        onChange: e => m(Number(e.target.value)),
                                        "aria-label": "Select comparison product",
                                        children: u && l ? l.map((e, t) => (0, i.jsx)("option", {
                                            value: e,
                                            children: u[e] ? .title
                                        }, t)) : null
                                    })
                                })
                            })]
                        })
                    })
                }) : (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsxs)("div", {
                        className: "table-header-wrapper",
                        style: {
                            position: "sticky",
                            top: o.headerVisible ? `${Number(o.headerHeight)+51}px` : "51px",
                            marginBottom: "2.5rem",
                            paddingBottom: "1.4rem"
                        },
                        children: [(0, i.jsx)("table", {
                            className: "thead desktop",
                            ref: g,
                            "aria-describedby": "comparison-table-summary",
                            children: (0, i.jsx)("thead", {
                                children: (0, i.jsxs)("tr", {
                                    children: [(0, i.jsx)("th", {
                                        className: "property property-head",
                                        scope: "col",
                                        children: (0, i.jsx)("span", {
                                            className: "bold-text"
                                        })
                                    }), (0, i.jsx)("th", {
                                        scope: "col",
                                        style: {
                                            borderRight: "1px solid rgba(0,0,0,0.15)"
                                        },
                                        children: (0, i.jsx)("div", {
                                            className: "content product",
                                            children: (0, i.jsx)("span", {
                                                className: "bold-text",
                                                children: s("ring.comparison.uhRing.title")
                                            })
                                        })
                                    }), u && l ? l.map((e, t) => {
                                        if (t !== l.length - 1) return (0, i.jsx)("th", {
                                            className: "th",
                                            scope: "col",
                                            children: (0, i.jsx)("div", {
                                                className: "content ",
                                                children: (0, i.jsx)("span", {
                                                    className: "bold-text",
                                                    children: u[e] ? .title
                                                })
                                            })
                                        }, t)
                                    }) : null]
                                })
                            })
                        }), (0, i.jsx)("button", {
                            className: "caret-button",
                            onClick: function() {
                                var e;
                                let i = [...l];
                                e = 1 % i.length, c(i.slice(e).concat(i.slice(0, e)))
                            },
                            "aria-label": "Rotate comparison products",
                            tabIndex: 0,
                            children: (0, i.jsx)(v.CustomImage, {
                                src: "web_v2/ring-buy/comparison/sliderArrowRight.png",
                                width: 24,
                                height: 24,
                                alt: "Rotate comparison products",
                                className: "arrow-icon"
                            })
                        })]
                    })
                }), x ? (0, i.jsx)(ej, {
                    data: u,
                    selectedActivityTrackerId: h
                }) : (0, i.jsx)(ew, {
                    data: u,
                    comparatorsOrder: l
                })]
            })
        })
    }).withConfig({
        displayName: "NewComparison",
        componentId: "sc-98d3d950-0"
    })
    `
  ${N.sectionPadding}
  ${g.gridMixin}
  position :  relative;
  background: #fff;
  grid-column: 0 / 10;

  .sticky-wrapper {
    grid-column: 2 /-2;
    height: 100%;

    // width: 100vw;

    table.desktop {
      overflow: visible;
      position: relative;
    }

    /* Remove .table-controls styles since caret is now in header */
    .table-controls {
      display: none;
    }
    .table-header-wrapper {
      position: relative;
    }

    .caret-button {
      position: absolute;
      top: calc(50% - 5px);
      right: 3px;
      transform: translateY(-50%);
      border: none;
      display: block;
      height: 24px;
      width: 24px;
      background: transparent;
      transition: all 0.2s ease;
      border-radius: 50%;
      z-index: 10;
      cursor: pointer;
      &:hover {
        filter: invert(0.7);
      }
      img {
        position: relative;
        top: -1.5px;
        left: -1.5px;
      }
    }

    /* Screen reader only class */
    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    }

    .table-header-wrapper {
      position: relative;
      background: #fff;
      color: #000;
      width: 100%;
      z-index: 10;
      transition: all 0.3s ease-in-out;
      border-bottom: 1px solid #e5e5e5;
    }

    table.thead {
      left: 0;
      background: #fff;
      color: #000;
      width: 100%;
      z-index: 10;
      transition: all 0.3s ease-in-out;

      @media (max-width: ${({theme:e})=>e.globalV2.lg.minWidth}) {
        border-bottom: 1px solid #e5e5e5;
      }

      thead tr {
        position: relative;
      }
    }

    h3:last-of-type {
      color: #000;
    }

    h3 {
      color: rgb(109, 114, 120);
      font-size: 32px;
      font-weight: 500;
      letter-spacing: -0.38px;
      line-height: 112%;
      margin-bottom: 10px;

      @media screen and (min-width: 480px) {
        margin-top: 15rem;
        font-size: 80px;
        letter-spacing: -2.63px;
        line-height: 80px;
        margin-bottom: 15px;
      }
    }

    p.subHead {
      color: #000;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 130%; /* 26px */
      letter-spacing: -0.64px;
      @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
        font-size: 20px;
        letter-spacing: -0.8px;
        margin-bottom: 48px;
      }
    }

    th {
      vertical-align: initial;
      text-align: center;
      padding: 24px 10px;
      height: 100%;
      width: 20.5%;
      // animation: slide 2s linear;
      &:first-child {
        text-align: left;
      }

      @media (max-width: ${({theme:e})=>e.globalV2.lg.minWidth}) {
        vertical-align: initial;
        text-align: left;
        padding: 17px 8px 56px;
        height: 100%;
        width: 50%;

        &:first-child {
          position: relative;
          .prop {
            position: absolute;
            top: 0;
            left: 90%;
            color: blue;
            font-size: 14px;
          }
        }

        &.title {
          padding: 25px 2px;
        }
      }
    }

    .property {
      color: #000;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 120%; /* 19.2px */
      width: 18%;
    }

    .property-head {
      color: #000;
      font-weight: 600;
    }

    .bold {
      @media (max-width: ${({theme:e})=>e.globalV2.lg.minWidth}) {
        color: #000;
        font-size: 17px;
        font-weight: 500;
        line-height: 30px;
      }
    }

    .bold-text {
      color: #000;
      text-align: left;
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: 140%; /* 28px */
      letter-spacing: -0.8px;

      @media (min-width: ${({theme:e})=>e.globalV2.lg.minWidth}) {
        text-align: center;
      }
    }

    & .title {
      .title-content {
        height: 100%;
        text-align: left;
        display: flex;
        flex-direction: column;
        .img-container {
          margin: 0 auto 9px 0;
          position: relative;
          width: 3.2rem;
          height: 3.2rem;
          aspect-ratio: 1/1;

          img {
            height: unset !important;
            aspect-ratio: 1/1;
          }
        }

        select {
          appearence: none;
          -webkit-appearance: none;
          background: url('${(0,er.getAssetUrl)("/web/icons/down-caret.svg")}')
            no-repeat 0 0;
          background-position: right 0.5rem top 50%;
        }

        button,
        select {
          border: none;
          outline: none;
          text-align: left;
          background-color: transparent;
        }
      }
    }
  }
`;
    var ev = e.i(86332),
        eN = e.i(20620),
        e_ = e.i(48062);
    let ek = (0, l.default)(ev.ButtonV2).withConfig({
        displayName: "ReviewsSection__ViewAllButton",
        componentId: "sc-fa8f87f9-0"
    })
    `
  background: #000 !important;
  color: #ffffff !important;

  &:disabled {
    opacity: 0.4;
  }
`, eC = (0, l.default)(ev.ButtonV2).withConfig({
        displayName: "ReviewsSection__ViewAllButtonMobile",
        componentId: "sc-fa8f87f9-1"
    })
    `
  background: #000 !important;
  color: #ffffff !important;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 28px;
  z-index: 20;
  display: none;

  &:disabled {
    opacity: 0.4;
  }

  @media (max-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    display: inline-flex;
  }

  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    display: none !important;
  }
`, eS = (0, l.default)(({
        className: e,
        htmlId: r
    }) => {
        let {
            t: a
        } = (0, t.useTranslation)("ring"), {
            reviews: n,
            loading: s,
            error: o
        } = (0, eN.useReviews)({
            limit: 14,
            page: 1,
            requireContent: !0,
            sort: "short,date,media",
            order: "dsc",
            minRating: 4,
            hasMedia: !1,
            maxContentLength: 600
        });
        return (0, i.jsxs)("section", {
            className: e,
            id: r,
            children: [(0, i.jsxs)(y.Container, {
                className: "reviews-container",
                children: [(0, i.jsxs)("div", {
                    className: "reviews-header",
                    children: [(0, i.jsx)("h2", {
                        className: "reviews-title",
                        children: a("ring.reviewsSection.title")
                    }), (0, i.jsx)(ek, {
                        className: "view-all-desktop",
                        href: "/ring/reviews",
                        "data-buttontype": "reviews_view_all_button",
                        children: a("ring.reviewsSection.button")
                    })]
                }), s && (0, i.jsx)("p", {
                    className: "reviews-placeholder",
                    children: "Loading reviews..."
                }), o && (0, i.jsx)("p", {
                    className: "reviews-placeholder",
                    children: o
                }), !s && !o && 0 === n.length && (0, i.jsx)("p", {
                    className: "reviews-placeholder",
                    children: "No reviews available yet."
                }), !s && !o && n.length > 0 && (0, i.jsx)("div", {
                    className: "reviews-bento",
                    children: n.map(e => (0, i.jsx)(e_.ReviewCard, {
                        review: e
                    }, e.review_id))
                })]
            }), (0, i.jsx)(eC, {
                href: "/ring/reviews",
                "data-buttontype": "reviews_view_all_button_mobile",
                children: a("ring.reviewsSection.button")
            }), (0, i.jsx)("div", {
                className: "gradient-overlay"
            })]
        })
    }).withConfig({
        displayName: "ReviewsSection",
        componentId: "sc-fa8f87f9-2"
    })
    `
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  padding: 80px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  position: relative;
  overflow: hidden;

  @media (max-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    padding: 56px 0;
  }

  .reviews-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }

  .reviews-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
  }

  .view-all-desktop {
    @media (max-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
      display: none !important;
    }
  }

  .reviews-title {
    color: #000;
    max-width: 25ch;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%;
    letter-spacing: -1.28px;
    text-align: center;
    margin: 0;

    @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
      font-size: 48px;
      letter-spacing: -1.92px;
    }
  }

  .reviews-placeholder {
    font-size: 16px;
    font-weight: 400;
    line-height: 140%;
    color: rgba(0, 0, 0, 0.6);
    margin: 0;
    text-align: center;
  }

  .reviews-bento {
    width: 100%;
    columns: 4;
    column-gap: 20px;
    margin-top: 40px;

    @media (max-width: 1440px) {
      columns: 3;
      column-gap: 20px;
    }

    @media (max-width: 1024px) {
      columns: 2;
      column-gap: 20px;
    }

    @media (max-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
      columns: 1;
      column-gap: 20px;
      margin-top: 12px;
    }
  }

  .gradient-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 20vh;
    background: linear-gradient(to top, #ffffff, rgba(255, 255, 255, 0));
    pointer-events: none;
    z-index: 10;
  }
`;
    var eI = e.i(9433),
        eR = e.i(8153),
        eA = e.i(53147),
        eT = e.i(98039),
        eW = e.i(59207);
    let eM = (0, l.default)(({
        className: e,
        onLoad: n
    }) => {
        let s = (0, a.useRef)(null),
            o = (0, a.useRef)(null),
            l = (0, a.useRef)(null),
            c = (0, r.useRouter)(),
            [d, p] = (0, a.useState)(null),
            g = {
                sm: {
                    tag: "w_800",
                    width: 800,
                    height: 450,
                    frameStep: 1,
                    dir_tag: "lg",
                    duration: 4,
                    frameCount: 115
                },
                lg: {
                    tag: "w_1920",
                    width: 1920,
                    height: 1080,
                    frameStep: 1,
                    dir_tag: "lg",
                    duration: 4,
                    frameCount: 115
                }
            },
            {
                t: f
            } = (0, t.useTranslation)("ring"),
            b = (0, a.useRef)(null),
            j = (0, E.useGsapContext)(),
            w = (0, a.useRef)(null);
        (0, a.useEffect)(() => {
            window.innerWidth < 768 ? p("sm") : p("lg");
            let e = setTimeout(() => {
                s.current && "voyager-charger" === c.query.ps && window.scrollTo({
                    top: s.current.offsetTop,
                    behavior: "smooth"
                })
            }, 100);
            return () => {
                e && clearTimeout(e)
            }
        }, []), (0, O.useIsomorphicLayoutEffect)(() => {
            if (d && l.current) return v(), w.current = new IntersectionObserver(e => {
                if (e[0].intersectionRatio <= 0) {
                    b.current && b.current.pause();
                    return
                }
                b.current && b.current.play()
            }, {
                root: null,
                rootMargin: "300px",
                threshold: .01
            }), w.current.observe(l.current), () => {
                w.current && w.current.disconnect()
            }
        }, [d]);
        let v = () => {
                if (!window || !o.current || !d) return;
                let e = g[d].frameCount,
                    i = [],
                    t = o.current,
                    r = t.getContext("2d");
                t.width = g[d].width, t.height = g[d].height;
                let a = e => (0, er.getCompressedAssetUrl)(`/web_v2/sequence/travel-charger/${(e+1).toString().padStart(3,"0")}.png/${g[d].tag}`);
                if (r) {
                    let e = new Image;
                    e.src = a(0), e.onload = () => {
                        r.drawImage(e, 0, 0)
                    }
                }
                let s = {
                    frame: 0
                };
                for (let t = 0; t < e; t += g[d].frameStep) {
                    let e = new Image;
                    e.loading = "eager", e.src = a(t), i.push(e)
                }
                Promise.all(i.filter(e => !e.complete).map(e => new Promise(i => {
                    e.onload = e.onerror = i
                }))).then(() => {
                    n && n(), b.current ? .progress(0), b.current ? .play(), b.current ? .play()
                });
                let l = () => {
                    !i[s.frame].complete || 0 === i[s.frame].naturalHeight || r && requestAnimationFrame(() => {
                        r.clearRect(0, 0, t.width, t.height), r.drawImage(i[s.frame], 0, 0)
                    })
                };
                j.add(() => {
                    b.current = P.default.timeline({
                        defaults: {
                            duration: 1,
                            ease: "none",
                            reversed: !0
                        },
                        paused: !0
                    }), b.current ? .fromTo(s, {
                        frame: 1
                    }, {
                        repeat: -1,
                        frame: i.length - 1,
                        duration: g[d].duration,
                        snap: "frame",
                        ease: "linear",
                        onUpdate: l,
                        yoyo: !0
                    })
                })
            },
            N = (0, a.useContext)(x.ModalContext),
            {
                defaultCurrency: _
            } = (0, a.useContext)(u.RingSelectionContext),
            {
                store: k
            } = (0, a.useContext)(m.CartContext),
            {
                query: C
            } = (0, r.useRouter)();
        return (0, i.jsx)("section", {
            className: e,
            id: "voyager-charger",
            ref: s,
            children: (0, i.jsxs)(y.Container, {
                className: "section-content",
                ref: l,
                children: [(0, i.jsxs)("div", {
                    className: "text-content",
                    children: [(0, i.jsx)("h2", {
                        children: f("ring.voyagerCharger.title")
                    }), (0, i.jsx)(eI.P, {
                        children: f("ring.voyagerCharger.subtitle")
                    }), (0, i.jsx)("div", {
                        className: "cta-container",
                        children: (0, i.jsxs)(eA.default, {
                            className: "cta primary",
                            prefetch: !0,
                            href: {
                                pathname: `/shop${k?"/"+eW.shopifyCountryMapper[k]:""}`,
                                query: { ...C
                                },
                                hash: "addons"
                            },
                            children: [f("ring.voyagerCharger.buyNow"), " ", h.CurrencySymbol[_.toLowerCase()], k && (0, i.jsx)(i.Fragment, {
                                children: (0, h.formatPriceWithComma)(eT.TravelChargerShopifyMap[k].price)
                            })]
                        })
                    }), (0, i.jsx)("p", {
                        className: "sub-text",
                        children: "ships in 2-3 days"
                    }), (0, i.jsxs)("button", {
                        className: "learn-more",
                        onClick: () => {
                            N.set((0, i.jsx)(eR.TravelChargerPricingModal, {})), N.show()
                        },
                        children: [f("ring.voyagerCharger.learnMore"), " ", (0, i.jsx)(A.CaretUp, {
                            style: {
                                transform: "rotate(90deg)"
                            }
                        })]
                    })]
                }), (0, i.jsx)("canvas", {
                    ref: o
                })]
            })
        })
    }).withConfig({
        displayName: "TravelChargerSequence",
        componentId: "sc-38c501b0-0"
    })
    `
  position: relative;
  width: 100vw;

  background: #000;
  color: white;

  button.sub-text {
    background: transparent;
    outline: none;
    border: none;
  }

  canvas {
    height: 100%;
    width: 100%;
    aspect-ratio: 16/9;
    object-fit: cover;
    border-radius: 16px;
    @media (min-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
      border-radius: 24px;
    }
  }

  & .section-content {
    padding: 6rem 0;
    @media (min-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
      padding: 15rem 0;
    }

    padding-left: 16px;
    padding-right: 16px;
    display: flex;
    flex-direction: column;
    gap: 32px;

    & .text-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 8px;

      @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
        gap: 12px;
      }

      img {
        padding: 1px;
        object-fit: contain;
        object-position: center;
      }

      .sub-text {
        color: rgba(255, 255, 255, 0.8);
        text-align: center;
        font-family: Inter
        font-size: 9px;
        font-weight: 500;
        line-height: normal;
        letter-spacing: 0.72px;
        text-transform: uppercase;
        @media (min-width: ${({theme:e})=>e.global.phone.maxWidth}) {
          font-size: 12px;
        }
      }

      .learn-more {
        color: #fff;
        text-align: center;
        font-weight: 500;
        background: none;
        border: none;
        outline: none;
        display: flex;
        align-items: center;
        line-height: 100%;
        margin-top: 2px;
        gap: 4px;

        font-size: ${({theme:e})=>e.typographyV2.fontSize.mediumsmall};
       svg {
          width: 10px;
          height: 10px;
        }
      }

      h2 {
        color: #fff;
        text-align: center;
        font-style: normal;
        font-size: 44px;
        font-weight: 500;
        line-height: 100%; /* 112.5% */
        margin-bottom: 8px;

        @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
          font-size: 64px;
          line-height: 72px; /* 112.5% */
          letter-spacing: -3.84px;
          margin-bottom: 0;
        }
      }

      h2,
      p {
        text-align: center;
      }

      p {
        max-width: 27ch;
        margin: 0 auto;

        @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
          max-width: 50ch;
        }
      }

      .tag {
        font-size: 16px;
        font-weight: 500;
        line-height: 120%;
        letter-spacing: 1.92px;
        text-transform: uppercase;
      }
    }
  }

  button.replay-btn {
    position: absolute;
    bottom: 24px;
    left: 50%;
    transform: translateX(-50%);
    background: white;
    color: black;
    -webkit-backdrop-filter: blur(24px);
    backdrop-filter: blur(24px);
    color: #ffffff99;
    border-radius: 24px;
    padding: 8px 24px;
    font-size: 1.1rem;
    font-weight: 500;
    letter-spacing: 3px;
    text-transform: uppercase;
    cursor: pointer;
    border: none;

    @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
      transform: unset;
      left: 24px;
    }
  }

  .sm-ctas {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    position: absolute;
    bottom: 80px;

    @media (min-width: ${({theme:e})=>e.globalV2.sm.maxWidth}) {
      display: none;
    }
  }

  .sm-none {
    display: none !important;
    @media (min-width: ${({theme:e})=>e.globalV2.sm.maxWidth}) {
      display: inline-block !important;
    }
  }

  .hsa-info {
    padding: 4px 8px;
    font-size: 12px;
    letter-spacing: 1px;
    color: #cecece;
    margin-top: 4px;

    svg {
      height: 10px;
      width: auto;
      margin-right: 6px;
      transform: translateY(0.5px);
    }
  }
  .cta-container {
    display: flex;
    gap: 8px;
  }

  .cta {
    width: fit-content;
    display: inline-block;
    padding: 8px 16px;
    font-size: ${({theme:e})=>e.typographyV2.fontSize.mediumsmall};
    font-weight: 500;
    cursor: pointer;
    margin-top: 12px;
    background: transparent;
    border: none;

    @media (min-width: ${({theme:e})=>e.globalV2.xxxl.minWidth}) {
      font-size: ${({theme:e})=>e.typographyV2.fontSize.small};
    }
    border-radius: 50px;
    padding: 8px 12px;

    @media (min-width: 400px) {
      padding: 12px 24px;
    }

    &.primary {
      color: #ffffff;
      background: #fff;
      color: #000;

      transition: all 0.2s ease-in-out;
      margin: 0 auto;
      margin-top: 8px;
      &:hover {
        box-shadow: 0 0 12px rgba(255, 255, 255, 0.9);
      }

      // fix later
      display: flex;
      align-items: center;

      @media (min-width: ${({theme:e})=>e.globalV2.lg.minWidth}) {
        margin-top: 16px;
      }
    }

    &.secondry {
      color: #ffffff;
      font-size: 1.6rem;
      background: transparent;
      margin: 0 auto;
      margin-top: 8px;
      border: 2px solid #fff;

      img,
      svg {
        height: 9px;
        width: auto;
      }
      @media (min-width: ${({theme:e})=>e.globalV2.lg.minWidth}) {
        margin-top: 16px;
      }
    }
  }
`;
    var ez = e.i(64130),
        eF = e.i(91898),
        eV = e.i(228),
        eU = e.i(52126);
    let eD = ({
            defaultSize: e,
            defaultColor: n,
            defaultUhx: s,
            estimates: o,
            region: l
        }) => {
            let d = (0, r.useRouter)(),
                {
                    regionSlug: h,
                    currency: m
                } = (0, a.useContext)(R.RegionLocaleContext),
                p = d.query.locale,
                {
                    t: g
                } = (0, t.useTranslation)("ring"),
                x = m ? ? eV.Currency.eur;
            (0, a.useEffect)(() => {
                p && !(0, eF.isProductAvailable)(p, "ring") && d.replace(`/${h}/ring/buy/global`)
            }, [p, d]);
            let {
                offersData: f,
                secondaryOfferData: b
            } = (0, eU.getOffersForRegion)(l ? ? p ? .toUpperCase() ? ? "DE", {
                t: g,
                regionSlug: h,
                router: d
            });
            return (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(C.SEO, {
                    title: "Ultrahuman Ring | Pricing",
                    description: "Ultrahuman Ring AIR is the world's most comfortable and compact smart ring that monitors your sleep, movement and recovery.",
                    image: (0, er.getCompressedAssetUrl)("/web_v2/meta-assets/ring-air-og-lg.png"),
                    basePath: "/ring/buy"
                }), (0, i.jsxs)(u.RingSelectionContextProvider, {
                    currency: x,
                    defaultSize: e,
                    defaultColor: n ? ? c.AirRingColors.RAW_TITANIUM,
                    defaultUhx: s,
                    estimates: o,
                    children: [(0, i.jsx)(w.ProductSelectionSection, {
                        description: "A comfortable and sleek smart ring that tracks your sleep, movement and recovery trends, nudging you to make healthier choices every day.",
                        secondaryOfferData: b,
                        offersData: f
                    }), (0, i.jsx)($, {}), (0, i.jsx)(k.Contents, {
                        htmlId: "ring-contents"
                    }), (0, i.jsx)(eM, {}), (0, i.jsx)(eS, {
                        htmlId: "ring-reviews"
                    }), (0, i.jsx)(q, {}), (0, i.jsx)(eb, {
                        htmlId: "ring-sleep"
                    }), (0, i.jsx)(eh, {}), (0, i.jsx)(_, {}), (0, i.jsx)(ey, {
                        htmlId: "ring-comparision"
                    }), (0, i.jsx)(J.SolidBgTextSection, {}), (0, i.jsx)(Y.Capabilities, {
                        htmlId: "ring-capabilities"
                    }), (0, i.jsx)(S.TechnicalSpecs, {
                        htmlId: "ring-specs"
                    }), (0, i.jsx)(K.ProductWizard, {
                        title: g("ring.productWizard.contentA")
                    }), (0, i.jsx)(ez.FAQSection, {
                        faqData: I.ringBuyPageFaqData_AE,
                        htmlId: "ring-faq"
                    }), (0, i.jsx)(j, {})]
                })]
            })
        },
        e$ = ({
            defaultSize: e,
            defaultColor: n,
            defaultUhx: s,
            estimates: o,
            region: l
        }) => {
            let d = (0, r.useRouter)(),
                {
                    regionSlug: h,
                    currency: m
                } = (0, a.useContext)(R.RegionLocaleContext),
                {
                    t: p
                } = (0, t.useTranslation)("ring"),
                g = m ? ? eV.Currency.usd,
                {
                    offersData: x,
                    secondaryOfferData: f
                } = (0, eU.getOffersForRegion)(l ? ? d.locale ? .toUpperCase() ? ? "ROW", {
                    t: p,
                    regionSlug: h,
                    router: d
                });
            return (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(C.SEO, {
                    title: "Ultrahuman Ring | Pricing",
                    description: "Ultrahuman Ring AIR is the world's most comfortable and compact smart ring that monitors your sleep, movement and recovery.",
                    image: (0, er.getCompressedAssetUrl)("/web_v2/meta-assets/ring-air-og-lg.png"),
                    basePath: "/ring/buy"
                }), (0, i.jsxs)(u.RingSelectionContextProvider, {
                    currency: g,
                    defaultSize: e,
                    defaultColor: n ? ? c.AirRingColors.RAW_TITANIUM,
                    defaultUhx: s,
                    estimates: o,
                    children: [(0, i.jsx)(w.ProductSelectionSection, {
                        description: "A comfortable and sleek smart ring that tracks your sleep, movement and recovery trends, nudging you to make healthier choices every day.",
                        secondaryOfferData: f,
                        offersData: x
                    }), (0, i.jsx)($, {}), (0, i.jsx)(k.Contents, {
                        htmlId: "ring-contents"
                    }), (0, i.jsx)(eM, {}), (0, i.jsx)(eS, {
                        htmlId: "ring-reviews"
                    }), (0, i.jsx)(q, {}), (0, i.jsx)(eb, {
                        htmlId: "ring-sleep"
                    }), (0, i.jsx)(eh, {}), (0, i.jsx)(_, {}), (0, i.jsx)(ey, {
                        htmlId: "ring-comparision"
                    }), (0, i.jsx)(J.SolidBgTextSection, {}), (0, i.jsx)(Y.Capabilities, {
                        htmlId: "ring-capabilities"
                    }), (0, i.jsx)(S.TechnicalSpecs, {
                        htmlId: "ring-specs"
                    }), (0, i.jsx)(K.ProductWizard, {
                        title: p("ring.productWizard.contentA")
                    }), (0, i.jsx)(ez.FAQSection, {
                        faqData: (0, I.getRingBuyPageFaqData)(p),
                        htmlId: "ring-faq"
                    }), (0, i.jsx)(j, {})]
                })]
            })
        };
    var eE = e.i(72218),
        eP = e.i(75703),
        eB = e.i(25939);
    let eO = e => {
            try {
                window.localStorage.setItem(eB.RETOUCH_STORAGE_KEY, JSON.stringify(e))
            } catch (e) {
                console.error("[RetouchFlow] Error writing localStorage:", e)
            }
        },
        eL = (e, i) => {
            try {
                window.dataLayer ? .push({
                    event: e,
                    ...i
                })
            } catch (e) {
                console.error("[RetouchFlow] Error pushing to dataLayer:", e)
            }
        },
        eG = () => {
            let e = window.innerWidth;
            return e < 768 ? "mobile" : e < 1024 ? "tablet" : "desktop"
        };
    var eH = e.i(4725),
        eq = eB;
    let eY = l.keyframes `
  from { transform: translateY(-100%); }
  to { transform: translateY(0); }
`,
        eK = l.keyframes `
  0% { opacity: 1; }
  50% { opacity: 0.8; }
  100% { opacity: 1; }
`;
    l.default.div.withConfig({
        displayName: "SpecialOfferBanner__BannerContainer",
        componentId: "sc-6252a31c-0"
    })
    `
  position: relative;
  animation: ${eY} 0.3s ease-out;

  display: flex;
  border-radius: 8px;
  background: linear-gradient(
      0deg,
      rgba(115, 115, 115, 0.05) 0%,
      rgba(115, 115, 115, 0.05) 100%
    ),
    #fff;
  overflow: hidden;
  justify-content: space-between;
  padding: 0 4rem;

  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    gap: 5rem;
    justify-content: center;
    padding: 2.4rem 4rem;
    margin: 1.6rem 2rem;
  }
`, l.default.div.withConfig({
        displayName: "SpecialOfferBanner__OffersImageContainer",
        componentId: "sc-6252a31c-1"
    })
    `
  display: flex;
  img {
    width: 4rem;
    height: auto;
    margin-left: -16px;
    border: 2px solid var(--element-color);

    &:first-child {
      margin-left: 0;
    }
  }
`, l.default.div.withConfig({
        displayName: "SpecialOfferBanner__Offer",
        componentId: "sc-6252a31c-2"
    })
    `
  padding: 1.2rem 1.6rem;
  color: ${({theme:e,highlighted:i})=>i?e.colors.secondary||"#000":e.colors.primary};
  border-radius: 8px;
  display: flex;
  align-items: center;
  position: relative;
  // box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  // margin-bottom: ${({highlighted:e})=>e?"0":"1rem"};

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;

  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    width: 29rem;
  }

  ${({highlighted:e})=>e&&l.css`
    animation: $ {
        eK
    }
    2 s infinite ease - in -out;
    `}
`, l.default.div.withConfig({
        displayName: "SpecialOfferBanner__OfferContent",
        componentId: "sc-6252a31c-3"
    })
    `
  flex: 1;
`, l.default.h3.withConfig({
        displayName: "SpecialOfferBanner__OfferTitle",
        componentId: "sc-6252a31c-4"
    })
    `
  color: #000;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 16.8px */
  letter-spacing: -0.56px;

  b {
    font-weight: 500;
  }
`, l.default.p.withConfig({
        displayName: "SpecialOfferBanner__OfferDescription",
        componentId: "sc-6252a31c-5"
    })
    `
  font-size: 1.4rem;
  margin: 0;
  line-height: 1.4;
`;
    let eJ = "2123-12-31T23:59:59.999Z",
        eQ = {
            showUhx: !1,
            showBundles: !1,
            enableTradeIn: !1,
            featuredAddons: ["Year1"],
            defaultAddon: null,
            specialOffers: [],
            bundleOptions: [],
            isFreeShipping: !1,
            estimatedDeliveryDays: 10,
            expressShippingAvailable: !1,
            expressShippingCost: 0,
            taxIncluded: !1,
            taxRate: 0,
            requiresAgeVerification: !1,
            showEuCookieBanner: !1,
            termsUrl: "https://ultrahuman.com/terms",
            enabledPaymentMethods: ["credit_card", "paypal"],
            installmentPaymentAvailable: !1,
            retouchFlow: {
                ringBuyPage: !1
            }
        },
        eX = {
            IN: {
                showUhx: !0,
                showBundles: !0,
                featuredAddons: ["Year1", "Year2"],
                defaultAddon: "Year1",
                isFreeShipping: !0,
                estimatedDeliveryDays: 5,
                expressShippingAvailable: !0,
                expressShippingCost: 500,
                taxIncluded: !0,
                taxRate: 18,
                customHeaderComponent: "IndiaHeader",
                enabledPaymentMethods: ["credit_card", "upi", "netbanking", "cod"],
                installmentPaymentAvailable: !0,
                installmentOptions: [{
                    count: 3,
                    provider: "bajaj",
                    interestRate: 0
                }, {
                    count: 6,
                    provider: "bajaj",
                    interestRate: 12
                }]
            },
            US: {
                showUhx: !0,
                showBundles: !0,
                featuredAddons: ["Year1", "Year2"],
                specialOffers: [{
                    id: "hsa_fsa",
                    title: "HSA / FSA | Powered by Flex",
                    image: ["web_v2/icons/primary_offers/hsafsa.png"]
                }, {
                    id: "apr_financing",
                    title: "As low as 0 APR financing | Klarna, AfterPay & Affirm",
                    image: ["web_v2/icons/primary_offers/afterpay.png", "web_v2/icons/primary_offers/klara.png", "web_v2/icons/primary_offers/affirmm.png"],
                    endDate: eJ
                }, {
                    id: "shop_pay",
                    title: "Shop Pay | Pay in full or in parts",
                    image: ["web_v2/icons/primary_offers/shoppay.png"],
                    endDate: eJ
                }, {
                    id: "instant_pay",
                    title: "Instant payment with PayPal, Apple Pay, or GPay",
                    image: ["web_v2/icons/primary_offers/paypal.png", "web_v2/icons/primary_offers/applepay.png", "web_v2/icons/primary_offers/gpay.png"]
                }, {
                    id: "crypto_usdc",
                    title: "Crypto payments with USDC",
                    image: ["web_v2/icons/primary_offers/usdc-2.png"]
                }],
                estimatedDeliveryDays: 7,
                expressShippingAvailable: !0,
                expressShippingCost: 15,
                taxIncluded: !1,
                taxRate: 0,
                enabledPaymentMethods: ["credit_card", "paypal", "apple_pay", "google_pay"],
                installmentPaymentAvailable: !0,
                installmentOptions: [{
                    count: 4,
                    provider: "afterpay",
                    interestRate: 0
                }],
                retouchFlow: {
                    ringBuyPage: !1
                }
            },
            PR: {
                showUhx: !0,
                showBundles: !0,
                featuredAddons: ["Year1", "Year2"],
                specialOffers: [{
                    id: "hsa_fsa",
                    title: "HSA / FSA | Powered by Flex",
                    image: ["web_v2/icons/primary_offers/hsafsa.png"]
                }, {
                    id: "apr_financing",
                    title: "As low as 0 APR financing | Klarna, AfterPay & Affirm",
                    image: ["web_v2/icons/primary_offers/afterpay.png", "web_v2/icons/primary_offers/klara.png", "web_v2/icons/primary_offers/affirmm.png"],
                    endDate: eJ
                }, {
                    id: "shop_pay",
                    title: "Shop Pay | Pay in full or in parts",
                    image: ["web_v2/icons/primary_offers/shoppay.png"],
                    endDate: eJ
                }, {
                    id: "instant_pay",
                    title: "Instant payment with PayPal, Apple Pay, or GPay",
                    image: ["web_v2/icons/primary_offers/paypal.png", "web_v2/icons/primary_offers/applepay.png", "web_v2/icons/primary_offers/gpay.png"]
                }, {
                    id: "crypto_usdc",
                    title: "Crypto payments with USDC",
                    image: ["web_v2/icons/primary_offers/usdc-2.png"]
                }],
                estimatedDeliveryDays: 7,
                expressShippingAvailable: !0,
                expressShippingCost: 15,
                taxIncluded: !1,
                taxRate: 0,
                enabledPaymentMethods: ["credit_card", "paypal", "apple_pay", "google_pay"],
                installmentPaymentAvailable: !0,
                installmentOptions: [{
                    count: 4,
                    provider: "afterpay",
                    interestRate: 0
                }],
                retouchFlow: {
                    ringBuyPage: !1
                }
            },
            CA: {
                showUhx: !0,
                showBundles: !0,
                featuredAddons: ["Year1", "Year2"],
                specialOffers: [{
                    id: "instant_pay",
                    title: "Instant payment with PayPal or Apple Pay",
                    image: ["web_v2/icons/primary_offers/paypal.png", "web_v2/icons/primary_offers/applepay.png"]
                }, {
                    id: "crypto_usdc",
                    title: "Crypto payments with USDC",
                    image: ["web_v2/icons/primary_offers/usdc-2.png"]
                }],
                estimatedDeliveryDays: 7,
                expressShippingAvailable: !0,
                expressShippingCost: 15,
                taxIncluded: !1,
                taxRate: 0,
                enabledPaymentMethods: ["credit_card", "paypal", "apple_pay"],
                installmentPaymentAvailable: !1
            },
            GB: {
                showUhx: !0,
                featuredAddons: ["Year2"],
                defaultAddon: "Year2",
                specialOffers: [{
                    id: "no_cost_emi",
                    title: "No cost EMI starting at",
                    image: ["web_v2/icons/primary_offers/0-percent.png"],
                    endDate: eJ
                }, {
                    id: "cred_pay",
                    title: "CRED Pay | Earn rewards, pay later options",
                    image: ["web_v2/icons/primary_offers/cred.png"]
                }, {
                    id: "easy_upi",
                    title: "Easy payments with UPI",
                    image: ["web_v2/icons/primary_offers/upi.png"]
                }],
                estimatedDeliveryDays: 5,
                expressShippingAvailable: !0,
                expressShippingCost: 10,
                taxIncluded: !0,
                taxRate: 20,
                enabledPaymentMethods: ["credit_card", "paypal", "apple_pay"],
                showEuCookieBanner: !0,
                retouchFlow: {
                    ringBuyPage: !1
                }
            },
            EU: {
                showUhx: !0,
                featuredAddons: ["Year1", "Year2"],
                specialOffers: [{
                    id: "no_cost_emi",
                    title: "No cost EMI starting at",
                    image: ["web_v2/icons/primary_offers/0-percent.png"],
                    endDate: eJ
                }, {
                    id: "cred_pay",
                    title: "CRED Pay | Earn rewards, pay later options",
                    image: ["web_v2/icons/primary_offers/cred.png"]
                }, {
                    id: "easy_upi",
                    title: "Easy payments with UPI",
                    image: ["web_v2/icons/primary_offers/upi.png"]
                }],
                estimatedDeliveryDays: 7,
                expressShippingAvailable: !0,
                expressShippingCost: 12,
                taxIncluded: !0,
                taxRate: 21,
                customFooterComponent: "EuFooter",
                enabledPaymentMethods: ["credit_card", "paypal", "sepa", "sofort"],
                showEuCookieBanner: !0
            },
            AE: {
                showUhx: !1,
                featuredAddons: ["Year2"],
                specialOffers: [{
                    id: "no_cost_emi",
                    title: "No cost EMI starting at",
                    image: ["web_v2/icons/primary_offers/0-percent.png"],
                    endDate: eJ
                }, {
                    id: "cred_pay",
                    title: "CRED Pay | Earn rewards, pay later options",
                    image: ["web_v2/icons/primary_offers/cred.png"]
                }, {
                    id: "easy_upi",
                    title: "Easy payments with UPI",
                    image: ["web_v2/icons/primary_offers/upi.png"]
                }],
                estimatedDeliveryDays: 6,
                expressShippingAvailable: !0,
                expressShippingCost: 50,
                taxIncluded: !0,
                taxRate: 5,
                enabledPaymentMethods: ["credit_card", "apple_pay", "tabby"],
                installmentPaymentAvailable: !0,
                installmentOptions: [{
                    count: 4,
                    provider: "tabby",
                    interestRate: 0
                }]
            }
        },
        eZ = ({
            children: e,
            delayMs: t = eq.MODAL_DELAY_MS,
            disabled: s = !1,
            ignoreCampaigns: o = !1,
            locale: l
        }) => {
            let c, d, h = (0, r.useRouter)(),
                [p, g] = (0, a.useState)(!1),
                u = l ? (d = eX[c = l.toUpperCase()] || {}, "EU" !== c && "GB" !== c && "IN" !== c && "US" !== c && "CA" !== c && "AE" !== c && (e => {
                    switch (e) {
                        case "IN":
                            return eW.ShopifyStore.IN;
                        case "US":
                            return eW.ShopifyStore.US;
                        case "GB":
                            return eW.ShopifyStore.GB;
                        case "AE":
                        case "SA":
                        case "QA":
                        case "BH":
                        case "KW":
                        case "OM":
                            return eW.ShopifyStore.AE;
                        default:
                            if (["AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK", "SI", "ES", "SE"].includes(e)) return eW.ShopifyStore.EU;
                            return eW.ShopifyStore.ROW
                    }
                })(c) === eW.ShopifyStore.EU && (d = { ...eX.EU,
                    ...d
                }), { ...eQ,
                    ...d
                }) : null,
                f = s || u ? .retouchFlow ? .ringBuyPage === !1,
                {
                    visitCount: j,
                    shouldShowModal: w,
                    isModalVisible: y,
                    showModal: v,
                    markModalShown: N,
                    resetModalState: _,
                    claimDiscount: k,
                    isPreExistingUser: C
                } = (() => {
                    let e = (0, r.useRouter)(),
                        {
                            ringVisits: i,
                            isPreExistingUser: t
                        } = (0, eP.useUserAnalyticsContext)(),
                        [s, o] = (0, a.useState)(eB.DEFAULT_RETOUCH_DATA),
                        [l, c] = (0, a.useState)(!1),
                        d = !!(e.query.affiliateCode || e.query.affiliate);
                    (0, a.useEffect)(() => {
                        o((() => {
                            try {
                                let e = window.localStorage.getItem(eB.RETOUCH_STORAGE_KEY);
                                if (e) {
                                    let i = JSON.parse(e);
                                    return {
                                        modalShown: i.modalShown ? ? !1,
                                        discountClaimed: i.discountClaimed ? ? !1
                                    }
                                }
                            } catch (e) {
                                console.error("[RetouchFlow] Error reading localStorage:", e)
                            }
                            return eB.DEFAULT_RETOUCH_DATA
                        })())
                    }, []);
                    let h = (0, a.useRef)(!1),
                        m = (0, a.useRef)(!1),
                        p = i >= eB.VISITS_THRESHOLD;
                    (0, a.useEffect)(() => {
                        if (p && !h.current && !s.modalShown) {
                            h.current = !0;
                            let r = {
                                visitCount: i,
                                threshold: eB.VISITS_THRESHOLD,
                                page: e.pathname,
                                device: eG(),
                                isPreExistingUser: t,
                                isBuyPage: e.pathname.includes(eB.BUY_PAGE_PATTERN)
                            };
                            (0, n.track)(eB.ANALYTICS_EVENTS.ELIGIBLE, r), eL(eB.GTM_EVENTS.ELIGIBLE, r)
                        }
                    }, [p, i, e.pathname, t, s.modalShown]), (0, a.useEffect)(() => {
                        if (!p || !d || m.current || s.modalShown || !e.pathname.includes(eB.BUY_PAGE_PATTERN)) return;
                        m.current = !0;
                        let r = e.query.affiliateCode || e.query.affiliate,
                            a = Array.isArray(r) ? r[0] : r,
                            o = {
                                visitCount: i,
                                threshold: eB.VISITS_THRESHOLD,
                                page: e.pathname,
                                device: eG(),
                                isPreExistingUser: t,
                                existingAffiliateCode: a || ""
                            };
                        (0, n.track)(eB.ANALYTICS_EVENTS.SUPPRESSED_BY_AFFILIATE, o), eL(eB.GTM_EVENTS.SUPPRESSED_BY_AFFILIATE, o)
                    }, [p, d, i, e.pathname, e.query, t, s.modalShown]);
                    let g = p && !s.modalShown && !d && e.pathname.includes(eB.BUY_PAGE_PATTERN),
                        x = (0, a.useCallback)(() => {
                            c(!0);
                            let r = {
                                visitCount: i,
                                threshold: eB.VISITS_THRESHOLD,
                                page: e.pathname,
                                device: eG(),
                                isPreExistingUser: t
                            };
                            (0, n.track)(eB.ANALYTICS_EVENTS.MODAL_SHOWN, r), eL(eB.GTM_EVENTS.MODAL_SHOWN, r)
                        }, [i, e.pathname, t]),
                        u = (0, a.useCallback)(() => {
                            c(!1)
                        }, []),
                        f = (0, a.useCallback)(() => {
                            let r = { ...s,
                                modalShown: !0
                            };
                            eO(r), o(r), u();
                            let a = {
                                visitCount: i,
                                threshold: eB.VISITS_THRESHOLD,
                                page: e.pathname,
                                device: eG(),
                                isPreExistingUser: t
                            };
                            (0, n.track)(eB.ANALYTICS_EVENTS.MODAL_CLOSED, a), eL(eB.GTM_EVENTS.MODAL_CLOSED, a)
                        }, [s, u, i, e.pathname, t]),
                        b = (0, a.useCallback)(() => {
                            let e = { ...eB.DEFAULT_RETOUCH_DATA,
                                modalShown: s.modalShown
                            };
                            eO(e), o(e)
                        }, [s.modalShown]),
                        j = (0, a.useCallback)(() => {
                            let r = {
                                visitCount: i,
                                threshold: eB.VISITS_THRESHOLD,
                                page: e.pathname,
                                device: eG(),
                                isPreExistingUser: t,
                                affiliateCode: eB.RETOUCH_AFFILIATE_CODE
                            };
                            (0, n.track)(eB.ANALYTICS_EVENTS.CTA_CLICKED, r), eL(eB.GTM_EVENTS.CTA_CLICKED, r);
                            let a = {
                                modalShown: !0,
                                discountClaimed: !0
                            };
                            eO(a), o(a), u();
                            let s = new URL(window.location.href);
                            s.searchParams.set("affiliateCode", eB.RETOUCH_AFFILIATE_CODE);
                            let l = s.toString(),
                                c = {
                                    visitCount: i,
                                    threshold: eB.VISITS_THRESHOLD,
                                    page: e.pathname,
                                    device: eG(),
                                    isPreExistingUser: t,
                                    affiliateCode: eB.RETOUCH_AFFILIATE_CODE,
                                    redirectUrl: l
                                };
                            (0, n.track)(eB.ANALYTICS_EVENTS.DISCOUNT_CLAIMED, c), eL(eB.GTM_EVENTS.DISCOUNT_CLAIMED, c), window.location.href = l
                        }, [u, i, e.pathname, t]);
                    return {
                        visitCount: i,
                        shouldShowModal: g,
                        isModalVisible: l,
                        showModal: x,
                        hideModal: u,
                        markModalShown: f,
                        resetModalState: b,
                        claimDiscount: j,
                        hasExistingAffiliateCode: d,
                        isPreExistingUser: t
                    }
                })(),
                {
                    getCampaignForProduct: S,
                    campaignsLoading: I
                } = (0, a.useContext)(m.CartContext),
                R = (0, a.useContext)(x.ModalContext),
                A = o ? void 0 : S("ring"),
                T = !!A,
                W = (0, a.useRef)(!1);
            (0, a.useEffect)(() => {
                if (f || !w || !h.pathname.includes(eq.BUY_PAGE_PATTERN) || !o && I) return;
                if (T) {
                    if (!W.current) {
                        let e;
                        W.current = !0;
                        let i = {
                            visitCount: j,
                            threshold: eq.VISITS_THRESHOLD,
                            page: h.pathname,
                            device: (e = window.innerWidth) < 768 ? "mobile" : e < 1024 ? "tablet" : "desktop",
                            campaignTitle: A ? .title,
                            campaignDiscountCode: A ? .discount_code,
                            isPreExistingUser: C
                        };
                        (0, n.track)(eq.ANALYTICS_EVENTS.SUPPRESSED_BY_CAMPAIGN, i), window.dataLayer ? .push({
                            event: eq.GTM_EVENTS.SUPPRESSED_BY_CAMPAIGN,
                            ...i
                        })
                    }
                    return
                }
                let e = setTimeout(() => {
                    v(), g(!0)
                }, t);
                return () => clearTimeout(e)
            }, [w, h.pathname, t, f, v, T, I, o, j, A, C]);
            let M = () => {
                    N(), g(!1), R.hide()
                },
                z = () => {
                    k(), g(!1), R.hide()
                };
            return (0, a.useEffect)(() => {
                p && y && (R.set((0, i.jsx)(eH.RetouchModalContent, {
                    onClaimDiscount: z,
                    onClose: M
                })), R.setPortal(!0), R.setCloseBtnHidden(!0), R.show())
            }, [p, y]), (0, a.useEffect)(() => (window.showRetouchModal = () => {
                R.set((0, i.jsx)(eH.RetouchModalContent, {
                    onClaimDiscount: () => {
                        R.hide(), console.log("[RetouchFlow] Test: Discount claimed - would redirect with ?affiliateCode=retouch")
                    },
                    onClose: () => {
                        R.hide(), console.log("[RetouchFlow] Test: Modal closed")
                    }
                })), R.setPortal(!0), R.setCloseBtnHidden(!0), R.show(), console.log("[RetouchFlow] Test: Modal shown via window.showRetouchModal()")
            }, () => {
                delete window.showRetouchModal
            }), [R]), (0, i.jsx)(b.RetouchFlowContext.Provider, {
                value: {
                    resetCounter: _,
                    visitCount: j
                },
                children: e
            })
        };
    var e0 = e.i(41292);
    let e1 = ({
            defaultSize: e,
            defaultColor: n,
            defaultUhx: s,
            estimates: o,
            store: l,
            currency: d,
            region: h
        }) => {
            let m = (0, r.useRouter)(),
                {
                    regionSlug: p
                } = (0, a.useContext)(R.RegionLocaleContext),
                {
                    t: g
                } = (0, t.useTranslation)("ring");
            (0, T.useGlobalUI)({
                headerCollaspable: !0
            });
            let x = (0, e0.getRingPricingSchemas)({
                    locale: h.toLowerCase(),
                    country: h.toLowerCase(),
                    store: l,
                    currency: d,
                    defaultColor: n ? ? c.AirRingColors.RAW_TITANIUM
                }),
                {
                    offersData: f,
                    secondaryOfferData: b
                } = (0, eU.getOffersForRegion)(h, {
                    t: g,
                    regionSlug: p,
                    router: m
                });
            return (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(C.SEO, {
                    title: "Ultrahuman Ring | Pricing",
                    description: "Ultrahuman Ring AIR is the world's most comfortable and compact smart ring that monitors your sleep, movement and recovery. Now HSA/FSA eligible.",
                    image: (0, er.getCompressedAssetUrl)("/web_v2/meta-assets/ring-air-og-lg.png/w_1080"),
                    basePath: "/ring/buy"
                }), (0, i.jsx)(eE.JsonLd, {
                    data: x
                }), (0, i.jsxs)(u.RingSelectionContextProvider, {
                    currency: d,
                    defaultSize: e,
                    defaultColor: n ? ? c.AirRingColors.RAW_TITANIUM,
                    defaultUhx: s,
                    estimates: o,
                    notServicable: !0,
                    notServicableMessage: "We're currently unable to sell or ship this product to U.S. addresses. We'll update you here if that changes.",
                    children: [(0, i.jsx)(w.ProductSelectionSection, {
                        description: "A comfortable and sleek smart ring that tracks your sleep, movement and recovery trends, nudging you to make healthier choices every day.",
                        secondaryOfferData: b,
                        offersData: f
                    }), (0, i.jsxs)("div", {
                        style: {
                            filter: "grayscale(1)"
                        },
                        children: [(0, i.jsx)($, {}), (0, i.jsx)(k.Contents, {
                            htmlId: "ring-contents"
                        }), (0, i.jsx)(eS, {
                            htmlId: "ring-reviews"
                        }), (0, i.jsx)(q, {}), (0, i.jsx)(eb, {
                            htmlId: "ring-sleep"
                        }), (0, i.jsx)(eh, {}), (0, i.jsx)(_, {}), (0, i.jsx)(J.SolidBgTextSection, {}), (0, i.jsx)(Y.Capabilities, {
                            htmlId: "ring-capabilities"
                        }), (0, i.jsx)(S.TechnicalSpecs, {
                            htmlId: "ring-specs"
                        }), (0, i.jsx)(K.ProductWizard, {
                            title: g("ring.productWizard.contentA")
                        }), (0, i.jsx)(ez.FAQSection, {
                            faqData: (0, I.getRingBuyPageFaqData)(g),
                            htmlId: "ring-faq"
                        })]
                    }), (0, i.jsx)(j, {})]
                })]
            })
        },
        e2 = ({
            defaultSize: e,
            defaultColor: n,
            defaultUhx: s,
            estimates: o,
            store: l,
            currency: d,
            region: h
        }) => {
            let m = (0, r.useRouter)(),
                {
                    regionSlug: p
                } = (0, a.useContext)(R.RegionLocaleContext),
                {
                    t: g
                } = (0, t.useTranslation)("ring");
            (0, T.useGlobalUI)({
                headerCollaspable: !0
            });
            let x = (0, e0.getRingPricingSchemas)({
                    locale: h.toLowerCase(),
                    country: h.toLowerCase(),
                    store: l,
                    currency: d,
                    defaultColor: n ? ? c.AirRingColors.RAW_TITANIUM
                }),
                {
                    offersData: f,
                    secondaryOfferData: b
                } = (0, eU.getOffersForRegion)(h, {
                    t: g,
                    regionSlug: p,
                    router: m
                });
            return (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(C.SEO, {
                    title: "Ultrahuman Ring | Pricing",
                    description: "Ultrahuman Ring AIR is the world's most comfortable and compact smart ring that monitors your sleep, movement and recovery.",
                    image: (0, er.getCompressedAssetUrl)("/web_v2/meta-assets/ring-air-og-lg.png/w_1080"),
                    basePath: "/ring/buy"
                }), (0, i.jsx)(eE.JsonLd, {
                    data: x
                }), (0, i.jsxs)(u.RingSelectionContextProvider, {
                    currency: d,
                    defaultSize: e,
                    defaultColor: n ? ? c.AirRingColors.RAW_TITANIUM,
                    defaultUhx: s,
                    estimates: o,
                    children: [(0, i.jsx)(w.ProductSelectionSection, {
                        description: "A comfortable and sleek smart ring that tracks your sleep, movement and recovery trends, nudging you to make healthier choices every day.",
                        emiCopies: !0,
                        secondaryOfferData: b,
                        offersData: f
                    }), (0, i.jsx)($, {}), (0, i.jsx)(k.Contents, {
                        htmlId: "ring-contents"
                    }), (0, i.jsx)(eS, {
                        htmlId: "ring-reviews"
                    }), (0, i.jsx)(q, {}), (0, i.jsx)(eb, {
                        htmlId: "ring-sleep"
                    }), (0, i.jsx)(eh, {}), (0, i.jsx)(_, {}), (0, i.jsx)(ey, {
                        htmlId: "ring-comparision"
                    }), (0, i.jsx)(J.SolidBgTextSection, {}), (0, i.jsx)(Y.Capabilities, {
                        htmlId: "ring-capabilities"
                    }), (0, i.jsx)(S.TechnicalSpecs, {
                        htmlId: "ring-specs"
                    }), (0, i.jsx)(K.ProductWizard, {
                        title: g("ring.productWizard.contentA")
                    }), (0, i.jsx)(ez.FAQSection, {
                        faqData: I.ringBuyPageFaqData_IN,
                        htmlId: "ring-faq"
                    }), (0, i.jsx)(j, {})]
                })]
            })
        },
        e5 = ({
            defaultSize: e,
            defaultColor: n,
            defaultUhx: s,
            estimates: o,
            store: l,
            currency: d,
            region: h
        }) => {
            let m = (0, r.useRouter)(),
                {
                    regionSlug: p
                } = (0, a.useContext)(R.RegionLocaleContext),
                {
                    t: g
                } = (0, t.useTranslation)("ring");
            (0, T.useGlobalUI)({
                headerCollaspable: !0
            });
            let x = (0, e0.getRingPricingSchemas)({
                    locale: h.toLowerCase(),
                    country: h.toLowerCase(),
                    store: l,
                    currency: d,
                    defaultColor: n ? ? c.AirRingColors.RAW_TITANIUM
                }),
                {
                    offersData: f,
                    secondaryOfferData: b
                } = (0, eU.getOffersForRegion)(h, {
                    t: g,
                    regionSlug: p,
                    router: m
                });
            return (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(C.SEO, {
                    title: "Ultrahuman Ring | Pricing",
                    description: "Ultrahuman Ring AIR is the world's most comfortable and compact smart ring that monitors your sleep, movement and recovery.",
                    image: (0, er.getCompressedAssetUrl)("/web_v2/meta-assets/ring-air-og-lg.png/w_1080"),
                    basePath: "/ring/buy"
                }), (0, i.jsx)(eE.JsonLd, {
                    data: x
                }), (0, i.jsxs)(u.RingSelectionContextProvider, {
                    currency: d,
                    defaultSize: e,
                    defaultColor: n ? ? c.AirRingColors.RAW_TITANIUM,
                    defaultUhx: s,
                    estimates: o,
                    children: [(0, i.jsx)(w.ProductSelectionSection, {
                        description: "A comfortable and sleek smart ring that tracks your sleep, movement and recovery trends, nudging you to make healthier choices every day.",
                        secondaryOfferData: b,
                        offersData: f
                    }), (0, i.jsx)($, {}), (0, i.jsx)(k.Contents, {
                        htmlId: "ring-contents"
                    }), (0, i.jsx)(eS, {
                        htmlId: "ring-reviews"
                    }), (0, i.jsx)(q, {}), (0, i.jsx)(eb, {
                        htmlId: "ring-sleep"
                    }), (0, i.jsx)(eh, {}), (0, i.jsx)(_, {}), (0, i.jsx)(ey, {
                        htmlId: "ring-comparision"
                    }), (0, i.jsx)(J.SolidBgTextSection, {}), (0, i.jsx)(Y.Capabilities, {
                        htmlId: "ring-capabilities"
                    }), (0, i.jsx)(S.TechnicalSpecs, {
                        htmlId: "ring-specs"
                    }), (0, i.jsx)(K.ProductWizard, {
                        title: g("ring.productWizard.contentA")
                    }), (0, i.jsx)(ez.FAQSection, {
                        faqData: I.ringBuyPageFaqData_AE,
                        htmlId: "ring-faq"
                    }), (0, i.jsx)(j, {})]
                })]
            })
        };

    function e4(e) {
        let {
            region: t
        } = e, r = t.toUpperCase(), a = t.toLowerCase();
        if ("US" === r || "PR" === r) return (0, i.jsx)(B.MasterTimelineProvider, {
            children: (0, i.jsx)(eZ, {
                locale: a,
                children: (0, i.jsx)(e1, { ...e
                })
            })
        });
        if ("IN" === r) return (0, i.jsx)(B.MasterTimelineProvider, {
            children: (0, i.jsx)(eZ, {
                locale: a,
                children: (0, i.jsx)(e2, { ...e
                })
            })
        });
        if ("AE" === r || "QA" === r || "BH" === r || "KW" === r || "OM" === r) return (0, i.jsx)(B.MasterTimelineProvider, {
            children: (0, i.jsx)(eZ, {
                locale: a,
                children: (0, i.jsx)(e5, { ...e
                })
            })
        });
        if ((0, eF.isMCFCountry)(r)) {
            let t = (0, e0.getRingPricingSchemas)({
                locale: a,
                country: a,
                store: e.store,
                currency: e.currency,
                defaultColor: e.defaultColor ? ? c.AirRingColors.RAW_TITANIUM
            });
            return (0, i.jsx)(B.MasterTimelineProvider, {
                children: (0, i.jsxs)(eZ, {
                    locale: a,
                    children: [(0, i.jsx)(eE.JsonLd, {
                        data: t
                    }), (0, i.jsx)(eD, { ...e
                    })]
                })
            })
        }
        let n = (0, e0.getRingPricingSchemas)({
            locale: a,
            country: a,
            store: e.store,
            currency: e.currency,
            defaultColor: e.defaultColor ? ? c.AirRingColors.RAW_TITANIUM
        });
        return (0, i.jsx)(B.MasterTimelineProvider, {
            children: (0, i.jsxs)(eZ, {
                locale: a,
                children: [(0, i.jsx)(eE.JsonLd, {
                    data: n
                }), (0, i.jsx)(e$, { ...e
                })]
            })
        })
    }
    e.s(["__N_SSP", () => !0, "default", () => e4], 44095)
}, 78345, (e, i, t) => {
    let r = "/ring/buy";
    (window.__NEXT_P = window.__NEXT_P || []).push([r, () => e.r(44095)]), i.hot && i.hot.dispose(function() {
        window.__NEXT_P.push([r])
    })
}]);