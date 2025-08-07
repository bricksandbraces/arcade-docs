import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{w as n,y as m}from"./index.esm-vsB0jBHX.js";import{a as g}from"./index-B-lxVbXh.js";import"./index-D4lIrffr.js";import"./index-C7yw4mlf.js";import"./index-BQQLSK9g.js";import"./index-DsJinFGm.js";import"./v4-CtRu48qb.js";const D={title:"Components/Badge/Badge",component:n},e=({text:r,...t})=>a.jsx("div",{children:a.jsx(n,{...t,onDelete:g("onDelete"),children:r})});e.args={color:"red",text:"Badge"};e.argTypes={color:{description:"The color of the badge",control:{type:"select"},options:m}};const o=r=>a.jsx("div",{className:"gap-x-md flex",children:m.map(t=>a.jsx(n,{color:t,...r,onDelete:g("onDelete"),children:r.text},t))});o.args={type:void 0,text:"Badge"};o.argTypes={type:{description:"The type of the badge",control:{type:"select"},options:[void 0,"filter"]}};e.__docgenInfo={description:"",methods:[],displayName:"Playground"};o.__docgenInfo={description:"",methods:[],displayName:"Overview"};e.__docgenInfo={description:"",methods:[],displayName:"Playground"};o.__docgenInfo={description:"",methods:[],displayName:"Overview"};var s,d,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`({
  text,
  ...args
}: React.ComponentProps<typeof Badge> & Record<string, any>) => {
  return <div>
      <Badge {...args} onDelete={action("onDelete")}>
        {text}
      </Badge>
    </div>;
}`,...(i=(d=e.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var c,p,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`(args: any) => {
  return <div className="gap-x-md flex">
      {BadgeColors.map(color => <Badge key={color} color={color} {...args} onDelete={action("onDelete")}>
          {args.text}
        </Badge>)}
    </div>;
}`,...(l=(p=o.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const j=["Playground","Overview"];export{o as Overview,e as Playground,j as __namedExportsOrder,D as default};
