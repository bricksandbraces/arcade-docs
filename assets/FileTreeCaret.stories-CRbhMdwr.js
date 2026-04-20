import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as u}from"./index-CY-HDqYb.js";import{a7 as s,a8 as x}from"./ContextMenuList-CrHLZopD.js";import"./index-A6zbrgSY.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";import"./index-ZRCHFLd-.js";import"./sizes-BpUsT7VU.js";import"./colors-CoOIoG7W.js";const y={title:"WIP Components/FileTree/Caret",component:s},n={render:e=>{const[m,c]=u.useState(e.open??!1);return a.jsx(s,{...e,open:m,onToggle:b=>c(b),ariaLabel:e.ariaLabel})},args:{open:!1,disabled:!1,size:"sm"},argTypes:{onToggle:{control:{disable:!0}},onClick:{control:{disable:!0}}}},r=()=>a.jsx("div",{className:"gap-md flex flex-row items-center",children:x.map(e=>a.jsxs("div",{className:"gap-sm flex flex-row items-center",children:[a.jsx(s,{open:!1,size:e,ariaLabel:"Expand"}),a.jsx(s,{open:!0,size:e,ariaLabel:"Collapse"}),a.jsx(s,{open:!1,size:e,disabled:!0,ariaLabel:"Expand (disabled)"}),a.jsx(s,{open:!0,size:e,disabled:!0,ariaLabel:"Collapse (disabled)"})]},e))});r.__docgenInfo={description:"",methods:[],displayName:"States"};r.__docgenInfo={description:"",methods:[],displayName:"States"};var o,t,l;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [open, setOpen] = useState(args.open ?? false);
    return <FileTreeCaret {...args} open={open} onToggle={next => setOpen(next)} ariaLabel={args.ariaLabel} />;
  },
  args: {
    open: false,
    disabled: false,
    size: "sm"
  },
  argTypes: {
    onToggle: {
      control: {
        disable: true
      }
    },
    onClick: {
      control: {
        disable: true
      }
    }
  }
}`,...(l=(t=n.parameters)==null?void 0:t.docs)==null?void 0:l.source}}};var i,p,d;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  return <div className="gap-md flex flex-row items-center">
      {FileTreeCaretSizes.map((s: (typeof FileTreeCaretSizes)[number]) => <div key={s} className="gap-sm flex flex-row items-center">
          <FileTreeCaret open={false} size={s} ariaLabel="Expand" />
          <FileTreeCaret open={true} size={s} ariaLabel="Collapse" />
          <FileTreeCaret open={false} size={s} disabled ariaLabel="Expand (disabled)" />
          <FileTreeCaret open={true} size={s} disabled ariaLabel="Collapse (disabled)" />
        </div>)}
    </div>;
}`,...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const E=["Playground","States"];export{n as Playground,r as States,E as __namedExportsOrder,y as default};
