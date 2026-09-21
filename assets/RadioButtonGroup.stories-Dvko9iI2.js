import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Ci as n,Es as r,ar as i,ds as a,t as o,wi as s}from"./iframe-Dxk2N5E-.js";import{n as c,t as l}from"./figmaDesign-CO6i5n9C.js";var u,d,f,p,m,h;e((()=>{u=t(r(),1),o(),c(),d=a(),f={title:`Inputs & Controls/RadioButton/RadioButtonGroup`,component:n,tags:[`autodocs`],argTypes:{label:{control:`text`},disabled:{control:`boolean`},readonly:{control:`boolean`},hideLabel:{control:`boolean`}},parameters:{design:l(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=2149-2602`),docs:{description:{component:`Groups RadioButtons under a shared label and enforces single selection. Use for mutually exclusive form choices.`}}}},p={render:e=>{let[t,r]=(0,u.useState)(`option1`);return(0,d.jsxs)(n,{...e,value:t,onChange:e=>{r(e)},children:[(0,d.jsx)(s,{value:`option1`,children:`Option 1`}),(0,d.jsx)(s,{value:`option2`,children:`Option 2`}),(0,d.jsx)(s,{value:`option3`,children:`Option 3`})]})},args:{label:`Select an option`,disabled:!1,readonly:!1,hideLabel:!1}},m={render:()=>(0,d.jsx)(i,{})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<string | undefined>("option1");
    return <RadioButtonGroup {...args} value={value} onChange={newValue => {
      setValue(newValue);
    }}>
        <RadioButton value="option1">Option 1</RadioButton>
        <RadioButton value="option2">Option 2</RadioButton>
        <RadioButton value="option3">Option 3</RadioButton>
      </RadioButtonGroup>;
  },
  args: {
    label: "Select an option",
    disabled: false,
    readonly: false,
    hideLabel: false
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <RadioButtonGroupSkeleton />
}`,...m.parameters?.docs?.source}}},h=[`Playground`,`Skeleton`]}))();export{p as Playground,m as Skeleton,h as __namedExportsOrder,f as default};