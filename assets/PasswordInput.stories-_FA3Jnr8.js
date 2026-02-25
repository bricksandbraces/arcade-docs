import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{I as N,aN as $,aO as k}from"./ContextMenuList-YiUAHO3R.js";import"./index-CY-HDqYb.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";import"./index-ZRCHFLd-.js";import"./borders-N_bRvfGw.js";import"./colors-mvAPBTAn.js";const F={title:"F/Inputs/PasswordInput",component:k,argTypes:{size:{control:"inline-radio",options:$},disabled:{control:"boolean"},loading:{control:"boolean"},successMessage:{control:"text"},errorMessage:{control:"text"},hideLabel:{control:"boolean"},label:{control:"text"},placeholder:{control:"text"},state:{control:"inline-radio",options:N},defaultVisible:{control:"boolean"}},args:{errorMessage:"Error Message",warningMessage:"Warning Message",successMessage:"Erledigt",loadingMessage:"Lädt...",helperText:"Helper Text",id:"playground-password-input",label:"Label",placeholder:"Placeholder text...",size:"medium"}},s={args:{}},r={render:()=>l.jsx("div",{className:"gap-lg flex flex-col",children:$.map(e=>l.jsx(k,{id:`password-input-${e}`,label:`${e.charAt(0).toUpperCase()+e.slice(1)} Size`,placeholder:`${e} input...`,size:e},e))})},a={args:{id:"error-password-input",label:"Password",placeholder:"Enter your password...",state:"error",errorMessage:"Password must be at least 8 characters",size:"medium"}},o={args:{id:"success-password-input",label:"New password",placeholder:"Enter your new password...",state:"success",successMessage:"Looks good!",size:"medium",value:"SecurePassword123!"}},t={args:{id:"loading-password-input",label:"Password",placeholder:"Enter your password...",loadingMessage:"Checking...",loading:!0,size:"medium",value:"SecurePassword123!"}},d={args:{id:"disabled-password-input",label:"Password",placeholder:"Enter your password...",disabled:!0,size:"medium",value:"SecurePassword123!"}},n={args:{id:"no-label-password-input",placeholder:"Enter password...",size:"medium",hideLabel:!0,label:"Password"}};var i,c,p;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {}
}`,...(p=(c=s.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var u,m,g;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:'{\n  render: () => <div className="gap-lg flex flex-col">\n      {PasswordInputSizes.map(size => <PasswordInput key={size} id={`password-input-${size}`} label={`${size.charAt(0).toUpperCase() + size.slice(1)} Size`} placeholder={`${size} input...`} size={size} />)}\n    </div>\n}',...(g=(m=r.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var w,b,h;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    id: "error-password-input",
    label: "Password",
    placeholder: "Enter your password...",
    state: "error",
    errorMessage: "Password must be at least 8 characters",
    size: "medium"
  }
}`,...(h=(b=a.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var P,S,z;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    id: "success-password-input",
    label: "New password",
    placeholder: "Enter your new password...",
    state: "success",
    successMessage: "Looks good!",
    size: "medium",
    value: "SecurePassword123!"
  }
}`,...(z=(S=o.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var x,E,M;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    id: "loading-password-input",
    label: "Password",
    placeholder: "Enter your password...",
    loadingMessage: "Checking...",
    loading: true,
    size: "medium",
    value: "SecurePassword123!"
  }
}`,...(M=(E=t.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var y,L,v;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    id: "disabled-password-input",
    label: "Password",
    placeholder: "Enter your password...",
    disabled: true,
    size: "medium",
    value: "SecurePassword123!"
  }
}`,...(v=(L=d.parameters)==null?void 0:L.docs)==null?void 0:v.source}}};var f,I,W;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    id: "no-label-password-input",
    placeholder: "Enter password...",
    size: "medium",
    hideLabel: true,
    label: "Password"
  }
}`,...(W=(I=n.parameters)==null?void 0:I.docs)==null?void 0:W.source}}};const H=["Playground","Sizes","WithError","WithSuccess","Loading","Disabled","WithoutLabel"];export{d as Disabled,t as Loading,s as Playground,r as Sizes,a as WithError,o as WithSuccess,n as WithoutLabel,H as __namedExportsOrder,F as default};
