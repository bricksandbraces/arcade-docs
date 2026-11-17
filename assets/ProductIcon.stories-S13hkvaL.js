import{n as e}from"./chunk-jRWAZmH_.js";import{Bi as t,Mc as n,Vi as r,Xa as i,_c as a,so as o,t as s,zi as c}from"./iframe-D1UboWw2.js";import{n as l,t as u}from"./figmaDesign-DLesXS3c.js";var d,f,p,m,h,g,_;e((()=>{s(),i(),n(),l(),d=a(),f=(0,d.jsx)(`img`,{src:`/arcade-docs/assets/image-sample.png`,alt:``}),p={title:`Components/ProductIcon`,component:c,tags:[`autodocs`],parameters:{design:u(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=6055-64`),docs:{description:{component:`Icon on a tinted, rounded square, or an image filling the same tile. The color sets both the background and the icon stroke from the alternative palette; an image replaces the icon and gets a hairline border instead. The size scales the container, radius and glyph together.`}}},args:{icon:(0,d.jsx)(o,{"aria-hidden":!0}),color:`gray`,size:40},argTypes:{icon:{control:!1},image:{control:!1},color:{control:{type:`select`},options:t},size:{control:{type:`inline-radio`},options:r}}},m={},h={args:{image:f}},g={parameters:{controls:{disable:!0}},render:()=>(0,d.jsxs)(`div`,{className:`gap-lg flex flex-col items-start`,children:[t.map(e=>(0,d.jsx)(`div`,{className:`gap-lg flex items-center`,children:[...r].reverse().map(t=>(0,d.jsx)(c,{color:e,size:t,icon:(0,d.jsx)(o,{"aria-hidden":!0})},t))},e)),(0,d.jsx)(`div`,{className:`gap-lg flex items-center`,children:[...r].reverse().map(e=>(0,d.jsx)(c,{size:e,image:f},e))})]})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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