(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 11750, e => {
    "use strict";
    var t = e.i(91398),
        r = e.i(91788),
        a = e.i(55367),
        i = e.i(60814),
        n = e.i(14681),
        o = e.i(40290),
        s = e.i(57232),
        c = e.i(2100),
        l = e.i(21666),
        d = e.i(66442),
        p = e.i(50687),
        h = e.i(62774);
    let u = i.default.div.withConfig({
        displayName: "Carousel__CaptionFlexItems",
        componentId: "sc-5395d30b-0"
    })
    `
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  gap: 5rem;

  &:last-child {
    margin-top: 3rem;
  }
  p {
    max-width: 12ch;
    font-weight: 400 !important;
    span {
      font-weight: 600;
    }

    @media (min-width: ${({theme:e})=>e.globalV2.xl.maxWidth}) {
      max-width: 13ch;
    }
  }
`, m = [{
        title: "",
        description: "",
        flexItems: !0,
        items: (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsxs)(u, {
                children: [(0, t.jsxs)("p", {
                    children: [(0, t.jsx)("span", {
                        children: "15-day wear"
                    }), " for extended performance"]
                }), (0, t.jsxs)("p", {
                    children: [(0, t.jsx)("span", {
                        children: "Bluetooth-enabled syncing."
                    }), " No more manual NFC scans"]
                })]
            }), (0, t.jsxs)(u, {
                children: [(0, t.jsxs)("p", {
                    children: [(0, t.jsx)("span", {
                        children: "Uninterrupted data updates,"
                    }), " even on day 15"]
                }), (0, t.jsxs)("p", {
                    children: [(0, t.jsx)("span", {
                        children: "Full visibility"
                    }), " within minutes after a single sync"]
                })]
            })]
        })
    }, {
        title: "Fitness and sports compatible",
        description: "Comfortable and minimal form factor to support intense and leisurely "
    }, {
        title: "Hypoallergenic patches",
        description: "Hypoallergenic and breathable patches to support all skin types"
    }, {
        title: "Personalised food suggestions",
        description: "Based on unique glucose metabolism insights, identify foods that give you a stable glucose response"
    }], g = (0, i.default)(({
        className: e,
        items: a,
        showCaptions: i = !1
    }) => {
        let [c, u] = (0, r.useState)(1024), [g, f] = (0, n.default)({
            loop: !0,
            align: c <= p.PHONE_MAX_WIDTH_IN_PX ? "center" : "start",
            slidesToScroll: 1
        }), [x, b] = (0, r.useState)(0), y = (0, s.useWindowSize)(), w = (0, r.useCallback)(() => {
            f && f.scrollPrev()
        }, [f]), _ = (0, r.useCallback)(() => {
            f && f.scrollNext()
        }, [f]), v = (0, r.useCallback)(() => {
            f && b(f.selectedScrollSnap())
        }, [f]), P = (0, r.useMemo)(() => (0, h.debounce)(e => {
            f && f.reInit({
                loop: !0,
                align: e <= p.PHONE_MAX_WIDTH_IN_PX ? "center" : "start",
                slidesToScroll: 1
            })
        }, 150), [f]);
        return (0, r.useEffect)(() => {
            if (f) return v(), f.on("select", v), () => {
                f.off("select", v)
            }
        }, [f, v]), (0, r.useEffect)(() => {
            if (window && u(window.innerWidth), document)
                for (let e of document.getElementsByTagName("img")) e.onload = () => {
                    e.style.background = "transparent"
                }
        }, []), (0, r.useEffect)(() => {
            c && c <= p.PHONE_MAX_WIDTH_IN_PX != c - 50 <= p.PHONE_MAX_WIDTH_IN_PX && P(c)
        }, [c, P]), (0, t.jsxs)("div", {
            className: e,
            children: [(0, t.jsx)("div", {
                className: "embla",
                ref: g,
                children: (0, t.jsx)("div", {
                    className: "embla__container",
                    children: a ? .map((e, r) => (0, t.jsx)("div", {
                        className: "embla__slide",
                        children: (0, t.jsxs)("div", {
                            className: "carousal-img-container",
                            children: [!e.video && (0, t.jsxs)(t.Fragment, {
                                children: [(0, t.jsx)("div", {
                                    className: "element-img",
                                    children: (0, t.jsx)(l.CustomImage, {
                                        src: y.width > y.height ? e.src : e.srcResponsive ? ? e.src,
                                        alt: e.alt,
                                        fill: !0,
                                        className: "custom-img",
                                        style: {
                                            objectFit: "contain",
                                            objectPosition: e.objectPositionBottom ? "bottom" : void 0
                                        },
                                        priority: r <= 1
                                    })
                                }), i ? (0, t.jsxs)("div", {
                                    className: "content",
                                    children: [(0, t.jsx)("h3", {
                                        children: m[r] ? .title
                                    }), (0, t.jsx)("p", {
                                        children: m[r] ? .description
                                    }), (0, t.jsx)(t.Fragment, {
                                        children: m[r] ? .items
                                    })]
                                }) : null]
                            }), e.video && (0, t.jsx)("div", {
                                className: "video-container",
                                children: (0, t.jsx)(d.VideoPlayer, {
                                    className: "video-player",
                                    playable: x == r,
                                    videoProps: {
                                        src: e.src,
                                        poster: e.poster,
                                        preload: "true"
                                    }
                                })
                            })]
                        })
                    }, r))
                })
            }), (0, t.jsx)("button", {
                className: "embla__prev",
                onClick: w,
                children: (0, t.jsx)("div", {
                    className: "circle-blur-btn",
                    children: (0, t.jsx)(o.CaretUp, {
                        style: {
                            transform: "rotate(-90deg)"
                        },
                        fill: "white"
                    })
                })
            }), (0, t.jsx)("button", {
                className: "embla__next",
                onClick: _,
                children: (0, t.jsx)("div", {
                    className: "circle-blur-btn",
                    children: (0, t.jsx)(o.CaretUp, {
                        style: {
                            transform: "rotate(90deg)"
                        },
                        fill: "white"
                    })
                })
            })]
        })
    }).withConfig({
        displayName: "Carousel__Carousal",
        componentId: "sc-5395d30b-1"
    })
    `
  position: relative;
  width: 100%;

  --imgHeight: auto;


  @media (min-width: ${({theme:e})=>e.globalV2.md.minWidth}) {
    --imgHeight: calc(100vh - 81px - 44px - 16px);
    height: var(--imgHeight);
    background: #000;
  }

  .view-images-cta {
    position: absolute;
    padding: 6px 12px;
    background: #ffffff;
    border: none;
    border-radius: 40px;
    bottom: 12px;
    left: 4px;

    font-size: 1.3rem;
    font-weight: 500;
    white-space: nowrap;

    cursor: pointer;

    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.05);

    @media (min-width: ${({theme:e})=>e.globalV2.md.minWidth}) {
      padding: 8px 16px;
      left: 16px;
      font-size: 1.6rem;
      bottom: 80px;
    }

    svg {
      margin-right: 0.6rem;
      height: 1.3rem;
      width: auto;
      transform: translateY(0.1rem);
    }
  }

  .custom-img {
    object-fit: cover !important;
    width: 100% !important;
    position: relative !important;
  }

  .carousal-img-container {
    position: relative;

    & .content {
        display: none;
        position: absolute;
        color: #FFF;
        flex-direction: column;
        gap: 1rem;
        bottom: 70px;
        left: 70px;
        max-width: 50%;

        h3 {
            font-size: 36px;
            letter-spacing: -1.24px;
        line-height: 110%;
        font-weight: 500;


        }
        p {
            font-size: 20px;
            letter-spacing: -1px;
            line-height: 130%;
        font-weight:500;


        }
            @media (min-width: ${({theme:e})=>e.global.phone.maxWidth}) {
        display: flex;

    }
    }






    .element-img{
      width : 100%;
      height: var(--imgHeight);

      & > div{
        position: unset !important;
      }
    }

    .video-container {
    display: flex;
    height: var(--imgHeight);
    }

    .video-player {
    align-self: center;
    }

    .videoBtn {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      width: 100px;
      height: 100px;
      padding: 1px;
      background-color: rgba(0,0,0, 0.4);
      -webkit-backdrop-filter: blur(20px);
      backdrop-filter: blur(20px);
      border-radius: 50%;


      img, svg {
        width: 50%;
        height: auto;
      }
    }
  }

  * {
    outline: none;
  }

  .embla {
    overflow: hidden;
    @media (max-width: ${({theme:e})=>e.global.phone.maxWidth}) {
      margin-left: ${({theme:e})=>e.global.phone.negativeXMargin};
      width: 100vw;
    }
  }

  .embla__container {
    display: flex;
  }

  .embla__slide {
    flex: 0 0 100%;
    min-width: 0;
    @media (max-width: ${({theme:e})=>e.global.phone.maxWidth}) {
      padding: 0 12px;
    }
  }

  .embla__prev,
  .embla__next {
    position: absolute;
    z-index: 1;
    cursor: pointer;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 50%;
    border: none;
    background-color: transparent;
    color: #ffffff;

    .circle-blur-btn {
      height: 3.2rem;
      width: 3.2rem;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: rgba(0, 0, 0, 0.3);
      -webkit-backdrop-filter: blur(20px);
      backdrop-filter: blur(20px);
      transition: all 0.2s cubic-bezier(.25,.25,.25,1);
      transform: none;
    }

    &:active .circle-blur-btn {
      filter: brightness(30%);
    }
  }

  .embla__prev {
    left: 2rem;

    &:hover .circle-blur-btn {
      transform: translateX(-10%);
    }
  }

  .embla__next {
    right: 2rem;

    &:hover .circle-blur-btn {
      transform: translateX(10%);
    }
  }

  .embla__slide img,
  .embla__slide video {
    display: block;

    ${c.shimmerAnimate}

    width: 100%;
    object-position: center;
    object-fit: cover;

    @media (min-width: ${({theme:e})=>e.globalV2.md.minWidth}) {
      aspect-ratio: 3 / 2;
      height: 100%;
      object-fit: cover !important;
    }
  }

  .flex-center {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: relative;

    @media (max-width: ${({theme:e})=>e.global.phone.maxWidth}) {
      display: none;
    }

    &::after {
      position: absolute;
      content: '';
      height: 100%;
      width: 5rem;
      top: 0;
      right: 0;
      background: linear-gradient(270deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);
      z-index: 1;
    }

    &::before {
      position: absolute;
      content: '';
      height: 100%;
      width: 5rem;
      top: 0;
      left: 0;
      background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);
      z-index: 1;
    }
  }

  .slids-thumbs-container {
    margin-top: 0.8rem;
    max-width: 100%
    width: fit-content;
    display: flex;
    flex-direction: row;
    gap: 0 0.8rem;
    flex-wrap: nowrap;
    overflow-x: auto;

    padding: 0 ${({items:e})=>e.length>6?"5rem":"0"};

    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    scrollbar-width: none;  /* Firefox */
    &::-webkit-scrollbar {
      display: none;  /* Safari and Chrome */
    }

    img {
      transition: all 0.2s ease-in-out;
      cursor: pointer;
      flex-shrink: 0;
      width: 75px;

      &:not(.active) {
        opacity: 0.4;
      }
    }
  }
`;
    var f = e.i(19230),
        x = e.i(63635);
    let b = {
        src: e.i(12805).default,
        width: 32,
        height: 32,
        blurWidth: 0,
        blurHeight: 0
    };
    var y = e.i(78198);
    t.Fragment;
    let w = [{
            src: "web_v2/m1/carousel/4.4.png",
            srcResponsive: "web_v2/m1/carousel/4.4-mobile.png",
            thumb: "web_v2/m1/carousel/4.3.png",
            alt: ""
        }, {
            src: "web_v2/m1/carousel/2.1.png",
            srcResponsive: "web_v2/m1/carousel/2.1.png",
            thumb: "web_v2/m1/carousel/2.1.png",
            alt: ""
        }, {
            src: "web_v2/m1/carousel/3.1.png",
            srcResponsive: "web_v2/m1/carousel/3.1.png",
            thumb: "web_v2/m1/carousel/3.1.png",
            alt: ""
        }, {
            src: "web_v2/m1/carousel/1.1.png",
            srcResponsive: "web_v2/m1/carousel/1.1.png",
            thumb: "web_v2/m1/carousel/1.1.png",
            alt: ""
        }],
        _ = [{
            src: "web_v2/m1/carousel/1.png",
            srcResponsive: "web_v2/m1/carousel/1.png",
            thumb: "web_v2/m1/carousel/1.png",
            alt: ""
        }, {
            video: !0,
            src: "https://public-web-assets-cfront.ultrahuman.com/m1/Ultrahuman-M1-Product_Video.mp4",
            poster: (0, y.getCompressedAssetUrl)("/m1/m1_vid_poster.png"),
            thumb: "m1/m1_vid_thumbnail.png",
            alt: ""
        }, {
            src: "web_v2/m1/carousel/2.png",
            srcResponsive: "web_v2/m1/carousel/2.png",
            thumb: "web_v2/m1/carousel/2.png",
            alt: ""
        }, {
            src: "web_v2/m1/carousel/3.png",
            srcResponsive: "web_v2/m1/carousel/3.png",
            thumb: "web_v2/m1/carousel/3.png",
            alt: ""
        }, {
            src: "web_v2/m1/carousel/4.1.png",
            srcResponsive: "web_v2/m1/carousel/4.1.png",
            thumb: "web_v2/m1/carousel/4.1.png",
            alt: ""
        }],
        v = [{
            src: "web_v2/m1/carousel/1.png",
            srcResponsive: "web_v2/m1/carousel/1.png",
            thumb: "web_v2/m1/carousel/1.png",
            alt: ""
        }, {
            src: "web_v2/m1/carousel/2.png",
            srcResponsive: "web_v2/m1/carousel/2.png",
            thumb: "web_v2/m1/carousel/2.png",
            alt: ""
        }, {
            src: "web_v2/m1/carousel/3.png",
            srcResponsive: "web_v2/m1/carousel/3.png",
            thumb: "web_v2/m1/carousel/3.png",
            alt: ""
        }, {
            src: "web_v2/m1/carousel/4.1.png",
            srcResponsive: "web_v2/m1/carousel/4.1.png",
            thumb: "web_v2/m1/carousel/4.1.png",
            alt: ""
        }];
    t.Fragment, t.Fragment, t.Fragment, t.Fragment, t.Fragment, t.Fragment, t.Fragment;
    let P = {
            title_a: "Made for all",
            subtitle_a: "4.6 out of 5 stars from 25,000+ subscribers",
            title_b: "User Reviews",
            app_store: {
                head: "App store",
                store_icon: "../../assets/images/app_store_icon.svg",
                store_rating: "4.9",
                cta_text: "Download on AppStore",
                cta_redirect: "https://apps.apple.com/us/app/ultrahuman-meditation-sleep/id1491286709"
            },
            play_store: {
                head: "Play store",
                store_icon: "../../assets/images/app_store_icon.svg",
                store_rating: "4.5",
                cta_text: "Download on Playstore",
                cta_redirect: "https://play.google.com/store/apps/details?id=com.ultrahuman.android"
            },
            itemsForAll: [{
                title: "Proud to be a Cyborg",
                userName: "Hpatiluk",
                purchase: "Verified purchase",
                purchase_icon: "",
                program: "12 months program",
                writtenOn: "30 Jun 2022",
                since: "XXX XXXX",
                to: "XXX XX",
                content: {
                    text: (0, t.jsx)(t.Fragment, {
                        children: "Generally I never review however here would like to congratulate the #Ultrahuman team for this app and insight on health management. Rated 5 star as everything is awesome from onboarding, sensor delivery, app UI, activity classes, customer service, etc. Thanks!"
                    })
                },
                starCount: 5
            }, {
                title: "The API for your body",
                userName: "ApoorvSharma",
                purchase: "Verified purchase",
                purchase_icon: "",
                program: "12 months program",
                writtenOn: "14 Jun 2022",
                since: "XXX XXXX",
                to: "XXX XX",
                content: {
                    text: (0, t.jsx)(t.Fragment, {
                        children: "What an amazing app experience and deep insights into how your body works. This truly goes out to show how each body is different and how nutrition can have an impact on us. Strongly recommend trying it at least once. Your life will never be the same!"
                    })
                },
                starCount: 5
            }, {
                title: "Great tech and even better team",
                userName: "AK_AK_AK",
                purchase: "Verified purchase",
                purchase_icon: "",
                program: "12 months program",
                writtenOn: "29 Jun 2022",
                since: "XXX XXXX",
                to: "XXX XX",
                content: {
                    text: (0, t.jsx)(t.Fragment, {
                        children: "This is a game-changer and has helped me understand multiple aspect of my metabolic health made me conscious about the way I eat and what I eat, also Ultrahuman team is super super responsive and helpful really loving the experience."
                    })
                },
                starCount: 5
            }],
            items: [{
                title: "Proud to Be Cyborg",
                userName: "Hpatiluk",
                purchase: "Verified purchase",
                purchase_icon: "",
                program: "12 months program",
                writtenOn: "30 Jun 2022",
                since: "XXX XXXX",
                to: "XXX XX",
                content: {
                    text: (0, t.jsx)(t.Fragment, {
                        children: "Generally I never review however here would like to congratulate the #Ultrahuman team for this app and insight on health management. Rated 5 star as everything is awesome from onboarding, sensor delivery, app UI, activity classes, customer service, etc. Thanks!"
                    })
                },
                starCount: 5
            }, {
                title: "The API for your body",
                userName: "ApoorvSharma",
                purchase: "Verified purchase",
                purchase_icon: "",
                program: "12 months program",
                writtenOn: "14 Jun 2022",
                since: "XXX XXXX",
                to: "XXX XX",
                content: {
                    text: (0, t.jsx)(t.Fragment, {
                        children: "What an amazing app experience and deep insights into how your body works. This truly goes out to show how each body is different and how nutrition can have an impact on us. Strongly recommend trying it at least once. Your life will never be the same!"
                    })
                },
                starCount: 5
            }, {
                title: "Great tech and even better team",
                userName: "AK_AK_AK",
                purchase: "Verified purchase",
                purchase_icon: "",
                program: "12 months program",
                writtenOn: "29 Jun 2022",
                since: "XXX XXXX",
                to: "XXX XX",
                content: {
                    text: (0, t.jsx)(t.Fragment, {
                        children: "This is a game-changer and has helped me understand multiple aspect of my metabolic health made me conscious about the way I eat and what I eat, also Ultrahuman team is super super responsive and helpful really loving the experience."
                    })
                },
                starCount: 5
            }, {
                title: "Brilliant app",
                userName: "Rakannan",
                purchase: "Verified purchase",
                purchase_icon: "",
                program: "12 months program",
                writtenOn: "29 Jul 2022",
                since: "Sep 2022",
                to: "XXX XX",
                content: {
                    text: (0, t.jsx)(t.Fragment, {
                        children: "The concept of using CGM to guide your training and food plan is brilliant. The app is also very well laid out."
                    })
                },
                starCount: 5
            }, {
                title: "In love with the app",
                userName: "Nayanava",
                purchase: "Verified purchase",
                purchase_icon: "",
                program: "12 months program",
                writtenOn: "6 Oct 2022",
                since: "Aug 2022",
                to: "XXX XX",
                content: {
                    text: (0, t.jsx)(t.Fragment, {
                        children: "This has to be the best device after Apple Watch which helps track the blood glucose levels, in turn helping maintain a healthy lifestyle by allowing me make the right food choices while staying away from the others. It has kind of become like a challenge to maintain blood glucose levels below 110 now throughout the day!! I have quit almost all foods that have added sugar."
                    })
                },
                starCount: 5
            }, {
                title: "The Ultrahuman Cyborg experience",
                userName: "Athif Hasan",
                purchase: "Repeat purchase",
                purchase_icon: "",
                program: "12 months program",
                writtenOn: "23 Nov 2022",
                since: "Sep 2022",
                to: "XXX XX",
                content: {
                    text: (0, t.jsx)(t.Fragment, {
                        children: "Ultrahuman M1 gave me a complete insight the impact every food has to my body. Did not follow any fancy diet, yet managed to educate myself around food, and built a sustainable & healthy lifestyle."
                    })
                },
                starCount: 5
            }, {
                title: "Absolutely Amazing! Its an integrated part of my body!",
                userName: "Ranger3010",
                purchase: "Verified purchase",
                purchase_icon: "",
                program: "12 months program",
                writtenOn: "25 Jun 2022",
                since: "Sep 2022",
                to: "XXX XX",
                content: {
                    text: (0, t.jsx)(t.Fragment, {
                        children: "Ultrahuman sensors are easy to wear and very effective in diet control. It helps me track my calorie intake and allows me to be in absolute control of my sugar! Highly recommended for people trying to control there sugar and maintain optimal body weight."
                    })
                },
                starCount: 5
            }, {
                title: "The pursuit of good health",
                userName: "Srinath Rajam",
                purchase: "Verified purchase",
                purchase_icon: "",
                program: "12 months program",
                writtenOn: "2 Nov 2022",
                since: "May 2022",
                to: "XXX XX",
                content: {
                    text: (0, t.jsxs)(t.Fragment, {
                        children: ["...is impossible without the ability to control one’s blood glucose levels. As a nutritionist and a cycling and fitness coach, I stress food as 80% impact on health and CGM is an indispensable tool to help every individual figure out foods to eat/ avoid and in the right quantities…", (0, t.jsx)("br", {}), " ", (0, t.jsx)("br", {}), "We all react differently to the same food so eliminating guesswork is an important aspect to overall metabolic health", (0, t.jsx)("br", {}), " ", (0, t.jsx)("br", {}), "Keep up the great work UH, your supporting data is amazing."]
                    })
                },
                starCount: 5
            }, {
                title: "Very rare that I write a review",
                userName: "Praneeth Pike",
                purchase: "Verified purchase",
                purchase_icon: "",
                program: "12 months program",
                writtenOn: "18 Jul 2022",
                since: "XXX XXXX",
                to: "XXX XX",
                content: {
                    text: (0, t.jsxs)(t.Fragment, {
                        children: ["It’s super rare for me to write a review. And I’m writing this to appreciated that signing up for Ultrahuman is one of the best decisions I’ve made in 2022.", (0, t.jsx)("br", {}), " ", (0, t.jsx)("br", {}), "The continuous monitoring of glucose levels combined with the insights has made my body feel much better in almost all aspects of my health. I also exercise much better portion control and food choices because of this."]
                    })
                },
                starCount: 5
            }, {
                title: "Definitely makes a difference in sugar control",
                userName: "Amar Salvi",
                purchase: "Verified purchase",
                purchase_icon: "",
                program: "12 months program",
                writtenOn: "26 Sep 2022",
                since: "XXX XXXX",
                to: "XXX XX",
                content: {
                    text: (0, t.jsxs)(t.Fragment, {
                        children: ["Understanding how your blood sugar spikes makes a huge difference in bringing it under control. I used to have my meds regularly thinking that my sugar is under control, checking it once in a while. Got the shock of my life recently when my Hb1AC went through the roof.", (0, t.jsx)("br", {}), " ", (0, t.jsx)("br", {}), "Switching to Ultrahuman made a huge difference in bringing things under control in just two weeks, as I could adjust my meds and see how each intake and active was affecting sugar levels. Recommended!"]
                    })
                },
                starCount: 5
            }, {
                title: "The first app I’ve rated in a long time",
                userName: "Manoj Adithya",
                purchase: "Verified purchase",
                purchase_icon: "",
                program: "12 months program",
                writtenOn: "24 Oct 2022",
                since: "XXX XXXX",
                to: "XXX XX",
                content: {
                    text: (0, t.jsx)(t.Fragment, {
                        children: "Love the app, essential for my daily life. Perfect. I should invest in Ultrahuman"
                    })
                },
                starCount: 5
            }, {
                title: "Awesome indeed. Kudos to the team at ULTRAHUMAN",
                userName: "Rajiv Rai",
                purchase: "Repeat purchase",
                purchase_icon: "",
                program: "12 months program",
                writtenOn: "3 Jun 2022",
                since: "XXX XXXX",
                to: "XXX XX",
                content: {
                    text: (0, t.jsxs)(t.Fragment, {
                        children: ["It’s been a very awesome and most rewarding two weeks on ULTRAHUMAN. I have learnt so much about my own body and what is right and what I need to do to both reduce by HBA1C (which anyways was in the range) and more importantly to increase my metabolic score from high 79’s to over mid 80’s. I am now a much happier and healthy person in just two weeks.", (0, t.jsx)("br", {}), " ", (0, t.jsx)("br", {}), "However I will not continue wearing one for next 4 months after which I will again get one and wear it for two weeks. So in my mind thrice a year I will wear it for 15 days at a time. I must have induced at least 20 persons to get it and all of them are thanking me for introducing a life changing device to them. This is an excellent wearable and I am ready to even invest in this start-up co of yours. Kudos to you guys."]
                    })
                },
                starCount: 5
            }, {
                title: "Simply brilliant!!",
                userName: "Sudz328",
                purchase: "Verified purchase",
                purchase_icon: "",
                program: "12 months program",
                writtenOn: "6 Oct 2022",
                since: "XXX XXXX",
                to: "XXX XX",
                content: {
                    text: (0, t.jsxs)(t.Fragment, {
                        children: ["The app is brilliantly designed. Its easy to find the pieces of information you need. there’s so much you can learn through it and my lifestyle and diet have already improved thanks to Ultrahuman.", (0, t.jsx)("br", {}), " ", (0, t.jsx)("br", {}), "For people who value their health, this is a remarkable product. Lastly the performance coaches are great andhelpful and super prompt."]
                    })
                },
                starCount: 5
            }, {
                title: "Amazing product",
                userName: "War Of The Lords",
                purchase: "Verified purchase",
                purchase_icon: "",
                program: "12 months program",
                writtenOn: "19 Oct 2022",
                since: "XXX XXXX",
                to: "XXX XX",
                content: {
                    text: (0, t.jsx)(t.Fragment, {
                        children: "I had got this just for a trial basis but then it is so good, my whole family of six wear it. I love how the software is soo good in analysis and in giving knowledge on what’s going on in our body."
                    })
                },
                starCount: 5
            }, {
                title: "A grandstand view of my metabolic self",
                userName: "Ashish Kole",
                purchase: "Verified purchase",
                purchase_icon: "",
                program: "12 months program",
                writtenOn: "20 Jul 2022",
                since: "XXX XXXX",
                to: "XXX XX",
                content: {
                    text: (0, t.jsxs)(t.Fragment, {
                        children: ["For the past few years, I’ve been trying to understand how my body responds to food, especially sugar (and stuff made from molasses), which I seem to be unable to resist. The Ultrahuman app finally gave me a simple-to-understand view of what happens when I eat or drink almost immediately, when paired with the accompanying Continuous Glucose Monitor. Similarly, while the app has a provision to input what I’ve eaten, it has lots of integration with 3rd party food tracking apps such as MyFitnessPal, which I use to track my food intake. It takes inputs about my movement / exercise from 3rd party devices such as Apple Watch (which I use) or Garmin, Fitbit, Oura, Polar or even Google Fit.", (0, t.jsx)("br", {}), " ", (0, t.jsx)("br", {}), "There’s a generous community of Ultrahuman users as well as Ultrahuman coaches and developers and who share insights, experiences, challenges and other hacks. All in all, it has been a journey of discovery as I discover new insights using this “lab in my arm”."]
                    })
                },
                starCount: 5
            }, {
                title: "I am pre diabetic",
                userName: "AsDelhi123",
                purchase: "Repeat purchase",
                purchase_icon: "",
                program: "12 months program",
                writtenOn: "27 Oct 2022",
                since: "XXX XXXX",
                to: "XXX XX",
                content: {
                    text: (0, t.jsx)(t.Fragment, {
                        children: "With this I get to know what food is having adverse effect on my sugar levels and which type of food keeps my sugar in range ! I have made 3 more family members buy it and we are all very grateful for this technology."
                    })
                },
                starCount: 5
            }, {
                title: "The most realistic review ever",
                userName: "Aiken Crux 99",
                purchase: "Verified purchase",
                purchase_icon: "",
                program: "12 months program",
                writtenOn: "29 Aug 2022",
                since: "XXX XXXX",
                to: "XXX XX",
                content: {
                    text: (0, t.jsxs)(t.Fragment, {
                        children: ["Only if my body could talk and actually tell me what it needs. Or if my brain could interpret. Everyone will live longer and be happier. Ultrahuman fills that gap in the human evolutionary chain. What sets it apart from other CGMs is the high research and performance orientation, love for logic and an inspiring community that this brings. Other’s I have found to be too commercial. I wish this was more cost effective though but I do feel that the ultrahuman team is doing their best.", (0, t.jsx)("br", {}), " ", (0, t.jsx)("br", {}), "Cant wait for the ring! Bonus - Probably the best health focused content library you will find (And I have been a subscriber to most others before :) All the best to the team"]
                    })
                },
                starCount: 5
            }, {
                title: "Phenomenal stuff",
                userName: "MindMyWeb",
                purchase: "Verified purchase",
                purchase_icon: "",
                program: "12 months program",
                writtenOn: "24 Aug 2022",
                since: "XXX XXXX",
                to: "XXX XX",
                content: {
                    text: (0, t.jsx)(t.Fragment, {
                        children: "With Ultrahuman I was able to identify small things I was doing wrong in my day to day life I used it to make a lifestyles program that is giving big results."
                    })
                },
                starCount: 5
            }, {
                title: "A must have",
                userName: "Laboosh1",
                purchase: "Verified purchase",
                purchase_icon: "",
                program: "12 months program",
                writtenOn: "12 Nov 2022",
                since: "XXX XXXX",
                to: "XXX XX",
                content: {
                    text: (0, t.jsx)(t.Fragment, {
                        children: "I’m learning about how good effects my body every day. It doesn’t stop me eating some things I love that spike my insulin but at least I can see how other foods effect that spike."
                    })
                },
                starCount: 5
            }, {
                title: "Mind bending experience",
                userName: "Bhargav K",
                purchase: "Verified purchase",
                purchase_icon: "",
                program: "12 months program",
                writtenOn: "5 May 2022",
                since: "XXX XXXX",
                to: "XXX XX",
                content: {
                    text: (0, t.jsxs)(t.Fragment, {
                        children: ["Hey Cyborg Team, I got my hands on the Ultrahuman Cyborg device as a private beta user entry and trust me there has been no going back. The product is top-notch in tech and explains things unseeable by the human body.", (0, t.jsx)("br", {}), " ", (0, t.jsx)("br", {}), "Looking forward to grow and learn more about my body with the product.", (0, t.jsx)("br", {}), "Cheers, Bhargav Super Cyborg"]
                    })
                },
                starCount: 5
            }, {
                title: "Essential if you are serious about your diet",
                userName: "Mohith4590",
                purchase: "Verified purchase",
                purchase_icon: "",
                program: "12 months program",
                writtenOn: "7 Jun 2022",
                since: "XXX XXXX",
                to: "XXX XX",
                content: {
                    text: (0, t.jsxs)(t.Fragment, {
                        children: ["This app is absolutely essential if you are serious about your food intake. What you may think is good food, may not be best fit for your body and with the help of Ultrahuman you can see that quantified in numbers.", (0, t.jsx)("br", {}), " ", (0, t.jsx)("br", {}), "The app is easy to use and the insights it provides is life changing. I’m very happy with the experience."]
                    })
                },
                starCount: 5
            }, {
                title: "Amazing product - mind blowing insights!",
                userName: "Pushpak (pd)",
                purchase: "Verified purchase",
                purchase_icon: "",
                program: "12 months program",
                writtenOn: "22 Oct 2022",
                since: "XXX XXXX",
                to: "XXX XX",
                content: {
                    text: (0, t.jsx)(t.Fragment, {
                        children: "The sensor and supporting app gives one amazing insight on how one’s body reacts to food intake and how best to manage health. Highly recommend the experience!"
                    })
                },
                starCount: 5
            }, {
                title: "Superb insights and data findings",
                userName: "Piyk19",
                purchase: "Verified purchase",
                purchase_icon: "",
                program: "12 months program",
                writtenOn: "25 Aug 2022",
                since: "XXX XXXX",
                to: "XXX XX",
                content: {
                    text: (0, t.jsx)(t.Fragment, {
                        children: "Really happy with the initial usage of the app and sensor. Giving me very useful insights into my relationship with food, sleep and workouts !!"
                    })
                },
                starCount: 5
            }, {
                title: "The easiest hack to lose weight 😍",
                userName: "Adilohyijnxr",
                purchase: "Verified purchase",
                purchase_icon: "",
                program: "12 months program",
                writtenOn: "29 Aug 2022",
                since: "XXX XXXX",
                to: "XXX XX",
                content: {
                    text: (0, t.jsx)(t.Fragment, {
                        children: "The real-time feedback the platform gives us just stellar and super powerful"
                    })
                },
                starCount: 5
            }, {
                title: "Discover your body",
                userName: "Abdulla0784",
                purchase: "Verified purchase",
                purchase_icon: "",
                program: "12 months program",
                writtenOn: "29 Oct 2022",
                since: "XXX XXXX",
                to: "XXX XX",
                content: {
                    text: (0, t.jsx)(t.Fragment, {
                        children: "Deep real time health insights, right from UX to product all perfect to the T!"
                    })
                },
                starCount: 5
            }, {
                title: " ",
                userName: "Kumar Sumit Gaurav",
                purchase: "Repeat purchase",
                purchase_icon: "",
                program: "12 months program",
                writtenOn: "6 Jul 2022",
                since: "XXX XXXX",
                to: "XXX XX",
                content: {
                    text: (0, t.jsxs)(t.Fragment, {
                        children: ["Helped me immensely in knowing what triggers the sugar spike and what lowers it. The backend integration is superb and feedback mechanism is well integrated. Research and fitness module are spot on, helped me reduce weight by almost 6 kgs in just 20 days.", (0, t.jsx)("br", {}), " ", (0, t.jsx)("br", {}), "A must for all fitness freak and calories caution people. Also good for diabetic people. Calibration did not take longer and it was up and running in 1 hour max. The team must do research for having this application directly sense sugar level."]
                    })
                },
                starCount: 5
            }, {
                title: " ",
                userName: "Raj Thakur",
                purchase: "Verified purchase",
                purchase_icon: "",
                program: "12 months program",
                writtenOn: "8 Aug 2022",
                since: "XXX XXXX",
                to: "XXX XX",
                content: {
                    text: (0, t.jsxs)(t.Fragment, {
                        children: ["This is by far the best app for the insightful data analysis which helps you to track your metabolism, to add on a personal touch by the CEO on email for your motivation is a cherry on cake.", (0, t.jsx)("br", {}), " ", (0, t.jsx)("br", {}), "The food score, workout fuel score etc are to the point and the interface of the app is brilliant, good job Team Ultrahuman 👏🏻"]
                    })
                },
                starCount: 5
            }, {
                title: " ",
                userName: "ParentRaj",
                purchase: "Verified purchase",
                purchase_icon: "",
                program: "12 months program",
                writtenOn: "23 Oct 2022",
                since: "XXX XXXX",
                to: "XXX XX",
                content: {
                    text: (0, t.jsxs)(t.Fragment, {
                        children: ["The app brings out some of the key insights required for managing blood glucose effectively. The nudges by the app and the related knowledge are a great features.", (0, t.jsx)("br", {}), " ", (0, t.jsx)("br", {}), "The slack platform is quite good for learning and growing as a community. Some of the features are still evolving though."]
                    })
                },
                starCount: 5
            }]
        },
        X = [{
            title: "Proud to Be Cyborg",
            userName: "Hpatiluk",
            purchase: "Verified purchase",
            purchase_icon: "",
            program: "12 months program",
            writtenOn: "30 Jun 2022",
            since: "XXX XXXX",
            to: "XXX XX",
            content: (0, t.jsx)(t.Fragment, {
                children: "Generally I never review however here would like to congratulate the #Ultrahuman team for this app and insight on health management. Rated 5 star as everything is awesome from onboarding, sensor delivery, app UI, activity classes, customer service, etc. Thanks!"
            }),
            starCount: 5
        }, {
            title: "The API for your body",
            userName: "ApoorvSharma",
            purchase: "Verified purchase",
            purchase_icon: "",
            program: "12 months program",
            writtenOn: "14 Jun 2022",
            since: "XXX XXXX",
            to: "XXX XX",
            content: (0, t.jsx)(t.Fragment, {
                children: "What an amazing app experience and deep insights into how your body works. This truly goes out to show how each body is different and how nutrition can have an impact on us. Strongly recommend trying it at least once. Your life will never be the same!"
            }),
            starCount: 5
        }, {
            title: "Great tech and even better team",
            userName: "AK_AK_AK",
            purchase: "Verified purchase",
            purchase_icon: "",
            program: "12 months program",
            writtenOn: "29 Jun 2022",
            since: "XXX XXXX",
            to: "XXX XX",
            content: (0, t.jsx)(t.Fragment, {
                children: "This is a game-changer and has helped me understand multiple aspect of my metabolic health made me conscious about the way I eat and what I eat, also Ultrahuman team is super super responsive and helpful really loving the experience."
            }),
            starCount: 5
        }, {
            title: "Brilliant app",
            userName: "Rakannan",
            purchase: "Verified purchase",
            purchase_icon: "",
            program: "12 months program",
            writtenOn: "29 Jul 2022",
            since: "Sep 2022",
            to: "XXX XX",
            content: (0, t.jsx)(t.Fragment, {
                children: "The concept of using CGM to guide your training and food plan is brilliant. The app is also very well laid out."
            }),
            starCount: 5
        }, {
            title: "In love with the app",
            userName: "Nayanava",
            purchase: "Verified purchase",
            purchase_icon: "",
            program: "12 months program",
            writtenOn: "6 Oct 2022",
            since: "Aug 2022",
            to: "XXX XX",
            content: (0, t.jsx)(t.Fragment, {
                children: "This has to be the best device after Apple Watch which helps track the blood glucose levels, in turn helping maintain a healthy lifestyle by allowing me make the right food choices while staying away from the others. It has kind of become like a challenge to maintain blood glucose levels below 110 now throughout the day!! I have quit almost all foods that have added sugar."
            }),
            starCount: 5
        }, {
            title: "The Ultrahuman Cyborg experience",
            userName: "Athif Hasan",
            purchase: "Repeat purchase",
            purchase_icon: "",
            program: "12 months program",
            writtenOn: "23 Nov 2022",
            since: "Sep 2022",
            to: "XXX XX",
            content: (0, t.jsx)(t.Fragment, {
                children: "Ultrahuman M1 gave me a complete insight the impact every food has to my body. Did not follow any fancy diet, yet managed to educate myself around food, and built a sustainable & healthy lifestyle."
            }),
            starCount: 5
        }, {
            title: "Absolutely Amazing! Its an integrated part of my body!",
            userName: "Ranger3010",
            purchase: "Verified purchase",
            purchase_icon: "",
            program: "12 months program",
            writtenOn: "25 Jun 2022",
            since: "Sep 2022",
            to: "XXX XX",
            content: (0, t.jsx)(t.Fragment, {
                children: "Ultrahuman sensors are easy to wear and very effective in diet control. It helps me track my calorie intake and allows me to be in absolute control of my sugar! Highly recommended for people trying to control there sugar and maintain optimal body weight."
            }),
            starCount: 5
        }, {
            title: "The pursuit of good health",
            userName: "Srinath Rajam",
            purchase: "Verified purchase",
            purchase_icon: "",
            program: "12 months program",
            writtenOn: "2 Nov 2022",
            since: "May 2022",
            to: "XXX XX",
            content: (0, t.jsxs)(t.Fragment, {
                children: ["...is impossible without the ability to control one’s blood glucose levels. As a nutritionist and a cycling and fitness coach, I stress food as 80% impact on health and CGM is an indispensable tool to help every individual figure out foods to eat/ avoid and in the right quantities…", (0, t.jsx)("br", {}), " ", (0, t.jsx)("br", {}), "We all react differently to the same food so eliminating guesswork is an important aspect to overall metabolic health", (0, t.jsx)("br", {}), " ", (0, t.jsx)("br", {}), "Keep up the great work UH, your supporting data is amazing."]
            }),
            starCount: 5
        }, {
            title: "Very rare that I write a review",
            userName: "Praneeth Pike",
            purchase: "Verified purchase",
            purchase_icon: "",
            program: "12 months program",
            writtenOn: "18 Jul 2022",
            since: "XXX XXXX",
            to: "XXX XX",
            content: (0, t.jsxs)(t.Fragment, {
                children: ["It’s super rare for me to write a review. And I’m writing this to appreciated that signing up for Ultrahuman is one of the best decisions I’ve made in 2022.", (0, t.jsx)("br", {}), " ", (0, t.jsx)("br", {}), "The continuous monitoring of glucose levels combined with the insights has made my body feel much better in almost all aspects of my health. I also exercise much better portion control and food choices because of this."]
            }),
            starCount: 5
        }, {
            title: "Definitely makes a difference in sugar control",
            userName: "Amar Salvi",
            purchase: "Verified purchase",
            purchase_icon: "",
            program: "12 months program",
            writtenOn: "26 Sep 2022",
            since: "XXX XXXX",
            to: "XXX XX",
            content: (0, t.jsxs)(t.Fragment, {
                children: ["Understanding how your blood sugar spikes makes a huge difference in bringing it under control. I used to have my meds regularly thinking that my sugar is under control, checking it once in a while. Got the shock of my life recently when my Hb1AC went through the roof.", (0, t.jsx)("br", {}), " ", (0, t.jsx)("br", {}), "Switching to Ultrahuman made a huge difference in bringing things under control in just two weeks, as I could adjust my meds and see how each intake and active was affecting sugar levels. Recommended!"]
            }),
            starCount: 5
        }, {
            title: "The first app I’ve rated in a long time",
            userName: "Manoj Adithya",
            purchase: "Verified purchase",
            purchase_icon: "",
            program: "12 months program",
            writtenOn: "24 Oct 2022",
            since: "XXX XXXX",
            to: "XXX XX",
            content: (0, t.jsx)(t.Fragment, {
                children: "Love the app, essential for my daily life. Perfect. I should invest in Ultrahuman"
            }),
            starCount: 5
        }, {
            title: "Awesome indeed. Kudos to the team at ULTRAHUMAN",
            userName: "Rajiv Rai",
            purchase: "Repeat purchase",
            purchase_icon: "",
            program: "12 months program",
            writtenOn: "3 Jun 2022",
            since: "XXX XXXX",
            to: "XXX XX",
            content: (0, t.jsxs)(t.Fragment, {
                children: ["It’s been a very awesome and most rewarding two weeks on ULTRAHUMAN. I have learnt so much about my own body and what is right and what I need to do to both reduce by HBA1C (which anyways was in the range) and more importantly to increase my metabolic score from high 79’s to over mid 80’s. I am now a much happier and healthy person in just two weeks.", (0, t.jsx)("br", {}), " ", (0, t.jsx)("br", {}), "However I will not continue wearing one for next 4 months after which I will again get one and wear it for two weeks. So in my mind thrice a year I will wear it for 15 days at a time. I must have induced at least 20 persons to get it and all of them are thanking me for introducing a life changing device to them. This is an excellent wearable and I am ready to even invest in this start-up co of yours. Kudos to you guys."]
            }),
            starCount: 5
        }, {
            title: "Simply brilliant!!",
            userName: "Sudz328",
            purchase: "Verified purchase",
            purchase_icon: "",
            program: "12 months program",
            writtenOn: "6 Oct 2022",
            since: "XXX XXXX",
            to: "XXX XX",
            content: (0, t.jsxs)(t.Fragment, {
                children: ["The app is brilliantly designed. Its easy to find the pieces of information you need. there’s so much you can learn through it and my lifestyle and diet have already improved thanks to Ultrahuman.", (0, t.jsx)("br", {}), " ", (0, t.jsx)("br", {}), "For people who value their health, this is a remarkable product. Lastly the performance coaches are great andhelpful and super prompt."]
            }),
            starCount: 5
        }, {
            title: "Amazing product",
            userName: "War Of The Lords",
            purchase: "Verified purchase",
            purchase_icon: "",
            program: "12 months program",
            writtenOn: "19 Oct 2022",
            since: "XXX XXXX",
            to: "XXX XX",
            content: (0, t.jsx)(t.Fragment, {
                children: "I had got this just for a trial basis but then it is so good, my whole family of six wear it. I love how the software is soo good in analysis and in giving knowledge on what’s going on in our body."
            }),
            starCount: 5
        }, {
            title: "A grandstand view of my metabolic self",
            userName: "Ashish Kole",
            purchase: "Verified purchase",
            purchase_icon: "",
            program: "12 months program",
            writtenOn: "20 Jul 2022",
            since: "XXX XXXX",
            to: "XXX XX",
            content: (0, t.jsxs)(t.Fragment, {
                children: ["For the past few years, I’ve been trying to understand how my body responds to food, especially sugar (and stuff made from molasses), which I seem to be unable to resist. The Ultrahuman app finally gave me a simple-to-understand view of what happens when I eat or drink almost immediately, when paired with the accompanying Continuous Glucose Monitor. Similarly, while the app has a provision to input what I’ve eaten, it has lots of integration with 3rd party food tracking apps such as MyFitnessPal, which I use to track my food intake. It takes inputs about my movement / exercise from 3rd party devices such as Apple Watch (which I use) or Garmin, Fitbit, Oura, Polar or even Google Fit.", (0, t.jsx)("br", {}), " ", (0, t.jsx)("br", {}), "There’s a generous community of Ultrahuman users as well as Ultrahuman coaches and developers and who share insights, experiences, challenges and other hacks. All in all, it has been a journey of discovery as I discover new insights using this “lab in my arm”."]
            }),
            starCount: 5
        }, {
            title: "I am pre diabetic",
            userName: "AsDelhi123",
            purchase: "Repeat purchase",
            purchase_icon: "",
            program: "12 months program",
            writtenOn: "27 Oct 2022",
            since: "XXX XXXX",
            to: "XXX XX",
            content: (0, t.jsx)(t.Fragment, {
                children: "With this I get to know what food is having adverse effect on my sugar levels and which type of food keeps my sugar in range ! I have made 3 more family members buy it and we are all very grateful for this technology."
            }),
            starCount: 5
        }, {
            title: "The most realistic review ever",
            userName: "Aiken Crux 99",
            purchase: "Verified purchase",
            purchase_icon: "",
            program: "12 months program",
            writtenOn: "29 Aug 2022",
            since: "XXX XXXX",
            to: "XXX XX",
            content: (0, t.jsxs)(t.Fragment, {
                children: ["Only if my body could talk and actually tell me what it needs. Or if my brain could interpret. Everyone will live longer and be happier. Ultrahuman fills that gap in the human evolutionary chain. What sets it apart from other CGMs is the high research and performance orientation, love for logic and an inspiring community that this brings. Other’s I have found to be too commercial. I wish this was more cost effective though but I do feel that the ultrahuman team is doing their best.", (0, t.jsx)("br", {}), " ", (0, t.jsx)("br", {}), "Cant wait for the ring! Bonus - Probably the best health focused content library you will find (And I have been a subscriber to most others before :) All the best to the team"]
            }),
            starCount: 5
        }, {
            title: "Phenomenal stuff",
            userName: "MindMyWeb",
            purchase: "Verified purchase",
            purchase_icon: "",
            program: "12 months program",
            writtenOn: "24 Aug 2022",
            since: "XXX XXXX",
            to: "XXX XX",
            content: (0, t.jsx)(t.Fragment, {
                children: "With Ultrahuman I was able to identify small things I was doing wrong in my day to day life I used it to make a lifestyles program that is giving big results."
            }),
            starCount: 5
        }, {
            title: "A must have",
            userName: "Laboosh1",
            purchase: "Verified purchase",
            purchase_icon: "",
            program: "12 months program",
            writtenOn: "12 Nov 2022",
            since: "XXX XXXX",
            to: "XXX XX",
            content: (0, t.jsx)(t.Fragment, {
                children: "I’m learning about how good effects my body every day. It doesn’t stop me eating some things I love that spike my insulin but at least I can see how other foods effect that spike."
            }),
            starCount: 5
        }, {
            title: "Mind bending experience",
            userName: "Bhargav K",
            purchase: "Verified purchase",
            purchase_icon: "",
            program: "12 months program",
            writtenOn: "5 May 2022",
            since: "XXX XXXX",
            to: "XXX XX",
            content: (0, t.jsxs)(t.Fragment, {
                children: ["Hey Cyborg Team, I got my hands on the Ultrahuman Cyborg device as a private beta user entry and trust me there has been no going back. The product is top-notch in tech and explains things unseeable by the human body.", (0, t.jsx)("br", {}), " ", (0, t.jsx)("br", {}), "Looking forward to grow and learn more about my body with the product.", (0, t.jsx)("br", {}), "Cheers, Bhargav Super Cyborg"]
            }),
            starCount: 5
        }, {
            title: "Essential if you are serious about your diet",
            userName: "Mohith4590",
            purchase: "Verified purchase",
            purchase_icon: "",
            program: "12 months program",
            writtenOn: "7 Jun 2022",
            since: "XXX XXXX",
            to: "XXX XX",
            content: (0, t.jsxs)(t.Fragment, {
                children: ["This app is absolutely essential if you are serious about your food intake. What you may think is good food, may not be best fit for your body and with the help of Ultrahuman you can see that quantified in numbers.", (0, t.jsx)("br", {}), " ", (0, t.jsx)("br", {}), "The app is easy to use and the insights it provides is life changing. I’m very happy with the experience."]
            }),
            starCount: 5
        }, {
            title: "Amazing product - mind blowing insights!",
            userName: "Pushpak (pd)",
            purchase: "Verified purchase",
            purchase_icon: "",
            program: "12 months program",
            writtenOn: "22 Oct 2022",
            since: "XXX XXXX",
            to: "XXX XX",
            content: (0, t.jsx)(t.Fragment, {
                children: "The sensor and supporting app gives one amazing insight on how one’s body reacts to food intake and how best to manage health. Highly recommend the experience!"
            }),
            starCount: 5
        }, {
            title: "Superb insights and data findings",
            userName: "Piyk19",
            purchase: "Verified purchase",
            purchase_icon: "",
            program: "12 months program",
            writtenOn: "25 Aug 2022",
            since: "XXX XXXX",
            to: "XXX XX",
            content: (0, t.jsx)(t.Fragment, {
                children: "Really happy with the initial usage of the app and sensor. Giving me very useful insights into my relationship with food, sleep and workouts !!"
            }),
            starCount: 5
        }, {
            title: "The easiest hack to lose weight 😍",
            userName: "Adilohyijnxr",
            purchase: "Verified purchase",
            purchase_icon: "",
            program: "12 months program",
            writtenOn: "29 Aug 2022",
            since: "XXX XXXX",
            to: "XXX XX",
            content: (0, t.jsx)(t.Fragment, {
                children: "The real-time feedback the platform gives us just stellar and super powerful"
            }),
            starCount: 5
        }, {
            title: "Discover your body",
            userName: "Abdulla0784",
            purchase: "Verified purchase",
            purchase_icon: "",
            program: "12 months program",
            writtenOn: "29 Oct 2022",
            since: "XXX XXXX",
            to: "XXX XX",
            content: (0, t.jsx)(t.Fragment, {
                children: "Deep real time health insights, right from UX to product all perfect to the T!"
            }),
            starCount: 5
        }, {
            title: " ",
            userName: "Kumar Sumit Gaurav",
            purchase: "Repeat purchase",
            purchase_icon: "",
            program: "12 months program",
            writtenOn: "6 Jul 2022",
            since: "XXX XXXX",
            to: "XXX XX",
            content: (0, t.jsxs)(t.Fragment, {
                children: ["Helped me immensely in knowing what triggers the sugar spike and what lowers it. The backend integration is superb and feedback mechanism is well integrated. Research and fitness module are spot on, helped me reduce weight by almost 6 kgs in just 20 days.", (0, t.jsx)("br", {}), " ", (0, t.jsx)("br", {}), "A must for all fitness freak and calories caution people. Also good for diabetic people. Calibration did not take longer and it was up and running in 1 hour max. The team must do research for having this application directly sense sugar level."]
            }),
            starCount: 5
        }, {
            title: " ",
            userName: "Raj Thakur",
            purchase: "Verified purchase",
            purchase_icon: "",
            program: "12 months program",
            writtenOn: "8 Aug 2022",
            since: "XXX XXXX",
            to: "XXX XX",
            content: (0, t.jsxs)(t.Fragment, {
                children: ["This is by far the best app for the insightful data analysis which helps you to track your metabolism, to add on a personal touch by the CEO on email for your motivation is a cherry on cake.", (0, t.jsx)("br", {}), " ", (0, t.jsx)("br", {}), "The food score, workout fuel score etc are to the point and the interface of the app is brilliant, good job Team Ultrahuman 👏🏻"]
            }),
            starCount: 5
        }, {
            title: " ",
            userName: "ParentRaj",
            purchase: "Verified purchase",
            purchase_icon: "",
            program: "12 months program",
            writtenOn: "23 Oct 2022",
            since: "XXX XXXX",
            to: "XXX XX",
            content: (0, t.jsxs)(t.Fragment, {
                children: ["The app brings out some of the key insights required for managing blood glucose effectively. The nudges by the app and the related knowledge are a great features.", (0, t.jsx)("br", {}), " ", (0, t.jsx)("br", {}), "The slack platform is quite good for learning and growing as a community. Some of the features are still evolving though."]
            }),
            starCount: 5
        }];
    t.Fragment, t.Fragment, t.Fragment, t.Fragment, t.Fragment, t.Fragment, t.Fragment, t.Fragment, t.Fragment, t.Fragment, t.Fragment, t.Fragment, t.Fragment, t.Fragment, t.Fragment, t.Fragment, t.Fragment, t.Fragment, t.Fragment, t.Fragment, t.Fragment, t.Fragment, t.Fragment, t.Fragment, t.Fragment, t.Fragment, t.Fragment, t.Fragment, t.Fragment, t.Fragment, t.Fragment, t.Fragment, b.src, t.Fragment, t.Fragment, t.Fragment, t.Fragment, t.Fragment, b.src, (0, y.getCompressedAssetUrl)("/m1/m1_vid_poster.png"), t.Fragment;
    var j = e.i(59207),
        k = e.i(79546),
        C = e.i(24911),
        N = e.i(41315),
        T = e.i(83390),
        S = e.i(3828),
        O = e.i(228),
        I = e.i(1814);
    N.ProductPurchaseOption.oneTimePurchase, N.ProductPurchaseType.otp_12_week, O.Currency.inr, N.ProductPurchaseType.otp_2_week, O.Currency.inr, t.Fragment, I.CurrencySymbol.inr, N.ProductPurchaseType.otp_12_week, O.Currency.inr, t.Fragment, I.CurrencySymbol.inr, N.ProductPurchaseType.otp_24_week, O.Currency.inr, t.Fragment, I.CurrencySymbol.inr, N.ProductPurchaseType.otp_1_year, N.ProductPurchaseOption.membership, N.ProductPurchaseType.membership_2_sensor_month, O.Currency.inr, N.ProductPurchaseType.membership_1_sensor_month, O.Currency.inr, N.ProductPurchaseType.membership_2_sensor_month, N.ProductPurchaseType.otp_2_week, N.ProductPurchaseType.otp_12_week, N.ProductPurchaseType.otp_24_week, N.ProductPurchaseType.otp_1_year, N.ProductPurchaseType.otp_2_week_x, N.ProductPurchaseType.otp_12_week_x, N.ProductPurchaseType.otp_24_week_x, N.ProductPurchaseType.otp_1_year_x, N.ProductPurchaseOption.oneTimePurchase, N.ProductPurchaseType.otp_3_month_ae, O.Currency.aed, N.ProductPurchaseType.otp_1_month_ae, O.Currency.aed, t.Fragment, I.CurrencySymbol.aed, N.ProductPurchaseType.otp_3_month_ae, O.Currency.aed, t.Fragment, I.CurrencySymbol.aed, N.ProductPurchaseType.otp_6_month_ae, O.Currency.aed, t.Fragment, I.CurrencySymbol.aed, N.ProductPurchaseType.otp_1_year_ae, N.ProductPurchaseOption.membership, N.ProductPurchaseType.membership_1_sensor_month_ae, O.Currency.aed, N.ProductPurchaseType.membership_1_sensor_month_ae, N.ProductPurchaseType.otp_1_month_ae, N.ProductPurchaseType.otp_3_month_ae, N.ProductPurchaseType.otp_6_month_ae, N.ProductPurchaseType.otp_1_year_ae, N.ProductPurchaseType.otp_1_month_ae_x, N.ProductPurchaseType.otp_3_month_ae_x, N.ProductPurchaseType.otp_6_month_ae_x, N.ProductPurchaseType.otp_1_year_ae_x, N.ProductPurchaseOption.oneTimePurchase, N.ProductPurchaseType.otp_4_week_campaign, O.Currency.inr, t.Fragment, I.CurrencySymbol.inr, N.ProductPurchaseType.otp_2_week_campaign, O.Currency.inr, t.Fragment, I.CurrencySymbol.inr, N.ProductPurchaseType.otp_4_week_campaign, O.Currency.inr, t.Fragment, I.CurrencySymbol.inr, N.ProductPurchaseType.otp_12_week, O.Currency.inr, t.Fragment, I.CurrencySymbol.inr, N.ProductPurchaseType.otp_24_week, O.Currency.inr, t.Fragment, I.CurrencySymbol.inr, N.ProductPurchaseType.otp_1_year, N.ProductPurchaseOption.membership, N.ProductPurchaseType.membership_2_sensor_month, O.Currency.inr, N.ProductPurchaseType.membership_1_sensor_month, O.Currency.inr, N.ProductPurchaseType.membership_2_sensor_month, N.ProductPurchaseType.otp_2_week_campaign, N.ProductPurchaseType.otp_4_week_campaign, N.ProductPurchaseType.otp_12_week, N.ProductPurchaseType.otp_24_week, N.ProductPurchaseType.otp_1_year, N.ProductPurchaseOption.oneTimePurchase, N.ProductPurchaseType.otp_12_week_select, O.Currency.inr, N.ProductPurchaseType.otp_2_week_select, O.Currency.inr, t.Fragment, I.CurrencySymbol.inr, N.ProductPurchaseType.otp_12_week_select, O.Currency.inr, t.Fragment, I.CurrencySymbol.inr, N.ProductPurchaseType.otp_24_week_select, O.Currency.inr, t.Fragment, I.CurrencySymbol.inr, N.ProductPurchaseType.otp_1_year_select, N.ProductPurchaseType.otp_2_week_select, N.ProductPurchaseType.otp_12_week_select, N.ProductPurchaseType.otp_24_week_select, N.ProductPurchaseType.otp_1_year_select, N.ProductPurchaseOption.membership, N.ProductPurchaseType.membership_2_sensor_month_ref, O.Currency.inr, N.ProductPurchaseType.membership_1_sensor_month_ref, O.Currency.inr, N.ProductPurchaseType.membership_2_sensor_month_ref, N.ProductPurchaseOption.oneTimePurchase, N.ProductPurchaseType.otp_12_week, O.Currency.inr, N.ProductPurchaseType.otp_2_week, O.Currency.inr, t.Fragment, I.CurrencySymbol.inr, N.ProductPurchaseType.otp_12_week, O.Currency.inr, t.Fragment, I.CurrencySymbol.inr, N.ProductPurchaseType.otp_24_week, O.Currency.inr, t.Fragment, I.CurrencySymbol.inr, N.ProductPurchaseType.otp_1_year, N.ProductPurchaseType.membership_2_sensor_month_ref, N.ProductPurchaseType.otp_2_week, N.ProductPurchaseType.otp_12_week, N.ProductPurchaseType.otp_24_week, N.ProductPurchaseType.otp_1_year, N.ProductPurchaseOption.membership, N.ProductPurchaseType.membership_1_sensor_month_ae_ref, O.Currency.aed, N.ProductPurchaseType.membership_1_sensor_month_ae_ref, N.ProductPurchaseOption.oneTimePurchase, N.ProductPurchaseType.otp_3_month_ae, O.Currency.aed, N.ProductPurchaseType.otp_1_month_ae, O.Currency.aed, t.Fragment, I.CurrencySymbol.aed, t.Fragment, N.ProductPurchaseType.otp_3_month_ae, O.Currency.aed, t.Fragment, I.CurrencySymbol.aed, t.Fragment, N.ProductPurchaseType.otp_6_month_ae, O.Currency.aed, t.Fragment, I.CurrencySymbol.aed, t.Fragment, N.ProductPurchaseType.otp_1_year_ae, N.ProductPurchaseType.otp_1_month_ae, N.ProductPurchaseType.otp_3_month_ae, N.ProductPurchaseType.otp_6_month_ae, N.ProductPurchaseType.otp_1_year_ae, N.ProductPurchaseOption.oneTimePurchase, N.ProductPurchaseType.otp_3_month_ae_affiliate, O.Currency.aed, t.Fragment, I.CurrencySymbol.aed, t.Fragment, N.ProductPurchaseType.otp_3_month_ae_affiliate, O.Currency.aed, t.Fragment, I.CurrencySymbol.aed, t.Fragment, N.ProductPurchaseType.otp_6_month_ae_affiliate, O.Currency.aed, t.Fragment, N.ProductPurchaseType.otp_1_year_ae, N.ProductPurchaseType.otp_3_month_ae_affiliate, N.ProductPurchaseType.otp_6_month_ae_affiliate, N.ProductPurchaseOption.oneTimePurchase, N.ProductPurchaseType.otp_4_weeks_eu, O.Currency.eur, N.ProductPurchaseType.otp_4_weeks_eu, O.Currency.eur, N.ProductPurchaseType.otp_12_weeks_eu, N.ProductPurchaseType.otp_4_weeks_eu, N.ProductPurchaseType.otp_12_weeks_eu, N.ProductPurchaseType.otp_4_weeks_eu_campaign, N.ProductPurchaseType.otp_12_weeks_eu_campaign, N.ProductPurchaseOption.oneTimePurchase, N.ProductPurchaseType.otp_4_weeks_eu, O.Currency.gbp, N.ProductPurchaseType.otp_2_weeks_eu, O.Currency.gbp, N.ProductPurchaseType.otp_4_weeks_eu, N.ProductPurchaseOption.oneTimePurchase, N.ProductPurchaseType.otp_3_month_us, O.Currency.usd, N.ProductPurchaseType.otp_1_month_us, O.Currency.usd, t.Fragment, I.CurrencySymbol.usd, N.ProductPurchaseType.otp_3_month_us, O.Currency.usd, t.Fragment, I.CurrencySymbol.usd, N.ProductPurchaseType.otp_1_year_us, N.ProductPurchaseOption.membership, N.ProductPurchaseType.membership_1_sensor_month_us, O.Currency.usd, t.Fragment, N.ProductPurchaseType.membership_1_sensor_month_us, N.ProductPurchaseType.otp_1_month_us, N.ProductPurchaseType.otp_3_month_us, N.ProductPurchaseType.otp_1_year_us, N.ProductPurchaseType.special_1_month_us, N.ProductPurchaseType.special_3_month_us, N.ProductPurchaseType.special_1_year_us, N.ProductPurchaseType.membership_1_sensor_month_us, N.ProductPurchaseOption.oneTimePurchase, N.ProductPurchaseType.otp_4_weeks_eu, O.Currency.ch, N.ProductPurchaseType.otp_4_weeks_eu, N.ProductPurchaseType.otp_4_weeks_eu, N.ProductPurchaseOption.oneTimePurchase, N.ProductPurchaseType.otp_4_weeks_eu, O.Currency.gbp, N.ProductPurchaseType.otp_2_weeks_eu, O.Currency.gbp, N.ProductPurchaseType.otp_4_weeks_eu, N.ProductPurchaseOption.oneTimePurchase, N.ProductPurchaseType.otp_2_weeks_eu, O.Currency.eur, N.ProductPurchaseType.otp_2_weeks_eu, N.ProductPurchaseType.otp_2_weeks_eu;
    var F = e.i(56560);
    let z = ["currency"];
    var A = e.i(32899),
        M = e.i(53147),
        W = e.i(62591);
    let $ = M.FORWARDED_PARAM_KEYS;
    var U = e.i(74508);
    let R = i.default.div.withConfig({
        displayName: "styledComponents__SubscriptionDisclaimerDiv",
        componentId: "sc-7bb6794b-0"
    })
    `
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: center;
  align-items: center;
  padding: 24px;

  h3 {
    font-size: 24px;
    font-weight: 500;
    text-align: center;
  }

  p {
    font-size: 17px;
    text-align: center;
    opacity: 0.75;
  }

  .buttons {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;

    button {
      ${c.BlueButtonCss}

      font-weight: 600 !important;

      &.secondary {
        color: rgb(2, 121, 232);
        border: 2px solid rgb(2, 121, 232);
        background-color: transparent !important;

        .loading {
          border-color: red !important;
        }
      }
    }
  }

  .loading-bar-subs {
    ${c.shimmerAnimateBlue}

    width: 100%;
    padding: 2px;
    border-radius: 8px;
  }
`;
    i.default.div.withConfig({
        displayName: "styledComponents__PlantTrees",
        componentId: "sc-7bb6794b-1"
    })
    `
  display: flex;
  gap: 0.8rem;
  margin-top: 1.8rem;
  margin-bottom: 1.6rem;
  padding: 0.8rem;
  background: rgba(255, 255, 255, 0.07);
  border-radius: 1.2rem;
  svg {
    min-width: 24px;
  }

  p {
    color: rgba(255, 255, 255, 0.5);
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: -0.039rem;

    strong {
      color: rgba(255, 255, 255, 0.9);
      font-weight: 500;
    }
  }
`;
    var D = e.i(20685),
        E = e.i(29282);
    let H = {
            currency: O.Currency.inr,
            store: j.ShopifyStore.IN,
            locale: void 0,
            productOption: N.ProductPurchaseOption.oneTimePurchase,
            changeProductOption: () => null,
            product: N.ProductPurchaseType.otp_12_week,
            changeProduct: () => null,
            price: 0,
            checkout: async () => void 0,
            products: {},
            showMedicalDisclaimer: !1,
            directCheckout: !1,
            isLoading: !1,
            shippingEstimate: "",
            effectivePrice: 0,
            outOfStock: !1,
            mcfDeliveryEstimateState: !1,
            setMcfDeliveryEstimateState: () => null,
            affiliateDiscount: 0,
            birthdayDiscount: 0,
            referralDiscount: 0,
            campaignDiscount: 0,
            effectiveDiscount: {
                type: "affiliate",
                amount: 0
            },
            m1CampaignActive: !1,
            campaignTitle: void 0
        },
        V = (0, r.createContext)(H),
        L = ({
            children: e,
            currency: a,
            store: i,
            locale: n,
            products: o,
            defaultProductOption: s,
            defaultProduct: c,
            outOfStock: l,
            mcfDeliveryEstimate: d = !1
        }) => {
            let {
                addToCart: p,
                ultrahumanXAdded: h,
                affiliateDetails: u,
                campaignActive: m,
                cart: g,
                showCart: f,
                setAltContent: x,
                isCartVisible: b,
                workAffiliateDiscount: y,
                getCampaignForProduct: w
            } = (0, r.useContext)(k.CartContext), [_, v] = (0, r.useState)(d ? ? !1), [P, X] = (0, r.useState)(""), C = (0, A.useForwardSearchParamsShopify)(), T = (({
                defaultCurrency: e
            }) => {
                let [t, a] = r.default.useState("");
                return r.default.useEffect(() => {
                    a(document.location.search)
                }, []), r => {
                    let a = new URL(r),
                        i = new URLSearchParams(a.search),
                        n = new URLSearchParams(t);
                    return z.forEach(e => {
                        let t = n.get(e);
                        t && i.set(e, t)
                    }), i.get("currency") || i.set("currency", e ? ? O.Currency.inr), a.search = i.toString(), a.href
                }
            })({
                defaultCurrency: a
            }), [I, M] = (0, r.useState)(!1), [H, L] = (0, r.useState)(s), [B, q] = (0, r.useState)(c), [G, J] = (0, r.useState)({
                affiliateCode: "",
                discount: "",
                referral: ""
            }), K = o[H] ? .plans[B] ? .price ? ? 0, Y = o[H] ? .plans[B] ? .price ? ? 0, Q = i === j.ShopifyStore.US, Z = o[H] ? .directCheckout ? ? !1, ee = async () => {
                let e = o[H] ? .plans[B],
                    t = e ? .checkoutUrl ? ? "";
                M(!0);
                try {
                    let r, n = new URLSearchParams(document.location.search),
                        o = [];
                    for (let e of n.entries())["product", "type"].includes(e[0]) || o.push({
                        name: e[0],
                        value: e[1]
                    });
                    let s = u ? `?affiliateCode=${u.code}${!m&&u.discount_configs[i]?.M1?.code?`&${t.includes("stripe")?"prefilled_promo_code":"discount"}=${u.discount_configs[i]?.M1?.code}`:""}` : "";
                    t && t.includes("stripe.com") && await S.default.push(C(T(t + s), B));
                    let c = (0, j.getEffectiveStoreForDiscount)(i);
                    u ? .code === "birthday" ? r = u ? .discount_configs[c] ? .M1 ? .code : u ? .discount_configs[c] ? .M1 ? .code ? r = u.discount_configs[c] ? .M1 ? .code : S.default ? .query ? .discount && (r = S.default ? .query ? .discount);
                    let l = {
                            checkout: {
                                variant_id: e ? .variantId.split("/")[4],
                                plan_id: e ? .planId,
                                quantity: 1,
                                currency: a ? .toUpperCase(),
                                referral_discount: !!S.default ? .query ? .referral,
                                discount_code: r || void 0,
                                metadata: [...o, {
                                    name: "product_type",
                                    value: "cyborg_subscription"
                                }, {
                                    name: "subscription_purchase_from",
                                    value: "pricing_page"
                                }]
                            }
                        },
                        d = await fetch("https://api.ultrahuman.com/subscription_checkout", {
                            method: "POST",
                            cache: "no-cache",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(l)
                        }),
                        p = await d.json();
                    Object.keys(p).includes("data") && Object.keys(p.data).includes("checkout") && i && await S.default.push(((e, t, r) => {
                        let a = e.split("?")[0],
                            i = new URLSearchParams(window.location.search ? ? ""),
                            n = new URLSearchParams(e.split("?")[1]),
                            o = new URLSearchParams,
                            s = new URLSearchParams;
                        for (let [e, a] of (o.set("product_type", t), o.set("store", r), i.entries())) $.includes(e) && o.set(e, a);
                        for (let [e, t] of n.entries()) o.set(e, t);
                        try {
                            let e = (0, W.getCookie)("_uh_fbclid");
                            e && o.set("fbclid", String(e));
                            let t = (0, W.getCookie)("_fbp");
                            t && o.set("_fbp", String(t))
                        } catch (e) {}
                        for (let [e, t] of o.entries()) s.set(e, t), "email" === e && s.set("checkout[email]", t), s.set(`attributes[${e}]`, t);
                        let c = new URL(a);
                        return c.search = s.toString(), c.href
                    })(p.data.checkout.url, N.productShopifyIdMap[S.default ? .query ? .product] ? .productType, i))
                } catch (e) {
                    console.log(e)
                } finally {
                    M(!1)
                }
            }, et = async () => {
                if (B && H) {
                    M(!0);
                    try {
                        let e;
                        if (H === N.ProductPurchaseOption.membership) return void(g && g ? .lines && g ? .lines.edges && g ? .lines.edges.length >= 1 ? (x((0, t.jsxs)(R, {
                            children: [(0, t.jsx)("h3", {
                                children: "Uh oh! You can’t club subscription plans with the items in your cart."
                            }), (0, t.jsx)("p", {
                                children: "Complete checking out the items in this cart first before adding subscription plans."
                            }), (0, t.jsxs)("div", {
                                className: "buttons",
                                children: [(0, t.jsx)("button", {
                                    onClick: () => x(null),
                                    children: "Complete Checkout"
                                }), (0, t.jsx)("button", {
                                    disabled: I,
                                    className: `secondary ${I?"loading":""}`,
                                    onClick: async () => {
                                        x((0, t.jsxs)(R, {
                                            children: [(0, t.jsx)("h3", {
                                                children: "Ordering your subscription."
                                            }), (0, t.jsx)("div", {
                                                className: "loading-bar-subs"
                                            })]
                                        })), await ee()
                                    },
                                    children: "Continue with Subscription"
                                })]
                            })]
                        })), f()) : await ee());
                        if (o[H] ? .directCheckout) return void await ee();
                        let r = o[H] ? .plans[B] ? .variantId,
                            a = [];
                        H !== N.ProductPurchaseOption.x || h || a.push({
                            shopifyVariantId: F.UhxShopifyMap[i].Year1.variantId,
                            productType: U.ProductType.UHX
                        }), console.log({
                            campaignConfig: es
                        }), ec && es ? .discountCode && "campaign" === eh.type && h ? e = es.discountCode : i && D.m1PromoDiscount[i] ? .active && D.m1PromoDiscount[i] ? .discountCode && (e = D.m1PromoDiscount[i] ? .discountCode), a.push({
                            shopifyVariantId: r,
                            productType: U.ProductType.M1,
                            discountCode: e
                        }), await p(a)
                    } catch (e) {
                        console.error(e)
                    } finally {
                        M(!1)
                    }
                }
            }, er = (0, r.useMemo)(() => G.referral, [G.referral]), ea = (0, r.useMemo)(() => {
                if ("birthday" === G.affiliateCode) return 0;
                let e = (0, j.getEffectiveStoreForDiscount)(i);
                if (!e || m || !u || !u.m1Active || !u.discount_configs[e] ? .M1 ? .code || er) return 0;
                if (y) return Y * y.discount / 100;
                let t = u.discount_configs[e] ? .M1;
                return t ? .type === "percentage" ? t.value * Y / 100 : t ? .value ? ? 0
            }, [m, u, Y, y, i, er]), ei = (0, r.useMemo)(() => {
                if (!("birthday" === G.affiliateCode && G.discount)) return 0;
                let e = parseInt(G.discount.slice(-2));
                return (!isNaN(e) && e > 0 && e <= 100 ? e : 15) / 100 * Y
            }, [Y, G.affiliateCode, G.discount]), en = (0, r.useMemo)(() => er ? .1 * Y : 0, [er, Y]), eo = w("cgm"), es = (0, E.getCampaignConfig)(eo), ec = es ? .active ? ? !1, el = eo ? .title, ed = (0, r.useMemo)(() => {
                if (H !== N.ProductPurchaseOption.oneTimePurchase) return 0;
                let e = (0, D.getCampaignPromoDiscountConfig)({
                    store: i,
                    country: n,
                    product: "m1",
                    campaignConfig: es
                });
                if (!e ? .active || !e ? .discount) return 0;
                let t = e.discount;
                return "percentage" === e.discountType ? t / 100 * Y : t
            }, [i, n, Y, es, H]), ep = (0, r.useMemo)(() => [{
                type: "referral",
                amount: en
            }, {
                type: "affiliate",
                amount: ea
            }, {
                type: "birthday",
                amount: ei
            }, {
                type: "campaign",
                amount: ed
            }], [en, ea, ei, ed]), eh = (0, r.useMemo)(() => ep.reduce((e, t) => t.amount > e.amount ? t : e, {
                type: "affiliate",
                amount: 0
            }), [ep]), eu = Y - eh.amount;
            return (0, r.useEffect)(() => {
                if (S.default) {
                    let e = {
                        affiliateCode: S.default.query.affiliateCode || "",
                        discount: S.default.query.discount || "",
                        referral: S.default.query.referral || ""
                    };
                    (e.affiliateCode !== G.affiliateCode || e.discount !== G.discount || e.referral !== G.referral) && J(e)
                }
            }), (0, r.useEffect)(() => {
                b || M(!1)
            }, [b]), (0, r.useEffect)(() => {
                _ ? X("Delivery in 3-5 days") : i === j.ShopifyStore.IN ? X("Free shipping: Delivery in 1-2 days") : i === j.ShopifyStore.US ? X("Delivery in 7-10 days") : i === j.ShopifyStore.AE ? X("Free shipping: Delivery in 3-4 days") : i === j.ShopifyStore.GB ? X("Delivery in 3-5 days") : X("Free shipping: Delivery in 3-5 days")
            }, [i]), (0, t.jsx)(V.Provider, {
                value: {
                    currency: a,
                    store: i,
                    locale: n,
                    productOption: H,
                    changeProductOption: e => {
                        L(e), q(o[e] ? .defaultProduct)
                    },
                    product: B,
                    changeProduct: e => {
                        q(e)
                    },
                    price: K,
                    checkout: et,
                    products: o,
                    showMedicalDisclaimer: Q,
                    directCheckout: Z,
                    isLoading: I,
                    shippingEstimate: P,
                    effectivePrice: eu,
                    outOfStock: l,
                    mcfDeliveryEstimateState: _,
                    setMcfDeliveryEstimateState: v,
                    affiliateDiscount: ea,
                    birthdayDiscount: ei,
                    referralDiscount: en,
                    campaignDiscount: ed,
                    effectiveDiscount: eh,
                    m1CampaignActive: ec,
                    campaignTitle: el
                },
                children: e
            })
        },
        B = (0, i.default)(({
            className: e,
            product: a,
            onClick: i,
            currency: n,
            selected: o
        }) => {
            let {
                productOption: s,
                locale: c
            } = (0, r.useContext)(V), {
                affiliateDetails: l,
                campaignActive: d,
                store: p,
                getCampaignForProduct: h
            } = (0, r.useContext)(k.CartContext), u = (0, S.useRouter)(), m = (0, j.getEffectiveStoreForDiscount)(p), g = l ? .discount_configs[m] ? .M1, f = !d && l && l.code && l.m1Active && s === N.ProductPurchaseOption.oneTimePurchase && g, x = (() => {
                if (!("birthday" === u.query.affiliateCode && u.query.discount)) return 0;
                let e = parseInt(u.query.discount.slice(-2)),
                    t = !isNaN(e) && e > 0 && e <= 100 ? e : 15;
                return a.price * (t / 100)
            })(), b = [{
                type: "referral",
                amount: u.query.referral ? .1 * a.price : 0
            }, {
                type: "affiliate",
                amount: "birthday" === u.query.affiliateCode ? 0 : g ? .type === "percentage" && g.value ? a.price * (g ? .value ? ? 0) / 100 : g ? .type === "amount" ? g.value : 0
            }, {
                type: "birthday",
                amount: x
            }, {
                type: "campaign",
                amount: (() => {
                    if (s !== N.ProductPurchaseOption.oneTimePurchase) return 0;
                    let e = h("cgm"),
                        t = (0, E.getCampaignConfig)(e),
                        r = (0, D.getCampaignPromoDiscountConfig)({
                            store: p,
                            country: c,
                            product: "m1",
                            campaignConfig: t
                        });
                    if (!r ? .active || !r ? .discount) return 0;
                    let i = r.discount;
                    return "percentage" === r.discountType ? a.price * (i / 100) : i
                })()
            }].reduce((e, t) => t.amount > e.amount ? t : e, {
                type: "affiliate",
                amount: 0
            }), y = f || b.amount > 0, w = !y && a.strikedPrice && a.strikedPrice > a.price;
            return (0, t.jsxs)("button", {
                onClick: i,
                className: ` ${e} ${o?"active":""}`,
                children: [(0, t.jsxs)("div", {
                    children: [(0, t.jsxs)("h5", {
                        className: "title",
                        children: [a.title, a.tag ? (0, t.jsx)("span", {
                            className: "tag",
                            children: a.tag
                        }) : null]
                    }), y ? (0, t.jsxs)("div", {
                        className: "price-wrapper",
                        children: [(0, t.jsxs)("p", {
                            className: "price strikethrough",
                            children: [I.CurrencySymbol[n], (0, I.formatPriceWithComma)(a.price)]
                        }), (0, t.jsxs)("p", {
                            className: "price",
                            children: [I.CurrencySymbol[n], (0, I.formatPriceWithComma)(a.price - b.amount)]
                        })]
                    }) : w && a.strikedPrice ? (0, t.jsxs)("div", {
                        className: "price-wrapper",
                        children: [(0, t.jsxs)("p", {
                            className: "price strikethrough",
                            children: [I.CurrencySymbol[n], (0, I.formatPriceWithComma)(a.strikedPrice)]
                        }), (0, t.jsxs)("p", {
                            className: "price",
                            children: [I.CurrencySymbol[n], (0, I.formatPriceWithComma)(a.price)]
                        })]
                    }) : (0, t.jsxs)("p", {
                        className: "price",
                        children: [I.CurrencySymbol[n], (0, I.formatPriceWithComma)(a.price)]
                    })]
                }), (0, t.jsxs)("div", {
                    children: [(0, t.jsx)("p", {
                        className: "subtitle1",
                        children: a.subtitle1
                    }), (0, t.jsx)("p", {
                        className: "subtitle2",
                        children: a.subtitle2
                    })]
                })]
            })
        }).withConfig({
            displayName: "Product",
            componentId: "sc-2d728bbc-0"
        })
    `
  --border-selected: 1px solid rgba(0, 0, 0, 1);
  --border-disabled: 1px solid rgba(0, 0, 0, 0.05);
  --border: 1px solid rgba(0, 0, 0, 0.15);
  --text-grey: rgba(0, 0, 0, 0.5);

  text-align: left;
  display: flex;
  flex-direction: column;
  padding: 24px 16px;
  justify-content: space-between;
  align-items: flex-start;
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  color: rgba(0, 0, 0, 0.5);
  font-size: 14px;
  line-height: 130%; /* 18.2px */
  letter-spacing: -0.56px;
  background: white;
  border: var(--border);
  transition: all 0.2s ease-in-out;

  & > div {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  & .title {
    color: #000;
    font-size: 16px;
    font-weight: 500;
    line-height: 100%; /* 16px */
    letter-spacing: -0.64px;
    margin-bottom: 4px;
    display: flex;
    gap: 4px;
  }

  .tag {
    color: rgba(0, 0, 0, 0.5);
    padding-left: 8px;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 0px;
      transform: translateY(-50%);
      width: 0.2rem;
      height: 0.2rem;
      padding: 0.1rem;
      background-color: rgb(0, 0, 0, 0.5);
      border-radius: 50%;
    }
  }

  .price-wrapper {
    display: flex;
    gap: 4px;

    & > * {
      align-self: flex-start;
    }

    .strikethrough {
      color: rgba(0, 0, 0, 0.5);
      text-decoration-line: line-through;
    }
  }

  .price {
    color: #000;
    font-size: 16px;
    font-weight: 500;
    line-height: 100%; /* 16px */
    letter-spacing: -0.64px;
    margin-bottom: 4px;
  }

  &.active {
    // border: 1.5px solid #000;
    background: #eee;
    box-shadow: 0px 0px 0px 1.5px rgba(0, 0, 0, 1) inset;
  }

  &:hover {
    // border: 1.5px solid #000;
    box-shadow: 0px 0px 0px 1.5px rgba(0, 0, 0, 1) inset;
  }

  background: white;

  &:disabled {
    cursor: not-allowed;
    pointer-events: all !important;
    color: rgba(0, 0, 0, 0.2);
    border: var(--border-disabled);
  }
`;
    var q = e.i(26019),
        G = e.i(3115),
        J = e.i(8509),
        K = e.i(52316),
        Y = e.i(81416);
    let Q = [{
            icon: (0, t.jsx)(K.ShippingLogo, {}),
            description: "Free shipping"
        }, {
            icon: (0, t.jsx)(J.Return, {}),
            description: "Hassle-free returns and replacements"
        }, {
            icon: (0, t.jsx)(Y.SupportLogo, {}),
            description: "24*7 support"
        }],
        Z = [{
            icon: (0, t.jsx)(K.ShippingLogo, {}),
            description: "Delivery in 7-10 days"
        }, {
            icon: (0, t.jsx)(J.Return, {}),
            description: "Hassle-free returns and replacements"
        }, {
            icon: (0, t.jsx)(Y.SupportLogo, {}),
            description: "24*7 support"
        }],
        ee = [{
            icon: (0, t.jsx)(K.ShippingLogo, {}),
            description: "Delivery in 3-5 days"
        }, {
            icon: (0, t.jsx)(J.Return, {}),
            description: "Hassle-free returns and replacements"
        }, {
            icon: (0, t.jsx)(Y.SupportLogo, {}),
            description: "24*7 support"
        }],
        et = (0, i.default)(({
            className: e,
            icon: r,
            description: a
        }) => (0, t.jsxs)("div", {
            className: e,
            children: [(0, t.jsx)("div", {
                className: "wrapper",
                children: r
            }), (0, t.jsx)("p", {
                children: a
            })]
        })).withConfig({
            displayName: "Features__Feature",
            componentId: "sc-7e93071e-0"
        })
    `
  text-align: center;
  max-width: 100px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: space-between;
  p {
    font-size: 13px;
    line-height: 100%;
    letter-spacing: -0.52px;
    max-width: 70%;
    margin: 0 auto;
  }
  & .wrapper {
    flex-grow: 1;
    align-self: center;

    display: grid;
    place-items: center;
  }
`, er = (0, i.default)(({
        className: e
    }) => {
        let {
            store: a,
            mcfDeliveryEstimateState: i
        } = (0, r.useContext)(V), n = Q;
        return n = i || a === j.ShopifyStore.GB ? ee : [j.ShopifyStore.US, j.ShopifyStore.GB].includes(a) ? Z : Q, (0, t.jsx)("div", {
            className: e,
            children: n.map(e => (0, t.jsx)(et, { ...e
            }, e.description))
        })
    }).withConfig({
        displayName: "Features",
        componentId: "sc-7e93071e-1"
    })
    `
  display: flex;
  gap: 30px;
  justify-content: space-evenly;
  align-items: stretch;
`;
    var ea = e.i(72886),
        ei = e.i(57134);
    let en = (0, i.default)(({
        className: e
    }) => (0, t.jsxs)("div", {
        className: e,
        children: [(0, t.jsxs)("div", {
            className: "header",
            children: [(0, t.jsx)("h3", {
                children: "Disclaimer"
            }), (0, t.jsx)("p", {
                children: "Purchase of CGMs requires a medical prescription in the United States. We provide a quick and seamless tele-consultation service through which you can obtain a prescription."
            })]
        }), (0, t.jsx)("hr", {}), (0, t.jsxs)("div", {
            className: "body",
            children: [(0, t.jsx)("h3", {
                children: "How it works"
            }), (0, t.jsx)("div", {
                className: "steps",
                children: [{
                    title: "Submit your medical information",
                    description: "After placing your order, you will receive a short form to fill out with details of your health conditions, medical history, allergies, and current medications. It should take you less than a few minutes to complete."
                }, {
                    title: "Confirmation and review",
                    description: 'Upon form submission, we"ll send a confirmation email detailing the time frame for a physician"s review, which is typically around 24 business hours.'
                }, {
                    title: "Physician assessment",
                    description: "A state-authorized physician from our network will assess your information to ascertain if a continuous glucose monitor is suitable for you."
                }, {
                    title: "Prescription and delivery",
                    description: "Once approved, a confirmation of your prescription will be emailed to you, and our partner pharmacy will dispatch your CGM kit with tracking information. Should there be any rare reason for non-approval, you will be informed accordingly, and Ultrahuman will issue a full refund within 24 hours."
                }].map((e, r) => (0, t.jsxs)("div", {
                    className: "step",
                    children: [(0, t.jsx)("div", {
                        className: "step-number",
                        children: (0, t.jsx)("div", {
                            className: "circle",
                            children: r + 1
                        })
                    }), (0, t.jsxs)("div", {
                        className: "step-content",
                        children: [(0, t.jsx)("h4", {
                            children: e.title
                        }), (0, t.jsx)("p", {
                            children: e.description
                        })]
                    })]
                }, r))
            })]
        }), (0, t.jsx)("hr", {}), (0, t.jsx)("div", {
            className: "footer",
            children: (0, t.jsx)("p", {
                children: "*Please note that Ultrahuman is not involved in the decision process for issuing a prescription."
            })
        })]
    })).withConfig({
        displayName: "M1USModal",
        componentId: "sc-b4b3f0a3-0"
    })
    `
  padding: 4rem 3.2rem 3rem 3.2rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  color: black;
  & .header {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    h3 {
      font-size: 2rem;
      letter-spacing: -0.08rem;
    }
    p {
      font-size: 1.4rem;
      line-height: 130%; /* 1.82rem */
      letter-spacing: -0.056rem;
      max-width: 95%;
    }
  }
  hr {
    border: 1px solid rgba(16, 16, 16, 0.1);
  }
  .body {
    h3 {
      font-size: 1.8rem;
      letter-spacing: -0.072rem;
      margin-bottom: 1rem;
    }

    .steps {
      display: flex;
      flex-direction: column;
      gap: 1.6rem;

      .step-number {
        min-width: 3rem;
        min-height: 3rem;
        align-self: flex-start;
        border-radius: 3rem;
        background: #1d1d1d;
        color: white;
        display: grid;
        place-items: center;
      }

      .step {
        display: flex;
        gap: 1.3rem;
        font-size: 1.4rem;
        line-height: 130%;
        letter-spacing: -0.056rem;

        p {
          color: rgba(0, 0, 0, 0.5);
        }
      }
    }
  }
  & .footer {
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 500;
    line-height: 130%; /* 1.82rem */
    letter-spacing: -0.056rem;
  }

  @media screen and (max-width: 600px) {
    body {
      background-color: olive;
    }
  }

  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    width: 40vw;
    min-width: 50.9rem;
  }
`, eo = (0, i.default)(({
        className: e
    }) => {
        let a = (0, r.useContext)(ei.ModalContext);
        return (0, t.jsxs)("button", {
            onClick: () => {
                a.set((0, t.jsx)(en, {})), a.setCloseButtonTheme("light"), a.show()
            },
            className: e,
            children: [(0, t.jsx)(ea.InfoIcon, {
                fill: "rgba(0,0,0,0.3)"
            }), (0, t.jsx)("p", {
                children: "Learn how we manage CGM prescriptions for you"
            })]
        })
    }).withConfig({
        displayName: "MedicalConsultationDisclaimer",
        componentId: "sc-fa1e5c29-0"
    })
    `
  border-radius: 7px;
  background: #f5f5f5;
  margin-top: 8px;

  display: flex;
  padding: 6px 8px;
  gap: 8px;

  color: rgba(0, 0, 0, 0.6);
  font-size: 11px;
  letter-spacing: -0.11px;

  outline: none;
  border: none;

  align-self: start;
  cursor: pointer;

  @media (min-width: ${({theme:e})=>e.global.phone.maxWidth}) {
    font-size: 14px;
    letter-spacing: -0.14px;
  }
`, es = (0, i.default)(({
        className: e
    }) => (0, t.jsx)("button", {
        className: e,
        children: (0, t.jsx)("p", {
            children: "Out of stock"
        })
    })).withConfig({
        displayName: "OutOfStockDisclaimer",
        componentId: "sc-b043263b-0"
    })
    `
  border-radius: 7px;
  background: #f5f5f5;
  margin-top: 8px;

  display: flex;
  padding: 6px 8px;
  gap: 8px;

  color: rgba(0, 0, 0, 0.6);
  font-size: 11px;
  letter-spacing: -0.11px;

  outline: none;
  border: none;
  cursor: normal;

  align-self: start;

  cursor: default;

  @media (min-width: ${({theme:e})=>e.global.phone.maxWidth}) {
    font-size: 14px;
    letter-spacing: -0.14px;
  }
`, ec = i.default.h2.withConfig({
        displayName: "BuySection__H2",
        componentId: "sc-2e076260-0"
    })
    `
  color: #000;
  font-size: 3.6rem;
  font-weight: 500;
  line-height: 4rem; /* 111.111% */
  letter-spacing: -0.144rem;

  @media (min-width: ${({theme:e})=>e.global.phone.maxWidth}) {
    font-size: 4.8rem;
    line-height: 4.8rem; /* 100% */
    letter-spacing: -0.192rem;
  }
`, el = i.default.div.withConfig({
        displayName: "BuySection__OfferFlexContainer",
        componentId: "sc-2e076260-1"
    })
    `
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`, ed = i.default.p.withConfig({
        displayName: "BuySection__OfferTag",
        componentId: "sc-2e076260-2"
    })
    `
  margin: 6px 0;
  gap: 0.8rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0.5rem 0.8rem;
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
    font-family: Graphik;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`, ep = {
        [N.ProductPurchaseOption.oneTimePurchase]: "One Time Purchase",
        [N.ProductPurchaseOption.membership]: "Subscription",
        [N.ProductPurchaseOption.x]: "Special Prices"
    }, eh = (0, i.default)(({
        className: e,
        offersData: a
    }) => {
        let {
            width: i
        } = (0, s.useWindowSize)(), n = (0, S.useRouter)(), {
            affiliateDetails: o,
            campaignActive: c,
            store: l
        } = (0, r.useContext)(k.CartContext), {
            region: d
        } = (0, r.useContext)(G.RegionLocaleContext), {
            currency: h,
            productOption: u,
            changeProductOption: m,
            product: f,
            products: x,
            changeProduct: b,
            showMedicalDisclaimer: y,
            outOfStock: P,
            effectiveDiscount: X,
            m1CampaignActive: O,
            campaignTitle: I
        } = (0, r.useContext)(V), F = (0, j.getEffectiveStoreForDiscount)(l), z = !c && o && o.m1Active && o.discount_configs[F] ? .M1 ? .code && u === N.ProductPurchaseOption.oneTimePurchase ? (0, t.jsx)(el, {
            className: "offerFlex",
            children: (0, t.jsxs)(ed, {
                className: "offerTag",
                children: [o.image ? (0, t.jsx)("img", {
                    src: o.image,
                    alt: "avatar"
                }) : null, (0, t.jsxs)("span", {
                    children: [(0, t.jsxs)("span", {
                        className: "offerApplied",
                        children: [o.name, " ", o.discount_configs[F] ? .M1 ? .code]
                    }), " ", "Offer Applied"]
                })]
            })
        }) : null, A = !c && n ? .query ? .referral && D.referralCodes[l] && u === N.ProductPurchaseOption.oneTimePurchase ? (0, t.jsx)(el, {
            className: "offerFlex",
            children: (0, t.jsx)(ed, {
                className: "offerTag",
                children: (0, t.jsxs)("span", {
                    children: [(0, t.jsx)("span", {
                        className: "offerApplied",
                        children: D.referralCodes[l] ? .discountCode
                    }), " ", "Offer Applied"]
                })
            })
        }) : null, W = c || "birthday" !== X.type || n ? .query ? .affiliateCode !== "birthday" ? null : (0, t.jsx)(el, {
            className: "offerFlex",
            children: (0, t.jsxs)(ed, {
                className: "offerTag",
                children: [(0, t.jsx)(q.default, {
                    src: T.default,
                    alt: "birthday_icon",
                    style: {
                        borderRadius: "0"
                    }
                }), (0, t.jsx)("span", {
                    children: "Birthday Discount Applied"
                })]
            })
        }), $ = O && "campaign" === X.type && u === N.ProductPurchaseOption.oneTimePurchase ? (0, t.jsx)("p", {
            className: "offerTag transparent",
            children: (0, t.jsxs)("span", {
                children: [I || "Campaign", " Offer Applied"]
            })
        }) : null;
        console.log({
            campaignTitle: I
        });
        let U = "US" === d ? (0, t.jsx)("p", {
                className: "offerTag transparent",
                children: (0, t.jsx)("span", {
                    children: "Exclusive Offer Applied"
                })
            }) : null,
            R = Object.keys(x);
        return (0, t.jsxs)("div", {
            className: e,
            children: [(0, t.jsxs)("div", {
                className: "buy-section title-info-content",
                children: [(0, t.jsxs)("div", {
                    className: "title-container",
                    children: [(0, t.jsx)(ec, {
                        children: "Buy M1 Live"
                    }), P ? (0, t.jsx)(es, {}) : null]
                }), $ ? ? A ? ? z ? ? W ? ? U, (0, t.jsx)("div", {
                    className: "description-container",
                    children: l === j.ShopifyStore.IN ? (0, t.jsx)("p", {
                        children: "With a new sensor built for seamless performance, the M1 Live is quick, painless, and connects effortlessly via Bluetooth. No manual scans — just smooth, continuous glucose insights."
                    }) : O ? (0, t.jsxs)("p", {
                        children: ["Discover a personalized way to eat better, exercise smarter, and make your favourite foods work for you by tracking your real-time glucose biomarkers.", (0, t.jsx)("br", {}), (0, t.jsx)("br", {}), (0, t.jsxs)("span", {
                            style: {
                                color: "rgba(0,0,0,0.55)"
                            },
                            children: [" ", "An UltrahumanX member? Head to the mobile app", " ", (0, t.jsx)(M.default, {
                                href: "https://ultrahuman.onelink.me/QqSM/f7axz8oo",
                                target: "_blank",
                                style: {
                                    textDecoration: "underline",
                                    color: "rgba(0,0,0,0.55)"
                                },
                                children: "app"
                            }), " ", "for a personalized experience."]
                        })]
                    }) : (0, t.jsx)("p", {
                        children: "Discover a personalized way to eat better, exercise smarter, and make your favourite foods work for you by tracking your real-time glucose biomarkers."
                    })
                }), y ? (0, t.jsx)(eo, {}) : null]
            }), (0, t.jsxs)("div", {
                children: [a && (0, t.jsx)(C.OffersCarousel, {
                    data: a,
                    leftAligned: !0,
                    className: "offer-carousel"
                }), i < p.PHONE_MAX_WIDTH_IN_PX && (0, t.jsx)("div", {
                    className: "carousel-section",
                    children: (0, t.jsx)(g, {
                        items: l === j.ShopifyStore.IN ? w : l === j.ShopifyStore.EU || l === j.ShopifyStore.GB ? v : _
                    })
                }), (0, t.jsxs)("section", {
                    className: "products-section",
                    children: [R.length > 1 ? (0, t.jsx)("div", {
                        className: "product-types",
                        children: R.map((e, r) => (0, t.jsx)("button", {
                            onClick: () => m(e),
                            className: `${e===u?"active":""}`,
                            children: ep[e]
                        }, r))
                    }) : (0, t.jsx)("div", {}), (0, t.jsx)("div", {
                        className: "products",
                        children: Object.entries(x[u] ? .plans ? ? {}).map(([e, r]) => (0, t.jsx)(B, {
                            product: r,
                            currency: h,
                            selected: e === f,
                            onClick: () => b(e)
                        }, e))
                    }), (0, t.jsx)(er, {})]
                })]
            })]
        })
    }).withConfig({
        displayName: "BuySection",
        componentId: "sc-2e076260-3"
    })
    `
  // margin: 0 auto;
  // max-width: 600px;
  margin-top: 32px;
  margin-bottom: 32px;

  .offer-carousel {
    margin-bottom: 32px;
  }

  .offerTag {
    margin: 6px 0;
    gap: 0.8rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 0.5rem 0.8rem;
    border-radius: 8px;
    background: rgba(0, 0, 0, 0.04);
    width: fit-content;

    &.transparent {
      background: transparent;
      padding: 0;

      span {
        color: #007ff5;
        font-weight: 500;
        font-size: 13px;
        letter-spacing: 1px;
        text-transform: uppercase;
      }
    }
  }

  .title-info-content {
    display: flex;
    flex-direction: column;
    gap: 4px;

    max-width: 450px;
    margin-bottom: 16px;

    @media (min-width: ${({theme:e})=>e.global.phone.maxWidth}) {
      margin-bottom: 24px;
      gap: 8px;
    }

    .description-container,
    .uhx-subtitle {
      font-size: 16px;
      line-height: 130%; /* 20.8px */
      letter-spacing: -0.64px;
    }

    .uhx-subtitle {
      color: #757575;
    }

    .affiliate-section {
      display: flex;
      gap: 4px;
      color: rgba(0, 0, 0, 0.5);
      font-size: 17px;
      letter-spacing: 0.27px;
    }

    @media (min-width: ${({theme:e})=>e.global.phone.maxWidth}) {
      .description-container,
      .uhx-subtitle {
        font-size: 1.4rem; //check once
        letter-spacing: -0.056rem;
      }
    }
  }

  .products-section,
  .products {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .products {
    gap: 8px;
  }

  .product-types {
    margin-top: 30px;
    display: flex;
    padding: 4px;
    gap: 4px;
    border-radius: 16px;
    background: #eee;

    button {
      padding: 12px 16px;
      border-radius: 12px;
      flex: 1;
      text-align: center;
      background: transparent;
      border: none;

      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;
      font-weight: 500;
      letter-spacing: -0.28px;

      &.active {
        color: #000;
        background: #fff;
        box-shadow: 0px 1px 15px 0px rgba(0, 0, 0, 0.05);
      }
    }
  }

  .note {
    color: rgba(0, 0, 0, 0.4);
    text-align: center;
    font-size: 11px;
    line-height: 120%; /* 13.2px */
    letter-spacing: -0.44px;
    width: 80%;
    margin: 0 auto;
  }

  @media (min-width: ${({theme:e})=>e.global.phone.maxWidth}) {
    .offer-carousel {
      margin-bottom: 0px;
    }
  }
`, eu = (0, i.default)(({
        className: e,
        title: r = "Ultrahuman Ring AIR"
    }) => (0, t.jsx)("div", {
        className: e,
        children: (0, t.jsxs)("div", {
            className: "header-content",
            children: [(0, t.jsx)("h3", {
                children: r
            }), (0, t.jsx)(f.RegionSelector, {
                className: "mobile-only"
            })]
        })
    })).withConfig({
        displayName: "ProductSelection__ProductHeader",
        componentId: "sc-72be712e-0"
    })
    `
  color: #000;
  position: relative;
  z-index: 2;

  ${c.gridMixin}

  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  background: #fafafa;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);

  .header-content {
    display: flex;
    justify-content: space-between;
    align-itemes: center;
    padding: 16px;
    gap: 8px;
    grid-column: 1/-1;
  }

  .dimmed {
    color: rgba(0, 0, 0, 0.5); //check once
  }

  h3 {
    color: #000;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 500;
    // line-height: 1.6rem; /* 100% */
    letter-spacing: -0.064rem;
  }

  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    .header-content {
      grid-column: 2/-2;
    }
    h3 {
      font-size: 2rem;
      font-weight: 500;
      letter-spacing: -0.08rem;
    }
  }
`, em = i.default.div.withConfig({
        displayName: "ProductSelection__StickyPanel",
        componentId: "sc-72be712e-1"
    })
    `
  position: sticky;
  top: 80px;
`, eg = (0, i.default)(({
        className: e,
        offersData: i
    }) => {
        let {
            width: n
        } = (0, s.useWindowSize)(), {
            store: o
        } = (0, r.useContext)(k.CartContext);
        return (0, t.jsx)("section", {
            className: e,
            children: (0, t.jsxs)("div", {
                className: "content",
                children: [(0, t.jsx)(eu, {
                    title: (0, t.jsxs)(t.Fragment, {
                        children: ["Ultrahuman M1 Live Glucose Monitoring", " ", o !== j.ShopifyStore.US && o !== j.ShopifyStore.IN ? (0, t.jsx)("span", {
                            className: "dimmed",
                            children: "(NFC Required)"
                        }) : null]
                    })
                }), (0, t.jsxs)(a.PanelContainer, {
                    children: [n > p.PHONE_MAX_WIDTH_IN_PX && (0, t.jsx)(a.LeftPanel, {
                        children: (0, t.jsx)(em, {
                            children: (0, t.jsx)(g, {
                                items: o === j.ShopifyStore.IN ? w : o === j.ShopifyStore.EU || o === j.ShopifyStore.GB ? v : _,
                                showCaptions: o === j.ShopifyStore.IN
                            })
                        })
                    }), (0, t.jsx)(a.RightPanel, {
                        children: (0, t.jsx)(eh, {
                            offersData: i
                        })
                    })]
                })]
            })
        })
    }).withConfig({
        displayName: "ProductSelection__ProductSelectionSection",
        componentId: "sc-72be712e-2"
    })
    `
  ${c.gridMixin}

  padding-top: ${(0,x.isMarketingBannerActive)()?"110px":"48px"};

  @media (min-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    padding-top: ${(0,x.isMarketingBannerActive)()?"80px":"48px"};
  }

  & .content {
    grid-column: 1 / -1;
  }
`;
    var ef = e.i(54134),
        ex = e.i(72218),
        eb = e.i(81022);
    e.i(50461);
    var ey = e.i(61791),
        ew = e.i(83978),
        e_ = e.i(33535);
    let ev = i.keyframes `
from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); }`,
        eP = (0, i.default)(({
            className: e,
            image: r,
            title: a,
            subtitle: i,
            ctaTitle: n,
            ctaHref: o
        }) => {
            let s = (0, S.useRouter)();
            return (0, t.jsxs)("div", {
                className: e,
                style: {
                    backgroundImage: `linear-gradient(to bottom, rgba(0,0, 0, .2), rgba(0,0, 0, .2)), url(${r})`
                },
                children: [(0, t.jsx)("h2", {
                    className: "pol-title",
                    children: a
                }), (0, t.jsx)("p", {
                    className: "pol-subtitle",
                    children: i
                }), (0, t.jsx)("div", {
                    className: "pol-btns",
                    onClick: e => e.stopPropagation(),
                    "aria-hidden": "true",
                    children: (0, t.jsx)(M.default, {
                        href: {
                            pathname: o,
                            query: s.query
                        },
                        passHref: !0,
                        legacyBehavior: !0,
                        children: (0, t.jsx)("a", {
                            className: "pol-primary",
                            children: n
                        })
                    })
                })]
            })
        }).withConfig({
            displayName: "ProductMenuButtonAndOverlay__ProductCard",
            componentId: "sc-9911fa7-0"
        })
    `
  height: 50%;
  width: 100%;
  border-radius: 16px;
  background: rgba(0, 0, 0, 0.2);
  flex-shrink: 0;
  flex-grow: 0;
  padding: 2.4rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-origin: border-box;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: 20%;
  background-size: cover;

  opacity: 0;
  animation: ${ev} 0.2s ease-in-out forwards;
  animation-delay: 0.2s;

  @media (min-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
    width: 49%;
    height: 100%;
  }

  h2.pol-title {
    font-size: 3.4rem;
    margin: 0;
    margin-top: -30px;

    @media (min-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
      margin-top: 0;
      font-size: 4rem;
    }
  }

  p.pol-subtitle {
    font-size: 1.7rem;
    text-align: center;
  }
  .pol-btns {
    margin-top: 24px;
  }
  a.pol-primary {
    padding: 0.8rem 1.2rem;
    background: #ffffff;
    color: #000000;
    border-radius: 24px;
    font-size: 1.3rem;
  }
`, eX = (0, i.default)(({
        className: e,
        stateFunction: r
    }) => {
        let a = () => {
            r(!1)
        };
        return (0, t.jsx)("div", {
            className: e,
            onClick: a,
            "aria-hidden": "true",
            children: (0, t.jsxs)("div", {
                className: "pol-content",
                onClick: e => e.stopPropagation(),
                "aria-hidden": "true",
                children: [(0, t.jsx)("div", {
                    className: "pol-close-btn",
                    onClick: a,
                    "aria-hidden": "true",
                    children: (0, t.jsx)(e_.CrossDark, {})
                }), (0, t.jsxs)("div", {
                    className: "pol-product-row",
                    children: [(0, t.jsx)(eP, {
                        title: "Ultrahuman M1",
                        subtitle: "Supercharge your metabolic health using glucose biomarkers",
                        ctaTitle: "Explore Ultrahuman M1",
                        ctaHref: "/pricing",
                        image: "https://public-web-assets.ultrahuman.com/cdn-cgi/image/width=500,fit=scale-down/web/product-overlay-menu/m1-bg.png"
                    }), (0, t.jsx)(eP, {
                        title: "Ultrahuman Ring",
                        subtitle: "Your Readiness companion to improve your diet and performances",
                        ctaTitle: "Explore Ultrahuman Ring",
                        ctaHref: "/ring",
                        image: "https://public-web-assets.ultrahuman.com/cdn-cgi/image/width=500,fit=scale-down/web/product-overlay-menu/ring-bg.png"
                    })]
                }), (0, t.jsx)("div", {
                    className: "pol-secondary-row",
                    children: (0, t.jsx)(M.default, {
                        href: "https://ultrahumanapp.typeform.com/to/yOi1E7Wy?utm_source=web",
                        legacyBehavior: !0,
                        children: (0, t.jsxs)("a", {
                            target: "_blank",
                            children: [(0, t.jsx)("span", {
                                className: "pol-title",
                                children: "Get the right plans."
                            }), (0, t.jsxs)("span", {
                                className: "pol-subtitle",
                                children: ["Talk to a specialist", " ", (0, t.jsx)(o.CaretUp, {
                                    style: {
                                        transform: "rotate(90deg)"
                                    }
                                })]
                            })]
                        })
                    })
                })]
            })
        })
    }).withConfig({
        displayName: "ProductMenuButtonAndOverlay__ProductMenuOverlay",
        componentId: "sc-9911fa7-1"
    })
    `
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.06);
  -webkit-backdrop-filter: blur(24px);
  backdrop-filter: blur(24px);

  z-index: 100;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  transition: all 0.2s ease-in-out;
  opacity: 0;
  animation: ${ev} 0.2s ease-in-out forwards;

  .pol-content {
    // background: rgba(255, 255, 255, 0.1);
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    gap: 0.8rem;

    @media (min-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
      width: 800px;
      height: 500px;
    }

    .pol-close-btn {
      width: 100%;
      text-align: right;
      padding: 0 16px;

      @media (min-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
        padding: 0 8px;
      }

      svg {
        path,
        stroke {
          fill: #ffffff !important;
          stroke: #ffffff !important;
        }
        height: 20px;
        width: auto;
      }
    }

    .pol-product-row {
      width: 100%;
      height: 85%;
      padding: 0 12px;

      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 0.8rem;

      @media (min-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
        flex-direction: row;
        padding: 0;
      }
    }

    .pol-secondary-row {
      width: 100%;
      height: 15%;
      padding: 0.8rem 1.2rem;

      opacity: 0;
      animation: ${ev} 0.2s ease-in-out forwards;
      animation-delay: 0.3s;

      @media (min-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
        padding: 0;
      }

      a {
        width: 100%;
        height: 100%;
        border-radius: 16px;
        background: #101010;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0.4rem;

        font-weight: 500;

        @media (min-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
          flex-direction: row;
          gap: 0.8rem;
        }

        &:hover {
          text-shadow: none;
        }

        .pol-title {
          color: rgba(255, 255, 255, 0.33);
          font-size: 2.4rem;
          @media (min-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
            font-size: 2rem;
          }
        }

        .pol-subtitle {
          font-size: 1.4rem;
          @media (min-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
            font-size: 2rem;
          }

          svg {
            height: 0.8rem;
            display: inline-block;
            margin-top: -2px;
            width: auto;
          }
        }
      }
    }
  }
`, ej = (0, i.default)(({
        className: e,
        btnType: a,
        btnTitle: i
    }) => {
        let [n, o] = (0, r.useState)(!1);
        return (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsx)("button", {
                className: `${e} ${a} product-overlay-button`,
                onClick: () => o(!0),
                children: i ? ? "Explore products"
            }), n && (0, t.jsx)(eX, {
                stateFunction: o
            })]
        })
    }).withConfig({
        displayName: "ProductMenuButtonAndOverlay",
        componentId: "sc-9911fa7-2"
    })
    `
  font-family: Helvetica Neue, sans-serif;
  align-self: center;
  padding: 1.2rem 2.4rem;
  font-size: 1.6rem;
  font-weight: 500;
  background: transparent;
  color: #ffffff;
  border-radius: 2.4rem;
  border: 1px #ffffff solid;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: translateY(-3px);
  }

  &.fill {
    color: #000000;
    background: #ffffff;
  }
`, ek = [{
        vidSrc: "https://public-web-assets-cfront.ultrahuman.com/cyborg-stories/Anupama.mp4",
        poster: "web_v2/home/testimonial-India/anupama.webp/w_900",
        message: '"My mindset towards my diet changed"',
        name: "Anupama Shivacharya"
    }, {
        vidSrc: "https://public-web-assets-cfront.ultrahuman.com/cyborg-stories/SandeepMall.mp4",
        poster: "web_v2/home/testimonial-India/sandeep.webp/w_900",
        message: '"I was able to add 15 years to my lifespan"',
        name: "Sandeep Mall"
    }, {
        vidSrc: "https://public-web-assets-cfront.ultrahuman.com/cyborg-stories/SharanNair.mp4",
        poster: "web_v2/home/testimonial-India/sharan.webp/w_900",
        message: '"What did not work for most people, worked for me"',
        name: "Sharan Nair"
    }, {
        vidSrc: "https://public-web-assets-cfront.ultrahuman.com/cyborg-stories/Nayanatara.mp4",
        poster: "web_v2/home/testimonial-India/nayantara.webp/w_900",
        message: '"I feel the best on a daily basis, I think this balance is my new definition of fitness."',
        name: "Nayanatara Menon Bagla"
    }, {
        vidSrc: "https://public-web-assets-cfront.ultrahuman.com/cyborg-stories/KeiranDSouza.mp4",
        poster: "web_v2/home/testimonial-India/kieren.webp/w_900",
        message: '"The Ultrahuman M1 gives me the confidence to trust how I feel"',
        name: "Kieren D'Souza"
    }], eC = [{
        poster: "web_v2/home/testimonial-uae/4.webp/w_900",
        vidSrc: (0, y.getCompressedAssetUrl)("/cyborg-stories/ae/horizontal/Jackie_30Sec_Horizontal_Lock.mp4"),
        message: '"My mindset towards my diet changed"',
        name: "Jackie"
    }, {
        poster: "web_v2/home/testimonial-uae/jesse.webp/w_900",
        vidSrc: (0, y.getCompressedAssetUrl)("/cyborg-stories/ae/horizontal/Jesse_30Sec_Horizontal_Lock.mp4"),
        message: '"I was able to add 15 years to my lifespan"',
        name: "Jesse"
    }, {
        poster: "web_v2/home/testimonial-uae/1.webp/w_900",
        vidSrc: (0, y.getCompressedAssetUrl)("/cyborg-stories/ae/horizontal/Maddy_30Sec_Hor_ Packaged.mp4"),
        message: '"What did not work for most people, worked for me"',
        name: "Maddy Black"
    }, {
        poster: "web_v2/home/testimonial-uae/3.webp/w_900",
        vidSrc: (0, y.getCompressedAssetUrl)("/cyborg-stories/ae/horizontal/Rami_30Sec_Horizontal].mp4"),
        message: '"I feel the best on a daily basis, I think this balance is my new definition of fitness."',
        name: "Rami"
    }, {
        poster: "web_v2/home/testimonial-uae/5.webp/w_900",
        vidSrc: (0, y.getCompressedAssetUrl)("/cyborg-stories/ae/horizontal/Sarah_30Sec_Hor_Packaged.mp4"),
        message: '"The Ultrahuman M1 gives me the confidence to trust how I feel"',
        name: "Sarah Nash"
    }], eN = i.css `
  .embla {
    overflow: hidden;
    @media (max-width: ${({theme:e})=>e.global.phone.maxWidth}) {
      width: 100vw;
    }
  }

  .embla__container {
    display: flex;
  }

  .embla__slide {
    flex: 0 0 100%;
    min-width: 0;
    position: relative;
    transition: all 0.2s ease-in-out;

    &:not(.embla__slide--selected) {
      filter: grayscale(70%) brightness(40%);
      -webkit-filter: grayscale(70%) brightness(40%);
      -moz-filter: grayscale(70%) brightness(40%);
      -ms-filter: grayscale(70%) brightness(40%);
      -o-filter: grayscale(70%) brightness(40%);
    }
  }

  .embla__prev,
  .embla__next {
    position: absolute;
    z-index: 1;
    cursor: pointer;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 50%;
    border: none;
    background-color: transparent;
    color: #ffffff;

    .circle-blur-btn {
      height: 3.3rem;
      width: 3.3rem;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: rgba(0, 0, 0, 0.7);
      -webkit-backdrop-filter: blur(20px);
      backdrop-filter: blur(20px);
      transition: all 0.2s cubic-bezier(0.25, 0.25, 0.25, 1);
      transform: none;

      @media (max-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
        display: none;
      }
    }

    &:active .circle-blur-btn {
      filter: brightness(30%);
    }
  }

  .embla__prev {
    left: 3rem;

    &:hover .circle-blur-btn {
      transform: translateX(-10%);
    }
  }

  .embla__next {
    right: 4.5rem;

    &:hover .circle-blur-btn {
      transform: translateX(10%);
    }
  }

  .embla__slide img,
  .embla__slide video {
    display: block;
    ${c.shimmerAnimate}
    width: 100%;
    aspect-ratio: 16 / 9;
    object-position: center;
    object-fit: cover;
  }
`, eT = (0, i.default)(({
        className: e,
        isPlayable: r,
        data: a
    }) => (0, t.jsx)("div", {
        className: e,
        children: (0, t.jsxs)("div", {
            className: "element-content",
            children: [(0, t.jsx)(d.VideoPlayer, {
                smallBtn: !0,
                playable: r,
                borderLessControls: !0,
                videoProps: {
                    src: a.vidSrc,
                    poster: `${y.SPEEDSIZE_CDN}/3f711f28-1488-44dc-b013-5e43284ac4b0/${y.S3_URI}/${a.poster}`,
                    preload: "true"
                }
            }), (0, t.jsxs)("div", {
                className: "testimonial",
                children: [(0, t.jsx)("div", {
                    className: "message",
                    children: a ? .message
                }), (0, t.jsxs)("div", {
                    className: "author",
                    children: ["- ", a ? .name]
                })]
            })]
        })
    })).withConfig({
        displayName: "ExperienceVideoCarouselSection__CarousalElement",
        componentId: "sc-5341bc44-0"
    })
    `
  width: 90vw;
  height: auto;

  .element-content {
    padding: 0 4px;
    width: 100%;
    height: 100%;
    position: relative;

    @media (min-width: 1025px) {
      width: 904px;
      padding: 0 8px;
    }

    @media (min-width: 1440px) {
      width: 904px;
      padding: 0 8px;
    }

    @media (min-width: 1444px) {
      width: 890px;
      padding: 0 8px;
    }

    .testimonial {
      z-index: 3;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 2.4rem;
      text-align: center;
      flex-direction: column;
      padding-top: 1.7rem;

      bottom: 0px;
      left: 0px;
      max-width: 100%;

      @media (max-width: ${({theme:e})=>e.global.phone.maxWidth}) {
        font-size: 1rem;
        padding-bottom: 16px;
      }

      @media (min-width: ${({theme:e})=>e.global.phone.maxWidth}) {
      }

      .message {
        color: white;
        font-size: 17px;
        text-align: center;
        line-height: 24px;
      }

      .author {
        color: #fefefe;
        margin-top: 0.4rem;
        font-size: 16px;
        font-weight: 500;
        line-height: 20px;
        opacity: 40%;
      }
    }

    img {
      width: 100%;
      height: 100%;

      object-fit: cover;
    }

    .name-container {
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      font-weight: 500;
      padding: 1.2rem 3.2rem;
      font-weight: 500;

      background: -moz-linear-gradient(
        0deg,
        rgba(0, 0, 0, 1) -30%,
        rgba(0, 0, 0, 0) 100%
      );
      background: -webkit-linear-gradient(
        0deg,
        rgba(0, 0, 0, 1) -30%,
        rgba(0, 0, 0, 0) 100%
      );
      background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 1) -30%,
        rgba(0, 0, 0, 0) 100%
      );
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#000000",endColorstr="#000000",GradientType=1);

      h6 {
        font-size: 1.8rem;
      }
      p {
        font-size: 2rem;
      }
    }

    @media (min-width: ${({theme:e})=>e.global.phone.maxWidth}) {
      &:hover {
        .overlay-content {
          opacity: 1;
          transform: translateY(0);
        }
      }
    }

    .overlay-content {
      width: 100%;
      height: 100%;
      padding: 3.2rem;

      position: absolute;
      top: 0;
      left: 0;

      background-color: rgba(0, 0, 0, 0.8);
      font-size: 3.2rem;
      line-height: 3.7rem;
      font-weight: 300;

      transition: all 0.2s ease-in-out;
      opacity: 0;
      transform: translateY(-24px);
    }
  }
  @media (min-width: ${({theme:e})=>e.global.phone.maxWidth}) {
    width: 90vw;
    height: auto;
    .element-content {
      .playing + .testimonial {
        display: none;
      }
      .testimonial {
        position: absolute;
        padding-top: 0;
        padding-bottom: 48px;
        .message {
          max-width: 45%;
          color: rgb(254, 255, 254);
          font-size: 28px;
          text-align: center;
          line-height: 33px;
        }
        .author {
          margin-top: 1.4rem;
          font-size: 16px;
          line-height: 20px;
        }
      }
    }
  }
`, eS = (0, i.default)(({
        className: e,
        showButton: a = !1
    }) => {
        let [i, o] = (0, r.useState)(0), [s, c] = (0, r.useState)(0), [l, d] = (0, r.useState)(0), [p, h] = (0, r.useState)([]), u = (0, r.useCallback)(() => s >= 1920 ? "235px" : s >= 1440 ? "268px" : s >= 1366 || s >= 1024 ? `${(s-900)/2}px` : s >= 820 ? "38px" : s >= 520 ? "25px" : "20px", [s]), [m, g] = (0, n.default)({
            loop: !0,
            align: "center",
            startIndex: 0
        }), f = (0, r.useCallback)(() => {
            g && g.scrollPrev()
        }, [g]), x = (0, r.useCallback)(() => {
            g && g.scrollNext()
        }, [g]), b = (0, r.useCallback)(() => {
            if (!g) return;
            let e = g.selectedScrollSnap();
            o(e), d(e)
        }, [g]);
        return (0, r.useEffect)(() => {
            if (g) return b(), g.on("select", b), () => {
                g.off("select", b)
            }
        }, [g, b]), (0, r.useEffect)(() => {
            h(-330 === new Date().getTimezoneOffset() ? ek : eC)
        }, []), (0, r.useEffect)(() => {
            window && c(Number(window.innerWidth))
        }, [s]), (0, t.jsxs)("div", {
            className: e,
            children: [(0, t.jsxs)("div", {
                className: "content",
                children: [(0, t.jsx)(ey.H2Large, {
                    color: "black",
                    children: "Real Cyborgs. Real Stories."
                }), a ? (0, t.jsx)(ej, {
                    btnType: "outline",
                    btnTitle: "Get started"
                }) : null]
            }), (0, t.jsx)("div", {
                className: "text-carousal",
                children: (0, t.jsxs)("div", {
                    className: "carousal-container",
                    style: {
                        paddingLeft: u(),
                        paddingRight: u()
                    },
                    children: [(0, t.jsx)("div", {
                        className: "embla",
                        ref: m,
                        children: (0, t.jsx)("div", {
                            className: "embla__container",
                            children: p.map((e, r) => (0, t.jsx)("div", {
                                className: `embla__slide ${l===r?"embla__slide--selected":""}`,
                                children: (0, t.jsx)(eT, {
                                    data: e,
                                    isPlayable: i == r
                                })
                            }, r))
                        })
                    }), (0, t.jsx)("button", {
                        className: "embla__prev",
                        onClick: f,
                        children: (0, t.jsx)("div", {
                            className: "circle-blur-btn",
                            children: (0, t.jsx)(ew.RightArrow, {
                                style: {
                                    transform: "rotate(180deg)"
                                }
                            })
                        })
                    }), (0, t.jsx)("button", {
                        className: "embla__next",
                        onClick: x,
                        children: (0, t.jsx)("div", {
                            className: "circle-blur-btn",
                            children: (0, t.jsx)(ew.RightArrow, {})
                        })
                    })]
                })
            })]
        })
    }).withConfig({
        displayName: "ExperienceVideoCarouselSection",
        componentId: "sc-5341bc44-1"
    })
    `
  ${c.gridMixin}

  ${ey.sectionPadding}

  overflow-x: hidden;
  position: relative;

  & .content {
    grid-column: 1/-1;
    text-align: center;

    h2 {
      margin-bottom: 2.4rem;
      @media (min-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
        text-align: center;
      }
    }

    .product-overlay-button {
      margin-bottom: 2.4rem;

      @media (min-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
        margin-bottom: 4.8rem;
      }
    }
  }

  .text-carousal {
    grid-column: 1/-1;

    @media (min-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
      flex-direction: row;
    }

    @media (min-width: ${({theme:e})=>e.global.laptop.maxWidth}) {
      grid-column: 2/-2;
    }

    .text-container {
      flex-shrink: 0;
      width: 100%;

      @media (min-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
        width: 35%;
      }

      p {
        font-size: 2.4rem;
        line-height: 3.2rem;
        color: #848b92;

        b {
          font-weight: normal;
          color: rgba(255, 255, 255, 1);
        }
      }
    }

    .carousal-container {
      width: 100%;

      @media (min-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
        margin-top: 0;
      }
      ${eN}
    }
  }
`;
    var eO = e.i(63909);
    let eI = i.default.div.withConfig({
        displayName: "PersonaCardsSection__PersonaCard",
        componentId: "sc-1c3c2d53-0"
    })
    `
  position: relative;
  background: rgba(255, 255, 255, 0.1);
  padding: 1.6rem;
  min-height: 520px;
  width: 90%;
  flex-shrink: 0;
  flex-grow: 0;
  overflow: hidden;

  @media (min-width: ${({theme:e})=>e.global.phone.maxWidth}) {
    width: 100%;
    min-height: 480px;
    flex-shrink: 1;
    flex-grow: 1;

    &:nth-child(even) {
      margin-top: 100px;
    }

    &:hover {
      img {
        filter: brightness(30%);
        transform: scale(1.1);
      }
      div.text-content {
        p {
          height: 150px;
          text-overflow: elipses;
          color: white;
        }
      }
    }
  }

  &.sm-img-of-left {
    img {
      object-position: 20px;
      @media (min-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
        object-position: center;
      }
    }
  }

  .overlay-gradient {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    top: 0;

    width: 100%;
    height: 100%;

    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.9) 30%,
      rgba(0, 0, 0, 0.2) 70%,
      rgba(0, 0, 0, 0) 80%
    );
    z-index: 1;

    @media (min-width: ${({theme:e})=>e.global.phone.maxWidth}) {
      background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.9) 0%,
        rgba(0, 0, 0, 0.2) 48%,
        rgba(0, 0, 0, 0) 80%
      );
    }
  }

  img {
    // filter: brightness(50%);
    transform: scale(1.2);
    transition: all 0.2s ease-in-out, transform 1s ease;
    @media (min-width: ${({theme:e})=>e.global.phone.maxWidth}) {
      transform: scale(1);
      filter: brightness(100%);
    }
  }

  & > div.text-content {
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
    padding: 1.6rem;
    text-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
    z-index: 2;
    color: white;

    h4 {
      font-size: 24px;
      font-weight: 500;
      line-height: 28px;
      margin-bottom: 0.8rem;
    }

    p {
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      color: white;
      font-weight: 400;
      transition: all 0.5s ease;

      @media (min-width: ${({theme:e})=>e.global.phone.maxWidth}) {
        overflow: hidden;
        height: 0;
      }
    }
  }
`, eF = (0, i.default)(({
        className: e
    }) => {
        let a = (0, r.useRef)(null),
            i = (0, r.useRef)(null),
            n = (0, r.useRef)(null),
            o = (0, r.useRef)(null);
        return (0, eO.useProgressInViewport)({
            containerRef: a,
            startsFromBottom: !0,
            startAtZero: !0,
            callback: e => {
                if (!a.current || !i.current || !n.current || !o.current || window.innerWidth < 768) return;
                let t = 1 - e;
                if (t <= 0 && (i.current.style.transform = "translateY(0)", n.current.style.transform = "translateY(0)", o.current.style.transform = "translateY(0)", i.current.style.opacity = "0", n.current.style.opacity = "0", o.current.style.opacity = "0"), t > 0) {
                    let e = `${Math.min(1,1.5*t)}`;
                    i.current.style.opacity = e, n.current.style.opacity = e, o.current.style.opacity = e, i.current.style.transform = `translateY(${-(150*t*1)}px)`, n.current.style.transform = `translateY(${-(150*t*1.7)}px)`, o.current.style.transform = `translateY(${-(150*t*1)}px)`
                }
            }
        }), (0, t.jsx)("section", {
            className: e,
            children: (0, t.jsxs)("div", {
                className: "content",
                children: [(0, t.jsx)(ey.H2Large, {
                    children: "Made for everyone"
                }), (0, t.jsxs)("div", {
                    className: "cards-container",
                    ref: a,
                    children: [(0, t.jsxs)(eI, {
                        ref: i,
                        className: "sm-img-of-left",
                        children: [(0, t.jsx)("div", {
                            className: "overlay-gradient"
                        }), (0, t.jsx)(l.CustomImage, {
                            src: "web_v2/home/made-for-all/lose-weight-sustainably.webp/w_800",
                            fill: !0,
                            style: {
                                objectFit: "cover"
                            },
                            alt: "weight-management"
                        }), (0, t.jsxs)("div", {
                            className: "text-content",
                            children: [(0, t.jsx)("h4", {
                                children: "Lose weight sustainably"
                            }), (0, t.jsx)("p", {
                                children: "Find foods that work for you. Shed excess weight while making your favourite foods work for you by optimising portion size, improving macro composition or meal timing."
                            })]
                        })]
                    }), (0, t.jsxs)(eI, {
                        ref: n,
                        children: [(0, t.jsx)("div", {
                            className: "overlay-gradient"
                        }), (0, t.jsx)(l.CustomImage, {
                            src: "web_v2/home/made-for-all/1.webp/w_1000",
                            fill: !0,
                            style: {
                                objectFit: "cover"
                            },
                            alt: "pre-diabetic"
                        }), (0, t.jsxs)("div", {
                            className: "text-content",
                            children: [(0, t.jsx)("h4", {
                                children: "Manage metabolic disorders"
                            }), (0, t.jsx)("p", {
                                children: "Optimising glucose biomarkers is crucial for reducing the risk of T2 diabetes, obesity, PCOS, hypertension and other metabolic disorders."
                            })]
                        })]
                    }), (0, t.jsxs)(eI, {
                        ref: o,
                        children: [(0, t.jsx)("div", {
                            className: "overlay-gradient"
                        }), (0, t.jsx)(l.CustomImage, {
                            src: "web_v2/home/made-for-all/improve-athletic-performance.webp/w_1000",
                            fill: !0,
                            style: {
                                objectFit: "cover"
                            },
                            alt: "athelete"
                        }), (0, t.jsxs)("div", {
                            className: "text-content",
                            children: [(0, t.jsx)("h4", {
                                children: "Improve athletic performance"
                            }), (0, t.jsx)("p", {
                                children: "Stable glucose levels within the target range help improve cognitive performance and sustain your energy levels for zone 3 activities."
                            })]
                        })]
                    })]
                })]
            })
        })
    }).withConfig({
        displayName: "PersonaCardsSection",
        componentId: "sc-1c3c2d53-1"
    })
    `
  ${ey.sectionPadding}
  ${c.gridMixin}
  background: black;
  color: white;

  @media (min-width: ${({theme:e})=>e.global.phone.maxWidth}) {
    padding-bottom: 0; // as blank space due to animation will work as pad
  }


  & .content {
    width: 100%;
    grid-column: 2/-2;
    overflow-x: hidden;
    text-align: left;


    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
      max-width: 640px;
      align-self: flex-start;
    }

    p.description {
      text-align: center;
      font-size: 1.8rem;
      color: white
      margin-bottom: 3.2rem;

      @media (min-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
        padding: 0 0rem;
        text-align: center;
        font-size: 2.1rem;
        max-width: 600px;
        margin: 0 auto 3.2rem;
      }
    }

    .outline-btn {
      padding: 1rem 3.2rem;
      font-weight: 500;
      font-size: 1.6rem;

      border-radius: 24px;
      border: 1px solid #ffffff;
      transition: all 0.2s ease-in-out;

      &:hover {
        transform: translateY(-2px);
      }
    }

    .cards-container {
      width: 100%;
      margin-top: 3.2rem;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: flex-start;
      flex-wrap: none;
      overflow-x: auto;
      gap: 1.2rem;

      ${c.hideScrollbar}

      @media (min-width: ${({theme:e})=>e.global.phone.maxWidth}) {
        justify-content: center;
        overflow: visible;
        margin-top: 6.8rem;
        padding-top: 8rem;
      }
    }
  }
`;
    var ez = e.i(88061),
        eA = e.i(69949),
        eM = e.i(17162),
        eW = e.i(15110);
    let e$ = (0, i.default)(({
        className: e,
        trackingParams: r
    }) => (0, t.jsx)("div", {
        className: e,
        children: (0, t.jsx)(eb.TypeformSnippet, {
            typeformId: "J68hJztW",
            frameTitle: "Book a call",
            className: "typeform-container",
            trackingParams: r
        })
    })).withConfig({
        displayName: "BottomBar__NotifyM1TFModal",
        componentId: "sc-3780494b-0"
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
`, eU = (0, i.default)(({
        className: e
    }) => {
        let {
            checkout: a,
            directCheckout: i,
            isLoading: n,
            currency: o,
            shippingEstimate: s,
            effectivePrice: c,
            outOfStock: l
        } = (0, r.useContext)(V), d = (0, r.useContext)(ei.ModalContext);
        return (0, t.jsxs)("div", {
            className: `${e} `,
            children: [(0, t.jsx)(eA.LeftPanel, {
                children: (0, t.jsxs)("div", {
                    className: "shipping",
                    children: [(0, t.jsx)(ez.ShippingBox, {}), (0, t.jsx)("p", {
                        children: s
                    })]
                })
            }), (0, t.jsx)(eA.MidPanel, {
                children: (0, t.jsxs)("p", {
                    className: "total-price-single",
                    children: [I.CurrencySymbol[o], (0, I.formatPriceWithComma)(c)]
                })
            }), (0, t.jsxs)(eA.MidPanelPhone, {
                children: [(0, t.jsx)("div", {
                    className: "subtitle-text-btn",
                    children: "Total"
                }), (0, t.jsxs)("p", {
                    className: "total-price-single",
                    children: [I.CurrencySymbol[o], (0, I.formatPriceWithComma)(c)]
                })]
            }), (0, t.jsx)(eA.RightPanel, {
                children: (0, t.jsx)(eW.PrimaryButton, {
                    onClick: l ? () => {
                        d.setCloseButtonTheme("light"), d.set((0, t.jsx)(e$, {
                            trackingParams: {
                                utm_source: window.location.pathname,
                                utm_medium: "bottom-bar"
                            }
                        })), d.show()
                    } : a,
                    disabled: n,
                    "aria-busy": n,
                    children: n ? (0, t.jsx)(eM.DotSpinner, {
                        color: "#000000"
                    }) : l ? "Notify me" : i ? "Buy Now" : "Add to Cart"
                })
            })]
        })
    }).withConfig({
        displayName: "BottomBar",
        componentId: "sc-3780494b-1"
    })
    `
  background: #eee;
  box-shadow: inset 0 2px 2px white;

  padding: 8px;
  ${c.gridMixin}

  position: sticky;
  bottom: 0;
  z-index: 3;
  color: ${({theme:e})=>e.colorsV2.primary};

  .shipping {
    display: flex;
    gap: 4px;
    align-items: center;
    color: black;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 110%; /* 17.6px */
    letter-spacing: -0.64px;
    height: 100%;
    margin: auto 0;
  }

  .total-price-single {
    margin: auto 0;
    font-size: 2.4rem;
    font-weight: 500;
  }

  .subtitle-text-btn {
    height: 100%;
    display: flex;
    align-items: center;

    font-size: 1.5rem;
    font-weight: 500;
    color: black;

    svg {
      height: 0.8rem;
      path {
        fill: black;
      }
    }
  }

  @media (min-width: ${({theme:e})=>e.global.phone.maxWidth}) {
    padding: 8px 48px;
  }
`;
    var eR = e.i(57758),
        eD = e.i(21125),
        eE = e.i(13691);
    let eH = i.default.div.withConfig({
        displayName: "LayoutComponents__Container",
        componentId: "sc-e4b8f552-0"
    })
    `
  ${c.gridMixin}

  color: #fff;

  background-color: ${e=>e.fill||"black"};

  padding: 8rem 0;

  &.transparent {
    background-color: transparent;
  }

  @media (min-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
    padding: 15rem 0;
  }
`, eV = i.default.div.withConfig({
        displayName: "LayoutComponents__Content",
        componentId: "sc-e4b8f552-1"
    })
    `
  grid-row: 1;

  grid-column: 2 / -2;

  @media (max-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
    grid-column: 2 / -2;
    align-items: center;
  }
`, eL = i.default.button.withConfig({
        displayName: "FeaturedReviews__CarouselPointer",
        componentId: "sc-59acd0d6-0"
    })
    `
  border: none;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${e=>e.base||"black"};
  cursor: pointer;
  &.active {
    width: 69px;
    border-radius: 3px;

    &::before {
      content: '';
      width: 75%;
      height: 6px;
      background: ${e=>e.accent||"white"};
      z-index: 2;
      display: block;
      border-radius: 3px;
    }
  }
`;
    (0, i.default)(({
        className: e,
        quotes: a
    }) => {
        let [i, n] = (0, r.useState)(a[0]), {
            quote: o,
            description: s,
            author: c
        } = i;
        return (0, t.jsxs)("div", {
            className: e,
            children: [(0, t.jsx)("q", {
                children: o
            }), (0, t.jsxs)("p", {
                children: [c ? (0, t.jsxs)("span", {
                    children: [c, ", "]
                }) : null, s ? (0, t.jsx)("span", {
                    children: s
                }) : null]
            }), (0, t.jsx)("div", {
                className: "carousel-pointers",
                children: Array(a.length).fill(0).map((e, r) => (0, t.jsx)(eL, {
                    base: "rgba(0, 0, 0, 0.15)",
                    accent: "rgba(4, 74, 45, 1)",
                    className: o === a[r].quote ? "active" : "",
                    onClick: () => n(a[r])
                }, r))
            })]
        })
    }).withConfig({
        displayName: "FeaturedReviews__QuoteCarousel1",
        componentId: "sc-59acd0d6-1"
    })
    `
  display: flex;
  flex-direction: column;
  gap: 16px;

  color: #000;

  & .content {
    max-width: 70%;
    text-align: center;
  }

  .carousel-pointers {
    display: flex;
    gap: 16px;
  }

  .custom-dots {
  }
  q {
    max-width: 90%;
    font-size: 18px;
    font-weight: 500;
    line-height: 140%; /* 41.6px */
    letter-spacing: -0.96px;
  }
  p {
    font-size: 14px;
    line-height: 120%; /* 24px */
    letter-spacing: -0.42px;
  }

  @media (min-width: ${({theme:e})=>e.global.phone.maxWidth}) {
    q {
      font-size: 32px;
    }
    p {
      letter-spacing: -0.6px;
    }
  }
`;
    let eB = (0, i.default)(({
        className: e,
        quotes: a
    }) => {
        let [i, o] = (0, n.default)({
            loop: !0,
            align: "center"
        }, [(0, eE.default)({
            delay: 3e3,
            stopOnInteraction: !1
        })]), [s, c] = (0, r.useState)(0), l = (0, r.useCallback)(() => {
            o && c(o.selectedScrollSnap())
        }, [o]), d = (0, r.useCallback)(e => {
            o && o.scrollTo(e)
        }, [o]);
        return (0, r.useEffect)(() => {
            if (o) return l(), o.on("select", l), () => {
                o.off("select", l)
            }
        }, [o, l]), (0, t.jsxs)("div", {
            className: e,
            children: [(0, t.jsx)("div", {
                className: "embla",
                ref: i,
                children: (0, t.jsx)("div", {
                    className: "embla__container",
                    children: a.map((e, r) => (0, t.jsx)("div", {
                        className: "embla__slide",
                        children: (0, t.jsxs)("div", {
                            className: "quote-wrapper",
                            children: [(0, t.jsx)("q", {
                                children: e.quote
                            }), (0, t.jsxs)("p", {
                                children: [e.author, e.description ? (0, t.jsx)(t.Fragment, {
                                    children: e.description
                                }) : null]
                            })]
                        })
                    }, r))
                })
            }), (0, t.jsx)("div", {
                className: "embla__dots",
                children: a.map((e, r) => (0, t.jsx)("button", {
                    className: `embla__dot ${r===s?"embla__dot--selected":""}`,
                    onClick: () => d(r),
                    children: (0, t.jsx)("div", {
                        className: "progress"
                    })
                }, r))
            })]
        })
    }).withConfig({
        displayName: "FeaturedReviews__QuoteCarousel",
        componentId: "sc-59acd0d6-2"
    })
    `
  .embla {
    overflow: hidden;
  }

  .embla__container {
    display: flex;
  }

  .embla__slide {
    flex: 0 0 100%;
    min-width: 0;
  }

  @keyframes load {
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  }

  .embla__dots {
    display: flex !important;
    list-style: none;
    margin-top: 20px;
    gap: 16px;
  }

  .embla__dot {
    position: relative;
    border: none;
    width: 6px;
    height: 6px;
    padding: 0;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.15);
    transition: all 0.3s ease;
    cursor: pointer;

    .progress {
      display: none;
    }

    &.embla__dot--selected {
      width: 100px;
      border-radius: 3px;
      background: #034f42;

      .progress {
        display: block;
        animation: load 3s normal forwards;
        border-radius: 100px;
        background: #fff;
        height: 6px;
        width: 0;
      }
    }
  }

  .quote-wrapper {
    color: black;

    display: flex;
    flex-direction: column;
    gap: 16px;

    color: #000;

    & .content {
      max-width: 70%;
      text-align: center;
    }

    .carousel-pointers {
      display: flex;
      gap: 16px;
    }
    q {
      max-width: 90%;
      font-size: 18px;
      font-weight: 500;
      line-height: 130%; /* 41.6px */
      letter-spacing: -0.96px;
    }
    p {
      font-size: 14px;
      line-height: 120%; /* 24px */
      letter-spacing: -0.42px;
    }

    @media (min-width: ${({theme:e})=>e.global.phone.maxWidth}) {
      q {
        font-size: 32px;
      }
      p {
        letter-spacing: -0.6px;
      }
    }
  }
`, eq = (0, i.default)(({
        className: e,
        handleClick: r
    }) => {
        let a = [{
            quote: "The API for your body—What an amazing app experience and deep insights into how your body works. This truly goes out to show how each body is different and how nutrition can have an impact on us. Strongly recommend trying it at least once. Your life will never be the same!",
            author: "ApoorvSharma",
            description: (0, t.jsxs)(t.Fragment, {
                children: [(0, t.jsx)("span", {
                    className: "bullet",
                    children: "Verified purchase "
                }), " ", (0, t.jsx)("span", {
                    className: "bullet",
                    children: "June 2025"
                })]
            })
        }, {
            quote: "This is a game-changer and has helped me understand multiple aspect of my metabolic health made me conscious about the way I eat and what I eat, also Ultrahuman team is super super responsive and helpful really loving the experience.",
            author: "AK_AK_AK",
            description: (0, t.jsxs)(t.Fragment, {
                children: [(0, t.jsx)("span", {
                    className: "bullet",
                    children: "Verified purchase "
                }), " ", (0, t.jsx)("span", {
                    className: "bullet",
                    children: "June 2025"
                })]
            })
        }, {
            quote: "In love with the app. This has to be the best device after Apple Watch which helps track the blood glucose levels, in turn helping maintain a healthy lifestyle by allowing me make the right food choices while staying away from the others. I have quit almost all foods that have added sugar.",
            author: "Nayanava",
            description: (0, t.jsxs)(t.Fragment, {
                children: [(0, t.jsx)("span", {
                    className: "bullet",
                    children: "Verified purchase "
                }), " ", (0, t.jsx)("span", {
                    className: "bullet",
                    children: "June 2025"
                })]
            })
        }];
        return (0, t.jsx)(eH, {
            fill: "#F5F5F5",
            className: e,
            children: (0, t.jsxs)(eV, {
                className: "content",
                children: [(0, t.jsx)("div", {
                    className: "description-wrapper",
                    children: (0, t.jsxs)("div", {
                        className: "description",
                        children: [(0, t.jsxs)("p", {
                            children: ["Join ", (0, t.jsx)("strong", {
                                className: "space",
                                children: "45,000+ "
                            }), " ", (0, t.jsx)("br", {}), "members who have ", (0, t.jsx)("br", {}), (0, t.jsx)("strong", {
                                children: " changed their lives"
                            })]
                        }), (0, t.jsx)(eD.FiveStarsGold, {}), (0, t.jsx)("button", {
                            onClick: r,
                            children: "View all Reviews"
                        })]
                    })
                }), (0, t.jsx)(eB, {
                    quotes: a
                })]
            })
        })
    }).withConfig({
        displayName: "FeaturedReviews",
        componentId: "sc-59acd0d6-3"
    })
    `
  min-height: 500px;
  padding: 80px 0;

  .bullet::before {
    margin: 0px 0.4rem 0px 0.6rem;
    content: '';
    height: 0.5rem;
    width: 0.5rem;
    background-color: #034f42;
    border-radius: 50%;
    position: relative;
    bottom: 0.1rem;
    display: inline-block;
    z-index: 1;
  }

  * {
    min-height: 0;
    min-width: 0;
  }

  & .content {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .description-wrapper {
    text-align: left;
    align-self: start;
  }

  & .description {
    display: flex;
    flex-direction: column;
    gap: 16px;
    font-size: 40px;
    color: rgba(0, 0, 0, 0.3);
    font-weight: 500;
    line-height: 100%;
    letter-spacing: -1.6px;

    strong {
      color: #000;
      font-weight: 500;
    }

    strong.space {
      font-family: 'Space Grotesk';
    }

    @media (min-width: ${({theme:e})=>e.global.phone.maxWidth}) {
      font-size: 48px;
      letter-spacing: -1.92px;
    }

    button {
      padding: 8px 14px;
      border-radius: 40px;
      background: #034f42;
      border: none;
      box-shadow: 0px 1px 2px 0px #129c63 inset;

      color: #fff;
      text-align: center;

      font-size: 15px;
      font-weight: 500;

      line-height: 16px; /* 88.889% */

      @media (min-width: ${({theme:e})=>e.global.phone.maxWidth}) {
        padding: 16px 20px;
        font-size: 18px;
      }
    }
  }
  @media (min-width: ${({theme:e})=>e.global.phone.maxWidth}) {
    & .content {
      flex-direction: unset;
      align-items: center;
      gap: 132px;

      & > * {
        flex: 1;
      }
    }

    & .description {
      font-size: 32px;
      letter-spacing: -1.28px;

      button {
        align-self: flex-start;
        min-width: 180px;
      }
    }
  }
`;
    var eG = e.i(82067),
        eJ = e.i(3473),
        eK = e.i(4745);
    let eY = i.default.h2.withConfig({
        displayName: "StyleComponents__H2",
        componentId: "sc-f101ddd-0"
    })
    `
  color: ${({color:e})=>e||"black"};
  font-weight: 500;
  margin-bottom: 32px;

  font-size: 40px;
  font-weight: 500;
  line-height: 110%; /* 44px */
  letter-spacing: -1.2px;
  text-align: ${({align:e})=>e||"center"};

  @media (min-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
    font-size: 6.4rem;
    line-height: 80px; /* 125% */
    letter-spacing: -1.28px;
  }
`, eQ = i.default.h3.withConfig({
        displayName: "StyleComponents__H3",
        componentId: "sc-f101ddd-1"
    })
    `
  color: ${({color:e})=>e||"black"};
  text-align: ${({align:e})=>e||"center"};

  color: #fff;
  font-size: 24px;
  line-height: 28px; /* 116.667% */
  letter-spacing: -0.48px;
  margin-bottom: 8px;
  font-weight: 500;

  @media (min-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
    font-size: 3.2rem;
    line-height: 110%; /* 35.2px */
    letter-spacing: -0.64px;
  }
`, eZ = i.default.p.withConfig({
        displayName: "StyleComponents__P",
        componentId: "sc-f101ddd-2"
    })
    `
  color: ${({color:e})=>e||"black"};
  text-align: ${({align:e})=>e||"center"};

  font-size: 16px;
  line-height: 130%;
  letter-spacing: -0.16px;

  @media (min-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
    letter-spacing: -0.19px;
  }
`, e0 = {
        src: e.i(95785).default,
        width: 128,
        height: 22,
        blurWidth: 0,
        blurHeight: 0
    }, e1 = {
        src: e.i(90588).default,
        width: 93,
        height: 16,
        blurWidth: 0,
        blurHeight: 0
    }, e2 = {
        apple: {
            rating: 4.9,
            reviews: 2e3,
            title: "App store",
            ratingIcon: e0,
            storeIcon: (0, t.jsx)(eG.AppleLogo, {}),
            ctaText: "Download on the AppStore",
            ctaLink: "https://apps.apple.com/us/app/ultrahuman-meditation-sleep/id1491286709"
        },
        google: {
            rating: 4.5,
            reviews: 2e3,
            title: "Play store",
            ratingIcon: e1,
            storeIcon: (0, t.jsx)(eK.PlayStoreLogo, {}),
            ctaText: "Download on PlayStore",
            ctaLink: "https://play.google.com/store/apps/details?id=com.ultrahuman.android"
        }
    }, e5 = (0, i.default)(({
        className: e,
        author: r,
        title: a,
        repeatUser: i,
        review: n,
        rating: o
    }) => (0, t.jsxs)("article", {
        className: e,
        children: [(0, t.jsxs)("div", {
            className: "section",
            children: [(0, t.jsx)("p", {
                className: "author",
                children: r
            }), (0, t.jsx)("p", {
                className: "title",
                children: a
            })]
        }), (0, t.jsxs)("div", {
            className: "rating-wrapper",
            children: [(0, t.jsx)(eJ.FiveStarRating, {
                rating: o
            }), (0, t.jsx)("p", {
                className: "repeat-user",
                children: i ? "Repeat purchase" : null
            })]
        }), (0, t.jsx)("q", {
            className: "review",
            children: n
        })]
    })).withConfig({
        displayName: "M1Reviews__UserReview",
        componentId: "sc-74ee8325-0"
    })
    `
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  border-radius: 8px;
  background: #f5f5f5;
  gap: 24px;
  letter-spacing: -0.42px;
  color: black;

  .rating-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .author {
    font-size: 14px;
    line-height: 120%; /* 16.8px */
  }

  & .title {
    font-size: 20px;
    font-weight: 500;
    line-height: 120%; /* 24px */
    letter-spacing: -0.6px;
    margin-top: 8px;
  }

  .repeat-user {
    font-size: 14px;
    line-height: 120%; /* 16.8px */
  }

  q {
    color: rgba(0, 0, 0, 0.5);
    font-size: 16px;
    line-height: 23px; /* 143.75% */
    letter-spacing: -0.32px;
  }
`, e4 = (0, i.default)(({
        className: e,
        store: r
    }) => {
        let {
            rating: a,
            title: i,
            ctaLink: n,
            storeIcon: o,
            ctaText: s
        } = e2[r];
        return (0, t.jsxs)("div", {
            className: e,
            children: [(0, t.jsxs)("div", {
                className: "description",
                children: [(0, t.jsx)("p", {
                    className: "rating",
                    children: a
                }), (0, t.jsxs)("div", {
                    className: "content",
                    children: [(0, t.jsx)("p", {
                        className: "title",
                        children: i
                    }), (0, t.jsx)(eJ.FiveStarRating, {
                        rating: a
                    })]
                })]
            }), (0, t.jsxs)(M.default, {
                href: n,
                children: [o, " ", (0, t.jsx)("span", {
                    children: s
                })]
            })]
        })
    }).withConfig({
        displayName: "M1Reviews__AppStoreReviews",
        componentId: "sc-74ee8325-1"
    })
    `
  align-self: start;
  min-width: 300px;
  @media (min-width: ${({theme:e})=>e.global.phone.maxWidth}) {
    align-self: unset;
  }
  .rating {
    font-family: 'Space Grotesk';
    color: black;
    font-size: 64px;
    font-weight: 500;
    line-height: 64px; /* 100% */
  }

  & .title {
    font-size: 19px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  & .description {
    display: flex;
    gap: 8px;

    & .content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: start;
    }
  }

  a {
    display: flex;
    gap: 8px;
    align-items: center;
    padding: 16px 24px;
    color: black;
    border-radius: 27px;
    border: 1px solid #000;

    margin-top: 16px;

    font-size: 18px;
    font-weight: 500;
    line-height: 16px; /* 88.889% */
  }
`, e3 = (0, i.default)(({
        className: e,
        title: a,
        items: i
    }) => {
        let [n, s] = (0, r.useState)(!0), [c, l] = (0, r.useState)(!0), [d, p] = (0, r.useState)(0), h = (0, r.useRef)(null), u = () => {
            let e = Math.floor((h.current ? .clientWidth ? ? 0) / 400);
            e || (e = 1), c ? (p(2 * e), 2 * e < i.length && s(!0)) : (p(i.length), s(!1))
        };
        (0, r.useEffect)(() => (u(), window.addEventListener("resize", u), () => {
            window.removeEventListener("resize", u)
        }), [n, i.length, h.current, c]);
        let m = i.slice(0, d);
        return (0, t.jsx)(eH, {
            fill: "white",
            children: (0, t.jsx)(eV, {
                children: (0, t.jsxs)("div", {
                    className: e,
                    children: [(0, t.jsx)(eY, {
                        color: "black",
                        align: "left",
                        children: a
                    }), (0, t.jsxs)("div", {
                        className: "app-store-reviews",
                        children: [(0, t.jsx)(e4, {
                            store: "apple"
                        }), (0, t.jsx)(e4, {
                            store: "google"
                        })]
                    }), (0, t.jsxs)("div", {
                        className: "user-reviews ",
                        ref: h,
                        children: [m.map((e, r) => (0, t.jsx)(e5, {
                            author: e.userName,
                            repeatUser: !0,
                            title: e.title,
                            rating: e.starCount,
                            review: e.content
                        }, r)), i.length > 5 && (0, t.jsxs)("button", {
                            onClick: () => {
                                l(e => !e)
                            },
                            children: [n ? "Show more" : "Show less", " ", (0, t.jsx)(o.CaretUp, {
                                className: n ? "rotate" : "",
                                fill: "black"
                            })]
                        })]
                    })]
                })
            })
        })
    }).withConfig({
        displayName: "M1Reviews",
        componentId: "sc-74ee8325-2"
    })
    `
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;

  h2 {
    margin-bottom: 0;
  }

  & .title {
    color: black;
    margin-bottom: 0;
  }

  .app-store-reviews {
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media (min-width: ${({theme:e})=>e.global.phone.maxWidth}) {
      flex-direction: row;
    }
  }

  .user-reviews {
    display: grid;
    grid-gap: 1rem;
    @media (min-width: ${({theme:e})=>e.global.phone.maxWidth}) {
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    }
  }

  button {
    border: none;
    background: none;
    padding: 3px 0;
    grid-column: 1 / -1;
    color: #000000;

    font-size: 18px;
    font-weight: 500;
    line-height: 16px; /* 88.889% */
  }

  .rotate {
    transform: rotate(180deg);
  }
`;
    var e6 = e.i(8762),
        e8 = e.i(18888),
        e9 = e.i(86236);
    let e7 = (0, i.default)(({
        className: e,
        title: a,
        description: i,
        img: n
    }) => {
        let o = (0, r.useRef)(null),
            s = (0, e6.useGsapContext)(),
            c = () => {
                o.current && s.add(() => {
                    let e = e8.default.timeline({
                        defaults: {
                            duration: 1
                        },
                        scrollTrigger: {
                            trigger: o.current,
                            scrub: .5,
                            start: "top 60%",
                            end: "bottom 30%"
                        }
                    });
                    e.fromTo(".translateup", {
                        yPercent: 0
                    }, {
                        yPercent: -40
                    }), e.pause()
                })
            };
        return (0, e9.useIsomorphicLayoutEffect)(() => {
            let e = setTimeout(c, 100);
            return () => {
                e && clearTimeout(e)
            }
        }, []), (0, t.jsxs)("div", {
            className: `${e} container`,
            ref: o,
            children: [(0, t.jsxs)("div", {
                className: "text",
                children: [(0, t.jsx)(eQ, {
                    align: "left",
                    children: a ? ? "The only nudges that you need"
                }), (0, t.jsx)(eZ, {
                    color: "rgba(255, 255, 255, 0.5)",
                    align: "left",
                    children: i ? ? "Personalised nudges for a healthier you. Get tailor-made insights and alerts to help you make better choices in real time."
                })]
            }), (0, t.jsx)("div", {
                className: "image",
                children: (0, t.jsx)(l.CustomImage, {
                    className: "translateup",
                    src: n ? ? "web_v2/illustrations/nudges-trail.png",
                    alt: "nudges",
                    fill: !0
                })
            })]
        })
    }).withConfig({
        displayName: "NudgeCard",
        componentId: "sc-d182f3b8-0"
    })
    `
  --bento-card-padding: 20px;
  height: 500px;
  padding: var(--bento-card-padding);

  @media (min-width: ${({theme:e})=>e.globalV2.sm.maxWidth}) {
    --bento-card-padding: 48px;
    padding: var(--bento-card-padding);
  }

  position: relative;

  --card-bg-color: rgba(15, 15, 15, 1);

  background-color: var(--card-bg-color);

  display: flex;
  flex-direction: column;

  @media (min-width: ${({theme:e})=>e.globalV2.sm.maxWidth}) {
    flex-direction: row;
    & > div {
      width: 50%;
      height: 100%;
      flex-shrink: 0;
      flex-grow: 0;
    }

    .text {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    & .image {
      height: 100%;
    }
  }

  h4,
  p {
    width: 100%;
  }

  & .image {
    position: relative;
    text-align: center;
    overflow: hidden;

    padding-top: 12px;

    @media (min-width: ${({theme:e})=>e.globalV2.sm.maxWidth}) {
      text-align: right;
      padding-top: 0;
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100px;
      background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0) 0%,
        var(--card-bg-color) 90%
      );
      z-index: 1;
    }

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100px;
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) 0%,
        var(--card-bg-color) 90%
      );
      z-index: 1;
    }

    img {
      position: static !important;
      width: 100%;
      height: auto !important;

      @media (min-width: ${({theme:e})=>e.globalV2.sm.maxWidth}) {
        width: 80% !important;
        margin: 0 auto;
      }
    }
  }
