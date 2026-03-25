(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 52232, e => {
        "use strict";
        var i = e.i(91398);
        e.i(64157);
        var t = e.i(71179),
            r = e.i(3828),
            n = e.i(91788),
            a = e.i(87156),
            o = e.i(43362),
            l = e.i(90098),
            s = e.i(40290),
            c = e.i(90341),
            d = e.i(38927),
            p = e.i(60910),
            g = e.i(89574),
            h = e.i(72886),
            m = e.i(33714),
            x = e.i(71134),
            u = e.i(8509),
            f = e.i(88061),
            b = e.i(77439),
            y = e.i(11734),
            j = e.i(19230),
            w = e.i(15110),
            v = e.i(83390),
            S = e.i(73528),
            C = e.i(63635);
        e.i(8153);
        var N = e.i(34151),
            P = e.i(3251),
            k = e.i(3115),
            z = e.i(60814),
            R = e.i(90380),
            I = e.i(37515),
            _ = e.i(74975),
            $ = e.i(25635),
            A = e.i(82702),
            T = e.i(77067),
            W = e.i(54436),
            O = e.i(96117);
        let B = "web_v2/ring-pro/buy-v2",
            E = {
                [T.RingProColors.GOLD]: "gold",
                [T.RingProColors.SILVER]: "silver",
                [T.RingProColors.BLACK]: "black",
                [T.RingProColors.TITANIUM]: "titanium"
            };

        function M(e) {
            let i = E[e],
                t = [];
            for (let e = 1; e <= 4; e++) {
                let r = `${B}/carousel-v2/web/${i}/pro-${i}-${e}.png`,
                    n = `${B}/carousel-v2/mobile/${i}/pro-${i}-${e}.png`;
                t.push({
                    src: `${r}/w_2000`,
                    srcResponsive: `${n}/w_1000`,
                    thumb: `${r}/w_75,h_48`,
                    objectPositionBottom: !1,
                    alt: ""
                })
            }
            return t
        }
        let U = {
                [T.RingProColors.GOLD]: M(T.RingProColors.GOLD),
                [T.RingProColors.SILVER]: M(T.RingProColors.SILVER),
                [T.RingProColors.BLACK]: M(T.RingProColors.BLACK),
                [T.RingProColors.TITANIUM]: M(T.RingProColors.TITANIUM)
            },
            V = "web_v2/ring-pro/buy-v2/thumbs",
            D = {
                [T.RingProColors.GOLD]: "gold",
                [T.RingProColors.SILVER]: "silver",
                [T.RingProColors.BLACK]: "black",
                [T.RingProColors.TITANIUM]: "titanium"
            };
        var L = e.i(56560),
            F = e.i(46737),
            Y = e.i(1814),
            K = e.i(91898),
            H = e.i(78198),
            G = e.i(57232),
            X = e.i(27260),
            q = e.i(59207),
            J = e.i(21666),
            Q = e.i(2100),
            Z = e.i(57134),
            ee = e.i(50687),
            ei = e.i(84915),
            et = e.i(49767),
            er = e.i(79546),
            en = e.i(17162),
            ea = e.i(62360),
            eo = e.i(28104),
            el = e.i(19231);
        let es = (0, z.default)(({
            className: e,
            children: t,
            ctaText: r,
            ctaOnClick: n
        }) => (0, i.jsxs)("div", {
            className: e,
            onClick: e => e.stopPropagation(),
            "aria-hidden": "true",
            children: [(0, i.jsx)("div", {
                className: "children-container",
                children: t
            }), r && r.length ? (0, i.jsx)("div", {
                className: "sticky-container",
                children: (0, i.jsx)("button", {
                    onClick: n,
                    children: r
                })
            }) : null]
        })).withConfig({
            displayName: "ImageModal",
            componentId: "sc-a458bc89-0"
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
`, ec = (0, z.default)(({
            className: e,
            data: t
        }) => t.length < 1 ? null : (0, i.jsxs)("div", {
            className: e,
            children: [(0, i.jsx)("h3", {
                children: "Your best deal awaits"
            }), (0, i.jsx)("div", {
                className: "content",
                children: t.map((e, r) => (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsxs)("div", {
                        className: "offer",
                        children: [e.image && e.image.length > 0 ? (0, i.jsx)("div", {
                            className: "image-container ",
                            children: e.image.map((e, t) => (0, i.jsx)(J.CustomImage, {
                                src: e,
                                alt: "offer-icon",
                                height: "40",
                                width: "40"
                            }, t))
                        }) : null, (0, i.jsx)("p", {
                            className: "offer-text",
                            children: e.title
                        })]
                    }, r), r !== t.length - 1 ? (0, i.jsx)("div", {
                        className: "separator"
                    }) : null]
                }))
            })]
        })).withConfig({
            displayName: "PrimaryOffers__PrimaryOffersModalData",
            componentId: "sc-d8993f5a-0"
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
`, ed = (0, z.default)(({
            className: e,
            data: t
        }) => t.length < 1 ? null : (0, i.jsx)("div", {
            className: e,
            children: (0, i.jsx)(el.Container, {
                children: (0, i.jsx)("div", {
                    className: "deals",
                    children: t.map((e, t) => (0, i.jsxs)("div", {
                        className: "deal",
                        children: [e.image && e.image.length > 0 ? (0, i.jsx)("div", {
                            className: "image-container ",
                            children: e.image.map((e, t) => (0, i.jsx)(J.CustomImage, {
                                src: e,
                                alt: "",
                                height: "40",
                                width: "40"
                            }, t))
                        }) : null, (0, i.jsx)("p", {
                            className: "deal-text",
                            children: e.title
                        })]
                    }, t))
                })
            })
        })).withConfig({
            displayName: "PrimaryOffers",
            componentId: "sc-d8993f5a-1"
        })
        `
  background: ${({$transparent:e,$backgroundColor:i})=>e?"transparent":i||"#fff"};
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
`, ep = (0, z.default)(({
            className: e,
            data: t
        }) => {
            let [r, a] = (0, n.useState)(0);
            (0, n.useEffect)(() => {
                let e = setInterval(() => {
                    a(e => e < t.length - 1 ? e + 1 : 0)
                }, 5e3);
                return () => clearInterval(e)
            }, [t]);
            let o = (0, n.useContext)(P.OffersModalNewContext);
            return (0, i.jsx)("div", {
                className: e,
                children: (0, i.jsxs)(el.Container, {
                    style: {
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center"
                    },
                    children: [(0, i.jsx)("div", {
                        className: "deals",
                        children: t.map((e, t) => (0, i.jsxs)("div", {
                            className: `deal ${r===t?"visible":""}`,
                            children: [e.image && e.image.length > 0 ? (0, i.jsx)("div", {
                                className: "image-container ",
                                children: e.image.map((e, t) => (0, i.jsx)(J.CustomImage, {
                                    src: e,
                                    alt: "",
                                    height: "40",
                                    width: "40"
                                }, t))
                            }) : null, (0, i.jsx)("p", {
                                className: "deal-text",
                                children: e.title
                            })]
                        }, t))
                    }), t.length > 1 ? (0, i.jsx)("button", {
                        className: "see-all",
                        onClick: () => {
                            o.set((0, i.jsx)(es, {
                                children: (0, i.jsx)(ec, {
                                    data: t
                                })
                            })), o.show()
                        },
                        children: "See all"
                    }) : null]
                })
            })
        }).withConfig({
            displayName: "PrimaryOffers__PrimaryOffersTransitionTile",
            componentId: "sc-d8993f5a-2"
        })
        `
  position: relative;
  margin-bottom: ${({$compact:e})=>e?"0":"1.6rem"};
  background: ${({$transparent:e,backgroundColor:i})=>e?"transparent":i||"#eee"};
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
        var eg = e.i(81694),
            eh = e.i(48335),
            em = e.i(26019),
            ex = e.i(13069),
            eu = e.i(75646),
            ef = e.i(79446);
        e.i(4336);
        var eb = e.i(1560),
            ey = e.i(86332),
            ej = e.i(61791);
        let ew = "web_v2/",
            ev = z.default.div.withConfig({
                displayName: "OtherProductsSection__ProductItem",
                componentId: "sc-abd04c16-0"
            })
        `
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 400px;
  content-visibility: auto;
  contain-intrinsic-size: 460px;
  border: none;
  box-shadow: ${({borderColor:e})=>e?`
        inset 0 0 0 1 px $ {
            e
        }
        `:"none"};
  background-clip: padding-box;
  background-image: url(${({backgroundImage:e})=>e});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;

  @media (max-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    // min-height: 500px;
  }

  @media (min-width: ${({theme:e})=>e.globalV2.xxl.minWidth}) {
    // min-height: 640px;
  }
`, eS = z.default.div.withConfig({
            displayName: "OtherProductsSection__ProductContent",
            componentId: "sc-abd04c16-1"
        })
        `
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 24px;
  display: flex;
  flex-direction: column;
  // text-align: center;
  background: transparent;
  z-index: 2;
  gap: 4px;

  @media (max-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    padding: 20px;
    text-align: left;
  }
`, eC = z.default.h3.withConfig({
            displayName: "OtherProductsSection__ProductTitle",
            componentId: "sc-abd04c16-2"
        })
        `
  color: ${({textColor:e})=>e||"#FFF"};
  // text-align: center;
  text-shadow: 0 0 1px rgba(0, 0, 0, 0.25);
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  letter-spacing: -1.12px;
  margin: 0;

  @media (max-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    font-size: 24px;
    letter-spacing: -0.48px;
    text-align: left;
  }
`, eN = z.default.p.withConfig({
            displayName: "OtherProductsSection__ProductDescription",
            componentId: "sc-abd04c16-3"
        })
        `
  color: ${({descriptionColor:e,textColor:i})=>e||i||"#FFF"} !important;
  text-align: left !important;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  letter-spacing: -0.64px;
  margin: 0;
  flex-grow: 1;

  @media (max-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    font-size: 14px;
    // text-align: left !important;
  }
`, eP = z.default.div.withConfig({
            displayName: "OtherProductsSection__ProductActions",
            componentId: "sc-abd04c16-4"
        })
        `
  margin-top: 12px;
  display: flex;
  gap: 12px;
  justify-content: flex-start;

  @media (max-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    gap: 8px;
    justify-content: flex-start;
  }
`, ek = (0, z.default)(({
            className: e,
            title: t,
            subtitle: r
        }) => {
            let n = [{
                id: "blood-vision",
                title: "Blood Vision",
                description: "Advanced blood testing of 100+ biomarkers.",
                textColor: "#ffffff",
                styling: {
                    descriptionColor: "#ffffff"
                },
                image: `${ew}ring-buy/other-products-section/bv-product-thumb.png`,
                cta: {
                    variant: "white",
                    label: "Book test",
                    href: "/blood-vision/buy",
                    "data-buttontype": "bloodvision_features_products_buy_button"
                }
            }, {
                id: "home-monitor",
                title: "Home Monitor",
                description: "A quiet yet powerful sleep monitor to help you rest better.",
                textColor: "#000000",
                styling: {
                    descriptionColor: "#000000",
                    borderColor: "rgba(0,0,0,0.1)"
                },
                image: `${ew}ring-buy/other-products-section/home-product-thumb-2.png`,
                cta: {
                    variant: "blue",
                    label: "Buy now",
                    href: "/home/buy/",
                    "data-buttontype": "home_features_products_buy_button"
                }
            }];
            return (0, i.jsx)("section", {
                className: e,
                children: (0, i.jsxs)(el.Container, {
                    children: [(0, i.jsx)("h2", {
                        children: t
                    }), (0, i.jsx)("p", {
                        children: r
                    }), (0, i.jsx)("div", {
                        className: "cards-container",
                        children: n.map(e => (0, i.jsx)(ev, {
                            borderColor: e.styling ? .borderColor,
                            backgroundImage: (0, H.getCompressedAssetUrl)(e.image ? .startsWith("/") ? e.image : `/${e.image}`),
                            children: (0, i.jsxs)(eS, {
                                children: [(0, i.jsx)(eC, {
                                    textColor: e.textColor || e.styling ? .textColor,
                                    children: e.title
                                }), (0, i.jsx)(eN, {
                                    textColor: e.textColor,
                                    descriptionColor: e.styling ? .descriptionColor,
                                    children: e.description
                                }), (e.cta || e.ctaAlt) && (0, i.jsxs)(eP, {
                                    children: [e.cta && (0, i.jsx)(ey.ButtonV2, {
                                        variant: "blue",
                                        ...e.cta,
                                        children: e.cta.label
                                    }), e.ctaAlt && (0, i.jsx)(ey.ButtonV2, {
                                        variant: "transparentLight",
                                        ...e.ctaAlt,
                                        children: e.ctaAlt.label
                                    })]
                                })]
                            })
                        }, e.id))
                    })]
                })
            })
        }).withConfig({
            displayName: "OtherProductsSection__OtherProductSection",
            componentId: "sc-abd04c16-5"
        })
        `
  ${ea.sectionMargin}
  margin-top: 0 !important;

  ${ej.sectionPadding}
  background-color: #fafafa;

  ${el.Container} {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    align-items: center;
  }

  h2 {
    color: #000;
    font-size: 22px;
    text-align: center;
    font-style: normal;
    font-weight: 500;
    line-height: 100%; /* 28px */
    letter-spacing: -0.84px;

    @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
      font-size: 28px;
    }
  }

  p {
    color: #000;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 19.2px */
    letter-spacing: -0.48px;

    @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
      font-size: 16px;
    }
  }

  .cards-container {
    display: flex;
    gap: 16px;
    width: 100%;
    margin-top: 32px;

    /* Desktop: horizontal layout */
    @media (min-width: ${({theme:e})=>e.globalV2.md.minWidth}) {
      flex-direction: row;
      justify-content: center;

      ${ev} {
        flex: 1;
        max-width: 500px;

        &:first-child {
          flex: 1.5;
          max-width: 650px;
        }
      }
    }

    /* Mobile: vertical layout */
    @media (max-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
      flex-direction: column;
      align-items: center;
      gap: 12px;
    }
  }
`;
        var ez = e.i(53147),
            eR = e.i(62977),
            eI = e.i(49317),
            e_ = e.i(61102),
            e$ = e.i(86774),
            eA = e.i(32811),
            eT = e.i(99200);
        let eW = z.default.div.withConfig({
            displayName: "ProductSelectionSection__PanelContainer",
            componentId: "sc-3d48f10f-0"
        })
        `
  ${Q.gridMixin}
`, eO = z.keyframes `
  from {
    opacity: 0;
    height: 0;
  } to {
    opacity: 1;
    height: 90px;
  }
`, eB = z.default.div.withConfig({
            displayName: "ProductSelectionSection__LeftPanel",
            componentId: "sc-3d48f10f-1"
        })
        `
  grid-column: 2 / -2;
  position: relative;
  @media (min-width: ${({theme:e})=>e.global.phone.maxWidth}) {
    height: 100%;
    grid-column: 1 / 7;
  }

  @media (min-width: ${({theme:e})=>e.globalV2.xxl.minWidth}) {
    grid-column: 1 / 7;
  }
  @media (min-width: 1700px) {
    grid-column: 1 / 8;
  }
`, eE = z.default.div.withConfig({
            displayName: "ProductSelectionSection__RightPanel",
            componentId: "sc-3d48f10f-2"
        })
        `
  grid-column: 2 / -2;
  position: relative;

  display: flex;
  flex-direction: column;

  @media (min-width: ${({theme:e})=>e.global.phone.maxWidth}) {
    grid-column: 7 / 11;
    padding-right: 48px;
  }

  @media (min-width: ${({theme:e})=>e.globalV2.xxl.minWidth}) {
    grid-column: 7 / 11;
  }

  @media (min-width: 1700px) {
    grid-column: 8 / 11;
  }
`, eM = (0, z.default)(({
            className: e,
            title: t,
            buySectionTitle: r,
            description: o,
            emiCopies: l,
            secondaryOfferData: s,
            offersData: c,
            defaultStrikedPrice: d,
            defaultOfferText: p,
            defaultOfferDiscount: g,
            offersBackgroundColor: h,
            dealsBackgroundColor: m
        }) => {
            let {
                width: x
            } = (0, G.useWindowSize)(), u = (0, n.useContext)(F.GlobalUIContext), {
                color: f,
                notServicable: b,
                uhxFirstOnly: y
            } = (0, n.useContext)(a.RingProSelectionContext);
            return (0, i.jsx)("section", {
                className: e,
                children: (0, i.jsx)(P.OffersModalNewProvider, {
                    children: (0, i.jsxs)("div", {
                        className: "content",
                        children: [(0, i.jsx)(eg.TitleBar, {
                            title: t || "Ultrahuman Ring PRO"
                        }), b ? (0, i.jsx)(ek, {
                            title: y ? "Available for Ultrahuman X members first" : "Ring PRO isn't available in the U.S. right now",
                            subtitle: y ? "Opens for everyone in 24 hours." : "Meanwhile, discover Ultrahuman products built to help you unlock better health."
                        }) : null, !b && c && (x > ee.PHONE_MAX_WIDTH_IN_PX ? (0, i.jsx)(ed, {
                            data: c,
                            $backgroundColor: h,
                            $dealsBackgroundColor: m
                        }) : (0, i.jsx)(ep, {
                            data: c,
                            backgroundColor: h,
                            dealsBackgroundColor: m
                        })), (0, i.jsxs)(eW, {
                            style: {
                                filter: b ? "grayscale(1)" : void 0
                            },
                            children: [x > ee.PHONE_MAX_WIDTH_IN_PX && (0, i.jsx)(eB, {
                                children: (0, i.jsx)(eU, {
                                    $headerVisible: u ? .headerVisible ? ? !0,
                                    children: (0, i.jsx)("div", {
                                        children: (0, i.jsx)(eo.ProductCarousel, {
                                            items: [...(f ? U[f] : U[T.RingProColors.GOLD]) ? ? []],
                                            sticky: !0,
                                            navigationType: "cursorTracked"
                                        })
                                    })
                                })
                            }), (0, i.jsx)(eE, {
                                children: (0, i.jsx)(eG, {
                                    buySectionTitle: r,
                                    description: o,
                                    emiCopies: l,
                                    secondaryOfferData: s,
                                    offersData: c,
                                    defaultStrikedPrice: d,
                                    defaultOfferText: p,
                                    defaultOfferDiscount: g
                                })
                            })]
                        })]
                    })
                })
            })
        }).withConfig({
            displayName: "ProductSelectionSection",
            componentId: "sc-3d48f10f-3"
        })
        `
  ${Q.gridMixin}
  background-color: ${({bgColor:e})=>e||"transparent"};
  padding-top: ${(0,C.isMarketingBannerActive)()?"110px":"48px"};

  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    padding-top: ${(0,C.isMarketingBannerActive)()?"80px":"48px"};
  }

  & .content {
    width: 100%;
    grid-column: 1 / -1;
  }
`, eU = z.default.div.withConfig({
            displayName: "ProductSelectionSection__StickyPanel",
            componentId: "sc-3d48f10f-4"
        })
        `
  position: sticky;
  top: ${e=>e.$headerVisible?"80px":"20px"};
  transition: top 0.3s ease-in-out;
  padding-left: 16px;
`, eV = (0, z.default)(({
            className: e
        }) => {
            let {
                t: r
            } = (0, t.useTranslation)("ring"), {
                width: n
            } = (0, G.useWindowSize)();
            return (0, i.jsxs)("div", {
                className: e,
                children: [(0, i.jsx)("h2", {
                    children: r("ring.productSelection.sizingSection.modalNew.title")
                }), (0, i.jsx)("p", {
                    children: "Ultrahuman Ring PRO uses custom sizes, distinct from standard smart ring and market sizes. A precise fit is essential for accurate data tracking and comfort."
                }), (0, i.jsxs)("ol", {
                    children: [(0, i.jsxs)("li", {
                        children: [(0, i.jsx)(b.ShoppingTrolley, {}), (0, i.jsxs)("h5", {
                            children: [(0, i.jsx)("span", {
                                children: r("ring.productSelection.sizingSection.modalNew.stepA.step")
                            }), " ", r("ring.productSelection.sizingSection.modalNew.stepA.title")]
                        }), (0, i.jsx)("p", {
                            children: r("ring.productSelection.sizingSection.modalNew.stepA.subTitle")
                        })]
                    }), (0, i.jsxs)("li", {
                        children: [(0, i.jsx)(l.BoxOutline, {
                            fill: "#000000"
                        }), (0, i.jsxs)("h5", {
                            children: [(0, i.jsx)("span", {
                                children: r("ring.productSelection.sizingSection.modalNew.stepB.step")
                            }), " ", r("ring.productSelection.sizingSection.modalNew.stepB.title")]
                        }), (0, i.jsx)("p", {
                            children: r("ring.productSelection.sizingSection.modalNew.stepB.subTitle")
                        })]
                    }), (0, i.jsxs)("li", {
                        children: [(0, i.jsx)(g.HandWithRing, {}), (0, i.jsxs)("h5", {
                            children: [(0, i.jsx)("span", {
                                children: r("ring.productSelection.sizingSection.modalNew.stepC.step")
                            }), " ", r("ring.productSelection.sizingSection.modalNew.stepC.title")]
                        }), (0, i.jsxs)("p", {
                            children: [r("ring.productSelection.sizingSection.modalNew.stepC.subTitle"), " ", (0, i.jsxs)(ez.default, {
                                target: "_blank",
                                href: "/sizing",
                                style: {
                                    textDecoration: "underline"
                                },
                                children: [r("ring.productSelection.sizingSection.modalNew.stepC.HERE"), " "]
                            }), ". ", r("ring.productSelection.sizingSection.modalNew.stepC.endText")]
                        })]
                    }), (0, i.jsxs)("li", {
                        children: [(0, i.jsx)(p.CircleTick, {}), (0, i.jsxs)("h5", {
                            children: [(0, i.jsx)("span", {
                                children: r("ring.productSelection.sizingSection.modalNew.stepD.step")
                            }), " ", r("ring.productSelection.sizingSection.modalNew.stepD.title")]
                        }), (0, i.jsx)("p", {
                            children: r("ring.productSelection.sizingSection.modalNew.stepD.subTitle")
                        })]
                    })]
                }), (0, i.jsxs)(ez.default, {
                    className: "video",
                    target: "_blank",
                    href: "https://www.youtube.com/watch?v=t9ca-Lq70q4",
                    children: [(0, i.jsx)(J.CustomImage, {
                        width: 540,
                        height: 270,
                        alt: "Sizing Kit Video",
                        src: n < 900 ? "web_v2/ring-buy/thumbnail_desktop.png" : "web_v2/ring-buy/thumbnail_mobile.png"
                    }), "Watch our video tutorial for quick guidance"]
                }), (0, i.jsx)("hr", {}), (0, i.jsxs)("p", {
                    className: "disclaimer",
                    children: [r("ring.productSelection.sizingSection.modalNew.disclaimer"), " ", (0, i.jsx)("a", {
                        href: "mailto:support@ultrahuman.com",
                        children: "support@ultrahuman.com"
                    }), "."]
                })]
            })
        }).withConfig({
            displayName: "ProductSelectionSection__SizeInfoModal",
            componentId: "sc-3d48f10f-5"
        })
        `
  width: 100%;
  padding: 52px 24px;

  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    min-width: 600px;
    max-width: 600px;
  }

  h2 {
    font-size: 3.2rem;
    font-weight: 500;
    margin-bottom: 0.8rem;
  }

  p {
    font-size: 1.7rem;
  }

  ol {
    list-style-type: none;
    counter-reset: my-awesome-counter;
    padding: 0;
    margin: 0;
    margin: 3.2rem 0;

    li {
      margin-bottom: 24px;
    }

    svg {
      width: 32px;
      height: 32px;
    }

    h5 {
      font-size: 2rem;
      font-style: normal;
      font-weight: 500;
      line-height: 130%; /* 26px */
      letter-spacing: -0.8px;
    }

    p {
      color: #000;
      font-size: 1.6rem;
      font-style: normal;
      font-weight: 400;
      line-height: 140%; /* 22.4px */
      letter-spacing: -0.72px;
    }
  }

  a.video {
    width: 100%;
    display: flex;
    gap: 16px;
    flex-direction: column;
    padding: 6px;
    align-items: center;
    border-radius: 16px;
    background: #eeeeee;
    text-align: center;
    padding: 12px 12px;

    color: rgba(0, 0, 0, 0.8);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 110%; /* 15.4px */
    letter-spacing: -0.56px;

    @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
      padding: 6px;
      flex-direction: row;
      gap: 24px;
      text-align: left;
      font-size: 16px;
    }

    &:hover {
      img {
        transform: translateX(4px);
      }
    }

    img {
      width: 100%;
      height: auto;
      border-radius: 12px;
      transition: all 0.2s ease-in-out;

      @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
        width: 150px;
      }
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
`, eD = (0, z.default)(({
            className: e,
            ...t
        }) => (0, i.jsxs)("button", {
            className: e,
            ...t,
            children: ["Learn more", (0, i.jsx)(eb.CircledArrow, {})]
        })).withConfig({
            displayName: "ProductSelectionSection__LearnMoreButton",
            componentId: "sc-3d48f10f-6"
        })
        `
  border-radius: 100px !important;
  background: #eee !important;
  padding: 8px 16px !important;
  border: none !important;
  width: fit-content !important;
  font-weight: 500 !important;
  font-size: 1.4rem !important;
  display: flex;
  align-items: center;
  gap: 8px;

  svg {
    width: 16px;
    height: 16px;
    display: inline-block;
  }
