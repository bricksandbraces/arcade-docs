import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Ds as n,Hs as r,I as i,t as a}from"./iframe-_Ug8tvbS.js";import{n as o,t as s}from"./figmaDesign-DDiUnvXT.js";var c,l,u,d,f,p;e((()=>{a(),c=t(r(),1),o(),l=n(),u={parameters:{design:s(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=5356-1063&m=dev`)},title:`Display & Data/DataTable/TableSearch`,component:i,decorators:[e=>(0,l.jsx)(`div`,{className:`bg-background p-lg rounded-md`,style:{width:420},children:(0,l.jsx)(`div`,{className:`flex justify-end`,children:(0,l.jsx)(e,{})})})]},d={render:()=>{let[e,t]=(0,c.useState)(``);return(0,l.jsxs)(`div`,{className:`gap-md flex items-center`,children:[(0,l.jsx)(i,{value:e,onValueChange:t}),(0,l.jsxs)(`span`,{className:`typography-body-small text-text-accent`,children:[`Query: `,e||`-`]})]})}},f={render:()=>{let[e,t]=(0,c.useState)(`Ada`);return(0,l.jsx)(i,{defaultOpen:!0,value:e,onValueChange:t})}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("");
    return <div className="gap-md flex items-center">
        <TableSearch value={value} onValueChange={setValue} />
        <span className="typography-body-small text-text-accent">
          Query: {value || "-"}
        </span>
      </div>;
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("Ada");
    return <TableSearch defaultOpen value={value} onValueChange={setValue} />;
  }
}`,...f.parameters?.docs?.source}}},p=[`Playground`,`StartOpen`]}))();export{d as Playground,f as StartOpen,p as __namedExportsOrder,u as default};