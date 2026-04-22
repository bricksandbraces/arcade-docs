import{j as g}from"./jsx-runtime-D_zvdyIk.js";import{bN as H}from"./ContextMenu-DwPyJibk.js";import"./index-CY-HDqYb.js";import{O as R}from"./onCardStoryShell-BJaWLAPz.js";import"./index-A6zbrgSY.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";const Q={title:"Components/Inputs/TextArea",component:H,argTypes:{state:{control:{type:"select"},options:["default","error","warning","success"]}},args:{label:"Label",helperText:"Helper text",errorMessage:"Error Message",warningMessage:"Warning Message",successMessage:"Success",loadingMessage:"Loading...",disabled:!1,loading:!1,state:"default",maxLength:200,rows:4}},e={args:{placeholder:"Type your message..."}},s={args:{placeholder:"Type your message...",surface:"onCard"},render:I=>g.jsx(R,{children:g.jsx(H,{...I})})},a={args:{label:"Message",placeholder:"Type your message...",state:"error",errorMessage:"Please enter a valid message",rows:4}},r={args:{label:"Message",placeholder:"Type your message...",state:"warning",warningMessage:"Please review this text before continuing.",rows:4,value:"This message may need your attention."}},o={args:{label:"Message",placeholder:"Type your message...",state:"success",successMessage:"Looks good!",rows:4,value:"This is a sample message that has been validated successfully."}},t={args:{label:"Message",placeholder:"Type your message...",loading:!0,rows:4,value:"This is a sample message..."}},n={args:{label:"Message",placeholder:"Type your message...",disabled:!0,rows:4,value:"This is a disabled textarea."}},l={args:{label:"Message",placeholder:"No label textarea...",hideLabel:!0,rows:4}},c={args:{label:"Message",placeholder:"Type your message...",rows:4,value:"This story demonstrates trailing slot composition.",trailingSlot:g.jsx("span",{className:"typography-label-small rounded-max bg-background-selected px-xs py-2xs text-text",children:"Custom"}),state:"success",successMessage:"Saved"}};var d,i,p;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    placeholder: "Type your message..."
  }
}`,...(p=(i=e.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var u,m,h;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    placeholder: "Type your message...",
    surface: "onCard"
  },
  render: args => <OnCardStoryShell>
      <TextArea {...args} />
    </OnCardStoryShell>
}`,...(h=(m=s.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var y,b,x;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: "Message",
    placeholder: "Type your message...",
    state: "error",
    errorMessage: "Please enter a valid message",
    rows: 4
  }
}`,...(x=(b=a.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var T,M,S;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: "Message",
    placeholder: "Type your message...",
    state: "warning",
    warningMessage: "Please review this text before continuing.",
    rows: 4,
    value: "This message may need your attention."
  }
}`,...(S=(M=r.parameters)==null?void 0:M.docs)==null?void 0:S.source}}};var w,v,f;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: "Message",
    placeholder: "Type your message...",
    state: "success",
    successMessage: "Looks good!",
    rows: 4,
    value: "This is a sample message that has been validated successfully."
  }
}`,...(f=(v=o.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var L,W,C;t.parameters={...t.parameters,docs:{...(L=t.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    label: "Message",
    placeholder: "Type your message...",
    loading: true,
    rows: 4,
    value: "This is a sample message..."
  }
}`,...(C=(W=t.parameters)==null?void 0:W.docs)==null?void 0:C.source}}};var O,P,j;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    label: "Message",
    placeholder: "Type your message...",
    disabled: true,
    rows: 4,
    value: "This is a disabled textarea."
  }
}`,...(j=(P=n.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};var E,N,k;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: "Message",
    placeholder: "No label textarea...",
    hideLabel: true,
    rows: 4
  }
}`,...(k=(N=l.parameters)==null?void 0:N.docs)==null?void 0:k.source}}};var A,_,D;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(D=(_=c.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};const U=["Playground","OnCard","WithError","WithWarning","WithSuccess","Loading","Disabled","WithoutLabel","Slot"];export{n as Disabled,t as Loading,s as OnCard,e as Playground,c as Slot,a as WithError,o as WithSuccess,r as WithWarning,l as WithoutLabel,U as __namedExportsOrder,Q as default};
