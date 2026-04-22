import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as m}from"./index-CY-HDqYb.js";import{aR as w,aK as s,aL as l}from"./ContextMenu-DwPyJibk.js";import"./index-A6zbrgSY.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";const N={title:"Hendrik Supervision/DataTable/TableRow",component:s,argTypes:{kind:{control:"inline-radio",options:w},disabled:{control:"boolean"}},args:{kind:"default",disabled:!1},decorators:[a=>e.jsx("div",{style:{width:768},children:e.jsx(a,{})})]},n={render:a=>e.jsxs(s,{...a,children:[e.jsx(l,{children:"Ada Lovelace"}),e.jsx(l,{children:"ada@example.com"}),e.jsx(l,{children:"Admin"})]})},o={args:{kind:"check"},render:a=>{const[c,i]=m.useState(!1);return e.jsxs(s,{...a,selected:c,onSelectionChange:i,children:[e.jsx(l,{children:"Grace Hopper"}),e.jsx(l,{children:"grace@example.com"}),e.jsx(l,{children:"Editor"})]})}},t={args:{kind:"radio"},render:a=>{const[c,i]=m.useState(null);return e.jsx("div",{className:"gap-sm flex flex-col",children:["1","2","3"].map(r=>m.createElement(s,{...a,key:r,radioName:"people",selected:c===r,onSelectionChange:R=>R&&i(r)},e.jsxs(l,{children:["Person ",r]}),e.jsxs(l,{children:["person",r,"@example.com"]})))})}},d={args:{kind:"check",disabled:!0,defaultSelected:!0},render:a=>e.jsxs(s,{...a,children:[e.jsx(l,{children:"Disabled row"}),e.jsx(l,{children:"Cannot be toggled"})]})};var p,b,u;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <TableRow {...args}>
      <TableCell>Ada Lovelace</TableCell>
      <TableCell>ada@example.com</TableCell>
      <TableCell>Admin</TableCell>
    </TableRow>
}`,...(u=(b=n.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};var g,x,T;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(T=(x=o.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var h,C,S;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(S=(C=t.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var k,j,f;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    kind: "check",
    disabled: true,
    defaultSelected: true
  },
  render: args => <TableRow {...args}>
      <TableCell>Disabled row</TableCell>
      <TableCell>Cannot be toggled</TableCell>
    </TableRow>
}`,...(f=(j=d.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};const P=["Playground","CheckSelection","RadioSelection","Disabled"];export{o as CheckSelection,d as Disabled,n as Playground,t as RadioSelection,P as __namedExportsOrder,N as default};
