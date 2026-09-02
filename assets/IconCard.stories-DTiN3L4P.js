import{n as e}from"./chunk-jRWAZmH_.js";import{Ei as t,Li as n,Mi as r,Po as i,ba as a,fa as o,pa as s,t as c,ti as l,va as u,xi as d,yo as f}from"./iframe-BXRL_JkN.js";var p,m,h,g,_,v,y,b,x,S,C,w,T;e((()=>{c(),d(),i(),p=f(),{action:m}=__STORYBOOK_MODULE_ACTIONS__,h={title:`Display & Data/Cards/IconCard`,component:l,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`Compact navigational card with a leading icon, title, optional subtitle, and trailing chevron. Hover / active scale matches ClickableCard.`}}},argTypes:{disabled:{control:`boolean`}}},g=(0,p.jsx)(r,{className:`stroke-icon`,"aria-hidden":!0}),_=`stroke-icon`,v=[{icon:(0,p.jsx)(t,{className:_,"aria-hidden":!0}),title:`Accounts`,subtitle:`Balances and transactions`},{icon:(0,p.jsx)(s,{className:_,"aria-hidden":!0}),title:`Cards`,subtitle:`Manage limits and freezes`},{icon:(0,p.jsx)(o,{className:_,"aria-hidden":!0}),title:`Transfers`,subtitle:`SEPA and instant payments`},{icon:(0,p.jsx)(u,{className:_,"aria-hidden":!0}),title:`Portfolio & markets`,subtitle:`Securities and quotes`},{icon:(0,p.jsx)(a,{className:_,"aria-hidden":!0}),title:`Financing`,subtitle:`Loans and conditions`},{icon:(0,p.jsx)(n,{className:_,"aria-hidden":!0}),title:`Statements`,subtitle:`Taxes and receipts`}],y={args:{title:`Title`,subtitle:`Subtitle`,disabled:!1},render:e=>(0,p.jsx)(l,{...e,icon:g,className:`max-w-[346px]`,onClick:e=>m(`onClick`)(e)})},b={args:{title:`Settings`,disabled:!1},render:e=>(0,p.jsx)(l,{...e,icon:g,className:`max-w-[346px]`,onClick:e=>m(`onClick`)(e)})},x={render:()=>(0,p.jsx)(l,{href:`https://example.com`,icon:g,title:`External link`,subtitle:`Opens example.com`,className:`max-w-[346px]`,onClick:e=>m(`onClick`)(e)})},S={args:{title:`Unavailable`,subtitle:`Try again later`,disabled:!0},render:e=>(0,p.jsx)(l,{...e,icon:g,className:`max-w-[346px]`})},C={parameters:{controls:{disable:!0}},render:()=>(0,p.jsx)(`div`,{className:`flex w-full flex-wrap gap-md`,children:v.map((e,t)=>(0,p.jsx)(l,{icon:e.icon,title:e.title,subtitle:e.subtitle,className:`max-w-[346px] flex-[1_1_220px]`,onClick:e=>m(`card-${t+1}`)(e)},e.title))})},w={parameters:{controls:{disable:!0}},render:()=>(0,p.jsxs)(`div`,{className:`gap-md flex max-w-[360px] flex-col`,children:[(0,p.jsx)(l,{icon:g,title:`Title`,subtitle:`Subtitle`,onClick:e=>m(`default`)(e)}),(0,p.jsx)(l,{icon:(0,p.jsx)(r,{className:`stroke-icon`}),title:`No subtitle`,onClick:e=>m(`no subtitle`)(e)}),(0,p.jsx)(l,{icon:g,title:`Disabled`,subtitle:`Subtitle`,disabled:!0})]})},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Title",
    subtitle: "Subtitle",
    disabled: false
  },
  render: args => <IconCard {...args} icon={sampleIcon} className="max-w-[346px]" onClick={e => action("onClick")(e)} />
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Settings",
    disabled: false
  },
  render: args => <IconCard {...args} icon={sampleIcon} className="max-w-[346px]" onClick={e => action("onClick")(e)} />
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <IconCard href="https://example.com" icon={sampleIcon} title="External link" subtitle="Opens example.com" className="max-w-[346px]" onClick={e => action("onClick")(e)} />
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Unavailable",
    subtitle: "Try again later",
    disabled: true
  },
  render: args => <IconCard {...args} icon={sampleIcon} className="max-w-[346px]" />
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="flex w-full flex-wrap gap-md">
      {groupFinanceCards.map((card, i) => <IconCard key={card.title} icon={card.icon} title={card.title} subtitle={card.subtitle} className="max-w-[346px] flex-[1_1_220px]" onClick={e => action(\`card-\${i + 1}\`)(e)} />)}
    </div>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T=[`Playground`,`WithoutSubtitle`,`AsLink`,`Disabled`,`Group`,`Overview`]}))();export{x as AsLink,S as Disabled,C as Group,w as Overview,y as Playground,b as WithoutSubtitle,T as __namedExportsOrder,h as default};