import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Co as n,G as r,Tr as i,W as a,co as o,t as s}from"./iframe-YNLnN9QT.js";var c,l,u,d,f,p,m,h,g,_;e((()=>{s(),c=o(),l=t(n(),1),u={title:`Layout & Structure/Accordion/AccordionItem`,component:a,tags:[`autodocs`],parameters:{layout:`padded`},argTypes:{size:{control:`inline-radio`,options:r},disabled:{control:`boolean`},defaultOpen:{control:`boolean`},title:{control:`text`}},args:{title:`Accordion title`,size:`medium`,defaultOpen:!1,disabled:!1,children:`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.`},render:e=>(0,c.jsx)(`div`,{className:`w-[512px] max-w-full`,children:(0,c.jsx)(a,{...e})})},d={},f={args:{defaultOpen:!0}},p={args:{disabled:!0}},m={args:{disabled:!0,defaultOpen:!0}},h={render:e=>(0,c.jsx)(`div`,{className:`gap-md flex w-[512px] max-w-full flex-col`,children:r.map(t=>(0,l.createElement)(a,{...e,key:t,size:t,title:`${e.title} (${t})`}))})},g={render:()=>(0,c.jsx)(i,{})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    defaultOpen: true
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultOpen: true
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <div className="gap-md flex w-[512px] max-w-full flex-col">
      {AccordionItemSizes.map(size => <AccordionItem {...args} key={size} size={size} title={\`\${args.title} (\${size})\`} />)}
    </div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <AccordionItemSkeleton />
}`,...g.parameters?.docs?.source}}},_=[`Playground`,`Open`,`Disabled`,`DisabledOpen`,`AllSizes`,`Skeleton`]}))();export{h as AllSizes,p as Disabled,m as DisabledOpen,f as Open,d as Playground,g as Skeleton,_ as __namedExportsOrder,u as default};