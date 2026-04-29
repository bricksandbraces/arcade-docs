import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Di as n,Et as r,Hi as i,Tt as a,t as o}from"./iframe-Bpv7bA22.js";var s,c,l,u,d,f,p,m;e((()=>{s=t(i(),1),o(),c=n(),l={title:`Components/Toggle`,component:a,tags:[`autodocs`],argTypes:{size:{control:`inline-radio`,options:r},selected:{control:`boolean`},disabled:{control:`boolean`},label:{control:`text`}},parameters:{docs:{description:{component:`Switch for binary on/off settings that apply immediately. Use in preference panels where changes take effect without a save step.`}}}},u=e=>{let[t,n]=s.useState(e.selected||!1);return(0,c.jsx)(a,{...e,selected:t,onClick:()=>!e.disabled&&n(!t)})},d={render:e=>(0,c.jsx)(u,{...e}),args:{size:`default`,selected:!1,disabled:!1,label:`Label`}},f=e=>{let[t,n]=s.useState(e.selected);return(0,c.jsx)(a,{size:e.size,disabled:e.disabled,selected:t,label:e.label,onClick:()=>!e.disabled&&n(!t)})},p={parameters:{controls:{disable:!0}},render:()=>(0,c.jsxs)(`div`,{className:`gap-xlg flex flex-col`,children:[(0,c.jsxs)(`div`,{className:`gap-xlg grid grid-cols-[minmax(8rem,auto)_1fr_1fr] items-center`,children:[(0,c.jsx)(`span`,{}),(0,c.jsx)(`span`,{className:`typography-body-small text-text-accent`,children:`Default`}),(0,c.jsx)(`span`,{className:`typography-body-small text-text-accent`,children:`Small`})]}),[{label:`Off`,selected:!1},{label:`On`,selected:!0},{label:`Disabled`,selected:!1,disabled:!0},{label:`Disabled · on`,selected:!0,disabled:!0}].map(e=>(0,c.jsxs)(`div`,{className:`gap-xlg grid grid-cols-[minmax(8rem,auto)_1fr_1fr] items-center`,children:[(0,c.jsx)(`span`,{className:`typography-body-small text-text`,children:e.label}),(0,c.jsx)(f,{size:`default`,selected:e.selected,disabled:e.disabled,label:`Toggle`}),(0,c.jsx)(f,{size:`small`,selected:e.selected,disabled:e.disabled,label:`Toggle`})]},e.label))]})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <PlaygroundToggle {...args} />,
  args: {
    size: "default",
    selected: false,
    disabled: false,
    label: "Label"
  }
}`,...d.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m=[`Playground`,`Overview`]}))();export{p as Overview,d as Playground,m as __namedExportsOrder,l as default};