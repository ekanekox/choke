(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 31832, e => {
    "use strict";
    var t = e.i(91398),
        i = e.i(54134),
        a = e.i(64130),
        n = e.i(5917),
        r = e.i(9674),
        l = e.i(68334),
        o = e.i(79297),
        s = e.i(91788),
        d = e.i(60814),
        c = e.i(78198),
        h = e.i(19231),
        p = e.i(53147);
    let m = d.css `
  padding: 9.6rem 0;
  @media (min-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
    padding: 15rem 0;
  }
`,
        g = d.css `
  text-align: center;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 600;
  letter-spacing: 5.76px;
  text-transform: uppercase;
`,
        u = d.css `
  background: #000000;
  color: #ffffff;
  padding: 12px 32px;

  font-size: 1.6rem;
  border-radius: 40px;
  border: none;
  font-weight: 500;

  &.light {
    background: #ffffff;
    color: #000000;
  }
`;
    (0, d.default)(p.default).withConfig({
        displayName: "styleConstants__PrimaryLink",
        componentId: "sc-bb3b1a64-0"
    })
    `
  ${u}
`;
    let x = (0, d.default)("button").withConfig({
        displayName: "styleConstants__PrimaryButton",
        componentId: "sc-bb3b1a64-1"
    })
    `
  ${u}
`, f = d.css `
  text-align: center;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 67.2px */
  letter-spacing: -2.24px;
  max-width: 24ch;

  @media (min-width: ${({theme:e})=>e.globalV2.lg.minWidth}) {
    font-size: 44px;
    letter-spacing: -3.24px;
  }
`;
    d.default.p.withConfig({
        displayName: "styleConstants__P_Lg",
        componentId: "sc-bb3b1a64-2"
    })
    `
  ${f}
`;
    let b = d.css `
  text-align: center;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 110%; /* 67.2px */
  letter-spacing: -2.24px;
  max-width: 24ch;

  @media (min-width: ${({theme:e})=>e.globalV2.lg.minWidth}) {
    font-size: 44px;
    letter-spacing: -3.24px;
  }
`,
        w = d.default.h2.withConfig({
            displayName: "styleConstants__H2_Lg",
            componentId: "sc-bb3b1a64-3"
        })
    `
  ${b}
`, y = d.default.p.withConfig({
        displayName: "styleConstants__P",
        componentId: "sc-bb3b1a64-4"
    })
    `
  color: rgba(255, 255, 255, 0.6);
  font-size: 1.6rem;
  font-style: normal;
  line-height: 120%; /* 28.8px */
  letter-spacing: -0.64px;

  @media (min-width: ${({theme:e})=>e.globalV2.lg.minWidth}) {
    font-size: 2.4rem;
    letter-spacing: -0.96px;
  }
`;
    var v = e.i(11926),
        C = e.i(3828),
        _ = e.i(3115),
        j = e.i(27260),
        k = e.i(49845);
    let S = d.default.section.withConfig({
        displayName: "HeroSectionV2__SectionContainer",
        componentId: "sc-c2fbb0f8-0"
    })
    `
  ${m}
  background: #000;
  color: #fff;
  display: grid;
  place-items: center;
  min-height: 100vh;
  min-height: 100svh;
  position: relative;
  padding-bottom: 60px; /* Space for HSA banner */
  box-sizing: border-box; /* Include padding in height calculation */

  @media (max-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    padding-bottom: 48px; /* Smaller space on mobile */
    place-items: unset;
  }
`, N = d.default.div.withConfig({
        displayName: "HeroSectionV2__ContentWrapper",
        componentId: "sc-c2fbb0f8-1"
    })
    `
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  text-align: center;
  gap: 1rem;
  width: 100%;
  max-width: 120rem;
  margin: 0 auto;

  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    gap: 2.4rem;
  }

  @media (min-width: ${({theme:e})=>e.globalV2.lg.minWidth}) {
    flex-direction: column;
    // gap: 4.8rem;
  }
`, P = d.default.div.withConfig({
        displayName: "HeroSectionV2__TopSection",
        componentId: "sc-c2fbb0f8-2"
    })
    `
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
  width: 100%;
  margin-bottom: 2rem;

  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    margin-bottom: unset;
    // gap: 2rem;
  }

  @media (min-width: ${({theme:e})=>e.globalV2.lg.minWidth}) {
    // gap: 2.4rem;
  }
`, I = d.default.p.withConfig({
        displayName: "HeroSectionV2__Caption",
        componentId: "sc-c2fbb0f8-3"
    })
    `
  position: relative;
  text-align: center;
  font-size: 2rem;
  font-style: normal;
  letter-spacing: -0.096rem;
  color: rgba(255, 255, 255, 0.6);
  display: flex;
  align-items: center;
  gap: 0.4rem;

  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    color: rgba(255, 255, 255, 0.6);
    font-size: 2.4rem;
    text-align: center;
  }
`, $ = d.default.h1.withConfig({
        displayName: "HeroSectionV2__Title",
        componentId: "sc-c2fbb0f8-4"
    })
    `
  ${b}
  color: #fff;
  margin: 0;

  @media (max-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    text-align: center;
    max-width: 20ch;
  }
`, V = (0, d.default)(x).attrs(() => ({
        className: "light"
    })).withConfig({
        displayName: "HeroSectionV2__CTAButton",
        componentId: "sc-c2fbb0f8-5"
    })
    `
  // min-width: 20rem;
  cursor: pointer;
  transition: all 0.2s ease;

  @media (max-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    min-width: 15rem;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 4px 16px rgba(255, 255, 255, 0.2);
  }
`, O = d.default.div.withConfig({
        displayName: "HeroSectionV2__VideoContainer",
        componentId: "sc-c2fbb0f8-6"
    })
    `
  position: relative;
  width: 100%;
  margin: 0 auto;
  border-radius: 1.6rem;
  overflow: hidden;

  /* Mobile: Portrait aspect ratio */
  max-width: 45rem;
  max-height: 40vh;
  aspect-ratio: 1 / 1;

  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    /* Desktop: Landscape aspect ratio */
    max-width: 60rem;
    max-height: 45vh;
    aspect-ratio: 4 / 3;
    border-radius: 2rem;
  }

  video {
    width: 100%;
    height: 100%;
    display: block;
    background: #000000;
  }
`, A = d.default.button.withConfig({
        displayName: "HeroSectionV2__PlayPauseButton",
        componentId: "sc-c2fbb0f8-7"
    })
    `
  position: absolute;
  top: 93svh;
  left: 2rem;
  z-index: 4;
  cursor: pointer;
  border: none;
  background: none;
  padding: 0;
  width: 4rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    width: 3.6rem;
    height: 3.6rem;
  }
  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    top: calc(100vh - 6rem);
  }

  .play-pause-bg {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    background: rgba(255, 255, 255, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.1);
      background: rgba(255, 255, 255, 0.3);
    }
  }

  .play-pause-icon {
    color: white;
    font-size: 1.6rem;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
      font-size: 1.4rem;
    }

    svg {
      width: 2.4rem;
      height: auto;
    }
  }
`, W = d.default.div.withConfig({
        displayName: "HeroSectionV2__HSABanner",
        componentId: "sc-c2fbb0f8-8"
    })
    `
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  gap: 20px;
  width: 100%;
  padding: 16px 0;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  background: #000;

  /* Gradient border top using pseudo-element */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.3) 50%,
      rgba(255, 255, 255, 0) 100%
    );
  }

  /* Gradient border bottom using pseudo-element */
  &::after {
    content: '';
    position: absolute;
    z-index: -1;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.3) 50%,
      rgba(255, 255, 255, 0) 100%
    );
  }
  p {
    display: none;
  }

  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    padding: 12px 0;
    align-items: center;
    p {
      display: block;
      color: rgba(255, 255, 255, 0.5);
      font-size: 18px;
      font-weight: 400;
      line-height: 110%; /* 19.8px */
      letter-spacing: -0.72px;
    }
  }
`, R = (0, d.default)(({
        className: e
    }) => {
        let i = (0, s.useRef)(null),
            a = (0, s.useRef)(null),
            [d, p] = (0, s.useState)(!1),
            [m, g] = (0, s.useState)(!1),
            u = (0, C.useRouter)(),
            {
                region: x
            } = (0, s.useContext)(_.RegionLocaleContext),
            {
                regionSlug: f
            } = (0, s.useContext)(_.RegionLocaleContext),
            {
                getValue: b
            } = (0, j.default)();
        (0, s.useEffect)(() => {
            let e = new IntersectionObserver(([e]) => {
                    let t = e.isIntersecting;
                    i.current && (t ? m || (i.current.play().catch(() => {
                        i.current && (i.current.controls = !0)
                    }), p(!0)) : (i.current.pause(), p(!1)))
                }, {
                    threshold: .5,
                    rootMargin: "0px"
                }),
                t = () => {
                    p(!1), g(!0)
                },
                n = a.current,
                r = i.current;
            return n && e.observe(n), r && r.addEventListener("ended", t), () => {
                n && e.unobserve(n), e.disconnect(), r && r.removeEventListener("ended", t)
            }
        }, [m]);
        let w = (0, c.getCompressedAssetUrl)(b("/web_v2/womens-health/videos/cno-pro-hero-v4.mp4", "/web_v2/womens-health/plus/hero/animation.mp4")),
            y = (0, c.getCompressedAssetUrl)(b("/web_v2/womens-health/videos/cno-pro-hero-v4.mp4", "/web_v2/womens-health/plus/hero/animation.mp4")),
            R = b("The world's most accurate Cycle & Ovulation Tracker", "A science-backed approach to cycle and ovulation pattern tracking");
        return (0, t.jsxs)(S, {
            ref: a,
            className: e,
            children: [(0, t.jsx)(h.Container, {
                children: (0, t.jsxs)(N, {
                    children: [(0, t.jsxs)(P, {
                        children: [(0, t.jsxs)(I, {
                            children: ["Cycle and Ovulation ", (0, t.jsx)(() => b((0, t.jsx)(l.ProLiquidGlass, {
                                style: {
                                    height: "28px",
                                    width: "auto"
                                },
                                "aria-hidden": "true"
                            }), (0, t.jsx)(k.default, {
                                style: {
                                    height: "28px",
                                    width: "auto"
                                },
                                "aria-hidden": "true"
                            })), {}), (0, t.jsx)(o.StarGlare, {
                                style: {
                                    position: "absolute",
                                    top: "-100%",
                                    right: "-36px"
                                },
                                "aria-hidden": "true"
                            })]
                        }), (0, t.jsx)($, {
                            children: R
                        }), "US" !== x ? (0, t.jsx)(V, {
                            onClick: () => {
                                u.push({
                                    pathname: `/${f}/ring/buy`,
                                    query: { ...u.query
                                    }
                                })
                            },
                            "aria-label": "Buy Ultrahuman Ring",
                            children: "Buy Ring"
                        }) : null]
                    }), (0, t.jsx)(O, {
                        children: (0, t.jsxs)("video", {
                            ref: i,
                            muted: !0,
                            playsInline: !0,
                            "aria-label": "Product demonstration video showing Ultrahuman Ring cycle tracking features",
                            children: [(0, t.jsx)("source", {
                                src: w,
                                type: "video/mp4",
                                media: "(min-width: 768px)"
                            }), (0, t.jsx)("source", {
                                src: y,
                                type: "video/mp4",
                                media: "(max-width: 767px)"
                            }), (0, t.jsx)("source", {
                                src: w,
                                type: "video/mp4"
                            }), "Your browser does not support the video tag."]
                        })
                    }), (0, t.jsx)(A, {
                        onClick: () => {
                            i.current && (d ? (i.current.pause(), p(!1)) : (m && (i.current.currentTime = 0), i.current.play(), p(!0)))
                        },
                        "aria-label": "Play or Pause Video",
                        "aria-pressed": d ? "true" : "false",
                        children: (0, t.jsx)("div", {
                            className: "play-pause-bg",
                            children: (0, t.jsx)("div", {
                                className: "play-pause-icon",
                                children: d ? (0, t.jsx)(n.PauseWhite, {
                                    "aria-hidden": "true"
                                }) : (0, t.jsx)(r.PlayWhite, {
                                    "aria-hidden": "true"
                                })
                            })
                        })
                    })]
                })
            }), "US" === x ? (0, t.jsxs)(W, {
                role: "banner",
                "aria-label": "HSA and FSA payment options available",
                children: [(0, t.jsx)(v.HsaFsaHorizontal, {
                    "aria-hidden": "true"
                }), (0, t.jsx)("p", {
                    children: "Save more with your pre-tax dollars."
                })]
            }) : null]
        })
    }).withConfig({
        displayName: "HeroSectionV2",
        componentId: "sc-c2fbb0f8-9"
    })
    ``;
    var U = e.i(14681),
        z = e.i(40290),
        F = e.i(21666);
    let L = [{
            src: "web_v2/womens-health/cycle-flags-carousel/1.png/w_1600",
            alt: "Cycle Pattern 1"
        }, {
            src: "web_v2/womens-health/cycle-flags-carousel/2.png/w_1600",
            alt: "Cycle Pattern 2"
        }, {
            src: "web_v2/womens-health/cycle-flags-carousel/3.png/w_1600",
            alt: "Cycle Pattern 3"
        }, {
            src: "web_v2/womens-health/cycle-flags-carousel/4.png/w_1600",
            alt: "Cycle Pattern 4"
        }, {
            src: "web_v2/womens-health/cycle-flags-carousel/5.png/w_1600",
            alt: "Cycle Pattern 5"
        }, {
            src: "web_v2/womens-health/cycle-flags-carousel/6.png/w_1600",
            alt: "Cycle Pattern 6"
        }, {
            src: "web_v2/womens-health/cycle-flags-carousel/7.png/w_1600",
            alt: "Cycle Pattern 7"
        }, {
            src: "web_v2/womens-health/cycle-flags-carousel/8.png/w_1600",
            alt: "Cycle Pattern 8"
        }, {
            src: "web_v2/womens-health/cycle-flags-carousel/9.png/w_1600",
            alt: "Cycle Pattern 9"
        }, {
            src: "web_v2/womens-health/cycle-flags-carousel/10.png/w_1600",
            alt: "Cycle Pattern 10"
        }],
        T = [{
            src: "web_v2/womens-health/plus/cycle-flags-carousel/01.png/w_1600",
            alt: "Cycle Pattern 1"
        }, {
            src: "web_v2/womens-health/plus/cycle-flags-carousel/02.png/w_1600",
            alt: "Cycle Pattern 2"
        }, {
            src: "web_v2/womens-health/plus/cycle-flags-carousel/03.png/w_1600",
            alt: "Cycle Pattern 3"
        }, {
            src: "web_v2/womens-health/plus/cycle-flags-carousel/04.png/w_1600",
            alt: "Cycle Pattern 4"
        }, {
            src: "web_v2/womens-health/plus/cycle-flags-carousel/05.png/w_1600",
            alt: "Cycle Pattern 5"
        }, {
            src: "web_v2/womens-health/plus/cycle-flags-carousel/06.png/w_1600",
            alt: "Cycle Pattern 6"
        }, {
            src: "web_v2/womens-health/plus/cycle-flags-carousel/07.png/w_1600",
            alt: "Cycle Pattern 7"
        }, {
            src: "web_v2/womens-health/plus/cycle-flags-carousel/08.png/w_1600",
            alt: "Cycle Pattern 8"
        }, {
            src: "web_v2/womens-health/plus/cycle-flags-carousel/09.png/w_1600",
            alt: "Cycle Pattern 9"
        }, {
            src: "web_v2/womens-health/plus/cycle-flags-carousel/10.png/w_1600",
            alt: "Cycle Pattern 10"
        }],
        B = (0, d.default)(({
            className: e
        }) => {
            let {
                getValue: i
            } = (0, j.useIsCnOPlus)(), a = (0, s.useMemo)(() => i(L, T), [i]), [n, r] = (0, U.default)({
                loop: !0,
                align: "center",
                slidesToScroll: 1,
                containScroll: "trimSnaps"
            }), [, l] = (0, s.useState)(0), o = (0, s.useCallback)(() => {
                r && r.scrollPrev()
            }, [r]), d = (0, s.useCallback)(() => {
                r && r.scrollNext()
            }, [r]), c = (0, s.useCallback)(() => {
                r && l(r.selectedScrollSnap())
            }, [r]);
            (0, s.useEffect)(() => {
                if (r) return c(), r.on("select", c), () => {
                    r.off("select", c)
                }
            }, [r, c]);
            let p = i("Cycle Flags™ : Your cycle's quietest signals, decoded", "Cycle Flags : Your cycle's quietest signals, decoded");
            return (0, t.jsxs)("section", {
                className: e,
                children: [(0, t.jsx)(h.Container, {
                    children: (0, t.jsxs)(M, {
                        children: [(0, t.jsx)(w, {
                            children: p
                        }), (0, t.jsx)(y, {
                            children: "Discover unique cycle patterns that help reveal hidden clues about your reproductive health"
                        })]
                    })
                }), (0, t.jsxs)(H, {
                    children: [(0, t.jsx)("div", {
                        className: "embla",
                        ref: n,
                        children: (0, t.jsx)("div", {
                            className: "embla__container",
                            children: a.map((e, i) => (0, t.jsx)("div", {
                                className: "embla__slide",
                                children: (0, t.jsx)("div", {
                                    className: "slide-content",
                                    children: (0, t.jsx)(F.CustomImage, {
                                        src: e.src,
                                        alt: e.alt,
                                        width: 1e3,
                                        height: 750,
                                        style: {
                                            objectFit: "cover"
                                        }
                                    })
                                })
                            }, i))
                        })
                    }), (0, t.jsxs)("div", {
                        className: "carousel-controls",
                        children: [(0, t.jsx)("button", {
                            className: "embla__prev",
                            onClick: o,
                            "aria-label": "Previous slide",
                            children: (0, t.jsx)(z.CaretUp, {
                                style: {
                                    transform: "rotate(-90deg)"
                                }
                            })
                        }), (0, t.jsx)("button", {
                            className: "embla__next",
                            onClick: d,
                            "aria-label": "Next slide",
                            children: (0, t.jsx)(z.CaretUp, {
                                style: {
                                    transform: "rotate(90deg)"
                                }
                            })
                        })]
                    })]
                })]
            })
        }).withConfig({
            displayName: "ImagesCarouselSection",
            componentId: "sc-e005d696-0"
        })
    `
  ${m}

  background: #000000;
  color: #fff;
`, H = d.default.div.withConfig({
        displayName: "ImagesCarouselSection__CarouselSection",
        componentId: "sc-e005d696-1"
    })
    `
  position: relative;
  width: 100%;
  margin-top: 4rem;

  .embla {
    overflow: hidden;
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 60px;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 120px;
      height: 100%;
      background: linear-gradient(
        90deg,
        #000000 0%,
        rgba(0, 0, 0, 0.95) 15%,
        rgba(0, 0, 0, 0.8) 35%,
        rgba(0, 0, 0, 0.6) 55%,
        rgba(0, 0, 0, 0.3) 75%,
        rgba(0, 0, 0, 0.1) 90%,
        transparent 100%
      );
      z-index: 2;
      pointer-events: none;

      @media (min-width: 1920px) {
        width: 140px;
      }

      @media (min-width: 2560px) {
        width: 160px;
      }

      @media (max-width: ${({theme:e})=>e.globalV2.md.minWidth}) {
        width: 80px;
      }

      @media (max-width: ${({theme:e})=>e.globalV2.xs.minWidth}) {
        width: 60px;
      }
    }

    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 120px;
      height: 100%;
      background: linear-gradient(
        270deg,
        #000000 0%,
        rgba(0, 0, 0, 0.95) 15%,
        rgba(0, 0, 0, 0.8) 35%,
        rgba(0, 0, 0, 0.6) 55%,
        rgba(0, 0, 0, 0.3) 75%,
        rgba(0, 0, 0, 0.1) 90%,
        transparent 100%
      );
      z-index: 2;
      pointer-events: none;

      @media (min-width: 1920px) {
        width: 140px;
      }

      @media (min-width: 2560px) {
        width: 160px;
      }

      @media (max-width: ${({theme:e})=>e.globalV2.md.minWidth}) {
        width: 80px;
      }

      @media (max-width: ${({theme:e})=>e.globalV2.xs.minWidth}) {
        width: 60px;
      }
    }

    @media (min-width: 1920px) {
      max-width: 1600px;
      padding: 0 80px;
    }

    @media (min-width: 2560px) {
      max-width: 1800px;
      padding: 0 100px;
    }

    @media (max-width: ${({theme:e})=>e.globalV2.md.minWidth}) {
      padding: 0 40px;
    }

    @media (max-width: ${({theme:e})=>e.globalV2.xs.minWidth}) {
      padding: 0 20px;
    }
  }

  .embla__container {
    display: flex;
    align-items: center;
  }

  .embla__slide {
    flex: 0 0 50%;
    min-width: 0;
    padding: 0 16px;
    display: flex;
    justify-content: center;

    @media (min-width: ${({theme:e})=>e.globalV2.lg.minWidth}) {
      flex: 0 0 45%;
      padding: 0 20px;
    }

    @media (min-width: 1920px) {
      flex: 0 0 40%;
      padding: 0 24px;
    }

    @media (min-width: 2560px) {
      flex: 0 0 35%;
      padding: 0 28px;
    }

    @media (max-width: ${({theme:e})=>e.globalV2.md.minWidth}) {
      padding: 0 8px;
      flex: 0 0 70%;
    }

    @media (max-width: ${({theme:e})=>e.globalV2.xs.minWidth}) {
      flex: 0 0 85%;
      padding: 0 4px;
    }
  }

  .slide-content {
    width: 100%;
    max-width: 600px;
    transition: all 0.3s ease;

    @media (min-width: ${({theme:e})=>e.globalV2.lg.minWidth}) {
      max-width: 650px;
    }

    @media (min-width: 1920px) {
      max-width: 700px;
    }

    @media (min-width: 2560px) {
      max-width: 750px;
    }

    img {
      width: 100%;
      height: auto;
      aspect-ratio: 4/3;

      border-radius: 16px;

      @media (min-width: ${({theme:e})=>e.globalV2.md.minWidth}) {
        border-radius: 32px;
      }
    }
  }

  .carousel-controls {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-top: 3rem;

    button {
      border: none;
      background: rgba(255, 255, 255, 0.07);
      border-radius: 50%;
      width: 4rem;
      height: 4rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        background: rgba(255, 255, 255, 1);
        transform: scale(1.05);

        svg {
          color: #000000;
          path {
            fill: #000000;
          }
        }
      }

      &:active {
        transform: scale(0.95);
      }

      svg {
        color: #fff;
        width: 1.6rem;
        height: 1.6rem;

        path {
          fill: rgba(255, 255, 255, 0.2);
        }
      }
    }
  }

  .embla__prev,
  .embla__next {
    position: static;
  }
`, M = d.default.div.withConfig({
        displayName: "ImagesCarouselSection__TextContainer",
        componentId: "sc-e005d696-2"
    })
    `
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;

  margin-bottom: 72px;

  @media (max-width: ${({theme:e})=>e.globalV2.md.minWidth}) {
    margin-bottom: 52px;
    margin-bottom: 64px;
  }

  ${w} {
    max-width: unset;
  }

  ${y} {
    text-align: center;
    max-width: 44ch;
  }
`, E = d.default.section.withConfig({
        displayName: "ImageTitleCtaSection__SectionContainer",
        componentId: "sc-fd81f61d-0"
    })
    `
  ${m}
  padding-top: 9.6rem !important;

  position: relative;
  background: #000;
  color: #fff;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  min-height: 100vh;
`, G = d.default.div.withConfig({
        displayName: "ImageTitleCtaSection__ContentWrapper",
        componentId: "sc-fd81f61d-1"
    })
    `
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.2rem;

  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    gap: 2rem;
  }
`, Z = d.default.div.withConfig({
        displayName: "ImageTitleCtaSection__BackgroundImage",
        componentId: "sc-fd81f61d-2"
    })
    `
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('${e=>e.$bgImageResponsive}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 1;

  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    background-image: url('${e=>e.$bgImage}');
  }

  // &::after {
  //   content: '';
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   width: 100%;
  //   height: 100%;
  //   background: rgba(0, 0, 0, 0.4);
  // }
`, D = d.default.h2.withConfig({
        displayName: "ImageTitleCtaSection__Title",
        componentId: "sc-fd81f61d-3"
    })
    `
  ${b}
  color: #fff;
  margin: 0;
  max-width: 24ch;

  .subtitle {
    color: rgba(255, 255, 255, 0.4);
    // display: block;
    // margin-top: 1rem;
  }
`, q = (0, d.default)(x).attrs(() => ({
        className: "light"
    })).withConfig({
        displayName: "ImageTitleCtaSection__DownloadButton",
        componentId: "sc-fd81f61d-4"
    })
    `
  min-width: 200px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 4px 16px rgba(255, 255, 255, 0.2);
  }
`;

    function Y() {
        let {
            getValue: e
        } = (0, j.default)(), i = (0, c.getCompressedAssetUrl)(e("/web_v2/womens-health/illustration/monthly-report-desktop-v3.png/w_3840", "/web_v2/womens-health/plus/report/desktop.png/w_3840")), a = (0, c.getCompressedAssetUrl)(e("/web_v2/womens-health/illustration/monthly-report-responsive-v3.png/w_1920", "/web_v2/womens-health/plus/report/mobile.png/w_1920"));
        return (0, t.jsxs)(E, {
            children: [(0, t.jsx)(Z, {
                $bgImage: i,
                $bgImageResponsive: a
            }), (0, t.jsx)(h.Container, {
                children: (0, t.jsxs)(G, {
                    children: [(0, t.jsxs)(D, {
                        children: ["A complete view of your cycle health", " ", (0, t.jsx)("span", {
                            className: "subtitle",
                            children: "over time"
                        })]
                    }), (0, t.jsx)(q, {
                        onClick: () => {
                            let t = document.createElement("a");
                            t.href = e("https://s3.us-east-1.amazonaws.com/public-web-assets.uh-static.com/web_v2/womens-health/documents/C&O_Pro_Sample Report.pdf", "https://s3.us-east-1.amazonaws.com/public-web-assets.uh-static.com/web_v2/womens-health/plus/documents/C&O_Plus_Sample_Report.pdf"), t.download = e("C&O Pro Sample Report.pdf", "C&O Plus Sample Report.pdf"), t.target = "_blank", document.body.appendChild(t), t.click(), document.body.removeChild(t)
                        },
                        children: "Download sample report"
                    })]
                })
            })]
        })
    }
    var Q = e.i(18888),
        K = e.i(61791),
        X = e.i(8762);
    let J = d.default.button.withConfig({
        displayName: "ProgressTabsSection__ProgressCTA",
        componentId: "sc-18261405-0"
    })
    `
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.5);
  min-width: 134px;
  padding: 30px 52px;
  background: ${({$isActive:e})=>e?"#FFFFFF":"rgba(255, 255, 255, 0.05)"};
  -webkit-backdrop-filter: ${({$isActive:e})=>e?"none":"blur(10px)"};
  backdrop-filter: ${({$isActive:e})=>e?"none":"blur(10px)"};
  border-radius: 18px;
  overflow: hidden;
  z-index: 0;
  cursor: pointer;
  will-change: transform, opacity;

  color: ${({$isActive:e})=>e?"#000":"#fff"};
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.68px;

  &:hover {
    background: ${({$isActive:e})=>e?"#FFFFFF":"rgba(255, 255, 255, 0.08)"};
  }

  @media (max-width: 768px) {
    flex: 0 0 auto;
    min-width: fit-content;
    padding: 6px 22px;
    font-size: 14px;
    line-height: 1.1;
    letter-spacing: -0.5px;
    border-radius: 40px;
    text-align: center;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 21px */
    letter-spacing: -0.56px;
  }

  @media (min-width: 769px) {
    min-width: 100px;
    padding: 10px 22px;
    text-align: center;
    font-feature-settings: 'liga' off, 'clig' off;
    font-size: 17px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.2;
    letter-spacing: -0.68px;
    border-radius: 40px;
  }
`, ee = d.default.section.withConfig({
        displayName: "ProgressTabsSection__SectionContainer",
        componentId: "sc-18261405-1"
    })
    `
  position: relative;
  width: 100vw;
  height: 100vh;
  background: #000000;
  display: flex;
  justify-content: center;
  gap: 2rem;
  transform: translateZ(0); /* Enable GPU acceleration */
  overflow: hidden;
  ${K.sectionPadding};

  @media (max-width: 768px) {
    height: 100dvh;
    gap: 0.8rem;
    padding: 1rem;
    align-items: center;

    > :nth-child(2) {
      position: absolute;
      top: 64px;
      left: 0;
    }
  }
`, et = d.default.div.withConfig({
        displayName: "ProgressTabsSection__ImagesContainer",
        componentId: "sc-18261405-2"
    })
    `
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
`, ei = d.default.div.withConfig({
        displayName: "ProgressTabsSection__ImageWrapper",
        componentId: "sc-18261405-3"
    })
    `
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  // opacity: 0;
`, ea = d.default.h2.withConfig({
        displayName: "ProgressTabsSection__TitleSection",
        componentId: "sc-18261405-4"
    })
    `
  ${b}
  color: #fff;
  text-align: center;
  max-width: 25ch;

  @media (max-width: 768px) {
    max-width: 17ch;
    margin-bottom: 0.5rem;
  }
`, en = d.default.div.withConfig({
        displayName: "ProgressTabsSection__ContentParent",
        componentId: "sc-18261405-5"
    })
    `
  position: relative;
  z-index: 20;
  display: flex;
  flex-direction: column;
  align-items: center;
  // justify-content: center;
  gap: 2.4rem;

  @media (max-width: 768px) {
    gap: 2rem;
    width: 100%;
    height: 100%;
    justify-content: center;
    padding: 0 1rem;
  }
`, er = d.default.div.withConfig({
        displayName: "ProgressTabsSection__CTAContainer",
        componentId: "sc-18261405-6"
    })
    `
  display: flex;
  flex-wrap: wrap;
  gap: 1.7rem;
  justify-content: center;
  max-width: 900px;

  @media (max-width: 768px) {
    gap: 1rem;
    width: 100%;
    max-width: 400px;
  }
`, el = ({
        className: e
    }) => {
        let [i, a] = (0, s.useState)(0), [n, r] = (0, s.useState)(() => new Set), {
            getValue: l
        } = (0, j.default)(), [o, d] = (0, s.useState)(!1), c = (0, X.useGsapContext)(), p = (0, s.useMemo)(() => ["Cycle Tracking", "Conception", l("Cycle Tracking Pro", "Cycle Tracking Plus"), l("Conception Pro", "Conception Plus"), "Pregnancy Insights"], [l]), m = (0, s.useMemo)(() => ["web_v2/womens-health/carousel/lg/2.png/w_2560", "web_v2/womens-health/carousel/lg/3.png/w_2560", l("web_v2/womens-health/carousel/lg/1.png/w_2560", "web_v2/womens-health/plus/commprehensive-view/desktop/cycle-tracking-plus-new.png/w_2560"), l("web_v2/womens-health/carousel/lg/4.png/w_2560", "web_v2/womens-health/plus/commprehensive-view/desktop/ovulation-plus.png/w_2560"), "web_v2/womens-health/carousel/lg/5.png/w_2560"], [l]), g = (0, s.useMemo)(() => ["web_v2/womens-health/carousel/sm/1.png/w_1080", "web_v2/womens-health/carousel/sm/2.png/w_1080", l("web_v2/womens-health/carousel/sm/3.png/w_1080", "web_v2/womens-health/plus/commprehensive-view/mobile/cycle-tracking-plus-new.png/w_1080"), l("web_v2/womens-health/carousel/sm/4.png/w_1080", "web_v2/womens-health/plus/commprehensive-view/mobile/ovulation-plus.png/w_1080"), "web_v2/womens-health/carousel/sm/5.png/w_1080"], [l]), u = o ? g : m, x = (0, s.useRef)(null), f = (0, s.useRef)([]), b = (0, s.useRef)([]), w = (0, s.useRef)([]), y = (0, s.useRef)(null);
        (0, s.useEffect)(() => {
            let e = () => {
                d(window.innerWidth <= 768)
            };
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
        }, []), (0, s.useEffect)(() => {
            if (w.current) return c.add(() => {
                Q.gsap.set(w.current, {
                    autoAlpha: 0
                }), w.current[0] && Q.gsap.set(w.current[0], {
                    autoAlpha: 1
                });
                let e = Q.gsap.timeline({
                    repeat: -1,
                    onRepeat: () => {
                        r(new Set), a(0)
                    }
                });
                b.current.forEach((t, i) => {
                    if (!t) return;
                    let n = Q.gsap.timeline({
                        onStart: () => {
                            if (a(i), 0 === i) {
                                let e = b.current;
                                requestAnimationFrame(() => {
                                    e.forEach(e => {
                                        e && Q.gsap.set(e, {
                                            width: "0%"
                                        })
                                    })
                                })
                            }
                        },
                        onComplete: () => {
                            r(e => new Set([...e, i]))
                        }
                    });
                    n.fromTo(t, {
                        width: "0%"
                    }, {
                        width: "100%",
                        duration: 5,
                        ease: "none"
                    }, 0), i < u.length - 1 ? n.add(() => {
                        Q.gsap.to(w.current[i], {
                            autoAlpha: 0,
                            duration: .8,
                            ease: "linear",
                            overwrite: "auto",
                            stagger: .1
                        }), Q.gsap.to(w.current[i + 1], {
                            autoAlpha: 1,
                            duration: .8,
                            ease: "linear",
                            overwrite: "auto",
                            stagger: .1
                        })
                    }, 5) : n.add(() => {
                        Q.gsap.to(w.current[i], {
                            autoAlpha: 0,
                            duration: .8,
                            ease: "linear",
                            overwrite: "auto",
                            stagger: .1
                        }), Q.gsap.to(w.current[0], {
                            autoAlpha: 1,
                            duration: .8,
                            ease: "linear",
                            overwrite: "auto",
                            stagger: .1
                        })
                    }, 5), i < p.length - 1 && n.to({}, {
                        duration: .1
                    }), e.add(n)
                }), y.current = e
            }, x), () => {
                y.current && y.current.kill()
            }
        }, [c, u]);
        let v = (0, s.useCallback)(e => {
            if (!y.current) return;
            let t = 5.1 * e;
            r(() => {
                let t = new Set;
                for (let i = 0; i < e; i++) t.add(i);
                return t
            });
            let i = b.current,
                n = w.current;
            requestAnimationFrame(() => {
                for (let t = e; t < i.length; t++) i[t] && Q.gsap.set(i[t], {
                    width: "0%"
                });
                for (let t = 0; t < e; t++) i[t] && Q.gsap.set(i[t], {
                    width: "100%"
                });
                n.forEach((t, i) => {
                    t && Q.gsap.to(t, {
                        autoAlpha: +(i === e),
                        duration: .8,
                        ease: "linear",
                        overwrite: "auto"
                    })
                }), y.current ? .seek(t), y.current ? .play(), a(e)
            })
        }, []);
        return (0, t.jsxs)(ee, {
            ref: x,
            className: e,
            children: [(0, t.jsx)(et, {
                children: u.map((e, i) => (0, t.jsx)(ei, {
                    ref: e => {
                        w.current[i] = e
                    },
                    children: e && (0, t.jsx)(F.CustomImage, {
                        src: e,
                        alt: `Background ${i+1}`,
                        fill: !0,
                        style: {
                            objectFit: "cover",
                            objectPosition: "bottom"
                        },
                        priority: 0 === i,
                        loading: 0 === i ? "eager" : "lazy"
                    })
                }, `${o?"mobile":"desktop"}-${i}`))
            }), (0, t.jsx)(h.Container, {
                children: (0, t.jsxs)(en, {
                    children: [(0, t.jsx)(ea, {
                        children: "A comprehensive view of your cycle at every stage"
                    }), (0, t.jsx)(er, {
                        children: p.map((e, a) => (0, t.jsxs)(J, {
                            ref: e => {
                                f.current[a] = e
                            },
                            $isActive: i === a,
                            $isCompleted: n.has(a),
                            onClick: () => v(a),
                            children: [e, (0, t.jsx)("div", {
                                ref: e => {
                                    b.current[a] = e
                                },
                                style: {
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    height: "100%",
                                    width: "0%",
                                    background: "rgba(0, 0, 0, 0.1)",
                                    zIndex: 1
                                }
                            })]
                        }, a))
                    })]
                })
            })]
        })
    };

    function eo({
        isPlaying: e,
        onClick: i
    }) {
        return (0, t.jsx)("button", {
            className: "play-pause-container",
            onClick: i,
            "aria-label": "Play or puase the video",
            "aria-pressed": e ? "true" : "false",
            children: (0, t.jsx)("div", {
                className: "play-pause-bg",
                children: (0, t.jsx)("div", {
                    className: "play-pause-icon",
                    children: e ? (0, t.jsx)(n.PauseWhite, {
                        "aria-hidden": "true"
                    }) : (0, t.jsx)(r.PlayWhite, {
                        "aria-hidden": "true"
                    })
                })
            })
        })
    }

    function es({
        videoSrc: e,
        videoRef: i,
        title: a
    }) {
        let n = (0, t.jsx)("div", {
            className: "video-overlay",
            children: (0, t.jsxs)("video", {
                ref: i,
                style: {
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block"
                },
                muted: !0,
                playsInline: !0,
                preload: "none",
                "aria-label": a || "Video description for Ultrahuman Features",
                children: [(0, t.jsx)("source", {
                    src: e,
                    type: "video/mp4"
                }), "Your browser does not support the video tag."]
            })
        });
        return (0, t.jsxs)("div", {
            className: "phone-svg-container",
            children: [n, (0, t.jsxs)("svg", {
                width: "445",
                height: "904",
                viewBox: "0 0 445 904",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                "aria-hidden": "true",
                role: "presentation",
                children: [(0, t.jsx)("mask", {
                    id: "mask0_2222_3549",
                    style: {
                        maskType: "alpha"
                    },
                    maskUnits: "userSpaceOnUse",
                    x: "0",
                    y: "-6",
                    width: "445",
                    height: "916",
                    children: (0, t.jsx)("path", {
                        d: "M444.652 909.532H0.21875V-5.75317H444.652V909.532ZM86.833 18.5535C64.6099 18.6003 56.4466 20.9654 48.2178 25.3689L47.6787 25.6619C39.6238 30.1014 33.2861 36.5248 28.9375 44.6609C24.4922 52.9778 22.125 61.2277 22.125 83.9773L22.126 820.483C22.1728 842.719 24.5368 850.887 28.9375 859.121L29.2305 859.661C33.6673 867.721 40.0868 874.062 48.2178 878.413C56.5297 882.861 64.7748 885.23 87.5107 885.23H357.36C379.414 885.23 387.833 883.001 395.904 878.808L396.652 878.413C404.964 873.965 411.488 867.438 415.934 859.121C420.379 850.804 422.746 842.554 422.746 819.805V83.9773C422.746 61.9104 420.519 53.4861 416.328 45.4099L415.934 44.6609C411.488 36.344 404.964 29.8168 396.652 25.3689C388.341 20.9211 380.096 18.5525 357.36 18.5525L86.833 18.5535Z",
                        fill: "black"
                    })
                }), (0, t.jsxs)("g", {
                    mask: "url(#mask0_2222_3549)",
                    children: [(0, t.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M441.754 272.473L441.769 271.971C441.884 269.12 442.501 264.509 442.501 264.509H443.717C444.744 264.509 445.573 265.336 445.568 266.367L445.109 360.032C445.103 361.058 444.276 361.89 443.245 361.89L442.184 361.889C442.128 361.863 441.902 361.528 441.756 357.94L441.727 291.361C441.728 281.247 441.736 273.721 441.754 272.473V272.473Z",
                        fill: "url(#paint0_linear_2222_3549)"
                    }), (0, t.jsx)("mask", {
                        id: "mask1_2222_3549",
                        style: {
                            maskType: "luminance"
                        },
                        maskUnits: "userSpaceOnUse",
                        x: "441",
                        y: "264",
                        width: "5",
                        height: "98",
                        children: (0, t.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M441.754 272.473L441.769 271.971C441.884 269.12 442.501 264.509 442.501 264.509H443.717C444.744 264.509 445.573 265.336 445.568 266.367L445.109 360.032C445.103 361.058 444.276 361.89 443.245 361.89L442.184 361.889C442.128 361.863 441.902 361.528 441.756 357.94L441.727 291.361C441.728 281.247 441.736 273.721 441.754 272.473V272.473Z",
                            fill: "white"
                        })
                    }), (0, t.jsx)("g", {
                        mask: "url(#mask1_2222_3549)"
                    }), (0, t.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M4.93401 308.162C4.81927 305.31 4.20172 300.699 4.20172 300.699H2.98616C1.9589 300.699 1.13261 301.529 1.14068 302.564V359.944C1.14872 360.974 2.42752 361.891 3.45795 361.891L4.5187 361.89C4.57508 361.864 4.80074 361.53 4.94686 357.941L4.97658 319.734C4.97521 314.028 4.96761 309.693 4.94884 308.652L4.93401 308.162Z",
                        fill: "url(#paint1_linear_2222_3549)"
                    }), (0, t.jsx)("mask", {
                        id: "mask2_2222_3549",
                        style: {
                            maskType: "luminance"
                        },
                        maskUnits: "userSpaceOnUse",
                        x: "1",
                        y: "300",
                        width: "4",
                        height: "62",
                        children: (0, t.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M4.93401 308.162C4.81927 305.31 4.20172 300.699 4.20172 300.699H2.98616C1.9589 300.699 1.13261 301.529 1.14068 302.564V359.944C1.14872 360.974 2.42752 361.891 3.45795 361.891L4.5187 361.89C4.57508 361.864 4.80074 361.53 4.94686 357.941L4.97658 319.734C4.97521 314.028 4.96761 309.693 4.94884 308.652L4.93401 308.162Z",
                            fill: "white"
                        })
                    }), (0, t.jsx)("g", {
                        mask: "url(#mask2_2222_3549)",
                        children: (0, t.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M-0.0963022 303.039V300.041L-0.0426984 300.008C0.280969 299.839 1.96212 299.365 2.00631 307.743L2.00719 352.974C2.00719 360.874 1.09392 361.958 0.73542 362.397L-0.3125 360.316C0.964866 358.414 1.21152 356.111 1.22751 352.585L1.22837 311.834C1.22837 307.361 0.270536 303.02 -0.0963022 303.039Z",
                            fill: "#0C0E14"
                        })
                    }), (0, t.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M4.93401 227.427C4.81927 224.576 4.20172 219.965 4.20172 219.965H2.98616C1.9589 219.965 1.13261 220.795 1.14068 221.829V279.267C1.14872 280.297 2.42752 281.157 3.45795 281.157L4.5187 281.156C4.57508 281.13 4.80074 280.795 4.94686 277.207L4.97658 239C4.97521 233.294 4.96761 228.958 4.94884 227.918L4.93401 227.427Z",
                        fill: "url(#paint2_linear_2222_3549)"
                    }), (0, t.jsx)("mask", {
                        id: "mask3_2222_3549",
                        style: {
                            maskType: "luminance"
                        },
                        maskUnits: "userSpaceOnUse",
                        x: "1",
                        y: "219",
                        width: "4",
                        height: "63",
                        children: (0, t.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M4.93401 227.427C4.81927 224.576 4.20172 219.965 4.20172 219.965H2.98616C1.9589 219.965 1.13261 220.795 1.14068 221.829V279.267C1.14872 280.297 2.42752 281.157 3.45795 281.157L4.5187 281.156C4.57508 281.13 4.80074 280.795 4.94686 277.207L4.97658 239C4.97521 233.294 4.96761 228.958 4.94884 227.918L4.93401 227.427Z",
                            fill: "white"
                        })
                    }), (0, t.jsx)("g", {
                        mask: "url(#mask3_2222_3549)",
                        children: (0, t.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M-0.0963022 222.309V219.311L-0.0426984 219.278C0.280969 219.109 1.96212 218.635 2.00631 227.013L2.00719 272.244C2.00719 280.144 1.09392 281.228 0.73542 281.667L-0.3125 279.586C0.964866 277.684 1.21152 275.381 1.22751 271.855L1.22837 231.104C1.22837 226.631 0.270536 222.29 -0.0963022 222.309Z",
                            fill: "#0C0E14"
                        })
                    }), (0, t.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M4.93401 168.04C4.81927 165.188 4.20172 160.577 4.20172 160.577H2.98616C1.9589 160.577 1.13261 161.407 1.14068 162.442L1.19326 190.096C1.2013 191.126 2.42752 192.076 3.45795 192.076L4.5187 192.075C4.57508 192.049 4.80074 191.714 4.94686 188.126L4.97658 179.612C4.97521 173.906 4.96761 169.571 4.94884 168.53L4.93401 168.04Z",
                        fill: "url(#paint3_linear_2222_3549)"
                    }), (0, t.jsx)("mask", {
                        id: "mask4_2222_3549",
                        style: {
                            maskType: "luminance"
                        },
                        maskUnits: "userSpaceOnUse",
                        x: "1",
                        y: "160",
                        width: "4",
                        height: "33",
                        children: (0, t.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M4.93401 168.04C4.81927 165.188 4.20172 160.577 4.20172 160.577H2.98616C1.9589 160.577 1.13261 161.407 1.14068 162.442L1.19326 190.096C1.2013 191.126 2.42752 192.076 3.45795 192.076L4.5187 192.075C4.57508 192.049 4.80074 191.714 4.94686 188.126L4.97658 179.612C4.97521 173.906 4.96761 169.571 4.94884 168.53L4.93401 168.04Z",
                            fill: "white"
                        })
                    }), (0, t.jsx)("g", {
                        mask: "url(#mask4_2222_3549)",
                        children: (0, t.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M0.573675 162.511C0.573675 162.511 0.397505 161.538 0.208719 161.217C-0.116637 160.663 -0.96875 159.887 -0.96875 159.887C-0.639072 159.7 1.50516 159.316 1.54934 167.695L1.55023 183.232C1.55023 191.132 0.167865 192.143 -0.190632 192.583L-0.0978958 191.351C1.00467 189.367 0.814346 186.758 0.830335 183.232V171.972C0.830335 167.499 0.676981 163.014 0.573675 162.511Z",
                            fill: "#0C0E14"
                        })
                    }), (0, t.jsx)("path", {
                        d: "M3.92187 108.077C3.92187 70.663 3.92187 51.956 11.2031 37.6658C17.6079 25.0957 27.8277 14.8759 40.3977 8.47119C54.688 1.18994 73.395 1.18994 110.809 1.18994L335.677 1.18994C373.091 1.18994 391.798 1.18994 406.088 8.47119C418.659 14.8759 428.878 25.0957 435.283 37.6658C442.564 51.956 442.564 70.663 442.564 108.077V796.241C442.564 833.655 442.564 852.362 435.283 866.652C428.878 879.223 418.659 889.442 406.088 895.847C391.798 903.128 373.091 903.128 335.677 903.128H110.809C73.3949 903.128 54.688 903.128 40.3977 895.847C27.8277 889.442 17.6079 879.223 11.2031 866.652C3.92188 852.362 3.92188 833.655 3.92188 796.241L3.92187 108.077Z",
                        fill: "#1A1B20"
                    }), (0, t.jsx)("mask", {
                        id: "mask5_2222_3549",
                        style: {
                            maskType: "luminance"
                        },
                        maskUnits: "userSpaceOnUse",
                        x: "3",
                        y: "1",
                        width: "440",
                        height: "903",
                        children: (0, t.jsx)("path", {
                            d: "M3.92187 108.077C3.92187 70.663 3.92187 51.956 11.2031 37.6658C17.6079 25.0957 27.8277 14.8759 40.3977 8.47119C54.688 1.18994 73.395 1.18994 110.809 1.18994L335.677 1.18994C373.091 1.18994 391.798 1.18994 406.088 8.47119C418.659 14.8759 428.878 25.0957 435.283 37.6658C442.564 51.956 442.564 70.663 442.564 108.077V796.241C442.564 833.655 442.564 852.362 435.283 866.652C428.878 879.223 418.659 889.442 406.088 895.847C391.798 903.128 373.091 903.128 335.677 903.128H110.809C73.3949 903.128 54.688 903.128 40.3977 895.847C27.8277 889.442 17.6079 879.223 11.2031 866.652C3.92188 852.362 3.92188 833.655 3.92188 796.241L3.92187 108.077Z",
                            fill: "white"
                        })
                    }), (0, t.jsxs)("g", {
                        mask: "url(#mask5_2222_3549)",
                        children: [(0, t.jsx)("path", {
                            d: "M5.77344 109.005C5.77344 71.5908 5.77344 52.8838 13.0547 38.5935C19.4594 26.0235 29.6792 15.8037 42.2493 9.39892C56.5395 2.11768 75.2465 2.11768 112.66 2.11768L332.892 2.11768C370.306 2.11768 389.013 2.11768 403.303 9.39892C415.873 15.8037 426.093 26.0235 432.498 38.5935C439.779 52.8838 439.779 71.5907 439.779 109.005V794.385C439.779 831.799 439.779 850.506 432.498 864.796C426.093 877.366 415.873 887.586 403.303 893.991C389.013 901.272 370.306 901.272 332.892 901.272H112.66C75.2465 901.272 56.5395 901.272 42.2493 893.991C29.6792 887.586 19.4594 877.366 13.0547 864.796C5.77344 850.506 5.77344 831.799 5.77344 794.385V109.005Z",
                            fill: "url(#paint4_linear_2222_3549)"
                        }), (0, t.jsx)("g", {
                            filter: "url(#filter0_i_2222_3549)",
                            children: (0, t.jsx)("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M7.625 107.891C7.625 71.5164 7.625 53.3291 14.704 39.4358C20.9308 27.2149 30.8667 17.279 43.0876 11.0521C56.9809 3.97314 75.1683 3.97314 111.543 3.97314L334.003 3.97314C370.378 3.97314 388.565 3.97314 402.459 11.0521C414.679 17.279 424.615 27.2149 430.842 39.4358C437.921 53.3291 437.921 71.5164 437.921 107.891V795.498C437.921 831.873 437.921 850.06 430.842 863.954C424.615 876.174 414.679 886.11 402.459 892.337C388.565 899.416 370.378 899.416 334.003 899.416H111.543C75.1683 899.416 56.9809 899.416 43.0876 892.337C30.8667 886.11 20.9308 876.174 14.704 863.954C7.625 850.06 7.625 831.873 7.625 795.498V107.891Z",
                                fill: "url(#paint5_linear_2222_3549)"
                            })
                        })]
                    })]
                }), (0, t.jsx)("g", {
                    filter: "url(#filter1_i_2222_3549)",
                    children: (0, t.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M181.047 6.7616L262.655 6.7616L261.858 8.97914C261.725 9.34993 261.374 9.59722 260.98 9.59722H182.581C182.167 9.59722 181.803 9.32469 181.686 8.92766L181.047 6.7616Z",
                        fill: "url(#paint6_linear_2222_3549)"
                    })
                }), (0, t.jsx)("mask", {
                    id: "mask6_2222_3549",
                    style: {
                        maskType: "alpha"
                    },
                    maskUnits: "userSpaceOnUse",
                    x: "181",
                    y: "6",
                    width: "82",
                    height: "4",
                    children: (0, t.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M181.047 6.7616L262.655 6.7616L261.928 9.16068C261.809 9.55444 261.446 9.82373 261.035 9.82373H182.667C182.256 9.82373 181.893 9.55444 181.773 9.16068L181.047 6.7616Z",
                        fill: "url(#paint7_linear_2222_3549)"
                    })
                }), (0, t.jsx)("g", {
                    mask: "url(#mask6_2222_3549)",
                    children: (0, t.jsx)("g", {
                        filter: "url(#filter2_i_2222_3549)",
                        children: (0, t.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M181.047 5.82581L262.655 5.82581L261.727 8.88794H181.974L181.047 5.82581Z",
                            fill: "#1B1B1B"
                        })
                    })
                }), (0, t.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M264.051 29.0309H181.516C172.04 29.0309 164.359 36.7166 164.359 46.1974C164.359 55.6782 172.04 63.3639 181.516 63.3639H264.051C273.526 63.3639 281.207 55.6782 281.207 46.1974C281.207 36.7166 273.526 29.0309 264.051 29.0309Z",
                    fill: "black"
                }), (0, t.jsx)("g", {
                    filter: "url(#filter3_di_2222_3549)",
                    children: (0, t.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M266.401 50.4581C268.755 49.1525 269.606 46.1846 268.301 43.8292C266.996 41.4737 264.03 40.6227 261.676 41.9283C259.322 43.234 258.471 46.2019 259.776 48.5573C261.081 50.9127 264.047 51.7638 266.401 50.4581Z",
                        fill: "url(#paint8_linear_2222_3549)"
                    })
                }), (0, t.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M265.621 49.0402C267.191 48.1697 267.758 46.1911 266.888 44.6208C266.018 43.0505 264.041 42.4832 262.471 43.3536C260.902 44.2241 260.335 46.2026 261.205 47.7729C262.075 49.3432 264.052 49.9106 265.621 49.0402Z",
                    fill: "url(#paint9_linear_2222_3549)"
                }), (0, t.jsx)("mask", {
                    id: "mask7_2222_3549",
                    style: {
                        maskType: "alpha"
                    },
                    maskUnits: "userSpaceOnUse",
                    x: "260",
                    y: "42",
                    width: "8",
                    height: "8",
                    children: (0, t.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M265.621 49.0402C267.191 48.1697 267.758 46.1911 266.888 44.6208C266.018 43.0505 264.041 42.4832 262.471 43.3536C260.902 44.2241 260.335 46.2026 261.205 47.7729C262.075 49.3432 264.052 49.9106 265.621 49.0402Z",
                        fill: "white"
                    })
                }), (0, t.jsx)("g", {
                    mask: "url(#mask7_2222_3549)"
                }), (0, t.jsxs)("defs", {
                    children: [(0, t.jsxs)("filter", {
                        id: "filter0_i_2222_3549",
                        x: "7.625",
                        y: "3.97314",
                        width: "430.297",
                        height: "896.377",
                        filterUnits: "userSpaceOnUse",
                        colorInterpolationFilters: "sRGB",
                        children: [(0, t.jsx)("feFlood", {
                            floodOpacity: "0",
                            result: "BackgroundImageFix"
                        }), (0, t.jsx)("feBlend", {
                            mode: "normal",
                            in: "SourceGraphic",
                            in2: "BackgroundImageFix",
                            result: "shape"
                        }), (0, t.jsx)("feColorMatrix", { in: "SourceAlpha",
                            type: "matrix",
                            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                            result: "hardAlpha"
                        }), (0, t.jsx)("feOffset", {
                            dy: "0.933684"
                        }), (0, t.jsx)("feGaussianBlur", {
                            stdDeviation: "2.80105"
                        }), (0, t.jsx)("feComposite", {
                            in2: "hardAlpha",
                            operator: "arithmetic",
                            k2: "-1",
                            k3: "1"
                        }), (0, t.jsx)("feColorMatrix", {
                            type: "matrix",
                            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
                        }), (0, t.jsx)("feBlend", {
                            mode: "normal",
                            in2: "shape",
                            result: "effect1_innerShadow_2222_3549"
                        })]
                    }), (0, t.jsxs)("filter", {
                        id: "filter1_i_2222_3549",
                        x: "181.047",
                        y: "6.7616",
                        width: "81.6094",
                        height: "4.70294",
                        filterUnits: "userSpaceOnUse",
                        colorInterpolationFilters: "sRGB",
                        children: [(0, t.jsx)("feFlood", {
                            floodOpacity: "0",
                            result: "BackgroundImageFix"
                        }), (0, t.jsx)("feBlend", {
                            mode: "normal",
                            in: "SourceGraphic",
                            in2: "BackgroundImageFix",
                            result: "shape"
                        }), (0, t.jsx)("feColorMatrix", { in: "SourceAlpha",
                            type: "matrix",
                            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                            result: "hardAlpha"
                        }), (0, t.jsx)("feOffset", {
                            dy: "1.86737"
                        }), (0, t.jsx)("feGaussianBlur", {
                            stdDeviation: "1.40053"
                        }), (0, t.jsx)("feComposite", {
                            in2: "hardAlpha",
                            operator: "arithmetic",
                            k2: "-1",
                            k3: "1"
                        }), (0, t.jsx)("feColorMatrix", {
                            type: "matrix",
                            values: "0 0 0 0 0.0514606 0 0 0 0 0.0514606 0 0 0 0 0.0514606 0 0 0 0.5 0"
                        }), (0, t.jsx)("feBlend", {
                            mode: "normal",
                            in2: "shape",
                            result: "effect1_innerShadow_2222_3549"
                        })]
                    }), (0, t.jsxs)("filter", {
                        id: "filter2_i_2222_3549",
                        x: "181.047",
                        y: "5.82581",
                        width: "81.6094",
                        height: "4.9295",
                        filterUnits: "userSpaceOnUse",
                        colorInterpolationFilters: "sRGB",
                        children: [(0, t.jsx)("feFlood", {
                            floodOpacity: "0",
                            result: "BackgroundImageFix"
                        }), (0, t.jsx)("feBlend", {
                            mode: "normal",
                            in: "SourceGraphic",
                            in2: "BackgroundImageFix",
                            result: "shape"
                        }), (0, t.jsx)("feColorMatrix", { in: "SourceAlpha",
                            type: "matrix",
                            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                            result: "hardAlpha"
                        }), (0, t.jsx)("feOffset", {
                            dy: "1.86737"
                        }), (0, t.jsx)("feGaussianBlur", {
                            stdDeviation: "1.40053"
                        }), (0, t.jsx)("feComposite", {
                            in2: "hardAlpha",
                            operator: "arithmetic",
                            k2: "-1",
                            k3: "1"
                        }), (0, t.jsx)("feColorMatrix", {
                            type: "matrix",
                            values: "0 0 0 0 0.0514606 0 0 0 0 0.0514606 0 0 0 0 0.0514606 0 0 0 0.5 0"
                        }), (0, t.jsx)("feBlend", {
                            mode: "normal",
                            in2: "shape",
                            result: "effect1_innerShadow_2222_3549"
                        })]
                    }), (0, t.jsxs)("filter", {
                        id: "filter3_di_2222_3549",
                        x: "259.164",
                        y: "41.316",
                        width: "9.75",
                        height: "10.6881",
                        filterUnits: "userSpaceOnUse",
                        colorInterpolationFilters: "sRGB",
                        children: [(0, t.jsx)("feFlood", {
                            floodOpacity: "0",
                            result: "BackgroundImageFix"
                        }), (0, t.jsx)("feColorMatrix", { in: "SourceAlpha",
                            type: "matrix",
                            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                            result: "hardAlpha"
                        }), (0, t.jsx)("feOffset", {}), (0, t.jsx)("feColorMatrix", {
                            type: "matrix",
                            values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.0762948 0"
                        }), (0, t.jsx)("feBlend", {
                            mode: "normal",
                            in2: "BackgroundImageFix",
                            result: "effect1_dropShadow_2222_3549"
                        }), (0, t.jsx)("feBlend", {
                            mode: "normal",
                            in: "SourceGraphic",
                            in2: "effect1_dropShadow_2222_3549",
                            result: "shape"
                        }), (0, t.jsx)("feColorMatrix", { in: "SourceAlpha",
                            type: "matrix",
                            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                            result: "hardAlpha"
                        }), (0, t.jsx)("feOffset", {
                            dy: "0.933684"
                        }), (0, t.jsx)("feGaussianBlur", {
                            stdDeviation: "0.466842"
                        }), (0, t.jsx)("feComposite", {
                            in2: "hardAlpha",
                            operator: "arithmetic",
                            k2: "-1",
                            k3: "1"
                        }), (0, t.jsx)("feColorMatrix", {
                            type: "matrix",
                            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.197945 0"
                        }), (0, t.jsx)("feBlend", {
                            mode: "normal",
                            in2: "shape",
                            result: "effect2_innerShadow_2222_3549"
                        })]
                    }), (0, t.jsxs)("linearGradient", {
                        id: "paint0_linear_2222_3549",
                        x1: "441.727",
                        y1: "266.803",
                        x2: "437.676",
                        y2: "361.635",
                        gradientUnits: "userSpaceOnUse",
                        children: [(0, t.jsx)("stop", {
                            stopColor: "#292929"
                        }), (0, t.jsx)("stop", {
                            offset: "0.0907565",
                            stopColor: "#444545"
                        }), (0, t.jsx)("stop", {
                            offset: "0.902379",
                            stopColor: "#424344"
                        }), (0, t.jsx)("stop", {
                            offset: "1",
                            stopColor: "#1E1E1E"
                        })]
                    }), (0, t.jsxs)("linearGradient", {
                        id: "paint1_linear_2222_3549",
                        x1: "1.14062",
                        y1: "302.141",
                        x2: "-0.462685",
                        y2: "361.797",
                        gradientUnits: "userSpaceOnUse",
                        children: [(0, t.jsx)("stop", {
                            stopColor: "#292929"
                        }), (0, t.jsx)("stop", {
                            offset: "0.0907565",
                            stopColor: "#444545"
                        }), (0, t.jsx)("stop", {
                            offset: "0.902379",
                            stopColor: "#424344"
                        }), (0, t.jsx)("stop", {
                            offset: "1",
                            stopColor: "#1E1E1E"
                        })]
                    }), (0, t.jsxs)("linearGradient", {
                        id: "paint2_linear_2222_3549",
                        x1: "1.14062",
                        y1: "221.406",
                        x2: "-0.462685",
                        y2: "281.063",
                        gradientUnits: "userSpaceOnUse",
                        children: [(0, t.jsx)("stop", {
                            stopColor: "#292929"
                        }), (0, t.jsx)("stop", {
                            offset: "0.0907565",
                            stopColor: "#444545"
                        }), (0, t.jsx)("stop", {
                            offset: "0.902379",
                            stopColor: "#424344"
                        }), (0, t.jsx)("stop", {
                            offset: "1",
                            stopColor: "#1E1E1E"
                        })]
                    }), (0, t.jsxs)("linearGradient", {
                        id: "paint3_linear_2222_3549",
                        x1: "1.14062",
                        y1: "161.319",
                        x2: "0.715567",
                        y2: "192.044",
                        gradientUnits: "userSpaceOnUse",
                        children: [(0, t.jsx)("stop", {
                            stopColor: "#292929"
                        }), (0, t.jsx)("stop", {
                            offset: "0.0907565",
                            stopColor: "#444545"
                        }), (0, t.jsx)("stop", {
                            offset: "0.902379",
                            stopColor: "#424344"
                        }), (0, t.jsx)("stop", {
                            offset: "1",
                            stopColor: "#1E1E1E"
                        })]
                    }), (0, t.jsxs)("linearGradient", {
                        id: "paint4_linear_2222_3549",
                        x1: "222.776",
                        y1: "2.11768",
                        x2: "222.776",
                        y2: "901.272",
                        gradientUnits: "userSpaceOnUse",
                        children: [(0, t.jsx)("stop", {
                            stopColor: "white"
                        }), (0, t.jsx)("stop", {
                            offset: "0.0360569"
                        }), (0, t.jsx)("stop", {
                            offset: "0.281688",
                            stopColor: "#373737"
                        })]
                    }), (0, t.jsxs)("linearGradient", {
                        id: "paint5_linear_2222_3549",
                        x1: "222.773",
                        y1: "3.97314",
                        x2: "222.773",
                        y2: "899.416",
                        gradientUnits: "userSpaceOnUse",
                        children: [(0, t.jsx)("stop", {
                            stopColor: "#0D0D0D"
                        }), (0, t.jsx)("stop", {
                            offset: "1",
                            stopColor: "#0A0A0A"
                        })]
                    }), (0, t.jsxs)("linearGradient", {
                        id: "paint6_linear_2222_3549",
                        x1: "181.34",
                        y1: "10.5309",
                        x2: "263.037",
                        y2: "9.59722",
                        gradientUnits: "userSpaceOnUse",
                        children: [(0, t.jsx)("stop", {
                            stopColor: "#161616"
                        }), (0, t.jsx)("stop", {
                            offset: "0.0506597",
                            stopColor: "#383838"
                        }), (0, t.jsx)("stop", {
                            offset: "0.972459",
                            stopColor: "#343434"
                        }), (0, t.jsx)("stop", {
                            offset: "1",
                            stopColor: "#161616"
                        })]
                    }), (0, t.jsxs)("linearGradient", {
                        id: "paint7_linear_2222_3549",
                        x1: "181.34",
                        y1: "10.5309",
                        x2: "263.037",
                        y2: "9.59722",
                        gradientUnits: "userSpaceOnUse",
                        children: [(0, t.jsx)("stop", {
                            stopColor: "#161616"
                        }), (0, t.jsx)("stop", {
                            offset: "0.0506597",
                            stopColor: "#383838"
                        }), (0, t.jsx)("stop", {
                            offset: "0.972459",
                            stopColor: "#343434"
                        }), (0, t.jsx)("stop", {
                            offset: "1",
                            stopColor: "#161616"
                        })]
                    }), (0, t.jsxs)("linearGradient", {
                        id: "paint8_linear_2222_3549",
                        x1: "259.164",
                        y1: "41.316",
                        x2: "259.164",
                        y2: "51.0704",
                        gradientUnits: "userSpaceOnUse",
                        children: [(0, t.jsx)("stop", {}), (0, t.jsx)("stop", {
                            offset: "1",
                            stopColor: "#2F2F2F"
                        })]
                    }), (0, t.jsxs)("linearGradient", {
                        id: "paint9_linear_2222_3549",
                        x1: "260.797",
                        y1: "42.9454",
                        x2: "260.797",
                        y2: "49.4483",
                        gradientUnits: "userSpaceOnUse",
                        children: [(0, t.jsx)("stop", {
                            stopColor: "#313131"
                        }), (0, t.jsx)("stop", {
                            offset: "1",
                            stopColor: "#151515"
                        })]
                    })]
                })]
            })]
        })
    }

    function ed({
        section: e,
        isReversed: i
    }) {
        let a = (0, s.useRef)(null),
            n = (0, s.useRef)(null),
            [r, l] = (0, s.useState)(!1),
            [o, d] = (0, s.useState)(!1),
            [c, p] = (0, s.useState)(!1),
            [m, g] = (0, s.useState)(!1);
        return (0, s.useEffect)(() => {
            let e = new IntersectionObserver(([e]) => {
                    let t = e.isIntersecting;
                    if (d(t), a.current)
                        if (t) {
                            if (c || (a.current.load(), p(!0)), !m) {
                                let e = a.current.play();
                                void 0 !== e && e.then(() => {
                                    l(!0)
                                }).catch(() => {
                                    l(!1)
                                })
                            }
                        } else a.current.pause(), l(!1)
                }, {
                    threshold: .3,
                    rootMargin: "100px"
                }),
                t = () => {
                    l(!1), g(!0)
                },
                i = n.current,
                r = a.current;
            return i && e.observe(i), r && r.addEventListener("ended", t), () => {
                i && e.unobserve(i), e.disconnect(), r && r.removeEventListener("ended", t)
            }
        }, [c, o, m]), (0, t.jsxs)(eh, {
            ref: n,
            $isReversed: i,
            $bgColor: e.backgroundColor,
            children: [(0, t.jsx)("div", {
                className: "bg-gradient"
            }), (0, t.jsxs)(h.Container, {
                className: "container",
                children: [(0, t.jsxs)("div", {
                    className: "content",
                    children: [(0, t.jsxs)("h2", {
                        className: "title",
                        id: e.title.replaceAll(" ", "").toLocaleLowerCase(),
                        children: [(0, t.jsx)("span", {
                            className: "highlight",
                            children: e.title
                        }), " ", (0, t.jsx)("span", {
                            className: "subtitle",
                            children: e.subtitle
                        })]
                    }), e.ctaText ? (0, t.jsx)(t.Fragment, {
                        children: "ctaHref" in e ? (0, t.jsx)("a", {
                            href: e.ctaHref,
                            className: "cta",
                            "aria-label": e.ctaText,
                            children: e.ctaText
                        }) : (0, t.jsx)("button", {
                            onClick: e.onClick,
                            className: "cta",
                            "aria-label": e.ctaText,
                            type: "button",
                            children: e.ctaText
                        })
                    }) : null]
                }), (0, t.jsx)("div", {
                    className: "phone-container",
                    "aria-labelledby": e.title,
                    role: "region",
                    children: (0, t.jsx)(es, {
                        videoSrc: e.videoSrc,
                        videoRef: a,
                        title: e.title
                    })
                })]
            }), (0, t.jsx)(eo, {
                isPlaying: r,
                onClick: () => {
                    a.current && (r ? (a.current.pause(), l(!1)) : (m && (a.current.currentTime = 0), a.current.play(), l(!0)))
                }
            })]
        })
    }
    let ec = d.default.div.withConfig({
        displayName: "VideoSectionsWithPhone__VideoSectionsContainer",
        componentId: "sc-17ec5b8b-0"
    })
    `
  background: #000;
  color: white;
`, eh = d.default.section.withConfig({
        displayName: "VideoSectionsWithPhone__Section",
        componentId: "sc-17ec5b8b-1"
    })
    `
  /* ${m} */
  min-height: 100vh;
  min-height: 100svh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  background: ${({$bgColor:e})=>e};

  @media (min-width: ${({theme:e})=>e.globalV2.lg.minWidth}) {
    align-items: center;
  }

  .bg-gradient {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    overflow: hidden;

    &::before,
    &::after {
      content: '';
      position: absolute;
      border-radius: 50%;
      will-change: transform;
      backface-visibility: hidden;
      -webkit-backface-visibility: hidden;
    }

    &::before {
      width: 150%;
      height: 100%;
      top: -50%;
      left: 50%;
      background: radial-gradient(
        ellipse 70% 50% at center,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 0.98) 15%,
        rgba(0, 0, 0, 0.95) 30%,
        rgba(0, 0, 0, 0.9) 45%,
        rgba(0, 0, 0, 0.8) 60%,
        rgba(0, 0, 0, 0.6) 70%,
        rgba(0, 0, 0, 0.4) 80%,
        rgba(0, 0, 0, 0.2) 85%,
        rgba(0, 0, 0, 0.1) 90%,
        transparent 95%
      );
      filter: blur(16px);
      -webkit-filter: blur(16px);
      transform: translateX(-50%) rotate(-8deg) translateZ(0);
      -webkit-transform: translateX(-50%) rotate(-8deg) translateZ(0);

      @media not all and (min-resolution: 0.001dpcm) {
        @supports (-webkit-appearance: none) {
          filter: blur(12px);
          -webkit-filter: blur(12px);
        }
      }
    }

    &::after {
      width: 200%;
      height: 60%;
      bottom: -30%;
      left: -20%;
      background: radial-gradient(
        ellipse 60% 40% at center,
        rgba(255, 255, 255, 1) 0%,
        rgba(255, 255, 255, 0.95) 20%,
        rgba(255, 255, 255, 0.9) 35%,
        rgba(255, 255, 255, 0.8) 50%,
        rgba(255, 255, 255, 0.65) 60%,
        rgba(255, 255, 255, 0.5) 70%,
        rgba(255, 255, 255, 0.35) 80%,
        rgba(255, 255, 255, 0.2) 85%,
        rgba(255, 255, 255, 0.1) 90%,
        transparent 95%
      );
      filter: blur(16px);
      -webkit-filter: blur(16px);
      transform: rotate(-4deg) translateZ(0);
      -webkit-transform: rotate(-4deg) translateZ(0);

      @media not all and (min-resolution: 0.001dpcm) {
        @supports (-webkit-appearance: none) {
          filter: blur(12px);
          -webkit-filter: blur(12px);
        }
      }
    }
  }

  & .container {
    position: relative;
    z-index: 2;
    display: grid;
    grid-template-columns: 1fr;
    gap: 4rem;
    align-items: center;
    height: 100vh;
    height: 100lvh;

    @media (min-width: ${({theme:e})=>e.globalV2.lg.minWidth}) {
      height: unset;
      grid-template-columns: 1fr 1fr;
      gap: 6rem;
      ${({$isReversed:e})=>e&&` &
    .content {
        order: 2;
    }
    .phone - container {
        order: 1;
    }
    `}
    }
  }

  & .content {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    text-align: center;

    @media (min-width: ${({theme:e})=>e.globalV2.lg.minWidth}) {
      text-align: left;
    }
  }

  & .title {
    font-size: 2.8rem;
    font-weight: 400;
    line-height: 1.1;
    letter-spacing: -1.44px;
    margin: 0;
    text-align: center;

    @media (min-width: ${({theme:e})=>e.globalV2.lg.minWidth}) {
      font-size: 3.2rem;
      text-align: left;
    }

    .highlight {
      color: white;
    }

    .subtitle {
      color: rgba(255, 255, 255, 0.4);
    }
  }

  .cta {
    align-self: center;
    background: white;
    color: black;
    padding: 10px 24px;
    border-radius: 40px;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 500;
    transition: all 0.3s ease;
    border: none;

    @media (min-width: ${({theme:e})=>e.globalV2.lg.minWidth}) {
      align-self: flex-start;
    }

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(255, 255, 255, 0.2);
    }
  }

  .phone-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    max-height: 80vh;
    padding: 2rem 0;
  }

  .phone-svg-container {
    position: absolute;
    width: 300px;
    height: auto;

    transform: translateY(5vh);

    @media (min-width: ${({theme:e})=>e.globalV2.md.minWidth}) {
      transform: translateY(20%);
      width: 350px;
    }

    @media (min-width: ${({theme:e})=>e.globalV2.md.minWidth}) {
      transform: translateY(20%);
      width: 350px;
    }

    @media (min-width: ${({theme:e})=>e.globalV2.xl.minWidth}) {
      // width: 350px;
      width: 400px;
    }

    @media (min-width: ${({theme:e})=>e.globalV2.xxl.minWidth}) {
      // width: 350px;
      width: 450px;
    }

    @media (min-width: ${({theme:e})=>e.globalV2.xxxl.minWidth}) {
      // width: 350px;
      transform: unset;
      width: 600px;
    }

    svg {
      width: 100%;
      height: auto;
      filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.3));
    }

    .video-overlay {
      position: absolute;
      top: 1.55%;
      left: 4.04%;
      width: 91.69%;
      height: 96.9%;
      border-radius: 32px;
      overflow: hidden;
      background: #000000;
    }
  }

  .play-pause-container {
    position: absolute;
    bottom: 16px;
    left: 16px;
    z-index: 4;
    cursor: pointer;
    border: none;
    background: none;
    padding: 0;

    .play-pause-bg {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      -webkit-backdrop-filter: blur(10px);
      backdrop-filter: blur(10px);
      background: rgba(255, 255, 255, 0.2);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;

      &:hover {
        transform: scale(1.1);
      }
    }

    .play-pause-icon {
      color: white;
      font-size: 16px;
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        width: 2.4rem;
        height: auto;
      }
    }
  }
`, ep = (0, d.default)(({
        className: e,
        sections: i
    }) => (0, t.jsx)(ec, {
        className: e,
        children: i.map((e, i) => (0, t.jsx)(ed, {
            section: e,
            isReversed: i % 2 == 0
        }, e.id))
    })).withConfig({
        displayName: "VideoSectionsWithPhone",
        componentId: "sc-17ec5b8b-2"
    })
    ``, em = d.default.section.withConfig({
        displayName: "VioBanner__VioBannerContainer",
        componentId: "sc-8268836-0"
    })
    `
  ${m}
  background: #000000;
  position: relative;

  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`, eg = d.default.div.withConfig({
        displayName: "VioBanner__BlurredGradient",
        componentId: "sc-8268836-1"
    })
    `
  background: radial-gradient(
    289.72% 694.37% at 49.94% 593.98%,
    rgba(175, 112, 255, 0.72) 74.07%,
    #532b40 76.29%,
    #0a0a0a 78.9%
  );
  filter: blur(40.81784439086914px);

  position: absolute !important;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  // TODO: try the gradient position animation
  // animation: ${d.keyframes`
  //   0% {
  //     background-position: 0% 0%;
  //   }
  //   100% {
  //     background-position: 100% 50%;
  //   }
  // `} 1s ease-in-out infinite;
