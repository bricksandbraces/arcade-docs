import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{D as f,j as O,k as L,f as v,M,S as F}from"./TextArea-D3Jj1EDA.js";import{r as C}from"./index-D4lIrffr.js";import"./index-BQQLSK9g.js";import"./index-DsJinFGm.js";import"./borders-N_bRvfGw.js";import"./colors-DFCrPdrr.js";import"./index-C7yw4mlf.js";const _={title:"Components/Dialog",args:{title:"Dialog Title",subtitle:"Subtitle or Description",primaryButton:{label:"Button",onClick:()=>alert("Primary action clicked")},secondaryButton:{label:"Button",onClick:()=>alert("Secondary action clicked")},onClose:()=>alert("Dialog closed"),description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",children:t.jsx("div",{className:"border-border-brand p-lg rounded-md border-[1px] border-dashed",children:t.jsx("span",{className:"text-text-brand typography-body-small",children:"Children"})})}},r={name:"DialogHeader",render:e=>t.jsx(f,{title:e.title,subtitle:e.subtitle})},a={name:"DialogBody",render:e=>t.jsx(O,{description:e.description,children:e.children})},s={name:"DialogFooter",render:e=>t.jsx(L,{primaryButton:e.primaryButton,secondaryButton:e.secondaryButton})},n={args:{size:"md"},argTypes:{size:{control:{type:"select"},options:["sm","md","lg","xlg"]}},render:e=>{const[d,o]=C.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx(v,{onClick:()=>o(!0),label:"Open Modal"}),t.jsx(M,{...e,open:d,onClose:()=>o(!1),children:e.children})]})}},i={render:e=>{const[d,o]=C.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx(v,{onClick:()=>o(!0),label:"Open Sheet"}),t.jsx(F,{...e,open:d,onClose:()=>o(!1),children:e.children})]})}};var l,m,u;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "DialogHeader",
  render: (args: any) => {
    return <DialogHeader title={args.title} subtitle={args.subtitle} />;
  }
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var c,p,g;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "DialogBody",
  render: (args: any) => {
    return <DialogBody description={args.description}>{args.children}</DialogBody>;
  }
}`,...(g=(p=a.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var y,b,h;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "DialogFooter",
  render: (args: any) => {
    return <DialogFooter primaryButton={args.primaryButton} secondaryButton={args.secondaryButton} />;
  }
}`,...(h=(b=s.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var S,k,x;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(x=(k=n.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var B,D,j;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(j=(D=i.parameters)==null?void 0:D.docs)==null?void 0:j.source}}};const $=["HeaderComponent","BodyComponent","FooterComponent","Modal","Sheet"];export{a as BodyComponent,s as FooterComponent,r as HeaderComponent,n as Modal,i as Sheet,$ as __namedExportsOrder,_ as default};
