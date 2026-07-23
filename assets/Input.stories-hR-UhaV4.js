import{n as e}from"./chunk-jRWAZmH_.js";import{$n as t,Gr as n,Kr as r,Wr as i,fo as a,t as o}from"./iframe-Da97yqFL.js";import{n as s,t as c}from"./onCardStoryShell-NQGzPOc4.js";var l,u,d,f,p,m,h,g,_;e((()=>{o(),s(),l=a(),{action:u}=__STORYBOOK_MODULE_ACTIONS__,d={title:`Inputs & Controls/Input`,component:i,tags:[`autodocs`],argTypes:{state:{control:{type:`select`},options:r},size:{control:{type:`select`},options:n}},parameters:{docs:{description:{component:`Unlabelled text input primitive used to build TextInput and other form fields. Use directly only when a custom label layout is needed.`}}}},f={args:{id:`input`,"aria-label":`Label`,disabled:!1,loading:!1,state:`default`,trailingSlot:void 0,placeholder:`Placeholder`,onChange:u(`onChange`)},argTypes:{}},p={args:{...f.args,id:`slot-input`,defaultValue:`123.45`,leadingSlot:(0,l.jsx)(`span`,{className:`typography-label text-text-accent inline-flex min-w-[3ch] justify-center`,children:`EUR`}),trailingSlot:(0,l.jsx)(`span`,{className:`typography-label text-text-accent inline-flex min-w-[3ch] justify-center`,children:`NET`}),trailingSlotPadding:`inset`}},m={args:{...f.args,surface:`onCard`},render:e=>(0,l.jsx)(c,{children:(0,l.jsx)(i,{...e})})},h={parameters:{controls:{disable:!0}},render:e=>(0,l.jsx)(`div`,{className:`gap-xlg grid`,style:{display:`grid`,gridTemplateColumns:`repeat(${n.length}, minmax(0, 1fr))`},children:[{loading:!1,disabled:!1,state:`default`},{loading:!1,disabled:!1,state:`error`},{loading:!1,disabled:!1,state:`warning`},{loading:!1,disabled:!1,state:`success`},{loading:!1,disabled:!1,state:`success`,trailingSlot:`Done`},{loading:!0,disabled:!1,state:`default`},{loading:!0,disabled:!0,state:`default`},{loading:!1,disabled:!0,state:`default`}].map((t,r)=>n.map((n,a)=>{let o=`${n}-${t.loading?`loading`:`default`}-${t.disabled?`disabled`:`enabled`}-${t.state===`error`?`error`:`noerror`}-${t.state===`success`?`success`:`nosuccess`}`;return(0,l.jsxs)(`div`,{style:{gridColumn:`${a+1} / span 1`,gridRow:`${r+1} / span 1`},children:[e.showLabels&&(0,l.jsxs)(`p`,{className:`typography-body-small text-text`,children:[`size=`,n,t.loading?`, loading`:``,t.disabled?`, disabled`:``,t.state]}),(0,l.jsx)(`div`,{className:`gap-sm flex flex-row`,children:(0,l.jsx)(i,{id:`${o}-input`,"aria-label":`Input ${n} ${t.state}`,defaultValue:`Text`,placeholder:`Placeholder`,size:n,loading:t.loading,disabled:t.disabled,state:t.state,className:`w-[192px]`})})]},o)}))}),args:{showLabels:!1}},g={render:()=>(0,l.jsx)(t,{})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    id: "input",
    "aria-label": "Label",
    disabled: false,
    loading: false,
    state: "default",
    trailingSlot: undefined,
    placeholder: "Placeholder",
    onChange: action("onChange")
  },
  argTypes: {}
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...Playground.args,
    id: "slot-input",
    defaultValue: "123.45",
    leadingSlot: <span className="typography-label text-text-accent inline-flex min-w-[3ch] justify-center">
        EUR
      </span>,
    trailingSlot: <span className="typography-label text-text-accent inline-flex min-w-[3ch] justify-center">
        NET
      </span>,
    trailingSlotPadding: "inset"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    ...Playground.args,
    surface: "onCard"
  },
  render: args => <OnCardStoryShell>
      <Input {...args} />
    </OnCardStoryShell>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: (args: any) => {
    const rows: {
      loading: boolean;
      disabled: boolean;
      state: InputState;
      trailingSlot?: ReactNode;
    }[] = [{
      loading: false,
      disabled: false,
      state: "default"
    }, {
      loading: false,
      disabled: false,
      state: "error"
    }, {
      loading: false,
      disabled: false,
      state: "warning"
    }, {
      loading: false,
      disabled: false,
      state: "success"
    }, {
      loading: false,
      disabled: false,
      state: "success",
      trailingSlot: "Done"
    }, {
      loading: true,
      disabled: false,
      state: "default"
    }, {
      loading: true,
      disabled: true,
      state: "default"
    }, {
      loading: false,
      disabled: true,
      state: "default"
    }];
    return <div className="gap-xlg grid" style={{
      display: "grid",
      gridTemplateColumns: \`repeat(\${InputSizes.length}, minmax(0, 1fr))\`
    }}>
        {rows.map((rowConfig, rowIndex) => {
        return InputSizes.map((size, columnIndex) => {
          const key = \`\${size}-\${rowConfig.loading ? "loading" : "default"}-\${rowConfig.disabled ? "disabled" : "enabled"}\` + \`-\${rowConfig.state === "error" ? "error" : "noerror"}-\${rowConfig.state === "success" ? "success" : "nosuccess"}\`;
          return <div key={key} style={{
            gridColumn: \`\${columnIndex + 1} / span 1\`,
            gridRow: \`\${rowIndex + 1} / span 1\`
          }}>
                {args.showLabels && <p className="typography-body-small text-text">
                    size={size}
                    {rowConfig.loading ? ", loading" : ""}
                    {rowConfig.disabled ? ", disabled" : ""}
                    {rowConfig.state}
                  </p>}
                <div className="gap-sm flex flex-row">
                  <Input id={\`\${key}-input\`} aria-label={\`Input \${size} \${rowConfig.state}\`} defaultValue="Text" placeholder="Placeholder" size={size} loading={rowConfig.loading} disabled={rowConfig.disabled} state={rowConfig.state} className="w-[192px]" />
                </div>
              </div>;
        });
      })}
      </div>;
  },
  args: {
    showLabels: false
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <InputSkeleton />
}`,...g.parameters?.docs?.source}}},_=[`Playground`,`Slot`,`OnCard`,`Overview`,`Skeleton`]}))();export{m as OnCard,h as Overview,f as Playground,g as Skeleton,p as Slot,_ as __namedExportsOrder,d as default};