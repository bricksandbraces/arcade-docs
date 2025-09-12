import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as A}from"./index-0yr9KlQE.js";import{ay as D,az as a}from"./ContextMenuList-pvZaRry1.js";import"./NumberInput-LKINkquG.js";import"./index-tymuTqDW.js";import"./index-DotmK1FS.js";import"./borders-N_bRvfGw.js";import"./colors-mvAPBTAn.js";import"./index-ChaIqHV-.js";const G={title:"Components/Pagination/Page",component:a,argTypes:{state:{control:"inline-radio",options:D},pageNumber:{control:"text"}}},t={args:{state:"enabled",pageNumber:1}},r={args:{state:"enabled",pageNumber:1}},n={args:{state:"selected",pageNumber:1}},o={render:()=>e.jsxs("div",{className:"flex gap-4",children:[e.jsx(a,{state:"enabled",pageNumber:1}),e.jsx(a,{state:"enabled",pageNumber:5}),e.jsx(a,{state:"enabled",pageNumber:10}),e.jsx(a,{state:"enabled",pageNumber:99}),e.jsx(a,{state:"enabled",pageNumber:"..."})]})},c={render:()=>e.jsxs("div",{className:"flex gap-4",children:[e.jsx(a,{state:"enabled",pageNumber:1}),e.jsx(a,{state:"selected",pageNumber:2})]})},m={render:()=>{const[R,C]=A.useState(2);return e.jsx("div",{className:"flex gap-2",children:[1,2,3,4,5].map(s=>e.jsx(a,{state:R===s?"selected":"enabled",pageNumber:s,onClick:()=>C(s)},s))})}};var d,p,l;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    state: "enabled",
    pageNumber: 1
  }
}`,...(l=(p=t.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var g,u,i;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    state: "enabled",
    pageNumber: 1
  }
}`,...(i=(u=r.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};var b,N,x;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    state: "selected",
    pageNumber: 1
  }
}`,...(x=(N=n.parameters)==null?void 0:N.docs)==null?void 0:x.source}}};var P,S,f;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4">
      <Page state="enabled" pageNumber={1} />
      <Page state="enabled" pageNumber={5} />
      <Page state="enabled" pageNumber={10} />
      <Page state="enabled" pageNumber={99} />
      <Page state="enabled" pageNumber="..." />
    </div>
}`,...(f=(S=o.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var j,v,E;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4">
      <Page state="enabled" pageNumber={1} />
      <Page state="selected" pageNumber={2} />
    </div>
}`,...(E=(v=c.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};var h,k,y;m.parameters={...m.parameters,docs:{...(h=m.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedPage, setSelectedPage] = React.useState(2);
    return <div className="flex gap-2">
        {[1, 2, 3, 4, 5].map(pageNum => <Page key={pageNum} state={selectedPage === pageNum ? "selected" : "enabled"} pageNumber={pageNum} onClick={() => setSelectedPage(pageNum)} />)}
      </div>;
  }
}`,...(y=(k=m.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};const H=["Playground","EnabledState","SelectedState","DifferentNumbers","AllStates","InteractiveExample"];export{c as AllStates,o as DifferentNumbers,r as EnabledState,m as InteractiveExample,t as Playground,n as SelectedState,H as __namedExportsOrder,G as default};
