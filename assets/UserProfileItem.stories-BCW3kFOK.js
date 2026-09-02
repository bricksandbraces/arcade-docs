import{n as e}from"./chunk-jRWAZmH_.js";import{Bi as t,Fi as n,aa as r,i,n as a,r as o,t as s,vo as c,xi as l}from"./iframe-Bu5mwsKt.js";var u,d,f,p,m,h,g,_,v,y;e((()=>{s(),l(),u=c(),d={title:`Display & Data/UserProfile/UserProfileItem`,component:a,tags:[`autodocs`],parameters:{layout:`centered`},argTypes:{kind:{control:`inline-radio`,options:o},size:{control:`inline-radio`,options:i},label:{control:`text`},disabled:{control:`boolean`},toggle:{control:`boolean`},selected:{control:`boolean`},href:{control:`text`}},args:{kind:`default`,size:`medium`,label:`Item Title`,disabled:!1,toggle:!1,selected:!1},decorators:[e=>(0,u.jsx)(`div`,{role:`menu`,children:(0,u.jsx)(e,{})})]},f={args:{IconLeft:n}},p={args:{toggle:!0,selected:!0,label:`Dark mode`,IconLeft:t}},m={args:{label:`Open documentation`,href:`https://example.com`,IconLeft:r}},h=[`default`,`danger`],g=[`small`,`medium`,`large`],_=[{label:`enabled (hover / active / focus me)`,disabled:!1},{label:`disabled`,disabled:!0}],v={parameters:{layout:`padded`},render:()=>(0,u.jsx)(`div`,{className:`gap-2xlg flex flex-col`,children:_.map(e=>(0,u.jsxs)(`div`,{className:`gap-sm flex flex-col`,children:[(0,u.jsx)(`div`,{className:`typography-label text-text-accent uppercase`,children:e.label}),(0,u.jsx)(`div`,{className:`gap-lg flex flex-wrap`,children:h.map(t=>g.map(r=>(0,u.jsxs)(`div`,{className:`gap-xs flex w-48 flex-col`,children:[(0,u.jsxs)(`div`,{className:`typography-label text-text-tertiary`,children:[t,` / `,r]}),(0,u.jsx)(a,{kind:t,size:r,disabled:e.disabled,label:`Item Title`,IconLeft:n})]},`${t}-${r}`)))})]},e.label))})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    IconLeft: IconSettings
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    toggle: true,
    selected: true,
    label: "Dark mode",
    IconLeft: IconMoon
  }
}`,...p.parameters?.docs?.source},description:{story:`Toggle variant: the whole row is a checkable control
(\`role="menuitemcheckbox"\`) with a trailing presentational switch — used e.g.
for a "Dark mode" item in the account menu.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Open documentation",
    href: "https://example.com",
    IconLeft: IconExternalLink
  }
}`,...m.parameters?.docs?.source},description:{story:'Link variant: pass an `href` (optionally with a framework `linkComponent`\nsuch as `next/link`) to render the row as an anchor. Consumers get real link\nsemantics — prefetching, middle-/cmd-click and "open in new tab" — while\n`onClick` still fires. Omit `href` to keep a plain button.',...m.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
                  <UserProfileItem kind={kind} size={size} disabled={row.disabled} label="Item Title" IconLeft={IconSettings} />
                </div>))}
          </div>
        </div>)}
    </div>
}`,...v.parameters?.docs?.source}}},y=[`Playground`,`WithToggle`,`AsLink`,`Overview`]}))();export{m as AsLink,v as Overview,f as Playground,p as WithToggle,y as __namedExportsOrder,d as default};