`, eu = d.default.div.withConfig({
        displayName: "VioBanner__BannerContent",
        componentId: "sc-8268836-2"
    })
    `
  position: relative;
  background: #000000;
  border-radius: 3.2rem;
  padding: 4rem 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;

  max-width: 900px;
  margin: 0 auto;

  @media (min-width: ${({theme:e})=>e.globalV2.lg.minWidth}) {
    padding: 6rem 12rem;
  }

  * {
    position: relative;
  }
`, ex = d.default.p.withConfig({
        displayName: "VioBanner__PoweredByText",
        componentId: "sc-8268836-3"
    })
    `
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 0.137rem;
  text-transform: uppercase;
  color: #ffffff;
  margin: 0 0 5.2rem 0;

  @media (min-width: ${({theme:e})=>e.globalV2.lg.minWidth}) {
    margin-bottom: 8rem;
  }
`, ef = d.default.div.withConfig({
        displayName: "VioBanner__LogoWrapper",
        componentId: "sc-8268836-4"
    })
    `
  display: flex;
  justify-content: center;
  margin-bottom: 2.4rem;

  @media (min-width: ${({theme:e})=>e.globalV2.lg.minWidth}) {
    margin-bottom: 2.4rem;
  }
`, eb = (0, d.default)(F.CustomImage).withConfig({
        displayName: "VioBanner__VioLogo",
        componentId: "sc-8268836-5"
    })
    `
  width: 20rem !important;
  // height: 5.7rem !important;
  height: auto;
  object-fit: contain;

  @media (min-width: ${({theme:e})=>e.globalV2.lg.minWidth}) {
    width: 24rem !important;
    // height: 7.5rem !important;
  }
