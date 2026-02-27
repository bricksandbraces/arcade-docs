import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{W as C,X as O,Y as L,f as v,Z as F,_ as M}from"./ContextMenuList-Da-ryDLs.js";import{r as l}from"./index-CY-HDqYb.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";import"./index-ZRCHFLd-.js";import"./borders-N_bRvfGw.js";import"./colors-mvAPBTAn.js";const N={title:"F/Dialog",args:{title:"Dialog Title",subtitle:"Subtitle or Description",primaryButton:{label:"Button",onClick:()=>alert("Primary action clicked")},secondaryButton:{label:"Button",onClick:()=>alert("Secondary action clicked")},onClose:()=>alert("Dialog closed"),description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",children:o.jsx("div",{className:"border-border-brand p-lg rounded-md border-[1px] border-dashed",children:o.jsx("span",{className:"text-text-brand typography-body-small",children:"Children"})})}},r={name:"DialogHeader",render:e=>o.jsx(C,{title:e.title,subtitle:e.subtitle})},a={name:"DialogBody",render:e=>o.jsx(O,{description:e.description,children:e.children})},n={name:"DialogFooter",render:e=>o.jsx(L,{primaryButton:e.primaryButton,secondaryButton:e.secondaryButton})},s={args:{size:"md",open:!1},argTypes:{size:{control:{type:"select"},options:["sm","md","lg","xlg"]},open:{control:{type:"boolean"}}},render:e=>{const[d,t]=l.useState(e.open||!1);return l.useEffect(()=>{t(e.open||!1)},[e.open]),o.jsxs(o.Fragment,{children:[o.jsx(v,{onClick:()=>t(!0),label:"Open Modal"}),o.jsx(F,{...e,open:d,onClose:()=>t(!1),children:e.children})]})}},i={args:{open:!1},argTypes:{open:{control:{type:"boolean"}}},render:e=>{const[d,t]=l.useState(e.open||!1);return l.useEffect(()=>{t(e.open||!1)},[e.open]),o.jsxs(o.Fragment,{children:[o.jsx(v,{onClick:()=>t(!0),label:"Open Sheet"}),o.jsx(M,{...e,open:d,onClose:()=>t(!1),children:e.children})]})}};var m,u,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "DialogHeader",
  render: (args: any) => {
    return <DialogHeader title={args.title} subtitle={args.subtitle} />;
  }
}`,...(p=(u=r.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var c,g,y;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "DialogBody",
  render: (args: any) => {
    return <DialogBody description={args.description}>{args.children}</DialogBody>;
  }
}`,...(y=(g=a.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var b,h,f;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "DialogFooter",
  render: (args: any) => {
    return <DialogFooter primaryButton={args.primaryButton} secondaryButton={args.secondaryButton} />;
  }
}`,...(f=(h=n.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var k,S,x;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    size: "md",
    open: false
  },
  argTypes: {
    size: {
      control: {
        type: "select"
      },
      options: ["sm", "md", "lg", "xlg"]
    },
    open: {
      control: {
        type: "boolean"
      }
    }
  },
  render: (args: ModalProps) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [open, setOpen] = useState(args.open || false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      setOpen(args.open || false);
    }, [args.open]);
    return <>
        <Button onClick={() => setOpen(true)} label="Open Modal" />
        <DialogModal {...args as ModalProps} open={open} onClose={() => setOpen(false)}>
          {args.children}
        </DialogModal>
      </>;
  }
}`,...(x=(S=s.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var B,D,j;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    open: false
  },
  argTypes: {
    open: {
      control: {
        type: "boolean"
      }
    }
  },
  render: (args: SheetProps) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [open, setOpen] = useState(args.open || false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      setOpen(args.open || false);
    }, [args.open]);
    return <>
        <Button onClick={() => setOpen(true)} label="Open Sheet" />
        <DialogSheet {...args as SheetProps} open={open} onClose={() => setOpen(false)}>
          {args.children}
        </DialogSheet>
      </>;
  }
}`,...(j=(D=i.parameters)==null?void 0:D.docs)==null?void 0:j.source}}};const $=["HeaderComponent","BodyComponent","FooterComponent","Modal","Sheet"];export{a as BodyComponent,n as FooterComponent,r as HeaderComponent,s as Modal,i as Sheet,$ as __namedExportsOrder,N as default};
