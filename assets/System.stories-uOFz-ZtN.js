import{n as e}from"./chunk-jRWAZmH_.js";import{Nr as t,eo as n,ho as r,jr as i,t as a}from"./iframe-DdNEwH1W.js";var o,s,c,l,u,d;e((()=>{a(),r(),o=n(),{action:s}=__STORYBOOK_MODULE_ACTIONS__,c={title:`Feedback & Status/Notification/System`,component:i,tags:[`autodocs`],argTypes:{kind:{control:!1},state:{control:{type:`select`},options:[...t]}},parameters:{docs:{description:{component:`System-level notification variant for global status updates (maintenance, outages). Use sparingly — reserved for messages from the product, not the page.`}}}},l={args:{kind:`system`,title:`Title`,subtitle:`Subtitle`,state:`info`,onClose:s(`onClose`)}},u={parameters:{controls:{disable:!0}},render:()=>(0,o.jsx)(`div`,{className:`gap-lg flex flex-col`,children:t.map(e=>(0,o.jsx)(i,{title:`Title`,subtitle:`Subtitle`,kind:`system`,state:e,onClose:s(`onClose`),className:`w-[460px]`},e))})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    kind: "system",
    title: "Title",
    subtitle: "Subtitle",
    state: "info",
    onClose: action("onClose")
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="gap-lg flex flex-col">
      {NotificationStates.map(state => <Notification key={state} title="Title" subtitle="Subtitle" kind="system" state={state} onClose={action("onClose")} className="w-[460px]" />)}
    </div>
}`,...u.parameters?.docs?.source}}},d=[`Playground`,`Overview`]}))();export{u as Overview,l as Playground,d as __namedExportsOrder,c as default};