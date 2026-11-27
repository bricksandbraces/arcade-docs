import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Bc as n,Tc as r,_i as i,di as a,fi as o,gi as s,pi as c,t as l,tl as u,ui as d}from"./iframe-bQfS6TRu.js";import{n as f,t as p}from"./figmaDesign-DLesXS3c.js";var m,h,g,_,v,y,b,x,S,C;e((()=>{l(),m=t(r(),1),h=t(u(),1),f(),g=n(),_={parameters:{design:p(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=4983-2037`)},title:`Components/DataTable/TableCell`,component:s,argTypes:{kind:{control:`inline-radio`,options:i}},args:{kind:`default`,children:`Table Cell`},decorators:[(e,t)=>(0,g.jsx)(`div`,{className:`bg-background p-md rounded-md`,style:{width:240},children:(0,g.jsx)(`div`,{role:`table`,className:o,children:(t.args?.kind??`default`)===`header`?(0,g.jsx)(`div`,{role:`row`,className:(0,m.default)(a,`border-border border-t-[0.5px] border-b-[0.5px]`),children:(0,g.jsx)(e,{})}):(0,g.jsx)(`div`,{role:`rowgroup`,className:d,children:(0,g.jsx)(c,{showBorderTop:!0,showBorderBottom:!0,children:(0,g.jsx)(e,{})})})})})]},v={},y={args:{kind:`header`,children:`Table Cell`}},b={args:{kind:`header`,children:`Table Cell`,showCheck:!0,showHelp:!0,sortable:!0,sortDirection:`descending`,checkChecked:!1},render:function(e){let[t,n]=(0,h.useState)(!1),[r,i]=(0,h.useState)(`descending`);return(0,g.jsx)(s,{...e,sortDirection:r,onSortClick:()=>i(e=>e===`descending`?`ascending`:`descending`),checkChecked:t,onCheckChange:e=>n(e.target.checked),onHelpClick:()=>{}})}},x={args:{kind:`badge`,badges:[{color:`gray`,children:`Badge`},{color:`blue`,children:`Badge`}]}},S={args:{kind:`user`,userName:`User Name`}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    kind: "header",
    children: "Table Cell"
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    kind: "header",
    children: "Table Cell",
    showCheck: true,
    showHelp: true,
    sortable: true,
    sortDirection: "descending",
    checkChecked: false
  },
  render: function Render(args) {
    const [checked, setChecked] = useState(false);
    const [direction, setDirection] = useState<"ascending" | "descending">("descending");
    return <TableCell {...args} sortDirection={direction} onSortClick={() => setDirection(prev => prev === "descending" ? "ascending" : "descending")} checkChecked={checked} onCheckChange={event => setChecked(event.target.checked)} onHelpClick={() => {}} />;
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    kind: "badge",
    badges: [{
      color: "gray",
      children: "Badge"
    }, {
      color: "blue",
      children: "Badge"
    }]
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    kind: "user",
    userName: "User Name"
  }
}`,...S.parameters?.docs?.source}}},C=[`Playground`,`Header`,`HeaderWithControls`,`Badge`,`User`]}))();export{x as Badge,y as Header,b as HeaderWithControls,v as Playground,S as User,C as __namedExportsOrder,_ as default};