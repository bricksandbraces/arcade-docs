import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as w,a0 as T,ba as $}from"./ContextMenuList-Cie4wAje.js";import"./index-CY-HDqYb.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";import"./index-ZRCHFLd-.js";import"./borders-N_bRvfGw.js";import"./colors-mvAPBTAn.js";const H={title:"F/Inputs/TextInput",component:$,argTypes:{size:{control:"inline-radio",options:T},disabled:{control:"boolean"},loading:{control:"boolean"},successMessage:{control:"text"},errorMessage:{control:"text"},hideLabel:{control:"boolean"},label:{control:"text"},placeholder:{control:"text"},state:{control:"inline-radio",options:w}},args:{errorMessage:"Error Message",warningMessage:"Warning Message",successMessage:"Erledigt",loadingMessage:"Lädt...",helperText:"Helper Text",id:"playground-text-input",label:"Label",placeholder:"Placeholder text...",size:"medium"}},r={args:{}},a={render:()=>i.jsx("div",{className:"gap-lg flex flex-col",children:T.map(e=>i.jsx($,{id:`text-input-${e}`,label:`${e.charAt(0).toUpperCase()+e.slice(1)} Size`,placeholder:`${e} input...`,size:e},e))})},s={args:{id:"error-text-input",label:"Email",placeholder:"Enter your email...",state:"error",errorMessage:"Please enter a valid email address",size:"medium"}},o={args:{id:"success-text-input",label:"New username",placeholder:"Enter your new username...",state:"success",successMessage:"Looks good!",size:"medium",value:"john.doe@example.com"}},t={args:{id:"loading-text-input",label:"Email",placeholder:"Enter your email...",loading:!0,size:"medium",value:"john.doe@example.com"}},n={args:{id:"disabled-text-input",label:"Email",placeholder:"Enter your email...",disabled:!0,size:"medium",value:"john.doe@example.com"}},l={args:{id:"no-label-text-input",placeholder:"No label input...",size:"medium",hideLabel:!0}};var d,c,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {}
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,u,g;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:'{\n  render: () => <div className="gap-lg flex flex-col">\n      {InputSizes.map(size => <TextInput key={size} id={`text-input-${size}`} label={`${size.charAt(0).toUpperCase() + size.slice(1)} Size`} placeholder={`${size} input...`} size={size} />)}\n    </div>\n}',...(g=(u=a.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var x,h,b;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    id: "error-text-input",
    label: "Email",
    placeholder: "Enter your email...",
    state: "error",
    errorMessage: "Please enter a valid email address",
    size: "medium"
  }
}`,...(b=(h=s.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var z,E,S;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    id: "success-text-input",
    label: "New username",
    placeholder: "Enter your new username...",
    state: "success",
    successMessage: "Looks good!",
    size: "medium",
    value: "john.doe@example.com"
  }
}`,...(S=(E=o.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var y,M,v;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    id: "loading-text-input",
    label: "Email",
    placeholder: "Enter your email...",
    loading: true,
    size: "medium",
    value: "john.doe@example.com"
  }
}`,...(v=(M=t.parameters)==null?void 0:M.docs)==null?void 0:v.source}}};var L,j,I;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    id: "disabled-text-input",
    label: "Email",
    placeholder: "Enter your email...",
    disabled: true,
    size: "medium",
    value: "john.doe@example.com"
  }
}`,...(I=(j=n.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var f,W,N;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    id: "no-label-text-input",
    placeholder: "No label input...",
    size: "medium",
    hideLabel: true
  }
}`,...(N=(W=l.parameters)==null?void 0:W.docs)==null?void 0:N.source}}};const O=["Playground","Sizes","WithError","WithSuccess","Loading","Disabled","WithoutLabel"];export{n as Disabled,t as Loading,r as Playground,a as Sizes,s as WithError,o as WithSuccess,l as WithoutLabel,O as __namedExportsOrder,H as default};
