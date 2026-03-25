import{n as e}from"./rolldown-runtime.PZvAO4V3.mjs";import{F as t,T as n,b as r,l as i,s as a,u as o}from"./react.Dnx1ohN4.mjs";import{$ as s,N as c,jt as l,o as u,xt as d}from"./framer.DHUQSeO7.mjs";function f({color:e,width:t=0,widthPerSide:n=!1,widthTop:r=0,widthRight:i=0,widthBottom:a=0,widthLeft:o=0,style:s=`none`}={}){let c={};return e?(c[`--framer-border-color`]=e,c.borderStyle=s,n?(c.borderTopWidth=r,c.borderRightWidth=i,c.borderBottomWidth=a,c.borderLeftWidth=o):(c.borderTopWidth=t,c.borderRightWidth=t,c.borderBottomWidth=t,c.borderLeftWidth=t)):c.border=`none`,c}var p,m=e((()=>{s(),p={color:{type:u.Color,defaultValue:`#444`},width:{type:u.FusedNumber,toggleKey:`widthPerSide`,toggleTitles:[`Width`,`Width per side`],valueKeys:[`widthTop`,`widthRight`,`widthBottom`,`widthLeft`],valueLabels:[`T`,`R`,`B`,`L`],defaultValue:1,min:0},style:{type:u.Enum,options:[`solid`,`dashed`,`dotted`,`double`],optionTitles:[`Solid`,`Dashed`,`Dotted`,`double`],defaultValue:`solid`}}}));function h({color:e,width:t,style:n,offset:r}={}){let i={};return e&&(i[`--framer-focus-outline`]=`${t}px ${n} ${e}`,i[`--framer-focus-outline-offset`]=`${r}px`),i}var g,_=e((()=>{s(),g={color:{type:u.Color,defaultValue:`#09f`},width:{type:u.Number,displayStepper:!0,defaultValue:1,min:0},style:{type:u.Enum,options:[`solid`,`dashed`,`dotted`,`double`],optionTitles:[`Solid`,`Dashed`,`Dotted`,`double`],defaultValue:`solid`},offset:{type:u.Number,displayStepper:!0}}}));function v({fillColor:e,textColor:t,borderColor:n}={}){return{"--framer-hover-background-color":e,"--framer-hover-color":t,"--framer-hover-border-color":n}}var y,b=e((()=>{s(),y={fillColor:{type:u.Color,title:`Fill`,optional:!0},textColor:{type:u.Color,title:`Text`,optional:!0},borderColor:{type:u.Color,title:`Border`,optional:!0}}}));function x({padding:e=0,paddingPerSide:t=!1,paddingTop:n=0,paddingRight:r=0,paddingBottom:i=0,paddingLeft:a=0}={}){return t?{paddingTop:n,paddingRight:r,paddingBottom:i,paddingLeft:a}:{paddingTop:e,paddingRight:e,paddingBottom:e,paddingLeft:e}}var S,C=e((()=>{s(),S={padding:{type:u.FusedNumber,toggleKey:`paddingPerSide`,toggleTitles:[`Padding`,`Padding per side`],valueKeys:[`paddingTop`,`paddingRight`,`paddingBottom`,`paddingLeft`],valueLabels:[`T`,`R`,`B`,`L`],defaultValue:10,min:0}}}));function w({radius:e=0,radiusPerCorner:t=!1,radiusTopLeft:n=0,radiusTopRight:r=0,radiusBottomRight:i=0,radiusBottomLeft:a=0}={}){let o={};return t?(o.borderTopLeftRadius=n,o.borderTopRightRadius=r,o.borderBottomRightRadius=i,o.borderBottomLeftRadius=a):(o.borderTopLeftRadius=e,o.borderTopRightRadius=e,o.borderBottomRightRadius=e,o.borderBottomLeftRadius=e),o}var T,E=e((()=>{s(),T={radius:{type:u.FusedNumber,toggleKey:`radiusPerConrner`,toggleTitles:[`Radius`,`Radius per side`],valueKeys:[`radiusTopLeft`,`radiusTopRight`,`radiusBottomRight`,`radiusBottomLeft`],valueLabels:[`TL`,`TR`,`BR`,`BL`],defaultValue:10,min:0}}}));function D({type:e,color:t,image:n,size:r}){return e===`custom`&&n?i(`img`,{...n,width:r,height:r}):i(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 256 256`,width:r,height:r,fill:t,children:i(`path`,{d:`M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm87.63,96H175.8c-1.41-28.46-10.27-55.47-25.12-77A88.2,88.2,0,0,1,215.63,120ZM128,215.89c-18.73-20.27-30.09-49-31.77-79.89h63.54C158.09,166.87,146.73,195.62,128,215.89ZM96.23,120c1.68-30.87,13-59.62,31.77-79.89,18.73,20.27,30.09,49,31.77,79.89Zm9.09-77C90.47,64.53,81.61,91.54,80.2,120H40.37A88.2,88.2,0,0,1,105.32,43ZM40.37,136H80.2c1.41,28.46,10.27,55.47,25.12,77A88.2,88.2,0,0,1,40.37,136Zm110.31,77c14.85-21.56,23.71-48.57,25.12-77h39.83A88.2,88.2,0,0,1,150.68,213Z`})})}function O({type:e,color:t,image:n,size:r}){return e===`custom`&&n?i(`img`,{...n,width:r,height:r}):i(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 12 12`,width:r,height:r,children:i(`path`,{d:`M 2 4.5 L 6 8.5 L 10 4.5`,fill:`none`,stroke:t,strokeWidth:1.5,strokeLinecap:`round`,strokeLinejoin:`round`})})}var k,A,j,M,N,P=e((()=>{a(),s(),n(),m(),_(),b(),C(),E(),k=`framer-locale-picker`,(function(e){e.Default=`default`,e.Custom=`custom`})(A||={}),(function(e){e.Default=`default`,e.Custom=`custom`})(j||={}),M=l(({font:e,fillColor:n,textColor:a,icon:s,caret:c,options:{title:l,gap:u,border:p,hover:m,focus:g},style:_,...y})=>{let b=r(),{activeLocale:S,locales:C,setLocale:T}=d(),E=S?.id??`default`,[A,j]=t(E),[M,N]=t(E),P=C.find(e=>e.id===M);A!==E&&(j(E),M!==E&&N(E));function F(e){let t=e.target.value;N(t),T(C.find(e=>e.id===t))}return o(`div`,{className:k,style:_,children:[i(`label`,{htmlFor:b,children:`Select Language`}),i(`select`,{id:b,value:M,onChange:F,autoComplete:`off`,children:C.map(e=>i(`option`,{value:e.id,children:e.name},e.id))}),o(`div`,{className:`input`,style:{...e,"--framer-background-color":n,"--framer-color":a,...x(y),...w(y),...f(p),...v(m),...h(g),gap:u},children:[s&&i(`div`,{className:`icon`,children:i(D,{...s})}),l&&i(`div`,{className:`title`,children:P?.name??`English`}),c&&i(`div`,{className:`caret`,children:i(O,{...c})})]})]})},[`
            .${k} {
                position: relative;
            }
        `,`
            .${k} label {
                position: absolute;
                width: 1px;
                height: 1px;
                margin: -1px;
                overflow: hidden;
                white-space: nowrap;
                clip: rect(0 0 0 0);
                clip-path: inset(50%);
            }
        `,`
            .${k} select {
                appearance: none;
                position: absolute;
                opacity: 0;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                cursor: inherit;
                width: 100%;
            }
        `,`
            .${k} .input {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100%;
                pointer-events: none;
                overflow: hidden;
                background-color: var(--framer-background-color);
                color: var(--framer-color);
                border-color: var(--framer-border-color);
            }
        `,`
            .${k} select:focus-visible + .input  {
                outline: var(--framer-focus-outline, none);
                outline-offset: var(--framer-focus-outline-offset);
            }
        `,`
            .${k}:hover .input {
                background-color: var(--framer-hover-background-color, var(--framer-background-color));
                color: var(--framer-hover-color, var(--framer-color));
                border-color: var(--framer-hover-border-color, var(--framer-border-color));
            }
        `,`
            .${k} .title {
                flex: 1 1 auto;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
            }
        `,`
            .${k} .icon, .${k} .caret {
                display: flex;
                align-items: center;
            }
        `]),M.displayName=`Locale Selector`,c(M,{font:{type:u.Font,controls:`extended`,defaultFontType:`sans-serif`,defaultValue:{fontSize:14,lineHeight:`1.5em`}},fillColor:{type:u.Color,title:`Fill`,optional:!0,defaultValue:`#eee`},textColor:{type:u.Color,title:`Text`,defaultValue:`#000`},...S,...T,icon:{type:u.Object,buttonTitle:`Size, Color`,optional:!0,controls:{type:{type:u.Enum,title:`Icon`,options:Object.values(A),optionTitles:[`Default`,`Custom`],displaySegmentedControl:!0,defaultValue:`default`},color:{type:u.Color,displaySegmentedControl:!0,defaultValue:`#000`,hidden:e=>e.type!==`default`},image:{type:u.ResponsiveImage,title:`File`,allowedFileTypes:[`jpg`,`png`,`svg`],hidden:e=>e.type!==`custom`},size:{type:u.Number,displayStepper:!0,defaultValue:18}}},caret:{type:u.Object,buttonTitle:`Size, Color`,optional:!0,controls:{type:{type:u.Enum,title:`Icon`,options:Object.values(j),optionTitles:[`Default`,`Custom`],displaySegmentedControl:!0,defaultValue:`default`},color:{type:u.Color,displaySegmentedControl:!0,defaultValue:`#000`,hidden:e=>e.type!==`default`},image:{type:u.ResponsiveImage,title:`File`,allowedFileTypes:[`jpg`,`png`,`svg`],hidden:e=>e.type!==`custom`},size:{type:u.Number,displayStepper:!0,defaultValue:12}},defaultValue:{}},options:{type:u.Object,title:`Options`,buttonTitle:`Border, Hover`,controls:{title:{type:u.Boolean,defaultValue:!0},gap:{type:u.Number,displayStepper:!0,defaultValue:5},border:{type:u.Object,buttonTitle:`Color, Width`,optional:!0,controls:p},hover:{type:u.Object,buttonTitle:`Fill, Border`,optional:!0,controls:y},focus:{type:u.Object,buttonTitle:`Color, Width`,controls:g}}}}),N=M}));export{P as n,N as t};
//# sourceMappingURL=shared-lib.D_VnmaNl.mjs.map