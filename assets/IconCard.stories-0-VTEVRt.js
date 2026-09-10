import{n as e}from"./chunk-jRWAZmH_.js";import{Ca as t,Gi as n,Mo as r,Na as i,Ni as a,Oi as o,Pi as s,ba as c,ka as l,la as u,qo as d,si as f,t as p,wa as m,zi as h}from"./iframe-ZaKetqne.js";import{n as g,t as _}from"./figmaDesign-CO6i5n9C.js";var v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N;e((()=>{p(),o(),d(),g(),v=r(),{action:y}=__STORYBOOK_MODULE_ACTIONS__,b={title:`Display & Data/Cards/IconCard`,component:f,tags:[`autodocs`],parameters:{design:_(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=4999-7980`),layout:`padded`,docs:{description:{component:`Compact navigational card with a leading icon, title, optional subtitle, and trailing chevron. Hover / active scale matches ClickableCard.`}}},argTypes:{disabled:{control:`boolean`},orientation:{control:`radio`,options:[`vertical`,`horizontal`]},interactive:{control:`boolean`}}},x=(0,v.jsx)(h,{className:`stroke-icon`,"aria-hidden":!0}),S=`stroke-icon`,C=[{icon:(0,v.jsx)(a,{className:S,"aria-hidden":!0}),title:`Accounts`,subtitle:`Balances and transactions`},{icon:(0,v.jsx)(m,{className:S,"aria-hidden":!0}),title:`Cards`,subtitle:`Manage limits and freezes`},{icon:(0,v.jsx)(t,{className:S,"aria-hidden":!0}),title:`Transfers`,subtitle:`SEPA and instant payments`},{icon:(0,v.jsx)(l,{className:S,"aria-hidden":!0}),title:`Portfolio & markets`,subtitle:`Securities and quotes`},{icon:(0,v.jsx)(i,{className:S,"aria-hidden":!0}),title:`Financing`,subtitle:`Loans and conditions`},{icon:(0,v.jsx)(n,{className:S,"aria-hidden":!0}),title:`Statements`,subtitle:`Taxes and receipts`}],w={args:{title:`Title`,subtitle:`Subtitle`,disabled:!1},render:e=>(0,v.jsx)(f,{...e,icon:x,className:`max-w-[346px]`,onClick:e=>y(`onClick`)(e)})},T=[{icon:(0,v.jsx)(s,{className:S,"aria-hidden":!0}),title:`Manage your team`,subtitle:`Invite members, assign roles, control access.`},{icon:(0,v.jsx)(u,{className:S,"aria-hidden":!0}),title:`Everything in one place`,subtitle:`Locations, customers and data under one roof, not scattered across accounts.`},{icon:(0,v.jsx)(c,{className:S,"aria-hidden":!0}),title:`Central control`,subtitle:`Branding, configuration and billing apply to the whole organization, not per user.`}],E={render:()=>(0,v.jsx)(`div`,{className:`gap-sm flex w-[448px] flex-col`,children:T.map(e=>(0,v.jsx)(f,{orientation:`horizontal`,icon:e.icon,title:e.title,subtitle:e.subtitle,onClick:e=>y(`onClick`)(e)},e.title))})},D={render:()=>(0,v.jsx)(`div`,{className:`gap-sm flex w-[448px] flex-col`,children:T.map(e=>(0,v.jsx)(f,{orientation:`horizontal`,interactive:!1,icon:e.icon,title:e.title,subtitle:e.subtitle},e.title))})},O={args:{title:`Settings`,disabled:!1},render:e=>(0,v.jsx)(f,{...e,icon:x,className:`max-w-[346px]`,onClick:e=>y(`onClick`)(e)})},k={render:()=>(0,v.jsx)(f,{href:`https://example.com`,icon:x,title:`External link`,subtitle:`Opens example.com`,className:`max-w-[346px]`,onClick:e=>y(`onClick`)(e)})},A={args:{title:`Unavailable`,subtitle:`Try again later`,disabled:!0},render:e=>(0,v.jsx)(f,{...e,icon:x,className:`max-w-[346px]`})},j={parameters:{controls:{disable:!0}},render:()=>(0,v.jsx)(`div`,{className:`gap-md flex w-full flex-wrap`,children:C.map((e,t)=>(0,v.jsx)(f,{icon:e.icon,title:e.title,subtitle:e.subtitle,className:`max-w-[346px] flex-[1_1_220px]`,onClick:e=>y(`card-${t+1}`)(e)},e.title))})},M={parameters:{controls:{disable:!0}},render:()=>(0,v.jsxs)(`div`,{className:`gap-md flex max-w-[360px] flex-col`,children:[(0,v.jsx)(f,{icon:x,title:`Title`,subtitle:`Subtitle`,onClick:e=>y(`default`)(e)}),(0,v.jsx)(f,{icon:(0,v.jsx)(h,{className:`stroke-icon`}),title:`No subtitle`,onClick:e=>y(`no subtitle`)(e)}),(0,v.jsx)(f,{icon:x,title:`Disabled`,subtitle:`Subtitle`,disabled:!0})]})},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Title",
    subtitle: "Subtitle",
    disabled: false
  },
  render: args => <IconCard {...args} icon={sampleIcon} className="max-w-[346px]" onClick={e => action("onClick")(e)} />
}`,...w.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <div className="gap-sm flex w-[448px] flex-col">
      {organizationCards.map(card => <IconCard key={card.title} orientation="horizontal" icon={card.icon} title={card.title} subtitle={card.subtitle} onClick={e => action("onClick")(e)} />)}
    </div>
}`,...E.parameters?.docs?.source},description:{story:`Icon beside the text, as in the "What is an organization?" explainer of the Design Patterns.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <div className="gap-sm flex w-[448px] flex-col">
      {organizationCards.map(card => <IconCard key={card.title} orientation="horizontal" interactive={false} icon={card.icon} title={card.title} subtitle={card.subtitle} />)}
    </div>
}`,...D.parameters?.docs?.source},description:{story:`Static explainer cards: no border, chevron or hover, as in the "What is an
organization?" dialog of the Design Patterns.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Settings",
    disabled: false
  },
  render: args => <IconCard {...args} icon={sampleIcon} className="max-w-[346px]" onClick={e => action("onClick")(e)} />
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <IconCard href="https://example.com" icon={sampleIcon} title="External link" subtitle="Opens example.com" className="max-w-[346px]" onClick={e => action("onClick")(e)} />
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Unavailable",
    subtitle: "Try again later",
    disabled: true
  },
  render: args => <IconCard {...args} icon={sampleIcon} className="max-w-[346px]" />
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="gap-md flex w-full flex-wrap">
      {groupFinanceCards.map((card, i) => <IconCard key={card.title} icon={card.icon} title={card.title} subtitle={card.subtitle} className="max-w-[346px] flex-[1_1_220px]" onClick={e => action(\`card-\${i + 1}\`)(e)} />)}
    </div>
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="gap-md flex max-w-[360px] flex-col">
      <IconCard icon={sampleIcon} title="Title" subtitle="Subtitle" onClick={e => action("default")(e)} />
      <IconCard icon={<IconSquareRounded className="stroke-icon" />} title="No subtitle" onClick={e => action("no subtitle")(e)} />
      <IconCard icon={sampleIcon} title="Disabled" subtitle="Subtitle" disabled />
    </div>
}`,...M.parameters?.docs?.source}}},N=[`Playground`,`Horizontal`,`HorizontalStatic`,`WithoutSubtitle`,`AsLink`,`Disabled`,`Group`,`Overview`]}))();export{k as AsLink,A as Disabled,j as Group,E as Horizontal,D as HorizontalStatic,M as Overview,w as Playground,O as WithoutSubtitle,N as __namedExportsOrder,b as default};