import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./index-D4lIrffr.js";import{k as c}from"./ColorPicker-BGVcXcpp.js";import"./index-BQQLSK9g.js";import"./index-DsJinFGm.js";import"./index-C7yw4mlf.js";import"./borders-N_bRvfGw.js";import"./colors-DFCrPdrr.js";const C={title:"Components/ColorPicker/ColorTile",component:c,argTypes:{selected:{control:"boolean"},color:{control:"color"},onSelect:{action:"selected"}}},e={render:o=>{const[r,a]=d.useState(o.selected||!1);return n.jsx(c,{...o,selected:r,onSelect:()=>a(!r)})},args:{color:"#FF6B6B",selected:!1,"aria-label":"Red color tile"}};var t,s,l;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => {
    const [selected, setSelected] = useState(args.selected || false);
    return <ColorTile {...args} selected={selected} onSelect={() => setSelected(!selected)} />;
  },
  args: {
    color: "#FF6B6B",
    selected: false,
    "aria-label": "Red color tile"
  }
}`,...(l=(s=e.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const B=["Playground"];export{e as Playground,B as __namedExportsOrder,C as default};
