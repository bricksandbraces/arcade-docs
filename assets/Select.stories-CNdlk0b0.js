import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as P}from"./index-0yr9KlQE.js";import{aZ as R,a_ as W,a$ as K,b0 as a}from"./ContextMenuList-iLopGvLG.js";import"./index-tymuTqDW.js";import"./index-DotmK1FS.js";import"./index-ChaIqHV-.js";import"./borders-N_bRvfGw.js";import"./colors-mvAPBTAn.js";const F={title:"H/Dropdown/Select",component:a,argTypes:{size:{control:"inline-radio",options:K},kind:{control:"inline-radio",options:W},state:{control:"inline-radio",options:R},disabled:{control:"boolean"},placeholder:{control:"text"},errorMessage:{control:"text"},warningMessage:{control:"text"}}},L=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"orange",label:"Orange"}],l={args:{size:"medium",kind:"default",state:"default",disabled:!1,placeholder:"Choose an option",options:L}},t={args:{placeholder:"Select an option",options:L}},s={render:()=>e.jsxs("div",{className:"gap-md flex items-start",children:[e.jsxs("div",{className:"gap-sm flex flex-col items-center",children:[e.jsx("span",{className:"typography-body-small text-text-accent",children:"Small"}),e.jsx(a,{size:"small",placeholder:"Small select",options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"}]})]}),e.jsxs("div",{className:"gap-sm flex flex-col items-center",children:[e.jsx("span",{className:"typography-body-small text-text-accent",children:"Medium"}),e.jsx(a,{size:"medium",placeholder:"Medium select",options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"}]})]}),e.jsxs("div",{className:"gap-sm flex flex-col items-center",children:[e.jsx("span",{className:"typography-body-small text-text-accent",children:"Large"}),e.jsx(a,{size:"large",placeholder:"Large select",options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"}]})]})]})},n={render:()=>e.jsxs("div",{className:"gap-md flex items-start",children:[e.jsxs("div",{className:"gap-sm flex flex-col items-center",children:[e.jsx("span",{className:"typography-body-small text-text-accent",children:"Default"}),e.jsx(a,{kind:"default",placeholder:"Default select",options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"}]})]}),e.jsxs("div",{className:"gap-sm flex flex-col items-center",children:[e.jsx("span",{className:"typography-body-small text-text-accent",children:"Inline"}),e.jsx(a,{kind:"inline",placeholder:"Inline select",options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"}]})]})]})},o={render:()=>e.jsxs("div",{className:"gap-lg flex items-start",children:[e.jsxs("div",{className:"gap-sm flex flex-col items-center",children:[e.jsx("span",{className:"typography-body-small text-text-accent",children:"Default"}),e.jsx(a,{id:"select-default",state:"default",placeholder:"Default state",options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"}]})]}),e.jsxs("div",{className:"gap-sm flex flex-col items-center",children:[e.jsx("span",{className:"typography-body-small text-text-accent",children:"Error"}),e.jsx(a,{id:"select-error",state:"error",placeholder:"Error state",errorMessage:"This field is required",options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"}]})]}),e.jsxs("div",{className:"gap-sm flex flex-col items-center",children:[e.jsx("span",{className:"typography-body-small text-text-accent",children:"Warning"}),e.jsx(a,{id:"select-warning",state:"warning",placeholder:"Warning state",warningMessage:"Please double-check your selection",options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"}]})]}),e.jsxs("div",{className:"gap-sm flex flex-col items-center",children:[e.jsx("span",{className:"typography-body-small text-text-accent",children:"Loading"}),e.jsx(a,{id:"select-loading",state:"loading",placeholder:"Loading state",options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"}]})]})]})},i={render:()=>e.jsxs("div",{className:"gap-md flex items-start",children:[e.jsxs("div",{className:"gap-sm flex flex-col items-center",children:[e.jsx("span",{className:"typography-body-small text-text-accent",children:"Default Disabled"}),e.jsx(a,{disabled:!0,placeholder:"Disabled select",options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"}]})]}),e.jsxs("div",{className:"gap-sm flex flex-col items-center",children:[e.jsx("span",{className:"typography-body-small text-text-accent",children:"Inline Disabled"}),e.jsx(a,{kind:"inline",disabled:!0,placeholder:"Disabled inline select",options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"}]})]})]})},T=()=>{const[r,E]=P.useState("");return e.jsxs("div",{className:"gap-md flex flex-col items-center",children:[e.jsxs("span",{className:"typography-body-small text-text-accent",children:["Selected: ",r||"None"]}),e.jsx(a,{value:r,onChange:C=>E(C),placeholder:"Choose your favorite",options:[{value:"react",label:"React"},{value:"vue",label:"Vue"},{value:"angular",label:"Angular"},{value:"svelte",label:"Svelte"}]})]})},c={render:()=>e.jsx(T,{})};var p,d,m;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    size: "medium",
    kind: "default",
    state: "default",
    disabled: false,
    placeholder: "Choose an option",
    options: sampleOptions
  }
}`,...(m=(d=l.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var x,u,v;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    placeholder: "Select an option",
    options: sampleOptions
  }
}`,...(v=(u=t.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};var g,b,h;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div className="gap-md flex items-start">
      <div className="gap-sm flex flex-col items-center">
        <span className="typography-body-small text-text-accent">Small</span>
        <Select size="small" placeholder="Small select" options={[{
        value: "option1",
        label: "Option 1"
      }, {
        value: "option2",
        label: "Option 2"
      }]} />
      </div>
      <div className="gap-sm flex flex-col items-center">
        <span className="typography-body-small text-text-accent">Medium</span>
        <Select size="medium" placeholder="Medium select" options={[{
        value: "option1",
        label: "Option 1"
      }, {
        value: "option2",
        label: "Option 2"
      }]} />
      </div>
      <div className="gap-sm flex flex-col items-center">
        <span className="typography-body-small text-text-accent">Large</span>
        <Select size="large" placeholder="Large select" options={[{
        value: "option1",
        label: "Option 1"
      }, {
        value: "option2",
        label: "Option 2"
      }]} />
      </div>
    </div>
}`,...(h=(b=s.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var f,y,N;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div className="gap-md flex items-start">
      <div className="gap-sm flex flex-col items-center">
        <span className="typography-body-small text-text-accent">Default</span>
        <Select kind="default" placeholder="Default select" options={[{
        value: "option1",
        label: "Option 1"
      }, {
        value: "option2",
        label: "Option 2"
      }]} />
      </div>
      <div className="gap-sm flex flex-col items-center">
        <span className="typography-body-small text-text-accent">Inline</span>
        <Select kind="inline" placeholder="Inline select" options={[{
        value: "option1",
        label: "Option 1"
      }, {
        value: "option2",
        label: "Option 2"
      }]} />
      </div>
    </div>
}`,...(N=(y=n.parameters)==null?void 0:y.docs)==null?void 0:N.source}}};var O,j,S;o.parameters={...o.parameters,docs:{...(O=o.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div className="gap-lg flex items-start">
      <div className="gap-sm flex flex-col items-center">
        <span className="typography-body-small text-text-accent">Default</span>
        <Select id="select-default" state="default" placeholder="Default state" options={[{
        value: "option1",
        label: "Option 1"
      }, {
        value: "option2",
        label: "Option 2"
      }]} />
      </div>
      <div className="gap-sm flex flex-col items-center">
        <span className="typography-body-small text-text-accent">Error</span>
        <Select id="select-error" state="error" placeholder="Error state" errorMessage="This field is required" options={[{
        value: "option1",
        label: "Option 1"
      }, {
        value: "option2",
        label: "Option 2"
      }]} />
      </div>
      <div className="gap-sm flex flex-col items-center">
        <span className="typography-body-small text-text-accent">Warning</span>
        <Select id="select-warning" state="warning" placeholder="Warning state" warningMessage="Please double-check your selection" options={[{
        value: "option1",
        label: "Option 1"
      }, {
        value: "option2",
        label: "Option 2"
      }]} />
      </div>
      <div className="gap-sm flex flex-col items-center">
        <span className="typography-body-small text-text-accent">Loading</span>
        <Select id="select-loading" state="loading" placeholder="Loading state" options={[{
        value: "option1",
        label: "Option 1"
      }, {
        value: "option2",
        label: "Option 2"
      }]} />
      </div>
    </div>
}`,...(S=(j=o.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var D,z,k;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div className="gap-md flex items-start">
      <div className="gap-sm flex flex-col items-center">
        <span className="typography-body-small text-text-accent">
          Default Disabled
        </span>
        <Select disabled placeholder="Disabled select" options={[{
        value: "option1",
        label: "Option 1"
      }, {
        value: "option2",
        label: "Option 2"
      }]} />
      </div>
      <div className="gap-sm flex flex-col items-center">
        <span className="typography-body-small text-text-accent">
          Inline Disabled
        </span>
        <Select kind="inline" disabled placeholder="Disabled inline select" options={[{
        value: "option1",
        label: "Option 1"
      }, {
        value: "option2",
        label: "Option 2"
      }]} />
      </div>
    </div>
}`,...(k=(z=i.parameters)==null?void 0:z.docs)==null?void 0:k.source}}};var w,I,M;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <InteractiveSelect />
}`,...(M=(I=c.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};const G=["Playground","Overview","Sizes","Kinds","States","Disabled","Interactive"];export{i as Disabled,c as Interactive,n as Kinds,t as Overview,l as Playground,s as Sizes,o as States,G as __namedExportsOrder,F as default};
