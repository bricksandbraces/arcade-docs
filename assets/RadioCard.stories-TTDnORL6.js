import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{d}from"./index.esm-Cn46w_Lm.js";import{a as p}from"./index-B-lxVbXh.js";import{R as m,r as h}from"./index-D4lIrffr.js";import"./index-BQQLSK9g.js";import"./index-DsJinFGm.js";import"./v4-CtRu48qb.js";const R={title:"Components/RadioCard",component:d},e=a=>{const[n,o]=m.useState(a.checked||!1);return h.useEffect(()=>{o(a.checked)},[a.checked]),i.jsx(d,{...a,checked:n,onChange:t=>{p("onChange")(t),o(t.target.checked)},className:"h-[218px] w-[388px]"})};e.args={disabled:!1,checked:!0,size:"radio-card"};e.__docgenInfo={description:"",methods:[],displayName:"Playground"};e.__docgenInfo={description:"",methods:[],displayName:"Playground"};var c,r,s;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`(args: React.ComponentProps<typeof RadioCard> & Record<string, any>) => {
  const [checked, setChecked] = React.useState(args.checked || false);
  useEffect(() => {
    setChecked(args.checked);
  }, [args.checked]);
  return <RadioCard {...args} checked={checked} onChange={event => {
    action("onChange")(event);
    setChecked(event.target.checked);
  }} className="h-[218px] w-[388px]" />;
}`,...(s=(r=e.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const y=["Playground"];export{e as Playground,y as __namedExportsOrder,R as default};
