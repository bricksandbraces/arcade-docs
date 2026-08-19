import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{$t as n,Da as r,Do as i,Gr as a,Kr as o,fo as s,gi as c,rr as l,sn as u,t as d,vi as f}from"./iframe-B8ovF2Kg.js";function p({id:e,rowConfig:t,filled:n}){let[r,i]=(0,m.useState)(n?`de`:null);return(0,h.jsx)(u,{id:e,label:`Label`,title:`Select`,size:t.size,disabled:t.disabled,inline:t.inline,state:t.state,value:r,onChange:i,items:g,helperText:`Helper Text`,errorMessage:`Error Message`,warningMessage:`Warning Message`,successMessage:`Erledigt`})}var m,h,g,_,v,y,b,x,S,C;e((()=>{m=t(i(),1),d(),c(),h=s(),g=[{label:`Germany`,value:`de`},{label:`France`,value:`fr`},{label:`Spain`,value:`es`}],_={component:u,title:`Overlays & Menus/Dropdown`,tags:[`autodocs`],args:{title:`Select an option`,size:`medium`,disabled:!1,inline:!1,fullWidth:!1,items:[{label:`Item 1`,value:`item1`},{label:`Item 2`,value:`item2`},{label:`Item 3`,value:`item3`,disabled:!0},{label:`Item 4`,value:`item4`},{label:`Item 5`,value:`item5`},{label:`Item 6`,value:`item6`},{label:`Item 7`,value:`item7`},{label:`Item 8`,value:`item8`},{label:`Item 9`,value:`item9`},{label:`Item 10`,value:`item10`}]},argTypes:{size:{control:`inline-radio`,options:a},disabled:{control:`boolean`},inline:{control:`boolean`},fullWidth:{control:`boolean`},label:{control:`text`},errorMessage:{control:`text`},warningMessage:{control:`text`},successMessage:{control:`text`},helperText:{control:`text`},hideLabel:{control:`boolean`},state:{control:`inline-radio`,options:o}},render:e=>{let[t,n]=(0,m.useState)(null);return(0,h.jsx)(u,{...e,value:t,onChange:n})},parameters:{docs:{description:{component:`Form field for picking one value from a list. Use when choices are short labels; prefer Select for typeahead over many options.`}}}},v={args:{id:`playground-dropdown`,label:`Select Option`,helperText:`Choose one of the available options.`,errorMessage:`Error Message`,warningMessage:`Warning Message`}},y={args:{...v.args,id:`slot-dropdown`,label:`Label`,trailingSlot:(0,h.jsx)(f,{size:10,className:`fill-icon-accent`,"aria-hidden":!0})}},b={parameters:{controls:{disable:!0}},args:{showLabels:!1},render:e=>{let t=a.toReversed().flatMap(e=>[{size:e,disabled:!1,inline:!1,state:`default`},{size:e,disabled:!0,inline:!1,state:`default`},{size:e,disabled:!1,inline:!0,state:`default`},{size:e,disabled:!1,inline:!1,state:`error`},{size:e,disabled:!1,inline:!1,state:`success`}]),n=o;return(0,h.jsx)(`div`,{className:`gap-xlg grid pb-[128px]`,style:{display:`grid`,gridTemplateColumns:`repeat(${n.length}, minmax(0, 1fr))`},children:t.map((t,r)=>n.map((n,i)=>{let a=`${n}-${t.size}-${t.disabled?`disabled`:`enabled`}-${t.state}-${t.inline?`inline`:`block`}`;return(0,h.jsxs)(`div`,{style:{gridColumn:`${i+1} / span 1`,gridRow:`${r+1} / span 1`},children:[e.showLabels?(0,h.jsxs)(`p`,{className:`typography-body-small text-text`,children:[`size=`,t.size,`, state=`,n,t.disabled?`, disabled`:``,t.inline?`, inline`:``,t.state===`default`?``:`, status=${t.state}`]}):null,(0,h.jsxs)(`div`,{className:`gap-sm flex flex-col`,children:[(0,h.jsx)(`div`,{className:`pb-[32px]`,children:(0,h.jsx)(p,{id:`${n}-${t.size}-${r}-empty`,rowConfig:t,filled:!1})}),(0,h.jsx)(`div`,{className:`pb-[32px]`,children:(0,h.jsx)(p,{id:`${n}-${t.size}-${r}-filled`,rowConfig:t,filled:!0})})]})]},a)}))})}},x={args:{showLabel:!0},argTypes:{showLabel:{control:`boolean`}},render:({showLabel:e})=>(0,h.jsx)(l,{showLabel:e})},S={parameters:{controls:{disable:!0},a11y:{test:`off`},chromatic:{disableSnapshot:!0}},render:()=>{let[e,t]=(0,m.useState)(!0),[i,a]=(0,m.useState)(null);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(r,{label:`Open modal`,onClick:()=>t(!0)}),(0,h.jsx)(n,{open:e,onClose:()=>t(!1),title:`Invite member`,subtitle:`Pick a role from the dropdown.`,layoutMode:`fixed`,children:(0,h.jsx)(u,{label:`Role`,title:`Select a role`,size:`large`,value:i,onChange:a,items:g,fullWidth:!0})})]})}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    id: "playground-dropdown",
    label: "Select Option",
    helperText: "Choose one of the available options.",
    errorMessage: "Error Message",
    warningMessage: "Warning Message"
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    ...Playground.args,
    id: "slot-dropdown",
    label: "Label",
    trailingSlot: <IconCircleFilled size={10} className="fill-icon-accent" aria-hidden />
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source},description:{story:`Regression: a Dropdown opened inside a Modal must render its menu above the
modal scrim. Both portal into the same root, so the menu z-index has to sit
above the Modal's (z-1000).`,...S.parameters?.docs?.description}}},C=[`Playground`,`Slot`,`Overview`,`Skeleton`,`InsideModal`]}))();export{S as InsideModal,b as Overview,v as Playground,x as Skeleton,y as Slot,C as __namedExportsOrder,_ as default};