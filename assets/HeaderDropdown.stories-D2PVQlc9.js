import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{am as r,an as a}from"./ContextMenu-CxMNWebl.js";import"./index-CY-HDqYb.js";import"./index-A6zbrgSY.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";const t=[{label:"Link",onClick:()=>{}},{label:"Link",onClick:()=>{}},{label:"Link",onClick:()=>{}}],u=[{label:"Link",onClick:()=>{}},{label:"Link",onClick:()=>{},disabled:!0},{label:"Link",onClick:()=>{}}],j={title:"Fabian Supervision/Header/Dropdown",component:r,argTypes:{selected:{control:"boolean"},disabled:{control:"boolean"},open:{control:"boolean"},placement:{control:"inline-radio",options:["bottom-start","bottom-end"]}}},o={render:p=>e.jsx("div",{className:"flex justify-start",children:e.jsx(r,{...p,children:e.jsx(a,{children:"Menu"})})}),args:{selected:!1,disabled:!1,placement:"bottom-start",items:t}},n={render:()=>e.jsxs("div",{className:"gap-md flex",children:[e.jsx(r,{items:t,children:e.jsx(a,{children:"Overview"})}),e.jsx(r,{selected:!0,items:t,children:e.jsx(a,{children:"Overview"})}),e.jsx(r,{disabled:!0,items:u,children:e.jsx(a,{children:"Overview"})})]}),parameters:{layout:"padded"}};var s,d,i;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => <div className="flex justify-start">
      <HeaderDropdown {...args}>
        <HeaderDropdownButton>Menu</HeaderDropdownButton>
      </HeaderDropdown>
    </div>,
  args: {
    selected: false,
    disabled: false,
    placement: "bottom-start",
    items: baseItems
  }
}`,...(i=(d=o.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var l,c,m;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <div className="gap-md flex">
      <HeaderDropdown items={baseItems}>
        <HeaderDropdownButton>Overview</HeaderDropdownButton>
      </HeaderDropdown>
      <HeaderDropdown selected items={baseItems}>
        <HeaderDropdownButton>Overview</HeaderDropdownButton>
      </HeaderDropdown>
      <HeaderDropdown disabled items={itemsWithDisabled}>
        <HeaderDropdownButton>Overview</HeaderDropdownButton>
      </HeaderDropdown>
    </div>,
  parameters: {
    layout: "padded"
  }
}`,...(m=(c=n.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const f=["Playground","Overview"];export{n as Overview,o as Playground,f as __namedExportsOrder,j as default};