`, eL = (0, z.default)(({
            className: e
        }) => {
            let [t, r] = (0, n.useState)("gold"), a = "charger-learn-more-tab-gold", o = "charger-learn-more-tab-black", l = "charger-learn-more-panel", s = (0, n.useCallback)(e => {
                "ArrowLeft" === e.key ? (e.preventDefault(), r(e => "black" === e ? "gold" : e)) : "ArrowRight" === e.key && (e.preventDefault(), r(e => "gold" === e ? "black" : e))
            }, []);
            return (0, i.jsx)("div", {
                className: e,
                role: "dialog",
                "aria-modal": "true",
                "aria-labelledby": "charger-learn-more-title",
                children: (0, i.jsxs)(eT.InfoModalContainer, {
                    children: [(0, i.jsx)(eT.InfoModalTitle, {
                        children: (0, i.jsx)("h3", {
                            id: "charger-learn-more-title",
                            children: "Ring Pro charger"
                        })
                    }), (0, i.jsx)(eT.InfoModalDescription, {
                        children: (0, i.jsx)("p", {
                            children: "Compact, durable, and lightweight design tailored for your active lifestyle."
                        })
                    }), (0, i.jsxs)("div", {
                        className: "charger-modal-tabs",
                        role: "tablist",
                        "aria-label": "Charging case options",
                        tabIndex: 0,
                        onKeyDown: s,
                        children: [(0, i.jsx)("button", {
                            type: "button",
                            role: "tab",
                            id: a,
                            "aria-selected": "gold" === t ? "true" : "false",
                            "aria-controls": l,
                            tabIndex: "gold" === t ? 0 : -1,
                            className: "gold" === t ? "active" : void 0,
                            onClick: () => r("gold"),
                            children: "Gold charging case"
                        }), (0, i.jsx)("button", {
                            type: "button",
                            role: "tab",
                            id: o,
                            "aria-selected": "black" === t ? "true" : "false",
                            "aria-controls": l,
                            tabIndex: "black" === t ? 0 : -1,
                            className: "black" === t ? "active" : void 0,
                            onClick: () => r("black"),
                            children: "Black charging case"
                        })]
                    }), (0, i.jsxs)("div", {
                        id: l,
                        role: "tabpanel",
                        "aria-labelledby": "gold" === t ? a : o,
                        children: [(0, i.jsx)("div", {
                            className: "charger-modal-img",
                            children: (0, i.jsx)("img", {
                                src: (0, H.getCompressedAssetUrl)(`/web_v2/ring-pro/buy-v2/case/${t}-1.png/w_1200`),
                                alt: "gold" === t ? "Gold charging case closed" : "Black charging case closed",
                                loading: "lazy"
                            })
                        }), (0, i.jsx)("div", {
                            className: "charger-modal-img",
                            children: (0, i.jsx)("img", {
                                src: (0, H.getCompressedAssetUrl)(`/web_v2/ring-pro/buy-v2/case/${t}-2.png/w_1200`),
                                alt: "gold" === t ? "Gold charging case open" : "Black charging case open",
                                loading: "lazy"
                            })
                        })]
                    })]
                })
            })
        }).withConfig({
            displayName: "ProductSelectionSection__ChargerLearnMoreModal",
            componentId: "sc-3d48f10f-7"
        })
        `
  width: 100%;
  padding: 52px 24px;
  @media (min-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
    width: 700px;
  }

  .charger-modal-tabs {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    margin-top: 8px;
    margin-bottom: 24px;

    button {
      flex: 1 1 50%;
      min-width: 0;
      background: none;
      border: none;
      color: rgba(0, 0, 0, 0.3);
      padding: 12px 20px;
      font-size: 1.6rem;
      font-weight: 500;
      transition: all 0.2s ease-in-out;
      cursor: pointer;
      white-space: normal;
      letter-spacing: -0.3px;
      text-align: center;

      &.active {
        color: rgba(0, 0, 0, 1);
        box-shadow: 0px -1.5px 0px 0px rgba(0, 0, 0, 1) inset;
      }
    }
  }

  .charger-modal-img {
    width: 100%;
    aspect-ratio: 402 / 211.38;
    border-radius: 16px;
    overflow: hidden;
    margin-bottom: 16px;
    background: rgba(0, 0, 0, 0.04);
  }

  .charger-modal-img img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    vertical-align: middle;
  }

  .charger-modal-caption {
    color: #000;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    letter-spacing: -0.56px;
    margin: 0;
  }
`, eF = (0, z.default)((0, n.forwardRef)(({
            className: e,
            title: t,
            subTitle: r,
            subText: n,
            openInfoModal: a,
            openInfoModalText: o,
            children: l,
            childClass: s,
            sectionClass: c,
            show: d,
            hsaFsaBadge: p
        }, g) => (0, i.jsxs)("div", {
            ref: g,
            className: `${e} ${d?"show":""}  ${c??""}`,
            children: [t ? (0, i.jsxs)("div", {
                className: "section-row-title",
                children: [(0, i.jsxs)("h5", {
                    children: [t, " ", (0, i.jsx)("span", {
                        className: "subtitle",
                        children: r
                    })]
                }), a ? (0, i.jsxs)("button", {
                    onClick: a,
                    children: [o ? null : (0, i.jsx)(h.InfoIcon, {
                        style: {
                            width: "1.6rem",
                            height: "auto",
                            marginTop: "1px"
                        },
                        fill: "#000"
                    }), o || null]
                }) : null]
            }) : null, n ? (0, i.jsx)("p", {
                className: "section-row-sub-title",
                children: n
            }) : null, p ? (0, i.jsx)("div", {
                className: "hsa-fsa-badge",
                children: (0, i.jsx)(et.FSAHSAComponent, {})
            }) : null, (0, i.jsx)("div", {
                className: `section-row-content ${s}`,
                children: l
            })]
        }))).withConfig({
            displayName: "ProductSelectionSection__Section",
            componentId: "sc-3d48f10f-8"
        })
        `
  padding: 6.4rem 0;
  opacity: 0.6;
  transition: opacity 0.3s ease;
  // border-top: 1px solid rgba(0, 0, 0, 0.07);
  letter-spacing: -0.04em;

  @media (min-width: ${({theme:e})=>e.global.phone.maxWidth}) {
    padding: 6.4rem 0;
  }
  @media (max-width: ${({theme:e})=>e.global.phone.maxWidth}) {
    &.size-section {
      border-top: none;
    }
  }

  &.show {
    display: block;
    opacity: 1;
  }

  .hsa-fsa-badge {
    margin-top: 8px;
  }

  .section-row-title {
    display: flex;
    align-items: start;
    justify-content: space-between;
    flex-dierection: column;

    button {
      background: transparent;
      border: none;
      color: #ffffff;
      font-size: 1.6rem;
      font-weight: 500;
      padding: 0 8px;
      cursor: pointer;
      white-space: nowrap;
      ${({openInfoModalText:e,theme:i})=>e?`
        display: inline - block;
        color: #000000;
        padding: 4px 8px;
        border-radius: 24px;
        transform: translateY(-6px);
        font-size: 1.4rem;
        border: 1px solid rgba(0,0,0,0.2);


        @media (min-width: ${i.globalV2.md.maxWidth}) {
          transform: translateY(0);
          padding: 4px 12px;
        }
      `:""}
    }

    h5 {
      font-size: 2rem;
      line-height: 120%;
    }

    span {
      color: # 8 d8d8d;
    }
}

.section - row - sub - title {
    color: rgba(0, 0, 0, 0.5);
    font - size: 14 px;
    font - weight: 400;
    line - height: 110 % ; /* 15.4px */
    letter - spacing: -0.28 px;
    margin - top: 7 px;
}
`;eF.displayName="Section";let eY=z.default.hr.withConfig({displayName:"ProductSelectionSection__Separator",componentId:"sc-3d48f10f-9"})`
width: 100 % ; margin: $ {
    ({
        size: e = "lg"
    }) => ({
        sm: "16px",
        md: "24px",
        lg: "32px",
        xl: "48px"
    })[e]
}
0; background: $ {
    ({
        transparent: e
    }) => e ? "none" : "initial"
}; border: $ {
    ({
        transparent: e
    }) => e ? "none" : "0.5px solid rgba(0, 0, 0, 0.1)"
};
`,eK=(0,z.default)(({title:e,description:t,image:r,children:n,className:a})=>(0,i.jsxs)("div",{className:a,children:[(0,i.jsxs)("div",{className:"subsection-header",children:[r?(0,i.jsx)("div",{className:"image-container",children:(0,i.jsx)(J.CustomImage,{src:r,alt:e,height:"64",width:"64"})}):null,(0,i.jsxs)("div",{className:"text-container",children:[(0,i.jsx)("h4",{className:"subsection-title",children:e}),t?(0,i.jsx)("p",{className:"subsection-description",children:t}):null]})]}),(0,i.jsx)("div",{className:"ultrahumanx-content",children:n})]})).withConfig({displayName:"ProductSelectionSection__PowerPlugSubsection",componentId:"sc-3d48f10f-10"})`
.subsection - header {
    margin - bottom: 1.5 rem;
    display: flex;
    flex - direction: row;
    gap: 12 px;

    &
    > .image - container {
        flex - shrink: 0;
    }
}

.subsection - title {
    font - size: 1.6 rem;
    font - weight: 500;
    color: #000000;
    margin: 0;
  }

  .subsection-description {
    color: rgba(0, 0, 0, 0.5);
    font-size: 1.5rem;
    line-height: 140%; /* 21px */
    letter-spacing: -0.6px;
  }

  .ultrahumanx-content {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    button.no-ultrahumanx strong {
      font-weight: 500;
    }
  }
