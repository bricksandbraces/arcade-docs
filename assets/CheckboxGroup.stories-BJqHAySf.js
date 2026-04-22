import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./index-CY-HDqYb.js";import{o as s,m as n}from"./ContextMenu-FljLXSaK.js";import"./index-A6zbrgSY.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";const C={title:"Components/CheckboxGroup",component:s,argTypes:{label:{control:"text"},disabled:{control:"boolean"},readonly:{control:"boolean"},hideLabel:{control:"boolean"}}},o={render:l=>{const[i,p]=d.useState([]);return e.jsxs(s,{...l,value:i,onChange:c=>{p(c)},children:[e.jsx(n,{value:"option1",description:"First option"}),e.jsx(n,{value:"option2",description:"Second option"}),e.jsx(n,{value:"option3",description:"Third option"})]})},args:{label:"Select options",disabled:!1,readonly:!1,hideLabel:!1}};var r,t,a;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(t=o.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const f=["Playground"];export{o as Playground,f as __namedExportsOrder,C as default};
