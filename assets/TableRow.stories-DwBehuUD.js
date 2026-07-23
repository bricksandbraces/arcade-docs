import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{To as n,cr as r,fr as i,lr as a,or as o,t as s,uo as c,ur as l}from"./iframe-B5zdIyFp.js";var u,d,f,p,m,h,g,_,v;e((()=>{s(),u=t(n(),1),d=c(),f=t(n(),1),p={title:`Display & Data/DataTable/TableRow`,component:a,tags:[`autodocs`],argTypes:{kind:{control:`inline-radio`,options:l},disabled:{control:`boolean`}},args:{kind:`default`,disabled:!1},decorators:[e=>(0,d.jsx)(`div`,{className:`bg-background p-md rounded-md`,style:{width:768},children:(0,d.jsx)(`div`,{role:`table`,className:r,children:(0,d.jsx)(`div`,{role:`rowgroup`,className:o,children:(0,d.jsx)(e,{})})})})]},m={render:e=>(0,d.jsxs)(a,{...e,showBorderTop:!0,showBorderBottom:!0,children:[(0,d.jsx)(i,{columnBorderRight:!0,children:`Ada Lovelace`}),(0,d.jsx)(i,{columnBorderRight:!0,children:`ada@example.com`}),(0,d.jsx)(i,{children:`Admin`})]})},h={args:{kind:`check`},render:e=>{let[t,n]=(0,u.useState)(!1);return(0,d.jsxs)(a,{...e,selected:t,onSelectionChange:n,showBorderTop:!0,showBorderBottom:!0,leadingCellColumnBorderRight:!0,children:[(0,d.jsx)(i,{columnBorderRight:!0,children:`Grace Hopper`}),(0,d.jsx)(i,{columnBorderRight:!0,children:`grace@example.com`}),(0,d.jsx)(i,{children:`Editor`})]})}},g={args:{kind:`radio`},render:e=>{let[t,n]=(0,u.useState)(null),r=[`1`,`2`,`3`];return(0,d.jsx)(d.Fragment,{children:r.map((o,s)=>(0,f.createElement)(a,{...e,key:o,radioName:`people`,selected:t===o,onSelectionChange:e=>e&&n(o),showBorderTop:s===0,showBorderBottom:s<r.length-1,leadingCellColumnBorderRight:!0},(0,d.jsxs)(i,{columnBorderRight:!0,children:[`Person `,o]}),(0,d.jsxs)(i,{children:[`person`,o,`@example.com`]})))})}},_={args:{kind:`check`,disabled:!0,defaultSelected:!0},render:e=>(0,d.jsxs)(a,{...e,showBorderTop:!0,showBorderBottom:!0,leadingCellColumnBorderRight:!0,children:[(0,d.jsx)(i,{columnBorderRight:!0,children:`Disabled row`}),(0,d.jsx)(i,{children:`Cannot be toggled`})]})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <TableRow {...args} showBorderTop showBorderBottom>
      <TableCell columnBorderRight>Ada Lovelace</TableCell>
      <TableCell columnBorderRight>ada@example.com</TableCell>
      <TableCell>Admin</TableCell>
    </TableRow>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    kind: "check"
  },
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selected, setSelected] = useState(false);
    return <TableRow {...args} selected={selected} onSelectionChange={setSelected} showBorderTop showBorderBottom leadingCellColumnBorderRight>
        <TableCell columnBorderRight>Grace Hopper</TableCell>
        <TableCell columnBorderRight>grace@example.com</TableCell>
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
    const ids = ["1", "2", "3"];
    return <>
        {ids.map((id, index) => <TableRow {...args} key={id} radioName="people" selected={selectedId === id} onSelectionChange={next => next && setSelectedId(id)} showBorderTop={index === 0} showBorderBottom={index < ids.length - 1} leadingCellColumnBorderRight>
            <TableCell columnBorderRight>Person {id}</TableCell>
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
  render: args => <TableRow {...args} showBorderTop showBorderBottom leadingCellColumnBorderRight>
      <TableCell columnBorderRight>Disabled row</TableCell>
      <TableCell>Cannot be toggled</TableCell>
    </TableRow>
}`,..._.parameters?.docs?.source}}},v=[`Playground`,`CheckSelection`,`RadioSelection`,`Disabled`]}))();export{h as CheckSelection,_ as Disabled,m as Playground,g as RadioSelection,v as __namedExportsOrder,p as default};