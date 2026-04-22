import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{R as p}from"./index-CY-HDqYb.js";import{bO as x,bP as r}from"./ContextMenu-BIXelnGu.js";import"./index-A6zbrgSY.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";const N={title:"Components/Toggle",component:r,argTypes:{size:{control:"inline-radio",options:x},selected:{control:"boolean"},disabled:{control:"boolean"},label:{control:"text"}}},u=e=>{const[l,n]=p.useState(e.selected||!1);return s.jsx(r,{...e,selected:l,onClick:()=>!e.disabled&&n(!l)})},a={render:e=>s.jsx(u,{...e}),args:{size:"default",selected:!1,disabled:!1,label:"Label"}},d=e=>{const[l,n]=p.useState(e.selected);return s.jsx(r,{size:e.size,disabled:e.disabled,selected:l,label:e.label,onClick:()=>!e.disabled&&n(!l)})},t={parameters:{controls:{disable:!0}},render:()=>{const e=[{label:"Off",selected:!1},{label:"On",selected:!0},{label:"Disabled",selected:!1,disabled:!0},{label:"Disabled · on",selected:!0,disabled:!0}];return s.jsxs("div",{className:"gap-xlg flex flex-col",children:[s.jsxs("div",{className:"gap-xlg grid grid-cols-[minmax(8rem,auto)_1fr_1fr] items-center",children:[s.jsx("span",{}),s.jsx("span",{className:"typography-body-small text-text-accent",children:"Default"}),s.jsx("span",{className:"typography-body-small text-text-accent",children:"Small"})]}),e.map(l=>s.jsxs("div",{className:"gap-xlg grid grid-cols-[minmax(8rem,auto)_1fr_1fr] items-center",children:[s.jsx("span",{className:"typography-body-small text-text",children:l.label}),s.jsx(d,{size:"default",selected:l.selected,disabled:l.disabled,label:"Toggle"}),s.jsx(d,{size:"small",selected:l.selected,disabled:l.disabled,label:"Toggle"})]},l.label))]})}};var o,c,i;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => <PlaygroundToggle {...args} />,
  args: {
    size: "default",
    selected: false,
    disabled: false,
    label: "Label"
  }
}`,...(i=(c=a.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var m,b,g;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(g=(b=t.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};const O=["Playground","Overview"];export{t as Overview,a as Playground,O as __namedExportsOrder,N as default};
