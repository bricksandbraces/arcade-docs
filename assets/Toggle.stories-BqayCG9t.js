import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as y}from"./index-0yr9KlQE.js";import{bf as u,bg as s}from"./ContextMenuList-iLopGvLG.js";import"./index-tymuTqDW.js";import"./index-DotmK1FS.js";import"./index-ChaIqHV-.js";import"./borders-N_bRvfGw.js";import"./colors-mvAPBTAn.js";const R={title:"F/Toggle/Toggle",component:s,argTypes:{size:{control:"inline-radio",options:u},selected:{control:"boolean"},disabled:{control:"boolean"},label:{control:"text"}}},N=l=>{const[c,f]=y.useState(l.selected||!1);return e.jsx(s,{...l,selected:c,onClick:()=>!l.disabled&&f(!c)})},a={render:l=>e.jsx(N,{...l}),args:{size:"default",selected:!1,disabled:!1,label:"Label"}},t={render:()=>e.jsxs("div",{className:"gap-md flex items-center",children:[e.jsxs("div",{className:"gap-sm flex flex-col items-center",children:[e.jsx("span",{className:"typography-body-small text-text-accent",children:"Small"}),e.jsx(s,{size:"small",label:"Small toggle"})]}),e.jsxs("div",{className:"gap-sm flex flex-col items-center",children:[e.jsx("span",{className:"typography-body-small text-text-accent",children:"Default"}),e.jsx(s,{size:"default",label:"Default toggle"})]})]})},r={render:()=>e.jsxs("div",{className:"gap-md flex items-center",children:[e.jsxs("div",{className:"gap-sm flex flex-col items-center",children:[e.jsx("span",{className:"typography-body-small text-text-accent",children:"Disabled"}),e.jsx(s,{disabled:!0,label:"Disabled toggle"})]}),e.jsxs("div",{className:"gap-sm flex flex-col items-center",children:[e.jsx("span",{className:"typography-body-small text-text-accent",children:"Disabled Selected"}),e.jsx(s,{disabled:!0,selected:!0,label:"Disabled selected toggle"})]})]})};var n,o,d;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => <PlaygroundToggle {...args} />,
  args: {
    size: "default",
    selected: false,
    disabled: false,
    label: "Label"
  }
}`,...(d=(o=a.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};var i,m,g;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(g=(m=t.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var p,x,b;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(b=(x=r.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};const E=["Playground","Sizes","Disabled"];export{r as Disabled,a as Playground,t as Sizes,E as __namedExportsOrder,R as default};
