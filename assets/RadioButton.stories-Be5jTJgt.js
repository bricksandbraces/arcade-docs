import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{In as n,Mo as r,Xr as i,ni as a,qo as o,t as s}from"./iframe-Cm-nuzEn.js";import{n as c,t as l}from"./figmaDesign-CO6i5n9C.js";var u,d,f,p,m,h,g,_,v;e((()=>{u=t(o(),1),s(),c(),d=r(),f={title:`Inputs & Controls/RadioButton`,component:i,tags:[`autodocs`],argTypes:{checked:{control:`boolean`},disabled:{control:`boolean`},readonly:{control:`boolean`},label:{control:`text`},errorMessage:{control:`text`},warningMessage:{control:`text`},state:{control:`inline-radio`,options:a},hideLabel:{control:`boolean`},children:{control:`text`}},parameters:{design:l(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=2149-2606&m=dev`),docs:{description:{component:`Labeled radio option with validation states. Combine inside a RadioButtonGroup for mutually exclusive choices.`}}}},p=e=>{let[t,n]=(0,u.useState)(e.checked||!1);return(0,u.useEffect)(()=>{n(e.checked||!1)},[e.checked]),(0,d.jsx)(i,{...e,checked:t,onChange:t=>{!e.disabled&&!e.readonly&&n(t.target.checked)}})},m={render:p,args:{label:`Label`,children:`Radio Button Item`,checked:!1,disabled:!1,readonly:!1,errorMessage:``,warningMessage:``}},h={parameters:{controls:{disable:!0}},render:()=>(0,d.jsxs)(`div`,{className:`gap-lg flex flex-col`,children:[(0,d.jsxs)(`div`,{className:`gap-md flex flex-row flex-wrap`,children:[(0,d.jsx)(i,{label:`Label`,checked:!1,children:`Radio Button Item`}),(0,d.jsx)(i,{label:`Label`,checked:!0,children:`Radio Button Item`})]}),(0,d.jsxs)(`div`,{className:`gap-md flex flex-row flex-wrap`,children:[(0,d.jsx)(i,{label:`Label`,checked:!1,readonly:!0,children:`Radio Button Item`}),(0,d.jsx)(i,{label:`Label`,checked:!0,readonly:!0,children:`Radio Button Item`}),(0,d.jsx)(i,{label:`Label`,checked:!1,disabled:!0,children:`Radio Button Item`}),(0,d.jsx)(i,{label:`Label`,checked:!0,disabled:!0,children:`Radio Button Item`})]}),(0,d.jsxs)(`div`,{className:`gap-md flex flex-row flex-wrap`,children:[(0,d.jsx)(i,{label:`Label`,checked:!1,errorMessage:`This is an Error Message`,children:`Radio Button Item`}),(0,d.jsx)(i,{label:`Label`,checked:!0,errorMessage:`This is an Error Message`,children:`Radio Button Item`}),(0,d.jsx)(i,{label:`Label`,checked:!1,warningMessage:`This is a Warning Message`,children:`Radio Button Item`}),(0,d.jsx)(i,{label:`Label`,checked:!0,warningMessage:`This is a Warning Message`,children:`Radio Button Item`})]})]})},g={render:()=>(0,d.jsxs)(`div`,{className:`gap-md flex flex-col`,children:[(0,d.jsx)(i,{checked:!1,children:`Radio Button Item`}),(0,d.jsx)(i,{checked:!0,children:`Radio Button Item`}),(0,d.jsx)(i,{checked:!1,disabled:!0,children:`Radio Button Item`}),(0,d.jsx)(i,{checked:!0,disabled:!0,children:`Radio Button Item`})]})},_={render:()=>(0,d.jsx)(n,{})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: PlaygroundRadioButton,
  args: {
    label: "Label",
    children: "Radio Button Item",
    checked: false,
    disabled: false,
    readonly: false,
    errorMessage: "",
    warningMessage: ""
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="gap-lg flex flex-col">
      <div className="gap-md flex flex-row flex-wrap">
        <RadioButton label="Label" checked={false}>
          Radio Button Item
        </RadioButton>
        <RadioButton label="Label" checked={true}>
          Radio Button Item
        </RadioButton>
      </div>
      <div className="gap-md flex flex-row flex-wrap">
        <RadioButton label="Label" checked={false} readonly>
          Radio Button Item
        </RadioButton>
        <RadioButton label="Label" checked={true} readonly>
          Radio Button Item
        </RadioButton>
        <RadioButton label="Label" checked={false} disabled>
          Radio Button Item
        </RadioButton>
        <RadioButton label="Label" checked={true} disabled>
          Radio Button Item
        </RadioButton>
      </div>
      <div className="gap-md flex flex-row flex-wrap">
        <RadioButton label="Label" checked={false} errorMessage="This is an Error Message">
          Radio Button Item
        </RadioButton>
        <RadioButton label="Label" checked={true} errorMessage="This is an Error Message">
          Radio Button Item
        </RadioButton>
        <RadioButton label="Label" checked={false} warningMessage="This is a Warning Message">
          Radio Button Item
        </RadioButton>
        <RadioButton label="Label" checked={true} warningMessage="This is a Warning Message">
          Radio Button Item
        </RadioButton>
      </div>
    </div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div className="gap-md flex flex-col">
      <RadioButton checked={false}>Radio Button Item</RadioButton>
      <RadioButton checked={true}>Radio Button Item</RadioButton>
      <RadioButton checked={false} disabled>
        Radio Button Item
      </RadioButton>
      <RadioButton checked={true} disabled>
        Radio Button Item
      </RadioButton>
    </div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <RadioButtonSkeleton />
}`,..._.parameters?.docs?.source}}},v=[`Playground`,`Overview`,`WithoutLabel`,`Skeleton`]}))();export{h as Overview,m as Playground,_ as Skeleton,g as WithoutLabel,v as __namedExportsOrder,f as default};