import{n as e}from"./chunk-jRWAZmH_.js";import{Di as t,Jn as n,Zn as r,a as i,i as a,nr as o,o as s,t as c}from"./iframe-Dox94nfK.js";var l,u,d,f,p,m,h,g;e((()=>{c(),n(),l=t(),u={title:`Hendrik Supervision/ContextMenu/ContextMenuListItem`,component:a,parameters:{layout:`centered`},argTypes:{kind:{control:`inline-radio`,options:i},size:{control:`inline-radio`,options:s},label:{control:`text`},shortcut:{control:`text`},disabled:{control:`boolean`}},args:{kind:`default`,size:`medium`,label:`Item Title`,shortcut:`⌘M`,disabled:!1},decorators:[e=>(0,l.jsx)(`div`,{role:`menu`,children:(0,l.jsx)(e,{})})]},d={args:{IconLeft:o}},f=[`default`,`danger`],p=[`small`,`medium`,`large`],m=[{label:`enabled (hover / active / focus me)`,disabled:!1},{label:`disabled`,disabled:!0}],h={parameters:{layout:`padded`},render:()=>(0,l.jsx)(`div`,{className:`gap-2xlg flex flex-col`,children:m.map(e=>(0,l.jsxs)(`div`,{className:`gap-sm flex flex-col`,children:[(0,l.jsx)(`div`,{className:`typography-label text-text-accent uppercase`,children:e.label}),(0,l.jsx)(`div`,{className:`gap-lg flex flex-wrap`,children:f.map(t=>p.map(n=>(0,l.jsxs)(`div`,{className:`gap-xs flex w-48 flex-col`,children:[(0,l.jsxs)(`div`,{className:`typography-label text-text-tertiary`,children:[t,` / `,n]}),(0,l.jsx)(a,{kind:t,size:n,disabled:e.disabled,label:`Item Title`,shortcut:`⌘M`,IconLeft:o,IconRight:r})]},`${t}-${n}`)))})]},e.label))})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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