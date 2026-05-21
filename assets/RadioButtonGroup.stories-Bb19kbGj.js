import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Ar as n,go as r,jr as i,kn as a,t as o,to as s}from"./iframe-BmHhhjqm.js";var c,l,u,d,f,p;e((()=>{c=t(r(),1),o(),l=s(),u={title:`Inputs & Controls/RadioButton/RadioButtonGroup`,component:n,tags:[`autodocs`],argTypes:{label:{control:`text`},disabled:{control:`boolean`},readonly:{control:`boolean`},hideLabel:{control:`boolean`}},parameters:{docs:{description:{component:`Groups RadioButtons under a shared label and enforces single selection. Use for mutually exclusive form choices.`}}}},d={render:e=>{let[t,r]=(0,c.useState)(`option1`);return(0,l.jsxs)(n,{...e,value:t,onChange:e=>{r(e)},children:[(0,l.jsx)(i,{value:`option1`,children:`Option 1`}),(0,l.jsx)(i,{value:`option2`,children:`Option 2`}),(0,l.jsx)(i,{value:`option3`,children:`Option 3`})]})},args:{label:`Select an option`,disabled:!1,readonly:!1,hideLabel:!1}},f={render:()=>(0,l.jsx)(a,{})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <RadioButtonGroupSkeleton />
}`,...f.parameters?.docs?.source}}},p=[`Playground`,`Skeleton`]}))();export{d as Playground,f as Skeleton,p as __namedExportsOrder,u as default};