`, te = [{
        title: "Real-time glucose monitoring",
        description: "Track your real-time glucose with just a quick scan.",
        img: "web_v2/m1/features/glucose-monitor-latest.png",
        fullSize: !1
    }, {
        title: "Metabolic Score",
        description: "Visualize your metabolic health in real-time with Metabolic score.",
        img: "web_v2/m1/features/metabolic-score-latest.png",
        fullSize: !1
    }, {
        title: "Food score",
        description: "Measure how different foods affect your glucose levels on a scale of 1 to 10. Find the foods that work for you and optimise the ones that don’t.",
        img: "web_v2/m1/features/food-score-up.png",
        fullSize: !1
    }, {
        title: "Fuelling score",
        description: "Maximize your sports & workout performance using the fueling score. Understand foods and lifestyle habits that will help you improve performance & focus during activities.",
        img: "web_v2/m1/features/fuelling-score-latest.png",
        fullSize: !1
    }, {
        title: "Metabolic nudges",
        description: "Get personalized and actionable nudges that help you make better health choices throughout the day.",
        img: "web_v2/m1/features/nudge.1.png",
        fullSize: !0
    }, {
        title: "Science-backed coaching, on us",
        description: "Get personalized, science-backed insights into your glucose trends from our ASCM-certified coaches at no extra cost.",
        img: "web_v2/m1/features/ultracare-m1-2.png",
        fullSize: !1
    }, {
        title: "One app. Many integrations.",
        description: "Automatically sync your workout, sleep, and menstrual data with top apps, including Apple Health, Google Fit, Strava, MyFitnessPal, Clue, and more.",
        img: "web_v2/m1/features/app-integrations.png",
        fullSize: !1
    }, {
        title: "Community insights",
        description: "Understand how your food response stacks up against your fellow Cyborgs. ",
        img: "web_v2/m1/features/community-insights-latest.png",
        fullSize: !1
    }, {
        title: "Trend correlations",
        description: "Uncover the patterns behind your metrics to see what drives improvement and performance.",
        img: "web_v2/m1/features/correlations.png",
        fullSize: !1
    }], tt = (0, i.default)(({
        feature: e,
        className: r
    }) => {
        let {
            title: a,
            description: i,
            img: n,
            fullSize: o
        } = e;
        return (0, t.jsxs)("div", {
            className: `${r} ${o?"full-size":""}`,
            children: [(0, t.jsxs)("div", {
                className: "content",
                children: [(0, t.jsx)(eQ, {
                    align: "left",
                    children: a
                }), (0, t.jsx)(eZ, {
                    color: "rgba(255, 255, 255, 0.5)",
                    align: "left",
                    children: i
                })]
            }), (0, t.jsx)("div", {
                className: "img-wrapper",
                children: n ? (0, t.jsx)(l.CustomImage, {
                    src: n,
                    alt: "",
                    fill: !0,
                    style: {
                        objectFit: "contain"
                    }
                }) : null
            })]
        })
    }).withConfig({
        displayName: "MasterYourMetabolism__FeatureCard",
        componentId: "sc-a75065d9-0"
    })
    `
  padding: 20px;
  padding-bottom: 16px;
  height: 491px;
  display: flex;
  flex-direction: column;
  gap: 21px;
  justify-content: space-between;
  border-radius: 16px;
  background: #101010;

  .img-wrapper {
    margin: 0 18px;
    flex-grow: 1;
    position: relative;
  }
  max-width: 468px;

  & .content {
    max-width: 80%;
  }

  h3 {
    font-weight: 500;
  }

  img {
    align-self: center;
  }

  @media (min-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
    padding: 32px;
    padding-bottom: 18px;
    height: 620px;
    gap: 16px;
  }
