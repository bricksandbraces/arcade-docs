import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Fn as n,Ki as r,Ln as i,fn as a,sa as o,si as s,t as c}from"./iframe-zRr0dzku.js";function l(e){let[t,n]=(0,u.useState)(!1);return(0,d.jsxs)(`div`,{className:`relative min-h-[480px] w-full`,children:[(0,d.jsx)(`div`,{className:`absolute inset-0 flex items-center justify-center`,children:(0,d.jsx)(s,{kind:`primary`,label:`Show Snackbar`,onClick:()=>n(!0)})}),(0,d.jsx)(a,{...e,open:t,onOpenChange:n})]})}var u,d,f,p,m,h;e((()=>{c(),u=t(o(),1),d=r(),f={title:`Components/Notification/Snackbar`,component:a,tags:[`autodocs`],argTypes:{open:{control:!1},state:{control:{type:`select`},options:[...i]},subtitle:{control:`text`},autoHideDurationMs:{control:{type:`number`}}},parameters:{docs:{description:{component:`Transient bottom-anchored message auto-dismissed after a short delay. Use for quick confirmations like "Copied to clipboard".`}}}},p={args:{title:`Gespeichert`,state:`success`,autoHideDurationMs:3e3},render:e=>(0,d.jsx)(l,{...e})},m={parameters:{controls:{disable:!0}},render:()=>(0,d.jsx)(`div`,{className:`gap-lg flex flex-col`,children:i.map(e=>(0,d.jsx)(n,{title:`Title`,subtitle:`Subtitle`,kind:`snackbar`,state:e},e))})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Gespeichert",
    state: "success",
    autoHideDurationMs: 3000
  },
  render: args => <SnackbarPlayground {...args} />
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="gap-lg flex flex-col">
      {NotificationStates.map(state => <Notification key={state} title="Title" subtitle="Subtitle" kind="snackbar" state={state} />)}
    </div>
}`,...m.parameters?.docs?.source}}},h=[`Playground`,`Overview`]}))();export{m as Overview,p as Playground,h as __namedExportsOrder,f as default};