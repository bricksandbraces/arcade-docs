import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{A as n,Di as r,Hi as i,Hr as a,Jn as o,O as s,S as c,Tr as l,b as u,mn as d,sr as f,t as p,x as m}from"./iframe-DH8ttjhP.js";var h,g,_,v,y,b,x,S,C,w,T,E;e((()=>{p(),o(),h=t(i(),1),g=r(),_=[{id:`1`,name:`Ada Lovelace`,email:`ada@example.com`,role:`Admin`,status:`active`},{id:`2`,name:`Grace Hopper`,email:`grace@example.com`,role:`Editor`,status:`active`},{id:`3`,name:`Alan Turing`,email:`alan@example.com`,role:`Viewer`,status:`pending`},{id:`4`,name:`Katherine Johnson`,email:`katherine@example.com`,role:`Editor`,status:`inactive`},{id:`5`,name:`Margaret Hamilton`,email:`margaret@example.com`,role:`Admin`,status:`active`}],v={active:`lime`,inactive:`gray`,pending:`orange`},y=[{key:`name`,header:`Name`},{key:`email`,header:`Email`},{key:`role`,header:`Role`},{key:`status`,header:`Status`,render:e=>(0,g.jsx)(d,{color:v[e.status],children:e.status})},{key:`actions`,header:``,kind:`action`,width:160,render:()=>(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(a,{kind:`ghost`,size:`small`,label:`Edit`}),(0,g.jsx)(a,{kind:`ghost`,size:`small`,variant:`rounded`,IconLeft:f,"aria-label":`Rename`}),(0,g.jsx)(a,{kind:`ghost`,size:`small`,variant:`rounded`,IconLeft:l,"aria-label":`More`})]})}],b={title:`Hendrik Supervision/DataTable/DataTable`,component:u,tags:[`autodocs`],argTypes:{size:{control:`inline-radio`,options:m},selectionMode:{control:`inline-radio`,options:[`none`,`single`,`multiple`]}},args:{size:`medium`,selectionMode:`none`,title:`Data Table`,subtitle:`A compact overview of the team.`},parameters:{docs:{description:{component:`Data grid with sorting, selection, and pagination. Use for dense tabular data where rows represent records and columns are consistent fields.`}}}},x={render:e=>{let[t,n]=(0,h.useState)(1),[r,i]=(0,h.useState)(10);return(0,g.jsx)(`div`,{style:{width:960},children:(0,g.jsx)(u,{...e,columns:y,data:_,footer:(0,g.jsx)(c,{currentPage:t,totalPages:10,onPageChange:n,rowsPerPage:r,onRowsPerPageChange:i})})})}},S={args:{selectionMode:`single`},render:x.render},C={args:{selectionMode:`multiple`},render:x.render},w={render:e=>(0,g.jsx)(`div`,{style:{width:960},children:(0,g.jsx)(u,{...e,columns:y,data:_})})},T={render:e=>(0,g.jsx)(`div`,{style:{width:720},children:(0,g.jsxs)(u,{...e,title:`Recent activity`,subtitle:`Manually composed rows`,children:[(0,g.jsxs)(s,{children:[(0,g.jsx)(n,{children:`Deployment succeeded`}),(0,g.jsx)(n,{children:`2 minutes ago`}),(0,g.jsx)(n,{kind:`action`,style:{width:120,flex:`0 0 auto`},children:(0,g.jsx)(a,{kind:`ghost`,size:`small`,label:`View`})})]}),(0,g.jsxs)(s,{children:[(0,g.jsx)(n,{children:`Build finished`}),(0,g.jsx)(n,{children:`11 minutes ago`}),(0,g.jsx)(n,{kind:`action`,style:{width:120,flex:`0 0 auto`},children:(0,g.jsx)(a,{kind:`ghost`,size:`small`,label:`View`})})]})]})})},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [page, setPage] = useState(1);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [rowsPerPage, setRowsPerPage] = useState(10);
    return <div style={{
      width: 960
    }}>
        <DataTable<Person> {...args} columns={columns} data={people} footer={<TableFooter currentPage={page} totalPages={10} onPageChange={setPage} rowsPerPage={rowsPerPage} onRowsPerPageChange={setRowsPerPage} />} />
      </div>;
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    selectionMode: "single"
  },
  render: Playground.render
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    selectionMode: "multiple"
  },
  render: Playground.render
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    width: 960
  }}>
      <DataTable<Person> {...args} columns={columns} data={people} />
    </div>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    width: 720
  }}>
      <DataTable {...args} title="Recent activity" subtitle="Manually composed rows">
        <TableRow>
          <TableCell>Deployment succeeded</TableCell>
          <TableCell>2 minutes ago</TableCell>
          <TableCell kind="action" style={{
          width: 120,
          flex: "0 0 auto"
        }}>
            <Button kind="ghost" size="small" label="View" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Build finished</TableCell>
          <TableCell>11 minutes ago</TableCell>
          <TableCell kind="action" style={{
          width: 120,
          flex: "0 0 auto"
        }}>
            <Button kind="ghost" size="small" label="View" />
          </TableCell>
        </TableRow>
      </DataTable>
    </div>
}`,...T.parameters?.docs?.source}}},E=[`Playground`,`WithSingleSelection`,`WithMultipleSelection`,`WithoutFooter`,`Composed`]}))();export{T as Composed,x as Playground,C as WithMultipleSelection,S as WithSingleSelection,w as WithoutFooter,E as __namedExportsOrder,b as default};