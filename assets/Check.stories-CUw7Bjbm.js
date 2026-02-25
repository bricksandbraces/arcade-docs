import{j as p}from"./jsx-runtime-D_zvdyIk.js";import{R as f,r as l}from"./index-CY-HDqYb.js";import{j as a}from"./ContextMenuList-C0nT4XLm.js";import{a as u}from"./index-B-lxVbXh.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";import"./index-ZRCHFLd-.js";import"./borders-N_bRvfGw.js";import"./colors-mvAPBTAn.js";import"./v4-CtRu48qb.js";const j={title:"F/Checkbox/Check",component:a,argTypes:{checked:{control:"inline-radio",options:[!1,!0,"indeterminate"]},disabled:{control:"boolean"}}},n=e=>{const[s,c]=f.useState(e.checked||!1);return l.useEffect(()=>{e.checked!==void 0&&c(e.checked)},[e.checked]),p.jsx(a,{...e,checked:s,onChange:o=>{u("onChange")(o),c(s==="indeterminate"?!0:o.target.checked)}})};n.args={checked:!1,disabled:!1};const t=e=>{const[s,c]=f.useState(e.checked||!1);return l.useEffect(()=>{e.checked!==void 0&&c(e.checked)},[e.checked]),p.jsx(a,{...e,checked:s,onChange:o=>{u("onChange")(o),c(s==="indeterminate"?!0:o.target.checked)}})};t.args={checked:!1,disabled:!0};n.__docgenInfo={description:"",methods:[],displayName:"Playground"};t.__docgenInfo={description:"",methods:[],displayName:"Disabled"};n.__docgenInfo={description:"",methods:[],displayName:"Playground"};t.__docgenInfo={description:"",methods:[],displayName:"Disabled"};var d,r,i;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`(args: React.ComponentProps<typeof Check> & Record<string, any>) => {
  const [checked, setChecked] = React.useState<boolean | "indeterminate">(args.checked || false);
  useEffect(() => {
    if (args.checked !== undefined) {
      setChecked(args.checked);
    }
  }, [args.checked]);
  return <Check {...args} checked={checked} onChange={e => {
    action("onChange")(e);
    if (checked === "indeterminate") {
      setChecked(true);
    } else {
      setChecked(e.target.checked);
    }
  }} />;
}`,...(i=(r=n.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};var h,k,m;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`(args: React.ComponentProps<typeof Check> & Record<string, any>) => {
  const [checked, setChecked] = React.useState<boolean | "indeterminate">(args.checked || false);
  useEffect(() => {
    if (args.checked !== undefined) {
      setChecked(args.checked);
    }
  }, [args.checked]);
  return <Check {...args} checked={checked} onChange={e => {
    action("onChange")(e);
    if (checked === "indeterminate") {
      setChecked(true);
    } else {
      setChecked(e.target.checked);
    }
  }} />;
}`,...(m=(k=t.parameters)==null?void 0:k.docs)==null?void 0:m.source}}};const D=["Playground","Disabled"];export{t as Disabled,n as Playground,D as __namedExportsOrder,j as default};
