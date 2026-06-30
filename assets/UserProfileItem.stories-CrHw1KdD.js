import{n as e}from"./chunk-jRWAZmH_.js";import{i as t,ki as n,n as r,r as i,so as a,t as o,ui as s,wi as c}from"./iframe-DcYUiA4y.js";var l,u,d,f,p,m,h,g,_;e((()=>{o(),s(),l=a(),u={title:`Display & Data/UserProfile/UserProfileItem`,component:r,tags:[`autodocs`],parameters:{layout:`centered`},argTypes:{kind:{control:`inline-radio`,options:i},size:{control:`inline-radio`,options:t},label:{control:`text`},disabled:{control:`boolean`},toggle:{control:`boolean`},selected:{control:`boolean`}},args:{kind:`default`,size:`medium`,label:`Item Title`,disabled:!1,toggle:!1,selected:!1},decorators:[e=>(0,l.jsx)(`div`,{role:`menu`,children:(0,l.jsx)(e,{})})]},d={args:{IconLeft:c}},f={args:{toggle:!0,selected:!0,label:`Dark mode`,IconLeft:n}},p=[`default`,`danger`],m=[`small`,`medium`,`large`],h=[{label:`enabled (hover / active / focus me)`,disabled:!1},{label:`disabled`,disabled:!0}],g={parameters:{layout:`padded`},render:()=>(0,l.jsx)(`div`,{className:`gap-2xlg flex flex-col`,children:h.map(e=>(0,l.jsxs)(`div`,{className:`gap-sm flex flex-col`,children:[(0,l.jsx)(`div`,{className:`typography-label text-text-accent uppercase`,children:e.label}),(0,l.jsx)(`div`,{className:`gap-lg flex flex-wrap`,children:p.map(t=>m.map(n=>(0,l.jsxs)(`div`,{className:`gap-xs flex w-48 flex-col`,children:[(0,l.jsxs)(`div`,{className:`typography-label text-text-tertiary`,children:[t,` / `,n]}),(0,l.jsx)(r,{kind:t,size:n,disabled:e.disabled,label:`Item Title`,IconLeft:c})]},`${t}-${n}`)))})]},e.label))})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    IconLeft: IconSettings
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    toggle: true,
    selected: true,
    label: "Dark mode",
    IconLeft: IconMoon
  }
}`,...f.parameters?.docs?.source},description:{story:`Toggle variant: the whole row is a checkable control
(\`role="menuitemcheckbox"\`) with a trailing presentational switch — used e.g.
for a "Dark mode" item in the account menu.`,...f.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_=[`Playground`,`WithToggle`,`Overview`]}))();export{g as Overview,d as Playground,f as WithToggle,_ as __namedExportsOrder,u as default};