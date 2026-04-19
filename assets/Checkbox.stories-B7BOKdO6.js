import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as g}from"./index-CY-HDqYb.js";import{I as q,m as r}from"./ContextMenuList-CBbcYMQA.js";import"./index-A6zbrgSY.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";import"./index-ZRCHFLd-.js";import"./sizes-BpUsT7VU.js";import"./colors-CoOIoG7W.js";const p=a=>a??!1,A=a=>{const[h,b]=g.useState(()=>p(a.checked));return g.useEffect(()=>{b(p(a.checked))},[a.checked]),e.jsx(r,{...a,checked:h,onChange:T=>{!a.disabled&&!a.readonly&&b(h==="indeterminate"?!0:T.target.checked)}})},Y={title:"Components/Checkbox",component:r,argTypes:{checked:{control:"inline-radio",options:[!1,!0,"indeterminate"]},disabled:{control:"boolean"},readonly:{control:"boolean"},label:{control:"text"},description:{control:"text"},errorMessage:{control:"text"},warningMessage:{control:"text"},hideLabel:{control:"boolean"},state:{control:"inline-radio",options:q}},render:A},s={args:{checked:!1,disabled:!1,readonly:!1,label:"Label",description:"Checkbox",errorMessage:"",warningMessage:""}},n={args:{checked:!1,disabled:!0,label:"Label",description:"Checkbox"}},c={args:{checked:!0,disabled:!1,readonly:!0,label:"Label",description:"Checkbox"}},d={args:{checked:"indeterminate",disabled:!1,readonly:!0,label:"Label",description:"Checkbox"}},o={args:{checked:!1,disabled:!1,label:"Label",description:"Checkbox",state:"error",errorMessage:"Error Message goes here"}},i={args:{checked:!1,disabled:!1,label:"Label",description:"Checkbox",state:"warning",warningMessage:"Warning Message goes here"}},l={args:{checked:!1,disabled:!1,description:"Checkbox"}},t={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{className:"gap-lg flex flex-col",children:[e.jsxs("div",{className:"gap-md grid grid-cols-3",children:[e.jsx(r,{checked:!1,label:"Enabled",description:"Unchecked"}),e.jsx(r,{checked:!0,label:"Enabled",description:"Checked"}),e.jsx(r,{checked:"indeterminate",label:"Enabled",description:"Indeterminate"})]}),e.jsxs("div",{className:"gap-md grid grid-cols-3",children:[e.jsx(r,{checked:!1,disabled:!0,label:"Disabled",description:"Unchecked"}),e.jsx(r,{checked:!0,disabled:!0,label:"Disabled",description:"Checked"}),e.jsx(r,{checked:"indeterminate",disabled:!0,label:"Disabled",description:"Indeterminate"})]}),e.jsxs("div",{className:"gap-md grid grid-cols-3",children:[e.jsx(r,{checked:!1,readonly:!0,label:"Readonly",description:"Unchecked"}),e.jsx(r,{checked:!0,readonly:!0,label:"Readonly",description:"Checked"}),e.jsx(r,{checked:"indeterminate",readonly:!0,label:"Readonly",description:"Indeterminate"})]}),e.jsxs("div",{className:"gap-md grid grid-cols-2",children:[e.jsx(r,{checked:!1,label:"Error",description:"Checkbox",errorMessage:"Error Message goes here"}),e.jsx(r,{checked:!0,label:"Error",description:"Checkbox",errorMessage:"Error Message goes here"})]}),e.jsxs("div",{className:"gap-md grid grid-cols-2",children:[e.jsx(r,{checked:!1,label:"Warning",description:"Checkbox",warningMessage:"Warning Message goes here"}),e.jsx(r,{checked:!0,label:"Warning",description:"Checkbox",warningMessage:"Warning Message goes here"})]})]})};var k,m,x;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: false,
    readonly: false,
    label: "Label",
    description: "Checkbox",
    errorMessage: "",
    warningMessage: ""
  }
}`,...(x=(m=s.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var u,C,f;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: true,
    label: "Label",
    description: "Checkbox"
  }
}`,...(f=(C=n.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};var M,y,j;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: false,
    readonly: true,
    label: "Label",
    description: "Checkbox"
  }
}`,...(j=(y=c.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var E,v,W;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    checked: "indeterminate",
    disabled: false,
    readonly: true,
    label: "Label",
    description: "Checkbox"
  }
}`,...(W=(v=d.parameters)==null?void 0:v.docs)==null?void 0:W.source}}};var L,w,N;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: false,
    label: "Label",
    description: "Checkbox",
    state: "error",
    errorMessage: "Error Message goes here"
  }
}`,...(N=(w=o.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};var R,S,I;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: false,
    label: "Label",
    description: "Checkbox",
    state: "warning",
    warningMessage: "Warning Message goes here"
  }
}`,...(I=(S=i.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var D,U,O;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: false,
    description: "Checkbox"
  }
}`,...(O=(U=l.parameters)==null?void 0:U.docs)==null?void 0:O.source}}};var _,P,z;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
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

      <div className="gap-md grid grid-cols-3">
        <Checkbox checked={false} readonly={true} label="Readonly" description="Unchecked" />
        <Checkbox checked={true} readonly={true} label="Readonly" description="Checked" />
        <Checkbox checked="indeterminate" readonly={true} label="Readonly" description="Indeterminate" />
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
}`,...(z=(P=t.parameters)==null?void 0:P.docs)==null?void 0:z.source}}};const Z=["Playground","Disabled","Readonly","ReadonlyIndeterminate","WithError","WithWarning","WithoutLabel","Overview"];export{n as Disabled,t as Overview,s as Playground,c as Readonly,d as ReadonlyIndeterminate,o as WithError,i as WithWarning,l as WithoutLabel,Z as __namedExportsOrder,Y as default};
