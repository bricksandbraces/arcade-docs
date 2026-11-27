import{n as e}from"./chunk-jRWAZmH_.js";import{Co as t,Hi as n,Ui as r,Wi as i,cl as a,fo as o,qc as s,t as c}from"./iframe-BmBSRsrc.js";import{n as l,t as u}from"./figmaDesign-D2IpkIki.js";var d,f,p,m,h,g,_;e((()=>{c(),o(),a(),l(),d=s(),f=(0,d.jsx)(`img`,{src:`/arcade-docs/assets/image-sample.png`,alt:``}),p={title:`Components/ProductIcon`,component:n,tags:[`autodocs`],parameters:{design:u(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=6055-64`),docs:{description:{component:`Icon on a tinted, rounded square, or an image filling the same tile. The color sets both the background and the icon stroke from the alternative palette; an image replaces the icon and gets a hairline border instead. The size scales the container, radius and glyph together.`}}},args:{icon:(0,d.jsx)(t,{"aria-hidden":!0}),color:`gray`,size:40},argTypes:{icon:{control:!1},image:{control:!1},color:{control:{type:`select`},options:r},size:{control:{type:`inline-radio`},options:i}}},m={},h={args:{image:f}},g={parameters:{controls:{disable:!0}},render:()=>(0,d.jsxs)(`div`,{className:`gap-lg flex flex-col items-start`,children:[r.map(e=>(0,d.jsx)(`div`,{className:`gap-lg flex items-center`,children:[...i].reverse().map(r=>(0,d.jsx)(n,{color:e,size:r,icon:(0,d.jsx)(t,{"aria-hidden":!0})},r))},e)),(0,d.jsx)(`div`,{className:`gap-lg flex items-center`,children:[...i].reverse().map(e=>(0,d.jsx)(n,{size:e,image:f},e))})]})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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