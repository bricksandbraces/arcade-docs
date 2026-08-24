import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{_r as n,dr as r,hr as i,ko as a,mo as o,mr as s,pr as c,t as l}from"./iframe-B9tHnIBq.js";var u,d,f,p,m,h,g,_,v;e((()=>{l(),u=t(a(),1),d=o(),f=t(a(),1),p={title:`Display & Data/DataTable/TableRow`,component:s,tags:[`autodocs`],argTypes:{kind:{control:`inline-radio`,options:i},disabled:{control:`boolean`}},args:{kind:`default`,disabled:!1},decorators:[e=>(0,d.jsx)(`div`,{className:`bg-background p-md rounded-md`,style:{width:768},children:(0,d.jsx)(`div`,{role:`table`,className:c,children:(0,d.jsx)(`div`,{role:`rowgroup`,className:r,children:(0,d.jsx)(e,{})})})})]},m={render:e=>(0,d.jsxs)(s,{...e,showBorderTop:!0,showBorderBottom:!0,children:[(0,d.jsx)(n,{columnBorderRight:!0,children:`Ada Lovelace`}),(0,d.jsx)(n,{columnBorderRight:!0,children:`ada@example.com`}),(0,d.jsx)(n,{children:`Admin`})]})},h={args:{kind:`check`},render:e=>{let[t,r]=(0,u.useState)(!1);return(0,d.jsxs)(s,{...e,selected:t,onSelectionChange:r,showBorderTop:!0,showBorderBottom:!0,leadingCellColumnBorderRight:!0,children:[(0,d.jsx)(n,{columnBorderRight:!0,children:`Grace Hopper`}),(0,d.jsx)(n,{columnBorderRight:!0,children:`grace@example.com`}),(0,d.jsx)(n,{children:`Editor`})]})}},g={args:{kind:`radio`},render:e=>{let[t,r]=(0,u.useState)(null),i=[`1`,`2`,`3`];return(0,d.jsx)(d.Fragment,{children:i.map((a,o)=>(0,f.createElement)(s,{...e,key:a,radioName:`people`,selected:t===a,onSelectionChange:e=>e&&r(a),showBorderTop:o===0,showBorderBottom:o<i.length-1,leadingCellColumnBorderRight:!0},(0,d.jsxs)(n,{columnBorderRight:!0,children:[`Person `,a]}),(0,d.jsxs)(n,{children:[`person`,a,`@example.com`]})))})}},_={args:{kind:`check`,disabled:!0,defaultSelected:!0},render:e=>(0,d.jsxs)(s,{...e,showBorderTop:!0,showBorderBottom:!0,leadingCellColumnBorderRight:!0,children:[(0,d.jsx)(n,{columnBorderRight:!0,children:`Disabled row`}),(0,d.jsx)(n,{children:`Cannot be toggled`})]})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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