import{n as e}from"./chunk-jRWAZmH_.js";import{Ar as t,Fo as n,Qa as r,mi as i,t as a}from"./iframe-RQUrcOP9.js";import{n as o,t as s}from"./figmaDesign-CO6i5n9C.js";var c,l,u,d,f,p;e((()=>{a(),o(),c=n(),{action:l}=__STORYBOOK_MODULE_ACTIONS__,u={title:`Buttons & Actions/CopyButton`,component:i,tags:[`autodocs`],argTypes:{size:{control:`inline-radio`,options:r},disabled:{control:`boolean`},resetDelay:{control:`number`}},args:{value:`Hello World!`,size:`large`,disabled:!1,resetDelay:2e3},parameters:{design:s(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=2407-4958`),docs:{description:{component:`Button that copies a value to the clipboard and shows a confirmation state. Use next to code snippets, IDs, or share links.`}}}},d={args:{value:`This text will be copied to your clipboard`,onCopy:e=>{l(`onCopy`)(e)}}},f={render:()=>(0,c.jsx)(t,{})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    value: "This text will be copied to your clipboard",
    onCopy: (value: any) => {
      action("onCopy")(value);
    }
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <CopyButtonSkeleton />
}`,...f.parameters?.docs?.source}}},p=[`Playground`,`Skeleton`]}))();export{d as Playground,f as Skeleton,p as __namedExportsOrder,u as default};