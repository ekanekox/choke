(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 62322, e => {
    "use strict";
    var t = e.i(91398);
    e.i(64157);
    var i = e.i(71179),
        r = e.i(91788);
    e.s(["DaysByDate", 0, ({
        endDate: e,
        numberOfDays: a
    }) => {
        let {
            t: o
        } = (0, i.useTranslation)("ring"), [n, l] = (0, r.useState)(null), [s, d] = (0, r.useState)(null), p = new Intl.DateTimeFormat("en", {
            day: "numeric",
            month: "short"
        });
        switch ((0, r.useEffect)(() => {
            let t = new Date;
            t.setHours(0, 0, 0, 0), a ? (l(new Date(t.getTime() + 24 * a * 36e5)), d(a)) : e && (new Date(e).setHours(0, 0, 0, 0), d(Math.floor(Math.abs(e.getTime() - t.getTime()) / 864e5)), l(new Date(e)))
        }, [e]), s) {
            case 0:
                return (0, t.jsxs)("span", {
                    children: [o("ring.TODAY"), ",", " ", n && p.format(n)]
                });
            case 1:
                return (0, t.jsxs)("span", {
                    children: [o("ring.TOMORROW"), ",", " ", n && p.format(n)]
                });
            case 2:
                return (0, t.jsxs)("span", {
                    children: [o("ring.IN_TWO_DAYS"), ",", " ", n && p.format(n)]
                });
            default:
                return (0, t.jsx)("span", {
                    children: n && p.format(n)
                })
        }
    }])
}, 37030, e => {
    "use strict";
    var t = e.i(91398);
    e.i(64157);
    var i = e.i(71179),
        r = e.i(90380),
        a = e.i(37515),
        o = e.i(74975),
        n = e.i(53238),
        l = e.i(40647),
        s = e.i(25635),
        d = e.i(64034),
        p = e.i(82702),
        c = e.i(98039),
        u = e.i(56560),
        h = e.i(18421),
        g = e.i(51754),
        f = e.i(91788),
        y = e.i(60814),
        m = e.i(62322),
        S = e.i(74508),
        x = e.i(228);

    function C(e) {
        let t, {
            color: i,
            size: f,
            store: y,
            chargerType: m,
            engraving: x,
            engravingMessage: C,
            eSizingSize: I,
            uhxCart: b,
            afibCart: R,
            cardioAdaptibilityCart: T,
            cnoProCart: v,
            clueCart: _,
            respiratoryCart: E,
            stackType: N,
            stackVariant: A,
            misc: w,
            isCnOPlus: G
        } = e;
        if (!i || !f || !y) return [];
        let M = d.productMap_air_ring[i] ? .[f];
        if (!M || !(t = w && M.NOT_ENGRAVED.misc ? .[w] ? M.NOT_ENGRAVED.misc[w] : M[(0, p.getEngravingKey)(x)] ? .variantId[y])) return [];
        let D = [];
        x && C && D.push({
            key: "engraving",
            value: C
        }), I && D.push({
            key: "eSizing",
            value: "true"
        }), e.tradeInDevice && (D.push({
            key: "trade_in_device",
            value: e.tradeInDevice
        }), D.push({
            key: "trade_in_credit",
            value: String(e.tradeInCredit)
        }), D.push({
            key: "trade_in_serial_number",
            value: e.tradeInSerialNumber
        }));
        let O = [];
        if (f === p.RingSizes.OPEN && p.SizingKitShopifyMap[y] ? .shopifyVariantId && O.push({
                shopifyVariantId: p.SizingKitShopifyMap[y].shopifyVariantId,
                productType: S.ProductType.RING
            }), m === p.RingChargerType.TRAVEL_CHARGER && c.TravelChargerShopifyMap[y] ? .[f] ? .shopifyVariantId && O.push({
                shopifyVariantId: c.TravelChargerShopifyMap[y][f].shopifyVariantId,
                productType: S.ProductType.RING
            }), b && u.UhxShopifyMap[y] ? .[b] ? .variantId && O.push({
                shopifyVariantId: u.UhxShopifyMap[y][b].variantId,
                productType: S.ProductType.GENERIC
            }), T && a.CardioAdaptibilityShopifyMap[y] ? .[T] ? .variantId && O.push({
                shopifyVariantId: a.CardioAdaptibilityShopifyMap[y][T].variantId,
                productType: S.ProductType.RING
            }), R && r.AfibShopifyMap[y] ? .[R] ? .variantId && O.push({
                shopifyVariantId: r.AfibShopifyMap[y][R].variantId,
                productType: S.ProductType.RING
            }), v) {
            let e = G ? n.CnoPlusShopifyMap : o.CnoProShopifyMap;
            e[y] ? .[v] ? .variantId && O.push({
                shopifyVariantId: e[y][v].variantId,
                productType: S.ProductType.RING
            })
        }
        if ("Year1" === _ && l.ClueShopifyMap[y] ? .Year1 ? .variantId && O.push({
                shopifyVariantId: l.ClueShopifyMap[y].Year1.variantId,
                productType: S.ProductType.RING
            }), "Year1" === E && s.RespiratoryShopifyMap[y] ? .Year1 ? .variantId && O.push({
                shopifyVariantId: s.RespiratoryShopifyMap[y].Year1.variantId,
                productType: S.ProductType.RING
            }), N && N !== h.RingStackType.NONE) {
            let e = A === h.StackVariant.DUO ? g.DuoStackingShopifyMap : g.StackingShopifyMap,
                t = e[y] ? .[N],
                i = t ? .[f] ? .shopifyVariantId;
            i && O.push({
                shopifyVariantId: i,
                productType: S.ProductType.RING
            })
        }
        return O.push({
            shopifyVariantId: t,
            productType: S.ProductType.RING,
            params: D.length > 0 ? {
                productType: "ring",
                noteAttributes: D
            } : void 0
        }), O
    }
    let I = (0, y.default)(({
        className: e,
        mcf: r = !1,
        content: a,
        justContent: o = !1,
        isMinEstimate: n = !1
    }) => {
        let {
            t: l
        } = (0, i.useTranslation)("ring"), s = (0, f.useRef)(0);
        return ((0, f.useEffect)(() => {
            s.current += 1
        }, [a, r]), o) ? (0, t.jsx)("span", {
            className: e,
            children: a
        }, s.current) : (0, t.jsxs)("span", {
            className: e,
            children: [(0, t.jsxs)("span", {
                children: [l("ring.ringContext.DISPATCHED_BY"), " : ", a]
            }), n ? (0, t.jsx)("i", {
                className: "min-est-dot"
            }) : null]
        }, s.current)
    }).withConfig({
        displayName: "checkout__ShippingLabel",
        componentId: "sc-ce05aa03-0"
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
  // white-space: nowrap;

  .min-est-dot {
    padding: 2px;
    display: inline-block;
    border-radius: 50%;
    background-color: red;
    width: 4px;
    height: 4px;
  }

  animation: ${y.keyframes`
      from {opacity: 0;}
      to {opacity: 1;}
    `} 0.3s ease-in-out forwards;

  @media (min-width: ${({theme:e})=>e.globalV2.md.minWidth}) {
    flex-direction: row;
    gap: 4px;
    justify-content: flex-start;
    align-items: center;
  }

  & > * {
    display: inline;
    // white-space: nowrap;
  }

  img {
    max-height: 100%;
    width: auto;
  }
`;

    function b({
        color: e,
        size: i,
        estimates: r,
        addonsState: a,
        t: o
    }) {
        if (!r || !i || !e) return (0, t.jsx)(I, {
            content: "Dispatch time based on ring selection.",
            justContent: !0
        });
        let n = d.productMap_air_ring[e] ? .[i] ? .NOT_ENGRAVED.SKU ? ? null;
        if (!n) return null;
        let l = r[n],
            s = !1 === a.engraving.enabled;
        if (!l) return (0, t.jsx)(I, {
            content: "Shipping estimate not available.",
            justContent: !0
        });
        let c = s && l.mcf_for_eta ? l.date : l.default_custom_eta,
            u = new Intl.DateTimeFormat("default", {
                month: "short"
            });
        if (!c) return (0, t.jsx)(I, {
            content: "Shipping estimate not available.",
            justContent: !0
        }); {
            let e = new Date(c),
                r = e.getMonth(),
                a = e.getDate();
            if (i === p.RingSizes.OPEN) return (0, t.jsx)(I, {
                mcf: s && (l ? .show_mcf_logo ? ? !1),
                content: (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)("strong", {
                        style: {
                            whiteSpace: "nowrap"
                        },
                        children: (0, t.jsx)(m.DaysByDate, {
                            endDate: e
                        })
                    }), " ", (0, t.jsxs)("span", {
                        children: ["(", o("ring.AFTER_SIZE_SELECTION"), ")"]
                    })]
                })
            });
            let n = new Date(c);
            n.setDate(n.getDate() + 2);
            let d = n.getMonth(),
                h = n.getDate();
            return (0, t.jsx)(I, {
                mcf: s && (l ? .mcf_for_eta ? ? !1),
                content: (0, t.jsx)("strong", {
                    children: `${u.format(e)} ${a} - ${r===d?"":u.format(n)} ${h}`
                })
            })
        }
    }
    let R = {
        size: p.RingSizes.OPEN,
        setSize: () => void 0,
        setColor: () => void 0,
        chargerType: p.RingChargerType.OG,
        setChargerType: () => void 0,
        defaultCurrency: x.Currency.inr,
        engraving: !1,
        setEngraving: () => void 0,
        engravingMessage: null,
        setEngravingMessage: () => void 0,
        uhx: !1,
        setUhx: () => void 0,
        uhxCart: null,
        setUhxCart: () => void 0,
        afibCart: null,
        setAfibCart: () => void 0,
        clueCart: null,
        setClueCart: () => void 0,
        cardioAdaptibilityCart: null,
        setCardioAdaptabilityCart: () => void 0,
        cnoProCart: null,
        setCnoProCart: () => void 0,
        respiratoryCart: null,
        setRespiratoryCart: () => void 0,
        stackType: null,
        setStackType: () => void 0,
        stackVariant: h.StackVariant.SINGLE,
        setStackVariant: () => void 0,
        checkout: async () => void 0,
        isLoading: !1,
        price: 0,
        ultraHumanPrice: 0,
        effectivePrice: 0,
        chargerPrice: 0,
        shippingEstimate: null,
        affiliateDetails: null,
        store: null,
        campaignActive: !1,
        affiliateDiscount: 0,
        tradeInDevice: null,
        setTradeInDevice: () => void 0,
        tradeInSerialNumber: "",
        setTradeInSerialNumber: () => void 0,
        tradeInCredit: 0,
        tradeInBonus: 0,
        tradeInMaxCredit: 0,
        hasUhx: !1,
        goToNextStep: () => void 0,
        effectiveDiscount: {
            type: "",
            amount: 0
        },
        sectionRefs: {},
        showEngravingSection: !1,
        priceDrop: 0,
        notServicable: !1,
        notServicableMessage: void 0
    };

    function T(e, t) {
        switch (t.type) {
            case "SET_ENGRAVING":
                return { ...e,
                    engraving: { ...e.engraving,
                        enabled: t.payload
                    }
                };
            case "SET_ENGRAVING_MESSAGE":
                return { ...e,
                    engraving: { ...e.engraving,
                        message: t.payload
                    }
                };
            case "SET_UHX_CART":
                return { ...e,
                    uhxCart: t.payload
                };
            case "SET_AFIB_CART":
                return { ...e,
                    afibCart: t.payload
                };
            case "SET_CARDIO_ADAPTIBILITY_CART":
                return { ...e,
                    cardioAdaptibilityCart: t.payload
                };
            case "SET_CNO_PRO_CART":
                return { ...e,
                    cnoProCart: t.payload
                };
            case "SET_CLUE_CART":
                return { ...e,
                    clueCart: t.payload
                };
            case "SET_RESPIRATORY_CART":
                return { ...e,
                    respiratoryCart: t.payload
                };
            case "SET_ROSE_GOLD_COLOR":
                return { ...e,
                    roseGoldColor: t.payload
                };
            case "SET_TRADE_IN_DEVICE":
                return { ...e,
                    tradeIn: { ...e.tradeIn,
                        device: t.payload
                    }
                };
            case "SET_TRADE_IN_SERIAL_NUMBER":
                return { ...e,
                    tradeIn: { ...e.tradeIn,
                        serialNumber: t.payload
                    }
                };
            case "RESET_TRADE_IN":
                return { ...e,
                    tradeIn: {
                        device: null,
                        serialNumber: ""
                    }
                };
            case "RESET_ALL":
                return { ...v,
                    roseGoldColor: e.roseGoldColor
                };
            case "SET_STACK_TYPE":
                return { ...e,
                    stackType: t.payload
                };
            case "SET_STACK_VARIANT":
                return { ...e,
                    stackVariant: t.payload
                };
            default:
                return e
        }
    }
    let v = {
        engraving: {
            enabled: !1,
            message: null
        },
        uhxCart: null,
        afibCart: null,
        cardioAdaptibilityCart: null,
        cnoProCart: null,
        clueCart: null,
        respiratoryCart: null,
        roseGoldColor: !1,
        tradeIn: {
            device: null,
            serialNumber: ""
        },
        stackType: null,
        stackVariant: h.StackVariant.SINGLE
    };
    e.s(["addonsReducer", () => T, "getCheckoutLineItems", () => C, "getShippingEstimate", () => b, "initialAddonsState", 0, v, "initialRingSelectionContext", 0, R])
}, 97999, e => {
    "use strict";

    function t(e) {
        if (e.current) {
            let t;
            (t = e.current ? .getBoundingClientRect()) && t.top >= 90 && t.left >= 0 && t.bottom <= (window.innerHeight || document.documentElement.clientHeight) && t.right <= (window.innerWidth || document.documentElement.clientWidth) || function(e) {
                    if (e.current) {
                        let t = e.current.getBoundingClientRect();
                        window.scrollTo({
                            top: window.scrollY + t.top - 90,
                            behavior: "smooth"
                        })
                    }
                }(e),
                function(e) {
                    if (!e.current) return;
                    let t = e.current.querySelector(".section-row-title h5");
                    t && (t.style.transition = "transform 0.5s ease", t.style.transform = "scale(1.1)", setTimeout(() => {
                        t.style.fontSize = "", t.style.transform = ""
                    }, 500))
                }(e)
        }
    }
    e.s(["highlightElement", () => t])
}, 61102, e => {
    "use strict";
    var t, i = e.i(59207),
        r = ((t = {}).RING_AIR = "RING_AIR", t.OURA_GEN_4 = "OURA_GEN_4", t.SAMSUNG_GALAXY_RING = "SAMSUNG_GALAXY_RING", t.RING_CONN = "RING_CONN", t.OURA_GEN_3 = "OURA_GEN_3", t);
    let a = {
            [i.ShopifyStore.US]: 30,
            [i.ShopifyStore.ROW]: 30,
            [i.ShopifyStore.EU]: 30,
            [i.ShopifyStore.GB]: 25,
            [i.ShopifyStore.AE]: 110,
            [i.ShopifyStore.IN]: 2e3
        },
        o = {
            RING_AIR: {
                [i.ShopifyStore.US]: 85,
                [i.ShopifyStore.ROW]: 85,
                [i.ShopifyStore.EU]: 85,
                [i.ShopifyStore.GB]: 65,
                [i.ShopifyStore.AE]: 310,
                [i.ShopifyStore.IN]: 7e3
            },
            OURA_GEN_4: {
                [i.ShopifyStore.US]: 50,
                [i.ShopifyStore.ROW]: 50,
                [i.ShopifyStore.EU]: 50,
                [i.ShopifyStore.GB]: 40,
                [i.ShopifyStore.AE]: 185,
                [i.ShopifyStore.IN]: 5500
            },
            SAMSUNG_GALAXY_RING: {
                [i.ShopifyStore.US]: 45,
                [i.ShopifyStore.ROW]: 45,
                [i.ShopifyStore.EU]: 40,
                [i.ShopifyStore.GB]: 35,
                [i.ShopifyStore.AE]: 165,
                [i.ShopifyStore.IN]: 4e3
            },
            RING_CONN: {
                [i.ShopifyStore.US]: 35,
                [i.ShopifyStore.ROW]: 35,
                [i.ShopifyStore.EU]: 35,
                [i.ShopifyStore.GB]: 30,
                [i.ShopifyStore.AE]: 130,
                [i.ShopifyStore.IN]: 3500
            },
            OURA_GEN_3: {
                [i.ShopifyStore.US]: 25,
                [i.ShopifyStore.ROW]: 25,
                [i.ShopifyStore.EU]: 25,
                [i.ShopifyStore.GB]: 20,
                [i.ShopifyStore.AE]: 100,
                [i.ShopifyStore.IN]: 3e3
            }
        },
        n = new Set([i.ShopifyStore.US, i.ShopifyStore.EU, i.ShopifyStore.GB, i.ShopifyStore.AE, i.ShopifyStore.IN, i.ShopifyStore.ROW]);

    function l(e, t, i) {
        let r = o[e] ? .[t];
        return void 0 === r ? 0 : i ? r + (a[t] ? ? 0) : r
    }

    function s(e, t) {
        let i = 0;
        for (let a of Object.values(r)) {
            let r = l(a, e, t);
            r > i && (i = r)
        }
        return i
    }

    function d(e) {
        return !!e && n.has(e)
    }
    i.ShopifyStore.US, i.ShopifyStore.ROW, i.ShopifyStore.EU, i.ShopifyStore.GB, i.ShopifyStore.AE, i.ShopifyStore.IN, e.s(["TRADE_IN_DEVICE_NAMES", 0, {
        RING_AIR: "Ring AIR",
        OURA_GEN_4: "Oura Gen 4",
        SAMSUNG_GALAXY_RING: "Samsung Galaxy Ring",
        RING_CONN: "Ring Conn",
        OURA_GEN_3: "Oura Gen 3"
    }, "TradeInDevice", () => r, "UHX_BONUS", 0, a, "getMaxTradeInCredit", () => s, "getTradeInCredit", () => l, "isTradeInAvailable", () => d])
}, 56375, e => {
    "use strict";
    var t = e.i(91398);
    e.i(64157);
    var i = e.i(71179),
        r = e.i(97580),
        a = e.i(48335),
        o = e.i(3828),
        n = e.i(91788),
        l = e.i(90380),
        s = e.i(37515),
        d = e.i(40647),
        p = e.i(25635),
        c = e.i(82702),
        u = e.i(64034),
        h = e.i(98039),
        g = e.i(56560),
        f = e.i(20685),
        y = e.i(29282),
        m = e.i(1814),
        S = e.i(32899),
        x = e.i(59207),
        C = e.i(79546),
        I = e.i(37030),
        b = e.i(97999),
        R = e.i(74975),
        T = e.i(18421),
        v = e.i(51754),
        _ = e.i(3115),
        E = e.i(27260),
        N = e.i(61102);
    let A = (0, n.createContext)(I.initialRingSelectionContext);
    e.s(["RingSelectionContext", 0, A, "RingSelectionContextProvider", 0, ({
        children: e,
        currency: w,
        defaultColor: G,
        defaultSize: M,
        defaultUhx: D,
        directCheckout: O,
        misc: P,
        estimates: L,
        notServicable: j,
        notServicableMessage: k,
        isOpenSizeDisabled: V,
        showEngravingSectionProp: U
    }) => {
        let z = (0, o.useRouter)(),
            {
                t: B
            } = (0, i.useTranslation)("ring"),
            {
                workAffiliateDiscount: W,
                store: Y,
                addToCart: K,
                affiliateDetails: $,
                getCampaignForProduct: q
            } = (0, n.useContext)(C.CartContext),
            H = (0, n.useContext)(_.RegionLocaleContext),
            F = z.query.locale ? ? H.region,
            {
                isCnOPlus: X
            } = (0, E.useIsCnOPlus)(),
            Z = (0, n.useRef)(null),
            J = (0, n.useRef)(null),
            Q = (0, n.useRef)(null),
            ee = (0, n.useRef)(null),
            et = (0, n.useRef)(null),
            ei = (0, n.useRef)(null),
            er = (0, n.useRef)(null),
            ea = (0, n.useRef)(null),
            eo = q("ring"),
            en = (0, y.getCampaignConfig)(eo),
            el = en ? .active ? ? !1,
            [es, ed] = (0, n.useState)(G),
            [ep, ec] = (0, n.useState)(V ? null : M ? ? c.RingSizes.OPEN),
            [eu, eh] = (0, n.useState)(c.RingChargerType.OG),
            [eg, ef] = (0, n.useState)(D),
            [ey, em] = (0, n.useState)(() => es !== c.AirRingColors.ROSE_GOLD && !1 === U),
            [eS, ex] = (0, n.useReducer)(I.addonsReducer, I.initialAddonsState),
            [eC, eI] = (0, n.useState)(!1),
            {
                engraving: eb,
                afibCart: eR,
                cardioAdaptibilityCart: eT,
                cnoProCart: ev,
                uhxCart: e_,
                clueCart: eE,
                respiratoryCart: eN,
                tradeIn: eA,
                stackType: ew,
                stackVariant: eG
            } = eS,
            eM = e => ex({
                type: "SET_UHX_CART",
                payload: e
            }),
            eD = e => ex({
                type: "SET_CLUE_CART",
                payload: e
            }),
            eO = e => ex({
                type: "SET_RESPIRATORY_CART",
                payload: e
            });
        (0, n.useEffect)(() => {
            let e = es === c.AirRingColors.ROSE_GOLD;
            ex({
                type: "SET_ROSE_GOLD_COLOR",
                payload: e
            }), em(!e), e && ex({
                type: "SET_ENGRAVING",
                payload: !1
            })
        }, [es]);
        let eP = (0, S.useForwardSearchParamsShopify)(),
            eL = !!z.query.eSizingSize,
            ej = "clue" === z.query.flow,
            ek = "respiratory" === z.query.flow;
        (0, n.useEffect)(() => {
            ej && null === eE && eD("Year1")
        }, [ej, eE]), (0, n.useEffect)(() => {
            ek && null === eN && eO("Year1")
        }, [ek, eN]);
        let eV = [{
                ref: Z,
                condition: !ep
            }, {
                ref: J,
                condition: !eu
            }, {
                ref: et,
                condition: null === eb
            }, {
                ref: et,
                condition: eb.enabled && !eb.message
            }, {
                ref: ei,
                condition: !1 === eg && null === e_
            }],
            eU = (0, n.useMemo)(() => (0, I.getShippingEstimate)({
                color: es,
                size: ep,
                estimates: L,
                addonsState: eS,
                t: B
            }), [es, ep, L, eS, B]),
            ez = z.query.referral ? f.ringReferralCodes[Y] : void 0,
            eB = z.query.workAffiliate && z.query.discount,
            eW = m.CurrencySymbol[w.toLowerCase()],
            eY = (0, n.useMemo)(() => e_ && !eg && Y ? g.UhxShopifyMap[Y][e_].price : 0, [e_, eg, Y]),
            eK = Y && es ? c.RingPriceData[Y][es] : {
                price: 0,
                striked_price: 0
            },
            e$ = Y && eb.enabled ? c.EngravingPrice[Y] : 0,
            eq = eK.striked_price - eK.price,
            eH = eK.price + e$,
            eF = (0, n.useMemo)(() => Y && eu === c.RingChargerType.TRAVEL_CHARGER ? h.TravelChargerShopifyMap[Y].price : 0, [Y, eu]),
            eX = (0, n.useMemo)(() => eR ? l.AfibShopifyMap[Y][eR].price : 0, [eR, Y]),
            eZ = (0, n.useMemo)(() => eT ? s.CardioAdaptibilityShopifyMap[Y][eT].price : 0, [eT, Y]),
            eJ = (0, n.useMemo)(() => ev && Y ? R.CnoProShopifyMap[Y][ev].price : 0, [ev, Y]),
            eQ = (0, n.useMemo)(() => eE ? ej ? d.ClueShopifyMap[Y] ? .Year1 ? .discountedPrice || 0 : d.ClueShopifyMap[Y] ? .Year1 ? .price || 0 : 0, [eE, Y, ej]),
            e0 = (0, n.useMemo)(() => eN ? ek ? p.RespiratoryShopifyMap[Y] ? .Year1 ? .discountedPrice || 0 : p.RespiratoryShopifyMap[Y] ? .Year1 ? .price || 0 : 0, [eN, Y, ek]),
            e1 = !!(eg || e_),
            e4 = (0, n.useMemo)(() => eA.device && Y ? (0, N.getTradeInCredit)(eA.device, Y, e1) : 0, [eA.device, Y, e1]),
            e7 = (0, n.useMemo)(() => eA.device && Y ? N.UHX_BONUS[Y] ? ? 0 : 0, [eA.device, Y]),
            e5 = (0, n.useMemo)(() => Y ? (0, N.getMaxTradeInCredit)(Y, e1) : 0, [Y, e1]),
            e2 = (0, n.useMemo)(() => Y && eG !== T.StackVariant.DUO ? (0, v.getStackingPrice)(Y, ew) : 0, [Y, ew, eG]),
            e6 = (0, n.useMemo)(() => Y && eG === T.StackVariant.DUO ? (0, v.getStackingDuoPrice)(Y, ew) : 0, [Y, ew, eG]),
            e3 = (0, n.useMemo)(() => {
                if ("birthday" === z.query.affiliateCode) return 0;
                if (eB) return eH * (W ? .discount ? ? 0) / 100;
                let e = (0, x.getEffectiveStoreForDiscount)(Y);
                if (!e || !$ || !$.ringActive || !$.discount_configs[e] ? .RING ? .code || z.query.referral) return 0;
                let t = $.discount_configs[e] ? .RING;
                return t ? .type === "percentage" ? t.value * eH / 100 : t ? .value ? ? 0
            }, [$, eH, eB, W, Y, z.query.referral, z.query.affiliateCode]),
            e9 = (z.query.heroCategory && a.heroDiscountCodes[z.query.heroCategory] ? z.query.heroCategory : null) ? eH * (0, a.getHeroDiscountPercentage)(Y) : 0,
            e8 = z.query.discount,
            te = z.query.affiliateCode,
            tt = 0;
        if (e8 && "birthday" === te) {
            let e = parseInt(e8.slice(-2));
            tt = !isNaN(e) && e > 0 && e <= 100 ? e : 15
        }
        let ti = e8 && e8.length > 0 && "birthday" === te ? tt / 100 * eH : 0,
            tr = (0, n.useMemo)(() => {
                let e = (0, f.getCampaignPromoDiscountConfig)({
                    store: Y,
                    country: F,
                    product: "ring",
                    campaignConfig: en
                });
                if (!e ? .active || !e ? .discount) return 0;
                let t = e.discount;
                return "percentage" === e.discountType ? t / 100 * eH : t
            }, [Y, F, eH, en]),
            ta = (0, n.useMemo)(() => [{
                type: "referral",
                amount: ez ? .1 * eH : 0
            }, {
                type: "affiliate",
                amount: e3
            }, {
                type: "hero",
                amount: e9
            }, {
                type: "birthday",
                amount: ti
            }, {
                type: "ringPromo",
                amount: tr
            }], [ez, e3, e9, ti, tr]),
            to = (0, n.useMemo)(() => eA.device ? {
                type: "tradeIn",
                amount: 0
            } : ta.reduce((e, t) => t.amount > e.amount ? t : e, {
                type: "referral",
                amount: 0
            }), [ta, eA.device]),
            tn = (0, n.useMemo)(() => eH + eF + eZ + eX + eJ + eQ + e0 + e2 + e6 + eY - to.amount, [eH, eF, eZ, eX, eJ, eQ, e0, e2, e6, eY, to]);
        (0, n.useEffect)(() => {
            (z.query.affiliate || z.query.affiliateCode) && eM(!1)
        }, [z.query]);
        let tl = async () => {
            if (es && ep && Y && !0 !== j) {
                if (O) {
                    if (P && ![null, void 0, ""].includes(u.productMap_air_ring[es] ? .[ep] ? .NOT_ENGRAVED.misc ? .[P])) {
                        let e = eP(u.productMap_air_ring[es] ? .[ep] ? .NOT_ENGRAVED.misc ? .[P], "ring_air");
                        z.push(e);
                        return
                    }
                    if (P) return void console.log("something went wrong");
                    if (u.productMap_air_ring[es] ? .[ep] ? .NOT_ENGRAVED.variantId[Y]) {
                        let e = eP(u.productMap_air_ring[es] ? .[ep] ? .NOT_ENGRAVED.variantId[Y], "ring_air");
                        z.push(e)
                    } else console.log("something went wrong!");
                    return
                }
                try {
                    eI(!0);
                    let e = (0, I.getCheckoutLineItems)({
                        color: es,
                        size: ep,
                        store: Y,
                        chargerType: eu,
                        engraving: eb.enabled,
                        engravingMessage: eb.message,
                        eSizingSize: eL,
                        uhxCart: e_,
                        afibCart: eR,
                        cardioAdaptibilityCart: eT,
                        cnoProCart: ev,
                        clueCart: eE,
                        respiratoryCart: eN,
                        stackType: ew,
                        stackVariant: eG,
                        misc: P,
                        isCnOPlus: X,
                        affiliateDetails: $,
                        tradeInDevice: eA.device,
                        tradeInSerialNumber: eA.serialNumber,
                        tradeInCredit: e4
                    });
                    await K(e, !0), ec(V ? null : M ? ? c.RingSizes.OPEN), eh(c.RingChargerType.OG), ef(D), ex({
                        type: "RESET_ALL"
                    })
                } catch (e) {
                    alert("something went wrong!"), console.log({
                        error: e
                    })
                } finally {
                    eI(!1)
                }
            }
        };
        return (0, t.jsx)(A.Provider, {
            value: {
                color: es,
                setColor: ed,
                size: ep,
                setSize: ec,
                chargerType: eu,
                setChargerType: eh,
                uhx: eg,
                setUhx: ef,
                uhxCart: e_,
                setUhxCart: eM,
                afibCart: eR,
                setAfibCart: e => ex({
                    type: "SET_AFIB_CART",
                    payload: e
                }),
                cardioAdaptibilityCart: eT,
                setCardioAdaptabilityCart: e => ex({
                    type: "SET_CARDIO_ADAPTIBILITY_CART",
                    payload: e
                }),
                cnoProCart: ev,
                setCnoProCart: e => ex({
                    type: "SET_CNO_PRO_CART",
                    payload: e
                }),
                clueCart: eE,
                setClueCart: eD,
                respiratoryCart: eN,
                setRespiratoryCart: eO,
                tradeInDevice: eA.device,
                setTradeInDevice: e => ex({
                    type: "SET_TRADE_IN_DEVICE",
                    payload: e
                }),
                tradeInSerialNumber: eA.serialNumber,
                setTradeInSerialNumber: e => ex({
                    type: "SET_TRADE_IN_SERIAL_NUMBER",
                    payload: e
                }),
                tradeInCredit: e4,
                tradeInBonus: e7,
                tradeInMaxCredit: e5,
                hasUhx: e1,
                stackType: ew,
                setStackType: e => ex({
                    type: "SET_STACK_TYPE",
                    payload: e
                }),
                stackVariant: eG,
                setStackVariant: e => ex({
                    type: "SET_STACK_VARIANT",
                    payload: e
                }),
                engraving: eb.enabled,
                setEngraving: e => ex({
                    type: "SET_ENGRAVING",
                    payload: e
                }),
                engravingMessage: eb.message,
                setEngravingMessage: e => ex({
                    type: "SET_ENGRAVING_MESSAGE",
                    payload: e
                }),
                checkout: tl,
                isLoading: eC,
                defaultCurrency: w,
                currencySymbol: eW,
                store: Y,
                price: eH,
                ultraHumanPrice: eY,
                effectivePrice: tn,
                chargerPrice: eF,
                shippingEstimate: eU,
                affiliateDetails: $,
                campaignActive: el,
                affiliateDiscount: e3,
                referral: ez,
                sectionRefs: {
                    showSizeRef: Z,
                    showChargerRef: J,
                    showTradeInRef: Q,
                    tradeInOptionsRef: ee,
                    engravingRef: et,
                    coverageRef: ei,
                    powerplugRef: er,
                    cartSummaryRef: ea
                },
                goToNextStep: () => {
                    for (let {
                            ref: e,
                            condition: t
                        } of ((0, r.track)("Bottom bar continue - CLICK"), eV))
                        if (t) {
                            (0, b.highlightElement)(e);
                            break
                        }
                },
                effectiveDiscount: to,
                showEngravingSection: ey,
                priceDrop: eq,
                notServicable: j,
                notServicableMessage: k,
                isOpenSizeDisabled: V
            },
            children: e
        })
    }])
}, 49317, e => {
    "use strict";
    var t = e.i(91788);
    let i = (0, t.createContext)({
        resetCounter: () => {
            console.warn("[RetouchFlow] resetCounter called outside of RetouchFlowProvider")
        },
        visitCount: 0
    });
    e.s(["RetouchFlowContext", 0, i, "useRetouchFlowContext", 0, () => (0, t.useContext)(i)])
}, 77067, 96117, 85546, 54436, e => {
    "use strict";
    var t, i, r = e.i(82702),
        a = ((t = {}).GOLD = "GOLD", t.SILVER = "SILVER", t.BLACK = "BLACK", t.TITANIUM = "TITANIUM", t),
        o = ((i = {}).GOLD = "GOLD", i.BLACK = "BLACK", i);
    e.s(["RingProChargerCaseColor", () => o, "RingProColors", () => a], 77067), e.i(50461);
    var n = e.i(59207);
    e.i(98039);
    var l = e.i(13458);
    let s = [n.ShopifyStore.US, n.ShopifyStore.IN, n.ShopifyStore.ROW, n.ShopifyStore.EU, n.ShopifyStore.GB, n.ShopifyStore.AE];

    function d(e) {
        return e.startsWith("gid://") ? e : `gid://shopify/ProductVariant/${e}`
    }
    let p = {
            [n.ShopifyStore.US]: {
                BLACK: {
                    5: "42613670477920",
                    6: "42613670510688",
                    7: "42613670543456",
                    8: "42613670576224",
                    9: "42613670608992",
                    10: "42613670641760",
                    11: "42613670674528",
                    12: "42613670707296",
                    13: "42613670740064",
                    14: "42613670772832",
                    99: "42613670805600"
                },
                GOLD: {
                    5: "42613671198816",
                    6: "42613671231584",
                    7: "42613671264352",
                    8: "42613671297120",
                    9: "42613671329888",
                    10: "42613671362656",
                    11: "42613671395424",
                    12: "42613671428192",
                    13: "42613671460960",
                    14: "42613671493728",
                    99: "42613671526496"
                },
                SILVER: {
                    5: "42613671559264",
                    6: "42613671592032",
                    7: "42613671624800",
                    8: "42613671657568",
                    9: "42613671690336",
                    10: "42613671723104",
                    11: "42613671755872",
                    12: "42613671788640",
                    13: "42613671821408",
                    14: "42613671854176",
                    99: "42613671886944"
                },
                TITANIUM: {
                    5: "42613671919712",
                    6: "42613671952480",
                    7: "42613671985248",
                    8: "42613672018016",
                    9: "42613672050784",
                    10: "42613672083552",
                    11: "42613672116320",
                    12: "42613672149088",
                    13: "42613672181856",
                    14: "42613672214624",
                    99: "42613672247392"
                }
            },
            [n.ShopifyStore.IN]: {
                BLACK: {
                    5: "44694393913414",
                    6: "44694394208326",
                    7: "44694394503238",
                    8: "44694394798150",
                    9: "44694395093062",
                    10: "44694395387974",
                    11: "44694395682886",
                    12: "44694395977798",
                    13: "44694396272710",
                    14: "44694396567622",
                    99: "44694396862534"
                },
                GOLD: {
                    5: "44694393946182",
                    6: "44694394241094",
                    7: "44694394536006",
                    8: "44694394830918",
                    9: "44694395125830",
                    10: "44694395420742",
                    11: "44694395715654",
                    12: "44694396010566",
                    13: "44694396305478",
                    14: "44694396600390",
                    99: "44694396895302"
                },
                SILVER: {
                    5: "44694393978950",
                    6: "44694394273862",
                    7: "44694394568774",
                    8: "44694394863686",
                    9: "44694395158598",
                    10: "44694395453510",
                    11: "44694395748422",
                    12: "44694396043334",
                    13: "44694396338246",
                    14: "44694396633158",
                    99: "44694396928070"
                },
                TITANIUM: {
                    5: "44694394077254",
                    6: "44694394372166",
                    7: "44694394667078",
                    8: "44694394961990",
                    9: "44694395256902",
                    10: "44694395551814",
                    11: "44694395846726",
                    12: "44694396141638",
                    13: "44694396436550",
                    14: "44694396731462",
                    99: "44694397026374"
                }
            },
            [n.ShopifyStore.ROW]: {
                BLACK: {
                    5: "44021935571004",
                    6: "44021935833148",
                    7: "44021936095292",
                    8: "44021936357436",
                    9: "44021936619580",
                    10: "44021936881724",
                    11: "44021937143868",
                    12: "44021937406012",
                    13: "44021937668156",
                    14: "44021937930300",
                    99: "44021938192444"
                },
                GOLD: {
                    5: "44021935603772",
                    6: "44021935865916",
                    7: "44021936128060",
                    8: "44021936390204",
                    9: "44021936652348",
                    10: "44021936914492",
                    11: "44021937176636",
                    12: "44021937438780",
                    13: "44021937700924",
                    14: "44021937963068",
                    99: "44021938225212"
                },
                SILVER: {
                    5: "44021935636540",
                    6: "44021935898684",
                    7: "44021936160828",
                    8: "44021936422972",
                    9: "44021936685116",
                    10: "44021936947260",
                    11: "44021937209404",
                    12: "44021937471548",
                    13: "44021937733692",
                    14: "44021937995836",
                    99: "44021938257980"
                },
                TITANIUM: {
                    5: "44021935702076",
                    6: "44021935964220",
                    7: "44021936226364",
                    8: "44021936488508",
                    9: "44021936750652",
                    10: "44021937012796",
                    11: "44021937274940",
                    12: "44021937537084",
                    13: "44021937799228",
                    14: "44021938061372",
                    99: "44021938323516"
                }
            },
            [n.ShopifyStore.EU]: {
                BLACK: {
                    5: "57375791382902",
                    6: "57375791612278",
                    7: "57375791841654",
                    8: "57375792071030",
                    9: "57375792300406",
                    10: "57375792529782",
                    11: "57375792759158",
                    12: "57375792988534",
                    13: "57375793217910",
                    14: "57375793447286",
                    99: "57375793676662"
                },
                GOLD: {
                    5: "57375791415670",
                    6: "57375791645046",
                    7: "57375791874422",
                    8: "57375792103798",
                    9: "57375792333174",
                    10: "57375792562550",
                    11: "57375792791926",
                    12: "57375793021302",
                    13: "57375793250678",
                    14: "57375793480054",
                    99: "57375793709430"
                },
                SILVER: {
                    5: "57375791448438",
                    6: "57375791677814",
                    7: "57375791907190",
                    8: "57375792136566",
                    9: "57375792365942",
                    10: "57375792595318",
                    11: "57375792824694",
                    12: "57375793054070",
                    13: "57375793283446",
                    14: "57375793512822",
                    99: "57375793742198"
                },
                TITANIUM: {
                    5: "57375791513974",
                    6: "57375791743350",
                    7: "57375791972726",
                    8: "57375792202102",
                    9: "57375792431478",
                    10: "57375792660854",
                    11: "57375792890230",
                    12: "57375793119606",
                    13: "57375793348982",
                    14: "57375793578358",
                    99: "57375793807734"
                }
            },
            [n.ShopifyStore.GB]: {
                BLACK: {
                    5: "57375791382902",
                    6: "57375791612278",
                    7: "57375791841654",
                    8: "57375792071030",
                    9: "57375792300406",
                    10: "57375792529782",
                    11: "57375792759158",
                    12: "57375792988534",
                    13: "57375793217910",
                    14: "57375793447286",
                    99: "57375793676662"
                },
                GOLD: {
                    5: "57375791415670",
                    6: "57375791645046",
                    7: "57375791874422",
                    8: "57375792103798",
                    9: "57375792333174",
                    10: "57375792562550",
                    11: "57375792791926",
                    12: "57375793021302",
                    13: "57375793250678",
                    14: "57375793480054",
                    99: "57375793709430"
                },
                SILVER: {
                    5: "57375791448438",
                    6: "57375791677814",
                    7: "57375791907190",
                    8: "57375792136566",
                    9: "57375792365942",
                    10: "57375792595318",
                    11: "57375792824694",
                    12: "57375793054070",
                    13: "57375793283446",
                    14: "57375793512822",
                    99: "57375793742198"
                },
                TITANIUM: {
                    5: "57375791513974",
                    6: "57375791743350",
                    7: "57375791972726",
                    8: "57375792202102",
                    9: "57375792431478",
                    10: "57375792660854",
                    11: "57375792890230",
                    12: "57375793119606",
                    13: "57375793348982",
                    14: "57375793578358",
                    99: "57375793807734"
                }
            },
            [n.ShopifyStore.AE]: {
                BLACK: {
                    5: "62576782344563",
                    6: "62576782573939",
                    7: "62576782803315",
                    8: "62576783032691",
                    9: "62576783262067",
                    10: "62576783491443",
                    11: "62576783720819",
                    12: "62576783950195",
                    13: "62576784179571",
                    14: "62576784408947",
                    99: "62576784638323"
                },
                GOLD: {
                    5: "62576782377331",
                    6: "62576782606707",
                    7: "62576782836083",
                    8: "62576783065459",
                    9: "62576783294835",
                    10: "62576783524211",
                    11: "62576783753587",
                    12: "62576783982963",
                    13: "62576784212339",
                    14: "62576784441715",
                    99: "62576784671091"
                },
                SILVER: {
                    5: "62576782410099",
                    6: "62576782639475",
                    7: "62576782868851",
                    8: "62576783098227",
                    9: "62576783327603",
                    10: "62576783556979",
                    11: "62576783786355",
                    12: "62576784015731",
                    13: "62576784245107",
                    14: "62576784474483",
                    99: "62576784703859"
                },
                TITANIUM: {
                    5: "62576782475635",
                    6: "62576782705011",
                    7: "62576782934387",
                    8: "62576783163763",
                    9: "62576783393139",
                    10: "62576783622515",
                    11: "62576783851891",
                    12: "62576784081267",
                    13: "62576784310643",
                    14: "62576784540019",
                    99: "62576784769395"
                }
            }
        },
        c = {
            [n.ShopifyStore.US]: {
                BLACK: "42613769109600",
                GOLD: "42613769928800"
            },
            [n.ShopifyStore.IN]: {
                BLACK: "44694401548358",
                GOLD: "44694401908806"
            },
            [n.ShopifyStore.ROW]: {
                BLACK: "44021940846652",
                GOLD: "44021944877116"
            },
            [n.ShopifyStore.EU]: {
                BLACK: "57375798264182",
                GOLD: "57375800787318"
            },
            [n.ShopifyStore.GB]: {
                BLACK: "57375798264182",
                GOLD: "57375800787318"
            },
            [n.ShopifyStore.AE]: {
                BLACK: "62576792174963",
                GOLD: "62576798957939"
            }
        },
        u = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 99],
        h = ["GOLD", "SILVER", "BLACK", "TITANIUM"],
        g = function() {
            let e = {
                GOLD: {},
                SILVER: {},
                BLACK: {},
                TITANIUM: {}
            };
            for (let t of h)
                for (let i of u) {
                    let r = {},
                        a = {};
                    for (let e of s) {
                        let o = p[e] ? .[t] ? .[i];
                        if (o) {
                            let t = {
                                id: d(o),
                                url: ""
                            };
                            r[e] = t, a[e] = t
                        }
                    }
                    e[t][i] || (e[t][i] = {
                        E: {},
                        N: {}
                    }), e[t][i].E = r, e[t][i].N = a
                }
            return e
        }(),
        f = function() {
            let e = {
                GOLD: {},
                BLACK: {}
            };
            for (let t of ["GOLD", "BLACK"])
                for (let i of u) {
                    let r = {};
                    for (let e of s) {
                        let i = c[e] ? .[t];
                        i && (r[e] = {
                            id: d(i),
                            url: ""
                        })
                    }
                    e[t][i] || (e[t][i] = {}), e[t][i] = r
                }
            return e
        }(),
        y = (0, l.deepExpandStoreAliases)(g),
        m = (0, l.deepExpandStoreAliases)(f),
        S = [r.RingSizes.FIVE, r.RingSizes.SIX, r.RingSizes.SEVEN, r.RingSizes.EIGHT, r.RingSizes.NINE, r.RingSizes.TEN, r.RingSizes.ELEVEN, r.RingSizes.TWELVE, r.RingSizes.THIRTEEN, r.RingSizes.FOURTEEN, r.RingSizes.OPEN],
        x = {
            [n.ShopifyStore.US]: 0,
            [n.ShopifyStore.ROW]: 0,
            [n.ShopifyStore.EU]: 0,
            [n.ShopifyStore.GB]: 0,
            [n.ShopifyStore.IN]: 0,
            [n.ShopifyStore.AE]: 0,
            [n.ShopifyStore.AU]: 0,
            [n.ShopifyStore.CA]: 0,
            [n.ShopifyStore.SA]: 0,
            [n.ShopifyStore.MX]: 0,
            [n.ShopifyStore.ZA]: 0
        };

    function C(e) {
        let t = {};
        for (let i of S) {
            let a = i === r.RingSizes.OPEN ? 99 : i,
                o = m[e] ? .[a] ? ? {},
                n = {},
                l = {};
            for (let [e, t] of Object.entries(o)) t && (n[e] = t.id, l[e] = t.url);
            t[i] = {
                variantId: n,
                checkoutUrl: l,
                price: { ...x
                }
            }
        }
        return t
    }
    let I = {
        [o.GOLD]: C(o.GOLD),
        [o.BLACK]: C(o.BLACK)
    };
    e.s(["RingProChargerCaseVariants", 0, I], 96117);
    var b = e.i(228);
    let R = {
        [n.ShopifyStore.US]: {
            [b.Currency.usd]: 479
        },
        [n.ShopifyStore.ROW]: {
            [b.Currency.usd]: 479
        },
        [n.ShopifyStore.CA]: {
            [b.Currency.cad]: 649
        },
        [n.ShopifyStore.GB]: {
            [b.Currency.gbp]: 419
        },
        [n.ShopifyStore.EU]: {
            [b.Currency.eur]: 479
        },
        [n.ShopifyStore.AU]: {
            [b.Currency.aud]: 739
        },
        [n.ShopifyStore.IN]: {
            [b.Currency.inr]: 42990
        },
        [n.ShopifyStore.AE]: {
            [b.Currency.aed]: 1749
        },
        [n.ShopifyStore.SA]: {
            [b.Currency.sar]: 2069
        },
        [n.ShopifyStore.MX]: {
            [b.Currency.mxn]: 9499
        },
        [n.ShopifyStore.ZA]: {
            [b.Currency.zar]: 8749
        }
    };

    function T(e, t) {
        return R[e] ? .[t]
    }
    e.s(["getRingProBasePrice", () => T], 85546);
    let v = [r.RingSizes.FIVE, r.RingSizes.SIX, r.RingSizes.SEVEN, r.RingSizes.EIGHT, r.RingSizes.NINE, r.RingSizes.TEN, r.RingSizes.ELEVEN, r.RingSizes.TWELVE, r.RingSizes.THIRTEEN, r.RingSizes.FOURTEEN, r.RingSizes.OPEN];

    function _(e, t, i) {
        let a = t === r.RingSizes.OPEN ? 99 : t,
            o = i === r.RingType.ENGRAVED ? "E" : "N",
            n = `RP${e.charAt(0)}`,
            l = y[e] ? .[a] ? .[o] ? ? {},
            s = {},
            d = {};
        for (let [e, t] of Object.entries(l)) t && (s[e] = t.id, d[e] = t.url);
        return {
            SKU: `${n}${a}${o}`,
            variantId: s,
            checkoutUrl: d
        }
    }

    function E(e) {
        let t = {};
        for (let i of v) t[i] = {
            [r.RingType.ENGRAVED]: _(e, i, r.RingType.ENGRAVED),
            [r.RingType.NOT_ENGRAVED]: _(e, i, r.RingType.NOT_ENGRAVED)
        };
        return t
    }
    let N = {
        [a.GOLD]: E(a.GOLD),
        [a.SILVER]: E(a.SILVER),
        [a.BLACK]: E(a.BLACK),
        [a.TITANIUM]: E(a.TITANIUM)
    };
    e.s(["RingProVariants", 0, N], 54436)
}, 87156, e => {
    "use strict";
    var t = e.i(91398),
        i = e.i(91788);
    e.i(64157);
    var r = e.i(71179),
        a = e.i(3828),
        o = e.i(48335),
        n = e.i(79546),
        l = e.i(90380),
        s = e.i(37515),
        d = e.i(74975),
        p = e.i(40647),
        c = e.i(25635),
        u = e.i(77067),
        h = e.i(82702),
        g = e.i(96117),
        f = e.i(85546),
        y = e.i(56560),
        m = e.i(1814),
        S = e.i(59207),
        x = e.i(228),
        C = e.i(27260),
        I = e.i(20685),
        b = e.i(29282),
        R = e.i(3115),
        T = e.i(53238),
        v = e.i(54436),
        _ = e.i(61102),
        E = e.i(74508);
    let N = {
        engraving: {
            enabled: !1,
            message: null
        },
        uhxCart: null,
        afibCart: null,
        cardioAdaptibilityCart: null,
        cnoProCart: null,
        clueCart: null,
        respiratoryCart: null,
        tradeIn: {
            device: null,
            serialNumber: ""
        }
    };

    function A(e, t) {
        switch (t.type) {
            case "SET_ENGRAVING":
                return { ...e,
                    engraving: { ...e.engraving,
                        enabled: t.payload
                    }
                };
            case "SET_ENGRAVING_MESSAGE":
                return { ...e,
                    engraving: { ...e.engraving,
                        message: t.payload
                    }
                };
            case "SET_UHX_CART":
                return { ...e,
                    uhxCart: t.payload
                };
            case "SET_AFIB_CART":
                return { ...e,
                    afibCart: t.payload
                };
            case "SET_CARDIO_ADAPTIBILITY_CART":
                return { ...e,
                    cardioAdaptibilityCart: t.payload
                };
            case "SET_CNO_PRO_CART":
                return { ...e,
                    cnoProCart: t.payload
                };
            case "SET_CLUE_CART":
                return { ...e,
                    clueCart: t.payload
                };
            case "SET_RESPIRATORY_CART":
                return { ...e,
                    respiratoryCart: t.payload
                };
            case "SET_TRADE_IN_DEVICE":
                return { ...e,
                    tradeIn: { ...e.tradeIn,
                        device: t.payload
                    }
                };
            case "SET_TRADE_IN_SERIAL_NUMBER":
                return { ...e,
                    tradeIn: { ...e.tradeIn,
                        serialNumber: t.payload
                    }
                };
            default:
                return e
        }
    }
    let w = {
            color: null,
            setColor: () => void 0,
            size: null,
            setSize: () => void 0,
            chargerCaseColor: null,
            setChargerCaseColor: () => void 0,
            defaultCurrency: x.Currency.usd,
            uhx: !1,
            setUhx: () => void 0,
            engraving: !1,
            setEngraving: () => void 0,
            engravingMessage: null,
            setEngravingMessage: () => void 0,
            checkout: async () => void 0,
            isLoading: !1,
            uhxCart: null,
            setUhxCart: () => void 0,
            afibCart: null,
            setAfibCart: () => void 0,
            cardioAdaptibilityCart: null,
            setCardioAdaptabilityCart: () => void 0,
            cnoProCart: null,
            setCnoProCart: () => void 0,
            clueCart: null,
            setClueCart: () => void 0,
            respiratoryCart: null,
            setRespiratoryCart: () => void 0,
            store: null,
            serverDiscount: {
                applicable: !1
            },
            basePrice: 0,
            price: 0,
            ultraHumanPrice: 0,
            effectivePrice: 0,
            chargerPrice: 0,
            shippingEstimate: null,
            affiliateDetails: null,
            campaignActive: !1,
            affiliateDiscount: 0,
            showEngravingSection: !0,
            priceDrop: 0,
            effectiveDiscount: {
                type: "",
                amount: 0,
                label: void 0,
                priceTagText: void 0,
                code: void 0
            },
            sectionRefs: {},
            goToNextStep: () => void 0,
            notServicable: !1,
            notServicableMessage: void 0,
            uhxFirstOnly: !1,
            isOpenSizeDisabled: !1,
            tradeInDevice: null,
            setTradeInDevice: () => void 0,
            tradeInSerialNumber: "",
            setTradeInSerialNumber: () => void 0,
            tradeInCredit: 0,
            tradeInMaxCredit: 0,
            hasUhx: !1
        },
        G = (0, i.createContext)(w);
    e.s(["RingProSelectionContext", 0, G, "RingProSelectionContextProvider", 0, ({
        children: e,
        currency: x,
        defaultColor: w,
        defaultSize: M,
        defaultUhx: D,
        serverDiscount: O,
        estimates: P,
        notServicable: L,
        notServicableMessage: j,
        uhxFirstOnly: k,
        isOpenSizeDisabled: V,
        showEngravingSectionProp: U = !0
    }) => {
        let {
            t: z
        } = (0, r.useTranslation)("ring"), B = (0, a.useRouter)(), W = (0, i.useContext)(n.CartContext), {
            addToCart: Y,
            workAffiliateDiscount: K,
            affiliateDetails: $,
            getCampaignForProduct: q
        } = W, H = (0, i.useContext)(R.RegionLocaleContext), F = B.query.locale ? ? H.region, {
            isCnOPlus: X
        } = (0, C.useIsCnOPlus)(), Z = q("ring"), J = (0, b.getCampaignConfig)(Z), Q = (0, i.useRef)(null), ee = (0, i.useRef)(null), et = (0, i.useRef)(null), ei = (0, i.useRef)(null), er = {
            showSizeRef: Q,
            showChargerRef: ee,
            engravingRef: et,
            coverageRef: ei,
            powerplugRef: (0, i.useRef)(null),
            cartSummaryRef: (0, i.useRef)(null)
        }, [ea, eo] = (0, i.useState)(w), [en, el] = (0, i.useState)(V ? null : M ? ? h.RingSizes.OPEN), [es, ed] = (0, i.useState)(u.RingProChargerCaseColor.GOLD), [ep, ec] = (0, i.useState)(D), [eu, eh] = (0, i.useReducer)(A, N), [eg, ef] = (0, i.useState)(!1), ey = W.store, {
            engraving: em,
            uhxCart: eS,
            afibCart: ex,
            cardioAdaptibilityCart: eC,
            cnoProCart: eI,
            clueCart: eb,
            respiratoryCart: eR,
            tradeIn: eT
        } = eu, ev = e => eh({
            type: "SET_ENGRAVING",
            payload: e
        }), e_ = e => eh({
            type: "SET_ENGRAVING_MESSAGE",
            payload: e
        }), eE = e => eh({
            type: "SET_UHX_CART",
            payload: e
        }), eN = e => eh({
            type: "SET_AFIB_CART",
            payload: e
        }), eA = e => eh({
            type: "SET_CARDIO_ADAPTIBILITY_CART",
            payload: e
        }), ew = e => eh({
            type: "SET_CNO_PRO_CART",
            payload: e
        }), eG = e => eh({
            type: "SET_CLUE_CART",
            payload: e
        }), eM = e => eh({
            type: "SET_RESPIRATORY_CART",
            payload: e
        }), eD = e => eh({
            type: "SET_TRADE_IN_DEVICE",
            payload: e
        }), eO = e => eh({
            type: "SET_TRADE_IN_SERIAL_NUMBER",
            payload: e
        }), eP = !!(ep || eS), eL = (0, i.useMemo)(() => eT.device && ey ? (0, _.getTradeInCredit)(eT.device, ey, eP) : 0, [eT.device, ey, eP]), ej = (0, i.useMemo)(() => ey ? (0, _.getMaxTradeInCredit)(ey, eP) : 0, [ey, eP]), ek = m.CurrencySymbol[x.toLowerCase()], eV = (0, i.useMemo)(() => ey ? (0, f.getRingProBasePrice)(ey, x) ? ? 0 : 0, [ey, x]), eU = (0, i.useMemo)(() => ey ? O.applicable && O.discountedPrice ? O.discountedPrice : (0, f.getRingProBasePrice)(ey, x) ? ? 0 : 0, [ey, x, O]), ez = (0, i.useMemo)(() => eS && !ep && ey ? y.UhxShopifyMap[ey][eS].price : 0, [eS, ep, ey]), eB = (0, i.useMemo)(() => ey && es && en ? g.RingProChargerCaseVariants[es] ? .[en] ? .price[ey] ? ? 0 : 0, [ey, es, en]), eW = (0, i.useMemo)(() => ex && ey ? l.AfibShopifyMap[ey][ex].price : 0, [ex, ey]), eY = (0, i.useMemo)(() => eC && ey ? s.CardioAdaptibilityShopifyMap[ey][eC].price : 0, [eC, ey]), eK = (0, i.useMemo)(() => eI && ey ? (X ? T.CnoPlusShopifyMap : d.CnoProShopifyMap)[ey][eI].price : 0, [eI, ey, X]), e$ = (0, i.useMemo)(() => eb && ey ? p.ClueShopifyMap[ey] ? .Year1 ? .price ? ? 0 : 0, [eb, ey]), eq = (0, i.useMemo)(() => eR && ey ? c.RespiratoryShopifyMap[ey] ? .Year1 ? .price ? ? 0 : 0, [eR, ey]), eH = B.query.referral ? I.ringReferralCodes[ey] : void 0, eF = B.query.workAffiliate && B.query.discount, eX = (0, i.useMemo)(() => {
            if ("birthday" === B.query.affiliateCode) return 0;
            if (eF) return eU * (K ? .discount ? ? 0) / 100;
            let e = (0, S.getEffectiveStoreForDiscount)(ey);
            if (!e || !$ || !$.ringActive || !$.discount_configs[e] ? .RING ? .code || B.query.referral) return 0;
            let t = $.discount_configs[e] ? .RING;
            return t ? .type === "percentage" ? t.value * eU / 100 : t ? .value ? ? 0
        }, [$, eU, eF, K, ey, B.query.referral, B.query.affiliateCode]), eZ = (B.query.heroCategory && o.heroDiscountCodes[B.query.heroCategory] ? B.query.heroCategory : null) ? eU * (0, o.getHeroDiscountPercentage)(ey) : 0, eJ = B.query.discount, eQ = B.query.affiliateCode, e0 = 0;
        if (eJ && "birthday" === eQ) {
            let e = parseInt(eJ.slice(-2));
            e0 = !isNaN(e) && e > 0 && e <= 100 ? e : 15
        }
        let e1 = eJ && eJ.length > 0 && "birthday" === eQ ? e0 / 100 * eU : 0,
            e4 = (0, i.useMemo)(() => {
                let e = (0, I.getCampaignPromoDiscountConfig)({
                    store: ey,
                    country: F,
                    product: "ring",
                    campaignConfig: J
                });
                if (!e ? .active || !e ? .discount) return 0;
                let t = e.discount;
                return "percentage" === e.discountType ? t / 100 * eU : t
            }, [ey, F, eU, J]),
            e7 = (0, i.useMemo)(() => [{
                type: "referral",
                amount: eH ? .1 * eU : 0
            }, {
                type: "affiliate",
                amount: eX
            }, {
                type: "hero",
                amount: eZ
            }, {
                type: "birthday",
                amount: e1
            }, {
                type: "ringPromo",
                amount: e4
            }], [eH, eX, eZ, e1, e4]),
            e5 = (0, i.useMemo)(() => eV > eU ? eV - eU : 0, [eV, eU]),
            e2 = (0, i.useMemo)(() => O.applicable && eV > eU ? {
                type: "server",
                amount: eV - eU,
                label: O.label ? ? "Discount",
                priceTagText: O.priceTagText,
                code: O.code
            } : eT.device ? {
                type: "tradeIn",
                amount: 0,
                label: void 0,
                priceTagText: void 0,
                code: void 0
            } : { ...e7.reduce((e, t) => t.amount > e.amount ? t : e, {
                    type: "referral",
                    amount: 0
                }),
                label: void 0,
                priceTagText: void 0,
                code: void 0
            }, [O, eV, eU, e7, eT.device]),
            e6 = J ? .active ? ? !1,
            e3 = (0, i.useMemo)(() => eU + eB + eY + eW + eK + e$ + eq + ez - e2.amount, [eU, eB, eY, eW, eK, e$, eq, ez, e2]),
            e9 = (0, i.useMemo)(() => (0, t.jsxs)("span", {
                children: ["Shipping ", (0, t.jsx)("strong", {
                    children: "April 30th"
                }), " onwards"]
            }), []);
        (0, i.useEffect)(() => {
            (B.query.affiliate || B.query.affiliateCode) && eE(null)
        }, [B.query]);
        let e8 = U ? ? !0,
            te = () => {
                en ? es ? em.enabled && !em.message ? tt(et) : ep || null !== eS || tt(ei) : tt(ee) : tt(Q)
            };

        function tt(e) {
            e.current ? .scrollIntoView ? .({
                behavior: "smooth",
                block: "center"
            })
        }
        let ti = async () => {
                if (ea && en && ey && es && !L) try {
                    ef(!0);
                    let e = function(e) {
                        let {
                            color: t,
                            size: i,
                            store: r,
                            chargerCaseColor: a,
                            engraving: o,
                            engravingMessage: n,
                            eSizingSize: u,
                            uhxCart: f,
                            afibCart: m,
                            cardioAdaptibilityCart: S,
                            cnoProCart: x,
                            clueCart: C,
                            respiratoryCart: I,
                            isCnOPlus: b,
                            tradeInDevice: R,
                            tradeInSerialNumber: N
                        } = e;
                        if (!t || !i || !r) return [];
                        let A = v.RingProVariants[t] ? .[i];
                        if (!A) return [];
                        let w = A[o ? h.RingType.ENGRAVED : h.RingType.NOT_ENGRAVED] ? .variantId[r];
                        if (!w) return [];
                        let G = [{
                                key: "_bundle_id",
                                value: "u" > typeof crypto && crypto.randomUUID ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, e => {
                                    let t = 16 * Math.random() | 0;
                                    return ("x" === e ? t : 3 & t | 8).toString(16)
                                })
                            }],
                            M = [...G, {
                                key: "_is_bundle_parent",
                                value: "1"
                            }],
                            D = [];
                        if (o && n && D.push({
                                key: "engraving",
                                value: n
                            }), u && D.push({
                                key: "eSizing",
                                value: "true"
                            }), R) {
                            let e = (0, _.getTradeInCredit)(R, r, !!f);
                            D.push({
                                key: "trade_in_device",
                                value: R
                            }), D.push({
                                key: "trade_in_credit",
                                value: String(e)
                            }), D.push({
                                key: "trade_in_serial_number",
                                value: N
                            })
                        }
                        let O = [];
                        i === h.RingSizes.OPEN && h.RingProSizingKitShopifyMap[r] ? .shopifyVariantId && O.push({
                            shopifyVariantId: h.RingProSizingKitShopifyMap[r].shopifyVariantId,
                            productType: E.ProductType.RING,
                            params: {
                                noteAttributes: G
                            }
                        });
                        let P = g.RingProChargerCaseVariants[a] ? .[i] ? .variantId[r];
                        if (P && O.push({
                                shopifyVariantId: P,
                                productType: E.ProductType.RING,
                                params: {
                                    noteAttributes: G
                                }
                            }), f && y.UhxShopifyMap[r] ? .[f] ? .variantId && O.push({
                                shopifyVariantId: y.UhxShopifyMap[r][f].variantId,
                                productType: E.ProductType.GENERIC,
                                params: {
                                    noteAttributes: G
                                }
                            }), S && s.CardioAdaptibilityShopifyMap[r] ? .[S] ? .variantId && O.push({
                                shopifyVariantId: s.CardioAdaptibilityShopifyMap[r][S].variantId,
                                productType: E.ProductType.RING,
                                params: {
                                    noteAttributes: G
                                }
                            }), m && l.AfibShopifyMap[r] ? .[m] ? .variantId && O.push({
                                shopifyVariantId: l.AfibShopifyMap[r][m].variantId,
                                productType: E.ProductType.RING,
                                params: {
                                    noteAttributes: G
                                }
                            }), x) {
                            let e = b ? T.CnoPlusShopifyMap : d.CnoProShopifyMap;
                            e[r] ? .[x] ? .variantId && O.push({
                                shopifyVariantId: e[r][x].variantId,
                                productType: E.ProductType.RING,
                                params: {
                                    noteAttributes: G
                                }
                            })
                        }
                        return "Year1" === C && p.ClueShopifyMap[r] ? .Year1 ? .variantId && O.push({
                            shopifyVariantId: p.ClueShopifyMap[r].Year1.variantId,
                            productType: E.ProductType.RING,
                            params: {
                                noteAttributes: G
                            }
                        }), "Year1" === I && c.RespiratoryShopifyMap[r] ? .Year1 ? .variantId && O.push({
                            shopifyVariantId: c.RespiratoryShopifyMap[r].Year1.variantId,
                            productType: E.ProductType.RING,
                            params: {
                                noteAttributes: G
                            }
                        }), O.push({
                            shopifyVariantId: w,
                            productType: E.ProductType.RING_PRO,
                            params: {
                                productType: "ring_pro",
                                noteAttributes: [...M, ...D.length > 0 ? D : []]
                            }
                        }), O
                    }({
                        color: ea,
                        size: en,
                        store: ey,
                        chargerCaseColor: es,
                        engraving: em.enabled,
                        engravingMessage: em.message,
                        uhxCart: eS ? ? null,
                        afibCart: ex ? ? null,
                        cardioAdaptibilityCart: eC ? ? null,
                        cnoProCart: eI ? ? null,
                        clueCart: eb ? ? null,
                        respiratoryCart: eR ? ? null,
                        serverDiscount: O,
                        isCnOPlus: X,
                        tradeInDevice: eT.device,
                        tradeInSerialNumber: eT.serialNumber
                    });
                    await Y(e, !1)
                } catch (e) {
                    console.error(e)
                } finally {
                    ef(!1)
                }
            },
            tr = (0, i.useMemo)(() => ({
                color: ea,
                setColor: eo,
                size: en,
                setSize: el,
                chargerCaseColor: es,
                setChargerCaseColor: ed,
                defaultCurrency: x,
                currencySymbol: ek,
                uhx: ep,
                setUhx: ec,
                uhxCart: eS ? ? null,
                setUhxCart: eE,
                afibCart: ex ? ? null,
                setAfibCart: eN,
                cardioAdaptibilityCart: eC ? ? null,
                setCardioAdaptabilityCart: eA,
                cnoProCart: eI ? ? null,
                setCnoProCart: ew,
                clueCart: eb ? ? null,
                setClueCart: eG,
                respiratoryCart: eR ? ? null,
                setRespiratoryCart: eM,
                engraving: em.enabled,
                setEngraving: ev,
                engravingMessage: em.message,
                setEngravingMessage: e_,
                checkout: ti,
                isLoading: eg,
                store: ey,
                serverDiscount: O,
                basePrice: eV,
                price: eU,
                ultraHumanPrice: ez,
                effectivePrice: e3,
                chargerPrice: eB,
                shippingEstimate: e9,
                affiliateDetails: $,
                campaignActive: e6,
                affiliateDiscount: eX,
                referral: eH,
                showEngravingSection: e8,
                priceDrop: e5,
                effectiveDiscount: e2,
                sectionRefs: er,
                goToNextStep: te,
                notServicable: L,
                notServicableMessage: j,
                uhxFirstOnly: k,
                isOpenSizeDisabled: V,
                tradeInDevice: eT.device,
                setTradeInDevice: eD,
                tradeInSerialNumber: eT.serialNumber,
                setTradeInSerialNumber: eO,
                tradeInCredit: eL,
                tradeInMaxCredit: ej,
                hasUhx: eP
            }), [ea, en, es, x, ek, ep, eS, ex, eC, eI, eb, eR, em.enabled, em.message, eg, ey, O, eV, eU, ez, e3, eB, e9, $, e6, eX, eH, e8, e5, e2, er, L, j, k, V, eT.device, eT.serialNumber, eL, ej, eP]);
        return (0, t.jsx)(G.Provider, {
            value: tr,
            children: e
        })
    }], 87156)
}, 32811, e => {
    "use strict";
    var t = e.i(91398),
        i = e.i(91788),
        r = e.i(22367),
        a = e.i(60814),
        o = e.i(61102),
        n = e.i(1814),
        l = e.i(56375),
        s = e.i(87156),
        d = e.i(21666),
        p = e.i(2100),
        c = e.i(86774);
    let u = a.keyframes `
  from { opacity: 0; }
  to { opacity: 1; }
`,
        h = a.keyframes `
  from { transform: translateY(80px); }
  to { transform: translateY(0); }
`,
        g = a.default.div.withConfig({
            displayName: "TradeIn__ModalOverlay",
            componentId: "sc-495405b8-0"
        })
    `
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  -webkit-backdrop-filter: blur(75px);
  backdrop-filter: blur(75px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.2);
  padding: 0;
  transform: translateZ(0);
  animation: ${u} 0.3s ease-in-out;

  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    padding: 16px;
  }

  @media (min-width: ${({theme:e})=>e.globalV2.xl.maxWidth}) {
    padding: 24px;
  }
`, f = a.default.div.withConfig({
        displayName: "TradeIn__ModalContainer",
        componentId: "sc-495405b8-1"
    })
    `
  position: relative;
  width: 100%;
  min-height: calc(100svh - 64px);
  max-height: 100%;
  height: auto;
  background: rgba(238, 238, 238, 1);
  border: 1.5px solid rgba(255, 255, 255, 0.2);
  border-radius: 32px;
  overflow-y: auto;
  overscroll-behavior: contain;
  animation: ${h} 0.3s ease-in-out;
  ${p.hideScrollbar};

  @media (max-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    border-radius: 0;
    max-height: 100vh;
    min-height: 100vh;
  }

  .content-wrapper {
    @media (max-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
      padding-bottom: 96px;
    }
  }
`, y = a.default.button.withConfig({
        displayName: "TradeIn__CloseButton",
        componentId: "sc-495405b8-2"
    })
    `
  position: absolute;
  right: 16px;
  top: 16px;
  border: none;
  width: 32px;
  height: 32px;
  cursor: pointer;
  color: #666666;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1002;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  padding: 8px;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #000;
    transform: scale(1.05);
  }

  &:focus {
    outline: 2px solid #057ff0;
    outline-offset: 2px;
  }

  &.sm-hidden {
    display: none;
    @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
      display: flex;
    }
  }

  &.lg-hidden {
    display: flex;
    @media (max-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
      position: fixed;
      top: 16px;
      top: max(16px, env(safe-area-inset-top) + 16px);
      right: 16px;
    }
    @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
      display: none;
    }
  }
`, m = a.default.div.withConfig({
        displayName: "TradeIn__ModalContentWithPadding",
        componentId: "sc-495405b8-3"
    })
    `
  width: 100%;
  padding-left: 192px;
  padding-right: 192px;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: ${({theme:e})=>e.globalV2.xl.maxWidth}) {
    padding-left: 82px;
    padding-right: 82px;
  }

  @media (max-width: ${({theme:e})=>e.globalV2.md.minWidth}) {
    padding-left: 16px;
    padding-right: 16px;
  }

  @media (max-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    width: 100%;
    max-width: 1200px;
    padding-left: 16px;
    padding-right: 16px;
  }
`, S = a.default.div.withConfig({
        displayName: "TradeIn__Header",
        componentId: "sc-495405b8-4"
    })
    `
  position: sticky;
  top: 0;
  left: 0;
  display: block;
  background: rgba(250, 250, 250, 1);
  z-index: 200;
  padding-top: 64px;
  padding-bottom: 64px;

  @media (max-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    display: none;
  }
`, x = a.default.div.withConfig({
        displayName: "TradeIn__HeaderContent",
        componentId: "sc-495405b8-5"
    })
    `
  display: flex;
  align-items: center;
  gap: 20px;
`, C = a.default.div.withConfig({
        displayName: "TradeIn__HeaderImageWrapper",
        componentId: "sc-495405b8-6"
    })
    `
  width: 54px;
  height: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`, I = a.default.div.withConfig({
        displayName: "TradeIn__HeaderTextContent",
        componentId: "sc-495405b8-7"
    })
    `
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
`, b = a.default.b.withConfig({
        displayName: "TradeIn__HeaderTitle",
        componentId: "sc-495405b8-8"
    })
    `
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: -0.03em;
  color: #000000;
  margin: 0;
  display: block;
`, R = a.default.div.withConfig({
        displayName: "TradeIn__HeaderSubtitle",
        componentId: "sc-495405b8-9"
    })
    `
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: -0.28px;
  color: #000;
`, T = a.default.div.withConfig({
        displayName: "TradeIn__HeaderButtonWrapper",
        componentId: "sc-495405b8-10"
    })
    `
  flex-shrink: 0;
`, v = a.default.button.withConfig({
        displayName: "TradeIn__CTAButton",
        componentId: "sc-495405b8-11"
    })
    `
  background: #007ff5;
  color: white;
  border: none;
  border-radius: 16px;
  padding: 20px 32px;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: -0.2px;
  cursor: ${({disabled:e})=>e?"default":"pointer"};
  opacity: ${({disabled:e})=>e?.5:1};
  flex-shrink: 0;
  white-space: nowrap;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: ${({disabled:e})=>e?.5:.85};
  }

  &:focus {
    outline: 2px solid #057ff0;
    outline-offset: 2px;
  }

  @media (max-width: 768px) {
    border-radius: 12px;
    padding: 16px;
    font-size: 14px;
  }
`, _ = a.default.div.withConfig({
        displayName: "TradeIn__Footer",
        componentId: "sc-495405b8-12"
    })
    `
  display: none;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  -webkit-backdrop-filter: blur(50px);
  backdrop-filter: blur(50px);
  padding-top: 16px;
  padding-bottom: 24px;
  background: rgba(0, 0, 0, 0.07);
  box-shadow: rgb(255, 255, 255) 0px 1px 2px 0px inset;
  border-top: 1px solid rgba(219, 219, 219, 0.3);
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  z-index: 10;

  @media (max-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    display: block;
  }
`, E = a.default.div.withConfig({
        displayName: "TradeIn__FooterRow",
        componentId: "sc-495405b8-13"
    })
    `
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`, N = a.default.div.withConfig({
        displayName: "TradeIn__FooterDetails",
        componentId: "sc-495405b8-14"
    })
    `
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
`, A = a.default.div.withConfig({
        displayName: "TradeIn__FooterTitle",
        componentId: "sc-495405b8-15"
    })
    `
  font-weight: 500;
  font-size: 16px;
  color: #000;
  letter-spacing: -0.54px;
  line-height: 1.2;
`, w = a.default.div.withConfig({
        displayName: "TradeIn__FooterSubtitle",
        componentId: "sc-495405b8-16"
    })
    `
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: -0.28px;
  color: #000;
`, G = a.default.div.withConfig({
        displayName: "TradeIn__BodyContent",
        componentId: "sc-495405b8-17"
    })
    `
  display: flex;
  flex-direction: column;
  gap: 48px;
  align-items: center;
  padding-top: 80px;
  padding-bottom: 40px;

  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    padding-bottom: 80px;
  }
`, M = a.default.div.withConfig({
        displayName: "TradeIn__CenteredSection",
        componentId: "sc-495405b8-18"
    })
    `
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 4px;

  h3 {
    font-size: 20px;
    font-weight: 500;
    color: #000;
    letter-spacing: -0.8px;
    line-height: 110%;

    @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
      font-size: 28px;
      letter-spacing: -1.12px;
    }
  }

  p {
    font-size: 14px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.6);
    letter-spacing: -0.56px;
    line-height: 130%;

    @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
      font-size: 18px;
      letter-spacing: -0.72px;
    }
  }
`, D = a.default.div.withConfig({
        displayName: "TradeIn__UhxBonusBanner",
        componentId: "sc-495405b8-19"
    })
    `
  display: flex;
  align-items: flex-start;
  gap: 4px;
  padding: 12px 16px;
  background: rgba(0, 0, 0, 0.04);
  border-radius: 8px;
  margin-top: 16px;

  span {
    font-size: 14px;
    font-weight: 500;
    color: #000;
    letter-spacing: -0.56px;
    line-height: 1.3;
    text-align: left;
  }
`, O = a.default.div.withConfig({
        displayName: "TradeIn__DropdownGroup",
        componentId: "sc-495405b8-20"
    })
    `
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  max-width: 480px;
`, P = a.default.div.withConfig({
        displayName: "TradeIn__DropdownWrapper",
        componentId: "sc-495405b8-21"
    })
    `
  width: 100%;
  position: relative;
  z-index: 100;
`, L = a.default.div.withConfig({
        displayName: "TradeIn__DropdownTrigger",
        componentId: "sc-495405b8-22"
    })
    `
  width: 100%;
  min-height: 68px;
  padding: 16px 20px;
  border: 1.5px solid
    ${({isOpen:e})=>e?"rgba(0, 0, 0, 0.3)":"rgba(0, 0, 0, 0.1)"};
  border-radius: 12px;
  background: #f5f5f7;
  font-size: 14px;
  font-weight: 400;
  color: ${({hasValue:e})=>e?"#000":"rgba(0, 0, 0, 0.5)"};
  letter-spacing: -0.56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.2s ease;

  svg {
    flex-shrink: 0;
    transition: transform 0.2s ease;
    transform: ${({isOpen:e})=>e?"rotate(0deg)":"rotate(180deg)"};
  }

  .trigger-content {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .trigger-title {
    font-size: 14px;
    font-weight: 500;
    color: #000;
    letter-spacing: -0.56px;
    line-height: 1.2;
  }

  .trigger-value {
    font-size: 12px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.6);
    letter-spacing: -0.36px;
    line-height: 1;
  }
`, j = a.default.div.withConfig({
        displayName: "TradeIn__DropdownMenu",
        componentId: "sc-495405b8-23"
    })
    `
  position: absolute;
  top: 76px;
  left: 0;
  width: 100%;
  background: #eee;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  overflow: hidden;
  padding: 4px 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  animation: dropdownFadeIn 0.2s ease-out;

  @keyframes dropdownFadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`, k = a.default.div.withConfig({
        displayName: "TradeIn__DropdownOption",
        componentId: "sc-495405b8-24"
    })
    `
  padding: 16px 20px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 4px;
  transition: background 0.2s ease;

  .option-title {
    font-size: 14px;
    font-weight: 500;
    color: #000;
    letter-spacing: -0.56px;
    line-height: 1.2;
    text-decoration: underline transparent;
    text-underline-offset: 3px;
    text-decoration-thickness: 1.5px;
    transition: text-decoration-color 0.2s ease;
  }

  &:hover .option-title {
    text-decoration-color: currentColor;
  }

  .option-value {
    font-size: 12px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.6);
    letter-spacing: -0.36px;
    line-height: 1;
  }

  position: relative;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 20px;
    right: 20px;
    height: 1px;
    background: rgba(0, 0, 0, 0.1);
  }
`, V = a.default.input.withConfig({
        displayName: "TradeIn__SerialNumberInput",
        componentId: "sc-495405b8-25"
    })
    `
  width: 100%;
  min-height: 68px;
  padding: 16px 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  background: #f5f5f7;
  font-size: 14px;
  font-weight: 400;
  color: #000;
  letter-spacing: -0.56px;
  outline: none;
  transition: border-color 0.2s ease;

  &::placeholder {
    color: rgba(0, 0, 0, 0.5);
  }

  &:focus {
    border-color: rgba(0, 0, 0, 0.3);
  }
`, U = a.default.p.withConfig({
        displayName: "TradeIn__SerialNumberTip",
        componentId: "sc-495405b8-26"
    })
    `
  font-size: 13px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.5);
  letter-spacing: -0.36px;
  line-height: 1.4;
  margin: 0;
`, z = a.default.div.withConfig({
        displayName: "TradeIn__Divider",
        componentId: "sc-495405b8-27"
    })
    `
  width: 100%;
  height: 1px;
  background: rgba(0, 0, 0, 0.1);
  margin: 32px 0;
`, B = a.default.div.withConfig({
        displayName: "TradeIn__HeroImage",
        componentId: "sc-495405b8-28"
    })
    `
  width: 100%;
  max-width: 800px;
  border-radius: 20px;
  overflow: hidden;
  background: #1e1e1e;

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`, W = a.default.div.withConfig({
        displayName: "TradeIn__StepsSection",
        componentId: "sc-495405b8-29"
    })
    `
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  max-width: 800px;

  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    gap: 80px;
  }

  .step {
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: flex-start;
    text-align: left;

    .step-icon {
      width: 24px;
      height: 24px;
      margin-bottom: 4px;
    }

    h4 {
      font-size: 16px;
      font-weight: 500;
      letter-spacing: -0.72px;
      color: #000;
      line-height: 120%;

      @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
        font-size: 18px;
      }
    }

    p {
      font-size: 15px;
      font-weight: 400;
      line-height: 130%;
      letter-spacing: -0.72px;
      color: rgba(0, 0, 0, 0.6);

      @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
        font-size: 18px;
      }
    }
  }
`, Y = a.default.div.withConfig({
        displayName: "TradeIn__TermsSection",
        componentId: "sc-495405b8-30"
    })
    `
  width: 100%;
  max-width: 800px;
  text-align: left;
  padding-bottom: 32px;

  h4 {
    font-size: 14px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.7);
    letter-spacing: -0.42px;
    margin-bottom: 24px;
  }

  ol {
    padding-left: 21px;
    margin: 0;
  }

  li {
    font-size: 14px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.7);
    letter-spacing: -0.42px;
    line-height: 1.4;
  }
`, K = () => (0, t.jsxs)("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [(0, t.jsx)("circle", {
            cx: "9",
            cy: "21",
            r: "1"
        }), (0, t.jsx)("circle", {
            cx: "20",
            cy: "21",
            r: "1"
        }), (0, t.jsx)("path", {
            d: "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
        })]
    }), $ = () => (0, t.jsx)("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: (0, t.jsx)("polyline", {
            points: "20 6 9 17 4 12"
        })
    }), q = () => (0, t.jsxs)("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [(0, t.jsx)("polyline", {
            points: "23 4 23 10 17 10"
        }), (0, t.jsx)("polyline", {
            points: "1 20 1 14 7 14"
        }), (0, t.jsx)("path", {
            d: "M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"
        })]
    }), H = () => (0, t.jsx)("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        children: (0, t.jsx)("path", {
            d: "M18 6L6 18M6 6l12 12",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })
    }), F = Object.values(o.TradeInDevice), X = {
        [o.TradeInDevice.RING_AIR]: "Ultrahuman",
        [o.TradeInDevice.OURA_GEN_4]: "Oura",
        [o.TradeInDevice.SAMSUNG_GALAXY_RING]: "Samsung Galaxy Wearable",
        [o.TradeInDevice.RING_CONN]: "RingConn",
        [o.TradeInDevice.OURA_GEN_3]: "Oura"
    }, Z = ["Trade-in is available for select smart ring models only. Eligible models and trade-in values are listed during opt-in.", "The full purchase amount must be paid at checkout. Trade-in credit is issued as a refund after verification.", "The serial number provided must match a valid, previously purchased smart ring.", "If verification fails, our support team will reach out to help resolve the issue. Your purchase continues at the full price in the meantime.", "Trade-in cannot be combined with other offers, discounts, or promotions unless explicitly stated."];
    e.s(["TradeInModal", 0, ({
        onClose: e,
        contextSource: a = "ring"
    }) => {
        let p = (0, i.useContext)(l.RingSelectionContext),
            u = (0, i.useContext)(s.RingProSelectionContext),
            h = "ring_pro" === a ? "Ultrahuman Ring PRO" : "Ultrahuman Ring AIR",
            J = "ring_pro" === a ? "Ring PRO" : "Ring AIR",
            {
                tradeInDevice: Q,
                setTradeInDevice: ee,
                tradeInSerialNumber: et,
                setTradeInSerialNumber: ei,
                price: er,
                hasUhx: ea,
                defaultCurrency: eo,
                store: en,
                isLoading: el
            } = "ring_pro" === a ? u : p,
            [es, ed] = (0, i.useState)(Q),
            [ep, ec] = (0, i.useState)(et || ""),
            [eu, eh] = (0, i.useState)(!1),
            eg = (0, i.useRef)(null),
            ef = n.CurrencySymbol[eo.toLowerCase()],
            ey = en ? o.UHX_BONUS[en] ? ? 0 : 0,
            em = !!es,
            eS = ep.trim().length > 0,
            ex = es || Q && et,
            eC = em && eS,
            eI = es && en ? (0, o.getTradeInCredit)(es, en, ea) : 0,
            eb = er - eI;
        (0, i.useEffect)(() => {
            let t = t => {
                "Escape" === t.key && e()
            };
            return document.addEventListener("keydown", t), () => document.removeEventListener("keydown", t)
        }, [e]), (0, i.useEffect)(() => {
            let e = document.body.style.overflow;
            return document.body.style.overflow = "hidden", () => {
                document.body.style.overflow = e
            }
        }, []), (0, i.useEffect)(() => {
            let e = e => {
                eg.current && !eg.current.contains(e.target) && eh(!1)
            };
            return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e)
        }, []);
        let eR = e => {
                ed(e), ec(""), eh(!1)
            },
            eT = () => {
                eC && !el && (ee(es), ei(ep), e())
            },
            ev = em ? (0, t.jsxs)(t.Fragment, {
                children: [ef, (0, n.formatPriceWithComma)(eb), " after trade-in (", ef, (0, n.formatPriceWithComma)(er), " is due today)*"]
            }) : (0, t.jsxs)(t.Fragment, {
                children: [ef, (0, n.formatPriceWithComma)(er)]
            }),
            e_ = "Confirm trade-in",
            eE = [{
                icon: (0, t.jsx)(K, {}),
                title: "Step 1: Opt for trade-in",
                description: `Select your ring model and enter your serial number. You can find this in the ${es?X[es]:"your ring"} app under device or ring settings.`
            }, {
                icon: (0, t.jsx)($, {}),
                title: "Step 2: Complete your purchase",
                description: "Pay the full amount at checkout. Your trade-in credit will be processed after we verify your serial number."
            }, {
                icon: (0, t.jsx)(q, {}),
                title: "Step 3: Get your refund",
                description: "Once verified, the trade-in credit is refunded to your original payment source within 5-7 business days.",
                subnote: "Recycle your old ring responsibly. Dispose of it as e-waste through authorized recycling channels."
            }],
            eN = (0, t.jsx)(g, {
                role: "dialog",
                "aria-modal": "true",
                "aria-labelledby": "trade-in-modal-title",
                children: (0, t.jsxs)(f, {
                    children: [(0, t.jsx)(y, {
                        onClick: e,
                        className: "lg-hidden",
                        "aria-label": "Close modal",
                        children: (0, t.jsx)(H, {})
                    }), (0, t.jsxs)(S, {
                        children: [(0, t.jsx)(y, {
                            onClick: e,
                            className: "sm-hidden",
                            "aria-label": "Close modal",
                            children: (0, t.jsx)(H, {})
                        }), (0, t.jsx)(m, {
                            children: (0, t.jsxs)(x, {
                                children: [(0, t.jsx)(C, {
                                    children: (0, t.jsx)(d.CustomImage, {
                                        src: "web_v2/illustrations/air-side.png",
                                        alt: J,
                                        width: 108,
                                        height: 108,
                                        style: {
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "contain"
                                        }
                                    })
                                }), (0, t.jsxs)(I, {
                                    children: [(0, t.jsx)(b, {
                                        children: h
                                    }), (0, t.jsx)(R, {
                                        children: ev
                                    })]
                                }), (0, t.jsx)(T, {
                                    children: (0, t.jsx)(v, {
                                        disabled: !eC,
                                        onClick: eT,
                                        children: e_
                                    })
                                })]
                            })
                        })]
                    }), (0, t.jsx)(m, {
                        className: "content-wrapper",
                        children: (0, t.jsxs)(G, {
                            children: [(0, t.jsxs)(M, {
                                children: [(0, t.jsx)("h3", {
                                    id: "trade-in-modal-title",
                                    children: "Select your current ring"
                                }), (0, t.jsx)("p", {
                                    children: "Choose the ring you currently own to see your estimated trade-in value."
                                }), ey ? (0, t.jsxs)(D, {
                                    children: [(0, t.jsx)(c.UhxIcon, {
                                        style: {
                                            width: 12,
                                            height: 12,
                                            flexShrink: 0,
                                            marginTop: 3
                                        }
                                    }), (0, t.jsxs)("span", {
                                        children: ["Get ", ef, (0, n.formatPriceWithComma)(ey), " extra trade-in credit on the ring with UltrahumanX"]
                                    })]
                                }) : null]
                            }), (0, t.jsxs)(O, {
                                children: [(0, t.jsxs)(P, {
                                    ref: eg,
                                    children: [(0, t.jsxs)(L, {
                                        isOpen: eu,
                                        hasValue: !!es,
                                        onClick: () => eh(!eu),
                                        role: "button",
                                        tabIndex: 0,
                                        onKeyDown: e => {
                                            ("Enter" === e.key || " " === e.key) && (e.preventDefault(), eh(!eu))
                                        },
                                        "aria-expanded": eu,
                                        children: [es ? (0, t.jsxs)("div", {
                                            className: "trigger-content",
                                            children: [(0, t.jsx)("span", {
                                                className: "trigger-title",
                                                children: o.TRADE_IN_DEVICE_NAMES[es]
                                            }), (0, t.jsxs)("span", {
                                                className: "trigger-value",
                                                children: ["Trade-in value : ", ef, (0, n.formatPriceWithComma)(eI)]
                                            })]
                                        }) : "Select ring model", ex ? (0, t.jsx)("button", {
                                            onClick: e => {
                                                e.stopPropagation(), ed(null), ec(""), ee(null), ei("")
                                            },
                                            "aria-label": "Clear selection",
                                            style: {
                                                background: "none",
                                                border: "none",
                                                padding: 0,
                                                cursor: "pointer",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center"
                                            },
                                            children: (0, t.jsx)("svg", {
                                                width: "20",
                                                height: "20",
                                                viewBox: "0 0 20 20",
                                                fill: "none",
                                                style: {
                                                    transform: "none"
                                                },
                                                children: (0, t.jsx)("path", {
                                                    d: "M15 5L5 15M5 5l10 10",
                                                    stroke: "black",
                                                    strokeWidth: "1.5",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                })
                                            })
                                        }) : (0, t.jsx)("svg", {
                                            width: "20",
                                            height: "20",
                                            viewBox: "0 0 20 20",
                                            fill: "none",
                                            children: (0, t.jsx)("path", {
                                                d: "M5 12.5L10 7.5L15 12.5",
                                                stroke: "black",
                                                strokeWidth: "1.5",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round"
                                            })
                                        })]
                                    }), eu && (0, t.jsx)(j, {
                                        children: F.map(e => {
                                            let i = en ? (0, o.getTradeInCredit)(e, en, ea) : 0;
                                            return (0, t.jsxs)(k, {
                                                onClick: () => eR(e),
                                                role: "option",
                                                tabIndex: 0,
                                                onKeyDown: t => {
                                                    ("Enter" === t.key || " " === t.key) && (t.preventDefault(), eR(e))
                                                },
                                                children: [(0, t.jsx)("span", {
                                                    className: "option-title",
                                                    children: o.TRADE_IN_DEVICE_NAMES[e]
                                                }), (0, t.jsxs)("span", {
                                                    className: "option-value",
                                                    children: ["Trade-in value : ", ef, (0, n.formatPriceWithComma)(i)]
                                                })]
                                            }, e)
                                        })
                                    })]
                                }), es && (0, t.jsxs)(t.Fragment, {
                                    children: [(0, t.jsx)(V, {
                                        type: "text",
                                        placeholder: "Enter ring serial number",
                                        value: ep,
                                        onChange: e => {
                                            ec(e.target.value)
                                        }
                                    }), (0, t.jsxs)(U, {
                                        children: ["Tip: You can find this in the", " ", X[es], " app under device or ring settings."]
                                    })]
                                })]
                            }), (0, t.jsx)(z, {}), (0, t.jsxs)(M, {
                                children: [(0, t.jsx)("h3", {
                                    children: "How trade-in works"
                                }), (0, t.jsx)("p", {
                                    children: "ring_pro" === a ? "Upgrade to Ring PRO in three simple steps" : "Upgrade to Ring AIR in three simple steps"
                                })]
                            }), (0, t.jsx)(B, {
                                children: (0, t.jsx)(d.CustomImage, {
                                    src: "web_v2/cart-info-modals/trade-in.png",
                                    alt: J,
                                    width: 700,
                                    height: 400,
                                    style: {
                                        width: "100%",
                                        height: "auto"
                                    }
                                })
                            }), (0, t.jsx)(W, {
                                children: eE.map((e, i) => (0, t.jsxs)("div", {
                                    className: "step",
                                    children: [(0, t.jsx)("div", {
                                        className: "step-icon",
                                        children: e.icon
                                    }), (0, t.jsx)("h4", {
                                        children: e.title
                                    }), (0, t.jsx)("p", {
                                        children: e.description
                                    }), e.subnote && (0, t.jsx)("p", {
                                        style: {
                                            fontSize: "13px",
                                            color: "rgba(0, 0, 0, 0.45)",
                                            marginTop: "4px"
                                        },
                                        children: e.subnote
                                    })]
                                }, i))
                            }), (0, t.jsx)(z, {}), (0, t.jsxs)(Y, {
                                children: [(0, t.jsx)("h4", {
                                    children: "* Terms & Conditions"
                                }), (0, t.jsx)("ol", {
                                    children: Z.map((e, i) => (0, t.jsx)("li", {
                                        children: e
                                    }, i))
                                })]
                            })]
                        })
                    }), (0, t.jsx)(_, {
                        children: (0, t.jsx)(m, {
                            children: (0, t.jsxs)(E, {
                                children: [(0, t.jsxs)(N, {
                                    children: [(0, t.jsx)(A, {
                                        children: h
                                    }), (0, t.jsx)(w, {
                                        children: ev
                                    })]
                                }), (0, t.jsx)(v, {
                                    disabled: !eC,
                                    onClick: eT,
                                    children: e_
                                })]
                            })
                        })
                    })]
                })
            });
        return "u" > typeof document ? r.default.createPortal(eN, document.body) : null
    }])
}]);