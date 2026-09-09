import{n as e}from"./chunk-jRWAZmH_.js";import{$r as t,Oo as n,cr as r,ei as i,t as a,ti as o}from"./iframe-CbONSzYF.js";import{n as s,t as c}from"./figmaDesign-CO6i5n9C.js";import{n as l,t as u}from"./onCardStoryShell-5bhxa_YK.js";var d,f,p,m,h,g,_,v,y;e((()=>{a(),l(),s(),d=n(),{action:f}=__STORYBOOK_MODULE_ACTIONS__,p={title:`Inputs & Controls/Input`,component:t,tags:[`autodocs`],argTypes:{state:{control:{type:`select`},options:o},size:{control:{type:`select`},options:i}},parameters:{design:c(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=2345-1233`),docs:{description:{component:`Unlabelled text input primitive used to build TextInput and other form fields. Use directly only when a custom label layout is needed.`}}}},m={args:{id:`input`,"aria-label":`Label`,disabled:!1,loading:!1,state:`default`,trailingSlot:void 0,placeholder:`Placeholder`,onChange:f(`onChange`)},argTypes:{}},h={args:{...m.args,id:`slot-input`,defaultValue:`123.45`,leadingSlot:(0,d.jsx)(`span`,{className:`typography-label text-text-accent inline-flex min-w-[3ch] justify-center`,children:`EUR`}),trailingSlot:(0,d.jsx)(`span`,{className:`typography-label text-text-accent inline-flex min-w-[3ch] justify-center`,children:`NET`}),trailingSlotPadding:`inset`}},g={args:{...m.args,surface:`onCard`},render:e=>(0,d.jsx)(u,{children:(0,d.jsx)(t,{...e})})},_={parameters:{controls:{disable:!0}},render:e=>(0,d.jsx)(`div`,{className:`gap-xlg grid`,style:{display:`grid`,gridTemplateColumns:`repeat(${i.length}, minmax(0, 1fr))`},children:[{loading:!1,disabled:!1,state:`default`},{loading:!1,disabled:!1,state:`error`},{loading:!1,disabled:!1,state:`warning`},{loading:!1,disabled:!1,state:`success`},{loading:!1,disabled:!1,state:`success`,trailingSlot:`Done`},{loading:!0,disabled:!1,state:`default`},{loading:!0,disabled:!0,state:`default`},{loading:!1,disabled:!0,state:`default`}].map((n,r)=>i.map((i,a)=>{let o=`${i}-${n.loading?`loading`:`default`}-${n.disabled?`disabled`:`enabled`}-${n.state===`error`?`error`:`noerror`}-${n.state===`success`?`success`:`nosuccess`}`;return(0,d.jsxs)(`div`,{style:{gridColumn:`${a+1} / span 1`,gridRow:`${r+1} / span 1`},children:[e.showLabels&&(0,d.jsxs)(`p`,{className:`typography-body-small text-text`,children:[`size=`,i,n.loading?`, loading`:``,n.disabled?`, disabled`:``,n.state]}),(0,d.jsx)(`div`,{className:`gap-sm flex flex-row`,children:(0,d.jsx)(t,{id:`${o}-input`,"aria-label":`Input ${i} ${n.state}`,defaultValue:`Text`,placeholder:`Placeholder`,size:i,loading:n.loading,disabled:n.disabled,state:n.state,className:`w-[192px]`})})]},o)}))}),args:{showLabels:!1}},v={render:()=>(0,d.jsx)(r,{})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    ...Playground.args,
    surface: "onCard"
  },
  render: args => <OnCardStoryShell>
      <Input {...args} />
    </OnCardStoryShell>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <InputSkeleton />
}`,...v.parameters?.docs?.source}}},y=[`Playground`,`Slot`,`OnCard`,`Overview`,`Skeleton`]}))();export{g as OnCard,_ as Overview,m as Playground,v as Skeleton,h as Slot,y as __namedExportsOrder,p as default};