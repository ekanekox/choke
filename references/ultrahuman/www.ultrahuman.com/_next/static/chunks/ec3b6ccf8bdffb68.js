(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 97580, e => {
    "use strict";
    var t = e.i(50461),
        r = e.i(91788);

    function i() {
        return "u" > typeof window
    }

    function n() {
        return "production"
    }

    function a() {
        return (i() ? window.vam : n()) || "production"
    }

    function o() {
        return "production" === a()
    }

    function s() {
        return "development" === a()
    }

    function c(e, t, r) {
        var n, a;
        if (!i()) {
            let e = "[Vercel Web Analytics] Please import `track` from `@vercel/analytics/server` when using this function in a server environment";
            if (o()) console.warn(e);
            else throw Error(e);
            return
        }
        if (!t) {
            null == (n = window.va) || n.call(window, "event", {
                name: e,
                options: r
            });
            return
        }
        try {
            let i = function(e, t) {
                if (!e) return;
                let r = e,
                    i = [];
                for (let [n, a] of Object.entries(e)) "object" == typeof a && null !== a && (t.strip ? r = function(e, {
                    [e]: t,
                    ...r
                }) {
                    return r
                }(n, r) : i.push(n));
                if (i.length > 0 && !t.strip) throw Error(`The following properties are not valid: ${i.join(", ")}. Only strings, numbers, booleans, and null are allowed.`);
                return r
            }(t, {
                strip: o()
            });
            null == (a = window.va) || a.call(window, "event", {
                name: e,
                data: i,
                options: r
            })
        } catch (e) {
            e instanceof Error && s() && console.error(e)
        }
    }

    function d(e) {
        return (0, r.useEffect)(() => {
            var t;
            e.beforeSend && (null == (t = window.va) || t.call(window, "beforeSend", e.beforeSend))
        }, [e.beforeSend]), (0, r.useEffect)(() => {
            ! function(e = {
                debug: !0
            }) {
                var t;
                if (!i()) return;
                ! function(e = "auto") {
                    if ("auto" === e) {
                        window.vam = n();
                        return
                    }
                    window.vam = e
                }(e.mode), window.va || (window.va = function(...e) {
                    (window.vaq = window.vaq || []).push(e)
                }), e.beforeSend && (null == (t = window.va) || t.call(window, "beforeSend", e.beforeSend));
                let r = e.scriptSrc ? e.scriptSrc : s() ? "https://va.vercel-scripts.com/v1/script.debug.js" : e.basePath ? `${e.basePath}/insights/script.js` : "/_vercel/insights/script.js";
                if (document.head.querySelector(`script[src*="${r}"]`)) return;
                let a = document.createElement("script");
                a.src = r, a.defer = !0, a.dataset.sdkn = "@vercel/analytics" + (e.framework ? `/${e.framework}` : ""), a.dataset.sdkv = "1.6.1", e.disableAutoTrack && (a.dataset.disableAutoTrack = "1"), e.endpoint ? a.dataset.endpoint = e.endpoint : e.basePath && (a.dataset.endpoint = `${e.basePath}/insights`), e.dsn && (a.dataset.dsn = e.dsn), a.onerror = () => {
                    let e = s() ? "Please check if any ad blockers are enabled and try again." : "Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";
                    console.log(`[Vercel Web Analytics] Failed to load script from ${r}. ${e}`)
                }, s() && !1 === e.debug && (a.dataset.debug = "false"), document.head.appendChild(a)
            }({
                framework: e.framework || "react",
                basePath: e.basePath ? ? function() {
                    if (void 0 !== t.default && void 0 !== t.default.env) return t.default.env.REACT_APP_VERCEL_OBSERVABILITY_BASEPATH
                }(),
                ...void 0 !== e.route && {
                    disableAutoTrack: !0
                },
                ...e
            })
        }, []), (0, r.useEffect)(() => {
            e.route && e.path && function({
                route: e,
                path: t
            }) {
                var r;
                null == (r = window.va) || r.call(window, "pageview", {
                    route: e,
                    path: t
                })
            }({
                route: e.route,
                path: e.path
            })
        }, [e.route, e.path]), null
    }
    e.s(["Analytics", () => d, "track", () => c])
}, 29201, 77197, 77180, e => {
    "use strict";
    let t = {
        src: e.i(30042).default,
        width: 640,
        height: 640,
        blurWidth: 8,
        blurHeight: 8,
        blurDataURL: "data:image/webp;base64,UklGRhIBAABXRUJQVlA4TAUBAAAvB8ABEM1VICICHgi6FSMAAICXGgwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABg7sS5MdAADwQMBtIAAAAM7/0ujAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADg4SUeCLgNBAAAwPlfGh0wGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8vMQDCQAAAAAAOP8BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgPzd+/4+k4jEtp0BeN4TSW3bGWr1+n+dBCCSAiaxMyIBRKLWJAD/nQGwLRKAWpGoVYBakQA6CdsAtk2iALUaydkFsO09x3d2AQAA"
    };
    e.s(["default", 0, t], 29201);
    let r = {
        src: e.i(30984).default,
        width: 640,
        height: 640,
        blurWidth: 0,
        blurHeight: 0
    };
    e.s(["default", 0, r], 77197), e.i(50461);
    var i = e.i(59207);
    let n = {
        [i.ShopifyStore.IN]: {
            variantId: "gid://shopify/ProductVariant/40719978790982",
            checkouturl: ""
        },
        [i.ShopifyStore.AE]: {
            variantId: "gid://shopify/ProductVariant/44679292780786",
            checkouturl: ""
        },
        [i.ShopifyStore.ROW]: {
            variantId: "gid://shopify/ProductVariant/40709679317052",
            checkouturl: ""
        },
        [i.ShopifyStore.GB]: {
            variantId: "gid://shopify/ProductVariant/49202716836158",
            checkouturl: "https://ultrahuman-eu-uk.myshopify.com/cart/49202716836158:1?channel=buy_button"
        },
        [i.ShopifyStore.EU]: {
            variantId: "gid://shopify/ProductVariant/49202716836158",
            checkouturl: "https://ultrahuman-eu-uk.myshopify.com/cart/49202716836158:1?channel=buy_button"
        },
        [i.ShopifyStore.US]: {
            variantId: "gid://shopify/ProductVariant/40200417050720",
            checkouturl: "https://stelcore-x-ultrahuman.myshopify.com/cart/40200417050720:1?channel=buy_button"
        },
        [i.ShopifyStore.AU]: {
            variantId: "gid://shopify/ProductVariant/49202716836158",
            checkouturl: "https://ultrahuman-eu-uk.myshopify.com/cart/49202716836158:1?channel=buy_button"
        },
        [i.ShopifyStore.CA]: {
            variantId: "gid://shopify/ProductVariant/40200417050720",
            checkouturl: "https://stelcore-x-ultrahuman.myshopify.com/cart/40200417050720:1?channel=buy_button"
        },
        [i.ShopifyStore.SA]: {
            variantId: "gid://shopify/ProductVariant/49202716836158",
            checkouturl: "https://ultrahuman-eu-uk.myshopify.com/cart/49202716836158:1?channel=buy_button"
        },
        [i.ShopifyStore.MX]: {
            variantId: "gid://shopify/ProductVariant/49202716836158",
            checkouturl: "https://ultrahuman-eu-uk.myshopify.com/cart/49202716836158:1?channel=buy_button"
        },
        [i.ShopifyStore.ZA]: {
            variantId: "gid://shopify/ProductVariant/49202716836158",
            checkouturl: "https://ultrahuman-eu-uk.myshopify.com/cart/49202716836158:1?channel=buy_button"
        }
    };
    e.s(["GiftWrappingProductShopifyMap", 0, n], 77180)
}, 44212, (e, t, r) => {
    "use strict";

    function i(e) {
        return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function n(e, t) {
        var r = "u" > typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (!r) {
            if (Array.isArray(e) || (r = function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return a(e, void 0);
                        var r = Object.prototype.toString.call(e).slice(8, -1);
                        if ("Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r) return Array.from(e);
                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return a(e, void 0)
                    }
                }(e)) || t && e && "number" == typeof e.length) {
                r && (e = r);
                var i = 0,
                    n = function() {};
                return {
                    s: n,
                    n: function() {
                        return i >= e.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: e[i++]
                        }
                    },
                    e: function(e) {
                        throw e
                    },
                    f: n
                }
            }
            throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var o, s = !0,
            c = !1;
        return {
            s: function() {
                r = r.call(e)
            },
            n: function() {
                var e = r.next();
                return s = e.done, e
            },
            e: function(e) {
                c = !0, o = e
            },
            f: function() {
                try {
                    s || null == r.return || r.return()
                } finally {
                    if (c) throw o
                }
            }
        }
    }

    function a(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, i = Array(t); r < t; r++) i[r] = e[r];
        return i
    }
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), r.default = void 0;

    function o(e) {
        return null === e || "object" !== i(e) && "function" != typeof e
    }
    r.default = function() {
        var e;

        function t() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
            if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
            if (this._map = new Map, this._reverse = new Map, e)
                for (var r in e)({}).hasOwnProperty.call(e, r) && this.set(r, e[r])
        }
        return e = [{
                key: "size",
                get: function() {
                    return this._map.size
                }
            }, {
                key: "set",
                value: function(e, t) {
                    if (this._map.has(e)) {
                        var r = this._map.get(e);
                        this._reverse.delete(r)
                    }
                    if (this._reverse.has(t)) {
                        var i = this._reverse.get(t);
                        this._map.delete(i)
                    }
                    this._map.set(e, t), this._reverse.set(t, e)
                }
            }, {
                key: "get",
                value: function(e) {
                    return this._map.get(e)
                }
            }, {
                key: "getKey",
                value: function(e) {
                    return this._reverse.get(e)
                }
            }, {
                key: "clear",
                value: function() {
                    this._map.clear(), this._reverse.clear()
                }
            }, {
                key: "delete",
                value: function(e) {
                    var t = this._map.get(e);
                    this._map.delete(e), this._reverse.delete(t)
                }
            }, {
                key: "deleteValue",
                value: function(e) {
                    var t = this._reverse.get(e);
                    this._map.delete(t), this._reverse.delete(e)
                }
            }, {
                key: "entries",
                value: function() {
                    return this._map.entries()
                }
            }, {
                key: "has",
                value: function(e) {
                    return this._map.has(e)
                }
            }, {
                key: "hasValue",
                value: function(e) {
                    return this._reverse.has(e)
                }
            }, {
                key: "keys",
                value: function() {
                    return this._map.keys()
                }
            }, {
                key: "values",
                value: function() {
                    return this._map.values()
                }
            }, {
                key: "getObject",
                value: function() {
                    var e, t = n(this._map.keys());
                    try {
                        for (t.s(); !(e = t.n()).done;) {
                            var r = e.value;
                            if (!o(r)) throw Error("There are non-primitive keys")
                        }
                    } catch (e) {
                        t.e(e)
                    } finally {
                        t.f()
                    }
                    return Object.fromEntries(this._map.entries())
                }
            }, {
                key: "getObjectReverse",
                value: function() {
                    var e, t = n(this._reverse.keys());
                    try {
                        for (t.s(); !(e = t.n()).done;) {
                            var r = e.value;
                            if (!o(r)) throw Error("There are non-primitive keys")
                        }
                    } catch (e) {
                        t.e(e)
                    } finally {
                        t.f()
                    }
                    return Object.fromEntries(this._reverse.entries())
                }
            }],
            function(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var i = t[r];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }(t.prototype, e), t
    }(), t.exports = r.default
}, 2212, e => {
    "use strict";
    var t = e.i(44212);
    class r extends t.default {
        defaultKey;
        defaultValue;
        constructor(e, t, r) {
            super(e), this.defaultKey = t, this.defaultValue = r
        }
        get(e) {
            let t = super.get(e);
            if (void 0 !== t) return t;
            if (void 0 !== this.defaultValue) return this.defaultValue;
            throw Error(`Key "${e}" not found in BiMap and no default value provided`)
        }
        getKey(e) {
            let t = super.getKey(e);
            if (void 0 !== t) return t;
            if (void 0 !== this.defaultKey) return this.defaultKey;
            throw Error(`Value "${e}" not found in BiMap and no default key provided`)
        }
    }
    e.s(["BiMapWithDefaults", () => r])
}, 13458, e => {
    "use strict";
    var t = e.i(59207);

    function r(e) {
        let r = {};
        for (let i of Object.values(t.ShopifyStore)) {
            let n = e[i],
                a = (0, t.getBaseStore)(i);
            if (n) r[i] = n;
            else if (a !== i) {
                let t = e[a];
                t && (r[i] = { ...t
                })
            }
        }
        for (let i of Object.values(t.ShopifyStore)) {
            let n = e[i],
                a = (0, t.getBaseStore)(i);
            if (n && a !== i) {
                let t = Object.keys(n);
                if (1 === t.length && "price" === t[0]) {
                    let t = e[a];
                    t && (r[i] = { ...t,
                        price: n.price
                    })
                }
            }
        }
        return r
    }

    function i(e) {
        let r = {};
        for (let i of Object.values(t.ShopifyStore)) {
            let n = e[i],
                a = (0, t.getBaseStore)(i);
            if (n && n.variants) r[i] = {
                price: n.price,
                ...n.variants
            };
            else if (n && !n.variants) {
                let t = e[a];
                t && t.variants && (r[i] = {
                    price: n.price,
                    ...t.variants
                })
            } else if (a !== i) {
                let t = e[a];
                t && t.variants && (r[i] = {
                    price: t.price,
                    ...t.variants
                })
            }
        }
        return r
    }

    function n(e) {
        let r = {};
        for (let i of Object.values(t.ShopifyStore)) {
            let n = e[i],
                a = (0, t.getBaseStore)(i);
            if (n && n.sizes) r[i] = n;
            else if (n && !n.sizes) {
                let t = e[a];
                t && t.sizes && (r[i] = {
                    price: n.price,
                    sizes: t.sizes
                })
            } else if (a !== i) {
                let t = e[a];
                t && t.sizes && (r[i] = {
                    price: t.price,
                    sizes: t.sizes
                })
            }
        }
        return r
    }
    e.s(["buildAccessoryStoreConfig", () => i, "buildMerchStoreConfig", () => n, "buildStoreConfig", () => r, "deepExpandStoreAliases", () => function e(r) {
        if (null === r || "object" != typeof r) return r;
        if (Array.isArray(r)) return r.map(t => e(t));
        if (Object.keys(r).some(e => Object.values(t.ShopifyStore).includes(e))) {
            let e = { ...r
            };
            for (let r of Object.values(t.ShopifyStore))
                if (!e[r]) {
                    let i = (0, t.getBaseStore)(r);
                    i !== r && e[i] && (e[r] = e[i])
                }
            return e
        }
        let i = {};
        for (let t in r) i[t] = e(r[t]);
        return i
    }])
}, 82702, e => {
    "use strict";
    var t, r, i, n, a, o = e.i(44212),
        s = e.i(60814),
        c = e.i(2212),
        d = e.i(13458),
        l = e.i(59207),
        u = ((t = {}).ENGRAVED = "ENGRAVED", t.NOT_ENGRAVED = "NOT_ENGRAVED", t),
        p = ((r = {}).BIONIC_GOLD = "BIONIC_GOLD", r.RAW_TITANIUM = "RAW_TITANIUM", r.ASTER_BLACK = "ASTER_BLACK", r.MATTE_GREY = "MATTE_GREY", r.SPACE_SILVER = "SPACE_SILVER", r.ROSE_GOLD = "ROSE_GOLD", r),
        f = ((i = {})[i.FIVE = 5] = "FIVE", i[i.SIX = 6] = "SIX", i[i.SEVEN = 7] = "SEVEN", i[i.EIGHT = 8] = "EIGHT", i[i.NINE = 9] = "NINE", i[i.TEN = 10] = "TEN", i[i.ELEVEN = 11] = "ELEVEN", i[i.TWELVE = 12] = "TWELVE", i[i.THIRTEEN = 13] = "THIRTEEN", i[i.FOURTEEN = 14] = "FOURTEEN", i[i.OPEN = 99] = "OPEN", i);
    let h = {
            [l.ShopifyStore.IN]: {
                RAW_TITANIUM: {
                    striked_price: 28499,
                    price: 28499
                },
                ASTER_BLACK: {
                    striked_price: 28499,
                    price: 28499
                },
                MATTE_GREY: {
                    striked_price: 28499,
                    price: 28499
                },
                BIONIC_GOLD: {
                    striked_price: 28499,
                    price: 28499
                },
                SPACE_SILVER: {
                    striked_price: 28499,
                    price: 28499
                },
                ROSE_GOLD: {
                    striked_price: 33999,
                    price: 33999
                }
            },
            [l.ShopifyStore.ROW]: {
                RAW_TITANIUM: {
                    striked_price: 349,
                    price: 349
                },
                ASTER_BLACK: {
                    striked_price: 349,
                    price: 349
                },
                MATTE_GREY: {
                    striked_price: 349,
                    price: 349
                },
                BIONIC_GOLD: {
                    striked_price: 349,
                    price: 349
                },
                SPACE_SILVER: {
                    striked_price: 349,
                    price: 349
                },
                ROSE_GOLD: {
                    striked_price: 399,
                    price: 399
                }
            },
            [l.ShopifyStore.US]: {
                RAW_TITANIUM: {
                    striked_price: 349,
                    price: 349
                },
                ASTER_BLACK: {
                    striked_price: 349,
                    price: 349
                },
                MATTE_GREY: {
                    striked_price: 349,
                    price: 349
                },
                BIONIC_GOLD: {
                    striked_price: 349,
                    price: 349
                },
                SPACE_SILVER: {
                    striked_price: 349,
                    price: 349
                },
                ROSE_GOLD: {
                    striked_price: 399,
                    price: 399
                }
            },
            [l.ShopifyStore.AE]: {
                RAW_TITANIUM: {
                    striked_price: 1299,
                    price: 1299
                },
                ASTER_BLACK: {
                    striked_price: 1299,
                    price: 1299
                },
                MATTE_GREY: {
                    striked_price: 1299,
                    price: 1299
                },
                BIONIC_GOLD: {
                    striked_price: 1299,
                    price: 1299
                },
                SPACE_SILVER: {
                    striked_price: 1299,
                    price: 1299
                },
                ROSE_GOLD: {
                    striked_price: 1489,
                    price: 1489
                }
            },
            [l.ShopifyStore.GB]: {
                RAW_TITANIUM: {
                    striked_price: 329,
                    price: 329
                },
                ASTER_BLACK: {
                    striked_price: 329,
                    price: 329
                },
                MATTE_GREY: {
                    striked_price: 329,
                    price: 329
                },
                BIONIC_GOLD: {
                    striked_price: 329,
                    price: 329
                },
                SPACE_SILVER: {
                    striked_price: 329,
                    price: 329
                },
                ROSE_GOLD: {
                    striked_price: 379,
                    price: 379
                }
            },
            [l.ShopifyStore.EU]: {
                RAW_TITANIUM: {
                    striked_price: 379,
                    price: 379
                },
                ASTER_BLACK: {
                    striked_price: 379,
                    price: 379
                },
                MATTE_GREY: {
                    striked_price: 379,
                    price: 379
                },
                BIONIC_GOLD: {
                    striked_price: 379,
                    price: 379
                },
                SPACE_SILVER: {
                    striked_price: 379,
                    price: 379
                },
                ROSE_GOLD: {
                    striked_price: 434,
                    price: 434
                }
            },
            [l.ShopifyStore.AU]: {
                RAW_TITANIUM: {
                    striked_price: 599,
                    price: 599
                },
                ASTER_BLACK: {
                    striked_price: 599,
                    price: 599
                },
                MATTE_GREY: {
                    striked_price: 599,
                    price: 599
                },
                BIONIC_GOLD: {
                    striked_price: 599,
                    price: 599
                },
                SPACE_SILVER: {
                    striked_price: 599,
                    price: 599
                },
                ROSE_GOLD: {
                    striked_price: 699,
                    price: 699
                }
            },
            [l.ShopifyStore.CA]: {
                RAW_TITANIUM: {
                    striked_price: 479,
                    price: 479
                },
                ASTER_BLACK: {
                    striked_price: 479,
                    price: 479
                },
                MATTE_GREY: {
                    striked_price: 479,
                    price: 479
                },
                BIONIC_GOLD: {
                    striked_price: 479,
                    price: 479
                },
                SPACE_SILVER: {
                    striked_price: 479,
                    price: 479
                },
                ROSE_GOLD: {
                    striked_price: 549,
                    price: 549
                }
            },
            [l.ShopifyStore.SA]: {
                RAW_TITANIUM: {
                    striked_price: 1509,
                    price: 1509
                },
                ASTER_BLACK: {
                    striked_price: 1509,
                    price: 1509
                },
                MATTE_GREY: {
                    striked_price: 1509,
                    price: 1509
                },
                BIONIC_GOLD: {
                    striked_price: 1509,
                    price: 1509
                },
                SPACE_SILVER: {
                    striked_price: 1509,
                    price: 1509
                },
                ROSE_GOLD: {
                    striked_price: 1729,
                    price: 1729
                }
            },
            [l.ShopifyStore.MX]: {
                RAW_TITANIUM: {
                    striked_price: 6899,
                    price: 6899
                },
                ASTER_BLACK: {
                    striked_price: 6899,
                    price: 6899
                },
                MATTE_GREY: {
                    striked_price: 6899,
                    price: 6899
                },
                BIONIC_GOLD: {
                    striked_price: 6899,
                    price: 6899
                },
                SPACE_SILVER: {
                    striked_price: 6899,
                    price: 6899
                },
                ROSE_GOLD: {
                    striked_price: 7899,
                    price: 7899
                }
            },
            [l.ShopifyStore.ZA]: {
                RAW_TITANIUM: {
                    striked_price: 7999,
                    price: 7999
                },
                ASTER_BLACK: {
                    striked_price: 7999,
                    price: 7999
                },
                MATTE_GREY: {
                    striked_price: 7999,
                    price: 7999
                },
                BIONIC_GOLD: {
                    striked_price: 7999,
                    price: 7999
                },
                SPACE_SILVER: {
                    striked_price: 7999,
                    price: 7999
                },
                ROSE_GOLD: {
                    striked_price: 8999,
                    price: 8999
                }
            }
        },
        m = {
            [l.ShopifyStore.IN]: 3299,
            [l.ShopifyStore.ROW]: 39,
            [l.ShopifyStore.US]: 39,
            [l.ShopifyStore.AE]: 149,
            [l.ShopifyStore.EU]: 30,
            [l.ShopifyStore.GB]: 36,
            [l.ShopifyStore.AU]: 59,
            [l.ShopifyStore.CA]: 54,
            [l.ShopifyStore.SA]: 169,
            [l.ShopifyStore.MX]: 728,
            [l.ShopifyStore.ZA]: 1e3
        };
    l.ShopifyStore.IN, l.ShopifyStore.ROW, l.ShopifyStore.US, l.ShopifyStore.AE, l.ShopifyStore.EU, l.ShopifyStore.GB, l.ShopifyStore.AU, l.ShopifyStore.CA, l.ShopifyStore.SA, l.ShopifyStore.MX, l.ShopifyStore.ZA;
    let g = {
        ENGRAVED: {
            [l.ShopifyStore.IN]: 31798,
            [l.ShopifyStore.ROW]: 388,
            [l.ShopifyStore.US]: 388,
            [l.ShopifyStore.AE]: 1448,
            [l.ShopifyStore.EU]: 409,
            [l.ShopifyStore.GB]: 365,
            [l.ShopifyStore.AU]: 653,
            [l.ShopifyStore.CA]: 533,
            [l.ShopifyStore.SA]: 1949,
            [l.ShopifyStore.MX]: 7627,
            [l.ShopifyStore.ZA]: 8999
        },
        NOT_ENGRAVED: {
            [l.ShopifyStore.IN]: 28499,
            [l.ShopifyStore.ROW]: 349,
            [l.ShopifyStore.US]: 349,
            [l.ShopifyStore.AE]: 1299,
            [l.ShopifyStore.EU]: 379,
            [l.ShopifyStore.GB]: 329,
            [l.ShopifyStore.AU]: 599,
            [l.ShopifyStore.CA]: 479,
            [l.ShopifyStore.SA]: 1509,
            [l.ShopifyStore.MX]: 6899,
            [l.ShopifyStore.ZA]: 7999
        }
    };
    l.ShopifyStore.IN, l.ShopifyStore.ROW, l.ShopifyStore.US, l.ShopifyStore.AE, l.ShopifyStore.EU, l.ShopifyStore.GB, l.ShopifyStore.AU, l.ShopifyStore.CA, l.ShopifyStore.SA, l.ShopifyStore.MX, l.ShopifyStore.ZA;
    let y = {
            RAW_TITANIUM: s.css `
    background: linear-gradient(180deg, #878787 0%, #4b4b4b 100%);
    box-shadow: 0 10px 9px -6px rgba(255, 255, 255, 0.25) inset;
  `,
            ASTER_BLACK: s.css `
    background: linear-gradient(180deg, #302e36 0%, #131217 100%);
    box-shadow: 0 10px 9px -6px rgba(255, 255, 255, 0.25) inset;
  `,
            MATTE_GREY: s.css `
    background: linear-gradient(180deg, #4a4a4a 0%, #1f1f1f 100%);
    box-shadow: 0 10px 9px -6px rgba(255, 255, 255, 0.25) inset;
  `,
            BIONIC_GOLD: s.css `
    background: linear-gradient(180deg, #fff0b3 0%, #535148 100%);
    box-shadow: 0 10px 9px -6px rgba(255, 255, 255, 0.25) inset;
  `,
            SPACE_SILVER: s.css `
    background: linear-gradient(180deg, #f7f7f7 0%, #9e9e9e 100%);
    box-shadow: 0 10px 9px -6px rgba(255, 255, 255, 0.25) inset;
  `,
            ROSE_GOLD: s.css `
    background: linear-gradient(180deg, #e8c6a4 0%, #625855 100%);
    box-shadow: 0 10px 9px -6px rgba(255, 255, 255, 0.25) inset;
  `
        },
        b = e => ({
            RAW_TITANIUM: {
                image: "web_v2/ring-buy/color-cta/rt-3.png/w_400",
                name: e("ring.productSelection.RAW_TITANIUM"),
                tag: null
            },
            ASTER_BLACK: {
                image: "web_v2/ring-buy/color-cta/ab-3.png/w_400",
                name: e("ring.productSelection.ASTER_BLACK"),
                tag: null
            },
            MATTE_GREY: {
                image: "web_v2/ring-buy/color-cta/mg-3.png/w_400",
                name: e("ring.productSelection.MATTE_GREY"),
                tag: null
            },
            BIONIC_GOLD: {
                image: "web_v2/ring-buy/color-cta/bg-3.png/w_400",
                name: e("ring.productSelection.BIONIC_GOLD"),
                tag: null
            },
            SPACE_SILVER: {
                image: "web_v2/ring-buy/color-cta/ss-3.png/w_400",
                name: e("ring.productSelection.SPACE_SILVER"),
                tag: null
            },
            ROSE_GOLD: {
                image: "web_v2/ring-buy/color-cta/rg-5.png/w_400",
                name: e("ring.productSelection.ROSE_GOLD"),
                tag: null
            }
        }),
        S = {
            [l.ShopifyStore.US]: {
                RAW_TITANIUM: null
            }
        },
        x = {
            ASTER_BLACK: "air_aster_black",
            BIONIC_GOLD: "air_gold",
            SPACE_SILVER: "air_silver",
            MATTE_GREY: "matte_grey",
            RAW_TITANIUM: "raw_titanium",
            ROSE_GOLD: "brushed_rose_gold"
        },
        v = new c.BiMapWithDefaults(x);
    new c.BiMapWithDefaults(x);
    let _ = new c.BiMapWithDefaults(x, "ASTER_BLACK", "air_aster_black"),
        w = new c.BiMapWithDefaults({
            ASTER_BLACK: "ws_air_aster_black",
            BIONIC_GOLD: "ws_air_gold",
            SPACE_SILVER: "ws_air_silver",
            MATTE_GREY: "ws_matte_grey",
            RAW_TITANIUM: "ws_raw_titanium",
            ROSE_GOLD: "ws_brushed_rose_gold"
        }, "ASTER_BLACK", "ws_air_aster_black"),
        E = new o.default({
            [l.ShopifyStore.IN]: "india",
            [l.ShopifyStore.AE]: "uae",
            [l.ShopifyStore.EU]: "eu_uk",
            [l.ShopifyStore.GB]: "eu_uk",
            [l.ShopifyStore.US]: "global",
            [l.ShopifyStore.ROW]: "us"
        });
    var I = ((n = {}).OG = "OG", n.DARK_MOON = "DARK_MOON", n.TRAVEL_CHARGER = "TRAVEL_CHARGER", n);
    l.ShopifyStore.IN, l.ShopifyStore.AE, l.ShopifyStore.US, l.ShopifyStore.ROW, l.ShopifyStore.EU, l.ShopifyStore.GB, l.ShopifyStore.AU, l.ShopifyStore.CA, l.ShopifyStore.IN, l.ShopifyStore.ROW, l.ShopifyStore.US, l.ShopifyStore.EU, l.ShopifyStore.GB, l.ShopifyStore.AE, l.ShopifyStore.AU, l.ShopifyStore.CA, l.ShopifyStore.SA, l.ShopifyStore.MX, l.ShopifyStore.ZA, l.ShopifyStore.IN, l.ShopifyStore.ROW, l.ShopifyStore.US, l.ShopifyStore.AE, l.ShopifyStore.EU, l.ShopifyStore.GB, l.ShopifyStore.AU, l.ShopifyStore.CA, l.ShopifyStore.SA, l.ShopifyStore.MX, l.ShopifyStore.ZA, l.ShopifyStore.IN, l.ShopifyStore.ROW, l.ShopifyStore.US, l.ShopifyStore.AE, l.ShopifyStore.EU, l.ShopifyStore.GB, l.ShopifyStore.AU, l.ShopifyStore.CA, l.ShopifyStore.SA, l.ShopifyStore.MX, l.ShopifyStore.ZA, l.ShopifyStore.IN, l.ShopifyStore.ROW, l.ShopifyStore.US, l.ShopifyStore.AE, l.ShopifyStore.EU, l.ShopifyStore.GB, l.ShopifyStore.AU, l.ShopifyStore.CA, l.ShopifyStore.SA, l.ShopifyStore.MX, l.ShopifyStore.ZA, l.ShopifyStore.IN, l.ShopifyStore.ROW, l.ShopifyStore.US, l.ShopifyStore.AE, l.ShopifyStore.EU, l.ShopifyStore.GB, l.ShopifyStore.AU, l.ShopifyStore.CA, l.ShopifyStore.SA, l.ShopifyStore.MX, l.ShopifyStore.ZA, l.ShopifyStore.IN, l.ShopifyStore.ROW, l.ShopifyStore.US, l.ShopifyStore.AE, l.ShopifyStore.EU, l.ShopifyStore.GB, l.ShopifyStore.AU, l.ShopifyStore.CA, l.ShopifyStore.SA, l.ShopifyStore.MX, l.ShopifyStore.ZA, l.ShopifyStore.IN, l.ShopifyStore.ROW, l.ShopifyStore.US, l.ShopifyStore.AE, l.ShopifyStore.EU, l.ShopifyStore.GB, l.ShopifyStore.AU, l.ShopifyStore.CA, l.ShopifyStore.SA, l.ShopifyStore.MX, l.ShopifyStore.ZA, l.ShopifyStore.IN, l.ShopifyStore.ROW, l.ShopifyStore.US, l.ShopifyStore.AE, l.ShopifyStore.EU, l.ShopifyStore.GB, l.ShopifyStore.AU, l.ShopifyStore.CA, l.ShopifyStore.SA, l.ShopifyStore.MX, l.ShopifyStore.ZA;
    let C = {
            [l.ShopifyStore.IN]: {
                variantId: "40666139033670",
                shopifyVariantId: "gid://shopify/ProductVariant/40666139033670"
            },
            [l.ShopifyStore.AE]: {
                variantId: "44599427891442",
                shopifyVariantId: "gid://shopify/ProductVariant/44599427891442"
            },
            [l.ShopifyStore.ROW]: {
                variantId: "40672441401404",
                shopifyVariantId: "gid://shopify/ProductVariant/40672441401404"
            },
            [l.ShopifyStore.US]: {
                variantId: "39873251672160",
                shopifyVariantId: "gid://shopify/ProductVariant/39873251672160"
            },
            [l.ShopifyStore.EU]: {
                variantId: "49202713493822",
                shopifyVariantId: "gid://shopify/ProductVariant/49202713493822"
            },
            [l.ShopifyStore.GB]: {
                variantId: "49202713493822",
                shopifyVariantId: "gid://shopify/ProductVariant/49202713493822"
            },
            [l.ShopifyStore.AU]: {
                variantId: "49202713493822",
                shopifyVariantId: "gid://shopify/ProductVariant/49202713493822"
            },
            [l.ShopifyStore.CA]: {
                variantId: "39873251672160",
                shopifyVariantId: "gid://shopify/ProductVariant/39873251672160"
            },
            [l.ShopifyStore.SA]: {
                variantId: "49202713493822",
                shopifyVariantId: "gid://shopify/ProductVariant/49202713493822"
            },
            [l.ShopifyStore.MX]: {
                variantId: "49202713493822",
                shopifyVariantId: "gid://shopify/ProductVariant/49202713493822"
            },
            [l.ShopifyStore.ZA]: {
                variantId: "49202713493822",
                shopifyVariantId: "gid://shopify/ProductVariant/49202713493822"
            }
        },
        A = (0, d.buildStoreConfig)({
            [l.ShopifyStore.IN]: {
                price: 0,
                variantId: "44694523871302",
                shopifyVariantId: "gid://shopify/ProductVariant/44694523871302"
            },
            [l.ShopifyStore.AE]: {
                price: 0,
                variantId: "62576898212211",
                shopifyVariantId: "gid://shopify/ProductVariant/62576898212211"
            },
            [l.ShopifyStore.ROW]: {
                price: 0,
                variantId: "44022056517692",
                shopifyVariantId: "gid://shopify/ProductVariant/44022056517692"
            },
            [l.ShopifyStore.US]: {
                price: 0,
                variantId: "42613973975136",
                shopifyVariantId: "gid://shopify/ProductVariant/42613973975136"
            },
            [l.ShopifyStore.EU]: {
                price: 0,
                variantId: "57376060440950",
                shopifyVariantId: "gid://shopify/ProductVariant/57376060440950"
            },
            [l.ShopifyStore.GB]: {
                price: 0
            },
            [l.ShopifyStore.AU]: {
                price: 0
            },
            [l.ShopifyStore.CA]: {
                price: 0
            },
            [l.ShopifyStore.SA]: {
                price: 0
            },
            [l.ShopifyStore.MX]: {
                price: 0
            },
            [l.ShopifyStore.ZA]: {
                price: 0
            }
        });
    l.ShopifyStore.IN, l.ShopifyStore.AE, l.ShopifyStore.ROW, l.ShopifyStore.US, l.ShopifyStore.EU, l.ShopifyStore.GB, l.ShopifyStore.AU, l.ShopifyStore.CA, l.ShopifyStore.SA, l.ShopifyStore.MX, l.ShopifyStore.ZA;
    let k = {
        [l.ShopifyStore.IN]: ["gid://shopify/Product/7181298532422", "gid://shopify/Product/7129411813446", "gid://shopify/Product/7521922023494", "gid://shopify/Product/7148985712710"],
        [l.ShopifyStore.AE]: ["gid://shopify/Product/7948546998514", "gid://shopify/Product/7918333264114", "gid://shopify/Product/8379290517746", "gid://shopify/Product/7931770077426"],
        [l.ShopifyStore.ROW]: ["gid://shopify/Product/7156336754748", "gid://shopify/Product/7129411813446", "gid://shopify/Product/7129625821244", "gid://shopify/Product/7535317614652", "gid://shopify/Product/7142706905148"],
        [l.ShopifyStore.US]: ["gid://shopify/Product/6854366888032", "gid://shopify/Product/6853766807648", "gid://shopify/Product/6853766807648", "gid://shopify/Product/7037398876256", "gid://shopify/Product/6718282661984"],
        [l.ShopifyStore.EU]: ["gid://shopify/Product/10950659113278", "gid://shopify/Product/10950629359934", "gid://shopify/Product/10950659014974"],
        [l.ShopifyStore.GB]: ["gid://shopify/Product/10950659113278", "gid://shopify/Product/10950629359934", "gid://shopify/Product/10950659014974"],
        [l.ShopifyStore.AU]: ["gid://shopify/Product/10950659113278", "gid://shopify/Product/10950629359934", "gid://shopify/Product/10950659014974"],
        [l.ShopifyStore.CA]: ["gid://shopify/Product/6854366888032", "gid://shopify/Product/6853766807648", "gid://shopify/Product/6853766807648", "gid://shopify/Product/7037398876256", "gid://shopify/Product/6718282661984"],
        [l.ShopifyStore.SA]: ["gid://shopify/Product/10950659113278", "gid://shopify/Product/10950629359934", "gid://shopify/Product/10950659014974"],
        [l.ShopifyStore.MX]: ["gid://shopify/Product/10950659113278", "gid://shopify/Product/10950629359934", "gid://shopify/Product/10950659014974"],
        [l.ShopifyStore.ZA]: ["gid://shopify/Product/10950659113278", "gid://shopify/Product/10950629359934", "gid://shopify/Product/10950659014974"]
    };
    var R = ((a = {}).BETTER_HELP_CHECKOUT = "BETTER_HELP_CHECKOUT", a);
    e.s(["AfibCountryCodes", 0, ["GB", "AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK", "SI", "ES", "SE", "CH", "TR", "AL", "DZ", "AD", "AO", "AG", "AM", "AZ", "BS", "BH", "BD", "BB", "BZ", "BJ", "BT", "BW", "BN", "BF", "BI", "CM", "CV", "TD", "KM", "CG", "CI", "DJ", "DM", "DO", "SV", "GQ", "ER", "FJ", "GA", "GM", "GE", "GD", "GT", "GN", "GW", "GY", "HT", "JM", "KI", "KW", "LA", "LS", "LR", "MO", "MG", "MW", "MV", "MH", "MR", "MU", "FM", "MD", "MN", "MZ", "NA", "NR", "NP", "NE", "PK", "PW", "PG", "QA", "RW", "KN", "LC", "VC", "ST", "SN", "SC", "SL", "SR", "SZ", "TL", "TG", "TO", "TT", "TM", "TV", "UG", "VU", "EH", "ZM", "ZW"], "AirRingColors", () => p, "DEFAULT_PRICE_STRIKED_STORES", 0, [], "EngravingPrice", 0, m, "FrontendBackendRingNameMap", 0, v, "FrontendBackendRingNameMapWithDefault", 0, _, "FrontendBackendStoresMap", 0, E, "MiscRingCheckoutTypes", () => R, "RingAirColorGradientsCss", 0, y, "RingAirColorNameLargeImages", 0, {
        RAW_TITANIUM: {
            image: "web_v2/ring-buy/color-cta/rt-3.png/w_1000",
            name: "Raw Titanium",
            tag: null
        },
        ASTER_BLACK: {
            image: "web_v2/ring-buy/color-cta/ab-3.png/w_1000",
            name: "Aster Black",
            tag: null
        },
        MATTE_GREY: {
            image: "web_v2/ring-buy/color-cta/mg-3.png/w_1000",
            name: "Matte Grey",
            tag: null
        },
        BIONIC_GOLD: {
            image: "web_v2/ring-buy/color-cta/bg-3.png/w_1000",
            name: "Bionic Gold",
            tag: null
        },
        SPACE_SILVER: {
            image: "web_v2/ring-buy/color-cta/ss-3.png/w_1000",
            name: "Space Silver",
            tag: null
        },
        ROSE_GOLD: {
            image: "web_v2/ring-buy/color-cta/rg-5.png/w_1000",
            name: "Brushed Rose Gold",
            tag: null
        }
    }, "RingAndRelatedProductsIdMap", 0, k, "RingChargerType", () => I, "RingPriceData", 0, h, "RingPriceStriked", 0, g, "RingProSizingKitShopifyMap", 0, A, "RingSizes", () => f, "RingType", () => u, "SizingKitShopifyMap", 0, C, "WSFrontendBackendRingNameMapWithDefault", 0, w, "getEngravingKey", 0, e => e ? "ENGRAVED" : "NOT_ENGRAVED", "getRingAirColorNameImages", 0, b, "getRingAirColorTag", 0, (e, t, r) => {
        let i = b(r || (e => e)),
            n = i[e] ? .tag ? ? null;
        if (!t) return n ? ? null;
        let a = S[t];
        return a && Object.prototype.hasOwnProperty.call(a, e) ? a[e] ? ? null : n ? ? null
    }])
}, 74975, e => {
    "use strict";
    var t = e.i(59207);
    let r = {
        [t.ShopifyStore.US]: {
            Year1: {
                price: 39.99,
                variantId: "gid://shopify/ProductVariant/42233324601440"
            },
            Year2: {
                price: 69.99,
                variantId: "gid://shopify/ProductVariant/42233324634208",
                save: 25
            }
        },
        [t.ShopifyStore.IN]: {
            Year1: {
                price: 3499.99,
                variantId: "gid://shopify/ProductVariant/43700247265350"
            },
            Year2: {
                price: 5999.99,
                variantId: "gid://shopify/ProductVariant/43700247298118",
                save: 29
            }
        },
        [t.ShopifyStore.AE]: {
            Year1: {
                price: 149.99,
                variantId: "gid://shopify/ProductVariant/52852469694835"
            },
            Year2: {
                price: 269.99,
                variantId: "gid://shopify/ProductVariant/52852469727603",
                save: 11
            }
        },
        [t.ShopifyStore.GB]: {
            Year1: {
                price: 29.99,
                variantId: "gid://shopify/ProductVariant/56108027576694"
            },
            Year2: {
                price: 52.99,
                variantId: "gid://shopify/ProductVariant/56108027609462",
                save: 23
            }
        },
        [t.ShopifyStore.EU]: {
            Year1: {
                price: 39.99,
                variantId: "gid://shopify/ProductVariant/56108027576694"
            },
            Year2: {
                price: 69.99,
                variantId: "gid://shopify/ProductVariant/56108027609462",
                save: 25
            }
        },
        [t.ShopifyStore.ROW]: {
            Year1: {
                price: 39.99,
                variantId: "gid://shopify/ProductVariant/43418280591420"
            },
            Year2: {
                price: 69.99,
                variantId: "gid://shopify/ProductVariant/43418280624188",
                save: 25
            }
        },
        [t.ShopifyStore.AU]: {
            Year1: {
                price: 59.99,
                variantId: "gid://shopify/ProductVariant/56108027576694"
            },
            Year2: {
                price: 99.99,
                variantId: "gid://shopify/ProductVariant/56108027609462",
                save: 33
            }
        },
        [t.ShopifyStore.CA]: {
            Year1: {
                price: 49.99,
                variantId: "gid://shopify/ProductVariant/42233324601440"
            },
            Year2: {
                price: 99.99,
                variantId: "gid://shopify/ProductVariant/42233324634208",
                save: 0
            }
        },
        [t.ShopifyStore.SA]: {
            Year1: {
                price: 172.99,
                variantId: "gid://shopify/ProductVariant/43418280591420"
            },
            Year2: {
                price: 302.99,
                variantId: "gid://shopify/ProductVariant/43418280624188",
                save: 25
            }
        },
        [t.ShopifyStore.MX]: {
            Year1: {
                price: 735.99,
                variantId: "gid://shopify/ProductVariant/43418280591420"
            },
            Year2: {
                price: 1287.99,
                variantId: "gid://shopify/ProductVariant/43418280624188",
                save: 25
            }
        },
        [t.ShopifyStore.ZA]: {
            Year1: {
                price: 799,
                variantId: "gid://shopify/ProductVariant/56108027576694"
            },
            Year2: {
                price: 1399,
                variantId: "gid://shopify/ProductVariant/56108027609462",
                save: 25
            }
        }
    };
    e.s(["CnoProShopifyMap", 0, r])
}, 53238, e => {
    "use strict";
    var t = e.i(59207);
    let r = {
        [t.ShopifyStore.US]: {
            Year1: {
                price: 39.99,
                variantId: "gid://shopify/ProductVariant/43688606662716"
            },
            Year2: {
                price: 69.99,
                variantId: "gid://shopify/ProductVariant/43688606695484",
                save: 25
            }
        },
        [t.ShopifyStore.IN]: {
            Year1: {
                price: 3499.99,
                variantId: "gid://shopify/ProductVariant/44113993596998"
            },
            Year2: {
                price: 5999.99,
                variantId: "gid://shopify/ProductVariant/44113993629766",
                save: 29
            }
        },
        [t.ShopifyStore.AE]: {
            Year1: {
                price: 149.99,
                variantId: "gid://shopify/ProductVariant/62306928460147"
            },
            Year2: {
                price: 269.99,
                variantId: "gid://shopify/ProductVariant/62306928492915",
                save: 11
            }
        },
        [t.ShopifyStore.GB]: {
            Year1: {
                price: 29.99,
                variantId: "gid://shopify/ProductVariant/56701768434038"
            },
            Year2: {
                price: 52.99,
                variantId: "gid://shopify/ProductVariant/56701768466806",
                save: 23
            }
        },
        [t.ShopifyStore.EU]: {
            Year1: {
                price: 39.99,
                variantId: "gid://shopify/ProductVariant/56701768434038"
            },
            Year2: {
                price: 69.99,
                variantId: "gid://shopify/ProductVariant/56701768466806",
                save: 25
            }
        },
        [t.ShopifyStore.ROW]: {
            Year1: {
                price: 39.99,
                variantId: "gid://shopify/ProductVariant/43688606662716"
            },
            Year2: {
                price: 69.99,
                variantId: "gid://shopify/ProductVariant/43688606695484",
                save: 25
            }
        },
        [t.ShopifyStore.AU]: {
            Year1: {
                price: 59.99,
                variantId: "gid://shopify/ProductVariant/56701768434038"
            },
            Year2: {
                price: 99.99,
                variantId: "gid://shopify/ProductVariant/56701768466806",
                save: 33
            }
        },
        [t.ShopifyStore.CA]: {
            Year1: {
                price: 49.99,
                variantId: "gid://shopify/ProductVariant/43688606662716"
            },
            Year2: {
                price: 99.99,
                variantId: "gid://shopify/ProductVariant/43688606695484",
                save: 0
            }
        },
        [t.ShopifyStore.SA]: {
            Year1: {
                price: 172.99,
                variantId: "gid://shopify/ProductVariant/56701768434038"
            },
            Year2: {
                price: 302.99,
                variantId: "gid://shopify/ProductVariant/56701768466806",
                save: 25
            }
        },
        [t.ShopifyStore.MX]: {
            Year1: {
                price: 735.99,
                variantId: "gid://shopify/ProductVariant/56701768434038"
            },
            Year2: {
                price: 1287.99,
                variantId: "gid://shopify/ProductVariant/56701768466806",
                save: 25
            }
        },
        [t.ShopifyStore.ZA]: {
            Year1: {
                price: 799,
                variantId: "gid://shopify/ProductVariant/56701768434038"
            },
            Year2: {
                price: 1399,
                variantId: "gid://shopify/ProductVariant/56701768466806",
                save: 25
            }
        }
    };
    e.s(["CnoPlusShopifyMap", 0, r])
}, 40647, e => {
    "use strict";
    var t = e.i(59207);
    let r = {
        [t.ShopifyStore.IN]: {
            Year1: {
                variantId: "gid://shopify/ProductVariant/43721380167750",
                alternateVariantId: "gid://shopify/ProductVariant/43721380167750",
                price: 799,
                discountedPrice: 250,
                discountCode: "DA28GBZKQ771"
            }
        },
        [t.ShopifyStore.AE]: {
            Year1: {
                variantId: "gid://shopify/ProductVariant/52870403293555",
                alternateVariantId: "gid://shopify/ProductVariant/52870403293555",
                price: 149.99,
                discountedPrice: 34.99,
                discountCode: "73AEW8FGE8EC"
            }
        },
        [t.ShopifyStore.EU]: {
            Year1: {
                variantId: "gid://shopify/ProductVariant/56156431024502",
                alternateVariantId: "gid://shopify/ProductVariant/56156431024502",
                price: 39.99,
                discountedPrice: 9.99,
                discountCode: "0DC7CX46SWW5"
            }
        },
        [t.ShopifyStore.GB]: {
            Year1: {
                variantId: "gid://shopify/ProductVariant/56130469855606",
                alternateVariantId: "gid://shopify/ProductVariant/56130469855606",
                price: 24.99,
                discountedPrice: 7.99,
                discountCode: "KA1ZBECARDVA"
            }
        },
        [t.ShopifyStore.ROW]: {
            Year1: {
                variantId: "gid://shopify/ProductVariant/43429038751804",
                alternateVariantId: "gid://shopify/ProductVariant/43429038751804",
                price: 39,
                discountedPrice: 9.99,
                discountCode: "HKK6SVAG0PF8"
            }
        },
        [t.ShopifyStore.US]: {
            Year1: {
                variantId: "gid://shopify/ProductVariant/42245095587936",
                alternateVariantId: "gid://shopify/ProductVariant/42245095587936",
                price: 39,
                discountedPrice: 9.99,
                discountCode: "0G3WSZPJ3007"
            }
        },
        [t.ShopifyStore.AU]: {
            Year1: {
                variantId: "gid://shopify/ProductVariant/56130469855606",
                alternateVariantId: "gid://shopify/ProductVariant/56130469855606",
                price: 24.99,
                discountedPrice: 7.99,
                discountCode: "KA1ZBECARDVA"
            }
        },
        [t.ShopifyStore.CA]: {
            Year1: {
                variantId: "gid://shopify/ProductVariant/42245095587936",
                alternateVariantId: "gid://shopify/ProductVariant/42245095587936",
                price: 39,
                discountedPrice: 9.99,
                discountCode: "0G3WSZPJ3007"
            }
        },
        [t.ShopifyStore.SA]: {
            Year1: {
                variantId: "gid://shopify/ProductVariant/56156431024502",
                alternateVariantId: "gid://shopify/ProductVariant/56156431024502",
                price: 39.99,
                discountedPrice: 9.99,
                discountCode: "0DC7CX46SWW5"
            }
        },
        [t.ShopifyStore.MX]: {
            Year1: {
                variantId: "gid://shopify/ProductVariant/56156431024502",
                alternateVariantId: "gid://shopify/ProductVariant/56156431024502",
                price: 39.99,
                discountedPrice: 9.99,
                discountCode: "0DC7CX46SWW5"
            }
        },
        [t.ShopifyStore.ZA]: {
            Year1: {
                variantId: "gid://shopify/ProductVariant/56156431024502",
                alternateVariantId: "gid://shopify/ProductVariant/56156431024502",
                price: 39.99,
                discountedPrice: 9.99,
                discountCode: "0DC7CX46SWW5"
            }
        }
    };
    e.s(["ClueShopifyMap", 0, r])
}, 90380, 37515, e => {
    "use strict";
    e.i(50461);
    var t = e.i(59207);
    let r = {
        [t.ShopifyStore.IN]: {
            Year1: {
                variantId: "gid://shopify/ProductVariant/42410418995270",
                alternateVariantId: "gid://shopify/ProductVariant/42410418995270",
                price: 4999
            },
            Year2: {
                variantId: "gid://shopify/ProductVariant/42458741243974",
                alternateVariantId: "gid://shopify/ProductVariant/42458741243974",
                price: 5999,
                save: 20
            }
        },
        [t.ShopifyStore.AE]: {
            Year1: {
                variantId: "gid://shopify/ProductVariant/52323624747379",
                alternateVariantId: "gid://shopify/ProductVariant/52323624747379",
                price: 199
            },
            Year2: {
                variantId: "gid://shopify/ProductVariant/52355419963763",
                alternateVariantId: "gid://shopify/ProductVariant/52355419963763",
                price: 299.99,
                save: 20
            }
        },
        [t.ShopifyStore.EU]: {
            Year1: {
                variantId: "gid://shopify/ProductVariant/55121006821750",
                alternateVariantId: "gid://shopify/ProductVariant/55121006821750",
                price: 49
            },
            Year2: {
                variantId: "gid://shopify/ProductVariant/55176328020342",
                alternateVariantId: "gid://shopify/ProductVariant/55176328020342",
                price: 79,
                save: 44
            }
        },
        [t.ShopifyStore.GB]: {
            Year1: {
                variantId: "gid://shopify/ProductVariant/55121006821750",
                alternateVariantId: "gid://shopify/ProductVariant/55121006821750",
                price: 49
            },
            Year2: {
                variantId: "gid://shopify/ProductVariant/55176328020342",
                alternateVariantId: "gid://shopify/ProductVariant/55176328020342",
                price: 79,
                save: 20
            }
        },
        [t.ShopifyStore.ROW]: {
            Year1: {
                variantId: "gid://shopify/ProductVariant/42449043030076",
                alternateVariantId: "gid://shopify/ProductVariant/42449043030076",
                price: 48
            },
            Year2: {
                variantId: "gid://shopify/ProductVariant/42493701718076",
                alternateVariantId: "gid://shopify/ProductVariant/42493701718076",
                price: 78,
                save: 23
            }
        },
        [t.ShopifyStore.US]: {
            Year1: {
                variantId: "gid://shopify/ProductVariant/41515247075424",
                alternateVariantId: "gid://shopify/ProductVariant/41515247075424",
                price: 48
            },
            Year2: {
                variantId: "gid://shopify/ProductVariant/41559574216800",
                alternateVariantId: "gid://shopify/ProductVariant/41559574216800",
                price: 78,
                save: 23
            }
        },
        [t.ShopifyStore.AU]: {
            Year1: {
                variantId: "gid://shopify/ProductVariant/55121006821750",
                alternateVariantId: "gid://shopify/ProductVariant/55121006821750",
                price: 79
            },
            Year2: {
                variantId: "gid://shopify/ProductVariant/55176328020342",
                alternateVariantId: "gid://shopify/ProductVariant/55176328020342",
                price: 79,
                save: 20
            }
        },
        [t.ShopifyStore.CA]: {
            Year1: {
                variantId: "gid://shopify/ProductVariant/41515247075424",
                alternateVariantId: "gid://shopify/ProductVariant/41515247075424",
                price: 69
            },
            Year2: {
                variantId: "gid://shopify/ProductVariant/41559574216800",
                alternateVariantId: "gid://shopify/ProductVariant/41559574216800",
                price: 78,
                save: 23
            }
        },
        [t.ShopifyStore.SA]: {
            Year1: {
                variantId: "gid://shopify/ProductVariant/55121006821750",
                alternateVariantId: "gid://shopify/ProductVariant/55121006821750",
                price: 48
            },
            Year2: {
                variantId: "gid://shopify/ProductVariant/55176328020342",
                alternateVariantId: "gid://shopify/ProductVariant/55176328020342",
                price: 78,
                save: 23
            }
        },
        [t.ShopifyStore.MX]: {
            Year1: {
                variantId: "gid://shopify/ProductVariant/55121006821750",
                alternateVariantId: "gid://shopify/ProductVariant/55121006821750",
                price: 48
            },
            Year2: {
                variantId: "gid://shopify/ProductVariant/55176328020342",
                alternateVariantId: "gid://shopify/ProductVariant/55176328020342",
                price: 78,
                save: 23
            }
        },
        [t.ShopifyStore.ZA]: {
            Year1: {
                variantId: "gid://shopify/ProductVariant/55121006821750",
                alternateVariantId: "gid://shopify/ProductVariant/55121006821750",
                price: 48
            },
            Year2: {
                variantId: "gid://shopify/ProductVariant/55176328020342",
                alternateVariantId: "gid://shopify/ProductVariant/55176328020342",
                price: 78,
                save: 23
            }
        }
    };
    e.s(["AfibShopifyMap", 0, r], 90380);
    let i = {
        [t.ShopifyStore.IN]: {
            Year1: {
                variantId: "gid://shopify/ProductVariant/42410419650630",
                alternateVariantId: "gid://shopify/ProductVariant/42410419650630",
                price: 2499
            },
            Year2: {
                variantId: "gid://shopify/ProductVariant/42458741243974",
                alternateVariantId: "gid://shopify/ProductVariant/42458741243974",
                price: 3998,
                save: 20
            }
        },
        [t.ShopifyStore.AE]: {
            Year1: {
                variantId: "gid://shopify/ProductVariant/52323624976755",
                alternateVariantId: "gid://shopify/ProductVariant/52323624976755",
                price: 99.99
            },
            Year2: {
                variantId: "gid://shopify/ProductVariant/52355419963763",
                alternateVariantId: "gid://shopify/ProductVariant/52355419963763",
                price: 159,
                save: 20
            }
        },
        [t.ShopifyStore.EU]: {
            Year1: {
                variantId: "gid://shopify/ProductVariant/55121009639798",
                alternateVariantId: "gid://shopify/ProductVariant/55121009639798",
                price: 29
            },
            Year2: {
                variantId: "gid://shopify/ProductVariant/55176328544630",
                alternateVariantId: "gid://shopify/ProductVariant/55176328544630",
                price: 46,
                save: 21
            }
        },
        [t.ShopifyStore.GB]: {
            Year1: {
                variantId: "gid://shopify/ProductVariant/55121009639798",
                alternateVariantId: "gid://shopify/ProductVariant/55121009639798",
                price: 25
            },
            Year2: {
                variantId: "gid://shopify/ProductVariant/55176328544630",
                alternateVariantId: "gid://shopify/ProductVariant/55176328544630",
                price: 40,
                save: 20
            }
        },
        [t.ShopifyStore.ROW]: {
            Year1: {
                variantId: "gid://shopify/ProductVariant/42449043783740",
                alternateVariantId: "gid://shopify/ProductVariant/42449043783740",
                price: 24
            },
            Year2: {
                variantId: "gid://shopify/ProductVariant/42493701947452",
                alternateVariantId: "gid://shopify/ProductVariant/42493701947452",
                price: 38,
                save: 21
            }
        },
        [t.ShopifyStore.US]: {
            Year1: {
                variantId: "gid://shopify/ProductVariant/41515248222304",
                alternateVariantId: "gid://shopify/ProductVariant/41515248222304",
                price: 24
            },
            Year2: {
                variantId: "gid://shopify/ProductVariant/41559589814368",
                alternateVariantId: "gid://shopify/ProductVariant/41559589814368",
                price: 38,
                save: 21
            }
        },
        [t.ShopifyStore.AU]: {
            Year1: {
                variantId: "gid://shopify/ProductVariant/55121009639798",
                alternateVariantId: "gid://shopify/ProductVariant/55121009639798",
                price: 39
            },
            Year2: {
                variantId: "gid://shopify/ProductVariant/55176328544630",
                alternateVariantId: "gid://shopify/ProductVariant/55176328544630",
                price: 59,
                save: 24
            }
        },
        [t.ShopifyStore.CA]: {
            Year1: {
                variantId: "gid://shopify/ProductVariant/41515248222304",
                alternateVariantId: "gid://shopify/ProductVariant/41515248222304",
                price: 35
            },
            Year2: {
                variantId: "gid://shopify/ProductVariant/41559589814368",
                alternateVariantId: "gid://shopify/ProductVariant/41559589814368",
                price: 49,
                save: 30
            }
        },
        [t.ShopifyStore.SA]: {
            Year1: {
                variantId: "gid://shopify/ProductVariant/55121009639798",
                alternateVariantId: "gid://shopify/ProductVariant/55121009639798",
                price: 103
            },
            Year2: {
                variantId: "gid://shopify/ProductVariant/55176328544630",
                alternateVariantId: "gid://shopify/ProductVariant/55176328544630",
                price: 165,
                save: 41
            }
        },
        [t.ShopifyStore.MX]: {
            Year1: {
                variantId: "gid://shopify/ProductVariant/55121009639798",
                alternateVariantId: "gid://shopify/ProductVariant/55121009639798",
                price: 442
            },
            Year2: {
                variantId: "gid://shopify/ProductVariant/55176328544630",
                alternateVariantId: "gid://shopify/ProductVariant/55176328544630",
                price: 699,
                save: 185
            }
        },
        [t.ShopifyStore.ZA]: {
            Year1: {
                variantId: "gid://shopify/ProductVariant/55121009639798",
                alternateVariantId: "gid://shopify/ProductVariant/55121009639798",
                price: 599
            },
            Year2: {
                variantId: "gid://shopify/ProductVariant/55176328544630",
                alternateVariantId: "gid://shopify/ProductVariant/55176328544630",
                price: 999,
                save: 199
            }
        }
    };
    e.s(["CardioAdaptibilityShopifyMap", 0, i], 37515)
}, 22644, 26234, 70753, e => {
    "use strict";
    var t = e.i(91788),
        r = e.i(3828),
        i = e.i(48335),
        n = e.i(77180),
        a = e.i(82702),
        o = e.i(74975),
        s = e.i(53238),
        c = e.i(40647),
        d = e.i(56560),
        l = e.i(90380),
        u = e.i(37515),
        p = e.i(25635);
    e.s(["useCartState", 0, () => {
        let [e, f] = (0, t.useState)(null), [h, m] = (0, t.useState)(null), [g, y] = (0, t.useState)(!1), [b, S] = (0, t.useState)(null), x = (0, r.useRouter)(), v = (0, t.useCallback)(e => {
            f(e), e && h ? E.current = h : e || (E.current = null)
        }, [h]), _ = (0, t.useRef)(null), w = (0, t.useRef)(!1), E = (0, t.useRef)(null), I = (0, t.useCallback)(async e => {
            if (!h || !e) return;
            let t = encodeURIComponent(e),
                r = await (0, i.makeStoreApiRequest)(h, `/api/vendor/shopify/cart/?id=${t}`);
            if (!r || !("error" in r) || !r.error) return r
        }, [h]), C = (0, t.useCallback)(async (e, t) => {
            if (!h || !e || !t) return;
            let r = await (0, i.makeStoreApiRequest)(h, "/api/vendor/shopify/cart/updateAttributes/", {
                cartId: e,
                attributes: t
            });
            if (!r || !("error" in r) || !r.error) return r
        }, [h]), A = (0, t.useCallback)(async () => {
            if (!h) return;
            v(null);
            let e = `cart_${h}`,
                t = (0, i.getFromLocalStorage)(e);
            if (t && !["", void 0, null].includes(t)) try {
                let r = await I(t);
                if (!r || !(0, i.isCartApiSuccess)(r) || !r.cart || !r.cart.id) {
                    (0, i.deleteFromLocalStorage)(e), v(null);
                    return
                }
                if (_.current && _.current.length > 0) {
                    console.log("Merging URL params with existing cart attributes");
                    let n = r.cart.attributes || [],
                        a = new Map;
                    for (let e of n) a.set(e.key, e.value);
                    if (_.current)
                        for (let e of _.current) a.set(e.key, e.value);
                    let o = Array.from(a, ([e, t]) => ({
                            key: e,
                            value: t
                        })),
                        s = await C(t, o);
                    s && (0, i.isCartApiSuccess)(s) && s.cart && s.cart.id ? v(s.cart) : ((0, i.deleteFromLocalStorage)(e), v(null))
                } else v(r.cart)
            } catch (t) {
                console.error("Error updating cart:", t), (0, i.deleteFromLocalStorage)(e), v(null)
            }
        }, [h]), k = (0, t.useCallback)(() => {
            if (v(null), h) {
                let e = `cart_${h}`;
                (0, i.deleteFromLocalStorage)(e)
            }
        }, [h]), R = (0, t.useCallback)(() => {
            let e = ["currency", "type", "product", "affiliateDiscountCode", "affiliateName", "affiliateDiscountPercentage", "affiliateImage"],
                t = new URLSearchParams(window.location.search),
                r = [];
            for (let [i, n] of t.entries()) !e.includes(i) && n && r.push({
                key: i,
                value: n
            });
            _.current = r
        }, []);
        (0, t.useEffect)(() => {
            if (!w.current && (R(), e && e.id && h)) {
                let e = `cart_${h}`,
                    t = (0, i.getFromLocalStorage)(e);
                t && _.current && _.current.length > 0 && (w.current = !0, I(t).then(r => {
                    if (!r || !(0, i.isCartApiSuccess)(r) || !r.cart || !r.cart.id) {
                        (0, i.deleteFromLocalStorage)(e), v(null);
                        return
                    }
                    console.log("Merging URL params with existing cart attributes (router change)");
                    let n = r.cart.attributes || [],
                        a = new Map;
                    for (let e of n) a.set(e.key, e.value);
                    if (_.current)
                        for (let e of _.current) a.set(e.key, e.value);
                    return C(t, Array.from(a, ([e, t]) => ({
                        key: e,
                        value: t
                    })))
                }).then(t => {
                    t && (0, i.isCartApiSuccess)(t) && t.cart && t.cart.id ? v(t.cart) : ((0, i.deleteFromLocalStorage)(e), v(null))
                }).catch(t => {
                    console.error("Error updating cart attributes from URL params:", t), (0, i.deleteFromLocalStorage)(e), v(null)
                }).finally(() => {
                    w.current = !1
                }))
            }
        }, [x.query]);
        let P = (0, t.useRef)(null);
        (0, t.useEffect)(() => {
            h && P.current !== h && (console.log(`Store changed from ${P.current} to ${h}`), v(null), w.current = !1, P.current = h, A())
        }, [h]), (0, t.useEffect)(() => {
            R(), A()
        }, []), (0, t.useEffect)(() => {
            if (e && "id" in e && h)
                if (E.current === h) {
                    let t = `cart_${h}`;
                    console.log(`Saving cart ${e.id} to ${t}`), (0, i.saveToLocalStorage)(t, e.id)
                } else console.log(`Skipping cart save: cart belongs to ${E.current}, current store is ${h}`)
        }, [e, h]), (0, t.useEffect)(() => {
            if (!e || !h) return;
            let t = !0,
                r = [n.GiftWrappingProductShopifyMap[h].variantId, a.SizingKitShopifyMap[h].shopifyVariantId, a.RingProSizingKitShopifyMap[h].shopifyVariantId, d.UhxShopifyMap[h].Year1.variantId, d.UhxShopifyMap[h].Year1.alternateVariantId, d.UhxShopifyMap[h].Year2.variantId, d.UhxShopifyMap[h].Year2.alternateVariantId, d.UhxShopifyMap[h].Month3.variantId, d.UhxShopifyMap[h].Month3.alternateVariantId, u.CardioAdaptibilityShopifyMap[h].Year1.variantId, u.CardioAdaptibilityShopifyMap[h].Year2.variantId, l.AfibShopifyMap[h].Year1.variantId, l.AfibShopifyMap[h].Year2.variantId, o.CnoProShopifyMap[h] ? .Year1 ? .variantId, o.CnoProShopifyMap[h] ? .Year2 ? .variantId, s.CnoPlusShopifyMap[h] ? .Year1 ? .variantId, s.CnoPlusShopifyMap[h] ? .Year2 ? .variantId, c.ClueShopifyMap[h].Year1.variantId, p.RespiratoryShopifyMap[h].Year1.variantId];
            for (let i = 0; i < e.lines.edges.length; i++)
                if (!r.includes(e.lines.edges[i].node.merchandise.id)) {
                    t = !1;
                    break
                }
            if (t) return void k()
        }, [e, h, k]);
        let T = (0, t.useMemo)(() => ({
            taxes: e ? .cost ? .totalTaxAmount ? .amount ? ? 0,
            duty: e ? .cost ? .totalDutyAmount ? .amount ? ? 0,
            taxString: i.TaxConfig[h] ? ? ""
        }), [e ? .cost, h]);
        return {
            cart: e,
            setCart: v,
            store: h,
            setStore: m,
            cartLoading: g,
            setCartLoading: y,
            error: b,
            setError: S,
            deleteCartFromLocalStorage: k,
            updateCart: A,
            updateCartAttributes: C,
            urlParams: _.current,
            ...T
        }
    }], 22644), e.s(["useCartUI", 0, () => {
        let [e, r] = (0, t.useState)(!1), [i, n] = (0, t.useState)(null), [a, o] = (0, t.useState)(!1), [s, c] = (0, t.useState)(null), d = (0, t.useCallback)(() => {
            r(!0)
        }, []), l = (0, t.useCallback)(() => {
            n(null), r(!1)
        }, []), u = (0, t.useCallback)(e => {
            c(e || null), o(!0)
        }, []), p = (0, t.useCallback)(() => {
            o(!1), c(null)
        }, []);
        return {
            cartVisible: e,
            setCartVisible: r,
            altContent: i,
            setAltContent: n,
            isUpsellVisible: a,
            setIsUpsellVisible: o,
            primaryProductForUpsell: s,
            setPrimaryProductForUpsell: c,
            showCart: d,
            hideCart: l,
            showUpsellModal: u,
            hideUpsellModal: p
        }
    }], 26234), e.s(["useProductTracker", 0, (e, r) => {
        let [i, n] = (0, t.useState)(), [a, o] = (0, t.useState)(null), [s, c] = (0, t.useState)(null), [p, f] = (0, t.useState)(null), [h, m] = (0, t.useState)(null);
        return (0, t.useEffect)(() => {
            r && m(d.UhxShopifyMap[r].Year1.variantId)
        }, [r]), (0, t.useEffect)(() => {
            if (e ? .id) {
                let t = e.lines.edges;
                for (let {
                        node: e
                    } of (o(null), f(null), c(null), t))(e.merchandise.id === d.UhxShopifyMap[r] ? .Year1.variantId || e.merchandise.id === d.UhxShopifyMap[r] ? .Year2.variantId || e.merchandise.id === d.UhxShopifyMap[r] ? .Month3 ? .variantId) && o(e), (e.merchandise.id === l.AfibShopifyMap[r] ? .Year1.variantId || e.merchandise.id === l.AfibShopifyMap[r] ? .Year2.variantId) && f(e), (e.merchandise.id === u.CardioAdaptibilityShopifyMap[r] ? .Year1.variantId || e.merchandise.id === u.CardioAdaptibilityShopifyMap[r] ? .Year2.variantId) && c(e)
            }
        }, [e, r]), {
            cartType: i,
            setCartType: n,
            ultrahumanXAdded: a,
            setUltrahumanXAdded: o,
            cardioAdaptibilityCart: s,
            setCardioAdaptibilityCart: c,
            afibCart: p,
            setAfibCart: f,
            uhxVarianthId: h,
            setUHXVariantId: m
        }
    }], 70753)
}, 57263, e => {
    "use strict";
    var t = e.i(91788),
        r = e.i(10116),
        i = e.i(59207);
    let n = async e => {
            try {
                let t = `${r.API_BASE_URL}/api/web_v1/affiliate_partner/${e}/`,
                    i = await fetch(t);
                return await i.json()
            } catch (e) {
                console.log({
                    err: e
                })
            }
        },
        a = async e => {
            let t = e.toLowerCase(),
                i = r.WEBCMS_API_BASE_URL + `/ultrawork/?search=${t}&page=1&limit=5`;
            try {
                let e = await fetch(i, {
                    method: "GET"
                });
                if (404 === e.status) return null;
                let t = await e.json();
                if (t.success) return t;
                return null
            } catch (e) {
                return console.log(e), null
            }
        },
        o = async (e, t) => {
            let n = r.WEBCMS_API_BASE_URL + `/ultrawork/getCompany/${e.toLowerCase()}`;
            try {
                let e = await fetch(n, {
                    method: "GET"
                });
                if (404 === e.status) return null;
                let r = await e.json();
                if (r.success && "data" in r) {
                    if (t && r.data.discounts_by_store) {
                        let e = (0, i.getEffectiveStoreForDiscount)(t);
                        if (e && r.data.discounts_by_store[e]) return { ...r.data,
                            discounts: r.data.discounts_by_store[e]
                        }
                    }
                    return r.data
                }
                return null
            } catch (e) {
                return console.log(e), null
            }
        },
        s = async (e, t) => {
            try {
                let i = await fetch(`${r.WEBCMS_API_BASE_URL}/ultrawork/login`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email: e,
                        companyCode: t
                    })
                });
                return await i.json()
            } catch (e) {
                return console.error("Error generating magic link:", e), {
                    statusCode: 500,
                    status: "fail",
                    message: "Error generating magic link"
                }
            }
        },
        c = async (e, t, i) => {
            try {
                let n = await fetch(`${r.WEBCMS_API_BASE_URL}/ultrawork/verify`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        token: e,
                        email: t,
                        companyCode: i
                    })
                });
                return await n.json()
            } catch (e) {
                return console.error("Error verifying token:", e), {
                    statusCode: 500,
                    status: "fail",
                    message: "Error verifying token"
                }
            }
        };
    e.s(["generateUltraworkMagicLink", 0, s, "getWorkAffiliate", 0, o, "searchWorkAffiliate", 0, a, "useAffiliateMetadata", 0, e => {
        let [r, i] = (0, t.useState)(null);
        return (0, t.useEffect)(() => {
            let t = async () => {
                try {
                    let t = await n(e);
                    if ("ok" !== t.status) throw Error(t.error.message ? ? "");
                    i({
                        name: t.data.name,
                        code: t.data.code,
                        image: t.data.image,
                        m1Active: t.data.m1_active,
                        ringActive: t.data.ring_active,
                        ringRareActive: t.data.ring_rare_active,
                        ringDieselActive: t.data.ring_diesel_active,
                        homeActive: t.data.home_active,
                        bloodVisionActive: t.data.blood_vision_active,
                        subtitle: t.data.subtitle,
                        landing_page: t.data.landing_page,
                        discount_configs: t.data.discount_config
                    })
                } catch (e) {
                    return {
                        redirect: {
                            destination: "/404"
                        }
                    }
                }
            };
            e && t()
        }, [e]), {
            affiliateDetails: r
        }
    }, "verifyUltraworkToken", 0, c])
}, 20685, 41315, e => {
    "use strict";
    var t, r, i = e.i(59207);
    e.i(50461);
    var n = ((t = {}).oneTimePurchase = "otp", t.membership = "membership", t.x = "x", t),
        a = ((r = {}).otp_2_week = "uh-m1-two-week", r.otp_12_week = "uh-m1-twelve-week", r.otp_24_week = "uh-m1-twenty-four-week", r.otp_1_year = "uh-m1-year", r.membership_1_sensor_month = "uh-m1-1-sensor-month", r.membership_2_sensor_month = "uh-m1-2-sensor-month", r.otp_2_week_x = "uh-m1-two-week-x", r.otp_12_week_x = "uh-m1-twelve-week-x", r.otp_24_week_x = "uh-m1-twenty-four-week-x", r.otp_1_year_x = "uh-m1-year-x", r.otp_2_week_ref = "uh-m1-two-week_ref", r.otp_4_week_ref = "uh-m1-four-week_ref", r.otp_12_week_ref = "uh-m1-twelve-week_ref", r.otp_24_week_ref = "uh-m1-twenty-four-week_ref", r.otp_1_year_ref = "uh-m1-year_ref", r.membership_1_sensor_month_ref = "uh-m1-1-sensor-month-ref", r.membership_2_sensor_month_ref = "uh-m1-2-sensor-month-ref", r.otp_2_week_campaign = "uh-m1-two-week-campaign", r.otp_4_week_campaign = "uh-m1-four-week-campaign", r.otp_2_week_select = "uh-m1-two-week-select", r.otp_12_week_select = "uh-m1-twelve-week-select", r.otp_24_week_select = "uh-m1-twenty-four-week-select", r.otp_1_year_select = "uh-m1-year-select", r.special_1_month_us = "uh-m1-one-month-us-special", r.special_3_month_us = "uh-m1-three-month-us-special", r.special_1_year_us = "uh-m1-year-us-special", r.otp_1_month_us = "uh-m1-one-month-us", r.otp_3_month_us = "uh-m1-three-month-us", r.otp_1_year_us = "uh-m1-year-us", r.membership_1_sensor_month_us = "uh-m1-1-sensor-month-us", r.otp_1_month_ae = "uh-m1-one-month-ae", r.otp_3_month_ae = "uh-m1-three-month-ae", r.otp_6_month_ae = "uh-m1-six-month-ae", r.otp_1_year_ae = "uh-m1-year-ae", r.otp_1_month_ae_x = "uh-m1-one-month-ae-x", r.otp_3_month_ae_x = "uh-m1-three-month-ae-x", r.otp_6_month_ae_x = "uh-m1-six-month-ae-x", r.otp_1_year_ae_x = "uh-m1-year-ae-x", r.membership_1_sensor_month_ae = "ul-m1-1-sensor-month-ae", r.membership_1_sensor_month_ae_ref = "ul-m1-1-sensor-month-ae-ref", r.otp_1_month_ae_ref = "uh-m1-one-month-ae-ref", r.otp_3_month_ae_ref = "uh-m1-three-month-ae-ref", r.otp_6_month_ae_ref = "uh-m1-six-month-ae-ref", r.otp_1_year_ae_ref = "uh-m1-year-ae-ref", r.otp_3_month_ae_affiliate = "uh-m1-three-month-ae-affiliate", r.otp_6_month_ae_affiliate = "uh-m1-six-month-ae-affiliate", r.ultrahuman_x = "ultrahuman_x", r.ultrahuman_x_ae = "ultrahuman_x_ae", r.ultrahuman_x_us = "ultrahuman_x_us", r.otp_2_weeks_eu = "otp_2_weeks_eu", r.otp_4_weeks_eu = "otp_4_weeks_eu", r.otp_12_weeks_eu = "otp_12_weeks_eu", r.otp_2_weeks_eu_campaign = "otp_2_weeks_eu_campaign", r.otp_4_weeks_eu_campaign = "otp_4_weeks_eu_campaign", r.otp_12_weeks_eu_campaign = "otp_12_weeks_eu_campaign", r);
    e.s(["ProductPurchaseOption", () => n, "ProductPurchaseType", () => a, "productShopifyIdMap", 0, {
        "uh-m1-two-week": {
            type: "otp",
            productId: "40458091036742",
            shopifyVariantId: "gid://shopify/ProductVariant/40458091036742",
            productType: "cyborg",
            planId: 0
        },
        "uh-m1-twelve-week": {
            type: "otp",
            productId: "40458093953094",
            shopifyVariantId: "gid://shopify/ProductVariant/40458093953094",
            productType: "cyborg",
            planId: 0
        },
        "uh-m1-twenty-four-week": {
            type: "otp",
            productId: "40458095722566",
            shopifyVariantId: "gid://shopify/ProductVariant/40458095722566",
            productType: "cyborg",
            planId: 0
        },
        "uh-m1-year": {
            type: "otp",
            productId: "40458096541766",
            shopifyVariantId: "gid://shopify/ProductVariant/40458096541766",
            productType: "cyborg",
            planId: 0
        },
        "uh-m1-two-week-x": {
            type: "x",
            productId: "40566813556806",
            shopifyVariantId: "gid://shopify/ProductVariant/40566813556806",
            productType: "cyborg",
            planId: 0
        },
        "uh-m1-twelve-week-x": {
            type: "x",
            productId: "40596792016966",
            shopifyVariantId: "gid://shopify/ProductVariant/40596792016966",
            productType: "cyborg",
            planId: 0
        },
        "uh-m1-twenty-four-week-x": {
            type: "x",
            productId: "40566761324614",
            shopifyVariantId: "gid://shopify/ProductVariant/40566761324614",
            productType: "cyborg",
            planId: 0
        },
        "uh-m1-year-x": {
            type: "x",
            productId: "40566763487302",
            shopifyVariantId: "gid://shopify/ProductVariant/40566763487302",
            productType: "cyborg",
            planId: 0
        },
        "uh-m1-two-week_ref": {
            type: "otp",
            productId: "40462186283078",
            shopifyVariantId: "gid://shopify/ProductVariant/40462186283078",
            productType: "cyborg",
            planId: 0
        },
        "uh-m1-four-week_ref": {
            type: "otp",
            productId: "40376567693382",
            shopifyVariantId: "gid://shopify/ProductVariant/40329680257094",
            productType: "cyborg",
            planId: 0
        },
        "uh-m1-twelve-week_ref": {
            type: "otp",
            productId: "40462187855942",
            shopifyVariantId: "gid://shopify/ProductVariant/40462187855942",
            productType: "cyborg",
            planId: 0
        },
        "uh-m1-twenty-four-week_ref": {
            type: "otp",
            productId: "40462189527110",
            shopifyVariantId: "gid://shopify/ProductVariant/40462189527110",
            productType: "cyborg",
            planId: 0
        },
        "uh-m1-year_ref": {
            type: "otp",
            productId: "40462192083014",
            shopifyVariantId: "gid://shopify/ProductVariant/40462192083014",
            productType: "cyborg",
            planId: 0
        },
        "uh-m1-two-week-select": {
            type: "otp",
            productId: "40458091036742",
            shopifyVariantId: "gid://shopify/ProductVariant/40458091036742",
            productType: "cyborg",
            planId: 0
        },
        "uh-m1-twelve-week-select": {
            type: "otp",
            productId: "40458093953094",
            shopifyVariantId: "gid://shopify/ProductVariant/40458093953094",
            productType: "cyborg",
            planId: 0
        },
        "uh-m1-twenty-four-week-select": {
            type: "otp",
            productId: "40458095722566",
            shopifyVariantId: "gid://shopify/ProductVariant/40458095722566",
            productType: "cyborg",
            planId: 0
        },
        "uh-m1-year-select": {
            type: "otp",
            productId: "40458096541766",
            shopifyVariantId: "gid://shopify/ProductVariant/40458096541766",
            productType: "cyborg",
            planId: 0
        },
        "uh-m1-two-week-campaign": {
            type: "otp",
            productId: "40508689907782",
            shopifyVariantId: "gid://shopify/ProductVariant/40508689907782",
            productType: "cyborg",
            planId: 0
        },
        "uh-m1-four-week-campaign": {
            type: "otp",
            productId: "40508693282886",
            shopifyVariantId: "gid://shopify/ProductVariant/40508693282886",
            productType: "cyborg",
            planId: 0
        },
        "uh-m1-1-sensor-month": {
            type: "membership",
            productId: "40459179655238",
            shopifyVariantId: "",
            productType: "cyborg",
            planId: 0xa99213
        },
        "uh-m1-2-sensor-month": {
            type: "membership",
            productId: "40459180769350",
            shopifyVariantId: "",
            productType: "cyborg",
            planId: 0xa99214
        },
        "uh-m1-1-sensor-month-ref": {
            type: "membership",
            productId: "40459179655238",
            shopifyVariantId: "",
            productType: "cyborg",
            planId: 0xa99213
        },
        "uh-m1-2-sensor-month-ref": {
            type: "membership",
            productId: "40459180769350",
            shopifyVariantId: "",
            productType: "cyborg",
            planId: 0xa99214
        },
        "uh-m1-one-month-ae": {
            type: "otp",
            productId: "44186161086706",
            shopifyVariantId: "gid://shopify/ProductVariant/44186161086706",
            productType: "cyborg",
            planId: 0
        },
        "uh-m1-three-month-ae": {
            type: "otp",
            productId: "44187468824818",
            shopifyVariantId: "gid://shopify/ProductVariant/44187468824818",
            productType: "cyborg",
            planId: 0
        },
        "uh-m1-six-month-ae": {
            type: "otp",
            productId: "44187592786162",
            shopifyVariantId: "gid://shopify/ProductVariant/44187592786162",
            productType: "cyborg",
            planId: 0
        },
        "uh-m1-year-ae": {
            type: "otp",
            productId: "44579593978098",
            shopifyVariantId: "gid://shopify/ProductVariant/44579593978098",
            productType: "cyborg",
            planId: 0
        },
        "uh-m1-one-month-ae-x": {
            type: "x",
            productId: "62381263847795",
            shopifyVariantId: "gid://shopify/ProductVariant/62381263847795",
            productType: "cyborg",
            planId: 0
        },
        "uh-m1-three-month-ae-x": {
            type: "x",
            productId: "62381265125747",
            shopifyVariantId: "gid://shopify/ProductVariant/62381265125747",
            productType: "cyborg",
            planId: 0
        },
        "uh-m1-six-month-ae-x": {
            type: "x",
            productId: "62381268894067",
            shopifyVariantId: "gid://shopify/ProductVariant/62381268894067",
            productType: "cyborg",
            planId: 0
        },
        "uh-m1-year-ae-x": {
            type: "x",
            productId: "62381272334707",
            shopifyVariantId: "gid://shopify/ProductVariant/62381272334707",
            productType: "cyborg",
            planId: 0
        },
        "uh-m1-one-month-ae-ref": {
            type: "otp",
            productId: "44186161086706",
            shopifyVariantId: "gid://shopify/ProductVariant/44186161086706",
            productType: "cyborg",
            planId: 0
        },
        "uh-m1-three-month-ae-ref": {
            type: "otp",
            productId: "44187468824818",
            shopifyVariantId: "gid://shopify/ProductVariant/44187468824818",
            productType: "cyborg",
            planId: 0
        },
        "uh-m1-six-month-ae-ref": {
            type: "otp",
            productId: "44187592786162",
            shopifyVariantId: "gid://shopify/ProductVariant/44187592786162",
            productType: "cyborg",
            planId: 0
        },
        "uh-m1-year-ae-ref": {
            type: "otp",
            productId: "44187781071090",
            shopifyVariantId: "gid://shopify/ProductVariant/44187781071090",
            productType: "cyborg",
            planId: 0
        },
        "ul-m1-1-sensor-month-ae": {
            type: "membership",
            productId: "44218367443186",
            shopifyVariantId: "",
            productType: "cyborg",
            planId: 0xa9929a
        },
        "ul-m1-1-sensor-month-ae-ref": {
            type: "membership",
            productId: "44218367443186",
            shopifyVariantId: "",
            productType: "cyborg",
            planId: 0xa9929a
        },
        "uh-m1-three-month-ae-affiliate": {
            type: "otp",
            productId: "44342569959666",
            shopifyVariantId: "gid://shopify/ProductVariant/44342569959666",
            productType: "cyborg",
            planId: 0
        },
        "uh-m1-six-month-ae-affiliate": {
            type: "otp",
            productId: "44342611869938",
            shopifyVariantId: "gid://shopify/ProductVariant/44342611869938",
            productType: "cyborg",
            planId: 0
        },
        "uh-m1-one-month-us-special": {
            type: "x",
            productId: "44186161086706",
            shopifyVariantId: "gid://shopify/ProductVariant/44186161086706",
            productType: "cyborg",
            planId: 0
        },
        "uh-m1-three-month-us-special": {
            type: "x",
            productId: "44187468824818",
            shopifyVariantId: "gid://shopify/ProductVariant/44187468824818",
            productType: "cyborg",
            planId: 0
        },
        "uh-m1-year-us-special": {
            type: "x",
            productId: "44579593978098",
            shopifyVariantId: "gid://shopify/ProductVariant/44579593978098",
            productType: "cyborg",
            planId: 0
        },
        "uh-m1-one-month-us": {
            type: "otp",
            productId: "44186161086706",
            shopifyVariantId: "gid://shopify/ProductVariant/44186161086706",
            productType: "cyborg",
            planId: 0
        },
        "uh-m1-three-month-us": {
            type: "otp",
            productId: "44187468824818",
            shopifyVariantId: "gid://shopify/ProductVariant/44187468824818",
            productType: "cyborg",
            planId: 0
        },
        "uh-m1-year-us": {
            type: "otp",
            productId: "44579593978098",
            shopifyVariantId: "gid://shopify/ProductVariant/44579593978098",
            productType: "cyborg",
            planId: 0
        },
        "uh-m1-1-sensor-month-us": {
            type: "membership",
            productId: "44218367443186",
            shopifyVariantId: "",
            productType: "cyborg",
            planId: 0xa9929a
        },
        otp_2_weeks_eu: {
            type: "otp",
            productId: "10950762955070",
            shopifyVariantId: "gid://shopify/ProductVariant/49203361284414",
            productType: "cyborg",
            planId: 0
        },
        otp_4_weeks_eu: {
            type: "otp",
            productId: "10950659572030",
            shopifyVariantId: "gid://shopify/ProductVariant/49202716934462",
            productType: "cyborg",
            planId: 0
        },
        otp_12_weeks_eu: {
            type: "otp",
            productId: "10950659604798",
            shopifyVariantId: "gid://shopify/ProductVariant/49202716999998",
            productType: "cyborg",
            planId: 0
        },
        otp_2_weeks_eu_campaign: {
            type: "otp",
            productId: "null",
            shopifyVariantId: "gid://shopify/ProductVariant/",
            productType: "cyborg",
            planId: 0
        },
        otp_4_weeks_eu_campaign: {
            type: "otp",
            productId: "null",
            shopifyVariantId: "gid://shopify/ProductVariant/40718088372284",
            productType: "cyborg",
            planId: 0
        },
        otp_12_weeks_eu_campaign: {
            type: "otp",
            productId: "null",
            shopifyVariantId: "gid://shopify/ProductVariant/40718094860348",
            productType: "cyborg",
            planId: 0
        },
        ultrahuman_x: {
            type: "otp",
            productId: "40922833158214",
            shopifyVariantId: "gid://shopify/ProductVariant/40922833158214",
            productType: "cyborg",
            planId: 0
        },
        ultrahuman_x_ae: {
            type: "otp",
            productId: "44515347759346",
            shopifyVariantId: "gid://shopify/ProductVariant/44515347759346",
            productType: "cyborg",
            planId: 0
        },
        ultrahuman_x_us: {
            type: "otp",
            productId: "40709660082236",
            shopifyVariantId: "gid://shopify/ProductVariant/40709660082236",
            productType: "cyborg",
            planId: 0
        }
    }], 41315), a.otp_3_month_ae_ref, n.oneTimePurchase, a.otp_4_week_ref, n.oneTimePurchase, a.otp_1_month_ae_ref, a.otp_3_month_ae_ref, a.otp_12_week_ref, a.otp_4_week_ref;
    let o = {
            [i.ShopifyStore.IN]: {
                discountCode: "REFERRAL1000",
                discount: 1e3
            },
            [i.ShopifyStore.AE]: {
                discountCode: "REFERRAL100",
                discount: 100
            }
        },
        s = {
            [i.ShopifyStore.IN]: {
                discountCode: "REFERRINGAIR",
                discount: 2849.9
            },
            [i.ShopifyStore.AE]: {
                discountCode: "REFERRINGAIR",
                discount: 129.9
            },
            [i.ShopifyStore.US]: {
                discountCode: "REFERRINGAIR",
                discount: 34.9
            },
            [i.ShopifyStore.SA]: {
                discountCode: "REFERRINGAIR",
                discount: 164.5
            },
            [i.ShopifyStore.MX]: {
                discountCode: "REFERRINGAIR",
                discount: 34.9
            },
            [i.ShopifyStore.ROW]: {
                discountCode: "REFERRINGAIR",
                discount: 34.9
            },
            [i.ShopifyStore.GB]: {
                discountCode: "REFERRINGAIR",
                discount: 27.9
            },
            [i.ShopifyStore.EU]: {
                discountCode: "REFERRINGAIR",
                discount: 27.9
            },
            [i.ShopifyStore.AU]: {
                discountCode: "REFERRINGAIR",
                discount: 27.9
            },
            [i.ShopifyStore.CA]: {
                discountCode: "REFERRINGAIR",
                discount: 34.9
            },
            [i.ShopifyStore.ZA]: {
                discountCode: "REFERRINGAIR",
                discount: 799.9
            }
        },
        c = {},
        d = {
            [i.ShopifyStore.AE]: {
                discountCode: "BFSM120",
                discount: 20,
                discountType: "percentage",
                active: !1
            },
            [i.ShopifyStore.GB]: {
                discountCode: "BFSM130",
                discount: 30,
                discountType: "percentage",
                active: !1
            },
            [i.ShopifyStore.IN]: {
                discountCode: "BFSM120",
                discount: 20,
                discountType: "percentage",
                active: !1
            },
            [i.ShopifyStore.EU]: {
                discountCode: "BFSM130",
                discount: 30,
                discountType: "percentage",
                active: !1
            }
        },
        l = {},
        u = {
            DE: {
                store: i.ShopifyStore.EU,
                discountCode: "VS1GZDNVFWZH",
                discount: 15,
                discountType: "percentage",
                active: !1
            }
        },
        p = {},
        f = {},
        h = ({
            store: e,
            country: t
        }) => {
            let r = t ? .toUpperCase(),
                i = r ? u[r] : void 0,
                n = i ? .store,
                a = n ? ? e ? ? void 0,
                o = a ? l[a] : void 0;
            if (!i) return o;
            if (!o && !n) {
                let {
                    store: e,
                    ...t
                } = i;
                return void 0 !== t.discount && void 0 !== t.discountCode && void 0 !== t.discountType && void 0 !== t.active ? t : void 0
            }
            let {
                store: s,
                ...c
            } = { ...o,
                ...i
            };
            return void 0 === c.discount || void 0 === c.discountCode || void 0 === c.discountType || void 0 === c.active ? o : c
        },
        m = ({
            store: e,
            country: t
        }) => {
            let r = t ? .toUpperCase(),
                i = r ? p[r] : void 0,
                n = i ? .store,
                a = n ? ? e ? ? void 0,
                o = a ? c[a] : void 0;
            if (!i) return o;
            if (!o && !n) {
                let {
                    store: e,
                    ...t
                } = i;
                return void 0 !== t.discount && void 0 !== t.discountCode && void 0 !== t.discountType && void 0 !== t.active ? t : void 0
            }
            let {
                store: s,
                ...d
            } = { ...o,
                ...i
            };
            return void 0 === d.discount || void 0 === d.discountCode || void 0 === d.discountType || void 0 === d.active ? o : d
        };
    e.s(["getCampaignPromoDiscountConfig", 0, ({
        store: e,
        country: t,
        product: r,
        campaignConfig: i
    }) => i && i.active ? {
        discountCode: i.discountCode,
        discount: i.discount,
        discountType: i.discountType,
        active: !0
    } : "ring" === r ? m({
        store: e,
        country: t
    }) : "home" === r ? h({
        store: e,
        country: t
    }) : "m1" === r ? (({
        store: e,
        country: t
    }) => {
        let r = t ? .toUpperCase(),
            i = r ? f[r] : void 0,
            n = i ? .store,
            a = n ? ? e ? ? void 0,
            o = a ? d[a] : void 0;
        if (!i) return o;
        if (!o && !n) {
            let {
                store: e,
                ...t
            } = i;
            return void 0 !== t.discount && void 0 !== t.discountCode && void 0 !== t.discountType && void 0 !== t.active ? t : void 0
        }
        let {
            store: s,
            ...c
        } = { ...o,
            ...i
        };
        return void 0 === c.discount || void 0 === c.discountCode || void 0 === c.discountType || void 0 === c.active ? o : c
    })({
        store: e,
        country: t
    }) : void 0, "getHomePromoDiscountConfig", 0, h, "getRingPromoDiscountConfig", 0, m, "m1PromoDiscount", 0, d, "referralCodes", 0, o, "ringReferralCodes", 0, s], 20685)
}, 78490, e => {
    "use strict";
    var t = e.i(10116);
    async function r(e, i = !1) {
        try {
            let r = new AbortController,
                n = setTimeout(() => r.abort(), i ? 1e3 : 5e3),
                a = `${t.API_BASE_URL}/api/web_v1/product_campaigns?country=${e}`,
                o = await fetch(a, {
                    signal: r.signal
                });
            if (clearTimeout(n), "ROW" === e && !o.ok) return console.log("Returning from fetchCampaign | ROW locale"), {
                campaigns: []
            };
            if (!o.ok) return console.log(`Campaign fetch failed for country="${e}" (${o.status}): ${o.statusText}`), {
                campaigns: []
            };
            return await o.json()
        } catch (e) {
            return console.error("Error fetching campaigns:", e), {
                campaigns: []
            }
        }
    }

    function i(e) {
        let t = new Date;
        return e.filter(e => {
            if ("enabled" !== e.visibility_status) return !1;
            let r = new Date(e.start_time),
                i = new Date(e.end_time);
            return t >= r && t <= i
        }).sort((e, t) => e.priority - t.priority)
    }
    e.s(["fetchCampaigns", () => r, "getActiveCampaigns", () => i])
}, 29282, e => {
    "use strict";
    e.s(["getCampaignByProduct", () => o, "getCampaignConfig", () => s, "useCampaigns", () => a]);
    var t = e.i(3828),
        r = e.i(3115),
        i = e.i(91788),
        n = e.i(78490);

    function a(e) {
        let a, [o, s] = (0, i.useState)(e ? ? []),
            [c, d] = (0, i.useState)(!e),
            [l, u] = (0, i.useState)(null),
            p = (0, t.useRouter)(),
            f = (0, i.useContext)(r.RegionLocaleContext).region,
            h = function(e) {
                let t = e.split("?")[0].split("#")[0];
                if (![/^\/ring\/buy\/.+/, /^\/home\/buy\/.+/, /^\/pricing\/.+/, /^\/shop\/.+/].some(e => e.test(t))) return null;
                let r = t.split("/").filter(Boolean),
                    i = r[r.length - 1];
                return i ? .toLowerCase() === "global" ? null : i && /^[a-z]{2}$/i.test(i) ? i.toLowerCase() : null
            }(p.asPath);
        p.pathname, a = h ? ? p.query.locale ? ? p.query.country ? ? f, a ? .toLowerCase() === "pr" && (a = "us");
        let m = (0, i.useCallback)(async () => {
            try {
                d(!0), u(null);
                let e = await (0, n.fetchCampaigns)(a),
                    t = (0, n.getActiveCampaigns)(e.campaigns);
                s(t)
            } catch (e) {
                u(e instanceof Error ? e : Error("Failed to fetch campaigns")), s([])
            } finally {
                d(!1)
            }
        }, [a]);
        return (0, i.useEffect)(() => {
            let t = a ? .toUpperCase(),
                r = f ? .toUpperCase();
            if (e && e.length > 0 && t && t === r) {
                s(e), d(!1);
                return
            }
            m()
        }, [m, e, f, p.query.locale, a]), {
            campaigns: o,
            loading: c,
            error: l,
            refetch: m
        }
    }

    function o(e, t) {
        return e.find(e => e.product === t)
    }

    function s(e) {
        if (e) return {
            discountCode: e.discount_code,
            discount: e.discount_value,
            discountType: e.discount_type,
            active: !0,
            product: e.product
        }
    }
}, 47717, 19152, 9540, e => {
    "use strict";
    e.s(["useDiscountManager", () => p], 47717);
    var t = e.i(91788),
        r = e.i(3828),
        i = e.i(57263),
        n = e.i(20685),
        a = e.i(29282),
        o = e.i(40647),
        s = e.i(25635),
        c = e.i(48335),
        d = e.i(74508),
        l = e.i(59207),
        u = e.i(3115);
    let p = (e, p, f, h, m, g = []) => {
        let y = (0, r.useRouter)(),
            {
                affiliateCode: b
            } = y.query,
            {
                region: S
            } = (0, t.useContext)(u.RegionLocaleContext),
            x = b && !("birthday" === b && !y.query.discount),
            {
                affiliateDetails: v
            } = (0, i.useAffiliateMetadata)(x ? b : ""),
            _ = (0, t.useCallback)((t, r = {}) => {
                if (!e) return m.current = [], m.current;
                let {
                    isM1ProductTypePresent: i,
                    isRingProductTypePresent: u,
                    isUhxProductTypePresent: h,
                    removingUhx: b = !1
                } = r, x = [...t];
                if (y.query.discount && x.push(y.query.discount), y.query.referral) {
                    if (p === d.ProductType.RING || u) {
                        let t = n.ringReferralCodes[e].discountCode;
                        (x = x.filter(t => t !== n.referralCodes[e] ? .discountCode)).push(t)
                    } else if (p === d.ProductType.M1 || i) {
                        let t = n.referralCodes[e] ? .discountCode ? ? "";
                        (x = x.filter(t => t !== n.ringReferralCodes[e].discountCode)).push(t)
                    }
                } else if (v) {
                    let t = (0, l.getEffectiveStoreForDiscount)(e),
                        r = v.discount_configs[t] ? ? {},
                        i = Object.keys(r);
                    r && i && (x = [...x, ...i.map(e => r[e] ? .code ? ? "")])
                }
                let _ = y.query.heroCategory ? ? "";
                if (_) {
                    let t = (0, c.getHeroDiscountCode)(_, e);
                    t && x.push(t)
                }
                let w = y.query.discount ? ? "";
                w && x.push(w), "clue" === y.query.flow && e && o.ClueShopifyMap[e] ? .Year1 ? .discountCode && x.push(o.ClueShopifyMap[e].Year1.discountCode), "respiratory" === y.query.flow && e && s.RespiratoryShopifyMap[e] ? .Year1 ? .discountCode && x.push(s.RespiratoryShopifyMap[e].Year1.discountCode);
                let E = y.query.locale ? ? S,
                    I = (0, n.getRingPromoDiscountConfig)({
                        store: e,
                        country: E
                    });
                e && (p === d.ProductType.RING || u) && I ? .active && I ? .discountCode;
                let C = (0, n.getHomePromoDiscountConfig)({
                    store: e,
                    country: y.query.country
                });
                y.pathname.startsWith("/home") && C ? .active && C.discountCode;
                let A = (0, a.getCampaignByProduct)(g, "ring");
                if (A && (p === d.ProductType.RING || u)) {
                    let e = A.discount_code;
                    e && !x.includes(e) && x.push(e)
                }
                let k = (0, a.getCampaignByProduct)(g, "home");
                if (k && y.pathname.startsWith("/home")) {
                    let e = k.discount_code;
                    e && !x.includes(e) && x.push(e)
                }
                let R = (0, a.getCampaignByProduct)(g, "cgm");
                if (R && (p === d.ProductType.M1 || i) && (f || h) && !b) {
                    let e = R.discount_code;
                    e && !x.includes(e) && x.push(e)
                }
                return m.current = [...new Set(x.filter(e => e))], m.current
            }, [y.query, y.pathname, e, p, h, f, v, !1, S, g]),
            w = (0, t.useMemo)(() => h ? .discountCodes ? .filter(e => e.applicable) ? .map(e => e.code) ? ? [], [h ? .discountCodes]);
        return {
            discountCodes: m.current,
            setDiscountCodes: _,
            applicableDiscountCoupons: w
        }
    };
    e.s(["useCartOperations", () => C], 9540);
    var f = e.i(41315),
        h = e.i(82702),
        m = e.i(56560);
    let g = {
        [l.ShopifyStore.IN]: {
            discountCode: "89VAMJ30K27J",
            discount: .15,
            price: "₹199",
            yearlyPrice: 2388
        },
        [l.ShopifyStore.AE]: {
            discountCode: "WV74KZDYH7J0",
            discount: .12,
            price: "AED 9",
            yearlyPrice: 108
        },
        [l.ShopifyStore.ROW]: {
            discountCode: "WV74KZDYH7J0",
            discount: .12,
            price: "USD 2.5",
            yearlyPrice: 30
        },
        [l.ShopifyStore.US]: {
            discountCode: "WV74KZDYH7J0",
            discount: .12,
            price: "USD 2.5",
            yearlyPrice: 30
        },
        [l.ShopifyStore.GB]: {
            discountCode: "AJ2381CKFR88",
            discount: .15,
            price: "GBP 2",
            yearlyPrice: 24
        },
        [l.ShopifyStore.EU]: {
            discountCode: "AJ2381CKFR88",
            discount: .15,
            price: "EUR 2.5",
            yearlyPrice: 30
        },
        [l.ShopifyStore.AU]: {
            discountCode: "AJ2381CKFR88",
            discount: .15,
            price: "AUD 2.5",
            yearlyPrice: 30
        },
        [l.ShopifyStore.SA]: {
            discountCode: "AJ2381CKFR88",
            discount: .15,
            price: "AUD 2.5",
            yearlyPrice: 30
        },
        [l.ShopifyStore.MX]: {
            discountCode: "AJ2381CKFR88",
            discount: .15,
            price: "AUD 2.5",
            yearlyPrice: 30
        },
        [l.ShopifyStore.CA]: {
            discountCode: "WV74KZDYH7J0",
            discount: .12,
            price: "CAD 2.5",
            yearlyPrice: 30
        },
        [l.ShopifyStore.ZA]: {
            discountCode: "WV74KZDYH7J0",
            discount: .12,
            price: "CAD 2.5",
            yearlyPrice: 30
        }
    };
    var y = e.i(91398),
        b = e.i(60814),
        S = e.i(33535);
    let x = (0, t.createContext)({
            showToast: () => {},
            hideToast: () => {},
            clearAllToasts: () => {}
        }),
        v = ({
            toast: e,
            index: t,
            total: r,
            onClose: i
        }) => (0, y.jsx)(E, {
            type: e.type,
            index: t,
            total: r,
            className: "toast-item",
            children: (0, y.jsxs)("div", {
                className: "toast-content",
                children: [(0, y.jsx)("div", {
                    className: "toast-message",
                    children: e.message
                }), (0, y.jsx)("button", {
                    className: "toast-close",
                    onClick: i,
                    "aria-label": "Close notification",
                    children: (0, y.jsx)(S.CrossDark, {
                        fill: "#ffffff"
                    })
                })]
            })
        }),
        _ = b.keyframes `
  from {
    transform: translateX(100%) translateY(0) scale(1);
    opacity: 0;
  }
  to {
    transform: translateX(0) translateY(0) scale(1);
    opacity: 1;
  }
`,
        w = b.default.div.withConfig({
            displayName: "Toast__ToastContainer",
            componentId: "sc-3a0ae53d-0"
        })
    `
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 1100;
  display: flex;
  flex-direction: column-reverse;
  // pointer-events: none;

  &:hover {
    .toast-item:last-child {
      transform: translateX(0) translateY(0) scale(1);
      opacity: 1;
      margin-bottom: 12px;
    }

    .toast-item:not(:first-child) {
      transform: translateX(0) translateY(0) scale(1) !important;
      opacity: 1 !important;
      margin-bottom: 12px !important;
    }
  }

  @media (max-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
    bottom: 24px;
    left: 24px;
    right: 24px;
    align-items: center;
  }
`, E = b.default.div.withConfig({
        displayName: "Toast__StyledToast",
        componentId: "sc-3a0ae53d-1"
    })
    `
  pointer-events: auto;
  background: rgba(20, 20, 23, 0.7);
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  border-left: 4px solid
    ${({type:e})=>{switch(e){case"error":default:return"#ff4757";case"success":return"#2ed573";case"info":return"#5352ed"}}};
  color: #e4e4e7;
  padding: 14px 16px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15),
    0 0 0 1px rgba(255, 255, 255, 0.05);
  min-width: 280px;
  max-width: 360px;
  position: relative;
  overflow: hidden;
  transform-origin: center bottom;
  margin-bottom: ${({index:e,total:t})=>1===t||0===e?"0":` - $ {
        Math.min(6 * e, 18)
    }
    px `};
  transform: ${({index:e,total:t})=>{if(1===t||0===e)return"translateX(0) translateY(0) scale(1)";let r=Math.min(8*e,24),i=Math.max(.85,1-.05*e);return`
    translateX(0) translateY($ {
            r
        }
        px) scale($ {
        i
    })
    `}};
  opacity: ${({index:e,total:t})=>1===t||0===e?"1":Math.max(.6,1-.15*e)};
  z-index: ${({index:e})=>1e3-e};
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);

  animation: ${_} 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  animation-fill-mode: none;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      ${({type:e})=>{switch(e){case"error":default:return"#ff4757";case"success":return"#2ed573";case"info":return"#5352ed"}}},
      transparent
    );
    opacity: 0.6;
  }

  @media (max-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
    min-width: unset;
    width: 100%;
    max-width: 100%;
    margin: 0 8px;
  }

  .toast-content {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .toast-message {
    flex: 1;
    font-size: 13px;
    line-height: 1.5;
    font-weight: 400;
    letter-spacing: -0.01em;
  }

  .toast-close {
    background: none;
    border: none;
    color: #a1a1aa;
    cursor: pointer;
    padding: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    opacity: 0.6;
    transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
    flex-shrink: 0;
    margin-left: 8px;

    &:hover {
      opacity: 1;
      background: rgba(255, 255, 255, 0.08);
      color: #e4e4e7;
      transform: scale(1.05);
    }

    svg {
      width: 12px;
      height: 12px;
    }
  }
`;
    e.s(["ToastContext", 0, x, "ToastProvider", 0, ({
        children: e
    }) => {
        let [r, i] = (0, t.useState)([]), n = (0, t.useCallback)((e, t = "error", r = 5e3) => {
            let n = `toast-${Date.now()}-${Math.random().toString(36).substr(2,9)}`,
                o = {
                    id: n,
                    message: e,
                    type: t,
                    duration: r
                };
            i(e => [...e, o]), r > 0 && setTimeout(() => {
                a(n)
            }, r)
        }, []), a = (0, t.useCallback)(e => {
            i(t => t.filter(t => t.id !== e))
        }, []), o = (0, t.useCallback)(() => {
            i([])
        }, []);
        return (0, y.jsxs)(x.Provider, {
            value: {
                showToast: n,
                hideToast: a,
                clearAllToasts: o
            },
            children: [e, (0, y.jsx)(w, {
                children: r.map((e, t) => (0, y.jsx)(v, {
                    toast: e,
                    index: t,
                    total: r.length,
                    onClose: () => a(e.id)
                }, e.id))
            })]
        })
    }], 19152);
    class I {
        store;
        BASE_URL_CART;
        constructor(e) {
            this.store = e, this.BASE_URL_CART = "/api/vendor/shopify/cart/"
        }
        async createCart(e) {
            return console.log({
                cartAttributes: e
            }), (0, c.makeStoreApiRequest)(this.store, this.BASE_URL_CART + "create/", e)
        }
        async getCart(e) {
            if (!e) throw Error("Cart ID is required");
            let t = encodeURIComponent(e);
            return await (0, c.makeStoreApiRequest)(this.store, this.BASE_URL_CART + `?id=${t}`)
        }
        async addToCart(e, t, r) {
            return await (0, c.makeStoreApiRequest)(this.store, this.BASE_URL_CART + "add/", {
                cartId: e,
                lines: t,
                discountCodes: r
            })
        }
        async updateCartQuantity(e, t) {
            return await (0, c.makeStoreApiRequest)(this.store, this.BASE_URL_CART + "update/", {
                cartId: e,
                lines: t
            })
        }
        async updateCartAttributes(e, t) {
            return await (0, c.makeStoreApiRequest)(this.store, this.BASE_URL_CART + "updateAttributes/", {
                cartId: e,
                attributes: t
            })
        }
        async removeFromCart(e, t, r) {
            return await (0, c.makeStoreApiRequest)(this.store, this.BASE_URL_CART + "remove/", {
                cartId: e,
                lineId: t,
                discountCodes: r
            })
        }
    }
    let C = (e, r, i, n, o, s, l, u, p, y, b, S, v, _, w) => {
        let {
            cart: E,
            store: C,
            setCart: A,
            deleteCartFromLocalStorage: k,
            urlParams: R
        } = e, {
            showToast: P
        } = (0, t.useContext)(x), T = C ? new I(C) : null, V = (0, t.useCallback)(async (e, t = !0, i) => {
            if (!C || !T) return !1;
            try {
                let a = await T.createCart({
                    lines: e,
                    attributes: R || [],
                    discountCodes: i || r,
                    countryCode: w && "ROW" !== w ? w : void 0
                });
                if (!(0, c.isCartApiSuccess)(a)) return P("Failed to add item to cart. Please try again."), !1;
                if (a.cart) return A(a.cart), b(a.cart), S(), t && n(), !0;
                return P("Failed to add item to cart. Please try again."), !1
            } catch (e) {
                return console.error("Cart creation error:", e), P("Unable to add item to cart. Please check your connection and try again."), !1
            }
        }, [C, T, r, w, A, b, S, n, P, R]), j = (0, t.useCallback)((e, t) => {
            if (!E) return null;
            let r = E.lines.edges,
                i = null;
            return r.forEach(r => {
                r.node.merchandise.id === e && (i = {
                    merchandiseId: r.node.merchandise.id,
                    attributes: r.node.attributes
                });
                let n = t.productType === d.ProductType.RING,
                    a = ["engraving"];
                !i && n && r.node.merchandise.id === t.shopifyVariantId && t ? .params ? .noteAttributes ? .filter(e => a.includes(e.key)) ? .every(e => r.node.attributes.some(t => t.key === e.key && t.value === e.value)) && (i = {
                    merchandiseId: r.node.merchandise.id,
                    attributes: r.node.attributes
                }), !i && C && t.shopifyVariantId === r.node.merchandise.id && (r.node.merchandise.id === h.SizingKitShopifyMap[C].shopifyVariantId || r.node.merchandise.id === h.RingProSizingKitShopifyMap[C].shopifyVariantId || r.node.merchandise.id === m.UhxShopifyMap[C].Year1.variantId || r.node.merchandise.id === m.UhxShopifyMap[C].Year2.variantId) && (i = {
                    merchandiseId: r.node.merchandise.id,
                    attributes: r.node.attributes
                })
            }), i
        }, [E, C]), N = (0, t.useCallback)(e => {
            let t = !1,
                r = !1,
                i = !1,
                n = !1,
                a = !1;
            for (let o = 0; o < e.length; o++) e[o].productType === d.ProductType.M1 ? t = !0 : e[o].productType === d.ProductType.RING ? r = !0 : e[o].productType === d.ProductType.MERCH ? i = !0 : e[o].productType === d.ProductType.GENERIC ? n = !0 : e[o].productType === d.ProductType.UHX && (a = !0);
            return {
                isM1ProductTypePresent: t,
                isRingProductTypePresent: r,
                isMerchProductTypePresent: i,
                isGenericProductTypePresent: n,
                isUhxProductTypePresent: a
            }
        }, []), O = (0, t.useCallback)(async (e, t = !1, s = !0) => {
            if (!C || !T) return !1;
            let l = [],
                u = [...r];
            e.forEach(e => {
                e.discountCode && u.push(e.discountCode);
                let t = j(f.productShopifyIdMap[e.pid] ? .shopifyVariantId, e),
                    r = Array.isArray(e.params ? .noteAttributes) ? (e.params ? .noteAttributes).map(e => ({
                        key: e.key ? ? e.key,
                        value: e.value ? ? e.value
                    })).filter(e => "string" == typeof e.key && e.key.trim().length > 0 && "string" == typeof e.value && e.value.trim().length > 0) : [];
                if (t) {
                    let {
                        merchandiseId: e,
                        attributes: i
                    } = t, n = r.length ? [...i.filter(e => !r.some(t => t.key === e.key)), ...r] : i;
                    l.push({
                        merchandiseId: e,
                        quantity: 1,
                        attributes: n
                    })
                } else if (void 0 !== e.pid) {
                    if (!f.productShopifyIdMap[e.pid]) return !1;
                    l.push({
                        merchandiseId: f.productShopifyIdMap[e.pid] ? .shopifyVariantId,
                        quantity: 1,
                        attributes: [{
                            key: "_product_type",
                            value: f.productShopifyIdMap[e.pid] ? .productType
                        }, ...r]
                    })
                } else void 0 !== e.shopifyVariantId && l.push({
                    merchandiseId: e.shopifyVariantId,
                    quantity: 1,
                    attributes: [...e.params ? .productType ? [{
                        key: "_product_type",
                        value: e.params ? .productType
                    }] : e.productType ? [{
                        key: "_product_type",
                        value: e.productType
                    }] : [], ...r]
                })
            });
            let p = e.some(e => {
                    let t = e.params ? .noteAttributes;
                    if (!t) return !1;
                    let r = t.some(e => "trade_in_device" === e.key && e.value ? .trim()),
                        i = t.some(e => "trade_in_serial_number" === e.key && e.value ? .trim());
                    return r && i
                }),
                h = N(e),
                g = !1;
            if (h.isM1ProductTypePresent && !o && C) {
                let e = _("cgm"),
                    t = (0, a.getCampaignConfig)(e);
                t ? .active && (g = !0)
            }
            let y = i(u, { ...h,
                isUhxProductTypePresent: h.isUhxProductTypePresent || g,
                hasTradeIn: p
            });
            if (g && C) {
                let e = m.UhxShopifyMap[C] ? .Year1 ? .variantId;
                e && l.push({
                    merchandiseId: e,
                    quantity: 1,
                    attributes: [{
                        key: "_product_type",
                        value: d.ProductType.UHX
                    }]
                })
            }
            if (!l.length) return !1;
            try {
                if (t || !E || !E.id) return await V(l, s, y); {
                    let e = await T.addToCart(E.id, l, y);
                    if (!(0, c.isCartApiSuccess)(e)) return k(), P("Failed to add item to cart. Please try again."), !1;
                    if (e.cart) return A(e.cart), b(e.cart), v(0), s && n(), S(), !0;
                    return k(), P("Failed to add item to cart. Please try again."), !1
                }
            } catch (e) {
                return console.error("Add to cart error:", e), k(), P("Unable to add item to cart. Please check your connection and try again."), !1
            }
        }, [C, T, E, r, i, N, j, A, b, v, n, S, V, P, k, o, _]), U = (0, t.useCallback)(async e => {
            if (!C || !e || !T || !E) return;
            let t = E.lines ? .edges ? ? [],
                n = [e],
                d = (e, t) => e ? .find(e => e.key === t) ? .value,
                h = t.find(t => t.node.id === e),
                m = h ? .node ? .attributes,
                b = d(m, "_bundle_id");
            "1" === d(m, "_is_bundle_parent") && b && (n = t.filter(e => d(e.node.attributes, "_bundle_id") === b).map(e => e.node.id));
            let S = [...r],
                x = g[C] ? .discountCode;
            if (e === o ? .id && x && S.includes(x)) {
                let e = [...S];
                e.splice(e.indexOf(x), 1), S = i(e, {
                    removingUhx: !0
                })
            }
            if (e === o ? .id) {
                let e = _("cgm"),
                    t = (0, a.getCampaignConfig)(e),
                    r = t ? .discountCode;
                if (r && S.includes(r)) {
                    let e = [...S];
                    e.splice(e.indexOf(r), 1), S = i(e, {
                        removingUhx: !0
                    })
                }
            }
            if (2 === t.length && o && e !== o.id && (n = [...n, o.id]), e === o ? .id)
                for (let {
                        node: r
                    } of t) r.id !== e && Object.values(f.productShopifyIdMap).some(e => e.shopifyVariantId === r.merchandise.id && e.type === f.ProductPurchaseOption.x) && !n.includes(r.id) && n.push(r.id);
            try {
                let t = await T.removeFromCart(E.id, n, S);
                if (!(0, c.isCartApiSuccess)(t) || !t.cart) return k(), P("Unable to remove item. Please try again."), !1;
                A(t.cart), e === o ? .id && s(null), e === l ? .id && u(null), e === p ? .id && y(null);
                try {
                    t.cart.lines ? .edges ? .length === 0 && (s(null), u(null), y(null))
                } catch (e) {
                    console.log(e)
                }
                return !0
            } catch (e) {
                return console.error("Delete from cart error:", e), k(), P("Unable to remove item. Please try again."), !1
            }
        }, [C, T, E, o, l, p, r, i, A, s, u, y, P, k]), M = (0, t.useCallback)(async (e, t, r) => {
            if (C && e && T && E ? .id) {
                if (0 === t) return await U(e);
                try {
                    let i = await T.updateCartQuantity(E.id, {
                        id: e,
                        quantity: t,
                        attributes: r
                    });
                    if (!(0, c.isCartApiSuccess)(i)) return k(), P("Unable to update quantity. Please try again."), !1;
                    if (i.cart) return A(i.cart), n(), !0;
                    return k(), P("Unable to update quantity. Please try again."), !1
                } catch (e) {
                    return console.error("Update cart quantity error:", e), k(), P("Unable to update quantity. Please try again."), !1
                }
            }
        }, [C, T, E, A, n, P, k, U]), L = (0, t.useCallback)(async e => {
            if (!C || !e || !T) return;
            let t = e.node.attributes.findIndex(e => "sibling_id" === e.key);
            if (-1 === t) await M(e.node.id, e.node.quantity + 1);
            else if (E ? .id) try {
                let i = await T.addToCart(E.id, {
                    merchandiseId: e.node.merchandise.id,
                    quantity: 1,
                    attributes: e.node.attributes.splice(t, 1)
                }, r);
                if (!(0, c.isCartApiSuccess)(i)) return k(), P("Unable to update quantity. Please try again."), !1;
                return i.cart && (A(i.cart), b(i.cart)), v(0), n(), S(), !!i.cart
            } catch (e) {
                console.error("Increment cart quantity error:", e), k(), P("Unable to update quantity. Please try again.")
            }
        }, [C, T, E, r, M, A, b, v, n, S, P, k]);
        return {
            addToCartInternal: O,
            removeFromCart: (0, t.useCallback)(async (e, t, a, o) => {
                if (!C || !e || !t || !T) return;
                let s = [...r];
                if (o && s.splice(s.indexOf(o), 1), i(s, {}), 1 === t) return await U(e);
                if (E ? .id) try {
                    let r = await T.updateCartQuantity(E.id, {
                        id: e,
                        quantity: t - 1,
                        attributes: a
                    });
                    if (!(0, c.isCartApiSuccess)(r)) return k(), P("Unable to remove item. Please try again."), !1;
                    if (r.cart) return A(r.cart), n(), !0;
                    return k(), P("Unable to remove item. Please try again."), !1
                } catch (e) {
                    return console.error("Remove from cart error:", e), k(), P("Unable to remove item. Please try again."), !1
                }
            }, [C, T, E, r, i, A, n, P, U, k]),
            deleteFromCart: U,
            updateCartQuantity: M,
            incrementCartQuantity: L,
            createCartWithItem: V
        }
    }
}, 71914, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "useIntersection", {
        enumerable: !0,
        get: function() {
            return c
        }
    });
    let i = e.r(91788),
        n = e.r(99604),
        a = "function" == typeof IntersectionObserver,
        o = new Map,
        s = [];

    function c({
        rootRef: e,
        rootMargin: t,
        disabled: r
    }) {
        let c = r || !a,
            [d, l] = (0, i.useState)(!1),
            u = (0, i.useRef)(null),
            p = (0, i.useCallback)(e => {
                u.current = e
            }, []);
        return (0, i.useEffect)(() => {
            if (a) {
                if (c || d) return;
                let r = u.current;
                if (r && r.tagName) return function(e, t, r) {
                    let {
                        id: i,
                        observer: n,
                        elements: a
                    } = function(e) {
                        let t, r = {
                                root: e.root || null,
                                margin: e.rootMargin || ""
                            },
                            i = s.find(e => e.root === r.root && e.margin === r.margin);
                        if (i && (t = o.get(i))) return t;
                        let n = new Map;
                        return t = {
                            id: r,
                            observer: new IntersectionObserver(e => {
                                e.forEach(e => {
                                    let t = n.get(e.target),
                                        r = e.isIntersecting || e.intersectionRatio > 0;
                                    t && r && t(r)
                                })
                            }, e),
                            elements: n
                        }, s.push(r), o.set(r, t), t
                    }(r);
                    return a.set(e, t), n.observe(e),
                        function() {
                            if (a.delete(e), n.unobserve(e), 0 === a.size) {
                                n.disconnect(), o.delete(i);
                                let e = s.findIndex(e => e.root === i.root && e.margin === i.margin);
                                e > -1 && s.splice(e, 1)
                            }
                        }
                }(r, e => e && l(e), {
                    root: e ? .current,
                    rootMargin: t
                })
            } else if (!d) {
                let e = (0, n.requestIdleCallback)(() => l(!0));
                return () => (0, n.cancelIdleCallback)(e)
            }
        }, [c, t, e, d, u.current]), [p, d, (0, i.useCallback)(() => {
            l(!1)
        }, [])]
    }("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 54471, (e, t, r) => {
    "use strict";

    function i(e, t, r, i) {
        return !1
    }
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "getDomainLocale", {
        enumerable: !0,
        get: function() {
            return i
        }
    }), e.r(70090), ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 48735, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "errorOnce", {
        enumerable: !0,
        get: function() {
            return i
        }
    });
    let i = e => {}
}, 39149, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var i = {
        default: function() {
            return E
        },
        useLinkStatus: function() {
            return w
        }
    };
    for (var n in i) Object.defineProperty(r, n, {
        enumerable: !0,
        get: i[n]
    });
    let a = e.r(52456),
        o = e.r(91398),
        s = a._(e.r(91788)),
        c = e.r(60472),
        d = e.r(71112),
        l = e.r(28169),
        u = e.r(89129),
        p = e.r(14862),
        f = e.r(25479),
        h = e.r(71914),
        m = e.r(54471),
        g = e.r(44113),
        y = e.r(63230);
    e.r(48735);
    let b = new Set;

    function S(e, t, r, i) {
        if (!("u" < typeof window) && (0, d.isLocalURL)(t)) {
            if (!i.bypassPrefetchedCheck) {
                let n = t + "%" + r + "%" + (void 0 !== i.locale ? i.locale : "locale" in e ? e.locale : void 0);
                if (b.has(n)) return;
                b.add(n)
            }
            e.prefetch(t, r, i).catch(e => {})
        }
    }

    function x(e) {
        return "string" == typeof e ? e : (0, l.formatUrl)(e)
    }
    let v = s.default.forwardRef(function(e, t) {
            let r, i, {
                href: n,
                as: a,
                children: l,
                prefetch: b = null,
                passHref: v,
                replace: _,
                shallow: w,
                scroll: E,
                locale: I,
                onClick: C,
                onNavigate: A,
                onMouseEnter: k,
                onTouchStart: R,
                legacyBehavior: P = !1,
                ...T
            } = e;
            r = l, P && ("string" == typeof r || "number" == typeof r) && (r = (0, o.jsx)("a", {
                children: r
            }));
            let V = s.default.useContext(f.RouterContext),
                j = !1 !== b,
                {
                    href: N,
                    as: O
                } = s.default.useMemo(() => {
                    if (!V) {
                        let e = x(n);
                        return {
                            href: e,
                            as: a ? x(a) : e
                        }
                    }
                    let [e, t] = (0, c.resolveHref)(V, n, !0);
                    return {
                        href: e,
                        as: a ? (0, c.resolveHref)(V, a) : t || e
                    }
                }, [V, n, a]),
                U = s.default.useRef(N),
                M = s.default.useRef(O);
            P && (i = s.default.Children.only(r));
            let L = P ? i && "object" == typeof i && i.ref : t,
                [D, B, $] = (0, h.useIntersection)({
                    rootMargin: "200px"
                }),
                G = s.default.useCallback(e => {
                    (M.current !== O || U.current !== N) && ($(), M.current = O, U.current = N), D(e)
                }, [O, N, $, D]),
                F = (0, y.useMergedRef)(G, L);
            s.default.useEffect(() => {
                !V || B && j && S(V, N, O, {
                    locale: I
                })
            }, [O, N, B, I, j, V ? .locale, V]);
            let W = {
                ref: F,
                onClick(e) {
                    P || "function" != typeof C || C(e), P && i.props && "function" == typeof i.props.onClick && i.props.onClick(e), !V || e.defaultPrevented || function(e, t, r, i, n, a, o, s, c) {
                        let l, {
                            nodeName: u
                        } = e.currentTarget;
                        if (!("A" === u.toUpperCase() && ((l = e.currentTarget.getAttribute("target")) && "_self" !== l || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which) || e.currentTarget.hasAttribute("download"))) {
                            if (!(0, d.isLocalURL)(r)) {
                                n && (e.preventDefault(), location.replace(r));
                                return
                            }
                            e.preventDefault(), (() => {
                                if (c) {
                                    let e = !1;
                                    if (c({
                                            preventDefault: () => {
                                                e = !0
                                            }
                                        }), e) return
                                }
                                let e = o ? ? !0;
                                "beforePopState" in t ? t[n ? "replace" : "push"](r, i, {
                                    shallow: a,
                                    locale: s,
                                    scroll: e
                                }) : t[n ? "replace" : "push"](i || r, {
                                    scroll: e
                                })
                            })()
                        }
                    }(e, V, N, O, _, w, E, I, A)
                },
                onMouseEnter(e) {
                    P || "function" != typeof k || k(e), P && i.props && "function" == typeof i.props.onMouseEnter && i.props.onMouseEnter(e), V && S(V, N, O, {
                        locale: I,
                        priority: !0,
                        bypassPrefetchedCheck: !0
                    })
                },
                onTouchStart: function(e) {
                    P || "function" != typeof R || R(e), P && i.props && "function" == typeof i.props.onTouchStart && i.props.onTouchStart(e), V && S(V, N, O, {
                        locale: I,
                        priority: !0,
                        bypassPrefetchedCheck: !0
                    })
                }
            };
            if ((0, u.isAbsoluteUrl)(O)) W.href = O;
            else if (!P || v || "a" === i.type && !("href" in i.props)) {
                let e = void 0 !== I ? I : V ? .locale;
                W.href = V ? .isLocaleDomain && (0, m.getDomainLocale)(O, e, V ? .locales, V ? .domainLocales) || (0, g.addBasePath)((0, p.addLocale)(O, e, V ? .defaultLocale))
            }
            return P ? s.default.cloneElement(i, W) : (0, o.jsx)("a", { ...T,
                ...W,
                children: r
            })
        }),
        _ = (0, s.createContext)({
            pending: !1
        }),
        w = () => (0, s.useContext)(_),
        E = v;
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 41158, (e, t, r) => {
    t.exports = e.r(39149)
}, 71225, e => {
    "use strict";
    var t = e.i(91898);
    let r = ["en", "ja", "de", "th", "fr"],
        i = new Set(["ring", "ring-pro", "home", "rare", "shop", "pricing", "diesel-ultrahuman-ring", "x", "blood-vision", "m1", "womens-health", "powerplugs", "hsa-fsa", "heroes", "environment", "partners", "retail", "one-tree-planted", "ultrahuman-x-clue", "ultrasignal", "print-sizing-kit", "for-work", "window-of-opportunity", "troubleshoot", "privacypolicy", "termsandcondition", "termsofsale"]),
        n = {
            JP: "ja",
            DE: "de",
            AT: "de",
            TH: "th",
            FR: "fr"
        },
        a = {
            en: "en-US",
            ja: "ja",
            de: "de",
            th: "th",
            fr: "fr"
        };

    function o(e) {
        return n[e.toUpperCase()] ? ? "en"
    }

    function s(e) {
        let t, i, n = e.toLowerCase();
        if ("global" === n) return {
            region: "GLOBAL",
            language: "en",
            locale: "en-US",
            slug: "global"
        };
        let s = n.split("-");
        s.length >= 2 && 2 === s[0].length ? (t = s[0], i = s[1]) : t = n;
        let d = t.toUpperCase(),
            l = i && r.includes(i) ? i : o(d),
            u = a[l.toLowerCase()] ? ? "en-US",
            p = c(d, l);
        return {
            region: d,
            language: l,
            locale: u,
            slug: p
        }
    }

    function c(e, r) {
        let i = e.toUpperCase();
        if (!(i in t.COUNTRY_STORE_CONFIG)) return "global";
        let n = o(i),
            a = r ? ? n;
        return a === n ? i.toLowerCase() : `${i.toLowerCase()}-${a.toLowerCase()}`
    }
    let d = new Map;

    function l(e) {
        let r = e.toUpperCase(),
            i = d.get(r);
        if (!i) {
            let e, n = (0, t.getStoreConfig)(r);
            i = {
                regionCode: r,
                defaultLanguage: o(r),
                supportedLanguages: "en" === (e = o(r.toUpperCase())) ? ["en"] : [e, "en"],
                shopifyStore: n.store,
                currency: n.currency,
                countryName: (0, t.getCountryName)(r),
                baseStore: n.baseStore ? ? null
            }, d.set(r, i)
        }
        return i
    }
    let u = (() => {
        let e = [];
        for (let r of Object.keys(t.COUNTRY_STORE_CONFIG)) {
            if ("ROW" === r) continue;
            let t = o(r);
            e.push(r.toLowerCase()), "en" !== t && e.push(`${r.toLowerCase()}-en`)
        }
        return e.push("global"), e
    })();

    function p() {
        return u
    }

    function f(e) {
        let t = e.toLowerCase();
        if ("global" === t) return !0;
        let i = t.split("-");
        return !!/^[a-z]{2}$/.test(i[0]) && (1 === i.length || 2 === i.length && r.includes(i[1]))
    }
    e.s(["REGION_PREFIXED_PATHS", 0, i, "buildRegionLocaleSlug", () => c, "getAllRegionSlugs", () => p, "getDefaultLanguageForRegion", () => o, "getRegionConfig", () => l, "isValidRegionSlug", () => f, "parseRegionLocale", () => s])
}, 53147, e => {
    "use strict";
    e.s(["FORWARDED_PARAM_KEYS", () => s, "addRegionPrefix", () => d, "default", () => f, "useFormatLink", () => p]);
    var t = e.i(91398),
        r = e.i(91788),
        i = e.i(41158),
        n = e.i(3828),
        a = e.i(71225),
        o = e.i(3115);
    let s = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "email", "affiliate", "affiliateCode", "referral", "discount", "sscid", "irclickid", "click_id", "flow"];

    function c(e) {
        return !(e.startsWith("#") || e.startsWith("/")) && (!!(e.startsWith("mailto:") || e.startsWith("tel:")) || /^(?:[a-z][a-z0-9+.-]*:)?\/\//i.test(e))
    }

    function d(e, t) {
        if (!e.startsWith("/")) return e;
        let r = e.split("/").filter(Boolean)[0];
        return !r || /^\w{2}(-\w{2,3})?$/.test(r) ? e : a.REGION_PREFIXED_PATHS.has(r.toLowerCase()) ? `/${t}${e}` : e
    }

    function l(e) {
        return e ? e.startsWith("#") ? e : `#${e}` : ""
    }

    function u(e, t) {
        let r = e.startsWith("//");
        try {
            if (r) {
                let r = new URL(`https:${e}`),
                    i = t ? .incomingQuery ? ? {};
                Object.entries(i).forEach(([e, t]) => {
                    r.searchParams.delete(e), Array.isArray(t) ? t.forEach(t => r.searchParams.append(e, t)) : r.searchParams.append(e, t)
                });
                let n = t ? .extraParams ? ? {};
                return Object.entries(n).forEach(([e, t]) => {
                    r.searchParams.has(e) || (Array.isArray(t) ? t.forEach(t => r.searchParams.append(e, t)) : r.searchParams.append(e, t))
                }), `//${r.host}${r.pathname}${r.search}${r.hash}`
            }
            let i = new URL(e),
                n = t ? .incomingQuery ? ? {};
            Object.entries(n).forEach(([e, t]) => {
                i.searchParams.delete(e), Array.isArray(t) ? t.forEach(t => i.searchParams.append(e, t)) : i.searchParams.append(e, t)
            });
            let a = t ? .extraParams ? ? {};
            Object.entries(a).forEach(([e, t]) => {
                i.searchParams.has(e) || (Array.isArray(t) ? t.forEach(t => i.searchParams.append(e, t)) : i.searchParams.append(e, t))
            });
            let o = i.toString();
            if (t ? .appendHash) return `${o}${l(t.appendHash)}`;
            return o
        } catch {
            return e
        }
    }

    function p(e) {
        let t = (0, n.useRouter)(),
            {
                regionSlug: i
            } = (0, r.useContext)(o.RegionLocaleContext);
        return (0, r.useCallback)((r, n) => (function(e, t = {}, r) {
            let i = r ? .discardParams ? ? [],
                n = r ? .appendToExternal ? ? !1,
                a = r ? .asObject ? ? !1,
                o = new Set(i.map(e => e.toLowerCase())),
                d = s.filter(e => !o.has(e.toLowerCase())),
                p = {};
            if (d.forEach(e => {
                    let r = t[e];
                    null != r && (p[e] = Array.isArray(r) ? r.map(e => String(e)) : String(r))
                }), "string" == typeof e) {
                if (c(e)) return e.startsWith("mailto:") || e.startsWith("tel:") || !n ? e : u(e, {
                    extraParams: p
                });
                if (!a) {
                    let t = new URLSearchParams;
                    return Object.entries(p).forEach(([e, r]) => {
                        Array.isArray(r) ? r.forEach(r => t.append(e, r)) : t.append(e, r)
                    }), `${e}${t.toString()?`?${t.toString()}`:""}`
                }
                return {
                    pathname: e,
                    query: p
                }
            }
            if ("string" == typeof e.pathname && c(e.pathname)) {
                if (e.pathname.startsWith("mailto:") || e.pathname.startsWith("tel:")) return a ? e : e.pathname;
                if (!n) {
                    if (a) return e;
                    let t = e.query ? ? {};
                    return u(e.pathname, {
                        incomingQuery: t,
                        appendHash: "string" == typeof e.hash ? e.hash : void 0
                    })
                }
                let t = e.query ? ? {};
                return u(e.pathname, {
                    incomingQuery: t,
                    extraParams: p,
                    appendHash: "string" == typeof e.hash ? e.hash : void 0
                })
            }
            let f = e.query ? ? {};
            if (!a) {
                let t = {},
                    r = (e, r) => {
                        if (Array.isArray(r)) {
                            Array.isArray(t[e]) || (t[e] = []);
                            let i = t[e];
                            r.forEach(e => {
                                i.includes(e) || i.push(e)
                            })
                        } else t[e] = r
                    };
                Object.entries(p).forEach(([e, t]) => r(e, t)), Object.entries(f).forEach(([e, t]) => r(e, t));
                let i = new URLSearchParams;
                Object.entries(t).forEach(([e, t]) => {
                    Array.isArray(t) ? t.forEach(t => i.append(e, t)) : i.append(e, t)
                });
                let n = "string" == typeof e.pathname ? e.pathname : "",
                    a = "string" == typeof e.hash ? l(e.hash) : "";
                return `${n}${i.toString()?`?${i.toString()}`:""}${a}`
            }
            return { ...e,
                query: { ...p,
                    ...f
                }
            }
        })("string" == typeof r ? d(r, i) : r.pathname && !c(r.pathname) ? { ...r,
            pathname: d(r.pathname, i)
        } : r, t.query, { ...e,
            ...n
        }), [t.query, i, e ? .discardParams, e ? .appendToExternal, e ? .asObject])
    }
    let f = r.default.forwardRef(function(e, n) {
        let {
            href: a,
            discardParams: o,
            appendToExternal: s = !1,
            ...c
        } = e, d = p(), l = (0, r.useMemo)(() => d(a, {
            discardParams: o,
            appendToExternal: s,
            asObject: !0
        }), [a, d, o, s]);
        return (0, t.jsx)(i.default, {
            ref: n,
            href: l,
            ...c
        })
    })
}, 6504, 62591, e => {
    "use strict";
    e.s(["CartProvider", () => _], 6504);
    var t = e.i(91398),
        r = e.i(91788),
        i = e.i(3828),
        n = e.i(68489),
        a = e.i(22644),
        o = e.i(26234),
        s = e.i(70753),
        c = e.i(47717),
        d = e.i(9540),
        l = e.i(79546),
        u = e.i(74508),
        p = e.i(53147),
        f = e.i(57263),
        h = e.i(82702),
        m = e.i(20685),
        g = e.i(48335),
        y = e.i(77180),
        b = e.i(3115);

    function S(e) {
        let t = {};
        return document.cookie.split(";").forEach(function(e) {
            let [r, i] = e.split("=");
            t[r.trim()] = i
        }), t[e]
    }
    e.s(["getCookie", () => S], 62591);
    var x = e.i(29282);
    let v = (0, n.default)(() => e.A(28152), {
            loadableGenerated: {
                modules: [40008]
            },
            ssr: !1
        }),
        _ = ({
            children: e,
            initialCampaigns: n
        }) => {
            let _ = (0, r.useRef)([]),
                w = (0, i.useRouter)(),
                E = (0, a.useCartState)(),
                {
                    cart: I,
                    store: C,
                    cartLoading: A,
                    setCartLoading: k,
                    error: R,
                    setError: P,
                    deleteCartFromLocalStorage: T,
                    updateCartAttributes: V
                } = E,
                {
                    store: j,
                    currency: N,
                    region: O
                } = (0, r.useContext)(b.RegionLocaleContext),
                [U, M] = (0, r.useState)(N || null);
            (0, r.useEffect)(() => {
                j && E.setStore(j), N && M(N)
            }, [j, N]);
            let {
                cartVisible: L,
                altContent: D,
                setAltContent: B,
                isUpsellVisible: $,
                primaryProductForUpsell: G,
                showCart: F,
                hideCart: W,
                showUpsellModal: H,
                hideUpsellModal: Y
            } = (0, o.useCartUI)(), {
                cartType: z,
                setCartType: q,
                ultrahumanXAdded: X,
                setUltrahumanXAdded: K,
                cardioAdaptibilityCart: Z,
                setCardioAdaptibilityCart: J,
                afibCart: Q,
                setAfibCart: ee,
                uhxVarianthId: et
            } = (0, s.useProductTracker)(I, C), {
                campaigns: er,
                loading: ei,
                error: en
            } = (0, x.useCampaigns)(n), {
                setDiscountCodes: ea,
                applicableDiscountCoupons: eo
            } = (0, c.useDiscountManager)(C, z, X, I, _, er), [es, ec] = (0, r.useState)(u.CartFlowScreens.ITEM_LIST), [ed, el] = (0, r.useState)(u.CartFlow.OG), [eu, ep] = (0, r.useState)(), {
                affiliateCode: ef
            } = w.query, eh = (0, p.useFormatLink)(), em = `cart_${C}`, eg = w.query.workAffiliate && w.query.discount;
            (0, r.useEffect)(() => {
                let e = async () => {
                    if (!eg) return;
                    let e = await (0, f.getWorkAffiliate)(w.query.affiliateCode, C);
                    ep({
                        affiliateCode: e.affiliate_code,
                        discount: e.discounts.ring_discount,
                        discountCode: e.discounts.ring_discount_code
                    })
                };
                eg && e()
            }, [eg, ef, C]);
            let ey = (0, r.useCallback)(e => {
                    if (e && C && Array.isArray(e.lines.edges) && e.lines.edges.length > 0) {
                        let t = !1;
                        for (let r = 0; r < e.lines.edges.length; r++) {
                            let i = e.lines.edges[r].node.merchandise.product.id;
                            if (h.RingAndRelatedProductsIdMap[C] ? .includes(i)) {
                                t = !0;
                                break
                            }
                        }
                        q(t ? u.ProductType.RING : u.ProductType.M1)
                    }
                }, [C, q]),
                eb = (0, r.useCallback)(() => {}, []),
                eS = (0, r.useCallback)(e => (0, x.getCampaignByProduct)(er, e), [er]),
                {
                    addToCartInternal: ex,
                    removeFromCart: ev,
                    deleteFromCart: e_,
                    updateCartQuantity: ew,
                    incrementCartQuantity: eE,
                    createCartWithItem: eI
                } = (0, d.useCartOperations)(E, _.current, ea, F, X, K, Q, ee, Z, J, ey, eb, ec, eS, O),
                eC = (0, r.useCallback)(async (e, t, r, i) => {
                    await ev(e, t, r, i)
                }, [ev]),
                eA = (0, r.useCallback)(async e => {
                    await e_(e)
                }, [e_]),
                ek = (0, r.useCallback)(async (e, t, r) => {
                    await ew(e, t, r)
                }, [ew]),
                eR = (0, r.useCallback)(async e => {
                    await eE(e)
                }, [eE]),
                eP = (0, r.useCallback)(async e => {
                    if (C && e && I ? .id) try {
                        let t = await (0, g.makeStoreApiRequest)(C, "/api/vendor/shopify/cart/add/", {
                            cartId: I.id,
                            lines: {
                                merchandiseId: e,
                                quantity: 1
                            },
                            discountCodes: _.current
                        });
                        if (t && "error" in t && t.error) return void console.error("[Cart] Add to cart failed:", t);
                        if (t && t.cart) E.setCart(t.cart), F();
                        else throw Error("Failed to add item to cart")
                    } catch (e) {
                        console.error("Add to cart by variant ID error:", e)
                    }
                }, [C, I, _, E, F]),
                eT = w.query.referral && C,
                eV = 0;
            eT && (eV = z === u.ProductType.M1 ? m.referralCodes[C] ? .discount ? ? 0 : m.ringReferralCodes[C].discount ? ? 0);
            let ej = (0, r.useCallback)(e => {
                    if (0 === e.length) return;
                    let t = e[e.length - 1];
                    if (t.shopifyVariantId) return t.shopifyVariantId
                }, []),
                eN = (0, r.useCallback)(async (e, t = !0) => {
                    await ex(e, !1, !t) && t && !$ && H(ej(e))
                }, [ex, $, ej, H]),
                eO = (0, r.useCallback)(async e => {
                    await ex(e, !1, !1)
                }, [ex]),
                eU = (0, r.useCallback)(async (e = []) => {
                    e.length > 0 ? await ex(e, !1, !0) : F(), Y()
                }, [ex, F, Y]),
                eM = (0, r.useCallback)(e => {
                    if (!I || !("attributes" in I)) return;
                    let t = I.attributes.filter(t => t.key === e)[0];
                    return t ? t.value : void 0
                }, [I]),
                eL = (0, r.useCallback)(e => {
                    let t;
                    if (I && "attributes" in I) {
                        for (let r = 0; r < I.attributes.length; r++)
                            if (I.attributes[r].key === e) {
                                t = r;
                                break
                            }
                        return t
                    }
                }, [I]),
                eD = (0, r.useCallback)(async e => {
                    I && I.id && (k(!0), e === u.CartFlow.OG ? V(I.id, [{
                        key: "gift_flow",
                        value: "false"
                    }, {
                        key: "giftee_email",
                        value: "null"
                    }, {
                        key: "gift_note",
                        value: "null"
                    }, {
                        key: "notify_giftee",
                        value: "false"
                    }]).then(e => {
                        if (e.cart && e.cart.id) {
                            el(u.CartFlow.OG);
                            let e = I.lines.edges.filter(e => e.node.merchandise.id === y.GiftWrappingProductShopifyMap[C].variantId);
                            Array.isArray(e) && e.length > 0 && e[0] && e[0].node.id && eA(e[0].node.id)
                        } else(0, g.deleteFromLocalStorage)(em)
                    }).finally(() => k(!1)) : e === u.CartFlow.GIFT && V(I.id, [{
                        key: "gift_flow",
                        value: "true"
                    }]).then(e => {
                        e.cart && e.cart.id ? (el(u.CartFlow.GIFT), eO([{
                            shopifyVariantId: y.GiftWrappingProductShopifyMap[C].variantId,
                            productType: u.ProductType.GENERIC
                        }])) : (0, g.deleteFromLocalStorage)(em)
                    }).finally(() => k(!1)))
                }, [I, C, V, eA, eO, k]);
            (0, r.useEffect)(() => {
                if (I && "id" in I && C) {
                    let e = eM("gift_flow"),
                        t = [];
                    if (I ? .discountCodes ? .forEach(e => {
                            t.push(e.code)
                        }), ea(t, {}), window.getdisco = {
                            discountCodes: I ? .discountCodes,
                            discountAllocations: I ? .discountAllocations
                        }, "true" === e) el(u.CartFlow.GIFT);
                    else if (el(u.CartFlow.OG), ec(u.CartFlowScreens.ITEM_LIST), I && I.lines && I.lines.edges) {
                        for (let e = 0; e < I.lines.edges.length; e++)
                            if (I.lines.edges[e].node.merchandise.id === y.GiftWrappingProductShopifyMap[C].variantId) {
                                eA(I.lines.edges[e].node.id);
                                break
                            }
                    }
                }
            }, [I, C, eM, ea, ec, eA]);
            let eB = ef && !("birthday" === ef && !w.query.discount),
                {
                    affiliateDetails: e$
                } = (0, f.useAffiliateMetadata)(eB ? ef : ""),
                eG = er.length > 0,
                eF = (0, r.useCallback)(async () => {
                    if (k(!0), !I || !C) return;
                    let e = new URL(I.checkoutUrl);
                    if (e$) {
                        let t = e$.code;
                        e.searchParams.append("affiliateCode", t), e.searchParams.append("affiliate", t)
                    }
                    let t = new URL(eh(e.toString(), {
                        appendToExternal: !0,
                        asObject: !1
                    }));
                    t.searchParams.set("product_type", "cyborg"), t.searchParams.set("store", C || "");
                    try {
                        let e = S("_uh_fbclid");
                        e && t.searchParams.set("fbclid", String(e));
                        let r = S("_fbp");
                        r && t.searchParams.set("_fbp", String(r));
                        let i = S("_fbc");
                        i && t.searchParams.set("_fbc", String(i))
                    } catch (e) {}
                    Array.from(t.searchParams.entries()).forEach(([e, r]) => {
                        "email" === e && t.searchParams.set("checkout[email]", r), t.searchParams.set(`attributes[${e}]`, r)
                    }), (0, g.deleteFromLocalStorage)(em), w.push(t.toString())
                }, [I, C, e$, eh, w, k]),
                eW = (0, r.useMemo)(() => ({
                    cart: I,
                    store: C,
                    currency: U,
                    setStore: E.setStore,
                    isCartVisible: L,
                    showCart: F,
                    hideCart: W,
                    isUpsellVisible: $,
                    showUpsellModal: H,
                    hideUpsellModal: Y,
                    proceedWithUpsell: eU,
                    addToCartSilently: eO,
                    createCartWithItem: eI,
                    addToCart: eN,
                    addToCartByShopifyVariantId: eP,
                    removeFromCart: eC,
                    deleteFromCart: eA,
                    checkout: eF,
                    updateCartAttributes: V,
                    updateCartQuantity: ek,
                    incrementCartQuantity: eR,
                    altContent: D,
                    setAltContent: B,
                    ultrahumanXAdded: X,
                    referralDiscount: eV,
                    uhxVarianthId: et,
                    cartFlow: ed,
                    setCartFlow: eD,
                    cartLoading: A,
                    activeFlowScreen: es,
                    setActiveFlowScreen: ec,
                    getCartAttributeValue: eM,
                    getCartAttributeIndex: eL,
                    deleteCartFromLocalStorage: T,
                    affiliateDetails: e$,
                    campaignActive: eG,
                    campaigns: er,
                    campaignsLoading: ei,
                    campaignsError: en,
                    getCampaignForProduct: eS,
                    error: R,
                    setError: P,
                    applicableDiscountCoupons: eo,
                    setCartType: q,
                    taxes: E.taxes,
                    duty: E.duty,
                    taxString: E.taxString,
                    cardioAdaptibilityCart: Z,
                    setCardioAdaptibilityCart: J,
                    afibCart: Q,
                    setAfibCart: ee,
                    cartType: z,
                    workAffiliateDiscount: eu
                }), [I, C, U, E, L, F, W, $, H, Y, eU, eO, eI, eN, eP, eC, eA, eF, V, ek, eR, D, B, X, eV, et, ed, eD, A, es, ec, eM, eL, T, e$, eG, er, ei, en, eS, R, P, eo, q, Z, J, Q, ee, z, eu]);
            return (0, t.jsxs)(l.CartContext.Provider, {
                value: eW,
                children: [e, $ && (0, t.jsx)(v, {
                    onContinueToCart: e => eU(e),
                    onClose: Y,
                    primaryVariantId: G
                })]
            })
        }
}, 57134, e => {
    "use strict";
    var t = e.i(91398),
        r = e.i(60814),
        i = e.i(91788),
        n = e.i(22367),
        a = e.i(33535);
    let o = (0, i.createContext)({
            set: () => {},
            clear: () => {},
            show: () => {},
            hide: () => {},
            setCloseButtonTheme: () => {},
            setCloseBtnHidden: () => {},
            setTop: () => {},
            setAlignRight: () => {},
            setFullView: () => {},
            setBg: () => {},
            setPortal: () => {},
            isPortal: !1
        }),
        s = (0, r.default)(({
            className: e,
            children: r,
            hideModal: i,
            lightCloseButton: n,
            top: o,
            fullViewMbl: s,
            bg: c,
            closeBtnHidden: d = !1,
            alignRight: l = !1
        }) => (0, t.jsxs)("div", {
            className: `${e} ${o?"top":""} ${l?"align-right":""}`,
            "aria-hidden": "true",
            onClick: i,
            style: {
                padding: `${s?"0":l?"16px":"24px"}`
            },
            children: [(0, t.jsxs)("div", {
                className: `modalContent ${"dark"===c?"dark-bg":""} ${s?"full-view-mobile":""} ${l?"align-right-content":""}`,
                onClick: e => e.stopPropagation(),
                "aria-hidden": "true",
                children: [r, s || d ? null : (0, t.jsx)("button", {
                    className: `closeBtn ${n?"light":""}`,
                    onClick: i,
                    children: (0, t.jsx)(a.CrossDark, {})
                })]
            }), s && !d ? (0, t.jsx)("button", {
                className: `closeNBtn ${n?"light":""}`,
                onClick: i,
                children: (0, t.jsx)(a.CrossDark, {})
            }) : null]
        })).withConfig({
            displayName: "Modal__ModalWhite",
            componentId: "sc-a743b718-0"
        })
    `
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 150;

  & * {
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
      display: none; /* Safari and Chrome */
    }
  }

  &.top {
    z-index: 3000;
  }

  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: rgba(0, 0, 0, 0.7);
  // padding: 24px;

  opacity: 0;

  animation: ${r.keyframes`
    from {opacity: 0;}
    to {opacity: 1;}
  `} 0.2s ease-in-out forwards;

  /* Right alignment for specific modals - align to right (horizontal) but respect padding for vertical spacing */
  &.align-right {
    justify-content: center; /* Keep vertical centering to respect top/bottom padding */
    align-items: flex-end; /* Align to right side */
  }

  .full-view-mobile {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 0 !important;
    border-radius: 0 !important;
    /* Allow fixed positioning to work within modal */
    transform: none !important;
    will-change: auto !important;

    @media (min-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
      border-radius: 24px !important;
    }

    &::before {
      @media (min-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
        position: sticky;
        top: -0.1rem;
        box-shadow: 0px 5px 25px 18px #fff;
        display: block;
        content: '';
        width: 100%;
        height: 0.1rem;
        // background:  linear-gradient(180deg, #fff 0%, rgba(255, 255, 255, 0.00) 100%);
        z-index: 150;
      }
    }

    &::after {
      @media (min-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
        position: sticky;
        top: 100%;
        display: block;
        content: '';
        width: 100%;
        height: 0.1rem;
        box-shadow: 0px -5px 25px 28px #fff;
        z-index: 150;
      }
    }
  }

  .modalContent {
    position: relative;
    width: 100%;
    border-radius: 24px;
    overflow: auto;
    color: #000000;
    background: #ffffff;

    transform: translateY(40px);

    animation: ${r.keyframes`
    from {transform: translateY(24px);}
    to {transform: translateY(0);}
  `} 0.2s ease-in-out forwards;

    /* For full-view mobile, don't create stacking context issues */
    &.full-view-mobile {
      transform: none !important;
      will-change: auto !important;
      /* Allow fixed positioning to work */
      isolation: auto !important;
    }

    /* For right-aligned modals, don't create stacking context issues */
    &.align-right-content {
      transform: none !important;
      will-change: auto !important;
      /* Allow fixed positioning to work */
      isolation: auto !important;

      /* Remove sticky gradient effects for right-aligned modals */
      &::before,
      &::after {
        display: none !important;
      }
    }

    @media (min-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
      min-width: 100px;
      min-height: 100px;
      width: fit-content;
      height: fit-content;
    }

    .closeBtn {
      position: absolute;
      right: 24px;
      top: 24px;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      border: none;

      background: rgba(0, 0, 0, 0.08);
      display: grid;
      place-items: center;

      &.light {
        background: #fff;
      }

      svg {
        width: 16px;
      }
    }
  }

  .dark-bg {
    background-color: black;
  }

  .closeNBtn {
    position: fixed;
    right: 24px;
    top: 24px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: none;
    background: rgba(0, 0, 0, 0.08);
    display: grid;
    place-items: center;
    z-index: 1100;

    @media (min-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
      right: calc((100vw / 2) - (58rem / 2) + 2.4rem);
      top: calc((100vh / 2) - (58rem / 2) + 1.6rem);
    }

    &.light {
      background: #fff;
    }

    svg {
      width: 16px;
    }
  }

  // .gradient-container {
  //   position: absolute;
  //   bottom: 0;
  //   left: 0;
  //   border: 1px solid red;
  //   width: 100%;
  //   height: 6.8rem;
  //   background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #fff 77.5%);
  // }
`;
    e.s(["ModalContext", 0, o, "ModalProvider", 0, ({
        children: e
    }) => {
        let [r, a] = (0, i.useState)(!1), [c, d] = (0, i.useState)(null), [l, u] = (0, i.useState)(""), [p, f] = (0, i.useState)(!1), [h, m] = (0, i.useState)(!1), [g, y] = (0, i.useState)(!1), [b, S] = (0, i.useState)(!1), [x, v] = (0, i.useState)(!1), [_, w] = (0, i.useState)(!1), E = () => {
            a(!1), f(!1), y(!1), S(!1), w(!1)
        }, I = r ? (0, t.jsx)(s, {
            top: h || x,
            lightCloseButton: p,
            hideModal: E,
            fullViewMbl: g,
            bg: l,
            closeBtnHidden: b,
            alignRight: _,
            children: c
        }) : null;
        return (0, t.jsxs)(o.Provider, {
            value: {
                set: e => {
                    d(e ? ? null)
                },
                clear: () => {
                    d(null), E()
                },
                show: () => {
                    a(!0)
                },
                hide: E,
                setCloseButtonTheme: e => {
                    "dark" != e && f(!0)
                },
                setCloseBtnHidden: S,
                setTop: () => m(!0),
                setFullView: () => y(!0),
                setBg: e => {
                    u(e)
                },
                setAlignRight: () => w(!0),
                setPortal: e => v(e),
                isPortal: x
            },
            children: [e, x && "u" > typeof document ? (0, n.createPortal)(I, document.body) : I]
        })
    }])
}, 37775, e => {
    "use strict";
    let t = `
window.NREUM||(NREUM={});NREUM.init={distributed_tracing:{enabled:true},privacy:{cookies_enabled:false}};window.NREUM||(NREUM={}),__nr_require=function(t,e,n){function r(n){if(!e[n]){var o=e[n]={exports:{}};t[n][0].call(o.exports,function(e){var o=t[n][1][e];return r(o||e)},o,o.exports)}return e[n].exports}if("function"==typeof __nr_require)return __nr_require;for(var o=0;o<n.length;o++)r(n[o]);return r}({1:[function(t,e,n){function r(t){try{c.console&&console.log(t)}catch(e){}}var o,i=t("ee"),a=t(28),c={};try{o=localStorage.getItem("__nr_flags").split(","),console&&"function"==typeof console.log&&(c.console=!0,o.indexOf("dev")!==-1&&(c.dev=!0),o.indexOf("nr_dev")!==-1&&(c.nrDev=!0))}catch(s){}c.nrDev&&i.on("internal-error",function(t){r(t.stack)}),c.dev&&i.on("fn-err",function(t,e,n){r(n.stack)}),c.dev&&(r("NR AGENT IN DEVELOPMENT MODE"),r("flags: "+a(c,function(t,e){return t}).join(", ")))},{}],2:[function(t,e,n){function r(t,e,n,r,c){try{l?l-=1:o(c||new UncaughtException(t,e,n),!0)}catch(u){try{i("ierr",[u,s.now(),!0])}catch(d){}}return"function"==typeof f&&f.apply(this,a(arguments))}function UncaughtException(t,e,n){this.message=t||"Uncaught error with no additional information",this.sourceURL=e,this.line=n}function o(t,e){var n=e?null:s.now();i("err",[t,n])}var i=t("handle"),a=t(29),c=t("ee"),s=t("loader"),u=t("gos"),f=window.onerror,d=!1,p="nr@seenError",l=0;s.features.err=!0,t(1),window.onerror=r;try{throw new Error}catch(h){"stack"in h&&(t(13),t(12),"addEventListener"in window&&t(6),s.xhrWrappable&&t(14),d=!0)}c.on("fn-start",function(t,e,n){d&&(l+=1)}),c.on("fn-err",function(t,e,n){d&&!n[p]&&(u(n,p,function(){return!0}),this.thrown=!0,o(n))}),c.on("fn-end",function(){d&&!this.thrown&&l>0&&(l-=1)}),c.on("internal-error",function(t){i("ierr",[t,s.now(),!0])})},{}],3:[function(t,e,n){t("loader").features.ins=!0},{}],4:[function(t,e,n){function r(){L++,T=g.hash,this[f]=y.now()}function o(){L--,g.hash!==T&&i(0,!0);var t=y.now();this[h]=~~this[h]+t-this[f],this[d]=t}function i(t,e){E.emit("newURL",[""+g,e])}function a(t,e){t.on(e,function(){this[e]=y.now()})}var c="-start",s="-end",u="-body",f="fn"+c,d="fn"+s,p="cb"+c,l="cb"+s,h="jsTime",m="fetch",v="addEventListener",w=window,g=w.location,y=t("loader");if(w[v]&&y.xhrWrappable){var x=t(10),b=t(11),E=t(8),R=t(6),O=t(13),N=t(7),P=t(14),M=t(9),S=t("ee"),C=S.get("tracer");t(16),y.features.spa=!0;var T,L=0;S.on(f,r),b.on(p,r),M.on(p,r),S.on(d,o),b.on(l,o),M.on(l,o),S.buffer([f,d,"xhr-done","xhr-resolved"]),R.buffer([f]),O.buffer(["setTimeout"+s,"clearTimeout"+c,f]),P.buffer([f,"new-xhr","send-xhr"+c]),N.buffer([m+c,m+"-done",m+u+c,m+u+s]),E.buffer(["newURL"]),x.buffer([f]),b.buffer(["propagate",p,l,"executor-err","resolve"+c]),C.buffer([f,"no-"+f]),M.buffer(["new-jsonp","cb-start","jsonp-error","jsonp-end"]),a(P,"send-xhr"+c),a(S,"xhr-resolved"),a(S,"xhr-done"),a(N,m+c),a(N,m+"-done"),a(M,"new-jsonp"),a(M,"jsonp-end"),a(M,"cb-start"),E.on("pushState-end",i),E.on("replaceState-end",i),w[v]("hashchange",i,!0),w[v]("load",i,!0),w[v]("popstate",function(){i(0,L>1)},!0)}},{}],5:[function(t,e,n){function r(t){}if(window.performance&&window.performance.timing&&window.performance.getEntriesByType){var o=t("ee"),i=t("handle"),a=t(13),c=t(12),s="learResourceTimings",u="addEventListener",f="resourcetimingbufferfull",d="bstResource",p="resource",l="-start",h="-end",m="fn"+l,v="fn"+h,w="bstTimer",g="pushState",y=t("loader");y.features.stn=!0,t(8),"addEventListener"in window&&t(6);var x=NREUM.o.EV;o.on(m,function(t,e){var n=t[0];n instanceof x&&(this.bstStart=y.now())}),o.on(v,function(t,e){var n=t[0];n instanceof x&&i("bst",[n,e,this.bstStart,y.now()])}),a.on(m,function(t,e,n){this.bstStart=y.now(),this.bstType=n}),a.on(v,function(t,e){i(w,[e,this.bstStart,y.now(),this.bstType])}),c.on(m,function(){this.bstStart=y.now()}),c.on(v,function(t,e){i(w,[e,this.bstStart,y.now(),"requestAnimationFrame"])}),o.on(g+l,function(t){this.time=y.now(),this.startPath=location.pathname+location.hash}),o.on(g+h,function(t){i("bstHist",[location.pathname+location.hash,this.startPath,this.time])}),u in window.performance&&(window.performance["c"+s]?window.performance[u](f,function(t){i(d,[window.performance.getEntriesByType(p)]),window.performance["c"+s]()},!1):window.performance[u]("webkit"+f,function(t){i(d,[window.performance.getEntriesByType(p)]),window.performance["webkitC"+s]()},!1)),document[u]("scroll",r,{passive:!0}),document[u]("keypress",r,!1),document[u]("click",r,!1)}},{}],6:[function(t,e,n){function r(t){for(var e=t;e&&!e.hasOwnProperty(f);)e=Object.getPrototypeOf(e);e&&o(e)}function o(t){c.inPlace(t,[f,d],"-",i)}function i(t,e){return t[1]}var a=t("ee").get("events"),c=t("wrap-function")(a,!0),s=t("gos"),u=XMLHttpRequest,f="addEventListener",d="removeEventListener";e.exports=a,"getPrototypeOf"in Object?(r(document),r(window),r(u.prototype)):u.prototype.hasOwnProperty(f)&&(o(window),o(u.prototype)),a.on(f+"-start",function(t,e){var n=t[1],r=s(n,"nr@wrapped",function(){function t(){if("function"==typeof n.handleEvent)return n.handleEvent.apply(n,arguments)}var e={object:t,"function":n}[typeof n];return e?c(e,"fn-",null,e.name||"anonymous"):n});this.wrapped=t[1]=r}),a.on(d+"-start",function(t){t[1]=this.wrapped||t[1]})},{}],7:[function(t,e,n){function r(t,e,n){var r=t[e];"function"==typeof r&&(t[e]=function(){var t=i(arguments),e={};o.emit(n+"before-start",[t],e);var a;e[m]&&e[m].dt&&(a=e[m].dt);var c=r.apply(this,t);return o.emit(n+"start",[t,a],c),c.then(function(t){return o.emit(n+"end",[null,t],c),t},function(t){throw o.emit(n+"end",[t],c),t})})}var o=t("ee").get("fetch"),i=t(29),a=t(28);e.exports=o;var c=window,s="fetch-",u=s+"body-",f=["arrayBuffer","blob","json","text","formData"],d=c.Request,p=c.Response,l=c.fetch,h="prototype",m="nr@context";d&&p&&l&&(a(f,function(t,e){r(d[h],e,u),r(p[h],e,u)}),r(c,"fetch",s),o.on(s+"end",function(t,e){var n=this;if(e){var r=e.headers.get("content-length");null!==r&&(n.rxSize=r),o.emit(s+"done",[null,e],n)}else o.emit(s+"done",[t],n)}))},{}],8:[function(t,e,n){var r=t("ee").get("history"),o=t("wrap-function")(r);e.exports=r;var i=window.history&&window.history.constructor&&window.history.constructor.prototype,a=window.history;i&&i.pushState&&i.replaceState&&(a=i),o.inPlace(a,["pushState","replaceState"],"-")},{}],9:[function(t,e,n){function r(t){function e(){s.emit("jsonp-end",[],p),t.removeEventListener("load",e,!1),t.removeEventListener("error",n,!1)}function n(){s.emit("jsonp-error",[],p),s.emit("jsonp-end",[],p),t.removeEventListener("load",e,!1),t.removeEventListener("error",n,!1)}var r=t&&"string"==typeof t.nodeName&&"script"===t.nodeName.toLowerCase();if(r){var o="function"==typeof t.addEventListener;if(o){var a=i(t.src);if(a){var f=c(a),d="function"==typeof f.parent[f.key];if(d){var p={};u.inPlace(f.parent,[f.key],"cb-",p),t.addEventListener("load",e,!1),t.addEventListener("error",n,!1),s.emit("new-jsonp",[t.src],p)}}}}}function o(){return"addEventListener"in window}function i(t){var e=t.match(f);return e?e[1]:null}function a(t,e){var n=t.match(p),r=n[1],o=n[3];return o?a(o,e[r]):e[r]}function c(t){var e=t.match(d);return e&&e.length>=3?{key:e[2],parent:a(e[1],window)}:{key:t,parent:window}}var s=t("ee").get("jsonp"),u=t("wrap-function")(s);if(e.exports=s,o()){var f=/[?&](?:callback|cb)=([^&#]+)/,d=/(.*)\\.([^.]+)/,p=/^(\\w+)(\\.|$)(.*)$/,l=["appendChild","insertBefore","replaceChild"];Node&&Node.prototype&&Node.prototype.appendChild?u.inPlace(Node.prototype,l,"dom-"):(u.inPlace(HTMLElement.prototype,l,"dom-"),u.inPlace(HTMLHeadElement.prototype,l,"dom-"),u.inPlace(HTMLBodyElement.prototype,l,"dom-")),s.on("dom-start",function(t){r(t[0])})}},{}],10:[function(t,e,n){var r=t("ee").get("mutation"),o=t("wrap-function")(r),i=NREUM.o.MO;e.exports=r,i&&(window.MutationObserver=function(t){return this instanceof i?new i(o(t,"fn-")):i.apply(this,arguments)},MutationObserver.prototype=i.prototype)},{}],11:[function(t,e,n){function r(t){var e=i.context(),n=c(t,"executor-",e,null,!1),r=new u(n);return i.context(r).getCtx=function(){return e},r}var o=t("wrap-function"),i=t("ee").get("promise"),a=t("ee").getOrSetContext,c=o(i),s=t(28),u=NREUM.o.PR;e.exports=i,u&&(window.Promise=r,["all","race"].forEach(function(t){var e=u[t];u[t]=function(n){function r(t){return function(){i.emit("propagate",[null,!o],a,!1,!1),o=o||!t}}var o=!1;s(n,function(e,n){Promise.resolve(n).then(r("all"===t),r(!1))});var a=e.apply(u,arguments),c=u.resolve(a);return c}}),["resolve","reject"].forEach(function(t){var e=u[t];u[t]=function(t){var n=e.apply(u,arguments);return t!==n&&i.emit("propagate",[t,!0],n,!1,!1),n}}),u.prototype["catch"]=function(t){return this.then(null,t)},u.prototype=Object.create(u.prototype,{constructor:{value:r}}),s(Object.getOwnPropertyNames(u),function(t,e){try{r[e]=u[e]}catch(n){}}),o.wrapInPlace(u.prototype,"then",function(t){return function(){var e=this,n=o.argsToArray.apply(this,arguments),r=a(e);r.promise=e,n[0]=c(n[0],"cb-",r,null,!1),n[1]=c(n[1],"cb-",r,null,!1);var s=t.apply(this,n);return r.nextPromise=s,i.emit("propagate",[e,!0],s,!1,!1),s}}),i.on("executor-start",function(t){t[0]=c(t[0],"resolve-",this,null,!1),t[1]=c(t[1],"resolve-",this,null,!1)}),i.on("executor-err",function(t,e,n){t[1](n)}),i.on("cb-end",function(t,e,n){i.emit("propagate",[n,!0],this.nextPromise,!1,!1)}),i.on("propagate",function(t,e,n){this.getCtx&&!e||(this.getCtx=function(){if(t instanceof Promise)var e=i.context(t);return e&&e.getCtx?e.getCtx():this})}),r.toString=function(){return""+u})},{}],12:[function(t,e,n){var r=t("ee").get("raf"),o=t("wrap-function")(r),i="equestAnimationFrame";e.exports=r,o.inPlace(window,["r"+i,"mozR"+i,"webkitR"+i,"msR"+i],"raf-"),r.on("raf-start",function(t){t[0]=o(t[0],"fn-")})},{}],13:[function(t,e,n){function r(t,e,n){t[0]=a(t[0],"fn-",null,n)}function o(t,e,n){this.method=n,this.timerDuration=isNaN(t[1])?0:+t[1],t[0]=a(t[0],"fn-",this,n)}var i=t("ee").get("timer"),a=t("wrap-function")(i),c="setTimeout",s="setInterval",u="clearTimeout",f="-start",d="-";e.exports=i,a.inPlace(window,[c,"setImmediate"],c+d),a.inPlace(window,[s],s+d),a.inPlace(window,[u,"clearImmediate"],u+d),i.on(s+f,r),i.on(c+f,o)},{}],14:[function(t,e,n){function r(t,e){d.inPlace(e,["onreadystatechange"],"fn-",c)}function o(){var t=this,e=f.context(t);t.readyState>3&&!e.resolved&&(e.resolved=!0,f.emit("xhr-resolved",[],t)),d.inPlace(t,g,"fn-",c)}function i(t){y.push(t),h&&(b?b.then(a):v?v(a):(E=-E,R.data=E))}function a(){for(var t=0;t<y.length;t++)r([],y[t]);y.length&&(y=[])}function c(t,e){return e}function s(t,e){for(var n in t)e[n]=t[n];return e}t(6);var u=t("ee"),f=u.get("xhr"),d=t("wrap-function")(f),p=NREUM.o,l=p.XHR,h=p.MO,m=p.PR,v=p.SI,w="readystatechange",g=["onload","onerror","onabort","onloadstart","onloadend","onprogress","ontimeout"],y=[];e.exports=f;var x=window.XMLHttpRequest=function(t){var e=new l(t);try{f.emit("new-xhr",[e],e),e.addEventListener(w,o,!1)}catch(n){try{f.emit("internal-error",[n])}catch(r){}}return e};if(s(l,x),x.prototype=l.prototype,d.inPlace(x.prototype,["open","send"],"-xhr-",c),f.on("send-xhr-start",function(t,e){r(t,e),i(e)}),f.on("open-xhr-start",r),h){var b=m&&m.resolve();if(!v&&!m){var E=1,R=document.createTextNode(E);new h(a).observe(R,{characterData:!0})}}else u.on("fn-end",function(t){t[0]&&t[0].type===w||a()})},{}],15:[function(t,e,n){function r(t){if(!c(t))return null;var e=window.NREUM;if(!e.loader_config)return null;var n=(e.loader_config.accountID||"").toString()||null,r=(e.loader_config.agentID||"").toString()||null,u=(e.loader_config.trustKey||"").toString()||null;if(!n||!r)return null;var h=l.generateSpanId(),m=l.generateTraceId(),v=Date.now(),w={spanId:h,traceId:m,timestamp:v};return(t.sameOrigin||s(t)&&p())&&(w.traceContextParentHeader=o(h,m),w.traceContextStateHeader=i(h,v,n,r,u)),(t.sameOrigin&&!f()||!t.sameOrigin&&s(t)&&d())&&(w.newrelicHeader=a(h,m,v,n,r,u)),w}function o(t,e){return"00-"+e+"-"+t+"-01"}function i(t,e,n,r,o){var i=0,a="",c=1,s="",u="";return o+"@nr="+i+"-"+c+"-"+n+"-"+r+"-"+t+"-"+a+"-"+s+"-"+u+"-"+e}function a(t,e,n,r,o,i){var a="btoa"in window&&"function"==typeof window.btoa;if(!a)return null;var c={v:[0,1],d:{ty:"Browser",ac:r,ap:o,id:t,tr:e,ti:n}};return i&&r!==i&&(c.d.tk=i),btoa(JSON.stringify(c))}function c(t){return u()&&s(t)}function s(t){var e=!1,n={};if("init"in NREUM&&"distributed_tracing"in NREUM.init&&(n=NREUM.init.distributed_tracing),t.sameOrigin)e=!0;else if(n.allowed_origins instanceof Array)for(var r=0;r<n.allowed_origins.length;r++){var o=h(n.allowed_origins[r]);if(t.hostname===o.hostname&&t.protocol===o.protocol&&t.port===o.port){e=!0;break}}return e}function u(){return"init"in NREUM&&"distributed_tracing"in NREUM.init&&!!NREUM.init.distributed_tracing.enabled}function f(){return"init"in NREUM&&"distributed_tracing"in NREUM.init&&!!NREUM.init.distributed_tracing.exclude_newrelic_header}function d(){return"init"in NREUM&&"distributed_tracing"in NREUM.init&&NREUM.init.distributed_tracing.cors_use_newrelic_header!==!1}function p(){return"init"in NREUM&&"distributed_tracing"in NREUM.init&&!!NREUM.init.distributed_tracing.cors_use_tracecontext_headers}var l=t(25),h=t(17);e.exports={generateTracePayload:r,shouldGenerateTrace:c}},{}],16:[function(t,e,n){function r(t){var e=this.params,n=this.metrics;if(!this.ended){this.ended=!0;for(var r=0;r<p;r++)t.removeEventListener(d[r],this.listener,!1);e.aborted||(n.duration=a.now()-this.startTime,this.loadCaptureCalled||4!==t.readyState?null==e.status&&(e.status=0):i(this,t),n.cbTime=this.cbTime,f.emit("xhr-done",[t],t),c("xhr",[e,n,this.startTime]))}}function o(t,e){var n=s(e),r=t.params;r.host=n.hostname+":"+n.port,r.pathname=n.pathname,t.parsedOrigin=s(e),t.sameOrigin=t.parsedOrigin.sameOrigin}function i(t,e){t.params.status=e.status;var n=v(e,t.lastSize);if(n&&(t.metrics.rxSize=n),t.sameOrigin){var r=e.getResponseHeader("X-NewRelic-App-Data");r&&(t.params.cat=r.split(", ").pop())}t.loadCaptureCalled=!0}var a=t("loader");if(a.xhrWrappable){var c=t("handle"),s=t(17),u=t(15).generateTracePayload,f=t("ee"),d=["load","error","abort","timeout"],p=d.length,l=t("id"),h=t(21),m=t(20),v=t(18),w=window.XMLHttpRequest;a.features.xhr=!0,t(14),t(7),f.on("new-xhr",function(t){var e=this;e.totalCbs=0,e.called=0,e.cbTime=0,e.end=r,e.ended=!1,e.xhrGuids={},e.lastSize=null,e.loadCaptureCalled=!1,t.addEventListener("load",function(n){i(e,t)},!1),h&&(h>34||h<10)||window.opera||t.addEventListener("progress",function(t){e.lastSize=t.loaded},!1)}),f.on("open-xhr-start",function(t){this.params={method:t[0]},o(this,t[1]),this.metrics={}}),f.on("open-xhr-end",function(t,e){"loader_config"in NREUM&&"xpid"in NREUM.loader_config&&this.sameOrigin&&e.setRequestHeader("X-NewRelic-ID",NREUM.loader_config.xpid);var n=u(this.parsedOrigin);if(n){var r=!1;n.newrelicHeader&&(e.setRequestHeader("newrelic",n.newrelicHeader),r=!0),n.traceContextParentHeader&&(e.setRequestHeader("traceparent",n.traceContextParentHeader),n.traceContextStateHeader&&e.setRequestHeader("tracestate",n.traceContextStateHeader),r=!0),r&&(this.dt=n)}}),f.on("send-xhr-start",function(t,e){var n=this.metrics,r=t[0],o=this;if(n&&r){var i=m(r);i&&(n.txSize=i)}this.startTime=a.now(),this.listener=function(t){try{"abort"!==t.type||o.loadCaptureCalled||(o.params.aborted=!0),("load"!==t.type||o.called===o.totalCbs&&(o.onloadCalled||"function"!=typeof e.onload))&&o.end(e)}catch(n){try{f.emit("internal-error",[n])}catch(r){}}};for(var c=0;c<p;c++)e.addEventListener(d[c],this.listener,!1)}),f.on("xhr-cb-time",function(t,e,n){this.cbTime+=t,e?this.onloadCalled=!0:this.called+=1,this.called!==this.totalCbs||!this.onloadCalled&&"function"==typeof n.onload||this.end(n)}),f.on("xhr-load-added",function(t,e){var n=""+l(t)+!!e;this.xhrGuids&&!this.xhrGuids[n]&&(this.xhrGuids[n]=!0,this.totalCbs+=1)}),f.on("xhr-load-removed",function(t,e){var n=""+l(t)+!!e;this.xhrGuids&&this.xhrGuids[n]&&(delete this.xhrGuids[n],this.totalCbs-=1)}),f.on("addEventListener-end",function(t,e){e instanceof w&&"load"===t[0]&&f.emit("xhr-load-added",[t[1],t[2]],e)}),f.on("removeEventListener-end",function(t,e){e instanceof w&&"load"===t[0]&&f.emit("xhr-load-removed",[t[1],t[2]],e)}),f.on("fn-start",function(t,e,n){e instanceof w&&("onload"===n&&(this.onload=!0),("load"===(t[0]&&t[0].type)||this.onload)&&(this.xhrCbStart=a.now()))}),f.on("fn-end",function(t,e){this.xhrCbStart&&f.emit("xhr-cb-time",[a.now()-this.xhrCbStart,this.onload,e],e)}),f.on("fetch-before-start",function(t){function e(t,e){var n=!1;return e.newrelicHeader&&(t.set("newrelic",e.newrelicHeader),n=!0),e.traceContextParentHeader&&(t.set("traceparent",e.traceContextParentHeader),e.traceContextStateHeader&&t.set("tracestate",e.traceContextStateHeader),n=!0),n}var n,r=t[1]||{};"string"==typeof t[0]?n=t[0]:t[0]&&t[0].url?n=t[0].url:window.URL&&t[0]&&t[0]instanceof URL&&(n=t[0].href),n&&(this.parsedOrigin=s(n),this.sameOrigin=this.parsedOrigin.sameOrigin);var o=u(this.parsedOrigin);if(o&&(o.newrelicHeader||o.traceContextParentHeader))if("string"==typeof t[0]||window.URL&&t[0]&&t[0]instanceof URL){var i={};for(var a in r)i[a]=r[a];i.headers=new Headers(r.headers||{}),e(i.headers,o)&&(this.dt=o),t.length>1?t[1]=i:t.push(i)}else t[0]&&t[0].headers&&e(t[0].headers,o)&&(this.dt=o)})}},{}],17:[function(t,e,n){var r={};e.exports=function(t){if(t in r)return r[t];var e=document.createElement("a"),n=window.location,o={};e.href=t,o.port=e.port;var i=e.href.split("://");!o.port&&i[1]&&(o.port=i[1].split("/")[0].split("@").pop().split(":")[1]),o.port&&"0"!==o.port||(o.port="https"===i[0]?"443":"80"),o.hostname=e.hostname||n.hostname,o.pathname=e.pathname,o.protocol=i[0],"/"!==o.pathname.charAt(0)&&(o.pathname="/"+o.pathname);var a=!e.protocol||":"===e.protocol||e.protocol===n.protocol,c=e.hostname===document.domain&&e.port===n.port;return o.sameOrigin=a&&(!e.hostname||c),"/"===o.pathname&&(r[t]=o),o}},{}],18:[function(t,e,n){function r(t,e){var n=t.responseType;return"json"===n&&null!==e?e:"arraybuffer"===n||"blob"===n||"json"===n?o(t.response):"text"===n||""===n||void 0===n?o(t.responseText):void 0}var o=t(20);e.exports=r},{}],19:[function(t,e,n){function r(){}function o(t,e,n){return function(){return i(t,[u.now()].concat(c(arguments)),e?null:this,n),e?void 0:this}}var i=t("handle"),a=t(28),c=t(29),s=t("ee").get("tracer"),u=t("loader"),f=NREUM;"undefined"==typeof window.newrelic&&(newrelic=f);var d=["setPageViewName","setCustomAttribute","setErrorHandler","finished","addToTrace","inlineHit","addRelease"],p="api-",l=p+"ixn-";a(d,function(t,e){f[e]=o(p+e,!0,"api")}),f.addPageAction=o(p+"addPageAction",!0),f.setCurrentRouteName=o(p+"routeName",!0),e.exports=newrelic,f.interaction=function(){return(new r).get()};var h=r.prototype={createTracer:function(t,e){var n={},r=this,o="function"==typeof e;return i(l+"tracer",[u.now(),t,n],r),function(){if(s.emit((o?"":"no-")+"fn-start",[u.now(),r,o],n),o)try{return e.apply(this,arguments)}catch(t){throw s.emit("fn-err",[arguments,this,t],n),t}finally{s.emit("fn-end",[u.now()],n)}}}};a("actionText,setName,setAttribute,save,ignore,onEnd,getContext,end,get".split(","),function(t,e){h[e]=o(l+e)}),newrelic.noticeError=function(t,e){"string"==typeof t&&(t=new Error(t)),i("err",[t,u.now(),!1,e])}},{}],20:[function(t,e,n){e.exports=function(t){if("string"==typeof t&&t.length)return t.length;if("object"==typeof t){if("undefined"!=typeof ArrayBuffer&&t instanceof ArrayBuffer&&t.byteLength)return t.byteLength;if("undefined"!=typeof Blob&&t instanceof Blob&&t.size)return t.size;if(!("undefined"!=typeof FormData&&t instanceof FormData))try{return JSON.stringify(t).length}catch(e){return}}}},{}],21:[function(t,e,n){var r=0,o=navigator.userAgent.match(/Firefox[\\/\\s](\\d+\\.\\d+)/);o&&(r=+o[1]),e.exports=r},{}],22:[function(t,e,n){function r(){return c.exists&&performance.now?Math.round(performance.now()):(i=Math.max((new Date).getTime(),i))-a}function o(){return i}var i=(new Date).getTime(),a=i,c=t(30);e.exports=r,e.exports.offset=a,e.exports.getLastTimestamp=o},{}],23:[function(t,e,n){function r(t){return!(!t||!t.protocol||"file:"===t.protocol)}e.exports=r},{}],24:[function(t,e,n){function r(t,e){var n=t.getEntries();n.forEach(function(t){"first-paint"===t.name?d("timing",["fp",Math.floor(t.startTime)]):"first-contentful-paint"===t.name&&d("timing",["fcp",Math.floor(t.startTime)])})}function o(t,e){var n=t.getEntries();n.length>0&&d("lcp",[n[n.length-1]])}function i(t){t.getEntries().forEach(function(t){t.hadRecentInput||d("cls",[t])})}function a(t){if(t instanceof h&&!v){var e=Math.round(t.timeStamp),n={type:t.type};e<=p.now()?n.fid=p.now()-e:e>p.offset&&e<=Date.now()?(e-=p.offset,n.fid=p.now()-e):e=p.now(),v=!0,d("timing",["fi",e,n])}}function c(t){d("pageHide",[p.now(),t])}if(!("init"in NREUM&&"page_view_timing"in NREUM.init&&"enabled"in NREUM.init.page_view_timing&&NREUM.init.page_view_timing.enabled===!1)){var s,u,f,d=t("handle"),p=t("loader"),l=t(27),h=NREUM.o.EV;if("PerformanceObserver"in window&&"function"==typeof window.PerformanceObserver){s=new PerformanceObserver(r);try{s.observe({entryTypes:["paint"]})}catch(m){}u=new PerformanceObserver(o);try{u.observe({entryTypes:["largest-contentful-paint"]})}catch(m){}f=new PerformanceObserver(i);try{f.observe({type:"layout-shift",buffered:!0})}catch(m){}}if("addEventListener"in document){var v=!1,w=["click","keydown","mousedown","pointerdown","touchstart"];w.forEach(function(t){document.addEventListener(t,a,!1)})}l(c)}},{}],25:[function(t,e,n){function r(){function t(){return e?15&e[n++]:16*Math.random()|0}var e=null,n=0,r=window.crypto||window.msCrypto;r&&r.getRandomValues&&(e=r.getRandomValues(new Uint8Array(31)));for(var o,i="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx",a="",c=0;c<i.length;c++)o=i[c],"x"===o?a+=t().toString(16):"y"===o?(o=3&t()|8,a+=o.toString(16)):a+=o;return a}function o(){return a(16)}function i(){return a(32)}function a(t){function e(){return n?15&n[r++]:16*Math.random()|0}var n=null,r=0,o=window.crypto||window.msCrypto;o&&o.getRandomValues&&Uint8Array&&(n=o.getRandomValues(new Uint8Array(31)));for(var i=[],a=0;a<t;a++)i.push(e().toString(16));return i.join("")}e.exports={generateUuid:r,generateSpanId:o,generateTraceId:i}},{}],26:[function(t,e,n){function r(t,e){if(!o)return!1;if(t!==o)return!1;if(!e)return!0;if(!i)return!1;for(var n=i.split("."),r=e.split("."),a=0;a<r.length;a++)if(r[a]!==n[a])return!1;return!0}var o=null,i=null,a=/Version\\/(\\S+)\\s+Safari/;if(navigator.userAgent){var c=navigator.userAgent,s=c.match(a);s&&c.indexOf("Chrome")===-1&&c.indexOf("Chromium")===-1&&(o="Safari",i=s[1])}e.exports={agent:o,version:i,match:r}},{}],27:[function(t,e,n){function r(t){function e(){t(a&&document[a]?document[a]:document[o]?"hidden":"visible")}"addEventListener"in document&&i&&document.addEventListener(i,e,!1)}e.exports=r;var o,i,a;"undefined"!=typeof document.hidden?(o="hidden",i="visibilitychange",a="visibilityState"):"undefined"!=typeof document.msHidden?(o="msHidden",i="msvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(o="webkitHidden",i="webkitvisibilitychange",a="webkitVisibilityState")},{}],28:[function(t,e,n){function r(t,e){var n=[],r="",i=0;for(r in t)o.call(t,r)&&(n[i]=e(r,t[r]),i+=1);return n}var o=Object.prototype.hasOwnProperty;e.exports=r},{}],29:[function(t,e,n){function r(t,e,n){e||(e=0),"undefined"==typeof n&&(n=t?t.length:0);for(var r=-1,o=n-e||0,i=Array(o<0?0:o);++r<o;)i[r]=t[e+r];return i}e.exports=r},{}],30:[function(t,e,n){e.exports={exists:"undefined"!=typeof window.performance&&window.performance.timing&&"undefined"!=typeof window.performance.timing.navigationStart}},{}],ee:[function(t,e,n){function r(){}function o(t){function e(t){return t&&t instanceof r?t:t?u(t,s,a):a()}function n(n,r,o,i,a){if(a!==!1&&(a=!0),!l.aborted||i){t&&a&&t(n,r,o);for(var c=e(o),s=m(n),u=s.length,f=0;f<u;f++)s[f].apply(c,r);var p=d[y[n]];return p&&p.push([x,n,r,c]),c}}function i(t,e){g[t]=m(t).concat(e)}function h(t,e){var n=g[t];if(n)for(var r=0;r<n.length;r++)n[r]===e&&n.splice(r,1)}function m(t){return g[t]||[]}function v(t){return p[t]=p[t]||o(n)}function w(t,e){f(t,function(t,n){e=e||"feature",y[n]=e,e in d||(d[e]=[])})}var g={},y={},x={on:i,addEventListener:i,removeEventListener:h,emit:n,get:v,listeners:m,context:e,buffer:w,abort:c,aborted:!1};return x}function i(t){return u(t,s,a)}function a(){return new r}function c(){(d.api||d.feature)&&(l.aborted=!0,d=l.backlog={})}var s="nr@context",u=t("gos"),f=t(28),d={},p={},l=e.exports=o();e.exports.getOrSetContext=i,l.backlog=d},{}],gos:[function(t,e,n){function r(t,e,n){if(o.call(t,e))return t[e];var r=n();if(Object.defineProperty&&Object.keys)try{return Object.defineProperty(t,e,{value:r,writable:!0,enumerable:!1}),r}catch(i){}return t[e]=r,r}var o=Object.prototype.hasOwnProperty;e.exports=r},{}],handle:[function(t,e,n){function r(t,e,n,r){o.buffer([t],r),o.emit(t,e,n)}var o=t("ee").get("handle");e.exports=r,r.ee=o},{}],id:[function(t,e,n){function r(t){var e=typeof t;return!t||"object"!==e&&"function"!==e?-1:t===window?0:a(t,i,function(){return o++})}var o=1,i="nr@id",a=t("gos");e.exports=r},{}],loader:[function(t,e,n){function r(){if(!E++){var t=b.info=NREUM.info,e=l.getElementsByTagName("script")[0];if(setTimeout(u.abort,3e4),!(t&&t.licenseKey&&t.applicationID&&e))return u.abort();s(y,function(e,n){t[e]||(t[e]=n)});var n=a();c("mark",["onload",n+b.offset],null,"api"),c("timing",["load",n]);var r=l.createElement("script");r.src="https://"+t.agent,e.parentNode.insertBefore(r,e)}}function o(){"complete"===l.readyState&&i()}function i(){c("mark",["domContent",a()+b.offset],null,"api")}var a=t(22),c=t("handle"),s=t(28),u=t("ee"),f=t(26),d=t(23),p=window,l=p.document,h="addEventListener",m="attachEvent",v=p.XMLHttpRequest,w=v&&v.prototype;if(d(p.location)){NREUM.o={ST:setTimeout,SI:p.setImmediate,CT:clearTimeout,XHR:v,REQ:p.Request,EV:p.Event,PR:p.Promise,MO:p.MutationObserver};var g=""+location,y={beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net",agent:"js-agent.newrelic.com/nr-spa-1208.min.js"},x=v&&w&&w[h]&&!/CriOS/.test(navigator.userAgent),b=e.exports={offset:a.getLastTimestamp(),now:a,origin:g,features:{},xhrWrappable:x,userAgent:f};t(19),t(24),l[h]?(l[h]("DOMContentLoaded",i,!1),p[h]("load",r,!1)):(l[m]("onreadystatechange",o),p[m]("onload",r)),c("mark",["firstbyte",a.getLastTimestamp()],null,"api");var E=0}},{}],"wrap-function":[function(t,e,n){function r(t,e){function n(e,n,r,s,u){function nrWrapper(){var i,a,f,p;try{a=this,i=d(arguments),f="function"==typeof r?r(i,a):r||{}}catch(l){o([l,"",[i,a,s],f],t)}c(n+"start",[i,a,s],f,u);try{return p=e.apply(a,i)}catch(h){throw c(n+"err",[i,a,h],f,u),h}finally{c(n+"end",[i,a,p],f,u)}}return a(e)?e:(n||(n=""),nrWrapper[p]=e,i(e,nrWrapper,t),nrWrapper)}function r(t,e,r,o,i){r||(r="");var c,s,u,f="-"===r.charAt(0);for(u=0;u<e.length;u++)s=e[u],c=t[s],a(c)||(t[s]=n(c,f?s+r:r,o,s,i))}function c(n,r,i,a){if(!h||e){var c=h;h=!0;try{t.emit(n,r,i,e,a)}catch(s){o([s,n,r,i],t)}h=c}}return t||(t=f),n.inPlace=r,n.flag=p,n}function o(t,e){e||(e=f);try{e.emit("internal-error",t)}catch(n){}}function i(t,e,n){if(Object.defineProperty&&Object.keys)try{var r=Object.keys(t);return r.forEach(function(n){Object.defineProperty(e,n,{get:function(){return t[n]},set:function(e){return t[n]=e,e}})}),e}catch(i){o([i],n)}for(var a in t)l.call(t,a)&&(e[a]=t[a]);return e}function a(t){return!(t&&t instanceof Function&&t.apply&&!t[p])}function c(t,e){var n=e(t);return n[p]=t,i(t,n,f),n}function s(t,e,n){var r=t[e];t[e]=c(r,n)}function u(){for(var t=arguments.length,e=new Array(t),n=0;n<t;++n)e[n]=arguments[n];return e}var f=t("ee"),d=t(29),p="nr@original",l=Object.prototype.hasOwnProperty,h=!1;e.exports=r,e.exports.wrapFunction=c,e.exports.wrapInPlace=s,e.exports.argsToArray=u},{}]},{},["loader",2,16,5,3,4]);NREUM.loader_config={accountID:"2668877",trustKey:"2668877",agentID:"539499142",licenseKey:"NRJS-5f2838970e4acf5c9ca",applicationID:"537590825"};NREUM.info={beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net",licenseKey:"NRJS-5f2838970e4acf5c9ca",applicationID:"537590825",sa:1}
`;
    e.s(["NEWRELIC_SNIPPET", 0, t])
}, 56453, e => {
    "use strict";
    e.s(["ApplicationErrorComponent", () => a]);
    var t = e.i(91398),
        r = e.i(53147),
        i = e.i(94182),
        n = e.i(60814);
    let a = (0, n.default)(({
        className: e
    }) => (0, t.jsxs)(t.Fragment, {
        children: [(0, t.jsxs)("section", {
            className: e,
            children: [(0, t.jsx)("div", {
                "data-us-project": "MekbJaIxD2semiAhBBDT",
                style: {
                    width: "100%",
                    height: "100%"
                }
            }), (0, t.jsx)("div", {
                className: "content-container",
                children: (0, t.jsxs)("div", {
                    className: "content",
                    children: [(0, t.jsxs)("p", {
                        children: ["Looks like our server is just taking five.", (0, t.jsx)("br", {}), "Try refreshing or come back in a bit."]
                    }), (0, t.jsx)(r.default, {
                        href: {
                            pathname: "/"
                        },
                        children: "Take me home"
                    })]
                })
            })]
        }), (0, t.jsx)(i.default, {
            src: "https://cdn.unicorn.studio/v1.3.2/unicornStudio.umd.js",
            onLoad: () => {
                window && window.UnicornStudio && (window.UnicornStudio.isInitialized || (window.UnicornStudio.init(), window.UnicornStudio.isInitialized = !0))
            }
        })]
    })).withConfig({
        displayName: "ApplicationErrorComponent",
        componentId: "sc-a20b004d-0"
    })
    `
  position: relative;
  width: 100%:
  height: 100lvh;
  height: 100vh;

  background-color: #000000;
  color: #ffffff;


  .content-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    display: grid;
    justify-content: center;
    align-items: flex-end;
    padding-bottom: 60px;
    
    
    & .content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 24px;

      padding: 120px 16px 0;
      
      @media (min-width: ${({theme:e})=>e.globalV2.md.minWidth}) {
        padding-top: 60px;
        }
        
        p {
          font-size: 1.6rem;
          text-align: center;
          line-height: 1.5;
          
          max-width: 48ch;
          
          @media (min-width: ${({theme:e})=>e.globalV2.xxl.minWidth}) {
            font-size: 1.9rem;
          }
          }
          
          a {
            font-size: 1.6rem;
            color: #ffffff;
            padding: 12px 24px;
            border: 1px solid rgba(255,255,255,0.1);
            border-radius: 24px;
            
            background: rgba(0,0,0,0.45);
            -webkit-backdrop-filter: blur(12px);
            backdrop-filter: blur(12px);
            
            @media (min-width: ${({theme:e})=>e.globalV2.xxl.minWidth}) {
              font-size: 1.9rem;
            }
      }
    }

  }
`
}, 75703, 61281, e => {
    "use strict";
    var t = e.i(91788);
    let r = {
        firstSeen: "",
        preExistingUser: !1,
        sectionVisits: {},
        subsectionVisits: {},
        totalVisits: 0,
        lastVisit: "",
        lastPage: ""
    };
    e.s(["DEFAULT_USER_ANALYTICS", 0, r], 61281);
    let i = {
            data: r,
            isPreExistingUser: !1,
            firstSeen: "",
            totalVisits: 0,
            getSectionVisits: () => 0,
            getSubsectionVisits: () => 0,
            ringVisits: 0,
            ringBuyVisits: 0,
            homeVisits: 0,
            homeBuyVisits: 0
        },
        n = (0, t.createContext)(i);
    e.s(["UserAnalyticsContext", 0, n, "useUserAnalyticsContext", 0, () => {
        let e = (0, t.useContext)(n);
        return e || (console.warn("[UserAnalytics] useUserAnalyticsContext must be used within a UserAnalyticsProvider. Returning default values."), i)
    }], 75703)
}, 73528, e => {
    "use strict";

    function t() {
        return "u" > typeof window
    }

    function r() {
        return "production"
    }

    function i() {
        return (t() ? window.vam : r()) || "production"
    }

    function n() {
        return "production" === i()
    }

    function a() {
        return "development" === i()
    }

    function o(e) {
        return RegExp(`/${e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}(?=[/?#]|$)`)
    }

    function s(e, r, i) {
        var o, s;
        if (!t()) {
            let e = "[Vercel Web Analytics] Please import `track` from `@vercel/analytics/server` when using this function in a server environment";
            if (n()) console.warn(e);
            else throw Error(e);
            return
        }
        if (!r) {
            null == (o = window.va) || o.call(window, "event", {
                name: e,
                options: i
            });
            return
        }
        try {
            let t = function(e, t) {
                if (!e) return;
                let r = e,
                    i = [];
                for (let [n, a] of Object.entries(e)) "object" == typeof a && null !== a && (t.strip ? r = function(e, {
                    [e]: t,
                    ...r
                }) {
                    return r
                }(n, r) : i.push(n));
                if (i.length > 0 && !t.strip) throw Error(`The following properties are not valid: ${i.join(", ")}. Only strings, numbers, booleans, and null are allowed.`);
                return r
            }(r, {
                strip: n()
            });
            null == (s = window.va) || s.call(window, "event", {
                name: e,
                data: t,
                options: i
            })
        } catch (e) {
            e instanceof Error && a() && console.error(e)
        }
    }
    var c = {
        inject: function(e = {
            debug: !0
        }) {
            var i;
            if (!t()) return;
            ! function(e = "auto") {
                if ("auto" === e) {
                    window.vam = r();
                    return
                }
                window.vam = e
            }(e.mode), window.va || (window.va = function(...e) {
                (window.vaq = window.vaq || []).push(e)
            }), e.beforeSend && (null == (i = window.va) || i.call(window, "beforeSend", e.beforeSend));
            let n = e.scriptSrc ? e.scriptSrc : a() ? "https://va.vercel-scripts.com/v1/script.debug.js" : e.basePath ? `${e.basePath}/insights/script.js` : "/_vercel/insights/script.js";
            if (document.head.querySelector(`script[src*="${n}"]`)) return;
            let o = document.createElement("script");
            o.src = n, o.defer = !0, o.dataset.sdkn = "@vercel/analytics" + (e.framework ? `/${e.framework}` : ""), o.dataset.sdkv = "1.6.1", e.disableAutoTrack && (o.dataset.disableAutoTrack = "1"), e.endpoint ? o.dataset.endpoint = e.endpoint : e.basePath && (o.dataset.endpoint = `${e.basePath}/insights`), e.dsn && (o.dataset.dsn = e.dsn), o.onerror = () => {
                let e = a() ? "Please check if any ad blockers are enabled and try again." : "Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";
                console.log(`[Vercel Web Analytics] Failed to load script from ${n}. ${e}`)
            }, a() && !1 === e.debug && (o.dataset.debug = "false"), document.head.appendChild(o)
        },
        track: s,
        computeRoute: function(e, t) {
            if (!e || !t) return e;
            let r = e;
            try {
                let e = Object.entries(t);
                for (let [t, i] of e)
                    if (!Array.isArray(i)) {
                        let e = o(i);
                        e.test(r) && (r = r.replace(e, `/[${t}]`))
                    }
                for (let [t, i] of e)
                    if (Array.isArray(i)) {
                        let e = o(i.join("/"));
                        e.test(r) && (r = r.replace(e, `/[...${t}]`))
                    }
                return r
            } catch (t) {
                return e
            }
        }
    };
    e.s(["default", () => c, "track", () => s])
}, 51172, 31732, e => {
    "use strict";
    var t = e.i(91398),
        r = e.i(75703),
        i = e.i(91788),
        n = e.i(3828),
        a = e.i(73528),
        o = e.i(59207);
    let s = "ultrahuman_user_analytics",
        c = Object.values(o.ShopifyStore).map(e => e.toLowerCase()),
        d = ["bloodVisionIndiaCart", "bloodVisionIndiaPincode", "bloodVisionIndiaCheckoutData"];
    var l = e.i(61281);
    let u = e => {
            try {
                window.localStorage.setItem(s, JSON.stringify(e))
            } catch (e) {
                console.error("[UserAnalytics] Error writing localStorage:", e)
            }
        },
        p = (e, t) => {
            try {
                window.dataLayer ? .push({
                    event: e,
                    ...t
                })
            } catch (e) {
                console.error("[UserAnalytics] Error pushing to dataLayer:", e)
            }
        },
        f = () => {
            let e = window.innerWidth;
            return e < 768 ? "mobile" : e < 1024 ? "tablet" : "desktop"
        };
    e.s(["UserAnalyticsProvider", 0, ({
        children: e
    }) => {
        let o = (() => {
            let e = (0, n.useRouter)(),
                [t, r] = (0, i.useState)(l.DEFAULT_USER_ANALYTICS),
                o = (0, i.useRef)(!1),
                h = (0, i.useRef)(!1),
                m = (0, i.useRef)("");
            (0, i.useEffect)(() => {
                if (h.current) return;
                h.current = !0;
                let e = (() => {
                    try {
                        let e = window.localStorage.getItem(s);
                        return e ? JSON.parse(e) : null
                    } catch (e) {
                        return console.error("[UserAnalytics] Error reading localStorage:", e), null
                    }
                })();
                if (e && e.firstSeen) r(e);
                else {
                    let e, t = (() => {
                            try {
                                for (let e of c) {
                                    let t = `cart_${e}`;
                                    if (window.localStorage.getItem(t)) return !0
                                }
                                if (window.localStorage.getItem("COOKIE_CONSENT")) return !0;
                                for (let e of d)
                                    if (window.localStorage.getItem(e)) return !0;
                                return !1
                            } catch (e) {
                                return console.error("[UserAnalytics] Error checking for existing signals:", e), !1
                            }
                        })(),
                        i = (e = new Date().toISOString(), { ...l.DEFAULT_USER_ANALYTICS,
                            firstSeen: e,
                            preExistingUser: t,
                            totalVisits: +!!t
                        });
                    u(i), r(i);
                    let n = t ? "user_analytics_returning_user" : "user_analytics_new_user",
                        o = t ? "userAnalyticsReturningUser" : "userAnalyticsNewUser",
                        s = {
                            preExistingUser: t,
                            firstSeen: i.firstSeen,
                            device: f()
                        };
                    (0, a.track)(n, s), p(o, s)
                }
            }, []), (0, i.useEffect)(() => {
                let i;
                if (!e.isReady || !t.firstSeen) return;
                let n = e.pathname;
                if (o.current && m.current === n) return;
                o.current = !0, m.current = n;
                let s = "/" === n || "" === n ? "homepage" : n.split("/").filter(Boolean)[0] || "other",
                    c = (i = n.split("/").filter(Boolean)).length >= 2 ? `${i[0]}/${i[1]}` : null,
                    d = new Date().toISOString(),
                    l = !t.sectionVisits[s],
                    h = c && !t.subsectionVisits[c],
                    g = t.preExistingUser && l ? 2 : 1,
                    y = t.preExistingUser && h ? 2 : 1,
                    b = { ...t,
                        totalVisits: t.totalVisits + 1,
                        sectionVisits: { ...t.sectionVisits,
                            [s]: (t.sectionVisits[s] || 0) + g
                        },
                        subsectionVisits: c ? { ...t.subsectionVisits,
                            [c]: (t.subsectionVisits[c] || 0) + y
                        } : t.subsectionVisits,
                        lastVisit: d,
                        lastPage: n
                    };
                u(b), r(b);
                let S = {
                    pathname: n,
                    section: s,
                    subsection: c || "none",
                    totalVisits: b.totalVisits,
                    sectionVisits: b.sectionVisits[s],
                    subsectionVisits: c ? b.subsectionVisits[c] : 0,
                    preExistingUser: b.preExistingUser,
                    device: f()
                };
                (0, a.track)("user_analytics_page_visit", S), p("userAnalyticsPageVisit", S)
            }, [e.isReady, e.pathname, t]), (0, i.useEffect)(() => {
                let t = () => {
                    o.current = !1
                };
                return e.events.on("routeChangeStart", t), () => {
                    e.events.off("routeChangeStart", t)
                }
            }, [e.events]);
            let g = (0, i.useCallback)(e => t.sectionVisits[e] || 0, [t.sectionVisits]),
                y = (0, i.useCallback)(e => t.subsectionVisits[e] || 0, [t.subsectionVisits]);
            return {
                data: t,
                isPreExistingUser: t.preExistingUser,
                firstSeen: t.firstSeen,
                totalVisits: t.totalVisits,
                getSectionVisits: g,
                getSubsectionVisits: y,
                ringVisits: t.sectionVisits.ring || 0,
                ringBuyVisits: t.subsectionVisits["ring/buy"] || 0,
                homeVisits: t.sectionVisits.home || 0,
                homeBuyVisits: t.subsectionVisits["home/buy"] || 0
            }
        })();
        return (0, t.jsx)(r.UserAnalyticsContext.Provider, {
            value: o,
            children: e
        })
    }], 51172), e.s(["emailRegex", 0, /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/], 31732)
}, 27260, e => {
    "use strict";
    e.s(["default", () => a, "useIsCnOPlus", () => n]);
    var t = e.i(91788),
        r = e.i(3115);
    let i = new Set(["US", "GB", "EU", "AU", "CA", "PR", "GU", "VI", "AS", "MP", "UM", "BS", "AG", "NO", "IS", "IM", "BA", "MD", "AL", "SE"]),
        n = () => {
            let {
                region: e
            } = (0, t.useContext)(r.RegionLocaleContext), n = (0, t.useMemo)(() => {
                let t = (e || "").toUpperCase();
                return !t || !i.has(t)
            }, [e]), a = (0, t.useMemo)(() => (e, t) => n ? t : e, [n]);
            return {
                isCnOPlus: n,
                getValue: a
            }
        },
        a = n
}, 98039, e => {
    "use strict";
    var t = e.i(59207),
        r = e.i(82702),
        i = e.i(13458);
    let n = (0, i.buildAccessoryStoreConfig)({
        [t.ShopifyStore.IN]: {
            price: 3799,
            variants: {
                [r.RingSizes.FIVE]: {
                    variantId: "41655339319366",
                    shopifyVariantId: "gid://shopify/ProductVariant/41655339319366",
                    checkoutUrl: "https://ultrahumanstore.myshopify.com/cart/41655339319366:1"
                },
                [r.RingSizes.SIX]: {
                    variantId: "41655339581510",
                    shopifyVariantId: "gid://shopify/ProductVariant/41655339581510",
                    checkoutUrl: "https://ultrahumanstore.myshopify.com/cart/41655339581510:1"
                },
                [r.RingSizes.SEVEN]: {
                    variantId: "41655339876422",
                    shopifyVariantId: "gid://shopify/ProductVariant/41655339876422",
                    checkoutUrl: "https://ultrahumanstore.myshopify.com/cart/7521922023494:1"
                },
                [r.RingSizes.EIGHT]: {
                    variantId: "41655340171334",
                    shopifyVariantId: "gid://shopify/ProductVariant/41655340171334",
                    checkoutUrl: "https://ultrahumanstore.myshopify.com/cart/41655340171334:1"
                },
                [r.RingSizes.NINE]: {
                    variantId: "41655340400710",
                    shopifyVariantId: "gid://shopify/ProductVariant/41655340400710",
                    checkoutUrl: "https://ultrahumanstore.myshopify.com/cart/41655340400710:1"
                },
                [r.RingSizes.TEN]: {
                    variantId: "41655340630086",
                    shopifyVariantId: "gid://shopify/ProductVariant/41655340630086",
                    checkoutUrl: "https://ultrahumanstore.myshopify.com/cart/41655340630086:1"
                },
                [r.RingSizes.ELEVEN]: {
                    variantId: "41655340924998",
                    shopifyVariantId: "gid://shopify/ProductVariant/41655340924998",
                    checkoutUrl: "https://ultrahumanstore.myshopify.com/cart/41655340924998:1"
                },
                [r.RingSizes.TWELVE]: {
                    variantId: "41655341154374",
                    shopifyVariantId: "gid://shopify/ProductVariant/41655341154374",
                    checkoutUrl: "https://ultrahumanstore.myshopify.com/cart/41655341154374:1"
                },
                [r.RingSizes.THIRTEEN]: {
                    variantId: "41655341482054",
                    shopifyVariantId: "gid://shopify/ProductVariant/41655341482054",
                    checkoutUrl: "https://ultrahumanstore.myshopify.com/cart/41655341482054:1"
                },
                [r.RingSizes.FOURTEEN]: {
                    variantId: "41655341711430",
                    shopifyVariantId: "gid://shopify/ProductVariant/41655341711430",
                    checkoutUrl: "https://ultrahumanstore.myshopify.com/cart/41655341711430:1"
                },
                [r.RingSizes.OPEN]: {
                    variantId: "41662070980678",
                    shopifyVariantId: "gid://shopify/ProductVariant/41662070980678",
                    checkoutUrl: "https://ultrahumanstore.myshopify.com/cart/41662070980678:1"
                }
            }
        },
        [t.ShopifyStore.AE]: {
            price: 169,
            variants: {
                [r.RingSizes.FIVE]: {
                    variantId: "45975073292530",
                    shopifyVariantId: "gid://shopify/ProductVariant/45975073292530",
                    checkoutUrl: "https://ultrahuman-mena.myshopify.com/cart/45975073292530:1"
                },
                [r.RingSizes.SIX]: {
                    variantId: "45975073489138",
                    shopifyVariantId: "gid://shopify/ProductVariant/45975073489138",
                    checkoutUrl: "https://ultrahuman-mena.myshopify.com/cart/45975073489138:1"
                },
                [r.RingSizes.SEVEN]: {
                    variantId: "45975073685746",
                    shopifyVariantId: "gid://shopify/ProductVariant/45975073685746",
                    checkoutUrl: "https://ultrahuman-mena.myshopify.com/cart/45975073685746:1"
                },
                [r.RingSizes.EIGHT]: {
                    variantId: "45975073882354",
                    shopifyVariantId: "gid://shopify/ProductVariant/45975073882354",
                    checkoutUrl: "https://ultrahuman-mena.myshopify.com/cart/45975073882354:1"
                },
                [r.RingSizes.NINE]: {
                    variantId: "45975074078962",
                    shopifyVariantId: "gid://shopify/ProductVariant/45975074078962",
                    checkoutUrl: "https://ultrahuman-mena.myshopify.com/cart/45975074078962:1"
                },
                [r.RingSizes.TEN]: {
                    variantId: "45975074275570",
                    shopifyVariantId: "gid://shopify/ProductVariant/45975074275570",
                    checkoutUrl: "https://ultrahuman-mena.myshopify.com/cart/45975074275570:1"
                },
                [r.RingSizes.ELEVEN]: {
                    variantId: "45975074472178",
                    shopifyVariantId: "gid://shopify/ProductVariant/45975074472178",
                    checkoutUrl: "https://ultrahuman-mena.myshopify.com/cart/45975074472178:1"
                },
                [r.RingSizes.TWELVE]: {
                    variantId: "45975074668786",
                    shopifyVariantId: "gid://shopify/ProductVariant/45975074668786",
                    checkoutUrl: "https://ultrahuman-mena.myshopify.com/cart/45975074668786:1"
                },
                [r.RingSizes.THIRTEEN]: {
                    variantId: "45975074865394",
                    shopifyVariantId: "gid://shopify/ProductVariant/45975074865394",
                    checkoutUrl: "https://ultrahuman-mena.myshopify.com/cart/45975074865394:1"
                },
                [r.RingSizes.FOURTEEN]: {
                    variantId: "45975075062002",
                    shopifyVariantId: "gid://shopify/ProductVariant/45975075062002",
                    checkoutUrl: "https://ultrahuman-mena.myshopify.com/cart/45975075062002:1"
                },
                [r.RingSizes.OPEN]: {
                    variantId: "45988381950194",
                    shopifyVariantId: "gid://shopify/ProductVariant/45988381950194",
                    checkoutUrl: "https://ultrahuman-mena.myshopify.com/cart/45988381950194:1"
                }
            }
        },
        [t.ShopifyStore.US]: {
            price: 45,
            variants: {
                [r.RingSizes.FIVE]: {
                    variantId: "40810822762592",
                    shopifyVariantId: "gid://shopify/ProductVariant/40810822762592",
                    checkoutUrl: "https://stelcore-x-ultrahuman.myshopify.com/cart/40810822762592:1"
                },
                [r.RingSizes.SIX]: {
                    variantId: "40810822795360",
                    shopifyVariantId: "gid://shopify/ProductVariant/40810822795360",
                    checkoutUrl: "https://stelcore-x-ultrahuman.myshopify.com/cart/40810822795360:1"
                },
                [r.RingSizes.SEVEN]: {
                    variantId: "40810822828128",
                    shopifyVariantId: "gid://shopify/ProductVariant/40810822828128",
                    checkoutUrl: "https://stelcore-x-ultrahuman.myshopify.com/cart/40810822828128:1"
                },
                [r.RingSizes.EIGHT]: {
                    variantId: "40810822860896",
                    shopifyVariantId: "gid://shopify/ProductVariant/40810822860896",
                    checkoutUrl: "https://stelcore-x-ultrahuman.myshopify.com/cart/40810822860896:1"
                },
                [r.RingSizes.NINE]: {
                    variantId: "40810822893664",
                    shopifyVariantId: "gid://shopify/ProductVariant/40810822893664",
                    checkoutUrl: "https://stelcore-x-ultrahuman.myshopify.com/cart/40810822893664:1"
                },
                [r.RingSizes.TEN]: {
                    variantId: "40810822926432",
                    shopifyVariantId: "gid://shopify/ProductVariant/40810822926432",
                    checkoutUrl: "https://stelcore-x-ultrahuman.myshopify.com/cart/40810822926432:1"
                },
                [r.RingSizes.ELEVEN]: {
                    variantId: "40810822959200",
                    shopifyVariantId: "gid://shopify/ProductVariant/40810822959200",
                    checkoutUrl: "https://stelcore-x-ultrahuman.myshopify.com/cart/40810822959200:1"
                },
                [r.RingSizes.TWELVE]: {
                    variantId: "40810822991968",
                    shopifyVariantId: "gid://shopify/ProductVariant/40810822991968",
                    checkoutUrl: "https://stelcore-x-ultrahuman.myshopify.com/cart/40810822991968:1"
                },
                [r.RingSizes.THIRTEEN]: {
                    variantId: "40810823024736",
                    shopifyVariantId: "gid://shopify/ProductVariant/40810823024736",
                    checkoutUrl: "https://stelcore-x-ultrahuman.myshopify.com/cart/40810823024736:1"
                },
                [r.RingSizes.FOURTEEN]: {
                    variantId: "40810823057504",
                    shopifyVariantId: "gid://shopify/ProductVariant/40810823057504",
                    checkoutUrl: "https://stelcore-x-ultrahuman.myshopify.com/cart/40810823057504:1"
                },
                [r.RingSizes.OPEN]: {
                    variantId: "40818980356192",
                    shopifyVariantId: "gid://shopify/ProductVariant/40818980356192",
                    checkoutUrl: "https://stelcore-x-ultrahuman.myshopify.com/cart/40818980356192:1"
                }
            }
        },
        [t.ShopifyStore.CA]: {
            price: 69
        },
        [t.ShopifyStore.ROW]: {
            price: 45,
            variants: {
                [r.RingSizes.FIVE]: {
                    variantId: "41619116523580",
                    shopifyVariantId: "gid://shopify/ProductVariant/41619116523580",
                    checkoutUrl: "https://ultrahuman-us.myshopify.com/cart/41619116523580:1"
                },
                [r.RingSizes.SIX]: {
                    variantId: "41619116720188",
                    shopifyVariantId: "gid://shopify/ProductVariant/41619116720188",
                    checkoutUrl: "https://ultrahuman-us.myshopify.com/cart/41619116720188:1"
                },
                [r.RingSizes.SEVEN]: {
                    variantId: "41619116916796",
                    shopifyVariantId: "gid://shopify/ProductVariant/41619116916796",
                    checkoutUrl: "https://ultrahuman-us.myshopify.com/cart/41619116916796:1"
                },
                [r.RingSizes.EIGHT]: {
                    variantId: "41619117113404",
                    shopifyVariantId: "gid://shopify/ProductVariant/41619117113404",
                    checkoutUrl: "https://ultrahuman-us.myshopify.com/cart/41619117113404:1"
                },
                [r.RingSizes.NINE]: {
                    variantId: "41619117310012",
                    shopifyVariantId: "gid://shopify/ProductVariant/41619117310012",
                    checkoutUrl: "https://ultrahuman-us.myshopify.com/cart/41619117310012:1"
                },
                [r.RingSizes.TEN]: {
                    variantId: "41619117506620",
                    shopifyVariantId: "gid://shopify/ProductVariant/41619117506620",
                    checkoutUrl: "https://ultrahuman-us.myshopify.com/cart/41619117506620:1"
                },
                [r.RingSizes.ELEVEN]: {
                    variantId: "41619117703228",
                    shopifyVariantId: "gid://shopify/ProductVariant/41619117703228",
                    checkoutUrl: "https://ultrahuman-us.myshopify.com/cart/41619117703228:1"
                },
                [r.RingSizes.TWELVE]: {
                    variantId: "41619117899836",
                    shopifyVariantId: "gid://shopify/ProductVariant/41619117899836",
                    checkoutUrl: "https://ultrahuman-us.myshopify.com/cart/41619117899836:1"
                },
                [r.RingSizes.THIRTEEN]: {
                    variantId: "41619118096444",
                    shopifyVariantId: "gid://shopify/ProductVariant/41619118096444",
                    checkoutUrl: "https://ultrahuman-us.myshopify.com/cart/41619118096444:1"
                },
                [r.RingSizes.FOURTEEN]: {
                    variantId: "41619118293052",
                    shopifyVariantId: "gid://shopify/ProductVariant/41619118293052",
                    checkoutUrl: "https://ultrahuman-us.myshopify.com/cart/41619118293052:1"
                },
                [r.RingSizes.OPEN]: {
                    variantId: "41630148132924",
                    shopifyVariantId: "gid://shopify/ProductVariant/41630148132924",
                    checkoutUrl: "https://ultrahuman-us.myshopify.com/cart/41630148132924:1"
                }
            }
        },
        [t.ShopifyStore.EU]: {
            price: 42,
            variants: {
                [r.RingSizes.FIVE]: {
                    variantId: "49621428109630",
                    shopifyVariantId: "gid://shopify/ProductVariant/49621428109630",
                    checkoutUrl: "https://ultrahuman-eu-uk.myshopify.com/cart/49621428109630:1?channel=buy_button"
                },
                [r.RingSizes.SIX]: {
                    variantId: "49621428273470",
                    shopifyVariantId: "gid://shopify/ProductVariant/49621428273470",
                    checkoutUrl: "https://ultrahuman-eu-uk.myshopify.com/cart/49621428273470:1?channel=buy_button"
                },
                [r.RingSizes.SEVEN]: {
                    variantId: "49621428437310",
                    shopifyVariantId: "gid://shopify/ProductVariant/49621428437310",
                    checkoutUrl: "https://ultrahuman-eu-uk.myshopify.com/cart/49621428437310:1?channel=buy_button"
                },
                [r.RingSizes.EIGHT]: {
                    variantId: "49621428699454",
                    shopifyVariantId: "gid://shopify/ProductVariant/49621428699454",
                    checkoutUrl: "https://ultrahuman-eu-uk.myshopify.com/cart/49621428699454:1?channel=buy_button"
                },
                [r.RingSizes.NINE]: {
                    variantId: "49621429190974",
                    shopifyVariantId: "gid://shopify/ProductVariant/49621429190974",
                    checkoutUrl: "https://ultrahuman-eu-uk.myshopify.com/cart/49621429190974:1?channel=buy_button"
                },
                [r.RingSizes.TEN]: {
                    variantId: "49621429551422",
                    shopifyVariantId: "gid://shopify/ProductVariant/49621429551422",
                    checkoutUrl: "https://ultrahuman-eu-uk.myshopify.com/cart/49621429551422:1?channel=buy_button"
                },
                [r.RingSizes.ELEVEN]: {
                    variantId: "49621429715262",
                    shopifyVariantId: "gid://shopify/ProductVariant/49621429715262",
                    checkoutUrl: "https://ultrahuman-eu-uk.myshopify.com/cart/49621429715262:1?channel=buy_button"
                },
                [r.RingSizes.TWELVE]: {
                    variantId: "49621429879102",
                    shopifyVariantId: "gid://shopify/ProductVariant/49621429879102",
                    checkoutUrl: "https://ultrahuman-eu-uk.myshopify.com/cart/49621429879102:1?channel=buy_button"
                },
                [r.RingSizes.THIRTEEN]: {
                    variantId: "49621430042942",
                    shopifyVariantId: "gid://shopify/ProductVariant/49621430042942",
                    checkoutUrl: "https://ultrahuman-eu-uk.myshopify.com/cart/49621430042942:1?channel=buy_button"
                },
                [r.RingSizes.FOURTEEN]: {
                    variantId: "49621430206782",
                    shopifyVariantId: "gid://shopify/ProductVariant/49621430206782",
                    checkoutUrl: "https://ultrahuman-eu-uk.myshopify.com/cart/49621430206782:1?channel=buy_button"
                },
                [r.RingSizes.OPEN]: {
                    variantId: "49633970487614",
                    shopifyVariantId: "gid://shopify/ProductVariant/49633970487614",
                    checkoutUrl: "https://ultrahuman-eu-uk.myshopify.com/cart/49633970487614:1?channel=buy_button"
                }
            }
        },
        [t.ShopifyStore.GB]: {
            price: 39
        },
        [t.ShopifyStore.AU]: {
            price: 69
        },
        [t.ShopifyStore.SA]: {
            price: 194
        },
        [t.ShopifyStore.MX]: {
            price: 761
        },
        [t.ShopifyStore.ZA]: {
            price: 999
        }
    });
    (0, i.buildAccessoryStoreConfig)({
        [t.ShopifyStore.IN]: {
            price: 3799,
            variants: {
                [r.RingSizes.FIVE]: {
                    variantId: "40570026983497",
                    shopifyVariantId: "gid://shopify/ProductVariant/40570026983497",
                    checkoutUrl: "https://ultrahuman-mena.myshopify.com/cart/40570026983497:1"
                },
                [r.RingSizes.SIX]: {
                    variantId: "40570026983497",
                    shopifyVariantId: "gid://shopify/ProductVariant/40570026983497",
                    checkoutUrl: "https://ultrahuman-mena.myshopify.com/cart/40570026983497:1"
                },
                [r.RingSizes.SEVEN]: {
                    variantId: "40570026983497",
                    shopifyVariantId: "gid://shopify/ProductVariant/40570026983497",
                    checkoutUrl: "https://ultrahuman-mena.myshopify.com/cart/40570026983497:1"
                },
                [r.RingSizes.EIGHT]: {
                    variantId: "40570026983497",
                    shopifyVariantId: "gid://shopify/ProductVariant/40570026983497",
                    checkoutUrl: "https://ultrahuman-mena.myshopify.com/cart/40570026983497:1"
                },
                [r.RingSizes.NINE]: {
                    variantId: "40570026983497",
                    shopifyVariantId: "gid://shopify/ProductVariant/40570026983497",
                    checkoutUrl: "https://ultrahuman-mena.myshopify.com/cart/40570026983497:1"
                },
                [r.RingSizes.TEN]: {
                    variantId: "40570026983497",
                    shopifyVariantId: "gid://shopify/ProductVariant/40570026983497",
                    checkoutUrl: "https://ultrahuman-mena.myshopify.com/cart/40570026983497:1"
                },
                [r.RingSizes.ELEVEN]: {
                    variantId: "40570026983497",
                    shopifyVariantId: "gid://shopify/ProductVariant/40570026983497",
                    checkoutUrl: "https://ultrahuman-mena.myshopify.com/cart/40570026983497:1"
                },
                [r.RingSizes.TWELVE]: {
                    variantId: "40570026983497",
                    shopifyVariantId: "gid://shopify/ProductVariant/40570026983497",
                    checkoutUrl: "https://ultrahuman-mena.myshopify.com/cart/40570026983497:1"
                },
                [r.RingSizes.THIRTEEN]: {
                    variantId: "40570026983497",
                    shopifyVariantId: "gid://shopify/ProductVariant/40570026983497",
                    checkoutUrl: "https://ultrahuman-mena.myshopify.com/cart/40570026983497:1"
                },
                [r.RingSizes.FOURTEEN]: {
                    variantId: "40570026983497",
                    shopifyVariantId: "gid://shopify/ProductVariant/40570026983497",
                    checkoutUrl: "https://ultrahuman-mena.myshopify.com/cart/40570026983497:1"
                },
                [r.RingSizes.OPEN]: {
                    variantId: "40570026983497",
                    shopifyVariantId: "gid://shopify/ProductVariant/40570026983497",
                    checkoutUrl: "https://ultrahuman-mena.myshopify.com/cart/40570026983497:1"
                }
            }
        },
        [t.ShopifyStore.AE]: {
            price: 169
        },
        [t.ShopifyStore.US]: {
            price: 45
        },
        [t.ShopifyStore.CA]: {
            price: 69
        },
        [t.ShopifyStore.ROW]: {
            price: 45
        },
        [t.ShopifyStore.EU]: {
            price: 42
        },
        [t.ShopifyStore.GB]: {
            price: 39
        },
        [t.ShopifyStore.AU]: {
            price: 69
        },
        [t.ShopifyStore.SA]: {
            price: 194
        },
        [t.ShopifyStore.MX]: {
            price: 761
        },
        [t.ShopifyStore.ZA]: {
            price: 999
        }
    }), e.s(["TravelChargerShopifyMap", 0, n])
}, 7506, 13886, 69642, 9603, 32150, 98643, e => {
    "use strict";
    e.i(50461);
    var t, r, i, n, a = e.i(44212),
        o = e.i(59207);
    (t = {}).ENGRAVED = "ENGRAVED", t.NOT_ENGRAVED = "NOT_ENGRAVED";
    let s = {
            [o.ShopifyStore.IN]: {
                variantId: "43833414910022",
                shopifyVariantId: "gid://shopify/ProductVariant/43833414910022",
                checkoutUrl: "https://ultrahumanstore.myshopify.com/cart/43833414910022:1?channel=buy_button",
                price: 0
            },
            [o.ShopifyStore.AE]: {
                variantId: "62134118777203",
                shopifyVariantId: "gid://shopify/ProductVariant/62134118777203",
                checkoutUrl: "https://ultrahuman-mena.myshopify.com/cart/62134118777203:1?channel=buy_button",
                price: 0
            },
            [o.ShopifyStore.ROW]: {
                variantId: "43522202304572",
                shopifyVariantId: "gid://shopify/ProductVariant/43522202304572",
                checkoutUrl: "https://ultrahuman-us.myshopify.com/cart/43522202304572:1?channel=buy_button",
                price: 0
            },
            [o.ShopifyStore.US]: {
                variantId: "42309890932832",
                shopifyVariantId: "gid://shopify/ProductVariant/42309890932832",
                checkoutUrl: "https://stelcore-x-ultrahuman.myshopify.com/cart/42309890932832:1?channel=buy_button",
                price: 0
            },
            [o.ShopifyStore.CA]: {
                variantId: "42309890932832",
                shopifyVariantId: "gid://shopify/ProductVariant/42309890932832",
                checkoutUrl: "https://stelcore-x-ultrahuman.myshopify.com/cart/42309890932832:1?channel=buy_button",
                price: 0
            },
            [o.ShopifyStore.EU]: {
                variantId: "56326679527798",
                shopifyVariantId: "gid://shopify/ProductVariant/56326679527798",
                checkoutUrl: "https://ultrahuman-eu-uk.myshopify.com/cart/56326679527798:1?channel=buy_button",
                price: 0
            },
            [o.ShopifyStore.AU]: {
                variantId: "56326679527798",
                shopifyVariantId: "gid://shopify/ProductVariant/56326679527798",
                checkoutUrl: "https://ultrahuman-eu-uk.myshopify.com/cart/56326679527798:1?channel=buy_button",
                price: 0
            },
            [o.ShopifyStore.GB]: {
                variantId: "56326679527798",
                shopifyVariantId: "gid://shopify/ProductVariant/56326679527798",
                checkoutUrl: "https://ultrahuman-eu-uk.myshopify.com/cart/56326679527798:1?channel=buy_button",
                price: 0
            },
            [o.ShopifyStore.SA]: {},
            [o.ShopifyStore.MX]: {},
            [o.ShopifyStore.ZA]: {}
        },
        c = {
            [o.ShopifyStore.IN]: {
                variantId: "43833452134470",
                shopifyVariantId: "gid://shopify/ProductVariant/43833452134470",
                checkoutUrl: "https://ultrahumanstore.myshopify.com/cart/43833452134470:1?channel=buy_button",
                price: 0
            },
            [o.ShopifyStore.AE]: {
                variantId: "62134128509299",
                shopifyVariantId: "gid://shopify/ProductVariant/62134128509299",
                checkoutUrl: "https://ultrahuman-mena.myshopify.com/cart/62134128509299:1?channel=buy_button",
                price: 0
            },
            [o.ShopifyStore.ROW]: {
                variantId: "43522201714748",
                shopifyVariantId: "gid://shopify/ProductVariant/43522201714748",
                checkoutUrl: "https://ultrahuman-us.myshopify.com/cart/43522201714748:1?channel=buy_button",
                price: 0
            },
            [o.ShopifyStore.US]: {
                variantId: "42309886836832",
                shopifyVariantId: "gid://shopify/ProductVariant/42309886836832",
                checkoutUrl: "https://stelcore-x-ultrahuman.myshopify.com/cart/42309886836832:1?channel=buy_button",
                price: 0
            },
            [o.ShopifyStore.CA]: {
                variantId: "42309886836832",
                shopifyVariantId: "gid://shopify/ProductVariant/42309886836832",
                checkoutUrl: "https://stelcore-x-ultrahuman.myshopify.com/cart/42309886836832:1?channel=buy_button",
                price: 0
            },
            [o.ShopifyStore.EU]: {
                variantId: "56326717735286",
                shopifyVariantId: "gid://shopify/ProductVariant/56326717735286",
                checkoutUrl: "https://ultrahuman-eu-uk.myshopify.com/cart/56326717735286:1?channel=buy_button",
                price: 0
            },
            [o.ShopifyStore.AU]: {
                variantId: "56326717735286",
                shopifyVariantId: "gid://shopify/ProductVariant/56326717735286",
                checkoutUrl: "https://ultrahuman-eu-uk.myshopify.com/cart/56326717735286:1?channel=buy_button",
                price: 0
            },
            [o.ShopifyStore.GB]: {
                variantId: "56326717735286",
                shopifyVariantId: "gid://shopify/ProductVariant/56326717735286",
                checkoutUrl: "https://ultrahuman-eu-uk.myshopify.com/cart/56326717735286:1?channel=buy_button",
                price: 0
            },
            [o.ShopifyStore.SA]: {},
            [o.ShopifyStore.MX]: {},
            [o.ShopifyStore.ZA]: {}
        };
    var d = ((r = {}).DESERT_ROSE = "DESERT_ROSE", r.DESERT_SNOW = "DESERT_SNOW", r.DUNE = "DUNE", r);
    let l = {
            [o.ShopifyStore.IN]: {
                DESERT_ROSE: {
                    striked_price: 189999,
                    price: 189999,
                    tax_incl: !0
                },
                DESERT_SNOW: {
                    striked_price: 219999,
                    price: 219999,
                    tax_incl: !0
                },
                DUNE: {
                    striked_price: 189999,
                    price: 189999,
                    tax_incl: !0
                }
            },
            [o.ShopifyStore.ROW]: {
                DESERT_ROSE: {
                    striked_price: 1799,
                    price: 1799,
                    tax_incl: !1
                },
                DESERT_SNOW: {
                    striked_price: 1999,
                    price: 1999,
                    tax_incl: !1
                },
                DUNE: {
                    striked_price: 1799,
                    price: 1799,
                    tax_incl: !1
                }
            },
            [o.ShopifyStore.US]: {
                DESERT_ROSE: {
                    striked_price: 1799,
                    price: 1799,
                    tax_incl: !1
                },
                DESERT_SNOW: {
                    striked_price: 1999,
                    price: 1999,
                    tax_incl: !1
                },
                DUNE: {
                    striked_price: 1799,
                    price: 1799,
                    tax_incl: !1
                }
            },
            [o.ShopifyStore.SA]: {
                DESERT_ROSE: {
                    striked_price: 7799,
                    price: 7799,
                    tax_incl: !1
                },
                DESERT_SNOW: {
                    striked_price: 8599,
                    price: 8599,
                    tax_incl: !1
                },
                DUNE: {
                    striked_price: 7799,
                    price: 7799,
                    tax_incl: !1
                }
            },
            [o.ShopifyStore.MX]: {
                DESERT_ROSE: {
                    striked_price: 38999,
                    price: 38999,
                    tax_incl: !1
                },
                DESERT_SNOW: {
                    striked_price: 42999,
                    price: 42999,
                    tax_incl: !1
                },
                DUNE: {
                    striked_price: 38999,
                    price: 38999,
                    tax_incl: !1
                }
            },
            [o.ShopifyStore.CA]: {
                DESERT_ROSE: {
                    striked_price: 2499,
                    price: 2499,
                    tax_incl: !1
                },
                DESERT_SNOW: {
                    striked_price: 2799,
                    price: 2799,
                    tax_incl: !1
                },
                DUNE: {
                    striked_price: 2499,
                    price: 2499,
                    tax_incl: !1
                }
            },
            [o.ShopifyStore.AE]: {
                DESERT_ROSE: {
                    striked_price: 6599,
                    price: 6599,
                    tax_incl: !1
                },
                DESERT_SNOW: {
                    striked_price: 7299,
                    price: 7299,
                    tax_incl: !1
                },
                DUNE: {
                    striked_price: 6599,
                    price: 6599,
                    tax_incl: !1
                }
            },
            [o.ShopifyStore.GB]: {
                DESERT_ROSE: {
                    striked_price: 1599,
                    price: 1599,
                    tax_incl: !0
                },
                DESERT_SNOW: {
                    striked_price: 1799,
                    price: 1799,
                    tax_incl: !0
                },
                DUNE: {
                    striked_price: 1599,
                    price: 1599,
                    tax_incl: !0
                }
            },
            [o.ShopifyStore.EU]: {
                DESERT_ROSE: {
                    striked_price: 1839,
                    price: 1839,
                    tax_incl: !0
                },
                DESERT_SNOW: {
                    striked_price: 2039,
                    price: 2039,
                    tax_incl: !0
                },
                DUNE: {
                    striked_price: 1839,
                    price: 1839,
                    tax_incl: !0
                }
            },
            [o.ShopifyStore.AU]: {
                DESERT_ROSE: {
                    striked_price: 2999,
                    price: 2999,
                    tax_incl: !0
                },
                DESERT_SNOW: {
                    striked_price: 3349,
                    price: 3349,
                    tax_incl: !0
                },
                DUNE: {
                    striked_price: 2999,
                    price: 2999,
                    tax_incl: !0
                }
            },
            [o.ShopifyStore.ZA]: {
                DESERT_ROSE: {
                    striked_price: 39999,
                    price: 39999,
                    tax_incl: !0
                },
                DESERT_SNOW: {
                    striked_price: 44999,
                    price: 44999,
                    tax_incl: !0
                },
                DUNE: {
                    striked_price: 39999,
                    price: 39999,
                    tax_incl: !0
                }
            }
        },
        u = {
            [o.ShopifyStore.IN]: {
                variantId: "43833416941638",
                shopifyVariantId: "gid://shopify/ProductVariant/43833416941638",
                checkoutUrl: "https://ultrahumanstore.myshopify.com/cart/43833416941638:1?channel=buy_button",
                price: 0
            },
            [o.ShopifyStore.AE]: {
                variantId: "62134123495795",
                shopifyVariantId: "gid://shopify/ProductVariant/62134123495795",
                checkoutUrl: "https://ultrahuman-mena.myshopify.com/cart/62134123495795:1?channel=buy_button",
                price: 0
            },
            [o.ShopifyStore.ROW]: {
                variantId: "43522199814204",
                shopifyVariantId: "gid://shopify/ProductVariant/43522199814204",
                checkoutUrl: "https://ultrahuman-us.myshopify.com/cart/43522199814204:1?channel=buy_button",
                price: 0
            },
            [o.ShopifyStore.US]: {
                variantId: "42309887918176",
                shopifyVariantId: "gid://shopify/ProductVariant/42309887918176",
                checkoutUrl: "https://stelcore-x-ultrahuman.myshopify.com/cart/42309887918176:1?channel=buy_button",
                price: 0
            },
            [o.ShopifyStore.CA]: {
                variantId: "42309887918176",
                shopifyVariantId: "gid://shopify/ProductVariant/42309887918176",
                checkoutUrl: "https://stelcore-x-ultrahuman.myshopify.com/cart/42309887918176:1?channel=buy_button",
                price: 0
            },
            [o.ShopifyStore.EU]: {
                variantId: "56326701613430",
                shopifyVariantId: "gid://shopify/ProductVariant/56326701613430",
                checkoutUrl: "https://ultrahuman-eu-uk.myshopify.com/cart/56326701613430:1?channel=buy_button",
                price: 0
            },
            [o.ShopifyStore.AU]: {
                variantId: "56326701613430",
                shopifyVariantId: "gid://shopify/ProductVariant/56326701613430",
                checkoutUrl: "https://ultrahuman-eu-uk.myshopify.com/cart/56326701613430:1?channel=buy_button",
                price: 0
            },
            [o.ShopifyStore.GB]: {
                variantId: "56326701613430",
                shopifyVariantId: "gid://shopify/ProductVariant/56326701613430",
                checkoutUrl: "https://ultrahuman-eu-uk.myshopify.com/cart/56326701613430:1?channel=buy_button",
                price: 0
            },
            [o.ShopifyStore.SA]: {},
            [o.ShopifyStore.MX]: {},
            [o.ShopifyStore.ZA]: {}
        },
        p = new a.default({
            DESERT_ROSE: "rare_desert_rose",
            DESERT_SNOW: "rare_desert_snow",
            DUNE: "rare_dune"
        }),
        f = {
            [o.ShopifyStore.IN]: ["gid://shopify/Product/7815889289286", "gid://shopify/Product/7815889748038", "gid://shopify/Product/7815890042950", "gid://shopify/Product/7961932398662"],
            [o.ShopifyStore.AE]: ["gid://shopify/Product/15185477435763", "gid://shopify/Product/15185478189427", "gid://shopify/Product/15185478517107", "gid://shopify/Product/15185478680947"],
            [o.ShopifyStore.ROW]: ["gid://shopify/Product/7958184198204", "gid://shopify/Product/7958185803836", "gid://shopify/Product/7958186426428", "gid://shopify/Product/8675030761532"],
            [o.ShopifyStore.US]: ["gid://shopify/Product/7330073149536", "gid://shopify/Product/7330073673824", "gid://shopify/Product/7330073739360", "gid://shopify/Product/7512955617376"],
            [o.ShopifyStore.EU]: ["gid://shopify/Product/15120462020982", "gid://shopify/Product/15120467722614", "gid://shopify/Product/7815890042950", "gid://shopify/Product/15120468836726"],
            [o.ShopifyStore.GB]: ["gid://shopify/Product/15120462020982", "gid://shopify/Product/15120467722614", "gid://shopify/Product/7815890042950", "gid://shopify/Product/15120468836726"],
            [o.ShopifyStore.AU]: ["gid://shopify/Product/15120462020982", "gid://shopify/Product/15120467722614", "gid://shopify/Product/7815890042950", "gid://shopify/Product/15120468836726"],
            [o.ShopifyStore.CA]: ["gid://shopify/Product/7330073149536", "gid://shopify/Product/7330073673824", "gid://shopify/Product/7330073739360", "gid://shopify/Product/7512955617376"],
            [o.ShopifyStore.SA]: ["gid://shopify/Product/15120462020982", "gid://shopify/Product/15120467722614", "gid://shopify/Product/7815890042950", "gid://shopify/Product/15120468836726"],
            [o.ShopifyStore.MX]: ["gid://shopify/Product/15120462020982", "gid://shopify/Product/15120467722614", "gid://shopify/Product/7815890042950", "gid://shopify/Product/15120468836726"],
            [o.ShopifyStore.ZA]: ["gid://shopify/Product/15120462020982", "gid://shopify/Product/15120467722614", "gid://shopify/Product/7815890042950", "gid://shopify/Product/15120468836726"]
        },
        h = {
            desert_rose: "DESERT_ROSE",
            desert_snow: "DESERT_SNOW",
            dune: "DUNE"
        };
    (i = {}).OG = "OG", i.DARK_MOON = "DARK_MOON", i.TRAVEL_CHARGER = "TRAVEL_CHARGER";
    var m = ((n = {}).BETTER_HELP_CHECKOUT = "BETTER_HELP_CHECKOUT", n);
    e.s(["ApiToFrontendRareColorMap", 0, h, "MiscRingCheckoutTypes", () => m, "RARE_COLOR_ORDER", 0, ["DESERT_ROSE", "DESERT_SNOW", "DUNE"], "RareColorNameImages", 0, {
        DESERT_ROSE: {
            image: "web_v2/rare-buy/renders/desert-rose/1-dr.png/w_400",
            name: "Desert Rose",
            tag: null
        },
        DESERT_SNOW: {
            image: "web_v2/rare-buy/renders/desert-snow/1-ds.png/w_400",
            name: "Desert Snow",
            tag: null
        },
        DUNE: {
            image: "web_v2/rare-buy/renders/dune/1-dn.png/w_400",
            name: "Dune",
            tag: null
        }
    }, "RareColorNameLargeImages", 0, {
        DESERT_ROSE: {
            image: "web_v2/illustrations/desert_rose_tracking.png/w_1000",
            name: "Desert Rose",
            tag: null
        },
        DESERT_SNOW: {
            image: "web_v2/illustrations/desert_snow_tracking.png/w_1000",
            name: "Desert Snow",
            tag: null
        },
        DUNE: {
            image: "web_v2/illustrations/dune_tracking.png/w_1000",
            name: "Dune",
            tag: null
        }
    }, "RareColors", () => d, "RarePowerPlugsBundleShopifyMap", 0, c, "RarePriceData", 0, l, "RareRingAndRelatedProductsIdMap", 0, f, "RareSizingKitShopifyMap", 0, s, "RareUhxLifetimeShopifyMap", 0, u, "getFullRareColorIdentifier", 0, e => {
        let t = h[e];
        return t ? p.get(t) : null
    }, "isRareRingColor", 0, e => !!e.startsWith("rare_") || e in h], 7506);
    var g = e.i(91398),
        y = e.i(60814),
        b = e.i(33535);
    let S = (0, y.default)(({
        className: e,
        onClose: t,
        isLoading: r
    }) => (0, g.jsxs)("div", {
        className: e,
        children: ["Your Bag", (0, g.jsx)("button", {
            className: "close-btn",
            onClick: t,
            children: (0, g.jsx)(b.CrossDark, {})
        }), r && (0, g.jsx)("div", {
            className: "loading-bar"
        })]
    })).withConfig({
        displayName: "CartHeader",
        componentId: "sc-1869943c-0"
    })
    `
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  box-sizing: content-box;
  border-bottom: var(--seperator-border);
  margin: 16px 12px;
  padding-bottom: 16px;

  @media (min-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
    margin: 20px 16px 16px;
    font-size: 24px;
  }

  .close-btn {
    height: 100%;
    border: none;
    background: transparent;
    align-items: center;

    svg,
    img {
      width: 16px;
      height: auto;
    }
  }

  .loading-bar {
    width: 100%;
    padding: 5px;
    background: linear-gradient(
      90deg,
      #057ff0 0%,
      rgba(5, 127, 240, 0.3) 50%,
      #057ff0 100%
    );
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite;

    position: absolute;
    top: 0;
    left: 0;
  }

  @keyframes shimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }
`;
    e.s(["CartHeader", 0, S], 13886);
    var x = e.i(72753),
        v = e.i(5793),
        _ = e.i(88328),
        w = e.i(1814);
    let E = (0, y.default)(({
        className: e,
        item: t,
        currencyCode: r,
        isLoading: i = !1,
        hideQuantityControls: n = !1,
        onUpdateQuantity: a,
        onRemove: o
    }) => {
        let s = t.node.discountAllocations.reduce((e, t) => e + parseFloat(t.discountedAmount.amount), 0),
            c = t.node.attributes.find(e => "engraving" === e.key),
            d = c ? .value ? ? "";
        return (0, g.jsxs)("div", {
            className: e,
            children: [(0, g.jsx)("div", {
                className: "image-container",
                children: t.node.merchandise.image ? .url && (0, g.jsx)("img", {
                    src: `${t.node.merchandise.image.url}${t.node.merchandise.image.url.includes("?")?"&width=800":"?width=800"}`,
                    alt: t.node.merchandise.product.title ? ? ""
                })
            }), (0, g.jsxs)("div", {
                className: "text-btn-container",
                children: [(0, g.jsx)("div", {
                    className: "title",
                    children: (0, g.jsx)("span", {
                        children: t.node.merchandise.product.title
                    })
                }), t.node.discountAllocations ? .length ? (0, g.jsxs)("div", {
                    className: "promotion",
                    children: [r, s, " Discount applied"]
                }) : null, (0, g.jsxs)("div", {
                    className: "description",
                    children: [(0, g.jsxs)("div", {
                        style: {
                            display: "flex"
                        },
                        children: [t.node.merchandise.title && "default title" !== String(t.node.merchandise.title).toLocaleLowerCase() && (0, g.jsx)("div", {
                            children: t.node.merchandise.title
                        }), d && (0, g.jsxs)("span", {
                            children: [", ", d]
                        })]
                    }), (0, g.jsx)("div", {
                        dangerouslySetInnerHTML: {
                            __html: t.node.merchandise.product.descriptionHtml ? ? t.node.merchandise.product.description
                        }
                    })]
                }), (0, g.jsxs)("div", {
                    className: "btn-container",
                    children: [(0, g.jsxs)("div", {
                        className: "quantity-wrapper",
                        children: [(0, g.jsx)("button", {
                            className: "quantity-control",
                            disabled: i || n,
                            onClick: () => a(t.node.id, t.node.quantity - 1, t.node.attributes),
                            children: (0, g.jsx)(v.CartDecrease, {
                                fill: n ? "#ccc" : "black"
                            })
                        }), (0, g.jsx)("span", {
                            children: t.node.quantity
                        }), (0, g.jsx)("button", {
                            className: "quantity-control",
                            disabled: i || n,
                            onClick: () => a(t.node.id, t.node.quantity + 1, t.node.attributes),
                            children: (0, g.jsx)(x.CartAdd, {
                                fill: n ? "#ccc" : "black"
                            })
                        })]
                    }), (0, g.jsx)("button", {
                        className: "remove-btn",
                        disabled: i,
                        onClick: () => o(t.node.id),
                        children: (0, g.jsx)(_.CartDelete, {})
                    }), "0.0" !== t.node.cost.totalAmount.amount ? (0, g.jsxs)("div", {
                        className: "price-container",
                        style: {
                            display: "flex",
                            gap: "4px"
                        },
                        children: [t.node.discountAllocations ? .length ? (0, g.jsxs)("span", {
                            className: "price strike",
                            children: [r, (0, w.formatPriceWithComma)(parseFloat(t.node.cost.totalAmount.amount) + parseFloat(s))]
                        }) : null, (0, g.jsxs)("span", {
                            className: "price",
                            children: [r, (0, w.formatPriceWithComma)(parseFloat(t.node.cost.totalAmount.amount))]
                        })]
                    }) : (0, g.jsx)("div", {
                        className: "price-container",
                        children: (0, g.jsx)("span", {
                            className: "price",
                            children: "Free"
                        })
                    })]
                })]
            })]
        })
    }).withConfig({
        displayName: "CartItem",
        componentId: "sc-7e9ff533-0"
    })
    `
  display: flex;
  flex-direction: row;
  padding: 16px;

  .image-container {
    width: 20%;
    position: relative;
    flex-shrink: 0;
    flex-grow: 0;

    img {
      width: 100%;
      height: auto;
      aspect-ratio: 1/1;
      border-radius: 12px;
    }
  }

  button {
    cursor: pointer;
  }

  .text-btn-container {
    width: 80%;
    padding-left: 16px;
    flex-shrink: 0;
    flex-grow: 1;

    & .title {
      font-size: 1.6rem;
      font-weight: 500;

      display: flex;
      flex-direction: row;
      gap: 16px;
      justify-content: space-between;
      margin-bottom: 4px;

      .price {
        flex-shrink: 0;
        whitespace: no-wrap;
      }
    }

    .promotion {
      color: #057ff0;
      letter-spacing: -0.01px;
      font-weight: 500;
      font-size: 10px;
      background: #f5f5fa;
      border-radius: 4px;
      padding: 4px 8px;
      align-self: flex-start;
      display: inline;
      margin-top: 8px;
    }

    & .description {
      color: rgba(0, 0, 0, 0.4);
      font-size: 1.3rem;
      font-weight: 400;
      margin-top: 8px;
    }

    .btn-container {
      margin-top: 24px;
      display: flex;
      flex-direction: row;
      gap: 12px;
      align-items: center;

      .quantity-wrapper {
        display: flex;
        padding: 8px 24px;
        align-items: center;
        gap: 24px;
        border-radius: 8px;
        border: 1px solid rgba(0, 0, 0, 0.1);

        font-size: 12px;
        line-height: 100%;
        letter-spacing: -0.36px;

        button {
          background: transparent;
          border: none;
          outline: none;
          display: grid;
          place-items: center;
        }
      }

      .remove-btn {
        background: none;
        border: none;
        font-size: 1.2rem;
        font-weight: 500;
        color: rgba(0, 0, 0, 0.3);
      }

      .price-container {
        color: #000;
        text-align: right;
        font-size: 16px;
        line-height: 100%;
        letter-spacing: -0.48px;
        margin-left: auto;

        .strike {
          text-decoration-line: line-through;
          color: rgba(0, 0, 0, 0.3);
          font-weight: 400;
        }
      }
    }
  }
`;
    var I = e.i(74508);
    e.s(["CartItemsList", 0, ({
        items: e,
        currencyCode: t,
        isLoading: r = !1,
        onUpdateQuantity: i,
        onRemove: n
    }) => e && 0 !== e.length ? (0, g.jsx)(g.Fragment, {
        children: e.map((e, a) => {
            if (e.node.merchandise.product.tags.includes(I.ProductUiTags.HIDE_IN_CART)) return null;
            let o = e.node.merchandise.product.tags.includes(I.ProductUiTags.NO_QTY_BTNS) ? ? !1;
            return (0, g.jsxs)("div", {
                children: [(0, g.jsx)(E, {
                    item: e,
                    currencyCode: t,
                    isLoading: r,
                    hideQuantityControls: o,
                    onUpdateQuantity: i,
                    onRemove: n
                }), (0, g.jsx)("div", {
                    "aria-hidden": "true",
                    style: {
                        padding: "0.5px",
                        background: "rgba(0,0,0,0.1)",
                        width: "calc( 100% - 32px )",
                        margin: "0 auto"
                    }
                })]
            }, a)
        })
    }) : null], 69642);
    let C = (0, y.default)(({
        className: e,
        activeScreen: t,
        onScreenChange: r
    }) => (0, g.jsx)("div", {
        className: e,
        children: (0, g.jsxs)("div", {
            className: "steps-heading-container",
            children: [(0, g.jsx)("button", {
                onClick: () => r(I.CartFlowScreens.ITEM_LIST),
                className: [I.CartFlowScreens.ITEM_LIST, I.CartFlowScreens.GIFT_NOTE].includes(t) ? "active" : void 0,
                children: "Items"
            }), (0, g.jsx)("button", {
                onClick: () => r(I.CartFlowScreens.GIFT_NOTE),
                className: [I.CartFlowScreens.GIFT_NOTE].includes(t) ? "active" : void 0,
                children: "Personalisation"
            }), (0, g.jsx)("i", {
                className: "bottom-progress",
                style: {
                    width: (() => {
                        switch (t) {
                            case I.CartFlowScreens.ITEM_LIST:
                                return "50%";
                            case I.CartFlowScreens.GIFT_NOTE:
                                return "100%";
                            default:
                                return "50%"
                        }
                    })()
                }
            })]
        })
    })).withConfig({
        displayName: "CartFlowSteps",
        componentId: "sc-cec87dc1-0"
    })
    `
  padding: var(--internal-sections-padding);
  padding-top: 0;
  padding-bottom: 0;

  .steps-heading-container {
    padding: 0 2px;
    padding-bottom: 8px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: relative;

    button {
      cursor: pointer;
      background: transparent;
      border: none;
      color: #000;
      opacity: 0.4;
      text-align: center;
      font-size: 1.4rem;
      font-style: normal;
      font-weight: 500;
      letter-spacing: -0.42px;
      width: 50%;
      text-align: center;

      &.active {
        opacity: 1;
      }
    }

    .bottom-progress {
      padding: 1px;
      background-color: #000;
      width: 0%;
      position: absolute;
      bottom: 0;
      left: 0;
      transition: width 0.3s ease-in-out;
    }
  }
`;
    e.s(["CartFlowSteps", 0, C], 9603);
    let A = (0, y.default)(({
        className: e,
        giftNote: t,
        gifteeEmail: r,
        notifyGiftee: i,
        onGiftNoteChange: n,
        onGifteeEmailChange: a,
        onNotifyGifteeChange: o
    }) => (0, g.jsxs)("div", {
        className: e,
        children: [(0, g.jsxs)("div", {
            className: "email-container",
            children: [(0, g.jsxs)("div", {
                children: [(0, g.jsx)("label", {
                    className: "field-label",
                    htmlFor: "secondary-email-input",
                    children: "Gift recipient's email (required)"
                }), (0, g.jsx)("input", {
                    type: "email",
                    id: "secondary-email-input",
                    placeholder: "jon.snow@example.com",
                    onChange: e => a(e.target.value),
                    value: r
                })]
            }), (0, g.jsx)("div", {
                children: (0, g.jsxs)("label", {
                    className: "checkbox-input-label",
                    children: [(0, g.jsx)("input", {
                        type: "checkbox",
                        onChange: e => o(e.target.checked),
                        defaultChecked: !1,
                        checked: i
                    }), "Notify the recipient about this order"]
                })
            })]
        }), (0, g.jsxs)("div", {
            className: "textarea-container",
            children: [(0, g.jsx)("label", {
                className: "field-label",
                htmlFor: "gift-note-textarea",
                children: "Note card"
            }), (0, g.jsx)("textarea", {
                id: "gift-note-textarea",
                maxLength: 450,
                onChange: n,
                placeholder: "Type your message...",
                value: t
            }), (0, g.jsxs)("div", {
                className: "max-length",
                children: [(0, g.jsx)("span", {
                    className: "disclaimer",
                    children: "*Orders with personalised notes take 1-2 extra days to ship"
                }), (0, g.jsx)("span", {
                    children: "Max Length 350"
                })]
            })]
        })]
    })).withConfig({
        displayName: "GiftNoteSection",
        componentId: "sc-cf76ea01-0"
    })
    `
  padding: var(--internal-sections-padding);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  position: relative;

  label.field-label {
    color: #000;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 1.6rem;
    letter-spacing: -0.028rem;
    margin-bottom: 0.8rem;
    display: inline-block;
  }

  label.checkbox-input-label {
    display: flex;
    gap: 12px;

    color: #000;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 1.6rem;
    letter-spacing: -0.028rem;

    input {
      width: fit-content;
    }
  }

  .email-container {
    margin-top: 12px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;

    label,
    input {
      width: 100%;
    }

    input {
      font-size: 1.6rem;
      width: 100%;
      padding: 0.8rem 1rem 0.8rem 1.6rem;
      border-radius: 0.8rem;
      border: 1px solid #000;
    }
  }

  .textarea-container {
    margin-top: 24px;
    width: 80%;
    height: auto;

    textarea {
      width: 100%;
      border: none;
      resize: none;
      padding: 16px 16px 48px;
      font-size: 1.6rem;
      aspect-ratio: 1/0.9;
      color: #fc5130;
      line-height: 2rem;
      outline: none;
      background: #cecece;
      background: linear-gradient(
        180deg,
        rgba(240, 240, 240, 1) 30%,
        rgba(255, 255, 255, 0) 70%
      );
      box-shadow: 0px 19px 17px 0px rgba(0, 0, 0, 0.09),
        0px 154px 14px -18px rgba(0, 0, 0, 0.06) inset;
    }

    .disclaimer {
      font-size: 1.1rem;
      font-weight: 400;
      text-align: left;
    }

    .max-length {
      width: 100%;
      text-align: right;
      color: rgba(0, 0, 0, 0.7);
      margin-top: 8px;
      font-size: 11px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      gap: 8px;
    }
  }
`;
    e.s(["GiftNoteSection", 0, A], 32150), e.i(64157);
    var k = e.i(71179),
        R = e.i(91788),
        P = e.i(5735),
        T = e.i(73940),
        V = e.i(13063),
        j = e.i(21666);
    let N = (0, y.default)(({
        className: e,
        addons: t,
        currencyCode: r
    }) => {
        let {
            t: i
        } = (0, k.useTranslation)("cart"), n = (0, R.useRef)(null), a = (0, R.useRef)(null), [o, s] = (0, R.useState)(n), c = () => {
            s(e => e === n ? a : n)
        };
        return ((0, R.useEffect)(() => {
            o.current && o.current.scrollIntoView({
                behavior: "smooth",
                block: "start"
            })
        }, [o]), t && 0 !== t.length) ? (0, g.jsxs)("div", {
            className: e,
            children: [(0, g.jsxs)("div", {
                className: "title-bar",
                children: [(0, g.jsx)("h3", {
                    children: i("sharedCart.addons.title")
                }), t.length > 1 ? (0, g.jsxs)("div", {
                    className: "arrow-navigation",
                    children: [(0, g.jsx)("button", {
                        onClick: c,
                        disabled: o === n,
                        children: (0, g.jsx)(T.AddonNavigatePrev, {
                            disabled: o === n
                        })
                    }), (0, g.jsx)("button", {
                        onClick: c,
                        disabled: o === a,
                        children: (0, g.jsx)(P.AddonNavigateNext, {
                            disabled: o === a
                        })
                    })]
                }) : null]
            }), (0, g.jsx)("div", {
                className: "offer-carousel",
                children: t.map((e, t) => (0, g.jsxs)("div", {
                    className: "offer",
                    ref: 0 === t ? n : a,
                    children: [(0, g.jsx)(j.CustomImage, {
                        width: 40,
                        height: 40,
                        alt: "",
                        src: e.iconSrc
                    }), (0, g.jsxs)("div", {
                        className: "text-container",
                        children: [(0, g.jsxs)("div", {
                            className: "title",
                            children: [(0, g.jsxs)("h3", {
                                children: [e.title, " ", r, e.price]
                            }), (0, g.jsx)("button", {
                                onClick: e.onAdd,
                                children: i("sharedCart.addons.add")
                            })]
                        }), (0, g.jsxs)("p", {
                            children: [e.description, (0, g.jsx)("br", {}), (0, g.jsxs)("button", {
                                onClick: e.onLearnMore,
                                children: [i("sharedCart.addons.learnMore"), " ", (0, g.jsx)(V.CartLearnMore, {})]
                            })]
                        })]
                    }), e.duration && (0, g.jsx)("div", {
                        className: "tag",
                        children: e.duration
                    })]
                }, e.id))
            })]
        }) : null
    }).withConfig({
        displayName: "CartAddons",
        componentId: "sc-5e37fdc6-0"
    })
    `
  padding: 16px 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  // background: #fefefe;

  .title-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;

    h3 {
      font-weight: 500;
    }

    color: #000;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: -0.48px;
    font-weight: 500;

    .arrow-navigation {
      display: flex;
      gap: 4px;

      button {
        display: grid;
        place-items: center;
        width: 22px;
        height: 22px;
        outline: none;
        border: none;
        background: transparent;
        cursor: pointer;

        &:disabled {
          cursor: not-allowed;
        }
      }
    }
  }

  .offer-carousel {
    padding: 0 16px;
    display: flex;
    gap: 8px;
    overflow-x: auto;
    // background: #fcfcfc;

    /* Hide scrollbar */
    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;

    .offer {
      padding: 16px;
      padding-top: 24px;
      border-radius: 12px;
      border: 1px solid rgba(0, 0, 0, 0.05);
      background: rgba(255, 255, 255, 0.5);
      display: flex;
      min-width: 350px;
      gap: 11px;
      position: relative;
      font-size: 12px;

      .tag {
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 12px 0px;
        border: 1px solid #fff;
        background: #fff;
        padding: 3px 12px;
        color: #3c3c3c;
        font-size: 10px;
        font-weight: 500;
        line-height: 130%;
        letter-spacing: 2.1px;
        text-transform: uppercase;
      }

      img {
        align-self: center;
      }

      .text-container {
        display: flex;
        flex-direction: column;
        gap: 4px;
        width: 100%;
      }

      p {
        color: rgba(0, 0, 0, 0.5);
        font-size: 12px;
        font-weight: 400;
        line-height: 130%;
        letter-spacing: -0.48px;

        button {
          display: flex;
          align-items: center;
          gap: 4px;
          background: transparent;
          border: none;
          outline: none;
          color: #057ff0;
          cursor: pointer;
        }
      }

      & .title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 2px;

        h3 {
          color: #000;
          font-size: 14px;
          line-height: 100%;
          letter-spacing: -0.42px;
          font-weight: 500;
        }

        button {
          border-radius: 40px;
          background: #057ff0;
          color: #fff;
          text-align: center;
          font-size: 14px;
          font-weight: 500;
          line-height: 100%;
          letter-spacing: -0.14px;
          border: none;
          outline: none;
          padding: 4px 8px;
          cursor: pointer;
        }
      }
    }
  }
`;
    e.s(["CartAddons", 0, N], 98643)
}, 17162, e => {
    "use strict";
    var t = e.i(91398),
        r = e.i(60814);
    let i = (0, r.default)(({
        className: e,
        style: r,
        color: i
    }) => {
        let n = i && (/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(i) || /^rgba?\(\s*(\d{1,3}\s*,\s*){2,3}\d{1,3}\s*(,\s*(0|1|0?\.\d+))?\)$/.test(i)) ? i : "black";
        return (0, t.jsxs)("span", {
            className: e,
            style: r,
            children: [(0, t.jsx)("i", {
                style: {
                    animationDelay: "0",
                    color: n
                },
                children: "•"
            }), (0, t.jsx)("i", {
                style: {
                    animationDelay: "0.05s",
                    color: n
                },
                children: "•"
            }), (0, t.jsx)("i", {
                style: {
                    animationDelay: "0.1s",
                    color: n
                },
                children: "•"
            })]
        })
    }).withConfig({
        displayName: "DotsSpinner__DotSpinner",
        componentId: "sc-5e0af322-0"
    })
    `
  i {
    font-style: normal;
    animation: ${r.keyframes`
                    0% { opacity: 0; }
                    50% { opacity: 1; }
                    100% { opacity: 0; }
                    `} 0.75s infinite;
  }
`;
    e.s(["DotSpinner", 0, i])
}, 66809, 84915, e => {
    "use strict";
    e.s(["Cart", () => W], 66809);
    var t = e.i(91398),
        r = e.i(91788),
        i = e.i(60814),
        n = e.i(2100),
        a = e.i(79546),
        o = e.i(78198);
    e.s(["CartContent", () => $, "cartContentVars", () => G, "getShippingAndTaxDisclaimerMap", () => B], 84915), e.i(64157);
    var s = e.i(71179),
        c = e.i(3828),
        d = e.i(59207),
        l = e.i(91898),
        u = e.i(31732),
        p = e.i(3115),
        f = e.i(90380),
        h = e.i(37515),
        m = e.i(74975),
        g = e.i(53238),
        y = e.i(25635),
        b = e.i(27260),
        S = e.i(82702),
        x = e.i(98039),
        v = e.i(56560),
        _ = e.i(7506),
        w = e.i(74508),
        E = e.i(228),
        I = e.i(13886),
        C = e.i(69642),
        A = e.i(9603),
        k = e.i(32150),
        R = e.i(98643),
        P = e.i(17162),
        T = e.i(26019),
        V = e.i(1814);
    let j = (0, i.default)(({
        className: e,
        items: i,
        cart: n,
        currencyCode: a,
        taxes: o,
        duty: s
    }) => {
        let [c, d] = (0, r.useState)(!1);
        return (0, t.jsxs)("div", {
            className: e,
            children: [(0, t.jsxs)("div", {
                className: `breakup-section ${c?"show":"hide"}`,
                children: [(0, t.jsx)("div", {
                    className: "breakup-header",
                    children: "Price details"
                }), (0, t.jsxs)("div", {
                    className: "price-breakup",
                    children: [i.map(e => (0, t.jsxs)("div", {
                        children: [(0, t.jsx)("span", {
                            children: e.node.merchandise.product.title
                        }), (0, t.jsx)("span", {
                            children: 0 != e.node.cost.totalAmount.amount ? (0, t.jsxs)(t.Fragment, {
                                children: [a, (0, V.formatPriceWithComma)(e.node.cost.totalAmount.amount)]
                            }) : "Free"
                        })]
                    }, e.id)), n.discountAllocations.length ? (0, t.jsxs)("div", {
                        children: [(0, t.jsx)("span", {
                            children: "discount applied"
                        }), (0, t.jsxs)("span", {
                            children: ["- ", a, (0, V.formatPriceWithComma)(n.discountAllocations.reduce((e, t) => e + parseFloat(t.discountedAmount.amount), 0))]
                        })]
                    }) : null, (0, t.jsx)("hr", {})]
                })]
            }), (0, t.jsxs)("div", {
                className: "total",
                children: [(0, t.jsxs)("span", {
                    className: "label",
                    children: ["Total", (0, t.jsx)("button", {
                        className: "price-breakup-toggle",
                        onClick: () => {
                            d(!c)
                        },
                        children: c ? (0, t.jsxs)(t.Fragment, {
                            children: [(0, t.jsx)(T.default, {
                                src: "/caret-down.png",
                                alt: "caret-down",
                                width: 12,
                                height: 8
                            }), " ", "Hide breakup"]
                        }) : (0, t.jsxs)(t.Fragment, {
                            children: [(0, t.jsx)(T.default, {
                                src: "/caret-down.png",
                                alt: "caret-down",
                                width: 12,
                                height: 8,
                                style: {
                                    transform: "rotate(180deg)"
                                }
                            }), "Show breakup", " "]
                        })
                    })]
                }), (0, t.jsxs)("span", {
                    className: "value",
                    children: [a, (0, V.formatPriceWithComma)(n.cost.totalAmount.amount - o - s)]
                })]
            })]
        })
    }).withConfig({
        displayName: "CartPricing",
        componentId: "sc-c86945b-0"
    })
    `
  .breakup-section {
    padding: var(--internal-sections-padding);
    opacity: 0;
    max-height: 0;
    overflow: hidden;
    transition: opacity 0.3s ease, max-height 0.3s ease;

    &.show {
      opacity: 1;
      max-height: 500px;
    }

    &.hide {
      opacity: 0;
      max-height: 0;
    }
  }

  .breakup-header {
    font-size: 14px;
    font-weight: 500;
    line-height: 19px;
    margin-bottom: 4px;
  }

  .price-breakup > div {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    line-height: 19px;
    margin-bottom: 4px;
  }

  .total {
    padding: var(--internal-sections-padding);
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    line-height: 19px;
    margin-bottom: 4px;

    .label {
      font-weight: 500;
      display: flex;
    }

    .value {
      font-size: 24px;
      font-weight: 500;
    }

    button {
      background-color: transparent;
      border: none;
      outline: none;
      color: grey;
      font-size: 12px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 2px;
      margin-left: 4px;
    }
  }

  hr {
    color: rgba(0, 0, 0, 0.2);
    margin: 10px 0;
  }
`, N = (0, i.default)(({
        className: e,
        isLoading: r = !1,
        isPrimaryCtaDisabled: i,
        onCheckout: n,
        shippingDisclaimer: a,
        error: o,
        items: s,
        cart: c,
        currencyCode: d,
        taxes: l,
        duty: u
    }) => (0, t.jsxs)("div", {
        className: e,
        children: [(0, t.jsx)(j, {
            items: s,
            cart: c,
            currencyCode: d,
            taxes: l,
            duty: u
        }), (0, t.jsx)("div", {
            className: `error-container ${o?"active":""}`,
            children: o
        }), a && (0, t.jsx)("p", {
            className: "tax-info",
            children: a
        }), (0, t.jsx)("div", {
            className: "checkout-btn-container",
            children: (0, t.jsx)("button", {
                className: "blue-button",
                onClick: n,
                disabled: r || i,
                "data-buttontype": "cart-checkout",
                children: r ? (0, t.jsx)(P.DotSpinner, {
                    color: "#000000"
                }) : "Checkout"
            })
        })]
    })).withConfig({
        displayName: "CartFooter",
        componentId: "sc-702b101e-0"
    })
    `
  position: relative;
  // box-shadow: 0 -12px 35px rgba(15, 23, 42, 0.12);
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  padding: 0;
  padding-bottom: 16px;
  justify-content: center;

  .error-container {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    transition: all 0.2s ease-in-out;
    color: #fff;
    background-color: rgba(255, 50, 50);
    padding: var(--internal-sections-padding);
    transform: translatey(0);
    opacity: 0;
    pointer-events: none;
    font-size: 1.2rem;
    text-align: center;

    &.active {
      opacity: 1;
      transform: translatey(-100%);
    }
  }

  .tax-info {
    padding: var(--internal-sections-padding);
    font-size: 1.4rem;
    color: #000000;
    opacity: 0.5;
  }

  .checkout-btn-container {
    padding: var(--internal-sections-padding);
  }

  .blue-button {
    background: #057ff0;
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: var(--button-radius);
    font-weight: 500;
    cursor: pointer;
    width: 100%;
    font-size: 1.4rem;

    &:disabled {
      background-color: rgba(0, 0, 0, 0.1);
      color: rgba(0, 0, 0, 0.4);
      cursor: not-allowed;
    }
  }
`;
    var O = e.i(33535);
    let U = (0, i.default)(({
        className: e,
        isOpen: r,
        content: i,
        onClose: n
    }) => r && i ? (0, t.jsxs)("div", {
        className: e,
        role: "presentation",
        children: [(0, t.jsx)("button", {
            className: "modal-close",
            onClick: n,
            "aria-label": "Close modal",
            children: (0, t.jsx)(O.CrossDark, {
                fill: "#000000"
            })
        }), (0, t.jsx)("div", {
            className: "modal-overlay-content",
            children: i
        })]
    }) : null).withConfig({
        displayName: "InfoModal",
        componentId: "sc-647b9cee-0"
    })
    `
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  padding-top: 72px;
  transition: all 0.2s ease-in-out;

  animation: ${i.keyframes`from {
    opacity: 0;
    } to {
      opacity: 1;
    }`} 0.3s ease-in-out forwards;

  .modal-overlay-content {
    width: 100%;
    height: 100%;
    background: white;
    z-index: 1000;
    overflow-y: auto;
    padding: 16px;
    border-radius: 24px 24px 0 0;
    overflow: hidden;
    transition: all 0.2s ease-in-out;

    animation: ${i.keyframes`from {
      transform: translateY(50%);
      } to {
        transform: translateY(0);
      }`} 0.3s ease-in-out forwards;
  }

  .modal-close {
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: none;
    border: none;
    cursor: pointer;
    z-index: 1001;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 1);
    transition: all 0.2s ease-in-out;

    animation: ${i.keyframes`from {
      transform: translateY(-200%) translateX(-50%);
      } to {
        transform: translateY(0) translateX(-50%);
      }`} 0.3s ease-in-out forwards;

    &:hover {
      background: rgba(255, 255, 255, 0.7);
    }

    svg {
      width: 18px;
      height: 18px;
    }
  }
`, M = (0, i.default)(e => (0, t.jsxs)("label", {
        className: `${e.className} ${e.checked?"active":""} ${e.disabled?"disabled":""}`,
        children: [(0, t.jsx)("input", { ...e,
            className: "switch-checkbox",
            type: "checkbox",
            checked: e.checked,
            onChange: t => {
                e.onChange && e.onChange(t)
            }
        }), (0, t.jsx)("span", {
            className: `switch-slider ${e.checked?"active":""}`
        })]
    })).withConfig({
        displayName: "Switch",
        componentId: "sc-9a39dd76-0"
    })
    `
  --switch-padding: 3px;
  cursor: pointer;
  position: relative;
  display: inline-block;
  padding: var(--switch-padding);

  width: 48px;
  height: 28px;
  border-radius: 32px;

  background-color: #cecece;

  transition: all 0.3s ease-in-out;

  &.active {
    background-color: ${e=>e.accentColor??"#EA5B31"};
  }

  &.disabled {
    pointer-events: none;
    opacity: 0.4;
  }

  input {
    display: none;
  }

  span {
    width: 22px;
    height: 22px;
    padding: 1px;
    display: inline-block;
    background-color: #ffffff;
    position: absolute;
    border-radius: 100%;
    left: var(--switch-padding);

    &.active {
      left: unset;
      right: var(--switch-padding);
    }
  }
`, L = (0, i.default)(({
        className: e,
        cartFlow: r,
        onCartFlowChange: i,
        disabled: n
    }) => {
        let {
            t: a
        } = (0, s.useTranslation)("cart");
        return (0, t.jsxs)("div", {
            className: e,
            children: [(0, t.jsx)("p", {
                children: a("sharedCart.giftFlow.text")
            }), (0, t.jsx)(M, {
                checked: r === w.CartFlow.GIFT,
                onChange: e => {
                    e.target.checked ? i(w.CartFlow.GIFT) : i(w.CartFlow.OG)
                },
                disabled: n
            })]
        })
    }).withConfig({
        displayName: "GiftFlowToggle",
        componentId: "sc-292b89c5-0"
    })
    `
  // background: #ffffff;
  background: rgba(0, 0, 0, 0.02);
  padding: var(--internal-sections-padding);
  // box-shadow: 0px -4px 41px 0px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: 1.4rem;
    font-size: 15px;
    font-weight: 500;
    line-height: 100%;
    letter-spacing: -0.45px;
  }
`, D = i.default.div.withConfig({
        displayName: "CartFooterWrapper",
        componentId: "sc-fb4a9865-0"
    })
    `
  // background: rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.2);
  // backdrop-filter: blur(50px);
  border-top: 1.5px solid rgba(255, 255, 255, 0.4);
  box-shadow: 0 -20px 45px rgba(15, 23, 42, 0.12);
`, B = e => ({
        [d.ShopifyStore.IN]: null,
        [d.ShopifyStore.US]: e("cart:sharedCart.shippingAndTaxDisclaimer.us"),
        [d.ShopifyStore.AE]: e("cart:sharedCart.shippingAndTaxDisclaimer.ae"),
        [d.ShopifyStore.ROW]: e("cart:sharedCart.shippingAndTaxDisclaimer.row"),
        [d.ShopifyStore.GB]: e("cart:sharedCart.shippingAndTaxDisclaimer.row"),
        [d.ShopifyStore.EU]: e("cart:sharedCart.shippingAndTaxDisclaimer.row"),
        [d.ShopifyStore.AU]: e("cart:sharedCart.shippingAndTaxDisclaimer.row"),
        [d.ShopifyStore.CA]: e("cart:sharedCart.shippingAndTaxDisclaimer.us"),
        [d.ShopifyStore.SA]: e("cart:sharedCart.shippingAndTaxDisclaimer.row"),
        [d.ShopifyStore.MX]: e("cart:sharedCart.shippingAndTaxDisclaimer.row"),
        [d.ShopifyStore.ZA]: e("cart:sharedCart.shippingAndTaxDisclaimer.row")
    }), $ = (0, i.default)(({
        className: i
    }) => {
        let {
            t: n
        } = (0, s.useTranslation)("cart"), o = (0, r.useContext)(a.CartContext), {
            cart: P,
            store: T,
            getCartAttributeValue: V,
            cartLoading: j,
            updateCartQuantity: O,
            deleteFromCart: M,
            setError: $,
            updateCartAttributes: G,
            checkout: F,
            activeFlowScreen: W,
            setActiveFlowScreen: H,
            addToCartSilently: Y,
            hideCart: z,
            error: q,
            setCartFlow: X,
            taxes: K,
            duty: Z,
            cartType: J,
            cartFlow: Q
        } = o, {
            isCnOPlus: ee
        } = (0, b.useIsCnOPlus)(), et = (0, c.useRouter)(), er = et.query.locale ? .toLowerCase(), ei = "respiratory" === et.query.flow, en = T === d.ShopifyStore.GB || "ie" === er, ea = ![d.ShopifyStore.EU, d.ShopifyStore.GB].includes(T), [eo, es] = (0, r.useState)(!1), ec = P ? .cost.subtotalAmount.currencyCode ? (0, l.getCurrencySymbolFromString)(P ? .cost.subtotalAmount.currencyCode) : (0, l.getCurrencySymbolFromString)(o.currency ? ? E.Currency.usd), ed = P ? .lines.edges, [el, eu] = (0, r.useState)(!1), [ep, ef] = (0, r.useState)(!1), [eh, em] = (0, r.useState)(!1), [eg, ey] = (0, r.useState)(!1), [eb, eS] = (0, r.useState)(!1), [ex, ev] = (0, r.useState)(!1), [e_, ew] = (0, r.useState)(!1);
        (0, r.useEffect)(() => {
            if (!P) return;
            let e = V("gift_note");
            e && "null" != e && eA(e);
            let t = V("giftee_email");
            if (t && "null" != t && eV(t), Array.isArray(P.lines.edges) && P.lines.edges.length > 0) {
                let e = !1,
                    t = !1,
                    r = !1,
                    i = !1,
                    n = !1,
                    a = !1;
                for (let o = 0; o < P.lines.edges.length; o++)[v.UhxShopifyMap[T].Year1.variantId, v.UhxShopifyMap[T].Year2.variantId].includes(P.lines.edges[o].node.merchandise.id) && (e = !0), [f.AfibShopifyMap[T].Year1.variantId, f.AfibShopifyMap[T].Year2.variantId].includes(P.lines.edges[o].node.merchandise.id) && (t = !0), [h.CardioAdaptibilityShopifyMap[T].Year1.variantId, h.CardioAdaptibilityShopifyMap[T].Year2.variantId].includes(P.lines.edges[o].node.merchandise.id) && (r = !0), [...[m.CnoProShopifyMap[T] ? .Year1 ? .variantId, m.CnoProShopifyMap[T] ? .Year2 ? .variantId].filter(Boolean), ...[g.CnoPlusShopifyMap[T] ? .Year1 ? .variantId, g.CnoPlusShopifyMap[T] ? .Year2 ? .variantId].filter(Boolean)].includes(P.lines.edges[o].node.merchandise.id) && (i = !0), [y.RespiratoryShopifyMap[T] ? .Year1 ? .variantId].filter(Boolean).includes(P.lines.edges[o].node.merchandise.id) && (n = !0), Object.values(x.TravelChargerShopifyMap[T] ? ? {}).filter(e => "number" != typeof e).map(e => e.shopifyVariantId).includes(P.lines.edges[o].node.merchandise.id) && (a = !0);
                let o = !1;
                for (let e = 0; e < P.lines.edges.length; e++) {
                    let t = P.lines.edges[e].node.merchandise.product.id;
                    if (_.RareRingAndRelatedProductsIdMap[T] ? .includes(t)) {
                        o = !0;
                        break
                    }
                }
                eu(e), ef(t), em(r), ey(i), eS(n), ev(a), ew(o)
            }
        }, [P]);
        let eE = (e, t, r) => {
                es(!0), O(e, t, r).finally(() => {
                    es(!1)
                })
            },
            eI = e => {
                es(!0), M(e).finally(() => {
                    es(!1)
                })
            },
            [eC, eA] = (0, r.useState)("The gift of good health beholds the promise of several tomorrows, where dreams come into being and futures unfold."),
            {
                region: ek
            } = (0, r.useContext)(p.RegionLocaleContext),
            [eR, eP] = (0, r.useState)(!1),
            [eT, eV] = (0, r.useState)(void 0),
            ej = e => {
                let t = {
                    AFIB: {
                        shopifyVariantId: f.AfibShopifyMap[T].Year1.variantId,
                        productType: w.ProductType.RING
                    },
                    CARDIO: {
                        shopifyVariantId: h.CardioAdaptibilityShopifyMap[T].Year1.variantId,
                        productType: w.ProductType.RING
                    },
                    UHX: {
                        shopifyVariantId: v.UhxShopifyMap[T].Year1.variantId,
                        productType: w.ProductType.UHX
                    },
                    VOYAGER: {
                        shopifyVariantId: x.TravelChargerShopifyMap[T][99].shopifyVariantId,
                        productType: w.ProductType.RING
                    },
                    CNO_PRO: {
                        shopifyVariantId: (ee ? g.CnoPlusShopifyMap : m.CnoProShopifyMap)[T].Year1.variantId,
                        productType: w.ProductType.RING
                    },
                    RESPIRATORY: {
                        shopifyVariantId: y.RespiratoryShopifyMap[T].Year1.variantId,
                        productType: w.ProductType.RING
                    }
                };
                es(!0), Y([t[e]]).finally(() => {
                    es(!1)
                })
            },
            [eN, eO] = (0, r.useState)(null),
            eU = async r => {
                let i = null;
                switch (r) {
                    case "AFIB":
                        i = (await e.A(65071)).AfibInfoCartModal;
                        break;
                    case "CARDIO":
                        i = (await e.A(63634)).CardioAdaptabilityCartInfoModal;
                        break;
                    case "UHX":
                        i = (await e.A(7638)).UhxCartInfoModal;
                        break;
                    case "VOYAGER":
                        i = (await e.A(15647)).TravelChargerCartInfoModal;
                        break;
                    case "CNO_PRO":
                        i = (await e.A(98964)).CnoProCartInfoModal;
                        break;
                    case "RESPIRATORY":
                        i = (await e.A(28599)).RespiratoryCartInfoModal;
                        break;
                    default:
                        i = null
                }
                i && eO((0, t.jsx)(i, {}))
            },
            eM = ek && S.AfibCountryCodes.includes(ek) && !ep && J !== w.ProductType.M1 && ![d.ShopifyStore.AE, d.ShopifyStore.IN].includes(T),
            eL = !el,
            eD = !eM && !eh && !ep && J !== w.ProductType.M1,
            eB = J !== w.ProductType.M1 && !ex,
            e$ = !eb && J !== w.ProductType.M1 && !ei && !en,
            eG = !eg && J !== w.ProductType.M1 && (en || ei);
        return (0, t.jsxs)("div", {
            className: i,
            children: [(0, t.jsx)(I.CartHeader, {
                onClose: z || (() => {}),
                isLoading: eo || j
            }), (0, t.jsxs)("div", {
                className: "cart-list",
                "data-testid": "cart-list",
                children: [Q === w.CartFlow.OG && (0, t.jsx)(C.CartItemsList, {
                    items: ed,
                    currencyCode: ec,
                    isLoading: eo || j,
                    onUpdateQuantity: eE,
                    onRemove: eI
                }), Q === w.CartFlow.GIFT && (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)(A.CartFlowSteps, {
                        activeScreen: W,
                        onScreenChange: H
                    }), W === w.CartFlowScreens.ITEM_LIST && (0, t.jsx)(C.CartItemsList, {
                        items: ed,
                        currencyCode: ec,
                        isLoading: eo || j,
                        onUpdateQuantity: eE,
                        onRemove: eI
                    }), W === w.CartFlowScreens.GIFT_NOTE && (0, t.jsx)(k.GiftNoteSection, {
                        giftNote: eC,
                        gifteeEmail: eT || "",
                        notifyGiftee: eR,
                        onGiftNoteChange: e => e.target.value.split(" ").length < 75 && (eA(e.target.value), !0),
                        onGifteeEmailChange: eV,
                        onNotifyGifteeChange: eP
                    })]
                })]
            }), (0, t.jsx)(D, {
                children: (0, t.jsxs)("div", {
                    children: [ea ? (0, t.jsx)(L, {
                        cartFlow: Q,
                        onCartFlowChange: X,
                        disabled: eo || j
                    }) : null, P ? (0, t.jsx)("div", {
                        children: !e_ && (eM || eD || eL || e$ || eG) && (0, t.jsx)(R.CartAddons, {
                            addons: [...eL ? [{
                                id: "UHX",
                                title: "UltrahumanX at ",
                                price: String(v.UhxShopifyMap[T].Year1.price),
                                description: "Extra coverage on Ultrahuman products, damage protection, hassle-free replacements, & priority support.",
                                iconSrc: "web_v2/icons/uhx.png",
                                duration: "1 Year",
                                onAdd: () => ej("UHX"),
                                onLearnMore: () => eU("UHX")
                            }] : [], ...eM ? [{
                                id: "AFIB",
                                title: "AFib Detection at ",
                                price: String(f.AfibShopifyMap[T].Year1.price),
                                description: "Monitor nighttime heart trends to evaluate your heart's response to stressors.",
                                iconSrc: "web_v2/icons/afib.png",
                                duration: "1 Year",
                                onAdd: () => ej("AFIB"),
                                onLearnMore: () => eU("AFIB")
                            }] : [], ...eD ? [{
                                id: "CARDIO",
                                title: "Cardio Adaptability at ",
                                price: String(h.CardioAdaptibilityShopifyMap[T].Year1.price),
                                description: "Monitor nighttime heart trends to evaluate your heart's response to stressors.",
                                iconSrc: "web_v2/icons/cardio.png",
                                duration: "1 Year",
                                onAdd: () => ej("CARDIO"),
                                onLearnMore: () => eU("CARDIO")
                            }] : [], ...eB ? [{
                                id: "VOYAGER",
                                title: "Voyager Charger at",
                                price: String(x.TravelChargerShopifyMap[T].price),
                                description: "A compact, powerful, and lightweight charger, engineered for the adventurer in you.",
                                iconSrc: "web_v2/icons/voyager.png",
                                onAdd: () => ej("VOYAGER"),
                                onLearnMore: () => eU("VOYAGER")
                            }] : [], ...e$ ? [{
                                id: "RESPIRATORY",
                                title: "Respiratory Health at ",
                                price: String(y.RespiratoryShopifyMap[T].Year1.price),
                                description: "See what's really happening while you sleep. Track snoring disruptions, and understand how they affect your HR, HRV, and recovery.",
                                iconSrc: "web_v2/powerplugs/icons/respiratory-3.png",
                                duration: "1 Year",
                                onAdd: () => ej("RESPIRATORY"),
                                onLearnMore: () => eU("RESPIRATORY")
                            }] : [], ...eG ? [{
                                id: "CNO_PRO",
                                title: "Cycle & Ovulation at ",
                                price: String(m.CnoProShopifyMap[T].Year1.price),
                                description: ee ? "Science-informed cycle and ovulation-related insights, designed for all types of cycles." : "Clinically-validated cycle and ovulation insights, built for all types of cycles.",
                                iconSrc: "web_v2/powerplugs/icons/cno-pro.png",
                                duration: "1 Year",
                                onAdd: () => ej("CNO_PRO"),
                                onLearnMore: () => eU("CNO_PRO")
                            }] : []],
                            currencyCode: ec
                        })
                    }) : null, (0, t.jsx)(N, {
                        cartFlow: Q,
                        isLoading: j || eo,
                        isPrimaryCtaDisabled: (() => {
                            switch (W) {
                                case w.CartFlowScreens.ITEM_LIST:
                                    return !1;
                                case w.CartFlowScreens.GIFT_NOTE:
                                    return !(!["", null, void 0].includes(eC) && u.emailRegex.test(eT))
                            }
                        })(),
                        onCheckout: () => {
                            Q === w.CartFlow.OG ? F() : Q === w.CartFlow.GIFT && (W === w.CartFlowScreens.ITEM_LIST ? H(w.CartFlowScreens.GIFT_NOTE) : W === w.CartFlowScreens.GIFT_NOTE && (P && eT ? (es(!0), G(P.id, [{
                                key: "giftee_email",
                                value: eT
                            }, {
                                key: "gift_note",
                                value: eC.trimEnd().trimStart()
                            }, {
                                key: "notify_giftee",
                                value: eR ? "true" : "false"
                            }]).then(e => {
                                console.log(e), F()
                            }).catch(e => {
                                console.log(e), $("Something went wrong, please try again.")
                            }).finally(() => {
                                es(!1)
                            })) : $("Please fill the Notecart & Giftee email properly to continue.")))
                        },
                        shippingDisclaimer: B(n)[T],
                        error: q,
                        items: ed,
                        cart: P,
                        currencyCode: ec,
                        taxes: K,
                        duty: Z
                    })]
                })
            }), (0, t.jsx)(U, {
                isOpen: !!eN,
                content: eN,
                onClose: () => eO(null)
            })]
        })
    }).withConfig({
        displayName: "Cart__CartContent",
        componentId: "sc-fcff57bd-0"
    })
    `
  /* CartContent should fill the container properly */
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;

  .cart-list {
    overscroll-behavior: contain;
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    overflow-y: auto;
    ${n.hideScrollbar}

    .text {
      color: rgb(0, 0, 0);
      font-size: 24px;
      font-weight: 500;
    }
  }
`, G = `
  --seperator-border: 1px solid rgba(0,0,0,0.1);
  --button-radius: 10px;
  --internal-sections-padding: 6px 16px;
`, F = (0, i.default)(({
        className: e,
        onBackToBrowse: r
    }) => (0, t.jsx)("div", {
        className: e,
        children: (0, t.jsxs)("div", {
            className: "centered",
            children: [(0, t.jsx)("h3", {
                children: "Your cart is empty"
            }), (0, t.jsx)("p", {
                style: {
                    textAlign: "center"
                },
                children: "Browse through our products and find something for you."
            }), (0, t.jsx)("button", {
                className: "blue-button",
                onClick: r,
                children: "Back to browse"
            })]
        })
    })).withConfig({
        displayName: "CartEmptyState",
        componentId: "sc-20ed0c6d-0"
    })
    `
  height: 100%;
  width: 100%;

  .centered {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;
    padding: 24px;

    h3 {
      font-size: 24px;
      font-weight: 500;
    }

    p {
      font-size: 16px;
    }
  }

  .blue-button {
    ${n.BlueButtonCss}
    width: 100%;
    border-radius: var(--button-radius);
    font-weight: 500;

    &:disabled {
      background-color: rgba(0, 0, 0, 0.1);
      color: rgba(0, 0, 0, 0.4);
    }
  }
`, W = (0, i.default)(({
        className: e
    }) => {
        let {
            cart: i,
            isCartVisible: n,
            altContent: o,
            hideCart: s
        } = (0, r.useContext)(a.CartContext);
        return (0, t.jsx)("div", {
            className: `${e} ${n?"active":""}`,
            onClick: s,
            "aria-hidden": "true",
            "data-testid": "cart",
            children: (0, t.jsxs)("div", {
                className: "content",
                onClick: e => {
                    e.stopPropagation()
                },
                "aria-hidden": "true",
                children: [i && i ? .lines && i ? .lines.edges && i ? .lines.edges.length >= 1 && (0, t.jsx)($, {}), (!i || !i ? .lines || !i ? .lines.edges || !(i ? .lines.edges.length >= 1)) && (0, t.jsx)(F, {
                    onBackToBrowse: s
                }), o && (0, t.jsxs)("div", {
                    className: "overlay-content",
                    children: [(0, t.jsxs)("h2", {
                        children: [" ", (0, t.jsx)("button", {
                            className: "close-btn",
                            onClick: s ? ? null,
                            children: "×"
                        })]
                    }), o]
                })]
            })
        })
    }).withConfig({
        displayName: "Cart",
        componentId: "sc-8e08e23d-0"
    })
    `
  ${G}

  /* Cart Container Styles - Overlay and Positioning */
  letter-spacing: -0.04em;
  z-index: -1;
  display: none;
  opacity: 0;
  transition: all 0.1s ease-in-out;
  overscroll-behavior: contain;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  height: lvh;

  background: rgba(0, 0, 0, 0.2);
  -webkit-backdrop-filter: blur(54px);
  backdrop-filter: blur(54px);

  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0;

  @media (min-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
    justify-content: flex-end;
    padding: 24px;

    .mobile-only {
      display: none;
    }
  }

  &.active {
    z-index: 1001;
    display: flex;
    opacity: 1;

    & .content {
      transform: translateX(0);
    }
  }

  /* Content Container Styles */
  & .content {
    background: rgba(255, 255, 255, 0.8);
    // backdrop-filter: blur(100px);
    width: 100%;
    border-radius: 0;
    border: 1.5px solid rgba(255, 255, 255, 0.2);
    // box-shadow: 0 20px 50px rgba(15, 23, 42, 0.12);
    transform: translate(0, 25%);
    transition: all 0.2s ease-in-out;
    color: #000000;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 100%;

    @media (min-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
      width: 500px;
      border-radius: 24px;
      transform: translate(25%, 0);
    }

    .close-btn {
      height: 100%;
      border: none;
      background: transparent;
      align-items: center;

      svg,
      img {
        width: 16px;
        height: auto;
      }
    }

    h2 {
      position: relative;
      font-size: 32px;
      font-weight: 500;
      height: 60px;
      border-bottom: 1px solid rgb(245, 245, 250);
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 0 24px;
    }

    /* Overlay Content Styles */
    .overlay-content {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, 0.5);
      -webkit-backdrop-filter: blur(50px);
      backdrop-filter: blur(50px);
      border: red 1px solid;
    }

    .img-section {
      display: flex;
      flex-direction: column;
      ${(0,n.backgroundImageMixin)({image:(0,o.getCompressedAssetUrl)("/web/cart_subs_upsell_bg.png")})};
      background-size: contain;
      aspect-ratio: 160 / 49;
      width: auto;
      height: auto;
      margin-top: 16px;
      justify-content: center;
      align-items: center;

      .img-section-content {
        color: rgb(255, 255, 255);
        font-size: 14px;
        text-align: center;
        width: 78%;
        text-shadow: 0 0 8px rgba(255, 255, 255, 0.5);

        .over-line {
          text-decoration-line: line-through;
          text-decoration-style: solid;
        }

        .highlight-text {
          font-weight: 500;
        }
      }
    }
  }
`
}, 11869, e => {
    "use strict";
    let t = {
        "/": "dark",
        "/home": "light",
        "/ring/buy": "light",
        "/ring/buy/better-help": "light",
        "/home/buy": "light",
        "/home/buy/better-help": "light",
        "/ring/faq": "dark",
        "/shop": "light",
        "/blood-vision/tests": "light",
        "/blood-vision": "dark",
        "/print-sizing-kit": "dark",
        "/blood-vision/faq": "dark",
        "/environment": "light",
        "/ogdb": "dark",
        "/ogdb/search": "dark",
        "/powerplugs": "dark",
        "/hsa-fsa": "light"
    };
    [...Object.keys(t)], e.s(["AE_PRICING_LINK_ABSOLUTE", 0, "https://www.ultrahuman.com/ae/pricing", "BLOG_LINK", 0, "https://ultrahuman.com/blog", "HEADER_CART_ICON_IN_ACTIVE_PAGES", 0, [], "HEADER_NO_SHOPNOW_PATTERNS", 0, ["/ring/buy/*", "/ring/buy", "/ring-pro/buy", "/ring-pro/buy/*", "/shop/*", "/sizing-kit", "/blood-vision", "/blood-vision/buy/*", "/blood-vision/buy", "/blood-vision/tests", "/pricing/*", "/pricing", "/home/", "/home/buy/*", "/home/buy", "/x/*", "/ogdb", "/ogdb/search", "/rare", "/rare/buy/*", "/rare/buy", "/diesel-ultrahuman-ring/buy/*", "/diesel-ultrahuman-ring/buy", "/heroes"], "NO_HEADER_OR_FOOTER_PAGES", 0, ["/advanced", "/prompt", "/one-tree-planted", "/cycle-report/[token]"], "NO_WA_CHATBOT_PAGES", 0, ["/ring/claim", "/ring/order", "/order", "/one-tree-planted", "/glucose", "/cycle-report", "/blood-vision/buy"], "READ_THE_SCIENCE_LINK_ACTIVITY_NUDGES", 0, "https://ultrahuman.com/blog?utm_source=affiliate_homepage_blogs&utm_medium=value_prop_section&utm_content=bh2", "READ_THE_SCIENCE_LINK_FITNESS_INGIGHTS", 0, "https://ultrahuman.com/blog/what-is-metabolic-fitness?utm_source=affiliate_homepage_blogs&utm_medium=value_prop_section&utm_content=wimf", "READ_THE_SCIENCE_LINK_FUEL", 0, "https://ultrahuman.com/blog?utm_source=affiliate_homepage_blogs&utm_medium=value_prop_section&utm_content=bh3", "READ_THE_SCIENCE_LINK_METABOLIC_SCORE", 0, "https://ultrahuman.com/blog?utm_source=affiliate_homepage_blogs&utm_medium=value_prop_section&utm_content=bh1", "START_ULTRAMETABOLIC_LINK", 0, "https://ultrahuman.com/pricing/", "WA_CHATBOT_ALTERNATE_MOBILE_UI_EXCEPTIONS", 0, ["/blood-vision/buy/blood-on-us"], "WA_CHATBOT_ALTERNATE_MOBILE_UI_PAGES", 0, ["/ring/buy/*", "/rare/buy/*", "/home/buy/*", "/pricing/*", "/x/redeem", "/blood-vision/buy/*"], "headerThemeConfig", 0, t])
}, 6508, 14073, e => {
    "use strict";
    let t = {
        src: e.i(93981).default,
        width: 224,
        height: 17,
        blurWidth: 0,
        blurHeight: 0
    };
    e.s(["default", 0, t], 6508);
    let r = "+447455746726";
    e.s(["DEFAULT_PHONE_NUMBER", 0, r, "PHONE_NUMBER_BY_COUNTRY", 0, {
        IN: "1800-102-8693",
        AE: "8000-357-03249",
        GB: r,
        US: "724-705-0275",
        CA: "14387032156",
        LT: "8002-3371"
    }, "US_ADDRESS", 0, {
        streetAddress: "8 The Green, Suite 7640",
        addressLocality: "Dover",
        addressRegion: "DE",
        postalCode: "19901",
        addressCountry: "US"
    }], 14073)
}, 79865, e => {
    "use strict";
    e.s(["Footer", () => K]);
    var t = e.i(91398);
    e.i(64157);
    var r = e.i(71179),
        i = e.i(40290),
        n = e.i(21666),
        a = e.i(11869),
        o = e.i(68489),
        s = e.i(26019),
        c = e.i(53147),
        d = e.i(3828),
        l = e.i(3115),
        u = e.i(6508),
        p = e.i(91788),
        f = e.i(60814),
        h = e.i(78198),
        m = e.i(46737),
        g = e.i(14073),
        y = e.i(57232),
        b = e.i(19230);
    let S = (0, o.default)(() => e.A(83804), {
            loadableGenerated: {
                modules: [38741]
            },
            ssr: !1,
            loading: () => (0, t.jsx)(x, {
                children: (0, t.jsx)(v, {
                    children: "Loading widget..."
                })
            })
        }),
        x = f.default.div.withConfig({
            displayName: "Footer__WidgetLoadingWrapper",
            componentId: "sc-7b02d9a3-0"
        })
    `
  width: 100vw;
  aspect-ratio: 1440 / 350;
  position: relative;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.05);
`, v = f.default.div.withConfig({
        displayName: "Footer__LoadingText",
        componentId: "sc-7b02d9a3-1"
    })
    `
  font-size: 14px;
  color: #666;
`, _ = String.fromCharCode(215), w = String.fromCharCode(8211), E = [{
        label: "Ring PRO",
        href: "/ring-pro/buy"
    }, {
        labelId: "footer.products.uhRing",
        href: "/ring/buy"
    }, {
        labelId: "footer.products.uhM1",
        href: "/pricing"
    }, {
        labelId: "footer.products.uhHome",
        href: "/home"
    }, {
        labelId: "footer.products.uhx",
        href: "/x"
    }, {
        labelId: "footer.products.uhVision",
        href: "https://vision.ultrahuman.com/"
    }, {
        labelId: "footer.products.uhBloodVision",
        href: "/blood-vision"
    }, {
        labelId: "footer.products.uhxDiesel",
        href: "/diesel-ultrahuman-ring"
    }, {
        label: `Ultrahuman ${_} Clue`,
        href: "/ultrahuman-x-clue"
    }, {
        labelId: "footer.products.powerplugs",
        href: "/powerplugs"
    }, {
        labelId: "footer.products.womensHealth",
        href: "/womens-health"
    }, {
        label: "Ultrahuman Rare",
        href: "/rare"
    }, {
        label: "UltraSignal",
        href: "/ultrasignal"
    }, {
        label: "HSA/FSA",
        href: "/hsa-fsa"
    }, {
        labelId: "footer.products.allProducts",
        href: "/shop"
    }], I = [{
        labelId: "footer.company.aboutUs",
        href: "https://www.linkedin.com/company/ultrahumanhq/"
    }, {
        labelId: "footer.company.careers",
        href: "https://ultrahuman.zohorecruit.in/jobs/Careers"
    }], C = [{
        label: "Partnerships",
        href: "/partners"
    }, {
        label: "Creators",
        href: "https://ultrahumanapp.typeform.com/to/RIksJbSH"
    }], A = [{
        image: "/twitter.svg",
        link: "https://twitter.com/ultrahumanhq"
    }, {
        image: "/linkedin.svg",
        link: "https://www.linkedin.com/company/ultrahumanhq/"
    }, {
        image: "/insta.svg",
        link: "https://www.instagram.com/ultrahumanhq/"
    }, {
        image: "/play.svg",
        link: "https://www.youtube.com/@UltrahumanOfficial"
    }], k = [{
        image: "/appstoresvg.svg",
        href: "https://apps.apple.com/us/app/ultrahuman-meditation-sleep/id1491286709"
    }, {
        image: "/googleplaysvg.svg",
        href: "https://play.google.com/store/apps/details?id=com.ultrahuman.android"
    }], R = [{
        labelId: "footer.bottomSection.terms.ring",
        href: "/termsOfSale/UltrahumanRing/"
    }, {
        labelId: "footer.bottomSection.terms.home",
        href: "/termsOfSale/UltrahumanHome/"
    }, {
        labelId: "footer.bottomSection.terms.m1",
        href: "/termsOfSale/UltrahumanM1/"
    }, {
        labelId: "footer.bottomSection.terms.privacy",
        href: "/privacyPolicy/"
    }, {
        labelId: "footer.bottomSection.terms.termsOfUse",
        href: "/termsAndCondition/"
    }], P = {
        "diesel-ultrahuman-ring": "repXOyr0l5Dk4M9y9Ekk",
        default: "dGoBgZekVa7sMOp54NtG"
    }, T = (e, t) => e.labelId ? t(e.labelId) : e.label, V = `UltraFactory ${w} Ultrahuman Manufacturing Facility, OM Towers, Kudlu Gate, Begur, Bengaluru - 560114, India`, j = f.default.div.withConfig({
        displayName: "Footer__ContentWrapper",
        componentId: "sc-7b02d9a3-2"
    })
    `
  font-size: 1.4rem;
  display: grid;
  letter-spacing: -0.028rem;
  line-height: 1.6rem;
  max-width: 1800px;
  margin: 0 auto;
  grid-template-areas: 'newsletter' 'links' 'links' 'links' 'links' 'links' 'address';

  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    font-size: 1.6rem;
    line-height: 2.2rem;
    grid-template-areas: 'links links links links' 'address address address newsletter';
    grid-template-columns: repeat(4, minmax(0, 25%));
  }
`, N = f.default.footer.withConfig({
        displayName: "Footer__FooterWrapper",
        componentId: "sc-7b02d9a3-3"
    })
    `
  background-color: #000;
  color: #fff;
  padding: 40px 16px;

  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    padding: 8rem;
    padding-bottom: 0;
  }
`, O = f.default.details.withConfig({
        displayName: "Footer__Accordion",
        componentId: "sc-7b02d9a3-4"
    })
    `
  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    border: none;
  }
`, U = f.default.summary.withConfig({
        displayName: "Footer__AccordionHeader",
        componentId: "sc-7b02d9a3-5"
    })
    `
  cursor: pointer;
  color: #fff;
  list-style: none;
  padding: 1.6rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: rgba(255, 255, 255, 0.5);
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2.2rem;
  letter-spacing: -0.028rem;

  &::marker {
    display: none;
  }

  svg {
    transition: transform 0.3s ease;
    transform: rotate(${({$isOpen:e})=>e?"0deg":"180deg"});
  }

  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    pointer-events: none;
    svg {
      display: none;
    }
  }
`, M = f.default.div.withConfig({
        displayName: "Footer__AccordionContent",
        componentId: "sc-7b02d9a3-6"
    })
    `
  padding-bottom: 1rem;
  display: flex;
  gap: 1.6rem;
  flex-direction: column;
  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    gap: 2rem;
  }
`, L = (0, f.default)(c.default).withConfig({
        displayName: "Footer__StyledLink",
        componentId: "sc-7b02d9a3-7"
    })
    `
  display: block;
  color: #fff;
  text-decoration: none;
  font-size: 1.6rem;
  font-style: normal;
  line-height: 2.2rem;
  letter-spacing: -0.028rem;

  &:hover {
    color: #fff;
  }
  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
  }
`, D = f.default.p.withConfig({
        displayName: "Footer__Address",
        componentId: "sc-7b02d9a3-8"
    })
    `
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.6rem;
  font-style: normal;
  line-height: 2.4rem;
  letter-spacing: -0.028rem;
  margin-top: 1rem;
  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    font-size: 1.6rem;
  }
`, B = f.default.div.withConfig({
        displayName: "Footer__Breaker",
        componentId: "sc-7b02d9a3-9"
    })
    `
  border-left: 1px solid #555;
  height: 16px;
  margin: 0 4px;
  display: inline-block;
`, $ = f.default.div.withConfig({
        displayName: "Footer__FooterColumn",
        componentId: "sc-7b02d9a3-10"
    })
    `
  display: flex;
  gap: 32px;
  flex-direction: column;
  grid-area: address;
  margin-top: 60px;
`, G = f.default.div.withConfig({
        displayName: "Footer__FooterLinksRow",
        componentId: "sc-7b02d9a3-11"
    })
    `
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  align-items: center;
`, F = f.default.p.withConfig({
        displayName: "Footer__CopyrightText",
        componentId: "sc-7b02d9a3-12"
    })
    `
  color: rgba(255, 255, 255, 0.4);
  font-size: 12px;
`, W = (0, f.default)(c.default).withConfig({
        displayName: "Footer__LegalLink",
        componentId: "sc-7b02d9a3-13"
    })
    `
  color: rgba(255, 255, 255, 0.7);
  font-size: 12px;
`, H = f.default.div.withConfig({
        displayName: "Footer__NewsletterColumn",
        componentId: "sc-7b02d9a3-14"
    })
    `
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  grid-area: newsletter;
  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    gap: 32px;
    margin-top: 60px;
  }
`, Y = f.default.div.withConfig({
        displayName: "Footer__SocialLinksRow",
        componentId: "sc-7b02d9a3-15"
    })
    `
  display: flex;
  gap: 25px;
  flex-direction: column;
  margin: 6rem 0;

  .socialLinksWrapper {
    display: flex;
    gap: 24px;
    align-items: center;
    justify-content: space-between;
  }

  .socialLinks,
  .appStoreLinks {
    display: flex;
    gap: 24px;
  }

  .socialLinks a img {
    width: 24px;
    height: 24px;
  }

  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    // flex-direction: row;
    margin: 0;
  }

  .flex-container-mobile-2 {
    display: flex;
    gap: 24px;
    align-items: center;
    justify-content: space-between;
  }
`, z = ({
        title: e,
        links: r,
        openDefault: n,
        t: a
    }) => {
        let [o, s] = p.default.useState(n), c = p.default.useRef(null);
        return (0, t.jsxs)(O, {
            ref: c,
            open: n,
            onToggle: () => {
                c.current && s(c.current.open)
            },
            children: [(0, t.jsxs)(U, {
                $isOpen: o,
                children: [e, (0, t.jsx)(i.CaretUp, {
                    width: 14,
                    height: 10,
                    style: {
                        marginLeft: 8
                    }
                })]
            }), (0, t.jsx)(M, {
                children: r.map(e => (0, t.jsx)(L, {
                    href: e.href,
                    target: e.target,
                    children: T(e, a)
                }, e.href))
            })]
        })
    }, q = f.default.div.withConfig({
        displayName: "Footer__UnicornWrapper",
        componentId: "sc-7b02d9a3-16"
    })
    `
  width: 100vw;
  background-color: #000;
`, X = (0, f.default)(s.default).withConfig({
        displayName: "Footer__LogoImage",
        componentId: "sc-7b02d9a3-17"
    })
    `
  max-width: 100%;
  width: 100%;
  height: auto;

  @media (min-width: ${({theme:e})=>e.globalV2.md.minWidth}) {
    width: 240px;
    margin-bottom: 12px;
  }
`, K = () => {
        let {
            t: e
        } = (0, r.useTranslation)("common"), {
            width: i
        } = (0, y.useWindowSize)(), {
            region: o
        } = (0, p.useContext)(l.RegionLocaleContext), f = i > 992, [x, v] = p.default.useState(!1);
        p.default.useEffect(() => {
            v(!0)
        }, []);
        let _ = p.default.useMemo(() => {
                if (!o) return g.DEFAULT_PHONE_NUMBER;
                let e = o.toUpperCase();
                return g.PHONE_NUMBER_BY_COUNTRY[e] ? ? g.DEFAULT_PHONE_NUMBER
            }, [o]),
            w = p.default.useMemo(() => [{
                label: "support@ultrahuman.com",
                href: "mailto:support@ultrahuman.com"
            }, {
                label: _,
                href: `tel:${_}`
            }], [_]),
            O = p.default.useMemo(() => (0, h.getAssetUrl)("/Form_MGT_7_FY_2022-23.pdf"), []),
            U = p.default.useMemo(() => [{
                labelId: "footer.resources.ogdb",
                href: "/ogdb"
            }, {
                labelId: "footer.resources.hero",
                href: "/heroes"
            }, {
                labelId: "footer.resources.uhBlog",
                href: "https://blog.ultrahuman.com"
            }, {
                labelId: "footer.resources.pressNews",
                href: "https://cyborg.ultrahuman.com/press"
            }, {
                labelId: "footer.resources.science",
                href: "/science"
            }, {
                labelId: "footer.resources.brandKit",
                href: "https://docs.google.com/spreadsheets/d/1jMCyNrG6zQTNYDEAl62ImYPzdfGsXkn7_SL466w0tjg/edit?usp=sharing",
                target: "_blank"
            }, {
                labelId: "footer.resources.3dPrint",
                href: "/print-sizing-kit"
            }, {
                labelId: "footer.resources.ringSizing",
                href: "/sizing"
            }, {
                labelId: "footer.resources.ultraWork",
                href: "/for-work"
            }, {
                labelId: "footer.resources.annualReturn",
                href: O
            }], [O]),
            M = p.default.useMemo(() => E.map(e => "footer.products.uhBloodVision" === e.labelId && "IN" === o ? { ...e,
                href: "/blood-vision/buy"
            } : "Ring PRO" === e.label && "US" === o ? { ...e,
                href: "/ring-pro"
            } : e), [o]),
            L = (0, d.useRouter)(),
            [K, Z] = p.default.useState(P.default);
        p.default.useEffect(() => {
            if (!L.isReady) return;
            let e = L.asPath.split("?")[0];
            Z(P[e.split("/").filter(Boolean)[0] ? .toLowerCase() || ""] || P.default)
        }, [L.asPath, L.isReady]);
        let {
            liteUI: J,
            footerDisabled: Q
        } = (0, m.useGlobalUI)();
        return J || Q || a.NO_HEADER_OR_FOOTER_PAGES.includes(L.pathname) ? null : (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsx)(N, {
                children: (0, t.jsxs)(j, {
                    children: [x ? (0, t.jsxs)(t.Fragment, {
                        children: [(0, t.jsx)(z, {
                            title: e("footer.products.head"),
                            openDefault: !f || f,
                            links: M,
                            t: e
                        }), (0, t.jsx)(z, {
                            title: e("footer.contactUs.head"),
                            openDefault: f,
                            links: w,
                            t: e
                        }), (0, t.jsxs)("div", {
                            children: [(0, t.jsx)(z, {
                                title: e("footer.company.head"),
                                openDefault: f,
                                links: I,
                                t: e
                            }), (0, t.jsx)(z, {
                                title: e("footer.business.head"),
                                openDefault: f,
                                links: C,
                                t: e
                            })]
                        }), (0, t.jsx)(z, {
                            title: e("footer.resources.head"),
                            openDefault: f,
                            links: U,
                            t: e
                        })]
                    }) : null, (0, t.jsxs)($, {
                        children: [(0, t.jsx)(X, {
                            className: "logo",
                            src: u.default,
                            alt: "Ultrahuman"
                        }), f ? (0, t.jsx)(c.default, {
                            href: "/hsa-fsa",
                            children: (0, t.jsx)(n.CustomImage, {
                                src: "web_v2/icons/hsa-fsa/hsa-fsa-white-outline.svg",
                                alt: "HSA/FSA",
                                width: "248",
                                height: "81",
                                style: {
                                    height: "3.8rem",
                                    width: "auto",
                                    padding: "1px"
                                }
                            })
                        }) : null, "IN" === o ? (0, t.jsxs)(D, {
                            children: [V, (0, t.jsx)("br", {}), "CIN: U74999KA2019PTC129250"]
                        }) : null, (0, t.jsx)(F, {
                            children: e("footer.bottomSection.content")
                        }), (0, t.jsx)(G, {
                            children: R.map((r, i) => (0, t.jsxs)(p.default.Fragment, {
                                children: [(0, t.jsx)(W, {
                                    href: r.href,
                                    children: T(r, e)
                                }), R.length - 1 !== i ? (0, t.jsx)(B, {}) : null]
                            }, r.href))
                        })]
                    }), (0, t.jsxs)(H, {
                        children: [(0, t.jsxs)(Y, {
                            children: [(0, t.jsx)("div", {
                                className: "socialLinksWrapper",
                                children: (0, t.jsx)("div", {
                                    className: "socialLinks",
                                    children: A.map(e => (0, t.jsx)(c.default, {
                                        href: e.link,
                                        children: (0, t.jsx)(s.default, {
                                            src: e.image,
                                            alt: e.link,
                                            width: 15,
                                            height: 15
                                        })
                                    }, e.link))
                                })
                            }), (0, t.jsx)("div", {
                                className: "appStoreLinks",
                                children: k.map(e => (0, t.jsx)(c.default, {
                                    href: e.href,
                                    children: (0, t.jsx)(s.default, {
                                        src: e.image,
                                        alt: e.href,
                                        width: 115,
                                        height: 34
                                    })
                                }, e.href))
                            }), f ? null : (0, t.jsxs)("div", {
                                className: "flex-container-mobile-2",
                                children: [(0, t.jsx)(c.default, {
                                    href: "/hsa-fsa",
                                    children: (0, t.jsx)(n.CustomImage, {
                                        src: "web_v2/icons/hsa-fsa/hsa-fsa-white-outline.svg",
                                        alt: "HSA/FSA",
                                        width: "248",
                                        height: "81",
                                        style: {
                                            height: "3.8rem",
                                            width: "auto",
                                            padding: "1px"
                                        }
                                    })
                                }), " ", (0, t.jsx)(b.RegionSelector, {
                                    displayFormat: "name"
                                })]
                            })]
                        }), f ? (0, t.jsx)(b.RegionSelector, {
                            displayFormat: "name"
                        }) : null]
                    })]
                })
            }), i > 768 ? (0, t.jsx)(q, {
                children: (0, t.jsx)(S, {
                    projectId: K
                }, K)
            }) : null]
        })
    }
}, 81022, 37563, e => {
    "use strict";
    e.s(["TypeformSnippet", () => K], 81022);
    var t = e.i(91398),
        r = e.i(91788),
        i = e.i(68489);
    e.s(["CookieConsentBanner", () => O, "useScript", () => q], 37563), e.i(50461), e.i(64157);
    var n = e.i(71179),
        a = e.i(33535),
        o = e.i(53147),
        s = e.i(94182),
        c = e.i(3115),
        d = e.i(75907),
        l = e.i(60997);

    function u(e, t) {
        return (u = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function p(e, t) {
        e.prototype = Object.create(t.prototype), e.prototype.constructor = e, u(e, t)
    }

    function f(e, t) {
        return e.replace(RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "")
    }
    var h = e.i(22367);
    let m = r.default.createContext(null);
    var g = function(e) {
            return e.scrollTop
        },
        y = "unmounted",
        b = "exited",
        S = "entering",
        x = "entered",
        v = "exiting",
        _ = function(e) {
            function t(t, r) {
                var i, n = e.call(this, t, r) || this,
                    a = r && !r.isMounting ? t.enter : t.appear;
                return n.appearStatus = null, t.in ? a ? (i = b, n.appearStatus = S) : i = x : i = t.unmountOnExit || t.mountOnEnter ? y : b, n.state = {
                    status: i
                }, n.nextCallback = null, n
            }
            p(t, e), t.getDerivedStateFromProps = function(e, t) {
                return e.in && t.status === y ? {
                    status: b
                } : null
            };
            var i = t.prototype;
            return i.componentDidMount = function() {
                this.updateStatus(!0, this.appearStatus)
            }, i.componentDidUpdate = function(e) {
                var t = null;
                if (e !== this.props) {
                    var r = this.state.status;
                    this.props.in ? r !== S && r !== x && (t = S) : (r === S || r === x) && (t = v)
                }
                this.updateStatus(!1, t)
            }, i.componentWillUnmount = function() {
                this.cancelNextCallback()
            }, i.getTimeouts = function() {
                var e, t, r, i = this.props.timeout;
                return e = t = r = i, null != i && "number" != typeof i && (e = i.exit, t = i.enter, r = void 0 !== i.appear ? i.appear : t), {
                    exit: e,
                    enter: t,
                    appear: r
                }
            }, i.updateStatus = function(e, t) {
                if (void 0 === e && (e = !1), null !== t)
                    if (this.cancelNextCallback(), t === S) {
                        if (this.props.unmountOnExit || this.props.mountOnEnter) {
                            var r = this.props.nodeRef ? this.props.nodeRef.current : h.default.findDOMNode(this);
                            r && g(r)
                        }
                        this.performEnter(e)
                    } else this.performExit();
                else this.props.unmountOnExit && this.state.status === b && this.setState({
                    status: y
                })
            }, i.performEnter = function(e) {
                var t = this,
                    r = this.props.enter,
                    i = this.context ? this.context.isMounting : e,
                    n = this.props.nodeRef ? [i] : [h.default.findDOMNode(this), i],
                    a = n[0],
                    o = n[1],
                    s = this.getTimeouts(),
                    c = i ? s.appear : s.enter;
                (e || r) && 1 ? (this.props.onEnter(a, o), this.safeSetState({
                    status: S
                }, function() {
                    t.props.onEntering(a, o), t.onTransitionEnd(c, function() {
                        t.safeSetState({
                            status: x
                        }, function() {
                            t.props.onEntered(a, o)
                        })
                    })
                })) : this.safeSetState({
                    status: x
                }, function() {
                    t.props.onEntered(a)
                })
            }, i.performExit = function() {
                var e = this,
                    t = this.props.exit,
                    r = this.getTimeouts(),
                    i = this.props.nodeRef ? void 0 : h.default.findDOMNode(this);
                t ? (this.props.onExit(i), this.safeSetState({
                    status: v
                }, function() {
                    e.props.onExiting(i), e.onTransitionEnd(r.exit, function() {
                        e.safeSetState({
                            status: b
                        }, function() {
                            e.props.onExited(i)
                        })
                    })
                })) : this.safeSetState({
                    status: b
                }, function() {
                    e.props.onExited(i)
                })
            }, i.cancelNextCallback = function() {
                null !== this.nextCallback && (this.nextCallback.cancel(), this.nextCallback = null)
            }, i.safeSetState = function(e, t) {
                t = this.setNextCallback(t), this.setState(e, t)
            }, i.setNextCallback = function(e) {
                var t = this,
                    r = !0;
                return this.nextCallback = function(i) {
                    r && (r = !1, t.nextCallback = null, e(i))
                }, this.nextCallback.cancel = function() {
                    r = !1
                }, this.nextCallback
            }, i.onTransitionEnd = function(e, t) {
                this.setNextCallback(t);
                var r = this.props.nodeRef ? this.props.nodeRef.current : h.default.findDOMNode(this),
                    i = null == e && !this.props.addEndListener;
                if (!r || i) return void setTimeout(this.nextCallback, 0);
                if (this.props.addEndListener) {
                    var n = this.props.nodeRef ? [this.nextCallback] : [r, this.nextCallback],
                        a = n[0],
                        o = n[1];
                    this.props.addEndListener(a, o)
                }
                null != e && setTimeout(this.nextCallback, e)
            }, i.render = function() {
                var e = this.state.status;
                if (e === y) return null;
                var t = this.props,
                    i = t.children,
                    n = (t.in, t.mountOnEnter, t.unmountOnExit, t.appear, t.enter, t.exit, t.timeout, t.addEndListener, t.onEnter, t.onEntering, t.onEntered, t.onExit, t.onExiting, t.onExited, t.nodeRef, (0, l.default)(t, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]));
                return r.default.createElement(m.Provider, {
                    value: null
                }, "function" == typeof i ? i(e, n) : r.default.cloneElement(r.default.Children.only(i), n))
            }, t
        }(r.default.Component);

    function w() {}
    _.contextType = m, _.propTypes = {}, _.defaultProps = { in: !1,
        mountOnEnter: !1,
        unmountOnExit: !1,
        appear: !1,
        enter: !0,
        exit: !0,
        onEnter: w,
        onEntering: w,
        onEntered: w,
        onExit: w,
        onExiting: w,
        onExited: w
    }, _.UNMOUNTED = y, _.EXITED = b, _.ENTERING = S, _.ENTERED = x, _.EXITING = v;
    var E = function(e, t) {
            return e && t && t.split(" ").forEach(function(t) {
                e.classList ? e.classList.remove(t) : "string" == typeof e.className ? e.className = f(e.className, t) : e.setAttribute("class", f(e.className && e.className.baseVal || "", t))
            })
        },
        I = function(e) {
            function t() {
                for (var t, r = arguments.length, i = Array(r), n = 0; n < r; n++) i[n] = arguments[n];
                return (t = e.call.apply(e, [this].concat(i)) || this).appliedClasses = {
                    appear: {},
                    enter: {},
                    exit: {}
                }, t.onEnter = function(e, r) {
                    var i = t.resolveArguments(e, r),
                        n = i[0],
                        a = i[1];
                    t.removeClasses(n, "exit"), t.addClass(n, a ? "appear" : "enter", "base"), t.props.onEnter && t.props.onEnter(e, r)
                }, t.onEntering = function(e, r) {
                    var i = t.resolveArguments(e, r),
                        n = i[0],
                        a = i[1];
                    t.addClass(n, a ? "appear" : "enter", "active"), t.props.onEntering && t.props.onEntering(e, r)
                }, t.onEntered = function(e, r) {
                    var i = t.resolveArguments(e, r),
                        n = i[0],
                        a = i[1] ? "appear" : "enter";
                    t.removeClasses(n, a), t.addClass(n, a, "done"), t.props.onEntered && t.props.onEntered(e, r)
                }, t.onExit = function(e) {
                    var r = t.resolveArguments(e)[0];
                    t.removeClasses(r, "appear"), t.removeClasses(r, "enter"), t.addClass(r, "exit", "base"), t.props.onExit && t.props.onExit(e)
                }, t.onExiting = function(e) {
                    var r = t.resolveArguments(e)[0];
                    t.addClass(r, "exit", "active"), t.props.onExiting && t.props.onExiting(e)
                }, t.onExited = function(e) {
                    var r = t.resolveArguments(e)[0];
                    t.removeClasses(r, "exit"), t.addClass(r, "exit", "done"), t.props.onExited && t.props.onExited(e)
                }, t.resolveArguments = function(e, r) {
                    return t.props.nodeRef ? [t.props.nodeRef.current, e] : [e, r]
                }, t.getClassNames = function(e) {
                    var r = t.props.classNames,
                        i = "string" == typeof r,
                        n = i && r ? r + "-" : "",
                        a = i ? "" + n + e : r[e],
                        o = i ? a + "-active" : r[e + "Active"],
                        s = i ? a + "-done" : r[e + "Done"];
                    return {
                        baseClassName: a,
                        activeClassName: o,
                        doneClassName: s
                    }
                }, t
            }
            p(t, e);
            var i = t.prototype;
            return i.addClass = function(e, t, r) {
                var i, n = this.getClassNames(t)[r + "ClassName"],
                    a = this.getClassNames("enter").doneClassName;
                "appear" === t && "done" === r && a && (n += " " + a), "active" === r && e && g(e), n && (this.appliedClasses[t][r] = n, i = n, e && i && i.split(" ").forEach(function(t) {
                    e.classList ? e.classList.add(t) : (e.classList ? t && e.classList.contains(t) : -1 !== (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + t + " ")) || ("string" == typeof e.className ? e.className = e.className + " " + t : e.setAttribute("class", (e.className && e.className.baseVal || "") + " " + t))
                }))
            }, i.removeClasses = function(e, t) {
                var r = this.appliedClasses[t],
                    i = r.base,
                    n = r.active,
                    a = r.done;
                this.appliedClasses[t] = {}, i && E(e, i), n && E(e, n), a && E(e, a)
            }, i.render = function() {
                var e = this.props,
                    t = (e.classNames, (0, l.default)(e, ["classNames"]));
                return r.default.createElement(_, (0, d.default)({}, t, {
                    onEnter: this.onEnter,
                    onEntered: this.onEntered,
                    onEntering: this.onEntering,
                    onExit: this.onExit,
                    onExiting: this.onExiting,
                    onExited: this.onExited
                }))
            }, t
        }(r.default.Component);
    I.defaultProps = {
        classNames: ""
    }, I.propTypes = {};
    var C = e.i(60814),
        A = e.i(46737),
        k = e.i(3828);
    let R = "COOKIE_CONSENT",
        P = "24px",
        T = e => e ? "calc(100% + 32px)" : "0px",
        V = e => e ? "calc(100% + 32px)" : "0px",
        j = e => e ? "calc(100% + 56px)" : P,
        N = e => e ? "calc(100% + 56px)" : P;
    (0, r.createContext)(!1).Provider;
    let O = (0, r.memo)(({
        className: e
    }) => {
        let {
            t: i
        } = (0, n.useTranslation)("common"), {
            cookieConsent: o,
            accept: s,
            reject: c
        } = (() => {
            let [e, t] = (0, r.useState)(void 0);
            return (0, r.useEffect)(() => {
                t(e => {
                    let t = W();
                    return e === t ? e : t
                })
            }, []), (0, r.useEffect)(() => {
                void 0 !== e && (e && window ? .gtag ? .("consent", "update", {
                    analytics_storage: "granted",
                    ad_storage: "granted",
                    ad_user_data: "granted",
                    ad_personalization: "granted"
                }), null !== e && H(e))
            }, [e]), {
                cookieConsent: e,
                accept: (0, r.useCallback)(() => {
                    t(!0)
                }, []),
                reject: (0, r.useCallback)(() => {
                    t(!1)
                }, [])
            }
        })(), {
            liteUI: d
        } = (0, A.useGlobalUI)(), l = (0, k.useRouter)(), u = (0, r.useRef)(null), [p, f] = (0, r.useState)(!1), [h, m] = (0, r.useState)(!1), g = l.pathname.startsWith("/cycle-report/"), y = null === o && !d;
        return (0, r.useEffect)(() => {
            if (!y || h) return void f(!1);
            let e = () => {
                let e = Math.max(window.scrollY ? ? 0, window.pageYOffset ? ? 0, document.documentElement ? .scrollTop ? ? 0, document.body ? .scrollTop ? ? 0) > 100;
                f(t => t === e ? t : e)
            };
            e();
            let t = {
                passive: !0
            };
            return window.addEventListener("scroll", e, t), () => {
                window.removeEventListener("scroll", e, t)
            }
        }, [y]), (0, t.jsxs)(t.Fragment, {
            children: [void 0 === o || h || g ? null : (0, t.jsx)(I, { in: y,
                timeout: 200,
                classNames: "fade",
                unmountOnExit: !0,
                appear: !0,
                nodeRef: u,
                children: (0, t.jsx)(U, {
                    ref: u,
                    className: e,
                    $isHiddenOnScroll: p,
                    children: (0, t.jsxs)(M, {
                        children: [(0, t.jsxs)(L, {
                            children: [i("cookieBanner.heading"), (0, t.jsx)(D, {
                                onClick: () => {
                                    m(!0)
                                },
                                children: (0, t.jsx)(a.CrossDark, {
                                    fill: "rgba(255, 255, 255, 0.5)"
                                })
                            })]
                        }), (0, t.jsxs)(B, {
                            children: [i("cookieBanner.description"), (0, t.jsx)($, {
                                href: "https://ultrahumanapp.notion.site/Cookie-Policy-ebcff6b1c95744fb9471ee874fc544e7",
                                target: "_blank",
                                rel: "noreferrer",
                                children: i("cookieBanner.policyLink")
                            })]
                        }), (0, t.jsxs)(G, {
                            children: [(0, t.jsx)(F, {
                                type: "button",
                                onClick: c,
                                children: i("cookieBanner.REJECT")
                            }), (0, t.jsx)(F, {
                                className: "primary",
                                type: "button",
                                onClick: s,
                                children: i("cookieBanner.ACCEPT")
                            })]
                        })]
                    })
                })
            }), o ? (0, t.jsx)(z, {}) : null]
        })
    });
    O.displayName = "CookieConsentBanner";
    let U = C.default.div.withConfig({
        displayName: "CookieConsentBanner__Container",
        componentId: "sc-36dbe881-0"
    })
    `
  position: fixed;
  left: 50%;
  right: unset;
  top: unset;
  bottom: 16px;
  transform: ${({$isHiddenOnScroll:e})=>`
    translateX(-50 % ) translateY($ {
        T(e)
    })
    `};

  width: calc(100% - 32px);
  max-width: 400px;

  padding: 16px;
  border-radius: 24px;

  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(0, 0, 0, 0.5);
  -webkit-backdrop-filter: blur(25px);
  backdrop-filter: blur(25px);

  z-index: 1000;
  opacity: 1;
  transition: opacity 200ms ease-out, transform 200ms ease-out;

  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    left: 16px;
    transform: ${({$isHiddenOnScroll:e})=>`
    translateY($ {
        V(e)
    })
    `};
    width: min(400px, calc(100% - 32px));
  }

  &.bg-grad {
    background: rgb(41, 6, 118);
    background: -moz-linear-gradient(
      90deg,
      rgba(41, 6, 118, 1) 0%,
      rgba(195, 87, 177, 1) 100%
    );
    background: -webkit-linear-gradient(
      90deg,
      rgba(41, 6, 118, 1) 0%,
      rgba(195, 87, 177, 1) 100%
    );
    background: linear-gradient(
      90deg,
      rgba(41, 6, 118, 1) 0%,
      rgba(195, 87, 177, 1) 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#290676",endColorstr="#c357b1",GradientType=1);
  }

  &.fade-appear {
    opacity: 0;
    transform: ${({$isHiddenOnScroll:e})=>`
    translateX(-50 % ) translateY($ {
        j(e)
    })
    `};

    @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
      transform: ${({$isHiddenOnScroll:e})=>`
    translateY($ {
        N(e)
    })
    `};
    }
  }
  &.fade-appear-active,
  &.fade-appear-done {
    opacity: 1;
    transform: ${({$isHiddenOnScroll:e})=>`
    translateX(-50 % ) translateY($ {
        T(e)
    })
    `};

    @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
      transform: ${({$isHiddenOnScroll:e})=>`
    translateY($ {
        V(e)
    })
    `};
    }
  }
  &.fade-exit {
    opacity: 1;
  }
  &.fade-exit-active {
    opacity: 0;
    transform: ${({$isHiddenOnScroll:e})=>`
    translateX(-50 % ) translateY($ {
        j(e)
    })
    `};

    @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
      transform: ${({$isHiddenOnScroll:e})=>`
    translateY($ {
        N(e)
    })
    `};
    }
  }
`, M = C.default.div.withConfig({
        displayName: "CookieConsentBanner__Content",
        componentId: "sc-36dbe881-1"
    })
    `
  display: flex;
  flex-direction: column;
  gap: 8px;
`, L = C.default.h2.withConfig({
        displayName: "CookieConsentBanner__Heading",
        componentId: "sc-36dbe881-2"
    })
    `
  margin: 0;
  font-size: 1.6rem;
  line-height: 120%;
  letter-spacing: -0.24px;
  color: rgba(255, 255, 255, 1);
  font-weight: 500;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`, D = C.default.button.withConfig({
        displayName: "CookieConsentBanner__CloseButton",
        componentId: "sc-36dbe881-3"
    })
    `
  width: 24px;
  height: 24px;
  border: none;
  background: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  padding: 4px;
  transition: all 0.2s ease-in-out;

  svg {
    width: 12px;
    height: 12px;
  }

  &:hover {
    transform: scale(1.02);
    background: rgba(255, 255, 255, 0.2);
  }
`, B = C.default.p.withConfig({
        displayName: "CookieConsentBanner__Description",
        componentId: "sc-36dbe881-4"
    })
    `
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0;
  font-size: 1.4rem;
  line-height: 150%;
  letter-spacing: -0.21px;
  color: rgba(255, 255, 255, 0.7);
`, $ = (0, C.default)(o.default).withConfig({
        displayName: "CookieConsentBanner__PolicyLink",
        componentId: "sc-36dbe881-5"
    })
    `
  display: flex;
  align-items: center;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: underline;
`, G = C.default.span.withConfig({
        displayName: "CookieConsentBanner__Actions",
        componentId: "sc-36dbe881-6"
    })
    `
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 8px;
`, F = C.default.button.withConfig({
        displayName: "CookieConsentBanner__ActionButton",
        componentId: "sc-36dbe881-7"
    })
    `
  background: rgba(255, 255, 255, 0.13);
  border: none;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
  padding: 12px 24px;
  cursor: pointer;
  text-decoration: none;
  border-radius: 40px;
  flex: 1;

  text-align: center;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: 14px; /* 100% */
  letter-spacing: -0.42px;

  transition: all 0.2s ease-in-out;

  &.primary {
    background: #ffffff;
    color: #000000;
  }

  &:hover {
    transform: scale(1.02);
  }
`, W = () => {
        let e = window.localStorage.getItem(R);
        if (null === e) return null;
        try {
            return JSON.parse(e)
        } catch (e) {
            return console.warn("Failed to parse cookie consent from localStorage:", e), null
        }
    }, H = e => {
        window.localStorage.setItem(R, JSON.stringify(e))
    }, Y = () => ((0, r.useEffect)(() => {
        try {
            let e = new URLSearchParams(window.location.search).get("fbclid");
            if (e) {
                document.cookie = `_uh_fbclid=${encodeURIComponent(e)};path=/;max-age=2592000;SameSite=Lax`;
                let t = `fb.1.${Date.now()}.${e}`;
                document.cookie = `_fbc=${encodeURIComponent(t)};path=/;max-age=2592000;SameSite=Lax`
            }
        } catch (e) {}
    }, []), null), z = () => {
        let {
            region: e
        } = (0, r.useContext)(c.RegionLocaleContext);
        return (0, t.jsxs)(r.default.Fragment, {
            children: [(0, t.jsx)(s.default, {
                src: "https://static.cloudflareinsights.com/beacon.min.js",
                strategy: "lazyOnload",
                "data-cf-beacon": '{"token": "7bc460f8fbb94c3aa879de7aa35167e3"}',
                defer: !0
            }), (0, t.jsx)(s.default, {
                id: "clarity",
                strategy: "lazyOnload",
                dangerouslySetInnerHTML: {
                    __html: `
          (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "pyv20l9bkd");
        `
                }
            }), (0, t.jsx)(s.default, {
                id: "mixpanel",
                strategy: "lazyOnload",
                dangerouslySetInnerHTML: {
                    __html: `
          (function (f, b) {
            if (!b.__SV) {
              var e, g, i, h;
              window.mixpanel = b;
              b._i = [];
              b.init = function (e, f, c) {
                function g(a, d) {
                  var b = d.split(".");
                  2 == b.length && ((a = a[b[0]]), (d = b[1]));
                  a[d] = function () {
                    a.push([d].concat(Array.prototype.slice.call(arguments, 0)));
                  };
                }
                var a = b;
                "undefined" !== typeof c ? (a = b[c] = []) : (c = "mixpanel");
                a.people = a.people || [];
                a.toString = function (a) {
                  var d = "mixpanel";
                  "mixpanel" !== c && (d += "." + c);
                  a || (d += " (stub)");
                  return d;
                };
                a.people.toString = function () {
                  return a.toString(1) + ".people (stub)";
                };
                i =
                  "disable time_event track track_pageview track_links track_forms track_with_groups add_group set_group remove_group register register_once alias unregister identify name_tag set_config reset opt_in_tracking opt_out_tracking has_opted_in_tracking has_opted_out_tracking clear_opt_in_out_tracking start_batch_senders people.set people.set_once people.unset people.increment people.append people.union people.track_charge people.clear_charges people.delete_user people.remove".split(
                    " "
                  );
                for (h = 0; h < i.length; h++) g(a, i[h]);
                var j = "set set_once union unset remove delete".split(" ");
                a.get_group = function () {
                  function b(c) {
                    d[c] = function () {
                      call2_args = arguments;
                      call2 = [c].concat(Array.prototype.slice.call(call2_args, 0));
                      a.push([e, call2]);
                    };
                  }
                  for (
                    var d = {},
                      e = ["get_group"].concat(Array.prototype.slice.call(arguments, 0)),
                      c = 0;
                    c < j.length;
                    c++
                  )
                    b(j[c]);
                  return d;
                };
                b._i.push([e, f, c]);
              };
              b.__SV = 1.2;
              e = f.createElement("script");
              e.type = "text/javascript";
              e.async = !0;
              e.src =
                "undefined" !== typeof MIXPANEL_CUSTOM_LIB_URL
                  ? MIXPANEL_CUSTOM_LIB_URL
                  : "file:" === f.location.protocol &&
                    "//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js".match(/^\\/\\//)
                  ? "https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js"
                  : "//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js";
              g = f.getElementsByTagName("script")[0];
              g.parentNode.insertBefore(e, g);
            }
          })(document, window.mixpanel || []);
          if (typeof window !== "undefined" && window.mixpanel) {
            window.mixpanel.init("8fcb55ee1f0db2ba6b2070374f9b4514", {
              debug: true,
              track_pageview: true,
              persistence: "localStorage",
            });
          }
        `
                }
            }), (0, t.jsx)(s.default, {
                src: "//js.hs-scripts.com/45759574.js",
                strategy: "lazyOnload",
                defer: !0,
                async: !0
            }), (0, t.jsx)(s.default, {
                id: "addshoppers",
                strategy: "lazyOnload",
                dangerouslySetInnerHTML: {
                    __html: `
          var AddShoppersWidgetOptions = { 'loadCss': false, 'pushResponse': false };
          (!function(){
              var t=document.createElement("script");
              t.type="text/javascript",
              t.async=!0,
              t.id="AddShoppers",
              t.src="https://shop.pe/widget/widget_async.js#68341a009e2f42c824dbc54c",
              document.getElementsByTagName("head")[0].appendChild(t)
          }());
        `
                }
            }), (0, t.jsx)(s.default, {
                id: "tiktok",
                strategy: "lazyOnload",
                dangerouslySetInnerHTML: {
                    __html: `
        !function (w, d, t) {
  w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(
var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script")
;n.type="text/javascript",n.async=!0,n.src=r+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};
  ttq.load('D25KTORC77UF7183DTR0');
  ttq.page();
}(window, document, 'ttq');
        `
                }
            }), (0, t.jsx)(s.default, {
                id: "meta",
                strategy: "lazyOnload",
                dangerouslySetInnerHTML: {
                    __html: `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '528565525249930');
        fbq('track', 'PageView');
        `
                }
            }), (0, t.jsx)("noscript", {
                children: (0, t.jsx)("img", {
                    height: "1",
                    width: "1",
                    style: {
                        display: "none"
                    },
                    alt: "meta pixel",
                    src: "https://www.facebook.com/tr?id=528565525249930&ev=PageView&noscript=1"
                })
            }), "US" !== e ? (0, t.jsx)(s.default, {
                id: "ascendia-prime",
                strategy: "lazyOnload",
                dangerouslySetInnerHTML: {
                    __html: '(function(){ var s = document.createElement("script"); s.async = true; s.src = (document.location.protocol == "https:" ? "https:" : "http:") + "//rtg.wewomedia.com/track/code.js"; var a = document.getElementsByTagName("script")[0]; a.parentNode.insertBefore(s, a); })();'
                }
            }) : null, (0, t.jsx)(Y, {})]
        })
    }, q = e => {
        (0, r.useEffect)(() => {
            let t = document.createElement("script");
            return e.onload && (t.onload = e.onload), t.type = "text/javascript", "src" in e ? t.src = e.src : t.innerHTML = e.body, e.options && Object.entries(e.options).forEach(([e, r]) => {
                t.setAttribute(e, r)
            }), e.head, document.body.appendChild(t), () => {
                e.head, document.body.removeChild(t)
            }
        }, [])
    }, X = (0, i.default)(() => e.A(26413).then(e => ({
        default: e.Widget
    })), {
        loadableGenerated: {
            modules: [24453]
        },
        ssr: !1,
        loading: () => (0, t.jsx)("div", {
            style: {
                minHeight: "200px",
                minWidth: "200px"
            },
            children: "Loading form..."
        })
    }), K = ({
        typeformId: e,
        className: i,
        style: n,
        frameTitle: a,
        trackingParams: o
    }) => (q({
        src: "https://embed.typeform.com/next/embed.js",
        options: {
            async: "true"
        }
    }), (0, t.jsx)(r.Suspense, {
        fallback: (0, t.jsx)("div", {
            style: {
                minHeight: "200px",
                minWidth: "200px"
            },
            children: "Loading form..."
        }),
        children: (0, t.jsx)(X, {
            id: e,
            inlineOnMobile: !0,
            disableScroll: !0,
            "data-tf-iframe-props": `title=${a}`,
            "data-tf-medium": "snippet",
            "data-tf-inline-on-mobile": !0,
            style: {
                minWidth: "200px",
                minHeight: "200px",
                ...n
            },
            className: `${i} typeformSnippet`,
            tracking: o ? ? {}
        })
    }))
}, 54013, 68284, 21535, 74481, 24298, 63635, e => {
    "use strict";
    e.s(["BookCallTFComponentDiv", () => s], 54013);
    var t = e.i(91398),
        r = e.i(91788),
        i = e.i(60814),
        n = e.i(57134),
        a = e.i(81022),
        o = e.i(50303);
    let s = (0, i.default)(({
        className: e,
        trackingParams: r
    }) => (0, t.jsx)("div", {
        className: e,
        children: (0, t.jsx)(a.TypeformSnippet, {
            typeformId: "yOi1E7Wy",
            frameTitle: "Book a call",
            className: "typeform-container",
            trackingParams: r
        })
    })).withConfig({
        displayName: "BottomBar__BookCallTFComponentDiv",
        componentId: "sc-65e8ea7-0"
    })
    `
  height: 80vh;
  width: calc(100vw - 48px);

  @media (min-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
    height: 500px;
    width: 780px;
  }

  .typeform-container {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
`;
    (0, i.default)(({
        className: e,
        rightPadding: i,
        initialActive: a
    }) => {
        let c = (0, r.useContext)(n.ModalContext),
            [d, l] = (0, r.useState)(!1),
            u = () => {
                c.set((0, t.jsx)(s, {})), c.setCloseButtonTheme("light"), c.show()
            };
        return (0, r.useEffect)(() => {
            if (a) return void l(!0);
            if (!window) return;
            let e = .8 * window.innerHeight;
            l(window.scrollY > e);
            let t = !1,
                r = () => {
                    t || (window.requestAnimationFrame(() => {
                        l(window.scrollY > e), t = !1
                    }), t = !0)
                };
            return document.addEventListener("scroll", r, {
                passive: !0
            }), () => {
                document.removeEventListener("scroll", r)
            }
        }, [a]), (0, t.jsx)(t.Fragment, {
            children: (0, t.jsx)("div", {
                className: e + `${d?" active":""} ${i?"right-padded":""}`,
                onClick: u,
                role: "button",
                tabIndex: 0,
                onKeyDown: u,
                children: (0, t.jsxs)("div", {
                    className: "content",
                    children: ["Get the right plan.", (0, t.jsxs)("span", {
                        className: "sub-content",
                        children: ["Talk to a specialist", (0, t.jsx)(o.CaretUpBlack, {
                            style: {
                                transform: "rotate(90deg)"
                            }
                        })]
                    })]
                })
            })
        })
    }).withConfig({
        displayName: "BottomBar",
        componentId: "sc-65e8ea7-1"
    })
    `
  padding: 2rem 2rem;
  transition: all 0.2s ease-in;
  transform: translateY(100%);
  cursor: pointer;

  &.right-padded {
    // padding-right: 72px;
    @media (min-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
      padding-right: 100px;
    }
  }

  &.active {
    transform: translateY(0);
  }

  &:hover {
    .sub-content {
      transform: translateX(4px);
    }
  }

  z-index: 10;
  position: sticky;
  bottom: 0;
  width: 100vw;
  background: rgba(255, 255, 255, 0.6);
  -webkit-backdrop-filter: blur(24px);
  backdrop-filter: blur(24px);

  .sm-display {
    display: initial;
    @media (min-width: ${({theme:e})=>e.global.phone.maxWidth}) {
      display: none;
    }
  }

  .lg-display {
    display: none;
    @media (min-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
      display: initial;
    }
  }

  @media (min-width: ${({theme:e})=>e.global.phone.maxWidth}) {
    padding: 1.2rem 4rem;
  }

  & .content {
    font-size: 1.7rem;
    font-weight: 500;
    color: rgba(0, 0, 0, 1);
    text-shadow: 0 0 8px rgba(0, 0, 0, 0.12);
    display: flex;
    justify-content: center;

    .sub-content {
      padding-left: 0.8rem;
      color: #000000;
      background: transparent;
      border: none;
      font-size: 1.7rem;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s ease-in-out;

      svg {
        height: 1rem;
        margin: auto 0;
        margin-left: 0.5rem;
      }
    }

    button {
      padding-left: 0.8rem;
      color: #000000;
      background: transparent;
      border: none;
      font-size: 1.7rem;
      font-weight: 500;

      &:hover {
        transition: all 0.2s ease-in-out;
        transform: translate(4px);
      }

      svg {
        height: 1rem;
        margin: auto 0;
        margin-left: 0.5rem;
      }
    }
  }
`;
    let c = {
        src: e.i(40172).default,
        width: 16,
        height: 14,
        blurWidth: 0,
        blurHeight: 0
    };
    e.s(["default", 0, c], 68284);
    let d = {
        src: e.i(5133).default,
        width: 16,
        height: 14,
        blurWidth: 0,
        blurHeight: 0
    };
    e.s(["default", 0, d], 21535);
    let l = {
        src: e.i(34529).default,
        width: 16,
        height: 16,
        blurWidth: 0,
        blurHeight: 0
    };
    e.s(["default", 0, l], 74481), e.s(["CartIcon", () => y], 24298);
    var u = e.i(3828),
        p = e.i(79546);
    let f = {
            src: e.i(20401).default,
            width: 20,
            height: 23,
            blurWidth: 0,
            blurHeight: 0
        },
        h = {
            src: e.i(41059).default,
            width: 20,
            height: 23,
            blurWidth: 0,
            blurHeight: 0
        };
    var m = e.i(73528),
        g = e.i(3115);
    let y = (0, i.default)(({
        className: e,
        iconTheme: i
    }) => {
        let n = (0, u.useRouter)(),
            a = (0, r.useContext)(p.CartContext),
            {
                regionSlug: o,
                region: s
            } = (0, r.useContext)(g.RegionLocaleContext),
            [c, d] = (0, r.useState)(!1),
            [l, f] = (0, r.useState)(0);
        (0, r.useEffect)(() => {
            let e = n.pathname,
                t = ("/blood-vision/buy" === e || e.startsWith("/blood-vision/buy/")) && "IN" === s;
            if (!t) try {
                let e = localStorage.getItem("bloodVisionIndiaCart"),
                    t = localStorage.getItem("bloodVisionIndiaPincode"),
                    r = localStorage.getItem("bloodVisionIndiaCheckoutData");
                (e || t || r) && (console.log("[Cart Isolation] Not on Blood Vision page - clearing Blood Vision data instantly"), localStorage.removeItem("bloodVisionIndiaCart"), localStorage.removeItem("bloodVisionIndiaPincode"), localStorage.removeItem("bloodVisionIndiaCheckoutData"), sessionStorage.removeItem("bloodVisionActiveSession"), sessionStorage.removeItem("bloodVisionLastVisit"), sessionStorage.removeItem("blood_vision_india_pincode"))
            } catch (e) {
                console.error("Error clearing Blood Vision cart:", e)
            }
            d(t);
            let r = () => {
                try {
                    let e = localStorage.getItem("bloodVisionIndiaCart");
                    if (e) {
                        let t = JSON.parse(e),
                            r = Object.values(t).reduce((e, t) => e + (t.quantity || 0), 0);
                        f(r)
                    } else f(0)
                } catch (e) {
                    console.error("Error reading blood vision cart:", e), f(0)
                }
            };
            r();
            let i = e => {
                "bloodVisionIndiaCart" === e.key && r()
            };
            window.addEventListener("storage", i);
            let a = setInterval(r, 1e3);
            return () => {
                window.removeEventListener("storage", i), clearInterval(a)
            }
        }, [n.pathname, s]);
        let h = c ? l : a.cart ? .totalQuantity || 0;
        return (0, t.jsx)("span", {
            className: `${e} ${i}`,
            onClick: () => {
                if (m.default.track("Cart Icon - CLICK"), c) try {
                    let e = localStorage.getItem("bloodVisionIndiaPincode");
                    if (e) {
                        let t = JSON.parse(e);
                        t.pincode && !t.is_default_pincode ? n.push(`/${o}/blood-vision/buy/checkout`) : console.log("[Cart] User needs to provide pincode first")
                    }
                } catch (e) {
                    console.error("Error reading pincode data:", e)
                } else a.showCart()
            },
            "aria-hidden": "true",
            children: h > 0 ? (0, t.jsx)("span", {
                "data-cart-count": !0,
                "aria-label": `${h} item${1===h?"":"s"} in cart`,
                children: h
            }) : null
        })
    }).withConfig({
        displayName: "Cart__CartIcon",
        componentId: "sc-98b1ef79-0"
    })
    `
  display: inline-block;
  width: 24px;
  height: 24px;
  background-image: url(${f.src});
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  cursor: pointer;

  &.light {
    background-image: url(${h.src});
  }

  span {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(50%, 50%);
    font-weight: 500;
    font-size: 1rem;
    color: black;
    letter-spacing: 0;
    text-align: center;
    background-color: white;
    min-width: 16px;
    min-height: 16px;
    border-radius: 50%;
    padding-top: 2px;
  }
`;
    e.s(["MarketingBanner", () => C, "isMarketingBannerActive", () => A], 63635);
    var b = e.i(26019),
        S = e.i(19231),
        x = e.i(53147);
    let v = ["IN", "AE", "CH", "IS", "GB", "AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IE", "IT", "LV", "LT", "LU", "MT", "MC", "NL", "PL", "PT", "RO", "SK", "SI", "ES", "SE", "FO", "NO", "ZA", "HK"],
        _ = (0, i.default)(({
            className: e
        }) => {
            let {
                region: i,
                flag: n,
                countryName: a
            } = (0, r.useContext)(g.RegionLocaleContext);
            if ("XX" === i || !i || w.includes(i)) return null;
            let o = "GLOBAL" === i,
                s = a ? (0, t.jsxs)(t.Fragment, {
                    children: ["Shipping", " ", o ? "Ring AIR" : "US" === i || "PR" === i || [...v, "IN", "AE"].includes(i) ? "" : "Ring AIR", " ", !o && (0, t.jsxs)(t.Fragment, {
                        children: ["to ", a, " ", n && (0, t.jsx)(b.default, {
                            src: n,
                            alt: `${i} flag`,
                            width: 16,
                            height: 16,
                            style: {
                                borderRadius: "50%",
                                display: "inline-block",
                                verticalAlign: "middle"
                            }
                        })]
                    })]
                }) : null;
            return (0, t.jsx)("div", {
                className: `${e} gtm`,
                "aria-hidden": "true",
                "data-buttontype": "marketing banner",
                children: (0, t.jsx)(S.Container, {
                    children: s
                })
            })
        }).withConfig({
            displayName: "MarketingBanner__ShippingBanner",
            componentId: "sc-1a13cad5-0"
        })
    `
  position: relative;
  z-index: 100;
  background: #000000;
  color: #ffffff;
  text-align: center;
  font-size: 1.4rem;

  height: 32px;
  display: grid;
  place-items: center;

  i {
    color: ${({theme:e})=>e.colorsV2.accent} !important;
    font-style: normal;
  }

  &.hide {
    display: none;
  }
`, w = ["PK", "SY", "SS", "YE", "ET", "BY", "CF", "ER", "IQ", "KP", "LY", "PS", "RU", "SO"], E = (0, i.default)(({
        className: e,
        content: i,
        onClick: n
    }) => {
        let a = (0, u.useRouter)(),
            {
                region: o
            } = (0, r.useContext)(g.RegionLocaleContext),
            s = (0, r.useRef)(null),
            c = !w.includes(o),
            d = (0, x.useFormatLink)(),
            [l, p] = (0, r.useState)(0);
        return (0, r.useEffect)(() => {
            {
                let e = setInterval(() => {
                    p(e => (e + 1) % 2)
                }, 6e3);
                return () => {
                    clearInterval(e)
                }
            }
        }, [2]), (0, t.jsx)("div", {
            className: e,
            children: (0, t.jsxs)(t.Fragment, {
                children: [0 === l ? (0, t.jsx)("div", {
                    className: "content",
                    onClick: () => {
                        n ? n() : a.push(d("/home", {
                            asObject: !0
                        }))
                    },
                    "aria-hidden": !0,
                    children: i
                }) : null, 1 === l && c ? (0, t.jsx)("div", {
                    ref: s,
                    "aria-hidden": !0,
                    children: (0, t.jsx)(_, {})
                }) : null]
            })
        })
    }).withConfig({
        displayName: "MarketingBanner__OneMoreWithShippingBanner",
        componentId: "sc-1a13cad5-1"
    })
    `
  background: #000;
  color: #fff;
  position: relative;
  cursor: pointer;

  min-height: 32px;
  display: grid;
  place-items: center;

  .hide {
    opacity: 0;
  }

  @media (min-width: ${({theme:e})=>e.globalV2.sm.maxWidth}) {
    .only-mobile {
      display: none;
    }
  }

  & > .content {
    text-align: center;
    font-size: 1.4rem;
  }
`, I = {
        bannerActive: !0,
        bannerComponent: (0, t.jsx)(E, {})
    }, C = (0, i.default)(() => {
        if (!I.bannerActive) return null;
        let {
            region: e
        } = (0, r.useContext)(g.RegionLocaleContext);
        if ("/rare" === (0, u.useRouter)().pathname || "XX" == e) return null;
        let i = (e || "").toUpperCase();
        return w.includes(i) ? null : (0, t.jsx)(_, {})
    }).withConfig({
        displayName: "MarketingBanner",
        componentId: "sc-1a13cad5-2"
    })
    `
  width: 100vw;
  position: relative;
  top: 0;
  z-index: 10000;

  animation: ${i.keyframes`
    from {
      transform: translateY(-100%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  `} 0.3s ease-in-out forwards;
`, A = () => I.bannerActive
}, 84586, e => {
    "use strict";
    e.s(["isMobileDevice", 0, () => {
        let e = "maxTouchPoints" in navigator && navigator.maxTouchPoints > 0;
        if (!e) {
            let e = navigator.userAgent;
            return /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e)
        }
        return e
    }])
}, 25704, e => {
    "use strict";
    var t = e.i(91398),
        r = e.i(21666),
        i = e.i(60814),
        n = e.i(91788),
        a = e.i(58774);
    let o = i.default.div.withConfig({
        displayName: "UHAppDownloadModal__Flex",
        componentId: "sc-e2dd395b-0"
    })
    `
  display: flex;
  align-items: ${({centerAlign:e})=>e?"center":"flex-start"};
  justify-content: ${({centerJustify:e})=>e?"center":"flex-start"};
  gap: ${({gap:e})=>e??0};
  flex-direction: ${({direction:e})=>e??"row"};
  order: ${({order:e})=>e??"unset"};
  &.${e=>e.className} {
    /* Additional styles go here */
  }
`, s = (0, i.default)(({
        className: e,
        text: i,
        link: s,
        image: c,
        heading: d
    }) => {
        let l = (0, n.useRef)(null),
            u = "https://ultrahuman.com";
        return (0, t.jsx)("div", {
            className: e,
            children: (0, t.jsx)(o, {
                direction: "row",
                style: {
                    justifyContent: "space-between"
                },
                children: (0, t.jsxs)(o, {
                    direction: "column",
                    children: [(0, t.jsx)("h3", {
                        style: {
                            order: 1
                        },
                        children: d ? ? "Get the Ultrahuman App"
                    }), i ? (0, t.jsx)("p", {
                        style: {
                            order: 2
                        },
                        className: "desktop-only",
                        children: i
                    }) : null, (0, t.jsxs)(o, {
                        direction: "row",
                        order: 5,
                        style: {
                            alignItems: "end"
                        },
                        children: [(0, t.jsx)(r.CustomImage, {
                            alt: "",
                            src: c ? ? "web_v2/UHAppQr.png",
                            width: "100",
                            height: "100",
                            className: "desktop-only",
                            style: {
                                marginRight: "12px"
                            }
                        }), (0, t.jsxs)("div", {
                            className: "copy-link",
                            "aria-hidden": "true",
                            onClick: () => {
                                window && window.navigator.clipboard.writeText(s ? ? u).then(() => {
                                    l.current && (l.current.style.backgroundColor = "#008a05", setTimeout(() => {
                                        l.current && (l.current.style.backgroundColor = "rgba(0, 0, 0)")
                                    }, 1500))
                                })
                            },
                            children: [(0, t.jsx)("div", {
                                className: "link-content",
                                children: s ? ? u
                            }), (0, t.jsx)("div", {
                                className: "copy-action-element",
                                ref: l,
                                children: (0, t.jsx)(a.LinkWhite, {})
                            })]
                        })]
                    })]
                })
            })
        })
    }).withConfig({
        displayName: "UHAppDownloadModal__UhAppModal",
        componentId: "sc-e2dd395b-1"
    })
    `
  padding: 40px 29px;
  width: 100%;

  .top-bar {
    margin-bottom: 8px;
  }

  h4 {
    font-size: 15px;
    font-weight: 500;
    line-height: 110%;
    letter-spacing: -0.6px;
    text-transform: uppercase;
  }

  h3 {
    font-size: 24px;
    font-weight: 500;
    line-height: 110%; /* 35.2px */
    letter-spacing: -1.28px;
    margin-bottom: 4px;
  }

  .copy-link {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    gap: 4px;

    .link-content {
      padding: 8px 20px;
      border-radius: 8px;
      border: 1px solid #d9d9d9;
      background: #f5f5f5;
      font-size: 1.6rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 240px;
      line-height: 150%;

      @media (min-width: ${({theme:e})=>e.globalV2.lg.maxWidth}) {
        max-width: 280px;
      }
    }

    .copy-action-element {
      border-radius: 8px;
      background: #000;
      min-height: 100%;
      aspect-ratio: 1/1;
      width: auto;
      display: grid;
      place-items: center;
      padding: 4px 12px;
      transition: all 0.2s ease-in-out;
    }
  }

  .steps {
    margin-top: 20px;
    gap: 29px;
    flex-direction: column;

    .step {
      display: flex;
      align-items: center;
      gap: 10px;
      width: 100%;

      .step-image {
        margin-left: auto;
      }

      .step-number {
        border-radius: 50%;
        background: #1d1d1d;
        width: 28px;
        height: 28px;
        display: grid;
        place-items: center;
        color: #fff;
      }

      p {
        flex-shrink: 20;
        font-size: 14px;
        line-height: 130%; /* 18.2px */
        letter-spacing: -0.56px;
      }

      .step-mobile-wrapper {
        gap: 10px;
      }
    }
  }

  .tab {
    border-radius: 4px;
    background: #ececec;
    color: #1c1c1c;
    font-size: 10px;
    font-weight: 500;
    line-height: 100%; /* 10px */
    letter-spacing: -0.4px;
    padding: 2px 6px;
  }

  .mobile-only {
    display: block;
    &.flex {
      display: flex;
    }
    &.grid {
      display: grid;
    }
  }

  .desktop-only {
    display: none !important;
  }

  @media (min-width: ${({theme:e})=>e.globalV2.lg.maxWidth}) {
    padding: 40px;

    .top-bar {
      margin-top: 29px;
      margin-bottom: 12px;
    }

    p {
      color: rgba(0, 0, 0, 0.6);
      font-size: 16px;
      line-height: 130%; /* 20.8px */
      letter-spacing: -0.64px;
      margin-bottom: 24px;
    }

    hr {
      margin: 37px 0;
      border-top: #1010101a;
    }

    .steps {
      // margin-top: 20px;
      // gap: 29px;
      flex-direction: row;

      .step {
        display: flex;
        width: 229px;
        height: 221px;
        flex-direction: column;

        .step-image {
          margin: 0;
        }

        .step-number {
          display: grid;
          place-items: center;
        }
        p {
          flex-shrink: 20;
          font-size: 14px;
          line-height: 130%; /* 18.2px */
          letter-spacing: -0.56px;
          height: 56px;
          margin-top: auto;
          width: 90%;
          text-align: center;
        }

        &.step-3 {
          .step-image {
            margin-top: 50px;
          }
        }
        .step-mobile-wrapper {
          gap: 10px;
        }
      }
    }
    .mobile-only {
      display: none !important;
    }
    .desktop-only {
      display: block !important;
      &.flex {
        display: flex !important;
      }
      &.grid {
        display: grid !important;
      }
    }
  }
`;
    e.s(["UhAppModal", 0, s])
}, 63933, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var i = {
        ServerInsertedHTMLContext: function() {
            return o
        },
        useServerInsertedHTML: function() {
            return s
        }
    };
    for (var n in i) Object.defineProperty(r, n, {
        enumerable: !0,
        get: i[n]
    });
    let a = e.r(52456)._(e.r(91788)),
        o = a.default.createContext(null);

    function s(e) {
        let t = (0, a.useContext)(o);
        t && t(e)
    }
}, 12098, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var i = {
        UnrecognizedActionError: function() {
            return a
        },
        unstable_isUnrecognizedActionError: function() {
            return o
        }
    };
    for (var n in i) Object.defineProperty(r, n, {
        enumerable: !0,
        get: i[n]
    });
    class a extends Error {
        constructor(...e) {
            super(...e), this.name = "UnrecognizedActionError"
        }
    }

    function o(e) {
        return !!(e && "object" == typeof e && e instanceof a)
    }("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 56781, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var i = {
        bindSnapshot: function() {
            return d
        },
        createAsyncLocalStorage: function() {
            return c
        },
        createSnapshot: function() {
            return l
        }
    };
    for (var n in i) Object.defineProperty(r, n, {
        enumerable: !0,
        get: i[n]
    });
    let a = Object.defineProperty(Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available"), "__NEXT_ERROR_CODE", {
        value: "E504",
        enumerable: !1,
        configurable: !0
    });
    class o {
        disable() {
            throw a
        }
        getStore() {}
        run() {
            throw a
        }
        exit() {
            throw a
        }
        enterWith() {
            throw a
        }
        static bind(e) {
            return e
        }
    }
    let s = "u" > typeof globalThis && globalThis.AsyncLocalStorage;

    function c() {
        return s ? new s : new o
    }

    function d(e) {
        return s ? s.bind(e) : o.bind(e)
    }

    function l() {
        return s ? s.snapshot() : function(e, ...t) {
            return e(...t)
        }
    }
}, 77292, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "actionAsyncStorageInstance", {
        enumerable: !0,
        get: function() {
            return i
        }
    });
    let i = (0, e.r(56781).createAsyncLocalStorage)()
}, 30324, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "actionAsyncStorage", {
        enumerable: !0,
        get: function() {
            return i.actionAsyncStorageInstance
        }
    });
    let i = e.r(77292)
}, 53656, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var i = {
        getRedirectError: function() {
            return c
        },
        getRedirectStatusCodeFromError: function() {
            return f
        },
        getRedirectTypeFromError: function() {
            return p
        },
        getURLFromRedirectError: function() {
            return u
        },
        permanentRedirect: function() {
            return l
        },
        redirect: function() {
            return d
        }
    };
    for (var n in i) Object.defineProperty(r, n, {
        enumerable: !0,
        get: i[n]
    });
    let a = e.r(40184),
        o = e.r(1939),
        s = "u" < typeof window ? e.r(30324).actionAsyncStorage : void 0;

    function c(e, t, r = a.RedirectStatusCode.TemporaryRedirect) {
        let i = Object.defineProperty(Error(o.REDIRECT_ERROR_CODE), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: !1,
            configurable: !0
        });
        return i.digest = `${o.REDIRECT_ERROR_CODE};${t};${e};${r};`, i
    }

    function d(e, t) {
        throw c(e, t ? ? = s ? .getStore() ? .isAction ? o.RedirectType.push : o.RedirectType.replace, a.RedirectStatusCode.TemporaryRedirect)
    }

    function l(e, t = o.RedirectType.replace) {
        throw c(e, t, a.RedirectStatusCode.PermanentRedirect)
    }

    function u(e) {
        return (0, o.isRedirectError)(e) ? e.digest.split(";").slice(2, -2).join(";") : null
    }

    function p(e) {
        if (!(0, o.isRedirectError)(e)) throw Object.defineProperty(Error("Not a redirect error"), "__NEXT_ERROR_CODE", {
            value: "E260",
            enumerable: !1,
            configurable: !0
        });
        return e.digest.split(";", 2)[1]
    }

    function f(e) {
        if (!(0, o.isRedirectError)(e)) throw Object.defineProperty(Error("Not a redirect error"), "__NEXT_ERROR_CODE", {
            value: "E260",
            enumerable: !1,
            configurable: !0
        });
        return Number(e.digest.split(";").at(-2))
    }("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 32075, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "notFound", {
        enumerable: !0,
        get: function() {
            return a
        }
    });
    let i = e.r(91622),
        n = `${i.HTTP_ERROR_FALLBACK_ERROR_CODE};404`;

    function a() {
        let e = Object.defineProperty(Error(n), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: !1,
            configurable: !0
        });
        throw e.digest = n, e
    }("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 69790, (e, t, r) => {
    "use strict";

    function i() {
        throw Object.defineProperty(Error("`forbidden()` is experimental and only allowed to be enabled when `experimental.authInterrupts` is enabled."), "__NEXT_ERROR_CODE", {
            value: "E488",
            enumerable: !1,
            configurable: !0
        })
    }
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "forbidden", {
        enumerable: !0,
        get: function() {
            return i
        }
    }), e.r(91622).HTTP_ERROR_FALLBACK_ERROR_CODE, ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 4047, (e, t, r) => {
    "use strict";

    function i() {
        throw Object.defineProperty(Error("`unauthorized()` is experimental and only allowed to be used when `experimental.authInterrupts` is enabled."), "__NEXT_ERROR_CODE", {
            value: "E411",
            enumerable: !1,
            configurable: !0
        })
    }
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "unauthorized", {
        enumerable: !0,
        get: function() {
            return i
        }
    }), e.r(91622).HTTP_ERROR_FALLBACK_ERROR_CODE, ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 2431, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "unstable_rethrow", {
        enumerable: !0,
        get: function() {
            return function e(t) {
                if ((0, n.isNextRouterError)(t) || (0, i.isBailoutToCSRError)(t)) throw t;
                t instanceof Error && "cause" in t && e(t.cause)
            }
        }
    });
    let i = e.r(14760),
        n = e.r(68934);
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 24616, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var i = {
        isHangingPromiseRejectionError: function() {
            return a
        },
        makeDevtoolsIOAwarePromise: function() {
            return u
        },
        makeHangingPromise: function() {
            return d
        }
    };
    for (var n in i) Object.defineProperty(r, n, {
        enumerable: !0,
        get: i[n]
    });

    function a(e) {
        return "object" == typeof e && null !== e && "digest" in e && e.digest === o
    }
    let o = "HANGING_PROMISE_REJECTION";
    class s extends Error {
        constructor(e, t) {
            super(`During prerendering, ${t} rejects when the prerender is complete. Typically these errors are handled by React but if you move ${t} to a different context by using \`setTimeout\`, \`after\`, or similar functions you may observe this error and you should handle it in that context. This occurred at route "${e}".`), this.route = e, this.expression = t, this.digest = o
        }
    }
    let c = new WeakMap;

    function d(e, t, r) {
        if (e.aborted) return Promise.reject(new s(t, r)); {
            let i = new Promise((i, n) => {
                let a = n.bind(null, new s(t, r)),
                    o = c.get(e);
                if (o) o.push(a);
                else {
                    let t = [a];
                    c.set(e, t), e.addEventListener("abort", () => {
                        for (let e = 0; e < t.length; e++) t[e]()
                    }, {
                        once: !0
                    })
                }
            });
            return i.catch(l), i
        }
    }

    function l() {}

    function u(e, t, r) {
        return t.stagedRendering ? t.stagedRendering.delayUntilStage(r, void 0, e) : new Promise(t => {
            setTimeout(() => {
                t(e)
            }, 0)
        })
    }
}, 77989, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "isPostpone", {
        enumerable: !0,
        get: function() {
            return n
        }
    });
    let i = Symbol.for("react.postpone");

    function n(e) {
        return "object" == typeof e && null !== e && e.$$typeof === i
    }
}, 93733, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var i = {
        DynamicServerError: function() {
            return o
        },
        isDynamicServerError: function() {
            return s
        }
    };
    for (var n in i) Object.defineProperty(r, n, {
        enumerable: !0,
        get: i[n]
    });
    let a = "DYNAMIC_SERVER_USAGE";
    class o extends Error {
        constructor(e) {
            super(`Dynamic server usage: ${e}`), this.description = e, this.digest = a
        }
    }

    function s(e) {
        return "object" == typeof e && null !== e && "digest" in e && "string" == typeof e.digest && e.digest === a
    }("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 84755, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var i = {
        StaticGenBailoutError: function() {
            return o
        },
        isStaticGenBailoutError: function() {
            return s
        }
    };
    for (var n in i) Object.defineProperty(r, n, {
        enumerable: !0,
        get: i[n]
    });
    let a = "NEXT_STATIC_GEN_BAILOUT";
    class o extends Error {
        constructor(...e) {
            super(...e), this.code = a
        }
    }

    function s(e) {
        return "object" == typeof e && null !== e && "code" in e && e.code === a
    }("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 61318, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "workUnitAsyncStorageInstance", {
        enumerable: !0,
        get: function() {
            return i
        }
    });
    let i = (0, e.r(56781).createAsyncLocalStorage)()
}, 86357, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var i = {
        ACTION_HEADER: function() {
            return o
        },
        FLIGHT_HEADERS: function() {
            return h
        },
        NEXT_ACTION_NOT_FOUND_HEADER: function() {
            return v
        },
        NEXT_ACTION_REVALIDATED_HEADER: function() {
            return E
        },
        NEXT_DID_POSTPONE_HEADER: function() {
            return y
        },
        NEXT_HMR_REFRESH_HASH_COOKIE: function() {
            return u
        },
        NEXT_HMR_REFRESH_HEADER: function() {
            return l
        },
        NEXT_HTML_REQUEST_ID_HEADER: function() {
            return w
        },
        NEXT_IS_PRERENDER_HEADER: function() {
            return x
        },
        NEXT_REQUEST_ID_HEADER: function() {
            return _
        },
        NEXT_REWRITTEN_PATH_HEADER: function() {
            return b
        },
        NEXT_REWRITTEN_QUERY_HEADER: function() {
            return S
        },
        NEXT_ROUTER_PREFETCH_HEADER: function() {
            return c
        },
        NEXT_ROUTER_SEGMENT_PREFETCH_HEADER: function() {
            return d
        },
        NEXT_ROUTER_STALE_TIME_HEADER: function() {
            return g
        },
        NEXT_ROUTER_STATE_TREE_HEADER: function() {
            return s
        },
        NEXT_RSC_UNION_QUERY: function() {
            return m
        },
        NEXT_URL: function() {
            return p
        },
        RSC_CONTENT_TYPE_HEADER: function() {
            return f
        },
        RSC_HEADER: function() {
            return a
        }
    };
    for (var n in i) Object.defineProperty(r, n, {
        enumerable: !0,
        get: i[n]
    });
    let a = "rsc",
        o = "next-action",
        s = "next-router-state-tree",
        c = "next-router-prefetch",
        d = "next-router-segment-prefetch",
        l = "next-hmr-refresh",
        u = "__next_hmr_refresh_hash__",
        p = "next-url",
        f = "text/x-component",
        h = [a, s, c, l, d],
        m = "_rsc",
        g = "x-nextjs-stale-time",
        y = "x-nextjs-postponed",
        b = "x-nextjs-rewritten-path",
        S = "x-nextjs-rewritten-query",
        x = "x-nextjs-prerender",
        v = "x-nextjs-action-not-found",
        _ = "x-nextjs-request-id",
        w = "x-nextjs-html-request-id",
        E = "x-action-revalidated";
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 19202, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var i = {
        getCacheSignal: function() {
            return g
        },
        getDraftModeProviderForCacheScope: function() {
            return m
        },
        getHmrRefreshHash: function() {
            return p
        },
        getPrerenderResumeDataCache: function() {
            return l
        },
        getRenderResumeDataCache: function() {
            return u
        },
        getRuntimeStagePromise: function() {
            return y
        },
        getServerComponentsHmrCache: function() {
            return h
        },
        isHmrRefresh: function() {
            return f
        },
        throwForMissingRequestStore: function() {
            return c
        },
        throwInvariantForMissingStore: function() {
            return d
        },
        workUnitAsyncStorage: function() {
            return a.workUnitAsyncStorageInstance
        }
    };
    for (var n in i) Object.defineProperty(r, n, {
        enumerable: !0,
        get: i[n]
    });
    let a = e.r(61318),
        o = e.r(86357),
        s = e.r(7117);

    function c(e) {
        throw Object.defineProperty(Error(`\`${e}\` was called outside a request scope. Read more: https://nextjs.org/docs/messages/next-dynamic-api-wrong-context`), "__NEXT_ERROR_CODE", {
            value: "E251",
            enumerable: !1,
            configurable: !0
        })
    }

    function d() {
        throw Object.defineProperty(new s.InvariantError("Expected workUnitAsyncStorage to have a store."), "__NEXT_ERROR_CODE", {
            value: "E696",
            enumerable: !1,
            configurable: !0
        })
    }

    function l(e) {
        switch (e.type) {
            case "prerender":
            case "prerender-runtime":
            case "prerender-ppr":
            case "prerender-client":
                return e.prerenderResumeDataCache;
            case "request":
                if (e.prerenderResumeDataCache) return e.prerenderResumeDataCache;
            case "prerender-legacy":
            case "cache":
            case "private-cache":
            case "unstable-cache":
                return null;
            default:
                return e
        }
    }

    function u(e) {
        switch (e.type) {
            case "request":
            case "prerender":
            case "prerender-runtime":
            case "prerender-client":
                if (e.renderResumeDataCache) return e.renderResumeDataCache;
            case "prerender-ppr":
                return e.prerenderResumeDataCache ? ? null;
            case "cache":
            case "private-cache":
            case "unstable-cache":
            case "prerender-legacy":
                return null;
            default:
                return e
        }
    }

    function p(e, t) {
        if (e.dev) switch (t.type) {
            case "cache":
            case "private-cache":
            case "prerender":
            case "prerender-runtime":
                return t.hmrRefreshHash;
            case "request":
                var r;
                return null == (r = t.cookies.get(o.NEXT_HMR_REFRESH_HASH_COOKIE)) ? void 0 : r.value
        }
    }

    function f(e, t) {
        if (e.dev) switch (t.type) {
            case "cache":
            case "private-cache":
            case "request":
                return t.isHmrRefresh ? ? !1
        }
        return !1
    }

    function h(e, t) {
        if (e.dev) switch (t.type) {
            case "cache":
            case "private-cache":
            case "request":
                return t.serverComponentsHmrCache
        }
    }

    function m(e, t) {
        if (e.isDraftMode) switch (t.type) {
            case "cache":
            case "private-cache":
            case "unstable-cache":
            case "prerender-runtime":
            case "request":
                return t.draftMode
        }
    }

    function g(e) {
        switch (e.type) {
            case "prerender":
            case "prerender-client":
            case "prerender-runtime":
                return e.cacheSignal;
            case "request":
                if (e.cacheSignal) return e.cacheSignal;
            case "prerender-ppr":
            case "prerender-legacy":
            case "cache":
            case "private-cache":
            case "unstable-cache":
                return null;
            default:
                return e
        }
    }

    function y(e) {
        switch (e.type) {
            case "prerender-runtime":
            case "private-cache":
                return e.runtimeStagePromise;
            case "prerender":
            case "prerender-client":
            case "prerender-ppr":
            case "prerender-legacy":
            case "request":
            case "cache":
            case "unstable-cache":
                return null;
            default:
                return e
        }
    }
}, 72536, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "workAsyncStorageInstance", {
        enumerable: !0,
        get: function() {
            return i
        }
    });
    let i = (0, e.r(56781).createAsyncLocalStorage)()
}, 98401, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "workAsyncStorage", {
        enumerable: !0,
        get: function() {
            return i.workAsyncStorageInstance
        }
    });
    let i = e.r(72536)
}, 35361, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var i = {
        METADATA_BOUNDARY_NAME: function() {
            return a
        },
        OUTLET_BOUNDARY_NAME: function() {
            return s
        },
        ROOT_LAYOUT_BOUNDARY_NAME: function() {
            return c
        },
        VIEWPORT_BOUNDARY_NAME: function() {
            return o
        }
    };
    for (var n in i) Object.defineProperty(r, n, {
        enumerable: !0,
        get: i[n]
    });
    let a = "__next_metadata_boundary__",
        o = "__next_viewport_boundary__",
        s = "__next_outlet_boundary__",
        c = "__next_root_layout_boundary__"
}, 58155, (e, t, r) => {
    "use strict";
    var i = e.i(50461);
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        atLeastOneTask: function() {
            return c
        },
        scheduleImmediate: function() {
            return s
        },
        scheduleOnNextTick: function() {
            return o
        },
        waitAtLeastOneReactRenderTask: function() {
            return d
        }
    };
    for (var a in n) Object.defineProperty(r, a, {
        enumerable: !0,
        get: n[a]
    });
    let o = e => {
            Promise.resolve().then(() => {
                i.default.nextTick(e)
            })
        },
        s = e => {
            setImmediate(e)
        };

    function c() {
        return new Promise(e => s(e))
    }

    function d() {
        return new Promise(e => setImmediate(e))
    }
}, 74571, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var i, n, a = {
        Postpone: function() {
            return A
        },
        PreludeState: function() {
            return J
        },
        abortAndThrowOnSynchronousRequestDataAccess: function() {
            return C
        },
        abortOnSynchronousPlatformIOAccess: function() {
            return I
        },
        accessedDynamicData: function() {
            return O
        },
        annotateDynamicAccess: function() {
            return B
        },
        consumeDynamicAccess: function() {
            return U
        },
        createDynamicTrackingState: function() {
            return b
        },
        createDynamicValidationState: function() {
            return S
        },
        createHangingInputAbortSignal: function() {
            return D
        },
        createRenderInBrowserAbortSignal: function() {
            return L
        },
        delayUntilRuntimeStage: function() {
            return er
        },
        formatDynamicAPIAccesses: function() {
            return M
        },
        getFirstDynamicReason: function() {
            return x
        },
        getStaticShellDisallowedDynamicReasons: function() {
            return et
        },
        isDynamicPostpone: function() {
            return P
        },
        isPrerenderInterruptedError: function() {
            return N
        },
        logDisallowedDynamicError: function() {
            return Q
        },
        markCurrentScopeAsDynamic: function() {
            return v
        },
        postponeWithTracking: function() {
            return k
        },
        throwIfDisallowedDynamic: function() {
            return ee
        },
        throwToInterruptStaticGeneration: function() {
            return _
        },
        trackAllowedDynamicAccess: function() {
            return q
        },
        trackDynamicDataInDynamicRender: function() {
            return w
        },
        trackDynamicHoleInRuntimeShell: function() {
            return X
        },
        trackDynamicHoleInStaticShell: function() {
            return K
        },
        useDynamicRouteParams: function() {
            return $
        },
        useDynamicSearchParams: function() {
            return G
        }
    };
    for (var o in a) Object.defineProperty(r, o, {
        enumerable: !0,
        get: a[o]
    });
    let s = (i = e.r(91788)) && i.__esModule ? i : {
            default: i
        },
        c = e.r(93733),
        d = e.r(84755),
        l = e.r(19202),
        u = e.r(98401),
        p = e.r(24616),
        f = e.r(35361),
        h = e.r(58155),
        m = e.r(14760),
        g = e.r(7117),
        y = "function" == typeof s.default.unstable_postpone;

    function b(e) {
        return {
            isDebugDynamicAccesses: e,
            dynamicAccesses: [],
            syncDynamicErrorWithStack: null
        }
    }

    function S() {
        return {
            hasSuspenseAboveBody: !1,
            hasDynamicMetadata: !1,
            dynamicMetadata: null,
            hasDynamicViewport: !1,
            hasAllowedDynamic: !1,
            dynamicErrors: []
        }
    }

    function x(e) {
        var t;
        return null == (t = e.dynamicAccesses[0]) ? void 0 : t.expression
    }

    function v(e, t, r) {
        if (t) switch (t.type) {
            case "cache":
            case "unstable-cache":
            case "private-cache":
                return
        }
        if (!e.forceDynamic && !e.forceStatic) {
            if (e.dynamicShouldError) throw Object.defineProperty(new d.StaticGenBailoutError(`Route ${e.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${r}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
                value: "E553",
                enumerable: !1,
                configurable: !0
            });
            if (t) switch (t.type) {
                case "prerender-ppr":
                    return k(e.route, r, t.dynamicTracking);
                case "prerender-legacy":
                    t.revalidate = 0;
                    let i = Object.defineProperty(new c.DynamicServerError(`Route ${e.route} couldn't be rendered statically because it used ${r}. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`), "__NEXT_ERROR_CODE", {
                        value: "E550",
                        enumerable: !1,
                        configurable: !0
                    });
                    throw e.dynamicUsageDescription = r, e.dynamicUsageStack = i.stack, i
            }
        }
    }

    function _(e, t, r) {
        let i = Object.defineProperty(new c.DynamicServerError(`Route ${t.route} couldn't be rendered statically because it used \`${e}\`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`), "__NEXT_ERROR_CODE", {
            value: "E558",
            enumerable: !1,
            configurable: !0
        });
        throw r.revalidate = 0, t.dynamicUsageDescription = e, t.dynamicUsageStack = i.stack, i
    }

    function w(e) {
        switch (e.type) {
            case "cache":
            case "unstable-cache":
            case "private-cache":
                return
        }
    }

    function E(e, t, r) {
        let i = j(`Route ${e} needs to bail out of prerendering at this point because it used ${t}.`);
        r.controller.abort(i);
        let n = r.dynamicTracking;
        n && n.dynamicAccesses.push({
            stack: n.isDebugDynamicAccesses ? Error().stack : void 0,
            expression: t
        })
    }

    function I(e, t, r, i) {
        let n = i.dynamicTracking;
        E(e, t, i), n && null === n.syncDynamicErrorWithStack && (n.syncDynamicErrorWithStack = r)
    }

    function C(e, t, r, i) {
        if (!1 === i.controller.signal.aborted) {
            E(e, t, i);
            let n = i.dynamicTracking;
            n && null === n.syncDynamicErrorWithStack && (n.syncDynamicErrorWithStack = r)
        }
        throw j(`Route ${e} needs to bail out of prerendering at this point because it used ${t}.`)
    }

    function A({
        reason: e,
        route: t
    }) {
        let r = l.workUnitAsyncStorage.getStore();
        k(t, e, r && "prerender-ppr" === r.type ? r.dynamicTracking : null)
    }

    function k(e, t, r) {
        (function() {
            if (!y) throw Object.defineProperty(Error("Invariant: React.unstable_postpone is not defined. This suggests the wrong version of React was loaded. This is a bug in Next.js"), "__NEXT_ERROR_CODE", {
                value: "E224",
                enumerable: !1,
                configurable: !0
            })
        })(), r && r.dynamicAccesses.push({
            stack: r.isDebugDynamicAccesses ? Error().stack : void 0,
            expression: t
        }), s.default.unstable_postpone(R(e, t))
    }

    function R(e, t) {
        return `Route ${e} needs to bail out of prerendering at this point because it used ${t}. React throws this special object to indicate where. It should not be caught by your own try/catch. Learn more: https://nextjs.org/docs/messages/ppr-caught-error`
    }

    function P(e) {
        return "object" == typeof e && null !== e && "string" == typeof e.message && T(e.message)
    }

    function T(e) {
        return e.includes("needs to bail out of prerendering at this point because it used") && e.includes("Learn more: https://nextjs.org/docs/messages/ppr-caught-error")
    }
    if (!1 === T(R("%%%", "^^^"))) throw Object.defineProperty(Error("Invariant: isDynamicPostpone misidentified a postpone reason. This is a bug in Next.js"), "__NEXT_ERROR_CODE", {
        value: "E296",
        enumerable: !1,
        configurable: !0
    });
    let V = "NEXT_PRERENDER_INTERRUPTED";

    function j(e) {
        let t = Object.defineProperty(Error(e), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: !1,
            configurable: !0
        });
        return t.digest = V, t
    }

    function N(e) {
        return "object" == typeof e && null !== e && e.digest === V && "name" in e && "message" in e && e instanceof Error
    }

    function O(e) {
        return e.length > 0
    }

    function U(e, t) {
        return e.dynamicAccesses.push(...t.dynamicAccesses), e.dynamicAccesses
    }

    function M(e) {
        return e.filter(e => "string" == typeof e.stack && e.stack.length > 0).map(({
            expression: e,
            stack: t
        }) => (t = t.split("\n").slice(4).filter(e => !(e.includes("node_modules/next/") || e.includes(" (<anonymous>)") || e.includes(" (node:"))).join("\n"), `Dynamic API Usage Debug - ${e}:
${t}`))
    }

    function L() {
        let e = new AbortController;
        return e.abort(Object.defineProperty(new m.BailoutToCSRError("Render in Browser"), "__NEXT_ERROR_CODE", {
            value: "E721",
            enumerable: !1,
            configurable: !0
        })), e.signal
    }

    function D(e) {
        switch (e.type) {
            case "prerender":
            case "prerender-runtime":
                let t = new AbortController;
                if (e.cacheSignal) e.cacheSignal.inputReady().then(() => {
                    t.abort()
                });
                else {
                    let r = (0, l.getRuntimeStagePromise)(e);
                    r ? r.then(() => (0, h.scheduleOnNextTick)(() => t.abort())) : (0, h.scheduleOnNextTick)(() => t.abort())
                }
                return t.signal;
            case "prerender-client":
            case "prerender-ppr":
            case "prerender-legacy":
            case "request":
            case "cache":
            case "private-cache":
            case "unstable-cache":
                return
        }
    }

    function B(e, t) {
        let r = t.dynamicTracking;
        r && r.dynamicAccesses.push({
            stack: r.isDebugDynamicAccesses ? Error().stack : void 0,
            expression: e
        })
    }

    function $(e) {
        let t = u.workAsyncStorage.getStore(),
            r = l.workUnitAsyncStorage.getStore();
        if (t && r) switch (r.type) {
            case "prerender-client":
            case "prerender":
                {
                    let i = r.fallbackRouteParams;i && i.size > 0 && s.default.use((0, p.makeHangingPromise)(r.renderSignal, t.route, e));
                    break
                }
            case "prerender-ppr":
                {
                    let i = r.fallbackRouteParams;
                    if (i && i.size > 0) return k(t.route, e, r.dynamicTracking);
                    break
                }
            case "prerender-runtime":
                throw Object.defineProperty(new g.InvariantError(`\`${e}\` was called during a runtime prerender. Next.js should be preventing ${e} from being included in server components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
                    value: "E771",
                    enumerable: !1,
                    configurable: !0
                });
            case "cache":
            case "private-cache":
                throw Object.defineProperty(new g.InvariantError(`\`${e}\` was called inside a cache scope. Next.js should be preventing ${e} from being included in server components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
                    value: "E745",
                    enumerable: !1,
                    configurable: !0
                })
        }
    }

    function G(e) {
        let t = u.workAsyncStorage.getStore(),
            r = l.workUnitAsyncStorage.getStore();
        if (t) switch (!r && (0, l.throwForMissingRequestStore)(e), r.type) {
            case "prerender-client":
                s.default.use((0, p.makeHangingPromise)(r.renderSignal, t.route, e));
                break;
            case "prerender-legacy":
            case "prerender-ppr":
                if (t.forceStatic) return;
                throw Object.defineProperty(new m.BailoutToCSRError(e), "__NEXT_ERROR_CODE", {
                    value: "E394",
                    enumerable: !1,
                    configurable: !0
                });
            case "prerender":
            case "prerender-runtime":
                throw Object.defineProperty(new g.InvariantError(`\`${e}\` was called from a Server Component. Next.js should be preventing ${e} from being included in server components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
                    value: "E795",
                    enumerable: !1,
                    configurable: !0
                });
            case "cache":
            case "unstable-cache":
            case "private-cache":
                throw Object.defineProperty(new g.InvariantError(`\`${e}\` was called inside a cache scope. Next.js should be preventing ${e} from being included in server components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
                    value: "E745",
                    enumerable: !1,
                    configurable: !0
                });
            case "request":
                return
        }
    }
    let F = /\n\s+at Suspense \(<anonymous>\)/,
        W = RegExp(`\\n\\s+at Suspense \\(<anonymous>\\)(?:(?!\\n\\s+at (?:body|div|main|section|article|aside|header|footer|nav|form|p|span|h1|h2|h3|h4|h5|h6) \\(<anonymous>\\))[\\s\\S])*?\\n\\s+at ${f.ROOT_LAYOUT_BOUNDARY_NAME} \\([^\\n]*\\)`),
        H = RegExp(`\\n\\s+at ${f.METADATA_BOUNDARY_NAME}[\\n\\s]`),
        Y = RegExp(`\\n\\s+at ${f.VIEWPORT_BOUNDARY_NAME}[\\n\\s]`),
        z = RegExp(`\\n\\s+at ${f.OUTLET_BOUNDARY_NAME}[\\n\\s]`);

    function q(e, t, r, i) {
        if (!z.test(t)) {
            if (H.test(t)) {
                r.hasDynamicMetadata = !0;
                return
            }
            if (Y.test(t)) {
                r.hasDynamicViewport = !0;
                return
            }
            if (W.test(t)) {
                r.hasAllowedDynamic = !0, r.hasSuspenseAboveBody = !0;
                return
            } else if (F.test(t)) {
                r.hasAllowedDynamic = !0;
                return
            } else {
                if (i.syncDynamicErrorWithStack) return void r.dynamicErrors.push(i.syncDynamicErrorWithStack);
                let n = Z(`Route "${e.route}": Uncached data was accessed outside of <Suspense>. This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/blocking-route`, t);
                return void r.dynamicErrors.push(n)
            }
        }
    }

    function X(e, t, r, i) {
        if (!z.test(t)) {
            if (H.test(t)) {
                r.dynamicMetadata = Z(`Route "${e.route}": Uncached data or \`connection()\` was accessed inside \`generateMetadata\`. Except for this instance, the page would have been entirely prerenderable which may have been the intended behavior. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-metadata`, t);
                return
            }
            if (Y.test(t)) {
                let i = Z(`Route "${e.route}": Uncached data or \`connection()\` was accessed inside \`generateViewport\`. This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/next-prerender-dynamic-viewport`, t);
                r.dynamicErrors.push(i);
                return
            }
            if (W.test(t)) {
                r.hasAllowedDynamic = !0, r.hasSuspenseAboveBody = !0;
                return
            } else if (F.test(t)) {
                r.hasAllowedDynamic = !0;
                return
            } else {
                if (i.syncDynamicErrorWithStack) return void r.dynamicErrors.push(i.syncDynamicErrorWithStack);
                let n = Z(`Route "${e.route}": Uncached data or \`connection()\` was accessed outside of \`<Suspense>\`. This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/blocking-route`, t);
                return void r.dynamicErrors.push(n)
            }
        }
    }

    function K(e, t, r, i) {
        if (!z.test(t)) {
            if (H.test(t)) {
                r.dynamicMetadata = Z(`Route "${e.route}": Runtime data such as \`cookies()\`, \`headers()\`, \`params\`, or \`searchParams\` was accessed inside \`generateMetadata\` or you have file-based metadata such as icons that depend on dynamic params segments. Except for this instance, the page would have been entirely prerenderable which may have been the intended behavior. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-metadata`, t);
                return
            }
            if (Y.test(t)) {
                let i = Z(`Route "${e.route}": Runtime data such as \`cookies()\`, \`headers()\`, \`params\`, or \`searchParams\` was accessed inside \`generateViewport\`. This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/next-prerender-dynamic-viewport`, t);
                r.dynamicErrors.push(i);
                return
            }
            if (W.test(t)) {
                r.hasAllowedDynamic = !0, r.hasSuspenseAboveBody = !0;
                return
            } else if (F.test(t)) {
                r.hasAllowedDynamic = !0;
                return
            } else {
                if (i.syncDynamicErrorWithStack) return void r.dynamicErrors.push(i.syncDynamicErrorWithStack);
                let n = Z(`Route "${e.route}": Runtime data such as \`cookies()\`, \`headers()\`, \`params\`, or \`searchParams\` was accessed outside of \`<Suspense>\`. This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/blocking-route`, t);
                return void r.dynamicErrors.push(n)
            }
        }
    }

    function Z(e, t) {
        let r = Object.defineProperty(Error(e), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: !1,
            configurable: !0
        });
        return r.stack = r.name + ": " + e + t, r
    }
    var J = ((n = {})[n.Full = 0] = "Full", n[n.Empty = 1] = "Empty", n[n.Errored = 2] = "Errored", n);

    function Q(e, t) {
        console.error(t), e.dev || (e.hasReadableErrorStacks ? console.error(`To get a more detailed stack trace and pinpoint the issue, start the app in development mode by running \`next dev\`, then open "${e.route}" in your browser to investigate the error.`) : console.error(`To get a more detailed stack trace and pinpoint the issue, try one of the following:
  - Start the app in development mode by running \`next dev\`, then open "${e.route}" in your browser to investigate the error.
  - Rerun the production build with \`next build --debug-prerender\` to generate better stack traces.`))
    }

    function ee(e, t, r, i) {
        if (i.syncDynamicErrorWithStack) throw Q(e, i.syncDynamicErrorWithStack), new d.StaticGenBailoutError;
        if (0 !== t) {
            if (r.hasSuspenseAboveBody) return;
            let i = r.dynamicErrors;
            if (i.length > 0) {
                for (let t = 0; t < i.length; t++) Q(e, i[t]);
                throw new d.StaticGenBailoutError
            }
            if (r.hasDynamicViewport) throw console.error(`Route "${e.route}" has a \`generateViewport\` that depends on Request data (\`cookies()\`, etc...) or uncached external data (\`fetch(...)\`, etc...) without explicitly allowing fully dynamic rendering. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-viewport`), new d.StaticGenBailoutError;
            if (1 === t) throw console.error(`Route "${e.route}" did not produce a static shell and Next.js was unable to determine a reason. This is a bug in Next.js.`), new d.StaticGenBailoutError
        } else if (!1 === r.hasAllowedDynamic && r.hasDynamicMetadata) throw console.error(`Route "${e.route}" has a \`generateMetadata\` that depends on Request data (\`cookies()\`, etc...) or uncached external data (\`fetch(...)\`, etc...) when the rest of the route does not. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-metadata`), new d.StaticGenBailoutError
    }

    function et(e, t, r) {
        if (r.hasSuspenseAboveBody) return [];
        if (0 !== t) {
            let i = r.dynamicErrors;
            if (i.length > 0) return i;
            if (1 === t) return [Object.defineProperty(new g.InvariantError(`Route "${e.route}" did not produce a static shell and Next.js was unable to determine a reason.`), "__NEXT_ERROR_CODE", {
                value: "E936",
                enumerable: !1,
                configurable: !0
            })]
        } else if (!1 === r.hasAllowedDynamic && 0 === r.dynamicErrors.length && r.dynamicMetadata) return [r.dynamicMetadata];
        return []
    }

    function er(e, t) {
        return e.runtimeStagePromise ? e.runtimeStagePromise.then(() => t) : t
    }
}, 36951, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "unstable_rethrow", {
        enumerable: !0,
        get: function() {
            return function e(t) {
                if ((0, o.isNextRouterError)(t) || (0, a.isBailoutToCSRError)(t) || (0, c.isDynamicServerError)(t) || (0, s.isDynamicPostpone)(t) || (0, n.isPostpone)(t) || (0, i.isHangingPromiseRejectionError)(t) || (0, s.isPrerenderInterruptedError)(t)) throw t;
                t instanceof Error && "cause" in t && e(t.cause)
            }
        }
    });
    let i = e.r(24616),
        n = e.r(77989),
        a = e.r(14760),
        o = e.r(68934),
        s = e.r(74571),
        c = e.r(93733);
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 73210, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "unstable_rethrow", {
        enumerable: !0,
        get: function() {
            return i
        }
    });
    let i = "u" < typeof window ? e.r(36951).unstable_rethrow : e.r(2431).unstable_rethrow;
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 83531, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var i = {
        ReadonlyURLSearchParams: function() {
            return a.ReadonlyURLSearchParams
        },
        RedirectType: function() {
            return s.RedirectType
        },
        forbidden: function() {
            return d.forbidden
        },
        notFound: function() {
            return c.notFound
        },
        permanentRedirect: function() {
            return o.permanentRedirect
        },
        redirect: function() {
            return o.redirect
        },
        unauthorized: function() {
            return l.unauthorized
        },
        unstable_isUnrecognizedActionError: function() {
            return p
        },
        unstable_rethrow: function() {
            return u.unstable_rethrow
        }
    };
    for (var n in i) Object.defineProperty(r, n, {
        enumerable: !0,
        get: i[n]
    });
    let a = e.r(31430),
        o = e.r(53656),
        s = e.r(1939),
        c = e.r(32075),
        d = e.r(69790),
        l = e.r(4047),
        u = e.r(73210);

    function p() {
        throw Object.defineProperty(Error("`unstable_isUnrecognizedActionError` can only be used on the client."), "__NEXT_ERROR_CODE", {
            value: "E776",
            enumerable: !1,
            configurable: !0
        })
    }("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 29844, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var i = {
        ReadonlyURLSearchParams: function() {
            return s.ReadonlyURLSearchParams
        },
        RedirectType: function() {
            return u.RedirectType
        },
        ServerInsertedHTMLContext: function() {
            return d.ServerInsertedHTMLContext
        },
        forbidden: function() {
            return u.forbidden
        },
        notFound: function() {
            return u.notFound
        },
        permanentRedirect: function() {
            return u.permanentRedirect
        },
        redirect: function() {
            return u.redirect
        },
        unauthorized: function() {
            return u.unauthorized
        },
        unstable_isUnrecognizedActionError: function() {
            return l.unstable_isUnrecognizedActionError
        },
        unstable_rethrow: function() {
            return u.unstable_rethrow
        },
        useParams: function() {
            return y
        },
        usePathname: function() {
            return m
        },
        useRouter: function() {
            return g
        },
        useSearchParams: function() {
            return h
        },
        useSelectedLayoutSegment: function() {
            return S
        },
        useSelectedLayoutSegments: function() {
            return b
        },
        useServerInsertedHTML: function() {
            return d.useServerInsertedHTML
        }
    };
    for (var n in i) Object.defineProperty(r, n, {
        enumerable: !0,
        get: i[n]
    });
    let a = e.r(52456)._(e.r(91788)),
        o = e.r(1085),
        s = e.r(70008),
        c = e.r(77915),
        d = e.r(63933),
        l = e.r(12098),
        u = e.r(83531),
        p = "u" < typeof window ? e.r(74571).useDynamicRouteParams : void 0,
        f = "u" < typeof window ? e.r(74571).useDynamicSearchParams : void 0;

    function h() {
        f ? .("useSearchParams()");
        let e = (0, a.useContext)(s.SearchParamsContext);
        return (0, a.useMemo)(() => e ? new s.ReadonlyURLSearchParams(e) : null, [e])
    }

    function m() {
        return p ? .("usePathname()"), (0, a.useContext)(s.PathnameContext)
    }

    function g() {
        let e = (0, a.useContext)(o.AppRouterContext);
        if (null === e) throw Object.defineProperty(Error("invariant expected app router to be mounted"), "__NEXT_ERROR_CODE", {
            value: "E238",
            enumerable: !1,
            configurable: !0
        });
        return e
    }

    function y() {
        return p ? .("useParams()"), (0, a.useContext)(s.PathParamsContext)
    }

    function b(e = "children") {
        p ? .("useSelectedLayoutSegments()");
        let t = (0, a.useContext)(o.LayoutRouterContext);
        return t ? (0, c.getSelectedLayoutSegmentPath)(t.parentTree, e) : null
    }

    function S(e = "children") {
        p ? .("useSelectedLayoutSegment()"), (0, a.useContext)(s.NavigationPromisesContext);
        let t = b(e);
        return (0, c.computeSelectedLayoutSegment)(t, e)
    }("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 17837, (e, t, r) => {
    t.exports = e.r(29844)
}, 69813, e => {
    e.v({
        className: "graphik_e35cd601-module__v02Goa__className",
        variable: "graphik_e35cd601-module__v02Goa__variable"
    })
}, 47104, (e, t, r) => {
    ! function() {
        "use strict";
        var e = {
                114: function(e) {
                    function t(e) {
                        if ("string" != typeof e) throw TypeError("Path must be a string. Received " + JSON.stringify(e))
                    }

                    function r(e, t) {
                        for (var r, i = "", n = 0, a = -1, o = 0, s = 0; s <= e.length; ++s) {
                            if (s < e.length) r = e.charCodeAt(s);
                            else if (47 === r) break;
                            else r = 47;
                            if (47 === r) {
                                if (a === s - 1 || 1 === o);
                                else if (a !== s - 1 && 2 === o) {
                                    if (i.length < 2 || 2 !== n || 46 !== i.charCodeAt(i.length - 1) || 46 !== i.charCodeAt(i.length - 2)) {
                                        if (i.length > 2) {
                                            var c = i.lastIndexOf("/");
                                            if (c !== i.length - 1) {
                                                -1 === c ? (i = "", n = 0) : n = (i = i.slice(0, c)).length - 1 - i.lastIndexOf("/"), a = s, o = 0;
                                                continue
                                            }
                                        } else if (2 === i.length || 1 === i.length) {
                                            i = "", n = 0, a = s, o = 0;
                                            continue
                                        }
                                    }
                                    t && (i.length > 0 ? i += "/.." : i = "..", n = 2)
                                } else i.length > 0 ? i += "/" + e.slice(a + 1, s) : i = e.slice(a + 1, s), n = s - a - 1;
                                a = s, o = 0
                            } else 46 === r && -1 !== o ? ++o : o = -1
                        }
                        return i
                    }
                    var i = {
                        resolve: function() {
                            for (var e, i, n = "", a = !1, o = arguments.length - 1; o >= -1 && !a; o--) o >= 0 ? i = arguments[o] : (void 0 === e && (e = ""), i = e), t(i), 0 !== i.length && (n = i + "/" + n, a = 47 === i.charCodeAt(0));
                            if (n = r(n, !a), a)
                                if (n.length > 0) return "/" + n;
                                else return "/";
                            return n.length > 0 ? n : "."
                        },
                        normalize: function(e) {
                            if (t(e), 0 === e.length) return ".";
                            var i = 47 === e.charCodeAt(0),
                                n = 47 === e.charCodeAt(e.length - 1);
                            return (0 !== (e = r(e, !i)).length || i || (e = "."), e.length > 0 && n && (e += "/"), i) ? "/" + e : e
                        },
                        isAbsolute: function(e) {
                            return t(e), e.length > 0 && 47 === e.charCodeAt(0)
                        },
                        join: function() {
                            if (0 == arguments.length) return ".";
                            for (var e, r = 0; r < arguments.length; ++r) {
                                var n = arguments[r];
                                t(n), n.length > 0 && (void 0 === e ? e = n : e += "/" + n)
                            }
                            return void 0 === e ? "." : i.normalize(e)
                        },
                        relative: function(e, r) {
                            if (t(e), t(r), e === r || (e = i.resolve(e)) === (r = i.resolve(r))) return "";
                            for (var n = 1; n < e.length && 47 === e.charCodeAt(n); ++n);
                            for (var a = e.length, o = a - n, s = 1; s < r.length && 47 === r.charCodeAt(s); ++s);
                            for (var c = r.length - s, d = o < c ? o : c, l = -1, u = 0; u <= d; ++u) {
                                if (u === d) {
                                    if (c > d) {
                                        if (47 === r.charCodeAt(s + u)) return r.slice(s + u + 1);
                                        else if (0 === u) return r.slice(s + u)
                                    } else o > d && (47 === e.charCodeAt(n + u) ? l = u : 0 === u && (l = 0));
                                    break
                                }
                                var p = e.charCodeAt(n + u);
                                if (p !== r.charCodeAt(s + u)) break;
                                47 === p && (l = u)
                            }
                            var f = "";
                            for (u = n + l + 1; u <= a; ++u)(u === a || 47 === e.charCodeAt(u)) && (0 === f.length ? f += ".." : f += "/..");
                            return f.length > 0 ? f + r.slice(s + l) : (s += l, 47 === r.charCodeAt(s) && ++s, r.slice(s))
                        },
                        _makeLong: function(e) {
                            return e
                        },
                        dirname: function(e) {
                            if (t(e), 0 === e.length) return ".";
                            for (var r = e.charCodeAt(0), i = 47 === r, n = -1, a = !0, o = e.length - 1; o >= 1; --o)
                                if (47 === (r = e.charCodeAt(o))) {
                                    if (!a) {
                                        n = o;
                                        break
                                    }
                                } else a = !1;
                            return -1 === n ? i ? "/" : "." : i && 1 === n ? "//" : e.slice(0, n)
                        },
                        basename: function(e, r) {
                            if (void 0 !== r && "string" != typeof r) throw TypeError('"ext" argument must be a string');
                            t(e);
                            var i, n = 0,
                                a = -1,
                                o = !0;
                            if (void 0 !== r && r.length > 0 && r.length <= e.length) {
                                if (r.length === e.length && r === e) return "";
                                var s = r.length - 1,
                                    c = -1;
                                for (i = e.length - 1; i >= 0; --i) {
                                    var d = e.charCodeAt(i);
                                    if (47 === d) {
                                        if (!o) {
                                            n = i + 1;
                                            break
                                        }
                                    } else -1 === c && (o = !1, c = i + 1), s >= 0 && (d === r.charCodeAt(s) ? -1 == --s && (a = i) : (s = -1, a = c))
                                }
                                return n === a ? a = c : -1 === a && (a = e.length), e.slice(n, a)
                            }
                            for (i = e.length - 1; i >= 0; --i)
                                if (47 === e.charCodeAt(i)) {
                                    if (!o) {
                                        n = i + 1;
                                        break
                                    }
                                } else -1 === a && (o = !1, a = i + 1);
                            return -1 === a ? "" : e.slice(n, a)
                        },
                        extname: function(e) {
                            t(e);
                            for (var r = -1, i = 0, n = -1, a = !0, o = 0, s = e.length - 1; s >= 0; --s) {
                                var c = e.charCodeAt(s);
                                if (47 === c) {
                                    if (!a) {
                                        i = s + 1;
                                        break
                                    }
                                    continue
                                } - 1 === n && (a = !1, n = s + 1), 46 === c ? -1 === r ? r = s : 1 !== o && (o = 1) : -1 !== r && (o = -1)
                            }
                            return -1 === r || -1 === n || 0 === o || 1 === o && r === n - 1 && r === i + 1 ? "" : e.slice(r, n)
                        },
                        format: function(e) {
                            var t, r;
                            if (null === e || "object" != typeof e) throw TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof e);
                            return t = e.dir || e.root, r = e.base || (e.name || "") + (e.ext || ""), t ? t === e.root ? t + r : t + "/" + r : r
                        },
                        parse: function(e) {
                            t(e);
                            var r, i = {
                                root: "",
                                dir: "",
                                base: "",
                                ext: "",
                                name: ""
                            };
                            if (0 === e.length) return i;
                            var n = e.charCodeAt(0),
                                a = 47 === n;
                            a ? (i.root = "/", r = 1) : r = 0;
                            for (var o = -1, s = 0, c = -1, d = !0, l = e.length - 1, u = 0; l >= r; --l) {
                                if (47 === (n = e.charCodeAt(l))) {
                                    if (!d) {
                                        s = l + 1;
                                        break
                                    }
                                    continue
                                } - 1 === c && (d = !1, c = l + 1), 46 === n ? -1 === o ? o = l : 1 !== u && (u = 1) : -1 !== o && (u = -1)
                            }
                            return -1 === o || -1 === c || 0 === u || 1 === u && o === c - 1 && o === s + 1 ? -1 !== c && (0 === s && a ? i.base = i.name = e.slice(1, c) : i.base = i.name = e.slice(s, c)) : (0 === s && a ? (i.name = e.slice(1, o), i.base = e.slice(1, c)) : (i.name = e.slice(s, o), i.base = e.slice(s, c)), i.ext = e.slice(o, c)), s > 0 ? i.dir = e.slice(0, s - 1) : a && (i.dir = "/"), i
                        },
                        sep: "/",
                        delimiter: ":",
                        win32: null,
                        posix: null
                    };
                    i.posix = i, e.exports = i
                }
            },
            r = {};

        function i(t) {
            var n = r[t];
            if (void 0 !== n) return n.exports;
            var a = r[t] = {
                    exports: {}
                },
                o = !0;
            try {
                e[t](a, a.exports, i), o = !1
            } finally {
                o && delete r[t]
            }
            return a.exports
        }
        i.ab = "/ROOT/node_modules/next/dist/compiled/path-browserify/", t.exports = i(114)
    }()
}, 38018, (e, t, r) => {
    t.exports = {
        GENERATED_NAMESPACES: ["cart", "common", "home", "m1", "marketing", "ring", "uhHome"]
    }
}, 47811, (e, t, r) => {
    let i = e.r(47104),
        {
            GENERATED_NAMESPACES: n
        } = e.r(38018);
    t.exports = {
        i18n: {
            locales: ["en-US", "ja", "de", "th", "fr"],
            defaultLocale: "en-US",
            localeDetection: !1,
            showSupportNotice: !1
        },
        defaultNS: "common",
        ns: [...n],
        localePath: i.resolve("./public/locales"),
        reloadOnPrerender: !1,
        fallbackLng: {
            default: ["en-US"]
        },
        interpolation: {
            escapeValue: !1
        },
        react: {
            useSuspense: !1
        },
        debug: !1,
        load: "currentOnly",
        keySeparator: ".",
        nsSeparator: ":",
        returnEmptyString: !1,
        returnNull: !1
    }
}, 61592, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "useUntrackedPathname", {
        enumerable: !0,
        get: function() {
            return a
        }
    });
    let i = e.r(91788),
        n = e.r(70008);

    function a() {
        return ! function() {
            if ("u" < typeof window) {
                let {
                    workUnitAsyncStorage: t
                } = e.r(19202), r = t.getStore();
                if (!r) return !1;
                switch (r.type) {
                    case "prerender":
                    case "prerender-client":
                    case "prerender-ppr":
                        let i = r.fallbackRouteParams;
                        return !!i && i.size > 0
                }
            }
            return !1
        }() ? (0, i.useContext)(n.PathnameContext) : null
    }("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 16844, (e, t, r) => {
    "use strict";

    function i(e, t = !0) {
        return e.pathname + e.search + (t ? e.hash : "")
    }
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "createHrefFromUrl", {
        enumerable: !0,
        get: function() {
            return i
        }
    }), ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 50251, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var i = {
        handleHardNavError: function() {
            return o
        },
        useNavFailureHandler: function() {
            return s
        }
    };
    for (var n in i) Object.defineProperty(r, n, {
        enumerable: !0,
        get: i[n]
    });
    e.r(91788);
    let a = e.r(16844);

    function o(e) {
        return !!(e && "u" > typeof window) && !!window.next.__pendingUrl && (0, a.createHrefFromUrl)(new URL(window.location.href)) !== (0, a.createHrefFromUrl)(window.next.__pendingUrl) && (console.error("Error occurred during navigation, falling back to hard navigation", e), window.location.href = window.next.__pendingUrl.toString(), !0)
    }

    function s() {}("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 3216, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "HandleISRError", {
        enumerable: !0,
        get: function() {
            return n
        }
    });
    let i = "u" < typeof window ? e.r(98401).workAsyncStorage : void 0;

    function n({
        error: e
    }) {
        if (i) {
            let t = i.getStore();
            if (t ? .isStaticGeneration) throw e && console.error(e), e
        }
        return null
    }("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 48429, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var i = {
        ErrorBoundary: function() {
            return h
        },
        ErrorBoundaryHandler: function() {
            return f
        }
    };
    for (var n in i) Object.defineProperty(r, n, {
        enumerable: !0,
        get: i[n]
    });
    let a = e.r(41705),
        o = e.r(91398),
        s = a._(e.r(91788)),
        c = e.r(61592),
        d = e.r(68934);
    e.r(50251);
    let l = e.r(3216),
        u = e.r(47852),
        p = "u" > typeof window && (0, u.isBot)(window.navigator.userAgent);
    class f extends s.default.Component {
        constructor(e) {
            super(e), this.reset = () => {
                this.setState({
                    error: null
                })
            }, this.state = {
                error: null,
                previousPathname: this.props.pathname
            }
        }
        static getDerivedStateFromError(e) {
            if ((0, d.isNextRouterError)(e)) throw e;
            return {
                error: e
            }
        }
        static getDerivedStateFromProps(e, t) {
            let {
                error: r
            } = t;
            return e.pathname !== t.previousPathname && t.error ? {
                error: null,
                previousPathname: e.pathname
            } : {
                error: t.error,
                previousPathname: e.pathname
            }
        }
        render() {
            return this.state.error && !p ? (0, o.jsxs)(o.Fragment, {
                children: [(0, o.jsx)(l.HandleISRError, {
                    error: this.state.error
                }), this.props.errorStyles, this.props.errorScripts, (0, o.jsx)(this.props.errorComponent, {
                    error: this.state.error,
                    reset: this.reset
                })]
            }) : this.props.children
        }
    }

    function h({
        errorComponent: e,
        errorStyles: t,
        errorScripts: r,
        children: i
    }) {
        let n = (0, c.useUntrackedPathname)();
        return e ? (0, o.jsx)(f, {
            pathname: n,
            errorComponent: e,
            errorStyles: t,
            errorScripts: r,
            children: i
        }) : (0, o.jsx)(o.Fragment, {
            children: i
        })
    }("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 65777, (e, t, r) => {
    t.exports = e.r(79466)
}, 2962, 87145, 65217, 50204, 18209, 91147, 45576, 72652, e => {
    "use strict";
    e.s(["Header", () => O], 2962);
    var t = e.i(91398);
    e.i(64157);
    var r = e.i(71179),
        i = e.i(40290),
        n = e.i(50303),
        a = e.i(63127),
        o = e.i(94111),
        s = e.i(54013),
        c = e.i(53147),
        d = e.i(3828),
        l = e.i(91788),
        u = e.i(60814),
        p = e.i(57232),
        f = e.i(68284),
        h = e.i(21535),
        m = e.i(74481),
        g = e.i(11869),
        y = e.i(19231),
        b = e.i(57134),
        S = e.i(24298),
        x = e.i(63635),
        v = e.i(84586),
        _ = e.i(25704),
        w = e.i(3115),
        E = e.i(46737),
        I = e.i(73528),
        C = e.i(62774);
    let A = u.default.i.withConfig({
        displayName: "Header__NewTagI",
        componentId: "sc-f72a4041-0"
    })
    `
  width: 12px;
  height: 12px;
  display: inline-block;
  margin-right: 4px;
  transform: translateY(-2px);
  background: ${({theme:e})=>e.colorsV2.accent};
  color: #000000;
  letter-spacing: 1px;
  padding: 2px 4px 1px;
  border-radius: 50%;
  font-weight: 500;
  font-style: normal;
  font-size: 0.8rem;

  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    transform: translateY(-1px);
    width: 8px;
    height: 8px;
  }

  &.pre {
    display: none;
    margin-right: 4px;
    @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
      display: inline-block;
    }
  }

  &.post {
    margin-left: 6px;
    @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
      display: none;
    }
  }
`, k = ({
        children: e,
        href: r,
        onClick: i,
        target: n,
        style: a,
        newTag: o
    }) => {
        var s;
        let l = (0, d.useRouter)();
        return (0, t.jsxs)(c.default, {
            href: {
                pathname: r
            },
            onClick: i,
            style: { ...a,
                position: "relative",
                opacity: (s = l.asPath, "/" === r ? s === r : s.startsWith(r)) ? "1" : "0.5"
            },
            target: n,
            "data-buttontype": "header",
            children: [o ? (0, t.jsx)(A, {
                className: "pre"
            }) : null, e, o ? (0, t.jsx)(A, {
                className: "post"
            }) : null]
        })
    }, R = u.default.nav.withConfig({
        displayName: "Header__Menu",
        componentId: "sc-f72a4041-1"
    })
    `
  ul {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-start;
    width: 100%;
    list-style-type: none;
    list-style-type: disc;
    margin: 0;
    padding: 0;
    height: 100%;

    @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
      align-items: center;
    }
  }

  li {
    display: inline;
  }

  a,
  button {
    color: ${({theme:e})=>e.colorsV2.background};
    // font-size: ${({theme:e})=>e.typographyV2.fontSize.extrasmall};
    font-size: 1.2rem;

    :hover {
      text-shadow: none;
      opacity: 1 !important;
      transition: all 0.3s ease-in-out;
    }
  }

  li + li {
    margin-left: 18px;

    @media (max-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
      margin-left: 0;
    }
  }

  // Mobile
  @media (max-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    transition: all 0.3s ease-out;
    opacity: 0;
    pointer-events: none;
    grid-column: 1 / -1;
    flex-direction: row;
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh; /* DO NOT USE THE VIEWPORT HEIGHT CSS VAR */
    width: 100vw;
    padding-top: 96px;
    background: rgba(0, 0, 0, 0.83);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    z-index: 1;

    ul {
      flex-direction: column;
      justify-content: flex-start;
      gap: 20px;
      padding: 0 24px;
    }

    li {
      text-align: center;
    }

    a,
    button {
      font-size: 2rem;
      font-weight: ${({theme:e})=>e.typographyV2.fontWeight.semibold};
      opacity: 0.8;
      text-align: left;
      letter-spacing: -0.05rem;
    }

    &.mobileIsOpen {
      pointer-events: all;
      transition: all 0.3s ease-in;
      opacity: 1;
    }
  }
`, P = u.default.div.withConfig({
        displayName: "Header__MobileOpenCloseButton",
        componentId: "sc-f72a4041-2"
    })
    `
  background-image: url('${h.default.src}');
  background-repeat: no-repeat;
  background-position: center right;
  height: 100%;
  width: 48px;

  &.light {
    background-image: url('${f.default.src}');
  }

  &.mobileIsOpen {
    background-image: url('${m.default.src}');
  }
`, T = u.default.div.withConfig({
        displayName: "Header__MobileMenu",
        componentId: "sc-f72a4041-3"
    })
    `
  grid-column: 4 / -2;
  display: none;
  position: relative;

  @media (max-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-start;
    text-align: left;
  }
`, V = u.default.div.withConfig({
        displayName: "Header__DropdownContent",
        componentId: "sc-f72a4041-4"
    })
    `
  position: relative;

  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    padding: 48px 0;
  }
`, j = (0, u.default)(({
        className: e,
        headerTheme: a,
        onClick: o
    }) => {
        let {
            t: s
        } = (0, r.useTranslation)("common"), {
            width: d
        } = (0, p.useWindowSize)(), l = d > 991 ? "dark" == a ? (0, t.jsx)(i.CaretUp, {
            style: {
                transform: "translateY(-1px) rotate(90deg)"
            }
        }) : (0, t.jsx)(n.CaretUpBlack, {
            style: {
                transform: "translateY(-1px) rotate(90deg)"
            }
        }) : (0, t.jsx)(i.CaretUp, {
            style: {
                transform: "translateY(-1px) rotate(90deg)"
            }
        });
        return (0, t.jsxs)(y.Container, {
            className: `${e} ${a}`,
            children: [(0, t.jsxs)(c.default, {
                href: {
                    pathname: "/partners"
                },
                "data-buttontype": "header",
                onClick: () => {
                    o && o()
                },
                children: [(0, t.jsxs)("p", {
                    children: ["Partners ", l]
                }), (0, t.jsx)("p", {
                    children: "Work with us across healthcare, sports science, and distribution to deliver measurable outcomes at scale."
                })]
            }), (0, t.jsxs)(c.default, {
                target: "_blank",
                href: "https://ultrahumanapp.typeform.com/to/RIksJbSH",
                "data-buttontype": "header",
                onClick: () => {
                    o && o()
                },
                children: [(0, t.jsxs)("p", {
                    children: [s("header.businessDropdown.creators"), " ", l]
                }), (0, t.jsx)("p", {
                    children: s("header.businessDropdown.creatorsContent")
                })]
            })]
        })
    }).withConfig({
        displayName: "Header__BusinessDropdownContent",
        componentId: "sc-f72a4041-5"
    })
    `
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 12px;
  // flex-wrap: wrap;
  justify-content: center;
  padding: 0;

  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    flex-direction: row;
    flex-wrap: nowrap;
    margin-top: 0px;
    justify-content: center;
    gap: 12px;
  }

  a {
    opacity: 0;

    max-width: 35%;

    @media (max-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
      max-width: unset;
      opacity: 0.5 !important;
    }

    animation: ${u.keyframes`
        from {
          opacity: 0;
          transform: translateY(-40px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      `} 0.3s ease-in-out forwards;

    &:nth-child(1) {
      animation-delay: 0s;
    }
    &:nth-child(2) {
      animation-delay: 0.05s;
    }
    &:nth-child(3) {
      animation-delay: 0.1s;
    }
    &:nth-child(4) {
      animation-delay: 0.25s;
    }

    &:hover {
      p:first-child {
        text-decoration: underline;
      }
    }

    p {
      &:first-child {
        font-size: 1.6rem;
        // margin-bottom: 8px;
        font-weight: 500;

        @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
          font-size: 1.6rem;
        }

        svg,
        img {
          height: 0.8rem;
          width: auto;
        }
      }

      &:last-child {
        font-size: 1.4rem;
        line-height: 2rem;
        opacity: 0.5;
        display: none;

        @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
          display: block;
          font-size: 1.4rem;
        }
      }
    }
  }
`, N = (0, u.default)(({
        className: e
    }) => {
        let {
            t: i
        } = (0, r.useTranslation)("common"), n = (0, d.useRouter)(), u = (0, l.useContext)(E.GlobalUIContext), {
            region: f,
            regionSlug: h
        } = (0, l.useContext)(w.RegionLocaleContext), [m, A] = (0, l.useState)(!1), [N, O] = (0, l.useState)("dark"), {
            width: U
        } = (0, p.useWindowSize)(), [M, L] = (0, l.useState)(null), D = {
            business: (0, t.jsx)(j, {
                headerTheme: N,
                onClick: () => {
                    L(null), A(!1)
                }
            })
        }, B = (0, l.useCallback)(() => {
            A(e => !e)
        }, []), $ = (0, l.useCallback)(e => {
            L(null), A(!1), e && I.default.track(`header - ${e.currentTarget.textContent} - CLICK`)
        }, []), G = (0, l.useContext)(b.ModalContext), F = () => {
            I.default.track("header talk to expert - CLICK");
            let e = "website";
            window && (e = window.location.hostname + window.location.pathname), G.set((0, t.jsx)(s.BookCallTFComponentDiv, {
                trackingParams: {
                    utm_source: e,
                    utm_medium: "header-cta"
                }
            })), G.setCloseButtonTheme("light"), G.show()
        };
        (0, l.useEffect)(() => {
            n.pathname in g.headerThemeConfig && O(g.headerThemeConfig[n.pathname]), (n.pathname.startsWith("/shop") || n.pathname.startsWith("/ring/buy") || n.pathname.startsWith("/ring-pro/buy") || n.pathname.startsWith("/diesel-ultrahuman-ring/buy") || n.pathname.startsWith("/pricing")) && O("light")
        }, [n.pathname, n.asPath]);
        let W = g.HEADER_NO_SHOPNOW_PATTERNS.map(e => RegExp(`^${e.replace("*",".*")}$`)),
            H = ((e, t) => {
                if (e.startsWith("/home")) return {
                    pathname: "/home/buy",
                    labelKey: "header.buyNow"
                };
                if (e.startsWith("/diesel-ultrahuman-ring")) return {
                    pathname: "/diesel-ultrahuman-ring/buy",
                    labelKey: "header.buyNow"
                };
                if (e.startsWith("/ring-pro")) return {
                    pathname: "/ring-pro/buy",
                    labelKey: "header.preOrderNow"
                };
                if ("/" === e && t) {
                    let e = t.toUpperCase();
                    if ("US" !== e && "PR" !== e) return {
                        pathname: "/ring-pro/buy",
                        labelKey: "header.preOrderNow"
                    }
                }
                return {
                    pathname: "/ring/buy",
                    labelKey: "/" === e ? "header.buyRingAir" : "header.buyNow"
                }
            })(n.pathname, f),
            Y = (0, l.useRef)(null),
            z = (0, l.useRef)(null),
            q = (0, l.useRef)(0),
            X = (0, l.useRef)(!!u.headerVisible);
        (0, l.useEffect)(() => {
            X.current = !!u.headerVisible
        }, [u.headerVisible]);
        let K = () => {
            if (!window || !u.headerCollaspable || window.pageYOffset < 48) return;
            let e = window.pageYOffset,
                t = q.current > e;
            t !== X.current && u.setHeaderVisible(t), q.current = e
        };
        return (0, l.useEffect)(() => {
            let e = (0, C.throttle)(K, 120);
            return window.addEventListener("scroll", e, {
                passive: !0
            }), () => {
                window.removeEventListener("scroll", e)
            }
        }, [u.headerCollaspable, n.pathname]), (0, t.jsxs)(t.Fragment, {
            children: [M && (0, t.jsx)("div", {
                style: {
                    position: "fixed",
                    bottom: "0",
                    left: "0",
                    background: "rgba(0,0,0,0.4)",
                    height: "100vh",
                    padding: "10px",
                    width: "100vw",
                    zIndex: 99,
                    overscrollBehavior: "none",
                    display: U < 769 ? "none" : "block"
                },
                onClick: () => L(null),
                "aria-hidden": "true"
            }), (0, t.jsxs)("div", {
                ref: Y,
                className: `${e} ${N} ${u.headerCollaspable?"header-collaspable":""} ${u.headerVisible?"header-visible":""} bg-active ${"/ring-pro"===n.pathname?"page-ring-pro":""}`,
                children: [(0, t.jsx)(x.MarketingBanner, {}), (0, t.jsx)("header", {
                    ref: z,
                    style: {
                        backdropFilter: "/environment" === n.pathname ? "blur(24px)" : "",
                        background: "/environment" === n.pathname ? "rgba(255,255,255,0.6)" : ","
                    },
                    children: (0, t.jsxs)(y.Container, {
                        children: [(0, t.jsxs)("div", {
                            className: "left-pane",
                            children: [(0, t.jsx)(c.default, {
                                href: {
                                    pathname: `/${h}/`
                                },
                                className: "link-home ontop",
                                onClick: $,
                                "data-buttontype": "header",
                                children: "dark" === N ? (0, t.jsx)(o.UHLogo, {
                                    fill: "#FFF",
                                    className: "logo"
                                }) : (0, t.jsx)(o.UHLogo, {
                                    className: "logo"
                                })
                            }), (0, t.jsx)(R, {
                                className: m ? "mobileIsOpen" : void 0,
                                children: (0, t.jsxs)("ul", {
                                    children: [(0, t.jsx)("li", {
                                        children: (0, t.jsx)(k, {
                                            href: "US" === f || "PR" === f ? "/ring-pro" : "/ring-pro/buy",
                                            onClick: $,
                                            children: "Ring PRO"
                                        })
                                    }), (0, t.jsx)("li", {
                                        children: (0, t.jsx)(k, {
                                            href: "/ring/buy",
                                            onClick: $,
                                            children: i("header.ringAir")
                                        })
                                    }), (0, t.jsx)("li", {
                                        children: (0, t.jsx)(k, {
                                            href: "/blood-vision/buy",
                                            onClick: $,
                                            children: "Blood Vision"
                                        })
                                    }), (0, t.jsx)("li", {
                                        children: (0, t.jsx)(k, {
                                            href: "/home/buy",
                                            onClick: $,
                                            children: "Home Health"
                                        })
                                    }), (0, t.jsx)("li", {
                                        children: (0, t.jsx)(k, {
                                            href: "/pricing",
                                            onClick: $,
                                            children: i("header.m1Cgm")
                                        })
                                    }), (0, t.jsx)("li", {
                                        children: (0, t.jsx)(k, {
                                            href: "/womens-health",
                                            onClick: $,
                                            children: i("header.womenHealth")
                                        })
                                    }), (0, t.jsx)("li", {
                                        children: (0, t.jsx)(k, {
                                            href: "/x",
                                            onClick: $,
                                            children: "UltrahumanX"
                                        })
                                    }), "US" === f || "PR" === f ? (0, t.jsx)("li", {
                                        children: (0, t.jsx)(k, {
                                            href: "/for-work",
                                            onClick: $,
                                            children: "UltraWork"
                                        })
                                    }) : null, "US" === f || "PR" === f ? (0, t.jsx)("li", {
                                        children: (0, t.jsx)(k, {
                                            href: "/hsa-fsa",
                                            onClick: $,
                                            children: "HSA/FSA"
                                        })
                                    }) : null, (0, t.jsx)("li", {
                                        children: (0, t.jsx)(k, {
                                            href: "/shop",
                                            onClick: $,
                                            children: i("header.store")
                                        })
                                    }), (0, t.jsx)("li", {
                                        children: U > 991 ? (0, t.jsx)("button", {
                                            style: {
                                                cursor: "pointer",
                                                opacity: "business" == M ? 1 : void 0
                                            },
                                            "data-buttontype": "header",
                                            onClick: () => {
                                                null === M ? L("business") : L(null)
                                            },
                                            children: "Partnerships"
                                        }) : (0, t.jsxs)(t.Fragment, {
                                            children: [(0, t.jsx)(k, {
                                                href: "javascript:void(0)",
                                                onClick: () => void 0,
                                                style: {
                                                    display: "block",
                                                    pointerEvents: "none"
                                                },
                                                children: "Partnerships"
                                            }), D.business]
                                        })
                                    })]
                                })
                            })]
                        }), (0, t.jsxs)(T, {
                            className: "ontop",
                            children: [(0, t.jsx)("div", {
                                className: "mobile-show",
                                children: "/blood-vision" === n.pathname && "IN" === f ? (0, t.jsx)(c.default, {
                                    href: {
                                        pathname: "/ring/buy"
                                    },
                                    className: "btn-accent mobile white",
                                    onClick: e => {
                                        e.preventDefault(), (0, v.isMobileDevice)() ? window.open("https://ultrahuman.onelink.me/QqSM/0ncoj3us", "_blank") : (G.set((0, t.jsx)(_.UhAppModal, {
                                            text: "Install the Ultrahuman app to start with your Blood Vision order.",
                                            link: "https://ultrahuman.onelink.me/QqSM/0ncoj3us",
                                            image: "web_v2/qr-codes/blood-vision-onelink.png"
                                        })), G.show())
                                    },
                                    children: i("header.bookTest")
                                }) : null
                            }), !W.some(e => e.test(n.pathname)) && (0, t.jsx)(t.Fragment, {
                                children: "US" === f && "/" === n.pathname ? (0, t.jsx)(c.default, {
                                    href: {
                                        pathname: "/blood-vision/buy"
                                    },
                                    className: "btn-accent mobile",
                                    children: "Book Test"
                                }) : "US" !== f ? (0, t.jsx)(c.default, {
                                    href: {
                                        pathname: H.pathname
                                    },
                                    className: "btn-accent mobile",
                                    children: i(H.labelKey)
                                }) : null
                            }), !g.HEADER_CART_ICON_IN_ACTIVE_PAGES.includes(n.pathname) && (0, t.jsx)(S.CartIcon, {
                                iconTheme: N
                            }), (0, t.jsx)(P, {
                                onClick: B,
                                className: `${N} ${m?"mobileIsOpen":void 0}`
                            })]
                        }), (0, t.jsxs)("div", {
                            className: "mobile-hide extra-btns",
                            children: [!g.HEADER_CART_ICON_IN_ACTIVE_PAGES.includes(n.pathname) && (0, t.jsx)(S.CartIcon, {
                                iconTheme: N
                            }), !W.some(e => e.test(n.pathname)) && (0, t.jsx)(t.Fragment, {
                                children: "US" === f && "/" === n.pathname ? (0, t.jsx)(c.default, {
                                    href: {
                                        pathname: "/blood-vision/buy"
                                    },
                                    className: "btn-accent",
                                    children: "Book test"
                                }) : "US" === f ? (0, t.jsxs)("button", {
                                    className: "talk-to-spl",
                                    onClick: F,
                                    "data-buttontype": "header",
                                    children: [(0, t.jsx)("span", {
                                        children: i("header.talkToExpert")
                                    }), " ", (0, t.jsx)(a.ChatBubbles, {})]
                                }) : (0, t.jsx)(c.default, {
                                    href: {
                                        pathname: H.pathname
                                    },
                                    className: "btn-accent",
                                    children: i(H.labelKey)
                                })
                            }), W.some(e => e.test(n.pathname)) && (0, t.jsxs)("button", {
                                className: "talk-to-spl",
                                onClick: F,
                                "data-buttontype": "header",
                                children: [(0, t.jsx)("span", {
                                    children: i("header.talkToExpert")
                                }), " ", (0, t.jsx)(a.ChatBubbles, {})]
                            })]
                        })]
                    })
                }), M && U > 991 && (0, t.jsx)(t.Fragment, {
                    children: (0, t.jsx)(V, {
                        children: D[M]
                    })
                })]
            })]
        })
    }).withConfig({
        displayName: "Header__HeaderComponent",
        componentId: "sc-f72a4041-6"
    })
    `
  // --extreme-element-width: 80px;

  z-index: 1000;
  position: fixed;
  top: 0;
  transition: transform 0.3s ease-in-out;

  &.header-collaspable {
    transform: translateY(-100%);

    &.header-visible {
      transform: translateY(0);
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.85);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);

    transition: transform 0.2s ease-in-out;
    transform: translateY(-200px);
  }

  button {
    border: 0;
    background: transparent;
    opacity: 0.5;
  }

  &.dark {
    @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
      color: #ffffff;
      a,
      button {
        color: #ffffff;
      }
    }
  }

  &.light {
    @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
      color: #000000;
      a,
      button {
        color: #000000;
      }
    }
    &::before {
      background-color: rgba(255, 255, 255, 0.6);
      -webkit-backdrop-filter: blur(20px);
      backdrop-filter: blur(20px);
    }
  }

  &.bg-active::before {
    transform: translate3d(0, 0, 0);
  }

  &.page-ring-pro::before {
    background-color: rgba(0, 0, 0, 0.9);
    -webkit-backdrop-filter: none;
    backdrop-filter: none;
  }

  header {
    width: 100vw;
    position: relative;
    // top: 0;
    color: #fff;

    height: 48px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    & > div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      .ontop {
        z-index: 100;
        position: relative;
      }
    }

    .link-home {
      margin: 0;
      // width: var(--extreme-element-width);
      width: fit-content;
      display: flex;
      align-items: center;
    }

    .logo {
      height: 16px;
      pointer-events: none;
    }

    .left-pane {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 16px;
    }

    button.talk-to-spl {
      font-weight: 400;
      font-size: 16px;
      line-height: 17px;
      font-weight: 500;

      letter-spacing: -0.03em;

      background: transparent;
      border: none;
      cursor: pointer;

      display: flex;
      align-items: center;
      gap: 4px;

      color: black;

      background: rgba(238, 238, 238, 1);
      padding: 8px 12px;
      border-radius: 24px;
      cursor: pointer;
      opacity: 1;
      span {
        margin-right: 2px;
      }
    }

    .extra-btns {
      // width: var(--extreme-element-width);
      width: fit-content;
      display: flex;
      flex-direction: row;
      gap: 16px;
      align-items: center;
      justify-content: flex-end;

      & > * {
        flex-shrink: 0;
        flex-grow: 0;
      }
    }

    .btn-accent {
      background-color: ${({theme:e})=>e.colorsV2.primaryBlue};
      color: #ffffff;
      border: none;
      padding: 8px 16px 7px;
      border-radius: 24px;
      font-size: ${({theme:e})=>e.typographyV2.fontSize.mediumsmall};
      font-weight: ${({theme:e})=>e.typographyV2.fontWeight.semibold};
      display: inline-block;
      letter-spacing: -0.06rem;

      &.mobile {
        padding: 4px 12px;
        margin-right: 24px;
      }

      &.white {
        background-color: #ffffff;
        color: #000000;
      }
    }

    .mobile-show {
      display: none;
    }

    @media (max-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
      .mobile-hide {
        display: none;
      }
    }
    @media (max-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
      .mobile-show {
        display: block;
      }
    }
  }
`, O = () => {
        let e = (0, l.useContext)(E.GlobalUIContext),
            r = (0, d.useRouter)();
        return e.liteUI || g.NO_HEADER_OR_FOOTER_PAGES.includes(r.pathname) ? null : (0, t.jsx)(N, {})
    };
    var U = e.i(50461),
        M = e.i(17837);

    function L() {
        return false
    }

    function D(e) {
        return RegExp(`/${e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}(?=[/?#]|$)`)
    }

    function B(e) {
        (0, l.useEffect)(() => {
            var t;
            e.beforeSend && (null == (t = window.si) || t.call(window, "beforeSend", e.beforeSend))
        }, [e.beforeSend]);
        let t = (0, l.useRef)(null);
        return (0, l.useEffect)(() => {
            if (t.current) e.route && t.current(e.route);
            else {
                let r = function(e = {}) {
                    var t;
                    if (!("u" > typeof window) || null === e.route) return null;
                    window.si || (window.si = function(...e) {
                        (window.siq = window.siq || []).push(e)
                    });
                    let r = e.scriptSrc ? e.scriptSrc : L() ? "https://va.vercel-scripts.com/v1/speed-insights/script.debug.js" : e.dsn ? "https://va.vercel-scripts.com/v1/speed-insights/script.js" : e.basePath ? `${e.basePath}/speed-insights/script.js` : "/_vercel/speed-insights/script.js";
                    if (document.head.querySelector(`script[src*="${r}"]`)) return null;
                    e.beforeSend && (null == (t = window.si) || t.call(window, "beforeSend", e.beforeSend));
                    let i = document.createElement("script");
                    return i.src = r, i.defer = !0, i.dataset.sdkn = "@vercel/speed-insights" + (e.framework ? `/${e.framework}` : ""), i.dataset.sdkv = "1.3.1", e.sampleRate && (i.dataset.sampleRate = e.sampleRate.toString()), e.route && (i.dataset.route = e.route), e.endpoint ? i.dataset.endpoint = e.endpoint : e.basePath && (i.dataset.endpoint = `${e.basePath}/speed-insights/vitals`), e.dsn && (i.dataset.dsn = e.dsn), L() && !1 === e.debug && (i.dataset.debug = "false"), i.onerror = () => {
                        console.log(`[Vercel Speed Insights] Failed to load script from ${r}. Please check if any content blockers are enabled and try again.`)
                    }, document.head.appendChild(i), {
                        setRoute: e => {
                            i.dataset.route = e ? ? void 0
                        }
                    }
                }({
                    framework: e.framework ? ? "react",
                    basePath: e.basePath ? ? function() {
                        if (void 0 !== U.default && void 0 !== U.default.env) return U.default.env.REACT_APP_VERCEL_OBSERVABILITY_BASEPATH
                    }(),
                    ...e
                });
                r && (t.current = r.setRoute)
            }
        }, [e.route]), null
    }

    function $(e) {
        let t = (() => {
            let e = (0, M.useParams)(),
                t = (0, M.useSearchParams)() || new URLSearchParams,
                r = (0, M.usePathname)();
            if (!e) return null;
            let i = Object.keys(e).length ? e : Object.fromEntries(t.entries());
            if (!r || !i) return r;
            let n = r;
            try {
                let e = Object.entries(i);
                for (let [t, r] of e)
                    if (!Array.isArray(r)) {
                        let e = D(r);
                        e.test(n) && (n = n.replace(e, `/[${t}]`))
                    }
                for (let [t, r] of e)
                    if (Array.isArray(r)) {
                        let e = D(r.join("/"));
                        e.test(n) && (n = n.replace(e, `/[...${t}]`))
                    }
                return n
            } catch (e) {
                return r
            }
        })();
        return l.default.createElement(B, {
            route: t,
            ...e,
            framework: "next",
            basePath: function() {
                if (void 0 !== U.default && void 0 !== U.default.env) return U.default.env.NEXT_PUBLIC_VERCEL_OBSERVABILITY_BASEPATH
            }()
        })
    }

    function G(e) {
        return l.default.createElement(l.Suspense, {
            fallback: null
        }, l.default.createElement($, { ...e
        }))
    }
    e.s(["SpeedInsights", () => G], 87145);
    let F = (0, t.jsxs)("svg", {
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
        W = (0, l.createContext)({
            set: () => {},
            clear: () => {},
            show: () => {},
            hide: () => {},
            setCloseButtonTheme: () => {},
            setCloseBtnHidden: () => {}
        }),
        H = (0, u.default)(({
            className: e,
            children: r,
            hideModal: i,
            closeBtnHidden: n = !1
        }) => {
            let a = (0, l.useRef)(null),
                o = (0, l.useRef)(null);
            return (0, l.useEffect)(() => {
                let e = e => {
                    "Escape" === e.key && i && i()
                };
                return document.activeElement instanceof HTMLElement && (o.current = document.activeElement), document.addEventListener("keydown", e), a.current && !n && a.current.focus(), () => {
                    document.removeEventListener("keydown", e), o.current && o.current.focus()
                }
            }, [i, n]), (0, t.jsx)("div", {
                className: e,
                "aria-hidden": "true",
                onClick: i,
                onScroll: e => e.stopPropagation(),
                children: (0, t.jsx)("div", {
                    className: "modal-container",
                    children: (0, t.jsx)("div", {
                        className: "modal",
                        onScroll: e => e.stopPropagation(),
                        children: (0, t.jsxs)(t.Fragment, {
                            children: [(0, t.jsx)("div", {
                                id: "modal-title",
                                className: "sr-only",
                                children: "Modal Content"
                            }), (0, t.jsx)("div", {
                                id: "modal-description",
                                className: "sr-only",
                                children: "Modal dialog content. Press Escape to close."
                            }), r, !n && (0, t.jsx)("div", {
                                className: "btn-container",
                                onClick: e => e.stopPropagation(),
                                onKeyDown: e => e.stopPropagation(),
                                role: "button",
                                tabIndex: 0,
                                "aria-label": "Close button container",
                                children: (0, t.jsxs)("button", {
                                    className: "closeBtn",
                                    onClick: () => {
                                        i && i()
                                    },
                                    ref: a,
                                    "aria-label": "Close modal",
                                    type: "button",
                                    children: [(0, t.jsx)("span", {
                                        className: "sr-only",
                                        children: "Close modal"
                                    }), F]
                                })
                            })]
                        })
                    })
                })
            })
        }).withConfig({
            displayName: "MagicModalNew",
            componentId: "sc-9781d0d0-0"
        })
    `
  /* Screen reader only text */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

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

  animation: ${u.keyframes`
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
      height: 100vh;
      overflow: scroll;
      scroll-behavior: smooth;
      overscroll-behavior: contain;

      & > div,
      .btn-container {
        margin-top: 5vh;
        width: 90%;

        @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
          margin-top: 10vh;
          width: 89rem;
        }

        @media (min-width: ${({theme:e})=>e.globalV2.xxxl.minWidth}) {
          margin-top: 15vh;
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
    e.s(["CrossLight", 0, F, "MagicModalNewContext", 0, W, "MagicModalNewProvider", 0, ({
        children: e
    }) => {
        let [r, i] = (0, l.useState)(!1), [n, a] = (0, l.useState)(null), [o, s] = (0, l.useState)(!1), [c, d] = (0, l.useState)(!1), u = e => {
            i(!1), s(!1), d(!1), e && "function" == typeof e && "function" == typeof e && e()
        };
        return (0, t.jsxs)(W.Provider, {
            value: {
                set: e => {
                    console.log("setting modal content !"), console.log(e), a(e)
                },
                clear: () => {
                    a(null), u()
                },
                show: () => {
                    i(!0)
                },
                hide: u,
                setCloseButtonTheme: e => {
                    "dark" != e && s(!0)
                },
                setCloseBtnHidden: d
            },
            children: [e, r && (0, t.jsx)(H, {
                lightCloseButton: o,
                hideModal: u,
                closeBtnHidden: c,
                children: n
            })]
        })
    }], 65217), e.s(["pageview", 0, e => {
        window ? .gtag("config", "UA-162376200-1", {
            page_path: e
        })
    }], 50204);
    var Y = e.i(69813);
    let z = {
        className: Y.default.className,
        style: {
            fontFamily: "'graphik', 'graphik Fallback', system-ui, sans-serif"
        }
    };
    null != Y.default.variable && (z.variable = Y.default.variable), e.s(["graphik", 0, z], 18209);
    var q = e.i(26019);
    let X = ["TW"];
    e.s(["FlagIcon", 0, ({
        code: e,
        size: r = 20
    }) => {
        if (!e || X.includes(e.toUpperCase())) return null;
        let i = `/circle-flag-icons/${e.toLowerCase()}.svg`;
        return (0, t.jsx)(q.default, {
            src: i,
            alt: `${e} flag`,
            width: r,
            height: r,
            style: {
                borderRadius: "50%"
            }
        })
    }, "getFlagSrc", 0, e => !e || X.includes(e.toUpperCase()) ? null : `/circle-flag-icons/${e.toLowerCase()}.svg`], 91147), e.s(["CITY_HEADER", 0, "x-vercel-ip-city", "COUNTRY_HEADER", 0, "cf-ipcountry", "COUNTRY_HEADER_FALLBACK", 0, "x-vercel-ip-country", "REGION_HEADER", 0, "x-vercel-ip-country-region"], 45576);
    var K = e.i(14073);
    let Z = ["US", "IN", "GB", "AE"];

    function J() {
        return JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Ultrahuman",
            legalName: "Ultrahuman Inc.",
            url: "https://www.ultrahuman.com",
            logo: "https://www.ultrahuman.com/logo.png",
            description: "Ultrahuman is the world's most comprehensive self-quantification platform. Ultrahuman helps you track your sleep, movement, metabolism, recovery, and more.",
            foundingDate: "2019",
            founders: [{
                "@type": "Person",
                name: "Mohit Kumar"
            }, {
                "@type": "Person",
                name: "Vatsal Singhal"
            }],
            contactPoint: Z.map(e => ({
                "@type": "ContactPoint",
                telephone: K.PHONE_NUMBER_BY_COUNTRY[e],
                contactType: "Customer Service",
                areaServed: e,
                email: "support@ultrahuman.com",
                availableLanguage: ["en"]
            })),
            sameAs: ["https://www.facebook.com/UltrahumanHQ", "https://twitter.com/UltrahumanHQ", "https://www.instagram.com/UltrahumanHQ", "https://www.linkedin.com/company/ultrahuman", "https://www.youtube.com/@ultrahuman"],
            address: {
                "@type": "PostalAddress",
                streetAddress: K.US_ADDRESS.streetAddress,
                addressLocality: K.US_ADDRESS.addressLocality,
                addressRegion: K.US_ADDRESS.addressRegion,
                postalCode: K.US_ADDRESS.postalCode,
                addressCountry: K.US_ADDRESS.addressCountry
            }
        })
    }
    e.s(["getOrganizationSchemaScript", () => J], 72652)
}, 3115, e => {
    "use strict";
    e.s(["RegionLocaleContext", () => Z, "default", () => ee], 3115);
    var t, r, i = e.i(50461),
        n = e.i(91398),
        a = e.i(97580),
        o = e.i(68489),
        s = e.i(58678),
        c = e.i(26019),
        d = e.i(3828),
        l = e.i(91788),
        u = e.i(60814),
        p = e.i(29201),
        f = e.i(77197),
        h = e.i(6504),
        m = e.i(57134),
        g = e.i(37775),
        y = e.i(56453),
        b = e.i(51172),
        S = e.i(66809),
        x = e.i(79865),
        v = e.i(2962),
        _ = e.i(19152),
        w = e.i(50687),
        E = e.i(87145),
        I = e.i(65217),
        C = e.i(37563),
        A = e.i(46737),
        k = e.i(50204),
        R = e.i(17837),
        P = e.i(18209);
    e.i(64157);
    var T = e.i(91214),
        V = e.i(47811),
        j = e.i(18888),
        N = e.i(48429),
        O = e.i(78198),
        U = e.i(65777),
        M = e.i(91147),
        L = e.i(45576),
        D = e.i(72652),
        B = e.i(78490),
        $ = e.i(91898),
        G = e.i(71225),
        F = e.i(59207),
        W = e.i(228),
        H = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
        Y = (t = function(e) {
            return H.test(e) || 111 === e.charCodeAt(0) && 110 === e.charCodeAt(1) && 91 > e.charCodeAt(2)
        }, r = Object.create(null), function(e) {
            return void 0 === r[e] && (r[e] = t(e)), r[e]
        }),
        z = e.i(92195);
    let q = (0, o.default)(() => e.A(9135), {
        loadableGenerated: {
            modules: [14075]
        },
        ssr: !1
    });
    j.gsap.registerPlugin(z.ScrollTrigger);
    let X = u.createGlobalStyle `
  html {
    background-color: ${({theme:e})=>e.colorsV2.background};
	  font-size: 62.5%;

    * {
      font-family: var(--font-graphik), system-ui, sans-serif;
      -webkit-font-smoothing: antialiased;
      scroll-behavior: smooth;
    }

    --grid-column-width: ${({theme:e})=>e.globalV2.xxl.gridColumnWidth};
    --grid-column-gap: ${({theme:e})=>e.globalV2.xxl.gridColumnGap};
    --grid-column-spacing: ${({theme:e})=>e.globalV2.xxl.gridColumSpacing};

    @media (max-width: ${({theme:e})=>e.globalV2.xl.maxWidth}) {
      --grid-column-gap: ${({theme:e})=>e.globalV2.xl.gridColumnGap};
      --grid-column-spacing: ${({theme:e})=>e.globalV2.xl.gridColumSpacing};
    }
    @media (max-width: ${({theme:e})=>e.globalV2.lg.maxWidth}) {
      --grid-column-gap: ${({theme:e})=>e.globalV2.lg.gridColumnGap};
      --grid-column-spacing: ${({theme:e})=>e.globalV2.lg.gridColumSpacing};
    }
    @media (max-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
      --grid-column-gap: ${({theme:e})=>e.globalV2.md.gridColumnGap};
      --grid-column-spacing: ${({theme:e})=>e.globalV2.md.gridColumSpacing};
    }
    @media (max-width: ${({theme:e})=>e.globalV2.sm.maxWidth}) {
      --grid-column-gap: ${({theme:e})=>e.globalV2.sm.gridColumnGap};
      --grid-column-spacing: ${({theme:e})=>e.globalV2.sm.gridColumSpacing};
    }
  }

  body {
    color: ${({theme:e})=>e.colorsV2.primary};
    max-width: 100vw;
    width: 100%;
    overflow-x: hidden;
    min-height: var(--viewportHeight, 100vh);

    .gtm > * {
      pointer-events: none;
    }
  }

  html, body {
    width: 100vw;
    max-width: 100vw;
}

  a {
    color: ${({theme:e})=>e.colorsV2.primary};
    text-decoration: none;
    cursor: pointer;

    // &:hover {
    //   text-shadow: 0 0 4px rgba(255, 255, 255, 0.5);
    // }
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #loader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: var(--viewportHeight, 100vh);
    background-color: #000;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 1;
    transition: opacity 0.3s ease-out;
    pointer-events: none;
  }

  #loader.loaded {
    opacity: 0;
    visibility: hidden;
  }

  #main-content {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  button {
    cursor: pointer;
  }

  button.transparent {
    background-color: transparent;
    border: none;
  }

  button, a {
    -webkit-tap-highlight-color: transparent;
  }
`,
        K = (e, t) => "string" != typeof t || Y(e),
        Z = (0, l.createContext)({
            region: "US",
            language: "en",
            locale: "en-US",
            store: F.ShopifyStore.US,
            currency: W.Currency.usd,
            regionSlug: "us",
            flag: null,
            countryName: null,
            detectedRegionFromGeoIP: "XX"
        }),
        J = ({
            children: e,
            regionLocale: t
        }) => (0, n.jsx)(Z.Provider, {
            value: t,
            children: e
        }),
        Q = ({
            Component: e,
            pageProps: t
        }) => {
            let [r, i] = (0, l.useState)(!1), [o, T] = (0, l.useState)(!0), V = (0, d.useRouter)(), j = (0, R.usePathname)(), U = (0, R.useSearchParams)();
            (0, l.useEffect)(() => {
                let e = j + (U ? .toString() ? ? "");
                (0, k.pageview)(e)
            }, [j, U]);
            let M = (0, l.useCallback)(e => {
                    (window.innerWidth > w.TABLET_MAX_WIDTH_IN_PX || e) && document.documentElement.style.setProperty("--viewportHeight", `${window.innerHeight}px`)
                }, []),
                L = e => {
                    e ? .split("?")[0] !== `${V.pathname}/` && i(!1)
                },
                B = () => {
                    i(!0), setTimeout(() => T(!1), 100)
                };
            (0, l.useEffect)(() => {
                M(!0), setTimeout(() => {
                    i(!0), T(!1)
                }, 50);
                let e = () => M(!1);
                return window.addEventListener("resize", e), V.events.on("routeChangeStart", L), V.events.on("routeChangeComplete", B), V.events.on("routeChangeError", B), () => {
                    window.removeEventListener("resize", e), V.events.off("routeChangeStart", L), V.events.off("routeChangeComplete", B), V.events.off("routeChangeError", B)
                }
            }, []);
            let $ = t.regionLocale || {
                region: "GLOBAL",
                language: "en",
                locale: "en-US",
                store: F.ShopifyStore.ROW,
                currency: W.Currency.usd,
                regionSlug: "global",
                flag: null,
                countryName: "Global",
                detectedRegionFromGeoIP: "XX"
            };
            return (0, n.jsx)(J, {
                regionLocale: $,
                children: (0, n.jsx)(u.StyleSheetManager, {
                    shouldForwardProp: K,
                    enableVendorPrefixes: !0,
                    children: (0, n.jsxs)(u.ThemeProvider, {
                        theme: w.theme,
                        children: [(0, n.jsxs)("div", {
                            className: P.graphik.className,
                            children: [(0, n.jsxs)(s.default, {
                                children: [(0, n.jsx)("script", {
                                    type: "text/javascript",
                                    dangerouslySetInnerHTML: {
                                        __html: g.NEWRELIC_SNIPPET
                                    }
                                }), (0, n.jsx)("meta", {
                                    name: "viewport",
                                    content: "initial-scale=1.0, width=device-width"
                                }), (0, n.jsx)("link", {
                                    rel: "apple-touch-icon",
                                    sizes: "180x180",
                                    href: "/apple-touch-icon.png"
                                }), (0, n.jsx)("link", {
                                    rel: "icon",
                                    type: "image/png",
                                    sizes: "32x32",
                                    href: "/favicon-32x32.png"
                                }), (0, n.jsx)("link", {
                                    rel: "icon",
                                    type: "image/png",
                                    sizes: "16x16",
                                    href: "/favicon-16x16.png"
                                }), (0, n.jsx)("link", {
                                    rel: "manifest",
                                    href: "/site.webmanifest"
                                }), (0, n.jsx)("link", {
                                    rel: "mask-icon",
                                    href: "/safari-pinned-tab.svg",
                                    color: "#000000"
                                }), (0, n.jsx)("meta", {
                                    name: "msapplication-TileColor",
                                    content: "#000000"
                                }), (0, n.jsx)("meta", {
                                    name: "theme-color",
                                    content: "#000000"
                                }), (0, n.jsx)("meta", {
                                    httpEquiv: "Content-type",
                                    content: "text/html; charset=utf-8"
                                }), (0, n.jsx)("meta", {
                                    httpEquiv: "X-UA-Compatible",
                                    content: "IE=Edge"
                                }), (0, n.jsx)("meta", {
                                    name: "apple-itunes-app",
                                    content: "app-id=1491286709, app-argument=ultrahuman://"
                                }), (0, n.jsx)("link", {
                                    rel: "shortcut icon",
                                    href: (0, O.getAssetUrl)("/web_v2/thumb/uh-icon-1000x1000.png")
                                }), (0, n.jsx)("meta", {
                                    name: "twitter:card",
                                    content: "summary_large_image"
                                }), (0, n.jsx)("meta", {
                                    name: "twitter:site",
                                    content: "@ultrahumanhq"
                                }), (0, n.jsx)("meta", {
                                    name: "twitter:creator",
                                    content: "@ultrahumanhq"
                                }), (0, n.jsx)("meta", {
                                    name: "twitter:title",
                                    content: "Ultrahuman. Real-time sleep and recovery tracking."
                                }, "twitter-title"), (0, n.jsx)("meta", {
                                    name: "twitter:description",
                                    content: "Ultrahuman Ring AIR ® is the world’s most comfortable and compact smart ring that monitors your sleep, movement and recovery. Now HSA/FSA eligible."
                                }, "twitter-description"), (0, n.jsx)("meta", {
                                    name: "twitter:image",
                                    content: (0, O.getAssetUrl)("/web_v2/thumb/uh-icon-1000x1000.png")
                                }, "twitter-image"), (0, n.jsx)("meta", {
                                    name: "twitter:app:country",
                                    content: "in"
                                }), (0, n.jsx)("meta", {
                                    name: "al:ios:app_name",
                                    content: "Ultrahuman"
                                }), (0, n.jsx)("meta", {
                                    name: "al:ios:app_store_id",
                                    content: "1491286709"
                                }), (0, n.jsx)("meta", {
                                    name: "twitter:app:name:iphone",
                                    content: "Ultrahuman"
                                }), (0, n.jsx)("meta", {
                                    name: "twitter:app:id:iphone",
                                    content: "1491286709"
                                }), (0, n.jsx)("meta", {
                                    name: "twitter:app:url:iphone",
                                    content: "https://ultrahuman.com"
                                }), (0, n.jsx)("meta", {
                                    name: "twitter:app:name:ipad",
                                    content: "Ultrahuman"
                                }), (0, n.jsx)("meta", {
                                    name: "twitter:app:id:ipad",
                                    content: "1491286709"
                                }), (0, n.jsx)("meta", {
                                    name: "twitter:app:url:ipad",
                                    content: "https://ultrahuman.com"
                                }), (0, n.jsx)("meta", {
                                    name: "twitter:app:name:googleplay",
                                    content: "Ultrahuman"
                                }), (0, n.jsx)("meta", {
                                    name: "twitter:app:id:googleplay",
                                    content: "com.ultrahuman.android"
                                }), (0, n.jsx)("meta", {
                                    name: "twitter:app:url:googleplay",
                                    content: "https://ultrahuman.com"
                                }), (0, n.jsx)("meta", {
                                    property: "og:title",
                                    content: "Ultrahuman. Real-time sleep and recovery tracking."
                                }, "og-title"), (0, n.jsx)("meta", {
                                    property: "og:type",
                                    content: "website"
                                }), (0, n.jsx)("meta", {
                                    property: "og:image",
                                    content: (0, O.getAssetUrl)("/web_v2/thumb/uh-icon-1000x1000.png")
                                }, "og-image"), (0, n.jsx)("meta", {
                                    name: "description",
                                    content: "Ultrahuman Ring AIR is the world’s most comfortable and compact smart ring that monitors your sleep, movement and recovery."
                                }, "description"), (0, n.jsx)("meta", {
                                    name: "keywords",
                                    content: "smart ring, sleep tracker, health ring, HRV monitor, Ultrahuman Ring AIR, Ultrahuman Home, recovery tracking"
                                }), (0, n.jsx)("meta", {
                                    name: "google-site-verification",
                                    content: "goXdcs-BRzl1LZnYifn_4joxaeuwX1_YURq8waDCfB0"
                                }), (0, n.jsx)("script", {
                                    type: "application/ld+json",
                                    dangerouslySetInnerHTML: {
                                        __html: `{
                  "@context": "https://schema.org",
                  "@type": "WebSite",
                  "name": "Ultrahuman",
                  "url": "https://www.ultrahuman.com"
                }`
                                    }
                                }), (0, n.jsx)("script", {
                                    type: "application/ld+json",
                                    dangerouslySetInnerHTML: {
                                        __html: (0, D.getOrganizationSchemaScript)()
                                    }
                                })]
                            }), (0, n.jsx)(X, {}), (o || !r) && !V.pathname.startsWith("/cycle-report/") && (0, n.jsx)("div", {
                                id: "loader",
                                className: r ? "loaded" : "",
                                children: (0, n.jsxs)("picture", {
                                    children: [(0, n.jsx)("source", {
                                        srcSet: p.default.src,
                                        type: "image/webp"
                                    }), (0, n.jsx)(c.default, {
                                        src: f.default,
                                        alt: "Loading...",
                                        priority: !0
                                    })]
                                })
                            }), (0, n.jsx)("div", {
                                id: "main-content",
                                children: (0, n.jsx)(N.ErrorBoundary, {
                                    errorComponent: () => (0, n.jsx)(y.ApplicationErrorComponent, {}),
                                    children: (0, n.jsxs)(A.GlobalUIProvider, {
                                        children: [(0, n.jsx)(C.CookieConsentBanner, {}), (0, n.jsx)(_.ToastProvider, {
                                            children: (0, n.jsx)(b.UserAnalyticsProvider, {
                                                children: (0, n.jsx)(h.CartProvider, {
                                                    initialCampaigns: t.initialCampaigns,
                                                    children: (0, n.jsx)(m.ModalProvider, {
                                                        children: (0, n.jsxs)(I.MagicModalNewProvider, {
                                                            children: [(0, n.jsx)(v.Header, {}), (0, n.jsx)(e, { ...t
                                                            }), (0, n.jsx)(S.Cart, {}), (0, n.jsx)(x.Footer, {}), (0, n.jsx)(q, {})]
                                                        })
                                                    })
                                                })
                                            })
                                        })]
                                    })
                                })
                            })]
                        }), (0, n.jsx)(a.Analytics, {}), (0, n.jsx)(E.SpeedInsights, {})]
                    })
                })
            })
        };
    Q.getInitialProps = async e => {
        let t, r, n, a, o, s = await U.default.getInitialProps(e),
            c = e.ctx.req,
            d = e.ctx.query,
            l = e => Array.isArray(e) ? e[0] : e,
            u = c && l(c.headers[L.COUNTRY_HEADER]) ? .toUpperCase() || c && l(c.headers[L.COUNTRY_HEADER_FALLBACK]) ? .toUpperCase() || i.default.env.NEXT_PUBLIC_DEFAULT_COUNTRY || "XX";
        "PR" === u && (u = "US");
        let p = c && l(c.headers[L.CITY_HEADER]) ? .toUpperCase() || "XX",
            f = c && l(c.headers[L.REGION_HEADER]) ? .toUpperCase() || "XX",
            h = c ? .headers["x-uh-region"],
            m = c ? .headers["x-uh-language"],
            g = c ? .headers["x-uh-locale"],
            y = c ? .headers["x-uh-slug"],
            b = c ? .headers["x-uh-store"],
            S = c ? .headers["x-uh-currency"],
            x = c ? .headers["x-uh-country-name"],
            v = h ? .toUpperCase() || u,
            _ = m || "en",
            w = function(e) {
                let {
                    baseCountry: t,
                    queryLocale: r,
                    queryCountry: i
                } = e, n = r ? .toUpperCase() ? ? i ? .toUpperCase() ? ? t, a = (0, $.isROWStore)(n) ? "row" : (n || "").toLowerCase();
                return "pr" === a && (a = "us"), a
            }({
                baseCountry: v,
                queryLocale: d.locale ? ? void 0,
                queryCountry: d.country ? ? void 0
            }),
            E = [];
        if ("th" !== w) try {
            let e = await (0, B.fetchCampaigns)(w, !0);
            E = (0, B.getActiveCampaigns)(e.campaigns)
        } catch (e) {
            E = []
        }
        if (b && S && y && g) t = y, r = g, n = b, a = S, o = x || null;
        else {
            let e = (0, G.getRegionConfig)(v);
            t = (0, G.buildRegionLocaleSlug)(v, _), r = "en" === _ ? "en-US" : _, n = e.shopifyStore, a = e.currency, o = e.countryName
        }
        return { ...s,
            pageProps: { ...s.pageProps,
                geo: {
                    country: u,
                    city: p,
                    region: f
                },
                regionLocale: {
                    region: v,
                    language: _,
                    locale: r,
                    store: n,
                    currency: a,
                    regionSlug: t,
                    flag: (0, M.getFlagSrc)(v),
                    countryName: o,
                    detectedRegionFromGeoIP: u
                },
                initialCampaigns: E
            }
        }
    };
    let ee = (0, T.appWithTranslation)(Q, V.default)
}, 19230, e => {
    "use strict";
    e.s(["RegionSelector", () => d]);
    var t = e.i(91398),
        r = e.i(91788),
        i = e.i(3828),
        n = e.i(26019),
        a = e.i(60814),
        o = e.i(3115),
        s = e.i(73528);
    let c = a.default.button.withConfig({
        displayName: "RegionSelector__Trigger",
        componentId: "sc-dd6d3c1f-0"
    })
    `
  cursor: pointer;
  background: transparent;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 999px;
  padding: 4px 6px 4px 4px;
  font-size: 14px;
  font-weight: 500;
  line-height: 100%;
  letter-spacing: -0.14px;
  color: inherit;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  white-space: nowrap;

  &:hover {
    background: rgba(0, 0, 0, 0.04);
  }

`, d = ({
        className: e,
        displayFormat: a = "iso"
    }) => {
        let {
            countryName: d,
            flag: l,
            region: u
        } = (0, r.useContext)(o.RegionLocaleContext), p = (0, i.useRouter)();
        return (0, t.jsxs)(c, {
            className: e,
            onClick: () => {
                (0, s.track)("Region Selector - CLICK");
                let e = p.asPath;
                p.push(`/choose-country-region?ref=${encodeURIComponent(e)}`)
            },
            children: [l && (0, t.jsx)(n.default, {
                src: l,
                alt: `${u} flag`,
                width: 18,
                height: 18,
                style: {
                    borderRadius: "50%"
                }
            }), "name" === a && d || u]
        })
    }
}]);