`, tr = (0, i.default)(({
        className: e
    }) => {
        let a = (0, r.useRef)(null);
        return (0, r.useEffect)(() => {
            a.current && (a.current.playbackRate = .8)
        }, [a]), (0, t.jsxs)("div", {
            className: `${e} full-size`,
            children: [(0, t.jsx)("video", {
                ref: a,
                autoPlay: !0,
                loop: !0,
                muted: !0,
                playsInline: !0,
                preload: "true",
                className: "video",
                src: (0, y.getCompressedAssetUrl)("/web_v2/m1/space.mp4")
            }), (0, t.jsx)("div", {
                className: "bg"
            }), (0, t.jsxs)("div", {
                className: "video-content",
                children: [(0, t.jsx)("h3", {
                    className: "number",
                    children: "600mn+"
                }), (0, t.jsx)("h3", {
                    className: "description",
                    children: "data points were captured through the CGM"
                })]
            })]
        })
    }).withConfig({
        displayName: "MasterYourMetabolism__Video",
        componentId: "sc-a75065d9-1"
    })
    `
  height: 500px;
  position: relative;
  overflow: hidden;
  display: grid;
  place-items: center;

  .video {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* Change the color and opacity as needed */
    pointer-events: none;
    z-index: 2;
  }

  .video-content {
    position: absolute;
    display: flex;
    flex-direction: column;
    max-width: 400px;
    color: #fff;
    text-align: center;
    justify-content: center;
    pointer-events: none;
    z-index: 3;
    h3 {
      font-size: 88px;
      font-weight: 500;
      line-height: 80px; /* 90.909% */
    }

    & .description {
      color: #05ff00;
      font-size: 19px;
      font-weight: 500;
      line-height: 28px; /* 147.368% */
      letter-spacing: -0.19px;
    }

    h3,
    p > span {
      font-family: 'Space Grotesk';
    }

    p {
      margin-top: 20px;
      text-align: center;
      font-size: 32px;
      font-weight: 500;
      line-height: 40px; /* 125% */
    }
  }
