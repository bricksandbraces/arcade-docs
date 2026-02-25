import{j as c}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./index-CY-HDqYb.js";import{p as l}from"./ContextMenuList-BjZtb4V3.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";import"./index-ZRCHFLd-.js";import"./borders-N_bRvfGw.js";import"./colors-mvAPBTAn.js";const v={title:"F/ColorPicker",component:l,argTypes:{value:{control:"text"},"aria-label":{control:"text"}}},e={render:r=>{const[s,n]=p.useState(r.value||"#0291FF");return c.jsx(l,{...r,value:s,onChange:n})},args:{value:"#0291FF","aria-label":"Color picker"}};var o,t,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => {
    const [selectedColor, setSelectedColor] = useState(args.value || "#0291FF");
    return <ColorPicker {...args} value={selectedColor} onChange={setSelectedColor} />;
  },
  args: {
    value: "#0291FF",
    "aria-label": "Color picker"
  }
}`,...(a=(t=e.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const S=["Playground"];export{e as Playground,S as __namedExportsOrder,v as default};
