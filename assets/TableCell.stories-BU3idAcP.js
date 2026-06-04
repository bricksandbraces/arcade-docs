import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{ar as n,cr as r,io as i,ir as a,lr as o,nr as s,rr as c,t as l,yo as u}from"./iframe-Qk2RwyEM.js";var d,f,p,m,h,g,_,v,y;e((()=>{l(),d=t(u(),1),f=i(),p={title:`Display & Data/DataTable/TableCell`,component:r,argTypes:{kind:{control:`inline-radio`,options:o}},args:{kind:`default`,children:`Table Cell`},decorators:[(e,t)=>(0,f.jsx)(`div`,{className:`rounded-md bg-background p-md`,style:{width:240},children:(0,f.jsx)(`div`,{role:`table`,className:a,children:(t.args?.kind??`default`)===`header`?(0,f.jsx)(`div`,{role:`row`,className:c,children:(0,f.jsx)(e,{})}):(0,f.jsx)(`div`,{role:`rowgroup`,className:s,children:(0,f.jsx)(n,{children:(0,f.jsx)(e,{})})})})})]},m={},h={args:{kind:`header`,children:`Table Cell`}},g={args:{kind:`header`,children:`Table Cell`,showCheck:!0,showHelp:!0,sortDirection:`descending`,checkChecked:!1},render:function(e){let[t,n]=(0,d.useState)(!1);return(0,f.jsx)(r,{...e,checkChecked:t,onCheckChange:e=>n(e.target.checked),onHelpClick:()=>{}})}},_={args:{kind:`badge`,badges:[{color:`gray`,children:`Badge`},{color:`blue`,children:`Badge`}]}},v={args:{kind:`user`,userName:`User Name`}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    kind: "header",
    children: "Table Cell"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    kind: "header",
    children: "Table Cell",
    showCheck: true,
    showHelp: true,
    sortDirection: "descending",
    checkChecked: false
  },
  render: function Render(args) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [checked, setChecked] = useState(false);
    return <TableCell {...args} checkChecked={checked} onCheckChange={event => setChecked(event.target.checked)} onHelpClick={() => {}} />;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    kind: "user",
    userName: "User Name"
  }
}`,...v.parameters?.docs?.source}}},y=[`Playground`,`Header`,`HeaderWithControls`,`Badge`,`User`]}))();export{_ as Badge,h as Header,g as HeaderWithControls,m as Playground,v as User,y as __namedExportsOrder,p as default};