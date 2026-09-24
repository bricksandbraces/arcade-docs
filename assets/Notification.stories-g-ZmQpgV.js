import{n as e}from"./chunk-jRWAZmH_.js";import{Ai as t,Fo as n,Fs as r,Mi as i,bs as a,i as o,ji as s,pi as c}from"./iframe-BSbbu91K.js";import{n as l,t as u}from"./figmaDesign-CO6i5n9C.js";var d,f,p,m,h,g,_,v;e((()=>{o(),r(),l(),d=a(),{action:f}=__STORYBOOK_MODULE_ACTIONS__,p={title:`Feedback & Status/Notification/Notification`,component:t,tags:[`autodocs`],argTypes:{kind:{control:{type:`select`},options:[...s]},state:{control:{type:`select`},options:[...i]}},parameters:{design:u(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=2149-2526`),docs:{description:{component:`Inline banner communicating status or feedback within a page. Use for persistent messages tied to a view (unlike Toast, which is transient).`}}}},m={render:e=>(0,d.jsx)(t,{...e}),args:{title:`Title`,subtitle:`Subtitle`,timestamp:new Date().toISOString(),kind:`banner`,state:`info`,onClose:f(`onClose`)}},h={parameters:{controls:{disable:!0}},render:()=>(0,d.jsx)(t,{title:`Jonas Bergmann's qualification expired.`,subtitle:`Jonas's First Aid Course ran out on October 10. Renew it to keep them cleared for sessions.`,kind:`banner`,state:`error`,onClose:f(`onClose`),action:(0,d.jsx)(n,{kind:`ghost`,size:`small`,variant:`rounded`,label:`Check Qualifications`,onClick:f(`onAction`)}),className:`w-[720px]`})},g={parameters:{controls:{disable:!0}},render:()=>(0,d.jsx)(t,{title:`Looking to change main URL?`,kind:`banner`,state:`info`,titleAction:(0,d.jsx)(c,{inline:!0,size:`md`,label:`Contact support`,href:`#`,onClick:f(`onTitleAction`)}),className:`w-[720px]`})},_={parameters:{controls:{disable:!0}},render:()=>(0,d.jsxs)(`div`,{className:`gap-lg flex flex-row`,children:[(0,d.jsx)(`div`,{className:`gap-lg flex flex-col`,children:[`banner`].map(e=>i.map(n=>(0,d.jsx)(t,{title:`Title`,subtitle:`Subtitle`,kind:e,state:n,onClose:f(`onClose`),className:`w-[460px]`},`${e}-${n}`)))}),(0,d.jsx)(`div`,{className:`gap-lg flex flex-col`,children:[`inline`].map(e=>i.map(n=>(0,d.jsx)(t,{title:`Title`,kind:e,state:n},`${e}-${n}`)))})]})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <Notification {...args} />,
  args: {
    title: "Title",
    subtitle: "Subtitle",
    timestamp: new Date().toISOString(),
    kind: "banner",
    state: "info",
    onClose: action("onClose")
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Notification title="Jonas Bergmann's qualification expired." subtitle="Jonas's First Aid Course ran out on October 10. Renew it to keep them cleared for sessions." kind="banner" state="error" onClose={action("onClose")} action={<Button kind="ghost" size="small" variant="rounded" label="Check Qualifications" onClick={action("onAction")} />} className="w-[720px]" />
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Notification title="Looking to change main URL?" kind="banner" state="info" titleAction={<Link inline size="md" label="Contact support" href="#" onClick={action("onTitleAction")} />} className="w-[720px]" />
}`,...g.parameters?.docs?.source},description:{story:`A one-line banner whose action is a link right behind the sentence, as in the URL settings of the Design Patterns.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v=[`Playground`,`BannerWithAction`,`BannerWithTitleAction`,`Overview`]}))();export{h as BannerWithAction,g as BannerWithTitleAction,_ as Overview,m as Playground,v as __namedExportsOrder,p as default};