import{n as e}from"./chunk-jRWAZmH_.js";import{Ci as t,Ea as n,Jr as r,Yr as i,go as a,qt as o,t as s,yi as c}from"./iframe-KaqYBI6z.js";import{n as l,t as u}from"./onCardStoryShell-CWHZDljh.js";var d,f,p,m,h,g,_,v,y;e((()=>{c(),s(),l(),d=a(),f={title:`Inputs & Controls/InputGroup`,component:o,tags:[`autodocs`],argTypes:{size:{control:`inline-radio`,options:r},disabled:{control:`boolean`},loading:{control:`boolean`},successMessage:{control:`text`},errorMessage:{control:`text`},hideLabel:{control:`boolean`},label:{control:`text`},placeholder:{control:`text`},prefix:{control:`text`},suffix:{control:`text`},state:{control:`inline-radio`,options:i}},args:{errorMessage:`Error Message`,warningMessage:`Warning Message`,successMessage:`Success`,loadingMessage:`Loading...`,helperText:`Helper Text`,id:`playground-input-group`,label:`Website`,placeholder:`yourdomain`,prefix:`https://`,suffix:`.com`,size:`medium`},parameters:{docs:{description:{component:"Text input with a prefix and/or suffix affix. Use the affixes to provide units, protocols, domains, or icons that contextualize the input value. The middle field is a regular text input that supports the same validation states as `TextInput`."}}}},p={args:{}},m={args:{id:`prefix-only-input-group`,label:`Amount`,placeholder:`0.00`,prefix:`€`,suffix:void 0}},h={args:{id:`suffix-only-input-group`,label:`Weight`,placeholder:`0`,prefix:void 0,suffix:`kg`}},g={args:{id:`icon-affix-input-group`,label:`Email address`,placeholder:`name@example`,prefix:(0,d.jsx)(n,{className:`stroke-icon-accent size-4`,"aria-hidden":!0}),suffix:(0,d.jsx)(t,{className:`stroke-icon-accent size-4`,"aria-hidden":!0})}},_={args:{surface:`onCard`},render:e=>(0,d.jsx)(u,{children:(0,d.jsx)(o,{...e})})},v={parameters:{controls:{disable:!0}},args:{showLabels:!1},render:e=>{let t=r.toReversed().flatMap(e=>[{size:e,loading:!1,disabled:!1,state:`default`},{size:e,loading:!1,disabled:!0,state:`default`},{size:e,loading:!0,disabled:!1,state:`default`},{size:e,loading:!1,disabled:!1,state:`error`},{size:e,loading:!1,disabled:!1,state:`success`}]),n=i;return(0,d.jsx)(`div`,{className:`gap-xlg grid pb-[128px]`,style:{display:`grid`,gridTemplateColumns:`repeat(${n.length}, minmax(0, 1fr))`},children:t.map((t,r)=>n.map((n,i)=>{let a=`${n}-${t.size}-${t.loading?`loading`:`default`}-${t.disabled?`disabled`:`enabled`}-${t.state}`;return(0,d.jsxs)(`div`,{style:{gridColumn:`${i+1} / span 1`,gridRow:`${r+1} / span 1`},children:[e.showLabels&&(0,d.jsxs)(`p`,{className:`typography-body-small text-text`,children:[`size=`,t.size,`, state=`,n,t.loading?`, loading`:``,t.disabled?`, disabled`:``,t.state===`default`?``:`, status=${t.state}`]}),(0,d.jsxs)(`div`,{className:`gap-sm flex flex-col`,children:[(0,d.jsx)(`div`,{className:`pb-[32px]`,children:(0,d.jsx)(o,{id:`${n}-${t.size}-${r}-empty`,label:`Label`,placeholder:`Placeholder`,prefix:`https://`,suffix:`.com`,helperText:`Helper Text`,loadingMessage:`Loading...`,errorMessage:`Error Message`,successMessage:`Success`,warningMessage:`Warning Message`,size:t.size,state:t.state,loading:t.loading,disabled:t.disabled})}),(0,d.jsx)(`div`,{className:`pb-[32px]`,children:(0,d.jsx)(o,{id:`${n}-${t.size}-${r}-filled`,label:`Label`,placeholder:`Placeholder`,prefix:`https://`,suffix:`.com`,helperText:`Helper Text`,loadingMessage:`Loading...`,errorMessage:`Error Message`,successMessage:`Success`,warningMessage:`Warning Message`,size:t.size,state:t.state,loading:t.loading,disabled:t.disabled,defaultValue:`example`})})]})]},a)}))})}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    id: "prefix-only-input-group",
    label: "Amount",
    placeholder: "0.00",
    prefix: "€",
    suffix: undefined
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    id: "suffix-only-input-group",
    label: "Weight",
    placeholder: "0",
    prefix: undefined,
    suffix: "kg"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    id: "icon-affix-input-group",
    label: "Email address",
    placeholder: "name@example",
    prefix: <IconAt className="stroke-icon-accent size-4" aria-hidden />,
    suffix: <IconWorld className="stroke-icon-accent size-4" aria-hidden />
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    surface: "onCard"
  },
  render: args => <OnCardStoryShell>
      <InputGroup {...args} />
    </OnCardStoryShell>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
                    <InputGroup id={\`\${state}-\${rowConfig.size}-\${rowIndex}-empty\`} label="Label" placeholder="Placeholder" prefix="https://" suffix=".com" helperText="Helper Text" loadingMessage="Loading..." errorMessage="Error Message" successMessage="Success" warningMessage="Warning Message" size={rowConfig.size} state={rowConfig.state} loading={rowConfig.loading} disabled={rowConfig.disabled} />
                  </div>
                  <div className="pb-[32px]">
                    <InputGroup id={\`\${state}-\${rowConfig.size}-\${rowIndex}-filled\`} label="Label" placeholder="Placeholder" prefix="https://" suffix=".com" helperText="Helper Text" loadingMessage="Loading..." errorMessage="Error Message" successMessage="Success" warningMessage="Warning Message" size={rowConfig.size} state={rowConfig.state} loading={rowConfig.loading} disabled={rowConfig.disabled} defaultValue="example" />
                  </div>
                </div>
              </div>;
        });
      })}
      </div>;
  }
}`,...v.parameters?.docs?.source}}},y=[`Playground`,`PrefixOnly`,`SuffixOnly`,`IconAffixes`,`OnCard`,`Overview`]}))();export{g as IconAffixes,_ as OnCard,v as Overview,p as Playground,m as PrefixOnly,h as SuffixOnly,y as __namedExportsOrder,f as default};