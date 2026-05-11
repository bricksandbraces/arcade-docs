import{n as e}from"./chunk-jRWAZmH_.js";import{Zt as t,ea as n,t as r}from"./iframe-D3A0Qfxl.js";import{n as i,t as a}from"./onCardStoryShell-BLEaE0mm.js";var o,s,c,l,u,d,f,p,m,h,g,_;e((()=>{r(),i(),o=n(),s={title:`Components/Inputs/TextArea`,component:t,tags:[`autodocs`],argTypes:{state:{control:{type:`select`},options:[`default`,`error`,`warning`,`success`]}},args:{label:`Label`,helperText:`Helper text`,errorMessage:`Error Message`,warningMessage:`Warning Message`,successMessage:`Success`,loadingMessage:`Loading...`,disabled:!1,loading:!1,state:`default`,maxLength:200,rows:4},parameters:{docs:{description:{component:`Multi-line text input with an optional character counter. Use for free-form content like comments, descriptions, or messages.`}}}},c={args:{placeholder:`Type your message...`}},l={args:{placeholder:`Type your message...`,surface:`onCard`},render:e=>(0,o.jsx)(a,{children:(0,o.jsx)(t,{...e})})},u={args:{label:`Message`,placeholder:`Type your message...`,state:`error`,errorMessage:`Please enter a valid message`,rows:4}},d={args:{label:`Message`,placeholder:`Type your message...`,state:`warning`,warningMessage:`Please review this text before continuing.`,rows:4,value:`This message may need your attention.`}},f={args:{label:`Message`,placeholder:`Type your message...`,state:`success`,successMessage:`Looks good!`,rows:4,value:`This is a sample message that has been validated successfully.`}},p={args:{label:`Message`,placeholder:`Type your message...`,loading:!0,rows:4,value:`This is a sample message...`}},m={args:{label:`Message`,placeholder:`Type your message...`,disabled:!0,rows:4,value:`This is a disabled textarea.`}},h={args:{label:`Message`,placeholder:`No label textarea...`,hideLabel:!0,rows:4}},g={args:{label:`Message`,placeholder:`Type your message...`,rows:4,value:`This story demonstrates trailing slot composition.`,trailingSlot:(0,o.jsx)(`span`,{className:`typography-label-small rounded-max bg-background-selected px-xs py-2xs text-text`,children:`Custom`}),state:`success`,successMessage:`Saved`}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Type your message..."
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Type your message...",
    surface: "onCard"
  },
  render: args => <OnCardStoryShell>
      <TextArea {...args} />
    </OnCardStoryShell>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Message",
    placeholder: "Type your message...",
    state: "error",
    errorMessage: "Please enter a valid message",
    rows: 4
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Message",
    placeholder: "Type your message...",
    state: "warning",
    warningMessage: "Please review this text before continuing.",
    rows: 4,
    value: "This message may need your attention."
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Message",
    placeholder: "Type your message...",
    state: "success",
    successMessage: "Looks good!",
    rows: 4,
    value: "This is a sample message that has been validated successfully."
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Message",
    placeholder: "Type your message...",
    loading: true,
    rows: 4,
    value: "This is a sample message..."
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Message",
    placeholder: "Type your message...",
    disabled: true,
    rows: 4,
    value: "This is a disabled textarea."
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Message",
    placeholder: "No label textarea...",
    hideLabel: true,
    rows: 4
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_=[`Playground`,`OnCard`,`WithError`,`WithWarning`,`WithSuccess`,`Loading`,`Disabled`,`WithoutLabel`,`Slot`]}))();export{m as Disabled,p as Loading,l as OnCard,c as Playground,g as Slot,u as WithError,f as WithSuccess,d as WithWarning,h as WithoutLabel,_ as __namedExportsOrder,s as default};