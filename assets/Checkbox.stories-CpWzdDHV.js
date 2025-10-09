import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as ce}from"./index-0yr9KlQE.js";import{k as r}from"./ContextMenuList-B2WBBjRu.js";import"./index-tymuTqDW.js";import"./index-DotmK1FS.js";import"./index-ChaIqHV-.js";import"./borders-N_bRvfGw.js";import"./colors-mvAPBTAn.js";const pe={title:"WIP Components/Checkbox",component:r,argTypes:{checked:{control:"inline-radio",options:[!1,!0,"indeterminate"]},disabled:{control:"boolean"},label:{control:"text"},description:{control:"text"},errorMessage:{control:"text"},warningMessage:{control:"text"}}},ne=k=>{const[m,u]=ce.useState(k.checked||!1);return e.jsx(r,{...k,checked:m,onChange:ae=>{k.disabled||u(m==="indeterminate"?!0:ae.target.checked)}})},s={render:ne,args:{checked:!1,disabled:!1,label:"Label",description:"Checkbox",errorMessage:"",warningMessage:""}},a={args:{checked:!1,disabled:!1,label:"Label",description:"Checkbox"}},c={args:{checked:!0,disabled:!1,label:"Label",description:"Checkbox"}},n={args:{checked:"indeterminate",disabled:!1,label:"Label",description:"Checkbox"}},d={args:{checked:!1,disabled:!0,label:"Label",description:"Checkbox"}},o={args:{checked:!0,disabled:!0,label:"Label",description:"Checkbox"}},i={args:{checked:"indeterminate",disabled:!0,label:"Label",description:"Checkbox"}},l={args:{checked:!1,disabled:!1,label:"Label",description:"Checkbox",errorMessage:"Error Message goes here"}},t={args:{checked:!0,disabled:!1,label:"Label",description:"Checkbox",errorMessage:"Error Message goes here"}},b={args:{checked:!1,disabled:!1,label:"Label",description:"Checkbox",warningMessage:"Warning Message goes here"}},g={args:{checked:!0,disabled:!1,label:"Label",description:"Checkbox",warningMessage:"Warning Message goes here"}},h={args:{checked:!1,disabled:!1,description:"Checkbox"}},p={render:()=>e.jsxs("div",{className:"gap-lg flex flex-col",children:[e.jsxs("div",{className:"gap-md grid grid-cols-3",children:[e.jsx(r,{checked:!1,label:"Enabled",description:"Unchecked"}),e.jsx(r,{checked:!0,label:"Enabled",description:"Checked"}),e.jsx(r,{checked:"indeterminate",label:"Enabled",description:"Indeterminate"})]}),e.jsxs("div",{className:"gap-md grid grid-cols-3",children:[e.jsx(r,{checked:!1,disabled:!0,label:"Disabled",description:"Unchecked"}),e.jsx(r,{checked:!0,disabled:!0,label:"Disabled",description:"Checked"}),e.jsx(r,{checked:"indeterminate",disabled:!0,label:"Disabled",description:"Indeterminate"})]}),e.jsxs("div",{className:"gap-md grid grid-cols-2",children:[e.jsx(r,{checked:!1,label:"Error",description:"Checkbox",errorMessage:"Error Message goes here"}),e.jsx(r,{checked:!0,label:"Error",description:"Checkbox",errorMessage:"Error Message goes here"})]}),e.jsxs("div",{className:"gap-md grid grid-cols-2",children:[e.jsx(r,{checked:!1,label:"Warning",description:"Checkbox",warningMessage:"Warning Message goes here"}),e.jsx(r,{checked:!0,label:"Warning",description:"Checkbox",warningMessage:"Warning Message goes here"})]})]})};var x,C,f;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: PlaygroundCheckbox,
  args: {
    checked: false,
    disabled: false,
    label: "Label",
    description: "Checkbox",
    errorMessage: "",
    warningMessage: ""
  }
}`,...(f=(C=s.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};var M,E,W;a.parameters={...a.parameters,docs:{...(M=a.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: false,
    label: "Label",
    description: "Checkbox"
  }
}`,...(W=(E=a.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};var L,j,S;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: false,
    label: "Label",
    description: "Checkbox"
  }
}`,...(S=(j=c.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var v,D,w;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    checked: "indeterminate",
    disabled: false,
    label: "Label",
    description: "Checkbox"
  }
}`,...(w=(D=n.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};var N,I,y;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: true,
    label: "Label",
    description: "Checkbox"
  }
}`,...(y=(I=d.parameters)==null?void 0:I.docs)==null?void 0:y.source}}};var P,U,A;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: true,
    label: "Label",
    description: "Checkbox"
  }
}`,...(A=(U=o.parameters)==null?void 0:U.docs)==null?void 0:A.source}}};var _,O,R;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    checked: "indeterminate",
    disabled: true,
    label: "Label",
    description: "Checkbox"
  }
}`,...(R=(O=i.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var T,q,z;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: false,
    label: "Label",
    description: "Checkbox",
    errorMessage: "Error Message goes here"
  }
}`,...(z=(q=l.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var B,F,G;t.parameters={...t.parameters,docs:{...(B=t.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: false,
    label: "Label",
    description: "Checkbox",
    errorMessage: "Error Message goes here"
  }
}`,...(G=(F=t.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var H,J,K;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: false,
    label: "Label",
    description: "Checkbox",
    warningMessage: "Warning Message goes here"
  }
}`,...(K=(J=b.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,V,X;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: false,
    label: "Label",
    description: "Checkbox",
    warningMessage: "Warning Message goes here"
  }
}`,...(X=(V=g.parameters)==null?void 0:V.docs)==null?void 0:X.source}}};var Y,Z,$;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: false,
    description: "Checkbox"
  }
}`,...($=(Z=h.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,re,se;p.parameters={...p.parameters,docs:{...(ee=p.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <div className="gap-lg flex flex-col">
      <div className="gap-md grid grid-cols-3">
        <Checkbox checked={false} label="Enabled" description="Unchecked" />
        <Checkbox checked={true} label="Enabled" description="Checked" />
        <Checkbox checked="indeterminate" label="Enabled" description="Indeterminate" />
      </div>

      <div className="gap-md grid grid-cols-3">
        <Checkbox checked={false} disabled={true} label="Disabled" description="Unchecked" />
        <Checkbox checked={true} disabled={true} label="Disabled" description="Checked" />
        <Checkbox checked="indeterminate" disabled={true} label="Disabled" description="Indeterminate" />
      </div>

      <div className="gap-md grid grid-cols-2">
        <Checkbox checked={false} label="Error" description="Checkbox" errorMessage="Error Message goes here" />
        <Checkbox checked={true} label="Error" description="Checkbox" errorMessage="Error Message goes here" />
      </div>

      <div className="gap-md grid grid-cols-2">
        <Checkbox checked={false} label="Warning" description="Checkbox" warningMessage="Warning Message goes here" />
        <Checkbox checked={true} label="Warning" description="Checkbox" warningMessage="Warning Message goes here" />
      </div>
    </div>
}`,...(se=(re=p.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};const ke=["Playground","Enabled","EnabledChecked","EnabledIndeterminate","Disabled","DisabledChecked","DisabledIndeterminate","WithError","WithErrorChecked","WithWarning","WithWarningChecked","WithoutLabel","AllStates"];export{p as AllStates,d as Disabled,o as DisabledChecked,i as DisabledIndeterminate,a as Enabled,c as EnabledChecked,n as EnabledIndeterminate,s as Playground,l as WithError,t as WithErrorChecked,b as WithWarning,g as WithWarningChecked,h as WithoutLabel,ke as __namedExportsOrder,pe as default};
