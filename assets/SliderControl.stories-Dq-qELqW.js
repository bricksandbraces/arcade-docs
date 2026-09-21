import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{$n as n,Ds as r,Qn as i,fs as a,in as o,t as s}from"./iframe-3giZHg2a.js";import{n as c,t as l}from"./figmaDesign-CO6i5n9C.js";var u,d,f,p,m,h,g,_,v,y;e((()=>{s(),u=t(r(),1),c(),d=a(),{action:f}=__STORYBOOK_MODULE_ACTIONS__,p=e=>{f(`onChange`)(e)},m={parameters:{design:l(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=4398-1111`)},title:`Inputs & Controls/Slider/SliderControl`,component:o,tags:[`autodocs`],args:{value:50,min:0,max:100,step:1,disabled:!1,showTooltip:!1,variant:`bar`,size:`md`,"aria-label":`Slider`,onChange:p}},h=e=>{let[t,n]=(0,u.useState)(e.value??50);return(0,u.useEffect)(()=>{n(e.value??50)},[e.value]),(0,d.jsx)(o,{...e,value:t,onChange:t=>{n(t),e.onChange?.(t)}})},g={render:e=>(0,d.jsx)(h,{...e}),argTypes:{variant:{description:`Bar (vertical handle) or Dot (circular handle)`,control:{type:`inline-radio`},options:n},size:{description:`Track and handle scale`,control:{type:`inline-radio`},options:i},value:{control:{type:`range`,min:0,max:100,step:1}},min:{control:{type:`number`}},max:{control:{type:`number`}},step:{control:{type:`number`}},disabled:{control:`boolean`},showTooltip:{description:`Value tooltip under the handle; visible while dragging (active) or when the range input matches :focus-visible`,control:`boolean`},tooltipFormat:{control:{disable:!0}},onChange:{control:{disable:!0}}}},_=[...i].toReversed().flatMap(e=>[{size:e,disabled:!1},{size:e,disabled:!0}]),v={parameters:{controls:{disable:!0}},render:e=>{let t=n;return(0,d.jsx)(`div`,{className:`gap-xlg grid`,style:{display:`grid`,gridTemplateColumns:`repeat(${t.length}, minmax(0, 1fr))`},children:_.map((n,r)=>t.map((t,i)=>{let a=`${t}-${n.size}-${n.disabled?`disabled`:`enabled`}`;return(0,d.jsxs)(`div`,{style:{gridColumn:`${i+1} / span 1`,gridRow:`${r+1} / span 1`},children:[e.showLabels&&(0,d.jsxs)(`p`,{className:`typography-body-small text-text`,children:[`variant=`,t,`, size=`,n.size,n.disabled?`, disabled`:`, enabled`]}),(0,d.jsx)(h,{value:50,min:0,max:100,step:1,variant:t,size:n.size,disabled:n.disabled,onChange:p,"aria-label":`Slider ${t} ${n.size}`})]},a)}))})},args:{showLabels:!1}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <SliderControlWithState {...args} />,
  argTypes: {
    variant: {
      description: "Bar (vertical handle) or Dot (circular handle)",
      control: {
        type: "inline-radio"
      },
      options: SliderControlVariants
    },
    size: {
      description: "Track and handle scale",
      control: {
        type: "inline-radio"
      },
      options: SliderControlSizes
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
    showTooltip: {
      description: "Value tooltip under the handle; visible while dragging (active) or when the range input matches :focus-visible",
      control: "boolean"
    },
    tooltipFormat: {
      control: {
        disable: true
      }
    },
    onChange: {
      control: {
        disable: true
      }
    }
  }
}`,...g.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
        return overviewVariants.map((variant, columnIndex) => {
          const key = \`\${variant}-\${rowConfig.size}-\${rowConfig.disabled ? "disabled" : "enabled"}\`;
          return <div key={key} style={{
            gridColumn: \`\${columnIndex + 1} / span 1\`,
            gridRow: \`\${rowIndex + 1} / span 1\`
          }}>
                {args.showLabels && <p className="typography-body-small text-text">
                    variant={variant}, size={rowConfig.size}
                    {rowConfig.disabled ? ", disabled" : ", enabled"}
                  </p>}
                <SliderControlWithState value={50} min={0} max={100} step={1} variant={variant} size={rowConfig.size} disabled={rowConfig.disabled} onChange={onChangeAction} aria-label={\`Slider \${variant} \${rowConfig.size}\`} />
              </div>;
        });
      })}
      </div>;
  },
  args: {
    showLabels: false
  }
}`,...v.parameters?.docs?.source}}},y=[`Playground`,`Overview`]}))();export{v as Overview,g as Playground,y as __namedExportsOrder,m as default};