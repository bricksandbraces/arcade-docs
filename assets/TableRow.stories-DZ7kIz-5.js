import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Mo as n,_o as r,fr as i,gr as a,hr as o,mr as s,t as c,vr as l}from"./iframe-dCkyJnNO.js";var u,d,f,p,m,h,g,_,v;e((()=>{c(),u=t(n(),1),d=r(),f=t(n(),1),p={title:`Display & Data/DataTable/TableRow`,component:o,tags:[`autodocs`],argTypes:{kind:{control:`inline-radio`,options:a},disabled:{control:`boolean`}},args:{kind:`default`,disabled:!1},decorators:[e=>(0,d.jsx)(`div`,{className:`bg-background p-md rounded-md`,style:{width:768},children:(0,d.jsx)(`div`,{role:`table`,className:s,children:(0,d.jsx)(`div`,{role:`rowgroup`,className:i,children:(0,d.jsx)(e,{})})})})]},m={render:e=>(0,d.jsxs)(o,{...e,showBorderTop:!0,showBorderBottom:!0,children:[(0,d.jsx)(l,{columnBorderRight:!0,children:`Ada Lovelace`}),(0,d.jsx)(l,{columnBorderRight:!0,children:`ada@example.com`}),(0,d.jsx)(l,{children:`Admin`})]})},h={args:{kind:`check`},render:e=>{let[t,n]=(0,u.useState)(!1);return(0,d.jsxs)(o,{...e,selected:t,onSelectionChange:n,showBorderTop:!0,showBorderBottom:!0,leadingCellColumnBorderRight:!0,children:[(0,d.jsx)(l,{columnBorderRight:!0,children:`Grace Hopper`}),(0,d.jsx)(l,{columnBorderRight:!0,children:`grace@example.com`}),(0,d.jsx)(l,{children:`Editor`})]})}},g={args:{kind:`radio`},render:e=>{let[t,n]=(0,u.useState)(null),r=[`1`,`2`,`3`];return(0,d.jsx)(d.Fragment,{children:r.map((i,a)=>(0,f.createElement)(o,{...e,key:i,radioName:`people`,selected:t===i,onSelectionChange:e=>e&&n(i),showBorderTop:a===0,showBorderBottom:a<r.length-1,leadingCellColumnBorderRight:!0},(0,d.jsxs)(l,{columnBorderRight:!0,children:[`Person `,i]}),(0,d.jsxs)(l,{children:[`person`,i,`@example.com`]})))})}},_={args:{kind:`check`,disabled:!0,defaultSelected:!0},render:e=>(0,d.jsxs)(o,{...e,showBorderTop:!0,showBorderBottom:!0,leadingCellColumnBorderRight:!0,children:[(0,d.jsx)(l,{columnBorderRight:!0,children:`Disabled row`}),(0,d.jsx)(l,{children:`Cannot be toggled`})]})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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