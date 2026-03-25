(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 60298, e => {
    "use strict";
    var t, i = e.i(91398),
        a = e.i(60814),
        n = e.i(19231),
        o = e.i(4654),
        l = e.i(3828),
        r = e.i(40290),
        s = e.i(91788),
        d = e.i(57232),
        p = e.i(52488),
        c = e.i(6261),
        m = e.i(41595);
    let h = a.keyframes `
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
    
`,
        g = (0, a.default)(({
            className: e,
            title: t,
            src: a,
            srcResponsive: o,
            videoBorderRadius: l = "0px"
        }) => {
            let [r, h] = (0, s.useState)(!1), g = (0, m.useAutoPlayVideoOnIntersection)(), {
                width: u
            } = (0, d.useWindowSize)();
            return (0, i.jsxs)("section", {
                className: e,
                style: {
                    borderRadius: l,
                    overflow: t ? "unset" : "hidden"
                },
                children: [t ? (0, i.jsxs)(n.Container, {
                    children: [(0, i.jsx)(c.H2Large, {
                        children: t
                    }), (0, i.jsx)("p", {
                        children: "Get actionable reports and insights every day."
                    })]
                }) : null, (0, i.jsxs)("div", {
                    className: "video-container",
                    children: [u < 678 ? (0, i.jsx)("video", {
                        preload: "none",
                        autoPlay: !0,
                        loop: !1,
                        muted: !0,
                        playsInline: !0,
                        "webkit-playsinline": "true",
                        ref: g,
                        children: (0, i.jsx)("source", {
                            src: o,
                            type: "video/mp4"
                        })
                    }, "mobile") : (0, i.jsx)("video", {
                        preload: "none",
                        autoPlay: !0,
                        muted: !0,
                        loop: !1,
                        playsInline: !0,
                        "webkit-playsinline": "true",
                        ref: g,
                        children: (0, i.jsx)("source", {
                            src: a,
                            type: "video/mp4"
                        })
                    }, "desktop"), r ? (0, i.jsxs)("button", {
                        "data-buttontype": "animation replay",
                        className: "replay-btn",
                        onClick: () => {
                            g.current ? .play(), h(!1)
                        },
                        children: [(0, i.jsx)(p.ReplayIcon, {
                            fill: "black",
                            style: {
                                height: "16px",
                                width: "auto",
                                opacity: "0.7"
                            }
                        }), " ", "Replay"]
                    }) : null]
                })]
            })
        }).withConfig({
            displayName: "VIdeoForCarousal__VideoForCarousal",
            componentId: "sc-95b18a41-0"
        })
    `
  ${({title:e})=>e?c.SectionPadding:""}
  padding-bottom: 0 !important;
  background: rgba(228, 228, 228, 1);

  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  h2 {
    color: #000000;
    text-align: center;
  }

  p {
    color: rgba(0, 0, 0, 0.6);
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 120%;
    letter-spacing: -0.32px;
    text-align: center;

    @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
      font-size: 2.4rem;
      margin-top: ${({title:e})=>e?"1.2rem":"0"};
    }
  }

  .video-container {
    position: relative;
    margin-top: ${({title:e})=>e?"24px":"0"};
    position: absolute;
    top: 5%;
    left: 0;
    width: 100%;
    height: 90%;

    background: transparent;

    @media (min-width: 992px) {
      top: 1%;
      left: 5%;
      width: 90%;
      height: 90%;
      border-radius: 16px;
      overflow: hidden;
    }

    @media (min-width: 2000px) {
      top: 4%;
    }
  }

  video {
    width: 100%;
    height: 100%;
    background: transparent;
    mix-blend-mode: darken;

    @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
      width: 100%;
      height: 100%;
      object-fit: contain;
      // object-position: bottom 100px right 0px;
      margin-bottom: 10%;
      aspect-ratio: 1 / 1;
    }

    //  @media (min-width: 1400px) {
    //   object-position: bottom 80px right 0px;
    // }

    // @media (min-width: 1600px) {
    //   object-position: bottom 150px right 0px;
    // }
  }

  .replay-btn {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    display: flex;
    align-items: center;
    background: #ffffff;
    color: black;
    border-radius: 24px;
    padding: 8px;
    font-size: 1.1rem;
    font-weight: 500;
    letter-spacing: 3px;
    text-transform: uppercase;
    cursor: pointer;
    border: none;
    gap: 6px;

    animation: ${h} 0.3s ease-in-out forwards;
  }
`, u = a.default.button.withConfig({
        displayName: "TabControlledCarousel__NavButton",
        componentId: "sc-7a4a6cbc-0"
    })
    `
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.5);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1;

  &:hover {
    background: rgba(255, 255, 255, 0.8);
  }
`, f = (0, a.default)(u).withConfig({
        displayName: "TabControlledCarousel__PrevButton",
        componentId: "sc-7a4a6cbc-1"
    })
    `
  left: 10px;
  visibility: hidden;
`, x = (0, a.default)(u).withConfig({
        displayName: "TabControlledCarousel__NextButton",
        componentId: "sc-7a4a6cbc-2"
    })
    `
  right: 10px;
  visibility: hidden;
`, b = a.default.div.withConfig({
        displayName: "TabControlledCarousel__TabsContainer",
        componentId: "sc-7a4a6cbc-3"
    })
    `
  position: absolute;
  display: flex;
  bottom: 7%;
  width: 100%;
  left: 0;
  z-index: 2;

  @media (min-width: ${({theme:e})=>e.globalV2.lg.minWidth}) {
    bottom: 15%;
  }

  @media (min-width: ${({theme:e})=>e.globalV2.xxxl.minWidth}) {
    bottom: 18%;
  }
`, w = a.default.div.withConfig({
        displayName: "TabControlledCarousel__TabsBar",
        componentId: "sc-7a4a6cbc-4"
    })
    `
  margin: 0 auto;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  justify-content: space-between;
  border-radius: 30px;
  background: rgba(255, 255, 255, 0.4);
  box-shadow: 0px 3px 24px 0px rgba(0, 0, 0, 0.15);
  -webkit-backdrop-filter: blur(22px);
  backdrop-filter: blur(22px);
  position: relative;
  overflow: hidden;

  @media (min-width: ${({theme:e})=>e.globalV2.lg.minWidth}) {
    max-width: 70%;
    padding: 0 1px;
  }
`, y = a.default.span.withConfig({
        displayName: "TabControlledCarousel__FloaterSpan",
        componentId: "sc-7a4a6cbc-5"
    })
    `
  display: block;
  padding: 1px;
  min-height: 20px;
  min-width: 20px;
  background: #ffffff;
  position: absolute;
  top: 4px;
  left: 0px;
  border-radius: 40px;
  z-index: 1;
  transition: all 0.3s ease-in-out;

  @media (max-width: 991px) {
    margin: 0 4px;
  }
`, v = a.default.button.withConfig({
        displayName: "TabControlledCarousel__Tab",
        componentId: "sc-7a4a6cbc-6"
    })
    `
  position: relative;
  border-radius: 40px;
  background: transparent;
  box-shadow: 0px 0px 8px 0px transparent;
  display: flex;
  border: none;
  width: ${e=>e.active?"149.5px":"48px"};
  padding: 8px 24px;
  height: 100%;
  justify-content: center;
  align-items: center;
  gap: 8px;
  z-index: 2;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  white-space: nowrap;

  @media (min-width: ${({theme:e})=>e.globalV2.lg.minWidth}) {
    font-size: 16px;
    letter-spacing: -0.64px;
    width: 150px;
  }

  h5 {
    color: #000;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%; /* 14px */
    letter-spacing: -0.56px;
  }
`, j = a.default.div.withConfig({
        displayName: "TabControlledCarousel__IconContainer",
        componentId: "sc-7a4a6cbc-7"
    })
    `
  position: relative;
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;

  img {
    object-fit: contain;
  }
`, C = a.default.div.withConfig({
        displayName: "TabControlledCarousel__CarouselSlide",
        componentId: "sc-7a4a6cbc-8"
    })
    `
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100%;
  height: 100%;

  @media (min-width: ${({theme:e})=>e.globalV2.lg.minWidth}) {
    align-items: center;
    background: #e0e0e0;
    border-radius: 16px;
    overflow: hidden;
    margin-top: 19px;
  }

  & > section {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  img {
    position: absolute;
    top: 0;
    width: 100%;
    height: auto;
    object-fit: cover;

    @media (min-width: ${({theme:e})=>e.globalV2.lg.minWidth}) {
      height: 100%;
      width: 100%;
    }
  }
`, _ = a.default.div.withConfig({
        displayName: "TabControlledCarousel__CarouselContainer",
        componentId: "sc-7a4a6cbc-9"
    })
    `
  width: 100%;
  position: relative; /* Default for mobile */
  height: 100%;
  overflow: hidden;
  border-radius: 8px;

  @media (min-width: 992px) {
    position: sticky;
    border-radius: 16px;
    top: 0;
    height: 100vh; /* Full viewport height */
    display: flex;
    align-items: center;
    height: 100vh;
  }
`, k = a.default.div.withConfig({
        displayName: "TabControlledCarousel__CarouselTrack",
        componentId: "sc-7a4a6cbc-10"
    })
    `
  position: relative;
  display: flex;
  align-items: center;
  transition: ${e=>e.transition};
  transform: ${e=>e.transform};
  height: 100%;
  width: 100%;

  @media (min-width: ${({theme:e})=>e.globalV2.lg.minWidth}) {
    height: 100%;
    margin-top: 19px;
  }
`, I = ({
        tabs_data: e,
        currentIndex: t,
        goToSlide: a
    }) => {
        let n = (0, s.useRef)(null),
            o = (0, s.useRef)(null),
            l = (0, s.useRef)([]),
            {
                width: r
            } = (0, d.useWindowSize)(),
            p = r < 992;
        (0, s.useEffect)(() => {
            l.current = l.current.slice(0, e.length)
        }, [e]);
        let c = e => {
            if (!n.current || !o.current) return;
            let t = l.current.filter(Boolean),
                i = o.current.getBoundingClientRect();
            if (e >= 0 && e < t.length && t[e]) {
                let a = t[e];
                if (!a) return;
                let o = a.getBoundingClientRect();
                if (p) {
                    let t = o.height - 8,
                        i = 0;
                    if (0 === e) i = 0;
                    else
                        for (let t = 0; t < e; t++) i += 49.5;
                    n.current.style.width = "149.5px", n.current.style.height = `${t}px`, n.current.style.left = `${i}px`
                } else {
                    let e = o.width - 8,
                        t = o.height - 8,
                        a = o.left - i.left + 4;
                    n.current.style.width = `${e}px`, n.current.style.height = `${t}px`, n.current.style.left = `${a}px`
                }
            }
        };
        return (0, s.useEffect)(() => {
            let e = setTimeout(() => {
                c(t)
            }, 50);
            return () => clearTimeout(e)
        }, [t, r]), (0, s.useEffect)(() => {
            let e = () => {
                c(t)
            };
            return window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
        }, [t]), (0, i.jsx)(b, {
            children: (0, i.jsxs)(w, {
                ref: o,
                children: [(0, i.jsx)(y, {
                    ref: n
                }), e.map((e, n) => (0, i.jsxs)(v, {
                    active: n === t,
                    onClick: () => {
                        c(n), a(n)
                    },
                    ref: e => {
                        l.current[n] = e
                    },
                    children: [e ? .icon && e ? .alt ? (0, i.jsx)(j, {
                        children: e.icon
                    }) : null, !p || n === t && e.text ? (0, i.jsx)("h5", {
                        children: e.text
                    }) : null]
                }, n))]
            })
        })
    }, N = ({
        items: e
    }) => {
        let [t, a] = (0, s.useState)(0), [n, o] = (0, s.useState)(!1), [l, d] = (0, s.useState)(!0);
        (0, s.useEffect)(() => {
            l || requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    d(!0)
                })
            })
        }, [l, t]);
        let p = [...e.slice(e.length - 1), ...e, ...e.slice(0, 1)];
        return (0, i.jsxs)(_, {
            children: [(0, i.jsx)(k, {
                transform: `translateX(-${(t+1)*100}%)`,
                transition: l ? "transform 0.5s ease-in-out" : "none",
                children: p.map((e, t) => (0, i.jsx)(C, {
                    children: (0, i.jsx)(g, {
                        src: e.video,
                        srcResponsive: e.video_mbl,
                        videoBorderRadius: "16px"
                    })
                }, `${e.id}-${t}`))
            }), (0, i.jsx)(f, {
                onClick: () => {
                    n || (o(!0), 0 === t ? (a(-1), setTimeout(() => {
                        d(!1), a(e.length - 1), o(!1)
                    }, 500)) : (a(t - 1), setTimeout(() => {
                        o(!1)
                    }, 500)))
                },
                "aria-label": "Previous slide",
                children: (0, i.jsx)(r.CaretUp, {
                    style: {
                        transform: "rotate(-90deg)"
                    },
                    fill: "black"
                })
            }), (0, i.jsx)(x, {
                onClick: () => {
                    n || (o(!0), t === e.length - 1 ? (a(e.length), setTimeout(() => {
                        d(!1), a(0), o(!1)
                    }, 500)) : (a(t + 1), setTimeout(() => {
                        o(!1)
                    }, 500)))
                },
                "aria-label": "Next slide",
                children: (0, i.jsx)(r.CaretUp, {
                    style: {
                        transform: "rotate(90deg)"
                    },
                    fill: "black"
                })
            }), (0, i.jsx)(I, {
                goToSlide: e => {
                    n || a(e)
                },
                tabs_data: e,
                currentIndex: t
            })]
        })
    };
    var B = e.i(10116);
    let A = ["00000", "99999"],
        S = async e => {
            let t = {
                zip: void 0,
                error: void 0,
                valid: !1
            };
            if (5 !== e.length || A.includes(e)) return t.error = "Invalid ZIP code. Please enter a valid US ZIP code.", t.valid = !1, t;
            try {
                let i = new URL(`${B.API_BASE_URL}/api/web_v1/blood_vision/serviceability_status`);
                e && i.searchParams.append("zip_code", e);
                let a = await fetch(i.href, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
                if (console.log("response from servicability API ::::", a.status), 200 !== a.status) return t.error = "Invalid ZIP code. Please enter a valid US ZIP code.", t.valid = !1, t;
                let n = await a.json();
                n && n.data ? n.data.is_serviceable ? (t.zip = e, t.valid = !0, t.serviceabilityText = n.data.serviceability_text, t.availableModalities = n.data.available_modalities) : (t.error = n.data.serviceability_text, t.valid = !1) : (t.error = "Invalid response from server.", t.valid = !1)
            } catch (e) {
                console.error("Error validating ZIP code:", e), t.error = "An error occurred while validating the ZIP code.", t.valid = !1
            }
            return console.log("response from servicability API ::::", t), t
        };
    var P = e.i(57263),
        z = ((t = {}).AT_HOME = "at_home", t.WALK_IN = "walk_in", t);
    let T = (0, s.createContext)(void 0),
        $ = new Set(["us"]),
        L = ({
            children: e,
            country: t
        }) => {
            let a = $.has(t.toLowerCase()),
                [n, o] = (0, s.useState)(""),
                [r, d] = (0, s.useState)(!1),
                [p, c] = (0, s.useState)(!1),
                [m, h] = (0, s.useState)([]),
                [g, u] = (0, s.useState)(null),
                [f, x] = (0, s.useState)(null),
                [b, w] = (0, s.useState)([]),
                [y, v] = (0, s.useState)([]),
                [j, C] = (0, s.useState)(null),
                [_, k] = (0, s.useState)(!1),
                [I, N] = (0, s.useState)(!1),
                [A, S] = (0, s.useState)(!1),
                [z, L] = (0, s.useState)([]),
                [H, E] = (0, s.useState)(null),
                [M, V] = (0, s.useState)(null),
                [W, R] = (0, s.useState)(null),
                [U, F] = (0, s.useState)(null),
                [O, D] = (0, s.useState)(null),
                [G, Z] = (0, s.useState)(!0),
                [q, Y] = (0, s.useState)(!1),
                K = (0, l.useRouter)(),
                X = K.query.discount || null,
                Q = K.query.affiliateCode || null,
                J = !!("birthday" === Q && X),
                {
                    affiliateDetails: ee
                } = (0, P.useAffiliateMetadata)(Q || ""),
                [et] = (0, s.useState)(!1),
                [ei, ea] = (0, s.useState)(null),
                en = s.default.useMemo(() => {
                    if (!g) return {
                        type: "none",
                        amount: 0
                    };
                    if (g.price_split ? .discount && g.price_split.discount > 0) {
                        if ("birthday" === Q && X) return {
                            type: "birthday",
                            amount: g.price_split.discount
                        };
                        else if (Q && "birthday" !== Q) return {
                            type: "affiliate",
                            amount: g.price_split.discount
                        };
                        else if (ei && ei.active && "black_friday" === ei.type) return {
                            type: "black_friday",
                            amount: g.price_split.discount
                        }
                    }
                    return {
                        type: "none",
                        amount: 0
                    }
                }, [g, Q, X, ei]);
            (0, s.useEffect)(() => {
                V(null)
            }, [H]), (0, s.useEffect)(() => {
                x(g)
            }, [g]);
            let eo = async e => {
                    let t = !e && !n;
                    if (!a) return void d(!1);
                    let i = e || n;
                    c(!0);
                    try {
                        let e = new URL(`${B.API_BASE_URL}/api/web_v1/package_list_v2/`);
                        i && e.searchParams.append("zip_code", i), e.searchParams.append("modality", "walk_in"), K.query ? .affiliateCode && e.searchParams.append("affiliateCode", K.query.affiliateCode), X && e.searchParams.append("discount", X);
                        let a = await fetch(e.href, {
                                method: "GET",
                                headers: {
                                    "Content-Type": "application/json"
                                }
                            }),
                            n = await a.json();
                        "ok" === n.status && n.data ? .plans ? (h(n.data.plans), w(n.data.add_ons || []), d(!0), n.data.plans.length > 0 && !g && u(n.data.plans[0]), "additional_info" in n.data && "disclaimer" in n.data.additional_info ? D(n.data.additional_info.disclaimer) : D(null), n.data.default_discount ? ea(n.data.default_discount) : ea(null), t || o(i)) : t || (d(!1), h([]), u(null), w([]))
                    } catch (e) {
                        console.error("Error fetching packages:", e), t || (d(!1), h([]), u(null), w([]))
                    } finally {
                        c(!1)
                    }
                },
                el = async e => {
                    if (n && r) {
                        c(!0);
                        try {
                            let t = new URL(`${B.API_BASE_URL}/api/web_v1/package_list_v2/`);
                            t.searchParams.append("zip_code", n), t.searchParams.append("modality", e), K.query ? .affiliateCode && t.searchParams.append("affiliateCode", K.query.affiliateCode), X && t.searchParams.append("discount", X);
                            let i = await fetch(t.href, {
                                    method: "GET",
                                    headers: {
                                        "Content-Type": "application/json"
                                    }
                                }),
                                a = await i.json();
                            "ok" === a.status && a.data ? .plans ? (h(a.data.plans), w(a.data.add_ons || []), d(!0), a.data.plans.length > 0 && !g && u(a.data.plans[0]), "additional_info" in a.data && "disclaimer" in a.data.additional_info ? D(a.data.additional_info.disclaimer) : D(null), a.data.default_discount ? ea(a.data.default_discount) : ea(null)) : (d(!1), h([]), u(null), w([]))
                        } catch (e) {
                            console.error("Error fetching packages:", e), d(!1), h([]), u(null), w([])
                        } finally {
                            c(!1)
                        }
                    }
                },
                er = async () => {
                    if (!r) return void console.error("Cannot checkout with invalid US ZIP code:", n);
                    if (!g) return void console.error("No plan selected");
                    if (!a) return void console.error("Checkout only available in supported countries");
                    c(!0);
                    try {
                        let e = {
                                product_type: "blood_vision",
                                plan_id: [g.id],
                                add_on_ids: y,
                                country: t.toLowerCase(),
                                payment_source: M ? "flex" : "stripe",
                                success_url: window.location.origin + "/order/blood-vision/?session_id={CHECKOUT_SESSION_ID}",
                                cancel_url: window.location.href,
                                metadata: { ...K.query,
                                    ...ei && ei.active && "black_friday" === ei.type ? {
                                        affiliateCode: ei.code
                                    } : {}
                                }
                            },
                            i = await fetch(B.API_BASE_URL + "/api/v1/subscriptions", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                    Platform: "web"
                                },
                                body: JSON.stringify(e)
                            });
                        if (!i.ok) throw Error(`HTTP error! status: ${i.status}`);
                        let a = await i.json();
                        if ("ok" === a.status && a.data ? .checkout_url) window.location.href = a.data.checkout_url;
                        else throw Error("No checkout URL returned or invalid response format")
                    } catch (e) {
                        console.error("Error initiating checkout:", e)
                    } finally {
                        c(!1)
                    }
                };
            return (0, s.useEffect)(() => {
                let e = g ? .is_plan_campaign === !0,
                    t = !e;
                (console.log("🎯 Checkout Validation:", {
                    planName: g ? .name,
                    is_plan_campaign: g ? .is_plan_campaign,
                    isCampaignPlan: e,
                    hsaFsaRequired: t,
                    zipCode: n,
                    isZipValid: r,
                    selectedModality: H,
                    isHsaFsaIncluded: M
                }), n && 5 === n.length && r && null !== H && (!t || null !== M)) ? r && g && n && G && null !== H && (!t || null !== M) && N(!0): N(!1)
            }, [n, r, g, G, H, M]), (0, s.useEffect)(() => {
                if (!g) return;
                let e = g.price,
                    t = g.discount_applied || J,
                    i = e;
                t ? S(!0) : S(!1), y.forEach(e => {
                    let t = b.find(t => t.id === e);
                    t && (i += parseFloat(t.price.replace("$", "")))
                }), C(i), R(Number(g ? .price) / 12), F(Number(g ? .original_price) / 12)
            }, [g, y, b, r, J]), (0, s.useEffect)(() => {
                K.isReady && !_ && (eo(), k(!0))
            }, [K.isReady, _]), (0, s.useEffect)(() => {
                H && el(H)
            }, [H]), (0, i.jsx)(T.Provider, {
                value: {
                    zipCode: n,
                    isZipValid: r,
                    isLoading: p,
                    plans: m,
                    selectedPlan: g,
                    mainPlan: f,
                    addOns: b,
                    selectedAddOns: y,
                    total: j,
                    isCountrySupported: a,
                    availableModalityOptions: z,
                    selectedModality: H,
                    isHsaFsaIncluded: M,
                    setIsHsaFsaIncluded: V,
                    setSelectedModality: e => {
                        E(e)
                    },
                    setAvailableModalityOptions: e => {
                        L(e), H || (e.includes("walk_in") ? E("walk_in") : 1 === e.length && "at_home" === e[0] ? E("at_home") : E(null))
                    },
                    setZipCode: e => {
                        o(e), E(null), V(null), D(null), u(null)
                    },
                    handleZipCodeSubmit: eo,
                    toggleAddOn: e => {
                        v(t => t.includes(e) ? t.filter(t => t !== e) : [...t, e])
                    },
                    handleCheckout: er,
                    checkoutAllowed: I,
                    isZipValidUS: G,
                    setIsZipValidUS: Z,
                    showStrikedPrice: A,
                    zipDisclaimer: O,
                    hasCheckedOut: q,
                    setHasCheckedOut: Y,
                    pricePerMonth: W,
                    ogPricePerMonth: U,
                    discount: X,
                    showDiscount: J,
                    setSelectedPlan: u,
                    affiliateDetails: ee,
                    effectiveDiscount: en,
                    campaignActive: et,
                    defaultDiscount: ei
                },
                children: e
            })
        },
        H = () => {
            let e = (0, s.useContext)(T);
            if (void 0 === e) throw Error("useBloodVision must be used within a BloodVisionProvider");
            return e
        },
        E = a.keyframes `
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,
        M = (0, a.default)(({
            className: e,
            style: t,
            color: a,
            size: n = 24,
            strokeWidth: o = 2
        }) => {
            let l = a && (/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(a) || /^rgba?\(\s*(\d{1,3}\s*,\s*){2,3}\d{1,3}\s*(,\s*(0|1|0?\.\d+))?\)$/.test(a)) ? a : "rgba(0, 0, 0, 0.3)";
            return (0, i.jsx)("div", {
                className: e,
                style: { ...t,
                    width: n,
                    height: n,
                    borderWidth: o,
                    borderColor: `${l} transparent ${l} ${l}`,
                    borderRadius: "50%"
                }
            })
        }).withConfig({
            displayName: "CircularSpinner",
            componentId: "sc-35fce06d-0"
        })
    `
  border-radius: 50%;
  border-style: solid;
  animation: ${E} 1s linear infinite;
  border-top-left-radius: 999px;
  border-top-right-radius: 999px;
  border-bottom-left-radius: 999px;
  border-bottom-right-radius: 999px;
  border-radius: 50%;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;
    var V = e.i(72886),
        W = e.i(3251),
        R = e.i(13308);
    let U = a.default.div.withConfig({
        displayName: "ZipCodeInput__ZipCodeContainer",
        componentId: "sc-a3353964-0"
    })
    `
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-radius: 8px;
`;
    U.displayName = "ZipCodeContainer";
    let F = a.default.div.withConfig({
        displayName: "ZipCodeInput__ZipCodeHeader",
        componentId: "sc-a3353964-1"
    })
    `
  display: flex;
  justify-content: space-between;
  padding: 0;
`;
    F.displayName = "ZipCodeHeader";
    let O = a.default.label.withConfig({
        displayName: "ZipCodeInput__ZipCodeLabel",
        componentId: "sc-a3353964-2"
    })
    `
  position: relative;
  color: #808080;
  leading-trim: both;
  text-edge: cap;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  font-size: 15px;
  letter-spacing: -0.6px;
  margin-bottom: 10px;

  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    font-size: 14px;
    margin-bottom: unset;
    letter-spacing: -0.56px;
  }
`;
    O.displayName = "ZipCodeLabel";
    let D = a.default.button.withConfig({
        displayName: "ZipCodeInput__InfoIconContainer",
        componentId: "sc-a3353964-3"
    })
    `
  position: relative;
  cursor: pointer;
  bottom: 2px;
  border: none;
  cursor: pointer;
  background: transparent;
  padding: 0;
  right: 8px;

  svg {
    position: relative;
    bottom: 1.75px;
    @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
      top: 1.75px;
      bottom: unset;
    }
  }
`;
    D.displayName = "InfoIconContainer";
    let G = a.default.div.withConfig({
        displayName: "ZipCodeInput__InputContainer",
        componentId: "sc-a3353964-4"
    })
    `
  position: relative;
  border-radius: 8px;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
    G.displayName = "InputContainer";
    let Z = a.default.div.withConfig({
        displayName: "ZipCodeInput__InputWrapper",
        componentId: "sc-a3353964-5"
    })
    `
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 12px;
  background: #f8f8f8;
