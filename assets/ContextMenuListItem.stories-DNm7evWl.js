import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{E as u,F as g,t as p,G as x,H as f}from"./ContextMenu-D_7vNk0Q.js";import"./index-CY-HDqYb.js";import"./index-A6zbrgSY.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";const L={title:"Fabian Supervision/ContextMenu/ContextMenuListItem",component:p,parameters:{layout:"centered"},argTypes:{kind:{control:"inline-radio",options:g},size:{control:"inline-radio",options:u},label:{control:"text"},shortcut:{control:"text"},disabled:{control:"boolean"}},args:{kind:"default",size:"medium",label:"Item Title",shortcut:"⌘M",disabled:!1}},a={args:{IconLeft:x}},b=["default","danger"],v=["small","medium","large"],h=[{label:"enabled (hover / active / focus me)",disabled:!1},{label:"disabled",disabled:!0}],t={parameters:{layout:"padded"},render:()=>e.jsx("div",{className:"flex flex-col gap-2xlg",children:h.map(s=>e.jsxs("div",{className:"flex flex-col gap-sm",children:[e.jsx("div",{className:"typography-label text-text-accent uppercase",children:s.label}),e.jsx("div",{className:"flex flex-wrap gap-lg",children:b.map(l=>v.map(n=>e.jsxs("div",{className:"flex w-48 flex-col gap-xs",children:[e.jsxs("div",{className:"typography-label text-text-tertiary",children:[l," / ",n]}),e.jsx(p,{kind:l,size:n,disabled:s.disabled,label:"Item Title",shortcut:"⌘M",IconLeft:x,IconRight:f})]},`${l}-${n}`)))})]},s.label))})};var r,o,i;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    IconLeft: IconSquareRounded
  }
}`,...(i=(o=a.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var d,c,m;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  parameters: {
    layout: "padded"
  },
  render: () => <div className="flex flex-col gap-2xlg">
      {rows.map(row => <div key={row.label} className="flex flex-col gap-sm">
          <div className="typography-label text-text-accent uppercase">
            {row.label}
          </div>
          <div className="flex flex-wrap gap-lg">
            {kinds.map(kind => sizes.map(size => <div key={\`\${kind}-\${size}\`} className="flex w-48 flex-col gap-xs">
                  <div className="typography-label text-text-tertiary">
                    {kind} / {size}
                  </div>
                  <ContextMenuListItem kind={kind} size={size} disabled={row.disabled} label="Item Title" shortcut="⌘M" IconLeft={IconSquareRounded} IconRight={IconCaretRightFilled} />
                </div>))}
          </div>
        </div>)}
    </div>
}`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const M=["Playground","Overview"];export{t as Overview,a as Playground,M as __namedExportsOrder,L as default};
