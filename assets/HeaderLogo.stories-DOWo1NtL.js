import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{go as n,t as r,to as i,ut as a}from"./iframe-D_22E2i2.js";var o,s,c,l,u,d,f,p;e((()=>{r(),o=t(i(),1),s=n(),c={title:`Layout & Structure/Header/HeaderLogo`,component:a,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:"Optional logo slot for the app header (20px wordmark height per Figma). Use standalone or pass children into `Header` via the optional `logo` prop."}}}},l=e=>`/arcade-docs/assets/${e}`,u=()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(`img`,{src:l(`logo_default-dark.svg`),alt:``,className:(0,o.default)(`h-[20px] w-auto max-w-full`,`dark:hidden`)}),(0,s.jsx)(`img`,{src:l(`logo_default-light.svg`),alt:``,className:(0,o.default)(`hidden h-[20px] w-auto max-w-full`,`dark:block`)})]}),d={render:()=>(0,s.jsx)(a,{children:(0,s.jsx)(u,{})})},f={render:()=>(0,s.jsx)(a,{href:`#`,linkLabel:`Home`,children:(0,s.jsx)(u,{})})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <HeaderLogo>
      <Wordmark />
    </HeaderLogo>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <HeaderLogo href="#" linkLabel="Home">
      <Wordmark />
    </HeaderLogo>
}`,...f.parameters?.docs?.source}}},p=[`Playground`,`AsLink`]}))();export{f as AsLink,d as Playground,p as __namedExportsOrder,c as default};