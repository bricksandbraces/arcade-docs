import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Ar as n,io as r,mr as i,t as a,yo as o,zr as s}from"./iframe-CTXv-SQR.js";var c,l,u,d,f,p,m,h,g,_,v,y,b,x,S;e((()=>{c=t(o(),1),a(),l=r(),u=e=>e??!1,d=e=>{let[t,r]=(0,c.useState)(()=>u(e.checked));return(0,c.useEffect)(()=>{r(u(e.checked))},[e.checked]),(0,l.jsx)(n,{...e,checked:t,onChange:n=>{!e.disabled&&!e.readonly&&r(t===`indeterminate`?!0:n.target.checked)}})},f={title:`Inputs & Controls/Checkbox`,component:n,tags:[`autodocs`],argTypes:{checked:{control:`inline-radio`,options:[!1,!0,`indeterminate`]},disabled:{control:`boolean`},readonly:{control:`boolean`},label:{control:`text`},description:{control:`text`},errorMessage:{control:`text`},warningMessage:{control:`text`},hideLabel:{control:`boolean`},state:{control:`inline-radio`,options:s}},render:d,parameters:{docs:{description:{component:`Checkbox with label, description, and validation states. Use for binary choices and multi-select lists in forms.`}}}},p={args:{checked:!1,disabled:!1,readonly:!1,label:`Label`,description:`Checkbox`,errorMessage:``,warningMessage:``}},m={args:{checked:!1,disabled:!0,label:`Label`,description:`Checkbox`}},h={args:{checked:!0,disabled:!1,readonly:!0,label:`Label`,description:`Checkbox`}},g={args:{checked:`indeterminate`,disabled:!1,readonly:!0,label:`Label`,description:`Checkbox`}},_={args:{checked:!1,disabled:!1,label:`Label`,description:`Checkbox`,state:`error`,errorMessage:`Error Message goes here`}},v={args:{checked:!1,disabled:!1,label:`Label`,description:`Checkbox`,state:`warning`,warningMessage:`Warning Message goes here`}},y={args:{checked:!1,disabled:!1,description:`Checkbox`}},b={parameters:{controls:{disable:!0}},render:()=>(0,l.jsxs)(`div`,{className:`gap-lg flex flex-col`,children:[(0,l.jsxs)(`div`,{className:`gap-md grid grid-cols-3`,children:[(0,l.jsx)(n,{checked:!1,label:`Enabled`,description:`Unchecked`}),(0,l.jsx)(n,{checked:!0,label:`Enabled`,description:`Checked`}),(0,l.jsx)(n,{checked:`indeterminate`,label:`Enabled`,description:`Indeterminate`})]}),(0,l.jsxs)(`div`,{className:`gap-md grid grid-cols-3`,children:[(0,l.jsx)(n,{checked:!1,disabled:!0,label:`Disabled`,description:`Unchecked`}),(0,l.jsx)(n,{checked:!0,disabled:!0,label:`Disabled`,description:`Checked`}),(0,l.jsx)(n,{checked:`indeterminate`,disabled:!0,label:`Disabled`,description:`Indeterminate`})]}),(0,l.jsxs)(`div`,{className:`gap-md grid grid-cols-3`,children:[(0,l.jsx)(n,{checked:!1,readonly:!0,label:`Readonly`,description:`Unchecked`}),(0,l.jsx)(n,{checked:!0,readonly:!0,label:`Readonly`,description:`Checked`}),(0,l.jsx)(n,{checked:`indeterminate`,readonly:!0,label:`Readonly`,description:`Indeterminate`})]}),(0,l.jsxs)(`div`,{className:`gap-md grid grid-cols-2`,children:[(0,l.jsx)(n,{checked:!1,label:`Error`,description:`Checkbox`,errorMessage:`Error Message goes here`}),(0,l.jsx)(n,{checked:!0,label:`Error`,description:`Checkbox`,errorMessage:`Error Message goes here`})]}),(0,l.jsxs)(`div`,{className:`gap-md grid grid-cols-2`,children:[(0,l.jsx)(n,{checked:!1,label:`Warning`,description:`Checkbox`,warningMessage:`Warning Message goes here`}),(0,l.jsx)(n,{checked:!0,label:`Warning`,description:`Checkbox`,warningMessage:`Warning Message goes here`})]})]})},x={render:()=>(0,l.jsx)(i,{})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: false,
    readonly: false,
    label: "Label",
    description: "Checkbox",
    errorMessage: "",
    warningMessage: ""
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: true,
    label: "Label",
    description: "Checkbox"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: false,
    readonly: true,
    label: "Label",
    description: "Checkbox"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    checked: "indeterminate",
    disabled: false,
    readonly: true,
    label: "Label",
    description: "Checkbox"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: false,
    label: "Label",
    description: "Checkbox",
    state: "error",
    errorMessage: "Error Message goes here"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: false,
    label: "Label",
    description: "Checkbox",
    state: "warning",
    warningMessage: "Warning Message goes here"
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: false,
    description: "Checkbox"
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <CheckboxSkeleton />
}`,...x.parameters?.docs?.source}}},S=[`Playground`,`Disabled`,`Readonly`,`ReadonlyIndeterminate`,`WithError`,`WithWarning`,`WithoutLabel`,`Overview`,`Skeleton`]}))();export{m as Disabled,b as Overview,p as Playground,h as Readonly,g as ReadonlyIndeterminate,x as Skeleton,_ as WithError,v as WithWarning,y as WithoutLabel,S as __namedExportsOrder,f as default};