import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{aE as b,aL as g,aM as h}from"./ContextMenuList-BnwLxK8t.js";import{r as l}from"./index-CY-HDqYb.js";import{a as S}from"./index-B-lxVbXh.js";import"./index-A6zbrgSY.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";import"./index-ZRCHFLd-.js";import"./sizes-BpUsT7VU.js";import"./colors-CoOIoG7W.js";import"./v4-CtRu48qb.js";const y=e=>{S("onChange")(e)},O={title:"Hendrik Supervision/Slider/SliderControl",component:b,args:{value:50,min:0,max:100,step:1,disabled:!1,showTooltip:!1,variant:"bar",size:"md",onChange:y}},x=e=>{const[a,n]=l.useState(e.value??50);return l.useEffect(()=>{n(e.value??50)},[e.value]),o.jsx(b,{...e,value:a,onChange:t=>{var r;n(t),(r=e.onChange)==null||r.call(e,t)}})},i={render:e=>o.jsx(x,{...e}),argTypes:{variant:{description:"Bar (vertical handle) or Dot (circular handle)",control:{type:"inline-radio"},options:h},size:{description:"Track and handle scale",control:{type:"inline-radio"},options:g},value:{control:{type:"range",min:0,max:100,step:1}},min:{control:{type:"number"}},max:{control:{type:"number"}},step:{control:{type:"number"}},disabled:{control:"boolean"},showTooltip:{description:"Value tooltip under the handle; visible while dragging (active) or when the range input matches :focus-visible",control:"boolean"},tooltipFormat:{control:{disable:!0}},onChange:{control:{disable:!0}}}},f=[...g].toReversed().flatMap(e=>[{size:e,disabled:!1},{size:e,disabled:!0}]),s={parameters:{controls:{disable:!0}},render:e=>{const a=h;return o.jsx("div",{className:"gap-xlg grid",style:{display:"grid",gridTemplateColumns:`repeat(${a.length}, minmax(0, 1fr))`},children:f.map((n,t)=>a.map((r,w)=>{const C=`${r}-${n.size}-${n.disabled?"disabled":"enabled"}`;return o.jsxs("div",{style:{gridColumn:`${w+1} / span 1`,gridRow:`${t+1} / span 1`},children:[e.showLabels&&o.jsxs("p",{className:"typography-body-small text-text",children:["variant=",r,", size=",n.size,n.disabled?", disabled":", enabled"]}),o.jsx(x,{value:50,min:0,max:100,step:1,variant:r,size:n.size,disabled:n.disabled,onChange:y})]},C)}))})},args:{showLabels:!1}};var d,p,c;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(c=(p=i.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var m,u,v;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(v=(u=s.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};const W=["Playground","Overview"];export{s as Overview,i as Playground,W as __namedExportsOrder,O as default};
