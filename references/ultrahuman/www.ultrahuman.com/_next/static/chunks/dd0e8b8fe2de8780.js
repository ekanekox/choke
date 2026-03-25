(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 57706, i => {
            "use strict";
            var e = i.i(53147),
                t = i.i(60814);
            let o = (0, t.default)(e.default).withConfig({
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
  @media (min-width: ${({theme:i})=>i.globalV2.lg.minWidth}) {
    font-size: 15px;
    padding: 12px 16px;
    border-radius: 200px;
  }
`, n = t.default.button.withConfig({
                displayName: "CTAComponent__PrimaryCTA",
                componentId: "sc-87d441a3-1"
            })
            `
  --border: none;
  border: var(--border);
  padding: 10px 14px;
  border-radius: 40px;
  background: ${({color:i})=>"black"===i?"#000":"#007ff5"} !important;
  color: ${({color:i})=>"#fff"} !important;
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
      ${({color:i})=>"black"===i?"#333":"#6fbaff"} inset;
  }

  @media (min-width: 992px) {
    font-size: 15px;
    padding: 12px 16px;
    border-radius: 200px;
  }
`, r = t.default.button.withConfig({
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
`, a = t.default.button.withConfig({
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

    @media (min-width: ${({theme:i})=>i.globalV2.lg.minWidth}) {
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
`, l = (0, t.default)(e.default).withConfig({
                displayName: "CTAComponent__FlatLink",
                componentId: "sc-87d441a3-4"
            })
            `
  --border: none;
  --color: ${({color:i="#000"})=>i};
  padding: 10px 14px;
  color: ${({color:i="#000"})=>i};
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

    @media (min-width: ${({theme:i})=>i.globalV2.lg.minWidth}) {
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
`, s = t.default.button.withConfig({
                displayName: "CTAComponent__CTAButton",
                componentId: "sc-87d441a3-5"
            })
            `
    font-size: ${({theme:i})=>i.typographyV2.fontSize.mediumsmall};
    font-weight: 500;
    cursor: pointer;
    background: transparent;
    border: none;
    
    @media (min-width: ${({theme:i})=>i.globalV2.xxxl.minWidth}) {
        font-size: ${({theme:i})=>i.typographyV2.fontSize.small};
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
    @media (min-width: ${({theme:i})=>i.globalV2.lg.minWidth}) {
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

       @media (min-width: ${({theme:i})=>i.globalV2.lg.minWidth}) {
         bottom: -2px;
       }
     }

      &:hover {
        box-shadow: none;
    }
    }
     
`, d = t.css `
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50px;
  font-size: ${({theme:i})=>i.typographyV2.fontSize.mediumsmall};
  font-weight: 500;
  white-space: nowrap;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  letter-spacing: -0.42px;

  @media (min-width: ${({theme:i})=>i.globalV2.lg.minWidth}) {
    font-size: 16px;
  }
`;
            t.default.button.withConfig({
                displayName: "CTAComponent__SecondaryButton",
                componentId: "sc-87d441a3-6"
            })
            `
  ${d};
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
    @media (min-width: ${({theme:i})=>i.globalV2.sm.maxWidth}) {
      display: inline-flex !important;
    }
  }
`;
            let c = (0, t.default)(e.default).withConfig({
                displayName: "CTAComponent__BuyNowButton",
                componentId: "sc-87d441a3-7"
            })
            `
  ${d};
  padding: 12px 24px;
  color: #000000;
  background: #ffffff;

  &:hover {
    box-shadow: 0 0 12px rgba(255, 255, 255, 0.9);
  }

  @media (min-width: ${({theme:i})=>i.globalV2.lg.minWidth}) {
    width: 154px;
  }
`;
            i.s(["BuyNowButton", 0, c, "CTAButton", 0, s, "CTALink", 0, o, "FlatButton", 0, a, "FlatLink", 0, l, "PrimaryCTA", 0, n, "SecondaryCTA", 0, r])
        }, 86332, i => {
            "use strict";
            var e = i.i(91398),
                t = i.i(91788),
                o = i.i(60814),
                n = i.i(53147),
                r = i.i(57706);
            let a = o.css `
  border: 1px solid rgba(255, 255, 255, 0.25);
  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.06);
  -webkit-backdrop-filter: blur(6px);
  backdrop-filter: blur(6px);
`,
                l = (0, o.default)(r.CTAButton).withConfig({
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

  ${({variant:i})=>{switch(i){case"white":return o.css`
            background: #ffffff;
            color: #000000;

          &:disabled {
            background: # f0f0f0;
            color: #b3b3b3;
            cursor: not - allowed;
            opacity: 0.6;
        }
        `;case"blue":case void 0:return o.css`
        background: #0882ff;
          color: # ffffff;

        &
        : disabled {
            background: #0882ff;
            color: # ffffff;
            cursor: not - allowed;
            opacity: 0.4;
        }
        `;case"transparentDark":return o.css`
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
    `;case"transparentLight":return o.css`
    background: rgba(255, 255, 255, 0.13); color: #ffffff; -
    webkit - backdrop - filter: blur(6 px); backdrop - filter: blur(6 px);

    &
    : disabled {
        background: rgba(255, 255, 255, 0.08);
        color: #ffffff;
        cursor: not - allowed;
        opacity: 0.4;
    }
    `;case"glassLight":return o.css`
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
    `;case"glassDark":return o.css`
    background: rgba(255, 255, 255, 0.08); color: #000000;
          ${a}

          &:disabled {
            background: rgba(255, 255, 255, 0.05);
            color: # 000000; cursor: not - allowed; opacity: 0.4; border: 1 px solid rgba(255, 255, 255, 0.15);
}
`;case"black":return o.css`
background: #000000;
          color: # ffffff;

&
: disabled {
    background: #000000;
            color: # ffffff;
    cursor: not - allowed;
    opacity: 0.4;
}
`;case"flat":return o.css`
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
`, s = o.default.span.withConfig({
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
`, d = o.default.span.withConfig({
    displayName: "ButtonV2__Label",
    componentId: "sc-9dff9bcb-2"
})
`
  display: inline-flex;
  align-items: center;
  line-height: 1; /* avoid extra baseline space */
  pointer-events: none; /* ensure clicks pass through to button */
`, c = t.default.forwardRef(({
    children: i,
    label: t,
    href: o,
    linkProps: r,
    componentType: a,
    onClick: c,
    startIcon: p,
    endIcon: f,
    ...h
}, g) => {
    let x = (a ? ? (o ? "link" : "button")) === "link",
        u = (0, e.jsxs)(l, {
            ref: g,
            onClick: c,
            ...h,
            type: h.type ? ? "button",
            children: [p ? (0, e.jsx)(s, {
                side: "start",
                children: p
            }) : null, (0, e.jsx)(d, {
                children: t ? ? i
            }), f ? (0, e.jsx)(s, {
                side: "end",
                children: f
            }) : null]
        });
    return x && o ? (0, e.jsx)(n.default, {
        href: o,
        ...r,
        children: u
    }) : u
});
c.displayName = "ButtonV2", i.s(["ButtonV2", 0, c])
}, 99200, i => {
"use strict";
var e = i.i(2100),
t = i.i(60814);
let o = t.default.div.withConfig({
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
`, n = t.default.div.withConfig({
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
`, r = t.default.div.withConfig({
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
`, a = t.default.div.withConfig({
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
`, s = t.default.button.withConfig({
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
i.s(["Button", 0, s, "ImageContainer", 0, a, "InfoModalContainer", 0, n, "InfoModalDescription", 0, r, "InfoModalTitle", 0, o, "PricingModal", 0, l])
}, 49767, i => {
"use strict";
var e = i.i(91398),
t = i.i(3115),
o = i.i(91788),
n = i.i(60814),
r = i.i(59207),
a = i.i(79546);
let l = (0, n.default)(({
className: i
}) => (0, o.useContext)(a.CartContext).store !== r.ShopifyStore.US ? null : (0, e.jsxs)("div", {
className: `${i} fsa-hsa`,
children: [(0, e.jsx)(s, {}), (0, e.jsxs)("span", {
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
(0, n.default)(({
className: i,
colorScheme: n = "light"
}) => {
let {
    region: r
} = (0, o.useContext)(t.RegionLocaleContext);
return "US" !== r && "PR" !== r ? null : (0, e.jsxs)("div", {
    className: `${i} ${n} fsa-hsa`,
    children: [(0, e.jsx)(s, {
        fill: "dark" === n ? "white" : "black"
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
let s = ({
className: i,
style: t,
fill: o = "black"
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
    fill: o ? ? "black"
}), (0, e.jsx)("path", {
    d: "M21.0742 0.723199L11.081 18.1402L6.15346 12.8362L6.15186 12.65L7.22823 11.6402L10.8402 15.5717L19.7096 0L21.0742 0.723199Z",
    fill: o ? ? "black"
})]
});
i.s(["FSAHSAComponent", 0, l])
}, 79446, i => {
"use strict";
var e = i.i(91398);
i.i(64157);
var t = i.i(71179),
o = i.i(53147),
n = i.i(91788),
r = i.i(37515),
a = i.i(1814),
l = i.i(57232),
s = i.i(79546),
d = i.i(21666),
c = i.i(99200),
p = i.i(78198),
f = i.i(49767),
h = i.i(228);
let g = () => {
let {
    t: i
} = (0, t.useTranslation)("ring"), {
    store: g,
    currency: x
} = (0, n.useContext)(s.CartContext), u = a.CurrencySymbol[x ? ? h.Currency.usd], {
    width: m
} = (0, l.useWindowSize)();
return (0, e.jsxs)(c.InfoModalContainer, {
    children: [(0, e.jsxs)(c.InfoModalTitle, {
        children: [(0, e.jsx)("h3", {
            children: i("ring.infoModals.cardio.title")
        }), (0, e.jsxs)("p", {
            children: [(0, e.jsxs)("span", {
                children: [i("ring.infoModals.cardio.subtitle.a"), (0, e.jsxs)(e.Fragment, {
                    children: [u, (0, a.formatPriceWithComma)(r.CardioAdaptibilityShopifyMap[g].Year2.price / 2)]
                }), i("ring.infoModals.cardio.subtitle.b")]
            }), (0, e.jsx)("span", {
                children: (0, e.jsx)(f.FSAHSAComponent, {})
            })]
        }), (0, e.jsx)(c.ImageContainer, {
            className: "cardio-container",
            children: (0, e.jsx)(d.CustomImage, {
                src: `web_v2/cart-info-modals/cardio_adaptability${m>1024?"_desktop":""}.png`,
                width: 1388,
                height: 1133,
                alt: "Cardio adaptability",
                priority: !0
            })
        })]
    }), (0, e.jsxs)(c.InfoModalDescription, {
        children: [(0, e.jsx)("p", {
            children: i("ring.infoModals.powerplugs")
        }), (0, e.jsxs)("p", {
            children: [(0, e.jsx)("strong", {
                children: i("ring.infoModals.cardio.descriptionStrong")
            }), " ", i("ring.infoModals.cardio.description")]
        })]
    }), (0, e.jsxs)(c.InfoModalDescription, {
        children: [(0, e.jsx)("h3", {
            children: i("ring.infoModals.cardio.text.a.title")
        }), (0, e.jsx)("p", {
            children: i("ring.infoModals.cardio.text.a.p1")
        }), (0, e.jsx)("p", {
            children: i("ring.infoModals.cardio.text.a.p2")
        })]
    }), (0, e.jsxs)(c.InfoModalDescription, {
        children: [(0, e.jsx)("h3", {
            children: i("ring.infoModals.cardio.text.b.title")
        }), (0, e.jsx)("p", {
            children: i("ring.infoModals.cardio.text.b.p1")
        })]
    }), (0, e.jsx)(c.ImageContainer, {
        className: "screen",
        children: (0, e.jsx)(d.CustomImage, {
            src: "web_v2/cart-info-modals/cardio_complications.png",
            width: 1388,
            height: 875,
            alt: "Cardio complications",
            priority: !0
        })
    }), (0, e.jsx)(o.default, {
        rel: "noopener noreferrer",
        href: (0, p.getAssetUrl)("/web_v2/downloads/cardio-report.pdf"),
        target: "_blank",
        children: (0, e.jsx)(c.Button, {
            children: (0, e.jsx)("span", {
                children: i("ring.infoModals.cardio.button")
            })
        })
    })]
})
};
i.s(["CardioAdaptabilityCartInfoModal", 0, g, "CardioAdaptabilityPricingModal", 0, () => (0, e.jsx)(c.PricingModal, {
children: (0, e.jsx)(g, {})
})])
}, 1560, i => {
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
o = i.i(53147),
n = i.i(91788),
r = i.i(90380),
a = i.i(1814),
l = i.i(57232),
s = i.i(79546),
d = i.i(21666),
c = i.i(99200),
p = i.i(78198),
f = i.i(228);
let h = () => {
let {
    t: i
} = (0, t.useTranslation)("ring"), {
    store: h,
    currency: g
} = (0, n.useContext)(s.CartContext), x = a.CurrencySymbol[g ? ? f.Currency.usd], {
    width: u
} = (0, l.useWindowSize)();
return (0, e.jsxs)(c.InfoModalContainer, {
    children: [(0, e.jsxs)(c.InfoModalTitle, {
        children: [(0, e.jsx)("h3", {
            children: i("ring.infoModals.afib.title")
        }), (0, e.jsxs)("p", {
            children: [i("ring.infoModals.afib.subtitle.a"), (0, e.jsxs)(e.Fragment, {
                children: [x, (0, a.formatPriceWithComma)(r.AfibShopifyMap[h].Year1.price)]
            }), i("ring.infoModals.afib.subtitle.b")]
        }), (0, e.jsx)(c.ImageContainer, {
            className: "afib-container",
            children: (0, e.jsx)(d.CustomImage, {
                src: `web_v2/cart-info-modals/afib_detection${u>1024?"_desktop":""}.png`,
                width: 1388,
                height: 1133,
                alt: "Afib detection",
                priority: !0
            })
        })]
    }), (0, e.jsxs)(c.InfoModalDescription, {
        children: [(0, e.jsx)("p", {
            children: i("ring.infoModals.powerplugs")
        }), (0, e.jsxs)("p", {
            children: [(0, e.jsx)("strong", {
                children: i("ring.infoModals.afib.descriptionStrong")
            }), " ", i("ring.infoModals.afib.description")]
        })]
    }), (0, e.jsxs)(c.InfoModalDescription, {
        children: [(0, e.jsx)("h3", {
            children: i("ring.infoModals.afib.text.a.title")
        }), (0, e.jsx)("p", {
            children: i("ring.infoModals.afib.text.a.p1")
        }), (0, e.jsx)("p", {
            children: i("ring.infoModals.afib.text.a.p2")
        })]
    }), (0, e.jsxs)(c.InfoModalDescription, {
        children: [(0, e.jsx)("h3", {
            children: i("ring.infoModals.afib.text.b.title")
        }), (0, e.jsx)("p", {
            children: i("ring.infoModals.afib.text.b.p1")
        })]
    }), (0, e.jsx)(c.ImageContainer, {
        className: "screen",
        children: (0, e.jsx)(d.CustomImage, {
            src: "web_v2/cart-info-modals/afib_complications.png",
            width: 1388,
            height: 798,
            alt: "Afib complications",
            priority: !0
        })
    }), (0, e.jsx)(o.default, {
        rel: "noopener noreferrer",
        href: (0, p.getAssetUrl)("/web_v2/downloads/afib-report-v2.pdf"),
        title: "AFIB Report",
        target: "_blank",
        children: (0, e.jsx)(c.Button, {
            children: (0, e.jsx)("span", {
                children: i("ring.infoModals.afib.button")
            })
        })
    })]
})
};
i.s(["AfibInfoCartModal", 0, h, "AfibPricingModal", 0, () => (0, e.jsx)(c.PricingModal, {
children: (0, e.jsx)(h, {})
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
let o = e.default.h3.withConfig({
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
`, n = e.css `
  margin: 4.8rem 0;
  @media (min-width: ${({theme:i})=>i.global.tablet.maxWidth}) {
    margin: 9.6rem 0;
  }
`, r = e.keyframes `
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
  animation: ${r} 1s ease-out forwards;
`, i.s(["H2", 0, t, "H3", 0, o, "fadeIn", 0, r, "sectionMargin", 0, n], 62360);
var a = i.i(91398);
i.i(64157);
var l = i.i(71179),
s = i.i(91788),
d = i.i(228),
c = i.i(40647),
p = i.i(1814),
f = i.i(79546),
h = i.i(21666),
g = i.i(99200);
let x = () => {
let {
    t: i
} = (0, l.useTranslation)("ring"), {
    store: e,
    currency: t
} = (0, s.useContext)(f.CartContext), o = p.CurrencySymbol[t ? ? d.Currency.usd];
return (0, a.jsxs)(g.InfoModalContainer, {
    children: [(0, a.jsxs)(g.InfoModalTitle, {
        children: [(0, a.jsx)("h3", {
            children: i("ring.infoModals.clue.title")
        }), (0, a.jsxs)("p", {
            children: [i("ring.infoModals.clue.subtitle.a"), (0, a.jsxs)(a.Fragment, {
                children: [o, (0, p.formatPriceWithComma)(c.ClueShopifyMap[e].Year1.discountedPrice)]
            }), i("ring.infoModals.clue.subtitle.b"), (0, a.jsxs)(a.Fragment, {
                children: [o, (0, p.formatPriceWithComma)(c.ClueShopifyMap[e].Year1.price)]
            }), i("ring.infoModals.clue.subtitle.c")]
        }), (0, a.jsx)(g.ImageContainer, {
            className: "clue-container",
            children: (0, a.jsx)(h.CustomImage, {
                src: "web_v2/cart-info-modals/clue-1-square.png",
                width: 1388,
                height: 1133,
                alt: "Clue",
                priority: !0
            })
        })]
    }), (0, a.jsx)(g.InfoModalDescription, {
        children: (0, a.jsx)("p", {
            children: i("ring.infoModals.clue.description")
        })
    }), (0, a.jsxs)(g.InfoModalDescription, {
        children: [(0, a.jsx)("h3", {
            children: i("ring.infoModals.clue.text.a.title")
        }), (0, a.jsxs)("ul", {
            children: [(0, a.jsx)("li", {
                children: (0, a.jsx)("p", {
                    children: i("ring.infoModals.clue.text.a.li1")
                })
            }), (0, a.jsx)("li", {
                children: (0, a.jsx)("p", {
                    children: i("ring.infoModals.clue.text.a.li2")
                })
            }), (0, a.jsx)("li", {
                children: (0, a.jsx)("p", {
                    children: i("ring.infoModals.clue.text.a.li3")
                })
            })]
        })]
    }), (0, a.jsxs)(g.InfoModalDescription, {
        children: [(0, a.jsx)("h3", {
            children: i("ring.infoModals.clue.text.b.title")
        }), (0, a.jsxs)("ul", {
            children: [(0, a.jsx)("li", {
                children: (0, a.jsx)("p", {
                    children: i("ring.infoModals.clue.text.b.li1")
                })
            }), (0, a.jsx)("li", {
                children: (0, a.jsx)("p", {
                    children: i("ring.infoModals.clue.text.b.li2")
                })
            }), (0, a.jsx)("li", {
                children: (0, a.jsx)("p", {
                    children: i("ring.infoModals.clue.text.b.li3")
                })
            })]
        })]
    }), (0, a.jsx)(g.ImageContainer, {
        className: "screen",
        children: (0, a.jsx)(h.CustomImage, {
            src: "web_v2/cart-info-modals/clue-2.png",
            width: 1388,
            height: 798,
            alt: "Afib complications",
            priority: !0
        })
    })]
})
};
i.s(["CluePricingModal", 0, () => (0, a.jsx)(g.PricingModal, {
children: (0, a.jsx)(x, {})
})], 4336)
}, 62977, i => {
"use strict";
var e = i.i(91398);
i.i(64157);
var t = i.i(71179),
o = i.i(3828),
n = i.i(91788),
r = i.i(228),
a = i.i(1814),
l = i.i(79546),
s = i.i(21666),
d = i.i(25635),
c = i.i(99200);
let p = () => {
let {
    t: i
} = (0, t.useTranslation)("ring"), p = (0, n.useContext)(l.CartContext), f = (0, o.useRouter)(), {
    store: h,
    currency: g
} = p, x = "respiratory" === f.query.flow, u = a.CurrencySymbol[g ? ? r.Currency.usd];
return (0, e.jsxs)(c.InfoModalContainer, {
    children: [(0, e.jsxs)(c.InfoModalTitle, {
        children: [(0, e.jsx)("h3", {
            children: i("ring.infoModals.respiratory.title")
        }), (0, e.jsx)("p", {
            children: x ? (0, e.jsxs)(e.Fragment, {
                children: [i("ring.infoModals.respiratory.subtitle.a"), u, (0, a.formatPriceWithComma)(d.RespiratoryShopifyMap[h].Year1.discountedPrice), i("ring.infoModals.respiratory.subtitle.b"), u, (0, a.formatPriceWithComma)(d.RespiratoryShopifyMap[h].Year1.price), i("ring.infoModals.respiratory.subtitle.c")]
            }) : (0, e.jsxs)(e.Fragment, {
                children: [i("ring.infoModals.respiratory.subtitle.price_only.a"), u, (0, a.formatPriceWithComma)(d.RespiratoryShopifyMap[h].Year1.price), i("ring.infoModals.respiratory.subtitle.price_only.b")]
            })
        }), (0, e.jsx)(c.ImageContainer, {
            className: "respiratory-container",
            children: (0, e.jsx)(s.CustomImage, {
                src: "web_v2/cart-info-modals/respiratory-mockup-1.png",
                width: 1388,
                height: 1133,
                alt: "respiratory",
                priority: !0
            })
        })]
    }), (0, e.jsx)(c.InfoModalDescription, {
        children: (0, e.jsx)("p", {
            children: i("ring.infoModals.respiratory.description")
        })
    }), (0, e.jsxs)(c.InfoModalDescription, {
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
    }), (0, e.jsxs)(c.InfoModalDescription, {
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
i.s(["RespiratoryCartInfoModal", 0, p, "RespiratoryPricingModal", 0, () => (0, e.jsx)(c.PricingModal, {
children: (0, e.jsx)(p, {})
})])
}, 13069, i => {
"use strict";
var e = i.i(91398),
t = i.i(91788),
o = i.i(60814),
n = i.i(74975),
r = i.i(1814),
a = i.i(228),
l = i.i(79546),
s = i.i(21666),
d = i.i(99200),
c = i.i(78198),
p = i.i(53147),
f = i.i(49767),
h = i.i(27260);
let g = o.default.div.withConfig({
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
`, x = () => {
let i = (0, t.useContext)(l.CartContext),
    {
        getValue: o
    } = (0, h.default)(),
    {
        store: x,
        currency: u
    } = i,
    m = r.CurrencySymbol[u ? ? a.Currency.usd],
    b = o([{
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
    y = o("Cycle & Ovulation Pro", "Cycle & Ovulation Plus"),
    C = o("CNO Pro", "CNO Plus"),
    w = o("World's most accurate cycle and ovulation tracker, built into your Ultrahuman Ring. Powered by 15 years of OvuSense™ research and trained on 260,000+ real cycles, it predicts your fertile window, confirms ovulation with over 90% accuracy, detects when it doesn't happen, and uncovers hidden patterns and more.", "Built on insights from established cycle-pattern science, it offers consistent cycle estimates and highlights ovulation-related patterns—providing an advanced, wellness-focused way to explore your cycle phases with your Ultrahuman Ring."),
    j = Math.floor(n.CnoProShopifyMap[x].Year2.price / 2 * 100) / 100;
return (0, e.jsxs)(d.InfoModalContainer, {
    children: [(0, e.jsxs)(d.InfoModalTitle, {
        children: [(0, e.jsx)("h3", {
            children: y
        }), (0, e.jsxs)("p", {
            children: [(0, e.jsxs)("span", {
                children: ["Starting at", " ", (0, e.jsxs)(e.Fragment, {
                    children: [m, (0, r.formatPriceWithComma)(j)]
                }), " ", "/year"]
            }), (0, e.jsx)("span", {
                children: (0, e.jsx)(f.FSAHSAComponent, {})
            })]
        }), (0, e.jsx)(d.ImageContainer, {
            className: "cno-pro-image-container",
            children: (0, e.jsx)(s.CustomImage, {
                src: o("web_v2/cart-info-modals/cno_pro_modal_hero.png", "web_v2/womens-health/plus/buy/cno-plus_modal.png"),
                width: 1376,
                height: 808,
                alt: C
            })
        })]
    }), (0, e.jsx)(d.InfoModalDescription, {
        children: (0, e.jsx)("p", {
            children: w
        })
    }), (0, e.jsx)(g, {
        children: b.map((i, t) => (0, e.jsxs)("div", {
            className: "benefit",
            children: [(0, e.jsx)("h3", {
                children: i.title
            }), (0, e.jsx)("p", {
                className: "description",
                children: i.description
            })]
        }, t))
    }), (0, e.jsxs)(d.InfoModalDescription, {
        children: [(0, e.jsx)("h3", {
            children: "Cycle Reports: Your Cycle Health, over time"
        }), (0, e.jsx)("p", {
            children: "Track changes in cycle length, ovulation timing, luteal phase health, biomarkers, and symptoms over time. See recurring patterns, identify potential concerns, and share a complete picture of your cycle health with your doctor. These insights go beyond daily tracking, helping you understand your body's trends and what they mean for your goals."
        }), (0, e.jsx)(d.ImageContainer, {
            className: "cno-pro-image-container",
            children: (0, e.jsx)(s.CustomImage, {
                src: "web_v2/cart-info-modals/cno_pro_modal_report.png",
                width: 1376,
                height: 808,
                alt: C
            })
        }), (0, e.jsx)(p.default, {
            rel: "noopener noreferrer",
            href: (0, c.getAssetUrl)(o("/web_v2/womens-health/documents/C&O_Pro_Sample%20Report.pdf", "/web_v2/womens-health/plus/documents/C&O_Plus_Sample_Report.pdf")),
            target: "_blank",
            children: (0, e.jsx)(d.Button, {
                children: (0, e.jsx)("span", {
                    children: "View sample report"
                })
            })
        })]
    })]
})
};
i.s(["CnoProCartInfoModal", 0, x, "CnoProPricingModal", 0, () => (0, e.jsx)(d.PricingModal, {
children: (0, e.jsx)(x, {})
})])
}]);