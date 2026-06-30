import{n as e}from"./chunk-jRWAZmH_.js";import{Ir as t,Lr as n,Rr as r,So as i,so as a,t as o}from"./iframe-DcYUiA4y.js";var s,c,l,u,d,f;e((()=>{o(),i(),s=a(),{action:c}=__STORYBOOK_MODULE_ACTIONS__,l={title:`Feedback & Status/Notification/Notification`,component:t,tags:[`autodocs`],argTypes:{kind:{control:{type:`select`},options:[...n]},state:{control:{type:`select`},options:[...r]}},parameters:{docs:{description:{component:`Inline banner communicating status or feedback within a page. Use for persistent messages tied to a view (unlike Toast, which is transient).`}}}},u={render:e=>(0,s.jsx)(t,{...e}),args:{title:`Title`,subtitle:`Subtitle`,timestamp:new Date().toISOString(),kind:`banner`,state:`info`,onClose:c(`onClose`)}},d={parameters:{controls:{disable:!0}},render:()=>(0,s.jsxs)(`div`,{className:`gap-lg flex flex-row`,children:[(0,s.jsx)(`div`,{className:`gap-lg flex flex-col`,children:[`banner`].map(e=>r.map(n=>(0,s.jsx)(t,{title:`Title`,subtitle:`Subtitle`,kind:e,state:n,onClose:c(`onClose`),className:`w-[460px]`},`${e}-${n}`)))}),(0,s.jsx)(`div`,{className:`gap-lg flex flex-col`,children:[`inline`].map(e=>r.map(n=>(0,s.jsx)(t,{title:`Title`,kind:e,state:n},`${e}-${n}`)))})]})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <Notification {...args} />,
  args: {
    title: "Title",
    subtitle: "Subtitle",
    timestamp: new Date().toISOString(),
    kind: "banner",
    state: "info",
    onClose: action("onClose")
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="gap-lg flex flex-row">
      <div className="gap-lg flex flex-col">
        {(["banner"] as const).map(kind => {
        return NotificationStates.map(state => {
          return <Notification key={\`\${kind}-\${state}\`} title={"Title"} subtitle="Subtitle" kind={kind} state={state} onClose={action("onClose")} className="w-[460px]" />;
        });
      })}
      </div>
      <div className="gap-lg flex flex-col">
        {(["inline"] as const).map(kind => {
        return NotificationStates.map(state => {
          return <Notification key={\`\${kind}-\${state}\`} title={"Title"} kind={kind} state={state} />;
        });
      })}
      </div>
    </div>
}`,...d.parameters?.docs?.source}}},f=[`Playground`,`Overview`]}))();export{d as Overview,u as Playground,f as __namedExportsOrder,l as default};