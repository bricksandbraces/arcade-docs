import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{y as u,z as g,t as p,E as x,F as f}from"./ContextMenu-DwPyJibk.js";import"./index-CY-HDqYb.js";import"./index-A6zbrgSY.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";const z={title:"Fabian Supervision/ContextMenu/ContextMenuListItem",component:p,parameters:{layout:"centered"},argTypes:{kind:{control:"inline-radio",options:g},size:{control:"inline-radio",options:u},label:{control:"text"},shortcut:{control:"text"},disabled:{control:"boolean"}},args:{kind:"default",size:"medium",label:"Item Title",shortcut:"⌘M",disabled:!1}},a={args:{IconLeft:x}},b=["default","danger"],v=["small","medium","large"],h=[{label:"enabled (hover / active / focus me)",disabled:!1},{label:"disabled",disabled:!0}],t={parameters:{layout:"padded"},render:()=>e.jsx("div",{className:"gap-2xlg flex flex-col",children:h.map(s=>e.jsxs("div",{className:"gap-sm flex flex-col",children:[e.jsx("div",{className:"typography-label text-text-accent uppercase",children:s.label}),e.jsx("div",{className:"gap-lg flex flex-wrap",children:b.map(l=>v.map(n=>e.jsxs("div",{className:"gap-xs flex w-48 flex-col",children:[e.jsxs("div",{className:"typography-label text-text-tertiary",children:[l," / ",n]}),e.jsx(p,{kind:l,size:n,disabled:s.disabled,label:"Item Title",shortcut:"⌘M",IconLeft:x,IconRight:f})]},`${l}-${n}`)))})]},s.label))})};var r,o,i;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    IconLeft: IconSquareRounded
  }
}`,...(i=(o=a.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var d,c,m;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  parameters: {
    layout: "padded"
  },
  render: () => <div className="gap-2xlg flex flex-col">
      {rows.map(row => <div key={row.label} className="gap-sm flex flex-col">
          <div className="typography-label text-text-accent uppercase">
            {row.label}
          </div>
          <div className="gap-lg flex flex-wrap">
            {kinds.map(kind => sizes.map(size => <div key={\`\${kind}-\${size}\`} className="gap-xs flex w-48 flex-col">
                  <div className="typography-label text-text-tertiary">
                    {kind} / {size}
                  </div>
                  <ContextMenuListItem kind={kind} size={size} disabled={row.disabled} label="Item Title" shortcut="⌘M" IconLeft={IconSquareRounded} IconRight={IconCaretRightFilled} />
                </div>))}
          </div>
        </div>)}
    </div>
}`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const L=["Playground","Overview"];export{t as Overview,a as Playground,L as __namedExportsOrder,z as default};