`, ew = d.default.p.withConfig({
        displayName: "VioBanner__DescriptionText",
        componentId: "sc-8268836-6"
    })
    `
  font-size: 1.6rem;
  line-height: 1.2;
  letter-spacing: -0.024rem;
  color: rgba(255, 255, 255, 0.6);
  max-width: 80rem;
  margin: 0 auto;
  line-height: 120%;

  @media (min-width: ${({theme:e})=>e.globalV2.lg.minWidth}) {
    font-size: 2.4rem;
    letter-spacing: -0.08rem;
  }
`, ey = () => (0, t.jsx)(em, {
        children: (0, t.jsx)(h.Container, {
            children: (0, t.jsxs)(eu, {
                children: [(0, t.jsx)(eg, {}), (0, t.jsx)(ef, {
                    children: (0, t.jsx)(eb, {
                        src: "web_v2/womens-health/vio/ovusense-logo-1.png",
                        alt: "viO HealthTech Logo",
                        width: 100,
                        height: 60
                    })
                }), (0, t.jsx)(ex, {
                    children: "powered by OvuSense™ technology"
                }), (0, t.jsx)(ew, {
                    children: "OvuSense™ is a clinically proven fertility tracking technology, CE and UKCA certified as a Class IIa medical device, and FDA registered in the US. Trusted by women in over 40 countries, it’s trained on more than 260,000 real-world cycles to deliver medical-grade accuracy in predicting and confirming ovulation, even for irregular cycles, PCOS, or endometriosis."
                })]
            })
        })
    });
    var ev = e.i(46737),
        eC = e.i(85353),
        e_ = e.i(57232);
    let ej = [{
            key: "others",
            name: "Others"
        }],
        ek = d.default.div.withConfig({
            displayName: "CnOComparison__HeadSection",
            componentId: "sc-a07e6b1-0"
        })
    `
  margin-bottom: 0;
  padding: 2rem 0 1rem 0;
  background: rgba(238, 238, 238, 1);

  @media (min-width: ${({theme:e})=>e.globalV2.md.minWidth}) {
    padding: 3rem 0 2rem 0;
    text-align: center;
  }

  h2 {
    ${b}
    color: #000;
    font-weight: 400;
    line-height: 120%; /* 48px */
    text-align: left;
    margin-bottom: 1rem;

    @media (min-width: ${({theme:e})=>e.globalV2.md.minWidth}) {
      margin-bottom: unset;
      color: #000;
      margin: auto;
      text-align: center;
      // font-size: 40px;
      font-style: normal;
      letter-spacing: -1.6px;
    }
  }

  p {
    margin: 0 auto;
    max-width: 60ch;
    color: rgba(0, 0, 0, 0.6);
    line-height: 130%;

    @media (min-width: ${({theme:e})=>e.globalV2.md.minWidth}) {
      text-align: center;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 140%; /* 22.4px */
      letter-spacing: -0.16px;
    }
  }
