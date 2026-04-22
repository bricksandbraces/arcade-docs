import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{aE as v,bt as g,bu as h}from"./ContextMenu-FljLXSaK.js";import{r as l}from"./index-CY-HDqYb.js";import{a as f}from"./index-B-lxVbXh.js";import"./index-A6zbrgSY.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";import"./v4-CtRu48qb.js";const y=e=>{f("onChange")(e)},I={title:"Components/Slider/SliderControl",component:v,args:{value:50,min:0,max:100,step:1,disabled:!1,showTooltip:!1,variant:"bar",size:"md",onChange:y}},x=e=>{const[o,n]=l.useState(e.value??50);return l.useEffect(()=>{n(e.value??50)},[e.value]),r.jsx(v,{...e,value:o,onChange:t=>{var a;n(t),(a=e.onChange)==null||a.call(e,t)}})},i={render:e=>r.jsx(x,{...e}),argTypes:{variant:{description:"Bar (vertical handle) or Dot (circular handle)",control:{type:"inline-radio"},options:h},size:{description:"Track and handle scale",control:{type:"inline-radio"},options:g},value:{control:{type:"range",min:0,max:100,step:1}},min:{control:{type:"number"}},max:{control:{type:"number"}},step:{control:{type:"number"}},disabled:{control:"boolean"},showTooltip:{description:"Value tooltip under the handle; visible while dragging (active) or when the range input matches :focus-visible",control:"boolean"},tooltipFormat:{control:{disable:!0}},onChange:{control:{disable:!0}}}},S=[...g].toReversed().flatMap(e=>[{size:e,disabled:!1},{size:e,disabled:!0}]),s={parameters:{controls:{disable:!0}},render:e=>{const o=h;return r.jsx("div",{className:"gap-xlg grid",style:{display:"grid",gridTemplateColumns:`repeat(${o.length}, minmax(0, 1fr))`},children:S.map((n,t)=>o.map((a,w)=>{const C=`${a}-${n.size}-${n.disabled?"disabled":"enabled"}`;return r.jsxs("div",{style:{gridColumn:`${w+1} / span 1`,gridRow:`${t+1} / span 1`},children:[e.showLabels&&r.jsxs("p",{className:"typography-body-small text-text",children:["variant=",a,", size=",n.size,n.disabled?", disabled":", enabled"]}),r.jsx(x,{value:50,min:0,max:100,step:1,variant:a,size:n.size,disabled:n.disabled,onChange:y})]},C)}))})},args:{showLabels:!1}};var d,p,c;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(c=(p=i.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var m,u,b;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
                <SliderControlWithState value={50} min={0} max={100} step={1} variant={variant} size={rowConfig.size} disabled={rowConfig.disabled} onChange={onChangeAction} />
              </div>;
        });
      })}
      </div>;
  },
  args: {
    showLabels: false
  }
}`,...(b=(u=s.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};const L=["Playground","Overview"];export{s as Overview,i as Playground,L as __namedExportsOrder,I as default};
