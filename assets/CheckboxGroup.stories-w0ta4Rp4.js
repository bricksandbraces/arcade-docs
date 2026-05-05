import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Cn as n,Ii as r,Zi as i,t as a,wn as o}from"./iframe-B1mIPWxP.js";var s,c,l,u,d;e((()=>{s=t(i(),1),a(),c=r(),l={title:`Components/CheckboxGroup`,component:n,tags:[`autodocs`],argTypes:{label:{control:`text`},disabled:{control:`boolean`},readonly:{control:`boolean`},hideLabel:{control:`boolean`}},parameters:{docs:{description:{component:`Groups related Checkboxes under a shared label and manages their selected values together. Use for multi-select form fields.`}}}},u={render:e=>{let[t,r]=(0,s.useState)([]);return(0,c.jsxs)(n,{...e,value:t,onChange:e=>{r(e)},children:[(0,c.jsx)(o,{value:`option1`,description:`First option`}),(0,c.jsx)(o,{value:`option2`,description:`Second option`}),(0,c.jsx)(o,{value:`option3`,description:`Third option`})]})},args:{label:`Select options`,disabled:!1,readonly:!1,hideLabel:!1}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d=[`Playground`]}))();export{u as Playground,d as __namedExportsOrder,l as default};