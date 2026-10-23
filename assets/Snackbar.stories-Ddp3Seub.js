import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Cn as n,Jo as r,Js as i,Li as a,Ns as o,t as s,zi as c}from"./iframe-B2-yE2Kv.js";import{n as l,t as u}from"./figmaDesign-DDiUnvXT.js";function d(e){let[t,i]=(0,f.useState)(!1);return(0,p.jsxs)(`div`,{className:`relative min-h-[480px] w-full`,children:[(0,p.jsx)(`div`,{className:`absolute inset-0 flex items-center justify-center`,children:(0,p.jsx)(r,{kind:`primary`,label:`Show Snackbar`,onClick:()=>i(!0)})}),(0,p.jsx)(n,{...e,open:t,onOpenChange:i})]})}var f,p,m,h,g,_;e((()=>{s(),f=t(i(),1),l(),p=o(),m={title:`Feedback & Status/Notification/Snackbar`,component:n,tags:[`autodocs`],argTypes:{open:{control:!1},state:{control:{type:`select`},options:[...c]},subtitle:{control:`text`},autoHideDurationMs:{control:{type:`number`}}},parameters:{design:u(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=4419-2565`),docs:{description:{component:`Transient bottom-anchored message auto-dismissed after a short delay. Use for quick confirmations like "Copied to clipboard".`}}}},h={args:{title:`Saved`,state:`success`,autoHideDurationMs:3e3},render:e=>(0,p.jsx)(d,{...e})},g={parameters:{controls:{disable:!0}},render:()=>(0,p.jsx)(`div`,{className:`gap-lg flex flex-col`,children:c.map(e=>(0,p.jsx)(a,{title:`Title`,subtitle:`Subtitle`,kind:`snackbar`,state:e},e))})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Saved",
    state: "success",
    autoHideDurationMs: 3000
  },
  render: args => <SnackbarPlayground {...args} />
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="gap-lg flex flex-col">
      {NotificationStates.map(state => <Notification key={state} title="Title" subtitle="Subtitle" kind="snackbar" state={state} />)}
    </div>
}`,...g.parameters?.docs?.source}}},_=[`Playground`,`Overview`]}))();export{g as Overview,h as Playground,_ as __namedExportsOrder,m as default};