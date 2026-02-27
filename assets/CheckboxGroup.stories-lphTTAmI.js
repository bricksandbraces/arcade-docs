import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./index-CY-HDqYb.js";import{m as s,k as n}from"./ContextMenuList-Da-ryDLs.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";import"./index-ZRCHFLd-.js";import"./borders-N_bRvfGw.js";import"./colors-mvAPBTAn.js";const v={title:"F/Checkbox/CheckboxGroup",component:s,argTypes:{label:{control:"text"},disabled:{control:"boolean"},hideLabel:{control:"boolean"}}},o={render:i=>{const[l,p]=d.useState([]);return e.jsxs(s,{...i,value:l,onChange:c=>{p(c)},children:[e.jsx(n,{value:"option1",description:"First option"}),e.jsx(n,{value:"option2",description:"Second option"}),e.jsx(n,{value:"option3",description:"Third option"})]})},args:{label:"Select options",disabled:!1,hideLabel:!1}};var t,r,a;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
    hideLabel: false
  }
}`,...(a=(r=o.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const f=["Playground"];export{o as Playground,f as __namedExportsOrder,v as default};
