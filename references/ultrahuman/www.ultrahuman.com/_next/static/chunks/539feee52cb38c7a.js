(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 54134, e => {
    "use strict";
    var t = e.i(91398),
        i = e.i(58678),
        n = e.i(3828),
        r = e.i(91788),
        a = e.i(3115),
        o = e.i(71225);
    let l = "https://www.ultrahuman.com";

    function s(e) {
        return e.endsWith("/") ? e : e + "/"
    }
    e.s(["SEO", 0, ({
        title: e,
        description: c,
        image: d,
        canonical: f,
        basePath: u,
        nonIndexable: h,
        robots: p
    }) => {
        let m, {
                asPath: x
            } = (0, n.useRouter)(),
            {
                regionSlug: g
            } = (0, r.useContext)(a.RegionLocaleContext);
        if (f) m = f;
        else if (u) m = `${l}/${g}${s(u)}`;
        else {
            let e = x.split("?")[0].split("#")[0];
            m = `${l}${e}`
        }
        let y = !!u,
            _ = u ? `${l}/global${s(u)}` : void 0,
            j = y ? (0, o.getAllRegionSlugs)() : [];
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
                content: c
            }, "twitter-description"), (0, t.jsx)("meta", {
                name: "description",
                content: c
            }, "description"), (0, t.jsx)("meta", {
                property: "og:description",
                content: c
            }, "og-description"), (0, t.jsx)("meta", {
                property: "og:url",
                content: m
            }, "og-url"), (0, t.jsx)("meta", {
                property: "og:site_name",
                content: "Ultrahuman"
            }, "og-site-name"), d && (0, t.jsx)("meta", {
                name: "twitter:image",
                content: d
            }, "twitter-image"), d && (0, t.jsx)("meta", {
                property: "og:image",
                content: d
            }, "og-image"), (0, t.jsx)("link", {
                rel: "canonical",
                href: m
            }, "canonical"), _ && (0, t.jsx)("link", {
                rel: "alternate",
                hrefLang: "x-default",
                href: _
            }, "hreflang-x-default"), j.map(e => {
                let i, n, r = (0, o.parseRegionLocale)(e),
                    a = `${l}/${e}${s(u)}`;
                if ("GLOBAL" === r.region) return null;
                let c = (i = r.region.toUpperCase(), n = (0, o.getDefaultLanguageForRegion)(i), `${n}-${i}`),
                    d = e.includes("-") ? `${r.language}-${r.region}` : c;
                return (0, t.jsx)("link", {
                    rel: "alternate",
                    hrefLang: d,
                    href: a
                }, `hreflang-${e}`)
            }), h && (0, t.jsx)("meta", {
                name: "google",
                content: "nositelinkssearchbox"
            }, "sitelinks"), h && (0, t.jsx)("meta", {
                name: "google",
                content: "notranslate"
            }, "notranslate"), p ? (0, t.jsx)("meta", {
                name: "robots",
                content: p
            }, "robots") : h && (0, t.jsx)("meta", {
                name: "robots",
                content: "noindex,nofollow"
            }, "robots")]
        })
    }])
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
    let r = t.default.h2.withConfig({
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
    let o = t.css `
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
`, e.s(["H1", 0, n, "H2_OPT", 0, r, "P", 0, a, "SectionPadding", 0, o])
}, 64130, e => {
    "use strict";
    var t = e.i(91398);
    e.i(64157);
    var i = e.i(71179),
        n = e.i(88234),
        r = e.i(91788),
        a = e.i(60814),
        o = e.i(19231);
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
`, s = (0, a.default)(({
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
`, c = (0, a.default)(({
        className: e,
        faqData: n,
        bgColor: a = "black",
        htmlId: c,
        pb: d
    }) => {
        let {
            t: f
        } = (0, i.useTranslation)("ring"), u = (0, r.useRef)(null);
        return (0, t.jsx)("section", {
            className: `${e} ${a} ${d}`,
            id: c,
            ref: u,
            children: (0, t.jsxs)(o.Container, {
                className: "container",
                children: [(0, t.jsx)(l, {
                    children: f("ring.faq.head")
                }), (0, t.jsx)("div", {
                    className: "faq-container",
                    children: n.map((e, i) => (0, t.jsx)(s, { ...e
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
    e.s(["FAQSection", 0, c])
}, 83978, e => {
    "use strict";
    var t = e.i(91398);
    e.s(["RightArrow", 0, e => (0, t.jsxs)("svg", {
        className: e.className,
        style: e.style,
        width: "11px",
        height: "11px",
        viewBox: "0 0 11 11",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        children: [(0, t.jsx)("title", {
            children: "carousel arrow"
        }), (0, t.jsx)("g", {
            id: "Symbols",
            stroke: "none",
            strokeWidth: "1",
            fill: "none",
            fillRule: "evenodd",
            children: (0, t.jsx)("g", {
                id: "carousel-arrow",
                transform: "translate(0.500000, 0.092893)",
                fill: e.fill ? ? "#FFFFFF",
                children: (0, t.jsxs)("g", {
                    id: "icon-/-16-/-System-/--->",
                    transform: "translate(0.000000, 0.000000)",
                    children: [(0, t.jsx)("polygon", {
                        id: "Path",
                        points: "8.66666667 4.40710678 8.66666667 6.40710678 0 6.40710678 0 4.40710678"
                    }), (0, t.jsx)("polygon", {
                        id: "Path",
                        points: "4.37377345 0 9.7475469 5.37377345 4.37377345 10.7475469 2.95955989 9.33333333 6.919 5.37310678 2.95955989 1.41421356"
                    })]
                })
            })
        })]
    })])
}, 61791, e => {
    "use strict";
    var t = e.i(60814);
    let i = t.default.h2.withConfig({
        displayName: "styleConstants__H2",
        componentId: "sc-daf797e4-0"
    })
    `
  font-size: 1.6rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.4);
  text-align: center;
  margin-bottom: 2.4rem;
`, n = t.default.h2.withConfig({
        displayName: "styleConstants__H2Large",
        componentId: "sc-daf797e4-1"
    })
    `
  font-size: 4.4rem;
  line-height: 5.2rem;
  font-weight: 500;
  color: ${({color:e})=>e??"rgba(255, 255, 255, 1)"};
  margin-bottom: 2.4rem;
  text-align: center;

  @media (min-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
    font-size: 5.2rem;
    line-height: 6.4rem;
    text-align: center;
  }

  @media (min-width: ${({theme:e})=>e.global.laptop.maxWidth}) {
    font-size: 6.4rem;
    line-height: 7.2rem;
  }
`;
    t.default.h3.withConfig({
        displayName: "styleConstants__H3",
        componentId: "sc-daf797e4-2"
    })
    `
  font-size: 5.2rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  margin-bottom: 2.4rem;

  @media (min-width: ${({theme:e})=>e.global.laptop.maxWidth}) {
    font-size: 7.2rem;
  }
`;
    let r = t.default.p.withConfig({
        displayName: "styleConstants__P",
        componentId: "sc-daf797e4-3"
    })
    `
  font-size: 1.6rem;
  font-weight: 400;
  margin-bottom: 1.6rem;
  text-align: center;
  line-height: 120%;

  @media (min-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
    font-size: 2rem;
  }
`, a = t.css `
  padding: 4.8rem 0;
  @media (min-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
    padding: 9.6rem 0;
  }
`, o = t.css `
  padding: 1rem 0 8rem 0;
  @media (min-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
    padding: 0 0 12rem 0;
  }
`;
    e.s(["H2", 0, i, "H2Large", 0, n, "P", 0, r, "productSectionPadding", 0, o, "sectionPadding", 0, a])
}, 86236, e => {
    "use strict";
    let t = e.i(91788).useLayoutEffect;
    e.s(["useIsomorphicLayoutEffect", 0, t])
}, 8762, e => {
    "use strict";
    var t = e.i(91788),
        i = e.i(18888),
        n = e.i(86236),
        r = e.i(92195),
        a = e.i(62774);

    function o(e, l = () => {}) {
        let s = (0, t.useMemo)(() => i.default.context(l, e), [e]),
            c = (0, t.useMemo)(() => (0, a.debounce)(() => r.ScrollTrigger.refresh(), 300), []);
        return (0, n.useIsomorphicLayoutEffect)(() => (window.addEventListener("resize", c), () => {
            window.removeEventListener("resize", c), s.revert()
        }), [c]), s
    }
    e.s(["useGsapContext", () => o])
}, 14681, e => {
    "use strict";
    var t = e.i(91788);

    function i(e) {
        return "[object Object]" === Object.prototype.toString.call(e) || Array.isArray(e)
    }

    function n(e, t) {
        let r = Object.keys(e),
            a = Object.keys(t);
        return r.length === a.length && JSON.stringify(Object.keys(e.breakpoints || {})) === JSON.stringify(Object.keys(t.breakpoints || {})) && r.every(r => {
            let a = e[r],
                o = t[r];
            return "function" == typeof a ? `${a}` == `${o}` : i(a) && i(o) ? n(a, o) : a === o
        })
    }

    function r(e) {
        return e.concat().sort((e, t) => e.name > t.name ? 1 : -1).map(e => e.options)
    }

    function a(e) {
        return "number" == typeof e
    }

    function o(e) {
        return "string" == typeof e
    }

    function l(e) {
        return "boolean" == typeof e
    }

    function s(e) {
        return "[object Object]" === Object.prototype.toString.call(e)
    }

    function c(e) {
        return Math.abs(e)
    }

    function d(e) {
        return Math.sign(e)
    }

    function f(e) {
        return m(e).map(Number)
    }

    function u(e) {
        return e[h(e)]
    }

    function h(e) {
        return Math.max(0, e.length - 1)
    }

    function p(e, t = 0) {
        return Array.from(Array(e), (e, i) => t + i)
    }

    function m(e) {
        return Object.keys(e)
    }

    function x(e, t) {
        return void 0 !== t.MouseEvent && e instanceof t.MouseEvent
    }

    function g() {
        let e = [],
            t = {
                add: function(i, n, r, a = {
                    passive: !0
                }) {
                    let o;
                    return "addEventListener" in i ? (i.addEventListener(n, r, a), o = () => i.removeEventListener(n, r, a)) : (i.addListener(r), o = () => i.removeListener(r)), e.push(o), t
                },
                clear: function() {
                    e = e.filter(e => e())
                }
            };
        return t
    }

    function y(e = 0, t = 0) {
        let i = c(e - t);

        function n(i) {
            return i < e || i > t
        }
        return {
            length: i,
            max: t,
            min: e,
            constrain: function(i) {
                return n(i) ? i < e ? e : t : i
            },
            reachedAny: n,
            reachedMax: function(e) {
                return e > t
            },
            reachedMin: function(t) {
                return t < e
            },
            removeOffset: function(e) {
                return i ? e - i * Math.ceil((e - t) / i) : e
            }
        }
    }

    function _(e) {
        let t = e;

        function i(e) {
            return a(e) ? e : e.get()
        }
        return {
            get: function() {
                return t
            },
            set: function(e) {
                t = i(e)
            },
            add: function(e) {
                t += i(e)
            },
            subtract: function(e) {
                t -= i(e)
            }
        }
    }

    function j(e, t) {
        let i = "x" === e.scroll ? function(e) {
                return `translate3d(${e}px,0px,0px)`
            } : function(e) {
                return `translate3d(0px,${e}px,0px)`
            },
            n = t.style,
            r = null,
            a = !1;
        return {
            clear: function() {
                !a && (n.transform = "", t.getAttribute("style") || t.removeAttribute("style"))
            },
            to: function(t) {
                if (a) return;
                let o = Math.round(100 * e.direction(t)) / 100;
                o !== r && (n.transform = i(o), r = o)
            },
            toggleActive: function(e) {
                a = !e
            }
        }
    }
    let w = {
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

    function C(e, t, i) {
        let n, r, b, v, V, k, S, B, M = e.ownerDocument,
            $ = M.defaultView,
            F = function(e) {
                function t(e, t) {
                    return function e(t, i) {
                        return [t, i].reduce((t, i) => (m(i).forEach(n => {
                            let r = t[n],
                                a = i[n],
                                o = s(r) && s(a);
                            t[n] = o ? e(r, a) : a
                        }), t), {})
                    }(e, t || {})
                }
                return {
                    mergeOptions: t,
                    optionsAtMedia: function(i) {
                        let n = i.breakpoints || {},
                            r = m(n).filter(t => e.matchMedia(t).matches).map(e => n[e]).reduce((e, i) => t(e, i), {});
                        return t(i, r)
                    },
                    optionsMediaQueries: function(t) {
                        return t.map(e => m(e.breakpoints || {})).reduce((e, t) => e.concat(t), []).map(e.matchMedia)
                    }
                }
            }($),
            H = (B = [], {
                init: function(e, t) {
                    return (B = t.filter(({
                        options: e
                    }) => !1 !== F.optionsAtMedia(e).active)).forEach(t => t.init(e, F)), t.reduce((e, t) => Object.assign(e, {
                        [t.name]: t
                    }), {})
                },
                destroy: function() {
                    B = B.filter(e => e.destroy())
                }
            }),
            I = g(),
            L = (r = {}, b = {
                init: function(e) {
                    n = e
                },
                emit: function(e) {
                    return (r[e] || []).forEach(t => t(n, e)), b
                },
                off: function(e, t) {
                    return r[e] = (r[e] || []).filter(e => e !== t), b
                },
                on: function(e, t) {
                    return r[e] = (r[e] || []).concat([t]), b
                },
                clear: function() {
                    r = {}
                }
            }),
            {
                mergeOptions: z,
                optionsAtMedia: O,
                optionsMediaQueries: A
            } = F,
            {
                on: W,
                off: P,
                emit: Z
            } = L,
            G = !1,
            U = z(w, C.globalOptions),
            N = z(U),
            D = [];

        function T(t, i) {
            G || (N = O(U = z(U, t)), D = i || D, function() {
                let {
                    container: t,
                    slides: i
                } = N;
                k = (o(t) ? e.querySelector(t) : t) || e.children[0];
                let n = o(i) ? k.querySelectorAll(i) : i;
                S = [].slice.call(n || k.children)
            }(), v = function t(i) {
                let n = function(e, t, i, n, r, s, w) {
                    var C, b;
                    let v, V, k, S, B, M, $, F, H, I, L, z, O, A, {
                            align: W,
                            axis: P,
                            direction: Z,
                            startIndex: G,
                            loop: U,
                            duration: N,
                            dragFree: D,
                            dragThreshold: T,
                            inViewThreshold: E,
                            slidesToScroll: R,
                            skipSnaps: q,
                            containScroll: Q,
                            watchResize: J,
                            watchSlides: K,
                            watchDrag: X,
                            watchFocus: Y
                        } = s,
                        ee = {
                            measure: function(e) {
                                let {
                                    offsetTop: t,
                                    offsetLeft: i,
                                    offsetWidth: n,
                                    offsetHeight: r
                                } = e;
                                return {
                                    top: t,
                                    right: i + n,
                                    bottom: t + r,
                                    left: i,
                                    width: n,
                                    height: r
                                }
                            }
                        },
                        et = ee.measure(t),
                        ei = i.map(ee.measure),
                        en = (V = "rtl" === Z, S = (k = "y" === P) || !V ? 1 : -1, B = k ? "top" : V ? "right" : "left", M = k ? "bottom" : V ? "left" : "right", {
                            scroll: k ? "y" : "x",
                            cross: k ? "x" : "y",
                            startEdge: B,
                            endEdge: M,
                            measureSize: function(e) {
                                let {
                                    height: t,
                                    width: i
                                } = e;
                                return k ? t : i
                            },
                            direction: function(e) {
                                return e * S
                            }
                        }),
                        er = en.measureSize(et),
                        ea = {
                            measure: function(e) {
                                return e / 100 * er
                            }
                        },
                        eo = (C = W, b = er, v = {
                            start: function() {
                                return 0
                            },
                            center: function(e) {
                                return (b - e) / 2
                            },
                            end: function(e) {
                                return b - e
                            }
                        }, {
                            measure: function(e, t) {
                                return o(C) ? v[C](e) : C(b, e, t)
                            }
                        }),
                        el = !U && !!Q,
                        {
                            slideSizes: es,
                            slideSizesWithGaps: ec,
                            startGap: ed,
                            endGap: ef
                        } = function(e, t, i, n, r, a) {
                            let {
                                measureSize: o,
                                startEdge: l,
                                endEdge: s
                            } = e, d = i[0] && r, f = function() {
                                if (!d) return 0;
                                let e = i[0];
                                return c(t[l] - e[l])
                            }(), p = d ? parseFloat(a.getComputedStyle(u(n)).getPropertyValue(`margin-${s}`)) : 0, m = i.map(o), x = i.map((e, t, i) => {
                                let n = t === h(i);
                                return t ? n ? m[t] + p : i[t + 1][l] - e[l] : m[t] + f
                            }).map(c);
                            return {
                                slideSizes: m,
                                slideSizesWithGaps: x,
                                startGap: f,
                                endGap: p
                            }
                        }(en, et, ei, i, U || !!Q, r),
                        eu = function(e, t, i, n, r, o, l, s, d) {
                            let {
                                startEdge: p,
                                endEdge: m,
                                direction: x
                            } = e, g = a(i);
                            return {
                                groupSlides: function(e) {
                                    return g ? f(e).filter(e => e % i == 0).map(t => e.slice(t, t + i)) : e.length ? f(e).reduce((i, a, d) => {
                                        let f = u(i) || 0,
                                            g = a === h(e),
                                            y = r[p] - o[f][p],
                                            _ = r[p] - o[a][m],
                                            j = n || 0 !== f ? 0 : x(l),
                                            w = c(_ - (!n && g ? x(s) : 0) - (y + j));
                                        return d && w > t + 2 && i.push(a), g && i.push(e.length), i
                                    }, []).map((t, i, n) => {
                                        let r = Math.max(n[i - 1] || 0);
                                        return e.slice(r, t)
                                    }) : []
                                }
                            }
                        }(en, er, R, U, et, ei, ed, ef, 0),
                        {
                            snaps: eh,
                            snapsAligned: ep
                        } = function(e, t, i, n, r) {
                            let {
                                startEdge: a,
                                endEdge: o
                            } = e, {
                                groupSlides: l
                            } = r, s = l(n).map(e => u(e)[o] - e[0][a]).map(c).map(t.measure), d = n.map(e => i[a] - e[a]).map(e => -c(e)), f = l(d).map(e => e[0]).map((e, t) => e + s[t]);
                            return {
                                snaps: d,
                                snapsAligned: f
                            }
                        }(en, eo, et, ei, eu),
                        em = -u(eh) + u(ec),
                        {
                            snapsContained: ex,
                            scrollContainLimit: eg
                        } = function(e, t, i, n, r) {
                            let a, o, l = y(-t + e, 0),
                                s = i.map((e, t) => {
                                    let {
                                        min: n,
                                        max: r
                                    } = l, a = l.constrain(e), o = t === h(i);
                                    return t ? o || function(e, t) {
                                        return 1 >= c(e - t)
                                    }(n, a) ? n : function(e, t) {
                                        return 1 >= c(e - t)
                                    }(r, a) ? r : a : r
                                }).map(e => parseFloat(e.toFixed(3))),
                                d = (a = s[0], o = u(s), y(s.lastIndexOf(a), s.indexOf(o) + 1));
                            return {
                                snapsContained: function() {
                                    if (t <= e + 2) return [l.max];
                                    if ("keepSnaps" === n) return s;
                                    let {
                                        min: i,
                                        max: r
                                    } = d;
                                    return s.slice(i, r)
                                }(),
                                scrollContainLimit: d
                            }
                        }(er, em, ep, Q, 0),
                        ey = el ? ex : ep,
                        {
                            limit: e_
                        } = ($ = ey[0], {
                            limit: y(U ? $ - em : u(ey), $)
                        }),
                        ej = function e(t, i, n) {
                            let {
                                constrain: r
                            } = y(0, t), a = t + 1, o = l(i);

                            function l(e) {
                                return n ? c((a + e) % a) : r(e)
                            }

                            function s() {
                                return e(t, o, n)
                            }
                            let d = {
                                get: function() {
                                    return o
                                },
                                set: function(e) {
                                    return o = l(e), d
                                },
                                add: function(e) {
                                    return s().set(o + e)
                                },
                                clone: s
                            };
                            return d
                        }(h(ey), G, U),
                        ew = ej.clone(),
                        eC = f(i),
                        eb = function(e, t, i, n) {
                            let r = g(),
                                a = 1e3 / 60,
                                o = null,
                                l = 0,
                                s = 0;

                            function c(e) {
                                if (!s) return;
                                o || (o = e, i(), i());
                                let r = e - o;
                                for (o = e, l += r; l >= a;) i(), l -= a;
                                n(l / a), s && (s = t.requestAnimationFrame(c))
                            }

                            function d() {
                                t.cancelAnimationFrame(s), o = null, l = 0, s = 0
                            }
                            return {
                                init: function() {
                                    r.add(e, "visibilitychange", () => {
                                        e.hidden && (o = null, l = 0)
                                    })
                                },
                                destroy: function() {
                                    d(), r.clear()
                                },
                                start: function() {
                                    s || (s = t.requestAnimationFrame(c))
                                },
                                stop: d,
                                update: i,
                                render: n
                            }
                        }(n, r, () => (({
                            dragHandler: e,
                            scrollBody: t,
                            scrollBounds: i,
                            options: {
                                loop: n
                            }
                        }) => {
                            n || i.constrain(e.pointerDown()), t.seek()
                        })(eA), e => (({
                            scrollBody: e,
                            translate: t,
                            location: i,
                            offsetLocation: n,
                            previousLocation: r,
                            scrollLooper: a,
                            slideLooper: o,
                            dragHandler: l,
                            animation: s,
                            eventHandler: c,
                            scrollBounds: d,
                            options: {
                                loop: f
                            }
                        }, u) => {
                            let h = e.settled(),
                                p = !d.shouldConstrain(),
                                m = f ? h : h && p,
                                x = m && !l.pointerDown();
                            x && s.stop();
                            let g = i.get() * u + r.get() * (1 - u);
                            n.set(g), f && (a.loop(e.direction()), o.loop()), t.to(n.get()), x && c.emit("settle"), m || c.emit("scroll")
                        })(eA, e)),
                        ev = ey[ej.get()],
                        eV = _(ev),
                        ek = _(ev),
                        eS = _(ev),
                        eB = _(ev),
                        eM = function(e, t, i, n, r, a) {
                            let o = 0,
                                l = 0,
                                s = r,
                                f = .68,
                                u = e.get(),
                                h = 0;

                            function p(e) {
                                return s = e, x
                            }

                            function m(e) {
                                return f = e, x
                            }
                            let x = {
                                direction: function() {
                                    return l
                                },
                                duration: function() {
                                    return s
                                },
                                velocity: function() {
                                    return o
                                },
                                seek: function() {
                                    let t = n.get() - e.get(),
                                        r = 0;
                                    return s ? (i.set(e), o += t / s, o *= f, u += o, e.add(o), r = u - h) : (o = 0, i.set(n), e.set(n), r = t), l = d(r), h = u, x
                                },
                                settled: function() {
                                    return .001 > c(n.get() - t.get())
                                },
                                useBaseFriction: function() {
                                    return m(.68)
                                },
                                useBaseDuration: function() {
                                    return p(r)
                                },
                                useFriction: m,
                                useDuration: p
                            };
                            return x
                        }(eV, eS, ek, eB, N, 0),
                        e$ = function(e, t, i, n, r) {
                            let {
                                reachedAny: a,
                                removeOffset: o,
                                constrain: l
                            } = n;

                            function s(e) {
                                return e.concat().sort((e, t) => c(e) - c(t))[0]
                            }

                            function f(t, n) {
                                let r = [t, t + i, t - i];
                                if (!e) return t;
                                if (!n) return s(r);
                                let a = r.filter(e => d(e) === n);
                                return a.length ? s(a) : u(r) - i
                            }
                            return {
                                byDistance: function(i, n) {
                                    let s = r.get() + i,
                                        {
                                            index: d,
                                            distance: u
                                        } = function(i) {
                                            let n = e ? o(i) : l(i),
                                                {
                                                    index: r
                                                } = t.map((e, t) => ({
                                                    diff: f(e - n, 0),
                                                    index: t
                                                })).sort((e, t) => c(e.diff) - c(t.diff))[0];
                                            return {
                                                index: r,
                                                distance: n
                                            }
                                        }(s),
                                        h = !e && a(s);
                                    if (!n || h) return {
                                        index: d,
                                        distance: i
                                    };
                                    let p = i + f(t[d] - u, 0);
                                    return {
                                        index: d,
                                        distance: p
                                    }
                                },
                                byIndex: function(e, i) {
                                    let n = f(t[e] - r.get(), i);
                                    return {
                                        index: e,
                                        distance: n
                                    }
                                },
                                shortcut: f
                            }
                        }(U, ey, em, e_, eB),
                        eF = function(e, t, i, n, r, a, o) {
                            function l(r) {
                                let l = r.distance,
                                    s = r.index !== t.get();
                                a.add(l), l && (n.duration() ? e.start() : (e.update(), e.render(1), e.update())), s && (i.set(t.get()), t.set(r.index), o.emit("select"))
                            }
                            return {
                                distance: function(e, t) {
                                    l(r.byDistance(e, t))
                                },
                                index: function(e, i) {
                                    let n = t.clone().set(e);
                                    l(r.byIndex(n.get(), i))
                                }
                            }
                        }(eb, ej, ew, eM, e$, eB, w),
                        eH = function(e) {
                            let {
                                max: t,
                                length: i
                            } = e;
                            return {
                                get: function(e) {
                                    return i ? -((e - t) / i) : 0
                                }
                            }
                        }(e_),
                        eI = g(),
                        eL = (H = {}, I = null, L = null, z = !1, {
                            init: function() {
                                F = new IntersectionObserver(e => {
                                    z || (e.forEach(e => {
                                        H[i.indexOf(e.target)] = e
                                    }), I = null, L = null, w.emit("slidesInView"))
                                }, {
                                    root: t.parentElement,
                                    threshold: E
                                }), i.forEach(e => F.observe(e))
                            },
                            destroy: function() {
                                F && F.disconnect(), z = !0
                            },
                            get: function(e = !0) {
                                if (e && I) return I;
                                if (!e && L) return L;
                                let t = m(H).reduce((t, i) => {
                                    let n = parseInt(i),
                                        {
                                            isIntersecting: r
                                        } = H[n];
                                    return (e && r || !e && !r) && t.push(n), t
                                }, []);
                                return e && (I = t), e || (L = t), t
                            }
                        }),
                        {
                            slideRegistry: ez
                        } = function(e, t, i, n, r, a) {
                            let o, {
                                    groupSlides: l
                                } = r,
                                {
                                    min: s,
                                    max: c
                                } = n;
                            return {
                                slideRegistry: (o = l(a), 1 === i.length ? [a] : e && "keepSnaps" !== t ? o.slice(s, c).map((e, t, i) => {
                                    let n = t === h(i);
                                    return t ? n ? p(h(a) - u(i)[0] + 1, u(i)[0]) : e : p(u(i[0]) + 1)
                                }) : o)
                            }
                        }(el, Q, ey, eg, eu, eC),
                        eO = function(e, t, i, n, r, o, s, c) {
                            let d = {
                                    passive: !0,
                                    capture: !0
                                },
                                f = 0;

                            function u(e) {
                                "Tab" === e.code && (f = new Date().getTime())
                            }
                            return {
                                init: function(h) {
                                    c && (o.add(document, "keydown", u, !1), t.forEach((t, u) => {
                                        o.add(t, "focus", t => {
                                            (l(c) || c(h, t)) && function(t) {
                                                if (new Date().getTime() - f > 10) return;
                                                s.emit("slideFocusStart"), e.scrollLeft = 0;
                                                let o = i.findIndex(e => e.includes(t));
                                                a(o) && (r.useDuration(0), n.index(o, 0), s.emit("slideFocus"))
                                            }(u)
                                        }, d)
                                    }))
                                }
                            }
                        }(e, i, ez, eF, eM, eI, w, Y),
                        eA = {
                            ownerDocument: n,
                            ownerWindow: r,
                            eventHandler: w,
                            containerRect: et,
                            slideRects: ei,
                            animation: eb,
                            axis: en,
                            dragHandler: function(e, t, i, n, r, a, o, s, f, u, h, p, m, _, j, w, C, b, v) {
                                let {
                                    cross: V,
                                    direction: k
                                } = e, S = ["INPUT", "SELECT", "TEXTAREA"], B = {
                                    passive: !1
                                }, M = g(), $ = g(), F = y(50, 225).constrain(_.measure(20)), H = {
                                    mouse: 300,
                                    touch: 400
                                }, I = {
                                    mouse: 500,
                                    touch: 600
                                }, L = j ? 43 : 25, z = !1, O = 0, A = 0, W = !1, P = !1, Z = !1, G = !1;

                                function U(e) {
                                    if (!x(e, n) && e.touches.length >= 2) return N(e);
                                    let t = a.readPoint(e),
                                        i = a.readPoint(e, V),
                                        o = c(t - O),
                                        l = c(i - A);
                                    if (!P && !G && (!e.cancelable || !(P = o > l))) return N(e);
                                    let d = a.pointerMove(e);
                                    o > w && (Z = !0), u.useFriction(.3).useDuration(.75), s.start(), r.add(k(d)), e.preventDefault()
                                }

                                function N(e) {
                                    var t;
                                    let i, n, r = h.byDistance(0, !1).index !== p.get(),
                                        o = a.pointerUp(e) * (j ? I : H)[G ? "mouse" : "touch"],
                                        l = (t = k(o), i = p.add(-1 * d(t)), n = h.byDistance(t, !j).distance, j || c(t) < F ? n : C && r ? .5 * n : h.byIndex(i.get(), 0).distance),
                                        s = function(e, t) {
                                            var i, n;
                                            if (0 === e || 0 === t || c(e) <= c(t)) return 0;
                                            let r = (i = c(e), n = c(t), c(i - n));
                                            return c(r / e)
                                        }(o, l);
                                    P = !1, W = !1, $.clear(), u.useDuration(L - 10 * s).useFriction(.68 + s / 50), f.distance(l, !j), G = !1, m.emit("pointerUp")
                                }

                                function D(e) {
                                    Z && (e.stopPropagation(), e.preventDefault(), Z = !1)
                                }
                                return {
                                    init: function(e) {
                                        v && M.add(t, "dragstart", e => e.preventDefault(), B).add(t, "touchmove", () => void 0, B).add(t, "touchend", () => void 0).add(t, "touchstart", s).add(t, "mousedown", s).add(t, "touchcancel", N).add(t, "contextmenu", N).add(t, "click", D, !0);

                                        function s(s) {
                                            (l(v) || v(e, s)) && function(e) {
                                                let l, s = x(e, n);
                                                if ((G = s, Z = j && s && !e.buttons && z, z = c(r.get() - o.get()) >= 2, !s || 0 === e.button) && (l = e.target.nodeName || "", !S.includes(l))) {
                                                    let n;
                                                    W = !0, a.pointerDown(e), u.useFriction(0).useDuration(0), r.set(o), n = G ? i : t, $.add(n, "touchmove", U, B).add(n, "touchend", N).add(n, "mousemove", U, B).add(n, "mouseup", N), O = a.readPoint(e), A = a.readPoint(e, V), m.emit("pointerDown")
                                                }
                                            }(s)
                                        }
                                    },
                                    destroy: function() {
                                        M.clear(), $.clear()
                                    },
                                    pointerDown: function() {
                                        return W
                                    }
                                }
                            }(en, e, n, r, eB, function(e, t) {
                                let i, n;

                                function r(e) {
                                    return e.timeStamp
                                }

                                function a(i, n) {
                                    let r = n || e.scroll,
                                        a = `client${"x"===r?"X":"Y"}`;
                                    return (x(i, t) ? i : i.touches[0])[a]
                                }
                                return {
                                    pointerDown: function(e) {
                                        return i = e, n = e, a(e)
                                    },
                                    pointerMove: function(e) {
                                        let t = a(e) - a(n),
                                            o = r(e) - r(i) > 170;
                                        return n = e, o && (i = e), t
                                    },
                                    pointerUp: function(e) {
                                        if (!i || !n) return 0;
                                        let t = a(n) - a(i),
                                            o = r(e) - r(i),
                                            l = r(e) - r(n) > 170,
                                            s = t / o;
                                        return o && !l && c(s) > .1 ? s : 0
                                    },
                                    readPoint: a
                                }
                            }(en, r), eV, eb, eF, eM, e$, ej, w, ea, D, T, q, 0, X),
                            eventStore: eI,
                            percentOfView: ea,
                            index: ej,
                            indexPrevious: ew,
                            limit: e_,
                            location: eV,
                            offsetLocation: eS,
                            previousLocation: ek,
                            options: s,
                            resizeHandler: function(e, t, i, n, r, a, o) {
                                let s, d, f = [e].concat(n),
                                    u = [],
                                    h = !1;

                                function p(e) {
                                    return r.measureSize(o.measure(e))
                                }
                                return {
                                    init: function(r) {
                                        a && (d = p(e), u = n.map(p), s = new ResizeObserver(i => {
                                            (l(a) || a(r, i)) && function(i) {
                                                for (let a of i) {
                                                    if (h) return;
                                                    let i = a.target === e,
                                                        o = n.indexOf(a.target),
                                                        l = i ? d : u[o];
                                                    if (c(p(i ? e : n[o]) - l) >= .5) {
                                                        r.reInit(), t.emit("resize");
                                                        break
                                                    }
                                                }
                                            }(i)
                                        }), i.requestAnimationFrame(() => {
                                            f.forEach(e => s.observe(e))
                                        }))
                                    },
                                    destroy: function() {
                                        h = !0, s && s.disconnect()
                                    }
                                }
                            }(t, w, r, i, en, J, ee),
                            scrollBody: eM,
                            scrollBounds: function(e, t, i, n, r) {
                                let a = r.measure(10),
                                    o = r.measure(50),
                                    l = y(.1, .99),
                                    s = !1;

                                function d() {
                                    return !s && !!e.reachedAny(i.get()) && !!e.reachedAny(t.get())
                                }
                                return {
                                    shouldConstrain: d,
                                    constrain: function(r) {
                                        if (!d()) return;
                                        let s = e.reachedMin(t.get()) ? "min" : "max",
                                            f = c(e[s] - t.get()),
                                            u = i.get() - t.get(),
                                            h = l.constrain(f / o);
                                        i.subtract(u * h), !r && c(u) < a && (i.set(e.constrain(i.get())), n.useDuration(25).useBaseFriction())
                                    },
                                    toggleActive: function(e) {
                                        s = !e
                                    }
                                }
                            }(e_, eS, eB, eM, ea),
                            scrollLooper: function(e, t, i, n) {
                                let {
                                    reachedMin: r,
                                    reachedMax: a
                                } = y(t.min + .1, t.max + .1);
                                return {
                                    loop: function(t) {
                                        if (!(1 === t ? a(i.get()) : -1 === t && r(i.get()))) return;
                                        let o = -1 * t * e;
                                        n.forEach(e => e.add(o))
                                    }
                                }
                            }(em, e_, eS, [eV, eS, ek, eB]),
                            scrollProgress: eH,
                            scrollSnapList: ey.map(eH.get),
                            scrollSnaps: ey,
                            scrollTarget: e$,
                            scrollTo: eF,
                            slideLooper: function(e, t, i, n, r, a, o, l, s) {
                                let c = f(r),
                                    d = f(r).reverse(),
                                    u = m(p(d, o[0]), i, !1).concat(m(p(c, t - o[0] - 1), -i, !0));

                                function h(e, t) {
                                    return e.reduce((e, t) => e - r[t], t)
                                }

                                function p(e, t) {
                                    return e.reduce((e, i) => h(e, t) > 0 ? e.concat([i]) : e, [])
                                }

                                function m(r, o, c) {
                                    let d = a.map((e, i) => ({
                                        start: e - n[i] + .5 + o,
                                        end: e + t - .5 + o
                                    }));
                                    return r.map(t => {
                                        let n = c ? 0 : -i,
                                            r = c ? i : 0,
                                            a = d[t][c ? "end" : "start"];
                                        return {
                                            index: t,
                                            loopPoint: a,
                                            slideLocation: _(-1),
                                            translate: j(e, s[t]),
                                            target: () => l.get() > a ? n : r
                                        }
                                    })
                                }
                                return {
                                    canLoop: function() {
                                        return u.every(({
                                            index: e
                                        }) => .1 >= h(c.filter(t => t !== e), t))
                                    },
                                    clear: function() {
                                        u.forEach(e => e.translate.clear())
                                    },
                                    loop: function() {
                                        u.forEach(e => {
                                            let {
                                                target: t,
                                                translate: i,
                                                slideLocation: n
                                            } = e, r = t();
                                            r !== n.get() && (i.to(r), n.set(r))
                                        })
                                    },
                                    loopPoints: u
                                }
                            }(en, er, em, es, ec, eh, ey, eS, i),
                            slideFocus: eO,
                            slidesHandler: (A = !1, {
                                init: function(e) {
                                    K && (O = new MutationObserver(t => {
                                        !A && (l(K) || K(e, t)) && function(t) {
                                            for (let i of t)
                                                if ("childList" === i.type) {
                                                    e.reInit(), w.emit("slidesChanged");
                                                    break
                                                }
                                        }(t)
                                    })).observe(t, {
                                        childList: !0
                                    })
                                },
                                destroy: function() {
                                    O && O.disconnect(), A = !0
                                }
                            }),
                            slidesInView: eL,
                            slideIndexes: eC,
                            slideRegistry: ez,
                            slidesToScroll: eu,
                            target: eB,
                            translate: j(en, t)
                        };
                    return eA
                }(e, k, S, M, $, i, L);
                return i.loop && !n.slideLooper.canLoop() ? t(Object.assign({}, i, {
                    loop: !1
                })) : n
            }(N), A([U, ...D.map(({
                options: e
            }) => e)]).forEach(e => I.add(e, "change", E)), N.active && (v.translate.to(v.location.get()), v.animation.init(), v.slidesInView.init(), v.slideFocus.init(J), v.eventHandler.init(J), v.resizeHandler.init(J), v.slidesHandler.init(J), v.options.loop && v.slideLooper.loop(), k.offsetParent && S.length && v.dragHandler.init(J), V = H.init(J, D)))
        }

        function E(e, t) {
            let i = Q();
            R(), T(z({
                startIndex: i
            }, e), t), L.emit("reInit")
        }

        function R() {
            v.dragHandler.destroy(), v.eventStore.clear(), v.translate.clear(), v.slideLooper.clear(), v.resizeHandler.destroy(), v.slidesHandler.destroy(), v.slidesInView.destroy(), v.animation.destroy(), H.destroy(), I.clear()
        }

        function q(e, t, i) {
            N.active && !G && (v.scrollBody.useBaseFriction().useDuration(!0 === t ? 0 : N.duration), v.scrollTo.index(e, i || 0))
        }

        function Q() {
            return v.index.get()
        }
        let J = {
            canScrollNext: function() {
                return v.index.add(1).get() !== Q()
            },
            canScrollPrev: function() {
                return v.index.add(-1).get() !== Q()
            },
            containerNode: function() {
                return k
            },
            internalEngine: function() {
                return v
            },
            destroy: function() {
                G || (G = !0, I.clear(), R(), L.emit("destroy"), L.clear())
            },
            off: P,
            on: W,
            emit: Z,
            plugins: function() {
                return V
            },
            previousScrollSnap: function() {
                return v.indexPrevious.get()
            },
            reInit: E,
            rootNode: function() {
                return e
            },
            scrollNext: function(e) {
                q(v.index.add(1).get(), e, -1)
            },
            scrollPrev: function(e) {
                q(v.index.add(-1).get(), e, 1)
            },
            scrollProgress: function() {
                return v.scrollProgress.get(v.offsetLocation.get())
            },
            scrollSnapList: function() {
                return v.scrollSnapList
            },
            scrollTo: q,
            selectedScrollSnap: Q,
            slideNodes: function() {
                return S
            },
            slidesInView: function() {
                return v.slidesInView.get()
            },
            slidesNotInView: function() {
                return v.slidesInView.get(!1)
            }
        };
        return T(t, i), setTimeout(() => L.emit("init"), 0), J
    }

    function b(e = {}, i = []) {
        let a = (0, t.useRef)(e),
            o = (0, t.useRef)(i),
            [l, s] = (0, t.useState)(),
            [c, d] = (0, t.useState)(),
            f = (0, t.useCallback)(() => {
                l && l.reInit(a.current, o.current)
            }, [l]);
        return (0, t.useEffect)(() => {
            n(a.current, e) || (a.current = e, f())
        }, [e, f]), (0, t.useEffect)(() => {
            ! function(e, t) {
                if (e.length !== t.length) return !1;
                let i = r(e),
                    a = r(t);
                return i.every((e, t) => n(e, a[t]))
            }(o.current, i) && (o.current = i, f())
        }, [i, f]), (0, t.useEffect)(() => {
            if ("u" > typeof window && window.document && window.document.createElement && c) {
                C.globalOptions = b.globalOptions;
                let e = C(c, a.current, o.current);
                return s(e), () => e.destroy()
            }
            s(void 0)
        }, [c, s]), [d, l]
    }
    C.globalOptions = void 0, b.globalOptions = void 0, e.s(["default", () => b], 14681)
}, 9674, e => {
    "use strict";
    var t = e.i(91398);
    e.s(["PlayWhite", 0, e => (0, t.jsx)("svg", {
        style: e.style,
        className: e.className,
        width: "40",
        height: "40",
        viewBox: "0 0 40 40",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: (0, t.jsx)("path", {
            d: "M28.99 21.7425L13.0825 30.9725C11.7325 31.755 10 30.8075 10 29.23V10.77C10 9.195 11.73 8.245 13.0825 9.03L28.99 18.26C29.2971 18.4353 29.5524 18.6887 29.7299 18.9945C29.9075 19.3003 30.001 19.6476 30.001 20.0012C30.001 20.3549 29.9075 20.7022 29.7299 21.008C29.5524 21.3138 29.2971 21.5672 28.99 21.7425V21.7425Z",
            fill: e.fill ? ? "white"
        })
    })])
}, 5917, e => {
    "use strict";
    var t = e.i(91398);
    e.s(["PauseWhite", 0, e => (0, t.jsx)("svg", {
        style: e.style,
        className: e.className,
        width: "40",
        height: "40",
        viewBox: "0 0 40 40",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: (0, t.jsx)("path", {
            d: "M11 10C11 9.44772 11.4477 9 12 9H16.75C17.3023 9 17.75 9.44772 17.75 10V30C17.75 30.5523 17.3023 31 16.75 31H12C11.4477 31 11 30.5523 11 30V10ZM22.25 10C22.25 9.44772 22.6977 9 23.25 9H28C28.5523 9 29 9.44772 29 10V30C29 30.5523 28.5523 31 28 31H23.25C22.6977 31 22.25 30.5523 22.25 30V10Z",
            fill: "white"
        })
    })])
}, 79297, e => {
    "use strict";
    var t = e.i(91398);
    e.s(["StarGlare", 0, ({
        className: e,
        style: i
    }) => (0, t.jsxs)("svg", {
        className: e,
        style: i,
        width: "77",
        height: "72",
        viewBox: "0 0 77 72",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [(0, t.jsx)("g", {
            opacity: "0.4",
            filter: "url(#filter0_f_1951_659)",
            children: (0, t.jsx)("path", {
                d: "M36.6668 9.60514L37.4171 30.941L60.1707 5L38.5668 31.9054L72.6769 26.6544L38.8274 33.3828L68.3335 51.279L38.077 34.6821L42.1602 49.3054L36.6668 35.1952L24.1606 67.3515L35.2565 34.6821L5 51.279L34.5062 33.3828L19.042 30.941L34.7668 31.9054L13.1628 5L35.9164 30.941L36.6668 9.60514Z",
                fill: "white"
            })
        }), (0, t.jsx)("defs", {
            children: (0, t.jsxs)("filter", {
                id: "filter0_f_1951_659",
                x: "0.784062",
                y: "0.784062",
                width: "76.1116",
                height: "70.7834",
                filterUnits: "userSpaceOnUse",
                "color-interpolation-filters": "sRGB",
                children: [(0, t.jsx)("feFlood", {
                    "flood-opacity": "0",
                    result: "BackgroundImageFix"
                }), (0, t.jsx)("feBlend", {
                    mode: "normal",
                    in: "SourceGraphic",
                    in2: "BackgroundImageFix",
                    result: "shape"
                }), (0, t.jsx)("feGaussianBlur", {
                    stdDeviation: "2.10797",
                    result: "effect1_foregroundBlur_1951_659"
                })]
            })
        })]
    })])
}, 11829, (e, t, i) => {
    "use strict";

    function n(e, t) {
        var i = e.length;
        for (e.push(t); 0 < i;) {
            var n = i - 1 >>> 1,
                r = e[n];
            if (0 < o(r, t)) e[n] = t, e[i] = r, i = n;
            else break
        }
    }

    function r(e) {
        return 0 === e.length ? null : e[0]
    }

    function a(e) {
        if (0 === e.length) return null;
        var t = e[0],
            i = e.pop();
        if (i !== t) {
            e[0] = i;
            for (var n = 0, r = e.length, a = r >>> 1; n < a;) {
                var l = 2 * (n + 1) - 1,
                    s = e[l],
                    c = l + 1,
                    d = e[c];
                if (0 > o(s, i)) c < r && 0 > o(d, s) ? (e[n] = d, e[c] = i, n = c) : (e[n] = s, e[l] = i, n = l);
                else if (c < r && 0 > o(d, i)) e[n] = d, e[c] = i, n = c;
                else break
            }
        }
        return t
    }

    function o(e, t) {
        var i = e.sortIndex - t.sortIndex;
        return 0 !== i ? i : e.id - t.id
    }
    if (i.unstable_now = void 0, "object" == typeof performance && "function" == typeof performance.now) {
        var l, s = performance;
        i.unstable_now = function() {
            return s.now()
        }
    } else {
        var c = Date,
            d = c.now();
        i.unstable_now = function() {
            return c.now() - d
        }
    }
    var f = [],
        u = [],
        h = 1,
        p = null,
        m = 3,
        x = !1,
        g = !1,
        y = !1,
        _ = !1,
        j = "function" == typeof setTimeout ? setTimeout : null,
        w = "function" == typeof clearTimeout ? clearTimeout : null,
        C = "u" > typeof setImmediate ? setImmediate : null;

    function b(e) {
        for (var t = r(u); null !== t;) {
            if (null === t.callback) a(u);
            else if (t.startTime <= e) a(u), t.sortIndex = t.expirationTime, n(f, t);
            else break;
            t = r(u)
        }
    }

    function v(e) {
        if (y = !1, b(e), !g)
            if (null !== r(f)) g = !0, V || (V = !0, l());
            else {
                var t = r(u);
                null !== t && I(v, t.startTime - e)
            }
    }
    var V = !1,
        k = -1,
        S = 5,
        B = -1;

    function M() {
        return !!_ || !(i.unstable_now() - B < S)
    }

    function $() {
        if (_ = !1, V) {
            var e = i.unstable_now();
            B = e;
            var t = !0;
            try {
                e: {
                    g = !1,
                    y && (y = !1, w(k), k = -1),
                    x = !0;
                    var n = m;
                    try {
                        t: {
                            for (b(e), p = r(f); null !== p && !(p.expirationTime > e && M());) {
                                var o = p.callback;
                                if ("function" == typeof o) {
                                    p.callback = null, m = p.priorityLevel;
                                    var s = o(p.expirationTime <= e);
                                    if (e = i.unstable_now(), "function" == typeof s) {
                                        p.callback = s, b(e), t = !0;
                                        break t
                                    }
                                    p === r(f) && a(f), b(e)
                                } else a(f);
                                p = r(f)
                            }
                            if (null !== p) t = !0;
                            else {
                                var c = r(u);
                                null !== c && I(v, c.startTime - e), t = !1
                            }
                        }
                        break e
                    }
                    finally {
                        p = null, m = n, x = !1
                    }
                }
            }
            finally {
                t ? l() : V = !1
            }
        }
    }
    if ("function" == typeof C) l = function() {
        C($)
    };
    else if ("u" > typeof MessageChannel) {
        var F = new MessageChannel,
            H = F.port2;
        F.port1.onmessage = $, l = function() {
            H.postMessage(null)
        }
    } else l = function() {
        j($, 0)
    };

    function I(e, t) {
        k = j(function() {
            e(i.unstable_now())
        }, t)
    }
    i.unstable_IdlePriority = 5, i.unstable_ImmediatePriority = 1, i.unstable_LowPriority = 4, i.unstable_NormalPriority = 3, i.unstable_Profiling = null, i.unstable_UserBlockingPriority = 2, i.unstable_cancelCallback = function(e) {
        e.callback = null
    }, i.unstable_forceFrameRate = function(e) {
        0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : S = 0 < e ? Math.floor(1e3 / e) : 5
    }, i.unstable_getCurrentPriorityLevel = function() {
        return m
    }, i.unstable_next = function(e) {
        switch (m) {
            case 1:
            case 2:
            case 3:
                var t = 3;
                break;
            default:
                t = m
        }
        var i = m;
        m = t;
        try {
            return e()
        } finally {
            m = i
        }
    }, i.unstable_requestPaint = function() {
        _ = !0
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
        var i = m;
        m = e;
        try {
            return t()
        } finally {
            m = i
        }
    }, i.unstable_scheduleCallback = function(e, t, a) {
        var o = i.unstable_now();
        switch (a = "object" == typeof a && null !== a && "number" == typeof(a = a.delay) && 0 < a ? o + a : o, e) {
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
        return s = a + s, e = {
            id: h++,
            callback: t,
            priorityLevel: e,
            startTime: a,
            expirationTime: s,
            sortIndex: -1
        }, a > o ? (e.sortIndex = a, n(u, e), null === r(f) && e === r(u) && (y ? (w(k), k = -1) : y = !0, I(v, a - o))) : (e.sortIndex = s, n(f, e), g || x || (g = !0, V || (V = !0, l()))), e
    }, i.unstable_shouldYield = M, i.unstable_wrapCallback = function(e) {
        var t = m;
        return function() {
            var i = m;
            m = t;
            try {
                return e.apply(this, arguments)
            } finally {
                m = i
            }
        }
    }
}, 52659, (e, t, i) => {
    "use strict";
    t.exports = e.r(11829)
}, 68334, e => {
    "use strict";
    var t = e.i(91398);
    e.s(["ProLiquidGlass", 0, ({
        className: e,
        style: i
    }) => (0, t.jsxs)("svg", {
        className: e,
        style: i,
        width: "49",
        height: "29",
        viewBox: "0 0 49 29",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [(0, t.jsx)("g", {
            opacity: "0.5",
            filter: "url(#filter0_i_1951_660)",
            children: (0, t.jsx)("rect", {
                y: "0.594727",
                width: "49",
                height: "27.8108",
                rx: "13.9054",
                fill: "url(#paint0_linear_1951_660)",
                "fill-opacity": "0.02"
            })
        }), (0, t.jsx)("g", {
            opacity: "0.5",
            filter: "url(#filter1_i_1951_660)",
            children: (0, t.jsx)("rect", {
                width: "49",
                height: "27.8108",
                rx: "13.9054",
                transform: "matrix(1 0 0 -1 0 28.4058)",
                fill: "url(#paint1_linear_1951_660)",
                "fill-opacity": "0.02"
            })
        }), (0, t.jsx)("g", {
            opacity: "0.5",
            filter: "url(#filter2_i_1951_660)",
            children: (0, t.jsx)("rect", {
                y: "1.38965",
                width: "49",
                height: "26.2216",
                rx: "13.1108",
                fill: "white",
                "fill-opacity": "0.01"
            })
        }), (0, t.jsxs)("g", {
            opacity: "0.5",
            filter: "url(#filter3_i_1951_660)",
            children: [(0, t.jsx)("mask", {
                id: "path-4-inside-1_1951_660",
                fill: "white",
                children: (0, t.jsx)("path", {
                    d: "M0 14.5001C0 6.82039 6.22566 0.594727 13.9054 0.594727H35.0946C42.7743 0.594727 49 6.82039 49 14.5001V14.5001C49 22.1799 42.7743 28.4055 35.0946 28.4055H13.9054C6.22566 28.4055 0 22.1799 0 14.5001V14.5001Z"
                })
            }), (0, t.jsx)("path", {
                d: "M0 14.5001C0 6.52783 6.46283 0.0649968 14.4351 0.0649968H34.5649C42.5372 0.0649968 49 6.52783 49 14.5001V14.5001C49 7.11295 42.7743 1.12446 35.0946 1.12446H13.9054C6.22566 1.12446 0 7.11295 0 14.5001V14.5001ZM49 28.4055H0H49ZM0 28.4055V0.594727V28.4055ZM49 0.594727V28.4055V0.594727Z",
                fill: "url(#paint2_linear_1951_660)",
                mask: "url(#path-4-inside-1_1951_660)"
            })]
        }), (0, t.jsxs)("g", {
            opacity: "0.5",
            filter: "url(#filter4_i_1951_660)",
            children: [(0, t.jsx)("mask", {
                id: "path-6-inside-2_1951_660",
                fill: "white",
                children: (0, t.jsx)("path", {
                    d: "M0 14.5004C0 22.1801 6.22566 28.4058 13.9054 28.4058H35.0946C42.7743 28.4058 49 22.1801 49 14.5004V14.5004C49 6.82061 42.7743 0.59495 35.0946 0.59495H13.9054C6.22566 0.59495 0 6.82061 0 14.5004V14.5004Z"
                })
            }), (0, t.jsx)("path", {
                d: "M0 14.5004C0 22.4727 6.46283 28.9355 14.4351 28.9355H34.5649C42.5372 28.9355 49 22.4727 49 14.5004V14.5004C49 21.8875 42.7743 27.876 35.0946 27.876H13.9054C6.22566 27.876 0 21.8875 0 14.5004V14.5004ZM49 0.59495H0H49ZM0 0.59495V28.4058V0.59495ZM49 28.4058V0.59495V28.4058Z",
                fill: "url(#paint3_linear_1951_660)",
                mask: "url(#path-6-inside-2_1951_660)"
            })]
        }), (0, t.jsxs)("g", {
            filter: "url(#filter5_d_1951_660)",
            children: [(0, t.jsx)("g", {
                filter: "url(#filter6_i_1951_660)",
                children: (0, t.jsx)("path", {
                    d: "M35.6869 20.7088C34.4988 20.7088 33.476 20.451 32.6185 19.9354C31.7667 19.4142 31.1082 18.6772 30.643 17.7245C30.1779 16.7718 29.9453 15.6453 29.9453 14.3452V14.3283C29.9453 13.0226 30.1779 11.8961 30.643 10.949C31.1138 9.99627 31.7779 9.26212 32.6353 8.74653C33.4984 8.23094 34.5156 7.97314 35.6869 7.97314C36.8637 7.97314 37.8809 8.23094 38.7384 8.74653C39.5958 9.26212 40.2571 9.99627 40.7223 10.949C41.1874 11.9017 41.42 13.0282 41.42 14.3283V14.3452C41.42 15.6453 41.1874 16.7718 40.7223 17.7245C40.2627 18.6772 39.6042 19.4142 38.7468 19.9354C37.8893 20.451 36.8693 20.7088 35.6869 20.7088ZM35.6869 18.8342C36.4098 18.8342 37.0347 18.6492 37.5615 18.2793C38.0883 17.9095 38.4946 17.3883 38.7804 16.7158C39.0718 16.0432 39.2175 15.253 39.2175 14.3452V14.3283C39.2175 13.4149 39.0718 12.6247 38.7804 11.9578C38.4946 11.2852 38.0883 10.7669 37.5615 10.4026C37.0347 10.0327 36.4098 9.84776 35.6869 9.84776C34.9695 9.84776 34.3446 10.0327 33.8122 10.4026C33.2854 10.7669 32.8763 11.2852 32.5849 11.9578C32.2991 12.6247 32.1562 13.4149 32.1562 14.3283V14.3452C32.1562 15.253 32.2963 16.0432 32.5765 16.7158C32.8623 17.3883 33.2686 17.9095 33.7954 18.2793C34.3278 18.6492 34.9583 18.8342 35.6869 18.8342Z",
                    fill: "white"
                })
            }), (0, t.jsx)("g", {
                filter: "url(#filter7_i_1951_660)",
                children: (0, t.jsx)("path", {
                    d: "M19.6172 20.4058V8.27539H24.5181C25.3867 8.27539 26.1321 8.42951 26.7542 8.73774C27.3763 9.04597 27.8526 9.4803 28.1833 10.0407C28.5139 10.6011 28.6792 11.2681 28.6792 12.0414V12.0583C28.6792 12.8597 28.4775 13.5714 28.074 14.1935C27.6761 14.8099 27.1185 15.2471 26.4011 15.5049L29.0491 20.4058H26.5777L24.1902 15.8411C24.179 15.8411 24.1622 15.8411 24.1398 15.8411C24.1174 15.8411 24.0978 15.8411 24.081 15.8411H21.786V20.4058H19.6172ZM21.786 14.1767H24.2911C24.9804 14.1767 25.5156 13.9945 25.8967 13.6302C26.2778 13.266 26.4684 12.7588 26.4684 12.1087V12.0919C26.4684 11.4586 26.2694 10.957 25.8715 10.5871C25.4792 10.2117 24.9384 10.0239 24.2491 10.0239H21.786V14.1767Z",
                    fill: "white"
                })
            }), (0, t.jsx)("g", {
                filter: "url(#filter8_i_1951_660)",
                children: (0, t.jsx)("path", {
                    d: "M10.186 16.3959V14.6474H13.414C14.193 14.6474 14.7983 14.4485 15.2298 14.0506C15.6613 13.6471 15.8771 13.081 15.8771 12.3525V12.3357C15.8771 11.6015 15.6613 11.0355 15.2298 10.6376C14.7983 10.2397 14.193 10.0407 13.414 10.0407H10.186V8.27539H13.9436C14.7674 8.27539 15.4876 8.44352 16.1041 8.77977C16.7205 9.11603 17.2025 9.58958 17.55 10.2004C17.8974 10.8057 18.0711 11.5146 18.0711 12.3273V12.3441C18.0711 13.1511 17.8974 13.86 17.55 14.4709C17.2025 15.0761 16.7205 15.5497 16.1041 15.8915C15.4876 16.2278 14.7674 16.3959 13.9436 16.3959H10.186ZM9.10156 20.4058V8.27539H11.2704V20.4058H9.10156Z",
                    fill: "white"
                })
            })]
        }), (0, t.jsxs)("g", {
            "clip-path": "url(#clip0_1951_660)",
            children: [(0, t.jsx)("foreignObject", {
                x: "-1.98649",
                y: "-1.39176",
                width: "52.973",
                height: "31.784",
                children: (0, t.jsx)("div", {
                    style: {
                        clipPath: "url(#bgblur_1_1951_660_clip_path)",
                        height: "100%",
                        width: "100%"
                    }
                })
            }), (0, t.jsx)("rect", {
                "data-figma-bg-blur-radius": "1.98649",
                y: "0.594727",
                width: "49",
                height: "27.8108",
                rx: "13.9054",
                fill: "white",
                "fill-opacity": "0.01"
            })]
        }), (0, t.jsxs)("g", {
            "clip-path": "url(#clip2_1951_660)",
            children: [(0, t.jsx)("foreignObject", {
                x: "-1.98649",
                y: "-1.39176",
                width: "52.973",
                height: "31.784",
                children: (0, t.jsx)("div", {
                    style: {
                        clipPath: "url(#bgblur_3_1951_660_clip_path)",
                        height: "100%",
                        width: "100%"
                    }
                })
            }), (0, t.jsx)("rect", {
                "data-figma-bg-blur-radius": "1.98649",
                width: "49",
                height: "27.8108",
                rx: "13.9054",
                transform: "matrix(-1 0 0 1 49 0.594727)",
                fill: "white",
                "fill-opacity": "0.01"
            })]
        }), (0, t.jsxs)("defs", {
            children: [(0, t.jsxs)("filter", {
                id: "filter0_i_1951_660",
                x: "0",
                y: "0.594727",
                width: "49",
                height: "31.784",
                filterUnits: "userSpaceOnUse",
                "color-interpolation-filters": "sRGB",
                children: [(0, t.jsx)("feFlood", {
                    "flood-opacity": "0",
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
                    dy: "3.97297"
                }), (0, t.jsx)("feGaussianBlur", {
                    stdDeviation: "3.97297"
                }), (0, t.jsx)("feComposite", {
                    in2: "hardAlpha",
                    operator: "arithmetic",
                    k2: "-1",
                    k3: "1"
                }), (0, t.jsx)("feColorMatrix", {
                    type: "matrix",
                    values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"
                }), (0, t.jsx)("feBlend", {
                    mode: "normal",
                    in2: "shape",
                    result: "effect1_innerShadow_1951_660"
                })]
            }), (0, t.jsxs)("filter", {
                id: "filter1_i_1951_660",
                x: "0",
                y: "-3.37825",
                width: "49",
                height: "31.784",
                filterUnits: "userSpaceOnUse",
                "color-interpolation-filters": "sRGB",
                children: [(0, t.jsx)("feFlood", {
                    "flood-opacity": "0",
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
                    dy: "-3.97297"
                }), (0, t.jsx)("feGaussianBlur", {
                    stdDeviation: "3.97297"
                }), (0, t.jsx)("feComposite", {
                    in2: "hardAlpha",
                    operator: "arithmetic",
                    k2: "-1",
                    k3: "1"
                }), (0, t.jsx)("feColorMatrix", {
                    type: "matrix",
                    values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"
                }), (0, t.jsx)("feBlend", {
                    mode: "normal",
                    in2: "shape",
                    result: "effect1_innerShadow_1951_660"
                })]
            }), (0, t.jsxs)("filter", {
                id: "filter2_i_1951_660",
                x: "0",
                y: "1.38965",
                width: "49",
                height: "26.2217",
                filterUnits: "userSpaceOnUse",
                "color-interpolation-filters": "sRGB",
                children: [(0, t.jsx)("feFlood", {
                    "flood-opacity": "0",
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
                }), (0, t.jsx)("feOffset", {}), (0, t.jsx)("feGaussianBlur", {
                    stdDeviation: "2.11892"
                }), (0, t.jsx)("feComposite", {
                    in2: "hardAlpha",
                    operator: "arithmetic",
                    k2: "-1",
                    k3: "1"
                }), (0, t.jsx)("feColorMatrix", {
                    type: "matrix",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"
                }), (0, t.jsx)("feBlend", {
                    mode: "normal",
                    in2: "shape",
                    result: "effect1_innerShadow_1951_660"
                })]
            }), (0, t.jsxs)("filter", {
                id: "filter3_i_1951_660",
                x: "0",
                y: "0.594727",
                width: "49",
                height: "27.811",
                filterUnits: "userSpaceOnUse",
                "color-interpolation-filters": "sRGB",
                children: [(0, t.jsx)("feFlood", {
                    "flood-opacity": "0",
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
                }), (0, t.jsx)("feOffset", {}), (0, t.jsx)("feGaussianBlur", {
                    stdDeviation: "2.11892"
                }), (0, t.jsx)("feComposite", {
                    in2: "hardAlpha",
                    operator: "arithmetic",
                    k2: "-1",
                    k3: "1"
                }), (0, t.jsx)("feColorMatrix", {
                    type: "matrix",
                    values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.12 0"
                }), (0, t.jsx)("feBlend", {
                    mode: "normal",
                    in2: "shape",
                    result: "effect1_innerShadow_1951_660"
                })]
            }), (0, t.jsxs)("filter", {
                id: "filter4_i_1951_660",
                x: "0",
                y: "0.594727",
                width: "49",
                height: "27.811",
                filterUnits: "userSpaceOnUse",
                "color-interpolation-filters": "sRGB",
                children: [(0, t.jsx)("feFlood", {
                    "flood-opacity": "0",
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
                }), (0, t.jsx)("feOffset", {}), (0, t.jsx)("feGaussianBlur", {
                    stdDeviation: "2.11892"
                }), (0, t.jsx)("feComposite", {
                    in2: "hardAlpha",
                    operator: "arithmetic",
                    k2: "-1",
                    k3: "1"
                }), (0, t.jsx)("feColorMatrix", {
                    type: "matrix",
                    values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.12 0"
                }), (0, t.jsx)("feBlend", {
                    mode: "normal",
                    in2: "shape",
                    result: "effect1_innerShadow_1951_660"
                })]
            }), (0, t.jsxs)("filter", {
                id: "filter5_d_1951_660",
                x: "3.80427",
                y: "2.67585",
                width: "42.9149",
                height: "23.3304",
                filterUnits: "userSpaceOnUse",
                "color-interpolation-filters": "sRGB",
                children: [(0, t.jsx)("feFlood", {
                    "flood-opacity": "0",
                    result: "BackgroundImageFix"
                }), (0, t.jsx)("feColorMatrix", { in: "SourceAlpha",
                    type: "matrix",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                    result: "hardAlpha"
                }), (0, t.jsx)("feOffset", {}), (0, t.jsx)("feGaussianBlur", {
                    stdDeviation: "2.64865"
                }), (0, t.jsx)("feComposite", {
                    in2: "hardAlpha",
                    operator: "out"
                }), (0, t.jsx)("feColorMatrix", {
                    type: "matrix",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
                }), (0, t.jsx)("feBlend", {
                    mode: "normal",
                    in2: "BackgroundImageFix",
                    result: "effect1_dropShadow_1951_660"
                }), (0, t.jsx)("feBlend", {
                    mode: "normal",
                    in: "SourceGraphic",
                    in2: "effect1_dropShadow_1951_660",
                    result: "shape"
                })]
            }), (0, t.jsxs)("filter", {
                id: "filter6_i_1951_660",
                x: "29.9453",
                y: "7.97314",
                width: "11.4766",
                height: "14.0602",
                filterUnits: "userSpaceOnUse",
                "color-interpolation-filters": "sRGB",
                children: [(0, t.jsx)("feFlood", {
                    "flood-opacity": "0",
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
                    dy: "1.32432"
                }), (0, t.jsx)("feGaussianBlur", {
                    stdDeviation: "1.32432"
                }), (0, t.jsx)("feComposite", {
                    in2: "hardAlpha",
                    operator: "arithmetic",
                    k2: "-1",
                    k3: "1"
                }), (0, t.jsx)("feColorMatrix", {
                    type: "matrix",
                    values: "0 0 0 0 0.941176 0 0 0 0 0.941176 0 0 0 0 0.941176 0 0 0 1 0"
                }), (0, t.jsx)("feBlend", {
                    mode: "normal",
                    in2: "shape",
                    result: "effect1_innerShadow_1951_660"
                })]
            }), (0, t.jsxs)("filter", {
                id: "filter7_i_1951_660",
                x: "19.6172",
                y: "8.27539",
                width: "9.42969",
                height: "13.4547",
                filterUnits: "userSpaceOnUse",
                "color-interpolation-filters": "sRGB",
                children: [(0, t.jsx)("feFlood", {
                    "flood-opacity": "0",
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
                    dy: "1.32432"
                }), (0, t.jsx)("feGaussianBlur", {
                    stdDeviation: "1.32432"
                }), (0, t.jsx)("feComposite", {
                    in2: "hardAlpha",
                    operator: "arithmetic",
                    k2: "-1",
                    k3: "1"
                }), (0, t.jsx)("feColorMatrix", {
                    type: "matrix",
                    values: "0 0 0 0 0.941176 0 0 0 0 0.941176 0 0 0 0 0.941176 0 0 0 1 0"
                }), (0, t.jsx)("feBlend", {
                    mode: "normal",
                    in2: "shape",
                    result: "effect1_innerShadow_1951_660"
                })]
            }), (0, t.jsxs)("filter", {
                id: "filter8_i_1951_660",
                x: "9.10156",
                y: "8.27539",
                width: "8.96875",
                height: "13.4547",
                filterUnits: "userSpaceOnUse",
                "color-interpolation-filters": "sRGB",
                children: [(0, t.jsx)("feFlood", {
                    "flood-opacity": "0",
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
                    dy: "1.32432"
                }), (0, t.jsx)("feGaussianBlur", {
                    stdDeviation: "1.32432"
                }), (0, t.jsx)("feComposite", {
                    in2: "hardAlpha",
                    operator: "arithmetic",
                    k2: "-1",
                    k3: "1"
                }), (0, t.jsx)("feColorMatrix", {
                    type: "matrix",
                    values: "0 0 0 0 0.941176 0 0 0 0 0.941176 0 0 0 0 0.941176 0 0 0 1 0"
                }), (0, t.jsx)("feBlend", {
                    mode: "normal",
                    in2: "shape",
                    result: "effect1_innerShadow_1951_660"
                })]
            }), (0, t.jsx)("clipPath", {
                id: "bgblur_1_1951_660_clip_path",
                transform: "translate(1.98649 1.39176)",
                children: (0, t.jsx)("rect", {
                    y: "0.594727",
                    width: "49",
                    height: "27.8108",
                    rx: "13.9054"
                })
            }), (0, t.jsx)("clipPath", {
                id: "bgblur_3_1951_660_clip_path",
                transform: "translate(1.98649 1.39176)",
                children: (0, t.jsx)("rect", {
                    width: "49",
                    height: "27.8108",
                    rx: "13.9054",
                    transform: "matrix(-1 0 0 1 49 0.594727)"
                })
            }), (0, t.jsxs)("linearGradient", {
                id: "paint0_linear_1951_660",
                x1: "24.5",
                y1: "0.594727",
                x2: "24.5",
                y2: "28.4055",
                gradientUnits: "userSpaceOnUse",
                children: [(0, t.jsx)("stop", {
                    "stop-color": "white"
                }), (0, t.jsx)("stop", {
                    offset: "1",
                    "stop-color": "white",
                    "stop-opacity": "0"
                })]
            }), (0, t.jsxs)("linearGradient", {
                id: "paint1_linear_1951_660",
                x1: "24.5",
                y1: "0",
                x2: "24.5",
                y2: "27.8108",
                gradientUnits: "userSpaceOnUse",
                children: [(0, t.jsx)("stop", {
                    "stop-color": "white"
                }), (0, t.jsx)("stop", {
                    offset: "1",
                    "stop-color": "white",
                    "stop-opacity": "0"
                })]
            }), (0, t.jsxs)("linearGradient", {
                id: "paint2_linear_1951_660",
                x1: "24.5",
                y1: "0.594727",
                x2: "24.5",
                y2: "1.91905",
                gradientUnits: "userSpaceOnUse",
                children: [(0, t.jsx)("stop", {
                    "stop-color": "#C3C3C3"
                }), (0, t.jsx)("stop", {
                    offset: "1",
                    "stop-color": "#F9F9F9"
                })]
            }), (0, t.jsxs)("linearGradient", {
                id: "paint3_linear_1951_660",
                x1: "24.5",
                y1: "28.4058",
                x2: "24.5",
                y2: "27.0814",
                gradientUnits: "userSpaceOnUse",
                children: [(0, t.jsx)("stop", {
                    "stop-color": "#C3C3C3"
                }), (0, t.jsx)("stop", {
                    offset: "1",
                    "stop-color": "#F9F9F9"
                })]
            }), (0, t.jsx)("clipPath", {
                id: "clip0_1951_660",
                children: (0, t.jsx)("rect", {
                    width: "25.1622",
                    height: "27.8108",
                    fill: "white",
                    transform: "translate(0 0.594727)"
                })
            }), (0, t.jsx)("clipPath", {
                id: "clip2_1951_660",
                children: (0, t.jsx)("rect", {
                    width: "23.8378",
                    height: "27.8108",
                    fill: "white",
                    transform: "translate(25.1641 0.594727)"
                })
            })]
        })]
    })])
}, 85353, e => {
    "use strict";
    var t = e.i(91398);
    e.s(["NewCheckmark", 0, e => (0, t.jsx)("svg", {
        style: e.style,
        className: e.className,
        width: "26px",
        height: "26px",
        viewBox: "0 0 26 26",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        children: (0, t.jsx)("path", {
            d: "M9.13544 23.3964C8.46341 23.3139 7.92776 22.954 7.52851 22.3166L1.98844 13.4759C1.83045 13.2348 1.72235 13.0041 1.66413 12.7838C1.61431 12.5645 1.60333 12.3414 1.63118 12.1146C1.69306 11.6106 1.91213 11.2154 2.28837 10.929C2.66462 10.6427 3.10895 10.5309 3.62138 10.5939C4.20101 10.665 4.65781 10.9727 4.99178 11.5168L9.60953 19.1186L22.3586 3.51895C22.6183 3.20975 22.874 3.00239 23.1257 2.89686C23.3784 2.78293 23.6812 2.74763 24.034 2.79095C24.5465 2.85387 24.9469 3.06505 25.2353 3.42449C25.5237 3.78394 25.6375 4.21147 25.5767 4.7071C25.5519 4.90871 25.4936 5.1062 25.4016 5.29956C25.3096 5.49292 25.1788 5.69003 25.0092 5.89091L10.9747 22.6886C10.4962 23.2523 9.88308 23.4882 9.13544 23.3964Z",
            fill: e.fill ? ? "black"
        })
    })])
}, 11926, e => {
    "use strict";
    var t = e.i(91398);
    e.s(["HsaFsaHorizontal", 0, () => (0, t.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "169",
        height: "21",
        fill: "none",
        children: [(0, t.jsx)("path", {
            fill: "#fff",
            d: "M.033 10.034C.485 5.473 4.906 2.05 9.436 2.62c.871.11 1.708.408 2.525.71l-.532.981c-.123.087-.297-.076-.418-.122-3.995-1.495-8.463.724-9.598 4.824-1.517 5.478 3.537 10.493 9.007 8.947 4.471-1.264 6.585-6.425 4.342-10.517-.096-.175-.6-.856-.608-.939-.022-.218.453-.815.567-1.037 1.998 2.184 2.595 5.39 1.663 8.19-1.23 3.691-4.967 6.086-8.84 5.693C3.71 18.96.372 15.727.032 11.874a12.861 12.861 0 0 1 0-1.84Z"
        }), (0, t.jsx)("path", {
            fill: "#fff",
            d: "M15.58 1.491 8.19 14.37l-3.643-3.922-.001-.138.796-.746 2.67 2.907L14.571.957l1.009.534ZM29.405 9.439h4.35v-4.66h3.106v12.115h-3.106v-4.763h-4.35v4.763h-3.21V4.934l.156-.155h2.9l.136.155c-.115.143.018.343.018.414v4.09ZM86.62 8.404c-.24-.274-.238-.67-.515-.936-.533-.512-1.874-.584-2.473-.188-.8.528-.599 1.46.242 1.799 2.076.838 5.208.283 5.883 3.23.935 4.083-3.237 5.47-6.532 4.771-1.98-.42-3.304-1.888-3.49-3.913h3.158l.103.104c.297 1.23 1.418 1.618 2.587 1.448.813-.119 1.401-1.094.886-1.814-.415-.579-2.3-.73-3.03-.904-1.733-.41-3.29-1.153-3.491-3.137-.247-2.428 1.536-3.945 3.78-4.287 2.265-.344 5.02.432 5.692 2.893.06.221.12.447.16.675l-.162.259H86.62ZM48.148 8.404H45.3c-.303-.383-.39-.857-.842-1.126-.649-.386-2.483-.398-2.625.558-.122.82.25 1.163 1.004 1.374 2.192.616 5.273.467 5.616 3.496.418 3.674-2.856 4.805-5.944 4.494-2.133-.214-4.081-1.79-4.095-4.033h3.21c.134 1.302 1.368 1.698 2.533 1.55.935-.121 1.52-1.132.836-1.864-.539-.577-2.549-.723-3.397-.953-1.385-.375-2.626-1.145-2.955-2.636-.555-2.521 1.276-4.322 3.66-4.686.998-.152 2.51-.034 3.464.358 1.372.562 2.438 1.956 2.382 3.469v-.001ZM61.202 16.896H57.89l-.732-2.271h-4.23l-.733 2.27h-3.21l4.398-12.014c.049-.082.122-.091.208-.103.926-.127 2.139.09 3.098.015.165.05.371.681.455.89 1.167 2.935 2.229 6.032 3.314 9.01.265.725.51 1.467.748 2.203h-.003Zm-4.866-4.66L55.04 8.197l-1.294 4.039h2.589ZM102.617 16.893h-3.261l-.781-2.274h-4.341l-.625 2.274h-3.21l4.294-11.911c.294-.403 2.818-.115 3.408-.19l4.518 12.101h-.002Zm-7.559-4.66h2.693L96.508 8.3c-.254-.023-.169-.015-.212.148-.336 1.26-.84 2.542-1.238 3.788v-.002ZM78.904 4.779V7.47h-4.866v2.382h4.556v2.433l-.155.156h-4.401v4.452h-3.21L70.82 5.038c-.013-.086.116-.26.162-.26h7.921ZM137.829 15.088c-.271.143-.44.435-.672.622-1.306 1.051-3.525 1.016-4.818-.05-2.284-1.881-2.159-6.412.487-7.906 1.607-.908 4.053-.487 5.056 1.12l.15-1.3c.283-.049 1.389-.132 1.512.053l.051.26c-.173 2.867.216 5.971 0 8.81-.186 2.447-2.053 3.695-4.398 3.662-1.951-.027-4.044-1.164-4.097-3.304h1.656c.226 1.762 2.562 2.15 3.929 1.495.331-.158.756-.512.919-.841.035-.072.226-.57.226-.602v-2.02h-.001Zm-.692-5.413c-.059-.064-.068-.167-.138-.226-1.362-1.14-3.484-.835-4.222.846-.35.798-.356 2.446.035 3.233 1.001 2.009 3.837 1.934 4.785-.068.362-.763.4-2.252.079-3.035a6.745 6.745 0 0 0-.362-.657c-.053-.079-.146-.058-.178-.093h.001ZM121.052 4.214v1.553h-6.11v3.728h5.695c-.069.488.167 1.171-.155 1.554h-5.54v3.934h5.954l.156.156v1.501h-7.974V4.214h7.974ZM147.664 3.695v5.178l.834-.874c1.449-1.116 3.987-.902 5.173.51 1.592 1.9 1.55 5.749-.309 7.46-1.258 1.157-3.272 1.251-4.699.344-.496-.315-.708-.719-1.102-1.124v1.45h-1.553V3.693h1.657l-.001.001Zm2.25 5.1c-3.061.441-2.992 6.09-.106 6.581 4.337.737 4.365-7.196.106-6.582ZM168.994 12.6h-7.042c.038 1.841 1.424 3 3.257 2.79.848-.097 1.643-.707 1.817-1.548h1.761c-.161 1.106-1.007 2.133-1.998 2.61-1.588.767-3.632.606-4.993-.538-1.593-1.34-1.955-3.844-1.297-5.751.926-2.682 4.292-3.732 6.624-2.164 1.518 1.02 1.91 2.866 1.871 4.6Zm-1.761-1.243c-.129-.351-.117-.67-.259-1.036-1.022-2.631-4.965-1.678-5.022 1.036h5.281ZM69.272 3.433 64.094 18.55h-2.07L67.2 3.433h2.071ZM158.331 3.698v11.028c0 .031.183.323.271.35l.764.013v1.553c-.825.027-2.055.088-2.534-.728a7.102 7.102 0 0 1-.262-.67V3.698h1.761ZM124.679 3.698v10.925c0 .018.166.277.203.315.239.244.513.135.832.15v1.554c-.762.012-1.756.08-2.326-.522-.418-.442-.327-1.053-.474-1.597l.004-10.825h1.761ZM128.924 7.527v9.113h-1.76V7.682l.155-.155h1.605ZM143.628 7.632v9.009h-1.761V7.684a.334.334 0 0 1 .256-.159c.189-.027 1.505.009 1.505.107ZM142.458 3.822c.968-.173 1.517.415 1.374 1.373-.094.625-.89.893-1.452.731-1.051-.3-.986-1.914.079-2.105l-.001.001ZM127.753 3.821c.484-.11 1.167.09 1.333.597.232.708-.058 1.458-.838 1.554-1.576.196-1.736-1.871-.495-2.15Z"
        })]
    })])
}, 49845, e => {
    "use strict";
    var t = e.i(91398);
    e.s(["default", 0, ({
        className: e,
        style: i
    }) => (0, t.jsxs)("svg", {
        className: e,
        style: i,
        width: "63",
        height: "42",
        viewBox: "0 23 63 42",
        fill: "none",
        children: [(0, t.jsx)("g", {
            filter: "url(#filter0_i_2927_17477)",
            children: (0, t.jsx)("rect", {
                y: "27.8203",
                width: "62.6564",
                height: "32.0923",
                rx: "16.0462",
                fill: "url(#paint0_linear_2927_17477)",
                "fill-opacity": "0.02"
            })
        }), (0, t.jsx)("g", {
            filter: "url(#filter1_i_2927_17477)",
            children: (0, t.jsx)("rect", {
                width: "62.6564",
                height: "32.0923",
                rx: "16.0462",
                transform: "matrix(1 0 0 -1 0 59.9102)",
                fill: "url(#paint1_linear_2927_17477)",
                "fill-opacity": "0.02"
            })
        }), (0, t.jsx)("g", {
            filter: "url(#filter2_i_2927_17477)",
            children: (0, t.jsx)("rect", {
                y: "27.8203",
                width: "62.6564",
                height: "32.0923",
                rx: "16.0462",
                fill: "white",
                "fill-opacity": "0.01"
            })
        }), (0, t.jsxs)("g", {
            filter: "url(#filter3_i_2927_17477)",
            children: [(0, t.jsx)("mask", {
                id: "path-4-inside-1_2927_17477",
                fill: "white",
                children: (0, t.jsx)("path", {
                    d: "M0 43.8665C0 35.0044 7.18411 27.8203 16.0462 27.8203H46.6102C55.4723 27.8203 62.6564 35.0044 62.6564 43.8665V43.8665C62.6564 52.7285 55.4723 59.9126 46.6103 59.9126H16.0462C7.18412 59.9126 0 52.7285 0 43.8665V43.8665Z"
                })
            }), (0, t.jsx)("path", {
                d: "M0 43.8665C0 34.6668 7.45779 27.209 16.6574 27.209H45.999C55.1986 27.209 62.6564 34.6668 62.6564 43.8665V43.8665C62.6564 35.342 55.4723 28.4316 46.6103 28.4316H16.0462C7.18411 28.4316 0 35.342 0 43.8665V43.8665ZM62.6564 59.9126H0H62.6564ZM0 59.9126V27.8203V59.9126ZM62.6564 27.8203V59.9126V27.8203Z",
                fill: "url(#paint2_linear_2927_17477)",
                mask: "url(#path-4-inside-1_2927_17477)"
            })]
        }), (0, t.jsxs)("g", {
            filter: "url(#filter4_i_2927_17477)",
            children: [(0, t.jsx)("mask", {
                id: "path-6-inside-2_2927_17477",
                fill: "white",
                children: (0, t.jsx)("path", {
                    d: "M0 43.864C0 52.726 7.18411 59.9102 16.0462 59.9102H46.6102C55.4723 59.9102 62.6564 52.726 62.6564 43.864V43.864C62.6564 35.002 55.4723 27.8178 46.6103 27.8178H16.0462C7.18412 27.8178 0 35.002 0 43.864V43.864Z"
                })
            }), (0, t.jsx)("path", {
                d: "M0 43.864C0 53.0636 7.45779 60.5214 16.6574 60.5214H45.999C55.1986 60.5214 62.6564 53.0636 62.6564 43.864V43.864C62.6564 52.3884 55.4723 59.2989 46.6103 59.2989H16.0462C7.18411 59.2989 0 52.3884 0 43.864V43.864ZM62.6564 27.8178H0H62.6564ZM0 27.8178V59.9102V27.8178ZM62.6564 59.9102V27.8178V59.9102Z",
                fill: "url(#paint3_linear_2927_17477)",
                mask: "url(#path-6-inside-2_2927_17477)"
            })]
        }), (0, t.jsx)("path", {
            d: "M46.9606 50.7421C45.9751 50.7421 45.1165 50.5876 44.3849 50.2785C43.6533 49.9634 43.0758 49.527 42.6526 48.9695C42.2294 48.4119 41.9875 47.7665 41.927 47.0332L41.918 46.915H43.9223L43.9314 47.015C43.9737 47.409 44.1279 47.7514 44.3939 48.0423C44.666 48.3332 45.0288 48.5604 45.4823 48.724C45.9418 48.8877 46.4648 48.9695 47.0513 48.9695C47.6015 48.9695 48.0913 48.8816 48.5206 48.7059C48.9499 48.5301 49.2854 48.2877 49.5273 47.9786C49.7752 47.6696 49.8991 47.315 49.8991 46.915V46.906C49.8991 46.403 49.7087 45.9848 49.3278 45.6515C48.9468 45.3182 48.3241 45.0576 47.4594 44.8697L46.0265 44.5697C44.7023 44.2849 43.7379 43.8334 43.1333 43.2152C42.5286 42.591 42.2263 41.7941 42.2263 40.8244V40.8154C42.2324 40.0578 42.4349 39.3912 42.834 38.8155C43.2391 38.2397 43.7984 37.7913 44.5118 37.4701C45.2253 37.1489 46.0446 36.9883 46.9697 36.9883C47.8948 36.9883 48.702 37.1489 49.3912 37.4701C50.0866 37.7852 50.6338 38.2155 51.0328 38.7609C51.4379 39.3063 51.6647 39.9215 51.713 40.6063L51.7221 40.7245H49.7359L49.7177 40.6063C49.6633 40.2487 49.5152 39.9306 49.2733 39.6518C49.0375 39.373 48.7201 39.1548 48.321 38.9973C47.928 38.8336 47.4685 38.7549 46.9425 38.7609C46.4346 38.7609 45.9811 38.8397 45.582 38.9973C45.183 39.1488 44.8656 39.37 44.6297 39.6609C44.4 39.9518 44.2851 40.3033 44.2851 40.7154V40.7245C44.2851 41.2093 44.4695 41.6153 44.8383 41.9426C45.2132 42.2638 45.8209 42.5153 46.6613 42.6971L48.0943 43.0152C49.0073 43.2092 49.748 43.4667 50.3163 43.7879C50.8847 44.1091 51.2989 44.5061 51.5589 44.9788C51.8249 45.4454 51.9579 46.003 51.9579 46.6514V46.6605C51.9579 47.4968 51.7523 48.221 51.3412 48.8331C50.9361 49.4392 50.3587 49.9088 49.6089 50.2422C48.8592 50.5755 47.9764 50.7421 46.9606 50.7421Z",
            fill: "white"
        }), (0, t.jsx)("path", {
            d: "M35.4502 50.7404C34.3558 50.7404 33.4126 50.5373 32.6205 50.1313C31.8284 49.7253 31.2178 49.1617 30.7885 48.4405C30.3592 47.7132 30.1445 46.8678 30.1445 45.9042V37.3047H32.1852V45.7497C32.1852 46.38 32.3121 46.9345 32.5661 47.4133C32.8261 47.892 33.1979 48.2647 33.6816 48.5314C34.1714 48.798 34.7609 48.9314 35.4502 48.9314C36.1455 48.9314 36.735 48.798 37.2187 48.5314C37.7025 48.2647 38.0713 47.892 38.3252 47.4133C38.5792 46.9345 38.7061 46.38 38.7061 45.7497V37.3047H40.7468V45.9042C40.7468 46.8678 40.5321 47.7132 40.1028 48.4405C39.6796 49.1617 39.0719 49.7253 38.2799 50.1313C37.4939 50.5373 36.5506 50.7404 35.4502 50.7404Z",
            fill: "white"
        }), (0, t.jsx)("path", {
            d: "M21.2734 50.4222V37.3047H23.305V48.6587H29.4451V50.4222H21.2734Z",
            fill: "white"
        }), (0, t.jsx)("path", {
            d: "M11.7111 45.9406V44.2316H15.2845C16.1672 44.2316 16.8505 44.0043 17.3342 43.5498C17.8239 43.0892 18.0688 42.4529 18.0688 41.6408V41.6226C18.0688 40.7984 17.8239 40.1591 17.3342 39.7046C16.8505 39.25 16.1672 39.0228 15.2845 39.0228H11.7111V37.3047H15.7924C16.651 37.3047 17.4037 37.4865 18.0507 37.8501C18.7037 38.2077 19.2146 38.7107 19.5834 39.3591C19.9523 40.0015 20.1367 40.75 20.1367 41.6045V41.6226C20.1367 42.4772 19.9523 43.2317 19.5834 43.8862C19.2146 44.5346 18.7037 45.0407 18.0507 45.4043C17.4037 45.7618 16.651 45.9406 15.7924 45.9406H11.7111ZM10.6953 50.4222V37.3047H12.7269V50.4222H10.6953Z",
            fill: "white"
        }), (0, t.jsxs)("defs", {
            children: [(0, t.jsxs)("filter", {
                id: "filter0_i_2927_17477",
                x: "0",
                y: "27.8203",
                width: "62.6562",
                height: "36.6784",
                filterUnits: "userSpaceOnUse",
                "color-interpolation-filters": "sRGB",
                children: [(0, t.jsx)("feFlood", {
                    "flood-opacity": "0",
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
                    dy: "4.58462"
                }), (0, t.jsx)("feGaussianBlur", {
                    stdDeviation: "4.58462"
                }), (0, t.jsx)("feComposite", {
                    in2: "hardAlpha",
                    operator: "arithmetic",
                    k2: "-1",
                    k3: "1"
                }), (0, t.jsx)("feColorMatrix", {
                    type: "matrix",
                    values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"
                }), (0, t.jsx)("feBlend", {
                    mode: "normal",
                    in2: "shape",
                    result: "effect1_innerShadow_2927_17477"
                })]
            }), (0, t.jsxs)("filter", {
                id: "filter1_i_2927_17477",
                x: "0",
                y: "23.2318",
                width: "62.6562",
                height: "36.6784",
                filterUnits: "userSpaceOnUse",
                "color-interpolation-filters": "sRGB",
                children: [(0, t.jsx)("feFlood", {
                    "flood-opacity": "0",
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
                    dy: "-4.58462"
                }), (0, t.jsx)("feGaussianBlur", {
                    stdDeviation: "4.58462"
                }), (0, t.jsx)("feComposite", {
                    in2: "hardAlpha",
                    operator: "arithmetic",
                    k2: "-1",
                    k3: "1"
                }), (0, t.jsx)("feColorMatrix", {
                    type: "matrix",
                    values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"
                }), (0, t.jsx)("feBlend", {
                    mode: "normal",
                    in2: "shape",
                    result: "effect1_innerShadow_2927_17477"
                })]
            }), (0, t.jsxs)("filter", {
                id: "filter2_i_2927_17477",
                x: "0",
                y: "27.8203",
                width: "62.6562",
                height: "32.0938",
                filterUnits: "userSpaceOnUse",
                "color-interpolation-filters": "sRGB",
                children: [(0, t.jsx)("feFlood", {
                    "flood-opacity": "0",
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
                }), (0, t.jsx)("feOffset", {}), (0, t.jsx)("feGaussianBlur", {
                    stdDeviation: "2.44513"
                }), (0, t.jsx)("feComposite", {
                    in2: "hardAlpha",
                    operator: "arithmetic",
                    k2: "-1",
                    k3: "1"
                }), (0, t.jsx)("feColorMatrix", {
                    type: "matrix",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"
                }), (0, t.jsx)("feBlend", {
                    mode: "normal",
                    in2: "shape",
                    result: "effect1_innerShadow_2927_17477"
                })]
            }), (0, t.jsxs)("filter", {
                id: "filter3_i_2927_17477",
                x: "0",
                y: "27.8203",
                width: "62.6562",
                height: "32.0938",
                filterUnits: "userSpaceOnUse",
                "color-interpolation-filters": "sRGB",
                children: [(0, t.jsx)("feFlood", {
                    "flood-opacity": "0",
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
                }), (0, t.jsx)("feOffset", {}), (0, t.jsx)("feGaussianBlur", {
                    stdDeviation: "2.44513"
                }), (0, t.jsx)("feComposite", {
                    in2: "hardAlpha",
                    operator: "arithmetic",
                    k2: "-1",
                    k3: "1"
                }), (0, t.jsx)("feColorMatrix", {
                    type: "matrix",
                    values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.12 0"
                }), (0, t.jsx)("feBlend", {
                    mode: "normal",
                    in2: "shape",
                    result: "effect1_innerShadow_2927_17477"
                })]
            }), (0, t.jsxs)("filter", {
                id: "filter4_i_2927_17477",
                x: "0",
                y: "27.8164",
                width: "62.6562",
                height: "32.0938",
                filterUnits: "userSpaceOnUse",
                "color-interpolation-filters": "sRGB",
                children: [(0, t.jsx)("feFlood", {
                    "flood-opacity": "0",
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
                }), (0, t.jsx)("feOffset", {}), (0, t.jsx)("feGaussianBlur", {
                    stdDeviation: "2.44513"
                }), (0, t.jsx)("feComposite", {
                    in2: "hardAlpha",
                    operator: "arithmetic",
                    k2: "-1",
                    k3: "1"
                }), (0, t.jsx)("feColorMatrix", {
                    type: "matrix",
                    values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.12 0"
                }), (0, t.jsx)("feBlend", {
                    mode: "normal",
                    in2: "shape",
                    result: "effect1_innerShadow_2927_17477"
                })]
            }), (0, t.jsxs)("linearGradient", {
                id: "paint0_linear_2927_17477",
                x1: "31.3282",
                y1: "27.8203",
                x2: "31.3282",
                y2: "59.9126",
                gradientUnits: "userSpaceOnUse",
                children: [(0, t.jsx)("stop", {
                    "stop-color": "white"
                }), (0, t.jsx)("stop", {
                    offset: "1",
                    "stop-color": "white",
                    "stop-opacity": "0"
                })]
            }), (0, t.jsxs)("linearGradient", {
                id: "paint1_linear_2927_17477",
                x1: "31.3282",
                y1: "0",
                x2: "31.3282",
                y2: "32.0923",
                gradientUnits: "userSpaceOnUse",
                children: [(0, t.jsx)("stop", {
                    "stop-color": "white"
                }), (0, t.jsx)("stop", {
                    offset: "1",
                    "stop-color": "white",
                    "stop-opacity": "0"
                })]
            }), (0, t.jsxs)("linearGradient", {
                id: "paint2_linear_2927_17477",
                x1: "31.3282",
                y1: "20.1793",
                x2: "31.3282",
                y2: "39.2819",
                gradientUnits: "userSpaceOnUse",
                children: [(0, t.jsx)("stop", {
                    "stop-color": "#C3C3C3"
                }), (0, t.jsx)("stop", {
                    offset: "1",
                    "stop-color": "#F9F9F9"
                })]
            }), (0, t.jsxs)("linearGradient", {
                id: "paint3_linear_2927_17477",
                x1: "31.3282",
                y1: "66.023",
                x2: "31.3282",
                y2: "57.6178",
                gradientUnits: "userSpaceOnUse",
                children: [(0, t.jsx)("stop", {
                    "stop-color": "#C3C3C3"
                }), (0, t.jsx)("stop", {
                    offset: "1",
                    "stop-color": "#F9F9F9"
                })]
            })]
        })]
    })])
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
}]);