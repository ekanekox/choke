(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 54134, e => {
    "use strict";
    var t = e.i(91398),
        i = e.i(58678),
        n = e.i(3828),
        a = e.i(91788),
        o = e.i(3115),
        r = e.i(71225);
    let l = "https://www.ultrahuman.com";

    function s(e) {
        return e.endsWith("/") ? e : e + "/"
    }
    e.s(["SEO", 0, ({
        title: e,
        description: d,
        image: c,
        canonical: p,
        basePath: m,
        nonIndexable: h,
        robots: f
    }) => {
        let u, {
                asPath: g
            } = (0, n.useRouter)(),
            {
                regionSlug: x
            } = (0, a.useContext)(o.RegionLocaleContext);
        if (p) u = p;
        else if (m) u = `${l}/${x}${s(m)}`;
        else {
            let e = g.split("?")[0].split("#")[0];
            u = `${l}${e}`
        }
        let b = !!m,
            w = m ? `${l}/global${s(m)}` : void 0,
            y = b ? (0, r.getAllRegionSlugs)() : [];
        return (0, t.jsxs)(i.default, {
            children: [(0, t.jsx)("title", {
                children: e
            }), (0, t.jsx)("meta", {
                name: "twitter:title",
                content: e
            }, "twitter-title"), (0, t.jsx)("meta", {
                property: "og:title",
                content: e
            }, "og-title"), (0, t.jsx)("meta", {
                name: "twitter:description",
                content: d
            }, "twitter-description"), (0, t.jsx)("meta", {
                name: "description",
                content: d
            }, "description"), (0, t.jsx)("meta", {
                property: "og:description",
                content: d
            }, "og-description"), (0, t.jsx)("meta", {
                property: "og:url",
                content: u
            }, "og-url"), (0, t.jsx)("meta", {
                property: "og:site_name",
                content: "Ultrahuman"
            }, "og-site-name"), c && (0, t.jsx)("meta", {
                name: "twitter:image",
                content: c
            }, "twitter-image"), c && (0, t.jsx)("meta", {
                property: "og:image",
                content: c
            }, "og-image"), (0, t.jsx)("link", {
                rel: "canonical",
                href: u
            }, "canonical"), w && (0, t.jsx)("link", {
                rel: "alternate",
                hrefLang: "x-default",
                href: w
            }, "hreflang-x-default"), y.map(e => {
                let i, n, a = (0, r.parseRegionLocale)(e),
                    o = `${l}/${e}${s(m)}`;
                if ("GLOBAL" === a.region) return null;
                let d = (i = a.region.toUpperCase(), n = (0, r.getDefaultLanguageForRegion)(i), `${n}-${i}`),
                    c = e.includes("-") ? `${a.language}-${a.region}` : d;
                return (0, t.jsx)("link", {
                    rel: "alternate",
                    hrefLang: c,
                    href: o
                }, `hreflang-${e}`)
            }), h && (0, t.jsx)("meta", {
                name: "google",
                content: "nositelinkssearchbox"
            }, "sitelinks"), h && (0, t.jsx)("meta", {
                name: "google",
                content: "notranslate"
            }, "notranslate"), f ? (0, t.jsx)("meta", {
                name: "robots",
                content: f
            }, "robots") : h && (0, t.jsx)("meta", {
                name: "robots",
                content: "noindex,nofollow"
            }, "robots")]
        })
    }])
}, 72218, 66243, e => {
    "use strict";
    e.i(50461);
    var t = e.i(91398),
        i = e.i(58678);

    function n(e) {
        return {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: e.map((e, t) => ({
                "@type": "ListItem",
                position: t + 1,
                name: e.name,
                item: e.url
            }))
        }
    }
    e.s(["JsonLd", 0, ({
        data: e,
        id: n
    }) => {
        if (!e) return null;
        try {
            let a = JSON.stringify(e);
            return (0, t.jsx)(i.default, {
                children: (0, t.jsx)("script", {
                    type: "application/ld+json",
                    dangerouslySetInnerHTML: {
                        __html: a
                    },
                    ...n && {
                        id: n
                    }
                })
            })
        } catch (e) {
            return null
        }
    }], 72218), e.s(["generateBreadcrumbSchema", () => n], 66243)
}, 68734, e => {
    "use strict";
    var t = e.i(91788);
    e.s(["useAutoPlayVideoRef", 0, () => {
        let e = (0, t.useRef)(null),
            i = (0, t.useRef)(null);
        return (0, t.useEffect)(() => {
            let t = () => {
                e.current && (e.current.muted = !0, e.current.playsInline = !0, (!e.current.played || e.current.paused) && e.current ? .play().catch(() => {
                    e.current && (e.current.controls = !0)
                }))
            };
            return document.addEventListener("touchstart", t), document.addEventListener("click", t), window.addEventListener("focus", t), i.current = new IntersectionObserver(t => {
                e.current && (t[0].isIntersecting ? e.current.play().catch(() => {
                    e.current && (e.current.controls = !0)
                }) : e.current.pause())
            }, {}), e.current && i.current.observe(e.current), () => {
                document.removeEventListener("touchstart", t), document.removeEventListener("click", t), window.removeEventListener("focus", t), i.current && e.current && i.current.unobserve(e.current)
            }
        }, []), e
    }])
}, 93966, e => {
    "use strict";
    e.i(91788);
    var t = e.i(228);
    e.i(1814);
    var i = e.i(91898);
    let n = e => {
            switch (e) {
                case t.Currency.inr:
                    return "en-IN";
                case t.Currency.gbp:
                    return "en-GB";
                case t.Currency.eur:
                    return "de-DE";
                case t.Currency.aed:
                    return "ar-AE";
                case t.Currency.usd:
                default:
                    return "en-US"
            }
        },
        a = (e, i = t.Currency.usd, a = {}) => {
            let o = "string" == typeof i ? i.toLowerCase() : i;
            if (o === t.Currency.inr) return e >= 1e7 ? `${(e/1e7).toFixed(2*(e%1e7!=0))} Cr` : e >= 1e5 ? `${(e/1e5).toFixed(2*(e%1e5!=0))} L` : new Intl.NumberFormat("en-IN").format(e);
            return o === t.Currency.aed ? new Intl.NumberFormat(n(o), {
                maximumFractionDigits: 0,
                ...a
            }).format(e) : new Intl.NumberFormat(n(o), {
                style: a.style || "decimal",
                maximumFractionDigits: a.maximumFractionDigits ? ? 0,
                ...a
            }).format(e)
        };
    e.s(["formatPrice", 0, a, "formatPriceWithSymbol", 0, (e, n = t.Currency.usd, o = {}) => {
        let r = "string" == typeof n ? n.toLowerCase() : n,
            l = (0, i.getCurrencySymbolFromString)(r),
            s = a(e, r, o);
        return r === t.Currency.aed ? `${s} ${l}` : `${l}${s}`
    }])
}, 52488, e => {
    "use strict";
    var t = e.i(91398);
    e.s(["ReplayIcon", 0, e => (0, t.jsx)("svg", {
        className: e.className,
        style: e.style,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 32 32",
        width: "32px",
        height: "32px",
        children: (0, t.jsx)("path", {
            fill: e.fill ? ? "#000000",
            d: "M 16 4 L 16 6 C 21.535156 6 26 10.464844 26 16 C 26 21.535156 21.535156 26 16 26 C 10.464844 26 6 21.535156 6 16 C 6 12.734375 7.585938 9.851563 10 8.03125 L 10 13 L 12 13 L 12 5 L 4 5 L 4 7 L 8.09375 7 C 5.59375 9.199219 4 12.417969 4 16 C 4 22.617188 9.382813 28 16 28 C 22.617188 28 28 22.617188 28 16 C 28 9.382813 22.617188 4 16 4 Z"
        })
    })])
}, 55825, 77414, 74105, 69869, e => {
    "use strict";
    var t = e.i(91398),
        i = e.i(60814);
    i.css `
  padding: 9.6rem 0;
  @media (min-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
    padding: 15rem 0;
  }
`;
    let n = i.css `
  font-size: 14px;
  font-weight: 500;
  line-height: 120%;
  text-transform: uppercase;

  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    font-size: 13px;
    line-height: 120%;
  }
`,
        a = i.css `
  font-size: 36px;
  font-weight: 500;
  line-height: 120%;
  letter-spacing: -1.8px;

  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    font-size: 40px;
    line-height: 120%;
    letter-spacing: -2px;
  }
`,
        o = i.css `
  font-size: 16px;
  font-weight: 400;
  line-height: 120%;
  letter-spacing: -0.32px;

  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    font-size: 16px;
    line-height: 130%;
    letter-spacing: -0.32px;
  }
`,
        r = i.default.div.withConfig({
            displayName: "styleConstants__SectionWrapper",
            componentId: "sc-83552663-0"
        })
    `
  padding-top: ${({$hasVerticalMargin:e})=>e?"8px":"0"};
  padding-bottom: ${({$hasVerticalMargin:e})=>e?"8px":"0"};
`;
    e.s(["BannerCaptionStyles", 0, n, "BannerSubtitleStyles", 0, o, "BannerTitleStyles", 0, a, "SectionWrapper", 0, r], 77414);
    var l = e.i(19231),
        s = e.i(21666),
        d = e.i(86332),
        c = e.i(91788),
        p = e.i(52488);
    let m = i.default.button.withConfig({
        displayName: "BackgroundVideo__ReplayButton",
        componentId: "sc-f7e88f3c-0"
    })
    `
  position: absolute;
  bottom: 24px;
  left: 12px;
  background: transparent;
  -webkit-backdrop-filter: blur(24px);
  backdrop-filter: blur(24px);
  color: #ffffff99;
  border-radius: 24px;
  padding: 8px;
  font-size: 1.1rem;
  font-weight: 500;
  letter-spacing: 3px;
  text-transform: uppercase;
  cursor: pointer;
  border: none;
  z-index: 9999;
  pointer-events: auto;

  &:focus {
    outline: 2px solid ${({theme:e})=>e.colors?.primary||"#00e0ff"};
    outline-offset: 2px;
    box-shadow: 0 0 0 3px rgba(0, 224, 255, 0.3);
  }

  @media (min-width: ${({theme:e})=>e.globalV2?.md?.minWidth}) {
    left: 24px;
  }

  svg {
    height: 16px;
    width: auto;
    transform: translateY(1.5px);
    opacity: 0.7;
  }
`, h = i.default.div.withConfig({
        displayName: "BackgroundVideo__VideoWrapper",
        componentId: "sc-f7e88f3c-1"
    })
    `
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
`, f = c.default.forwardRef(({
        src: e,
        poster: i,
        autoPlay: n = !0,
        loop: a = !0,
        muted: o = !0,
        playsInline: r = !0,
        playOnce: l = !1,
        visibilityThreshold: s = .1,
        showReplayButton: d = !1,
        style: f
    }, u) => {
        let g = c.default.useRef(null),
            x = c.default.useRef(!1),
            b = c.default.useCallback(e => {
                g.current = e, "function" == typeof u ? u(e) : u && (u.current = e)
            }, [u]);
        c.default.useEffect(() => {
            let e = g.current;
            if (!e) return;
            let t = new IntersectionObserver(t => {
                if (t[0].intersectionRatio < s || l && x.current) return void e.pause();
                let i = e.play();
                i && "function" == typeof i.catch && i.catch(() => void 0)
            }, {
                threshold: [0, s, .25, .5, .75, 1]
            });
            t.observe(e);
            let i = () => {
                l && (x.current = !0)
            };
            return e.addEventListener("ended", i), () => {
                t.disconnect(), e.removeEventListener("ended", i)
            }
        }, [s, l]);
        let w = c.default.useCallback(() => {
            g.current && (g.current.currentTime = 0, g.current.play().catch(() => {}))
        }, []);
        return (0, t.jsxs)(h, {
            children: [(0, t.jsx)("video", {
                ref: b,
                src: e,
                poster: i,
                autoPlay: n,
                loop: !l && a,
                muted: o,
                playsInline: r,
                style: f
            }), d && (0, t.jsx)(m, {
                onClick: w,
                "data-buttontype": "animation replay",
                "aria-label": "Replay hero animation",
                title: "Replay animation",
                children: (0, t.jsx)(p.ReplayIcon, {
                    fill: "#ffffff"
                })
            })]
        })
    });
    f.displayName = "BackgroundVideo", e.s(["BackgroundVideo", () => f], 74105);
    var u = e.i(78198),
        g = e.i(57232);
    let x = i.default.div.withConfig({
        displayName: "Banner__SectionContent",
        componentId: "sc-9d259d77-0"
    })
    `
  position: relative;
  color: #fff;
  overflow: hidden;
  height: 90vh;
  height: 90svh;
  display: grid;
  /* Place the content grid cell according to vertical alignment */
  ${({$position:e})=>{let t=e.includes("top")?"start":e.includes("bottom")?"end":"center";return i.css`
    align - items: $ {
        t
    };
    `}}
  /* Add safe offset from the viewport edge in full mode when aligned to top/bottom */
  padding-top: ${({$position:e,$inGrid:t})=>!t&&e.includes("top")?"96px":"0"};
  padding-bottom: ${({$position:e,$inGrid:t})=>!t&&e.includes("bottom")?"96px":"0"};

  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    padding-top: ${({$position:e,$inGrid:t})=>!t&&e.includes("top")?"120px":"0"};
    padding-bottom: ${({$position:e,$inGrid:t})=>!t&&e.includes("bottom")?"120px":"0"};
  }
`, b = i.default.div.withConfig({
        displayName: "Banner__BackgroundLayer",
        componentId: "sc-9d259d77-1"
    })
    `
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;

  img,
  video {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`, w = i.default.div.withConfig({
        displayName: "Banner__Content",
        componentId: "sc-9d259d77-2"
    })
    `
  position: relative;
  z-index: 1;

  display: flex;
  flex-direction: column;
  gap: 24px; /* mobile: space between text and CTAs */

  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    gap: ${({$inGrid:e})=>e?"16px":"24px"};
    padding-inline: 32px;
    padding-top: ${({$position:e,$inGrid:t})=>t?"64px":e.includes("top")?"0":"120px"};
    padding-bottom: ${({$position:e,$inGrid:t})=>t?"64px":e.includes("bottom")?"0":"120px"};
  }

  padding-top: ${({$position:e,$inGrid:t})=>t?"64px":e.includes("top")?"0":"96px"};
  padding-bottom: ${({$position:e,$inGrid:t})=>t?"64px":e.includes("bottom")?"0":"96px"};
  padding-inline: 16px;

  ${({$position:e})=>{let t=e.includes("left")?"flex-start":e.includes("right")?"flex-end":"center";return i.css`
    align - items: $ {
        t
    };
    text - align: $ {
        "flex-start" === t ? "left" : "flex-end" === t ? "right" : "center"
    };
    `}}
`, y = i.default.div.withConfig({
        displayName: "Banner__TextStack",
        componentId: "sc-9d259d77-3"
    })
    `
  display: flex; /* text content wrapper */
  flex-direction: column;
  gap: 4px; /* 4px gap between text elements */
  align-self: stretch;
  align-items: ${({$align:e})=>"left"===e?"flex-start":"right"===e?"flex-end":"center"};
`, v = i.default.div.withConfig({
        displayName: "Banner__Caption",
        componentId: "sc-9d259d77-4"
    })
    `
  color: ${({$color:e})=>e??"#fff"};
  ${n}
  margin: 0;
`, C = i.default.h2.withConfig({
        displayName: "Banner__TitleBase",
        componentId: "sc-9d259d77-5"
    })
    `
  margin: 0;
  color: ${({$color:e})=>e??"#fff"};
  ${a}
`, k = i.default.p.withConfig({
        displayName: "Banner__Subtitle",
        componentId: "sc-9d259d77-6"
    })
    `
  margin: 0;
  color: ${({$color:e})=>e??"#fff"};
  ${o}
  max-width: 420px;
`, j = i.default.div.withConfig({
        displayName: "Banner__Buttons",
        componentId: "sc-9d259d77-7"
    })
    `
  display: flex; /* button wrapper */
  align-items: center;
  gap: 12px;
`, _ = i.default.div.withConfig({
        displayName: "Banner__BlurredCard",
        componentId: "sc-9d259d77-8"
    })
    `
  display: flex;
  width: 100%;
  max-width: 400px;
  padding: 32px 16px 32px 16px;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  flex-shrink: 0;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(0, 0, 0, 0.1);
  background-blend-mode: overlay;
  -webkit-backdrop-filter: blur(22px);
  backdrop-filter: blur(22px);

  @media (max-width: 768px) {
    width: calc(100% - 32px);
    max-width: none;
    margin: 0 16px;
    padding: 24px 16px 24px 16px;
    min-height: auto;
  }
`, I = ({
        caption: e,
        title: i,
        subtitle: n,
        cta: a,
        ctaAlt: o,
        horizontalAlign: r,
        contentColor: l
    }) => (0, t.jsxs)(_, {
        children: [(e || i || n) && (0, t.jsxs)(y, {
            $align: r,
            children: [!!e && (0, t.jsx)(v, {
                $color: l,
                children: e
            }), !!i && (0, t.jsx)(C, {
                $color: l,
                children: i
            }), !!n && (0, t.jsx)(k, {
                $color: l,
                children: n
            })]
        }), (a || o) && (0, t.jsxs)(j, {
            children: [!!a && (0, t.jsx)(d.ButtonV2, { ...a,
                children: a.children
            }), !!o && (0, t.jsx)(d.ButtonV2, { ...o,
                children: o.children
            })]
        })]
    }), N = ({
        caption: e,
        title: i,
        subtitle: n,
        cta: a,
        ctaAlt: o,
        inGrid: r,
        horizontalAlign: l,
        contentColor: s
    }) => (0, t.jsxs)(t.Fragment, {
        children: [(e || i || n) && (0, t.jsxs)(y, {
            $align: l,
            children: [!!e && (0, t.jsx)(v, {
                $color: s,
                children: e
            }), !!i && (0, t.jsx)(C, {
                $inGrid: r,
                $color: s,
                children: i
            }), !!n && (0, t.jsx)(k, {
                $inGrid: r,
                $color: s,
                children: n
            })]
        }), (a || o) && (0, t.jsxs)(j, {
            children: [!!a && (0, t.jsx)(d.ButtonV2, { ...a,
                children: a.children
            }), !!o && (0, t.jsx)(d.ButtonV2, { ...o,
                children: o.children
            })]
        })]
    }), $ = ({
        className: e,
        id: i,
        caption: n,
        title: a,
        subtitle: o,
        cta: d,
        ctaAlt: c,
        position: p = "center",
        background: m,
        backgroundStyles: h,
        contentContainerStyles: y,
        inGrid: v,
        contentColor: C = "#fff",
        sectionStyles: k,
        contentStyle: j = "default",
        hasVerticalMargin: _,
        CustomContentComponent: $,
        CustomBackgroundComponent: W,
        ...S
    }) => {
        let {
            width: V
        } = (0, g.useWindowSize)(), L = p.includes("left") ? "left" : p.includes("right") ? "right" : "center", P = e => {
            if (e) return "string" == typeof e ? e : V && V < 768 ? e.mobile : e.web
        }, H = e => {
            if (!e) return;
            if (/^(https?:)?\/\//.test(e)) return e;
            let t = e.startsWith("/") ? e : `/${e}`;
            return (0, u.getCompressedAssetUrl)(t)
        }, R = e => {
            if (!e) return;
            if (/^(https?:)?\/\//.test(e)) return e;
            let t = e.startsWith("/") ? e : `/${e}`;
            return (0, u.getCompressedAssetUrl)(t)
        }, B = S["aria-label"], M = "string" == typeof a ? `${a} banner` : "string" == typeof n ? `${n} banner` : void 0, z = B ? ? M;
        return (0, t.jsx)(r, {
            as: v ? "div" : "section",
            id: i,
            $hasVerticalMargin: _,
            "aria-label": z,
            role: S.role ? ? (v && z ? "region" : void 0),
            ...S,
            children: (0, t.jsxs)(x, {
                className: e,
                $position: p,
                $inGrid: v,
                style: k,
                children: [(m || W) && (0, t.jsx)(b, {
                    "aria-hidden": !0,
                    children: W ? (0, t.jsx)(W, {
                        background: m,
                        selectSrc: P,
                        resolveVideoSrc: H,
                        resolveImageSrc: R,
                        backgroundStyles: h
                    }) : m ? .type === "image" ? (0, t.jsx)(s.CustomImage, {
                        src: P(m.src),
                        alt: m.alt ? ? "",
                        fill: !0,
                        priority: !v,
                        sizes: "100vw",
                        style: {
                            objectFit: "cover",
                            ...h
                        }
                    }) : m ? .type === "video" ? (0, t.jsx)(f, {
                        src: H(P(m.src)),
                        poster: R(P(m.poster)),
                        autoPlay: m.autoPlay ? ? !0,
                        loop: m.loop ? ? !0,
                        muted: m.muted ? ? !0,
                        playsInline: m.playsInline ? ? !0,
                        playOnce: m.playOnce ? ? !1,
                        visibilityThreshold: m.visibilityThreshold ? ? .1,
                        showReplayButton: m.showReplayButton ? ? !1,
                        style: h
                    }) : null
                }), (0, t.jsx)(l.Container, {
                    children: (0, t.jsx)(w, {
                        $position: p,
                        $inGrid: v,
                        style: y,
                        children: $ ? (0, t.jsx)($, {
                            caption: n,
                            title: a,
                            subtitle: o,
                            cta: d,
                            ctaAlt: c,
                            position: p,
                            inGrid: v,
                            horizontalAlign: L,
                            contentColor: C,
                            contentContainerStyles: y
                        }) : (() => {
                            let e = {
                                caption: n,
                                title: a,
                                subtitle: o,
                                cta: d,
                                ctaAlt: c,
                                position: p,
                                inGrid: v,
                                horizontalAlign: L,
                                contentColor: C,
                                contentContainerStyles: y
                            };
                            switch (j) {
                                case "default":
                                default:
                                    return (0, t.jsx)(N, { ...e
                                    });
                                case "blurred-card":
                                    return (0, t.jsx)(I, { ...e
                                    })
                            }
                        })()
                    })
                })]
            })
        })
    };
    e.s(["default", 0, $], 69869), e.s(["Banner", 0, $], 55825)
}, 55037, e => {
    "use strict";
    var t = e.i(91398);
    e.s(["Lightning", 0, ({
        className: e,
        style: i,
        fill: n = "white",
        width: a = 16,
        height: o = 16
    }) => (0, t.jsxs)("svg", {
        className: e,
        style: i,
        width: a,
        height: o,
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [(0, t.jsx)("g", {
            "clip-path": "url(#clip0_3246_23431)",
            children: (0, t.jsx)("path", {
                d: "M13.5 6.77344H9L10 0.773438L2.5 9.77344H7L6 15.7734L13.5 6.77344Z",
                fill: n
            })
        }), (0, t.jsx)("defs", {
            children: (0, t.jsx)("clipPath", {
                id: "clip0_3246_23431",
                children: (0, t.jsx)("rect", {
                    width: "16",
                    height: "16",
                    fill: n,
                    transform: "translate(0 0.273438)"
                })
            })
        })]
    })])
}, 46031, e => {
    "use strict";
    var t = e.i(91398),
        i = e.i(91788),
        n = e.i(60814);
    let a = n.default.button.withConfig({
        displayName: "CarouselButton__StyledCarouselButton",
        componentId: "sc-89dce803-0"
    })
    `
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 3rem;
  height: 3rem;
  @media (min-width: ${({theme:e})=>e.globalV2.lg.minWidth}) {
    width: 4rem;
    height: 4rem;
  }

  /* Border radius variants */
  ${({rounded:e="full"})=>{switch(e){case"sm":return n.css`
    border - radius: 8 px;
    `;case"lg":return n.css`
    border - radius: 16 px;
    `;default:return n.css`
    border - radius: 50 % ;
    `}}}

  /* Theme and fill variants */
  ${({variant:e="light",fill:t=!0})=>"light"===e?n.css`
    background: $ {
        t ? "#C2C2C2" : "transparent"
    };

    &
    : hover: not(: disabled) {
        background: rgba(0, 0, 0, 1);
        transform: scale(1.05);

        svg {
            color: #ffffff;
            path {
                fill: #ffffff;
            }
        }
    }

    svg {
        color: #000;
          path {
            fill: # 000;
    }
}
`:n.css`
background: $ {
    t ? "rgba(255, 255, 255, 0.07)" : "transparent"
};

&
: hover: not(: disabled) {
    background: rgba(255, 255, 255, 1);
    transform: scale(1.05);

    svg {
        color: #000000;
            path {
              fill: # 000000;
    }
}
}

svg {
color: #fff;
path {
    fill: rgba(255, 255, 255, 0.2);
}
}
`}

  &:active:not(:disabled) {
    transform: scale(0.95);
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  svg {
    width: 1.2rem;
    height: 1.2rem;
    @media (min-width: ${({theme:e})=>e.globalV2.lg.minWidth}) {
      width: 1.6rem;
      height: 1.6rem;
    }
  }
`, o = i.default.forwardRef(({
direction: e = "next",
variant: i = "light",
rounded: n = "full",
fill: o = !0,
...r
}, l) => {
let s = "next" === e ? "0deg" : "180deg";
return (0, t.jsx)(a, {
    ref: l,
    type: "button",
    variant: i,
    rounded: n,
    fill: o,
    direction: e,
    ...r,
    children: (0, t.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "19",
        height: "14",
        viewBox: "0 0 19 14",
        fill: "none",
        style: {
            transform: `rotate(${s})`
        },
        children: (0, t.jsx)("path", {
            d: "M1.60144 6.01647C1.12405 6.01647 0.73705 6.40347 0.73705 6.88086C0.73705 7.35825 1.12405 7.74525 1.60144 7.74525V6.88086V6.01647ZM18.365 7.49208C18.7025 7.15451 18.7025 6.60721 18.365 6.26964L12.864 0.768697C12.5265 0.431131 11.9792 0.431131 11.6416 0.768697C11.304 1.10626 11.304 1.65356 11.6416 1.99113L16.5313 6.88086L11.6416 11.7706C11.304 12.1082 11.304 12.6555 11.6416 12.993C11.9792 13.3306 12.5265 13.3306 12.864 12.993L18.365 7.49208ZM1.60144 6.88086V7.74525H17.7538V6.88086V6.01647H1.60144V6.88086Z",
            fill: "black"
        })
    })
})
}); o.displayName = "CarouselButton", e.s(["CarouselButton", 0, o])
}, 57758, e => {
"use strict";
var t = e.i(91398);
e.i(64157);
var i = e.i(71179),
n = e.i(14681),
a = e.i(91788),
o = e.i(60814),
r = e.i(2100),
l = e.i(61791),
s = e.i(19231),
d = e.i(21666),
c = e.i(46031);
let p = (0, o.default)(({
className: e,
data: i,
advisorId: n
}) => (0, t.jsx)("div", {
className: e,
children: (0, t.jsx)("div", {
    className: "element-content",
    children: (0, t.jsx)("div", {
        className: "element-image",
        children: (0, t.jsx)(d.CustomImage, {
            src: i.thumb,
            alt: i.name,
            fill: !0,
            style: {
                objectFit: "cover",
                objectPosition: i.logo.position ? ? "center"
            },
            className: "img",
            loading: "lazy"
        })
    })
})
})).withConfig({
displayName: "AtheletesSectionNew__CarousalElement",
componentId: "sc-ec299436-0"
})
`
  position: relative;
  flex-shrink: 0;
  flex-grow: 0;
  width: calc(100% - 10px);
  margin-left: auto;
  margin-right: auto;

  @media (min-width: ${({theme:e})=>e.global.phone.maxWidth}) {
    width: 100%;
    margin-right: unset;
  }

  @media (min-width: ${({theme:e})=>e.global.laptop.maxWidth}) {
    min-width: unset;
  }

  .element-content {
    position: relative;
    width: 100%;

    .element-image {
      position: relative;
      width: 100%;
      aspect-ratio: 150/109;
      overflow: hidden;
      border-radius: 8px;

      @media (max-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
        aspect-ratio: 3/4;
      }

      @media (min-width: ${({theme:e})=>e.global.laptop.maxWidth}) {
        height: 450px;
        aspect-ratio: unset;
      }

      @media (max-width: ${({theme:e})=>e.global.phone.maxWidth}) {
        height: 410px;
        aspect-ratio: unset;
      }

      .img {
        object-fit: cover;
      }
    }

    .element-image::after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
    }
  }

  & .text-content {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 2.4rem 1.8rem 1.6rem;

    .name {
      margin-top: 1.3rem;
      font-size: 22px;
      font-weight: 500;
    }
  }
`, m = [{
name: "Team UAE Emirates",
logo: {
    src: "web_v2/home/sports-team-UAE/UAE-emirates-logo.webp",
    width: 40,
    height: 48
},
thumb: "web_v2/home/sports-team-UAE/1.webp/w_900",
description: '"The Ultrahuman Ring is a great tool to better understand things like sleep quality and HRV which are important considerations when preparing your fueling needs."'
}, {
name: "UAE Team ADQ",
logo: {
    src: "web_v2/home/sports-team-UAE/uae-team-adq.png",
    width: 132,
    height: 38,
    position: "right"
},
thumb: "web_v2/home/sports-team-UAE/uae-team-adq.png/w_900",
description: '"This collaboration will assist us in optimizing our training and preparation so that we can continue to compete at the highest level."'
}, {
name: "Roojai Insurance Cycling Team",
logo: {
    src: "web_v2/home/sports-team-UAE/Bahrain-victorious-logo.webp",
    width: 132,
    height: 38,
    position: "right"
},
thumb: "web_v2/home/sports-team-UAE/3.jpg/w_900",
description: `"Ultrahuman's innovative training and coaching platform will help the athletes achieve their performance goals. Athletes will get data-backed interventions to improve their performance and recovery protocols."

    `
}], h = o.css `
  /* Slider */
  .slick-slider {
    position: relative;
    display: block;
    box-sizing: border-box;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    -webkit-touch-callout: none;
    -khtml-user-select: none;
    -ms-touch-action: pan-y;
    touch-action: pan-y;

    @media (max-width: ${({theme:e})=>e.global.phone.maxWidth}) {
      width: calc(100vw - 24px);
    }
  }

  // custom
  .slick-slider button {
    position: absolute;
    z-index: 1;
    cursor: pointer;

    bottom: -60px;

    border-radius: 50%;

    border: none;
    background-color: transparent;
    color: #ffffff;
    @media (max-width: ${({theme:e})=>e.global.phone.maxWidth}) {
      display: none;
    }

    &:first-child {
      top: -10.5%;
      left: 94%;
      height: 6.4rem;
      transform: translateX(-100%);

      &:hover .circle-blur-btn {
        transform: translateX(-10%);
      }
    }

    &:last-child {
      top: -10.5%;
      height: 6.4rem;
      right: 5%;
      transform: translateX(100%);

      &:hover .circle-blur-btn {
        transform: translateX(10%);
      }
    }

    .circle-blur-btn {
      height: 5.3rem;
      width: 5.3rem;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      // background-color: rgba(0, 0, 0, 0.1);
      -webkit-backdrop-filter: blur(20px);
      backdrop-filter: blur(20px);
      transition: all 0.2s cubic-bezier(0.25, 0.25, 0.25, 1);
      transform: none;
      border: 1px solid #00000060 !important;
    }

    &:active .circle-blur-btn {
      // filter: brightness(20%);
      background-color: rgba(0, 0, 0, 0.1);
    }
  }

  .slick-list {
    position: relative;

    display: block;
    overflow-x: hidden;

    margin: 0;
    padding: 0;
  }
  .slick-list:focus {
    outline: none;
  }
  .slick-list.dragging {
    cursor: pointer;
    cursor: hand;
  }

  .slick-slider .slick-track,
  .slick-slider .slick-list {
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    -o-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  .slick-track {
    position: relative;
    top: 0;
    left: 0;

    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  .slick-track:before,
  .slick-track:after {
    display: table;

    content: '';
  }
  .slick-track:after {
    clear: both;
  }
  .slick-loading .slick-track {
    visibility: hidden;
  }

  .slick-slide {
    display: none;
    float: left;

    height: 100%;
    min-height: 1px;
  }
  [dir='rtl'] .slick-slide {
    float: right;
  }

  .slick-slide img {
    display: block;
    // border : 5px solid red;
    // custom
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
  }
  .slick-slide.slick-loading img {
    display: none;
    border: 5px solid blue;
  }
  .slick-slide.dragging img {
    pointer-events: none;
  }
  .slick-initialized .slick-slide {
    display: block;
  }
  .slick-loading .slick-slide {
    visibility: hidden;
  }
  .slick-vertical .slick-slide {
    display: block;

    height: auto;

    border: 1px solid transparent;
  }
  .slick-arrow.slick-hidden {
    display: none;
  }

  .slick-slide {
    width: 100%;
  }

  .slids-thumbs-container {
    margin-top: 0.8rem;
    max-width: 100%;
    width: fit-content;
    display: flex;
    flex-direction: row;
    gap: 0 0.8rem;
    flex-wrap: nowrap;
    overflow-x: auto;

    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
      display: none; /* Safari and Chrome */
    }

    img {
      height: 4.8rem;
      width: 8.6rem;
      object-fit: cover;
      transition: all 0.2s ease-in-out;
      cursor: pointer;
      flex-shrink: 0;

      &:not(.active) {
        opacity: 0.4;
      }
    }
  }
`, f = o.css `
  .embla {
    position: relative;
    overflow: hidden;

    @media (max-width: ${({theme:e})=>e.global.phone.maxWidth}) {
      width: calc(100vw - 24px);
    }
  }

  .embla__container {
    display: flex;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-touch-callout: none;
    -khtml-user-select: none;
    -ms-touch-action: pan-y;
    touch-action: pan-y;
  }

  .embla__slide {
    flex: 0 0 50%;
    min-width: 0;
    padding-left: 10px;
    padding-right: 10px;

    @media (max-width: 878px) {
      flex: 0 0 calc(100% - 36px);
      padding-left: 2px;
      padding-right: 2px;
    }
  }

  .embla__button {
    position: absolute;
    z-index: 10;
    cursor: pointer;
    border: none;
    background-color: transparent;
    color: #ffffff;

    @media (max-width: ${({theme:e})=>e.global.phone.maxWidth}) {
      display: none;
    }

    &.embla__button--prev {
      top: -10.5%;
      left: 94%;
      height: 6.4rem;
      transform: translateX(-100%);
    }

    &.embla__button--next {
      top: -10.5%;
      height: 6.4rem;
      right: 5%;
      transform: translateX(100%);
    }
  }
`, u = (0, o.default)(({
className: e
}) => {
let [o, r] = (0, n.default)({
    loop: !0,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
        "(max-width: 878px)": {
            align: "center",
            containScroll: "trimSnaps"
        }
    }
}), d = (0, a.useCallback)(() => {
    r && r.scrollPrev()
}, [r]), m = (0, a.useCallback)(() => {
    r && r.scrollNext()
}, [r]), {
    t: h
} = (0, i.useTranslation)("home"), f = [{
    name: h("home.athleteSectionNew.athletes.a.teamName"),
    logo: {
        src: "web_v2/home/sports-team-UAE/UAE-emirates-logo.webp",
        width: 40,
        height: 48
    },
    thumb: "web_v2/home/sports-team-UAE/1.webp/w_900",
    description: `"${h("home.athleteSectionNew.athletes.a.description")}"`
}, {
    name: h("home.athleteSectionNew.athletes.c.teamName"),
    logo: {
        src: "web_v2/home/sports-team-UAE/Bahrain-victorious-logo.webp",
        width: 132,
        height: 38,
        position: "right"
    },
    thumb: "web_v2/home/sports-team-UAE/3.jpg/w_900",
    description: `"${h("home.athleteSectionNew.athletes.c.description")}"`
}, {
    name: h("home.athleteSectionNew.athletes.b.teamName"),
    logo: {
        src: "web_v2/home/sports-team-UAE/uae-team-adq.png",
        width: 132,
        height: 38,
        position: "right"
    },
    thumb: "web_v2/home/sports-team-UAE/uae-team-adq.png/w_900",
    description: `"${h("home.athleteSectionNew.athletes.b.description")}"`
}];
return (0, t.jsx)("section", {
    className: e,
    children: (0, t.jsx)(s.Container, {
        children: (0, t.jsxs)("div", {
            className: "content",
            children: [(0, t.jsxs)(l.H2Large, {
                children: [h("home.athleteSectionNew.title.a"), " ", (0, t.jsx)("br", {}), " ", h("home.athleteSectionNew.title.b")]
            }), (0, t.jsxs)("div", {
                className: "carousal-container",
                children: [(0, t.jsx)("div", {
                    className: "embla",
                    ref: o,
                    children: (0, t.jsx)("div", {
                        className: "embla__container",
                        children: f.map((e, i) => (0, t.jsx)("div", {
                            className: "embla__slide",
                            children: (0, t.jsxs)("div", {
                                className: "element-parent",
                                children: [(0, t.jsx)(p, {
                                    data: e
                                }, e.name), (0, t.jsxs)("div", {
                                    className: "text-container",
                                    children: [(0, t.jsx)("div", {
                                        className: "name",
                                        children: e.name
                                    }), (0, t.jsx)("div", {
                                        className: "desc",
                                        children: e.description
                                    })]
                                })]
                            })
                        }, i))
                    })
                }), (0, t.jsx)("div", {
                    className: "embla__button embla__button--prev",
                    role: "button",
                    "aria-label": "Previous",
                    children: (0, t.jsx)(c.CarouselButton, {
                        onClick: d,
                        variant: "light",
                        rounded: "full",
                        fill: !0,
                        direction: "prev",
                        "aria-label": "Previous"
                    })
                }), (0, t.jsx)("div", {
                    className: "embla__button embla__button--next",
                    role: "button",
                    "aria-label": "Next",
                    children: (0, t.jsx)(c.CarouselButton, {
                        onClick: m,
                        variant: "light",
                        rounded: "full",
                        fill: !0,
                        direction: "next",
                        "aria-label": "Next"
                    })
                })]
            })]
        })
    })
})
}).withConfig({
displayName: "AtheletesSectionNew",
componentId: "sc-ec299436-1"
})
`
  padding: 8rem 0;
  background-color: #eee;

  @media (min-width: ${({theme:e})=>e.global.phone.maxWidth}) {
    padding: 150px 0;
    .mobile-hidden {
      display: inline;
    }
  }

  .mobile-hidden {
    display: none;
  }

  & .content {
    h2 {
      text-align: left;
      letter-spacing: -3px;
      color: ${({theme:e})=>e.colorsV2.primary};

      @media (min-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
        margin: 0 2.4rem;
        font-size: 8rem;
        line-height: 8rem;
      }
    }

    p {
      width: 100%;
      text-align: center;
      font-size: 1.8rem;
      color: rgb(255, 255, 255, 0.7);

      @media (min-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
        width: 75%;
        padding: 0 0rem;
        text-align: center;
        font-size: 2.1rem;
        max-width: 600px;
        margin: 0 auto;
      }
    }
  }
  .carousal-container {
    ${r.hideScrollbar}
    ${f}
    position: relative;

    overflow: hidden;

    @media (min-width: ${({theme:e})=>e.global.phone.maxWidth}) {
      overflow: visible;
    }

    .element-parent {
      position: relative;
      flex-shrink: 0;
      position: relative;
      margin-top: 1.6rem;
      overflow-x: auto;
      ${r.hideScrollbar}
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      @media (min-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
        flex-shrink: initial;
      }

      .text-container {
        width: 100%;

        position: relative;
        bottom: 0;
        left: 0;

        font-weight: 500;
        text-align: left;
        padding-left: 0.4rem;
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#000000",endColorstr="#000000",GradientType=1);
        padding-top: 1.4rem;

        @media (min-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
          bottom: 0rem;
          padding-top: 1.6rem;
          padding-bottom: 0.2rem;
          padding: 1.6rem 1.2rem 0.2rem;
        }

        .name {
          font-size: 3.2rem;
          letter-spacing: -1.2px;
          max-width: calc(100% - 24px);

          @media (min-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
            font-size: 4rem;
            letter-spacing: -1.6px;
            max-width: unset;
          }
        }
        .desc {
          font-size: 1.6rem;
          color: #00000080;
          padding-top: 0.8rem;
          font-weight: 400;
          max-width: calc(100% - 24px);
          letter-spacing: -0.1px;

          @media (min-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
            font-size: 2rem;
            max-width: unset;
            letter-spacing: -0.2px;
          }
        }
      }
    }
  }
`;
e.s(["Arrow", 0, ({
className: e,
style: i,
onClick: n,
children: a
}) => (0, t.jsx)("button", {
className: e,
style: i,
onClick: () => {
    n && n()
},
children: a
}), "AtheletesSectionNew", 0, u, "athletes", 0, m, "emblaStyles", 0, f, "sliderStyle", 0, h])
}, 95458, e => {
"use strict";
var t = e.i(91398);
e.s(["M1Icon", 0, e => (0, t.jsx)("svg", {
width: "100%",
height: "100%",
viewBox: "0 0 22 22",
fill: "none",
xmlns: "http://www.w3.org/2000/svg",
preserveAspectRatio: "xMidYMid meet",
className: e.className,
style: e.style,
children: (0, t.jsx)("path", {
    d: "M11 0C17.0751 0 22 4.92487 22 11C22 17.0751 17.0751 22 11 22C4.92487 22 0 17.0751 0 11C0 4.92487 4.92487 0 11 0ZM5.88281 7V10.4854H7.96387L4.5 13.4199L7.0166 16L11 12.625L14.9834 16L17.5 13.4199L14.0361 10.4854H16.1123V7H5.88281Z",
    fill: e.fill ? ? "#ffffff"
})
})])
}, 89057, e => {
"use strict";
var t = e.i(91398);
e.s(["RingAirIcon", 0, e => (0, t.jsx)("svg", {
width: "100%",
height: "100%",
viewBox: "0 0 22 22",
fill: "none",
xmlns: "http://www.w3.org/2000/svg",
preserveAspectRatio: "xMidYMid meet",
className: e.className,
style: e.style,
children: (0, t.jsx)("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M11 0C17.0751 0 22 4.92487 22 11C22 17.0751 17.0751 22 11 22C4.92487 22 0 17.0751 0 11C0 4.92487 4.92487 0 11 0ZM11 2.2C6.13989 2.2 2.2 6.13989 2.2 11C2.2 15.8601 6.13989 19.8 11 19.8C15.8601 19.8 19.8 15.8601 19.8 11C19.8 6.13989 15.8601 2.2 11 2.2ZM15.9494 17.601C14.5707 18.6365 12.857 19.25 11 19.25C9.14311 19.25 7.4295 18.6365 6.05079 17.6012L15.9494 17.601Z",
    fill: e.fill ? ? "#ffffff"
})
})])
}, 68115, e => {
"use strict";
var t = e.i(91398);
e.s(["HomeIcon", 0, e => (0, t.jsxs)("svg", {
width: "100%",
height: "100%",
viewBox: "0 0 25 16",
fill: "none",
xmlns: "http://www.w3.org/2000/svg",
preserveAspectRatio: "xMidYMid meet",
className: e.className,
style: e.style,
children: [(0, t.jsx)("rect", {
    width: "25",
    height: "11",
    rx: "1",
    fill: e.fill ? ? "#ffffff"
}), (0, t.jsx)("path", {
    d: "M0 13.0703C0 12.7942 0.223858 12.5703 0.5 12.5703H24.5C24.7761 12.5703 25 12.7942 25 13.0703V13.659C25 13.7856 24.9519 13.9075 24.8655 14.0001L23.593 15.3636C23.2148 15.7689 22.6852 15.999 22.1309 15.999H12.5H2.54135C1.8887 15.999 1.2771 15.6806 0.902851 15.1459L0.0903752 13.9851C0.0315516 13.9011 0 13.801 0 13.6984V13.0703Z",
    fill: e.fill ? ? "#ffffff"
})]
})])
}, 27681, e => {
"use strict";
var t = e.i(91398);
e.s(["BloodVisionIcon", 0, e => (0, t.jsx)("svg", {
width: "100%",
height: "100%",
viewBox: "0 0 15 20",
fill: "none",
xmlns: "http://www.w3.org/2000/svg",
preserveAspectRatio: "xMidYMid meet",
className: e.className,
style: e.style,
children: (0, t.jsx)("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M14.1667 0C14.5758 0 14.916 0.294792 14.9866 0.683541L15 0.833333V3.33333C15 6.23701 13.3496 8.75547 10.9357 10.0018C13.3496 11.2445 15 13.763 15 16.6667V19.1667L14.9866 19.3165C14.916 19.7052 14.5758 20 14.1667 20C13.7064 20 13.3333 19.6269 13.3333 19.1667V18.75H1.66667V19.1667L1.65324 19.3165C1.58268 19.7052 1.24243 20 0.833333 20C0.373096 20 0 19.6269 0 19.1667V16.6667L0.0106062 16.2652C0.102278 14.5337 0.784963 12.9122 1.93247 11.6416C3.3452 10.0772 5.35033 9.16667 7.5 9.16667C9.48107 9.16667 11.2316 8.17889 12.286 6.66903L2.71266 6.66746C2.85214 6.8672 3.00459 7.05889 3.16939 7.24138C3.47785 7.58294 3.45102 8.1099 3.10945 8.41836C2.76789 8.72683 2.24093 8.69999 1.93247 8.35843C0.784963 7.08778 0.102278 5.46634 0.0106062 3.73477L0 3.33333V0.833333C0 0.373096 0.373096 0 0.833333 0C1.24243 0 1.58268 0.294792 1.65324 0.683541L1.66667 0.833333V1.25H13.3333V0.833333C13.3333 0.373096 13.7064 0 14.1667 0ZM13.0918 15.0004L1.90815 14.9999C1.74956 15.5331 1.66667 16.0933 1.66667 16.6667V17.0833H13.3333V16.6667L13.3247 16.3466C13.2995 15.8813 13.2198 15.4304 13.0918 15.0004ZM7.5 10.8333C5.82684 10.8333 4.26935 11.5406 3.16939 12.7586C3.00414 12.9416 2.85131 13.1338 2.71152 13.3342L12.2871 13.3326C11.2329 11.8218 9.4818 10.8333 7.5 10.8333ZM13.3333 2.91667H1.66667V3.33333C1.66667 3.9073 1.74973 4.46801 1.90864 5.00181L13.0913 5.00131C13.2196 4.57074 13.2995 4.11932 13.3247 3.65337L13.3333 3.33333V2.91667Z",
    fill: e.fill ? ? "#ffffff"
})
})])
}, 11829, (e, t, i) => {
"use strict";

function n(e, t) {
var i = e.length;
for (e.push(t); 0 < i;) {
    var n = i - 1 >>> 1,
        a = e[n];
    if (0 < r(a, t)) e[n] = t, e[i] = a, i = n;
    else break
}
}

function a(e) {
return 0 === e.length ? null : e[0]
}

function o(e) {
if (0 === e.length) return null;
var t = e[0],
    i = e.pop();
if (i !== t) {
    e[0] = i;
    for (var n = 0, a = e.length, o = a >>> 1; n < o;) {
        var l = 2 * (n + 1) - 1,
            s = e[l],
            d = l + 1,
            c = e[d];
        if (0 > r(s, i)) d < a && 0 > r(c, s) ? (e[n] = c, e[d] = i, n = d) : (e[n] = s, e[l] = i, n = l);
        else if (d < a && 0 > r(c, i)) e[n] = c, e[d] = i, n = d;
        else break
    }
}
return t
}

function r(e, t) {
var i = e.sortIndex - t.sortIndex;
return 0 !== i ? i : e.id - t.id
}
if (i.unstable_now = void 0, "object" == typeof performance && "function" == typeof performance.now) {
var l, s = performance;
i.unstable_now = function() {
    return s.now()
}
} else {
var d = Date,
    c = d.now();
i.unstable_now = function() {
    return d.now() - c
}
}
var p = [],
m = [],
h = 1,
f = null,
u = 3,
g = !1,
x = !1,
b = !1,
w = !1,
y = "function" == typeof setTimeout ? setTimeout : null,
v = "function" == typeof clearTimeout ? clearTimeout : null,
C = "u" > typeof setImmediate ? setImmediate : null;

function k(e) {
for (var t = a(m); null !== t;) {
    if (null === t.callback) o(m);
    else if (t.startTime <= e) o(m), t.sortIndex = t.expirationTime, n(p, t);
    else break;
    t = a(m)
}
}

function j(e) {
if (b = !1, k(e), !x)
    if (null !== a(p)) x = !0, _ || (_ = !0, l());
    else {
        var t = a(m);
        null !== t && P(j, t.startTime - e)
    }
}
var _ = !1,
I = -1,
N = 5,
$ = -1;

function W() {
return !!w || !(i.unstable_now() - $ < N)
}

function S() {
if (w = !1, _) {
    var e = i.unstable_now();
    $ = e;
    var t = !0;
    try {
        e: {
            x = !1,
            b && (b = !1, v(I), I = -1),
            g = !0;
            var n = u;
            try {
                t: {
                    for (k(e), f = a(p); null !== f && !(f.expirationTime > e && W());) {
                        var r = f.callback;
                        if ("function" == typeof r) {
                            f.callback = null, u = f.priorityLevel;
                            var s = r(f.expirationTime <= e);
                            if (e = i.unstable_now(), "function" == typeof s) {
                                f.callback = s, k(e), t = !0;
                                break t
                            }
                            f === a(p) && o(p), k(e)
                        } else o(p);
                        f = a(p)
                    }
                    if (null !== f) t = !0;
                    else {
                        var d = a(m);
                        null !== d && P(j, d.startTime - e), t = !1
                    }
                }
                break e
            }
            finally {
                f = null, u = n, g = !1
            }
        }
    }
    finally {
        t ? l() : _ = !1
    }
}
}
if ("function" == typeof C) l = function() {
C(S)
};
else if ("u" > typeof MessageChannel) {
var V = new MessageChannel,
    L = V.port2;
V.port1.onmessage = S, l = function() {
    L.postMessage(null)
}
} else l = function() {
y(S, 0)
};

function P(e, t) {
I = y(function() {
    e(i.unstable_now())
}, t)
}
i.unstable_IdlePriority = 5, i.unstable_ImmediatePriority = 1, i.unstable_LowPriority = 4, i.unstable_NormalPriority = 3, i.unstable_Profiling = null, i.unstable_UserBlockingPriority = 2, i.unstable_cancelCallback = function(e) {
e.callback = null
}, i.unstable_forceFrameRate = function(e) {
0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : N = 0 < e ? Math.floor(1e3 / e) : 5
}, i.unstable_getCurrentPriorityLevel = function() {
return u
}, i.unstable_next = function(e) {
switch (u) {
    case 1:
    case 2:
    case 3:
        var t = 3;
        break;
    default:
        t = u
}
var i = u;
u = t;
try {
    return e()
} finally {
    u = i
}
}, i.unstable_requestPaint = function() {
w = !0
}, i.unstable_runWithPriority = function(e, t) {
switch (e) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        break;
    default:
        e = 3
}
var i = u;
u = e;
try {
    return t()
} finally {
    u = i
}
}, i.unstable_scheduleCallback = function(e, t, o) {
var r = i.unstable_now();
switch (o = "object" == typeof o && null !== o && "number" == typeof(o = o.delay) && 0 < o ? r + o : r, e) {
    case 1:
        var s = -1;
        break;
    case 2:
        s = 250;
        break;
    case 5:
        s = 0x3fffffff;
        break;
    case 4:
        s = 1e4;
        break;
    default:
        s = 5e3
}
return s = o + s, e = {
    id: h++,
    callback: t,
    priorityLevel: e,
    startTime: o,
    expirationTime: s,
    sortIndex: -1
}, o > r ? (e.sortIndex = o, n(m, e), null === a(p) && e === a(m) && (b ? (v(I), I = -1) : b = !0, P(j, o - r))) : (e.sortIndex = s, n(p, e), x || g || (x = !0, _ || (_ = !0, l()))), e
}, i.unstable_shouldYield = W, i.unstable_wrapCallback = function(e) {
var t = u;
return function() {
    var i = u;
    u = t;
    try {
        return e.apply(this, arguments)
    } finally {
        u = i
    }
}
}
}, 52659, (e, t, i) => {
"use strict";
t.exports = e.r(11829)
}, 69286, e => {
"use strict";
var t = e.i(91398),
i = e.i(91788),
n = e.i(60814),
a = e.i(19231),
o = e.i(68734),
r = e.i(57706),
l = e.i(78198);
let s = {
    MOBILE: (0, l.getCompressedAssetUrl)("/web_v2/careers/portrait.mp4"),
    DESKTOP: (0, l.getCompressedAssetUrl)("/web_v2/careers/landscape.mp4")
},
d = n.default.video.withConfig({
    displayName: "CareerSection__StyledVideo",
    componentId: "sc-5ae9076e-0"
})
`
  width: 100%;
  object-fit: cover;
  object-position: center;
  filter: brightness(1);
  pointer-events: none;
  aspect-ratio: 358 / 583;

  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    aspect-ratio: 1296 / 739;
  }
`, c = n.default.div.withConfig({
displayName: "CareerSection__Overlay",
componentId: "sc-5ae9076e-1"
})
`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 2;
`, p = n.default.div.withConfig({
displayName: "CareerSection__TextContainer",
componentId: "sc-5ae9076e-2"
})
`
  position: absolute;
  inset: 0;
  z-index: 3;
  display: grid;
  place-items: center;
  color: #fff;
  text-align: center;
  max-width: 90%;
  margin: 0 auto;
`, m = n.default.div.withConfig({
displayName: "CareerSection__Content",
componentId: "sc-5ae9076e-3"
})
`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin: 0 auto;
`, h = n.default.h3.withConfig({
displayName: "CareerSection__Title",
componentId: "sc-5ae9076e-4"
})
`
  font-size: 32px;
  font-weight: 500;
  line-height: 40px; /* 125% */
  letter-spacing: -0.64px;
  color: #ffffff;

  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    font-size: 48px;
    line-height: 48px; /* 100% */
    letter-spacing: -0.48px;
    background: linear-gradient(90deg, #fff 0%, #f9f9f9 52%, #fff 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`, f = n.default.p.withConfig({
displayName: "CareerSection__SubTitle",
componentId: "sc-5ae9076e-5"
})
`
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px; /* 150% */
  letter-spacing: -0.16px;

  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    text-shadow: 0px 0px 4px rgba(195, 195, 195, 0.25);
    font-size: 19px;
    line-height: 28px; /* 147.368% */
    letter-spacing: -0.19px;

    max-width: 50ch;
  }
`, u = n.default.div.withConfig({
displayName: "CareerSection",
componentId: "sc-5ae9076e-6"
})
`
  background: white;
  padding: 8rem 0;

  @media (min-width: ${({theme:e})=>e.global.phone.maxWidth}) {
    // min-height: 100vh;
    // min-height: 100lvh;
    padding: 150px 0;
  }
`, g = n.default.div.withConfig({
displayName: "CareerSection__CareerContainer",
componentId: "sc-5ae9076e-7"
})
`
  position: relative;
  border-radius: 16px;
  overflow: hidden;

  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    border-radius: 48px;
  }
`, x = (0, n.default)(r.CTALink).withConfig({
displayName: "CareerSection__StyledLink",
componentId: "sc-5ae9076e-8"
})
`
  margin-top: 16px;
`, b = () => {
let e = (0, o.useAutoPlayVideoRef)();
return (0, i.useEffect)(() => {
    let t = () => {
        if (!e.current) return;
        let t = window.innerWidth > window.innerHeight,
            i = e.current.src,
            n = t ? s.DESKTOP : s.MOBILE;
        i && i.endsWith(n) || (e.current.src = n)
    };
    return window.addEventListener("resize", t), t(), () => window.removeEventListener("resize", t)
}, []), (0, t.jsx)(u, {
    children: (0, t.jsx)(a.Container, {
        style: {
            height: "100%"
        },
        children: (0, t.jsxs)(g, {
            children: [(0, t.jsx)(d, {
                ref: e,
                preload: "none",
                loop: !0,
                autoPlay: !0,
                muted: !0,
                playsInline: !0,
                children: (0, t.jsx)("source", {
                    src: s.MOBILE,
                    type: "video/mp4"
                })
            }), (0, t.jsx)(c, {}), (0, t.jsx)(p, {
                style: {
                    color: "black"
                },
                children: (0, t.jsxs)(m, {
                    children: [(0, t.jsx)(h, {
                        children: "Build the future of health"
                    }), (0, t.jsx)(f, {
                        children: "Work with us to turn ideas into breakthroughs that help the world."
                    }), (0, t.jsx)(x, {
                        target: "_blank",
                        href: "https://ultrahuman.zohorecruit.in/jobs/Careers",
                        children: "Join the team"
                    })]
                })
            })]
        })
    })
})
};
e.s(["CareerSectionComponent", 0, b, "default", 0, b])
}, 84161, e => {
e.v({
className: "twkeverett_2149517d-module__UGA9Ya__className",
variable: "twkeverett_2149517d-module__UGA9Ya__variable"
})
}, 24649, e => {
"use strict";
var t = e.i(84161);
let i = {
className: t.default.className,
style: {
    fontFamily: "'twkEverett', 'twkEverett Fallback', system-ui, sans-serif"
}
};
null != t.default.variable && (i.variable = t.default.variable), e.s(["twkEverett", 0, i], 24649)
}, 39028, e => {
e.v({
className: "jetbrains_mono_85243f4a-module__eb-CGW__className",
variable: "jetbrains_mono_85243f4a-module__eb-CGW__variable"
})
}, 8173, e => {
"use strict";
var t = e.i(39028);
let i = {
className: t.default.className,
style: {
    fontFamily: "'JetBrains Mono', monospace",
    fontStyle: "normal"
}
};
null != t.default.variable && (i.variable = t.default.variable), e.s(["jetbrainsMono", 0, i], 8173)
}, 57546, 60358, e => {
"use strict";
var t = e.i(91398),
i = e.i(91788),
n = e.i(26019),
a = e.i(60814),
o = e.i(86332),
r = e.i(21666),
l = e.i(3115),
s = e.i(68489),
d = e.i(57134),
c = e.i(57232),
p = e.i(78198);
let m = (0, s.default)(() => e.A(60501), {
    loadableGenerated: {
        modules: [97611]
    },
    ssr: !1
}),
h = {
    web: "web_v2/ring-pro/landing-page/videos/ring-pro-video-full-desktop.mp4/w_1920",
    mobile: "web_v2/ring-pro/landing-page/videos/ring-pro-video-full-mobile.mp4/w_1080"
},
f = a.default.div.withConfig({
    displayName: "RingProVideoModal__VideoModalContent",
    componentId: "sc-52abe3d4-0"
})
`
  max-width: 95vw;
  margin: 0 auto;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: ${({theme:e})=>e.globalV2?.md?.maxWidth}) {
    width: 90vw;
    max-width: 90vw;
  }

  @media (min-width: ${({theme:e})=>e.globalV2?.xxxl?.minWidth}) {
    width: 85vw;
    max-width: 85vw;
  }

  .video-player {
    width: 100%;
    max-height: 90vh;
    border-radius: 24px;
    overflow: hidden;
    background: #000;

    video-js {
      width: 100%;
      height: auto;
      max-height: 90vh;
      border-radius: 24px;
      background: #000;
    }

    .vjs-poster {
      border-radius: 24px;
      object-fit: contain;
    }

    .vjs-big-play-button {
      display: none !important;
    }

    .vjs-paused .vjs-big-play-button {
      display: none !important;
    }

    .vjs-control-bar {
      display: flex !important;
    }
  }
`, u = ({
videoSrc: e,
posterSrc: n,
onMount: a,
onUnmount: o
}) => {
(0, i.useEffect)(() => (a && a(), () => {
    o && o()
}), [a, o]);
let r = (0, i.useMemo)(() => {
    if (e) return {
        autoplay: !0,
        controls: !0,
        responsive: !0,
        fluid: !0,
        sources: [{
            src: e,
            type: "video/mp4"
        }],
        playsinline: !0,
        preload: "auto",
        muted: !1,
        loop: !1,
        poster: n,
        html5: {
            vhs: {
                overrideNative: !0
            },
            nativeAudioTracks: !1,
            nativeVideoTracks: !1
        }
    }
}, [e, n]);
return r ? (0, t.jsx)(f, {
    children: (0, t.jsx)(m, {
        options: r
    }, e)
}) : null
};

function g(e) {
let n = (0, i.useContext)(d.ModalContext),
    {
        width: a
    } = (0, c.useWindowSize)(),
    o = (0, i.useRef)(null),
    r = e ? .bannerVideoRef ? ? o,
    l = (0, i.useRef)(!1),
    s = (0, i.useRef)(0),
    m = (0, i.useRef)(null),
    f = (0, i.useCallback)(() => {
        l.current || (l.current = !0, r.current && !r.current.paused && r.current.pause(), s.current = window.pageYOffset || document.documentElement.scrollTop, document.body.style.overflow = "hidden", document.body.style.position = "fixed", document.body.style.top = `-${s.current}px`, document.body.style.width = "100%")
    }, [r]),
    g = (0, i.useCallback)(() => {
        if (!l.current) return;
        l.current = !1;
        let e = s.current;
        if (document.body.style.overflow = "", document.body.style.position = "", document.body.style.top = "", document.body.style.width = "", window.scrollTo(0, e), r.current && r.current.paused) {
            let e = r.current.getBoundingClientRect();
            if (e.top < window.innerHeight && e.bottom > 0) {
                let e = r.current.play();
                e && "function" == typeof e.catch && e.catch(() => {})
            }
        }
    }, [r]);
(0, i.useEffect)(() => n ? (m.current = n.hide, n.hide = () => {
    g(), m.current && m.current()
}, () => {
    m.current && (n.hide = m.current)
}) : void 0, [n, g]);
let x = (0, i.useCallback)(e => "string" == typeof e ? e : a && a < 768 ? e.mobile : e.web, [a]),
    b = (0, i.useCallback)(e => {
        if (/^(https?:)?\/\//.test(e)) return e;
        let t = e.startsWith("/") ? e : `/${e}`;
        return (0, p.getCompressedAssetUrl)(t)
    }, []),
    w = (0, i.useMemo)(() => b(x(h)), [x, b]);
return {
    openVideoModal: (0, i.useCallback)(() => {
        f();
        let e = (0, t.jsx)(u, {
            videoSrc: w,
            onMount: f,
            onUnmount: g
        });
        n.set(e), n.setPortal(!0), n.show()
    }, [w, n, f, g])
}
}
e.s(["useRingProVideoModal", () => g], 60358);
var x = e.i(28679),
b = e.i(81022);
let w = a.default.section.withConfig({
displayName: "HeroSection__Section",
componentId: "sc-5755bba-0"
})
`
  position: relative;
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  padding: 120px 24px 0;
  gap: 24px;
  min-height: 100vh;

  @media (min-width: ${({theme:e})=>e.globalV2.md.minWidth}) {
    padding: 120px 48px 0;
    min-height: 100vh;
    // min-height: auto;
  }
`, y = a.default.div.withConfig({
displayName: "HeroSection__TextBlock",
componentId: "sc-5755bba-1"
})
`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #000;
  flex: 0 0 auto;
  z-index: 1;
`, v = (0, a.default)(n.default).withConfig({
displayName: "HeroSection__Wordmark",
componentId: "sc-5755bba-2"
})
`
  height: 32px;
  width: auto;
  margin-bottom: 12px;
`, C = a.default.p.withConfig({
displayName: "HeroSection__Tagline",
componentId: "sc-5755bba-3"
})
`
  font-family: var(--font-twk-everett), sans-serif;
  font-size: 1.6rem;
  font-weight: ${({theme:e})=>e.typographyV2.fontWeight.regular};
  line-height: 1.4;
  color: #000;
  margin: 0 0 24px;

  @media (min-width: ${({theme:e})=>e.globalV2.sm.minWidth}) {
    font-size: 36px;
    letter-spacing: -1px;
    margin-bottom: 12px;
  }
`, k = a.default.div.withConfig({
displayName: "HeroSection__CtaWrapper",
componentId: "sc-5755bba-4"
})
`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`, j = a.default.div.withConfig({
displayName: "HeroSection__CtaColumn",
componentId: "sc-5755bba-5"
})
`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`, _ = a.default.span.withConfig({
displayName: "HeroSection__WatchVideoButtonWrapper",
componentId: "sc-5755bba-6"
})
`
  button { }
`, I = a.default.p.withConfig({
displayName: "HeroSection__AvailabilityNote",
componentId: "sc-5755bba-7"
})
`
  font-size: 14px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.6);
  margin: 8px 0 0;
`, N = a.default.div.withConfig({
displayName: "HeroSection__ProductWrapper",
componentId: "sc-5755bba-8"
})
`
  position: relative;
  width: 100vw;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex: 1;
`, $ = (0, a.default)(r.CustomImage).withConfig({
displayName: "HeroSection__DesktopImage",
componentId: "sc-5755bba-9"
})
`
  width: 100%;
  height: auto;
  display: none;
  object-fit: cover;
  object-position: bottom center;
  transform: translateX(-1.8%);

  @media (min-width: 769px) {
    display: block;
    width: 70vw;
  }
`, W = (0, a.default)(r.CustomImage).withConfig({
displayName: "HeroSection__MobileImage",
componentId: "sc-5755bba-10"
})
`
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  object-position: bottom center;

  @media (min-width: 769px) {
    display: none;
  }
`;
e.s(["HeroSection", 0, ({
parentPage: e = "ring_landing_page"
}) => {
let {
    region: n
} = (0, i.useContext)(l.RegionLocaleContext), a = "US" === n, {
    openVideoModal: r
} = g(), s = (0, i.useContext)(d.ModalContext), c = () => {
    let e = window.location.hostname + window.location.pathname;
    s.set((0, t.jsx)("div", {
        style: {
            height: "min(600px, 60vh)",
            width: "calc(100vw - 48px)",
            maxWidth: 780
        },
        children: (0, t.jsx)(b.TypeformSnippet, {
            typeformId: "nSUlX33B",
            frameTitle: "Notify me",
            style: {
                width: "100%",
                height: "100%"
            },
            trackingParams: {
                utm_source: e,
                utm_medium: "ring-pro-hero"
            }
        })
    })), s.setCloseButtonTheme("light"), s.show()
};
return (0, t.jsxs)(w, {
    role: "banner",
    "aria-label": "Ring Pro Hero",
    children: [(0, t.jsxs)(y, {
        children: [(0, t.jsx)(v, {
            src: "/Pro-wordmark.svg?v=3",
            alt: "PRO",
            width: 120,
            height: 40,
            priority: !0
        }), (0, t.jsx)(C, {
            children: "Performance by Design"
        }), (0, t.jsxs)(k, {
            children: [a ? "ring_landing_page" === e ? (0, t.jsxs)(t.Fragment, {
                children: [(0, t.jsx)(o.ButtonV2, {
                    variant: "black",
                    "aria-label": "Notify me about Ring Pro",
                    onClick: c,
                    children: "Notify me"
                }), (0, t.jsx)(o.ButtonV2, {
                    variant: "transparentDark",
                    "aria-label": "Watch video",
                    onClick: r,
                    children: "Watch video"
                })]
            }) : (0, t.jsxs)(t.Fragment, {
                children: [(0, t.jsx)(o.ButtonV2, {
                    variant: "black",
                    "aria-label": "Notify me about Ring Pro",
                    onClick: c,
                    children: "Notify me"
                }), (0, t.jsx)(o.ButtonV2, {
                    href: "/ring-pro",
                    variant: "transparentDark",
                    "aria-label": "Learn more about Ring Pro",
                    children: "Learn more"
                })]
            }) : (0, t.jsxs)(j, {
                children: [(0, t.jsx)(o.ButtonV2, {
                    href: "/ring-pro/buy",
                    variant: "blue",
                    "aria-label": "Pre-order Ring Pro now",
                    children: "Pre-order now"
                }), "ring_landing_page" === e && (0, t.jsx)(_, {
                    children: (0, t.jsx)(o.ButtonV2, {
                        variant: "flat",
                        "aria-label": "Watch video",
                        onClick: r,
                        endIcon: (0, t.jsx)(x.ChevronRight, {
                            style: {
                                width: 10,
                                height: 10
                            }
                        }),
                        children: "Watch video"
                    })
                })]
            }), "homepage" === e && !1 === a && (0, t.jsx)(o.ButtonV2, {
                href: "/ring-pro",
                variant: "transparentDark",
                "aria-label": "Learn more about Ring Pro",
                children: "Learn more"
            })]
        }), a && (0, t.jsx)(I, {
            children: "Currently unavailable in the U.S."
        })]
    }), (0, t.jsxs)(N, {
        children: [(0, t.jsx)($, {
            src: "web_v2/ring-pro/landing-page/hero/desktop-v2.png",
            alt: "Ultrahuman Ring Pro on charging base",
            width: 1920,
            height: 1080,
            priority: !0
        }), (0, t.jsx)(W, {
            src: "web_v2/ring-pro/landing-page/hero/mobile-v2.png",
            alt: "Ultrahuman Ring Pro on charging base",
            width: 750,
            height: 1e3,
            priority: !0
        })]
    })]
})
}], 57546)
}, 10670, 15575, e => {
"use strict";
var t = e.i(91398),
i = e.i(22367),
n = e.i(60814),
a = e.i(86332),
o = e.i(21666);
e.i(50461);
var r = e.i(59207);
let l = {
[r.ShopifyStore.IN]: {
    variantId: "gid://shopify/ProductVariant/43919354626118",
    checkouturl: "https://ultrahumanstore.myshopify.com/cart/43919354626118:1?channel=buy_button",
    price: 28499,
    offerPrice: 28499,
    discountCode: ""
}
};
e.s(["GiftCartProductShopifyMap", 0, l, "buildCheckoutUrl", 0, (e, t, i, n) => {
let a = l[e];
if (!a) return "";
let o = new URL(a.checkouturl);
return o.searchParams.set("attributes[giftee_name]", t), o.searchParams.set("attributes[giftee_email]", i), n ? o.searchParams.set("discount", n) : o.searchParams.set("discount", a.discountCode), o.toString()
}], 15575);
var s = e.i(228),
d = e.i(93966),
c = e.i(91788),
p = e.i(55037),
m = e.i(78198),
h = e.i(57232),
f = e.i(53147);
let u = n.default.section.withConfig({
displayName: "HowItWorks__SectionWrapper",
componentId: "sc-c0543480-0"
})
`
  ${({$isInsideModal:e})=>e?n.css`
padding: 38 px 0;
`:n.css`
padding: 120 px 0;
`}
`, g = n.default.div.withConfig({
displayName: "HowItWorks__Container",
componentId: "sc-c0543480-1"
})
`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`, x = n.default.div.withConfig({
displayName: "HowItWorks__Header",
componentId: "sc-c0543480-2"
})
`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-bottom: 80px;
  margin-top: 40px;
`, b = n.default.div.withConfig({
displayName: "HowItWorks__Subtitle",
componentId: "sc-c0543480-3"
})
`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: #000;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 28px */
  letter-spacing: -0.6px;
`, w = n.default.h2.withConfig({
displayName: "HowItWorks__Title",
componentId: "sc-c0543480-4"
})
`
  color: #000;
  text-align: center;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 32px */
  letter-spacing: -0.96px;
  margin: 0;
`, y = n.default.div.withConfig({
displayName: "HowItWorks__CTAWrapper",
componentId: "sc-c0543480-5"
})
`
  display: flex;
  justify-content: center;
`, v = n.default.div.withConfig({
displayName: "HowItWorks__StepsList",
componentId: "sc-c0543480-6"
})
`
  display: flex;
  flex-direction: column;
  gap: 80px;
`, C = n.default.div.withConfig({
displayName: "HowItWorks__StepItem",
componentId: "sc-c0543480-7"
})
`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
`, k = n.default.div.withConfig({
displayName: "HowItWorks__ImageWrapper",
componentId: "sc-c0543480-8"
})
`
  width: 100%;
  max-width: 800px;
  margin-bottom: 16px;
  border-radius: 24px;
  border: 3px solid rgba(0, 0, 0, 0.09);
  overflow: hidden;
`, j = n.default.img.withConfig({
displayName: "HowItWorks__StepImage",
componentId: "sc-c0543480-9"
})
`
  width: 100%;
  height: 420px;
  object-fit: cover;
  display: block;
`, _ = n.default.div.withConfig({
displayName: "HowItWorks__TextWrapper",
componentId: "sc-c0543480-10"
})
`
  display: flex;
  flex-direction: column;
  gap: 2px;
  text-align: left;
`, I = n.default.h3.withConfig({
displayName: "HowItWorks__StepTitle",
componentId: "sc-c0543480-11"
})
`
  color: #000;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 28px */
  letter-spacing: -0.6px;
  margin: 0;
`, N = n.default.p.withConfig({
displayName: "HowItWorks__StepSubtitle",
componentId: "sc-c0543480-12"
})
`
  color: #000;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 28px */
  letter-spacing: -0.6px;
  margin: 0;
`, $ = n.default.div.withConfig({
displayName: "HowItWorks__TermsWrapper",
componentId: "sc-c0543480-13"
})
`
  max-width: 800px;
  margin: 0 auto;
  margin-bottom: 92px;
`, W = n.default.h4.withConfig({
displayName: "HowItWorks__TermsTitle",
componentId: "sc-c0543480-14"
})
`
  margin: 0 0 28px 0;
  color: rgba(0, 0, 0, 0.7);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: -0.6px;

  @media (max-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    font-size: 14px;
  }
`, S = n.default.ol.withConfig({
displayName: "HowItWorks__TermsList",
componentId: "sc-c0543480-15"
})
`
  padding-left: 24px;
  margin: 0;
  list-style-position: outside;

  /* Apply typography to the whole list so numbers and wrapped lines match exactly */
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: -0.6px;

  @media (max-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    font-size: 14px;
  }

  li {
    align-self: stretch;
    margin-bottom: 6px;
    color: rgba(0, 0, 0, 0.7);
  }
`, V = n.default.div.withConfig({
displayName: "HowItWorks__Divider",
componentId: "sc-c0543480-16"
})
`
  width: 100%;
  height: 1px;
  background: #000000;
  opacity: 0.1;
  margin: 92px 0;
`, L = [{
title: "Step 1: Give the gift of better health",
subtitle: "Surprise someone you care about with the Ring AIR Gift Card (with complimentary engraving).",
image: "001.png"
}, {
title: "Step 2: Easy redemption",
subtitle: "The recipient gets a simple redemption link to personalise their Ring AIR — choosing their size, finish, and optional engraving. The gift card is valid for 1 year from purchase.",
image: "002.png"
}, {
title: "Step 3: Their ring, their story",
subtitle: "Once redeemed, their Ultrahuman Ring AIR is made just for them — perfectly sized, engraved, and ready to take their health journey to the next level.",
image: "003.png"
}], P = ({
isInsideModal: e = !1
}) => {
let i = "Gift better health to the ones who matter most — a thoughtful surprise that doesn’t feel last-minute.",
    n = (0, h.useWindowSize)().width < 768,
    o = (0, c.useMemo)(() => L.map(e => ({ ...e,
        image: n ? "mobile-new/" + e.image : "desktop-new/" + e.image
    })), [n]);
return (0, t.jsx)(u, {
    "aria-labelledby": "gift-kit-title",
    $isInsideModal: e,
    children: (0, t.jsxs)(g, {
        children: [(0, t.jsxs)(x, {
            children: [(0, t.jsx)(w, {
                id: "gift-kit-title",
                children: "How the Ring AIR Gift Card works"
            }), (0, t.jsxs)(b, {
                "aria-label": e ? i : "Ships in 24 hours",
                children: [!e && (0, t.jsx)(p.Lightning, {
                    width: 16,
                    height: 16,
                    fill: "#000000",
                    "aria-hidden": "true"
                }), e ? i : "SHIPS IN 24 HOURS"]
            }), !e && (0, t.jsx)(y, {
                children: (0, t.jsx)(a.ButtonV2, {
                    variant: "blue",
                    href: "/gift",
                    "aria-label": "Purchase gift kit for Ring Air",
                    children: "Gift Ring AIR"
                })
            })]
        }), (0, t.jsx)(v, {
            role: "list",
            "aria-label": "Gift kit process steps",
            children: o.map((e, i) => (0, t.jsxs)(C, {
                role: "listitem",
                children: [(0, t.jsx)(k, {
                    children: (0, t.jsx)(j, {
                        src: (0, m.getCompressedAssetUrl)(`/web_v2/gift-card/how-to/${e.image}`),
                        alt: `${e.title}: ${e.subtitle}`
                    })
                }), (0, t.jsxs)(_, {
                    children: [(0, t.jsx)(I, {
                        children: e.title
                    }), (0, t.jsx)(N, {
                        children: e.subtitle
                    })]
                })]
            }, i))
        }), (0, t.jsx)(V, {}), (0, t.jsxs)($, {
            "aria-labelledby": "gift-card-terms-title",
            children: [(0, t.jsx)(W, {
                id: "gift-card-terms-title",
                children: "Terms & Conditions"
            }), (0, t.jsxs)(S, {
                children: [(0, t.jsx)("li", {
                    children: "Gift the Ultrahuman Ring AIR via the Gift Card at the price available during purchase — includes any active discounts (e.g. 15% off)."
                }), (0, t.jsx)("li", {
                    children: "The Gift Card is applicable to the Ultrahuman Ring AIR only."
                }), (0, t.jsx)("li", {
                    children: "The Gift Card includes free engraving, optional during redemption by the recipient."
                }), (0, t.jsx)("li", {
                    children: "The Gift Card is valid for 1 year from the date of purchase and is for one-time use only."
                }), (0, t.jsxs)("li", {
                    children: ["The Gift Card is redeemable only in India via the", " ", (0, t.jsx)(f.default, {
                        href: "/gift-card/claim",
                        "aria-label": "Gift card redemption page",
                        style: {
                            textDecoration: "underline",
                            fontWeight: "400",
                            color: "rgba(0, 0, 0)"
                        },
                        children: "dedicated redemption page"
                    }), "."]
                })]
            })]
        })]
    })
})
};
var H = e.i(2100),
R = e.i(29282);
let B = n.keyframes `
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,
M = n.keyframes `
  from {
    transform: translateY(80px);
  }
  to {
    transform: translateY(0);
  }
`,
z = n.default.div.withConfig({
    displayName: "HowItWorksModal__ModalOverlay",
    componentId: "sc-ab123ec4-0"
})
`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  -webkit-backdrop-filter: blur(75px);
  backdrop-filter: blur(75px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.2);
  padding: 0;
  transform: translateZ(0);

  animation: ${B} 0.3s ease-in-out;

  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    padding: 16px;
  }

  @media (min-width: ${({theme:e})=>e.globalV2.xl.maxWidth}) {
    padding: 24px;
  }
`, T = n.default.div.withConfig({
displayName: "HowItWorksModal__ModalContainer",
componentId: "sc-ab123ec4-1"
})
`
  position: relative;
  width: 100%;
  min-height: calc(100svh - 64px);
  max-height: 100%;
  height: auto;
  background: rgba(238, 238, 238, 1);
  border: 1.5px solid rgba(255, 255, 255, 0.2);
  border-radius: 32px;
  overflow-y: auto;
  overscroll-behavior: contain;

  animation: ${M} 0.3s ease-in-out;

  ${H.hideScrollbar};

  @media (max-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    border-radius: 20px;
    max-height: 100vh;
    min-height: 100vh;
    border-radius: 0;
  }

  .content-wrapper {
    @media (max-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
      padding-bottom: 96px;
    }
  }
`, A = n.default.button.withConfig({
displayName: "HowItWorksModal__CloseButton",
componentId: "sc-ab123ec4-2"
})
`
  position: absolute;
  right: 16px;
  top: 16px;
  border: none;
  width: 32px;
  height: 32px;
  cursor: pointer;
  color: #666666;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;

  background: rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  padding: 8px;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #000;
    transform: scale(1.05);
  }

  &:focus {
    outline: 2px solid #057ff0;
    outline-offset: 2px;
  }

  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    right: 16px;
    top: 16px;
  }

  &.sm-hidden {
    display: none;

    @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
      display: flex;
    }
  }

  &.lg-hidden {
    display: flex;

    @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
      display: none;
    }
  }
