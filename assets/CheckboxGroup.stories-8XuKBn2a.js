import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Ds as n,Si as r,ei as i,fs as a,t as o,xi as s}from"./iframe-3giZHg2a.js";import{n as c,t as l}from"./figmaDesign-CO6i5n9C.js";var u,d,f,p,m,h;e((()=>{u=t(n(),1),o(),c(),d=a(),f={title:`Inputs & Controls/Checkbox/CheckboxGroup`,component:s,tags:[`autodocs`],argTypes:{label:{control:`text`},disabled:{control:`boolean`},readonly:{control:`boolean`},hideLabel:{control:`boolean`}},parameters:{design:l(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=2131-35993`),docs:{description:{component:`Groups related Checkboxes under a shared label and manages their selected values together. Use for multi-select form fields.`}}}},p={render:e=>{let[t,n]=(0,u.useState)([]);return(0,d.jsxs)(s,{...e,value:t,onChange:e=>{n(e)},children:[(0,d.jsx)(r,{value:`option1`,description:`First option`}),(0,d.jsx)(r,{value:`option2`,description:`Second option`}),(0,d.jsx)(r,{value:`option3`,description:`Third option`})]})},args:{label:`Select options`,disabled:!1,readonly:!1,hideLabel:!1}},m={render:()=>(0,d.jsx)(i,{})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <CheckboxGroupSkeleton />
}`,...m.parameters?.docs?.source}}},h=[`Playground`,`Skeleton`]}))();export{p as Playground,m as Skeleton,h as __namedExportsOrder,f as default};