`, eS = d.default.div.withConfig({
        displayName: "CnOComparison__StickyTableHeader",
        componentId: "sc-a07e6b1-1"
    })
    `
  position: sticky;
  top: 0;
  z-index: 9;
  display: grid;
  grid-template-columns: 280px 1fr 1fr;
  overflow-x: auto;
  background: rgba(238, 238, 238, 1);

  @media (min-width: ${({theme:e})=>e.globalV2.md.minWidth}) {
    top: 0;
  }

  @media (max-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    display: none;
  }

  .header-cell {
    padding: 1.5rem 1rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    text-align: center;
    font-weight: 500;
    font-size: 1.9rem;
    color: white;
    position: relative;

    @media (min-width: ${({theme:e})=>e.globalV2.md.minWidth}) {
      padding: 4rem 1rem;
      color: #000;
      text-align: center;
      font-size: 1.9rem;
      font-style: 400;
      line-height: 140%; /* 19.6px */
      letter-spacing: -0.14px;
    }
  }

  .feature-header {
    text-align: left;
    position: sticky;
    left: 0;
  }

  .ultrahuman-header {
    position: sticky;
    left: 280px;
  }

  .chevron-button {
    position: absolute;
    right: 0.8rem;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.1);
    border: none;
    color: #000;
    padding: 0.5rem;
    border-radius: 50%;
    cursor: pointer;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background: rgba(255, 255, 255, 0.2);
    }

    svg {
      width: 1.4rem;
      height: 1.4rem;
    }
  }
