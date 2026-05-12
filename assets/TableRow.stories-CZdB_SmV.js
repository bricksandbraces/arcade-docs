import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Jn as n,Qn as r,Xn as i,Zn as a,co as o,er as s,qa as c,t as l}from"./iframe-1mzDmMUm.js";var u,d,f,p,m,h,g,_,v;e((()=>{l(),u=t(o(),1),d=c(),f=t(o(),1),p={title:`Display & Data/DataTable/TableRow`,component:a,tags:[`autodocs`],argTypes:{kind:{control:`inline-radio`,options:r},disabled:{control:`boolean`}},args:{kind:`default`,disabled:!1},decorators:[e=>(0,d.jsx)(`div`,{className:`rounded-md bg-background p-md`,style:{width:768},children:(0,d.jsx)(`div`,{role:`table`,className:i,children:(0,d.jsx)(`div`,{role:`rowgroup`,className:n,children:(0,d.jsx)(e,{})})})})]},m={render:e=>(0,d.jsxs)(a,{...e,children:[(0,d.jsx)(s,{children:`Ada Lovelace`}),(0,d.jsx)(s,{children:`ada@example.com`}),(0,d.jsx)(s,{children:`Admin`})]})},h={args:{kind:`check`},render:e=>{let[t,n]=(0,u.useState)(!1);return(0,d.jsxs)(a,{...e,selected:t,onSelectionChange:n,children:[(0,d.jsx)(s,{children:`Grace Hopper`}),(0,d.jsx)(s,{children:`grace@example.com`}),(0,d.jsx)(s,{children:`Editor`})]})}},g={args:{kind:`radio`},render:e=>{let[t,n]=(0,u.useState)(null);return(0,d.jsx)(d.Fragment,{children:[`1`,`2`,`3`].map(r=>(0,f.createElement)(a,{...e,key:r,radioName:`people`,selected:t===r,onSelectionChange:e=>e&&n(r)},(0,d.jsxs)(s,{children:[`Person `,r]}),(0,d.jsxs)(s,{children:[`person`,r,`@example.com`]})))})}},_={args:{kind:`check`,disabled:!0,defaultSelected:!0},render:e=>(0,d.jsxs)(a,{...e,children:[(0,d.jsx)(s,{children:`Disabled row`}),(0,d.jsx)(s,{children:`Cannot be toggled`})]})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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