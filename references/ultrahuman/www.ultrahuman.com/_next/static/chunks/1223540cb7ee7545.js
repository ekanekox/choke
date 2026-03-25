(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 1560, i => {
    "use strict";
    var e = i.i(91398);
    i.s(["CircledArrow", 0, () => (0, e.jsxs)("svg", {
        viewBox: "0 0 13 13",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [(0, e.jsx)("path", {
            d: "M5.99766 12.6703C9.30976 12.6703 12 9.98473 12 6.67264C12 3.36055 9.30976 0.670349 5.99766 0.670349C2.6856 0.670349 0 3.36055 0 6.67264C0 9.98473 2.6856 12.6703 5.99766 12.6703ZM5.99766 11.8135C3.15546 11.8135 0.856814 9.51486 0.856814 6.67264C0.856814 3.83042 3.15546 1.53177 5.99766 1.53177C8.83989 1.53177 11.1386 3.83042 11.1386 6.67264C11.1386 9.51486 8.83989 11.8135 5.99766 11.8135Z",
            fill: "black"
        }), (0, e.jsx)("path", {
            d: "M8.98676 6.66832C8.98676 6.56238 8.94992 6.47487 8.8486 6.3735L6.93228 4.40194C6.85393 4.32362 6.77563 4.28217 6.66511 4.28217C6.45779 4.28217 6.30576 4.4434 6.30576 4.65069C6.30576 4.75203 6.34723 4.85798 6.43015 4.92708L7.45739 5.90826L7.8582 6.2952L6.98757 6.26298H3.43131C3.21481 6.26298 3.03516 6.44723 3.03516 6.66832C3.03516 6.88483 3.21481 7.06913 3.43131 7.06913H6.98757L7.86277 7.04149L7.45739 7.42843L6.43015 8.40958C6.34723 8.47869 6.30576 8.58925 6.30576 8.69062C6.30576 8.89789 6.45779 9.0545 6.66511 9.0545C6.77563 9.0545 6.85393 9.01304 6.93228 8.93473L8.8486 6.95856C8.94992 6.85719 8.98676 6.76969 8.98676 6.66832Z",
            fill: "black"
        })]
    })])
}, 75646, i => {
    "use strict";
    var e = i.i(91398);
    i.i(64157);
    var t = i.i(71179),
        n = i.i(53147),
        r = i.i(91788),
        o = i.i(90380),
        s = i.i(1814),
        l = i.i(57232),
        a = i.i(79546),
        c = i.i(21666),
        d = i.i(99200),
        h = i.i(78198),
        C = i.i(228);
    let p = () => {
        let {
            t: i
        } = (0, t.useTranslation)("ring"), {
            store: p,
            currency: x
        } = (0, r.useContext)(a.CartContext), f = s.CurrencySymbol[x ? ? C.Currency.usd], {
            width: g
        } = (0, l.useWindowSize)();
        return (0, e.jsxs)(d.InfoModalContainer, {
            children: [(0, e.jsxs)(d.InfoModalTitle, {
                children: [(0, e.jsx)("h3", {
                    children: i("ring.infoModals.afib.title")
                }), (0, e.jsxs)("p", {
                    children: [i("ring.infoModals.afib.subtitle.a"), (0, e.jsxs)(e.Fragment, {
                        children: [f, (0, s.formatPriceWithComma)(o.AfibShopifyMap[p].Year1.price)]
                    }), i("ring.infoModals.afib.subtitle.b")]
                }), (0, e.jsx)(d.ImageContainer, {
                    className: "afib-container",
                    children: (0, e.jsx)(c.CustomImage, {
                        src: `web_v2/cart-info-modals/afib_detection${g>1024?"_desktop":""}.png`,
                        width: 1388,
                        height: 1133,
                        alt: "Afib detection",
                        priority: !0
                    })
                })]
            }), (0, e.jsxs)(d.InfoModalDescription, {
                children: [(0, e.jsx)("p", {
                    children: i("ring.infoModals.powerplugs")
                }), (0, e.jsxs)("p", {
                    children: [(0, e.jsx)("strong", {
                        children: i("ring.infoModals.afib.descriptionStrong")
                    }), " ", i("ring.infoModals.afib.description")]
                })]
            }), (0, e.jsxs)(d.InfoModalDescription, {
                children: [(0, e.jsx)("h3", {
                    children: i("ring.infoModals.afib.text.a.title")
                }), (0, e.jsx)("p", {
                    children: i("ring.infoModals.afib.text.a.p1")
                }), (0, e.jsx)("p", {
                    children: i("ring.infoModals.afib.text.a.p2")
                })]
            }), (0, e.jsxs)(d.InfoModalDescription, {
                children: [(0, e.jsx)("h3", {
                    children: i("ring.infoModals.afib.text.b.title")
                }), (0, e.jsx)("p", {
                    children: i("ring.infoModals.afib.text.b.p1")
                })]
            }), (0, e.jsx)(d.ImageContainer, {
                className: "screen",
                children: (0, e.jsx)(c.CustomImage, {
                    src: "web_v2/cart-info-modals/afib_complications.png",
                    width: 1388,
                    height: 798,
                    alt: "Afib complications",
                    priority: !0
                })
            }), (0, e.jsx)(n.default, {
                rel: "noopener noreferrer",
                href: (0, h.getAssetUrl)("/web_v2/downloads/afib-report-v2.pdf"),
                title: "AFIB Report",
                target: "_blank",
                children: (0, e.jsx)(d.Button, {
                    children: (0, e.jsx)("span", {
                        children: i("ring.infoModals.afib.button")
                    })
                })
            })]
        })
    };
    i.s(["AfibInfoCartModal", 0, p, "AfibPricingModal", 0, () => (0, e.jsx)(d.PricingModal, {
        children: (0, e.jsx)(p, {})
    })])
}, 62360, 4336, i => {
    "use strict";
    var e = i.i(60814);
    e.default.h1.withConfig({
        displayName: "styleConstants__H1",
        componentId: "sc-c82ffe17-0"
    })
    `
  font-size: 4rem;
  font-weight: 500;
`;
    let t = e.default.h2.withConfig({
        displayName: "styleConstants__H2",
        componentId: "sc-c82ffe17-1"
    })
    `
  font-size: 3.2rem;
  font-weight: 500;

  @media (min-width: ${({theme:i})=>i.global.tablet.maxWidth}) {
    font-size: 4rem;
  }
`;
    e.default.h1.withConfig({
        displayName: "styleConstants__titleH",
        componentId: "sc-c82ffe17-2"
    })
    `
  font-size: 3.2rem;
  font-weight: 500;

  @media (min-width: ${({theme:i})=>i.global.tablet.maxWidth}) {
    font-size: 4rem;
  }
`;
    let n = e.default.h3.withConfig({
        displayName: "styleConstants__H3",
        componentId: "sc-c82ffe17-3"
    })
    `
  font-size: 3.2rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  margin-bottom: 2.4rem;

  @media (min-width: ${({theme:i})=>i.global.tablet.maxWidth}) {
    font-size: 3.8rem;
  }

  @media (min-width: ${({theme:i})=>i.global.laptop.maxWidth}) {
    font-size: 4.8rem;
  }
`, r = e.css `
  margin: 4.8rem 0;
  @media (min-width: ${({theme:i})=>i.global.tablet.maxWidth}) {
    margin: 9.6rem 0;
  }
`, o = e.keyframes `
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
    e.default.div.withConfig({
        displayName: "styleConstants__FadeInText",
        componentId: "sc-c82ffe17-4"
    })
    `
  animation: ${o} 1s ease-out forwards;
`, i.s(["H2", 0, t, "H3", 0, n, "fadeIn", 0, o, "sectionMargin", 0, r], 62360);
    var s = i.i(91398);
    i.i(64157);
    var l = i.i(71179),
        a = i.i(91788),
        c = i.i(228),
        d = i.i(40647),
        h = i.i(1814),
        C = i.i(79546),
        p = i.i(21666),
        x = i.i(99200);
    let f = () => {
        let {
            t: i
        } = (0, l.useTranslation)("ring"), {
            store: e,
            currency: t
        } = (0, a.useContext)(C.CartContext), n = h.CurrencySymbol[t ? ? c.Currency.usd];
        return (0, s.jsxs)(x.InfoModalContainer, {
            children: [(0, s.jsxs)(x.InfoModalTitle, {
                children: [(0, s.jsx)("h3", {
                    children: i("ring.infoModals.clue.title")
                }), (0, s.jsxs)("p", {
                    children: [i("ring.infoModals.clue.subtitle.a"), (0, s.jsxs)(s.Fragment, {
                        children: [n, (0, h.formatPriceWithComma)(d.ClueShopifyMap[e].Year1.discountedPrice)]
                    }), i("ring.infoModals.clue.subtitle.b"), (0, s.jsxs)(s.Fragment, {
                        children: [n, (0, h.formatPriceWithComma)(d.ClueShopifyMap[e].Year1.price)]
                    }), i("ring.infoModals.clue.subtitle.c")]
                }), (0, s.jsx)(x.ImageContainer, {
                    className: "clue-container",
                    children: (0, s.jsx)(p.CustomImage, {
                        src: "web_v2/cart-info-modals/clue-1-square.png",
                        width: 1388,
                        height: 1133,
                        alt: "Clue",
                        priority: !0
                    })
                })]
            }), (0, s.jsx)(x.InfoModalDescription, {
                children: (0, s.jsx)("p", {
                    children: i("ring.infoModals.clue.description")
                })
            }), (0, s.jsxs)(x.InfoModalDescription, {
                children: [(0, s.jsx)("h3", {
                    children: i("ring.infoModals.clue.text.a.title")
                }), (0, s.jsxs)("ul", {
                    children: [(0, s.jsx)("li", {
                        children: (0, s.jsx)("p", {
                            children: i("ring.infoModals.clue.text.a.li1")
                        })
                    }), (0, s.jsx)("li", {
                        children: (0, s.jsx)("p", {
                            children: i("ring.infoModals.clue.text.a.li2")
                        })
                    }), (0, s.jsx)("li", {
                        children: (0, s.jsx)("p", {
                            children: i("ring.infoModals.clue.text.a.li3")
                        })
                    })]
                })]
            }), (0, s.jsxs)(x.InfoModalDescription, {
                children: [(0, s.jsx)("h3", {
                    children: i("ring.infoModals.clue.text.b.title")
                }), (0, s.jsxs)("ul", {
                    children: [(0, s.jsx)("li", {
                        children: (0, s.jsx)("p", {
                            children: i("ring.infoModals.clue.text.b.li1")
                        })
                    }), (0, s.jsx)("li", {
                        children: (0, s.jsx)("p", {
                            children: i("ring.infoModals.clue.text.b.li2")
                        })
                    }), (0, s.jsx)("li", {
                        children: (0, s.jsx)("p", {
                            children: i("ring.infoModals.clue.text.b.li3")
                        })
                    })]
                })]
            }), (0, s.jsx)(x.ImageContainer, {
                className: "screen",
                children: (0, s.jsx)(p.CustomImage, {
                    src: "web_v2/cart-info-modals/clue-2.png",
                    width: 1388,
                    height: 798,
                    alt: "Afib complications",
                    priority: !0
                })
            })]
        })
    };
    i.s(["CluePricingModal", 0, () => (0, s.jsx)(x.PricingModal, {
        children: (0, s.jsx)(f, {})
    })], 4336)
}, 62977, i => {
    "use strict";
    var e = i.i(91398);
    i.i(64157);
    var t = i.i(71179),
        n = i.i(3828),
        r = i.i(91788),
        o = i.i(228),
        s = i.i(1814),
        l = i.i(79546),
        a = i.i(21666),
        c = i.i(25635),
        d = i.i(99200);
    let h = () => {
        let {
            t: i
        } = (0, t.useTranslation)("ring"), h = (0, r.useContext)(l.CartContext), C = (0, n.useRouter)(), {
            store: p,
            currency: x
        } = h, f = "respiratory" === C.query.flow, g = s.CurrencySymbol[x ? ? o.Currency.usd];
        return (0, e.jsxs)(d.InfoModalContainer, {
            children: [(0, e.jsxs)(d.InfoModalTitle, {
                children: [(0, e.jsx)("h3", {
                    children: i("ring.infoModals.respiratory.title")
                }), (0, e.jsx)("p", {
                    children: f ? (0, e.jsxs)(e.Fragment, {
                        children: [i("ring.infoModals.respiratory.subtitle.a"), g, (0, s.formatPriceWithComma)(c.RespiratoryShopifyMap[p].Year1.discountedPrice), i("ring.infoModals.respiratory.subtitle.b"), g, (0, s.formatPriceWithComma)(c.RespiratoryShopifyMap[p].Year1.price), i("ring.infoModals.respiratory.subtitle.c")]
                    }) : (0, e.jsxs)(e.Fragment, {
                        children: [i("ring.infoModals.respiratory.subtitle.price_only.a"), g, (0, s.formatPriceWithComma)(c.RespiratoryShopifyMap[p].Year1.price), i("ring.infoModals.respiratory.subtitle.price_only.b")]
                    })
                }), (0, e.jsx)(d.ImageContainer, {
                    className: "respiratory-container",
                    children: (0, e.jsx)(a.CustomImage, {
                        src: "web_v2/cart-info-modals/respiratory-mockup-1.png",
                        width: 1388,
                        height: 1133,
                        alt: "respiratory",
                        priority: !0
                    })
                })]
            }), (0, e.jsx)(d.InfoModalDescription, {
                children: (0, e.jsx)("p", {
                    children: i("ring.infoModals.respiratory.description")
                })
            }), (0, e.jsxs)(d.InfoModalDescription, {
                children: [(0, e.jsx)("h3", {
                    children: i("ring.infoModals.respiratory.text.a.title")
                }), (0, e.jsxs)("ul", {
                    children: [(0, e.jsx)("li", {
                        children: (0, e.jsx)("p", {
                            children: i("ring.infoModals.respiratory.text.a.li1")
                        })
                    }), (0, e.jsx)("li", {
                        children: (0, e.jsx)("p", {
                            children: i("ring.infoModals.respiratory.text.a.li2")
                        })
                    }), (0, e.jsx)("li", {
                        children: (0, e.jsx)("p", {
                            children: i("ring.infoModals.respiratory.text.a.li3")
                        })
                    })]
                })]
            }), (0, e.jsxs)(d.InfoModalDescription, {
                children: [(0, e.jsx)("h3", {
                    children: i("ring.infoModals.respiratory.text.b.title")
                }), (0, e.jsxs)("ul", {
                    children: [(0, e.jsx)("li", {
                        children: (0, e.jsx)("p", {
                            children: i("ring.infoModals.respiratory.text.b.li1")
                        })
                    }), (0, e.jsx)("li", {
                        children: (0, e.jsx)("p", {
                            children: i("ring.infoModals.respiratory.text.b.li2")
                        })
                    }), (0, e.jsx)("li", {
                        children: (0, e.jsx)("p", {
                            children: i("ring.infoModals.respiratory.text.b.li3")
                        })
                    })]
                })]
            })]
        })
    };
    i.s(["RespiratoryCartInfoModal", 0, h, "RespiratoryPricingModal", 0, () => (0, e.jsx)(d.PricingModal, {
        children: (0, e.jsx)(h, {})
    })])
}, 79446, i => {
    "use strict";
    var e = i.i(91398);
    i.i(64157);
    var t = i.i(71179),
        n = i.i(53147),
        r = i.i(91788),
        o = i.i(37515),
        s = i.i(1814),
        l = i.i(57232),
        a = i.i(79546),
        c = i.i(21666),
        d = i.i(99200),
        h = i.i(78198),
        C = i.i(49767),
        p = i.i(228);
    let x = () => {
        let {
            t: i
        } = (0, t.useTranslation)("ring"), {
            store: x,
            currency: f
        } = (0, r.useContext)(a.CartContext), g = s.CurrencySymbol[f ? ? p.Currency.usd], {
            width: u
        } = (0, l.useWindowSize)();
        return (0, e.jsxs)(d.InfoModalContainer, {
            children: [(0, e.jsxs)(d.InfoModalTitle, {
                children: [(0, e.jsx)("h3", {
                    children: i("ring.infoModals.cardio.title")
                }), (0, e.jsxs)("p", {
                    children: [(0, e.jsxs)("span", {
                        children: [i("ring.infoModals.cardio.subtitle.a"), (0, e.jsxs)(e.Fragment, {
                            children: [g, (0, s.formatPriceWithComma)(o.CardioAdaptibilityShopifyMap[x].Year2.price / 2)]
                        }), i("ring.infoModals.cardio.subtitle.b")]
                    }), (0, e.jsx)("span", {
                        children: (0, e.jsx)(C.FSAHSAComponent, {})
                    })]
                }), (0, e.jsx)(d.ImageContainer, {
                    className: "cardio-container",
                    children: (0, e.jsx)(c.CustomImage, {
                        src: `web_v2/cart-info-modals/cardio_adaptability${u>1024?"_desktop":""}.png`,
                        width: 1388,
                        height: 1133,
                        alt: "Cardio adaptability",
                        priority: !0
                    })
                })]
            }), (0, e.jsxs)(d.InfoModalDescription, {
                children: [(0, e.jsx)("p", {
                    children: i("ring.infoModals.powerplugs")
                }), (0, e.jsxs)("p", {
                    children: [(0, e.jsx)("strong", {
                        children: i("ring.infoModals.cardio.descriptionStrong")
                    }), " ", i("ring.infoModals.cardio.description")]
                })]
            }), (0, e.jsxs)(d.InfoModalDescription, {
                children: [(0, e.jsx)("h3", {
                    children: i("ring.infoModals.cardio.text.a.title")
                }), (0, e.jsx)("p", {
                    children: i("ring.infoModals.cardio.text.a.p1")
                }), (0, e.jsx)("p", {
                    children: i("ring.infoModals.cardio.text.a.p2")
                })]
            }), (0, e.jsxs)(d.InfoModalDescription, {
                children: [(0, e.jsx)("h3", {
                    children: i("ring.infoModals.cardio.text.b.title")
                }), (0, e.jsx)("p", {
                    children: i("ring.infoModals.cardio.text.b.p1")
                })]
            }), (0, e.jsx)(d.ImageContainer, {
                className: "screen",
                children: (0, e.jsx)(c.CustomImage, {
                    src: "web_v2/cart-info-modals/cardio_complications.png",
                    width: 1388,
                    height: 875,
                    alt: "Cardio complications",
                    priority: !0
                })
            }), (0, e.jsx)(n.default, {
                rel: "noopener noreferrer",
                href: (0, h.getAssetUrl)("/web_v2/downloads/cardio-report.pdf"),
                target: "_blank",
                children: (0, e.jsx)(d.Button, {
                    children: (0, e.jsx)("span", {
                        children: i("ring.infoModals.cardio.button")
                    })
                })
            })]
        })
    };
    i.s(["CardioAdaptabilityCartInfoModal", 0, x, "CardioAdaptabilityPricingModal", 0, () => (0, e.jsx)(d.PricingModal, {
        children: (0, e.jsx)(x, {})
    })])
}, 13069, i => {
    "use strict";
    var e = i.i(91398),
        t = i.i(91788),
        n = i.i(60814),
        r = i.i(74975),
        o = i.i(1814),
        s = i.i(228),
        l = i.i(79546),
        a = i.i(21666),
        c = i.i(99200),
        d = i.i(78198),
        h = i.i(53147),
        C = i.i(49767),
        p = i.i(27260);
    let x = n.default.div.withConfig({
        displayName: "CnoPro__CnoProInfoDescription",
        componentId: "sc-6739623e-0"
    })
    `
  margin-bottom: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  .benefit {
    display: flex;
    flex-direction: column;
    gap: 4px;

    h3 {
      font-size: 16px;
      font-weight: 500;
      letter-spacing: -0.84px;
    }

    & .description {
      font-size: 15px;
      font-weight: 400;
      line-height: 20px; /* 133.333% */
      letter-spacing: -0.6px;
      color: rgba(0, 0, 0, 0.6);
    }

    .disclaimer {
      color: rgba(0, 0, 0, 0.7);
      font-size: 15px;
      font-weight: 500;
      line-height: 20px; /* 133.333% */
      letter-spacing: -0.6px;
    }
  }
`, f = () => {
        let i = (0, t.useContext)(l.CartContext),
            {
                getValue: n
            } = (0, p.default)(),
            {
                store: f,
                currency: g
            } = i,
            u = o.CurrencySymbol[g ? ? s.Currency.usd],
            m = n([{
                title: "Ovulation Confirmation",
                description: "Over 90% accuracy using your nightly skin temperature to confirm when ovulation occurs."
            }, {
                title: "Anovulation Cycle Detection",
                description: "Know when ovulation didn't happen, providing crucial insights for fertility health."
            }, {
                title: "Supports Every Cycle Type",
                description: "From clockwork to unpredictable cycles, get accurate insights regardless of your cycle pattern."
            }, {
                title: "Proprietary Cycle Flags™",
                description: "Unique pattern detection revealing hidden clues about your fertility health, such as: Early Ovulation, Late Ovulation, Short Luteal Phase™ and more."
            }, {
                title: "Symptom Tracking via Tags",
                description: "Connect the dots between how you feel and your cycle with comprehensive symptom tracking."
            }, {
                title: "Predictions for Your Next 12 Cycles",
                description: "Plan ahead with accurate predictions for your upcoming cycles based on your historical data."
            }, {
                title: "Cycle Reports",
                description: "Brings together your most important cycle health metrics into one clear, longitudinal view."
            }, {
                title: "Global Medical Standards",
                description: "CE & UKCA certified as a Class IIa medical device in EU & UK. MDSAP certified, US FDA registered, approved for Canada & Australia."
            }, {
                title: "HSA/FSA Eligible in USA",
                description: "Save money with your pre-tax health savings account or flexible spending account."
            }], [{
                title: "Ovulation Phase Estimation",
                description: "By observing trends in temperature and other biomarker shifts, it captures subtle signals that help you understand when your ovulation phase may typically occur."
            }, {
                title: "Cycles Without a Clear Ovulation Pattern",
                description: "Brings attention to cycles where an ovulation pattern isn't clearly observed, offering supportive insights for overall reproductive awareness."
            }, {
                title: "Cycle Flags",
                description: "Highlights unique cycle-related patterns—such as Early Ovulation Pattern, Late Ovulation Pattern, Short Luteal Phase and more."
            }, {
                title: "Symptom Tracking via Tags",
                description: "Connect the dots between how you feel and your cycle with comprehensive symptom tracking."
            }, {
                title: "Estimates for Your Next 12 Cycles",
                description: "Plan ahead with estimations for your upcoming cycles based on your historical data."
            }, {
                title: "Cycle Reports",
                description: "Brings together your most important cycle health metrics into one clear, longitudinal view."
            }]),
            y = n("Cycle & Ovulation Pro", "Cycle & Ovulation Plus"),
            j = n("CNO Pro", "CNO Plus"),
            w = n("World's most accurate cycle and ovulation tracker, built into your Ultrahuman Ring. Powered by 15 years of OvuSense™ research and trained on 260,000+ real cycles, it predicts your fertile window, confirms ovulation with over 90% accuracy, detects when it doesn't happen, and uncovers hidden patterns and more.", "Built on insights from established cycle-pattern science, it offers consistent cycle estimates and highlights ovulation-related patterns—providing an advanced, wellness-focused way to explore your cycle phases with your Ultrahuman Ring."),
            b = Math.floor(r.CnoProShopifyMap[f].Year2.price / 2 * 100) / 100;
        return (0, e.jsxs)(c.InfoModalContainer, {
            children: [(0, e.jsxs)(c.InfoModalTitle, {
                children: [(0, e.jsx)("h3", {
                    children: y
                }), (0, e.jsxs)("p", {
                    children: [(0, e.jsxs)("span", {
                        children: ["Starting at", " ", (0, e.jsxs)(e.Fragment, {
                            children: [u, (0, o.formatPriceWithComma)(b)]
                        }), " ", "/year"]
                    }), (0, e.jsx)("span", {
                        children: (0, e.jsx)(C.FSAHSAComponent, {})
                    })]
                }), (0, e.jsx)(c.ImageContainer, {
                    className: "cno-pro-image-container",
                    children: (0, e.jsx)(a.CustomImage, {
                        src: n("web_v2/cart-info-modals/cno_pro_modal_hero.png", "web_v2/womens-health/plus/buy/cno-plus_modal.png"),
                        width: 1376,
                        height: 808,
                        alt: j
                    })
                })]
            }), (0, e.jsx)(c.InfoModalDescription, {
                children: (0, e.jsx)("p", {
                    children: w
                })
            }), (0, e.jsx)(x, {
                children: m.map((i, t) => (0, e.jsxs)("div", {
                    className: "benefit",
                    children: [(0, e.jsx)("h3", {
                        children: i.title
                    }), (0, e.jsx)("p", {
                        className: "description",
                        children: i.description
                    })]
                }, t))
            }), (0, e.jsxs)(c.InfoModalDescription, {
                children: [(0, e.jsx)("h3", {
                    children: "Cycle Reports: Your Cycle Health, over time"
                }), (0, e.jsx)("p", {
                    children: "Track changes in cycle length, ovulation timing, luteal phase health, biomarkers, and symptoms over time. See recurring patterns, identify potential concerns, and share a complete picture of your cycle health with your doctor. These insights go beyond daily tracking, helping you understand your body's trends and what they mean for your goals."
                }), (0, e.jsx)(c.ImageContainer, {
                    className: "cno-pro-image-container",
                    children: (0, e.jsx)(a.CustomImage, {
                        src: "web_v2/cart-info-modals/cno_pro_modal_report.png",
                        width: 1376,
                        height: 808,
                        alt: j
                    })
                }), (0, e.jsx)(h.default, {
                    rel: "noopener noreferrer",
                    href: (0, d.getAssetUrl)(n("/web_v2/womens-health/documents/C&O_Pro_Sample%20Report.pdf", "/web_v2/womens-health/plus/documents/C&O_Plus_Sample_Report.pdf")),
                    target: "_blank",
                    children: (0, e.jsx)(c.Button, {
                        children: (0, e.jsx)("span", {
                            children: "View sample report"
                        })
                    })
                })]
            })]
        })
    };
    i.s(["CnoProCartInfoModal", 0, f, "CnoProPricingModal", 0, () => (0, e.jsx)(c.PricingModal, {
        children: (0, e.jsx)(f, {})
    })])
}, 88061, i => {
    "use strict";
    var e = i.i(91398);
    i.s(["ShippingBox", 0, i => (0, e.jsxs)("svg", {
        className: i.className,
        style: i.style,
        focusable: "false",
        width: "21",
        height: "13",
        viewBox: "0 0 21 13",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-hidden": "true",
        children: [(0, e.jsxs)("g", {
            "clip-path": "url(#clip0_2765_836)",
            children: [(0, e.jsx)("path", {
                d: "M13.252 4.73818L7.64336 2.89595C7.58196 2.87548 7.54102 2.91642 7.54102 2.97782V10.6129C7.54102 10.6538 7.56149 10.6743 7.60243 10.6947L13.211 12.537C13.252 12.5574 13.3134 12.5165 13.3134 12.4551V4.82006C13.2929 4.77912 13.2724 4.75865 13.252 4.73818Z",
                fill: i.fill ? ? "#202020"
            }), (0, e.jsx)("path", {
                d: "M18.7584 2.17953L13.7639 0.541992C13.7434 0.541992 13.7229 0.541992 13.7229 0.541992L8.7284 2.17953C8.64652 2.2 8.64652 2.30235 8.7284 2.32282L13.7229 3.96036C13.7434 3.96036 13.7639 3.96036 13.7639 3.96036L18.7584 2.32282C18.8198 2.32282 18.8198 2.22047 18.7584 2.17953Z",
                fill: i.fill ? ? "#202020"
            }), (0, e.jsx)("path", {
                d: "M19.8438 2.89595L14.2352 4.73818C14.1943 4.75865 14.1738 4.77912 14.1738 4.82006V12.4551C14.1738 12.5165 14.2352 12.537 14.2761 12.537L19.8847 10.6947C19.9256 10.6743 19.9461 10.6538 19.9461 10.6129V2.97782C19.9461 2.91642 19.8847 2.87548 19.8438 2.89595Z",
                fill: i.fill ? ? "#202020"
            }), (0, e.jsx)("path", {
                d: "M5.10558 2.87598H1.07314C0.7661 2.87598 0.5 3.12162 0.5 3.44912C0.5 3.75616 0.745631 4.02226 1.07314 4.02226H5.10558C5.41262 4.02226 5.67872 3.77663 5.67872 3.44912C5.65825 3.14209 5.41262 2.87598 5.10558 2.87598Z",
                fill: i.fill ? ? "#202020"
            }), (0, e.jsx)("path", {
                d: "M5.10558 6.04785H1.07314C0.7661 6.04785 0.5 6.29348 0.5 6.62099C0.5 6.92803 0.745631 7.19413 1.07314 7.19413H5.10558C5.41262 7.19413 5.67872 6.9485 5.67872 6.62099C5.65825 6.31395 5.41262 6.04785 5.10558 6.04785Z",
                fill: i.fill ? ? "#202020"
            }), (0, e.jsx)("path", {
                d: "M5.10558 9.24072H1.07314C0.7661 9.24072 0.5 9.48635 0.5 9.81386C0.5 10.1414 0.745631 10.387 1.07314 10.387H5.10558C5.41262 10.387 5.67872 10.1414 5.67872 9.81386C5.67872 9.48635 5.41262 9.24072 5.10558 9.24072Z",
                fill: i.fill ? ? "#202020"
            })]
        }), (0, e.jsx)("defs", {
            children: (0, e.jsx)("clipPath", {
                id: "clip0_2765_836",
                children: (0, e.jsx)("rect", {
                    width: "20",
                    height: "12",
                    fill: "white",
                    transform: "translate(0.5 0.541992)"
                })
            })
        })]
    })])
}, 32899, i => {
    "use strict";
    var e = i.i(91788),
        t = i.i(53147),
        n = i.i(62591),
        r = i.i(3115);
    let o = t.FORWARDED_PARAM_KEYS;
    i.s(["useForwardSearchParamsShopify", 0, (i = {}) => {
        let {
            currency: t
        } = e.default.useContext(r.RegionLocaleContext), [s, l] = e.default.useState("");
        return e.default.useEffect(() => {
            l(document.location.search)
        }, []), (e, r, l) => {
            if (!e) return "";
            let a = new URL(e),
                c = new URLSearchParams,
                d = new URLSearchParams(s);
            for (let [i, e] of a.searchParams) c.set(i, e);
            c.set("channel", "buy_button"), r && c.set("attributes[product_type]", r), Object.entries(i).forEach(([i, e]) => {
                c.set(i, e);
                let t = `attributes[${i}]`;
                c.set(t, e)
            }), o.forEach(i => {
                let e = d.get(i),
                    t = `attributes[${i}]`;
                "email" === i && (t = "checkout[email]"), "discount" === i && (t = "discount"), e && c.set(t, e)
            });
            try {
                let i = (0, n.getCookie)("_uh_fbclid");
                i && (c.set("fbclid", String(i)), c.set("attributes[fbclid]", String(i)));
                let e = (0, n.getCookie)("_fbp");
                e && (c.set("_fbp", String(e)), c.set("attributes[_fbp]", String(e)))
            } catch (i) {}
            return l && t && c.set("currency", t), a.search = c.toString(), a.href
        }
    }])
}, 34151, i => {
    "use strict";
    var e = i.i(91398),
        t = i.i(84882),
        n = i.i(96697),
        r = i.i(17843),
        o = i.i(87760),
        s = i.i(3230),
        l = i.i(75424),
        a = i.i(34728),
        c = i.i(91788);
    i.i(64157);
    var d = i.i(71179),
        h = i.i(60814),
        C = i.i(56560),
        p = i.i(1814),
        x = i.i(228),
        f = i.i(79546),
        g = i.i(21666),
        u = i.i(99200);
    let m = h.default.div.withConfig({
        displayName: "uhx__UhxInfoDescription",
        componentId: "sc-cabb0fd3-0"
    })
    `
  display: flex;
  flex-direction: column;
  gap: 32px;

  .benefit {
    display: flex;
    flex-direction: column;
    gap: 4px;

    h3 {
      font-size: 21px;
      font-weight: 500;
      letter-spacing: -0.84px;
    }

    & .description {
      font-size: 15px;
      font-weight: 400;
      line-height: 20px; /* 133.333% */
      letter-spacing: -0.6px;
    }

    .disclaimer {
      color: rgba(0, 0, 0, 0.7);
      font-size: 15px;
      font-weight: 500;
      line-height: 20px; /* 133.333% */
      letter-spacing: -0.6px;
    }
  }
`, y = () => {
        let {
            t: i
        } = (0, d.useTranslation)("ring"), {
            store: t,
            currency: h
        } = (0, c.useContext)(f.CartContext), y = p.CurrencySymbol[h ? ? x.Currency.usd], j = [{
            icon: (0, e.jsx)(n.UhxInfoDamage, {}),
            title: i("ring.infoModals.uhx.text.b.title"),
            description: i("ring.infoModals.uhx.text.b.p1")
        }, {
            icon: (0, e.jsx)(r.UhxInfoReplacement, {}),
            title: i("ring.infoModals.uhx.text.c.title"),
            description: i("ring.infoModals.uhx.text.c.p1")
        }, {
            icon: (0, e.jsx)(o.UhxInfoShield, {}),
            title: i("ring.infoModals.uhx.text.d.title"),
            description: i("ring.infoModals.uhx.text.d.p1"),
            disclaimer: i("ring.infoModals.uhx.text.d.disclaimer")
        }, {
            icon: (0, e.jsx)(l.UhxInfoWeightLoss, {}),
            title: i("ring.infoModals.uhx.text.e.title"),
            description: i("ring.infoModals.uhx.text.e.p1"),
            disclaimer: i("ring.infoModals.uhx.text.e.disclaimer")
        }, {
            icon: (0, e.jsx)(a.UhxInfoPregnancy, {}),
            title: "Pregnancy Fit Coverage",
            description: "Your body changes during pregnancy and your ring fit can too. We offer a one-time size change per coverage period so your health tracking adapts with you, not the other way around.",
            disclaimer: "*Only with 2 year coverage plan"
        }, {
            icon: (0, e.jsx)(s.UhxInfoSupport, {}),
            title: i("ring.infoModals.uhx.text.f.title"),
            description: i("ring.infoModals.uhx.text.f.p1")
        }];
        return (0, e.jsxs)(u.InfoModalContainer, {
            children: [(0, e.jsxs)(u.InfoModalTitle, {
                children: [(0, e.jsx)("h3", {
                    children: i("ring.infoModals.uhx.title")
                }), (0, e.jsxs)("p", {
                    children: [(0, e.jsxs)(e.Fragment, {
                        children: [y, (0, p.formatPriceWithComma)(C.UhxShopifyMap[t].Year1.price)]
                    }), i("ring.infoModals.uhx.subtitle1")]
                }), (0, e.jsx)(u.ImageContainer, {
                    className: "uhx-image-container",
                    children: (0, e.jsx)(g.CustomImage, {
                        src: "web_v2/cart-info-modals/uhx-2.png",
                        width: 1376,
                        height: 808,
                        alt: "UltrahumanX"
                    })
                })]
            }), (0, e.jsx)(u.InfoModalDescription, {
                children: (0, e.jsx)("p", {
                    children: i("ring.infoModals.uhx.description")
                })
            }), (0, e.jsx)(m, {
                children: j.map((i, t) => (0, e.jsxs)("div", {
                    className: "benefit",
                    children: [i.icon, (0, e.jsx)("h3", {
                        children: i.title
                    }), (0, e.jsx)("p", {
                        className: "description",
                        children: i.description
                    }), (0, e.jsx)("p", {
                        className: "disclaimer",
                        children: i.disclaimer
                    })]
                }, t))
            })]
        })
    }, j = () => {
        let {
            t: i
        } = (0, d.useTranslation)("ring"), {
            store: l,
            currency: a
        } = (0, c.useContext)(f.CartContext), h = p.CurrencySymbol[a ? ? x.Currency.usd], y = [{
            icon: (0, e.jsx)(n.UhxInfoDamage, {}),
            title: "Accidental Damage Protection",
            description: "Safeguard your device from common slips and drops. If it's accidentally dropped during setup, repositioning, or handling, we'll repair or replace it once during the coverage period — physical protection tailored for the realities of home use."
        }, {
            icon: (0, e.jsx)(r.UhxInfoReplacement, {}),
            title: i("ring.infoModals.uhx.text.c.title"),
            description: i("ring.infoModals.uhx.text.c.p1")
        }, {
            icon: (0, e.jsx)(o.UhxInfoShield, {}),
            title: "Environmental Wear Protection",
            description: "Protects against humidity, dust, power fluctuations, and natural calamities. Includes one free repair or replacement per year after running sensor diagnostics.",
            disclaimer: i("ring.infoModals.uhx.text.d.disclaimer")
        }, {
            icon: (0, e.jsx)(t.UhxBetaIcon, {}),
            title: "Ultrahuman Beta Access",
            description: "As an UltrahumanX member, get exclusive early access to experimental features designed for Ultrahuman Home.",
            disclaimer: i("ring.infoModals.uhx.text.e.disclaimer")
        }, {
            icon: (0, e.jsx)(s.UhxInfoSupport, {}),
            title: i("ring.infoModals.uhx.text.f.title"),
            description: i("ring.infoModals.uhx.text.f.p1")
        }];
        return (0, e.jsxs)(u.InfoModalContainer, {
            children: [(0, e.jsxs)(u.InfoModalTitle, {
                children: [(0, e.jsx)("h3", {
                    children: i("ring.infoModals.uhx.title")
                }), (0, e.jsxs)("p", {
                    children: [(0, e.jsxs)(e.Fragment, {
                        children: [h, (0, p.formatPriceWithComma)(C.UhxShopifyMap[l].Year1.price)]
                    }), i("ring.infoModals.uhx.subtitle1")]
                }), (0, e.jsx)(u.ImageContainer, {
                    className: "uhx-image-container",
                    children: (0, e.jsx)(g.CustomImage, {
                        src: "web_v2/cart-info-modals/uhx-2.png",
                        width: 1376,
                        height: 808,
                        alt: "UltrahumanX"
                    })
                })]
            }), (0, e.jsx)(u.InfoModalDescription, {
                children: (0, e.jsx)("p", {
                    children: "A coverage plan designed to help you protect your brand new Ultrahuman Home."
                })
            }), (0, e.jsx)(m, {
                children: y.map((i, t) => (0, e.jsxs)("div", {
                    className: "benefit",
                    children: [i.icon, (0, e.jsx)("h3", {
                        children: i.title
                    }), (0, e.jsx)("p", {
                        className: "description",
                        children: i.description
                    }), (0, e.jsx)("p", {
                        className: "disclaimer",
                        children: i.disclaimer
                    })]
                }, t))
            })]
        })
    };
    i.s(["HomeUhxCartInfoModal", 0, j, "HomeUhxPricingModal", 0, () => (0, e.jsx)(u.PricingModal, {
        children: (0, e.jsx)(j, {})
    }), "UhxCartInfoModal", 0, y, "UhxPricingModal", 0, () => (0, e.jsx)(u.PricingModal, {
        children: (0, e.jsx)(y, {})
    })])
}, 99200, i => {
    "use strict";
    var e = i.i(2100),
        t = i.i(60814);
    let n = t.default.div.withConfig({
        displayName: "layout__InfoModalTitle",
        componentId: "sc-d24577d3-0"
    })
    `
  display: flex;
  flex-direction: column;
  gap: 8px;

  h3 {
    color: #000;
    font-size: 24px;
    font-weight: 500;
    line-height: 120%; /* 28.8px */
    letter-spacing: -0.96px;
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
`, r = t.default.div.withConfig({
        displayName: "layout__InfoModalContainer",
        componentId: "sc-d24577d3-1"
    })
    `
  display: flex;
  flex-direction: column;
  gap: 24px;
  height: 100%;
  overflow-y: scroll;
  margin-bottom: -28px;
  ${e.hideScrollbar}
`, o = t.default.div.withConfig({
        displayName: "layout__InfoModalDescription",
        componentId: "sc-d24577d3-2"
    })
    `
  display: flex;
  flex-direction: column;
  gap: 4px;

  h3 {
    color: #000;
    font-size: 20px;
    font-weight: 500;
    line-height: 110%; /* 22px */
    letter-spacing: -0.8px;
  }

  p {
    font-size: 14px;
    line-height: 130%; /* 18.2px */
    letter-spacing: -0.56px;

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

  ul {
    list-style-type: disc;
    padding-left: 20px;
    margin: 8px 0;
  }

  li {
    margin-bottom: 4px;
    padding-left: 4px;
  }
`, s = t.default.div.withConfig({
        displayName: "layout__ImageContainer",
        componentId: "sc-d24577d3-3"
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

  &.clue-container {
    border-radius: 16px;
    overflow: hidden;
  }

  &.cno-pro-image-container {
    border-radius: 16px;
    overflow: hidden;
  }
`, l = t.default.div.withConfig({
        displayName: "layout__PricingModal",
        componentId: "sc-d24577d3-4"
    })
    `
  width: 100%;
  padding: 52px 24px;
  @media (min-width: ${({theme:i})=>i.global.tablet.maxWidth}) {
    width: 700px;
  }
`, a = t.default.button.withConfig({
        displayName: "layout__Button",
        componentId: "sc-d24577d3-5"
    })
    `
  width: 100%;
  padding: 12px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  border-radius: 24px;
  background: #057ff0;
  border: none;

  margin: 0 auto;

  color: #fff;
  font-size: 13px;
  font-weight: 500;

  @media (min-width: ${({theme:i})=>i.globalV2.xxl.minWidth}) {
    padding: 16px 24px;
  }
`;
    i.s(["Button", 0, a, "ImageContainer", 0, s, "InfoModalContainer", 0, r, "InfoModalDescription", 0, o, "InfoModalTitle", 0, n, "PricingModal", 0, l])
}, 49767, i => {
    "use strict";
    var e = i.i(91398),
        t = i.i(3115),
        n = i.i(91788),
        r = i.i(60814),
        o = i.i(59207),
        s = i.i(79546);
    let l = (0, r.default)(({
        className: i
    }) => (0, n.useContext)(s.CartContext).store !== o.ShopifyStore.US ? null : (0, e.jsxs)("div", {
        className: `${i} fsa-hsa`,
        children: [(0, e.jsx)(a, {}), (0, e.jsxs)("span", {
            children: [(0, e.jsx)("b", {
                children: "HSA/FSA"
            }), " Eligible"]
        })]
    })).withConfig({
        displayName: "HsaFsaComponent__FSAHSAComponent",
        componentId: "sc-d0bdeb0a-0"
    })
    `
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.4rem;

  font-size: 14px;
  color: #8d8d8d;

  svg {
    height: 1.6rem;
    width: auto;
    transform: translateY(-1px);
  }

  b {
    font-weight: 500;
    color: #000000;
  }
`;
    (0, r.default)(({
        className: i,
        colorScheme: r = "light"
    }) => {
        let {
            region: o
        } = (0, n.useContext)(t.RegionLocaleContext);
        return "US" !== o && "PR" !== o ? null : (0, e.jsxs)("div", {
            className: `${i} ${r} fsa-hsa`,
            children: [(0, e.jsx)(a, {
                fill: "dark" === r ? "white" : "black"
            }), (0, e.jsxs)("span", {
                children: [(0, e.jsx)("b", {
                    children: "HSA/FSA"
                }), " Eligible"]
            })]
        })
    }).withConfig({
        displayName: "HsaFsaComponent__FSAHSAComponentIP",
        componentId: "sc-d0bdeb0a-1"
    })
    `
  &.light {
    --highlight-color: #8d8d8d;
    --base-color: #000000;
  }

  &.dark {
    --highlight-color: rgba(255, 255, 255, 0.5);
    --base-color: #ffffff;
  }
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.4rem;

  font-size: 12px;
  color: var(--highlight-color, #8d8d8d);

  svg {
    height: 1.6rem;
    width: auto;
    transform: translateY(-1px);
  }

  b {
    font-weight: 500;
    color: var(--base-color, #000000);
  }
`;
    let a = ({
        className: i,
        style: t,
        fill: n = "black"
    }) => (0, e.jsxs)("svg", {
        className: i,
        style: t,
        width: "23",
        height: "25",
        viewBox: "0 0 23 25",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [(0, e.jsx)("path", {
            d: "M0.0445803 12.2808C0.655407 6.11158 6.63525 1.48262 12.762 2.25157C13.9411 2.39926 15.072 2.80381 16.1773 3.21076L15.4581 4.53916C15.292 4.65635 15.0568 4.43562 14.893 4.37382C9.48871 2.35191 3.44627 5.35306 1.91157 10.8979C-0.140032 18.3072 6.69464 25.0906 14.0928 22.9988C20.1409 21.2891 22.9991 14.3092 19.9659 8.77482C19.8366 8.53803 19.1544 7.61657 19.1431 7.505C19.1143 7.21043 19.7564 6.40295 19.9105 6.10195C22.6123 9.05575 23.4205 13.3925 22.1596 17.1795C20.4972 22.1721 15.4413 25.4108 10.2023 24.8795C5.01949 24.3537 0.504506 19.98 0.0445803 14.7691C-0.0116061 14.1326 -0.0180274 12.9117 0.0445803 12.2808Z",
            fill: n ? ? "black"
        }), (0, e.jsx)("path", {
            d: "M21.0742 0.723199L11.081 18.1402L6.15346 12.8362L6.15186 12.65L7.22823 11.6402L10.8402 15.5717L19.7096 0L21.0742 0.723199Z",
            fill: n ? ? "black"
        })]
    });
    i.s(["FSAHSAComponent", 0, l])
}, 87760, i => {
    "use strict";
    var e = i.i(91398);
    i.s(["UhxInfoShield", 0, i => (0, e.jsxs)("svg", {
        className: i.className,
        style: i.style,
        width: "18",
        height: "20",
        viewBox: "0 0 18 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [(0, e.jsx)("path", {
            d: "M9.68635 2.34161C9.37973 2.23784 9.04748 2.23784 8.74086 2.34161L3.03083 4.27557C2.84485 4.33599 2.68058 4.44946 2.55826 4.60203C2.43594 4.7546 2.36089 4.9396 2.34236 5.13427C2.05837 8.69545 2.55134 11.3288 3.72183 13.3184C4.8544 15.244 6.66617 16.6437 9.21361 17.6869C11.7636 16.6437 13.577 15.244 14.7096 13.3184C15.8809 11.3297 16.3739 8.69545 16.0899 5.13427C16.0714 4.9396 15.9963 4.7546 15.874 4.60203C15.7517 4.44946 15.5874 4.33599 15.4014 4.27557L9.68635 2.34161ZM8.33553 1.145C8.90495 0.951955 9.52208 0.951659 10.0917 1.14416L15.8068 3.07812C16.2266 3.21792 16.5963 3.47753 16.8703 3.82493C17.1443 4.17233 17.3107 4.59233 17.3489 5.03315C17.6464 8.74939 17.1466 11.6701 15.7992 13.9597C14.4475 16.256 12.2928 17.8344 9.44535 18.956C9.29643 19.0147 9.13079 19.0147 8.98187 18.956C6.13697 17.8344 3.98306 16.256 2.63224 13.9597C1.28563 11.6701 0.785918 8.74854 1.08254 5.03315C1.12073 4.59233 1.2871 4.17233 1.56113 3.82493C1.83515 3.47753 2.20486 3.21792 2.62466 3.07812L8.33553 1.145Z",
            fill: "black"
        }), (0, e.jsx)("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M9.95656 1.54371C9.47463 1.38088 8.95251 1.38115 8.47074 1.54448L2.75772 3.47832C2.41596 3.59214 2.11497 3.80349 1.89188 4.08632C1.66906 4.36879 1.53368 4.71022 1.50237 5.06861C1.21009 8.73193 1.70771 11.5572 2.99536 13.7465C4.28475 15.9384 6.34986 17.4659 9.13634 18.5644C9.18597 18.584 9.24117 18.584 9.29079 18.5644C12.0798 17.4658 14.1458 15.9383 15.436 13.7464C16.7244 11.5572 17.222 8.7328 16.9289 5.06869C16.8976 4.71027 16.7622 4.36881 16.5394 4.08632C16.3163 3.80349 16.0153 3.59214 15.6736 3.47832L15.6716 3.47767L9.95656 1.54371C9.95662 1.54373 9.95651 1.54369 9.95656 1.54371ZM8.20037 0.746347C8.85734 0.523665 9.56934 0.523345 10.2265 0.745437L15.9398 2.67881C15.9402 2.67892 15.9405 2.67903 15.9408 2.67914C16.4382 2.84501 16.8763 3.15273 17.201 3.56443C17.526 3.9764 17.7233 4.47447 17.7686 4.99722L17.7688 4.99997C18.0704 8.76762 17.5686 11.7843 16.1622 14.1739C14.7491 16.5746 12.5056 18.2038 9.59977 19.3484M8.20037 0.746347C8.20031 0.746368 8.20043 0.746325 8.20037 0.746347V0.746347ZM8.20037 0.746347L2.49146 2.67881C2.49112 2.67892 2.49078 2.67903 2.49044 2.67915C1.99303 2.84502 1.55499 3.15274 1.23025 3.56443C0.905287 3.9764 0.707999 4.47447 0.662708 4.99722L0.662472 5.00006C0.361747 8.76681 0.863595 11.7842 2.26899 14.1738C3.68125 16.5745 5.92395 18.2038 8.82727 19.3484C9.07544 19.4462 9.3516 19.4462 9.59977 19.3484M9.82136 1.94295C9.82135 1.94295 9.82136 1.94295 9.82136 1.94295L15.5342 3.87616C15.7972 3.96217 16.0295 4.12297 16.2027 4.33891C16.3764 4.55558 16.483 4.81831 16.5093 5.09478L16.5099 5.10122C16.798 8.71359 16.3029 11.4437 15.0727 13.5325M9.82136 1.94295C9.42713 1.80954 8.99995 1.80953 8.60573 1.94295L2.89787 3.87617C2.63486 3.96219 2.40259 4.12298 2.22947 4.33891C2.05575 4.55558 1.94917 4.81832 1.92285 5.09478L1.92228 5.10122C1.6342 8.71376 2.12932 11.443 3.35859 13.5325C4.55061 15.5591 6.44773 17.01 9.05386 18.0773L9.21346 18.1426L9.37309 18.0773C11.9816 17.0101 13.8806 15.5591 15.0727 13.5325M8.87596 2.74113C9.09495 2.66704 9.33223 2.66705 9.55122 2.74116L15.2663 4.67513L15.2712 4.67675C15.379 4.71178 15.4743 4.77757 15.5452 4.86604C15.6156 4.95378 15.6589 5.06002 15.6701 5.17188C15.9494 8.67985 15.4585 11.217 14.3465 13.105C13.2965 14.8901 11.6193 16.2199 9.21362 17.2312C6.81049 16.22 5.13497 14.8904 4.08494 13.1052C2.97364 11.2163 2.48275 8.67978 2.76201 5.17186C2.7732 5.06 2.81658 4.95377 2.88693 4.86604C2.95785 4.77757 3.0531 4.71178 3.16094 4.67675L8.87596 2.74113C8.87599 2.74112 8.87593 2.74114 8.87596 2.74113Z",
            fill: "black"
        }), (0, e.jsx)("path", {
            d: "M9.21582 15.8406C12.8506 14.3224 14.5654 11.6597 14.2309 6.6372C14.1934 6.06641 13.8149 5.58343 13.2897 5.39516L9.80813 4.14641C9.61768 4.0781 9.41748 4.04313 9.21582 4.04297V15.8406Z",
            fill: "black"
        })]
    })])
}, 96697, i => {
    "use strict";
    var e = i.i(91398);
    i.s(["UhxInfoDamage", 0, () => (0, e.jsx)("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: (0, e.jsx)("path", {
            d: "M20.285 7.119C20.2608 7.03593 20.2155 6.96057 20.1534 6.90027C20.0914 6.83997 20.0147 6.79681 19.931 6.775C19.8475 6.75194 19.7593 6.75145 19.6755 6.77359C19.5917 6.79572 19.5153 6.83969 19.454 6.901L16.838 9.458L14.924 9.075L14.543 7.168L17.188 4.583C17.2499 4.52263 17.2951 4.44722 17.3192 4.36415C17.3433 4.28108 17.3454 4.19318 17.3254 4.10905C17.3053 4.02492 17.2638 3.94742 17.2048 3.88414C17.1459 3.82086 17.0715 3.77395 16.989 3.748C16.5081 3.59046 16.006 3.50684 15.5 3.5C12.743 3.5 10.5 5.743 10.5 8.5C10.5 8.823 10.538 9.15 10.618 9.51C10.056 9.973 9.522 10.372 8.917 10.824C8.052 11.47 7.072 12.201 5.735 13.33C5.35077 13.6613 5.04181 14.071 4.82881 14.5315C4.61581 14.992 4.50371 15.4927 4.5 16C4.5 17.93 6.07 19.5 8 19.5C8.50806 19.4986 9.00965 19.386 9.46953 19.17C9.92941 18.9541 10.3364 18.64 10.662 18.25C11.5475 17.2106 12.396 16.1403 13.206 15.041C13.648 14.45 14.038 13.93 14.489 13.381C14.849 13.462 15.177 13.5 15.5 13.5C18.257 13.5 20.5 11.257 20.5 8.5C20.4947 8.03176 20.4223 7.5667 20.285 7.119ZM8 17C7.73478 17 7.48043 16.8946 7.29289 16.7071C7.10536 16.5196 7 16.2652 7 16C7 15.7348 7.10536 15.4804 7.29289 15.2929C7.48043 15.1054 7.73478 15 8 15C8.26522 15 8.51957 15.1054 8.70711 15.2929C8.89464 15.4804 9 15.7348 9 16C9 16.2652 8.89464 16.5196 8.70711 16.7071C8.51957 16.8946 8.26522 17 8 17Z",
            fill: "black"
        })
    })])
}, 3230, i => {
    "use strict";
    var e = i.i(91398);
    i.s(["UhxInfoSupport", 0, () => (0, e.jsx)("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: (0, e.jsx)("path", {
            d: "M12.5854 19.6803H12.3401C10.018 19.6803 8.04741 18.8708 6.42845 17.2518C4.80948 15.6328 4 13.6623 4 11.3401C4 9.01797 4.80948 7.04741 6.42845 5.42845C8.04741 3.80948 10.018 3 12.3401 3C13.5012 3 14.5848 3.21652 15.5908 3.64955C16.5969 4.08258 17.4799 4.67947 18.24 5.44022C19.0001 6.20097 19.5967 7.08404 20.0297 8.08944C20.4628 9.09483 20.6796 10.1784 20.6803 11.3401C20.6803 13.5315 20.0628 15.5674 18.8278 17.448C17.5928 19.3287 16.0353 20.8004 14.1553 21.8634C13.9918 21.9452 13.8283 21.9903 13.6647 21.9988C13.5012 22.0073 13.354 21.9704 13.2232 21.8879C13.0924 21.8062 12.9779 21.6999 12.8798 21.569C12.7817 21.4382 12.7244 21.2829 12.7081 21.103L12.5854 19.6803ZM12.3156 16.7121C12.5936 16.7121 12.8307 16.614 13.027 16.4178C13.2232 16.2216 13.3213 15.9844 13.3213 15.7064C13.3213 15.4284 13.2232 15.1913 13.027 14.9951C12.8307 14.7988 12.5936 14.7007 12.3156 14.7007C12.0376 14.7007 11.8005 14.7988 11.6042 14.9951C11.408 15.1913 11.3099 15.4284 11.3099 15.7064C11.3099 15.9844 11.408 16.2216 11.6042 16.4178C11.8005 16.614 12.0376 16.7121 12.3156 16.7121ZM10.1815 9.25509C10.3614 9.33686 10.5413 9.34111 10.7212 9.26785C10.901 9.19459 11.0482 9.07586 11.1627 8.91168C11.3099 8.71544 11.4816 8.56401 11.6778 8.45739C11.8741 8.35076 12.0948 8.29778 12.3401 8.29843C12.7326 8.29843 13.0515 8.40865 13.2968 8.62909C13.5421 8.84953 13.6647 9.13179 13.6647 9.47586C13.6647 9.68845 13.6036 9.90105 13.4812 10.1136C13.3589 10.3262 13.1421 10.5879 12.8307 10.8986C12.4219 11.2584 12.1194 11.5979 11.9231 11.9171C11.7269 12.2363 11.6288 12.5591 11.6288 12.8855C11.6288 13.0817 11.6984 13.2495 11.8378 13.3889C11.9771 13.5282 12.1445 13.5975 12.3401 13.5969C12.5364 13.5969 12.6999 13.5233 12.8307 13.3761C12.9615 13.2289 13.0597 13.0572 13.1251 12.861C13.2068 12.583 13.354 12.3295 13.5666 12.1005C13.7792 11.8716 13.9754 11.6672 14.1553 11.4873C14.4987 11.1439 14.7565 10.8005 14.9285 10.4571C15.1005 10.1136 15.1862 9.77022 15.1856 9.4268C15.1856 8.67456 14.9279 8.06949 14.4124 7.6116C13.8969 7.15371 13.2062 6.92477 12.3401 6.92477C11.8168 6.92477 11.3344 7.05167 10.8929 7.30547C10.4513 7.55927 10.0916 7.90661 9.81356 8.34749C9.71544 8.52738 9.70301 8.70334 9.77627 8.87537C9.84953 9.04741 9.98461 9.17398 10.1815 9.25509Z",
            fill: "black"
        })
    })])
}, 84882, i => {
    "use strict";
    var e = i.i(91398);
    i.s(["UhxBetaIcon", 0, i => (0, e.jsx)("svg", {
        className: i.className,
        style: i.style,
        width: "25",
        height: "25",
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: (0, e.jsx)("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M9.12701 4.09765L9.79701 4.32457C9.91786 4.36485 9.91786 4.53671 9.79701 4.57699L9.12701 4.80391C8.96857 4.85762 8.8437 4.98249 8.78999 5.14093L8.56308 5.81093C8.5228 5.93177 8.35093 5.93177 8.31065 5.81093L8.08374 5.14093C8.03003 4.98249 7.90516 4.85762 7.74672 4.80391L7.07672 4.57699C6.95587 4.53671 6.95587 4.36485 7.07672 4.32457L7.74672 4.09765C7.90516 4.04394 8.03003 3.91907 8.08374 3.76064L8.31065 3.09063C8.35093 2.96979 8.5228 2.96979 8.56308 3.09063L8.78999 3.76064C8.8437 3.91907 8.96857 4.04394 9.12701 4.09765ZM11.9668 5.39336C11.905 5.2121 11.6499 5.2121 11.5882 5.39336L11.2793 6.30774C11.1719 6.62461 10.9235 6.87435 10.6053 6.98177L9.69094 7.29059C9.50968 7.35235 9.50968 7.60747 9.69094 7.66923L10.6053 7.97805C10.9222 8.08546 11.1719 8.33386 11.2793 8.65208L11.5882 9.56646C11.6499 9.74772 11.905 9.74772 11.9668 9.56646L12.2756 8.65208C12.383 8.33521 12.6314 8.08546 12.9497 7.97805L13.864 7.66923C14.0453 7.60747 14.0453 7.35235 13.864 7.29059L12.9497 6.98177C12.6328 6.87435 12.383 6.62596 12.2756 6.30774L11.9668 5.39336ZM2.18126 9.92628L3.51053 10.3747C4.18456 10.603 4.71493 11.132 4.94184 11.8061L5.3903 13.1353C5.47221 13.377 5.81325 13.377 5.89515 13.1353L6.34361 11.8061C6.57187 11.132 7.10089 10.6017 7.77493 10.3747L9.10419 9.92628C9.34588 9.84438 9.34588 9.50333 9.10419 9.42143L7.77493 8.97297C7.10089 8.74471 6.57053 8.21569 6.34361 7.54166L5.89515 6.21239C5.81325 5.97071 5.47221 5.97071 5.3903 6.21239L4.94184 7.54166C4.71358 8.21569 4.18456 8.74605 3.51053 8.97297L2.18126 9.42143C1.93958 9.50333 1.93958 9.84438 2.18126 9.92628Z",
            fill: "black"
        })
    })])
}, 75424, i => {
    "use strict";
    var e = i.i(91398);
    i.s(["UhxInfoWeightLoss", 0, i => (0, e.jsxs)("svg", {
        className: i.className,
        style: i.style,
        width: "20",
        height: "22",
        viewBox: "0 0 20 22",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [(0, e.jsx)("path", {
            d: "M16.5962 17.7091C17.7165 17.2351 18.5732 16.6494 19.1416 15.9873C18.5665 18.2167 14.8832 20.7277 10.0351 21.9996L9.23043 18.9324C9.37138 18.9351 9.51313 18.937 9.65523 18.937C12.2597 18.937 14.7247 18.5009 16.5962 17.7091Z",
            fill: "black"
        }), (0, e.jsx)("path", {
            d: "M18.2234 10.6714V12.1172L17.5444 12.5339V11.1177C17.0185 11.4169 16.392 11.682 15.689 11.9072V14.3427L14.806 14.5512V12.1587C14.316 12.2808 13.7976 12.3851 13.2552 12.4681V13.6467L12.3717 13.7531V12.5805C11.8451 12.6368 11.3022 12.6757 10.744 12.6918V15.1761H9.86023V12.6977C9.19398 12.6904 8.54614 12.6536 7.92226 12.5902V13.7531L7.03849 13.6467V12.4824C6.40524 12.3888 5.80579 12.2654 5.24386 12.1187V14.5512L4.3608 14.2365V11.8584C3.7587 11.6574 3.2166 11.4257 2.74957 11.1684V12.5339L2.07097 12.1172V10.7392C1.28995 10.1667 0.841309 9.50365 0.841309 8.7959V13.9186C0.841309 14.255 0.942565 14.5818 1.13241 14.8934C2.15912 16.5785 5.78479 17.8238 10.1007 17.8238C10.3393 17.8238 10.5748 17.8187 10.8089 17.8111C15.5915 17.6585 19.3601 15.9745 19.3601 13.9186V8.7959C19.3601 9.47559 18.9474 10.1147 18.2234 10.6714Z",
            fill: "black"
        }), (0, e.jsx)("mask", {
            id: "mask0_1511_1203",
            style: {
                maskType: "alpha"
            },
            maskUnits: "userSpaceOnUse",
            x: "1",
            y: "-1",
            width: "18",
            height: "14",
            children: (0, e.jsx)("path", {
                d: "M18.8974 8.79543C18.8974 10.7131 15.011 12.2677 10.2168 12.2677C5.42259 12.2677 1.53613 10.7131 1.53613 8.79543C1.53613 7.70156 1.53613 -0.000976562 1.53613 -0.000976562C1.53613 -0.000976562 8.15726 -0.000976562 10.2168 -0.000976562C12.3301 -0.000976562 18.8974 -0.000976562 18.8974 -0.000976562C18.8974 -0.000976562 18.8974 7.72307 18.8974 8.79543Z",
                fill: "white"
            })
        }), (0, e.jsxs)("g", {
            mask: "url(#mask0_1511_1203)",
            children: [(0, e.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M6.27869 3.46587L6.98125 4.16842L4.5637 6.58597L3.91455 5.93682C2.36708 8.64014 2.74758 12.1465 5.05602 14.4549C7.82005 17.2189 12.3014 17.2189 15.0654 14.4549C17.8295 11.6909 17.8295 7.20951 15.0654 4.44548C12.6797 2.05977 9.01463 1.73324 6.27869 3.46587ZM4.03299 15.4779C0.703965 12.1489 0.703965 6.75148 4.03299 3.42246C7.36202 0.0934279 12.7594 0.0934279 16.0885 3.42246C19.4175 6.75148 19.4175 12.1489 16.0885 15.4779C12.7594 18.807 7.36202 18.807 4.03299 15.4779Z",
                fill: "black"
            }), (0, e.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M4.06865 15.3871C2.41557 13.734 1.59516 11.559 1.60844 9.39547C1.61851 7.75445 2.49018 6.47691 3.31004 5.65706L6.21828 2.74881C7.03814 1.92896 8.31567 1.05729 9.9567 1.04722C12.1202 1.03394 14.2953 1.85434 15.9483 3.50742C19.2288 6.78791 19.2288 12.1066 15.9483 15.3871C12.6679 18.6676 7.34913 18.6676 4.06865 15.3871ZM3.77857 9.40879C3.78379 8.5569 4.24219 7.79399 4.84458 7.1916L7.75282 4.28335C8.35521 3.68096 9.11812 3.22257 9.97002 3.21734C11.5772 3.20747 13.1875 3.81568 14.4138 5.04196C16.8468 7.47494 16.8468 11.4196 14.4138 13.8526C11.9808 16.2856 8.03617 16.2856 5.60319 13.8526C4.37691 12.6263 3.7687 11.016 3.77857 9.40879Z",
                fill: "black",
                fillOpacity: "0.5"
            })]
        })]
    })])
}, 17843, i => {
    "use strict";
    var e = i.i(91398);
    i.s(["UhxInfoReplacement", 0, () => (0, e.jsx)("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: (0, e.jsx)("path", {
            d: "M19.7256 13.9285L19.7256 13.9628C19.7256 14.1905 19.6351 14.4088 19.4742 14.5698C19.3132 14.7308 19.0949 14.8212 18.8672 14.8212C18.6395 14.8212 18.4212 14.7308 18.2602 14.5698C18.0993 14.4088 18.0088 14.1905 18.0088 13.9628C18.0088 12.4841 18.0088 11.3591 17.9367 10.4629C17.8646 9.56448 17.7273 8.99452 17.5121 8.5905C17.0586 7.75368 16.3519 7.08183 15.4932 6.67116C15.0422 6.4537 14.486 6.32323 13.6185 6.2557C12.7441 6.18703 11.6293 6.18703 10.0774 6.18703L9.95147 6.18703L11.2333 7.46888C11.3849 7.63161 11.4675 7.84683 11.4636 8.0692C11.4596 8.29158 11.3696 8.50376 11.2123 8.66103C11.055 8.8183 10.8428 8.90839 10.6205 8.91231C10.3981 8.91624 10.1829 8.83369 10.0201 8.68207L7.27331 5.93524C7.19113 5.853 7.12651 5.75492 7.08337 5.64695C7.04024 5.53898 7.01948 5.42338 7.02237 5.30715C7.02526 5.19092 7.05173 5.07649 7.10018 4.97079C7.14863 4.8651 7.21804 4.77036 7.30421 4.6923L10.051 2.20757C10.2208 2.06156 10.4409 1.98768 10.6644 2.00168C10.8879 2.01568 11.0971 2.11646 11.2473 2.28251C11.3975 2.44857 11.4769 2.66675 11.4685 2.89052C11.4601 3.11428 11.3646 3.32592 11.2024 3.48027L10.1083 4.47027L10.114 4.47027C11.6213 4.47027 12.8036 4.47027 13.7524 4.54466C14.7184 4.6202 15.5172 4.77585 16.2428 5.12722C17.4271 5.6962 18.401 6.62523 19.0251 7.78134C19.4086 8.49665 19.5699 9.34932 19.6478 10.3267C19.7256 11.2996 19.7256 12.491 19.7256 13.9285ZM16.9788 18.692C16.9759 18.8084 16.9493 18.923 16.9007 19.0289C16.8521 19.1348 16.7825 19.2296 16.6961 19.3077L13.9492 21.7924C13.7795 21.9384 13.5594 22.0123 13.3359 21.9983C13.1124 21.9843 12.9032 21.8835 12.753 21.7175C12.6028 21.5514 12.5234 21.3332 12.5318 21.1095C12.5401 20.8857 12.6356 20.6741 12.7979 20.5197L13.892 19.5297L13.8863 19.5297C12.379 19.5297 11.1967 19.5297 10.2479 19.4553C9.28193 19.3798 8.48306 19.2253 7.75744 18.8728C6.5732 18.3038 5.5993 17.3748 4.97513 16.2187C4.59172 15.5033 4.43035 14.6507 4.35252 13.6733C4.27469 12.7004 4.27469 11.509 4.27469 10.0726L4.27469 10.0383C4.27469 9.81065 4.36513 9.59232 4.52611 9.43134C4.68709 9.27036 4.90542 9.17993 5.13308 9.17993C5.36073 9.17993 5.57907 9.27036 5.74005 9.43134C5.90102 9.59232 5.99146 9.81065 5.99146 10.0383C5.99146 11.5159 5.99146 12.6409 6.06356 13.5371C6.13567 14.4355 6.27301 15.0055 6.48932 15.4095C6.94256 16.2461 7.64885 16.918 8.50709 17.3288C8.95803 17.5463 9.51426 17.6768 10.3818 17.7443C11.2562 17.813 12.371 17.813 13.9229 17.813L14.0488 17.813L12.767 16.5311C12.6153 16.3684 12.5328 16.1532 12.5367 15.9308C12.5406 15.7084 12.6307 15.4962 12.788 15.339C12.9453 15.1817 13.1574 15.0916 13.3798 15.0877C13.6022 15.0838 13.8174 15.1663 13.9801 15.3179L16.727 18.0648C16.8092 18.1468 16.8739 18.2447 16.9172 18.3525C16.9605 18.4603 16.9814 18.5758 16.9788 18.692Z",
            fill: "black",
            stroke: "black",
            "stroke-width": "0.5"
        })
    })])
}, 34728, i => {
    "use strict";
    var e = i.i(91398);
    i.s(["UhxInfoPregnancy", 0, i => (0, e.jsxs)("svg", {
        className: i.className,
        style: i.style,
        width: "32",
        height: "32",
        viewBox: "4 0 32 28",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [(0, e.jsx)("g", {
            "clip-path": "url(#clip0_185_563)",
            children: (0, e.jsx)("path", {
                d: "M22.6911 19.5342C21.4741 18.1875 19.9615 17.5537 18.1045 17.5954C19.2899 16.3767 18.2967 15.2949 16.5502 15.0702C15.547 14.9051 14.8811 14.5434 14.5366 14.1104C13.9755 13.4066 14.8639 12.4499 15.5857 12.9722C15.7422 13.0883 15.9058 13.1924 16.0766 13.2846C16.4655 13.493 16.9449 13.359 17.1816 12.9766L17.3869 12.6419C17.4342 12.5689 17.5188 12.5302 17.6035 12.5436C17.6854 12.56 17.7715 12.5421 17.8404 12.4916C17.9093 12.4424 17.9551 12.3651 17.9682 12.2787C17.9839 12.1865 18.0528 12.1136 18.1418 12.0957L18.4574 12.0408V12.0392C18.5163 12.0288 18.5679 11.9931 18.601 11.941C18.6326 11.8889 18.6412 11.8249 18.6254 11.7654C18.5867 11.6151 18.5666 11.4603 18.5666 11.3042C18.5651 10.9917 18.7775 10.7209 19.0732 10.6584C21.0509 10.2387 21.8301 7.69583 20.1496 5.88505C18.1532 3.84353 16.1698 3.45963 14.2036 4.73633C13.2506 5.37171 12.49 6.27343 12.0091 7.33731C11.6848 8.03812 11.3719 8.66762 10.1177 9.54993C9.98415 9.64366 9.84636 9.7389 9.72014 9.8445C7.47265 11.7238 7.53007 14.9005 9.29678 16.399V14.1821C9.27375 13.2149 9.6412 12.2833 10.3114 11.6108C11.0089 10.9471 11.9417 10.6168 12.8846 10.6986C14.2193 10.7537 15.0833 10.4397 15.5928 9.70909C16.2931 8.46374 17.3193 8.33275 18.0699 8.23603C18.5707 8.17204 18.829 8.1274 18.9841 7.92654C19.1276 7.72864 19.3486 7.60811 19.5868 7.60067H19.6859C19.8897 7.64976 20.0561 7.79707 20.1351 7.99797C20.2125 8.19885 20.1911 8.42496 20.0777 8.60661C19.6055 9.3669 18.8277 9.46517 18.2263 9.54248C17.5504 9.63027 17.0638 9.69128 16.6778 10.3921L16.6462 10.4472C15.8756 11.575 14.6255 12.087 12.8171 12.0155L12.8186 12.0141C12.2216 11.9545 11.6289 12.1554 11.1812 12.5705C10.7663 12.9932 10.5438 13.5779 10.5669 14.1821V19.5282C11.1194 24.5694 13.9724 27.117 16.9662 27.8193V27.818C18.0885 28.1007 19.264 28.053 20.3618 27.6825C23.855 26.4356 25.2398 22.2573 22.6911 19.5342ZM21.5258 25.1572C21.065 25.6423 20.501 26.0084 19.8781 26.2287C19.4189 26.3893 18.9367 26.4712 18.4516 26.4682C17.2863 26.4444 16.1525 26.0694 15.1895 25.3879C13.9438 24.5056 13.0124 23.223 12.5402 21.7365C12.0895 20.4063 11.9002 18.8885 11.9604 17.0998L11.9963 16.0702C12.0092 15.7116 12.2948 15.4289 12.6407 15.4349C12.9866 15.4408 13.265 15.7325 13.265 16.0911V16.1148L13.2305 17.1445C13.176 18.7664 13.3424 20.1265 13.7385 21.2988H13.74C14.1203 22.5131 14.8752 23.565 15.8885 24.2897C16.8027 24.9161 18.2221 25.425 19.4649 24.9831H19.4663C19.8954 24.8314 20.2858 24.5799 20.6073 24.248C20.8168 24.0189 21.1526 23.9728 21.4123 24.1409C21.5732 24.2465 21.6794 24.4236 21.7023 24.62C21.7239 24.818 21.6592 25.0144 21.5258 25.1572Z",
                fill: i.fill ? ? "#000"
            })
        }), (0, e.jsx)("defs", {
            children: (0, e.jsx)("clipPath", {
                id: "clip0_185_563",
                children: (0, e.jsx)("rect", {
                    width: "32",
                    height: "32",
                    fill: i.fill ? ? "#000"
                })
            })
        })]
    })])
}, 8509, i => {
    "use strict";
    var e = i.i(91398);
    i.s(["Return", 0, i => (0, e.jsx)("svg", {
        className: i.className,
        style: i.style,
        width: "20",
        height: "14",
        viewBox: "0 0 20 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: (0, e.jsx)("path", {
            d: "M3.75346 0V1.42076H13.6992C16.0729 1.42076 17.9616 3.30951 17.9616 5.68319C17.9616 8.05689 16.0729 9.9457 13.6992 9.9457H3.3372L4.61259 8.6703C4.80785 8.47503 4.80785 8.15844 4.61258 7.96318L4.31514 7.66576C4.11988 7.47051 3.8033 7.47052 3.60804 7.66577L0.971234 10.3026C0.775969 10.4978 0.775969 10.8144 0.971234 11.0097L3.60803 13.6464C3.80329 13.8417 4.11988 13.8417 4.31514 13.6464L4.6126 13.349C4.80786 13.1537 4.80785 12.8371 4.61258 12.6419L3.3372 11.3665H13.6992C16.8354 11.3665 19.3824 8.81943 19.3824 5.68319C19.3824 2.54696 16.8354 0 13.6992 0H3.75346Z",
            fill: "black"
        })
    })])
}, 90341, i => {
    "use strict";
    var e = i.i(91398);
    i.s(["Charger", 0, i => (0, e.jsx)("svg", {
        className: i.className,
        style: i.style,
        width: "34",
        height: "14",
        viewBox: "0 0 34 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: (0, e.jsx)("path", {
            d: "M33.8047 3.46719C33.7882 3.29314 33.7073 3.13153 33.5778 3.01413C33.4482 2.89674 33.2795 2.83206 33.1047 2.83281L28.0406 2.83281V0.7C28.0406 0.514354 27.9668 0.336317 27.8355 0.205045C27.7043 0.073774 27.5262 1.85525e-05 27.3406 0L8.64841 0C8.46276 1.85525e-05 8.28472 0.073774 8.15345 0.205045C8.02218 0.336317 7.94843 0.514354 7.94841 0.7V6.3H0.904659C0.811901 6.29869 0.719807 6.31583 0.633728 6.35042C0.547649 6.385 0.469303 6.43636 0.403244 6.50149C0.337189 6.56662 0.284733 6.64423 0.248928 6.72981C0.213127 6.81539 0.194691 6.90723 0.194691 7C0.194691 7.09277 0.213127 7.18461 0.248928 7.27019C0.284733 7.35577 0.337189 7.43338 0.403244 7.49851C0.469303 7.56364 0.547649 7.615 0.633728 7.64959C0.719807 7.68418 0.811901 7.70131 0.904659 7.7H7.94841V13.3C7.94843 13.4856 8.02218 13.6637 8.15345 13.795C8.28472 13.9262 8.46276 14 8.64841 14L27.3406 14C27.5262 14 27.7043 13.9262 27.8355 13.795C27.9668 13.6637 28.0406 13.4856 28.0406 13.3V11.1672H33.1047C33.2903 11.1672 33.4683 11.0934 33.5996 10.9621C33.7309 10.8309 33.8046 10.6528 33.8047 10.4672V3.53281C33.8057 3.51095 33.8057 3.48905 33.8047 3.46719ZM32.4047 4.23281V9.76719H28.0406V4.23281H32.4047ZM26.6406 1.4V12.6L9.34841 12.6V1.4L26.6406 1.4Z",
            fill: "black"
        })
    })])
}]);