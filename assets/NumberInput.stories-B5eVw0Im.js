import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as t}from"./index-CY-HDqYb.js";import{I as G,b0 as F,b1 as s}from"./ContextMenuList-DeCYJw7n.js";import{O as J}from"./onCardStoryShell-BJaWLAPz.js";import{I as K}from"./IconBolt-DWikTyax.js";import"./index-A6zbrgSY.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";const Q={title:"Components/Inputs/NumberInput",component:s,argTypes:{size:{control:"inline-radio",options:F},disabled:{control:"boolean"},hideLabel:{control:"boolean"},min:{control:"number"},max:{control:"number"},step:{control:"number"},loading:{control:"boolean"},successMessage:{control:"text"},warningMessage:{control:"text"},errorMessage:{control:"text"},label:{control:"text"},placeholder:{control:"text"},state:{control:"inline-radio",options:G}},args:{id:"playground-number-input",label:"Label",placeholder:"Placeholder text...",size:"medium",step:1,helperText:"Helper Text",errorMessage:"Error Message",warningMessage:"Warning Message",successMessage:"Success",loadingMessage:"Loading..."}},u={args:{},render:e=>{const[a,n]=t.useState(e.value);return r.jsx(s,{...e,value:a,onValueChange:n})}},o={args:{...Q.args,surface:"onCard"},render:e=>{const[a,n]=t.useState(e.value);return r.jsx(J,{children:r.jsx(s,{...e,value:a,onValueChange:n,surface:"onCard"})})}},X=({size:e})=>{const[a,n]=t.useState(void 0);return r.jsx(s,{id:`number-input-${e}`,label:`${e.charAt(0).toUpperCase()+e.slice(1)} Size`,placeholder:`${e} input...`,size:e,value:a,onValueChange:n})},l={render:()=>r.jsx("div",{className:"gap-lg flex flex-col",children:F.map(e=>r.jsx(X,{size:e},e))})},i={args:{label:"Price ($)",min:0,max:999.99,step:.01,value:29.99},render:e=>{const[a,n]=t.useState(e.value);return r.jsx(s,{...e,value:a,onValueChange:n})}},c={args:{id:"error-number-input",label:"Amount",placeholder:"Enter amount...",state:"error",errorMessage:"Please enter a valid amount",size:"medium"},render:e=>{const[a,n]=t.useState(e.value);return r.jsx(s,{...e,value:a,onValueChange:n})}},d={args:{id:"success-number-input",label:"Price",placeholder:"Enter price...",state:"success",successMessage:"Looks good!",size:"medium",value:42},render:e=>{const[a,n]=t.useState(e.value);return r.jsx(s,{...e,value:a,onValueChange:n})}},m={args:{id:"loading-number-input",label:"Amount",placeholder:"Enter amount...",loadingMessage:"Checking...",loading:!0,size:"medium",value:100},render:e=>{const[a,n]=t.useState(e.value);return r.jsx(s,{...e,value:a,onValueChange:n})}},p={args:{id:"disabled-number-input",label:"Amount",placeholder:"Enter amount...",disabled:!0,size:"medium",value:42},render:e=>{const[a,n]=t.useState(e.value);return r.jsx(s,{...e,value:a,onValueChange:n})}},g={args:{id:"slot-number-input",label:"Amount",placeholder:"Enter amount..."},render:e=>{const[a,n]=t.useState(e.value);return r.jsx(s,{...e,value:a,onValueChange:n,leadingSlot:r.jsx(K,{className:"stroke-icon-accent size-4",stroke:1.5}),trailingSlot:r.jsx("span",{className:"typography-label text-text-accent",children:"EUR"})})}},b={args:{id:"no-label-number-input",placeholder:"No label input...",size:"medium",hideLabel:!0,label:"Amount"},render:e=>{const[a,n]=t.useState(e.value);return r.jsx(s,{...e,value:a,onValueChange:n})}};var h,v,S;u.parameters={...u.parameters,docs:{...(h=u.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {},
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState<number | undefined>(args.value as number);
    return <NumberInput {...args} value={value} onValueChange={setValue} />;
  }
}`,...(S=(v=u.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var x,V,f;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(f=(V=o.parameters)==null?void 0:V.docs)==null?void 0:f.source}}};var C,k,N;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div className="gap-lg flex flex-col">
      {NumberInputSizes.map(size => <SizeRow key={size} size={size} />)}
    </div>
}`,...(N=(k=l.parameters)==null?void 0:k.docs)==null?void 0:N.source}}};var z,I,M;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(M=(I=i.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var E,j,y;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(y=(j=c.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var A,L,P;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(P=(L=d.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var W,O,R;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(R=(O=m.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var $,w,T;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(T=(w=p.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var U,B,D;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    id: "slot-number-input",
    label: "Amount",
    placeholder: "Enter amount..."
  },
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState<number | undefined>(args.value as number | undefined);
    return <NumberInput {...args} value={value} onValueChange={setValue} leadingSlot={<IconBolt className="stroke-icon-accent size-4" stroke={1.5} />} trailingSlot={<span className="typography-label text-text-accent">EUR</span>} />;
  }
}`,...(D=(B=g.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var _,H,q;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(q=(H=b.parameters)==null?void 0:H.docs)==null?void 0:q.source}}};const ue=["Playground","OnCard","Sizes","WithMinMax","WithError","WithSuccess","Loading","Disabled","Slot","WithoutLabel"];export{p as Disabled,m as Loading,o as OnCard,u as Playground,l as Sizes,g as Slot,c as WithError,i as WithMinMax,d as WithSuccess,b as WithoutLabel,ue as __namedExportsOrder,Q as default};
