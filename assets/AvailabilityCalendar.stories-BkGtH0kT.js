import{n as e}from"./chunk-jRWAZmH_.js";import{an as t,t as n,yo as r}from"./iframe-BXRL_JkN.js";var i,a,o,s,c,l,u,d;e((()=>{n(),i=r(),a={title:`Display & Data/AvailabilityCalendar`,component:t,tags:[`autodocs`],parameters:{docs:{description:{component:`Read-only month view that colors every day by availability. Built for scheduling surfaces like the employee availability tab, with an optional action button in the header.`}}}},o=(e,t,n,r,i)=>{let a={};for(let o=n;o<=r;o++)a[`${e}-${`${t}`.padStart(2,`0`)}-${`${o}`.padStart(2,`0`)}`]=i;return a},s={...o(2024,1,5,7,`partly`),...o(2024,1,12,14,`partly`),...o(2024,1,19,21,`unavailable`),...o(2024,1,26,28,`unavailable`)},c={args:{defaultMonth:new Date(2024,0,1),today:new Date(2024,0,10),dayStates:s,actionLabel:`Add absence`},render:e=>(0,i.jsx)(`div`,{style:{width:688},children:(0,i.jsx)(t,{...e})})},l={args:{defaultMonth:new Date(2024,0,1),today:new Date(2024,0,10),dayStates:s},render:e=>(0,i.jsx)(`div`,{style:{width:688},children:(0,i.jsx)(t,{...e})})},u={args:{defaultMonth:new Date(2024,0,1),today:new Date(2024,0,10),actionLabel:`Add absence`},render:e=>(0,i.jsx)(`div`,{style:{width:688},children:(0,i.jsx)(t,{...e})})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    defaultMonth: new Date(2024, 0, 1),
    today: new Date(2024, 0, 10),
    dayStates: exampleDayStates,
    actionLabel: "Add absence"
  },
  render: args => <div style={{
    width: 688
  }}>
      <AvailabilityCalendar {...args} />
    </div>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    defaultMonth: new Date(2024, 0, 1),
    today: new Date(2024, 0, 10),
    dayStates: exampleDayStates
  },
  render: args => <div style={{
    width: 688
  }}>
      <AvailabilityCalendar {...args} />
    </div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    defaultMonth: new Date(2024, 0, 1),
    today: new Date(2024, 0, 10),
    actionLabel: "Add absence"
  },
  render: args => <div style={{
    width: 688
  }}>
      <AvailabilityCalendar {...args} />
    </div>
}`,...u.parameters?.docs?.source}}},d=[`Playground`,`WithoutAction`,`FullyAvailable`]}))();export{u as FullyAvailable,c as Playground,l as WithoutAction,d as __namedExportsOrder,a as default};