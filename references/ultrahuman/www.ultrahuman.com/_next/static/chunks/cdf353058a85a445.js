(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 71599, (e, t, r) => {
    t.exports = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    }
}, 40563, (e, t, r) => {
    "use strict";
    var i = "function" == typeof Symbol && Symbol.for,
        s = i ? Symbol.for("react.element") : 60103,
        o = i ? Symbol.for("react.portal") : 60106,
        n = i ? Symbol.for("react.fragment") : 60107,
        a = i ? Symbol.for("react.strict_mode") : 60108,
        l = i ? Symbol.for("react.profiler") : 60114,
        u = i ? Symbol.for("react.provider") : 60109,
        c = i ? Symbol.for("react.context") : 60110,
        p = i ? Symbol.for("react.async_mode") : 60111,
        h = i ? Symbol.for("react.concurrent_mode") : 60111,
        g = i ? Symbol.for("react.forward_ref") : 60112,
        d = i ? Symbol.for("react.suspense") : 60113,
        f = i ? Symbol.for("react.suspense_list") : 60120,
        m = i ? Symbol.for("react.memo") : 60115,
        y = i ? Symbol.for("react.lazy") : 60116,
        b = i ? Symbol.for("react.block") : 60121,
        v = i ? Symbol.for("react.fundamental") : 60117,
        x = i ? Symbol.for("react.responder") : 60118,
        O = i ? Symbol.for("react.scope") : 60119;

    function S(e) {
        if ("object" == typeof e && null !== e) {
            var t = e.$$typeof;
            switch (t) {
                case s:
                    switch (e = e.type) {
                        case p:
                        case h:
                        case n:
                        case l:
                        case a:
                        case d:
                            return e;
                        default:
                            switch (e = e && e.$$typeof) {
                                case c:
                                case g:
                                case y:
                                case m:
                                case u:
                                    return e;
                                default:
                                    return t
                            }
                    }
                case o:
                    return t
            }
        }
    }

    function k(e) {
        return S(e) === h
    }
    r.AsyncMode = p, r.ConcurrentMode = h, r.ContextConsumer = c, r.ContextProvider = u, r.Element = s, r.ForwardRef = g, r.Fragment = n, r.Lazy = y, r.Memo = m, r.Portal = o, r.Profiler = l, r.StrictMode = a, r.Suspense = d, r.isAsyncMode = function(e) {
        return k(e) || S(e) === p
    }, r.isConcurrentMode = k, r.isContextConsumer = function(e) {
        return S(e) === c
    }, r.isContextProvider = function(e) {
        return S(e) === u
    }, r.isElement = function(e) {
        return "object" == typeof e && null !== e && e.$$typeof === s
    }, r.isForwardRef = function(e) {
        return S(e) === g
    }, r.isFragment = function(e) {
        return S(e) === n
    }, r.isLazy = function(e) {
        return S(e) === y
    }, r.isMemo = function(e) {
        return S(e) === m
    }, r.isPortal = function(e) {
        return S(e) === o
    }, r.isProfiler = function(e) {
        return S(e) === l
    }, r.isStrictMode = function(e) {
        return S(e) === a
    }, r.isSuspense = function(e) {
        return S(e) === d
    }, r.isValidElementType = function(e) {
        return "string" == typeof e || "function" == typeof e || e === n || e === h || e === l || e === a || e === d || e === f || "object" == typeof e && null !== e && (e.$$typeof === y || e.$$typeof === m || e.$$typeof === u || e.$$typeof === c || e.$$typeof === g || e.$$typeof === v || e.$$typeof === x || e.$$typeof === O || e.$$typeof === b)
    }, r.typeOf = S
}, 49957, (e, t, r) => {
    "use strict";
    t.exports = e.r(40563)
}, 34980, (e, t, r) => {
    "use strict";
    var i = e.r(49957),
        s = {
            childContextTypes: !0,
            contextType: !0,
            contextTypes: !0,
            defaultProps: !0,
            displayName: !0,
            getDefaultProps: !0,
            getDerivedStateFromError: !0,
            getDerivedStateFromProps: !0,
            mixins: !0,
            propTypes: !0,
            type: !0
        },
        o = {
            name: !0,
            length: !0,
            prototype: !0,
            caller: !0,
            callee: !0,
            arguments: !0,
            arity: !0
        },
        n = {
            $$typeof: !0,
            compare: !0,
            defaultProps: !0,
            displayName: !0,
            propTypes: !0,
            type: !0
        },
        a = {};

    function l(e) {
        return i.isMemo(e) ? n : a[e.$$typeof] || s
    }
    a[i.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0
    }, a[i.Memo] = n;
    var u = Object.defineProperty,
        c = Object.getOwnPropertyNames,
        p = Object.getOwnPropertySymbols,
        h = Object.getOwnPropertyDescriptor,
        g = Object.getPrototypeOf,
        d = Object.prototype;
    t.exports = function e(t, r, i) {
        if ("string" != typeof r) {
            if (d) {
                var s = g(r);
                s && s !== d && e(t, s, i)
            }
            var n = c(r);
            p && (n = n.concat(p(r)));
            for (var a = l(t), f = l(r), m = 0; m < n.length; ++m) {
                var y = n[m];
                if (!o[y] && !(i && i[y]) && !(f && f[y]) && !(a && a[y])) {
                    var b = h(r, y);
                    try {
                        u(t, y, b)
                    } catch (e) {}
                }
            }
        }
        return t
    }
}, 64157, 71179, 60997, 91214, e => {
    "use strict";
    let t;
    var r = e.i(91788);
    let i = e => "string" == typeof e,
        s = () => {
            let e, t, r = new Promise((r, i) => {
                e = r, t = i
            });
            return r.resolve = e, r.reject = t, r
        },
        o = e => null == e ? "" : "" + e,
        n = /###/g,
        a = e => e && e.indexOf("###") > -1 ? e.replace(n, ".") : e,
        l = e => !e || i(e),
        u = (e, t, r) => {
            let s = i(t) ? t.split(".") : t,
                o = 0;
            for (; o < s.length - 1;) {
                if (l(e)) return {};
                let t = a(s[o]);
                !e[t] && r && (e[t] = new r), e = Object.prototype.hasOwnProperty.call(e, t) ? e[t] : {}, ++o
            }
            return l(e) ? {} : {
                obj: e,
                k: a(s[o])
            }
        },
        c = (e, t, r) => {
            let {
                obj: i,
                k: s
            } = u(e, t, Object);
            if (void 0 !== i || 1 === t.length) {
                i[s] = r;
                return
            }
            let o = t[t.length - 1],
                n = t.slice(0, t.length - 1),
                a = u(e, n, Object);
            for (; void 0 === a.obj && n.length;) o = `${n[n.length-1]}.${o}`, a = u(e, n = n.slice(0, n.length - 1), Object), a ? .obj && void 0 !== a.obj[`${a.k}.${o}`] && (a.obj = void 0);
            a.obj[`${a.k}.${o}`] = r
        },
        p = (e, t) => {
            let {
                obj: r,
                k: i
            } = u(e, t);
            if (r && Object.prototype.hasOwnProperty.call(r, i)) return r[i]
        },
        h = (e, t, r) => {
            for (let s in t) "__proto__" !== s && "constructor" !== s && (s in e ? i(e[s]) || e[s] instanceof String || i(t[s]) || t[s] instanceof String ? r && (e[s] = t[s]) : h(e[s], t[s], r) : e[s] = t[s]);
            return e
        };
    var g = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
        "/": "&#x2F;"
    };
    let d = e => i(e) ? e.replace(/[&<>"'\/]/g, e => g[e]) : e,
        f = [" ", ",", "?", "!", ";"],
        m = new class {
            constructor(e) {
                this.capacity = e, this.regExpMap = new Map, this.regExpQueue = []
            }
            getRegExp(e) {
                let t = this.regExpMap.get(e);
                if (void 0 !== t) return t;
                let r = new RegExp(e);
                return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()), this.regExpMap.set(e, r), this.regExpQueue.push(e), r
            }
        }(20),
        y = (e, t, r = ".") => {
            if (!e) return;
            if (e[t]) {
                if (!Object.prototype.hasOwnProperty.call(e, t)) return;
                return e[t]
            }
            let i = t.split(r),
                s = e;
            for (let e = 0; e < i.length;) {
                let t;
                if (!s || "object" != typeof s) return;
                let o = "";
                for (let n = e; n < i.length; ++n)
                    if (n !== e && (o += r), o += i[n], void 0 !== (t = s[o])) {
                        if (["string", "number", "boolean"].indexOf(typeof t) > -1 && n < i.length - 1) continue;
                        e += n - e + 1;
                        break
                    }
                s = t
            }
            return s
        },
        b = e => e ? .replace("_", "-"),
        v = {
            type: "logger",
            log(e) {
                this.output("log", e)
            },
            warn(e) {
                this.output("warn", e)
            },
            error(e) {
                this.output("error", e)
            },
            output(e, t) {
                console ? .[e] ? .apply ? .(console, t)
            }
        };
    class x {
        constructor(e, t = {}) {
            this.init(e, t)
        }
        init(e, t = {}) {
            this.prefix = t.prefix || "i18next:", this.logger = e || v, this.options = t, this.debug = t.debug
        }
        log(...e) {
            return this.forward(e, "log", "", !0)
        }
        warn(...e) {
            return this.forward(e, "warn", "", !0)
        }
        error(...e) {
            return this.forward(e, "error", "")
        }
        deprecate(...e) {
            return this.forward(e, "warn", "WARNING DEPRECATED: ", !0)
        }
        forward(e, t, r, s) {
            return s && !this.debug ? null : (i(e[0]) && (e[0] = `${r}${this.prefix} ${e[0]}`), this.logger[t](e))
        }
        create(e) {
            return new x(this.logger, { ...{
                    prefix: `${this.prefix}:${e}:`
                },
                ...this.options
            })
        }
        clone(e) {
            return (e = e || this.options).prefix = e.prefix || this.prefix, new x(this.logger, e)
        }
    }
    var O = new x;
    class S {
        constructor() {
            this.observers = {}
        }
        on(e, t) {
            return e.split(" ").forEach(e => {
                this.observers[e] || (this.observers[e] = new Map);
                let r = this.observers[e].get(t) || 0;
                this.observers[e].set(t, r + 1)
            }), this
        }
        off(e, t) {
            if (this.observers[e]) {
                if (!t) return void delete this.observers[e];
                this.observers[e].delete(t)
            }
        }
        emit(e, ...t) {
            this.observers[e] && Array.from(this.observers[e].entries()).forEach(([e, r]) => {
                for (let i = 0; i < r; i++) e(...t)
            }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach(([r, i]) => {
                for (let s = 0; s < i; s++) r.apply(r, [e, ...t])
            })
        }
    }
    class k extends S {
        constructor(e, t = {
            ns: ["translation"],
            defaultNS: "translation"
        }) {
            super(), this.data = e || {}, this.options = t, void 0 === this.options.keySeparator && (this.options.keySeparator = "."), void 0 === this.options.ignoreJSONStructure && (this.options.ignoreJSONStructure = !0)
        }
        addNamespaces(e) {
            0 > this.options.ns.indexOf(e) && this.options.ns.push(e)
        }
        removeNamespaces(e) {
            let t = this.options.ns.indexOf(e);
            t > -1 && this.options.ns.splice(t, 1)
        }
        getResource(e, t, r, s = {}) {
            let o, n = void 0 !== s.keySeparator ? s.keySeparator : this.options.keySeparator,
                a = void 0 !== s.ignoreJSONStructure ? s.ignoreJSONStructure : this.options.ignoreJSONStructure;
            e.indexOf(".") > -1 ? o = e.split(".") : (o = [e, t], r && (Array.isArray(r) ? o.push(...r) : i(r) && n ? o.push(...r.split(n)) : o.push(r)));
            let l = p(this.data, o);
            return (!l && !t && !r && e.indexOf(".") > -1 && (e = o[0], t = o[1], r = o.slice(2).join(".")), !l && a && i(r)) ? y(this.data ? .[e] ? .[t], r, n) : l
        }
        addResource(e, t, r, i, s = {
            silent: !1
        }) {
            let o = void 0 !== s.keySeparator ? s.keySeparator : this.options.keySeparator,
                n = [e, t];
            r && (n = n.concat(o ? r.split(o) : r)), e.indexOf(".") > -1 && (n = e.split("."), i = t, t = n[1]), this.addNamespaces(t), c(this.data, n, i), s.silent || this.emit("added", e, t, r, i)
        }
        addResources(e, t, r, s = {
            silent: !1
        }) {
            for (let s in r)(i(r[s]) || Array.isArray(r[s])) && this.addResource(e, t, s, r[s], {
                silent: !0
            });
            s.silent || this.emit("added", e, t, r)
        }
        addResourceBundle(e, t, r, i, s, o = {
            silent: !1,
            skipCopy: !1
        }) {
            let n = [e, t];
            e.indexOf(".") > -1 && (n = e.split("."), i = r, r = t, t = n[1]), this.addNamespaces(t);
            let a = p(this.data, n) || {};
            o.skipCopy || (r = JSON.parse(JSON.stringify(r))), i ? h(a, r, s) : a = { ...a,
                ...r
            }, c(this.data, n, a), o.silent || this.emit("added", e, t, r)
        }
        removeResourceBundle(e, t) {
            this.hasResourceBundle(e, t) && delete this.data[e][t], this.removeNamespaces(t), this.emit("removed", e, t)
        }
        hasResourceBundle(e, t) {
            return void 0 !== this.getResource(e, t)
        }
        getResourceBundle(e, t) {
            return t || (t = this.options.defaultNS), this.getResource(e, t)
        }
        getDataByLanguage(e) {
            return this.data[e]
        }
        hasLanguageSomeTranslations(e) {
            let t = this.getDataByLanguage(e);
            return !!(t && Object.keys(t) || []).find(e => t[e] && Object.keys(t[e]).length > 0)
        }
        toJSON() {
            return this.data
        }
    }
    var w = {
        processors: {},
        addPostProcessor(e) {
            this.processors[e.name] = e
        },
        handle(e, t, r, i, s) {
            return e.forEach(e => {
                t = this.processors[e] ? .process(t, r, i, s) ? ? t
            }), t
        }
    };
    let L = Symbol("i18next/PATH_KEY");

    function $(e, t) {
        let r, i, s, {
            [L]: o
        } = e((i = [], (s = Object.create(null)).get = (e, t) => (r ? .revoke ? .(), t === L) ? i : (i.push(t), (r = Proxy.revocable(e, s)).proxy), Proxy.revocable(Object.create(null), s).proxy));
        return o.join(t ? .keySeparator ? ? ".")
    }
    let P = {},
        j = e => !i(e) && "boolean" != typeof e && "number" != typeof e;
    class C extends S {
        constructor(e, t = {}) {
            super(), ((e, t, r) => {
                e.forEach(e => {
                    t[e] && (r[e] = t[e])
                })
            })(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, this), this.options = t, void 0 === this.options.keySeparator && (this.options.keySeparator = "."), this.logger = O.create("translator")
        }
        changeLanguage(e) {
            e && (this.language = e)
        }
        exists(e, t = {
            interpolation: {}
        }) {
            let r = { ...t
            };
            if (null == e) return !1;
            let i = this.resolve(e, r);
            if (i ? .res === void 0) return !1;
            let s = j(i.res);
            return !1 !== r.returnObjects || !s
        }
        extractFromKey(e, t) {
            let r = void 0 !== t.nsSeparator ? t.nsSeparator : this.options.nsSeparator;
            void 0 === r && (r = ":");
            let s = void 0 !== t.keySeparator ? t.keySeparator : this.options.keySeparator,
                o = t.ns || this.options.defaultNS || [],
                n = r && e.indexOf(r) > -1,
                a = !this.options.userDefinedKeySeparator && !t.keySeparator && !this.options.userDefinedNsSeparator && !t.nsSeparator && !((e, t, r) => {
                    t = t || "", r = r || "";
                    let i = f.filter(e => 0 > t.indexOf(e) && 0 > r.indexOf(e));
                    if (0 === i.length) return !0;
                    let s = m.getRegExp(`(${i.map(e=>"?"===e?"\\?":e).join("|")})`),
                        o = !s.test(e);
                    if (!o) {
                        let t = e.indexOf(r);
                        t > 0 && !s.test(e.substring(0, t)) && (o = !0)
                    }
                    return o
                })(e, r, s);
            if (n && !a) {
                let t = e.match(this.interpolator.nestingRegexp);
                if (t && t.length > 0) return {
                    key: e,
                    namespaces: i(o) ? [o] : o
                };
                let n = e.split(r);
                (r !== s || r === s && this.options.ns.indexOf(n[0]) > -1) && (o = n.shift()), e = n.join(s)
            }
            return {
                key: e,
                namespaces: i(o) ? [o] : o
            }
        }
        translate(e, t, r) {
            let s = "object" == typeof t ? { ...t
            } : t;
            if ("object" != typeof s && this.options.overloadTranslationOptionHandler && (s = this.options.overloadTranslationOptionHandler(arguments)), "object" == typeof s && (s = { ...s
                }), s || (s = {}), null == e) return "";
            "function" == typeof e && (e = $(e, { ...this.options,
                ...s
            })), Array.isArray(e) || (e = [String(e)]);
            let o = void 0 !== s.returnDetails ? s.returnDetails : this.options.returnDetails,
                n = void 0 !== s.keySeparator ? s.keySeparator : this.options.keySeparator,
                {
                    key: a,
                    namespaces: l
                } = this.extractFromKey(e[e.length - 1], s),
                u = l[l.length - 1],
                c = void 0 !== s.nsSeparator ? s.nsSeparator : this.options.nsSeparator;
            void 0 === c && (c = ":");
            let p = s.lng || this.language,
                h = s.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
            if (p ? .toLowerCase() === "cimode") return h ? o ? {
                res: `${u}${c}${a}`,
                usedKey: a,
                exactUsedKey: a,
                usedLng: p,
                usedNS: u,
                usedParams: this.getUsedParamsDetails(s)
            } : `${u}${c}${a}` : o ? {
                res: a,
                usedKey: a,
                exactUsedKey: a,
                usedLng: p,
                usedNS: u,
                usedParams: this.getUsedParamsDetails(s)
            } : a;
            let g = this.resolve(e, s),
                d = g ? .res,
                f = g ? .usedKey || a,
                m = g ? .exactUsedKey || a,
                y = void 0 !== s.joinArrays ? s.joinArrays : this.options.joinArrays,
                b = !this.i18nFormat || this.i18nFormat.handleAsObject,
                v = void 0 !== s.count && !i(s.count),
                x = C.hasDefaultValue(s),
                O = v ? this.pluralResolver.getSuffix(p, s.count, s) : "",
                S = s.ordinal && v ? this.pluralResolver.getSuffix(p, s.count, {
                    ordinal: !1
                }) : "",
                k = v && !s.ordinal && 0 === s.count,
                w = k && s[`defaultValue${this.options.pluralSeparator}zero`] || s[`defaultValue${O}`] || s[`defaultValue${S}`] || s.defaultValue,
                L = d;
            b && !d && x && (L = w);
            let P = j(L),
                N = Object.prototype.toString.apply(L);
            if (b && L && P && 0 > ["[object Number]", "[object Function]", "[object RegExp]"].indexOf(N) && !(i(y) && Array.isArray(L))) {
                if (!s.returnObjects && !this.options.returnObjects) {
                    this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
                    let e = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(f, L, { ...s,
                        ns: l
                    }) : `key '${a} (${this.language})' returned an object instead of string.`;
                    return o ? (g.res = e, g.usedParams = this.getUsedParamsDetails(s), g) : e
                }
                if (n) {
                    let e = Array.isArray(L),
                        t = e ? [] : {},
                        r = e ? m : f;
                    for (let e in L)
                        if (Object.prototype.hasOwnProperty.call(L, e)) {
                            let i = `${r}${n}${e}`;
                            x && !d ? t[e] = this.translate(i, { ...s,
                                defaultValue: j(w) ? w[e] : void 0,
                                ...{
                                    joinArrays: !1,
                                    ns: l
                                }
                            }) : t[e] = this.translate(i, { ...s,
                                joinArrays: !1,
                                ns: l
                            }), t[e] === i && (t[e] = L[e])
                        }
                    d = t
                }
            } else if (b && i(y) && Array.isArray(d))(d = d.join(y)) && (d = this.extendTranslation(d, e, s, r));
            else {
                let t = !1,
                    i = !1;
                !this.isValidLookup(d) && x && (t = !0, d = w), this.isValidLookup(d) || (i = !0, d = a);
                let o = (s.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && i ? void 0 : d,
                    l = x && w !== d && this.options.updateMissing;
                if (i || t || l) {
                    if (this.logger.log(l ? "updateKey" : "missingKey", p, u, a, l ? w : d), n) {
                        let e = this.resolve(a, { ...s,
                            keySeparator: !1
                        });
                        e && e.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")
                    }
                    let e = [],
                        t = this.languageUtils.getFallbackCodes(this.options.fallbackLng, s.lng || this.language);
                    if ("fallback" === this.options.saveMissingTo && t && t[0])
                        for (let r = 0; r < t.length; r++) e.push(t[r]);
                    else "all" === this.options.saveMissingTo ? e = this.languageUtils.toResolveHierarchy(s.lng || this.language) : e.push(s.lng || this.language);
                    let r = (e, t, r) => {
                        let i = x && r !== d ? r : o;
                        this.options.missingKeyHandler ? this.options.missingKeyHandler(e, u, t, i, l, s) : this.backendConnector ? .saveMissing && this.backendConnector.saveMissing(e, u, t, i, l, s), this.emit("missingKey", e, u, t, d)
                    };
                    this.options.saveMissing && (this.options.saveMissingPlurals && v ? e.forEach(e => {
                        let t = this.pluralResolver.getSuffixes(e, s);
                        k && s[`defaultValue${this.options.pluralSeparator}zero`] && 0 > t.indexOf(`${this.options.pluralSeparator}zero`) && t.push(`${this.options.pluralSeparator}zero`), t.forEach(t => {
                            r([e], a + t, s[`defaultValue${t}`] || w)
                        })
                    }) : r(e, a, w))
                }
                d = this.extendTranslation(d, e, s, g, r), i && d === a && this.options.appendNamespaceToMissingKey && (d = `${u}${c}${a}`), (i || t) && this.options.parseMissingKeyHandler && (d = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${u}${c}${a}` : a, t ? d : void 0, s))
            }
            return o ? (g.res = d, g.usedParams = this.getUsedParamsDetails(s), g) : d
        }
        extendTranslation(e, t, r, s, o) {
            if (this.i18nFormat ? .parse) e = this.i18nFormat.parse(e, { ...this.options.interpolation.defaultVariables,
                ...r
            }, r.lng || this.language || s.usedLng, s.usedNS, s.usedKey, {
                resolved: s
            });
            else if (!r.skipInterpolation) {
                let n;
                r.interpolation && this.interpolator.init({ ...r,
                    ...{
                        interpolation: { ...this.options.interpolation,
                            ...r.interpolation
                        }
                    }
                });
                let a = i(e) && (r ? .interpolation ? .skipOnVariables !== void 0 ? r.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
                if (a) {
                    let t = e.match(this.interpolator.nestingRegexp);
                    n = t && t.length
                }
                let l = r.replace && !i(r.replace) ? r.replace : r;
                if (this.options.interpolation.defaultVariables && (l = { ...this.options.interpolation.defaultVariables,
                        ...l
                    }), e = this.interpolator.interpolate(e, l, r.lng || this.language || s.usedLng, r), a) {
                    let t = e.match(this.interpolator.nestingRegexp);
                    n < (t && t.length) && (r.nest = !1)
                }!r.lng && s && s.res && (r.lng = this.language || s.usedLng), !1 !== r.nest && (e = this.interpolator.nest(e, (...e) => o ? .[0] !== e[0] || r.context ? this.translate(...e, t) : (this.logger.warn(`It seems you are nesting recursively key: ${e[0]} in key: ${t[0]}`), null), r)), r.interpolation && this.interpolator.reset()
            }
            let n = r.postProcess || this.options.postProcess,
                a = i(n) ? [n] : n;
            return null != e && a ? .length && !1 !== r.applyPostProcessor && (e = w.handle(a, e, t, this.options && this.options.postProcessPassResolved ? {
                i18nResolved: { ...s,
                    usedParams: this.getUsedParamsDetails(r)
                },
                ...r
            } : r, this)), e
        }
        resolve(e, t = {}) {
            let r, s, o, n, a;
            return i(e) && (e = [e]), e.forEach(e => {
                if (this.isValidLookup(r)) return;
                let l = this.extractFromKey(e, t),
                    u = l.key;
                s = u;
                let c = l.namespaces;
                this.options.fallbackNS && (c = c.concat(this.options.fallbackNS));
                let p = void 0 !== t.count && !i(t.count),
                    h = p && !t.ordinal && 0 === t.count,
                    g = void 0 !== t.context && (i(t.context) || "number" == typeof t.context) && "" !== t.context,
                    d = t.lngs ? t.lngs : this.languageUtils.toResolveHierarchy(t.lng || this.language, t.fallbackLng);
                c.forEach(e => {
                    this.isValidLookup(r) || (a = e, !P[`${d[0]}-${e}`] && this.utils ? .hasLoadedNamespace && !this.utils ? .hasLoadedNamespace(a) && (P[`${d[0]}-${e}`] = !0, this.logger.warn(`key "${s}" for languages "${d.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), d.forEach(i => {
                        let s;
                        if (this.isValidLookup(r)) return;
                        n = i;
                        let a = [u];
                        if (this.i18nFormat ? .addLookupKeys) this.i18nFormat.addLookupKeys(a, u, i, e, t);
                        else {
                            let e;
                            p && (e = this.pluralResolver.getSuffix(i, t.count, t));
                            let r = `${this.options.pluralSeparator}zero`,
                                s = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                            if (p && (t.ordinal && 0 === e.indexOf(s) && a.push(u + e.replace(s, this.options.pluralSeparator)), a.push(u + e), h && a.push(u + r)), g) {
                                let i = `${u}${this.options.contextSeparator||"_"}${t.context}`;
                                a.push(i), p && (t.ordinal && 0 === e.indexOf(s) && a.push(i + e.replace(s, this.options.pluralSeparator)), a.push(i + e), h && a.push(i + r))
                            }
                        }
                        for (; s = a.pop();) this.isValidLookup(r) || (o = s, r = this.getResource(i, e, s, t))
                    }))
                })
            }), {
                res: r,
                usedKey: s,
                exactUsedKey: o,
                usedLng: n,
                usedNS: a
            }
        }
        isValidLookup(e) {
            return void 0 !== e && !(!this.options.returnNull && null === e) && !(!this.options.returnEmptyString && "" === e)
        }
        getResource(e, t, r, i = {}) {
            return this.i18nFormat ? .getResource ? this.i18nFormat.getResource(e, t, r, i) : this.resourceStore.getResource(e, t, r, i)
        }
        getUsedParamsDetails(e = {}) {
            let t = e.replace && !i(e.replace),
                r = t ? e.replace : e;
            if (t && void 0 !== e.count && (r.count = e.count), this.options.interpolation.defaultVariables && (r = { ...this.options.interpolation.defaultVariables,
                    ...r
                }), !t)
                for (let e of (r = { ...r
                    }, ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"])) delete r[e];
            return r
        }
        static hasDefaultValue(e) {
            let t = "defaultValue";
            for (let r in e)
                if (Object.prototype.hasOwnProperty.call(e, r) && t === r.substring(0, t.length) && void 0 !== e[r]) return !0;
            return !1
        }
    }
    class N {
        constructor(e) {
            this.options = e, this.supportedLngs = this.options.supportedLngs || !1, this.logger = O.create("languageUtils")
        }
        getScriptPartFromCode(e) {
            if (!(e = b(e)) || 0 > e.indexOf("-")) return null;
            let t = e.split("-");
            return 2 === t.length || (t.pop(), "x" === t[t.length - 1].toLowerCase()) ? null : this.formatLanguageCode(t.join("-"))
        }
        getLanguagePartFromCode(e) {
            if (!(e = b(e)) || 0 > e.indexOf("-")) return e;
            let t = e.split("-");
            return this.formatLanguageCode(t[0])
        }
        formatLanguageCode(e) {
            if (i(e) && e.indexOf("-") > -1) {
                let t;
                try {
                    t = Intl.getCanonicalLocales(e)[0]
                } catch (e) {}
                return (t && this.options.lowerCaseLng && (t = t.toLowerCase()), t) ? t : this.options.lowerCaseLng ? e.toLowerCase() : e
            }
            return this.options.cleanCode || this.options.lowerCaseLng ? e.toLowerCase() : e
        }
        isSupportedCode(e) {
            return ("languageOnly" === this.options.load || this.options.nonExplicitSupportedLngs) && (e = this.getLanguagePartFromCode(e)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(e) > -1
        }
        getBestMatchFromCodes(e) {
            let t;
            return e ? (e.forEach(e => {
                if (t) return;
                let r = this.formatLanguageCode(e);
                (!this.options.supportedLngs || this.isSupportedCode(r)) && (t = r)
            }), !t && this.options.supportedLngs && e.forEach(e => {
                if (t) return;
                let r = this.getScriptPartFromCode(e);
                if (this.isSupportedCode(r)) return t = r;
                let i = this.getLanguagePartFromCode(e);
                if (this.isSupportedCode(i)) return t = i;
                t = this.options.supportedLngs.find(e => {
                    if (e === i || !(0 > e.indexOf("-") && 0 > i.indexOf("-")) && (e.indexOf("-") > 0 && 0 > i.indexOf("-") && e.substring(0, e.indexOf("-")) === i || 0 === e.indexOf(i) && i.length > 1)) return e
                })
            }), t || (t = this.getFallbackCodes(this.options.fallbackLng)[0]), t) : null
        }
        getFallbackCodes(e, t) {
            if (!e) return [];
            if ("function" == typeof e && (e = e(t)), i(e) && (e = [e]), Array.isArray(e)) return e;
            if (!t) return e.default || [];
            let r = e[t];
            return r || (r = e[this.getScriptPartFromCode(t)]), r || (r = e[this.formatLanguageCode(t)]), r || (r = e[this.getLanguagePartFromCode(t)]), r || (r = e.default), r || []
        }
        toResolveHierarchy(e, t) {
            let r = this.getFallbackCodes((!1 === t ? [] : t) || this.options.fallbackLng || [], e),
                s = [],
                o = e => {
                    e && (this.isSupportedCode(e) ? s.push(e) : this.logger.warn(`rejecting language code not found in supportedLngs: ${e}`))
                };
            return i(e) && (e.indexOf("-") > -1 || e.indexOf("_") > -1) ? ("languageOnly" !== this.options.load && o(this.formatLanguageCode(e)), "languageOnly" !== this.options.load && "currentOnly" !== this.options.load && o(this.getScriptPartFromCode(e)), "currentOnly" !== this.options.load && o(this.getLanguagePartFromCode(e))) : i(e) && o(this.formatLanguageCode(e)), r.forEach(e => {
                0 > s.indexOf(e) && o(this.formatLanguageCode(e))
            }), s
        }
    }
    let R = {
            zero: 0,
            one: 1,
            two: 2,
            few: 3,
            many: 4,
            other: 5
        },
        E = {
            select: e => 1 === e ? "one" : "other",
            resolvedOptions: () => ({
                pluralCategories: ["one", "other"]
            })
        };
    class I {
        constructor(e, t = {}) {
            this.languageUtils = e, this.options = t, this.logger = O.create("pluralResolver"), this.pluralRulesCache = {}
        }
        clearCache() {
            this.pluralRulesCache = {}
        }
        getRule(e, t = {}) {
            let r, i = b("dev" === e ? "en" : e),
                s = t.ordinal ? "ordinal" : "cardinal",
                o = JSON.stringify({
                    cleanedCode: i,
                    type: s
                });
            if (o in this.pluralRulesCache) return this.pluralRulesCache[o];
            try {
                r = new Intl.PluralRules(i, {
                    type: s
                })
            } catch (s) {
                if ("u" < typeof Intl) return this.logger.error("No Intl support, please use an Intl polyfill!"), E;
                if (!e.match(/-|_/)) return E;
                let i = this.languageUtils.getLanguagePartFromCode(e);
                r = this.getRule(i, t)
            }
            return this.pluralRulesCache[o] = r, r
        }
        needsPlural(e, t = {}) {
            let r = this.getRule(e, t);
            return r || (r = this.getRule("dev", t)), r ? .resolvedOptions().pluralCategories.length > 1
        }
        getPluralFormsOfKey(e, t, r = {}) {
            return this.getSuffixes(e, r).map(e => `${t}${e}`)
        }
        getSuffixes(e, t = {}) {
            let r = this.getRule(e, t);
            return (r || (r = this.getRule("dev", t)), r) ? r.resolvedOptions().pluralCategories.sort((e, t) => R[e] - R[t]).map(e => `${this.options.prepend}${t.ordinal?`ordinal${this.options.prepend}`:""}${e}`) : []
        }
        getSuffix(e, t, r = {}) {
            let i = this.getRule(e, r);
            return i ? `${this.options.prepend}${r.ordinal?`ordinal${this.options.prepend}`:""}${i.select(t)}` : (this.logger.warn(`no plural rule found for: ${e}`), this.getSuffix("dev", t, r))
        }
    }
    let T = (e, t, r, s = ".", o = !0) => {
        let n, a = void 0 !== (n = p(e, r)) ? n : p(t, r);
        return !a && o && i(r) && void 0 === (a = y(e, r, s)) && (a = y(t, r, s)), a
    };
    class A {
        constructor(e = {}) {
            this.logger = O.create("interpolator"), this.options = e, this.format = e ? .interpolation ? .format || (e => e), this.init(e)
        }
        init(e = {}) {
            e.interpolation || (e.interpolation = {
                escapeValue: !0
            });
            let {
                escape: t,
                escapeValue: r,
                useRawValueToEscape: i,
                prefix: s,
                prefixEscaped: o,
                suffix: n,
                suffixEscaped: a,
                formatSeparator: l,
                unescapeSuffix: u,
                unescapePrefix: c,
                nestingPrefix: p,
                nestingPrefixEscaped: h,
                nestingSuffix: g,
                nestingSuffixEscaped: f,
                nestingOptionsSeparator: m,
                maxReplaces: y,
                alwaysFormat: b
            } = e.interpolation;
            this.escape = void 0 !== t ? t : d, this.escapeValue = void 0 === r || r, this.useRawValueToEscape = void 0 !== i && i, this.prefix = s ? s.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&") : o || "{{", this.suffix = n ? n.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&") : a || "}}", this.formatSeparator = l || ",", this.unescapePrefix = u ? "" : c || "-", this.unescapeSuffix = this.unescapePrefix ? "" : u || "", this.nestingPrefix = p ? p.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&") : h || "$t(".replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"), this.nestingSuffix = g ? g.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&") : f || ")".replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"), this.nestingOptionsSeparator = m || ",", this.maxReplaces = y || 1e3, this.alwaysFormat = void 0 !== b && b, this.resetRegExp()
        }
        reset() {
            this.options && this.init(this.options)
        }
        resetRegExp() {
            let e = (e, t) => e ? .source === t ? (e.lastIndex = 0, e) : RegExp(t, "g");
            this.regexp = e(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = e(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = e(this.nestingRegexp, `${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`)
        }
        interpolate(e, t, r, s) {
            let n, a, l, u = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {},
                c = e => {
                    if (0 > e.indexOf(this.formatSeparator)) {
                        let i = T(t, u, e, this.options.keySeparator, this.options.ignoreJSONStructure);
                        return this.alwaysFormat ? this.format(i, void 0, r, { ...s,
                            ...t,
                            interpolationkey: e
                        }) : i
                    }
                    let i = e.split(this.formatSeparator),
                        o = i.shift().trim(),
                        n = i.join(this.formatSeparator).trim();
                    return this.format(T(t, u, o, this.options.keySeparator, this.options.ignoreJSONStructure), n, r, { ...s,
                        ...t,
                        interpolationkey: o
                    })
                };
            this.resetRegExp();
            let p = s ? .missingInterpolationHandler || this.options.missingInterpolationHandler,
                h = s ? .interpolation ? .skipOnVariables !== void 0 ? s.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
            return [{
                regex: this.regexpUnescape,
                safeValue: e => e.replace(/\$/g, "$$$$")
            }, {
                regex: this.regexp,
                safeValue: e => this.escapeValue ? this.escape(e).replace(/\$/g, "$$$$") : e.replace(/\$/g, "$$$$")
            }].forEach(t => {
                for (l = 0; n = t.regex.exec(e);) {
                    let r = n[1].trim();
                    if (void 0 === (a = c(r)))
                        if ("function" == typeof p) {
                            let t = p(e, n, s);
                            a = i(t) ? t : ""
                        } else if (s && Object.prototype.hasOwnProperty.call(s, r)) a = "";
                    else if (h) {
                        a = n[0];
                        continue
                    } else this.logger.warn(`missed to pass in variable ${r} for interpolating ${e}`), a = "";
                    else i(a) || this.useRawValueToEscape || (a = o(a));
                    let u = t.safeValue(a);
                    if (e = e.replace(n[0], u), h ? (t.regex.lastIndex += a.length, t.regex.lastIndex -= n[0].length) : t.regex.lastIndex = 0, ++l >= this.maxReplaces) break
                }
            }), e
        }
        nest(e, t, r = {}) {
            let s, n, a, l = (e, t) => {
                let r = this.nestingOptionsSeparator;
                if (0 > e.indexOf(r)) return e;
                let i = e.split(RegExp(`${r.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}[ ]*{`)),
                    s = `{${i[1]}`;
                e = i[0];
                let o = (s = this.interpolate(s, a)).match(/'/g),
                    n = s.match(/"/g);
                ((o ? .length ? ? 0) % 2 != 0 || n) && (n ? .length ? ? 0) % 2 == 0 || (s = s.replace(/'/g, '"'));
                try {
                    a = JSON.parse(s), t && (a = { ...t,
                        ...a
                    })
                } catch (t) {
                    return this.logger.warn(`failed parsing options string in nesting for key ${e}`, t), `${e}${r}${s}`
                }
                return a.defaultValue && a.defaultValue.indexOf(this.prefix) > -1 && delete a.defaultValue, e
            };
            for (; s = this.nestingRegexp.exec(e);) {
                let u = [];
                (a = (a = { ...r
                }).replace && !i(a.replace) ? a.replace : a).applyPostProcessor = !1, delete a.defaultValue;
                let c = /{.*}/.test(s[1]) ? s[1].lastIndexOf("}") + 1 : s[1].indexOf(this.formatSeparator);
                if (-1 !== c && (u = s[1].slice(c).split(this.formatSeparator).map(e => e.trim()).filter(Boolean), s[1] = s[1].slice(0, c)), (n = t(l.call(this, s[1].trim(), a), a)) && s[0] === e && !i(n)) return n;
                i(n) || (n = o(n)), n || (this.logger.warn(`missed to resolve ${s[1]} for nesting ${e}`), n = ""), u.length && (n = u.reduce((e, t) => this.format(e, t, r.lng, { ...r,
                    interpolationkey: s[1].trim()
                }), n.trim())), e = e.replace(s[0], n), this.regexp.lastIndex = 0
            }
            return e
        }
    }
    let F = e => {
            let t = {};
            return (r, i, s) => {
                let o = s;
                s && s.interpolationkey && s.formatParams && s.formatParams[s.interpolationkey] && s[s.interpolationkey] && (o = { ...o,
                    [s.interpolationkey]: void 0
                });
                let n = i + JSON.stringify(o),
                    a = t[n];
                return a || (a = e(b(i), s), t[n] = a), a(r)
            }
        },
        D = e => (t, r, i) => e(b(r), i)(t);
    class V {
        constructor(e = {}) {
            this.logger = O.create("formatter"), this.options = e, this.init(e)
        }
        init(e, t = {
            interpolation: {}
        }) {
            this.formatSeparator = t.interpolation.formatSeparator || ",";
            let r = t.cacheInBuiltFormats ? F : D;
            this.formats = {
                number: r((e, t) => {
                    let r = new Intl.NumberFormat(e, { ...t
                    });
                    return e => r.format(e)
                }),
                currency: r((e, t) => {
                    let r = new Intl.NumberFormat(e, { ...t,
                        style: "currency"
                    });
                    return e => r.format(e)
                }),
                datetime: r((e, t) => {
                    let r = new Intl.DateTimeFormat(e, { ...t
                    });
                    return e => r.format(e)
                }),
                relativetime: r((e, t) => {
                    let r = new Intl.RelativeTimeFormat(e, { ...t
                    });
                    return e => r.format(e, t.range || "day")
                }),
                list: r((e, t) => {
                    let r = new Intl.ListFormat(e, { ...t
                    });
                    return e => r.format(e)
                })
            }
        }
        add(e, t) {
            this.formats[e.toLowerCase().trim()] = t
        }
        addCached(e, t) {
            this.formats[e.toLowerCase().trim()] = F(t)
        }
        format(e, t, r, i = {}) {
            let s = t.split(this.formatSeparator);
            if (s.length > 1 && s[0].indexOf("(") > 1 && 0 > s[0].indexOf(")") && s.find(e => e.indexOf(")") > -1)) {
                let e = s.findIndex(e => e.indexOf(")") > -1);
                s[0] = [s[0], ...s.splice(1, e)].join(this.formatSeparator)
            }
            return s.reduce((e, t) => {
                let {
                    formatName: s,
                    formatOptions: o
                } = (e => {
                    let t = e.toLowerCase().trim(),
                        r = {};
                    if (e.indexOf("(") > -1) {
                        let i = e.split("(");
                        t = i[0].toLowerCase().trim();
                        let s = i[1].substring(0, i[1].length - 1);
                        "currency" === t && 0 > s.indexOf(":") ? r.currency || (r.currency = s.trim()) : "relativetime" === t && 0 > s.indexOf(":") ? r.range || (r.range = s.trim()) : s.split(";").forEach(e => {
                            if (e) {
                                let [t, ...i] = e.split(":"), s = i.join(":").trim().replace(/^'+|'+$/g, ""), o = t.trim();
                                r[o] || (r[o] = s), "false" === s && (r[o] = !1), "true" === s && (r[o] = !0), isNaN(s) || (r[o] = parseInt(s, 10))
                            }
                        })
                    }
                    return {
                        formatName: t,
                        formatOptions: r
                    }
                })(t);
                if (this.formats[s]) {
                    let t = e;
                    try {
                        let n = i ? .formatParams ? .[i.interpolationkey] || {},
                            a = n.locale || n.lng || i.locale || i.lng || r;
                        t = this.formats[s](e, a, { ...o,
                            ...i,
                            ...n
                        })
                    } catch (e) {
                        this.logger.warn(e)
                    }
                    return t
                }
                return this.logger.warn(`there was no format function for ${s}`), e
            }, e)
        }
    }
    class M extends S {
        constructor(e, t, r, i = {}) {
            super(), this.backend = e, this.store = t, this.services = r, this.languageUtils = r.languageUtils, this.options = i, this.logger = O.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = i.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = i.maxRetries >= 0 ? i.maxRetries : 5, this.retryTimeout = i.retryTimeout >= 1 ? i.retryTimeout : 350, this.state = {}, this.queue = [], this.backend ? .init ? .(r, i.backend, i)
        }
        queueLoad(e, t, r, i) {
            let s = {},
                o = {},
                n = {},
                a = {};
            return e.forEach(e => {
                let i = !0;
                t.forEach(t => {
                    let n = `${e}|${t}`;
                    !r.reload && this.store.hasResourceBundle(e, t) ? this.state[n] = 2 : this.state[n] < 0 || (1 === this.state[n] ? void 0 === o[n] && (o[n] = !0) : (this.state[n] = 1, i = !1, void 0 === o[n] && (o[n] = !0), void 0 === s[n] && (s[n] = !0), void 0 === a[t] && (a[t] = !0)))
                }), i || (n[e] = !0)
            }), (Object.keys(s).length || Object.keys(o).length) && this.queue.push({
                pending: o,
                pendingCount: Object.keys(o).length,
                loaded: {},
                errors: [],
                callback: i
            }), {
                toLoad: Object.keys(s),
                pending: Object.keys(o),
                toLoadLanguages: Object.keys(n),
                toLoadNamespaces: Object.keys(a)
            }
        }
        loaded(e, t, r) {
            let i = e.split("|"),
                s = i[0],
                o = i[1];
            t && this.emit("failedLoading", s, o, t), !t && r && this.store.addResourceBundle(s, o, r, void 0, void 0, {
                skipCopy: !0
            }), this.state[e] = t ? -1 : 2, t && r && (this.state[e] = 0);
            let n = {};
            this.queue.forEach(r => {
                ((e, t, r, i) => {
                    let {
                        obj: s,
                        k: o
                    } = u(e, t, Object);
                    s[o] = s[o] || [], s[o].push(r)
                })(r.loaded, [s], o), void 0 !== r.pending[e] && (delete r.pending[e], r.pendingCount--), t && r.errors.push(t), 0 !== r.pendingCount || r.done || (Object.keys(r.loaded).forEach(e => {
                    n[e] || (n[e] = {});
                    let t = r.loaded[e];
                    t.length && t.forEach(t => {
                        void 0 === n[e][t] && (n[e][t] = !0)
                    })
                }), r.done = !0, r.errors.length ? r.callback(r.errors) : r.callback())
            }), this.emit("loaded", n), this.queue = this.queue.filter(e => !e.done)
        }
        read(e, t, r, i = 0, s = this.retryTimeout, o) {
            if (!e.length) return o(null, {});
            if (this.readingCalls >= this.maxParallelReads) return void this.waitingReads.push({
                lng: e,
                ns: t,
                fcName: r,
                tried: i,
                wait: s,
                callback: o
            });
            this.readingCalls++;
            let n = (n, a) => {
                    if (this.readingCalls--, this.waitingReads.length > 0) {
                        let e = this.waitingReads.shift();
                        this.read(e.lng, e.ns, e.fcName, e.tried, e.wait, e.callback)
                    }
                    n && a && i < this.maxRetries ? setTimeout(() => {
                        this.read.call(this, e, t, r, i + 1, 2 * s, o)
                    }, s) : o(n, a)
                },
                a = this.backend[r].bind(this.backend);
            if (2 === a.length) {
                try {
                    let r = a(e, t);
                    r && "function" == typeof r.then ? r.then(e => n(null, e)).catch(n) : n(null, r)
                } catch (e) {
                    n(e)
                }
                return
            }
            return a(e, t, n)
        }
        prepareLoading(e, t, r = {}, s) {
            if (!this.backend) return this.logger.warn("No backend was added via i18next.use. Will not load resources."), s && s();
            i(e) && (e = this.languageUtils.toResolveHierarchy(e)), i(t) && (t = [t]);
            let o = this.queueLoad(e, t, r, s);
            if (!o.toLoad.length) return o.pending.length || s(), null;
            o.toLoad.forEach(e => {
                this.loadOne(e)
            })
        }
        load(e, t, r) {
            this.prepareLoading(e, t, {}, r)
        }
        reload(e, t, r) {
            this.prepareLoading(e, t, {
                reload: !0
            }, r)
        }
        loadOne(e, t = "") {
            let r = e.split("|"),
                i = r[0],
                s = r[1];
            this.read(i, s, "read", void 0, void 0, (r, o) => {
                r && this.logger.warn(`${t}loading namespace ${s} for language ${i} failed`, r), !r && o && this.logger.log(`${t}loaded namespace ${s} for language ${i}`, o), this.loaded(e, r, o)
            })
        }
        saveMissing(e, t, r, i, s, o = {}, n = () => {}) {
            if (this.services ? .utils ? .hasLoadedNamespace && !this.services ? .utils ? .hasLoadedNamespace(t)) return void this.logger.warn(`did not save key "${r}" as the namespace "${t}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
            if (null != r && "" !== r) {
                if (this.backend ? .create) {
                    let a = { ...o,
                            isUpdate: s
                        },
                        l = this.backend.create.bind(this.backend);
                    if (l.length < 6) try {
                        let s;
                        (s = 5 === l.length ? l(e, t, r, i, a) : l(e, t, r, i)) && "function" == typeof s.then ? s.then(e => n(null, e)).catch(n) : n(null, s)
                    } catch (e) {
                        n(e)
                    } else l(e, t, r, i, n, a)
                }
                e && e[0] && this.store.addResource(e[0], t, r, i)
            }
        }
    }
    let U = () => ({
            debug: !1,
            initAsync: !0,
            ns: ["translation"],
            defaultNS: ["translation"],
            fallbackLng: ["dev"],
            fallbackNS: !1,
            supportedLngs: !1,
            nonExplicitSupportedLngs: !1,
            load: "all",
            preload: !1,
            simplifyPluralSuffix: !0,
            keySeparator: ".",
            nsSeparator: ":",
            pluralSeparator: "_",
            contextSeparator: "_",
            partialBundledLanguages: !1,
            saveMissing: !1,
            updateMissing: !1,
            saveMissingTo: "fallback",
            saveMissingPlurals: !0,
            missingKeyHandler: !1,
            missingInterpolationHandler: !1,
            postProcess: !1,
            postProcessPassResolved: !1,
            returnNull: !1,
            returnEmptyString: !0,
            returnObjects: !1,
            joinArrays: !1,
            returnedObjectHandler: !1,
            parseMissingKeyHandler: !1,
            appendNamespaceToMissingKey: !1,
            appendNamespaceToCIMode: !1,
            overloadTranslationOptionHandler: e => {
                let t = {};
                if ("object" == typeof e[1] && (t = e[1]), i(e[1]) && (t.defaultValue = e[1]), i(e[2]) && (t.tDescription = e[2]), "object" == typeof e[2] || "object" == typeof e[3]) {
                    let r = e[3] || e[2];
                    Object.keys(r).forEach(e => {
                        t[e] = r[e]
                    })
                }
                return t
            },
            interpolation: {
                escapeValue: !0,
                format: e => e,
                prefix: "{{",
                suffix: "}}",
                formatSeparator: ",",
                unescapePrefix: "-",
                nestingPrefix: "$t(",
                nestingSuffix: ")",
                nestingOptionsSeparator: ",",
                maxReplaces: 1e3,
                skipOnVariables: !0
            },
            cacheInBuiltFormats: !0
        }),
        z = e => (i(e.ns) && (e.ns = [e.ns]), i(e.fallbackLng) && (e.fallbackLng = [e.fallbackLng]), i(e.fallbackNS) && (e.fallbackNS = [e.fallbackNS]), e.supportedLngs ? .indexOf ? .("cimode") < 0 && (e.supportedLngs = e.supportedLngs.concat(["cimode"])), "boolean" == typeof e.initImmediate && (e.initAsync = e.initImmediate), e),
        K = () => {},
        _ = "__i18next_supportNoticeShown";
    class H extends S {
        constructor(e = {}, t) {
            if (super(), this.options = z(e), this.services = {}, this.logger = O, this.modules = {
                    external: []
                }, (e => {
                    Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(t => {
                        "function" == typeof e[t] && (e[t] = e[t].bind(e))
                    })
                })(this), t && !this.isInitialized && !e.isClone) {
                if (!this.options.initAsync) return this.init(e, t), this;
                setTimeout(() => {
                    this.init(e, t)
                }, 0)
            }
        }
        init(e = {}, t) {
            this.isInitializing = !0, "function" == typeof e && (t = e, e = {}), null == e.defaultNS && e.ns && (i(e.ns) ? e.defaultNS = e.ns : 0 > e.ns.indexOf("translation") && (e.defaultNS = e.ns[0]));
            let r = U();
            this.options = { ...r,
                ...this.options,
                ...z(e)
            }, this.options.interpolation = { ...r.interpolation,
                ...this.options.interpolation
            }, void 0 !== e.keySeparator && (this.options.userDefinedKeySeparator = e.keySeparator), void 0 !== e.nsSeparator && (this.options.userDefinedNsSeparator = e.nsSeparator), "function" != typeof this.options.overloadTranslationOptionHandler && (this.options.overloadTranslationOptionHandler = r.overloadTranslationOptionHandler), !1 !== this.options.showSupportNotice && !(this ? .modules ? .backend ? .name ? .indexOf("Locize") > 0 || this ? .modules ? .backend ? .constructor ? .name ? .indexOf("Locize") > 0 || this ? .options ? .backend ? .backends && this.options.backend.backends.some(e => e ? .name ? .indexOf("Locize") > 0 || e ? .constructor ? .name ? .indexOf("Locize") > 0) || this ? .options ? .backend ? .projectId || this ? .options ? .backend ? .backendOptions && this.options.backend.backendOptions.some(e => e ? .projectId)) && 1 && !("u" > typeof globalThis && globalThis[_]) && ("u" > typeof console && void 0 !== console.info && console.info("🌐 i18next is maintained with support from Locize — consider powering your project with managed localization (AI, CDN, integrations): https://locize.com 💙"), "u" > typeof globalThis && (globalThis[_] = !0));
            let o = e => e ? "function" == typeof e ? new e : e : null;
            if (!this.options.isClone) {
                let e;
                this.modules.logger ? O.init(o(this.modules.logger), this.options) : O.init(null, this.options), e = this.modules.formatter ? this.modules.formatter : V;
                let t = new N(this.options);
                this.store = new k(this.options.resources, this.options);
                let i = this.services;
                i.logger = O, i.resourceStore = this.store, i.languageUtils = t, i.pluralResolver = new I(t, {
                    prepend: this.options.pluralSeparator,
                    simplifyPluralSuffix: this.options.simplifyPluralSuffix
                }), this.options.interpolation.format && this.options.interpolation.format !== r.interpolation.format && this.logger.deprecate("init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting"), e && (!this.options.interpolation.format || this.options.interpolation.format === r.interpolation.format) && (i.formatter = o(e), i.formatter.init && i.formatter.init(i, this.options), this.options.interpolation.format = i.formatter.format.bind(i.formatter)), i.interpolator = new A(this.options), i.utils = {
                    hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
                }, i.backendConnector = new M(o(this.modules.backend), i.resourceStore, i, this.options), i.backendConnector.on("*", (e, ...t) => {
                    this.emit(e, ...t)
                }), this.modules.languageDetector && (i.languageDetector = o(this.modules.languageDetector), i.languageDetector.init && i.languageDetector.init(i, this.options.detection, this.options)), this.modules.i18nFormat && (i.i18nFormat = o(this.modules.i18nFormat), i.i18nFormat.init && i.i18nFormat.init(this)), this.translator = new C(this.services, this.options), this.translator.on("*", (e, ...t) => {
                    this.emit(e, ...t)
                }), this.modules.external.forEach(e => {
                    e.init && e.init(this)
                })
            }
            if (this.format = this.options.interpolation.format, t || (t = K), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
                let e = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
                e.length > 0 && "dev" !== e[0] && (this.options.lng = e[0])
            }
            this.services.languageDetector || this.options.lng || this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach(e => {
                this[e] = (...t) => this.store[e](...t)
            }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach(e => {
                this[e] = (...t) => (this.store[e](...t), this)
            });
            let n = s(),
                a = () => {
                    let e = (e, r) => {
                        this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), n.resolve(r), t(e, r)
                    };
                    if (this.languages && !this.isInitialized) return e(null, this.t.bind(this));
                    this.changeLanguage(this.options.lng, e)
                };
            return this.options.resources || !this.options.initAsync ? a() : setTimeout(a, 0), n
        }
        loadResources(e, t = K) {
            let r = t,
                s = i(e) ? e : this.language;
            if ("function" == typeof e && (r = e), !this.options.resources || this.options.partialBundledLanguages) {
                if (s ? .toLowerCase() === "cimode" && (!this.options.preload || 0 === this.options.preload.length)) return r();
                let e = [],
                    t = t => {
                        t && "cimode" !== t && this.services.languageUtils.toResolveHierarchy(t).forEach(t => {
                            "cimode" !== t && 0 > e.indexOf(t) && e.push(t)
                        })
                    };
                s ? t(s) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(e => t(e)), this.options.preload ? .forEach ? .(e => t(e)), this.services.backendConnector.load(e, this.options.ns, e => {
                    e || this.resolvedLanguage || !this.language || this.setResolvedLanguage(this.language), r(e)
                })
            } else r(null)
        }
        reloadResources(e, t, r) {
            let i = s();
            return "function" == typeof e && (r = e, e = void 0), "function" == typeof t && (r = t, t = void 0), e || (e = this.languages), t || (t = this.options.ns), r || (r = K), this.services.backendConnector.reload(e, t, e => {
                i.resolve(), r(e)
            }), i
        }
        use(e) {
            if (!e) throw Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
            if (!e.type) throw Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
            return "backend" === e.type && (this.modules.backend = e), ("logger" === e.type || e.log && e.warn && e.error) && (this.modules.logger = e), "languageDetector" === e.type && (this.modules.languageDetector = e), "i18nFormat" === e.type && (this.modules.i18nFormat = e), "postProcessor" === e.type && w.addPostProcessor(e), "formatter" === e.type && (this.modules.formatter = e), "3rdParty" === e.type && this.modules.external.push(e), this
        }
        setResolvedLanguage(e) {
            if (e && this.languages && !(["cimode", "dev"].indexOf(e) > -1)) {
                for (let e = 0; e < this.languages.length; e++) {
                    let t = this.languages[e];
                    if (!(["cimode", "dev"].indexOf(t) > -1) && this.store.hasLanguageSomeTranslations(t)) {
                        this.resolvedLanguage = t;
                        break
                    }
                }!this.resolvedLanguage && 0 > this.languages.indexOf(e) && this.store.hasLanguageSomeTranslations(e) && (this.resolvedLanguage = e, this.languages.unshift(e))
            }
        }
        changeLanguage(e, t) {
            this.isLanguageChangingTo = e;
            let r = s();
            this.emit("languageChanging", e);
            let o = e => {
                    this.language = e, this.languages = this.services.languageUtils.toResolveHierarchy(e), this.resolvedLanguage = void 0, this.setResolvedLanguage(e)
                },
                n = (i, s) => {
                    s ? this.isLanguageChangingTo === e && (o(s), this.translator.changeLanguage(s), this.isLanguageChangingTo = void 0, this.emit("languageChanged", s), this.logger.log("languageChanged", s)) : this.isLanguageChangingTo = void 0, r.resolve((...e) => this.t(...e)), t && t(i, (...e) => this.t(...e))
                },
                a = t => {
                    e || t || !this.services.languageDetector || (t = []);
                    let r = i(t) ? t : t && t[0],
                        s = this.store.hasLanguageSomeTranslations(r) ? r : this.services.languageUtils.getBestMatchFromCodes(i(t) ? [t] : t);
                    s && (this.language || o(s), this.translator.language || this.translator.changeLanguage(s), this.services.languageDetector ? .cacheUserLanguage ? .(s)), this.loadResources(s, e => {
                        n(e, s)
                    })
                };
            return e || !this.services.languageDetector || this.services.languageDetector.async ? !e && this.services.languageDetector && this.services.languageDetector.async ? 0 === this.services.languageDetector.detect.length ? this.services.languageDetector.detect().then(a) : this.services.languageDetector.detect(a) : a(e) : a(this.services.languageDetector.detect()), r
        }
        getFixedT(e, t, r) {
            let s = (e, t, ...i) => {
                let o, n;
                (o = "object" != typeof t ? this.options.overloadTranslationOptionHandler([e, t].concat(i)) : { ...t
                }).lng = o.lng || s.lng, o.lngs = o.lngs || s.lngs, o.ns = o.ns || s.ns, "" !== o.keyPrefix && (o.keyPrefix = o.keyPrefix || r || s.keyPrefix);
                let a = this.options.keySeparator || ".";
                return o.keyPrefix && Array.isArray(e) ? n = e.map(e => ("function" == typeof e && (e = $(e, { ...this.options,
                    ...t
                })), `${o.keyPrefix}${a}${e}`)) : ("function" == typeof e && (e = $(e, { ...this.options,
                    ...t
                })), n = o.keyPrefix ? `${o.keyPrefix}${a}${e}` : e), this.t(n, o)
            };
            return i(e) ? s.lng = e : s.lngs = e, s.ns = t, s.keyPrefix = r, s
        }
        t(...e) {
            return this.translator ? .translate(...e)
        }
        exists(...e) {
            return this.translator ? .exists(...e)
        }
        setDefaultNamespace(e) {
            this.options.defaultNS = e
        }
        hasLoadedNamespace(e, t = {}) {
            if (!this.isInitialized) return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
            if (!this.languages || !this.languages.length) return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
            let r = t.lng || this.resolvedLanguage || this.languages[0],
                i = !!this.options && this.options.fallbackLng,
                s = this.languages[this.languages.length - 1];
            if ("cimode" === r.toLowerCase()) return !0;
            let o = (e, t) => {
                let r = this.services.backendConnector.state[`${e}|${t}`];
                return -1 === r || 0 === r || 2 === r
            };
            if (t.precheck) {
                let e = t.precheck(this, o);
                if (void 0 !== e) return e
            }
            return !!(this.hasResourceBundle(r, e) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || o(r, e) && (!i || o(s, e)))
        }
        loadNamespaces(e, t) {
            let r = s();
            return this.options.ns ? (i(e) && (e = [e]), e.forEach(e => {
                0 > this.options.ns.indexOf(e) && this.options.ns.push(e)
            }), this.loadResources(e => {
                r.resolve(), t && t(e)
            }), r) : (t && t(), Promise.resolve())
        }
        loadLanguages(e, t) {
            let r = s();
            i(e) && (e = [e]);
            let o = this.options.preload || [],
                n = e.filter(e => 0 > o.indexOf(e) && this.services.languageUtils.isSupportedCode(e));
            return n.length ? (this.options.preload = o.concat(n), this.loadResources(e => {
                r.resolve(), t && t(e)
            }), r) : (t && t(), Promise.resolve())
        }
        dir(e) {
            if (e || (e = this.resolvedLanguage || (this.languages ? .length > 0 ? this.languages[0] : this.language)), !e) return "rtl";
            try {
                let t = new Intl.Locale(e);
                if (t && t.getTextInfo) {
                    let e = t.getTextInfo();
                    if (e && e.direction) return e.direction
                }
            } catch (e) {}
            let t = this.services ? .languageUtils || new N(U());
            return e.toLowerCase().indexOf("-latn") > 1 ? "ltr" : ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"].indexOf(t.getLanguagePartFromCode(e)) > -1 || e.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr"
        }
        static createInstance(e = {}, t) {
            let r = new H(e, t);
            return r.createInstance = H.createInstance, r
        }
        cloneInstance(e = {}, t = K) {
            let r = e.forkResourceStore;
            r && delete e.forkResourceStore;
            let i = { ...this.options,
                    ...e,
                    isClone: !0
                },
                s = new H(i);
            if ((void 0 !== e.debug || void 0 !== e.prefix) && (s.logger = s.logger.clone(e)), ["store", "services", "language"].forEach(e => {
                    s[e] = this[e]
                }), s.services = { ...this.services
                }, s.services.utils = {
                    hasLoadedNamespace: s.hasLoadedNamespace.bind(s)
                }, r && (s.store = new k(Object.keys(this.store.data).reduce((e, t) => (e[t] = { ...this.store.data[t]
                }, e[t] = Object.keys(e[t]).reduce((r, i) => (r[i] = { ...e[t][i]
                }, r), e[t]), e), {}), i), s.services.resourceStore = s.store), e.interpolation) {
                let t = { ...U().interpolation,
                        ...this.options.interpolation,
                        ...e.interpolation
                    },
                    r = { ...i,
                        interpolation: t
                    };
                s.services.interpolator = new A(r)
            }
            return s.translator = new C(s.services, i), s.translator.on("*", (e, ...t) => {
                s.emit(e, ...t)
            }), s.init(i, t), s.translator.options = i, s.translator.backendConnector.services.utils = {
                hasLoadedNamespace: s.hasLoadedNamespace.bind(s)
            }, s
        }
        toJSON() {
            return {
                options: this.options,
                store: this.store,
                language: this.language,
                languages: this.languages,
                resolvedLanguage: this.resolvedLanguage
            }
        }
    }
    let B = H.createInstance();
    B.createInstance, B.dir, B.init, B.loadResources, B.reloadResources, B.use, B.changeLanguage, B.getFixedT, B.t, B.exists, B.setDefaultNamespace, B.hasLoadedNamespace, B.loadNamespaces, B.loadLanguages, e.i(71599), Object.create(null);
    let q = (e, t, r, i) => {
            let s = [r, {
                code: t,
                ...i || {}
            }];
            if (e ? .services ? .logger ? .forward) return e.services.logger.forward(s, "warn", "react-i18next::", !0);
            X(s[0]) && (s[0] = `react-i18next:: ${s[0]}`), e ? .services ? .logger ? .warn ? e.services.logger.warn(...s) : console ? .warn && console.warn(...s)
        },
        J = {},
        W = (e, t, r, i) => {
            X(r) && J[r] || (X(r) && (J[r] = new Date), q(e, t, r, i))
        },
        Y = (e, t) => () => {
            if (e.isInitialized) t();
            else {
                let r = () => {
                    setTimeout(() => {
                        e.off("initialized", r)
                    }, 0), t()
                };
                e.on("initialized", r)
            }
        },
        G = (e, t, r) => {
            e.loadNamespaces(t, Y(e, r))
        },
        Q = (e, t, r, i) => {
            if (X(r) && (r = [r]), e.options.preload && e.options.preload.indexOf(t) > -1) return G(e, r, i);
            r.forEach(t => {
                0 > e.options.ns.indexOf(t) && e.options.ns.push(t)
            }), e.loadLanguages(t, Y(e, i))
        },
        X = e => "string" == typeof e,
        Z = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
        ee = {
            "&amp;": "&",
            "&#38;": "&",
            "&lt;": "<",
            "&#60;": "<",
            "&gt;": ">",
            "&#62;": ">",
            "&apos;": "'",
            "&#39;": "'",
            "&quot;": '"',
            "&#34;": '"',
            "&nbsp;": " ",
            "&#160;": " ",
            "&copy;": "©",
            "&#169;": "©",
            "&reg;": "®",
            "&#174;": "®",
            "&hellip;": "…",
            "&#8230;": "…",
            "&#x2F;": "/",
            "&#47;": "/"
        },
        et = e => ee[e],
        er = {
            bindI18n: "languageChanged",
            bindI18nStore: "",
            transEmptyNodeValue: "",
            transSupportBasicHtmlNodes: !0,
            transWrapTextNodes: "",
            transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
            useSuspense: !0,
            unescape: e => e.replace(Z, et),
            transDefaultProps: void 0
        },
        ei = (0, r.createContext)();
    class es {
        constructor() {
            this.usedNamespaces = {}
        }
        addUsedNamespaces(e) {
            e.forEach(e => {
                this.usedNamespaces[e] || (this.usedNamespaces[e] = !0)
            })
        }
        getUsedNamespaces() {
            return Object.keys(this.usedNamespaces)
        }
    }
    let eo = {
            "&nbsp;": " ",
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"',
            "&apos;": "'",
            "&copy;": "©",
            "&reg;": "®",
            "&trade;": "™",
            "&hellip;": "…",
            "&ndash;": "–",
            "&mdash;": "—",
            "&lsquo;": "‘",
            "&rsquo;": "’",
            "&sbquo;": "‚",
            "&ldquo;": "“",
            "&rdquo;": "”",
            "&bdquo;": "„",
            "&dagger;": "†",
            "&Dagger;": "‡",
            "&bull;": "•",
            "&prime;": "′",
            "&Prime;": "″",
            "&lsaquo;": "‹",
            "&rsaquo;": "›",
            "&sect;": "§",
            "&para;": "¶",
            "&middot;": "·",
            "&ensp;": " ",
            "&emsp;": " ",
            "&thinsp;": " ",
            "&euro;": "€",
            "&pound;": "£",
            "&yen;": "¥",
            "&cent;": "¢",
            "&curren;": "¤",
            "&times;": "×",
            "&divide;": "÷",
            "&minus;": "−",
            "&plusmn;": "±",
            "&ne;": "≠",
            "&le;": "≤",
            "&ge;": "≥",
            "&asymp;": "≈",
            "&equiv;": "≡",
            "&infin;": "∞",
            "&int;": "∫",
            "&sum;": "∑",
            "&prod;": "∏",
            "&radic;": "√",
            "&part;": "∂",
            "&permil;": "‰",
            "&deg;": "°",
            "&micro;": "µ",
            "&larr;": "←",
            "&uarr;": "↑",
            "&rarr;": "→",
            "&darr;": "↓",
            "&harr;": "↔",
            "&crarr;": "↵",
            "&lArr;": "⇐",
            "&uArr;": "⇑",
            "&rArr;": "⇒",
            "&dArr;": "⇓",
            "&hArr;": "⇔",
            "&alpha;": "α",
            "&beta;": "β",
            "&gamma;": "γ",
            "&delta;": "δ",
            "&epsilon;": "ε",
            "&zeta;": "ζ",
            "&eta;": "η",
            "&theta;": "θ",
            "&iota;": "ι",
            "&kappa;": "κ",
            "&lambda;": "λ",
            "&mu;": "μ",
            "&nu;": "ν",
            "&xi;": "ξ",
            "&omicron;": "ο",
            "&pi;": "π",
            "&rho;": "ρ",
            "&sigma;": "σ",
            "&tau;": "τ",
            "&upsilon;": "υ",
            "&phi;": "φ",
            "&chi;": "χ",
            "&psi;": "ψ",
            "&omega;": "ω",
            "&Alpha;": "Α",
            "&Beta;": "Β",
            "&Gamma;": "Γ",
            "&Delta;": "Δ",
            "&Epsilon;": "Ε",
            "&Zeta;": "Ζ",
            "&Eta;": "Η",
            "&Theta;": "Θ",
            "&Iota;": "Ι",
            "&Kappa;": "Κ",
            "&Lambda;": "Λ",
            "&Mu;": "Μ",
            "&Nu;": "Ν",
            "&Xi;": "Ξ",
            "&Omicron;": "Ο",
            "&Pi;": "Π",
            "&Rho;": "Ρ",
            "&Sigma;": "Σ",
            "&Tau;": "Τ",
            "&Upsilon;": "Υ",
            "&Phi;": "Φ",
            "&Chi;": "Χ",
            "&Psi;": "Ψ",
            "&Omega;": "Ω",
            "&Agrave;": "À",
            "&Aacute;": "Á",
            "&Acirc;": "Â",
            "&Atilde;": "Ã",
            "&Auml;": "Ä",
            "&Aring;": "Å",
            "&AElig;": "Æ",
            "&Ccedil;": "Ç",
            "&Egrave;": "È",
            "&Eacute;": "É",
            "&Ecirc;": "Ê",
            "&Euml;": "Ë",
            "&Igrave;": "Ì",
            "&Iacute;": "Í",
            "&Icirc;": "Î",
            "&Iuml;": "Ï",
            "&ETH;": "Ð",
            "&Ntilde;": "Ñ",
            "&Ograve;": "Ò",
            "&Oacute;": "Ó",
            "&Ocirc;": "Ô",
            "&Otilde;": "Õ",
            "&Ouml;": "Ö",
            "&Oslash;": "Ø",
            "&Ugrave;": "Ù",
            "&Uacute;": "Ú",
            "&Ucirc;": "Û",
            "&Uuml;": "Ü",
            "&Yacute;": "Ý",
            "&THORN;": "Þ",
            "&szlig;": "ß",
            "&agrave;": "à",
            "&aacute;": "á",
            "&acirc;": "â",
            "&atilde;": "ã",
            "&auml;": "ä",
            "&aring;": "å",
            "&aelig;": "æ",
            "&ccedil;": "ç",
            "&egrave;": "è",
            "&eacute;": "é",
            "&ecirc;": "ê",
            "&euml;": "ë",
            "&igrave;": "ì",
            "&iacute;": "í",
            "&icirc;": "î",
            "&iuml;": "ï",
            "&eth;": "ð",
            "&ntilde;": "ñ",
            "&ograve;": "ò",
            "&oacute;": "ó",
            "&ocirc;": "ô",
            "&otilde;": "õ",
            "&ouml;": "ö",
            "&oslash;": "ø",
            "&ugrave;": "ù",
            "&uacute;": "ú",
            "&ucirc;": "û",
            "&uuml;": "ü",
            "&yacute;": "ý",
            "&thorn;": "þ",
            "&yuml;": "ÿ",
            "&iexcl;": "¡",
            "&iquest;": "¿",
            "&fnof;": "ƒ",
            "&circ;": "ˆ",
            "&tilde;": "˜",
            "&OElig;": "Œ",
            "&oelig;": "œ",
            "&Scaron;": "Š",
            "&scaron;": "š",
            "&Yuml;": "Ÿ",
            "&ordf;": "ª",
            "&ordm;": "º",
            "&macr;": "¯",
            "&acute;": "´",
            "&cedil;": "¸",
            "&sup1;": "¹",
            "&sup2;": "²",
            "&sup3;": "³",
            "&frac14;": "¼",
            "&frac12;": "½",
            "&frac34;": "¾",
            "&spades;": "♠",
            "&clubs;": "♣",
            "&hearts;": "♥",
            "&diams;": "♦",
            "&loz;": "◊",
            "&oline;": "‾",
            "&frasl;": "⁄",
            "&weierp;": "℘",
            "&image;": "ℑ",
            "&real;": "ℜ",
            "&alefsym;": "ℵ"
        },
        en = RegExp(Object.keys(eo).map(e => e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|"), "g");
    var ea = e.i(90979);
    let el = {
            t: (e, t) => {
                let r;
                return X(t) ? t : "object" == typeof(r = t) && null !== r && X(t.defaultValue) ? t.defaultValue : Array.isArray(e) ? e[e.length - 1] : e
            },
            ready: !1
        },
        eu = () => () => {};

    function ec({
        i18n: e,
        defaultNS: t,
        children: i
    }) {
        let s = (0, r.useMemo)(() => ({
            i18n: e,
            defaultNS: t
        }), [e, t]);
        return (0, r.createElement)(ei.Provider, {
            value: s
        }, i)
    }
    e.s(["useTranslation", 0, (e, i = {}) => {
        let {
            i18n: s
        } = i, {
            i18n: o,
            defaultNS: n
        } = (0, r.useContext)(ei) || {}, a = s || o || t;
        a && !a.reportNamespaces && (a.reportNamespaces = new es), a || W(a, "NO_I18NEXT_INSTANCE", "useTranslation: You will need to pass in an i18next instance by using initReactI18next");
        let l = (0, r.useMemo)(() => ({ ...er,
                ...a ? .options ? .react,
                ...i
            }), [a, i]),
            {
                useSuspense: u,
                keyPrefix: c
            } = l,
            p = e || n || a ? .options ? .defaultNS,
            h = X(p) ? [p] : p || ["translation"],
            g = (0, r.useMemo)(() => h, h);
        a ? .reportNamespaces ? .addUsedNamespaces ? .(g);
        let d = (0, r.useRef)(0),
            f = (0, r.useCallback)(e => {
                if (!a) return eu;
                let {
                    bindI18n: t,
                    bindI18nStore: r
                } = l, i = () => {
                    d.current += 1, e()
                };
                return t && a.on(t, i), r && a.store.on(r, i), () => {
                    t && t.split(" ").forEach(e => a.off(e, i)), r && r.split(" ").forEach(e => a.store.off(e, i))
                }
            }, [a, l]),
            m = (0, r.useRef)(),
            y = (0, r.useCallback)(() => {
                if (!a) return el;
                let e = !!(a.isInitialized || a.initializedStoreOnce) && g.every(e => ((e, t, r = {}) => t.languages && t.languages.length ? t.hasLoadedNamespace(e, {
                        lng: r.lng,
                        precheck: (t, i) => {
                            if (r.bindI18n && r.bindI18n.indexOf("languageChanging") > -1 && t.services.backendConnector.backend && t.isLanguageChangingTo && !i(t.isLanguageChangingTo, e)) return !1
                        }
                    }) : (W(t, "NO_LANGUAGES", "i18n.languages were undefined or empty", {
                        languages: t.languages
                    }), !0))(e, a, l)),
                    t = i.lng || a.language,
                    r = d.current,
                    s = m.current;
                if (s && s.ready === e && s.lng === t && s.keyPrefix === c && s.revision === r) return s;
                let o = {
                    t: a.getFixedT(t, "fallback" === l.nsMode ? g : g[0], c),
                    ready: e,
                    lng: t,
                    keyPrefix: c,
                    revision: r
                };
                return m.current = o, o
            }, [a, g, c, l, i.lng]),
            [b, v] = (0, r.useState)(0),
            {
                t: x,
                ready: O
            } = (0, ea.useSyncExternalStore)(f, y, y);
        (0, r.useEffect)(() => {
            if (a && !O && !u) {
                let e = () => v(e => e + 1);
                i.lng ? Q(a, i.lng, g, e) : G(a, g, e)
            }
        }, [a, i.lng, g, O, u, b]);
        let S = a || {},
            k = (0, r.useRef)(null),
            w = (0, r.useRef)(),
            L = e => {
                let t = Object.getOwnPropertyDescriptors(e);
                t.__original && delete t.__original;
                let r = Object.create(Object.getPrototypeOf(e), t);
                if (!Object.prototype.hasOwnProperty.call(r, "__original")) try {
                    Object.defineProperty(r, "__original", {
                        value: e,
                        writable: !1,
                        enumerable: !1,
                        configurable: !1
                    })
                } catch (e) {}
                return r
            },
            $ = (0, r.useMemo)(() => {
                let e = S ? .language,
                    t = S;
                k.current && k.current.__original === S ? w.current !== e ? (k.current = t = L(S), w.current = e) : t = k.current : (k.current = t = L(S), w.current = e);
                let r = [x, t, O];
                return r.t = x, r.i18n = t, r.ready = O, r
            }, [x, S, O, S.resolvedLanguage, S.language, S.languages]);
        if (a && u && !O) throw new Promise(e => {
            let t = () => e();
            i.lng ? Q(a, i.lng, g, t) : G(a, g, t)
        });
        return $
    }], 71179);
    var ep = e.i(75907),
        eh = e.i(87250),
        eg = e.i(34980);

    function ed(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, i = Array(t); r < t; r++) i[r] = e[r];
        return i
    }

    function ef(e, t) {
        if (e) {
            if ("string" == typeof e) return ed(e, t);
            var r = ({}).toString.call(e).slice(8, -1);
            return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? ed(e, t) : void 0
        }
    }
    e.i(50461);
    var em = e.i(61174);

    function ey(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            var r = null == e ? null : "u" > typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != r) {
                var i, s, o, n, a = [],
                    l = !0,
                    u = !1;
                try {
                    if (o = (r = r.call(e)).next, 0 === t) {
                        if (Object(r) !== r) return;
                        l = !1
                    } else
                        for (; !(l = (i = o.call(r)).done) && (a.push(i.value), a.length !== t); l = !0);
                } catch (e) {
                    u = !0, s = e
                } finally {
                    try {
                        if (!l && null != r.return && (n = r.return(), Object(n) !== n)) return
                    } finally {
                        if (u) throw s
                    }
                }
                return a
            }
        }(e, t) || ef(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function eb(e, t) {
        if (null == e) return {};
        var r = {};
        for (var i in e)
            if (({}).hasOwnProperty.call(e, i)) {
                if (-1 !== t.indexOf(i)) continue;
                r[i] = e[i]
            }
        return r
    }

    function ev(e, t) {
        if (null == e) return {};
        var r, i, s = eb(e, t);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            for (i = 0; i < o.length; i++) r = o[i], -1 === t.indexOf(r) && ({}).propertyIsEnumerable.call(e, r) && (s[r] = e[r])
        }
        return s
    }
    e.s(["default", () => eb], 60997);
    var ex = {
            defaultNS: "common",
            errorStackTraceLimit: 0,
            i18n: {
                defaultLocale: "en",
                locales: ["en"]
            },
            get initImmediate() {
                return "u" > typeof window
            },
            get initAsync() {
                return "u" > typeof window
            },
            interpolation: {
                escapeValue: !1
            },
            load: "currentOnly",
            localeExtension: "json",
            localePath: "./public/locales",
            localeStructure: "{{lng}}/{{ns}}",
            react: {
                useSuspense: !1
            },
            reloadOnPrerender: !1,
            serializeConfig: !0,
            use: []
        },
        eO = "u" > typeof window ? r.useLayoutEffect : r.useEffect,
        eS = ["i18n"],
        ek = ["i18n"];

    function ew(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            t && (i = i.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), r.push.apply(r, i)
        }
        return r
    }

    function eL(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? ew(Object(r), !0).forEach(function(t) {
                (0, eh.default)(e, t, r[t])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ew(Object(r)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            })
        }
        return e
    }
    var e$ = ["backend", "detection"],
        eP = function(e) {
            if ("string" != typeof(null == e ? void 0 : e.lng)) throw Error("config.lng was not passed into createConfig");
            var t, r, i, s = e.i18n,
                o = ev(e, eS),
                n = ex.i18n,
                a = eL(eL(eL(eL({}, ev(ex, ek)), o), n), s),
                l = a.defaultNS,
                u = a.lng,
                c = a.localeExtension,
                p = a.localePath,
                h = a.nonExplicitSupportedLngs,
                g = a.locales.filter(function(e) {
                    return "default" !== e
                });
            if ("cimode" === u) return a;
            void 0 === a.fallbackLng && (a.fallbackLng = a.defaultLocale, "default" === a.fallbackLng && (a.fallbackLng = ey(g, 1)[0]));
            var d = null == e || null == (t = e.interpolation) ? void 0 : t.prefix,
                f = null == e || null == (r = e.interpolation) ? void 0 : r.suffix,
                m = null != d ? d : "{{",
                y = null != f ? f : "}}";
            "string" != typeof(null == e ? void 0 : e.localeStructure) && (d || f) && (a.localeStructure = "".concat(m, "lng").concat(y, "/").concat(m, "ns").concat(y));
            var b = a.fallbackLng,
                v = a.localeStructure;
            if (h) {
                var x = function(e, t) {
                    var r = ey(t.split("-"), 1)[0];
                    return e[t] = [r], e
                };
                if ("string" == typeof b) a.fallbackLng = a.locales.filter(function(e) {
                    return e.includes("-")
                }).reduce(x, {
                    default: [b]
                });
                else if (Array.isArray(b)) a.fallbackLng = a.locales.filter(function(e) {
                    return e.includes("-")
                }).reduce(x, {
                    default: b
                });
                else if ("object" === (0, em.default)(b)) a.fallbackLng = Object.entries(a.fallbackLng).reduce(function(e, t) {
                    var r = ey(t, 2),
                        i = r[0],
                        s = r[1];
                    return e[i] = i.includes("-") ? Array.from(new Set([i.split("-")[0]].concat(function(e) {
                        if (Array.isArray(e)) return ed(e)
                    }(s) || function(e) {
                        if ("u" > typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                    }(s) || ef(s) || function() {
                        throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()))) : s, e
                }, b);
                else if ("function" == typeof b) throw Error("If nonExplicitSupportedLngs is true, no functions are allowed for fallbackLng")
            }
            return (null == e || null == (i = e.use) ? void 0 : i.some(function(e) {
                return "backend" === e.type
            })) || ("string" == typeof p ? a.backend = {
                addPath: "".concat(p, "/").concat(v, ".missing.").concat(c),
                loadPath: "".concat(p, "/").concat(v, ".").concat(c)
            } : "function" == typeof p && (a.backend = {
                addPath: function(e, t) {
                    return p(e, t, !0)
                },
                loadPath: function(e, t) {
                    return p(e, t, !1)
                }
            })), "string" == typeof a.ns || Array.isArray(a.ns) || (a.ns = [l]), e$.forEach(function(t) {
                e[t] && (a[t] = eL(eL({}, a[t]), e[t]))
            }), a
        };
    let ej = function(e) {
        void 0 === e.ns && (e.ns = []);
        var t, r, i = B.createInstance(e);
        return i.isInitialized ? t = Promise.resolve(B.t) : (null == e || null == (r = e.use) || r.forEach(function(e) {
            return i.use(e)
        }), "function" == typeof e.onPreInitI18next && e.onPreInitI18next(i), t = i.init(e)), {
            i18n: i,
            initPromise: t
        }
    };
    var eC = r.default.createElement;

    function eN(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            t && (i = i.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), r.push.apply(r, i)
        }
        return r
    }

    function eR(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? eN(Object(r), !0).forEach(function(t) {
                (0, eh.default)(e, t, r[t])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : eN(Object(r)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            })
        }
        return e
    }
    var eE = function(e, t) {
            if (t && e.isInitialized)
                for (var r = 0, i = Object.keys(t); r < i.length; r++)
                    for (var s = i[r], o = 0, n = Object.keys(t[s]); o < n.length; o++) {
                        var a, l = n[o];
                        null != e && null != (a = e.store) && a.data && e.store.data[s] && e.store.data[s][l] || e.addResourceBundle(s, l, t[s][l], !0, !0)
                    }
        },
        eI = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            return (0, eg.default)(function(i) {
                var s, o, n = (i.pageProps || {})._nextI18Next,
                    a = null != (s = null == n ? void 0 : n.initialLocale) ? s : null == i || null == (o = i.router) ? void 0 : o.locale,
                    l = null == n ? void 0 : n.ns,
                    u = (0, r.useRef)(null),
                    c = (0, r.useMemo)(function() {
                        if (!n && !t) return null;
                        var e, r, i = null != t ? t : null == n ? void 0 : n.userConfig;
                        if (!i) throw Error("appWithTranslation was called without a next-i18next config");
                        if (!(null != i && i.i18n)) throw Error("appWithTranslation was called without config.i18n");
                        if (!(null != i && null != (e = i.i18n) && e.defaultLocale)) throw Error("config.i18n does not include a defaultLocale property");
                        var s = (n || {}).initialI18nStore,
                            o = null != (r = null == t ? void 0 : t.resources) ? r : s;
                        a || (a = i.i18n.defaultLocale);
                        var c = u.current;
                        return c ? eE(c, o) : (eE(c = ej(eR(eR(eR({}, eP(eR(eR({}, i), {}, {
                            lng: a
                        }))), {}, {
                            lng: a
                        }, l && {
                            ns: l
                        }), {}, {
                            resources: o
                        })).i18n, o), u.current = c), c
                    }, [n, a, l]);
                return eO(function() {
                    c && a && c.changeLanguage(a)
                }, [c, a]), null !== c ? eC(ec, {
                    i18n: c
                }, eC(e, i)) : eC(e, (0, ep.default)({
                    key: a
                }, i))
            }, e)
        };
    e.s(["appWithTranslation", () => eI], 91214), e.s([], 64157)
}]);