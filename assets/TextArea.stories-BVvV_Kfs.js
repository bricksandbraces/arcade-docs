import{n as e}from"./chunk-jRWAZmH_.js";import{Lt as t,Zr as n,bn as r,t as i,vo as a}from"./iframe-Bu5mwsKt.js";import{n as o,t as s}from"./surfaceStoryShell-CxMW0EdU.js";var c,l,u,d,f,p,m,h,g,_,v,y,b,x;e((()=>{i(),o(),c=a(),l={title:`Inputs & Controls/TextArea`,component:t,tags:[`autodocs`],argTypes:{surface:{control:`inline-radio`,options:n},state:{control:{type:`select`},options:[`default`,`error`,`warning`,`success`]}},args:{surface:`default`,label:`Label`,helperText:`Helper text`,errorMessage:`Error Message`,warningMessage:`Warning Message`,successMessage:`Success`,loadingMessage:`Loading...`,disabled:!1,loading:!1,state:`default`,maxLength:200,rows:4},parameters:{docs:{description:{component:`Multi-line text input with an optional character counter. Use for free-form content like comments, descriptions, or messages.`}}}},u={args:{placeholder:`Type your message...`}},d={args:{label:`Message`,placeholder:`Type your message...`,state:`error`,errorMessage:`Please enter a valid message`,rows:4}},f={args:{label:`Message`,placeholder:`Type your message...`,state:`warning`,warningMessage:`Please review this text before continuing.`,rows:4,value:`This message may need your attention.`}},p={args:{label:`Message`,placeholder:`Type your message...`,state:`success`,successMessage:`Looks good!`,rows:4,value:`This is a sample message that has been validated successfully.`}},m={args:{label:`Message`,placeholder:`Type your message...`,loading:!0,rows:4,value:`This is a sample message...`}},h={args:{label:`Message`,placeholder:`Type your message...`,disabled:!0,rows:4,value:`This is a disabled textarea.`}},g={args:{label:`Message`,placeholder:`No label textarea...`,hideLabel:!0,rows:4}},_={args:{label:`Message`,placeholder:`Fills the available container width...`,fullWidth:!0,rows:4},render:e=>(0,c.jsx)(`div`,{className:`w-[640px] max-w-full`,children:(0,c.jsx)(t,{...e})})},v={args:{label:`Message`,placeholder:`Type your message...`,rows:4,value:`This story demonstrates trailing slot composition.`,trailingSlot:(0,c.jsx)(`span`,{className:`typography-label-small rounded-max bg-background-selected px-xs py-2xs text-text`,children:`Custom`}),state:`success`,successMessage:`Saved`}},y={render:()=>(0,c.jsx)(r,{})},b={render:e=>(0,c.jsx)(s,{children:n=>(0,c.jsx)(t,{...e,surface:n})})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Type your message..."
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Message",
    placeholder: "Type your message...",
    state: "error",
    errorMessage: "Please enter a valid message",
    rows: 4
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Message",
    placeholder: "Type your message...",
    state: "warning",
    warningMessage: "Please review this text before continuing.",
    rows: 4,
    value: "This message may need your attention."
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Message",
    placeholder: "Type your message...",
    state: "success",
    successMessage: "Looks good!",
    rows: 4,
    value: "This is a sample message that has been validated successfully."
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Message",
    placeholder: "Type your message...",
    loading: true,
    rows: 4,
    value: "This is a sample message..."
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Message",
    placeholder: "Type your message...",
    disabled: true,
    rows: 4,
    value: "This is a disabled textarea."
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Message",
    placeholder: "No label textarea...",
    hideLabel: true,
    rows: 4
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Message",
    placeholder: "Fills the available container width...",
    fullWidth: true,
    rows: 4
  },
  render: args => <div className="w-[640px] max-w-full">
      <TextArea {...args} />
    </div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <TextAreaSkeleton />
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <SurfaceStoryShell>
      {surface => <TextArea {...args} surface={surface} />}
    </SurfaceStoryShell>
}`,...b.parameters?.docs?.source}}},x=[`Playground`,`WithError`,`WithWarning`,`WithSuccess`,`Loading`,`Disabled`,`WithoutLabel`,`FullWidth`,`Slot`,`Skeleton`,`Surfaces`]}))();export{h as Disabled,_ as FullWidth,m as Loading,u as Playground,y as Skeleton,v as Slot,b as Surfaces,d as WithError,p as WithSuccess,f as WithWarning,g as WithoutLabel,x as __namedExportsOrder,l as default};