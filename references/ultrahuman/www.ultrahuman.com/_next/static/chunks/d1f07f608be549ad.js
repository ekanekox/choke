(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 94197, i => {
    "use strict";
    var e = i.i(91398),
        t = i.i(40290),
        a = i.i(91788),
        r = i.i(60814),
        n = i.i(19231),
        o = i.i(21666),
        l = i.i(2100),
        s = i.i(62360),
        d = i.i(73528),
        c = i.i(57232);
    i.i(64157);
    var p = i.i(71179);
    let g = r.default.div.withConfig({
        displayName: "Capabilities__StyledCapability",
        componentId: "sc-9fe9ac6b-0"
    })
    `
  width: 95%;
  border-radius: 24px;
  overflow: hidden;
  opacity: 0;
  transform: translateY(12px);
  animation: ${s.fadeIn} 0.5s ease-in-out forwards;
  flex-shrink: 0;
  background: ${({$background:i})=>i};
  grid-column: span ${({$gridSpan:i})=>i};
  animation-delay: ${({$delay:i})=>`
    $ {
        i || 0
    }
    s `};
  box-shadow: ${({$boxShadow:i})=>i??"none"};
  mix-blend-mode: ${({$mixBlendMode:i})=>i??"normal"};
  margin-bottom: ${({$marginBottom:i})=>i?`
    $ {
        i
    }
    px `:"0"};
  scroll-snap-align: center;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between !important;
  --card-padding: 24px;
  height: 500px;

  @media (min-width: ${({theme:i})=>i.globalV2.sm.maxWidth}) {
    width: 50%;
    height: 550px;
  }
  @media (min-width: ${({theme:i})=>i.globalV2.lg.maxWidth}) {
    position: relative;
    width: 100%;
    display: inline-flex;
    height: 100%;
    max-height: unset;
    --card-padding: 32px;
  }

  @media (min-width: ${({theme:i})=>i.globalV2.xl.maxWidth}) {
    // --card-padding: 40px;
  }

  .card-text-content {
    padding: var(--card-padding);
    color: ${({$color:i})=>i??void 0};
    overflow: hidden;
    align-self: flex-start;

    h3 {
      font-size: 32px;
      font-weight: 500;
      line-height: 110%; /* 35.2px */
      letter-spacing: -1.28px;
      margin-top: 0;
      margin-bottom: 4px;
    }

    p {
      font-size: 16px;
      font-weight: 400;
      line-height: 140%; /* 22.4px */
      letter-spacing: -0.64px;
      opacity: 0.7;
      display: -webkit-box;
      -webkit-line-clamp: 5;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }

  .card-img-container {
    text-align: center;
    display: flex;
    justify-content: center;
    width: 100%;
    flex: 1;
    min-height: 0;
    overflow: hidden;
    padding-bottom: 0;

    img {
      width: 100%;
      height: auto;
      max-height: 100%;
      object-fit: contain;
      object-position: bottom;

      @media (min-width: ${({theme:i})=>i.globalV2.md.maxWidth}) {
        // max-width: 600px;
      }
    }
  }
`, h = i => {
        let {
            width: t
        } = (0, c.useWindowSize)();
        return (0, e.jsxs)(g, {
            $background: i.$background,
            $gridSpan: i.$gridSpan,
            $delay: i.$delay,
            $color: i.$color,
            $boxShadow: i.$boxShadow,
            $mixBlendMode: i.$mixBlendMode,
            $marginBottom: i.$marginBottom,
            $opacity: i.$opacity,
            className: i.className,
            children: [(0, e.jsxs)("div", {
                className: "card-text-content",
                children: [(0, e.jsx)("h3", {
                    children: i.title
                }), (0, e.jsx)("p", {
                    children: i.description
                })]
            }), (0, e.jsx)("div", {
                className: "card-img-container",
                children: t < 768 ? (0, e.jsx)(o.CustomImage, {
                    loading: "eager",
                    src: i.image.resp,
                    alt: i.title,
                    width: i.image.width,
                    height: i.image.height
                }) : (0, e.jsx)(o.CustomImage, {
                    loading: "eager",
                    src: i.image.url,
                    alt: i.title,
                    width: i.image.width,
                    height: i.image.height
                })
            })]
        })
    }, m = (0, r.default)(({
        className: i,
        htmlId: r
    }) => {
        let o = (() => {
                let {
                    t: i
                } = (0, p.useTranslation)("ring");
                return {
                    longevity: {
                        title: i("ring.capabilities.longevity.tab"),
                        heading: i("ring.capabilities.longevity.head"),
                        description: i("ring.capabilities.longevity.subHead"),
                        features: [{
                            title: i("ring.capabilities.longevity.afibCard.title"),
                            $gridSpan: 6,
                            description: i("ring.capabilities.longevity.afibCard.description"),
                            image: {
                                url: "web_v2/ring-buy/capabilities-v2/afib.png",
                                resp: "web_v2/ring-buy/capabilities-v2/responsive/afib.png",
                                height: 196,
                                width: 298
                            },
                            $background: "radial-gradient(114.96% 93.08% at 72.06% 58.95%, #000 0%, #3C001A 100%)"
                        }, {
                            title: i("ring.capabilities.longevity.cardioAdaptabilityCard.title"),
                            $gridSpan: 6,
                            description: i("ring.capabilities.longevity.cardioAdaptabilityCard.description"),
                            image: {
                                url: "web_v2/ring-buy/capabilities-v2/cardio.png",
                                resp: "web_v2/ring-buy/capabilities-v2/responsive/cardio.png",
                                height: 1613,
                                width: 1168
                            },
                            $background: "radial-gradient(86.82% 80.51% at 48.84% 61.96%, #000 0%, #035231 100%);",
                            $boxShadow: "0px 0px 2px 0px rgba(194, 63, 120, 0.50) inset;"
                        }]
                    },
                    productivity: {
                        title: i("ring.capabilities.productivity.tab"),
                        heading: i("ring.capabilities.productivity.head"),
                        description: i("ring.capabilities.productivity.subHead"),
                        features: [{
                            $gridSpan: 3,
                            title: i("ring.capabilities.productivity.circadianCard.title"),
                            description: i("ring.capabilities.productivity.circadianCard.description"),
                            image: {
                                url: "web_v2/ring-buy/capabilities-v2/phase-alignment.png",
                                resp: "web_v2/ring-buy/capabilities-v2/phase-alignment.png",
                                height: 406,
                                width: 292,
                                bottom: !0
                            },
                            $background: "radial-gradient(139% 150.68% at 55.13% 100%, rgba(0, 0, 0, 0.40) 0%, #00B6FF 100%), #000",
                            $boxShadow: "0px 0px 2.086px 0px rgba(0, 78, 22, 0.50) inset",
                            $marginBottom: -94
                        }, {
                            $gridSpan: 3,
                            title: i("ring.capabilities.productivity.caffeineCard.title"),
                            description: i("ring.capabilities.productivity.caffeineCard.description"),
                            image: {
                                url: "web_v2/ring-buy/capabilities-v2/caffeine.png",
                                resp: "web_v2/ring-buy/capabilities-v2/caffeine.png",
                                height: 406,
                                width: 292
                            },
                            $background: "radial-gradient(139% 150.68% at 55.13% 100%, rgba(0, 0, 0, 0.40) 0%, #7FFFC9 100%), #000",
                            $boxShadow: "0px 0px 2.086px 0px rgba(0, 78, 22, 0.50) inset;"
                        }, {
                            title: i("ring.capabilities.productivity.vitaminDCard.title"),
                            description: i("ring.capabilities.productivity.vitaminDCard.description"),
                            $gridSpan: 3,
                            image: {
                                url: "web_v2/ring-buy/capabilities-v2/vitamin-d.png",
                                resp: "web_v2/ring-buy/capabilities-v2/vitamin-d.png",
                                height: 406,
                                width: 292
                            },
                            $background: "radial-gradient(67.91% 71.81% at 50% 28.19%, #EEB657 0%, #B64200 93.4%), #EEE"
                        }, {
                            $gridSpan: 3,
                            title: i("ring.capabilities.productivity.screenTimeCard.title"),
                            description: i("ring.capabilities.productivity.screenTimeCard.description"),
                            image: {
                                url: "web_v2/ring-buy/capabilities-v2/Screentime_updated.png",
                                resp: "web_v2/ring-buy/capabilities-v2/Screentime_updated.png",
                                height: 406,
                                width: 292
                            },
                            $background: "radial-gradient(139% 150.68% at 55.13% 100%, #121429 0%, #4B5FFF 100%), #000",
                            $mixBlendMode: "luminosity",
                            $opacity: .7,
                            $boxShadow: "0px 0px 2.086px 0px rgba(0, 78, 22, 0.50) inset"
                        }]
                    },
                    movement: {
                        title: i("ring.capabilities.movement.tab"),
                        heading: i("ring.capabilities.movement.head"),
                        description: i("ring.capabilities.movement.subHead"),
                        features: [{
                            $gridSpan: 7,
                            title: i("ring.capabilities.movement.stepsDistCalCard.title"),
                            description: i("ring.capabilities.movement.stepsDistCalCard.description"),
                            image: {
                                url: "web_v2/ring-buy/capabilities-v2/movement.png",
                                resp: "web_v2/ring-buy/capabilities-v2/movement-2.png",
                                height: 406,
                                width: 292
                            },
                            $background: "radial-gradient(139% 150.68% at 55.13% 100%, rgba(0, 0, 0, 0.40) 0%, #FE6341 100%), #000",
                            $boxShadow: "0px 0px 2.086px 0px rgba(0, 78, 22, 0.50) inset"
                        }, {
                            $gridSpan: 5,
                            title: i("ring.capabilities.movement.vO2Card.title"),
                            description: i("ring.capabilities.movement.vO2Card.description"),
                            image: {
                                url: "web_v2/ring-buy/capabilities-v2/vo2.png",
                                resp: "web_v2/ring-buy/capabilities-v2/vo2.png",
                                height: 406,
                                width: 292,
                                bottom: !0
                            },
                            $background: "radial-gradient(139% 150.68% at 55.13% 100%, rgba(0, 0, 0, 0.40) 0%, #3A041C 100%), #000",
                            $marginBottom: -26
                        }]
                    },
                    sleep: {
                        title: i("ring.capabilities.sleep.tab"),
                        heading: i("ring.capabilities.sleep.head"),
                        description: i("ring.capabilities.sleep.subHead"),
                        features: [{
                            $gridSpan: 4,
                            title: i("ring.capabilities.sleep.scoreCard.title"),
                            description: i("ring.capabilities.sleep.scoreCard.description"),
                            image: {
                                url: "web_v2/ring-buy/capabilities-v2/sleep.png",
                                resp: "web_v2/ring-buy/capabilities-v2/sleep.png",
                                height: 406,
                                width: 292
                            },
                            $background: "radial-gradient(94.99% 109.16% at 74.63% 44.57%, #012632 0%, #018138 100%);"
                        }, {
                            $gridSpan: 4,
                            title: i("ring.capabilities.sleep.stagesCard.title"),
                            description: i("ring.capabilities.sleep.stagesCard.description"),
                            image: {
                                url: "web_v2/ring-buy/capabilities-v2/sleep-stages.png",
                                resp: "web_v2/ring-buy/capabilities-v2/sleep-stages.png",
                                height: 406,
                                width: 292
                            },
                            $background: "linear-gradient(180deg, rgba(75, 66, 79, 0.68) 0%, rgba(46, 37, 47, 0.35) 100%), #000",
                            stretch: !0
                        }, {
                            $gridSpan: 4,
                            title: i("ring.capabilities.sleep.nuancesCard.title"),
                            description: i("ring.capabilities.sleep.nuancesCard.description"),
                            image: {
                                url: "web_v2/ring-buy/capabilities-v2/sleep-debt.png",
                                resp: "web_v2/ring-buy/capabilities-v2/sleep-debt.png",
                                height: 406,
                                width: 292
                            },
                            $background: "radial-gradient(49.08% 62.38% at 94.82% 68.54%, #2C495D 0%, #050A1A 100%)",
                            stretch: !0
                        }]
                    },
                    recovery: {
                        title: i("ring.capabilities.recovery.tab"),
                        heading: i("ring.capabilities.recovery.head"),
                        description: i("ring.capabilities.recovery.subHead"),
                        features: [{
                            $gridSpan: 4,
                            title: i("ring.capabilities.recovery.scoreCard.title"),
                            description: i("ring.capabilities.recovery.scoreCard.description"),
                            image: {
                                url: "web_v2/ring-buy/capabilities-v2/recovery.png",
                                resp: "web_v2/ring-buy/capabilities-v2/recovery.png",
                                height: 406,
                                width: 292
                            },
                            $background: "radial-gradient(118.21% 134.77% at 100% 100%, #1B3355 0%, #24374F 33.49%, #7D5918 100%);"
                        }, {
                            $gridSpan: 4,
                            title: i("ring.capabilities.recovery.stressCard.title"),
                            description: i("ring.capabilities.recovery.stressCard.description"),
                            image: {
                                url: "web_v2/ring-buy/capabilities-v2/stress.png",
                                resp: "web_v2/ring-buy/capabilities-v2/stress.png",
                                height: 406,
                                width: 292
                            },
                            $background: "#121212"
                        }, {
                            $gridSpan: 4,
                            title: i("ring.capabilities.recovery.hrvCard.title"),
                            description: i("ring.capabilities.recovery.hrvCard.description"),
                            image: {
                                url: "web_v2/ring-buy/capabilities-v2/hrv-spo2.png",
                                resp: "web_v2/ring-buy/capabilities-v2/hrv-spo2.png",
                                height: 406,
                                width: 292,
                                bottom: !0
                            },
                            $background: "#fff",
                            $color: "#000000",
                            stretch: !0
                        }]
                    },
                    "womens-health": {
                        title: i("ring.capabilities.womenHealth.tab"),
                        heading: i("ring.capabilities.womenHealth.head"),
                        description: i("ring.capabilities.womenHealth.subHead"),
                        features: [{
                            $gridSpan: 4,
                            title: i("ring.capabilities.womenHealth.cycleCard.title"),
                            description: i("ring.capabilities.womenHealth.cycleCard.description"),
                            image: {
                                url: "web_v2/ring-buy/capabilities-v2/cycle-tracking-3.png",
                                resp: "web_v2/ring-buy/capabilities-v2/cycle-tracking-3.png",
                                height: 406,
                                width: 292,
                                bottom: !0
                            },
                            $background: "radial-gradient(114.96% 93.08% at 72.06% 58.95%, #000 0%, #710007 100%)",
                            $marginBottom: -26
                        }, {
                            $gridSpan: 4,
                            title: i("ring.capabilities.womenHealth.cycleProCard.title"),
                            description: i("ring.capabilities.womenHealth.cycleProCard.description"),
                            image: {
                                url: "web_v2/ring-buy/capabilities-v2/cno-pro.png",
                                resp: "web_v2/ring-buy/capabilities-v2/cno-pro.png",
                                height: 406,
                                width: 292,
                                bottom: !0
                            },
                            $background: "radial-gradient(109.58% 97.86% at 50% 58.66%, #000 0%, #0A0001 22.3%, #452B7D 100%)",
                            $marginBottom: -26
                        }, {
                            $gridSpan: 4,
                            title: i("ring.capabilities.womenHealth.pregnancyCard.title"),
                            description: i("ring.capabilities.womenHealth.pregnancyCard.description"),
                            image: {
                                url: "web_v2/ring-buy/capabilities-v2/pregnancy-1.png",
                                resp: "web_v2/ring-buy/capabilities-v2/pregnancy-1.png",
                                height: 406,
                                width: 292
                            },
                            $background: "radial-gradient(139% 150.68% at 55.13% 100%, #000 0%, #080C1E 42.4%, #405BE6 100%), #000",
                            $boxShadow: "0px 0px 2.086px 0px rgba(0, 78, 22, 0.50) inset"
                        }]
                    },
                    ecosystem: {
                        title: i("ring.capabilities.ecosystem.tab"),
                        heading: i("ring.capabilities.ecosystem.head"),
                        description: i("ring.capabilities.ecosystem.subHead"),
                        features: [{
                            $gridSpan: 4,
                            title: i("ring.capabilities.ecosystem.m1Card.title"),
                            description: i("ring.capabilities.ecosystem.m1Card.description"),
                            image: {
                                url: "web_v2/ring-buy/capabilities-v2/m1.png",
                                resp: "web_v2/ring-buy/capabilities-v2/m1.png",
                                height: 707,
                                width: 600
                            },
                            $background: "#FFF",
                            $color: "#000000",
                            stretch: !1
                        }, {
                            $gridSpan: 4,
                            title: i("ring.capabilities.ecosystem.bloodVisionCard.title"),
                            description: i("ring.capabilities.ecosystem.bloodVisionCard.description"),
                            image: {
                                url: "web_v2/ring-buy/capabilities-v2/bv.png",
                                resp: "web_v2/ring-buy/capabilities-v2/bv.png",
                                height: 406,
                                width: 292
                            },
                            $background: "#141414",
                            $boxShadow: "0px 0px 2.086px 0px rgba(0, 78, 22, 0.50) inset",
                            $mixBlendMode: "plus-lighter"
                        }, {
                            $gridSpan: 4,
                            title: i("ring.capabilities.ecosystem.homeCard.title"),
                            description: i("ring.capabilities.ecosystem.homeCard.description"),
                            image: {
                                url: "web_v2/ring-buy/capabilities-v2/home.png",
                                resp: "web_v2/ring-buy/capabilities-v2/home.png",
                                height: 406,
                                width: 292
                            },
                            $background: "#FFF",
                            $color: "#000000",
                            $marginBottom: -26
                        }]
                    }
                }
            })(),
            [l, s] = (0, a.useState)(() => Object.keys(o)[0]),
            c = (0, a.useRef)(null),
            g = (0, a.useRef)(null);
        return (0, a.useEffect)(() => {
            l && g.current && g.current.scrollTo({
                behavior: "auto",
                left: 0
            })
        }, [l]), (0, e.jsx)("section", {
            className: i,
            id: r,
            ref: c,
            children: (0, e.jsxs)(n.Container, {
                children: [(0, e.jsxs)("div", {
                    className: "button-rows-wrapper",
                    children: [(0, e.jsx)(t.CaretUp, {
                        fill: "#ffffff"
                    }), (0, e.jsx)("div", {
                        className: "button-rows",
                        children: Object.keys(o).map(i => (0, e.jsx)("button", {
                            className: i === l ? "active" : "",
                            onClick: e => {
                                d.default.track(`${o[i].title} CLICK`), s(i), console.log(e), window.innerWidth > 769 || e.target.scrollIntoView({
                                    behavior: "smooth",
                                    inline: "center",
                                    block: "nearest"
                                })
                            },
                            children: o[i].title
                        }, i))
                    })]
                }), (0, e.jsxs)("div", {
                    className: "content",
                    children: [(0, e.jsxs)("div", {
                        className: "text",
                        children: [(0, e.jsx)("h3", {
                            children: o[l].heading
                        }), (0, e.jsx)("p", {
                            children: o[l].description
                        })]
                    }), (0, e.jsx)("div", {
                        className: "features-container",
                        ref: g,
                        children: o[l].features.map((i, t) => (0, e.jsx)(h, { ...i,
                            $delay: t / 20
                        }, `capability-${l}-${t}`))
                    }, `features-${l}`)]
                })]
            })
        })
    }).withConfig({
        displayName: "Capabilities",
        componentId: "sc-9fe9ac6b-1"
    })
    `
  padding: 150px 0;
  background: #000;
  color: white;

  --color: rgba(255, 255, 255, 0.3);
  --max-feature-width: 350px;

  > div {
    grid-column: 2/-2;
  }

  .text {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: left;
    align-items: center;
    padding-top: 40px;
    padding-bottom: 20px;
    ${r.css`
      animation: ${s.fadeIn} 0.5s ease-in-out forwards;
    `}

    @media (min-width: ${({theme:i})=>i.globalV2.md.maxWidth}) {
      display: grid;
      grid-template-columns: 1fr 2fr;
      padding-top: 70px;
      padding-bottom: 40px;
    }

    h3 {
      font-size: 36px;
      font-weight: 500;
      line-height: 110%; /* 39.6px */
      letter-spacing: -1.44px;
      color: #fff;
      align-self: baseline;
    }
    p {
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 130%; /* 26px */
      letter-spacing: -0.8px;
      text-opacity: 0.3;
      color: rgba(255, 255, 255, 0.3);
      display: none;
    }
    @media (min-width: ${({theme:i})=>i.globalV2.md.maxWidth}) {
      h3 {
        margin-right: 100px;
        max-width: 400px;
      }
      p {
        display: block;
      }
    }
  }

  & .content {
    display: flex;
    flex-direction: column;
    gap: 50px;
  }

  button {
    background: none;
    min-width: 120px;
    border: none;
    outline: none;
    flex: 1;
    scroll-snap-align: start;

    color: var(--color);
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    line-height: 110%;
    letter-spacing: -0.8px;
    padding-bottom: 12px;
    @media (min-width: ${({theme:i})=>i.globalV2.lg.maxWidth}) {
      padding-bottom: 16px;
    }
  }

  button.active {
    border-bottom: 1px solid var(--color);
    --color: white;
  }

  .button-rows-wrapper {
    width: 100%;
    position: relative;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);

    &::after {
      pointer-events: none;
      content: '';
      position: absolute;
      top: 0;
      right: -1px;
      display: block;
      width: 32px;
      height: 100%;
      background: linear-gradient(270deg, #000000 0%, rgba(0, 0, 0, 0) 100%);
      @media (min-width: ${({theme:i})=>i.globalV2.lg.maxWidth}) {
        content: unset;
        display: none;
      }
    }

    svg {
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-100%) rotate(90deg);
      height: 10px;
      width: auto;
      z-index: 1;
      @media (min-width: ${({theme:i})=>i.globalV2.lg.maxWidth}) {
        display: none;
      }
    }
  }

  .button-rows {
    width: 100%;
    display: flex;
    justify-content: space-between;
    overflow-x: auto;
    ${l.hideScrollbar}
    position: relative;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth !important;

    padding-right: 32px;

    @media (min-width: ${({theme:i})=>i.globalV2.lg.maxWidth}) {
      padding-right: unset;
    }
  }

  .features-container {
    display: flex;
    grid-gap: 1rem;
    gap: 1.2rem;
    overflow-x: auto;
    overflow-y: hidden;
    ${l.hideScrollbar}
    scroll-behavior: unset;
    height: 500px;
    scroll-snap-type: x mandatory;

    @media (min-width: ${({theme:i})=>i.globalV2.sm.maxWidth}) {
      height: 550px;
    }

    @media (min-width: ${({theme:i})=>i.globalV2.lg.maxWidth}) {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      gap: 2rem;
      position: relative;
      height: 530px;
    }
  }
`;
    i.s(["Capabilities", 0, m])
}, 62114, i => {
    "use strict";
    var e = i.i(91398);
    i.i(64157);
    var t = i.i(71179),
        a = i.i(57706),
        r = i.i(53147),
        n = i.i(60814),
        o = i.i(57232),
        l = i.i(21666);
    (0, n.default)(({
        className: i,
        tradeInValue: a
    }) => {
        let {
            t: r
        } = (0, t.useTranslation)("ring"), {
            width: n
        } = (0, o.useWindowSize)();
        return (0, e.jsxs)("div", {
            className: i,
            children: [(0, e.jsx)("h3", {
                children: r("ring.productSelection.tradeInSection.title")
            }), (0, e.jsxs)("p", {
                className: "description",
                children: ["Get up to ", a, " in trade-in credit towards your new Ring AIR"]
            }), (0, e.jsx)("div", {
                className: "img-container",
                children: n > 992 ? (0, e.jsx)(l.CustomImage, {
                    src: "web_v2/offer_modal/trade.png",
                    fill: !0,
                    alt: "trade-in"
                }) : (0, e.jsx)(l.CustomImage, {
                    src: "web_v2/offer_modal/trade_resp.png",
                    fill: !0,
                    alt: "trade-in"
                })
            }), (0, e.jsxs)("div", {
                className: "content",
                children: [(0, e.jsx)("p", {
                    className: "directions",
                    children: r("ring.productSelection.tradeInSection.modal.bulletHead")
                }), (0, e.jsx)("br", {}), (0, e.jsx)("br", {}), (0, e.jsx)("h4", {
                    children: r("ring.productSelection.tradeInSection.modal.bulletA.title")
                }), (0, e.jsx)("p", {
                    children: r("ring.productSelection.tradeInSection.modal.bulletA.description")
                }), (0, e.jsx)("br", {}), (0, e.jsx)("br", {}), (0, e.jsx)("h4", {
                    children: r("ring.productSelection.tradeInSection.modal.bulletB.title")
                }), (0, e.jsx)("p", {
                    children: r("ring.productSelection.tradeInSection.modal.bulletB.description")
                }), (0, e.jsx)("br", {}), (0, e.jsx)("br", {}), (0, e.jsxs)("p", {
                    className: "tip",
                    children: [(0, e.jsxs)("b", {
                        children: [" ", r("ring.productSelection.tradeInSection.modal.tip.title")]
                    }), r("ring.productSelection.tradeInSection.modal.tip.description")]
                }), (0, e.jsx)("br", {}), (0, e.jsx)("br", {}), (0, e.jsx)("h4", {
                    children: r("ring.productSelection.tradeInSection.modal.bulletC.title")
                }), (0, e.jsx)("p", {
                    children: r("ring.productSelection.tradeInSection.modal.bulletC.description")
                }), (0, e.jsx)("br", {}), (0, e.jsx)("br", {}), (0, e.jsx)("h4", {
                    children: r("ring.productSelection.tradeInSection.modal.bulletD.title")
                }), (0, e.jsx)("p", {
                    children: r("ring.productSelection.tradeInSection.modal.bulletD.description")
                }), (0, e.jsx)("br", {}), (0, e.jsx)("br", {}), (0, e.jsx)("h4", {
                    children: r("ring.productSelection.tradeInSection.modal.bulletE.title")
                }), (0, e.jsx)("p", {
                    children: r("ring.productSelection.tradeInSection.modal.bulletE.description")
                }), (0, e.jsx)("br", {}), (0, e.jsx)("br", {}), (0, e.jsx)("p", {
                    children: r("ring.productSelection.tradeInSection.modal.bulletE.shipText")
                }), (0, e.jsx)("br", {}), (0, e.jsx)("br", {}), (0, e.jsx)("p", {
                    className: "country",
                    children: (0, e.jsx)("b", {
                        children: "United Kingdom"
                    })
                }), (0, e.jsxs)("p", {
                    children: ["Unit 3 Parkway Way, Kettlebridge Road, Sheffield, S9 3AJ.", (0, e.jsx)("br", {}), "Contact: 8081349514"]
                }), (0, e.jsx)("br", {}), (0, e.jsx)("br", {}), (0, e.jsx)("p", {
                    className: "country",
                    children: (0, e.jsx)("b", {
                        children: "United States"
                    })
                }), (0, e.jsxs)("p", {
                    children: ["6052 Bandini Blvd, Commerce, CA 90040.", (0, e.jsx)("br", {}), "Contact: 8003817934"]
                }), (0, e.jsx)("br", {}), (0, e.jsx)("br", {}), (0, e.jsx)("p", {
                    className: "country",
                    children: (0, e.jsx)("b", {
                        children: "Europe"
                    })
                }), (0, e.jsxs)("p", {
                    children: ["Pievu str. 1, Karmėlava, Kaunas region, Lithuania 54464.", (0, e.jsx)("br", {}), "Contact: 80023371"]
                }), (0, e.jsx)("br", {}), (0, e.jsx)("br", {}), (0, e.jsx)("p", {
                    className: "country",
                    children: (0, e.jsx)("b", {
                        children: "India"
                    })
                }), (0, e.jsxs)("p", {
                    children: ["AM Chambers, 2nd & 3rd Floor, Survey No 49/1, 49/3 Garvebhavipalya, 7th Mile, Hosur Main Road, Bommanahalli, Karnataka, India, 560068", (0, e.jsx)("br", {}), "Contact: 18001028693"]
                }), (0, e.jsx)("br", {}), (0, e.jsx)("br", {}), (0, e.jsx)("p", {
                    className: "country",
                    children: (0, e.jsx)("b", {
                        children: "UAE"
                    })
                }), (0, e.jsxs)("p", {
                    children: ["IQ Fulfillment General Warehousing, Dubai Investment Park - 1 Warehouse. Ultrahuman Warehouse No. 5.", (0, e.jsx)("br", {}), "Contact: 800035703249"]
                }), (0, e.jsx)("br", {}), (0, e.jsx)("br", {}), (0, e.jsx)("h4", {
                    children: r("ring.productSelection.tradeInSection.modal.bulletF.title")
                }), (0, e.jsx)("p", {
                    children: r("ring.productSelection.tradeInSection.modal.bulletF.description")
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

  @media (min-width: ${({theme:i})=>i.globalV2.md.maxWidth}) {
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

    @media (min-width: ${({theme:i})=>i.globalV2.md.maxWidth}) {
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

    @media (min-width: ${({theme:i})=>i.globalV2.md.maxWidth}) {
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

    @media (min-width: ${({theme:i})=>i.globalV2.md.maxWidth}) {
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
    let s = [{
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
        d = (0, n.default)(({
            className: i
        }) => (0, e.jsxs)("div", {
            className: i,
            children: [(0, e.jsx)("h3", {
                children: "Use your HSA/FSA to save on Ring AIR"
            }), (0, e.jsx)("p", {
                className: "description",
                children: "Save more with your pre-tax dollars. The Ring AIR, Ring Rare, Software Plugins, and Voyager Charger are all HSA/FSA eligible."
            }), (0, e.jsx)("div", {
                className: "img-container",
                children: (0, e.jsx)(l.CustomImage, {
                    src: "web_v2/offer_modal/hsa-fsa-modal-header.png",
                    fill: !0,
                    alt: "trade-in"
                })
            }), (0, e.jsxs)("div", {
                className: "content",
                children: [(0, e.jsx)("p", {
                    className: "directions",
                    children: "How it works"
                }), (0, e.jsx)("br", {}), (0, e.jsx)("br", {}), s.map((i, t) => (0, e.jsxs)(e.Fragment, {
                    children: [(0, e.jsxs)("h4", {
                        children: [(0, e.jsxs)("span", {
                            className: "caption",
                            children: ["STEP ", t + 1]
                        }), s[t].title]
                    }), (0, e.jsx)("p", {
                        children: s[t].description
                    }), (0, e.jsx)("div", {
                        className: "img-container",
                        children: (0, e.jsx)(l.CustomImage, {
                            src: `web_v2/offer_modal/hsa-fsa/0${t+1}.png`,
                            fill: !0,
                            alt: "trade-in"
                        })
                    }), (0, e.jsx)("br", {})]
                })), (0, e.jsx)("br", {}), (0, e.jsx)("br", {}), (0, e.jsx)("br", {}), (0, e.jsxs)("p", {
                    children: ["Need help? Reach out anytime at", " ", (0, e.jsx)("a", {
                        href: "mailto:support@ultrahuman.com",
                        children: "support@ultrahuman.com"
                    }), " — we've got your back."]
                }), (0, e.jsx)("br", {}), (0, e.jsx)("br", {}), (0, e.jsx)(r.default, {
                    href: "/hsa-fsa",
                    className: "cta",
                    passHref: !0,
                    children: (0, e.jsx)(a.PrimaryCTA, {
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

  @media (min-width: ${({theme:i})=>i.globalV2.md.maxWidth}) {
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

    @media (min-width: ${({theme:i})=>i.globalV2.md.maxWidth}) {
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

    @media (min-width: ${({theme:i})=>i.globalV2.md.maxWidth}) {
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

    @media (min-width: ${({theme:i})=>i.globalV2.md.maxWidth}) {
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
`, c = (0, n.default)(({
        className: i
    }) => {
        let {
            width: t
        } = (0, o.useWindowSize)();
        return (0, e.jsxs)("div", {
            className: i,
            children: [(0, e.jsx)("h3", {
                children: "Recognizing Heroes of the World"
            }), (0, e.jsx)("div", {
                className: "img-container",
                children: t > 992 ? (0, e.jsx)(l.CustomImage, {
                    src: "web_v2/hero/modal/SpecialPricing.jpg",
                    fill: !0,
                    alt: "heroes"
                }) : (0, e.jsx)(l.CustomImage, {
                    src: "web_v2/hero/modal/SpecialPricing_Mobile.jpg",
                    fill: !0,
                    alt: "heroes"
                })
            }), (0, e.jsxs)("div", {
                className: "content",
                children: [(0, e.jsx)("p", {
                    children: "If you serve, care, innovate, and inspire, you deserve recognition. In honour of your impact, enjoy exclusive pricing on the Ring AIR. Applicable if you're a veteran or military personnel, athlete, scientist or researcher, student, or healthcare worker. ID verification will be required to fulfill the order."
                }), (0, e.jsx)("br", {})]
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

  @media (min-width: ${({theme:i})=>i.globalV2.md.maxWidth}) {
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

    @media (min-width: ${({theme:i})=>i.globalV2.md.maxWidth}) {
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

    @media (min-width: ${({theme:i})=>i.globalV2.md.maxWidth}) {
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

    @media (min-width: ${({theme:i})=>i.globalV2.md.maxWidth}) {
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
    (0, n.default)(({
        className: i
    }) => {
        let {
            t: a
        } = (0, t.useTranslation)("ring"), {
            width: r
        } = (0, o.useWindowSize)();
        return (0, e.jsxs)("div", {
            className: i,
            children: [(0, e.jsx)("h3", {
                children: "UltraWork"
            }), (0, e.jsx)("p", {
                className: "description",
                children: a("ring.productSelection.tradeInSection.modal.subHead")
            }), (0, e.jsx)("div", {
                className: "img-container",
                children: r > 992 ? (0, e.jsx)(l.CustomImage, {
                    src: "web_v2/offer_modal/ultrawork.png",
                    fill: !0,
                    alt: "ultra-work"
                }) : (0, e.jsx)(l.CustomImage, {
                    src: "web_v2/offer_modal/ultrawork_resp.png",
                    fill: !0,
                    alt: "ultra-work"
                })
            }), (0, e.jsxs)("div", {
                className: "content",
                children: [(0, e.jsx)("h4", {
                    children: "Heading A"
                }), (0, e.jsx)("p", {
                    children: "You will periodically receive personalized nudges and insights to make lifestyle changes that will help you improve on the contributors that impact this score. By improving your performance in each contributing factor, you'll boost your overall score."
                }), (0, e.jsx)("br", {}), (0, e.jsx)("p", {
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

  @media (min-width: ${({theme:i})=>i.globalV2.md.maxWidth}) {
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

    @media (min-width: ${({theme:i})=>i.globalV2.md.maxWidth}) {
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

    @media (min-width: ${({theme:i})=>i.globalV2.md.maxWidth}) {
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

    @media (min-width: ${({theme:i})=>i.globalV2.md.maxWidth}) {
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
`, i.s(["HeroDiscountOffer", 0, c, "HsaFsaOffer", 0, d])
}, 74249, i => {
    "use strict";
    var e = i.i(91398);
    i.i(64157);
    var t = i.i(71179),
        a = i.i(8762),
        r = i.i(91788),
        n = i.i(60814),
        o = i.i(86236),
        l = i.i(19231),
        s = i.i(48095),
        d = i.i(18888),
        c = i.i(82382),
        p = i.i(27005);
    let g = (0, n.default)(({
        className: i
    }) => {
        let n = (0, a.useGsapContext)(),
            {
                add: g
            } = (0, c.useMasterTimeline)(),
            h = (0, r.useRef)(null),
            m = (0, r.useRef)(null),
            {
                t: b
            } = (0, t.useTranslation)("ring");
        return (0, o.useIsomorphicLayoutEffect)(() => (m.current = new IntersectionObserver(() => {
            h.current && window && n.add(() => {
                let i = d.default.timeline({
                    defaults: {
                        duration: 1,
                        ease: "power2.easeInOut"
                    },
                    scrollTrigger: {
                        trigger: h.current,
                        start: "top top",
                        end: "bottom bottom",
                        scrub: .2,
                        immediateRender: !1
                    }
                });
                i.set(".tc-1 > span", {
                    autoAlpha: .2
                }), i.fromTo(".tc-1 > span", {
                    autoAlpha: .2
                }, {
                    autoAlpha: 1,
                    duration: .35,
                    stagger: .2
                }, .2), g(i, "buy-solid-bg-text")
            })
        }, {
            root: null,
            rootMargin: "100px",
            threshold: 0
        }), m.current.observe(h.current), () => {
            m.current && m.current.disconnect()
        }), []), (0, e.jsx)("section", {
            className: i,
            ref: h,
            children: (0, e.jsx)("div", {
                className: "sticky-wrapper",
                children: (0, e.jsx)(l.Container, {
                    style: {
                        position: "relative",
                        height: "100%",
                        display: "grid",
                        placeItems: "center"
                    },
                    children: (0, e.jsx)(s.PLargeGradient, {
                        className: "text-content tc-1",
                        children: (0, p.splitTextIntoSpans)(b("ring.solidBgSection"))
                    })
                })
            })
        })
    }).withConfig({
        displayName: "SolidBgTextSection",
        componentId: "sc-491a3bb0-0"
    })
    `
  height: 175vh;
  position: relative;
  background: ${({backgroundColor:i})=>i};
  .sticky-wrapper {
    ${s.SectionPadding}

    width: 100%;
    overflow: hidden;
    position: sticky;
    top: 0;
    height: 100vh;

    & > div {
      position: relative;
      height: 100%;

      padding: 48px 12px;
    }

    & .text-content {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      width: 78%;
      z-index: 1;
      text-align: center;
      font-size: 42px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;

      @media (min-width: ${({theme:i})=>i.globalV2.md.minWidth}) {
        width: 24ch;
        font-size: 68px;
        letter-spacing: -2.72px;
      }

      span {
        color: rgb(0, 0, 0);
        // opacity: 0;
      }
    }
  }

  // .tc-2 > span {
  //   opacity: 0;
  // }

  text-align: center;
`;
    i.s(["SolidBgTextSection", 0, g])
}]);