import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Vc as n,Wi as r,nl as i,t as a}from"./iframe-aH2b30P3.js";import{n as o,t as s}from"./figmaDesign-D2IpkIki.js";var c,l,u,d,f,p;e((()=>{a(),c=t(i(),1),o(),l=n(),u={title:`Components/ConditionBuilder/Combinator`,component:r,tags:[`autodocs`],parameters:{design:s(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=6379-811`)},args:{disabled:!1}},d={render:e=>{let[t,n]=(0,c.useState)(`and`);return(0,l.jsx)(r,{...e,combinator:t,label:t,actionLabel:t===`and`?`Switch to or`:`Switch to and`,onClick:()=>n(t===`and`?`or`:`and`)})}},f={args:{combinator:`or`,label:`or`,actionLabel:`Switch to and`,disabled:!0}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [combinator, setCombinator] = useState<"and" | "or">("and");
    return <ConditionBuilderCombinator {...args} combinator={combinator} label={combinator} actionLabel={combinator === "and" ? "Switch to or" : "Switch to and"} onClick={() => setCombinator(combinator === "and" ? "or" : "and")} />;
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    combinator: "or",
    label: "or",
    actionLabel: "Switch to and",
    disabled: true
  }
}`,...f.parameters?.docs?.source}}},p=[`Playground`,`Disabled`]}))();export{f as Disabled,d as Playground,p as __namedExportsOrder,u as default};