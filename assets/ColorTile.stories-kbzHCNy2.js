import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Fs as n,Mt as r,bs as i,i as a}from"./iframe-DWyCpahx.js";import{n as o,t as s}from"./figmaDesign-CO6i5n9C.js";var c,l,u,d,f,p;e((()=>{c=t(n(),1),a(),o(),l=i(),u={parameters:{design:s(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=2361-4473&m=dev`)},title:`Inputs & Controls/ColorPicker/ColorTile`,component:r,tags:[`autodocs`],argTypes:{selected:{control:`boolean`},color:{control:`color`},onSelect:{action:`selected`}}},d=e=>{let[t,n]=(0,c.useState)(e.selected??!1);return(0,c.useEffect)(()=>{n(e.selected??!1)},[e.selected]),(0,l.jsx)(r,{...e,selected:t,onSelect:()=>n(!t)})},f={render:d,args:{color:`#FF6B6B`,selected:!1,"aria-label":`Red color tile`}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: PlaygroundComponent,
  args: {
    color: "#FF6B6B",
    selected: false,
    "aria-label": "Red color tile"
  }
}`,...f.parameters?.docs?.source}}},p=[`Playground`]}))();export{f as Playground,p as __namedExportsOrder,u as default};