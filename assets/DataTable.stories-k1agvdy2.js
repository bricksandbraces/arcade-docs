import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{D as n,Dn as r,F as i,Ki as a,L as o,O as s,Ur as c,k as l,sa as u,si as d,sr as f,t as p,xr as m}from"./iframe-Bg00cy7E.js";var h,g,_,v,y,b,x,S,C,w,T,E,D;e((()=>{p(),f(),h=t(u(),1),g=a(),_=[{name:`Ada Lovelace`,email:`ada@example.com`,role:`Admin`,status:`active`},{name:`Grace Hopper`,email:`grace@example.com`,role:`Editor`,status:`active`},{name:`Alan Turing`,email:`alan@example.com`,role:`Viewer`,status:`pending`},{name:`Katherine Johnson`,email:`katherine@example.com`,role:`Editor`,status:`inactive`},{name:`Margaret Hamilton`,email:`margaret@example.com`,role:`Admin`,status:`active`}],v=Array.from({length:47},(e,t)=>{let n=_[t%_.length],r=t+1;return{...n,id:String(r),name:`${n.name} #${r}`}}),y={active:`lime`,inactive:`gray`,pending:`orange`},b=[{key:`name`,header:`Name`},{key:`email`,header:`Email`},{key:`role`,header:`Role`},{key:`status`,header:`Status`,render:e=>(0,g.jsx)(r,{color:y[e.status],children:e.status})},{key:`actions`,header:``,kind:`action`,width:160,render:()=>(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(d,{kind:`ghost`,size:`small`,label:`Edit`}),(0,g.jsx)(d,{kind:`ghost`,size:`small`,variant:`rounded`,IconLeft:m,"aria-label":`Rename`}),(0,g.jsx)(d,{kind:`ghost`,size:`small`,variant:`rounded`,IconLeft:c,"aria-label":`More`})]})}],x={title:`Fabian Supervision/DataTable/DataTable`,component:n,tags:[`autodocs`],argTypes:{size:{control:`inline-radio`,options:s},selectionMode:{control:`inline-radio`,options:[`none`,`single`,`multiple`]}},args:{size:`medium`,selectionMode:`none`,title:`Data Table`,subtitle:`A compact overview of the team.`},parameters:{docs:{description:{component:`Data grid with sorting, selection, and pagination. Use for dense tabular data where rows represent records and columns are consistent fields.`}}}},S={render:e=>{let[t,r]=(0,h.useState)(1),[i,a]=(0,h.useState)(10),o=Math.max(1,Math.ceil(v.length/i)),s=Math.min(t,o);return(0,g.jsx)(`div`,{style:{width:960},children:(0,g.jsx)(n,{...e,columns:b,data:v,currentPage:s,rowsPerPage:i,footer:(0,g.jsx)(l,{currentPage:s,totalPages:o,onPageChange:r,rowsPerPage:i,onRowsPerPageChange:e=>{a(e),r(1)}})})})}},C={args:{selectionMode:`single`},render:S.render},w={args:{selectionMode:`multiple`},render:S.render},T={render:e=>(0,g.jsx)(`div`,{style:{width:960},children:(0,g.jsx)(n,{...e,columns:b,data:v})})},E={render:e=>(0,g.jsx)(`div`,{style:{width:720},children:(0,g.jsxs)(n,{...e,title:`Recent activity`,subtitle:`Manually composed rows`,children:[(0,g.jsxs)(i,{children:[(0,g.jsx)(o,{children:`Deployment succeeded`}),(0,g.jsx)(o,{children:`2 minutes ago`}),(0,g.jsx)(o,{kind:`action`,style:{width:120,flex:`0 0 auto`},children:(0,g.jsx)(d,{kind:`ghost`,size:`small`,label:`View`})})]}),(0,g.jsxs)(i,{children:[(0,g.jsx)(o,{children:`Build finished`}),(0,g.jsx)(o,{children:`11 minutes ago`}),(0,g.jsx)(o,{kind:`action`,style:{width:120,flex:`0 0 auto`},children:(0,g.jsx)(d,{kind:`ghost`,size:`small`,label:`View`})})]})]})})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [page, setPage] = useState(1);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const totalPages = Math.max(1, Math.ceil(people.length / rowsPerPage));
    const safePage = Math.min(page, totalPages);
    return <div style={{
      width: 960
    }}>
        <DataTable<Person> {...args} columns={columns} data={people} currentPage={safePage} rowsPerPage={rowsPerPage} footer={<TableFooter currentPage={safePage} totalPages={totalPages} onPageChange={setPage} rowsPerPage={rowsPerPage} onRowsPerPageChange={next => {
        setRowsPerPage(next);
        setPage(1);
      }} />} />
      </div>;
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    selectionMode: "single"
  },
  render: Playground.render
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    selectionMode: "multiple"
  },
  render: Playground.render
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    width: 960
  }}>
      <DataTable<Person> {...args} columns={columns} data={people} />
    </div>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D=[`Playground`,`WithSingleSelection`,`WithMultipleSelection`,`WithoutFooter`,`Composed`]}))();export{E as Composed,S as Playground,w as WithMultipleSelection,C as WithSingleSelection,T as WithoutFooter,D as __namedExportsOrder,x as default};