import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Ds as n,Gr as r,Ur as i,Vr as a,Wr as o,fs as s,qr as c,t as l}from"./iframe-DItRHvxc.js";import{n as u,t as d}from"./figmaDesign-CO6i5n9C.js";var f,p,m,h,g,_,v,y,b;e((()=>{l(),f=t(n(),1),u(),p=s(),m=t(n(),1),h={parameters:{design:d(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=2419-29864&m=dev`)},title:`Display & Data/DataTable/TableRow`,component:o,tags:[`autodocs`],argTypes:{kind:{control:`inline-radio`,options:r},disabled:{control:`boolean`}},args:{kind:`default`,disabled:!1},decorators:[e=>(0,p.jsx)(`div`,{className:`bg-background p-md rounded-md`,style:{width:768},children:(0,p.jsx)(`div`,{role:`table`,className:i,children:(0,p.jsx)(`div`,{role:`rowgroup`,className:a,children:(0,p.jsx)(e,{})})})})]},g={render:e=>(0,p.jsxs)(o,{...e,showBorderTop:!0,showBorderBottom:!0,children:[(0,p.jsx)(c,{columnBorderRight:!0,children:`Ada Lovelace`}),(0,p.jsx)(c,{columnBorderRight:!0,children:`ada@example.com`}),(0,p.jsx)(c,{children:`Admin`})]})},_={args:{kind:`check`},render:e=>{let[t,n]=(0,f.useState)(!1);return(0,p.jsxs)(o,{...e,selected:t,onSelectionChange:n,showBorderTop:!0,showBorderBottom:!0,leadingCellColumnBorderRight:!0,children:[(0,p.jsx)(c,{columnBorderRight:!0,children:`Grace Hopper`}),(0,p.jsx)(c,{columnBorderRight:!0,children:`grace@example.com`}),(0,p.jsx)(c,{children:`Editor`})]})}},v={args:{kind:`radio`},render:e=>{let[t,n]=(0,f.useState)(null),r=[`1`,`2`,`3`];return(0,p.jsx)(p.Fragment,{children:r.map((i,a)=>(0,m.createElement)(o,{...e,key:i,radioName:`people`,selected:t===i,onSelectionChange:e=>e&&n(i),showBorderTop:a===0,showBorderBottom:a<r.length-1,leadingCellColumnBorderRight:!0},(0,p.jsxs)(c,{columnBorderRight:!0,children:[`Person `,i]}),(0,p.jsxs)(c,{children:[`person`,i,`@example.com`]})))})}},y={args:{kind:`check`,disabled:!0,defaultSelected:!0},render:e=>(0,p.jsxs)(o,{...e,showBorderTop:!0,showBorderBottom:!0,leadingCellColumnBorderRight:!0,children:[(0,p.jsx)(c,{columnBorderRight:!0,children:`Disabled row`}),(0,p.jsx)(c,{children:`Cannot be toggled`})]})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <TableRow {...args} showBorderTop showBorderBottom>
      <TableCell columnBorderRight>Ada Lovelace</TableCell>
      <TableCell columnBorderRight>ada@example.com</TableCell>
      <TableCell>Admin</TableCell>
    </TableRow>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    kind: "check",
    disabled: true,
    defaultSelected: true
  },
  render: args => <TableRow {...args} showBorderTop showBorderBottom leadingCellColumnBorderRight>
      <TableCell columnBorderRight>Disabled row</TableCell>
      <TableCell>Cannot be toggled</TableCell>
    </TableRow>
}`,...y.parameters?.docs?.source}}},b=[`Playground`,`CheckSelection`,`RadioSelection`,`Disabled`]}))();export{_ as CheckSelection,y as Disabled,g as Playground,v as RadioSelection,b as __namedExportsOrder,h as default};