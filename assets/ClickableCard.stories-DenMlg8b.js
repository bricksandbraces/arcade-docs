import{n as e}from"./chunk-jRWAZmH_.js";import{Kr as t,so as n,t as r,vr as i}from"./iframe-wZ4TEM6N.js";var a,o,s,c,l,u,d,f;e((()=>{r(),a=n(),{action:o}=__STORYBOOK_MODULE_ACTIONS__,s={title:`Display & Data/Cards/ClickableCard`,component:t,tags:[`autodocs`],parameters:{docs:{description:{component:`Card-sized button for navigation or action. Use when a tile should look like a surface but behave like a link or button.`}}}},c=`flex flex-wrap gap-md`,l={render:e=>(0,a.jsxs)(`div`,{className:c,children:[(0,a.jsx)(t,{...e,onClick:e=>o(`onClick`)(e),className:`h-[218px] w-[388px] shrink-0`,children:(0,a.jsx)(`span`,{className:`typography-body text-text p-md block`,children:`I'm a Clickable Card A`})}),(0,a.jsx)(t,{...e,onClick:e=>o(`onClick`)(e),className:`h-[218px] w-[388px] shrink-0`,children:(0,a.jsx)(`span`,{className:`typography-body text-text p-md block`,children:`I'm a Clickable Card B`})}),(0,a.jsx)(t,{...e,onClick:e=>o(`onClick`)(e),className:`h-[218px] w-[388px] shrink-0`,children:(0,a.jsx)(`span`,{className:`typography-body text-text p-md block`,children:`I'm a Clickable Card C`})})]})},l.args={disabled:!1},u={render:e=>(0,a.jsxs)(`div`,{className:c,children:[(0,a.jsx)(t,{...e,onClick:e=>o(`onClick`)(e),className:`h-[218px] w-[388px] shrink-0`,children:(0,a.jsx)(`span`,{className:`typography-body text-text p-md block`,children:`I'm a Clickable Card A`})}),(0,a.jsx)(t,{...e,onClick:e=>o(`onClick`)(e),className:`h-[218px] w-[388px] shrink-0`,children:(0,a.jsx)(`span`,{className:`typography-body text-text p-md block`,children:`I'm a Clickable Card B`})}),(0,a.jsx)(t,{...e,onClick:e=>o(`onClick`)(e),className:`h-[218px] w-[388px] shrink-0`,children:(0,a.jsx)(`span`,{className:`typography-body text-text p-md block`,children:`I'm a Clickable Card C`})})]}),args:{disabled:!0}},d={render:()=>(0,a.jsx)(i,{})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <div className={cardRowClassName}>
        <ClickableCard {...args} onClick={event => action("onClick")(event)} className="h-[218px] w-[388px] shrink-0">
          <span className="typography-body text-text p-md block">
            I&apos;m a Clickable Card A
          </span>
        </ClickableCard>
        <ClickableCard {...args} onClick={event => action("onClick")(event)} className="h-[218px] w-[388px] shrink-0">
          <span className="typography-body text-text p-md block">
            I&apos;m a Clickable Card B
          </span>
        </ClickableCard>
        <ClickableCard {...args} onClick={event => action("onClick")(event)} className="h-[218px] w-[388px] shrink-0">
          <span className="typography-body text-text p-md block">
            I&apos;m a Clickable Card C
          </span>
        </ClickableCard>
      </div>;
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <div className={cardRowClassName}>
        <ClickableCard {...args} onClick={event => action("onClick")(event)} className="h-[218px] w-[388px] shrink-0">
          <span className="typography-body text-text p-md block">
            I&apos;m a Clickable Card A
          </span>
        </ClickableCard>
        <ClickableCard {...args} onClick={event => action("onClick")(event)} className="h-[218px] w-[388px] shrink-0">
          <span className="typography-body text-text p-md block">
            I&apos;m a Clickable Card B
          </span>
        </ClickableCard>
        <ClickableCard {...args} onClick={event => action("onClick")(event)} className="h-[218px] w-[388px] shrink-0">
          <span className="typography-body text-text p-md block">
            I&apos;m a Clickable Card C
          </span>
        </ClickableCard>
      </div>;
  },
  args: {
    disabled: true
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <CardSkeleton />
}`,...d.parameters?.docs?.source}}},f=[`Playground`,`Disabled`,`Skeleton`]}))();export{u as Disabled,l as Playground,d as Skeleton,f as __namedExportsOrder,s as default};