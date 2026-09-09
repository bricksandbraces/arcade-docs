import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Di as n,Oa as r,Oo as i,Ua as a,Uo as o,nn as s,rn as c,t as l}from"./iframe-CWtmor6b.js";var u,d,f,p,m,h,g,_,v,y,b;e((()=>{l(),n(),u=t(o(),1),d=i(),{action:f}=__STORYBOOK_MODULE_ACTIONS__,p={title:`Overlays & Menus/SuccessModal`,component:s,tags:[`autodocs`],parameters:{layout:`centered`,design:[{name:`Open in Figma`,type:`link`,url:`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=5262-6428`},{name:`Embedded preview`,type:`figma`,url:`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=5262-6428`}],docs:{description:{component:`The outcome dialog of a flow that just succeeded: icon, centred copy and stacked full-width actions, celebrated with a single confetti burst that falls out and does not repeat. The close control is opt-in, and the slot between copy and actions takes whatever the outcome needs to show.`}}},argTypes:{confetti:{control:`boolean`},closeButton:{control:`boolean`}}},m=e=>{let[t,n]=(0,u.useState)(!1);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a,{label:`Finish the flow`,onClick:()=>n(!0)}),(0,d.jsx)(s,{...e,open:t,onClose:()=>n(!1),primaryButton:{...e.primaryButton,onClick:()=>{f(`primary`)(),n(!1)}},secondaryButton:e.secondaryButton&&{...e.secondaryButton,onClick:()=>{f(`secondary`)(),n(!1)}}})]})},h={args:{title:`Nice, that's done.`,description:`Everything's set up. Add your team and your first location to kick things off.`,primaryButton:{label:`See your dashboard`,onClick:()=>void 0},secondaryButton:{label:`Add your first location`,onClick:()=>void 0},confetti:!0},render:e=>(0,d.jsx)(m,{...e})},g={args:{title:`Payment received`,description:`Your plan is active from today.`,primaryButton:{label:`Continue`,onClick:()=>void 0},confetti:!0},render:e=>(0,d.jsx)(m,{...e})},_={args:{...h.args,confetti:!1},render:e=>(0,d.jsx)(m,{...e})},v={args:{...h.args,closeButton:!0},render:e=>(0,d.jsx)(m,{...e})},y={args:{...h.args,closeButton:!0,children:(0,d.jsx)(c,{icon:(0,d.jsx)(r,{}),title:`Monthly`,subtitle:`€72.98 per studio / month`,lines:[{label:`Orapulse`,value:`€ 39.99`},{label:`Orapulse Floor`,value:`€ 32.99`}],total:{label:`Total`,value:`per studio / month € 72.98`}})},render:e=>(0,d.jsx)(m,{...e})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    ...Playground.args,
    confetti: false
  },
  render: args => <Demo {...args} />
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    ...Playground.args,
    closeButton: true
  },
  render: args => <Demo {...args} />
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b=[`Playground`,`PrimaryOnly`,`WithoutConfetti`,`WithCloseButton`,`WithContent`]}))();export{h as Playground,g as PrimaryOnly,v as WithCloseButton,y as WithContent,_ as WithoutConfetti,b as __namedExportsOrder,p as default};