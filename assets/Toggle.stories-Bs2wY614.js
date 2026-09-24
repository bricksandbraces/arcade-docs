import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Ds as n,Hs as r,St as i,er as a,t as o,xt as s}from"./iframe-_Ug8tvbS.js";import{n as c,t as l}from"./figmaDesign-DDiUnvXT.js";var u,d,f,p,m,h,g,_,v;e((()=>{u=t(r(),1),o(),c(),d=n(),f={title:`Inputs & Controls/Toggle`,component:s,tags:[`autodocs`],argTypes:{size:{control:`inline-radio`,options:i},selected:{control:`boolean`},disabled:{control:`boolean`},label:{control:`text`}},parameters:{design:l(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=4389-7438`),docs:{description:{component:`Switch for binary on/off settings that apply immediately. Use in preference panels where changes take effect without a save step.`}}}},p=e=>{let[t,n]=u.useState(e.selected||!1);return(0,d.jsx)(s,{...e,selected:t,onClick:()=>!e.disabled&&n(!t)})},m={render:e=>(0,d.jsx)(p,{...e}),args:{size:`default`,selected:!1,disabled:!1,label:`Label`}},h=e=>{let[t,n]=u.useState(e.selected);return(0,d.jsx)(s,{size:e.size,disabled:e.disabled,selected:t,label:e.label,onClick:()=>!e.disabled&&n(!t)})},g={parameters:{controls:{disable:!0}},render:()=>(0,d.jsxs)(`div`,{className:`gap-xlg flex flex-col`,children:[(0,d.jsxs)(`div`,{className:`gap-xlg grid grid-cols-[minmax(8rem,auto)_1fr_1fr] items-center`,children:[(0,d.jsx)(`span`,{}),(0,d.jsx)(`span`,{className:`typography-body-small text-text-accent`,children:`Default`}),(0,d.jsx)(`span`,{className:`typography-body-small text-text-accent`,children:`Small`})]}),[{label:`Off`,selected:!1},{label:`On`,selected:!0},{label:`Disabled`,selected:!1,disabled:!0},{label:`Disabled · on`,selected:!0,disabled:!0}].map(e=>(0,d.jsxs)(`div`,{className:`gap-xlg grid grid-cols-[minmax(8rem,auto)_1fr_1fr] items-center`,children:[(0,d.jsx)(`span`,{className:`typography-body-small text-text`,children:e.label}),(0,d.jsx)(h,{size:`default`,selected:e.selected,disabled:e.disabled,label:`Toggle`}),(0,d.jsx)(h,{size:`small`,selected:e.selected,disabled:e.disabled,label:`Toggle`})]},e.label))]})},_={render:()=>(0,d.jsx)(a,{})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <PlaygroundToggle {...args} />,
  args: {
    size: "default",
    selected: false,
    disabled: false,
    label: "Label"
  }
}`,...m.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <ToggleSkeleton />
}`,..._.parameters?.docs?.source}}},v=[`Playground`,`Overview`,`Skeleton`]}))();export{g as Overview,m as Playground,_ as Skeleton,v as __namedExportsOrder,f as default};