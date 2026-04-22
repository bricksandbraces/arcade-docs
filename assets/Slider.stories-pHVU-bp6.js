import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{aL as w,aM as $,aN as C,aO as f}from"./ContextMenu-ByChsCan.js";import{r as b}from"./index-CY-HDqYb.js";import{a as k}from"./index-B-lxVbXh.js";import"./index-A6zbrgSY.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";import"./v4-CtRu48qb.js";const d=e=>{k("onChange")(e)},W={title:"Hendrik Supervision/Slider",component:w,args:{id:"slider-playground",label:"Label",value:50,min:0,max:100,step:1,disabled:!1,state:"default",errorMessage:void 0,warningMessage:void 0,helperText:void 0,hideLabel:!1,sliderVariant:"bar",sliderSize:"md",showTooltip:!1,onChange:d}},p=e=>{const[o,n]=b.useState(e.value??50);return b.useEffect(()=>{n(e.value??50)},[e.value]),a.jsx(w,{...e,value:o,onChange:t=>{var r;n(t),(r=e.onChange)==null||r.call(e,t)}})},s={render:e=>a.jsx(p,{...e}),argTypes:{sliderVariant:{description:"Bar or Dot SliderControl",control:{type:"inline-radio"},options:f},sliderSize:{description:"Track and handle scale",control:{type:"inline-radio"},options:C},state:{control:{type:"inline-radio"},options:$},value:{control:{type:"range",min:0,max:100,step:1}},min:{control:{type:"number"}},max:{control:{type:"number"}},step:{control:{type:"number"}},disabled:{control:"boolean"},hideLabel:{control:"boolean"},showTooltip:{description:"Value tooltip on SliderControl; while dragging (active) or when the range input matches :focus-visible",control:"boolean"},tooltipFormat:{control:{disable:!0}},label:{control:"text"},errorMessage:{control:"text"},warningMessage:{control:"text"},helperText:{control:"text"},onChange:{control:{disable:!0}},id:{control:{disable:!0}}}},z=[...[...C].toReversed().flatMap(e=>[{kind:"matrix",size:e,disabled:!1},{kind:"matrix",size:e,disabled:!0}]),{kind:"message",messageState:"error"},{kind:"message",messageState:"warning"}],i={parameters:{controls:{disable:!0}},render:e=>{const o=f;return a.jsx("div",{className:"gap-xlg grid",style:{display:"grid",gridTemplateColumns:`repeat(${o.length}, minmax(0, 1fr))`},children:z.map((n,t)=>o.map((r,c)=>{if(n.kind==="matrix"){const g=`${r}-${n.size}-${n.disabled?"disabled":"enabled"}`;return a.jsxs("div",{style:{gridColumn:`${c+1} / span 1`,gridRow:`${t+1} / span 1`},children:[e.showLabels&&a.jsxs("p",{className:"typography-body-small text-text",children:["variant=",r,", size=",n.size,n.disabled?", disabled":", enabled"]}),a.jsx(p,{id:`overview-slider-${g}`,label:"Label",value:50,min:0,max:100,step:1,state:"default",disabled:n.disabled,sliderVariant:r,sliderSize:n.size,onChange:d})]},g)}const m=`${n.messageState}-${r}`,l=n.messageState==="error";return a.jsxs("div",{style:{gridColumn:`${c+1} / span 1`,gridRow:`${t+1} / span 1`},children:[e.showLabels&&a.jsx("p",{className:"typography-body-small text-text",children:`variant=${r}, size=md, ${n.messageState}`}),a.jsx(p,{id:`overview-slider-${m}`,label:"Label",value:50,min:0,max:100,step:1,state:l?"error":"warning",errorMessage:l?"Error Message":void 0,warningMessage:l?void 0:"Warning Message",disabled:!1,sliderVariant:r,sliderSize:"md",onChange:d})]},m)}))})},args:{showLabels:!1}};var u,v,h;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(h=(v=s.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var x,y,S;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(S=(y=i.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};const I=["Playground","Overview"];export{i as Overview,s as Playground,I as __namedExportsOrder,W as default};
