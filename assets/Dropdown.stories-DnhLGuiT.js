import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{$t as n,Jr as r,Ma as i,Mo as a,Si as o,Xr as s,Yr as c,_o as l,bi as u,ln as d,or as f,t as p}from"./iframe-BhKgwV0q.js";import{n as m,t as h}from"./surfaceStoryShell-DTtDoBfT.js";function g({id:e,rowConfig:t,filled:n}){let[r,i]=(0,v.useState)(n?`de`:null);return(0,y.jsx)(d,{id:e,label:`Label`,title:`Select`,size:t.size,disabled:t.disabled,inline:t.inline,state:t.state,value:r,onChange:i,items:b,helperText:`Helper Text`,errorMessage:`Error Message`,warningMessage:`Warning Message`,successMessage:`Erledigt`})}function _(){let[e,t]=(0,v.useState)([`item2`,`item4`]);return(0,y.jsx)(d,{id:`multiple-dropdown`,label:`Location`,title:`Select one or multiple locations`,size:`large`,fullWidth:!0,multiple:!0,value:e,onChange:t,items:[{label:`Berlin`,value:`item1`},{label:`Cologne`,value:`item2`},{label:`Hamburg`,value:`item3`},{label:`Munich`,value:`item4`},{label:`Stuttgart`,value:`item5`}],helperText:`Picking keeps the menu open. The chip clears the selection.`})}var v,y,b,x,S,C,w,T,E,D,O,k;e((()=>{m(),v=t(a(),1),p(),u(),y=l(),b=[{label:`Germany`,value:`de`},{label:`France`,value:`fr`},{label:`Spain`,value:`es`}],x={component:d,title:`Overlays & Menus/Dropdown`,tags:[`autodocs`],args:{surface:`default`,title:`Select an option`,size:`medium`,disabled:!1,inline:!1,fullWidth:!1,items:[{label:`Item 1`,value:`item1`},{label:`Item 2`,value:`item2`},{label:`Item 3`,value:`item3`,disabled:!0},{label:`Item 4`,value:`item4`},{label:`Item 5`,value:`item5`},{label:`Item 6`,value:`item6`},{label:`Item 7`,value:`item7`},{label:`Item 8`,value:`item8`},{label:`Item 9`,value:`item9`},{label:`Item 10`,value:`item10`}]},argTypes:{surface:{control:`inline-radio`,options:s},size:{control:`inline-radio`,options:r},disabled:{control:`boolean`},inline:{control:`boolean`},fullWidth:{control:`boolean`},label:{control:`text`},errorMessage:{control:`text`},warningMessage:{control:`text`},successMessage:{control:`text`},helperText:{control:`text`},hideLabel:{control:`boolean`},state:{control:`inline-radio`,options:c}},render:e=>{let[t,n]=(0,v.useState)(null);return(0,y.jsx)(d,{...e,value:t,onChange:n})},parameters:{docs:{description:{component:`Form field for picking one value from a list. Use when choices are short labels; prefer Select for typeahead over many options.`}}}},S={args:{id:`playground-dropdown`,label:`Select Option`,helperText:`Choose one of the available options.`,errorMessage:`Error Message`,warningMessage:`Warning Message`}},C={args:{...S.args,id:`slot-dropdown`,label:`Label`,trailingSlot:(0,y.jsx)(o,{size:10,className:`fill-icon-accent`,"aria-hidden":!0})}},w={parameters:{controls:{disable:!0},docs:{description:{story:"With `multiple`, the trigger keeps its placeholder and shows how many options are picked. The chip's close button clears them all."}}},render:()=>(0,y.jsx)(_,{})},T={parameters:{controls:{disable:!0}},args:{showLabels:!1},render:e=>{let t=r.toReversed().flatMap(e=>[{size:e,disabled:!1,inline:!1,state:`default`},{size:e,disabled:!0,inline:!1,state:`default`},{size:e,disabled:!1,inline:!0,state:`default`},{size:e,disabled:!1,inline:!1,state:`error`},{size:e,disabled:!1,inline:!1,state:`success`}]),n=c;return(0,y.jsx)(`div`,{className:`gap-xlg grid pb-[128px]`,style:{display:`grid`,gridTemplateColumns:`repeat(${n.length}, minmax(0, 1fr))`},children:t.map((t,r)=>n.map((n,i)=>{let a=`${n}-${t.size}-${t.disabled?`disabled`:`enabled`}-${t.state}-${t.inline?`inline`:`block`}`;return(0,y.jsxs)(`div`,{style:{gridColumn:`${i+1} / span 1`,gridRow:`${r+1} / span 1`},children:[e.showLabels?(0,y.jsxs)(`p`,{className:`typography-body-small text-text`,children:[`size=`,t.size,`, state=`,n,t.disabled?`, disabled`:``,t.inline?`, inline`:``,t.state===`default`?``:`, status=${t.state}`]}):null,(0,y.jsxs)(`div`,{className:`gap-sm flex flex-col`,children:[(0,y.jsx)(`div`,{className:`pb-[32px]`,children:(0,y.jsx)(g,{id:`${n}-${t.size}-${r}-empty`,rowConfig:t,filled:!1})}),(0,y.jsx)(`div`,{className:`pb-[32px]`,children:(0,y.jsx)(g,{id:`${n}-${t.size}-${r}-filled`,rowConfig:t,filled:!0})})]})]},a)}))})}},E={args:{showLabel:!0},argTypes:{showLabel:{control:`boolean`}},render:({showLabel:e})=>(0,y.jsx)(f,{showLabel:e})},D={parameters:{controls:{disable:!0},a11y:{test:`off`},chromatic:{disableSnapshot:!0}},render:()=>{let[e,t]=(0,v.useState)(!0),[r,a]=(0,v.useState)(null);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(i,{label:`Open modal`,onClick:()=>t(!0)}),(0,y.jsx)(n,{open:e,onClose:()=>t(!1),title:`Invite member`,subtitle:`Pick a role from the dropdown.`,layoutMode:`fixed`,children:(0,y.jsx)(d,{label:`Role`,title:`Select a role`,size:`large`,value:r,onChange:a,items:b,fullWidth:!0})})]})}},O={render:e=>(0,y.jsx)(h,{children:t=>(0,y.jsx)(d,{...e,id:`dropdown-${t}`,surface:t})})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    id: "playground-dropdown",
    label: "Select Option",
    helperText: "Choose one of the available options.",
    errorMessage: "Error Message",
    warningMessage: "Warning Message"
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    ...Playground.args,
    id: "slot-dropdown",
    label: "Label",
    trailingSlot: <IconCircleFilled size={10} className="fill-icon-accent" aria-hidden />
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source},description:{story:`Regression: a Dropdown opened inside a Modal must render its menu above the
modal scrim. Both portal into the same root, so the menu z-index has to sit
above the Modal's (z-1000).`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: args => <SurfaceStoryShell>
      {surface => <Dropdown {...args} id={\`dropdown-\${surface}\`} surface={surface} />}
    </SurfaceStoryShell>
}`,...O.parameters?.docs?.source}}},k=[`Playground`,`Slot`,`Multiple`,`Overview`,`Skeleton`,`InsideModal`,`Surfaces`]}))();export{D as InsideModal,w as Multiple,T as Overview,S as Playground,E as Skeleton,C as Slot,O as Surfaces,k as __namedExportsOrder,x as default};