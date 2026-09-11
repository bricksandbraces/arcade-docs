import{n as e}from"./chunk-jRWAZmH_.js";import{$o as t,Ji as n,Zi as r,aa as i,d as a,f as o,p as s,t as c}from"./iframe-DnqdKyL2.js";import{n as l,t as u}from"./figmaDesign-CO6i5n9C.js";var d,f,p,m,h,g,_,v;e((()=>{c(),n(),l(),d=t(),f={title:`Overlays & Menus/ContextMenu/ContextMenuListItem`,component:a,tags:[`autodocs`],parameters:{design:u(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=3861-205`),layout:`centered`},argTypes:{kind:{control:`inline-radio`,options:o},size:{control:`inline-radio`,options:s},label:{control:`text`},shortcut:{control:`text`},disabled:{control:`boolean`}},args:{kind:`default`,size:`medium`,label:`Item Title`,shortcut:`⌘M`,disabled:!1},decorators:[e=>(0,d.jsx)(`div`,{role:`menu`,children:(0,d.jsx)(e,{})})]},p={args:{IconLeft:i}},m=[`default`,`danger`],h=[`small`,`medium`,`large`],g=[{label:`enabled (hover / active / focus me)`,disabled:!1},{label:`disabled`,disabled:!0}],_={parameters:{layout:`padded`},render:()=>(0,d.jsx)(`div`,{className:`gap-2xlg flex flex-col`,children:g.map(e=>(0,d.jsxs)(`div`,{className:`gap-sm flex flex-col`,children:[(0,d.jsx)(`div`,{className:`typography-label text-text-accent uppercase`,children:e.label}),(0,d.jsx)(`div`,{className:`gap-lg flex flex-wrap`,children:m.map(t=>h.map(n=>(0,d.jsxs)(`div`,{className:`gap-xs flex w-48 flex-col`,children:[(0,d.jsxs)(`div`,{className:`typography-label text-text-tertiary`,children:[t,` / `,n]}),(0,d.jsx)(a,{kind:t,size:n,disabled:e.disabled,label:`Item Title`,shortcut:`⌘M`,IconLeft:i,IconRight:r})]},`${t}-${n}`)))})]},e.label))})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    IconLeft: IconSquareRounded
  }
}`,...p.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v=[`Playground`,`Overview`]}))();export{_ as Overview,p as Playground,v as __namedExportsOrder,f as default};