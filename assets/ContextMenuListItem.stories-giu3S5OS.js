import{n as e}from"./chunk-jRWAZmH_.js";import{_r as t,cr as n,d as r,dr as i,f as a,p as o,qi as s,t as c}from"./iframe-a1F-ymSa.js";var l,u,d,f,p,m,h,g;e((()=>{c(),n(),l=s(),u={title:`Fabian Supervision/ContextMenu/ContextMenuListItem`,component:r,parameters:{layout:`centered`},argTypes:{kind:{control:`inline-radio`,options:a},size:{control:`inline-radio`,options:o},label:{control:`text`},shortcut:{control:`text`},disabled:{control:`boolean`}},args:{kind:`default`,size:`medium`,label:`Item Title`,shortcut:`⌘M`,disabled:!1},decorators:[e=>(0,l.jsx)(`div`,{role:`menu`,children:(0,l.jsx)(e,{})})]},d={args:{IconLeft:t}},f=[`default`,`danger`],p=[`small`,`medium`,`large`],m=[{label:`enabled (hover / active / focus me)`,disabled:!1},{label:`disabled`,disabled:!0}],h={parameters:{layout:`padded`},render:()=>(0,l.jsx)(`div`,{className:`gap-2xlg flex flex-col`,children:m.map(e=>(0,l.jsxs)(`div`,{className:`gap-sm flex flex-col`,children:[(0,l.jsx)(`div`,{className:`typography-label text-text-accent uppercase`,children:e.label}),(0,l.jsx)(`div`,{className:`gap-lg flex flex-wrap`,children:f.map(n=>p.map(a=>(0,l.jsxs)(`div`,{className:`gap-xs flex w-48 flex-col`,children:[(0,l.jsxs)(`div`,{className:`typography-label text-text-tertiary`,children:[n,` / `,a]}),(0,l.jsx)(r,{kind:n,size:a,disabled:e.disabled,label:`Item Title`,shortcut:`⌘M`,IconLeft:t,IconRight:i})]},`${n}-${a}`)))})]},e.label))})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    IconLeft: IconSquareRounded
  }
}`,...d.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g=[`Playground`,`Overview`]}))();export{h as Overview,d as Playground,g as __namedExportsOrder,u as default};