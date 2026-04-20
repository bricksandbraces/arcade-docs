import{j as u}from"./jsx-runtime-D_zvdyIk.js";import{R as f,r as m}from"./index-CY-HDqYb.js";import{l as o}from"./ContextMenuList-BhPzpHNE.js";import{a as p}from"./index-B-lxVbXh.js";import"./index-A6zbrgSY.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";import"./index-ZRCHFLd-.js";import"./sizes-BpUsT7VU.js";import"./colors-CoOIoG7W.js";import"./v4-CtRu48qb.js";const v={title:"Components/Checkbox/Check",component:o,argTypes:{checked:{control:"inline-radio",options:[!1,!0,"indeterminate"]},disabled:{control:"boolean"},readonly:{control:"boolean"}}},n=e=>{const[t,c]=f.useState(()=>e.checked===void 0||e.checked===null?!1:e.checked);return m.useEffect(()=>{c(e.checked===void 0||e.checked===null?!1:e.checked)},[e.checked]),u.jsx(o,{...e,checked:t,onChange:a=>{p("onChange")(a),!(e.disabled||e.readonly)&&c(t==="indeterminate"?!0:a.target.checked)}})};n.args={checked:!1,disabled:!1,readonly:!1};const d=e=>{const[t,c]=f.useState(()=>e.checked===void 0||e.checked===null?!1:e.checked);return m.useEffect(()=>{c(e.checked===void 0||e.checked===null?!1:e.checked)},[e.checked]),u.jsx(o,{...e,checked:t,onChange:a=>{p("onChange")(a),!(e.disabled||e.readonly)&&c(t==="indeterminate"?!0:a.target.checked)}})};d.args={checked:!1,disabled:!0,readonly:!1};n.__docgenInfo={description:"",methods:[],displayName:"Playground"};d.__docgenInfo={description:"",methods:[],displayName:"Disabled"};n.__docgenInfo={description:"",methods:[],displayName:"Playground"};d.__docgenInfo={description:"",methods:[],displayName:"Disabled"};var r,s,i;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`(args: React.ComponentProps<typeof Check> & Record<string, any>) => {
  const [checked, setChecked] = React.useState<boolean | "indeterminate">(() => args.checked === undefined || args.checked === null ? false : args.checked);
  useEffect(() => {
    setChecked(args.checked === undefined || args.checked === null ? false : args.checked);
  }, [args.checked]);
  return <Check {...args} checked={checked} onChange={e => {
    action("onChange")(e);
    if (args.disabled || args.readonly) {
      return;
    }
    if (checked === "indeterminate") {
      setChecked(true);
    } else {
      setChecked(e.target.checked);
    }
  }} />;
}`,...(i=(s=n.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var h,l,k;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`(args: React.ComponentProps<typeof Check> & Record<string, any>) => {
  const [checked, setChecked] = React.useState<boolean | "indeterminate">(() => args.checked === undefined || args.checked === null ? false : args.checked);
  useEffect(() => {
    setChecked(args.checked === undefined || args.checked === null ? false : args.checked);
  }, [args.checked]);
  return <Check {...args} checked={checked} onChange={e => {
    action("onChange")(e);
    if (args.disabled || args.readonly) {
      return;
    }
    if (checked === "indeterminate") {
      setChecked(true);
    } else {
      setChecked(e.target.checked);
    }
  }} />;
}`,...(k=(l=d.parameters)==null?void 0:l.docs)==null?void 0:k.source}}};const D=["Playground","Disabled"];export{d as Disabled,n as Playground,D as __namedExportsOrder,v as default};
