import{n as e}from"./chunk-jRWAZmH_.js";import{Ga as t,Li as n,Tc as r,cn as i,no as a,sn as o,t as s,uc as c}from"./iframe-BpP19uzV.js";import{n as l,t as u}from"./figmaDesign-DLesXS3c.js";var d,f,p,m,h,g,_;e((()=>{s(),t(),r(),l(),d=c(),{action:f}=__STORYBOOK_MODULE_ACTIONS__,p={title:`Components/ProductCard`,component:o,tags:[`autodocs`],parameters:{layout:`centered`,design:u(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=6064-4433`),docs:{description:{component:"A product to add to a cart. `single` shows the price with a quantity stepper that expands once the product is added; `multiple` turns the whole card into a link or button that opens a selection of options. With an `image` the picture replaces the icon, and hovering it opens a SneakPeek with the picture, title and `description`."}}},decorators:[e=>(0,d.jsx)(`div`,{className:`w-[200px]`,children:(0,d.jsx)(e,{})})],args:{variant:`single`,title:`Title`,icon:(0,d.jsx)(a,{"aria-hidden":!0}),iconColor:`red`,price:`€129.00`,incrementLabel:`Add one`,decrementLabel:`Remove one`,onQuantityChange:f(`onQuantityChange`),onClick:f(`onClick`)},argTypes:{icon:{control:!1},image:{control:!1},variant:{control:{type:`inline-radio`},options:i},iconColor:{control:{type:`select`},options:n}}},m={},h={args:{title:`Cap`,price:`€25.00`,image:(0,d.jsx)(`img`,{src:`/arcade-docs/assets/image-sample.png`,alt:``}),description:`The cap is our signature piece for the gym staff.`}},g={parameters:{controls:{disable:!0}},render:e=>(0,d.jsxs)(`div`,{className:`gap-md flex flex-col`,children:[(0,d.jsx)(o,{...e,variant:`single`,defaultQuantity:0}),(0,d.jsx)(o,{...e,variant:`single`,defaultQuantity:1}),(0,d.jsx)(o,{...e,variant:`multiple`})]})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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