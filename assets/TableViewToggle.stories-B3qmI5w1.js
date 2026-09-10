import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Fo as n,L as r,Xo as i,t as a}from"./iframe-RQUrcOP9.js";import{n as o,t as s}from"./figmaDesign-CO6i5n9C.js";var c,l,u,d,f,p;e((()=>{a(),c=t(i(),1),o(),l=n(),u={parameters:{design:s(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=5356-1062&m=dev`)},title:`Display & Data/DataTable/TableViewToggle`,component:r,decorators:[e=>(0,l.jsx)(`div`,{className:`bg-background p-lg rounded-md`,children:(0,l.jsx)(e,{})})]},d={render:()=>{let[e,t]=(0,c.useState)(`list`);return(0,l.jsxs)(`div`,{className:`gap-md flex items-center`,children:[(0,l.jsx)(r,{value:e,onValueChange:t}),(0,l.jsxs)(`span`,{className:`typography-body-small text-text-accent`,children:[`Current: `,e]})]})}},f={args:{disabled:!0}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [mode, setMode] = useState<TableViewMode>("list");
    return <div className="gap-md flex items-center">
        <TableViewToggle value={mode} onValueChange={setMode} />
        <span className="typography-body-small text-text-accent">
          Current: {mode}
        </span>
      </div>;
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...f.parameters?.docs?.source}}},p=[`Playground`,`Disabled`]}))();export{f as Disabled,d as Playground,p as __namedExportsOrder,u as default};