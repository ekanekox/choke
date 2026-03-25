(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 54134, e => {
    "use strict";
    var t = e.i(91398),
        i = e.i(58678),
        r = e.i(3828),
        a = e.i(91788),
        n = e.i(3115),
        o = e.i(71225);
    let s = "https://www.ultrahuman.com";

    function l(e) {
        return e.endsWith("/") ? e : e + "/"
    }
    e.s(["SEO", 0, ({
        title: e,
        description: c,
        image: h,
        canonical: d,
        basePath: u,
        nonIndexable: g,
        robots: m
    }) => {
        let p, {
                asPath: f
            } = (0, r.useRouter)(),
            {
                regionSlug: y
            } = (0, a.useContext)(n.RegionLocaleContext);
        if (d) p = d;
        else if (u) p = `${s}/${y}${l(u)}`;
        else {
            let e = f.split("?")[0].split("#")[0];
            p = `${s}${e}`
        }
        let b = !!u,
            w = u ? `${s}/global${l(u)}` : void 0,
            x = b ? (0, o.getAllRegionSlugs)() : [];
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
            }, "og-site-name"), h && (0, t.jsx)("meta", {
                name: "twitter:image",
                content: h
            }, "twitter-image"), h && (0, t.jsx)("meta", {
                property: "og:image",
                content: h
            }, "og-image"), (0, t.jsx)("link", {
                rel: "canonical",
                href: p
            }, "canonical"), w && (0, t.jsx)("link", {
                rel: "alternate",
                hrefLang: "x-default",
                href: w
            }, "hreflang-x-default"), x.map(e => {
                let i, r, a = (0, o.parseRegionLocale)(e),
                    n = `${s}/${e}${l(u)}`;
                if ("GLOBAL" === a.region) return null;
                let c = (i = a.region.toUpperCase(), r = (0, o.getDefaultLanguageForRegion)(i), `${r}-${i}`),
                    h = e.includes("-") ? `${a.language}-${a.region}` : c;
                return (0, t.jsx)("link", {
                    rel: "alternate",
                    hrefLang: h,
                    href: n
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
}, 72218, 66243, e => {
    "use strict";
    e.i(50461);
    var t = e.i(91398),
        i = e.i(58678);

    function r(e) {
        return {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: e.map((e, t) => ({
                "@type": "ListItem",
                position: t + 1,
                name: e.name,
                item: e.url
            }))
        }
    }
    e.s(["JsonLd", 0, ({
        data: e,
        id: r
    }) => {
        if (!e) return null;
        try {
            let a = JSON.stringify(e);
            return (0, t.jsx)(i.default, {
                children: (0, t.jsx)("script", {
                    type: "application/ld+json",
                    dangerouslySetInnerHTML: {
                        __html: a
                    },
                    ...r && {
                        id: r
                    }
                })
            })
        } catch (e) {
            return null
        }
    }], 72218), e.s(["generateBreadcrumbSchema", () => r], 66243)
}, 12255, 82851, 61525, e => {
    "use strict";

    function t(e) {
        let {
            name: t,
            description: i,
            imageUrl: r,
            brand: a = "Ultrahuman",
            sku: n,
            mpn: o,
            gtin: s,
            category: l,
            price: c,
            currency: h,
            country: d,
            availability: u = "InStock",
            priceValidUntil: g,
            url: m,
            rating: p,
            reviews: f,
            color: y,
            material: b,
            weight: w,
            dimensions: x
        } = e, v = {
            "@type": "Offer",
            url: m,
            priceCurrency: h,
            price: c.toString(),
            availability: `https://schema.org/${u}`,
            priceValidUntil: g || new Date(Date.now() + 7776e6).toISOString().split("T")[0],
            seller: {
                "@type": "Organization",
                name: "Ultrahuman"
            },
            shippingDetails: {
                "@type": "OfferShippingDetails",
                shippingDestination: {
                    "@type": "DefinedRegion",
                    addressCountry: d
                }
            }
        }, R = p ? {
            "@type": "AggregateRating",
            ratingValue: p.ratingValue.toString(),
            reviewCount: p.reviewCount.toString(),
            bestRating: (p.bestRating || 5).toString(),
            worstRating: (p.worstRating || 1).toString()
        } : void 0, j = f ? .map(e => ({
            "@type": "Review",
            author: {
                "@type": "Person",
                name: e.author
            },
            datePublished: e.datePublished,
            reviewBody: e.reviewBody,
            reviewRating: {
                "@type": "Rating",
                ratingValue: e.ratingValue.toString(),
                bestRating: "5",
                worstRating: "1"
            }
        })), I = {
            "@context": "https://schema.org",
            "@type": "Product",
            name: t,
            description: i,
            image: Array.isArray(r) ? r : [r],
            brand: {
                "@type": "Brand",
                name: a
            },
            sku: n,
            mpn: o,
            gtin: s,
            category: l,
            offers: v,
            url: m
        };
        return R && (I.aggregateRating = R), j && j.length > 0 && (I.review = j), y && (I.color = y), b && (I.material = b), w && (I.weight = w), x && (I.depth = x.length, I.width = x.width, I.height = x.height), I
    }

    function i(e) {
        return {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: e.map(e => ({
                "@type": "Question",
                name: e.question,
                acceptedAnswer: {
                    "@type": "Answer",
                    text: e.answer
                }
            }))
        }
    }
    e.s(["generateProductSchema", () => t], 12255), e.s(["generateFAQSchema", () => i], 82851);
    let r = (e, t, i) => {
        if (t > 10) return "";
        if ("string" == typeof e) return e;
        if ("number" == typeof e) return String(e);
        if (Array.isArray(e)) return e.map(e => r(e, t + 1, i)).join(" ");
        if (e && "object" == typeof e) {
            if (i.has(e)) return "";
            if (i.add(e), "props" in e) {
                let a = e.props;
                if ("string" == typeof a ? .defaultMessage && a.defaultMessage.trim()) return a.defaultMessage.trim();
                if (a ? .children) {
                    let e = r(a.children, t + 1, i);
                    if (e.trim()) return e
                }
            }
        }
        return ""
    };
    e.s(["extractTextFromJSX", 0, e => r(e, 0, new WeakSet)], 61525)
}, 4753, e => {
    "use strict";
    var t = e.i(91398),
        i = e.i(40290),
        r = e.i(53147);
    let a = [{
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
        n = [{
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
    }], "ringBuyPageFaqData_AE", 0, n, "ringBuyPageFaqData_IN", 0, o, "ringFaqData", 0, a])
}, 2488, e => {
    "use strict";
    var t = e.i(91788),
        i = e.i(86236),
        r = e.i(62774);
    e.s(["default", 0, (e, a = 0, n, o) => {
        let [s, l] = (0, t.useState)(""), c = (0, t.useRef)("");
        return (0, i.useIsomorphicLayoutEffect)(() => {
            let t = () => {
                if (n ? .current) return;
                let t = window.pageYOffset,
                    i = e.map(e => {
                        let i = document.getElementById(e);
                        if (!i) return {
                            id: e,
                            top: -1,
                            bottom: -1
                        };
                        let r = i.getBoundingClientRect();
                        return {
                            id: e,
                            top: Math.max(0, r.top + t - a),
                            bottom: Math.max(0, r.bottom + t - a)
                        }
                    }).find(({
                        top: e,
                        bottom: i
                    }) => t >= e && t <= i);
                i && i.id && c.current !== i.id && (c.current = i.id, l(i.id))
            };
            o && (o.current = t), t();
            let i = (0, r.throttle)(t, 120),
                s = (0, r.debounce)(t, 200);
            return window.addEventListener("resize", s), window.addEventListener("scroll", i, {
                passive: !0
            }), () => {
                window.removeEventListener("resize", s), window.removeEventListener("scroll", i), o && (o.current = null)
            }
        }, [e, a, n, o]), s
    }])
}, 11829, (e, t, i) => {
    "use strict";

    function r(e, t) {
        var i = e.length;
        for (e.push(t); 0 < i;) {
            var r = i - 1 >>> 1,
                a = e[r];
            if (0 < o(a, t)) e[r] = t, e[i] = a, i = r;
            else break
        }
    }

    function a(e) {
        return 0 === e.length ? null : e[0]
    }

    function n(e) {
        if (0 === e.length) return null;
        var t = e[0],
            i = e.pop();
        if (i !== t) {
            e[0] = i;
            for (var r = 0, a = e.length, n = a >>> 1; r < n;) {
                var s = 2 * (r + 1) - 1,
                    l = e[s],
                    c = s + 1,
                    h = e[c];
                if (0 > o(l, i)) c < a && 0 > o(h, l) ? (e[r] = h, e[c] = i, r = c) : (e[r] = l, e[s] = i, r = s);
                else if (c < a && 0 > o(h, i)) e[r] = h, e[c] = i, r = c;
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
            h = c.now();
        i.unstable_now = function() {
            return c.now() - h
        }
    }
    var d = [],
        u = [],
        g = 1,
        m = null,
        p = 3,
        f = !1,
        y = !1,
        b = !1,
        w = !1,
        x = "function" == typeof setTimeout ? setTimeout : null,
        v = "function" == typeof clearTimeout ? clearTimeout : null,
        R = "u" > typeof setImmediate ? setImmediate : null;

    function j(e) {
        for (var t = a(u); null !== t;) {
            if (null === t.callback) n(u);
            else if (t.startTime <= e) n(u), t.sortIndex = t.expirationTime, r(d, t);
            else break;
            t = a(u)
        }
    }

    function I(e) {
        if (b = !1, j(e), !y)
            if (null !== a(d)) y = !0, A || (A = !0, s());
            else {
                var t = a(u);
                null !== t && P(I, t.startTime - e)
            }
    }
    var A = !1,
        k = -1,
        _ = 5,
        T = -1;

    function F() {
        return !!w || !(i.unstable_now() - T < _)
    }

    function U() {
        if (w = !1, A) {
            var e = i.unstable_now();
            T = e;
            var t = !0;
            try {
                e: {
                    y = !1,
                    b && (b = !1, v(k), k = -1),
                    f = !0;
                    var r = p;
                    try {
                        t: {
                            for (j(e), m = a(d); null !== m && !(m.expirationTime > e && F());) {
                                var o = m.callback;
                                if ("function" == typeof o) {
                                    m.callback = null, p = m.priorityLevel;
                                    var l = o(m.expirationTime <= e);
                                    if (e = i.unstable_now(), "function" == typeof l) {
                                        m.callback = l, j(e), t = !0;
                                        break t
                                    }
                                    m === a(d) && n(d), j(e)
                                } else n(d);
                                m = a(d)
                            }
                            if (null !== m) t = !0;
                            else {
                                var c = a(u);
                                null !== c && P(I, c.startTime - e), t = !1
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
                t ? s() : A = !1
            }
        }
    }
    if ("function" == typeof R) s = function() {
        R(U)
    };
    else if ("u" > typeof MessageChannel) {
        var S = new MessageChannel,
            C = S.port2;
        S.port1.onmessage = U, s = function() {
            C.postMessage(null)
        }
    } else s = function() {
        x(U, 0)
    };

    function P(e, t) {
        k = x(function() {
            e(i.unstable_now())
        }, t)
    }
    i.unstable_IdlePriority = 5, i.unstable_ImmediatePriority = 1, i.unstable_LowPriority = 4, i.unstable_NormalPriority = 3, i.unstable_Profiling = null, i.unstable_UserBlockingPriority = 2, i.unstable_cancelCallback = function(e) {
        e.callback = null
    }, i.unstable_forceFrameRate = function(e) {
        0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : _ = 0 < e ? Math.floor(1e3 / e) : 5
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
        w = !0
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
    }, i.unstable_scheduleCallback = function(e, t, n) {
        var o = i.unstable_now();
        switch (n = "object" == typeof n && null !== n && "number" == typeof(n = n.delay) && 0 < n ? o + n : o, e) {
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
        return l = n + l, e = {
            id: g++,
            callback: t,
            priorityLevel: e,
            startTime: n,
            expirationTime: l,
            sortIndex: -1
        }, n > o ? (e.sortIndex = n, r(u, e), null === a(d) && e === a(u) && (b ? (v(k), k = -1) : b = !0, P(I, n - o))) : (e.sortIndex = l, r(d, e), y || f || (y = !0, A || (A = !0, s()))), e
    }, i.unstable_shouldYield = F, i.unstable_wrapCallback = function(e) {
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
}, 41292, e => {
    "use strict";
    var t = e.i(59207),
        i = e.i(82702),
        r = e.i(4753),
        a = e.i(12255),
        n = e.i(82851),
        o = e.i(66243),
        s = e.i(61525),
        l = e.i(78198);
    e.s(["getRingPricingSchemas", 0, ({
        locale: e,
        country: c,
        store: h,
        currency: d,
        defaultColor: u,
        t: g
    }) => {
        let m = (e || "us").toUpperCase().toLowerCase(),
            p = (c || m).toLowerCase().toUpperCase(),
            f = u ? ? i.AirRingColors.RAW_TITANIUM,
            y = h && f ? i.RingPriceData[h] ? .[f] : null,
            b = y ? .price ? ? 349,
            w = d.toUpperCase(),
            x = h === t.ShopifyStore.AE ? r.ringBuyPageFaqData_AE : (0, r.getRingBuyPageFaqData)(g || (e => e)),
            v = (0, a.generateProductSchema)({
                name: "Ultrahuman Ring AIR",
                description: "Ultrahuman Ring AIR is the world's most comfortable and compact smart ring that monitors your sleep, movement and recovery.",
                imageUrl: (0, l.getAssetUrl)("/web_v2/backgrounds/ring-air-hero.png"),
                brand: "Ultrahuman",
                category: "Wearable Technology",
                price: b,
                currency: w,
                country: p,
                availability: "InStock",
                url: `https://www.ultrahuman.com/${m}/ring/buy`,
                rating: {
                    ratingValue: 4.7,
                    reviewCount: 2500
                }
            }),
            R = x.map(e => ({
                question: (0, s.extractTextFromJSX)(e.title) || "",
                answer: (0, s.extractTextFromJSX)(e.description) || "Ring FAQ answer"
            })).filter(e => e.question.trim().length > 0);
        return [v, (0, n.generateFAQSchema)(R), (0, o.generateBreadcrumbSchema)([{
            name: "Home",
            url: "https://www.ultrahuman.com"
        }, {
            name: "Ultrahuman Ring",
            url: "https://www.ultrahuman.com/ring"
        }, {
            name: "Buy Ring AIR",
            url: `https://www.ultrahuman.com/${m}/ring/buy`
        }])]
    }])
}, 52126, e => {
    "use strict";
    var t = e.i(91398),
        i = e.i(13308),
        r = e.i(62114),
        a = e.i(91898);

    function n(e, n) {
        let {
            t: o,
            regionSlug: s,
            router: l
        } = n, c = e.toUpperCase();
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
        } : (0, a.isMCFCountry)(c) ? {
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
    e.s(["getOffersForRegion", () => n])
}, 20620, 48062, e => {
    "use strict";
    var t = e.i(91788),
        i = e.i(3828);

    function r(e = {}) {
        let a = (0, i.useRouter)(),
            {
                limit: n = 9,
                page: o = 1,
                requireContent: s = !1,
                enabled: l = !0,
                sort: c,
                order: h = "dsc",
                minContentLength: d,
                maxContentLength: u,
                minRating: g,
                maxRating: m,
                hasMedia: p
            } = e,
            [f, y] = (0, t.useState)([]),
            [b, w] = (0, t.useState)(!0),
            [x, v] = (0, t.useState)(null),
            [R, j] = (0, t.useState)(void 0),
            [I, A] = (0, t.useState)(o);
        return (0, t.useEffect)(() => {
            l && (async () => {
                try {
                    w(!0), v(null);
                    let e = a.locale || a.query.locale || "en",
                        [t] = e.split("-"),
                        i = e.includes("_") ? e : `${t}_${t.toUpperCase()}`,
                        r = new URL("/api/reviews", window.location.origin);
                    r.searchParams.append("locale", i), r.searchParams.append("language", t), r.searchParams.append("limit", n.toString()), r.searchParams.append("page", I.toString()), s && r.searchParams.append("require_content", "true"), Array.isArray(c) ? c.filter(Boolean).forEach(e => r.searchParams.append("sort", e)) : "string" == typeof c && "" !== c.trim() && c.split(",").map(e => e.trim()).filter(Boolean).forEach(e => r.searchParams.append("sort", e)), h && r.searchParams.append("order", h), "number" == typeof d && r.searchParams.append("min_content_length", String(d)), "number" == typeof u && r.searchParams.append("max_content_length", String(u)), "number" == typeof g && r.searchParams.append("min_rating", String(g)), "number" == typeof m && r.searchParams.append("max_rating", String(m)), "boolean" == typeof p && r.searchParams.append("has_media", String(p));
                    let o = await fetch(r.href);
                    if (!o.ok) throw Error(`Failed to fetch reviews: ${o.status}`);
                    let l = await o.json();
                    1 === I ? y(l.reviews) : y(e => [...e, ...l.reviews]), j(l.pagination)
                } catch (e) {
                    console.error("Error fetching reviews:", e), v("Failed to load reviews")
                } finally {
                    w(!1)
                }
            })()
        }, [a.locale, a.query.locale, n, I, s, l, c, h, d, u, g, m, p, a]), (0, t.useEffect)(() => {
            A(1), y([])
        }, [n, s, c, h, d, u, g, m, p]), {
            reviews: f,
            loading: b,
            error: x,
            pagination: R,
            loadMore: () => {
                R ? .has_next && !b && A(e => e + 1)
            },
            reset: () => {
                A(1), y([])
            },
            hasMore: R ? .has_next || !1
        }
    }
    e.s(["useReviews", () => r], 20620);
    var a = e.i(91398),
        n = e.i(60814),
        o = e.i(26019),
        s = e.i(3473);
    let l = (0, n.default)(({
        review: e,
        className: t,
        truncateWords: i
    }) => {
        var r;
        let n, l = e.content ? i ? (r = e.content, (n = r.trim().split(/\s+/)).length <= i ? r : n.slice(0, i).join(" ") + "…") : e.content : "";
        return (0, a.jsxs)("div", {
            className: t,
            children: [e.title && (0, a.jsx)("h3", {
                className: "review-title",
                children: e.title
            }), (0, a.jsxs)("div", {
                className: "review-top-row",
                children: [(0, a.jsx)("div", {
                    className: "review-stars",
                    "aria-label": `${e.rating} out of ${e.max_rating} stars`,
                    children: (0, a.jsx)(s.FiveStarRating, {
                        rating: e.rating
                    })
                }), !!e.repeat_purchase && (0, a.jsx)("span", {
                    className: "review-repeat",
                    children: "Repeat purchase"
                })]
            }), l && (0, a.jsx)("q", {
                className: "review-content",
                children: l
            }), e.photos && e.photos.length > 0 && (0, a.jsx)("div", {
                className: "review-image",
                children: (0, a.jsx)(o.default, {
                    src: e.photos[0],
                    alt: e.title || "Review image",
                    width: 400,
                    height: 300
                })
            }), (0, a.jsx)("div", {
                className: "review-footer",
                children: e.name && (0, a.jsx)("span", {
                    className: "review-author",
                    children: e.name
                })
            })]
        })
    }).withConfig({
        displayName: "ReviewCard",
        componentId: "sc-de22df08-0"
    })
    `
  background: #ffffff;
  border-radius: 16px;
  padding: 24px;
  border: 1px solid #0000001a;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  break-inside: avoid;
  margin-bottom: 20px;
  opacity: 1;

  @media (max-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    padding: 16px;
    margin-bottom: 16px;
  }

  .review-title {
    font-size: 20px;
    font-weight: 500;
    line-height: 26px;
    letter-spacing: -0.4px;
    color: #000000;
    margin: 0;
  }

  .review-top-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    margin: 0;
  }

  .review-stars {
    line-height: 1;
    display: flex;
    align-items: center;
    svg {
      height: 16px;
      width: auto;
      display: block;
    }
  }

  .review-repeat {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.32px;
    color: rgba(0, 0, 0, 0.8);
  }

  .review-content {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.32px;
    color: rgba(0, 0, 0, 0.9);
    margin: 0;
  }

  .review-footer {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: auto;
    color: #00000066;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.32px;
  }

  // .review-footer .review-author::after {
  //   content: ' • ';
  //   padding: 0 4px;
  // }

  .review-image {
    width: 100%;
    margin-bottom: 12px;
    overflow: hidden;
    border-radius: 12px;
    background: rgba(0, 0, 0, 0.05);

    img {
      width: 100%;
      height: auto;
      display: block;
      object-fit: cover;
    }
  }

  @media (max-width: ${({theme:e})=>e.globalV2.md.maxWidth}) {
    .review-title {
      font-size: 18px;
      line-height: 24px;
    }

    .review-content {
      font-size: 15px;
      line-height: 22px;
    }

    .review-stars svg {
      height: 14px;
    }

    .review-image img {
      max-height: 180px;
    }

    .review-footer {
      font-size: 14px;
      line-height: 20px;
    }
  }
`;
    e.s(["ReviewCard", 0, l], 48062)
}, 4725, 25939, e => {
    "use strict";
    var t = e.i(91398),
        i = e.i(60814);
    let r = {
        title: "Still thinking it over?",
        subtitle: "Here's 10% off to help you decide",
        ctaText: "Claim My Discount",
        closeAriaLabel: "Close discount modal"
    };
    e.s(["ANALYTICS_EVENTS", 0, {
        ELIGIBLE: "retouch_flow_eligible",
        MODAL_SHOWN: "retouch_flow_modal_shown",
        MODAL_CLOSED: "retouch_flow_modal_closed",
        CTA_CLICKED: "retouch_flow_cta_clicked",
        DISCOUNT_CLAIMED: "retouch_flow_discount_claimed",
        SUPPRESSED_BY_CAMPAIGN: "retouch_flow_suppressed_by_campaign",
        SUPPRESSED_BY_AFFILIATE: "retouch_flow_suppressed_by_affiliate"
    }, "BUY_PAGE_PATTERN", 0, "/ring/buy", "DEFAULT_RETOUCH_DATA", 0, {
        modalShown: !1,
        discountClaimed: !1
    }, "GTM_EVENTS", 0, {
        ELIGIBLE: "retouchFlowEligible",
        MODAL_SHOWN: "retouchFlowModalShown",
        MODAL_CLOSED: "retouchFlowModalClosed",
        CTA_CLICKED: "retouchFlowCtaClicked",
        DISCOUNT_CLAIMED: "retouchFlowDiscountClaimed",
        SUPPRESSED_BY_CAMPAIGN: "retouchFlowSuppressedByCampaign",
        SUPPRESSED_BY_AFFILIATE: "retouchFlowSuppressedByAffiliate"
    }, "MODAL_CONTENT", 0, r, "MODAL_DELAY_MS", 0, 3e3, "RETOUCH_AFFILIATE_CODE", 0, "retouch", "RETOUCH_STORAGE_KEY", 0, "ultrahuman_retouch_flow", "VISITS_THRESHOLD", 0, 4], 25939);
    var a = e.i(33535),
        n = e.i(21666);
    let o = i.default.div.withConfig({
        displayName: "RetouchModalContent__Container",
        componentId: "sc-9f0a2fb2-0"
    })
    `
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (min-width: ${({theme:e})=>e.globalV2.sm.maxWidth}) {
    width: 750px;
    max-width: 750px;
    flex-direction: row;
    align-items: center;
  }
`, s = i.default.div.withConfig({
        displayName: "RetouchModalContent__ImageContainer",
        componentId: "sc-9f0a2fb2-1"
    })
    `
  flex-shrink: 0;
  width: 100%;
  height: auto;
  aspect-ratio: 1/0.8;
  position: relative;

  @media (min-width: ${({theme:e})=>e.globalV2.sm.maxWidth}) {
    width: 50%;
    height: 400px;
  }

  img {
    object-fit: cover;
  }
`, l = i.default.div.withConfig({
        displayName: "RetouchModalContent__TextContainer",
        componentId: "sc-9f0a2fb2-2"
    })
    `
  position: relative;
  padding: 24px 24px 32px;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;

  @media (min-width: ${({theme:e})=>e.globalV2.sm.maxWidth}) {
    padding: 24px;
    text-align: left;
    align-items: flex-start;
    justify-content: flex-start;
    height: 400px; /* Match image height */
  }
`, c = i.default.button.withConfig({
        displayName: "RetouchModalContent__CloseButton",
        componentId: "sc-9f0a2fb2-3"
    })
    `
  position: absolute;
  right: 16px;
  top: 16px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  display: grid;
  place-items: center;
  cursor: pointer;
  z-index: 10;

  /* Mobile: Dark background with white icon (over dark image) */
  background: rgba(0, 0, 0, 0.5);

  svg {
    width: 16px;

    path {
      stroke: #ffffff88;
    }
  }

  /* Desktop: Light background with dark icon (over light text area) */
  @media (min-width: ${({theme:e})=>e.globalV2.sm.maxWidth}) {
    background: rgba(0, 0, 0, 0.08);

    svg path {
      stroke: #000;
    }
  }
`, h = i.default.h3.withConfig({
        displayName: "RetouchModalContent__Headline",
        componentId: "sc-9f0a2fb2-4"
    })
    `
  font-size: 32px;
  font-weight: 500;

  @media (min-width: ${({theme:e})=>e.globalV2.sm.maxWidth}) {
    font-size: 40px;
  }
`, d = i.default.p.withConfig({
        displayName: "RetouchModalContent__Description",
        componentId: "sc-9f0a2fb2-5"
    })
    `
  color: rgba(0, 0, 0, 0.7);
  font-size: 14px;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: -0.64px;

  @media (min-width: ${({theme:e})=>e.globalV2.sm.maxWidth}) {
    font-size: 16px;
  }

  &.bold {
    font-weight: 500;
  }
`, u = i.default.span.withConfig({
        displayName: "RetouchModalContent__BoldText",
        componentId: "sc-9f0a2fb2-6"
    })
    `
  font-weight: 500;
`, g = i.default.button.withConfig({
        displayName: "RetouchModalContent__CTAButton",
        componentId: "sc-9f0a2fb2-7"
    })
    `
  margin-top: 12px;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  padding: 8px 20px;
  border: none;
  border-radius: 40px;
  background: #0279e8;
  width: fit-content;
  cursor: pointer;
  transition: background 0.2s ease;

  @media (min-width: ${({theme:e})=>e.globalV2.sm.maxWidth}) {
    margin-top: auto; /* Push to bottom on desktop */
  }

  &:hover {
    background: #0066cc;
  }

  &:active {
    transform: scale(0.98);
  }

  &:focus {
    outline: 2px solid #0279e8;
    outline-offset: 2px;
  }
`;
    e.s(["RetouchModalContent", 0, ({
        onClaimDiscount: e,
        onClose: i
    }) => (0, t.jsxs)(o, {
        children: [(0, t.jsx)(c, {
            onClick: i,
            "aria-label": r.closeAriaLabel,
            type: "button",
            children: (0, t.jsx)(a.CrossDark, {})
        }), (0, t.jsx)(s, {
            children: (0, t.jsx)(n.CustomImage, {
                src: "web_v2/offer_modal/brg-modal-sq-hand-2.png",
                fill: !0,
                alt: ""
            })
        }), (0, t.jsxs)(l, {
            children: [(0, t.jsx)(h, {
                children: "Make it yours"
            }), (0, t.jsxs)(d, {
                children: ["We know choosing the right health companion takes thought.", (0, t.jsx)("br", {}), (0, t.jsx)("br", {}), "Enjoy ", (0, t.jsx)(u, {
                    children: "20% off"
                }), " on Ring AIR when you're ready."]
            }), (0, t.jsx)(g, {
                onClick: e,
                type: "button",
                className: "gtm",
                "data-gtm-action": "retouch_flow_claim_discount",
                children: "Unlock exclusive pricing"
            })]
        })]
    })], 4725)
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