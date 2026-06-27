import{n as e}from"./chunk-jRWAZmH_.js";import{Si as t,ci as n,i as r,io as i,n as a,r as o,t as s}from"./iframe-CkRnWzZw.js";var c,l,u,d,f,p,m,h;e((()=>{s(),n(),c=i(),l={title:`Display & Data/UserProfile/UserProfileItem`,component:a,tags:[`autodocs`],parameters:{layout:`centered`},argTypes:{kind:{control:`inline-radio`,options:o},size:{control:`inline-radio`,options:r},label:{control:`text`},disabled:{control:`boolean`}},args:{kind:`default`,size:`medium`,label:`Item Title`,disabled:!1},decorators:[e=>(0,c.jsx)(`div`,{role:`menu`,children:(0,c.jsx)(e,{})})]},u={args:{IconLeft:t}},d=[`default`,`danger`],f=[`small`,`medium`,`large`],p=[{label:`enabled (hover / active / focus me)`,disabled:!1},{label:`disabled`,disabled:!0}],m={parameters:{layout:`padded`},render:()=>(0,c.jsx)(`div`,{className:`gap-2xlg flex flex-col`,children:p.map(e=>(0,c.jsxs)(`div`,{className:`gap-sm flex flex-col`,children:[(0,c.jsx)(`div`,{className:`typography-label text-text-accent uppercase`,children:e.label}),(0,c.jsx)(`div`,{className:`gap-lg flex flex-wrap`,children:d.map(n=>f.map(r=>(0,c.jsxs)(`div`,{className:`gap-xs flex w-48 flex-col`,children:[(0,c.jsxs)(`div`,{className:`typography-label text-text-tertiary`,children:[n,` / `,r]}),(0,c.jsx)(a,{kind:n,size:r,disabled:e.disabled,label:`Item Title`,IconLeft:t})]},`${n}-${r}`)))})]},e.label))})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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