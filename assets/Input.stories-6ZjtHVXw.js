import{n as e}from"./chunk-jRWAZmH_.js";import{Di as t,Dn as n,En as r,Tn as i,t as a}from"./iframe-ChiQ7sZy.js";import{n as o,t as s}from"./onCardStoryShell-CRBMwOi1.js";var c,l,u,d,f,p,m,h;e((()=>{a(),o(),c=t(),{action:l}=__STORYBOOK_MODULE_ACTIONS__,u={title:`Components/Inputs/Input`,component:i,tags:[`autodocs`],argTypes:{state:{control:{type:`select`},options:n},size:{control:{type:`select`},options:r}},parameters:{docs:{description:{component:`Unlabelled text input primitive used to build TextInput and other form fields. Use directly only when a custom label layout is needed.`}}}},d={args:{id:`input`,"aria-label":`Label`,disabled:!1,loading:!1,state:`default`,trailingSlot:void 0,placeholder:`Placeholder`,onChange:l(`onChange`)},argTypes:{}},f={args:{...d.args,id:`slot-input`,defaultValue:`123.45`,leadingSlot:(0,c.jsx)(`span`,{className:`typography-label text-text-accent inline-flex min-w-[3ch] justify-center`,children:`EUR`}),trailingSlot:(0,c.jsx)(`span`,{className:`typography-label text-text-accent inline-flex min-w-[3ch] justify-center`,children:`NET`}),trailingSlotPadding:`inset`}},p={args:{...d.args,surface:`onCard`},render:e=>(0,c.jsx)(s,{children:(0,c.jsx)(i,{...e})})},m={parameters:{controls:{disable:!0}},render:e=>(0,c.jsx)(`div`,{className:`gap-xlg grid`,style:{display:`grid`,gridTemplateColumns:`repeat(${r.length}, minmax(0, 1fr))`},children:[{loading:!1,disabled:!1,state:`default`},{loading:!1,disabled:!1,state:`error`},{loading:!1,disabled:!1,state:`warning`},{loading:!1,disabled:!1,state:`success`},{loading:!1,disabled:!1,state:`success`,trailingSlot:`Done`},{loading:!0,disabled:!1,state:`default`},{loading:!0,disabled:!0,state:`default`},{loading:!1,disabled:!0,state:`default`}].map((t,n)=>r.map((r,a)=>{let o=`${r}-${t.loading?`loading`:`default`}-${t.disabled?`disabled`:`enabled`}-${t.state===`error`?`error`:`noerror`}-${t.state===`success`?`success`:`nosuccess`}`;return(0,c.jsxs)(`div`,{style:{gridColumn:`${a+1} / span 1`,gridRow:`${n+1} / span 1`},children:[e.showLabels&&(0,c.jsxs)(`p`,{className:`typography-body-small text-text`,children:[`size=`,r,t.loading?`, loading`:``,t.disabled?`, disabled`:``,t.state]}),(0,c.jsx)(`div`,{className:`gap-sm flex flex-row`,children:(0,c.jsx)(i,{id:`${o}-input`,"aria-label":`Input ${r} ${t.state}`,defaultValue:`Text`,placeholder:`Placeholder`,size:r,loading:t.loading,disabled:t.disabled,state:t.state,className:`w-[192px]`})})]},o)}))}),args:{showLabels:!1}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...Playground.args,
    surface: "onCard"
  },
  render: args => <OnCardStoryShell>
      <Input {...args} />
    </OnCardStoryShell>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h=[`Playground`,`Slot`,`OnCard`,`Overview`]}))();export{p as OnCard,m as Overview,d as Playground,f as Slot,h as __namedExportsOrder,u as default};