`,eH= z.default.button.withConfig({
        displayName: "ProductSelectionSection__LargePromptBtnStyledContent",
        componentId: "sc-3d48f10f-11"
    })
    `
  display: flex;
  flex-direction: column;
  position: relative;

  &:disabled {
    opacity: 0.5;
  }

  &.pb {
    padding-bottom: 8px;
  }

  &.paddingTop {
    padding-top: 20px;
  }

  &.active {
    .label {
      background: #fff;
    }
  }

  .label {
    color: #000;
    position: absolute;
    top: 0;
    left: 0;
    padding: 6px 19px;
    border-radius: 7px 0px 12px 0px;
    background: #eee;
    font-size: 10px;
    font-weight: 500;
    line-height: 130%; /* 13px */
    letter-spacing: 2.1px;
    text-transform: uppercase;
  }

  .content-wrapper {
    padding: 16px;
    text-align: left;
    display: flex;
    gap: 8px;
    width: 100%;

    & .content {
      width: 100%;
    }

    img {
      border-radius: 8px;
    }
  }

  .tag {
    background: rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding: 4px 8px;
    width: fit-content;
  }

  .title-bar {
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: -0.64px;

    &.mb {
      margin-bottom: 8px;
    }

    & .title {
      line-height: 120%;
      display: flex;
      flex-direction: column;
    }

    .disclaimer {
      display: flex;
      flex-direction: column;
      // gap: 4px;
      .disclaimer-text {
        // color: var(--text-grey);
        font-size: 14px;
        font-weight: 400;
        letter-spacing: -0.28px;
      }

      .price-display {
        display: flex;
        gap: 8px;

        .striked {
          color: rgba(0, 0, 0, 0.4);
          text-decoration: line-through;
        }
      }
    }

    .price {
      line-height: 100%;
      text-align: right;
      color: black;
      span {
        font-style: normal;
        font-weight: 400;
        color: var(--text-grey);
      }
    }
  }

  & .description {
    font-size: 16px;
    line-height: 130%;

    color: var(--text-grey);
    margin-bottom: 12px;
  }

  .list {
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-size: 13px;
    line-height: 130%;

    // color: var(--text-grey);
    & > p {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 14px;
      font-weight: 400;
      letter-spacing: -0.28px;
    }
  }

  .footer-info {
    font-size: 12px;
    line-height: 130%;
    color: var(--text-grey);
    margin-top: 32px;
  }

  &.ultrahumanx {
    .title-bar .title {
      color: #000;
      font-size: 16px;
      line-height: 120%; /* 19.2px */
      letter-spacing: -0.64px;
      font-weight: 400;
    }
  }
  strong {
    font-weight: 500;
  }
