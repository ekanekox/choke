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
        nonIndexable: f,
        robots: g
    }) => {
        let h, {
                asPath: u
            } = (0, n.useRouter)(),
            {
                regionSlug: x
            } = (0, a.useContext)(o.RegionLocaleContext);
        if (p) h = p;
        else if (m) h = `${l}/${x}${s(m)}`;
        else {
            let e = u.split("?")[0].split("#")[0];
            h = `${l}${e}`
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
                content: h
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
                href: h
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
            }), f && (0, t.jsx)("meta", {
                name: "google",
                content: "nositelinkssearchbox"
            }, "sitelinks"), f && (0, t.jsx)("meta", {
                name: "google",
                content: "notranslate"
            }, "notranslate"), g ? (0, t.jsx)("meta", {
                name: "robots",
                content: g
            }, "robots") : f && (0, t.jsx)("meta", {
                name: "robots",
                content: "noindex,nofollow"
            }, "robots")]
        })
    }])
}, 86236, e => {
    "use strict";
    let t = e.i(91788).useLayoutEffect;
    e.s(["useIsomorphicLayoutEffect", 0, t])
}, 8762, e => {
    "use strict";
    var t = e.i(91788),
        i = e.i(18888),
        n = e.i(86236),
        a = e.i(92195),
        o = e.i(62774);

    function r(e, l = () => {}) {
        let s = (0, t.useMemo)(() => i.default.context(l, e), [e]),
            d = (0, t.useMemo)(() => (0, o.debounce)(() => a.ScrollTrigger.refresh(), 300), []);
        return (0, n.useIsomorphicLayoutEffect)(() => (window.addEventListener("resize", d), () => {
            window.removeEventListener("resize", d), s.revert()
        }), [d]), s
    }
    e.s(["useGsapContext", () => r])
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
    let a = t.default.h2.withConfig({
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
    let o = t.default.p.withConfig({
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
`, e.s(["H1", 0, n, "H2_OPT", 0, a, "P", 0, o, "SectionPadding", 0, r])
}, 64130, e => {
    "use strict";
    var t = e.i(91398);
    e.i(64157);
    var i = e.i(71179),
        n = e.i(88234),
        a = e.i(91788),
        o = e.i(60814),
        r = e.i(19231);
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

  @media (min-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
    font-size: 48px;
    letter-spacing: -1.6px;
  }
`, s = (0, o.default)(({
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
`, d = (0, o.default)(({
        className: e,
        faqData: n,
        bgColor: o = "black",
        htmlId: d,
        pb: c
    }) => {
        let {
            t: p
        } = (0, i.useTranslation)("ring"), m = (0, a.useRef)(null);
        return (0, t.jsx)("section", {
            className: `${e} ${o} ${c}`,
            id: d,
            ref: m,
            children: (0, t.jsxs)(r.Container, {
                className: "container",
                children: [(0, t.jsx)(l, {
                    children: p("ring.faq.head")
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
    e.s(["FAQSection", 0, d])
}, 57706, e => {
    "use strict";
    var t = e.i(53147),
        i = e.i(60814);
    let n = (0, i.default)(t.default).withConfig({
        displayName: "CTAComponent__CTALink",
        componentId: "sc-87d441a3-0"
    })
    `
  // letter-spacing: -0.6px; */

  // padding: 12px 14px;
  // transition: all 0.2s ease-in-out;
  // text-align: center;
  align-items: center;
  justify-content: center;
  display: flex !important;
  margin: auto;

  --border: none;
  border: var(--border);
  //   width: 100%;
  padding: 10px 14px;
  border-radius: 40px;
  background: #007ff5 !important;
  color: #fff !important;
  text-align: center;
  font-weight: 500;
  line-height: 16px; /* 106.667% */
  cursor: pointer;
  font-size: 14px;

  //  &:hover {
  //       box-shadow: 0 0 12px rgba(255, 255, 255, 0.9);
  //   }
  @media (min-width: ${({theme:e})=>e.globalV2.lg.minWidth}) {
    font-size: 15px;
    padding: 12px 16px;
    border-radius: 200px;
  }
`, a = i.default.button.withConfig({
        displayName: "CTAComponent__PrimaryCTA",
        componentId: "sc-87d441a3-1"
    })
    `
  --border: none;
  border: var(--border);
  padding: 10px 14px;
  border-radius: 40px;
  background: ${({color:e})=>"black"===e?"#000":"#007ff5"} !important;
  color: ${({color:e})=>"#fff"} !important;
  text-align: center;
  font-weight: 500;
  line-height: 16px; /* 106.667% */
  cursor: pointer;
  font-size: 15px;

  &:disabled {
    background-color: rgba(0, 0, 0, 0.1);
    color: rgba(0, 0, 0, 0.4);
    cursor: not-allowed;
  }

  &:disabled {
    filter: brightness(80%);
    background-color: rgba(0, 0, 0, 0.2) !important;
    color: rgba(0, 0, 0, 0.7) !important;
  }

  &:not(:disabled) {
    box-shadow: 0px 1px 4px 0px
      ${({color:e})=>"black"===e?"#333":"#6fbaff"} inset;
  }

  @media (min-width: 992px) {
    font-size: 15px;
    padding: 12px 16px;
    border-radius: 200px;
  }
`, o = i.default.button.withConfig({
        displayName: "CTAComponent__SecondaryCTA",
        componentId: "sc-87d441a3-2"
    })
    `
  padding: 10px 14px;
  border-radius: 40px;
  background: transparent;
  color: #000 !important;
  text-align: center;
  font-weight: 500;
  line-height: 16px; /* 106.667% */
  cursor: pointer;
  border: 1.5px solid #000;
  transition: all 0.2s ease-in-out;
  font-size: 15px;

  &:hover {
    background-color: #00000011;
  }

  &:disabled {
    background-color: rgba(0, 0, 0, 0.1);
    color: rgba(0, 0, 0, 0.6);
    cursor: not-allowed;
  }

  @media (min-width: 992px) {
    font-size: 15px;
    padding: 12px 16px;
    border-radius: 200px;
  }
`, r = i.default.button.withConfig({
        displayName: "CTAComponent__FlatButton",
        componentId: "sc-87d441a3-3"
    })
    `
  --border: none;
  //   width: 100%;
  padding: 10px 14px;
  color: #000 !important;
  text-align: center;
  font-weight: 500;
  line-height: 16px; /* 106.667% */
  cursor: pointer;
  position: relative;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  background: transparent;
  border-radius: 0;
  white-space: nowrap;
  transition: all 0.2s ease-in-out;

  svg {
    position: relative;
    margin-left: 10px;
    bottom: -3.5px;

    @media (min-width: ${({theme:e})=>e.globalV2.lg.minWidth}) {
      bottom: -2px;
    }
  }

  &:hover {
    box-shadow: 0 -1px 0 #000 inset;
  }

  &:disabled {
    background-color: rgba(0, 0, 0, 0.1);
    color: rgba(0, 0, 0, 0.4);
    cursor: not-allowed;
  }

  &:disabled {
    filter: brightness(80%);
    background-color: rgba(0, 0, 0, 0.2) !important;
    color: rgba(0, 0, 0, 0.7) !important;
  }

  @media (min-width: 992px) {
    font-size: 15px;
    padding: 12px 16px;
  }
`, l = (0, i.default)(t.default).withConfig({
        displayName: "CTAComponent__FlatLink",
        componentId: "sc-87d441a3-4"
    })
    `
  --border: none;
  --color: ${({color:e="#000"})=>e};
  padding: 10px 14px;
  color: ${({color:e="#000"})=>e};
  text-align: center;
  font-weight: 500;
  line-height: 16px; /* 106.667% */
  cursor: pointer;
  position: relative;
  border: none;
  border-bottom: 1px solid rgba(var(--color), 0.2);
  background: transparent;
  border-radius: 0;
  white-space: nowrap;
  transition: all 0.2s ease-in-out;

  svg {
    position: relative;
    margin-left: 0.8rem;
    bottom: -3.5px;

    @media (min-width: ${({theme:e})=>e.globalV2.lg.minWidth}) {
      bottom: -2px;
    }
  }

  &:hover {
    box-shadow: 0 -1px 0 currentColor inset;
  }

  &:disabled {
    background-color: rgba(currentColor, 0.1);
    color: rgba(currentColor, 0.4);
    cursor: not-allowed;
  }

  @media (min-width: 992px) {
    font-size: 15px;
    padding: 12px 16px;
  }
`, s = i.default.button.withConfig({
        displayName: "CTAComponent__CTAButton",
        componentId: "sc-87d441a3-5"
    })
    `
    font-size: ${({theme:e})=>e.typographyV2.fontSize.mediumsmall};
    font-weight: 500;
    cursor: pointer;
    background: transparent;
    border: none;
    
    @media (min-width: ${({theme:e})=>e.globalV2.xxxl.minWidth}) {
        font-size: ${({theme:e})=>e.typographyV2.fontSize.small};
    }
    
    letter-spacing: -0.6px; */
    color: #000000;
    background: #ffffff;
    border-radius: 50px;
    padding: 12px 14px;
    transition: all 0.2s ease-in-out;
    text-align: center;
    align-items: center;
    justify-content: center;
    display: flex !important;
    // &:hover {
    //     box-shadow: 0 0 12px rgba(255, 255, 255, 0.9);
    // }
    @media (min-width: ${({theme:e})=>e.globalV2.lg.minWidth}) {
        margin-top: 16px;
        padding: 12px 24px;
        display: inline-block !important;
    }

    &.primary {
        border: none;
        background: #007ff5;
        -webkit-backdrop-filter: blur(27px);
        backdrop-filter: blur(27px);
        color: #fff;
    }

    &.flat{
     position : relative;
     border: none;
     border-bottom: 1px solid rgba(0, 0, 0, 0.20);
     background: transparent;
     border-radius: 0;
     color : #000;
     white-space: nowrap;

     svg{
      position : relative;
      margin-left : 10px;
      bottom: 2px;

       @media (min-width: ${({theme:e})=>e.globalV2.lg.minWidth}) {
         bottom: -2px;
       }
     }

      &:hover {
        box-shadow: none;
    }
    }
     
`, d = i.css `
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50px;
  font-size: ${({theme:e})=>e.typographyV2.fontSize.mediumsmall};
  font-weight: 500;
  white-space: nowrap;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  letter-spacing: -0.42px;

  @media (min-width: ${({theme:e})=>e.globalV2.lg.minWidth}) {
    font-size: 16px;
  }
`;
    i.default.button.withConfig({
        displayName: "CTAComponent__SecondaryButton",
        componentId: "sc-87d441a3-6"
    })
    `
  ${d};
  padding: 12px 24px;
  color: #ffffff;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  gap: 1rem;

  &:hover {
    border-color: rgba(255, 255, 255, 0.55);
  }

  svg {
    flex-shrink: 0;
  }

  &.sm-none {
    display: none;
    @media (min-width: ${({theme:e})=>e.globalV2.sm.maxWidth}) {
      display: inline-flex !important;
    }
  }
`;
    let c = (0, i.default)(t.default).withConfig({
        displayName: "CTAComponent__BuyNowButton",
        componentId: "sc-87d441a3-7"
    })
    `
  ${d};
  padding: 12px 24px;
  color: #000000;
  background: #ffffff;

  &:hover {
    box-shadow: 0 0 12px rgba(255, 255, 255, 0.9);
  }

  @media (min-width: ${({theme:e})=>e.globalV2.lg.minWidth}) {
    width: 154px;
  }
`;
    e.s(["BuyNowButton", 0, c, "CTAButton", 0, s, "CTALink", 0, n, "FlatButton", 0, r, "FlatLink", 0, l, "PrimaryCTA", 0, a, "SecondaryCTA", 0, o])
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
}, 32899, e => {
    "use strict";
    var t = e.i(91788),
        i = e.i(53147),
        n = e.i(62591),
        a = e.i(3115);
    let o = i.FORWARDED_PARAM_KEYS;
    e.s(["useForwardSearchParamsShopify", 0, (e = {}) => {
        let {
            currency: i
        } = t.default.useContext(a.RegionLocaleContext), [r, l] = t.default.useState("");
        return t.default.useEffect(() => {
            l(document.location.search)
        }, []), (t, a, l) => {
            if (!t) return "";
            let s = new URL(t),
                d = new URLSearchParams,
                c = new URLSearchParams(r);
            for (let [e, t] of s.searchParams) d.set(e, t);
            d.set("channel", "buy_button"), a && d.set("attributes[product_type]", a), Object.entries(e).forEach(([e, t]) => {
                d.set(e, t);
                let i = `attributes[${e}]`;
                d.set(i, t)
            }), o.forEach(e => {
                let t = c.get(e),
                    i = `attributes[${e}]`;
                "email" === e && (i = "checkout[email]"), "discount" === e && (i = "discount"), t && d.set(i, t)
            });
            try {
                let e = (0, n.getCookie)("_uh_fbclid");
                e && (d.set("fbclid", String(e)), d.set("attributes[fbclid]", String(e)));
                let t = (0, n.getCookie)("_fbp");
                t && (d.set("_fbp", String(t)), d.set("attributes[_fbp]", String(t)))
            } catch (e) {}
            return l && i && d.set("currency", i), s.search = d.toString(), s.href
        }
    }])
}, 72455, e => {
    "use strict";
    var t = e.i(91788);
    e.s(["useLottieAnimation", 0, (i, {
        path: n,
        renderer: a = "svg",
        loop: o = !0,
        autoplay: r = !1,
        rendererSettings: l,
        onInstance: s
    }) => {
        let d = (0, t.useRef)(null);
        return (0, t.useEffect)(() => {
            if (!i.current) return;
            let t = !0;
            return e.A(36770).then(({
                default: e
            }) => {
                t && i.current && (d.current = e.loadAnimation({
                    container: i.current,
                    renderer: a,
                    loop: o,
                    autoplay: r,
                    rendererSettings: l,
                    path: n
                }), s && d.current && s(d.current))
            }), () => {
                t = !1, d.current ? .destroy()
            }
        }, [r, i, o, n, a, l, s]), d
    }])
}, 27252, e => {
    "use strict";
    var t = e.i(91398);
    e.s(["TickWhite", 0, e => (0, t.jsx)("svg", {
        width: "13px",
        height: "10px",
        viewBox: "0 0 13 10",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        className: e.className,
        style: e.style,
        children: (0, t.jsx)("g", {
            id: "Symbols",
            stroke: "none",
            strokeWidth: "1",
            fill: "none",
            fillRule: "evenodd",
            children: (0, t.jsx)("g", {
                id: "section-/-after-payment",
                transform: "translate(-314.000000, -852.000000)",
                stroke: e.fill ? ? "#FFFFFF",
                strokeWidth: "2",
                children: (0, t.jsx)("g", {
                    id: "section-/-footbar-/-PreOrder-Copy",
                    transform: "translate(0.000000, 826.000000)",
                    children: (0, t.jsx)("g", {
                        id: "Group",
                        transform: "translate(315.000000, 27.000000)",
                        children: (0, t.jsx)("polyline", {
                            id: "Path",
                            points: "10.6666667 0 3.33333333 7.33333333 0 4"
                        })
                    })
                })
            })
        })
    })])
}, 21395, e => {
    "use strict";
    var t = e.i(91398);
    e.s(["Lock", 0, e => (0, t.jsx)("svg", {
        className: e.className,
        style: e.style,
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: (0, t.jsx)("g", {
            id: "uis:lock",
            children: (0, t.jsx)("path", {
                id: "Vector",
                d: "M11.3327 5.99967V4.66634C11.3327 2.79967 9.86602 1.33301 7.99935 1.33301C6.13268 1.33301 4.66602 2.79967 4.66602 4.66634V5.99967C3.53268 5.99967 2.66602 6.86634 2.66602 7.99967V12.6663C2.66602 13.7997 3.53268 14.6663 4.66602 14.6663H11.3327C12.466 14.6663 13.3327 13.7997 13.3327 12.6663V7.99967C13.3327 6.86634 12.466 5.99967 11.3327 5.99967ZM5.99935 4.66634C5.99935 3.53301 6.86602 2.66634 7.99935 2.66634C9.13268 2.66634 9.99935 3.53301 9.99935 4.66634V5.99967H5.99935V4.66634Z",
                fill: e.fill ? ? "#ffffff"
            })
        })
    })])
}, 22631, e => {
    "use strict";
    var t = e.i(91398);
    e.s(["UHHomeFill", 0, e => (0, t.jsxs)("svg", {
        className: e.className,
        style: e.style,
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [(0, t.jsx)("rect", {
            y: "2.88025",
            width: "16",
            height: "7.04",
            rx: "0.666667",
            fill: e.fill ? ? "#000"
        }), (0, t.jsx)("path", {
            d: "M0 11.2586C0 11.0745 0.149238 10.9253 0.333333 10.9253H15.6667C15.8508 10.9253 16 11.0745 16 11.2586V11.6168C16 11.7012 15.968 11.7825 15.9104 11.8442L15.1153 12.6961C14.8632 12.9663 14.5102 13.1197 14.1406 13.1197H8H1.65423C1.21913 13.1197 0.811403 12.9074 0.561901 12.5509L0.0602502 11.8342C0.0210344 11.7782 0 11.7115 0 11.6431V11.2586Z",
            fill: e.fill ? ? "#000"
        })]
    })])
}, 59505, e => {
    "use strict";
    var t = e.i(91398);
    e.s(["UHRingFill", 0, e => (0, t.jsxs)("svg", {
        className: e.className,
        style: e.style,
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [(0, t.jsx)("g", {
            "clip-path": "url(#clip0_859_313)",
            children: (0, t.jsx)("path", {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M7.99984 0.666626C12.0499 0.666626 15.3332 3.94987 15.3332 7.99996C15.3332 12.05 12.0499 15.3333 7.99984 15.3333C3.94975 15.3333 0.666504 12.05 0.666504 7.99996C0.666504 3.94987 3.94975 0.666626 7.99984 0.666626ZM7.99984 2.13329C4.75977 2.13329 2.13317 4.75989 2.13317 7.99996C2.13317 11.24 4.75977 13.8666 7.99984 13.8666C11.2399 13.8666 13.8665 11.24 13.8665 7.99996C13.8665 4.75989 11.2399 2.13329 7.99984 2.13329ZM11.2995 12.4006C10.3803 13.0909 9.23784 13.5 7.99984 13.5C6.76191 13.5 5.6195 13.091 4.70037 12.4008L11.2995 12.4006Z",
                fill: e.fill ? ? "#000"
            })
        }), (0, t.jsx)("defs", {
            children: (0, t.jsx)("clipPath", {
                id: "clip0_859_313",
                children: (0, t.jsx)("rect", {
                    width: "16",
                    height: "16",
                    fill: "white"
                })
            })
        })]
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
        f = 1,
        g = null,
        h = 3,
        u = !1,
        x = !1,
        b = !1,
        w = !1,
        y = "function" == typeof setTimeout ? setTimeout : null,
        v = "function" == typeof clearTimeout ? clearTimeout : null,
        $ = "u" > typeof setImmediate ? setImmediate : null;

    function C(e) {
        for (var t = a(m); null !== t;) {
            if (null === t.callback) o(m);
            else if (t.startTime <= e) o(m), t.sortIndex = t.expirationTime, n(p, t);
            else break;
            t = a(m)
        }
    }

    function k(e) {
        if (b = !1, C(e), !x)
            if (null !== a(p)) x = !0, _ || (_ = !0, l());
            else {
                var t = a(m);
                null !== t && T(k, t.startTime - e)
            }
    }
    var _ = !1,
        V = -1,
        j = 5,
        z = -1;

    function W() {
        return !!w || !(i.unstable_now() - z < j)
    }

    function S() {
        if (w = !1, _) {
            var e = i.unstable_now();
            z = e;
            var t = !0;
            try {
                e: {
                    x = !1,
                    b && (b = !1, v(V), V = -1),
                    u = !0;
                    var n = h;
                    try {
                        t: {
                            for (C(e), g = a(p); null !== g && !(g.expirationTime > e && W());) {
                                var r = g.callback;
                                if ("function" == typeof r) {
                                    g.callback = null, h = g.priorityLevel;
                                    var s = r(g.expirationTime <= e);
                                    if (e = i.unstable_now(), "function" == typeof s) {
                                        g.callback = s, C(e), t = !0;
                                        break t
                                    }
                                    g === a(p) && o(p), C(e)
                                } else o(p);
                                g = a(p)
                            }
                            if (null !== g) t = !0;
                            else {
                                var d = a(m);
                                null !== d && T(k, d.startTime - e), t = !1
                            }
                        }
                        break e
                    }
                    finally {
                        g = null, h = n, u = !1
                    }
                }
            }
            finally {
                t ? l() : _ = !1
            }
        }
    }
    if ("function" == typeof $) l = function() {
        $(S)
    };
    else if ("u" > typeof MessageChannel) {
        var P = new MessageChannel,
            N = P.port2;
        P.port1.onmessage = S, l = function() {
            N.postMessage(null)
        }
    } else l = function() {
        y(S, 0)
    };

    function T(e, t) {
        V = y(function() {
            e(i.unstable_now())
        }, t)
    }
    i.unstable_IdlePriority = 5, i.unstable_ImmediatePriority = 1, i.unstable_LowPriority = 4, i.unstable_NormalPriority = 3, i.unstable_Profiling = null, i.unstable_UserBlockingPriority = 2, i.unstable_cancelCallback = function(e) {
        e.callback = null
    }, i.unstable_forceFrameRate = function(e) {
        0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : j = 0 < e ? Math.floor(1e3 / e) : 5
    }, i.unstable_getCurrentPriorityLevel = function() {
        return h
    }, i.unstable_next = function(e) {
        switch (h) {
            case 1:
            case 2:
            case 3:
                var t = 3;
                break;
            default:
                t = h
        }
        var i = h;
        h = t;
        try {
            return e()
        } finally {
            h = i
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
        var i = h;
        h = e;
        try {
            return t()
        } finally {
            h = i
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
            id: f++,
            callback: t,
            priorityLevel: e,
            startTime: o,
            expirationTime: s,
            sortIndex: -1
        }, o > r ? (e.sortIndex = o, n(m, e), null === a(p) && e === a(m) && (b ? (v(V), V = -1) : b = !0, T(k, o - r))) : (e.sortIndex = s, n(p, e), x || u || (x = !0, _ || (_ = !0, l()))), e
    }, i.unstable_shouldYield = W, i.unstable_wrapCallback = function(e) {
        var t = h;
        return function() {
            var i = h;
            h = t;
            try {
                return e.apply(this, arguments)
            } finally {
                h = i
            }
        }
    }
}, 52659, (e, t, i) => {
    "use strict";
    t.exports = e.r(11829)
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
}, 36770, e => {
    e.v(t => Promise.all(["static/chunks/166f95df112bc730.js"].map(t => e.l(t))).then(() => t(31449)))
}]);