`, eN = d.default.div.withConfig({
        displayName: "CnOComparison__TableContainer",
        componentId: "sc-a07e6b1-2"
    })
    `
  overflow-x: auto;
  position: relative;

  @media (max-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    display: none;
  }
`, eP = d.default.table.withConfig({
        displayName: "CnOComparison__Table",
        componentId: "sc-a07e6b1-3"
    })
    `
  width: 100%;
  border-collapse: collapse;
  //   background: #000;
  color: #000;
  table-layout: fixed;

  tr {
    width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  th,
  td {
    padding: 2.5rem 1rem;
    // border: 1px solid #333;
    text-align: center;
    vertical-align: middle;
  }

  thead {
    display: none;
  }

  th {
    background: #111;
    font-weight: 600;
    font-size: 1.4rem;
  }

  td {
    font-size: 1.4rem;

    @media (min-width: ${({theme:e})=>e.globalV2.md.minWidth}) {
      font-style: normal;
      font-weight: 500;
      line-height: 140%; /* 19.6px */
      letter-spacing: -0.14px;
    }

    .feature-value {
      @media (min-width: ${({theme:e})=>e.globalV2.md.minWidth}) {
        color: #000;
        text-align: center;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 140%; /* 19.6px */
        letter-spacing: -0.14px;
      }
    }
  }

  .feature-col,
  .ultrahuman-col {
    position: sticky;
    left: 0;
    // background: #000;
    z-index: 3;
  }

  .feature-col {
    left: 0;
    text-align: left;
    font-weight: 500;
    width: 280px;
  }

  .ultrahuman-col {
    left: 280px;
    // background: #1a1a1a;
    font-weight: 500;
    width: calc((100% - 280px) / 2);
  }

  td:nth-child(3) {
    width: calc((100% - 280px) / 2);
  }

  .checkmark {
    color: #000;
    font-size: 1.6rem;
  }

  .cross {
    color: #000;
    font-size: 1.6rem;
  }
`, eI = d.default.div.withConfig({
        displayName: "CnOComparison__MobileStickyHeader",
        componentId: "sc-a07e6b1-4"
    })
    `
  position: sticky;
  top: 0;
  z-index: 9;
  display: none;
  grid-template-columns: 1fr 90px 90px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background: rgba(238, 238, 238, 1);

  @media (max-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    display: grid;
  }

  .header-cell {
    padding: 2.5rem 1rem;
    text-align: center;
    font-weight: 500;
    font-size: 1.7rem;
    color: #000;
    line-height: 30px;
    white-space: nowrap;
  }

  .dropdown-header {
    position: relative;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    select {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      cursor: pointer;
      font-size: 1.4rem;
    }

    .dropdown-text {
      pointer-events: none;
    }

    .dropdown-arrow {
      pointer-events: none;
      width: 1.2rem;
      height: 1.2rem;
    }
  }
`, e$ = d.default.div.withConfig({
        displayName: "CnOComparison__MobileContainer",
        componentId: "sc-a07e6b1-5"
    })
    `
  display: none;

  @media (max-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    display: block;
  }
`, eV = d.default.table.withConfig({
        displayName: "CnOComparison__MobileTable",
        componentId: "sc-a07e6b1-6"
    })
    `
  width: 100%;
  border-collapse: collapse;
  color: #000;
  table-layout: fixed;

  th,
  td {
    padding: 2rem 1rem;
    text-align: center;
    vertical-align: middle;
  }

  td:nth-child(2),
  td:nth-child(3) {
    width: 90px;
  }

  thead {
    display: none;
  }

  th {
    font-weight: 600;
    font-size: 1.4rem;
  }

  td {
    font-size: 1.4rem;
  }

  .feature-row {
    td:first-child {
      text-align: left;
      font-weight: 500;
      display: flex;
      flex-direction: column;
    }
  }

  tr {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  .checkmark {
    color: #00ff88;
    font-size: 1.6rem;
  }

  .cross {
    color: #ff4444;
    font-size: 1.6rem;
  }
`, eO = (0, d.default)(({
        className: e
    }) => {
        let i = (0, ev.useGlobalUI)(),
            {
                getValue: a,
                isCnOPlus: n
            } = (0, j.useIsCnOPlus)(),
            r = (e, i) => "boolean" == typeof e ? e ? (0, t.jsx)("div", {
                className: "img-container",
                children: (0, t.jsx)(eC.NewCheckmark, {
                    fill: i ? "#235eff" : "black",
                    className: "check-mark"
                })
            }) : (0, t.jsx)("div", {
                className: "img-container",
                children: (0, t.jsx)(F.CustomImage, {
                    src: "web_v2/ring-buy/comparison/crossmark_new.svg",
                    width: 20,
                    height: 20,
                    alt: "cross-icon",
                    className: "cross-icon"
                })
            }) : "string" == typeof e ? (0, t.jsx)("span", {
                className: "feature-value",
                children: e
            }) : e,
            l = (0, s.useMemo)(() => [{
                name: a("Period prediction", "Period prediction"),
                ultrahuman: !0,
                others: !0
            }, {
                name: a("Ovulation day prediction", "Ovulation phase estimation"),
                ultrahuman: !0,
                others: !0
            }, {
                name: a("Ovulation confirmation with over 90% accuracy", "Ovulation pattern estimation with 90%+ consistency"),
                ultrahuman: !0,
                others: !1,
                pro: !0
            }, {
                name: a("Anovulatory cycle detection", "Estimates possible non-ovulatory cycles"),
                ultrahuman: !0,
                others: !1,
                pro: !0
            }, {
                name: a("Support for irregular and diverse cycles", "Support for irregular and diverse cycles"),
                ultrahuman: !0,
                others: !1,
                pro: !0
            }, {
                name: a("Proprietary Cycle Flags™", "Cycle Flags, highlighting unique cycle patterns"),
                ultrahuman: !0,
                others: !1,
                pro: !0
            }, {
                name: a("Predictions for your next 12 cycles", "Estimated your next 12 cycles"),
                ultrahuman: !0,
                others: !1,
                pro: !0
            }, ...n ? [] : [{
                name: "Global medical standards",
                ultrahuman: !0,
                others: !1,
                pro: !0
            }], {
                name: a("HSA/FSA eligibility", "HSA/FSA eligibility"),
                ultrahuman: !0,
                others: !1,
                pro: !0
            }], [a, n]),
            {
                width: o
            } = (0, e_.useWindowSize)(),
            d = (0, s.useMemo)(() => o < 768, [o]);
        return (0, t.jsx)("section", {
            className: e,
            children: (0, t.jsxs)(h.Container, {
                children: [(0, t.jsxs)(ek, {
                    children: [(0, t.jsx)("h2", {
                        children: "How we compare"
                    }), (0, t.jsx)(y, {
                        children: a("See how Cycle and Ovulation Pro compare with other traditional trackers in the market.", "See how Cycle and Ovulation Plus compare with other traditional trackers in the market.")
                    })]
                }), (0, t.jsxs)(eS, {
                    style: {
                        top: `${i.headerVisible?i.headerHeight:0}px`
                    },
                    children: [(0, t.jsx)("div", {
                        className: "header-cell feature-header"
                    }), (0, t.jsx)("div", {
                        className: "header-cell ultrahuman-header",
                        children: a("Cycle & Ovulation Pro", "Cycle & Ovulation Plus")
                    }), ej.map(e => (0, t.jsx)("div", {
                        className: "header-cell",
                        children: e.name
                    }, e.key))]
                }), (0, t.jsx)(eN, {
                    children: (0, t.jsxs)(eP, {
                        children: [(0, t.jsx)("thead", {
                            children: (0, t.jsxs)("tr", {
                                children: [(0, t.jsx)("th", {
                                    className: "feature-col"
                                }), (0, t.jsx)("th", {
                                    className: "ultrahuman-col",
                                    children: a("Cycle & Ovulation Pro", "Cycle & Ovulation Plus")
                                }), ej.map(e => (0, t.jsx)("th", {
                                    children: e.name
                                }, e.key))]
                            })
                        }), (0, t.jsx)("tbody", {
                            children: l.map((e, i) => (0, t.jsxs)("tr", {
                                children: [(0, t.jsxs)("td", {
                                    className: "feature-col",
                                    children: [e.pro ? (0, t.jsxs)(t.Fragment, {
                                        children: [(0, t.jsx)("span", {
                                            className: "pro",
                                            children: a("pro exclusive", "plus exclusive")
                                        }), " ", (0, t.jsx)("br", {})]
                                    }) : null, e.name]
                                }), (0, t.jsx)("td", {
                                    className: "ultrahuman-col",
                                    children: r(e.ultrahuman, !0)
                                }), ej.map(i => (0, t.jsx)("td", {
                                    children: r(e[i.key])
                                }, i.key))]
                            }, i))
                        })]
                    })
                }), (0, t.jsxs)(eI, {
                    style: {
                        top: `${i.headerVisible?i.headerHeight:0}px`
                    },
                    children: [(0, t.jsx)("div", {
                        className: "header-cell",
                        style: {
                            textAlign: "left"
                        }
                    }), (0, t.jsxs)("div", {
                        className: "header-cell",
                        children: ["C&O", " ", (0, t.jsx)(F.CustomImage, {
                            src: a("web_v2/womens-health/hero/pro.png", "web_v2/womens-health/plus/misc/Plus.png"),
                            alt: "pro",
                            height: 17,
                            width: 30,
                            style: {
                                display: "inline-block",
                                verticalAlign: "middle"
                            }
                        })]
                    }), (0, t.jsx)("div", {
                        className: "header-cell",
                        children: "Others"
                    })]
                }), (0, t.jsx)(e$, {
                    children: (0, t.jsxs)(eV, {
                        children: [(0, t.jsx)("thead", {
                            children: (0, t.jsxs)("tr", {
                                children: [(0, t.jsx)("th", {}), (0, t.jsxs)("th", {
                                    children: ["C&O", " ", (0, t.jsx)(F.CustomImage, {
                                        src: "web_v2/womens-health/hero/pro.png",
                                        alt: "pro",
                                        height: d ? 18 : 48,
                                        width: d ? 33 : 84,
                                        style: {
                                            display: "inline-block",
                                            verticalAlign: d ? "super" : "middle"
                                        }
                                    })]
                                }), (0, t.jsx)("th", {
                                    children: "Others"
                                })]
                            })
                        }), (0, t.jsx)("tbody", {
                            children: l.map((e, i) => (0, t.jsxs)("tr", {
                                className: "feature-row",
                                children: [(0, t.jsxs)("td", {
                                    children: [e.pro ? (0, t.jsxs)(t.Fragment, {
                                        children: [(0, t.jsx)("span", {
                                            className: "pro",
                                            children: a("pro exclusive", "plus exclusive")
                                        }), " ", (0, t.jsx)("br", {})]
                                    }) : null, e.name]
                                }), (0, t.jsx)("td", {
                                    children: r(e.ultrahuman, !0)
                                }), (0, t.jsx)("td", {
                                    children: r(e.others)
                                })]
                            }, i))
                        })]
                    })
                })]
            })
        })
    }).withConfig({
        displayName: "CnOComparison",
        componentId: "sc-a07e6b1-7"
    })
    `
  ${m}
  background: rgba(238, 238, 238, 1);
  color: white;
  position: relative;

  .pro {
    color: #4e77ff;
    font-size: 11px;
    font-weight: 600;
    line-height: 140%; /* 15.4px */
    letter-spacing: -0.22px;
    text-transform: uppercase;
  }

  .check-mark {
    width: 20px;
    height: 20px;
  }
`;
    var eA = e.i(57134);
    let eW = d.default.div.withConfig({
        displayName: "Card__CardContainer",
        componentId: "sc-5d4a0648-0"
    })
    `
  --background-color: #f5f5f5;
  --text-primary-color: black;
  --text-secondary-color: rgba(0, 0, 0, 0.6);
  --text-inverted: white;

  position: relative;
  display: flex;
  flex-direction: column;
  text-align: left;
  overflow: hidden;
  width: 350px;
  height: 470px;
  border-radius: 32px;
  background-color: var(--background-color);
  color: var(--text-primary-color);
  padding: 24px;
  transition: transform 0.3s ease;
  justify-content: space-between;

  &:hover {
    transform: scale(1.05);
  }

  &.dark {
    --background-color: black;
    --text-primary-color: white;
    --text-secondary-color: rgba(255, 255, 255, 0.6);
    --text-inverted: black;
  }
`, eR = d.default.div.withConfig({
        displayName: "Card__ImgContainer",
        componentId: "sc-5d4a0648-1"
    })
    `
  position: relative;
  height: 200px;
  width: 100%;
`, eU = d.default.div.withConfig({
        displayName: "Card__TextContainer",
        componentId: "sc-5d4a0648-2"
    })
    `
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  margin-top: 0;
  gap: 16px;
`, ez = d.default.h2.withConfig({
        displayName: "Card__Title",
        componentId: "sc-5d4a0648-3"
    })
    `
  font-size: 19px;
  font-weight: 500;
  line-height: 100%; /* 24px */
  letter-spacing: -0.96px;
`, eF = d.default.p.withConfig({
        displayName: "Card__Description",
        componentId: "sc-5d4a0648-4"
    })
    `
  color: var(--text-secondary-color);
  text-align: left;
  font-size: 16px;
  line-height: 140%; /* 22.4px */
  letter-spacing: -0.64px;
`, eL = d.default.button.withConfig({
        displayName: "Card__BuyLink",
        componentId: "sc-5d4a0648-5"
    })
    `
  padding: 12px 24px;
  background-color: var(--text-primary-color);
  color: var(--text-inverted);
  border-radius: 40px;
  align-self: flex-start;
  font-size: 15px;
  font-weight: 500;
  line-height: 16px; /* 106.667% */
  outline: none;
  border: none;
`, eT = d.default.div.withConfig({
        displayName: "Card__Filler",
        componentId: "sc-5d4a0648-6"
    })
    `
  flex-grow: 1;
`, eB = ({
        className: e,
        title: i,
        description: a,
        imgSrc: n,
        cardTheme: r,
        cta: l,
        onClick: o
    }) => (0, t.jsxs)(eW, {
        className: `${e} ${r}`,
        children: [(0, t.jsx)(eR, {
            children: (0, t.jsx)(F.CustomImage, {
                src: n,
                alt: i,
                fill: !0
            })
        }), (0, t.jsxs)(eU, {
            children: [(0, t.jsx)(ez, {
                children: i
            }), (0, t.jsx)(eF, {
                children: a
            }), (0, t.jsx)(eT, {}), (0, t.jsx)(eL, {
                onClick: o,
                children: l
            })]
        })]
    });
    var eH = e.i(84586),
        eM = e.i(25704);
    let eE = d.default.section.withConfig({
        displayName: "CtaSection__Content",
        componentId: "sc-f2028aa1-0"
    })
    `
  position: relative;
  ${m}

  display: grid;
  place-items: center;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 8px;

    @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
      gap: 24px;
    }
  }

  & .title {
    ${f}
    color: #000;
    max-width: 32ch;
    margin-inline: auto;

    i {
      --stroke: 0;
      font-style: normal;
      -webkit-text-stroke: var(--stroke) #000000;
    }
  }

  & .description {
    color: rgba(0, 0, 0, 0.5);
    text-align: center;
    font-size: 1.9rem;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
    letter-spacing: -0.96px;
    width: 100%;
    max-width: 36ch;
    margin: 0 auto;

    @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
      font-size: 2.4rem;
    }

    strong {
      font-weight: 500;
    }
  }

  .cards {
    display: flex;
    gap: 24px;
    margin-inline: auto;
    flex-direction: column;
    margin-top: 45px;

    @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
      flex-direction: row;
      margin-top: 12px;
    }
  }

  & .card {
    display: flex;
    flex-direction: column;
  }
