import{n as e}from"./chunk-jRWAZmH_.js";import{Xr as t,hr as n,so as r,t as i,wa as a}from"./iframe-B16uoxlA.js";var o,s,c,l,u,d;e((()=>{i(),o=r(),{action:s}=__STORYBOOK_MODULE_ACTIONS__,c={title:`Buttons & Actions/CopyButton`,component:t,tags:[`autodocs`],argTypes:{size:{control:`inline-radio`,options:a},disabled:{control:`boolean`},resetDelay:{control:`number`}},args:{value:`Hello World!`,size:`large`,disabled:!1,resetDelay:2e3},parameters:{docs:{description:{component:`Button that copies a value to the clipboard and shows a confirmation state. Use next to code snippets, IDs, or share links.`}}}},l={args:{value:`This text will be copied to your clipboard`,onCopy:e=>{s(`onCopy`)(e)}}},u={render:()=>(0,o.jsx)(n,{})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    value: "This text will be copied to your clipboard",
    onCopy: (value: any) => {
      action("onCopy")(value);
    }
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <CopyButtonSkeleton />
}`,...u.parameters?.docs?.source}}},d=[`Playground`,`Skeleton`]}))();export{l as Playground,u as Skeleton,d as __namedExportsOrder,c as default};