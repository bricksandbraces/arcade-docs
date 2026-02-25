import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as P}from"./index-CY-HDqYb.js";import{I as R,a0 as W,aY as a}from"./ContextMenuList-BjZtb4V3.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";import"./index-ZRCHFLd-.js";import"./borders-N_bRvfGw.js";import"./colors-mvAPBTAn.js";const G={title:"F/Dropdown/Select",component:a,argTypes:{size:{control:"inline-radio",options:W},inline:{control:"inline-radio",options:[!0,!1]},state:{control:"inline-radio",options:R},disabled:{control:"boolean"},placeholder:{control:"text"},errorMessage:{control:"text"},warningMessage:{control:"text"}}},k=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"orange",label:"Orange"}],l={args:{size:"medium",kind:"default",state:"default",disabled:!1,placeholder:"Choose an option",options:k}},t={parameters:{controls:{disable:!0}},args:{placeholder:"Select an option",options:k}},s={render:()=>e.jsxs("div",{className:"gap-md flex items-start",children:[e.jsxs("div",{className:"gap-sm flex flex-col items-center",children:[e.jsx("span",{className:"typography-body-small text-text-accent",children:"Small"}),e.jsx(a,{id:"small",size:"small",placeholder:"Small select",options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"}]})]}),e.jsxs("div",{className:"gap-sm flex flex-col items-center",children:[e.jsx("span",{className:"typography-body-small text-text-accent",children:"Medium"}),e.jsx(a,{id:"medium",size:"medium",placeholder:"Medium select",options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"}]})]}),e.jsxs("div",{className:"gap-sm flex flex-col items-center",children:[e.jsx("span",{className:"typography-body-small text-text-accent",children:"Large"}),e.jsx(a,{id:"large",size:"large",placeholder:"Large select",options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"}]})]})]})},n={render:()=>e.jsxs("div",{className:"gap-md flex items-start",children:[e.jsxs("div",{className:"gap-sm flex flex-col items-center",children:[e.jsx("span",{className:"typography-body-small text-text-accent",children:"Default"}),e.jsx(a,{id:"default",placeholder:"Default select",options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"}]})]}),e.jsxs("div",{className:"gap-sm flex flex-col items-center",children:[e.jsx("span",{className:"typography-body-small text-text-accent",children:"Inline"}),e.jsx(a,{id:"inline",inline:!0,placeholder:"Inline select",options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"}]})]})]})},o={render:()=>e.jsxs("div",{className:"gap-lg flex items-start",children:[e.jsxs("div",{className:"gap-sm flex flex-col items-center",children:[e.jsx("span",{className:"typography-body-small text-text-accent",children:"Default"}),e.jsx(a,{id:"select-default",state:"default",placeholder:"Default state",options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"}]})]}),e.jsxs("div",{className:"gap-sm flex flex-col items-center",children:[e.jsx("span",{className:"typography-body-small text-text-accent",children:"Error"}),e.jsx(a,{id:"select-error",state:"error",placeholder:"Error state",errorMessage:"This field is required",options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"}]})]}),e.jsxs("div",{className:"gap-sm flex flex-col items-center",children:[e.jsx("span",{className:"typography-body-small text-text-accent",children:"Warning"}),e.jsx(a,{id:"select-warning",state:"warning",placeholder:"Warning state",warningMessage:"Please double-check your selection",options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"}]})]})]})},i={render:()=>e.jsxs("div",{className:"gap-md flex items-start",children:[e.jsxs("div",{className:"gap-sm flex flex-col items-center",children:[e.jsx("span",{className:"typography-body-small text-text-accent",children:"Default Disabled"}),e.jsx(a,{disabled:!0,placeholder:"Disabled select",options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"}],id:""})]}),e.jsxs("div",{className:"gap-sm flex flex-col items-center",children:[e.jsx("span",{className:"typography-body-small text-text-accent",children:"Inline Disabled"}),e.jsx(a,{id:"inline-disabled",inline:!0,disabled:!0,placeholder:"Disabled inline select",options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"}]})]})]})},T=()=>{const[c,C]=P.useState("");return e.jsxs("div",{className:"gap-md flex flex-col items-center",children:[e.jsxs("span",{className:"typography-body-small text-text-accent",children:["Selected: ",c||"None"]}),e.jsx(a,{value:c,onChange:L=>C(L),placeholder:"Choose your favorite",options:[{value:"react",label:"React"},{value:"vue",label:"Vue"},{value:"angular",label:"Angular"},{value:"svelte",label:"Svelte"}],id:""})]})},r={render:()=>e.jsx(T,{})};var p,d,m;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    size: "medium",
    kind: "default",
    state: "default",
    disabled: false,
    placeholder: "Choose an option",
    options: sampleOptions
  }
}`,...(m=(d=l.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var x,u,v;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  args: {
    placeholder: "Select an option",
    options: sampleOptions
  }
}`,...(v=(u=t.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};var g,b,h;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div className="gap-md flex items-start">
      <div className="gap-sm flex flex-col items-center">
        <span className="typography-body-small text-text-accent">Small</span>
        <Select id="small" size="small" placeholder="Small select" options={[{
        value: "option1",
        label: "Option 1"
      }, {
        value: "option2",
        label: "Option 2"
      }]} />
      </div>
      <div className="gap-sm flex flex-col items-center">
        <span className="typography-body-small text-text-accent">Medium</span>
        <Select id="medium" size="medium" placeholder="Medium select" options={[{
        value: "option1",
        label: "Option 1"
      }, {
        value: "option2",
        label: "Option 2"
      }]} />
      </div>
      <div className="gap-sm flex flex-col items-center">
        <span className="typography-body-small text-text-accent">Large</span>
        <Select id={"large"} size="large" placeholder="Large select" options={[{
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
        <Select id="default" placeholder="Default select" options={[{
        value: "option1",
        label: "Option 1"
      }, {
        value: "option2",
        label: "Option 2"
      }]} />
      </div>
      <div className="gap-sm flex flex-col items-center">
        <span className="typography-body-small text-text-accent">Inline</span>
        <Select id="inline" inline placeholder="Inline select" options={[{
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
    </div>
}`,...(S=(j=o.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var D,I,z;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
      }]} id={""} />
      </div>
      <div className="gap-sm flex flex-col items-center">
        <span className="typography-body-small text-text-accent">
          Inline Disabled
        </span>
        <Select id="inline-disabled" inline disabled placeholder="Disabled inline select" options={[{
        value: "option1",
        label: "Option 1"
      }, {
        value: "option2",
        label: "Option 2"
      }]} />
      </div>
    </div>
}`,...(z=(I=i.parameters)==null?void 0:I.docs)==null?void 0:z.source}}};var w,M,E;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <InteractiveSelect />
}`,...(E=(M=r.parameters)==null?void 0:M.docs)==null?void 0:E.source}}};const H=["Playground","Overview","Sizes","Kinds","States","Disabled","Interactive"];export{i as Disabled,r as Interactive,n as Kinds,t as Overview,l as Playground,s as Sizes,o as States,H as __namedExportsOrder,G as default};
