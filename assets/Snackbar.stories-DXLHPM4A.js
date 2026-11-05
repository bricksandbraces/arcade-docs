import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Ki as n,Qs as r,Tn as i,Wi as a,pc as o,ps as s,t as c}from"./iframe-U545K7vP.js";import{n as l,t as u}from"./figmaDesign-DDiUnvXT.js";function d(e){let[t,n]=(0,f.useState)(!1);return(0,p.jsxs)(`div`,{className:`relative min-h-[480px] w-full`,children:[(0,p.jsx)(`div`,{className:`absolute inset-0 flex items-center justify-center`,children:(0,p.jsx)(s,{kind:`primary`,label:`Show Snackbar`,onClick:()=>n(!0)})}),(0,p.jsx)(i,{...e,open:t,onOpenChange:n})]})}var f,p,m,h,g,_,v,y,b;e((()=>{c(),f=t(o(),1),l(),p=r(),m={title:`Feedback & Status/Notification/Snackbar`,component:i,tags:[`autodocs`],argTypes:{open:{control:!1},state:{control:{type:`select`},options:[...n]},subtitle:{control:`text`},autoHideDurationMs:{control:{type:`number`}}},parameters:{design:u(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=4419-2565`),docs:{description:{component:`Transient bottom-anchored message auto-dismissed after a short delay. Use for quick confirmations like "Copied to clipboard".`}}}},h={args:{title:`Saved`,state:`success`,autoHideDurationMs:3e3},render:e=>(0,p.jsx)(d,{...e})},g=e=>(0,p.jsx)(`div`,{className:`relative min-h-[480px] w-full`,children:(0,p.jsx)(i,{...e,open:!0,autoHideDurationMs:0})}),_={args:{title:`Recipient created`,state:`success`,action:{label:`Send payment`}},render:g},v={args:{title:`Recipient created`,state:`success`,inverse:!1,action:{label:`Send payment`}},render:g},y={parameters:{controls:{disable:!0}},render:()=>(0,p.jsxs)(`div`,{className:`gap-lg flex flex-col`,children:[n.map(e=>(0,p.jsx)(a,{title:`Title`,subtitle:`Subtitle`,kind:`snackbar`,state:e},e)),n.map(e=>(0,p.jsx)(a,{title:`Title`,subtitle:`Subtitle`,kind:`snackbar`,state:e,inverse:!1},e))]})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Saved",
    state: "success",
    autoHideDurationMs: 3000
  },
  render: args => <SnackbarPlayground {...args} />
}`,...h.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Recipient created",
    state: "success",
    action: {
      label: "Send payment"
    }
  },
  render: renderOpenSnackbar
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Recipient created",
    state: "success",
    inverse: false,
    action: {
      label: "Send payment"
    }
  },
  render: renderOpenSnackbar
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="gap-lg flex flex-col">
      {NotificationStates.map(state => <Notification key={state} title="Title" subtitle="Subtitle" kind="snackbar" state={state} />)}
      {NotificationStates.map(state => <Notification key={state} title="Title" subtitle="Subtitle" kind="snackbar" state={state} inverse={false} />)}
    </div>
}`,...y.parameters?.docs?.source}}},b=[`Playground`,`WithAction`,`Colored`,`Overview`]}))();export{v as Colored,y as Overview,h as Playground,_ as WithAction,b as __namedExportsOrder,m as default};