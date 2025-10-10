import{j as m}from"./jsx-runtime-D_zvdyIk.js";import{aq as d,ar as l,as as t}from"./ContextMenuList-Dq92F7hd.js";import"./index-0yr9KlQE.js";import{I as g}from"./IconNumber123-D9neMp7v.js";import"./index-tymuTqDW.js";import"./index-DotmK1FS.js";import"./index-ChaIqHV-.js";import"./borders-N_bRvfGw.js";import"./colors-mvAPBTAn.js";const s={IconArrowRight:l,IconArrowLeft:d,Icon123:g},C={title:"WIP Components/Link",component:t,argTypes:{size:{control:{type:"select"},options:["sm","md","lg"]},icon:{control:{type:"select"},options:[...Object.keys(s)]}}},o=({...i})=>{const{icon:c,...a}=i,p=s[c];return m.jsx(t,{...a,icon:p})};o.args={label:"Link",disabled:!1,inline:!1,size:"md",icon:"IconArrowLeft",leadingIcon:!1};o.__docgenInfo={description:"",methods:[],displayName:"Playground"};o.__docgenInfo={description:"",methods:[],displayName:"Playground"};var n,e,r;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`({
  ...args
}: React.ComponentProps<typeof Link> & Record<string, any>) => {
  const {
    icon,
    ...rest
  } = args;
  const IconComponent = iconMap[icon as keyof typeof iconMap];
  return <Link {...rest} icon={IconComponent} />;
}`,...(r=(e=o.parameters)==null?void 0:e.docs)==null?void 0:r.source}}};const b=["Playground"];export{o as Playground,b as __namedExportsOrder,C as default};
