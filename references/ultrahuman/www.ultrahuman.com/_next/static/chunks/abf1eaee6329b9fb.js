(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 54134, e => {
    "use strict";
    var t = e.i(91398),
        i = e.i(58678),
        a = e.i(3828),
        n = e.i(91788),
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
        canonical: m,
        basePath: p,
        nonIndexable: h,
        robots: g
    }) => {
        let u, {
                asPath: f
            } = (0, a.useRouter)(),
            {
                regionSlug: x
            } = (0, n.useContext)(o.RegionLocaleContext);
        if (m) u = m;
        else if (p) u = `${l}/${x}${s(p)}`;
        else {
            let e = f.split("?")[0].split("#")[0];
            u = `${l}${e}`
        }
        let b = !!p,
            y = p ? `${l}/global${s(p)}` : void 0,
            w = b ? (0, r.getAllRegionSlugs)() : [];
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
            }, "canonical"), y && (0, t.jsx)("link", {
                rel: "alternate",
                hrefLang: "x-default",
                href: y
            }, "hreflang-x-default"), w.map(e => {
                let i, a, n = (0, r.parseRegionLocale)(e),
                    o = `${l}/${e}${s(p)}`;
                if ("GLOBAL" === n.region) return null;
                let d = (i = n.region.toUpperCase(), a = (0, r.getDefaultLanguageForRegion)(i), `${a}-${i}`),
                    c = e.includes("-") ? `${n.language}-${n.region}` : d;
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
            }, "notranslate"), g ? (0, t.jsx)("meta", {
                name: "robots",
                content: g
            }, "robots") : h && (0, t.jsx)("meta", {
                name: "robots",
                content: "noindex,nofollow"
            }, "robots")]
        })
    }])
}, 71588, e => {
    e.v("/_next/static/media/chat-bubbles.2bd81f1f.svg")
}, 69752, e => {
    e.v("/_next/static/media/cross-icon.6b992514.svg")
}, 88492, e => {
    e.v("/_next/static/media/birthday-icon.7c114bbc.svg")
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
        a = t.default.h1.withConfig({
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
`, n = t.default.h1.withConfig({
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
`, o = t.default.h2.withConfig({
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
    let s = t.default.h3.withConfig({
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
`, d = t.default.p.withConfig({
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
`, m = t.default.p.withConfig({
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
    let p = t.css `
  padding: 4.8rem 0;
  @media (min-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
    padding: 10rem 0;
  }
`;
    e.s(["H1", 0, a, "H1_OPT", 0, n, "H2", 0, o, "H2_OPT", 0, l, "H3", 0, s, "P", 0, m, "PBody", 0, c, "PLargeGradient", 0, r, "P_OPT", 0, d, "SectionPadding", 0, p])
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
}, 13308, e => {
    "use strict";
    var t = e.i(91398),
        i = e.i(60814);
    let a = (0, i.default)(({
        className: e,
        children: i,
        ctaText: a,
        ctaOnClick: n
    }) => (0, t.jsxs)("div", {
        className: e,
        onClick: e => e.stopPropagation(),
        "aria-hidden": "true",
        children: [(0, t.jsx)("div", {
            className: "children-container",
            children: i
        }), a && a.length ? (0, t.jsx)("div", {
            className: "sticky-container",
            children: (0, t.jsx)("button", {
                onClick: n,
                children: a
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
    e.s(["ImageModal", 0, a])
}, 21921, e => {
    "use strict";
    var t = e.i(91398),
        i = e.i(19231),
        a = e.i(91788),
        n = e.i(60814),
        o = e.i(21666),
        r = e.i(13308),
        l = e.i(3251);
    let s = (0, n.default)(({
        className: e,
        data: i
    }) => i.length < 1 ? null : (0, t.jsxs)("div", {
        className: e,
        children: [(0, t.jsx)("h3", {
            children: "Your best deal awaits"
        }), (0, t.jsx)("div", {
            className: "content",
            children: i.map((e, a) => (0, t.jsxs)(t.Fragment, {
                children: [(0, t.jsxs)("div", {
                    className: "offer",
                    children: [e.image && e.image.length > 0 ? (0, t.jsx)("div", {
                        className: "image-container ",
                        children: e.image.map((e, i) => (0, t.jsx)(o.CustomImage, {
                            src: e,
                            alt: "offer-icon",
                            height: "40",
                            width: "40"
                        }, i))
                    }) : null, (0, t.jsx)("p", {
                        className: "offer-text",
                        children: e.title
                    })]
                }, a), a !== i.length - 1 ? (0, t.jsx)("div", {
                    className: "separator"
                }) : null]
            }))
        })]
    })).withConfig({
        displayName: "PrimaryOffers__PrimaryOffersModalData",
        componentId: "sc-568953e8-0"
    })
    `
  margin: auto;
  position: relative;
  border-radius: 24px;
  height: 100%;
  background: #eeeeee;
  display: flex;
  padding: 40px 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  flex-shrink: 0;
  scroll-behavior: smooth;

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

  & .content {
    position: relative;
    width: 100%;
    color: #000;
    padding-top: 1.6rem;
    display: flex;
    gap: 1.2rem;
    flex-direction: column;

    .offer {
      display: flex;
      flex-direction: row;
      gap: 1.6rem;
      align-items: center;
      // justify-content: center;

      .image-container {
        // position: relative;
        // width: 4rem;
        // height: 4rem;
        display: flex;
        // justify-content: center;
        // align-items: center;

        img {
          height: 3.2rem;
          width: auto;
          margin-left: -16px;
          border: 2px solid var(--element-color);

          &:first-child {
            margin-left: 0;
          }
        }
      }
    }

    .separator {
      border: 1px solid rgba(60, 60, 67, 0.08);
      width: 100%;
      margin: 2rem 0;
    }

    .offer-text {
      color: #000;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 120%; /* 16.8px */
      letter-spacing: -0.56px;
    }
  }
`, d = (0, n.default)(({
        className: e,
        data: a
    }) => a.length < 1 ? null : (0, t.jsx)("div", {
        className: e,
        children: (0, t.jsx)(i.Container, {
            children: (0, t.jsx)("div", {
                className: "deals",
                children: a.map((e, i) => (0, t.jsxs)("div", {
                    className: "deal",
                    children: [e.image && e.image.length > 0 ? (0, t.jsx)("div", {
                        className: "image-container ",
                        children: e.image.map((e, i) => (0, t.jsx)(o.CustomImage, {
                            src: e,
                            alt: "",
                            height: "40",
                            width: "40"
                        }, i))
                    }) : null, (0, t.jsx)("p", {
                        className: "deal-text",
                        children: e.title
                    })]
                }, i))
            })
        })
    })).withConfig({
        displayName: "PrimaryOffers",
        componentId: "sc-568953e8-1"
    })
    `
  background: ${({$transparent:e,$backgroundColor:t})=>e?"transparent":t||"#fff"};
  padding: ${({$compact:e})=>e?"0":"4.8rem 0"};
  padding: 4.8rem 0;
  // border: 1px solid red;
  width: 100%;

  .deals {
    // border: 1px solid red;
    display: flex;
    width: 100%;
    border-radius: 8px;
    background: linear-gradient(
        0deg,
        rgba(115, 115, 115, 0.05) 0%,
        rgba(115, 115, 115, 0.05) 100%
      ),
      ${({$dealsBackgroundColor:e})=>e||"#fff"};
    overflow: hidden;
    height: 8rem;
    justify-content: space-between;
    padding: 0 4rem;

    @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
      gap: 5rem;
      justify-content: center;
    }

    .deal {
      width: 24%;
      margin: 2rem 0;
      display: flex;
      gap: 1.6rem;
      display: flex;
      justify-content: center;
      align-items: center;

      @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
        width: 29rem;
      }

      .image-container {
        display: flex;

        img {
          height: 3rem;
          width: auto;
          margin-left: -16px;
          border: 2px solid var(--element-color);

          &:first-child {
            margin-left: 0;
          }
        }
      }

      .deal-text {
        color: #000;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 120%; /* 16.8px */
        letter-spacing: -0.56px;

        b {
          font-weight: 500;
        }
      }
    }
  }
`, c = (0, n.default)(({
        className: e,
        data: n
    }) => {
        let [d, c] = (0, a.useState)(0);
        (0, a.useEffect)(() => {
            let e = setInterval(() => {
                c(e => e < n.length - 1 ? e + 1 : 0)
            }, 5e3);
            return () => clearInterval(e)
        }, [n]);
        let m = (0, a.useContext)(l.OffersModalNewContext);
        return (0, t.jsx)("div", {
            className: e,
            children: (0, t.jsxs)(i.Container, {
                style: {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                },
                children: [(0, t.jsx)("div", {
                    className: "deals",
                    children: n.map((e, i) => (0, t.jsxs)("div", {
                        className: `deal ${d===i?"visible":""}`,
                        children: [e.image && e.image.length > 0 ? (0, t.jsx)("div", {
                            className: "image-container ",
                            children: e.image.map((e, i) => (0, t.jsx)(o.CustomImage, {
                                src: e,
                                alt: "",
                                height: "40",
                                width: "40"
                            }, i))
                        }) : null, (0, t.jsx)("p", {
                            className: "deal-text",
                            children: e.title
                        })]
                    }, i))
                }), n.length > 1 ? (0, t.jsx)("button", {
                    className: "see-all",
                    onClick: () => {
                        m.set((0, t.jsx)(r.ImageModal, {
                            children: (0, t.jsx)(s, {
                                data: n
                            })
                        })), m.show()
                    },
                    children: "See all"
                }) : null]
            })
        })
    }).withConfig({
        displayName: "PrimaryOffers__PrimaryOffersTransitionTile",
        componentId: "sc-568953e8-2"
    })
    `
  position: relative;
  margin-bottom: ${({$compact:e})=>e?"0":"1.6rem"};
  background: ${({$transparent:e,backgroundColor:t})=>e?"transparent":t||"#eee"};
  display: flex;
  justify-content: center;
  align-items: center;

  .deals {
    position: relative;
    height: 58px;
    width: 100%;
    padding-left: 0.5rem;
    // display: flex;
    // justify-content: center;
    // border: 1px solid red;

    .deal {
      padding: 1.6rem 0;
      position: absolute;
      opacity: 0;
      // top: 0;
      // left: 0;
      // border: 1px solid blue;
      height: 100%;
      display: flex;
      gap: 1.2rem;
      justify-content: center;
      align-items: center;
      transition: opacity ease-in 0.5s;

      .image-container {
        display: flex;

        img {
          height: 3.2rem;
          width: auto;
          margin-left: -16px;
          border: 2px solid var(--element-color);
          padding: 0.5px;

          &:first-child {
            margin-left: 0;
          }
        }
      }

      .deal-text {
        color: #000;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 130%; /* 18.2px */
        letter-spacing: -0.42px;
        padding-right: 1.5rem;

        b {
          font-weight: 500;
        }
      }
    }

    .visible {
      opacity: 1;
    }
  }

  .see-all {
    padding-right: 0.5rem;
    text-wrap: nowrap;
    border: none;
    color: #000;
    text-align: center;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px; /* 133.333% */
    letter-spacing: -0.24px;
    text-decoration-line: underline;
    text-decoration-style: solid;
    text-decoration-skip-ink: auto;
    text-decoration-thickness: auto;
    text-underline-offset: auto;
    text-underline-position: from-font;
    background-color: transparent;
  }
`;
    e.s(["PrimaryOffers", 0, d, "PrimaryOffersTransitionTile", 0, c])
}, 13691, e => {
    "use strict";
    let t = {
        active: !0,
        breakpoints: {},
        delay: 4e3,
        jump: !1,
        playOnInit: !0,
        stopOnFocusIn: !0,
        stopOnInteraction: !0,
        stopOnMouseEnter: !1,
        stopOnLastSnap: !1,
        rootNode: null
    };

    function i(e = {}) {
        let a, n, o, r, l = null,
            s = 0,
            d = !1,
            c = !1,
            m = !1,
            p = !1;

        function h() {
            if (!o) {
                if (f()) {
                    m = !0;
                    return
                }
                d || n.emit("autoplay:play"),
                    function() {
                        let {
                            ownerWindow: e
                        } = n.internalEngine();
                        e.clearTimeout(s), s = e.setTimeout(v, r[n.selectedScrollSnap()]), l = new Date().getTime(), n.emit("autoplay:timerset")
                    }(), d = !0
            }
        }

        function g() {
            o || (d && n.emit("autoplay:stop"), function() {
                let {
                    ownerWindow: e
                } = n.internalEngine();
                e.clearTimeout(s), s = 0, l = null, n.emit("autoplay:timerstopped")
            }(), d = !1)
        }

        function u() {
            if (f()) return m = d, g();
            m && h()
        }

        function f() {
            let {
                ownerDocument: e
            } = n.internalEngine();
            return "hidden" === e.visibilityState
        }

        function x() {
            c || g()
        }

        function b() {
            c || h()
        }

        function y() {
            c = !0, g()
        }

        function w() {
            c = !1, h()
        }

        function v() {
            let {
                index: e
            } = n.internalEngine(), t = e.clone().add(1).get(), i = n.scrollSnapList().length - 1, o = a.stopOnLastSnap && t === i;
            if (n.canScrollNext() ? n.scrollNext(p) : n.scrollTo(0, p), n.emit("autoplay:select"), o) return g();
            h()
        }
        return {
            name: "autoplay",
            options: e,
            init: function(l, s) {
                var d, c, m, f;
                let v, C;
                n = l;
                let {
                    mergeOptions: k,
                    optionsAtMedia: $
                } = s, j = k(t, i.globalOptions);
                if (a = $(k(j, e)), n.scrollSnapList().length <= 1) return;
                p = a.jump, o = !1, d = n, c = a.delay, v = d.scrollSnapList(), r = "number" == typeof c ? v.map(() => c) : c(v, d);
                let {
                    eventStore: S,
                    ownerDocument: _
                } = n.internalEngine(), V = !!n.internalEngine().options.watchDrag, I = (m = n, f = a.rootNode, C = m.rootNode(), f && f(C) || C);
                S.add(_, "visibilitychange", u), V && n.on("pointerDown", x), V && !a.stopOnInteraction && n.on("pointerUp", b), a.stopOnMouseEnter && S.add(I, "mouseenter", y), a.stopOnMouseEnter && !a.stopOnInteraction && S.add(I, "mouseleave", w), a.stopOnFocusIn && n.on("slideFocusStart", g), a.stopOnFocusIn && !a.stopOnInteraction && S.add(n.containerNode(), "focusout", h), a.playOnInit && h()
            },
            destroy: function() {
                n.off("pointerDown", x).off("pointerUp", b).off("slideFocusStart", g), g(), o = !0, d = !1
            },
            play: function(e) {
                void 0 !== e && (p = e), h()
            },
            stop: function() {
                d && g()
            },
            reset: function() {
                d && h()
            },
            isPlaying: function() {
                return d
            },
            timeUntilNext: function() {
                return l ? r[n.selectedScrollSnap()] - (new Date().getTime() - l) : null
            }
        }
    }
    i.globalOptions = void 0, e.s(["default", () => i])
}, 72886, e => {
    "use strict";
    var t = e.i(91398);
    e.s(["InfoIcon", 0, e => (0, t.jsxs)("svg", {
        className: e.className,
        style: e.style,
        width: "15px",
        height: "14px",
        viewBox: "0 0 15 14",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        children: [(0, t.jsx)("title", {
            children: "Info"
        }), (0, t.jsx)("g", {
            id: "Responsive",
            stroke: "none",
            strokeWidth: "1",
            fill: "none",
            fillRule: "evenodd",
            children: (0, t.jsx)("g", {
                id: "icon-/-16-/-System-/-Infos",
                transform: "translate(0.500000, 0.000000)",
                fill: e.fill ? ? "#FFF",
                children: (0, t.jsx)("path", {
                    d: "M7,14 C10.866,14 14,10.866 14,7 C14,3.13401 10.866,0 7,0 C3.13401,0 0,3.13401 0,7 C0,10.866 3.13401,14 7,14 Z M8.00781,3.46875 C8.05469,3.35156 8.08203,3.22461 8.08984,3.08789 C8.09766,2.95117 8.08203,2.82227 8.04297,2.70117 C8.00391,2.58008 7.94531,2.47461 7.86719,2.38477 C7.79297,2.29492 7.70117,2.22461 7.5918,2.17383 C7.48242,2.12305 7.36328,2.09766 7.23438,2.09766 C7.11328,2.09766 6.99609,2.12305 6.88281,2.17383 C6.76953,2.22461 6.66797,2.29492 6.57812,2.38477 C6.49219,2.47461 6.41992,2.58008 6.36133,2.70117 C6.30664,2.82227 6.27539,2.95117 6.26758,3.08789 C6.25977,3.22461 6.27539,3.35156 6.31445,3.46875 C6.35742,3.58594 6.41797,3.68945 6.49609,3.7793 C6.57422,3.86914 6.66797,3.93945 6.77734,3.99023 C6.89062,4.04102 7.01562,4.06641 7.15234,4.06641 C7.28516,4.06641 7.4082,4.04102 7.52148,3.99023 C7.63477,3.93945 7.73242,3.86914 7.81445,3.7793 C7.89648,3.68945 7.96094,3.58594 8.00781,3.46875 Z M7.89062,7.00195 C7.91016,6.80273 7.91992,6.63867 7.91992,6.50977 C7.91992,6.29883 7.90039,6.10742 7.86133,5.93555 C7.82617,5.76367 7.76367,5.61719 7.67383,5.49609 C7.58789,5.375 7.47461,5.28125 7.33398,5.21484 C7.19336,5.14844 7.01953,5.11523 6.8125,5.11523 C6.54297,5.11523 6.30078,5.18164 6.08594,5.31445 C5.87109,5.44336 5.68555,5.60352 5.5293,5.79492 C5.37305,5.98633 5.24805,6.19141 5.1543,6.41016 C5.06055,6.625 4.99609,6.81836 4.96094,6.99023 L5.61133,7.18359 C5.71289,6.82422 5.8125,6.57617 5.91016,6.43945 C6.00781,6.29883 6.10156,6.22852 6.19141,6.22852 C6.23438,6.22852 6.27539,6.24805 6.31445,6.28711 C6.35352,6.32617 6.37305,6.41211 6.37305,6.54492 C6.37305,6.66992 6.36328,6.82227 6.34375,7.00195 C6.32422,7.17773 6.30078,7.36914 6.27344,7.57617 C6.24609,7.7832 6.21484,7.99805 6.17969,8.2207 C6.14453,8.43945 6.11328,8.6582 6.08594,8.87695 C6.05859,9.0918 6.03516,9.2988 6.01562,9.498 C5.99609,9.6973 5.98633,9.875 5.98633,10.0312 C5.98633,10.2422 6.00391,10.4316 6.03906,10.5996 C6.07812,10.7676 6.14062,10.9102 6.22656,11.0273 C6.31641,11.1445 6.43359,11.2324 6.57812,11.291 C6.72656,11.3535 6.91211,11.3848 7.13477,11.3848 C7.4043,11.3848 7.64453,11.3203 7.85547,11.1914 C8.06641,11.0586 8.24805,10.8965 8.40039,10.7051 C8.55273,10.5137 8.67383,10.3105 8.76367,10.0957 C8.85742,9.877 8.92188,9.6816 8.95703,9.5098 L8.30664,9.3164 C8.20508,9.6758 8.10547,9.9258 8.00781,10.0664 C7.91016,10.2031 7.81641,10.2715 7.72656,10.2715 C7.68359,10.2715 7.64258,10.252 7.60352,10.2129 C7.56445,10.1738 7.54492,10.0879 7.54492,9.9551 C7.54492,9.8652 7.55273,9.7363 7.56836,9.5684 C7.58789,9.4004 7.61133,9.2109 7.63867,9 C7.66992,8.78906 7.70117,8.56641 7.73242,8.33203 C7.76367,8.09375 7.79297,7.86133 7.82031,7.63477 C7.85156,7.4082 7.875,7.19727 7.89062,7.00195 Z",
                    id: "Shape"
                })
            })
        })]
    })])
}, 46210, e => {
    "use strict";
    var t = e.i(91398);
    e.s(["PlusTrans", 0, ({
        className: e,
        style: i,
        color: a = "black"
    }) => (0, t.jsxs)("svg", {
        className: e,
        style: i,
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [(0, t.jsx)("circle", {
            cx: "8",
            cy: "8",
            r: "7.5",
            transform: "rotate(180 8 8)",
            stroke: a
        }), (0, t.jsx)("path", {
            d: "M7.66981 11.1705C7.66978 11.3904 7.86281 11.5879 8.0917 11.5879C8.32286 11.5856 8.51586 11.3882 8.51586 11.1727L8.51586 8.51556L11.1686 8.51556C11.393 8.51552 11.586 8.32252 11.586 8.09363C11.5837 7.86247 11.393 7.67173 11.1686 7.67169H8.51586L8.51363 5.01676C8.5136 4.79236 8.32286 4.59709 8.0917 4.59935C7.86281 4.59935 7.66981 4.79236 7.66981 5.01679L7.66977 7.66947L5.01487 7.67173C4.79715 7.66947 4.59517 7.86247 4.59743 8.09363C4.59742 8.32252 4.79716 8.51777 5.01487 8.51552L7.66977 8.51778L7.66981 11.1705Z",
            fill: a
        })]
    })])
}, 83390, e => {
    "use strict";
    let t = {
        src: e.i(88492).default,
        width: 26,
        height: 27,
        blurWidth: 0,
        blurHeight: 0
    };
    e.s(["default", 0, t])
}, 15110, e => {
    "use strict";
    var t = e.i(60814);
    let i = t.default.button.attrs(() => ({
        "aria-label": ""
    })).withConfig({
        displayName: "PrimaryButton",
        componentId: "sc-ea6ada02-0"
    })
    `
  --border: none;
  border: var(--border);
  width: 100%;
  padding: 14px 20px;
  border-radius: 16px;
  background: #007ff5 !important;

  color: #fff !important;
  text-align: center;
  font-size: 15px;
  font-weight: 500;
  line-height: 16px; /* 106.667% */
  cursor: pointer;
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
    box-shadow: 0px 1px 4px 0px #6fbaff inset;
  }

  /* WEB ACCESSIBILITY MAINTENANCE : Added focus styles | Ensure focus is visible for keyboard navigation */
  &:focus {
    outline: 2px solid #ffffff;
    outline-offset: 2px;
  }

  &:focus:not(:focus-visible) {
    outline: none; /* WEB ACCESSIBILITY MAINTENANCE : Hide focus outline for mouse users while keeping it for keyboard users */
  }
`;
    e.s(["PrimaryButton", 0, i])
}, 3251, e => {
    "use strict";
    var t = e.i(91398),
        i = e.i(60814),
        a = e.i(91788);
    let n = (0, t.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "31",
            height: "31",
            viewBox: "0 0 31 31",
            fill: "none",
            children: [(0, t.jsx)("rect", {
                x: "0.640625",
                y: "0.373047",
                width: "30",
                height: "30",
                rx: "15",
                fill: "#F2F2F7"
            }), (0, t.jsx)("path", {
                d: "M10.688 18.5551C10.377 18.8661 10.3706 19.4184 10.6943 19.7421C11.0244 20.0658 11.5766 20.0595 11.8813 19.7548L15.6391 15.997L19.3906 19.7485C19.708 20.0658 20.2539 20.0658 20.5776 19.7421C20.9013 19.412 20.9013 18.8725 20.584 18.5551L16.8325 14.8036L20.584 11.0458C20.9013 10.7284 20.9077 10.1825 20.5776 9.85884C20.2539 9.53514 19.708 9.53514 19.3906 9.85254L15.6391 13.6039L11.8813 9.85254C11.5766 9.54144 11.018 9.52874 10.6943 9.85884C10.3706 10.1825 10.377 10.7411 10.688 11.0458L14.4394 14.8036L10.688 18.5551Z",
                fill: "#3C3C43",
                fillOpacity: "0.6"
            })]
        }),
        o = (0, a.createContext)({
            set: () => {},
            clear: () => {},
            show: () => {},
            hide: () => {},
            setCloseButtonTheme: () => {},
            setCloseBtnHidden: () => {}
        }),
        r = (0, i.default)(({
            className: e,
            children: i,
            hideModal: a
        }) => (0, t.jsx)("div", {
            className: e,
            "aria-hidden": "true",
            onClick: a,
            onScroll: e => e.stopPropagation(),
            children: (0, t.jsx)("div", {
                className: "modal-container",
                children: (0, t.jsx)("div", {
                    className: "modal",
                    onScroll: e => e.stopPropagation(),
                    children: (0, t.jsxs)(t.Fragment, {
                        children: [" ", i, (0, t.jsx)("div", {
                            className: "btn-container",
                            onClick: e => e.stopPropagation(),
                            "aria-hidden": "true",
                            children: (0, t.jsx)("button", {
                                className: "closeBtn",
                                onClick: a,
                                children: n
                            })
                        })]
                    })
                })
            })
        })).withConfig({
            displayName: "OffersModal__OffersModalNew",
            componentId: "sc-dd9f67cf-0"
        })
    `
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 10;
  left: 0;
  color: white;
  overflow: scroll;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  overscroll-behaviour: contain;
  background: rgba(0, 0, 0, 0.48);
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  z-index: 1001;

  &::-webkit-scrollbar {
    display: none;
  }

  & * {
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
      display: none; /* Safari and Chrome */
    }
  }

  animation: ${i.keyframes`
    from {opacity: 0;}
    to {opacity: 1;}
  `} 0.2s ease-in-out forwards;

  .modal-container {
    position: relative;
    width: 100vw;
    margin: 0 0 0 0;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 11;
    overscroll-behaviour: contain;

    .modal {
      display: flex;
      justify-content: center;
      position: relative;
      width: 100%;
      // height: 100vh;
      overflow: scroll;
      scroll-behavior: smooth;
      overscroll-behavior: contain;
      // background : red;

      & > div,
      .btn-container {
        // margin-top: 5vh;
        width: 90%;

        @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
          // margin-top: 10vh;
          width: 66rem;
        }

        @media (min-width: ${({theme:e})=>e.globalV2.xxxl.minWidth}) {
          // margin-top: 15vh;
        }
      }

      .btn-container {
        position: absolute;
        display: flex;
        justify-content: flex-end;
        z-index: 15;

        button {
          background: transparent;
          border: none;
          padding: 1rem 1.1rem;
          z-index: 15;

          @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
            padding: 1.34rem;
          }
        }
      }
    }
  }
`;
    e.s(["OffersModalNewContext", 0, o, "OffersModalNewProvider", 0, ({
        children: e
    }) => {
        let [i, n] = (0, a.useState)(!1), [l, s] = (0, a.useState)(null), [d, c] = (0, a.useState)(!1), [m, p] = (0, a.useState)(!1), h = () => {
            n(!1), c(!1), p(!1)
        };
        return (0, t.jsxs)(o.Provider, {
            value: {
                set: e => {
                    console.log("setting modal content !"), console.log(e), s(e)
                },
                clear: () => {
                    s(null), h()
                },
                show: () => {
                    n(!0)
                },
                hide: h,
                setCloseButtonTheme: e => {
                    "dark" != e && c(!0)
                },
                setCloseBtnHidden: p
            },
            children: [e, i && (0, t.jsx)(r, {
                lightCloseButton: d,
                hideModal: h,
                closeBtnHidden: m,
                children: l
            })]
        })
    }])
}, 81694, e => {
    "use strict";
    var t = e.i(91398),
        i = e.i(19231),
        a = e.i(19230),
        n = e.i(63635),
        o = e.i(60814);
    let r = o.default.h1.withConfig({
        displayName: "TitleBar__TitleH1",
        componentId: "sc-847d1e58-0"
    })
    `
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 16px;
  color: #000000;
  padding: 16px 0;
`, l = (0, o.default)(({
        className: e,
        title: n = "Ultrahuman Ring AIR",
        paddingForHeader: o = !1,
        showRegionSelector: l = !0
    }) => (0, t.jsx)("div", {
        className: `${e} ${o?"header-pad":""}`,
        children: (0, t.jsx)(i.Container, {
            children: (0, t.jsxs)("div", {
                className: "content",
                children: [(0, t.jsx)(r, {
                    className: "d-sm-none",
                    children: n
                }), (0, t.jsx)("div", {
                    className: "d-sm-none",
                    children: l ? (0, t.jsx)(a.RegionSelector, {}) : null
                })]
            })
        })
    })).withConfig({
        displayName: "TitleBar",
        componentId: "sc-847d1e58-1"
    })
    `
  color: black;
  background: rgba(255, 255, 255, 0.6);
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  display: none;

  &.header-pad {
    padding-top: ${(0,n.isMarketingBannerActive)()?"110px":"80px"};
  }

  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    display: block;
  }

  & .content {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h4 {
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 16px;
      color: #000000;
      letter-spacing: -0.8px;

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
    e.s(["TitleBar", 0, l])
}, 24911, e => {
    "use strict";
    var t = e.i(91398),
        i = e.i(40290),
        a = e.i(72886),
        n = e.i(46210),
        o = e.i(91788),
        r = e.i(14681),
        l = e.i(13691),
        s = e.i(60814),
        d = e.i(21666),
        c = e.i(3251);
    let m = (0, s.default)(({
        className: e,
        data: m,
        elementBgColor: p,
        leftAligned: h = !1,
        $isRarePage: g = !1
    }) => {
        if (m.length < 1) return null;
        let [u, f] = (0, r.default)({
            align: h ? "start" : "center",
            slidesToScroll: 1,
            skipSnaps: !1,
            loop: !0
        }, [(0, l.default)({
            delay: 4e3,
            stopOnInteraction: !1
        })]), x = s.default.div.withConfig({
            displayName: "OffersCarousel__OfferElementDiv",
            componentId: "sc-45674dc5-0"
        })
        `
      --element-color: ${e=>e.elementColor};
      --content-height: ${e=>e.contentHeight};
      padding: 2px;

      & .content {
        height: var(--content-height);
        position: relative;
        background: var(--element-color);
        border-radius: 12px;
        padding: 0 16px;
        justify-content: flex-start;

        display: flex;
        flex-direction: row;
        gap: 8px;
        align-items: center;

        .image-container {
          display: flex;
          flex-direction: row;

          img {
            width: 32px;
            height: auto;
          }

          &:not(.square) {
            img {
              width: 24px;
              height: 24px;
              object-fit: cover;
              border-radius: 50%;
              margin-left: -8px;
              border: 2px solid var(--element-color);

              &:first-child {
                margin-left: 0;
              }
            }
          }
        }

        p {
          margin: 0;
          font-size: 1.4rem;
          font-weight: normal;
          line-height: 100%;
          letter-spacing: -0.3px;

          b {
            font-weight: 500;
          }
        }

        svg {
          position: absolute;
          top: 50%;
          right: 16px;
          height: 14px;
          width: 14px;
          transform: translateY(-50%);
        }

        svg.plus {
          height: 16px;
          width: 16px;
          position: relative;
          top: unset;
          right: unset;
          transform: unset;
        }
      }
    `, b = (0, o.useContext)(c.OffersModalNewContext), y = p || "#f5f5f5", w = (0, o.useMemo)(() => Math.max(...m.map(e => {
            if ("number" == typeof e.contentHeight) return e.contentHeight;
            if ("string" == typeof e.contentHeight) {
                let t = parseInt(e.contentHeight.replace("px", ""));
                return isNaN(t) ? 56 : t
            }
            return 56
        })) + "px", [m]), v = (e, i, o) => (0, t.jsx)(x, {
            elementColor: i,
            contentHeight: w,
            onClick: e.onClick ? ? (e.modal ? () => (({
                modal: e
            }) => {
                b.set(e), b.show()
            })({
                modal: e.modal
            }) : void 0),
            style: {
                cursor: e.onClick ? "pointer" : void 0
            },
            children: (0, t.jsxs)("div", {
                className: "content",
                children: [e.image && e.image.length > 0 ? (0, t.jsx)("div", {
                    className: `image-container ${"square"===e.imageType?"square":""}`,
                    children: e.image.map((e, i) => (0, t.jsx)(d.CustomImage, {
                        src: e,
                        alt: "",
                        height: "24",
                        width: "24"
                    }, i))
                }) : null, (0, t.jsx)("p", {
                    children: e.title
                }), e.onClick ? (0, t.jsx)(a.InfoIcon, {
                    fill: "rgba(0,0,0,0.3)",
                    style: {
                        cursor: "pointer"
                    }
                }) : null, e.modal ? (0, t.jsx)(n.PlusTrans, {
                    className: "plus",
                    style: {
                        cursor: "pointer"
                    }
                }) : null]
            })
        }, o), C = (0, o.useCallback)(() => {
            f && f.scrollNext()
        }, [f]);
        return ((0, o.useEffect)(() => {
            if (f) {
                let e = f.plugins().autoplay;
                if (e) {
                    let t = () => e.stop(),
                        i = () => e.play();
                    return f.on("pointerDown", t), f.on("pointerUp", i), () => {
                        f.off("pointerDown", t), f.off("pointerUp", i)
                    }
                }
            }
        }, [f]), 1 === m.length) ? v(m[0], y, 0) : (0, t.jsxs)("div", {
            className: e,
            children: [(0, t.jsx)("div", {
                className: "embla",
                ref: u,
                children: (0, t.jsx)("div", {
                    className: "embla__container",
                    children: m.map((e, i) => (0, t.jsx)("div", {
                        className: "embla__slide",
                        children: v(e, y, i)
                    }, i))
                })
            }), (0, t.jsx)("button", {
                className: "next-btn",
                onClick: C,
                "aria-label": "Next",
                title: "Next",
                children: (0, t.jsx)(i.CaretUp, {
                    fill: "#ffffff",
                    style: {
                        transform: "rotate(90deg)",
                        width: "12px",
                        height: "auto"
                    }
                })
            })]
        })
    }).withConfig({
        displayName: "OffersCarousel",
        componentId: "sc-45674dc5-1"
    })
    `
  position: relative;
  max-width: 100%;

  .embla {
    overflow: hidden;
  }

  .embla__container {
    display: flex;
    ${({leftAligned:e})=>e?"margin-left: -40px;":""}
  }

  .embla__slide {
    flex: 0 0 100%;
    min-width: 0;
    ${({leftAligned:e})=>e?"padding-left: 40px;":""}
  }

  ${({leftAligned:e,$isRarePage:t})=>e?`
    overflow: hidden;
    position: relative;

    &
    ::after {
        content: '';
        padding: 1 px;
        position: absolute;
        top: 0;
        right: -1 px;
        height: 100 % ;
        width: 60 px;
        background: $ {
            t ? "linear-gradient(90deg, rgba(235, 227, 219, 0) 0%, #EBE3DB 100%)" : "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%)"
        };
    }
    `:""}

  .next-btn {
    display: none;
    position: absolute;
    top: 50%;
    right: 1px;
    transform: translateY(-50%);
    cursor: pointer;
    z-index: 1;
    border: none;
    -webkit-backdrop-filter: blur(24px);
    backdrop-filter: blur(24px);

    width: 22px;
    height: 22px;
    place-items: center;
    border-radius: 50%;
    background: rgba(175, 175, 175);
    transition: all 0.3s ease-in-out;

    @media (min-width: ${({theme:e})=>e.global.phone.maxWidth}) {
      display: grid;
    }

    &:hover {
      background: rgba(0, 0, 0, 0.5);
    }
  }
`;
    e.s(["OffersCarousel", 0, m])
}, 63742, e => {
    "use strict";
    var t = e.i(91398);
    e.s(["Plus", 0, e => (0, t.jsxs)("svg", {
        className: e.className,
        style: e.style,
        width: "10",
        height: "11",
        viewBox: "0 0 10 11",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [(0, t.jsx)("path", {
            d: "M5 1.62744V9.62744",
            stroke: e.fill ? ? "black",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }), (0, t.jsx)("path", {
            d: "M1 5.62744H9",
            stroke: e.fill ? ? "black",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })]
    })])
}, 2488, e => {
    "use strict";
    var t = e.i(91788),
        i = e.i(86236),
        a = e.i(62774);
    e.s(["default", 0, (e, n = 0, o, r) => {
        let [l, s] = (0, t.useState)(""), d = (0, t.useRef)("");
        return (0, i.useIsomorphicLayoutEffect)(() => {
            let t = () => {
                if (o ? .current) return;
                let t = window.pageYOffset,
                    i = e.map(e => {
                        let i = document.getElementById(e);
                        if (!i) return {
                            id: e,
                            top: -1,
                            bottom: -1
                        };
                        let a = i.getBoundingClientRect();
                        return {
                            id: e,
                            top: Math.max(0, a.top + t - n),
                            bottom: Math.max(0, a.bottom + t - n)
                        }
                    }).find(({
                        top: e,
                        bottom: i
                    }) => t >= e && t <= i);
                i && i.id && d.current !== i.id && (d.current = i.id, s(i.id))
            };
            r && (r.current = t), t();
            let i = (0, a.throttle)(t, 120),
                l = (0, a.debounce)(t, 200);
            return window.addEventListener("resize", l), window.addEventListener("scroll", i, {
                passive: !0
            }), () => {
                window.removeEventListener("resize", l), window.removeEventListener("scroll", i), r && (r.current = null)
            }
        }, [e, n, o, r]), l
    }])
}, 49245, e => {
    "use strict";
    e.i(50461);
    var t = e.i(91398),
        i = e.i(91788);
    let a = async e => {
        let {
            email: t,
            datetime: i,
            packageIds: a,
            pincode: n
        } = e, o = new URLSearchParams({
            email: t,
            datetime: i.toString(),
            package_ids: a.join(","),
            pincode: n
        }), r = `/api/blood-vision/india/slots_availability?${o}`, l = await fetch(r, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (!l.ok) throw Error(`HTTP error! status: ${l.status}`);
        let s = await l.json();
        if ("ok" !== s.status) throw Error(s.error || "Failed to fetch slots");
        return s
    };
    var n = e.i(10116),
        o = e.i(3828);
    let r = (0, i.createContext)(void 0),
        l = {
            firstName: "",
            lastName: "",
            gender: "male",
            dateOfBirth: "",
            email: "",
            phone: "",
            addressLine1: "",
            addressLine2: "",
            landmark: "",
            city: "",
            state: "",
            pincode: ""
        };
    e.s(["BloodVisionIndiaProvider", 0, ({
        children: e
    }) => {
        let s = (0, o.useRouter)(),
            [d, c] = (0, i.useState)([]),
            [m, p] = (0, i.useState)([]),
            [h, g] = (0, i.useState)(() => {
                try {
                    let e = localStorage.getItem("bloodVisionIndiaPincode");
                    if (e) return JSON.parse(e)
                } catch (e) {
                    console.error("Error loading pincode from localStorage:", e)
                }
                return null
            }),
            [u, f] = (0, i.useState)(!1),
            [x, b] = (0, i.useState)(null),
            [y, w] = (0, i.useState)(() => {
                try {
                    let e = localStorage.getItem("bloodVisionIndiaPincode");
                    if (e) {
                        let t = JSON.parse(e);
                        return t.pincode && "560001" !== t.pincode && !1 === t.is_default_pincode
                    }
                } catch (e) {
                    console.error("Error checking pincode from localStorage:", e)
                }
                return !1
            }),
            [v, C] = (0, i.useState)(() => {
                try {
                    let e = localStorage.getItem("bloodVisionIndiaCart");
                    if (e) {
                        let t = JSON.parse(e),
                            i = Object.entries(t).filter(([, e]) => e ? .plan ? .price_details ? .price !== void 0);
                        return new Map(i.map(([e, t]) => [Number(e), t]))
                    }
                } catch (e) {
                    console.error("Error loading cart from localStorage:", e), localStorage.removeItem("bloodVisionIndiaCart")
                }
                return new Map
            }),
            [k, $] = (0, i.useState)(!1),
            [j, S] = (0, i.useState)(!1),
            [_, V] = (0, i.useState)(!1),
            [I, N] = (0, i.useState)(() => {
                try {
                    let e = localStorage.getItem("bloodVisionIndiaCheckoutData");
                    if (e) return JSON.parse(e)
                } catch (e) {
                    console.error("Error loading checkout data from localStorage:", e)
                }
                return l
            }),
            [P, z] = (0, i.useState)(!1),
            [T, L] = (0, i.useState)(null),
            W = (0, i.useRef)(null),
            [A, M] = (0, i.useState)([]),
            [E, H] = (0, i.useState)(!1),
            [B, F] = (0, i.useState)(null),
            [O, R] = (0, i.useState)(""),
            U = v.size > 0,
            D = i.default.useMemo(() => {
                let e = 0;
                return v.forEach(t => {
                    t ? .plan ? .price_details ? .price && (e += t.plan.price_details.price * t.quantity)
                }), e
            }, [v]),
            q = i.default.useMemo(() => 0, [D]),
            Z = D - q,
            G = (0, i.useCallback)(async (e, t = !1) => {
                f(!0), b(null);
                try {
                    if (t && e) try {
                        let t = localStorage.getItem("bloodVisionIndiaPincode");
                        if (t) {
                            let i = JSON.parse(t);
                            i.pincode && i.pincode !== e && (console.log("[Cart] Pincode changed - clearing cart"), C(new Map), localStorage.removeItem("bloodVisionIndiaCart"))
                        }
                    } catch (e) {
                        console.error("Error checking existing pincode:", e)
                    }
                    let i = `/api/blood-vision/india/package_list?pincode=${e||"560001"}`,
                        a = await fetch(i, {
                            method: "GET",
                            headers: {
                                "Content-Type": "application/json"
                            }
                        });
                    if (!a.ok) throw Error(`HTTP error! status: ${a.status}`);
                    let n = await a.json();
                    if ("ok" === n.status && n.data) {
                        c(n.data.categories);
                        let e = n.data.categories.flatMap(e => e.plans);
                        p(e);
                        let i = {
                            pincode: n.data.pincode,
                            is_default_pincode: n.data.is_default_pincode,
                            pincode_serviceable: n.data.pincode_serviceable,
                            pincode_info: n.data.pincode_info
                        };
                        g(i), t && !n.data.pincode_serviceable && (console.log("Pincode not serviceable - showing modal"), V(!0));
                        try {
                            localStorage.setItem("bloodVisionIndiaPincode", JSON.stringify(i))
                        } catch (e) {
                            console.error("Error saving pincode to localStorage:", e)
                        }
                        w(t)
                    } else throw Error(n.error || "Invalid response format")
                } catch (e) {
                    console.error("Error loading India plans:", e), b("Failed to load plans. Please try again.")
                } finally {
                    f(!1)
                }
            }, []),
            J = (0, i.useCallback)(e => {
                C(t => {
                    let i = new Map(t),
                        a = i.get(e.id);
                    return a ? i.set(e.id, {
                        plan: e,
                        quantity: a.quantity + 1
                    }) : i.set(e.id, {
                        plan: e,
                        quantity: 1
                    }), i
                })
            }, []),
            Y = (0, i.useCallback)(e => {
                C(t => {
                    let i = new Map(t);
                    return i.delete(e), i
                })
            }, []),
            K = (0, i.useCallback)((e, t) => {
                t <= 0 ? Y(e) : C(i => {
                    let a = new Map(i),
                        n = a.get(e);
                    return n && a.set(e, { ...n,
                        quantity: t
                    }), a
                })
            }, [Y]),
            Q = (0, i.useCallback)(() => {
                C(new Map), localStorage.removeItem("bloodVisionIndiaCart")
            }, []),
            X = (0, i.useCallback)(e => v.has(e), [v]),
            ee = (0, i.useCallback)(e => {
                N(t => {
                    let i = { ...t,
                        ...e
                    };
                    try {
                        localStorage.setItem("bloodVisionIndiaCheckoutData", JSON.stringify(i))
                    } catch (e) {
                        console.error("Error saving checkout data to localStorage:", e)
                    }
                    return i
                })
            }, []),
            et = (0, i.useCallback)(() => {
                N(l), localStorage.removeItem("bloodVisionIndiaCheckoutData")
            }, []),
            ei = (0, i.useCallback)(async () => {
                let e = I.email || "ayushb147@gmail.com",
                    t = I.pincode,
                    i = Array.from(v.values()).flatMap(e => Array(e.quantity).fill(e.plan.id)),
                    n = `${t}_${i.join("_")}`;
                if (O === n && A.length > 0) return void console.log("Using cached slot data");
                if (0 === v.size) {
                    F("No items in cart"), H(!1);
                    return
                }
                if (!t) {
                    F("Pincode is required"), H(!1);
                    return
                }
                try {
                    H(!0), F(null);
                    let o = Math.floor(Date.now() / 1e3),
                        r = await a({
                            email: e,
                            datetime: o,
                            packageIds: i,
                            pincode: t
                        }),
                        l = (e => {
                            if (!e ? .data ? .dates_data ? .dates || !Array.isArray(e.data.dates_data.dates)) return [];
                            let t = new Date;
                            t.setHours(0, 0, 0, 0);
                            let i = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                                a = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
                            return e.data.dates_data.dates.filter(e => e && e.title && e.subtitle && e.time_slots_data ? .slots).map(e => {
                                try {
                                    let n = parseInt(String(e.title || "").trim(), 10),
                                        o = String(e.subtitle || "").trim();
                                    if (isNaN(n) || n < 1 || n > 31) return console.warn(`Invalid day number: ${e.title}, using fallback`), null;
                                    let r = i.findIndex(e => e.toLowerCase() === o.toLowerCase());
                                    if (-1 === r) return console.warn(`Invalid month name: ${o}, skipping date`), null;
                                    let l = t.getFullYear(),
                                        s = new Date(l, r, n, 12, 0, 0);
                                    if (isNaN(s.getTime())) return console.warn(`Invalid date created from ${n} ${o}, skipping`), null;
                                    s < t && t.getTime() - s.getTime() > 15552e6 && s.setFullYear(l + 1);
                                    let d = `${s.getFullYear()}-${String(s.getMonth()+1).padStart(2,"0")}-${String(s.getDate()).padStart(2,"0")}`,
                                        c = a[s.getDay()] || "Sun",
                                        m = `${s.getDate()} ${o}`,
                                        p = s.getDate().toString(),
                                        h = (e.time_slots_data ? .slots || []).filter(e => e && e.id).map(e => {
                                            try {
                                                let t, i = e.title.match(/^(\d{1,2}):(\d{2})\s*-\s*(\d{1,2}):(\d{2})\s*(AM|PM)$/i),
                                                    a = e.title.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)\s*-\s*(\d{1,2}):(\d{2})\s*(AM|PM)$/i),
                                                    n = e.title.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i),
                                                    o = "00:00",
                                                    r = String(e.title || "").trim() || "";
                                                if (a) {
                                                    let t = parseInt(a[1], 10),
                                                        i = a[2],
                                                        n = a[3].toUpperCase();
                                                    "PM" === n && 12 !== t ? t += 12 : "AM" === n && 12 === t && (t = 0), o = `${t.toString().padStart(2,"0")}:${i}`, r = e.title
                                                } else if (i) {
                                                    let t = parseInt(i[1], 10),
                                                        a = i[2],
                                                        n = i[5].toUpperCase();
                                                    "PM" === n && 12 !== t ? t += 12 : "AM" === n && 12 === t && (t = 0), o = `${t.toString().padStart(2,"0")}:${a}`, r = e.title
                                                } else if (n) {
                                                    let t = parseInt(n[1], 10),
                                                        i = n[2],
                                                        a = n[3].toUpperCase();
                                                    "PM" === a && 12 !== t ? t += 12 : "AM" === a && 12 === t && (t = 0), o = `${t.toString().padStart(2,"0")}:${i}`, r = e.title
                                                } else console.warn(`Could not parse time format: ${e.title}`);
                                                if ("number" != typeof e.epoch_slot || isNaN(e.epoch_slot)) {
                                                    if (e.timestamp) {
                                                        let i = parseInt(String(e.timestamp), 10);
                                                        isNaN(i) || (t = i)
                                                    }
                                                } else t = e.epoch_slot;
                                                return {
                                                    id: String(e.id || ""),
                                                    startTime: o,
                                                    endTime: o,
                                                    displayTime: r,
                                                    available: !!e.available,
                                                    charge: "number" == typeof e.charge ? e.charge : void 0,
                                                    metaText: String(e.meta_text || ""),
                                                    labId: "number" == typeof e.lab_id ? e.lab_id : void 0,
                                                    epochSlot: t
                                                }
                                            } catch (t) {
                                                return console.warn("Error parsing time slot:", t, e), null
                                            }
                                        }).filter(e => null !== e),
                                        g = h.length > 0 && h.some(e => e.available);
                                    return {
                                        date: d,
                                        dayName: c,
                                        displayDate: m,
                                        monthName: o,
                                        dayNumber: p,
                                        slots: h,
                                        available: g
                                    }
                                } catch (t) {
                                    return console.error("Error transforming date slot:", t, e), null
                                }
                            }).filter(e => null !== e)
                        })(r);
                    M(l), R(n), 0 === l.length && F("No slots available at this time. Please try again later.")
                } catch (e) {
                    console.error("Error loading slots:", e), F(e instanceof Error ? e.message : "Failed to load available slots. Please try again.")
                } finally {
                    H(!1)
                }
            }, [I.email, I.pincode, v, O, A.length]),
            ea = (0, i.useCallback)(async () => {
                if (0 === v.size) return void L("Cart is empty");
                z(!0), L(null);
                try {
                    let e = Array.from(v.values()).flatMap(e => Array(e.quantity).fill(e.plan.id)),
                        t = {
                            product_type: "blood_vision",
                            plan_ids: e,
                            country: "in",
                            user_details: I,
                            success_url: window.location.origin + "/blood-vision/order/?session_id={CHECKOUT_SESSION_ID}",
                            cancel_url: window.location.href,
                            metadata: { ...s.query
                            }
                        },
                        i = await fetch(`${n.API_BASE_URL}/api/v1/india/subscriptions`, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                Platform: "web"
                            },
                            body: JSON.stringify(t)
                        });
                    if (!i.ok) throw Error(`HTTP error! status: ${i.status}`);
                    let a = await i.json();
                    if ("ok" === a.status && a.data ? .checkout_url) window.location.href = a.data.checkout_url;
                    else throw Error("No checkout URL returned or invalid response format")
                } catch (e) {
                    console.error("Error submitting order:", e), L("Failed to process order. Please try again.")
                } finally {
                    z(!1)
                }
            }, [v, I, s.query]),
            en = (0, i.useCallback)(async (e, t) => {
                if (0 === v.size) return void L("Cart is empty");
                z(!0), L(null);
                try {
                    let i = A.find(t => t.date === e);
                    if (!i) throw Error("Selected date not found");
                    let a = i.slots.find(e => e.displayTime === t);
                    if (!a) throw Error("Selected time slot not found");
                    if (!a.epochSlot) throw Error("Invalid slot data: missing epoch timestamp");
                    if (!a.labId) throw Error("Invalid slot data: missing lab ID");
                    let n = Array.from(v.values()).flatMap(e => Array(e.quantity).fill(e.plan.id)),
                        o = I.phone.trim();
                    o = (o = (o = o.replace(/^\+91\s*/, "")).replace(/^91\s*/, "")).replace(/\D/g, "");
                    let r = {
                        email: I.email,
                        phone: o,
                        first_name: I.firstName,
                        last_name: I.lastName,
                        gender: I.gender,
                        date_of_birth: I.dateOfBirth,
                        address_line1: I.addressLine1,
                        address_line2: I.addressLine2,
                        landmark: I.landmark,
                        city: I.city,
                        state: I.state,
                        pincode: I.pincode,
                        package_ids: n.join(","),
                        slot_id: a.id,
                        slot_timestamp: a.epochSlot.toString(),
                        lab_id: a.labId
                    };
                    console.log("Initiating purchase with slot:", {
                        date: e,
                        time: t,
                        slotId: a.id,
                        labId: a.labId,
                        packageCount: n.length
                    });
                    let l = await fetch("/api/blood-vision/india/initiate_purchase", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(r)
                    });
                    if (!l.ok) throw Error(`HTTP error! status: ${l.status}`);
                    let s = await l.json();
                    if ("ok" === s.status && s.data ? .payment_link_url) console.log("Redirecting to payment link URL"), window.location.href = s.data.payment_link_url;
                    else throw Error(s.error || "No payment link URL returned")
                } catch (e) {
                    console.error("Error initiating purchase:", e), L(e instanceof Error ? e.message : "Failed to initiate purchase. Please try again."), z(!1)
                }
            }, [v, I, A]);
        (0, i.useEffect)(() => {
            s.isReady && !localStorage.getItem("bloodVisionIndiaPincode") && (h || v.size > 0 || y) && (console.log("[BloodVision] localStorage empty - resetting state"), g(null), C(new Map), w(!1), p([]), c([]))
        }, [s.isReady, s.pathname]), (0, i.useEffect)(() => {
            if (s.isReady && 0 === m.length && !u) {
                let e = h ? .pincode,
                    t = !!e && "560001" !== e && h ? .is_default_pincode === !1;
                G(e, t)
            }
        }, [s.isReady, h]), (0, i.useEffect)(() => {
            0 === v.size && ($(!1), S(!1))
        }, [v.size]), (0, i.useEffect)(() => (W.current && clearTimeout(W.current), W.current = setTimeout(() => {
            try {
                let e = Object.fromEntries(v);
                localStorage.setItem("bloodVisionIndiaCart", JSON.stringify(e))
            } catch (e) {
                console.error("Error saving cart to localStorage:", e)
            }
        }, 300), () => {
            W.current && clearTimeout(W.current)
        }), [v, D, Z]);
        let eo = (0, i.useMemo)(() => ({
            categories: d,
            availablePlans: m,
            pincodeInfo: h,
            isLoading: u,
            error: x,
            hasUserProvidedPincode: y,
            cartItems: v,
            addPlanToCart: J,
            removePlanFromCart: Y,
            updatePlanQuantity: K,
            clearCart: Q,
            isPlanInCart: X,
            subtotal: D,
            discount: q,
            total: Z,
            currencySymbol: "₹",
            showBottomBar: U,
            showUpsellModal: k,
            setShowUpsellModal: $,
            showCheckoutForm: j,
            setShowCheckoutForm: S,
            showNotServiceableModal: _,
            setShowNotServiceableModal: V,
            checkoutData: I,
            updateCheckoutData: ee,
            resetCheckoutData: et,
            slotData: A,
            isLoadingSlots: E,
            slotsError: B,
            fetchSlots: ei,
            fetchPlansIndia: G,
            submitOrder: ea,
            initiatePurchase: en,
            isProcessingPayment: P,
            paymentError: T
        }), [d, m, h, u, x, y, v, J, Y, K, Q, X, D, q, Z, U, k, $, j, S, _, V, I, ee, et, A, E, B, ei, G, ea, en, P, T]);
        return (0, t.jsx)(r.Provider, {
            value: eo,
            children: e
        })
    }, "useBloodVisionIndia", 0, () => {
        let e = (0, i.useContext)(r);
        if (void 0 === e) throw Error("useBloodVisionIndia must be used within a BloodVisionIndiaProvider");
        return e
    }], 49245)
}, 96691, e => {
    "use strict";
    var t = e.i(91398);
    e.s(["TickBlue", 0, ({
        className: e,
        style: i,
        fill: a = "#0279e8",
        width: n = 13,
        height: o = 10
    }) => (0, t.jsx)("svg", {
        width: n,
        height: o,
        viewBox: "0 0 13 10",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        className: e,
        style: i,
        children: (0, t.jsx)("g", {
            id: "Symbols",
            stroke: "none",
            strokeWidth: "1",
            fill: "none",
            fillRule: "evenodd",
            children: (0, t.jsx)("g", {
                id: "section-/-after-payment",
                transform: "translate(-314.000000, -852.000000)",
                stroke: a,
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
}, 9596, e => {
    "use strict";
    var t = e.i(91398);
    e.s(["InsightsIcon", 0, ({
        className: e,
        style: i,
        fill: a = "black",
        width: n = 14,
        height: o = 14
    }) => (0, t.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: n,
        height: o,
        viewBox: `0 0 ${n} ${o}`,
        fill: "none",
        className: e,
        style: i,
        children: [(0, t.jsx)("path", {
            d: "M6.70898 1.12891C7.09195 1.12894 7.46588 1.16765 7.82715 1.24121C7.54291 1.57736 7.32067 1.96751 7.17871 2.39453C7.0244 2.3779 6.8677 2.36916 6.70898 2.36914C4.31325 2.36932 2.37147 4.31135 2.37109 6.70703C2.37109 9.10303 4.31302 11.0457 6.70898 11.0459C7.88595 11.0458 8.95277 10.5765 9.73438 9.81543C9.74757 9.79925 9.76031 9.78168 9.77539 9.7666C9.78978 9.75224 9.8059 9.74019 9.82129 9.72754C10.5252 9.00214 10.9777 8.03218 11.0391 6.95703C11.4873 6.88779 11.9072 6.73403 12.2822 6.51172C12.2845 6.57657 12.2871 6.64164 12.2871 6.70703C12.2871 8.02196 11.8305 9.23004 11.0693 10.1836L13.3486 12.4629L13.4277 12.5605C13.5862 12.8009 13.5599 13.1281 13.3486 13.3398C13.137 13.5515 12.8099 13.5774 12.5693 13.4189L12.4717 13.3398L10.1934 11.0615C9.2386 11.8267 8.02766 12.285 6.70898 12.2852C3.62842 12.285 1.13086 9.78764 1.13086 6.70703C1.13123 3.62674 3.62865 1.12908 6.70898 1.12891Z",
            fill: a
        }), (0, t.jsx)("path", {
            d: "M13.4582 3.46655C11.7672 4.02501 11.2035 4.58869 10.6443 6.28048C10.5987 6.41953 10.4021 6.41953 10.3557 6.28048C9.79726 4.58942 9.23357 4.02578 7.54179 3.46655C7.40274 3.42095 7.40274 3.22433 7.54179 3.17798C9.23284 2.61952 9.79649 2.05584 10.3557 0.364055C10.4013 0.225003 10.5979 0.225003 10.6443 0.364055C11.2027 2.05511 11.7664 2.61875 13.4582 3.17798C13.5973 3.22358 13.5973 3.4202 13.4582 3.46655Z",
            fill: a
        })]
    })])
}, 44516, e => {
    "use strict";
    var t = e.i(91398);
    e.s(["MarkerIcon", 0, ({
        className: e,
        style: i,
        fill: a = "black",
        width: n = 16,
        height: o = 10
    }) => (0, t.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: n,
        height: o,
        viewBox: `0 0 ${n} ${o}`,
        fill: "none",
        className: e,
        style: i,
        children: (0, t.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: n,
            height: o,
            viewBox: `0 0 ${n} ${o}`,
            fill: "none",
            className: e,
            style: i,
            children: [(0, t.jsx)("g", {
                "clip-path": "url(#clip0_3900_3162)",
                children: (0, t.jsx)("path", {
                    d: "M1.33534 9.70923C1.17026 9.54415 1.08772 9.35367 1.08772 9.1378C1.08772 8.92192 1.17026 8.73145 1.33534 8.56637L5.94487 3.95685C6.02106 3.88065 6.1036 3.82656 6.19249 3.79456C6.28137 3.76307 6.37661 3.74732 6.4782 3.74732C6.57979 3.74732 6.67502 3.76307 6.76391 3.79456C6.8528 3.82656 6.93534 3.88065 7.01153 3.95685L9.52582 6.47113L14.402 0.985417C14.5417 0.820338 14.7228 0.737797 14.9452 0.737797C15.1672 0.737797 15.3544 0.813988 15.5068 0.966369C15.6465 1.10605 15.7196 1.27443 15.7262 1.47151C15.7323 1.66808 15.6655 1.84256 15.5258 1.99494L10.0592 8.14732C9.98296 8.23621 9.89737 8.30275 9.80239 8.34694C9.7069 8.39164 9.60836 8.41399 9.50677 8.41399C9.40518 8.41399 9.3069 8.39494 9.21191 8.35685C9.11642 8.31875 9.03058 8.26161 8.95439 8.18542L6.4782 5.70923L2.4782 9.70923C2.31312 9.8743 2.12264 9.95685 1.90677 9.95685C1.6909 9.95685 1.50042 9.8743 1.33534 9.70923Z",
                    fill: a
                })
            }), (0, t.jsx)("defs", {
                children: (0, t.jsx)("clipPath", {
                    id: "clip0_3900_3162",
                    children: (0, t.jsx)("rect", {
                        width: "16",
                        height: "9.90476",
                        fill: "white"
                    })
                })
            })]
        })
    })])
}, 30082, e => {
    "use strict";
    var t = e.i(91398);
    e.s(["TinyTimer", 0, ({
        className: e,
        style: i,
        fill: a = "black",
        width: n = 14,
        height: o = 14
    }) => (0, t.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: n,
        height: o,
        viewBox: `0 0 ${n} ${o}`,
        fill: "none",
        className: e,
        style: i,
        children: (0, t.jsx)("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M10.6111 12.25C10.802 12.25 10.9608 12.0952 10.9937 11.8911L11 11.8125V10.5C11 8.97557 10.2298 7.65338 9.10335 6.99908C10.2298 6.34662 11 5.02443 11 3.5V2.1875L10.9937 2.10886C10.9608 1.90477 10.802 1.75 10.6111 1.75C10.3963 1.75 10.2222 1.94588 10.2222 2.1875V2.40625H4.77778V2.1875L4.77151 2.10886C4.73858 1.90477 4.5798 1.75 4.38889 1.75C4.17411 1.75 4 1.94588 4 2.1875L4 3.5L4.00495 3.71076C4.04773 4.61983 4.36632 5.47109 4.90182 6.13817C5.56109 6.95945 6.49682 7.4375 7.5 7.4375C8.4245 7.4375 9.24143 7.95608 9.73346 8.74876L5.26591 8.74958C5.331 8.64472 5.40214 8.54408 5.47905 8.44828C5.623 8.26896 5.61048 7.9923 5.45108 7.83036C5.29168 7.66842 5.04577 7.6825 4.90182 7.86183C4.36632 8.52891 4.04773 9.38017 4.00495 10.2892L4 10.5V11.8125C4 12.0541 4.17411 12.25 4.38889 12.25C4.5798 12.25 4.73858 12.0952 4.77151 11.8911L4.77778 11.8125V11.5938H10.2222V11.8125C10.2222 12.0541 10.3963 12.25 10.6111 12.25ZM10.1095 4.37481L4.89047 4.37508C4.81646 4.0951 4.77778 3.80102 4.77778 3.5V3.28125H10.2222V3.5L10.2182 3.66802C10.2064 3.91233 10.1692 4.14902 10.1095 4.37481ZM7.5 6.5625C6.71919 6.5625 5.99237 6.19117 5.47905 5.55172C5.40193 5.45566 5.33061 5.35473 5.26537 5.24956L9.734 5.25036C9.24203 6.04353 8.42484 6.5625 7.5 6.5625ZM10.2222 10.7188H4.77778V10.5C4.77778 10.1987 4.81654 9.90429 4.8907 9.62405L10.1093 9.62431C10.1692 9.85036 10.2064 10.0874 10.2182 10.332L10.2222 10.5V10.7188Z",
            fill: a,
            stroke: "black",
            "stroke-width": "0.175"
        })
    })])
}, 73362, e => {
    "use strict";
    var t = e.i(91398);
    e.s(["HomeIcon", 0, ({
        className: e,
        style: i,
        fill: a = "black",
        width: n = 14,
        height: o = 14
    }) => (0, t.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: n,
        height: o,
        viewBox: `0 0 ${n} ${o}`,
        fill: "none",
        className: e,
        style: i,
        children: (0, t.jsx)("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M2.4683 9.52471H4.1907C4.21413 9.52471 4.23619 9.53286 4.25273 9.5479C4.26927 9.56295 4.27892 9.58364 4.27892 9.60496V13.2398C4.27892 13.2611 4.26927 13.2812 4.25273 13.2962C4.23619 13.3113 4.21413 13.3201 4.1907 13.3201H2.4683C2.42005 13.3201 2.38008 13.2843 2.38008 13.2398V9.60303C2.38008 9.55852 2.42005 9.52278 2.4683 9.52278V9.52471ZM8.69486 7.91978H10.4173C10.4407 7.91978 10.4634 7.92793 10.48 7.94297C10.4965 7.95802 10.5055 7.97871 10.5055 8.00002V13.2398C10.5055 13.2611 10.4965 13.2812 10.48 13.2962C10.4634 13.3113 10.4407 13.3201 10.4173 13.3201H8.69554C8.64661 13.3201 8.60732 13.2843 8.60732 13.2398V7.9981C8.60732 7.95359 8.64661 7.91785 8.69554 7.91785L8.69486 7.91978ZM5.5822 4.70991H7.3046C7.32803 4.70991 7.35077 4.71806 7.36732 4.73311C7.38386 4.74815 7.39282 4.76884 7.39282 4.79016V13.2398C7.39282 13.2611 7.38386 13.2812 7.36732 13.2962C7.35077 13.3113 7.32803 13.3201 7.3046 13.3201H5.58288C5.53395 13.3201 5.49466 13.2843 5.49466 13.2398V4.78823C5.49466 4.74372 5.53395 4.70798 5.58288 4.70798L5.5822 4.70991ZM0.308089 14.5H0.308778C0.138537 14.5 0 14.374 0 14.2191C0 14.0637 0.138537 13.9383 0.308778 13.9383H15.6912C15.8615 13.9383 16 14.0637 16 14.2191C16 14.374 15.8615 14.5 15.6912 14.5H0.308089ZM11.8088 1.50004H13.5318C13.5553 1.50004 13.5773 1.5082 13.5939 1.52324C13.6104 1.53829 13.6201 1.55898 13.6201 1.58029V13.2398C13.6201 13.2611 13.6104 13.2812 13.5939 13.2962C13.5773 13.3113 13.5553 13.3201 13.5318 13.3201H11.8094C11.7605 13.3201 11.7212 13.2843 11.7212 13.2398V1.57837C11.7219 1.53448 11.7612 1.5 11.8094 1.5L11.8088 1.50004Z",
            fill: a
        })
    })])
}, 604, e => {
    "use strict";
    var t = e.i(91398);
    let i = [{
        title: "What is Blood Vision?",
        description: (0, t.jsxs)(t.Fragment, {
            children: ["Blood Vision, powered by UltraTrace™ technology, allows seamless correlation to the changes in your sleep, resting HR, HRV, and movement trends with pertinent markers in the blood. Decades of meticulous research underpin this categorisation.", (0, t.jsx)("br", {}), (0, t.jsx)("br", {}), " For instance, UltraTrace™ can ascertain how a specific improvement in sleep quality might influence a marker like LDL, providing users with a probability score. This intuitive understanding empowers individuals to grasp the intricate connections between lifestyle habits and their direct impact on blood markers."]
        })
    }, {
        title: "What do I need to know before booking a Blood Vision test?",
        description: (0, t.jsxs)(t.Fragment, {
            children: ["You can book your Blood Vision Test via the Ultrahuman app. All available test packages are visible in the app's Vision Tab. You can select a slot for the appointment and enter patient details accordingly.", (0, t.jsx)("br", {}), (0, t.jsx)("br", {}), " Sample collection is available through two convenient options: walk-in appointments at nearby partner labs or at-home collection for added convenience. You can choose your preferred collection method during the booking process.", (0, t.jsx)("br", {}), (0, t.jsx)("br", {}), " Post-collection, partial reports will start to show the same day. Final reports will show in the app and be shared over email once ready."]
        })
    }, {
        title: "Is my location serviceable?",
        description: (0, t.jsx)(t.Fragment, {
            children: "Blood Vision is available in most states, but there are some state-specific restrictions. Customers from NY/NJ who manage to sign up will be informed about special procedures or extra lab fees (NY and NJ laws require the lab to charge an additional fee at the time of the draw). We advise users in those states to contact support for clarification. All other states (except RI) are fully supported."
        })
    }, {
        title: "What are the different tests available?",
        description: (0, t.jsx)(t.Fragment, {
            children: "Blood Vision offers a comprehensive set of over 120 biomarkers through our annual plan. These include tests across key categories such as metabolic health, hormonal balance, inflammation, cardiovascular risk, vitamin and mineral levels, thyroid function, and more. The specific panels are curated based on biological sex and health goals, and you can also choose additional specialized add-ons during onboarding."
        })
    }, {
        title: "Can I see a sample report for my test?",
        description: (0, t.jsxs)(t.Fragment, {
            children: ["Yes! Just open the Ultrahuman app ", ">", " Vision tab ", ">", ' Toggle on "Visualise Sample Report"']
        })
    }, {
        title: "How long do the reports take?",
        description: (0, t.jsx)(t.Fragment, {
            children: "Once the samples are collected, partial reports start showing up within 6 hours. Depending on the extent of your test, final reports can take up to 21 days, although they may sometimes be available sooner."
        })
    }, {
        title: "Can I reschedule my appointment?",
        description: (0, t.jsxs)(t.Fragment, {
            children: ["Yes! Just head to the Ultrahuman app ", ">", " Profile ", ">", " Blood Vision", " ", ">", " Test ", ">", " Reschedule."]
        })
    }, {
        title: "Will the tests be refunded by my insurance providers?",
        description: (0, t.jsx)(t.Fragment, {
            children: "You will need to check with your insurance provider for this. Blood Vision is a direct-pay service and does not bill your insurance provider. However, you can pay using HSA/FSA cards since our tests qualify as preventive health expenses. While we don't provide CPT codes or diagnosis details needed for insurance reimbursement, you can try submitting our itemized receipt to your insurer for potential out-of-network reimbursement. Just keep in mind that coverage is not guaranteed."
        })
    }];
    e.s(["BloodVisionFaqs", 0, i])
}, 11829, (e, t, i) => {
    "use strict";

    function a(e, t) {
        var i = e.length;
        for (e.push(t); 0 < i;) {
            var a = i - 1 >>> 1,
                n = e[a];
            if (0 < r(n, t)) e[a] = t, e[i] = n, i = a;
            else break
        }
    }

    function n(e) {
        return 0 === e.length ? null : e[0]
    }

    function o(e) {
        if (0 === e.length) return null;
        var t = e[0],
            i = e.pop();
        if (i !== t) {
            e[0] = i;
            for (var a = 0, n = e.length, o = n >>> 1; a < o;) {
                var l = 2 * (a + 1) - 1,
                    s = e[l],
                    d = l + 1,
                    c = e[d];
                if (0 > r(s, i)) d < n && 0 > r(c, s) ? (e[a] = c, e[d] = i, a = d) : (e[a] = s, e[l] = i, a = l);
                else if (d < n && 0 > r(c, i)) e[a] = c, e[d] = i, a = d;
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
    var m = [],
        p = [],
        h = 1,
        g = null,
        u = 3,
        f = !1,
        x = !1,
        b = !1,
        y = !1,
        w = "function" == typeof setTimeout ? setTimeout : null,
        v = "function" == typeof clearTimeout ? clearTimeout : null,
        C = "u" > typeof setImmediate ? setImmediate : null;

    function k(e) {
        for (var t = n(p); null !== t;) {
            if (null === t.callback) o(p);
            else if (t.startTime <= e) o(p), t.sortIndex = t.expirationTime, a(m, t);
            else break;
            t = n(p)
        }
    }

    function $(e) {
        if (b = !1, k(e), !x)
            if (null !== n(m)) x = !0, j || (j = !0, l());
            else {
                var t = n(p);
                null !== t && T($, t.startTime - e)
            }
    }
    var j = !1,
        S = -1,
        _ = 5,
        V = -1;

    function I() {
        return !!y || !(i.unstable_now() - V < _)
    }

    function N() {
        if (y = !1, j) {
            var e = i.unstable_now();
            V = e;
            var t = !0;
            try {
                e: {
                    x = !1,
                    b && (b = !1, v(S), S = -1),
                    f = !0;
                    var a = u;
                    try {
                        t: {
                            for (k(e), g = n(m); null !== g && !(g.expirationTime > e && I());) {
                                var r = g.callback;
                                if ("function" == typeof r) {
                                    g.callback = null, u = g.priorityLevel;
                                    var s = r(g.expirationTime <= e);
                                    if (e = i.unstable_now(), "function" == typeof s) {
                                        g.callback = s, k(e), t = !0;
                                        break t
                                    }
                                    g === n(m) && o(m), k(e)
                                } else o(m);
                                g = n(m)
                            }
                            if (null !== g) t = !0;
                            else {
                                var d = n(p);
                                null !== d && T($, d.startTime - e), t = !1
                            }
                        }
                        break e
                    }
                    finally {
                        g = null, u = a, f = !1
                    }
                }
            }
            finally {
                t ? l() : j = !1
            }
        }
    }
    if ("function" == typeof C) l = function() {
        C(N)
    };
    else if ("u" > typeof MessageChannel) {
        var P = new MessageChannel,
            z = P.port2;
        P.port1.onmessage = N, l = function() {
            z.postMessage(null)
        }
    } else l = function() {
        w(N, 0)
    };

    function T(e, t) {
        S = w(function() {
            e(i.unstable_now())
        }, t)
    }
    i.unstable_IdlePriority = 5, i.unstable_ImmediatePriority = 1, i.unstable_LowPriority = 4, i.unstable_NormalPriority = 3, i.unstable_Profiling = null, i.unstable_UserBlockingPriority = 2, i.unstable_cancelCallback = function(e) {
        e.callback = null
    }, i.unstable_forceFrameRate = function(e) {
        0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : _ = 0 < e ? Math.floor(1e3 / e) : 5
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
        y = !0
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
        }, o > r ? (e.sortIndex = o, a(p, e), null === n(m) && e === n(p) && (b ? (v(S), S = -1) : b = !0, T($, o - r))) : (e.sortIndex = s, a(m, e), x || f || (x = !0, j || (j = !0, l()))), e
    }, i.unstable_shouldYield = I, i.unstable_wrapCallback = function(e) {
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
}, 68354, e => {
    "use strict";
    var t = e.i(60814);
    let i = t.css `
  padding: 4.8rem 0;
  @media (min-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
    padding: 10rem 0;
  }
`,
        a = t.default.h2.withConfig({
            displayName: "StyleConstants__H2",
            componentId: "sc-e7bb01ff-0"
        })
    `
  color: #000;
  font-size: 3.2rem;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 48px */
  letter-spacing: -1.6px;

  @media (min-width: ${({theme:e})=>e.globalV2.sm.maxWidth}) {
    font-size: 4rem;
  }
`, n = t.default.p.withConfig({
        displayName: "StyleConstants__P",
        componentId: "sc-e7bb01ff-1"
    })
    `
  color: rgba(0, 0, 0, 0.6);
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 22.4px */
  letter-spacing: -0.16px;
`;
    e.s(["H2", 0, a, "P", 0, n, "SectionPadding", 0, i])
}, 18390, e => {
    "use strict";
    var t = e.i(91398),
        i = e.i(60814),
        a = e.i(58021),
        n = e.i(91788),
        o = e.i(3115),
        r = e.i(10116);
    let l = async e => {
        try {
            let t = await fetch(`${r.API_BASE_URL}/api/web_v1/blood_vision_free_request`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(e)
                }),
                i = await t.json();
            if (!t.ok) return {
                status: "error",
                error: i.error || {
                    message: "Something went wrong",
                    code: t.status
                }
            };
            return i
        } catch (e) {
            return {
                status: "error",
                error: {
                    message: "Network error. Please try again.",
                    code: 500
                }
            }
        }
    };
    var s = e.i(3828),
        d = e.i(38927);
    let c = i.default.div.withConfig({
        displayName: "CampaignForm__Wrapper",
        componentId: "sc-e0685266-0"
    })
    `
  padding: ${({$isModal:e})=>e?"24px":"0"};
  background: ${({$isModal:e})=>e?"#fff":"transparent"};

  @media (min-width: ${({theme:e})=>e.globalV2.md.minWidth}) {
    padding: ${({$isModal:e})=>e?"40px":"0"};
  }
`, m = i.default.div.withConfig({
        displayName: "CampaignForm__TextContainer",
        componentId: "sc-e0685266-1"
    })
    `
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 16px;

  h2 {
    color: #000;
    font-size: 24px;
    font-weight: 500;
    line-height: 140%;
    letter-spacing: -0.48px;
    margin: 0;

    @media (min-width: ${({theme:e})=>e.globalV2.md.minWidth}) {
      font-size: 28px;
      letter-spacing: -0.56px;
    }
  }

  p {
    color: rgba(0, 0, 0, 0.6);
    font-size: 15px;
    font-weight: 400;
    line-height: 140%;
    letter-spacing: -0.3px;
    margin: 0;

    @media (min-width: ${({theme:e})=>e.globalV2.md.minWidth}) {
      font-size: 16px;
      letter-spacing: -0.32px;
    }
  }
`, p = i.default.form.withConfig({
        displayName: "CampaignForm__FormContainer",
        componentId: "sc-e0685266-2"
    })
    `
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 8px;
`, h = i.default.select.withConfig({
        displayName: "CampaignForm__Select",
        componentId: "sc-e0685266-3"
    })
    `
  width: 100%;
  padding: 16px;
  font-size: 16px;
  font-weight: 400;
  line-height: 140%;
  color: ${({disabled:e})=>e?"rgba(0, 0, 0, 0.5)":"#000"};
  background: ${({disabled:e})=>e?"#f5f5f5":"#fff"};
  border: 2px solid ${({hasError:e})=>e?"#ff0000":"transparent"};
  border-radius: 12px;
  outline: none;
  appearance: none;
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  background-image: ${({disabled:e})=>e?"none":"url(\"data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L6 6L11 1' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\")"};
  background-repeat: no-repeat;
  background-position: right 16px center;
  padding-right: 48px;

  &:focus {
    border-color: ${({hasError:e,disabled:t})=>t?"transparent":e?"#ff0000":"#007AFF"};
  }

  option {
    color: #000;
  }
`, g = i.default.input.withConfig({
        displayName: "CampaignForm__Input",
        componentId: "sc-e0685266-4"
    })
    `
  width: 100%;
  padding: 16px;
  font-size: 16px;
  font-weight: 400;
  line-height: 140%;
  color: ${({disabled:e})=>e?"rgba(0, 0, 0, 0.5)":"#000"};
  background: ${({disabled:e})=>e?"#f5f5f5":"#fff"};
  border: 2px solid
    ${({hasError:e})=>e?"#ff0000":"rgba(0,0,0,0.03)"};
  border-radius: 12px;
  outline: none;
  cursor: ${({disabled:e})=>e?"not-allowed":"text"};

  &::placeholder {
    color: rgba(0, 0, 0, 0.5);
  }

  &:focus {
    border-color: ${({hasError:e,disabled:t})=>t?"transparent":e?"#ff0000":"#007AFF"};
  }
`, u = i.default.button.withConfig({
        displayName: "CampaignForm__SubmitButton",
        componentId: "sc-e0685266-5"
    })
    `
  width: 100%;
  padding: 16px;
  font-size: 16px;
  font-weight: 500;
  line-height: 140%;
  color: ${({isSuccess:e})=>e?"#000000":"#ffffff"};
  background: ${({isSuccess:e,disabled:t})=>e||t?"#CCCCCC":"#007AFF"};
  border: none;
  border-radius: 16px;
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  transition: opacity 0.2s ease;

  &:hover {
    opacity: ${({disabled:e})=>e?1:.9};
  }

  &:active {
    opacity: ${({disabled:e})=>e?1:.8};
  }
`, f = i.default.div.withConfig({
        displayName: "CampaignForm__MessageContainer",
        componentId: "sc-e0685266-6"
    })
    `
  font-size: 14px;
  font-weight: 400;
  line-height: 140%;
  text-align: center;
  color: ${({isError:e,isSuccess:t})=>e?"#FF0000":t?"#34C759":"#000"};
  max-height: ${({isError:e,isSuccess:t})=>e||t?"100px":"0"};
  opacity: ${({isError:e,isSuccess:t})=>e||t?"1":"0"};
  overflow: hidden;
  transition: max-height 0.3s ease, opacity 0.3s ease;
`, x = i.default.p.withConfig({
        displayName: "CampaignForm__Disclaimer",
        componentId: "sc-e0685266-7"
    })
    `
  text-align: center;
  font-style: italic;
`;
    e.s(["CampaignForm", 0, ({
        title: e,
        description: i,
        preSelectedCountry: r,
        disableCountrySelect: b = !1,
        isModal: y = !1,
        preFilledPincode: w,
        preSelectedPlanId: v,
        ctaText: C,
        ctaSuccessText: k,
        onCountryChange: $,
        sourceURL: j
    }) => {
        let {
            region: S
        } = (0, n.useContext)(o.RegionLocaleContext), _ = (0, s.useRouter)(), {
            register: V,
            handleSubmit: I,
            formState: {
                errors: N
            },
            setValue: P,
            watch: z
        } = (0, a.useForm)(), [T, L] = (0, n.useState)(!1), [W, A] = (0, n.useState)(!1), [M, E] = (0, n.useState)(null), H = z("country"), B = z("email"), F = z("pincode");
        (0, n.useEffect)(() => {
            let e = r || S;
            e && P("country", ["IN", "AE", "US"].includes(e) ? e : "US")
        }, [S, P, r]), (0, n.useEffect)(() => {
            H && $ && $(H)
        }, [H, $]), (0, n.useEffect)(() => {
            w && P("pincode", w)
        }, [w, P]);
        let O = async e => {
            L(!0), E(null);
            let {
                affiliateCode: t,
                ...i
            } = _.query, a = Object.keys(i).filter(e => e.startsWith("utm_")).reduce((e, t) => (e[t] = i[t], e), {}), n = await l({
                email: e.email,
                country: e.country,
                source_url: j,
                pincode: e.pincode,
                plan_id: v,
                affiliate_code: t,
                utm_params: Object.keys(a).length > 0 ? a : void 0
            });
            if ("ok" === n.status && n.data) {
                let e = n.data.campaign_status;
                "live" === e ? _.push(`/order/blood-vision/blood-on-us/?country=${H}`) : "waitlist" === e ? A(!0) : E("Sorry, the campaign has expired")
            } else E(n.error ? .message || "Something went wrong. Please try again.");
            L(!1)
        };
        return (0, t.jsxs)(c, {
            $isModal: y,
            children: [(0, t.jsxs)(m, {
                children: [(0, t.jsx)("h2", {
                    children: e
                }), (0, t.jsx)("p", {
                    children: i
                })]
            }), (0, t.jsxs)(p, {
                onSubmit: I(O),
                children: [(0, t.jsxs)(h, { ...V("country", {
                        required: "Country is required"
                    }),
                    hasError: !!N.country,
                    disabled: b,
                    defaultValue: "",
                    children: [(0, t.jsx)("option", {
                        value: "",
                        disabled: !0,
                        children: "Select Country"
                    }), (0, t.jsx)("option", {
                        value: "IN",
                        children: "India"
                    }), (0, t.jsx)("option", {
                        value: "AE",
                        children: "United Arab Emirates"
                    }), (0, t.jsx)("option", {
                        value: "US",
                        children: "United States"
                    })]
                }), (0, t.jsx)(g, { ...V("email", {
                        required: "Email is required",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address"
                        }
                    }),
                    type: "email",
                    placeholder: "Email address",
                    hasError: !!N.email
                }), "US" === H && (0, t.jsx)(g, { ...V("pincode", {
                        required: "US" === H && "Zip code is required",
                        pattern: {
                            value: /^\d{5}(-\d{4})?$/,
                            message: "Please enter a valid US zip code (12345 or 12345-6789)"
                        },
                        validate: {
                            validFormat: e => {
                                if (!e && "US" !== H) return !0;
                                if (!e) return "Zip code is required";
                                let t = e.replace(/\s/g, "");
                                if (!/^\d{5}(-\d{4})?$/.test(t)) {
                                    if (t.length < 5) return "Zip code must be at least 5 digits";
                                    if (!/^\d+(-\d+)?$/.test(t)) return "Zip code must contain only numbers";
                                    if (t.includes("-")) {
                                        let e = t.split("-");
                                        if (5 !== e[0].length) return "First part must be exactly 5 digits";
                                        if (e[1] && 4 !== e[1].length) return "Extension must be exactly 4 digits (12345-6789)"
                                    } else if (t.length > 5 && 9 !== t.length) return "Use format 12345 or 12345-6789";
                                    return "Invalid zip code format"
                                }
                                return "00000" !== t.substring(0, 5) || "Please enter a valid zip code"
                            }
                        },
                        minLength: {
                            value: 5,
                            message: "Zip code must be at least 5 digits"
                        },
                        maxLength: {
                            value: 10,
                            message: "Zip code is too long"
                        }
                    }),
                    type: "text",
                    placeholder: "Zip code (e.g., 90210)",
                    hasError: !!N.pincode,
                    disabled: !!w,
                    maxLength: 10,
                    onInput: e => {
                        let t = e.target;
                        t.value = t.value.replace(/[^\d-]/g, ""), t.value = t.value.replace(/-+/g, "-"), t.value.startsWith("-") && (t.value = t.value.substring(1))
                    }
                }), (0, t.jsx)(u, {
                    type: "submit",
                    disabled: T || W || !H || !B || "US" === H && !F || !!N.country || !!N.email || !!N.pincode,
                    isSuccess: W,
                    children: W ? (0, t.jsxs)(t.Fragment, {
                        children: [(0, t.jsx)(d.Checkmark, {
                            fill: "#000000",
                            style: {
                                marginRight: "4px"
                            }
                        }), " ", k]
                    }) : C
                }), (0, t.jsx)(f, {
                    isError: !!(N.country || N.email || N.pincode || M),
                    children: N.country ? .message || N.email ? .message || N.pincode ? .message || M
                }), (0, t.jsx)(x, {
                    children: "Priority access is given on a first-come basis."
                })]
            })]
        })
    }], 18390)
}, 3595, e => {
    "use strict";
    var t = e.i(91398),
        i = e.i(49245);
    e.s(["default", 0, ({
        children: e
    }) => (0, t.jsx)(i.BloodVisionIndiaProvider, {
        children: e
    })])
}, 4654, e => {
    "use strict";
    var t = e.i(53147),
        i = e.i(60814);
    i.css `
  padding: 9.6rem 0;
  @media (min-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
    padding: 15rem 0;
  }
`;
    let a = i.css `
  text-align: center;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 600;
  letter-spacing: 5.76px;
  text-transform: uppercase;
`,
        n = i.css `
  position: relative;
  background: #000000;
  color: #ffffff;
  padding: 11px 20px 9px 20px;
  line-height: 1.6rem;
  font-size: 1.5rem;
  border-radius: 40px;
  letter-spacing: -0.3px;
  border: none;
  font-weight: 500;
  width: 100%;

  &.light {
    background: rgb(216, 216, 216);
    color: #000000;
  }
`,
        o = (0, i.default)(t.default).withConfig({
            displayName: "styleConstants__PrimaryLink",
            componentId: "sc-faececf1-0"
        })
    `
  ${n}
`, r = (0, i.default)("button").withConfig({
        displayName: "styleConstants__PrimaryButton",
        componentId: "sc-faececf1-1"
    })
    `
  ${n}
`;
    i.css `
  text-align: center;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 67.2px */
  letter-spacing: -2.24px;
  max-width: 24ch;

  @media (min-width: ${({theme:e})=>e.globalV2.lg.minWidth}) {
    font-size: 56px;
  }
`, e.s(["CaptionTextCss", 0, a, "PrimaryButton", 0, r, "PrimaryLink", 0, o])
}, 9158, e => {
    "use strict";
    var t = e.i(91398),
        i = e.i(60814),
        a = e.i(21666);
    let n = [{
            title: "Mark your eligibility",
            description: `On the pricing page, select “Yes” if you're using an HSA/FSA card.`,
            image: "1.png"
        }, {
            title: `Click on “Proceed to pay”`,
            description: "This will take you to the payment screen.",
            image: "2.png"
        }, {
            title: "Pay using your HSA/FSA card",
            description: "Enter your HSA or FSA card details to complete the purchase.",
            image: "3-1.png"
        }],
        o = (0, i.default)(({
            className: e
        }) => (0, t.jsxs)("div", {
            className: e,
            children: [(0, t.jsx)("h3", {
                children: "Use your FSA/HSA to save on your Blood Vision subscription"
            }), (0, t.jsx)("p", {
                className: "description",
                children: "Save more with your pre-tax dollars. The blood vision subscription is now HSA/FSA eligible."
            }), (0, t.jsx)("div", {
                className: "img-container",
                children: (0, t.jsx)(a.CustomImage, {
                    src: "web_v2/blood-vision/modal/Cover_hsa_fsa.png",
                    fill: !0,
                    alt: "trade-in"
                })
            }), (0, t.jsxs)("div", {
                className: "content",
                children: [(0, t.jsx)("p", {
                    className: "directions",
                    children: "How it works"
                }), (0, t.jsx)("br", {}), (0, t.jsx)("br", {}), n.map((e, i) => (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsxs)("h4", {
                        children: [(0, t.jsxs)("span", {
                            className: "caption",
                            children: ["STEP ", i + 1]
                        }), n[i].title]
                    }), (0, t.jsx)("p", {
                        children: n[i].description
                    }), (0, t.jsx)("div", {
                        className: "img-container",
                        children: (0, t.jsx)(a.CustomImage, {
                            src: `web_v2/blood-vision/modal/Step${i+1}.png`,
                            fill: !0,
                            alt: "blood-vision"
                        })
                    }), (0, t.jsx)("br", {})]
                })), (0, t.jsx)("br", {}), (0, t.jsx)("br", {}), (0, t.jsx)("br", {}), (0, t.jsxs)("p", {
                    children: ["Need help? Reach out anytime at", " ", (0, t.jsx)("a", {
                        href: "mailto:support@ultrahuman.com",
                        children: "support@ultrahuman.com"
                    }), " — we've got your back."]
                }), (0, t.jsx)("br", {}), (0, t.jsx)("br", {})]
            })]
        })).withConfig({
            displayName: "HsaFsaOffer",
            componentId: "sc-4f9c5054-0"
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
`;
    e.s(["HsaFsaOffer", 0, o])
}, 6261, 41595, e => {
    "use strict";
    var t = e.i(60814);
    let i = t.css `
  color: #ffffff;
  // background: linear-gradient(98.35deg, #ffffff 1.84%, #757575 228.23%);
  background: linear-gradient(96deg, #939393 8.75%, #fff 75.11%);

  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`,
        a = t.default.h1.withConfig({
            displayName: "styleConstants__H1",
            componentId: "sc-990f9c9d-0"
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
    font-size: 11rem;
  }
`;
    t.default.h1.withConfig({
        displayName: "styleConstants__H1_OPT",
        componentId: "sc-990f9c9d-1"
    })
    `
  font-size: 44px;
  font-weight: ${({theme:e})=>e.typographyV2.fontWeight.semibold};
  line-height: 120%;
  letter-spacing: -1px;
`, t.default.h2.withConfig({
        displayName: "styleConstants__H2",
        componentId: "sc-990f9c9d-2"
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
    let n = t.default.h2.withConfig({
        displayName: "styleConstants__H2Large",
        componentId: "sc-990f9c9d-3"
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
`;
    t.default.p.withConfig({
        displayName: "styleConstants__PLargeGradient",
        componentId: "sc-990f9c9d-4"
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
`, t.default.h2.withConfig({
        displayName: "styleConstants__H2_OPT",
        componentId: "sc-990f9c9d-5"
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
`, t.default.h2.withConfig({
        displayName: "styleConstants__H2Small",
        componentId: "sc-990f9c9d-6"
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
        componentId: "sc-990f9c9d-7"
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
        componentId: "sc-990f9c9d-8"
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
        componentId: "sc-990f9c9d-9"
    })
    `
  font-size: 1.8rem;
  line-height: 140%;
`;
    let o = t.default.p.withConfig({
        displayName: "styleConstants__P",
        componentId: "sc-990f9c9d-10"
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
        componentId: "sc-990f9c9d-11"
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
        componentId: "sc-990f9c9d-12"
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
`,
        l = t.css `
  padding: 5.2rem 0;
  @media (min-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
    padding: 10rem 0;
  }
`;
    e.s(["GradientText", 0, i, "H1", 0, a, "H2Large", 0, n, "P", 0, o, "SectionPadding", 0, r, "SectionPaddingOpt", 0, l], 6261);
    var s = e.i(91788);
    e.s(["useAutoPlayVideoOnIntersection", 0, () => {
        let e = (0, s.useRef)(null),
            t = (0, s.useRef)(null);
        return (0, s.useEffect)(() => (t.current = new IntersectionObserver(t => {
            t.forEach(t => {
                t.isIntersecting && (e.current && (e.current.muted = !0, e.current.playsInline = !0, (!e.current.played || e.current.paused) && e.current ? .play()), console.log("lol"))
            })
        }, {
            threshold: .5
        }), t.current.observe(e.current), () => {
            t.current && t.current.disconnect()
        }), []), e
    }], 41595)
}, 72218, 66243, e => {
    "use strict";
    e.i(50461);
    var t = e.i(91398),
        i = e.i(58678);

    function a(e) {
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
        id: a
    }) => {
        if (!e) return null;
        try {
            let n = JSON.stringify(e);
            return (0, t.jsx)(i.default, {
                children: (0, t.jsx)("script", {
                    type: "application/ld+json",
                    dangerouslySetInnerHTML: {
                        __html: n
                    },
                    ...a && {
                        id: a
                    }
                })
            })
        } catch (e) {
            return null
        }
    }], 72218), e.s(["generateBreadcrumbSchema", () => a], 66243)
}, 12255, 82851, 61525, e => {
    "use strict";

    function t(e) {
        let {
            name: t,
            description: i,
            imageUrl: a,
            brand: n = "Ultrahuman",
            sku: o,
            mpn: r,
            gtin: l,
            category: s,
            price: d,
            currency: c,
            country: m,
            availability: p = "InStock",
            priceValidUntil: h,
            url: g,
            rating: u,
            reviews: f,
            color: x,
            material: b,
            weight: y,
            dimensions: w
        } = e, v = {
            "@type": "Offer",
            url: g,
            priceCurrency: c,
            price: d.toString(),
            availability: `https://schema.org/${p}`,
            priceValidUntil: h || new Date(Date.now() + 7776e6).toISOString().split("T")[0],
            seller: {
                "@type": "Organization",
                name: "Ultrahuman"
            },
            shippingDetails: {
                "@type": "OfferShippingDetails",
                shippingDestination: {
                    "@type": "DefinedRegion",
                    addressCountry: m
                }
            }
        }, C = u ? {
            "@type": "AggregateRating",
            ratingValue: u.ratingValue.toString(),
            reviewCount: u.reviewCount.toString(),
            bestRating: (u.bestRating || 5).toString(),
            worstRating: (u.worstRating || 1).toString()
        } : void 0, k = f ? .map(e => ({
            "@type": "Review",
            author: {
                "@type": "Person",
                name: e.author
            },
            datePublished: e.datePublished,
            reviewBody: e.reviewBody,
            reviewRating: {
                "@type": "Rating",
                ratingValue: e.ratingValue.toString(),
                bestRating: "5",
                worstRating: "1"
            }
        })), $ = {
            "@context": "https://schema.org",
            "@type": "Product",
            name: t,
            description: i,
            image: Array.isArray(a) ? a : [a],
            brand: {
                "@type": "Brand",
                name: n
            },
            sku: o,
            mpn: r,
            gtin: l,
            category: s,
            offers: v,
            url: g
        };
        return C && ($.aggregateRating = C), k && k.length > 0 && ($.review = k), x && ($.color = x), b && ($.material = b), y && ($.weight = y), w && ($.depth = w.length, $.width = w.width, $.height = w.height), $
    }

    function i(e) {
        return {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: e.map(e => ({
                "@type": "Question",
                name: e.question,
                acceptedAnswer: {
                    "@type": "Answer",
                    text: e.answer
                }
            }))
        }
    }
    e.s(["generateProductSchema", () => t], 12255), e.s(["generateFAQSchema", () => i], 82851);
    let a = (e, t, i) => {
        if (t > 10) return "";
        if ("string" == typeof e) return e;
        if ("number" == typeof e) return String(e);
        if (Array.isArray(e)) return e.map(e => a(e, t + 1, i)).join(" ");
        if (e && "object" == typeof e) {
            if (i.has(e)) return "";
            if (i.add(e), "props" in e) {
                let n = e.props;
                if ("string" == typeof n ? .defaultMessage && n.defaultMessage.trim()) return n.defaultMessage.trim();
                if (n ? .children) {
                    let e = a(n.children, t + 1, i);
                    if (e.trim()) return e
                }
            }
        }
        return ""
    };
    e.s(["extractTextFromJSX", 0, e => a(e, 0, new WeakSet)], 61525)
}, 63909, e => {
    "use strict";
    var t = e.i(91788);
    e.s(["useProgressInViewport", 0, ({
        containerRef: e,
        callback: i,
        startAtZero: a = !0,
        startsFromBottom: n = !1
    }) => {
        let o = (0, t.useRef)(null),
            r = (0, t.useRef)(null),
            l = (0, t.useCallback)(async () => {
                if (!e.current) {
                    o.current = requestAnimationFrame(l);
                    return
                }
                let t = e.current.getBoundingClientRect(),
                    r = t.top,
                    s = Math.max(t.height, window.innerHeight),
                    d = a ? Math.max(0, -r / s) : -r / s,
                    c = a ? Math.max(0, r / s) : -r / s;
                n ? i(c) : i(d), o.current = requestAnimationFrame(l)
            }, []),
            s = e => {
                let t = e[0];
                if (t && t.isIntersecting && !o.current) {
                    o.current = requestAnimationFrame(l);
                    return
                }
                o.current && cancelAnimationFrame(o.current), o.current = null
            };
        (0, t.useEffect)(() => (r.current = new IntersectionObserver(s, {
            root: null,
            rootMargin: "0px",
            threshold: .01
        }), e.current && r.current.observe(e.current), () => {
            o.current && cancelAnimationFrame(o.current), r.current ? .disconnect()
        }), [])
    }])
}, 76839, e => {
    "use strict";
    var t = e.i(91398),
        i = e.i(91788),
        a = e.i(60814),
        n = e.i(63909);
    let o = a.default.div.withConfig({
        displayName: "FadingGradient__Gradient",
        componentId: "sc-aec01b9e-0"
    })
    `
  position: sticky;
  bottom: 0;
  width: 100%;
  background: ${({color:e})=>`
    linear - gradient(
        350 deg,
        $ {
            e || "rgba(0, 0, 0, 1)"
        }
        0 % ,
        $ {
            e || "rgba(0, 0, 0, 1)"
        }
        25 % ,
        $ {
            e ? `${e}00` : "rgba(0, 0, 0, 0)"
        }
        70 %
    )
    `};
  height: calc(var(--viewportHeight, 100vh) * 0.6);
  pointer-events: none;

  grid-column: 3 / -3;

  @media (max-width: ${({theme:e})=>e.global.phone.maxWidth}) {
    grid-column: 2 / -2;
  }
`, r = a.default.div.withConfig({
        displayName: "FadingGradient__GradientLeft",
        componentId: "sc-aec01b9e-1"
    })
    `
  position: sticky;
  bottom: -1px;
  width: 100%;
  background: ${({color:e})=>`
    linear - gradient(
        10 deg,
        $ {
            e || "rgb(0, 0, 0)"
        }
        0 % ,
        $ {
            e || "rgb(0, 0, 0)"
        }
        15 % ,
        $ {
            e ? `${e}00` : "rgba(0, 0, 0, 0)"
        }
        50 %
    )
    `};
  height: calc(var(--viewportHeight, 100vh) * 0.5);
  pointer-events: none;

  grid-column: 3 / -3;

  @media (max-width: ${({theme:e})=>e.global.phone.maxWidth}) {
    grid-column: 2 / -2;
  }
`, l = (0, a.default)(({
        className: e,
        children: a,
        side: l,
        color: s
    }) => {
        let d = (0, i.useRef)(null),
            c = (0, i.useRef)(null);
        return (0, n.useProgressInViewport)({
            containerRef: d,
            callback(e) {
                if (!c.current || !d.current) return;
                let t = 3 * c.current.clientHeight / d.current.clientHeight,
                    i = Math.max(-.4, e) + .4;
                i < 0 ? c.current.style.opacity = "0" : i < .1 ? c.current.style.opacity = `${i/.1}` : i > 1.4 - t ? c.current.style.opacity = `${Math.max(0,1-(i-(1.4-t))/t)}` : c.current.style.opacity = "1"
            },
            startAtZero: !1
        }), (0, t.jsxs)("div", {
            className: e,
            ref: d,
            children: [a, "left" === l ? (0, t.jsx)(r, {
                ref: c,
                color: s
            }) : (0, t.jsx)(o, {
                ref: c,
                color: s
            })]
        })
    }).withConfig({
        displayName: "FadingGradient",
        componentId: "sc-aec01b9e-2"
    })
    `
  ${o} , ${r} {
    margin-top: calc(-0.6 * var(--viewportHeight, 100vh));
    opacity: 0;
    will-change: opacity;
  }
`;
    e.s(["FadingGradient", 0, l])
}, 74418, e => {
    "use strict";
    var t = e.i(91398),
        i = e.i(63742),
        a = e.i(91788),
        n = e.i(60814);
    let o = (0, a.createContext)(void 0),
        r = (0, a.createContext)(void 0),
        l = n.default.div.withConfig({
            displayName: "Accordion__AccordionRoot",
            componentId: "sc-9c5a8369-0"
        })
    `
  width: 100%;
`, s = n.default.div.withConfig({
        displayName: "Accordion__AccordionItemRoot",
        componentId: "sc-9c5a8369-1"
    })
    `
  border-radius: 8px;
  margin-bottom: 8px;
  overflow: hidden;

  background: #fff;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.04);
`, d = n.default.button.withConfig({
        displayName: "Accordion__AccordionTriggerButton",
        componentId: "sc-9c5a8369-2"
    })
    `
  width: 100%;
  padding: 24px;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  border: none;
  text-align: left;

  transition: background 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background: #f8fafc;

    h5 {
      @media (max-width: 992px) {
        text-decoration: underline;
      }
    }
  }

  &[data-state='open'] svg {
    transform: rotate(45deg);
  }

  svg {
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
`, c = n.default.div.withConfig({
        displayName: "Accordion__AccordionContentDiv",
        componentId: "sc-9c5a8369-3"
    })
    `
  background: white;
  overflow: hidden;
  padding: 0 24px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: top;

  &[data-state='closed'] {
    height: 0;
    padding-top: 0;
    padding-bottom: 0;
    opacity: 0;
    transform: translateY(-8px);
  }

  &[data-state='open'] {
    height: var(--radix-accordion-content-height);
    padding: 24px;
    opacity: 1;
    transform: translateY(0);
  }
`;

    function m({
        type: e = "single",
        value: i,
        defaultValue: n,
        onValueChange: r,
        collapsible: s = !1,
        children: d,
        ...c
    }) {
        let [m, p] = a.default.useState(i ? ? n), h = (0, a.useCallback)(e => {
            r ? r(e) : p(e)
        }, [r]), g = i ? ? m;
        return (0, t.jsx)(o.Provider, {
            value: {
                value: g,
                onValueChange: h,
                type: e,
                collapsible: s
            },
            children: (0, t.jsx)(l, { ...c,
                children: d
            })
        })
    }
    let p = o.Consumer,
        h = a.default.forwardRef(({
            value: e,
            children: i,
            ...a
        }, n) => (0, t.jsx)(r.Provider, {
            value: {
                value: e
            },
            children: (0, t.jsx)(s, {
                ref: n,
                ...a,
                children: i
            })
        }));

    function g({
        children: e,
        ...n
    }) {
        let l = (0, a.useContext)(o),
            s = (0, a.useContext)(r);
        if (!l || !s) throw Error("AccordionTrigger must be used within an Accordion");
        let c = l.value === s.value;
        return (0, t.jsxs)(d, {
            type: "button",
            onClick: () => {
                "single" === l.type && (l.collapsible && c ? l.onValueChange("") : l.onValueChange(s.value))
            },
            "data-state": c ? "open" : "closed",
            ...n,
            children: [e, (0, t.jsx)(i.Plus, {
                fill: "#A1A1A1",
                style: {
                    width: "16px",
                    height: "16px"
                }
            })]
        })
    }

    function u({
        children: e,
        ...i
    }) {
        let n = (0, a.useContext)(o),
            l = (0, a.useContext)(r);
        if (!n || !l) throw Error("AccordionContent must be used within an Accordion");
        let s = n.value === l.value;
        return (0, t.jsx)(c, {
            "data-state": s ? "open" : "closed",
            ...i,
            children: e
        })
    }
    h.displayName = "AccordionItem";
    var f = e.i(19231),
        x = e.i(76839),
        b = e.i(68354),
        y = e.i(86236),
        w = e.i(18888),
        v = e.i(57232),
        C = e.i(92195);
    let k = [{
            title: "Heart Health",
            subtitle: "15 Biomarkers",
            biomarkerTags: ["Apolipoprotein B (ApoB)", "High-Sensitivity C-Reactive Protein (hs-CRP)", "Lipoprotein (a)", "HDL Cholesterol", "Non-HDL Cholesterol", "Triglycerides", "Total Cholesterol / HDL Ratio", "Total Cholesterol", "LDL Cholesterol", "LDL Medium", "LDL Pattern", "LDL Small", "HDL Large", "LDL Particle Number", "LDL Peak Size"]
        }, {
            title: "Thyroid Profile",
            subtitle: "5 Biomarkers",
            biomarkerTags: ["Thyroglobulin Antibodies", "Thyroid Peroxidase Antibodies", "Thyroid-Stimulating Hormone", "Triiodothyronine (T3) Free", "Thyroxine (T4) Free"]
        }, {
            title: "Autoimmune Panel",
            subtitle: "5 Biomarkers",
            biomarkerTags: ["Antinuclear Antibodies Pattern", "Antinuclear Antibodies Titer", "Antinuclear Antibodies Screen", "Rheumatoid Factor", "Thyroid Peroxidase Antibodies"]
        }, {
            title: "Immune Regulation",
            subtitle: "7 Biomarkers",
            biomarkerTags: ["Basophils", "Lymphocytes", "Neutrophils", "Eosinophils", "Monocytes", "White Blood Cell Count", "High-Sensitivity C-Reactive Protein (hs-CRP)"]
        }, {
            title: "Male Health",
            subtitle: "6 Biomarkers",
            biomarkerTags: ["Testosterone, Free", "Testosterone, Total", "Follicle Stimulating Hormone", "Luteinizing Hormone", "Prolactin", "Sex Hormone Binding Globulin"]
        }, {
            title: "Female Health",
            subtitle: "9 Biomarkers",
            biomarkerTags: ["Anti-Mullerian Hormone", "Sex Hormone Binding Globulin", "Follicle Stimulating Hormone", "Prolactin", "DHEA–Sulfate", "Testosterone, Free", "Luteinizing Hormone", "Estradiol", "Testosterone, Total"]
        }, {
            title: "Diabetes Panel",
            subtitle: "4 Biomarkers",
            biomarkerTags: ["Insulin", "Glucose", "Leptin", "Hemoglobin A1c (HbA1c)"]
        }, {
            title: "Nutrient Panel",
            subtitle: "16 Biomarkers",
            biomarkerTags: ["Arachidonic Acid/EPA Ratio", "Omega-3 Total", "Omega-6: Linoleic Acid", "Omega-6 Total", "Omega-6: Arachidonic Acid", "Omega-6 / Omega-3 Ratio", "Ferritin", "Iron Binding Capacity", "Iron", "Iron % Saturation", "Magnesium", "Vitamin D", "Calcium", "Homocysteine", "Methylmalonic Acid", "Zinc"]
        }, {
            title: "Stress & Ageing Markers",
            subtitle: "3 Biomarkers",
            biomarkerTags: ["Biological Age", "Cortisol", "DHEA-Sulfate"]
        }, {
            title: "Liver Function",
            subtitle: "8 Biomarkers",
            biomarkerTags: ["Alanine Transaminase", "Alkaline Phosphatase", "Gamma-glutamyl Transferase", "Total Protein", "Albumin", "Aspartate Aminotransferase", "Total Bilirubin", "Globulin"]
        }, {
            title: "Kidney Function",
            subtitle: "9 Biomarkers",
            biomarkerTags: ["Blood Urea Nitrogen", "Serum Creatinine", "BUN/Creatinine Ratio", "eGFR", "Sodium", "Potassium", "Chloride", "Carbon Dioxide", "Uric Acid"]
        }, {
            title: "Pancreas Function",
            subtitle: "2 Biomarkers",
            biomarkerTags: ["Amylase", "Lipase"]
        }, {
            title: "Heavy Metal Markers",
            subtitle: "2 Biomarkers",
            biomarkerTags: ["Lead", "Mercury"]
        }, {
            title: "Complete Blood Count",
            subtitle: "10 Markers",
            biomarkerTags: ["Mean Corpuscular Hemoglobin (MCH)", "Mean Platelet Volume (MPV)", "Red Blood Cell Count", "Mean Corpuscular Hemoglobin Concentration (MCHC)", "Mean Corpuscular Volume (MCV)", "Platelet Count", "Red Cell Distribution Width (RDW)", "Hemoglobin", "Hematocrit", "ABO Group and Rhesus (Rh) Factor"]
        }, {
            title: "Electrolyte Panel",
            subtitle: "6 Biomarkers",
            biomarkerTags: ["Choride", "Potassium", "Sodium", "Carbon Dioxide", "Calcium", "Magnesium"]
        }, {
            title: "Urine Panel",
            subtitle: "15 Biomarkers",
            biomarkerTags: ["Albumin, Urine", "Bilirubin", "Glucose, Urine", "Leukocytes", "Occult Blood, Urine", "Protein, Urine", "Granular Casts", "Red Blood Cell, Urine", "Appearance, Urine", "Color, Urine", "Ketones, Urine", "Nitrite, Urine", "pH, Urine", "Specific Gravity, Urine", "White Blood Cell, Urine"]
        }],
        $ = n.default.div.withConfig({
            displayName: "LabTestAccordionSection__AccordionLayout",
            componentId: "sc-77228045-0"
        })
    `
  margin-top: 48px;
  display: grid;
  gap: 4px;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;

  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    gap: 16px;
    grid-template-rows: 1fr;
    grid-template-columns: repeat(2, auto);
  }
`, j = n.default.div.withConfig({
        displayName: "LabTestAccordionSection__Column",
        componentId: "sc-77228045-1"
    })
    `
  display: flex;
  flex-direction: column;
  gap: 4px;

  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    gap: 16px;
  }
`, S = n.default.div.withConfig({
        displayName: "LabTestAccordionSection__ChipContainer",
        componentId: "sc-77228045-2"
    })
    `
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 16px;
`, _ = n.default.span.withConfig({
        displayName: "LabTestAccordionSection__Chip",
        componentId: "sc-77228045-3"
    })
    `
  flex-shrink: 0;

  border-radius: 4px;
  border: 1px solid rgba(0, 33, 141, 0.1);
  background: rgba(0, 33, 141, 0.08);
  padding: 6px 16px 6px 16px;

  color: #00218d;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  text-transform: capitalize;
`, V = n.default.hr.withConfig({
        displayName: "LabTestAccordionSection__Separator",
        componentId: "sc-77228045-4"
    })
    `
  background: transparent;
  border: none;
  border-top: 1px solid rgba(0, 33, 141, 0.1);
  width: calc(100% - 32px);
  margin: 0 auto;
`, I = n.default.h5.withConfig({
        displayName: "LabTestAccordionSection__Title",
        componentId: "sc-77228045-5"
    })
    `
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 22.4px */
  letter-spacing: -0.48px;
  display: inline;
  color: #000000;

  margin-right: 12px;
`, N = n.default.p.withConfig({
        displayName: "LabTestAccordionSection__Subtitle",
        componentId: "sc-77228045-6"
    })
    `
  color: #00218d;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 20.8px */
  letter-spacing: -0.16px;
  display: inline;
`, P = (0, n.default)(({
        className: e,
        htmlId: i
    }) => {
        let n = k.slice(0, Math.ceil(k.length / 2)),
            o = k.slice(Math.ceil(k.length / 2)),
            r = (0, a.useRef)([]);
        r.current = [];
        let l = (0, a.useRef)([]);
        l.current = [];
        let {
            width: s
        } = (0, v.useWindowSize)();
        return (0, y.useIsomorphicLayoutEffect)(() => {
            let e = [...r.current, ...l.current];
            return e.forEach(e => {
                e && w.default.fromTo(e, {
                    autoAlpha: 0,
                    y: 30
                }, {
                    autoAlpha: 1,
                    y: 0,
                    duration: .3,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: e,
                        start: "top 75%",
                        toggleActions: "play none none none"
                    }
                })
            }), C.ScrollTrigger.refresh(), () => {
                e.forEach(e => {
                    e && w.default.killTweensOf(e)
                })
            }
        }, [s]), (0, t.jsx)("section", {
            className: e,
            id: i,
            children: (0, t.jsx)(f.Container, {
                children: (0, t.jsxs)(x.FadingGradient, {
                    color: "#f7f7f7",
                    children: [(0, t.jsx)(b.H2, {
                        children: "One dashboard. 100+ biomarkers."
                    }), (0, t.jsx)(b.P, {
                        children: "The following tests are included in your $499 Ultrahuman Annual Membership.*"
                    }), (0, t.jsx)(m, {
                        type: "single",
                        collapsible: !0,
                        defaultValue: "l0",
                        children: (0, t.jsxs)($, {
                            children: [(0, t.jsx)(j, {
                                children: n.map((e, i) => (0, t.jsxs)(h, {
                                    value: "l" + i.toString(),
                                    ref: e => {
                                        r.current[i] = e
                                    },
                                    children: [(0, t.jsx)(g, {
                                        children: (0, t.jsxs)("div", {
                                            children: [(0, t.jsx)(I, {
                                                children: e.title
                                            }), (0, t.jsx)(N, {
                                                children: e.subtitle
                                            })]
                                        })
                                    }), (0, t.jsx)(p, {
                                        children: e => e ? .value === "l" + i.toString() ? (0, t.jsx)(V, {}) : null
                                    }), (0, t.jsx)(u, {
                                        children: (0, t.jsx)(S, {
                                            children: e.biomarkerTags.map((e, i) => (0, t.jsx)(_, {
                                                className: "biomarker-tag",
                                                children: e
                                            }, i))
                                        })
                                    })]
                                }, i))
                            }), (0, t.jsx)(j, {
                                children: o.map((e, i) => (0, t.jsxs)(h, {
                                    value: "r" + i.toString(),
                                    ref: e => {
                                        l.current[i] = e
                                    },
                                    children: [(0, t.jsx)(g, {
                                        children: (0, t.jsxs)("div", {
                                            children: [(0, t.jsx)(I, {
                                                children: e.title
                                            }), (0, t.jsx)(N, {
                                                children: e.subtitle
                                            })]
                                        })
                                    }), (0, t.jsx)(p, {
                                        children: e => e ? .value === "r" + i.toString() ? (0, t.jsx)(V, {}) : null
                                    }), (0, t.jsx)(u, {
                                        children: (0, t.jsx)(S, {
                                            children: e.biomarkerTags.map((e, i) => (0, t.jsx)(_, {
                                                className: "biomarker-tag",
                                                children: e
                                            }, i))
                                        })
                                    })]
                                }, i))
                            })]
                        })
                    })]
                })
            })
        })
    }).withConfig({
        displayName: "LabTestAccordionSection",
        componentId: "sc-77228045-7"
    })
    `
  ${b.SectionPadding}
  background-color: #f7f7f7;
  position: relative;

  ${b.H2} {
    text-align: center;
  }

  ${b.P} {
    text-align: center;

    @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
      margin-top: 7px;
    }
  }
`;
    e.s(["LabTestAccordionSection", 0, P], 74418)
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
    e.v(t => Promise.all(["static/chunks/e056ca7971cd1f63.js"].map(t => e.l(t))).then(() => t(14075)))
}, 67170, e => {
    e.v(t => Promise.all(["static/chunks/9f77d952c7e9ece7.js"].map(t => e.l(t))).then(() => t(69786)))
}, 60709, e => {
    e.v(t => Promise.all(["static/chunks/0388c99910fc4ac5.js"].map(t => e.l(t))).then(() => t(16390)))
}, 85244, e => {
    e.v(t => Promise.all(["static/chunks/b72415b2b2f28b34.js"].map(t => e.l(t))).then(() => t(63831)))
}, 78408, e => {
    e.v(t => Promise.all(["static/chunks/7aa86b3e15451b97.js", "static/chunks/e748fdbf5f0bf205.js"].map(t => e.l(t))).then(() => t(18130)))
}]);