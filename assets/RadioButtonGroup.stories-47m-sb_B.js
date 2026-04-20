import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./index-CY-HDqYb.js";import{bu as l,bt as n}from"./ContextMenuList-DS-QXGCp.js";import"./index-A6zbrgSY.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";import"./index-ZRCHFLd-.js";import"./sizes-BpUsT7VU.js";import"./colors-CoOIoG7W.js";const h={title:"Components/RadioButtonGroup",component:l,argTypes:{label:{control:"text"},disabled:{control:"boolean"},readonly:{control:"boolean"},hideLabel:{control:"boolean"}}},e={render:i=>{const[s,u]=d.useState("option1");return o.jsxs(l,{...i,value:s,onChange:p=>{u(p)},children:[o.jsx(n,{value:"option1",children:"Option 1"}),o.jsx(n,{value:"option2",children:"Option 2"}),o.jsx(n,{value:"option3",children:"Option 3"})]})},args:{label:"Select an option",disabled:!1,readonly:!1,hideLabel:!1}};var t,a,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(r=(a=e.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const O=["Playground"];export{e as Playground,O as __namedExportsOrder,h as default};
