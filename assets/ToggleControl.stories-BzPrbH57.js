import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as c}from"./index-CY-HDqYb.js";import{be as y,bf as s}from"./ContextMenuList-Cie4wAje.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";import"./index-ZRCHFLd-.js";import"./borders-N_bRvfGw.js";import"./colors-mvAPBTAn.js";const P={title:"F/Toggle/ToggleControl",component:s,argTypes:{size:{control:"inline-radio",options:y},selected:{control:"boolean"},disabled:{control:"boolean"}}},N=a=>{const[o,n]=c.useState(a.selected||!1);return c.useEffect(()=>{n(a.selected)},[a.selected]),e.jsx(s,{...a,selected:o,onClick:()=>!a.disabled&&n(!o)})},l={render:a=>e.jsx(N,{...a}),args:{size:"default",selected:!1,disabled:!1,"aria-label":"Toggle setting"}},t={render:()=>e.jsxs("div",{className:"gap-md flex items-center",children:[e.jsxs("div",{className:"gap-sm flex flex-col items-center",children:[e.jsx("span",{className:"typography-body-small text-text-accent",children:"Small"}),e.jsx(s,{size:"small","aria-label":"Small toggle"})]}),e.jsxs("div",{className:"gap-sm flex flex-col items-center",children:[e.jsx("span",{className:"typography-body-small text-text-accent",children:"Default"}),e.jsx(s,{size:"default","aria-label":"Default toggle"})]})]})},r={render:()=>e.jsxs("div",{className:"gap-md flex items-center",children:[e.jsxs("div",{className:"gap-sm flex flex-col items-center",children:[e.jsx("span",{className:"typography-body-small text-text-accent",children:"Disabled"}),e.jsx(s,{disabled:!0,"aria-label":"Disabled toggle"})]}),e.jsxs("div",{className:"gap-sm flex flex-col items-center",children:[e.jsx("span",{className:"typography-body-small text-text-accent",children:"Disabled Selected"}),e.jsx(s,{disabled:!0,selected:!0,"aria-label":"Disabled selected toggle"})]})]})};var d,i,m;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <PlaygroundToggleControl {...args} />,
  args: {
    size: "default",
    selected: false,
    disabled: false,
    "aria-label": "Toggle setting"
  }
}`,...(m=(i=l.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var g,p,x;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div className="gap-md flex items-center">
      <div className="gap-sm flex flex-col items-center">
        <span className="typography-body-small text-text-accent">Small</span>
        <ToggleControl size="small" aria-label="Small toggle" />
      </div>
      <div className="gap-sm flex flex-col items-center">
        <span className="typography-body-small text-text-accent">Default</span>
        <ToggleControl size="default" aria-label="Default toggle" />
      </div>
    </div>
}`,...(x=(p=t.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var b,f,u;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div className="gap-md flex items-center">
      <div className="gap-sm flex flex-col items-center">
        <span className="typography-body-small text-text-accent">Disabled</span>
        <ToggleControl disabled aria-label="Disabled toggle" />
      </div>
      <div className="gap-sm flex flex-col items-center">
        <span className="typography-body-small text-text-accent">
          Disabled Selected
        </span>
        <ToggleControl disabled selected aria-label="Disabled selected toggle" />
      </div>
    </div>
}`,...(u=(f=r.parameters)==null?void 0:f.docs)==null?void 0:u.source}}};const E=["Playground","Sizes","Disabled"];export{r as Disabled,l as Playground,t as Sizes,E as __namedExportsOrder,P as default};
