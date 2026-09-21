import{n as e}from"./chunk-jRWAZmH_.js";import{ct as t,fs as n,lt as r,t as i}from"./iframe-3giZHg2a.js";import{n as a,t as o}from"./figmaDesign-CO6i5n9C.js";var s,c,l,u,d,f,p;e((()=>{i(),a(),s=n(),c=[{label:`Link`,onClick:()=>{}},{label:`Link`,onClick:()=>{}},{label:`Link`,onClick:()=>{}}],l=[{label:`Link`,onClick:()=>{}},{label:`Link`,onClick:()=>{},disabled:!0},{label:`Link`,onClick:()=>{}}],u={parameters:{design:o(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=5097-807`)},title:`Layout & Structure/Header/Dropdown`,component:t,tags:[`autodocs`],argTypes:{selected:{control:`boolean`},disabled:{control:`boolean`},open:{control:`boolean`},placement:{control:`inline-radio`,options:[`bottom-start`,`bottom-end`]}}},d={render:e=>(0,s.jsx)(`div`,{className:`flex justify-start`,children:(0,s.jsx)(t,{...e,children:(0,s.jsx)(r,{children:`Menu`})})}),args:{selected:!1,disabled:!1,placement:`bottom-start`,items:c}},f={render:()=>(0,s.jsxs)(`div`,{className:`gap-md flex`,children:[(0,s.jsx)(t,{items:c,children:(0,s.jsx)(r,{children:`Overview`})}),(0,s.jsx)(t,{selected:!0,items:c,children:(0,s.jsx)(r,{children:`Overview`})}),(0,s.jsx)(t,{disabled:!0,items:l,children:(0,s.jsx)(r,{children:`Overview`})})]}),parameters:{layout:`padded`}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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