import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as I}from"./index-0yr9KlQE.js";import{bg as O,bh as a}from"./ContextMenuList-5laOttQ9.js";import"./index-tymuTqDW.js";import"./index-DotmK1FS.js";import"./index-ChaIqHV-.js";import"./borders-N_bRvfGw.js";import"./colors-mvAPBTAn.js";const B={title:"WIP Components/ToggleControl",component:a,argTypes:{size:{control:"inline-radio",options:O},selected:{control:"boolean"},disabled:{control:"boolean"}}},s={args:{size:"default",selected:!1,disabled:!1,"aria-label":"Toggle setting"}},l={args:{"aria-label":"Toggle setting"}},t={render:()=>e.jsxs("div",{className:"gap-md flex items-center",children:[e.jsxs("div",{className:"gap-sm flex flex-col items-center",children:[e.jsx("span",{className:"typography-body-small text-text-accent",children:"Small"}),e.jsx(a,{size:"small","aria-label":"Small toggle"})]}),e.jsxs("div",{className:"gap-sm flex flex-col items-center",children:[e.jsx("span",{className:"typography-body-small text-text-accent",children:"Default"}),e.jsx(a,{size:"default","aria-label":"Default toggle"})]})]})},r={render:()=>e.jsxs("div",{className:"gap-md flex items-center",children:[e.jsxs("div",{className:"gap-sm flex flex-col items-center",children:[e.jsx("span",{className:"typography-body-small text-text-accent",children:"Small Selected"}),e.jsx(a,{size:"small",selected:!0,"aria-label":"Small selected toggle"})]}),e.jsxs("div",{className:"gap-sm flex flex-col items-center",children:[e.jsx("span",{className:"typography-body-small text-text-accent",children:"Default Selected"}),e.jsx(a,{size:"default",selected:!0,"aria-label":"Default selected toggle"})]})]})},c={render:()=>e.jsxs("div",{className:"gap-md flex items-center",children:[e.jsxs("div",{className:"gap-sm flex flex-col items-center",children:[e.jsx("span",{className:"typography-body-small text-text-accent",children:"Disabled"}),e.jsx(a,{disabled:!0,"aria-label":"Disabled toggle"})]}),e.jsxs("div",{className:"gap-sm flex flex-col items-center",children:[e.jsx("span",{className:"typography-body-small text-text-accent",children:"Disabled Selected"}),e.jsx(a,{disabled:!0,selected:!0,"aria-label":"Disabled selected toggle"})]})]})},P=()=>{const[o,C]=I.useState(!1);return e.jsxs("div",{className:"gap-md flex flex-col items-center",children:[e.jsxs("span",{className:"typography-body-small text-text-accent",children:["Current state: ",o?"Selected":"Not selected"]}),e.jsx(a,{selected:o,onClick:()=>C(!o),"aria-label":"Interactive toggle"})]})},n={render:()=>e.jsx(P,{})};var d,i,m;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    size: "default",
    selected: false,
    disabled: false,
    "aria-label": "Toggle setting"
  }
}`,...(m=(i=s.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var g,p,x;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    "aria-label": "Toggle setting"
  }
}`,...(x=(p=l.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var f,b,u;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(u=(b=t.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};var y,v,N;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div className="gap-md flex items-center">
      <div className="gap-sm flex flex-col items-center">
        <span className="typography-body-small text-text-accent">
          Small Selected
        </span>
        <ToggleControl size="small" selected aria-label="Small selected toggle" />
      </div>
      <div className="gap-sm flex flex-col items-center">
        <span className="typography-body-small text-text-accent">
          Default Selected
        </span>
        <ToggleControl size="default" selected aria-label="Default selected toggle" />
      </div>
    </div>
}`,...(N=(v=r.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};var h,S,j;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(j=(S=c.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var D,T,z;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <InteractiveToggle />
}`,...(z=(T=n.parameters)==null?void 0:T.docs)==null?void 0:z.source}}};const F=["Playground","Overview","Sizes","Selected","Disabled","Interactive"];export{c as Disabled,n as Interactive,l as Overview,s as Playground,r as Selected,t as Sizes,F as __namedExportsOrder,B as default};
