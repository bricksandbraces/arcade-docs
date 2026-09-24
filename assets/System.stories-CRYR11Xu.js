import{n as e}from"./chunk-jRWAZmH_.js";import{Bs as t,Fi as n,Li as r,Ts as i,i as a}from"./iframe-C4c9DSjq.js";import{n as o,t as s}from"./figmaDesign-CO6i5n9C.js";var c,l,u,d,f,p;e((()=>{a(),t(),o(),c=i(),{action:l}=__STORYBOOK_MODULE_ACTIONS__,u={title:`Feedback & Status/Notification/System`,component:n,tags:[`autodocs`],argTypes:{kind:{control:!1},state:{control:{type:`select`},options:[...r]}},parameters:{design:s(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=2149-2526`),docs:{description:{component:`System-level notification variant for global status updates (maintenance, outages). Use sparingly - reserved for messages from the product, not the page.`}}}},d={args:{kind:`system`,title:`Title`,subtitle:`Subtitle`,state:`info`,onClose:l(`onClose`)}},f={parameters:{controls:{disable:!0}},render:()=>(0,c.jsx)(`div`,{className:`gap-lg flex flex-col`,children:r.map(e=>(0,c.jsx)(n,{title:`Title`,subtitle:`Subtitle`,kind:`system`,state:e,onClose:l(`onClose`),className:`w-[460px]`},e))})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    kind: "system",
    title: "Title",
    subtitle: "Subtitle",
    state: "info",
    onClose: action("onClose")
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="gap-lg flex flex-col">
      {NotificationStates.map(state => <Notification key={state} title="Title" subtitle="Subtitle" kind="system" state={state} onClose={action("onClose")} className="w-[460px]" />)}
    </div>
}`,...f.parameters?.docs?.source}}},p=[`Playground`,`Overview`]}))();export{f as Overview,d as Playground,p as __namedExportsOrder,u as default};