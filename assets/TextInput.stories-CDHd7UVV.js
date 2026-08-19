import{n as e}from"./chunk-jRWAZmH_.js";import{$n as t,Gr as n,Jt as r,Kr as i,fo as a,t as o}from"./iframe-4eq8CAan.js";import{n as s,t as c}from"./onCardStoryShell-DHMIqAgP.js";var l,u,d,f,p,m,h,g,_;e((()=>{o(),s(),l=a(),u={title:`Inputs & Controls/TextInput`,component:r,tags:[`autodocs`],argTypes:{size:{control:`inline-radio`,options:n},disabled:{control:`boolean`},loading:{control:`boolean`},successMessage:{control:`text`},errorMessage:{control:`text`},hideLabel:{control:`boolean`},label:{control:`text`},placeholder:{control:`text`},state:{control:`inline-radio`,options:i}},args:{errorMessage:`Error Message`,warningMessage:`Warning Message`,successMessage:`Success`,loadingMessage:`Loading...`,helperText:`Helper Text`,id:`playground-text-input`,label:`Label`,placeholder:`Placeholder text...`,size:`medium`},parameters:{docs:{description:{component:`Standard labeled text input with validation states. Use as the default single-line field in forms.`}}}},d={args:{}},f={args:{label:`Email address`,size:`large`,disabled:!0,value:`hendrik@bricksandbraces.com`,helperText:void 0,placeholder:void 0},render:e=>(0,l.jsx)(`div`,{className:`w-[150px]`,children:(0,l.jsx)(r,{...e})})},p={args:{...u.args,surface:`onCard`},render:e=>(0,l.jsx)(c,{children:(0,l.jsx)(r,{...e})})},m={args:{id:`slot-text-input`,label:`Label`,placeholder:`Placeholder text...`,trailingSlot:(0,l.jsx)(`span`,{className:`typography-label text-text-accent`,children:`ID`})},render:e=>(0,l.jsx)(r,{...e})},h={parameters:{controls:{disable:!0}},args:{showLabels:!1},render:e=>{let t=n.toReversed().flatMap(e=>[{size:e,loading:!1,disabled:!1,state:`default`},{size:e,loading:!1,disabled:!0,state:`default`},{size:e,loading:!0,disabled:!1,state:`default`},{size:e,loading:!1,disabled:!1,state:`error`},{size:e,loading:!1,disabled:!1,state:`success`}]),a=i;return(0,l.jsx)(`div`,{className:`gap-xlg grid pb-[128px]`,style:{display:`grid`,gridTemplateColumns:`repeat(${a.length}, minmax(0, 1fr))`},children:t.map((t,n)=>a.map((i,a)=>{let o=`${i}-${t.size}-${t.loading?`loading`:`default`}-${t.disabled?`disabled`:`enabled`}-${t.state}`;return(0,l.jsxs)(`div`,{style:{gridColumn:`${a+1} / span 1`,gridRow:`${n+1} / span 1`},children:[e.showLabels&&(0,l.jsxs)(`p`,{className:`typography-body-small text-text`,children:[`size=`,t.size,`, state=`,i,t.loading?`, loading`:``,t.disabled?`, disabled`:``,t.state===`default`?``:`, status=${t.state}`]}),(0,l.jsxs)(`div`,{className:`gap-sm flex flex-col`,children:[(0,l.jsx)(`div`,{className:`pb-[32px]`,children:(0,l.jsx)(r,{id:`${i}-${t.size}-${n}-empty`,label:`Label`,placeholder:`Placeholder text...`,helperText:`Helper Text`,loadingMessage:`Loading...`,errorMessage:`Error Message`,successMessage:`Success`,warningMessage:`Warning Message`,size:t.size,state:t.state,loading:t.loading,disabled:t.disabled})}),(0,l.jsx)(`div`,{className:`pb-[32px]`,children:(0,l.jsx)(r,{id:`${i}-${t.size}-${n}-filled`,label:`Label`,placeholder:`Placeholder text...`,helperText:`Helper Text`,loadingMessage:`Loading...`,errorMessage:`Error Message`,successMessage:`Success`,warningMessage:`Warning Message`,size:t.size,state:t.state,loading:t.loading,disabled:t.disabled,value:`john.doe@example.com`})})]})]},o)}))})}},g={render:()=>(0,l.jsx)(t,{})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Email address",
    size: "large",
    disabled: true,
    value: "hendrik@bricksandbraces.com",
    helperText: undefined,
    placeholder: undefined
  },
  render: args => <div className="w-[150px]">
      <TextInput {...args} />
    </div>
}`,...f.parameters?.docs?.source},description:{story:`A disabled input whose value overflows a narrow field. The scroll-overflow fade
must match the \`background-disabled\` surface — not the input surface — so it does
not paint a mismatched band at the trailing edge.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...meta.args,
    surface: "onCard"
  },
  render: args => <OnCardStoryShell>
      <TextInput {...args} />
    </OnCardStoryShell>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    id: "slot-text-input",
    label: "Label",
    placeholder: "Placeholder text...",
    trailingSlot: <span className="typography-label text-text-accent">ID</span>
  },
  render: args => <TextInput {...args} />
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  args: {
    showLabels: false
  },
  render: (args: any) => {
    const rows = InputSizes.toReversed().flatMap(size => [{
      size,
      loading: false,
      disabled: false,
      state: "default" as const
    }, {
      size,
      loading: false,
      disabled: true,
      state: "default" as const
    }, {
      size,
      loading: true,
      disabled: false,
      state: "default" as const
    }, {
      size,
      loading: false,
      disabled: false,
      state: "error" as const
    }, {
      size,
      loading: false,
      disabled: false,
      state: "success" as const
    }]);
    const OverviewStates = InputStates;
    return <div className="gap-xlg grid pb-[128px]" style={{
      display: "grid",
      gridTemplateColumns: \`repeat(\${OverviewStates.length}, minmax(0, 1fr))\`
    }}>
        {rows.map((rowConfig, rowIndex) => {
        return OverviewStates.map((state, columnIndex) => {
          const key = \`\${state}-\${rowConfig.size}-\${rowConfig.loading ? "loading" : "default"}-\${rowConfig.disabled ? "disabled" : "enabled"}-\${rowConfig.state}\`;
          return <div key={key} style={{
            gridColumn: \`\${columnIndex + 1} / span 1\`,
            gridRow: \`\${rowIndex + 1} / span 1\`
          }}>
                {args.showLabels && <p className="typography-body-small text-text">
                    size={rowConfig.size}, state={state}
                    {rowConfig.loading ? ", loading" : ""}
                    {rowConfig.disabled ? ", disabled" : ""}
                    {rowConfig.state !== "default" ? \`, status=\${rowConfig.state}\` : ""}
                  </p>}
                <div className="gap-sm flex flex-col">
                  <div className="pb-[32px]">
                    <TextInput id={\`\${state}-\${rowConfig.size}-\${rowIndex}-empty\`} label="Label" placeholder="Placeholder text..." helperText="Helper Text" loadingMessage="Loading..." errorMessage="Error Message" successMessage="Success" warningMessage="Warning Message" size={rowConfig.size} state={rowConfig.state} loading={rowConfig.loading} disabled={rowConfig.disabled} />
                  </div>
                  <div className="pb-[32px]">
                    <TextInput id={\`\${state}-\${rowConfig.size}-\${rowIndex}-filled\`} label="Label" placeholder="Placeholder text..." helperText="Helper Text" loadingMessage="Loading..." errorMessage="Error Message" successMessage="Success" warningMessage="Warning Message" size={rowConfig.size} state={rowConfig.state} loading={rowConfig.loading} disabled={rowConfig.disabled} value="john.doe@example.com" />
                  </div>
                </div>
              </div>;
        });
      })}
      </div>;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <TextInputSkeleton />
}`,...g.parameters?.docs?.source}}},_=[`Playground`,`DisabledOverflow`,`OnCard`,`Slot`,`Overview`,`Skeleton`]}))();export{f as DisabledOverflow,p as OnCard,h as Overview,d as Playground,g as Skeleton,m as Slot,_ as __namedExportsOrder,u as default};