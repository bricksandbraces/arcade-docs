import{n as e}from"./chunk-jRWAZmH_.js";import{co as t,ct as n,lt as r,t as i}from"./iframe-Bza0kqWC.js";var a,o,s,c,l,u,d;e((()=>{i(),a=t(),o=[{label:`Link`,onClick:()=>{}},{label:`Link`,onClick:()=>{}},{label:`Link`,onClick:()=>{}}],s=[{label:`Link`,onClick:()=>{}},{label:`Link`,onClick:()=>{},disabled:!0},{label:`Link`,onClick:()=>{}}],c={title:`Layout & Structure/Header/Dropdown`,component:n,tags:[`autodocs`],argTypes:{selected:{control:`boolean`},disabled:{control:`boolean`},open:{control:`boolean`},placement:{control:`inline-radio`,options:[`bottom-start`,`bottom-end`]}}},l={render:e=>(0,a.jsx)(`div`,{className:`flex justify-start`,children:(0,a.jsx)(n,{...e,children:(0,a.jsx)(r,{children:`Menu`})})}),args:{selected:!1,disabled:!1,placement:`bottom-start`,items:o}},u={render:()=>(0,a.jsxs)(`div`,{className:`gap-md flex`,children:[(0,a.jsx)(n,{items:o,children:(0,a.jsx)(r,{children:`Overview`})}),(0,a.jsx)(n,{selected:!0,items:o,children:(0,a.jsx)(r,{children:`Overview`})}),(0,a.jsx)(n,{disabled:!0,items:s,children:(0,a.jsx)(r,{children:`Overview`})})]}),parameters:{layout:`padded`}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d=[`Playground`,`Overview`]}))();export{u as Overview,l as Playground,d as __namedExportsOrder,c as default};