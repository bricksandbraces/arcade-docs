import{n as e}from"./chunk-jRWAZmH_.js";import{Di as t,Vn as n,t as r}from"./iframe-C5-awFnQ.js";var i,a,o,s,c;e((()=>{r(),i=t(),a={title:`Components/Divider`,component:n,tags:[`autodocs`],parameters:{docs:{description:{component:`Thin horizontal or vertical line for separating content groups. Use to visually break up lists, toolbars, or sections.`}}}},o=e=>(0,i.jsx)(`div`,{className:`flex h-[calc(100dvh-64px)] w-[calc(100vw-64px)]`,children:(0,i.jsx)(n,{...e})}),o.args={orientation:`horizontal`,width:`1`},o.argTypes={orientation:{description:`The orientation of the divider`,control:{type:`select`},options:[`horizontal`,`vertical`],defaultValue:`horizontal`},width:{description:`The width of the divider`,control:{type:`select`},options:[`0.5`,`1`,`2`],defaultValue:`1`}},s={parameters:{controls:{disable:!0}},render:()=>(0,i.jsxs)(`div`,{className:`flex h-64 w-full flex-col items-center justify-center gap-8`,children:[(0,i.jsxs)(`div`,{className:`flex w-full flex-col gap-4`,children:[(0,i.jsx)(`p`,{className:`text-sm font-medium`,children:`Horizontal`}),[`0.5`,`1`,`2`].map(e=>(0,i.jsx)(n,{orientation:`horizontal`,width:e},e))]}),(0,i.jsxs)(`div`,{className:`flex h-full flex-row items-center justify-center gap-4`,children:[(0,i.jsx)(`p`,{className:`mr-4 text-sm font-medium`,children:`Vertical`}),[`0.5`,`1`,`2`].map(e=>(0,i.jsx)(n,{orientation:`vertical`,width:e},e))]})]})},o.__docgenInfo={description:``,methods:[],displayName:`Playground`},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`(args: React.ComponentProps<typeof Divider>) => {
  return <div className="flex h-[calc(100dvh-64px)] w-[calc(100vw-64px)]">
      <Divider {...args} />
    </div>;
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},c=[`Playground`,`Overview`]}))();export{s as Overview,o as Playground,c as __namedExportsOrder,a as default};