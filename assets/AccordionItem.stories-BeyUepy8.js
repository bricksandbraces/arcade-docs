import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{$o as n,J as r,Y as i,ms as a,ri as o,t as s}from"./iframe-BHshPtOU.js";import{n as c,t as l}from"./figmaDesign-CO6i5n9C.js";var u,d,f,p,m,h,g,_,v,y;e((()=>{s(),c(),u=n(),d=t(a(),1),f={title:`Layout & Structure/Accordion/AccordionItem`,component:r,tags:[`autodocs`],parameters:{design:l(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=2221-368`),layout:`padded`},argTypes:{size:{control:`inline-radio`,options:i},disabled:{control:`boolean`},defaultOpen:{control:`boolean`},title:{control:`text`}},args:{title:`Accordion title`,size:`medium`,defaultOpen:!1,disabled:!1,children:`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.`},render:e=>(0,u.jsx)(`div`,{className:`w-[512px] max-w-full`,children:(0,u.jsx)(r,{...e})})},p={},m={args:{defaultOpen:!0}},h={args:{disabled:!0}},g={args:{disabled:!0,defaultOpen:!0}},_={render:e=>(0,u.jsx)(`div`,{className:`gap-md flex w-[512px] max-w-full flex-col`,children:i.map(t=>(0,d.createElement)(r,{...e,key:t,size:t,title:`${e.title} (${t})`}))})},v={render:()=>(0,u.jsx)(o,{})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    defaultOpen: true
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultOpen: true
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => <div className="gap-md flex w-[512px] max-w-full flex-col">
      {AccordionItemSizes.map(size => <AccordionItem {...args} key={size} size={size} title={\`\${args.title} (\${size})\`} />)}
    </div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <AccordionItemSkeleton />
}`,...v.parameters?.docs?.source}}},y=[`Playground`,`Open`,`Disabled`,`DisabledOpen`,`AllSizes`,`Skeleton`]}))();export{_ as AllSizes,h as Disabled,g as DisabledOpen,m as Open,p as Playground,v as Skeleton,y as __namedExportsOrder,f as default};