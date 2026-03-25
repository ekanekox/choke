(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 54134, e => {
    "use strict";
    var t = e.i(91398),
        i = e.i(58678),
        n = e.i(3828),
        o = e.i(91788),
        r = e.i(3115),
        a = e.i(71225);
    let l = "https://www.ultrahuman.com";

    function s(e) {
        return e.endsWith("/") ? e : e + "/"
    }
    e.s(["SEO", 0, ({
        title: e,
        description: d,
        image: c,
        canonical: m,
        basePath: h,
        nonIndexable: p,
        robots: u
    }) => {
        let g, {
                asPath: f
            } = (0, n.useRouter)(),
            {
                regionSlug: x
            } = (0, o.useContext)(r.RegionLocaleContext);
        if (m) g = m;
        else if (h) g = `${l}/${x}${s(h)}`;
        else {
            let e = f.split("?")[0].split("#")[0];
            g = `${l}${e}`
        }
        let b = !!h,
            y = h ? `${l}/global${s(h)}` : void 0,
            w = b ? (0, a.getAllRegionSlugs)() : [];
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
                content: g
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
                href: g
            }, "canonical"), y && (0, t.jsx)("link", {
                rel: "alternate",
                hrefLang: "x-default",
                href: y
            }, "hreflang-x-default"), w.map(e => {
                let i, n, o = (0, a.parseRegionLocale)(e),
                    r = `${l}/${e}${s(h)}`;
                if ("GLOBAL" === o.region) return null;
                let d = (i = o.region.toUpperCase(), n = (0, a.getDefaultLanguageForRegion)(i), `${n}-${i}`),
                    c = e.includes("-") ? `${o.language}-${o.region}` : d;
                return (0, t.jsx)("link", {
                    rel: "alternate",
                    hrefLang: c,
                    href: r
                }, `hreflang-${e}`)
            }), p && (0, t.jsx)("meta", {
                name: "google",
                content: "nositelinkssearchbox"
            }, "sitelinks"), p && (0, t.jsx)("meta", {
                name: "google",
                content: "notranslate"
            }, "notranslate"), u ? (0, t.jsx)("meta", {
                name: "robots",
                content: u
            }, "robots") : p && (0, t.jsx)("meta", {
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
            let o = JSON.stringify(e);
            return (0, t.jsx)(i.default, {
                children: (0, t.jsx)("script", {
                    type: "application/ld+json",
                    dangerouslySetInnerHTML: {
                        __html: o
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
}, 12255, 82851, 61525, e => {
    "use strict";

    function t(e) {
        let {
            name: t,
            description: i,
            imageUrl: n,
            brand: o = "Ultrahuman",
            sku: r,
            mpn: a,
            gtin: l,
            category: s,
            price: d,
            currency: c,
            country: m,
            availability: h = "InStock",
            priceValidUntil: p,
            url: u,
            rating: g,
            reviews: f,
            color: x,
            material: b,
            weight: y,
            dimensions: w
        } = e, S = {
            "@type": "Offer",
            url: u,
            priceCurrency: c,
            price: d.toString(),
            availability: `https://schema.org/${h}`,
            priceValidUntil: p || new Date(Date.now() + 7776e6).toISOString().split("T")[0],
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
        }, v = g ? {
            "@type": "AggregateRating",
            ratingValue: g.ratingValue.toString(),
            reviewCount: g.reviewCount.toString(),
            bestRating: (g.bestRating || 5).toString(),
            worstRating: (g.worstRating || 1).toString()
        } : void 0, j = f ? .map(e => ({
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
        })), C = {
            "@context": "https://schema.org",
            "@type": "Product",
            name: t,
            description: i,
            image: Array.isArray(n) ? n : [n],
            brand: {
                "@type": "Brand",
                name: o
            },
            sku: r,
            mpn: a,
            gtin: l,
            category: s,
            offers: S,
            url: u
        };
        return v && (C.aggregateRating = v), j && j.length > 0 && (C.review = j), x && (C.color = x), b && (C.material = b), y && (C.weight = y), w && (C.depth = w.length, C.width = w.width, C.height = w.height), C
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
    let n = (e, t, i) => {
        if (t > 10) return "";
        if ("string" == typeof e) return e;
        if ("number" == typeof e) return String(e);
        if (Array.isArray(e)) return e.map(e => n(e, t + 1, i)).join(" ");
        if (e && "object" == typeof e) {
            if (i.has(e)) return "";
            if (i.add(e), "props" in e) {
                let o = e.props;
                if ("string" == typeof o ? .defaultMessage && o.defaultMessage.trim()) return o.defaultMessage.trim();
                if (o ? .children) {
                    let e = n(o.children, t + 1, i);
                    if (e.trim()) return e
                }
            }
        }
        return ""
    };
    e.s(["extractTextFromJSX", 0, e => n(e, 0, new WeakSet)], 61525)
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
        o = (e, i = t.Currency.usd, o = {}) => {
            let r = "string" == typeof i ? i.toLowerCase() : i;
            if (r === t.Currency.inr) return e >= 1e7 ? `${(e/1e7).toFixed(2*(e%1e7!=0))} Cr` : e >= 1e5 ? `${(e/1e5).toFixed(2*(e%1e5!=0))} L` : new Intl.NumberFormat("en-IN").format(e);
            return r === t.Currency.aed ? new Intl.NumberFormat(n(r), {
                maximumFractionDigits: 0,
                ...o
            }).format(e) : new Intl.NumberFormat(n(r), {
                style: o.style || "decimal",
                maximumFractionDigits: o.maximumFractionDigits ? ? 0,
                ...o
            }).format(e)
        };
    e.s(["formatPrice", 0, o, "formatPriceWithSymbol", 0, (e, n = t.Currency.usd, r = {}) => {
        let a = "string" == typeof n ? n.toLowerCase() : n,
            l = (0, i.getCurrencySymbolFromString)(a),
            s = o(e, a, r);
        return a === t.Currency.aed ? `${s} ${l}` : `${l}${s}`
    }])
}, 45139, e => {
    "use strict";
    var t = e.i(59207);
    let i = {
            [t.ShopifyStore.IN]: 54999,
            [t.ShopifyStore.ROW]: 549,
            [t.ShopifyStore.US]: 549,
            [t.ShopifyStore.EU]: 579,
            [t.ShopifyStore.GB]: 489,
            [t.ShopifyStore.AE]: 1999,
            [t.ShopifyStore.AU]: 849,
            [t.ShopifyStore.CA]: 769,
            [t.ShopifyStore.SA]: 2369,
            [t.ShopifyStore.MX]: 9189,
            [t.ShopifyStore.ZA]: 8999
        },
        n = {
            [t.ShopifyStore.IN]: 54999,
            [t.ShopifyStore.ROW]: 549,
            [t.ShopifyStore.US]: 549,
            [t.ShopifyStore.EU]: 579,
            [t.ShopifyStore.GB]: 489,
            [t.ShopifyStore.AE]: 1999,
            [t.ShopifyStore.AU]: 849,
            [t.ShopifyStore.CA]: 769,
            [t.ShopifyStore.SA]: 2369,
            [t.ShopifyStore.MX]: 9189,
            [t.ShopifyStore.ZA]: 8999
        };
    t.ShopifyStore.IN, t.ShopifyStore.ROW, t.ShopifyStore.US, t.ShopifyStore.SA, t.ShopifyStore.MX, t.ShopifyStore.EU, t.ShopifyStore.GB, t.ShopifyStore.AE, t.ShopifyStore.AU, t.ShopifyStore.CA, t.ShopifyStore.ZA, t.ShopifyStore.IN, t.ShopifyStore.AE, t.ShopifyStore.ROW, t.ShopifyStore.GB, t.ShopifyStore.US, t.ShopifyStore.EU, t.ShopifyStore.AU, t.ShopifyStore.CA, t.ShopifyStore.SA, t.ShopifyStore.MX, t.ShopifyStore.ZA, t.ShopifyStore.IN, t.ShopifyStore.ROW, t.ShopifyStore.US, t.ShopifyStore.EU, t.ShopifyStore.GB, t.ShopifyStore.AE, t.ShopifyStore.AU, t.ShopifyStore.CA, t.ShopifyStore.SA, t.ShopifyStore.MX, t.ShopifyStore.ZA;
    let o = {
        id: "home-smart-home-device",
        name: "Ultrahuman Home",
        description: "Smart home monitoring system for health and wellness",
        SKU: "HOME-BASE-01",
        variantId: {
            [t.ShopifyStore.IN]: "gid://shopify/ProductVariant/41934337900614",
            [t.ShopifyStore.ROW]: "gid://shopify/ProductVariant/41655829069884",
            [t.ShopifyStore.US]: "gid://shopify/ProductVariant/42330595262560",
            [t.ShopifyStore.SA]: "gid://shopify/ProductVariant/50084719198526",
            [t.ShopifyStore.EU]: "gid://shopify/ProductVariant/50084719198526",
            [t.ShopifyStore.GB]: "gid://shopify/ProductVariant/50084719198526",
            [t.ShopifyStore.AE]: "gid://shopify/ProductVariant/46419396788466",
            [t.ShopifyStore.AU]: "gid://shopify/ProductVariant/50084719198526",
            [t.ShopifyStore.MX]: "gid://shopify/ProductVariant/50084719198526",
            [t.ShopifyStore.CA]: "gid://shopify/ProductVariant/42330595262560",
            [t.ShopifyStore.ZA]: "gid://shopify/ProductVariant/50084719198526"
        },
        checkoutUrl: {
            [t.ShopifyStore.IN]: "https://ultrahumanstore.myshopify.com/cart/41934337900614:1?channel=buy_button",
            [t.ShopifyStore.AE]: "https://ultrahuman-mena.myshopify.com/cart/46419396788466:1?channel=buy_button",
            [t.ShopifyStore.ROW]: "https://ultrahuman-us.myshopify.com/cart/41655829069884:1?channel=buy_button",
            [t.ShopifyStore.GB]: "https://ultrahuman-eu-uk.myshopify.com/cart/50084719198526:1?channel=buy_button",
            [t.ShopifyStore.US]: "https://stelcore-x-ultrahuman.myshopify.com/cart/42330595262560:1?channel=buy_button",
            [t.ShopifyStore.EU]: "https://ultrahuman-eu-uk.myshopify.com/cart/50084719198526:1?channel=buy_button",
            [t.ShopifyStore.AU]: "https://ultrahuman-eu-uk.myshopify.com/cart/50084719198526:1?channel=buy_button",
            [t.ShopifyStore.CA]: "https://stelcore-x-ultrahuman.myshopify.com/cart/42330595262560:1?channel=buy_button",
            [t.ShopifyStore.MX]: "https://ultrahuman-eu-uk.myshopify.com/cart/50084719198526:1?channel=buy_button",
            [t.ShopifyStore.ZA]: "https://ultrahuman-eu-uk.myshopify.com/cart/50084719198526:1?channel=buy_button"
        },
        taxesInclusion: {
            [t.ShopifyStore.IN]: !0,
            [t.ShopifyStore.ROW]: !1,
            [t.ShopifyStore.US]: !1,
            [t.ShopifyStore.EU]: !0,
            [t.ShopifyStore.GB]: !0,
            [t.ShopifyStore.AE]: !1,
            [t.ShopifyStore.AU]: !0,
            [t.ShopifyStore.CA]: !1,
            [t.ShopifyStore.SA]: !0,
            [t.ShopifyStore.MX]: !0,
            [t.ShopifyStore.ZA]: !1
        },
        images: [{
            src: "/images/home/main.jpg",
            alt: "Ultrahuman Home device",
            width: 1200,
            height: 800
        }, {
            src: "/images/home/angle.jpg",
            alt: "Ultrahuman Home side angle",
            width: 1200,
            height: 800
        }, {
            src: "/images/home/lifestyle.jpg",
            alt: "Ultrahuman Home in living room",
            width: 1200,
            height: 800
        }],
        features: ["Advanced air quality monitoring", "Sleep environment optimization", "Smart home integration", "Real-time health insights", "Voice control capabilities"],
        seo: {
            title: "Ultrahuman Home | Smart Home Health Monitoring",
            description: "Transform your living space with the Ultrahuman Home. Monitor air quality, optimize sleep, and gain health insights.",
            keywords: ["smart home", "health monitoring", "air quality", "sleep optimization"]
        }
    };
    t.ShopifyStore.IN, t.ShopifyStore.ROW, t.ShopifyStore.US, t.ShopifyStore.EU, t.ShopifyStore.GB, t.ShopifyStore.AE, t.ShopifyStore.AU, t.ShopifyStore.CA, t.ShopifyStore.ZA, t.ShopifyStore.SA, e.s(["HomePrice", 0, i, "HomePriceStriked", 0, n, "productMap_home", 0, o])
}, 11829, (e, t, i) => {
    "use strict";

    function n(e, t) {
        var i = e.length;
        for (e.push(t); 0 < i;) {
            var n = i - 1 >>> 1,
                o = e[n];
            if (0 < a(o, t)) e[n] = t, e[i] = o, i = n;
            else break
        }
    }

    function o(e) {
        return 0 === e.length ? null : e[0]
    }

    function r(e) {
        if (0 === e.length) return null;
        var t = e[0],
            i = e.pop();
        if (i !== t) {
            e[0] = i;
            for (var n = 0, o = e.length, r = o >>> 1; n < r;) {
                var l = 2 * (n + 1) - 1,
                    s = e[l],
                    d = l + 1,
                    c = e[d];
                if (0 > a(s, i)) d < o && 0 > a(c, s) ? (e[n] = c, e[d] = i, n = d) : (e[n] = s, e[l] = i, n = l);
                else if (d < o && 0 > a(c, i)) e[n] = c, e[d] = i, n = d;
                else break
            }
        }
        return t
    }

    function a(e, t) {
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
        h = [],
        p = 1,
        u = null,
        g = 3,
        f = !1,
        x = !1,
        b = !1,
        y = !1,
        w = "function" == typeof setTimeout ? setTimeout : null,
        S = "function" == typeof clearTimeout ? clearTimeout : null,
        v = "u" > typeof setImmediate ? setImmediate : null;

    function j(e) {
        for (var t = o(h); null !== t;) {
            if (null === t.callback) r(h);
            else if (t.startTime <= e) r(h), t.sortIndex = t.expirationTime, n(m, t);
            else break;
            t = o(h)
        }
    }

    function C(e) {
        if (b = !1, j(e), !x)
            if (null !== o(m)) x = !0, k || (k = !0, l());
            else {
                var t = o(h);
                null !== t && U(C, t.startTime - e)
            }
    }
    var k = !1,
        _ = -1,
        I = 5,
        T = -1;

    function A() {
        return !!y || !(i.unstable_now() - T < I)
    }

    function N() {
        if (y = !1, k) {
            var e = i.unstable_now();
            T = e;
            var t = !0;
            try {
                e: {
                    x = !1,
                    b && (b = !1, S(_), _ = -1),
                    f = !0;
                    var n = g;
                    try {
                        t: {
                            for (j(e), u = o(m); null !== u && !(u.expirationTime > e && A());) {
                                var a = u.callback;
                                if ("function" == typeof a) {
                                    u.callback = null, g = u.priorityLevel;
                                    var s = a(u.expirationTime <= e);
                                    if (e = i.unstable_now(), "function" == typeof s) {
                                        u.callback = s, j(e), t = !0;
                                        break t
                                    }
                                    u === o(m) && r(m), j(e)
                                } else r(m);
                                u = o(m)
                            }
                            if (null !== u) t = !0;
                            else {
                                var d = o(h);
                                null !== d && U(C, d.startTime - e), t = !1
                            }
                        }
                        break e
                    }
                    finally {
                        u = null, g = n, f = !1
                    }
                }
            }
            finally {
                t ? l() : k = !1
            }
        }
    }
    if ("function" == typeof v) l = function() {
        v(N)
    };
    else if ("u" > typeof MessageChannel) {
        var P = new MessageChannel,
            $ = P.port2;
        P.port1.onmessage = N, l = function() {
            $.postMessage(null)
        }
    } else l = function() {
        w(N, 0)
    };

    function U(e, t) {
        _ = w(function() {
            e(i.unstable_now())
        }, t)
    }
    i.unstable_IdlePriority = 5, i.unstable_ImmediatePriority = 1, i.unstable_LowPriority = 4, i.unstable_NormalPriority = 3, i.unstable_Profiling = null, i.unstable_UserBlockingPriority = 2, i.unstable_cancelCallback = function(e) {
        e.callback = null
    }, i.unstable_forceFrameRate = function(e) {
        0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : I = 0 < e ? Math.floor(1e3 / e) : 5
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
        var i = g;
        g = e;
        try {
            return t()
        } finally {
            g = i
        }
    }, i.unstable_scheduleCallback = function(e, t, r) {
        var a = i.unstable_now();
        switch (r = "object" == typeof r && null !== r && "number" == typeof(r = r.delay) && 0 < r ? a + r : a, e) {
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
        return s = r + s, e = {
            id: p++,
            callback: t,
            priorityLevel: e,
            startTime: r,
            expirationTime: s,
            sortIndex: -1
        }, r > a ? (e.sortIndex = r, n(h, e), null === o(m) && e === o(h) && (b ? (S(_), _ = -1) : b = !0, U(C, r - a))) : (e.sortIndex = s, n(m, e), x || f || (x = !0, k || (k = !0, l()))), e
    }, i.unstable_shouldYield = A, i.unstable_wrapCallback = function(e) {
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
}, 5894, 28014, e => {
    "use strict";
    var t = e.i(91398),
        i = e.i(64130);
    let n = [{
        title: "What is Ultrahuman Home?",
        description: (0, t.jsx)(t.Fragment, {
            children: "Ultrahuman Home is a smart health device designed to monitor and enhance the health of your living environment. It continuously tracks environmental factors such as air quality, temperature, humidity, light, noise, and more, correlating them with your lifestyle and biomarkers to optimize your health outcomes."
        })
    }, {
        title: "What is Ultrahuman Home made from?",
        description: (0, t.jsx)(t.Fragment, {
            children: "Ultrahuman Home is built using high-grade, durable materials to ensure long-term reliability. The outer casing is crafted from sustainable, eco-conscious plastics and metals, while the internals include precision sensors and custom-designed circuit boards optimized for real-time environmental sensing."
        })
    }, {
        title: "What is the expected lifespan of Ultrahuman Home?",
        description: (0, t.jsx)(t.Fragment, {
            children: "Ultrahuman Home is designed with industry-grade sensors and precision engineering. The product goes through rigorous quality checks to ensure longevity and consistent performance for over a decade. However, periodic cleaning of the vents is recommended to ensure the product lasts longer & works efficiently in your living space."
        })
    }, {
        title: "How can I use the data from Ultrahuman Home to improve my biomarkers?",
        description: (0, t.jsx)(t.Fragment, {
            children: "Ultrahuman Home correlates environmental data - such as CO₂ levels, PM2.5, temperature, and humidity - with health metrics like sleep quality and stress. The platform uses this information to suggest actionable changes (e.g., improving ventilation, optimizing temperature for sleep) that enhance your lifestyle and positively affect your biomarkers over time."
        })
    }, {
        title: "Is privacy a concern with Ultrahuman Home's microphone?",
        description: (0, t.jsx)(t.Fragment, {
            children: "All audio processing for the device is conducted locally, ensuring your data remains secure. The Ultrahuman Home device also includes a physical mic cut-off button, giving you full control over your privacy."
        })
    }, {
        title: "How do I use Ultrahuman Home?",
        description: (0, t.jsxs)(t.Fragment, {
            children: ["Using Ultrahuman Home is simple:", (0, t.jsx)("br", {}), (0, t.jsxs)("ul", {
                children: [(0, t.jsx)("li", {
                    children: "Plug in the device and connect it to your home Wi-Fi."
                }), (0, t.jsx)("li", {
                    children: "Use the Ultrahuman App to pair and configure."
                }), (0, t.jsx)("li", {
                    children: "The device will begin collecting environmental data in real time."
                }), (0, t.jsx)("li", {
                    children: "You can view insights and personalized recommendations via the app."
                })]
            })]
        })
    }];
    e.s(["HomeFaqData", () => n, "default", 0, () => (0, t.jsx)(i.FAQSection, {
        bgColor: "white",
        faqData: n
    })], 5894);
    var o = e.i(61791),
        r = e.i(91788),
        a = e.i(60814),
        l = e.i(21666),
        s = e.i(19231);
    let d = a.default.div.withConfig({
        displayName: "ImageTextBlockLayout__SplitImageContainer",
        componentId: "sc-d025c59b-0"
    })
    `
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  height: 82rem;
  gap: 0.8rem;
  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    flex-direction: row;
    gap: 1.6rem;
    height: 69rem;
  }
`, c = a.default.div.withConfig({
        displayName: "ImageTextBlockLayout__SplitImage",
        componentId: "sc-d025c59b-1"
    })
    `
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  border-radius: 16px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100% !important; /* Changed from 'auto' to '100%' */
    object-fit: cover; /* Changed from 'contain' to 'cover' */
  }
`, m = a.default.div.withConfig({
        displayName: "ImageTextBlockLayout__ImageTextContainer",
        componentId: "sc-d025c59b-2"
    })
    `
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`, h = a.default.div.withConfig({
        displayName: "ImageTextBlockLayout__ImageWrapper",
        componentId: "sc-d025c59b-3"
    })
    `
  height: 60%; /* This controls the height of the second image container */
  width: 100%;
  position: relative;
`, p = a.default.div.withConfig({
        displayName: "ImageTextBlockLayout__TextContainer",
        componentId: "sc-d025c59b-4"
    })
    `
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 40%; /* This should match the remaining space after ImageWrapper */
  padding: 1.5rem;
`, u = a.default.span.withConfig({
        displayName: "ImageTextBlockLayout__TextPara",
        componentId: "sc-d025c59b-5"
    })
    `
  color: rgba(255, 255, 255, 0.5);
  text-align: center;
  font-size: 18px;
  line-height: 24px; /* 133.333% */
  letter-spacing: -0.72px;

  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 32px; /* 133.333% */
    letter-spacing: -0.96px;
    text-align: unset;
  }
`, g = a.default.span.withConfig({
        displayName: "ImageTextBlockLayout__BoldSpan",
        componentId: "sc-d025c59b-6"
    })
    `
  color: #ffffff;
`, f = a.default.div.withConfig({
        displayName: "ImageTextBlockLayout__FullWidthRow",
        componentId: "sc-d025c59b-7"
    })
    `
  margin-top: 1.6rem;
  width: 100%;
  position: relative;
  border-radius: 16px;
  overflow: hidden;

  /* Use aspect ratio instead of fixed height */
  aspect-ratio: 16 / 9;

  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    aspect-ratio: 21 / 9;
  }
`, x = a.default.div.withConfig({
        displayName: "ImageTextBlockLayout__TitleContainer",
        componentId: "sc-d025c59b-8"
    })
    `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 48px;

  ${o.P} {
    max-width: 52ch;
  }
`, b = (0, a.default)(({
        className: e,
        htmlId: i
    }) => {
        let n = (0, r.useRef)(null);
        return (0, t.jsx)("section", {
            className: e,
            id: i,
            ref: n,
            children: (0, t.jsxs)(s.Container, {
                children: [(0, t.jsx)(m, {
                    children: (0, t.jsxs)(x, {
                        children: [(0, t.jsx)(o.H2Large, {
                            children: "Tuned into your Home "
                        }), (0, t.jsx)(o.P, {
                            children: "Ultrahuman Home works quietly in the background so you and your loved ones can sleep better."
                        })]
                    })
                }), (0, t.jsxs)("div", {
                    style: {
                        marginTop: "1.6rem"
                    },
                    children: [(0, t.jsxs)(d, {
                        children: [(0, t.jsx)(c, {
                            fullHeight: !0,
                            children: (0, t.jsx)(l.CustomImage, {
                                src: "web_v2/home/buy/image-text-block/Desktop/blockLayout.png/w_1080",
                                alt: "web_v2/home/buy/image-text-block/Desktop/blockLayout.png/w_1080",
                                fill: !0
                            })
                        }), (0, t.jsxs)(m, {
                            children: [(0, t.jsx)(h, {
                                children: (0, t.jsx)(c, {
                                    children: (0, t.jsx)(l.CustomImage, {
                                        src: "web_v2/home/buy/image-text-block/Desktop/img-b.png/w_1080",
                                        alt: "web_v2/home/buy/image-text-block/Desktop/img-b.png/w_1080",
                                        fill: !0,
                                        style: {
                                            objectPosition: "bottom"
                                        }
                                    })
                                })
                            }), (0, t.jsx)(p, {
                                children: (0, t.jsxs)(u, {
                                    children: ["Engineered to seamlessly ", (0, t.jsx)(g, {
                                        children: "blend"
                                    }), " into your space, Ultrahuman Home improves your", " ", (0, t.jsx)(g, {
                                        children: "sleep health"
                                    }), " without disrupting your environment."]
                                })
                            })]
                        })]
                    }), (0, t.jsx)(f, {
                        children: (0, t.jsx)(l.CustomImage, {
                            src: "web_v2/home/buy/desktop/carousel_lifestyle.jpg",
                            alt: "Full width image",
                            fill: !0,
                            style: {
                                objectFit: "cover"
                            }
                        })
                    })]
                })]
            })
        })
    }).withConfig({
        displayName: "ImageTextBlockLayout",
        componentId: "sc-d025c59b-9"
    })
    `
  ${o.sectionPadding}

  padding-bottom: 24px !important;

  background: #000000;
  color: #ffffff;

  .independent {
    padding: 1.5rem;
    text-align: center;
  }

  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    .independent {
      padding-right: 50%;
      text-align: left;
    }
  }
`;
    e.s(["ImageTextBlockLayout", 0, b], 28014)
}, 40816, e => {
    "use strict";
    var t = e.i(91398),
        i = e.i(3828),
        n = e.i(91788),
        o = e.i(57263),
        r = e.i(228),
        a = e.i(1814),
        l = e.i(93966),
        s = e.i(32899),
        d = e.i(20685),
        c = e.i(29282),
        m = e.i(59207),
        h = e.i(60814);
    let p = h.keyframes `
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
`,
        u = (0, h.default)(({
            className: e,
            mcf: i = !1,
            content: o,
            justContent: r = !1,
            isMinEstimate: a = !1
        }) => {
            let l = (0, n.useRef)(0);
            return ((0, n.useEffect)(() => {
                l.current += 1
            }, [o, i]), r) ? (0, t.jsx)("span", {
                className: e,
                children: o
            }, l.current) : (0, t.jsxs)("span", {
                className: e,
                children: [(0, t.jsxs)("span", {
                    children: ["Dispatched by : ", o]
                }), a && (0, t.jsx)("i", {
                    className: "min-est-dot",
                    "aria-hidden": "true"
                })]
            }, l.current)
        }).withConfig({
            displayName: "ShippingLabel",
            componentId: "sc-47ebbc4e-0"
        })
    `
  min-height: 36px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 4px;
  font-size: 1.4rem;
  line-height: 1.6;

  /* Indicator dot for minimum estimates */
  .min-est-dot {
    display: inline-block;
    width: 4px;
    height: 4px;
    margin-left: 4px;
    border-radius: 50%;
    background-color: red;
  }

  /* Fade in animation */
  animation: ${p} 0.3s ease-in-out forwards;

  /* Responsive adjustments */
  @media (min-width: ${({theme:e})=>e.globalV2?.md.minWidth||"768px"}) {
    flex-direction: row;
    gap: 8px;
    justify-content: flex-start;
    align-items: center;
  }

  /* Child elements styling */
  & > * {
    display: inline;
  }

  /* Image styling */
  img {
    max-height: 100%;
    width: auto;
    object-fit: contain;
  }
`;
    var g = e.i(3115),
        f = e.i(45139),
        x = e.i(56560),
        b = e.i(74508),
        y = e.i(79546);
    let w = {
            defaultCurrency: r.Currency.usd,
            checkout: () => void 0,
            goToNextStep: () => void 0,
            isLoading: !1,
            uhx: !1,
            setUhx: () => void 0,
            uhxCart: null,
            setUhxCart: () => void 0,
            price: 0,
            uhxPrice: 0,
            effectivePrice: 0,
            dueEffectivePrice: 0,
            shippingEstimate: null,
            affiliateDetails: null,
            campaignActive: !1,
            affiliateDiscount: 0,
            birthdayDiscount: 0,
            effectiveDiscount: {
                type: "referral",
                amount: 0
            },
            referral: void 0,
            formatPrice: e => e.toString(),
            displayPrice: () => (0, t.jsx)(t.Fragment, {})
        },
        S = (0, n.createContext)(w);
    e.s(["HomeContextProvider", 0, ({
        children: e,
        currency: r,
        store: h = m.ShopifyStore.ROW,
        directCheckout: p = !1
    }) => {
        let w = (0, i.useRouter)(),
            {
                region: v
            } = (0, n.useContext)(g.RegionLocaleContext),
            j = (0, n.useRef)(null),
            C = (0, n.useRef)(null),
            k = (0, n.useRef)(null),
            _ = (0, n.useContext)(y.CartContext),
            {
                getCampaignForProduct: I
            } = _,
            T = I("home"),
            A = (0, c.getCampaignConfig)(T),
            N = A ? .active ? ? !1,
            [P, $] = (0, n.useState)(!1),
            {
                affiliateCode: U
            } = w.query,
            {
                affiliateDetails: E
            } = (0, o.useAffiliateMetadata)(U),
            R = (0, s.useForwardSearchParamsShopify)(),
            W = a.CurrencySymbol[r.toLowerCase()],
            F = (0, n.useCallback)(e => (0, l.formatPrice)(e, r), [r]),
            z = (0, n.useCallback)(e => {
                let i = (0, l.formatPrice)(e, r);
                return (0, t.jsxs)(t.Fragment, {
                    children: [W, i]
                })
            }, [r, W]),
            H = (0, n.useCallback)(e => {
                if (!e.current) return;
                let t = e.current.querySelector(".section-row-title h5");
                t && (t.style.transition = "transform 0.5s ease", t.style.transform = "scale(1.1)", requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        t.style.transform = ""
                    })
                }))
            }, []),
            M = (0, n.useCallback)(e => {
                if (!e.current) return !1;
                let t = e.current.getBoundingClientRect();
                return t.top >= 0 && t.left >= 0 && t.bottom <= (window.innerHeight || document.documentElement.clientHeight) && t.right <= (window.innerWidth || document.documentElement.clientWidth)
            }, []),
            V = (0, n.useCallback)(e => {
                e.current ? .scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                })
            }, []),
            B = (0, n.useCallback)(e => {
                e.current && (M(e) ? H(e) : V(e))
            }, [M, H, V]),
            L = (0, n.useCallback)(() => {
                er ? eh() : B(k)
            }, [C, B]),
            [O, q] = (0, n.useState)(null),
            {
                store: D
            } = (0, n.useContext)(y.CartContext);
        (0, n.useEffect)(() => {
            q((0, t.jsx)(u, {
                content: D == m.ShopifyStore.IN ? "Ships in 2-3 days" : "Ships in 3-4 days",
                justContent: !0
            }))
        }, [D]);
        let [G, Y] = (0, n.useState)(f.HomePrice[h]), X, Z = w.query.workAffiliate && w.query.discount, Q = (0, n.useMemo)(() => {
            if ("birthday" === w.query.affiliateCode) return 0;
            if (Z) return "on-running" === w.query.affiliate || "on-running" === w.query.invite ? .25 * G : .15 * G;
            let e = (0, m.getEffectiveStoreForDiscount)(h);
            if (console.log("Effective store:", e), !e || !E || !E.discount_configs[e] ? .HOME ? .code) return 0;
            let t = E.discount_configs[e] ? .HOME;
            return t ? .type === "percentage" ? t.value * G / 100 : t ? .value ? ? 0
        }, [N, E, G, Z, w.query, h]), J = w.query.discount, K = J ? parseInt(J.slice(-2)) || 15 : 0, ee = J && J.length > 0 && "birthday" === w.query.affiliateCode ? K / 100 * G : 0, et = (0, n.useMemo)(() => (0, d.getCampaignPromoDiscountConfig)({
            store: h,
            country: w.query.country,
            product: "home",
            campaignConfig: A
        }), [h, v, A]), ei = (0, n.useMemo)(() => {
            if (!et ? .active || !et ? .discount) return 0;
            let e = et.discount;
            return "percentage" === et.discountType ? e / 100 * G : e
        }, [et, G]), en = (0, n.useMemo)(() => [{
            type: "affiliate",
            amount: Q
        }, {
            type: "birthday",
            amount: ee
        }, {
            type: "homePromoDiscount",
            amount: ei
        }], [X, Q, ee, ei]), eo = (0, n.useMemo)(() => en.reduce((e, t) => t.amount > e.amount ? t : e, {
            type: "referral",
            amount: 0
        }), [en]);
        (0, n.useEffect)(() => {
            eo.amount > 0 ? Y(f.HomePriceStriked[h]) : Y(f.HomePrice[h])
        }, [eo.amount, h]);
        let [er, ea] = (0, n.useState)(!1), [el, es] = (0, n.useState)(null), ed = (0, n.useMemo)(() => el && !er ? x.UhxShopifyMap[h][el].price : 0, [el, h]), ec = (0, n.useMemo)(() => G + ed - eo.amount, [G, ed, eo.amount]), em = (0, n.useMemo)(() => G + ed - eo.amount, [G, ed, eo.amount]), eh = (0, n.useCallback)(async () => {
            $(!0);
            try {
                if (p) {
                    let e = f.productMap_home.variantId[h];
                    if (e) {
                        let t = R(e, "x_home");
                        await w.push(t)
                    } else console.error("Error: Product variant ID not found for store:", h);
                    return
                }
                let e = f.productMap_home.variantId[h];
                if (e) {
                    let t = [];
                    el && t.push({
                        shopifyVariantId: x.UhxShopifyMap[h][el].variantId,
                        productType: b.ProductType.GENERIC
                    }), t.push({
                        shopifyVariantId: e,
                        productType: b.ProductType.GENERIC,
                        params: {
                            productType: "HOME",
                            noteAttributes: []
                        }
                    }), await _.addToCart(t, !0);
                    return
                }
                console.error("Error: Unable to initiate checkout process")
            } catch (e) {
                console.error("Error during checkout:", e)
            } finally {
                $(!1)
            }
        }, [p, R, w, h, el, _]), ep = (0, n.useMemo)(() => ({
            defaultCurrency: r,
            currencySymbol: W,
            store: h,
            checkout: eh,
            goToNextStep: L,
            isLoading: P,
            cartSummaryRef: j,
            coverageRef: k,
            addonRef: C,
            price: G,
            uhxPrice: ed,
            effectivePrice: em,
            dueEffectivePrice: ec,
            shippingEstimate: O,
            affiliateDetails: E,
            campaignActive: N,
            affiliateDiscount: Q,
            birthdayDiscount: ee,
            effectiveDiscount: eo,
            referral: X,
            formatPrice: F,
            displayPrice: z,
            uhx: er,
            setUhx: ea,
            uhxCart: el,
            setUhxCart: es
        }), [r, W, h, eh, L, P, G, ed, em, ec, O, E, N, Q, ee, eo, k, X, F, z, er, el]);
        return (0, t.jsx)(S.Provider, {
            value: ep,
            children: e
        })
    }, "useHomeContext", 0, () => (0, n.useContext)(S)], 40816)
}, 11245, e => {
    "use strict";
    var t = e.i(91398),
        i = e.i(91788),
        n = e.i(60814),
        o = e.i(78198),
        r = e.i(18888),
        a = e.i(92195),
        l = e.i(8762),
        s = e.i(86236),
        d = e.i(14681),
        c = e.i(57232),
        m = e.i(82382);
    let h = n.default.section.withConfig({
        displayName: "SleepFeatureCards__SleepFeatureCardsSection",
        componentId: "sc-22a61cac-0"
    })
    `
  position: relative;
  width: 100%;
  background-color: #ffffff;
  @media (max-width: ${({theme:e})=>e.globalV2?.md?.maxWidth||"768px"}) {
    padding: 32px 0;
  }
`, p = n.default.div.withConfig({
        displayName: "SleepFeatureCards__StickyWrapper",
        componentId: "sc-22a61cac-1"
    })
    `
  position: relative;
  width: 100vw;
  height: 300vh;
  height: 300lvh;

  @media (max-width: ${({theme:e})=>e.globalV2?.md?.maxWidth||"768px"}) {
    height: auto;
    min-height: auto;
  }
`, u = n.default.div.withConfig({
        displayName: "SleepFeatureCards__StickyContainer",
        componentId: "sc-22a61cac-2"
    })
    `
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  height: 100lvh;
  overflow: hidden;
  @media (max-width: ${({theme:e})=>e.globalV2?.md?.maxWidth||"768px"}) {
    position: relative;
    height: auto;
    padding: 0;
  }
`, g = n.default.div.withConfig({
        displayName: "SleepFeatureCards__ContentContainer",
        componentId: "sc-22a61cac-3"
    })
    `
  position: relative;
  width: min(100%, 1400px);
  height: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  padding: 80px 40px;
  align-items: center;
  box-sizing: border-box;

  @media (max-width: ${({theme:e})=>e.globalV2?.md?.maxWidth||"768px"}) {
    grid-template-columns: 1fr;
    gap: 40px;
    padding: 40px 20px;
    display: none;
  }
`, f = n.default.div.withConfig({
        displayName: "SleepFeatureCards__TextWrapper",
        componentId: "sc-22a61cac-4"
    })
    `
  position: relative;
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  @media (max-width: ${({theme:e})=>e.globalV2?.md?.maxWidth||"768px"}) {
    width: 100%;
  }
`, x = n.default.div.withConfig({
        displayName: "SleepFeatureCards__TextContainer",
        componentId: "sc-22a61cac-5"
    })
    `
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 12px;
  opacity: 0;
`, b = n.default.p.withConfig({
        displayName: "SleepFeatureCards__Caption",
        componentId: "sc-22a61cac-6"
    })
    `
  margin: 0;
  font-weight: 400;
  font-size: 12px;
  leading-trim: none;
  line-height: 140%;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #000000b2;
`, y = n.default.h2.withConfig({
        displayName: "SleepFeatureCards__Title",
        componentId: "sc-22a61cac-7"
    })
    `
  margin: 0;
  font-weight: 500;
  font-size: 32px;
  leading-trim: none;
  line-height: 130%;
  letter-spacing: -0.04em;
  color: #000000;
`, w = n.default.p.withConfig({
        displayName: "SleepFeatureCards__Description",
        componentId: "sc-22a61cac-8"
    })
    `
  margin: 0;
  font-weight: 400;
  font-size: 16px;
  leading-trim: none;
  line-height: 140%;
  letter-spacing: -0.04em;
  color: #00000080;
`, S = n.default.div.withConfig({
        displayName: "SleepFeatureCards__CardsContainer",
        componentId: "sc-22a61cac-9"
    })
    `
  position: relative;
  width: 100%;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${({theme:e})=>e.globalV2?.md?.maxWidth||"768px"}) {
    height: 500px;
  }
`, v = n.default.div.withConfig({
        displayName: "SleepFeatureCards__Card",
        componentId: "sc-22a61cac-10"
    })
    `
  position: absolute;
  width: 453px;
  height: 601px;
  border-radius: 24px;
  overflow: hidden;
  transform: translateZ(0);
  will-change: transform, opacity;
  transform-origin: center center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
  z-index: ${({$zIndex:e})=>e||1};
  left: 50%;
  top: 50%;

  @media (max-width: ${({theme:e})=>e.globalV2?.md?.maxWidth||"768px"}) {
    width: 200px;
    height: 268px;
  }
`, j = n.default.div.withConfig({
        displayName: "SleepFeatureCards__CardImage",
        componentId: "sc-22a61cac-11"
    })
    `
  position: absolute;
  inset: 0;
  background-image: ${({src:e})=>e?`
    url($ {
        e
    })
    `:"none"};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`, C = n.default.div.withConfig({
        displayName: "SleepFeatureCards__CardOverlay",
        componentId: "sc-22a61cac-12"
    })
    `
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.3) 100%
  );
  pointer-events: none;
`, k = n.default.div.withConfig({
        displayName: "SleepFeatureCards__WhiteOverlay",
        componentId: "sc-22a61cac-13"
    })
    `
  position: absolute;
  inset: 0;
  background-color: rgba(255, 255, 255, 1);
  pointer-events: none;
  z-index: 10;
  border-radius: 24px;
  opacity: 0;
`, _ = n.default.div.withConfig({
        displayName: "SleepFeatureCards__MobileCarouselContainer",
        componentId: "sc-22a61cac-14"
    })
    `
  display: none;
  width: 100%;
  padding: 0;
  box-sizing: border-box;
  margin: 0;

  @media (max-width: ${({theme:e})=>e.globalV2?.md?.maxWidth||"768px"}) {
    display: block;
    margin: 60px 0;
  }
`, I = n.default.div.withConfig({
        displayName: "SleepFeatureCards__MobileCarouselWrapper",
        componentId: "sc-22a61cac-15"
    })
    `
  position: relative;
  width: 100%;
  padding: 0;
  box-sizing: border-box;
`, T = n.default.div.withConfig({
        displayName: "SleepFeatureCards__MobileEmbla",
        componentId: "sc-22a61cac-16"
    })
    `
  overflow: hidden;
  width: 100%;
  padding: 0;
  box-sizing: border-box;
`, A = n.default.div.withConfig({
        displayName: "SleepFeatureCards__MobileEmblaContainer",
        componentId: "sc-22a61cac-17"
    })
    `
  display: flex;
  width: 100%;
  box-sizing: border-box;
`, N = n.default.div.withConfig({
        displayName: "SleepFeatureCards__MobileEmblaSlide",
        componentId: "sc-22a61cac-18"
    })
    `
  flex: 0 0 90%;
  min-width: 0;
  padding: 0 8px;
  box-sizing: border-box;

  &:first-child {
    margin-left: 5%;
  }

  &:last-child {
    margin-right: 5%;
  }

  @media (max-width: 480px) {
    flex: 0 0 90%;
    padding: 0 8px;

    &:first-child {
      margin-left: 5%;
    }

    &:last-child {
      margin-right: 5%;
    }
  }
`, P = n.default.div.withConfig({
        displayName: "SleepFeatureCards__MobileImageWrapper",
        componentId: "sc-22a61cac-19"
    })
    `
  position: relative;
  width: 100%;
  aspect-ratio: 3/4;
  border-radius: 24px;
  overflow: hidden;
  margin-bottom: 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`, $ = n.default.div.withConfig({
        displayName: "SleepFeatureCards__MobileImage",
        componentId: "sc-22a61cac-20"
    })
    `
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: ${({src:e})=>e?`
    url($ {
        e
    })
    `:"none"};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`, U = n.default.div.withConfig({
        displayName: "SleepFeatureCards__MobileTextContainer",
        componentId: "sc-22a61cac-21"
    })
    `
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0 28px;
  box-sizing: border-box;
  opacity: 0;
`, E = n.default.p.withConfig({
        displayName: "SleepFeatureCards__MobileCaption",
        componentId: "sc-22a61cac-22"
    })
    `
  margin: 0;
  font-weight: 400;
  font-style: normal;
  font-size: 12px;
  leading-trim: none;
  line-height: 140%;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #000000b2;
`, R = n.default.h2.withConfig({
        displayName: "SleepFeatureCards__MobileTitle",
        componentId: "sc-22a61cac-23"
    })
    `
  margin: 0;
  font-weight: 500;
  font-style: normal;
  font-size: 20px;
  leading-trim: none;
  line-height: 130%;
  letter-spacing: -0.04em;
  color: #000000;
`, W = n.default.p.withConfig({
        displayName: "SleepFeatureCards__MobileSubtitle",
        componentId: "sc-22a61cac-24"
    })
    `
  margin: 0;
  font-weight: 400;
  font-style: normal;
  font-size: 14px;
  leading-trim: none;
  line-height: 140%;
  letter-spacing: -0.04em;
  color: #00000080;
`, F = n.default.div.withConfig({
        displayName: "SleepFeatureCards__MobileTextWrapper",
        componentId: "sc-22a61cac-25"
    })
    `
  position: relative;
  width: 100%;
  min-height: 140px;
  margin-top: 24px;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`, z = [{
        caption: "COMPREHENSIVE SLEEP REPORTS",
        title: "Access a unified view of your sleep",
        description: "The Ambient Sleep Score brings together insights on sleep quality and sleep environment, helping you take informed decisions for better recovery.",
        image: (0, o.getCompressedAssetUrl)("/web_v2/uh-home-v2/cards/final/1.png")
    }, {
        caption: "ENVIRONMENTAL CONTRIBUTORS",
        title: "Understand what impacts your rest",
        description: "Monitors subtle shifts in your environment while you sleep. Ultrahuman Home tracks light, air freshness, temperature, and noise to help you sleep better.",
        image: (0, o.getCompressedAssetUrl)("/web_v2/uh-home-v2/cards/final/2-new.png")
    }, {
        caption: "RESPIRATORY HEALTH SCORE",
        title: "Decode your breathing patterns",
        description: "The respiratory health insights helps you analyze snoring, coughing and irregular breathing patterns to help catch early signs of potential respiratory issues.",
        image: (0, o.getCompressedAssetUrl)("/web_v2/uh-home-v2/cards/final/3.png")
    }], H = i.default.memo(() => {
        let e = (0, i.useRef)(null),
            n = (0, i.useRef)(null),
            o = (0, i.useRef)([]),
            H = (0, i.useRef)([]),
            M = (0, i.useRef)([]),
            V = (0, l.useGsapContext)(),
            {
                add: B
            } = (0, m.useMasterTimeline)(),
            L = (0, i.useRef)([]),
            {
                width: O
            } = (0, c.useWindowSize)(),
            q = O <= 767,
            [D, G] = (0, d.default)({
                loop: !1,
                align: "center",
                slidesToScroll: 1,
                containScroll: "trimSnaps",
                dragFree: !1
            });
        return (0, s.useIsomorphicLayoutEffect)(() => {
            if (!n.current) return;
            let e = null,
                t = z.length;
            return H.current.length !== t && (H.current = Array(t).fill(null)), o.current.length !== t && (o.current = Array(t).fill(null)), M.current.length !== t && (M.current = Array(t).fill(null)), V.add(() => {
                let i = () => {
                    H.current.forEach((e, t) => {
                        if (!e) return;
                        let i = e.offsetWidth || 453,
                            n = e.offsetHeight || 601,
                            o = M.current[t],
                            a = Math.max(1 - .2 * t, .5);
                        r.default.set(e, {
                            scale: a,
                            xPercent: -50 + 23 * t / 100 * i / i * 100,
                            yPercent: -50 + 0 * t / 100 * n / n * 100,
                            opacity: 1,
                            y: 0
                        }), o && r.default.set(o, {
                            opacity: 0 === t ? 0 : 0 + (t - 1) * 0
                        })
                    }), o.current.forEach((e, t) => {
                        e && r.default.set(e, {
                            opacity: +(0 === t)
                        })
                    })
                };
                i(), e = i, a.ScrollTrigger.addEventListener("refreshInit", i);
                let l = r.default.timeline({
                    defaults: {
                        duration: 1,
                        ease: "power1.out"
                    },
                    scrollTrigger: {
                        immediateRender: !1,
                        trigger: n.current,
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 1.5,
                        anticipatePin: 1,
                        invalidateOnRefresh: !0,
                        refreshPriority: -1,
                        onUpdate: e => {
                            let i = Math.min(Math.floor(e.progress * (t - 1)), t - 1);
                            o.current.forEach((e, t) => {
                                if (!e) return;
                                let n = r.default.getProperty(e, "opacity");
                                t < i - 1 && n > .01 ? r.default.set(e, {
                                    opacity: 0,
                                    force3D: !0
                                }) : t > i + 1 && n > .01 && r.default.set(e, {
                                    opacity: 0,
                                    force3D: !0
                                })
                            })
                        }
                    }
                });
                B(l, "home-sleep-feature-cards", 2), H.current.forEach((e, t) => {
                    if (!e) return;
                    let i = e.offsetWidth || 453,
                        n = e.offsetHeight || 601,
                        o = M.current[t],
                        r = Math.max(1 - .2 * t, .5);
                    l.set(e, {
                        scale: r,
                        xPercent: -50 + 23 * t / 100 * i / i * 100,
                        yPercent: -50 + 0 * t / 100 * n / n * 100,
                        opacity: 1
                    }, "0"), o && l.set(o, {
                        opacity: 0 === t ? 0 : 0 + (t - 1) * 0
                    }, "0")
                }), o.current.forEach((e, t) => {
                    e && r.default.set(e, {
                        opacity: +(0 === t),
                        immediateRender: !0
                    })
                }), l.to({}, {
                    duration: .3
                }, "0"), z.forEach((e, i) => {
                    if (0 === i) return;
                    let n = i - 1,
                        r = H.current[n],
                        a = H.current[i],
                        s = M.current[i],
                        d = o.current[n],
                        c = o.current[i],
                        m = "-=0.15";
                    d && l.to(d, {
                        opacity: 0,
                        duration: .1,
                        ease: "power2.out",
                        immediateRender: !1
                    }, m), c && l.fromTo(c, {
                        opacity: 0,
                        immediateRender: !0
                    }, {
                        opacity: 1,
                        duration: .1,
                        ease: "power2.out",
                        immediateRender: !1
                    }, m), l.to(r, {
                        y: -800,
                        opacity: 0,
                        duration: .25,
                        ease: "power1.in"
                    }, "-=0.15"), l.to(a, {
                        scale: 1,
                        xPercent: -50,
                        yPercent: -50,
                        opacity: 1,
                        duration: .3,
                        ease: "power1.out"
                    }, "-=0.18"), s && l.to(s, {
                        opacity: 0,
                        duration: .3,
                        ease: "power1.out"
                    }, "-=0.25");
                    for (let e = i + 1; e < t; e++) {
                        let t = H.current[e],
                            n = M.current[e];
                        if (!t) continue;
                        let o = t.offsetWidth || 453,
                            r = t.offsetHeight || 601,
                            a = e - i,
                            s = Math.max(1 - .2 * a, .5),
                            d = 23 * a,
                            c = 0 * a,
                            m = 0 + (a - 1) * 0,
                            h = d / 100 * o,
                            p = c / 100 * r;
                        l.to(t, {
                            scale: s,
                            xPercent: -50 + h / o * 100,
                            yPercent: -50 + p / r * 100,
                            opacity: 1,
                            duration: .3,
                            ease: "power1.out"
                        }, "-=0.25"), n && l.to(n, {
                            opacity: m,
                            duration: .3,
                            ease: "power1.out"
                        }, "-=0.25")
                    }
                    i < t - 1 && l.to({}, {
                        duration: .3
                    }, "+=0.05")
                });
                let s = setTimeout(() => {
                    a.ScrollTrigger.refresh()
                }, 100);
                return () => {
                    clearTimeout(s), a.ScrollTrigger.removeEventListener("refreshInit", i)
                }
            }), () => {
                e && a.ScrollTrigger.removeEventListener("refreshInit", e)
            }
        }, [V]), (0, i.useEffect)(() => {
            if (!q || !G) return;
            L.current.length !== z.length && (L.current = Array(z.length).fill(null)), L.current.forEach(e => {
                e && r.default.set(e, {
                    opacity: 0
                })
            });
            let e = () => {
                if (!G) return;
                let e = G.selectedScrollSnap();
                L.current.forEach((t, i) => {
                    t && (i === e && e >= 0 && e < z.length ? r.default.to(t, {
                        opacity: 1,
                        duration: .3,
                        ease: "power2.inOut"
                    }) : r.default.to(t, {
                        opacity: 0,
                        duration: .3,
                        ease: "power2.inOut"
                    }))
                })
            };
            return G.on("select", e), requestAnimationFrame(() => {
                G.scrollTo(0, !1), e()
            }), () => {
                G.off("select", e)
            }
        }, [G, q]), (0, t.jsxs)(h, {
            ref: e,
            "aria-label": "Sleep Feature Cards",
            children: [(0, t.jsx)(p, {
                ref: n,
                children: (0, t.jsx)(u, {
                    children: (0, t.jsxs)(g, {
                        children: [(0, t.jsx)(f, {
                            children: z.map((e, i) => (0, t.jsxs)(x, {
                                ref: e => {
                                    e && (o.current[i] = e)
                                },
                                children: [(0, t.jsx)(b, {
                                    children: e.caption
                                }), (0, t.jsx)(y, {
                                    children: e.title
                                }), (0, t.jsx)(w, {
                                    children: e.description
                                })]
                            }, `text-${i}`))
                        }), (0, t.jsx)(S, {
                            children: z.map((e, i) => (0, t.jsxs)(v, {
                                $zIndex: z.length - i,
                                ref: e => {
                                    e && (H.current[i] = e)
                                },
                                children: [(0, t.jsx)(j, {
                                    src: e.image
                                }), (0, t.jsx)(C, {}), (0, t.jsx)(k, {
                                    ref: e => {
                                        e && (M.current[i] = e)
                                    }
                                })]
                            }, `card-${i}`))
                        })]
                    })
                })
            }), (0, t.jsx)(_, {
                children: (0, t.jsxs)(I, {
                    children: [(0, t.jsx)(T, {
                        ref: D,
                        children: (0, t.jsx)(A, {
                            children: z.map((e, i) => (0, t.jsx)(N, {
                                children: (0, t.jsx)(P, {
                                    children: (0, t.jsx)($, {
                                        src: e.image
                                    })
                                })
                            }, `mobile-slide-${i}`))
                        })
                    }), (0, t.jsx)(F, {
                        children: z.map((e, i) => (0, t.jsxs)(U, {
                            ref: e => {
                                e && (L.current[i] = e)
                            },
                            children: [(0, t.jsx)(E, {
                                children: e.caption
                            }), (0, t.jsx)(R, {
                                children: e.title
                            }), (0, t.jsx)(W, {
                                children: e.description
                            })]
                        }, `mobile-text-${i}`))
                    })]
                })
            })]
        })
    });
    H.displayName = "SleepFeatureCards", e.s(["default", 0, H])
}, 57413, 59469, e => {
    "use strict";
    var t = e.i(91398),
        i = e.i(19231),
        n = e.i(60814),
        o = e.i(57232),
        r = e.i(78198),
        a = e.i(91788),
        l = e.i(21666);
    let s = a.default.forwardRef((e, i) => {
        let {
            className: n,
            caption: o,
            title: r,
            textAlign: a,
            textColor: s,
            image: d,
            alt: u,
            imagePosition: g
        } = e;
        return (0, t.jsxs)("div", {
            className: n,
            ref: i,
            children: [(0, t.jsxs)(c, {
                $textAlign: a,
                $textColor: s,
                children: [(0, t.jsx)(m, {
                    children: o
                }), (0, t.jsx)(h, {
                    children: r
                })]
            }), d ? (0, t.jsx)(p, {
                $imagePosition: g,
                children: (0, t.jsx)(l.CustomImage, {
                    src: d,
                    alt: u || "Ultrahuman Home - features image",
                    width: 600,
                    height: 400
                })
            }) : null]
        })
    });
    s.displayName = "BentoCardBase";
    let d = (0, n.default)(s).withConfig({
        displayName: "BentoCard",
        componentId: "sc-25eb6d3c-0"
    })
    `
  grid-column: ${e=>e.gridColumn||"auto"};
  grid-row: ${e=>e.gridRow||"auto"};

  ${e=>"flex"===e.parentType?`
      flex-shrink: 0;
      width: 80vw;
      min-height: 420px;
  `:`
  `}

  position: relative;
  border-radius: 24px;
  overflow: hidden;

  ${e=>e.bgColor&&`background-color: ${e.bgColor};`}
  ${e=>e.bgGradient&&`background: ${e.bgGradient};`}
  ${e=>e.bgImage&&`background-image: url(${(0,r.getCompressedAssetUrl)(e.bgImage)});`}

  ${e=>e.bgImage&&`
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  `}

  display: flex;
  flex-direction: column;
  flex-direction: ${e=>e.colReverse?"column-reverse":"column"};
  justify-content: space-between;
`, c = n.default.div.withConfig({
        displayName: "BentoCard__TextContainer",
        componentId: "sc-25eb6d3c-1"
    })
    `
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  align-items: ${({$textAlign:e})=>{switch(e){case"left":return"flex-start";case"center":default:return"center";case"right":return"flex-end"}}};
  color: ${({$textColor:e})=>e||"#000"};
  text-align: ${({$textAlign:e})=>e||"center"};
  padding: 1rem;
  width: 100%;

  padding: 2.4rem;

  @media (min-width: ${({theme:e})=>e.globalV2.md.minWidth}) {
    padding: 2.4rem;
  }

  p,
  h3 {
    color: inherit;
  }
`, m = n.default.p.withConfig({
        displayName: "BentoCard__Caption",
        componentId: "sc-25eb6d3c-2"
    })
    `
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: 3.04px;
  text-transform: uppercase;
  opacity: 0.7;
  color: inherit;

  @media (min-width: ${({theme:e})=>e.globalV2.md.minWidth}) {
    font-size: 1.4rem;
  }
`, h = n.default.h3.withConfig({
        displayName: "BentoCard__Title",
        componentId: "sc-25eb6d3c-3"
    })
    `
  font-size: 2.8rem;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
  letter-spacing: -0.96px;
  line-height: 120%;
  color: inherit;

  @media (min-width: ${({theme:e})=>e.globalV2.md.minWidth}) {
    font-size: 2.8rem;
  }

  @media (min-width: ${({theme:e})=>e.globalV2.xl.minWidth}) {
    font-size: 3.2rem;
  }

  @media (min-width: ${({theme:e})=>e.globalV2.xxl.minWidth}) {
    font-size: 3.6rem;
  }
`, p = n.default.div.withConfig({
        displayName: "BentoCard__ImageContainer",
        componentId: "sc-25eb6d3c-4"
    })
    `
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  min-height: 0;

  img {
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    object-position: ${({$imagePosition:e})=>e||"center"};
  }
`, u = (0, n.default)(({
        className: e
    }) => (0, t.jsxs)("div", {
        className: e,
        children: [(0, t.jsxs)("div", {
            className: "top",
            children: [(0, t.jsx)("h2", {
                children: "Where you and yours feel most at Home"
            }), (0, t.jsx)("p", {
                children: "Understand how to make your space better. Your Room Score reflects the current state of your home. Access insights on air quality, light exposure, temperature, noise, and humidity."
            })]
        }), (0, t.jsx)(d, {
            gridColumn: "1 / span 6",
            gridRow: "2 / 3",
            caption: "ROOM SCORE",
            title: "Your environment, decoded",
            alt: "Your space, decoded",
            textColor: "#ffffff",
            bgGradient: "radial-gradient(108.68% 108.68% at 50% -8.68%, #09CC6E 0%, #000 81.42%);",
            textAlign: "center",
            image: "web_v2/home/bento-new/room-score-lg.png",
            parentType: "grid"
        }), (0, t.jsx)(d, {
            gridColumn: "7 / span 5",
            gridRow: "2 / 3",
            caption: "Environment contributors",
            title: "A breakdown of your environment",
            alt: "The anatomy of your environment",
            textColor: "#000000",
            bgColor: "#ffffff",
            textAlign: "center",
            image: "web_v2/home/bento-new/environment-lg.png",
            colReverse: !0,
            parentType: "grid",
            imagePosition: "top"
        }), (0, t.jsx)(d, {
            gridColumn: "1 / span 4",
            gridRow: "3 / 4",
            caption: "NOISE DETECTION",
            title: (0, t.jsxs)(t.Fragment, {
                children: ["Understand your", (0, t.jsx)("br", {}), "environment's noise levels"]
            }),
            alt: "For a more quieter space",
            textColor: "#ffffff",
            textAlign: "left",
            bgImage: "/web_v2/home/bento-new/noise-lg.png",
            parentType: "grid"
        }), (0, t.jsx)(d, {
            gridColumn: "5 / span 7",
            gridRow: "3 / 4",
            caption: "AIR QUALITY",
            title: "Understand your air quality",
            alt: "Your space, decoded",
            textColor: "#ffffff",
            bgImage: "/web_v2/home/bento-new/air-quality-bg-lg.png",
            textAlign: "left",
            image: "web_v2/home/bento-new/air-quality-lg-v2.png",
            parentType: "grid"
        }), (0, t.jsx)(d, {
            gridColumn: "1 / span 5",
            gridRow: "4 / 5",
            caption: "ENVIRONMENTAL SCORE",
            title: (0, t.jsxs)(t.Fragment, {
                children: ["Create a restful", (0, t.jsx)("br", {}), "environment"]
            }),
            alt: "For a more quieter space",
            textColor: "#ffffff",
            textAlign: "center",
            bgImage: "/web_v2/home/bento-new/env-score-lg.png",
            parentType: "grid"
        }), (0, t.jsx)(d, {
            gridColumn: "6 / span 6",
            gridRow: "4 / 5",
            caption: "LIGHT EXPOSURE",
            title: (0, t.jsxs)(t.Fragment, {
                children: ["Align with your", (0, t.jsx)("br", {}), "circadian rhythm"]
            }),
            alt: "For a more quieter space",
            textColor: "#000000",
            textAlign: "center",
            bgImage: "/web_v2/home/bento-new/light-exp-bg-lg.png",
            image: "web_v2/home/bento-new/light-exp-lg.png",
            parentType: "grid",
            imagePosition: "bottom"
        })]
    })).withConfig({
        displayName: "DesktopRecoveryComponent",
        componentId: "sc-7e326189-0"
    })
    `
  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    position: relative;
    display: grid;
    grid-template-columns: repeat(11, 1fr);
    grid-template-rows: 18rem 53rem 53rem 53rem;
    justify-content: center;
    gap: 1.4rem;
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

  .bento-1 {
    position: relative;
    text-align: center;
    border-radius: 24px;
    grid-row: 2 / 3;
    grid-column: 1 / span 5;
    background: #000;
    padding: 3.6rem 2.4rem;
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

  .bento-2 {
    position: relative;
    border-radius: 24px;
    background: #fff;
    overflow: hidden;
    padding: 3.6rem 2.4rem;
    grid-column: 6 / span 6;
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

  .bento-3 {
    position: relative;
    padding: 3.2rem 2.4rem 0;
    grid-column: 1 / span 11;
    grid-row: 4 / 5;
    border-radius: 24px;
    background: #fff;
    overflow: hidden;

    @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
      padding: 3.6rem 2.4rem;
      grid-column: 1 / span 7;
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

  .bento-4 {
    position: relative;
    border-radius: 24px;
    background-image: url(${(0,r.getCompressedAssetUrl)("/web_v2/ring-buy/sleep/png/tinted.png")});
    overflow: hidden;
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: cover;
    padding: 3.6rem 2.4rem;
    grid-column: 8 / span 4;
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

  .bento-5 {
    position: relative;
    text-align: center;
    border-radius: 24px;
    grid-row: 4 / 5;
    background: #000;
    padding: 3.6rem 2.4rem;
    grid-column: 1 / span 5;
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

  .bento-6 {
    position: relative;
    border-radius: 24px;
    background: #fff;
    overflow: hidden;
    padding: 3.6rem 2.4rem;
    grid-column: 6 / span 6;
    grid-row: 4 / 5;

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
`;
    var g = e.i(2100);
    let f = (0, n.default)(({
        className: e
    }) => (0, t.jsxs)("div", {
        className: e,
        children: [(0, t.jsxs)("div", {
            className: "head",
            children: [(0, t.jsx)("h2", {
                children: "Where you and yours feel most at Home"
            }), (0, t.jsx)("p", {
                children: "Understand how to make your space better. Your Room Score reflects the current state of your home. Access insights on air quality, light exposure, temperature, noise, and humidity."
            })]
        }), (0, t.jsx)("div", {
            className: "sleep-items-container",
            children: (0, t.jsxs)("div", {
                className: "items",
                children: [(0, t.jsx)(d, {
                    gridColumn: "1 / span 6",
                    gridRow: "2 / 3",
                    caption: "ROOM SCORE",
                    title: (0, t.jsxs)(t.Fragment, {
                        children: ["Your environment,", (0, t.jsx)("br", {}), "decoded"]
                    }),
                    alt: "Your space, decoded",
                    textColor: "#ffffff",
                    bgGradient: "radial-gradient(108.68% 108.68% at 50% -8.68%, #09CC6E 0%, #000 81.42%)",
                    textAlign: "left",
                    image: "web_v2/home/bento-new/room-score-sm.png",
                    parentType: "flex"
                }), (0, t.jsx)(d, {
                    gridColumn: "7 / span 5",
                    gridRow: "2 / 3",
                    caption: "Environment contributors",
                    title: "A breakdown of your environment",
                    alt: "The anatomy of your environment",
                    textColor: "#000000",
                    bgColor: "#ffffff",
                    textAlign: "left",
                    image: "web_v2/home/bento-new/environment-sm.png",
                    colReverse: !0,
                    parentType: "flex"
                }), (0, t.jsx)(d, {
                    gridColumn: "1 / span 4",
                    gridRow: "3 / 4",
                    caption: "NOISE DETECTION",
                    title: (0, t.jsxs)(t.Fragment, {
                        children: ["Understand your", (0, t.jsx)("br", {}), "environment's noise levels"]
                    }),
                    alt: "For a more quieter space",
                    textColor: "#ffffff",
                    textAlign: "left",
                    bgImage: "/web_v2/home/bento-new/noise-detection-sm.png",
                    parentType: "flex"
                }), (0, t.jsx)(d, {
                    gridColumn: "5 / span 7",
                    gridRow: "3 / 4",
                    caption: "AIR QUALITY",
                    title: "Understand your air quality",
                    alt: "Your space, decoded",
                    textColor: "#ffffff",
                    bgImage: "/web_v2/home/bento-new/air-quality-bg-sm.png",
                    textAlign: "left",
                    image: "web_v2/home/bento-new/air-quality-sm-v2.png",
                    parentType: "flex"
                }), (0, t.jsx)(d, {
                    gridColumn: "1 / span 5",
                    gridRow: "4 / 5",
                    caption: "ENVIRONMENTAL SCORE",
                    title: (0, t.jsx)(t.Fragment, {
                        children: "Create a restful environment"
                    }),
                    alt: "For a more quieter space",
                    textColor: "#ffffff",
                    textAlign: "left",
                    bgImage: "/web_v2/home/bento-new/env-score-sm-v3.png",
                    parentType: "flex"
                }), (0, t.jsx)(d, {
                    gridColumn: "6 / span 6",
                    gridRow: "4 / 5",
                    caption: "LIGHT EXPOSURE",
                    title: (0, t.jsxs)(t.Fragment, {
                        children: ["Align with your", (0, t.jsx)("br", {}), "circadian rhythm"]
                    }),
                    alt: "For a more quieter space",
                    textColor: "#000000",
                    textAlign: "left",
                    bgImage: "/web_v2/home/bento-new/light-exp-bg-sm.png",
                    image: "web_v2/home/bento-new/light-exp-sm.png",
                    parentType: "flex"
                })]
            })
        })]
    })).withConfig({
        displayName: "MobileRecoveryComponent",
        componentId: "sc-adc55441-0"
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
    padding: 0 16px;

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
        background-image: url(${(0,r.getCompressedAssetUrl)("/web_v2/ring-buy/recovery/png/recoveryAsset.png")});
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
        background-image: url(${(0,r.getCompressedAssetUrl)("/web_v2/ring-buy/recovery/png/stress.png")});
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
`;
    n.default.div.withConfig({
        displayName: "StyledComponents__Container",
        componentId: "sc-5e2539f2-0"
    })
    `
  ${g.gridMixin}
  padding: 6.4rem 0;

  @media (min-width: ${({theme:e})=>e.global.phone.maxWidth}) {
    padding: 10rem 0;
  }
`, n.default.div.withConfig({
        displayName: "StyledComponents__Content",
        componentId: "sc-5e2539f2-1"
    })
    `
  grid-column: 1/-1;

  @media (min-width: ${({theme:e})=>e.global.phone.maxWidth}) {
    grid-column: 2/-2;
  }
`, n.default.h2.withConfig({
        displayName: "StyledComponents__H2",
        componentId: "sc-5e2539f2-2"
    })
    `
  font-size: 1.6rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.4);
  text-align: center;
  margin-bottom: 2.4rem;
`, n.default.h2.withConfig({
        displayName: "StyledComponents__H2Large",
        componentId: "sc-5e2539f2-3"
    })
    `
  font-size: 4.4rem;
  line-height: 5.2rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
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
`, n.default.h3.withConfig({
        displayName: "StyledComponents__H3",
        componentId: "sc-5e2539f2-4"
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
    let x = n.css `
  padding: 7.2rem 0;

  @media (min-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
    padding: 9.6rem 0;
  }
`;
    n.css `
  padding: 1rem 0 8rem 0;

  @media (min-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
    padding: 0 0 12rem 0;
  }
`, e.s(["sectionPadding", 0, x], 59469);
    let b = (0, n.default)(({
        className: e
    }) => {
        let {
            width: n
        } = (0, o.useWindowSize)();
        return (0, t.jsx)("section", {
            className: e,
            children: (0, t.jsx)(i.Container, {
                children: n > 992 ? (0, t.jsx)(u, {}) : (0, t.jsx)(f, {})
            })
        })
    }).withConfig({
        displayName: "BentoSection",
        componentId: "sc-1c38d328-0"
    })
    `
  position: relative;
  background: #eee;

  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    width: 100vw;
    height: 100%;
    background: #eee;
    overflow: hidden;
    ${x}
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
`;
    e.s(["BentoSection", 0, b], 57413)
}, 74130, e => {
    "use strict";
    var t = e.i(91398),
        i = e.i(68489),
        n = e.i(40816),
        o = e.i(79546),
        r = e.i(54134),
        a = e.i(72218),
        l = e.i(57413);
    e.i(64157);
    var s = e.i(71179),
        d = e.i(88061),
        c = e.i(69949),
        m = e.i(60814),
        h = e.i(15110),
        p = e.i(17162),
        u = e.i(2100),
        g = e.i(45139);
    let f = (0, m.default)(({
        className: e
    }) => {
        let {
            t: i
        } = (0, s.useTranslation)("ring"), {
            uhx: o,
            store: r,
            uhxCart: a,
            goToNextStep: l,
            checkout: m,
            displayPrice: u,
            dueEffectivePrice: f,
            shippingEstimate: x,
            isLoading: b
        } = (0, n.useHomeContext)(), y = (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsx)(c.MidPanel, {
                children: (0, t.jsxs)("p", {
                    className: "total-price-single",
                    children: [u(f), (0, t.jsxs)("span", {
                        className: "tax-disclaimer",
                        children: [" ", g.productMap_home ? .taxesInclusion[r] ? "(Tax incl.)" : "(Tax excl.)"]
                    })]
                })
            }), (0, t.jsxs)(c.MidPanelPhone, {
                onClick: () => {
                    let e = document.getElementById("order-summary-card");
                    e && e.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    })
                },
                children: [(0, t.jsx)("div", {
                    className: "subtitle-text-btn",
                    children: "Total"
                }), (0, t.jsxs)("p", {
                    className: "total-price-single",
                    children: [u(f), (0, t.jsxs)("span", {
                        className: "tax-disclaimer",
                        children: [" ", g.productMap_home ? .taxesInclusion[r] ? "(Tax incl.)" : "(Tax excl.)"]
                    })]
                })]
            })]
        });
        return (0, t.jsxs)("div", {
            className: e,
            children: [(0, t.jsx)(c.LeftPanel, {
                children: (0, t.jsxs)("p", {
                    className: "chat-specialist",
                    children: [(0, t.jsx)(d.ShippingBox, {}), x]
                })
            }), y, (0, t.jsx)(c.RightPanel, {
                children: o || null !== a ? (0, t.jsx)(h.PrimaryButton, {
                    onClick: m,
                    disabled: b || !(o || null !== a),
                    "aria-busy": b,
                    "data-buttontype": "add to cart",
                    "data-variantId": g.productMap_home ? g.productMap_home ? .variantId[r] : "",
                    "data-product": "Ultrahuman Home",
                    children: b ? (0, t.jsx)(p.DotSpinner, {
                        color: "#000000"
                    }) : i("ring.productSelection.cartSummary.addToCart")
                }) : (0, t.jsx)(h.PrimaryButton, {
                    onClick: l,
                    "data-buttontype": "go to next step",
                    "data-variantId": g.productMap_home ? g.productMap_home ? .variantId[r] : "",
                    "data-product": "Ultrahuman Home",
                    children: i("ring.CONTINUE")
                })
            })]
        })
    }).withConfig({
        displayName: "BottomBar",
        componentId: "sc-9bedf87f-0"
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

  /* Improve Safari iOS sticky performance */
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  will-change: transform;

  .tax-disclaimer {
    text-align: center;
    font-size: 14px;
    font-weight: 400;
    line-height: 23px; /* 164.286% */
    letter-spacing: -0.28px;
  }


  ${u.gridMixin}

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
    var x = e.i(5894),
        b = e.i(28014),
        y = e.i(61791),
        w = e.i(21666),
        S = e.i(91788);
    let v = m.css `
  margin: 4.8rem 0;
  @media (min-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
    margin: 9.6rem 0;
  }
`,
        j = m.default.div.withConfig({
            displayName: "InTheBox__Wrapper",
            componentId: "sc-ff04c679-0"
        })
    `
  ${u.gridMixin}
  ${y.sectionPadding}
  ${v}

  margin-top: 0 !important;
`, C = (0, m.default)(({
        className: e,
        htmlId: i
    }) => {
        let {
            t: n
        } = (0, s.useTranslation)(["uhHome", "ring"]), o = (0, S.useRef)(null), r = [{
            image: "web_v2/home/buy/in-the-box/Desktop/home_top.png/w_800",
            title: n("uhHome.inTheBox.data.Home")
        }, {
            image: "web_v2/home/buy/in-the-box/Desktop/Charger_home.png/w_800",
            title: n("uhHome.inTheBox.data.Charger")
        }, {
            image: "web_v2/illustrations/content-cable.png/w_800",
            title: n("uhHome.inTheBox.data.Cable")
        }];
        return (0, t.jsx)(j, {
            className: e,
            id: i,
            ref: o,
            children: (0, t.jsxs)("div", {
                children: [(0, t.jsxs)(y.H2Large, {
                    className: "title",
                    children: [n("ring:ring.contents.titleA"), " ", (0, t.jsx)("span", {
                        children: n("ring:ring.contents.titleB")
                    })]
                }), (0, t.jsx)("div", {
                    className: "contents",
                    children: r.map((e, i) => (0, t.jsxs)("div", {
                        className: "box-content-element-wrapper",
                        children: [(0, t.jsx)("div", {
                            className: "box-content-element",
                            children: (0, t.jsx)(w.CustomImage, {
                                src: e.image,
                                alt: e.title,
                                width: "200",
                                height: "200"
                            })
                        }), (0, t.jsxs)("p", {
                            className: 1 == i ? "disclaimer-added" : "",
                            children: [e.title, 1 == i ? (0, t.jsx)("span", {
                                className: "disclaimer",
                                children: "*BASED ON REGIONAL-AVAILABILITY"
                            }) : null]
                        })]
                    }, i))
                })]
            })
        })
    }).withConfig({
        displayName: "InTheBox",
        componentId: "sc-ff04c679-1"
    })
    `
  > div {
    grid-column: 2/-2;

    h2 {
      @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
        padding-bottom: 2.4rem;
      }
    }
  }

  .contents {
    ${u.hideScrollbar}
    display: flex;
    flex-wrap: no-wrap;
    overflow-x: auto;
    gap: 10px;
    scroll-snap-type: x mandatory;
    overflow-y: hidden;

    @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
      border-radius: 16px;
      padding: 7.2rem 0;
    }

    .box-content-element-wrapper {
      width: 80%;
      flex-shrink: 0;
      scroll-snap-align: center;
      text-align: center;

      @media (min-width: ${({theme:e})=>e.global.phone.maxWidth}) {
        width: 33%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 6.3rem;
      }

      p {
        position: relative;
        font-size: 2.2rem;
        font-weight: 500;
        padding: 24px 0 0 0;
        text-align: center;
        font-style: normal;
        font-weight: 500;
        text-transform: capitalize;
        margin: unset auto;

        @media (min-width: ${({theme:e})=>e.global.phone.maxWidth}) {
          padding: 0;
          font-size: 24px;
          line-height: 120%; /* 28.8px */
          letter-spacing: -0.96px;
        }
      }

      .disclaimer-added {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        gap: 0.4rem;

        @media (min-width: ${({theme:e})=>e.global.phone.maxWidth}) {
          width: 16ch;
        }

        .disclaimer {
          display: flex;
          justify-content: center;
          align-items: center;
          bottom: -20px;
          width: 100%;
          width: 100%;
          text-align: center;
          display: flex;
          font-size: 1.3rem;
          letter-spacing: 0.01px;
          opacity: 0.3;

          @media (min-width: ${({theme:e})=>e.global.phone.maxWidth}) {
            position: absolute;
            bottom: -28px;
          }
        }
      }

      .box-content-element {
        background: rgba(238, 238, 238, 1);

        img {
          height: 300px;
          width: auto;
        }
      }
    }
  }

  & .title {
    color: #000000;
    letter-spacing: -1.92px;
  }

  @media (min-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
    overflow-x: hidden;
    .contents {
      background: rgba(238, 238, 238, 1);
      justify-content: space-between;
    }
  }
`;
    var k = e.i(19231),
        _ = e.i(59469);
    let I = m.default.h1.withConfig({
        displayName: "TechSpecComponent__Title",
        componentId: "sc-42c1c3ba-0"
    })
    `
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 4rem;
  color: #fff;
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  line-height: 100%; /* 48px */
  letter-spacing: -1.44px;
  text-align: center;

  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    font-size: 80px;
    line-height: 88px; /* 110% */
    letter-spacing: -1.6px;
    margin-bottom: 6rem;
  }
`, T = m.default.div.withConfig({
        displayName: "TechSpecComponent__ProductImage",
        componentId: "sc-42c1c3ba-1"
    })
    `
  position: relative;
  width: 100%;
  margin: 0 auto 6.95rem;

  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    margin: 0 auto 13rem;
  }

  > div {
    position: relative !important;
    width: 100% !important;
    height: auto !important;
  }

  img {
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: auto !important;
  }
`, A = m.default.div.withConfig({
        displayName: "TechSpecComponent__SpecificationSection",
        componentId: "sc-42c1c3ba-2"
    })
    `
  margin-bottom: 6rem;
`, N = m.default.h2.withConfig({
        displayName: "TechSpecComponent__SectionTitle",
        componentId: "sc-42c1c3ba-3"
    })
    `
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1.1rem;

  color: #fff;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 133.333%;
  letter-spacing: -0.48px;

  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    font-size: 32px;
  }
`, P = m.default.div.withConfig({
        displayName: "TechSpecComponent__SpecTable",
        componentId: "sc-42c1c3ba-4"
    })
    `
  display: table;
  width: 100%;
  border-collapse: collapse;
`, $ = m.default.div.withConfig({
        displayName: "TechSpecComponent__SpecRow",
        componentId: "sc-42c1c3ba-5"
    })
    `
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.18);
  color: rgba(255, 255, 255, 0.6);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;

  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    font-size: 20px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.22);
  }

  &:last-child {
    border-bottom: none;
  }
`, U = m.default.div.withConfig({
        displayName: "TechSpecComponent__SpecLabel",
        componentId: "sc-42c1c3ba-6"
    })
    `
  display: table-cell;
  padding: 1.3rem 0;
  vertical-align: middle;
  color: rgba(255, 255, 255, 1);
`, E = m.default.div.withConfig({
        displayName: "TechSpecComponent__SpecValue",
        componentId: "sc-42c1c3ba-7"
    })
    `
  display: table-cell;
  padding: 1rem 0;
  vertical-align: middle;
  text-align: right;
`, R = m.default.div.withConfig({
        displayName: "TechSpecComponent__TechContainer",
        componentId: "sc-42c1c3ba-8"
    })
    `
  background-color: #000;
  color: #fff;
  padding: 2rem;
  ${_.sectionPadding}
`, W = () => (0, t.jsx)(R, {
        children: (0, t.jsxs)(k.Container, {
            children: [(0, t.jsx)(I, {
                children: "Technical Specifications"
            }), (0, t.jsx)(T, {
                children: (0, t.jsx)(w.CustomImage, {
                    src: "web_v2/uh-home/home-outline.svg",
                    alt: "uh-home",
                    fill: !0
                })
            }), (0, t.jsxs)(A, {
                children: [(0, t.jsx)(N, {
                    children: "Dimensions & Weight "
                }), (0, t.jsxs)(P, {
                    children: [(0, t.jsxs)($, {
                        children: [(0, t.jsx)(U, {
                            children: "Width"
                        }), (0, t.jsx)(E, {
                            children: "12 cm"
                        })]
                    }), (0, t.jsxs)($, {
                        children: [(0, t.jsx)(U, {
                            children: "Height"
                        }), (0, t.jsx)(E, {
                            children: "4.7 cm"
                        })]
                    }), (0, t.jsxs)($, {
                        children: [(0, t.jsx)(U, {
                            children: "Length"
                        }), (0, t.jsx)(E, {
                            children: "12 cm"
                        })]
                    }), (0, t.jsxs)($, {
                        children: [(0, t.jsx)(U, {
                            children: "Weight"
                        }), (0, t.jsx)(E, {
                            children: "540 grams"
                        })]
                    })]
                })]
            }), (0, t.jsxs)(A, {
                children: [(0, t.jsx)(N, {
                    children: "Materials & Finish"
                }), (0, t.jsxs)(P, {
                    children: [(0, t.jsxs)($, {
                        children: [(0, t.jsx)(U, {
                            children: "Enclosure"
                        }), (0, t.jsx)(E, {
                            children: "Anodised Aluminium"
                        })]
                    }), (0, t.jsxs)($, {
                        children: [(0, t.jsx)(U, {
                            children: "Finish Options"
                        }), (0, t.jsx)(E, {
                            children: "Matte Finish"
                        })]
                    }), (0, t.jsxs)($, {
                        children: [(0, t.jsx)(U, {
                            children: "Air Intake Grilles"
                        }), (0, t.jsx)(E, {
                            children: "Precision-perforated metal"
                        })]
                    })]
                })]
            }), (0, t.jsxs)(A, {
                children: [(0, t.jsx)(N, {
                    children: "Sensors & Inputs"
                }), (0, t.jsxs)(P, {
                    children: [(0, t.jsxs)($, {
                        children: [(0, t.jsx)(U, {
                            children: "Air Quality"
                        }), (0, t.jsx)(E, {
                            children: "VOC, CO, CO₂, HCHO, Smoke"
                        })]
                    }), (0, t.jsxs)($, {
                        children: [(0, t.jsx)(U, {
                            children: "Particulate matter"
                        }), (0, t.jsx)(E, {
                            children: " PM1.0, PM2.5, PM10"
                        })]
                    }), (0, t.jsxs)($, {
                        children: [(0, t.jsx)(U, {
                            children: "Environment"
                        }), (0, t.jsx)(E, {
                            children: "Temperature, Humidity"
                        })]
                    }), (0, t.jsxs)($, {
                        children: [(0, t.jsx)(U, {
                            children: "Light Exposure"
                        }), (0, t.jsx)(E, {
                            children: "Red, Blue, Green, Infrared Light"
                        })]
                    }), (0, t.jsxs)($, {
                        children: [(0, t.jsx)(U, {
                            children: "UV Exposure"
                        }), (0, t.jsx)(E, {
                            children: "UVA, UVB, UVC"
                        })]
                    }), (0, t.jsxs)($, {
                        children: [(0, t.jsx)(U, {
                            children: "Sound"
                        }), (0, t.jsx)(E, {
                            children: "dBA-level microphone"
                        })]
                    }), (0, t.jsxs)($, {
                        children: [(0, t.jsx)(U, {
                            children: "Ambient Noise"
                        }), (0, t.jsx)(E, {
                            children: "Noise Module (DB Level)"
                        })]
                    }), (0, t.jsxs)($, {
                        children: [(0, t.jsx)(U, {
                            children: "Motion"
                        }), (0, t.jsx)(E, {
                            children: "Presence detection via PIR (optional inclusion)"
                        })]
                    })]
                })]
            }), (0, t.jsxs)(A, {
                children: [(0, t.jsx)(N, {
                    children: "Connectivity"
                }), (0, t.jsxs)(P, {
                    children: [(0, t.jsxs)($, {
                        children: [(0, t.jsx)(U, {
                            children: "Wi-Fi"
                        }), (0, t.jsx)(E, {
                            children: "2.4GHz / 5GHz Dual-band"
                        })]
                    }), (0, t.jsxs)($, {
                        children: [(0, t.jsx)(U, {
                            children: "Bluetooth"
                        }), (0, t.jsx)(E, {
                            children: "BLE 5.3"
                        })]
                    }), (0, t.jsxs)($, {
                        children: [(0, t.jsx)(U, {
                            children: "App Control"
                        }), (0, t.jsx)(E, {
                            children: "Via Ultrahuman app (iOS & Android)"
                        })]
                    })]
                })]
            }), (0, t.jsxs)(A, {
                children: [(0, t.jsx)(N, {
                    children: "Power"
                }), (0, t.jsxs)(P, {
                    children: [(0, t.jsxs)($, {
                        children: [(0, t.jsx)(U, {
                            children: "Input Voltage"
                        }), (0, t.jsx)(E, {
                            children: "100-240V AC"
                        })]
                    }), (0, t.jsxs)($, {
                        children: [(0, t.jsx)(U, {
                            children: "Cable Length"
                        }), (0, t.jsx)(E, {
                            children: "1 meter"
                        })]
                    })]
                })]
            })]
        })
    });
    var F = e.i(78198),
        z = e.i(52935),
        H = e.i(46737),
        M = e.i(11245),
        V = e.i(82382),
        B = e.i(12255),
        L = e.i(82851),
        O = e.i(66243),
        q = e.i(61525);
    let D = (0, i.default)(() => e.A(38494), {
        loadableGenerated: {
            modules: [21882]
        },
        loading: () => (0, t.jsx)("div", {
            className: "loading-placeholder",
            children: "Loading..."
        }),
        ssr: !0
    });
    e.s(["__N_SSP", () => !0, "default", 0, ({
        currency: e,
        store: i,
        countryCode: s,
        countrySpecificConfig: d,
        directCheckout: c
    }) => {
        (0, S.useContext)(o.CartContext).setStore(i), (0, H.useGlobalUI)({
            headerCollaspable: !0
        });
        let m = (({
            countryCode: e,
            store: t,
            currency: i
        }) => {
            let n = (e || "US").toUpperCase(),
                o = n.toLowerCase(),
                r = g.HomePrice[t] ? ? 599,
                a = i.toUpperCase(),
                l = (0, B.generateProductSchema)({
                    name: "Ultrahuman Home",
                    description: "A quiet yet powerful sleep monitor to help you rest better.",
                    imageUrl: (0, F.getAssetUrl)("/web_v2/home/buy/desktop/pricing_carousel_b.png"),
                    brand: "Ultrahuman",
                    category: "Smart Home Device",
                    price: r,
                    currency: a,
                    country: n,
                    availability: "InStock",
                    url: `https://www.ultrahuman.com/${o}/home/buy`,
                    rating: {
                        ratingValue: 4.6,
                        reviewCount: 1200
                    }
                }),
                s = x.HomeFaqData.map(e => ({
                    question: e.title,
                    answer: (0, q.extractTextFromJSX)(e.description) || "Home FAQ answer"
                })).filter(e => e.question.trim().length > 0);
            return [l, (0, L.generateFAQSchema)(s), (0, O.generateBreadcrumbSchema)([{
                name: "Home",
                url: "https://www.ultrahuman.com"
            }, {
                name: "Ultrahuman Home",
                url: "https://www.ultrahuman.com/home"
            }, {
                name: "Buy Ultrahuman Home",
                url: `https://www.ultrahuman.com/${o}/home/buy`
            }])]
        })({
            countryCode: s,
            store: i,
            currency: e
        });
        return (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsx)(r.SEO, {
                title: "Ultrahuman Home | Pricing",
                description: "A quiet yet powerful sleep monitor to help you rest better.",
                image: (0, F.getCompressedAssetUrl)("/web_v2/home/buy/desktop/pricing_carousel_b.png"),
                basePath: "/home/buy"
            }), (0, t.jsx)(a.JsonLd, {
                data: m
            }), (0, t.jsx)(n.HomeContextProvider, {
                currency: e,
                store: i,
                defaultAddon: d.defaultAddon,
                directCheckout: c,
                children: (0, t.jsxs)(V.MasterTimelineProvider, {
                    children: [(0, t.jsx)(D, {
                        countryCode: s,
                        countrySpecificConfig: d
                    }), (0, t.jsx)(C, {
                        htmlId: "uh-home-contents"
                    }), (0, t.jsx)(M.default, {}), (0, t.jsx)(b.ImageTextBlockLayout, {
                        htmlId: "uh-home-image-text-block"
                    }), (0, t.jsx)(l.BentoSection, {}), (0, t.jsx)(W, {}), (0, t.jsx)(z.ProductWizard, {
                        title: "Still unsure if Ultrahuman Home is right for you?"
                    }), (0, t.jsx)(x.default, {}), (0, t.jsx)(f, {})]
                })
            })]
        })
    }], 74130)
}, 29630, (e, t, i) => {
    let n = "/home/buy";
    (window.__NEXT_P = window.__NEXT_P || []).push([n, () => e.r(74130)]), t.hot && t.hot.dispose(function() {
        window.__NEXT_P.push([n])
    })
}, 48761, e => {
    e.v(t => Promise.all(["static/chunks/28e14a26e92e0e1d.js"].map(t => e.l(t))).then(() => t(93594)))
}, 28805, e => {
    e.v(e => Promise.resolve().then(() => e(79466)))
}, 28152, e => {
    e.v(t => Promise.all(["static/chunks/0c0e4fb189510bbf.js", "static/chunks/2b384dd04311c51f.js", "static/chunks/0f3fdc6c2a496674.js", "static/chunks/01d9796a0404d1a4.js"].map(t => e.l(t))).then(() => t(40008)))
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
}, 38494, e => {
    e.v(t => Promise.all(["static/chunks/071cc27b55fd6981.js", "static/chunks/7f63f9d45a04603b.js", "static/chunks/bcf8b787279c338e.js"].map(t => e.l(t))).then(() => t(21882)))
}]);