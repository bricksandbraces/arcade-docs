import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{O as n,go as r,jo as i,t as a}from"./iframe-D_22E2i2.js";var o,s,c,l,u;e((()=>{a(),o=t(i(),1),s=r(),c={title:`Display & Data/DataTable/TableFooter`,component:n,tags:[`autodocs`],args:{currentPage:1,totalPages:10},decorators:[e=>(0,s.jsx)(`div`,{style:{width:768},className:`bg-background shadow-subtlest rounded-md`,children:(0,s.jsx)(e,{})})]},l={render:e=>{let[t,r]=(0,o.useState)(e.currentPage);return(0,s.jsx)(n,{...e,currentPage:t,onPageChange:r})}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [page, setPage] = useState(args.currentPage);
    return <TableFooter {...args} currentPage={page} onPageChange={setPage} />;
  }
}`,...l.parameters?.docs?.source}}},u=[`Playground`]}))();export{l as Playground,u as __namedExportsOrder,c as default};