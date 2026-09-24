import{n as e}from"./chunk-jRWAZmH_.js";import{Vi as t,ai as n,bs as r,i}from"./iframe-DdJMnWtf.js";import{n as a,t as o}from"./figmaDesign-CO6i5n9C.js";var s,c,l,u,d,f,p,m;e((()=>{i(),a(),s=r(),{action:c}=__STORYBOOK_MODULE_ACTIONS__,l={title:`Display & Data/Cards/ClickableCard`,component:t,tags:[`autodocs`],parameters:{design:o(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=2172-511`),docs:{description:{component:`Card-sized button for navigation or action. Use when a tile should look like a surface but behave like a link or button.`}}}},u=`flex flex-wrap gap-md`,d={render:e=>(0,s.jsxs)(`div`,{className:u,children:[(0,s.jsx)(t,{...e,onClick:e=>c(`onClick`)(e),className:`h-[218px] w-[388px] shrink-0`,children:(0,s.jsx)(`span`,{className:`typography-body text-text p-md block`,children:`I'm a Clickable Card A`})}),(0,s.jsx)(t,{...e,onClick:e=>c(`onClick`)(e),className:`h-[218px] w-[388px] shrink-0`,children:(0,s.jsx)(`span`,{className:`typography-body text-text p-md block`,children:`I'm a Clickable Card B`})}),(0,s.jsx)(t,{...e,onClick:e=>c(`onClick`)(e),className:`h-[218px] w-[388px] shrink-0`,children:(0,s.jsx)(`span`,{className:`typography-body text-text p-md block`,children:`I'm a Clickable Card C`})})]})},d.args={disabled:!1},f={render:e=>(0,s.jsxs)(`div`,{className:u,children:[(0,s.jsx)(t,{...e,onClick:e=>c(`onClick`)(e),className:`h-[218px] w-[388px] shrink-0`,children:(0,s.jsx)(`span`,{className:`typography-body text-text p-md block`,children:`I'm a Clickable Card A`})}),(0,s.jsx)(t,{...e,onClick:e=>c(`onClick`)(e),className:`h-[218px] w-[388px] shrink-0`,children:(0,s.jsx)(`span`,{className:`typography-body text-text p-md block`,children:`I'm a Clickable Card B`})}),(0,s.jsx)(t,{...e,onClick:e=>c(`onClick`)(e),className:`h-[218px] w-[388px] shrink-0`,children:(0,s.jsx)(`span`,{className:`typography-body text-text p-md block`,children:`I'm a Clickable Card C`})})]}),args:{disabled:!0}},p={render:()=>(0,s.jsx)(n,{})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <CardSkeleton />
}`,...p.parameters?.docs?.source}}},m=[`Playground`,`Disabled`,`Skeleton`]}))();export{f as Disabled,d as Playground,p as Skeleton,m as __namedExportsOrder,l as default};