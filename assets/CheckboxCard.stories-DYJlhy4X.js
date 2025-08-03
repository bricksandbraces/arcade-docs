import{j as h}from"./jsx-runtime-D_zvdyIk.js";import{c as n}from"./index.esm-VHpr67rb.js";import{a as p}from"./index-B-lxVbXh.js";import{R as m,r as i}from"./index-D4lIrffr.js";import"./index-BQQLSK9g.js";import"./index-DsJinFGm.js";import"./v4-CtRu48qb.js";const y={title:"Components/CheckboxCard",component:n},e=c=>{const[d,o]=m.useState(c.checked||!1);return i.useEffect(()=>{o(c.checked)},[c.checked]),h.jsx(n,{...c,checked:d,onChange:t=>{p("onChange")(t),o(t.target.checked)},className:"h-[218px] w-[388px]"})};e.args={disabled:!1,checked:!0,name:"checkbox-card"};e.__docgenInfo={description:"",methods:[],displayName:"Playground"};e.__docgenInfo={description:"",methods:[],displayName:"Playground"};var a,r,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`(args: React.ComponentProps<typeof CheckboxCard> & Record<string, any>) => {
  const [checked, setChecked] = React.useState(args.checked || false);
  useEffect(() => {
    setChecked(args.checked);
  }, [args.checked]);
  return <CheckboxCard {...args} checked={checked} onChange={event => {
    action("onChange")(event);
    setChecked(event.target.checked);
  }} className="h-[218px] w-[388px]" />;
}`,...(s=(r=e.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const _=["Playground"];export{e as Playground,_ as __namedExportsOrder,y as default};
