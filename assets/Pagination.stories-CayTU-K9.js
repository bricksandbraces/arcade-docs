import{j as m}from"./jsx-runtime-D_zvdyIk.js";import{aM as s}from"./ContextMenuList-BjZtb4V3.js";import{r as c}from"./index-CY-HDqYb.js";import{a as u}from"./index-B-lxVbXh.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";import"./index-ZRCHFLd-.js";import"./borders-N_bRvfGw.js";import"./colors-mvAPBTAn.js";import"./v4-CtRu48qb.js";const w={title:"F/Pagination/Pagination",component:s,args:{currentPage:1,totalPages:10,showFirstLast:!0,maxVisiblePages:5},argTypes:{currentPage:{control:{type:"number",min:1,max:100}},totalPages:{control:{type:"number",min:1,max:100}},showFirstLast:{control:"boolean"},maxVisiblePages:{control:{type:"number",min:3,max:10}}}},e={render:r=>{const[g,i]=c.useState(r.currentPage);return m.jsx(s,{...r,currentPage:g,onPageChange:a=>{i(a),u("onPageChange")(a)}})}};var t,n,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [currentPage, setCurrentPage] = useState(args.currentPage);
    return <Pagination {...args} currentPage={currentPage} onPageChange={newPage => {
      setCurrentPage(newPage);
      action("onPageChange")(newPage);
    }} />;
  }
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const j=["Playground"];export{e as Playground,j as __namedExportsOrder,w as default};
