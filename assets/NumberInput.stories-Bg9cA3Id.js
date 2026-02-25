import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as t}from"./index-CY-HDqYb.js";import{I as U,aF as F,aG as s}from"./ContextMenuList-BjZtb4V3.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";import"./index-ZRCHFLd-.js";import"./borders-N_bRvfGw.js";import"./colors-mvAPBTAn.js";const J={title:"F/Inputs/NumberInput",component:s,argTypes:{size:{control:"inline-radio",options:F},disabled:{control:"boolean"},hideLabel:{control:"boolean"},min:{control:"number"},max:{control:"number"},step:{control:"number"},successMessage:{control:"text"},errorMessage:{control:"text"},label:{control:"text"},placeholder:{control:"text"},state:{control:"inline-radio",options:U}},args:{errorMessage:"Error Message",warningMessage:"Warning Message",successMessage:"Erledigt",loadingMessage:"Lädt...",helperText:"Helper Text",id:"playground-number-input",label:"Label",placeholder:"Placeholder text...",size:"medium",step:1}},u={args:{},render:e=>{const[a,n]=t.useState(e.value);return r.jsx(s,{...e,value:a,onValueChange:n})}},l={render:()=>r.jsx("div",{className:"gap-lg flex flex-col",children:F.map(e=>{const[a,n]=t.useState(void 0);return r.jsx(s,{id:`number-input-${e}`,label:`${e.charAt(0).toUpperCase()+e.slice(1)} Size`,placeholder:`${e} input...`,size:e,value:a,onValueChange:n},e)})})},o={args:{label:"Price ($)",min:0,max:999.99,step:.01,value:29.99},render:e=>{const[a,n]=t.useState(e.value);return r.jsx(s,{...e,value:a,onValueChange:n})}},i={args:{id:"error-number-input",label:"Amount",placeholder:"Enter amount...",state:"error",errorMessage:"Please enter a valid amount",size:"medium"},render:e=>{const[a,n]=t.useState(e.value);return r.jsx(s,{...e,value:a,onValueChange:n})}},d={args:{id:"success-number-input",label:"Price",placeholder:"Enter price...",state:"success",successMessage:"Looks good!",size:"medium",value:42},render:e=>{const[a,n]=t.useState(e.value);return r.jsx(s,{...e,value:a,onValueChange:n})}},c={args:{id:"loading-number-input",label:"Amount",placeholder:"Enter amount...",loadingMessage:"Checking...",loading:!0,size:"medium",value:100},render:e=>{const[a,n]=t.useState(e.value);return r.jsx(s,{...e,value:a,onValueChange:n})}},m={args:{id:"disabled-number-input",label:"Amount",placeholder:"Enter amount...",disabled:!0,size:"medium",value:42},render:e=>{const[a,n]=t.useState(e.value);return r.jsx(s,{...e,value:a,onValueChange:n})}},p={args:{id:"no-label-number-input",placeholder:"No label input...",size:"medium",hideLabel:!0,label:"Amount"},render:e=>{const[a,n]=t.useState(e.value);return r.jsx(s,{...e,value:a,onValueChange:n})}};var g,b,h;u.parameters={...u.parameters,docs:{...(g=u.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {},
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState<number | undefined>(args.value as number);
    return <NumberInput {...args} value={value} onValueChange={setValue} />;
  }
}`,...(h=(b=u.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var v,V,x;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:'{\n  render: () => <div className="gap-lg flex flex-col">\n      {NumberInputSizes.map(size => {\n      const [value, setValue] = useState<number | undefined>(undefined);\n      return <NumberInput key={size} id={`number-input-${size}`} label={`${size.charAt(0).toUpperCase() + size.slice(1)} Size`} placeholder={`${size} input...`} size={size} value={value} onValueChange={setValue} />;\n    })}\n    </div>\n}',...(x=(V=l.parameters)==null?void 0:V.docs)==null?void 0:x.source}}};var S,f,z;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: "Price ($)",
    min: 0,
    max: 999.99,
    step: 0.01,
    value: 29.99
  },
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState<number | undefined>(args.value as number);
    return <NumberInput {...args} value={value} onValueChange={setValue} />;
  }
}`,...(z=(f=o.parameters)==null?void 0:f.docs)==null?void 0:z.source}}};var C,k,M;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    id: "error-number-input",
    label: "Amount",
    placeholder: "Enter amount...",
    state: "error",
    errorMessage: "Please enter a valid amount",
    size: "medium"
  },
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState<number | undefined>(args.value as number);
    return <NumberInput {...args} value={value} onValueChange={setValue} />;
  }
}`,...(M=(k=i.parameters)==null?void 0:k.docs)==null?void 0:M.source}}};var N,E,I;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    id: "success-number-input",
    label: "Price",
    placeholder: "Enter price...",
    state: "success",
    successMessage: "Looks good!",
    size: "medium",
    value: 42
  },
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState<number | undefined>(args.value as number);
    return <NumberInput {...args} value={value} onValueChange={setValue} />;
  }
}`,...(I=(E=d.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var j,L,A;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    id: "loading-number-input",
    label: "Amount",
    placeholder: "Enter amount...",
    loadingMessage: "Checking...",
    loading: true,
    size: "medium",
    value: 100
  },
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState<number | undefined>(args.value as number);
    return <NumberInput {...args} value={value} onValueChange={setValue} />;
  }
}`,...(A=(L=c.parameters)==null?void 0:L.docs)==null?void 0:A.source}}};var P,W,$;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    id: "disabled-number-input",
    label: "Amount",
    placeholder: "Enter amount...",
    disabled: true,
    size: "medium",
    value: 42
  },
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState<number | undefined>(args.value as number);
    return <NumberInput {...args} value={value} onValueChange={setValue} />;
  }
}`,...($=(W=m.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};var y,T,D;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    id: "no-label-number-input",
    placeholder: "No label input...",
    size: "medium",
    hideLabel: true,
    label: "Amount"
  },
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState<number | undefined>(args.value as number);
    return <NumberInput {...args} value={value} onValueChange={setValue} />;
  }
}`,...(D=(T=p.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};const K=["Playground","Sizes","WithMinMax","WithError","WithSuccess","Loading","Disabled","WithoutLabel"];export{m as Disabled,c as Loading,u as Playground,l as Sizes,i as WithError,o as WithMinMax,d as WithSuccess,p as WithoutLabel,K as __namedExportsOrder,J as default};
