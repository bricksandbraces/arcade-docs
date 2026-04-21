import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{bu as f,bv as g}from"./ContextMenuList-DU-bfPtc.js";import{R as y}from"./index-CY-HDqYb.js";import"./index-A6zbrgSY.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";import"./index-ZRCHFLd-.js";import"./sizes-BpUsT7VU.js";import"./colors-CoOIoG7W.js";const A={title:"WIP Components/Search/Search",component:g,argTypes:{size:{control:"inline-radio",options:f},showClear:{control:"boolean"},disabled:{control:"boolean"}},args:{id:"search-playground",placeholder:"What are you looking for?",size:"small",showClear:!0,disabled:!1}},e={render:function(h){const[x,n]=y.useState("");return t.jsx(g,{...h,value:x,onChange:S=>n(S.target.value),onClear:()=>n("")})}},a={args:{defaultValue:"",showClear:!0}},r={args:{defaultValue:"Arcade",showClear:!0,leadingSlot:t.jsx("span",{className:"typography-label text-text-accent inline-flex items-center",children:"/"}),trailingSlot:t.jsx("span",{className:"typography-label text-text-accent inline-flex items-center",children:"CMD"})}};var o,s,l;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: function Render(args) {
    const [value, setValue] = React.useState("");
    return <Search {...args} value={value} onChange={e => setValue(e.target.value)} onClear={() => setValue("")} />;
  }
}`,...(l=(s=e.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var c,i,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    defaultValue: "",
    showClear: true
  }
}`,...(u=(i=a.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var p,d,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    defaultValue: "Arcade",
    showClear: true,
    leadingSlot: <span className="typography-label text-text-accent inline-flex items-center">
        /
      </span>,
    trailingSlot: <span className="typography-label text-text-accent inline-flex items-center">
        CMD
      </span>
  }
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const D=["Playground","Uncontrolled","Slot"];export{e as Playground,r as Slot,a as Uncontrolled,D as __namedExportsOrder,A as default};
