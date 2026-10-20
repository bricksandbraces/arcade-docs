import{n as e}from"./chunk-jRWAZmH_.js";import{Io as t,Ms as n,Si as r,ba as i,qs as a,t as o,xi as s,za as c}from"./iframe-DZ6Z2h7h.js";import{n as l,t as u}from"./figmaDesign-DDiUnvXT.js";import{n as d,t as f}from"./figmaFrame-C9ggn5n5.js";var p,m,h,g,_,v,y,b;e((()=>{o(),i(),a(),l(),d(),p=n(),m={title:`Display & Data/AppIcon`,component:s,tags:[`autodocs`],parameters:{design:u(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=6033-7239`),docs:{description:{component:`Square app tile for a logo or icon. The corner radius is a quarter of the edge, so the shape stays the same at every size.`}}},args:{size:40},argTypes:{size:{control:`inline-radio`,options:r}}},h={render:e=>(0,p.jsx)(s,{...e,children:(0,p.jsx)(c,{className:`stroke-icon-brand`,"aria-hidden":!0})})},g={render:()=>(0,p.jsx)(`div`,{className:`gap-lg flex items-end`,children:r.map(e=>(0,p.jsx)(s,{size:e,children:(0,p.jsx)(c,{className:`stroke-icon-brand`,"aria-hidden":!0})},e))})},_={render:e=>(0,p.jsx)(s,{...e,className:`bg-background-brand`,children:(0,p.jsx)(t,{className:`stroke-icon-onbrand`,"aria-hidden":!0})})},v={24:`6033:7813`,32:`6033:7811`,40:`6033:7805`,48:`6033:7809`},y={parameters:{controls:{include:[`size`]}},args:{size:24},render:({size:e=24})=>(0,p.jsx)(f,{node:v[e],width:e,height:e,children:(0,p.jsx)(s,{size:e})})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <AppIcon {...args}>
      <IconPlugConnected className="stroke-icon-brand" aria-hidden />
    </AppIcon>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div className="gap-lg flex items-end">
      {AppIconSizes.map(size => <AppIcon key={size} size={size}>
          <IconPlugConnected className="stroke-icon-brand" aria-hidden />
        </AppIcon>)}
    </div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => <AppIcon {...args} className="bg-background-brand">
      <IconBolt className="stroke-icon-onbrand" aria-hidden />
    </AppIcon>
}`,..._.parameters?.docs?.source},description:{story:"A brand color goes on through `className`; the rounding stays.",..._.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: ["size"]
    }
  },
  args: {
    size: 24
  },
  render: ({
    size = 24
  }) => <FigmaFrame node={FIGMA_SPEC_NODES[size]} width={size} height={size}>
      <AppIcon size={size} />
    </FigmaFrame>
}`,...y.parameters?.docs?.source},description:{story:"1:1 with the Figma variants (empty slot) for `storybook:figma-diff`.",...y.parameters?.docs?.description}}},b=[`Playground`,`Sizes`,`CustomBackground`,`FigmaSpec`]}))();export{_ as CustomBackground,y as FigmaSpec,h as Playground,g as Sizes,b as __namedExportsOrder,m as default};