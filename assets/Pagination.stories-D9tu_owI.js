import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Fs as n,M as r,N as i,bs as a,fr as o,i as s}from"./iframe-BSbbu91K.js";import{n as c,t as l}from"./figmaDesign-CO6i5n9C.js";var u,d,f,p,m,h,g;e((()=>{s(),u=t(n(),1),c(),d=a(),{action:f}=__STORYBOOK_MODULE_ACTIONS__,p={title:`Navigation/Pagination`,component:r,tags:[`autodocs`],args:{currentPage:1,totalPages:10,showFirstLast:!0,pageSlotCount:5,size:`medium`},argTypes:{size:{control:`inline-radio`,options:i},currentPage:{control:{type:`number`,min:1,max:100}},totalPages:{control:{type:`number`,min:1,max:100}},showFirstLast:{control:`boolean`},pageSlotCount:{control:{type:`number`,min:3,max:12}},visiblePageNumbers:{control:{type:`number`,min:3,max:12}}},parameters:{design:l(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=2395-9910&t=KGxcmdKeu6CfEru7-4`),docs:{description:{component:`Page number navigator for browsing long lists split into pages. Use under tables and result grids.`}}}},m={render:e=>{let[t,n]=(0,u.useState)(e.currentPage);return(0,d.jsx)(r,{...e,currentPage:t,onPageChange:e=>{n(e),f(`onPageChange`)(e)}})}},h={render:()=>(0,d.jsx)(o,{})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [currentPage, setCurrentPage] = useState(args.currentPage);
    return <Pagination {...args} currentPage={currentPage} onPageChange={newPage => {
      setCurrentPage(newPage);
      action("onPageChange")(newPage);
    }} />;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <PaginationSkeleton />
}`,...h.parameters?.docs?.source}}},g=[`Playground`,`Skeleton`]}))();export{m as Playground,h as Skeleton,g as __namedExportsOrder,p as default};