`, eG = (0, z.default)(({
        className: e,
        emiCopies: l,
        secondaryOfferData: p,
        offersData: g,
        description: b,
        buySectionTitle: C = "Ultrahuman Ring PRO",
        defaultStrikedPrice: P = !1,
        defaultOfferText: B,
        defaultOfferDiscount: E
    }) => {
        let {
            region: M
        } = (0, n.useContext)(k.RegionLocaleContext), F = (0, r.useRouter)(), H = (0, n.useContext)(a.RingProSelectionContext), {
            store: Q,
            getCampaignForProduct: el
        } = (0, n.useContext)(er.CartContext), {
            resetCounter: es
        } = (0, eI.useRetouchFlowContext)(), ec = el("ring"), {
            width: ed
        } = (0, G.useWindowSize)(), ep = (0, n.useContext)(Z.ModalContext), {
            color: eg,
            setColor: ey,
            size: ej,
            setSize: ew,
            chargerCaseColor: ev,
            uhx: eS,
            uhxCart: eC,
            setUhxCart: eN,
            defaultCurrency: eP,
            engraving: ek,
            setEngraving: eT,
            engravingMessage: eW,
            setEngravingMessage: eO,
            checkout: eB,
            isLoading: eE,
            basePrice: eM,
            price: eU,
            effectivePrice: eG,
            currencySymbol: eX,
            ultraHumanPrice: eq,
            chargerPrice: eJ,
            shippingEstimate: eQ,
            affiliateDetails: eZ,
            affiliateDiscount: e0,
            referral: e1,
            setChargerCaseColor: e2,
            sectionRefs: e4,
            effectiveDiscount: e5,
            afibCart: e6,
            setAfibCart: e8,
            cardioAdaptibilityCart: e3,
            setCardioAdaptabilityCart: e7,
            cnoProCart: e9,
            setCnoProCart: ie,
            clueCart: ii,
            setClueCart: it,
            respiratoryCart: ir,
            setRespiratoryCart: ia,
            priceDrop: io,
            notServicable: il,
            notServicableMessage: is,
            isOpenSizeDisabled: ic,
            tradeInDevice: id,
            setTradeInDevice: ip,
            tradeInSerialNumber: ig,
            setTradeInSerialNumber: ih,
            tradeInCredit: im,
            tradeInMaxCredit: ix
        } = H;
        P || (P = eM > eU);
        let iu = (0, q.getEffectiveStoreForDiscount)(Q),
            {
                showSizeRef: ib,
                showChargerRef: iy,
                coverageRef: ij,
                powerplugRef: iw,
                cartSummaryRef: iv
            } = e4,
            iS = M && A.AfibCountryCodes.includes(M) && ![q.ShopifyStore.AE, q.ShopifyStore.IN].includes(Q) ? "afib" : "cardio",
            iC = M ? .toUpperCase() === "GB" || M ? .toUpperCase() === "IE",
            {
                getValue: iN
            } = (0, X.default)();
        (0, n.useEffect)(() => {
            let e = setTimeout(() => {
                iw ? .current && "cardio-powerplug" === F.query.ps && Q === q.ShopifyStore.US && iw.current.scrollIntoView({
                    behavior: "smooth"
                })
            }, 100);
            return () => {
                e && clearTimeout(e)
            }
        }, []);
        let iP = () => {
                ep.set((0, i.jsx)(eR.RespiratoryPricingModal, {})), ep.setPortal(!0), ep.show()
            },
            [ik, iz] = (0, n.useState)(!0 === ic),
            [iR, iI] = (0, n.useState)(!1),
            i_ = () => iI(!0),
            i$ = (0, n.useRef)(null),
            iA = (0, n.useRef)(null),
            {
                t: iT
            } = (0, t.useTranslation)("ring"),
            iW = {
                [T.RingProColors.GOLD]: {
                    image: `${V}/pro-${D[T.RingProColors.GOLD]}-thumb.png/w_400`,
                    name: iT("ring.productSelection.ringPro.GOLD") || "Bionic Gold",
                    tag: null
                },
                [T.RingProColors.SILVER]: {
                    image: `${V}/pro-${D[T.RingProColors.SILVER]}-thumb.png/w_400`,
                    name: iT("ring.productSelection.ringPro.SILVER") || "Space Silver",
                    tag: null
                },
                [T.RingProColors.BLACK]: {
                    image: `${V}/pro-${D[T.RingProColors.BLACK]}-thumb.png/w_400`,
                    name: iT("ring.productSelection.ringPro.BLACK") || "Aster Black",
                    tag: null
                },
                [T.RingProColors.TITANIUM]: {
                    image: `${V}/pro-${D[T.RingProColors.TITANIUM]}-thumb.png/w_400`,
                    name: iT("ring.productSelection.ringPro.TITANIUM") || "Raw Titanium",
                    tag: null
                }
            },
            iO = (0, n.useRef)(!1),
            iB = (0, n.useMemo)(() => i$.current && iA.current && ik ? iA.current.scrollHeight + 24 + "px" : "0px", [ik, ic]);
        (0, n.useEffect)(() => {
            i$.current && (i$.current.style.height = iB)
        }, [iB]), (0, n.useEffect)(() => {
            (F.query.affiliate || F.query.affiliateCode) && eN(null)
        }, [F.query]);
        let iE = {
                [eh.HeroCategoriesMap.ATHLETES]: (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(J.CustomImage, {
                        width: 24,
                        height: 24,
                        alt: "athlete-icon",
                        src: "web_v2/hero/hero-icons-green/Athlete.svg"
                    }), " ", "Athlete Savings Applied"]
                }),
                [eh.HeroCategoriesMap.SCIENTIST]: (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(J.CustomImage, {
                        width: 24,
                        height: 24,
                        alt: "science-icon",
                        src: "web_v2/hero/hero-icons-green/Science.svg"
                    }), " ", "Science Savings Applied"]
                }),
                [eh.HeroCategoriesMap.HEALTHCARE]: (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(J.CustomImage, {
                        width: 24,
                        height: 24,
                        alt: "healthcare-icon",
                        src: "web_v2/hero/hero-icons-green/Healthcare.svg"
                    }), " ", "Healthcare Savings Applied"]
                }),
                [eh.HeroCategoriesMap.EDUCATION]: (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(J.CustomImage, {
                        width: 24,
                        height: 24,
                        alt: "university-icon",
                        src: "web_v2/hero/hero-icons-green/University.svg"
                    }), "Education Savings Applied"]
                }),
                [eh.HeroCategoriesMap.VETERANS]: (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(J.CustomImage, {
                        width: 28,
                        height: 28,
                        alt: "veteran-icon",
                        src: "web_v2/hero/hero-icons-green/Veteran.svg"
                    }), " ", "Military Savings Applied"]
                })
            },
            iM = z.default.div.withConfig({
                displayName: "ProductSelectionSection__PriceContentContainer",
                componentId: "sc-3d48f10f-14"
            })
        `
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.8rem;

      // display: none;
    `, iU = z.default.div.withConfig({
            displayName: "ProductSelectionSection__NotServicableMessageContainer",
            componentId: "sc-3d48f10f-15"
        })
        `
      background: #f5f5f5;
      padding: 16px;
      border-radius: 12px;
      font-weight: 400;
      font-size: 1.4rem;

      color: rgba(0, 0, 0, 0.6);

      margin-top: 12px;

      display: flex;
      align-items: center;
      flex-direction: row;
      gap: 12px;
    `, iV = eM + (ek && Q ? A.EngravingPrice[Q] ? ? 0 : 0), iD = il ? is ? (0, i.jsxs)(iU, {
            children: [(0, i.jsx)(y.WarningTriangle, {
                fill: "rgba(0, 0, 0, 0.6)",
                style: {
                    width: "24px",
                    height: "24px"
                }
            }), is]
        }) : (0, i.jsx)(iU, {
            style: {
                justifyContent: "center",
                fontWeight: "500",
                fontSize: "1.6rem",
                color: "rgba(0, 0, 0, 0.6)",
                marginBottom: "24px"
            },
            children: "Currently Unavailable"
        }) : null;
        if (!Q) return null;
        let iL = (0, i.jsx)(eF, {
                title: iT("ring.productSelection.colorSectionTitle"),
                subTitle: iT("ring.productSelection.colorSectionSubTitle"),
                childClass: "color-section",
                show: !0,
                disableScrollToScreen: !0,
                sectionClass: "color-section",
                children: (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsx)("div", {
                        className: "colors",
                        children: Object.values(T.RingProColors).map((e, t) => {
                            let r = null;
                            return (0, i.jsxs)("button", {
                                style: {
                                    transitionDelay: `${.05*t}s`,
                                    transitionProperty: "opacity"
                                },
                                className: `gtm ${e==eg?"active":""}`,
                                "data-testid": `ring-color-${e}`,
                                "data-buttontype": "ring color selector",
                                "data-product": "Ultrahuman Ring PRO",
                                onClick: () => {
                                    ey(e)
                                },
                                children: [!il && r ? (0, i.jsx)("b", {
                                    className: "tag",
                                    children: r
                                }) : null, !0 === il ? (0, i.jsx)("b", {
                                    className: "tag",
                                    children: "Currently Unavailable"
                                }) : null, (0, i.jsx)(J.CustomImage, {
                                    width: 72,
                                    height: 72,
                                    src: iW[e].image,
                                    alt: e
                                }), iW[e].name]
                            }, t)
                        })
                    })
                })
            }),
            iF = (0, i.jsx)(eF, {
                title: iT("ring.productSelection.sizingSection.title"),
                subTitle: iT("ring.productSelection.sizingSection.subTitle"),
                childClass: "sizing-section",
                openInfoModal: () => {
                    ep.set((0, i.jsx)(eV, {})), ep.setPortal(!0), ep.show()
                },
                show: !!eg,
                disableScrollToScreen: !0,
                sectionClass: "size-section",
                ref: ib,
                children: (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(eH, {
                        className: `sizing-kit gtm pb ${ej==A.RingSizes.OPEN?"active":""}`,
                        "data-buttontype": "ring size selector",
                        "data-testid": "ring-size-open",
                        "data-product": "Ultrahuman Ring PRO",
                        onClick: () => {
                            ew(A.RingSizes.OPEN), iz(!1)
                        },
                        disabled: ic,
                        children: (0, i.jsxs)("div", {
                            className: "content-wrapper",
                            children: [(0, i.jsx)(J.CustomImage, {
                                src: "web_v2/ring-pro/buy-v2/thumbs/sizing-kit.png",
                                alt: "Sizing Kit",
                                width: "64",
                                height: "64",
                                loading: "lazy",
                                className: "sizing-kit-img"
                            }), (0, i.jsxs)("div", {
                                className: "content",
                                children: [(0, i.jsxs)("div", {
                                    className: "title-bar mb",
                                    children: [(0, i.jsxs)("div", {
                                        className: "title",
                                        children: [iT("ring.productSelection.sizingSection.sizingKitNew.title"), " "]
                                    }), (0, i.jsx)("div", {
                                        className: "disclaimer",
                                        children: (0, i.jsx)("div", {
                                            className: "price",
                                            children: ic ? "UNAVAILABLE" : iT("ring.FREE")
                                        })
                                    })]
                                }), (0, i.jsx)("p", {
                                    className: "sub-title",
                                    children: iT("ring.productSelection.sizingSection.sizingKitNew.subtitle")
                                }), (0, i.jsxs)("div", {
                                    className: "list",
                                    children: [(0, i.jsxs)("p", {
                                        children: [(0, i.jsx)(d.Checkmark, {
                                            className: "checkmark",
                                            fill: "#000000"
                                        }), iT("ring.productSelection.sizingSection.sizingKitNew.bullets.a")]
                                    }), (0, i.jsxs)("p", {
                                        children: [(0, i.jsx)(d.Checkmark, {
                                            className: "checkmark",
                                            fill: "#000000"
                                        }), iT("ring.productSelection.sizingSection.sizingKitNew.bullets.c")]
                                    }), (0, i.jsxs)("p", {
                                        children: [(0, i.jsx)(d.Checkmark, {
                                            className: "checkmark",
                                            fill: "#000000"
                                        }), iT("ring.productSelection.sizingSection.sizingKitNew.bullets.d")]
                                    })]
                                })]
                            })]
                        })
                    }), ic ? null : (0, i.jsxs)("button", {
                        className: "manual-size gtm",
                        onClick: () => {
                            ic ? iz(!0) : iz(e => !e)
                        },
                        "data-buttontype": "Ring Size Manual Show",
                        "data-product": "Ring Size Manual Show",
                        children: [iT("ring.productSelection.sizingSection.manualSizeText"), " ", (0, i.jsx)(s.CaretUp, {
                            fill: "#000000",
                            style: {
                                transition: "all 0.3s ease-in-out",
                                transform: ik ? "rotate(0deg) translateX(0px)" : "rotate(180deg) translateX(1px)",
                                height: "0.8rem"
                            }
                        })]
                    }), (0, i.jsx)("div", {
                        className: "manual-size-select-container ",
                        ref: i$,
                        style: {
                            height: ic && iA.current ? iA.current.scrollHeight + 24 + "px" : void 0
                        },
                        children: (0, i.jsxs)("div", {
                            className: "",
                            ref: iA,
                            children: [!0 !== il && eg ? (0, i.jsxs)("div", {
                                className: "size-shipping",
                                children: [(0, i.jsx)(f.ShippingBox, {}), (0, i.jsx)("p", {
                                    children: eQ
                                })]
                            }) : null, ic ? null : (0, i.jsx)("div", {
                                className: "size-shipping",
                                children: (0, i.jsx)("p", {
                                    children: iT("ring.productSelection.sizingSection.manualSizeSubText")
                                })
                            }), (0, i.jsx)("div", {
                                className: "sizes",
                                children: Object.values(A.RingSizes).filter(e => "number" == typeof e && e !== A.RingSizes.OPEN).map((e, t) => (0, i.jsx)("button", {
                                    style: {
                                        transitionDelay: `${.05*t}s`,
                                        transitionProperty: "opacity"
                                    },
                                    className: `gtm ${ej==e?"active":""}`,
                                    "data-buttontype": "ring size selector",
                                    "data-product": "Ultrahuman Ring PRO",
                                    "data-testid": `ring-size-${e}`,
                                    disabled: !(eg && W.RingProVariants[eg] ? .[e] ? .[(0, A.getEngravingKey)(ek)] ? .variantId[Q]),
                                    onClick: () => {
                                        ic && (() => {
                                            if (iO.current || ic) return;
                                            let e = z.default.button.withConfig({
                                                displayName: "ProductSelectionSection__DisclaimerButtons",
                                                componentId: "sc-3d48f10f-12"
                                            })
                                            `
        background: rgba(0, 0, 0, 1);
        border: none;
        border-radius: 100px;
        padding: 8px 16px;
        color: #ffffff;
        font-size: 17px;
        font-weight: 500;

        flex-grow: 1;

        &.secondary {
          background: rgba(255, 255, 255, 1);
          color: rgba(0, 0, 0, 1);
          border: 1px solid rgba(0, 0, 0, 1);
        }

        @media (min-width: ${({theme:e})=>e.globalV2.sm.maxWidth}) {
          padding: 8px 24px;
          font-size: 19px;
        }
      `, t = z.default.div.withConfig({
                                                displayName: "ProductSelectionSection__DisclaimerButtonContainer",
                                                componentId: "sc-3d48f10f-13"
                                            })
                                            `
        text-align: left;
        margin-top: 16px;
        display: flex;
        flex-direction: column;
        gap: 8px;

        @media (min-width: ${({theme:e})=>e.globalV2.sm.maxWidth}) {
          flex-direction: row;
        }
      `;
                                            ep.setCloseBtnHidden(!0), ep.set((0, i.jsxs)("div", {
                                                style: {
                                                    padding: "24px",
                                                    maxWidth: "500px",
                                                    width: "100%"
                                                },
                                                children: [(0, i.jsxs)("h2", {
                                                    style: {
                                                        fontWeight: "500",
                                                        fontSize: "24px",
                                                        letterSpacing: "-0.3px"
                                                    },
                                                    children: [(0, i.jsx)(y.WarningTriangle, {
                                                        fill: "#F2B534",
                                                        style: {
                                                            height: "17px",
                                                            width: "auto",
                                                            marginRight: "8px"
                                                        }
                                                    }), iT("ring.productSelection.sizeDisclaimerNew.title")]
                                                }), (0, i.jsxs)("p", {
                                                    style: {
                                                        fontSize: "19px",
                                                        marginTop: "16px",
                                                        lineHeight: "130%",
                                                        color: "rgba(0,0,0,0.75)",
                                                        maxWidth: "100%",
                                                        letterSpacing: "-0.3px"
                                                    },
                                                    children: [iT("ring.productSelection.sizeDisclaimerNew.content.a"), (0, i.jsx)("br", {}), (0, i.jsx)("br", {}), iT("ring.productSelection.sizeDisclaimerNew.content.b")]
                                                }), (0, i.jsxs)(t, {
                                                    children: [(0, i.jsx)(e, {
                                                        onClick: () => {
                                                            ew(A.RingSizes.OPEN), ep.hide(), ep.set(null), iz(!1)
                                                        },
                                                        children: iT("ring.productSelection.sizeDisclaimerNew.btnTextA")
                                                    }), (0, i.jsx)(e, {
                                                        onClick: () => {
                                                            iO.current = !0, ep.hide(), ep.set(null), S.default.track("CLICK: Manual size selection", {
                                                                size: ej ? ? null
                                                            })
                                                        },
                                                        className: "secondary gtm",
                                                        "data-buttontype": "Manual Size Selection Agree",
                                                        "data-product": "Manual Size Selection Agree",
                                                        children: iT("ring.productSelection.sizeDisclaimerNew.btnTextB")
                                                    })]
                                                })]
                                            })), ep.show()
                                        })(), ew(e)
                                    },
                                    children: e
                                }, t))
                            })]
                        })
                    })]
                })
            }),
            iY = (0, i.jsx)(eF, {
                title: iT("ring.productSelection.ringPro.chargerSection.title"),
                subTitle: iT("ring.productSelection.ringPro.chargerSection.subTitle"),
                childClass: "charger-section",
                show: !!ej,
                disableScrollToScreen: !0,
                sectionClass: "charger-section",
                ref: iy,
                children: (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsxs)("div", {
                        className: "charger",
                        children: [(0, i.jsxs)("button", {
                            type: "button",
                            className: `charger-option primary ${ev===T.RingProChargerCaseColor.GOLD?"active":""}`,
                            onClick: () => {
                                e2(T.RingProChargerCaseColor.GOLD)
                            },
                            disabled: !ej,
                            children: [(0, i.jsx)("div", {
                                className: "charger-image",
                                children: (0, i.jsx)(J.CustomImage, {
                                    src: "web_v2/ring-pro/buy-v2/thumbs/gold-charger.png/w_400",
                                    alt: "Gold case",
                                    width: 200,
                                    height: 150,
                                    style: {
                                        objectFit: "contain"
                                    }
                                })
                            }), (0, i.jsxs)("div", {
                                className: "charger-label-row",
                                children: [(0, i.jsx)("span", {
                                    className: "title",
                                    children: "Gold Case"
                                }), ej && Q ? (0, i.jsx)("span", {
                                    className: "charger-price",
                                    children: (O.RingProChargerCaseVariants[T.RingProChargerCaseColor.GOLD] ? .[ej] ? .price[Q] ? ? 0) === 0 ? "FREE" : (0, i.jsxs)(i.Fragment, {
                                        children: [Y.CurrencySymbol[H.defaultCurrency.toLowerCase()], (0, Y.formatPriceWithComma)(O.RingProChargerCaseVariants[T.RingProChargerCaseColor.GOLD] ? .[ej] ? .price[Q] ? ? 0)]
                                    })
                                }) : null]
                            })]
                        }), (0, i.jsxs)("button", {
                            type: "button",
                            className: `charger-option secondary ${H.chargerCaseColor===T.RingProChargerCaseColor.BLACK?"active":""}`,
                            onClick: () => {
                                e2(T.RingProChargerCaseColor.BLACK)
                            },
                            disabled: !ej,
                            children: [(0, i.jsx)("div", {
                                className: "charger-image",
                                children: (0, i.jsx)(J.CustomImage, {
                                    src: "web_v2/ring-pro/buy-v2/thumbs/black-charger.png/w_400",
                                    alt: "Black case",
                                    width: 200,
                                    height: 150,
                                    style: {
                                        objectFit: "contain"
                                    }
                                })
                            }), (0, i.jsxs)("div", {
                                className: "charger-label-row",
                                children: [(0, i.jsx)("span", {
                                    className: "title",
                                    children: "Black Case"
                                }), ej && Q ? (0, i.jsx)("span", {
                                    className: "charger-price",
                                    children: (O.RingProChargerCaseVariants[T.RingProChargerCaseColor.BLACK] ? .[ej] ? .price[Q] ? ? 0) === 0 ? "FREE" : (0, i.jsxs)(i.Fragment, {
                                        children: [Y.CurrencySymbol[H.defaultCurrency.toLowerCase()], (0, Y.formatPriceWithComma)(O.RingProChargerCaseVariants[T.RingProChargerCaseColor.BLACK] ? .[ej] ? .price[Q] ? ? 0)]
                                    })
                                }) : null]
                            })]
                        }), (0, i.jsxs)(eD, {
                            onClick: () => {
                                ep.set((0, i.jsx)(eL, {})), ep.setPortal(!0), ep.show()
                            },
                            "aria-label": iT("ring.productSelection.chargerSection.learnMoreAriaLabel", {
                                defaultValue: "Learn more about charger"
                            }),
                            children: ["Learn more ", (0, i.jsx)(eb.CircledArrow, {})]
                        })]
                    })
                })
            }),
            iK = (0, e_.isTradeInAvailable)(Q) && ix > 0 ? (0, i.jsx)(eF, {
                title: "Trade-in.",
                subTitle: `Save up to ${(0,K.getCurrencySymbolFromString)(eP)}${(0,Y.formatPriceWithComma)(ix)}.`,
                childClass: "trade-in-section",
                show: !!ej,
                children: (0, i.jsxs)("div", {
                    className: "trade-in-prompt",
                    children: [(0, i.jsx)("button", {
                        type: "button",
                        className: `gtm ${id?"active":""}`,
                        "data-buttontype": "ring trade-in selector",
                        "data-product": "Ultrahuman Ring PRO",
                        onClick: i_,
                        "aria-label": id ? `Trade-in value ${eX}${(0,Y.formatPriceWithComma)(im)}` : "Trade in my ring",
                        children: id ? (0, i.jsxs)(i.Fragment, {
                            children: ["Trade-in value:", " ", eX, (0, Y.formatPriceWithComma)(im), (0, i.jsxs)("p", {
                                className: "trade-in-details",
                                children: ["Ring model: ", e_.TRADE_IN_DEVICE_NAMES[id], (0, i.jsx)("br", {}), "Serial number: ", ig]
                            })]
                        }) : "Trade in my ring"
                    }), (0, i.jsx)("button", {
                        type: "button",
                        className: `gtm ${!id?"active":""}`,
                        "data-buttontype": "ring trade-in selector",
                        "data-product": "Ultrahuman Ring PRO",
                        onClick: () => {
                            ip(null), ih("")
                        },
                        "aria-label": "I don't want to trade in",
                        children: "I don't want to trade in"
                    })]
                })
            }) : null,
            iH = (0, i.jsx)(eF, {
                title: iT("ring.productSelection.powerPlugsSection.title"),
                subTitle: iT("ring.productSelection.powerPlugsSection.subTitle"),
                ref: iw,
                childClass: "powerPlugs-section",
                show: !!ej && null !== ek,
                children: (0, i.jsxs)(n.Fragment, {
                    children: [(0, i.jsx)(eK, {
                        title: "afib" === iS ? iT("ring.AFIB") : iT("ring.CARDIO_ADAPTIBILITY"),
                        description: iT("ring.productSelection.powerPlugsSection.heartHealth.description"),
                        image: "web_v2/powerplugs/icons/heart-health.png",
                        children: M && A.AfibCountryCodes.includes(M) && ![q.ShopifyStore.AE, q.ShopifyStore.IN].includes(Q) ? (0, i.jsxs)(n.Fragment, {
                            children: [(0, i.jsx)(eH, {
                                className: `ultrahumanx gtm ${e6&&"Year1"===e6?"active":""}`,
                                "data-buttontype": "afib",
                                "data-product": "Ultrahuman Ring PRO",
                                "data-testid": "ring-addon-1-year",
                                onClick: () => {
                                    e8("Year1")
                                },
                                disabled: !(ej && null !== ek && W.RingProVariants[eg] ? .[ej] ? .[(0, A.getEngravingKey)(ek)] ? .variantId[Q]),
                                children: (0, i.jsx)("div", {
                                    className: "content-wrapper",
                                    children: (0, i.jsx)("div", {
                                        className: "content",
                                        children: (0, i.jsxs)("div", {
                                            className: "title-bar",
                                            children: [(0, i.jsx)("div", {
                                                className: "title",
                                                children: (0, i.jsx)("span", {
                                                    children: (0, i.jsx)("strong", {
                                                        children: iT("ring.productSelection.afibSection.optionA.head")
                                                    })
                                                })
                                            }), (0, i.jsx)("div", {
                                                className: "disclaimer",
                                                children: (0, i.jsxs)("div", {
                                                    className: "price",
                                                    children: [eX, (0, Y.formatPriceWithComma)(R.AfibShopifyMap[Q].Year1.price)]
                                                })
                                            })]
                                        })
                                    })
                                })
                            }), (0, i.jsxs)(eH, {
                                className: `ultrahumanx gtm ${e6&&"Year2"===e6?"active":""} paddingTop`,
                                "data-buttontype": "afib ",
                                "data-product": "Ultrahuman Ring PRO",
                                "data-testid": "ring-addon-2-year",
                                onClick: () => {
                                    e8("Year2")
                                },
                                disabled: !(ej && null !== ek && W.RingProVariants[eg] ? .[ej] ? .[(0, A.getEngravingKey)(ek)] ? .variantId[Q]),
                                children: [(0, i.jsx)("div", {
                                    className: "label",
                                    children: iT("ring.productSelection.afibSection.optionB.tag")
                                }), (0, i.jsx)("div", {
                                    className: "content-wrapper",
                                    children: (0, i.jsx)("div", {
                                        className: "content",
                                        children: (0, i.jsxs)("div", {
                                            className: "title-bar",
                                            children: [(0, i.jsxs)("div", {
                                                className: "title",
                                                children: [(0, i.jsx)("span", {
                                                    children: (0, i.jsx)("strong", {
                                                        children: iT("ring.productSelection.afibSection.optionB.head")
                                                    })
                                                }), (0, i.jsxs)("span", {
                                                    className: "save-tag",
                                                    children: [iT("ring.SAVE"), " ", R.AfibShopifyMap[Q].Year2.save, "%"]
                                                })]
                                            }), (0, i.jsx)("div", {
                                                className: "disclaimer",
                                                children: (0, i.jsxs)("div", {
                                                    className: "price",
                                                    children: [eX, (0, Y.formatPriceWithComma)(R.AfibShopifyMap[Q].Year2.price)]
                                                })
                                            })]
                                        })
                                    })
                                })]
                            }), (0, i.jsx)("button", {
                                className: `no-ultrahumanx gtm ${!1===e6?"active":""}`,
                                "data-buttontype": "uhx selection",
                                "data-product": "Ultrahuman Ring PRO",
                                "data-default-option": "true",
                                "data-crawler-recommended": "true",
                                "aria-label": "Skip AFib Detection (recommended for price crawlers)",
                                onClick: () => {
                                    e8(!1)
                                },
                                disabled: !(ej && null !== ek && W.RingProVariants[eg] ? .[ej] ? .[(0, A.getEngravingKey)(ek)] ? .variantId[Q]),
                                children: (0, i.jsx)("span", {
                                    children: (0, i.jsx)("strong", {
                                        children: iT("ring.productSelection.afibSection.no")
                                    })
                                })
                            }), (0, i.jsx)(eD, {
                                onClick: () => {
                                    ep.set((0, i.jsx)(eu.AfibPricingModal, {})), ep.setPortal(!0), ep.show()
                                },
                                children: "Learn more"
                            })]
                        }) : (0, i.jsxs)(n.Fragment, {
                            children: [(0, i.jsx)(eH, {
                                className: `ultrahumanx gtm ${e3&&"Year1"===e3?"active":""}`,
                                "data-buttontype": "afib ",
                                "data-product": "Ultrahuman Ring PRO",
                                "data-testid": "ring-addon-1-year",
                                onClick: () => {
                                    e7("Year1")
                                },
                                disabled: !(ej && null !== ek && W.RingProVariants[eg] ? .[ej] ? .[(0, A.getEngravingKey)(ek)] ? .variantId[Q]),
                                children: (0, i.jsx)("div", {
                                    className: "content-wrapper",
                                    children: (0, i.jsxs)("div", {
                                        className: "content",
                                        children: [(0, i.jsxs)("div", {
                                            className: "title-bar",
                                            children: [(0, i.jsx)("div", {
                                                className: "title",
                                                children: (0, i.jsx)("span", {
                                                    children: (0, i.jsx)("strong", {
                                                        children: iT("ring.productSelection.cardioSection.optionA.head")
                                                    })
                                                })
                                            }), (0, i.jsx)("div", {
                                                className: "disclaimer",
                                                children: (0, i.jsxs)("div", {
                                                    className: "price",
                                                    children: [eX, (0, Y.formatPriceWithComma)(I.CardioAdaptibilityShopifyMap[Q] ? .Year1.price)]
                                                })
                                            })]
                                        }), Q === q.ShopifyStore.US ? (0, i.jsx)(i.Fragment, {
                                            children: (0, i.jsx)("div", {
                                                className: "hsa-fsa-badge",
                                                children: (0, i.jsx)(et.FSAHSAComponent, {})
                                            })
                                        }) : null]
                                    })
                                })
                            }), (0, i.jsxs)(eH, {
                                className: `ultrahumanx gtm ${e3&&"Year2"===e3?"active":""} paddingTop`,
                                "data-buttontype": "afib ",
                                "data-product": "Ultrahuman Ring PRO",
                                "data-testid": "ring-addon-2-year",
                                onClick: () => {
                                    e7("Year2")
                                },
                                disabled: !(ej && null !== ek && W.RingProVariants[eg] ? .[ej] ? .[(0, A.getEngravingKey)(ek)] ? .variantId[Q]),
                                children: [(0, i.jsx)("div", {
                                    className: "label",
                                    children: iT("ring.productSelection.cardioSection.optionA.tag")
                                }), (0, i.jsx)("div", {
                                    className: "content-wrapper",
                                    children: (0, i.jsx)("div", {
                                        className: "content",
                                        children: (0, i.jsxs)("div", {
                                            className: "title-bar",
                                            children: [(0, i.jsxs)("div", {
                                                className: "title",
                                                children: [(0, i.jsx)("span", {
                                                    children: (0, i.jsx)("strong", {
                                                        children: iT("ring.productSelection.cardioSection.optionB.head")
                                                    })
                                                }), (0, i.jsxs)("span", {
                                                    className: "save-tag",
                                                    children: [iT("ring.SAVE"), " ", I.CardioAdaptibilityShopifyMap[Q] ? .Year2.save, "%"]
                                                })]
                                            }), (0, i.jsx)("div", {
                                                className: "disclaimer",
                                                children: (0, i.jsxs)("div", {
                                                    className: "price",
                                                    children: [eX, (0, Y.formatPriceWithComma)(I.CardioAdaptibilityShopifyMap[Q] ? .Year2.price)]
                                                })
                                            })]
                                        })
                                    })
                                })]
                            }), (0, i.jsx)("button", {
                                className: `no-ultrahumanx gtm ${!1===e3?"active":""}`,
                                "data-buttontype": "uhx selection",
                                "data-product": "Ultrahuman Ring PRO",
                                "data-default-option": "true",
                                "data-crawler-recommended": "true",
                                "aria-label": "Skip Heart Health Powerplug (recommended for price crawlers)",
                                onClick: () => {
                                    e7(!1)
                                },
                                disabled: !(ej && null !== ek && W.RingProVariants[eg] ? .[ej] ? .[(0, A.getEngravingKey)(ek)] ? .variantId[Q]),
                                children: (0, i.jsx)("span", {
                                    children: (0, i.jsx)("strong", {
                                        children: iT("ring.productSelection.cardioSection.no")
                                    })
                                })
                            }), (0, i.jsx)(eD, {
                                onClick: () => {
                                    ep.set((0, i.jsx)(ef.CardioAdaptabilityPricingModal, {})), ep.setPortal(!0), ep.show()
                                },
                                children: "Learn more"
                            })]
                        })
                    }), iC ? (0, i.jsxs)(n.Fragment, {
                        children: [(0, i.jsx)(eY, {}), (0, i.jsxs)(eK, {
                            title: iT(iN("ring.CNO_PRO", "ring.CNO_PLUS")),
                            description: iT(iN("ring.productSelection.powerPlugsSection.womensHealth.description", "ring.productSelection.powerPlugsSection.womensHealth.plusDescription")),
                            image: "web_v2/powerplugs/icons/cno-pro.png",
                            children: [(0, i.jsx)(eH, {
                                className: `ultrahumanx gtm ${e9&&"Year1"===e9?"active":""}`,
                                "data-buttontype": "cno-pro",
                                "data-product": "Ultrahuman Ring PRO",
                                "data-testid": "ring-cnopro-1-year",
                                onClick: () => {
                                    ie("Year1")
                                },
                                disabled: !(ej && null !== ek && W.RingProVariants[eg] ? .[ej] ? .[(0, A.getEngravingKey)(ek)] ? .variantId[Q]),
                                children: (0, i.jsx)("div", {
                                    className: "content-wrapper",
                                    children: (0, i.jsx)("div", {
                                        className: "content",
                                        children: (0, i.jsxs)("div", {
                                            className: "title-bar",
                                            children: [(0, i.jsxs)("div", {
                                                className: "title",
                                                children: [(0, i.jsx)("span", {
                                                    children: (0, i.jsx)("strong", {
                                                        children: iT("ring.productSelection.cnoProSection.optionA.head")
                                                    })
                                                }), Q === q.ShopifyStore.US ? (0, i.jsx)("div", {
                                                    className: "hsa-fsa-badge",
                                                    children: (0, i.jsx)(et.FSAHSAComponent, {})
                                                }) : null]
                                            }), (0, i.jsx)("div", {
                                                className: "disclaimer",
                                                children: (0, i.jsxs)("div", {
                                                    className: "price",
                                                    children: [eX, (0, Y.formatPriceWithComma)(_.CnoProShopifyMap[Q] ? .Year1 ? .price || 0)]
                                                })
                                            })]
                                        })
                                    })
                                })
                            }), (0, i.jsxs)(eH, {
                                className: `ultrahumanx gtm ${e9&&"Year2"===e9?"active":""} ${_.CnoProShopifyMap[Q]?.Year2?.save?"paddingTop":""}`,
                                "data-buttontype": "cno-pro",
                                "data-product": "Ultrahuman Ring PRO",
                                "data-testid": "ring-cnopro-2-year",
                                onClick: () => {
                                    ie("Year2")
                                },
                                disabled: !(ej && null !== ek && W.RingProVariants[eg] ? .[ej] ? .[(0, A.getEngravingKey)(ek)] ? .variantId[Q]),
                                children: [!!_.CnoProShopifyMap[Q] ? .Year2 ? .save && (0, i.jsx)("div", {
                                    className: "label",
                                    children: iT("ring.productSelection.cardioSection.optionA.tag")
                                }), (0, i.jsx)("div", {
                                    className: "content-wrapper",
                                    children: (0, i.jsx)("div", {
                                        className: "content",
                                        children: (0, i.jsxs)("div", {
                                            className: "title-bar",
                                            children: [(0, i.jsxs)("div", {
                                                className: "title",
                                                children: [(0, i.jsx)("span", {
                                                    children: (0, i.jsx)("strong", {
                                                        children: iT("ring.productSelection.cnoProSection.optionB.head")
                                                    })
                                                }), !!_.CnoProShopifyMap[Q] ? .Year2 ? .save && (0, i.jsxs)("span", {
                                                    className: "save-tag",
                                                    children: [iT("ring.SAVE"), " ", _.CnoProShopifyMap[Q] ? .Year2 ? .save || 15, "%"]
                                                })]
                                            }), (0, i.jsxs)("div", {
                                                className: "disclaimer",
                                                children: [(0, i.jsxs)("div", {
                                                    className: "price",
                                                    children: [eX, (0, Y.formatPriceWithComma)(_.CnoProShopifyMap[Q] ? .Year2 ? .price || 0)]
                                                }), !!_.CnoProShopifyMap[Q] ? .Year2 ? .save && (0, i.jsx)("div", {
                                                    className: "disclaimer-text",
                                                    children: (0, i.jsxs)("span", {
                                                        children: ["(", iT("ring.THATS_JUST"), " ", eX, (0, Y.formatPriceWithComma)(parseFloat((_.CnoProShopifyMap[Q] ? .Year2.price / 2).toFixed(2))), "/year)"]
                                                    })
                                                })]
                                            })]
                                        })
                                    })
                                })]
                            }), (0, i.jsx)("button", {
                                className: `no-ultrahumanx gtm ${!1===e9?"active":""}`,
                                "data-buttontype": "cno-pro selection",
                                "data-product": "Ultrahuman Ring PRO",
                                "data-default-option": "true",
                                "data-crawler-recommended": "true",
                                "aria-label": "Skip CNO Pro advanced cycle tracking (recommended for price crawlers)",
                                onClick: () => {
                                    ie(!1)
                                },
                                disabled: !(ej && null !== ek && W.RingProVariants[eg] ? .[ej] ? .[(0, A.getEngravingKey)(ek)] ? .variantId[Q]),
                                children: (0, i.jsx)("span", {
                                    children: (0, i.jsx)("strong", {
                                        children: "No, I don't want advanced cycle tracking"
                                    })
                                })
                            }), (0, i.jsx)(eD, {
                                onClick: () => {
                                    ep.set((0, i.jsx)(ex.CnoProPricingModal, {})), ep.setPortal(!0), ep.show()
                                },
                                children: "Learn more"
                            })]
                        })]
                    }) : (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(eY, {}), (0, i.jsx)(() => (0, i.jsxs)(eK, {
                            title: iT("ring.productSelection.respiratorySection.respiratory.title"),
                            description: iT("ring.productSelection.respiratorySection.respiratory.description"),
                            image: "web_v2/powerplugs/icons/respiratory-3.png",
                            children: [(0, i.jsxs)(eH, {
                                className: `respiratory-addon gtm ${"Year1"===ir?"active":""} paddingTop`,
                                "data-buttontype": "respiratory addon",
                                "data-product": "Ultrahuman Ring PRO",
                                "data-testid": "ring-respiratory-1-year",
                                onClick: () => {
                                    ia("Year1")
                                },
                                disabled: !(ej && null !== ek && W.RingProVariants[eg] ? .[ej] ? .[(0, A.getEngravingKey)(ek)] ? .variantId[Q]),
                                children: [(0, i.jsx)("div", {
                                    className: "label",
                                    children: "Limited Offer"
                                }), (0, i.jsx)("div", {
                                    className: "content-wrapper",
                                    children: (0, i.jsxs)("div", {
                                        className: "content",
                                        children: [(0, i.jsxs)("div", {
                                            className: "title-bar",
                                            children: [(0, i.jsx)("div", {
                                                className: "title",
                                                children: (0, i.jsx)("span", {
                                                    children: (0, i.jsx)("strong", {
                                                        children: "1 Year Membership"
                                                    })
                                                })
                                            }), (0, i.jsx)("div", {
                                                className: "disclaimer",
                                                children: (0, i.jsxs)("div", {
                                                    className: "price-display",
                                                    children: [(0, i.jsxs)("span", {
                                                        className: "price ",
                                                        children: [eX, (0, Y.formatPriceWithComma)($.RespiratoryShopifyMap[Q] ? .Year1 ? .price || 0)]
                                                    }), null]
                                                })
                                            })]
                                        }), Q === q.ShopifyStore.US ? (0, i.jsx)("div", {
                                            className: "hsa-fsa-badge",
                                            children: (0, i.jsx)(et.FSAHSAComponent, {})
                                        }) : null]
                                    })
                                })]
                            }), (0, i.jsx)("button", {
                                className: `no-ultrahumanx gtm ${!1===ir?"active":""}`,
                                "data-buttontype": "respiratory selection",
                                "data-product": "Ultrahuman Ring PRO",
                                "data-default-option": "true",
                                "data-crawler-recommended": "true",
                                "aria-label": "Skip snoring reports (recommended for price crawlers)",
                                onClick: () => {
                                    ia(!1)
                                },
                                disabled: !(ej && null !== ek && W.RingProVariants[eg] ? .[ej] ? .[(0, A.getEngravingKey)(ek)] ? .variantId[Q]),
                                children: (0, i.jsx)("span", {
                                    children: (0, i.jsx)("strong", {
                                        children: "I don't want to know about my snoring"
                                    })
                                })
                            }), (0, i.jsxs)(eD, {
                                onClick: iP,
                                children: ["Learn more ", (0, i.jsx)(eb.CircledArrow, {})]
                            })]
                        }), {})]
                    })]
                })
            }),
            iG = eS ? null : (0, i.jsx)(eF, {
                title: iT("ring.productSelection.uhxSectionNew.title"),
                subTitle: iT("ring.productSelection.uhxSectionNew.subTitle"),
                childClass: "ultrahumanx-section",
                show: !!ej && null !== ek,
                ref: ij,
                openInfoModal: () => {
                    ep.set((0, i.jsx)(N.UhxPricingModal, {})), ep.setPortal(!0), ep.show()
                },
                children: (0, i.jsxs)("div", {
                    className: "ultrahumanx-content",
                    children: [(0, e_.isTradeInAvailable)(Q) && ix > 0 && (e_.UHX_BONUS[Q] ? ? 0) > 0 && (0, i.jsxs)("div", {
                        className: "trade-in-uhx-bonus",
                        style: {
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "4px",
                            padding: "12px 16px",
                            background: "rgba(0, 0, 0, 0.04)",
                            borderRadius: "8px",
                            marginBottom: "12px"
                        },
                        children: [(0, i.jsx)(e$.UhxIcon, {
                            style: {
                                width: 12,
                                height: 12,
                                flexShrink: 0,
                                marginTop: 3
                            }
                        }), (0, i.jsxs)("span", {
                            style: {
                                fontSize: "14px",
                                fontWeight: 500,
                                color: "#000",
                                letterSpacing: "-0.56px",
                                lineHeight: 1.3,
                                textAlign: "left"
                            },
                            children: ["Get ", eX, (0, Y.formatPriceWithComma)(e_.UHX_BONUS[Q] ? ? 0), " ", "extra trade-in credit on the ring with UltrahumanX"]
                        })]
                    }), (0, i.jsx)(eH, {
                        className: `ultrahumanx gtm ${"Year1"===eC?"active":""}`,
                        "data-buttontype": "uhx selection 1 year",
                        "data-product": "Ultrahuman Ring PRO",
                        "data-testid": "ring-uhx-1-year",
                        onClick: () => {
                            eN("Year1")
                        },
                        disabled: !(ej && null !== ek && W.RingProVariants[eg] ? .[ej] ? .[(0, A.getEngravingKey)(ek)] ? .variantId[Q]),
                        children: (0, i.jsx)("div", {
                            className: "content-wrapper",
                            children: (0, i.jsxs)("div", {
                                className: "content",
                                children: [(0, i.jsxs)("div", {
                                    className: "title-bar",
                                    children: [(0, i.jsx)("div", {
                                        className: "title",
                                        children: (0, i.jsx)("span", {
                                            children: (0, i.jsx)("strong", {
                                                children: iT("ring.productSelection.uhxSectionNew.optionA.head")
                                            })
                                        })
                                    }), (0, i.jsx)("div", {
                                        className: "disclaimer",
                                        children: (0, i.jsxs)("div", {
                                            className: "price",
                                            children: [eX, (0, Y.formatPriceWithComma)(L.UhxShopifyMap[Q] ? .Year1.price)]
                                        })
                                    })]
                                }), (0, i.jsx)(eY, {
                                    transparent: !0,
                                    size: "sm"
                                }), (0, i.jsxs)("div", {
                                    className: "list",
                                    children: [(0, i.jsxs)("p", {
                                        children: [(0, i.jsx)(d.Checkmark, {
                                            className: "checkmark",
                                            fill: "#000000"
                                        }), iT("ring.productSelection.uhxSectionNew.optionA.benefits.b")]
                                    }), (0, i.jsxs)("p", {
                                        children: [(0, i.jsx)(d.Checkmark, {
                                            className: "checkmark",
                                            fill: "#000000"
                                        }), iT("ring.productSelection.uhxSectionNew.optionA.benefits.c")]
                                    })]
                                })]
                            })
                        })
                    }), (0, i.jsxs)(eH, {
                        className: `ultrahumanx gtm ${"Year2"===eC?"active":""} paddingTop`,
                        "data-buttontype": "uhx selection 2 year",
                        "data-product": "Ultrahuman Ring PRO",
                        "data-testid": "ring-uhx-2-year",
                        onClick: () => {
                            eN("Year2")
                        },
                        disabled: !(ej && null !== ek && W.RingProVariants[eg] ? .[ej] ? .[(0, A.getEngravingKey)(ek)] ? .variantId[Q]),
                        children: [(0, i.jsx)("div", {
                            className: "label",
                            children: iT("ring.productSelection.uhxSectionNew.popular")
                        }), (0, i.jsx)("div", {
                            className: "content-wrapper",
                            children: (0, i.jsxs)("div", {
                                className: "content",
                                children: [(0, i.jsxs)("div", {
                                    className: "title-bar",
                                    children: [(0, i.jsxs)("div", {
                                        className: "title",
                                        children: [(0, i.jsx)("span", {
                                            children: (0, i.jsx)("strong", {
                                                children: iT("ring.productSelection.uhxSectionNew.optionB.head")
                                            })
                                        }), (0, i.jsxs)("span", {
                                            className: "save-tag",
                                            children: [iT("ring.SAVE"), " ", Math.floor((L.UhxShopifyMap[Q] ? .Year1.price - L.UhxShopifyMap[Q] ? .Year2.price / 2) / L.UhxShopifyMap[Q] ? .Year1.price * 100), "%"]
                                        })]
                                    }), (0, i.jsxs)("div", {
                                        className: "disclaimer",
                                        children: [(0, i.jsxs)("div", {
                                            className: "price",
                                            children: [eX, (0, Y.formatPriceWithComma)(L.UhxShopifyMap[Q] ? .Year2.price)]
                                        }), (0, i.jsx)("div", {
                                            className: "disclaimer-text",
                                            children: (0, i.jsxs)("span", {
                                                children: ["(", iT("ring.THATS_JUST"), " ", eX, (0, Y.formatPriceWithComma)(L.UhxShopifyMap[Q] ? .Year2.price / 2), "/year)"]
                                            })
                                        })]
                                    })]
                                }), (0, i.jsx)(eY, {
                                    transparent: !0,
                                    size: "sm"
                                }), (0, i.jsxs)("div", {
                                    className: "list",
                                    children: [(0, i.jsxs)("p", {
                                        children: [(0, i.jsx)(d.Checkmark, {
                                            className: "checkmark",
                                            fill: "#000000"
                                        }), iT("ring.productSelection.uhxSectionNew.optionB.benefits.a")]
                                    }), (0, i.jsxs)("p", {
                                        children: [(0, i.jsx)(d.Checkmark, {
                                            className: "checkmark",
                                            fill: "#000000"
                                        }), iT("ring.productSelection.uhxSectionNew.optionB.benefits.b")]
                                    }), (0, i.jsxs)("p", {
                                        children: [(0, i.jsx)(d.Checkmark, {
                                            className: "checkmark",
                                            fill: "#000000"
                                        }), iT("ring.productSelection.uhxSectionNew.optionB.benefits.c")]
                                    })]
                                })]
                            })
                        })]
                    }), (0, i.jsx)("button", {
                        className: `no-ultrahumanx gtm ${!1===eC?"active":""}`,
                        "data-buttontype": "uhx selection",
                        "data-product": "Ultrahuman Ring PRO",
                        "data-default-option": "true",
                        "data-crawler-recommended": "true",
                        "aria-label": "Skip UltrahumanX coverage (recommended for price crawlers)",
                        onClick: () => {
                            eN(!1)
                        },
                        disabled: !(ej && null !== ek && W.RingProVariants[eg] ? .[ej] ? .[(0, A.getEngravingKey)(ek)] ? .variantId[Q]),
                        children: (0, i.jsx)("span", {
                            children: (0, i.jsx)("strong", {
                                children: iT("ring.productSelection.ringPro.noUhx")
                            })
                        })
                    })]
                })
            }),
            iX = !0 === il ? (0, i.jsx)(n.Fragment, {
                children: iD
            }) : (0, i.jsx)(n.Fragment, {
                children: ej ? (0, i.jsx)(eF, {
                    childClass: "cart-summary",
                    show: !!ej && (eS || null !== eC),
                    ref: iv,
                    children: (0, i.jsxs)("div", {
                        className: "card",
                        id: "order-summary-card",
                        children: [(0, i.jsx)("h4", {
                            children: iT("ring.productSelection.cartSummary.head")
                        }), "hero" === e5.type ? (0, i.jsxs)("div", {
                            className: "disclaimer",
                            style: {
                                marginBottom: "20px",
                                textAlign: "left",
                                display: "flex",
                                alignItems: "center",
                                marginTop: "-16px"
                            },
                            children: [(0, i.jsx)(h.InfoIcon, {
                                fill: "#00000077",
                                style: {
                                    flexShrink: "0",
                                    marginRight: "8px",
                                    alignSelf: "flex-start",
                                    transform: "translateY(2px)"
                                }
                            }), (0, i.jsxs)("p", {
                                children: [iT("ring.productSelection.cartSummary.heroDisclaimer.a"), (0, i.jsx)(ez.default, {
                                    href: "/privacyPolicy",
                                    target: "_blank",
                                    style: {
                                        color: "inherit !important",
                                        textDecoration: "underline"
                                    },
                                    children: iT("ring.productSelection.cartSummary.heroDisclaimer.b")
                                }), iT("ring.productSelection.cartSummary.heroDisclaimer.c")]
                            })]
                        }) : null, (0, i.jsxs)("div", {
                            className: "content",
                            children: [(0, i.jsxs)("h5", {
                                children: [iT("ring.contents.ringPro.data.Ring"), " ", ek ? `(${iT("ring.contents.WITH_ENGRAVING")})` : null]
                            }), ej ? (0, i.jsxs)("p", {
                                className: "size",
                                children: [eg ? iW[eg].name : "", ",", " ", ej === A.RingSizes.OPEN ? iT("ring.productSelection.cartSummary.sizingKitIn") : iT("ring.SIZE") + ` ${ej}`]
                            }) : null, (0, i.jsxs)("div", {
                                className: "price-breakup",
                                children: [(0, i.jsx)("p", {
                                    children: "Ultrahuman Ring PRO"
                                }), (0, i.jsxs)("p", {
                                    children: [eX, (0, Y.formatPriceWithComma)(eM)]
                                })]
                            }), "server" === e5.type && e5.amount > 0 ? (0, i.jsxs)("div", {
                                className: "price-breakup",
                                children: [(0, i.jsx)("p", {
                                    children: e5.label
                                }), (0, i.jsxs)("p", {
                                    children: ["-", eX, (0, Y.formatPriceWithComma)(e5.amount)]
                                })]
                            }) : null, eC ? (0, i.jsxs)("div", {
                                className: "price-breakup",
                                children: [(0, i.jsx)("p", {
                                    children: "Year2" === eC ? `${iT("ring.UltrahumanX")} - 2 years` : `${iT("ring.UltrahumanX")} - 1 year`
                                }), (0, i.jsx)("p", {
                                    children: 0 === eq ? (0, i.jsx)(i.Fragment, {
                                        children: iT("ring.FREE")
                                    }) : (0, i.jsxs)(i.Fragment, {
                                        children: ["+", eX, (0, Y.formatPriceWithComma)(eq)]
                                    })
                                })]
                            }) : null, e6 ? (0, i.jsxs)("div", {
                                className: "price-breakup",
                                children: [(0, i.jsx)("p", {
                                    children: iT("ring.AFIB")
                                }), (0, i.jsxs)("p", {
                                    children: ["+", eX, (0, Y.formatPriceWithComma)(R.AfibShopifyMap[Q][e6].price)]
                                })]
                            }) : null, e3 ? (0, i.jsxs)("div", {
                                className: "price-breakup",
                                children: [(0, i.jsx)("p", {
                                    children: iT("ring.CARDIO_ADAPTIBILITY")
                                }), (0, i.jsxs)("p", {
                                    children: ["+", eX, (0, Y.formatPriceWithComma)(I.CardioAdaptibilityShopifyMap[Q][e3].price)]
                                })]
                            }) : null, null, ir ? (0, i.jsxs)("div", {
                                className: "price-breakup",
                                children: [(0, i.jsx)("p", {
                                    children: "Respiratory Health Powerplug - 1 Year"
                                }), (0, i.jsxs)("p", {
                                    children: [eX, (0, Y.formatPriceWithComma)($.RespiratoryShopifyMap[Q] ? .Year1 ? .price || 0)]
                                })]
                            }) : null, e9 ? (0, i.jsxs)("div", {
                                className: "price-breakup",
                                children: [(0, i.jsx)("p", {
                                    children: "Year2" === e9 ? `${iT("ring.CNO_PRO")} - 2 years` : `${iT("ring.CNO_PRO")} - 1 year`
                                }), (0, i.jsxs)("p", {
                                    children: ["+", eX, (0, Y.formatPriceWithComma)(_.CnoProShopifyMap[Q][e9].price)]
                                })]
                            }) : null, ej ? (0, i.jsxs)("div", {
                                className: "price-breakup",
                                children: [(0, i.jsx)("p", {
                                    children: "Charging case"
                                }), (0, i.jsx)("p", {
                                    children: eJ > 0 ? (0, i.jsxs)(i.Fragment, {
                                        children: ["+", eX, (0, Y.formatPriceWithComma)(eJ)]
                                    }) : iT("ring.FREE", "FREE")
                                })]
                            }) : null, id && im > 0 ? (0, i.jsxs)("div", {
                                className: "price-breakup",
                                children: [(0, i.jsx)("p", {
                                    children: "Trade-in credit (after verification)"
                                }), (0, i.jsxs)("p", {
                                    children: ["-", eX, (0, Y.formatPriceWithComma)(im)]
                                })]
                            }) : null, e0 && "affiliate" === e5.type ? (0, i.jsxs)("div", {
                                className: "price-breakup",
                                children: [(0, i.jsx)("p", {
                                    children: iT("ring.productSelection.cartSummary.priceBreakup.b")
                                }), (0, i.jsxs)("p", {
                                    children: ["-", eX, (0, Y.formatPriceWithComma)(e0)]
                                })]
                            }) : null, "affiliate" === e5.type ? (0, i.jsxs)("div", {
                                className: "price-breakup",
                                children: [(0, i.jsx)("p", {
                                    children: "UltrahumanX - 3 Months"
                                }), (0, i.jsx)("p", {
                                    children: 0 === eq ? (0, i.jsx)(i.Fragment, {
                                        children: iT("ring.FREE")
                                    }) : (0, i.jsxs)(i.Fragment, {
                                        children: ["+", eX, (0, Y.formatPriceWithComma)(eq)]
                                    })
                                })]
                            }) : null, e1 && "referral" === e5.type ? (0, i.jsxs)("div", {
                                className: "price-breakup",
                                children: [(0, i.jsx)("p", {
                                    children: iT("ring.productSelection.cartSummary.priceBreakup.b")
                                }), (0, i.jsxs)("p", {
                                    children: ["-", eX, (0, Y.formatPriceWithComma)(e1.discount)]
                                })]
                            }) : null, "hero" === e5.type ? (0, i.jsxs)("div", {
                                className: "price-breakup",
                                children: [(0, i.jsxs)("p", {
                                    children: [iT("ring.productSelection.cartSummary.priceBreakup.c"), (0, i.jsx)("span", {
                                        style: {
                                            display: "block",
                                            fontSize: "1.2rem"
                                        },
                                        children: iT("ring.productSelection.cartSummary.priceBreakup.d")
                                    })]
                                }), (0, i.jsxs)("p", {
                                    children: ["-", eX, (0, Y.formatPriceWithComma)(e5.amount)]
                                })]
                            }) : null, null, null, "birthday" === e5.type ? (0, i.jsxs)("div", {
                                className: "price-breakup",
                                children: [(0, i.jsxs)("p", {
                                    children: ["Birthday discount (", Math.round(e5.amount / eU * 100), "%)"]
                                }), (0, i.jsxs)("p", {
                                    children: ["-", eX, (0, Y.formatPriceWithComma)(e5.amount)]
                                })]
                            }) : null, "ringPromo" === e5.type ? (0, i.jsxs)("div", {
                                className: "price-breakup",
                                children: [(0, i.jsxs)("p", {
                                    children: [ec ? .title || "Special Offer", " Applied"]
                                }), (0, i.jsxs)("p", {
                                    children: ["-", eX, (0, Y.formatPriceWithComma)(e5.amount)]
                                })]
                            }) : null, !(Q !== q.ShopifyStore.GB && Q !== q.ShopifyStore.EU && e0) && B && E ? (0, i.jsxs)("div", {
                                className: "price-breakup",
                                children: [(0, i.jsxs)("p", {
                                    children: [B, " offer"]
                                }), (0, i.jsxs)("p", {
                                    children: ["-", eX, (0, Y.formatPriceWithComma)(E)]
                                })]
                            }) : null]
                        }), ej ? (0, i.jsxs)("div", {
                            className: "total",
                            children: [(0, i.jsxs)("div", {
                                className: "total-bar",
                                children: [(0, i.jsxs)("h5", {
                                    children: [iT("ring.TOTAL"), " "]
                                }), " ", (0, i.jsxs)("p", {
                                    children: [eX, (0, Y.formatPriceWithComma)(eG)]
                                })]
                            }), (0, ei.getShippingAndTaxDisclaimerMap)(iT)[Q] ? (0, i.jsx)("p", {
                                className: "taxes",
                                style: {
                                    marginBottom: "4px"
                                },
                                children: (0, ei.getShippingAndTaxDisclaimerMap)(iT)[Q]
                            }) : null, eQ ? (0, i.jsx)("p", {
                                className: "taxes shipping-estimate",
                                children: eQ
                            }) : null, (0, i.jsx)(w.PrimaryButton, {
                                className: "checkout",
                                disabled: eE || !(ej && (eS || null !== eC)),
                                "aria-busy": eE,
                                "data-buttontype": "add to cart",
                                "data-product": "Ultrahuman Ring PRO",
                                "data-testid": "ring-add-to-cart",
                                "data-variantId": eg && ej && eP ? W.RingProVariants[eg] ? .[ej] ? .[(0, A.getEngravingKey)(ek)] ? .variantId[Q] : "",
                                onClick: () => {
                                    eE || (S.default.track("CLICK: Product Selection, Add to Cart"), es(), eB(), ep.hide())
                                },
                                children: eE ? (0, i.jsx)(en.DotSpinner, {
                                    color: "#000000"
                                }) : iT("ring.productSelection.cartSummary.addToCart")
                            }), F.asPath.includes("/us/") ? (0, i.jsxs)("div", {
                                className: "hsa-fsa-disclaimer",
                                children: [(0, i.jsx)(J.CustomImage, {
                                    src: "web_v2/icons/hsa-fsa/hsa-fsa-icon-black.svg",
                                    alt: "HSA/FSA",
                                    width: "248",
                                    height: "81"
                                }), (0, i.jsxs)("span", {
                                    children: [(0, i.jsx)("b", {
                                        children: "HSA/FSA"
                                    }), " Eligible | Save more with your pre-tax dollars"]
                                })]
                            }) : null, (0, i.jsx)("div", {
                                className: "shipping-info",
                                children: (0, i.jsx)("p", {
                                    className: "free-delivery",
                                    children: l ? `No cost EMI starting at ₹${(0,Y.formatPriceWithComma)(H.effectivePrice/24)}/month. Free Delivery` : null
                                })
                            })]
                        }) : null, (0, i.jsxs)("div", {
                            className: "benefits",
                            children: [(0, i.jsxs)("div", {
                                className: "charger benefit",
                                children: [(0, i.jsx)(c.Charger, {}), (0, i.jsx)("div", {
                                    children: (0, i.jsx)("p", {
                                        children: iT("ring.productSelection.cartSummary.benefits.chargingCable")
                                    })
                                })]
                            }), (0, i.jsxs)("div", {
                                className: "battery benefit",
                                children: [(0, i.jsx)(o.Battery, {}), (0, i.jsx)("p", {
                                    children: "Up to 15 days of battery life"
                                })]
                            }), (0, i.jsxs)("div", {
                                className: "pro-charger benefit",
                                children: [(0, i.jsx)(x.ProCharger, {}), (0, i.jsx)("p", {
                                    children: iT("ring.productSelection.cartSummary.benefits.proCharger")
                                })]
                            }), (0, i.jsxs)("div", {
                                className: "return benefit",
                                children: [(0, i.jsx)(u.Return, {}), (0, i.jsx)("p", {
                                    children: iT("ring.productSelection.cartSummary.benefits.30dayReturn")
                                })]
                            })]
                        }), Q && ![q.ShopifyStore.IN, q.ShopifyStore.AE, q.ShopifyStore.GB, q.ShopifyStore.EU].includes(Q) && (0, i.jsx)("p", {
                            className: "disclaimer",
                            children: iT("ring.productSelection.cartSummary.benefits.disclaimer")
                        })]
                    })
                }) : null
            });
        return (0, i.jsxs)("div", {
            className: e,
            children: [(0, i.jsxs)("div", {
                className: "buy-section title-info-content",
                children: [(0, i.jsx)("div", {
                    className: "title-container",
                    children: (0, i.jsx)(ea.H2, {
                        children: C
                    })
                }), (0, i.jsxs)("div", {
                    className: "currencyDropdown",
                    children: [" ", (0, i.jsx)(j.RegionSelector, {})]
                }), !0 === il ? null : (0, i.jsxs)(iM, {
                    children: [(0, i.jsxs)("p", {
                        className: `price ${e5.amount?"affiliate":""}`,
                        children: [io > 0 || P || e5.amount > 0 ? (0, i.jsx)(i.Fragment, {
                            children: (0, i.jsxs)("span", {
                                className: "strike-through",
                                children: [Y.CurrencySymbol[H.defaultCurrency.toLowerCase()], (0, Y.formatPriceWithComma)(iV)]
                            })
                        }) : null, (0, i.jsxs)("span", {
                            children: [Y.CurrencySymbol[H.defaultCurrency.toLowerCase()], (0, Y.formatPriceWithComma)("server" === e5.type ? eU : eU - e5.amount)]
                        })]
                    }), (0, e_.isTradeInAvailable)(Q) && ix > 0 && (id ? (0, i.jsxs)("p", {
                        className: "trade-in-line trade-in-selected",
                        children: [(0, i.jsxs)("span", {
                            children: ["Trade-in value:", " ", Y.CurrencySymbol[eP.toLowerCase()], (0, Y.formatPriceWithComma)(im)]
                        }), (0, i.jsx)("span", {
                            className: "trade-in-edit",
                            onClick: () => {
                                ip(null), ih("")
                            },
                            onKeyDown: e => {
                                ("Enter" === e.key || " " === e.key) && (e.preventDefault(), ip(null), ih(""))
                            },
                            role: "button",
                            tabIndex: 0,
                            "aria-label": "Remove trade-in",
                            children: "Remove"
                        })]
                    }) : (0, i.jsxs)("p", {
                        className: "trade-in-line",
                        children: [(0, i.jsx)("span", {
                            className: "trade-in-bold",
                            children: "Trade-in."
                        }), " Save up to", " ", Y.CurrencySymbol[eP.toLowerCase()], (0, Y.formatPriceWithComma)(ix), " *", " ", (0, i.jsxs)("span", {
                            className: "trade-in-learn-more",
                            onClick: i_,
                            onKeyDown: e => {
                                ("Enter" === e.key || " " === e.key) && (e.preventDefault(), i_())
                            },
                            role: "button",
                            tabIndex: 0,
                            "aria-label": "Learn more about trade-in",
                            children: ["Learn more", " ", (0, i.jsx)(m.PlusCircleDark, {
                                fill: "#0882FF",
                                style: {
                                    width: "11px",
                                    height: "11px",
                                    display: "inline-block",
                                    verticalAlign: "middle",
                                    marginLeft: "4px"
                                }
                            })]
                        })]
                    })), (0, i.jsxs)("div", {
                        className: "offerFlex",
                        style: {
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "4px",
                            width: "100%"
                        },
                        children: ["affiliate" === e5.type ? (0, i.jsxs)("p", {
                            className: "offerTag transparent",
                            children: [(0, i.jsx)("span", {
                                className: " ",
                                children: "retouch" === F.query.affiliateCode ? (0, i.jsxs)(i.Fragment, {
                                    children: [Number(eZ ? .discount_configs[iu] ? .RING ? .value), "% OFF APPLIED"]
                                }) : (0, i.jsxs)(i.Fragment, {
                                    children: [Number(eZ ? .discount_configs[iu] ? .RING ? .value), "% off applied via", " ", eZ ? .discount_configs[iu] ? .RING ? .code, F.query.workAffiliate ? " ultrahuman" : ""]
                                })
                            }), (0, i.jsx)("br", {})]
                        }) : null, " ", "referral" === e5.type && e1 ? (0, i.jsx)("p", {
                            className: "offerTag",
                            children: (0, i.jsxs)("span", {
                                children: [(0, i.jsx)("span", {
                                    className: "offerApplied",
                                    children: e1.discountCode
                                }), " ", "Offer Applied"]
                            })
                        }) : null, "hero" === e5.type && iE[F.query.heroCategory] ? (0, i.jsx)("p", {
                            className: "offerTag transparent",
                            children: (0, i.jsx)("span", {
                                children: iE[F.query.heroCategory]
                            })
                        }) : null, "server" === e5.type && e5.priceTagText ? (0, i.jsx)("p", {
                            className: "offerTag transparent",
                            children: (0, i.jsx)("span", {
                                children: e5.priceTagText
                            })
                        }) : null, null, null, null, "birthday" === e5.type ? (0, i.jsxs)("p", {
                            className: "offerTag",
                            children: [(0, i.jsx)(em.default, {
                                src: v.default,
                                alt: "birthday_icon",
                                style: {
                                    borderRadius: "0"
                                }
                            }), (0, i.jsx)("span", {
                                children: "Birthday Discount Applied"
                            })]
                        }) : null, "ringPromo" === e5.type ? (0, i.jsxs)("p", {
                            className: "offerTag transparent",
                            children: [(0, i.jsxs)("span", {
                                children: [ec ? .title || "Special", " Offer Applied"]
                            }), (0, i.jsx)("br", {})]
                        }) : null, B && !(eZ || e1) ? (0, i.jsx)("p", {
                            className: "offerTag",
                            children: (0, i.jsxs)("span", {
                                children: [(0, i.jsx)("span", {
                                    className: "offerApplied",
                                    children: B
                                }), " ", "Offer Applied"]
                            })
                        }) : null]
                    }), eg ? (0, i.jsx)("p", {
                        className: "shipping-estimate",
                        children: eg ? eQ : (0, i.jsx)(i.Fragment, {
                            children: "Dispatch time based on ring selection"
                        })
                    }) : null, g ? null : (0, i.jsx)("p", {
                        className: "description",
                        children: b
                    })]
                })]
            }), ed < ee.PHONE_MAX_WIDTH_IN_PX && (0, i.jsx)("div", {
                className: "carousel-section",
                children: (0, i.jsx)(eo.ProductCarousel, {
                    items: [...(H.color ? U[H.color] : U[T.RingProColors.GOLD]) ? ? []],
                    sticky: !0,
                    navigationType: "cursorTracked",
                    autoSlideDuration: 4.2
                })
            }), iL, iF, iY, iK, null, null, iH, iG, iX, iR && (0, i.jsx)(eA.TradeInModal, {
                onClose: () => iI(!1),
                contextSource: "ring_pro"
            })]
        })
    }).withConfig({
        displayName: "ProductSelectionSection__BuySection",
        componentId: "sc-3d48f10f-16"
    })
    `
  --border-selected: 1.5px solid rgba(0, 106, 245, 1);
  --border-disabled: 1.5px solid rgba(0, 0, 0, 0.1);
  --border: 1.5px solid rgba(0, 0, 0, 0.1);

  --background-selected: rgba(250, 250, 250, 1);

  --text-grey: rgba(0, 0, 0, 0.5);

  letter-spacing: -0.04em;
  font-weight: 400;
  display: block;

  .addon {
    .label {
      color: #000;
      font-size: 11px;
      font-style: normal;
      font-weight: 500;
      line-height: 120%; /* 13.2px */
      letter-spacing: 2.09px;
      text-transform: uppercase;
    }

    .title {
      gap: 2px;
    }
    .title-bar {
      align-items: end;
    }
  }
  .divider {
    text-align: center;
    margin: 24px 0;
    color: #b4b4b4;
    font-size: 15px;
    line-height: 16px; /* 106.667% */
  }

  .ultrahumanx-section strong {
    font-weight: 500;
  }

  .trade-in-line {
    font-size: 14px;
    letter-spacing: -0.04em;
    color: #000;
    display: flex;
    align-items: center;
    gap: 4px;

    .trade-in-bold {
      font-weight: 500;
    }

    .trade-in-learn-more {
      color: #0882ff;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      font-weight: 500;
    }

    &.trade-in-selected {
      letter-spacing: -0.04em;
    }

    .trade-in-edit {
      color: #0882ff;
      font-size: 13px;
      letter-spacing: -0.03em;
      text-decoration: underline;
      cursor: pointer;
      flex-shrink: 0;
    }
  }

  .trade-in-description {
    font-size: 1.4rem;
    color: rgba(0, 0, 0, 0.5);
    margin-bottom: 4px;
  }

  .trade-in-prompt {
    display: flex;
    flex-direction: column;
    gap: 12px;

    button {
      border-radius: 12px;
      padding: 12px;
      font-weight: 500;
      font-size: 1.6rem;
      text-align: left;
      letter-spacing: -0.64px;
    }

    .trade-in-details {
      color: rgba(0, 0, 0, 0.5);
      font-size: 14px;
      font-weight: 400;
      margin-top: 4px;
    }
  }

  .checkmark {
    min-width: 14px;
  }
  .save-tag {
    border-radius: 5px;
    background: #0eff6e;
    padding: 2px 4px 1px;
    align-self: flex-start;
    color: #000;
    font-size: 12px;
    font-weight: 500;
    line-height: 100%; /* 12px */
    letter-spacing: -0.24px;
    margin-top: 4px;
  }
  .footer-info {
    color: rgba(0, 0, 0, 0.7);
    font-size: 12px;
    font-weight: 400;
    line-height: 130%; /* 15.6px */
    letter-spacing: -0.48px;
  }

  .strike-through {
    text-decoration: line-through;
    color: rgba(0, 0, 0, 0.5);
  }

  .mobile-only {
    order: 1;
    @media (min-width: ${({theme:e})=>e.globalV2.sm.maxWidth}) {
      display: none;
    }
  }

  .sm-d-none {
  }

  button {
    border: var(--border);
    background: white;
    cursor: pointer;
    overflow: hidden;
    color: ${({theme:e})=>e.colorsV2.primary}; // this is for blue text color button issue in iOS

    &:hover {
      background: var(--background-selected);
    }
  }

  button.active {
    border: var(--border-selected);
    background: var(--background-selected);
  }

  .not-servicable-oos-tag {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 1px;
    font-size: 1rem;
    background: rgba(0, 0, 0, 0.15);
  }

  button:disabled {
    cursor: not-allowed;
    pointer-events: all !important;
    color: rgba(0, 0, 0, 0.2);
    border: var(--border-disabled);
  }

  .hsa-disclaimer {
    display: flex;
    gap: 8px;
    align-items: center;
    align-self: flex-start;
    padding: 12px 16px;
    background: #f5f5f5;
    font-size: 14px;
    border-radius: 12px;
    color: rgba(0, 0, 0, 0.5);
    strong {
      font-weight: 500;
      color: black;
    }
  }

  h4,
  h5,
  h2 {
    font-style: normal;
    font-weight: 500;
  }

  h5 {
    font-size: 1.9rem;
  }

  h5 {
    font-size: 1.9rem;
  }

  .card {
    background: rgba(238, 238, 238, 0.5);
    border-radius: 8px;
    padding: 16px;
  }

  .title-info-content {
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
      padding-right: 80px;
    }

    .currencyDropdown {
      position: absolute;
      right: 0;
      top: 0;

      @media (min-width: ${({theme:e})=>e.globalV2.lg.minWidth}) {
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
      font-size: 24px;
      line-height: 100%;
      display: flex;
      align-items: center;
      gap: 10px;

      .strike-through {
        text-decoration: line-through;
        color: rgba(0, 0, 0, 0.5);
      }
    }

    .total-effective-price {
      font-size: 18px;
      font-weight: 600;
      margin: 0.4rem 0 0;
      color: #000;
    }

    .early-bird-chip {
      font-size: 16px;
      // padding: 2px 8px;
      border-radius: 8px;
      // background: #efefef;
      justify-self: flex-end;
      color: rgba(0, 0, 0, 0.5);
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
      border: none;
      gap: 0.8rem;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      padding: 0.5rem 0.8rem;
      border-radius: 8px;
      background: rgba(0, 0, 0, 0.04);
      width: fit-content;
      font-weight: 500;
      text-align: left;

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

          display: flex;
          align-items: center;
        }
      }

      img {
        width: 24px;
        height: 24px;
        object-fit: cover;
        border-radius: 50%;
      }

      span {
        color: #000;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        display: flex;
        align-items: center;
        line-height: 100%;
        gap: 5px;

        .offerApplied {
          opacity: 1;
          color: #000;
          font-size: 16px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          // text-transform: uppercase;
          width: fit-content;
          display: inline-block;
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

      svg {
        width: 16px;
        height: 16px;
        display: inline-block;
        margin-right: 4px;
        vertical-align: middle;
      }
    }

    .description {
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

      @media (min-width: ${({theme:e})=>e.global.phone.maxWidth}) {
        margin: unset;
      }
      font-size: 16px;
      line-height: 130%;
      strong {
        font-weight: 500;
      }
    }

    @media (min-width: ${({theme:e})=>e.global.phone.maxWidth}) {
      gap: 8px;
      padding: 4.8rem 0;
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
  }

  .engraving-prompt {
    display: flex;
    flex-direction: column;
    gap: 12px;

    button {
      border-radius: 12px;
      padding: 12px;
      font-weight: 500;
      font-size: 1.6rem;
      text-align: left;
      letter-spacing: -0.64px;

      &.active {
        border: var(--border-selected);

        &.border-radius-change {
          border-radius: 12px 12px 0 0;
        }
      }

      .disclaimer-engraving {
        color: rgba(0, 0, 0, 0.5);
        font-size: 14px;
        font-weight: 400;
      }
    }

    .engraving-content {
      margin-top: -12px;
      opacity: 0;
      height: 0;
      animation: ${eO} 0.3s ease-in-out forwards;

      h5 {
        font-size: 1.4rem;
        margin-bottom: 4px;
      }

      .input-btn-container {
        display: flex;
        flex-direction: column;
        gap: 4px;

        .max-length {
          display: flex;
          flex-direction: row;
          justify-content: space-between;

          color: rgba(0, 0, 0, 0.5);
          font-size: 12px;
          font-weight: 400;
        }

        button {
          width: fit-content;
          flex-grow: 0;
        }

        input {
          flex-grow: 1;
          padding: 12px;
          border-radius: 0 0 12px 12px;
          font-size: 1.6rem;
          border: var(--border-selected);
          border-top: 0;
        }
      }
    }
  }
  .section-row-content {
    margin-top: 2.4rem;
  }

  .section-row-content.style-selector-section {
    .style-selector {
      display: flex;
      flex-direction: column;
      gap: 12px;

      @media (min-width: 1366px) {
        flex-direction: row;
      }

      button,
      a {
        position: relative;
        width: unset;
        flex-grow: 1;
        flex-shrink: 1;

        display: flex;
        flex-direction: row;
        gap: 8px;

        font-weight: 500;
        font-size: 13px;
        align-items: center;

        border-radius: 12px;
      }
    }
  }

  .section-row-content.color-section {
    .colors {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;

      @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
        grid-template-columns: repeat(3, 1fr);
      }

      @media (min-width: ${({theme:e})=>e.globalV2.xxxl.minWidth}) {
        grid-template-columns: repeat(5, 1fr);
      }

      button {
        position: relative;
        width: unset;
        flex-grow: 1;
        flex-shrink: 1;

        display: flex;
        flex-direction: column;
        gap: 4px;

        font-weight: 500;
        font-size: 1.3rem;
        align-items: center;

        padding: 16px;
        border-radius: 12px;

        &.active {
          .tag {
            color: #000000;
            background: #ffffff;
          }
        }

        .tag {
          position: absolute;
          top: 0;
          right: 0;
          display: inline-block;
          font-weight: 500;
          // letter-spacing: 2px;
          font-size: 1.1rem;
          padding: 3px 6px 2px 8px;
          border-radius: 0px 12px 0px 12px;
          color: #000;
          background: #eee;

          display: flex;
          flex-direction: row;
          gap: 4px;
          align-items: center;

          @media (min-width: ${({theme:e})=>e.globalV2.sm.maxWidth}) {
            // font-size: 1.2rem;
            padding: 3px 6px 3px 8px;
          }
        }
      }
    }
  }

  .section-row-content.sizing-section {
    .sizes {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 0.4rem;

      button {
        min-width: 24%;
        padding: 14px 0;
        border-radius: 12px;
        font-weight: 500;
        font-size: 16px;
        align-self: start;

        @media (min-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
          min-width: 13%;
        }
      }
    }

    button.manual-size {
      font-size: 16px;
      line-height: 120%;
      margin-bottom: 8px;
      border: none;
      background-color: transparent;
      font-weight: 500;

      width: 100%;
      text-align: center;

      margin: 24px 0 12px;
    }

    .manual-size-select-container {
      height: 0;
      overflow: hidden;
      transition: all 0.3s ease-in-out;
      background: #ffffff;

      &.active {
        height: 200px;
        overflow: visible;

        @media (min-width: ${({theme:e})=>e.globalV2.md.minWidth}) {
          height: 150px;
        }
      }
    }

    .size-shipping {
      padding-top: 4px;
      display: flex;
      gap: 8px;
      font-size: 14px;
      line-height: 110%;
      letter-spacing: -0.56px;
      margin-bottom: 16px;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;

      strong {
        font-weight: 500;
      }
    }

    .sizing-kit {
      position: relative;

      border-radius: 12px;
      position: relative;
      width: 100%;

      .sub-title {
        margin-top: 0.6rem;
        font-weight: 500;
        font-size: 1.6rem;
        color: rgba(0, 0, 0, 0.4);
        text-align: left;
        font-weight: 400;
        font-size: 1.4rem;
        margin-bottom: 12px;
      }

      .tag {
        display: block;
        position: absolute;

        top: 8px;
        right: 8px;

        padding: 2px 6px;

        font-size: 1.1rem;
        font-weight: 500;
        letter-spacing: 1.15px;

        border-radius: 4px;
        background: rgba(0, 0, 0, 0.15);
        color: #000000;

        &.mobile {
          @media (min-width: ${({theme:e})=>e.globalV2.lg.maxWidth}) {
            display: none;
          }
        }

        &.desktop {
          display: none;
          @media (min-width: ${({theme:e})=>e.globalV2.lg.maxWidth}) {
            display: block;
          }
        }
      }

      .button-content {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px;
        // padding-bottom: 38px;
        .img {
          display: flex;
          align-items: center;
        }

        .sizing-kit-img {
          border-radius: 7px;
          object-fit: cover;

          display: none;

          @media (min-width: ${({theme:e})=>e.globalV2.lg.maxWidth}) {
            display: block;
          }
        }

        .content {
          display: flex;
          flex-direction: column;
          text-align: left;
          gap: 4px;
          width: 100%;

          h5 {
            margin-bottom: 0;
            font-size: 1.7rem;
          }

          .sub-title {
          }
        }
      }

      // .sizing-kit-delivery {
      //   height: 30px;
      //   // position: absolute;
      //   display: flex;
      //   gap: 10px;
      //   align-items: center;
      //   justify-content: center;
      //   border-radius: 0px 0px 12px 12px;
      //   background: #f5f5fa;
      //   left: 0;
      //   bottom: 0;
      //   width: 100%;

      //   transform: scale(2);
      // }
    }

    .delivery-management-section {
      opacity: 0.6;
      cursor: not-allowed;
      transition: all 0.3s ease-in-out;

      &.active {
        opacity: 1;
        cursor: unset;
      }
    }
  }

  .charger {
    display: flex;
    flex-direction: column;
    gap: 8px;

    button.charger-option {
      position: relative;
      border-radius: 12px;
      width: 100%;
      height: 72px;
      padding: 0;
      display: flex;
      align-items: center;

      font-size: 1.6rem;
      letter-spacing: -0.64px;

      .charger-image {
        height: 72px;
        width: 72px;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;

        img {
          max-height: 100%;
          max-width: 100%;
          width: auto !important;
          height: auto !important;
          object-fit: contain;
        }
      }

      &.active {
        border: var(--border-selected);
        background-color: var(--background-selected);
      }

      .tag {
        position: absolute;
        display: inline-block;
        top: 4px;
        left: 4px;
        padding: 3px 4px 2px 6px;
        border-radius: 4px;
        color: #000000;
        background-color: #0eff6e;
        font-size: 1.2rem;
        font-weight: 500;
        letter-spacing: 2px;
      }

      .charger-label-row {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-left: 8px;
        padding-right: 16px;
      }

      .charger-label-row .title {
        font-weight: 500;
        text-align: left;
      }

      p.title {
        font-weight: 500;
        text-align: left;
      }

      .charger-price {
        font-size: 16px;
        font-weight: 500;
      }

      p.sub-title {
        margin-top: 0.6rem;
        font-weight: 500;
        font-size: 1.6rem;
        color: rgba(0, 0, 0, 0.4);
        text-align: left;
        font-weight: 400;
        font-size: 1.4rem;
      }

      &.secondary {
        text-align: left;
        color: #000;
        font-size: 16px;
        font-weight: 500;
        line-height: 100%; /* 16px */
        letter-spacing: -0.64px;
      }

      input {
        margin-right: 8px;
      }
    }
  }

  .ultrahumanx-content {
    display: flex;
    flex-direction: column;
    gap: 8px;

    button {
      width: 100%;
      text-align: left;
      border-radius: 12px;
      overflow: hidden;
    }
    .uhx-extra-benefit {
      border-radius: 12px;
      background: #f5f5fa;
      color: #057ff0;
      text-align: center;
      font-size: 14px;
      font-weight: 500;
      line-height: 100%; /* 14px */
      letter-spacing: -0.28px;
      padding: 13px 0;
      text-align: center;
    }

    button.no-ultrahumanx,
    .secondary {
      // color: var(--text-grey);
      padding: 16px;
      font-size: 16px;
      letter-spacing: -0.64px;

      input {
        margin-right: 8px;
      }
    }

    .card.ultrahumanx {
      padding: 0;
      border-radius: 12px;
      overflow: hidden;

      .uhx-content {
        padding: 0;
        margin: 16px;

        .content {
          gap: 4px;
          h5 {
            font-size: 16px;
            line-height: 120%;
          }
          p {
            font-size: 16px;
            line-height: 130%;
            color: var(--text-grey);
          }
        }
      }
      .uhx-extra-benefit {
        background: #057ff0;
        padding: 8px 0;
        margin-bottom: 16px;
      }
    }
  }

  .cart-summary {
    .card {
      padding: 24px;

      h4 {
        font-size: 24px;
        line-height: 110%;
        margin-bottom: 32px;
      }

      .content {
        border-bottom: 1px solid rgba(0, 0, 0, 0.07);
        padding-bottom: 24px;

        h5 {
          font-size: 18px;
          line-height: 100%;
          margin-bottom: 8px;
        }

        .size {
          font-size: 18px;
          line-height: 100%;
          margin-bottom: 16px;
        }
        .price-breakup {
          display: flex;
          justify-content: space-between;
          p {
            font-size: 16px;
            line-height: 100%;
            color: var(--text-grey);
            margin-bottom: 8px;
          }
          p:first-child {
            margin-right: 4px;
          }
          p:last-child {
            width: 12ch;
            text-align: right;
            margin-left: 4px;
          }
        }

        // .ultrahumanx-price {
        //   margin-bottom: 0px;
        // }
      }

      .benefits {
        display: flex;
        margin: 24px 0;
        justify-content: space-between;

        .benefit {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 9px;

          p {
            color: rgba(0, 0, 0, 0.4);
            font-size: 13px;
            line-height: 100%;
            letter-spacing: -0.52px;
            text-align: center;

            @media (max-width: ${({theme:e})=>e.globalV2.sm.maxWidth}) {
              max-width: 12ch;
            }
          }
        }
      }

      .disclaimer {
        color: rgba(0, 0, 0, 0.4);
        text-align: center;
        font-size: 11px;
        line-height: 120%;
        letter-spacing: -0.44px;
      }

      .total {
        margin-top: 32px;
        padding-bottom: 32px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.07);

        .total-bar {
          display: flex;
          justify-content: space-between;

          h5 {
            font-size: 18px;
            line-height: 100%;
          }

          p {
            font-size: 22px;
            line-height: 100%;
            font-weight: 500;
          }
        }

        .taxes {
          font-size: 14px;
          line-height: 100%;
          color: rgba(0, 0, 0, 0.4);
          margin-bottom: 16px;

          strong,
          b {
            font-weight: 500;
          }

          &.shipping-estimate {
            display: flex;
            align-items: center;
            margin: 8px 0;
            img {
              margin-right: 8px;
            }
          }
        }

        .checkout {
          margin-top: 4px;
          width: 100%;
          margin-bottom: 16px;
        }

        .shipping-info {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;

          .free-delivery {
            font-weight: 500;
            font-size: 15px;
            line-height: 100%;

            color: rgba(0, 0, 0, 0.9);
          }

          .shipping-estimate {
            font-size: 15px;
            line-height: 100%;

            color: rgba(0, 0, 0, 0.4);
          }
        }

        .hsa-fsa-disclaimer {
          padding: 0;
          border-radius: 6px;
          font-size: 1.4rem;
          color: #00000066;

          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.2rem;

          .text-right {
            text-align: right;
          }

          display: inline-flex;

          b {
            color: #000000;
            font-weight: 500;
          }

          img {
            margin: 0 !important;
            padding: 0 !important;
            object-fit: cover;
            padding: 1px;

            height: 2.8rem;
            width: auto;

            transform: translateY(-0.1rem);
          }
        }
      }
    }
  }
