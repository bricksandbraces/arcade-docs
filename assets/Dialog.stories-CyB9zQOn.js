import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{L as O,U as D,X as M,V as P,a as F,$ as E}from"./index.esm-BVZSyONk.js";import{r as k}from"./index-D4lIrffr.js";import"./index-BQQLSK9g.js";import"./index-DsJinFGm.js";const V={title:"Components/Dialog",args:{title:"Dialog Title",subtitle:"This is a subtitle",primaryButton:{label:"Primary Action",onClick:()=>alert("Primary action clicked")},secondaryButton:{label:"Secondary Action",onClick:()=>alert("Secondary action clicked")},onClose:()=>alert("Dialog closed"),children:e.jsxs("div",{children:[e.jsx("p",{children:"This is the content of the dialog."}),e.jsx("p",{children:"You can put any content here, including forms, text, or other components."})]})}},o={render:r=>{const[i,n]=k.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(O,{onClick:()=>n(!0),label:"Open Modal"}),e.jsx(D,{...r,open:i,onClose:()=>n(!1),children:r.children})]})}},t={render:r=>{const[i,n]=k.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(O,{onClick:()=>n(!0),label:"Open Sheet"}),e.jsx(M,{...r,open:i,onClose:()=>n(!1),children:r.children})]})}},s={render:r=>e.jsx(P,{title:r.title,subtitle:r.subtitle})},a={render:r=>e.jsx(F,{children:r.children})},l={render:r=>e.jsx(E,{primaryButton:r.primaryButton,secondaryButton:r.secondaryButton})};var c,d,p;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(p=(d=o.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,m,h;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(h=(m=t.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var g,y,x;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: (args: any) => {
    return <DialogHeader title={args.title} subtitle={args.subtitle} />;
  }
}`,...(x=(y=s.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var S,C,f;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: (args: any) => {
    return <DialogBody>{args.children}</DialogBody>;
  }
}`,...(f=(C=a.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};var B,b,j;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: (args: any) => {
    return <DialogFooter primaryButton={args.primaryButton} secondaryButton={args.secondaryButton} />;
  }
}`,...(j=(b=l.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};const X=["Modal","Sheet","HeaderComponent","BodyComponent","FooterComponent"];export{a as BodyComponent,l as FooterComponent,s as HeaderComponent,o as Modal,t as Sheet,X as __namedExportsOrder,V as default};
