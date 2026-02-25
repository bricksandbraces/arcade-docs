import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{l as r}from"./ContextMenuList-Cie4wAje.js";import{R as C,r as g}from"./index-CY-HDqYb.js";import{a as l}from"./index-B-lxVbXh.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";import"./index-ZRCHFLd-.js";import"./borders-N_bRvfGw.js";import"./colors-mvAPBTAn.js";import"./v4-CtRu48qb.js";const S={title:"F/Card/CheckboxCard",component:r},c=e=>{const[o,t]=C.useState(e.checked||!1);return g.useEffect(()=>{t(e.checked)},[e.checked]),i.jsx(r,{...e,checked:o,onChange:s=>{l("onChange")(s),t(s.target.checked)},className:"h-[218px] w-[388px]"})};c.args={disabled:!1,checked:!0,name:"checkbox-card"};const a=e=>{const[o,t]=C.useState(e.checked||!1);return g.useEffect(()=>{t(e.checked)},[e.checked]),i.jsx(r,{...e,checked:o,onChange:s=>{l("onChange")(s),t(s.target.checked)},className:"h-[218px] w-[388px]"})};a.args={disabled:!0,checked:!0,name:"checkbox-card"};c.__docgenInfo={description:"",methods:[],displayName:"Playground"};a.__docgenInfo={description:"",methods:[],displayName:"Disabled"};c.__docgenInfo={description:"",methods:[],displayName:"Playground"};a.__docgenInfo={description:"",methods:[],displayName:"Disabled"};var n,d,h;c.parameters={...c.parameters,docs:{...(n=c.parameters)==null?void 0:n.docs,source:{originalSource:`(args: React.ComponentProps<typeof CheckboxCard> & Record<string, any>) => {
  const [checked, setChecked] = React.useState(args.checked || false);
  useEffect(() => {
    setChecked(args.checked);
  }, [args.checked]);
  return <CheckboxCard {...args} checked={checked} onChange={event => {
    action("onChange")(event);
    setChecked(event.target.checked);
  }} className="h-[218px] w-[388px]" />;
}`,...(h=(d=c.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};var p,k,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`(args: React.ComponentProps<typeof CheckboxCard> & Record<string, any>) => {
  const [checked, setChecked] = React.useState(args.checked || false);
  useEffect(() => {
    setChecked(args.checked);
  }, [args.checked]);
  return <CheckboxCard {...args} checked={checked} onChange={event => {
    action("onChange")(event);
    setChecked(event.target.checked);
  }} className="h-[218px] w-[388px]" />;
}`,...(m=(k=a.parameters)==null?void 0:k.docs)==null?void 0:m.source}}};const j=["Playground","Disabled"];export{a as Disabled,c as Playground,j as __namedExportsOrder,S as default};
