import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{n as d}from"./index.esm-DGFRv2ht.js";import{a as p}from"./index-B-lxVbXh.js";import{R as m,r as h}from"./index-D4lIrffr.js";import"./index-BQQLSK9g.js";import"./index-DsJinFGm.js";import"./v4-CtRu48qb.js";const R={title:"Components/RadioCard",component:d,decorators:[a=>o.jsx("div",{className:"p-xlg",children:o.jsx(a,{})})]},e=a=>{const[i,c]=m.useState(a.checked||!1);return h.useEffect(()=>{c(a.checked)},[a.checked]),o.jsx(d,{...a,checked:i,onChange:t=>{p("onChange")(t),c(t.target.checked)},className:"h-[218px] w-[388px]"})};e.args={disabled:!1,checked:!0,name:"radio-card"};e.__docgenInfo={description:"",methods:[],displayName:"Playground"};e.__docgenInfo={description:"",methods:[],displayName:"Playground"};var r,s,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`(args: React.ComponentProps<typeof RadioCard> & Record<string, any>) => {
  const [checked, setChecked] = React.useState(args.checked || false);
  useEffect(() => {
    setChecked(args.checked);
  }, [args.checked]);
  return <RadioCard {...args} checked={checked} onChange={event => {
    action("onChange")(event);
    setChecked(event.target.checked);
  }} className="h-[218px] w-[388px]" />;
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const y=["Playground"];export{e as Playground,y as __namedExportsOrder,R as default};
