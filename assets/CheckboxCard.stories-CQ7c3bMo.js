import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{Y as d}from"./index.esm-Dy8HIj2c.js";import{a as p}from"./index-B-lxVbXh.js";import{R as m,r as i}from"./index-D4lIrffr.js";import"./index-BQQLSK9g.js";import"./index-DsJinFGm.js";import"./v4-CtRu48qb.js";const y={title:"Components/CheckboxCard",component:d,decorators:[c=>o.jsx("div",{className:"p-xlg",children:o.jsx(c,{})})]},e=c=>{const[h,a]=m.useState(c.checked||!1);return i.useEffect(()=>{a(c.checked)},[c.checked]),o.jsx(d,{...c,checked:h,onChange:s=>{p("onChange")(s),a(s.target.checked)},className:"h-[218px] w-[388px]"})};e.args={disabled:!1,checked:!0,name:"checkbox-card"};e.__docgenInfo={description:"",methods:[],displayName:"Playground"};e.__docgenInfo={description:"",methods:[],displayName:"Playground"};var t,r,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`(args: React.ComponentProps<typeof CheckboxCard> & Record<string, any>) => {
  const [checked, setChecked] = React.useState(args.checked || false);
  useEffect(() => {
    setChecked(args.checked);
  }, [args.checked]);
  return <CheckboxCard {...args} checked={checked} onChange={event => {
    action("onChange")(event);
    setChecked(event.target.checked);
  }} className="h-[218px] w-[388px]" />;
}`,...(n=(r=e.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const _=["Playground"];export{e as Playground,_ as __namedExportsOrder,y as default};
