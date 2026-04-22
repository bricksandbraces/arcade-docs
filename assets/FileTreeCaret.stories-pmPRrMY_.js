import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as x}from"./index-CY-HDqYb.js";import{c as u}from"./index-A6zbrgSY.js";import{an as a}from"./ContextMenu-CkvOQcf9.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";const F={title:"WIP Components/FileTree/Caret",component:a,argTypes:{open:{control:"boolean"},disabled:{control:"boolean"},onToggle:{control:{disable:!0}},onClick:{control:{disable:!0}}}},r={args:{open:!1,disabled:!1,ariaLabel:"Toggle folder"},render:s=>{const[c,m]=x.useState(!!s.open);return e.jsx(a,{...s,open:c,onToggle:b=>m(b)})}},o={render:()=>e.jsxs("div",{className:u("flex flex-row items-center gap-md"),children:[e.jsx(a,{open:!1,ariaLabel:"Expand"}),e.jsx(a,{open:!0,ariaLabel:"Collapse"}),e.jsx(a,{open:!1,disabled:!0,ariaLabel:"Expand (disabled)"}),e.jsx(a,{open:!0,disabled:!0,ariaLabel:"Collapse (disabled)"})]})};var n,l,t;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(t=(l=r.parameters)==null?void 0:l.docs)==null?void 0:t.source}}};var i,d,p;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <div className={cx("flex flex-row items-center gap-md")}>
      <FileTreeCaret open={false} ariaLabel="Expand" />
      <FileTreeCaret open={true} ariaLabel="Collapse" />
      <FileTreeCaret open={false} disabled ariaLabel="Expand (disabled)" />
      <FileTreeCaret open={true} disabled ariaLabel="Collapse (disabled)" />
    </div>
}`,...(p=(d=o.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const v=["Playground","Overview"];export{o as Overview,r as Playground,v as __namedExportsOrder,F as default};
