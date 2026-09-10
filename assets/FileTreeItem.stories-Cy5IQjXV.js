import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Io as n,Mt as r,Nt as i,Zo as a,fr as o,t as s,xo as c}from"./iframe-CPClxiO6.js";import{n as l,t as u}from"./figmaDesign-CO6i5n9C.js";var d,f,p,m,h,g,_,v,y;e((()=>{d=t(a(),1),f=t(c(),1),s(),l(),p=n(),m={parameters:{design:u(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System`)},title:`Layout & Structure/FileTree/FileTreeItem`,component:r,tags:[`autodocs`],argTypes:{type:{control:`inline-radio`,options:i},open:{control:`boolean`},disabled:{control:`boolean`},selected:{control:`boolean`},title:{control:`text`},level:{control:{type:`number`,min:0,max:5,step:1}}},decorators:[e=>(0,p.jsx)(`div`,{role:`tree`,children:(0,p.jsx)(e,{})})]},h={args:{type:`file`,open:!1,disabled:!1,selected:!1,title:`README.md`,level:0},render:e=>(0,p.jsx)(`div`,{className:(0,f.default)(`w-64`),children:(0,p.jsx)(r,{...e})})},g=[{label:`Enabled`},{label:`Selected`,selected:!0},{label:`Disabled`,disabled:!0}],_={parameters:{controls:{disable:!0}},render:()=>(0,p.jsx)(`div`,{className:(0,f.default)(`gap-x-2xlg gap-y-3xlg grid grid-cols-[200px_200px_200px]`),children:g.map(e=>(0,p.jsxs)(d.Fragment,{children:[(0,p.jsx)(r,{type:`folder`,title:`Item Title`,disabled:`disabled`in e?e.disabled:void 0,selected:`selected`in e?e.selected:void 0}),(0,p.jsx)(r,{type:`folder`,open:!0,title:`Item Title`,disabled:`disabled`in e?e.disabled:void 0,selected:`selected`in e?e.selected:void 0}),(0,p.jsx)(r,{type:`file`,title:`Item Title`,disabled:`disabled`in e?e.disabled:void 0,selected:`selected`in e?e.selected:void 0})]},e.label))})},v={render:()=>(0,p.jsx)(o,{})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    type: "file",
    open: false,
    disabled: false,
    selected: false,
    title: "README.md",
    level: 0
  },
  render: args => <div className={cx("w-64")}>
      <FileTreeItem {...args} />
    </div>
}`,...h.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className={cx("gap-x-2xlg gap-y-3xlg grid grid-cols-[200px_200px_200px]")}>
      {OverviewRows.map(row => <React.Fragment key={row.label}>
          <FileTreeItem type="folder" title="Item Title" disabled={"disabled" in row ? row.disabled : undefined} selected={"selected" in row ? row.selected : undefined} />
          <FileTreeItem type="folder" open title="Item Title" disabled={"disabled" in row ? row.disabled : undefined} selected={"selected" in row ? row.selected : undefined} />
          <FileTreeItem type="file" title="Item Title" disabled={"disabled" in row ? row.disabled : undefined} selected={"selected" in row ? row.selected : undefined} />
        </React.Fragment>)}
    </div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <FileTreeItemSkeleton />
}`,...v.parameters?.docs?.source}}},y=[`Playground`,`Overview`,`Skeleton`]}))();export{_ as Overview,h as Playground,v as Skeleton,y as __namedExportsOrder,m as default};