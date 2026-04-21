import{j as p}from"./jsx-runtime-D_zvdyIk.js";import{bs as g,bt as u}from"./ContextMenuList-BM0Gkwdy.js";import{R as h}from"./index-CY-HDqYb.js";import"./index-A6zbrgSY.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";import"./index-ZRCHFLd-.js";import"./sizes-BpUsT7VU.js";import"./colors-CoOIoG7W.js";const j={title:"WIP Components/Search/Search",component:u,argTypes:{size:{control:"inline-radio",options:g},showClear:{control:"boolean"},disabled:{control:"boolean"}},args:{id:"search-playground",placeholder:"What are you looking for?",size:"small",showClear:!0,disabled:!1}},e={render:function(i){const[d,a]=h.useState("");return p.jsx(u,{...i,value:d,onChange:m=>a(m.target.value),onClear:()=>a("")})}},r={args:{defaultValue:"",showClear:!0}};var o,t,s;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: function Render(args) {
    const [value, setValue] = React.useState("");
    return <Search {...args} value={value} onChange={e => setValue(e.target.value)} onClear={() => setValue("")} />;
  }
}`,...(s=(t=e.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};var n,l,c;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    defaultValue: "",
    showClear: true
  }
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const z=["Playground","Uncontrolled"];export{e as Playground,r as Uncontrolled,z as __namedExportsOrder,j as default};
