import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Kr as n,Wr as r,go as i,ja as a,jo as o,rn as s,t as c}from"./iframe-D_22E2i2.js";function l(e){let[t,n]=(0,u.useState)([]);return(0,d.jsxs)(`div`,{className:`relative min-h-[480px] w-full`,children:[(0,d.jsx)(`div`,{className:`absolute inset-0 flex items-center justify-center`,children:(0,d.jsx)(a,{kind:`primary`,label:`Show Toast`,onClick:()=>n(t=>[{id:p(),title:e.title,subtitle:e.subtitle,timestamp:e.timestamp,state:e.state,autoHideDurationMs:e.defaultAutoHideDurationMs},...t])})}),(0,d.jsx)(s,{defaultAutoHideDurationMs:e.defaultAutoHideDurationMs,items:t,onDismiss:e=>n(t=>t.filter(t=>t.id!==e))})]})}var u,d,f,p,m,h,g,_;e((()=>{c(),u=t(o(),1),d=i(),{action:f}=__STORYBOOK_MODULE_ACTIONS__,p=()=>typeof crypto<`u`&&`randomUUID`in crypto?crypto.randomUUID():`toast-${Date.now()}-${Math.random().toString(36).slice(2,9)}`,m={title:`Feedback & Status/Notification/Toast`,component:s,tags:[`autodocs`],argTypes:{state:{control:{type:`select`},options:[...n]},subtitle:{control:`text`},timestamp:{control:`text`},defaultAutoHideDurationMs:{control:{type:`number`}}},parameters:{docs:{description:{component:`Stack of floating transient notifications triggered by user actions. Use for asynchronous feedback that doesn't need to stay on screen.`}}}},h={args:{title:`Notice`,subtitle:`Short description of the toast.`,timestamp:`00:00 Uhr`,state:`info`,defaultAutoHideDurationMs:3e3},render:e=>(0,d.jsx)(l,{...e})},g={parameters:{controls:{disable:!0}},render:()=>(0,d.jsx)(`div`,{className:`gap-lg flex flex-col`,children:n.map(e=>(0,d.jsx)(r,{title:`Title`,subtitle:`Subtitle`,timestamp:`00:00 Uhr`,kind:`toast`,state:e,onClose:f(`onClose`),className:`w-[204px]`},e))})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Notice",
    subtitle: "Short description of the toast.",
    timestamp: "00:00 Uhr",
    state: "info",
    defaultAutoHideDurationMs: 3000
  },
  render: args => <ToastsPlayground {...args} />
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="gap-lg flex flex-col">
      {NotificationStates.map(state => <Notification key={state} title="Title" subtitle="Subtitle" timestamp="00:00 Uhr" kind="toast" state={state} onClose={action("onClose")} className="w-[204px]" />)}
    </div>
}`,...g.parameters?.docs?.source}}},_=[`Playground`,`Overview`]}))();export{g as Overview,h as Playground,_ as __namedExportsOrder,m as default};