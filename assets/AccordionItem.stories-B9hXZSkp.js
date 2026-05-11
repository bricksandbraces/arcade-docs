import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{$ as n,Q as r,ea as i,ha as a,t as o}from"./iframe-D3A0Qfxl.js";var s,c,l,u,d,f,p,m,h;e((()=>{o(),s=i(),c=t(a(),1),l={title:`Hendrik Supervision/Accordion/AccordionItem`,component:r,parameters:{layout:`padded`},argTypes:{size:{control:`inline-radio`,options:n},disabled:{control:`boolean`},defaultOpen:{control:`boolean`},title:{control:`text`}},args:{title:`Accordion title`,size:`medium`,defaultOpen:!1,disabled:!1,children:`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.`},render:e=>(0,s.jsx)(`div`,{className:`w-[512px] max-w-full`,children:(0,s.jsx)(r,{...e})})},u={},d={args:{defaultOpen:!0}},f={args:{disabled:!0}},p={args:{disabled:!0,defaultOpen:!0}},m={render:e=>(0,s.jsx)(`div`,{className:`gap-md flex w-[512px] max-w-full flex-col`,children:n.map(t=>(0,c.createElement)(r,{...e,key:t,size:t,title:`${e.title} (${t})`}))})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    defaultOpen: true
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultOpen: true
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <div className="gap-md flex w-[512px] max-w-full flex-col">
      {AccordionItemSizes.map(size => <AccordionItem {...args} key={size} size={size} title={\`\${args.title} (\${size})\`} />)}
    </div>
}`,...m.parameters?.docs?.source}}},h=[`Playground`,`Open`,`Disabled`,`DisabledOpen`,`AllSizes`]}))();export{m as AllSizes,f as Disabled,p as DisabledOpen,d as Open,u as Playground,h as __namedExportsOrder,l as default};