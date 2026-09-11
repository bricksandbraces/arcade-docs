import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Io as n,Za as r,Zo as i,ei as a,ni as o,t as s,un as c}from"./iframe-BikmupxW.js";import{n as l,t as u}from"./figmaDesign-CO6i5n9C.js";function d(e){let[t,n]=(0,f.useState)(!1);return(0,p.jsxs)(`div`,{className:`relative min-h-[480px] w-full`,children:[(0,p.jsx)(`div`,{className:`absolute inset-0 flex items-center justify-center`,children:(0,p.jsx)(r,{kind:`primary`,label:`Show Snackbar`,onClick:()=>n(!0)})}),(0,p.jsx)(c,{...e,open:t,onOpenChange:n})]})}var f,p,m,h,g,_;e((()=>{s(),f=t(i(),1),l(),p=n(),m={title:`Feedback & Status/Notification/Snackbar`,component:c,tags:[`autodocs`],argTypes:{open:{control:!1},state:{control:{type:`select`},options:[...o]},subtitle:{control:`text`},autoHideDurationMs:{control:{type:`number`}}},parameters:{design:u(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=4419-2565`),docs:{description:{component:`Transient bottom-anchored message auto-dismissed after a short delay. Use for quick confirmations like "Copied to clipboard".`}}}},h={args:{title:`Saved`,state:`success`,autoHideDurationMs:3e3},render:e=>(0,p.jsx)(d,{...e})},g={parameters:{controls:{disable:!0}},render:()=>(0,p.jsx)(`div`,{className:`gap-lg flex flex-col`,children:o.map(e=>(0,p.jsx)(a,{title:`Title`,subtitle:`Subtitle`,kind:`snackbar`,state:e},e))})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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