`, E = n.default.div.withConfig({
displayName: "HowItWorksModal__ModalContentWithPadding",
componentId: "sc-ab123ec4-3"
})
`
  width: 100%;
  padding-left: 192px;
  padding-right: 192px;

  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: ${({theme:e})=>e.globalV2.xl.maxWidth}) {
    padding-left: 82px;
    padding-right: 82px;
  }

  @media (max-width: ${({theme:e})=>e.globalV2.md.minWidth}) {
    padding-left: 16px;
    padding-right: 16px;
  }

  @media (max-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    width: 100%;
    max-width: 1200px;
    padding-left: 16px;
    padding-right: 16px;
  }
`, U = n.default.div.withConfig({
displayName: "HowItWorksModal__Header",
componentId: "sc-ab123ec4-4"
})
`
  position: sticky;
  top: 0;
  left: 0;
  display: block;
  background: rgba(250, 250, 250, 1);
  z-index: 10;
  padding-top: 64px;
  padding-bottom: 64px;

  @media (max-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    display: none;
  }
`, G = n.default.div.withConfig({
displayName: "HowItWorksModal__HeaderContent",
componentId: "sc-ab123ec4-5"
})
`
  display: flex;
  align-items: center;
  gap: 20px;
`, F = n.default.div.withConfig({
displayName: "HowItWorksModal__HeaderImageWrapper",
componentId: "sc-ab123ec4-6"
})
`
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
  flex-shrink: 0;

  @media (max-width: ${({theme:e})=>e.globalV2.sm.maxWidth}) {
    width: 48px;
    height: 48px;
  }
