import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Io as n,Za as r,Zo as i,ei as a,ln as o,ni as s,t as c}from"./iframe-CPClxiO6.js";import{n as l,t as u}from"./figmaDesign-CO6i5n9C.js";function d(e){let[t,n]=(0,f.useState)([]);return(0,p.jsxs)(`div`,{className:`relative min-h-[480px] w-full`,children:[(0,p.jsx)(`div`,{className:`absolute inset-0 flex items-center justify-center`,children:(0,p.jsx)(r,{kind:`primary`,label:`Show Toast`,onClick:()=>n(t=>[{id:h(),title:e.title,subtitle:e.subtitle,timestamp:e.timestamp,state:e.state,autoHideDurationMs:e.defaultAutoHideDurationMs},...t])})}),(0,p.jsx)(o,{defaultAutoHideDurationMs:e.defaultAutoHideDurationMs,items:t,onDismiss:e=>n(t=>t.filter(t=>t.id!==e))})]})}var f,p,m,h,g,_,v,y;e((()=>{c(),f=t(i(),1),l(),p=n(),{action:m}=__STORYBOOK_MODULE_ACTIONS__,h=()=>typeof crypto<`u`&&`randomUUID`in crypto?crypto.randomUUID():`toast-${Date.now()}-${Math.random().toString(36).slice(2,9)}`,g={title:`Feedback & Status/Notification/Toast`,component:o,tags:[`autodocs`],argTypes:{state:{control:{type:`select`},options:[...s]},subtitle:{control:`text`},timestamp:{control:`text`},defaultAutoHideDurationMs:{control:{type:`number`}}},parameters:{design:u(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=2149-2526`),docs:{description:{component:`Stack of floating transient notifications triggered by user actions. Use for asynchronous feedback that doesn't need to stay on screen.`}}}},_={args:{title:`Notice`,subtitle:`Short description of the toast.`,timestamp:`00:00 Uhr`,state:`info`,defaultAutoHideDurationMs:3e3},render:e=>(0,p.jsx)(d,{...e})},v={parameters:{controls:{disable:!0}},render:()=>(0,p.jsx)(`div`,{className:`gap-lg flex flex-col`,children:s.map(e=>(0,p.jsx)(a,{title:`Title`,subtitle:`Subtitle`,timestamp:`00:00 Uhr`,kind:`toast`,state:e,onClose:m(`onClose`),className:`w-[204px]`},e))})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Notice",
    subtitle: "Short description of the toast.",
    timestamp: "00:00 Uhr",
    state: "info",
    defaultAutoHideDurationMs: 3000
  },
  render: args => <ToastsPlayground {...args} />
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="gap-lg flex flex-col">
      {NotificationStates.map(state => <Notification key={state} title="Title" subtitle="Subtitle" timestamp="00:00 Uhr" kind="toast" state={state} onClose={action("onClose")} className="w-[204px]" />)}
    </div>
}`,...v.parameters?.docs?.source}}},y=[`Playground`,`Overview`]}))();export{v as Overview,_ as Playground,y as __namedExportsOrder,g as default};