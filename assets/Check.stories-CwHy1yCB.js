import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{io as n,jr as r,t as i,yo as a}from"./iframe-D__FKa2q.js";var o,s,c,l,u,d,f;e((()=>{o=t(a(),1),i(),s=n(),{action:c}=__STORYBOOK_MODULE_ACTIONS__,l={title:`Inputs & Controls/Checkbox/Check`,component:r,tags:[`autodocs`],argTypes:{checked:{control:`inline-radio`,options:[!1,!0,`indeterminate`]},disabled:{control:`boolean`},readonly:{control:`boolean`}}},u=e=>{let[t,n]=o.useState(()=>e.checked===void 0||e.checked===null?!1:e.checked);return(0,o.useEffect)(()=>{n(e.checked===void 0||e.checked===null?!1:e.checked)},[e.checked]),(0,s.jsx)(r,{...e,checked:t,onChange:r=>{c(`onChange`)(r),!(e.disabled||e.readonly)&&n(t===`indeterminate`?!0:r.target.checked)}})},u.args={checked:!1,disabled:!1,readonly:!1,"aria-label":`Checkbox`},d=e=>{let[t,n]=o.useState(()=>e.checked===void 0||e.checked===null?!1:e.checked);return(0,o.useEffect)(()=>{n(e.checked===void 0||e.checked===null?!1:e.checked)},[e.checked]),(0,s.jsx)(r,{...e,checked:t,onChange:r=>{c(`onChange`)(r),!(e.disabled||e.readonly)&&n(t===`indeterminate`?!0:r.target.checked)}})},d.args={checked:!1,disabled:!0,readonly:!1,"aria-label":`Checkbox`},u.__docgenInfo={description:``,methods:[],displayName:`Playground`},d.__docgenInfo={description:``,methods:[],displayName:`Disabled`},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`(args: React.ComponentProps<typeof Check> & Record<string, any>) => {
  const [checked, setChecked] = React.useState<boolean | "indeterminate">(() => args.checked === undefined || args.checked === null ? false : args.checked);
  useEffect(() => {
    setChecked(args.checked === undefined || args.checked === null ? false : args.checked);
  }, [args.checked]);
  return <Check {...args} checked={checked} onChange={e => {
    action("onChange")(e);
    if (args.disabled || args.readonly) {
      return;
    }
    if (checked === "indeterminate") {
      setChecked(true);
    } else {
      setChecked(e.target.checked);
    }
  }} />;
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`(args: React.ComponentProps<typeof Check> & Record<string, any>) => {
  const [checked, setChecked] = React.useState<boolean | "indeterminate">(() => args.checked === undefined || args.checked === null ? false : args.checked);
  useEffect(() => {
    setChecked(args.checked === undefined || args.checked === null ? false : args.checked);
  }, [args.checked]);
  return <Check {...args} checked={checked} onChange={e => {
    action("onChange")(e);
    if (args.disabled || args.readonly) {
      return;
    }
    if (checked === "indeterminate") {
      setChecked(true);
    } else {
      setChecked(e.target.checked);
    }
  }} />;
}`,...d.parameters?.docs?.source}}},f=[`Playground`,`Disabled`]}))();export{d as Disabled,u as Playground,f as __namedExportsOrder,l as default};