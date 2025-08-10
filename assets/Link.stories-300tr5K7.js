import{j as m}from"./jsx-runtime-D_zvdyIk.js";import{L as r}from"./Input-BF_BM5ZX.js";import"./index-D4lIrffr.js";import{I as d,a as l,b as g}from"./IconNumber123-BQjgxgLN.js";import"./index-C7yw4mlf.js";import"./index-BQQLSK9g.js";import"./index-DsJinFGm.js";import"./borders-N_bRvfGw.js";import"./colors-DFCrPdrr.js";import"./createReactComponent-CjakwVnM.js";const s={IconArrowRight:g,IconArrowLeft:l,Icon123:d},P={title:"Components/Link",component:r,argTypes:{size:{control:{type:"select"},options:["sm","md","lg"]},icon:{control:{type:"select"},options:[...Object.keys(s)]}}},o=({...i})=>{const{icon:c,...a}=i,p=s[c];return m.jsx(r,{...a,icon:p})};o.args={label:"Link",disabled:!1,inline:!1,size:"md",icon:"IconArrowLeft",leadingIcon:!1};o.__docgenInfo={description:"",methods:[],displayName:"Playground"};o.__docgenInfo={description:"",methods:[],displayName:"Playground"};var n,e,t;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`({
  ...args
}: React.ComponentProps<typeof Link> & Record<string, any>) => {
  const {
    icon,
    ...rest
  } = args;
  const IconComponent = iconMap[icon as keyof typeof iconMap];
  return <Link {...rest} icon={IconComponent} />;
}`,...(t=(e=o.parameters)==null?void 0:e.docs)==null?void 0:t.source}}};const j=["Playground"];export{o as Playground,j as __namedExportsOrder,P as default};
