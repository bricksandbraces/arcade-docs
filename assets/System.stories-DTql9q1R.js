import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{b4 as c,b6 as p}from"./ContextMenuList-w4l5Bqjq.js";import"./index-CY-HDqYb.js";import{a as d}from"./index-B-lxVbXh.js";import"./index-A6zbrgSY.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";import"./index-ZRCHFLd-.js";import"./sizes-BpUsT7VU.js";import"./colors-CoOIoG7W.js";import"./v4-CtRu48qb.js";const T={title:"Components/Notification/System",component:p,argTypes:{kind:{control:!1},state:{control:{type:"select"},options:[...c]}}},t={args:{kind:"system",title:"Title",subtitle:"Subtitle",state:"info",onClose:d("onClose")}},e={parameters:{controls:{disable:!0}},render:()=>s.jsx("div",{className:"gap-lg flex flex-col",children:c.map(o=>s.jsx(p,{title:"Title",subtitle:"Subtitle",kind:"system",state:o,onClose:d("onClose"),className:"w-[460px]"},o))})};var i,a,r;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    kind: "system",
    title: "Title",
    subtitle: "Subtitle",
    state: "info",
    onClose: action("onClose")
  }
}`,...(r=(a=t.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};var n,l,m;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="gap-lg flex flex-col">
      {NotificationStates.map(state => <Notification key={state} title="Title" subtitle="Subtitle" kind="system" state={state} onClose={action("onClose")} className="w-[460px]" />)}
    </div>
}`,...(m=(l=e.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const j=["Playground","Overview"];export{e as Overview,t as Playground,j as __namedExportsOrder,T as default};
