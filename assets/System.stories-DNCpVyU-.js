import{n as e}from"./chunk-jRWAZmH_.js";import{Si as t,is as n,t as r,wi as i,ys as a}from"./iframe-D-W_c7x8.js";import{n as o,t as s}from"./figmaDesign-CO6i5n9C.js";var c,l,u,d,f,p;e((()=>{r(),a(),o(),c=n(),{action:l}=__STORYBOOK_MODULE_ACTIONS__,u={title:`Feedback & Status/Notification/System`,component:t,tags:[`autodocs`],argTypes:{kind:{control:!1},state:{control:{type:`select`},options:[...i]}},parameters:{design:s(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=2149-2526`),docs:{description:{component:`System-level notification variant for global status updates (maintenance, outages). Use sparingly - reserved for messages from the product, not the page.`}}}},d={args:{kind:`system`,title:`Title`,subtitle:`Subtitle`,state:`info`,onClose:l(`onClose`)}},f={parameters:{controls:{disable:!0}},render:()=>(0,c.jsx)(`div`,{className:`gap-lg flex flex-col`,children:i.map(e=>(0,c.jsx)(t,{title:`Title`,subtitle:`Subtitle`,kind:`system`,state:e,onClose:l(`onClose`),className:`w-[460px]`},e))})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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