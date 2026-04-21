import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{Q as L,R as H,U as N,V as E,h as u,W as F,X as T}from"./ContextMenuList-EtAKU-e4.js";import{r as t}from"./index-CY-HDqYb.js";import"./index-A6zbrgSY.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";const R={title:"Components/Dialog",args:{title:"Dialog Title",subtitle:"Subtitle or Description",primaryButton:{label:"Button",onClick:()=>alert("Primary action clicked")},secondaryButton:{label:"Button",onClick:()=>alert("Secondary action clicked")},onClose:()=>alert("Dialog closed"),description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",children:o.jsx("div",{className:"border-border-brand p-lg rounded-md border-[1px] border-dashed",children:o.jsx("span",{className:"text-text-brand typography-body-small",children:"Children"})})}},r={name:"DialogHeader",render:e=>o.jsx(H,{title:e.title,subtitle:e.subtitle})},s={name:"DialogBody",render:e=>o.jsx(N,{description:e.description,children:e.children})},l={name:"DialogFooter",render:e=>o.jsx(E,{primaryButton:e.primaryButton,secondaryButton:e.secondaryButton})},i={args:{layoutMode:"responsive",open:!1},argTypes:{layoutMode:{control:{type:"inline-radio"},options:L},open:{control:{type:"boolean"}}},render:e=>{const[a,n]=t.useState(e.open||!1);return t.useEffect(()=>{n(e.open||!1)},[e.open]),o.jsxs(o.Fragment,{children:[o.jsx(u,{onClick:()=>n(!0),label:"Open Modal"}),o.jsx(F,{...e,open:a,onClose:()=>n(!1),children:e.children})]})}},d={name:"Modal fixed width",parameters:{docs:{description:{story:'Use `layoutMode="fixed"` for a compact dialog (fit-content height). Override width with `panelClassName` (e.g. `max-w-[420px]`).'}}},args:{layoutMode:"fixed",open:!1,title:"Confirm action",subtitle:"",description:"This uses the fixed width preset. Adjust with panelClassName if needed.",primaryButton:{label:"Confirm",onClick:()=>alert("Confirmed")},secondaryButton:{label:"Cancel",onClick:()=>alert("Cancelled")},panelClassName:"",children:null},argTypes:{children:{table:{disable:!0}},layoutMode:{control:{type:"inline-radio"},options:L},panelClassName:{control:"text",description:"Optional override, e.g. max-w-[420px]"},open:{control:{type:"boolean"}}},render:e=>{const[a,n]=t.useState(e.open||!1);return t.useEffect(()=>{n(e.open||!1)},[e.open]),o.jsxs(o.Fragment,{children:[o.jsx(u,{onClick:()=>n(!0),label:"Open confirm modal"}),o.jsx(F,{...e,open:a,onClose:()=>n(!1),subtitle:e.subtitle??"",children:null})]})}},p={args:{open:!1,withGrabHandler:!0,stepless:!0},argTypes:{open:{control:{type:"boolean"}},withGrabHandler:{control:{type:"boolean"}},stepless:{control:{type:"boolean"}}},render:e=>{const[a,n]=t.useState(e.open||!1);return t.useEffect(()=>{n(e.open||!1)},[e.open]),o.jsxs(o.Fragment,{children:[o.jsx(u,{onClick:()=>n(!0),label:"Open Sheet"}),o.jsx(T,{...e,open:a,onClose:()=>n(!1),children:e.children})]})}};var c,m,g;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "DialogHeader",
  render: (args: any) => {
    return <DialogHeader title={args.title} subtitle={args.subtitle} />;
  }
}`,...(g=(m=r.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var y,b,f;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "DialogBody",
  render: (args: any) => {
    return <DialogBody description={args.description}>{args.children}</DialogBody>;
  }
}`,...(f=(b=s.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var h,x,C;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "DialogFooter",
  render: (args: any) => {
    return <DialogFooter primaryButton={args.primaryButton} secondaryButton={args.secondaryButton} />;
  }
}`,...(C=(x=l.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var k,M,S;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    layoutMode: "responsive",
    open: false
  },
  argTypes: {
    layoutMode: {
      control: {
        type: "inline-radio"
      },
      options: ModalLayoutModes
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
}`,...(S=(M=i.parameters)==null?void 0:M.docs)==null?void 0:S.source}}};var B,O,v;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: "Modal fixed width",
  parameters: {
    docs: {
      description: {
        story: 'Use \`layoutMode="fixed"\` for a compact dialog (fit-content height). Override width with \`panelClassName\` (e.g. \`max-w-[420px]\`).'
      }
    }
  },
  args: {
    layoutMode: "fixed",
    open: false,
    title: "Confirm action",
    subtitle: "",
    description: "This uses the fixed width preset. Adjust with panelClassName if needed.",
    primaryButton: {
      label: "Confirm",
      onClick: () => alert("Confirmed")
    },
    secondaryButton: {
      label: "Cancel",
      onClick: () => alert("Cancelled")
    },
    panelClassName: "",
    children: null
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    },
    layoutMode: {
      control: {
        type: "inline-radio"
      },
      options: ModalLayoutModes
    },
    panelClassName: {
      control: "text",
      description: "Optional override, e.g. max-w-[420px]"
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
        <Button onClick={() => setOpen(true)} label="Open confirm modal" />
        <DialogModal {...args} open={open} onClose={() => setOpen(false)} subtitle={args.subtitle ?? ""} children={null} />
      </>;
  }
}`,...(v=(O=d.parameters)==null?void 0:O.docs)==null?void 0:v.source}}};var j,D,w;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(w=(D=p.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};const _=["HeaderComponent","BodyComponent","FooterComponent","Modal","ModalFixedWidthConfirm","Sheet"];export{s as BodyComponent,l as FooterComponent,r as HeaderComponent,i as Modal,d as ModalFixedWidthConfirm,p as Sheet,_ as __namedExportsOrder,R as default};
