import{j as g}from"./jsx-runtime-D_zvdyIk.js";import{bf as u,bg as s}from"./ContextMenuList-BM0Gkwdy.js";import{r as c}from"./index-CY-HDqYb.js";import{a as p}from"./index-B-lxVbXh.js";import"./index-A6zbrgSY.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";import"./index-ZRCHFLd-.js";import"./sizes-BpUsT7VU.js";import"./colors-CoOIoG7W.js";import"./v4-CtRu48qb.js";const j={title:"Components/Pagination",component:s,args:{currentPage:1,totalPages:10,showFirstLast:!0,pageSlotCount:5,size:"medium"},argTypes:{size:{control:"inline-radio",options:u},currentPage:{control:{type:"number",min:1,max:100}},totalPages:{control:{type:"number",min:1,max:100}},showFirstLast:{control:"boolean"},pageSlotCount:{control:{type:"number",min:3,max:12}},visiblePageNumbers:{control:{type:"number",min:3,max:12}}}},e={render:r=>{const[i,m]=c.useState(r.currentPage);return g.jsx(s,{...r,currentPage:i,onPageChange:t=>{m(t),p("onPageChange")(t)}})}};var n,o,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [currentPage, setCurrentPage] = useState(args.currentPage);
    return <Pagination {...args} currentPage={currentPage} onPageChange={newPage => {
      setCurrentPage(newPage);
      action("onPageChange")(newPage);
    }} />;
  }
}`,...(a=(o=e.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const z=["Playground"];export{e as Playground,z as __namedExportsOrder,j as default};
