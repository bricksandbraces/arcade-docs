import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{I as _,bh as U,bi as p}from"./ContextMenu-DV5-H7-R.js";import"./index-CY-HDqYb.js";import{O as H}from"./onCardStoryShell-BJaWLAPz.js";import{I as R}from"./IconSparkles-DEU1B91Q.js";import"./index-A6zbrgSY.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";const V={title:"Components/Inputs/PasswordInput",component:p,argTypes:{size:{control:"inline-radio",options:U},disabled:{control:"boolean"},loading:{control:"boolean"},successMessage:{control:"text"},errorMessage:{control:"text"},hideLabel:{control:"boolean"},label:{control:"text"},placeholder:{control:"text"},state:{control:"inline-radio",options:_},defaultVisible:{control:"boolean"}},args:{errorMessage:"Error Message",warningMessage:"Warning Message",successMessage:"Success",loadingMessage:"Loading...",helperText:"Helper Text",id:"playground-password-input",label:"Label",placeholder:"Placeholder text...",size:"medium"}},r={args:{}},a={args:{id:"slot-password-input",label:"Password",placeholder:"Enter your password...",trailingSlot:s.jsx("span",{className:"typography-label text-text-accent whitespace-nowrap",children:"Secure"}),leadingSlot:s.jsx(R,{size:16,className:"stroke-icon-accent",strokeWidth:1.5})}},o={args:{...V.args,surface:"onCard"},render:e=>s.jsx(H,{children:s.jsx(p,{...e})})},n={render:()=>s.jsx("div",{className:"gap-lg flex flex-col",children:U.map(e=>s.jsx(p,{id:`password-input-${e}`,label:`${e.charAt(0).toUpperCase()+e.slice(1)} Size`,placeholder:`${e} input...`,size:e},e))})},t={args:{id:"error-password-input",label:"Password",placeholder:"Enter your password...",state:"error",errorMessage:"Password must be at least 8 characters",size:"medium"}},d={args:{id:"success-password-input",label:"New password",placeholder:"Enter your new password...",state:"success",successMessage:"Looks good!",size:"medium",value:"SecurePassword123!"}},l={args:{id:"loading-password-input",label:"Password",placeholder:"Enter your password...",loadingMessage:"Checking...",loading:!0,size:"medium",value:"SecurePassword123!"}},c={args:{id:"disabled-password-input",label:"Password",placeholder:"Enter your password...",disabled:!0,size:"medium",value:"SecurePassword123!"}},i={args:{id:"no-label-password-input",placeholder:"Enter password...",size:"medium",hideLabel:!0,label:"Password"}};var u,m,g;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {}
}`,...(g=(m=r.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var w,h,b;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    id: "slot-password-input",
    label: "Password",
    placeholder: "Enter your password...",
    trailingSlot: <span className="typography-label text-text-accent whitespace-nowrap">
        Secure
      </span>,
    leadingSlot: <IconSparkles size={16} className="stroke-icon-accent" strokeWidth={1.5} />
  }
}`,...(b=(h=a.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var S,P,x;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...meta.args,
    surface: "onCard"
  },
  render: args => <OnCardStoryShell>
      <PasswordInput {...args} />
    </OnCardStoryShell>
}`,...(x=(P=o.parameters)==null?void 0:P.docs)==null?void 0:x.source}}};var z,y,E;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:'{\n  render: () => <div className="gap-lg flex flex-col">\n      {PasswordInputSizes.map(size => <PasswordInput key={size} id={`password-input-${size}`} label={`${size.charAt(0).toUpperCase() + size.slice(1)} Size`} placeholder={`${size} input...`} size={size} />)}\n    </div>\n}',...(E=(y=n.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};var M,f,C;t.parameters={...t.parameters,docs:{...(M=t.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    id: "error-password-input",
    label: "Password",
    placeholder: "Enter your password...",
    state: "error",
    errorMessage: "Password must be at least 8 characters",
    size: "medium"
  }
}`,...(C=(f=t.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var I,k,L;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    id: "success-password-input",
    label: "New password",
    placeholder: "Enter your new password...",
    state: "success",
    successMessage: "Looks good!",
    size: "medium",
    value: "SecurePassword123!"
  }
}`,...(L=(k=d.parameters)==null?void 0:k.docs)==null?void 0:L.source}}};var v,W,j;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    id: "loading-password-input",
    label: "Password",
    placeholder: "Enter your password...",
    loadingMessage: "Checking...",
    loading: true,
    size: "medium",
    value: "SecurePassword123!"
  }
}`,...(j=(W=l.parameters)==null?void 0:W.docs)==null?void 0:j.source}}};var N,O,$;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    id: "disabled-password-input",
    label: "Password",
    placeholder: "Enter your password...",
    disabled: true,
    size: "medium",
    value: "SecurePassword123!"
  }
}`,...($=(O=c.parameters)==null?void 0:O.docs)==null?void 0:$.source}}};var T,A,D;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    id: "no-label-password-input",
    placeholder: "Enter password...",
    size: "medium",
    hideLabel: true,
    label: "Password"
  }
}`,...(D=(A=i.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};const Y=["Playground","Slot","OnCard","Sizes","WithError","WithSuccess","Loading","Disabled","WithoutLabel"];export{c as Disabled,l as Loading,o as OnCard,r as Playground,n as Sizes,a as Slot,t as WithError,d as WithSuccess,i as WithoutLabel,Y as __namedExportsOrder,V as default};