`, eG = d.default.div.withConfig({
        displayName: "CtaSection__CtaSectionContainer",
        componentId: "sc-f2028aa1-1"
    })
    `
  & .footer {
    ${h.ContainerCSS}
    padding: 32px 0px;
    font-size: 16px;
    font-weight: 400;
    line-height: 160%; /* 25.6px */
    letter-spacing: -0.32px;
    margin-inline: auto;
    width: 90%;
    border-top: 1px solid rgba(16, 16, 16, 0.1);
    p {
      margin: 32px 0;
    }
  }
`, eZ = ({
        className: e
    }) => {
        let i = (0, C.useRouter)(),
            {
                regionSlug: a
            } = (0, s.useContext)(_.RegionLocaleContext),
            n = (0, s.useContext)(eA.ModalContext),
            r = [{
                title: "Don’t have the Ring?",
                description: "The Ultrahuman Ring tracks your fertility and cycle health with biomarkers like temperature, HRV, and RHR. Get yours to unlock the full suite of women’s health PowerPlugs.",
                link: "/ring/buy",
                cardTheme: "light",
                imgSrc: "web_v2/womens-health/ctas/1.png",
                cta: "Buy now",
                onClick: () => i.push({
                    pathname: `/${a}/ring/buy`,
                    query: i.query
                })
            }, {
                title: "Already have the Ring?",
                description: "Great! Let’s set up your cycle tracking. Follow the link below to test it out and sync your ring for personalized insights.",
                link: "https://ultrahuman.onelink.me/QqSM/bsrsfmvk",
                cardTheme: "dark",
                imgSrc: "web_v2/womens-health/ctas/2.1.png",
                cta: "Get started",
                onClick: () => {
                    (0, eH.isMobileDevice)() ? window.open("https://ultrahuman.onelink.me/QqSM/q9csmfux", "_blank"): (n.set((0, t.jsx)(eM.UhAppModal, {
                        text: " Install the Ultrahuman app to experience the Cycle & Ovulation Pro PowerPlug.",
                        link: "https://ultrahuman.onelink.me/QqSM/q9csmfux",
                        image: "web_v2/qr-codes/blood-vision-onelink.png"
                    })), n.show())
                }
            }];
        return (0, t.jsx)(eG, {
            children: (0, t.jsx)(eE, {
                className: e,
                children: (0, t.jsxs)(h.Container, {
                    children: [(0, t.jsx)("h2", {
                        className: "title",
                        children: "Start tracking your cycle today"
                    }), (0, t.jsx)("p", {
                        className: "description",
                        children: "Personalized insights for every phase of your cycle. Understand, optimize, and make informed choices."
                    }), (0, t.jsx)("div", {
                        className: "cards",
                        children: r.map((e, t) => (0, s.createElement)(eB, { ...e,
                            key: `card-${t}`
                        }))
                    })]
                })
            })
        })
    }, eD = d.default.section.withConfig({
        displayName: "Disclaimer__DisclaimerSection",
        componentId: "sc-2496234b-0"
    })
    `
  display: grid;
  place-items: center;
  background-color: #f5f5f5;

  font-size: 14px;
  color: rgba(0, 0, 0, 0.6);
  font-weight: 400;
  line-height: 160%; /* 25.6px */
  letter-spacing: -0.32px;
  margin-inline: auto;
  p {
    padding: 32px 0px;
    border-top: 1px solid rgba(16, 16, 16, 0.1);
    margin: 32px 0;
  }
