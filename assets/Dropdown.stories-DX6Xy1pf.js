import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Ai as n,Ki as r,Mo as i,Oi as a,an as o,gn as s,hn as c,ni as l,pr as u,qa as d,qo as f,ri as p,t as m,ti as h,va as g}from"./iframe-Cm-nuzEn.js";import{n as _,t as v}from"./figmaDesign-CO6i5n9C.js";import{n as y,t as b}from"./surfaceStoryShell-roWn3c3a.js";function x({id:e,rowConfig:t,filled:n}){let[r,i]=(0,C.useState)(n?`de`:null);return(0,w.jsx)(c,{id:e,label:`Label`,title:`Select`,size:t.size,disabled:t.disabled,inline:t.inline,state:t.state,value:r,onChange:i,items:T,helperText:`Helper Text`,errorMessage:`Error Message`,warningMessage:`Warning Message`,successMessage:`Erledigt`})}function S(){let[e,t]=(0,C.useState)([`item2`,`item4`]);return(0,w.jsx)(c,{id:`multiple-dropdown`,label:`Location`,title:`Select one or multiple locations`,size:`large`,fullWidth:!0,multiple:!0,value:e,onChange:t,items:[{label:`Berlin`,value:`item1`},{label:`Cologne`,value:`item2`},{label:`Hamburg`,value:`item3`},{label:`Munich`,value:`item4`},{label:`Stuttgart`,value:`item5`}],helperText:`Picking keeps the menu open. The chip clears the selection.`})}var C,w,T,E,D,O,k,A,j,M,N,P,F,I;e((()=>{y(),C=t(f(),1),m(),a(),_(),w=i(),T=[{label:`Germany`,value:`de`},{label:`France`,value:`fr`},{label:`Spain`,value:`es`}],E={component:c,title:`Overlays & Menus/Dropdown`,tags:[`autodocs`],args:{surface:`default`,title:`Select an option`,size:`medium`,disabled:!1,inline:!1,fullWidth:!1,items:[{label:`Item 1`,value:`item1`},{label:`Item 2`,value:`item2`},{label:`Item 3`,value:`item3`,disabled:!0},{label:`Item 4`,value:`item4`},{label:`Item 5`,value:`item5`},{label:`Item 6`,value:`item6`},{label:`Item 7`,value:`item7`},{label:`Item 8`,value:`item8`},{label:`Item 9`,value:`item9`},{label:`Item 10`,value:`item10`}]},argTypes:{surface:{control:`inline-radio`,options:p},size:{control:`inline-radio`,options:h},disabled:{control:`boolean`},inline:{control:`boolean`},fullWidth:{control:`boolean`},label:{control:`text`},errorMessage:{control:`text`},warningMessage:{control:`text`},successMessage:{control:`text`},helperText:{control:`text`},hideLabel:{control:`boolean`},state:{control:`inline-radio`,options:l},selectionIndicator:{control:`inline-radio`,options:s}},render:e=>{let[t,n]=(0,C.useState)(null);return(0,w.jsx)(c,{...e,value:t,onChange:n})},parameters:{design:v(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=4513-3142`),docs:{description:{component:`Form field for picking one value from a list. Use when choices are short labels; prefer Select for typeahead over many options.`}}}},D={args:{id:`playground-dropdown`,label:`Select Option`,helperText:`Choose one of the available options.`,errorMessage:`Error Message`,warningMessage:`Warning Message`}},O={args:{...D.args,id:`slot-dropdown`,label:`Label`,trailingSlot:(0,w.jsx)(n,{size:10,className:`fill-icon-accent`,"aria-hidden":!0})}},k={parameters:{controls:{disable:!0},docs:{description:{story:"With `multiple`, the trigger keeps its placeholder and shows how many options are picked. The chip's close button clears them all."}}},render:()=>(0,w.jsx)(S,{})},A={parameters:{controls:{disable:!0}},args:{showLabels:!1},render:e=>{let t=h.toReversed().flatMap(e=>[{size:e,disabled:!1,inline:!1,state:`default`},{size:e,disabled:!0,inline:!1,state:`default`},{size:e,disabled:!1,inline:!0,state:`default`},{size:e,disabled:!1,inline:!1,state:`error`},{size:e,disabled:!1,inline:!1,state:`success`}]),n=l;return(0,w.jsx)(`div`,{className:`gap-xlg grid pb-[128px]`,style:{display:`grid`,gridTemplateColumns:`repeat(${n.length}, minmax(0, 1fr))`},children:t.map((t,r)=>n.map((n,i)=>{let a=`${n}-${t.size}-${t.disabled?`disabled`:`enabled`}-${t.state}-${t.inline?`inline`:`block`}`;return(0,w.jsxs)(`div`,{style:{gridColumn:`${i+1} / span 1`,gridRow:`${r+1} / span 1`},children:[e.showLabels?(0,w.jsxs)(`p`,{className:`typography-body-small text-text`,children:[`size=`,t.size,`, state=`,n,t.disabled?`, disabled`:``,t.inline?`, inline`:``,t.state===`default`?``:`, status=${t.state}`]}):null,(0,w.jsxs)(`div`,{className:`gap-sm flex flex-col`,children:[(0,w.jsx)(`div`,{className:`pb-[32px]`,children:(0,w.jsx)(x,{id:`${n}-${t.size}-${r}-empty`,rowConfig:t,filled:!1})}),(0,w.jsx)(`div`,{className:`pb-[32px]`,children:(0,w.jsx)(x,{id:`${n}-${t.size}-${r}-filled`,rowConfig:t,filled:!0})})]})]},a)}))})}},j={args:{showLabel:!0},argTypes:{showLabel:{control:`boolean`}},render:({showLabel:e})=>(0,w.jsx)(u,{showLabel:e})},M={parameters:{controls:{disable:!0},a11y:{test:`off`},chromatic:{disableSnapshot:!0}},render:()=>{let[e,t]=(0,C.useState)(!0),[n,r]=(0,C.useState)(null);return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(d,{label:`Open modal`,onClick:()=>t(!0)}),(0,w.jsx)(o,{open:e,onClose:()=>t(!1),title:`Invite member`,subtitle:`Pick a role from the dropdown.`,layoutMode:`fixed`,children:(0,w.jsx)(c,{label:`Role`,title:`Select a role`,size:`large`,value:n,onChange:r,items:T,fullWidth:!0})})]})}},N={render:e=>(0,w.jsx)(b,{children:t=>(0,w.jsx)(c,{...e,id:`dropdown-${t}`,surface:t})})},P={args:{selectionIndicator:`leading`,title:`All Employees`,hideLabel:!0,inline:!0,items:[{label:`All Employees`,value:`all`},{label:`External employees`,value:`external`},{label:`New view`,value:`new`,IconLeft:r,separatorBefore:!0}]},render:e=>{let[t,n]=(0,C.useState)(`all`);return(0,w.jsx)(c,{...e,value:t,onChange:n})}},F={args:{selectionIndicator:`leading`,title:`All Employees`,hideLabel:!0,inline:!0,items:[{label:`All Employees`,value:`all`,actionSlot:(0,w.jsx)(d,{kind:`ghost`,size:`small`,variant:`rounded`,IconLeft:g,"aria-label":`Manage All Employees`})},{label:`External employees`,value:`external`,actionSlot:(0,w.jsx)(d,{kind:`ghost`,size:`small`,variant:`rounded`,IconLeft:g,"aria-label":`Manage External employees`})}]},render:e=>{let[t,n]=(0,C.useState)(`all`);return(0,w.jsx)(c,{...e,value:t,onChange:n})}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    id: "playground-dropdown",
    label: "Select Option",
    helperText: "Choose one of the available options.",
    errorMessage: "Error Message",
    warningMessage: "Warning Message"
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    ...Playground.args,
    id: "slot-dropdown",
    label: "Label",
    trailingSlot: <IconCircleFilled size={10} className="fill-icon-accent" aria-hidden />
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "With \`multiple\`, the trigger keeps its placeholder and shows how many options are picked. The chip's close button clears them all."
      }
    }
  },
  render: () => <MultipleDropdownDemo />
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  args: {
    showLabels: false
  },
  render: (args: {
    showLabels?: boolean;
  }) => {
    const rows = InputSizes.toReversed().flatMap(size => [{
      size,
      disabled: false,
      inline: false,
      state: "default" as const
    }, {
      size,
      disabled: true,
      inline: false,
      state: "default" as const
    }, {
      size,
      disabled: false,
      inline: true,
      state: "default" as const
    }, {
      size,
      disabled: false,
      inline: false,
      state: "error" as const
    }, {
      size,
      disabled: false,
      inline: false,
      state: "success" as const
    }]);
    const OverviewStates = InputStates;
    return <div className="gap-xlg grid pb-[128px]" style={{
      display: "grid",
      gridTemplateColumns: \`repeat(\${OverviewStates.length}, minmax(0, 1fr))\`
    }}>
        {rows.map((rowConfig, rowIndex) => {
        return OverviewStates.map((state, columnIndex) => {
          const key = \`\${state}-\${rowConfig.size}-\${rowConfig.disabled ? "disabled" : "enabled"}-\${rowConfig.state}-\${rowConfig.inline ? "inline" : "block"}\`;
          return <div key={key} style={{
            gridColumn: \`\${columnIndex + 1} / span 1\`,
            gridRow: \`\${rowIndex + 1} / span 1\`
          }}>
                {args.showLabels ? <p className="typography-body-small text-text">
                    size={rowConfig.size}, state={state}
                    {rowConfig.disabled ? ", disabled" : ""}
                    {rowConfig.inline ? ", inline" : ""}
                    {rowConfig.state !== "default" ? \`, status=\${rowConfig.state}\` : ""}
                  </p> : null}
                <div className="gap-sm flex flex-col">
                  <div className="pb-[32px]">
                    <DropdownOverviewSlot id={\`\${state}-\${rowConfig.size}-\${rowIndex}-empty\`} rowConfig={rowConfig} filled={false} />
                  </div>
                  <div className="pb-[32px]">
                    <DropdownOverviewSlot id={\`\${state}-\${rowConfig.size}-\${rowIndex}-filled\`} rowConfig={rowConfig} filled />
                  </div>
                </div>
              </div>;
        });
      })}
      </div>;
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    showLabel: true
  },
  argTypes: {
    showLabel: {
      control: "boolean"
    }
  },
  render: ({
    showLabel
  }: {
    showLabel?: boolean;
  }) => <DropdownSkeleton showLabel={showLabel} />
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    // The Modal dialog's accessible-name gap is covered by the Modal stories;
    // this story only verifies the dropdown menu layers above the modal scrim.
    a11y: {
      test: "off"
    },
    chromatic: {
      disableSnapshot: true
    }
  },
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [open, setOpen] = useState(true);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState<string | null>(null);
    return <>
        <Button label="Open modal" onClick={() => setOpen(true)} />
        <Modal open={open} onClose={() => setOpen(false)} title="Invite member" subtitle="Pick a role from the dropdown." layoutMode="fixed">
          <Dropdown label="Role" title="Select a role" size="large" value={value} onChange={setValue} items={overviewItems} fullWidth />
        </Modal>
      </>;
  }
}`,...M.parameters?.docs?.source},description:{story:`Regression: a Dropdown opened inside a Modal must render its menu above the
modal scrim. Both portal into the same root, so the menu z-index has to sit
above the Modal's (z-1000).`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: args => <SurfaceStoryShell>
      {surface => <Dropdown {...args} id={\`dropdown-\${surface}\`} surface={surface} />}
    </SurfaceStoryShell>
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    selectionIndicator: "leading",
    title: "All Employees",
    hideLabel: true,
    inline: true,
    items: [{
      label: "All Employees",
      value: "all"
    }, {
      label: "External employees",
      value: "external"
    }, {
      label: "New view",
      value: "new",
      IconLeft: IconPlus,
      separatorBefore: true
    }]
  },
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState<string | null>("all");
    return <Dropdown {...args} value={value} onChange={setValue} />;
  }
}`,...P.parameters?.docs?.source},description:{story:`A menu that marks its selection up front: the check takes the icon column
ahead of the label, so every label starts on the same edge whether the row
is selected, carries an icon of its own, or neither.`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    selectionIndicator: "leading",
    title: "All Employees",
    hideLabel: true,
    inline: true,
    items: [{
      label: "All Employees",
      value: "all",
      actionSlot: <Button kind="ghost" size="small" variant="rounded" IconLeft={IconDotsVertical} aria-label="Manage All Employees" />
    }, {
      label: "External employees",
      value: "external",
      actionSlot: <Button kind="ghost" size="small" variant="rounded" IconLeft={IconDotsVertical} aria-label="Manage External employees" />
    }]
  },
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState<string | null>("all");
    return <Dropdown {...args} value={value} onChange={setValue} />;
  }
}`,...F.parameters?.docs?.source},description:{story:`Rows that manage what they list: the action slot at the end carries a control
of its own, and clicking it leaves the selection where it was.`,...F.parameters?.docs?.description}}},I=[`Playground`,`Slot`,`Multiple`,`Overview`,`Skeleton`,`InsideModal`,`Surfaces`,`LeadingSelectionIndicator`,`RowActions`]}))();export{M as InsideModal,P as LeadingSelectionIndicator,k as Multiple,A as Overview,D as Playground,F as RowActions,j as Skeleton,O as Slot,N as Surfaces,I as __namedExportsOrder,E as default};