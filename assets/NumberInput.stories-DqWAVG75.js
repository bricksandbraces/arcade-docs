import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as t}from"./index-CY-HDqYb.js";import{I as U,b5 as H,b6 as s}from"./ContextMenuList-5QEYwpib.js";import{O as q}from"./onCardStoryShell-BJaWLAPz.js";import"./index-A6zbrgSY.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";import"./index-ZRCHFLd-.js";import"./sizes-BpUsT7VU.js";import"./colors-CoOIoG7W.js";const B={title:"Components/Inputs/NumberInput",component:s,argTypes:{size:{control:"inline-radio",options:H},disabled:{control:"boolean"},hideLabel:{control:"boolean"},min:{control:"number"},max:{control:"number"},step:{control:"number"},loading:{control:"boolean"},successMessage:{control:"text"},warningMessage:{control:"text"},errorMessage:{control:"text"},label:{control:"text"},placeholder:{control:"text"},state:{control:"inline-radio",options:U}},args:{id:"playground-number-input",label:"Label",placeholder:"Placeholder text...",size:"medium",step:1,helperText:"Helper Text",errorMessage:"Error Message",warningMessage:"Warning Message",successMessage:"Success",loadingMessage:"Loading..."}},u={args:{},render:e=>{const[a,n]=t.useState(e.value);return r.jsx(s,{...e,value:a,onValueChange:n})}},o={args:{...B.args,surface:"onCard"},render:e=>{const[a,n]=t.useState(e.value);return r.jsx(q,{children:r.jsx(s,{...e,value:a,onValueChange:n,surface:"onCard"})})}},F=({size:e})=>{const[a,n]=t.useState(void 0);return r.jsx(s,{id:`number-input-${e}`,label:`${e.charAt(0).toUpperCase()+e.slice(1)} Size`,placeholder:`${e} input...`,size:e,value:a,onValueChange:n})},l={render:()=>r.jsx("div",{className:"gap-lg flex flex-col",children:H.map(e=>r.jsx(F,{size:e},e))})},i={args:{label:"Price ($)",min:0,max:999.99,step:.01,value:29.99},render:e=>{const[a,n]=t.useState(e.value);return r.jsx(s,{...e,value:a,onValueChange:n})}},c={args:{id:"error-number-input",label:"Amount",placeholder:"Enter amount...",state:"error",errorMessage:"Please enter a valid amount",size:"medium"},render:e=>{const[a,n]=t.useState(e.value);return r.jsx(s,{...e,value:a,onValueChange:n})}},d={args:{id:"success-number-input",label:"Price",placeholder:"Enter price...",state:"success",successMessage:"Looks good!",size:"medium",value:42},render:e=>{const[a,n]=t.useState(e.value);return r.jsx(s,{...e,value:a,onValueChange:n})}},m={args:{id:"loading-number-input",label:"Amount",placeholder:"Enter amount...",loadingMessage:"Checking...",loading:!0,size:"medium",value:100},render:e=>{const[a,n]=t.useState(e.value);return r.jsx(s,{...e,value:a,onValueChange:n})}},p={args:{id:"disabled-number-input",label:"Amount",placeholder:"Enter amount...",disabled:!0,size:"medium",value:42},render:e=>{const[a,n]=t.useState(e.value);return r.jsx(s,{...e,value:a,onValueChange:n})}},g={args:{id:"no-label-number-input",placeholder:"No label input...",size:"medium",hideLabel:!0,label:"Amount"},render:e=>{const[a,n]=t.useState(e.value);return r.jsx(s,{...e,value:a,onValueChange:n})}};var b,h,v;u.parameters={...u.parameters,docs:{...(b=u.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {},
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState<number | undefined>(args.value as number);
    return <NumberInput {...args} value={value} onValueChange={setValue} />;
  }
}`,...(v=(h=u.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var S,x,V;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...meta.args,
    surface: "onCard"
  },
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState<number | undefined>(args.value as number);
    return <OnCardStoryShell>
        <NumberInput {...args} value={value} onValueChange={setValue} surface="onCard" />
      </OnCardStoryShell>;
  }
}`,...(V=(x=o.parameters)==null?void 0:x.docs)==null?void 0:V.source}}};var C,f,k;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div className="gap-lg flex flex-col">
      {NumberInputSizes.map(size => <SizeRow key={size} size={size} />)}
    </div>
}`,...(k=(f=l.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var M,z,N;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(N=(z=i.parameters)==null?void 0:z.docs)==null?void 0:N.source}}};var I,j,E;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(E=(j=c.parameters)==null?void 0:j.docs)==null?void 0:E.source}}};var L,A,P;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(P=(A=d.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};var W,y,O;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(O=(y=m.parameters)==null?void 0:y.docs)==null?void 0:O.source}}};var $,w,R;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(R=(w=p.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};var T,D,_;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(_=(D=g.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};const re=["Playground","OnCard","Sizes","WithMinMax","WithError","WithSuccess","Loading","Disabled","WithoutLabel"];export{p as Disabled,m as Loading,o as OnCard,u as Playground,l as Sizes,c as WithError,i as WithMinMax,d as WithSuccess,g as WithoutLabel,re as __namedExportsOrder,B as default};
