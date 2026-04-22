import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{by as o,bx as a,bw as l}from"./ContextMenu-D_7vNk0Q.js";import"./index-CY-HDqYb.js";import"./index-A6zbrgSY.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";const b={title:"WIP Components/Switcher/SwitcherItem",component:a,argTypes:{size:{control:"inline-radio",options:o},disabled:{control:"boolean"}}},e={args:{value:"a",children:"Item",size:"small",disabled:!1},render:r=>s.jsxs(l,{defaultValue:"a",children:[s.jsx(a,{...r}),s.jsx(a,{value:"b",size:r.size,disabled:r.disabled,children:"Other"})]})};var t,i,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    value: "a",
    children: "Item",
    size: "small",
    disabled: false
  },
  render: args => <Switcher defaultValue="a">
      <SwitcherItem {...args} />
      <SwitcherItem value="b" size={args.size} disabled={args.disabled}>
        Other
      </SwitcherItem>
    </Switcher>
}`,...(n=(i=e.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const S=["Playground"];export{e as Playground,S as __namedExportsOrder,b as default};
