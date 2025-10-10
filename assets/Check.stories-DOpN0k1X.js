import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as w}from"./index-0yr9KlQE.js";import{j as s}from"./ContextMenuList-Dq92F7hd.js";import"./index-tymuTqDW.js";import"./index-DotmK1FS.js";import"./index-ChaIqHV-.js";import"./borders-N_bRvfGw.js";import"./colors-mvAPBTAn.js";const Q={title:"WIP Components/Check",component:s,argTypes:{checked:{control:"inline-radio",options:[!1,!0,"indeterminate"]},disabled:{control:"boolean"}}},z=m=>{const[l,h]=w.useState(m.checked||!1);return e.jsx(s,{...m,checked:l,onChange:q=>{h(l==="indeterminate"?!0:q.target.checked)}})},r={render:z,args:{checked:!1,disabled:!1}},a={args:{checked:!1}},c={args:{checked:!0}},t={args:{checked:"indeterminate"}},d={args:{checked:!1,disabled:!0}},n={args:{checked:!0,disabled:!0}},i={args:{checked:"indeterminate",disabled:!0}},o={render:()=>e.jsxs("div",{className:"grid grid-cols-3 items-center gap-4",children:[e.jsx("div",{className:"text-sm font-medium",children:"Unchecked"}),e.jsx("div",{className:"text-sm font-medium",children:"Checked"}),e.jsx("div",{className:"text-sm font-medium",children:"Indeterminate"}),e.jsx(s,{checked:!1}),e.jsx(s,{checked:!0}),e.jsx(s,{checked:"indeterminate"}),e.jsx("div",{className:"text-text-muted text-sm",children:"Disabled"}),e.jsx("div",{}),e.jsx("div",{}),e.jsx(s,{checked:!1,disabled:!0}),e.jsx(s,{checked:!0,disabled:!0}),e.jsx(s,{checked:"indeterminate",disabled:!0})]})};var u,k,p;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: InteractiveCheck,
  args: {
    checked: false,
    disabled: false
  }
}`,...(p=(k=r.parameters)==null?void 0:k.docs)==null?void 0:p.source}}};var g,x,f;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    checked: false
  }
}`,...(f=(x=a.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var b,v,C;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    checked: true
  }
}`,...(C=(v=c.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var j,S,N;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    checked: "indeterminate"
  }
}`,...(N=(S=t.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};var I,D,U;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: true
  }
}`,...(U=(D=d.parameters)==null?void 0:D.docs)==null?void 0:U.source}}};var y,E,P;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: true
  }
}`,...(P=(E=n.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};var A,_,O;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    checked: "indeterminate",
    disabled: true
  }
}`,...(O=(_=i.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};var R,T,W;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-3 items-center gap-4">
      <div className="text-sm font-medium">Unchecked</div>
      <div className="text-sm font-medium">Checked</div>
      <div className="text-sm font-medium">Indeterminate</div>

      <Check checked={false} />
      <Check checked={true} />
      <Check checked="indeterminate" />

      <div className="text-text-muted text-sm">Disabled</div>
      <div></div>
      <div></div>

      <Check checked={false} disabled />
      <Check checked={true} disabled />
      <Check checked="indeterminate" disabled />
    </div>
}`,...(W=(T=o.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};const V=["Playground","Unchecked","Checked","Indeterminate","Disabled","DisabledChecked","DisabledIndeterminate","AllStates"];export{o as AllStates,c as Checked,d as Disabled,n as DisabledChecked,i as DisabledIndeterminate,t as Indeterminate,r as Playground,a as Unchecked,V as __namedExportsOrder,Q as default};
