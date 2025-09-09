import{j as p}from"./jsx-runtime-D_zvdyIk.js";import{g as n}from"./ColorPicker-CiS6UliI.js";import"./NumberInput-GMN3DMbG.js";import{R as h,r as m}from"./index-0yr9KlQE.js";import{a as i}from"./index-B-lxVbXh.js";import"./index-tymuTqDW.js";import"./index-DotmK1FS.js";import"./borders-N_bRvfGw.js";import"./colors-mvAPBTAn.js";import"./index-ChaIqHV-.js";import"./v4-CtRu48qb.js";const E={title:"Components/Card/CheckboxCard",component:n},e=c=>{const[d,o]=h.useState(c.checked||!1);return m.useEffect(()=>{o(c.checked)},[c.checked]),p.jsx(n,{...c,checked:d,onChange:t=>{i("onChange")(t),o(t.target.checked)},className:"h-[218px] w-[388px]"})};e.args={disabled:!1,checked:!0,name:"checkbox-card"};e.__docgenInfo={description:"",methods:[],displayName:"Playground"};e.__docgenInfo={description:"",methods:[],displayName:"Playground"};var r,a,s;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`(args: React.ComponentProps<typeof CheckboxCard> & Record<string, any>) => {
  const [checked, setChecked] = React.useState(args.checked || false);
  useEffect(() => {
    setChecked(args.checked);
  }, [args.checked]);
  return <CheckboxCard {...args} checked={checked} onChange={event => {
    action("onChange")(event);
    setChecked(event.target.checked);
  }} className="h-[218px] w-[388px]" />;
}`,...(s=(a=e.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const P=["Playground"];export{e as Playground,P as __namedExportsOrder,E as default};