`, O = n.default.div.withConfig({
displayName: "HowItWorksModal__HeaderTextContent",
componentId: "sc-ab123ec4-7"
})
`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
`, D = n.default.div.withConfig({
displayName: "HowItWorksModal__HeaderButtonWrapper",
componentId: "sc-ab123ec4-8"
})
`
  flex-shrink: 0;
`, Z = n.default.b.withConfig({
displayName: "HowItWorksModal__HeaderTitle",
componentId: "sc-ab123ec4-9"
})
`
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: -0.03em;
  color: #000000;
  margin: 0;
  display: block;

  @media (max-width: ${({theme:e})=>e.globalV2.sm.maxWidth}) {
    font-size: 14px;
  }
`, Y = n.default.div.withConfig({
displayName: "HowItWorksModal__HeaderPrice",
componentId: "sc-ab123ec4-10"
})
`
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 0;
  line-height: 100%;

  .old-price {
    color: rgba(0, 0, 0, 0.5);
    font-feature-settings: 'liga' off, 'clig' off;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.43px;
    text-decoration-line: line-through;
  }

  .new-price {
    color: #000;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px; /* 114.286% */
    letter-spacing: -0.28px;
  }
`, X = n.default.div.withConfig({
displayName: "HowItWorksModal__Footer",
componentId: "sc-ab123ec4-11"
})
`
  display: none;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  -webkit-backdrop-filter: blur(50px);
  backdrop-filter: blur(50px);
  padding-top: 16px;
  padding-bottom: 24px;

  background: rgba(0, 0, 0, 0.07);
  box-shadow: rgb(255, 255, 255) 0px 1px 2px 0px inset;
  border-top: 1px solid rgba(219, 219, 219, 0.3);
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);

  @media (max-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    display: block;
  }
