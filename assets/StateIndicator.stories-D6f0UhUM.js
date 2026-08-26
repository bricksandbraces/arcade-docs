import{n as e}from"./chunk-jRWAZmH_.js";import{go as t,ni as n,ri as r,t as i}from"./iframe-BYr0l-kY.js";var a,o,s,c,l;e((()=>{i(),a=t(),o={title:`Display & Data/Avatar/StateIndicator`,component:r,tags:[`autodocs`],parameters:{docs:{description:{component:`Small status dot overlaid on avatars or list items to signal presence or activity (Online, Busy, Pending, …). Use sparingly — one indicator per surface.`}}}},s={args:{state:`Online`},argTypes:{state:{description:`The state of the indicator`,control:{type:`select`},options:[`Online`,`Offline`,`Busy`,`Pending`,`Notification`],defaultValue:`Online`}}},c={parameters:{controls:{disable:!0}},render:()=>(0,a.jsx)(`div`,{className:`gap-xlg flex flex-row`,children:n.map(e=>(0,a.jsx)(r,{state:e},e))})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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