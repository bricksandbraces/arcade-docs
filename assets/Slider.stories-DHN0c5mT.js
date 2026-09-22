import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{As as n,er as r,hs as i,ht as a,i as o,mt as s,nr as c,tr as l}from"./iframe-YAZ8xM7U.js";import{n as u,t as d}from"./figmaDesign-CO6i5n9C.js";var f,p,m,h,g,_,v,y,b,x,S;e((()=>{o(),f=t(n(),1),u(),p=i(),{action:m}=__STORYBOOK_MODULE_ACTIONS__,h=e=>{m(`onChange`)(e)},g={title:`Inputs & Controls/Slider`,component:s,tags:[`autodocs`],args:{id:`slider-playground`,label:`Label`,value:50,min:0,max:100,step:1,disabled:!1,state:`default`,errorMessage:void 0,warningMessage:void 0,helperText:void 0,hideLabel:!1,sliderVariant:`bar`,sliderSize:`md`,showTooltip:!1,onChange:h},parameters:{design:d(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=4398-1111`),docs:{description:{component:`Numeric range control with a draggable thumb. Use for bounded values with a clear min/max like volume, zoom, or percentages.`}}}},_=e=>{let[t,n]=(0,f.useState)(e.value??50);return(0,f.useEffect)(()=>{n(e.value??50)},[e.value]),(0,p.jsx)(s,{...e,value:t,onChange:t=>{n(t),e.onChange?.(t)}})},v={render:e=>(0,p.jsx)(_,{...e}),argTypes:{sliderVariant:{description:`Bar or Dot SliderControl`,control:{type:`inline-radio`},options:c},sliderSize:{description:`Track and handle scale`,control:{type:`inline-radio`},options:l},state:{control:{type:`inline-radio`},options:a},value:{control:{type:`range`,min:0,max:100,step:1}},min:{control:{type:`number`}},max:{control:{type:`number`}},step:{control:{type:`number`}},disabled:{control:`boolean`},hideLabel:{control:`boolean`},showTooltip:{description:`Value tooltip on SliderControl; while dragging (active) or when the range input matches :focus-visible`,control:`boolean`},tooltipFormat:{control:{disable:!0}},label:{control:`text`},errorMessage:{control:`text`},warningMessage:{control:`text`},helperText:{control:`text`},onChange:{control:{disable:!0}},id:{control:{disable:!0}}}},y=[...[...l].toReversed().flatMap(e=>[{kind:`matrix`,size:e,disabled:!1},{kind:`matrix`,size:e,disabled:!0}]),{kind:`message`,messageState:`error`},{kind:`message`,messageState:`warning`}],b={parameters:{controls:{disable:!0}},render:e=>{let t=c;return(0,p.jsx)(`div`,{className:`gap-xlg grid`,style:{display:`grid`,gridTemplateColumns:`repeat(${t.length}, minmax(0, 1fr))`},children:y.map((n,r)=>t.map((t,i)=>{if(n.kind===`matrix`){let a=`${t}-${n.size}-${n.disabled?`disabled`:`enabled`}`;return(0,p.jsxs)(`div`,{style:{gridColumn:`${i+1} / span 1`,gridRow:`${r+1} / span 1`},children:[e.showLabels&&(0,p.jsxs)(`p`,{className:`typography-body-small text-text`,children:[`variant=`,t,`, size=`,n.size,n.disabled?`, disabled`:`, enabled`]}),(0,p.jsx)(_,{id:`overview-slider-${a}`,label:`Label`,value:50,min:0,max:100,step:1,state:`default`,disabled:n.disabled,sliderVariant:t,sliderSize:n.size,onChange:h})]},a)}let a=`${n.messageState}-${t}`,o=n.messageState===`error`;return(0,p.jsxs)(`div`,{style:{gridColumn:`${i+1} / span 1`,gridRow:`${r+1} / span 1`},children:[e.showLabels&&(0,p.jsx)(`p`,{className:`typography-body-small text-text`,children:`variant=${t}, size=md, ${n.messageState}`}),(0,p.jsx)(_,{id:`overview-slider-${a}`,label:`Label`,value:50,min:0,max:100,step:1,state:o?`error`:`warning`,errorMessage:o?`Error Message`:void 0,warningMessage:o?void 0:`Warning Message`,disabled:!1,sliderVariant:t,sliderSize:`md`,onChange:h})]},a)}))})},args:{showLabels:!1}},x={render:()=>(0,p.jsx)(r,{})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <SliderSkeleton />
}`,...x.parameters?.docs?.source}}},S=[`Playground`,`Overview`,`Skeleton`]}))();export{b as Overview,v as Playground,x as Skeleton,S as __namedExportsOrder,g as default};