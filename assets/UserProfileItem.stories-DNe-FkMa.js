import{n as e}from"./chunk-jRWAZmH_.js";import{Ki as t,i as n,n as r,r as i,sr as a,t as o,yr as s}from"./iframe-DrK9XSuE.js";var c,l,u,d,f,p,m,h;e((()=>{o(),a(),c=t(),l={title:`Fabian Supervision/UserProfile/UserProfileItem`,component:r,parameters:{layout:`centered`},argTypes:{kind:{control:`inline-radio`,options:i},size:{control:`inline-radio`,options:n},label:{control:`text`},disabled:{control:`boolean`}},args:{kind:`default`,size:`medium`,label:`Item Title`,disabled:!1},decorators:[e=>(0,c.jsx)(`div`,{role:`menu`,children:(0,c.jsx)(e,{})})]},u={args:{IconLeft:s}},d=[`default`,`danger`],f=[`small`,`medium`,`large`],p=[{label:`enabled (hover / active / focus me)`,disabled:!1},{label:`disabled`,disabled:!0}],m={parameters:{layout:`padded`},render:()=>(0,c.jsx)(`div`,{className:`gap-2xlg flex flex-col`,children:p.map(e=>(0,c.jsxs)(`div`,{className:`gap-sm flex flex-col`,children:[(0,c.jsx)(`div`,{className:`typography-label text-text-accent uppercase`,children:e.label}),(0,c.jsx)(`div`,{className:`gap-lg flex flex-wrap`,children:d.map(t=>f.map(n=>(0,c.jsxs)(`div`,{className:`gap-xs flex w-48 flex-col`,children:[(0,c.jsxs)(`div`,{className:`typography-label text-text-tertiary`,children:[t,` / `,n]}),(0,c.jsx)(r,{kind:t,size:n,disabled:e.disabled,label:`Item Title`,IconLeft:s})]},`${t}-${n}`)))})]},e.label))})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    IconLeft: IconSettings
  }
}`,...u.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h=[`Playground`,`Overview`]}))();export{m as Overview,u as Playground,h as __namedExportsOrder,l as default};