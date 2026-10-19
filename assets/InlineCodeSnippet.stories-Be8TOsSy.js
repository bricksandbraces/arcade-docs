import{n as e}from"./chunk-jRWAZmH_.js";import{V as t,ks as n,t as r}from"./iframe-BqvyX73F.js";import{n as i,t as a}from"./figmaDesign-DDiUnvXT.js";var o,s,c,l,u,d;e((()=>{r(),i(),o=n(),s={title:`Display & Data/CodeSnippet/InlineCodeSnippet`,component:t,tags:[`autodocs`],parameters:{design:a(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=6037-189`),backgrounds:{default:`background`},docs:{description:{component:`Inline code snippet for short commands, identifiers or values embedded in running text. Clicking the snippet copies its code to the clipboard.`}}},argTypes:{code:{control:`text`},disabled:{control:`boolean`},copyLabel:{control:`text`},copiedLabel:{control:`text`},resetDelay:{control:`number`},onCopy:{action:`copied`}},args:{code:`node -v`,disabled:!1}},c={},l={args:{code:`yarn add @bricksandbraces/arcade-components`},render:e=>(0,o.jsxs)(`p`,{className:`typography-body text-text max-w-[448px]`,children:[`Install the package with `,(0,o.jsx)(t,{...e}),` and import the stylesheet once in your app entry.`]})},u={args:{disabled:!0}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    code: "yarn add @bricksandbraces/arcade-components"
  },
  render: args => <p className="typography-body text-text max-w-[448px]">
      Install the package with <InlineCodeSnippet {...args} /> and import the
      stylesheet once in your app entry.
    </p>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...u.parameters?.docs?.source}}},d=[`Playground`,`InRunningText`,`Disabled`]}))();export{u as Disabled,l as InRunningText,c as Playground,d as __namedExportsOrder,s as default};