`;
    var eX = e.i(69949);
    let eq = (0, z.default)(({
        className: e
    }) => {
        let {
            t: r
        } = (0, t.useTranslation)("ring"), o = (0, n.useContext)(a.RingProSelectionContext), l = (0, n.useContext)(er.CartContext), s = (0, n.useContext)(Z.ModalContext), {
            resetCounter: c
        } = (0, eI.useRetouchFlowContext)(), {
            size: d,
            uhx: p,
            uhxCart: g,
            shippingEstimate: h,
            color: m,
            defaultCurrency: x,
            engraving: u,
            notServicable: b,
            goToNextStep: y,
            isLoading: j,
            tradeInDevice: v,
            tradeInCredit: C
        } = o, N = () => {
            j || (S.default.track("ring-pro-checkout", {
                clicked: !0
            }), c(), o.checkout(), s.hide())
        }, {
            store: P
        } = l, k = (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsxs)(eX.MidPanel, {
                children: [(0, i.jsxs)("p", {
                    className: "total-price-single",
                    children: [o.currencySymbol, (0, Y.formatPriceWithComma)(o.effectivePrice), (0, i.jsxs)("span", {
                        className: "tax-disclaimer",
                        children: ["(", l.taxString, ".)"]
                    })]
                }), v && C > 0 && (0, i.jsxs)("p", {
                    className: "trade-in-credit",
                    children: ["-", o.currencySymbol, (0, Y.formatPriceWithComma)(C), " (Trade-in credits)"]
                })]
            }), (0, i.jsxs)(eX.MidPanelPhone, {
                onClick: () => {
                    let e = document.getElementById("order-summary-card");
                    e && e.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    })
                },
                children: [(0, i.jsx)("div", {
                    className: "subtitle-text-btn",
                    children: "Total"
                }), (0, i.jsxs)("p", {
                    className: "total-price-single",
                    children: [o.currencySymbol, (0, Y.formatPriceWithComma)(o.effectivePrice), (0, i.jsxs)("span", {
                        className: "tax-disclaimer",
                        children: ["(", l.taxString, ".)"]
                    })]
                }), v && C > 0 && (0, i.jsxs)("p", {
                    className: "trade-in-credit",
                    children: ["-", o.currencySymbol, (0, Y.formatPriceWithComma)(C), " (Trade-in credits)"]
                })]
            })]
        });
        return !0 === b ? null : (0, i.jsxs)("div", {
            className: e,
            children: [(0, i.jsx)(eX.LeftPanel, {
                children: h ? (0, i.jsxs)("p", {
                    className: "chat-specialist",
                    children: [(0, i.jsx)(f.ShippingBox, {}), " ", h]
                }) : null
            }), o.size ? k : null, (0, i.jsx)(eX.RightPanel, {
                children: d && (p || null !== g) ? (0, i.jsx)(w.PrimaryButton, {
                    onClick: () => {
                        o.size && (o.size ? S.default.track("Bottom bar addto cart - CLICK") : S.default.track("Bottom bar select color-size - CLICK")), N()
                    },
                    disabled: j || !(d && (p || null !== g)),
                    "aria-busy": j,
                    "data-buttontype": "add to cart",
                    "data-variantId": m && d && x ? W.RingProVariants[m] ? .[d] ? .[(0, A.getEngravingKey)(u)] ? .variantId[P] : "",
                    "data-product": "Ultrahuman Ring PRO",
                    children: j ? (0, i.jsx)(i.Fragment, {
                        children: (0, i.jsx)(en.DotSpinner, {
                            color: "#000000"
                        })
                    }) : (0, i.jsx)(i.Fragment, {
                        children: r(o.size ? "ring.productSelection.cartSummary.addToCart" : "ring.productSelection.cartSummary.colorSize")
                    })
                }) : (0, i.jsx)(w.PrimaryButton, {
                    onClick: y,
                    "data-buttontype": "go to next step",
                    "data-variantId": m && d && x ? W.RingProVariants[m] ? .[d] ? .[(0, A.getEngravingKey)(u)] ? .variantId[P] : "",
                    "data-product": "Ultrahuman Ring PRO",
                    children: r("ring.CONTINUE")
                })
            })]
        })
    }).withConfig({
        displayName: "BottomBar__RingProBottomBar",
        componentId: "sc-fa638bfd-0"
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

  .tax-disclaimer {
    text-align: center;
    font-size: 14px;
    font-weight: 400;
    line-height: 23px; /* 164.286% */
    letter-spacing: -0.28px;
  }


  ${Q.gridMixin}

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

  .trade-in-credit {
    font-size: 1.2rem;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.5);
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
    var eJ = e.i(94600),
        eQ = e.i(8762),
        eZ = e.i(18888),
        e0 = e.i(82382),
        e1 = e.i(86236);
    let e2 = (0, z.default)(({
        className: e
    }) => {
        let r = (0, eQ.useGsapContext)(),
            {
                add: a
            } = (0, e0.useMasterTimeline)(),
            o = (0, n.useRef)(null),
            l = (0, n.useRef)(null),
            {
                t: s
            } = (0, t.useTranslation)("ring"),
            c = s("ring.bgBlurredSection.ringPro.contentA1"),
            d = s("ring.bgBlurredSection.ringPro.contentA2");
        return (0, e1.useIsomorphicLayoutEffect)(() => (l.current = new IntersectionObserver(e => {
            e[0].isIntersecting && o.current && window && r.add(() => {
                let e = eZ.default.timeline({
                    defaults: {
                        duration: .5,
                        ease: "power2.easeInOut"
                    },
                    scrollTrigger: {
                        trigger: o.current,
                        start: "top center ",
                        end: "50px",
                        scrub: .2,
                        immediateRender: !1
                    }
                });
                e.fromTo("h3 > span", {
                    autoAlpha: 0
                }, {
                    autoAlpha: 1,
                    duration: .35,
                    stagger: .05
                }, .2), e.set("h3 > span", {
                    autoAlpha: 1
                }), a(e, "ring-pro-bg-blurred-content1")
            })
        }, {
            root: null,
            threshold: 0
        }), o.current && l.current.observe(o.current), () => {
            l.current && l.current.disconnect()
        }), []), (0, i.jsx)("div", {
            ref: o,
            className: e,
            children: (0, i.jsxs)("h3", {
                children: [c.split(" ").map((e, t) => (0, i.jsxs)("span", {
                    children: [e, " "]
                }, `line1-${t}`)), (0, i.jsx)("br", {}), d.split(" ").map((e, t) => (0, i.jsxs)("span", {
                    children: [e, " "]
                }, `line2-${t}`))]
            })
        })
    }).withConfig({
        displayName: "BgBlurredTextRingPro__HeroTitle",
        componentId: "sc-a34540a5-0"
    })
    `
  height: 100vh;
  width: 100vw;
  display: grid;
  place-items: center start;
  padding-left: 20px;

  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    padding-left: 48px;
  }

  h3 {
    max-width: 85ch;
    text-align: left;

    @media (max-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
      padding: 0 20px 0 0;
    }

    span {
      @media (max-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
        color: #fff;
        text-align: left;
        font-size: 48px;
        font-style: normal;
        font-weight: 500;
        line-height: 110%;
        letter-spacing: -1.92px;
      }
    }
  }
