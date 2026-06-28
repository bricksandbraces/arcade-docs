import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Mr as n,_r as r,jr as i,oo as a,t as o,xo as s}from"./iframe-CUn7Dm5T.js";var c,l,u,d,f,p;e((()=>{c=t(s(),1),o(),l=a(),u={title:`Inputs & Controls/Checkbox/CheckboxGroup`,component:i,tags:[`autodocs`],argTypes:{label:{control:`text`},disabled:{control:`boolean`},readonly:{control:`boolean`},hideLabel:{control:`boolean`}},parameters:{docs:{description:{component:`Groups related Checkboxes under a shared label and manages their selected values together. Use for multi-select form fields.`}}}},d={render:e=>{let[t,r]=(0,c.useState)([]);return(0,l.jsxs)(i,{...e,value:t,onChange:e=>{r(e)},children:[(0,l.jsx)(n,{value:`option1`,description:`First option`}),(0,l.jsx)(n,{value:`option2`,description:`Second option`}),(0,l.jsx)(n,{value:`option3`,description:`Third option`})]})},args:{label:`Select options`,disabled:!1,readonly:!1,hideLabel:!1}},f={render:()=>(0,l.jsx)(r,{})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<string[]>([]);
    return <CheckboxGroup {...args} value={value} onChange={newValue => {
      setValue(newValue);
    }}>
        <Checkbox value="option1" description="First option" />
        <Checkbox value="option2" description="Second option" />
        <Checkbox value="option3" description="Third option" />
      </CheckboxGroup>;
  },
  args: {
    label: "Select options",
    disabled: false,
    readonly: false,
    hideLabel: false
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <CheckboxGroupSkeleton />
}`,...f.parameters?.docs?.source}}},p=[`Playground`,`Skeleton`]}))();export{d as Playground,f as Skeleton,p as __namedExportsOrder,u as default};