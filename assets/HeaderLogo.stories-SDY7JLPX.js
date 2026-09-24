import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{i as n,is as r,ut as i,ys as a}from"./iframe-D6wzTZl9.js";import{n as o,t as s}from"./figmaDesign-CO6i5n9C.js";var c,l,u,d,f,p,m,h;e((()=>{n(),c=t(r(),1),o(),l=a(),u={title:`Layout & Structure/Header/HeaderLogo`,component:i,tags:[`autodocs`],parameters:{design:s(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=5097-807`),layout:`centered`,docs:{description:{component:"Optional logo slot for the app header (20px wordmark height per Figma). Use standalone or pass children into `Header` via the optional `logo` prop."}}}},d=e=>`/arcade-docs/assets/${e}`,f=()=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(`img`,{src:d(`logo_default-dark.svg`),alt:``,className:(0,c.default)(`h-[20px] w-auto max-w-full`,`dark:hidden`)}),(0,l.jsx)(`img`,{src:d(`logo_default-light.svg`),alt:``,className:(0,c.default)(`hidden h-[20px] w-auto max-w-full`,`dark:block`)})]}),p={render:()=>(0,l.jsx)(i,{children:(0,l.jsx)(f,{})})},m={render:()=>(0,l.jsx)(i,{href:`#`,linkLabel:`Home`,children:(0,l.jsx)(f,{})})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <HeaderLogo>
      <Wordmark />
    </HeaderLogo>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <HeaderLogo href="#" linkLabel="Home">
      <Wordmark />
    </HeaderLogo>
}`,...m.parameters?.docs?.source}}},h=[`Playground`,`AsLink`]}))();export{m as AsLink,p as Playground,h as __namedExportsOrder,u as default};