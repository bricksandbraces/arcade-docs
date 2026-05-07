import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Gt as n,Ki as r,Wt as i,ji as a,sa as o,t as s}from"./iframe-Bg00cy7E.js";var c,l,u,d,f,p,m,h;e((()=>{c=t(o(),1),l=t(a(),1),s(),u=r(),d={title:`Components/FileTree/FileTreeItem`,component:i,argTypes:{type:{control:`inline-radio`,options:n},open:{control:`boolean`},disabled:{control:`boolean`},selected:{control:`boolean`},title:{control:`text`},level:{control:{type:`number`,min:0,max:5,step:1}}},decorators:[e=>(0,u.jsx)(`div`,{role:`tree`,children:(0,u.jsx)(e,{})})]},f={args:{type:`file`,open:!1,disabled:!1,selected:!1,title:`README.md`,level:0},render:e=>(0,u.jsx)(`div`,{className:(0,l.default)(`w-64`),children:(0,u.jsx)(i,{...e})})},p=[{label:`Enabled`},{label:`Selected`,selected:!0},{label:`Disabled`,disabled:!0}],m={parameters:{controls:{disable:!0}},render:()=>(0,u.jsx)(`div`,{className:(0,l.default)(`gap-x-2xlg gap-y-3xlg grid grid-cols-[200px_200px_200px]`),children:p.map(e=>(0,u.jsxs)(c.Fragment,{children:[(0,u.jsx)(i,{type:`folder`,title:`Item Title`,disabled:`disabled`in e?e.disabled:void 0,selected:`selected`in e?e.selected:void 0}),(0,u.jsx)(i,{type:`folder`,open:!0,title:`Item Title`,disabled:`disabled`in e?e.disabled:void 0,selected:`selected`in e?e.selected:void 0}),(0,u.jsx)(i,{type:`file`,title:`Item Title`,disabled:`disabled`in e?e.disabled:void 0,selected:`selected`in e?e.selected:void 0})]},e.label))})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h=[`Playground`,`Overview`]}))();export{m as Overview,f as Playground,h as __namedExportsOrder,d as default};