`;
    Z.displayName = "InputWrapper";
    let q = a.keyframes `
from {
  opacity: 0;
  transform: scale(0.5) translateY(var(--translateY));
}
to {
  opacity: 1;
  transform: scale(1) translateY(var(--translateY));
}`,
        Y = a.default.div.withConfig({
            displayName: "ZipCodeInput__ValidCheckmark",
            componentId: "sc-a3353964-6"
        })
    `
  position: absolute;
  right: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  top: 50%;
  --translateY: calc(-50% - 1px);
  transform: translateY(var(--translateY));

  animation: ${q} 0.2s ease-in-out forwards;
`;
    Y.displayName = "ValidCheckmark";
    let K = a.default.input.withConfig({
        displayName: "ZipCodeInput__ZipInput",
        componentId: "sc-a3353964-7"
    })
    `
  position: relative;
  display: flex;
  height: 49px;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 12px;
  background: #f8f8f8;
  border: none;
  padding: 14px 16px;
  padding-right: 80px;
  outline: none;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 16.8px */
  letter-spacing: -0.28px;

  &:focus {
    outline: none;
  }

  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    padding: 16px;
    padding-right: 80px;
  }
`;
    K.displayName = "ZipInput";
    let X = a.default.button.withConfig({
        displayName: "ZipCodeInput__ActionButton",
        componentId: "sc-a3353964-8"
    })
    `
  position: absolute;
  z-index: 1;
  right: 16px;
  color: rgba(0, 0, 0, 0.5);
  text-align: right;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 16.8px */
  letter-spacing: -0.28px;
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-skip-ink: none;
  text-decoration-thickness: auto;
  text-underline-offset: auto;
  text-underline-position: from-font;
  border: none;
  background: transparent;
  cursor: pointer;

  animation: ${q} 0.2s ease-in-out forwards;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
    X.displayName = "ActionButton";
    let Q = a.default.p.withConfig({
        displayName: "ZipCodeInput__HelpText",
        componentId: "sc-a3353964-9"
    })
    `
  color: #808080;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 15.6px */
  letter-spacing: -0.52px;
`;
    Q.displayName = "HelpText";
    let J = (0, a.default)(Q).withConfig({
        displayName: "ZipCodeInput__ErrorText",
        componentId: "sc-a3353964-10"
    })
    `
  color: red;
`;
    J.displayName = "ErrorText";
    let ee = (0, a.default)(({
        className: e
    }) => (0, i.jsxs)("div", {
        className: e,
        children: [(0, i.jsx)("h2", {
            children: "Blood Vision pricing may vary by state"
        }), (0, i.jsxs)("p", {
            children: ["Certain states, such as New York or New Jersey, have unique regulations and billing requirements for laboratory services. These regulations may mandate additional processing fees or impose restrictions on how lab services are billed.", (0, i.jsx)("br", {}), (0, i.jsx)("br", {}), " As a result, if you're completing your Blood Vision in a regulated state, you may incur an extra cost—billed separately by our lab partner, Bioreference. We recommend checking state-specific requirements before scheduling your lab appointment to understand any additional charges that may apply."]
        })]
    })).withConfig({
        displayName: "ZipCodeInput__ZipcodeInfoModal",
        componentId: "sc-a3353964-11"
    })
    `
  width: 100%;
  height: 100%;
  padding: 40px 16px 91px 16px;

  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    padding: 40px 40px 91px 40px;
    width: 100%;
    z-index: 5;
  }

  h2 {
    font-size: 3.2rem;
    font-weight: 500;
    margin-bottom: 0.8rem;
    font-style: normal;
    font-weight: 500;
    line-height: 120%; /* 48px */
    color: #000;
    @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
      font-size: 40px;
      letter-spacing: -1.6px;
    }
  }

  p {
    font-size: 1.7rem;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 19.6px */
    color: rgba(0, 0, 0, 0.7);
    @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
      color: rgba(0, 0, 0, 0.7);
      font-feature-settings: 'liga' off, 'clig' off;

      letter-spacing: -0.4px;
    }
  }

  hr {
    border: none;
    border-top: 1px solid #eee;
    margin: 24px 0;
  }

  p.disclaimer {
    color: rgba(0, 0, 0, 0.8);
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 110%; /* 16.5px */
    letter-spacing: -0.6px;

    a {
      text-decoration-line: underline;
    }
  }
`;
    ee.displayName = "ZipcodeInfoModal";
    let et = (0, s.forwardRef)(({
        zipCode: e,
        setZipCode: t,
        isLoading: a
    }, n) => {
        let o = H(),
            [l, r] = (0, s.useState)(""),
            [d, p] = (0, s.useState)(!1),
            [c, m] = (0, s.useState)(!1),
            [h, g] = (0, s.useState)(!1),
            u = (0, s.useRef)(null),
            f = (0, s.useRef)(null);
        (0, s.useImperativeHandle)(n, () => ({
            focus: () => {
                u.current && u.current.focus()
            },
            scrollIntoView: () => {
                f.current && (f.current.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                }), f.current.classList.add("highlight"), setTimeout(() => {
                    f.current && f.current.classList.remove("highlight")
                }, 1500), u.current && u.current.focus())
            }
        }));
        let x = async () => {
            m(!0), r("");
            let {
                zip: i,
                error: a,
                valid: n,
                availableModalities: l
            } = await S(e);
            p(n), m(!1), n ? (t(i || e), p(!0), g(!0), o.setAvailableModalityOptions((l || []).map(e => e)), r(""), o.setIsZipValidUS ? .(!0)) : (r(a || "Invalid ZIP code"), o.setAvailableModalityOptions([]), p(!1), g(!1))
        };
        (0, s.useEffect)(() => {
            5 === e.length ? (r(""), x()) : (p(!1), o.setAvailableModalityOptions([]))
        }, [e]);
        let b = (0, s.useMemo)(() => 5 !== e.length || a || c || !d, [e, a, c, d]),
            w = (0, s.useContext)(W.OffersModalNewContext);
        return (0, i.jsxs)(U, {
            ref: f,
            children: [(0, i.jsxs)(F, {
                children: [(0, i.jsx)(O, {
                    htmlFor: "zipCode",
                    children: "Enter zip code to check availability."
                }), (0, i.jsx)(D, {
                    onClick: () => {
                        w.set((0, i.jsx)(R.ImageModal, {
                            children: (0, i.jsx)(ee, {})
                        })), w.show()
                    },
                    children: (0, i.jsx)(V.InfoIcon, {
                        style: {
                            width: "1.6rem",
                            height: "auto"
                        },
                        fill: "#000"
                    })
                })]
            }), (0, i.jsx)(G, {
                children: (0, i.jsxs)(Z, {
                    children: [c ? (0, i.jsx)(Y, {
                        children: (0, i.jsx)(M, {
                            color: "rgba(0,0,0,0.5)",
                            size: 16,
                            strokeWidth: 2
                        })
                    }) : d && h ? (0, i.jsx)(Y, {
                        children: (0, i.jsx)("svg", {
                            width: "16",
                            height: "16",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0, i.jsx)("path", {
                                d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z",
                                fill: "#4CAF50"
                            })
                        })
                    }) : (0, i.jsx)(X, {
                        onClick: x,
                        disabled: b,
                        children: "Submit"
                    }), (0, i.jsx)(K, {
                        id: "zipCode",
                        type: "text",
                        inputMode: "numeric",
                        pattern: "[0-9]*",
                        placeholder: "Enter ZIP code",
                        value: e,
                        maxLength: 5,
                        onChange: e => {
                            let i = e.target.value.replace(/\D/g, "").slice(0, 5);
                            h && g(!1), t(i), o.setIsZipValidUS ? .(!1)
                        },
                        onKeyDown: e => {
                            "Enter" === e.key && d && x()
                        },
                        disabled: a,
                        $isValid: d,
                        ref: u
                    })]
                })
            }), l ? d ? null : (0, i.jsx)(J, {
                children: l
            }) : (0, i.jsx)(Q, {
                children: "* Blood Vision pricing may vary based on your state and lab test location."
            })]
        })
    });
    et.displayName = "ZipCodeInput";
    var ei = e.i(21666);
    let ea = a.default.div.withConfig({
        displayName: "FeatureList__FeatureListContainer",
        componentId: "sc-a647b0b1-0"
    })
    `
  position: relative;
  background-color: ${e=>e.isSelected?"#f8f8f8":"#fff"};
  border: 1px solid
    ${e=>e.isSelected?"rgba(0,106,245,1)":"rgba(0, 0, 0, 0.12)"};
  padding: 16px 16px 12px;
  border-radius: 0.8rem;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${e=>e.isSelected?"rgba(0,106,245,1)":"rgba(0, 0, 0, 0.22)"};
  }

  .top-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;

    .image-container {
      display: flex;
      align-items: center;
      gap: 8px;

      @media (max-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
        margin-left: -12px;
      }

      img {
        width: 42px;
        height: 56px;

        @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
          width: 48px;
          height: 64px;
        }
      }

      div.text-container {
        display: flex;
        flex-direction: column;
        gap: 5px;
      }
    }

    h3.head {
      color: #000;
      font-size: 15px;
      font-style: normal;
      font-weight: 500;
      line-height: 140%; /* 21px */
      letter-spacing: -0.6px;
      max-width: 16ch;
      overflow: hidden;
    }
    p.subhead {
      color: #000;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 120%;
      letter-spacing: -0.52px;
      // margin-top: 4px;
      max-width: 32ch;
    }
  }
`, en = a.default.div.withConfig({
        displayName: "FeatureList__Feature",
        componentId: "sc-a647b0b1-1"
    })
    `
  display: flex;
  align-items: flex-start;
  padding: 0.8rem 0;
`, eo = a.default.div.withConfig({
        displayName: "FeatureList__CheckIcon",
        componentId: "sc-a647b0b1-2"
    })
    `
  color: #000;
  margin-right: 8px;
`, el = a.default.div.withConfig({
        displayName: "FeatureList__FeatureContent",
        componentId: "sc-a647b0b1-3"
    })
    `
  width: 100%;
`, er = a.default.h4.withConfig({
        displayName: "FeatureList__FeatureTitle",
        componentId: "sc-a647b0b1-4"
    })
    `
  color: #000;
  font-feature-settings: 'liga' off, 'clig' off;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -0.4px;
`, es = a.default.div.withConfig({
        displayName: "FeatureList__Divider",
        componentId: "sc-a647b0b1-5"
    })
    `
  height: 1px;
  background-color: #e0e0e0;
  margin: ${({pixelPadding:e})=>e?`
    $ {
        e
    }
    0 `:"24px 0"};
`, ed = a.default.div.withConfig({
        displayName: "FeatureList__XLDivider",
        componentId: "sc-a647b0b1-6"
    })
    `
  height: 1px;
  background-color: #e0e0e0;
  margin: 3.2rem 0;

  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    margin: 4.8rem 0;
  }
`, ep = a.default.div.withConfig({
        displayName: "FeatureList__PricingContainer",
        componentId: "sc-a647b0b1-7"
    })
    `
  display: flex;
  flex-direction: column;
  margin: 0;
  gap: 4px;
  justify-content: center;
  align-items: flex-end;

  text-align: right;

  p.yearly-price,
  p.half-yearly-price {
    color: #000;
    font-variant-numeric: lining-nums tabular-nums;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 120%; /* 24px */
    letter-spacing: -0.8px;

    span {
      font-variant-numeric: lining-nums tabular-nums;
      font-size: 14px;
      letter-spacing: -0.56px;
    }

    span.discounted-price {
      color: #000;
      font-variant-numeric: lining-nums tabular-nums;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 120%; /* 19.2px */
      letter-spacing: -0.64px;

      span {
        color: #000;
        font-variant-numeric: lining-nums tabular-nums;
        font-size: 12px;
        letter-spacing: -0.48px;
      }
    }
  }

  p.plan-tenure-total-price {
    color: #808080;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 16.8px */
    letter-spacing: -0.56px;
  }
`, ec = a.default.div.withConfig({
        displayName: "FeatureList__PlanWrapper",
        componentId: "sc-a647b0b1-8"
    })
    `
  display: flex;
  flex-direction: column;
  gap: 16px;
`, em = a.default.div.withConfig({
        displayName: "FeatureList__PopularTag",
        componentId: "sc-a647b0b1-9"
    })
    `
  width: fit-content;
  margin-bottom: 8px;
  padding: 6px 16px;
  background: #eeeeee;
  border-radius: 0 0 0.8rem 0;
  color: #003ae8;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 2.16px;
  margin: -16px -16px 8px -16px;
  text-transform: uppercase;
`, eh = () => {
        let {
            plans: e,
            selectedPlan: t,
            setSelectedPlan: a
        } = H();
        return e && e.length > 0 ? (0, i.jsx)(ec, {
            children: e.map((e, n) => {
                let o = e ? .show_tag,
                    l = t ? .id === e.id,
                    r = e.discount_applied,
                    s = {
                        monthlyPrice: e.price_per_month,
                        originalMonthlyPrice: e.original_price_per_month,
                        annualPrice: e.price,
                        originalAnnualPrice: e.original_price
                    },
                    d = !0 === e.is_plan_campaign,
                    p = e.plan_details.map(e => ({
                        title: e.title,
                        description: e.description
                    }));
                return (0, i.jsxs)(ea, {
                    isSelected: l,
                    onClick: () => {
                        a(e)
                    },
                    children: [o && !d ? (0, i.jsx)(em, {
                        children: "POPULAR"
                    }) : null, d ? (0, i.jsx)(em, {
                        children: "LIMITED TIME"
                    }) : null, (0, i.jsxs)("div", {
                        className: "top-section",
                        children: [(0, i.jsxs)("div", {
                            className: "image-container",
                            children: [(0, i.jsx)(ei.CustomImage, {
                                src: 0 === n ? "web_v2/blood-vision/icons/plans/head-0.png" : "web_v2/blood-vision/icons/plans/head-1.png",
                                alt: "Blood vision Plan image",
                                height: "64",
                                width: "48"
                            }), (0, i.jsxs)("div", {
                                className: "text-container",
                                children: [(0, i.jsx)("h3", {
                                    className: "head",
                                    children: e.name
                                }), (0, i.jsx)("p", {
                                    className: "subhead",
                                    children: e.subtitle
                                })]
                            })]
                        }), (0, i.jsxs)(ep, {
                            children: [(0, i.jsxs)("p", {
                                className: "yearly-price",
                                children: [r && (0, i.jsxs)("span", {
                                    style: {
                                        textDecoration: "line-through",
                                        marginRight: "4px",
                                        color: "#808080",
                                        fontSize: "14px"
                                    },
                                    children: ["$", s.originalAnnualPrice]
                                }), !r && (0, i.jsxs)("span", {
                                    style: {
                                        fontSize: "16px"
                                    },
                                    children: ["$", s.annualPrice]
                                }), r && (0, i.jsxs)("span", {
                                    style: {
                                        fontSize: "16px"
                                    },
                                    children: ["$", s.annualPrice]
                                })]
                            }), (0, i.jsx)("p", {
                                className: "plan-tenure-total-price",
                                children: s.annualPrice > 0 ? (0, i.jsx)(i.Fragment, {
                                    children: (0, i.jsxs)("span", {
                                        style: {
                                            color: "#808080",
                                            fontSize: "14px"
                                        },
                                        children: [e.name.toLocaleLowerCase().includes("annual") ? "Renews annually" : "Renews half-yearly", " "]
                                    })
                                }) : "Blood Vision campaign discount applied"
                            })]
                        })]
                    }), (0, i.jsx)(es, {
                        pixelPadding: "16px"
                    }), p.map((e, t) => (0, i.jsxs)(en, {
                        children: [(0, i.jsx)(eo, {
                            style: {
                                marginTop: "-2px"
                            },
                            children: (0, i.jsx)("svg", {
                                width: "16",
                                height: "16",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: (0, i.jsx)("path", {
                                    d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z",
                                    fill: "currentColor"
                                })
                            })
                        }), (0, i.jsx)(el, {
                            children: (0, i.jsx)(er, {
                                children: e.title
                            })
                        })]
                    }, t))]
                }, e.id)
            })
        }) : null
    };
    var eg = e.i(68354);
    let eu = [{
            key: "essential",
            title: "Essential plan",
            panelHeader: "60+ Biomarkers. 8 Health Panels.",
            panels: [{
                label: "Metabolic Health",
                available: !0,
                imageUrl: "web_v2/blood-vision/test-badges/MetabolicHealth.png",
                availableBiomarkers: ["Fasting Glucose", "General Insulin", "HbA1c"],
                unavailableBiomarkers: []
            }, {
                label: "Cardiovascular Health",
                available: !0,
                imageUrl: "web_v2/blood-vision/test-badges/CardiovascularHealth.png",
                availableBiomarkers: ["Triglycerides", "Total Cholesterol", "HDL Cholesterol", "LDL Cholesterol", "Total Cholesterol/HDL Ratio", "Non-HDL Cholesterol", "Homocysteine", "Hs-CRP"],
                unavailableBiomarkers: ["Lipoprotein (a)", "Apolipoprotein B"]
            }, {
                label: "Blood Health",
                available: !0,
                imageUrl: "web_v2/blood-vision/test-badges/BloodHealth.png",
                availableBiomarkers: ["White Blood Cell Count", "RBC Count", "Hemoglobin", "Hematocrit", "Mean Corpuscular Volume", "Mean Corpuscular Hemoglobin", "Mean Corpuscular Hemoglobin Concentration", "Red Cell Distribution Width", "Platelet Count", "Mean Platelet Volume"],
                unavailableBiomarkers: []
            }, {
                label: "Immune Regulation",
                available: !0,
                imageUrl: "web_v2/blood-vision/test-badges/ImmuneRegulation.png",
                availableBiomarkers: ["Neutrophils", "Band Neutrophils %", "Absolute Band Neutrophils", "Metamyelocytes %", "Absolute Metamyelocytes", "Myelocytes %", "Absolute Myelocytes", "Absolute Neutrophil Count", "Lymphocytes", "Variant Lymphocytes %", "Absolute Lymphocyte Count", "Monocytes", "Absolute Monocyte Count", "Eosinophils", "Absolute Eosinophil Count", "Basophils", "Absolute Basophil Count", "Blast Cell Absolute Count", "Nucleated RBCs per 100 WBCs", "Nucleated RBCs Absolute Count"],
                unavailableBiomarkers: []
            }, {
                label: "Thyroid Health",
                available: !0,
                imageUrl: "web_v2/blood-vision/test-badges/Thyroid.png",
                availableBiomarkers: ["TSH"],
                unavailableBiomarkers: ["Free T3", "Free T4", "Thyroglobulin Antibodies", "Anti-TPO"]
            }, {
                label: "Kidney Health",
                available: !0,
                imageUrl: "web_v2/blood-vision/test-badges/KidneyHealth.png",
                availableBiomarkers: ["Blood Urea Nitrogen", "Serum Creatinine", "BUN/Creatinine Ratio", "eGFR", "Sodium", "Potassium", "Chloride", "Carbon Dioxide", "Uric Acid"],
                unavailableBiomarkers: []
            }, {
                label: "Liver Health",
                available: !0,
                imageUrl: "web_v2/blood-vision/test-badges/LiverHealth.png",
                availableBiomarkers: ["Total Bilirubin", "Alkaline Phosphatase", "SGOT", "SGPT", "Total Protein", "Albumin", "Globulin", "Albumin/Globulin Ratio"],
                unavailableBiomarkers: ["GGT"]
            }, {
                label: "Nutrients",
                available: !0,
                imageUrl: "web_v2/blood-vision/test-badges/Nutrients.png",
                availableBiomarkers: ["Calcium", "Vitamin D"],
                unavailableBiomarkers: ["Magnesium RBC", "Zinc", "Uric Acid", "Methylmalonic Acid"]
            }, {
                label: "Advanced Lipid Analysis",
                available: !1,
                imageUrl: "web_v2/blood-vision/test-badges/AdvancedLipidAnalysis.png",
                availableBiomarkers: [],
                unavailableBiomarkers: ["LDL Particle Number", "LDL Small Particle Number", "LDL Particle Size", "HDL Particle Number", "HDL Large", "HDL Size", "Large VLDL Particle Number", "VLDL Particle Size"]
            }, {
                label: "Inflammation",
                available: !1,
                imageUrl: "web_v2/blood-vision/test-badges/Inflammation.png",
                availableBiomarkers: [],
                unavailableBiomarkers: ["Hs-CRP", "Homocysteine"]
            }, {
                label: "Hormone Health",
                available: !1,
                imageUrl: "web_v2/blood-vision/test-badges/HormoneHealth.png",
                availableBiomarkers: [],
                unavailableBiomarkers: ["Cortisol", "Testosterone - Total", "Testosterone - Free", "SHBG", "DHEAS", "Estradiol", "Follicle Stimulating Hormone", "Lutenizing Hormone", "Prolactin", "Anti Mullerien Hormone", "Leptin"]
            }, {
                label: "Iron Status",
                available: !1,
                imageUrl: "web_v2/blood-vision/test-badges/IronStatus.png",
                availableBiomarkers: [],
                unavailableBiomarkers: ["Total Iron", "TIBC", "Transferrin Saturation", "Ferritin"]
            }, {
                label: "Pancreatic Health",
                available: !1,
                imageUrl: "web_v2/blood-vision/test-badges/PancreaticHealth.png",
                availableBiomarkers: [],
                unavailableBiomarkers: ["Amylase", "Lipase"]
            }, {
                label: "Omega Fatty Acids",
                available: !1,
                imageUrl: "web_v2/blood-vision/test-badges/OmegaFattyAcids.png",
                availableBiomarkers: [],
                unavailableBiomarkers: ["EPA + DPA + DHA", "Arachidonic Acid/EPA Ratio", "Omega-6/Omega-3 Ratio", "Omega-3 Total", "EPA %", "DPA %", "DHA %", "Omega-6 Total", "Arachidonic Acid", "Linoleic Acid"]
            }, {
                label: "Heavy Metals",
                available: !1,
                imageUrl: "web_v2/blood-vision/test-badges/HeavyMetals.png",
                availableBiomarkers: [],
                unavailableBiomarkers: ["Mercury", "Lead"]
            }, {
                label: "Autoimmunity",
                available: !1,
                imageUrl: "web_v2/blood-vision/test-badges/Autoimmunity.png",
                availableBiomarkers: [],
                unavailableBiomarkers: ["RA Factor"]
            }, {
                label: "Urine Analysis",
                available: !1,
                imageUrl: "web_v2/blood-vision/test-badges/Urine.png",
                availableBiomarkers: [],
                unavailableBiomarkers: ["Urine Specific Gravity", "Urine pH", "Urine WBC", "Urine RBC", "Squamous Epithelial Cells", "Transitional Epithelial Cells", "Renal Epithelial Cells", "Amorphous Sediment", "Yeast", "Calcium Oxalate Crystals", "Triple Phosphate Crystals", "Uric Acid Crystals", "Hyaline Cast", "Granular Casts", "Urinary Casts", "Glucose (Urine)", "Protein (Urine)", "Nitrite (Urine)", "Ketone (Urine)", "Bilirubin (Urine)", "Blood (Urine)"]
            }]
        }, {
            key: "comprehensive",
            title: "Annual Plan",
            panelHeader: "100+ Biomarkers. 17 Health Panels.",
            panels: [{
                label: "Metabolic Health",
                available: !0,
                imageUrl: "web_v2/blood-vision/test-badges/MetabolicHealth.png",
                availableBiomarkers: ["Fasting Glucose", "General Insulin", "HbA1c"],
                unavailableBiomarkers: []
            }, {
                label: "Cardiovascular Health",
                available: !0,
                imageUrl: "web_v2/blood-vision/test-badges/CardiovascularHealth.png",
                availableBiomarkers: ["Triglycerides", "Total Cholesterol", "HDL Cholesterol", "LDL Cholesterol", "Total Cholesterol/HDL Ratio", "Non-HDL Cholesterol", "Lipoprotein (a)", "Apolipoprotein B"],
                unavailableBiomarkers: []
            }, {
                label: "Blood Health",
                available: !0,
                imageUrl: "web_v2/blood-vision/test-badges/BloodHealth.png",
                availableBiomarkers: ["White Blood Cell Count", "RBC Count", "Hemoglobin", "Hematocrit", "Mean Corpuscular Volume", "Mean Corpuscular Hemoglobin", "Mean Corpuscular Hemoglobin Concentration", "Red Cell Distribution Width", "Platelet Count", "Mean Platelet Volume"],
                unavailableBiomarkers: []
            }, {
                label: "Immune Regulation",
                available: !0,
                imageUrl: "web_v2/blood-vision/test-badges/ImmuneRegulation.png",
                availableBiomarkers: ["Neutrophils", "Band Neutrophils %", "Absolute Band Neutrophils", "Metamyelocytes %", "Absolute Metamyelocytes", "Myelocytes %", "Absolute Myelocytes", "Absolute Neutrophil Count", "Lymphocytes", "Variant Lymphocytes %", "Absolute Lymphocyte Count", "Monocytes", "Absolute Monocyte Count", "Eosinophils", "Absolute Eosinophil Count", "Basophils", "Absolute Basophil Count", "Blast Cell Absolute Count", "Nucleated RBCs per 100 WBCs", "Nucleated RBCs Absolute Count"],
                unavailableBiomarkers: []
            }, {
                label: "Thyroid Health",
                available: !0,
                imageUrl: "web_v2/blood-vision/test-badges/Thyroid.png",
                availableBiomarkers: ["TSH", "Free T3", "Free T4", "Thyroglobulin Antibodies", "Anti-TPO"],
                unavailableBiomarkers: []
            }, {
                label: "Kidney Health",
                available: !0,
                imageUrl: "web_v2/blood-vision/test-badges/KidneyHealth.png",
                availableBiomarkers: ["Blood Urea Nitrogen", "Serum Creatinine", "eGFR", "Sodium", "Potassium", "Chloride", "Carbon Dioxide"],
                unavailableBiomarkers: []
            }, {
                label: "Liver Health",
                available: !0,
                imageUrl: "web_v2/blood-vision/test-badges/LiverHealth.png",
                availableBiomarkers: ["Total Bilirubin", "Alkaline Phosphatase", "SGOT", "SGPT", "GGT", "Total Protein", "Albumin", "Globulin", "Albumin/Globulin Ratio"],
                unavailableBiomarkers: []
            }, {
                label: "Nutrients",
                available: !0,
                imageUrl: "web_v2/blood-vision/test-badges/Nutrients.png",
                availableBiomarkers: ["Calcium", "Magnesium RBC", "Zinc", "Uric Acid", "Vitamin D", "Methylmalonic Acid"],
                unavailableBiomarkers: []
            }, {
                label: "Advanced Lipid Analysis",
                available: !0,
                imageUrl: "web_v2/blood-vision/test-badges/AdvancedLipidAnalysis.png",
                availableBiomarkers: ["LDL Particle Number", "LDL Small Particle Number", "LDL Particle Size", "HDL Particle Number", "HDL Large", "HDL Size", "Large VLDL Particle Number", "VLDL Particle Size"],
                unavailableBiomarkers: []
            }, {
                label: "Inflammation",
                available: !0,
                imageUrl: "web_v2/blood-vision/test-badges/Inflammation.png",
                availableBiomarkers: ["Hs-CRP", "Homocysteine"],
                unavailableBiomarkers: []
            }, {
                label: "Hormone Health",
                available: !0,
                imageUrl: "web_v2/blood-vision/test-badges/HormoneHealth.png",
                availableBiomarkers: ["Cortisol", "Testosterone - Total", "Testosterone - Free", "SHBG", "DHEAS", "Estradiol", "Follicle Stimulating Hormone", "Lutenizing Hormone", "Prolactin", "Anti Mullerien Hormone", "Leptin"],
                unavailableBiomarkers: []
            }, {
                label: "Iron Status",
                available: !0,
                imageUrl: "web_v2/blood-vision/test-badges/IronStatus.png",
                availableBiomarkers: ["Total Iron", "TIBC", "Transferrin Saturation", "Ferritin"],
                unavailableBiomarkers: []
            }, {
                label: "Pancreatic Health",
                available: !0,
                imageUrl: "web_v2/blood-vision/test-badges/PancreaticHealth.png",
                availableBiomarkers: ["Amylase", "Lipase"],
                unavailableBiomarkers: []
            }, {
                label: "Omega Fatty Acids",
                available: !0,
                imageUrl: "web_v2/blood-vision/test-badges/OmegaFattyAcids.png",
                availableBiomarkers: ["EPA + DPA + DHA", "Arachidonic Acid/EPA Ratio", "Omega-6/Omega-3 Ratio", "Omega-3 Total", "EPA %", "DPA %", "DHA %", "Omega-6 Total", "Arachidonic Acid", "Linoleic Acid"],
                unavailableBiomarkers: []
            }, {
                label: "Heavy Metals",
                available: !0,
                imageUrl: "web_v2/blood-vision/test-badges/HeavyMetals.png",
                availableBiomarkers: ["Mercury", "Lead"],
                unavailableBiomarkers: []
            }, {
                label: "Autoimmunity",
                available: !0,
                imageUrl: "web_v2/blood-vision/test-badges/Autoimmunity.png",
                availableBiomarkers: ["RA Factor"],
                unavailableBiomarkers: []
            }, {
                label: "Urine Analysis",
                available: !0,
                imageUrl: "web_v2/blood-vision/test-badges/Urine.png",
                availableBiomarkers: ["Urine Specific Gravity", "Urine pH", "Urine WBC", "Urine RBC", "Squamous Epithelial Cells", "Transitional Epithelial Cells", "Renal Epithelial Cells", "Amorphous Sediment", "Yeast", "Calcium Oxalate Crystals", "Triple Phosphate Crystals", "Uric Acid Crystals", "Hyaline Cast", "Granular Casts", "Urinary Casts", "Glucose (Urine)", "Protein (Urine)", "Nitrite (Urine)", "Ketone (Urine)", "Bilirubin (Urine)", "Blood (Urine)"],
                unavailableBiomarkers: []
            }]
        }],
        ef = [{
            key: "essential",
            title: "Essential Plan",
            subtitle: "60+ biomarkers test with Blood Age, Clinician Summary and Supplement Report.",
            price: "$99",
            perYear: " every 6 months",
            list: [{
                label: "Foundational Test (60+ biomarkers)",
                available: !0
            }, {
                label: "Follow-up test",
                available: !1
            }, {
                label: "Clinical Summary with Supplement Report",
                available: !0
            }, {
                label: "Blood Age",
                available: !0
            }]
        }, {
            key: "comprehensive",
            title: "Annual Plan",
            subtitle: "Comprehensive 100+ biomarker blood and urine test, plus a 60+ biomarker follow-up test, with Advanced Blood Age, Clinician Summary and Supplement Report",
            price: "$499",
            perYear: " anually",
            list: [{
                label: "Comprehensive Annual Test (100+ biomarkers)",
                available: !0
            }, {
                label: "Follow-up test (60+ biomarkers)",
                available: !0
            }, {
                label: "Clinician Summary and Supplement Report",
                available: !0
            }, {
                label: "Advanced Blood Age",
                available: !0
            }]
        }];
    var ex = e.i(22367);
    let eb = a.default.div.withConfig({
        displayName: "Popover__PopoverContainer",
        componentId: "sc-ca5acedf-0"
    })
    `
  position: fixed;
  z-index: 1001;
  display: flex;
  max-width: 400px;
  padding: 12px 16px 12px 16px;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  border-radius: 6px;
  background: #f0f0f0;
  color: #000;
  font-size: 1.2rem; /* 12px */
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  letter-spacing: -0.24px;

  /* Ensure any P inside uses the specified typography */
  p {
    margin: 0;
    color: #000;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    letter-spacing: -0.24px;
  }

  /* Mobile: use up to 75% of viewport width */
  @media (max-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
    width: 75vw;
  }
`, ew = a.default.div.withConfig({
        displayName: "Popover__Arrow",
        componentId: "sc-ca5acedf-1"
    })
    `
  position: absolute;
  left: var(--arrow-left, calc(50% - 8.5px));
  width: 17px;
  height: 12px;
  pointer-events: none;

  &[data-placement='below'] {
    top: -6px;
    transform: none;
  }
  &[data-placement='above'] {
    bottom: -6px;
    transform: rotate(180deg);
  }
`, ey = function({
        anchorEl: e,
        open: t,
        children: a,
        offset: n = 8,
        onMouseEnter: o,
        onMouseLeave: l
    }) {
        let [r, d] = (0, s.useState)(!1), [p, c] = (0, s.useState)(null), [m, h] = (0, s.useState)("below"), [g, u] = (0, s.useState)(null), f = (0, s.useRef)(null);
        (0, s.useEffect)(() => (d(!0), () => d(!1)), []);
        let x = () => {
            if (!e || !f.current) return void c(null);
            let t = e.getBoundingClientRect(),
                i = f.current,
                a = window.innerWidth,
                o = window.innerHeight,
                l = i.offsetWidth,
                r = i.offsetHeight,
                s = o - t.bottom,
                d = t.top,
                p = s >= r + n || s >= d,
                m = p ? t.bottom + n : t.top - r - n,
                g = t.left + t.width / 2 - l / 2,
                x = a <= 480 ? 8 : 12;
            c({
                top: m,
                left: g = Math.max(x, Math.min(g, a - l - x))
            }), h(p ? "below" : "above");
            let b = t.left + t.width / 2 - g - 8.5,
                w = a <= 480 ? 6 : 8;
            u(Math.max(w, Math.min(b, l - 17 - w)))
        };
        return ((0, s.useLayoutEffect)(() => {
            if (!t) return;
            x();
            let e = () => x(),
                i = () => x();
            return window.addEventListener("scroll", e, !0), window.addEventListener("resize", i, !0), () => {
                window.removeEventListener("scroll", e, !0), window.removeEventListener("resize", i, !0)
            }
        }, [t, e]), r && t) ? (0, ex.createPortal)((0, i.jsxs)(eb, {
            ref: f,
            style: { ...p ? ? {},
                ...null != g ? {
                    "--arrow-left": `${g}px`
                } : {}
            },
            "data-placement": m,
            role: "tooltip",
            onMouseEnter: o,
            onMouseLeave: l,
            children: [(0, i.jsx)(ew, {
                "data-placement": m,
                "aria-hidden": !0,
                children: (0, i.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "17",
                    height: "12",
                    viewBox: "0 0 17 12",
                    fill: "none",
                    children: (0, i.jsx)("path", {
                        d: "M7.71679 0.486589C8.11715 -0.0177356 8.88285 -0.0177351 9.28321 0.486589L16.7388 9.87824C17.2591 10.5336 16.7924 11.5 15.9556 11.5H1.04437C0.207614 11.5 -0.259098 10.5336 0.261163 9.87824L7.71679 0.486589Z",
                        fill: "#F0F0F0"
                    })
                })
            }), a]
        }), document.body) : null
    }, ev = () => {
        let {
            selectedPlan: e,
            plans: t,
            setSelectedPlan: a
        } = H(), n = t.findIndex(t => t.id === e ? .id), o = s.default.useCallback(e => {
            if ("u" < typeof document) return;
            let i = document.getElementById("blood-vision-buy-plans");
            if (!i) return;
            let o = i.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: o,
                behavior: "smooth"
            }), n !== e && a(t[e])
        }, [n, t, a]);
        return (0, i.jsxs)(ej, {
            children: [(0, i.jsx)(ek, {
                type: "button",
                onClick: () => o(0),
                children: "Get the Essential Plan"
            }), (0, i.jsx)(e_, {
                type: "button",
                onClick: () => o(1),
                children: "Get the Annual Plan"
            })]
        })
    }, ej = a.default.div.withConfig({
        displayName: "CTAButtons__ButtonsRow",
        componentId: "sc-47ee7c88-0"
    })
    `
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  order: 0;
  margin: 1rem 0;
  padding: 0 4rem;

  @media (max-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
    gap: 2rem;
    padding: 0 1rem;
  }
`, eC = a.default.button.withConfig({
        displayName: "CTAButtons__BaseButton",
        componentId: "sc-47ee7c88-1"
    })
    `
  display: flex;
  width: 100%;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 32px;
  text-align: center;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: -0.6px;
  cursor: pointer;

  @media (max-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
    font-size: 12px;
    letter-spacing: -0.48px;
    padding: 8px 16px;
  }
`, e_ = (0, a.default)(eC).withConfig({
        displayName: "CTAButtons__PrimaryButton",
        componentId: "sc-47ee7c88-2"
    })
    `
  background: #0171e3;
  color: #fff;
  border: none;
`, ek = (0, a.default)(eC).withConfig({
        displayName: "CTAButtons__SecondaryButton",
        componentId: "sc-47ee7c88-3"
    })
    `
  background: transparent;
  color: #0171e3;
  border: 1px solid #0171e3;
`, eI = a.default.div.withConfig({
        displayName: "MobileBiomarkerTable__Wrapper",
        componentId: "sc-d4263dbf-0"
    })
    `
  width: 100%;
  margin: 2.4rem auto 0;
  max-width: 800px;
  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    table-layout: fixed;
  }
  thead tr {
    display: grid !important;
    grid-template-columns: 3fr 1fr 1fr;
    align-items: center;
    padding: 12px 16px;
    border-radius: 0;
    margin-bottom: 0;
  }
  thead th {
    align-items: center;
    justify-content: center;
    text-align: center; /* fallback */
    :first-child {
      justify-content: flex-start;
      text-align: left;
    }
    font-size: 1.3rem;
    font-weight: 500;
    letter-spacing: -0.52px;
    line-height: 140%;
    color: #000 !important;
  }
  tbody tr {
    display: grid !important;
    grid-template-columns: 3fr 1fr 1fr;
    align-items: center;
    background: #fafafa !important;
    background-color: #fafafa !important;
    padding: 12px 16px;
    border-radius: 4px;
    color: #000;
  }
  tbody tr.summary td:first-child {
    color: #000;
    font-size: 1.3rem;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
    letter-spacing: -0.39px;
  }
  tbody tr.summary td:nth-child(2),
  tbody tr.summary td:nth-child(3) {
    text-align: center;
  }
  tbody tr + tr {
    margin-top: 2px;
  }
  tbody tr:last-child {
    border-radius: 4px 4px 16px 16px;
  }
  tbody tr:first-child {
    border-radius: 16px 16px 4px 4px;
  }
  tbody tr.inactive {
    opacity: 0.6;
    filter: grayscale(0.3);
  }
  tbody tr.expanded {
    border-radius: 4px 4px 0 0;
  }
  tbody tr.expand-row {
    background: #fafafa;
    padding-top: 8px;
    border-radius: 0 0 4px 4px;
  }
  tbody tr.expand-row td {
    grid-column: 1 / -1;
    padding: 0;
  }
  tbody tr.expanded + tr.expand-row {
    margin-top: 0;
  }
  tbody tr.summary {
    background: #fafafa;
  }
`, eN = a.default.div.withConfig({
        displayName: "MobileBiomarkerTable__RowHeader",
        componentId: "sc-d4263dbf-1"
    })
    `
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  min-width: 0;
  color: #000;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: -0.42px;
`, eB = a.default.span.withConfig({
        displayName: "MobileBiomarkerTable__RowLabel",
        componentId: "sc-d4263dbf-2"
    })
    `
  color: #000;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: -0.42px;
`, eA = a.default.div.withConfig({
        displayName: "MobileBiomarkerTable__Thumb",
        componentId: "sc-d4263dbf-3"
    })
    `
  position: relative;
  width: 32px;
  height: 32px;
  border-radius: 10px;
  overflow: hidden;
  flex: 0 0 auto;
`, eS = a.default.span.withConfig({
        displayName: "MobileBiomarkerTable__Chevron",
        componentId: "sc-d4263dbf-4"
    })
    `
  margin-left: auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  &.open svg {
    transform: rotate(0deg);
  }
  svg {
    width: 17px;
    height: 17px;
    transition: transform 0.2s ease;
    transform: rotate(180deg);
  }
`, eP = a.default.div.withConfig({
        displayName: "MobileBiomarkerTable__ChipsWrap",
        componentId: "sc-d4263dbf-5"
    })
    `
  display: flex;
  flex-wrap: wrap;
  gap: 10px 12px;
  padding: 8px 16px 0;
`, ez = a.default.span.withConfig({
        displayName: "MobileBiomarkerTable__Chip",
        componentId: "sc-d4263dbf-6"
    })
    `
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  padding: 4px 6px 4px 6px;
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: #fafafa;
  color: #000;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 12px; /* lock exact line-height to avoid extra bottom space */
  letter-spacing: -0.24px;
`, eT = a.default.span.withConfig({
        displayName: "MobileBiomarkerTable__Dot",
        componentId: "sc-d4263dbf-7"
    })
    `
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #fd1618;
`, e$ = a.default.p.withConfig({
        displayName: "MobileBiomarkerTable__Disclaimer",
        componentId: "sc-d4263dbf-8"
    })
    `
  margin: 12px 16px 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: rgba(0, 0, 0, 0.7);
  font-size: 1.2rem;
  font-style: italic;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -0.24px;
`, eL = a.keyframes `
  from { opacity: 0; transform: translateY(-4px); }
  to { opacity: 1; transform: translateY(0); }
`, eH = a.default.div.withConfig({
        displayName: "MobileBiomarkerTable__ExpandContent",
        componentId: "sc-d4263dbf-9"
    })
    `
  animation: ${eL} 200ms ease-out;
  background: #fafafa;
`, eE = a.default.td.withConfig({
        displayName: "MobileBiomarkerTable__Count",
        componentId: "sc-d4263dbf-10"
    })
    `
  text-align: center;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 18.2px */
  letter-spacing: -0.39px;
`, eM = (0, i.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "17",
        height: "17",
        viewBox: "0 0 17 17",
        fill: "none",
        children: (0, i.jsx)("path", {
            d: "M12.0166 10.8438L8.0166 6.84375L4.0166 10.8438",
            stroke: "black",
            strokeWidth: "1.33333",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })
    }), eV = () => {
        let e = eu[0],
            t = eu[1],
            a = s.default.useMemo(() => {
                let i = (t.panels || []).map(e => e.label),
                    a = (e.panels || []).map(e => e.label),
                    n = i.filter(e => a.includes(e)),
                    o = i.filter(e => !a.includes(e));
                return [...n, ...a.filter(e => !i.includes(e)), ...o]
            }, [e.panels, t.panels]),
            [n, o] = s.default.useState(() => {
                let e = {};
                return a.slice(0, 2).forEach(t => {
                    e[t] = !0
                }), e
            }),
            l = (e, t) => e ? .find(e => e.label === t),
            r = e => e ? .available ? e.availableBiomarkers ? .length || 0 : void 0,
            d = e => ({
                available: e ? .availableBiomarkers || [],
                unavailable: e ? .unavailableBiomarkers || []
            });
        return (0, i.jsx)(eI, {
            children: (0, i.jsxs)("table", {
                children: [(0, i.jsx)("thead", {
                    children: (0, i.jsxs)("tr", {
                        children: [(0, i.jsx)("th", {
                            children: "Compare tests"
                        }), (0, i.jsx)("th", {
                            children: e.title ? .replace(/\s*plan$/i, "") || "Essential"
                        }), (0, i.jsx)("th", {
                            children: t.title ? .replace(/\s*plan$/i, "") || "Annual"
                        })]
                    })
                }), (0, i.jsxs)("tbody", {
                    children: [(0, i.jsxs)("tr", {
                        className: "summary",
                        children: [(0, i.jsx)("td", {
                            children: (0, i.jsx)(eB, {
                                children: "Total Tests"
                            })
                        }), (0, i.jsx)(eE, {
                            children: "60+"
                        }), (0, i.jsx)(eE, {
                            children: "100+"
                        })]
                    }), (0, i.jsxs)("tr", {
                        className: "summary",
                        children: [(0, i.jsx)("td", {
                            children: (0, i.jsx)(eB, {
                                children: "Total Panels"
                            })
                        }), (0, i.jsx)(eE, {
                            children: "8"
                        }), (0, i.jsx)(eE, {
                            children: "17"
                        })]
                    }), a.map(a => {
                        let p, c, m, h, g, u, f = l(e.panels, a),
                            x = l(t.panels, a),
                            b = r(f),
                            w = r(x),
                            y = !(f ? .available || x ? .available),
                            v = !!n[a];
                        return (0, i.jsxs)(s.default.Fragment, {
                            children: [(0, i.jsxs)("tr", {
                                className: `${y?"inactive":""} ${v?"expanded":""}`,
                                onClick: () => o(e => ({ ...e,
                                    [a]: !e[a]
                                })),
                                children: [(0, i.jsx)("td", {
                                    children: (0, i.jsxs)(eN, {
                                        children: [(0, i.jsx)(eA, {
                                            "aria-hidden": !0,
                                            children: (0, i.jsx)(ei.CustomImage, {
                                                src: f ? .imageUrl || x ? .imageUrl || "web_v2/thumb/uh-icon-1000x1000.png/w_64",
                                                alt: "",
                                                fill: !0
                                            })
                                        }), (0, i.jsx)(eB, {
                                            children: a
                                        }), (0, i.jsx)(eS, {
                                            "aria-hidden": !0,
                                            className: v ? "open" : "",
                                            children: eM
                                        })]
                                    })
                                }), (0, i.jsx)(eE, {
                                    children: void 0 !== b ? b : "-"
                                }), (0, i.jsx)(eE, {
                                    children: void 0 !== w ? w : "-"
                                })]
                            }), v ? (0, i.jsx)("tr", {
                                className: "expand-row",
                                children: (0, i.jsx)("td", {
                                    colSpan: 3,
                                    children: (0, i.jsxs)(eH, {
                                        children: [(0, i.jsx)(eP, {
                                            children: (p = d(f), c = d(x), m = [], h = c.available, g = p.available, [...h.filter(e => g.includes(e)), ...h.filter(e => !g.includes(e)), ...c.unavailable, ...p.unavailable].forEach(e => {
                                                m.includes(e) || m.push(e)
                                            }), u = new Set(p.available), m.map(e => (0, i.jsxs)(ez, {
                                                children: [u.has(e) ? (0, i.jsx)(eT, {
                                                    "aria-hidden": !0
                                                }) : null, e]
                                            }, `agg-${a}-${e}`)))
                                        }), (0, i.jsxs)(e$, {
                                            children: [(0, i.jsx)(eT, {
                                                "aria-hidden": !0
                                            }), " Biomarkers in Essential plans"]
                                        })]
                                    })
                                })
                            }) : null]
                        }, a)
                    })]
                })]
            })
        })
    };

    function eW({
        item: e,
        isMobile: t
    }) {
        let [a, n] = s.default.useState(!1), o = s.default.useRef(null);
        return (0, i.jsxs)(eF, {
            className: e.available ? "" : "inactive",
            onMouseEnter: t ? () => n(!0) : void 0,
            onMouseLeave: t ? () => n(!1) : void 0,
            children: [(0, i.jsx)(eO, {
                "aria-hidden": !0,
                children: (0, i.jsx)(ei.CustomImage, {
                    src: e.imageUrl || "web_v2/thumb/uh-icon-1000x1000.png/w_64",
                    alt: "",
                    fill: !0
                })
            }), (0, i.jsxs)(eD, {
                children: [(0, i.jsxs)("span", {
                    children: [e.label, e.availableBiomarkers ? .length ? ` (${e.availableBiomarkers?.length})` : null]
                }), (0, i.jsx)(eG, {
                    ref: o,
                    className: e.available ? "" : "hide-web",
                    "aria-hidden": !0,
                    onMouseEnter: () => n(!0),
                    onMouseLeave: () => n(!1),
                    children: (0, i.jsx)(eq, {})
                })]
            }), (0, i.jsx)(ey, {
                anchorEl: o.current,
                open: a,
                onMouseEnter: () => n(!0),
                onMouseLeave: () => n(!1),
                children: (0, i.jsxs)(eg.P, {
                    style: {
                        margin: 0
                    },
                    children: [e.availableBiomarkers ? .length ? (0, i.jsx)("span", {
                        children: e.availableBiomarkers.join(", ")
                    }) : null, e.unavailableBiomarkers ? .length ? (0, i.jsxs)(i.Fragment, {
                        children: [e.availableBiomarkers ? .length ? ", " : null, (0, i.jsx)(eZ, {
                            children: e.unavailableBiomarkers.join(", ")
                        })]
                    }) : null]
                })
            })]
        })
    }
    let eR = a.default.div.withConfig({
        displayName: "BiomarkerTable__Wrapper",
        componentId: "sc-d765210b-0"
    })
    `
  width: 100%;
  margin: 2.4rem auto;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    table-layout: fixed;
    order: 1;
  }

  /* Header row styles */
  thead tr {
    display: flex;
    align-items: center;
    background: #fafafa;
    padding: 12px 16px;
    gap: 16px; /* ensure minimum gap between columns on small screens */
    border-radius: 16px 16px 4px 4px;
    margin-bottom: 2px;
    /* No background on mobile */
    @media (max-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
      background: transparent;
    }
    @media (min-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
      padding: 20px 48px;
      gap: 32px; /* larger gap on wider screens */
    }
  }
  thead th {
    flex: 1 1 50%;
    text-align: left;
    padding: 0;
    min-width: 0; /* allow content to wrap instead of forcing column to grow */
  }

  /* Body row styles */
  tbody tr {
    display: flex;
    align-items: center;
    background: #fafafa;
    padding: 12px 16px;
    gap: 16px; /* ensure minimum gap between columns on small screens */
    color: #000;
    border-radius: 4px;
    /* No background on mobile */
    @media (max-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
      background: transparent;
    }
    @media (min-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
      padding: 12px 48px;
      gap: 32px; /* larger gap on wider screens */
    }
  }
  tbody tr + tr {
    margin-top: 2px;
  }
  tbody tr:last-child {
    border-radius: 4px 4px 16px 16px;
  }
  tbody td {
    flex: 1 1 50%;
    vertical-align: top;
    padding: 0;
    min-width: 0; /* allow wrapping */
  }
`, eU = a.default.p.withConfig({
        displayName: "BiomarkerTable__HeaderText",
        componentId: "sc-d765210b-1"
    })
    `
  margin: 0;
  color: #000;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  letter-spacing: -0.56px;
  text-transform: capitalize;
`, eF = a.default.div.withConfig({
        displayName: "BiomarkerTable__RowBox",
        componentId: "sc-d765210b-2"
    })
    `
  display: flex;
  align-items: center;
  gap: 10px;

  &.inactive {
    color: rgba(0, 0, 0, 0.5);
    filter: grayscale(1);
    opacity: 0.5;
  }
`, eO = a.default.div.withConfig({
        displayName: "BiomarkerTable__Thumb",
        componentId: "sc-d765210b-3"
    })
    `
  display: none;
  position: relative;
  width: 32px;
  height: 32px;
  border-radius: 10px;
  overflow: hidden;

  @media (min-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
    display: block;
  }
`, eD = a.default.div.withConfig({
        displayName: "BiomarkerTable__RowText",
        componentId: "sc-d765210b-4"
    })
    `
  flex: 1;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #000;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: -0.42px;
  text-align: left;

  span {
    text-align: left;
  }

  /* On desktop, bring icon closer to text */
  @media (min-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
    gap: 6px;
  }
`, eG = a.default.span.withConfig({
        displayName: "BiomarkerTable__InfoIcon",
        componentId: "sc-d765210b-5"
    })
    `
  display: inline-flex;
  cursor: help;

  &.hide-web {
    @media (min-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
      display: none; /* hide on web for disabled rows */
    }
  }
  svg {
    width: 13px;
    height: 12px;
  }

  /* Show icon before text on mobile */
  @media (max-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
    margin-left: auto;
  }
`, eZ = a.default.span.withConfig({
        displayName: "BiomarkerTable__UnavailableText",
        componentId: "sc-d765210b-6"
    })
    `
  opacity: 0.5;
`, eq = () => (0, i.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "13",
        height: "12",
        viewBox: "0 0 13 12",
        fill: "none",
        children: [(0, i.jsx)("path", {
            d: "M6.5 11C9.26142 11 11.5 8.76142 11.5 6C11.5 3.23858 9.26142 1 6.5 1C3.73858 1 1.5 3.23858 1.5 6C1.5 8.76142 3.73858 11 6.5 11Z",
            stroke: "black",
            strokeOpacity: "0.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }), (0, i.jsx)("path", {
            d: "M6.5 8V6",
            stroke: "black",
            strokeOpacity: "0.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }), (0, i.jsx)("path", {
            d: "M6.5 4H6.50667",
            stroke: "black",
            strokeOpacity: "0.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })]
    }), eY = function({
        isModal: e
    }) {
        let t = eu[0],
            a = eu[1],
            n = (0, d.useWindowSize)().width < 768,
            o = Array.from({
                length: Math.max(t.panels ? .length || 0, a.panels ? .length || 0)
            }, (e, i) => ({
                left: t.panels ? .[i],
                right: a.panels ? .[i]
            }));
        return (0, i.jsxs)(eR, {
            children: [!e && (0, i.jsx)(ev, {}), n ? (0, i.jsx)(eV, {}) : (0, i.jsxs)("table", {
                children: [(0, i.jsx)("thead", {
                    children: (0, i.jsxs)("tr", {
                        children: [(0, i.jsx)("th", {
                            children: (0, i.jsx)(eU, {
                                children: t.panelHeader
                            })
                        }), (0, i.jsx)("th", {
                            children: (0, i.jsx)(eU, {
                                children: a.panelHeader
                            })
                        })]
                    })
                }), (0, i.jsx)("tbody", {
                    children: o.map((e, t) => (0, i.jsxs)("tr", {
                        children: [(0, i.jsx)("td", {
                            children: e.left ? (0, i.jsx)(eW, {
                                item: e.left,
                                isMobile: n
                            }) : null
                        }), (0, i.jsx)("td", {
                            children: e.right ? (0, i.jsx)(eW, {
                                item: e.right,
                                isMobile: n
                            }) : null
                        })]
                    }, t))
                })]
            })]
        })
    }, eK = a.default.div.withConfig({
        displayName: "ComparePlans__TableWrapper",
        componentId: "sc-822dd1ba-0"
    })
    `
  width: 100%;
  max-width: 750px;
  margin: 4rem auto 0;
  padding: 0 1.2rem;

  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    table-layout: fixed;
  }

  tbody td {
    /* width is supplied inline based on number of columns */
    vertical-align: top;
    padding: 0 1.2rem;
  }
`, eX = a.default.h3.withConfig({
        displayName: "ComparePlans__PlanTitle",
        componentId: "sc-822dd1ba-1"
    })
    `
  margin: 0 0 0.8rem 0;
  color: #000;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: -0.48px;

  @media (min-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
    color: #000;
    font-size: 1.8rem;
    font-weight: 500;
    line-height: 140%;
    letter-spacing: -0.72px;
    /* Remove enforced height on larger screens */
    min-height: unset;
  }
`, eQ = (0, a.default)(eg.P).withConfig({
        displayName: "ComparePlans__Subtitle",
        componentId: "sc-822dd1ba-2"
    })
    `
  margin: 0 0 2.4rem 0;
  font-size: 1.3rem;

  @media (min-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
    font-size: 1.6rem;
    min-height: unset;
  }
`, eJ = a.default.div.withConfig({
        displayName: "ComparePlans__PriceRow",
        componentId: "sc-822dd1ba-3"
    })
    `
  display: inline-flex;
  align-items: baseline;
  /* Push price block to the bottom of the header cell so prices align across columns */
  margin-top: auto;
  margin-bottom: 2rem;
`, e0 = a.default.span.withConfig({
        displayName: "ComparePlans__Price",
        componentId: "sc-822dd1ba-4"
    })
    `
  color: #000;
  font-variant-numeric: lining-nums tabular-nums;
  font-size: 2.8rem;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  letter-spacing: -1.12px;

  @media (min-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
    color: #000;
    font-size: 4rem;
    font-weight: 500;
    line-height: 120%;
    letter-spacing: -1.6px;
  }
`, e1 = a.default.span.withConfig({
        displayName: "ComparePlans__PerYear",
        componentId: "sc-822dd1ba-5"
    })
    `
  color: #000;
  font-variant-numeric: lining-nums tabular-nums;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  letter-spacing: -0.48px;
  margin-left: 4px;

  @media (min-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
    color: #000;
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 120%;
    letter-spacing: -0.64px;
  }
`, e2 = a.default.li.withConfig({
        displayName: "ComparePlans__HeaderListItem",
        componentId: "sc-822dd1ba-6"
    })
    `
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.4rem 0;
  color: #000;
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: -0.42px;

  &.disabled {
    color: rgba(0, 0, 0, 0.35);
    svg {
      opacity: 0.35;
    }
  }
  @media (min-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
    padding: 0.4rem 0;
  }
`, e4 = a.default.span.withConfig({
        displayName: "ComparePlans__IconWrapper",
        componentId: "sc-822dd1ba-7"
    })
    `
  display: inline-flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 24px;
    height: 24px;
  }

  @media (min-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
    svg {
      width: 32px;
      height: 32px;
    }
  }
`, e6 = (0, a.default)(({
        className: e,
        isModal: t
    }) => {
        let a = s.default.useMemo(() => {
            let e = [];
            e.push(ef.map(e => (0, i.jsx)(eX, {
                children: e.title
            }, `${e.key}-title`))), e.push(ef.map(e => (0, i.jsx)(eQ, {
                children: e.subtitle
            }, `${e.key}-subtitle`))), e.push(ef.map(e => (0, i.jsxs)(eJ, {
                children: [(0, i.jsx)(e0, {
                    children: e.price
                }), (0, i.jsx)(e1, {
                    children: e.perYear
                })]
            }, `${e.key}-price`)));
            let t = ef.reduce((e, t) => Math.max(e, t.list ? .length || 0), 0);
            for (let a = 0; a < t; a += 1) e.push(ef.map(e => {
                let t = e.list ? .[a];
                return t ? (0, i.jsxs)(e2, {
                    as: "div",
                    className: t.available ? "" : "disabled",
                    children: [(0, i.jsx)(e4, {
                        children: t.available ? e5 : e8
                    }), (0, i.jsx)("span", {
                        children: t.label
                    })]
                }, `${e.key}-feature-${a}`) : null
            }));
            return e
        }, [ef]);
        return (0, i.jsx)("section", {
            className: e,
            children: (0, i.jsxs)(n.Container, {
                style: {
                    position: "relative"
                },
                children: [(0, i.jsx)(eg.H2, {
                    children: "Blood Vision Plans"
                }), (0, i.jsx)(eK, {
                    children: (0, i.jsx)("table", {
                        children: (0, i.jsx)("tbody", {
                            children: a.map((e, t) => (0, i.jsx)("tr", {
                                children: e.map((e, t) => (0, i.jsx)("td", {
                                    style: {
                                        width: `${100/ef.length}%`
                                    },
                                    children: e
                                }, t))
                            }, t))
                        })
                    })
                }), (0, i.jsx)(eY, {
                    isModal: !!t
                })]
            })
        })
    }).withConfig({
        displayName: "ComparePlans",
        componentId: "sc-822dd1ba-8"
    })
    `
  padding: 4.8rem 0;
  @media (min-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
    padding: ${({isModal:e})=>e?"4rem 0":"10rem 0"};
  }
  ${eg.H2} {
    text-align: center;
  }
  ${eg.P} {
    text-align: left;
  }
  ${eK} tbody tr td:first-child {
    padding-left: 0;
  }
  ${eK} tbody tr td:last-child {
    padding-right: 0;
  }
`, e5 = (0, i.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "33",
        height: "32",
        viewBox: "0 0 33 32",
        fill: "none",
        children: (0, i.jsx)("path", {
            d: "M21.5 12.25L14.625 19.75L11.5 16.3409",
            stroke: "black",
            "stroke-width": "1.36364",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
        })
    }), e8 = (0, i.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "33",
        height: "32",
        viewBox: "0 0 33 32",
        fill: "none",
        children: [(0, i.jsx)("path", {
            d: "M20.5 12L12.5 20",
            stroke: "black",
            "stroke-width": "1.33333",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
        }), (0, i.jsx)("path", {
            d: "M12.5 12L20.5 20",
            stroke: "black",
            "stroke-width": "1.33333",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
        })]
    }), e3 = a.default.div.withConfig({
        displayName: "FeatureSection__InfoSection",
        componentId: "sc-f6c571a1-0"
    })
    `
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`, e9 = a.default.div.withConfig({
        displayName: "FeatureSection__FeatureSectionHeader",
        componentId: "sc-f6c571a1-1"
    })
    `
  display: flex;
  justify-content: space-between;
  padding: 0;
`;
    e9.displayName = "FeatureSectionHeader";
    let e7 = a.default.button.withConfig({
        displayName: "FeatureSection__InfoIconContainer",
        componentId: "sc-f6c571a1-2"
    })
    `
  position: relative;
  cursor: pointer;
  border: none;
  cursor: pointer;
  background: transparent;
  padding: 0;
  right: 8px;
`;
    e7.displayName = "InfoIconContainer";
    let te = a.default.div.withConfig({
        displayName: "FeatureSection__PlanTitle",
        componentId: "sc-f6c571a1-3"
    })
    `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  // width: 100%;

  h3 {
    text-align: center;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 33.6px */
    letter-spacing: -0.6px;

    @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
      font-size: 24px;
      letter-spacing: -0.72px;
    }
  }

  span {
    width: 100%;
    color: var(--Black-50, rgba(0, 0, 0, 0.5));
    leading-trim: both;
    text-edge: cap;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 120%; /* 16.8px */
    letter-spacing: -0.56px;
    text-align: left;
  }
`, tt = a.default.div.withConfig({
        displayName: "FeatureSection__CompareWrapper",
        componentId: "sc-f6c571a1-4"
    })
    `
  padding: 0 0rem;
  @media (min-width: ${({theme:e})=>e.globalV2.md.minWidth}) {
    padding: 0 1.6rem;
  }
`, ti = () => {
        let e = (0, s.useContext)(W.OffersModalNewContext);
        return (0, i.jsxs)(e3, {
            children: [(0, i.jsxs)(e9, {
                children: [(0, i.jsx)(te, {
                    children: (0, i.jsx)("span", {
                        children: "Choose Your Plan"
                    })
                }), (0, i.jsx)(e7, {
                    onClick: () => {
                        e.set((0, i.jsx)(R.ImageModal, {
                            children: (0, i.jsx)(tt, {
                                children: (0, i.jsx)(e6, {
                                    isModal: !0
                                })
                            })
                        })), e.show()
                    },
                    children: (0, i.jsx)("span", {
                        style: {
                            color: "rgba(1, 95, 227, 1)",
                            textDecoration: "underline",
                            display: "inline-block",
                            fontWeight: "400",
                            letterSpacing: "-0.12px",
                            width: "fit-content"
                        },
                        children: "View all tests"
                    })
                })]
            }), (0, i.jsx)(eh, {})]
        })
    };
    var ta = e.i(96691);
    let tn = a.default.div.withConfig({
        displayName: "AddOnList__AddOnContainer",
        componentId: "sc-48f2f05a-0"
    })
    `
  background: #fff;
  padding: 16px;

  &:last-child {
    border-bottom: none;
  }
`, to = a.default.div.withConfig({
        displayName: "AddOnList__AddOnHeader",
        componentId: "sc-48f2f05a-1"
    })
    `
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.6rem;

  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    margin-bottom: 0.5rem;
  }
`, tl = a.default.div.withConfig({
        displayName: "AddOnList__AddOnInfo",
        componentId: "sc-48f2f05a-2"
    })
    `
  flex: 1;
`, tr = a.default.h4.withConfig({
        displayName: "AddOnList__AddOnTitle",
        componentId: "sc-48f2f05a-3"
    })
    `
  margin: 0 0 0.25rem 0;
  color: #000;
  font-feature-settings: 'liga' off, 'clig' off;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 19.2px */
  letter-spacing: -0.45px;
`, ts = a.default.p.withConfig({
        displayName: "AddOnList__AddOnDescription",
        componentId: "sc-48f2f05a-4"
    })
    `
  margin: 6px 0;
  color: rgba(0, 0, 0, 0.6);
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 19.6px */
  letter-spacing: -0.26px;

  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    font-size: 14px;
    letter-spacing: -0.28px;
  }
`, td = a.default.div.withConfig({
        displayName: "AddOnList__AddOnPrice",
        componentId: "sc-48f2f05a-5"
    })
    `
  font-size: 0.875rem;
  white-space: nowrap;
  color: #000;
  text-align: right;
  font-variant-numeric: lining-nums tabular-nums;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 15.6px */
  letter-spacing: -0.52px;
  text-transform: uppercase;
`, tp = a.default.button.withConfig({
        displayName: "AddOnList__AddButton",
        componentId: "sc-48f2f05a-6"
    })
    `
  border-radius: 200px;
  background: #0171e3;
  background-color: ${e=>e.selected?"transparent":"#0171e3"};
  color: ${e=>e.selected?"#0171e3":"#fff"};
  border: 1px solid ${e=>e.selected?"#0171e3":"transparent"};
  text-align: center;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px; /* 106.667% */
  letter-spacing: -0.6px;
  cursor: pointer;
  margin-left: 1rem;
  display: flex;
  padding: 8px 18px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &:disabled {
    cursor: not-allowed;
    filter: brightness(80%);
    background-color: rgba(0, 0, 0, 0.2) !important;
    color: rgba(0, 0, 0, 0.7) !important;
  }

  &:not(:disabled) {
    box-shadow: 0px 1px 4px 0px #6fbaff inset;
  }
`, tc = a.default.div.withConfig({
        displayName: "AddOnList__ParameterSection",
        componentId: "sc-48f2f05a-7"
    })
    `
  display: flex;
  justify-content: space-between;
`, tm = a.default.button.withConfig({
        displayName: "AddOnList__ViewParametersButton",
        componentId: "sc-48f2f05a-8"
    })
    `
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0;
  margin-top: 0.5rem;

  color: rgba(0, 0, 0, 0.6);
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 13px */
  letter-spacing: -0.39px;
  text-transform: capitalize;

  svg {
    margin-left: 4px;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    transform: rotate(180deg);
  }

  &[data-state='open'] svg {
    transform: rotate(0deg);
  }
`, th = a.default.div.withConfig({
        displayName: "AddOnList__ParametersList",
        componentId: "sc-48f2f05a-9"
    })
    `
  // margin-top: 16px;
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  gap: 12px;
  align-self: stretch;
  flex-wrap: wrap;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: top;
  overflow: hidden;
  max-height: 1000px;
  padding: 16px 0;
  opacity: 1;
  transform: translateY(0);

  &[data-state='closed'] {
    max-height: 0;
    padding: 0;
    opacity: 0;
    transform: translateY(-8px);
  }
`, tg = a.default.div.withConfig({
        displayName: "AddOnList__Parameter",
        componentId: "sc-48f2f05a-10"
    })
    `
  color: #00218d;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 22.4px */
  text-transform: capitalize;
  display: flex;
  padding: 5px 16px 5px 16px;
  align-items: flex-start;
  gap: 16px;
  border-radius: 8px;
  border: 1px solid rgba(0, 33, 141, 0.04);
  background: rgba(0, 33, 141, 0.08);
  width: fit-content;
  &:last-child {
    margin-bottom: 0;
  }
`, tu = ({
        addOns: e,
        selectedAddOns: t,
        toggleAddOn: a
    }) => {
        let [n, o] = (0, s.useState)([]), {
            isLoading: l,
            zipCode: d,
            isZipValid: p,
            checkoutAllowed: c
        } = H(), m = d && 5 === d.length && p;
        return (0, i.jsx)("div", {
            children: e.map(e => (0, i.jsxs)(tn, {
                children: [(0, i.jsxs)(to, {
                    children: [(0, i.jsxs)(tl, {
                        children: [(0, i.jsx)(tr, {
                            children: e.name
                        }), (0, i.jsx)(ts, {
                            children: e.description
                        })]
                    }), (0, i.jsx)(td, {
                        children: e.price
                    })]
                }), (0, i.jsxs)(tc, {
                    children: [(0, i.jsxs)(tm, {
                        onClick: () => {
                            var t;
                            return t = e.id, void o(e => e.includes(t) ? e.filter(e => e !== t) : [...e, t])
                        },
                        "data-state": n.includes(e.id) ? "open" : "closed",
                        children: ["View Parameters", (0, i.jsx)(r.CaretUp, {
                            fill: "rgba(0, 0, 0, 0.5)",
                            width: 10,
                            height: 10
                        })]
                    }), (0, i.jsxs)(tp, {
                        selected: t.includes(e.id),
                        onClick: () => a(e.id),
                        disabled: l || !m || !c,
                        children: [t.includes(e.id) ? "Added" : "Add", t.includes(e.id) ? (0, i.jsx)(ta.TickBlue, {}) : ""]
                    })]
                }), (0, i.jsx)(th, {
                    "data-state": n.includes(e.id) ? "open" : "closed",
                    children: e.blood_markers.map((e, t) => (0, i.jsx)(tg, {
                        children: e
                    }, t))
                })]
            }, e.id))
        })
    };
    var tf = e.i(15110);
    let tx = (0, s.createContext)({
            zipCodeInputRef: null
        }),
        tb = ({
            children: e
        }) => {
            let t = (0, s.useRef)(null),
                [a, n] = (0, s.useState)(null),
                [o, l] = (0, s.useState)(null);
            return (0, i.jsx)(tx.Provider, {
                value: {
                    zipCodeInputRef: t,
                    modalitySectionRef: a,
                    hsaSectionRef: o,
                    setModalitySectionRef: n,
                    setHsaSectionRef: l
                },
                children: e
            })
        },
        tw = a.default.div.withConfig({
            displayName: "OrderSummary__SummaryContainer",
            componentId: "sc-98aa0784-0"
        })
    `
  display: flex;
  flex-direction: column;
  padding: 40px 16px;
  gap: 8px;
  border-radius: 4px;
  background: #f8f8f8;
`, ty = a.default.div.withConfig({
        displayName: "OrderSummary__SummaryContent",
        componentId: "sc-98aa0784-1"
    })
    `
  background-color: #f9f9f9;
  border-radius: 8px;
  width: 100%;
  padding-bottom: 25px;
`, tv = a.default.h4.withConfig({
        displayName: "OrderSummary__ProductTitle",
        componentId: "sc-98aa0784-2"
    })
    `
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 28.8px */
  letter-spacing: -0.96px;
  padding-bottom: 16px;
`, tj = a.default.div.withConfig({
        displayName: "OrderSummary__LineItem",
        componentId: "sc-98aa0784-3"
    })
    `
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
  color: #808080;
  font-feature-settings: 'liga' off, 'clig' off;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 16.8px */
  letter-spacing: -0.4px;
`, tC = a.default.div.withConfig({
        displayName: "OrderSummary__LineItemLabel",
        componentId: "sc-98aa0784-4"
    })
    `
  color: #555;
`, t_ = a.default.div.withConfig({
        displayName: "OrderSummary__LineItemPrice",
        componentId: "sc-98aa0784-5"
    })
    `
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 8px;
`, tk = a.default.span.withConfig({
        displayName: "OrderSummary__StrikethroughPrice",
        componentId: "sc-98aa0784-6"
    })
    `
  text-decoration: line-through;
  color: rgba(0, 0, 0, 0.4);
`, tI = a.default.div.withConfig({
        displayName: "OrderSummary__TotalContainer",
        componentId: "sc-98aa0784-7"
    })
    `
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1.5rem 0 0.5rem;
  color: #808080;
  font-feature-settings: 'liga' off, 'clig' off;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 16.8px */
  letter-spacing: -0.4px;

  span:last-child {
    color: #000;
    text-align: right;
    font-variant-numeric: lining-nums tabular-nums;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%; /* 24px */
    letter-spacing: -1px;
    text-transform: uppercase;
  }
`, tN = a.default.div.withConfig({
        displayName: "OrderSummary__ButtonWrapper",
        componentId: "sc-98aa0784-8"
    })
    `
  width: 100%;
  position: relative;

  /* Only apply cursor:pointer when the button is disabled */
  cursor: ${e=>e.$isButtonDisabled?"pointer":"default"};

  /* This is crucial - we only disable pointer-events on the button when it's disabled */
  ${e=>e.$isButtonDisabled?`
    button:disabled {
      pointer-events: none;
    }
  `:""}
`, tB = a.default.p.withConfig({
        displayName: "OrderSummary__HintText",
        componentId: "sc-98aa0784-9"
    })
    `
  color: #808080;
  font-size: 13px;
  font-style: italic;
  font-weight: 400;
  text-align: center;
  margin-top: 8px;
`, tA = ({
        mainPlan: e,
        selectedAddOns: t,
        onCheckout: a,
        isLoading: n
    }) => {
        let {
            selectedPlan: o,
            addOns: l,
            selectedAddOns: r,
            handleCheckout: d,
            isLoading: p,
            zipCode: c,
            checkoutAllowed: m,
            hasCheckedOut: h,
            setHasCheckedOut: g,
            isZipValid: u,
            selectedModality: f,
            isHsaFsaIncluded: x
        } = H(), {
            zipCodeInputRef: b,
            modalitySectionRef: w,
            hsaSectionRef: y
        } = (0, s.useContext)(tx), v = e || o, j = t || (r ? l.filter(e => r.includes(e.id)) : []), C = a || d, _ = (void 0 !== n ? n : p) || !m || h, k = !c && !m, I = c && u && !f && !m, N = c && u && f && null === x && !m, B = v ? .is_plan_campaign === !0, A = (0, s.useMemo)(() => {
            let e = v ? .price_split ? .base_price || v ? .original_price || 0,
                t = v ? .price_split ? .location_charge || 0,
                i = v ? .price_split ? .at_home_charges || 0,
                a = v ? .price_split ? .discount || 0,
                n = e + t + i,
                o = n - a;
            return B ? {
                basePrice: e,
                locationCharge: t,
                atHomeCharges: i,
                discount: a,
                totalBeforeDiscount: n,
                finalTotal: 0,
                displayPrice: 0
            } : {
                basePrice: e,
                locationCharge: t,
                atHomeCharges: i,
                discount: a,
                totalBeforeDiscount: n,
                finalTotal: o,
                displayPrice: o
            }
        }, [v, B]);
        return v ? (0, i.jsxs)(tw, {
            id: "order-summary-bv-card",
            children: [(0, i.jsxs)(ty, {
                children: [(0, i.jsx)(tv, {
                    children: "Blood Vision"
                }), (0, i.jsxs)(tj, {
                    children: [(0, i.jsx)(tC, {
                        children: v ? .name || "Blood Vision: Annual Plan"
                    }), (0, i.jsxs)(t_, {
                        children: [B && (0, i.jsxs)(tk, {
                            children: ["$", A.basePrice.toFixed(1)]
                        }), (0, i.jsxs)("span", {
                            children: ["$", B ? "0.0" : A.basePrice.toFixed(1)]
                        })]
                    })]
                }), !B && A.locationCharge > 0 && (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(es, {
                        pixelPadding: "16px"
                    }), (0, i.jsxs)(tj, {
                        children: [(0, i.jsx)(tC, {
                            children: "Location Charge"
                        }), (0, i.jsxs)(t_, {
                            children: ["+$", A.locationCharge.toFixed(1)]
                        })]
                    })]
                }), !B && A.atHomeCharges > 0 && (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(es, {
                        pixelPadding: "16px"
                    }), (0, i.jsxs)(tj, {
                        children: [(0, i.jsx)(tC, {
                            children: "At Home Charges"
                        }), (0, i.jsxs)(t_, {
                            children: ["+$", A.atHomeCharges.toFixed(1)]
                        })]
                    })]
                }), (0, i.jsx)(es, {
                    pixelPadding: "16px"
                }), !B && A.discount > 0 ? (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsxs)(tj, {
                        children: [(0, i.jsx)(tC, {
                            children: "Discount"
                        }), (0, i.jsxs)(t_, {
                            children: ["-$", A.discount.toFixed(1)]
                        })]
                    }), (0, i.jsx)(es, {
                        pixelPadding: "16px"
                    })]
                }) : null, j.map(e => (0, i.jsxs)(s.default.Fragment, {
                    children: [(0, i.jsxs)(tj, {
                        children: [(0, i.jsx)(tC, {
                            children: e.name
                        }), (0, i.jsx)(t_, {
                            children: e.price.includes(".") ? e.price : e.price + ".0"
                        })]
                    }), (0, i.jsx)(es, {
                        pixelPadding: "16px"
                    })]
                }, e.id)), (0, i.jsxs)(tI, {
                    children: [(0, i.jsx)("span", {
                        children: "Total"
                    }), (0, i.jsxs)(t_, {
                        children: ["$", A.finalTotal.toFixed(1)]
                    })]
                }), (0, i.jsx)(es, {
                    pixelPadding: "16px"
                })]
            }), (0, i.jsx)(tN, {
                onClick: () => {
                    if (_) {
                        if (!c || 5 !== c.length || !u) {
                            b && b.current && b.current.scrollIntoView();
                            return
                        }
                        if (!f && w && w.current) return void w.current.scrollIntoView({
                            behavior: "smooth",
                            block: "center"
                        });
                        if (f && null === x && y && y.current) return void y.current.scrollIntoView({
                            behavior: "smooth",
                            block: "center"
                        });
                        b && b.current && b.current.scrollIntoView()
                    }
                },
                $isButtonDisabled: _,
                children: (0, i.jsx)(tf.PrimaryButton, {
                    onClick: () => {
                        B || g(!0), C()
                    },
                    disabled: _,
                    children: "Proceed to pay"
                })
            }), k && (0, i.jsx)(tB, {
                children: "Please enter a valid US ZIP code to continue"
            }), I && (0, i.jsx)(tB, {
                children: "Please select a testing location to continue"
            }), N && (0, i.jsx)(tB, {
                children: "Please select your HSA/FSA eligibility to continue"
            })]
        }) : null
    };
    var tS = e.i(57134);
    let tP = a.default.section.withConfig({
        displayName: "SelectionSection__SelectionSectionWrapper",
        componentId: "sc-12aa66cd-0"
    })
    `
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 16px;

  h5 {
    font-size: 20px;
    line-height: 100%;
  }

  span {
    color: #8d8d8d;
  }
`, tz = a.default.div.withConfig({
        displayName: "SelectionSection__SectionRowTitle",
        componentId: "sc-12aa66cd-1"
    })
    `
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: start;

  button {
    background: transparent;
    border: none;
    color: #ffffff;
    font-size: 1.6rem;
    font-weight: 500;
    padding: 0 8px;
    cursor: pointer;
    white-space: nowrap;
  }

  h5 {
    color: var(--Black-50, #808080);
    leading-trim: both;
    text-edge: cap;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 120%; /* 16.8px */
    letter-spacing: -0.56px;
    text-transform: capitalize;
  }

  span {
    color: #8d8d8d;
  }
`, tT = a.default.div.withConfig({
        displayName: "SelectionSection__SelectionOptions",
        componentId: "sc-12aa66cd-2"
    })
    `
  --border-selected: 1.5px solid rgba(0, 106, 245, 1);
  --border-disabled: 1px solid rgba(0, 0, 0, 0.05);
  --border: 1px solid rgba(0, 0, 0, 0.15);
  --text-grey: rgba(0, 0, 0, 0.5);
  --background-selected: rgba(250, 250, 250, 1);
  position: relative;
  width: 100%;

  .options-container {
    display: ${e=>"card"===e.variant?"grid":"flex"};
    grid-template-columns: ${e=>"card"===e.variant?"1fr 1fr":"none"};
    flex-direction: ${e=>"card"===e.variant?"initial":"column"};
    gap: ${e=>"card"===e.variant?"8px":"4px"};
    // margin-bottom: 2.4rem;
    flex-shrink: 1;

    button {
      border-radius: 8px;
      width: 100%;
      border: var(--border);
      background: white;
      padding: ${e=>"card"===e.variant?"32px 16px":"1.2rem"};
      text-align: ${e=>"card"===e.variant?"center":"left"};
      display: flex;
      flex-direction: column;
      align-items: ${e=>"card"===e.variant?"center":"initial"};
      gap: ${e=>"card"===e.variant?"16px":"0.4rem"};

      color: #000;
      font-feature-settings: 'liga' off, 'clig' off;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 120%; /* 19.2px */
      letter-spacing: -0.45px;

      &.active {
        border: var(--border-selected);
        background: var(--background-selected);
      }

      &:disabled {
        border: var(--border-disabled);
        color: var(--text-grey);
        cursor: not-allowed;
        background: ${e=>"card"===e.variant?"#FAFAFA":"white"};

        opacity: 0.5;

        .subtitle {
          color: rgba(0, 0, 0, 0.3);
        }
      }
    }

    .text {
      display: flex;
      flex-direction: column;
      gap: 0;
      align-items: ${e=>"card"===e.variant?"center":"initial"};
    }

    & .title {
      color: #000;
      text-align: ${e=>"card"===e.variant?"center":"left"};
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 120%;
      letter-spacing: -0.45px;
      margin: 0;
    }

    & .description {
      color: rgba(0, 0, 0, 0.6);
      text-align: ${e=>"card"===e.variant?"center":"left"};
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 130%; /* 18.2px */
      letter-spacing: -0.42px;
      margin: 0;
    }

    .icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 14px;
      height: 14px;
    }
  }
`, t$ = ({
        title: e,
        subtitle: t,
        options: a,
        selectedValue: n,
        onSelect: o,
        disabledOptions: l = [],
        showInfoButton: r = !1,
        infoModal: d,
        infoModalSecond: p,
        dataButtonType: c,
        dataProduct: m,
        variant: h = "default"
    }) => {
        let g = (0, s.useContext)(tS.ModalContext),
            u = (0, s.useContext)(W.OffersModalNewContext);
        return (0, i.jsxs)(tP, {
            children: [(0, i.jsxs)(tz, {
                children: [(0, i.jsxs)("h5", {
                    children: [e, " ", t && (0, i.jsx)("span", {
                        className: "subtitle",
                        children: t
                    })]
                }), r && (u || g) && (0, i.jsx)("button", {
                    onClick: () => {
                        p && u ? (u.set(p), u.show()) : d && g && (g.set(d), g.show())
                    },
                    children: (0, i.jsx)(V.InfoIcon, {
                        style: {
                            width: "1.6rem",
                            height: "auto",
                            position: "relative",
                            bottom: "1px"
                        },
                        fill: "#000"
                    })
                })]
            }), (0, i.jsx)(tT, {
                variant: h,
                children: (0, i.jsx)("div", {
                    className: "options-container",
                    children: a.map(e => (0, i.jsxs)("button", {
                        className: n === e.value ? "active" : "",
                        "data-buttontype": c,
                        "data-product": m,
                        disabled: l.includes(e.value),
                        onClick: () => o(e.value),
                        children: [e.icon ? (0, i.jsx)("span", {
                            className: "icon",
                            children: e.icon
                        }) : null, (0, i.jsxs)("div", {
                            className: "text",
                            children: [(0, i.jsx)("div", {
                                className: "title",
                                children: e.label
                            }), e.description ? (0, i.jsx)("p", {
                                className: "description",
                                children: e.description
                            }) : null]
                        })]
                    }, e.value))
                })
            })]
        })
    };
    var tL = e.i(2100);
    let tH = a.default.div.withConfig({
        displayName: "BloodVisionExperienceModal__PricingModal",
        componentId: "sc-27484897-0"
    })
    `
  width: 100%;
  height: 100%;
  padding: 40px 16px 91px 16px;

  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    padding: 40px 40px 91px 40px;
    width: 100%;
    z-index: 5;
  }
`, tE = a.default.div.withConfig({
        displayName: "BloodVisionExperienceModal__InfoModalContainer",
        componentId: "sc-27484897-1"
    })
    `
  display: flex;
  flex-direction: column;
  gap: 24px;
  height: 100%;
  overflow-y: scroll;
  margin-bottom: -28px;
  ${tL.hideScrollbar}

  .support-text {
    color: rgba(0, 0, 0, 0.8);
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 133.333% */
    letter-spacing: -0.6px;

    span {
      font-weight: 500;
    }
  }
`, tM = a.default.div.withConfig({
        displayName: "BloodVisionExperienceModal__InfoModalTitle",
        componentId: "sc-27484897-2"
    })
    `
  display: flex;
  flex-direction: column;
  gap: 6px;

  h3 {
    color: #000;
    font-size: 24px;
    font-weight: 500;
    line-height: 120%; /* 28.8px */
    letter-spacing: -0.96px;

    &:first-child {
      color: #000;
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: 120%; /* 24px */
      letter-spacing: -0.8px;
    }
  }

  p {
    color: #000;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 18.2px */
    letter-spacing: -0.56px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;

    .fsa-hsa {
      font-size: 14px;
      font-weight: 500;
      line-height: 100%; /* 14px */
      letter-spacing: -0.56px;
    }
  }
`;
    a.default.div.withConfig({
        displayName: "BloodVisionExperienceModal__ImageContainer",
        componentId: "sc-27484897-3"
    })
    `
  width: 100%;
  height: auto;

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
    display: block;
  }

  &.afib-container {
    border-radius: 16px;
    background: #1e1e1e;
    overflow: hidden;
  }

  &.cardio-container {
    border-radius: 16px;
    background: #1e1e1e;
    overflow: hidden;
  }

  &.screen {
    max-width: 400px;
    margin: 0 auto;
  }
`;
    let tV = a.default.div.withConfig({
        displayName: "BloodVisionExperienceModal__InfoModalDescription",
        componentId: "sc-27484897-4"
    })
    `
  display: flex;
  flex-direction: column;
  gap: 4px;

  h3 {
    color: #000;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 133.333% */
    letter-spacing: -0.6px;
  }

  p {
    color: rgba(0, 0, 0, 0.6);
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 21px */
    letter-spacing: -0.6px;

    & + p {
      margin-top: 18px;
    }
  }

  img {
    width: 100%;
  }

  strong {
    font-weight: 500;
  }
`, tW = a.default.hr.withConfig({
        displayName: "BloodVisionExperienceModal__Divider",
        componentId: "sc-27484897-5"
    })
    `
  border: 0;
  height: 1px;
  background-color: #e0e0e0;
  margin: 24px 0;
`, tR = a.default.div.withConfig({
        displayName: "BloodVisionExperienceModal__InfoTextContainer",
        componentId: "sc-27484897-6"
    })
    `
  display: flex;
  padding: 16px;
  align-items: center;
  gap: 14px;
  align-self: stretch;
  border: 1px solid radius;
  border-radius: 12px;
  background: rgba(0, 0, 0, 0.04);
`, tU = a.default.p.withConfig({
        displayName: "BloodVisionExperienceModal__InfoText",
        componentId: "sc-27484897-7"
    })
    `
  color: rgba(0, 0, 0, 0.6);
  font-feature-settings: 'liga' off, 'clig' off;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 16.8px */
  letter-spacing: -0.45px;
`, tF = () => (0, i.jsxs)(tE, {
        children: [(0, i.jsxs)(tM, {
            children: [(0, i.jsx)("h3", {
                children: "Testing Locations"
            }), (0, i.jsx)("p", {
                children: "Depending on your preference, choose between two convenient testing options:"
            })]
        }), (0, i.jsxs)(tV, {
            children: [(0, i.jsx)("h3", {
                children: "At Home "
            }), (0, i.jsx)("p", {
                className: "description",
                children: "Experience the convenience of getting your blood drawn from the comfort of your home. A licensed phlebotomist will visit you at your scheduled time to collect your samples."
            }), (0, i.jsxs)(tR, {
                children: [(0, i.jsx)(V.InfoIcon, {
                    style: {
                        width: "1.6rem",
                        height: "auto",
                        marginTop: "1px"
                    },
                    fill: "#000"
                }), (0, i.jsx)(tU, {
                    children: "Please note that this option comes with an additional fee of $75."
                })]
            }), (0, i.jsx)(tW, {}), (0, i.jsx)("h3", {
                children: "At Center "
            }), (0, i.jsx)("p", {
                className: "description",
                children: "If you prefer visiting a lab, you can opt for a test at Quest Diagnostics or BioReference. In New York, simply select a lab and either walk in or call ahead to book your test. For all other regions in the U.S., you'll need to schedule your appointment in advance through the app before heading to the lab."
            })]
        }), (0, i.jsxs)("p", {
            className: "support-text",
            children: ["Need help? Reach out anytime at", (0, i.jsx)("br", {}), (0, i.jsx)("a", {
                href: "mailto:support@ultrahuman.com",
                children: (0, i.jsx)("span", {
                    children: "support@ultrahuman.com"
                })
            }), " ", "— we've got your back."]
        })]
    }), tO = () => (0, i.jsx)(tH, {
        children: (0, i.jsx)(tF, {})
    }), tD = (0, a.default)(e => (0, i.jsxs)("div", {
        className: e.className,
        children: [e.title ? (0, i.jsx)("h6", {
            children: e.title
        }) : null, e.description ? (0, i.jsx)("p", {
            children: e.description
        }) : null, e.bulletPoints && e.bulletPoints.length > 0 ? (0, i.jsx)("ul", {
            children: e.bulletPoints.map((e, t) => (0, i.jsx)("li", {
                children: e
            }, t))
        }) : null]
    })).withConfig({
        displayName: "ModalitySection__BulletDisclaimer",
        componentId: "sc-b75a2da9-0"
    })
    `
  background-color: ${({backgroundColor:e})=>e||"rgb(247, 247, 247)"};
  padding: 16px;
  border-radius: 8px;
  margin-top: 8px;

  display: flex;
  flex-direction: column;
  gap: 8px;

  h6 {
    color: rgba(0, 0, 0, 0.6);
    font-feature-settings: 'liga' off, 'clig' off;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 120%; /* 16.8px */
    letter-spacing: -0.45px;
  }

  p {
    color: rgba(0, 0, 0, 0.6);
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 15.6px */
    letter-spacing: -0.24px;
  }

  ul {
    list-style-type: none;
    padding: 0;

    li {
      color: rgba(0, 0, 0, 0.6);
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 130%; /* 15.6px */
      letter-spacing: -0.24px;
      margin-bottom: 4px;
    }
  }
`, tG = (0, s.forwardRef)(({
        isCampaignActive: e = !1
    }, t) => {
        let {
            availableModalityOptions: a,
            selectedModality: n,
            setSelectedModality: o
        } = H();
        (0, s.useEffect)(() => {
            e && n === z.AT_HOME && a.includes(z.WALK_IN) ? o(z.WALK_IN) : a && 1 === a.length && !n && o(a[0])
        }, [a, n, o, e]);
        let l = [{
                label: "At Home test",
                value: z.AT_HOME,
                description: "Nurse visit at your preferred location.",
                icon: (0, i.jsx)(ei.CustomImage, {
                    src: "web_v2/blood-vision/icons/at-home.png",
                    alt: "Home Icon",
                    width: 16,
                    height: 16
                })
            }, {
                label: "Lab test",
                value: z.WALK_IN,
                description: "No extra cost. Labs across the U.S.",
                icon: (0, i.jsx)(ei.CustomImage, {
                    src: "web_v2/blood-vision/icons/at-lab.png",
                    alt: "Lab Icon",
                    width: 16,
                    height: 16
                })
            }],
            r = H(),
            d = s.default.useMemo(() => {
                let t = Object.values(z).filter(e => !a.includes(e));
                return e && !t.includes(z.AT_HOME) ? [...t, z.AT_HOME] : t
            }, [a, e]);
        return (0, i.jsxs)("div", {
            ref: t,
            children: [(0, i.jsx)(t$, {
                title: "Testing Location",
                options: l,
                selectedValue: n || "",
                onSelect: e => o(e),
                disabledOptions: d,
                showInfoButton: !0,
                infoModalSecond: (0, i.jsx)(R.ImageModal, {
                    children: (0, i.jsx)(tO, {})
                }),
                dataButtonType: "blood-vision modality selector",
                dataProduct: "Ultrahuman Blood Vision",
                variant: "card"
            }), r.zipDisclaimer ? (0, i.jsx)(tD, {
                title: r.zipDisclaimer.title,
                description: r.zipDisclaimer.description,
                bulletPoints: r.zipDisclaimer.bullet_points
            }) : null]
        })
    });
    tG.displayName = "ModalitySection";
    var tZ = e.i(24911),
        tq = e.i(68489);
    let tY = (0, tq.default)(() => e.A(67170).then(e => e.HsaFsaOffer), {
            loadableGenerated: {
                modules: [69786]
            },
            ssr: !1
        }),
        tK = (0, tq.default)(() => e.A(60709).then(e => e.ImageModal), {
            loadableGenerated: {
                modules: [16390]
            },
            ssr: !1
        }),
        tX = (0, s.forwardRef)((e, t) => {
            let {
                isHsaFsaIncluded: a,
                setIsHsaFsaIncluded: n,
                selectedModality: o
            } = H(), l = [{
                label: "Yes",
                value: "include"
            }, {
                label: "No",
                value: "exclude"
            }];
            return (0, i.jsx)("div", {
                ref: t,
                children: (0, i.jsx)(t$, {
                    title: "HSA/FSA - Use your pre-tax dollars",
                    subtitle: "",
                    options: l,
                    selectedValue: null === a ? "" : a ? "include" : "exclude",
                    onSelect: e => {
                        n("include" === e)
                    },
                    disabledOptions: o ? [] : l.map(e => e.value),
                    showInfoButton: !0,
                    infoModalSecond: (0, i.jsx)(tK, {
                        children: (0, i.jsx)(tY, {})
                    }),
                    dataButtonType: "blood-vision hsa/fsa selector",
                    dataProduct: "Ultrahuman Blood Vision"
                })
            })
        });
    tX.displayName = "HSASection";
    var tQ = e.i(26019),
        tJ = e.i(83390),
        t0 = e.i(9158),
        t1 = e.i(18390);
    let t2 = () => {
            let e = (0, s.useContext)(W.OffersModalNewContext),
                {
                    zipCode: t,
                    selectedPlan: a
                } = H();
            return {
                showCampaignModal: () => {
                    e && (e.set((0, i.jsx)(R.ImageModal, {
                        children: (0, i.jsx)(t1.CampaignForm, {
                            title: "Almost there",
                            description: "Share your email address to activate your free Blood Vision test.",
                            preSelectedCountry: "US",
                            disableCountrySelect: !0,
                            isModal: !0,
                            preFilledPincode: t,
                            preSelectedPlanId: a ? .plan_id,
                            ctaText: "Book now",
                            ctaSuccessText: "Purchase succesful",
                            sourceURL: "pricing"
                        })
                    })), e.show())
                }
            }
        },
        t4 = a.default.div.withConfig({
            displayName: "RightPanelComponent__RightPanel",
            componentId: "sc-b4187be9-0"
        })
    `
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-top: 16px;
  padding-bottom: 32px;

  .title-container {
    display: flex;
    flex-direction: row;
    gap: 4px;
    align-items: flex-end;
    justify-content: space-between;
  }

  .currencyDropdown {
    position: absolute;
    right: 0;
    top: 0;

    @media (min-width: 992px) {
      display: none;
    }
  }

  h2 {
    font-size: 36px;
    line-height: 40px;
    letter-spacing: -0.04em;

    span {
      font-weight: 400;
      font-size: 20px;
      line-height: 110%;
    }
  }

  .affiliate {
    display: flex;
    align-items: center;
    gap: 10px;

    img {
      width: 24px;
      height: 24px;
      object-fit: cover;
      border-radius: 50%;
    }

    p {
      color: rgba(0, 0, 0, 0.5);
      font-size: 1.6rem;
      line-height: 110%; /* 1.1rem */
      letter-spacing: -0.04rem;
    }
  }

  .price {
    font-size: 28px;
    line-height: 100%;
    display: flex;
    gap: 10px;

    .strike-through {
      text-decoration: line-through;
      color: rgba(0, 0, 0, 0.5);
    }

    .early-bird-chip {
      font-size: 16px;
      padding: 4px 24px;
      border-radius: 40px;
      background: #eee;
    }
  }

  .sub-head {
    align-items: center;
    width: fit-content;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .offerTag {
    margin: 6px 0;
    gap: 0.8rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 0.8rem;
    border-radius: 8px;
    background: rgba(0, 0, 0, 0.04);
    width: fit-content;

    img {
      width: 24px;
      height: 24px;
      object-fit: cover;
      border-radius: 50%;
    }

    span {
      opacity: 0.6;
      color: #000;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      .offerApplied {
        opacity: 1;
        color: #000;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        text-transform: uppercase;
      }
    }
    .ellipse {
      margin: 0 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .discount {
      opacity: 0.6;
      color: #000;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }

    &.transparent {
      background: transparent !important;
      background-color: transparent !important;
      padding: 0;

      span {
        color: #007ff5;
        font-weight: 500;
        font-size: 13px;
        letter-spacing: 1px;
        text-transform: uppercase;
        opacity: 1;

        display: flex;
        align-items: center;
      }
    }
  }

  & .description {
    font-size: 16px;
    line-height: 130%;
    color: var(--text-grey);
  }

  .shipping-estimate {
    display: flex;
    align-items: center;
    margin: 8px 0;
    img {
      margin-right: 8px;
    }

    @media (min-width: 992px) {
      margin: unset;
    }
    font-size: 16px;
    line-height: 130%;
    strong {
      font-weight: 500;
    }
  }

  @media (min-width: 992px) {
    grid-column-start: 2;
    gap: 0;
    padding: 4.8rem 0;
    padding-bottom: 0;
    h2 {
      font-size: 48px;
      line-height: 48px;
      letter-spacing: -0.04em;

      span {
        font-weight: 400;
        font-size: 20px;
        line-height: 110%;
      }
    }
  }
`, t6 = a.default.div.withConfig({
        displayName: "RightPanelComponent__TitleContainer",
        componentId: "sc-b4187be9-1"
    })
    `
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: flex-end;
  justify-content: space-between;
`;
    a.default.div.withConfig({
        displayName: "RightPanelComponent__PriceContainer",
        componentId: "sc-b4187be9-2"
    })
    `
  display: flex;
  // align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;

  font-size: 28px;
  line-height: 100%;
  display: flex;
  gap: 10px;

  .strike-through {
    text-decoration: line-through;
    color: rgba(0, 0, 0, 0.5);
  }

  .early-bird-chip {
    font-size: 16px;
    padding: 4px 24px;
    border-radius: 40px;
    background: #eee;
  }

  &.affiliate {
    display: flex;
    align-items: center;
    gap: 10px;

    img {
      width: 24px;
      height: 24px;
      object-fit: cover;
      border-radius: 50%;
    }

    p {
      color: rgba(0, 0, 0, 0.5);
      font-size: 1.6rem;
      line-height: 110%; /* 1.1rem */
      letter-spacing: -0.04rem;
    }
  }
`;
    let t5 = a.default.h2.withConfig({
        displayName: "RightPanelComponent__H2",
        componentId: "sc-b4187be9-3"
    })
    `
  font-size: 3.2rem;
  font-weight: 500;
  line-height: 120%;
  letter-spacing: -1.28px;

  @media (min-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
    font-size: 4rem;
  }
`, t8 = () => {
        let {
            width: e
        } = (0, d.useWindowSize)(), {
            zipCode: t,
            setZipCode: n,
            isLoading: o,
            selectedPlan: l,
            addOns: r,
            selectedAddOns: p,
            toggleAddOn: c,
            total: m,
            handleCheckout: h,
            showDiscount: g,
            discount: u,
            affiliateDetails: f,
            effectiveDiscount: x,
            isZipValid: b,
            defaultDiscount: w
        } = H(), y = (0, s.useRef)(null), v = (0, s.useRef)(null), j = (0, s.useRef)(null), C = s.default.useMemo(() => {
            if (!l) return !1;
            let e = !0 === l.is_plan_campaign;
            return console.log("🔍 Campaign Detection:", {
                planName: l.name,
                is_plan_campaign: l.is_plan_campaign,
                isCampaign: e
            }), e
        }, [l]), {
            showCampaignModal: _
        } = t2(), k = a.default.div.withConfig({
            displayName: "RightPanelComponent__TitleContainer",
            componentId: "sc-b4187be9-4"
        })
        `
    display: flex;
    flex-direction: row;
    gap: 4px;
    align-items: flex-end;
    justify-content: space-between;
  `, I = a.default.div.withConfig({
            displayName: "RightPanelComponent__Header",
            componentId: "sc-b4187be9-5"
        })
        `
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-bottom: 32px;
  `, N = a.default.div.withConfig({
            displayName: "RightPanelComponent__PersonalizeSection",
            componentId: "sc-b4187be9-6"
        })
        `
    display: flex;
    flex-direction: column;
    gap: 16px;
  `, B = a.default.div.withConfig({
            displayName: "RightPanelComponent__PersonalizeTitle",
            componentId: "sc-b4187be9-7"
        })
        `
    h3 {
      font-size: 20px;
      font-weight: 500;
      line-height: 120%;
      letter-spacing: -0.4px;
      margin: 0;
    }
  `, A = [{
            title: (0, i.jsx)(i.Fragment, {
                children: (0, i.jsxs)("p", {
                    children: [(0, i.jsx)("b", {
                        children: "HSA/FSA"
                    }), " | Save more with your pre-tax dollars"]
                })
            }),
            modal: (0, i.jsx)(R.ImageModal, {
                children: (0, i.jsx)(t0.HsaFsaOffer, {})
            })
        }];
        return (0, i.jsxs)(t4, {
            id: "blood-vision-buy-plans",
            children: [e < 992 ? null : (0, i.jsxs)(I, {
                children: [(0, i.jsx)(k, {
                    className: "title-container",
                    children: (0, i.jsx)(t5, {
                        children: "Blood Vision"
                    })
                }), (0, i.jsx)("div", {
                    style: {
                        width: "100%",
                        padding: "10px 0"
                    },
                    children: (0, i.jsx)("span", {
                        style: {
                            textTransform: "none",
                            fontSize: "15px",
                            fontWeight: "400",
                            lineHeight: "120%",
                            letterSpacing: "-0.56px",
                            color: "#000000",
                            position: "relative",
                            bottom: "4px"
                        },
                        children: "Comprehensive biomarker testing for metabolic, cardiovascular, immune, hormonal, and nutritional health, with AI-powered clinical summary and personalized supplement and lifestyle recommendations."
                    })
                }), (0, i.jsxs)("div", {
                    className: "offerFlex",
                    style: {
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "8px",
                        padding: "8px 0"
                    },
                    children: [g && u && (0, i.jsxs)("p", {
                        className: "offerTag",
                        children: [(0, i.jsx)(tQ.default, {
                            src: tJ.default,
                            alt: "birthday_icon",
                            style: {
                                borderRadius: "0"
                            }
                        }), (0, i.jsx)("span", {
                            children: "Birthday Discount Applied"
                        })]
                    }), "affiliate" === x.type && f && l && (0, i.jsx)("p", {
                        className: "offerTag transparent",
                        children: (0, i.jsxs)("span", {
                            className: " ",
                            children: [Math.round(x.amount / (l.price_split ? .base_price || l.original_price) * 100), "% off applied via ", f.code]
                        })
                    }), "black_friday" === x.type && w && (0, i.jsx)("p", {
                        className: "offerTag",
                        children: (0, i.jsxs)("span", {
                            children: [(0, i.jsx)("span", {
                                className: "offerApplied",
                                children: "NY26"
                            }), " Offer Applied"]
                        })
                    })]
                }), A && (0, i.jsx)(tZ.OffersCarousel, {
                    data: A,
                    leftAligned: !0
                })]
            }), (0, i.jsx)(et, {
                zipCode: t,
                setZipCode: n,
                isLoading: o,
                ref: y
            }), (0, i.jsx)(ed, {}), (0, i.jsx)(ti, {}), (0, i.jsx)(ed, {}), (0, i.jsx)(tG, {
                ref: v,
                isCampaignActive: C
            }), !C && (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(ed, {}), (0, i.jsx)(tX, {
                    ref: j
                })]
            }), b && l && (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(ed, {}), r && r.length > 0 ? (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsxs)(N, {
                        children: [(0, i.jsx)(B, {
                            children: (0, i.jsx)("h3", {
                                children: "Personalize your Plan"
                            })
                        }), (0, i.jsx)(tu, {
                            addOns: r,
                            selectedAddOns: p,
                            toggleAddOn: c
                        })]
                    }), (0, i.jsx)(ed, {})]
                }) : null, (0, i.jsx)(tA, {
                    mainPlan: l,
                    selectedAddOns: r.filter(e => p.includes(e.id)),
                    total: m,
                    onCheckout: () => {
                        C ? _() : h()
                    },
                    isLoading: o
                })]
            })]
        })
    };
    var t3 = e.i(73362),
        t9 = e.i(9596),
        t7 = e.i(44516),
        ie = e.i(30082),
        it = e.i(78198);
    let ii = (0, tq.default)(() => e.A(85244).then(e => e.OffersCarousel), {
            loadableGenerated: {
                modules: [63831]
            },
            ssr: !1
        }),
        ia = a.default.div.withConfig({
            displayName: "LeftPanelComponent__CarouselWrapper",
            componentId: "sc-8686a3d4-0"
        })
    `
  position: relative;
  width: 100%;
  height: 350px;
  overflow: hidden;

  @media (min-width: 992px) {
    margin-top: 170px;
    overflow: visible;
    margin-top: unset;
    margin-right: 16px;
    height: auto;
    max-height: 100%;
  }
`, io = a.default.div.withConfig({
        displayName: "LeftPanelComponent__HeaderInfoMobile",
        componentId: "sc-8686a3d4-1"
    })
    `
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 16px 0;
  @media (min-width: 992px) {
    display: none;
  }
`, il = a.default.div.withConfig({
        displayName: "LeftPanelComponent__MblPriceContainer",
        componentId: "sc-8686a3d4-2"
    })
    `
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  font-size: 16px;

  b {
    font-weight: 500;
  }

  span {
    font-style: normal;
    line-height: 120%; /* 19.2px */
    letter-spacing: -0.64px;

    &.strike-through {
      color: #808080;
      text-decoration-line: line-through;
    }
  }
`, ir = () => {
        let {
            width: e
        } = (0, d.useWindowSize)(), t = e < 992, a = [{
            id: "0",
            image: "https://public-web-assets.uh-static.com/web_v2/blood-vision/buy/desktop/car_a.png",
            icon: (0, i.jsx)(t7.MarkerIcon, {
                width: t ? 14 : 16,
                height: t ? 8.5 : 10
            }),
            alt: "Slide 3 description",
            text: "Markers",
            video: (0, it.getCompressedAssetUrl)("/web_v2/blood-vision/buy/desktop/Markers_up.mp4"),
            video_mbl: (0, it.getCompressedAssetUrl)("/web_v2/blood-vision/buy/desktop/Markers_up.mp4")
        }, {
            id: "1",
            image: "https://public-web-assets.uh-static.com/web_v2/blood-vision/buy/desktop/car_a.png",
            icon: (0, i.jsx)(t9.InsightsIcon, {
                width: t ? 14 : 16,
                height: t ? 14 : 16
            }),
            alt: "Slide 3 description",
            text: "Insights",
            video: (0, it.getCompressedAssetUrl)("/web_v2/blood-vision/buy/desktop/Clinician_Notes.mp4"),
            video_mbl: (0, it.getCompressedAssetUrl)("/web_v2/blood-vision/buy/desktop/Clinician_Notes.mp4")
        }, {
            id: "2",
            image: "https://public-web-assets.uh-static.com/web_v2/blood-vision/buy/desktop/car_a.png",
            alt: "Slide 1 description",
            icon: (0, i.jsx)(ie.TinyTimer, {
                width: t ? 15 : 17,
                height: t ? 14 : 17
            }),
            text: "Blood Age",
            video: (0, it.getCompressedAssetUrl)("/web_v2/blood-vision/buy/desktop/Reveal_01.mp4"),
            video_mbl: (0, it.getCompressedAssetUrl)("/web_v2/blood-vision/buy/desktop/Reveal_01.mp4/w_1200")
        }, {
            id: "3",
            image: "https://public-web-assets.uh-static.com/web_v2/blood-vision/buy/desktop/car_a.png",
            icon: (0, i.jsx)(t3.HomeIcon, {
                width: t ? 15 : 17,
                height: t ? 14 : 17
            }),
            alt: "Slide 2 description",
            text: "Dashboard",
            video: (0, it.getCompressedAssetUrl)("/web_v2/blood-vision/buy/desktop/Home_01.mp4"),
            video_mbl: (0, it.getCompressedAssetUrl)("/web_v2/blood-vision/buy/desktop/Home_01.mp4")
        }], {
            selectedPlan: n,
            addOns: o,
            selectedAddOns: l,
            isCountrySupported: r,
            discount: p,
            showDiscount: c,
            effectiveDiscount: m,
            affiliateDetails: h,
            defaultDiscount: g
        } = H(), u = [{
            title: (0, i.jsx)(i.Fragment, {
                children: (0, i.jsxs)("p", {
                    children: [(0, i.jsx)("b", {
                        children: "HSA/FSA"
                    }), " | Save more with your pre-tax dollars"]
                })
            }),
            modal: (0, i.jsx)(R.ImageModal, {
                children: (0, i.jsx)(t0.HsaFsaOffer, {})
            })
        }], f = (0, s.useMemo)(() => {
            if (!n) return 799;
            let e = 799;
            return l.forEach(t => {
                let i = o.find(e => e.id === t);
                i && (e += parseFloat(i.price.replace("$", "")))
            }), e
        }, [n, o, l]);
        return ((0, s.useEffect)(() => {
            f && console.log("Original Total:", f)
        }, []), r) ? (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsxs)(io, {
                children: [(0, i.jsx)(t6, {
                    className: "title-container",
                    children: (0, i.jsx)(t5, {
                        children: "Blood Vision"
                    })
                }), (0, i.jsxs)(il, {
                    children: [(0, i.jsx)("div", {
                        style: {
                            width: "100%"
                        },
                        children: (0, i.jsx)("span", {
                            style: {
                                textTransform: "none",
                                fontSize: "14px",
                                fontWeight: "400",
                                lineHeight: "120%",
                                letterSpacing: "-0.64px",
                                opacity: "0.75",
                                color: "#000000"
                            },
                            children: "Comprehensive biomarker testing for metabolic, cardiovascular, immune, hormonal, and nutritional health, with AI-powered clinical summary and personalized supplement and lifestyle recommendations."
                        })
                    }), (0, i.jsxs)("div", {
                        style: {
                            marginTop: "8px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "8px"
                        },
                        children: [c && p && (0, i.jsxs)("p", {
                            style: {
                                margin: "6px 0",
                                gap: "0.8rem",
                                display: "flex",
                                flexWrap: "wrap",
                                alignItems: "center",
                                padding: "0.5rem 0.8rem",
                                borderRadius: "8px",
                                background: "rgba(0, 0, 0, 0.04)",
                                width: "fit-content",
                                fontSize: "16px",
                                fontStyle: "normal",
                                fontWeight: "400",
                                lineHeight: "normal"
                            },
                            children: [(0, i.jsx)(tQ.default, {
                                src: tJ.default,
                                alt: "birthday_icon",
                                style: {
                                    borderRadius: "0"
                                }
                            }), (0, i.jsx)("span", {
                                style: {
                                    opacity: "0.6",
                                    color: "#000",
                                    textTransform: "none",
                                    fontWeight: "400"
                                },
                                children: "Birthday Discount Applied"
                            })]
                        }), "affiliate" === m.type && h && n && (0, i.jsx)("p", {
                            style: {
                                margin: "6px 0",
                                gap: "0.8rem",
                                display: "flex",
                                flexWrap: "wrap",
                                alignItems: "center",
                                padding: "0",
                                borderRadius: "8px",
                                background: "transparent",
                                width: "fit-content",
                                fontSize: "16px",
                                fontStyle: "normal",
                                fontWeight: "400",
                                lineHeight: "normal"
                            },
                            children: (0, i.jsxs)("span", {
                                style: {
                                    color: "#007ff5",
                                    textTransform: "uppercase",
                                    fontWeight: "500",
                                    fontSize: "13px",
                                    letterSpacing: "1px",
                                    opacity: "1"
                                },
                                children: [Math.round(m.amount / (n.price_split ? .base_price || n.original_price) * 100), "% off applied via ", h.code]
                            })
                        }), "black_friday" === m.type && g && (0, i.jsx)("p", {
                            style: {
                                margin: "6px 0",
                                gap: "0.8rem",
                                display: "flex",
                                flexWrap: "wrap",
                                alignItems: "center",
                                padding: "0.5rem 0.8rem",
                                borderRadius: "8px",
                                background: "rgba(0, 0, 0, 0.04)",
                                width: "fit-content",
                                fontSize: "16px",
                                fontStyle: "normal",
                                fontWeight: "400",
                                lineHeight: "normal"
                            },
                            children: (0, i.jsxs)("span", {
                                style: {
                                    opacity: "0.6",
                                    color: "#000",
                                    textTransform: "none",
                                    fontWeight: "400"
                                },
                                children: [(0, i.jsx)("span", {
                                    style: {
                                        opacity: "1",
                                        fontWeight: "500"
                                    },
                                    children: "NY26"
                                }), " ", "Offer Applied"]
                            })
                        })]
                    })]
                }), u && (0, i.jsx)(ii, {
                    data: u,
                    leftAligned: !0
                })]
            }), (0, i.jsx)(ia, {
                children: (0, i.jsx)(N, {
                    items: a
                })
            })]
        }) : null
    }, is = a.default.section.withConfig({
        displayName: "BloodVisionPage__BuyComponentContainer",
        componentId: "sc-7c1e0fdf-0"
    })
    `
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  padding: 0;

  @media (max-width: 992px) {
    ${n.ContainerCSS};
  }

  @media (min-width: 992px) {
    grid-template-columns: calc(67% - 20.5px) calc(33% - 20.5px);
    gap: 41px;
    padding: 24px;
    padding-top: 0;
  }
`, id = (0, a.default)(({
        className: e
    }) => {
        let t = (0, l.useRouter)();
        return (0, i.jsxs)("div", {
            className: e,
            children: [(0, i.jsx)("h1", {
                children: "Blood Vision"
            }), (0, i.jsx)("p", {
                children: "Blood Vision is currently not available in your region."
            }), (0, i.jsx)(o.PrimaryLink, {
                href: {
                    pathname: "/blood-vision",
                    query: { ...t.query
                    }
                },
                children: "Learn more"
            })]
        })
    }).withConfig({
        displayName: "BloodVisionPage__NotAvailableSection",
        componentId: "sc-7c1e0fdf-1"
    })
    `
  padding: 24px 0;

  display: flex;
  flex-direction: column;
  gap: 16px;

  h1 {
    font-size: 24px;
    font-weight: 500;
    line-height: 32px;
    color: var(--color-text);
  }

  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;

    color: #00000099;
  }

  ${o.PrimaryLink} {
    width: fit-content;
  }
`, ip = e => (0, i.jsxs)(is, {
        id: "blood-vision-buy",
        children: [(0, i.jsx)(ir, {}), e.isAvailable ? (0, i.jsx)(t8, {}) : null, e.isAvailable ? null : (0, i.jsx)(id, {})]
    });
    var ic = e.i(81694),
        im = e.i(54134),
        ih = e.i(72218),
        ig = e.i(48095);
    let iu = a.default.div.withConfig({
        displayName: "DotLine__DrawArea",
        componentId: "sc-1a28e599-0"
    })
    `
  width: 100%;
  overflow: hidden;
  padding: 65px 0 75px;

  @media only screen and (max-width: 991px) {
    padding: 30px 0 65px;
  }

  @media only screen and (max-width: 767px) {
    padding: 25px 0 45px;
  }
`, ix = a.default.div.withConfig({
        displayName: "DotLine__DrawWrapper",
        componentId: "sc-1a28e599-1"
    })
    `
  display: flex;
  align-items: center;
  will-change: transform;
  transform: translateX(-100%); /* Moved off-screen to the left */
`, ib = a.default.div.withConfig({
        displayName: "DotLine__Dot",
        componentId: "sc-1a28e599-2"
    })
    `
  width: 12px;
  height: 12px;
  background-color: #3463ff;
  border-radius: 50%;
  display: none;
`, iw = a.default.div.withConfig({
        displayName: "DotLine__Line",
        componentId: "sc-1a28e599-3"
    })
    `
  height: 4px;
  width: 100%;
  background: #3463ff;
  background: linear-gradient(
    90deg,
    #fff,
    rgba(0, 0, 0, 0.7)
  ); /* Reversed gradient */
  border-radius: 12px;
`, iy = ({
        rootMargin: e = "0px",
        threshold: t = .4
    }) => {
        let a = (0, s.useRef)(null);
        return (0, s.useEffect)(() => {
            let i = a.current,
                n = () => {
                    if (!i) return;
                    let e = i.getBoundingClientRect(),
                        t = window.innerHeight,
                        a = t - 132,
                        n = Math.min(0, -100 + Math.min(Math.max(t - e.top, 0), a) / a * 100);
                    i.style.transform = `translateX(${n}%)`
                },
                o = new IntersectionObserver(e => {
                    e.forEach(e => {
                        e.isIntersecting && "opacity" === e.target.getAttribute("data-animation") && e.target.classList.add("fade-in")
                    })
                }, {
                    root: null,
                    rootMargin: e,
                    threshold: t
                });
            return document.querySelectorAll('[data-animation="opacity"]').forEach(e => {
                o.observe(e)
            }), i && (n(), window.addEventListener("scroll", n), window.addEventListener("resize", n)), () => {
                window.removeEventListener("scroll", n), window.removeEventListener("resize", n), o.disconnect()
            }
        }, [e, t]), (0, i.jsx)(iu, {
            className: "draw-a",
            children: (0, i.jsxs)(ix, {
                ref: a,
                className: "draw-w",
                "data-animation": "dot-line",
                children: [(0, i.jsx)(iw, {
                    className: "line"
                }), (0, i.jsx)(ib, {
                    className: "dot"
                })]
            })
        })
    }, iv = a.default.div.withConfig({
        displayName: "DotLine__GlobalStyle",
        componentId: "sc-1a28e599-4"
    })
    `
  .fade-in {
    animation: fadeIn 0.5s ease-in forwards;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`, ij = () => (0, i.jsx)(iv, {
        children: (0, i.jsx)(iy, {})
    }), iC = a.default.div.withConfig({
        displayName: "HowItWorks__CardContainer",
        componentId: "sc-ca2593d2-0"
    })
    `
  display: flex;
  gap: 24px;
  justify-content: center;
  flex-direction: column;

  @media (min-width: ${({theme:e})=>e.globalV2.sm.maxWidth}) {
    align-items: center;
  }

  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    flex-direction: row;
  }
`, i_ = a.default.div.withConfig({
        displayName: "HowItWorks__Card",
        componentId: "sc-ca2593d2-1"
    })
    `
  width: 100%;
  min-height: 482px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  overflow: hidden;

  @media (min-width: ${({theme:e})=>e.globalV2.sm.maxWidth}) {
    min-height: 542px;
    width: 390px;
  }

  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    min-width: 390px;
    min-height: 542px;
    min-width: unset;
    flex: 1;
  }

  &:nth-child(1) {
    .text {
      color: #000;

      & .description {
        color: rgba(0, 0, 0, 0.6);
      }
    }
  }

  .img-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    overflow: hidden;

    img {
      object-fit: cover;
      object-position: center;

      width: 100%;
      height: 100%;
    }
  }

  .text {
    display: flex;
    flex-direction: column;
    gap: 12px;
    color: #fff;
    padding: 0 32px 32px;
    min-height: 170px;
    z-index: 2;

    .tag {
      font-size: 14px;
      font-weight: 500;
      line-height: 14px; /* Changed to absolute value instead of percentage */
      letter-spacing: 1.96px;
      text-transform: uppercase;
    }

    & .title {
      font-size: 24px;
      font-weight: 500;
      line-height: 33.6px; /* Changed to absolute value based on 140% of 24px */
      letter-spacing: -0.72px;
    }

    & .description {
      color: rgba(255, 255, 255, 0.8);
      font-size: 16px;
      line-height: 22.4px; /* Added explicit line-height (140% of 16px) */
      letter-spacing: -0.16px;
    }
  }
`, ik = (0, a.default)(({
        className: e,
        htmlId: t
    }) => (0, i.jsx)("section", {
        className: e,
        id: t,
        children: (0, i.jsxs)(n.Container, {
            style: {
                position: "relative"
            },
            children: [(0, i.jsx)(eg.H2, {
                children: "Decipher your body's hidden language"
            }), (0, i.jsx)(eg.P, {
                children: "Blood Vision interprets your biomarkers using advanced research and evidence-backed longevity science."
            }), (0, i.jsx)(ij, {}), (0, i.jsxs)(iC, {
                children: [(0, i.jsxs)(i_, {
                    children: [(0, i.jsxs)("div", {
                        className: "text",
                        children: [(0, i.jsx)("p", {
                            className: "tag",
                            children: "STEP 1"
                        }), (0, i.jsx)("p", {
                            className: "title",
                            children: "Schedule your test"
                        }), (0, i.jsx)("p", {
                            className: "description",
                            children: "Choose between at-home testing (with a licensed phlebotomist) or visit your nearest diagnostics centre."
                        })]
                    }), (0, i.jsx)("div", {
                        className: "img-container",
                        children: (0, i.jsx)(tQ.default, {
                            alt: "blood_vision_step_1",
                            src: (0, it.getAssetUrl)("/web_v2/blood-vision/buy/desktop/StepOne_updated.png"),
                            fill: !0
                        })
                    })]
                }), (0, i.jsxs)(i_, {
                    children: [(0, i.jsxs)("div", {
                        className: "text",
                        children: [(0, i.jsx)("p", {
                            className: "tag",
                            children: "STEP 2"
                        }), (0, i.jsx)("p", {
                            className: "title",
                            children: "Analyze your results"
                        }), (0, i.jsx)("p", {
                            className: "description",
                            children: "Unlock deep insights into your physiology with 100+ biomarkers along with a clinician's summary."
                        })]
                    }), (0, i.jsx)("div", {
                        className: "img-container",
                        children: (0, i.jsx)(tQ.default, {
                            alt: "blood_vision_step_2",
                            src: (0, it.getAssetUrl)("/web_v2/blood-vision/buy/desktop/StepTwo_updated.png"),
                            fill: !0
                        })
                    })]
                }), (0, i.jsxs)(i_, {
                    children: [(0, i.jsxs)("div", {
                        className: "text",
                        children: [(0, i.jsx)("p", {
                            className: "tag",
                            children: "STEP 3"
                        }), (0, i.jsx)("p", {
                            className: "title",
                            children: "Book a follow up test"
                        }), (0, i.jsx)("p", {
                            className: "description",
                            children: "A second test reveals how your biomarkers are evolving, giving you insight into trends and improvements."
                        })]
                    }), (0, i.jsx)("div", {
                        className: "img-container",
                        children: (0, i.jsx)(tQ.default, {
                            alt: "blood_vision_step_3",
                            src: (0, it.getAssetUrl)("/web_v2/blood-vision/buy/desktop/StepThree_updated.png"),
                            fill: !0
                        })
                    })]
                })]
            })]
        })
    })).withConfig({
        displayName: "HowItWorks",
        componentId: "sc-ca2593d2-2"
    })
    `
  ${ig.SectionPadding}
  overflow: hidden;
  ${eg.H2} {
    text-align: center;
  }
  ${eg.P} {
    text-align: center;
    margin-top: 8px;
    margin-bottom: 8px;

    @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
      margin-top: 8px;
      margin-bottom: 0px;
    }
  }
`;
    var iI = e.i(46737),
        iN = e.i(2488);
    let iB = (0, a.default)(({
        className: e
    }) => {
        let t = (0, iI.useGlobalUI)(),
            [o, l] = (0, s.useState)(!1),
            d = e => {
                if (!document) return;
                let t = document.getElementById(e);
                if (!t) return;
                let i = t.getBoundingClientRect().top + window.pageYOffset + -50;
                window.scrollTo({
                    top: i,
                    behavior: "smooth"
                })
            },
            p = a.default.div.withConfig({
                displayName: "SecondaryNav__Nav",
                componentId: "sc-3145f5f5-0"
            })
        `
      width: 100%;
      overflow-x: auto;
      ${tL.hideScrollbar}
      display: flex;
      flex-direction: row;
      gap: 12px;

      justify-content: flex-start;

      @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
        gap: 16px;
        justify-content: center;
        width: fit-content;
      }
    `, c = a.default.div.withConfig({
            displayName: "SecondaryNav__MobileNav",
            componentId: "sc-3145f5f5-1"
        })
        `
      display: flex;
      flex-direction: column;
      gap: 16px;

      align-items: center;
    `, m = a.default.button.withConfig({
            displayName: "SecondaryNav__NavItem",
            componentId: "sc-3145f5f5-2"
        })
        `
      flex-shrink: 0;
      border: none;
      background: transparent;
      color: #000000;
      font-size: 16px;
      font-weight: 400;
      transition: box-shadow 0.3s ease-in-out;
      letter-spacing: -0.8px;

      @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
        padding: 16px 8px;
      }

      &.active {
        box-shadow: inset 0px -2px 0px #000000;
      }
    `, h = a.default.button.withConfig({
            displayName: "SecondaryNav__MobileNavItem",
            componentId: "sc-3145f5f5-3"
        })
        `
      flex-shrink: 0;
      border: none;
      background: transparent;
      color: rgba(0, 0, 0, 0.35);
      font-size: 16px;
      font-weight: 500;
      transition: box-shadow 0.3s ease-in-out;
      // opacity: 0;
      animation: fadeIn 0.3s ease-in-out forwards;
      letter-spacing: -0.8px;

      &.active {
        color: #000000;
      }
    `, g = {
            "how-it-works": {
                title: "How it works",
                id: "how-it-works"
            },
            "what-is-included": {
                title: "What's included",
                id: "what-is-included"
            },
            "common-questions": {
                title: "Common Questions",
                id: "common-questions"
            }
        }, u = (0, iN.default)(Object.keys(g), 60), f = (0, i.jsxs)(p, {
            children: [(0, i.jsx)(m, {
                onClick: () => d("how-it-works"),
                className: "how-it-works" === u ? "active" : "",
                children: "How it works"
            }), (0, i.jsx)(m, {
                onClick: () => d("what-is-included"),
                className: "what-is-included" === u ? "active" : "",
                children: "What's included"
            }), (0, i.jsx)(m, {
                onClick: () => d("common-questions"),
                className: "common-questions" === u ? "active" : "",
                children: "Common questions"
            })]
        }), x = (0, i.jsxs)(c, {
            children: [(0, i.jsx)(h, {
                onClick: () => d("how-it-works"),
                className: "how-it-works" === u ? "active" : "",
                style: {
                    animationDelay: "0"
                },
                children: "How it works"
            }), (0, i.jsx)(h, {
                onClick: () => d("what-is-included"),
                className: "what-is-included" === u ? "active" : "",
                style: {
                    animationDelay: "0.05s"
                },
                children: "What's included"
            }), (0, i.jsx)(h, {
                onClick: () => d("common-questions"),
                className: "common-questions" === u ? "active" : "",
                style: {
                    animationDelay: "0.1s"
                },
                children: "Common questions"
            })]
        });
        return (0, i.jsx)("div", {
            className: `${e}`,
            style: {
                top: `${t.headerVisible?t.headerHeight:0}px`
            },
            children: (0, i.jsxs)(n.Container, {
                onClick: () => l(!1),
                "aria-hidden": !0,
                children: [(0, i.jsx)("div", {
                    className: "content d-sm-none",
                    children: f
                }), (0, i.jsxs)("div", {
                    className: "content-mobile d-lg-none",
                    onClick: e => {
                        e.stopPropagation(), l(e => !e)
                    },
                    "aria-hidden": !0,
                    children: [(0, i.jsxs)("p", {
                        className: "section-title-visible",
                        children: [g[u] ? .title, " ", (0, i.jsx)(r.CaretUp, {
                            fill: "#000000",
                            style: {
                                transform: "rotate(180deg)",
                                height: "8px"
                            }
                        })]
                    }), o ? (0, i.jsx)("div", {
                        className: "mobile-nav",
                        children: x
                    }) : null]
                })]
            })
        })
    }).withConfig({
        displayName: "SecondaryNav__SecondaryNavbar_BloodVision",
        componentId: "sc-3145f5f5-4"
    })
    `
  color: black;
  position: sticky;
  top: 12px;
  transition: all 0.3s ease-in-out;
  z-index: 100;
  padding-top: 12px;
  margin-bottom: 80px;

  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    margin-bottom: unset;
    top: 0px;
    padding-top: unset;
    display: block;
    background: rgba(255, 255, 255, 0.6);
    -webkit-backdrop-filter: blur(24px);
    backdrop-filter: blur(24px);
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  }

  .d-sm-none {
    display: none !important;

    @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
      display: flex !important;
    }
  }

  .d-lg-none {
    display: initial;

    @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
      display: none !important;
    }
  }

  p.section-title-visible {
    color: #000;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%; /* 16px */
    letter-spacing: -0.64px;
  }

  .content-mobile {
    position: absolute;
    top: 12px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;
    height: auto;

    border: rgba(0, 0, 0, 0.15) 1.25px solid;
    box-shadow: 0px 1px 4px 0px rgba(255, 255, 255, 0.35) inset;

    width: 90%;
    margin: 0 auto;

    background: rgba(255, 255, 255, 0.6);
    -webkit-backdrop-filter: blur(24px);
    backdrop-filter: blur(24px);
    padding: 12px;
    border-radius: 24px;

    transition: all 0.3s ease-in-out;
    overflow: hidden;

    .mobile-nav {
      animation: ${a.keyframes`
    from {
      max-height: 0;
    }
    to {
      max-height: 300px;
    }
  `} 0.3s ease-in-out forwards;
    }
  }

  & .content {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 80%;
    margin: 0 auto;

    background: rgba(255, 255, 255, 0.6);
    -webkit-backdrop-filter: blur(24px);
    backdrop-filter: blur(24px);
    padding: 12px;
    border-radius: 50px;

    @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
      background: transparent;
      -webkit-backdrop-filter: none;
      backdrop-filter: none;
      padding: unset;
      border-radius: 0px;
    }

    h4 {
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 16px;
      color: #000000;

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
    var iA = e.i(64130),
        iS = e.i(74418),
        iP = e.i(69949),
        iz = e.i(17162);
    let iT = a.default.div.withConfig({
        displayName: "BloodVisionBottomBar__BottomBarContainer",
        componentId: "sc-c11f025b-0"
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
  box-shadow: inset 0 2px 2px #ffffff;
  ${tL.gridMixin}

  animation: ${a.keyframes`
    from {
      transform: translateY(100%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  `} 0.3s ease-in-out;

  @media (min-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
    align-items: center;
    height: 72px
    padding: 0;
  }
`, i$ = a.default.div.withConfig({
        displayName: "BloodVisionBottomBar__PriceContainer",
        componentId: "sc-c11f025b-1"
    })
    `
  display: flex;
  flex-direction: column;
  gap: 2px;

  .element {
    text-align: right;
    &.secondary {
      font-size: 12px;
      font-weight: 400;
      // color: #808080;
      color: rgba(0, 0, 0, 0.6);
    }
  }
`, iL = a.default.div.withConfig({
        displayName: "BloodVisionBottomBar__Price",
        componentId: "sc-c11f025b-2"
    })
    `
  display: flex;
  align-items: baseline;
  gap: 8px;
  width: 100%; /* Added explicit width */

  @media (max-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
    justify-content: space-between;
  }

  .subtitle-text-btn {
    // height: 100%;
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    font-weight: 500;
    color: black;

    @media (max-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;
    }

    svg {
      height: 0.8rem;
      path {
        fill: black;
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

  .original-price {
    display: flex;
    align-items: center;
    gap: 2px;
    font-weight: 500;
    text-decoration: line-through;
    font-size: 16px;
    letter-spacing: -0.64px;
    color: #808080;
    line-height: 120%;
    margin-right: 8px;

    @media (min-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
      font-size: 16px;
      letter-spacing: normal;
      letter-spacing: -0.8px;
      text-align: right;
    }
  }

  .current-price {
    display: flex;
    align-items: center;
    gap: 2px;
    font-size: 1.6rem;
    font-weight: 500;
  }

  .tax-disclaimer {
    text-align: center;
    font-size: 14px;
    font-weight: 400;
    line-height: 23px; /* 164.286% */
    letter-spacing: -0.28px;
  }
`, iH = a.default.div.withConfig({
        displayName: "BloodVisionBottomBar__ButtonInfo",
        componentId: "sc-c11f025b-3"
    })
    `
  position: absolute;
  bottom: -22px;
  right: 40px;
  font-size: 12px;
  color: #808080;
  font-style: italic;

  @media (max-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
    right: 24px;
  }
`, iE = a.default.div.withConfig({
        displayName: "BloodVisionBottomBar__ButtonWrapper",
        componentId: "sc-c11f025b-4"
    })
    `
  position: relative;

  /* Only apply cursor:pointer when the button is disabled */
  cursor: ${e=>e.$isButtonDisabled?"pointer":"default"};

  /* This is crucial - we only disable pointer-events on the button when it's disabled */
  ${e=>e.$isButtonDisabled?`
    button:disabled {
      pointer-events: none;
    }
  `:""}
`, iM = () => {
        let {
            checkoutAllowed: e,
            selectedPlan: t,
            total: a,
            handleCheckout: n,
            isLoading: o,
            isCountrySupported: l,
            zipCode: r,
            hasCheckedOut: d,
            setHasCheckedOut: p,
            isZipValid: c,
            selectedModality: m,
            isHsaFsaIncluded: h,
            plans: g
        } = H(), {
            zipCodeInputRef: u,
            modalitySectionRef: f,
            hsaSectionRef: x
        } = (0, s.useContext)(tx), b = s.default.useMemo(() => !!t && !0 === t.is_plan_campaign, [t]), {
            showCampaignModal: w
        } = t2(), y = o || !e || d, v = r && !e, j = r && c && !m && !e, C = r && c && m && null === h && !e;
        if (!l || !t) return null;
        let _ = !o && t ? (0, i.jsx)(s.Fragment, {
            children: (0, i.jsxs)(i$, {
                children: [(0, i.jsxs)("div", {
                    className: "element",
                    children: ["$", a ? .toFixed(0).toLocaleString(), " "]
                }), (0, i.jsx)("div", {
                    className: "element secondary",
                    children: null !== a && a > 0 ? (0, i.jsxs)(i.Fragment, {
                        children: [t.id === g[1].id ? "Renews annually" : "Renews half-yearly", " "]
                    }) : "Blood Vision campaign discount applied"
                })]
            })
        }) : (0, i.jsx)(iz.DotSpinner, {
            color: "rgba(0,0,0,0.5)",
            style: {
                paddingLeft: "8px"
            }
        });
        return (0, i.jsxs)(iT, {
            children: [(0, i.jsx)(iP.MidPanelPhone, {
                onClick: () => {
                    let e = document.getElementById("order-summary-bv-card");
                    e && e.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    })
                },
                children: (0, i.jsxs)(iL, {
                    children: [(0, i.jsx)("div", {
                        className: "subtitle-text-btn",
                        children: "Total"
                    }), Number.isInteger(a) ? (0, i.jsx)("p", {
                        className: "total-price-single",
                        children: _
                    }) : null]
                })
            }), (0, i.jsx)(iP.MidPanel, {
                children: (0, i.jsx)(i$, {
                    children: Number.isInteger(a) ? (0, i.jsx)(iL, {
                        children: (0, i.jsx)("span", {
                            className: "current-price",
                            children: _
                        })
                    }) : null
                })
            }), (0, i.jsxs)(iP.RightPanel, {
                children: [(0, i.jsx)(iE, {
                    onClick: () => {
                        if (y) {
                            if (!r || 5 !== r.length || !c) {
                                u && u.current && u.current.scrollIntoView();
                                return
                            }
                            if (!m && f && f.current) return void f.current.scrollIntoView({
                                behavior: "smooth",
                                block: "center"
                            });
                            if (m && null === h && x && x.current) return void x.current.scrollIntoView({
                                behavior: "smooth",
                                block: "center"
                            });
                            u && u.current && u.current.scrollIntoView()
                        }
                    },
                    $isButtonDisabled: y,
                    children: (0, i.jsx)(tf.PrimaryButton, {
                        onClick: () => {
                            b ? w() : (p(!0), n())
                        },
                        disabled: y,
                        children: "Proceed to pay"
                    })
                }), v && (0, i.jsx)(iH, {
                    children: "Enter a valid US ZIP code to proceed"
                }), j && (0, i.jsx)(iH, {
                    children: "Please select a testing location to continue"
                }), C && (0, i.jsx)(iH, {
                    children: "Please select your HSA/FSA eligibility to continue"
                })]
            })]
        })
    };
    var iV = e.i(68734);
    let iW = ({
            title: e = "Your body, decoded daily",
            subtitle: t = "The Ring AIR seamlessly correlates changes in your sleep, resting HR, HRV, and movement trends with relevant blood markers."
        }) => {
            let a = (0, iV.useAutoPlayVideoRef)(),
                {
                    width: o
                } = (0, d.useWindowSize)(),
                l = (0, it.getAssetUrl)("/web_v2/blood-vision/buy/desktop/Web2K_1.mp4"),
                r = (0, it.getAssetUrl)("/web_v2/blood-vision/buy/desktop/Mobile_2K.mp4");
            return (0, i.jsxs)(iR, {
                children: [(0, i.jsx)(iU, {
                    children: o <= 992 ? (0, i.jsx)("video", {
                        preload: "none",
                        loop: !0,
                        autoPlay: !0,
                        muted: !0,
                        playsInline: !0,
                        "webkit-playsinline": "true",
                        ref: a,
                        children: (0, i.jsx)("source", {
                            src: r,
                            type: "video/mp4"
                        })
                    }, "mobile-video") : (0, i.jsx)("video", {
                        preload: "none",
                        loop: !0,
                        autoPlay: !0,
                        muted: !0,
                        playsInline: !0,
                        "webkit-playsinline": "true",
                        ref: a,
                        children: (0, i.jsx)("source", {
                            src: l,
                            type: "video/mp4"
                        })
                    }, "desktop-video")
                }), (0, i.jsx)(n.Container, {
                    children: (0, i.jsxs)(iF, {
                        children: [(0, i.jsx)(iO, {
                            children: e
                        }), (0, i.jsx)(iD, {
                            children: t
                        })]
                    })
                })]
            })
        },
        iR = a.default.section.withConfig({
            displayName: "VideoHero__VideoWrapper",
            componentId: "sc-26511563-0"
        })
    `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  position: relative;
  height: 600px;
  background: #000;
  overflow: hidden;

  @media (min-width: 992px) {
    height: 560px;
    justify-content: center;
  }
`, iU = a.default.div.withConfig({
        displayName: "VideoHero__VideoContainer",
        componentId: "sc-26511563-1"
    })
    `
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  video {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    z-index: 0;

    @media (min-width: 992px) {
      min-width: 100%;
      min-height: 100%;
      width: auto;
      height: auto;
    }
  }
`, iF = a.default.div.withConfig({
        displayName: "VideoHero__TextContainer",
        componentId: "sc-26511563-2"
    })
    `
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 2;
  position: relative;
  gap: 8px;

  @media (max-width: 992px) {
    padding: 0 20px;
    padding-bottom: 48px;
  }
`, iO = a.default.h2.withConfig({
        displayName: "VideoHero__Title",
        componentId: "sc-26511563-3"
    })
    `
  color: #fff;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 120.083%;
  letter-spacing: -0.96px;
  z-index: 1;
  text-align: left;
  max-width: 70%;

  @media (min-width: 992px) {
    font-size: 40px;
    letter-spacing: -1.6px;
    max-width: unset;
  }
`, iD = a.default.p.withConfig({
        displayName: "VideoHero__Subtitle",
        componentId: "sc-26511563-4"
    })
    `
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: -0.28px;
  z-index: 1;
  text-align: left;
  max-width: 32ch;

  @media (min-width: 992px) {
    max-width: 52ch;
    font-size: 16px;
    letter-spacing: -0.32px;
  }
`;
    var iG = e.i(604);
    let iZ = (0, a.default)(e => (0, i.jsxs)("div", {
        className: e.className,
        children: [e.title || e.caption ? (0, i.jsxs)(iq, {
            textAlign: e.textAlign,
            textColor: e.textColor,
            children: [e.caption ? (0, i.jsx)(iY, {
                children: e.caption
            }) : null, e.title ? (0, i.jsx)(iK, {
                children: e.title
            }) : null]
        }) : null, e.image ? (0, i.jsx)(iX, {
            children: (0, i.jsx)(ei.CustomImage, {
                src: e.image,
                alt: e.alt || "Ultrahuman Blood Vision - features image",
                width: 600,
                height: 400
            })
        }) : null, e.centerImage ? (0, i.jsx)(iQ, {
            children: (0, i.jsx)(ei.CustomImage, {
                src: e.centerImage,
                alt: e.alt || "Ultrahuman Blood Vision - features image",
                width: 600,
                height: 400
            })
        }) : null]
    })).withConfig({
        displayName: "BentoCard",
        componentId: "sc-320964a0-0"
    })
    `
  grid-column: ${({gridColumn:e})=>e||"auto"};
  grid-row: ${({gridRow:e})=>e||"auto"};

  ${({parentType:e})=>"flex"===e?`
    flex - shrink: 0;
    width: 80 vw;
    min - height: 420 px;
    `:`
    `}

  position: relative;
  border-radius: 24px;
  overflow: hidden;

  ${({bgColor:e})=>e&&`
    background - color: $ {
        e
    };
    `}
  ${({bgGradient:e})=>e&&`
    background: $ {
        e
    };
    `}
  ${({bgImage:e})=>e&&`
    background - image: url($ {
        (0, it.getCompressedAssetUrl)(e)
    });
    `}
  ${({boxShadow:e})=>e&&`
    box - shadow: $ {
        e
    };
    `}

  ${({bgImage:e})=>e&&`
    background - size: cover;
    background - position: center;
    background - repeat: no - repeat;
    `}

  display: flex;
  flex-direction: column;
  flex-direction: ${({colReverse:e})=>e?"column-reverse":"column"};
  justify-content: space-between;
`, iq = a.default.div.withConfig({
        displayName: "BentoCard__TextContainer",
        componentId: "sc-320964a0-1"
    })
    `

  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  align-items: ${({textAlign:e})=>{switch(e){case"left":return"flex-start";case"center":default:return"center";case"right":return"flex-end"}}}};
  color: ${({textColor:e})=>e||"#000"};
  text-align: ${({textAlign:e})=>e||"center"};
  padding: 1rem;
  width: 100%;

  padding: 2.4rem;

  @media (min-width: ${({theme:e})=>e.globalV2.md.minWidth}) {
    padding: 2.4rem;
  }

  @media (min-width: ${({theme:e})=>e.globalV2.xl.minWidth}) {
    padding: 3.2rem;
  }

  @media (min-width: ${({theme:e})=>e.globalV2.xxl.minWidth}) {
    font-size: 4.3rem;
  }
`, iY = a.default.p.withConfig({
        displayName: "BentoCard__Caption",
        componentId: "sc-320964a0-2"
    })
    `
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: 3.04px;
  text-transform: uppercase;
  opacity: 0.7;

  @media (min-width: ${({theme:e})=>e.globalV2.md.minWidth}) {
    font-size: 1.4rem;
  }
`, iK = a.default.h3.withConfig({
        displayName: "BentoCard__Title",
        componentId: "sc-320964a0-3"
    })
    `
  font-size: 2.8rem;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
  letter-spacing: -0.96px;
  line-height: 120%;

  @media (min-width: ${({theme:e})=>e.globalV2.md.minWidth}) {
    font-size: 2.8rem;
  }

  @media (min-width: ${({theme:e})=>e.globalV2.xl.minWidth}) {
    font-size: 3.2rem;
    max-width: 21ch;
  }

  @media (min-width: ${({theme:e})=>e.globalV2.xxl.minWidth}) {
    font-size: 3.6rem;
  }
`, iX = a.default.div.withConfig({
        displayName: "BentoCard__ImageContainer",
        componentId: "sc-320964a0-4"
    })
    `
  width: 100%;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    object-position: center;
  }
`, iQ = a.default.div.withConfig({
        displayName: "BentoCard__ImageContainerCentered",
        componentId: "sc-320964a0-5"
    })
    `
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;

  img {
    width: 60%;
    height: auto;
    object-fit: cover;
    object-position: center;
  }
`, iJ = (0, a.default)(({
        className: e
    }) => (0, i.jsxs)("div", {
        className: e,
        children: [(0, i.jsxs)("div", {
            className: "top",
            children: [(0, i.jsx)("h2", {
                children: "A deep dive on your health"
            }), (0, i.jsx)("p", {
                children: "Get 100+ biomarkers across aging, heart health, energy, disease prevention and more. Track the progression of your health over time and take action with personalized insights."
            })]
        }), (0, i.jsx)(iZ, {
            gridColumn: "1 / span 6",
            gridRow: "2 / 3",
            title: "Book at-home test",
            alt: "Book at-home test",
            textColor: "#ffffff",
            bgGradient: "radial-gradient(136.15% 136.15% at 50% -36.15%, #4664FF 0%, #0E0E0E 81.42%);",
            textAlign: "center",
            image: "web_v2/blood-vision/bento/book-test-map-2.png",
            parentType: "grid"
        }), (0, i.jsx)(iZ, {
            gridColumn: "7 / span 5",
            gridRow: "2 / 3",
            title: "AI clinician report and action plan",
            alt: "AI clinician report and action plan",
            textColor: "#ffffff",
            bgGradient: "radial-gradient(220.18% 190.6% at -14.64% -67.01%, #4664FF 0%, #121212 76.17%), #0E0E0E;",
            textAlign: "center",
            image: "web_v2/blood-vision/bento/AI-clinician-perspective.png",
            colReverse: !0,
            parentType: "grid"
        }), (0, i.jsx)(iZ, {
            gridColumn: "1 / span 4",
            gridRow: "3 / 4",
            title: (0, i.jsxs)(i.Fragment, {
                children: ["Two", (0, i.jsx)("br", {}), "advanced", (0, i.jsx)("br", {}), "tests a year"]
            }),
            alt: "Two advanced tests a year",
            textColor: "#ffffff",
            image: "web_v2/blood-vision/bento/two_advanced_tests.png",
            textAlign: "left",
            bgGradient: "radial-gradient(500.26% 100% at 50% 100%, rgba(70, 100, 255, 0.00) 12.07%, #0E0E0E 90%), #0E0E0E;",
            parentType: "grid"
        }), (0, i.jsx)(iZ, {
            gridColumn: "5 / span 7",
            gridRow: "3 / 4",
            title: "Blood Age: Your longevity, measured",
            alt: "Blood Age: Your longevity, measured",
            textColor: "#ffffff",
            bgColor: "#0E0E0E",
            textAlign: "center",
            image: "web_v2/blood-vision/bento/blood-age-3.png",
            parentType: "grid"
        }), (0, i.jsx)(iZ, {
            gridColumn: "1 / span 5",
            gridRow: "4 / 5",
            alt: "For a more quieter space",
            textColor: "#ffffff",
            textAlign: "center",
            bgColor: "#0E0E0E",
            boxShadow: "0px 0px 174px 0px rgba(70, 100, 255, 0.60) inset;",
            parentType: "grid",
            centerImage: "web_v2/blood-vision/bento/hsa-fsa.png"
        }), (0, i.jsx)(iZ, {
            gridColumn: "6 / span 6",
            gridRow: "4 / 5",
            title: "Beyond standard testing (20 unique clinically relevant markers)",
            alt: "Beyond standard testing (20 unique clinically relevant markers)",
            textColor: "#ffffff",
            textAlign: "center",
            bgGradient: "radial-gradient(286.33% 237.62% at 93.25% 224.26%, #4664FF 0%, #0E0E0E 81.11%), #0E0E0E;",
            image: "web_v2/blood-vision/bento/unique-tests-2.png",
            parentType: "grid"
        })]
    })).withConfig({
        displayName: "DesktopComponent",
        componentId: "sc-442be3ac-0"
    })
    `
  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    position: relative;
    display: grid;
    grid-template-columns: repeat(11, 1fr);
    grid-template-rows: 18rem 42rem 42rem 42rem;
    justify-content: center;
    gap: 1.4rem;
    height: 100%;
    padding: 48px 12px;
  }

  @media (min-width: ${({theme:e})=>e.globalV2.xl.minWidth}) {
    grid-template-rows: 18rem 53rem 53rem 53rem;
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
      color: #ffffff;
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
      color: #ffffff;
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
    background-image: url(${(0,it.getCompressedAssetUrl)("/web_v2/ring-buy/sleep/png/tinted.png")});
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
`, i0 = (0, a.default)(({
        className: e
    }) => (0, i.jsxs)("div", {
        className: e,
        children: [(0, i.jsxs)("div", {
            className: "head",
            children: [(0, i.jsx)("h2", {
                children: "A deep dive on your health"
            }), (0, i.jsx)("p", {
                children: "Get 100+ biomarkers across aging, heart health, energy, disease prevention and more. Track the progression of your health over time and take action with personalized insights."
            })]
        }), (0, i.jsx)("div", {
            className: "sleep-items-container",
            children: (0, i.jsxs)("div", {
                className: "items",
                children: [(0, i.jsx)(iZ, {
                    gridColumn: "1 / span 6",
                    gridRow: "2 / 3",
                    title: "Book at-home test",
                    alt: "Book at-home test",
                    textColor: "#ffffff",
                    bgGradient: "radial-gradient(136.15% 136.15% at 50% -36.15%, #4664FF 0%, #0E0E0E 81.42%);",
                    textAlign: "left",
                    image: "web_v2/blood-vision/bento/book-test-map-2.png",
                    parentType: "flex"
                }), (0, i.jsx)(iZ, {
                    gridColumn: "7 / span 5",
                    gridRow: "2 / 3",
                    title: "AI clinician report and action plan",
                    alt: "AI clinician report and action plan",
                    textColor: "#ffffff",
                    bgGradient: "radial-gradient(220.18% 190.6% at -14.64% -67.01%, #4664FF 0%, #121212 76.17%), #0E0E0E;",
                    textAlign: "left",
                    image: "web_v2/blood-vision/bento/AI-clinician-perspective.png",
                    colReverse: !0,
                    parentType: "flex"
                }), (0, i.jsx)(iZ, {
                    gridColumn: "1 / span 4",
                    gridRow: "3 / 4",
                    title: (0, i.jsxs)(i.Fragment, {
                        children: ["Two", (0, i.jsx)("br", {}), "advanced", (0, i.jsx)("br", {}), "tests a year"]
                    }),
                    alt: "Two advanced tests a year",
                    textColor: "#ffffff",
                    image: "web_v2/blood-vision/bento/two_advanced_tests.png",
                    textAlign: "left",
                    bgGradient: "radial-gradient(500.26% 100% at 50% 100%, rgba(70, 100, 255, 0.00) 12.07%, #0E0E0E 90%), #0E0E0E;",
                    parentType: "flex"
                }), (0, i.jsx)(iZ, {
                    gridColumn: "5 / span 7",
                    gridRow: "3 / 4",
                    title: "Blood Age: Your longevity, measured",
                    alt: "Blood Age: Your longevity, measured",
                    textColor: "#ffffff",
                    bgColor: "#0E0E0E",
                    textAlign: "left",
                    image: "web_v2/blood-vision/bento/blood-age-3.png",
                    parentType: "flex"
                }), (0, i.jsx)(iZ, {
                    gridColumn: "1 / span 5",
                    gridRow: "4 / 5",
                    alt: "For a more quieter space",
                    textColor: "#ffffff",
                    textAlign: "left",
                    bgColor: "#0E0E0E",
                    boxShadow: "0px 0px 174px 0px rgba(70, 100, 255, 0.60) inset;",
                    parentType: "flex",
                    centerImage: "web_v2/blood-vision/bento/hsa-fsa.png"
                }), (0, i.jsx)(iZ, {
                    gridColumn: "6 / span 6",
                    gridRow: "4 / 5",
                    title: "Beyond standard testing (20 unique clinically relevant markers)",
                    alt: "Beyond standard testing (20 unique clinically relevant markers)",
                    textColor: "#ffffff",
                    textAlign: "left",
                    bgGradient: "radial-gradient(286.33% 237.62% at 93.25% 224.26%, #4664FF 0%, #0E0E0E 81.11%), #0E0E0E;",
                    image: "web_v2/blood-vision/bento/unique-tests-2.png",
                    parentType: "flex"
                })]
            })
        })]
    })).withConfig({
        displayName: "MobileComponent",
        componentId: "sc-88ebacec-0"
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

    h2 {
      color: #fff;
      max-width: 15ch;
      font-size: 32px;
      font-style: normal;
      font-weight: 500;
      line-height: 100%; /* 48px */
      letter-spacing: -1.28px;
    }

    p {
      color: #fff;
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
    ${tL.hideScrollbar}

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
        background-image: url(${(0,it.getCompressedAssetUrl)("/web_v2/ring-buy/recovery/png/recoveryAsset.png")});
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
        background-image: url(${(0,it.getCompressedAssetUrl)("/web_v2/ring-buy/recovery/png/stress.png")});
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
`, i1 = (0, a.default)(({
        className: e
    }) => {
        let {
            width: t
        } = (0, d.useWindowSize)();
        return (0, i.jsx)("section", {
            className: e,
            children: (0, i.jsx)(n.Container, {
                children: t > 992 ? (0, i.jsx)(iJ, {}) : (0, i.jsx)(i0, {})
            })
        })
    }).withConfig({
        displayName: "BentoSection",
        componentId: "sc-1aab0b36-0"
    })
    `
  position: relative;
  background: #000000;
  color: #ffffff;

  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    width: 100vw;
    height: 100%;
    overflow: hidden;
    ${ig.SectionPadding}
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
    var i2 = e.i(52935),
        i4 = e.i(21921),
        i6 = e.i(63635),
        i5 = e.i(228),
        i8 = e.i(12255),
        i3 = e.i(82851),
        i9 = e.i(66243),
        i7 = e.i(61525),
        ae = e.i(58678),
        at = e.i(3595);
    let ai = (0, tq.default)(() => e.A(78408), {
            loadableGenerated: {
                modules: [18130]
            },
            ssr: !1
        }),
        aa = ({
            region: e,
            offersData: t = [{
                title: (0, i.jsxs)(i.Fragment, {
                    children: ["Instant payment with ", (0, i.jsx)("b", {
                        children: "Stripe"
                    })]
                }),
                image: ["web_v2/icons/stripe.png"]
            }, {
                title: (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)("b", {
                        children: "Save more"
                    }), " with your pre-tax dollars"]
                }),
                image: ["web_v2/icons/hsa-fsa/hsa-fsa-black-outline.svg"]
            }, {
                title: (0, i.jsx)(i.Fragment, {
                    children: "Crypto payments with USDC"
                }),
                image: ["web_v2/icons/primary_offers/usdc-2.png"]
            }, {
                title: (0, i.jsxs)(i.Fragment, {
                    children: ["As low as ", (0, i.jsx)("b", {
                        children: "0% APR"
                    }), " financing with Klarna"]
                }),
                image: ["web_v2/icons/primary_offers/klara.png"]
            }],
            isAvailable: a,
            currency: n
        }) => {
            (0, iI.useGlobalUI)({
                headerCollaspable: !0
            });
            let o = (({
                    country: e,
                    currency: t,
                    isAvailable: i
                }) => {
                    let a = (e || "us").toLowerCase(),
                        n = a.toUpperCase(),
                        o = (t || i5.Currency.usd).toUpperCase(),
                        l = (0, i8.generateProductSchema)({
                            name: "Blood Vision",
                            description: "Decode the language of your blood with UltraTrace™",
                            imageUrl: (0, it.getAssetUrl)("/web_v2/meta-assets/blood-vision-og.png"),
                            brand: "Ultrahuman",
                            category: "Health Testing",
                            price: 99,
                            currency: o,
                            country: n,
                            availability: i ? "InStock" : "OutOfStock",
                            url: `https://www.ultrahuman.com/${a}/blood-vision/buy`,
                            rating: {
                                ratingValue: 4.7,
                                reviewCount: 1800
                            }
                        }),
                        r = iG.BloodVisionFaqs.map(e => ({
                            question: e.title,
                            answer: (0, i7.extractTextFromJSX)(e.description) || "Blood Vision FAQ answer"
                        })).filter(e => e.question.trim().length > 0);
                    return [l, (0, i3.generateFAQSchema)(r), (0, i9.generateBreadcrumbSchema)([{
                        name: "Home",
                        url: "https://www.ultrahuman.com"
                    }, {
                        name: "Blood Vision",
                        url: "https://www.ultrahuman.com/blood-vision"
                    }, {
                        name: "Buy Blood Vision",
                        url: `https://www.ultrahuman.com/${a}/blood-vision/buy`
                    }])]
                })({
                    country: e,
                    currency: n || i5.Currency.usd,
                    isAvailable: a
                }),
                {
                    width: l
                } = (0, d.useWindowSize)();
            return (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(im.SEO, {
                    title: "Ultrahuman | Blood Vision",
                    description: "Decode the language of your blood with UltraTrace™"
                }), (0, i.jsx)(ih.JsonLd, {
                    data: o
                }), (0, i.jsxs)(W.OffersModalNewProvider, {
                    children: [(0, i.jsx)(ic.TitleBar, {
                        title: "Advanced Blood Testing of 100+ Biomarkers",
                        paddingForHeader: !0,
                        showRegionSelector: !1
                    }), (0, i.jsx)(L, {
                        country: e || "us",
                        children: (0, i.jsxs)(tb, {
                            children: [t && (l >= 992 ? (0, i.jsx)(i4.PrimaryOffers, {
                                data: t
                            }) : (0, i.jsx)("div", {
                                style: {
                                    marginTop: (0, i6.isMarketingBannerActive)() ? "110px" : "48px"
                                },
                                children: (0, i.jsx)(i4.PrimaryOffersTransitionTile, {
                                    data: t
                                })
                            })), (0, i.jsx)(ip, {
                                country: e,
                                isAvailable: a
                            }), (0, i.jsx)(e6, {}), (0, i.jsx)(iB, {}), (0, i.jsx)(ik, {
                                htmlId: "how-it-works"
                            }), (0, i.jsx)(i1, {}), (0, i.jsx)(iS.LabTestAccordionSection, {
                                htmlId: "what-is-included"
                            }), (0, i.jsx)(iW, {}), (0, i.jsx)(i2.ProductWizard, {
                                title: "Still unsure if Blood Vision is for you?"
                            }), (0, i.jsx)(iA.FAQSection, {
                                faqData: iG.BloodVisionFaqs,
                                htmlId: "common-questions",
                                bgColor: "white"
                            }), (0, i.jsx)(iM, {})]
                        })
                    })]
                })]
            })
        },
        an = () => ((0, iI.useGlobalUI)({
            headerCollaspable: !0
        }), (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(im.SEO, {
                title: "Blood Vision India | Ultrahuman",
                description: "Comprehensive biomarker testing for metabolic, cardiovascular, immune, hormonal, and nutritional health",
                nonIndexable: !0
            }), (0, i.jsx)(ae.default, {
                children: (0, i.jsx)("meta", {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
                })
            }), (0, i.jsx)(W.OffersModalNewProvider, {
                children: (0, i.jsx)(at.default, {
                    children: (0, i.jsx)(ai, {})
                })
            })]
        }));

    function ao(e) {
        let {
            region: t
        } = e;
        return "IN" === t.toUpperCase() ? (0, i.jsx)(an, {}) : (0, i.jsx)(aa, { ...e
        })
    }
    e.s(["__N_SSP", () => !0, "default", () => ao], 60298)
}, 62103, (e, t, i) => {
    let a = "/blood-vision/buy";
    (window.__NEXT_P = window.__NEXT_P || []).push([a, () => e.r(60298)]), t.hot && t.hot.dispose(function() {
        window.__NEXT_P.push([a])
    })
}]);