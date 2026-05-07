import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Ki as n,cn as r,ir as i,ln as a,nr as o,rr as s,sa as c,si as l,sn as u,t as d}from"./iframe-Bg00cy7E.js";var f,p,m,h,g,_,v,y,b,x;e((()=>{d(),f=t(c(),1),p=n(),m={title:`Components/Dialog`,tags:[`autodocs`],args:{title:`Dialog Title`,subtitle:`Subtitle or Description`,primaryButton:{label:`Button`,onClick:()=>alert(`Primary action clicked`)},secondaryButton:{label:`Button`,onClick:()=>alert(`Secondary action clicked`)},onClose:()=>alert(`Dialog closed`),description:`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.`,children:(0,p.jsx)(`div`,{className:`border-border-brand p-lg rounded-md border-[1px] border-dashed`,children:(0,p.jsx)(`span`,{className:`text-text-brand typography-body-small`,children:`Children`})})},parameters:{docs:{description:{component:`Overlay surface (Modal or Sheet) for focused tasks that interrupt the main flow. Compose with DialogHeader, DialogBody and DialogFooter.`}}}},h={name:`DialogHeader`,render:e=>(0,p.jsx)(i,{title:e.title,subtitle:e.subtitle})},g={name:`DialogBody`,render:e=>(0,p.jsx)(o,{description:e.description,children:e.children})},_={name:`DialogFooter`,render:e=>(0,p.jsx)(s,{primaryButton:e.primaryButton,secondaryButton:e.secondaryButton})},v={args:{layoutMode:`responsive`,open:!1},argTypes:{layoutMode:{control:{type:`inline-radio`},options:a},open:{control:{type:`boolean`}}},render:e=>{let[t,n]=(0,f.useState)(e.open||!1);return(0,f.useEffect)(()=>{n(e.open||!1)},[e.open]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(l,{onClick:()=>n(!0),label:`Open Modal`}),(0,p.jsx)(r,{...e,open:t,onClose:()=>n(!1),children:e.children})]})}},y={name:`Modal fixed width`,parameters:{docs:{description:{story:'Use `layoutMode="fixed"` for a compact dialog (fit-content height). Override width with `panelClassName` (e.g. `max-w-[420px]`).'}}},args:{layoutMode:`fixed`,open:!1,title:`Confirm action`,subtitle:``,description:`This uses the fixed width preset. Adjust with panelClassName if needed.`,primaryButton:{label:`Confirm`,onClick:()=>alert(`Confirmed`)},secondaryButton:{label:`Cancel`,onClick:()=>alert(`Cancelled`)},panelClassName:``,children:null},argTypes:{children:{table:{disable:!0}},layoutMode:{control:{type:`inline-radio`},options:a},panelClassName:{control:`text`,description:`Optional override, e.g. max-w-[420px]`},open:{control:{type:`boolean`}}},render:e=>{let[t,n]=(0,f.useState)(e.open||!1);return(0,f.useEffect)(()=>{n(e.open||!1)},[e.open]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(l,{onClick:()=>n(!0),label:`Open confirm modal`}),(0,p.jsx)(r,{...e,open:t,onClose:()=>n(!1),subtitle:e.subtitle??``,children:null})]})}},b={args:{open:!1,withGrabHandler:!0,stepless:!0},argTypes:{open:{control:{type:`boolean`}},withGrabHandler:{control:{type:`boolean`}},stepless:{control:{type:`boolean`}}},render:e=>{let[t,n]=(0,f.useState)(e.open||!1);return(0,f.useEffect)(()=>{n(e.open||!1)},[e.open]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(l,{onClick:()=>n(!0),label:`Open Sheet`}),(0,p.jsx)(u,{...e,open:t,onClose:()=>n(!1),children:e.children})]})}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "DialogHeader",
  render: (args: any) => {
    return <DialogHeader title={args.title} subtitle={args.subtitle} />;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "DialogBody",
  render: (args: any) => {
    return <DialogBody description={args.description}>{args.children}</DialogBody>;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: "DialogFooter",
  render: (args: any) => {
    return <DialogFooter primaryButton={args.primaryButton} secondaryButton={args.secondaryButton} />;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x=[`HeaderComponent`,`BodyComponent`,`FooterComponent`,`Modal`,`ModalFixedWidthConfirm`,`Sheet`]}))();export{g as BodyComponent,_ as FooterComponent,h as HeaderComponent,v as Modal,y as ModalFixedWidthConfirm,b as Sheet,x as __namedExportsOrder,m as default};