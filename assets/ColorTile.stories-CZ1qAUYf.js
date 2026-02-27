import{j as d}from"./jsx-runtime-D_zvdyIk.js";import{r as l}from"./index-CY-HDqYb.js";import{q as n}from"./ContextMenuList-Da-ryDLs.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";import"./index-ZRCHFLd-.js";import"./borders-N_bRvfGw.js";import"./colors-mvAPBTAn.js";const F={title:"F/ColorPicker/ColorTile",component:n,argTypes:{selected:{control:"boolean"},color:{control:"color"},onSelect:{action:"selected"}}},m=e=>{const[r,t]=l.useState(e.selected??!1);return l.useEffect(()=>{t(e.selected??!1)},[e.selected]),d.jsx(n,{...e,selected:r,onSelect:()=>t(!r)})},o={render:m,args:{color:"#FF6B6B",selected:!1,"aria-label":"Red color tile"}};var s,c,a;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: PlaygroundComponent,
  args: {
    color: "#FF6B6B",
    selected: false,
    "aria-label": "Red color tile"
  }
}`,...(a=(c=o.parameters)==null?void 0:c.docs)==null?void 0:a.source}}};const P=["Playground"];export{o as Playground,P as __namedExportsOrder,F as default};
