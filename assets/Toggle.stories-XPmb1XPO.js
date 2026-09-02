import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Po as n,Tt as r,t as i,wt as a,yn as o,yo as s}from"./iframe-BXRL_JkN.js";var c,l,u,d,f,p,m,h,g;e((()=>{c=t(n(),1),i(),l=s(),u={title:`Inputs & Controls/Toggle`,component:a,tags:[`autodocs`],argTypes:{size:{control:`inline-radio`,options:r},selected:{control:`boolean`},disabled:{control:`boolean`},label:{control:`text`}},parameters:{docs:{description:{component:`Switch for binary on/off settings that apply immediately. Use in preference panels where changes take effect without a save step.`}}}},d=e=>{let[t,n]=c.useState(e.selected||!1);return(0,l.jsx)(a,{...e,selected:t,onClick:()=>!e.disabled&&n(!t)})},f={render:e=>(0,l.jsx)(d,{...e}),args:{size:`default`,selected:!1,disabled:!1,label:`Label`}},p=e=>{let[t,n]=c.useState(e.selected);return(0,l.jsx)(a,{size:e.size,disabled:e.disabled,selected:t,label:e.label,onClick:()=>!e.disabled&&n(!t)})},m={parameters:{controls:{disable:!0}},render:()=>(0,l.jsxs)(`div`,{className:`gap-xlg flex flex-col`,children:[(0,l.jsxs)(`div`,{className:`gap-xlg grid grid-cols-[minmax(8rem,auto)_1fr_1fr] items-center`,children:[(0,l.jsx)(`span`,{}),(0,l.jsx)(`span`,{className:`typography-body-small text-text-accent`,children:`Default`}),(0,l.jsx)(`span`,{className:`typography-body-small text-text-accent`,children:`Small`})]}),[{label:`Off`,selected:!1},{label:`On`,selected:!0},{label:`Disabled`,selected:!1,disabled:!0},{label:`Disabled · on`,selected:!0,disabled:!0}].map(e=>(0,l.jsxs)(`div`,{className:`gap-xlg grid grid-cols-[minmax(8rem,auto)_1fr_1fr] items-center`,children:[(0,l.jsx)(`span`,{className:`typography-body-small text-text`,children:e.label}),(0,l.jsx)(p,{size:`default`,selected:e.selected,disabled:e.disabled,label:`Toggle`}),(0,l.jsx)(p,{size:`small`,selected:e.selected,disabled:e.disabled,label:`Toggle`})]},e.label))]})},h={render:()=>(0,l.jsx)(o,{})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <PlaygroundToggle {...args} />,
  args: {
    size: "default",
    selected: false,
    disabled: false,
    label: "Label"
  }
}`,...f.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const rows: {
      label: string;
      selected: boolean;
      disabled?: boolean;
    }[] = [{
      label: "Off",
      selected: false
    }, {
      label: "On",
      selected: true
    }, {
      label: "Disabled",
      selected: false,
      disabled: true
    }, {
      label: "Disabled · on",
      selected: true,
      disabled: true
    }];
    return <div className="gap-xlg flex flex-col">
        <div className="gap-xlg grid grid-cols-[minmax(8rem,auto)_1fr_1fr] items-center">
          <span />
          <span className="typography-body-small text-text-accent">
            Default
          </span>
          <span className="typography-body-small text-text-accent">Small</span>
        </div>
        {rows.map(row => <div key={row.label} className="gap-xlg grid grid-cols-[minmax(8rem,auto)_1fr_1fr] items-center">
            <span className="typography-body-small text-text">{row.label}</span>
            <OverviewToggleCell size="default" selected={row.selected} disabled={row.disabled} label="Toggle" />
            <OverviewToggleCell size="small" selected={row.selected} disabled={row.disabled} label="Toggle" />
          </div>)}
      </div>;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <ToggleSkeleton />
}`,...h.parameters?.docs?.source}}},g=[`Playground`,`Overview`,`Skeleton`]}))();export{m as Overview,f as Playground,h as Skeleton,g as __namedExportsOrder,u as default};