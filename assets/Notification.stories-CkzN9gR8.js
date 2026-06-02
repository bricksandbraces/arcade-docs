import{n as e}from"./chunk-jRWAZmH_.js";import{Fr as t,Nr as n,Pr as r,ro as i,t as a,vo as o}from"./iframe-C1Q2u2SU.js";var s,c,l,u,d,f;e((()=>{a(),o(),s=i(),{action:c}=__STORYBOOK_MODULE_ACTIONS__,l={title:`Feedback & Status/Notification/Notification`,component:n,tags:[`autodocs`],argTypes:{kind:{control:{type:`select`},options:[...r]},state:{control:{type:`select`},options:[...t]}},parameters:{docs:{description:{component:`Inline banner communicating status or feedback within a page. Use for persistent messages tied to a view (unlike Toast, which is transient).`}}}},u={render:e=>(0,s.jsx)(n,{...e}),args:{title:`Title`,subtitle:`Subtitle`,timestamp:new Date().toISOString(),kind:`banner`,state:`info`,onClose:c(`onClose`)}},d={parameters:{controls:{disable:!0}},render:()=>(0,s.jsxs)(`div`,{className:`gap-lg flex flex-row`,children:[(0,s.jsx)(`div`,{className:`gap-lg flex flex-col`,children:[`banner`].map(e=>t.map(t=>(0,s.jsx)(n,{title:`Title`,subtitle:`Subtitle`,kind:e,state:t,onClose:c(`onClose`),className:`w-[460px]`},`${e}-${t}`)))}),(0,s.jsx)(`div`,{className:`gap-lg flex flex-col`,children:[`inline`].map(e=>t.map(t=>(0,s.jsx)(n,{title:`Title`,kind:e,state:t},`${e}-${t}`)))})]})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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