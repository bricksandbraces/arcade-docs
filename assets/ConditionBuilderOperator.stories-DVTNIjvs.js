import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Bc as n,Ro as r,Ui as i,co as a,cs as o,t as s,tl as c,zo as l}from"./iframe-bQfS6TRu.js";import{n as u,t as d}from"./figmaDesign-DLesXS3c.js";var f,p,m,h,g,_;e((()=>{s(),a(),f=t(c(),1),u(),p=n(),m={title:`Components/ConditionBuilder/Operator`,component:i,tags:[`autodocs`],parameters:{design:d(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=6385-1967`)},args:{label:`Operator`,options:[{value:`over`,label:`is over`,icon:l},{value:`under`,label:`is under`,icon:r},{value:`equals`,label:`equals`,icon:o}],value:`over`,disabled:!1}},h={render:e=>{let[t,n]=(0,f.useState)(e.value);return(0,p.jsx)(i,{...e,value:t,onChange:n})}},g={args:{disabled:!0,onChange:()=>{}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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