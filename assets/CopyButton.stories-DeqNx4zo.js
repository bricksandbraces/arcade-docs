import{n as e}from"./chunk-jRWAZmH_.js";import{Ra as t,Tr as n,si as r,t as i,xo as a}from"./iframe-DZC8GE3v.js";var o,s,c,l,u,d;e((()=>{i(),o=a(),{action:s}=__STORYBOOK_MODULE_ACTIONS__,c={title:`Buttons & Actions/CopyButton`,component:r,tags:[`autodocs`],argTypes:{size:{control:`inline-radio`,options:t},disabled:{control:`boolean`},resetDelay:{control:`number`}},args:{value:`Hello World!`,size:`large`,disabled:!1,resetDelay:2e3},parameters:{docs:{description:{component:`Button that copies a value to the clipboard and shows a confirmation state. Use next to code snippets, IDs, or share links.`}}}},l={args:{value:`This text will be copied to your clipboard`,onCopy:e=>{s(`onCopy`)(e)}}},u={render:()=>(0,o.jsx)(n,{})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    value: "This text will be copied to your clipboard",
    onCopy: (value: any) => {
      action("onCopy")(value);
    }
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <CopyButtonSkeleton />
}`,...u.parameters?.docs?.source}}},d=[`Playground`,`Skeleton`]}))();export{l as Playground,u as Skeleton,d as __namedExportsOrder,c as default};