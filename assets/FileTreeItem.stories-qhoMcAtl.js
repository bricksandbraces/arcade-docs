import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Ga as n,Mt as r,Nt as i,Xn as a,oo as o,t as s,xo as c}from"./iframe-C0kjWh6P.js";var l,u,d,f,p,m,h,g,_;e((()=>{l=t(c(),1),u=t(n(),1),s(),d=o(),f={title:`Layout & Structure/FileTree/FileTreeItem`,component:r,tags:[`autodocs`],argTypes:{type:{control:`inline-radio`,options:i},open:{control:`boolean`},disabled:{control:`boolean`},selected:{control:`boolean`},title:{control:`text`},level:{control:{type:`number`,min:0,max:5,step:1}}},decorators:[e=>(0,d.jsx)(`div`,{role:`tree`,children:(0,d.jsx)(e,{})})]},p={args:{type:`file`,open:!1,disabled:!1,selected:!1,title:`README.md`,level:0},render:e=>(0,d.jsx)(`div`,{className:(0,u.default)(`w-64`),children:(0,d.jsx)(r,{...e})})},m=[{label:`Enabled`},{label:`Selected`,selected:!0},{label:`Disabled`,disabled:!0}],h={parameters:{controls:{disable:!0}},render:()=>(0,d.jsx)(`div`,{className:(0,u.default)(`gap-x-2xlg gap-y-3xlg grid grid-cols-[200px_200px_200px]`),children:m.map(e=>(0,d.jsxs)(l.Fragment,{children:[(0,d.jsx)(r,{type:`folder`,title:`Item Title`,disabled:`disabled`in e?e.disabled:void 0,selected:`selected`in e?e.selected:void 0}),(0,d.jsx)(r,{type:`folder`,open:!0,title:`Item Title`,disabled:`disabled`in e?e.disabled:void 0,selected:`selected`in e?e.selected:void 0}),(0,d.jsx)(r,{type:`file`,title:`Item Title`,disabled:`disabled`in e?e.disabled:void 0,selected:`selected`in e?e.selected:void 0})]},e.label))})},g={render:()=>(0,d.jsx)(a,{})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <FileTreeItemSkeleton />
}`,...g.parameters?.docs?.source}}},_=[`Playground`,`Overview`,`Skeleton`]}))();export{h as Overview,p as Playground,g as Skeleton,_ as __namedExportsOrder,f as default};