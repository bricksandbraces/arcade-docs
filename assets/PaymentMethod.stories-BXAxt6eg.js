import{n as e}from"./chunk-jRWAZmH_.js";import{Bt as t,Es as n,Ht as r,Vt as i,i as a}from"./iframe-BNwjH-n2.js";import{n as o,t as s}from"./figmaDesign-CO6i5n9C.js";import{n as c,t as l}from"./figmaFrame-Czb2laIC.js";var u,d,f,p,m,h,g;e((()=>{a(),o(),c(),u=n(),d={title:`Display & Data/PaymentMethod`,component:t,tags:[`autodocs`],argTypes:{brand:{control:`select`,options:r},size:{control:`inline-radio`,options:i},label:{control:`text`}},args:{brand:`mastercard`,size:`sm`,label:`Mastercard`},parameters:{design:s(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=5717-5596`),docs:{description:{component:"Badge of a card network, named like Stripe's card brand ids so a provider's `brand` can be passed straight in. `inline` is the 16px mark used inside fields such as CreditCardInput."}}}},f={},p={parameters:{controls:{disable:!0}},render:()=>(0,u.jsx)(`div`,{className:`gap-lg grid grid-cols-[auto_repeat(4,max-content)] items-center`,children:r.map(e=>(0,u.jsxs)(`div`,{className:`contents`,children:[(0,u.jsx)(`span`,{className:`typography-label text-text-label`,children:e}),i.map(n=>(0,u.jsx)(t,{brand:e,size:n},n))]},e))})},m={parameters:{controls:{disable:!0}},render:()=>(0,u.jsx)(l,{node:`5717:6482`,width:34,height:24,children:(0,u.jsx)(t,{brand:`mastercard`,size:`sm`})})},h={parameters:{controls:{disable:!0}},render:()=>(0,u.jsx)(l,{node:`5717:6619`,width:58,height:40,children:(0,u.jsx)(t,{brand:`visa`,size:`lg`})})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="gap-lg grid grid-cols-[auto_repeat(4,max-content)] items-center">
      {PaymentMethodBrands.map(brand => <div key={brand} className="contents">
          <span className="typography-label text-text-label">{brand}</span>
          {PaymentMethodSizes.map(size => <PaymentMethod key={size} brand={brand} size={size} />)}
        </div>)}
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <FigmaFrame node="5717:6482" width={34} height={24}>
      <PaymentMethod brand="mastercard" size="sm" />
    </FigmaFrame>
}`,...m.parameters?.docs?.source},description:{story:'Figma "Size=sm, Payment method=Mastercard", for `scripts/figma-pixel-diff.mjs`.',...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <FigmaFrame node="5717:6619" width={58} height={40}>
      <PaymentMethod brand="visa" size="lg" />
    </FigmaFrame>
}`,...h.parameters?.docs?.source},description:{story:`Figma "Size=lg, Payment method=Visa".`,...h.parameters?.docs?.description}}},g=[`Playground`,`Overview`,`FigmaMastercardSmall`,`FigmaVisaLarge`]}))();export{m as FigmaMastercardSmall,h as FigmaVisaLarge,p as Overview,f as Playground,g as __namedExportsOrder,d as default};