`, q = n.default.div.withConfig({
displayName: "HowItWorksModal__ItemsSectionResponsive",
componentId: "sc-ab123ec4-12"
})
`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`, J = n.default.div.withConfig({
displayName: "HowItWorksModal__ItemRow",
componentId: "sc-ab123ec4-13"
})
`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 8px 0;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 768px) {
    gap: 12px;
    flex-direction: column;

    * {
      width: 100%;
    }
  }
`, K = n.default.div.withConfig({
displayName: "HowItWorksModal__ItemDetails",
componentId: "sc-ab123ec4-14"
})
`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 60%;

  @media (max-width: ${({theme:e})=>e.globalV2.md.minWidth}) {
    gap: 4px;
    width: 100%;
  }
`, Q = n.default.div.withConfig({
displayName: "HowItWorksModal__ItemName",
componentId: "sc-ab123ec4-15"
})
`
  font-weight: 500;
  font-size: 20px;
  color: #000;
  letter-spacing: -0.54px;
  width: 100%;
  line-height: 1.2;
  min-height: 1.2em;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`, ee = n.default.div.withConfig({
displayName: "HowItWorksModal__ItemSpecs",
componentId: "sc-ab123ec4-16"
})
`
  font-weight: 400;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.7);
  font-style: normal;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -0.42px;
  width: 100%;
  min-height: 1.2em;
  gap: 4px;

  b,
  strong {
    font-weight: 500;
  }

  .separator {
    color: rgba(0, 0, 0, 0.3);
    margin: 0 4px;
  }

  .old-price {
    color: rgba(0, 0, 0, 0.5);
    font-feature-settings: 'liga' off, 'clig' off;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.43px;
    text-decoration-line: line-through;
    margin-right: 8px;
  }

  .new-price {
    color: #000;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px; /* 114.286% */
    letter-spacing: -0.28px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`, et = n.default.button.withConfig({
displayName: "HowItWorksModal__ReviewCartButton",
componentId: "sc-ab123ec4-17"
})
`
  background: #057ff0;
  color: white;
  border: none;
  border-radius: 16px;
  padding: 20px 32px;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: -0.2px;
  cursor: pointer;
  flex-shrink: 0;
  white-space: nowrap;

  &:hover {
    background: #0461c7;
  }

  &:focus {
    outline: 2px solid #057ff0;
    outline-offset: 2px;
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    border-radius: 12px;
    padding: 16px;
    font-size: 14px;
  }
`;
e.s(["default", 0, ({
onClose: e,
onCTA: n,
ctaLabel: c = "Gift Ring AIR",
ctaDisabled: p = !1,
closeOnCTA: m = !0,
children: h
}) => {
let f = (0, R.useCampaigns)(),
    u = "Ring AIR Gift Card",
    g = { ...l[r.ShopifyStore.IN]
    },
    x = (0, R.getCampaignByProduct)(f.campaigns, "ring"),
    b = (0, R.getCampaignConfig)(x);
b ? .active && (g.discountCode = b.discountCode, "percentage" === b.discountType ? g.offerPrice = Math.trunc(g.price - g.price * b.discount / 100) : "flat" === b.discountType && (g.offerPrice = g.price - b.discount));
let w = g && g.price !== g.offerPrice,
    y = (0, d.formatPriceWithSymbol)(g.price, s.Currency.inr),
    v = (0, d.formatPriceWithSymbol)(g.offerPrice, s.Currency.inr),
    C = (0, t.jsx)(z, {
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "modal-title",
        "aria-describedby": "modal-description",
        children: (0, t.jsxs)(T, {
            children: [(0, t.jsx)(A, {
                onClick: e,
                className: "lg-hidden",
                "aria-label": "Close modal",
                children: (0, t.jsx)("svg", {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    children: (0, t.jsx)("path", {
                        d: "M18 6L6 18M6 6l12 12",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })
                })
            }), (0, t.jsxs)(U, {
                children: [(0, t.jsx)(A, {
                    onClick: e,
                    className: "sm-hidden",
                    "aria-label": "Close modal",
                    children: (0, t.jsx)("svg", {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: (0, t.jsx)("path", {
                            d: "M18 6L6 18M6 6l12 12",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })
                    })
                }), (0, t.jsx)(E, {
                    children: (0, t.jsxs)(G, {
                        children: [(0, t.jsx)(F, {
                            children: (0, t.jsx)(o.CustomImage, {
                                src: "web_v2/gift-card/how-to/icon-new.png",
                                alt: "Ring AIR Gift",
                                width: 1028,
                                height: 1028,
                                style: {
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "contain",
                                    objectPosition: "center",
                                    transform: "scale(1.5)"
                                }
                            })
                        }), (0, t.jsxs)(O, {
                            children: [(0, t.jsx)(Z, {
                                id: "modal-title",
                                children: u
                            }), v && (0, t.jsxs)(Y, {
                                "aria-label": w ? `Price reduced from ${y} to ${v}` : `Price ${v}`,
                                children: [w && y && (0, t.jsx)("span", {
                                    className: "old-price",
                                    children: y
                                }), (0, t.jsx)("span", {
                                    className: "new-price",
                                    children: v
                                })]
                            })]
                        }), (0, t.jsx)(D, {
                            children: (0, t.jsx)(a.ButtonV2, {
                                variant: "blue",
                                disabled: p,
                                onClick: () => {
                                    n && n(), m && e()
                                },
                                "aria-label": c,
                                children: c
                            })
                        })]
                    })
                })]
            }), (0, t.jsx)(E, {
                id: "modal-description",
                className: "content-wrapper",
                children: h ? ? (0, t.jsx)(P, {
                    isInsideModal: !0
                })
            }), (0, t.jsx)(X, {
                children: (0, t.jsx)(E, {
                    children: (0, t.jsx)(q, {
                        children: (0, t.jsxs)(J, {
                            children: [(0, t.jsxs)(K, {
                                children: [(0, t.jsx)(Q, {
                                    children: u
                                }), v && (0, t.jsxs)(ee, {
                                    children: [w && y && (0, t.jsx)("span", {
                                        className: "old-price",
                                        children: y
                                    }), (0, t.jsx)("span", {
                                        className: "new-price",
                                        children: v
                                    })]
                                })]
                            }), (0, t.jsx)(et, {
                                onClick: () => {
                                    n && n(), m && e()
                                },
                                disabled: p,
                                "aria-label": c,
                                children: c
                            })]
                        })
                    })
                })
            })]
        })
    });
return "u" > typeof document ? i.default.createPortal(C, document.body) : null
}], 10670)
}, 48761, e => {
e.v(t => Promise.all(["static/chunks/28e14a26e92e0e1d.js"].map(t => e.l(t))).then(() => t(93594)))
}, 28805, e => {
e.v(e => Promise.resolve().then(() => e(79466)))
}, 28152, e => {
e.v(t => Promise.all(["static/chunks/2b384dd04311c51f.js", "static/chunks/01d9796a0404d1a4.js", "static/chunks/0f3fdc6c2a496674.js", "static/chunks/1e48bd268ce62d46.js"].map(t => e.l(t))).then(() => t(40008)))
}, 65071, e => {
e.v(t => Promise.all(["static/chunks/03a6095f6652d9cb.js"].map(t => e.l(t))).then(() => t(75646)))
}, 63634, e => {
e.v(t => Promise.all(["static/chunks/6366aa0cab91bbfb.js"].map(t => e.l(t))).then(() => t(79446)))
}, 7638, e => {
e.v(t => Promise.all(["static/chunks/49508bd9e23602c1.js"].map(t => e.l(t))).then(() => t(34151)))
}, 15647, e => {
e.v(t => Promise.all(["static/chunks/5314d043f023a024.js"].map(t => e.l(t))).then(() => t(8153)))
}, 98964, e => {
e.v(t => Promise.all(["static/chunks/b296fee2df879d26.js"].map(t => e.l(t))).then(() => t(13069)))
}, 28599, e => {
e.v(t => Promise.all(["static/chunks/998c9a4e66e073b5.js"].map(t => e.l(t))).then(() => t(62977)))
}, 83804, e => {
e.v(t => Promise.all(["static/chunks/cfd7f77f7b4a55b3.js"].map(t => e.l(t))).then(() => t(38741)))
}, 26413, e => {
e.v(t => Promise.all(["static/chunks/710118d6c4ea08cf.js"].map(t => e.l(t))).then(() => t(24453)))
}, 9135, e => {
e.v(t => Promise.all(["static/chunks/50cc0bf29c08a923.js"].map(t => e.l(t))).then(() => t(14075)))
}, 60501, e => {
e.v(t => Promise.all(["static/chunks/483e8ae4eb9e02de.js", "static/chunks/204c3400aba8a223.js", "static/chunks/49a171a0577caa80.css"].map(t => e.l(t))).then(() => t(97611)))
}]);