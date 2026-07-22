import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{At as n,Co as r,co as i,t as a}from"./iframe-M7vOl6ig.js";var o,s,c,l,u;e((()=>{o=t(r(),1),a(),s=i(),c={title:`Inputs & Controls/ColorPicker`,component:n,tags:[`autodocs`],argTypes:{value:{control:`text`},"aria-label":{control:`text`}},parameters:{docs:{description:{component:`Grid of color swatches for picking a single color. Use in customization panels where a curated palette is preferable to a full color wheel.`}}}},l={render:e=>{let[t,r]=(0,o.useState)(e.value||`#0291FF`);return(0,s.jsx)(n,{...e,value:t,onChange:r})},args:{value:`#0291FF`,"aria-label":`Color picker`}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [selectedColor, setSelectedColor] = useState(args.value || "#0291FF");
    return <ColorPicker {...args} value={selectedColor} onChange={setSelectedColor} />;
  },
  args: {
    value: "#0291FF",
    "aria-label": "Color picker"
  }
}`,...l.parameters?.docs?.source}}},u=[`Playground`]}))();export{l as Playground,u as __namedExportsOrder,c as default};