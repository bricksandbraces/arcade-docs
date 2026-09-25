import{n as e}from"./chunk-jRWAZmH_.js";import{Os as t,dt as n,t as r,ut as i}from"./iframe-BrfqoxEp.js";import{n as a,t as o}from"./figmaDesign-DDiUnvXT.js";var s,c,l,u,d,f,p;e((()=>{r(),a(),s=t(),c=[{label:`Link`,onClick:()=>{}},{label:`Link`,onClick:()=>{}},{label:`Link`,onClick:()=>{}}],l=[{label:`Link`,onClick:()=>{}},{label:`Link`,onClick:()=>{},disabled:!0},{label:`Link`,onClick:()=>{}}],u={parameters:{design:o(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=2562-20025`)},title:`Layout & Structure/Header/Dropdown`,component:i,tags:[`autodocs`],argTypes:{selected:{control:`boolean`},disabled:{control:`boolean`},open:{control:`boolean`},placement:{control:`inline-radio`,options:[`bottom-start`,`bottom-end`]}}},d={render:e=>(0,s.jsx)(`div`,{className:`flex justify-start`,children:(0,s.jsx)(i,{...e,children:(0,s.jsx)(n,{children:`Menu`})})}),args:{selected:!1,disabled:!1,placement:`bottom-start`,items:c}},f={render:()=>(0,s.jsxs)(`div`,{className:`gap-md flex`,children:[(0,s.jsx)(i,{items:c,children:(0,s.jsx)(n,{children:`Overview`})}),(0,s.jsx)(i,{selected:!0,items:c,children:(0,s.jsx)(n,{children:`Overview`})}),(0,s.jsx)(i,{disabled:!0,items:l,children:(0,s.jsx)(n,{children:`Overview`})})]}),parameters:{layout:`padded`}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex justify-start">
      <HeaderDropdown {...args}>
        <HeaderDropdownButton>Menu</HeaderDropdownButton>
      </HeaderDropdown>
    </div>,
  args: {
    selected: false,
    disabled: false,
    placement: "bottom-start",
    items: baseItems
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div className="gap-md flex">
      <HeaderDropdown items={baseItems}>
        <HeaderDropdownButton>Overview</HeaderDropdownButton>
      </HeaderDropdown>
      <HeaderDropdown selected items={baseItems}>
        <HeaderDropdownButton>Overview</HeaderDropdownButton>
      </HeaderDropdown>
      <HeaderDropdown disabled items={itemsWithDisabled}>
        <HeaderDropdownButton>Overview</HeaderDropdownButton>
      </HeaderDropdown>
    </div>,
  parameters: {
    layout: "padded"
  }
}`,...f.parameters?.docs?.source}}},p=[`Playground`,`Overview`]}))();export{f as Overview,d as Playground,p as __namedExportsOrder,u as default};