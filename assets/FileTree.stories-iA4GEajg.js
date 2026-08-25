import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Ao as n,eo as r,ho as i,nr as a,t as o,y as s}from"./iframe-BY_c1jds.js";var c,l,u,d,f,p,m;e((()=>{n(),c=t(r(),1),o(),l=i(),u={title:`Layout & Structure/FileTree`,component:s,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`Displays a hierarchical file and folder structure with expandable folders and a selectable row. Supports both controlled and uncontrolled usage for selection and expansion.`}}},argTypes:{data:{control:{type:`object`}},selectedId:{control:{type:`text`}},expandedIds:{control:{type:`object`}},defaultSelectedId:{control:{type:`text`}},defaultExpandedIds:{control:{type:`object`}}}},d=[{id:`src`,title:`src`,type:`folder`,children:[{id:`components`,title:`components`,type:`folder`,children:[{id:`button`,title:`Button.tsx`,type:`file`},{id:`input`,title:`Input.tsx`,type:`file`}]},{id:`utils`,title:`utils`,type:`folder`,children:[{id:`helpers`,title:`helpers.ts`,type:`file`}]},{id:`app`,title:`App.tsx`,type:`file`},{id:`index`,title:`index.ts`,type:`file`}]},{id:`public`,title:`public`,type:`folder`,children:[{id:`favicon`,title:`favicon.ico`,type:`file`},{id:`manifest`,title:`manifest.json`,type:`file`}]},{id:`package`,title:`package.json`,type:`file`},{id:`readme`,title:`README.md`,type:`file`}],f={args:{data:d,defaultExpandedIds:[`src`]},render:e=>(0,l.jsx)(`div`,{className:(0,c.default)(`w-72`),children:(0,l.jsx)(s,{...e})})},p={render:()=>(0,l.jsx)(`div`,{className:`w-72`,children:(0,l.jsx)(a,{})})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    defaultExpandedIds: ["src"]
  },
  render: args => <div className={cx("w-72")}>
      <FileTree {...args} />
    </div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-72">
      <FileTreeSkeleton />
    </div>
}`,...p.parameters?.docs?.source}}},m=[`Playground`,`Skeleton`]}))();export{f as Playground,p as Skeleton,m as __namedExportsOrder,u as default};