import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{aH as E,aI as d,aJ as I,aK as c,aL as n,h as s,B as V,aM as W}from"./ContextMenu-DwPyJibk.js";import{r as m}from"./index-CY-HDqYb.js";import{I as A}from"./IconPencil-ChoODFCC.js";import"./index-A6zbrgSY.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";const S=[{id:"1",name:"Ada Lovelace",email:"ada@example.com",role:"Admin",status:"active"},{id:"2",name:"Grace Hopper",email:"grace@example.com",role:"Editor",status:"active"},{id:"3",name:"Alan Turing",email:"alan@example.com",role:"Viewer",status:"pending"},{id:"4",name:"Katherine Johnson",email:"katherine@example.com",role:"Editor",status:"inactive"},{id:"5",name:"Margaret Hamilton",email:"margaret@example.com",role:"Admin",status:"active"}],F={active:"lime",inactive:"gray",pending:"orange"},R=[{key:"name",header:"Name"},{key:"email",header:"Email"},{key:"role",header:"Role"},{key:"status",header:"Status",render:a=>e.jsx(V,{color:F[a.status],children:a.status})},{key:"actions",header:"",kind:"action",width:160,render:()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{kind:"ghost",size:"small",children:"Edit"}),e.jsx(s,{kind:"ghost",size:"small",variant:"rounded",IconLeft:A,"aria-label":"Rename"}),e.jsx(s,{kind:"ghost",size:"small",variant:"rounded",IconLeft:W,"aria-label":"More"})]})}],O={title:"Hendrik Supervision/DataTable/DataTable",component:d,argTypes:{size:{control:"inline-radio",options:E},selectionMode:{control:"inline-radio",options:["none","single","multiple"]}},args:{size:"medium",selectionMode:"none",title:"Data Table",subtitle:"A compact overview of the team."}},t={render:a=>{const[M,D]=m.useState(1),[z,B]=m.useState(10);return e.jsx("div",{style:{width:960},children:e.jsx(d,{...a,columns:R,data:S,footer:e.jsx(I,{currentPage:M,totalPages:10,onPageChange:D,rowsPerPage:z,onRowsPerPageChange:B})})})}},o={args:{selectionMode:"single"},render:t.render},r={args:{selectionMode:"multiple"},render:t.render},l={render:a=>e.jsx("div",{style:{width:960},children:e.jsx(d,{...a,columns:R,data:S})})},i={render:a=>e.jsx("div",{style:{width:720},children:e.jsxs(d,{...a,title:"Recent activity",subtitle:"Manually composed rows",children:[e.jsxs(c,{children:[e.jsx(n,{children:"Deployment succeeded"}),e.jsx(n,{children:"2 minutes ago"}),e.jsx(n,{kind:"action",style:{width:120,flex:"0 0 auto"},children:e.jsx(s,{kind:"ghost",size:"small",children:"View"})})]}),e.jsxs(c,{children:[e.jsx(n,{children:"Build finished"}),e.jsx(n,{children:"11 minutes ago"}),e.jsx(n,{kind:"action",style:{width:120,flex:"0 0 auto"},children:e.jsx(s,{kind:"ghost",size:"small",children:"View"})})]})]})})};var u,g,p;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(p=(g=t.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var h,x,b;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    selectionMode: "single"
  },
  render: Playground.render
}`,...(b=(x=o.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var P,w,T;r.parameters={...r.parameters,docs:{...(P=r.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    selectionMode: "multiple"
  },
  render: Playground.render
}`,...(T=(w=r.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var y,j,k;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <div style={{
    width: 960
  }}>
      <DataTable<Person> {...args} columns={columns} data={people} />
    </div>
}`,...(k=(j=l.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var v,C,f;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
            <Button kind="ghost" size="small">
              View
            </Button>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Build finished</TableCell>
          <TableCell>11 minutes ago</TableCell>
          <TableCell kind="action" style={{
          width: 120,
          flex: "0 0 auto"
        }}>
            <Button kind="ghost" size="small">
              View
            </Button>
          </TableCell>
        </TableRow>
      </DataTable>
    </div>
}`,...(f=(C=i.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};const q=["Playground","WithSingleSelection","WithMultipleSelection","WithoutFooter","Composed"];export{i as Composed,t as Playground,r as WithMultipleSelection,o as WithSingleSelection,l as WithoutFooter,q as __namedExportsOrder,O as default};
