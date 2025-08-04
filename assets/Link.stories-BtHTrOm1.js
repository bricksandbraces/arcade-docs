import{j as m}from"./jsx-runtime-D_zvdyIk.js";import{l as t}from"./index.esm-Cn46w_Lm.js";import{I as d,a as l,b as g}from"./IconNumber123-DSDAmR8j.js";import"./index-D4lIrffr.js";import"./index-BQQLSK9g.js";import"./index-DsJinFGm.js";const r={IconArrowRight:g,IconArrowLeft:l,Icon123:d},_={title:"Components/Link",component:t,argTypes:{size:{control:{type:"select"},options:["sm","md","lg"]},icon:{control:{type:"select"},options:[...Object.keys(r)]}}},o=({...c})=>{const{icon:a,...i}=c,p=r[a];return m.jsx(t,{...i,icon:p})};o.args={label:"Link",disabled:!1,inline:!1,size:"md",icon:"IconArrowLeft",leadingIcon:!1};o.__docgenInfo={description:"",methods:[],displayName:"Playground"};o.__docgenInfo={description:"",methods:[],displayName:"Playground"};var n,e,s;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`({
  ...args
}: React.ComponentProps<typeof Link> & Record<string, any>) => {
  const {
    icon,
    ...rest
  } = args;
  const IconComponent = iconMap[icon as keyof typeof iconMap];
  return <Link {...rest} icon={IconComponent} />;
}`,...(s=(e=o.parameters)==null?void 0:e.docs)==null?void 0:s.source}}};const b=["Playground"];export{o as Playground,b as __namedExportsOrder,_ as default};
