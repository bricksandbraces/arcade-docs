import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Aa as n,Ca as r,Ei as i,Fo as a,Fs as o,Kt as s,Ta as c,Xt as l,bs as u,i as d,ua as f,vo as p}from"./iframe-DxZG8z-m.js";var m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N;e((()=>{d(),f(),m=t(o(),1),h=u(),{expect:g,waitFor:_,within:v}=__STORYBOOK_MODULE_TEST__,y=[{value:`general`,label:`General`,icon:c},{value:`organization`,label:`Organization`,icon:p},{value:`access`,label:`Access`,icon:r},{value:`branding`,label:`Branding`,icon:n}],b={general:`Account`,organization:`Organization`,access:`Access`,branding:`Branding`},x={component:l,title:`Overlays & Menus/SplitViewModal`,tags:[`autodocs`],args:{open:!1,title:`Settings`,items:y,defaultValue:`general`,searchable:!0},argTypes:{open:{control:{type:`boolean`}},loading:{control:{type:`boolean`}},busy:{control:{type:`boolean`}},searchable:{control:{type:`boolean`}},value:{control:{type:`select`},options:y.map(e=>e.value)}},parameters:{docs:{description:{component:"A dialog whose content is split into sections: a searchable sidebar lists them from `md` up, a tab strip below. The consumer renders the content of the current section as children and moves between sections through `value` / `onValueChange`. Set `loading` while a change saves: the close button gives way to a spinner until it is cleared. Set `busy` while the content is still being fetched: the whole dialog sits behind a centred loader."}}}},S=e=>{let[t,n]=(0,m.useState)(e.open),[r,i]=(0,m.useState)(e.value??e.defaultValue??``);return(0,m.useEffect)(()=>{n(e.open)},[e.open]),(0,m.useEffect)(()=>{e.value!==void 0&&i(e.value)},[e.value]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(a,{label:`Open settings`,onClick:()=>n(!0)}),(0,h.jsx)(l,{...e,open:t,onClose:()=>n(!1),value:r,onValueChange:e=>i(e),sectionTitle:b[r]??r,children:(0,h.jsxs)(`div`,{className:`gap-lg flex flex-col`,children:[(0,h.jsx)(s,{id:`${r}-name`,label:`Name`,placeholder:`Name`}),(0,h.jsx)(s,{id:`${r}-email`,label:`Email`,placeholder:`Email`})]})})]})},C={render:e=>(0,h.jsx)(S,{...e})},w={parameters:{a11y:{test:`todo`}},args:{open:!0},render:e=>(0,h.jsx)(S,{...e})},T={parameters:{a11y:{test:`todo`}},args:{open:!0,sectionSubtitle:`Subtitle or Description`},render:e=>(0,h.jsx)(S,{...e})},E={parameters:{a11y:{test:`todo`}},args:{open:!0,primaryButton:{label:`Save`,onClick:()=>{}},secondaryButton:{label:`Cancel`,onClick:()=>{}}},render:e=>(0,h.jsx)(S,{...e})},D={parameters:{a11y:{test:`todo`},docs:{description:{story:"`leadingSlot` fills the footer's leading side - left of the buttons from `md` up, above them below."}}},args:{open:!0,leadingSlot:(0,h.jsx)(i,{id:`split-view-apply-all`,label:`Apply to all studios`,hideLabel:!0,description:`Apply to all studios`}),primaryButton:{label:`Save`,onClick:()=>{}},secondaryButton:{label:`Cancel`,onClick:()=>{}}},render:e=>(0,h.jsx)(S,{...e})},O={parameters:{a11y:{test:`todo`}},args:{open:!0,loading:!0},render:e=>(0,h.jsx)(S,{...e})},k={parameters:{a11y:{test:`todo`}},args:{open:!0,busy:!0},render:e=>(0,h.jsx)(S,{...e}),play:async({canvasElement:e,userEvent:t})=>{let n=e.ownerDocument,r=await v(n.body).findByRole(`dialog`,{name:`Settings`});await _(()=>g(r.getAttribute(`aria-busy`)).toBe(`true`));for(let e=0;e<5;e+=1){await t.tab();let e=n.activeElement;await g(e?.closest(`[inert]`)??null).toBeNull(),await g(e?.matches(`input, button, a, [role='button'], [role='tab']`)).toBe(!1)}}},A=e=>(0,h.jsx)(l,{...e,onClose:()=>{},sectionTitle:b.general,children:(0,h.jsx)(`div`,{className:`gap-lg flex flex-col`,children:Array.from({length:12},(e,t)=>(0,h.jsx)(s,{id:`long-form-field-${t}`,label:`Field ${t+1}`,placeholder:`Field ${t+1}`},t))})}),j={parameters:{a11y:{test:`todo`},docs:{description:{story:`A field focused while partly under the sticky header or footer scrolls clear of it, so its focus ring is never cut off.`}}},args:{open:!0,primaryButton:{label:`Save`,onClick:()=>{}},secondaryButton:{label:`Cancel`,onClick:()=>{}}},render:e=>(0,h.jsx)(A,{...e}),play:async({canvasElement:e,userEvent:t})=>{let n=e.ownerDocument,[r]=await v(await v(n.body).findByRole(`dialog`,{name:`Settings`})).findAllByRole(`textbox`),i=r.closest(`.dialog-content`)?.parentElement;i&&(i.scrollTop=14),await t.click(r)}},M={parameters:{a11y:{test:`todo`},viewport:{defaultViewport:`mobile1`}},args:{open:!0},render:e=>(0,h.jsx)(S,{...e})},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => <Playground {...args} />
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  // Starts open, so axe sees floating-ui's focus guards and the aria-hidden
  // page behind the dialog (aria-hidden-focus) - a known finding of the modal
  // focus manager, not of this component. Downgraded like SidePanel does.
  parameters: {
    a11y: {
      test: "todo"
    }
  },
  args: {
    open: true
  },
  render: args => <Playground {...args} />
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  parameters: {
    a11y: {
      test: "todo"
    }
  },
  args: {
    open: true,
    sectionSubtitle: "Subtitle or Description"
  },
  render: args => <Playground {...args} />
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  parameters: {
    a11y: {
      test: "todo"
    }
  },
  args: {
    open: true,
    primaryButton: {
      label: "Save",
      onClick: () => {}
    },
    secondaryButton: {
      label: "Cancel",
      onClick: () => {}
    }
  },
  render: args => <Playground {...args} />
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  parameters: {
    a11y: {
      test: "todo"
    },
    docs: {
      description: {
        story: "\`leadingSlot\` fills the footer's leading side - left of the buttons from \`md\` up, above them below."
      }
    }
  },
  args: {
    open: true,
    leadingSlot: <Checkbox id="split-view-apply-all" label="Apply to all studios" hideLabel description="Apply to all studios" />,
    primaryButton: {
      label: "Save",
      onClick: () => {}
    },
    secondaryButton: {
      label: "Cancel",
      onClick: () => {}
    }
  },
  render: args => <Playground {...args} />
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  parameters: {
    a11y: {
      test: "todo"
    }
  },
  args: {
    open: true,
    loading: true
  },
  render: args => <Playground {...args} />
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  parameters: {
    a11y: {
      test: "todo"
    }
  },
  args: {
    open: true,
    busy: true
  },
  render: args => <Playground {...args} />,
  // The dialog portals out of the canvas, so it is queried from the document.
  play: async ({
    canvasElement,
    userEvent
  }) => {
    const doc = canvasElement.ownerDocument;
    const dialog = await within(doc.body).findByRole("dialog", {
      name: "Settings"
    });
    await waitFor(() => expect(dialog.getAttribute("aria-busy")).toBe("true"));
    for (let press = 0; press < 5; press += 1) {
      await userEvent.tab();
      const active = doc.activeElement;
      await expect(active?.closest("[inert]") ?? null).toBeNull();
      await expect(active?.matches("input, button, a, [role='button'], [role='tab']")).toBe(false);
    }
  }
}`,...k.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  parameters: {
    a11y: {
      test: "todo"
    },
    docs: {
      description: {
        story: "A field focused while partly under the sticky header or footer scrolls clear of it, so its focus ring is never cut off."
      }
    }
  },
  args: {
    open: true,
    primaryButton: {
      label: "Save",
      onClick: () => {}
    },
    secondaryButton: {
      label: "Cancel",
      onClick: () => {}
    }
  },
  render: args => <LongForm {...args} />,
  // Geometry needs Tailwind, which the Vitest run lacks; Chromatic snapshots the result.
  play: async ({
    canvasElement,
    userEvent
  }) => {
    const doc = canvasElement.ownerDocument;
    const dialog = await within(doc.body).findByRole("dialog", {
      name: "Settings"
    });
    const [first] = await within(dialog).findAllByRole("textbox");
    const scroller = first.closest(".dialog-content")?.parentElement;
    if (scroller) scroller.scrollTop = 14;
    await userEvent.click(first);
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  parameters: {
    a11y: {
      test: "todo"
    },
    viewport: {
      defaultViewport: "mobile1"
    }
  },
  args: {
    open: true
  },
  render: args => <Playground {...args} />
}`,...M.parameters?.docs?.source}}},N=[`Default`,`Open`,`WithSubtitle`,`WithFooter`,`WithFooterSlot`,`Loading`,`Busy`,`FocusClearsStickyEdges`,`Mobile`]}))();export{k as Busy,C as Default,j as FocusClearsStickyEdges,O as Loading,M as Mobile,w as Open,E as WithFooter,D as WithFooterSlot,T as WithSubtitle,N as __namedExportsOrder,x as default};