import{j as h}from"./jsx-runtime-D_zvdyIk.js";import{l as n}from"./ContextMenuList-B2WBBjRu.js";import{R as p,r as m}from"./index-0yr9KlQE.js";import{a as i}from"./index-B-lxVbXh.js";import"./index-tymuTqDW.js";import"./index-DotmK1FS.js";import"./index-ChaIqHV-.js";import"./borders-N_bRvfGw.js";import"./colors-mvAPBTAn.js";import"./v4-CtRu48qb.js";const P={title:"WIP Components/Card/CheckboxCard",component:n},e=c=>{const[d,o]=p.useState(c.checked||!1);return m.useEffect(()=>{o(c.checked)},[c.checked]),h.jsx(n,{...c,checked:d,onChange:t=>{i("onChange")(t),o(t.target.checked)},className:"h-[218px] w-[388px]"})};e.args={disabled:!1,checked:!0,name:"checkbox-card"};e.__docgenInfo={description:"",methods:[],displayName:"Playground"};e.__docgenInfo={description:"",methods:[],displayName:"Playground"};var r,a,s;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`(args: React.ComponentProps<typeof CheckboxCard> & Record<string, any>) => {
  const [checked, setChecked] = React.useState(args.checked || false);
  useEffect(() => {
    setChecked(args.checked);
  }, [args.checked]);
  return <CheckboxCard {...args} checked={checked} onChange={event => {
    action("onChange")(event);
    setChecked(event.target.checked);
  }} className="h-[218px] w-[388px]" />;
}`,...(s=(a=e.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const R=["Playground"];export{e as Playground,R as __namedExportsOrder,P as default};