`, ta = (0, i.default)(({
        className: e
    }) => (0, t.jsx)(eH, {
        fill: "black",
        className: e,
        children: (0, t.jsxs)(eV, {
            className: "content",
            children: [(0, t.jsx)(ey.H2, {
                children: "The M1 Live experience"
            }), (0, t.jsxs)("div", {
                className: "features",
                children: [te.map((e, r) => e.fullSize ? (0, t.jsx)("div", {
                    className: "full-size",
                    children: (0, t.jsx)(e7, { ...e
                    })
                }, r) : (0, t.jsx)(tt, {
                    feature: e
                }, r)), (0, t.jsx)(tr, {})]
            })]
        })
    })).withConfig({
        displayName: "MasterYourMetabolism",
        componentId: "sc-a75065d9-2"
    })
    `
  & .content {
    max-width: 950px;
    margin: 0 auto;
  }

  h2 {
    color: #fff;
    font-weight: 500;
    margin-bottom: 32px;

    font-size: 40px;
    font-weight: 500;
    line-height: 110%; /* 44px */
    letter-spacing: -1.2px;
  }

  .full-size {
    @media (min-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
      max-width: 100%;
      grid-column: 1 / -1;
      // .content {
      //   align-self: center;
      // }

      // flex-direction: row;
      // .content,
      // img {
      //   flex: 1;
      // }
    }
  }

  .features {
    gap: 8px;
    display: flex;
    flex-direction: column;

    @media (min-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (min-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
    h2 {
      font-size: 6.4rem;
      line-height: 80px; /* 125% */
      letter-spacing: -1.28px;
    }
  }
`;
    var ti = e.i(73528);
    let tn = (0, i.default)(({
        className: e
    }) => {
        let {
            width: r
        } = (0, s.useWindowSize)();
        return (0, t.jsx)("div", {
            className: e,
            children: (0, t.jsxs)("div", {
                className: "section",
                children: [r > 727 ? (0, t.jsx)(l.CustomImage, {
                    src: "web_v2/m1/ogdb/bg-desktop.png",
                    fill: !0,
                    alt: "",
                    objectFit: "contain"
                }) : (0, t.jsx)(l.CustomImage, {
                    src: "web_v2/m1/ogdb/bg-mobile.png",
                    fill: !0,
                    alt: "",
                    objectFit: "contain"
                }), r > 727 ? (0, t.jsx)(l.CustomImage, {
                    src: "web_v2/m1/ogdb/bg-desktop.png",
                    fill: !0,
                    alt: "",
                    objectFit: "contain",
                    className: "bg-blur"
                }) : (0, t.jsx)(l.CustomImage, {
                    src: "web_v2/m1/ogdb/bg-mobile.png",
                    fill: !0,
                    alt: "",
                    objectFit: "contain"
                }), (0, t.jsxs)("div", {
                    className: "content",
                    children: [(0, t.jsx)("h3", {
                        children: "Find the Glucose response for your favourite foods "
                    }), (0, t.jsx)(M.default, {
                        onClick: () => (0, ti.track)("link Ogdb clicked", {
                            location: "/pricing"
                        }),
                        "data-link": "ogdb",
                        href: "/ogdb",
                        children: "Explore OGDb"
                    })]
                })]
            })
        })
    }).withConfig({
        displayName: "Ogdb",
        componentId: "sc-6335bf71-0"
    })
    `
  padding: 16px;
  padding-top: 0;
  background: black;

  .section {
    position: relative;
    height: 40vh;
    min-height: 550px;
    background: #101010;

    @media (min-width: ${({theme:e})=>e.global.phone.maxWidth}) {
      display: grid;
      place-items: center;
      height: 20vh;
      min-height: 350px;
    }
  }

  .blur {
    filter: blur(20px);
  }

  & .content {
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 16px;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 80px;
    z-index: 2;
    @media (max-width: ${({theme:e})=>e.global.phone.maxWidth}) {
      top: 0;
      left: 0;
      right: 0;
    }
    @media (min-width: ${({theme:e})=>e.global.phone.maxWidth}) {
      left: 50%;
      transform: translateX(-50%);
      max-width: 700px;
    }
  }

  h3 {
    color: #fff;
    text-align: center;
    font-size: 32px;
    font-weight: 500;
    line-height: 40px; /* 125% */
    letter-spacing: -0.64px;

    @media (min-width: ${({theme:e})=>e.global.phone.maxWidth}) {
      font-size: 48px;
      line-height: 56px; /* 116.667% */
      letter-spacing: -1.44px;
    }
  }
  a {
    border-radius: 40px;
    background: #fefefe;
    color: #000;
    text-align: center;
    font-family: Graphik;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px; /* 106.667% */
    padding: 14px 24px;
    align-self: center;
  }
`;
    var to = e.i(62360);
    let ts = ({
            start: e = 0,
            end: a = 100,
            duration: i = 2,
            className: n
        }) => {
            let o = (0, r.useRef)(null),
                s = (0, r.useRef)(null);
            return (0, r.useEffect)(() => (s.current = new IntersectionObserver(t => {
                t.forEach(t => {
                    t.isIntersecting && (o.current && e8.default.fromTo(o.current, {
                        innerHTML: e
                    }, {
                        innerHTML: a,
                        duration: i,
                        ease: "power1.inOut",
                        snap: {
                            innerHTML: 1
                        },
                        onUpdate: function() {
                            o.current && (o.current.innerHTML = Math.ceil(Number(o.current.innerHTML)).toString() + "%")
                        }
                    }), s.current && s.current.disconnect())
                })
            }, {
                threshold: .1
            }), o.current && s.current.observe(o.current), () => {
                s.current && s.current.disconnect()
            }), [e, a, i]), (0, t.jsx)("span", {
                className: n,
                ref: o,
                children: e
            })
        },
        tc = [{
            precentage: 59,
            description: "reduction in glucose spikes"
        }, {
            precentage: 13,
            description: "improvement in glucose level regulation"
        }],
        tl = (0, i.default)(({
            className: e
        }) => (0, t.jsx)(eH, {
            fill: "#F5F5F5",
            className: e,
            children: (0, t.jsx)(eV, {
                children: (0, t.jsxs)("div", {
                    className: "content",
                    children: [(0, t.jsxs)("div", {
                        className: "description-content",
                        children: [(0, t.jsx)("div", {
                            children: (0, t.jsx)(to.H2, {
                                children: "Metabolic Score is now a clinically validated marker"
                            })
                        }), (0, t.jsx)(M.default, {
                            className: "clinical-research",
                            href: "https://www.nature.com/articles/s41598-024-56933-2?_gl=1*ggzxh1*_gcl_au*MTIxODYzMDUxOS4xNzE2MjAxNzM5",
                            children: "Read the study"
                        }), (0, t.jsx)("p", {
                            className: "desktop-only",
                            children: "*The Metabolic Score is now a validated marker of insulin sensitivity and glucose metabolism. Read the study for more details."
                        })]
                    }), (0, t.jsxs)("div", {
                        className: "research-descriptions",
                        children: [tc.map((e, r) => (0, t.jsxs)("div", {
                            className: "  research-description",
                            children: [(0, t.jsx)(ts, {
                                className: "percentage",
                                start: 0,
                                end: e.precentage,
                                duration: 2
                            }), (0, t.jsx)("span", {
                                className: "description",
                                children: e.description
                            })]
                        }, r)), (0, t.jsx)("p", {
                            className: "mobile-only",
                            children: "*The Metabolic Score is now a validated marker of insulin sensitivity and glucose metabolism. Read the study for more details."
                        })]
                    })]
                })
            })
        })).withConfig({
            displayName: "ResearchSection",
            componentId: "sc-4e35857c-0"
        })
    `
  color: black;

  & .content {
    display: flex;
    flex-direction: column;
    gap: 48px;
  }

  .description-content {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  h2 {
    font-size: 40px;
    font-weight: 500;
    line-height: 100%; /* 40px */
    letter-spacing: -1.2px;
    color: black;
  }

  a {
    padding: 8px 14px;
    border: none;
    outline: none;

    align-self: flex-start;
    border-radius: 40px;
    background: #034f42;
    box-shadow: 0px 1px 2px 0px #129c63 inset;
    color: #fff;
    font-size: 15px;
    font-weight: 500;
    line-height: 16px; /* 106.667% */
  }

  p {
    color: rgba(0, 0, 0, 0.5);
    font-size: 1.2rem;
    line-height: 140%; /* 1.68rem */
    letter-spacing: -0.012rem;
    max-width: 400px;
  }

  .percentage {
    font-family: 'Space Grotesk';
    font-size: 6.4rem;
    letter-spacing: -0.192rem;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; /* 11.2rem */
    min-width: 150px;
  }

  & .description {
    color: rgba(0, 0, 0, 0.4);
    font-size: 15px;
    font-weight: 500;
    line-height: 110%; /* 16.5px */
    letter-spacing: -0.45px;
    align-self: end;
    margin-bottom: 2rem;
  }

  .research-descriptions {
    display: flex;
    flex-direction: column;
    gap: 48px;
  }

  .research-description {
    display: flex;
  }

  .mobile-only {
    display: block;
  }

  .desktop-only {
    display: none;
  }

  @media (min-width: ${({theme:e})=>e.global.tablet.maxWidth}) {
    .mobile-only {
      display: none;
    }

    .desktop-only {
      display: block;
    }

    .content > * {
      flex: 1;
    }

    & .content {
      flex-direction: row;
    }

    .research-descriptions {
      flex-direction: column;
      gap: 48px;
    }

    .description-content {
      gap: 16px;
    }

    h2 {
      font-size: 6.4rem;
      line-height: 7.2rem; /* 112.5% */
    }

    a {
      padding: 16px 20px;
      font-size: 1.8rem;
      line-height: 1.6rem; /* 88.889% */
    }

    .percentage {
      font-size: 11.2rem;
      letter-spacing: -0.336rem;
      text-align: right;
    }

    & .description {
      font-size: 2rem;
      text-align: right;
    }

    .research-description {
      flex-direction: column;
      align-items: flex-end;
    }
  }
`, td = (0, i.default)(({
        className: e
    }) => (0, t.jsx)(eH, {
        fill: "white",
        children: (0, t.jsx)(eV, {
            children: (0, t.jsxs)("div", {
                className: e,
                children: [(0, t.jsxs)("div", {
                    className: "content",
                    children: [(0, t.jsxs)("div", {
                        className: "description description-1",
                        children: [(0, t.jsxs)(to.H3, {
                            children: ["A sensor to track", " ", (0, t.jsx)("span", {
                                className: "highlight",
                                children: "real‑time glucose levels"
                            })]
                        }), (0, t.jsx)("p", {
                            children: "The M1 Live is developed in collaboration with top metabolic health experts and athletes to accurately measure your metabolic performance using glucose as a biomarker."
                        })]
                    }), (0, t.jsx)(l.CustomImage, {
                        src: "web_v2/home/blogs/1.webp",
                        width: "6400",
                        height: "6568",
                        alt: "something",
                        className: "metabolism"
                    })]
                }), (0, t.jsxs)("div", {
                    className: "content content-reverse",
                    children: [(0, t.jsx)(l.CustomImage, {
                        src: "web_v2/m1/metabolism-screen-mockup-updated.png",
                        width: "1924",
                        height: "3156",
                        alt: "metabolism-screen-mockup",
                        className: "screen-mockup"
                    }), (0, t.jsxs)("div", {
                        className: "description description-2",
                        children: [(0, t.jsxs)(to.H3, {
                            children: ["An app to ", (0, t.jsx)("span", {
                                className: "highlight",
                                children: "connect the dots"
                            })]
                        }), (0, t.jsx)("p", {
                            children: "Track your glucose trends in real-time with the app. Discover the impact of food and exercise on your glucose levels with real-time actionable nudges that help you improve your metabolic health."
                        })]
                    })]
                })]
            })
        })
    })).withConfig({
        displayName: "SensorFeatures",
        componentId: "sc-73b686b1-0"
    })
    `
  display: flex;
  flex-direction: column;
  gap: 4.8rem;
  min-height: 900px;

  h3 {
    color: #000;
    font-size: 40px;
    font-weight: 500;
    line-height: 44px; /* 110% */
    letter-spacing: -1.6px;
    margin-bottom: 8px;
    max-width: 90%;
  }

  .highlight {
    color: rgba(0, 0, 0, 0.3);
  }

  .description-1 {
    margin-bottom: 3.2rem;
  }

  & > * {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  p {
    color: rgba(0, 0, 0, 0.7);
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 133.333% */
    letter-spacing: -0.18px;
  }

  .metabolism {
    width: 100%;
    height: 100%;
    max-width: 550px;
    max-height: 550px;
    border-radius: 50%;
  }

  .screen-mockup {
    width: 95%;
    height: 100%;
  }

  .content-reverse {
    flex-direction: column-reverse;
    gap: 3.2rem;
  }

  @media (min-width: ${({theme:e})=>e.global.phone.maxWidth}) {
    flex-direction: column;

    h3 {
      font-size: 64px;
      line-height: 100%; /* 64px */
      letter-spacing: -1.92px;
    }

    & .description {
      font-size: 19px;
      line-height: 28px; /* 147.368% */
      letter-spacing: -0.19px;
      max-width: 80%;
    }

    .content-reverse {
      margin-top: -250px;
    }

    .metabolism {
      mmargin-left: 30px;
    }

    .screen-mockup {
      max-width: 480px;
    }

    h3,
    p {
      max-width: 550px;
    }

    & .content {
      flex-direction: row;
      gap: 32px;

      justify-content: space-evenly;

      .description-1 {
        align-self: flex-start;
      }

      .description-2 {
        align-self: flex-end;
        margin-bottom: 7.2rem;
      }
    }
  }
`;
    var tp = e.i(64130),
        th = e.i(52935),
        tu = e.i(70935),
        tm = e.i(91898),
        tg = e.i(86091),
        tf = e.i(83240);
    let tx = {
            ch: {
                name: "Switzerland",
                currency: O.Currency.ch,
                defaultOption: N.ProductPurchaseOption.oneTimePurchase,
                defaultProduct: N.ProductPurchaseType.otp_4_weeks_eu
            },
            is: {
                name: "Iceland",
                currency: O.Currency.eur,
                defaultOption: N.ProductPurchaseOption.oneTimePurchase,
                defaultProduct: N.ProductPurchaseType.otp_2_weeks_eu
            },
            at: {
                name: "Austria",
                currency: O.Currency.eur,
                defaultOption: N.ProductPurchaseOption.oneTimePurchase,
                defaultProduct: N.ProductPurchaseType.otp_4_weeks_eu
            },
            be: {
                name: "Belgium",
                currency: O.Currency.eur,
                defaultOption: N.ProductPurchaseOption.oneTimePurchase,
                defaultProduct: N.ProductPurchaseType.otp_4_weeks_eu
            },
            bg: {
                name: "Bulgaria",
                currency: O.Currency.eur,
                defaultOption: N.ProductPurchaseOption.oneTimePurchase,
                defaultProduct: N.ProductPurchaseType.otp_4_weeks_eu
            },
            hr: {
                name: "Croatia",
                currency: O.Currency.eur,
                defaultOption: N.ProductPurchaseOption.oneTimePurchase,
                defaultProduct: N.ProductPurchaseType.otp_4_weeks_eu
            },
            cy: {
                name: "Cyprus",
                currency: O.Currency.eur,
                defaultOption: N.ProductPurchaseOption.oneTimePurchase,
                defaultProduct: N.ProductPurchaseType.otp_4_weeks_eu
            },
            cz: {
                name: "Czech Republic",
                currency: O.Currency.eur,
                defaultOption: N.ProductPurchaseOption.oneTimePurchase,
                defaultProduct: N.ProductPurchaseType.otp_4_weeks_eu
            },
            dk: {
                name: "Denmark",
                currency: O.Currency.eur,
                defaultOption: N.ProductPurchaseOption.oneTimePurchase,
                defaultProduct: N.ProductPurchaseType.otp_4_weeks_eu
            },
            ee: {
                name: "Estonia",
                currency: O.Currency.eur,
                defaultOption: N.ProductPurchaseOption.oneTimePurchase,
                defaultProduct: N.ProductPurchaseType.otp_4_weeks_eu
            },
            fi: {
                name: "Finland",
                currency: O.Currency.eur,
                defaultOption: N.ProductPurchaseOption.oneTimePurchase,
                defaultProduct: N.ProductPurchaseType.otp_4_weeks_eu
            },
            fr: {
                name: "France",
                currency: O.Currency.eur,
                defaultOption: N.ProductPurchaseOption.oneTimePurchase,
                defaultProduct: N.ProductPurchaseType.otp_4_weeks_eu
            },
            de: {
                name: "Germany",
                currency: O.Currency.eur,
                defaultOption: N.ProductPurchaseOption.oneTimePurchase,
                defaultProduct: N.ProductPurchaseType.otp_4_weeks_eu
            },
            gr: {
                name: "Greece",
                currency: O.Currency.eur,
                defaultOption: N.ProductPurchaseOption.oneTimePurchase,
                defaultProduct: N.ProductPurchaseType.otp_4_weeks_eu
            },
            hu: {
                name: "Hungary",
                currency: O.Currency.eur,
                defaultOption: N.ProductPurchaseOption.oneTimePurchase,
                defaultProduct: N.ProductPurchaseType.otp_4_weeks_eu
            },
            ie: {
                name: "Ireland",
                currency: O.Currency.eur,
                defaultOption: N.ProductPurchaseOption.oneTimePurchase,
                defaultProduct: N.ProductPurchaseType.otp_4_weeks_eu
            },
            it: {
                name: "Italy",
                currency: O.Currency.eur,
                defaultOption: N.ProductPurchaseOption.oneTimePurchase,
                defaultProduct: N.ProductPurchaseType.otp_4_weeks_eu
            },
            lv: {
                name: "Latvia",
                currency: O.Currency.eur,
                defaultOption: N.ProductPurchaseOption.oneTimePurchase,
                defaultProduct: N.ProductPurchaseType.otp_4_weeks_eu
            },
            lt: {
                name: "Lithuania",
                currency: O.Currency.eur,
                defaultOption: N.ProductPurchaseOption.oneTimePurchase,
                defaultProduct: N.ProductPurchaseType.otp_4_weeks_eu
            },
            lu: {
                name: "Luxembourg",
                currency: O.Currency.eur,
                defaultOption: N.ProductPurchaseOption.oneTimePurchase,
                defaultProduct: N.ProductPurchaseType.otp_4_weeks_eu
            },
            nl: {
                name: "Netherlands",
                currency: O.Currency.eur,
                defaultOption: N.ProductPurchaseOption.oneTimePurchase,
                defaultProduct: N.ProductPurchaseType.otp_4_weeks_eu
            },
            pl: {
                name: "Poland",
                currency: O.Currency.eur,
                defaultOption: N.ProductPurchaseOption.oneTimePurchase,
                defaultProduct: N.ProductPurchaseType.otp_4_weeks_eu
            },
            pt: {
                name: "Portugal",
                currency: O.Currency.eur,
                defaultOption: N.ProductPurchaseOption.oneTimePurchase,
                defaultProduct: N.ProductPurchaseType.otp_4_weeks_eu
            },
            ro: {
                name: "Romania",
                currency: O.Currency.eur,
                defaultOption: N.ProductPurchaseOption.oneTimePurchase,
                defaultProduct: N.ProductPurchaseType.otp_4_weeks_eu
            },
            sk: {
                name: "Slovakia",
                currency: O.Currency.eur,
                defaultOption: N.ProductPurchaseOption.oneTimePurchase,
                defaultProduct: N.ProductPurchaseType.otp_4_weeks_eu
            },
            si: {
                name: "Slovenia",
                currency: O.Currency.eur,
                defaultOption: N.ProductPurchaseOption.oneTimePurchase,
                defaultProduct: N.ProductPurchaseType.otp_4_weeks_eu
            },
            es: {
                name: "Spain",
                currency: O.Currency.eur,
                defaultOption: N.ProductPurchaseOption.oneTimePurchase,
                defaultProduct: N.ProductPurchaseType.otp_4_weeks_eu
            },
            se: {
                name: "Sweden",
                currency: O.Currency.eur,
                defaultOption: N.ProductPurchaseOption.oneTimePurchase,
                defaultProduct: N.ProductPurchaseType.otp_4_weeks_eu
            },
            gb: {
                name: "United Kingdom",
                currency: O.Currency.gbp,
                defaultOption: N.ProductPurchaseOption.oneTimePurchase,
                defaultProduct: N.ProductPurchaseType.otp_4_weeks_eu
            },
            mc: {
                name: "Monaco",
                currency: O.Currency.eur,
                defaultOption: N.ProductPurchaseOption.oneTimePurchase,
                defaultProduct: N.ProductPurchaseType.otp_4_weeks_eu
            },
            mt: {
                name: "Malta",
                currency: O.Currency.eur,
                defaultOption: N.ProductPurchaseOption.oneTimePurchase,
                defaultProduct: N.ProductPurchaseType.otp_4_weeks_eu
            },
            no: {
                name: "Norway",
                currency: O.Currency.eur,
                defaultOption: N.ProductPurchaseOption.oneTimePurchase,
                defaultProduct: N.ProductPurchaseType.otp_4_weeks_eu
            }
        },
        tb = {
            ch: tf.M1_Switzerland,
            is: tf.M1_Iceland
        };
    var ty = e.i(20100),
        tw = e.i(63263),
        t_ = e.i(43572),
        tv = e.i(1431);

    function tP({
        region: e,
        store: a,
        currency: i,
        showWaitlist: n
    }) {
        let o = (0, r.useRef)(null),
            s = e.toLowerCase();
        if (n) return (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsx)(ef.SEO, {
                title: "Ultrahuman | M1 Live Waitlist",
                description: "Join the waitlist for Ultrahuman M1 Live in your region.",
                image: (0, y.getCompressedAssetUrl)("/web_v2/meta-assets/m1-og-lg.png/w_1080")
            }), (0, t.jsx)("div", {
                style: {
                    width: "100%",
                    height: "100vh",
                    backgroundColor: "#000"
                },
                children: (0, t.jsx)(eb.TypeformSnippet, {
                    typeformId: "gmPmrIhN",
                    frameTitle: "M1 Live Waitlist",
                    className: "typeform-container",
                    style: {
                        width: "100%",
                        height: "100vh"
                    }
                })
            })]
        });
        let c = function(e) {
            let t = e.toLowerCase();
            switch (e) {
                case "US":
                    return {
                        products: ty.newM1Data,
                        currency: O.Currency.usd,
                        store: j.ShopifyStore.US,
                        defaultProduct: N.ProductPurchaseType.otp_3_month_us,
                        defaultProductOption: ty.newM1Data[N.ProductPurchaseOption.x] ? N.ProductPurchaseOption.x : N.ProductPurchaseOption.oneTimePurchase,
                        outOfStock: !1
                    };
                case "IN":
                    return {
                        products: tw.newM1Data,
                        currency: O.Currency.inr,
                        store: j.ShopifyStore.IN,
                        defaultProduct: N.ProductPurchaseType.otp_12_week,
                        defaultProductOption: tw.newM1Data[N.ProductPurchaseOption.x] ? N.ProductPurchaseOption.x : N.ProductPurchaseOption.oneTimePurchase
                    };
                case "AE":
                    return {
                        products: t_.newM1Data,
                        currency: O.Currency.aed,
                        store: j.ShopifyStore.AE,
                        defaultProduct: N.ProductPurchaseType.otp_3_month_ae,
                        defaultProductOption: t_.newM1Data[N.ProductPurchaseOption.x] ? N.ProductPurchaseOption.x : N.ProductPurchaseOption.oneTimePurchase,
                        outOfStock: !1
                    };
                case "GB":
                    return {
                        products: tv.newM1Data,
                        currency: O.Currency.gbp,
                        store: j.ShopifyStore.GB,
                        defaultProduct: N.ProductPurchaseType.otp_4_weeks_eu,
                        defaultProductOption: tv.newM1Data[N.ProductPurchaseOption.x] ? N.ProductPurchaseOption.x : N.ProductPurchaseOption.oneTimePurchase
                    };
                default:
                    {
                        let r = tx[t];
                        if (r) {
                            let a = (0, tm.isMCFCountry)(e),
                                i = a ? tf.M1_Euro : tb[t] ? ? tf.NON_MCF_M1_Euro;
                            return {
                                products: i,
                                currency: r.currency,
                                store: a ? j.ShopifyStore.EU : j.ShopifyStore.ROW,
                                defaultProduct: r.defaultProduct,
                                defaultProductOption: i[N.ProductPurchaseOption.x] ? N.ProductPurchaseOption.x : N.ProductPurchaseOption.oneTimePurchase,
                                mcfDeliveryEstimate: a,
                                locale: t
                            }
                        }
                        return null
                    }
            }
        }(e);
        if (!c) return null;
        let l = (0, tu.getM1PricingSchemas)({
                country: s,
                store: a || j.ShopifyStore.ROW,
                currency: i || O.Currency.usd
            }),
            d = function(e) {
                switch (e) {
                    case "US":
                        return [{
                            title: (0, t.jsxs)(t.Fragment, {
                                children: ["Instant payment with ", (0, t.jsx)("b", {
                                    children: "PayPal, Apple Pay, or GPay"
                                })]
                            }),
                            image: ["web_v2/icons/offers/paypal.png", "web_v2/icons/offers/apple.png", "web_v2/icons/offers/google.png"]
                        }];
                    case "IN":
                        return [{
                            title: (0, t.jsxs)(t.Fragment, {
                                children: ["Easy payments with ", (0, t.jsx)("b", {
                                    children: "UPI and Wallets"
                                })]
                            }),
                            image: ["web_v2/icons/offers/upi.png"]
                        }, {
                            title: (0, t.jsxs)(t.Fragment, {
                                children: [(0, t.jsx)("b", {
                                    children: "CRED Pay"
                                }), " | Earn rewards, pay later options"]
                            }),
                            image: ["web_v2/icons/offers/cred.png"]
                        }, {
                            title: (0, t.jsx)(t.Fragment, {
                                children: "Free Cash on Delivery"
                            }),
                            image: ["web_v2/icons/offers/location.png"]
                        }, {
                            title: (0, t.jsxs)(t.Fragment, {
                                children: [(0, t.jsx)("b", {
                                    children: "No cost EMI"
                                }), " starting at", " ", (0, t.jsx)("span", {
                                    style: {
                                        whiteSpace: "nowrap"
                                    },
                                    children: "₹ 312.46/month"
                                })]
                            }),
                            image: ["web_v2/icons/offers/0-percent.png"]
                        }];
                    case "AE":
                        return [{
                            title: (0, t.jsxs)(t.Fragment, {
                                children: [(0, t.jsx)("b", {
                                    children: "Split payments"
                                }), " with Tabby, Tamara or Cashew"]
                            }),
                            image: ["web_v2/icons/offers/split-payment.png"]
                        }, {
                            title: (0, t.jsxs)(t.Fragment, {
                                children: ["Instant payment with ", (0, t.jsx)("b", {
                                    children: "Apple Pay"
                                })]
                            }),
                            image: ["web_v2/icons/offers/apple-pay.png"]
                        }, {
                            title: (0, t.jsx)(t.Fragment, {
                                children: (0, t.jsx)("b", {
                                    children: "Free Cash on Delivery"
                                })
                            }),
                            image: ["web_v2/icons/offers/location.png"]
                        }];
                    default:
                        return
                }
            }(e),
            p = function(e) {
                switch (e) {
                    case "US":
                        return tg.pricingFaqData_us;
                    case "IN":
                        return tg.pricingFaqData_in;
                    case "AE":
                        return tg.pricingFaqData_ae;
                    default:
                        if ((0, tm.isMCFCountry)(e)) return tg.pricingFaqData_gb_eu;
                        return tg.pricingFaqData_intl
                }
            }(e),
            h = "IN" === e;
        return (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsx)(ef.SEO, {
                title: "Ultrahuman | Pricing",
                description: "Ultrahuman M1 is a metabolic fitness platform that helps you improve your diet and exercise with the help of glucose biomarkers and performance coaches.",
                image: (0, y.getCompressedAssetUrl)("/web_v2/meta-assets/m1-og-lg.png/w_1080"),
                basePath: "/pricing"
            }), (0, t.jsx)(ex.JsonLd, {
                data: l
            }), (0, t.jsxs)(L, {
                currency: c.currency,
                store: c.store,
                locale: "locale" in c ? c.locale : void 0,
                defaultProduct: c.defaultProduct,
                defaultProductOption: c.defaultProductOption,
                products: c.products,
                outOfStock: "outOfStock" in c ? c.outOfStock : void 0,
                mcfDeliveryEstimate: "mcfDeliveryEstimate" in c ? c.mcfDeliveryEstimate : void 0,
                children: [(0, t.jsx)(eg, {
                    offersData: d
                }), (0, t.jsx)(eq, {
                    handleClick: () => o.current ? .scrollIntoView({
                        behavior: "smooth"
                    })
                }), h && (0, t.jsx)(td, {}), (0, t.jsx)(ta, {}), (0, t.jsx)(tn, {}), (0, t.jsx)(tl, {}), (0, t.jsx)(eF, {}), (0, t.jsx)(eS, {
                    showButton: !1
                }), (0, t.jsx)(th.ProductWizard, {
                    title: "Still unsure if M1 Live is the right wearable for you?"
                }), (0, t.jsx)("div", {
                    ref: o,
                    children: (0, t.jsx)(e3, {
                        title: "User Reviews",
                        app_store: P.app_store,
                        play_store: P.play_store,
                        items: X
                    })
                }), (0, t.jsx)(eR.AtheletesSectionNew, {}), (0, t.jsx)(tp.FAQSection, {
                    faqData: p,
                    bgColor: "white"
                }), (0, t.jsx)(eU, {})]
            })]
        })
    }
    e.s(["__N_SSP", () => !0, "default", () => tP], 11750)
}, 93866, (e, t, r) => {
    let a = "/pricing";
    (window.__NEXT_P = window.__NEXT_P || []).push([a, () => e.r(11750)]), t.hot && t.hot.dispose(function() {
        window.__NEXT_P.push([a])
    })
}]);