import{n as e}from"./chunk-jRWAZmH_.js";import{Mo as t,dn as n,t as r}from"./iframe-ZaKetqne.js";import{n as i,t as a}from"./figmaDesign-CO6i5n9C.js";var o,s,c,l,u,d,f,p;e((()=>{r(),i(),o=t(),s={title:`Display & Data/AvailabilityCalendar`,component:n,tags:[`autodocs`],parameters:{design:a(`https://www.figma.com/design/GPsOC3XQdyxUOZxb7qNgJu/Studio---Orapulse?node-id=2947-112980&m=dev`),docs:{description:{component:`Read-only month view that colors every day by availability. Built for scheduling surfaces like the employee availability tab, with an optional action button in the header.`}}}},c=(e,t,n,r,i)=>{let a={};for(let o=n;o<=r;o++)a[`${e}-${`${t}`.padStart(2,`0`)}-${`${o}`.padStart(2,`0`)}`]=i;return a},l={...c(2024,1,5,7,`partly`),...c(2024,1,12,14,`partly`),...c(2024,1,19,21,`unavailable`),...c(2024,1,26,28,`unavailable`)},u={args:{defaultMonth:new Date(2024,0,1),today:new Date(2024,0,10),dayStates:l,actionLabel:`Add absence`},render:e=>(0,o.jsx)(`div`,{style:{width:688},children:(0,o.jsx)(n,{...e})})},d={args:{defaultMonth:new Date(2024,0,1),today:new Date(2024,0,10),dayStates:l},render:e=>(0,o.jsx)(`div`,{style:{width:688},children:(0,o.jsx)(n,{...e})})},f={args:{defaultMonth:new Date(2024,0,1),today:new Date(2024,0,10),actionLabel:`Add absence`},render:e=>(0,o.jsx)(`div`,{style:{width:688},children:(0,o.jsx)(n,{...e})})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p=[`Playground`,`WithoutAction`,`FullyAvailable`]}))();export{f as FullyAvailable,u as Playground,d as WithoutAction,p as __namedExportsOrder,s as default};