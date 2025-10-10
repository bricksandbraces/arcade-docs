import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as m}from"./index-0yr9KlQE.js";import{bf as P,bg as l}from"./ContextMenuList-Dq92F7hd.js";import"./index-tymuTqDW.js";import"./index-DotmK1FS.js";import"./index-ChaIqHV-.js";import"./borders-N_bRvfGw.js";import"./colors-mvAPBTAn.js";const G={title:"WIP Components/Toggle",component:l,argTypes:{size:{control:"inline-radio",options:P},selected:{control:"boolean"},disabled:{control:"boolean"},label:{control:"text"}}},w=s=>{const[a,i]=m.useState(s.selected||!1);return e.jsx(l,{...s,selected:a,onClick:()=>!s.disabled&&i(!a)})},t={render:s=>e.jsx(w,{...s}),args:{size:"default",selected:!1,disabled:!1,label:"Label"}},k=s=>{const[a,i]=m.useState(!1);return e.jsx(l,{...s,selected:a,onClick:()=>i(!a)})},c={render:s=>e.jsx(k,{...s}),args:{label:"Toggle setting"}},r={render:()=>e.jsxs("div",{className:"gap-md flex items-center",children:[e.jsxs("div",{className:"gap-sm flex flex-col items-center",children:[e.jsx("span",{className:"typography-body-small text-text-accent",children:"Small"}),e.jsx(l,{size:"small",label:"Small toggle"})]}),e.jsxs("div",{className:"gap-sm flex flex-col items-center",children:[e.jsx("span",{className:"typography-body-small text-text-accent",children:"Default"}),e.jsx(l,{size:"default",label:"Default toggle"})]})]})},n={render:()=>e.jsxs("div",{className:"gap-md flex items-center",children:[e.jsxs("div",{className:"gap-sm flex flex-col items-center",children:[e.jsx("span",{className:"typography-body-small text-text-accent",children:"Small Selected"}),e.jsx(l,{size:"small",selected:!0,label:"Small selected toggle"})]}),e.jsxs("div",{className:"gap-sm flex flex-col items-center",children:[e.jsx("span",{className:"typography-body-small text-text-accent",children:"Default Selected"}),e.jsx(l,{size:"default",selected:!0,label:"Default selected toggle"})]})]})},d={render:()=>e.jsxs("div",{className:"gap-md flex items-center",children:[e.jsxs("div",{className:"gap-sm flex flex-col items-center",children:[e.jsx("span",{className:"typography-body-small text-text-accent",children:"Disabled"}),e.jsx(l,{disabled:!0,label:"Disabled toggle"})]}),e.jsxs("div",{className:"gap-sm flex flex-col items-center",children:[e.jsx("span",{className:"typography-body-small text-text-accent",children:"Disabled Selected"}),e.jsx(l,{disabled:!0,selected:!0,label:"Disabled selected toggle"})]})]})},R=()=>{const[s,a]=m.useState(!1);return e.jsxs("div",{className:"gap-md flex flex-col items-center",children:[e.jsxs("span",{className:"typography-body-small text-text-accent",children:["Current state: ",s?"Selected":"Not selected"]}),e.jsx(l,{selected:s,onClick:()=>a(!s),label:"Interactive toggle"})]})},o={render:()=>e.jsx(R,{})};var g,p,x;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <PlaygroundToggle {...args} />,
  args: {
    size: "default",
    selected: false,
    disabled: false,
    label: "Label"
  }
}`,...(x=(p=t.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var f,b,u;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <OverviewToggle {...args} />,
  args: {
    label: "Toggle setting"
  }
}`,...(u=(b=c.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};var y,v,N;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div className="gap-md flex items-center">
      <div className="gap-sm flex flex-col items-center">
        <span className="typography-body-small text-text-accent">Small</span>
        <Toggle size="small" label="Small toggle" />
      </div>
      <div className="gap-sm flex flex-col items-center">
        <span className="typography-body-small text-text-accent">Default</span>
        <Toggle size="default" label="Default toggle" />
      </div>
    </div>
}`,...(N=(v=r.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};var S,j,h;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div className="gap-md flex items-center">
      <div className="gap-sm flex flex-col items-center">
        <span className="typography-body-small text-text-accent">
          Small Selected
        </span>
        <Toggle size="small" selected label="Small selected toggle" />
      </div>
      <div className="gap-sm flex flex-col items-center">
        <span className="typography-body-small text-text-accent">
          Default Selected
        </span>
        <Toggle size="default" selected label="Default selected toggle" />
      </div>
    </div>
}`,...(h=(j=n.parameters)==null?void 0:j.docs)==null?void 0:h.source}}};var D,T,z;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div className="gap-md flex items-center">
      <div className="gap-sm flex flex-col items-center">
        <span className="typography-body-small text-text-accent">Disabled</span>
        <Toggle disabled label="Disabled toggle" />
      </div>
      <div className="gap-sm flex flex-col items-center">
        <span className="typography-body-small text-text-accent">
          Disabled Selected
        </span>
        <Toggle disabled selected label="Disabled selected toggle" />
      </div>
    </div>
}`,...(z=(T=d.parameters)==null?void 0:T.docs)==null?void 0:z.source}}};var I,C,O;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <InteractiveToggle />
}`,...(O=(C=o.parameters)==null?void 0:C.docs)==null?void 0:O.source}}};const H=["Playground","Overview","Sizes","Selected","Disabled","Interactive"];export{d as Disabled,o as Interactive,c as Overview,t as Playground,n as Selected,r as Sizes,H as __namedExportsOrder,G as default};
