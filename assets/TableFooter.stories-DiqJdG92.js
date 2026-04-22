import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{aJ as g}from"./ContextMenu-DwPyJibk.js";import{r as n}from"./index-CY-HDqYb.js";import"./index-A6zbrgSY.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";const k={title:"Hendrik Supervision/DataTable/TableFooter",component:g,args:{currentPage:1,totalPages:10,rowsPerPage:50},decorators:[e=>s.jsx("div",{style:{width:768},className:"bg-background shadow-subtlest rounded-md",children:s.jsx(e,{})})]},r={render:e=>{const[o,t]=n.useState(e.currentPage),[p,m]=n.useState(e.rowsPerPage);return s.jsx(g,{...e,currentPage:o,onPageChange:t,rowsPerPage:p,onRowsPerPageChange:m})}},a={args:{rowsPerPage:void 0},render:e=>{const[o,t]=n.useState(e.currentPage);return s.jsx(g,{...e,currentPage:o,onPageChange:t})}};var P,c,u;r.parameters={...r.parameters,docs:{...(P=r.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [page, setPage] = useState(args.currentPage);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [rowsPerPage, setRowsPerPage] = useState(args.rowsPerPage);
    return <TableFooter {...args} currentPage={page} onPageChange={setPage} rowsPerPage={rowsPerPage} onRowsPerPageChange={setRowsPerPage} />;
  }
}`,...(u=(c=r.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var i,d,l;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    rowsPerPage: undefined
  },
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [page, setPage] = useState(args.currentPage);
    return <TableFooter {...args} currentPage={page} onPageChange={setPage} />;
  }
}`,...(l=(d=a.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const j=["Playground","PaginationOnly"];export{a as PaginationOnly,r as Playground,j as __namedExportsOrder,k as default};
