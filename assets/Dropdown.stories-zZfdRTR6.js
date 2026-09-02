import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{$t as n,Ci as r,Pa as i,Po as a,Ri as o,Xr as s,Yr as c,Zr as l,ca as u,ln as d,sr as f,t as p,un as m,xi as h,yo as g}from"./iframe-BXRL_JkN.js";import{n as _,t as v}from"./surfaceStoryShell-_L_4H_b2.js";function y({id:e,rowConfig:t,filled:n}){let[r,i]=(0,x.useState)(n?`de`:null);return(0,S.jsx)(d,{id:e,label:`Label`,title:`Select`,size:t.size,disabled:t.disabled,inline:t.inline,state:t.state,value:r,onChange:i,items:C,helperText:`Helper Text`,errorMessage:`Error Message`,warningMessage:`Warning Message`,successMessage:`Erledigt`})}function b(){let[e,t]=(0,x.useState)([`item2`,`item4`]);return(0,S.jsx)(d,{id:`multiple-dropdown`,label:`Location`,title:`Select one or multiple locations`,size:`large`,fullWidth:!0,multiple:!0,value:e,onChange:t,items:[{label:`Berlin`,value:`item1`},{label:`Cologne`,value:`item2`},{label:`Hamburg`,value:`item3`},{label:`Munich`,value:`item4`},{label:`Stuttgart`,value:`item5`}],helperText:`Picking keeps the menu open. The chip clears the selection.`})}var x,S,C,w,T,E,D,O,k,A,j,M,N,P;e((()=>{_(),x=t(a(),1),p(),h(),S=g(),C=[{label:`Germany`,value:`de`},{label:`France`,value:`fr`},{label:`Spain`,value:`es`}],w={component:d,title:`Overlays & Menus/Dropdown`,tags:[`autodocs`],args:{surface:`default`,title:`Select an option`,size:`medium`,disabled:!1,inline:!1,fullWidth:!1,items:[{label:`Item 1`,value:`item1`},{label:`Item 2`,value:`item2`},{label:`Item 3`,value:`item3`,disabled:!0},{label:`Item 4`,value:`item4`},{label:`Item 5`,value:`item5`},{label:`Item 6`,value:`item6`},{label:`Item 7`,value:`item7`},{label:`Item 8`,value:`item8`},{label:`Item 9`,value:`item9`},{label:`Item 10`,value:`item10`}]},argTypes:{surface:{control:`inline-radio`,options:l},size:{control:`inline-radio`,options:c},disabled:{control:`boolean`},inline:{control:`boolean`},fullWidth:{control:`boolean`},label:{control:`text`},errorMessage:{control:`text`},warningMessage:{control:`text`},successMessage:{control:`text`},helperText:{control:`text`},hideLabel:{control:`boolean`},state:{control:`inline-radio`,options:s},selectionIndicator:{control:`inline-radio`,options:m}},render:e=>{let[t,n]=(0,x.useState)(null);return(0,S.jsx)(d,{...e,value:t,onChange:n})},parameters:{docs:{description:{component:`Form field for picking one value from a list. Use when choices are short labels; prefer Select for typeahead over many options.`}}}},T={args:{id:`playground-dropdown`,label:`Select Option`,helperText:`Choose one of the available options.`,errorMessage:`Error Message`,warningMessage:`Warning Message`}},E={args:{...T.args,id:`slot-dropdown`,label:`Label`,trailingSlot:(0,S.jsx)(r,{size:10,className:`fill-icon-accent`,"aria-hidden":!0})}},D={parameters:{controls:{disable:!0},docs:{description:{story:"With `multiple`, the trigger keeps its placeholder and shows how many options are picked. The chip's close button clears them all."}}},render:()=>(0,S.jsx)(b,{})},O={parameters:{controls:{disable:!0}},args:{showLabels:!1},render:e=>{let t=c.toReversed().flatMap(e=>[{size:e,disabled:!1,inline:!1,state:`default`},{size:e,disabled:!0,inline:!1,state:`default`},{size:e,disabled:!1,inline:!0,state:`default`},{size:e,disabled:!1,inline:!1,state:`error`},{size:e,disabled:!1,inline:!1,state:`success`}]),n=s;return(0,S.jsx)(`div`,{className:`gap-xlg grid pb-[128px]`,style:{display:`grid`,gridTemplateColumns:`repeat(${n.length}, minmax(0, 1fr))`},children:t.map((t,r)=>n.map((n,i)=>{let a=`${n}-${t.size}-${t.disabled?`disabled`:`enabled`}-${t.state}-${t.inline?`inline`:`block`}`;return(0,S.jsxs)(`div`,{style:{gridColumn:`${i+1} / span 1`,gridRow:`${r+1} / span 1`},children:[e.showLabels?(0,S.jsxs)(`p`,{className:`typography-body-small text-text`,children:[`size=`,t.size,`, state=`,n,t.disabled?`, disabled`:``,t.inline?`, inline`:``,t.state===`default`?``:`, status=${t.state}`]}):null,(0,S.jsxs)(`div`,{className:`gap-sm flex flex-col`,children:[(0,S.jsx)(`div`,{className:`pb-[32px]`,children:(0,S.jsx)(y,{id:`${n}-${t.size}-${r}-empty`,rowConfig:t,filled:!1})}),(0,S.jsx)(`div`,{className:`pb-[32px]`,children:(0,S.jsx)(y,{id:`${n}-${t.size}-${r}-filled`,rowConfig:t,filled:!0})})]})]},a)}))})}},k={args:{showLabel:!0},argTypes:{showLabel:{control:`boolean`}},render:({showLabel:e})=>(0,S.jsx)(f,{showLabel:e})},A={parameters:{controls:{disable:!0},a11y:{test:`off`},chromatic:{disableSnapshot:!0}},render:()=>{let[e,t]=(0,x.useState)(!0),[r,a]=(0,x.useState)(null);return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(i,{label:`Open modal`,onClick:()=>t(!0)}),(0,S.jsx)(n,{open:e,onClose:()=>t(!1),title:`Invite member`,subtitle:`Pick a role from the dropdown.`,layoutMode:`fixed`,children:(0,S.jsx)(d,{label:`Role`,title:`Select a role`,size:`large`,value:r,onChange:a,items:C,fullWidth:!0})})]})}},j={render:e=>(0,S.jsx)(v,{children:t=>(0,S.jsx)(d,{...e,id:`dropdown-${t}`,surface:t})})},M={args:{selectionIndicator:`leading`,title:`All Employees`,hideLabel:!0,inline:!0,items:[{label:`All Employees`,value:`all`},{label:`External employees`,value:`external`},{label:`New view`,value:`new`,IconLeft:o,separatorBefore:!0}]},render:e=>{let[t,n]=(0,x.useState)(`all`);return(0,S.jsx)(d,{...e,value:t,onChange:n})}},N={args:{selectionIndicator:`leading`,title:`All Employees`,hideLabel:!0,inline:!0,items:[{label:`All Employees`,value:`all`,actionSlot:(0,S.jsx)(i,{kind:`ghost`,size:`small`,variant:`rounded`,IconLeft:u,"aria-label":`Manage All Employees`})},{label:`External employees`,value:`external`,actionSlot:(0,S.jsx)(i,{kind:`ghost`,size:`small`,variant:`rounded`,IconLeft:u,"aria-label":`Manage External employees`})}]},render:e=>{let[t,n]=(0,x.useState)(`all`);return(0,S.jsx)(d,{...e,value:t,onChange:n})}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    id: "playground-dropdown",
    label: "Select Option",
    helperText: "Choose one of the available options.",
    errorMessage: "Error Message",
    warningMessage: "Warning Message"
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    ...Playground.args,
    id: "slot-dropdown",
    label: "Label",
    trailingSlot: <IconCircleFilled size={10} className="fill-icon-accent" aria-hidden />
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source},description:{story:`Regression: a Dropdown opened inside a Modal must render its menu above the
modal scrim. Both portal into the same root, so the menu z-index has to sit
above the Modal's (z-1000).`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: args => <SurfaceStoryShell>
      {surface => <Dropdown {...args} id={\`dropdown-\${surface}\`} surface={surface} />}
    </SurfaceStoryShell>
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source},description:{story:`A menu that marks its selection up front: the check takes the icon column
ahead of the label, so every label starts on the same edge whether the row
is selected, carries an icon of its own, or neither.`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source},description:{story:`Rows that manage what they list: the action slot at the end carries a control
of its own, and clicking it leaves the selection where it was.`,...N.parameters?.docs?.description}}},P=[`Playground`,`Slot`,`Multiple`,`Overview`,`Skeleton`,`InsideModal`,`Surfaces`,`LeadingSelectionIndicator`,`RowActions`]}))();export{A as InsideModal,M as LeadingSelectionIndicator,D as Multiple,O as Overview,T as Playground,N as RowActions,k as Skeleton,E as Slot,j as Surfaces,P as __namedExportsOrder,w as default};