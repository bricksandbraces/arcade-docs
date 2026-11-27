import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Ao as n,Bc as r,Zt as i,aa as a,co as o,t as s,tc as c,tl as l,vo as u}from"./iframe-bQfS6TRu.js";import{n as d,t as f}from"./figmaDesign-DLesXS3c.js";var p,m,h,g,_,v,y,b,x,S,C,w,T;e((()=>{s(),o(),p=t(l(),1),d(),m=r(),{action:h}=__STORYBOOK_MODULE_ACTIONS__,g={title:`Components/SubtleCard`,component:a,tags:[`autodocs`],parameters:{design:f(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=5802-42871`),layout:`padded`,docs:{description:{component:`A quiet container for one setting: title and description on a subtle background, an optional switch at the trailing edge, and content that unfolds beneath the header.`}}},argTypes:{title:{control:`text`},description:{control:`text`},toggleLabel:{control:`text`},selected:{control:`boolean`},disabled:{control:`boolean`}}},_={args:{title:`Title`,description:`Description`,toggleLabel:`Enable`,selected:!1,disabled:!1},render:e=>(0,m.jsx)(a,{...e,className:`max-w-[448px]`,onSelectedChange:e=>h(`onSelectedChange`)(e)})},v={render:()=>(0,m.jsx)(a,{title:`Title`,description:`Description`,className:`max-w-[448px]`})},y={render:()=>(0,m.jsx)(a,{title:`Title`,toggleLabel:`Enable`,defaultSelected:!0,className:`max-w-[448px]`})},b={render:()=>(0,m.jsx)(a,{title:`Title`,description:`Description`,toggleLabel:`Enable`,defaultSelected:!0,disabled:!0,className:`max-w-[448px]`})},x=3,S=({defaultEnabled:e=!1,defaultAliases:t=[``]})=>{let[r,o]=p.useState(e),[s,l]=p.useState(t);return(0,m.jsx)(a,{title:`Add URL alias`,description:`Add up to 3 aliases pointing to storm.orapulse.app. Contact support to change your main URL.`,toggleLabel:`Add URL alias`,selected:r,onSelectedChange:o,className:`max-w-[448px]`,children:r&&(0,m.jsxs)(`div`,{className:`gap-lg flex flex-col`,children:[s.map((e,t)=>(0,m.jsxs)(`div`,{className:`gap-sm flex items-center`,children:[(0,m.jsx)(i,{id:`alias-${t}`,label:`URL alias`,hideLabel:!0,hideNotificationContainer:!0,size:`large`,placeholder:`studio-fit-alias`,suffix:`orapulse.app`,value:e,onChange:e=>l(n=>n.map((n,r)=>r===t?e.target.value:n)),className:`flex-1`}),(0,m.jsx)(c,{kind:`ghost-danger`,size:`small`,IconLeft:u,"aria-label":`Remove alias`,onClick:()=>l(e=>e.filter((e,n)=>n!==t))})]},t)),s.length<x&&(0,m.jsx)(c,{kind:`tertiary`,size:`small`,label:`Add URL alias`,IconLeft:n,className:`self-start`,onClick:()=>l(e=>[...e,``])})]})})},C={parameters:{controls:{disable:!0}},render:()=>(0,m.jsx)(S,{})},w={parameters:{controls:{disable:!0}},render:()=>(0,m.jsx)(S,{defaultEnabled:!0,defaultAliases:[`storm-alias`,``]})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source},description:{story:`Setting with fields that appear once it is switched on, as in the URL settings of the Design Patterns.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <UrlAliasCard defaultEnabled defaultAliases={["storm-alias", ""]} />
}`,...w.parameters?.docs?.source},description:{story:`Switched on from the start: a focused first field keeps its full focus ring.`,...w.parameters?.docs?.description}}},T=[`Playground`,`WithoutToggle`,`WithoutDescription`,`Disabled`,`WithContent`,`WithContentSwitchedOn`]}))();export{b as Disabled,_ as Playground,C as WithContent,w as WithContentSwitchedOn,y as WithoutDescription,v as WithoutToggle,T as __namedExportsOrder,g as default};