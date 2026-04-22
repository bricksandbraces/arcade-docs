import{j as m}from"./jsx-runtime-D_zvdyIk.js";import{bf as u,bg as s}from"./ContextMenu-D_7vNk0Q.js";import{r as c}from"./index-CY-HDqYb.js";import{a as p}from"./index-B-lxVbXh.js";import"./index-A6zbrgSY.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";import"./v4-CtRu48qb.js";const y={title:"Components/Pagination",component:s,args:{currentPage:1,totalPages:10,showFirstLast:!0,pageSlotCount:5,size:"medium"},argTypes:{size:{control:"inline-radio",options:u},currentPage:{control:{type:"number",min:1,max:100}},totalPages:{control:{type:"number",min:1,max:100}},showFirstLast:{control:"boolean"},pageSlotCount:{control:{type:"number",min:3,max:12}},visiblePageNumbers:{control:{type:"number",min:3,max:12}}}},e={render:r=>{const[i,g]=c.useState(r.currentPage);return m.jsx(s,{...r,currentPage:i,onPageChange:t=>{g(t),p("onPageChange")(t)}})}};var n,a,o;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [currentPage, setCurrentPage] = useState(args.currentPage);
    return <Pagination {...args} currentPage={currentPage} onPageChange={newPage => {
      setCurrentPage(newPage);
      action("onPageChange")(newPage);
    }} />;
  }
}`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const S=["Playground"];export{e as Playground,S as __namedExportsOrder,y as default};
