import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as T,bl as N,bm as c}from"./ContextMenuList-w4l5Bqjq.js";import"./index-CY-HDqYb.js";import{O as A}from"./onCardStoryShell-BJaWLAPz.js";import"./index-A6zbrgSY.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";import"./index-ZRCHFLd-.js";import"./sizes-BpUsT7VU.js";import"./colors-CoOIoG7W.js";const D={title:"Components/Inputs/PasswordInput",component:c,argTypes:{size:{control:"inline-radio",options:N},disabled:{control:"boolean"},loading:{control:"boolean"},successMessage:{control:"text"},errorMessage:{control:"text"},hideLabel:{control:"boolean"},label:{control:"text"},placeholder:{control:"text"},state:{control:"inline-radio",options:T},defaultVisible:{control:"boolean"}},args:{errorMessage:"Error Message",warningMessage:"Warning Message",successMessage:"Success",loadingMessage:"Loading...",helperText:"Helper Text",id:"playground-password-input",label:"Label",placeholder:"Placeholder text...",size:"medium"}},s={args:{}},r={args:{...D.args,surface:"onCard"},render:e=>i.jsx(A,{children:i.jsx(c,{...e})})},a={render:()=>i.jsx("div",{className:"gap-lg flex flex-col",children:N.map(e=>i.jsx(c,{id:`password-input-${e}`,label:`${e.charAt(0).toUpperCase()+e.slice(1)} Size`,placeholder:`${e} input...`,size:e},e))})},o={args:{id:"error-password-input",label:"Password",placeholder:"Enter your password...",state:"error",errorMessage:"Password must be at least 8 characters",size:"medium"}},n={args:{id:"success-password-input",label:"New password",placeholder:"Enter your new password...",state:"success",successMessage:"Looks good!",size:"medium",value:"SecurePassword123!"}},d={args:{id:"loading-password-input",label:"Password",placeholder:"Enter your password...",loadingMessage:"Checking...",loading:!0,size:"medium",value:"SecurePassword123!"}},t={args:{id:"disabled-password-input",label:"Password",placeholder:"Enter your password...",disabled:!0,size:"medium",value:"SecurePassword123!"}},l={args:{id:"no-label-password-input",placeholder:"Enter password...",size:"medium",hideLabel:!0,label:"Password"}};var p,u,m;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {}
}`,...(m=(u=s.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var g,w,b;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...meta.args,
    surface: "onCard"
  },
  render: args => <OnCardStoryShell>
      <PasswordInput {...args} />
    </OnCardStoryShell>
}`,...(b=(w=r.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var h,S,P;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:'{\n  render: () => <div className="gap-lg flex flex-col">\n      {PasswordInputSizes.map(size => <PasswordInput key={size} id={`password-input-${size}`} label={`${size.charAt(0).toUpperCase() + size.slice(1)} Size`} placeholder={`${size} input...`} size={size} />)}\n    </div>\n}',...(P=(S=a.parameters)==null?void 0:S.docs)==null?void 0:P.source}}};var z,x,y;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    id: "error-password-input",
    label: "Password",
    placeholder: "Enter your password...",
    state: "error",
    errorMessage: "Password must be at least 8 characters",
    size: "medium"
  }
}`,...(y=(x=o.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var E,M,C;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    id: "success-password-input",
    label: "New password",
    placeholder: "Enter your new password...",
    state: "success",
    successMessage: "Looks good!",
    size: "medium",
    value: "SecurePassword123!"
  }
}`,...(C=(M=n.parameters)==null?void 0:M.docs)==null?void 0:C.source}}};var f,L,v;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    id: "loading-password-input",
    label: "Password",
    placeholder: "Enter your password...",
    loadingMessage: "Checking...",
    loading: true,
    size: "medium",
    value: "SecurePassword123!"
  }
}`,...(v=(L=d.parameters)==null?void 0:L.docs)==null?void 0:v.source}}};var I,O,W;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    id: "disabled-password-input",
    label: "Password",
    placeholder: "Enter your password...",
    disabled: true,
    size: "medium",
    value: "SecurePassword123!"
  }
}`,...(W=(O=t.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};var j,$,k;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    id: "no-label-password-input",
    placeholder: "Enter password...",
    size: "medium",
    hideLabel: true,
    label: "Password"
  }
}`,...(k=($=l.parameters)==null?void 0:$.docs)==null?void 0:k.source}}};const K=["Playground","OnCard","Sizes","WithError","WithSuccess","Loading","Disabled","WithoutLabel"];export{t as Disabled,d as Loading,r as OnCard,s as Playground,a as Sizes,o as WithError,n as WithSuccess,l as WithoutLabel,K as __namedExportsOrder,D as default};
