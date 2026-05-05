import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Pi as n,Tn as r,Yi as i,t as a,wn as o}from"./iframe-CppZwykT.js";var s,c,l,u,d;e((()=>{s=t(i(),1),a(),c=n(),l={title:`Components/RadioButtonGroup`,component:o,tags:[`autodocs`],argTypes:{label:{control:`text`},disabled:{control:`boolean`},readonly:{control:`boolean`},hideLabel:{control:`boolean`}},parameters:{docs:{description:{component:`Groups RadioButtons under a shared label and enforces single selection. Use for mutually exclusive form choices.`}}}},u={render:e=>{let[t,n]=(0,s.useState)(`option1`);return(0,c.jsxs)(o,{...e,value:t,onChange:e=>{n(e)},children:[(0,c.jsx)(r,{value:`option1`,children:`Option 1`}),(0,c.jsx)(r,{value:`option2`,children:`Option 2`}),(0,c.jsx)(r,{value:`option3`,children:`Option 3`})]})},args:{label:`Select an option`,disabled:!1,readonly:!1,hideLabel:!1}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d=[`Playground`]}))();export{u as Playground,d as __namedExportsOrder,l as default};