(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 14681, t => {
            "use strict";
            var e = t.i(91788);

            function n(t) {
                return "[object Object]" === Object.prototype.toString.call(t) || Array.isArray(t)
            }

            function r(t, e) {
                let o = Object.keys(t),
                    i = Object.keys(e);
                return o.length === i.length && JSON.stringify(Object.keys(t.breakpoints || {})) === JSON.stringify(Object.keys(e.breakpoints || {})) && o.every(o => {
                    let i = t[o],
                        a = e[o];
                    return "function" == typeof i ? `${i}` == `${a}` : n(i) && n(a) ? r(i, a) : i === a
                })
            }

            function o(t) {
                return t.concat().sort((t, e) => t.name > e.name ? 1 : -1).map(t => t.options)
            }

            function i(t) {
                return "number" == typeof t
            }

            function a(t) {
                return "string" == typeof t
            }

            function l(t) {
                return "boolean" == typeof t
            }

            function c(t) {
                return "[object Object]" === Object.prototype.toString.call(t)
            }

            function s(t) {
                return Math.abs(t)
            }

            function u(t) {
                return Math.sign(t)
            }

            function d(t) {
                return m(t).map(Number)
            }

            function f(t) {
                return t[p(t)]
            }

            function p(t) {
                return Math.max(0, t.length - 1)
            }

            function g(t, e = 0) {
                return Array.from(Array(t), (t, n) => e + n)
            }

            function m(t) {
                return Object.keys(t)
            }

            function b(t, e) {
                return void 0 !== e.MouseEvent && t instanceof e.MouseEvent
            }

            function h() {
                let t = [],
                    e = {
                        add: function(n, r, o, i = {
                            passive: !0
                        }) {
                            let a;
                            return "addEventListener" in n ? (n.addEventListener(r, o, i), a = () => n.removeEventListener(r, o, i)) : (n.addListener(o), a = () => n.removeListener(o)), t.push(a), e
                        },
                        clear: function() {
                            t = t.filter(t => t())
                        }
                    };
                return e
            }

            function x(t = 0, e = 0) {
                let n = s(t - e);

                function r(n) {
                    return n < t || n > e
                }
                return {
                    length: n,
                    max: e,
                    min: t,
                    constrain: function(n) {
                        return r(n) ? n < t ? t : e : n
                    },
                    reachedAny: r,
                    reachedMax: function(t) {
                        return t > e
                    },
                    reachedMin: function(e) {
                        return e < t
                    },
                    removeOffset: function(t) {
                        return n ? t - n * Math.ceil((t - e) / n) : t
                    }
                }
            }

            function y(t) {
                let e = t;

                function n(t) {
                    return i(t) ? t : t.get()
                }
                return {
                    get: function() {
                        return e
                    },
                    set: function(t) {
                        e = n(t)
                    },
                    add: function(t) {
                        e += n(t)
                    },
                    subtract: function(t) {
                        e -= n(t)
                    }
                }
            }

            function w(t, e) {
                let n = "x" === t.scroll ? function(t) {
                        return `translate3d(${t}px,0px,0px)`
                    } : function(t) {
                        return `translate3d(0px,${t}px,0px)`
                    },
                    r = e.style,
                    o = null,
                    i = !1;
                return {
                    clear: function() {
                        !i && (r.transform = "", e.getAttribute("style") || e.removeAttribute("style"))
                    },
                    to: function(e) {
                        if (i) return;
                        let a = Math.round(100 * t.direction(e)) / 100;
                        a !== o && (r.transform = n(a), o = a)
                    },
                    toggleActive: function(t) {
                        i = !t
                    }
                }
            }
            let v = {
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

            function k(t, e, n) {
                let r, o, C, S, I, O, L, T, A = t.ownerDocument,
                    N = A.defaultView,
                    E = function(t) {
                        function e(t, e) {
                            return function t(e, n) {
                                return [e, n].reduce((e, n) => (m(n).forEach(r => {
                                    let o = e[r],
                                        i = n[r],
                                        a = c(o) && c(i);
                                    e[r] = a ? t(o, i) : i
                                }), e), {})
                            }(t, e || {})
                        }
                        return {
                            mergeOptions: e,
                            optionsAtMedia: function(n) {
                                let r = n.breakpoints || {},
                                    o = m(r).filter(e => t.matchMedia(e).matches).map(t => r[t]).reduce((t, n) => e(t, n), {});
                                return e(n, o)
                            },
                            optionsMediaQueries: function(e) {
                                return e.map(t => m(t.breakpoints || {})).reduce((t, e) => t.concat(e), []).map(t.matchMedia)
                            }
                        }
                    }(N),
                    $ = (T = [], {
                        init: function(t, e) {
                            return (T = e.filter(({
                                options: t
                            }) => !1 !== E.optionsAtMedia(t).active)).forEach(e => e.init(t, E)), e.reduce((t, e) => Object.assign(t, {
                                [e.name]: e
                            }), {})
                        },
                        destroy: function() {
                            T = T.filter(t => t.destroy())
                        }
                    }),
                    z = h(),
                    D = (o = {}, C = {
                        init: function(t) {
                            r = t
                        },
                        emit: function(t) {
                            return (o[t] || []).forEach(e => e(r, t)), C
                        },
                        off: function(t, e) {
                            return o[t] = (o[t] || []).filter(t => t !== e), C
                        },
                        on: function(t, e) {
                            return o[t] = (o[t] || []).concat([e]), C
                        },
                        clear: function() {
                            o = {}
                        }
                    }),
                    {
                        mergeOptions: j,
                        optionsAtMedia: _,
                        optionsMediaQueries: V
                    } = E,
                    {
                        on: F,
                        off: B,
                        emit: M
                    } = D,
                    P = !1,
                    W = j(v, k.globalOptions),
                    H = j(W),
                    R = [];

                function U(e, n) {
                    P || (H = _(W = j(W, e)), R = n || R, function() {
                        let {
                            container: e,
                            slides: n
                        } = H;
                        O = (a(e) ? t.querySelector(e) : e) || t.children[0];
                        let r = a(n) ? O.querySelectorAll(n) : n;
                        L = [].slice.call(r || O.children)
                    }(), S = function e(n) {
                        let r = function(t, e, n, r, o, c, v) {
                            var k, C;
                            let S, I, O, L, T, A, N, E, $, z, D, j, _, V, {
                                    align: F,
                                    axis: B,
                                    direction: M,
                                    startIndex: P,
                                    loop: W,
                                    duration: H,
                                    dragFree: R,
                                    dragThreshold: U,
                                    inViewThreshold: q,
                                    slidesToScroll: J,
                                    skipSnaps: K,
                                    containScroll: X,
                                    watchResize: Z,
                                    watchSlides: Q,
                                    watchDrag: Y,
                                    watchFocus: G
                                } = c,
                                tt = {
                                    measure: function(t) {
                                        let {
                                            offsetTop: e,
                                            offsetLeft: n,
                                            offsetWidth: r,
                                            offsetHeight: o
                                        } = t;
                                        return {
                                            top: e,
                                            right: n + r,
                                            bottom: e + o,
                                            left: n,
                                            width: r,
                                            height: o
                                        }
                                    }
                                },
                                te = tt.measure(e),
                                tn = n.map(tt.measure),
                                tr = (I = "rtl" === M, L = (O = "y" === B) || !I ? 1 : -1, T = O ? "top" : I ? "right" : "left", A = O ? "bottom" : I ? "left" : "right", {
                                    scroll: O ? "y" : "x",
                                    cross: O ? "x" : "y",
                                    startEdge: T,
                                    endEdge: A,
                                    measureSize: function(t) {
                                        let {
                                            height: e,
                                            width: n
                                        } = t;
                                        return O ? e : n
                                    },
                                    direction: function(t) {
                                        return t * L
                                    }
                                }),
                                to = tr.measureSize(te),
                                ti = {
                                    measure: function(t) {
                                        return t / 100 * to
                                    }
                                },
                                ta = (k = F, C = to, S = {
                                    start: function() {
                                        return 0
                                    },
                                    center: function(t) {
                                        return (C - t) / 2
                                    },
                                    end: function(t) {
                                        return C - t
                                    }
                                }, {
                                    measure: function(t, e) {
                                        return a(k) ? S[k](t) : k(C, t, e)
                                    }
                                }),
                                tl = !W && !!X,
                                {
                                    slideSizes: tc,
                                    slideSizesWithGaps: ts,
                                    startGap: tu,
                                    endGap: td
                                } = function(t, e, n, r, o, i) {
                                    let {
                                        measureSize: a,
                                        startEdge: l,
                                        endEdge: c
                                    } = t, u = n[0] && o, d = function() {
                                        if (!u) return 0;
                                        let t = n[0];
                                        return s(e[l] - t[l])
                                    }(), g = u ? parseFloat(i.getComputedStyle(f(r)).getPropertyValue(`margin-${c}`)) : 0, m = n.map(a), b = n.map((t, e, n) => {
                                        let r = e === p(n);
                                        return e ? r ? m[e] + g : n[e + 1][l] - t[l] : m[e] + d
                                    }).map(s);
                                    return {
                                        slideSizes: m,
                                        slideSizesWithGaps: b,
                                        startGap: d,
                                        endGap: g
                                    }
                                }(tr, te, tn, n, W || !!X, o),
                                tf = function(t, e, n, r, o, a, l, c, u) {
                                    let {
                                        startEdge: g,
                                        endEdge: m,
                                        direction: b
                                    } = t, h = i(n);
                                    return {
                                        groupSlides: function(t) {
                                            return h ? d(t).filter(t => t % n == 0).map(e => t.slice(e, e + n)) : t.length ? d(t).reduce((n, i, u) => {
                                                let d = f(n) || 0,
                                                    h = i === p(t),
                                                    x = o[g] - a[d][g],
                                                    y = o[g] - a[i][m],
                                                    w = r || 0 !== d ? 0 : b(l),
                                                    v = s(y - (!r && h ? b(c) : 0) - (x + w));
                                                return u && v > e + 2 && n.push(i), h && n.push(t.length), n
                                            }, []).map((e, n, r) => {
                                                let o = Math.max(r[n - 1] || 0);
                                                return t.slice(o, e)
                                            }) : []
                                        }
                                    }
                                }(tr, to, J, W, te, tn, tu, td, 0),
                                {
                                    snaps: tp,
                                    snapsAligned: tg
                                } = function(t, e, n, r, o) {
                                    let {
                                        startEdge: i,
                                        endEdge: a
                                    } = t, {
                                        groupSlides: l
                                    } = o, c = l(r).map(t => f(t)[a] - t[0][i]).map(s).map(e.measure), u = r.map(t => n[i] - t[i]).map(t => -s(t)), d = l(u).map(t => t[0]).map((t, e) => t + c[e]);
                                    return {
                                        snaps: u,
                                        snapsAligned: d
                                    }
                                }(tr, ta, te, tn, tf),
                                tm = -f(tp) + f(ts),
                                {
                                    snapsContained: tb,
                                    scrollContainLimit: th
                                } = function(t, e, n, r, o) {
                                    let i, a, l = x(-e + t, 0),
                                        c = n.map((t, e) => {
                                            let {
                                                min: r,
                                                max: o
                                            } = l, i = l.constrain(t), a = e === p(n);
                                            return e ? a || function(t, e) {
                                                return 1 >= s(t - e)
                                            }(r, i) ? r : function(t, e) {
                                                return 1 >= s(t - e)
                                            }(o, i) ? o : i : o
                                        }).map(t => parseFloat(t.toFixed(3))),
                                        u = (i = c[0], a = f(c), x(c.lastIndexOf(i), c.indexOf(a) + 1));
                                    return {
                                        snapsContained: function() {
                                            if (e <= t + 2) return [l.max];
                                            if ("keepSnaps" === r) return c;
                                            let {
                                                min: n,
                                                max: o
                                            } = u;
                                            return c.slice(n, o)
                                        }(),
                                        scrollContainLimit: u
                                    }
                                }(to, tm, tg, X, 0),
                                tx = tl ? tb : tg,
                                {
                                    limit: ty
                                } = (N = tx[0], {
                                    limit: x(W ? N - tm : f(tx), N)
                                }),
                                tw = function t(e, n, r) {
                                    let {
                                        constrain: o
                                    } = x(0, e), i = e + 1, a = l(n);

                                    function l(t) {
                                        return r ? s((i + t) % i) : o(t)
                                    }

                                    function c() {
                                        return t(e, a, r)
                                    }
                                    let u = {
                                        get: function() {
                                            return a
                                        },
                                        set: function(t) {
                                            return a = l(t), u
                                        },
                                        add: function(t) {
                                            return c().set(a + t)
                                        },
                                        clone: c
                                    };
                                    return u
                                }(p(tx), P, W),
                                tv = tw.clone(),
                                tk = d(n),
                                tC = function(t, e, n, r) {
                                    let o = h(),
                                        i = 1e3 / 60,
                                        a = null,
                                        l = 0,
                                        c = 0;

                                    function s(t) {
                                        if (!c) return;
                                        a || (a = t, n(), n());
                                        let o = t - a;
                                        for (a = t, l += o; l >= i;) n(), l -= i;
                                        r(l / i), c && (c = e.requestAnimationFrame(s))
                                    }

                                    function u() {
                                        e.cancelAnimationFrame(c), a = null, l = 0, c = 0
                                    }
                                    return {
                                        init: function() {
                                            o.add(t, "visibilitychange", () => {
                                                t.hidden && (a = null, l = 0)
                                            })
                                        },
                                        destroy: function() {
                                            u(), o.clear()
                                        },
                                        start: function() {
                                            c || (c = e.requestAnimationFrame(s))
                                        },
                                        stop: u,
                                        update: n,
                                        render: r
                                    }
                                }(r, o, () => (({
                                    dragHandler: t,
                                    scrollBody: e,
                                    scrollBounds: n,
                                    options: {
                                        loop: r
                                    }
                                }) => {
                                    r || n.constrain(t.pointerDown()), e.seek()
                                })(tV), t => (({
                                    scrollBody: t,
                                    translate: e,
                                    location: n,
                                    offsetLocation: r,
                                    previousLocation: o,
                                    scrollLooper: i,
                                    slideLooper: a,
                                    dragHandler: l,
                                    animation: c,
                                    eventHandler: s,
                                    scrollBounds: u,
                                    options: {
                                        loop: d
                                    }
                                }, f) => {
                                    let p = t.settled(),
                                        g = !u.shouldConstrain(),
                                        m = d ? p : p && g,
                                        b = m && !l.pointerDown();
                                    b && c.stop();
                                    let h = n.get() * f + o.get() * (1 - f);
                                    r.set(h), d && (i.loop(t.direction()), a.loop()), e.to(r.get()), b && s.emit("settle"), m || s.emit("scroll")
                                })(tV, t)),
                                tS = tx[tw.get()],
                                tI = y(tS),
                                tO = y(tS),
                                tL = y(tS),
                                tT = y(tS),
                                tA = function(t, e, n, r, o, i) {
                                    let a = 0,
                                        l = 0,
                                        c = o,
                                        d = .68,
                                        f = t.get(),
                                        p = 0;

                                    function g(t) {
                                        return c = t, b
                                    }

                                    function m(t) {
                                        return d = t, b
                                    }
                                    let b = {
                                        direction: function() {
                                            return l
                                        },
                                        duration: function() {
                                            return c
                                        },
                                        velocity: function() {
                                            return a
                                        },
                                        seek: function() {
                                            let e = r.get() - t.get(),
                                                o = 0;
                                            return c ? (n.set(t), a += e / c, a *= d, f += a, t.add(a), o = f - p) : (a = 0, n.set(r), t.set(r), o = e), l = u(o), p = f, b
                                        },
                                        settled: function() {
                                            return .001 > s(r.get() - e.get())
                                        },
                                        useBaseFriction: function() {
                                            return m(.68)
                                        },
                                        useBaseDuration: function() {
                                            return g(o)
                                        },
                                        useFriction: m,
                                        useDuration: g
                                    };
                                    return b
                                }(tI, tL, tO, tT, H, 0),
                                tN = function(t, e, n, r, o) {
                                    let {
                                        reachedAny: i,
                                        removeOffset: a,
                                        constrain: l
                                    } = r;

                                    function c(t) {
                                        return t.concat().sort((t, e) => s(t) - s(e))[0]
                                    }

                                    function d(e, r) {
                                        let o = [e, e + n, e - n];
                                        if (!t) return e;
                                        if (!r) return c(o);
                                        let i = o.filter(t => u(t) === r);
                                        return i.length ? c(i) : f(o) - n
                                    }
                                    return {
                                        byDistance: function(n, r) {
                                            let c = o.get() + n,
                                                {
                                                    index: u,
                                                    distance: f
                                                } = function(n) {
                                                    let r = t ? a(n) : l(n),
                                                        {
                                                            index: o
                                                        } = e.map((t, e) => ({
                                                            diff: d(t - r, 0),
                                                            index: e
                                                        })).sort((t, e) => s(t.diff) - s(e.diff))[0];
                                                    return {
                                                        index: o,
                                                        distance: r
                                                    }
                                                }(c),
                                                p = !t && i(c);
                                            if (!r || p) return {
                                                index: u,
                                                distance: n
                                            };
                                            let g = n + d(e[u] - f, 0);
                                            return {
                                                index: u,
                                                distance: g
                                            }
                                        },
                                        byIndex: function(t, n) {
                                            let r = d(e[t] - o.get(), n);
                                            return {
                                                index: t,
                                                distance: r
                                            }
                                        },
                                        shortcut: d
                                    }
                                }(W, tx, tm, ty, tT),
                                tE = function(t, e, n, r, o, i, a) {
                                    function l(o) {
                                        let l = o.distance,
                                            c = o.index !== e.get();
                                        i.add(l), l && (r.duration() ? t.start() : (t.update(), t.render(1), t.update())), c && (n.set(e.get()), e.set(o.index), a.emit("select"))
                                    }
                                    return {
                                        distance: function(t, e) {
                                            l(o.byDistance(t, e))
                                        },
                                        index: function(t, n) {
                                            let r = e.clone().set(t);
                                            l(o.byIndex(r.get(), n))
                                        }
                                    }
                                }(tC, tw, tv, tA, tN, tT, v),
                                t$ = function(t) {
                                    let {
                                        max: e,
                                        length: n
                                    } = t;
                                    return {
                                        get: function(t) {
                                            return n ? -((t - e) / n) : 0
                                        }
                                    }
                                }(ty),
                                tz = h(),
                                tD = ($ = {}, z = null, D = null, j = !1, {
                                    init: function() {
                                        E = new IntersectionObserver(t => {
                                            j || (t.forEach(t => {
                                                $[n.indexOf(t.target)] = t
                                            }), z = null, D = null, v.emit("slidesInView"))
                                        }, {
                                            root: e.parentElement,
                                            threshold: q
                                        }), n.forEach(t => E.observe(t))
                                    },
                                    destroy: function() {
                                        E && E.disconnect(), j = !0
                                    },
                                    get: function(t = !0) {
                                        if (t && z) return z;
                                        if (!t && D) return D;
                                        let e = m($).reduce((e, n) => {
                                            let r = parseInt(n),
                                                {
                                                    isIntersecting: o
                                                } = $[r];
                                            return (t && o || !t && !o) && e.push(r), e
                                        }, []);
                                        return t && (z = e), t || (D = e), e
                                    }
                                }),
                                {
                                    slideRegistry: tj
                                } = function(t, e, n, r, o, i) {
                                    let a, {
                                            groupSlides: l
                                        } = o,
                                        {
                                            min: c,
                                            max: s
                                        } = r;
                                    return {
                                        slideRegistry: (a = l(i), 1 === n.length ? [i] : t && "keepSnaps" !== e ? a.slice(c, s).map((t, e, n) => {
                                            let r = e === p(n);
                                            return e ? r ? g(p(i) - f(n)[0] + 1, f(n)[0]) : t : g(f(n[0]) + 1)
                                        }) : a)
                                    }
                                }(tl, X, tx, th, tf, tk),
                                t_ = function(t, e, n, r, o, a, c, s) {
                                    let u = {
                                            passive: !0,
                                            capture: !0
                                        },
                                        d = 0;

                                    function f(t) {
                                        "Tab" === t.code && (d = new Date().getTime())
                                    }
                                    return {
                                        init: function(p) {
                                            s && (a.add(document, "keydown", f, !1), e.forEach((e, f) => {
                                                a.add(e, "focus", e => {
                                                    (l(s) || s(p, e)) && function(e) {
                                                        if (new Date().getTime() - d > 10) return;
                                                        c.emit("slideFocusStart"), t.scrollLeft = 0;
                                                        let a = n.findIndex(t => t.includes(e));
                                                        i(a) && (o.useDuration(0), r.index(a, 0), c.emit("slideFocus"))
                                                    }(f)
                                                }, u)
                                            }))
                                        }
                                    }
                                }(t, n, tj, tE, tA, tz, v, G),
                                tV = {
                                    ownerDocument: r,
                                    ownerWindow: o,
                                    eventHandler: v,
                                    containerRect: te,
                                    slideRects: tn,
                                    animation: tC,
                                    axis: tr,
                                    dragHandler: function(t, e, n, r, o, i, a, c, d, f, p, g, m, y, w, v, k, C, S) {
                                        let {
                                            cross: I,
                                            direction: O
                                        } = t, L = ["INPUT", "SELECT", "TEXTAREA"], T = {
                                            passive: !1
                                        }, A = h(), N = h(), E = x(50, 225).constrain(y.measure(20)), $ = {
                                            mouse: 300,
                                            touch: 400
                                        }, z = {
                                            mouse: 500,
                                            touch: 600
                                        }, D = w ? 43 : 25, j = !1, _ = 0, V = 0, F = !1, B = !1, M = !1, P = !1;

                                        function W(t) {
                                            if (!b(t, r) && t.touches.length >= 2) return H(t);
                                            let e = i.readPoint(t),
                                                n = i.readPoint(t, I),
                                                a = s(e - _),
                                                l = s(n - V);
                                            if (!B && !P && (!t.cancelable || !(B = a > l))) return H(t);
                                            let u = i.pointerMove(t);
                                            a > v && (M = !0), f.useFriction(.3).useDuration(.75), c.start(), o.add(O(u)), t.preventDefault()
                                        }

                                        function H(t) {
                                            var e;
                                            let n, r, o = p.byDistance(0, !1).index !== g.get(),
                                                a = i.pointerUp(t) * (w ? z : $)[P ? "mouse" : "touch"],
                                                l = (e = O(a), n = g.add(-1 * u(e)), r = p.byDistance(e, !w).distance, w || s(e) < E ? r : k && o ? .5 * r : p.byIndex(n.get(), 0).distance),
                                                c = function(t, e) {
                                                    var n, r;
                                                    if (0 === t || 0 === e || s(t) <= s(e)) return 0;
                                                    let o = (n = s(t), r = s(e), s(n - r));
                                                    return s(o / t)
                                                }(a, l);
                                            B = !1, F = !1, N.clear(), f.useDuration(D - 10 * c).useFriction(.68 + c / 50), d.distance(l, !w), P = !1, m.emit("pointerUp")
                                        }

                                        function R(t) {
                                            M && (t.stopPropagation(), t.preventDefault(), M = !1)
                                        }
                                        return {
                                            init: function(t) {
                                                S && A.add(e, "dragstart", t => t.preventDefault(), T).add(e, "touchmove", () => void 0, T).add(e, "touchend", () => void 0).add(e, "touchstart", c).add(e, "mousedown", c).add(e, "touchcancel", H).add(e, "contextmenu", H).add(e, "click", R, !0);

                                                function c(c) {
                                                    (l(S) || S(t, c)) && function(t) {
                                                        let l, c = b(t, r);
                                                        if ((P = c, M = w && c && !t.buttons && j, j = s(o.get() - a.get()) >= 2, !c || 0 === t.button) && (l = t.target.nodeName || "", !L.includes(l))) {
                                                            let r;
                                                            F = !0, i.pointerDown(t), f.useFriction(0).useDuration(0), o.set(a), r = P ? n : e, N.add(r, "touchmove", W, T).add(r, "touchend", H).add(r, "mousemove", W, T).add(r, "mouseup", H), _ = i.readPoint(t), V = i.readPoint(t, I), m.emit("pointerDown")
                                                        }
                                                    }(c)
                                                }
                                            },
                                            destroy: function() {
                                                A.clear(), N.clear()
                                            },
                                            pointerDown: function() {
                                                return F
                                            }
                                        }
                                    }(tr, t, r, o, tT, function(t, e) {
                                        let n, r;

                                        function o(t) {
                                            return t.timeStamp
                                        }

                                        function i(n, r) {
                                            let o = r || t.scroll,
                                                i = `client${"x"===o?"X":"Y"}`;
                                            return (b(n, e) ? n : n.touches[0])[i]
                                        }
                                        return {
                                            pointerDown: function(t) {
                                                return n = t, r = t, i(t)
                                            },
                                            pointerMove: function(t) {
                                                let e = i(t) - i(r),
                                                    a = o(t) - o(n) > 170;
                                                return r = t, a && (n = t), e
                                            },
                                            pointerUp: function(t) {
                                                if (!n || !r) return 0;
                                                let e = i(r) - i(n),
                                                    a = o(t) - o(n),
                                                    l = o(t) - o(r) > 170,
                                                    c = e / a;
                                                return a && !l && s(c) > .1 ? c : 0
                                            },
                                            readPoint: i
                                        }
                                    }(tr, o), tI, tC, tE, tA, tN, tw, v, ti, R, U, K, 0, Y),
                                    eventStore: tz,
                                    percentOfView: ti,
                                    index: tw,
                                    indexPrevious: tv,
                                    limit: ty,
                                    location: tI,
                                    offsetLocation: tL,
                                    previousLocation: tO,
                                    options: c,
                                    resizeHandler: function(t, e, n, r, o, i, a) {
                                        let c, u, d = [t].concat(r),
                                            f = [],
                                            p = !1;

                                        function g(t) {
                                            return o.measureSize(a.measure(t))
                                        }
                                        return {
                                            init: function(o) {
                                                i && (u = g(t), f = r.map(g), c = new ResizeObserver(n => {
                                                    (l(i) || i(o, n)) && function(n) {
                                                        for (let i of n) {
                                                            if (p) return;
                                                            let n = i.target === t,
                                                                a = r.indexOf(i.target),
                                                                l = n ? u : f[a];
                                                            if (s(g(n ? t : r[a]) - l) >= .5) {
                                                                o.reInit(), e.emit("resize");
                                                                break
                                                            }
                                                        }
                                                    }(n)
                                                }), n.requestAnimationFrame(() => {
                                                    d.forEach(t => c.observe(t))
                                                }))
                                            },
                                            destroy: function() {
                                                p = !0, c && c.disconnect()
                                            }
                                        }
                                    }(e, v, o, n, tr, Z, tt),
                                    scrollBody: tA,
                                    scrollBounds: function(t, e, n, r, o) {
                                        let i = o.measure(10),
                                            a = o.measure(50),
                                            l = x(.1, .99),
                                            c = !1;

                                        function u() {
                                            return !c && !!t.reachedAny(n.get()) && !!t.reachedAny(e.get())
                                        }
                                        return {
                                            shouldConstrain: u,
                                            constrain: function(o) {
                                                if (!u()) return;
                                                let c = t.reachedMin(e.get()) ? "min" : "max",
                                                    d = s(t[c] - e.get()),
                                                    f = n.get() - e.get(),
                                                    p = l.constrain(d / a);
                                                n.subtract(f * p), !o && s(f) < i && (n.set(t.constrain(n.get())), r.useDuration(25).useBaseFriction())
                                            },
                                            toggleActive: function(t) {
                                                c = !t
                                            }
                                        }
                                    }(ty, tL, tT, tA, ti),
                                    scrollLooper: function(t, e, n, r) {
                                        let {
                                            reachedMin: o,
                                            reachedMax: i
                                        } = x(e.min + .1, e.max + .1);
                                        return {
                                            loop: function(e) {
                                                if (!(1 === e ? i(n.get()) : -1 === e && o(n.get()))) return;
                                                let a = -1 * e * t;
                                                r.forEach(t => t.add(a))
                                            }
                                        }
                                    }(tm, ty, tL, [tI, tL, tO, tT]),
                                    scrollProgress: t$,
                                    scrollSnapList: tx.map(t$.get),
                                    scrollSnaps: tx,
                                    scrollTarget: tN,
                                    scrollTo: tE,
                                    slideLooper: function(t, e, n, r, o, i, a, l, c) {
                                        let s = d(o),
                                            u = d(o).reverse(),
                                            f = m(g(u, a[0]), n, !1).concat(m(g(s, e - a[0] - 1), -n, !0));

                                        function p(t, e) {
                                            return t.reduce((t, e) => t - o[e], e)
                                        }

                                        function g(t, e) {
                                            return t.reduce((t, n) => p(t, e) > 0 ? t.concat([n]) : t, [])
                                        }

                                        function m(o, a, s) {
                                            let u = i.map((t, n) => ({
                                                start: t - r[n] + .5 + a,
                                                end: t + e - .5 + a
                                            }));
                                            return o.map(e => {
                                                let r = s ? 0 : -n,
                                                    o = s ? n : 0,
                                                    i = u[e][s ? "end" : "start"];
                                                return {
                                                    index: e,
                                                    loopPoint: i,
                                                    slideLocation: y(-1),
                                                    translate: w(t, c[e]),
                                                    target: () => l.get() > i ? r : o
                                                }
                                            })
                                        }
                                        return {
                                            canLoop: function() {
                                                return f.every(({
                                                    index: t
                                                }) => .1 >= p(s.filter(e => e !== t), e))
                                            },
                                            clear: function() {
                                                f.forEach(t => t.translate.clear())
                                            },
                                            loop: function() {
                                                f.forEach(t => {
                                                    let {
                                                        target: e,
                                                        translate: n,
                                                        slideLocation: r
                                                    } = t, o = e();
                                                    o !== r.get() && (n.to(o), r.set(o))
                                                })
                                            },
                                            loopPoints: f
                                        }
                                    }(tr, to, tm, tc, ts, tp, tx, tL, n),
                                    slideFocus: t_,
                                    slidesHandler: (V = !1, {
                                        init: function(t) {
                                            Q && (_ = new MutationObserver(e => {
                                                !V && (l(Q) || Q(t, e)) && function(e) {
                                                    for (let n of e)
                                                        if ("childList" === n.type) {
                                                            t.reInit(), v.emit("slidesChanged");
                                                            break
                                                        }
                                                }(e)
                                            })).observe(e, {
                                                childList: !0
                                            })
                                        },
                                        destroy: function() {
                                            _ && _.disconnect(), V = !0
                                        }
                                    }),
                                    slidesInView: tD,
                                    slideIndexes: tk,
                                    slideRegistry: tj,
                                    slidesToScroll: tf,
                                    target: tT,
                                    translate: w(tr, e)
                                };
                            return tV
                        }(t, O, L, A, N, n, D);
                        return n.loop && !r.slideLooper.canLoop() ? e(Object.assign({}, n, {
                            loop: !1
                        })) : r
                    }(H), V([W, ...R.map(({
                        options: t
                    }) => t)]).forEach(t => z.add(t, "change", q)), H.active && (S.translate.to(S.location.get()), S.animation.init(), S.slidesInView.init(), S.slideFocus.init(Z), S.eventHandler.init(Z), S.resizeHandler.init(Z), S.slidesHandler.init(Z), S.options.loop && S.slideLooper.loop(), O.offsetParent && L.length && S.dragHandler.init(Z), I = $.init(Z, R)))
                }

                function q(t, e) {
                    let n = X();
                    J(), U(j({
                        startIndex: n
                    }, t), e), D.emit("reInit")
                }

                function J() {
                    S.dragHandler.destroy(), S.eventStore.clear(), S.translate.clear(), S.slideLooper.clear(), S.resizeHandler.destroy(), S.slidesHandler.destroy(), S.slidesInView.destroy(), S.animation.destroy(), $.destroy(), z.clear()
                }

                function K(t, e, n) {
                    H.active && !P && (S.scrollBody.useBaseFriction().useDuration(!0 === e ? 0 : H.duration), S.scrollTo.index(t, n || 0))
                }

                function X() {
                    return S.index.get()
                }
                let Z = {
                    canScrollNext: function() {
                        return S.index.add(1).get() !== X()
                    },
                    canScrollPrev: function() {
                        return S.index.add(-1).get() !== X()
                    },
                    containerNode: function() {
                        return O
                    },
                    internalEngine: function() {
                        return S
                    },
                    destroy: function() {
                        P || (P = !0, z.clear(), J(), D.emit("destroy"), D.clear())
                    },
                    off: B,
                    on: F,
                    emit: M,
                    plugins: function() {
                        return I
                    },
                    previousScrollSnap: function() {
                        return S.indexPrevious.get()
                    },
                    reInit: q,
                    rootNode: function() {
                        return t
                    },
                    scrollNext: function(t) {
                        K(S.index.add(1).get(), t, -1)
                    },
                    scrollPrev: function(t) {
                        K(S.index.add(-1).get(), t, 1)
                    },
                    scrollProgress: function() {
                        return S.scrollProgress.get(S.offsetLocation.get())
                    },
                    scrollSnapList: function() {
                        return S.scrollSnapList
                    },
                    scrollTo: K,
                    selectedScrollSnap: X,
                    slideNodes: function() {
                        return L
                    },
                    slidesInView: function() {
                        return S.slidesInView.get()
                    },
                    slidesNotInView: function() {
                        return S.slidesInView.get(!1)
                    }
                };
                return U(e, n), setTimeout(() => D.emit("init"), 0), Z
            }

            function C(t = {}, n = []) {
                let i = (0, e.useRef)(t),
                    a = (0, e.useRef)(n),
                    [l, c] = (0, e.useState)(),
                    [s, u] = (0, e.useState)(),
                    d = (0, e.useCallback)(() => {
                        l && l.reInit(i.current, a.current)
                    }, [l]);
                return (0, e.useEffect)(() => {
                    r(i.current, t) || (i.current = t, d())
                }, [t, d]), (0, e.useEffect)(() => {
                    ! function(t, e) {
                        if (t.length !== e.length) return !1;
                        let n = o(t),
                            i = o(e);
                        return n.every((t, e) => r(t, i[e]))
                    }(a.current, n) && (a.current = n, d())
                }, [n, d]), (0, e.useEffect)(() => {
                    if ("u" > typeof window && window.document && window.document.createElement && s) {
                        k.globalOptions = C.globalOptions;
                        let t = k(s, i.current, a.current);
                        return c(t), () => t.destroy()
                    }
                    c(void 0)
                }, [s, c]), [u, l]
            }
            k.globalOptions = void 0, C.globalOptions = void 0, t.s(["default", () => C], 14681)
        }, 61791, t => {
            "use strict";
            var e = t.i(60814);
            let n = e.default.h2.withConfig({
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
            let o = e.default.p.withConfig({
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
`, i = e.css `
  padding: 4.8rem 0;
  @media (min-width: ${({theme:t})=>t.global.tablet.maxWidth}) {
    padding: 9.6rem 0;
  }
`, a = e.css `
  padding: 1rem 0 8rem 0;
  @media (min-width: ${({theme:t})=>t.global.tablet.maxWidth}) {
    padding: 0 0 12rem 0;
  }
`;
            t.s(["H2", 0, n, "H2Large", 0, r, "P", 0, o, "productSectionPadding", 0, a, "sectionPadding", 0, i])
        }, 57706, t => {
            "use strict";
            var e = t.i(53147),
                n = t.i(60814);
            let r = (0, n.default)(e.default).withConfig({
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
  @media (min-width: ${({theme:t})=>t.globalV2.lg.minWidth}) {
    font-size: 15px;
    padding: 12px 16px;
    border-radius: 200px;
  }
`, o = n.default.button.withConfig({
                displayName: "CTAComponent__PrimaryCTA",
                componentId: "sc-87d441a3-1"
            })
            `
  --border: none;
  border: var(--border);
  padding: 10px 14px;
  border-radius: 40px;
  background: ${({color:t})=>"black"===t?"#000":"#007ff5"} !important;
  color: ${({color:t})=>"#fff"} !important;
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
      ${({color:t})=>"black"===t?"#333":"#6fbaff"} inset;
  }

  @media (min-width: 992px) {
    font-size: 15px;
    padding: 12px 16px;
    border-radius: 200px;
  }
`, i = n.default.button.withConfig({
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
`, a = n.default.button.withConfig({
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

    @media (min-width: ${({theme:t})=>t.globalV2.lg.minWidth}) {
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
`, l = (0, n.default)(e.default).withConfig({
                displayName: "CTAComponent__FlatLink",
                componentId: "sc-87d441a3-4"
            })
            `
  --border: none;
  --color: ${({color:t="#000"})=>t};
  padding: 10px 14px;
  color: ${({color:t="#000"})=>t};
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

    @media (min-width: ${({theme:t})=>t.globalV2.lg.minWidth}) {
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
`, c = n.default.button.withConfig({
                displayName: "CTAComponent__CTAButton",
                componentId: "sc-87d441a3-5"
            })
            `
    font-size: ${({theme:t})=>t.typographyV2.fontSize.mediumsmall};
    font-weight: 500;
    cursor: pointer;
    background: transparent;
    border: none;
    
    @media (min-width: ${({theme:t})=>t.globalV2.xxxl.minWidth}) {
        font-size: ${({theme:t})=>t.typographyV2.fontSize.small};
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
    @media (min-width: ${({theme:t})=>t.globalV2.lg.minWidth}) {
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

       @media (min-width: ${({theme:t})=>t.globalV2.lg.minWidth}) {
         bottom: -2px;
       }
     }

      &:hover {
        box-shadow: none;
    }
    }
     
`, s = n.css `
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50px;
  font-size: ${({theme:t})=>t.typographyV2.fontSize.mediumsmall};
  font-weight: 500;
  white-space: nowrap;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  letter-spacing: -0.42px;

  @media (min-width: ${({theme:t})=>t.globalV2.lg.minWidth}) {
    font-size: 16px;
  }
`;
            n.default.button.withConfig({
                displayName: "CTAComponent__SecondaryButton",
                componentId: "sc-87d441a3-6"
            })
            `
  ${s};
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
    @media (min-width: ${({theme:t})=>t.globalV2.sm.maxWidth}) {
      display: inline-flex !important;
    }
  }
`;
            let u = (0, n.default)(e.default).withConfig({
                displayName: "CTAComponent__BuyNowButton",
                componentId: "sc-87d441a3-7"
            })
            `
  ${s};
  padding: 12px 24px;
  color: #000000;
  background: #ffffff;

  &:hover {
    box-shadow: 0 0 12px rgba(255, 255, 255, 0.9);
  }

  @media (min-width: ${({theme:t})=>t.globalV2.lg.minWidth}) {
    width: 154px;
  }
`;
            t.s(["BuyNowButton", 0, u, "CTAButton", 0, c, "CTALink", 0, r, "FlatButton", 0, a, "FlatLink", 0, l, "PrimaryCTA", 0, o, "SecondaryCTA", 0, i])
        }, 86332, t => {
            "use strict";
            var e = t.i(91398),
                n = t.i(91788),
                r = t.i(60814),
                o = t.i(53147),
                i = t.i(57706);
            let a = r.css `
  border: 1px solid rgba(255, 255, 255, 0.25);
  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.06);
  -webkit-backdrop-filter: blur(6px);
  backdrop-filter: blur(6px);
`,
                l = (0, r.default)(i.CTAButton).withConfig({
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

  ${({variant:t})=>{switch(t){case"white":return r.css`
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
    background: rgba(255, 255, 255, 0.13); color: #ffffff; -
    webkit - backdrop - filter: blur(6 px); backdrop - filter: blur(6 px);

    &
    : disabled {
        background: rgba(255, 255, 255, 0.08);
        color: #ffffff;
        cursor: not - allowed;
        opacity: 0.4;
    }
    `;case"glassLight":return r.css`
    background: rgba(255, 255, 255, 0.08); color: #ffffff; $ {
        a
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
    background: rgba(255, 255, 255, 0.08); color: #000000;
          ${a}

          &:disabled {
            background: rgba(255, 255, 255, 0.05);
            color: # 000000; cursor: not - allowed; opacity: 0.4; border: 1 px solid rgba(255, 255, 255, 0.15);
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
`, c = r.default.span.withConfig({
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
`, s = r.default.span.withConfig({
    displayName: "ButtonV2__Label",
    componentId: "sc-9dff9bcb-2"
})
`
  display: inline-flex;
  align-items: center;
  line-height: 1; /* avoid extra baseline space */
  pointer-events: none; /* ensure clicks pass through to button */
`, u = n.default.forwardRef(({
    children: t,
    label: n,
    href: r,
    linkProps: i,
    componentType: a,
    onClick: u,
    startIcon: d,
    endIcon: f,
    ...p
}, g) => {
    let m = (a ? ? (r ? "link" : "button")) === "link",
        b = (0, e.jsxs)(l, {
            ref: g,
            onClick: u,
            ...p,
            type: p.type ? ? "button",
            children: [d ? (0, e.jsx)(c, {
                side: "start",
                children: d
            }) : null, (0, e.jsx)(s, {
                children: n ? ? t
            }), f ? (0, e.jsx)(c, {
                side: "end",
                children: f
            }) : null]
        });
    return m && r ? (0, e.jsx)(o.default, {
        href: r,
        ...i,
        children: b
    }) : b
});
u.displayName = "ButtonV2", t.s(["ButtonV2", 0, u])
}, 13691, t => {
"use strict";
let e = {
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

function n(t = {}) {
let r, o, i, a, l = null,
    c = 0,
    s = !1,
    u = !1,
    d = !1,
    f = !1;

function p() {
    if (!i) {
        if (b()) {
            d = !0;
            return
        }
        s || o.emit("autoplay:play"),
            function() {
                let {
                    ownerWindow: t
                } = o.internalEngine();
                t.clearTimeout(c), c = t.setTimeout(v, a[o.selectedScrollSnap()]), l = new Date().getTime(), o.emit("autoplay:timerset")
            }(), s = !0
    }
}

function g() {
    i || (s && o.emit("autoplay:stop"), function() {
        let {
            ownerWindow: t
        } = o.internalEngine();
        t.clearTimeout(c), c = 0, l = null, o.emit("autoplay:timerstopped")
    }(), s = !1)
}

function m() {
    if (b()) return d = s, g();
    d && p()
}

function b() {
    let {
        ownerDocument: t
    } = o.internalEngine();
    return "hidden" === t.visibilityState
}

function h() {
    u || g()
}

function x() {
    u || p()
}

function y() {
    u = !0, g()
}

function w() {
    u = !1, p()
}

function v() {
    let {
        index: t
    } = o.internalEngine(), e = t.clone().add(1).get(), n = o.scrollSnapList().length - 1, i = r.stopOnLastSnap && e === n;
    if (o.canScrollNext() ? o.scrollNext(f) : o.scrollTo(0, f), o.emit("autoplay:select"), i) return g();
    p()
}
return {
    name: "autoplay",
    options: t,
    init: function(l, c) {
        var s, u, d, b;
        let v, k;
        o = l;
        let {
            mergeOptions: C,
            optionsAtMedia: S
        } = c, I = C(e, n.globalOptions);
        if (r = S(C(I, t)), o.scrollSnapList().length <= 1) return;
        f = r.jump, i = !1, s = o, u = r.delay, v = s.scrollSnapList(), a = "number" == typeof u ? v.map(() => u) : u(v, s);
        let {
            eventStore: O,
            ownerDocument: L
        } = o.internalEngine(), T = !!o.internalEngine().options.watchDrag, A = (d = o, b = r.rootNode, k = d.rootNode(), b && b(k) || k);
        O.add(L, "visibilitychange", m), T && o.on("pointerDown", h), T && !r.stopOnInteraction && o.on("pointerUp", x), r.stopOnMouseEnter && O.add(A, "mouseenter", y), r.stopOnMouseEnter && !r.stopOnInteraction && O.add(A, "mouseleave", w), r.stopOnFocusIn && o.on("slideFocusStart", g), r.stopOnFocusIn && !r.stopOnInteraction && O.add(o.containerNode(), "focusout", p), r.playOnInit && p()
    },
    destroy: function() {
        o.off("pointerDown", h).off("pointerUp", x).off("slideFocusStart", g), g(), i = !0, s = !1
    },
    play: function(t) {
        void 0 !== t && (f = t), p()
    },
    stop: function() {
        s && g()
    },
    reset: function() {
        s && p()
    },
    isPlaying: function() {
        return s
    },
    timeUntilNext: function() {
        return l ? a[o.selectedScrollSnap()] - (new Date().getTime() - l) : null
    }
}
}
n.globalOptions = void 0, t.s(["default", () => n])
}, 28679, t => {
"use strict";
var e = t.i(91398);
t.s(["ChevronRight", 0, t => (0, e.jsx)("svg", {
className: t.className,
style: t.style,
width: "7",
height: "12",
viewBox: "0 0 7 12",
fill: "none",
xmlns: "http://www.w3.org/2000/svg",
children: (0, e.jsx)("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M0 1.29054L4.54713 6.01684L0.030223 10.8033L1.19687 12L7 6.07697L1.2566 0.0643415L0 1.29054Z",
    fill: t.fill || "black"
})
})])
}, 9674, t => {
"use strict";
var e = t.i(91398);
t.s(["PlayWhite", 0, t => (0, e.jsx)("svg", {
style: t.style,
className: t.className,
width: "40",
height: "40",
viewBox: "0 0 40 40",
fill: "none",
xmlns: "http://www.w3.org/2000/svg",
children: (0, e.jsx)("path", {
    d: "M28.99 21.7425L13.0825 30.9725C11.7325 31.755 10 30.8075 10 29.23V10.77C10 9.195 11.73 8.245 13.0825 9.03L28.99 18.26C29.2971 18.4353 29.5524 18.6887 29.7299 18.9945C29.9075 19.3003 30.001 19.6476 30.001 20.0012C30.001 20.3549 29.9075 20.7022 29.7299 21.008C29.5524 21.3138 29.2971 21.5672 28.99 21.7425V21.7425Z",
    fill: t.fill ? ? "white"
})
})])
}]);