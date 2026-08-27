import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{I as n,Mo as r,_o as i,t as a}from"./iframe-BhKgwV0q.js";var o,s,c,l,u,d;e((()=>{a(),o=t(r(),1),s=i(),c={title:`Display & Data/DataTable/TableViewToggle`,component:n,decorators:[e=>(0,s.jsx)(`div`,{className:`bg-background p-lg rounded-md`,children:(0,s.jsx)(e,{})})]},l={render:()=>{let[e,t]=(0,o.useState)(`list`);return(0,s.jsxs)(`div`,{className:`gap-md flex items-center`,children:[(0,s.jsx)(n,{value:e,onValueChange:t}),(0,s.jsxs)(`span`,{className:`typography-body-small text-text-accent`,children:[`Current: `,e]})]})}},u={args:{disabled:!0}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [mode, setMode] = useState<TableViewMode>("list");
    return <div className="gap-md flex items-center">
        <TableViewToggle value={mode} onValueChange={setMode} />
        <span className="typography-body-small text-text-accent">
          Current: {mode}
        </span>
      </div>;
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...u.parameters?.docs?.source}}},d=[`Playground`,`Disabled`]}))();export{u as Disabled,l as Playground,d as __namedExportsOrder,c as default};