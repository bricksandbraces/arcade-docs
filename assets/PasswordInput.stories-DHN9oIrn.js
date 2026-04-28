import{n as e}from"./chunk-jRWAZmH_.js";import{Di as t,En as n,It as r,Lt as i,nr as a,qn as o,t as s}from"./iframe-BK1IgQO6.js";import{n as c,t as l}from"./onCardStoryShell-BefFPNKk.js";var u,d,f,p,m,h,g,_,v,y,b,x;e((()=>{o(),s(),c(),u=t(),d={title:`Components/Inputs/PasswordInput`,component:r,tags:[`autodocs`],argTypes:{size:{control:`inline-radio`,options:i},disabled:{control:`boolean`},loading:{control:`boolean`},successMessage:{control:`text`},errorMessage:{control:`text`},hideLabel:{control:`boolean`},label:{control:`text`},placeholder:{control:`text`},state:{control:`inline-radio`,options:n},defaultVisible:{control:`boolean`}},args:{errorMessage:`Error Message`,warningMessage:`Warning Message`,successMessage:`Success`,loadingMessage:`Loading...`,helperText:`Helper Text`,id:`playground-password-input`,label:`Label`,placeholder:`Placeholder text...`,size:`medium`},parameters:{docs:{description:{component:`Password field with a show/hide toggle. Use for credential entry in sign-in and account forms.`}}}},f={args:{}},p={args:{id:`slot-password-input`,label:`Password`,placeholder:`Enter your password...`,trailingSlot:(0,u.jsx)(`span`,{className:`typography-label text-text-accent whitespace-nowrap`,children:`Secure`}),leadingSlot:(0,u.jsx)(a,{size:16,className:`stroke-icon-accent`,strokeWidth:1.5})}},m={args:{...d.args,surface:`onCard`},render:e=>(0,u.jsx)(l,{children:(0,u.jsx)(r,{...e})})},h={render:()=>(0,u.jsx)(`div`,{className:`gap-lg flex flex-col`,children:i.map(e=>(0,u.jsx)(r,{id:`password-input-${e}`,label:`${e.charAt(0).toUpperCase()+e.slice(1)} Size`,placeholder:`${e} input...`,size:e},e))})},g={args:{id:`error-password-input`,label:`Password`,placeholder:`Enter your password...`,state:`error`,errorMessage:`Password must be at least 8 characters`,size:`medium`}},_={args:{id:`success-password-input`,label:`New password`,placeholder:`Enter your new password...`,state:`success`,successMessage:`Looks good!`,size:`medium`,value:`SecurePassword123!`}},v={args:{id:`loading-password-input`,label:`Password`,placeholder:`Enter your password...`,loadingMessage:`Checking...`,loading:!0,size:`medium`,value:`SecurePassword123!`}},y={args:{id:`disabled-password-input`,label:`Password`,placeholder:`Enter your password...`,disabled:!0,size:`medium`,value:`SecurePassword123!`}},b={args:{id:`no-label-password-input`,placeholder:`Enter password...`,size:`medium`,hideLabel:!0,label:`Password`}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    id: "slot-password-input",
    label: "Password",
    placeholder: "Enter your password...",
    trailingSlot: <span className="typography-label text-text-accent whitespace-nowrap">
        Secure
      </span>,
    leadingSlot: <IconSparkles size={16} className="stroke-icon-accent" strokeWidth={1.5} />
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    ...meta.args,
    surface: "onCard"
  },
  render: args => <OnCardStoryShell>
      <PasswordInput {...args} />
    </OnCardStoryShell>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:'{\n  render: () => <div className="gap-lg flex flex-col">\n      {PasswordInputSizes.map(size => <PasswordInput key={size} id={`password-input-${size}`} label={`${size.charAt(0).toUpperCase() + size.slice(1)} Size`} placeholder={`${size} input...`} size={size} />)}\n    </div>\n}',...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    id: "error-password-input",
    label: "Password",
    placeholder: "Enter your password...",
    state: "error",
    errorMessage: "Password must be at least 8 characters",
    size: "medium"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    id: "success-password-input",
    label: "New password",
    placeholder: "Enter your new password...",
    state: "success",
    successMessage: "Looks good!",
    size: "medium",
    value: "SecurePassword123!"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    id: "loading-password-input",
    label: "Password",
    placeholder: "Enter your password...",
    loadingMessage: "Checking...",
    loading: true,
    size: "medium",
    value: "SecurePassword123!"
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    id: "disabled-password-input",
    label: "Password",
    placeholder: "Enter your password...",
    disabled: true,
    size: "medium",
    value: "SecurePassword123!"
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    id: "no-label-password-input",
    placeholder: "Enter password...",
    size: "medium",
    hideLabel: true,
    label: "Password"
  }
}`,...b.parameters?.docs?.source}}},x=[`Playground`,`Slot`,`OnCard`,`Sizes`,`WithError`,`WithSuccess`,`Loading`,`Disabled`,`WithoutLabel`]}))();export{y as Disabled,v as Loading,m as OnCard,f as Playground,h as Sizes,p as Slot,g as WithError,_ as WithSuccess,b as WithoutLabel,x as __namedExportsOrder,d as default};