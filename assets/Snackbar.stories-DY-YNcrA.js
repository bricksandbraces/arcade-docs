import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{An as n,Tc as r,Ts as i,ea as a,na as o,t as s,uc as c}from"./iframe-BGZyYePL.js";import{n as l,t as u}from"./figmaDesign-DLesXS3c.js";function d(e){let[t,r]=(0,f.useState)(!1);return(0,p.jsxs)(`div`,{className:`relative min-h-[480px] w-full`,children:[(0,p.jsx)(`div`,{className:`absolute inset-0 flex items-center justify-center`,children:(0,p.jsx)(i,{kind:`primary`,label:`Show Snackbar`,onClick:()=>r(!0)})}),(0,p.jsx)(n,{...e,open:t,onOpenChange:r})]})}var f,p,m,h,g,_,v,y,b;e((()=>{s(),f=t(r(),1),l(),p=c(),m={title:`Components/Notification/Snackbar`,component:n,tags:[`autodocs`],argTypes:{open:{control:!1},state:{control:{type:`select`},options:[...o]},subtitle:{control:`text`},autoHideDurationMs:{control:{type:`number`}}},parameters:{design:u(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=4419-2565`),docs:{description:{component:`Transient bottom-anchored message auto-dismissed after a short delay. Use for quick confirmations like "Copied to clipboard".`}}}},h={args:{title:`Saved`,state:`success`,autoHideDurationMs:3e3},render:e=>(0,p.jsx)(d,{...e})},g=e=>(0,p.jsx)(`div`,{className:`relative min-h-[480px] w-full`,children:(0,p.jsx)(n,{...e,open:!0,autoHideDurationMs:0})}),_={args:{title:`Recipient created`,state:`success`,action:{label:`Send payment`}},render:g},v={args:{title:`Recipient created`,state:`success`,inverse:!1,action:{label:`Send payment`}},render:g},y={parameters:{controls:{disable:!0}},render:()=>(0,p.jsxs)(`div`,{className:`gap-lg flex flex-col`,children:[o.map(e=>(0,p.jsx)(a,{title:`Title`,subtitle:`Subtitle`,kind:`snackbar`,state:e},e)),o.map(e=>(0,p.jsx)(a,{title:`Title`,subtitle:`Subtitle`,kind:`snackbar`,state:e,inverse:!1},e))]})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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