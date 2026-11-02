import{n as e}from"./chunk-jRWAZmH_.js";import{Ai as t,Ba as n,Hs as r,Oi as i,ka as a,ki as o,rc as s,t as c}from"./iframe-cQ_ahVKa.js";import{n as l,t as u}from"./figmaDesign-DDiUnvXT.js";var d,f,p,m,h,g,_;e((()=>{c(),a(),s(),l(),d=r(),f=(0,d.jsx)(`img`,{src:`/arcade-docs/assets/image-sample.png`,alt:``}),p={title:`Display & Data/ProductIcon`,component:i,tags:[`autodocs`],parameters:{design:u(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=6055-64`),docs:{description:{component:`Icon on a tinted, rounded square, or an image filling the same tile. The color sets both the background and the icon stroke from the alternative palette; an image replaces the icon and gets a hairline border instead. The size scales the container, radius and glyph together.`}}},args:{icon:(0,d.jsx)(n,{"aria-hidden":!0}),color:`gray`,size:40},argTypes:{icon:{control:!1},image:{control:!1},color:{control:{type:`select`},options:o},size:{control:{type:`inline-radio`},options:t}}},m={},h={args:{image:f}},g={parameters:{controls:{disable:!0}},render:()=>(0,d.jsxs)(`div`,{className:`gap-lg flex flex-col items-start`,children:[o.map(e=>(0,d.jsx)(`div`,{className:`gap-lg flex items-center`,children:[...t].reverse().map(t=>(0,d.jsx)(i,{color:e,size:t,icon:(0,d.jsx)(n,{"aria-hidden":!0})},t))},e)),(0,d.jsx)(`div`,{className:`gap-lg flex items-center`,children:[...t].reverse().map(e=>(0,d.jsx)(i,{size:e,image:f},e))})]})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    image: sampleImage
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="gap-lg flex flex-col items-start">
      {ProductIconColors.map(color => <div key={color} className="gap-lg flex items-center">
          {[...ProductIconSizes].reverse().map(size => <ProductIcon key={size} color={color} size={size} icon={<IconSquareRounded aria-hidden />} />)}
        </div>)}
      <div className="gap-lg flex items-center">
        {[...ProductIconSizes].reverse().map(size => <ProductIcon key={size} size={size} image={sampleImage} />)}
      </div>
    </div>
}`,...g.parameters?.docs?.source}}},_=[`Playground`,`Image`,`Overview`]}))();export{h as Image,g as Overview,m as Playground,_ as __namedExportsOrder,p as default};