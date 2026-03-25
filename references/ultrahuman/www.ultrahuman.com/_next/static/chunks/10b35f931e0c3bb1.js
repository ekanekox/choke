(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 54134, t => {
    "use strict";
    var e = t.i(91398),
        a = t.i(58678),
        r = t.i(3828),
        i = t.i(91788),
        o = t.i(3115),
        n = t.i(71225);
    let s = "https://www.ultrahuman.com";

    function c(t) {
        return t.endsWith("/") ? t : t + "/"
    }
    t.s(["SEO", 0, ({
        title: t,
        description: u,
        image: h,
        canonical: l,
        basePath: p,
        nonIndexable: d,
        robots: m
    }) => {
        let y, {
                asPath: f
            } = (0, r.useRouter)(),
            {
                regionSlug: g
            } = (0, i.useContext)(o.RegionLocaleContext);
        if (l) y = l;
        else if (p) y = `${s}/${g}${c(p)}`;
        else {
            let t = f.split("?")[0].split("#")[0];
            y = `${s}${t}`
        }
        let b = !!p,
            P = p ? `${s}/global${c(p)}` : void 0,
            _ = b ? (0, n.getAllRegionSlugs)() : [];
        return (0, e.jsxs)(a.default, {
            children: [(0, e.jsx)("title", {
                children: t
            }), (0, e.jsx)("meta", {
                name: "twitter:title",
                content: t
            }, "twitter-title"), (0, e.jsx)("meta", {
                property: "og:title",
                content: t
            }, "og-title"), (0, e.jsx)("meta", {
                name: "twitter:description",
                content: u
            }, "twitter-description"), (0, e.jsx)("meta", {
                name: "description",
                content: u
            }, "description"), (0, e.jsx)("meta", {
                property: "og:description",
                content: u
            }, "og-description"), (0, e.jsx)("meta", {
                property: "og:url",
                content: y
            }, "og-url"), (0, e.jsx)("meta", {
                property: "og:site_name",
                content: "Ultrahuman"
            }, "og-site-name"), h && (0, e.jsx)("meta", {
                name: "twitter:image",
                content: h
            }, "twitter-image"), h && (0, e.jsx)("meta", {
                property: "og:image",
                content: h
            }, "og-image"), (0, e.jsx)("link", {
                rel: "canonical",
                href: y
            }, "canonical"), P && (0, e.jsx)("link", {
                rel: "alternate",
                hrefLang: "x-default",
                href: P
            }, "hreflang-x-default"), _.map(t => {
                let a, r, i = (0, n.parseRegionLocale)(t),
                    o = `${s}/${t}${c(p)}`;
                if ("GLOBAL" === i.region) return null;
                let u = (a = i.region.toUpperCase(), r = (0, n.getDefaultLanguageForRegion)(a), `${r}-${a}`),
                    h = t.includes("-") ? `${i.language}-${i.region}` : u;
                return (0, e.jsx)("link", {
                    rel: "alternate",
                    hrefLang: h,
                    href: o
                }, `hreflang-${t}`)
            }), d && (0, e.jsx)("meta", {
                name: "google",
                content: "nositelinkssearchbox"
            }, "sitelinks"), d && (0, e.jsx)("meta", {
                name: "google",
                content: "notranslate"
            }, "notranslate"), m ? (0, e.jsx)("meta", {
                name: "robots",
                content: m
            }, "robots") : d && (0, e.jsx)("meta", {
                name: "robots",
                content: "noindex,nofollow"
            }, "robots")]
        })
    }])
}, 61791, t => {
    "use strict";
    var e = t.i(60814);
    let a = e.default.h2.withConfig({
        displayName: "styleConstants__H2",
        componentId: "sc-daf797e4-0"
    })
    `
  font-size: 1.6rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.4);
  text-align: center;
  margin-bottom: 2.4rem;
`, r = e.default.h2.withConfig({
        displayName: "styleConstants__H2Large",
        componentId: "sc-daf797e4-1"
    })
    `
  font-size: 4.4rem;
  line-height: 5.2rem;
  font-weight: 500;
  color: ${({color:t})=>t??"rgba(255, 255, 255, 1)"};
  margin-bottom: 2.4rem;
  text-align: center;

  @media (min-width: ${({theme:t})=>t.global.tablet.maxWidth}) {
    font-size: 5.2rem;
    line-height: 6.4rem;
    text-align: center;
  }

  @media (min-width: ${({theme:t})=>t.global.laptop.maxWidth}) {
    font-size: 6.4rem;
    line-height: 7.2rem;
  }
`;
    e.default.h3.withConfig({
        displayName: "styleConstants__H3",
        componentId: "sc-daf797e4-2"
    })
    `
  font-size: 5.2rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  margin-bottom: 2.4rem;

  @media (min-width: ${({theme:t})=>t.global.laptop.maxWidth}) {
    font-size: 7.2rem;
  }
`;
    let i = e.default.p.withConfig({
        displayName: "styleConstants__P",
        componentId: "sc-daf797e4-3"
    })
    `
  font-size: 1.6rem;
  font-weight: 400;
  margin-bottom: 1.6rem;
  text-align: center;
  line-height: 120%;

  @media (min-width: ${({theme:t})=>t.global.tablet.maxWidth}) {
    font-size: 2rem;
  }
`, o = e.css `
  padding: 4.8rem 0;
  @media (min-width: ${({theme:t})=>t.global.tablet.maxWidth}) {
    padding: 9.6rem 0;
  }
`, n = e.css `
  padding: 1rem 0 8rem 0;
  @media (min-width: ${({theme:t})=>t.global.tablet.maxWidth}) {
    padding: 0 0 12rem 0;
  }
`;
    t.s(["H2", 0, a, "H2Large", 0, r, "P", 0, i, "productSectionPadding", 0, n, "sectionPadding", 0, o])
}, 6939, t => {
    t.v("/_next/static/media/TwoWeeksIN.9ee50f9f.png")
}, 94061, t => {
    t.v("/_next/static/media/ThreeMonthAE.f6b488e5.png")
}, 76097, t => {
    t.v("/_next/static/media/SixMOnthsAE.0387a7e8.png")
}, 71231, t => {
    t.v("/_next/static/media/OneYearAE.43ca5005.png")
}, 8025, t => {
    t.v("/_next/static/media/OneMonthAE.061269db.png")
}, 98314, 63263, 43572, 83240, 1431, 20100, t => {
    "use strict";
    var e = t.i(59207);
    t.i(50461);
    var a = t.i(91398);
    let r = {
            src: t.i(6939).default,
            width: 1671,
            height: 2088,
            blurWidth: 6,
            blurHeight: 8,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAAqElEQVR42lXLsQpFYABA4f9FlDcwK3kAKcmb2MRkJZNNJrlFsiDKC9ilJIPlf45zu7Y7f+eI+lPT9z3TNDHPM+M40rYtoqoquq5jGIZ/iKKIIAgIw5A4jsnznLIsEaZpoqoqmqZhGAae55GmKcJxHBRFQdd1bNvGdV2yLEMURfGWv8OyLHzfZ1kWxLZtNE1DkiSs68p1XUgpEfu+cxwH53ly3zfP87zwBdEwgHLjHdFGAAAAAElFTkSuQmCC"
        },
        i = {
            src: t.i(94061).default,
            width: 1671,
            height: 2088,
            blurWidth: 6,
            blurHeight: 8,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAAr0lEQVR42h2MMQ5DUABA/1GISUQcwFbC5CqSNjG4gTM4gclmYbWJRSpIRI02IsT4Wh3e8vLyRNM0tO2bvu8Zx5F5nn98EGVZUhQFWZaRpil5nlNVFcL3fWzbxnVdHtYDy7KI4xjheR6apqGqKrIsoygKYRgioijCMAwkSULXdUzT5Pl6IaZpIggCHMfh3iZJQtd1iOM4GIaBuq5ZloV1Xdm2DXFdF+d5cgf7vv/lzRfPFIeV0X2iZQAAAABJRU5ErkJggg=="
        },
        o = {
            src: t.i(76097).default,
            width: 1671,
            height: 2088,
            blurWidth: 6,
            blurHeight: 8,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAAsklEQVR42h3Lrw5EcADA8d+73EUPwO78OYUJZhNINkFwj6EINM+geQPNpgjGE9hUgkT83k77lI+Y55lhGOi6jr7vWdeVfd8RcRxjGAaKoqBpGmmaUtc1wnEcHs8HkiTxt+/7BEGA+H5TZFnGNE2iKCIMQ5IkQZRlia7rqKp6D8uyyLIM0bYtruve6/MxsG2bpmkQ27aR5zmv9wvP8yiKgmVZENd1MY4jVVUxTRPHcXCeJz+4SXbJ5I4r3AAAAABJRU5ErkJggg=="
        },
        n = {
            src: t.i(71231).default,
            width: 1671,
            height: 2088,
            blurWidth: 6,
            blurHeight: 8,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAArklEQVR42h2KMQtEYABAvz8lmzAps0y6K6NR3/0CN1rkBrPNqExmWWS02URZDAyKeleG16vXE1mWUVUVfd8zjiPzPLOuK6LrOtq2pa5riqJ4pmmaEJ7nYRgGqqqiKAq6rhPHMcK2bTRNIwgC5EfiOA7R94vwfR/LspBSEoYhruuS5zki/aWYpsnr/SKKIsqyZFkWxDAMJElC0zRs28Z1XQ9i33eO4+A8zyfc9/34D5oLinWKgBLtAAAAAElFTkSuQmCC"
        };
    var s = t.i(41315),
        c = t.i(1814);
    let u = {
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
                    tag: (0, a.jsxs)(a.Fragment, {
                        children: ["save ", c.CurrencySymbol.inr, "7,499"]
                    })
                },
                [s.ProductPurchaseType.otp_12_week]: {
                    displayName: "Ultrahuman M1 | 12 Weeks continuous glucose monitoring",
                    price: 34999,
                    variantId: "gid://shopify/ProductVariant/40596792016966",
                    internalPid: s.ProductPurchaseType.otp_12_week,
                    image: i,
                    secondaryImage: "",
                    title: "12+6 Weeks",
                    subtitle1: "9 CGM Sensors",
                    subtitle2: "Delivery on purchase",
                    tag: (0, a.jsxs)(a.Fragment, {
                        children: ["save ", c.CurrencySymbol.inr, "32,492"]
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
                    tag: (0, a.jsxs)(a.Fragment, {
                        children: ["save ", c.CurrencySymbol.inr, "69,983"]
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
                    tag: (0, a.jsxs)(a.Fragment, {
                        children: ["save ", c.CurrencySymbol.inr, "1,04,969"]
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
                    image: i,
                    secondaryImage: "",
                    title: "12 Weeks",
                    subtitle1: "6 CGM Sensors",
                    subtitle2: "Delivery on purchase",
                    tag: (0, a.jsxs)(a.Fragment, {
                        children: ["save ", c.CurrencySymbol.inr, "9,995"]
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
                    tag: (0, a.jsxs)(a.Fragment, {
                        children: ["save ", c.CurrencySymbol.inr, "24,989"]
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
                    tag: (0, a.jsxs)(a.Fragment, {
                        children: ["save ", c.CurrencySymbol.inr, "59,975"]
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
    s.ProductPurchaseOption.oneTimePurchase, s.ProductPurchaseOption.x, t.s(["newM1Data", 0, u], 63263);
    let h = {
            src: t.i(8025).default,
            width: 1671,
            height: 2086,
            blurWidth: 6,
            blurHeight: 8,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAAqUlEQVR42j2OsQpFUABA7w9Jkqw+wmS0StdM/IAfMFmVJD1RUmSyWE0im884r/fqveFM5wxHNE1D13VM08S6rmzbxjAMiJ8Yx5FlWZjnmTzPEWVZUtc1bfv6BkVRkCQJIssy0jQljmM8z8N1XaSUCNu20TQNRVHQdR3DMHAcBxEEEtM0UVUVy7LwfZ+qqhCfizAMiaKIvu/Z953jOBDP83Df95/rujjPkzcXcIU9zj2oSgAAAABJRU5ErkJggg=="
        },
        l = {
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
                        image: h,
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
                        image: i,
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
                        image: h,
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
                        image: i,
                        secondaryImage: "",
                        title: "3 Months",
                        subtitle1: "6 CGM Sensors",
                        subtitle2: "Delivery on purchase",
                        tag: (0, a.jsxs)(a.Fragment, {
                            children: ["save ", c.CurrencySymbol.aed, "295"]
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
                        tag: (0, a.jsxs)(a.Fragment, {
                            children: ["save ", c.CurrencySymbol.aed, "770"]
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
                        tag: (0, a.jsxs)(a.Fragment, {
                            children: ["save ", c.CurrencySymbol.aed, "2,095"]
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
    t.s(["newM1Data", 0, l], 43572);
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
                        image: h,
                        secondaryImage: "",
                        title: "4 Weeks",
                        subtitle1: "2 CGM Sensors",
                        subtitle2: "Delivery on purchase",
                        checkoutUrl: "https://buy.stripe.com/4gw02Y5aJ1M88Eg28f"
                    }
                }
            }
        },
        d = {
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
                        image: h,
                        secondaryImage: "",
                        title: "4 weeks",
                        subtitle1: "2 CGM Sensors",
                        subtitle2: "Delivery on purchase"
                    }
                }
            }
        },
        y = {
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
                        image: h,
                        secondaryImage: "",
                        title: "4 Weeks",
                        subtitle1: "2 CGM Sensors",
                        subtitle2: "Delivery on purchase",
                        checkoutUrl: "https://buy.stripe.com/28obLG32B9eA3jW7sx"
                    }
                }
            }
        };
    t.s(["M1_Euro", 0, m, "M1_Iceland", 0, d, "M1_Switzerland", 0, p, "NON_MCF_M1_Euro", 0, y], 83240);
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
                    image: h,
                    secondaryImage: "",
                    title: "4 Weeks",
                    subtitle1: "2 CGM Sensors",
                    subtitle2: "Delivery on purchase"
                }
            }
        }
    };
    t.s(["newM1Data", 0, f], 1431);
    let g = {
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
                    image: h,
                    secondaryImage: "",
                    title: "1 Month",
                    subtitle1: "2 CGM Sensors",
                    subtitle2: "Delivery on purchase",
                    checkoutUrl: "https://buy.stripe.com/14k9ElgsGbUx7ccbOP?prefilled_promo_code=EOIKLRDK",
                    tag: (0, a.jsxs)(a.Fragment, {
                        children: ["save ", c.CurrencySymbol.usd, "45"]
                    })
                },
                [s.ProductPurchaseType.special_3_month_us]: {
                    displayName: "3 Months",
                    price: 594.15,
                    strikedPrice: 699,
                    variantId: "",
                    internalPid: s.ProductPurchaseType.special_3_month_us,
                    image: i,
                    secondaryImage: "",
                    title: "3 Months",
                    subtitle1: "6 CGM Sensors",
                    subtitle2: "Delivery on purchase",
                    checkoutUrl: "https://buy.stripe.com/bIY17P1xM1fT0NO7yJ?prefilled_promo_code=EOIKLRDK",
                    tag: (0, a.jsxs)(a.Fragment, {
                        children: ["save ", c.CurrencySymbol.usd, "104"]
                    })
                },
                [s.ProductPurchaseType.special_1_year_us]: {
                    displayName: "1 Year",
                    price: 2039.15,
                    strikedPrice: 2399,
                    variantId: "",
                    internalPid: s.ProductPurchaseType.special_1_year_us,
                    image: i,
                    secondaryImage: "",
                    title: "1 Year",
                    subtitle1: "26 CGM Sensors",
                    subtitle2: "Delivery on purchase",
                    checkoutUrl: "https://buy.stripe.com/5kAdUBccq4s5eEE6uG?prefilled_promo_code=EOIKLRDK",
                    tag: (0, a.jsxs)(a.Fragment, {
                        children: ["save ", c.CurrencySymbol.usd, "359"]
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
                    image: h,
                    secondaryImage: "",
                    title: "2 Sensors",
                    subtitle1: "2 CGM Sensors/Month",
                    subtitle2: "Offer on the 1st month"
                }
            }
        }
    };
    t.s(["newM1Data", 0, g], 20100);
    var b = t.i(91898);
    let P = {
        [e.ShopifyStore.IN]: u,
        [e.ShopifyStore.AE]: l,
        [e.ShopifyStore.GB]: f,
        [e.ShopifyStore.US]: g,
        [e.ShopifyStore.EU]: m
    };

    function _(t, a) {
        if (t !== e.ShopifyStore.EU) return P[t] || {};
        if (a) switch (a.toLowerCase()) {
            case "ch":
                return p;
            case "is":
                return d;
            default:
                if (!(0, b.isMCFCountry)(a)) return y
        }
        return m
    }
    t.s(["getM1DataForStore", () => _], 98314)
}, 11829, (t, e, a) => {
    "use strict";

    function r(t, e) {
        var a = t.length;
        for (t.push(e); 0 < a;) {
            var r = a - 1 >>> 1,
                i = t[r];
            if (0 < n(i, e)) t[r] = e, t[a] = i, a = r;
            else break
        }
    }

    function i(t) {
        return 0 === t.length ? null : t[0]
    }

    function o(t) {
        if (0 === t.length) return null;
        var e = t[0],
            a = t.pop();
        if (a !== e) {
            t[0] = a;
            for (var r = 0, i = t.length, o = i >>> 1; r < o;) {
                var s = 2 * (r + 1) - 1,
                    c = t[s],
                    u = s + 1,
                    h = t[u];
                if (0 > n(c, a)) u < i && 0 > n(h, c) ? (t[r] = h, t[u] = a, r = u) : (t[r] = c, t[s] = a, r = s);
                else if (u < i && 0 > n(h, a)) t[r] = h, t[u] = a, r = u;
                else break
            }
        }
        return e
    }

    function n(t, e) {
        var a = t.sortIndex - e.sortIndex;
        return 0 !== a ? a : t.id - e.id
    }
    if (a.unstable_now = void 0, "object" == typeof performance && "function" == typeof performance.now) {
        var s, c = performance;
        a.unstable_now = function() {
            return c.now()
        }
    } else {
        var u = Date,
            h = u.now();
        a.unstable_now = function() {
            return u.now() - h
        }
    }
    var l = [],
        p = [],
        d = 1,
        m = null,
        y = 3,
        f = !1,
        g = !1,
        b = !1,
        P = !1,
        _ = "function" == typeof setTimeout ? setTimeout : null,
        k = "function" == typeof clearTimeout ? clearTimeout : null,
        v = "u" > typeof setImmediate ? setImmediate : null;

    function S(t) {
        for (var e = i(p); null !== e;) {
            if (null === e.callback) o(p);
            else if (e.startTime <= t) o(p), e.sortIndex = e.expirationTime, r(l, e);
            else break;
            e = i(p)
        }
    }

    function I(t) {
        if (b = !1, S(t), !g)
            if (null !== i(l)) g = !0, A || (A = !0, s());
            else {
                var e = i(p);
                null !== e && L(I, e.startTime - t)
            }
    }
    var A = !1,
        U = -1,
        M = 5,
        V = -1;

    function T() {
        return !!P || !(a.unstable_now() - V < M)
    }

    function w() {
        if (P = !1, A) {
            var t = a.unstable_now();
            V = t;
            var e = !0;
            try {
                t: {
                    g = !1,
                    b && (b = !1, k(U), U = -1),
                    f = !0;
                    var r = y;
                    try {
                        e: {
                            for (S(t), m = i(l); null !== m && !(m.expirationTime > t && T());) {
                                var n = m.callback;
                                if ("function" == typeof n) {
                                    m.callback = null, y = m.priorityLevel;
                                    var c = n(m.expirationTime <= t);
                                    if (t = a.unstable_now(), "function" == typeof c) {
                                        m.callback = c, S(t), e = !0;
                                        break e
                                    }
                                    m === i(l) && o(l), S(t)
                                } else o(l);
                                m = i(l)
                            }
                            if (null !== m) e = !0;
                            else {
                                var u = i(p);
                                null !== u && L(I, u.startTime - t), e = !1
                            }
                        }
                        break t
                    }
                    finally {
                        m = null, y = r, f = !1
                    }
                }
            }
            finally {
                e ? s() : A = !1
            }
        }
    }
    if ("function" == typeof v) s = function() {
        v(w)
    };
    else if ("u" > typeof MessageChannel) {
        var C = new MessageChannel,
            x = C.port2;
        C.port1.onmessage = w, s = function() {
            x.postMessage(null)
        }
    } else s = function() {
        _(w, 0)
    };

    function L(t, e) {
        U = _(function() {
            t(a.unstable_now())
        }, e)
    }
    a.unstable_IdlePriority = 5, a.unstable_ImmediatePriority = 1, a.unstable_LowPriority = 4, a.unstable_NormalPriority = 3, a.unstable_Profiling = null, a.unstable_UserBlockingPriority = 2, a.unstable_cancelCallback = function(t) {
        t.callback = null
    }, a.unstable_forceFrameRate = function(t) {
        0 > t || 125 < t ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : M = 0 < t ? Math.floor(1e3 / t) : 5
    }, a.unstable_getCurrentPriorityLevel = function() {
        return y
    }, a.unstable_next = function(t) {
        switch (y) {
            case 1:
            case 2:
            case 3:
                var e = 3;
                break;
            default:
                e = y
        }
        var a = y;
        y = e;
        try {
            return t()
        } finally {
            y = a
        }
    }, a.unstable_requestPaint = function() {
        P = !0
    }, a.unstable_runWithPriority = function(t, e) {
        switch (t) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                t = 3
        }
        var a = y;
        y = t;
        try {
            return e()
        } finally {
            y = a
        }
    }, a.unstable_scheduleCallback = function(t, e, o) {
        var n = a.unstable_now();
        switch (o = "object" == typeof o && null !== o && "number" == typeof(o = o.delay) && 0 < o ? n + o : n, t) {
            case 1:
                var c = -1;
                break;
            case 2:
                c = 250;
                break;
            case 5:
                c = 0x3fffffff;
                break;
            case 4:
                c = 1e4;
                break;
            default:
                c = 5e3
        }
        return c = o + c, t = {
            id: d++,
            callback: e,
            priorityLevel: t,
            startTime: o,
            expirationTime: c,
            sortIndex: -1
        }, o > n ? (t.sortIndex = o, r(p, t), null === i(l) && t === i(p) && (b ? (k(U), U = -1) : b = !0, L(I, o - n))) : (t.sortIndex = c, r(l, t), g || f || (g = !0, A || (A = !0, s()))), t
    }, a.unstable_shouldYield = T, a.unstable_wrapCallback = function(t) {
        var e = y;
        return function() {
            var a = y;
            y = e;
            try {
                return t.apply(this, arguments)
            } finally {
                y = a
            }
        }
    }
}, 52659, (t, e, a) => {
    "use strict";
    e.exports = t.r(11829)
}, 8518, t => {
    t.v("/_next/static/media/chevronRight.e3bd9571.svg")
}, 88807, t => {
    t.v("/_next/static/media/heroImage.4e3dd844.png")
}, 77569, 967, t => {
    "use strict";
    t.i(50461);
    var e = t.i(59207),
        a = t.i(13458);
    let r = (0, a.buildStoreConfig)({
        [e.ShopifyStore.IN]: {
            price: 7999,
            variantId: "42330065567814",
            shopifyVariantId: "gid://shopify/ProductVariant/42330065567814",
            checkoutUrl: "https://ultrahumanstore.myshopify.com/cart/42330065567814:1?channel=buy_button"
        },
        [e.ShopifyStore.ROW]: {
            price: 99,
            variantId: "42378356654140",
            shopifyVariantId: "gid://shopify/ProductVariant/42378356654140",
            checkoutUrl: "https://ultrahuman-us.myshopify.com/cart/42378356654140:1?channel=buy_button"
        },
        [e.ShopifyStore.US]: {
            price: 99,
            variantId: "41453042008160",
            shopifyVariantId: "gid://shopify/ProductVariant/41453042008160",
            checkoutUrl: "https://stelcore-x-ultrahuman.myshopify.com/cart/41453042008160:1?channel=buy_button"
        },
        [e.ShopifyStore.AE]: {
            price: 355,
            variantId: "51986382291315",
            shopifyVariantId: "gid://shopify/ProductVariant/51986382291315",
            checkoutUrl: "https://ultrahuman-mena.myshopify.com/cart/51986382291315:1?channel=buy_button"
        },
        [e.ShopifyStore.EU]: {
            price: 91,
            variantId: "54831405498742",
            shopifyVariantId: "gid://shopify/ProductVariant/54831405498742",
            checkoutUrl: "https://ultrahuman-eu-uk.myshopify.com/cart/54831405498742:1?channel=buy_button"
        },
        [e.ShopifyStore.GB]: {
            price: 79
        },
        [e.ShopifyStore.AU]: {
            price: 169
        },
        [e.ShopifyStore.CA]: {
            price: 149
        },
        [e.ShopifyStore.ZA]: {
            price: 999
        }
    });
    t.s(["dayTransparentGlassesShopifyMap", 0, r], 77569);
    let i = (0, a.buildStoreConfig)({
        [e.ShopifyStore.IN]: {
            price: 7999,
            variantId: "42330063732806",
            shopifyVariantId: "gid://shopify/ProductVariant/42330063732806",
            checkoutUrl: "https://ultrahumanstore.myshopify.com/cart/42330063732806:1?channel=buy_button"
        },
        [e.ShopifyStore.ROW]: {
            price: 99,
            variantId: "42378340630588",
            shopifyVariantId: "gid://shopify/ProductVariant/42378340630588",
            checkoutUrl: "https://ultrahuman-us.myshopify.com/cart/42378340630588:1?channel=buy_button"
        },
        [e.ShopifyStore.US]: {
            price: 99,
            variantId: "41453041516640",
            shopifyVariantId: "gid://shopify/ProductVariant/41453041516640",
            checkoutUrl: "https://stelcore-x-ultrahuman.myshopify.com/cart/41453041516640:1?channel=buy_button"
        },
        [e.ShopifyStore.AE]: {
            price: 355,
            variantId: "51986380489075",
            shopifyVariantId: "gid://shopify/ProductVariant/51986380489075",
            checkoutUrl: "https://ultrahuman-mena.myshopify.com/cart/51986380489075:1?channel=buy_button"
        },
        [e.ShopifyStore.EU]: {
            price: 91,
            variantId: "54831401009526",
            shopifyVariantId: "gid://shopify/ProductVariant/54831401009526",
            checkoutUrl: "https://ultrahuman-eu-uk.myshopify.com/cart/54831401009526:1?channel=buy_button"
        },
        [e.ShopifyStore.GB]: {
            price: 79
        },
        [e.ShopifyStore.AU]: {
            price: 169
        },
        [e.ShopifyStore.CA]: {
            price: 149
        },
        [e.ShopifyStore.ZA]: {
            price: 999
        }
    });
    t.s(["nightTransparentGlassesShopifyMap", 0, i], 967)
}, 12935, 60022, 47719, t => {
    "use strict";
    t.i(50461);
    var e, a = t.i(59207),
        r = ((e = {}).XS = "XS", e.S = "S", e.M = "M", e.L = "L", e.XL = "XL", e.XXL = "XXL", e);
    t.s(["MerchSizes", () => r], 60022);
    var i = t.i(13458);
    let o = {
            title: "Cyborg Classic Black Hoodie",
            description: "100% Organic Supima Cotton | Carbon neutral",
            imgSrc: "web_v2/all-products/merch/new/cyborg-classic-hoodie.png/w_1920",
            tag: "popular",
            shopifyProductName: "Cyborg Classic Hoodie",
            availableSizes: [r.XS, r.S, r.M, r.L, r.XL, r.XXL]
        },
        n = (0, i.buildMerchStoreConfig)({
            [a.ShopifyStore.AE]: {
                price: 195,
                sizes: {
                    [r.XS]: {
                        variantId: "gid://shopify/ProductVariant/44691289276658",
                        checkoutUrl: "https://ultrahuman-mena.myshopify.com/cart/44691289276658:1?channel=buy_button"
                    },
                    [r.S]: {
                        variantId: "gid://shopify/ProductVariant/44691289309426",
                        checkoutUrl: "https://ultrahuman-mena.myshopify.com/cart/44691289309426:1?channel=buy_button"
                    },
                    [r.M]: {
                        variantId: "gid://shopify/ProductVariant/44691289342194",
                        checkoutUrl: "https://ultrahuman-mena.myshopify.com/cart/44691289342194:1?channel=buy_button"
                    },
                    [r.L]: {
                        variantId: "gid://shopify/ProductVariant/44691289374962",
                        checkoutUrl: "https://ultrahuman-mena.myshopify.com/cart/44691289374962:1?channel=buy_button"
                    },
                    [r.XL]: {
                        variantId: "gid://shopify/ProductVariant/44691289407730",
                        checkoutUrl: "https://ultrahuman-mena.myshopify.com/cart/44691289407730:1?channel=buy_button"
                    },
                    [r.XXL]: {
                        variantId: "gid://shopify/ProductVariant/44691289440498",
                        checkoutUrl: "https://ultrahuman-mena.myshopify.com/cart/44691289440498:1?channel=buy_button"
                    }
                }
            },
            [a.ShopifyStore.US]: {
                price: 50,
                sizes: {
                    [r.XS]: {
                        variantId: "gid://shopify/ProductVariant/40200411316320",
                        checkoutUrl: "https://stelcore-x-ultrahuman.myshopify.com/cart/40200411316320:1?channel=buy_button"
                    },
                    [r.S]: {
                        variantId: "gid://shopify/ProductVariant/40200411349088",
                        checkoutUrl: "https://stelcore-x-ultrahuman.myshopify.com/cart/40200411349088:1?channel=buy_button"
                    },
                    [r.M]: {
                        variantId: "gid://shopify/ProductVariant/40200411381856",
                        checkoutUrl: "https://stelcore-x-ultrahuman.myshopify.com/cart/40200411381856:1?channel=buy_button"
                    },
                    [r.L]: {
                        variantId: "gid://shopify/ProductVariant/40200411414624",
                        checkoutUrl: "https://stelcore-x-ultrahuman.myshopify.com/cart/40200411414624:1?channel=buy_button"
                    },
                    [r.XL]: {
                        variantId: "gid://shopify/ProductVariant/40200411447392",
                        checkoutUrl: "https://stelcore-x-ultrahuman.myshopify.com/cart/40200411447392:1?channel=buy_button"
                    },
                    [r.XXL]: {
                        variantId: "gid://shopify/ProductVariant/40200411480160",
                        checkoutUrl: "https://stelcore-x-ultrahuman.myshopify.com/cart/40200411480160:1?channel=buy_button"
                    }
                }
            },
            [a.ShopifyStore.ROW]: {
                price: 50,
                sizes: {
                    [r.XS]: {
                        variantId: "gid://shopify/ProductVariant/40718610956348",
                        checkoutUrl: "https://ultrahuman-us.myshopify.com/cart/40718610956348:1?channel=buy_button"
                    },
                    [r.S]: {
                        variantId: "gid://shopify/ProductVariant/40718611349564",
                        checkoutUrl: "https://ultrahuman-us.myshopify.com/cart/40718611349564:1?channel=buy_button"
                    },
                    [r.M]: {
                        variantId: "gid://shopify/ProductVariant/40718611382332",
                        checkoutUrl: "https://ultrahuman-us.myshopify.com/cart/40718611382332:1?channel=buy_button"
                    },
                    [r.L]: {
                        variantId: "gid://shopify/ProductVariant/40718611415100",
                        checkoutUrl: "https://ultrahuman-us.myshopify.com/cart/40718611415100:1?channel=buy_button"
                    },
                    [r.XL]: {
                        variantId: "gid://shopify/ProductVariant/40718611447868",
                        checkoutUrl: "https://ultrahuman-us.myshopify.com/cart/40718611447868:1?channel=buy_button"
                    },
                    [r.XXL]: {
                        variantId: "gid://shopify/ProductVariant/40718611480636",
                        checkoutUrl: "https://ultrahuman-us.myshopify.com/cart/40718611480636:1?channel=buy_button"
                    }
                }
            },
            [a.ShopifyStore.IN]: {
                price: 3499,
                sizes: {
                    [r.XS]: {
                        variantId: "gid://shopify/ProductVariant/40737818738758",
                        checkoutUrl: "https://ultrahumanstore.myshopify.com/cart/40737818738758:1?channel=buy_button"
                    },
                    [r.S]: {
                        variantId: "gid://shopify/ProductVariant/40737798094918",
                        checkoutUrl: "https://ultrahumanstore.myshopify.com/cart/40737798094918:1?channel=buy_button"
                    },
                    [r.M]: {
                        variantId: "gid://shopify/ProductVariant/40737798160454",
                        checkoutUrl: "https://ultrahumanstore.myshopify.com/cart/40737798160454:1?channel=buy_button"
                    },
                    [r.L]: {
                        variantId: "gid://shopify/ProductVariant/40737798225990",
                        checkoutUrl: "https://ultrahumanstore.myshopify.com/cart/40737798225990:1?channel=buy_button"
                    },
                    [r.XL]: {
                        variantId: "gid://shopify/ProductVariant/40737798291526",
                        checkoutUrl: "https://ultrahumanstore.myshopify.com/cart/40737798291526:1?channel=buy_button"
                    },
                    [r.XXL]: {
                        variantId: "gid://shopify/ProductVariant/40737798357062",
                        checkoutUrl: "https://ultrahumanstore.myshopify.com/cart/40737798357062:1?channel=buy_button"
                    }
                }
            },
            [a.ShopifyStore.EU]: {
                price: 46,
                sizes: {
                    [r.XS]: {
                        variantId: "gid://shopify/ProductVariant/49202717491518",
                        checkoutUrl: "https://ultrahuman-eu-uk.myshopify.com/cart/49202717491518:1?channel=buy_button"
                    },
                    [r.S]: {
                        variantId: "gid://shopify/ProductVariant/49202717524286",
                        checkoutUrl: "https://ultrahuman-eu-uk.myshopify.com/cart/49202717524286:1?channel=buy_button"
                    },
                    [r.M]: {
                        variantId: "gid://shopify/ProductVariant/49202717557054",
                        checkoutUrl: "https://ultrahuman-eu-uk.myshopify.com/cart/49202717557054:1?channel=buy_button"
                    },
                    [r.L]: {
                        variantId: "gid://shopify/ProductVariant/49202717589822",
                        checkoutUrl: "https://ultrahuman-eu-uk.myshopify.com/cart/49202717589822:1?channel=buy_button"
                    },
                    [r.XL]: {
                        variantId: "gid://shopify/ProductVariant/49202717622590",
                        checkoutUrl: "https://ultrahuman-eu-uk.myshopify.com/cart/49202717622590:1?channel=buy_button"
                    },
                    [r.XXL]: {
                        variantId: "gid://shopify/ProductVariant/49202717655358",
                        checkoutUrl: "https://ultrahuman-eu-uk.myshopify.com/cart/49202717655358:1?channel=buy_button"
                    }
                }
            },
            [a.ShopifyStore.GB]: {
                price: 40
            },
            [a.ShopifyStore.AU]: {
                price: 75
            },
            [a.ShopifyStore.CA]: {
                price: 70
            },
            [a.ShopifyStore.MX]: {
                price: 1069
            },
            [a.ShopifyStore.SA]: {
                price: 216
            },
            [a.ShopifyStore.ZA]: {
                price: 999
            }
        });
    t.s(["CyborgClassicHoodieProduct", 0, o, "CyborgClassicHoodieShopifyMap", 0, n], 12935);
    let s = {
            title: "Cyborg Classic Black T-shirt",
            description: "100% Organic Supima Cotton | Carbon neutral",
            imgSrc: "web_v2/all-products/merch/new/cyborg-classic-tee-black.png/w_1920",
            shopifyProductName: "Cyborg Classic T-shirt",
            availableSizes: [r.XS, r.S, r.M, r.L, r.XL, r.XXL]
        },
        c = (0, i.buildMerchStoreConfig)({
            [a.ShopifyStore.AE]: {
                price: 110,
                sizes: {
                    [r.XS]: {
                        variantId: "gid://shopify/ProductVariant/44691321061618",
                        checkoutUrl: "https://ultrahuman-mena.myshopify.com/cart/44691321061618:1?channel=buy_button"
                    },
                    [r.S]: {
                        variantId: "gid://shopify/ProductVariant/44691321127154",
                        checkoutUrl: "https://ultrahuman-mena.myshopify.com/cart/44691321127154:1?channel=buy_button"
                    },
                    [r.M]: {
                        variantId: "gid://shopify/ProductVariant/44691321192690",
                        checkoutUrl: "https://ultrahuman-mena.myshopify.com/cart/44691321192690:1?channel=buy_button"
                    },
                    [r.L]: {
                        variantId: "gid://shopify/ProductVariant/44691321258226",
                        checkoutUrl: "https://ultrahuman-mena.myshopify.com/cart/44691321258226:1?channel=buy_button"
                    },
                    [r.XL]: {
                        variantId: "gid://shopify/ProductVariant/44691321323762",
                        checkoutUrl: "https://ultrahuman-mena.myshopify.com/cart/44691321323762:1?channel=buy_button"
                    },
                    [r.XXL]: {
                        variantId: "gid://shopify/ProductVariant/44691321389298",
                        checkoutUrl: "https://ultrahuman-mena.myshopify.com/cart/44691321389298:1?channel=buy_button"
                    }
                }
            },
            [a.ShopifyStore.US]: {
                price: 30,
                sizes: {
                    [r.XS]: {
                        variantId: "gid://shopify/ProductVariant/40200408596576",
                        checkoutUrl: "https://stelcore-x-ultrahuman.myshopify.com/cart/40200408596576:1?channel=buy_button"
                    },
                    [r.S]: {
                        variantId: "gid://shopify/ProductVariant/40200408662112",
                        checkoutUrl: "https://stelcore-x-ultrahuman.myshopify.com/cart/40200408662112:1?channel=buy_button"
                    },
                    [r.M]: {
                        variantId: "gid://shopify/ProductVariant/40200408727648",
                        checkoutUrl: "https://stelcore-x-ultrahuman.myshopify.com/cart/40200408727648:1?channel=buy_button"
                    },
                    [r.L]: {
                        variantId: "gid://shopify/ProductVariant/40200408793184",
                        checkoutUrl: "https://stelcore-x-ultrahuman.myshopify.com/cart/40200408793184:1?channel=buy_button"
                    },
                    [r.XL]: {
                        variantId: "gid://shopify/ProductVariant/40200408858720",
                        checkoutUrl: "https://stelcore-x-ultrahuman.myshopify.com/cart/40200408858720:1?channel=buy_button"
                    },
                    [r.XXL]: {
                        variantId: "gid://shopify/ProductVariant/40200408924256",
                        checkoutUrl: "https://stelcore-x-ultrahuman.myshopify.com/cart/40200408924256:1?channel=buy_button"
                    }
                }
            },
            [a.ShopifyStore.ROW]: {
                price: 30,
                sizes: {
                    [r.XS]: {
                        variantId: "gid://shopify/ProductVariant/40718618951740",
                        checkoutUrl: "https://ultrahuman-us.myshopify.com/cart/40718618951740:1?channel=buy_button"
                    },
                    [r.S]: {
                        variantId: "gid://shopify/ProductVariant/40718619017276",
                        checkoutUrl: "https://ultrahuman-us.myshopify.com/cart/40718619017276:1?channel=buy_button"
                    },
                    [r.M]: {
                        variantId: "gid://shopify/ProductVariant/40718619050044",
                        checkoutUrl: "https://ultrahuman-us.myshopify.com/cart/40718619050044:1?channel=buy_button"
                    },
                    [r.L]: {
                        variantId: "gid://shopify/ProductVariant/40718619082812",
                        checkoutUrl: "https://ultrahuman-us.myshopify.com/cart/40718619082812:1?channel=buy_button"
                    },
                    [r.XL]: {
                        variantId: "gid://shopify/ProductVariant/40718619115580",
                        checkoutUrl: "https://ultrahuman-us.myshopify.com/cart/40718619115580:1?channel=buy_button"
                    },
                    [r.XXL]: {
                        variantId: "gid://shopify/ProductVariant/40718619148348",
                        checkoutUrl: "https://ultrahuman-us.myshopify.com/cart/40718619148348:1?channel=buy_button"
                    }
                }
            },
            [a.ShopifyStore.IN]: {
                price: 1699,
                sizes: {
                    [r.XS]: {
                        variantId: "gid://shopify/ProductVariant/40737950269510",
                        checkoutUrl: "https://ultrahumanstore.myshopify.com/cart/40737950269510:1?channel=buy_button"
                    },
                    [r.S]: {
                        variantId: "gid://shopify/ProductVariant/40737910194246",
                        checkoutUrl: "https://ultrahumanstore.myshopify.com/cart/40737910194246:1?channel=buy_button"
                    },
                    [r.M]: {
                        variantId: "gid://shopify/ProductVariant/40737910259782",
                        checkoutUrl: "https://ultrahumanstore.myshopify.com/cart/40737910259782:1?channel=buy_button"
                    },
                    [r.L]: {
                        variantId: "gid://shopify/ProductVariant/40737910325318",
                        checkoutUrl: "https://ultrahumanstore.myshopify.com/cart/40737910325318:1?channel=buy_button"
                    },
                    [r.XL]: {
                        variantId: "gid://shopify/ProductVariant/40737910390854",
                        checkoutUrl: "https://ultrahumanstore.myshopify.com/cart/40737910390854:1?channel=buy_button"
                    },
                    [r.XXL]: {
                        variantId: "gid://shopify/ProductVariant/40737910456390",
                        checkoutUrl: "https://ultrahumanstore.myshopify.com/cart/40737910456390:1?channel=buy_button"
                    }
                }
            },
            [a.ShopifyStore.EU]: {
                price: 28,
                sizes: {
                    [r.XS]: {
                        variantId: "gid://shopify/ProductVariant/49202717983038",
                        checkoutUrl: "https://ultrahuman-eu-uk.myshopify.com/cart/49202717983038:1?channel=buy_button"
                    },
                    [r.S]: {
                        variantId: "gid://shopify/ProductVariant/49202718048574",
                        checkoutUrl: "https://ultrahuman-eu-uk.myshopify.com/cart/49202718048574:1?channel=buy_button"
                    },
                    [r.M]: {
                        variantId: "gid://shopify/ProductVariant/49202718114110",
                        checkoutUrl: "https://ultrahuman-eu-uk.myshopify.com/cart/49202718114110:1?channel=buy_button"
                    },
                    [r.L]: {
                        variantId: "gid://shopify/ProductVariant/49202718179646",
                        checkoutUrl: "https://ultrahuman-eu-uk.myshopify.com/cart/49202718179646:1?channel=buy_button"
                    },
                    [r.XL]: {
                        variantId: "gid://shopify/ProductVariant/49202718245182",
                        checkoutUrl: "https://ultrahuman-eu-uk.myshopify.com/cart/49202718245182:1?channel=buy_button"
                    },
                    [r.XXL]: {
                        variantId: "gid://shopify/ProductVariant/49202718310718",
                        checkoutUrl: "https://ultrahuman-eu-uk.myshopify.com/cart/49202718310718:1?channel=buy_button"
                    }
                }
            },
            [a.ShopifyStore.GB]: {
                price: 25
            },
            [a.ShopifyStore.AU]: {
                price: 45
            },
            [a.ShopifyStore.CA]: {
                price: 42
            },
            [a.ShopifyStore.MX]: {
                price: 534
            },
            [a.ShopifyStore.SA]: {
                price: 109
            },
            [a.ShopifyStore.ZA]: {
                price: 599
            }
        });
    t.s(["CyborgClassicTshirtBlackProduct", 0, s, "CyborgClassicTshirtBlackShopifyMap", 0, c], 47719)
}, 48761, t => {
    t.v(e => Promise.all(["static/chunks/28e14a26e92e0e1d.js"].map(e => t.l(e))).then(() => e(93594)))
}, 28805, t => {
    t.v(t => Promise.resolve().then(() => t(79466)))
}, 28152, t => {
    t.v(e => Promise.all(["static/chunks/5a5a384991375015.js", "static/chunks/0f3fdc6c2a496674.js", "static/chunks/01d9796a0404d1a4.js"].map(e => t.l(e))).then(() => e(40008)))
}, 65071, t => {
    t.v(e => Promise.all(["static/chunks/03a6095f6652d9cb.js"].map(e => t.l(e))).then(() => e(75646)))
}, 63634, t => {
    t.v(e => Promise.all(["static/chunks/6366aa0cab91bbfb.js"].map(e => t.l(e))).then(() => e(79446)))
}, 7638, t => {
    t.v(e => Promise.all(["static/chunks/49508bd9e23602c1.js"].map(e => t.l(e))).then(() => e(34151)))
}, 15647, t => {
    t.v(e => Promise.all(["static/chunks/5314d043f023a024.js"].map(e => t.l(e))).then(() => e(8153)))
}, 98964, t => {
    t.v(e => Promise.all(["static/chunks/b296fee2df879d26.js"].map(e => t.l(e))).then(() => e(13069)))
}, 28599, t => {
    t.v(e => Promise.all(["static/chunks/998c9a4e66e073b5.js"].map(e => t.l(e))).then(() => e(62977)))
}, 83804, t => {
    t.v(e => Promise.all(["static/chunks/cfd7f77f7b4a55b3.js"].map(e => t.l(e))).then(() => e(38741)))
}, 26413, t => {
    t.v(e => Promise.all(["static/chunks/710118d6c4ea08cf.js"].map(e => t.l(e))).then(() => e(24453)))
}, 9135, t => {
    t.v(e => Promise.all(["static/chunks/50cc0bf29c08a923.js"].map(e => t.l(e))).then(() => e(14075)))
}]);