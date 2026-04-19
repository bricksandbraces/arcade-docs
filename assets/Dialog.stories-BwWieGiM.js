import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{au as C,av as O,aw as L,h as j,ax as H,ay as M}from"./ContextMenuList-1mOvUnAk.js";import{r as i}from"./index-CY-HDqYb.js";import"./index-A6zbrgSY.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";import"./index-ZRCHFLd-.js";import"./sizes-BpUsT7VU.js";import"./colors-CoOIoG7W.js";const N={title:"Hendrik Supervision/Dialog",args:{title:"Dialog Title",subtitle:"Subtitle or Description",primaryButton:{label:"Button",onClick:()=>alert("Primary action clicked")},secondaryButton:{label:"Button",onClick:()=>alert("Secondary action clicked")},onClose:()=>alert("Dialog closed"),description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",children:o.jsx("div",{className:"border-border-brand p-lg rounded-md border-[1px] border-dashed",children:o.jsx("span",{className:"text-text-brand typography-body-small",children:"Children"})})}},n={name:"DialogHeader",render:e=>o.jsx(C,{title:e.title,subtitle:e.subtitle})},r={name:"DialogBody",render:e=>o.jsx(O,{description:e.description,children:e.children})},a={name:"DialogFooter",render:e=>o.jsx(L,{primaryButton:e.primaryButton,secondaryButton:e.secondaryButton})},s={args:{size:"md",open:!1},argTypes:{size:{control:{type:"select"},options:["sm","md","lg","xlg"]},open:{control:{type:"boolean"}}},render:e=>{const[d,t]=i.useState(e.open||!1);return i.useEffect(()=>{t(e.open||!1)},[e.open]),o.jsxs(o.Fragment,{children:[o.jsx(j,{onClick:()=>t(!0),label:"Open Modal"}),o.jsx(H,{...e,open:d,onClose:()=>t(!1),children:e.children})]})}},l={args:{open:!1,withGrabHandler:!0,stepless:!0},argTypes:{open:{control:{type:"boolean"}},withGrabHandler:{control:{type:"boolean"}},stepless:{control:{type:"boolean"}}},render:e=>{const[d,t]=i.useState(e.open||!1);return i.useEffect(()=>{t(e.open||!1)},[e.open]),o.jsxs(o.Fragment,{children:[o.jsx(j,{onClick:()=>t(!0),label:"Open Sheet"}),o.jsx(M,{...e,open:d,onClose:()=>t(!1),children:e.children})]})}};var m,u,p;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "DialogHeader",
  render: (args: any) => {
    return <DialogHeader title={args.title} subtitle={args.subtitle} />;
  }
}`,...(p=(u=n.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var c,g,b;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "DialogBody",
  render: (args: any) => {
    return <DialogBody description={args.description}>{args.children}</DialogBody>;
  }
}`,...(b=(g=r.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var y,h,f;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "DialogFooter",
  render: (args: any) => {
    return <DialogFooter primaryButton={args.primaryButton} secondaryButton={args.secondaryButton} />;
  }
}`,...(f=(h=a.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var k,S,x;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(x=(S=s.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var B,v,D;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    open: false,
    withGrabHandler: true,
    stepless: true
  },
  argTypes: {
    open: {
      control: {
        type: "boolean"
      }
    },
    withGrabHandler: {
      control: {
        type: "boolean"
      }
    },
    stepless: {
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
}`,...(D=(v=l.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};const _=["HeaderComponent","BodyComponent","FooterComponent","Modal","Sheet"];export{r as BodyComponent,a as FooterComponent,n as HeaderComponent,s as Modal,l as Sheet,_ as __namedExportsOrder,N as default};
