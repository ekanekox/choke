(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 54134, e => {
    "use strict";
    var t = e.i(91398),
        i = e.i(58678),
        r = e.i(3828),
        n = e.i(91788),
        a = e.i(3115),
        o = e.i(71225);
    let s = "https://www.ultrahuman.com";

    function l(e) {
        return e.endsWith("/") ? e : e + "/"
    }
    e.s(["SEO", 0, ({
        title: e,
        description: c,
        image: d,
        canonical: h,
        basePath: u,
        nonIndexable: g,
        robots: m
    }) => {
        let p, {
                asPath: f
            } = (0, r.useRouter)(),
            {
                regionSlug: y
            } = (0, n.useContext)(a.RegionLocaleContext);
        if (h) p = h;
        else if (u) p = `${s}/${y}${l(u)}`;
        else {
            let e = f.split("?")[0].split("#")[0];
            p = `${s}${e}`
        }
        let b = !!u,
            x = u ? `${s}/global${l(u)}` : void 0,
            w = b ? (0, o.getAllRegionSlugs)() : [];
        return (0, t.jsxs)(i.default, {
            children: [(0, t.jsx)("title", {
                children: e
            }), (0, t.jsx)("meta", {
                name: "twitter:title",
                content: e
            }, "twitter-title"), (0, t.jsx)("meta", {
                property: "og:title",
                content: e
            }, "og-title"), (0, t.jsx)("meta", {
                name: "twitter:description",
                content: c
            }, "twitter-description"), (0, t.jsx)("meta", {
                name: "description",
                content: c
            }, "description"), (0, t.jsx)("meta", {
                property: "og:description",
                content: c
            }, "og-description"), (0, t.jsx)("meta", {
                property: "og:url",
                content: p
            }, "og-url"), (0, t.jsx)("meta", {
                property: "og:site_name",
                content: "Ultrahuman"
            }, "og-site-name"), d && (0, t.jsx)("meta", {
                name: "twitter:image",
                content: d
            }, "twitter-image"), d && (0, t.jsx)("meta", {
                property: "og:image",
                content: d
            }, "og-image"), (0, t.jsx)("link", {
                rel: "canonical",
                href: p
            }, "canonical"), x && (0, t.jsx)("link", {
                rel: "alternate",
                hrefLang: "x-default",
                href: x
            }, "hreflang-x-default"), w.map(e => {
                let i, r, n = (0, o.parseRegionLocale)(e),
                    a = `${s}/${e}${l(u)}`;
                if ("GLOBAL" === n.region) return null;
                let c = (i = n.region.toUpperCase(), r = (0, o.getDefaultLanguageForRegion)(i), `${r}-${i}`),
                    d = e.includes("-") ? `${n.language}-${n.region}` : c;
                return (0, t.jsx)("link", {
                    rel: "alternate",
                    hrefLang: d,
                    href: a
                }, `hreflang-${e}`)
            }), g && (0, t.jsx)("meta", {
                name: "google",
                content: "nositelinkssearchbox"
            }, "sitelinks"), g && (0, t.jsx)("meta", {
                name: "google",
                content: "notranslate"
            }, "notranslate"), m ? (0, t.jsx)("meta", {
                name: "robots",
                content: m
            }, "robots") : g && (0, t.jsx)("meta", {
                name: "robots",
                content: "noindex,nofollow"
            }, "robots")]
        })
    }])
}, 46031, e => {
    "use strict";
    var t = e.i(91398),
        i = e.i(91788),
        r = e.i(60814);
    let n = r.default.button.withConfig({
        displayName: "CarouselButton__StyledCarouselButton",
        componentId: "sc-89dce803-0"
    })
    `
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 3rem;
  height: 3rem;
  @media (min-width: ${({theme:e})=>e.globalV2.lg.minWidth}) {
    width: 4rem;
    height: 4rem;
  }

  /* Border radius variants */
  ${({rounded:e="full"})=>{switch(e){case"sm":return r.css`
    border - radius: 8 px;
    `;case"lg":return r.css`
    border - radius: 16 px;
    `;default:return r.css`
    border - radius: 50 % ;
    `}}}

  /* Theme and fill variants */
  ${({variant:e="light",fill:t=!0})=>"light"===e?r.css`
    background: $ {
        t ? "#C2C2C2" : "transparent"
    };

    &
    : hover: not(: disabled) {
        background: rgba(0, 0, 0, 1);
        transform: scale(1.05);

        svg {
            color: #ffffff;
            path {
                fill: #ffffff;
            }
        }
    }

    svg {
        color: #000;
          path {
            fill: # 000;
    }
}
`:r.css`
background: $ {
    t ? "rgba(255, 255, 255, 0.07)" : "transparent"
};

&
: hover: not(: disabled) {
    background: rgba(255, 255, 255, 1);
    transform: scale(1.05);

    svg {
        color: #000000;
            path {
              fill: # 000000;
    }
}
}

svg {
color: #fff;
path {
    fill: rgba(255, 255, 255, 0.2);
}
}
`}

  &:active:not(:disabled) {
    transform: scale(0.95);
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  svg {
    width: 1.2rem;
    height: 1.2rem;
    @media (min-width: ${({theme:e})=>e.globalV2.lg.minWidth}) {
      width: 1.6rem;
      height: 1.6rem;
    }
  }
`, a = i.default.forwardRef(({
direction: e = "next",
variant: i = "light",
rounded: r = "full",
fill: a = !0,
...o
}, s) => {
let l = "next" === e ? "0deg" : "180deg";
return (0, t.jsx)(n, {
    ref: s,
    type: "button",
    variant: i,
    rounded: r,
    fill: a,
    direction: e,
    ...o,
    children: (0, t.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "19",
        height: "14",
        viewBox: "0 0 19 14",
        fill: "none",
        style: {
            transform: `rotate(${l})`
        },
        children: (0, t.jsx)("path", {
            d: "M1.60144 6.01647C1.12405 6.01647 0.73705 6.40347 0.73705 6.88086C0.73705 7.35825 1.12405 7.74525 1.60144 7.74525V6.88086V6.01647ZM18.365 7.49208C18.7025 7.15451 18.7025 6.60721 18.365 6.26964L12.864 0.768697C12.5265 0.431131 11.9792 0.431131 11.6416 0.768697C11.304 1.10626 11.304 1.65356 11.6416 1.99113L16.5313 6.88086L11.6416 11.7706C11.304 12.1082 11.304 12.6555 11.6416 12.993C11.9792 13.3306 12.5265 13.3306 12.864 12.993L18.365 7.49208ZM1.60144 6.88086V7.74525H17.7538V6.88086V6.01647H1.60144V6.88086Z",
            fill: "black"
        })
    })
})
}); a.displayName = "CarouselButton", e.s(["CarouselButton", 0, a])
}, 4753, e => {
"use strict";
var t = e.i(91398),
i = e.i(40290),
r = e.i(53147);
let n = [{
    title: "How do I choose the right ring size for me?",
    description: (0, t.jsx)(t.Fragment, {
        children: "If you're uncertain about your Ultrahuman Ring AIR size, we recommend opting for the free sizing kit that we'll promptly dispatch it upon placing a Ring order. The sizing kit includes high-quality plastic ring sizers ranging from sizes 5 to 14. Please note that Ultrahuman Ring AIR sizes may differ slightly from standard US ring sizes, and we don't offer half sizes. If you are already acquainted with your Ultrahuman Ring (R1) size, you'll find the Ring AIR will fit you just the same."
    })
}, {
    title: "What sizes of the Ring AIR are available?",
    description: (0, t.jsx)(t.Fragment, {
        children: "Ultrahuman Ring AIR is available in 10 sizes ranging from the lowest size of 5 to the highest size of 14."
    })
}, {
    title: "Which finger is optimal for wearing the ring?",
    description: (0, t.jsxs)(t.Fragment, {
        children: ["We suggest wearing the ring on your index, middle, or ring finger. The ultimate choice among these depends on which finger provides the most comfortable fit or aligns with your personal preference.", " ", (0, t.jsx)(r.default, {
            href: "https://www.notion.so/ultrahumanapp/Ring-sizing-kit-22aa9960c9b649dda983ca21bfa5ac34?pvs=4",
            target: "_blank",
            children: "Here's a more detailed guide"
        }), " ", "to determining the right ring size."]
    })
}, {
    title: "Why is the Brushed Rose Gold priced higher than the colors?",
    description: (0, t.jsxs)(t.Fragment, {
        children: ["Ultrahuman is celebrating the second anniversary of the Ring Air. As part of the celebration, we've been working to craft a special experience combining new materials and technology. We have developed a unique manufacturing process to bring this concept to life. The brushed texture softens reflections and the warm rose gold tone offers a refined finish—exclusive to this variant.", (0, t.jsx)("br", {}), (0, t.jsx)("br", {}), "The ring's colour and tone have been crafted to shift from a soft, muted glow under ambient light to a more defined, radiant shimmer in direct sunlight. This dynamic quality gives the ring depth and character which is unique to the Brushed Rose Gold finish."]
    })
}, {
    title: "Do the Ring AIR sizes correspond to those of other smart rings or the Ultrahuman Ring (R1)?",
    description: (0, t.jsxs)(t.Fragment, {
        children: ["The sizing of the Ring AIR is unique and does not directly align with that of other smart rings. However, we offer a complimentary ring sizing kit to help you determine the perfect fit.", (0, t.jsx)("br", {}), (0, t.jsx)("br", {}), "If you are already acquainted with your Ultrahuman Ring (R1) size, you'll find the Ring AIR will fit you just the same."]
    })
}, {
    title: "I placed my ring order, what's next?",
    description: (0, t.jsx)(t.Fragment, {
        children: "Upon placing your order, we will promptly process your request for a physical Ring AIR sizing kit if you have chosen to receive one. Once you have determined your size and submitted it to us (if you haven't done so at the time of placing the order), you can expect the delivery of your Ultrahuman Ring AIR within approximately four to six weeks."
    })
}, {
    title: "Is there any subscription fee to access ring data?",
    description: (0, t.jsx)(t.Fragment, {
        children: "Rest assured, there are no recurring subscription fees for accessing your data. Ring AIR is available for a simple, one-time purchase, paid upfront. This purchase gives you lifelong access to both the ring and your personal data."
    })
}, {
    title: "Is Cash on Delivery (COD) available?",
    description: (0, t.jsx)(t.Fragment, {
        children: "Yes, Cash on Delivery (COD) is available. Please note that if your order includes a sizing kit, the payment will be collected when the sizing kit is delivered."
    })
}, {
    title: "Guidelines on purchasing the ring from countries other than India",
    description: (0, t.jsxs)(t.Fragment, {
        children: ["Please note that it is your responsibility to verify, with your local regulatory or competent authorities, whether the Ultrahuman Ring AIR you intend to order or have ordered can be legally imported and used in your country of residence. We recommend obtaining confirmation from local authorities before placing an order on our website.", (0, t.jsx)("br", {}), (0, t.jsx)("br", {}), "The Ultrahuman Ring AIR available for purchase on our website is compliant with Indian laws and regulations. Ultrahuman disclaims any liability for non-compliance with local laws if the Ultrahuman Ring AIR and our services are used or imported into any other country.", (0, t.jsx)("br", {}), (0, t.jsx)("br", {}), "Please be aware that the ring may be subject to taxes, customs duties, and destination country fees (Import Fees). You, as the recipient of the shipment, are responsible for all Import Fees. Similarly, if you purchase the Ultrahuman Ring AIR through a crowdfunding campaign, you will be responsible for paying import taxes and value-added tax (VAT) based on the shipping destination. Please note that Ultrahuman Ring AIR purchased from crowdfunding campaigns, such as Kickstarter, are exempt from our standard return and refund policy. However, the product warranty, in accordance with applicable laws, remains valid."]
    })
}, {
    title: "What benefits do UltrahumanX subscribers enjoy?",
    description: (0, t.jsxs)(t.Fragment, {
        children: [(0, t.jsx)("b", {
            children: "UltrahumanX 1-Year Coverage Plan:"
        }), (0, t.jsxs)("ul", {
            children: [(0, t.jsx)("li", {
                children: "Accidental damage protection: Enjoy coverage for accidental damage or knocks, redeemable once during your UltrahumanX coverage period."
            }), (0, t.jsx)("li", {
                children: "Priority support: No request is too small. We're here to quickly resolve all your queries."
            })]
        }), (0, t.jsx)("br", {}), (0, t.jsx)("b", {
            children: "UltrahumanX 2-Year Coverage Plan:"
        }), (0, t.jsxs)("ul", {
            children: [(0, t.jsx)("li", {
                children: "Includes all 1-Year Coverage benefits"
            }), (0, t.jsx)("li", {
                children: "Theft and loss coverage: Your peace of mind is important. We'll cover theft or loss with a free replacement, redeemable once during your UltrahumanX coverage period."
            }), (0, t.jsx)("li", {
                children: "Weight loss insurance: Achieved your weight loss goals? We'll make resizing easy with a free Ultrahuman Ring AIR replacement, redeemable once during your UltrahumanX coverage period."
            })]
        })]
    })
}, {
    title: "In what colours is the ring available?",
    description: (0, t.jsxs)(t.Fragment, {
        children: ["The Ultrahuman Ring AIR is available in six colours —", " ", (0, t.jsx)("b", {
            children: "Brushed Rose Gold"
        }), ", ", (0, t.jsx)("b", {
            children: "Raw Titanium"
        }), ", ", (0, t.jsx)("b", {
            children: "Aster Black"
        }), ",", " ", (0, t.jsx)("b", {
            children: "Matte Grey"
        }), ", ", (0, t.jsx)("b", {
            children: "Bionic Gold"
        }), " and ", (0, t.jsx)("b", {
            children: "Space Silver"
        }), "."]
    })
}, {
    title: "What is the battery life of the ring?",
    description: (0, t.jsx)(t.Fragment, {
        children: "When fully charged, the ring is designed to operate for approximately 4-6 days under standard usage conditions. However, specific factors such as battery lifespan, environmental temperature, and frequency of use can influence this duration. You can anticipate approximately 500 charging cycles before there is any significant decline in battery performance. As is common with all battery-powered devices, a gradual reduction in battery life can be expected after 1 to 2 years. Please note that battery-related replacements are not covered beyond the warranty period."
    })
}, {
    title: "Which devices are compatible with the ring?",
    description: (0, t.jsx)(t.Fragment, {
        children: "The Ultrahuman Ring AIR is designed to seamlessly interface with iPhones operating on iOS 15 or newer, as well as Android devices functioning on Android 6 or subsequent versions."
    })
}, {
    title: "What is Ultrahuman Ring AIR made of?",
    description: (0, t.jsx)(t.Fragment, {
        children: "The Ultrahuman Ring AIR is meticulously crafted from durable titanium and further reinforced with a tungsten carbide coating, augmenting its resilience for everyday activities."
    })
}, {
    title: "How does the ring capture and measure body signals?",
    description: (0, t.jsx)(t.Fragment, {
        children: "The Ultrahuman Ring AIR employs an array of sensors, including a temperature sensor, a PPG (photoplethysmography) sensor, and a motion-sensing IMU (inertial measurement unit). By capturing signals from your finger, these sensors enable the ring to collect vital data. These signals are then processed using advanced algorithms, developed by Ultrahuman, to provide you with profound metabolic insights and a comprehensive understanding of your body's dynamics."
    })
}, {
    title: "What is Heart Rate Variability (HRV)?",
    description: (0, t.jsx)(t.Fragment, {
        children: "Heart Rate Variability, commonly abbreviated as HRV, refers to the extent of fluctuation or variation in your heart rate over a specific timeframe. HRV serves as a valuable metric for assessing physical well-being, including heart conditions, as well as mental health factors such as anxiety and stress levels. Generally, a higher HRV is regarded as an indication of better overall health."
    })
}, {
    title: "Are there distinct features on the app for Ultrahuman Ring AIR?",
    description: (0, t.jsx)(t.Fragment, {
        children: "The Ultrahuman Ring AIR operates seamlessly with the existing functionalities within the ring section of the app. Should there be the introduction of new features, rest assured they will be made available for both the Ultrahuman Ring AIR and the Ultrahuman Ring (R1)."
    })
}, {
    title: "What specific parameters can the ring monitor?",
    description: (0, t.jsx)(t.Fragment, {
        children: "The Ring AIR is capable of tracking a comprehensive range of metrics associated with Sleep, Movement, and Recovery. This includes Heart Rate, HRV, Body Temperature, SPO2, Sleep Stages, Movement Frequency, and Recovery patterns, among others. Additionally, it offers real-time insights designed to guide you towards making healthier daily decisions. These metrics are also seamlessly integrated with the broader Ultrahuman ecosystem of products, such as the Ultrahuman M1."
    })
}, {
    title: "How do Ultrahuman Ring AIR and M1 sync to promote metabolic health?",
    description: (0, t.jsx)(t.Fragment, {
        children: "The Ultrahuman Ring AIR and Ultrahuman M1 work in synergy to provide valuable insights into your metabolic health. By combining glucose data from the M1 with data on movement, sleep, and body metrics collected by the ring, deep correlations can be established. This helps us identify how certain foods impact glucose levels, allowing for proactive recommendations on activities or interventions to counter or assist these effects. The integration of M1 and Ring data empowers us to offer personalized and precise insights tailored to your unique metabolic health needs."
    })
}, {
    title: "How do Ultrahuman Ring AIR and M1 sync to improve sleep health?",
    description: (0, t.jsxs)(t.Fragment, {
        children: ["By leveraging the combined data on Sleep and Glucose, we can analyze in real-time how glucose spikes impact your sleep. For example, if higher-than-usual glucose spikes occur after a meal, it may be correlated with poor sleep quality. Real-time nudges will help you take appropriate actions to assist the situation.", " "]
    })
}, {
    title: "What distinguishes the Ring AIR from the Ring (R1)?",
    description: (0, t.jsxs)(t.Fragment, {
        children: ["The Ultrahuman Ring AIR exemplifies an evolution in design and user experience. With a svelte profile at only 2.4 mm thick, the AIR offers unmatched comfort and wearability. The Ring AIR remains impressively lightweight at just 2.4 grams*. It achieves this without compromising on the suite of features, accuracy, or battery life that is appreciated in the R1 model.", (0, t.jsx)("br", {}), (0, t.jsx)("br", {}), (0, t.jsx)("i", {
            children: "**The weight specification is provided with reference to well-known and globally recognized smart rings currently available on the market.*"
        })]
    })
}, {
    title: "How does the Ultrahuman Ring AIR distinguish itself from other consumer wearable devices?",
    description: (0, t.jsx)(t.Fragment, {
        children: "Unlike many consumer wearables, the Ultrahuman Ring AIR focuses specifically on providing insights into factors that influence our body's metabolism. It goes beyond traditional tracking by measuring key aspects such as sleep quality, sleep zones, stress levels (through HRV), and activity distribution. The distinctive feature lies in its capability to not only collect data but also correlate it with real-time nudges and insights, enabling users to make informed decisions for enhancing their metabolic health."
    })
}, {
    title: "How is the Ultrahuman Ring AIR different from the M1 device?",
    description: (0, t.jsxs)(t.Fragment, {
        children: ["The Ultrahuman M1 is a platform that monitors your metabolic fitness with the help of a semi-invasive continue glucose monitor, providing valuable insights into how your body processes glucose. On the other hand, the Ultrahuman Ring AIR is a non-invasive smart ring that focuses on measuring metabolic parameters such as sleep, stress, movement, and recovery. While each device can provide insights independently, they complement each other seamlessly.", " "]
    })
}, {
    title: "How accurate is the ring data?",
    description: (0, t.jsxs)(t.Fragment, {
        children: ["The metrics derived from the ring are meticulously benchmarked against industry-leading fitness wearable products available worldwide.", " "]
    })
}, {
    title: "Is the ring compatible with other CGMs?",
    description: (0, t.jsxs)(t.Fragment, {
        children: ["At present, the ring is exclusively compatible with the CGMs included in the Ultrahuman M1 plan.", " "]
    })
}, {
    title: "Can I wear the ring on a daily basis?",
    description: (0, t.jsx)(t.Fragment, {
        children: "Unquestionably! The Ultrahuman Ring AIR has been crafted with hypoallergenic materials, ensuring its suitability for continuous, round-the-clock wear."
    })
}, {
    title: "Is it advisable to wear the ring while working out?",
    description: (0, t.jsx)(t.Fragment, {
        children: "The Ultrahuman Ring AIR is fortified with a robust Tungsten carbide coating, affording it a high degree of resilience against daily wear and tear. Despite this, we advise against wearing your ring during intense weight training sessions or while handling heavy metal objects. Even repeated contact with relatively less hard substances can potentially leave a mark on the ring."
    })
}, {
    title: "Is the ring suitable for wearing underwater?",
    description: (0, t.jsx)(t.Fragment, {
        children: "Indeed! The Ultrahuman Ring AIR boasts a water resistance rating that extends up to 100 meters, permitting wear during activities like swimming, showering, scuba diving and more. To maintain its optimal performance, we advise against keeping the ring submerged for periods exceeding 30 minutes continuously."
    })
}, {
    title: "Guidelines on purchasing the ring from countries other than India",
    description: (0, t.jsx)(t.Fragment, {
        children: "Please note that it is your responsibility to verify, with your local regulatory or competent authorities, whether the Ultrahuman Ring AIR you intend to order or have ordered can be legally imported and used in your country of residence. We recommend obtaining confirmation from local authorities before placing an order on our website. The Ultrahuman Ring AIR available for purchase on our website is compliant with Indian laws and regulations. Ultrahuman disclaims any liability for non-compliance with local laws if the Ultrahuman Ring AIR and our services are used or imported into any other country. Please be aware that the ring may be subject to taxes, customs duties, and destination country fees (Import Fees). You, as the recipient of the shipment, are responsible for all Import Fees. Similarly, if you purchase the Ultrahuman Ring AIR through a crowdfunding campaign, you will be responsible for paying import taxes and value-added tax (VAT) based on the shipping destination. Please note that Ultrahuman Ring AIR purchased from crowdfunding campaigns, such as Kickstarter, are exempt from our standard return and refund policy. However, the product warranty, in accordance with applicable laws, remains valid."
    })
}, {
    title: "What is the calibration duration for the ring?",
    description: (0, t.jsx)(t.Fragment, {
        children: "The Ultrahuman Ring AIR typically requires a one-time calibration period of up to 7 days. Subsequent calibrations will only be necessary if the ring undergoes a hard reset."
    })
}, {
    title: "What is the required duration to fully charge the ring?",
    description: (0, t.jsx)(t.Fragment, {
        children: "The Ultrahuman Ring AIR requires approximately 180 mins to reach a full charge."
    })
}, {
    title: "Is it possible to share the ring with other family members?",
    description: (0, t.jsx)(t.Fragment, {
        children: "Indeed, the ring can be shared with other family members, given that it is reset from the app. Please note that the ring should fit the new user properly. After resetting, the ring will require up to 7 days for recalibration before accurately tracking the new user's data."
    })
}, {
    title: "Does long-term wear of the ring have adverse effects on the skin?",
    description: (0, t.jsx)(t.Fragment, {
        children: "The design and construction of the ring prioritize skin health. Composed of hypoallergenic materials, it is perfectly suited for prolonged skin contact and ensures a comfortable fit. There is no need for concern about allergic reactions resulting from extended wear of the ring."
    })
}, {
    title: "What should I do if my ring gets stuck?",
    description: (0, t.jsxs)(t.Fragment, {
        children: ["Finger size can fluctuate during the day due to heat, activity, hydration, or food intake. This can make the ring feel tighter and harder to remove.", (0, t.jsx)("br", {}), (0, t.jsx)("br", {}), "If your ring feels stuck, try the following:", (0, t.jsxs)("ul", {
            children: [(0, t.jsx)("li", {
                children: "Run your hand under cold water to reduce swelling."
            }), (0, t.jsx)("li", {
                children: "Apply soap or a lubricant to your finger."
            }), (0, t.jsx)("li", {
                children: "Gently twist the ring while pulling it off. Do not force it."
            }), (0, t.jsx)("li", {
                children: "Raise your hand above heart level for a few minutes to reduce blood flow and swelling."
            }), (0, t.jsx)("li", {
                children: "If the tightness followed exercise, heat exposure, or a heavy meal, wait and try again later once swelling subsides."
            })]
        }), (0, t.jsx)("br", {}), (0, t.jsx)("b", {
            children: "If the ring still cannot be removed"
        }), " and if none of the above methods work, seek medical assistance.", (0, t.jsxs)("ul", {
            children: [(0, t.jsx)("li", {
                children: "Do not attempt to cut the ring yourself."
            }), (0, t.jsx)("li", {
                children: "The ring contains an embedded battery and must be cut safely by a medical professional. The battery is located in the protruding section on the inside of the ring. The ring must be cut away from this area."
            }), (0, t.jsx)("li", {
                children: "Once cut, a flat-head tool may be used to gently widen the gap and remove the ring. If removal is still difficult, a second cut may be made approximately one centimeter to the left or right of the first cut, again avoiding the battery."
            }), (0, t.jsx)("li", {
                children: "After removal, handle the ring carefully as edges may be sharp, and dispose of it safely. Your safety comes first. The ring can always be replaced."
            })]
        })]
    })
}, {
    title: "Is the ring EMF-safe?",
    description: (0, t.jsx)(t.Fragment, {
        children: "The Ultrahuman Ring AIR operates as a low-power device that communicates with your smartphone using Bluetooth Low Energy (BLE) technology. It establishes a connection with the smartphone only when you open the Ultrahuman App or at regular time intervals, unlike Bluetooth headsets, earbuds, or smartwatches that maintain constant connectivity and data transmission/reception. It's important to note that Bluetooth activity for the Ultrahuman Ring AIR remains below 1% throughout the day, resulting in significantly lower EMF radiation compared to other Bluetooth wearables. Consequently, the Ultrahuman Ring AIR can be regarded as one of the safest wearable devices for fitness tracking in terms of EMF exposure."
    })
}, {
    title: "Is the ring considered a medical device?",
    description: (0, t.jsxs)(t.Fragment, {
        children: ["The Ultrahuman Ring AIR is not classified as a medical device. It is designed solely for the purpose of promoting and facilitating a healthy lifestyle. The Ring AIR is not intended for managing, treating, or preventing diseases, and it should not be relied upon for making any diagnostic, treatment, or dosage decisions. It is not meant to substitute professional medical opinions or guidance regarding the treatment, diagnosis, prevention, or alleviation of any disease or disability.", (0, t.jsx)("br", {}), (0, t.jsx)("br", {}), "It is always important to consult with a doctor or qualified healthcare professional before making any changes to medications, routines, or nutrition, especially if you have any existing health conditions or concerns. Please be aware that the accuracy of biomarker data may be influenced if you have been diagnosed with a medical condition. Therefore, it is crucial not to disregard or delay seeking professional medical advice or treatment based on information obtained from or accessed through the Ultrahuman app."]
    })
}, {
    title: "Can I wear the ring alongside medical devices like a pacemaker or ICD?",
    description: (0, t.jsx)(t.Fragment, {
        children: "In general, wearing and using the Ultrahuman Ring AIR should not interfere with the functionality of medical devices such as pacemakers or ICDs. However, we strongly recommend consulting with your physician before making a decision. The Ultrahuman Ring AIR operates using a very low-power electromagnetic field, minimizing the likelihood of interference with these medical devices. If you suspect any interference or have concerns, discontinue the use of the ring and seek guidance from both your physician and the manufacturer of your medical device for specific guidelines and recommendations."
    })
}, {
    title: "Is the ring safe from Electrostatic Discharge (ESD)?",
    description: (0, t.jsx)(t.Fragment, {
        children: "Absolutely! The Ultrahuman Ring AIR is designed to be ESD-safe, ensuring that you will not experience any electrostatic shocks from the ring."
    })
}, {
    title: "Is it safe to wear the ring on tattooed fingers?",
    description: (0, t.jsx)(t.Fragment, {
        children: "Yes, you can wear the ring on tattooed fingers. However, please note that if the tattoo is dark and heavy, it may affect the accuracy of the readings obtained from the ring."
    })
}, {
    title: "What safety considerations have been incorporated into the design and construction of the ring?",
    description: (0, t.jsxs)(t.Fragment, {
        children: ["The Ultrahuman team prioritizes the safety and comfort of users in the design and engineering of their products. The Ultrahuman Rings have been meticulously crafted with user comfort in mind. The inner side of the rings features a transparent hypoallergenic plastic-based material that comes into contact with your skin, ensuring a comfortable experience. Additionally, the outer shell of the ring is constructed from Titanium, chosen for its durability and longevity. Titanium provides the necessary strength and resistance to deformation.", (0, t.jsx)("br", {}), (0, t.jsx)("br", {}), "In rare and exceptional circumstances, should the need arise, any Ultrahuman Ring can be safely removed using either manual or power ring cutters, ensuring the wearer's well-being."]
    })
}, {
    title: "How should I dispose of the ring?",
    description: (0, t.jsxs)(t.Fragment, {
        children: ["The Ultrahuman Ring contains an internal battery, which classifies it as electronic waste (e-waste). To dispose of the battery responsibly, we recommend adhering to the regulations and guidelines outlined by your local laws and regulations regarding e-waste disposal.", (0, t.jsx)("br", {}), (0, t.jsx)("br", {}), "Additionally, the charger accompanying the ring is an electronic device and should also be disposed of in accordance with the applicable local electronics recycling laws and regulations."]
    })
}, {
    title: "What is the warranty policy for Ring AIR?",
    description: (0, t.jsx)(t.Fragment, {
        children: "The Ultrahuman Ring AIR is covered by a limited warranty that protects against defects in materials and workmanship. The warranty period lasts for one year from the date of delivery."
    })
}, {
    title: "What is the return policy for Ring AIR?",
    description: (0, t.jsx)(t.Fragment, {
        children: "Our return policy allows you to return the Ring AIR product within 30 days of delivery if you're not completely satisfied. The return must contain all original accessories, including the charger in their original packaging."
    })
}, {
    title: "Will I have to pay for return shipping?",
    description: (0, t.jsx)(t.Fragment, {
        children: "Return shipping is free. We will provide you with a shipping label once your return request is processed."
    })
}, {
    title: "What is the ring cancellation policy?",
    description: (0, t.jsx)(t.Fragment, {
        children: "You have the option to cancel your order within 7 days before the sizing kit has been shipped to you. In the rare event that none of the ring sizes provided in the sizing kit fit you, you can still cancel your order within 3 days of receiving the sizing kit."
    })
}, {
    title: "Terms of Sale",
    description: (0, t.jsxs)(t.Fragment, {
        children: ["You can find the Terms of Sale for Ring AIR", " ", (0, t.jsx)(r.default, {
            href: "/termsOfSale/UltrahumanRing",
            children: "here"
        }), "."]
    })
}, {
    title: "",
    description: (0, t.jsx)(t.Fragment, {
        children: "We do our best to ensure that our photos are as true to colour as possible. However, due to inconsistencies of various monitors, lighting sources, digital photography, we cannot guarantee that the colour you see on your screen accurately portrays the true colour of the product. Screen images are intended as a guide only and should not be regarded as absolutely correct."
    })
}],
a = [{
    title: "How do I choose the right ring size for me?",
    description: (0, t.jsx)(t.Fragment, {
        children: "If you're uncertain about your Ultrahuman Ring AIR size, we recommend opting for the free sizing kit that we'll promptly dispatch it upon placing a Ring order. The sizing kit includes high-quality plastic ring sizers ranging from sizes 5 to 14. Please note that Ultrahuman Ring AIR sizes may differ slightly from standard US ring sizes, and we don't offer half sizes. If you are already acquainted with your Ultrahuman Ring (R1) size, you'll find the Ring AIR will fit you just the same."
    })
}, {
    title: "Why is the Brushed Rose Gold priced higher than the colors?",
    description: (0, t.jsxs)(t.Fragment, {
        children: ["Ultrahuman is celebrating the second anniversary of the Ring Air. As part of the celebration, we've been working to craft a special experience combining new materials and technology. We have developed a unique manufacturing process to bring this concept to life. The brushed texture softens reflections and the warm rose gold tone offers a refined finish—exclusive to this variant.", (0, t.jsx)("br", {}), (0, t.jsx)("br", {}), "The ring's colour and tone have been crafted to shift from a soft, muted glow under ambient light to a more defined, radiant shimmer in direct sunlight. This dynamic quality gives the ring depth and character which is unique to the Brushed Rose Gold finish."]
    })
}, {
    title: "I placed my ring order, what's next?",
    description: (0, t.jsx)(t.Fragment, {
        children: "Upon placing your order, we will promptly process your request for a physical Ring AIR sizing kit if you have chosen to receive one. Once you have determined your size and submitted it to us (if you haven't done so at the time of placing the order), you can expect the delivery of your Ultrahuman Ring AIR within approximately four to six weeks."
    })
}, {
    title: "Is there any subscription fee to access ring data?",
    description: (0, t.jsx)(t.Fragment, {
        children: "Rest assured, there are no recurring subscription fees for accessing your data. Ring AIR is available for a simple, one-time purchase, paid upfront. This purchase gives you lifelong access to both the ring and your personal data."
    })
}, {
    title: "In what colours is the ring available?",
    description: (0, t.jsxs)(t.Fragment, {
        children: ["The Ultrahuman Ring AIR is available in six colours —", " ", (0, t.jsx)("b", {
            children: "Brushed Rose Gold"
        }), ", ", (0, t.jsx)("b", {
            children: "Raw Titanium"
        }), ", ", (0, t.jsx)("b", {
            children: "Aster Black"
        }), ",", " ", (0, t.jsx)("b", {
            children: "Matte Grey"
        }), ", ", (0, t.jsx)("b", {
            children: "Bionic Gold"
        }), " and ", (0, t.jsx)("b", {
            children: "Space Silver"
        }), "."]
    })
}, {
    title: "Is Cash on Delivery (COD) available?",
    description: (0, t.jsx)(t.Fragment, {
        children: "Yes, Cash on Delivery (COD) is available. Please note that if your order includes a sizing kit, the payment will be collected when the sizing kit is delivered."
    })
}, {
    title: "Do I need to return my old ring during trade-in?",
    description: (0, t.jsx)(t.Fragment, {
        children: "No, you don't need to send your old ring back to us. The trade-in credit is processed digitally based on your serial number verification."
    })
}, {
    title: "What should I do with my old ring after opting for trade-in?",
    description: (0, t.jsx)(t.Fragment, {
        children: "We encourage you to recycle it responsibly. Dispose of it as e-waste through authorized recycling channels near you."
    })
}, {
    title: "",
    description: (0, t.jsx)(t.Fragment, {
        children: (0, t.jsxs)(r.default, {
            href: "/ring/faq",
            children: ["See all FAQs", " ", (0, t.jsx)(i.CaretUp, {
                style: {
                    transform: "rotate(90deg)"
                },
                width: 14,
                height: 14
            })]
        })
    })
}],
o = [{
    title: "How do I choose the right ring size for me?",
    description: (0, t.jsx)(t.Fragment, {
        children: "If you're uncertain about your Ultrahuman Ring AIR size, we recommend opting for the free sizing kit that we'll promptly dispatch it upon placing a Ring order. The sizing kit includes high-quality plastic ring sizers ranging from sizes 5 to 14. Please note that Ultrahuman Ring AIR sizes may differ slightly from standard US ring sizes, and we don't offer half sizes. If you are already acquainted with your Ultrahuman Ring (R1) size, you'll find the Ring AIR will fit you just the same."
    })
}, {
    title: "I placed my ring order, what's next?",
    description: (0, t.jsx)(t.Fragment, {
        children: "Upon placing your order, we will promptly process your request for a physical Ring AIR sizing kit if you have chosen to receive one. Once you have determined your size and submitted it to us (if you haven't done so at the time of placing the order), you can expect the delivery of your Ultrahuman Ring AIR within approximately four to six weeks."
    })
}, {
    title: "Is there any subscription fee to access ring data?",
    description: (0, t.jsx)(t.Fragment, {
        children: "Rest assured, there are no recurring subscription fees for accessing your data. Ring AIR is available for a simple, one-time purchase, paid upfront. This purchase gives you lifelong access to both the ring and your personal data."
    })
}, {
    title: "Is there any subscription fee to access ring data?",
    description: (0, t.jsx)(t.Fragment, {
        children: "Rest assured, there are no recurring subscription fees for accessing your data. Ring AIR is available for a simple, one-time purchase, paid upfront. This purchase gives you lifelong access to both the ring and your personal data."
    })
}, {
    title: "In what colours is the ring available?",
    description: (0, t.jsxs)(t.Fragment, {
        children: ["The Ultrahuman Ring AIR is available in six colours —", " ", (0, t.jsx)("b", {
            children: "Brushed Rose Gold"
        }), ", ", (0, t.jsx)("b", {
            children: "Raw Titanium"
        }), ", ", (0, t.jsx)("b", {
            children: "Aster Black"
        }), ",", " ", (0, t.jsx)("b", {
            children: "Matte Grey"
        }), ", ", (0, t.jsx)("b", {
            children: "Bionic Gold"
        }), " and ", (0, t.jsx)("b", {
            children: "Space Silver"
        }), "."]
    })
}, {
    title: "Why is the Brushed Rose Gold priced higher than the colors?",
    description: (0, t.jsxs)(t.Fragment, {
        children: ["Ultrahuman is celebrating the second anniversary of the Ring Air. As part of the celebration, we've been working to craft a special experience combining new materials and technology. We have developed a unique manufacturing process to bring this concept to life. The brushed texture softens reflections and the warm rose gold tone offers a refined finish—exclusive to this variant.", (0, t.jsx)("br", {}), (0, t.jsx)("br", {}), "The ring's colour and tone have been crafted to shift from a soft, muted glow under ambient light to a more defined, radiant shimmer in direct sunlight. This dynamic quality gives the ring depth and character which is unique to the Brushed Rose Gold finish."]
    })
}, {
    title: "Do I need to return my old ring during trade-in?",
    description: (0, t.jsx)(t.Fragment, {
        children: "No, you don't need to send your old ring back to us. The trade-in credit is processed digitally based on your serial number verification."
    })
}, {
    title: "What should I do with my old ring after opting for trade-in?",
    description: (0, t.jsx)(t.Fragment, {
        children: "We encourage you to recycle it responsibly. Dispose of it as e-waste through authorized recycling channels near you."
    })
}, {
    title: "",
    description: (0, t.jsx)(t.Fragment, {
        children: (0, t.jsxs)(r.default, {
            href: "/ring/faq",
            children: ["See all FAQs", " ", (0, t.jsx)(i.CaretUp, {
                style: {
                    transform: "rotate(90deg)"
                },
                width: 14,
                height: 14
            })]
        })
    })
}];
e.s(["getRingBuyPageFaqData", 0, e => [{
title: e("ring.faq.data.titleA"),
description: e("ring.faq.data.contentA")
}, {
title: "Why is the Brushed Rose Gold priced higher than the colors?",
description: (0, t.jsxs)(t.Fragment, {
    children: ["Ultrahuman is celebrating the second anniversary of the Ring Air. As part of the celebration, we've been working to craft a special experience combining new materials and technology. We have developed a unique manufacturing process to bring this concept to life. The brushed texture softens reflections and the warm rose gold tone offers a refined finish—exclusive to this variant.", (0, t.jsx)("br", {}), (0, t.jsx)("br", {}), "The ring's colour and tone have been crafted to shift from a soft, muted glow under ambient light to a more defined, radiant shimmer in direct sunlight. This dynamic quality gives the ring depth and character which is unique to the Brushed Rose Gold finish."]
})
}, {
title: e("ring.faq.data.titleB"),
description: e("ring.faq.data.contentB")
}, {
title: e("ring.faq.data.titleC"),
description: e("ring.faq.data.contentC")
}, {
title: e("ring.faq.data.titleE"),
description: (0, t.jsxs)(t.Fragment, {
    children: [e("ring.faq.data.contentE"), (0, t.jsx)("b", {
        children: e("ring.faq.data.contentEcolorA")
    }), ",", " ", (0, t.jsx)("b", {
        children: e("ring.faq.data.contentEcolorB")
    }), ",", " ", (0, t.jsx)("b", {
        children: e("ring.faq.data.contentEcolorC")
    }), ",", " ", (0, t.jsx)("b", {
        children: e("ring.faq.data.contentEcolorD")
    }), ",", " ", (0, t.jsx)("b", {
        children: e("ring.faq.data.contentEcolorE")
    }), " ", e("ring.AND"), " ", (0, t.jsx)("b", {
        children: e("ring.faq.data.contentEcolorF")
    }), "."]
})
}, {
title: "Do I need to return my old ring during trade-in?",
description: (0, t.jsx)(t.Fragment, {
    children: "No, you don't need to send your old ring back to us. The trade-in credit is processed digitally based on your serial number verification."
})
}, {
title: "What should I do with my old ring after opting for trade-in?",
description: (0, t.jsx)(t.Fragment, {
    children: "We encourage you to recycle it responsibly. Dispose of it as e-waste through authorized recycling channels near you."
})
}, {
title: "",
description: (0, t.jsx)(t.Fragment, {
    children: (0, t.jsxs)(r.default, {
        href: "/ring/faq",
        children: [e("ring.faq.seeAll"), " ", (0, t.jsx)(i.CaretUp, {
            style: {
                transform: "rotate(90deg)"
            },
            width: 14,
            height: 14
        })]
    })
})
}], "getRingProBuyPageFaqData", 0, e => [{
title: "How do I choose the right ring size for me?",
description: (0, t.jsx)(t.Fragment, {
    children: "If you're uncertain about your Ultrahuman Ring PRO size, we recommend opting for the free sizing kit that we'll promptly dispatch upon placing a Ring order. The sizing kit includes high-quality plastic ring sizers ranging from sizes 5 to 14. Please note that Ultrahuman Ring PRO sizes may differ slightly from standard US ring sizes, and we don't offer half sizes. If you are already acquainted with your Ultrahuman Ring (R1) or Ultrahuman Ring AIR size, you'll find the Ring PRO will fit you just the same."
})
}, {
title: "I placed my ring order, what's next?",
description: (0, t.jsx)(t.Fragment, {
    children: "Upon placing your order, we will promptly process your request for a physical Ring PRO sizing kit if you have chosen to receive one. Once you have determined your size and submitted it to us (if you haven't done so at the time of placing the order), you can expect the delivery of your Ultrahuman Ring PRO within approximately four to six weeks."
})
}, {
title: "Is there any subscription fee to access ring data?",
description: (0, t.jsx)(t.Fragment, {
    children: "Rest assured, there are no recurring subscription fees for accessing your data. Ring PRO is available for a simple, one-time purchase, paid upfront. This purchase gives you lifelong access to both the ring and your personal data."
})
}, {
title: "In what colours is the ring available?",
description: (0, t.jsxs)(t.Fragment, {
    children: ["The Ultrahuman Ring PRO is available in four colours —", " ", (0, t.jsx)("b", {
        children: "Raw Titanium"
    }), ", ", (0, t.jsx)("b", {
        children: "Aster Black"
    }), ", ", (0, t.jsx)("b", {
        children: "Bionic Gold"
    }), " and", " ", (0, t.jsx)("b", {
        children: "Space Silver"
    }), "."]
})
}, {
title: "Do I need to return my old ring during trade-in?",
description: (0, t.jsx)(t.Fragment, {
    children: "No, you don't need to send your old ring back to us. The trade-in credit is processed digitally based on your serial number verification."
})
}, {
title: "What should I do with my old ring after opting for trade-in?",
description: (0, t.jsx)(t.Fragment, {
    children: "We encourage you to recycle it responsibly. Dispose of it as e-waste through authorized recycling channels near you."
})
}], "ringBuyPageFaqData_AE", 0, a, "ringBuyPageFaqData_IN", 0, o, "ringFaqData", 0, n])
}, 71134, e => {
"use strict";
var t = e.i(91398);
e.s(["ProCharger", 0, e => (0, t.jsx)("svg", {
className: e.className,
style: e.style,
width: "20",
height: "18",
viewBox: "0 0 20 18",
fill: "none",
xmlns: "http://www.w3.org/2000/svg",
"aria-hidden": "true",
children: (0, t.jsx)("path", {
    d: "M19.4861 6.36339C19.4887 6.40352 19.4902 6.44365 19.4905 6.48378C19.4903 6.69836 19.428 6.90241 19.3019 7.05527C19.025 7.39095 18.5526 7.30837 18.1883 7.30819L18.1449 7.3073C18.1627 8.17809 18.1457 9.10898 18.1455 9.98476C18.8433 9.99403 18.0473 9.98155 18.6265 9.98404C18.734 9.98226 18.8304 9.98333 18.9362 10.0087C19.67 10.1774 19.6711 11.4443 18.9404 11.6118C18.7082 11.6651 18.3846 11.6361 18.1433 11.6352L18.1452 11.6377C18.1455 12.0383 18.1894 14.4193 18.1031 14.6125C17.9741 14.7211 17.4799 14.6801 17.2875 14.6769C17.2883 14.719 17.2889 14.7611 17.2892 14.803C17.294 15.3745 17.1971 15.8125 16.7717 16.2386C16.5053 16.503 16.1627 16.6771 15.7921 16.7368C15.5629 16.7759 15.1277 16.7632 14.8837 16.7632L13.3918 16.7618L8.08554 16.7598C8.08486 17.0053 8.06836 17.0812 7.80167 17.0827C6.71722 17.088 5.63133 17.0919 4.54686 17.0816C4.27396 17.0789 4.27842 17.001 4.2786 16.7602L2.52044 16.7623C1.91649 16.7621 1.4506 16.6728 1.00111 16.2206C0.408939 15.6251 0.493307 14.9826 0.496161 14.2202L0.49295 2.51192C0.495625 1.90476 0.560017 1.47579 1.02752 1.01821C1.2981 0.750124 1.64662 0.574594 2.02298 0.516785C2.32763 0.471551 3.0839 0.493669 3.42868 0.493811L6.14841 0.494668L15.4497 0.495364C16.2564 0.500269 16.9294 0.944294 17.198 1.71658C17.3037 2.0207 17.2904 2.29752 17.2877 2.61288C17.4809 2.61056 17.9413 2.58095 18.0841 2.66211C18.177 2.77804 18.1461 3.6037 18.1459 3.80383C18.143 4.42222 18.1441 5.04044 18.1493 5.65884C18.6731 5.67364 17.7694 5.65937 18.2049 5.66312C18.755 5.66776 19.3249 5.53398 19.4861 6.36339ZM4.27895 16.2893L4.2786 13.4561C4.2786 13.0532 4.25791 12.5547 4.29643 12.1628C4.32301 11.8924 4.64532 11.6015 4.90395 11.5749C5.00259 11.5649 5.11674 11.5472 5.2193 11.5547C5.89246 11.5619 6.56525 11.5617 7.23848 11.5546C7.47642 11.5521 7.70259 11.6204 7.86886 11.7937C7.97644 11.9061 8.04762 12.0483 8.07315 12.2017C8.10176 12.3804 8.08599 13.2605 8.08419 13.5037C8.07714 14.46 8.10001 15.4399 8.08392 16.3938L13.4731 16.3944L14.9243 16.3944C15.1363 16.3944 15.5696 16.4043 15.7617 16.3712C16.0413 16.3228 16.2995 16.1899 16.5013 15.9905C16.8957 15.6006 16.9263 15.2364 16.9254 14.7222L16.9226 2.16714C16.872 1.73942 16.7154 1.44297 16.3802 1.16825C15.9198 0.790952 15.389 0.869755 14.8352 0.86963L13.1936 0.869559L8.04295 0.869523L3.98429 0.87029L2.80547 0.868292C2.1291 0.865956 1.61523 0.829247 1.15059 1.43334C0.992554 1.63596 0.896414 1.88015 0.87394 2.1361C0.850931 2.38671 0.862882 2.7693 0.863417 3.02883L0.8652 4.54904L0.863417 9.68153L0.866093 13.3903L0.863595 14.494C0.862168 15.1451 0.839515 15.6741 1.43187 16.1102C1.60988 16.2399 1.81447 16.328 2.031 16.3681C2.36205 16.4313 3.08586 16.3783 3.44777 16.3938C3.54444 16.3981 4.17211 16.3968 4.25577 16.3856L4.27824 16.3663L4.27895 16.2893ZM4.6512 16.539L4.65477 16.7218C5.66076 16.7225 6.71686 16.7384 7.71746 16.7197L7.71367 13.6274L7.71565 12.7398C7.716 12.5889 7.72353 12.3406 7.703 12.2013C7.6102 12.0171 7.48329 11.9154 7.2734 11.9206C6.54528 11.9384 5.81576 11.9177 5.08749 11.9291C4.77071 11.9341 4.64033 12.1483 4.65031 12.4416C4.64817 12.8507 4.6512 13.2597 4.65085 13.6689L4.6512 16.539ZM19.1752 10.7016C19.1295 10.5723 19.0741 10.4506 18.9585 10.3959C18.7651 10.3046 18.5459 10.3604 18.1432 10.3567L18.1466 10.974L18.1454 11.2688L18.1894 11.2724C18.5552 11.2729 19.1983 11.4103 19.1784 10.7674C19.1778 10.7453 19.1767 10.7234 19.1752 10.7016ZM19.1759 6.39121C19.1371 6.25761 19.086 6.14061 18.9724 6.07836C18.7771 5.97134 18.5598 6.03519 18.1446 6.02877L18.1472 6.65751L18.1462 6.94272L18.1704 6.94736C18.5338 6.94771 19.1857 7.08238 19.1779 6.45293C19.1777 6.43224 19.1771 6.41172 19.1759 6.39121ZM17.29 14.3051L17.7842 14.3044L17.783 6.74598L17.7831 4.27721C17.7831 3.89105 17.7682 3.36326 17.787 2.98584L17.2869 2.9812L17.2904 10.1112L17.2901 12.9037C17.2902 13.3496 17.3047 13.8662 17.29 14.3051Z",
    fill: "none",
    stroke: e.fill ? ? "currentColor",
    strokeWidth: "1.5",
    strokeLinejoin: "round",
    strokeLinecap: "round"
})
})])
}, 11829, (e, t, i) => {
"use strict";

function r(e, t) {
var i = e.length;
for (e.push(t); 0 < i;) {
    var r = i - 1 >>> 1,
        n = e[r];
    if (0 < o(n, t)) e[r] = t, e[i] = n, i = r;
    else break
}
}

function n(e) {
return 0 === e.length ? null : e[0]
}

function a(e) {
if (0 === e.length) return null;
var t = e[0],
    i = e.pop();
if (i !== t) {
    e[0] = i;
    for (var r = 0, n = e.length, a = n >>> 1; r < a;) {
        var s = 2 * (r + 1) - 1,
            l = e[s],
            c = s + 1,
            d = e[c];
        if (0 > o(l, i)) c < n && 0 > o(d, l) ? (e[r] = d, e[c] = i, r = c) : (e[r] = l, e[s] = i, r = s);
        else if (c < n && 0 > o(d, i)) e[r] = d, e[c] = i, r = c;
        else break
    }
}
return t
}

function o(e, t) {
var i = e.sortIndex - t.sortIndex;
return 0 !== i ? i : e.id - t.id
}
if (i.unstable_now = void 0, "object" == typeof performance && "function" == typeof performance.now) {
var s, l = performance;
i.unstable_now = function() {
    return l.now()
}
} else {
var c = Date,
    d = c.now();
i.unstable_now = function() {
    return c.now() - d
}
}
var h = [],
u = [],
g = 1,
m = null,
p = 3,
f = !1,
y = !1,
b = !1,
x = !1,
w = "function" == typeof setTimeout ? setTimeout : null,
v = "function" == typeof clearTimeout ? clearTimeout : null,
j = "u" > typeof setImmediate ? setImmediate : null;

function R(e) {
for (var t = n(u); null !== t;) {
    if (null === t.callback) a(u);
    else if (t.startTime <= e) a(u), t.sortIndex = t.expirationTime, r(h, t);
    else break;
    t = n(u)
}
}

function I(e) {
if (b = !1, R(e), !y)
    if (null !== n(h)) y = !0, k || (k = !0, s());
    else {
        var t = n(u);
        null !== t && z(I, t.startTime - e)
    }
}
var k = !1,
C = -1,
T = 5,
A = -1;

function _() {
return !!x || !(i.unstable_now() - A < T)
}

function F() {
if (x = !1, k) {
    var e = i.unstable_now();
    A = e;
    var t = !0;
    try {
        e: {
            y = !1,
            b && (b = !1, v(C), C = -1),
            f = !0;
            var r = p;
            try {
                t: {
                    for (R(e), m = n(h); null !== m && !(m.expirationTime > e && _());) {
                        var o = m.callback;
                        if ("function" == typeof o) {
                            m.callback = null, p = m.priorityLevel;
                            var l = o(m.expirationTime <= e);
                            if (e = i.unstable_now(), "function" == typeof l) {
                                m.callback = l, R(e), t = !0;
                                break t
                            }
                            m === n(h) && a(h), R(e)
                        } else a(h);
                        m = n(h)
                    }
                    if (null !== m) t = !0;
                    else {
                        var c = n(u);
                        null !== c && z(I, c.startTime - e), t = !1
                    }
                }
                break e
            }
            finally {
                m = null, p = r, f = !1
            }
        }
    }
    finally {
        t ? s() : k = !1
    }
}
}
if ("function" == typeof j) s = function() {
j(F)
};
else if ("u" > typeof MessageChannel) {
var U = new MessageChannel,
    P = U.port2;
U.port1.onmessage = F, s = function() {
    P.postMessage(null)
}
} else s = function() {
w(F, 0)
};

function z(e, t) {
C = w(function() {
    e(i.unstable_now())
}, t)
}
i.unstable_IdlePriority = 5, i.unstable_ImmediatePriority = 1, i.unstable_LowPriority = 4, i.unstable_NormalPriority = 3, i.unstable_Profiling = null, i.unstable_UserBlockingPriority = 2, i.unstable_cancelCallback = function(e) {
e.callback = null
}, i.unstable_forceFrameRate = function(e) {
0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : T = 0 < e ? Math.floor(1e3 / e) : 5
}, i.unstable_getCurrentPriorityLevel = function() {
return p
}, i.unstable_next = function(e) {
switch (p) {
    case 1:
    case 2:
    case 3:
        var t = 3;
        break;
    default:
        t = p
}
var i = p;
p = t;
try {
    return e()
} finally {
    p = i
}
}, i.unstable_requestPaint = function() {
x = !0
}, i.unstable_runWithPriority = function(e, t) {
switch (e) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        break;
    default:
        e = 3
}
var i = p;
p = e;
try {
    return t()
} finally {
    p = i
}
}, i.unstable_scheduleCallback = function(e, t, a) {
var o = i.unstable_now();
switch (a = "object" == typeof a && null !== a && "number" == typeof(a = a.delay) && 0 < a ? o + a : o, e) {
    case 1:
        var l = -1;
        break;
    case 2:
        l = 250;
        break;
    case 5:
        l = 0x3fffffff;
        break;
    case 4:
        l = 1e4;
        break;
    default:
        l = 5e3
}
return l = a + l, e = {
    id: g++,
    callback: t,
    priorityLevel: e,
    startTime: a,
    expirationTime: l,
    sortIndex: -1
}, a > o ? (e.sortIndex = a, r(u, e), null === n(h) && e === n(u) && (b ? (v(C), C = -1) : b = !0, z(I, a - o))) : (e.sortIndex = l, r(h, e), y || f || (y = !0, k || (k = !0, s()))), e
}, i.unstable_shouldYield = _, i.unstable_wrapCallback = function(e) {
var t = p;
return function() {
    var i = p;
    p = t;
    try {
        return e.apply(this, arguments)
    } finally {
        p = i
    }
}
}
}, 52659, (e, t, i) => {
"use strict";
t.exports = e.r(11829)
}, 28104, e => {
"use strict";
var t = e.i(91398),
i = e.i(60814),
r = e.i(14681),
n = e.i(91788),
a = e.i(18888),
o = e.i(46031),
s = e.i(21666),
l = e.i(50687),
c = e.i(46737),
d = e.i(57232);
let h = i.default.div.withConfig({
displayName: "ProductCarousel__StickyWrapper",
componentId: "sc-1ffadd87-0"
})
`
  width: 100%;
  height: fit-content;

  @media (max-width: ${l.TABLET_MAX_WIDTH_IN_PX}px) {
    position: relative;
  }

  @media (min-width: ${l.TABLET_MAX_WIDTH_IN_PX+1}px) {
    position: sticky;
    top: ${e=>e.$headerVisible?"80px":"20px"};
    transition: top 0.3s ease-in-out;
    height: calc(100vh - 96px);
    display: flex;
    align-items: center;
    justify-content: center;
  }
`, u = (0, i.default)(({
className: e,
items: i,
sticky: u,
navigationType: p = "buttons",
autoSlideDuration: f,
pauseOnHover: y = !1
}) => {
let {
    headerVisible: b
} = (0, n.useContext)(c.GlobalUIContext), {
    width: x
} = (0, d.useWindowSize)(), [w, v] = (0, n.useState)(0), j = (0, n.useRef)([]), R = (0, n.useRef)(null), I = (0, n.useRef)(null), k = (0, n.useRef)(null), C = (0, n.useRef)(i);
(0, n.useEffect)(() => {
    C.current = i
}, [i]);
let [T, A] = (0, n.useState)(!1);
(0, n.useEffect)(() => {
    A(!0)
}, []);
let [_, F] = (0, n.useState)({
    x: 0,
    y: 0
}), [U, P] = (0, n.useState)(!1), [z, W] = (0, n.useState)(!1), [q, S] = (0, n.useState)("next"), [L, D] = (0, n.useState)(!1), H = (0, n.useRef)(null), $ = (0, n.useRef)([]), E = (0, n.useRef)(null), B = (0, n.useRef)(!1), M = (0, n.useMemo)(() => [], []), [O, N] = (0, r.default)({
    align: "start",
    loop: !0,
    slidesToScroll: 1,
    containScroll: "trimSnaps"
}, M), X = (0, n.useCallback)(() => {
    H.current && (H.current.kill(), H.current = null)
}, []), V = (0, n.useCallback)(() => {
    $.current.forEach(e => {
        e && a.default.set(e, {
            clearProps: "all",
            width: "0%"
        })
    })
}, []), G = (0, n.useCallback)(() => {
    N && v(N.selectedScrollSnap())
}, [N]), Y = (0, n.useCallback)(() => {
    E.current && (clearTimeout(E.current), E.current = null)
}, []), Z = (0, n.useCallback)(() => {
    if (!N || !f || B.current) return;
    E.current && (clearTimeout(E.current), E.current = null);
    let e = C.current[w],
        t = (e ? .autoSlideDuration ? ? f ? ? 0) * 1e3;
    if (t > 0) {
        X(), V();
        let e = $.current[w];
        e && (a.default.set(e, {
            width: "0%"
        }), H.current = a.default.to(e, {
            width: "100%",
            duration: Math.max(0, t) / 1e3,
            ease: "none",
            delay: .24
        })), E.current = setTimeout(() => {
            N.scrollNext()
        }, t + 240)
    }
}, [N, f, w, X, V]), K = (0, n.useCallback)(() => {
    Y(), X()
}, [Y, X]);
(0, n.useCallback)(() => {
    K(), Z()
}, [K, Z]);
let Q = (0, n.useCallback)(() => {
        N && (K(), N.scrollPrev())
    }, [N, K]),
    J = (0, n.useCallback)(() => {
        N && (K(), N.scrollNext())
    }, [N, K]);
(0, n.useEffect)(() => {
    if (N) return G(), N.on("select", G), () => {
        N.off("select", G)
    }
}, [N, G]), (0, n.useEffect)(() => {
    if (N && f) return Z(), () => {
        K()
    }
}, [N, w, f, Z, K]), (0, n.useEffect)(() => {
    let e;
    if (!R.current || !N || !f) return;
    let t = R.current,
        i = new IntersectionObserver(t => {
            t.forEach(t => {
                clearTimeout(e), e = setTimeout(() => {
                    t.isIntersecting ? (B.current = !1, Z()) : (B.current = !0, K())
                }, 150)
            })
        }, {
            threshold: .3,
            rootMargin: "0px 0px -10% 0px"
        });
    return i.observe(t), () => {
        clearTimeout(e), i.disconnect()
    }
}, [N, f, Z, K]), (0, n.useEffect)(() => {
    if (!y || !f || !R.current) return;
    let e = R.current,
        t = () => {
            B.current = !0, K()
        },
        i = () => {
            B.current = !1, Z()
        };
    return e.addEventListener("mouseenter", t), e.addEventListener("mouseleave", i), () => {
        e.removeEventListener("mouseenter", t), e.removeEventListener("mouseleave", i)
    }
}, [y, f, Z, K]), (0, n.useEffect)(() => {
    j.current.forEach((e, t) => {
        e && (t === w ? requestAnimationFrame(() => {
            e && (e.currentTime = 0, e.load(), e.play().catch(e => {
                console.warn("Video autoplay failed:", e)
            }))
        }) : (e.pause(), e.currentTime = 0))
    })
}, [w]), (0, n.useEffect)(() => {
    if (!N) return;
    let e = setTimeout(() => {
        let e = j.current[0];
        e && 0 === w && (e.currentTime = 0, e.load(), e.play().catch(e => {
            console.warn("Initial video autoplay failed:", e)
        }))
    }, 100);
    return () => clearTimeout(e)
}, [N]), (0, n.useEffect)(() => {
    if ("cursorTracked" !== p || !window.matchMedia("(pointer: fine)").matches || !R.current) return;
    let e = R.current,
        t = t => {
            let i = e.getBoundingClientRect(),
                r = t.clientX - i.left,
                n = t.clientY - i.top;
            F({
                x: r,
                y: n
            });
            let a = !1;
            if (I.current) {
                let e = I.current.getBoundingClientRect(),
                    t = e.left - i.left,
                    o = e.top - i.top;
                a = r >= t - 12 && r <= t + e.width + 12 && n >= o - 12 && n <= o + e.height + 12
            }
            if (!a && k.current) {
                let e = k.current.getBoundingClientRect(),
                    t = e.left - i.left,
                    o = e.top - i.top;
                a = r >= t - 12 && r <= t + e.width + 12 && n >= o - 12 && n <= o + e.height + 12
            }
            W(a)
        },
        i = () => {
            P(!0)
        },
        r = () => {
            P(!1)
        },
        n = t => {
            let i = t.target;
            k.current ? .contains(i) || I.current ? .contains(i) || (t.clientX - e.getBoundingClientRect().left < e.offsetWidth / 2 ? Q() : J())
        };
    return e.addEventListener("mousemove", t), e.addEventListener("mouseenter", i), e.addEventListener("mouseleave", r), e.addEventListener("click", n), () => {
        e.removeEventListener("mousemove", t), e.removeEventListener("mouseenter", i), e.removeEventListener("mouseleave", r), e.removeEventListener("click", n)
    }
}, [p, Q, J]);
let ee = (0, n.useMemo)(() => R.current && _.x < R.current.offsetWidth / 2 ? "prev" : "next", [_.x]);
(0, n.useEffect)(() => {
    if (ee !== q && !z) {
        D(!0);
        let e = setTimeout(() => {
            S(ee), D(!1)
        }, 100);
        return () => clearTimeout(e)
    }
}, [ee, q, z]);
let et = (0, n.useMemo)(() => "cursorTracked" !== p || window.matchMedia("(pointer: fine)").matches ? p : "none", [p]),
    ei = !!T && x > 0 && x <= l.PHONE_MAX_WIDTH_IN_PX;
if (!T) return null;
let er = (0, t.jsxs)("div", {
    className: `${e} ${"cursorTracked"===et?"cursor-tracked":""} ${z?"near-indicator":""}`,
    ref: R,
    suppressHydrationWarning: !0,
    children: [(0, t.jsx)("div", {
        className: "embla",
        ref: O,
        children: (0, t.jsx)("div", {
            className: "embla__container",
            children: i.map((e, i) => {
                let r, n, a = !!(e.videoSrc || e.videoSrcResponsive),
                    o = (r = a ? "videoSrcResponsive" : "srcResponsive", n = a ? "videoSrc" : "src", ei ? e[r] || e[n] : e[n] || e[r]),
                    l = ei ? e.posterResponsive || e.poster : e.poster || e.posterResponsive,
                    c = `${a?"main-video":"main-image"} ${e.objectPositionBottom?"object-bottom":""} ${e.objectFit?`object-fit-${e.objectFit}`:""}`;
                return (0, t.jsx)("div", {
                    className: "embla__slide",
                    children: (0, t.jsxs)("div", {
                        className: "image-container",
                        style: {
                            background: e.background
                        },
                        suppressHydrationWarning: !0,
                        children: [a ? (0, t.jsx)("video", {
                            ref: e => {
                                j.current[i] = e
                            },
                            className: c,
                            poster: l,
                            playsInline: !0,
                            muted: !0,
                            preload: "metadata",
                            suppressHydrationWarning: !0,
                            children: (0, t.jsx)("source", {
                                src: o,
                                type: "video/mp4"
                            })
                        }, T ? o : void 0) : e.src && e.srcResponsive ? (0, t.jsx)(s.CustomImage, {
                            width: "400",
                            height: "400",
                            src: o || "",
                            alt: e.alt || "Ultrahuman Image",
                            className: c,
                            suppressHydrationWarning: !0
                        }) : null, (e.title || e.description) && (0, t.jsxs)("div", {
                            className: `slide-text-wrapper ${e.textPosition||"top-center"} ${w===i?"active":""}`,
                            children: [e.title && (0, t.jsx)(g, {
                                children: e.title
                            }), e.description && (0, t.jsx)(m, {
                                children: e.description
                            })]
                        })]
                    })
                }, i)
            })
        })
    }), "buttons" === et && (0, t.jsxs)("div", {
        className: "navigation",
        children: [(0, t.jsx)(o.CarouselButton, {
            direction: "prev",
            variant: "light",
            rounded: "full",
            fill: !0,
            onClick: Q,
            "aria-label": "Previous image",
            style: {
                position: "relative"
            }
        }), (0, t.jsx)(o.CarouselButton, {
            direction: "next",
            variant: "light",
            rounded: "full",
            fill: !0,
            onClick: J,
            "aria-label": "Next image",
            style: {
                position: "relative"
            }
        })]
    }), "cursorTracked" === et && U && (0, t.jsx)("div", {
        className: `cursor-tracker ${z||L?"hidden":""}`,
        style: {
            left: `${_.x}px`,
            top: `${_.y}px`
        },
        children: (0, t.jsx)(o.CarouselButton, {
            direction: q,
            variant: "light",
            rounded: "full",
            fill: !0,
            "aria-label": "prev" === q ? "Previous" : "Next",
            style: {
                position: "relative",
                pointerEvents: "none"
            }
        })
    }), "cursorTracked" === et && i.length > 1 && (0, t.jsxs)("div", {
        className: "cta-nav-wrapper",
        ref: k,
        children: [(0, t.jsx)(o.CarouselButton, {
            direction: "prev",
            variant: "light",
            rounded: "full",
            fill: !0,
            onClick: Q,
            "aria-label": "Previous slide",
            style: {
                position: "relative"
            }
        }), (0, t.jsx)(o.CarouselButton, {
            direction: "next",
            variant: "light",
            rounded: "full",
            fill: !0,
            onClick: J,
            "aria-label": "Next slide",
            style: {
                position: "relative"
            }
        })]
    }), i.length > 1 && (0, t.jsx)("div", {
        className: "indicator-wrapper",
        ref: I,
        children: i.map((e, i) => (0, t.jsx)("button", {
            className: `dot ${i===w?"is-active":""}`,
            onClick: () => {
                N && (K(), N.scrollTo(i))
            },
            "aria-label": `Go to slide ${i+1}`,
            children: (0, t.jsx)("div", {
                className: "progress",
                ref: e => {
                    $.current[i] = e
                }
            })
        }, i))
    })]
});
return u ? (0, t.jsx)(h, {
    $headerVisible: b,
    children: er
}) : er
}).withConfig({
displayName: "ProductCarousel",
componentId: "sc-1ffadd87-1"
})
`
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 16px;
  overflow: hidden;

  /* Cursor tracked mode - hide system cursor */
  &.cursor-tracked {
    cursor: none !important;
    -webkit-cursor: none !important;

    /* Hide cursor on all child elements */
    *,
    *::before,
    *::after {
      cursor: none !important;
      -webkit-cursor: none !important;
    }

    /* Specifically target media elements for Safari */
    img,
    video,
    .main-image,
    .main-video,
    .embla,
    .embla__container,
    .embla__slide,
    .image-container {
      cursor: none !important;
      -webkit-cursor: none !important;
    }

    /* Show system cursor when near indicator dots */
    &.near-indicator {
      cursor: auto !important;
      -webkit-cursor: auto !important;

      *,
      *::before,
      *::after {
        cursor: auto !important;
        -webkit-cursor: auto !important;
      }
    }

    .indicator-wrapper,
    .cta-nav-wrapper {
      cursor: pointer !important;
      -webkit-cursor: pointer !important;

      *,
      *::before,
      *::after {
        cursor: pointer !important;
        -webkit-cursor: pointer !important;
      }
    }
  }

  .embla {
    overflow: hidden;
    border-radius: 16px;
    height: 100%;
    position: relative;
  }

  .embla__container {
    display: flex;
    height: 100%;
  }

  .embla__slide {
    flex: 0 0 100%;
    min-width: 0;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    background: linear-gradient(
        0deg,
        rgba(115, 115, 115, 0.05) 0%,
        rgba(115, 115, 115, 0.05) 100%
      ),
      rgb(255, 255, 255);
  }

  .image-container {
    position: relative;
    width: 100%;
    height: 100%;
    margin: 0;
    overflow: hidden;
    border-radius: 0;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;

    .main-image,
    .main-video {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;

      &.object-bottom {
        object-position: bottom;
      }

      &.object-fit-cover {
        object-fit: cover;
      }

      &.object-fit-contain {
        object-fit: contain;
      }
    }

    .main-video {
      display: block;
    }

    .slide-text-wrapper {
      position: absolute;
      z-index: 1;
      color: #000000;
      user-select: none;
      width: 100%;
      max-width: 100%;
      padding: 0 32px;

      /* Default state - exited/exiting */
      opacity: 0;
      filter: blur(12px);

      /* Smooth transitions for both entry and exit */
      transition: opacity 0.6s ease-in-out, filter 0.6s ease-in-out;
      will-change: opacity, filter;

      /* Active state - entered */
      &.active {
        opacity: 1;
        filter: blur(0px);
      }

      /* Desktop positioning */
      @media (min-width: ${l.PHONE_MAX_WIDTH_IN_PX+1}px) {
        max-width: 50%;
        &.top-left {
          top: 52px;
          left: 24px;
        }
        &.top-center {
          top: 52px;
          left: 50%;
          transform: translateX(-50%);
          text-align: center;
          max-width: 65%;
        }
        &.top-right {
          top: 52px;
          right: 24px;
        }
        &.middle-left {
          top: 50%;
          left: 24px;
          transform: translateY(-50%);
        }
        &.middle-center {
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          max-width: 65%;
        }
        &.middle-right {
          top: 50%;
          right: 24px;
          transform: translateY(-50%);
        }
        &.bottom-left {
          bottom: 24px;
          left: 24px;
        }
        &.bottom-center {
          bottom: 24px;
          left: 50%;
          transform: translateX(-50%);
          text-align: center;
          max-width: 65%;
        }
        &.bottom-right {
          bottom: 24px;
          right: 24px;
        }
      }

      /* Mobile positioning - override desktop positions */
      @media (max-width: ${l.PHONE_MAX_WIDTH_IN_PX}px) {
        left: 50%;
        transform: translateX(-50%);
        text-align: center;

        /* Top and middle positions go to top-center */
        &.top-left,
        &.top-center,
        &.top-right,
        &.middle-left,
        &.middle-center,
        &.middle-right {
          top: 36px;
        }

        /* Bottom positions go to bottom-center */
        &.bottom-left,
        &.bottom-center,
        &.bottom-right {
          bottom: 44px;
        }
      }
    }
  }

  .navigation {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    transform: translateY(-50%);
    z-index: 10;
  }

  .cursor-tracker {
    position: absolute;
    pointer-events: none;
    z-index: 20;
    transform: translate(-50%, -50%) scale(1);
    transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);

    &.hidden {
      transform: translate(-50%, -50%) scale(0);
    }
  }

  /* Slower animation when hiding near indicator */
  &.near-indicator .cursor-tracker {
    transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  .cta-nav-wrapper {
    position: absolute;
    display: inline-flex;
    padding: 5px;
    justify-content: center;
    align-items: center;
    gap: 5px;
    border-radius: 16px;
    background: rgba(0, 0, 0, 0.2);
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    z-index: 10;
    transition: transform 400ms cubic-bezier(0.34, 1.56, 0.64, 1);

    &:hover {
      transform: scale(1.15);
    }

    /* Override button sizes to match indicator dots */
    button {
      width: 14px !important;
      height: 14px !important;
      min-width: 14px;
      min-height: 14px;
      pointer-events: auto;
      cursor: pointer;

      svg {
        width: 8px !important;
        height: 8px !important;
        pointer-events: none;
      }
    }

    /* Hide on mobile - desktop only */
    @media (max-width: ${l.PHONE_MAX_WIDTH_IN_PX}px) {
      display: none;
    }

    @media (min-width: ${l.PHONE_MAX_WIDTH_IN_PX+1}px) {
      top: 16px;
      right: 24px;
    }
  }

  .indicator-wrapper {
    position: absolute;
    display: inline-flex;
    padding: 8px;
    justify-content: center;
    align-items: flex-start;
    gap: 7.179px;
    border-radius: 26px;
    background: rgba(0, 0, 0, 0.2);
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    z-index: 10;
    transition: transform 400ms cubic-bezier(0.34, 1.56, 0.64, 1);

    &:hover {
      transform: scale(1.15);
    }

    @media (max-width: ${l.PHONE_MAX_WIDTH_IN_PX}px) {
      bottom: 12px;
      left: 50%;

      &:hover {
        transform: translateX(-50%) scale(1.15);
      }

      &:not(:hover) {
        transform: translateX(-50%);
      }
    }

    @media (min-width: ${l.PHONE_MAX_WIDTH_IN_PX+1}px) {
      top: 16px;
      left: 24px;
    }
  }

  .dot {
    width: 6px;
    height: 6px;
    border-radius: 26px;
    background: rgba(255, 255, 255, 0.2);
    overflow: hidden;
    flex-shrink: 0;
    transition: width 220ms ease-in-out;
    border: none;
    padding: 0;
    cursor: pointer;

    &:hover {
      background: rgba(255, 255, 255, 0.3);
    }
  }

  .dot .progress {
    width: 0%;
    height: 100%;
    background: #fff;
    border-radius: inherit;
  }

  .dot.is-active {
    width: 32px;
    background: ${e=>e.autoSlideDuration?"rgba(255, 255, 255, 0.2)":"#fff"};
  }

  @media (max-width: ${l.PHONE_MAX_WIDTH_IN_PX}px) {
    height: auto;
    aspect-ratio: 3 / 4;

    .embla {
      height: auto;
      aspect-ratio: 3 / 4;
    }

    .embla__container {
      height: auto;
    }

    .embla__slide {
      height: auto;
      aspect-ratio: 3 / 4;
    }

    .image-container {
      width: 100%;
      height: 100%;
      margin: 0;
    }

    .navigation {
      padding: 0 8px;

      .nav-button {
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
    }
  }

  @media (min-width: ${l.PHONE_MAX_WIDTH_IN_PX+1}px) {
    height: calc(100vh - 96px);
  }
`, g = i.default.h3.withConfig({
displayName: "ProductCarousel__Title",
componentId: "sc-1ffadd87-2"
})
`
  font-size: 16px;
  line-height: 1.2;
  letter-spacing: -0.64px;
  font-weight: 500;

  @media (min-width: ${({theme:e})=>e.globalV2.sm.minWidth}) {
    font-size: 24px;
  }

  // @media (min-width: ${({theme:e})=>e.globalV2.md.minWidth}) {
  //   font-size: 28px;
  // }

  // @media (min-width: ${({theme:e})=>e.globalV2.lg.minWidth}) {
  //   font-size: 32px;
  // }

  // @media (min-width: ${({theme:e})=>e.globalV2.xl.minWidth}) {
  //   font-size: 36px;
  // }

  @media (min-width: ${({theme:e})=>e.globalV2.xxl.minWidth}) {
    font-size: 28px;
  }

  @media (min-width: ${({theme:e})=>e.globalV2.xxxl.minWidth}) {
    font-size: 36px;
  }
`, m = i.default.p.withConfig({
displayName: "ProductCarousel__Description",
componentId: "sc-1ffadd87-3"
})
`
  font-size: 12px;
  line-height: 120%;

  @media (min-width: ${({theme:e})=>e.globalV2.sm.minWidth}) {
    font-size: 16px;
  }

  @media (min-width: ${({theme:e})=>e.globalV2.md.minWidth}) {
    font-size: 18px;
  }

  // @media (min-width: ${({theme:e})=>e.globalV2.lg.minWidth}) {
  //   font-size: 20px;
  // }

  // @media (min-width: ${({theme:e})=>e.globalV2.xl.minWidth}) {
  //   font-size: 22px;
  // }

  @media (min-width: ${({theme:e})=>e.globalV2.xxl.minWidth}) {
    font-size: 19px;
  }

  @media (min-width: ${({theme:e})=>e.globalV2.xxxl.minWidth}) {
    font-size: 22px;
  }
`;
e.s(["ProductCarousel", 0, u])
}, 52126, e => {
"use strict";
var t = e.i(91398),
i = e.i(13308),
r = e.i(62114),
n = e.i(91898);

function a(e, a) {
let {
    t: o,
    regionSlug: s,
    router: l
} = a, c = e.toUpperCase();
return "US" === c || "PR" === c ? {
    offersData: [{
        title: (0, t.jsx)(t.Fragment, {
            children: "Save more with your pre-tax dollars"
        }),
        image: ["web_v2/icons/hsa-fsa/hsa-fsa-black-outline.svg"]
    }, {
        title: (0, t.jsx)(t.Fragment, {
            children: "As low as 0 APR financing | Klarna, AfterPay & Affirm"
        }),
        image: ["web_v2/icons/primary_offers/afterpay.png", "web_v2/icons/primary_offers/klara.png", "web_v2/icons/primary_offers/affirmm.png"]
    }, {
        title: (0, t.jsx)(t.Fragment, {
            children: "Shop Pay | Pay in full or in parts"
        }),
        image: ["web_v2/icons/primary_offers/shoppay.png"],
        imageType: "square"
    }, {
        title: (0, t.jsx)(t.Fragment, {
            children: "Instant payment with PayPal, Apple Pay, or GPay"
        }),
        image: ["web_v2/icons/primary_offers/paypal.png", "web_v2/icons/primary_offers/applepay.png", "web_v2/icons/primary_offers/gpay.png"]
    }, {
        title: (0, t.jsx)(t.Fragment, {
            children: "Crypto payments with USDC"
        }),
        image: ["web_v2/icons/primary_offers/usdc-2.png"]
    }],
    secondaryOfferData: [{
        title: (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsx)("b", {
                children: "Try it risk-free"
            }), " | 30-day returns"]
        })
    }, {
        title: (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsx)("b", {
                children: "HSA/FSA"
            }), " | Save more with your pre-tax dollars"]
        }),
        image: ["web_v2/icons/hsa-fsa/hsa-fsa-icon-black-bg-white.svg"],
        modal: (0, t.jsx)(i.ImageModal, {
            children: (0, t.jsx)(r.HsaFsaOffer, {})
        })
    }, {
        title: (0, t.jsx)("b", {
            children: "Special pricing for the Heroes Of The World"
        }),
        modal: (0, t.jsx)(i.ImageModal, {
            ctaText: "Learn more",
            ctaOnClick: () => l.push({
                pathname: `/${s}/heroes`,
                query: { ...l.query
                }
            }),
            children: (0, t.jsx)(r.HeroDiscountOffer, {})
        })
    }]
} : "IN" === c ? {
    offersData: [{
        title: (0, t.jsxs)(t.Fragment, {
            children: [o("ring.productSelection.in.offerD.a"), " ", o("ring.productSelection.in.offerD.b"), " ", (0, t.jsx)("span", {
                style: {
                    whiteSpace: "nowrap"
                },
                children: "₹ 1,187/month"
            })]
        }),
        image: ["web_v2/icons/primary_offers/0-percent.png"]
    }, {
        title: (0, t.jsx)(t.Fragment, {
            children: "CRED pay | Save and earn rewards"
        }),
        image: ["web_v2/icons/primary_offers/cred.png"]
    }, {
        title: (0, t.jsx)(t.Fragment, {
            children: "Easy payments with UPI"
        }),
        image: ["web_v2/icons/primary_offers/upi.png"]
    }, {
        title: (0, t.jsx)(t.Fragment, {
            children: o("ring.productSelection.in.offerC.a")
        }),
        image: ["web_v2/icons/primary_offers/cod.png"]
    }],
    secondaryOfferData: [{
        title: (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsx)("b", {
                children: "Try it risk-free"
            }), " | 30-day returns"]
        })
    }, {
        title: (0, t.jsx)("b", {
            children: "Special pricing for the Heroes Of The World"
        }),
        modal: (0, t.jsx)(i.ImageModal, {
            ctaText: "Learn more",
            ctaOnClick: () => l.push({
                pathname: `/${s}/heroes`,
                query: { ...l.query
                }
            }),
            children: (0, t.jsx)(r.HeroDiscountOffer, {})
        })
    }]
} : ["AE", "QA", "BH", "KW", "OM"].includes(c) ? {
    offersData: [{
        title: (0, t.jsx)(t.Fragment, {
            children: "Instant payment with Apple Pay"
        }),
        image: ["web_v2/icons/primary_offers/applepay.png"]
    }, {
        title: (0, t.jsx)(t.Fragment, {
            children: "Split payments with Tabby, Tamara or Cashew"
        }),
        image: ["web_v2/icons/primary_offers/icon.png", "web_v2/icons/primary_offers/tamara_new.png", "web_v2/icons/primary_offers/cashew.png"]
    }, {
        title: (0, t.jsx)(t.Fragment, {
            children: o("ring.productSelection.in.offerC.a")
        }),
        image: ["web_v2/icons/primary_offers/cod.png"]
    }],
    secondaryOfferData: [{
        title: (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsx)("b", {
                children: "Try it risk-free"
            }), " | 30-day returns"]
        })
    }, {
        title: (0, t.jsx)("b", {
            children: "Special pricing for the Heroes Of The World"
        }),
        modal: (0, t.jsx)(i.ImageModal, {
            ctaText: "Learn more",
            ctaOnClick: () => l.push({
                pathname: `/${s}/heroes`,
                query: { ...l.query
                }
            }),
            children: (0, t.jsx)(r.HeroDiscountOffer, {})
        })
    }]
} : (0, n.isMCFCountry)(c) ? {
    offersData: [{
        title: (0, t.jsx)(t.Fragment, {
            children: "One-tap checkout with Shop Pay"
        }),
        image: ["web_v2/icons/primary_offers/shoppay.png"]
    }, {
        title: (0, t.jsx)(t.Fragment, {
            children: "Instant payment with PayPal"
        }),
        image: ["web_v2/icons/primary_offers/paypal.png"],
        imageType: "square"
    }, {
        title: (0, t.jsx)(t.Fragment, {
            children: "As low as 0 APR financing | Klarna"
        }),
        image: ["web_v2/icons/primary_offers/klara.png"],
        imageType: "square"
    }],
    secondaryOfferData: [{
        title: (0, t.jsx)("b", {
            children: "Special pricing for the Heroes Of The World"
        }),
        modal: (0, t.jsx)(i.ImageModal, {
            ctaText: "Learn more",
            ctaOnClick: () => l.push({
                pathname: `/${s}/heroes`,
                query: { ...l.query
                }
            }),
            children: (0, t.jsx)(r.HeroDiscountOffer, {})
        })
    }]
} : {
    offersData: [{
        title: (0, t.jsx)(t.Fragment, {
            children: "Express checkout with PayPal"
        }),
        image: ["web_v2/icons/primary_offers/paypal.png"]
    }, {
        title: (0, t.jsx)(t.Fragment, {
            children: "Instant payment with Apple Pay"
        }),
        image: ["web_v2/icons/primary_offers/applepay.png"]
    }],
    secondaryOfferData: [{
        title: (0, t.jsx)("b", {
            children: "Special pricing for the Heroes Of The World"
        }),
        modal: (0, t.jsx)(i.ImageModal, {
            ctaText: "Learn more",
            ctaOnClick: () => l.push({
                pathname: `/${s}/heroes`,
                query: { ...l.query
                }
            }),
            children: (0, t.jsx)(r.HeroDiscountOffer, {})
        })
    }]
}
}
e.s(["getOffersForRegion", () => a])
}, 48761, e => {
e.v(t => Promise.all(["static/chunks/28e14a26e92e0e1d.js"].map(t => e.l(t))).then(() => t(93594)))
}, 28805, e => {
e.v(e => Promise.resolve().then(() => e(79466)))
}, 28152, e => {
e.v(t => Promise.all(["static/chunks/01d9796a0404d1a4.js", "static/chunks/1e48bd268ce62d46.js"].map(t => e.l(t))).then(() => t(40008)))
}, 65071, e => {
e.v(e => Promise.resolve().then(() => e(75646)))
}, 63634, e => {
e.v(e => Promise.resolve().then(() => e(79446)))
}, 7638, e => {
e.v(e => Promise.resolve().then(() => e(34151)))
}, 15647, e => {
e.v(e => Promise.resolve().then(() => e(8153)))
}, 98964, e => {
e.v(e => Promise.resolve().then(() => e(13069)))
}, 28599, e => {
e.v(e => Promise.resolve().then(() => e(62977)))
}, 83804, e => {
e.v(t => Promise.all(["static/chunks/cfd7f77f7b4a55b3.js"].map(t => e.l(t))).then(() => t(38741)))
}, 26413, e => {
e.v(t => Promise.all(["static/chunks/710118d6c4ea08cf.js"].map(t => e.l(t))).then(() => t(24453)))
}, 9135, e => {
e.v(t => Promise.all(["static/chunks/e056ca7971cd1f63.js"].map(t => e.l(t))).then(() => t(14075)))
}]);