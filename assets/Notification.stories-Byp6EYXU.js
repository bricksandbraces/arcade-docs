import{n as e}from"./chunk-jRWAZmH_.js";import{Gr as t,Kr as n,Na as r,No as i,qr as a,t as o,vo as s}from"./iframe-Bu5mwsKt.js";var c,l,u,d,f,p,m;e((()=>{o(),i(),c=s(),{action:l}=__STORYBOOK_MODULE_ACTIONS__,u={title:`Feedback & Status/Notification/Notification`,component:t,tags:[`autodocs`],argTypes:{kind:{control:{type:`select`},options:[...n]},state:{control:{type:`select`},options:[...a]}},parameters:{docs:{description:{component:`Inline banner communicating status or feedback within a page. Use for persistent messages tied to a view (unlike Toast, which is transient).`}}}},d={render:e=>(0,c.jsx)(t,{...e}),args:{title:`Title`,subtitle:`Subtitle`,timestamp:new Date().toISOString(),kind:`banner`,state:`info`,onClose:l(`onClose`)}},f={parameters:{controls:{disable:!0}},render:()=>(0,c.jsx)(t,{title:`Jonas Bergmann's qualification expired.`,subtitle:`Jonas's First Aid Course ran out on October 10. Renew it to keep them cleared for sessions.`,kind:`banner`,state:`error`,onClose:l(`onClose`),action:(0,c.jsx)(r,{kind:`ghost`,size:`small`,variant:`rounded`,label:`Check Qualifications`,onClick:l(`onAction`)}),className:`w-[720px]`})},p={parameters:{controls:{disable:!0}},render:()=>(0,c.jsxs)(`div`,{className:`gap-lg flex flex-row`,children:[(0,c.jsx)(`div`,{className:`gap-lg flex flex-col`,children:[`banner`].map(e=>a.map(n=>(0,c.jsx)(t,{title:`Title`,subtitle:`Subtitle`,kind:e,state:n,onClose:l(`onClose`),className:`w-[460px]`},`${e}-${n}`)))}),(0,c.jsx)(`div`,{className:`gap-lg flex flex-col`,children:[`inline`].map(e=>a.map(n=>(0,c.jsx)(t,{title:`Title`,kind:e,state:n},`${e}-${n}`)))})]})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <Notification {...args} />,
  args: {
    title: "Title",
    subtitle: "Subtitle",
    timestamp: new Date().toISOString(),
    kind: "banner",
    state: "info",
    onClose: action("onClose")
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Notification title="Jonas Bergmann's qualification expired." subtitle="Jonas's First Aid Course ran out on October 10. Renew it to keep them cleared for sessions." kind="banner" state="error" onClose={action("onClose")} action={<Button kind="ghost" size="small" variant="rounded" label="Check Qualifications" onClick={action("onAction")} />} className="w-[720px]" />
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m=[`Playground`,`BannerWithAction`,`Overview`]}))();export{f as BannerWithAction,p as Overview,d as Playground,m as __namedExportsOrder,u as default};