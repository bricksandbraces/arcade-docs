import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{F as n,P as r,ia as i,t as a,ya as o}from"./iframe-D_WxSr3l.js";var s,c,l,u,d,f;e((()=>{a(),s=t(o(),1),c=i(),{action:l}=__STORYBOOK_MODULE_ACTIONS__,u={title:`Navigation/Pagination`,component:r,tags:[`autodocs`],args:{currentPage:1,totalPages:10,showFirstLast:!0,pageSlotCount:5,size:`medium`},argTypes:{size:{control:`inline-radio`,options:n},currentPage:{control:{type:`number`,min:1,max:100}},totalPages:{control:{type:`number`,min:1,max:100}},showFirstLast:{control:`boolean`},pageSlotCount:{control:{type:`number`,min:3,max:12}},visiblePageNumbers:{control:{type:`number`,min:3,max:12}}},parameters:{docs:{description:{component:`Page number navigator for browsing long lists split into pages. Use under tables and result grids.`}}}},d={render:e=>{let[t,n]=(0,s.useState)(e.currentPage);return(0,c.jsx)(r,{...e,currentPage:t,onPageChange:e=>{n(e),l(`onPageChange`)(e)}})}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [currentPage, setCurrentPage] = useState(args.currentPage);
    return <Pagination {...args} currentPage={currentPage} onPageChange={newPage => {
      setCurrentPage(newPage);
      action("onPageChange")(newPage);
    }} />;
  }
}`,...d.parameters?.docs?.source}}},f=[`Playground`]}))();export{d as Playground,f as __namedExportsOrder,u as default};