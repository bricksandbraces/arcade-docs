import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{r as m}from"./index-0yr9KlQE.js";import{N as I,f as r}from"./NumberInput-LKINkquG.js";import"./borders-N_bRvfGw.js";import"./colors-mvAPBTAn.js";import"./index-ChaIqHV-.js";const P={title:"Components/NumberInput",component:r,argTypes:{size:{control:"inline-radio",options:I},disabled:{control:"boolean"},hideLabel:{control:"boolean"},min:{control:"number"},max:{control:"number"},step:{control:"number"}},args:{label:"Amount",id:"number-input",size:"medium",step:1}},s={args:{label:"Amount",placeholder:"Enter amount"},render:e=>{const[a,n]=m.useState(e.value);return l.jsx(r,{...e,value:a,onValueChange:n})}},t={args:{label:"Price ($)",min:0,max:999.99,step:.01,value:29.99},render:e=>{const[a,n]=m.useState(e.value);return l.jsx(r,{...e,value:a,onValueChange:n})}},u={args:{label:"Invalid Number",errorMessage:"Please enter a valid amount",value:void 0},render:e=>{const[a,n]=m.useState(e.value);return l.jsx(r,{...e,value:a,onValueChange:n})}},o={args:{label:"Disabled Input",disabled:!0,value:42},render:e=>{const[a,n]=m.useState(e.value);return l.jsx(r,{...e,value:a,onValueChange:n})}};var i,d,c;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: "Amount",
    placeholder: "Enter amount"
  },
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState<number | undefined>(args.value as number);
    return <NumberInput {...args} value={value} onValueChange={setValue} />;
  }
}`,...(c=(d=s.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var p,b,v;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(v=(b=t.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var g,h,V;u.parameters={...u.parameters,docs:{...(g=u.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: "Invalid Number",
    errorMessage: "Please enter a valid amount",
    value: undefined
  },
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState<number | undefined>(args.value as number);
    return <NumberInput {...args} value={value} onValueChange={setValue} />;
  }
}`,...(V=(h=u.parameters)==null?void 0:h.docs)==null?void 0:V.source}}};var x,f,S;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: "Disabled Input",
    disabled: true,
    value: 42
  },
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState<number | undefined>(args.value as number);
    return <NumberInput {...args} value={value} onValueChange={setValue} />;
  }
}`,...(S=(f=o.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};const D=["Playground","WithMinMax","Error","Disabled"];export{o as Disabled,u as Error,s as Playground,t as WithMinMax,D as __namedExportsOrder,P as default};
