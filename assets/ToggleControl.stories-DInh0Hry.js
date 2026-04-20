import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{R as r}from"./index-CY-HDqYb.js";import{bS as x,bT as d}from"./ContextMenuList-BhPzpHNE.js";import"./index-A6zbrgSY.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";import"./index-ZRCHFLd-.js";import"./sizes-BpUsT7VU.js";import"./colors-CoOIoG7W.js";const z={title:"Components/Toggle/ToggleControl",component:d,argTypes:{size:{control:"inline-radio",options:x},selected:{control:"boolean"},disabled:{control:"boolean"}}},u=e=>{const[l,a]=r.useState(e.selected||!1);return r.useEffect(()=>{a(e.selected)},[e.selected]),s.jsx(d,{...e,selected:l,onClick:()=>!e.disabled&&a(!l)})},t={render:e=>s.jsx(u,{...e}),args:{size:"default",selected:!1,disabled:!1,"aria-label":"Toggle setting"}},o=e=>{const[l,a]=r.useState(e.selected);return s.jsx(d,{size:e.size,disabled:e.disabled,selected:l,"aria-label":"Toggle",onClick:()=>!e.disabled&&a(!l)})},n={parameters:{controls:{disable:!0}},render:()=>{const e=[{label:"Off",selected:!1},{label:"On",selected:!0},{label:"Disabled",selected:!1,disabled:!0},{label:"Disabled · on",selected:!0,disabled:!0}];return s.jsxs("div",{className:"gap-xlg flex flex-col",children:[s.jsxs("div",{className:"gap-xlg grid grid-cols-[minmax(8rem,auto)_1fr_1fr] items-center",children:[s.jsx("span",{}),s.jsx("span",{className:"typography-body-small text-text-accent",children:"Default"}),s.jsx("span",{className:"typography-body-small text-text-accent",children:"Small"})]}),e.map(l=>s.jsxs("div",{className:"gap-xlg grid grid-cols-[minmax(8rem,auto)_1fr_1fr] items-center",children:[s.jsx("span",{className:"typography-body-small text-text",children:l.label}),s.jsx(o,{size:"default",selected:l.selected,disabled:l.disabled}),s.jsx(o,{size:"small",selected:l.selected,disabled:l.disabled})]},l.label))]})}};var i,c,m;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => <PlaygroundToggleControl {...args} />,
  args: {
    size: "default",
    selected: false,
    disabled: false,
    "aria-label": "Toggle setting"
  }
}`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var g,b,p;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(p=(b=n.parameters)==null?void 0:b.docs)==null?void 0:p.source}}};const O=["Playground","Overview"];export{n as Overview,t as Playground,O as __namedExportsOrder,z as default};
