import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Ka as n,So as r,ar as i,dr as a,ir as o,or as s,so as c,sr as l,t as u,ur as d}from"./iframe-CKKfkoYu.js";var f,p,m,h,g,_,v,y,b,x;e((()=>{u(),f=t(n(),1),p=t(r(),1),m=c(),h={title:`Display & Data/DataTable/TableCell`,component:d,argTypes:{kind:{control:`inline-radio`,options:a}},args:{kind:`default`,children:`Table Cell`},decorators:[(e,t)=>(0,m.jsx)(`div`,{className:`bg-background p-md rounded-md`,style:{width:240},children:(0,m.jsx)(`div`,{role:`table`,className:s,children:(t.args?.kind??`default`)===`header`?(0,m.jsx)(`div`,{role:`row`,className:(0,f.default)(i,`border-border border-t-[0.5px] border-b-[0.5px]`),children:(0,m.jsx)(e,{})}):(0,m.jsx)(`div`,{role:`rowgroup`,className:o,children:(0,m.jsx)(l,{showBorderTop:!0,showBorderBottom:!0,children:(0,m.jsx)(e,{})})})})})]},g={},_={args:{kind:`header`,children:`Table Cell`}},v={args:{kind:`header`,children:`Table Cell`,showCheck:!0,showHelp:!0,sortable:!0,sortDirection:`descending`,checkChecked:!1},render:function(e){let[t,n]=(0,p.useState)(!1),[r,i]=(0,p.useState)(`descending`);return(0,m.jsx)(d,{...e,sortDirection:r,onSortClick:()=>i(e=>e===`descending`?`ascending`:`descending`),checkChecked:t,onCheckChange:e=>n(e.target.checked),onHelpClick:()=>{}})}},y={args:{kind:`badge`,badges:[{color:`gray`,children:`Badge`},{color:`blue`,children:`Badge`}]}},b={args:{kind:`user`,userName:`User Name`}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    kind: "header",
    children: "Table Cell"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    kind: "user",
    userName: "User Name"
  }
}`,...b.parameters?.docs?.source}}},x=[`Playground`,`Header`,`HeaderWithControls`,`Badge`,`User`]}))();export{y as Badge,_ as Header,v as HeaderWithControls,g as Playground,b as User,x as __namedExportsOrder,h as default};