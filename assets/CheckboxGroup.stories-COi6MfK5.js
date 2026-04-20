import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./index-CY-HDqYb.js";import{o as s,m as n}from"./ContextMenuList-DA_OViit.js";import"./index-A6zbrgSY.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";import"./index-ZRCHFLd-.js";import"./sizes-BpUsT7VU.js";import"./colors-CoOIoG7W.js";const k={title:"Components/CheckboxGroup",component:s,argTypes:{label:{control:"text"},disabled:{control:"boolean"},readonly:{control:"boolean"},hideLabel:{control:"boolean"}}},e={render:i=>{const[l,p]=d.useState([]);return o.jsxs(s,{...i,value:l,onChange:c=>{p(c)},children:[o.jsx(n,{value:"option1",description:"First option"}),o.jsx(n,{value:"option2",description:"Second option"}),o.jsx(n,{value:"option3",description:"Third option"})]})},args:{label:"Select options",disabled:!1,readonly:!1,hideLabel:!1}};var r,t,a;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(t=e.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const S=["Playground"];export{e as Playground,S as __namedExportsOrder,k as default};
