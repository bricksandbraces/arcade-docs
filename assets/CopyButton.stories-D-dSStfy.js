import{n as e}from"./chunk-jRWAZmH_.js";import{nr as t,t as n,xi as r}from"./iframe-CS4X-XGW.js";var i,a,o,s;e((()=>{n(),{action:i}=__STORYBOOK_MODULE_ACTIONS__,a={title:`Components/CopyButton`,component:t,tags:[`autodocs`],argTypes:{size:{control:`inline-radio`,options:r},disabled:{control:`boolean`},resetDelay:{control:`number`}},args:{value:`Hello World!`,size:`large`,disabled:!1,resetDelay:2e3},parameters:{docs:{description:{component:`Button that copies a value to the clipboard and shows a confirmation state. Use next to code snippets, IDs, or share links.`}}}},o={args:{value:`This text will be copied to your clipboard`,onCopy:e=>{i(`onCopy`)(e)}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    value: "This text will be copied to your clipboard",
    onCopy: (value: any) => {
      action("onCopy")(value);
    }
  }
}`,...o.parameters?.docs?.source}}},s=[`Playground`]}))();export{o as Playground,s as __namedExportsOrder,a as default};