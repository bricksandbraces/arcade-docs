import{n as e}from"./chunk-jRWAZmH_.js";import{Jr as t,Yr as n,so as r,t as i}from"./iframe-CECP9sMu.js";var a,o,s,c,l;e((()=>{i(),a=r(),o={title:`Display & Data/Avatar/StateIndicator`,component:n,tags:[`autodocs`],parameters:{docs:{description:{component:`Small status dot overlaid on avatars or list items to signal presence or activity (Online, Busy, Pending, …). Use sparingly — one indicator per surface.`}}}},s={args:{state:`Online`},argTypes:{state:{description:`The state of the indicator`,control:{type:`select`},options:[`Online`,`Offline`,`Busy`,`Pending`,`Notification`],defaultValue:`Online`}}},c={parameters:{controls:{disable:!0}},render:()=>(0,a.jsx)(`div`,{className:`gap-xlg flex flex-row`,children:t.map(e=>(0,a.jsx)(n,{state:e},e))})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="gap-xlg flex flex-row">
      {State.map(state => <StateIndicator key={state} state={state} />)}
    </div>
}`,...c.parameters?.docs?.source}}},l=[`Playground`,`Overview`]}))();export{c as Overview,s as Playground,l as __namedExportsOrder,o as default};