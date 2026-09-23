import{n as e}from"./chunk-jRWAZmH_.js";import{ba as t,fa as n,g as r,h as i,i as a,la as o,m as s,ys as c}from"./iframe-B0pzHJei.js";import{n as l,t as u}from"./figmaDesign-CO6i5n9C.js";var d,f,p,m,h,g,_,v;e((()=>{a(),o(),l(),d=c(),f={title:`Overlays & Menus/ContextMenu/ContextMenuListItem`,component:s,tags:[`autodocs`],parameters:{design:u(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=3861-205`),layout:`centered`},argTypes:{kind:{control:`inline-radio`,options:i},size:{control:`inline-radio`,options:r},label:{control:`text`},shortcut:{control:`text`},disabled:{control:`boolean`}},args:{kind:`default`,size:`medium`,label:`Item Title`,shortcut:`⌘M`,disabled:!1},decorators:[e=>(0,d.jsx)(`div`,{role:`menu`,children:(0,d.jsx)(e,{})})]},p={args:{IconLeft:t}},m=[`default`,`danger`],h=[`small`,`medium`,`large`],g=[{label:`enabled (hover / active / focus me)`,disabled:!1},{label:`disabled`,disabled:!0}],_={parameters:{layout:`padded`},render:()=>(0,d.jsx)(`div`,{className:`gap-2xlg flex flex-col`,children:g.map(e=>(0,d.jsxs)(`div`,{className:`gap-sm flex flex-col`,children:[(0,d.jsx)(`div`,{className:`typography-label text-text-accent uppercase`,children:e.label}),(0,d.jsx)(`div`,{className:`gap-lg flex flex-wrap`,children:m.map(r=>h.map(i=>(0,d.jsxs)(`div`,{className:`gap-xs flex w-48 flex-col`,children:[(0,d.jsxs)(`div`,{className:`typography-label text-text-tertiary`,children:[r,` / `,i]}),(0,d.jsx)(s,{kind:r,size:i,disabled:e.disabled,label:`Item Title`,shortcut:`⌘M`,IconLeft:t,IconRight:n})]},`${r}-${i}`)))})]},e.label))})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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