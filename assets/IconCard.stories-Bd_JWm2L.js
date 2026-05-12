import{n as e}from"./chunk-jRWAZmH_.js";import{Dr as t,Ea as n,Nr as r,Qn as i,_r as a,ai as o,da as s,di as c,oi as l,pi as u,t as d,xr as f}from"./iframe-BY85Oiue.js";var p,m,h,g,_,v,y,b,x,S,C,w,T;e((()=>{d(),a(),n(),p=s(),{action:m}=__STORYBOOK_MODULE_ACTIONS__,h={title:`Components/IconCard`,component:i,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`Compact navigational card with a leading icon, title, optional subtitle, and trailing chevron. Hover / active scale matches ClickableCard.`}}},argTypes:{disabled:{control:`boolean`}}},g=(0,p.jsx)(t,{className:`stroke-icon`,"aria-hidden":!0}),_=`stroke-icon`,v=[{icon:(0,p.jsx)(f,{className:_,"aria-hidden":!0}),title:`Accounts`,subtitle:`Balances and transactions`},{icon:(0,p.jsx)(l,{className:_,"aria-hidden":!0}),title:`Cards`,subtitle:`Manage limits and freezes`},{icon:(0,p.jsx)(o,{className:_,"aria-hidden":!0}),title:`Transfers`,subtitle:`SEPA and instant payments`},{icon:(0,p.jsx)(c,{className:_,"aria-hidden":!0}),title:`Portfolio & markets`,subtitle:`Securities and quotes`},{icon:(0,p.jsx)(u,{className:_,"aria-hidden":!0}),title:`Financing`,subtitle:`Loans and conditions`},{icon:(0,p.jsx)(r,{className:_,"aria-hidden":!0}),title:`Statements`,subtitle:`Taxes and receipts`}],y={args:{title:`Title`,subtitle:`Subtitle`,disabled:!1},render:e=>(0,p.jsx)(i,{...e,icon:g,className:`max-w-[346px]`,onClick:e=>m(`onClick`)(e)})},b={args:{title:`Settings`,disabled:!1},render:e=>(0,p.jsx)(i,{...e,icon:g,className:`max-w-[346px]`,onClick:e=>m(`onClick`)(e)})},x={render:()=>(0,p.jsx)(i,{href:`https://example.com`,icon:g,title:`External link`,subtitle:`Opens example.com`,className:`max-w-[346px]`,onClick:e=>m(`onClick`)(e)})},S={args:{title:`Unavailable`,subtitle:`Try again later`,disabled:!0},render:e=>(0,p.jsx)(i,{...e,icon:g,className:`max-w-[346px]`})},C={parameters:{controls:{disable:!0}},render:()=>(0,p.jsx)(`div`,{className:`flex w-full flex-wrap gap-md`,children:v.map((e,t)=>(0,p.jsx)(i,{icon:e.icon,title:e.title,subtitle:e.subtitle,className:`max-w-[346px] flex-[1_1_220px]`,onClick:e=>m(`card-${t+1}`)(e)},e.title))})},w={parameters:{controls:{disable:!0}},render:()=>(0,p.jsxs)(`div`,{className:`gap-md flex max-w-[360px] flex-col`,children:[(0,p.jsx)(i,{icon:g,title:`Title`,subtitle:`Subtitle`,onClick:e=>m(`default`)(e)}),(0,p.jsx)(i,{icon:(0,p.jsx)(t,{className:`stroke-icon`}),title:`No subtitle`,onClick:e=>m(`no subtitle`)(e)}),(0,p.jsx)(i,{icon:g,title:`Disabled`,subtitle:`Subtitle`,disabled:!0})]})},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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