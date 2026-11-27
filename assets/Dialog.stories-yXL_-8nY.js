import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Ga as n,Ja as r,Ka as i,Vc as a,Ya as o,Zn as s,da as c,nc as l,nl as u,qa as d,t as f,vn as p,yn as m}from"./iframe-aH2b30P3.js";import{n as h,t as g}from"./figmaDesign-D2IpkIki.js";var _,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z;e((()=>{f(),_=t(u(),1),h(),v=a(),{expect:y,fireEvent:b,waitFor:x,within:S}=__STORYBOOK_MODULE_TEST__,C={title:`Components/Dialog`,tags:[`autodocs`],args:{title:`Dialog Title`,subtitle:`Subtitle or Description`,primaryButton:{label:`Button`,onClick:()=>alert(`Primary action clicked`)},secondaryButton:{label:`Button`,onClick:()=>alert(`Secondary action clicked`)},onClose:()=>alert(`Dialog closed`),description:`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.`,children:(0,v.jsx)(`div`,{className:`border-border-brand p-lg rounded-md border-[1px] border-dashed`,children:(0,v.jsx)(`span`,{className:`text-text-brand typography-body-small`,children:`Children`})})},parameters:{design:g(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=2414-9433`),docs:{description:{component:`Overlay surface (Modal or Sheet) for focused tasks that interrupt the main flow. Compose with DialogHeader, DialogBody and DialogFooter.`}}}},w={config:{rules:[{id:`aria-hidden-focus`,enabled:!1}]}},T=e=>async({args:t,canvas:n,canvasElement:r,userEvent:i})=>{await i.click(n.getByRole(`button`,{name:e})),await y(await S(r.ownerDocument.body).findByRole(`dialog`,{name:t.title})).toHaveAccessibleDescription(t.subtitle)},E={name:`DialogHeader`,render:e=>(0,v.jsx)(o,{title:e.title,subtitle:e.subtitle})},D={name:`DialogHeader with back button`,parameters:{design:g(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=6134-2630`),docs:{description:{story:`The header of a later step in a multi-step dialog: a back button in front of the title, in both sizes.`}}},render:e=>(0,v.jsxs)(`div`,{className:`gap-lg flex flex-col`,children:[(0,v.jsx)(o,{title:e.title,subtitle:e.subtitle,backButton:{onBack:()=>{}},closeButton:{onClose:()=>{},ariaLabel:`Close dialog`}}),(0,v.jsx)(o,{size:`small`,title:`Account`,subtitle:`Subtitle or Description`,backButton:{onBack:()=>{}}})]})},O={name:`DialogHeader small`,parameters:{docs:{description:{story:`The compact header of a split view section, with and without a subtitle, and with the close button waiting on a save.`}}},render:()=>(0,v.jsxs)(`div`,{className:`gap-lg flex flex-col`,children:[(0,v.jsx)(o,{size:`small`,title:`Account`,subtitle:``}),(0,v.jsx)(o,{size:`small`,title:`Account`,subtitle:`Subtitle or Description`}),(0,v.jsx)(o,{size:`small`,title:`Account`,subtitle:``,closeButton:{onClose:()=>{},ariaLabel:`Close dialog`,loading:!0}})]})},k={name:`DialogBody`,render:e=>(0,v.jsx)(n,{description:e.description,children:e.children})},A={name:`DialogFooter`,render:e=>(0,v.jsx)(i,{primaryButton:e.primaryButton,secondaryButton:e.secondaryButton})},j={name:`DialogFooter with slot`,render:e=>(0,v.jsx)(i,{leadingSlot:(0,v.jsx)(c,{id:`dialog-footer-slot`,label:`Don't ask again`,hideLabel:!0,description:`Don't ask again`}),primaryButton:e.primaryButton,secondaryButton:e.secondaryButton})},M={parameters:{a11y:w},args:{layoutMode:`responsive`,open:!1},argTypes:{layoutMode:{control:{type:`inline-radio`},options:m},open:{control:{type:`boolean`}}},render:e=>{let[t,n]=(0,_.useState)(e.open||!1);return(0,_.useEffect)(()=>{n(e.open||!1)},[e.open]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(l,{onClick:()=>n(!0),label:`Open Modal`}),(0,v.jsx)(p,{...e,open:t,onClose:()=>n(!1),children:e.children})]})},play:T(`Open Modal`)},N={name:`Modal fixed width`,parameters:{docs:{description:{story:'Use `layoutMode="fixed"` for a compact dialog (fit-content height). Override width with `panelClassName` (e.g. `max-w-[420px]`).'}}},args:{layoutMode:`fixed`,open:!1,title:`Confirm action`,subtitle:``,description:`This uses the fixed width preset. Adjust with panelClassName if needed.`,primaryButton:{label:`Confirm`,onClick:()=>alert(`Confirmed`)},secondaryButton:{label:`Cancel`,onClick:()=>alert(`Cancelled`)},panelClassName:``,children:null},argTypes:{children:{table:{disable:!0}},layoutMode:{control:{type:`inline-radio`},options:m},panelClassName:{control:`text`,description:`Optional override, e.g. max-w-[420px]`},open:{control:{type:`boolean`}}},render:e=>{let[t,n]=(0,_.useState)(e.open||!1);return(0,_.useEffect)(()=>{n(e.open||!1)},[e.open]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(l,{onClick:()=>n(!0),label:`Open confirm modal`}),(0,v.jsx)(p,{...e,open:t,onClose:()=>n(!1),subtitle:e.subtitle??``,children:null})]})}},P={name:`Modal centred footer`,parameters:{docs:{description:{story:'Use `footerAlign="center"` for an explainer dialog with a single confirm: the button sits centred.'}}},args:{layoutMode:`fixed`,open:!1,title:`What is an organization?`,subtitle:``,description:`An organization is the top level of your account. Your team, data and settings all live here, in one place.`,footerAlign:`center`,primaryButton:{label:`Okay`,onClick:()=>alert(`Okay`)},panelClassName:`md:max-w-[480px]!`,children:null},argTypes:{children:{table:{disable:!0}},footerAlign:{control:{type:`inline-radio`},options:d},open:{control:{type:`boolean`}}},render:e=>{let[t,n]=(0,_.useState)(e.open||!1);return(0,_.useEffect)(()=>{n(e.open||!1)},[e.open]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(l,{onClick:()=>n(!0),label:`Open explainer`}),(0,v.jsx)(p,{...e,open:t,onClose:()=>n(!1),subtitle:e.subtitle??``,children:null})]})}},F={name:`Modal step with back button`,parameters:{a11y:w,design:g(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=6134-2630`),docs:{description:{story:"A later step of a multi-step dialog: `backButton` puts the back arrow in front of the title. Footer buttons follow the viewport by default; `buttonSize` pins one size."}}},args:{layoutMode:`fixed`,open:!1,title:`Pay 15,00 €`,subtitle:`Sophie Becker`,description:``,backButton:{onBack:()=>alert(`Back`)},primaryButton:{label:`Charge now`,onClick:()=>alert(`Charged`)},secondaryButton:{label:`Cancel`,onClick:()=>alert(`Cancelled`)},panelClassName:`md:max-w-[480px]!`,children:null},argTypes:{children:{table:{disable:!0}},buttonSize:{control:{type:`inline-radio`},options:r},open:{control:{type:`boolean`}}},render:e=>{let[t,n]=(0,_.useState)(e.open||!1);return(0,_.useEffect)(()=>{n(e.open||!1)},[e.open]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(l,{onClick:()=>n(!0),label:`Open step`}),(0,v.jsx)(p,{...e,open:t,onClose:()=>n(!1),subtitle:e.subtitle??``,children:null})]})},play:async({canvas:e,canvasElement:t,userEvent:n})=>{await n.click(e.getByRole(`button`,{name:`Open step`})),await y(S(await S(t.ownerDocument.body).findByRole(`dialog`)).getByRole(`button`,{name:/back/i})).toBeInTheDocument()}},I={parameters:{a11y:w},args:{open:!1,withGrabHandler:!0,stepless:!0},argTypes:{open:{control:{type:`boolean`}},withGrabHandler:{control:{type:`boolean`}},stepless:{control:{type:`boolean`}}},render:e=>{let[t,n]=(0,_.useState)(e.open||!1);return(0,_.useEffect)(()=>{n(e.open||!1)},[e.open]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(l,{onClick:()=>n(!0),label:`Open Sheet`}),(0,v.jsx)(s,{...e,open:t,onClose:()=>n(!1),children:e.children})]})},play:T(`Open Sheet`)},L=M,R={...M,name:`Modal keeps open after a drag onto the backdrop`,play:async({canvas:e,canvasElement:t,userEvent:n})=>{await n.click(e.getByRole(`button`,{name:`Open Modal`}));let r=S(t.ownerDocument.body),i=await r.findByRole(`dialog`,{name:`Dialog Title`}),a=i.parentElement;await b.pointerDown(S(i).getByText(`Children`)),await b.click(a),await y(i).toBeInTheDocument(),await b.pointerDown(a),await b.click(a),await x(()=>y(r.queryByRole(`dialog`,{name:`Dialog Title`})).not.toBeInTheDocument())}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: "DialogHeader",
  render: (args: any) => {
    return <DialogHeader title={args.title} subtitle={args.subtitle} />;
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: "DialogHeader with back button",
  parameters: {
    design: figmaDesign("https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=6134-2630"),
    docs: {
      description: {
        story: "The header of a later step in a multi-step dialog: a back button in front of the title, in both sizes."
      }
    }
  },
  render: (args: any) => <div className="gap-lg flex flex-col">
      <DialogHeader title={args.title} subtitle={args.subtitle} backButton={{
      onBack: () => {}
    }} closeButton={{
      onClose: () => {},
      ariaLabel: "Close dialog"
    }} />
      <DialogHeader size="small" title="Account" subtitle="Subtitle or Description" backButton={{
      onBack: () => {}
    }} />
    </div>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: "DialogBody",
  render: (args: any) => {
    return <DialogBody description={args.description}>{args.children}</DialogBody>;
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: "DialogFooter",
  render: (args: any) => {
    return <DialogFooter primaryButton={args.primaryButton} secondaryButton={args.secondaryButton} />;
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: "DialogFooter with slot",
  render: (args: any) => <DialogFooter leadingSlot={<Checkbox id="dialog-footer-slot" label="Don't ask again" hideLabel description="Don't ask again" />} primaryButton={args.primaryButton} secondaryButton={args.secondaryButton} />
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: "Modal centred footer",
  parameters: {
    docs: {
      description: {
        story: 'Use \`footerAlign="center"\` for an explainer dialog with a single confirm: the button sits centred.'
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: "Modal step with back button",
  parameters: {
    a11y: openDialogA11y,
    design: figmaDesign("https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=6134-2630"),
    docs: {
      description: {
        story: "A later step of a multi-step dialog: \`backButton\` puts the back arrow in front of the title. Footer buttons follow the viewport by default; \`buttonSize\` pins one size."
      }
    }
  },
  args: {
    layoutMode: "fixed",
    open: false,
    title: "Pay 15,00 €",
    subtitle: "Sophie Becker",
    description: "",
    backButton: {
      onBack: () => alert("Back")
    },
    primaryButton: {
      label: "Charge now",
      onClick: () => alert("Charged")
    },
    secondaryButton: {
      label: "Cancel",
      onClick: () => alert("Cancelled")
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
    buttonSize: {
      control: {
        type: "inline-radio"
      },
      options: DialogFooterButtonSizes
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
        <Button onClick={() => setOpen(true)} label="Open step" />
        <DialogModal {...args} open={open} onClose={() => setOpen(false)} subtitle={args.subtitle ?? ""} children={null} />
      </>;
  },
  play: async ({
    canvas,
    canvasElement,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole("button", {
      name: "Open step"
    }));
    const dialog = await within(canvasElement.ownerDocument.body).findByRole("dialog");
    await expect(within(dialog).getByRole("button", {
      name: /back/i
    })).toBeInTheDocument();
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`Modal`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  ...Modal,
  name: "Modal keeps open after a drag onto the backdrop",
  play: async ({
    canvas,
    canvasElement,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole("button", {
      name: "Open Modal"
    }));
    const body = within(canvasElement.ownerDocument.body);
    const dialog = await body.findByRole("dialog", {
      name: "Dialog Title"
    });
    const backdrop = dialog.parentElement!;
    await fireEvent.pointerDown(within(dialog).getByText("Children"));
    await fireEvent.click(backdrop);
    await expect(dialog).toBeInTheDocument();
    await fireEvent.pointerDown(backdrop);
    await fireEvent.click(backdrop);
    // The exit animation keeps the panel around for a moment.
    await waitFor(() => expect(body.queryByRole("dialog", {
      name: "Dialog Title"
    })).not.toBeInTheDocument());
  }
}`,...R.parameters?.docs?.source},description:{story:`A drag that starts inside the panel - a slider knob, a text selection - and
is released over the backdrop fires the click on the backdrop; the dialog
has to stay. A press that starts on the backdrop still closes it.`,...R.parameters?.docs?.description}}},z=[`HeaderComponent`,`HeaderWithBack`,`HeaderSmall`,`BodyComponent`,`FooterComponent`,`FooterWithSlot`,`Modal`,`ModalFixedWidthConfirm`,`ModalCenteredFooter`,`ModalStep`,`Sheet`,`Playground`,`ModalDragReleasedOnBackdrop`]}))();export{k as BodyComponent,A as FooterComponent,j as FooterWithSlot,E as HeaderComponent,O as HeaderSmall,D as HeaderWithBack,M as Modal,P as ModalCenteredFooter,R as ModalDragReleasedOnBackdrop,N as ModalFixedWidthConfirm,F as ModalStep,L as Playground,I as Sheet,z as __namedExportsOrder,C as default};