import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{F as n,Oo as r,po as i,t as a}from"./iframe-CanflEBn.js";var o,s,c,l,u,d;e((()=>{a(),o=t(r(),1),s=i(),c={title:`Display & Data/DataTable/TableSearch`,component:n,decorators:[e=>(0,s.jsx)(`div`,{className:`bg-background p-lg rounded-md`,style:{width:420},children:(0,s.jsx)(`div`,{className:`flex justify-end`,children:(0,s.jsx)(e,{})})})]},l={render:()=>{let[e,t]=(0,o.useState)(``);return(0,s.jsxs)(`div`,{className:`gap-md flex items-center`,children:[(0,s.jsx)(n,{value:e,onValueChange:t}),(0,s.jsxs)(`span`,{className:`typography-body-small text-text-accent`,children:[`Query: `,e||`—`]})]})}},u={render:()=>{let[e,t]=(0,o.useState)(`Ada`);return(0,s.jsx)(n,{defaultOpen:!0,value:e,onValueChange:t})}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("");
    return <div className="gap-md flex items-center">
        <TableSearch value={value} onValueChange={setValue} />
        <span className="typography-body-small text-text-accent">
          Query: {value || "—"}
        </span>
      </div>;
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("Ada");
    return <TableSearch defaultOpen value={value} onValueChange={setValue} />;
  }
}`,...u.parameters?.docs?.source}}},d=[`Playground`,`StartOpen`]}))();export{l as Playground,u as StartOpen,d as __namedExportsOrder,c as default};