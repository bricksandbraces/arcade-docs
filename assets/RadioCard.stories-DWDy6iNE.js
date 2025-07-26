import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{t as n}from"./index.esm-CY5qUBc6.js";import{a as p}from"./index-B-lxVbXh.js";import{R as m,r as h}from"./index-D4lIrffr.js";import"./index-BQQLSK9g.js";import"./index-DsJinFGm.js";import"./v4-CtRu48qb.js";const R={title:"Components/RadioCard",component:n,decorators:[a=>t.jsx("div",{className:"p-xlg",children:t.jsx(a,{})})]},e=a=>{const[i,o]=m.useState(a.checked||!1);return h.useEffect(()=>{o(a.checked)},[a.checked]),t.jsx(n,{...a,checked:i,onChange:c=>{p("onChange")(c),o(c.target.checked)},className:"h-[218px] w-[388px]"})};e.args={disabled:!1,checked:!0,name:"radio-card"};e.__docgenInfo={description:"",methods:[],displayName:"Playground"};e.__docgenInfo={description:"",methods:[],displayName:"Playground"};var r,s,d;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`(args: React.ComponentProps<typeof RadioCard> & Record<string, any>) => {
  const [checked, setChecked] = React.useState(args.checked || false);
  useEffect(() => {
    setChecked(args.checked);
  }, [args.checked]);
  return <RadioCard {...args} checked={checked} onChange={event => {
    action("onChange")(event);
    setChecked(event.target.checked);
  }} className="h-[218px] w-[388px]" />;
}`,...(d=(s=e.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};const y=["Playground"];export{e as Playground,y as __namedExportsOrder,R as default};
