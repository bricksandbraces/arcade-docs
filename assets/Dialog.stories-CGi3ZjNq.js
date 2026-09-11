import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{$o as n,Gi as r,Hi as i,Ui as a,Wi as o,Yt as s,an as c,mo as l,ms as u,on as d,pi as f,t as p}from"./iframe-D2ij2t5m.js";import{n as m,t as h}from"./figmaDesign-CO6i5n9C.js";var g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N;e((()=>{p(),g=t(u(),1),m(),_=n(),{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,b={title:`Overlays & Menus/Dialog`,tags:[`autodocs`],args:{title:`Dialog Title`,subtitle:`Subtitle or Description`,primaryButton:{label:`Button`,onClick:()=>alert(`Primary action clicked`)},secondaryButton:{label:`Button`,onClick:()=>alert(`Secondary action clicked`)},onClose:()=>alert(`Dialog closed`),description:`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.`,children:(0,_.jsx)(`div`,{className:`border-border-brand p-lg rounded-md border-[1px] border-dashed`,children:(0,_.jsx)(`span`,{className:`text-text-brand typography-body-small`,children:`Children`})})},parameters:{design:h(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=2414-9433`),docs:{description:{component:`Overlay surface (Modal or Sheet) for focused tasks that interrupt the main flow. Compose with DialogHeader, DialogBody and DialogFooter.`}}}},x={config:{rules:[{id:`aria-hidden-focus`,enabled:!1}]}},S=e=>async({args:t,canvas:n,canvasElement:r,userEvent:i})=>{await i.click(n.getByRole(`button`,{name:e})),await v(await y(r.ownerDocument.body).findByRole(`dialog`,{name:t.title})).toHaveAccessibleDescription(t.subtitle)},C={name:`DialogHeader`,render:e=>(0,_.jsx)(r,{title:e.title,subtitle:e.subtitle})},w={name:`DialogHeader small`,parameters:{docs:{description:{story:`The compact header of a split view section, with and without a subtitle, and with the close button waiting on a save.`}}},render:()=>(0,_.jsxs)(`div`,{className:`gap-lg flex flex-col`,children:[(0,_.jsx)(r,{size:`small`,title:`Account`,subtitle:``}),(0,_.jsx)(r,{size:`small`,title:`Account`,subtitle:`Subtitle or Description`}),(0,_.jsx)(r,{size:`small`,title:`Account`,subtitle:``,closeButton:{onClose:()=>{},ariaLabel:`Close dialog`,loading:!0}})]})},T={name:`DialogBody`,render:e=>(0,_.jsx)(i,{description:e.description,children:e.children})},E={name:`DialogFooter`,render:e=>(0,_.jsx)(a,{primaryButton:e.primaryButton,secondaryButton:e.secondaryButton})},D={name:`DialogFooter with slot`,render:e=>(0,_.jsx)(a,{leadingSlot:(0,_.jsx)(f,{id:`dialog-footer-slot`,label:`Don't ask again`,hideLabel:!0,description:`Don't ask again`}),primaryButton:e.primaryButton,secondaryButton:e.secondaryButton})},O={parameters:{a11y:x},args:{layoutMode:`responsive`,open:!1},argTypes:{layoutMode:{control:{type:`inline-radio`},options:d},open:{control:{type:`boolean`}}},render:e=>{let[t,n]=(0,g.useState)(e.open||!1);return(0,g.useEffect)(()=>{n(e.open||!1)},[e.open]),(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(l,{onClick:()=>n(!0),label:`Open Modal`}),(0,_.jsx)(c,{...e,open:t,onClose:()=>n(!1),children:e.children})]})},play:S(`Open Modal`)},k={name:`Modal fixed width`,parameters:{docs:{description:{story:'Use `layoutMode="fixed"` for a compact dialog (fit-content height). Override width with `panelClassName` (e.g. `max-w-[420px]`).'}}},args:{layoutMode:`fixed`,open:!1,title:`Confirm action`,subtitle:``,description:`This uses the fixed width preset. Adjust with panelClassName if needed.`,primaryButton:{label:`Confirm`,onClick:()=>alert(`Confirmed`)},secondaryButton:{label:`Cancel`,onClick:()=>alert(`Cancelled`)},panelClassName:``,children:null},argTypes:{children:{table:{disable:!0}},layoutMode:{control:{type:`inline-radio`},options:d},panelClassName:{control:`text`,description:`Optional override, e.g. max-w-[420px]`},open:{control:{type:`boolean`}}},render:e=>{let[t,n]=(0,g.useState)(e.open||!1);return(0,g.useEffect)(()=>{n(e.open||!1)},[e.open]),(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(l,{onClick:()=>n(!0),label:`Open confirm modal`}),(0,_.jsx)(c,{...e,open:t,onClose:()=>n(!1),subtitle:e.subtitle??``,children:null})]})}},A={name:`Modal centred footer`,parameters:{docs:{description:{story:'Use `footerAlign="center"` for an explainer dialog with a single confirm: the button sits centred and takes the wider 40px padding.'}}},args:{layoutMode:`fixed`,open:!1,title:`What is an organization?`,subtitle:``,description:`An organization is the top level of your account. Your team, data and settings all live here, in one place.`,footerAlign:`center`,primaryButton:{label:`Okay`,onClick:()=>alert(`Okay`)},panelClassName:`md:max-w-[480px]!`,children:null},argTypes:{children:{table:{disable:!0}},footerAlign:{control:{type:`inline-radio`},options:o},open:{control:{type:`boolean`}}},render:e=>{let[t,n]=(0,g.useState)(e.open||!1);return(0,g.useEffect)(()=>{n(e.open||!1)},[e.open]),(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(l,{onClick:()=>n(!0),label:`Open explainer`}),(0,_.jsx)(c,{...e,open:t,onClose:()=>n(!1),subtitle:e.subtitle??``,children:null})]})}},j={parameters:{a11y:x},args:{open:!1,withGrabHandler:!0,stepless:!0},argTypes:{open:{control:{type:`boolean`}},withGrabHandler:{control:{type:`boolean`}},stepless:{control:{type:`boolean`}}},render:e=>{let[t,n]=(0,g.useState)(e.open||!1);return(0,g.useEffect)(()=>{n(e.open||!1)},[e.open]),(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(l,{onClick:()=>n(!0),label:`Open Sheet`}),(0,_.jsx)(s,{...e,open:t,onClose:()=>n(!1),children:e.children})]})},play:S(`Open Sheet`)},M=O,C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: "DialogHeader",
  render: (args: any) => {
    return <DialogHeader title={args.title} subtitle={args.subtitle} />;
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: "DialogHeader small",
  parameters: {
    docs: {
      description: {
        story: "The compact header of a split view section, with and without a subtitle, and with the close button waiting on a save."
      }
    }
  },
  render: () => <div className="gap-lg flex flex-col">
      <DialogHeader size="small" title="Account" subtitle="" />
      <DialogHeader size="small" title="Account" subtitle="Subtitle or Description" />
      <DialogHeader size="small" title="Account" subtitle="" closeButton={{
      onClose: () => {},
      ariaLabel: "Close dialog",
      loading: true
    }} />
    </div>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: "DialogBody",
  render: (args: any) => {
    return <DialogBody description={args.description}>{args.children}</DialogBody>;
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: "DialogFooter",
  render: (args: any) => {
    return <DialogFooter primaryButton={args.primaryButton} secondaryButton={args.secondaryButton} />;
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: "DialogFooter with slot",
  render: (args: any) => <DialogFooter leadingSlot={<Checkbox id="dialog-footer-slot" label="Don't ask again" hideLabel description="Don't ask again" />} primaryButton={args.primaryButton} secondaryButton={args.secondaryButton} />
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  parameters: {
    a11y: openDialogA11y
  },
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
  },
  play: expectDialogNamedByTitle("Open Modal")
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  parameters: {
    a11y: openDialogA11y
  },
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
  },
  play: expectDialogNamedByTitle("Open Sheet")
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`Modal`,...M.parameters?.docs?.source}}},N=[`HeaderComponent`,`HeaderSmall`,`BodyComponent`,`FooterComponent`,`FooterWithSlot`,`Modal`,`ModalFixedWidthConfirm`,`ModalCenteredFooter`,`Sheet`,`Playground`]}))();export{T as BodyComponent,E as FooterComponent,D as FooterWithSlot,C as HeaderComponent,w as HeaderSmall,O as Modal,A as ModalCenteredFooter,k as ModalFixedWidthConfirm,M as Playground,j as Sheet,N as __namedExportsOrder,b as default};