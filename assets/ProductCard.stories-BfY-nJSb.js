import{n as e}from"./chunk-jRWAZmH_.js";import{Di as t,Ga as n,Pa as r,Qs as i,dn as a,fn as o,pc as s,t as c}from"./iframe-BhEkvV0n.js";import{n as l,t as u}from"./figmaDesign-DDiUnvXT.js";var d,f,p,m,h,g,_;e((()=>{c(),r(),s(),l(),d=i(),{action:f}=__STORYBOOK_MODULE_ACTIONS__,p={title:`Display & Data/Cards/ProductCard`,component:a,tags:[`autodocs`],parameters:{layout:`centered`,design:u(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=6064-4433`),docs:{description:{component:"A product to add to a cart. `single` shows the price with a quantity stepper that expands once the product is added; `multiple` turns the whole card into a link or button that opens a selection of options. With an `image` the picture replaces the icon, and hovering it opens a SneakPeek with the picture, title and `description`."}}},decorators:[e=>(0,d.jsx)(`div`,{className:`w-[200px]`,children:(0,d.jsx)(e,{})})],args:{variant:`single`,title:`Title`,icon:(0,d.jsx)(n,{"aria-hidden":!0}),iconColor:`red`,price:`€129.00`,incrementLabel:`Add one`,decrementLabel:`Remove one`,onQuantityChange:f(`onQuantityChange`),onClick:f(`onClick`)},argTypes:{icon:{control:!1},image:{control:!1},variant:{control:{type:`inline-radio`},options:o},iconColor:{control:{type:`select`},options:t}}},m={},h={args:{title:`Cap`,price:`€25.00`,image:(0,d.jsx)(`img`,{src:`/arcade-docs/assets/image-sample.png`,alt:``}),description:`The cap is our signature piece for the gym staff.`}},g={parameters:{controls:{disable:!0}},render:e=>(0,d.jsxs)(`div`,{className:`gap-md flex flex-col`,children:[(0,d.jsx)(a,{...e,variant:`single`,defaultQuantity:0}),(0,d.jsx)(a,{...e,variant:`single`,defaultQuantity:1}),(0,d.jsx)(a,{...e,variant:`multiple`})]})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Cap",
    price: "€25.00",
    image: <img src={\`\${import.meta.env.BASE_URL}assets/image-sample.png\`} alt="" />,
    description: "The cap is our signature piece for the gym staff."
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_=[`Playground`,`WithImage`,`Overview`]}))();export{g as Overview,m as Playground,h as WithImage,_ as __namedExportsOrder,p as default};