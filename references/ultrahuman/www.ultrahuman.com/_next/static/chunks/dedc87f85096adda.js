(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 43181, e => {
    "use strict";
    var t = e.i(91398),
        i = e.i(91788),
        a = e.i(89057),
        a = a,
        n = e.i(95458),
        n = n,
        o = e.i(68115),
        o = o,
        r = e.i(27681),
        r = r,
        l = e.i(60814),
        s = e.i(21666),
        d = e.i(19231),
        p = e.i(86332),
        c = e.i(78198),
        m = e.i(77414),
        u = e.i(57232);
    let h = l.default.div.withConfig({
        displayName: "AppSection__Section",
        componentId: "sc-433c8452-0"
    })
    `
  background: #000000;
  padding: 4.8rem 0;

  @media (min-width: ${({theme:e})=>e.globalV2.md.minWidth}) {
    padding: 9.6rem 0;
  }
`, g = (0, l.default)(d.ContainerLG).withConfig({
        displayName: "AppSection__ContentWrapper",
        componentId: "sc-433c8452-1"
    })
    `
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  padding: 48px 0;
  @media (min-width: ${({theme:e})=>e.globalV2.md.minWidth}) {
    padding: 24px 0;
  }
`, b = l.default.h2.withConfig({
        displayName: "AppSection__Title",
        componentId: "sc-433c8452-2"
    })
    `
  color: #0efc6d;
  text-align: center;
  font-size: 141.197px;
  font-style: normal;
  font-weight: 400;
  line-height: 58%; /* 81.894px */
  letter-spacing: -8.472px;
  margin-bottom: -3.2rem;

  @media (max-width: ${({theme:e})=>e.globalV2.md.minWidth}) {
    font-size: 80px;
    letter-spacing: -4px;
    margin-bottom: -2.4rem;
  }

  @media (max-width: ${({theme:e})=>e.globalV2.sm.minWidth}) {
    font-size: 60px;
    letter-spacing: -3px;
  }
`, f = l.default.div.withConfig({
        displayName: "AppSection__Subtitle",
        componentId: "sc-433c8452-3"
    })
    `
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 22rem;
  z-index: 2;
  background: linear-gradient(to top, rgba(0, 0, 0, 1), transparent);
  pointer-events: none;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 4rem;

  @media (max-width: ${({theme:e})=>e.globalV2.md.minWidth}) {
    height: 16rem;
    padding-bottom: 0;
  }

  @media (min-width: ${({theme:e})=>e.globalV2.lg.minWidth}) {
    /* Lower the desktop copy closer to the bottom edge for better spacing from elements above */
    padding-bottom: 1.6rem;
  }
`, x = l.default.p.withConfig({
        displayName: "AppSection__Content",
        componentId: "sc-433c8452-4"
    })
    `
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  letter-spacing: -0.32px;
  max-width: 460px;
  margin: 0 auto;
  padding: 0 16px;
  z-index: 100;

  @media (min-width: ${({theme:e})=>e.globalV2.lg.minWidth}) {
    /* Widen desktop copy to better accommodate longer text */
    max-width: 600px;
  }

  &.content-web {
    display: block;
    @media (max-width: ${({theme:e})=>e.globalV2.md.minWidth}) {
      display: none;
    }
  }

  &.content-mobile {
    display: none;
    @media (max-width: ${({theme:e})=>e.globalV2.md.minWidth}) {
      display: block;
    }
  }
`, v = (0, l.default)(x).withConfig({
        displayName: "AppSection__FadeInContent",
        componentId: "sc-433c8452-5"
    })
    `
  opacity: 0;
  animation: fadeIn 500ms ease forwards;
  will-change: opacity;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    opacity: 1;
  }
`, y = l.default.div.withConfig({
        displayName: "AppSection__RatingsRow",
        componentId: "sc-433c8452-6"
    })
    `
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin: 4.8rem 0 0 0;

  @media (min-width: ${({theme:e})=>e.globalV2.lg.minWidth}) {
    gap: 24px;
  }
`, w = l.default.div.withConfig({
        displayName: "AppSection__RatingCard",
        componentId: "sc-433c8452-7"
    })
    `
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`, _ = l.default.div.withConfig({
        displayName: "AppSection__MobileOnly",
        componentId: "sc-433c8452-8"
    })
    `
  display: block;

  @media (min-width: ${({theme:e})=>e.globalV2.lg.minWidth}) {
    display: none;
  }
`, C = l.default.div.withConfig({
        displayName: "AppSection__DesktopOnly",
        componentId: "sc-433c8452-9"
    })
    `
  display: none;

  @media (min-width: ${({theme:e})=>e.globalV2.lg.minWidth}) {
    display: block;
  }
`, k = l.default.div.withConfig({
        displayName: "AppSection__PhoneWrapper",
        componentId: "sc-433c8452-10"
    })
    `
  position: relative;

  @media (min-width: ${({theme:e})=>e.globalV2.lg.minWidth}) {
    max-width: 60rem;
  }
`, j = (0, l.default)(s.CustomImage).withConfig({
        displayName: "AppSection__PhoneImage",
        componentId: "sc-433c8452-11"
    })
    `
  width: 100%;
  height: auto;
  display: block;
  position: relative;
  z-index: 2;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 60px;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
    pointer-events: none;
  }
`, $ = l.default.div.withConfig({
        displayName: "AppSection__PhoneScreen",
        componentId: "sc-433c8452-12"
    })
    `
  position: absolute;
  top: 4.5%;
  left: 50%;
  transform: translateX(-50%);
  width: 39%;
  aspect-ratio: 234 / 500;
  border-radius: 34px;
  background: #000000;
  overflow: hidden;
  z-index: 1;

  @media (max-width: ${({theme:e})=>e.globalV2.sm.maxWidth}) {
    top: 5.4%;
    border-radius: 24px;
    width: 60%;
    margin-left: 4px;
  }
`, S = l.default.video.withConfig({
        displayName: "AppSection__VideoLayer",
        componentId: "sc-433c8452-13"
    })
    `
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  opacity: ${({$isActive:e})=>+!!e};
  transition: opacity 250ms ease;
  will-change: opacity;
`, N = l.default.div.withConfig({
        displayName: "AppSection__MetricsBar",
        componentId: "sc-433c8452-14"
    })
    `
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;

  top: 70%;
  width: 86%;
  max-width: 45rem;

  display: inline-flex;
  padding: 8px;
  align-items: center;
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 24px 34px 0 rgba(255, 255, 255, 0.1);
  -webkit-backdrop-filter: blur(13px);
  backdrop-filter: blur(13px);

  color: #ffffff;
  /* allow pulse rings to extend beyond container */
  overflow: visible;
  /* variables for highlight calculations */
  --xpad: 8px;
  --gap: 0px;
  --ypad: 8px;
  /* pulse animation variables */
  --pulse-color: rgba(255, 255, 255, 0.2);
  --pulse-duration: 1500ms;
  --pulse-scale: 1.5;

  @media (max-width: ${({theme:e})=>e.globalV2.md.minWidth}) {
    top: 79%;
    width: calc(100% - 32px);
    padding: 8px;
    /* mobile spec mirrors desktop but without explicit gap */
    --xpad: 8px;
    --gap: 0px;
    --ypad: 8px;
  }

  @media (min-width: ${({theme:e})=>e.globalV2.lg.minWidth}) {
    top: 70%;
    padding: 8px;
    --xpad: 8px;
    --ypad: 8px;
  }
`, I = l.default.div.withConfig({
        displayName: "AppSection__ActiveHighlight",
        componentId: "sc-433c8452-15"
    })
    `
  position: absolute;
  top: var(--ypad);
  bottom: var(--ypad);
  width: var(--itemWidth, calc((100% - (var(--xpad) * 2)) / 4));
  left: ${({$index:e})=>`
    calc(var (--xpad) + $ {
        e
    }*(var (--itemWidth, ((100 % -(var (--xpad) * 2)) / 4)) +
        var (--gap)))
    `};
  border-radius: 16px;
  border: none;
  background: rgba(255, 255, 255, 0.1);
  transition: left 300ms ease, width 300ms ease;
  will-change: left, width;
  pointer-events: none;
  z-index: 0;
`, A = l.default.div.withConfig({
        displayName: "AppSection__PulseRings",
        componentId: "sc-433c8452-16"
    })
    `
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  z-index: 0;

  .ring {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0);
    border: 2px solid var(--pulse-color, rgba(255, 255, 255, 0.1));
    opacity: 0;
    animation: pulseRing var(--pulse-duration, 1500ms) ease-out forwards;
  }

  .ring:nth-child(2) {
    animation-delay: calc(var(--pulse-duration, 1500ms) / 3);
  }

  .ring:nth-child(3) {
    animation-delay: calc(var(--pulse-duration, 1500ms) * 2 / 3);
  }

  @keyframes pulseRing {
    0% {
      opacity: 1;
      transform: translate(-50%, -50%) scale(0);
    }
    100% {
      opacity: 0;
      transform: translate(-50%, -50%) scale(var(--pulse-scale, 1.5));
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .ring {
      animation: none;
    }
  }
`, V = [{
        id: "RING",
        label: "RING",
        icon: a.RingAirIcon,
        videoSrc: "web_v2/homepage-v3/app-section/display-videos/ring-new.mp4",
        subtitle: "Leverage the Ring AIR’s advanced, discreet, and preventive health monitoring to guide your path toward vitality and a longer, healthier life.",
        posterSrc: "web_v2/homepage-v3/app-section/thumbnails/ring.png"
    }, {
        id: "METABOLISM",
        label: "METABOLISM",
        icon: n.M1Icon,
        videoSrc: "web_v2/homepage-v3/app-section/display-videos/m1-new.mp4",
        subtitle: "Track glucose in real time. Understand how food and exercise impact your body, and get actionable nudges that help you build healthier metabolic habits.",
        posterSrc: "web_v2/homepage-v3/app-section/thumbnails/m1.png"
    }, {
        id: "HOME",
        label: "HOME",
        icon: o.HomeIcon,
        videoSrc: "web_v2/homepage-v3/app-section/display-videos/home-new.mp4",
        subtitle: "Your space shapes your health. Home Monitor provides real-time insights on air quality, light exposure, temperature, noise, and humidity, with a Room Score that reflects the true state of your environment.",
        posterSrc: "web_v2/homepage-v3/app-section/thumbnails/home.png"
    }, {
        id: "VISION",
        label: "VISION",
        icon: r.BloodVisionIcon,
        videoSrc: "web_v2/homepage-v3/app-section/display-videos/bv-new.mp4",
        subtitle: "Comprehensive biomarker testing across metabolic, cardiovascular, immune, hormonal, and nutritional health. Get clear AI-powered summaries paired with personalized supplement and lifestyle recommendations.",
        posterSrc: "web_v2/homepage-v3/app-section/thumbnails/bv.png"
    }], M = [{
        key: "appstore",
        name: "App store",
        rating: 4.8,
        link: "https://apps.apple.com/us/app/ultrahuman-meditation-sleep/id1491286709",
        buttonLabel: "Download on Appstore",
        buttonLabelM: "Appstore",
        Icon: () => (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "14",
            height: "17",
            viewBox: "0 0 14 17",
            fill: "none",
            children: (0, t.jsx)("path", {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M10.1957 1.15562C10.1957 1.9749 9.84441 2.79418 9.34781 3.38464C8.82083 4.0391 7.90901 4.52555 7.18404 4.52555C7.10102 4.52555 7.01799 4.51435 6.9669 4.50475C6.95728 4.46475 6.93652 4.33993 6.93652 4.21512C6.93652 3.38464 7.36132 2.56536 7.81641 2.04691C8.39608 1.37324 9.35738 0.864387 10.1654 0.833984C10.1861 0.926793 10.1957 1.04201 10.1957 1.15562ZM13.045 6.31549C13.0648 6.30244 13.0785 6.29349 13.0848 6.28855C12.0086 4.74278 10.3734 4.70117 9.91824 4.70117C9.22202 4.70117 8.5988 4.94861 8.07503 5.15657C7.69542 5.30729 7.36805 5.43726 7.103 5.43726C6.81004 5.43726 6.47463 5.30154 6.10037 5.15009C5.62803 4.95895 5.09381 4.74278 4.50491 4.74278C2.51842 4.74278 0.5 6.39255 0.5 9.50325C0.5 11.4427 1.24573 13.486 2.16871 14.8014C2.96555 15.9215 3.65858 16.8336 4.65182 16.8336C5.12277 16.8336 5.46807 16.6868 5.83122 16.5324C6.23396 16.3612 6.65864 16.1807 7.30099 16.1807C7.95026 16.1807 8.33821 16.3503 8.71224 16.5138C9.06035 16.6659 9.39641 16.8128 9.91984 16.8128C11.0057 16.8128 11.7195 15.8287 12.403 14.843C13.1695 13.7229 13.4904 12.6236 13.5 12.5724C13.4377 12.5516 11.357 11.7115 11.357 9.33685C11.357 7.42472 12.7755 6.49259 13.045 6.31549Z",
                fill: "white"
            })
        })
    }, {
        key: "playstore",
        name: "Play store",
        rating: 4.4,
        link: "https://play.google.com/store/apps/details?id=com.ultrahuman.android",
        buttonLabel: "Download on Playstore",
        buttonLabelM: "Playstore",
        Icon: () => (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "17",
            viewBox: "0 0 16 17",
            fill: "none",
            children: (0, t.jsx)("path", {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M1.06159 1.06616L8.68095 8.4843H8.68185L11.3824 5.85562L2.65672 1.0804C2.39129 0.929273 2.09151 0.844608 1.78424 0.833984C1.52406 0.834165 1.27079 0.915538 1.06159 1.06616ZM0.715925 16.2417L0.716248 16.2423L0.713508 16.244L0.715925 16.2417ZM0.715925 16.2417C0.566566 15.9781 0.492241 15.6804 0.500641 15.3794V2.29822C0.499406 2.09965 0.530235 1.90213 0.592 1.71288L8.1136 9.03851L0.715925 16.2417ZM1.32324 16.7571C1.46928 16.8101 1.62421 16.8361 1.78004 16.8336C2.0904 16.8266 2.39382 16.7428 2.66166 16.5899L11.117 11.9641L8.68132 9.58984L1.32324 16.7571ZM11.8436 11.5655L9.24805 9.04005L12.1103 6.25391L14.6529 7.64433C15.1409 7.857 15.4675 8.31581 15.5007 8.83547C15.4676 9.35562 15.1406 9.81492 14.652 10.0275L11.8436 11.5655Z",
                fill: "white"
            })
        })
    }], z = l.default.button.withConfig({
        displayName: "AppSection__MetricItem",
        componentId: "sc-433c8452-17"
    })
    `
  display: flex;
  padding: 10px 0px 8px 0px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  flex: 1;
  color: ${({$isActive:e})=>e?"rgba(255, 255, 255, 1)":"rgba(255, 255, 255, 0.4)"};
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.2s ease;

  width: var(--itemWidth, 25%);
  position: relative;
  z-index: 1;

  .pulses {
    display: ${({$isActive:e,$disablePulses:t})=>e||t?"none":"block"};
  }

  &:hover {
    color: rgba(255, 255, 255, 0.8);
  }

  .icon {
    width: 22px;
    height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: visible;
  }

  .label {
    color: inherit;
    text-align: center;
    font-size: 9px;
    font-style: normal;
    font-weight: 600;
    line-height: 16px;
    letter-spacing: 0.6px;
    text-align: center;
    text-transform: uppercase;
    @media (max-width: ${({theme:e})=>e.globalV2.md.minWidth}) {
      color: #fff;
    }
  }
`;

    function R() {
        let e = (0, u.useWindowSize)() ? .width <= 768,
            [a, n] = (0, i.useState)("RING"),
            [o, r] = (0, i.useState)(!1),
            [l, s] = (0, i.useState)(0),
            [d, x] = (0, i.useState)(null),
            [R, L] = (0, i.useState)(0),
            W = (0, i.useRef)(null),
            B = (0, i.useRef)({
                RING: null,
                METABOLISM: null,
                HOME: null,
                VISION: null
            }),
            P = (0, i.useMemo)(() => V.findIndex(e => e.id === a), [a]);
        (0, i.useLayoutEffect)(() => {
            let e = () => {
                    let e = W.current;
                    if (!e) return;
                    let t = e.querySelectorAll('[data-metric-item="true"]'),
                        i = 0;
                    t.forEach(e => {
                        let t = e.offsetWidth;
                        t > i && (i = t)
                    }), i && L(i)
                },
                t = setTimeout(() => {
                    e()
                }, 0),
                i = () => e();
            return window.addEventListener("resize", i), () => {
                window.removeEventListener("resize", i), t && clearTimeout(t)
            }
        }, []), (0, i.useLayoutEffect)(() => {
            let e = W.current;
            e && R && e.style.setProperty("--itemWidth", `${R}px`)
        }, [R]), (0, i.useEffect)(() => {
            let e = navigator.connection;
            if (e ? .saveData) return;
            let t = V.filter(e => e.id !== a).map(e => e.videoSrc).filter(Boolean).map(e => (0, c.getCompressedAssetUrl)(e.startsWith("/") ? e : `/${e}`));
            t.forEach(e => {
                if (document.head.querySelector(`link[rel="prefetch"][href="${e}"]`)) return;
                let t = document.createElement("link");
                t.rel = "prefetch", t.href = e, t.crossOrigin = "anonymous", t.setAttribute("fetchpriority", "low"), document.head.appendChild(t)
            })
        }, []), (0, i.useEffect)(() => {
            let e = window.requestAnimationFrame(() => {
                Object.keys(B.current).forEach(e => {
                    let t = B.current[e];
                    if (t)
                        if (e === a) {
                            try {
                                t.currentTime = 0
                            } catch (e) {}
                            t.play().catch(() => void 0)
                        } else t.pause()
                })
            });
            return () => window.cancelAnimationFrame(e)
        }, [a]), (0, i.useEffect)(() => {
            let e = V.map((e, t) => t).filter(e => e !== P);
            0 === e.length || x(e[Math.floor(Math.random() * e.length)])
        }, []), (0, i.useEffect)(() => {
            if (o) return;
            let e = Math.floor(3001 * Math.random()) + 5e3,
                t = window.setTimeout(() => {
                    null !== d && d !== P && s(e => e + 1)
                }, e);
            return () => {
                clearTimeout(t)
            }
        }, [P, o, l, d]);
        let T = V.find(e => e.id === a) || V[0],
            E = e => e ? (0, c.getCompressedAssetUrl)(e.startsWith("/") ? e : `/${e}`) : "";
        return (0, t.jsx)(m.SectionWrapper, {
            $hasVerticalMargin: !0,
            id: "app-section",
            style: {
                transform: "translateZ(0)"
            },
            children: (0, t.jsx)(h, {
                role: "region",
                "aria-label": "Ultrahuman app features",
                children: (0, t.jsxs)(g, {
                    children: [(0, t.jsxs)(b, {
                        children: ["All in", (0, t.jsx)("br", {}), "one app."]
                    }), (0, t.jsxs)(k, {
                        children: [(0, t.jsx)(j, {
                            src: e ? "web_v2/homepage-v3/app-section/mobile-mockup-sm.png" : "web_v2/homepage-v3/app-section/hand-phone-mockup.png",
                            height: 4444,
                            width: 5e3,
                            alt: "Ultrahuman app interface"
                        }), (0, t.jsx)($, {
                            children: V.filter(e => e.videoSrc).map(e => (0, t.jsx)(S, {
                                $isActive: a === e.id,
                                src: E(e.videoSrc),
                                poster: E(e.posterSrc ? ? ""),
                                preload: a === e.id ? "auto" : "metadata",
                                autoPlay: a === e.id,
                                loop: !0,
                                muted: !0,
                                playsInline: !0,
                                "aria-hidden": a !== e.id,
                                ref: t => {
                                    B.current[e.id] = t
                                }
                            }, e.id))
                        }), (0, t.jsxs)(N, {
                            ref: W,
                            role: "tablist",
                            "aria-label": "App features",
                            children: [(0, t.jsx)(I, {
                                $index: P
                            }), V.map((e, i) => {
                                let a = e.icon,
                                    s = d === i && !o && P !== i;
                                return (0, t.jsxs)(z, {
                                    "data-metric-item": "true",
                                    $isActive: P === i,
                                    $disablePulses: o,
                                    onClick: () => {
                                        n(e.id), o || r(!0)
                                    },
                                    role: "tab",
                                    "aria-selected": P === i,
                                    "aria-controls": `panel-${e.id}`,
                                    children: [s && (0, t.jsxs)(A, {
                                        className: "pulses",
                                        "aria-hidden": "true",
                                        children: [(0, t.jsx)("span", {
                                            className: "ring"
                                        }), (0, t.jsx)("span", {
                                            className: "ring"
                                        }), (0, t.jsx)("span", {
                                            className: "ring"
                                        })]
                                    }, `pulse-${l}`), (0, t.jsx)("div", {
                                        className: "icon",
                                        children: (0, t.jsx)(a, {
                                            fill: P === i ? "#ffffff" : "rgba(255,255,255,0.4)"
                                        })
                                    }), (0, t.jsx)("span", {
                                        className: "label",
                                        children: e.label
                                    })]
                                }, e.id)
                            })]
                        }), (0, t.jsx)(f, {
                            children: (0, t.jsx)(C, {
                                children: (0, t.jsx)(v, {
                                    id: `panel-${T.id}`,
                                    role: "tabpanel",
                                    "aria-live": "polite",
                                    children: T.subtitle
                                }, T.id)
                            })
                        })]
                    }), (0, t.jsx)(_, {
                        children: (0, t.jsx)(v, {
                            role: "status",
                            "aria-live": "polite",
                            children: T.subtitle
                        }, T.id)
                    }), (0, t.jsx)(y, {
                        children: M.map(i => {
                            let a;
                            return (0, t.jsx)(w, {
                                children: (0, t.jsx)(p.ButtonV2, {
                                    "data-buttontype": "appstore" === i.key ? "app_download_appstore_button" : "app_download_playstore_button",
                                    ...(a = i.Icon, {
                                        variant: "transparentLight",
                                        label: e ? i.buttonLabelM : i.buttonLabel,
                                        href: i.link,
                                        startIcon: (0, t.jsx)(a, {})
                                    })
                                })
                            }, i.key)
                        })
                    })]
                })
            })
        })
    }
    var L = e.i(55825),
        W = e.i(69869);
    let B = l.default.div.withConfig({
        displayName: "BannerGrid__Grid",
        componentId: "sc-ee4b09d-0"
    })
    `
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({$hasGap:e})=>e?"16px":"0"};

  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    grid-template-columns: repeat(${({$columns:e})=>e}, 1fr);
  }
`, P = ({
        className: e,
        items: i,
        columnsDesktop: a = 2,
        hasVerticalMargin: n,
        hasGap: o = !0,
        ...r
    }) => (0, t.jsx)(m.SectionWrapper, {
        as: "section",
        $hasVerticalMargin: n,
        ...r,
        children: (0, t.jsx)(B, {
            className: e,
            $columns: a,
            $hasGap: o,
            children: i.map((e, i) => (0, t.jsx)(W.default, { ...e,
                inGrid: !0
            }, i))
        })
    });
    var T = e.i(14681),
        E = e.i(13691),
        U = e.i(18888),
        H = e.i(46031),
        F = e.i(68489),
        G = e.i(9674),
        O = e.i(33535);
    let D = e => !!e && "object" == typeof e && "component" in e,
        X = (0, F.default)(() => e.A(60501), {
            loadableGenerated: {
                modules: [97611]
            },
            ssr: !1
        }),
        K = (0, l.default)(({
            className: e,
            items: a,
            autoplayDelay: n = 6e3,
            loop: o = !0,
            stopOnInteraction: r = !1,
            autoplayStopAtEnd: l = !1,
            ariaLabel: s = "Featured content carousel"
        }) => {
            let {
                width: d,
                height: p
            } = (0, u.useWindowSize)(), m = (0, i.useMemo)(() => d < 768, [d]), h = (0, i.useMemo)(() => (0, E.default)({
                delay: n,
                stopOnInteraction: r,
                playOnInit: !0,
                stopOnLastSnap: l
            }), [n, r, l]), g = (0, i.useRef)(null), b = a.length > 1, f = (0, i.useMemo)(() => b ? [h] : [], [h, b]), [x, v] = (0, T.default)({
                loop: o,
                align: "center",
                slidesToScroll: 1
            }, f), [y, w] = (0, i.useState)(0), _ = (0, i.useRef)(null), C = (0, i.useRef)([]), [k, j] = (0, i.useState)(!1), [$, S] = (0, i.useState)(!1), N = (0, i.useMemo)(() => a[y], [a, y]), I = (0, i.useMemo)(() => N && "function" != typeof N && D(N) ? N.video ? ? null : null, [N]), A = !!I, [V, M] = (0, i.useState)(A), [z, R] = (0, i.useState)(!1), L = (0, i.useMemo)(() => I ? {
                desktop: (0, c.getCompressedAssetUrl)(I.desktop),
                mobile: (0, c.getCompressedAssetUrl)(I.mobile),
                thumbnail: (0, c.getCompressedAssetUrl)(I.thumbnail)
            } : null, [I]), W = (0, i.useMemo)(() => L ? k ? m ? L.mobile : L.desktop : L.thumbnail : "", [k, m, L]);
            (0, i.useEffect)(() => {
                if (A) {
                    M(!0), R(!1);
                    return
                }
                if (V) {
                    R(!0);
                    let e = setTimeout(() => {
                        M(!1), R(!1)
                    }, 250);
                    return () => clearTimeout(e)
                }
            }, [A, V]), (0, i.useEffect)(() => {
                if (!L) return;
                let e = [],
                    t = t => {
                        let i = document.createElement("video");
                        i.src = t, i.preload = "auto", i.muted = !0, i.playsInline = !0, e.push(i)
                    };
                return t(m ? L.mobile : L.desktop), t(L.thumbnail), () => {
                    e.forEach(e => {
                        e.pause(), e.src = "", e.load()
                    })
                }
            }, [L, m]);
            let B = (0, i.useCallback)(() => {
                    if (j(!0), m && S(!0), g.current && "function" == typeof g.current.stop) try {
                        g.current.stop()
                    } catch (e) {
                        console.warn("Failed to stop autoplay:", e)
                    }
                }, [m]),
                P = (0, i.useCallback)(() => {
                    if (j(!1), S(!1), b && g.current && "function" == typeof g.current.play) try {
                        g.current.play()
                    } catch (e) {
                        console.warn("Failed to resume autoplay:", e)
                    }
                }, [b]),
                F = (0, i.useMemo)(() => {
                    if (L) return {
                        autoplay: !m || k,
                        controls: k,
                        responsive: !0,
                        fluid: !0,
                        sources: W ? [{
                            src: W,
                            type: "video/mp4"
                        }] : [],
                        playsinline: !0,
                        preload: "auto",
                        muted: !k,
                        loop: !k && !m,
                        html5: {
                            vhs: {
                                overrideNative: !0
                            },
                            nativeAudioTracks: !1,
                            nativeVideoTracks: !1
                        }
                    }
                }, [W, k, m, L]),
                K = (0, i.useMemo)(() => {
                    let e = {
                        variant: "light",
                        rounded: "full",
                        fill: !0
                    };
                    if (!a || 0 === a.length) return e;
                    let t = a[y];
                    if (D(t)) {
                        let e;
                        return {
                            variant: t.handleTheme ? ? "light",
                            rounded: "boolean" == typeof(e = t.handleRounded) ? e ? "full" : "sm" : e ? ? "full",
                            fill: t.handleFill ? ? !0
                        }
                    }
                    return e
                }, [a, y]),
                Q = (0, i.useCallback)(() => {
                    _.current && (_.current.kill(), _.current = null)
                }, []),
                ee = (0, i.useCallback)(() => {
                    C.current.forEach(e => {
                        e && U.default.set(e, {
                            clearProps: "all",
                            width: "0%"
                        })
                    })
                }, []),
                et = (0, i.useCallback)(e => {
                    Q(), ee();
                    let t = C.current[y];
                    t && (U.default.set(t, {
                        width: "0%"
                    }), _.current = U.default.to(t, {
                        width: "100%",
                        duration: Math.max(0, e) / 1e3,
                        ease: "none",
                        delay: .24
                    }))
                }, [Q, ee, y]),
                ei = (0, i.useCallback)(() => {
                    v && (w(v.selectedScrollSnap()), S(!1), j(!1))
                }, [v]),
                ea = (0, i.useCallback)(() => {
                    if (v && (Q(), v.scrollPrev(), b && g.current && "function" == typeof g.current.reset)) try {
                        g.current.reset()
                    } catch (e) {
                        console.warn("Failed to reset autoplay:", e)
                    }
                }, [v, Q, b]),
                en = (0, i.useCallback)(() => {
                    if (v && (Q(), v.scrollNext(), b && g.current && "function" == typeof g.current.reset)) try {
                        g.current.reset()
                    } catch (e) {
                        console.warn("Failed to reset autoplay:", e)
                    }
                }, [v, Q, b]),
                eo = (0, i.useCallback)(e => {
                    if (!v || v.selectedScrollSnap() === e) return void B();
                    let t = () => {
                        B(), v.off("settle", t)
                    };
                    v.on("settle", t), v.scrollTo(e)
                }, [v, B]);
            return (0, i.useEffect)(() => {
                if (!v) return;
                ei(), v.on("select", ei);
                let e = v.plugins();
                g.current = e ? .autoplay || null;
                let t = () => {
                        g.current && "function" == typeof g.current.timeUntilNext && et(g.current.timeUntilNext() ? ? n)
                    },
                    i = () => {
                        Q()
                    };
                if (v.on("autoplay:timerset", t), v.on("autoplay:timerstopped", i), v.on("autoplay:stop", i), b && g.current && "function" == typeof g.current.play) try {
                    window.requestAnimationFrame(() => {
                        try {
                            g.current && "function" == typeof g.current.play && g.current.play(), g.current && "function" == typeof g.current.reset && g.current.reset()
                        } catch (e) {
                            console.warn("Failed to start autoplay:", e)
                        }
                    })
                } catch (e) {
                    console.warn("Failed to initialize autoplay:", e)
                }
                let a = () => {
                    if ("visible" === document.visibilityState && b && g.current && "function" == typeof g.current.reset) try {
                        g.current.reset()
                    } catch (e) {
                        console.warn("Failed to reset autoplay on visibility change:", e)
                    }
                };
                return document.addEventListener("visibilitychange", a), () => {
                    v.off("select", ei), v.off("autoplay:timerset", t), v.off("autoplay:timerstopped", i), v.off("autoplay:stop", i), document.removeEventListener("visibilitychange", a)
                }
            }, [v, ei, et, Q, b, n]), (0, i.useEffect)(() => {
                let e = e => {
                    k && "Escape" === e.key && (e.preventDefault(), P())
                };
                return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
            }, [k, P]), (0, t.jsxs)("div", {
                className: `${e??""} ${k?"is-video-expanded":""}`,
                role: "group",
                "aria-roledescription": "carousel",
                "aria-label": s,
                "aria-live": "off",
                children: [(0, t.jsx)("div", {
                    className: "embla",
                    ref: x,
                    children: (0, t.jsx)("div", {
                        className: "embla__container",
                        children: a.map((e, n) => {
                            let o = () => {
                                    eo(n)
                                },
                                r = "function" == typeof e ? i.default.createElement(e, {
                                    openModal: o
                                }) : D(e) ? i.default.createElement(e.component, {
                                    openModal: o
                                }) : i.default.isValidElement(e) ? i.default.cloneElement(e, {
                                    openModal: o
                                }) : e;
                            return (0, t.jsx)("div", {
                                className: "embla__slide",
                                role: "group",
                                "aria-roledescription": "slide",
                                "aria-label": `Slide ${n+1} of ${a.length}`,
                                children: r
                            }, n)
                        })
                    })
                }), V && (!m || $ || k) && (0, t.jsxs)(Z, {
                    isExpanded: k,
                    width: d,
                    height: p,
                    className: `${k?"expanded":""} ${z?"is-fading-out":""}`,
                    children: [F && (0, t.jsx)(X, {
                        options: F
                    }, W), !m && !k && (0, t.jsx)(q, {
                        onClick: B,
                        "aria-label": "Play video",
                        "data-buttontype": "animation replay",
                        children: (0, t.jsx)(G.PlayWhite, {})
                    }), k && (0, t.jsx)(J, {
                        onClick: P,
                        "aria-label": "Close video",
                        children: (0, t.jsx)(O.CrossDark, {
                            style: {
                                width: "1rem",
                                height: "1rem"
                            },
                            fill: "white"
                        })
                    })]
                }), b && (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)("div", {
                        className: "nav-btn prev",
                        children: (0, t.jsx)(H.CarouselButton, {
                            onClick: ea,
                            "aria-label": "Previous",
                            direction: "prev",
                            variant: K.variant,
                            rounded: K.rounded,
                            fill: K.fill
                        })
                    }), (0, t.jsx)("div", {
                        className: "nav-btn next",
                        children: (0, t.jsx)(H.CarouselButton, {
                            onClick: en,
                            "aria-label": "Next",
                            direction: "next",
                            variant: K.variant,
                            rounded: K.rounded,
                            fill: K.fill
                        })
                    }), (0, t.jsx)("div", {
                        className: "indicator-wrapper",
                        "aria-hidden": "true",
                        children: a.map((e, i) => (0, t.jsx)("div", {
                            className: `dot ${i===y?"is-active":""}`,
                            children: (0, t.jsx)("div", {
                                className: "progress",
                                ref: e => {
                                    C.current[i] = e
                                }
                            })
                        }, i))
                    })]
                }), k && (0, t.jsx)(Y, {
                    isVisible: !0,
                    onClick: P,
                    "aria-hidden": "true"
                })]
            })
        }).withConfig({
            displayName: "HeroCarousel",
            componentId: "sc-68d3faaa-0"
        })
    `
  position: relative;
  width: 100%;
  background-color: #000;

  .embla {
    overflow: hidden;
  }
  .embla__container {
    display: flex;
  }
  .embla__slide {
    flex: 0 0 100%;
    min-width: 0;
    position: relative;
  }

  &.is-video-expanded {
    .embla {
      overflow: visible !important;
    }
  }

  .nav-btn {
    position: absolute;
    z-index: 2;
    top: 50%;
    transform: translateY(-50%);
    border: none;
    background: transparent;
    cursor: pointer;
  }
  .nav-btn.prev {
    left: 28px;
  }
  .nav-btn.next {
    right: 28px;
  }

  @keyframes hero-nav-pulse {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.06);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .circle-blur-btn {
      animation: none;
    }
  }

  .indicator-wrapper {
    position: absolute;
    left: 50%;
    bottom: 24px;
    transform: translateX(-50%);
    display: inline-flex;
    padding: 8px;
    justify-content: center;
    align-items: flex-start;
    gap: 7.179px;
    border-radius: 26px;
    background: rgba(0, 0, 0, 0.2);
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
  }

  .dot {
    width: 6px;
    height: 6px;
    border-radius: 26px;
    background: rgba(255, 255, 255, 0.2);
    overflow: hidden;
    flex-shrink: 0;
    transition: width 220ms ease-in-out;
  }

  .dot .progress {
    width: 0%;
    height: 100%;
    background: #fff;
    border-radius: inherit;
  }

  .dot.is-active {
    width: 32px;
  }

  /* Hide navigation controls and indicators on mobile */
  @media (max-width: ${({theme:e})=>e.globalV2.md.minWidth}) {
    .nav-btn {
      display: none;
    }
  }
`, Z = l.default.div.withConfig({
        displayName: "HeroCarousel__VideoFloatingContainer",
        componentId: "sc-68d3faaa-1"
    })
    `
  position: ${({isExpanded:e})=>e?"fixed":"absolute"}; /* Fixed for expanded (modal), absolute for mini (relative to slide) */
  z-index: ${({isExpanded:e})=>e?9999:100}; /* Lower z-index for mini video to stay below header */
  bottom: ${({isExpanded:e})=>e?"50%":"3%"};
  right: ${({isExpanded:e})=>e?"50%":"3%"};
  transform: ${({isExpanded:e})=>e?"translate(50%, 50%)":"none"};
  width: ${({isExpanded:e,width:t})=>e?.9*t+"px":"280px"};
  height: ${({isExpanded:e,height:t})=>e?Math.min(.9*t,.75*t)+"px":"157px"};
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  overflow: hidden;
  background: #000;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  justify-content: center;

  /* fade out only when the active slide has no video */
  &.is-fading-out {
    opacity: 0;
  }

  .video-player {
    width: 100%;
    height: 100%;
  }

  .video-js {
    width: 100% !important;
    height: 100% !important;
  }

  .vjs-tech {
    width: 100% !important;
    height: 100% !important;
    object-fit: contain;
  }

  /* Maintain 9:16 aspect ratio for mobile expanded video */
  @media (max-width: 767px) {
    &.expanded {
      aspect-ratio: 9/16;
      height: 70vh !important;
      width: auto !important;
      max-width: 90vw;
    }
  }

  .vjs-big-play-button {
    display: none !important;
  }

  .vjs-paused .vjs-big-play-button {
    display: none !important;
  }

  .vjs-control-bar {
    display: ${({isExpanded:e})=>e?"flex":"none"} !important;
  }

  .vjs-has-started .vjs-control-bar {
    display: ${({isExpanded:e})=>e?"flex":"none"} !important;
  }

  /* Desktop-specific video player styles */
  @media (min-width: 768px) {
    &.expanded {
      aspect-ratio: 16/9;
      height: 75vh !important;
      width: auto !important;
      max-width: 90vw;

      .vjs-tech {
        object-fit: contain !important;
      }

      .vjs-control-bar {
        position: absolute !important;
        bottom: 0 !important;
        left: 0 !important;
        right: 0 !important;
        background: linear-gradient(transparent, rgba(0, 0, 0, 0.7)) !important;
        z-index: 10 !important;
      }
    }
  }

  /* Mobile-specific video player styles */
  @media (max-width: 767px) {
    &.expanded {
      .vjs-big-play-button {
        display: none !important;
      }

      .vjs-paused .vjs-big-play-button {
        display: none !important;
      }

      .vjs-control-bar {
        display: none !important;
        position: absolute !important;
        bottom: 0 !important;
        left: 0 !important;
        right: 0 !important;
        background: linear-gradient(transparent, rgba(0, 0, 0, 0.7)) !important;
        z-index: 10 !important;
      }

      .vjs-has-started .vjs-control-bar {
        display: flex !important;
      }

      .vjs-playing .vjs-control-bar {
        display: flex !important;
      }

      /* Hide controls initially and show only when video is playing */
      .vjs-tech {
        object-fit: contain !important;
      }

      /* Ensure video container is properly positioned */
      .video-js {
        position: relative !important;
      }
    }
  }
`, q = l.default.button.withConfig({
        displayName: "HeroCarousel__PlayOverlay",
        componentId: "sc-68d3faaa-2"
    })
    `
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: none;
  border: none;
  cursor: pointer;
  z-index: 2;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  -webkit-backdrop-filter: blur(1.6671983003616333px);
  backdrop-filter: blur(1.6671983003616333px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 1);
    transform: translate(-50%, -50%) scale(1.1);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
  }

  svg {
    width: 40px;
    height: 40px;
    position: relative;
    left: 1.5px; /* visually center the triangle */
  }
`, Y = l.default.div.withConfig({
        displayName: "HeroCarousel__VideoOverlay",
        componentId: "sc-68d3faaa-3"
    })
    `
  position: fixed; /* Keep fixed for modal overlay */
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  z-index: 9998;
  opacity: ${({isVisible:e})=>+!!e};
  visibility: ${({isVisible:e})=>e?"visible":"hidden"};
  transition: opacity 0.3s ease, visibility 0.3s ease;
  pointer-events: ${({isVisible:e})=>e?"auto":"none"};
`, J = l.default.button.withConfig({
        displayName: "HeroCarousel__CloseButton",
        componentId: "sc-68d3faaa-4"
    })
    `
  position: absolute;
  top: 12px;
  right: 12px;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  font-size: 2rem;
  cursor: pointer;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
`, Q = l.default.div.withConfig({
        displayName: "ProductCarouselLarge__Header",
        componentId: "sc-6f43b098-0"
    })
    `
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  margin-bottom: 32px;

  @media (max-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    padding: 0 20px;
  }
`, ee = l.default.h2.withConfig({
        displayName: "ProductCarouselLarge__Title",
        componentId: "sc-6f43b098-1"
    })
    `
  color: #000;
  font-size: 36px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 43.2px */
  letter-spacing: -1.44px;
  margin: 0;

  @media (max-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    font-size: 28px;
    letter-spacing: -1.12px;
  }
`, et = l.default.div.withConfig({
        displayName: "ProductCarouselLarge__Controls",
        componentId: "sc-6f43b098-2"
    })
    `
  display: flex;
  gap: 12px;
  align-items: center;
`, ei = l.default.div.withConfig({
        displayName: "ProductCarouselLarge__CarouselContainer",
        componentId: "sc-6f43b098-3"
    })
    `
  .embla {
    overflow: hidden;
    padding: 0 40px;
    @media (max-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
      padding: 0 20px;
    }
  }

  .embla__container {
    display: flex;
    gap: 12px;
    @media (min-width: ${({theme:e})=>e.globalV2.md.minWidth}) {
      gap: 16px;
    }
  }

  .embla__slide {
    flex: 0 0 95%;
    min-width: 0;

    @media (min-width: ${({theme:e})=>e.globalV2.lg.minWidth}) {
      flex: 0 0 calc(52%);
    }
  }
`, ea = l.default.div.withConfig({
        displayName: "ProductCarouselLarge__ProductItem",
        componentId: "sc-6f43b098-4"
    })
    `
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  height: 600px;
  display: flex;
  flex-direction: column;
  content-visibility: auto;
  contain-intrinsic-size: 600px;

  @media (max-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    height: 500px;
  }

  @media (min-width: ${({theme:e})=>e.globalV2.xxl.minWidth}) {
    height: 65vh;
    min-height: 700px;
  }
`, en = (0, l.default)(s.CustomImage).withConfig({
        displayName: "ProductCarouselLarge__ProductImage",
        componentId: "sc-6f43b098-5"
    })
    `
  position: absolute !important;
  top: 0;
  left: 0;
  width: 100% !important;
  height: 100% !important;
  object-fit: cover;
  z-index: 1;
`, eo = l.default.div.withConfig({
        displayName: "ProductCarouselLarge__ProductContent",
        componentId: "sc-6f43b098-6"
    })
    `
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 32px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 12px;

  &.bg-gradient {
    background: linear-gradient(to bottom, transparent 0%, black 100%);
  }

  @media (max-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    padding: 24px;
    gap: 12px;
    text-align: left;
  }
`, er = l.default.h3.withConfig({
        displayName: "ProductCarouselLarge__ProductTitle",
        componentId: "sc-6f43b098-7"
    })
    `
  color: ${({textColor:e})=>e||"#FFF"};
  font-size: 36px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 43.2px */
  letter-spacing: -1.44px;
  margin: 0;

  @media (max-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    font-size: 24px;
    letter-spacing: -0.48px;
  }
`, el = l.default.p.withConfig({
        displayName: "ProductCarouselLarge__ProductDescription",
        componentId: "sc-6f43b098-8"
    })
    `
  color: ${({textColor:e})=>e||"#FFF"};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 20.8px */
  letter-spacing: -0.32px;
  margin: 0;
  flex-grow: 1;
  max-width: 460px;

  @media (max-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    font-size: 14px;
  }
`, es = l.default.span.withConfig({
        displayName: "ProductCarouselLarge__ProductCaption",
        componentId: "sc-6f43b098-9"
    })
    `
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 16.8px */
  text-transform: uppercase;
`, ed = l.default.div.withConfig({
        displayName: "ProductCarouselLarge__ProductActions",
        componentId: "sc-6f43b098-10"
    })
    `
  display: flex;
  gap: 12px;

  @media (max-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    gap: 8px;
    justify-content: flex-start;
  }
`, ep = (0, l.default)(({
        className: e,
        items: a,
        title: n,
        id: o
    }) => {
        let {
            width: r
        } = (0, u.useWindowSize)(), l = (0, i.useMemo)(() => ({
            loop: !1,
            align: "start",
            slidesToScroll: 1,
            skipSnaps: !1,
            dragFree: !1
        }), []), [s, d] = (0, T.default)(l), [c, m] = (0, i.useState)(!1), [h, g] = (0, i.useState)(!1), b = (0, i.useCallback)(() => {
            d && d.scrollPrev()
        }, [d]), f = (0, i.useCallback)(() => {
            d && d.scrollNext()
        }, [d]), x = (0, i.useCallback)(() => {
            d && (m(d.canScrollPrev()), g(d.canScrollNext()))
        }, [d]);
        (0, i.useEffect)(() => {
            d && (x(), d.on("select", x), d.on("reInit", x))
        }, [d, x]), (0, i.useEffect)(() => () => {
            d && d.destroy()
        }, [d]);
        let v = `${n} carousel`;
        return (0, t.jsxs)("section", {
            className: e,
            "aria-roledescription": "carousel",
            "aria-label": v,
            "aria-live": "off",
            id: o,
            children: [(0, t.jsxs)(Q, {
                children: [(0, t.jsx)(ee, {
                    id: "product-carousel-large-heading",
                    children: n
                }), (0, t.jsxs)(et, {
                    children: [(0, t.jsx)(H.CarouselButton, {
                        onClick: b,
                        variant: "light",
                        rounded: "full",
                        fill: !0,
                        direction: "prev",
                        "aria-label": "Previous product",
                        disabled: !c
                    }), (0, t.jsx)(H.CarouselButton, {
                        onClick: f,
                        variant: "light",
                        rounded: "full",
                        fill: !0,
                        direction: "next",
                        "aria-label": "Next product",
                        disabled: !h
                    })]
                })]
            }), (0, t.jsx)(ei, {
                children: (0, t.jsx)("div", {
                    className: "embla",
                    ref: s,
                    "aria-labelledby": "product-carousel-large-heading",
                    children: (0, t.jsx)("div", {
                        className: "embla__container",
                        children: a.map((e, i) => {
                            var n;
                            return (0, t.jsx)("div", {
                                className: "embla__slide",
                                role: "group",
                                "aria-roledescription": "slide",
                                "aria-label": `Item ${i+1} of ${a.length}`,
                                children: (0, t.jsxs)(ea, {
                                    children: [(0, t.jsx)(en, {
                                        src: "string" == typeof(n = e.image) ? n : r && r < 768 ? n.mobile : n.web,
                                        alt: "string" == typeof e.title ? e.title : "Product Image",
                                        fill: !0,
                                        decoding: "async",
                                        sizes: "(max-width: 768px) 100vw, (max-width: 1440px) 50vw, 33vw"
                                    }), (0, t.jsxs)(eo, {
                                        className: e.bgGradient ? "bg-gradient" : "",
                                        children: [e.caption && (0, t.jsx)(es, {
                                            children: e.caption
                                        }), (0, t.jsx)(er, {
                                            textColor: e.textColor,
                                            children: e.title
                                        }), (0, t.jsx)(el, {
                                            textColor: e.textColor,
                                            children: e.description
                                        }), (e.cta || e.ctaAlt) && (0, t.jsxs)(ed, {
                                            children: [e.cta && (0, t.jsx)(p.ButtonV2, {
                                                variant: "blue",
                                                ...e.cta,
                                                children: e.cta.label
                                            }), e.ctaAlt && (0, t.jsx)(p.ButtonV2, {
                                                variant: "transparentLight",
                                                ...e.ctaAlt,
                                                children: e.ctaAlt.label
                                            })]
                                        })]
                                    })]
                                })
                            }, e.id)
                        })
                    })
                })
            })]
        })
    }).withConfig({
        displayName: "ProductCarouselLarge",
        componentId: "sc-6f43b098-11"
    })
    `
  padding: 40px 0;
  color: #000000;
  @media (max-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    padding: 96px 0;
  }
`, ec = l.default.div.withConfig({
        displayName: "ProductCarouselSmall__Header",
        componentId: "sc-86846e7f-0"
    })
    `
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  margin-bottom: 32px;

  @media (max-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    padding: 0 20px;
    margin-bottom: 32px;
  }
`, em = l.default.h2.withConfig({
        displayName: "ProductCarouselSmall__Title",
        componentId: "sc-86846e7f-1"
    })
    `
  font-weight: 500;
  font-size: 36px;
  letter-spacing: -1.44px;
  line-height: 1.2;
  margin: 0;

  @media (max-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    font-size: 28px;
    letter-spacing: -1.12px;
  }
`, eu = l.default.div.withConfig({
        displayName: "ProductCarouselSmall__Controls",
        componentId: "sc-86846e7f-2"
    })
    `
  display: flex;
  gap: 12px;
  align-items: center;
`, eh = l.default.div.withConfig({
        displayName: "ProductCarouselSmall__CarouselContainer",
        componentId: "sc-86846e7f-3"
    })
    `
  .embla {
    overflow: hidden;
    padding: 0 40px;
    @media (max-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
      padding: 0 20px;
    }
  }

  .embla__container {
    display: flex;
    gap: 12px;
    @media (min-width: ${({theme:e})=>e.globalV2.md.minWidth}) {
      gap: 16px;
    }
  }

  .embla__slide {
    flex: 0 0 95%;
    min-width: 0;

    @media (min-width: ${({theme:e})=>e.globalV2.md.minWidth}) {
      flex: 0 0 calc(50% - 12px);
    }

    @media (min-width: ${({theme:e})=>e.globalV2.lg.minWidth}) {
      flex: 0 0 calc(33.333% - 16px);
      gap: 16px;
    }
  }
`, eg = l.default.div.withConfig({
        displayName: "ProductCarouselSmall__ProductItem",
        componentId: "sc-86846e7f-4"
    })
    `
  position: relative;
  border-radius: var(--card-radius, 20px);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 460px;
  content-visibility: auto;
  contain-intrinsic-size: 460px;
  /* Disable native borders entirely */
  border: none;
  /* Use inset box-shadow to render optional borders when provided */
  box-shadow: ${({borderColor:e})=>e?`
    inset 0 0 0
    var (--card - border - width, 1 px) $ {
        e
    }
    `:"none"};
  /* Ensure the background does not bleed into the border radius */
  background-clip: padding-box;
  background-image: url(${({backgroundImage:e})=>e});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    min-height: 500px;
  }

  @media (min-width: ${({theme:e})=>e.globalV2.xxl.minWidth}) {
    min-height: 640px;
  }
`, eb = l.default.div.withConfig({
        displayName: "ProductCarouselSmall__ProductContent",
        componentId: "sc-86846e7f-5"
    })
    `
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 24px;
  display: flex;
  flex-direction: column;
  text-align: center;
  background: transparent;
  z-index: 2;
  gap: 4px;

  @media (max-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    padding: 20px;
    text-align: left;
  }
`, ef = l.default.h3.withConfig({
        displayName: "ProductCarouselSmall__ProductTitle",
        componentId: "sc-86846e7f-6"
    })
    `
  color: ${({textColor:e})=>e||"#FFF"};
  text-align: center;
  text-shadow: 0 0 1px rgba(0, 0, 0, 0.25);
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 33.6px */
  letter-spacing: -1.12px;
  margin: 0;

  @media (max-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    font-size: 24px;
    letter-spacing: -0.48px;
    text-align: left;
  }
`, ex = l.default.p.withConfig({
        displayName: "ProductCarouselSmall__ProductDescription",
        componentId: "sc-86846e7f-7"
    })
    `
  color: ${({textColor:e})=>e||"#FFF"};
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 19.2px */
  letter-spacing: -0.64px;
  margin: 0;
  flex-grow: 1;

  @media (max-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    font-size: 14px;
    text-align: left;
  }
`, ev = l.default.div.withConfig({
        displayName: "ProductCarouselSmall__ProductActions",
        componentId: "sc-86846e7f-8"
    })
    `
  margin-top: 12px;
  display: flex;
  gap: 12px;
  justify-content: center;

  @media (max-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    // flex-direction: column;
    gap: 8px;
    justify-content: flex-start;
  }
`, ey = (0, l.default)(({
        className: e,
        items: a,
        title: n
    }) => {
        let o = (0, i.useMemo)(() => ({
                loop: !1,
                align: "start",
                slidesToScroll: 1,
                skipSnaps: !1,
                dragFree: !1
            }), []),
            [r, l] = (0, T.default)(o),
            [s, d] = (0, i.useState)(!1),
            [m, u] = (0, i.useState)(!1),
            h = (0, i.useCallback)(() => {
                l && l.scrollPrev()
            }, [l]),
            g = (0, i.useCallback)(() => {
                l && l.scrollNext()
            }, [l]),
            b = (0, i.useCallback)(() => {
                l && (d(l.canScrollPrev()), u(l.canScrollNext()))
            }, [l]);
        (0, i.useEffect)(() => {
            l && (b(), l.on("select", b), l.on("reInit", b))
        }, [l, b]), (0, i.useEffect)(() => () => {
            l && l.destroy()
        }, [l]);
        let f = n ? `${n} carousel` : "Product carousel";
        return (0, t.jsxs)("section", {
            className: e,
            "aria-roledescription": "carousel",
            "aria-label": f,
            "aria-live": "off",
            children: [(0, t.jsxs)(ec, {
                children: [(0, t.jsx)(em, {
                    id: "product-carousel-small-heading",
                    children: n
                }), (0, t.jsxs)(eu, {
                    children: [(0, t.jsx)(H.CarouselButton, {
                        onClick: h,
                        variant: "light",
                        rounded: "full",
                        fill: !0,
                        direction: "prev",
                        "aria-label": "Previous product",
                        disabled: !s
                    }), (0, t.jsx)(H.CarouselButton, {
                        onClick: g,
                        variant: "light",
                        rounded: "full",
                        fill: !0,
                        direction: "next",
                        "aria-label": "Next product",
                        disabled: !m
                    })]
                })]
            }), (0, t.jsx)(eh, {
                children: (0, t.jsx)("div", {
                    className: "embla",
                    ref: r,
                    "aria-labelledby": "product-carousel-small-heading",
                    children: (0, t.jsx)("div", {
                        className: "embla__container",
                        children: a.map((e, i) => (0, t.jsx)("div", {
                            className: "embla__slide",
                            role: "group",
                            "aria-roledescription": "slide",
                            "aria-label": `Item ${i+1} of ${a.length}`,
                            children: (0, t.jsx)(eg, {
                                borderColor: e.styling ? .borderColor,
                                backgroundImage: (0, c.getCompressedAssetUrl)(e.image ? .startsWith("/") ? e.image : `/${e.image}`),
                                children: (0, t.jsxs)(eb, {
                                    styling: e.styling,
                                    children: [(0, t.jsx)(ef, {
                                        textColor: e.textColor || e.styling ? .textColor,
                                        children: e.title
                                    }), (0, t.jsx)(ex, {
                                        textColor: e.textColor,
                                        descriptionColor: e.styling ? .descriptionColor,
                                        children: e.description
                                    }), (e.cta || e.ctaAlt) && (0, t.jsxs)(ev, {
                                        children: [e.cta && (0, t.jsx)(p.ButtonV2, {
                                            variant: "blue",
                                            ...e.cta,
                                            children: e.cta.label
                                        }), e.ctaAlt && (0, t.jsx)(p.ButtonV2, {
                                            variant: "transparentLight",
                                            ...e.ctaAlt,
                                            children: e.ctaAlt.label
                                        })]
                                    })]
                                })
                            })
                        }, e.id))
                    })
                })
            })]
        })
    }).withConfig({
        displayName: "ProductCarouselSmall",
        componentId: "sc-86846e7f-9"
    })
    `
  padding: 40px 0;
  color: #000000;
  /* Unified card visual tokens */
  --card-radius: 20px;
  --card-border-width: 1px;
  @media (max-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    padding: 96px 0;
  }
`;
    var ew = e.i(57758),
        e_ = e.i(69286),
        eC = e.i(54134),
        ek = e.i(72218),
        ej = e.i(91898),
        e$ = e.i(66243),
        eS = e.i(3115),
        eN = e.i(10670),
        eN = eN,
        eI = e.i(31732),
        eA = eN,
        eV = e.i(15575),
        eM = e.i(59207),
        ez = e.i(29282);
    let eR = l.default.div.withConfig({
        displayName: "GiftRecipientModal__RecipientFormContainer",
        componentId: "sc-220b8cce-0"
    })
    `
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 92px 0 120px;
`, eL = l.default.h2.withConfig({
        displayName: "GiftRecipientModal__RecipientFormTitle",
        componentId: "sc-220b8cce-1"
    })
    `
  color: #000;
  text-align: center;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
  letter-spacing: -0.96px;
  margin: 0;
`, eW = l.default.p.withConfig({
        displayName: "GiftRecipientModal__RecipientFormSubtitle",
        componentId: "sc-220b8cce-2"
    })
    `
  color: #000;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: -0.6px;
  margin: 0;
  max-width: 680px;
`, eB = l.default.div.withConfig({
        displayName: "GiftRecipientModal__RecipientFormFields",
        componentId: "sc-220b8cce-3"
    })
    `
  width: 100%;
  max-width: 680px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 48px;
`, eP = l.default.p.withConfig({
        displayName: "GiftRecipientModal__ErrorMessage",
        componentId: "sc-220b8cce-4"
    })
    `
  color: #ff0000;
  font-size: 14px;
  font-weight: 400;
  line-height: 120%;
  margin: 4px 0 0 0;
`, eT = l.default.div.withConfig({
        displayName: "GiftRecipientModal__InputContainer",
        componentId: "sc-220b8cce-5"
    })
    `
  display: flex;
  flex-direction: column;
`, eE = l.default.input.withConfig({
        displayName: "GiftRecipientModal__RecipientInput",
        componentId: "sc-220b8cce-6"
    })
    `
  width: 100%;
  display: flex;
  padding: 20px;
  align-items: center;
  flex-shrink: 0;

  border-radius: 10px;
  border: 1px solid
    ${({hasError:e})=>e?"#ff0000":"rgba(0, 0, 0, 0.06)"};
  background: #f9f9f9;

  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -0.48px;
  leading-trim: both;
  text-edge: cap;

  &::placeholder {
    color: rgba(0, 0, 0, 0.5);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
    letter-spacing: -0.48px;
    leading-trim: both;
    text-edge: cap;
  }

  &:focus {
    outline: none;
    border-color: ${({hasError:e})=>e?"#ff0000":"rgba(0, 0, 0, 0.12)"};
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.06);
    background: #ffffff;
  }
`, eU = ({
        visible: e,
        onClose: a
    }) => {
        let n = (0, ez.useCampaigns)(),
            [o, r] = (0, i.useState)(""),
            [l, s] = (0, i.useState)(""),
            [d, p] = (0, i.useState)(""),
            c = (0, ez.getCampaignByProduct)(n.campaigns, "ring"),
            m = (0, ez.getCampaignConfig)(c),
            u = (0, i.useMemo)(() => o.trim().length > 1 && eI.emailRegex.test(l), [o, l]);
        return e ? (0, t.jsx)(eA.default, {
            onClose: a,
            onCTA: () => {
                let e = m ? .active ? m ? .discountCode : void 0,
                    t = (0, eV.buildCheckoutUrl)(eM.ShopifyStore.IN, o, l, e);
                t && (window.location.href = t)
            },
            ctaLabel: "Checkout",
            ctaDisabled: !u,
            closeOnCTA: !1,
            children: (0, t.jsxs)(eR, {
                children: [(0, t.jsx)(eL, {
                    children: "Who is the Gift Card for?"
                }), (0, t.jsx)(eW, {
                    children: "Gift better health to the ones who matter most — a thoughtful surprise that doesn't feel last-minute."
                }), (0, t.jsxs)(eB, {
                    children: [(0, t.jsx)(eT, {
                        children: (0, t.jsx)(eE, {
                            "aria-label": "Recipient name",
                            placeholder: "Recipient name",
                            value: o,
                            onChange: e => r(e.target.value)
                        })
                    }), (0, t.jsxs)(eT, {
                        children: [(0, t.jsx)(eE, {
                            "aria-label": "Recipient email",
                            placeholder: "Recipient email",
                            value: l,
                            onChange: e => {
                                let t = e.target.value;
                                s(t), d && p(""), t && !eI.emailRegex.test(t) && p("Please enter a valid email address")
                            },
                            onBlur: () => {
                                l && !eI.emailRegex.test(l) && p("Please enter a valid email address")
                            },
                            hasError: !!d,
                            "aria-invalid": !!d,
                            "aria-describedby": d ? "email-error" : void 0
                        }), d && (0, t.jsx)(eP, {
                            id: "email-error",
                            role: "alert",
                            children: d
                        })]
                    })]
                })]
            })
        }) : null
    };
    var eH = e.i(26019);
    let eF = l.default.section.withConfig({
        displayName: "CampaignHeroBanner__HeroSection",
        componentId: "sc-a03e8611-0"
    })
    `
  background-color: #000;
  position: relative;
  width: 100vw;
  height: 87vh;
  height: 87lvh;
  overflow: hidden;
  padding-top: 50px;
  background: #000;

  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    height: 80vh;
    height: 80lvh;
  }

  animation: ${l.keyframes`
    from {
      opacity: 0;
      filter: blur(12px);
      } to {
        opacity: 1;
        filter: blur(0px);
    }
  `} 0.3s ease-in-out forwards;
  will-change: opacity, filter;

  .bg-image {
    z-index: 0;
  }
`, eG = l.default.div.withConfig({
        displayName: "CampaignHeroBanner__ContentSection",
        componentId: "sc-a03e8611-1"
    })
    `
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  font-size: 32px;
  position: relative;
  z-index: 2;

  // padding: 16px;
  font-weight: 500;
  text-align: center;
  width: 100%;
  // height: 100%;
  // border: 1px solid red;

  a {
    // margin-top: 20px;
    /* padding: ; */
  }

  padding: 6.4rem 0 6.4rem;

  @media (min-width: ${({theme:e})=>e.globalV2.md.minWidth}) {
    font-size: 56px;
    gap: 8px;

    padding: 7.2vh 0 6rem;
    padding: 7.2lvh 0 6rem;

    ${({$variant:e})=>"horizontal"===e&&`
    flex - direction: row;
    padding: 0 8 rem;
    max - width: 70 % ;
    margin: auto;
    justify - content: space - between;
    padding: 0 4 rem;
    `}

    a {
      // margin-top: 8px;
    }
  }

  @media (min-width: ${({theme:e})=>e.globalV2.xxxl.maxWidth}) {
    ${({$variant:e})=>"horizontal"===e&&`
    max - width: 50 % ;
    `}
  }
`, eO = l.default.div.withConfig({
        displayName: "CampaignHeroBanner__ContentTextContainer",
        componentId: "sc-a03e8611-2"
    })
    `
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;

  @media (min-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
    ${({$variant:e})=>"horizontal"===e&&`
    justify - content: center;
    align - items: flex - start;
    text - align: left;
    `}
  }
`, eD = l.default.h1.withConfig({
        displayName: "CampaignHeroBanner__Subtitle",
        componentId: "sc-a03e8611-3"
    })
    `
  color: #ffffff;
  text-align: center;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 120%;
  letter-spacing: -0.48px;

  @media (min-width: ${({theme:e})=>e.globalV2.md.minWidth}) {
    margin-bottom: ${({$variant:e})=>"horizontal"===e?"1.2rem":"unset"};
    display: ${({$variant:e})=>"horizontal"===e?"none":"unset"};
  }

  @media (min-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
    font-size: 16px;
    letter-spacing: -0.54px;
  }

  @media (min-width: ${({theme:e})=>e.globalV2.xxxl.minWidth}) {
    font-size: 2rem;
    letter-spacing: -1.5px;
    line-height: 90%;
  }
`, eX = l.default.h1.withConfig({
        displayName: "CampaignHeroBanner__ButtonAttachedSubtitle",
        componentId: "sc-a03e8611-4"
    })
    `
  color: #ffffff;
  text-align: center;
  font-style: normal;
  font-weight: 500;
  text-shadow: 0 0 24px rgba(255, 255, 255, 0.9);
  font-size: 16px;
  line-height: 120%;
  letter-spacing: -0.48px;
  display: none;

  @media (min-width: ${({theme:e})=>e.globalV2.md.minWidth}) {
    display: unset;
  }

  @media (min-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
    font-size: 16px;
    letter-spacing: -0.54px;
    margin-bottom: ${({$variant:e})=>"horizontal"===e?"1.2rem":"unset"};
  }

  @media (min-width: ${({theme:e})=>e.globalV2.xxxl.minWidth}) {
    font-size: 2rem;
    letter-spacing: -1.5px;
    line-height: 90%;
  }
`, eK = l.default.h2.withConfig({
        displayName: "CampaignHeroBanner__Title",
        componentId: "sc-a03e8611-5"
    })
    `
  font-family: 'futura-pt-condensed', sans-serif;
  color: #fff;
  text-align: center;
  font-style: normal;
  font-weight: 700;
  text-transform: uppercase;
  mix-blend-mode: lighten;
  width: ${({$variant:e})=>"horizontal"===e?"auto":"100%"};

  padding: 0 24px;

  // border: 1px solid red;

  font-size: 4.8rem;
  line-height: 90%;
  letter-spacing: -1.95px;
  text-transform: uppercase;

  @media (min-width: ${({theme:e})=>e.globalV2.sm.minWidth}) {
    font-size: 5.2rem;
  }

  @media (min-width: ${({theme:e})=>e.globalV2.md.minWidth}) {
    width: ${({$variant:e})=>"horizontal"===e?"auto":"32ch"};
    font-size: 6rem;
    letter-spacing: -1.5px;
    line-height: 90%;
    text-align: ${({$variant:e})=>"horizontal"===e?"left":"center"};
    max-width: ${({$variant:e})=>"horizontal"===e?"6ch":"unset"};
  }

  @media (min-width: ${({theme:e})=>e.globalV2.xxl.minWidth}) {
    width: ${({$variant:e})=>"horizontal"===e?"auto":"32ch"};
    font-size: 7rem;
    letter-spacing: -1.5px;
    line-height: 90%;
  }

  @media (min-width: ${({theme:e})=>e.globalV2.xxxl.minWidth}) {
    width: ${({$variant:e})=>"horizontal"===e?"auto":"32ch"};
    font-size: 9.6rem;
    letter-spacing: -1.5px;
    line-height: 90%;
  }
`, eZ = (0, l.default)(({
        campaign_banner_component: e,
        product: i,
        className: a
    }) => {
        let {
            width: n
        } = (0, u.useWindowSize)();
        if (!n) return null;
        let {
            variant: o,
            title: r,
            description: l,
            cta_text: d,
            cta_link: c,
            cta_variant: m,
            desktop_background_image_url: h,
            mobile_background_image_url: g
        } = e, b = n < 768 ? g : h, f = c.startsWith("http") ? c : `/${c.replace(/^\/+/,"")}`;
        return (0, t.jsxs)(eF, {
            className: a,
            children: [(0, t.jsxs)(eG, {
                $variant: o,
                children: [(0, t.jsxs)(eO, {
                    $variant: o,
                    children: [(0, t.jsx)(eK, {
                        $variant: o,
                        children: r
                    }), l && (0, t.jsx)(eD, {
                        $variant: o,
                        children: l
                    }), (0, t.jsx)(p.ButtonV2, {
                        href: f,
                        variant: m ? ? "blue",
                        rel: "noreferrer",
                        children: d
                    })]
                }), l && "horizontal" === o && (0, t.jsx)(eX, {
                    $variant: o,
                    children: l
                })]
            }), "m1" === i || "blood-vision" === i ? (0, t.jsx)(s.CustomImage, {
                src: b,
                quality: 100,
                alt: r,
                fill: !0,
                className: "bg-image",
                style: {
                    objectFit: "cover"
                },
                priority: !0
            }) : (0, t.jsx)(eH.default, {
                src: b,
                fill: !0,
                alt: r,
                className: "bg-image",
                style: {
                    objectFit: "cover"
                },
                priority: !0,
                quality: 100,
                unoptimized: !0
            })]
        })
    }).withConfig({
        displayName: "CampaignHeroBanner",
        componentId: "sc-a03e8611-6"
    })
    ``;
    var eq = e.i(79546),
        eY = e.i(20685),
        eJ = e.i(24649),
        eQ = e.i(8173),
        e0 = e.i(57546);
    let e1 = "web_v2/homepage-v3/v1",
        e2 = l.default.main.withConfig({
            displayName: "pages__PageMain",
            componentId: "sc-32752341-0"
        })
    `
  .banner-120vh {
    min-height: 120vh;
    min-height: 120svh;
  }
`, e5 = l.default.h1.withConfig({
        displayName: "pages__SrOnly",
        componentId: "sc-32752341-1"
    })
    `
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;
    e.s(["__N_SSP", () => !0, "default", 0, () => {
        let e, a, n, o, {
                width: r
            } = (0, u.useWindowSize)(),
            l = (r ? ? 0) < 768,
            s = "/shop",
            {
                region: d,
                store: p
            } = (0, i.useContext)(eS.RegionLocaleContext),
            m = (d || "").toUpperCase(),
            [h, g] = (0, i.useState)(!1),
            [b, f] = (0, i.useState)(!1),
            x = "US" === m || "PR" === m,
            {
                campaigns: v
            } = (0, i.useContext)(eq.CartContext),
            y = (0, i.useMemo)(() => {
                let e = v.filter(e => e.campaign_banner_component).sort((e, t) => "ring" === e.product && "ring" !== t.product ? -1 : +("ring" !== e.product && "ring" === t.product)).map(e => ({
                    component: () => (0, t.jsx)(eZ, {
                        campaign_banner_component: e.campaign_banner_component,
                        product: e.product
                    }),
                    handleTheme: "light",
                    handleFill: !0,
                    activeCountries: e.country ? .toUpperCase() === "ROW" ? void 0 : e.country ? [e.country.toUpperCase()] : void 0
                }));
                if (!d || "AU" === d) return e;
                let i = p ? ? eM.ShopifyStore.ROW,
                    a = (0, eM.getBaseStore)(i),
                    n = eY.m1PromoDiscount[a],
                    o = [...e];
                if (n && n.active && a && (a !== eM.ShopifyStore.EU || (0, ej.isMCFCountry)(d))) {
                    let e = {
                        title: "M1 CGM",
                        description: `Black Friday ${a}`,
                        country: a,
                        discount_code: n.discountCode,
                        discount_type: n.discountType,
                        discount_value: n.discount,
                        start_time: "",
                        end_time: "",
                        priority: 0,
                        product: "m1",
                        visibility_status: "enabled",
                        campaign_banner_component: {
                            variant: "m1",
                            title: `${i===eM.ShopifyStore.AE?"white":"black"} Friday Sale`,
                            description: `Save ${n.discount}% on M1 Live`,
                            cta_text: "Buy now",
                            cta_link: "/pricing/",
                            desktop_background_image_url: "web_v2/campaigns/bfs_m1_25_updated.png",
                            mobile_background_image_url: "web_v2/campaigns/bfs_m1_25_resp_updated.png"
                        }
                    };
                    o.push({
                        component: () => (0, t.jsx)(eZ, {
                            campaign_banner_component: e.campaign_banner_component,
                            product: e.product
                        }),
                        handleTheme: "light",
                        handleFill: !0,
                        activeCountries: [m]
                    })
                }
                return o
            }, [v, d, p]),
            w = i.default.useMemo(() => ({
                v1: {
                    ringAir: {
                        title: "Ultrahuman Ring AIR",
                        caption: "World's most comfortable sleep tracker",
                        subtitle: "Accurately tracks sleep, HRV, temperature, and movement with daily actionable health insights.",
                        cta: {
                            variant: x ? "flat" : "blue",
                            label: x ? "Currently unavailable in the U.S." : "Buy now",
                            href: "/ring/buy/",
                            "data-buttontype": "ring_banner_buy_button",
                            disabled: x
                        },
                        ctaAlt: x ? void 0 : {
                            variant: "transparentLight",
                            label: "Learn more",
                            href: "/ring/",
                            "data-buttontype": "ring_banner_learn_button",
                            disabled: x
                        },
                        position: "top",
                        background: {
                            type: "image",
                            src: {
                                mobile: "web_v2/homepage-v3/v1/mobile/ring-air-render.png",
                                web: "web_v2/homepage-v3/v1/desktop/hero.png"
                            },
                            alt: "Ultrahuman Ring AIR product showcase"
                        },
                        className: "banner-120vh",
                        sectionStyles: {
                            paddingTop: "16vh"
                        }
                    },
                    uhHome: {
                        title: "Ultrahuman Home",
                        subtitle: "The world's most advanced ambient sleep monitor",
                        cta: {
                            variant: "blue",
                            label: "Buy now",
                            href: "/home/buy/",
                            "data-buttontype": "home_banner_buy_button"
                        },
                        ctaAlt: {
                            variant: "transparentDark",
                            label: "Learn more",
                            href: "/home/",
                            "data-buttontype": "home_banner_learn_button"
                        },
                        position: "top",
                        contentColor: "#000",
                        background: {
                            type: "image",
                            src: {
                                mobile: "web_v2/homepage-v3/v1/mobile/home-new.png",
                                web: "web_v2/homepage-v3/v1/desktop/home.png"
                            },
                            alt: "Ultrahuman Home device on a table"
                        },
                        hasVerticalMargin: !0,
                        contentContainerStyles: l ? {
                            marginTop: 0
                        } : {
                            marginTop: -50
                        },
                        ...x && {
                            sectionStyles: {
                                paddingTop: "18vh"
                            }
                        }
                    },
                    bloodVision: {
                        title: "Blood Vision",
                        subtitle: "Advanced blood testing of 100+ biomarkers.",
                        cta: x ? {
                            variant: "white",
                            label: "Book test",
                            href: "/blood-vision/buy",
                            "data-buttontype": "bloodvision_banner_buy_button"
                        } : void 0,
                        ctaAlt: x ? {
                            variant: "transparentLight",
                            label: "Learn more",
                            href: "/blood-vision",
                            "data-buttontype": "bloodvision_banner_learn_button"
                        } : {
                            variant: "transparentLight",
                            label: "Learn more",
                            href: "IN" === m ? "/blood-vision" : "/blood-vision/buy",
                            "data-buttontype": "bloodvision_banner_learn_button"
                        },
                        position: "center",
                        background: {
                            type: "image",
                            src: {
                                mobile: "web_v2/homepage-v3/v1/mobile/blood-vision-banner.png",
                                web: "web_v2/homepage-v3/v1/desktop/blood-vision-banner.png"
                            },
                            alt: "Blood Vision blue abstract background"
                        },
                        hasVerticalMargin: !0
                    },
                    m1Cgm: {
                        title: "Track Glucose with M1",
                        subtitle: "Optimize your metabolic fitness with continuous glucose tracking and real-time actionable insights.",
                        cta: {
                            variant: "blue",
                            label: "Buy now",
                            href: "/pricing/",
                            "data-buttontype": "m1_banner_buy_button"
                        },
                        position: "bottom",
                        background: {
                            type: "image",
                            src: {
                                mobile: "web_v2/homepage-v3/v1/mobile/m1-new.png",
                                web: "web_v2/homepage-v3/v1/desktop/m1.png"
                            },
                            alt: "Athlete wearing M1 CGM sensor"
                        },
                        hasVerticalMargin: !0,
                        contentContainerStyles: l ? {
                            marginBottom: 0
                        } : {
                            marginBottom: -50
                        }
                    },
                    m1Lite: {
                        title: "M1 Lite",
                        subtitle: "Optimize your metabolic fitness with Continuous Glucose monitoring.",
                        cta: {
                            variant: "white",
                            label: "Get Access",
                            href: "#",
                            "data-buttontype": "m1lite_banner_get_access_button"
                        },
                        position: "bottom",
                        background: {
                            type: "image",
                            src: {
                                mobile: "web_v2/homepage-v3/v1/mobile/m1-lite.png",
                                web: "web_v2/homepage-v3/v1/desktop/m1-lite.png"
                            },
                            alt: "M1 Lite app interface on a phone"
                        },
                        hasVerticalMargin: !0
                    },
                    powerPlugs: {
                        title: "Explore PowerPlugs",
                        subtitle: "Precision micro-tools for your Ultrahuman Ring. Each one unlocks targeted insights and supercharges your health.",
                        cta: {
                            variant: "white",
                            label: "Explore now",
                            href: "/powerplugs/",
                            "data-buttontype": "powerplugs_banner_explore_button"
                        },
                        position: "top",
                        background: {
                            type: "video",
                            src: {
                                mobile: "web_v2/homepage-v3/v1/mobile/pp_mob_new.mp4",
                                web: "web_v2/homepage-v3/v1/desktop/pp_desk_new.mp4"
                            },
                            alt: "Powerplugs floating icons",
                            loop: !1,
                            playOnce: !0,
                            poster: {
                                mobile: "web_v2/homepage-v3/v1/mobile/pp_mob_new_poster.png",
                                web: "web_v2/homepage-v3/v1/desktop/pp_desk_new_poster.png"
                            },
                            visibilityThreshold: .6
                        },
                        contentContainerStyles: {
                            paddingTop: 0,
                            paddingBottom: 0
                        },
                        hasVerticalMargin: !0
                    },
                    ringRare: {
                        title: "Ring Rare",
                        subtitle: "The world's first luxury smart ring. Crafted in 18K Gold and Platinum.",
                        cta: {
                            variant: "blue",
                            label: "Buy now",
                            href: "/rare/buy",
                            "data-buttontype": "ringrare_banner_buy_button"
                        },
                        ctaAlt: {
                            variant: "transparentLight",
                            label: "Learn more",
                            href: "/rare/",
                            "data-buttontype": "ringrare_banner_learn_button"
                        },
                        position: "center",
                        background: {
                            type: "video",
                            src: "/web_v2/rare/videos/gold-pellets-ring.mp4"
                        },
                        hasVerticalMargin: !0
                    },
                    dieselUltrahumanRing: {
                        title: "Diesel Ultrahuman Ring",
                        subtitle: "The world's most comfortable smart ring meets strong attitude",
                        contentColor: "#ffffff",
                        caption: "NEW LAUNCH",
                        cta: {
                            variant: "blue",
                            label: "Buy now",
                            href: "/diesel-ultrahuman-ring/buy/",
                            "data-buttontype": "dieselRing_banner_buy_button"
                        },
                        ctaAlt: {
                            variant: "transparentLight",
                            label: "Learn more",
                            href: "/diesel-ultrahuman-ring/",
                            "data-buttontype": "dieselRing_banner_learn_button"
                        },
                        position: "bottom",
                        background: {
                            type: "image",
                            src: {
                                mobile: "web_v2/homepage-v3/banners/uh-x-diesel-resp-v3.png",
                                web: "web_v2/homepage-v3/banners/uh-x-diesel-v3.png"
                            },
                            alt: "Diesel Ultrahuman Ring"
                        },
                        hasVerticalMargin: !0,
                        contentEditable: !1,
                        sectionStyles: l ? {
                            paddingBottom: "40px"
                        } : void 0
                    },
                    uhX: {
                        title: "UltrahumanX Membership",
                        subtitle: "Coverage designed to protect all your Ultrahuman products and maximize value.",
                        cta: {
                            variant: "blue",
                            label: "Become a member",
                            href: "/x/",
                            "data-buttontype": "uhx_banner_get_now_button"
                        },
                        position: "bottom",
                        background: {
                            type: "image",
                            src: {
                                mobile: "web_v2/homepage-v3/v1/mobile/uhx-new.png",
                                web: "web_v2/homepage-v3/v1/desktop/uhx.png"
                            },
                            alt: "UltrahumanX membership card"
                        }
                    },
                    cno: {
                        title: "Women’s Health",
                        subtitle: "A complete view of your cycle and reproductive health, every step of the way.",
                        cta: {
                            variant: "transparentLight",
                            label: "Learn more",
                            href: "/womens-health/",
                            "data-buttontype": "womenshealth_banner_learn_button"
                        },
                        position: "bottom",
                        background: {
                            type: "image",
                            src: {
                                mobile: "web_v2/homepage-v3/v1/mobile/cno-alt.png",
                                web: "web_v2/homepage-v3/v1/desktop/cycle-ovulation.png"
                            },
                            alt: "Close-up with ring and hands"
                        }
                    }
                },
                v2: {
                    ringAir: {
                        title: "Ultrahuman Ring AIR",
                        caption: "World's most comfortable sleep tracker",
                        subtitle: "Accurately tracks sleep, HRV, temperature, and movement with daily actionable health insights.",
                        cta: {
                            variant: "white",
                            label: "Buy now",
                            href: "/ring/buy/",
                            "data-buttontype": "ring_banner_buy_button",
                            disabled: x
                        },
                        ctaAlt: {
                            variant: "transparentLight",
                            label: "Learn more",
                            href: "/ring/",
                            "data-buttontype": "ring_banner_learn_button",
                            disabled: x
                        },
                        position: "center",
                        background: {
                            type: "image",
                            src: {
                                mobile: "web_v2/homepage-v3/v2/mobile/hero.png",
                                web: "web_v2/homepage-v3/v2/desktop/ring.png"
                            },
                            alt: "Ultrahuman Ring AIR product showcase"
                        }
                    },
                    uhHome: {
                        title: "Ultrahuman Home",
                        subtitle: "The world's most advanced ambient sleep monitor",
                        cta: {
                            variant: "blue",
                            label: "Buy now",
                            href: "/home/buy/",
                            "data-buttontype": "home_banner_buy_button"
                        },
                        ctaAlt: {
                            variant: "transparentLight",
                            label: "Learn more",
                            href: "/home/",
                            "data-buttontype": "home_banner_learn_button"
                        },
                        position: "center",
                        background: {
                            type: "image",
                            src: {
                                mobile: "web_v2/homepage-v3/v2/mobile/home.png",
                                web: "web_v2/homepage-v3/v2/desktop/home.png"
                            },
                            alt: "Ultrahuman Home device on a table"
                        },
                        hasVerticalMargin: !0,
                        ...x && {
                            sectionStyles: {
                                paddingTop: "16vh"
                            }
                        }
                    },
                    bloodVision: {
                        title: "Blood Vision",
                        subtitle: "Advanced blood testing of 100+ biomarkers.",
                        cta: {
                            variant: "white",
                            label: "Book test",
                            href: "/blood-vision/buy/",
                            "data-buttontype": "bloodvision_banner_buy_button"
                        },
                        position: "center",
                        contentStyle: "blurred-card",
                        background: {
                            type: "image",
                            src: {
                                mobile: "web_v2/homepage-v3/v2/mobile/bv.png",
                                web: "web_v2/homepage-v3/v2/desktop/bv.png"
                            },
                            alt: "Blood Vision blue abstract background"
                        },
                        hasVerticalMargin: !0
                    },
                    m1Cgm: {
                        title: "M1 CGM Sensor",
                        subtitle: "Optimize your metabolic fitness with Continuous Glucose tracking and real-time actionable insights",
                        cta: {
                            variant: "blue",
                            label: "Buy now",
                            href: "/pricing/",
                            "data-buttontype": "m1_banner_buy_button"
                        },
                        position: "bottom",
                        background: {
                            type: "image",
                            src: {
                                mobile: "web_v2/homepage-v3/v2/mobile/m1.png",
                                web: "web_v2/homepage-v3/v2/desktop/m1.png"
                            },
                            alt: "Athlete wearing M1 CGM sensor"
                        },
                        hasVerticalMargin: !0,
                        contentContainerStyles: l ? {
                            marginBottom: 0
                        } : {
                            marginBottom: -50
                        }
                    },
                    m1Lite: {
                        title: "M1 Lite",
                        subtitle: "Optimize your metabolic fitness with Continuous Glucose monitoring.",
                        cta: {
                            variant: "white",
                            label: "Get Access",
                            disabled: !0,
                            "data-buttontype": "m1lite_banner_get_access_button"
                        },
                        position: "bottom",
                        background: {
                            type: "image",
                            src: {
                                mobile: "web_v2/homepage-v3/v2/banners/m1-lite-mobile.png",
                                web: "web_v2/homepage-v3/v2/banners/m1-lite.png"
                            },
                            alt: "M1 Lite app interface on a phone"
                        }
                    },
                    powerPlugs: {
                        title: "Explore Powerplugs",
                        subtitle: "Health, customized for you.",
                        cta: {
                            variant: "white",
                            label: "Explore now",
                            href: "/powerplugs/",
                            "data-buttontype": "powerplugs_banner_explore_button"
                        },
                        position: "top",
                        background: {
                            type: "image",
                            src: {
                                mobile: "web_v2/homepage-v3/v1/mobile/powerplugs.png",
                                web: "web_v2/homepage-v3/v1/desktop/powerplugs.png"
                            },
                            alt: "Powerplugs floating icons"
                        },
                        contentContainerStyles: {
                            paddingTop: 0,
                            paddingBottom: 0
                        },
                        hasVerticalMargin: !0
                    },
                    ringRare: {
                        title: "Ring Rare",
                        subtitle: "World's first luxury smart ring.",
                        cta: {
                            variant: "blue",
                            label: "Buy now",
                            href: "/rare/buy",
                            "data-buttontype": "ringrare_banner_buy_button"
                        },
                        ctaAlt: {
                            variant: "transparentLight",
                            label: "Learn more",
                            href: "/rare/",
                            "data-buttontype": "ringrare_banner_learn_button"
                        },
                        position: "center",
                        background: {
                            type: "video",
                            src: "/web_v2/rare/videos/gold-pellets-ring.mp4"
                        },
                        hasVerticalMargin: !0
                    },
                    uhX: {
                        title: "UltrahumanX Membership",
                        subtitle: "Designed to help you unlock the best price and protect all your Ultrahuman products.",
                        cta: {
                            variant: "blue",
                            label: "Get now",
                            href: "/x/",
                            "data-buttontype": "uhx_banner_get_now_button"
                        },
                        position: "bottom",
                        background: {
                            type: "image",
                            src: {
                                mobile: "web_v2/homepage-v3/v1/mobile/uhx.png",
                                web: "web_v2/homepage-v3/v1/desktop/uhx.png"
                            },
                            alt: "UltrahumanX membership card"
                        }
                    },
                    cno: {
                        title: "Cycle and Ovulation Tracking",
                        subtitle: "The world's most accurate Cycle & Ovulation Tracker.",
                        cta: {
                            variant: "transparentLight",
                            label: "Learn more",
                            href: "/womens-health/",
                            "data-buttontype": "womenshealth_banner_learn_button"
                        },
                        position: "bottom",
                        background: {
                            type: "image",
                            src: {
                                mobile: "web_v2/homepage-v3/v1/mobile/cno-alt.png",
                                web: "web_v2/homepage-v3/v1/desktop/cno-alt.png"
                            },
                            alt: "Close-up with ring and hands"
                        }
                    }
                }
            }), [l, m]),
            _ = {
                US: ["bloodVision", "uhHome", "m1Cgm", "ringAir", "powerPlugs", null],
                PR: ["bloodVision", "uhHome", "m1Cgm", "ringAir", "powerPlugs", null],
                default: ["ringAir", "uhHome", "dieselUltrahumanRing", "bloodVision", "m1Cgm", "powerPlugs", "ringRare"]
            },
            C = e => {
                let t = m in _ ? m : "default";
                return _[t][e]
            },
            k = e => j[e],
            j = w.v1,
            $ = i.default.useMemo(() => {
                let e = "GB" === m ? "UK" : ["US", "IN", "EU", "UK", "AE", "ROW"].includes(m) ? m : "ROW",
                    t = {
                        id: "diesel-ultrahuman-ring",
                        title: "Diesel Ultrahuman Ring",
                        description: "The world's most comfortable smart ring meets strong attitude.",
                        textColor: "#fff",
                        bgGradient: !0,
                        image: l ? `${e1}/mobile/featured/diesel-uh-ring-resp.png` : `${e1}/desktop/featured/diesel-uh-ring-v2.png`,
                        cta: {
                            variant: "blue",
                            label: "Buy now",
                            href: {
                                pathname: "/diesel-ultrahuman-ring/buy/"
                            },
                            "data-buttontype": "dieselRing_features_products_buy_button"
                        }
                    },
                    i = {
                        id: "blood-vision",
                        title: "Blood Vision",
                        description: "Advanced blood testing of 100+ biomarkers.",
                        caption: "NEW",
                        image: l ? `${e1}/mobile/featured/bv-featured-m.png` : `${e1}/desktop/featured/bv-featured.png`,
                        cta: x ? {
                            variant: "blue",
                            label: "Book test",
                            href: "/blood-vision/buy",
                            "data-buttontype": "bloodvision_features_products_buy_button"
                        } : {
                            variant: "blue",
                            label: "Learn more",
                            href: "IN" === m ? "/blood-vision" : "/blood-vision/buy",
                            "data-buttontype": "bloodvision_features_products_buy_button"
                        }
                    },
                    a = {
                        id: "home-monitor",
                        title: "Ultrahuman Home",
                        description: "The world's most advanced ambient sleep monitor.",
                        image: {
                            web: `${e1}/desktop/featured/home-v2.png`,
                            mobile: `${e1}/mobile/featured/home-v2.png`
                        },
                        textColor: "#000",
                        cta: {
                            variant: "blue",
                            label: "Buy now",
                            href: "/home/buy/",
                            "data-buttontype": "home_features_products_buy_button"
                        }
                    },
                    n = {
                        id: "m1",
                        title: "Track Glucose with M1",
                        description: "Optimize your metabolic fitness with continuous glucose tracking and real-time actionable insights.",
                        image: l ? `${e1}/mobile/featured/m1.png` : `${e1}/desktop/featured/m1.png`,
                        cta: {
                            variant: "blue",
                            label: "Buy now",
                            href: "/pricing/",
                            "data-buttontype": "m1_features_products_buy_button"
                        }
                    },
                    o = {
                        id: "sleep-mask",
                        title: "Blackout Sleep Mask",
                        description: "Total blackout. Complete recovery. Built for your best sleep yet.",
                        image: l ? `${e1}/mobile/featured/sleep-mask.png` : `${e1}/desktop/featured/sleep-mask.png`,
                        cta: {
                            variant: "blue",
                            label: "Buy now",
                            href: {
                                pathname: s,
                                hash: "addons"
                            },
                            "data-buttontype": "sleepmask_features_products_buy_button"
                        },
                        textColor: "#000"
                    },
                    r = {
                        id: "vision-cloud",
                        caption: "Free. borderless. secure.",
                        title: "Vision Cloud",
                        description: "The world's first universal health report interpreter.",
                        image: `${e1}/desktop/featured/vision-cloud.png`,
                        cta: {
                            variant: "white",
                            label: "Learn more",
                            href: {
                                pathname: "https://cloud.ultrahuman.com"
                            },
                            "data-buttontype": "vision_cloud_features_products_buy_button"
                        },
                        textColor: "#fff"
                    },
                    d = {
                        id: "ring-rare",
                        title: "Ring Rare",
                        description: "The world's first luxury smart ring. Crafted in 18K Gold and Platinum.",
                        caption: "NEW",
                        image: `${e1}/desktop/featured/rare.png`,
                        cta: {
                            variant: "blue",
                            label: "Buy now",
                            href: "/rare/buy",
                            "data-buttontype": "ringrare_features_products_buy_button"
                        }
                    },
                    p = {
                        id: "bling-stacking",
                        title: "Ultrahuman Bling",
                        description: "Bling stacking rings are designed to pair with your Ring AIR for a look that matches your aesthetic.",
                        textColor: "#fff",
                        image: `${e1}/desktop/featured/bling_feat.png`,
                        cta: {
                            variant: "blue",
                            label: "Buy now",
                            href: s,
                            "data-buttontype": "bling_stacking_features_products_buy_button"
                        }
                    };
                return "US" === e ? [p, r, o, i] : "IN" === e ? [p, t, {
                    image: "web_v2/gift-card/how-to/featured-web.png",
                    cta: {
                        variant: "blue",
                        label: "Gift Ring AIR",
                        onClick: () => {
                            f(!0)
                        },
                        "data-buttontype": "giftingkit_features_products_buy_button"
                    },
                    ctaAlt: {
                        variant: "transparentLight",
                        label: "How it works",
                        onClick: () => {
                            g(!0)
                        },
                        "data-buttontype": "giftingkit_features_products_buy_button"
                    },
                    id: "ring-gift",
                    title: "Gift Card - Ring AIR",
                    description: "Gift better health to the ones who matter most — a thoughtful surprise that doesn’t feel last-minute."
                }, d, n, a] : "EU" === e || "UK" === e ? [p, t, d, a, n] : [p, t, d, a, o]
            }, [d, s, l]),
            S = (0, e$.generateBreadcrumbSchema)([{
                name: "Home",
                url: "https://www.ultrahuman.com"
            }]);
        return (0, t.jsxs)(e2, {
            id: "main-content",
            role: "main",
            className: `${eQ.jetbrainsMono.variable} ${eJ.twkEverett.variable}`,
            "aria-label": "Ultrahuman homepage with product information and features",
            children: [(0, t.jsx)(e5, {
                children: "Ultrahuman: Real-time sleep and recovery tracking"
            }), (0, t.jsx)(eC.SEO, {
                title: "Ultrahuman: Track sleep, fitness, cycles and blood markers to enhance healthspan and longevity.",
                description: "Ultrahuman is a connected ecosystem for peak health and performance. Track sleep, recovery, metabolism, cycle, ovulation, blood work, and home health with precision.",
                image: (0, c.getAssetUrl)("/web_v2/meta-assets/uh-og-image.png"),
                basePath: "/"
            }), (0, t.jsx)(ek.JsonLd, {
                data: [S]
            }), (0, t.jsx)(e0.HeroSection, {
                parentPage: "homepage"
            }), y.length ? (0, t.jsx)(K, {
                ariaLabel: "Homepage hero carousel featuring Blood Vision content",
                items: y,
                autoplayDelay: 1e4,
                stopOnInteraction: !0,
                autoplayStopAtEnd: !0
            }) : null, C(0) ? (0, t.jsx)(L.Banner, { ...k(C(0)),
                "aria-label": "Ultrahuman Ring AIR section with sleep tracking features and purchase options"
            }) : null, (0, t.jsx)(ep, {
                title: "New dimensions in health",
                items: $,
                id: "featured-products"
            }), C(1) ? (0, t.jsx)(L.Banner, { ...k(C(1)),
                "aria-label": "Ultrahuman Home device section with environmental health monitoring features"
            }) : null, C(2) ? (0, t.jsx)(L.Banner, { ...k(C(2)),
                "aria-label": "Blood Vision section for advanced biomarker testing and health insights"
            }) : null, C(3) ? (0, t.jsx)(L.Banner, { ...k(C(3)),
                "aria-label": "M1 CGM Sensor section for continuous glucose monitoring and metabolic fitness"
            }) : null, C(4) ? (0, t.jsx)(L.Banner, { ...k(C(4)),
                "aria-label": "Powerplugs section for personalized health solutions and customization"
            }) : null, C(5) ? (0, t.jsx)(L.Banner, { ...k(C(5)),
                "aria-label": "Ring Rare section featuring luxury smart ring with premium materials"
            }) : null, (0, t.jsx)(P, {
                columnsDesktop: 2,
                items: [k("uhX"), k("cno")],
                "aria-label": "UltrahumanX Membership and Women’s Health sections",
                hasVerticalMargin: !0
            }), (0, t.jsx)(ey, {
                title: "Accessories",
                items: (e = {
                    id: "1",
                    title: "Voyager Ring charger",
                    description: "A compact, powerful and lightweight Ring AIR Charger, ready for wherever life takes you.",
                    image: l ? `${e1}/mobile/accessories/charger-new.png` : `${e1}/desktop/accessories/charger-new.png`,
                    cta: {
                        variant: "blue",
                        label: "Buy now",
                        href: {
                            pathname: s,
                            hash: "addons"
                        },
                        "data-buttontype": "charger_accessories_buy_button"
                    },
                    textColor: "#000"
                }, a = {
                    id: "2",
                    title: "Blue Light Blocking Glasses (Night)",
                    description: "Designed for night use to block blue light, ease eye strain, and support deeper sleep.",
                    image: l ? `${e1}/mobile/accessories/blbg-new.png` : `${e1}/desktop/accessories/blbg-nobr.png`,
                    cta: {
                        variant: "blue",
                        label: "Buy now",
                        href: {
                            pathname: s,
                            hash: "addons"
                        },
                        "data-buttontype": "blbg_accessories_buy_button"
                    },
                    textColor: "#000",
                    styling: {
                        borderColor: "rgba(0,0,0,0.07)"
                    }
                }, n = {
                    id: "3",
                    title: "Ring AIR Sizing Kit",
                    description: "Sample rings that help you find your perfect size, giving you the best fit and data accuracy.",
                    image: l ? `${e1}/mobile/accessories/kit-new.png` : `${e1}/desktop/accessories/kit-new.png`,
                    cta: {
                        variant: "blue",
                        label: "Buy now",
                        href: {
                            pathname: s,
                            hash: "addons"
                        },
                        "data-buttontype": "sizingkit_accessories_buy_button"
                    }
                }, o = {
                    id: "4",
                    title: "Blackout Sleep Mask",
                    description: "Total blackout. Complete recovery. Built for your best sleep yet.",
                    image: l ? `${e1}/mobile/accessories/mask-new.png` : `${e1}/desktop/accessories/mask-nobr.png`,
                    cta: {
                        variant: "blue",
                        label: "Buy now",
                        href: {
                            pathname: s,
                            hash: "addons"
                        },
                        "data-buttontype": "sleepmask_accessories_buy_button"
                    },
                    textColor: "#000",
                    styling: {
                        borderColor: "rgba(0,0,0,0.07)"
                    }
                }, x ? [a, o, e] : [e, a, n, o])
            }), (0, t.jsx)(R, {}), (0, t.jsx)(ew.AtheletesSectionNew, {}), (0, t.jsx)(e_.CareerSectionComponent, {}), h && (0, t.jsx)(eN.default, {
                onClose: () => g(!1),
                onCTA: () => f(!0),
                ctaLabel: "Gift Ring AIR"
            }), (0, t.jsx)(eU, {
                visible: b,
                onClose: () => f(!1)
            })]
        })
    }], 43181)
}, 19675, (e, t, i) => {
    (window.__NEXT_P = window.__NEXT_P || []).push(["/", () => e.r(43181)]), t.hot && t.hot.dispose(function() {
        window.__NEXT_P.push(["/"])
    })
}]);