import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{C as n,Di as r,Hi as i,t as a,w as o}from"./iframe-CAZ8iI13.js";var s,c,l,u,d,f;e((()=>{a(),s=t(i(),1),c=r(),{action:l}=__STORYBOOK_MODULE_ACTIONS__,u={title:`Components/Pagination`,component:n,tags:[`autodocs`],args:{currentPage:1,totalPages:10,showFirstLast:!0,pageSlotCount:5,size:`medium`},argTypes:{size:{control:`inline-radio`,options:o},currentPage:{control:{type:`number`,min:1,max:100}},totalPages:{control:{type:`number`,min:1,max:100}},showFirstLast:{control:`boolean`},pageSlotCount:{control:{type:`number`,min:3,max:12}},visiblePageNumbers:{control:{type:`number`,min:3,max:12}}},parameters:{docs:{description:{component:`Page number navigator for browsing long lists split into pages. Use under tables and result grids.`}}}},d={render:e=>{let[t,r]=(0,s.useState)(e.currentPage);return(0,c.jsx)(n,{...e,currentPage:t,onPageChange:e=>{r(e),l(`onPageChange`)(e)}})}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [currentPage, setCurrentPage] = useState(args.currentPage);
    return <Pagination {...args} currentPage={currentPage} onPageChange={newPage => {
      setCurrentPage(newPage);
      action("onPageChange")(newPage);
    }} />;
  }
}`,...d.parameters?.docs?.source}}},f=[`Playground`]}))();export{d as Playground,f as __namedExportsOrder,u as default};