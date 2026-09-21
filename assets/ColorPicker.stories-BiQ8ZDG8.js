import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Ds as n,Dt as r,fs as i,t as a}from"./iframe-RYiXY6gz.js";import{n as o,t as s}from"./figmaDesign-CO6i5n9C.js";var c,l,u,d,f;e((()=>{c=t(n(),1),a(),o(),l=i(),u={title:`Inputs & Controls/ColorPicker`,component:r,tags:[`autodocs`],argTypes:{value:{control:`text`},"aria-label":{control:`text`}},parameters:{design:s(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=2363-4605&m=dev`),docs:{description:{component:`Grid of color swatches for picking a single color. Use in customization panels where a curated palette is preferable to a full color wheel.`}}}},d={render:e=>{let[t,n]=(0,c.useState)(e.value||`#0291FF`);return(0,l.jsx)(r,{...e,value:t,onChange:n})},args:{value:`#0291FF`,"aria-label":`Color picker`}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [selectedColor, setSelectedColor] = useState(args.value || "#0291FF");
    return <ColorPicker {...args} value={selectedColor} onChange={setSelectedColor} />;
  },
  args: {
    value: "#0291FF",
    "aria-label": "Color picker"
  }
}`,...d.parameters?.docs?.source}}},f=[`Playground`]}))();export{d as Playground,f as __namedExportsOrder,u as default};