`, e4 = (0, z.default)(({
        className: e
    }) => {
        let {
            t: r
        } = (0, t.useTranslation)("ring"), a = (0, eQ.useGsapContext)(), {
            add: o
        } = (0, e0.useMasterTimeline)(), l = (0, n.useRef)(null), s = (0, n.useRef)(null), c = [{
            title: r("ring.bgBlurredSection.ringPro.contentB.a"),
            description: r("ring.bgBlurredSection.ringPro.contentB.a_desc")
        }, {
            title: r("ring.bgBlurredSection.ringPro.contentB.b"),
            description: r("ring.bgBlurredSection.ringPro.contentB.b_desc")
        }, {
            title: r("ring.bgBlurredSection.ringPro.contentB.c"),
            description: r("ring.bgBlurredSection.ringPro.contentB.c_desc")
        }];
        return (0, e1.useIsomorphicLayoutEffect)(() => (s.current = new IntersectionObserver(e => {
            e[0].isIntersecting && l.current && window && a.add(() => {
                let e = eZ.default.timeline({
                    defaults: {
                        duration: .5,
                        ease: "power2.easeInOut"
                    },
                    scrollTrigger: {
                        trigger: l.current,
                        start: "top center ",
                        end: "50px",
                        scrub: .2,
                        immediateRender: !1
                    }
                });
                e.fromTo(".config-contents", {
                    autoAlpha: 0
                }, {
                    autoAlpha: 1,
                    duration: .35,
                    stagger: .06
                }, .2), o(e, "ring-pro-bg-blurred-content2")
            })
        }, {
            root: null,
            threshold: 0
        }), l.current && s.current.observe(l.current), () => s.current ? .disconnect()), []), (0, i.jsx)("div", {
            ref: l,
            className: e,
            children: (0, i.jsx)("div", {
                className: "config-contents",
                children: c.map((e, t) => (0, i.jsxs)("div", {
                    className: "config",
                    children: [(0, i.jsx)("h3", {
                        children: e.title
                    }), (0, i.jsx)("p", {
                        children: e.description
                    })]
                }, `config-${t}`))
            })
        })
    }).withConfig({
        displayName: "BgBlurredTextRingPro__Content2RingPro",
        componentId: "sc-a34540a5-1"
    })
    `
  color: #fff;
  height: 100vh;
  width: 100vw;
  display: grid;
  place-items: center;

  .config-contents {
    max-width: 900px;
    display: flex;
    flex-direction: column;
    gap: 60px;
    @media (min-width: ${({theme:e})=>e.globalV2.xl.maxWidth}) {
      gap: 80px;
    }
  }

  .config {
    display: flex;
    gap: 8px;
    flex-direction: column;
    width: 100%;
    align-items: center;
    padding: 0 20px;
    @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
      flex-direction: row;
      gap: 48px;
      padding: unset;
    }
    p {
      flex: 1;
    }
  }

  h3 {
    color: #fff;
    text-align: center;
    font-size: 36px;
    font-style: normal;
    font-weight: 500;
    line-height: 90%;
    letter-spacing: -1.44px;
    text-transform: capitalize;
    width: 100%;
    @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
      width: 9ch;
      font-size: 48px;
      text-align: left;
      line-height: 90%;
      letter-spacing: -2.08px;
    }
  }

  p {
    color: #fff;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 120%;
    letter-spacing: -0.64px;
    width: 91%;
    @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
      text-align: left;
      max-width: 29ch;
      font-size: 20px;
      line-height: 120%;
      letter-spacing: -0.8px;
    }
  }
