import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Ai as n,Ds as r,Hs as i,t as a}from"./iframe-_Ug8tvbS.js";import{n as o,t as s}from"./figmaDesign-DDiUnvXT.js";var c,l,u,d,f,p,m;e((()=>{c=t(i(),1),a(),o(),l=r(),{action:u}=__STORYBOOK_MODULE_ACTIONS__,d={parameters:{design:s(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=2131-35993`)},title:`Inputs & Controls/Checkbox/Check`,component:n,tags:[`autodocs`],argTypes:{checked:{control:`inline-radio`,options:[!1,!0,`indeterminate`]},disabled:{control:`boolean`},readonly:{control:`boolean`}}},f=e=>{let[t,r]=c.useState(()=>e.checked===void 0||e.checked===null?!1:e.checked);return(0,c.useEffect)(()=>{r(e.checked===void 0||e.checked===null?!1:e.checked)},[e.checked]),(0,l.jsx)(n,{...e,checked:t,onChange:n=>{u(`onChange`)(n),!(e.disabled||e.readonly)&&r(t===`indeterminate`?!0:n.target.checked)}})},f.args={checked:!1,disabled:!1,readonly:!1,"aria-label":`Checkbox`},p=e=>{let[t,r]=c.useState(()=>e.checked===void 0||e.checked===null?!1:e.checked);return(0,c.useEffect)(()=>{r(e.checked===void 0||e.checked===null?!1:e.checked)},[e.checked]),(0,l.jsx)(n,{...e,checked:t,onChange:n=>{u(`onChange`)(n),!(e.disabled||e.readonly)&&r(t===`indeterminate`?!0:n.target.checked)}})},p.args={checked:!1,disabled:!0,readonly:!1,"aria-label":`Checkbox`},f.__docgenInfo={description:``,methods:[],displayName:`Playground`},p.__docgenInfo={description:``,methods:[],displayName:`Disabled`},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`(args: React.ComponentProps<typeof Check> & Record<string, any>) => {
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`(args: React.ComponentProps<typeof Check> & Record<string, any>) => {
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
}`,...p.parameters?.docs?.source}}},m=[`Playground`,`Disabled`]}))();export{p as Disabled,f as Playground,m as __namedExportsOrder,d as default};