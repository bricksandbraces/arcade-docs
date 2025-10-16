import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as w}from"./index-0yr9KlQE.js";import{aV as s}from"./ContextMenuList-iLopGvLG.js";import"./index-tymuTqDW.js";import"./index-DotmK1FS.js";import"./index-ChaIqHV-.js";import"./borders-N_bRvfGw.js";import"./colors-mvAPBTAn.js";const A={title:"H/RadioButton/Radio",component:s,argTypes:{checked:{control:"boolean"},disabled:{control:"boolean"}}},I=a=>{const[c,D]=w.useState(a.checked||!1);return e.jsx(s,{...a,checked:c,onChange:O=>!a.disabled&&D(O.target.checked)})},t={render:a=>e.jsx(I,{...a}),args:{checked:!1,disabled:!1}},n={render:()=>e.jsxs("div",{className:"gap-md flex items-center",children:[e.jsxs("div",{className:"gap-sm flex flex-col items-center",children:[e.jsx("span",{className:"typography-body-small text-text-accent",children:"Unchecked"}),e.jsx(s,{checked:!1})]}),e.jsxs("div",{className:"gap-sm flex flex-col items-center",children:[e.jsx("span",{className:"typography-body-small text-text-accent",children:"Checked"}),e.jsx(s,{checked:!0})]})]})},l={render:()=>e.jsxs("div",{className:"gap-lg flex flex-col",children:[e.jsxs("div",{className:"gap-md flex items-center",children:[e.jsx("span",{className:"typography-body-small text-text-accent w-20",children:"Enabled:"}),e.jsxs("div",{className:"gap-sm flex items-center",children:[e.jsx(s,{checked:!1}),e.jsx(s,{checked:!0})]})]}),e.jsxs("div",{className:"gap-md flex items-center",children:[e.jsx("span",{className:"typography-body-small text-text-accent w-20",children:"Disabled:"}),e.jsxs("div",{className:"gap-sm flex items-center",children:[e.jsx(s,{checked:!1,disabled:!0}),e.jsx(s,{checked:!0,disabled:!0})]})]})]})},r={render:()=>e.jsxs("div",{className:"gap-md flex items-center",children:[e.jsxs("div",{className:"gap-sm flex flex-col items-center",children:[e.jsx("span",{className:"typography-body-small text-text-accent",children:"Enabled"}),e.jsx(s,{checked:!1})]}),e.jsxs("div",{className:"gap-sm flex flex-col items-center",children:[e.jsx("span",{className:"typography-body-small text-text-accent",children:"Disabled"}),e.jsx(s,{checked:!1,disabled:!0})]})]})},d={render:()=>e.jsxs("div",{className:"gap-md flex items-center",children:[e.jsxs("div",{className:"gap-sm flex flex-col items-center",children:[e.jsx("span",{className:"typography-body-small text-text-accent",children:"Enabled"}),e.jsx(s,{checked:!0})]}),e.jsxs("div",{className:"gap-sm flex flex-col items-center",children:[e.jsx("span",{className:"typography-body-small text-text-accent",children:"Disabled"}),e.jsx(s,{checked:!0,disabled:!0})]})]})},P=()=>{const[a,c]=w.useState("option1");return e.jsxs("div",{className:"gap-md flex flex-col",children:[e.jsxs("span",{className:"typography-body-small text-text-accent",children:["Selected: ",a]}),e.jsxs("div",{className:"gap-sm flex flex-col",children:[e.jsxs("label",{className:"gap-sm flex cursor-pointer items-center",children:[e.jsx(s,{name:"interactive",checked:a==="option1",onChange:()=>c("option1")}),e.jsx("span",{className:"typography-body",children:"Option 1"})]}),e.jsxs("label",{className:"gap-sm flex cursor-pointer items-center",children:[e.jsx(s,{name:"interactive",checked:a==="option2",onChange:()=>c("option2")}),e.jsx("span",{className:"typography-body",children:"Option 2"})]}),e.jsxs("label",{className:"gap-sm flex cursor-pointer items-center",children:[e.jsx(s,{name:"interactive",checked:a==="option3",onChange:()=>c("option3")}),e.jsx("span",{className:"typography-body",children:"Option 3"})]})]})]})},i={render:()=>e.jsx(P,{})};var o,m,p;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => <PlaygroundRadio {...args} />,
  args: {
    checked: false,
    disabled: false
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var x,h,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div className="gap-md flex items-center">
      <div className="gap-sm flex flex-col items-center">
        <span className="typography-body-small text-text-accent">
          Unchecked
        </span>
        <Radio checked={false} />
      </div>
      <div className="gap-sm flex flex-col items-center">
        <span className="typography-body-small text-text-accent">Checked</span>
        <Radio checked={true} />
      </div>
    </div>
}`,...(g=(h=n.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var f,y,v;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div className="gap-lg flex flex-col">
      <div className="gap-md flex items-center">
        <span className="typography-body-small text-text-accent w-20">
          Enabled:
        </span>
        <div className="gap-sm flex items-center">
          <Radio checked={false} />
          <Radio checked={true} />
        </div>
      </div>
      <div className="gap-md flex items-center">
        <span className="typography-body-small text-text-accent w-20">
          Disabled:
        </span>
        <div className="gap-sm flex items-center">
          <Radio checked={false} disabled />
          <Radio checked={true} disabled />
        </div>
      </div>
    </div>
}`,...(v=(y=l.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var N,b,j;r.parameters={...r.parameters,docs:{...(N=r.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div className="gap-md flex items-center">
      <div className="gap-sm flex flex-col items-center">
        <span className="typography-body-small text-text-accent">Enabled</span>
        <Radio checked={false} />
      </div>
      <div className="gap-sm flex flex-col items-center">
        <span className="typography-body-small text-text-accent">Disabled</span>
        <Radio checked={false} disabled />
      </div>
    </div>
}`,...(j=(b=r.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var u,k,R;d.parameters={...d.parameters,docs:{...(u=d.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div className="gap-md flex items-center">
      <div className="gap-sm flex flex-col items-center">
        <span className="typography-body-small text-text-accent">Enabled</span>
        <Radio checked={true} />
      </div>
      <div className="gap-sm flex flex-col items-center">
        <span className="typography-body-small text-text-accent">Disabled</span>
        <Radio checked={true} disabled />
      </div>
    </div>
}`,...(R=(k=d.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};var S,C,E;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <InteractiveRadio />
}`,...(E=(C=i.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};const F=["Playground","Overview","States","Unchecked","Checked","Interactive"];export{d as Checked,i as Interactive,n as Overview,t as Playground,l as States,r as Unchecked,F as __namedExportsOrder,A as default};
