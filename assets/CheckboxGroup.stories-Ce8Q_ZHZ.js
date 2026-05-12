import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Bn as n,Ea as r,da as i,t as a,zn as o}from"./iframe-BY85Oiue.js";var s,c,l,u,d;e((()=>{s=t(r(),1),a(),c=i(),l={title:`Inputs & Controls/Checkbox/CheckboxGroup`,component:o,tags:[`autodocs`],argTypes:{label:{control:`text`},disabled:{control:`boolean`},readonly:{control:`boolean`},hideLabel:{control:`boolean`}},parameters:{docs:{description:{component:`Groups related Checkboxes under a shared label and manages their selected values together. Use for multi-select form fields.`}}}},u={render:e=>{let[t,r]=(0,s.useState)([]);return(0,c.jsxs)(o,{...e,value:t,onChange:e=>{r(e)},children:[(0,c.jsx)(n,{value:`option1`,description:`First option`}),(0,c.jsx)(n,{value:`option2`,description:`Second option`}),(0,c.jsx)(n,{value:`option3`,description:`Third option`})]})},args:{label:`Select options`,disabled:!1,readonly:!1,hideLabel:!1}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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