import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{So as n,cr as r,ir as i,or as a,so as o,sr as s,t as c,ur as l}from"./iframe-B16uoxlA.js";var u,d,f,p,m,h,g,_,v;e((()=>{c(),u=t(n(),1),d=o(),f=t(n(),1),p={title:`Display & Data/DataTable/TableRow`,component:s,tags:[`autodocs`],argTypes:{kind:{control:`inline-radio`,options:r},disabled:{control:`boolean`}},args:{kind:`default`,disabled:!1},decorators:[e=>(0,d.jsx)(`div`,{className:`rounded-md bg-background p-md`,style:{width:768},children:(0,d.jsx)(`div`,{role:`table`,className:a,children:(0,d.jsx)(`div`,{role:`rowgroup`,className:i,children:(0,d.jsx)(e,{})})})})]},m={render:e=>(0,d.jsxs)(s,{...e,children:[(0,d.jsx)(l,{children:`Ada Lovelace`}),(0,d.jsx)(l,{children:`ada@example.com`}),(0,d.jsx)(l,{children:`Admin`})]})},h={args:{kind:`check`},render:e=>{let[t,n]=(0,u.useState)(!1);return(0,d.jsxs)(s,{...e,selected:t,onSelectionChange:n,children:[(0,d.jsx)(l,{children:`Grace Hopper`}),(0,d.jsx)(l,{children:`grace@example.com`}),(0,d.jsx)(l,{children:`Editor`})]})}},g={args:{kind:`radio`},render:e=>{let[t,n]=(0,u.useState)(null);return(0,d.jsx)(d.Fragment,{children:[`1`,`2`,`3`].map(r=>(0,f.createElement)(s,{...e,key:r,radioName:`people`,selected:t===r,onSelectionChange:e=>e&&n(r)},(0,d.jsxs)(l,{children:[`Person `,r]}),(0,d.jsxs)(l,{children:[`person`,r,`@example.com`]})))})}},_={args:{kind:`check`,disabled:!0,defaultSelected:!0},render:e=>(0,d.jsxs)(s,{...e,children:[(0,d.jsx)(l,{children:`Disabled row`}),(0,d.jsx)(l,{children:`Cannot be toggled`})]})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <TableRow {...args}>
      <TableCell>Ada Lovelace</TableCell>
      <TableCell>ada@example.com</TableCell>
      <TableCell>Admin</TableCell>
    </TableRow>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    kind: "check"
  },
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selected, setSelected] = useState(false);
    return <TableRow {...args} selected={selected} onSelectionChange={setSelected}>
        <TableCell>Grace Hopper</TableCell>
        <TableCell>grace@example.com</TableCell>
        <TableCell>Editor</TableCell>
      </TableRow>;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    kind: "radio"
  },
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedId, setSelectedId] = useState<string | null>(null);
    return <>
        {["1", "2", "3"].map(id => <TableRow {...args} key={id} radioName="people" selected={selectedId === id} onSelectionChange={next => next && setSelectedId(id)}>
            <TableCell>Person {id}</TableCell>
            <TableCell>person{id}@example.com</TableCell>
          </TableRow>)}
      </>;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    kind: "check",
    disabled: true,
    defaultSelected: true
  },
  render: args => <TableRow {...args}>
      <TableCell>Disabled row</TableCell>
      <TableCell>Cannot be toggled</TableCell>
    </TableRow>
}`,..._.parameters?.docs?.source}}},v=[`Playground`,`CheckSelection`,`RadioSelection`,`Disabled`]}))();export{h as CheckSelection,_ as Disabled,m as Playground,g as RadioSelection,v as __namedExportsOrder,p as default};