import{j as p}from"./jsx-runtime-D_zvdyIk.js";import{o as n}from"./index.esm-CQKQMFIC.js";import{a as i}from"./index-B-lxVbXh.js";import{R as m,r as h}from"./index-D4lIrffr.js";import"./index-BQQLSK9g.js";import"./index-DsJinFGm.js";import"./v4-CtRu48qb.js";const R={title:"Components/RadioCard",component:n},e=a=>{const[d,o]=m.useState(a.checked||!1);return h.useEffect(()=>{o(a.checked)},[a.checked]),p.jsx(n,{...a,checked:d,onChange:t=>{i("onChange")(t),o(t.target.checked)},className:"h-[218px] w-[388px]"})};e.args={disabled:!1,checked:!0,name:"radio-card"};e.__docgenInfo={description:"",methods:[],displayName:"Playground"};e.__docgenInfo={description:"",methods:[],displayName:"Playground"};var c,r,s;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`(args: React.ComponentProps<typeof RadioCard> & Record<string, any>) => {
  const [checked, setChecked] = React.useState(args.checked || false);
  useEffect(() => {
    setChecked(args.checked);
  }, [args.checked]);
  return <RadioCard {...args} checked={checked} onChange={event => {
    action("onChange")(event);
    setChecked(event.target.checked);
  }} className="h-[218px] w-[388px]" />;
}`,...(s=(r=e.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const y=["Playground"];export{e as Playground,y as __namedExportsOrder,R as default};
