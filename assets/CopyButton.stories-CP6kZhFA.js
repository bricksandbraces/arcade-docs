import{n as e}from"./chunk-jRWAZmH_.js";import{Ds as t,t as n,uc as r,vi as i,ya as a}from"./iframe-BpP19uzV.js";import{n as o,t as s}from"./figmaDesign-DLesXS3c.js";var c,l,u,d,f,p;e((()=>{n(),o(),c=r(),{action:l}=__STORYBOOK_MODULE_ACTIONS__,u={title:`Components/CopyButton`,component:a,tags:[`autodocs`],argTypes:{size:{control:`inline-radio`,options:t},disabled:{control:`boolean`},resetDelay:{control:`number`}},args:{value:`Hello World!`,size:`large`,disabled:!1,resetDelay:2e3},parameters:{design:s(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=2407-4958`),docs:{description:{component:`Button that copies a value to the clipboard and shows a confirmation state. Use next to code snippets, IDs, or share links.`}}}},d={args:{value:`This text will be copied to your clipboard`,onCopy:e=>{l(`onCopy`)(e)}}},f={render:()=>(0,c.jsx)(i,{})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    value: "This text will be copied to your clipboard",
    onCopy: (value: any) => {
      action("onCopy")(value);
    }
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <CopyButtonSkeleton />
}`,...f.parameters?.docs?.source}}},p=[`Playground`,`Skeleton`]}))();export{d as Playground,f as Skeleton,p as __namedExportsOrder,u as default};