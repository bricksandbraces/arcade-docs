import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Ot as n,To as r,Ur as i,Vn as a,ga as o,kt as s,pi as c,t as l,uo as u}from"./iframe-CxJo9uef.js";import{n as d,t as f}from"./onCardStoryShell-C2ha0EuU.js";var p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O;e((()=>{p=t(r(),1),c(),l(),d(),m=u(),h={title:`Inputs & Controls/NumberInput`,component:n,tags:[`autodocs`],argTypes:{size:{control:`inline-radio`,options:s},disabled:{control:`boolean`},hideLabel:{control:`boolean`},min:{control:`number`},max:{control:`number`},step:{control:`number`},loading:{control:`boolean`},successMessage:{control:`text`},warningMessage:{control:`text`},errorMessage:{control:`text`},label:{control:`text`},placeholder:{control:`text`},state:{control:`inline-radio`,options:i}},args:{id:`playground-number-input`,label:`Label`,placeholder:`Placeholder text...`,size:`medium`,step:1,helperText:`Helper Text`,errorMessage:`Error Message`,warningMessage:`Warning Message`,successMessage:`Success`,loadingMessage:`Loading...`},parameters:{docs:{description:{component:`Numeric input with stepper buttons and optional min/max/step constraints. Use for quantities, counts, and bounded numeric fields.`}}}},g={args:{},render:e=>{let[t,r]=(0,p.useState)(e.value);return(0,m.jsx)(n,{...e,value:t,onValueChange:r})}},_={args:{...h.args,surface:`onCard`},render:e=>{let[t,r]=(0,p.useState)(e.value);return(0,m.jsx)(f,{children:(0,m.jsx)(n,{...e,value:t,onValueChange:r,surface:`onCard`})})}},v=({size:e})=>{let[t,r]=(0,p.useState)(void 0);return(0,m.jsx)(n,{id:`number-input-${e}`,label:`${e.charAt(0).toUpperCase()+e.slice(1)} Size`,placeholder:`${e} input...`,size:e,value:t,onValueChange:r})},y={render:()=>(0,m.jsx)(`div`,{className:`gap-lg flex flex-col`,children:s.map(e=>(0,m.jsx)(v,{size:e},e))})},b={args:{label:`Price ($)`,min:0,max:999.99,step:.01,value:29.99},render:e=>{let[t,r]=(0,p.useState)(e.value);return(0,m.jsx)(n,{...e,value:t,onValueChange:r})}},x={args:{id:`error-number-input`,label:`Amount`,placeholder:`Enter amount...`,state:`error`,errorMessage:`Please enter a valid amount`,size:`medium`},render:e=>{let[t,r]=(0,p.useState)(e.value);return(0,m.jsx)(n,{...e,value:t,onValueChange:r})}},S={args:{id:`success-number-input`,label:`Price`,placeholder:`Enter price...`,state:`success`,successMessage:`Looks good!`,size:`medium`,value:42},render:e=>{let[t,r]=(0,p.useState)(e.value);return(0,m.jsx)(n,{...e,value:t,onValueChange:r})}},C={args:{id:`loading-number-input`,label:`Amount`,placeholder:`Enter amount...`,loadingMessage:`Checking...`,loading:!0,size:`medium`,value:100},render:e=>{let[t,r]=(0,p.useState)(e.value);return(0,m.jsx)(n,{...e,value:t,onValueChange:r})}},w={args:{id:`disabled-number-input`,label:`Amount`,placeholder:`Enter amount...`,disabled:!0,size:`medium`,value:42},render:e=>{let[t,r]=(0,p.useState)(e.value);return(0,m.jsx)(n,{...e,value:t,onValueChange:r})}},T={args:{id:`slot-number-input`,label:`Amount`,placeholder:`Enter amount...`},render:e=>{let[t,r]=(0,p.useState)(e.value);return(0,m.jsx)(n,{...e,value:t,onValueChange:r,leadingSlot:(0,m.jsx)(o,{className:`stroke-icon-accent size-4`}),trailingSlot:(0,m.jsx)(`div`,{className:`h-container-2xs`,children:(0,m.jsxs)(`svg`,{viewBox:`0 0 45 19`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":!0,className:`block h-full w-auto`,children:[(0,m.jsx)(`rect`,{x:`0.5`,y:`0.5`,width:`43.0539`,height:`17.122`,rx:`3.5`,stroke:`#6366F1`}),(0,m.jsx)(`path`,{d:`M35.4339 6.20601C35.4339 5.79179 35.0982 5.45601 34.6839 5.45601H32.8789C32.5271 5.45601 32.2419 5.17081 32.2419 4.81901C32.2419 4.4672 32.5271 4.18201 32.8789 4.18201H39.4169C39.7687 4.18201 40.0539 4.4672 40.0539 4.81901C40.0539 5.17081 39.7687 5.45601 39.4169 5.45601H37.6259C37.2117 5.45601 36.8759 5.79179 36.8759 6.20601V13.219C36.8759 13.6172 36.5531 13.94 36.1549 13.94C35.7567 13.94 35.4339 13.6172 35.4339 13.219V6.20601Z`,fill:`#6366F1`}),(0,m.jsx)(`path`,{d:`M25.9078 14.122C25.0072 14.122 24.2115 13.912 23.5208 13.492C22.8348 13.072 22.3005 12.4793 21.9178 11.714C21.5398 10.9487 21.3508 10.0667 21.3508 9.068C21.3508 8.06 21.5398 7.17333 21.9178 6.408C22.3005 5.64267 22.8372 5.05 23.5278 4.63C24.2185 4.21 25.0118 4 25.9078 4C26.8178 4 27.6205 4.21 28.3158 4.63C29.0112 5.05 29.5502 5.64267 29.9328 6.408C30.3155 7.17333 30.5068 8.06 30.5068 9.068C30.5068 10.0713 30.3132 10.9557 29.9258 11.721C29.5432 12.4817 29.0042 13.072 28.3088 13.492C27.6135 13.912 26.8132 14.122 25.9078 14.122ZM22.7718 9.068C22.7718 9.81933 22.9002 10.475 23.1568 11.035C23.4135 11.5903 23.7775 12.0173 24.2488 12.316C24.7202 12.6147 25.2732 12.764 25.9078 12.764C26.5518 12.764 27.1118 12.6147 27.5878 12.316C28.0638 12.0127 28.4302 11.5833 28.6868 11.028C28.9435 10.4727 29.0718 9.81933 29.0718 9.068C29.0718 8.312 28.9435 7.65633 28.6868 7.101C28.4302 6.541 28.0638 6.11167 27.5878 5.813C27.1118 5.50967 26.5518 5.358 25.9078 5.358C25.2732 5.358 24.7202 5.50733 24.2488 5.806C23.7775 6.10467 23.4135 6.534 23.1568 7.094C22.9002 7.654 22.7718 8.312 22.7718 9.068Z`,fill:`#6366F1`}),(0,m.jsx)(`path`,{d:`M13.9241 4.89601C13.9241 4.50168 14.2437 4.18201 14.6381 4.18201C15.0324 4.18201 15.3521 4.50168 15.3521 4.89601V11.916C15.3521 12.3302 15.6879 12.666 16.1021 12.666H19.0061C19.3579 12.666 19.6431 12.9512 19.6431 13.303C19.6431 13.6548 19.3579 13.94 19.0061 13.94H14.6741C14.2599 13.94 13.9241 13.6042 13.9241 13.19V4.89601Z`,fill:`#6366F1`}),(0,m.jsx)(`path`,{d:`M7.633 14.108C6.975 14.108 6.38933 13.9913 5.876 13.758C5.36267 13.52 4.945 13.1863 4.623 12.757C4.42555 12.4909 4.27109 12.1976 4.15963 11.877C4.03724 11.5251 4.27856 11.1694 4.64035 11.0803C5.04594 10.9805 5.43653 11.2572 5.61327 11.6356C5.74454 11.9167 5.92312 12.1505 6.149 12.337C6.555 12.6683 7.06367 12.834 7.675 12.834C8.011 12.834 8.31433 12.7687 8.585 12.638C8.86033 12.5073 9.075 12.3253 9.229 12.092C9.38767 11.8587 9.467 11.5927 9.467 11.294C9.467 10.9953 9.383 10.741 9.215 10.531C9.05167 10.321 8.82533 10.139 8.536 9.985C8.25133 9.831 7.857 9.656 7.353 9.46C6.74633 9.23133 6.24467 8.991 5.848 8.739C5.456 8.48233 5.15267 8.18133 4.938 7.836C4.728 7.486 4.623 7.07067 4.623 6.59C4.623 6.09533 4.74667 5.652 4.994 5.26C5.24133 4.86333 5.589 4.55533 6.037 4.336C6.48967 4.112 7.00767 4 7.591 4C8.22567 4 8.78333 4.14467 9.264 4.434C9.57811 4.62308 9.85336 4.86994 10.0897 5.17461C10.3083 5.45633 10.1954 5.8532 9.89113 6.03914C9.56702 6.23721 9.15285 6.11667 8.89009 5.84239C8.51814 5.45413 8.06878 5.26 7.542 5.26C7.25267 5.26 6.99367 5.316 6.765 5.428C6.541 5.54 6.366 5.69633 6.24 5.897C6.114 6.093 6.051 6.31467 6.051 6.562C6.051 6.828 6.12333 7.05667 6.268 7.248C6.41733 7.43933 6.63667 7.612 6.926 7.766C7.21533 7.92 7.60967 8.09033 8.109 8.277C8.72967 8.51033 9.23833 8.75533 9.635 9.012C10.0317 9.26867 10.3373 9.57667 10.552 9.936C10.7713 10.2907 10.881 10.7153 10.881 11.21C10.881 11.7653 10.7433 12.2623 10.468 12.701C10.1927 13.1397 9.80767 13.485 9.313 13.737C8.823 13.9843 8.263 14.108 7.633 14.108Z`,fill:`#6366F1`})]})})})}},E={args:{id:`no-label-number-input`,placeholder:`No label input...`,size:`medium`,hideLabel:!0,label:`Amount`},render:e=>{let[t,r]=(0,p.useState)(e.value);return(0,m.jsx)(n,{...e,value:t,onValueChange:r})}},D={render:()=>(0,m.jsx)(a,{})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {},
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState<number | undefined>(args.value as number);
    return <NumberInput {...args} value={value} onValueChange={setValue} />;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div className="gap-lg flex flex-col">
      {NumberInputSizes.map(size => <SizeRow key={size} size={size} />)}
    </div>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    id: "slot-number-input",
    label: "Amount",
    placeholder: "Enter amount..."
  },
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState<number | undefined>(args.value as number | undefined);
    return <NumberInput {...args} value={value} onValueChange={setValue} leadingSlot={<IconBolt className="stroke-icon-accent size-4" />} trailingSlot={<div className="h-container-2xs">
            <svg viewBox="0 0 45 19" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden className="block h-full w-auto">
              <rect x="0.5" y="0.5" width="43.0539" height="17.122" rx="3.5" stroke="#6366F1" />
              <path d="M35.4339 6.20601C35.4339 5.79179 35.0982 5.45601 34.6839 5.45601H32.8789C32.5271 5.45601 32.2419 5.17081 32.2419 4.81901C32.2419 4.4672 32.5271 4.18201 32.8789 4.18201H39.4169C39.7687 4.18201 40.0539 4.4672 40.0539 4.81901C40.0539 5.17081 39.7687 5.45601 39.4169 5.45601H37.6259C37.2117 5.45601 36.8759 5.79179 36.8759 6.20601V13.219C36.8759 13.6172 36.5531 13.94 36.1549 13.94C35.7567 13.94 35.4339 13.6172 35.4339 13.219V6.20601Z" fill="#6366F1" />
              <path d="M25.9078 14.122C25.0072 14.122 24.2115 13.912 23.5208 13.492C22.8348 13.072 22.3005 12.4793 21.9178 11.714C21.5398 10.9487 21.3508 10.0667 21.3508 9.068C21.3508 8.06 21.5398 7.17333 21.9178 6.408C22.3005 5.64267 22.8372 5.05 23.5278 4.63C24.2185 4.21 25.0118 4 25.9078 4C26.8178 4 27.6205 4.21 28.3158 4.63C29.0112 5.05 29.5502 5.64267 29.9328 6.408C30.3155 7.17333 30.5068 8.06 30.5068 9.068C30.5068 10.0713 30.3132 10.9557 29.9258 11.721C29.5432 12.4817 29.0042 13.072 28.3088 13.492C27.6135 13.912 26.8132 14.122 25.9078 14.122ZM22.7718 9.068C22.7718 9.81933 22.9002 10.475 23.1568 11.035C23.4135 11.5903 23.7775 12.0173 24.2488 12.316C24.7202 12.6147 25.2732 12.764 25.9078 12.764C26.5518 12.764 27.1118 12.6147 27.5878 12.316C28.0638 12.0127 28.4302 11.5833 28.6868 11.028C28.9435 10.4727 29.0718 9.81933 29.0718 9.068C29.0718 8.312 28.9435 7.65633 28.6868 7.101C28.4302 6.541 28.0638 6.11167 27.5878 5.813C27.1118 5.50967 26.5518 5.358 25.9078 5.358C25.2732 5.358 24.7202 5.50733 24.2488 5.806C23.7775 6.10467 23.4135 6.534 23.1568 7.094C22.9002 7.654 22.7718 8.312 22.7718 9.068Z" fill="#6366F1" />
              <path d="M13.9241 4.89601C13.9241 4.50168 14.2437 4.18201 14.6381 4.18201C15.0324 4.18201 15.3521 4.50168 15.3521 4.89601V11.916C15.3521 12.3302 15.6879 12.666 16.1021 12.666H19.0061C19.3579 12.666 19.6431 12.9512 19.6431 13.303C19.6431 13.6548 19.3579 13.94 19.0061 13.94H14.6741C14.2599 13.94 13.9241 13.6042 13.9241 13.19V4.89601Z" fill="#6366F1" />
              <path d="M7.633 14.108C6.975 14.108 6.38933 13.9913 5.876 13.758C5.36267 13.52 4.945 13.1863 4.623 12.757C4.42555 12.4909 4.27109 12.1976 4.15963 11.877C4.03724 11.5251 4.27856 11.1694 4.64035 11.0803C5.04594 10.9805 5.43653 11.2572 5.61327 11.6356C5.74454 11.9167 5.92312 12.1505 6.149 12.337C6.555 12.6683 7.06367 12.834 7.675 12.834C8.011 12.834 8.31433 12.7687 8.585 12.638C8.86033 12.5073 9.075 12.3253 9.229 12.092C9.38767 11.8587 9.467 11.5927 9.467 11.294C9.467 10.9953 9.383 10.741 9.215 10.531C9.05167 10.321 8.82533 10.139 8.536 9.985C8.25133 9.831 7.857 9.656 7.353 9.46C6.74633 9.23133 6.24467 8.991 5.848 8.739C5.456 8.48233 5.15267 8.18133 4.938 7.836C4.728 7.486 4.623 7.07067 4.623 6.59C4.623 6.09533 4.74667 5.652 4.994 5.26C5.24133 4.86333 5.589 4.55533 6.037 4.336C6.48967 4.112 7.00767 4 7.591 4C8.22567 4 8.78333 4.14467 9.264 4.434C9.57811 4.62308 9.85336 4.86994 10.0897 5.17461C10.3083 5.45633 10.1954 5.8532 9.89113 6.03914C9.56702 6.23721 9.15285 6.11667 8.89009 5.84239C8.51814 5.45413 8.06878 5.26 7.542 5.26C7.25267 5.26 6.99367 5.316 6.765 5.428C6.541 5.54 6.366 5.69633 6.24 5.897C6.114 6.093 6.051 6.31467 6.051 6.562C6.051 6.828 6.12333 7.05667 6.268 7.248C6.41733 7.43933 6.63667 7.612 6.926 7.766C7.21533 7.92 7.60967 8.09033 8.109 8.277C8.72967 8.51033 9.23833 8.75533 9.635 9.012C10.0317 9.26867 10.3373 9.57667 10.552 9.936C10.7713 10.2907 10.881 10.7153 10.881 11.21C10.881 11.7653 10.7433 12.2623 10.468 12.701C10.1927 13.1397 9.80767 13.485 9.313 13.737C8.823 13.9843 8.263 14.108 7.633 14.108Z" fill="#6366F1" />
            </svg>
          </div>} />;
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <NumberInputSkeleton />
}`,...D.parameters?.docs?.source}}},O=[`Playground`,`OnCard`,`Sizes`,`WithMinMax`,`WithError`,`WithSuccess`,`Loading`,`Disabled`,`Slot`,`WithoutLabel`,`Skeleton`]}))();export{w as Disabled,C as Loading,_ as OnCard,g as Playground,y as Sizes,D as Skeleton,T as Slot,x as WithError,b as WithMinMax,S as WithSuccess,E as WithoutLabel,O as __namedExportsOrder,h as default};