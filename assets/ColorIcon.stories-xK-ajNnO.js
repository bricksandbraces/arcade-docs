import{n as e}from"./chunk-jRWAZmH_.js";import{Ca as t,Di as n,Ei as r,Is as i,Pa as a,Ti as o,Zs as s,t as c}from"./iframe-D6yGGif-.js";import{n as l,t as u}from"./figmaDesign-DDiUnvXT.js";var d,f,p,m,h;e((()=>{c(),t(),s(),l(),d=i(),f={title:`Display & Data/ColorIcon`,component:o,tags:[`autodocs`],parameters:{design:u(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=6055-64`),docs:{description:{component:`Icon on a tinted, rounded square. The color sets both the background and the icon stroke from the alternative palette; the size scales the container, radius and glyph together.`}}},args:{icon:(0,d.jsx)(a,{"aria-hidden":!0}),color:`gray`,size:40},argTypes:{icon:{control:!1},color:{control:{type:`select`},options:r},size:{control:{type:`inline-radio`},options:n}}},p={},m={parameters:{controls:{disable:!0}},render:()=>(0,d.jsx)(`div`,{className:`gap-lg flex flex-col items-start`,children:r.map(e=>(0,d.jsx)(`div`,{className:`gap-lg flex items-center`,children:[...n].reverse().map(t=>(0,d.jsx)(o,{color:e,size:t,icon:(0,d.jsx)(a,{"aria-hidden":!0})},t))},e))})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="gap-lg flex flex-col items-start">
      {ColorIconColors.map(color => <div key={color} className="gap-lg flex items-center">
          {[...ColorIconSizes].reverse().map(size => <ColorIcon key={size} color={color} size={size} icon={<IconSquareRounded aria-hidden />} />)}
        </div>)}
    </div>
}`,...m.parameters?.docs?.source}}},h=[`Playground`,`Overview`]}))();export{m as Overview,p as Playground,h as __namedExportsOrder,f as default};