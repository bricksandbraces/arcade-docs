import{j as k}from"./jsx-runtime-D_zvdyIk.js";import{aX as o}from"./ContextMenuList-BjZtb4V3.js";import{R as g,r as l}from"./index-CY-HDqYb.js";import{a as u}from"./index-B-lxVbXh.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";import"./index-ZRCHFLd-.js";import"./borders-N_bRvfGw.js";import"./colors-mvAPBTAn.js";import"./v4-CtRu48qb.js";const S={title:"F/Card/RadioCard",component:o},a=e=>{const[r,t]=g.useState(e.checked||!1);return l.useEffect(()=>{t(e.checked)},[e.checked]),k.jsx(o,{...e,checked:r,onChange:s=>{u("onChange")(s),t(s.target.checked)},className:"h-[218px] w-[388px]"})};a.args={disabled:!1,checked:!0,name:"radio-card"};const c=e=>{const[r,t]=g.useState(e.checked||!1);return l.useEffect(()=>{t(e.checked)},[e.checked]),k.jsx(o,{...e,checked:r,onChange:s=>{u("onChange")(s),t(s.target.checked)},className:"h-[218px] w-[388px]"})};c.args={disabled:!0,checked:!0,name:"radio-card"};a.__docgenInfo={description:"",methods:[],displayName:"Playground"};c.__docgenInfo={description:"",methods:[],displayName:"Disabled"};a.__docgenInfo={description:"",methods:[],displayName:"Playground"};c.__docgenInfo={description:"",methods:[],displayName:"Disabled"};var d,n,h;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`(args: React.ComponentProps<typeof RadioCard> & Record<string, any>) => {
  const [checked, setChecked] = React.useState(args.checked || false);
  useEffect(() => {
    setChecked(args.checked);
  }, [args.checked]);
  return <RadioCard {...args} checked={checked} onChange={event => {
    action("onChange")(event);
    setChecked(event.target.checked);
  }} className="h-[218px] w-[388px]" />;
}`,...(h=(n=a.parameters)==null?void 0:n.docs)==null?void 0:h.source}}};var i,p,m;c.parameters={...c.parameters,docs:{...(i=c.parameters)==null?void 0:i.docs,source:{originalSource:`(args: React.ComponentProps<typeof RadioCard> & Record<string, any>) => {
  const [checked, setChecked] = React.useState(args.checked || false);
  useEffect(() => {
    setChecked(args.checked);
  }, [args.checked]);
  return <RadioCard {...args} checked={checked} onChange={event => {
    action("onChange")(event);
    setChecked(event.target.checked);
  }} className="h-[218px] w-[388px]" />;
}`,...(m=(p=c.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const j=["Playground","Disabled"];export{c as Disabled,a as Playground,j as __namedExportsOrder,S as default};
