import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Fc as n,ac as r,bc as i,oi as a,t as o}from"./iframe-D2hLWV5X.js";import{n as s,t as c}from"./figmaDesign-DLesXS3c.js";var l,u,d,f,p,m,h;e((()=>{l=t(n(),1),u=t(r(),1),o(),s(),d=i(),f={parameters:{design:c(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System`)},title:`Components/FileTree/Caret`,component:a,tags:[`autodocs`],argTypes:{open:{control:`boolean`},disabled:{control:`boolean`},onToggle:{control:{disable:!0}},onClick:{control:{disable:!0}}}},p={args:{open:!1,disabled:!1,ariaLabel:`Toggle folder`},render:e=>{let[t,n]=(0,l.useState)(!!e.open);return(0,d.jsx)(a,{...e,open:t,onToggle:e=>n(e)})}},m={render:()=>(0,d.jsxs)(`div`,{className:(0,u.default)(`gap-md flex flex-row items-center`),children:[(0,d.jsx)(a,{open:!1,ariaLabel:`Expand`}),(0,d.jsx)(a,{open:!0,ariaLabel:`Collapse`}),(0,d.jsx)(a,{open:!1,disabled:!0,ariaLabel:`Expand (disabled)`}),(0,d.jsx)(a,{open:!0,disabled:!0,ariaLabel:`Collapse (disabled)`})]})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    open: false,
    disabled: false,
    ariaLabel: "Toggle folder"
  },
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [open, setOpen] = useState(Boolean(args.open));
    return <FileTreeCaret {...args} open={open} onToggle={next => setOpen(next)} />;
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className={cx("gap-md flex flex-row items-center")}>
      <FileTreeCaret open={false} ariaLabel="Expand" />
      <FileTreeCaret open={true} ariaLabel="Collapse" />
      <FileTreeCaret open={false} disabled ariaLabel="Expand (disabled)" />
      <FileTreeCaret open={true} disabled ariaLabel="Collapse (disabled)" />
    </div>
}`,...m.parameters?.docs?.source}}},h=[`Playground`,`Overview`]}))();export{m as Overview,p as Playground,h as __namedExportsOrder,f as default};