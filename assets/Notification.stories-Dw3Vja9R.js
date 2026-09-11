import{n as e}from"./chunk-jRWAZmH_.js";import{Io as t,Za as n,Zo as r,ei as i,ni as a,t as o,ti as s}from"./iframe-lY1IRX6J.js";import{n as c,t as l}from"./figmaDesign-CO6i5n9C.js";var u,d,f,p,m,h,g;e((()=>{o(),r(),c(),u=t(),{action:d}=__STORYBOOK_MODULE_ACTIONS__,f={title:`Feedback & Status/Notification/Notification`,component:i,tags:[`autodocs`],argTypes:{kind:{control:{type:`select`},options:[...s]},state:{control:{type:`select`},options:[...a]}},parameters:{design:l(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=2149-2526`),docs:{description:{component:`Inline banner communicating status or feedback within a page. Use for persistent messages tied to a view (unlike Toast, which is transient).`}}}},p={render:e=>(0,u.jsx)(i,{...e}),args:{title:`Title`,subtitle:`Subtitle`,timestamp:new Date().toISOString(),kind:`banner`,state:`info`,onClose:d(`onClose`)}},m={parameters:{controls:{disable:!0}},render:()=>(0,u.jsx)(i,{title:`Jonas Bergmann's qualification expired.`,subtitle:`Jonas's First Aid Course ran out on October 10. Renew it to keep them cleared for sessions.`,kind:`banner`,state:`error`,onClose:d(`onClose`),action:(0,u.jsx)(n,{kind:`ghost`,size:`small`,variant:`rounded`,label:`Check Qualifications`,onClick:d(`onAction`)}),className:`w-[720px]`})},h={parameters:{controls:{disable:!0}},render:()=>(0,u.jsxs)(`div`,{className:`gap-lg flex flex-row`,children:[(0,u.jsx)(`div`,{className:`gap-lg flex flex-col`,children:[`banner`].map(e=>a.map(t=>(0,u.jsx)(i,{title:`Title`,subtitle:`Subtitle`,kind:e,state:t,onClose:d(`onClose`),className:`w-[460px]`},`${e}-${t}`)))}),(0,u.jsx)(`div`,{className:`gap-lg flex flex-col`,children:[`inline`].map(e=>a.map(t=>(0,u.jsx)(i,{title:`Title`,kind:e,state:t},`${e}-${t}`)))})]})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <Notification {...args} />,
  args: {
    title: "Title",
    subtitle: "Subtitle",
    timestamp: new Date().toISOString(),
    kind: "banner",
    state: "info",
    onClose: action("onClose")
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Notification title="Jonas Bergmann's qualification expired." subtitle="Jonas's First Aid Course ran out on October 10. Renew it to keep them cleared for sessions." kind="banner" state="error" onClose={action("onClose")} action={<Button kind="ghost" size="small" variant="rounded" label="Check Qualifications" onClick={action("onAction")} />} className="w-[720px]" />
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g=[`Playground`,`BannerWithAction`,`Overview`]}))();export{m as BannerWithAction,h as Overview,p as Playground,g as __namedExportsOrder,f as default};