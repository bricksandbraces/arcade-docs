import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{L as u,U as m,X as g}from"./index.esm-Cc_3SyNv.js";import{r as h}from"./index-D4lIrffr.js";import"./index-BQQLSK9g.js";import"./index-DsJinFGm.js";const C={title:"Components/Dialog",args:{title:"Dialog Title",subtitle:"This is a subtitle",primaryButton:{label:"Primary Action",onClick:()=>alert("Primary action clicked")},secondaryButton:{label:"Secondary Action",onClick:()=>alert("Secondary action clicked")},onClose:()=>alert("Dialog closed"),children:e.jsxs("div",{children:[e.jsx("p",{children:"This is the content of the dialog."}),e.jsx("p",{children:"You can put any content here, including forms, text, or other components."})]})}},r={render:n=>{const[t,o]=h.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>o(!0),label:"Open Modal"}),e.jsx(m,{...n,open:t,onClose:()=>o(!1),children:n.children})]})}},s={render:n=>{const[t,o]=h.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>o(!0),label:"Open Sheet"}),e.jsx(g,{...n,open:t,onClose:()=>o(!1),children:n.children})]})}};var a,l,i;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: (args: ModalProps) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)} label="Open Modal" />
        <DialogModal {...args as ModalProps} open={open} onClose={() => setOpen(false)}>
          {args.children}
        </DialogModal>
      </>;
  }
}`,...(i=(l=r.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var c,p,d;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: (args: SheetProps) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)} label="Open Sheet" />
        <DialogSheet {...args as SheetProps} open={open} onClose={() => setOpen(false)}>
          {args.children}
        </DialogSheet>
      </>;
  }
}`,...(d=(p=s.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const j=["Modal","Sheet"];export{r as Modal,s as Sheet,j as __namedExportsOrder,C as default};
