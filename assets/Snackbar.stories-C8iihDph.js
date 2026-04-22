import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{b1 as u,b4 as d,b3 as b,h as f}from"./ContextMenu-ByChsCan.js";import{r as x}from"./index-CY-HDqYb.js";import"./index-A6zbrgSY.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";const N={title:"Components/Notification/Snackbar",component:d,argTypes:{open:{control:!1},state:{control:{type:"select"},options:[...u]},subtitle:{control:"text"},autoHideDurationMs:{control:{type:"number"}}}};function g(t){const[m,s]=x.useState(!1);return e.jsxs("div",{className:"relative min-h-[480px] w-full",children:[e.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:e.jsx(f,{kind:"primary",label:"Show Snackbar",onClick:()=>s(!0)})}),e.jsx(d,{...t,open:m,onOpenChange:s})]})}const a={args:{title:"Gespeichert",state:"success",autoHideDurationMs:3e3},render:t=>e.jsx(g,{...t})},r={parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{className:"gap-lg flex flex-col",children:u.map(t=>e.jsx(b,{title:"Title",subtitle:"Subtitle",kind:"snackbar",state:t},t))})};var n,o,i;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    title: "Gespeichert",
    state: "success",
    autoHideDurationMs: 3000
  },
  render: args => <SnackbarPlayground {...args} />
}`,...(i=(o=a.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var c,l,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="gap-lg flex flex-col">
      {NotificationStates.map(state => <Notification key={state} title="Title" subtitle="Subtitle" kind="snackbar" state={state} />)}
    </div>
}`,...(p=(l=r.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const O=["Playground","Overview"];export{r as Overview,a as Playground,O as __namedExportsOrder,N as default};
