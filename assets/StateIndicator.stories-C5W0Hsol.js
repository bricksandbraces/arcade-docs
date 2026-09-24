import{n as e}from"./chunk-jRWAZmH_.js";import{Ui as t,Wi as n,bs as r,i}from"./iframe-BSbbu91K.js";import{n as a,t as o}from"./figmaDesign-CO6i5n9C.js";var s,c,l,u,d;e((()=>{i(),a(),s=r(),c={title:`Display & Data/Avatar/StateIndicator`,component:n,tags:[`autodocs`],parameters:{design:o(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=2127-26200`),docs:{description:{component:`Small status dot overlaid on avatars or list items to signal presence or activity (Online, Busy, Pending, ...). Use sparingly - one indicator per surface.`}}}},l={args:{state:`Online`},argTypes:{state:{description:`The state of the indicator`,control:{type:`select`},options:[`Online`,`Offline`,`Busy`,`Pending`,`Notification`],defaultValue:`Online`}}},u={parameters:{controls:{disable:!0}},render:()=>(0,s.jsx)(`div`,{className:`gap-xlg flex flex-row`,children:t.map(e=>(0,s.jsx)(n,{state:e},e))})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    state: "Online"
  },
  argTypes: {
    state: {
      description: "The state of the indicator",
      control: {
        type: "select"
      },
      options: ["Online", "Offline", "Busy", "Pending", "Notification"],
      defaultValue: "Online"
    }
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="gap-xlg flex flex-row">
      {State.map(state => <StateIndicator key={state} state={state} />)}
    </div>
}`,...u.parameters?.docs?.source}}},d=[`Playground`,`Overview`]}))();export{u as Overview,l as Playground,d as __namedExportsOrder,c as default};