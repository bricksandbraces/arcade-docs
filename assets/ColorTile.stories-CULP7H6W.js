import{j as d}from"./jsx-runtime-D_zvdyIk.js";import{r as l}from"./index-CY-HDqYb.js";import{s as a}from"./ContextMenuList-BnwLxK8t.js";import"./index-A6zbrgSY.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";import"./index-ZRCHFLd-.js";import"./sizes-BpUsT7VU.js";import"./colors-CoOIoG7W.js";const S={title:"Components/ColorPicker/ColorTile",component:a,argTypes:{selected:{control:"boolean"},color:{control:"color"},onSelect:{action:"selected"}}},m=e=>{const[r,t]=l.useState(e.selected??!1);return l.useEffect(()=>{t(e.selected??!1)},[e.selected]),d.jsx(a,{...e,selected:r,onSelect:()=>t(!r)})},o={render:m,args:{color:"#FF6B6B",selected:!1,"aria-label":"Red color tile"}};var s,n,c;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: PlaygroundComponent,
  args: {
    color: "#FF6B6B",
    selected: false,
    "aria-label": "Red color tile"
  }
}`,...(c=(n=o.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const B=["Playground"];export{o as Playground,B as __namedExportsOrder,S as default};
