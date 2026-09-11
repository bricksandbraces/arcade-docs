import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Io as n,Mr as r,Xr as i,Zo as a,ai as o,t as s}from"./iframe-DCEiqpO0.js";import{n as c,t as l}from"./figmaDesign-CO6i5n9C.js";var u,d,f,p,m,h,g,_,v,y,b,x,S,C,w;e((()=>{u=t(a(),1),s(),c(),d=n(),f=e=>e??!1,p=e=>{let[t,n]=(0,u.useState)(()=>f(e.checked));return(0,u.useEffect)(()=>{n(f(e.checked))},[e.checked]),(0,d.jsx)(i,{...e,checked:t,onChange:r=>{!e.disabled&&!e.readonly&&n(t===`indeterminate`?!0:r.target.checked)}})},m={title:`Inputs & Controls/Checkbox`,component:i,tags:[`autodocs`],argTypes:{checked:{control:`inline-radio`,options:[!1,!0,`indeterminate`]},disabled:{control:`boolean`},readonly:{control:`boolean`},label:{control:`text`},description:{control:`text`},errorMessage:{control:`text`},warningMessage:{control:`text`},hideLabel:{control:`boolean`},state:{control:`inline-radio`,options:o}},render:p,parameters:{design:l(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=2131-35993`),docs:{description:{component:`Checkbox with label, description, and validation states. Use for binary choices and multi-select lists in forms.`}}}},h={args:{checked:!1,disabled:!1,readonly:!1,label:`Label`,description:`Checkbox`,errorMessage:``,warningMessage:``}},g={args:{checked:!1,disabled:!0,label:`Label`,description:`Checkbox`}},_={args:{checked:!0,disabled:!1,readonly:!0,label:`Label`,description:`Checkbox`}},v={args:{checked:`indeterminate`,disabled:!1,readonly:!0,label:`Label`,description:`Checkbox`}},y={args:{checked:!1,disabled:!1,label:`Label`,description:`Checkbox`,state:`error`,errorMessage:`Error Message goes here`}},b={args:{checked:!1,disabled:!1,label:`Label`,description:`Checkbox`,state:`warning`,warningMessage:`Warning Message goes here`}},x={args:{checked:!1,disabled:!1,description:`Checkbox`}},S={parameters:{controls:{disable:!0}},render:()=>(0,d.jsxs)(`div`,{className:`gap-lg flex flex-col`,children:[(0,d.jsxs)(`div`,{className:`gap-md grid grid-cols-3`,children:[(0,d.jsx)(i,{checked:!1,label:`Enabled`,description:`Unchecked`}),(0,d.jsx)(i,{checked:!0,label:`Enabled`,description:`Checked`}),(0,d.jsx)(i,{checked:`indeterminate`,label:`Enabled`,description:`Indeterminate`})]}),(0,d.jsxs)(`div`,{className:`gap-md grid grid-cols-3`,children:[(0,d.jsx)(i,{checked:!1,disabled:!0,label:`Disabled`,description:`Unchecked`}),(0,d.jsx)(i,{checked:!0,disabled:!0,label:`Disabled`,description:`Checked`}),(0,d.jsx)(i,{checked:`indeterminate`,disabled:!0,label:`Disabled`,description:`Indeterminate`})]}),(0,d.jsxs)(`div`,{className:`gap-md grid grid-cols-3`,children:[(0,d.jsx)(i,{checked:!1,readonly:!0,label:`Readonly`,description:`Unchecked`}),(0,d.jsx)(i,{checked:!0,readonly:!0,label:`Readonly`,description:`Checked`}),(0,d.jsx)(i,{checked:`indeterminate`,readonly:!0,label:`Readonly`,description:`Indeterminate`})]}),(0,d.jsxs)(`div`,{className:`gap-md grid grid-cols-2`,children:[(0,d.jsx)(i,{checked:!1,label:`Error`,description:`Checkbox`,errorMessage:`Error Message goes here`}),(0,d.jsx)(i,{checked:!0,label:`Error`,description:`Checkbox`,errorMessage:`Error Message goes here`})]}),(0,d.jsxs)(`div`,{className:`gap-md grid grid-cols-2`,children:[(0,d.jsx)(i,{checked:!1,label:`Warning`,description:`Checkbox`,warningMessage:`Warning Message goes here`}),(0,d.jsx)(i,{checked:!0,label:`Warning`,description:`Checkbox`,warningMessage:`Warning Message goes here`})]})]})},C={render:()=>(0,d.jsx)(r,{})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: false,
    readonly: false,
    label: "Label",
    description: "Checkbox",
    errorMessage: "",
    warningMessage: ""
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: true,
    label: "Label",
    description: "Checkbox"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: false,
    readonly: true,
    label: "Label",
    description: "Checkbox"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    checked: "indeterminate",
    disabled: false,
    readonly: true,
    label: "Label",
    description: "Checkbox"
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: false,
    label: "Label",
    description: "Checkbox",
    state: "error",
    errorMessage: "Error Message goes here"
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: false,
    label: "Label",
    description: "Checkbox",
    state: "warning",
    warningMessage: "Warning Message goes here"
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: false,
    description: "Checkbox"
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <CheckboxSkeleton />
}`,...C.parameters?.docs?.source}}},w=[`Playground`,`Disabled`,`Readonly`,`ReadonlyIndeterminate`,`WithError`,`WithWarning`,`WithoutLabel`,`Overview`,`Skeleton`]}))();export{g as Disabled,S as Overview,h as Playground,_ as Readonly,v as ReadonlyIndeterminate,C as Skeleton,y as WithError,b as WithWarning,x as WithoutLabel,w as __namedExportsOrder,m as default};