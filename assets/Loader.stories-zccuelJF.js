import{n as e}from"./chunk-jRWAZmH_.js";import{Ms as t,Ns as n,Ps as r,t as i,uc as a}from"./iframe-BGZyYePL.js";import{n as o,t as s}from"./figmaDesign-DLesXS3c.js";var c,l,u,d,f,p,m,h;e((()=>{i(),o(),c=a(),l={title:`Components/Loader`,component:t,tags:[`autodocs`],parameters:{design:s(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=2118-16534`),docs:{description:{component:`Spinning indicator for in-progress work. Use inline for small operations or as an overlay to block a surface during load.`}}}},u=e=>(0,c.jsx)(`div`,{children:(0,c.jsx)(t,{...e})}),u.args={size:`Small`,color:`brand`,ariaLabel:`Wird geladen...`,asOverlay:!1,overlayLabel:`Einen Moment noch, wir haben es gleich...`,colorOverrides:void 0},u.argTypes={size:{description:`The size of the loader`,control:{type:`select`},options:r,defaultValue:`Small`},color:{description:`The color variant of the loader`,control:{type:`select`},options:n,defaultValue:`brand`},ariaLabel:{description:`The accessible label for screen readers`,control:{type:`text`},defaultValue:`Wird geladen...`},asOverlay:{description:`Displays the loader centered on a fullscreen semi-transparent backdrop`,control:{type:`boolean`},defaultValue:!1},overlayLabel:{description:`Optional label shown below the loader when used as an overlay (appears after 5s)`,control:{type:`text`},defaultValue:`Einen Moment noch, wir haben es gleich...`},colorOverrides:{description:`Optional color overrides for specific layers in the Lottie animation`,control:{type:`object`},defaultValue:void 0},animationData:{description:`The .lottie JSON data for the animation`,control:{type:`object`},defaultValue:void 0}},d=()=>(0,c.jsx)(`div`,{className:`gap-lg flex flex-col`,children:r.map(e=>(0,c.jsx)(`div`,{className:`gap-lg flex flex-row items-center`,children:n.map(n=>(0,c.jsx)(t,{size:e,color:n},`${e}-${n}`))},e))}),f={parameters:{controls:{disable:!0}},render:()=>(0,c.jsx)(d,{})},p={parameters:{controls:{disable:!0}},globals:{theme:`Orapulse Light`},render:()=>(0,c.jsx)(d,{})},m={parameters:{controls:{disable:!0}},globals:{theme:`Orapulse Dark`},render:()=>(0,c.jsx)(d,{})},u.__docgenInfo={description:``,methods:[],displayName:`Playground`},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`(args: React.ComponentProps<typeof Loader>) => {
  return <div>
      <Loader {...args} />
    </div>;
}`,...u.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <ColorMatrix />
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  globals: {
    theme: "Orapulse Light"
  },
  render: () => <ColorMatrix />
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  globals: {
    theme: "Orapulse Dark"
  },
  render: () => <ColorMatrix />
}`,...m.parameters?.docs?.source}}},h=[`Playground`,`Overview`,`OrapulseLight`,`OrapulseDark`]}))();export{m as OrapulseDark,p as OrapulseLight,f as Overview,u as Playground,h as __namedExportsOrder,l as default};