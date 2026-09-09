import{n as e}from"./chunk-jRWAZmH_.js";import{Di as t,Ei as n,Io as r,Ni as i,Oi as a,Ri as o,Sa as s,Si as c,ba as l,da as u,ha as d,ma as f,ni as p,t as m,xo as h}from"./iframe-DZC8GE3v.js";var g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j;e((()=>{m(),c(),r(),g=h(),{action:_}=__STORYBOOK_MODULE_ACTIONS__,v={title:`Display & Data/Cards/IconCard`,component:p,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`Compact navigational card with a leading icon, title, optional subtitle, and trailing chevron. Hover / active scale matches ClickableCard.`}}},argTypes:{disabled:{control:`boolean`},orientation:{control:`radio`,options:[`vertical`,`horizontal`]},interactive:{control:`boolean`}}},y=(0,g.jsx)(i,{className:`stroke-icon`,"aria-hidden":!0}),b=`stroke-icon`,x=[{icon:(0,g.jsx)(t,{className:b,"aria-hidden":!0}),title:`Accounts`,subtitle:`Balances and transactions`},{icon:(0,g.jsx)(d,{className:b,"aria-hidden":!0}),title:`Cards`,subtitle:`Manage limits and freezes`},{icon:(0,g.jsx)(f,{className:b,"aria-hidden":!0}),title:`Transfers`,subtitle:`SEPA and instant payments`},{icon:(0,g.jsx)(l,{className:b,"aria-hidden":!0}),title:`Portfolio & markets`,subtitle:`Securities and quotes`},{icon:(0,g.jsx)(s,{className:b,"aria-hidden":!0}),title:`Financing`,subtitle:`Loans and conditions`},{icon:(0,g.jsx)(o,{className:b,"aria-hidden":!0}),title:`Statements`,subtitle:`Taxes and receipts`}],S={args:{title:`Title`,subtitle:`Subtitle`,disabled:!1},render:e=>(0,g.jsx)(p,{...e,icon:y,className:`max-w-[346px]`,onClick:e=>_(`onClick`)(e)})},C=[{icon:(0,g.jsx)(a,{className:b,"aria-hidden":!0}),title:`Manage your team`,subtitle:`Invite members, assign roles, control access.`},{icon:(0,g.jsx)(n,{className:b,"aria-hidden":!0}),title:`Everything in one place`,subtitle:`Locations, customers and data under one roof, not scattered across accounts.`},{icon:(0,g.jsx)(u,{className:b,"aria-hidden":!0}),title:`Central control`,subtitle:`Branding, configuration and billing apply to the whole organization, not per user.`}],w={render:()=>(0,g.jsx)(`div`,{className:`gap-sm flex w-[448px] flex-col`,children:C.map(e=>(0,g.jsx)(p,{orientation:`horizontal`,icon:e.icon,title:e.title,subtitle:e.subtitle,onClick:e=>_(`onClick`)(e)},e.title))})},T={render:()=>(0,g.jsx)(`div`,{className:`gap-sm flex w-[448px] flex-col`,children:C.map(e=>(0,g.jsx)(p,{orientation:`horizontal`,interactive:!1,icon:e.icon,title:e.title,subtitle:e.subtitle},e.title))})},E={args:{title:`Settings`,disabled:!1},render:e=>(0,g.jsx)(p,{...e,icon:y,className:`max-w-[346px]`,onClick:e=>_(`onClick`)(e)})},D={render:()=>(0,g.jsx)(p,{href:`https://example.com`,icon:y,title:`External link`,subtitle:`Opens example.com`,className:`max-w-[346px]`,onClick:e=>_(`onClick`)(e)})},O={args:{title:`Unavailable`,subtitle:`Try again later`,disabled:!0},render:e=>(0,g.jsx)(p,{...e,icon:y,className:`max-w-[346px]`})},k={parameters:{controls:{disable:!0}},render:()=>(0,g.jsx)(`div`,{className:`gap-md flex w-full flex-wrap`,children:x.map((e,t)=>(0,g.jsx)(p,{icon:e.icon,title:e.title,subtitle:e.subtitle,className:`max-w-[346px] flex-[1_1_220px]`,onClick:e=>_(`card-${t+1}`)(e)},e.title))})},A={parameters:{controls:{disable:!0}},render:()=>(0,g.jsxs)(`div`,{className:`gap-md flex max-w-[360px] flex-col`,children:[(0,g.jsx)(p,{icon:y,title:`Title`,subtitle:`Subtitle`,onClick:e=>_(`default`)(e)}),(0,g.jsx)(p,{icon:(0,g.jsx)(i,{className:`stroke-icon`}),title:`No subtitle`,onClick:e=>_(`no subtitle`)(e)}),(0,g.jsx)(p,{icon:y,title:`Disabled`,subtitle:`Subtitle`,disabled:!0})]})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Title",
    subtitle: "Subtitle",
    disabled: false
  },
  render: args => <IconCard {...args} icon={sampleIcon} className="max-w-[346px]" onClick={e => action("onClick")(e)} />
}`,...S.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <div className="gap-sm flex w-[448px] flex-col">
      {organizationCards.map(card => <IconCard key={card.title} orientation="horizontal" icon={card.icon} title={card.title} subtitle={card.subtitle} onClick={e => action("onClick")(e)} />)}
    </div>
}`,...w.parameters?.docs?.source},description:{story:`Icon beside the text, as in the "What is an organization?" explainer of the Design Patterns.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <div className="gap-sm flex w-[448px] flex-col">
      {organizationCards.map(card => <IconCard key={card.title} orientation="horizontal" interactive={false} icon={card.icon} title={card.title} subtitle={card.subtitle} />)}
    </div>
}`,...T.parameters?.docs?.source},description:{story:`Static explainer cards: no border, chevron or hover, as in the "What is an
organization?" dialog of the Design Patterns.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Settings",
    disabled: false
  },
  render: args => <IconCard {...args} icon={sampleIcon} className="max-w-[346px]" onClick={e => action("onClick")(e)} />
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <IconCard href="https://example.com" icon={sampleIcon} title="External link" subtitle="Opens example.com" className="max-w-[346px]" onClick={e => action("onClick")(e)} />
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Unavailable",
    subtitle: "Try again later",
    disabled: true
  },
  render: args => <IconCard {...args} icon={sampleIcon} className="max-w-[346px]" />
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="gap-md flex w-full flex-wrap">
      {groupFinanceCards.map((card, i) => <IconCard key={card.title} icon={card.icon} title={card.title} subtitle={card.subtitle} className="max-w-[346px] flex-[1_1_220px]" onClick={e => action(\`card-\${i + 1}\`)(e)} />)}
    </div>
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j=[`Playground`,`Horizontal`,`HorizontalStatic`,`WithoutSubtitle`,`AsLink`,`Disabled`,`Group`,`Overview`]}))();export{D as AsLink,O as Disabled,k as Group,w as Horizontal,T as HorizontalStatic,A as Overview,S as Playground,E as WithoutSubtitle,j as __namedExportsOrder,v as default};