import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{A as n,Rn as r,So as i,k as a,so as o,t as s}from"./iframe-CUNJULIl.js";var c,l,u,d,f,p,m;e((()=>{s(),c=t(i(),1),l=o(),{action:u}=__STORYBOOK_MODULE_ACTIONS__,d={title:`Navigation/Pagination`,component:a,tags:[`autodocs`],args:{currentPage:1,totalPages:10,showFirstLast:!0,pageSlotCount:5,size:`medium`},argTypes:{size:{control:`inline-radio`,options:n},currentPage:{control:{type:`number`,min:1,max:100}},totalPages:{control:{type:`number`,min:1,max:100}},showFirstLast:{control:`boolean`},pageSlotCount:{control:{type:`number`,min:3,max:12}},visiblePageNumbers:{control:{type:`number`,min:3,max:12}}},parameters:{docs:{description:{component:`Page number navigator for browsing long lists split into pages. Use under tables and result grids.`}}}},f={render:e=>{let[t,n]=(0,c.useState)(e.currentPage);return(0,l.jsx)(a,{...e,currentPage:t,onPageChange:e=>{n(e),u(`onPageChange`)(e)}})}},p={render:()=>(0,l.jsx)(r,{})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [currentPage, setCurrentPage] = useState(args.currentPage);
    return <Pagination {...args} currentPage={currentPage} onPageChange={newPage => {
      setCurrentPage(newPage);
      action("onPageChange")(newPage);
    }} />;
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <PaginationSkeleton />
}`,...p.parameters?.docs?.source}}},m=[`Playground`,`Skeleton`]}))();export{f as Playground,p as Skeleton,m as __namedExportsOrder,d as default};