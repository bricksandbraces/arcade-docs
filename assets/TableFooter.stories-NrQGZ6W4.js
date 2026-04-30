import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Di as n,Hi as r,S as i,t as a}from"./iframe-ChiQ7sZy.js";var o,s,c,l,u,d;e((()=>{a(),o=t(r(),1),s=n(),c={title:`Hendrik Supervision/DataTable/TableFooter`,component:i,args:{currentPage:1,totalPages:10,rowsPerPage:50},decorators:[e=>(0,s.jsx)(`div`,{style:{width:768},className:`bg-background shadow-subtlest rounded-md`,children:(0,s.jsx)(e,{})})]},l={render:e=>{let[t,n]=(0,o.useState)(e.currentPage),[r,a]=(0,o.useState)(e.rowsPerPage);return(0,s.jsx)(i,{...e,currentPage:t,onPageChange:n,rowsPerPage:r,onRowsPerPageChange:a})}},u={args:{rowsPerPage:void 0},render:e=>{let[t,n]=(0,o.useState)(e.currentPage);return(0,s.jsx)(i,{...e,currentPage:t,onPageChange:n})}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [page, setPage] = useState(args.currentPage);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [rowsPerPage, setRowsPerPage] = useState(args.rowsPerPage);
    return <TableFooter {...args} currentPage={page} onPageChange={setPage} rowsPerPage={rowsPerPage} onRowsPerPageChange={setRowsPerPage} />;
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    rowsPerPage: undefined
  },
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [page, setPage] = useState(args.currentPage);
    return <TableFooter {...args} currentPage={page} onPageChange={setPage} />;
  }
}`,...u.parameters?.docs?.source}}},d=[`Playground`,`PaginationOnly`]}))();export{u as PaginationOnly,l as Playground,d as __namedExportsOrder,c as default};