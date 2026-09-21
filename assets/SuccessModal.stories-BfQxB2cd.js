import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{$t as n,Do as r,Ds as i,do as a,en as o,fs as s,ia as c,t as l}from"./iframe-RYiXY6gz.js";import{n as u,t as d}from"./figmaDesign-CO6i5n9C.js";var f,p,m,h,g,_,v,y,b,x,S;e((()=>{l(),c(),f=t(i(),1),u(),p=s(),{action:m}=__STORYBOOK_MODULE_ACTIONS__,h={title:`Overlays & Menus/SuccessModal`,component:n,tags:[`autodocs`],parameters:{layout:`centered`,design:d(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=5262-6428`),docs:{description:{component:`The outcome dialog of a flow that just succeeded: icon, centred copy and stacked full-width actions, celebrated with a single confetti burst that falls out and does not repeat. The close control is opt-in, and the slot between copy and actions takes whatever the outcome needs to show.`}}},argTypes:{confetti:{control:`boolean`},closeButton:{control:`boolean`}}},g=e=>{let[t,i]=(0,f.useState)(!1);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(r,{label:`Finish the flow`,onClick:()=>i(!0)}),(0,p.jsx)(n,{...e,open:t,onClose:()=>i(!1),primaryButton:{...e.primaryButton,onClick:()=>{m(`primary`)(),i(!1)}},secondaryButton:e.secondaryButton&&{...e.secondaryButton,onClick:()=>{m(`secondary`)(),i(!1)}}})]})},_={args:{title:`Nice, that's done.`,description:`Everything's set up. Add your team and your first location to kick things off.`,primaryButton:{label:`See your dashboard`,onClick:()=>void 0},secondaryButton:{label:`Add your first location`,onClick:()=>void 0},confetti:!0},render:e=>(0,p.jsx)(g,{...e})},v={args:{title:`Payment received`,description:`Your plan is active from today.`,primaryButton:{label:`Continue`,onClick:()=>void 0},confetti:!0},render:e=>(0,p.jsx)(g,{...e})},y={args:{..._.args,confetti:!1},render:e=>(0,p.jsx)(g,{...e})},b={args:{..._.args,closeButton:!0},render:e=>(0,p.jsx)(g,{...e})},x={args:{..._.args,closeButton:!0,children:(0,p.jsx)(o,{icon:(0,p.jsx)(a,{}),title:`Monthly`,subtitle:`€72.98 per studio / month`,lines:[{label:`Orapulse`,value:`€ 39.99`},{label:`Orapulse Floor`,value:`€ 32.99`}],total:{label:`Total`,value:`per studio / month € 72.98`}})},render:e=>(0,p.jsx)(g,{...e})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    ...Playground.args,
    confetti: false
  },
  render: args => <Demo {...args} />
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    ...Playground.args,
    closeButton: true
  },
  render: args => <Demo {...args} />
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    ...Playground.args,
    closeButton: true,
    children: <OrderCard icon={<IconBuildingStore />} title="Monthly" subtitle="€72.98 per studio / month" lines={[{
      label: "Orapulse",
      value: "€ 39.99"
    }, {
      label: "Orapulse Floor",
      value: "€ 32.99"
    }]} total={{
      label: "Total",
      value: "per studio / month € 72.98"
    }} />
  },
  render: args => <Demo {...args} />
}`,...x.parameters?.docs?.source}}},S=[`Playground`,`PrimaryOnly`,`WithoutConfetti`,`WithCloseButton`,`WithContent`]}))();export{_ as Playground,v as PrimaryOnly,b as WithCloseButton,x as WithContent,y as WithoutConfetti,S as __namedExportsOrder,h as default};