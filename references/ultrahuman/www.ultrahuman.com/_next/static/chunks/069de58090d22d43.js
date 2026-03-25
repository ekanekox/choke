(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 94600, 52345, 19661, e => {
            "use strict";
            var t = e.i(91398),
                i = e.i(61791),
                n = e.i(21666),
                r = e.i(60814),
                o = e.i(2100),
                a = e.i(91788);
            e.i(64157);
            var l = e.i(71179);
            let s = r.css `
  margin: 4.8rem 0;
  @media (min-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
    margin: 9.6rem 0;
  }
`,
                c = r.default.div.withConfig({
                    displayName: "Contents__Wrapper",
                    componentId: "sc-f8e2697e-0"
                })
            `
  ${o.gridMixin}
  // padding: 0 20px;
  ${i.sectionPadding}
  ${s}

  margin-top: 0 !important;
  background-color: ${({backgroundColor:e})=>e||"transparent"};
`, d = [{
                image: "web_v2/illustrations/content-ring-air.png/w_800"
            }, {
                image: "web_v2/illustrations/content-charger.png/w_800"
            }, {
                image: "web_v2/illustrations/content-cable.png/w_800"
            }], p = (0, r.default)(({
                className: e,
                htmlId: r,
                contentData: o,
                backgroundColor: s,
                contentsPadding: d,
                $contentsBackgroundColor: p,
                titleA: g,
                titleB: h
            }) => {
                let {
                    t: m
                } = (0, l.useTranslation)("ring"), x = (0, a.useRef)(null), f = (() => {
                    let {
                        t: e
                    } = (0, l.useTranslation)("ring");
                    return [{
                        image: "web_v2/illustrations/content-ring-air.png/w_800",
                        title: e("ring.contents.data.Ring")
                    }, {
                        image: "web_v2/illustrations/content-charger.png/w_800",
                        title: e("ring.contents.data.Charger")
                    }, {
                        image: "web_v2/illustrations/content-cable.png/w_800",
                        title: e("ring.contents.data.Cable")
                    }]
                })(), u = g || m("ring.contents.titleA"), b = h || m("ring.contents.titleB");
                return (0, t.jsx)(c, {
                    className: e,
                    id: r,
                    ref: x,
                    "aria-labelledby": "contents-heading",
                    backgroundColor: s,
                    children: (0, t.jsxs)("div", {
                        children: [(0, t.jsxs)(i.H2Large, {
                            id: "contents-heading",
                            className: "title",
                            children: [u, " ", (0, t.jsx)("span", {
                                children: b
                            })]
                        }), (0, t.jsx)("ul", {
                            className: "contents",
                            "aria-label": "Contents of the box",
                            style: {
                                padding: d
                            },
                            children: (o || f).map((e, i) => (0, t.jsxs)("li", {
                                className: "box-content-element-wrapper",
                                children: [(0, t.jsx)("div", {
                                    className: "box-content-element",
                                    role: "img",
                                    "aria-label": `Image of ${e.title}`,
                                    children: (0, t.jsx)(n.CustomImage, {
                                        src: e.image,
                                        alt: "",
                                        width: "200",
                                        height: "200",
                                        "aria-hidden": "true"
                                    })
                                }), (0, t.jsx)("p", {
                                    children: e.title
                                })]
                            }, i))
                        })]
                    })
                })
            }).withConfig({
                displayName: "Contents",
                componentId: "sc-f8e2697e-1"
            })
            `
  > div {
    grid-column: ${({contentData:e})=>(e||d).length>3?"1/-1":"2/-2"};

    @media (min-width: ${({theme:e})=>e.globalV2.md.minWidth}) {
    padding: ${({contentData:e})=>(e||d).length>3?"0 40px":"initial"};
  }

  .contents {
    ${o.hideScrollbar}
    display: flex;
    flex-wrap: no-wrap;
    overflow-x: auto;
    gap: 10px;
    scroll-snap-type: x mandatory;
    list-style: none;
    padding: 0;
    margin: 0;

    @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
      border-radius: 40px;
      backgroundColor: ${({$contentsBackgroundColor:e})=>e||"rgba(238, 238, 238, 1)"};
    }

    .box-content-element-wrapper {
      flex-shrink: 0;
      scroll-snap-align: center;
      text-align: center;

      width: ${({contentData:e})=>(e||d).length>3?"unset":"80%"};

      @media (min-width: ${({theme:e})=>e.global.phone.maxWidth}) {
        width: ${({contentData:e})=>(e||d).length>3?"20%":"33%"};
        margin: ${({contentData:e})=>(e||d).length>3?"40px 0":"unset"};
      }

      p {
        font-size: ${({contentData:e})=>(e||d).length>3?"2rem":"2.8rem"};
        font-weight: 500;
        padding: 24px 0 48px;
        letter-spacing: -0.8px;

        @media (min-width: ${({theme:e})=>e.global.phone.maxWidth}) {
          padding: 0px 0 48px;
        }
      }

      .box-content-element {
        background: ${({$contentsBackgroundColor:e})=>e||"rgba(238, 238, 238, 1)"};

        img {
          height: ${({contentData:e})=>(e||d).length>3?"220px":"300px"};
          width: auto;
        

          @media (min-width: ${({theme:e})=>e.globalV2.xl.maxWidth}) {
            height: 300px;

          }
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
      background: ${({$contentsBackgroundColor:e})=>e||"rgba(238, 238, 238, 1)"};
      justify-content: ${({contentData:e})=>(e||d).length>3?"center":"justify-content"};
      gap: ${({contentData:e})=>(e||d).length>3?"50px":"unset"};
    }
  }
`;
            e.s(["Contents", 0, p], 94600);
            var g = e.i(8762),
                h = e.i(86236),
                m = e.i(18888);
            let x = r.default.div.withConfig({
                displayName: "TechnicalSpecsHeroPro__PlaceholderSlot",
                componentId: "sc-3feafa04-0"
            })
            `
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.06);
  color: rgba(255, 255, 255, 0.25);
  font-size: 1.4rem;
  font-weight: 500;
  text-align: center;
  padding: 24px;
`, f = r.default.section.withConfig({
                displayName: "TechnicalSpecsHeroPro__HeroContainer",
                componentId: "sc-3feafa04-1"
            })
            `
  padding: 32px 24px 0;

  @media (min-width: ${({theme:e})=>e.globalV2.sm.maxWidth}) {
    padding: 76px 24px 0;
  }

  .hero-content {
    display: flex;
    flex-direction: column;
    gap: 16px;

    @media (min-width: ${({theme:e})=>e.globalV2.sm.maxWidth}) {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  .hero-panel {
    width: 100%;
    flex-shrink: 0;
    flex-grow: 0;

    @media (min-width: ${({theme:e})=>e.globalV2.sm.maxWidth}) {
      width: calc(50% - 12px);
    }
  }

  .hero-caption {
    margin-top: 16px;
    font-size: 1.9rem;

    @media (min-width: ${({theme:e})=>e.globalV2.sm.maxWidth}) {
      font-size: 2.2rem;
    }

    b {
      font-weight: 500;
    }
  }
`, u = r.default.div.withConfig({
                displayName: "TechnicalSpecsHeroPro__HeroImgWrap",
                componentId: "sc-3feafa04-2"
            })
            `
  position: relative;
  aspect-ratio: 1 / 1;
  background: transparent;
  border-radius: 24px;
  overflow: hidden;
`, b = r.default.div.withConfig({
                displayName: "TechnicalSpecsHeroPro__HeroBackgroundLayer",
                componentId: "sc-3feafa04-3"
            })
            `
  position: absolute;
  inset: 0;
  z-index: 0;

  img,
  > span {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  > span {
    display: block !important;
  }
`, w = r.default.div.withConfig({
                displayName: "TechnicalSpecsHeroPro__HeroImgInner",
                componentId: "sc-3feafa04-4"
            })
            `
  position: absolute;
  inset: 0;
  z-index: 1;
  display: flex;
  align-items: ${({$position:e})=>"flex-start"};
  justify-content: ${({$position:e})=>"left"===e?"flex-start":"flex-end"};
  overflow: hidden;
  padding: ${({$position:e})=>"left"===e?"0 0 8% 12%":"0"};
  box-sizing: border-box;

  img {
    object-fit: ${({$position:e})=>"left"===e?"contain":"cover"};
    object-position: ${({$position:e})=>"left"===e?"center top":"right top"};
    max-width: 100%;
    max-height: 100%;
    width: ${({$position:e})=>"right"===e?"100%":"auto"};
    height: ${({$position:e})=>"right"===e?"100%":"auto"};
  }

  /* Next Image with fill renders span > img. Offsets come from GSAP (yPercent) on this inner. */
  > span {
    max-width: 100%;
    max-height: 100%;
    display: flex !important;
    align-items: inherit;
    justify-content: inherit;
    ${({$position:e})=>"right"===e&&`
            width: 100 % ;
            height: 100 % ;
            `}

    img {
      object-fit: ${({$position:e})=>"left"===e?"contain":"cover"};
      object-position: ${({$position:e})=>"left"===e?"center top":"right top"};
      max-width: 100%;
      max-height: 100%;
      width: ${({$position:e})=>"right"===e?"100%":"auto"} !important;
      height: ${({$position:e})=>"right"===e?"100%":"auto"} !important;
    }
  }

  > div {
    max-width: 100%;
    max-height: 100%;
    display: flex;
    align-items: inherit;
    justify-content: inherit;
  }
`;

            function C(e, t) {
                return t ? t.includes("ring.") ? e(t) : t : ""
            }

            function y({
                imageLeftSrc: e,
                imageLeftAlt: i = "Ultrahuman Ring PRO",
                imageRightSrc: r,
                imageRightAlt: o = "Ring PRO Charger",
                backgroundLeftSrc: s,
                backgroundRightSrc: c,
                captionLeftTextBold: d,
                captionLeftTextNormal: p,
                captionRightTextBold: y,
                captionRightTextNormal: v,
                className: k
            }) {
                let {
                    t: j
                } = (0, l.useTranslation)("ring"), S = (0, a.useRef)(null), N = (0, a.useRef)(null), L = (0, a.useRef)(null), I = (0, g.useGsapContext)();
                return (0, h.useIsomorphicLayoutEffect)(() => {
                    let e = setTimeout(() => {
                        S.current && N.current && L.current && I.add(() => {
                            let e = m.default.timeline({
                                scrollTrigger: {
                                    trigger: S.current,
                                    start: "top bottom",
                                    end: "bottom top",
                                    scrub: 0
                                }
                            });
                            e.fromTo(N.current, {
                                yPercent: 40
                            }, {
                                yPercent: 10
                            }, 0), e.fromTo(L.current, {
                                yPercent: 0,
                                scale: 1
                            }, {
                                yPercent: -10,
                                scale: 1.1
                            }, 0)
                        })
                    }, 100);
                    return () => clearTimeout(e)
                }, [I]), (0, t.jsx)(f, {
                    className: k,
                    ref: S,
                    "aria-hidden": "true",
                    children: (0, t.jsxs)("div", {
                        className: "hero-content",
                        children: [(0, t.jsxs)("div", {
                            className: "hero-panel",
                            children: [(0, t.jsxs)(u, {
                                children: [s && (0, t.jsx)(b, {
                                    "aria-hidden": "true",
                                    children: (0, t.jsx)(n.CustomImage, {
                                        src: s,
                                        alt: "",
                                        fill: !0,
                                        sizes: "(max-width: 768px) 100vw, 50vw"
                                    })
                                }), (0, t.jsx)(w, {
                                    $position: "left",
                                    ref: N,
                                    children: e ? (0, t.jsx)(n.CustomImage, {
                                        src: e,
                                        alt: i,
                                        fill: !0,
                                        sizes: "(max-width: 768px) 100vw, 50vw"
                                    }) : (0, t.jsx)(x, {
                                        children: "Ring PRO (asset placeholder)"
                                    })
                                })]
                            }), (null != d || null != p) && (0, t.jsxs)("p", {
                                className: "hero-caption",
                                children: [(0, t.jsx)("b", {
                                    children: C(j, d)
                                }), " ", C(j, p)]
                            })]
                        }), (0, t.jsxs)("div", {
                            className: "hero-panel",
                            children: [(0, t.jsxs)(u, {
                                children: [c && (0, t.jsx)(b, {
                                    "aria-hidden": "true",
                                    children: (0, t.jsx)(n.CustomImage, {
                                        src: c,
                                        alt: "",
                                        fill: !0,
                                        sizes: "(max-width: 768px) 100vw, 50vw"
                                    })
                                }), (0, t.jsx)(w, {
                                    $position: "right",
                                    ref: L,
                                    children: r ? (0, t.jsx)(n.CustomImage, {
                                        src: r,
                                        alt: o,
                                        fill: !0,
                                        sizes: "(max-width: 768px) 100vw, 50vw"
                                    }) : (0, t.jsx)(x, {
                                        children: "Ring PRO Charger (asset placeholder)"
                                    })
                                })]
                            }), (null != y || null != v) && (0, t.jsxs)("p", {
                                className: "hero-caption",
                                children: [(0, t.jsx)("b", {
                                    children: C(j, y)
                                }), " ", C(j, v)]
                            })]
                        })]
                    })
                })
            }
            let v = "web_v2/ring-pro/buy-v2/tech-specs",
                k = {
                    heroSection: {
                        type: "images",
                        images: [{
                            src: "web_v2/illustrations/air-front-tilt.png/w_1920",
                            alt: "UH Ring AIR",
                            textBold: "ring.techSpec.twoImgInfo.lightA",
                            textNormal: "ring.techSpec.twoImgInfo.lightB"
                        }, {
                            src: "web_v2/illustrations/air-full-tilt.png/w_1920",
                            alt: "UH Ring AIR",
                            textBold: "ring.techSpec.twoImgInfo.sleekA",
                            textNormal: "ring.techSpec.twoImgInfo.sleekB"
                        }]
                    },
                    accordionItems: [{
                        titleKey: "ring.MODEL",
                        content: [
                            [{
                                key: "ring.techSpec.model.desc"
                            }]
                        ]
                    }, {
                        titleKey: "ring.BODY",
                        content: [
                            [{
                                key: "ring.DIMENSIONS",
                                bold: !0
                            }, {
                                key: "ring.techSpec.body.width"
                            }, {
                                key: "ring.techSpec.body.thickness"
                            }],
                            [{
                                key: "ring.WEIGHT",
                                bold: !0
                            }, {
                                key: "ring.techSpec.body.weight"
                            }]
                        ]
                    }, {
                        titleKey: "ring.MATERIAL",
                        content: [
                            [{
                                key: "ring.techSpec.material.descA"
                            }, {
                                key: "ring.techSpec.material.descB"
                            }]
                        ]
                    }, {
                        titleKey: "ring.CONNECTIVITY",
                        content: [
                            [{
                                key: "ring.techSpec.connectivity.descA"
                            }, {
                                key: "ring.techSpec.connectivity.descB"
                            }, {
                                key: "ring.techSpec.connectivity.descC"
                            }, {
                                key: "ring.techSpec.connectivity.descD"
                            }, {
                                key: "ring.techSpec.connectivity.descE"
                            }]
                        ]
                    }, {
                        titleKey: "ring.SENSORS",
                        content: [
                            [{
                                key: "ring.techSpec.sensors.descA"
                            }, {
                                key: "ring.techSpec.sensors.descB"
                            }, {
                                key: "ring.techSpec.sensors.descC"
                            }, {
                                key: "ring.techSpec.sensors.descD"
                            }, {
                                key: "ring.techSpec.sensors.descE"
                            }, {
                                key: "ring.techSpec.sensors.descF"
                            }]
                        ]
                    }, {
                        titleKey: "ring.BATTERY",
                        content: [
                            [{
                                key: "ring.techSpec.battery.descA"
                            }, {
                                key: "ring.techSpec.battery.descB"
                            }, {
                                key: "ring.techSpec.battery.descC"
                            }]
                        ]
                    }]
                };

            function j(e, t) {
                let i = t ? ? {
                    imageLeftSrc: `${v}/ring.png/w_1920`,
                    imageLeftAlt: "Ultrahuman Ring PRO",
                    imageRightSrc: `${v}/case.png/w_1920`,
                    imageRightAlt: "Ring PRO Charger",
                    backgroundLeftSrc: `${v}/bg-clean/ring-bg.png/w_1920`,
                    backgroundRightSrc: `${v}/bg-clean/charger-bg.png/w_1920`,
                    captionLeftTextBold: "ring.techSpec.ringPro.twoImgInfo.lightA",
                    captionLeftTextNormal: "ring.techSpec.ringPro.twoImgInfo.lightB",
                    captionRightTextBold: "ring.techSpec.ringPro.twoImgInfo.sleekA",
                    captionRightTextNormal: "ring.techSpec.ringPro.twoImgInfo.sleekB"
                };
                return {
                    heroSection: {
                        type: "custom",
                        content: a.default.createElement(y, {
                            imageLeftSrc: i.imageLeftSrc,
                            imageLeftAlt: i.imageLeftAlt,
                            imageRightSrc: i.imageRightSrc,
                            imageRightAlt: i.imageRightAlt,
                            backgroundLeftSrc: i.backgroundLeftSrc,
                            backgroundRightSrc: i.backgroundRightSrc,
                            captionLeftTextBold: i.captionLeftTextBold,
                            captionLeftTextNormal: i.captionLeftTextNormal,
                            captionRightTextBold: i.captionRightTextBold,
                            captionRightTextNormal: i.captionRightTextNormal
                        })
                    },
                    accordionItems: [{
                        titleKey: "ring.MATERIAL",
                        content: [
                            [{
                                key: "ring.techSpec.ringPro.material.descA"
                            }, {
                                key: "ring.techSpec.ringPro.material.descB"
                            }, {
                                key: "ring.techSpec.ringPro.material.descC"
                            }]
                        ]
                    }, {
                        titleKey: "ring.CONNECTIVITY",
                        content: [
                            [{
                                key: "ring.techSpec.ringPro.connectivity.descA"
                            }, {
                                key: "ring.techSpec.ringPro.connectivity.descB"
                            }]
                        ]
                    }, {
                        titleKey: "ring.techSpec.ringPro.batteryCapacityTitle",
                        content: [
                            [{
                                key: "ring.techSpec.ringPro.batteryCapacity.descA"
                            }]
                        ]
                    }, {
                        titleKey: "ring.techSpec.ringPro.otherKeySpecsTitle",
                        content: [
                            [{
                                key: "ring.techSpec.ringPro.otherKeySpecs.descA"
                            }, {
                                key: "ring.techSpec.ringPro.otherKeySpecs.descB"
                            }, {
                                key: "ring.techSpec.ringPro.otherKeySpecs.descC"
                            }]
                        ]
                    }, {
                        titleKey: "ring.techSpec.ringPro.chargingCase.sectionTitle",
                        content: [
                            [{
                                key: "ring.MATERIAL",
                                bold: !0
                            }, {
                                key: "ring.techSpec.ringPro.chargingCase.materials.descA"
                            }],
                            [{
                                key: "ring.CONNECTIVITY",
                                bold: !0
                            }, {
                                key: "ring.techSpec.ringPro.chargingCase.connectivity.descA"
                            }, {
                                key: "ring.techSpec.ringPro.chargingCase.connectivity.descB"
                            }],
                            [{
                                key: "ring.techSpec.ringPro.otherKeySpecsTitle",
                                bold: !0
                            }, {
                                key: "ring.techSpec.ringPro.chargingCase.otherKeySpecs.descA"
                            }],
                            [{
                                key: "ring.techSpec.ringPro.chargingCase.otherKeySpecs.descB"
                            }],
                            [{
                                key: "ring.techSpec.ringPro.chargingCase.otherKeySpecs.descC"
                            }],
                            [{
                                key: "ring.techSpec.ringPro.chargingCase.otherKeySpecs.descD"
                            }],
                            [{
                                key: "ring.techSpec.ringPro.chargingCase.otherKeySpecs.descE"
                            }],
                            [{
                                key: "ring.techSpec.ringPro.chargingCase.otherKeySpecs.descF"
                            }],
                            [{
                                key: "ring.techSpec.ringPro.chargingCase.otherKeySpecs.descG"
                            }]
                        ]
                    }]
                }
            }

            function S(e, t) {
                return e.map(e => ({
                    title: a.default.createElement("span", {
                        className: "bold"
                    }, t(e.titleKey)),
                    content: a.default.createElement(a.default.Fragment, null, ...e.content.map((e, i) => a.default.createElement("div", {
                        key: i,
                        className: "content"
                    }, ...e.map((e, i) => a.default.createElement("div", {
                        key: i,
                        className: "content-row"
                    }, e.bold ? a.default.createElement("span", {
                        className: "bold"
                    }, t(e.key)) : a.default.createElement("span", null, t(e.key)))))))
                }))
            }
            e.s(["defaultTechnicalSpecsConfig", 0, k, "getRingProTechnicalSpecsConfig", () => j, "resolveAccordionSections", () => S], 52345);
            let N = (0, r.default)(({
                className: e,
                images: i,
                imageBackgroundColor: r
            }) => {
                let {
                    t: o
                } = (0, l.useTranslation)("ring"), s = (0, a.useRef)(null), c = (0, a.useRef)(null), d = (0, a.useRef)(null), p = (0, g.useGsapContext)(), x = i || [{
                    src: "web_v2/illustrations/air-front-tilt.png/w_1920",
                    alt: "UH Ring AIR",
                    textBold: "ring.techSpec.twoImgInfo.lightA",
                    textNormal: "ring.techSpec.twoImgInfo.lightB"
                }, {
                    src: "web_v2/illustrations/air-full-tilt.png/w_1920",
                    alt: "UH Ring AIR",
                    textBold: "ring.techSpec.twoImgInfo.sleekA",
                    textNormal: "ring.techSpec.twoImgInfo.sleekB"
                }];
                return (0, h.useIsomorphicLayoutEffect)(() => {
                    let e = setTimeout(() => {
                        window && c.current && d.current && p.add(() => {
                            let e = m.default.timeline({
                                defaults: {
                                    duration: 1
                                },
                                scrollTrigger: {
                                    trigger: s.current,
                                    start: "top bottom",
                                    end: "bottom top",
                                    scrub: 0
                                }
                            });
                            e.fromTo(c.current, {
                                y: 200,
                                scale: 1
                            }, {
                                y: -100,
                                scale: 1.2
                            }), e.fromTo(d.current, {
                                y: 200,
                                scale: 2.5
                            }, {
                                y: -100,
                                scale: 1.5
                            }, "-=1")
                        })
                    }, 100);
                    return () => {
                        e && clearTimeout(e)
                    }
                }, []), (0, t.jsx)("section", {
                    className: e,
                    ref: s,
                    children: (0, t.jsxs)("div", {
                        className: "content",
                        children: [(0, t.jsxs)("div", {
                            className: "img-info-element",
                            children: [(0, t.jsx)("div", {
                                className: "img-container",
                                style: {
                                    background: r || "#000"
                                },
                                children: (0, t.jsx)(n.CustomImage, {
                                    ref: c,
                                    src: x[0] ? .src,
                                    fill: !0,
                                    alt: x[0] ? .alt
                                })
                            }), (0, t.jsxs)("p", {
                                children: [(0, t.jsx)("b", {
                                    children: x[0] ? .textBold ? .includes("ring.techSpec.") ? o(x[0].textBold) : x[0] ? .textBold
                                }), " ", x[0] ? .textNormal ? .includes("ring.techSpec.") ? o(x[0].textNormal) : x[0] ? .textNormal]
                            })]
                        }), x[1] && (0, t.jsxs)("div", {
                            className: "img-info-element",
                            children: [(0, t.jsx)("div", {
                                className: "img-container",
                                style: {
                                    background: r || "#000"
                                },
                                children: (0, t.jsx)(n.CustomImage, {
                                    ref: d,
                                    src: x[1].src,
                                    fill: !0,
                                    alt: x[1].alt
                                })
                            }), (0, t.jsxs)("p", {
                                children: [(0, t.jsx)("b", {
                                    children: x[1].textBold ? .includes("ring.techSpec.") ? o(x[1].textBold) : x[1].textBold
                                }), " ", x[1].textNormal ? .includes("ring.techSpec.") ? o(x[1].textNormal) : x[1].textNormal]
                            })]
                        })]
                    })
                })
            }).withConfig({
                displayName: "TechnicalSpecs__TwoImageSection",
                componentId: "sc-b0eb6301-0"
            })
            `
  padding: 32px 24px 0;

  @media (min-width: ${({theme:e})=>e.globalV2.sm.maxWidth}) {
    padding: 76px 24px 0;
  }

  & > .content {
    display: flex;
    flex-direction: column;
    gap: 16px;

    @media (min-width: ${({theme:e})=>e.globalV2.sm.maxWidth}) {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  .img-info-element {
    width: 100%;
    flex-shrink: 0;
    flex-grow: 0;

    @media (min-width: ${({theme:e})=>e.globalV2.sm.maxWidth}) {
      width: calc(50% - 12px);
    }

    .img-container {
      position: relative;
      aspect-ratio: 1 / 1;
      background: #000;
      overflow: hidden;

      img {
        object-fit: cover;
      }
    }

    p {
      margin-top: 16px;
      font-size: 1.9rem;

      @media (min-width: ${({theme:e})=>e.globalV2.sm.maxWidth}) {
        font-size: 2.2rem;
      }

      b {
        font-weight: 500;
      }
    }
  }
`, L = (0, r.default)(({
                className: e,
                htmlId: i,
                config: n,
                title: r,
                images: o,
                accordionItems: s,
                imageBackgroundColor: c
            }) => {
                let {
                    t: d
                } = (0, l.useTranslation)("ring"), p = (0, a.useRef)(null), g = "images" === k.heroSection.type ? k.heroSection.images : [], h = n ? ? (s || o ? {
                    heroSection: {
                        type: "images",
                        images: o ? ? g
                    },
                    accordionItems: k.accordionItems
                } : k), m = !n && s ? s : S(h.accordionItems, d), x = r ? ? h.title ? ? d("ring.TECH_SPECIFICATIONS"), f = c ? ? h.imageBackgroundColor;
                return (0, t.jsxs)("section", {
                    className: e,
                    id: i,
                    ref: p,
                    children: [(0, t.jsx)("h3", {
                        children: x
                    }), "custom" === h.heroSection.type ? h.heroSection.content : (0, t.jsx)(N, {
                        images: h.heroSection.images,
                        imageBackgroundColor: f
                    }), (0, t.jsx)(I, {
                        accordionItems: m
                    })]
                })
            }).withConfig({
                displayName: "TechnicalSpecs",
                componentId: "sc-b0eb6301-1"
            })
            `
  padding: 150px 0;

  h3:last-of-type {
    color: #000;
  }

  h3 {
    color: rgb(109, 114, 120);
    font-size: 48px;
    font-weight: 500;
    letter-spacing: -0.38px;
    line-height: 56px;
    text-align: center;
  }

  @media (min-width: 480px) {
    h3 {
      font-size: 64px;
      letter-spacing: -0.63px;
      line-height: 72px;
    }
  }
`, I = (0, r.default)(({
                className: e,
                accordionItems: i
            }) => {
                let [n, r] = (0, a.useState)(!1);
                return (0, a.useEffect)(() => {
                    function e() {
                        window.innerWidth < 768 ? r(!0) : r(!1)
                    }
                    return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
                }, []), (0, t.jsx)("div", {
                    className: e,
                    children: (0, t.jsx)("div", {
                        children: n ? (0, t.jsx)(_, {
                            accordionItems: i
                        }) : (0, t.jsx)($, {
                            accordionItems: i
                        })
                    })
                })
            }).withConfig({
                displayName: "TechnicalSpecs__TechnicalSpec",
                componentId: "sc-b0eb6301-2"
            })
            `
  ${o.gridMixin}
  padding: 38px 0 150px 0;
  margin-bottom: 0 !important;

  color: rgba(0, 0, 0, 0.6);
  font-size: 1.8rem;
  line-height: 2.2rem;

  @media (min-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
    font-size: 2.2rem;
    line-height: 2.8rem;
    padding: 76px 0 150px 0;
  }

  > div {
    grid-column: 2/-2;
  }

  h3:last-of-type {
    color: #000;
  }

  h3 {
    color: rgb(109, 114, 120);
    font-size: 48px;
    font-weight: 500;
    letter-spacing: -0.38px;
    line-height: 56px;
  }

  .bold {
    color: #000;
    font-size: 24px;
    font-weight: 500;
    height: 32px;
    line-height: 32px;
  }

  .specs {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

  .flex {
    display: flex;
  }

  .flex.flex-column {
    flex-direction: column;
  }

  & .content {
    display: flex;
    flex-direction: column;
    gap: 16px;
    height: 100%;
  }

  @media screen and (min-width: 480px) {
    h3 {
      font-size: 80px;
      letter-spacing: -0.63px;
      line-height: 80px;
    }
  }
`, $ = (0, r.default)(({
                className: e,
                accordionItems: i
            }) => (0, t.jsx)("table", {
                className: e,
                children: (0, t.jsx)("tbody", {
                    children: (i ? ? []).map((e, i) => (0, t.jsxs)("tr", {
                        children: [(0, t.jsx)("td", {}), (0, t.jsx)("td", {
                            children: (0, t.jsx)("span", {
                                className: "bold",
                                children: e.title
                            })
                        }), (0, t.jsx)("td", {
                            children: (0, t.jsx)("div", {
                                className: "content",
                                children: e.content
                            })
                        }), (0, t.jsx)("td", {
                            children: (0, t.jsx)("div", {})
                        })]
                    }, i))
                })
            })).withConfig({
                displayName: "TechnicalSpecs__DesktopTable",
                componentId: "sc-b0eb6301-3"
            })
            `
  width: 100%;
  border-collapse: collapse;

  tr {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    &:last-child {
      border-bottom: 0;
    }
  }

  & .content {
    height: 100%;
  }

  .content-row {
    display: block;
    margin-bottom: 12px;
    line-height: 1.4;
  }

  .content-row:last-child {
    margin-bottom: 0;
  }

  .content-row .bold {
    display: block;
    margin-bottom: 4px;
  }

  td {
    vertical-align: initial;
    padding: 48px 10px;
    max-width: 30vw;
    height: 100%;
  }

  .bold {
    color: #000;
    font-size: 24px;
    font-weight: 500;
    line-height: 32px;
  }

  .spacer {
    margin-bottom: 120px;
  }
`, T = (0, r.default)(({
                className: e,
                data: i
            }) => {
                let [n, r] = (0, a.useState)(0);
                return (0, t.jsx)("div", {
                    className: `${e} accordion`,
                    children: i.map((e, i) => {
                        let {
                            title: o,
                            content: a
                        } = e;
                        return (0, t.jsxs)("div", {
                            className: `accordion-item ${n===i?"active":""} `,
                            children: [(0, t.jsx)("div", {
                                className: "accordion-header",
                                onClick: () => {
                                    r(n === i ? -1 : i)
                                },
                                onKeyDown: e => {
                                    13 === e.keyCode && r(n === i ? -1 : i)
                                },
                                role: "presentation",
                                tabIndex: 0,
                                children: (0, t.jsxs)(t.Fragment, {
                                    children: [o, (0, t.jsx)("span", {
                                        className: "icon",
                                        children: n === i ? "-" : "+"
                                    })]
                                })
                            }), (0, t.jsx)("div", {
                                className: "accordion-body",
                                children: a
                            })]
                        }, i)
                    })
                })
            }).withConfig({
                displayName: "TechnicalSpecs__Accordion",
                componentId: "sc-b0eb6301-4"
            })
            `
  width: 100%;

  .accordion-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    .bold {
      font-size: 24px;
      font-weight: 500;
      line-height: 32px;
    }
  }

  .accordion-item {
    padding: 32px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }

  & .content {
    padding-top: 32px;
  }

  .content-row {
    display: block;
    margin-bottom: 12px;
    line-height: 1.4;
  }

  .content-row:last-child {
    margin-bottom: 0;
  }

  .content-row .bold {
    display: block;
    margin-bottom: 4px;
  }

  .content:last-of-type {
    padding-bottom: 32px;
  }

  .icon {
    font-size: 32px;
    line-height: 32px;
    width: 40px;
    text-align: right;
  }

  .accordion-body {
    max-height: 0;
    overflow: hidden;
    text-transform: cubic-bezier(0.95, 0.05, 0.795, 0.035);
    transition-duration: 0.5s;
    transition-property: max-height;
    z-index: 1;
    position: relative;
    display: flex;
    flex-wrap: wrap;
  }

  .accordion-item.active .accordion-body {
    max-height: 100rem;
    transition-timing-function: cubic-bezier(0.895, 0.03, 0.685, 0.22);
    transition-duration: 0.5s;
    transition-property: max-height;
  }

  .content.img {
    width: 100%;
  }

  @media screen and (min-width: 400px) {
    .accordion-body .content {
      padding: 32px 10px;
    }

    & .content {
      max-width: 50%;
    }

    .content.img {
      max-width: unset;
      align-items: center;
    }

    .content:only-child {
      max-width: unset;
    }
  }
`, _ = (0, r.default)(({
                className: e,
                accordionItems: i
            }) => (0, t.jsx)("div", {
                className: e,
                children: (0, t.jsx)(T, {
                    data: i ? ? []
                })
            })).withConfig({
                displayName: "TechnicalSpecs__MobileAccordion",
                componentId: "sc-b0eb6301-5"
            })
            `
  .bold {
    font-size: 18px;
    font-weight: 500;
    height: 32px;
    line-height: 32px;
  }
`;
            e.s(["TechnicalSpecs", 0, L], 19661)
        }, 3473, e => {
            "use strict";
            var t = e.i(91398);
            e.s(["FiveStarRating", 0, e => {
                let {
                    className: i,
                    style: n,
                    rating: r
                } = e, o = Math.max(0, Math.min(5, r));
                return (0, t.jsxs)("svg", {
                    className: i,
                    style: n,
                    width: "128px",
                    height: "22px",
                    viewBox: "0 0 93 16",
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, t.jsx)("defs", {
                        children: [void 0, void 0, void 0, void 0, void 0].map((e, i) => {
                            let n = 100 * Math.min(1, Math.max(0, o - i));
                            return (0, t.jsxs)("linearGradient", {
                                id: `grad-${r}-${i}`,
                                children: [(0, t.jsx)("stop", {
                                    offset: `${n}%`,
                                    stopColor: "#FD9400"
                                }), (0, t.jsx)("stop", {
                                    offset: `${n}%`,
                                    stopColor: "#E0E0E0"
                                })]
                            }, `grad-${r}-${i}`)
                        })
                    }), (0, t.jsx)("g", {
                        fill: "#FD9400",
                        children: [void 0, void 0, void 0, void 0, void 0].map((e, i) => (0, t.jsx)("path", {
                            d: "m8.412 0 2.571 5.305 5.84.806-4.25 4.085L13.61 16l-5.199-2.78L3.212 16l1.038-5.804L0 6.111l5.839-.806z",
                            transform: `translate(${18.823*i})`,
                            fill: `url(#grad-${r}-${i})`
                        }, `star-${r}-${i}`))
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
                n = e.i(60814),
                r = e.i(9674),
                o = e.i(5917),
                a = e.i(89824),
                l = e.i(37119);
            let s = (0, n.default)(({
                className: e,
                videoProps: n,
                playable: s,
                playCallback: c,
                pauseCallback: d,
                smallBtn: p = !1,
                borderLessControls: g = !1
            }) => {
                let h = (0, i.useRef)(null),
                    m = (0, i.useRef)(null),
                    [x, f] = (0, i.useState)(!1),
                    [u, b] = (0, i.useState)(!0),
                    w = (e, t) => {
                        e.preventDefault(), e.stopPropagation(), h.current && ("forward" == t ? h.current.currentTime = h.current.currentTime + 10 : "backward" == t && (h.current.currentTime = h.current.currentTime - 10), h.current.play())
                    };
                return (0, i.useEffect)(() => {
                    h.current && (s || h.current.pause())
                }, [s]), (0, i.useEffect)(() => {
                    h.current && m.current && (h.current.onplay = () => f(!0), h.current.onpause = () => f(!1), h.current.ontimeupdate = () => {
                        h.current && m.current && (m.current.style.width = `${h.current.currentTime/h.current.duration*100}%`)
                    })
                }, []), (0, i.useEffect)(() => {
                    x ? b(!1) : b(!0)
                }, [x]), (0, t.jsxs)("div", {
                    className: `${e} ${u?"controlsActive":""} ${x?"playing":""}`,
                    onMouseEnter: () => b(!0),
                    onClick: e => {
                        h.current && (e.preventDefault(), h.current.paused || !h.current.played ? (h.current.play(), c && c()) : (h.current.pause(), d && d()))
                    },
                    onMouseLeave: () => {
                        x && b(!1)
                    },
                    "aria-hidden": "true",
                    children: [(0, t.jsx)("video", { ...n,
                        ref: h,
                        controls: !1,
                        playsInline: !0
                    }), (0, t.jsxs)("div", {
                        className: "controlButtons",
                        children: [(0, t.jsxs)("button", {
                            onClick: e => w(e, "backward"),
                            className: `controlButtonElement secondaryButtons ${g&&"borderless"}`,
                            children: [(0, t.jsx)(a.RewindWhite, {}), 10]
                        }), (0, t.jsx)("button", {
                            className: `${p?"controlButtonElement small-btn":"controlButtonElement"} ${g&&"borderless"}`,
                            children: x ? (0, t.jsx)(o.PauseWhite, {}) : (0, t.jsx)(r.PlayWhite, {})
                        }), (0, t.jsxs)("button", {
                            onClick: e => w(e, "forward"),
                            className: `controlButtonElement secondaryButtons ${g&&"borderless"}`,
                            children: [10, (0, t.jsx)(l.FastForwardWhite, {})]
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
            e.s(["VideoPlayer", 0, s])
        }, 57706, e => {
            "use strict";
            var t = e.i(53147),
                i = e.i(60814);
            let n = (0, i.default)(t.default).withConfig({
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
`, r = i.default.button.withConfig({
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
`, a = i.default.button.withConfig({
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
`, l = (0, i.default)(t.default).withConfig({
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
`, s = i.default.button.withConfig({
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
            e.s(["BuyNowButton", 0, d, "CTAButton", 0, s, "CTALink", 0, n, "FlatButton", 0, a, "FlatLink", 0, l, "PrimaryCTA", 0, r, "SecondaryCTA", 0, o])
        }, 86332, e => {
            "use strict";
            var t = e.i(91398),
                i = e.i(91788),
                n = e.i(60814),
                r = e.i(53147),
                o = e.i(57706);
            let a = n.css `
  border: 1px solid rgba(255, 255, 255, 0.25);
  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.06);
  -webkit-backdrop-filter: blur(6px);
  backdrop-filter: blur(6px);
`,
                l = (0, n.default)(o.CTAButton).withConfig({
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

  ${({variant:e})=>{switch(e){case"white":return n.css`
            background: #ffffff;
            color: #000000;

          &:disabled {
            background: # f0f0f0;
            color: #b3b3b3;
            cursor: not - allowed;
            opacity: 0.6;
        }
        `;case"blue":case void 0:return n.css`
        background: #0882ff;
          color: # ffffff;

        &
        : disabled {
            background: #0882ff;
            color: # ffffff;
            cursor: not - allowed;
            opacity: 0.4;
        }
        `;case"transparentDark":return n.css`
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
    `;case"transparentLight":return n.css`
    background: rgba(255, 255, 255, 0.13); color: #ffffff; -
    webkit - backdrop - filter: blur(6 px); backdrop - filter: blur(6 px);

    &
    : disabled {
        background: rgba(255, 255, 255, 0.08);
        color: #ffffff;
        cursor: not - allowed;
        opacity: 0.4;
    }
    `;case"glassLight":return n.css`
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
    `;case"glassDark":return n.css`
    background: rgba(255, 255, 255, 0.08); color: #000000;
          ${a}

          &:disabled {
            background: rgba(255, 255, 255, 0.05);
            color: # 000000; cursor: not - allowed; opacity: 0.4; border: 1 px solid rgba(255, 255, 255, 0.15);
}
`;case"black":return n.css`
background: #000000;
          color: # ffffff;

&
: disabled {
    background: #000000;
            color: # ffffff;
    cursor: not - allowed;
    opacity: 0.4;
}
`;case"flat":return n.css`
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
`, s = n.default.span.withConfig({
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
`, c = n.default.span.withConfig({
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
    href: n,
    linkProps: o,
    componentType: a,
    onClick: d,
    startIcon: p,
    endIcon: g,
    ...h
}, m) => {
    let x = (a ? ? (n ? "link" : "button")) === "link",
        f = (0, t.jsxs)(l, {
            ref: m,
            onClick: d,
            ...h,
            type: h.type ? ? "button",
            children: [p ? (0, t.jsx)(s, {
                side: "start",
                children: p
            }) : null, (0, t.jsx)(c, {
                children: i ? ? e
            }), g ? (0, t.jsx)(s, {
                side: "end",
                children: g
            }) : null]
        });
    return x && n ? (0, t.jsx)(r.default, {
        href: n,
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
}]);