import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{R as p}from"./index-CY-HDqYb.js";import{c as m}from"./index-A6zbrgSY.js";import{al as b,am as d}from"./ContextMenu-CkvOQcf9.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";const I={title:"WIP Components/FileTree/FileTreeItem",component:d,argTypes:{type:{control:"inline-radio",options:b},open:{control:"boolean"},disabled:{control:"boolean"},selected:{control:"boolean"},title:{control:"text"},level:{control:{type:"number",min:0,max:5,step:1}}}},t={args:{type:"file",open:!1,disabled:!1,selected:!1,title:"README.md",level:0},render:e=>l.jsx("div",{className:m("w-64"),children:l.jsx(d,{...e})})},x=[{label:"Enabled"},{label:"Selected",selected:!0},{label:"Disabled",disabled:!0}],s={parameters:{controls:{disable:!0}},render:()=>l.jsx("div",{className:m("grid grid-cols-[200px_200px_200px] gap-x-2xlg gap-y-3xlg"),children:x.map(e=>l.jsxs(p.Fragment,{children:[l.jsx(d,{type:"folder",title:"Item Title",disabled:"disabled"in e?e.disabled:void 0,selected:"selected"in e?e.selected:void 0}),l.jsx(d,{type:"folder",open:!0,title:"Item Title",disabled:"disabled"in e?e.disabled:void 0,selected:"selected"in e?e.selected:void 0}),l.jsx(d,{type:"file",title:"Item Title",disabled:"disabled"in e?e.disabled:void 0,selected:"selected"in e?e.selected:void 0})]},e.label))})};var i,a,r;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(r=(a=t.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};var n,o,c;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className={cx("grid grid-cols-[200px_200px_200px] gap-x-2xlg gap-y-3xlg")}>
      {OverviewRows.map(row => <React.Fragment key={row.label}>
          <FileTreeItem type="folder" title="Item Title" disabled={"disabled" in row ? row.disabled : undefined} selected={"selected" in row ? row.selected : undefined} />
          <FileTreeItem type="folder" open title="Item Title" disabled={"disabled" in row ? row.disabled : undefined} selected={"selected" in row ? row.selected : undefined} />
          <FileTreeItem type="file" title="Item Title" disabled={"disabled" in row ? row.disabled : undefined} selected={"selected" in row ? row.selected : undefined} />
        </React.Fragment>)}
    </div>
}`,...(c=(o=s.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};const F=["Playground","Overview"];export{s as Overview,t as Playground,F as __namedExportsOrder,I as default};
