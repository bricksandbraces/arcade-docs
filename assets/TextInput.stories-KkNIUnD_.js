import{n as e}from"./chunk-jRWAZmH_.js";import{Gt as t,Io as n,ai as r,ii as i,oi as a,t as o,ur as s}from"./iframe-D6-Ak9zf.js";import{n as c,t as l}from"./figmaDesign-CO6i5n9C.js";import{n as u,t as d}from"./surfaceStoryShell-CyM8z6yz.js";var f,p,m,h,g,_,v,y,b;e((()=>{u(),o(),c(),f=n(),p={title:`Inputs & Controls/TextInput`,component:t,tags:[`autodocs`],argTypes:{surface:{control:`inline-radio`,options:a},size:{control:`inline-radio`,options:i},disabled:{control:`boolean`},loading:{control:`boolean`},successMessage:{control:`text`},errorMessage:{control:`text`},hideLabel:{control:`boolean`},label:{control:`text`},placeholder:{control:`text`},state:{control:`inline-radio`,options:r}},args:{surface:`default`,errorMessage:`Error Message`,warningMessage:`Warning Message`,successMessage:`Success`,loadingMessage:`Loading...`,helperText:`Helper Text`,id:`playground-text-input`,label:`Label`,placeholder:`Placeholder text...`,size:`medium`},parameters:{design:l(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=2345-1233`),docs:{description:{component:`Standard labeled text input with validation states. Use as the default single-line field in forms.`}}}},m={args:{}},h={args:{label:`Email address`,size:`large`,disabled:!0,value:`hendrik@bricksandbraces.com`,helperText:void 0,placeholder:void 0},render:e=>(0,f.jsx)(`div`,{className:`w-[150px]`,children:(0,f.jsx)(t,{...e})})},g={args:{id:`slot-text-input`,label:`Label`,placeholder:`Placeholder text...`,trailingSlot:(0,f.jsx)(`span`,{className:`typography-label text-text-accent`,children:`ID`})},render:e=>(0,f.jsx)(t,{...e})},_={parameters:{controls:{disable:!0}},args:{showLabels:!1},render:e=>{let n=i.toReversed().flatMap(e=>[{size:e,loading:!1,disabled:!1,state:`default`},{size:e,loading:!1,disabled:!0,state:`default`},{size:e,loading:!0,disabled:!1,state:`default`},{size:e,loading:!1,disabled:!1,state:`error`},{size:e,loading:!1,disabled:!1,state:`success`}]),a=r;return(0,f.jsx)(`div`,{className:`gap-xlg grid pb-[128px]`,style:{display:`grid`,gridTemplateColumns:`repeat(${a.length}, minmax(0, 1fr))`},children:n.map((n,r)=>a.map((i,a)=>{let o=`${i}-${n.size}-${n.loading?`loading`:`default`}-${n.disabled?`disabled`:`enabled`}-${n.state}`;return(0,f.jsxs)(`div`,{style:{gridColumn:`${a+1} / span 1`,gridRow:`${r+1} / span 1`},children:[e.showLabels&&(0,f.jsxs)(`p`,{className:`typography-body-small text-text`,children:[`size=`,n.size,`, state=`,i,n.loading?`, loading`:``,n.disabled?`, disabled`:``,n.state===`default`?``:`, status=${n.state}`]}),(0,f.jsxs)(`div`,{className:`gap-sm flex flex-col`,children:[(0,f.jsx)(`div`,{className:`pb-[32px]`,children:(0,f.jsx)(t,{id:`${i}-${n.size}-${r}-empty`,label:`Label`,placeholder:`Placeholder text...`,helperText:`Helper Text`,loadingMessage:`Loading...`,errorMessage:`Error Message`,successMessage:`Success`,warningMessage:`Warning Message`,size:n.size,state:n.state,loading:n.loading,disabled:n.disabled})}),(0,f.jsx)(`div`,{className:`pb-[32px]`,children:(0,f.jsx)(t,{id:`${i}-${n.size}-${r}-filled`,label:`Label`,placeholder:`Placeholder text...`,helperText:`Helper Text`,loadingMessage:`Loading...`,errorMessage:`Error Message`,successMessage:`Success`,warningMessage:`Warning Message`,size:n.size,state:n.state,loading:n.loading,disabled:n.disabled,value:`john.doe@example.com`})})]})]},o)}))})}},v={render:()=>(0,f.jsx)(s,{})},y={render:e=>(0,f.jsx)(d,{children:n=>(0,f.jsx)(t,{...e,surface:n})})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source},description:{story:`A disabled input whose value overflows a narrow field. The scroll-overflow fade
must match the \`background-disabled\` surface - not the input surface - so it does
not paint a mismatched band at the trailing edge.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    id: "slot-text-input",
    label: "Label",
    placeholder: "Placeholder text...",
    trailingSlot: <span className="typography-label text-text-accent">ID</span>
  },
  render: args => <TextInput {...args} />
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <TextInputSkeleton />
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => <SurfaceStoryShell>
      {surface => <TextInput {...args} surface={surface} />}
    </SurfaceStoryShell>
}`,...y.parameters?.docs?.source}}},b=[`Playground`,`DisabledOverflow`,`Slot`,`Overview`,`Skeleton`,`Surfaces`]}))();export{h as DisabledOverflow,_ as Overview,m as Playground,v as Skeleton,g as Slot,y as Surfaces,b as __namedExportsOrder,p as default};