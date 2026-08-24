import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{$a as n,ir as r,ko as i,mo as a,t as o}from"./iframe-B9tHnIBq.js";var s,c,l,u,d,f,p;e((()=>{s=t(i(),1),c=t(n(),1),o(),l=a(),u={title:`Layout & Structure/FileTree/Caret`,component:r,tags:[`autodocs`],argTypes:{open:{control:`boolean`},disabled:{control:`boolean`},onToggle:{control:{disable:!0}},onClick:{control:{disable:!0}}}},d={args:{open:!1,disabled:!1,ariaLabel:`Toggle folder`},render:e=>{let[t,n]=(0,s.useState)(!!e.open);return(0,l.jsx)(r,{...e,open:t,onToggle:e=>n(e)})}},f={render:()=>(0,l.jsxs)(`div`,{className:(0,c.default)(`gap-md flex flex-row items-center`),children:[(0,l.jsx)(r,{open:!1,ariaLabel:`Expand`}),(0,l.jsx)(r,{open:!0,ariaLabel:`Collapse`}),(0,l.jsx)(r,{open:!1,disabled:!0,ariaLabel:`Expand (disabled)`}),(0,l.jsx)(r,{open:!0,disabled:!0,ariaLabel:`Collapse (disabled)`})]})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div className={cx("gap-md flex flex-row items-center")}>
      <FileTreeCaret open={false} ariaLabel="Expand" />
      <FileTreeCaret open={true} ariaLabel="Collapse" />
      <FileTreeCaret open={false} disabled ariaLabel="Expand (disabled)" />
      <FileTreeCaret open={true} disabled ariaLabel="Collapse (disabled)" />
    </div>
}`,...f.parameters?.docs?.source}}},p=[`Playground`,`Overview`]}))();export{f as Overview,d as Playground,p as __namedExportsOrder,u as default};