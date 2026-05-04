import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Di as n,Hi as r,jt as i,t as a}from"./iframe-CSWcRbRO.js";var o,s,c,l,u;e((()=>{o=t(r(),1),a(),s=n(),c={title:`Components/ColorPicker`,component:i,tags:[`autodocs`],argTypes:{value:{control:`text`},"aria-label":{control:`text`}},parameters:{docs:{description:{component:`Grid of color swatches for picking a single color. Use in customization panels where a curated palette is preferable to a full color wheel.`}}}},l={render:e=>{let[t,n]=(0,o.useState)(e.value||`#0291FF`);return(0,s.jsx)(i,{...e,value:t,onChange:n})},args:{value:`#0291FF`,"aria-label":`Color picker`}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [selectedColor, setSelectedColor] = useState(args.value || "#0291FF");
    return <ColorPicker {...args} value={selectedColor} onChange={setSelectedColor} />;
  },
  args: {
    value: "#0291FF",
    "aria-label": "Color picker"
  }
}`,...l.parameters?.docs?.source}}},u=[`Playground`]}))();export{l as Playground,u as __namedExportsOrder,c as default};