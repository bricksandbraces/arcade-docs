import{n as e}from"./chunk-jRWAZmH_.js";import{Ds as t,Mt as n,t as r,tr as i,zi as a}from"./iframe-_Ug8tvbS.js";import{n as o,t as s}from"./figmaDesign-DDiUnvXT.js";import{n as c,t as l}from"./surfaceStoryShell-LPGboElg.js";var u,d,f,p,m,h,g,_,v,y,b,x,S,C;e((()=>{r(),c(),o(),u=t(),d={title:`Inputs & Controls/TextArea`,component:n,tags:[`autodocs`],argTypes:{surface:{control:`inline-radio`,options:a},state:{control:{type:`select`},options:[`default`,`error`,`warning`,`success`]}},args:{surface:`default`,label:`Label`,helperText:`Helper text`,errorMessage:`Error Message`,warningMessage:`Warning Message`,successMessage:`Success`,loadingMessage:`Loading...`,disabled:!1,loading:!1,state:`default`,maxLength:200,rows:4},parameters:{design:s(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=2349-4694`),docs:{description:{component:`Multi-line text input with an optional character counter. Use for free-form content like comments, descriptions, or messages.`}}}},f={args:{placeholder:`Type your message...`}},p={args:{label:`Message`,placeholder:`Type your message...`,state:`error`,errorMessage:`Please enter a valid message`,rows:4}},m={args:{label:`Message`,placeholder:`Type your message...`,state:`warning`,warningMessage:`Please review this text before continuing.`,rows:4,value:`This message may need your attention.`}},h={args:{label:`Message`,placeholder:`Type your message...`,state:`success`,successMessage:`Looks good!`,rows:4,value:`This is a sample message that has been validated successfully.`}},g={args:{label:`Message`,placeholder:`Type your message...`,loading:!0,rows:4,value:`This is a sample message...`}},_={args:{label:`Message`,placeholder:`Type your message...`,disabled:!0,rows:4,value:`This is a disabled textarea.`}},v={args:{label:`Message`,placeholder:`No label textarea...`,hideLabel:!0,rows:4}},y={args:{label:`Message`,placeholder:`Fills the available container width...`,fullWidth:!0,rows:4},render:e=>(0,u.jsx)(`div`,{className:`w-[640px] max-w-full`,children:(0,u.jsx)(n,{...e})})},b={args:{label:`Message`,placeholder:`Type your message...`,rows:4,value:`This story demonstrates trailing slot composition.`,trailingSlot:(0,u.jsx)(`span`,{className:`typography-label-small rounded-max bg-background-selected px-xs py-2xs text-text`,children:`Custom`}),state:`success`,successMessage:`Saved`}},x={render:()=>(0,u.jsx)(i,{})},S={render:e=>(0,u.jsx)(l,{children:t=>(0,u.jsx)(n,{...e,surface:t})})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Type your message..."
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Message",
    placeholder: "Type your message...",
    state: "error",
    errorMessage: "Please enter a valid message",
    rows: 4
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Message",
    placeholder: "Type your message...",
    state: "warning",
    warningMessage: "Please review this text before continuing.",
    rows: 4,
    value: "This message may need your attention."
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Message",
    placeholder: "Type your message...",
    state: "success",
    successMessage: "Looks good!",
    rows: 4,
    value: "This is a sample message that has been validated successfully."
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Message",
    placeholder: "Type your message...",
    loading: true,
    rows: 4,
    value: "This is a sample message..."
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Message",
    placeholder: "Type your message...",
    disabled: true,
    rows: 4,
    value: "This is a disabled textarea."
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Message",
    placeholder: "No label textarea...",
    hideLabel: true,
    rows: 4
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Message",
    placeholder: "Fills the available container width...",
    fullWidth: true,
    rows: 4
  },
  render: args => <div className="w-[640px] max-w-full">
      <TextArea {...args} />
    </div>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Message",
    placeholder: "Type your message...",
    rows: 4,
    value: "This story demonstrates trailing slot composition.",
    trailingSlot: <span className="typography-label-small rounded-max bg-background-selected px-xs py-2xs text-text">
        Custom
      </span>,
    state: "success",
    successMessage: "Saved"
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <TextAreaSkeleton />
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => <SurfaceStoryShell>
      {surface => <TextArea {...args} surface={surface} />}
    </SurfaceStoryShell>
}`,...S.parameters?.docs?.source}}},C=[`Playground`,`WithError`,`WithWarning`,`WithSuccess`,`Loading`,`Disabled`,`WithoutLabel`,`FullWidth`,`Slot`,`Skeleton`,`Surfaces`]}))();export{_ as Disabled,y as FullWidth,g as Loading,f as Playground,x as Skeleton,b as Slot,S as Surfaces,p as WithError,h as WithSuccess,m as WithWarning,v as WithoutLabel,C as __namedExportsOrder,d as default};