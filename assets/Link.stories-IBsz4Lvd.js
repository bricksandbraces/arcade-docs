import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{as as N,at as t,au as o}from"./ContextMenuList-C0nT4XLm.js";import"./index-CY-HDqYb.js";import{I as j}from"./IconNumber123-CTHY1HWk.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";import"./index-ZRCHFLd-.js";import"./borders-N_bRvfGw.js";import"./colors-mvAPBTAn.js";const y={IconArrowRight:t,IconArrowLeft:N,Icon123:j},M={title:"F/Link",component:o,args:{href:"#"},argTypes:{size:{control:{type:"select"},options:["sm","md","lg"]},icon:{control:{type:"select"},options:[...Object.keys(y)]}}},s=({...a})=>{const{icon:L,...b}=a,_=y[L];return e.jsx(o,{...b,icon:_})};s.args={label:"Link",disabled:!1,inline:!1,size:"md",icon:"IconArrowRight",leadingIcon:!1};const r=()=>e.jsxs("div",{className:"gap-md flex flex-col",children:[e.jsx(o,{href:"#",label:"Link",size:"sm",icon:t}),e.jsx(o,{href:"#",label:"Link",size:"md",icon:t}),e.jsx(o,{href:"#",label:"Link",size:"lg",icon:t})]}),n=a=>e.jsxs("p",{className:"text-body-md",children:["This is a paragraph with an ",e.jsx(o,{...a})," that flows with the text."]});n.args={label:"inline link",inline:!0,icon:t};const i=a=>e.jsxs("div",{className:"gap-md flex flex-col",children:[e.jsx(o,{...a}),e.jsx(o,{...a,inline:!0})]});i.args={label:"Disabled Link",disabled:!0,icon:t};s.__docgenInfo={description:"",methods:[],displayName:"Playground"};r.__docgenInfo={description:"",methods:[],displayName:"Sizes"};n.__docgenInfo={description:"",methods:[],displayName:"Inline"};i.__docgenInfo={description:"",methods:[],displayName:"Disabled"};s.__docgenInfo={description:"",methods:[],displayName:"Playground"};r.__docgenInfo={description:"",methods:[],displayName:"Sizes"};n.__docgenInfo={description:"",methods:[],displayName:"Inline"};i.__docgenInfo={description:"",methods:[],displayName:"Disabled"};var c,l,d;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`({
  ...args
}: React.ComponentProps<typeof Link> & Record<string, any>) => {
  const {
    icon,
    ...rest
  } = args;
  const IconComponent = iconMap[icon as keyof typeof iconMap];
  return <Link {...rest} icon={IconComponent} />;
}`,...(d=(l=s.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var p,m,g;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`() => <div className="gap-md flex flex-col">
    <Link href="#" label="Link" size="sm" icon={IconArrowRight} />
    <Link href="#" label="Link" size="md" icon={IconArrowRight} />
    <Link href="#" label="Link" size="lg" icon={IconArrowRight} />
  </div>`,...(g=(m=r.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var f,h,x;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`(args: React.ComponentProps<typeof Link>) => <p className="text-body-md">
    This is a paragraph with an <Link {...args} /> that flows with the text.
  </p>`,...(x=(h=n.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var u,I,k;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`(args: React.ComponentProps<typeof Link>) => <div className="gap-md flex flex-col">
    <Link {...args} />
    <Link {...args} inline />
  </div>`,...(k=(I=i.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};const T=["Playground","Sizes","Inline","Disabled"];export{i as Disabled,n as Inline,s as Playground,r as Sizes,T as __namedExportsOrder,M as default};