`, eq = () => (0, t.jsx)(eD, {
        children: (0, t.jsx)(h.Container, {
            children: (0, t.jsx)("p", {
                children: "The Ultrahuman Fertile Window feature provides educational information about menstrual cycle phases and potential fertility patterns to help women understand their body's natural rhythms. It is not intended for use as a contraceptive, a sole method to achieve pregnancy, a medical diagnostic tool, or a substitute for professional medical advice. Insights are based on individual biomarker patterns and statistical data, but cycle variations may occur, and actual fertility windows may differ. For medical advice, diagnosis, treatment, or guidance on fertility, conception, or contraception, consult a qualified healthcare provider."
            })
        })
    }), eY = d.default.div.withConfig({
        displayName: "Encryption__EncryptionSectionContainer",
        componentId: "sc-f14f5994-0"
    })
    `
  ${m}
  width: 100vw;
  min-height: 700px;

  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    padding-top: 12.8rem;
  }

  text-align: center;

  display: grid;
  place-items: center;
  background: #f5f5f5;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 60px;
    justify-content: space-around;
    height: 100%;
  }

  h3 {
    ${f}
    color: #000;
    text-align: center;
    max-width: 24ch;
    margin-inline: auto;

    @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
      max-width: 850px;
    }
  }

  .img-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 46px;
    max-width: 80%;
    margin-inline: auto;

    flex-grow: 1;

    img {
      align-self: center;
      mix-blend-mode: darken;
      width: 75px;
      height: 75px;
    }

    @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 0px;
      margin-inline: unset;
      align-self: center;
      width: 100%;

      img {
        width: 120px;
        height: 120px;
      }
    }
  }

  p {
    color: #000;
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    line-height: 120%; /* 19.2px */
    letter-spacing: -0.32px;
    a {
      color: #4e77ff;
    }
  }
`, eQ = () => (0, t.jsx)(eY, {
        children: (0, t.jsxs)(h.Container, {
            children: [(0, t.jsx)("h3", {
                children: "Your data is secure, private, and always under your control."
            }), (0, t.jsx)("div", {
                className: "img-container",
                children: [{
                    src: "hipaa-1.png",
                    alt: "hipaa"
                }, {
                    src: "iso-1.png",
                    alt: "iso"
                }, {
                    src: "gdpr-1.png",
                    alt: "iso"
                }, {
                    src: "ce-1.png",
                    alt: "iso"
                }].map((e, i) => (0, t.jsx)(F.CustomImage, {
                    src: `web_v2/womens-health/encryption/${e.src}`,
                    width: 124,
                    height: 124,
                    alt: e.alt
                }, `icon-${i}`))
            })]
        })
    }), eK = [{
        title: "Hormonal surge concordance of the Ultrahuman's combinatorial cycle tracking algorithm and predicted fertile window: 'Cycle & Ovulation PowerPlug' Pilot Study",
        description: null,
        link: "https://science.ultrahuman.com/studies/fertile-window-algorithm",
        imageSrc: "web_v2/womens-health/whitepapers/pilot_study.png",
        imageAlt: "Pilot Study"
    }, {
        title: "Impact of BMI, stress, and activity on menstrual cycle length and variability: insights from 4055 cycles of Ultrahuman Ring AIR users",
        description: null,
        link: "https://science.ultrahuman.com/studies/impact-of-bmi-stress-and-activity-on-menstrual-cycle-length-and-variability",
        imageSrc: "web_v2/womens-health/whitepapers/bmi_stress_activity.png",
        imageAlt: "BMI Stress Activity Study"
    }, {
        title: "How does heart rate and heart rate variability change over the day in men and women? A database analysis of Ultrahuman Ring AIR users",
        description: null,
        link: "https://science.ultrahuman.com/studies/is-stress-in-women-more-circadian-aligned",
        imageSrc: "web_v2/womens-health/whitepapers/hr_hrv.png",
        imageAlt: "HR HRV Study"
    }, {
        title: "Modifying sleep tracking algorithms reveals specific sleep deprivation patterns in women: early findings from the Ultrahuman Ring AIR Ramadan Mode",
        description: null,
        link: "https://science.ultrahuman.com/studies/ramadan-mode-sleep-debt-in-women",
        imageSrc: "web_v2/womens-health/whitepapers/sleep_ramadan.png",
        imageAlt: "Sleep Ramadan Study"
    }, {
        title: "Temperature-Derived Cycle Flags: Characterizing Menstrual Cycle Dynamics Using Ultrahuman Cycle Tracking & Ovulation (C&O Pro) Algorithm powered by OvuSense™",
        description: null,
        link: "https://science.ultrahuman.com/studies/cycle-flags",
        imageSrc: "web_v2/womens-health/whitepapers/cnopro_flag.png",
        imageAlt: "CNO Pro Flag Study"
    }, {
        title: "Listening In: Introducing the Ultrahuman Cycle Tracking & Ovulation Pro (C&O Pro) Feature Powered by OvuSense™",
        description: null,
        link: "https://science.ultrahuman.com/studies/cycle-tracking-pro-accuracy",
        imageSrc: "web_v2/womens-health/whitepapers/cno_pro.png",
        imageAlt: "CNO Pro Study"
    }], eX = d.default.div.withConfig({
        displayName: "Whitepaper__WhitepaperSectionContainer",
        componentId: "sc-a26be618-0"
    })
    `
  ${m}
  display: grid;
  place-items: center;
  text-align: center;
  background: #ffffff;
  width: 100vw;
  overflow-x: hidden;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 24px;
    // max-width: 100vw;

    @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
      gap: 32px;
    }
  }

  .caption {
    ${g}
    color: #000;
    // font-size: 12px;
    // font-weight: 600;
    // line-height: 120%; /* 14.4px */
    // letter-spacing: 4.32px;
    // text-transform: uppercase;
    // @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    //   font-size: 16px;
    //   letter-spacing: 5.76px;
    // }
  }

  & .title {
    ${f}
    color: #000000;
    // font-size: 32px;
    // font-weight: 400;
    // line-height: 120%; /* 38.4px */
    // letter-spacing: -1.28px;
    max-width: 24ch;
    margin-inline: auto;

    // @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    //   font-size: 56px;
    //   letter-spacing: -2.24px;
    //   max-width: 600px;
    // }
  }
`, eJ = d.default.article.withConfig({
        displayName: "Whitepaper__WhitePaperArticle",
        componentId: "sc-a26be618-1"
    })
    `
  --base-padding: 16px;

  background: rgba(245, 245, 245, 1);
  // box-shadow: -5px 12px 29px 0px rgba(0, 0, 0, 0.13);
  width: 100%;
  height: 100%;
  border-radius: 24px;
  display: flex;
  flex-direction: column;

  .img-container {
    width: 100%;
    height: 200px;
    border-radius: 16px 16px 0 0;
    overflow: hidden;
    // padding: var(--base-padding);

    @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
      height: 250px;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 16px 16px 0 0;
    }
  }

  .text {
    padding: var(--base-padding);
    // padding-top: 0;
    display: flex;
    gap: 16px;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    text-align: left;

    @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
      // padding: 24px;
      gap: 24px;
    }

    h3,
    p {
      display: inline;
      font-size: 16px;
      font-weight: 500;
      line-height: 140%; /* 22.4px */
      letter-spacing: -0.42px;
    }

    a {
      border-radius: 40px;
      background: #000;
      align-self: flex-start;
      padding: 12px 20px;
      color: #fff;
      text-align: center;
      font-size: 14px;
      font-weight: 500;
      line-height: 16px;
      text-decoration: none;
      transition: transform 0.2s ease;

      &:hover {
        transform: translateY(-2px);
      }

      @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
        padding: 14px 24px;
        font-size: 15px;
      }
    }
  }
