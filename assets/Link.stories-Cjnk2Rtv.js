import{j as m}from"./jsx-runtime-D_zvdyIk.js";import{f as t}from"./index.esm-CsxWbDzB.js";import{I as d,a as l,b as f}from"./IconNumber123-DSDAmR8j.js";import"./index-D4lIrffr.js";import"./index-C7yw4mlf.js";import"./index-BQQLSK9g.js";import"./index-DsJinFGm.js";const r={IconArrowRight:f,IconArrowLeft:l,Icon123:d},b={title:"Components/Link",component:t,argTypes:{size:{control:{type:"select"},options:["sm","md","lg"]},icon:{control:{type:"select"},options:[...Object.keys(r)]}}},o=({...c})=>{const{icon:i,...a}=c,p=r[i];return m.jsx(t,{...a,icon:p})};o.args={label:"Link",disabled:!1,inline:!1,size:"md",icon:"IconArrowLeft",leadingIcon:!1};o.__docgenInfo={description:"",methods:[],displayName:"Playground"};o.__docgenInfo={description:"",methods:[],displayName:"Playground"};var n,e,s;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`({
  ...args
}: React.ComponentProps<typeof Link> & Record<string, any>) => {
  const {
    icon,
    ...rest
  } = args;
  const IconComponent = iconMap[icon as keyof typeof iconMap];
  return <Link {...rest} icon={IconComponent} />;
}`,...(s=(e=o.parameters)==null?void 0:e.docs)==null?void 0:s.source}}};const x=["Playground"];export{o as Playground,x as __namedExportsOrder,b as default};
