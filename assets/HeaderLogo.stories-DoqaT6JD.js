import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Ka as n,so as r,st as i,t as a}from"./iframe-B16uoxlA.js";var o,s,c,l,u,d,f,p;e((()=>{a(),o=t(n(),1),s=r(),c={title:`Layout & Structure/Header/HeaderLogo`,component:i,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:"Optional logo slot for the app header (20px wordmark height per Figma). Use standalone or pass children into `Header` via the optional `logo` prop."}}}},l=e=>`/arcade-docs/assets/${e}`,u=()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(`img`,{src:l(`logo_default-dark.svg`),alt:``,className:(0,o.default)(`h-[20px] w-auto max-w-full`,`dark:hidden`)}),(0,s.jsx)(`img`,{src:l(`logo_default-light.svg`),alt:``,className:(0,o.default)(`hidden h-[20px] w-auto max-w-full`,`dark:block`)})]}),d={render:()=>(0,s.jsx)(i,{children:(0,s.jsx)(u,{})})},f={render:()=>(0,s.jsx)(i,{href:`#`,linkLabel:`Home`,children:(0,s.jsx)(u,{})})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <HeaderLogo>
      <Wordmark />
    </HeaderLogo>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <HeaderLogo href="#" linkLabel="Home">
      <Wordmark />
    </HeaderLogo>
}`,...f.parameters?.docs?.source}}},p=[`Playground`,`AsLink`]}))();export{f as AsLink,d as Playground,p as __namedExportsOrder,c as default};