`, e0 = d.default.div.withConfig({
        displayName: "Whitepaper__CarouselContainer",
        componentId: "sc-a26be618-2"
    })
    `
  position: relative;
  width: 100%;
  margin: 0 -8px;

  @media (min-width: ${({theme:e})=>e.globalV2.sm.minWidth}) {
    margin: 0 -12px;
  }

  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    margin: 0;
  }

  .embla {
    overflow: hidden;
    width: 100%;
    padding: 40px 0;
    position: relative;

    // &::before {
    //   content: '';
    //   position: absolute;
    //   top: 0;
    //   left: 0;
    //   width: 20px;
    //   height: 100%;
    //   background: linear-gradient(90deg, #fff 0%, transparent 100%);
    //   z-index: 2;
    //   pointer-events: none;
    // }

    // &::after {
    //   content: '';
    //   position: absolute;
    //   top: 0;
    //   right: 0;
    //   width: 20px;
    //   height: 100%;
    //   background: linear-gradient(270deg, #fff 0%, transparent 100%);
    //   z-index: 2;
    //   pointer-events: none;
    // }
  }

  .embla__container {
    max-width: 100vw;
    display: flex;
    align-items: stretch;
  }

  .embla__slide {
    flex: 0 0 100%;
    min-width: 0;
    padding: 0 8px;
    display: flex;

    @media (min-width: ${({theme:e})=>e.globalV2.sm.minWidth}) {
      flex: 0 0 50%;
      padding: 0 12px;
    }

    @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
      flex: 0 0 33.333%;
      padding: 0 16px;
    }
  }

  .carousel-controls {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-top: 3rem;

    button {
      border: none;
      background: rgba(0, 0, 0, 0.07);
      border-radius: 50%;
      width: 4rem;
      height: 4rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover:not(:disabled) {
        background: rgba(0, 0, 0, 1);
        transform: scale(1.05);

        svg {
          color: #ffffff;
          path {
            fill: #ffffff;
          }
        }
      }

      &:active:not(:disabled) {
        transform: scale(0.95);
      }

      &:disabled {
        opacity: 0.3;
        cursor: not-allowed;
      }

      svg {
        color: #000;
        width: 1.6rem;
        height: 1.6rem;

        path {
          fill: rgba(0, 0, 0, 0.2);
        }
      }
    }
  }

  .embla__prev,
  .embla__next {
    position: static;
  }
`, e2 = ({
        data: e
    }) => (0, t.jsxs)(eJ, {
        children: [(0, t.jsx)("div", {
            className: "img-container",
            children: (0, t.jsx)(F.CustomImage, {
                src: e.imageSrc,
                alt: e.imageAlt,
                width: 1800,
                height: 1948
            })
        }), (0, t.jsxs)("div", {
            className: "text",
            children: [(0, t.jsxs)("div", {
                children: [(0, t.jsx)("h3", {
                    children: e.title
                }), e.description && (0, t.jsxs)("p", {
                    children: [" ", e.description]
                })]
            }), (0, t.jsx)(p.default, {
                href: e.link,
                children: "Read the study"
            })]
        })]
    }), e1 = () => {
        let [e, i] = (0, U.default)({
            loop: !1,
            align: "start",
            slidesToScroll: 1
        }), [a, n] = (0, s.useState)(!1), [r, l] = (0, s.useState)(!1), o = (0, s.useCallback)(() => {
            i && i.scrollPrev()
        }, [i]), d = (0, s.useCallback)(() => {
            i && i.scrollNext()
        }, [i]);
        return (0, s.useEffect)(() => {
            if (!i) return;
            let e = () => {
                n(i.canScrollPrev()), l(i.canScrollNext())
            };
            return e(), i.on("select", e), () => {
                i.off("select", e)
            }
        }, [i]), (0, t.jsx)(eX, {
            children: (0, t.jsxs)(h.Container, {
                children: [(0, t.jsx)("h3", {
                    className: "caption",
                    children: "SCIENCE"
                }), (0, t.jsx)("h2", {
                    className: "title",
                    children: "Backed by research. Built for your cycle."
                }), (0, t.jsxs)(e0, {
                    children: [(0, t.jsx)("div", {
                        className: "embla",
                        ref: e,
                        children: (0, t.jsx)("div", {
                            className: "embla__container",
                            children: eK.map((e, i) => (0, t.jsx)("div", {
                                className: "embla__slide",
                                children: (0, t.jsx)(e2, {
                                    data: e
                                })
                            }, i))
                        })
                    }), (0, t.jsxs)("div", {
                        className: "carousel-controls",
                        children: [(0, t.jsx)("button", {
                            className: "embla__prev",
                            onClick: o,
                            disabled: !a,
                            children: (0, t.jsx)(z.CaretUp, {
                                style: {
                                    transform: "rotate(-90deg)"
                                }
                            })
                        }), (0, t.jsx)("button", {
                            className: "embla__next",
                            onClick: d,
                            disabled: !r,
                            children: (0, t.jsx)(z.CaretUp, {
                                style: {
                                    transform: "rotate(90deg)"
                                }
                            })
                        })]
                    })]
                })]
            })
        })
    };
    var e4 = e.i(83978);
    let e5 = [{
            title: "What is new in the C&O Pro PowerPlug compared to previously available C&O PowerPlug?",
            description: (0, t.jsxs)(t.Fragment, {
                children: ["C&O Pro, powered by OvuSense™ Technology, builds on the capabilities of the original C&O PowerPlug by adding clinically validated temperature-based ovulation confirmation, Cycle Flags™ and detailed cycle health insights. While both versions offer period and ovulation day prediction, C&O Pro goes further with:", (0, t.jsxs)("ul", {
                    children: [(0, t.jsx)("li", {
                        children: "Support for irregular and diverse cycles"
                    }), (0, t.jsx)("li", {
                        children: "Ovulation confirmation with over 90% accuracy"
                    }), (0, t.jsx)("li", {
                        children: "Anovulatory cycle detection"
                    }), (0, t.jsx)("li", {
                        children: "Cycle Flags™ to highlight key ovulatory patterns and possible irregularities"
                    }), (0, t.jsx)("li", {
                        children: "CE and UKCA certified as a Class IIa medical device in EU & UK. MDSAP certified and registered for US FDA, Canada and Australia to Class II standards."
                    }), (0, t.jsx)("li", {
                        children: "HSA/FSA eligible in USA"
                    })]
                }), (0, t.jsx)("p", {
                    children: "These upgrades make C&O Pro especially valuable for users tracking fertility in irregular cycles, or monitoring patterns linked to cycle-related health conditions, while maintaining the accuracy and privacy standards of Ultrahuman's ecosystem."
                })]
            })
        }, {
            title: "Can I use C&O Pro for HSA/FSA reimbursement?",
            description: (0, t.jsx)(t.Fragment, {
                children: "C&O Pro is eligible for HSA/FSA reimbursement in the United States. You can also export your cycle reports to share with your healthcare provider for ongoing care."
            })
        }, {
            title: "Can I view or export my Cycle Report?",
            description: (0, t.jsx)(t.Fragment, {
                children: "Yes. You can download a comprehensive analysis of your past 6 cycles. A PDF export option is available so you can share results with your healthcare provider. Your first report will be available to you after 30 days of activation."
            })
        }, {
            title: "What is the difference between ovulation confirmation and fertile window prediction?",
            description: (0, t.jsxs)(t.Fragment, {
                children: [(0, t.jsxs)("p", {
                    children: [(0, t.jsx)("strong", {
                        children: "Ovulation confirmation "
                    }), "means verifying after it has happened that ovulation occurred in your cycle, usually by detecting a sustained rise in temperature or other biomarkers."]
                }), (0, t.jsxs)("p", {
                    children: [(0, t.jsx)("strong", {
                        children: "Fertile window prediction"
                    }), " means estimating in advance the days you are most likely to conceive, based on your cycle history and real-time biomarker trends."]
                }), (0, t.jsx)("p", {
                    children: "In short, prediction helps you plan ahead, while confirmation tells you what actually happened. C&O Pro both predicts and confirms ovulation."
                })]
            })
        }, {
            title: "Which regions is C&O Pro available in?",
            description: (0, t.jsx)(t.Fragment, {
                children: "C&O Pro is currently available in the United States, United Kingdom, Australia, Canada, the European Union, Norway, Iceland, and Isle of Man, with more regions coming soon."
            })
        }, {
            title: " ",
            description: (0, t.jsx)("div", {
                className: "",
                style: {
                    textAlign: "left"
                },
                children: (0, t.jsxs)(p.default, {
                    target: "_blank",
                    href: {
                        pathname: "https://ultrahumanapp.notion.site/Cycle-Ovulation-Pro-FAQs-245755317a91800e8214e2b73f170ce2"
                    },
                    children: ["See all FAQs ", (0, t.jsx)(e4.RightArrow, {
                        fill: "#000000"
                    })]
                })
            })
        }],
        e6 = [{
            title: "What is new in the C&O Plus PowerPlug compared to the previously available C&O PowerPlug?",
            description: (0, t.jsxs)(t.Fragment, {
                children: ["C&O Plus builds on the capabilities of the original C&O PowerPlug by adding temperature-based cycle pattern recognition, Cycle Flags, and detailed cycle and fertility insights. While both versions offer cycle-phase estimation, C&O Plus goes further with:", (0, t.jsxs)("ul", {
                    children: [(0, t.jsx)("li", {
                        children: "Support for irregular and diverse cycles"
                    }), (0, t.jsx)("li", {
                        children: "Recognizes ovulation patterns with 90%+ consistency"
                    }), (0, t.jsx)("li", {
                        children: "Highlights cycles without a clear ovulation pattern"
                    }), (0, t.jsx)("li", {
                        children: "Cycle Flags to highlight key cycle patterns and possible variations"
                    }), (0, t.jsx)("li", {
                        children: "Designed for wellness and fertility awareness use only – not a medical or diagnostic device"
                    }), (0, t.jsx)("li", {
                        children: "Eligible for HSA/FSA benefits in the USA"
                    })]
                }), (0, t.jsx)("p", {
                    children: "These upgrades make C&O Plus especially valuable for users tracking fertility awareness in irregular cycles or observing pattern-based changes related to their overall wellness, while maintaining the consistency and privacy standards of Ultrahuman's ecosystem."
                })]
            })
        }, {
            title: "What is the difference between ovulation pattern recognition and fertility phase estimation?",
            description: (0, t.jsxs)(t.Fragment, {
                children: [(0, t.jsxs)("p", {
                    children: [(0, t.jsx)("strong", {
                        children: "Ovulation pattern recognition"
                    }), " means observing a sustained temperature trend that suggests ovulation has occurred within a cycle."]
                }), (0, t.jsxs)("p", {
                    children: [(0, t.jsx)("strong", {
                        children: "Fertility phase estimation"
                    }), " means highlighting the days when fertility-related patterns may be more likely to appear, based on your unique biomarker trends and past cycle data."]
                }), (0, t.jsx)("p", {
                    children: "In short, estimation helps you understand potential fertile phases, while pattern recognition shows what your body experienced in that cycle. C&O Plus offers both to support cycle and fertility awareness."
                })]
            })
        }, {
            title: "Can I view or export my Cycle Report?",
            description: (0, t.jsx)(t.Fragment, {
                children: "Yes — you can download a summary report of your past six cycles, showing patterns observed across temperature and fertility phases. A PDF export option is available so you can share your cycle trends with a healthcare professional. Your first report becomes available 30 days after activation."
            })
        }, {
            title: "Why does C&O Plus work for all kinds of cycles?",
            description: (0, t.jsx)(t.Fragment, {
                children: "C&O Plus works effectively across a wide range of cycle types because its data model is built on a diverse set of real-world cycle patterns, including irregular, short, long, and variable cycles. This model is designed to observe temperature-based trends and adapt to your body's unique rhythm, rather than relying on fixed cycle lengths. By focusing on biometric patterns and consistency, C&O Plus helps you recognize fertility-related insights and cycle variations with awareness and confidence."
            })
        }, {
            title: "How is my data used to label Cycle Flags on my cycles?",
            description: (0, t.jsx)(t.Fragment, {
                children: "The system analyses overnight temperature trends and other biomarker data recorded by Ring AIR to highlight consistent patterns in your cycle. Based on these trends, it applies Cycle Flags to reflect variations in fertility-related phases or temperature shifts, helping you understand your body's rhythm and cycle consistency."
            })
        }, {
            title: " ",
            description: (0, t.jsx)("div", {
                className: "",
                style: {
                    textAlign: "left"
                },
                children: (0, t.jsxs)(p.default, {
                    target: "_blank",
                    href: {
                        pathname: "https://ultrahumanapp.notion.site/Cycle-Ovulation-Plus-FAQs-2a9755317a91806dbee7d350dc99eecc"
                    },
                    children: ["See all FAQs ", (0, t.jsx)(e4.RightArrow, {
                        fill: "#000000"
                    })]
                })
            })
        }];
    e.s(["__N_SSP", () => !0, "default", 0, () => {
        let e = (0, C.useRouter)(),
            {
                region: n,
                regionSlug: r
            } = (0, s.useContext)(_.RegionLocaleContext),
            {
                getValue: l,
                isCnOPlus: o
            } = (0, j.default)(),
            d = () => {
                e.push({
                    pathname: `/${r}/ring/buy`,
                    query: { ...e.query
                    }
                })
            };
        return (0, t.jsxs)("main", {
            children: [(0, t.jsx)(i.SEO, {
                title: "Ultrahuman | Women's Health",
                description: "Track your cycle, fertility, or pregnancy seamlessly, and with precision.",
                image: (0, c.getCompressedAssetUrl)("/web_v2/meta-assets/ring-air-og-lg.png/w_1080"),
                basePath: "/womens-health"
            }), (0, t.jsx)(R, {}), (0, t.jsx)(ep, {
                sections: [{
                    id: "section-1",
                    title: l("Confirms ovulation with over 90% accuracy ", "Provides consistent, science-informed estimates of your ovulation "),
                    subtitle: l("and detects when it hasn’t happened.", "and when it may or may not have happened. "),
                    ctaText: "US" !== n ? "Buy Ring" : void 0,
                    videoSrc: (0, c.getCompressedAssetUrl)(l("/web_v2/womens-health/videos/mockup_ovulation_confirmed-v2.mp4", "/web_v2/womens-health/plus/videos/mockup_ovulation_possible-v2.mp4")),
                    backgroundColor: "#9454ff",
                    onClick: d
                }, {
                    id: "section-2",
                    title: "Works for all types of cycles, ",
                    subtitle: "from clockwork to unpredictable.",
                    ctaText: "US" !== n ? "Buy Ring" : void 0,
                    videoSrc: (0, c.getCompressedAssetUrl)(l("/web_v2/womens-health/videos/mockup_cycle_flags-v3.mp4", "/web_v2/womens-health/plus/videos/cycle-plus.mp4")),
                    backgroundColor: "#b44054",
                    onClick: d
                }, {
                    id: "section-3",
                    title: l("Predict up to 12 cycles ", "Estimates up to 12 cycles "),
                    subtitle: "and track changes in ovulation and cycle health.",
                    ctaText: "US" !== n ? "Buy Ring" : void 0,
                    videoSrc: (0, c.getCompressedAssetUrl)(l("/web_v2/womens-health/videos/mockup_guidance-v2.mp4", "/web_v2/womens-health/plus/videos/guidance.mp4")),
                    backgroundColor: "rgba(148, 84, 255, 1)",
                    onClick: d
                }]
            }), (0, t.jsx)(Y, {}), (0, t.jsx)(B, {}), o ? null : (0, t.jsx)(ey, {}), (0, t.jsx)(el, {}), (0, t.jsx)(eO, {}), (0, t.jsx)(e1, {}), (0, t.jsx)(eQ, {}), (0, t.jsx)(eZ, {
                handleCta: d
            }), (0, t.jsx)(a.FAQSection, {
                faqData: l(e5, e6),
                htmlId: "ring-faq",
                bgColor: "grey",
                pb: "pb-0"
            }), (0, t.jsx)(eq, {})]
        })
    }], 31832)
}, 4739, (e, t, i) => {
    let a = "/womens-health";
    (window.__NEXT_P = window.__NEXT_P || []).push([a, () => e.r(31832)]), t.hot && t.hot.dispose(function() {
        window.__NEXT_P.push([a])
    })
}]);