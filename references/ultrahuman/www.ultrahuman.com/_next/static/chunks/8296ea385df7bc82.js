(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 54134, e => {
            "use strict";
            var t = e.i(91398),
                i = e.i(58678),
                r = e.i(3828),
                a = e.i(91788),
                o = e.i(3115),
                n = e.i(71225);
            let s = "https://www.ultrahuman.com";

            function l(e) {
                return e.endsWith("/") ? e : e + "/"
            }
            e.s(["SEO", 0, ({
                title: e,
                description: c,
                image: d,
                canonical: u,
                basePath: p,
                nonIndexable: h,
                robots: m
            }) => {
                let g, {
                        asPath: f
                    } = (0, r.useRouter)(),
                    {
                        regionSlug: b
                    } = (0, a.useContext)(o.RegionLocaleContext);
                if (u) g = u;
                else if (p) g = `${s}/${b}${l(p)}`;
                else {
                    let e = f.split("?")[0].split("#")[0];
                    g = `${s}${e}`
                }
                let x = !!p,
                    w = p ? `${s}/global${l(p)}` : void 0,
                    y = x ? (0, n.getAllRegionSlugs)() : [];
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
                        content: g
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
                        href: g
                    }, "canonical"), w && (0, t.jsx)("link", {
                        rel: "alternate",
                        hrefLang: "x-default",
                        href: w
                    }, "hreflang-x-default"), y.map(e => {
                        let i, r, a = (0, n.parseRegionLocale)(e),
                            o = `${s}/${e}${l(p)}`;
                        if ("GLOBAL" === a.region) return null;
                        let c = (i = a.region.toUpperCase(), r = (0, n.getDefaultLanguageForRegion)(i), `${r}-${i}`),
                            d = e.includes("-") ? `${a.language}-${a.region}` : c;
                        return (0, t.jsx)("link", {
                            rel: "alternate",
                            hrefLang: d,
                            href: o
                        }, `hreflang-${e}`)
                    }), h && (0, t.jsx)("meta", {
                        name: "google",
                        content: "nositelinkssearchbox"
                    }, "sitelinks"), h && (0, t.jsx)("meta", {
                        name: "google",
                        content: "notranslate"
                    }, "notranslate"), m ? (0, t.jsx)("meta", {
                        name: "robots",
                        content: m
                    }, "robots") : h && (0, t.jsx)("meta", {
                        name: "robots",
                        content: "noindex,nofollow"
                    }, "robots")]
                })
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
        }, 72218, 66243, e => {
            "use strict";
            e.i(50461);
            var t = e.i(91398),
                i = e.i(58678);

            function r(e) {
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
                id: r
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
                            ...r && {
                                id: r
                            }
                        })
                    })
                } catch (e) {
                    return null
                }
            }], 72218), e.s(["generateBreadcrumbSchema", () => r], 66243)
        }, 12255, 82851, 61525, e => {
            "use strict";

            function t(e) {
                let {
                    name: t,
                    description: i,
                    imageUrl: r,
                    brand: a = "Ultrahuman",
                    sku: o,
                    mpn: n,
                    gtin: s,
                    category: l,
                    price: c,
                    currency: d,
                    country: u,
                    availability: p = "InStock",
                    priceValidUntil: h,
                    url: m,
                    rating: g,
                    reviews: f,
                    color: b,
                    material: x,
                    weight: w,
                    dimensions: y
                } = e, C = {
                    "@type": "Offer",
                    url: m,
                    priceCurrency: d,
                    price: c.toString(),
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
                            addressCountry: u
                        }
                    }
                }, v = g ? {
                    "@type": "AggregateRating",
                    ratingValue: g.ratingValue.toString(),
                    reviewCount: g.reviewCount.toString(),
                    bestRating: (g.bestRating || 5).toString(),
                    worstRating: (g.worstRating || 1).toString()
                } : void 0, _ = f ? .map(e => ({
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
                })), P = {
                    "@context": "https://schema.org",
                    "@type": "Product",
                    name: t,
                    description: i,
                    image: Array.isArray(r) ? r : [r],
                    brand: {
                        "@type": "Brand",
                        name: a
                    },
                    sku: o,
                    mpn: n,
                    gtin: s,
                    category: l,
                    offers: C,
                    url: m
                };
                return v && (P.aggregateRating = v), _ && _.length > 0 && (P.review = _), b && (P.color = b), x && (P.material = x), w && (P.weight = w), y && (P.depth = y.length, P.width = y.width, P.height = y.height), P
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
            let r = (e, t, i) => {
                if (t > 10) return "";
                if ("string" == typeof e) return e;
                if ("number" == typeof e) return String(e);
                if (Array.isArray(e)) return e.map(e => r(e, t + 1, i)).join(" ");
                if (e && "object" == typeof e) {
                    if (i.has(e)) return "";
                    if (i.add(e), "props" in e) {
                        let a = e.props;
                        if ("string" == typeof a ? .defaultMessage && a.defaultMessage.trim()) return a.defaultMessage.trim();
                        if (a ? .children) {
                            let e = r(a.children, t + 1, i);
                            if (e.trim()) return e
                        }
                    }
                }
                return ""
            };
            e.s(["extractTextFromJSX", 0, e => r(e, 0, new WeakSet)], 61525)
        }, 63909, e => {
            "use strict";
            var t = e.i(91788);
            e.s(["useProgressInViewport", 0, ({
                containerRef: e,
                callback: i,
                startAtZero: r = !0,
                startsFromBottom: a = !1
            }) => {
                let o = (0, t.useRef)(null),
                    n = (0, t.useRef)(null),
                    s = (0, t.useCallback)(async () => {
                        if (!e.current) {
                            o.current = requestAnimationFrame(s);
                            return
                        }
                        let t = e.current.getBoundingClientRect(),
                            n = t.top,
                            l = Math.max(t.height, window.innerHeight),
                            c = r ? Math.max(0, -n / l) : -n / l,
                            d = r ? Math.max(0, n / l) : -n / l;
                        a ? i(d) : i(c), o.current = requestAnimationFrame(s)
                    }, []),
                    l = e => {
                        let t = e[0];
                        if (t && t.isIntersecting && !o.current) {
                            o.current = requestAnimationFrame(s);
                            return
                        }
                        o.current && cancelAnimationFrame(o.current), o.current = null
                    };
                (0, t.useEffect)(() => (n.current = new IntersectionObserver(l, {
                    root: null,
                    rootMargin: "0px",
                    threshold: .01
                }), e.current && n.current.observe(e.current), () => {
                    o.current && cancelAnimationFrame(o.current), n.current ? .disconnect()
                }), [])
            }])
        }, 46031, e => {
            "use strict";
            var t = e.i(91398),
                i = e.i(91788),
                r = e.i(60814);
            let a = r.default.button.withConfig({
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
  ${({rounded:e="full"})=>{switch(e){case"sm":return r.css`
            border - radius: 8 px;
            `;case"lg":return r.css`
            border - radius: 16 px;
            `;default:return r.css`
            border - radius: 50 % ;
            `}}}

  /* Theme and fill variants */
  ${({variant:e="light",fill:t=!0})=>"light"===e?r.css`
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
        `:r.css`
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
        rounded: r = "full",
        fill: o = !0,
        ...n
    }, s) => {
        let l = "next" === e ? "0deg" : "180deg";
        return (0, t.jsx)(a, {
            ref: s,
            type: "button",
            variant: i,
            rounded: r,
            fill: o,
            direction: e,
            ...n,
            children: (0, t.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "19",
                height: "14",
                viewBox: "0 0 19 14",
                fill: "none",
                style: {
                    transform: `rotate(${l})`
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
        r = e.i(14681),
        a = e.i(91788),
        o = e.i(60814),
        n = e.i(2100),
        s = e.i(61791),
        l = e.i(19231),
        c = e.i(21666),
        d = e.i(46031);
    let u = (0, o.default)(({
        className: e,
        data: i,
        advisorId: r
    }) => (0, t.jsx)("div", {
        className: e,
        children: (0, t.jsx)("div", {
            className: "element-content",
            children: (0, t.jsx)("div", {
                className: "element-image",
                children: (0, t.jsx)(c.CustomImage, {
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
`, p = [{
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
`, m = o.css `
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
`, g = (0, o.default)(({
        className: e
    }) => {
        let [o, n] = (0, r.default)({
            loop: !0,
            align: "start",
            slidesToScroll: 1,
            breakpoints: {
                "(max-width: 878px)": {
                    align: "center",
                    containScroll: "trimSnaps"
                }
            }
        }), c = (0, a.useCallback)(() => {
            n && n.scrollPrev()
        }, [n]), p = (0, a.useCallback)(() => {
            n && n.scrollNext()
        }, [n]), {
            t: h
        } = (0, i.useTranslation)("home"), m = [{
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
            children: (0, t.jsx)(l.Container, {
                children: (0, t.jsxs)("div", {
                    className: "content",
                    children: [(0, t.jsxs)(s.H2Large, {
                        children: [h("home.athleteSectionNew.title.a"), " ", (0, t.jsx)("br", {}), " ", h("home.athleteSectionNew.title.b")]
                    }), (0, t.jsxs)("div", {
                        className: "carousal-container",
                        children: [(0, t.jsx)("div", {
                            className: "embla",
                            ref: o,
                            children: (0, t.jsx)("div", {
                                className: "embla__container",
                                children: m.map((e, i) => (0, t.jsx)("div", {
                                    className: "embla__slide",
                                    children: (0, t.jsxs)("div", {
                                        className: "element-parent",
                                        children: [(0, t.jsx)(u, {
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
                            children: (0, t.jsx)(d.CarouselButton, {
                                onClick: c,
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
                            children: (0, t.jsx)(d.CarouselButton, {
                                onClick: p,
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
    ${n.hideScrollbar}
    ${m}
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
      ${n.hideScrollbar}
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
        onClick: r,
        children: a
    }) => (0, t.jsx)("button", {
        className: e,
        style: i,
        onClick: () => {
            r && r()
        },
        children: a
    }), "AtheletesSectionNew", 0, g, "athletes", 0, p, "emblaStyles", 0, m, "sliderStyle", 0, h])
}, 6939, e => {
    e.v("/_next/static/media/TwoWeeksIN.9ee50f9f.png")
}, 94061, e => {
    e.v("/_next/static/media/ThreeMonthAE.f6b488e5.png")
}, 76097, e => {
    e.v("/_next/static/media/SixMOnthsAE.0387a7e8.png")
}, 71231, e => {
    e.v("/_next/static/media/OneYearAE.43ca5005.png")
}, 8025, e => {
    e.v("/_next/static/media/OneMonthAE.061269db.png")
}, 98314, 63263, 43572, 83240, 1431, 20100, e => {
    "use strict";
    var t = e.i(59207);
    e.i(50461);
    var i = e.i(91398);
    let r = {
            src: e.i(6939).default,
            width: 1671,
            height: 2088,
            blurWidth: 6,
            blurHeight: 8,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAAqElEQVR42lXLsQpFYABA4f9FlDcwK3kAKcmb2MRkJZNNJrlFsiDKC9ilJIPlf45zu7Y7f+eI+lPT9z3TNDHPM+M40rYtoqoquq5jGIZ/iKKIIAgIw5A4jsnznLIsEaZpoqoqmqZhGAae55GmKcJxHBRFQdd1bNvGdV2yLEMURfGWv8OyLHzfZ1kWxLZtNE1DkiSs68p1XUgpEfu+cxwH53ly3zfP87zwBdEwgHLjHdFGAAAAAElFTkSuQmCC"
        },
        a = {
            src: e.i(94061).default,
            width: 1671,
            height: 2088,
            blurWidth: 6,
            blurHeight: 8,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAAr0lEQVR42h2MMQ5DUABA/1GISUQcwFbC5CqSNjG4gTM4gclmYbWJRSpIRI02IsT4Wh3e8vLyRNM0tO2bvu8Zx5F5nn98EGVZUhQFWZaRpil5nlNVFcL3fWzbxnVdHtYDy7KI4xjheR6apqGqKrIsoygKYRgioijCMAwkSULXdUzT5Pl6IaZpIggCHMfh3iZJQtd1iOM4GIaBuq5ZloV1Xdm2DXFdF+d5cgf7vv/lzRfPFIeV0X2iZQAAAABJRU5ErkJggg=="
        },
        o = {
            src: e.i(76097).default,
            width: 1671,
            height: 2088,
            blurWidth: 6,
            blurHeight: 8,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAAsklEQVR42h3Lrw5EcADA8d+73EUPwO78OYUJZhNINkFwj6EINM+geQPNpgjGE9hUgkT83k77lI+Y55lhGOi6jr7vWdeVfd8RcRxjGAaKoqBpGmmaUtc1wnEcHs8HkiTxt+/7BEGA+H5TZFnGNE2iKCIMQ5IkQZRlia7rqKp6D8uyyLIM0bYtruve6/MxsG2bpmkQ27aR5zmv9wvP8yiKgmVZENd1MY4jVVUxTRPHcXCeJz+4SXbJ5I4r3AAAAABJRU5ErkJggg=="
        },
        n = {
            src: e.i(71231).default,
            width: 1671,
            height: 2088,
            blurWidth: 6,
            blurHeight: 8,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAArklEQVR42h2KMQtEYABAvz8lmzAps0y6K6NR3/0CN1rkBrPNqExmWWS02URZDAyKeleG16vXE1mWUVUVfd8zjiPzPLOuK6LrOtq2pa5riqJ4pmmaEJ7nYRgGqqqiKAq6rhPHMcK2bTRNIwgC5EfiOA7R94vwfR/LspBSEoYhruuS5zki/aWYpsnr/SKKIsqyZFkWxDAMJElC0zRs28Z1XQ9i33eO4+A8zyfc9/34D5oLinWKgBLtAAAAAElFTkSuQmCC"
        };
    var s = e.i(41315),
        l = e.i(1814);
    let c = {
        [s.ProductPurchaseOption.x]: {
            title: "Special Prices",
            defaultProduct: s.ProductPurchaseType.otp_24_week,
            directCheckout: !1,
            discountCode: "BFSM120",
            plans: {
                [s.ProductPurchaseType.otp_2_week]: {
                    displayName: "Ultrahuman M1 | 2 Weeks Trial continuous glucose monitoring",
                    price: 7499,
                    variantId: "gid://shopify/ProductVariant/40566813556806",
                    internalPid: s.ProductPurchaseType.otp_2_week,
                    image: r,
                    secondaryImage: "",
                    title: "2+2 Weeks",
                    subtitle1: "2 CGM Sensor",
                    subtitle2: "Delivery on purchase",
                    tag: (0, i.jsxs)(i.Fragment, {
                        children: ["save ", l.CurrencySymbol.inr, "7,499"]
                    })
                },
                [s.ProductPurchaseType.otp_12_week]: {
                    displayName: "Ultrahuman M1 | 12 Weeks continuous glucose monitoring",
                    price: 34999,
                    variantId: "gid://shopify/ProductVariant/40596792016966",
                    internalPid: s.ProductPurchaseType.otp_12_week,
                    image: a,
                    secondaryImage: "",
                    title: "12+6 Weeks",
                    subtitle1: "9 CGM Sensors",
                    subtitle2: "Delivery on purchase",
                    tag: (0, i.jsxs)(i.Fragment, {
                        children: ["save ", l.CurrencySymbol.inr, "32,492"]
                    })
                },
                [s.ProductPurchaseType.otp_24_week]: {
                    displayName: "Ultrahuman M1 | 24 Weeks continuous glucose monitoring",
                    price: 64999,
                    variantId: "gid://shopify/ProductVariant/40566761324614",
                    internalPid: s.ProductPurchaseType.otp_24_week,
                    image: o,
                    secondaryImage: "",
                    title: "24+12 Weeks",
                    subtitle1: "18 CGM Sensors",
                    subtitle2: "Delivery on demand",
                    tag: (0, i.jsxs)(i.Fragment, {
                        children: ["save ", l.CurrencySymbol.inr, "69,983"]
                    })
                },
                [s.ProductPurchaseType.otp_1_year]: {
                    displayName: "Ultrahuman M1 | 52 Weeks continuous glucose monitoring",
                    price: 134999,
                    variantId: "gid://shopify/ProductVariant/40566763487302",
                    internalPid: s.ProductPurchaseType.otp_1_year,
                    image: n,
                    secondaryImage: "",
                    title: "52+12 Weeks",
                    subtitle1: "32 CGM Sensors",
                    subtitle2: "Delivery on demand",
                    tag: (0, i.jsxs)(i.Fragment, {
                        children: ["save ", l.CurrencySymbol.inr, "1,04,969"]
                    })
                }
            }
        },
        [s.ProductPurchaseOption.oneTimePurchase]: {
            title: "One Time Purchase",
            defaultProduct: s.ProductPurchaseType.otp_24_week,
            directCheckout: !1,
            discountCode: "BFSM120",
            plans: {
                [s.ProductPurchaseType.otp_2_week]: {
                    displayName: "Ultrahuman M1 | 2 Weeks Trial continuous glucose monitoring",
                    price: 7499,
                    variantId: "gid://shopify/ProductVariant/40458091036742",
                    internalPid: s.ProductPurchaseType.otp_2_week,
                    image: r,
                    secondaryImage: "",
                    title: "2 Weeks Trial",
                    subtitle1: "1 CGM Sensor",
                    subtitle2: "Delivery on purchase"
                },
                [s.ProductPurchaseType.otp_12_week]: {
                    displayName: "Ultrahuman M1 | 12 Weeks continuous glucose monitoring",
                    price: 34999,
                    variantId: "gid://shopify/ProductVariant/40458093953094",
                    internalPid: s.ProductPurchaseType.otp_12_week,
                    image: a,
                    secondaryImage: "",
                    title: "12 Weeks",
                    subtitle1: "6 CGM Sensors",
                    subtitle2: "Delivery on purchase",
                    tag: (0, i.jsxs)(i.Fragment, {
                        children: ["save ", l.CurrencySymbol.inr, "9,995"]
                    })
                },
                [s.ProductPurchaseType.otp_24_week]: {
                    displayName: "Ultrahuman M1 | 24 Weeks continuous glucose monitoring",
                    price: 64999,
                    variantId: "gid://shopify/ProductVariant/40458095722566",
                    internalPid: s.ProductPurchaseType.otp_24_week,
                    image: o,
                    secondaryImage: "",
                    title: "24 Weeks",
                    subtitle1: "12 CGM Sensors",
                    subtitle2: "Delivery on demand",
                    tag: (0, i.jsxs)(i.Fragment, {
                        children: ["save ", l.CurrencySymbol.inr, "24,989"]
                    })
                },
                [s.ProductPurchaseType.otp_1_year]: {
                    displayName: "Ultrahuman M1 | 52 Weeks continuous glucose monitoring",
                    price: 134999,
                    variantId: "gid://shopify/ProductVariant/40458096541766",
                    internalPid: s.ProductPurchaseType.otp_1_year,
                    image: n,
                    secondaryImage: "",
                    title: "52 Weeks",
                    subtitle1: "26 CGM Sensors",
                    subtitle2: "Delivery on demand",
                    tag: (0, i.jsxs)(i.Fragment, {
                        children: ["save ", l.CurrencySymbol.inr, "59,975"]
                    })
                }
            }
        },
        [s.ProductPurchaseOption.membership]: {
            title: "Subscription",
            defaultProduct: s.ProductPurchaseType.membership_1_sensor_month,
            directCheckout: !1,
            discountCode: "",
            plans: {
                [s.ProductPurchaseType.membership_1_sensor_month]: {
                    title: "2 Weeks Monitoring/Month",
                    price: 6899,
                    subtitle1: "Every month we'll ship one sensor that lasts two weeks",
                    subtitle2: "Delivery Monthly",
                    internalPid: s.ProductPurchaseType.membership_1_sensor_month,
                    variantId: "gid://shopify/ProductVariant/40459179655238",
                    planId: 0xa99213
                },
                [s.ProductPurchaseType.membership_2_sensor_month]: {
                    title: "Full Month Monitoring",
                    price: 13199,
                    subtitle1: "Every month we'll ship two sensors that last a month",
                    subtitle2: "Delivery Monthly",
                    internalPid: s.ProductPurchaseType.membership_2_sensor_month,
                    variantId: "gid://shopify/ProductVariant/40459180769350",
                    planId: 0xa99214
                }
            }
        }
    };
    s.ProductPurchaseOption.oneTimePurchase, s.ProductPurchaseOption.x, e.s(["newM1Data", 0, c], 63263);
    let d = {
            src: e.i(8025).default,
            width: 1671,
            height: 2086,
            blurWidth: 6,
            blurHeight: 8,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAAqUlEQVR42j2OsQpFUABA7w9Jkqw+wmS0StdM/IAfMFmVJD1RUmSyWE0im884r/fqveFM5wxHNE1D13VM08S6rmzbxjAMiJ8Yx5FlWZjnmTzPEWVZUtc1bfv6BkVRkCQJIssy0jQljmM8z8N1XaSUCNu20TQNRVHQdR3DMHAcBxEEEtM0UVUVy7LwfZ+qqhCfizAMiaKIvu/Z953jOBDP83Df95/rujjPkzcXcIU9zj2oSgAAAABJRU5ErkJggg=="
        },
        u = {
            [s.ProductPurchaseOption.x]: {
                title: "Special Prices",
                defaultProduct: s.ProductPurchaseType.otp_3_month_ae,
                directCheckout: !1,
                plans: {
                    [s.ProductPurchaseType.otp_1_month_ae]: {
                        displayName: "Ultrahuman M1 Live | 1+1 Month continuous glucose monitoring",
                        price: 850,
                        variantId: "gid://shopify/ProductVariant/62381263847795",
                        internalPid: s.ProductPurchaseType.otp_1_month_ae,
                        image: d,
                        secondaryImage: "",
                        title: "1+1 Month",
                        subtitle1: "4 sensors",
                        subtitle2: "Delivery on purchase"
                    },
                    [s.ProductPurchaseType.otp_3_month_ae]: {
                        displayName: "Ultrahuman M1 Live | 3+3 Months continuous glucose monitoring",
                        price: 2255,
                        variantId: "gid://shopify/ProductVariant/62381265125747",
                        internalPid: s.ProductPurchaseType.otp_3_month_ae,
                        image: a,
                        secondaryImage: "",
                        title: "3+3 Months",
                        subtitle1: "12 sensors",
                        subtitle2: "Delivery on purchase"
                    },
                    [s.ProductPurchaseType.otp_6_month_ae]: {
                        displayName: "Ultrahuman M1 Live | 6+6 Months continuous glucose monitoring",
                        price: 4755,
                        variantId: "gid://shopify/ProductVariant/62381268894067",
                        internalPid: s.ProductPurchaseType.otp_6_month_ae,
                        image: o,
                        secondaryImage: "",
                        title: "6+6 Months",
                        subtitle1: "26 sensors",
                        subtitle2: "Delivery in batches"
                    },
                    [s.ProductPurchaseType.otp_1_year_ae]: {
                        displayName: "Ultrahuman M1 Live | 12+12 Months continuous glucose monitoring",
                        price: 8955,
                        variantId: "gid://shopify/ProductVariant/62381272334707",
                        internalPid: s.ProductPurchaseType.otp_1_year_ae,
                        image: n,
                        secondaryImage: "",
                        title: "12+12 Months",
                        subtitle1: "52 sensors",
                        subtitle2: "Delivery in batches"
                    }
                }
            },
            [s.ProductPurchaseOption.oneTimePurchase]: {
                title: "One Time Purchase",
                defaultProduct: s.ProductPurchaseType.otp_3_month_ae,
                directCheckout: !1,
                plans: {
                    [s.ProductPurchaseType.otp_1_month_ae]: {
                        displayName: "Ultrahuman M1 Live | 1 Month Trial continuous glucose monitoring",
                        price: 850,
                        variantId: "gid://shopify/ProductVariant/44186161086706",
                        internalPid: s.ProductPurchaseType.otp_1_month_ae,
                        image: d,
                        secondaryImage: "",
                        title: "1 Month",
                        subtitle1: "2 CGM Sensors",
                        subtitle2: "Delivery on purchase"
                    },
                    [s.ProductPurchaseType.otp_3_month_ae]: {
                        displayName: "Ultrahuman M1 Live | 3 Months continuous glucose monitoring",
                        price: 2255,
                        variantId: "gid://shopify/ProductVariant/44187468824818",
                        internalPid: s.ProductPurchaseType.otp_3_month_ae,
                        image: a,
                        secondaryImage: "",
                        title: "3 Months",
                        subtitle1: "6 CGM Sensors",
                        subtitle2: "Delivery on purchase",
                        tag: (0, i.jsxs)(i.Fragment, {
                            children: ["save ", l.CurrencySymbol.aed, "295"]
                        })
                    },
                    [s.ProductPurchaseType.otp_6_month_ae]: {
                        displayName: "Ultrahuman M1 Live | 6 Months continuous glucose monitoring",
                        price: 4755,
                        variantId: "gid://shopify/ProductVariant/44187592786162",
                        internalPid: s.ProductPurchaseType.otp_6_month_ae,
                        image: o,
                        secondaryImage: "",
                        title: "6 Months",
                        subtitle1: "13 CGM Sensor",
                        subtitle2: "Delivery in batches",
                        tag: (0, i.jsxs)(i.Fragment, {
                            children: ["save ", l.CurrencySymbol.aed, "770"]
                        })
                    },
                    [s.ProductPurchaseType.otp_1_year_ae]: {
                        displayName: "Ultrahuman M1 Live | 1 Year continuous glucose monitoring",
                        price: 8955,
                        variantId: "gid://shopify/ProductVariant/44579593978098",
                        internalPid: s.ProductPurchaseType.otp_1_year_ae,
                        image: n,
                        secondaryImage: "",
                        title: "1 Year",
                        subtitle1: "26 CGM Sensor",
                        subtitle2: "Delivery in batches",
                        tag: (0, i.jsxs)(i.Fragment, {
                            children: ["save ", l.CurrencySymbol.aed, "2,095"]
                        })
                    }
                }
            },
            [s.ProductPurchaseOption.membership]: {
                title: "Recurring Subscription",
                defaultProduct: s.ProductPurchaseType.membership_1_sensor_month_ae,
                directCheckout: !1,
                plans: {
                    [s.ProductPurchaseType.membership_1_sensor_month_ae]: {
                        title: "2 Sensors",
                        price: 815,
                        subtitle1: "2 CGM Sensors/Month",
                        subtitle2: "",
                        internalPid: s.ProductPurchaseType.membership_1_sensor_month_ae,
                        variantId: "gid://shopify/ProductVariant/44218367443186",
                        planId: 0xa9929a
                    }
                }
            }
        };
    e.s(["newM1Data", 0, u], 43572);
    let p = {
            [s.ProductPurchaseOption.oneTimePurchase]: {
                title: "One Time Purchase",
                defaultProduct: s.ProductPurchaseType.otp_4_weeks_eu,
                directCheckout: !0,
                plans: {
                    [s.ProductPurchaseType.otp_4_weeks_eu]: {
                        displayName: "Ultrahuman M1 Live | 1 Month continuous glucose monitoring",
                        price: 249,
                        variantId: "gid://shopify/ProductVariant/49202716934462",
                        internalPid: s.ProductPurchaseType.otp_4_weeks_eu,
                        image: d,
                        secondaryImage: "",
                        title: "4 Weeks",
                        subtitle1: "2 CGM Sensors",
                        subtitle2: "Delivery on purchase",
                        checkoutUrl: "https://buy.stripe.com/4gw02Y5aJ1M88Eg28f"
                    }
                }
            }
        },
        h = {
            [s.ProductPurchaseOption.oneTimePurchase]: {
                title: "One Time Purchase",
                defaultProduct: s.ProductPurchaseType.otp_2_weeks_eu,
                directCheckout: !0,
                plans: {
                    [s.ProductPurchaseType.otp_2_weeks_eu]: {
                        displayName: "Ultrahuman M1 Live | 2 weeks continuous glucose monitoring",
                        price: 175,
                        variantId: "gid://shopify/ProductVariant/49203361284414",
                        internalPid: s.ProductPurchaseType.otp_2_weeks_eu,
                        image: r,
                        secondaryImage: "",
                        title: "2 Weeks",
                        subtitle1: "1 CGM Sensors",
                        subtitle2: "Delivery on purchase",
                        checkoutUrl: "https://buy.stripe.com/dR6dTO32B3Ugg6IbIO"
                    }
                }
            }
        },
        m = {
            [s.ProductPurchaseOption.oneTimePurchase]: {
                title: "One Time Purchase",
                defaultProduct: s.ProductPurchaseType.otp_4_weeks_eu,
                directCheckout: !1,
                plans: {
                    [s.ProductPurchaseType.otp_4_weeks_eu]: {
                        displayName: "Ultrahuman M1 Live | 1 Months continuous glucose monitoring",
                        price: 189,
                        variantId: "gid://shopify/ProductVariant/49202716934462",
                        internalPid: s.ProductPurchaseType.otp_4_weeks_eu,
                        image: d,
                        secondaryImage: "",
                        title: "4 weeks",
                        subtitle1: "2 CGM Sensors",
                        subtitle2: "Delivery on purchase"
                    }
                }
            }
        },
        g = {
            [s.ProductPurchaseOption.oneTimePurchase]: {
                title: "One Time Purchase",
                defaultProduct: s.ProductPurchaseType.otp_4_weeks_eu,
                directCheckout: !0,
                plans: {
                    [s.ProductPurchaseType.otp_4_weeks_eu]: {
                        displayName: "Ultrahuman M1 Live | 1 Month continuous glucose monitoring",
                        price: 189,
                        variantId: "gid://shopify/ProductVariant/49202716934462",
                        internalPid: s.ProductPurchaseType.otp_4_weeks_eu,
                        image: d,
                        secondaryImage: "",
                        title: "4 Weeks",
                        subtitle1: "2 CGM Sensors",
                        subtitle2: "Delivery on purchase",
                        checkoutUrl: "https://buy.stripe.com/28obLG32B9eA3jW7sx"
                    }
                }
            }
        };
    e.s(["M1_Euro", 0, m, "M1_Iceland", 0, h, "M1_Switzerland", 0, p, "NON_MCF_M1_Euro", 0, g], 83240);
    let f = {
        [s.ProductPurchaseOption.oneTimePurchase]: {
            title: "One Time Purchase",
            defaultProduct: s.ProductPurchaseType.otp_2_weeks_eu,
            directCheckout: !1,
            plans: {
                [s.ProductPurchaseType.otp_2_weeks_eu]: {
                    displayName: "Ultrahuman M1 Live | 2 Weeks Trial continuous glucose monitoring",
                    price: 109,
                    variantId: "gid://shopify/ProductVariant/49203361284414",
                    internalPid: s.ProductPurchaseType.otp_2_weeks_eu,
                    image: r,
                    secondaryImage: "",
                    title: "2 Weeks Trial",
                    subtitle1: "1 CGM Sensor",
                    subtitle2: "Delivery on purchase"
                },
                [s.ProductPurchaseType.otp_4_weeks_eu]: {
                    displayName: "Ultrahuman M1 Live | 1 Month continuous glucose monitoring",
                    price: 169,
                    variantId: "gid://shopify/ProductVariant/49202716934462",
                    internalPid: s.ProductPurchaseType.otp_4_weeks_eu,
                    image: d,
                    secondaryImage: "",
                    title: "4 Weeks",
                    subtitle1: "2 CGM Sensors",
                    subtitle2: "Delivery on purchase"
                }
            }
        }
    };
    e.s(["newM1Data", 0, f], 1431);
    let b = {
        [s.ProductPurchaseOption.oneTimePurchase]: {
            title: "Special Prices",
            defaultProduct: s.ProductPurchaseType.special_3_month_us,
            directCheckout: !0,
            outOfStock: !1,
            plans: {
                [s.ProductPurchaseType.special_1_month_us]: {
                    displayName: "1 Month",
                    price: 254.15,
                    strikedPrice: 299,
                    variantId: "",
                    internalPid: s.ProductPurchaseType.special_1_month_us,
                    image: d,
                    secondaryImage: "",
                    title: "1 Month",
                    subtitle1: "2 CGM Sensors",
                    subtitle2: "Delivery on purchase",
                    checkoutUrl: "https://buy.stripe.com/14k9ElgsGbUx7ccbOP?prefilled_promo_code=EOIKLRDK",
                    tag: (0, i.jsxs)(i.Fragment, {
                        children: ["save ", l.CurrencySymbol.usd, "45"]
                    })
                },
                [s.ProductPurchaseType.special_3_month_us]: {
                    displayName: "3 Months",
                    price: 594.15,
                    strikedPrice: 699,
                    variantId: "",
                    internalPid: s.ProductPurchaseType.special_3_month_us,
                    image: a,
                    secondaryImage: "",
                    title: "3 Months",
                    subtitle1: "6 CGM Sensors",
                    subtitle2: "Delivery on purchase",
                    checkoutUrl: "https://buy.stripe.com/bIY17P1xM1fT0NO7yJ?prefilled_promo_code=EOIKLRDK",
                    tag: (0, i.jsxs)(i.Fragment, {
                        children: ["save ", l.CurrencySymbol.usd, "104"]
                    })
                },
                [s.ProductPurchaseType.special_1_year_us]: {
                    displayName: "1 Year",
                    price: 2039.15,
                    strikedPrice: 2399,
                    variantId: "",
                    internalPid: s.ProductPurchaseType.special_1_year_us,
                    image: a,
                    secondaryImage: "",
                    title: "1 Year",
                    subtitle1: "26 CGM Sensors",
                    subtitle2: "Delivery on purchase",
                    checkoutUrl: "https://buy.stripe.com/5kAdUBccq4s5eEE6uG?prefilled_promo_code=EOIKLRDK",
                    tag: (0, i.jsxs)(i.Fragment, {
                        children: ["save ", l.CurrencySymbol.usd, "359"]
                    })
                }
            }
        },
        [s.ProductPurchaseOption.membership]: {
            title: "Subscription",
            defaultProduct: s.ProductPurchaseType.membership_1_sensor_month_us,
            directCheckout: !0,
            plans: {
                [s.ProductPurchaseType.membership_1_sensor_month_us]: {
                    displayName: "2 Sensors",
                    price: 211.65,
                    strikedPrice: 249,
                    variantId: "",
                    internalPid: s.ProductPurchaseType.membership_1_sensor_month_us,
                    checkoutUrl: "https://buy.stripe.com/dR64k1ccqcYBeEEaL0?prefilled_promo_code=HPVDNHEZ",
                    image: d,
                    secondaryImage: "",
                    title: "2 Sensors",
                    subtitle1: "2 CGM Sensors/Month",
                    subtitle2: "Offer on the 1st month"
                }
            }
        }
    };
    e.s(["newM1Data", 0, b], 20100);
    var x = e.i(91898);
    let w = {
        [t.ShopifyStore.IN]: c,
        [t.ShopifyStore.AE]: u,
        [t.ShopifyStore.GB]: f,
        [t.ShopifyStore.US]: b,
        [t.ShopifyStore.EU]: m
    };

    function y(e, i) {
        if (e !== t.ShopifyStore.EU) return w[e] || {};
        if (i) switch (i.toLowerCase()) {
            case "ch":
                return p;
            case "is":
                return h;
            default:
                if (!(0, x.isMCFCountry)(i)) return g
        }
        return m
    }
    e.s(["getM1DataForStore", () => y], 98314)
}, 3473, e => {
    "use strict";
    var t = e.i(91398);
    e.s(["FiveStarRating", 0, e => {
        let {
            className: i,
            style: r,
            rating: a
        } = e, o = Math.max(0, Math.min(5, a));
        return (0, t.jsxs)("svg", {
            className: i,
            style: r,
            width: "128px",
            height: "22px",
            viewBox: "0 0 93 16",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, t.jsx)("defs", {
                children: [void 0, void 0, void 0, void 0, void 0].map((e, i) => {
                    let r = 100 * Math.min(1, Math.max(0, o - i));
                    return (0, t.jsxs)("linearGradient", {
                        id: `grad-${a}-${i}`,
                        children: [(0, t.jsx)("stop", {
                            offset: `${r}%`,
                            stopColor: "#FD9400"
                        }), (0, t.jsx)("stop", {
                            offset: `${r}%`,
                            stopColor: "#E0E0E0"
                        })]
                    }, `grad-${a}-${i}`)
                })
            }), (0, t.jsx)("g", {
                fill: "#FD9400",
                children: [void 0, void 0, void 0, void 0, void 0].map((e, i) => (0, t.jsx)("path", {
                    d: "m8.412 0 2.571 5.305 5.84.806-4.25 4.085L13.61 16l-5.199-2.78L3.212 16l1.038-5.804L0 6.111l5.839-.806z",
                    transform: `translate(${18.823*i})`,
                    fill: `url(#grad-${a}-${i})`
                }, `star-${a}-${i}`))
            })]
        })
    }])
}, 8538, e => {
    "use strict";
    var t = e.i(91398);
    e.s(["PictureIcon", 0, e => (0, t.jsx)("svg", {
        className: e.className,
        style: e.style,
        width: "18",
        height: "16",
        viewBox: "0 0 18 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: (0, t.jsx)("path", {
            id: "vector",
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M7.16499 1.34687e-07C6.07456 -6.25493e-06 5.20733 -1.14024e-05 4.50766 0.057154C3.79118 0.115693 3.18024 0.238142 2.62085 0.523169C1.71767 0.983361 0.983361 1.71767 0.523169 2.62085C0.238142 3.18024 0.115693 3.79118 0.057154 4.50766C-1.14024e-05 5.20733 -6.25493e-06 6.07456 1.34687e-07 7.16499V8.83501C-6.25493e-06 9.92544 -1.14024e-05 10.7927 0.057154 11.4923C0.115693 12.2088 0.238142 12.8198 0.523169 13.3792C0.983361 14.2823 1.71767 15.0166 2.62085 15.4768C3.18024 15.7619 3.79118 15.8843 4.50766 15.9428C5.20731 16 6.07451 16 7.1649 16H10.435C11.5254 16 12.3927 16 13.0923 15.9428C13.8088 15.8843 14.4198 15.7619 14.9792 15.4768C15.8823 15.0166 16.6166 14.2823 17.0768 13.3792C17.3619 12.8198 17.4843 12.2088 17.5428 11.4923C17.6 10.7927 17.6 9.92549 17.6 8.8351V7.16497C17.6 6.07458 17.6 5.20731 17.5428 4.50766C17.4843 3.79118 17.3619 3.18024 17.0768 2.62085C16.6166 1.71767 15.8823 0.983361 14.9792 0.523169C14.4198 0.238142 13.8088 0.115693 13.0923 0.057154C12.3927 -1.14024e-05 11.5254 -6.25493e-06 10.435 1.34687e-07H7.16499ZM15.9943 5.8H15.9513C14.8828 5.79999 14.2978 5.79998 13.7978 5.85138C9.25277 6.31862 5.64434 9.86129 5.07683 14.3751C5.6321 14.3996 6.31499 14.4 7.2 14.4H10.4C11.5333 14.4 12.3352 14.3994 12.962 14.3482C13.5796 14.2977 13.9565 14.2022 14.2528 14.0512C14.8549 13.7444 15.3444 13.2549 15.6512 12.6528C15.8022 12.3565 15.8977 11.9796 15.9482 11.362C15.9994 10.7352 16 9.93331 16 8.8V7.2C16 6.66494 15.9999 6.20377 15.9943 5.8ZM5.2 3.6C4.31634 3.6 3.6 4.31634 3.6 5.2C3.6 6.08366 4.31634 6.8 5.2 6.8C6.08366 6.8 6.8 6.08366 6.8 5.2C6.8 4.31634 6.08366 3.6 5.2 3.6Z",
            fill: e.fill ? ? "#111111"
        })
    })])
}, 33714, e => {
    "use strict";
    var t = e.i(91398);
    e.s(["PlusCircleDark", 0, e => (0, t.jsx)("svg", {
        style: e.style,
        className: e.className,
        width: "16px",
        height: "16px",
        viewBox: "0 0 16 16",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        children: (0, t.jsx)("g", {
            id: "Sections",
            stroke: "none",
            strokeWidth: "1",
            fill: "none",
            fillRule: "evenodd",
            children: (0, t.jsx)("g", {
                id: "Section-/-Cart-/-Deployed",
                transform: "translate(-196.000000, -325.000000)",
                fill: e.fill ? ? "#000000",
                fillRule: "nonzero",
                children: (0, t.jsx)("g", {
                    id: "top",
                    transform: "translate(24.000000, 24.000000)",
                    children: (0, t.jsx)("g", {
                        id: "Group-11",
                        transform: "translate(0.000000, 124.000000)",
                        children: (0, t.jsx)("g", {
                            id: "Group-12",
                            transform: "translate(0.000000, 88.000000)",
                            children: (0, t.jsx)("g", {
                                id: "Group",
                                transform: "translate(120.000000, 85.000000)",
                                children: (0, t.jsx)("g", {
                                    id: "􀁌-copy",
                                    transform: "translate(52.000000, 4.000000)",
                                    children: (0, t.jsx)("path", {
                                        d: "M8,16 C9.09281046,16 10.1215686,15.7908497 11.0862745,15.372549 C12.0509804,14.9542484 12.9019608,14.3764706 13.6392157,13.6392157 C14.3764706,12.9019608 14.9542484,12.0509804 15.372549,11.0862745 C15.7908497,10.1215686 16,9.09281046 16,8 C16,6.90718954 15.7908497,5.87843137 15.372549,4.91372549 C14.9542484,3.94901961 14.3764706,3.09803922 13.6392157,2.36078431 C12.9019608,1.62352941 12.0496732,1.04575163 11.0823529,0.62745098 C10.1150327,0.209150327 9.08496732,0 7.99215686,0 C6.89934641,0 5.87058824,0.209150327 4.90588235,0.62745098 C3.94117647,1.04575163 3.09150327,1.62352941 2.35686275,2.36078431 C1.62222222,3.09803922 1.04575163,3.94901961 0.62745098,4.91372549 C0.209150327,5.87843137 0,6.90718954 0,8 C0,9.09281046 0.209150327,10.1215686 0.62745098,11.0862745 C1.04575163,12.0509804 1.62352941,12.9019608 2.36078431,13.6392157 C3.09803922,14.3764706 3.94901961,14.9542484 4.91372549,15.372549 C5.87843137,15.7908497 6.90718954,16 8,16 Z M8,14.6666667 C7.0745098,14.6666667 6.20915033,14.4941176 5.40392157,14.1490196 C4.59869281,13.8039216 3.89150327,13.3267974 3.28235294,12.7176471 C2.67320261,12.1084967 2.19738562,11.4013072 1.85490196,10.5960784 C1.5124183,9.79084967 1.34117647,8.9254902 1.34117647,8 C1.34117647,7.0745098 1.5124183,6.20915033 1.85490196,5.40392157 C2.19738562,4.59869281 2.67189542,3.89019608 3.27843137,3.27843137 C3.88496732,2.66666667 4.59084967,2.18954248 5.39607843,1.84705882 C6.20130719,1.50457516 7.06666667,1.33333333 7.99215686,1.33333333 C8.91764706,1.33333333 9.78300654,1.50457516 10.5882353,1.84705882 C11.3934641,2.18954248 12.1019608,2.66666667 12.7137255,3.27843137 C13.3254902,3.89019608 13.8039216,4.59869281 14.1490196,5.40392157 C14.4941176,6.20915033 14.6666667,7.0745098 14.6666667,8 C14.6666667,8.9254902 14.4954248,9.79084967 14.1529412,10.5960784 C13.8104575,11.4013072 13.3346405,12.1084967 12.7254902,12.7176471 C12.1163399,13.3267974 11.4078431,13.8039216 10.6,14.1490196 C9.79215686,14.4941176 8.9254902,14.6666667 8,14.6666667 Z M4.53333333,8.00784314 C4.53333333,8.19607843 4.59607843,8.3503268 4.72156863,8.47058824 C4.84705882,8.59084967 5.00915033,8.65098039 5.20784314,8.65098039 L7.33333333,8.65098039 L7.33333333,10.7921569 C7.33333333,10.9856209 7.39346405,11.1437908 7.51372549,11.2666667 C7.63398693,11.3895425 7.78823529,11.4509804 7.97647059,11.4509804 C8.1751634,11.4509804 8.3372549,11.3895425 8.4627451,11.2666667 C8.58823529,11.1437908 8.65098039,10.9856209 8.65098039,10.7921569 L8.65098039,8.65098039 L10.7843137,8.65098039 C10.9777778,8.65098039 11.1372549,8.59084967 11.2627451,8.47058824 C11.3882353,8.3503268 11.4509804,8.19607843 11.4509804,8.00784314 C11.4509804,7.80915033 11.3882353,7.64836601 11.2627451,7.5254902 C11.1372549,7.40261438 10.9777778,7.34117647 10.7843137,7.34117647 L8.65098039,7.34117647 L8.65098039,5.21568627 C8.65098039,5.01176471 8.58823529,4.84836601 8.4627451,4.7254902 C8.3372549,4.60261438 8.1751634,4.54117647 7.97647059,4.54117647 C7.78823529,4.54117647 7.63398693,4.60261438 7.51372549,4.7254902 C7.39346405,4.84836601 7.33333333,5.01176471 7.33333333,5.21568627 L7.33333333,7.34117647 L5.20784314,7.34117647 C5.00392157,7.34117647 4.84052288,7.40261438 4.71764706,7.5254902 C4.59477124,7.64836601 4.53333333,7.80915033 4.53333333,8.00784314 Z",
                                        id: "Shape"
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })])
}, 77439, e => {
    "use strict";
    var t = e.i(91398);
    e.s(["ShoppingTrolley", 0, e => (0, t.jsxs)("svg", {
        className: e.className,
        style: e.style,
        width: "30",
        height: "27",
        viewBox: "0 0 30 27",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [(0, t.jsx)("g", {
            "clip-path": "url(#clip0_2876_715)",
            children: (0, t.jsx)("path", {
                d: "M10.1074 20.2734H24.9512C25.3613 20.2734 25.7324 19.9219 25.7324 19.4629C25.7324 18.9941 25.3613 18.6523 24.9512 18.6523H10.3223C9.56055 18.6523 9.08203 18.1445 8.96484 17.334L6.8457 3.01758C6.72852 2.1875 6.42578 1.76758 5.32227 1.76758H0.791016C0.351562 1.76758 0 2.13867 0 2.57812C0 3.01758 0.351562 3.38867 0.791016 3.38867H5.20508L7.27539 17.5684C7.51953 19.2383 8.4082 20.2734 10.1074 20.2734ZM7.8418 15.8105H24.8926C26.6504 15.8105 27.5098 14.7559 27.7637 13.0371L28.7988 6.25C28.8184 6.10352 28.8477 5.89844 28.8477 5.80078C28.8477 5.23438 28.4375 4.86328 27.793 4.86328H6.64062L6.66992 6.48438H27.0215L26.0742 12.8613C25.957 13.6816 25.5371 14.1895 24.7656 14.1895H7.80273L7.8418 15.8105ZM11.2988 26.3574C12.4121 26.3574 13.291 25.4785 13.291 24.3652C13.291 23.252 12.4121 22.373 11.2988 22.373C10.1855 22.373 9.29688 23.252 9.29688 24.3652C9.29688 25.4785 10.1855 26.3574 11.2988 26.3574ZM22.9492 26.3574C24.0625 26.3574 24.9512 25.4785 24.9512 24.3652C24.9512 23.252 24.0625 22.373 22.9492 22.373C21.8359 22.373 20.9375 23.252 20.9375 24.3652C20.9375 25.4785 21.8359 26.3574 22.9492 26.3574Z",
                fill: e.fill ? ? "#000000"
            })
        }), (0, t.jsx)("defs", {
            children: (0, t.jsx)("clipPath", {
                id: "clip0_2876_715",
                children: (0, t.jsx)("rect", {
                    width: "29.8438",
                    height: "26.3574",
                    fill: e.fill ? ? "#000000"
                })
            })
        })]
    })])
}, 89574, e => {
    "use strict";
    var t = e.i(91398);
    e.s(["HandWithRing", 0, e => (0, t.jsxs)("svg", {
        className: e.className,
        style: e.style,
        width: "22",
        height: "29",
        viewBox: "0 0 22 29",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [(0, t.jsxs)("g", {
            "clip-path": "url(#clip0_2880_1122)",
            children: [(0, t.jsx)("path", {
                d: "M10.459 27.0117C14.7754 27.0117 17.832 24.668 19.4336 20.1367L21.6992 13.7793C21.8359 13.3691 21.9043 12.9883 21.9043 12.627C21.9043 11.3574 20.9473 10.459 19.7168 10.459C18.877 10.459 18.1152 10.9668 17.7051 11.9531L16.7188 14.375C16.6992 14.4434 16.6602 14.4727 16.6113 14.4727C16.543 14.4727 16.5137 14.4238 16.5137 14.3555V3.85742C16.5137 2.43164 15.625 1.54297 14.3066 1.54297C13.7891 1.54297 13.3203 1.72852 12.9688 2.08008C12.832 0.810547 12.041 0 10.8105 0C9.60938 0 8.76953 0.839844 8.62305 2.06055C8.29102 1.71875 7.8418 1.54297 7.36328 1.54297C6.12305 1.54297 5.27344 2.42188 5.27344 3.78906V5.2832C4.94141 4.91211 4.42383 4.72656 3.89648 4.72656C2.64648 4.72656 1.77734 5.64453 1.77734 7.02148V17.7637C1.77734 23.623 5.32227 27.0117 10.459 27.0117ZM10.4102 25.5078C6.02539 25.5078 3.22266 22.7148 3.22266 17.6074V7.16797C3.22266 6.5625 3.58398 6.14258 4.16016 6.14258C4.72656 6.14258 5.13672 6.5625 5.13672 7.16797V13.5352C5.13672 13.9648 5.46875 14.2383 5.82031 14.2383C6.20117 14.2383 6.5332 13.9648 6.5332 13.5352V3.96484C6.5332 3.35938 6.88477 2.94922 7.46094 2.94922C8.03711 2.94922 8.44727 3.35938 8.44727 3.96484V12.8906C8.44727 13.3301 8.76953 13.5938 9.13086 13.5938C9.50195 13.5938 9.83398 13.3301 9.83398 12.8906V2.44141C9.83398 1.83594 10.2344 1.39648 10.8105 1.39648C11.3672 1.39648 11.748 1.83594 11.748 2.44141V7.67091V12.9004C11.748 13.291 12.0508 13.5938 12.4414 13.5938C12.832 13.5938 13.1445 13.291 13.1445 12.9004V3.96484C13.1445 3.35938 13.5449 2.94922 14.1211 2.94922C14.6875 2.94922 15.0586 3.35938 15.0586 3.96484V16.2891C15.0586 16.875 15.4199 17.2168 15.918 17.2168C16.3477 17.2168 16.6992 17.0215 16.9531 16.4453L18.7207 12.4219C18.9746 11.8164 19.4727 11.6016 19.9707 11.7871C20.498 11.9727 20.6641 12.4902 20.4199 13.1445L18.1055 19.6582C16.6309 23.7891 13.9453 25.5078 10.4102 25.5078Z",
                fill: e.fill ? ? "#000000"
            }), (0, t.jsx)("path", {
                d: "M12.5 10.5H16",
                stroke: e.fill ? ? "#000000",
                "stroke-width": "1.5"
            }), (0, t.jsx)("path", {
                d: "M6 9H9.5",
                stroke: e.fill ? ? "#000000",
                "stroke-width": "1.5"
            })]
        }), (0, t.jsx)("defs", {
            children: (0, t.jsx)("clipPath", {
                id: "clip0_2880_1122",
                children: (0, t.jsx)("rect", {
                    width: "21.9043",
                    height: "28.1348",
                    fill: e.fill ? ? "#000000"
                })
            })
        })]
    })])
}, 11734, e => {
    "use strict";
    var t = e.i(91398);
    e.s(["WarningTriangle", 0, e => (0, t.jsx)("svg", {
        className: e.className,
        style: e.style,
        width: "14",
        height: "13",
        viewBox: "0 0 14 13",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: (0, t.jsx)("path", {
            d: "M8.42017 0.833269L13.7601 10.377C13.9116 10.6546 14 10.9198 14 11.1976C14 12.1317 13.3436 12.8638 12.3209 12.8638H1.65374C0.631196 12.8638 0 12.1317 0 11.1976C0 10.9198 0.0757388 10.6546 0.227229 10.3896L5.55454 0.833269C5.85751 0.277799 6.43822 0 6.99367 0C7.54912 0 8.10457 0.277799 8.42017 0.833269ZM5.94588 9.93512C5.94588 10.5158 6.42559 10.9828 6.99367 10.9828C7.56175 10.9828 8.04145 10.5158 8.04145 9.93512C8.04145 9.37965 7.57438 8.89993 6.99367 8.89993C6.43822 8.89993 5.94588 9.36698 5.94588 9.93512ZM6.14786 3.79987L6.24886 7.32194C6.26148 7.73857 6.56446 8.04145 6.99367 8.04145C7.42288 8.04145 7.72585 7.73857 7.73848 7.32194L7.83947 3.79987C7.8521 3.30748 7.51125 2.95406 6.99367 2.95406C6.47609 2.95406 6.13523 3.30748 6.14786 3.79987Z",
            fill: e.fill ? ? "#000000"
        })
    })])
}, 43362, e => {
    "use strict";
    var t = e.i(91398);
    e.s(["Battery", 0, e => (0, t.jsxs)("svg", {
        className: e.className,
        style: e.style,
        width: "31",
        height: "14",
        viewBox: "0 0 31 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [(0, t.jsx)("mask", {
            id: "path-1-inside-1_1786_1712",
            fill: "white",
            children: (0, t.jsx)("rect", {
                x: "2.67725",
                y: "2",
                width: "22.5",
                height: "10",
                rx: "1"
            })
        }), (0, t.jsx)("rect", {
            x: "2.67725",
            y: "2",
            width: "22.5",
            height: "10",
            rx: "1",
            stroke: "black",
            strokeWidth: "2.5",
            strokeLinejoin: "round",
            mask: "url(#path-1-inside-1_1786_1712)"
        }), (0, t.jsx)("path", {
            d: "M29.4345 2.86328H28.4138V11.136H29.4345C29.9618 11.136 30.3229 10.7084 30.3229 10.1808V3.81846C30.3229 3.29092 29.9618 2.86328 29.4345 2.86328Z",
            fill: "black"
        }), (0, t.jsx)("path", {
            d: "M2.92329 14H25.1588C26.3968 14 27.4045 12.9923 27.4045 11.754V2.24604C27.4045 1.00768 26.3968 0 25.1585 0H2.92329C1.68493 0 0.677246 1.00768 0.677246 2.24604V11.7543C0.677246 12.9923 1.68493 14 2.92329 14ZM1.94997 2.24604C1.94997 1.70927 2.38652 1.27273 2.92329 1.27273H25.1588C25.6952 1.27273 26.1318 1.70927 26.1318 2.24604V11.7543C26.1318 12.2907 25.6952 12.7273 25.1585 12.7273H2.92329C2.38652 12.7273 1.94997 12.2907 1.94997 11.754V2.24604Z",
            fill: "black"
        })]
    })])
}, 90098, e => {
    "use strict";
    var t = e.i(91398);
    e.s(["BoxOutline", 0, e => (0, t.jsxs)("svg", {
        className: e.className,
        style: e.style,
        width: "26",
        height: "28",
        viewBox: "0 0 26 28",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [(0, t.jsx)("g", {
            "clip-path": "url(#clip0_2876_710)",
            children: (0, t.jsx)("path", {
                d: "M1.63086 21.4246L11.6406 27.0496C12.3242 27.4207 12.9492 27.4304 13.6328 27.0496L23.6426 21.4246C24.7363 20.8093 25.2734 20.1746 25.2734 18.5632V8.30933C25.2734 7.17652 24.834 6.46362 23.8965 5.93628L14.668 0.721435C13.3105 -0.0500487 11.9629 -0.0500487 10.5957 0.721435L1.37695 5.93628C0.439453 6.46362 0 7.17652 0 8.30933V18.5632C0 20.1746 0.537109 20.8093 1.63086 21.4246ZM2.63672 20.0281C1.875 19.6082 1.66016 19.198 1.66016 18.4949V8.68042L11.7871 14.3933V25.1648L2.63672 20.0281ZM22.6367 20.0281L13.4863 25.1648V14.3933L23.6133 8.68042V18.4949C23.6133 19.198 23.3984 19.6082 22.6367 20.0281ZM12.6367 12.8797L2.53906 7.22534L6.77734 4.823L16.8945 10.5066L12.6367 12.8797ZM18.623 9.53003L8.47656 3.8562L11.3672 2.23511C12.2266 1.74683 13.0469 1.73706 13.9062 2.23511L22.7344 7.22534L18.623 9.53003Z",
                fill: e.fill ? ? "#000000"
            })
        }), (0, t.jsx)("defs", {
            children: (0, t.jsx)("clipPath", {
                id: "clip0_2876_710",
                children: (0, t.jsx)("rect", {
                    width: "25.6348",
                    height: "27.3316",
                    fill: "white"
                })
            })
        })]
    })])
}, 60910, e => {
    "use strict";
    var t = e.i(91398);
    e.s(["CircleTick", 0, e => (0, t.jsxs)("svg", {
        className: e.className,
        style: e.style,
        width: "26",
        height: "26",
        viewBox: "0 0 26 26",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [(0, t.jsxs)("g", {
            "clip-path": "url(#clip0_2876_726)",
            children: [(0, t.jsx)("path", {
                d: "M12.7148 25.4395C19.7363 25.4395 25.4395 19.7461 25.4395 12.7246C25.4395 5.70312 19.7363 0 12.7148 0C5.69336 0 0 5.70312 0 12.7246C0 19.7461 5.69336 25.4395 12.7148 25.4395ZM12.7148 23.623C6.68945 23.623 1.81641 18.75 1.81641 12.7246C1.81641 6.69922 6.68945 1.82617 12.7148 1.82617C18.7402 1.82617 23.6133 6.69922 23.6133 12.7246C23.6133 18.75 18.7402 23.623 12.7148 23.623Z",
                fill: e.fill ? ? "#000000"
            }), (0, t.jsx)("path", {
                d: "M11.3379 18.7012C11.6992 18.7012 11.9922 18.5352 12.207 18.2031L18.1934 8.81836C18.3203 8.62305 18.4473 8.37891 18.4473 8.14453C18.4473 7.66602 18.0176 7.34375 17.5781 7.34375C17.2949 7.34375 17.0215 7.51953 16.8262 7.83203L11.2988 16.6113L8.54492 13.1641C8.29102 12.832 8.04688 12.7344 7.75391 12.7344C7.28516 12.7344 6.91406 13.1152 6.91406 13.5938C6.91406 13.8281 7.01172 14.0625 7.16797 14.2676L10.4297 18.2031C10.7031 18.5547 10.9766 18.7012 11.3379 18.7012Z",
                fill: e.fill ? ? "#000000"
            })]
        }), (0, t.jsx)("defs", {
            children: (0, t.jsx)("clipPath", {
                id: "clip0_2876_726",
                children: (0, t.jsx)("rect", {
                    width: "25.8008",
                    height: "25.459",
                    fill: e.fill ? ? "#000000"
                })
            })
        })]
    })])
}, 64447, e => {
    "use strict";
    var t = e.i(91398),
        i = e.i(21666);
    e.s(["RespiratoryLogo", 0, () => (0, t.jsx)(i.CustomImage, {
        src: "web_v2/powerplugs/icons/respiratory-logo.png",
        alt: "respiratory-logo",
        width: 100,
        height: 100
    })])
}, 81945, e => {
    "use strict";
    var t = e.i(91398);
    e.s(["ArrowTopRight", 0, e => (0, t.jsx)("svg", {
        className: e.className,
        style: e.style,
        width: "22",
        height: "23",
        viewBox: "0 0 22 23",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: (0, t.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M21.9363 1.97422V0.75366L20.7158 0.753662H1.72831L1.72831 3.19478H17.9724L0.866059 20.3011L2.59219 22.0272L19.4952 5.1242V20.9617L21.9363 20.9617V1.97422Z",
            fill: e.fill ? ? "#ffffff"
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
}, 37119, e => {
    "use strict";
    var t = e.i(91398);
    e.s(["FastForwardWhite", 0, e => (0, t.jsxs)("svg", {
        style: e.style,
        className: e.className,
        width: "25",
        height: "16",
        viewBox: "0 0 25 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [(0, t.jsx)("path", {
            d: "M1.09715 15.7624C0.463731 16.2362 0.000313613 15.9797 0.000313613 15.1865L0.000313613 0.810507C0.000313613 0.0251681 0.463553 -0.236456 1.09715 0.234626L10.2589 7.13491C10.5558 7.31987 10.7374 7.64399 10.7402 7.99382C10.7428 8.34367 10.5662 8.67053 10.2718 8.86003L1.09715 15.7624Z",
            fill: "white"
        }), (0, t.jsx)("path", {
            d: "M14.8374 15.7624C14.204 16.2362 13.7405 15.9797 13.7405 15.1865L13.7405 0.810507C13.7405 0.0251681 14.2038 -0.236456 14.8374 0.234626L23.9991 7.13491C24.2962 7.31987 24.4777 7.64399 24.4804 7.99382C24.483 8.34367 24.3064 8.67053 24.0123 8.86003L14.8374 15.7624Z",
            fill: "white",
            fillOpacity: "0.4"
        })]
    })])
}, 89824, e => {
    "use strict";
    var t = e.i(91398);
    e.s(["RewindWhite", 0, e => (0, t.jsxs)("svg", {
        style: e.style,
        className: e.className,
        width: "25",
        height: "16",
        viewBox: "0 0 25 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [(0, t.jsx)("path", {
            d: "M23.3833 0.237632C24.0167 -0.236208 24.4802 0.020349 24.4802 0.813512V15.1895C24.4802 15.9748 24.0169 16.2365 23.3833 15.7654L14.2216 8.86509C13.9247 8.68013 13.743 8.35601 13.7403 8.00618C13.7377 7.65633 13.9143 7.32947 14.2086 7.13997L23.3833 0.237632Z",
            fill: "white"
        }), (0, t.jsx)("path", {
            d: "M9.64308 0.237632C10.2765 -0.236208 10.7399 0.020349 10.7399 0.813512V15.1895C10.7399 15.9748 10.2767 16.2365 9.64308 15.7654L0.481346 8.86509C0.184267 8.68013 0.00278525 8.35601 2.73835e-05 8.00618C-0.00252893 7.65633 0.17404 7.32947 0.468211 7.13997L9.64308 0.237632Z",
            fill: "white",
            fillOpacity: "0.4"
        })]
    })])
}, 66442, e => {
    "use strict";
    var t = e.i(91398),
        i = e.i(91788),
        r = e.i(60814),
        a = e.i(9674),
        o = e.i(5917),
        n = e.i(89824),
        s = e.i(37119);
    let l = (0, r.default)(({
        className: e,
        videoProps: r,
        playable: l,
        playCallback: c,
        pauseCallback: d,
        smallBtn: u = !1,
        borderLessControls: p = !1
    }) => {
        let h = (0, i.useRef)(null),
            m = (0, i.useRef)(null),
            [g, f] = (0, i.useState)(!1),
            [b, x] = (0, i.useState)(!0),
            w = (e, t) => {
                e.preventDefault(), e.stopPropagation(), h.current && ("forward" == t ? h.current.currentTime = h.current.currentTime + 10 : "backward" == t && (h.current.currentTime = h.current.currentTime - 10), h.current.play())
            };
        return (0, i.useEffect)(() => {
            h.current && (l || h.current.pause())
        }, [l]), (0, i.useEffect)(() => {
            h.current && m.current && (h.current.onplay = () => f(!0), h.current.onpause = () => f(!1), h.current.ontimeupdate = () => {
                h.current && m.current && (m.current.style.width = `${h.current.currentTime/h.current.duration*100}%`)
            })
        }, []), (0, i.useEffect)(() => {
            g ? x(!1) : x(!0)
        }, [g]), (0, t.jsxs)("div", {
            className: `${e} ${b?"controlsActive":""} ${g?"playing":""}`,
            onMouseEnter: () => x(!0),
            onClick: e => {
                h.current && (e.preventDefault(), h.current.paused || !h.current.played ? (h.current.play(), c && c()) : (h.current.pause(), d && d()))
            },
            onMouseLeave: () => {
                g && x(!1)
            },
            "aria-hidden": "true",
            children: [(0, t.jsx)("video", { ...r,
                ref: h,
                controls: !1,
                playsInline: !0
            }), (0, t.jsxs)("div", {
                className: "controlButtons",
                children: [(0, t.jsxs)("button", {
                    onClick: e => w(e, "backward"),
                    className: `controlButtonElement secondaryButtons ${p&&"borderless"}`,
                    children: [(0, t.jsx)(n.RewindWhite, {}), 10]
                }), (0, t.jsx)("button", {
                    className: `${u?"controlButtonElement small-btn":"controlButtonElement"} ${p&&"borderless"}`,
                    children: g ? (0, t.jsx)(o.PauseWhite, {}) : (0, t.jsx)(a.PlayWhite, {})
                }), (0, t.jsxs)("button", {
                    onClick: e => w(e, "forward"),
                    className: `controlButtonElement secondaryButtons ${p&&"borderless"}`,
                    children: [10, (0, t.jsx)(s.FastForwardWhite, {})]
                })]
            }), (0, t.jsx)("div", {
                className: "seekbar",
                children: (0, t.jsx)("span", {
                    ref: m
                })
            })]
        })
    }).withConfig({
        displayName: "VideoPlayer",
        componentId: "sc-2dfa2654-0"
    })
    `
  position: relative;
  z-index: 2;

  &.controlsActive {
    .controlButtons {
      opacity: 1;
      z-index: 1;
    }

    .seekbar {
      height: 8px;
    }
  }

  video {
    width: 100%;
    height: 100%;
  }

  .seekbar {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background-color: rgba(255, 255, 255, 0.2);
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
    padding: 0;

    transition: all 0.1s ease-in-out;

    span {
      display: block;
      padding: 1px;
      height: 100%;
      width: 0;
      background-color: #ffffff;
    }
  }

  .controlButtons {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%);

    z-index: -1;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;

    display: flex;
    flex-direction: row;
    gap: 24px;

    .controlButtonElement {
      position: static !important;
      width: 80px;
      height: 80px;
      padding: 4px;
      border-radius: 50%;
      background-color: rgba(0, 0, 0, 0.4);
      -webkit-backdrop-filter: blur(20px);
      backdrop-filter: blur(20px);
      border: 2px solid rgba(255, 255, 255, 0.2) !important;

      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        margin-top: 4px;
        width: 50%;
        height: auto;
      }

      &.secondaryButtons {
        height: 48px;
        width: 48px;

        display: flex;
        justify-content: center;
        align-items: center;
        gap: 4px;
        font-size: 10px;
        font-weight: 500;

        svg {
          margin-top: 1px;
          width: 30%;
        }
      }
    }

    .borderless {
      border-style: none !important;
    }

    .small-btn {
      width: 80px;
      height: 80px;

      @media (max-width: ${({theme:e})=>e.global.phone.maxWidth}) {
        width: 66px;
        height: 66px;
      }
    }
  }
`;
    e.s(["VideoPlayer", 0, l])
}, 57706, e => {
    "use strict";
    var t = e.i(53147),
        i = e.i(60814);
    let r = (0, i.default)(t.default).withConfig({
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
`, n = i.default.button.withConfig({
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
`, s = (0, i.default)(t.default).withConfig({
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
`, l = i.default.button.withConfig({
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
     
`, c = i.css `
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
  ${c};
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
    let d = (0, i.default)(t.default).withConfig({
        displayName: "CTAComponent__BuyNowButton",
        componentId: "sc-87d441a3-7"
    })
    `
  ${c};
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
    e.s(["BuyNowButton", 0, d, "CTAButton", 0, l, "CTALink", 0, r, "FlatButton", 0, n, "FlatLink", 0, s, "PrimaryCTA", 0, a, "SecondaryCTA", 0, o])
}, 86332, e => {
    "use strict";
    var t = e.i(91398),
        i = e.i(91788),
        r = e.i(60814),
        a = e.i(53147),
        o = e.i(57706);
    let n = r.css `
  border: 1px solid rgba(255, 255, 255, 0.25);
  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.06);
  -webkit-backdrop-filter: blur(6px);
  backdrop-filter: blur(6px);
`,
        s = (0, r.default)(o.CTAButton).withConfig({
            displayName: "ButtonV2__StyledCTA",
            componentId: "sc-9dff9bcb-0"
        })
    `
  /* Ensure icon and text align perfectly */
  display: inline-flex !important;
  align-items: center;
  justify-content: center;
  gap: 10px;
  line-height: 1;
  vertical-align: middle;
  margin-top: 0 !important; /* Override inherited margin from CTAButton */

  svg {
    display: block; /* remove baseline gaps */
  }

  ${({variant:e})=>{switch(e){case"white":return r.css`
    background: #ffffff;
    color: #000000;

          &:disabled {
            background: # f0f0f0;
    color: #b3b3b3;
    cursor: not - allowed;
    opacity: 0.6;
}
`;case"blue":case void 0:return r.css`
background: #0882ff;
          color: # ffffff;

&
: disabled {
    background: #0882ff;
            color: # ffffff;
    cursor: not - allowed;
    opacity: 0.4;
}
`;case"transparentDark":return r.css`
background: rgba(0, 0, 0, 0.07);
color: #000000;
          -webkit-backdrop-filter: blur(6px);
          backdrop-filter: blur(6px);

          &:disabled {
            background: rgba(0, 0, 0, 0.04);
            color: # 000000;
cursor: not - allowed;
opacity: 0.4;
}
`;case"transparentLight":return r.css`
background: rgba(255, 255, 255, 0.13);
color: #ffffff; -
webkit - backdrop - filter: blur(6 px);
backdrop - filter: blur(6 px);

&
: disabled {
    background: rgba(255, 255, 255, 0.08);
    color: #ffffff;
    cursor: not - allowed;
    opacity: 0.4;
}
`;case"glassLight":return r.css`
background: rgba(255, 255, 255, 0.08);
color: #ffffff;
$ {
    n
}

&
: disabled {
    background: rgba(255, 255, 255, 0.05);
    color: #ffffff;
    cursor: not - allowed;
    opacity: 0.4;
    border: 1 px solid rgba(255, 255, 255, 0.15);
}
`;case"glassDark":return r.css`
background: rgba(255, 255, 255, 0.08);
color: #000000;
          ${n}

          &:disabled {
            background: rgba(255, 255, 255, 0.05);
            color: # 000000;
cursor: not - allowed;
opacity: 0.4;
border: 1 px solid rgba(255, 255, 255, 0.15);
}
`;case"black":return r.css`
background: #000000;
          color: # ffffff;

&
: disabled {
    background: #000000;
            color: # ffffff;
    cursor: not - allowed;
    opacity: 0.4;
}
`;case"flat":return r.css`
background: transparent;
color: #000000;
          borderradius: 0;

          &:disabled {
            color: # 000000;
cursor: not - allowed;
opacity: 0.7;
}
`}}}
  &:not(:disabled):hover {
    transform: scale(1.02);
  }
`, l = r.default.span.withConfig({
    displayName: "ButtonV2__IconSlot",
    componentId: "sc-9dff9bcb-1"
})
`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
  margin: 0 !important; /* spacing handled by parent gap */
  pointer-events: none; /* ensure clicks pass through to button */
`, c = r.default.span.withConfig({
    displayName: "ButtonV2__Label",
    componentId: "sc-9dff9bcb-2"
})
`
  display: inline-flex;
  align-items: center;
  line-height: 1; /* avoid extra baseline space */
  pointer-events: none; /* ensure clicks pass through to button */
`, d = i.default.forwardRef(({
    children: e,
    label: i,
    href: r,
    linkProps: o,
    componentType: n,
    onClick: d,
    startIcon: u,
    endIcon: p,
    ...h
}, m) => {
    let g = (n ? ? (r ? "link" : "button")) === "link",
        f = (0, t.jsxs)(s, {
            ref: m,
            onClick: d,
            ...h,
            type: h.type ? ? "button",
            children: [u ? (0, t.jsx)(l, {
                side: "start",
                children: u
            }) : null, (0, t.jsx)(c, {
                children: i ? ? e
            }), p ? (0, t.jsx)(l, {
                side: "end",
                children: p
            }) : null]
        });
    return g && r ? (0, t.jsx)(a.default, {
        href: r,
        ...o,
        children: f
    }) : f
});
d.displayName = "ButtonV2", e.s(["ButtonV2", 0, d])
}, 28679, e => {
"use strict";
var t = e.i(91398);
e.s(["ChevronRight", 0, e => (0, t.jsx)("svg", {
className: e.className,
style: e.style,
width: "7",
height: "12",
viewBox: "0 0 7 12",
fill: "none",
xmlns: "http://www.w3.org/2000/svg",
children: (0, t.jsx)("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M0 1.29054L4.54713 6.01684L0.030223 10.8033L1.19687 12L7 6.07697L1.2566 0.0643415L0 1.29054Z",
    fill: e.fill || "black"
})
})])
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
}, 83268, e => {
"use strict";
var t = e.i(91398);
e.s(["ClueLogo", 0, () => (0, t.jsx)("svg", {
xmlns: "http://www.w3.org/2000/svg",
fill: "none",
viewBox: "0 0 253 253",
children: (0, t.jsx)("g", {
    fill: "#ee3d3d",
    children: (0, t.jsx)("path", {
        d: "m228.127 63.1682c-11.782-20.2924-32.402-31.7478-54.331-32.4024-11.455-18.3285-32.075-30.7658-55.313-30.7658-23.5653 0-43.8576 12.4373-55.313 30.7658-21.6016.6546-42.5485 12.4373-54.33119 32.4024-11.78267 20.2923-11.12808 44.1848-.98189 63.1678-10.47348 19.638-10.80078 43.531.98189 63.496 11.78269 20.292 32.40229 31.748 54.33119 32.402 11.4554 18.329 32.075 30.766 55.313 30.766s43.858-12.437 55.313-30.766c21.602-.654 42.549-12.437 54.331-32.402 11.783-20.293 11.128-44.185.982-63.168 10.146-19.311 10.474-43.2035-.982-63.4958zm-50.076-24.5472c18.001 1.9637 34.366 12.4372 43.53 28.4747 9.492 16.3648 9.819 35.6753 2.946 51.7133-5.237-7.201-12.11-13.42-19.965-18.002-8.51-4.9092-17.347-7.5276-26.511-8.5095 3.928-8.1824 5.891-17.3467 5.891-27.1655-.327-9.1643-2.291-18.3286-5.891-26.511zm0 61.532c7.855.982 15.383 3.273 22.256 7.2 8.183 4.91 15.056 11.456 19.965 18.983-4.909 7.528-11.455 14.401-19.965 19.311-6.873 3.927-14.401 6.546-22.256 7.2 3.6-8.182 5.564-17.019 5.564-26.511 0-9.491-1.964-18.001-5.564-26.183zm-59.568-92.62519c18.983 0 35.675 9.16429 46.149 23.23799-8.837.9819-17.674 3.6003-25.857 8.5097-8.509 4.9095-15.383 11.1281-20.619 18.6559-5.237-7.5278-12.11-13.7464-20.6199-18.6559-8.1824-4.5821-17.0194-7.5278-25.8564-8.5097 10.8008-13.7464 27.8202-23.23799 46.8033-23.23799zm10.801 138.11919c10.146 8.51 22.256 13.746 35.348 15.055-9.164 12.438-23.566 21.275-39.93 22.911 5.236-11.782 7.2-24.874 4.582-37.966zm0-38.294c2.291-13.0917.654-26.1835-4.582-37.9662 16.364 1.9638 30.438 10.4735 39.93 22.9107-12.765 1.6365-25.202 6.546-35.348 15.0555zm-17.347 76.587c-16.3647-1.963-30.4384-10.473-39.93-22.91 12.7645-1.309 25.2018-6.546 35.348-15.056-2.291 12.765-.655 25.857 4.582 37.966zm-4.582-76.587c-10.1462-8.5095-22.2562-13.7463-35.348-15.0555 9.1643-12.4372 23.5653-21.2742 39.93-22.9107-5.237 11.7827-6.873 25.2018-4.582 37.9662zm-39.9302-69.0593c9.1643.3273 18.3286 2.9456 26.511 7.5278 6.8732 3.9275 12.7642 9.4916 17.6742 15.7102-18.9834 1.9638-35.3482 12.1099-45.8216 26.511-2.9457-7.2005-4.9095-14.7283-4.9095-22.9107 0-9.4916 2.2911-18.6559 6.5459-26.8383zm-1.6364 65.1323c7.5278 10.473 18.3285 18.655 30.7658 22.91-12.4373 4.582-22.9107 12.438-30.7658 22.911-2.9457-7.2-4.9095-14.728-4.9095-22.911 0-8.182 1.6365-15.71 4.9095-22.91zm-6.8733 110.953c-18.0013-1.964-34.3661-12.437-43.5304-28.475-9.49156-16.365-9.81886-35.675-2.9456-51.713 5.2367 7.201 12.1099 13.42 19.965 18.002 8.5097 4.909 17.3467 7.528 26.511 8.509-3.9275 8.183-5.8913 17.347-5.8913 27.166 0 9.492 2.2911 18.329 5.8913 26.511zm0-61.204c-7.8551-.982-15.3829-3.273-22.2561-7.201-8.5097-4.909-15.0556-11.455-19.9651-19.31 4.9095-7.528 11.4554-14.401 19.9651-19.311 6.8732-3.927 14.401-6.546 22.2561-7.2-3.6002 8.182-5.564 17.019-5.564 26.511 0 9.491 1.9638 18.328 5.564 26.511zm-26.1837-52.368c-8.1824 4.582-15.0556 10.801-19.965 18.002-6.87326-16.038-6.54597-35.3485 2.9456-51.7133 9.1643-15.7102 25.5291-26.1837 43.5304-28.4747-3.6002 8.1824-5.564 17.0194-5.564 26.511 0 9.8188 2.2911 18.9831 5.8913 27.1655-9.4916.9819-18.6559 3.6003-26.8383 8.5095zm28.1475 87.061c0-8.182 1.6365-16.037 4.9095-22.911 10.4734 14.401 27.1655 24.548 45.8216 26.511-4.582 6.219-10.474 11.456-17.6742 15.711-8.1824 4.582-17.3467 7.2-26.511 7.527-4.2548-7.855-6.5459-17.019-6.5459-26.838zm57.6041 57.604c-18.9831 0-35.6752-9.164-46.1487-23.238 8.837-.982 17.674-3.6 25.8564-8.51 8.5093-4.909 15.3833-11.128 20.6193-18.655 5.237 7.527 12.11 13.746 20.62 18.655 8.182 4.583 17.019 7.528 25.856 8.51-11.128 14.074-27.82 23.238-46.803 23.238zm50.731-30.766c-9.164-.327-18.329-2.945-26.511-7.527-6.873-3.928-12.765-9.492-17.674-15.711 18.983-1.963 35.348-12.11 45.821-26.511 2.946 7.201 4.91 14.729 4.91 22.911.327 9.819-2.291 18.983-6.546 26.838zm1.964-65.132c-7.528-10.473-18.329-18.655-30.766-22.91 12.437-4.583 22.911-12.438 30.766-22.911 2.945 7.2 4.909 14.728 4.909 22.911 0 8.182-1.964 16.037-4.909 22.91zm0-61.204c-10.474-14.4011-27.166-24.5472-45.822-26.511 4.582-6.2186 10.474-11.4554 17.674-15.7102 8.183-4.5822 17.347-7.2005 26.511-7.5278 4.255 7.8551 6.546 17.0194 6.546 26.8382 0 7.8552-1.964 15.7103-4.909 22.9108zm50.076 97.862c-9.164 15.71-25.529 26.183-43.53 28.474 3.6-8.182 5.564-17.019 5.564-26.511 0-9.819-2.291-18.983-5.892-27.165 9.165-.982 18.002-3.601 26.511-8.51 8.183-4.582 15.056-10.801 19.965-18.001.982 2.618 1.964 5.236 2.946 8.182 4.255 14.728 2.291 30.111-5.564 43.531z"
    })
})
})])
}, 81416, e => {
"use strict";
var t = e.i(91398);
e.s(["SupportLogo", 0, e => (0, t.jsx)("svg", {
className: e.className,
style: e.style,
xmlns: "http://www.w3.org/2000/svg",
width: "30",
height: "30",
fill: "none",
stroke: "#000",
"stroke-linecap": "round",
"stroke-linejoin": "round",
"stroke-width": "1",
"aria-labelledby": "supportIconTitle",
color: "#000",
viewBox: "-2.4 -2.4 28.8 28.8",
children: (0, t.jsxs)("g", {
    id: "SVGRepo_iconCarrier",
    children: [(0, t.jsx)("title", {
        id: "supportIconTitle",
        children: "Support"
    }), (0, t.jsx)("path", {
        d: "M21 12h-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2v-4a9 9 0 0 0-18 0v4a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H3"
    }), (0, t.jsx)("path", {
        d: "M21 14v4c0 2-.667 3-2 3h-5"
    })]
})
})])
}, 4745, e => {
"use strict";
var t = e.i(91398);
e.s(["PlayStoreLogo", 0, e => (0, t.jsx)("svg", {
className: e.className,
style: e.style,
xmlns: "http://www.w3.org/2000/svg",
width: "16",
height: "16",
viewBox: "0 0 16 16",
fill: "none",
children: (0, t.jsx)("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M1.06159 0.232178L8.68095 7.65031H8.68185L11.3824 5.02163L2.65672 0.246412C2.39129 0.0952884 2.09151 0.0106239 1.78424 0C1.52406 0.000180556 1.27079 0.0815535 1.06159 0.232178ZM0.715925 15.4077L0.716248 15.4083L0.713508 15.4101L0.715925 15.4077ZM0.715925 15.4077C0.566566 15.1441 0.492241 14.8464 0.500641 14.5454V1.46424C0.499406 1.26567 0.530235 1.06814 0.592 0.878898L8.1136 8.20453L0.715925 15.4077ZM1.32287 15.9233C1.46891 15.9763 1.62384 16.0023 1.77967 15.9998C2.09003 15.9928 2.39345 15.909 2.66129 15.7561L11.1166 11.1303L8.68095 8.75605L1.32287 15.9233ZM11.8429 10.7309L9.24737 8.20541L12.1096 5.41927L14.6522 6.80969C15.1402 7.02236 15.4668 7.48117 15.5 8.00083C15.467 8.52098 15.14 8.98028 14.6513 9.19284L11.8429 10.7309Z",
    fill: e.fill ? ? "#000000"
})
})])
}, 82067, e => {
"use strict";
var t = e.i(91398);
e.s(["AppleLogo", 0, e => (0, t.jsx)("svg", {
className: e.className,
style: e.style,
xmlns: "http://www.w3.org/2000/svg",
width: "14",
height: "16",
viewBox: "0 0 14 16",
fill: "none",
children: (0, t.jsx)("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10.1961 0.321632C10.1961 1.14091 9.84479 1.96019 9.34819 2.55066C8.82121 3.20512 7.90939 3.69157 7.18443 3.69157C7.1014 3.69157 7.01837 3.68037 6.96728 3.67077C6.95766 3.63076 6.93691 3.50595 6.93691 3.38114C6.93691 2.55066 7.3617 1.73137 7.81679 1.21292C8.39646 0.539252 9.35777 0.030403 10.1658 0C10.1865 0.0928091 10.1961 0.208021 10.1961 0.321632ZM13.045 5.4819C13.0648 5.46885 13.0785 5.4599 13.0848 5.45496C12.0086 3.90919 10.3734 3.86758 9.91824 3.86758C9.22202 3.86758 8.5988 4.11503 8.07503 4.32298C7.69542 4.4737 7.36805 4.60368 7.103 4.60368C6.81004 4.60368 6.47463 4.46795 6.10037 4.3165C5.62803 4.12537 5.09381 3.90919 4.50491 3.90919C2.51842 3.90919 0.5 5.55896 0.5 8.66967C0.5 10.6091 1.24573 12.6525 2.16871 13.9678C2.96555 15.0879 3.65858 16 4.65182 16C5.12277 16 5.46807 15.8532 5.83122 15.6988C6.23396 15.5276 6.65864 15.3471 7.30099 15.3471C7.95026 15.3471 8.33821 15.5167 8.71224 15.6802C9.06035 15.8323 9.39641 15.9792 9.91984 15.9792C11.0057 15.9792 11.7195 14.9951 12.403 14.0094C13.1695 12.8893 13.4904 11.79 13.5 11.7388C13.4377 11.718 11.357 10.8779 11.357 8.50327C11.357 6.59114 12.7755 5.659 13.045 5.4819Z",
    fill: e.fill ? ? "#000000"
})
})])
}, 52316, e => {
"use strict";
var t = e.i(91398);
e.s(["ShippingLogo", 0, e => (0, t.jsx)("svg", {
className: e.className,
style: e.style,
focusable: "false",
width: "21",
height: "13",
viewBox: "0 0 21 13",
fill: "none",
xmlns: "http://www.w3.org/2000/svg",
"aria-hidden": "true",
children: (0, t.jsx)("path", {
    d: "M2.14296 0.500008C1.90626 0.500008 1.71439 0.691886 1.71439 0.92858C1.71439 1.16527 1.90626 1.35715 2.14296 1.35715H14.1229L16.3528 4.80581C16.4037 4.88272 16.4801 4.94243 16.5671 4.97322L19.7144 6.15181V10.3572H18.4153C18.3098 9.39481 17.4893 8.64288 16.5001 8.64288C15.5109 8.64288 14.6904 9.39481 14.5849 10.3572H7.701C7.59548 9.39481 6.77498 8.64288 5.78582 8.64288C4.79665 8.64288 3.97615 9.39481 3.87064 10.3572H2.57153V7.78574C2.57153 7.54904 2.37966 7.35716 2.14296 7.35716C1.90626 7.35716 1.71439 7.54904 1.71439 7.78574V10.7857C1.71441 11.0101 1.91856 11.2143 2.14296 11.2143H3.9711C4.23786 11.9609 4.95145 12.5 5.78582 12.5C6.62018 12.5 7.33377 11.9609 7.60056 11.2143H14.6854C14.9521 11.9609 15.6657 12.5 16.5001 12.5C17.3345 12.5 18.0481 11.9609 18.3148 11.2143H20.143C20.3674 11.2143 20.5715 11.0101 20.5715 10.7857V5.85715C20.5715 5.68311 20.4537 5.5152 20.2903 5.45537L17.0023 4.22322L14.7189 0.694205C14.6408 0.57476 14.4999 0.499085 14.3572 0.500008H2.14296ZM0.428675 2.21429C0.191975 2.21429 0.000102997 2.40617 0.000102997 2.64287C0.000102997 2.87956 0.191975 3.07144 0.428675 3.07144H6.42867C6.66537 3.07144 6.85725 2.87956 6.85725 2.64287C6.85725 2.40617 6.66537 2.21429 6.42867 2.21429H0.428675ZM0.857246 3.92858C0.620546 3.92858 0.428675 4.12046 0.428675 4.35715C0.428675 4.59384 0.620546 4.78572 0.857246 4.78572H6.42867C6.66537 4.78572 6.85725 4.59384 6.85725 4.35715C6.85725 4.12046 6.66537 3.92858 6.42867 3.92858H0.857246ZM1.71439 5.64287C1.47769 5.64287 1.28582 5.83474 1.28582 6.07142C1.28582 6.30814 1.47769 6.50002 1.71439 6.50002H6.42867C6.66537 6.50002 6.85725 6.30814 6.85725 6.07142C6.85725 5.83474 6.66537 5.64287 6.42867 5.64287H1.71439ZM5.78582 9.50002C6.38262 9.50002 6.85725 9.97464 6.85725 10.5714C6.85725 11.1682 6.38262 11.6429 5.78582 11.6429C5.18901 11.6429 4.71439 11.1682 4.71439 10.5714C4.71439 9.97464 5.18901 9.50002 5.78582 9.50002ZM16.5001 9.50002C17.0969 9.50002 17.5715 9.97464 17.5715 10.5714C17.5715 11.1682 17.0969 11.6429 16.5001 11.6429C15.9033 11.6429 15.4287 11.1682 15.4287 10.5714C15.4287 9.97464 15.9033 9.50002 16.5001 9.50002Z",
    fill: "black"
})
})])
}, 21125, e => {
"use strict";
var t = e.i(91398);
e.s(["FiveStarsGold", 0, e => (0, t.jsxs)("svg", {
className: e.className,
style: e.style,
width: "128px",
height: "22px",
viewBox: "0 0 128 22",
version: "1.1",
xmlns: "http://www.w3.org/2000/svg",
children: [(0, t.jsx)("title", {
    children: "Combined Shape"
}), (0, t.jsx)("g", {
    id: "Desktop",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd",
    children: (0, t.jsx)("g", {
        id: "ProducPage",
        transform: "translate(-253.000000, -11785.000000)",
        fill: "#FD9400",
        fillRule: "nonzero",
        children: (0, t.jsx)("g", {
            id: "Group-29",
            transform: "translate(158.000000, 748.000000)",
            children: (0, t.jsx)("g", {
                id: "Group-32",
                transform: "translate(0.000000, 3017.000000)",
                children: (0, t.jsx)("g", {
                    id: "UserReview",
                    transform: "translate(0.000000, 7815.000000)",
                    children: (0, t.jsx)("g", {
                        id: "cta",
                        transform: "translate(0.000000, 168.000000)",
                        children: (0, t.jsx)("g", {
                            id: "Group-33-Copy",
                            transform: "translate(0.000000, 0.000000)",
                            children: (0, t.jsx)("path", {
                                d: "M106.596674,37 L110.142209,44.2937114 L118.193612,45.402978 L112.333238,51.0200853 L113.763819,59 L106.596585,55.1774393 L99.4289107,59 L100.859493,51.0200853 L95,45.402978 L103.050521,44.2937114 L106.596674,37 Z M132.798271,37 L136.343806,44.2937114 L144.395209,45.402978 L138.534835,51.0200853 L139.965416,59 L132.798183,55.1774393 L125.630508,59 L127.06109,51.0200853 L121.201597,45.402978 L129.252118,44.2937114 L132.798271,37 Z M158.999868,37 L162.545403,44.2937114 L170.596806,45.402978 L164.736432,51.0200853 L166.167014,59 L158.99978,55.1774393 L151.832105,59 L153.262687,51.0200853 L147.403194,45.402978 L155.453716,44.2937114 L158.999868,37 Z M185.201465,37 L188.747,44.2937114 L196.798403,45.402978 L190.938029,51.0200853 L192.368611,59 L185.201377,55.1774393 L178.033702,59 L179.464284,51.0200853 L173.604791,45.402978 L181.655313,44.2937114 L185.201465,37 Z M211.403062,37 L214.948597,44.2937114 L223,45.402978 L217.139626,51.0200853 L218.570208,59 L211.402974,55.1774393 L204.235299,59 L205.665881,51.0200853 L199.806388,45.402978 L207.85691,44.2937114 L211.403062,37 Z",
                                id: "Combined-Shape"
                            })
                        })
                    })
                })
            })
        })
    })
})]
})])
}, 11829, (e, t, i) => {
"use strict";

function r(e, t) {
var i = e.length;
for (e.push(t); 0 < i;) {
    var r = i - 1 >>> 1,
        a = e[r];
    if (0 < n(a, t)) e[r] = t, e[i] = a, i = r;
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
    for (var r = 0, a = e.length, o = a >>> 1; r < o;) {
        var s = 2 * (r + 1) - 1,
            l = e[s],
            c = s + 1,
            d = e[c];
        if (0 > n(l, i)) c < a && 0 > n(d, l) ? (e[r] = d, e[c] = i, r = c) : (e[r] = l, e[s] = i, r = s);
        else if (c < a && 0 > n(d, i)) e[r] = d, e[c] = i, r = c;
        else break
    }
}
return t
}

function n(e, t) {
var i = e.sortIndex - t.sortIndex;
return 0 !== i ? i : e.id - t.id
}
if (i.unstable_now = void 0, "object" == typeof performance && "function" == typeof performance.now) {
var s, l = performance;
i.unstable_now = function() {
    return l.now()
}
} else {
var c = Date,
    d = c.now();
i.unstable_now = function() {
    return c.now() - d
}
}
var u = [],
p = [],
h = 1,
m = null,
g = 3,
f = !1,
b = !1,
x = !1,
w = !1,
y = "function" == typeof setTimeout ? setTimeout : null,
C = "function" == typeof clearTimeout ? clearTimeout : null,
v = "u" > typeof setImmediate ? setImmediate : null;

function _(e) {
for (var t = a(p); null !== t;) {
    if (null === t.callback) o(p);
    else if (t.startTime <= e) o(p), t.sortIndex = t.expirationTime, r(u, t);
    else break;
    t = a(p)
}
}

function P(e) {
if (x = !1, _(e), !b)
    if (null !== a(u)) b = !0, k || (k = !0, s());
    else {
        var t = a(p);
        null !== t && I(P, t.startTime - e)
    }
}
var k = !1,
j = -1,
A = 5,
L = -1;

function M() {
return !!w || !(i.unstable_now() - L < A)
}

function T() {
if (w = !1, k) {
    var e = i.unstable_now();
    L = e;
    var t = !0;
    try {
        e: {
            b = !1,
            x && (x = !1, C(j), j = -1),
            f = !0;
            var r = g;
            try {
                t: {
                    for (_(e), m = a(u); null !== m && !(m.expirationTime > e && M());) {
                        var n = m.callback;
                        if ("function" == typeof n) {
                            m.callback = null, g = m.priorityLevel;
                            var l = n(m.expirationTime <= e);
                            if (e = i.unstable_now(), "function" == typeof l) {
                                m.callback = l, _(e), t = !0;
                                break t
                            }
                            m === a(u) && o(u), _(e)
                        } else o(u);
                        m = a(u)
                    }
                    if (null !== m) t = !0;
                    else {
                        var c = a(p);
                        null !== c && I(P, c.startTime - e), t = !1
                    }
                }
                break e
            }
            finally {
                m = null, g = r, f = !1
            }
        }
    }
    finally {
        t ? s() : k = !1
    }
}
}
if ("function" == typeof v) s = function() {
v(T)
};
else if ("u" > typeof MessageChannel) {
var N = new MessageChannel,
    S = N.port2;
N.port1.onmessage = T, s = function() {
    S.postMessage(null)
}
} else s = function() {
y(T, 0)
};

function I(e, t) {
j = y(function() {
    e(i.unstable_now())
}, t)
}
i.unstable_IdlePriority = 5, i.unstable_ImmediatePriority = 1, i.unstable_LowPriority = 4, i.unstable_NormalPriority = 3, i.unstable_Profiling = null, i.unstable_UserBlockingPriority = 2, i.unstable_cancelCallback = function(e) {
e.callback = null
}, i.unstable_forceFrameRate = function(e) {
0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : A = 0 < e ? Math.floor(1e3 / e) : 5
}, i.unstable_getCurrentPriorityLevel = function() {
return g
}, i.unstable_next = function(e) {
switch (g) {
    case 1:
    case 2:
    case 3:
        var t = 3;
        break;
    default:
        t = g
}
var i = g;
g = t;
try {
    return e()
} finally {
    g = i
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
var i = g;
g = e;
try {
    return t()
} finally {
    g = i
}
}, i.unstable_scheduleCallback = function(e, t, o) {
var n = i.unstable_now();
switch (o = "object" == typeof o && null !== o && "number" == typeof(o = o.delay) && 0 < o ? n + o : n, e) {
    case 1:
        var l = -1;
        break;
    case 2:
        l = 250;
        break;
    case 5:
        l = 0x3fffffff;
        break;
    case 4:
        l = 1e4;
        break;
    default:
        l = 5e3
}
return l = o + l, e = {
    id: h++,
    callback: t,
    priorityLevel: e,
    startTime: o,
    expirationTime: l,
    sortIndex: -1
}, o > n ? (e.sortIndex = o, r(p, e), null === a(u) && e === a(p) && (x ? (C(j), j = -1) : x = !0, I(P, o - n))) : (e.sortIndex = l, r(u, e), b || f || (b = !0, k || (k = !0, s()))), e
}, i.unstable_shouldYield = M, i.unstable_wrapCallback = function(e) {
var t = g;
return function() {
    var i = g;
    g = t;
    try {
        return e.apply(this, arguments)
    } finally {
        g = i
    }
}
}
}, 52659, (e, t, i) => {
"use strict";
t.exports = e.r(11829)
}, 12805, e => {
e.v("/_next/static/media/chat_bubble-grey.34f8bb83.svg")
}, 95785, e => {
e.v("/_next/static/media/appstoreRating.2c083e59.svg")
}, 90588, e => {
e.v("/_next/static/media/playstoreRating.84e0bab9.svg")
}, 48761, e => {
e.v(t => Promise.all(["static/chunks/28e14a26e92e0e1d.js"].map(t => e.l(t))).then(() => t(93594)))
}, 28805, e => {
e.v(e => Promise.resolve().then(() => e(79466)))
}, 28152, e => {
e.v(t => Promise.all(["static/chunks/674d91a64e2e6c92.js", "static/chunks/01d9796a0404d1a4.js"].map(t => e.l(t))).then(() => t(40008)))
}, 65071, e => {
e.v(e => Promise.resolve().then(() => e(75646)))
}, 63634, e => {
e.v(e => Promise.resolve().then(() => e(79446)))
}, 7638, e => {
e.v(e => Promise.resolve().then(() => e(34151)))
}, 15647, e => {
e.v(e => Promise.resolve().then(() => e(8153)))
}, 98964, e => {
e.v(e => Promise.resolve().then(() => e(13069)))
}, 28599, e => {
e.v(e => Promise.resolve().then(() => e(62977)))
}, 83804, e => {
e.v(t => Promise.all(["static/chunks/cfd7f77f7b4a55b3.js"].map(t => e.l(t))).then(() => t(38741)))
}, 26413, e => {
e.v(t => Promise.all(["static/chunks/710118d6c4ea08cf.js"].map(t => e.l(t))).then(() => t(24453)))
}, 9135, e => {
e.v(t => Promise.all(["static/chunks/e056ca7971cd1f63.js"].map(t => e.l(t))).then(() => t(14075)))
}]);