import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{b0 as m,b2 as p}from"./ContextMenu-BIXelnGu.js";import"./index-CY-HDqYb.js";import{a as d}from"./index-B-lxVbXh.js";import"./index-A6zbrgSY.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";import"./v4-CtRu48qb.js";const N={title:"Components/Notification/System",component:p,argTypes:{kind:{control:!1},state:{control:{type:"select"},options:[...m]}}},t={args:{kind:"system",title:"Title",subtitle:"Subtitle",state:"info",onClose:d("onClose")}},e={parameters:{controls:{disable:!0}},render:()=>o.jsx("div",{className:"gap-lg flex flex-col",children:m.map(s=>o.jsx(p,{title:"Title",subtitle:"Subtitle",kind:"system",state:s,onClose:d("onClose"),className:"w-[460px]"},s))})};var a,i,r;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    kind: "system",
    title: "Title",
    subtitle: "Subtitle",
    state: "info",
    onClose: action("onClose")
  }
}`,...(r=(i=t.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};var n,l,c;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="gap-lg flex flex-col">
      {NotificationStates.map(state => <Notification key={state} title="Title" subtitle="Subtitle" kind="system" state={state} onClose={action("onClose")} className="w-[460px]" />)}
    </div>
}`,...(c=(l=e.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const v=["Playground","Overview"];export{e as Overview,t as Playground,v as __namedExportsOrder,N as default};
