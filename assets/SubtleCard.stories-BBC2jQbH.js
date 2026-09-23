import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Da as n,Gt as r,Po as i,Ps as a,i as o,la as s,xi as c,ya as l,ys as u}from"./iframe-B0pzHJei.js";import{n as d,t as f}from"./figmaDesign-CO6i5n9C.js";var p,m,h,g,_,v,y,b,x,S,C,w;e((()=>{o(),s(),p=t(a(),1),d(),m=u(),{action:h}=__STORYBOOK_MODULE_ACTIONS__,g={title:`Display & Data/Cards/SubtleCard`,component:c,tags:[`autodocs`],parameters:{design:f(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=5802-42871`),layout:`padded`,docs:{description:{component:`A quiet container for one setting: title and description on a subtle background, an optional switch at the trailing edge, and content that unfolds beneath the header.`}}},argTypes:{title:{control:`text`},description:{control:`text`},toggleLabel:{control:`text`},selected:{control:`boolean`},disabled:{control:`boolean`}}},_={args:{title:`Title`,description:`Description`,toggleLabel:`Enable`,selected:!1,disabled:!1},render:e=>(0,m.jsx)(c,{...e,className:`max-w-[448px]`,onSelectedChange:e=>h(`onSelectedChange`)(e)})},v={render:()=>(0,m.jsx)(c,{title:`Title`,description:`Description`,className:`max-w-[448px]`})},y={render:()=>(0,m.jsx)(c,{title:`Title`,toggleLabel:`Enable`,defaultSelected:!0,className:`max-w-[448px]`})},b={render:()=>(0,m.jsx)(c,{title:`Title`,description:`Description`,toggleLabel:`Enable`,defaultSelected:!0,disabled:!0,className:`max-w-[448px]`})},x=3,S=()=>{let[e,t]=p.useState(!1),[a,o]=p.useState([``]);return(0,m.jsx)(c,{title:`Add URL alias`,description:`Add up to 3 aliases pointing to storm.orapulse.app. Contact support to change your main URL.`,toggleLabel:`Add URL alias`,selected:e,onSelectedChange:t,className:`max-w-[448px]`,children:e&&(0,m.jsxs)(`div`,{className:`gap-lg flex flex-col`,children:[a.map((e,t)=>(0,m.jsxs)(`div`,{className:`gap-sm flex items-center`,children:[(0,m.jsx)(r,{id:`alias-${t}`,label:`URL alias`,hideLabel:!0,hideNotificationContainer:!0,size:`large`,placeholder:`studio-fit-alias`,suffix:`orapulse.app`,value:e,onChange:e=>o(n=>n.map((n,r)=>r===t?e.target.value:n)),className:`flex-1`}),(0,m.jsx)(i,{kind:`ghost-danger`,size:`small`,IconLeft:l,"aria-label":`Remove alias`,onClick:()=>o(e=>e.filter((e,n)=>n!==t))})]},t)),a.length<x&&(0,m.jsx)(i,{kind:`tertiary`,size:`small`,label:`Add URL alias`,IconLeft:n,className:`self-start`,onClick:()=>o(e=>[...e,``])})]})})},C={parameters:{controls:{disable:!0}},render:()=>(0,m.jsx)(S,{})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Title",
    description: "Description",
    toggleLabel: "Enable",
    selected: false,
    disabled: false
  },
  render: args => <SubtleCard {...args} className="max-w-[448px]" onSelectedChange={next => action("onSelectedChange")(next)} />
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <SubtleCard title="Title" description="Description" className="max-w-[448px]" />
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <SubtleCard title="Title" toggleLabel="Enable" defaultSelected className="max-w-[448px]" />
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <SubtleCard title="Title" description="Description" toggleLabel="Enable" defaultSelected disabled className="max-w-[448px]" />
}`,...b.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <UrlAliasCard />
}`,...C.parameters?.docs?.source},description:{story:`Setting with fields that appear once it is switched on, as in the URL settings of the Design Patterns.`,...C.parameters?.docs?.description}}},w=[`Playground`,`WithoutToggle`,`WithoutDescription`,`Disabled`,`WithContent`]}))();export{b as Disabled,_ as Playground,C as WithContent,y as WithoutDescription,v as WithoutToggle,w as __namedExportsOrder,g as default};