`, e5 = (0, z.default)(({
        className: e,
        htmlId: t
    }) => {
        let {
            width: r
        } = (0, G.useWindowSize)();
        return (0, i.jsxs)("div", {
            className: e,
            id: t,
            children: [(0, i.jsx)(J.CustomImage, {
                src: r < 768 ? "web_v2/ring-pro/buy-v2/lifestyle/mob.png/w_1080" : "web_v2/ring-pro/buy-v2/lifestyle/web.png/w_1920",
                alt: "",
                fill: !0,
                className: "img-container"
            }), (0, i.jsx)("div", {
                className: "backdrop"
            }), (0, i.jsx)("div", {
                className: "content content-1",
                children: (0, i.jsx)(e2, {})
            }), (0, i.jsx)("div", {
                className: "content content-2",
                children: (0, i.jsx)(e4, {})
            })]
        })
    }).withConfig({
        displayName: "BgBlurredTextRingPro",
        componentId: "sc-a34540a5-2"
    })
    `
  height: 200vh;
  position: relative;
  text-align: center;

  & .content {
    position: absolute;
    display: grid;
    place-items: center;
  }

  & .content-1 {
    z-index: 4;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100vh;
    width: 100vw;
    place-items: center start;
  }

  & .content-2 {
    z-index: 4;
    bottom: 0;
    height: 100vh;
    width: 100%;
    place-items: center start;
    padding-left: 20px;

    @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
      padding-left: 48px;
    }

    /* Override Content2RingPro root so it doesn't overflow */
    & > div {
      width: 100%;
      max-width: 100%;
      box-sizing: border-box;
      place-items: center start;
      justify-items: start;
    }

    .config-contents {
      align-items: flex-start !important;
    }

    .config {
      align-items: flex-start !important;
    }

    h3,
    p {
      text-align: left !important;
    }
  }

  span {
    color: #fff;
    text-align: left;
    font-size: 68px;
    font-style: normal;
    font-weight: 500;
    line-height: 110%;
    letter-spacing: -2.72px;
  }

  .img-container {
    position: sticky !important;
    top: 0 !important;
    left: 0 !important;
    right: 0 !important;
    height: 100vh !important;
    width: 100vw !important;
    object-fit: cover;
    object-position: top;
    z-index: 2;
  }

  .backdrop {
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    right: 0 !important;
    z-index: 3;
    height: 100%;
    background: linear-gradient(
      46deg,
      #000 -11.46%,
      rgba(0, 0, 0, 0.53) 50.47%,
      rgba(0, 0, 0, 0) 107.66%
    );
  }
