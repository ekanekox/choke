(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 51754, 18421, t => {
    "use strict";
    t.i(50461);
    var a, i, n = t.i(59207),
        r = t.i(82702),
        o = t.i(13458),
        h = ((a = {}).SILVER_HALO = "SILVER_HALO", a.GOLD_HALO = "GOLD_HALO", a.NONE = "NONE", a),
        c = ((i = {}).SINGLE = "SINGLE", i.DUO = "DUO", i);
    t.s(["RingStackType", () => h, "STACK_OPTIONS", 0, [{
        id: "SILVER_HALO",
        titleKey: "ring.productSelection.stacking.silverHalo.title",
        descriptionKey: "ring.productSelection.stacking.silverHalo.description",
        thumbnail: "web_v2/ring-buy/color-cta/ss-3.png",
        isRecommended: !0
    }, {
        id: "GOLD_HALO",
        titleKey: "ring.productSelection.stacking.goldHalo.title",
        descriptionKey: "ring.productSelection.stacking.goldHalo.description",
        thumbnail: "web_v2/ring-buy/color-cta/bg-3.png",
        isRecommended: !1
    }], "STACK_SUB_VARIANTS", 0, [{
        id: "SINGLE",
        titleKey: "ring.productSelection.stacking.singleRing.title",
        descriptionKey: "ring.productSelection.stacking.singleRing.description",
        isRecommended: !1,
        showPriceInTitle: !1,
        thumbnails: {
            SILVER_HALO: "web_v2/ring-buy/stacking_options/silver_single.png",
            GOLD_HALO: "web_v2/ring-buy/stacking_options/gold_single.png"
        }
    }, {
        id: "DUO",
        titleKey: "ring.productSelection.stacking.duoRings.title",
        descriptionKey: "ring.productSelection.stacking.duoRings.description",
        isRecommended: !0,
        showPriceInTitle: !0,
        thumbnails: {
            SILVER_HALO: "web_v2/ring-buy/stacking_options/silver_duo.png",
            GOLD_HALO: "web_v2/ring-buy/stacking_options/gold_duo.png"
        }
    }], "StackVariant", () => c], 18421);
    let u = {
            variantId: "55489464795209",
            shopifyVariantId: "gid://shopify/ProductVariant/55489464795209",
            checkoutUrl: "https://uhtesting.myshopify.com/cart/55489464795209:1?channel=buy_button"
        },
        s = Object.values(r.RingSizes).reduce((t, a) => ("number" == typeof a && (t[a] = { ...u
        }), t), {}),
        y = (0, o.buildAccessoryStoreConfig)({
            [n.ShopifyStore.IN]: {
                price: 4999,
                variants: {
                    [r.RingSizes.FIVE]: {
                        variantId: "44656300064838",
                        shopifyVariantId: "gid://shopify/ProductVariant/44656300064838",
                        checkoutUrl: "https://ultrahumanstore.myshopify.com/cart/44656300064838:1?channel=buy_button"
                    },
                    [r.RingSizes.SIX]: {
                        variantId: "44656300097606",
                        shopifyVariantId: "gid://shopify/ProductVariant/44656300097606",
                        checkoutUrl: "https://ultrahumanstore.myshopify.com/cart/44656300097606:1?channel=buy_button"
                    },
                    [r.RingSizes.SEVEN]: {
                        variantId: "44656300130374",
                        shopifyVariantId: "gid://shopify/ProductVariant/44656300130374",
                        checkoutUrl: "https://ultrahumanstore.myshopify.com/cart/44656300130374:1?channel=buy_button"
                    },
                    [r.RingSizes.EIGHT]: {
                        variantId: "44656300163142",
                        shopifyVariantId: "gid://shopify/ProductVariant/44656300163142",
                        checkoutUrl: "https://ultrahumanstore.myshopify.com/cart/44656300163142:1?channel=buy_button"
                    },
                    [r.RingSizes.NINE]: {
                        variantId: "44656300195910",
                        shopifyVariantId: "gid://shopify/ProductVariant/44656300195910",
                        checkoutUrl: "https://ultrahumanstore.myshopify.com/cart/44656300195910:1?channel=buy_button"
                    },
                    [r.RingSizes.TEN]: {
                        variantId: "44656300228678",
                        shopifyVariantId: "gid://shopify/ProductVariant/44656300228678",
                        checkoutUrl: "https://ultrahumanstore.myshopify.com/cart/44656300228678:1?channel=buy_button"
                    },
                    [r.RingSizes.ELEVEN]: {
                        variantId: "44656300261446",
                        shopifyVariantId: "gid://shopify/ProductVariant/44656300261446",
                        checkoutUrl: "https://ultrahumanstore.myshopify.com/cart/44656300261446:1?channel=buy_button"
                    },
                    [r.RingSizes.TWELVE]: {
                        variantId: "44656300294214",
                        shopifyVariantId: "gid://shopify/ProductVariant/44656300294214",
                        checkoutUrl: "https://ultrahumanstore.myshopify.com/cart/44656300294214:1?channel=buy_button"
                    },
                    [r.RingSizes.THIRTEEN]: {
                        variantId: "44656300326982",
                        shopifyVariantId: "gid://shopify/ProductVariant/44656300326982",
                        checkoutUrl: "https://ultrahumanstore.myshopify.com/cart/44656300326982:1?channel=buy_button"
                    },
                    [r.RingSizes.FOURTEEN]: {
                        variantId: "44656300359750",
                        shopifyVariantId: "gid://shopify/ProductVariant/44656300359750",
                        checkoutUrl: "https://ultrahumanstore.myshopify.com/cart/44656300359750:1?channel=buy_button"
                    },
                    [r.RingSizes.OPEN]: {
                        variantId: "44663737974854",
                        shopifyVariantId: "gid://shopify/ProductVariant/44663737974854",
                        checkoutUrl: "https://ultrahumanstore.myshopify.com/cart/44663737974854:1?channel=buy_button"
                    }
                }
            },
            [n.ShopifyStore.AE]: {
                price: 179,
                variants: {
                    [r.RingSizes.FIVE]: {
                        variantId: "62539965563251",
                        shopifyVariantId: "gid://shopify/ProductVariant/62539965563251",
                        checkoutUrl: "https://ultrahuman-mena.myshopify.com/cart/62539965563251:1?channel=buy_button"
                    },
                    [r.RingSizes.SIX]: {
                        variantId: "62539965596019",
                        shopifyVariantId: "gid://shopify/ProductVariant/62539965596019",
                        checkoutUrl: "https://ultrahuman-mena.myshopify.com/cart/62539965596019:1?channel=buy_button"
                    },
                    [r.RingSizes.SEVEN]: {
                        variantId: "62539965628787",
                        shopifyVariantId: "gid://shopify/ProductVariant/62539965628787",
                        checkoutUrl: "https://ultrahuman-mena.myshopify.com/cart/62539965628787:1?channel=buy_button"
                    },
                    [r.RingSizes.EIGHT]: {
                        variantId: "62539965661555",
                        shopifyVariantId: "gid://shopify/ProductVariant/62539965661555",
                        checkoutUrl: "https://ultrahuman-mena.myshopify.com/cart/62539965661555:1?channel=buy_button"
                    },
                    [r.RingSizes.NINE]: {
                        variantId: "62539965694323",
                        shopifyVariantId: "gid://shopify/ProductVariant/62539965694323",
                        checkoutUrl: "https://ultrahuman-mena.myshopify.com/cart/62539965694323:1?channel=buy_button"
                    },
                    [r.RingSizes.TEN]: {
                        variantId: "62539965727091",
                        shopifyVariantId: "gid://shopify/ProductVariant/62539965727091",
                        checkoutUrl: "https://ultrahuman-mena.myshopify.com/cart/62539965727091:1?channel=buy_button"
                    },
                    [r.RingSizes.ELEVEN]: {
                        variantId: "62539965759859",
                        shopifyVariantId: "gid://shopify/ProductVariant/62539965759859",
                        checkoutUrl: "https://ultrahuman-mena.myshopify.com/cart/62539965759859:1?channel=buy_button"
                    },
                    [r.RingSizes.TWELVE]: {
                        variantId: "62539965792627",
                        shopifyVariantId: "gid://shopify/ProductVariant/62539965792627",
                        checkoutUrl: "https://ultrahuman-mena.myshopify.com/cart/62539965792627:1?channel=buy_button"
                    },
                    [r.RingSizes.THIRTEEN]: {
                        variantId: "62539965825395",
                        shopifyVariantId: "gid://shopify/ProductVariant/62539965825395",
                        checkoutUrl: "https://ultrahuman-mena.myshopify.com/cart/62539965825395:1?channel=buy_button"
                    },
                    [r.RingSizes.FOURTEEN]: {
                        variantId: "62539965858163",
                        shopifyVariantId: "gid://shopify/ProductVariant/62539965858163",
                        checkoutUrl: "https://ultrahuman-mena.myshopify.com/cart/62539965858163:1?channel=buy_button"
                    },
                    [r.RingSizes.OPEN]: {
                        variantId: "62547259326835",
                        shopifyVariantId: "gid://shopify/ProductVariant/62547259326835",
                        checkoutUrl: "https://ultrahuman-mena.myshopify.com/cart/62547259326835:1?channel=buy_button"
                    }
                }
            },
            [n.ShopifyStore.US]: {
                price: 49,
                variants: {
                    [r.RingSizes.FIVE]: {
                        variantId: "42586878902368",
                        shopifyVariantId: "gid://shopify/ProductVariant/42586878902368",
                        checkoutUrl: "https://stelcore-x-ultrahuman.myshopify.com/cart/42586878902368:1?channel=buy_button"
                    },
                    [r.RingSizes.SIX]: {
                        variantId: "42586878935136",
                        shopifyVariantId: "gid://shopify/ProductVariant/42586878935136",
                        checkoutUrl: "https://stelcore-x-ultrahuman.myshopify.com/cart/42586878935136:1?channel=buy_button"
                    },
                    [r.RingSizes.SEVEN]: {
                        variantId: "42586878967904",
                        shopifyVariantId: "gid://shopify/ProductVariant/42586878967904",
                        checkoutUrl: "https://stelcore-x-ultrahuman.myshopify.com/cart/42586878967904:1?channel=buy_button"
                    },
                    [r.RingSizes.EIGHT]: {
                        variantId: "42586879000672",
                        shopifyVariantId: "gid://shopify/ProductVariant/42586879000672",
                        checkoutUrl: "https://stelcore-x-ultrahuman.myshopify.com/cart/42586879000672:1?channel=buy_button"
                    },
                    [r.RingSizes.NINE]: {
                        variantId: "42586879033440",
                        shopifyVariantId: "gid://shopify/ProductVariant/42586879033440",
                        checkoutUrl: "https://stelcore-x-ultrahuman.myshopify.com/cart/42586879033440:1?channel=buy_button"
                    },
                    [r.RingSizes.TEN]: {
                        variantId: "42586879066208",
                        shopifyVariantId: "gid://shopify/ProductVariant/42586879066208",
                        checkoutUrl: "https://stelcore-x-ultrahuman.myshopify.com/cart/42586879066208:1?channel=buy_button"
                    },
                    [r.RingSizes.ELEVEN]: {
                        variantId: "42586879098976",
                        shopifyVariantId: "gid://shopify/ProductVariant/42586879098976",
                        checkoutUrl: "https://stelcore-x-ultrahuman.myshopify.com/cart/42586879098976:1?channel=buy_button"
                    },
                    [r.RingSizes.TWELVE]: {
                        variantId: "42586879131744",
                        shopifyVariantId: "gid://shopify/ProductVariant/42586879131744",
                        checkoutUrl: "https://stelcore-x-ultrahuman.myshopify.com/cart/42586879131744:1?channel=buy_button"
                    },
                    [r.RingSizes.THIRTEEN]: {
                        variantId: "42586879164512",
                        shopifyVariantId: "gid://shopify/ProductVariant/42586879164512",
                        checkoutUrl: "https://stelcore-x-ultrahuman.myshopify.com/cart/42586879164512:1?channel=buy_button"
                    },
                    [r.RingSizes.FOURTEEN]: {
                        variantId: "42586879197280",
                        shopifyVariantId: "gid://shopify/ProductVariant/42586879197280",
                        checkoutUrl: "https://stelcore-x-ultrahuman.myshopify.com/cart/42586879197280:1?channel=buy_button"
                    },
                    [r.RingSizes.OPEN]: {
                        variantId: "42591954075744",
                        shopifyVariantId: "gid://shopify/ProductVariant/42591954075744",
                        checkoutUrl: "https://stelcore-x-ultrahuman.myshopify.com/cart/42591954075744:1?channel=buy_button"
                    }
                }
            },
            [n.ShopifyStore.CA]: {
                price: 65
            },
            [n.ShopifyStore.ROW]: {
                price: 49,
                variants: {
                    [r.RingSizes.FIVE]: {
                        variantId: "43985392140348",
                        shopifyVariantId: "gid://shopify/ProductVariant/43985392140348",
                        checkoutUrl: "https://ultrahuman-us.myshopify.com/cart/43985392140348:1?channel=buy_button"
                    },
                    [r.RingSizes.SIX]: {
                        variantId: "43985392173116",
                        shopifyVariantId: "gid://shopify/ProductVariant/43985392173116",
                        checkoutUrl: "https://ultrahuman-us.myshopify.com/cart/43985392173116:1?channel=buy_button"
                    },
                    [r.RingSizes.SEVEN]: {
                        variantId: "43985392205884",
                        shopifyVariantId: "gid://shopify/ProductVariant/43985392205884",
                        checkoutUrl: "https://ultrahuman-us.myshopify.com/cart/43985392205884:1?channel=buy_button"
                    },
                    [r.RingSizes.EIGHT]: {
                        variantId: "43985392238652",
                        shopifyVariantId: "gid://shopify/ProductVariant/43985392238652",
                        checkoutUrl: "https://ultrahuman-us.myshopify.com/cart/43985392238652:1?channel=buy_button"
                    },
                    [r.RingSizes.NINE]: {
                        variantId: "43985392271420",
                        shopifyVariantId: "gid://shopify/ProductVariant/43985392271420",
                        checkoutUrl: "https://ultrahuman-us.myshopify.com/cart/43985392271420:1?channel=buy_button"
                    },
                    [r.RingSizes.TEN]: {
                        variantId: "43985392304188",
                        shopifyVariantId: "gid://shopify/ProductVariant/43985392304188",
                        checkoutUrl: "https://ultrahuman-us.myshopify.com/cart/43985392304188:1?channel=buy_button"
                    },
                    [r.RingSizes.ELEVEN]: {
                        variantId: "43985392336956",
                        shopifyVariantId: "gid://shopify/ProductVariant/43985392336956",
                        checkoutUrl: "https://ultrahuman-us.myshopify.com/cart/43985392336956:1?channel=buy_button"
                    },
                    [r.RingSizes.TWELVE]: {
                        variantId: "43985392369724",
                        shopifyVariantId: "gid://shopify/ProductVariant/43985392369724",
                        checkoutUrl: "https://ultrahuman-us.myshopify.com/cart/43985392369724:1?channel=buy_button"
                    },
                    [r.RingSizes.THIRTEEN]: {
                        variantId: "43985392402492",
                        shopifyVariantId: "gid://shopify/ProductVariant/43985392402492",
                        checkoutUrl: "https://ultrahuman-us.myshopify.com/cart/43985392402492:1?channel=buy_button"
                    },
                    [r.RingSizes.FOURTEEN]: {
                        variantId: "43985392435260",
                        shopifyVariantId: "gid://shopify/ProductVariant/43985392435260",
                        checkoutUrl: "https://ultrahuman-us.myshopify.com/cart/43985392435260:1?channel=buy_button"
                    },
                    [r.RingSizes.OPEN]: {
                        variantId: "43991079354428",
                        shopifyVariantId: "gid://shopify/ProductVariant/43991079354428",
                        checkoutUrl: "https://ultrahuman-us.myshopify.com/cart/43991079354428:1?channel=buy_button"
                    }
                }
            },
            [n.ShopifyStore.EU]: {
                price: 45,
                variants: {
                    [r.RingSizes.FIVE]: {
                        variantId: "57297787748726",
                        shopifyVariantId: "gid://shopify/ProductVariant/57297787748726",
                        checkoutUrl: "https://ultrahuman-eu-uk.myshopify.com/cart/57297787748726:1?channel=buy_button"
                    },
                    [r.RingSizes.SIX]: {
                        variantId: "57297787781494",
                        shopifyVariantId: "gid://shopify/ProductVariant/57297787781494",
                        checkoutUrl: "https://ultrahuman-eu-uk.myshopify.com/cart/57297787781494:1?channel=buy_button"
                    },
                    [r.RingSizes.SEVEN]: {
                        variantId: "57297787814262",
                        shopifyVariantId: "gid://shopify/ProductVariant/57297787814262",
                        checkoutUrl: "https://ultrahuman-eu-uk.myshopify.com/cart/57297787814262:1?channel=buy_button"
                    },
                    [r.RingSizes.EIGHT]: {
                        variantId: "57297787847030",
                        shopifyVariantId: "gid://shopify/ProductVariant/57297787847030",
                        checkoutUrl: "https://ultrahuman-eu-uk.myshopify.com/cart/57297787847030:1?channel=buy_button"
                    },
                    [r.RingSizes.NINE]: {
                        variantId: "57297787879798",
                        shopifyVariantId: "gid://shopify/ProductVariant/57297787879798",
                        checkoutUrl: "https://ultrahuman-eu-uk.myshopify.com/cart/57297787879798:1?channel=buy_button"
                    },
                    [r.RingSizes.TEN]: {
                        variantId: "57297787912566",
                        shopifyVariantId: "gid://shopify/ProductVariant/57297787912566",
                        checkoutUrl: "https://ultrahuman-eu-uk.myshopify.com/cart/57297787912566:1?channel=buy_button"
                    },
                    [r.RingSizes.ELEVEN]: {
                        variantId: "57297787945334",
                        shopifyVariantId: "gid://shopify/ProductVariant/57297787945334",
                        checkoutUrl: "https://ultrahuman-eu-uk.myshopify.com/cart/57297787945334:1?channel=buy_button"
                    },
                    [r.RingSizes.TWELVE]: {
                        variantId: "57297787978102",
                        shopifyVariantId: "gid://shopify/ProductVariant/57297787978102",
                        checkoutUrl: "https://ultrahuman-eu-uk.myshopify.com/cart/57297787978102:1?channel=buy_button"
                    },
                    [r.RingSizes.THIRTEEN]: {
                        variantId: "57297788010870",
                        shopifyVariantId: "gid://shopify/ProductVariant/57297788010870",
                        checkoutUrl: "https://ultrahuman-eu-uk.myshopify.com/cart/57297788010870:1?channel=buy_button"
                    },
                    [r.RingSizes.FOURTEEN]: {
                        variantId: "57297788043638",
                        shopifyVariantId: "gid://shopify/ProductVariant/57297788043638",
                        checkoutUrl: "https://ultrahuman-eu-uk.myshopify.com/cart/57297788043638:1?channel=buy_button"
                    },
                    [r.RingSizes.OPEN]: {
                        variantId: "57321128264054",
                        shopifyVariantId: "gid://shopify/ProductVariant/57321128264054",
                        checkoutUrl: "https://ultrahuman-eu-uk.myshopify.com/cart/57321128264054:1?channel=buy_button"
                    }
                }
            },
            [n.ShopifyStore.GB]: {
                price: 39
            },
            [n.ShopifyStore.AU]: {
                price: 69
            },
            [n.ShopifyStore.ZA]: {
                price: 855
            }
        }),
        e = (0, o.buildAccessoryStoreConfig)({
            [n.ShopifyStore.IN]: {
                price: 4999,
                variants: {
                    [r.RingSizes.FIVE]: {
                        variantId: "44656300392518",
                        shopifyVariantId: "gid://shopify/ProductVariant/44656300392518",
                        checkoutUrl: "https://ultrahumanstore.myshopify.com/cart/44656300392518:1?channel=buy_button"
                    },
                    [r.RingSizes.SIX]: {
                        variantId: "44656300425286",
                        shopifyVariantId: "gid://shopify/ProductVariant/44656300425286",
                        checkoutUrl: "https://ultrahumanstore.myshopify.com/cart/44656300425286:1?channel=buy_button"
                    },
                    [r.RingSizes.SEVEN]: {
                        variantId: "44656300458054",
                        shopifyVariantId: "gid://shopify/ProductVariant/44656300458054",
                        checkoutUrl: "https://ultrahumanstore.myshopify.com/cart/44656300458054:1?channel=buy_button"
                    },
                    [r.RingSizes.EIGHT]: {
                        variantId: "44656300490822",
                        shopifyVariantId: "gid://shopify/ProductVariant/44656300490822",
                        checkoutUrl: "https://ultrahumanstore.myshopify.com/cart/44656300490822:1?channel=buy_button"
                    },
                    [r.RingSizes.NINE]: {
                        variantId: "44656300523590",
                        shopifyVariantId: "gid://shopify/ProductVariant/44656300523590",
                        checkoutUrl: "https://ultrahumanstore.myshopify.com/cart/44656300523590:1?channel=buy_button"
                    },
                    [r.RingSizes.TEN]: {
                        variantId: "44656300556358",
                        shopifyVariantId: "gid://shopify/ProductVariant/44656300556358",
                        checkoutUrl: "https://ultrahumanstore.myshopify.com/cart/44656300556358:1?channel=buy_button"
                    },
                    [r.RingSizes.ELEVEN]: {
                        variantId: "44656300589126",
                        shopifyVariantId: "gid://shopify/ProductVariant/44656300589126",
                        checkoutUrl: "https://ultrahumanstore.myshopify.com/cart/44656300589126:1?channel=buy_button"
                    },
                    [r.RingSizes.TWELVE]: {
                        variantId: "44656300621894",
                        shopifyVariantId: "gid://shopify/ProductVariant/44656300621894",
                        checkoutUrl: "https://ultrahumanstore.myshopify.com/cart/44656300621894:1?channel=buy_button"
                    },
                    [r.RingSizes.THIRTEEN]: {
                        variantId: "44656300654662",
                        shopifyVariantId: "gid://shopify/ProductVariant/44656300654662",
                        checkoutUrl: "https://ultrahumanstore.myshopify.com/cart/44656300654662:1?channel=buy_button"
                    },
                    [r.RingSizes.FOURTEEN]: {
                        variantId: "44656300687430",
                        shopifyVariantId: "gid://shopify/ProductVariant/44656300687430",
                        checkoutUrl: "https://ultrahumanstore.myshopify.com/cart/44656300687430:1?channel=buy_button"
                    },
                    [r.RingSizes.OPEN]: {
                        variantId: "44663738007622",
                        shopifyVariantId: "gid://shopify/ProductVariant/44663738007622",
                        checkoutUrl: "https://ultrahumanstore.myshopify.com/cart/44663738007622:1?channel=buy_button"
                    }
                }
            },
            [n.ShopifyStore.AE]: {
                price: 179,
                variants: {
                    [r.RingSizes.FIVE]: {
                        variantId: "62539965890931",
                        shopifyVariantId: "gid://shopify/ProductVariant/62539965890931",
                        checkoutUrl: "https://ultrahuman-mena.myshopify.com/cart/62539965890931:1?channel=buy_button"
                    },
                    [r.RingSizes.SIX]: {
                        variantId: "62539965923699",
                        shopifyVariantId: "gid://shopify/ProductVariant/62539965923699",
                        checkoutUrl: "https://ultrahuman-mena.myshopify.com/cart/62539965923699:1?channel=buy_button"
                    },
                    [r.RingSizes.SEVEN]: {
                        variantId: "62539965956467",
                        shopifyVariantId: "gid://shopify/ProductVariant/62539965956467",
                        checkoutUrl: "https://ultrahuman-mena.myshopify.com/cart/62539965956467:1?channel=buy_button"
                    },
                    [r.RingSizes.EIGHT]: {
                        variantId: "62539965989235",
                        shopifyVariantId: "gid://shopify/ProductVariant/62539965989235",
                        checkoutUrl: "https://ultrahuman-mena.myshopify.com/cart/62539965989235:1?channel=buy_button"
                    },
                    [r.RingSizes.NINE]: {
                        variantId: "62539966022003",
                        shopifyVariantId: "gid://shopify/ProductVariant/62539966022003",
                        checkoutUrl: "https://ultrahuman-mena.myshopify.com/cart/62539966022003:1?channel=buy_button"
                    },
                    [r.RingSizes.TEN]: {
                        variantId: "62539966054771",
                        shopifyVariantId: "gid://shopify/ProductVariant/62539966054771",
                        checkoutUrl: "https://ultrahuman-mena.myshopify.com/cart/62539966054771:1?channel=buy_button"
                    },
                    [r.RingSizes.ELEVEN]: {
                        variantId: "62539966087539",
                        shopifyVariantId: "gid://shopify/ProductVariant/62539966087539",
                        checkoutUrl: "https://ultrahuman-mena.myshopify.com/cart/62539966087539:1?channel=buy_button"
                    },
                    [r.RingSizes.TWELVE]: {
                        variantId: "62539966120307",
                        shopifyVariantId: "gid://shopify/ProductVariant/62539966120307",
                        checkoutUrl: "https://ultrahuman-mena.myshopify.com/cart/62539966120307:1?channel=buy_button"
                    },
                    [r.RingSizes.THIRTEEN]: {
                        variantId: "62539966153075",
                        shopifyVariantId: "gid://shopify/ProductVariant/62539966153075",
                        checkoutUrl: "https://ultrahuman-mena.myshopify.com/cart/62539966153075:1?channel=buy_button"
                    },
                    [r.RingSizes.FOURTEEN]: {
                        variantId: "62539966185843",
                        shopifyVariantId: "gid://shopify/ProductVariant/62539966185843",
                        checkoutUrl: "https://ultrahuman-mena.myshopify.com/cart/62539966185843:1?channel=buy_button"
                    },
                    [r.RingSizes.OPEN]: {
                        variantId: "62547259359603",
                        shopifyVariantId: "gid://shopify/ProductVariant/62547259359603",
                        checkoutUrl: "https://ultrahuman-mena.myshopify.com/cart/62547259359603:1?channel=buy_button"
                    }
                }
            },
            [n.ShopifyStore.US]: {
                price: 49,
                variants: {
                    [r.RingSizes.FIVE]: {
                        variantId: "42586879230048",
                        shopifyVariantId: "gid://shopify/ProductVariant/42586879230048",
                        checkoutUrl: "https://stelcore-x-ultrahuman.myshopify.com/cart/42586879230048:1?channel=buy_button"
                    },
                    [r.RingSizes.SIX]: {
                        variantId: "42586879262816",
                        shopifyVariantId: "gid://shopify/ProductVariant/42586879262816",
                        checkoutUrl: "https://stelcore-x-ultrahuman.myshopify.com/cart/42586879262816:1?channel=buy_button"
                    },
                    [r.RingSizes.SEVEN]: {
                        variantId: "42586879295584",
                        shopifyVariantId: "gid://shopify/ProductVariant/42586879295584",
                        checkoutUrl: "https://stelcore-x-ultrahuman.myshopify.com/cart/42586879295584:1?channel=buy_button"
                    },
                    [r.RingSizes.EIGHT]: {
                        variantId: "42586879328352",
                        shopifyVariantId: "gid://shopify/ProductVariant/42586879328352",
                        checkoutUrl: "https://stelcore-x-ultrahuman.myshopify.com/cart/42586879328352:1?channel=buy_button"
                    },
                    [r.RingSizes.NINE]: {
                        variantId: "42586879361120",
                        shopifyVariantId: "gid://shopify/ProductVariant/42586879361120",
                        checkoutUrl: "https://stelcore-x-ultrahuman.myshopify.com/cart/42586879361120:1?channel=buy_button"
                    },
                    [r.RingSizes.TEN]: {
                        variantId: "42586879393888",
                        shopifyVariantId: "gid://shopify/ProductVariant/42586879393888",
                        checkoutUrl: "https://stelcore-x-ultrahuman.myshopify.com/cart/42586879393888:1?channel=buy_button"
                    },
                    [r.RingSizes.ELEVEN]: {
                        variantId: "42586879426656",
                        shopifyVariantId: "gid://shopify/ProductVariant/42586879426656",
                        checkoutUrl: "https://stelcore-x-ultrahuman.myshopify.com/cart/42586879426656:1?channel=buy_button"
                    },
                    [r.RingSizes.TWELVE]: {
                        variantId: "42586879459424",
                        shopifyVariantId: "gid://shopify/ProductVariant/42586879459424",
                        checkoutUrl: "https://stelcore-x-ultrahuman.myshopify.com/cart/42586879459424:1?channel=buy_button"
                    },
                    [r.RingSizes.THIRTEEN]: {
                        variantId: "42586879492192",
                        shopifyVariantId: "gid://shopify/ProductVariant/42586879492192",
                        checkoutUrl: "https://stelcore-x-ultrahuman.myshopify.com/cart/42586879492192:1?channel=buy_button"
                    },
                    [r.RingSizes.FOURTEEN]: {
                        variantId: "42586879524960",
                        shopifyVariantId: "gid://shopify/ProductVariant/42586879524960",
                        checkoutUrl: "https://stelcore-x-ultrahuman.myshopify.com/cart/42586879524960:1?channel=buy_button"
                    },
                    [r.RingSizes.OPEN]: {
                        variantId: "42591954108512",
                        shopifyVariantId: "gid://shopify/ProductVariant/42591954108512",
                        checkoutUrl: "https://stelcore-x-ultrahuman.myshopify.com/cart/42591954108512:1?channel=buy_button"
                    }
                }
            },
            [n.ShopifyStore.CA]: {
                price: 65
            },
            [n.ShopifyStore.ROW]: {
                price: 49,
                variants: {
                    [r.RingSizes.FIVE]: {
                        variantId: "43985392468028",
                        shopifyVariantId: "gid://shopify/ProductVariant/43985392468028",
                        checkoutUrl: "https://ultrahuman-us.myshopify.com/cart/43985392468028:1?channel=buy_button"
                    },
                    [r.RingSizes.SIX]: {
                        variantId: "43985392500796",
                        shopifyVariantId: "gid://shopify/ProductVariant/43985392500796",
                        checkoutUrl: "https://ultrahuman-us.myshopify.com/cart/43985392500796:1?channel=buy_button"
                    },
                    [r.RingSizes.SEVEN]: {
                        variantId: "43985392533564",
                        shopifyVariantId: "gid://shopify/ProductVariant/43985392533564",
                        checkoutUrl: "https://ultrahuman-us.myshopify.com/cart/43985392533564:1?channel=buy_button"
                    },
                    [r.RingSizes.EIGHT]: {
                        variantId: "43985392566332",
                        shopifyVariantId: "gid://shopify/ProductVariant/43985392566332",
                        checkoutUrl: "https://ultrahuman-us.myshopify.com/cart/43985392566332:1?channel=buy_button"
                    },
                    [r.RingSizes.NINE]: {
                        variantId: "43985392599100",
                        shopifyVariantId: "gid://shopify/ProductVariant/43985392599100",
                        checkoutUrl: "https://ultrahuman-us.myshopify.com/cart/43985392599100:1?channel=buy_button"
                    },
                    [r.RingSizes.TEN]: {
                        variantId: "43985392631868",
                        shopifyVariantId: "gid://shopify/ProductVariant/43985392631868",
                        checkoutUrl: "https://ultrahuman-us.myshopify.com/cart/43985392631868:1?channel=buy_button"
                    },
                    [r.RingSizes.ELEVEN]: {
                        variantId: "43985392664636",
                        shopifyVariantId: "gid://shopify/ProductVariant/43985392664636",
                        checkoutUrl: "https://ultrahuman-us.myshopify.com/cart/43985392664636:1?channel=buy_button"
                    },
                    [r.RingSizes.TWELVE]: {
                        variantId: "43985392697404",
                        shopifyVariantId: "gid://shopify/ProductVariant/43985392697404",
                        checkoutUrl: "https://ultrahuman-us.myshopify.com/cart/43985392697404:1?channel=buy_button"
                    },
                    [r.RingSizes.THIRTEEN]: {
                        variantId: "43985392730172",
                        shopifyVariantId: "gid://shopify/ProductVariant/43985392730172",
                        checkoutUrl: "https://ultrahuman-us.myshopify.com/cart/43985392730172:1?channel=buy_button"
                    },
                    [r.RingSizes.FOURTEEN]: {
                        variantId: "43985392762940",
                        shopifyVariantId: "gid://shopify/ProductVariant/43985392762940",
                        checkoutUrl: "https://ultrahuman-us.myshopify.com/cart/43985392762940:1?channel=buy_button"
                    },
                    [r.RingSizes.OPEN]: {
                        variantId: "43991079387196",
                        shopifyVariantId: "gid://shopify/ProductVariant/43991079387196",
                        checkoutUrl: "https://ultrahuman-us.myshopify.com/cart/43991079387196:1?channel=buy_button"
                    }
                }
            },
            [n.ShopifyStore.EU]: {
                price: 45,
                variants: {
                    [r.RingSizes.FIVE]: {
                        variantId: "57297788076406",
                        shopifyVariantId: "gid://shopify/ProductVariant/57297788076406",
                        checkoutUrl: "https://ultrahuman-eu-uk.myshopify.com/cart/57297788076406:1?channel=buy_button"
                    },
                    [r.RingSizes.SIX]: {
                        variantId: "57297788109174",
                        shopifyVariantId: "gid://shopify/ProductVariant/57297788109174",
                        checkoutUrl: "https://ultrahuman-eu-uk.myshopify.com/cart/57297788109174:1?channel=buy_button"
                    },
                    [r.RingSizes.SEVEN]: {
                        variantId: "57297788141942",
                        shopifyVariantId: "gid://shopify/ProductVariant/57297788141942",
                        checkoutUrl: "https://ultrahuman-eu-uk.myshopify.com/cart/57297788141942:1?channel=buy_button"
                    },
                    [r.RingSizes.EIGHT]: {
                        variantId: "57297788174710",
                        shopifyVariantId: "gid://shopify/ProductVariant/57297788174710",
                        checkoutUrl: "https://ultrahuman-eu-uk.myshopify.com/cart/57297788174710:1?channel=buy_button"
                    },
                    [r.RingSizes.NINE]: {
                        variantId: "57297788207478",
                        shopifyVariantId: "gid://shopify/ProductVariant/57297788207478",
                        checkoutUrl: "https://ultrahuman-eu-uk.myshopify.com/cart/57297788207478:1?channel=buy_button"
                    },
                    [r.RingSizes.TEN]: {
                        variantId: "57297788240246",
                        shopifyVariantId: "gid://shopify/ProductVariant/57297788240246",
                        checkoutUrl: "https://ultrahuman-eu-uk.myshopify.com/cart/57297788240246:1?channel=buy_button"
                    },
                    [r.RingSizes.ELEVEN]: {
                        variantId: "57297788273014",
                        shopifyVariantId: "gid://shopify/ProductVariant/57297788273014",
                        checkoutUrl: "https://ultrahuman-eu-uk.myshopify.com/cart/57297788273014:1?channel=buy_button"
                    },
                    [r.RingSizes.TWELVE]: {
                        variantId: "57297788305782",
                        shopifyVariantId: "gid://shopify/ProductVariant/57297788305782",
                        checkoutUrl: "https://ultrahuman-eu-uk.myshopify.com/cart/57297788305782:1?channel=buy_button"
                    },
                    [r.RingSizes.THIRTEEN]: {
                        variantId: "57297788338550",
                        shopifyVariantId: "gid://shopify/ProductVariant/57297788338550",
                        checkoutUrl: "https://ultrahuman-eu-uk.myshopify.com/cart/57297788338550:1?channel=buy_button"
                    },
                    [r.RingSizes.FOURTEEN]: {
                        variantId: "57297788371318",
                        shopifyVariantId: "gid://shopify/ProductVariant/57297788371318",
                        checkoutUrl: "https://ultrahuman-eu-uk.myshopify.com/cart/57297788371318:1?channel=buy_button"
                    },
                    [r.RingSizes.OPEN]: {
                        variantId: "57321128296822",
                        shopifyVariantId: "gid://shopify/ProductVariant/57321128296822",
                        checkoutUrl: "https://ultrahuman-eu-uk.myshopify.com/cart/57321128296822:1?channel=buy_button"
                    }
                }
            },
            [n.ShopifyStore.GB]: {
                price: 39
            },
            [n.ShopifyStore.AU]: {
                price: 69
            },
            [n.ShopifyStore.ZA]: {
                price: 855
            }
        }),
        p = (0, o.buildAccessoryStoreConfig)({
            [n.ShopifyStore.IN]: {
                price: 8999,
                variants: {
                    [r.RingSizes.FIVE]: {
                        variantId: "44663822286918",
                        shopifyVariantId: "gid://shopify/ProductVariant/44663822286918",
                        checkoutUrl: "https://ultrahumanstore.myshopify.com/cart/44663822286918:1?channel=buy_button"
                    },
                    [r.RingSizes.SIX]: {
                        variantId: "44663822319686",
                        shopifyVariantId: "gid://shopify/ProductVariant/44663822319686",
                        checkoutUrl: "https://ultrahumanstore.myshopify.com/cart/44663822319686:1?channel=buy_button"
                    },
                    [r.RingSizes.SEVEN]: {
                        variantId: "44663822352454",
                        shopifyVariantId: "gid://shopify/ProductVariant/44663822352454",
                        checkoutUrl: "https://ultrahumanstore.myshopify.com/cart/44663822352454:1?channel=buy_button"
                    },
                    [r.RingSizes.EIGHT]: {
                        variantId: "44663822385222",
                        shopifyVariantId: "gid://shopify/ProductVariant/44663822385222",
                        checkoutUrl: "https://ultrahumanstore.myshopify.com/cart/44663822385222:1?channel=buy_button"
                    },
                    [r.RingSizes.NINE]: {
                        variantId: "44663822417990",
                        shopifyVariantId: "gid://shopify/ProductVariant/44663822417990",
                        checkoutUrl: "https://ultrahumanstore.myshopify.com/cart/44663822417990:1?channel=buy_button"
                    },
                    [r.RingSizes.TEN]: {
                        variantId: "44663822450758",
                        shopifyVariantId: "gid://shopify/ProductVariant/44663822450758",
                        checkoutUrl: "https://ultrahumanstore.myshopify.com/cart/44663822450758:1?channel=buy_button"
                    },
                    [r.RingSizes.ELEVEN]: {
                        variantId: "44663822483526",
                        shopifyVariantId: "gid://shopify/ProductVariant/44663822483526",
                        checkoutUrl: "https://ultrahumanstore.myshopify.com/cart/44663822483526:1?channel=buy_button"
                    },
                    [r.RingSizes.TWELVE]: {
                        variantId: "44663822516294",
                        shopifyVariantId: "gid://shopify/ProductVariant/44663822516294",
                        checkoutUrl: "https://ultrahumanstore.myshopify.com/cart/44663822516294:1?channel=buy_button"
                    },
                    [r.RingSizes.THIRTEEN]: {
                        variantId: "44663822549062",
                        shopifyVariantId: "gid://shopify/ProductVariant/44663822549062",
                        checkoutUrl: "https://ultrahumanstore.myshopify.com/cart/44663822549062:1?channel=buy_button"
                    },
                    [r.RingSizes.FOURTEEN]: {
                        variantId: "44663822581830",
                        shopifyVariantId: "gid://shopify/ProductVariant/44663822581830",
                        checkoutUrl: "https://ultrahumanstore.myshopify.com/cart/44663822581830:1?channel=buy_button"
                    },
                    [r.RingSizes.OPEN]: {
                        variantId: "44663822614598",
                        shopifyVariantId: "gid://shopify/ProductVariant/44663822614598",
                        checkoutUrl: "https://ultrahumanstore.myshopify.com/cart/44663822614598:1?channel=buy_button"
                    }
                }
            },
            [n.ShopifyStore.AE]: {
                price: 329,
                variants: {
                    [r.RingSizes.FIVE]: {
                        variantId: "62547400720755",
                        shopifyVariantId: "gid://shopify/ProductVariant/62547400720755",
                        checkoutUrl: "https://ultrahuman-mena.myshopify.com/cart/62547400720755:1?channel=buy_button"
                    },
                    [r.RingSizes.SIX]: {
                        variantId: "62547400753523",
                        shopifyVariantId: "gid://shopify/ProductVariant/62547400753523",
                        checkoutUrl: "https://ultrahuman-mena.myshopify.com/cart/62547400753523:1?channel=buy_button"
                    },
                    [r.RingSizes.SEVEN]: {
                        variantId: "62547400786291",
                        shopifyVariantId: "gid://shopify/ProductVariant/62547400786291",
                        checkoutUrl: "https://ultrahuman-mena.myshopify.com/cart/62547400786291:1?channel=buy_button"
                    },
                    [r.RingSizes.EIGHT]: {
                        variantId: "62547400819059",
                        shopifyVariantId: "gid://shopify/ProductVariant/62547400819059",
                        checkoutUrl: "https://ultrahuman-mena.myshopify.com/cart/62547400819059:1?channel=buy_button"
                    },
                    [r.RingSizes.NINE]: {
                        variantId: "62547400851827",
                        shopifyVariantId: "gid://shopify/ProductVariant/62547400851827",
                        checkoutUrl: "https://ultrahuman-mena.myshopify.com/cart/62547400851827:1?channel=buy_button"
                    },
                    [r.RingSizes.TEN]: {
                        variantId: "62547400884595",
                        shopifyVariantId: "gid://shopify/ProductVariant/62547400884595",
                        checkoutUrl: "https://ultrahuman-mena.myshopify.com/cart/62547400884595:1?channel=buy_button"
                    },
                    [r.RingSizes.ELEVEN]: {
                        variantId: "62547400917363",
                        shopifyVariantId: "gid://shopify/ProductVariant/62547400917363",
                        checkoutUrl: "https://ultrahuman-mena.myshopify.com/cart/62547400917363:1?channel=buy_button"
                    },
                    [r.RingSizes.TWELVE]: {
                        variantId: "62547400950131",
                        shopifyVariantId: "gid://shopify/ProductVariant/62547400950131",
                        checkoutUrl: "https://ultrahuman-mena.myshopify.com/cart/62547400950131:1?channel=buy_button"
                    },
                    [r.RingSizes.THIRTEEN]: {
                        variantId: "62547400982899",
                        shopifyVariantId: "gid://shopify/ProductVariant/62547400982899",
                        checkoutUrl: "https://ultrahuman-mena.myshopify.com/cart/62547400982899:1?channel=buy_button"
                    },
                    [r.RingSizes.FOURTEEN]: {
                        variantId: "62547401015667",
                        shopifyVariantId: "gid://shopify/ProductVariant/62547401015667",
                        checkoutUrl: "https://ultrahuman-mena.myshopify.com/cart/62547401015667:1?channel=buy_button"
                    },
                    [r.RingSizes.OPEN]: {
                        variantId: "62547401048435",
                        shopifyVariantId: "gid://shopify/ProductVariant/62547401048435",
                        checkoutUrl: "https://ultrahuman-mena.myshopify.com/cart/62547401048435:1?channel=buy_button"
                    }
                }
            },
            [n.ShopifyStore.US]: {
                price: 89,
                variants: {
                    [r.RingSizes.FIVE]: {
                        variantId: "42591985238112",
                        shopifyVariantId: "gid://shopify/ProductVariant/42591985238112",
                        checkoutUrl: "https://stelcore-x-ultrahuman.myshopify.com/cart/42591985238112:1?channel=buy_button"
                    },
                    [r.RingSizes.SIX]: {
                        variantId: "42591985270880",
                        shopifyVariantId: "gid://shopify/ProductVariant/42591985270880",
                        checkoutUrl: "https://stelcore-x-ultrahuman.myshopify.com/cart/42591985270880:1?channel=buy_button"
                    },
                    [r.RingSizes.SEVEN]: {
                        variantId: "42591985303648",
                        shopifyVariantId: "gid://shopify/ProductVariant/42591985303648",
                        checkoutUrl: "https://stelcore-x-ultrahuman.myshopify.com/cart/42591985303648:1?channel=buy_button"
                    },
                    [r.RingSizes.EIGHT]: {
                        variantId: "42591985336416",
                        shopifyVariantId: "gid://shopify/ProductVariant/42591985336416",
                        checkoutUrl: "https://stelcore-x-ultrahuman.myshopify.com/cart/42591985336416:1?channel=buy_button"
                    },
                    [r.RingSizes.NINE]: {
                        variantId: "42591985369184",
                        shopifyVariantId: "gid://shopify/ProductVariant/42591985369184",
                        checkoutUrl: "https://stelcore-x-ultrahuman.myshopify.com/cart/42591985369184:1?channel=buy_button"
                    },
                    [r.RingSizes.TEN]: {
                        variantId: "42591985401952",
                        shopifyVariantId: "gid://shopify/ProductVariant/42591985401952",
                        checkoutUrl: "https://stelcore-x-ultrahuman.myshopify.com/cart/42591985401952:1?channel=buy_button"
                    },
                    [r.RingSizes.ELEVEN]: {
                        variantId: "42591985434720",
                        shopifyVariantId: "gid://shopify/ProductVariant/42591985434720",
                        checkoutUrl: "https://stelcore-x-ultrahuman.myshopify.com/cart/42591985434720:1?channel=buy_button"
                    },
                    [r.RingSizes.TWELVE]: {
                        variantId: "42591985467488",
                        shopifyVariantId: "gid://shopify/ProductVariant/42591985467488",
                        checkoutUrl: "https://stelcore-x-ultrahuman.myshopify.com/cart/42591985467488:1?channel=buy_button"
                    },
                    [r.RingSizes.THIRTEEN]: {
                        variantId: "42591985500256",
                        shopifyVariantId: "gid://shopify/ProductVariant/42591985500256",
                        checkoutUrl: "https://stelcore-x-ultrahuman.myshopify.com/cart/42591985500256:1?channel=buy_button"
                    },
                    [r.RingSizes.FOURTEEN]: {
                        variantId: "42591985533024",
                        shopifyVariantId: "gid://shopify/ProductVariant/42591985533024",
                        checkoutUrl: "https://stelcore-x-ultrahuman.myshopify.com/cart/42591985533024:1?channel=buy_button"
                    },
                    [r.RingSizes.OPEN]: {
                        variantId: "42591985565792",
                        shopifyVariantId: "gid://shopify/ProductVariant/42591985565792",
                        checkoutUrl: "https://stelcore-x-ultrahuman.myshopify.com/cart/42591985565792:1?channel=buy_button"
                    }
                }
            },
            [n.ShopifyStore.ROW]: {
                price: 89,
                variants: {
                    [r.RingSizes.FIVE]: {
                        variantId: "43991133225020",
                        shopifyVariantId: "gid://shopify/ProductVariant/43991133225020",
                        checkoutUrl: "https://ultrahuman-us.myshopify.com/cart/43991133225020:1?channel=buy_button"
                    },
                    [r.RingSizes.SIX]: {
                        variantId: "43991133257788",
                        shopifyVariantId: "gid://shopify/ProductVariant/43991133257788",
                        checkoutUrl: "https://ultrahuman-us.myshopify.com/cart/43991133257788:1?channel=buy_button"
                    },
                    [r.RingSizes.SEVEN]: {
                        variantId: "43991133290556",
                        shopifyVariantId: "gid://shopify/ProductVariant/43991133290556",
                        checkoutUrl: "https://ultrahuman-us.myshopify.com/cart/43991133290556:1?channel=buy_button"
                    },
                    [r.RingSizes.EIGHT]: {
                        variantId: "43991133323324",
                        shopifyVariantId: "gid://shopify/ProductVariant/43991133323324",
                        checkoutUrl: "https://ultrahuman-us.myshopify.com/cart/43991133323324:1?channel=buy_button"
                    },
                    [r.RingSizes.NINE]: {
                        variantId: "43991133356092",
                        shopifyVariantId: "gid://shopify/ProductVariant/43991133356092",
                        checkoutUrl: "https://ultrahuman-us.myshopify.com/cart/43991133356092:1?channel=buy_button"
                    },
                    [r.RingSizes.TEN]: {
                        variantId: "43991133388860",
                        shopifyVariantId: "gid://shopify/ProductVariant/43991133388860",
                        checkoutUrl: "https://ultrahuman-us.myshopify.com/cart/43991133388860:1?channel=buy_button"
                    },
                    [r.RingSizes.ELEVEN]: {
                        variantId: "43991133421628",
                        shopifyVariantId: "gid://shopify/ProductVariant/43991133421628",
                        checkoutUrl: "https://ultrahuman-us.myshopify.com/cart/43991133421628:1?channel=buy_button"
                    },
                    [r.RingSizes.TWELVE]: {
                        variantId: "43991133454396",
                        shopifyVariantId: "gid://shopify/ProductVariant/43991133454396",
                        checkoutUrl: "https://ultrahuman-us.myshopify.com/cart/43991133454396:1?channel=buy_button"
                    },
                    [r.RingSizes.THIRTEEN]: {
                        variantId: "43991133487164",
                        shopifyVariantId: "gid://shopify/ProductVariant/43991133487164",
                        checkoutUrl: "https://ultrahuman-us.myshopify.com/cart/43991133487164:1?channel=buy_button"
                    },
                    [r.RingSizes.FOURTEEN]: {
                        variantId: "43991133519932",
                        shopifyVariantId: "gid://shopify/ProductVariant/43991133519932",
                        checkoutUrl: "https://ultrahuman-us.myshopify.com/cart/43991133519932:1?channel=buy_button"
                    },
                    [r.RingSizes.OPEN]: {
                        variantId: "43991133552700",
                        shopifyVariantId: "gid://shopify/ProductVariant/43991133552700",
                        checkoutUrl: "https://ultrahuman-us.myshopify.com/cart/43991133552700:1?channel=buy_button"
                    }
                }
            },
            [n.ShopifyStore.EU]: {
                price: 79,
                variants: {
                    [r.RingSizes.FIVE]: {
                        variantId: "57321567945078",
                        shopifyVariantId: "gid://shopify/ProductVariant/57321567945078",
                        checkoutUrl: "https://ultrahuman-eu-uk.myshopify.com/cart/57321567945078:1?channel=buy_button"
                    },
                    [r.RingSizes.SIX]: {
                        variantId: "57321567977846",
                        shopifyVariantId: "gid://shopify/ProductVariant/57321567977846",
                        checkoutUrl: "https://ultrahuman-eu-uk.myshopify.com/cart/57321567977846:1?channel=buy_button"
                    },
                    [r.RingSizes.SEVEN]: {
                        variantId: "57321568010614",
                        shopifyVariantId: "gid://shopify/ProductVariant/57321568010614",
                        checkoutUrl: "https://ultrahuman-eu-uk.myshopify.com/cart/57321568010614:1?channel=buy_button"
                    },
                    [r.RingSizes.EIGHT]: {
                        variantId: "57321568043382",
                        shopifyVariantId: "gid://shopify/ProductVariant/57321568043382",
                        checkoutUrl: "https://ultrahuman-eu-uk.myshopify.com/cart/57321568043382:1?channel=buy_button"
                    },
                    [r.RingSizes.NINE]: {
                        variantId: "57321568076150",
                        shopifyVariantId: "gid://shopify/ProductVariant/57321568076150",
                        checkoutUrl: "https://ultrahuman-eu-uk.myshopify.com/cart/57321568076150:1?channel=buy_button"
                    },
                    [r.RingSizes.TEN]: {
                        variantId: "57321568108918",
                        shopifyVariantId: "gid://shopify/ProductVariant/57321568108918",
                        checkoutUrl: "https://ultrahuman-eu-uk.myshopify.com/cart/57321568108918:1?channel=buy_button"
                    },
                    [r.RingSizes.ELEVEN]: {
                        variantId: "57321568141686",
                        shopifyVariantId: "gid://shopify/ProductVariant/57321568141686",
                        checkoutUrl: "https://ultrahuman-eu-uk.myshopify.com/cart/57321568141686:1?channel=buy_button"
                    },
                    [r.RingSizes.TWELVE]: {
                        variantId: "57321568174454",
                        shopifyVariantId: "gid://shopify/ProductVariant/57321568174454",
                        checkoutUrl: "https://ultrahuman-eu-uk.myshopify.com/cart/57321568174454:1?channel=buy_button"
                    },
                    [r.RingSizes.THIRTEEN]: {
                        variantId: "57321568207222",
                        shopifyVariantId: "gid://shopify/ProductVariant/57321568207222",
                        checkoutUrl: "https://ultrahuman-eu-uk.myshopify.com/cart/57321568207222:1?channel=buy_button"
                    },
                    [r.RingSizes.FOURTEEN]: {
                        variantId: "57321568239990",
                        shopifyVariantId: "gid://shopify/ProductVariant/57321568239990",
                        checkoutUrl: "https://ultrahuman-eu-uk.myshopify.com/cart/57321568239990:1?channel=buy_button"
                    },
                    [r.RingSizes.OPEN]: {
                        variantId: "57321568272758",
                        shopifyVariantId: "gid://shopify/ProductVariant/57321568272758",
                        checkoutUrl: "https://ultrahuman-eu-uk.myshopify.com/cart/57321568272758:1?channel=buy_button"
                    }
                }
            },
            [n.ShopifyStore.CA]: {
                price: 125
            },
            [n.ShopifyStore.GB]: {
                price: 69
            },
            [n.ShopifyStore.AU]: {
                price: 129
            },
            [n.ShopifyStore.ZA]: {
                price: 1512
            }
        }),
        d = (0, o.buildAccessoryStoreConfig)({
            [n.ShopifyStore.IN]: {
                price: 8999,
                variants: {
                    [r.RingSizes.FIVE]: {
                        variantId: "44663822647366",
                        shopifyVariantId: "gid://shopify/ProductVariant/44663822647366",
                        checkoutUrl: "https://ultrahumanstore.myshopify.com/cart/44663822647366:1?channel=buy_button"
                    },
                    [r.RingSizes.SIX]: {
                        variantId: "44663822680134",
                        shopifyVariantId: "gid://shopify/ProductVariant/44663822680134",
                        checkoutUrl: "https://ultrahumanstore.myshopify.com/cart/44663822680134:1?channel=buy_button"
                    },
                    [r.RingSizes.SEVEN]: {
                        variantId: "44663822712902",
                        shopifyVariantId: "gid://shopify/ProductVariant/44663822712902",
                        checkoutUrl: "https://ultrahumanstore.myshopify.com/cart/44663822712902:1?channel=buy_button"
                    },
                    [r.RingSizes.EIGHT]: {
                        variantId: "44663822745670",
                        shopifyVariantId: "gid://shopify/ProductVariant/44663822745670",
                        checkoutUrl: "https://ultrahumanstore.myshopify.com/cart/44663822745670:1?channel=buy_button"
                    },
                    [r.RingSizes.NINE]: {
                        variantId: "44663822778438",
                        shopifyVariantId: "gid://shopify/ProductVariant/44663822778438",
                        checkoutUrl: "https://ultrahumanstore.myshopify.com/cart/44663822778438:1?channel=buy_button"
                    },
                    [r.RingSizes.TEN]: {
                        variantId: "44663822811206",
                        shopifyVariantId: "gid://shopify/ProductVariant/44663822811206",
                        checkoutUrl: "https://ultrahumanstore.myshopify.com/cart/44663822811206:1?channel=buy_button"
                    },
                    [r.RingSizes.ELEVEN]: {
                        variantId: "44663822843974",
                        shopifyVariantId: "gid://shopify/ProductVariant/44663822843974",
                        checkoutUrl: "https://ultrahumanstore.myshopify.com/cart/44663822843974:1?channel=buy_button"
                    },
                    [r.RingSizes.TWELVE]: {
                        variantId: "44663822876742",
                        shopifyVariantId: "gid://shopify/ProductVariant/44663822876742",
                        checkoutUrl: "https://ultrahumanstore.myshopify.com/cart/44663822876742:1?channel=buy_button"
                    },
                    [r.RingSizes.THIRTEEN]: {
                        variantId: "44663822909510",
                        shopifyVariantId: "gid://shopify/ProductVariant/44663822909510",
                        checkoutUrl: "https://ultrahumanstore.myshopify.com/cart/44663822909510:1?channel=buy_button"
                    },
                    [r.RingSizes.FOURTEEN]: {
                        variantId: "44663822942278",
                        shopifyVariantId: "gid://shopify/ProductVariant/44663822942278",
                        checkoutUrl: "https://ultrahumanstore.myshopify.com/cart/44663822942278:1?channel=buy_button"
                    },
                    [r.RingSizes.OPEN]: {
                        variantId: "44663822975046",
                        shopifyVariantId: "gid://shopify/ProductVariant/44663822975046",
                        checkoutUrl: "https://ultrahumanstore.myshopify.com/cart/44663822975046:1?channel=buy_button"
                    }
                }
            },
            [n.ShopifyStore.AE]: {
                price: 329,
                variants: {
                    [r.RingSizes.FIVE]: {
                        variantId: "62547401081203",
                        shopifyVariantId: "gid://shopify/ProductVariant/62547401081203",
                        checkoutUrl: "https://ultrahuman-mena.myshopify.com/cart/62547401081203:1?channel=buy_button"
                    },
                    [r.RingSizes.SIX]: {
                        variantId: "62547401113971",
                        shopifyVariantId: "gid://shopify/ProductVariant/62547401113971",
                        checkoutUrl: "https://ultrahuman-mena.myshopify.com/cart/62547401113971:1?channel=buy_button"
                    },
                    [r.RingSizes.SEVEN]: {
                        variantId: "62547401146739",
                        shopifyVariantId: "gid://shopify/ProductVariant/62547401146739",
                        checkoutUrl: "https://ultrahuman-mena.myshopify.com/cart/62547401146739:1?channel=buy_button"
                    },
                    [r.RingSizes.EIGHT]: {
                        variantId: "62547401179507",
                        shopifyVariantId: "gid://shopify/ProductVariant/62547401179507",
                        checkoutUrl: "https://ultrahuman-mena.myshopify.com/cart/62547401179507:1?channel=buy_button"
                    },
                    [r.RingSizes.NINE]: {
                        variantId: "62547401212275",
                        shopifyVariantId: "gid://shopify/ProductVariant/62547401212275",
                        checkoutUrl: "https://ultrahuman-mena.myshopify.com/cart/62547401212275:1?channel=buy_button"
                    },
                    [r.RingSizes.TEN]: {
                        variantId: "62547401245043",
                        shopifyVariantId: "gid://shopify/ProductVariant/62547401245043",
                        checkoutUrl: "https://ultrahuman-mena.myshopify.com/cart/62547401245043:1?channel=buy_button"
                    },
                    [r.RingSizes.ELEVEN]: {
                        variantId: "62547401277811",
                        shopifyVariantId: "gid://shopify/ProductVariant/62547401277811",
                        checkoutUrl: "https://ultrahuman-mena.myshopify.com/cart/62547401277811:1?channel=buy_button"
                    },
                    [r.RingSizes.TWELVE]: {
                        variantId: "62547401310579",
                        shopifyVariantId: "gid://shopify/ProductVariant/62547401310579",
                        checkoutUrl: "https://ultrahuman-mena.myshopify.com/cart/62547401310579:1?channel=buy_button"
                    },
                    [r.RingSizes.THIRTEEN]: {
                        variantId: "62547401343347",
                        shopifyVariantId: "gid://shopify/ProductVariant/62547401343347",
                        checkoutUrl: "https://ultrahuman-mena.myshopify.com/cart/62547401343347:1?channel=buy_button"
                    },
                    [r.RingSizes.FOURTEEN]: {
                        variantId: "62547401376115",
                        shopifyVariantId: "gid://shopify/ProductVariant/62547401376115",
                        checkoutUrl: "https://ultrahuman-mena.myshopify.com/cart/62547401376115:1?channel=buy_button"
                    },
                    [r.RingSizes.OPEN]: {
                        variantId: "62547401408883",
                        shopifyVariantId: "gid://shopify/ProductVariant/62547401408883",
                        checkoutUrl: "https://ultrahuman-mena.myshopify.com/cart/62547401408883:1?channel=buy_button"
                    }
                }
            },
            [n.ShopifyStore.US]: {
                price: 89,
                variants: {
                    [r.RingSizes.FIVE]: {
                        variantId: "42591985598560",
                        shopifyVariantId: "gid://shopify/ProductVariant/42591985598560",
                        checkoutUrl: "https://stelcore-x-ultrahuman.myshopify.com/cart/42591985598560:1?channel=buy_button"
                    },
                    [r.RingSizes.SIX]: {
                        variantId: "42591985631328",
                        shopifyVariantId: "gid://shopify/ProductVariant/42591985631328",
                        checkoutUrl: "https://stelcore-x-ultrahuman.myshopify.com/cart/42591985631328:1?channel=buy_button"
                    },
                    [r.RingSizes.SEVEN]: {
                        variantId: "42591985664096",
                        shopifyVariantId: "gid://shopify/ProductVariant/42591985664096",
                        checkoutUrl: "https://stelcore-x-ultrahuman.myshopify.com/cart/42591985664096:1?channel=buy_button"
                    },
                    [r.RingSizes.EIGHT]: {
                        variantId: "42591985696864",
                        shopifyVariantId: "gid://shopify/ProductVariant/42591985696864",
                        checkoutUrl: "https://stelcore-x-ultrahuman.myshopify.com/cart/42591985696864:1?channel=buy_button"
                    },
                    [r.RingSizes.NINE]: {
                        variantId: "42591985729632",
                        shopifyVariantId: "gid://shopify/ProductVariant/42591985729632",
                        checkoutUrl: "https://stelcore-x-ultrahuman.myshopify.com/cart/42591985729632:1?channel=buy_button"
                    },
                    [r.RingSizes.TEN]: {
                        variantId: "42591985762400",
                        shopifyVariantId: "gid://shopify/ProductVariant/42591985762400",
                        checkoutUrl: "https://stelcore-x-ultrahuman.myshopify.com/cart/42591985762400:1?channel=buy_button"
                    },
                    [r.RingSizes.ELEVEN]: {
                        variantId: "42591985795168",
                        shopifyVariantId: "gid://shopify/ProductVariant/42591985795168",
                        checkoutUrl: "https://stelcore-x-ultrahuman.myshopify.com/cart/42591985795168:1?channel=buy_button"
                    },
                    [r.RingSizes.TWELVE]: {
                        variantId: "42591985827936",
                        shopifyVariantId: "gid://shopify/ProductVariant/42591985827936",
                        checkoutUrl: "https://stelcore-x-ultrahuman.myshopify.com/cart/42591985827936:1?channel=buy_button"
                    },
                    [r.RingSizes.THIRTEEN]: {
                        variantId: "42591985860704",
                        shopifyVariantId: "gid://shopify/ProductVariant/42591985860704",
                        checkoutUrl: "https://stelcore-x-ultrahuman.myshopify.com/cart/42591985860704:1?channel=buy_button"
                    },
                    [r.RingSizes.FOURTEEN]: {
                        variantId: "42591985893472",
                        shopifyVariantId: "gid://shopify/ProductVariant/42591985893472",
                        checkoutUrl: "https://stelcore-x-ultrahuman.myshopify.com/cart/42591985893472:1?channel=buy_button"
                    },
                    [r.RingSizes.OPEN]: {
                        variantId: "42591985926240",
                        shopifyVariantId: "gid://shopify/ProductVariant/42591985926240",
                        checkoutUrl: "https://stelcore-x-ultrahuman.myshopify.com/cart/42591985926240:1?channel=buy_button"
                    }
                }
            },
            [n.ShopifyStore.ROW]: {
                price: 89,
                variants: {
                    [r.RingSizes.FIVE]: {
                        variantId: "43991133585468",
                        shopifyVariantId: "gid://shopify/ProductVariant/43991133585468",
                        checkoutUrl: "https://ultrahuman-us.myshopify.com/cart/43991133585468:1?channel=buy_button"
                    },
                    [r.RingSizes.SIX]: {
                        variantId: "43991133618236",
                        shopifyVariantId: "gid://shopify/ProductVariant/43991133618236",
                        checkoutUrl: "https://ultrahuman-us.myshopify.com/cart/43991133618236:1?channel=buy_button"
                    },
                    [r.RingSizes.SEVEN]: {
                        variantId: "43991133651004",
                        shopifyVariantId: "gid://shopify/ProductVariant/43991133651004",
                        checkoutUrl: "https://ultrahuman-us.myshopify.com/cart/43991133651004:1?channel=buy_button"
                    },
                    [r.RingSizes.EIGHT]: {
                        variantId: "43991133683772",
                        shopifyVariantId: "gid://shopify/ProductVariant/43991133683772",
                        checkoutUrl: "https://ultrahuman-us.myshopify.com/cart/43991133683772:1?channel=buy_button"
                    },
                    [r.RingSizes.NINE]: {
                        variantId: "43991133716540",
                        shopifyVariantId: "gid://shopify/ProductVariant/43991133716540",
                        checkoutUrl: "https://ultrahuman-us.myshopify.com/cart/43991133716540:1?channel=buy_button"
                    },
                    [r.RingSizes.TEN]: {
                        variantId: "43991133749308",
                        shopifyVariantId: "gid://shopify/ProductVariant/43991133749308",
                        checkoutUrl: "https://ultrahuman-us.myshopify.com/cart/43991133749308:1?channel=buy_button"
                    },
                    [r.RingSizes.ELEVEN]: {
                        variantId: "43991133782076",
                        shopifyVariantId: "gid://shopify/ProductVariant/43991133782076",
                        checkoutUrl: "https://ultrahuman-us.myshopify.com/cart/43991133782076:1?channel=buy_button"
                    },
                    [r.RingSizes.TWELVE]: {
                        variantId: "43991133814844",
                        shopifyVariantId: "gid://shopify/ProductVariant/43991133814844",
                        checkoutUrl: "https://ultrahuman-us.myshopify.com/cart/43991133814844:1?channel=buy_button"
                    },
                    [r.RingSizes.THIRTEEN]: {
                        variantId: "43991133847612",
                        shopifyVariantId: "gid://shopify/ProductVariant/43991133847612",
                        checkoutUrl: "https://ultrahuman-us.myshopify.com/cart/43991133847612:1?channel=buy_button"
                    },
                    [r.RingSizes.FOURTEEN]: {
                        variantId: "43991133880380",
                        shopifyVariantId: "gid://shopify/ProductVariant/43991133880380",
                        checkoutUrl: "https://ultrahuman-us.myshopify.com/cart/43991133880380:1?channel=buy_button"
                    },
                    [r.RingSizes.OPEN]: {
                        variantId: "43991133913148",
                        shopifyVariantId: "gid://shopify/ProductVariant/43991133913148",
                        checkoutUrl: "https://ultrahuman-us.myshopify.com/cart/43991133913148:1?channel=buy_button"
                    }
                }
            },
            [n.ShopifyStore.EU]: {
                price: 79,
                variants: {
                    [r.RingSizes.FIVE]: {
                        variantId: "57321568305526",
                        shopifyVariantId: "gid://shopify/ProductVariant/57321568305526",
                        checkoutUrl: "https://ultrahuman-eu-uk.myshopify.com/cart/57321568305526:1?channel=buy_button"
                    },
                    [r.RingSizes.SIX]: {
                        variantId: "57321568338294",
                        shopifyVariantId: "gid://shopify/ProductVariant/57321568338294",
                        checkoutUrl: "https://ultrahuman-eu-uk.myshopify.com/cart/57321568338294:1?channel=buy_button"
                    },
                    [r.RingSizes.SEVEN]: {
                        variantId: "57321568371062",
                        shopifyVariantId: "gid://shopify/ProductVariant/57321568371062",
                        checkoutUrl: "https://ultrahuman-eu-uk.myshopify.com/cart/57321568371062:1?channel=buy_button"
                    },
                    [r.RingSizes.EIGHT]: {
                        variantId: "57321568403830",
                        shopifyVariantId: "gid://shopify/ProductVariant/57321568403830",
                        checkoutUrl: "https://ultrahuman-eu-uk.myshopify.com/cart/57321568403830:1?channel=buy_button"
                    },
                    [r.RingSizes.NINE]: {
                        variantId: "57321568436598",
                        shopifyVariantId: "gid://shopify/ProductVariant/57321568436598",
                        checkoutUrl: "https://ultrahuman-eu-uk.myshopify.com/cart/57321568436598:1?channel=buy_button"
                    },
                    [r.RingSizes.TEN]: {
                        variantId: "57321568469366",
                        shopifyVariantId: "gid://shopify/ProductVariant/57321568469366",
                        checkoutUrl: "https://ultrahuman-eu-uk.myshopify.com/cart/57321568469366:1?channel=buy_button"
                    },
                    [r.RingSizes.ELEVEN]: {
                        variantId: "57321568502134",
                        shopifyVariantId: "gid://shopify/ProductVariant/57321568502134",
                        checkoutUrl: "https://ultrahuman-eu-uk.myshopify.com/cart/57321568502134:1?channel=buy_button"
                    },
                    [r.RingSizes.TWELVE]: {
                        variantId: "57321568534902",
                        shopifyVariantId: "gid://shopify/ProductVariant/57321568534902",
                        checkoutUrl: "https://ultrahuman-eu-uk.myshopify.com/cart/57321568534902:1?channel=buy_button"
                    },
                    [r.RingSizes.THIRTEEN]: {
                        variantId: "57321568567670",
                        shopifyVariantId: "gid://shopify/ProductVariant/57321568567670",
                        checkoutUrl: "https://ultrahuman-eu-uk.myshopify.com/cart/57321568567670:1?channel=buy_button"
                    },
                    [r.RingSizes.FOURTEEN]: {
                        variantId: "57321568600438",
                        shopifyVariantId: "gid://shopify/ProductVariant/57321568600438",
                        checkoutUrl: "https://ultrahuman-eu-uk.myshopify.com/cart/57321568600438:1?channel=buy_button"
                    },
                    [r.RingSizes.OPEN]: {
                        variantId: "57321568633206",
                        shopifyVariantId: "gid://shopify/ProductVariant/57321568633206",
                        checkoutUrl: "https://ultrahuman-eu-uk.myshopify.com/cart/57321568633206:1?channel=buy_button"
                    }
                }
            },
            [n.ShopifyStore.CA]: {
                price: 125
            },
            [n.ShopifyStore.GB]: {
                price: 69
            },
            [n.ShopifyStore.AU]: {
                price: 129
            },
            [n.ShopifyStore.ZA]: {
                price: 1512
            }
        });
    (0, o.buildAccessoryStoreConfig)({
        [n.ShopifyStore.IN]: {
            price: 4999,
            variants: { ...s
            }
        },
        [n.ShopifyStore.AE]: {
            price: 179,
            variants: { ...s
            }
        },
        [n.ShopifyStore.US]: {
            price: 49,
            variants: { ...s
            }
        },
        [n.ShopifyStore.CA]: {
            price: 65
        },
        [n.ShopifyStore.ROW]: {
            price: 49,
            variants: { ...s
            }
        },
        [n.ShopifyStore.EU]: {
            price: 45,
            variants: { ...s
            }
        },
        [n.ShopifyStore.GB]: {
            price: 39
        },
        [n.ShopifyStore.AU]: {
            price: 69
        },
        [n.ShopifyStore.ZA]: {
            price: 855
        }
    }), (0, o.buildAccessoryStoreConfig)({
        [n.ShopifyStore.IN]: {
            price: 4999,
            variants: { ...s
            }
        },
        [n.ShopifyStore.AE]: {
            price: 179,
            variants: { ...s
            }
        },
        [n.ShopifyStore.US]: {
            price: 49,
            variants: { ...s
            }
        },
        [n.ShopifyStore.CA]: {
            price: 65
        },
        [n.ShopifyStore.ROW]: {
            price: 49,
            variants: { ...s
            }
        },
        [n.ShopifyStore.EU]: {
            price: 45,
            variants: { ...s
            }
        },
        [n.ShopifyStore.GB]: {
            price: 39
        },
        [n.ShopifyStore.AU]: {
            price: 69
        },
        [n.ShopifyStore.ZA]: {
            price: 855
        }
    }), (0, o.buildAccessoryStoreConfig)({
        [n.ShopifyStore.IN]: {
            price: 8999,
            variants: { ...s
            }
        },
        [n.ShopifyStore.AE]: {
            price: 329,
            variants: { ...s
            }
        },
        [n.ShopifyStore.US]: {
            price: 89,
            variants: { ...s
            }
        },
        [n.ShopifyStore.CA]: {
            price: 125
        },
        [n.ShopifyStore.ROW]: {
            price: 89,
            variants: { ...s
            }
        },
        [n.ShopifyStore.EU]: {
            price: 79,
            variants: { ...s
            }
        },
        [n.ShopifyStore.GB]: {
            price: 69
        },
        [n.ShopifyStore.AU]: {
            price: 129
        },
        [n.ShopifyStore.ZA]: {
            price: 1512
        }
    }), (0, o.buildAccessoryStoreConfig)({
        [n.ShopifyStore.IN]: {
            price: 8999,
            variants: { ...s
            }
        },
        [n.ShopifyStore.AE]: {
            price: 329,
            variants: { ...s
            }
        },
        [n.ShopifyStore.US]: {
            price: 89,
            variants: { ...s
            }
        },
        [n.ShopifyStore.CA]: {
            price: 125
        },
        [n.ShopifyStore.ROW]: {
            price: 89,
            variants: { ...s
            }
        },
        [n.ShopifyStore.EU]: {
            price: 79,
            variants: { ...s
            }
        },
        [n.ShopifyStore.GB]: {
            price: 69
        },
        [n.ShopifyStore.AU]: {
            price: 129
        },
        [n.ShopifyStore.ZA]: {
            price: 1512
        }
    });
    let l = Object.values(n.ShopifyStore).reduce((t, a) => (t[a] = {
            [h.SILVER_HALO]: y[a],
            [h.GOLD_HALO]: e[a]
        }, t), {}),
        f = Object.values(n.ShopifyStore).reduce((t, a) => (t[a] = {
            [h.SILVER_HALO]: p[a],
            [h.GOLD_HALO]: d[a]
        }, t), {});

    function m(t, a) {
        return a && a !== h.NONE ? l[t] ? .[a] ? .price ? ? 0 : 0
    }

    function I(t, a) {
        return a && a !== h.NONE ? f[t] ? .[a] ? .price ? ? 0 : 0
    }
    t.s(["DuoStackingShopifyMap", 0, f, "GoldHaloDuoProdConfigMap", 0, d, "GoldHaloProdConfigMap", 0, e, "SilverHaloDuoProdConfigMap", 0, p, "SilverHaloProdConfigMap", 0, y, "StackingShopifyMap", 0, l, "getStackingDuoPrice", () => I, "getStackingPrice", () => m], 51754)
}]);