import{j as m}from"./jsx-runtime-D_zvdyIk.js";import{p as r}from"./index.esm-vsB0jBHX.js";import{I as d,a as l,b as g}from"./IconNumber123-BQjgxgLN.js";import"./index-D4lIrffr.js";import"./index-C7yw4mlf.js";import"./index-BQQLSK9g.js";import"./index-DsJinFGm.js";import"./createReactComponent-CjakwVnM.js";const s={IconArrowRight:g,IconArrowLeft:l,Icon123:d},x={title:"Components/Link",component:r,argTypes:{size:{control:{type:"select"},options:["sm","md","lg"]},icon:{control:{type:"select"},options:[...Object.keys(s)]}}},o=({...c})=>{const{icon:i,...a}=c,p=s[i];return m.jsx(r,{...a,icon:p})};o.args={label:"Link",disabled:!1,inline:!1,size:"md",icon:"IconArrowLeft",leadingIcon:!1};o.__docgenInfo={description:"",methods:[],displayName:"Playground"};o.__docgenInfo={description:"",methods:[],displayName:"Playground"};var n,e,t;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`({
  ...args
}: React.ComponentProps<typeof Link> & Record<string, any>) => {
  const {
    icon,
    ...rest
  } = args;
  const IconComponent = iconMap[icon as keyof typeof iconMap];
  return <Link {...rest} icon={IconComponent} />;
}`,...(t=(e=o.parameters)==null?void 0:e.docs)==null?void 0:t.source}}};const C=["Playground"];export{o as Playground,C as __namedExportsOrder,x as default};
