import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Bo as n,Ui as r,Vc as i,lo as a,ls as o,nl as s,t as c,zo as l}from"./iframe-aH2b30P3.js";import{n as u,t as d}from"./figmaDesign-D2IpkIki.js";var f,p,m,h,g,_;e((()=>{c(),a(),f=t(s(),1),u(),p=i(),m={title:`Components/ConditionBuilder/Operator`,component:r,tags:[`autodocs`],parameters:{design:d(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=6385-1967`)},args:{label:`Operator`,options:[{value:`over`,label:`is over`,icon:n},{value:`under`,label:`is under`,icon:l},{value:`equals`,label:`equals`,icon:o}],value:`over`,disabled:!1}},h={render:e=>{let[t,n]=(0,f.useState)(e.value);return(0,p.jsx)(r,{...e,value:t,onChange:n})}},g={args:{disabled:!0,onChange:()=>{}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value);
    return <ConditionBuilderOperator {...args} value={value} onChange={setValue} />;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    onChange: () => {}
  }
}`,...g.parameters?.docs?.source}}},_=[`Playground`,`Disabled`]}))();export{g as Disabled,h as Playground,_ as __namedExportsOrder,m as default};