import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{ar as n,ir as r,ro as i,rr as a,sr as o,t as s,tr as c,vo as l}from"./iframe-C1Q2u2SU.js";var u,d,f,p,m,h,g,_,v;e((()=>{s(),u=t(l(),1),d=i(),f=t(l(),1),p={title:`Display & Data/DataTable/TableRow`,component:r,tags:[`autodocs`],argTypes:{kind:{control:`inline-radio`,options:n},disabled:{control:`boolean`}},args:{kind:`default`,disabled:!1},decorators:[e=>(0,d.jsx)(`div`,{className:`rounded-md bg-background p-md`,style:{width:768},children:(0,d.jsx)(`div`,{role:`table`,className:a,children:(0,d.jsx)(`div`,{role:`rowgroup`,className:c,children:(0,d.jsx)(e,{})})})})]},m={render:e=>(0,d.jsxs)(r,{...e,children:[(0,d.jsx)(o,{children:`Ada Lovelace`}),(0,d.jsx)(o,{children:`ada@example.com`}),(0,d.jsx)(o,{children:`Admin`})]})},h={args:{kind:`check`},render:e=>{let[t,n]=(0,u.useState)(!1);return(0,d.jsxs)(r,{...e,selected:t,onSelectionChange:n,children:[(0,d.jsx)(o,{children:`Grace Hopper`}),(0,d.jsx)(o,{children:`grace@example.com`}),(0,d.jsx)(o,{children:`Editor`})]})}},g={args:{kind:`radio`},render:e=>{let[t,n]=(0,u.useState)(null);return(0,d.jsx)(d.Fragment,{children:[`1`,`2`,`3`].map(i=>(0,f.createElement)(r,{...e,key:i,radioName:`people`,selected:t===i,onSelectionChange:e=>e&&n(i)},(0,d.jsxs)(o,{children:[`Person `,i]}),(0,d.jsxs)(o,{children:[`person`,i,`@example.com`]})))})}},_={args:{kind:`check`,disabled:!0,defaultSelected:!0},render:e=>(0,d.jsxs)(r,{...e,children:[(0,d.jsx)(o,{children:`Disabled row`}),(0,d.jsx)(o,{children:`Cannot be toggled`})]})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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