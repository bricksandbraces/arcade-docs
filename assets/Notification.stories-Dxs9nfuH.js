import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{v as s}from"./index.esm-Cz6JDsgm.js";import{a as r}from"./index-B-lxVbXh.js";import"./index-D4lIrffr.js";import"./index-BQQLSK9g.js";import"./index-DsJinFGm.js";import"./v4-CtRu48qb.js";const b={title:"Components/Notification",component:s,argTypes:{kind:{control:{type:"select"},options:["banner","inline","toast","system"]},state:{control:{type:"select"},options:["error","info","success","warning"]}}},i=({...e})=>n.jsx(s,{...e});i.args={title:"Title",subtitle:"Subtitle",timestamp:new Date().toISOString(),kind:"banner",state:"info",onClose:r("onClose")};const o=()=>n.jsxs("div",{className:"gap-lg flex flex-row",children:[n.jsx("div",{className:"gap-lg flex flex-col",children:["banner","system"].map(e=>["info","success","error","warning"].map(t=>n.jsx(s,{title:"Title",subtitle:"Subtitle",kind:e,state:t,onClose:r("onClose")},`${e}-${t}`)))}),n.jsx("div",{className:"gap-lg flex flex-col",children:["toast"].map(e=>["info","success","error","warning"].map(t=>n.jsx(s,{title:"Title",subtitle:"Subtitle",timestamp:"00:00 Uhr",kind:e,state:t,onClose:r("onClose")},`${e}-${t}`)))}),n.jsx("div",{className:"gap-lg flex flex-col",children:["inline"].map(e=>["info","success","error","warning"].map(t=>n.jsx(s,{title:"Title",kind:e,state:t},`${e}-${t}`)))})]});i.__docgenInfo={description:"",methods:[],displayName:"Playground"};o.__docgenInfo={description:"",methods:[],displayName:"Overview"};i.__docgenInfo={description:"",methods:[],displayName:"Playground"};o.__docgenInfo={description:"",methods:[],displayName:"Overview"};var a,l,c;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`({
  ...args
}: React.ComponentProps<typeof Notification> & Record<string, any>) => {
  return <Notification {...args} />;
}`,...(c=(l=i.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var m,p,d;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  return <div className="gap-lg flex flex-row">
      <div className="gap-lg flex flex-col">
        {["banner", "system"].map(kind => {
        return ["info", "success", "error", "warning"].map(state => {
          return <Notification key={\`\${kind}-\${state}\`} title={"Title"} subtitle="Subtitle" kind={kind as (typeof NotificationKinds)[number]} state={state as (typeof NotificationStates)[number]} onClose={action("onClose")} />;
        });
      })}
      </div>
      <div className="gap-lg flex flex-col">
        {["toast"].map(kind => {
        return ["info", "success", "error", "warning"].map(state => {
          return <Notification key={\`\${kind}-\${state}\`} title={"Title"} subtitle="Subtitle" timestamp="00:00 Uhr" kind={kind as (typeof NotificationKinds)[number]} state={state as (typeof NotificationStates)[number]} onClose={action("onClose")} />;
        });
      })}
      </div>
      <div className="gap-lg flex flex-col">
        {["inline"].map(kind => {
        return ["info", "success", "error", "warning"].map(state => {
          return <Notification key={\`\${kind}-\${state}\`} title={"Title"} kind={kind as (typeof NotificationKinds)[number]} state={state as (typeof NotificationStates)[number]} />;
        });
      })}
      </div>
    </div>;
}`,...(d=(p=o.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const k=["Playground","Overview"];export{o as Overview,i as Playground,k as __namedExportsOrder,b as default};
