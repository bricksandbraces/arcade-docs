import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Fs as n,bs as r,i,j as a}from"./iframe-DWyCpahx.js";import{n as o,t as s}from"./figmaDesign-CO6i5n9C.js";var c,l,u,d,f;e((()=>{i(),c=t(n(),1),o(),l=r(),u={parameters:{design:s(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=2419-29864&m=dev`)},title:`Display & Data/DataTable/TableFooter`,component:a,tags:[`autodocs`],args:{currentPage:1,totalPages:10},decorators:[e=>(0,l.jsx)(`div`,{style:{width:768},className:`bg-background shadow-subtlest rounded-md`,children:(0,l.jsx)(e,{})})]},d={render:e=>{let[t,n]=(0,c.useState)(e.currentPage);return(0,l.jsx)(a,{...e,currentPage:t,onPageChange:n})}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [page, setPage] = useState(args.currentPage);
    return <TableFooter {...args} currentPage={page} onPageChange={setPage} />;
  }
}`,...d.parameters?.docs?.source}}},f=[`Playground`]}))();export{d as Playground,f as __namedExportsOrder,u as default};