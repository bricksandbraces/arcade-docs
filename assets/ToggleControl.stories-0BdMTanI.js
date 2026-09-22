import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Ds as n,fs as r,t as i,vi as a,yi as o}from"./iframe-Dq9HnTRB.js";import{n as s,t as c}from"./figmaDesign-CO6i5n9C.js";var l,u,d,f,p,m,h,g;e((()=>{l=t(n(),1),i(),s(),u=r(),d={parameters:{design:c(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=4389-7438`)},title:`Inputs & Controls/Toggle/ToggleControl`,component:a,tags:[`autodocs`],argTypes:{size:{control:`inline-radio`,options:o},selected:{control:`boolean`},disabled:{control:`boolean`}}},f=e=>{let[t,n]=l.useState(e.selected||!1);return l.useEffect(()=>{n(e.selected)},[e.selected]),(0,u.jsx)(a,{...e,selected:t,onClick:()=>!e.disabled&&n(!t)})},p={render:e=>(0,u.jsx)(f,{...e}),args:{size:`default`,selected:!1,disabled:!1,"aria-label":`Toggle setting`}},m=e=>{let[t,n]=l.useState(e.selected);return(0,u.jsx)(a,{size:e.size,disabled:e.disabled,selected:t,"aria-label":`Toggle`,onClick:()=>!e.disabled&&n(!t)})},h={parameters:{controls:{disable:!0}},render:()=>(0,u.jsxs)(`div`,{className:`gap-xlg flex flex-col`,children:[(0,u.jsxs)(`div`,{className:`gap-xlg grid grid-cols-[minmax(8rem,auto)_1fr_1fr] items-center`,children:[(0,u.jsx)(`span`,{}),(0,u.jsx)(`span`,{className:`typography-body-small text-text-accent`,children:`Default`}),(0,u.jsx)(`span`,{className:`typography-body-small text-text-accent`,children:`Small`})]}),[{label:`Off`,selected:!1},{label:`On`,selected:!0},{label:`Disabled`,selected:!1,disabled:!0},{label:`Disabled · on`,selected:!0,disabled:!0}].map(e=>(0,u.jsxs)(`div`,{className:`gap-xlg grid grid-cols-[minmax(8rem,auto)_1fr_1fr] items-center`,children:[(0,u.jsx)(`span`,{className:`typography-body-small text-text`,children:e.label}),(0,u.jsx)(m,{size:`default`,selected:e.selected,disabled:e.disabled}),(0,u.jsx)(m,{size:`small`,selected:e.selected,disabled:e.disabled})]},e.label))]})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <PlaygroundToggleControl {...args} />,
  args: {
    size: "default",
    selected: false,
    disabled: false,
    "aria-label": "Toggle setting"
  }
}`,...p.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
            <OverviewToggleControlCell size="default" selected={row.selected} disabled={row.disabled} />
            <OverviewToggleControlCell size="small" selected={row.selected} disabled={row.disabled} />
          </div>)}
      </div>;
  }
}`,...h.parameters?.docs?.source}}},g=[`Playground`,`Overview`]}))();export{h as Overview,p as Playground,g as __namedExportsOrder,d as default};