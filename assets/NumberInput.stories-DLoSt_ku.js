import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Di as n,En as r,Fr as i,Hi as a,Ot as o,kt as s,qn as c,t as l}from"./iframe-Dxxi8T6d.js";import{n as u,t as d}from"./onCardStoryShell-B_R018Bq.js";var f,p,m,h,g,_,v,y,b,x,S,C,w,T,E;e((()=>{f=t(a(),1),c(),l(),u(),p=n(),m={title:`Components/Inputs/NumberInput`,component:o,tags:[`autodocs`],argTypes:{size:{control:`inline-radio`,options:s},disabled:{control:`boolean`},hideLabel:{control:`boolean`},min:{control:`number`},max:{control:`number`},step:{control:`number`},loading:{control:`boolean`},successMessage:{control:`text`},warningMessage:{control:`text`},errorMessage:{control:`text`},label:{control:`text`},placeholder:{control:`text`},state:{control:`inline-radio`,options:r}},args:{id:`playground-number-input`,label:`Label`,placeholder:`Placeholder text...`,size:`medium`,step:1,helperText:`Helper Text`,errorMessage:`Error Message`,warningMessage:`Warning Message`,successMessage:`Success`,loadingMessage:`Loading...`},parameters:{docs:{description:{component:`Numeric input with stepper buttons and optional min/max/step constraints. Use for quantities, counts, and bounded numeric fields.`}}}},h={args:{},render:e=>{let[t,n]=(0,f.useState)(e.value);return(0,p.jsx)(o,{...e,value:t,onValueChange:n})}},g={args:{...m.args,surface:`onCard`},render:e=>{let[t,n]=(0,f.useState)(e.value);return(0,p.jsx)(d,{children:(0,p.jsx)(o,{...e,value:t,onValueChange:n,surface:`onCard`})})}},_=({size:e})=>{let[t,n]=(0,f.useState)(void 0);return(0,p.jsx)(o,{id:`number-input-${e}`,label:`${e.charAt(0).toUpperCase()+e.slice(1)} Size`,placeholder:`${e} input...`,size:e,value:t,onValueChange:n})},v={render:()=>(0,p.jsx)(`div`,{className:`gap-lg flex flex-col`,children:s.map(e=>(0,p.jsx)(_,{size:e},e))})},y={args:{label:`Price ($)`,min:0,max:999.99,step:.01,value:29.99},render:e=>{let[t,n]=(0,f.useState)(e.value);return(0,p.jsx)(o,{...e,value:t,onValueChange:n})}},b={args:{id:`error-number-input`,label:`Amount`,placeholder:`Enter amount...`,state:`error`,errorMessage:`Please enter a valid amount`,size:`medium`},render:e=>{let[t,n]=(0,f.useState)(e.value);return(0,p.jsx)(o,{...e,value:t,onValueChange:n})}},x={args:{id:`success-number-input`,label:`Price`,placeholder:`Enter price...`,state:`success`,successMessage:`Looks good!`,size:`medium`,value:42},render:e=>{let[t,n]=(0,f.useState)(e.value);return(0,p.jsx)(o,{...e,value:t,onValueChange:n})}},S={args:{id:`loading-number-input`,label:`Amount`,placeholder:`Enter amount...`,loadingMessage:`Checking...`,loading:!0,size:`medium`,value:100},render:e=>{let[t,n]=(0,f.useState)(e.value);return(0,p.jsx)(o,{...e,value:t,onValueChange:n})}},C={args:{id:`disabled-number-input`,label:`Amount`,placeholder:`Enter amount...`,disabled:!0,size:`medium`,value:42},render:e=>{let[t,n]=(0,f.useState)(e.value);return(0,p.jsx)(o,{...e,value:t,onValueChange:n})}},w={args:{id:`slot-number-input`,label:`Amount`,placeholder:`Enter amount...`},render:e=>{let[t,n]=(0,f.useState)(e.value);return(0,p.jsx)(o,{...e,value:t,onValueChange:n,leadingSlot:(0,p.jsx)(i,{className:`stroke-icon-accent size-4`,stroke:1.5}),trailingSlot:(0,p.jsx)(`span`,{className:`typography-label text-text-accent`,children:`EUR`})})}},T={args:{id:`no-label-number-input`,placeholder:`No label input...`,size:`medium`,hideLabel:!0,label:`Amount`},render:e=>{let[t,n]=(0,f.useState)(e.value);return(0,p.jsx)(o,{...e,value:t,onValueChange:n})}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {},
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState<number | undefined>(args.value as number);
    return <NumberInput {...args} value={value} onValueChange={setValue} />;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div className="gap-lg flex flex-col">
      {NumberInputSizes.map(size => <SizeRow key={size} size={size} />)}
    </div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E=[`Playground`,`OnCard`,`Sizes`,`WithMinMax`,`WithError`,`WithSuccess`,`Loading`,`Disabled`,`Slot`,`WithoutLabel`]}))();export{C as Disabled,S as Loading,g as OnCard,h as Playground,v as Sizes,w as Slot,b as WithError,y as WithMinMax,x as WithSuccess,T as WithoutLabel,E as __namedExportsOrder,m as default};