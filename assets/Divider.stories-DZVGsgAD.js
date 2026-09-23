import{n as e}from"./chunk-jRWAZmH_.js";import{i as t,ta as n,ys as r}from"./iframe-BNKOs80O.js";import{n as i,t as a}from"./figmaDesign-CO6i5n9C.js";var o,s,c,l,u;e((()=>{t(),i(),o=r(),s={title:`Layout & Structure/Divider`,component:n,tags:[`autodocs`],parameters:{design:a(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=2149-3103`),docs:{description:{component:`Thin horizontal or vertical line for separating content groups. Use to visually break up lists, toolbars, or sections.`}}}},c=e=>(0,o.jsx)(`div`,{className:`flex h-[calc(100dvh-64px)] w-[calc(100vw-64px)]`,children:(0,o.jsx)(n,{...e})}),c.args={orientation:`horizontal`,width:`1`},c.argTypes={orientation:{description:`The orientation of the divider`,control:{type:`select`},options:[`horizontal`,`vertical`],defaultValue:`horizontal`},width:{description:`The width of the divider`,control:{type:`select`},options:[`0.5`,`1`,`2`],defaultValue:`1`}},l={parameters:{controls:{disable:!0}},render:()=>(0,o.jsxs)(`div`,{className:`flex h-64 w-full flex-col items-center justify-center gap-8`,children:[(0,o.jsxs)(`div`,{className:`flex w-full flex-col gap-4`,children:[(0,o.jsx)(`p`,{className:`text-sm font-medium`,children:`Horizontal`}),[`0.5`,`1`,`2`].map(e=>(0,o.jsx)(n,{orientation:`horizontal`,width:e},e))]}),(0,o.jsxs)(`div`,{className:`flex h-full flex-row items-center justify-center gap-4`,children:[(0,o.jsx)(`p`,{className:`mr-4 text-sm font-medium`,children:`Vertical`}),[`0.5`,`1`,`2`].map(e=>(0,o.jsx)(n,{orientation:`vertical`,width:e},e))]})]})},c.__docgenInfo={description:``,methods:[],displayName:`Playground`},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`(args: React.ComponentProps<typeof Divider>) => {
  return <div className="flex h-[calc(100dvh-64px)] w-[calc(100vw-64px)]">
      <Divider {...args} />
    </div>;
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="flex h-64 w-full flex-col items-center justify-center gap-8">
      <div className="flex w-full flex-col gap-4">
        <p className="text-sm font-medium">Horizontal</p>
        {["0.5", "1", "2"].map(width => <Divider key={width} orientation="horizontal" width={width as "0.5" | "1" | "2"} />)}
      </div>

      <div className="flex h-full flex-row items-center justify-center gap-4">
        <p className="mr-4 text-sm font-medium">Vertical</p>
        {["0.5", "1", "2"].map(width => <Divider key={width} orientation="vertical" width={width as "0.5" | "1" | "2"} />)}
      </div>
    </div>
}`,...l.parameters?.docs?.source}}},u=[`Playground`,`Overview`]}))();export{l as Overview,c as Playground,u as __namedExportsOrder,s as default};