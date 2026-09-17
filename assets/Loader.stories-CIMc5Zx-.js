import{n as e}from"./chunk-jRWAZmH_.js";import{Ao as t,Oo as n,ko as r,os as i,t as a}from"./iframe-Dr26N8-N.js";import{n as o,t as s}from"./figmaDesign-CO6i5n9C.js";var c,l,u,d,f;e((()=>{a(),o(),c=i(),l={title:`Feedback & Status/Loader`,component:n,tags:[`autodocs`],parameters:{design:s(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=2118-16534`),docs:{description:{component:`Spinning indicator for in-progress work. Use inline for small operations or as an overlay to block a surface during load.`}}}},u=e=>(0,c.jsx)(`div`,{children:(0,c.jsx)(n,{...e})}),u.args={size:`Small`,color:`brand`,ariaLabel:`Wird geladen...`,asOverlay:!1,overlayLabel:`Einen Moment noch, wir haben es gleich...`,colorOverrides:void 0},u.argTypes={size:{description:`The size of the loader`,control:{type:`select`},options:t,defaultValue:`Small`},color:{description:`The color variant of the loader`,control:{type:`select`},options:r,defaultValue:`brand`},ariaLabel:{description:`The accessible label for screen readers`,control:{type:`text`},defaultValue:`Wird geladen...`},asOverlay:{description:`Displays the loader centered on a fullscreen semi-transparent backdrop`,control:{type:`boolean`},defaultValue:!1},overlayLabel:{description:`Optional label shown below the loader when used as an overlay (appears after 5s)`,control:{type:`text`},defaultValue:`Einen Moment noch, wir haben es gleich...`},colorOverrides:{description:`Optional color overrides for specific layers in the Lottie animation`,control:{type:`object`},defaultValue:void 0},animationData:{description:`The .lottie JSON data for the animation`,control:{type:`object`},defaultValue:void 0}},d={parameters:{controls:{disable:!0}},render:()=>(0,c.jsx)(`div`,{className:`gap-lg flex flex-col`,children:t.map(e=>(0,c.jsx)(`div`,{className:`gap-lg flex flex-row items-center`,children:r.map(t=>(0,c.jsx)(n,{size:e},`${e}-${t}`))},e))})},u.__docgenInfo={description:``,methods:[],displayName:`Playground`},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`(args: React.ComponentProps<typeof Loader>) => {
  return <div>
      <Loader {...args} />
    </div>;
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="gap-lg flex flex-col">
      {LoaderSize.map(size => <div key={size} className="gap-lg flex flex-row items-center">
          {LoaderColor.map(color => <Loader key={\`\${size}-\${color}\`} size={size} />)}
        </div>)}
    </div>
}`,...d.parameters?.docs?.source}}},f=[`Playground`,`Overview`]}))();export{d as Overview,u as Playground,f as __namedExportsOrder,l as default};