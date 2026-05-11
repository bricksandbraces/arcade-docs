import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Jn as n,Tn as r,Yn as i,gr as a,ia as o,t as s,vr as c,ya as l}from"./iframe-CS4X-XGW.js";function u({id:e,rowConfig:t,filled:n}){let[i,a]=(0,d.useState)(n?`de`:null);return(0,f.jsx)(r,{id:e,label:`Label`,title:`Select`,size:t.size,disabled:t.disabled,inline:t.inline,state:t.state,value:i,onChange:a,items:p,helperText:`Helper Text`,errorMessage:`Error Message`,warningMessage:`Warning Message`,successMessage:`Erledigt`})}var d,f,p,m,h,g,_,v;e((()=>{d=t(l(),1),s(),a(),f=o(),p=[{label:`Germany`,value:`de`},{label:`France`,value:`fr`},{label:`Spain`,value:`es`}],m={component:r,title:`Components/Dropdown`,tags:[`autodocs`],args:{title:`Select an option`,size:`medium`,disabled:!1,inline:!1,fullWidth:!1,items:[{label:`Item 1`,value:`item1`},{label:`Item 2`,value:`item2`},{label:`Item 3`,value:`item3`,disabled:!0},{label:`Item 4`,value:`item4`},{label:`Item 5`,value:`item5`},{label:`Item 6`,value:`item6`},{label:`Item 7`,value:`item7`},{label:`Item 8`,value:`item8`},{label:`Item 9`,value:`item9`},{label:`Item 10`,value:`item10`}]},argTypes:{size:{control:`inline-radio`,options:n},disabled:{control:`boolean`},inline:{control:`boolean`},fullWidth:{control:`boolean`},label:{control:`text`},errorMessage:{control:`text`},warningMessage:{control:`text`},successMessage:{control:`text`},helperText:{control:`text`},hideLabel:{control:`boolean`},state:{control:`inline-radio`,options:i}},render:e=>{let[t,n]=(0,d.useState)(null);return(0,f.jsx)(r,{...e,value:t,onChange:n})},parameters:{docs:{description:{component:`Form field for picking one value from a list. Use when choices are short labels; prefer Select for typeahead over many options.`}}}},h={args:{id:`playground-dropdown`,label:`Select Option`,helperText:`Choose one of the available options.`,errorMessage:`Error Message`,warningMessage:`Warning Message`}},g={args:{...h.args,id:`slot-dropdown`,label:`Label`,trailingSlot:(0,f.jsx)(c,{size:10,className:`fill-icon-accent`,"aria-hidden":!0})}},_={parameters:{controls:{disable:!0}},args:{showLabels:!1},render:e=>{let t=n.toReversed().flatMap(e=>[{size:e,disabled:!1,inline:!1,state:`default`},{size:e,disabled:!0,inline:!1,state:`default`},{size:e,disabled:!1,inline:!0,state:`default`},{size:e,disabled:!1,inline:!1,state:`error`},{size:e,disabled:!1,inline:!1,state:`success`}]),r=i;return(0,f.jsx)(`div`,{className:`gap-xlg grid pb-[128px]`,style:{display:`grid`,gridTemplateColumns:`repeat(${r.length}, minmax(0, 1fr))`},children:t.map((t,n)=>r.map((r,i)=>{let a=`${r}-${t.size}-${t.disabled?`disabled`:`enabled`}-${t.state}-${t.inline?`inline`:`block`}`;return(0,f.jsxs)(`div`,{style:{gridColumn:`${i+1} / span 1`,gridRow:`${n+1} / span 1`},children:[e.showLabels?(0,f.jsxs)(`p`,{className:`typography-body-small text-text`,children:[`size=`,t.size,`, state=`,r,t.disabled?`, disabled`:``,t.inline?`, inline`:``,t.state===`default`?``:`, status=${t.state}`]}):null,(0,f.jsxs)(`div`,{className:`gap-sm flex flex-col`,children:[(0,f.jsx)(`div`,{className:`pb-[32px]`,children:(0,f.jsx)(u,{id:`${r}-${t.size}-${n}-empty`,rowConfig:t,filled:!1})}),(0,f.jsx)(`div`,{className:`pb-[32px]`,children:(0,f.jsx)(u,{id:`${r}-${t.size}-${n}-filled`,rowConfig:t,filled:!0})})]})]},a)}))})}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    id: "playground-dropdown",
    label: "Select Option",
    helperText: "Choose one of the available options.",
    errorMessage: "Error Message",
    warningMessage: "Warning Message"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    ...Playground.args,
    id: "slot-dropdown",
    label: "Label",
    trailingSlot: <IconCircleFilled size={10} className="fill-icon-accent" aria-hidden />
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v=[`Playground`,`Slot`,`Overview`]}))();export{_ as Overview,h as Playground,g as Slot,v as __namedExportsOrder,m as default};