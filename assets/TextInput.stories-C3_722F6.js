import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{z as q,G as a}from"./ColorPicker-BjT5yyPB.js";import"./NumberInput-CRMkQufQ.js";import"./index-0yr9KlQE.js";import"./index-tymuTqDW.js";import"./index-DotmK1FS.js";import"./borders-N_bRvfGw.js";import"./colors-mvAPBTAn.js";import"./index-ChaIqHV-.js";const K={title:"Components/TextInput",component:a,argTypes:{size:{control:"inline-radio",options:q},disabled:{control:"boolean"},loading:{control:"boolean"},errorMessage:{control:"text"},hideLabel:{control:"boolean"},label:{control:"text"},placeholder:{control:"text"},successMessage:{control:"text"}}},s={args:{id:"playground-text-input",label:"Label",placeholder:"Placeholder text...",size:"medium"}},l={args:{id:"overview-text-input",label:"Email",placeholder:"Enter your email...",size:"medium"}},t={render:()=>e.jsx("div",{className:"gap-lg flex flex-col",children:q.map(r=>e.jsx(a,{id:`text-input-${r}`,label:`${r.charAt(0).toUpperCase()+r.slice(1)} Size`,placeholder:`${r} input...`,size:r},r))})},i={args:{id:"error-text-input",label:"Email",placeholder:"Enter your email...",errorMessage:"Please enter a valid email address",size:"medium"}},o={args:{id:"success-text-input",label:"Email",placeholder:"Enter your email...",successMessage:"Email verified",size:"medium",value:"john.doe@example.com"}},d={args:{id:"loading-text-input",label:"Email",placeholder:"Enter your email...",loading:!0,size:"medium",value:"john.doe@example.com"}},n={args:{id:"disabled-text-input",label:"Email",placeholder:"Enter your email...",disabled:!0,size:"medium",value:"john.doe@example.com"}},u={args:{id:"no-label-text-input",placeholder:"No label input...",size:"medium",hideLabel:!0}},m={render:()=>e.jsxs("div",{className:"gap-lg flex flex-col",children:[e.jsx(a,{id:"default-state",label:"Default",placeholder:"Default state...",size:"medium"}),e.jsx(a,{id:"filled-state",label:"Filled",value:"Some content",size:"medium"}),e.jsx(a,{id:"error-state",label:"Error",placeholder:"Error state...",errorMessage:"This field is required",size:"medium"}),e.jsx(a,{id:"success-state",label:"Success",value:"Valid input",successMessage:"Input validated",size:"medium"}),e.jsx(a,{id:"loading-state",label:"Loading",value:"Validating...",loading:!0,size:"medium"}),e.jsx(a,{id:"disabled-state",label:"Disabled",value:"Disabled input",disabled:!0,size:"medium"})]})};var c,p,g;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    id: "playground-text-input",
    label: "Label",
    placeholder: "Placeholder text...",
    size: "medium"
  }
}`,...(g=(p=s.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var x,b,h;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    id: "overview-text-input",
    label: "Email",
    placeholder: "Enter your email...",
    size: "medium"
  }
}`,...(h=(b=l.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var z,v,E;t.parameters={...t.parameters,docs:{...(z=t.parameters)==null?void 0:z.docs,source:{originalSource:'{\n  render: () => <div className="gap-lg flex flex-col">\n      {TextInputSizes.map(size => <TextInput key={size} id={`text-input-${size}`} label={`${size.charAt(0).toUpperCase() + size.slice(1)} Size`} placeholder={`${size} input...`} size={size} />)}\n    </div>\n}',...(E=(v=t.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};var f,S,j;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    id: "error-text-input",
    label: "Email",
    placeholder: "Enter your email...",
    errorMessage: "Please enter a valid email address",
    size: "medium"
  }
}`,...(j=(S=i.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var y,T,I;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    id: "success-text-input",
    label: "Email",
    placeholder: "Enter your email...",
    successMessage: "Email verified",
    size: "medium",
    value: "john.doe@example.com"
  }
}`,...(I=(T=o.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var L,D,M;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    id: "loading-text-input",
    label: "Email",
    placeholder: "Enter your email...",
    loading: true,
    size: "medium",
    value: "john.doe@example.com"
  }
}`,...(M=(D=d.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var N,P,W;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    id: "disabled-text-input",
    label: "Email",
    placeholder: "Enter your email...",
    disabled: true,
    size: "medium",
    value: "john.doe@example.com"
  }
}`,...(W=(P=n.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};var $,w,A;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    id: "no-label-text-input",
    placeholder: "No label input...",
    size: "medium",
    hideLabel: true
  }
}`,...(A=(w=u.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var V,C,O;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div className="gap-lg flex flex-col">
      <TextInput id="default-state" label="Default" placeholder="Default state..." size="medium" />
      <TextInput id="filled-state" label="Filled" value="Some content" size="medium" />
      <TextInput id="error-state" label="Error" placeholder="Error state..." errorMessage="This field is required" size="medium" />
      <TextInput id="success-state" label="Success" value="Valid input" successMessage="Input validated" size="medium" />
      <TextInput id="loading-state" label="Loading" value="Validating..." loading={true} size="medium" />
      <TextInput id="disabled-state" label="Disabled" value="Disabled input" disabled={true} size="medium" />
    </div>
}`,...(O=(C=m.parameters)==null?void 0:C.docs)==null?void 0:O.source}}};const Q=["Playground","Overview","Sizes","WithError","WithSuccess","Loading","Disabled","WithoutLabel","AllStates"];export{m as AllStates,n as Disabled,d as Loading,l as Overview,s as Playground,t as Sizes,i as WithError,o as WithSuccess,u as WithoutLabel,Q as __namedExportsOrder,K as default};
