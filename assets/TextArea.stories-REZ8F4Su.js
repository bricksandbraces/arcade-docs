import{j as c}from"./jsx-runtime-D_zvdyIk.js";import{bF as _}from"./ContextMenuList-CrHLZopD.js";import"./index-CY-HDqYb.js";import{O as D}from"./onCardStoryShell-BJaWLAPz.js";import"./index-A6zbrgSY.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";import"./index-ZRCHFLd-.js";import"./sizes-BpUsT7VU.js";import"./colors-CoOIoG7W.js";const K={title:"Components/Inputs/TextArea",component:_,argTypes:{state:{control:{type:"select"},options:["default","error","warning","success"]}},args:{label:"Label",helperText:"Helper text",errorMessage:"Error Message",warningMessage:"Warning Message",successMessage:"Success",loadingMessage:"Loading...",disabled:!1,loading:!1,state:"default",maxLength:200,rows:4}},e={args:{placeholder:"Type your message..."}},s={args:{placeholder:"Type your message...",surface:"onCard"},render:k=>c.jsx(D,{children:c.jsx(_,{...k})})},a={args:{label:"Message",placeholder:"Type your message...",state:"error",errorMessage:"Please enter a valid message",rows:4}},r={args:{label:"Message",placeholder:"Type your message...",state:"warning",warningMessage:"Please review this text before continuing.",rows:4,value:"This message may need your attention."}},o={args:{label:"Message",placeholder:"Type your message...",state:"success",successMessage:"Looks good!",rows:4,value:"This is a sample message that has been validated successfully."}},n={args:{label:"Message",placeholder:"Type your message...",loading:!0,rows:4,value:"This is a sample message..."}},t={args:{label:"Message",placeholder:"Type your message...",disabled:!0,rows:4,value:"This is a disabled textarea."}},l={args:{label:"Message",placeholder:"No label textarea...",hideLabel:!0,rows:4}};var g,i,d;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    placeholder: "Type your message..."
  }
}`,...(d=(i=e.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var p,u,m;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    placeholder: "Type your message...",
    surface: "onCard"
  },
  render: args => <OnCardStoryShell>
      <TextArea {...args} />
    </OnCardStoryShell>
}`,...(m=(u=s.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var h,y,b;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: "Message",
    placeholder: "Type your message...",
    state: "error",
    errorMessage: "Please enter a valid message",
    rows: 4
  }
}`,...(b=(y=a.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var T,M,w;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: "Message",
    placeholder: "Type your message...",
    state: "warning",
    warningMessage: "Please review this text before continuing.",
    rows: 4,
    value: "This message may need your attention."
  }
}`,...(w=(M=r.parameters)==null?void 0:M.docs)==null?void 0:w.source}}};var x,S,f;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: "Message",
    placeholder: "Type your message...",
    state: "success",
    successMessage: "Looks good!",
    rows: 4,
    value: "This is a sample message that has been validated successfully."
  }
}`,...(f=(S=o.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var v,L,W;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: "Message",
    placeholder: "Type your message...",
    loading: true,
    rows: 4,
    value: "This is a sample message..."
  }
}`,...(W=(L=n.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var C,O,P;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: "Message",
    placeholder: "Type your message...",
    disabled: true,
    rows: 4,
    value: "This is a disabled textarea."
  }
}`,...(P=(O=t.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var E,j,A;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: "Message",
    placeholder: "No label textarea...",
    hideLabel: true,
    rows: 4
  }
}`,...(A=(j=l.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};const Q=["Playground","OnCard","WithError","WithWarning","WithSuccess","Loading","Disabled","WithoutLabel"];export{t as Disabled,n as Loading,s as OnCard,e as Playground,a as WithError,o as WithSuccess,r as WithWarning,l as WithoutLabel,Q as __namedExportsOrder,K as default};
