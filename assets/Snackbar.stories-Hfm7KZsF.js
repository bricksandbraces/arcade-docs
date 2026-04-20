import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{b4 as m,b7 as u,b6 as b,h as f}from"./ContextMenuList-AIp8CmXM.js";import{r as x}from"./index-CY-HDqYb.js";import"./index-A6zbrgSY.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";import"./index-ZRCHFLd-.js";import"./sizes-BpUsT7VU.js";import"./colors-CoOIoG7W.js";const P={title:"Components/Notification/Snackbar",component:u,argTypes:{open:{control:!1},state:{control:{type:"select"},options:[...m]},subtitle:{control:"text"},autoHideDurationMs:{control:{type:"number"}}}};function g(t){const[d,s]=x.useState(!1);return e.jsxs("div",{className:"relative min-h-[480px] w-full",children:[e.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:e.jsx(f,{kind:"primary",label:"Show Snackbar",onClick:()=>s(!0)})}),e.jsx(u,{...t,open:d,onOpenChange:s})]})}const r={args:{title:"Gespeichert",state:"success",autoHideDurationMs:3e3},render:t=>e.jsx(g,{...t})},a={parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{className:"gap-lg flex flex-col",children:m.map(t=>e.jsx(b,{title:"Title",subtitle:"Subtitle",kind:"snackbar",state:t},t))})};var o,n,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    title: "Gespeichert",
    state: "success",
    autoHideDurationMs: 3000
  },
  render: args => <SnackbarPlayground {...args} />
}`,...(i=(n=r.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var c,l,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="gap-lg flex flex-col">
      {NotificationStates.map(state => <Notification key={state} title="Title" subtitle="Subtitle" kind="snackbar" state={state} />)}
    </div>
}`,...(p=(l=a.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const C=["Playground","Overview"];export{a as Overview,r as Playground,C as __namedExportsOrder,P as default};
