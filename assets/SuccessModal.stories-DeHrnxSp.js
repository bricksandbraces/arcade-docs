import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Eo as n,Va as r,Vo as i,nn as a,t as o}from"./iframe-Cy6jdjZ5.js";var s,c,l,u,d,f,p,m,h;e((()=>{o(),s=t(i(),1),c=n(),{action:l}=__STORYBOOK_MODULE_ACTIONS__,u={title:`Overlays & Menus/SuccessModal`,component:a,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:`The outcome dialog of a flow that just succeeded: icon, centred copy and stacked full-width actions, celebrated with a single confetti burst that falls out and does not repeat.`}}},argTypes:{confetti:{control:`boolean`}}},d=e=>{let[t,n]=(0,s.useState)(!1);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{label:`Finish the flow`,onClick:()=>n(!0)}),(0,c.jsx)(a,{...e,open:t,onClose:()=>n(!1),primaryButton:{...e.primaryButton,onClick:()=>{l(`primary`)(),n(!1)}},secondaryButton:e.secondaryButton&&{...e.secondaryButton,onClick:()=>{l(`secondary`)(),n(!1)}}})]})},f={args:{title:`Nice, that's done.`,description:`Everything's set up. Add your team and your first location to kick things off.`,primaryButton:{label:`See your dashboard`,onClick:()=>void 0},secondaryButton:{label:`Add your first location`,onClick:()=>void 0},confetti:!0},render:e=>(0,c.jsx)(d,{...e})},p={args:{title:`Payment received`,description:`Your plan is active from today.`,primaryButton:{label:`Continue`,onClick:()=>void 0},confetti:!0},render:e=>(0,c.jsx)(d,{...e})},m={args:{...f.args,confetti:!1},render:e=>(0,c.jsx)(d,{...e})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Nice, that's done.",
    description: "Everything's set up. Add your team and your first location to kick things off.",
    primaryButton: {
      label: "See your dashboard",
      onClick: () => undefined
    },
    secondaryButton: {
      label: "Add your first location",
      onClick: () => undefined
    },
    confetti: true
  },
  render: args => <Demo {...args} />
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Payment received",
    description: "Your plan is active from today.",
    primaryButton: {
      label: "Continue",
      onClick: () => undefined
    },
    confetti: true
  },
  render: args => <Demo {...args} />
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    ...Playground.args,
    confetti: false
  },
  render: args => <Demo {...args} />
}`,...m.parameters?.docs?.source}}},h=[`Playground`,`PrimaryOnly`,`WithoutConfetti`]}))();export{f as Playground,p as PrimaryOnly,m as WithoutConfetti,h as __namedExportsOrder,u as default};