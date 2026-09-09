import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Ci as n,Eo as r,Si as i,Va as a,Vo as o,bi as s,in as c,rn as l,t as u,tn as d,xi as f}from"./iframe-Cy6jdjZ5.js";var p,m,h,g,_,v,y,b,x,S,C,w;e((()=>{u(),p=t(o(),1),m=r(),h={title:`Overlays & Menus/Dialog`,tags:[`autodocs`],args:{title:`Dialog Title`,subtitle:`Subtitle or Description`,primaryButton:{label:`Button`,onClick:()=>alert(`Primary action clicked`)},secondaryButton:{label:`Button`,onClick:()=>alert(`Secondary action clicked`)},onClose:()=>alert(`Dialog closed`),description:`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.`,children:(0,m.jsx)(`div`,{className:`border-border-brand p-lg rounded-md border-[1px] border-dashed`,children:(0,m.jsx)(`span`,{className:`text-text-brand typography-body-small`,children:`Children`})})},parameters:{docs:{description:{component:`Overlay surface (Modal or Sheet) for focused tasks that interrupt the main flow. Compose with DialogHeader, DialogBody and DialogFooter.`}}}},g={name:`DialogHeader`,render:e=>(0,m.jsx)(n,{title:e.title,subtitle:e.subtitle})},_={name:`DialogBody`,render:e=>(0,m.jsx)(s,{description:e.description,children:e.children})},v={name:`DialogFooter`,render:e=>(0,m.jsx)(f,{primaryButton:e.primaryButton,secondaryButton:e.secondaryButton})},y={args:{layoutMode:`responsive`,open:!1},argTypes:{layoutMode:{control:{type:`inline-radio`},options:c},open:{control:{type:`boolean`}}},render:e=>{let[t,n]=(0,p.useState)(e.open||!1);return(0,p.useEffect)(()=>{n(e.open||!1)},[e.open]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(a,{onClick:()=>n(!0),label:`Open Modal`}),(0,m.jsx)(l,{...e,open:t,onClose:()=>n(!1),children:e.children})]})}},b={name:`Modal fixed width`,parameters:{docs:{description:{story:'Use `layoutMode="fixed"` for a compact dialog (fit-content height). Override width with `panelClassName` (e.g. `max-w-[420px]`).'}}},args:{layoutMode:`fixed`,open:!1,title:`Confirm action`,subtitle:``,description:`This uses the fixed width preset. Adjust with panelClassName if needed.`,primaryButton:{label:`Confirm`,onClick:()=>alert(`Confirmed`)},secondaryButton:{label:`Cancel`,onClick:()=>alert(`Cancelled`)},panelClassName:``,children:null},argTypes:{children:{table:{disable:!0}},layoutMode:{control:{type:`inline-radio`},options:c},panelClassName:{control:`text`,description:`Optional override, e.g. max-w-[420px]`},open:{control:{type:`boolean`}}},render:e=>{let[t,n]=(0,p.useState)(e.open||!1);return(0,p.useEffect)(()=>{n(e.open||!1)},[e.open]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(a,{onClick:()=>n(!0),label:`Open confirm modal`}),(0,m.jsx)(l,{...e,open:t,onClose:()=>n(!1),subtitle:e.subtitle??``,children:null})]})}},x={name:`Modal centred footer`,parameters:{docs:{description:{story:'Use `footerAlign="center"` for an explainer dialog with a single confirm: the button sits centred and takes the wider 40px padding.'}}},args:{layoutMode:`fixed`,open:!1,title:`What is an organization?`,subtitle:``,description:`An organization is the top level of your account. Your team, data and settings all live here, in one place.`,footerAlign:`center`,primaryButton:{label:`Okay`,onClick:()=>alert(`Okay`)},panelClassName:`md:max-w-[480px]!`,children:null},argTypes:{children:{table:{disable:!0}},footerAlign:{control:{type:`inline-radio`},options:i},open:{control:{type:`boolean`}}},render:e=>{let[t,n]=(0,p.useState)(e.open||!1);return(0,p.useEffect)(()=>{n(e.open||!1)},[e.open]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(a,{onClick:()=>n(!0),label:`Open explainer`}),(0,m.jsx)(l,{...e,open:t,onClose:()=>n(!1),subtitle:e.subtitle??``,children:null})]})}},S={args:{open:!1,withGrabHandler:!0,stepless:!0},argTypes:{open:{control:{type:`boolean`}},withGrabHandler:{control:{type:`boolean`}},stepless:{control:{type:`boolean`}}},render:e=>{let[t,n]=(0,p.useState)(e.open||!1);return(0,p.useEffect)(()=>{n(e.open||!1)},[e.open]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(a,{onClick:()=>n(!0),label:`Open Sheet`}),(0,m.jsx)(d,{...e,open:t,onClose:()=>n(!1),children:e.children})]})}},C=y,g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "DialogHeader",
  render: (args: any) => {
    return <DialogHeader title={args.title} subtitle={args.subtitle} />;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: "DialogBody",
  render: (args: any) => {
    return <DialogBody description={args.description}>{args.children}</DialogBody>;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "DialogFooter",
  render: (args: any) => {
    return <DialogFooter primaryButton={args.primaryButton} secondaryButton={args.secondaryButton} />;
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "Modal centred footer",
  parameters: {
    docs: {
      description: {
        story: 'Use \`footerAlign="center"\` for an explainer dialog with a single confirm: the button sits centred and takes the wider 40px padding.'
      }
    }
  },
  args: {
    layoutMode: "fixed",
    open: false,
    title: "What is an organization?",
    subtitle: "",
    description: "An organization is the top level of your account. Your team, data and settings all live here, in one place.",
    footerAlign: "center",
    primaryButton: {
      label: "Okay",
      onClick: () => alert("Okay")
    },
    panelClassName: "md:max-w-[480px]!",
    children: null
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    },
    footerAlign: {
      control: {
        type: "inline-radio"
      },
      options: DialogFooterAlignments
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
        <Button onClick={() => setOpen(true)} label="Open explainer" />
        <DialogModal {...args} open={open} onClose={() => setOpen(false)} subtitle={args.subtitle ?? ""} children={null} />
      </>;
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`Modal`,...C.parameters?.docs?.source}}},w=[`HeaderComponent`,`BodyComponent`,`FooterComponent`,`Modal`,`ModalFixedWidthConfirm`,`ModalCenteredFooter`,`Sheet`,`Playground`]}))();export{_ as BodyComponent,v as FooterComponent,g as HeaderComponent,y as Modal,x as ModalCenteredFooter,b as ModalFixedWidthConfirm,C as Playground,S as Sheet,w as __namedExportsOrder,h as default};