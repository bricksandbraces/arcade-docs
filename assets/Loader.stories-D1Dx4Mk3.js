import{n as e}from"./chunk-jRWAZmH_.js";import{Ki as t,gi as n,hi as r,mi as i,t as a}from"./iframe-BQhniulW.js";var o,s,c,l,u;e((()=>{a(),o=t(),s={title:`Components/Loader`,component:i,tags:[`autodocs`],parameters:{docs:{description:{component:`Spinning indicator for in-progress work. Use inline for small operations or as an overlay to block a surface during load.`}}}},c=e=>(0,o.jsx)(`div`,{children:(0,o.jsx)(i,{...e})}),c.args={size:`Small`,color:`brand`,ariaLabel:`Wird geladen…`,asOverlay:!1,overlayLabel:`Einen Moment noch, wir haben es gleich...`,colorOverrides:void 0},c.argTypes={size:{description:`The size of the loader`,control:{type:`select`},options:n,defaultValue:`Small`},color:{description:`The color variant of the loader`,control:{type:`select`},options:r,defaultValue:`brand`},ariaLabel:{description:`The accessible label for screen readers`,control:{type:`text`},defaultValue:`Wird geladen…`},asOverlay:{description:`Displays the loader centered on a fullscreen semi-transparent backdrop`,control:{type:`boolean`},defaultValue:!1},overlayLabel:{description:`Optional label shown below the loader when used as an overlay (appears after 5s)`,control:{type:`text`},defaultValue:`Einen Moment noch, wir haben es gleich...`},colorOverrides:{description:`Optional color overrides for specific layers in the Lottie animation`,control:{type:`object`},defaultValue:void 0},animationData:{description:`The .lottie JSON data for the animation`,control:{type:`object`},defaultValue:void 0}},l={parameters:{controls:{disable:!0}},render:()=>(0,o.jsx)(`div`,{className:`gap-lg flex flex-col`,children:n.map(e=>(0,o.jsx)(`div`,{className:`gap-lg flex flex-row items-center`,children:r.map(t=>(0,o.jsx)(i,{size:e},`${e}-${t}`))},e))})},c.__docgenInfo={description:``,methods:[],displayName:`Playground`},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`(args: React.ComponentProps<typeof Loader>) => {
  return <div>
      <Loader {...args} />
    </div>;
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u=[`Playground`,`Overview`]}))();export{l as Overview,c as Playground,u as __namedExportsOrder,s as default};