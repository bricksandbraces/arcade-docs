import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{I as n,L as r,R as i,ea as a,ha as o,t as s}from"./iframe-D3A0Qfxl.js";var c,l,u,d,f,p,m,h,g;e((()=>{s(),c=t(o(),1),l=a(),u=t(o(),1),d={title:`Fabian Supervision/DataTable/TableRow`,component:n,argTypes:{kind:{control:`inline-radio`,options:r},disabled:{control:`boolean`}},args:{kind:`default`,disabled:!1},decorators:[e=>(0,l.jsx)(`div`,{style:{width:768},role:`grid`,children:(0,l.jsx)(`div`,{role:`rowgroup`,children:(0,l.jsx)(e,{})})})]},f={render:e=>(0,l.jsxs)(n,{...e,children:[(0,l.jsx)(i,{children:`Ada Lovelace`}),(0,l.jsx)(i,{children:`ada@example.com`}),(0,l.jsx)(i,{children:`Admin`})]})},p={args:{kind:`check`},render:e=>{let[t,r]=(0,c.useState)(!1);return(0,l.jsxs)(n,{...e,selected:t,onSelectionChange:r,children:[(0,l.jsx)(i,{children:`Grace Hopper`}),(0,l.jsx)(i,{children:`grace@example.com`}),(0,l.jsx)(i,{children:`Editor`})]})}},m={args:{kind:`radio`},render:e=>{let[t,r]=(0,c.useState)(null);return(0,l.jsx)(`div`,{className:`gap-sm flex flex-col`,children:[`1`,`2`,`3`].map(a=>(0,u.createElement)(n,{...e,key:a,radioName:`people`,selected:t===a,onSelectionChange:e=>e&&r(a)},(0,l.jsxs)(i,{children:[`Person `,a]}),(0,l.jsxs)(i,{children:[`person`,a,`@example.com`]})))})}},h={args:{kind:`check`,disabled:!0,defaultSelected:!0},render:e=>(0,l.jsxs)(n,{...e,children:[(0,l.jsx)(i,{children:`Disabled row`}),(0,l.jsx)(i,{children:`Cannot be toggled`})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <TableRow {...args}>
      <TableCell>Ada Lovelace</TableCell>
      <TableCell>ada@example.com</TableCell>
      <TableCell>Admin</TableCell>
    </TableRow>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    kind: "radio"
  },
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedId, setSelectedId] = useState<string | null>(null);
    return <div className="gap-sm flex flex-col">
        {["1", "2", "3"].map(id => <TableRow {...args} key={id} radioName="people" selected={selectedId === id} onSelectionChange={next => next && setSelectedId(id)}>
            <TableCell>Person {id}</TableCell>
            <TableCell>person{id}@example.com</TableCell>
          </TableRow>)}
      </div>;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    kind: "check",
    disabled: true,
    defaultSelected: true
  },
  render: args => <TableRow {...args}>
      <TableCell>Disabled row</TableCell>
      <TableCell>Cannot be toggled</TableCell>
    </TableRow>
}`,...h.parameters?.docs?.source}}},g=[`Playground`,`CheckSelection`,`RadioSelection`,`Disabled`]}))();export{p as CheckSelection,h as Disabled,f as Playground,m as RadioSelection,g as __namedExportsOrder,d as default};