`;
    var e6 = e.i(52935),
        e8 = e.i(64130),
        e3 = e.i(19661),
        e7 = e.i(52345),
        e9 = e.i(54134),
        ie = e.i(4753),
        ii = e.i(52126);

    function it(e) {
        let {
            t: o
        } = (0, t.useTranslation)("ring"), l = (0, r.useRouter)(), {
            regionSlug: s
        } = (0, n.useContext)(k.RegionLocaleContext);
        (0, F.useGlobalUI)({
            headerCollaspable: !0
        });
        let {
            offersData: c,
            secondaryOfferData: d
        } = (0, ii.getOffersForRegion)(e.region, {
            t: o,
            regionSlug: s,
            router: l
        }), p = ("US" === e.region.toUpperCase() || "PR" === e.region.toUpperCase()) && !e.isRingProAvailableInUS, g = "uhx_only" === e.preorderAccess && !e.defaultUhx, h = p || g, m = p ? "We're currently unable to sell or ship this product to U.S. addresses. We'll update you here if that changes." : g ? "Available for Ultrahuman X members first. Opens for everyone in 24 hours." : void 0, x = g && !p;
        return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(e9.SEO, {
                title: "Ultrahuman Ring PRO | Pre-order",
                description: "Ultrahuman Ring PRO — advanced health tracking. Pre-order with tier pricing.",
                image: (0, H.getCompressedAssetUrl)("/web_v2/meta-assets/ring-air-og-lg.png/w_1080")
            }), (0, i.jsxs)(a.RingProSelectionContextProvider, {
                currency: e.currency,
                defaultSize: e.defaultSize,
                defaultColor: e.defaultColor ? ? T.RingProColors.GOLD,
                defaultUhx: e.defaultUhx,
                serverDiscount: e.serverDiscount,
                estimates: e.estimates ? ? void 0,
                notServicable: h,
                notServicableMessage: m,
                uhxFirstOnly: x,
                showEngravingSectionProp: !1,
                children: [(0, i.jsx)(eM, {
                    description: o("ring.productSelection.ringPro.description") || "Advanced health tracking. Pre-order with tier pricing.",
                    offersData: c,
                    secondaryOfferData: d
                }), (0, i.jsxs)("div", {
                    style: {
                        filter: h ? "grayscale(1)" : void 0
                    },
                    children: [(0, i.jsx)(eJ.Contents, {
                        htmlId: "ring-pro-contents",
                        contentData: [{
                            image: "web_v2/ring-pro/buy-v2/box-contents/ring-pro.png/w_800",
                            title: o("ring.contents.ringPro.data.Ring")
                        }, {
                            image: "web_v2/ring-pro/buy-v2/box-contents/charger.png/w_800",
                            title: o("ring.contents.ringPro.data.Charger")
                        }, {
                            image: "web_v2/illustrations/content-cable.png/w_800",
                            title: o("ring.contents.data.Cable")
                        }]
                    }), (0, i.jsx)(e5, {}), (0, i.jsx)(e3.TechnicalSpecs, {
                        htmlId: "ring-pro-specs",
                        config: (0, e7.getRingProTechnicalSpecsConfig)(o)
                    }), (0, i.jsx)(e6.ProductWizard, {
                        title: o("ring.ring-pro.productWizard.contentA")
                    }), (0, i.jsx)(e8.FAQSection, {
                        faqData: (0, ie.getRingProBuyPageFaqData)(o),
                        htmlId: "ring-pro-faq"
                    })]
                }), (0, i.jsx)(eq, {})]
            })]
        })
    }
    e.s(["__N_SSP", () => !0, "default", () => it], 52232)
}, 52591, (e, i, t) => {
    let r = "/ring-pro/buy";
    (window.__NEXT_P = window.__NEXT_P || []).push([r, () => e.r(52232)]), i.hot && i.hot.dispose(function() {
        window.__NEXT_P.push([r])
    })
}]);