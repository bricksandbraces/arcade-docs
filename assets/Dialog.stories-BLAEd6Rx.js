import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{y as O,b as M,w as F,T as j,C as z,z as H}from"./index.esm-ANRLJ7JX.js";import{r as k}from"./index-D4lIrffr.js";import"./index-BQQLSK9g.js";import"./index-DsJinFGm.js";const L={title:"Components/Dialog",args:{title:"Dialog Title",subtitle:"Subtitle or Description",primaryButton:{label:"Button",onClick:()=>alert("Primary action clicked")},secondaryButton:{label:"Button",onClick:()=>alert("Secondary action clicked")},onClose:()=>alert("Dialog closed"),description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",children:r.jsx("div",{className:"border-border-brand p-lg rounded-md border-[1px] border-dashed",children:r.jsx("span",{className:"text-text-brand typography-body-small",children:"Children"})})}},n={name:"DialogHeader",render:e=>r.jsx(O,{title:e.title,subtitle:e.subtitle})},t={name:"DialogBody",render:e=>r.jsx(M,{description:e.description,children:e.children})},s={name:"DialogFooter",render:e=>r.jsx(F,{primaryButton:e.primaryButton,secondaryButton:e.secondaryButton})},a={args:{size:"md"},argTypes:{size:{control:{type:"select"},options:["sm","md","lg","xlg"]}},render:e=>{const[i,o]=k.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsx(j,{onClick:()=>o(!0),label:"Open Modal"}),r.jsx(z,{...e,open:i,onClose:()=>o(!1),children:e.children})]})}},l={render:e=>{const[i,o]=k.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsx(j,{onClick:()=>o(!0),label:"Open Sheet"}),r.jsx(H,{...e,open:i,onClose:()=>o(!1),children:e.children})]})}};var d,c,p;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "DialogHeader",
  render: (args: any) => {
    return <DialogHeader title={args.title} subtitle={args.subtitle} />;
  }
}`,...(p=(c=n.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,u,g;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "DialogBody",
  render: (args: any) => {
    return <DialogBody description={args.description}>{args.children}</DialogBody>;
  }
}`,...(g=(u=t.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var y,h,b;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "DialogFooter",
  render: (args: any) => {
    return <DialogFooter primaryButton={args.primaryButton} secondaryButton={args.secondaryButton} />;
  }
}`,...(b=(h=s.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var x,C,B;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    size: "md"
  },
  argTypes: {
    size: {
      control: {
        type: "select"
      },
      options: ["sm", "md", "lg", "xlg"]
    }
  },
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
}`,...(B=(C=a.parameters)==null?void 0:C.docs)==null?void 0:B.source}}};var S,D,f;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(f=(D=l.parameters)==null?void 0:D.docs)==null?void 0:f.source}}};const N=["HeaderComponent","BodyComponent","FooterComponent","Modal","Sheet"];export{t as BodyComponent,s as FooterComponent,n as HeaderComponent,a as Modal,l as Sheet,N as __namedExportsOrder,L as default};
