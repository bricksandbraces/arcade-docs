import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{b4 as d,b8 as p,b6 as y,h as g}from"./ContextMenuList-CigaLEIp.js";import{r as h}from"./index-CY-HDqYb.js";import{a as T}from"./index-B-lxVbXh.js";import"./index-A6zbrgSY.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";import"./index-ZRCHFLd-.js";import"./sizes-BpUsT7VU.js";import"./colors-CoOIoG7W.js";import"./v4-CtRu48qb.js";const D=()=>typeof crypto<"u"&&"randomUUID"in crypto?crypto.randomUUID():`toast-${Date.now()}-${Math.random().toString(36).slice(2,9)}`,P={title:"Components/Notification/Toast",component:p,argTypes:{state:{control:{type:"select"},options:[...d]},subtitle:{control:"text"},timestamp:{control:"text"},defaultAutoHideDurationMs:{control:{type:"number"}}}};function N(t){const[f,i]=h.useState([]);return e.jsxs("div",{className:"relative min-h-[480px] w-full",children:[e.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:e.jsx(g,{kind:"primary",label:"Show Toast",onClick:()=>i(a=>[{id:D(),title:t.title,subtitle:t.subtitle,timestamp:t.timestamp,state:t.state,autoHideDurationMs:t.defaultAutoHideDurationMs},...a])})}),e.jsx(p,{defaultAutoHideDurationMs:t.defaultAutoHideDurationMs,items:f,onDismiss:a=>i(x=>x.filter(b=>b.id!==a))})]})}const s={args:{title:"Hinweis",subtitle:"Kurze Beschreibung des Toasts.",timestamp:"00:00 Uhr",state:"info",defaultAutoHideDurationMs:3e3},render:t=>e.jsx(N,{...t})},o={parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{className:"gap-lg flex flex-col",children:d.map(t=>e.jsx(y,{title:"Title",subtitle:"Subtitle",timestamp:"00:00 Uhr",kind:"toast",state:t,onClose:T("onClose"),className:"w-[204px]"},t))})};var r,n,l;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    title: "Hinweis",
    subtitle: "Kurze Beschreibung des Toasts.",
    timestamp: "00:00 Uhr",
    state: "info",
    defaultAutoHideDurationMs: 3000
  },
  render: args => <ToastsPlayground {...args} />
}`,...(l=(n=s.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var m,u,c;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="gap-lg flex flex-col">
      {NotificationStates.map(state => <Notification key={state} title="Title" subtitle="Subtitle" timestamp="00:00 Uhr" kind="toast" state={state} onClose={action("onClose")} className="w-[204px]" />)}
    </div>
}`,...(c=(u=o.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const B=["Playground","Overview"];export{o as Overview,s as Playground,B as __namedExportsOrder,P as default};
