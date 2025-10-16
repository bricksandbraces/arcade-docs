import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as D}from"./index-0yr9KlQE.js";import{I,k as r}from"./ContextMenuList-iLopGvLG.js";import"./index-tymuTqDW.js";import"./index-DotmK1FS.js";import"./index-ChaIqHV-.js";import"./borders-N_bRvfGw.js";import"./colors-mvAPBTAn.js";const U=i=>{const[l,t]=D.useState(i.checked||!1);return e.jsx(r,{...i,checked:l,onChange:S=>{i.disabled||t(l==="indeterminate"?!0:S.target.checked)}})},z={title:"F/Checkbox/Checkbox",component:r,argTypes:{checked:{control:"inline-radio",options:[!1,!0,"indeterminate"]},disabled:{control:"boolean"},label:{control:"text"},description:{control:"text"},errorMessage:{control:"text"},warningMessage:{control:"text"},hideLabel:{control:"boolean"},state:{control:"inline-radio",options:I}},render:U},s={args:{checked:!1,disabled:!1,label:"Label",description:"Checkbox",errorMessage:"",warningMessage:""}},a={args:{checked:!1,disabled:!0,label:"Label",description:"Checkbox"}},c={args:{checked:!1,disabled:!1,label:"Label",description:"Checkbox",state:"error",errorMessage:"Error Message goes here"}},n={args:{checked:!1,disabled:!1,label:"Label",description:"Checkbox",state:"warning",warningMessage:"Warning Message goes here"}},o={args:{checked:!1,disabled:!1,description:"Checkbox"}},d={render:()=>e.jsxs("div",{className:"gap-lg flex flex-col",children:[e.jsxs("div",{className:"gap-md grid grid-cols-3",children:[e.jsx(r,{checked:!1,label:"Enabled",description:"Unchecked"}),e.jsx(r,{checked:!0,label:"Enabled",description:"Checked"}),e.jsx(r,{checked:"indeterminate",label:"Enabled",description:"Indeterminate"})]}),e.jsxs("div",{className:"gap-md grid grid-cols-3",children:[e.jsx(r,{checked:!1,disabled:!0,label:"Disabled",description:"Unchecked"}),e.jsx(r,{checked:!0,disabled:!0,label:"Disabled",description:"Checked"}),e.jsx(r,{checked:"indeterminate",disabled:!0,label:"Disabled",description:"Indeterminate"})]}),e.jsxs("div",{className:"gap-md grid grid-cols-2",children:[e.jsx(r,{checked:!1,label:"Error",description:"Checkbox",errorMessage:"Error Message goes here"}),e.jsx(r,{checked:!0,label:"Error",description:"Checkbox",errorMessage:"Error Message goes here"})]}),e.jsxs("div",{className:"gap-md grid grid-cols-2",children:[e.jsx(r,{checked:!1,label:"Warning",description:"Checkbox",warningMessage:"Warning Message goes here"}),e.jsx(r,{checked:!0,label:"Warning",description:"Checkbox",warningMessage:"Warning Message goes here"})]})]})};var g,b,h;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: false,
    label: "Label",
    description: "Checkbox",
    errorMessage: "",
    warningMessage: ""
  }
}`,...(h=(b=s.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var p,k,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: true,
    label: "Label",
    description: "Checkbox"
  }
}`,...(m=(k=a.parameters)==null?void 0:k.docs)==null?void 0:m.source}}};var x,u,C;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: false,
    label: "Label",
    description: "Checkbox",
    state: "error",
    errorMessage: "Error Message goes here"
  }
}`,...(C=(u=c.parameters)==null?void 0:u.docs)==null?void 0:C.source}}};var f,M,E;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: false,
    label: "Label",
    description: "Checkbox",
    state: "warning",
    warningMessage: "Warning Message goes here"
  }
}`,...(E=(M=n.parameters)==null?void 0:M.docs)==null?void 0:E.source}}};var v,W,j;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: false,
    description: "Checkbox"
  }
}`,...(j=(W=o.parameters)==null?void 0:W.docs)==null?void 0:j.source}}};var w,L,N;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(N=(L=d.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};const A=["Playground","Disabled","WithError","WithWarning","WithoutLabel","Overview"];export{a as Disabled,d as Overview,s as Playground,c as WithError,n as WithWarning,o as WithoutLabel,A as __namedExportsOrder,z as default};
