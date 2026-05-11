import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Dt as n,Ot as r,Tt as i,ea as a,ha as o,t as s,wt as c}from"./iframe-D3A0Qfxl.js";var l,u,d,f,p,m,h,g,_,v;e((()=>{s(),l=t(o(),1),u=a(),{action:d}=__STORYBOOK_MODULE_ACTIONS__,f=e=>{d(`onChange`)(e)},p={title:`Components/Slider`,component:c,tags:[`autodocs`],args:{id:`slider-playground`,label:`Label`,value:50,min:0,max:100,step:1,disabled:!1,state:`default`,errorMessage:void 0,warningMessage:void 0,helperText:void 0,hideLabel:!1,sliderVariant:`bar`,sliderSize:`md`,showTooltip:!1,onChange:f},parameters:{docs:{description:{component:`Numeric range control with a draggable thumb. Use for bounded values with a clear min/max like volume, zoom, or percentages.`}}}},m=e=>{let[t,n]=(0,l.useState)(e.value??50);return(0,l.useEffect)(()=>{n(e.value??50)},[e.value]),(0,u.jsx)(c,{...e,value:t,onChange:t=>{n(t),e.onChange?.(t)}})},h={render:e=>(0,u.jsx)(m,{...e}),argTypes:{sliderVariant:{description:`Bar or Dot SliderControl`,control:{type:`inline-radio`},options:r},sliderSize:{description:`Track and handle scale`,control:{type:`inline-radio`},options:n},state:{control:{type:`inline-radio`},options:i},value:{control:{type:`range`,min:0,max:100,step:1}},min:{control:{type:`number`}},max:{control:{type:`number`}},step:{control:{type:`number`}},disabled:{control:`boolean`},hideLabel:{control:`boolean`},showTooltip:{description:`Value tooltip on SliderControl; while dragging (active) or when the range input matches :focus-visible`,control:`boolean`},tooltipFormat:{control:{disable:!0}},label:{control:`text`},errorMessage:{control:`text`},warningMessage:{control:`text`},helperText:{control:`text`},onChange:{control:{disable:!0}},id:{control:{disable:!0}}}},g=[...[...n].toReversed().flatMap(e=>[{kind:`matrix`,size:e,disabled:!1},{kind:`matrix`,size:e,disabled:!0}]),{kind:`message`,messageState:`error`},{kind:`message`,messageState:`warning`}],_={parameters:{controls:{disable:!0}},render:e=>{let t=r;return(0,u.jsx)(`div`,{className:`gap-xlg grid`,style:{display:`grid`,gridTemplateColumns:`repeat(${t.length}, minmax(0, 1fr))`},children:g.map((n,r)=>t.map((t,i)=>{if(n.kind===`matrix`){let a=`${t}-${n.size}-${n.disabled?`disabled`:`enabled`}`;return(0,u.jsxs)(`div`,{style:{gridColumn:`${i+1} / span 1`,gridRow:`${r+1} / span 1`},children:[e.showLabels&&(0,u.jsxs)(`p`,{className:`typography-body-small text-text`,children:[`variant=`,t,`, size=`,n.size,n.disabled?`, disabled`:`, enabled`]}),(0,u.jsx)(m,{id:`overview-slider-${a}`,label:`Label`,value:50,min:0,max:100,step:1,state:`default`,disabled:n.disabled,sliderVariant:t,sliderSize:n.size,onChange:f})]},a)}let a=`${n.messageState}-${t}`,o=n.messageState===`error`;return(0,u.jsxs)(`div`,{style:{gridColumn:`${i+1} / span 1`,gridRow:`${r+1} / span 1`},children:[e.showLabels&&(0,u.jsx)(`p`,{className:`typography-body-small text-text`,children:`variant=${t}, size=md, ${n.messageState}`}),(0,u.jsx)(m,{id:`overview-slider-${a}`,label:`Label`,value:50,min:0,max:100,step:1,state:o?`error`:`warning`,errorMessage:o?`Error Message`:void 0,warningMessage:o?void 0:`Warning Message`,disabled:!1,sliderVariant:t,sliderSize:`md`,onChange:f})]},a)}))})},args:{showLabels:!1}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <SliderWithState {...args} />,
  argTypes: {
    sliderVariant: {
      description: "Bar or Dot SliderControl",
      control: {
        type: "inline-radio"
      },
      options: SliderControlVariants
    },
    sliderSize: {
      description: "Track and handle scale",
      control: {
        type: "inline-radio"
      },
      options: SliderControlSizes
    },
    state: {
      control: {
        type: "inline-radio"
      },
      options: SliderStates
    },
    value: {
      control: {
        type: "range",
        min: 0,
        max: 100,
        step: 1
      }
    },
    min: {
      control: {
        type: "number"
      }
    },
    max: {
      control: {
        type: "number"
      }
    },
    step: {
      control: {
        type: "number"
      }
    },
    disabled: {
      control: "boolean"
    },
    hideLabel: {
      control: "boolean"
    },
    showTooltip: {
      description: "Value tooltip on SliderControl; while dragging (active) or when the range input matches :focus-visible",
      control: "boolean"
    },
    tooltipFormat: {
      control: {
        disable: true
      }
    },
    label: {
      control: "text"
    },
    errorMessage: {
      control: "text"
    },
    warningMessage: {
      control: "text"
    },
    helperText: {
      control: "text"
    },
    onChange: {
      control: {
        disable: true
      }
    },
    id: {
      control: {
        disable: true
      }
    }
  }
}`,...h.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: args => {
    const overviewVariants = SliderControlVariants;
    return <div className="gap-xlg grid" style={{
      display: "grid",
      gridTemplateColumns: \`repeat(\${overviewVariants.length}, minmax(0, 1fr))\`
    }}>
        {overviewRows.map((rowConfig, rowIndex) => {
        return overviewVariants.map((sliderVariant, columnIndex) => {
          if (rowConfig.kind === "matrix") {
            const key = \`\${sliderVariant}-\${rowConfig.size}-\${rowConfig.disabled ? "disabled" : "enabled"}\`;
            return <div key={key} style={{
              gridColumn: \`\${columnIndex + 1} / span 1\`,
              gridRow: \`\${rowIndex + 1} / span 1\`
            }}>
                  {args.showLabels && <p className="typography-body-small text-text">
                      variant={sliderVariant}, size={rowConfig.size}
                      {rowConfig.disabled ? ", disabled" : ", enabled"}
                    </p>}
                  <SliderWithState id={\`overview-slider-\${key}\`} label="Label" value={50} min={0} max={100} step={1} state="default" disabled={rowConfig.disabled} sliderVariant={sliderVariant} sliderSize={rowConfig.size} onChange={onChangeAction} />
                </div>;
          }
          const key = \`\${rowConfig.messageState}-\${sliderVariant}\`;
          const isError = rowConfig.messageState === "error";
          return <div key={key} style={{
            gridColumn: \`\${columnIndex + 1} / span 1\`,
            gridRow: \`\${rowIndex + 1} / span 1\`
          }}>
                {args.showLabels && <p className="typography-body-small text-text">
                    {\`variant=\${sliderVariant}, size=md, \${rowConfig.messageState}\`}
                  </p>}
                <SliderWithState id={\`overview-slider-\${key}\`} label="Label" value={50} min={0} max={100} step={1} state={isError ? "error" : "warning"} errorMessage={isError ? "Error Message" : undefined} warningMessage={isError ? undefined : "Warning Message"} disabled={false} sliderVariant={sliderVariant} sliderSize="md" onChange={onChangeAction} />
              </div>;
        });
      })}
      </div>;
  },
  args: {
    showLabels: false
  }
}`,..._.parameters?.docs?.source}}},v=[`Playground`,`Overview`]}))();export{_ as Overview,h as Playground,v as __namedExportsOrder,p as default};