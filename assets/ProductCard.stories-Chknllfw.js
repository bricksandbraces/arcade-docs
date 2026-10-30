import{n as e}from"./chunk-jRWAZmH_.js";import{Ba as t,Hs as n,dn as r,fn as i,ka as a,ki as o,rc as s,t as c}from"./iframe-CQm8b4Bh.js";import{n as l,t as u}from"./figmaDesign-DDiUnvXT.js";var d,f,p,m,h,g;e((()=>{c(),a(),s(),l(),d=n(),{action:f}=__STORYBOOK_MODULE_ACTIONS__,p={title:`Display & Data/Cards/ProductCard`,component:r,tags:[`autodocs`],parameters:{layout:`centered`,design:u(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=6064-4433`),docs:{description:{component:"A product to add to a cart. `single` shows the price with a quantity stepper that expands once the product is added; `multiple` turns the whole card into a link or button that opens a selection of options."}}},decorators:[e=>(0,d.jsx)(`div`,{className:`w-[200px]`,children:(0,d.jsx)(e,{})})],args:{variant:`single`,title:`Title`,icon:(0,d.jsx)(t,{"aria-hidden":!0}),iconColor:`red`,price:`€129.00`,incrementLabel:`Add one`,decrementLabel:`Remove one`,onQuantityChange:f(`onQuantityChange`),onClick:f(`onClick`)},argTypes:{icon:{control:!1},variant:{control:{type:`inline-radio`},options:i},iconColor:{control:{type:`select`},options:o}}},m={},h={parameters:{controls:{disable:!0}},render:e=>(0,d.jsxs)(`div`,{className:`gap-md flex flex-col`,children:[(0,d.jsx)(r,{...e,variant:`single`,defaultQuantity:0}),(0,d.jsx)(r,{...e,variant:`single`,defaultQuantity:1}),(0,d.jsx)(r,{...e,variant:`multiple`})]})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: args => <div className="gap-md flex flex-col">
      <ProductCard {...args} variant="single" defaultQuantity={0} />
      <ProductCard {...args} variant="single" defaultQuantity={1} />
      <ProductCard {...args} variant="multiple" />
    </div>
}`,...h.parameters?.docs?.source}}},g=[`Playground`,`Overview`]}))();export{h as Overview,m as Playground,g as __namedExportsOrder,p as default};