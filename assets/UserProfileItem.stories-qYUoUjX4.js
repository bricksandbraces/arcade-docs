import{n as e}from"./chunk-jRWAZmH_.js";import{Aa as t,Ca as n,Qa as r,a as i,ca as a,i as o,o as s,s as c,vs as l}from"./iframe-vatATh5Q.js";import{n as u,t as d}from"./figmaDesign-CO6i5n9C.js";var f,p,m,h,g,_,v,y,b,x;e((()=>{o(),a(),u(),f=l(),p={title:`Display & Data/UserProfile/UserProfileItem`,component:i,tags:[`autodocs`],parameters:{design:d(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=4717-3860`),layout:`centered`},argTypes:{kind:{control:`inline-radio`,options:s},size:{control:`inline-radio`,options:c},label:{control:`text`},disabled:{control:`boolean`},toggle:{control:`boolean`},selected:{control:`boolean`},href:{control:`text`}},args:{kind:`default`,size:`medium`,label:`Item Title`,disabled:!1,toggle:!1,selected:!1},decorators:[e=>(0,f.jsx)(`div`,{role:`menu`,children:(0,f.jsx)(e,{})})]},m={args:{IconLeft:n}},h={args:{toggle:!0,selected:!0,label:`Dark mode`,IconLeft:t}},g={args:{label:`Open documentation`,href:`https://example.com`,IconLeft:r}},_=[`default`,`danger`],v=[`small`,`medium`,`large`],y=[{label:`enabled (hover / active / focus me)`,disabled:!1},{label:`disabled`,disabled:!0}],b={parameters:{layout:`padded`},render:()=>(0,f.jsx)(`div`,{className:`gap-2xlg flex flex-col`,children:y.map(e=>(0,f.jsxs)(`div`,{className:`gap-sm flex flex-col`,children:[(0,f.jsx)(`div`,{className:`typography-label text-text-accent uppercase`,children:e.label}),(0,f.jsx)(`div`,{className:`gap-lg flex flex-wrap`,children:_.map(t=>v.map(r=>(0,f.jsxs)(`div`,{className:`gap-xs flex w-48 flex-col`,children:[(0,f.jsxs)(`div`,{className:`typography-label text-text-tertiary`,children:[t,` / `,r]}),(0,f.jsx)(i,{kind:t,size:r,disabled:e.disabled,label:`Item Title`,IconLeft:n})]},`${t}-${r}`)))})]},e.label))})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    IconLeft: IconSettings
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    toggle: true,
    selected: true,
    label: "Dark mode",
    IconLeft: IconMoon
  }
}`,...h.parameters?.docs?.source},description:{story:`Toggle variant: the whole row is a checkable control
(\`role="menuitemcheckbox"\`) with a trailing presentational switch - used e.g.
for a "Dark mode" item in the account menu.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Open documentation",
    href: "https://example.com",
    IconLeft: IconExternalLink
  }
}`,...g.parameters?.docs?.source},description:{story:'Link variant: pass an `href` (optionally with a framework `linkComponent`\nsuch as `next/link`) to render the row as an anchor. Consumers get real link\nsemantics - prefetching, middle-/cmd-click and "open in new tab" - while\n`onClick` still fires. Omit `href` to keep a plain button.',...g.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x=[`Playground`,`WithToggle`,`AsLink`,`Overview`]}))();export{g as AsLink,b as Overview,m as Playground,h as WithToggle,x as __namedExportsOrder,p as default};