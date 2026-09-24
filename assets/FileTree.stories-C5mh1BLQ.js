import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Fs as n,Ir as r,S as i,as as a,bs as o,i as s}from"./iframe-BhGXUsCS.js";import{n as c,t as l}from"./figmaDesign-CO6i5n9C.js";var u,d,f,p,m,h,g;e((()=>{n(),u=t(a(),1),s(),c(),d=o(),f={title:`Layout & Structure/FileTree`,component:i,tags:[`autodocs`],parameters:{design:l(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System`),layout:`padded`,docs:{description:{component:`Displays a hierarchical file and folder structure with expandable folders and a selectable row. Supports both controlled and uncontrolled usage for selection and expansion.`}}},argTypes:{data:{control:{type:`object`}},selectedId:{control:{type:`text`}},expandedIds:{control:{type:`object`}},defaultSelectedId:{control:{type:`text`}},defaultExpandedIds:{control:{type:`object`}}}},p=[{id:`src`,title:`src`,type:`folder`,children:[{id:`components`,title:`components`,type:`folder`,children:[{id:`button`,title:`Button.tsx`,type:`file`},{id:`input`,title:`Input.tsx`,type:`file`}]},{id:`utils`,title:`utils`,type:`folder`,children:[{id:`helpers`,title:`helpers.ts`,type:`file`}]},{id:`app`,title:`App.tsx`,type:`file`},{id:`index`,title:`index.ts`,type:`file`}]},{id:`public`,title:`public`,type:`folder`,children:[{id:`favicon`,title:`favicon.ico`,type:`file`},{id:`manifest`,title:`manifest.json`,type:`file`}]},{id:`package`,title:`package.json`,type:`file`},{id:`readme`,title:`README.md`,type:`file`}],m={args:{data:p,defaultExpandedIds:[`src`]},render:e=>(0,d.jsx)(`div`,{className:(0,u.default)(`w-72`),children:(0,d.jsx)(i,{...e})})},h={render:()=>(0,d.jsx)(`div`,{className:`w-72`,children:(0,d.jsx)(r,{})})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    defaultExpandedIds: ["src"]
  },
  render: args => <div className={cx("w-72")}>
      <FileTree {...args} />
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-72">
      <FileTreeSkeleton />
    </div>
}`,...h.parameters?.docs?.source}}},g=[`Playground`,`Skeleton`]}))();export{m as Playground,h as Skeleton,g as __namedExportsOrder,f as default};