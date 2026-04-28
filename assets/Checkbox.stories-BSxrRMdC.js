import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Di as n,En as r,Hi as i,_n as a,t as o}from"./iframe-g3u2SE_6.js";var s,c,l,u,d,f,p,m,h,g,_,v,y,b;e((()=>{s=t(i(),1),o(),c=n(),l=e=>e??!1,u=e=>{let[t,n]=(0,s.useState)(()=>l(e.checked));return(0,s.useEffect)(()=>{n(l(e.checked))},[e.checked]),(0,c.jsx)(a,{...e,checked:t,onChange:r=>{!e.disabled&&!e.readonly&&n(t===`indeterminate`?!0:r.target.checked)}})},d={title:`Components/Checkbox`,component:a,tags:[`autodocs`],argTypes:{checked:{control:`inline-radio`,options:[!1,!0,`indeterminate`]},disabled:{control:`boolean`},readonly:{control:`boolean`},label:{control:`text`},description:{control:`text`},errorMessage:{control:`text`},warningMessage:{control:`text`},hideLabel:{control:`boolean`},state:{control:`inline-radio`,options:r}},render:u,parameters:{docs:{description:{component:`Checkbox with label, description, and validation states. Use for binary choices and multi-select lists in forms.`}}}},f={args:{checked:!1,disabled:!1,readonly:!1,label:`Label`,description:`Checkbox`,errorMessage:``,warningMessage:``}},p={args:{checked:!1,disabled:!0,label:`Label`,description:`Checkbox`}},m={args:{checked:!0,disabled:!1,readonly:!0,label:`Label`,description:`Checkbox`}},h={args:{checked:`indeterminate`,disabled:!1,readonly:!0,label:`Label`,description:`Checkbox`}},g={args:{checked:!1,disabled:!1,label:`Label`,description:`Checkbox`,state:`error`,errorMessage:`Error Message goes here`}},_={args:{checked:!1,disabled:!1,label:`Label`,description:`Checkbox`,state:`warning`,warningMessage:`Warning Message goes here`}},v={args:{checked:!1,disabled:!1,description:`Checkbox`}},y={parameters:{controls:{disable:!0}},render:()=>(0,c.jsxs)(`div`,{className:`gap-lg flex flex-col`,children:[(0,c.jsxs)(`div`,{className:`gap-md grid grid-cols-3`,children:[(0,c.jsx)(a,{checked:!1,label:`Enabled`,description:`Unchecked`}),(0,c.jsx)(a,{checked:!0,label:`Enabled`,description:`Checked`}),(0,c.jsx)(a,{checked:`indeterminate`,label:`Enabled`,description:`Indeterminate`})]}),(0,c.jsxs)(`div`,{className:`gap-md grid grid-cols-3`,children:[(0,c.jsx)(a,{checked:!1,disabled:!0,label:`Disabled`,description:`Unchecked`}),(0,c.jsx)(a,{checked:!0,disabled:!0,label:`Disabled`,description:`Checked`}),(0,c.jsx)(a,{checked:`indeterminate`,disabled:!0,label:`Disabled`,description:`Indeterminate`})]}),(0,c.jsxs)(`div`,{className:`gap-md grid grid-cols-3`,children:[(0,c.jsx)(a,{checked:!1,readonly:!0,label:`Readonly`,description:`Unchecked`}),(0,c.jsx)(a,{checked:!0,readonly:!0,label:`Readonly`,description:`Checked`}),(0,c.jsx)(a,{checked:`indeterminate`,readonly:!0,label:`Readonly`,description:`Indeterminate`})]}),(0,c.jsxs)(`div`,{className:`gap-md grid grid-cols-2`,children:[(0,c.jsx)(a,{checked:!1,label:`Error`,description:`Checkbox`,errorMessage:`Error Message goes here`}),(0,c.jsx)(a,{checked:!0,label:`Error`,description:`Checkbox`,errorMessage:`Error Message goes here`})]}),(0,c.jsxs)(`div`,{className:`gap-md grid grid-cols-2`,children:[(0,c.jsx)(a,{checked:!1,label:`Warning`,description:`Checkbox`,warningMessage:`Warning Message goes here`}),(0,c.jsx)(a,{checked:!0,label:`Warning`,description:`Checkbox`,warningMessage:`Warning Message goes here`})]})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: false,
    readonly: false,
    label: "Label",
    description: "Checkbox",
    errorMessage: "",
    warningMessage: ""
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: true,
    label: "Label",
    description: "Checkbox"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: false,
    readonly: true,
    label: "Label",
    description: "Checkbox"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    checked: "indeterminate",
    disabled: false,
    readonly: true,
    label: "Label",
    description: "Checkbox"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: false,
    label: "Label",
    description: "Checkbox",
    state: "error",
    errorMessage: "Error Message goes here"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: false,
    label: "Label",
    description: "Checkbox",
    state: "warning",
    warningMessage: "Warning Message goes here"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: false,
    description: "Checkbox"
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b=[`Playground`,`Disabled`,`Readonly`,`ReadonlyIndeterminate`,`WithError`,`WithWarning`,`WithoutLabel`,`Overview`]}))();export{p as Disabled,y as Overview,f as Playground,m as Readonly,h as ReadonlyIndeterminate,g as WithError,_ as WithWarning,v as WithoutLabel,b as __namedExportsOrder,d as default};