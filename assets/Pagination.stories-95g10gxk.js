import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as n}from"./index-0yr9KlQE.js";import{aN as t}from"./ContextMenuList-iLopGvLG.js";import"./index-tymuTqDW.js";import"./index-DotmK1FS.js";import"./index-ChaIqHV-.js";import"./borders-N_bRvfGw.js";import"./colors-mvAPBTAn.js";const ee={title:"H/Pagination/Pagination",component:t,argTypes:{currentPage:{control:{type:"number",min:1,max:100}},totalPages:{control:{type:"number",min:1,max:100}},showFirstLast:{control:"boolean"},maxVisiblePages:{control:{type:"number",min:3,max:10}}}},g={args:{currentPage:1,totalPages:10,showFirstLast:!0,maxVisiblePages:5,onPageChange:e=>console.log("Page changed to:",e)}},o={render:e=>{const[r,a]=n.useState(e.currentPage||1);return s.jsx(t,{...e,currentPage:r,onPageChange:a})},args:{totalPages:20,showFirstLast:!0,maxVisiblePages:5}},u={render:e=>{const[r,a]=n.useState(e.currentPage||1);return s.jsx(t,{...e,currentPage:r,onPageChange:a})},args:{totalPages:5,showFirstLast:!0,maxVisiblePages:5}},P={render:e=>{const[r,a]=n.useState(e.currentPage||50);return s.jsx(t,{...e,currentPage:r,onPageChange:a})},args:{totalPages:100,showFirstLast:!0,maxVisiblePages:7}},i={render:e=>{const[r,a]=n.useState(e.currentPage||5);return s.jsx(t,{...e,currentPage:r,onPageChange:a})},args:{totalPages:15,showFirstLast:!1,maxVisiblePages:5}},c={render:e=>{const[r,a]=n.useState(e.currentPage||10);return s.jsx(t,{...e,currentPage:r,onPageChange:a})},args:{totalPages:25,showFirstLast:!0,maxVisiblePages:3}},m={render:e=>{const[r,a]=n.useState(1);return s.jsx(t,{...e,currentPage:r,onPageChange:a})},args:{totalPages:15,showFirstLast:!0,maxVisiblePages:5}},l={render:e=>{const[r,a]=n.useState(8);return s.jsx(t,{...e,currentPage:r,onPageChange:a})},args:{totalPages:15,showFirstLast:!0,maxVisiblePages:5}},d={render:e=>{const[r,a]=n.useState(15);return s.jsx(t,{...e,currentPage:r,onPageChange:a})},args:{totalPages:15,showFirstLast:!0,maxVisiblePages:5}},p={render:e=>{const[r,a]=n.useState(1);return s.jsx(t,{...e,currentPage:r,onPageChange:a})},args:{totalPages:1,showFirstLast:!0,maxVisiblePages:5}};var C,h,x;g.parameters={...g.parameters,docs:{...(C=g.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    currentPage: 1,
    totalPages: 10,
    showFirstLast: true,
    maxVisiblePages: 5,
    onPageChange: (page: number) => console.log("Page changed to:", page)
  }
}`,...(x=(h=g.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var S,b,L;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => {
    const [currentPage, setCurrentPage] = useState(args.currentPage || 1);
    return <Pagination {...args} currentPage={currentPage} onPageChange={setCurrentPage} />;
  },
  args: {
    totalPages: 20,
    showFirstLast: true,
    maxVisiblePages: 5
  }
}`,...(L=(b=o.parameters)==null?void 0:b.docs)==null?void 0:L.source}}};var F,V,w;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: args => {
    const [currentPage, setCurrentPage] = useState(args.currentPage || 1);
    return <Pagination {...args} currentPage={currentPage} onPageChange={setCurrentPage} />;
  },
  args: {
    totalPages: 5,
    showFirstLast: true,
    maxVisiblePages: 5
  }
}`,...(w=(V=u.parameters)==null?void 0:V.docs)==null?void 0:w.source}}};var j,f,y;P.parameters={...P.parameters,docs:{...(j=P.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => {
    const [currentPage, setCurrentPage] = useState(args.currentPage || 50);
    return <Pagination {...args} currentPage={currentPage} onPageChange={setCurrentPage} />;
  },
  args: {
    totalPages: 100,
    showFirstLast: true,
    maxVisiblePages: 7
  }
}`,...(y=(f=P.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var M,E,v;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: args => {
    const [currentPage, setCurrentPage] = useState(args.currentPage || 5);
    return <Pagination {...args} currentPage={currentPage} onPageChange={setCurrentPage} />;
  },
  args: {
    totalPages: 15,
    showFirstLast: false,
    maxVisiblePages: 5
  }
}`,...(v=(E=i.parameters)==null?void 0:E.docs)==null?void 0:v.source}}};var I,W,_;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => {
    const [currentPage, setCurrentPage] = useState(args.currentPage || 10);
    return <Pagination {...args} currentPage={currentPage} onPageChange={setCurrentPage} />;
  },
  args: {
    totalPages: 25,
    showFirstLast: true,
    maxVisiblePages: 3
  }
}`,...(_=(W=c.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var H,N,O;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: args => {
    const [currentPage, setCurrentPage] = useState(1);
    return <Pagination {...args} currentPage={currentPage} onPageChange={setCurrentPage} />;
  },
  args: {
    totalPages: 15,
    showFirstLast: true,
    maxVisiblePages: 5
  }
}`,...(O=(N=m.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var R,T,k;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: args => {
    const [currentPage, setCurrentPage] = useState(8);
    return <Pagination {...args} currentPage={currentPage} onPageChange={setCurrentPage} />;
  },
  args: {
    totalPages: 15,
    showFirstLast: true,
    maxVisiblePages: 5
  }
}`,...(k=(T=l.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var q,z,A;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: args => {
    const [currentPage, setCurrentPage] = useState(15);
    return <Pagination {...args} currentPage={currentPage} onPageChange={setCurrentPage} />;
  },
  args: {
    totalPages: 15,
    showFirstLast: true,
    maxVisiblePages: 5
  }
}`,...(A=(z=d.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var B,D,G;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => {
    const [currentPage, setCurrentPage] = useState(1);
    return <Pagination {...args} currentPage={currentPage} onPageChange={setCurrentPage} />;
  },
  args: {
    totalPages: 1,
    showFirstLast: true,
    maxVisiblePages: 5
  }
}`,...(G=(D=p.parameters)==null?void 0:D.docs)==null?void 0:G.source}}};const re=["Playground","InteractivePagination","SmallPagination","LargePagination","WithoutFirstLast","MinimalVisiblePages","FirstPage","MiddlePage","LastPage","SinglePage"];export{m as FirstPage,o as InteractivePagination,P as LargePagination,d as LastPage,l as MiddlePage,c as MinimalVisiblePages,g as Playground,p as SinglePage,u as SmallPagination,i as WithoutFirstLast,re as __namedExportsOrder,ee as default};
