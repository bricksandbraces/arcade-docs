import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Es as n,Vs as r,i,ki as a,ui as o}from"./iframe-BNwjH-n2.js";import{n as s,t as c}from"./figmaDesign-CO6i5n9C.js";var l,u,d,f,p,m,h,g,_;e((()=>{i(),l=t(r(),1),s(),u=n(),{action:d}=__STORYBOOK_MODULE_ACTIONS__,f={title:`Display & Data/Cards/CheckboxCard`,component:a,tags:[`autodocs`],parameters:{design:c(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=2172-881`),docs:{description:{component:`Larger selectable card acting as a checkbox, with room for a title and description. Use for multi-select choices that need more explanation than a plain checkbox.`}}}},p=`flex flex-wrap gap-md`,m=e=>{let[t,n]=l.useState(!0),[r,i]=l.useState(!1),[o,s]=l.useState(!1);return(0,u.jsxs)(`div`,{className:p,children:[(0,u.jsx)(a,{...e,checked:t,onChange:e=>{d(`onChange`)(e),n(e.target.checked)},className:`h-[218px] w-[388px] shrink-0`,children:(0,u.jsx)(`span`,{className:`typography-body text-text p-md block`,children:`I'm a Checkbox Card A`})}),(0,u.jsx)(a,{...e,checked:r,onChange:e=>{d(`onChange`)(e),i(e.target.checked)},className:`h-[218px] w-[388px] shrink-0`,children:(0,u.jsx)(`span`,{className:`typography-body text-text p-md block`,children:`I'm a Checkbox Card B`})}),(0,u.jsx)(a,{...e,checked:o,onChange:e=>{d(`onChange`)(e),s(e.target.checked)},className:`h-[218px] w-[388px] shrink-0`,children:(0,u.jsx)(`span`,{className:`typography-body text-text p-md block`,children:`I'm a Checkbox Card C`})})]})},m.args={disabled:!1,name:`checkbox-card`},h=e=>(0,u.jsxs)(`div`,{className:p,children:[(0,u.jsx)(a,{...e,checked:!0,disabled:!0,onChange:e=>d(`onChange`)(e),className:`h-[218px] w-[388px] shrink-0`,children:(0,u.jsx)(`span`,{className:`typography-body text-text p-md block`,children:`I'm a Checkbox Card A`})}),(0,u.jsx)(a,{...e,checked:!1,disabled:!0,onChange:e=>d(`onChange`)(e),className:`h-[218px] w-[388px] shrink-0`,children:(0,u.jsx)(`span`,{className:`typography-body text-text p-md block`,children:`I'm a Checkbox Card B`})}),(0,u.jsx)(a,{...e,checked:!1,disabled:!0,onChange:e=>d(`onChange`)(e),className:`h-[218px] w-[388px] shrink-0`,children:(0,u.jsx)(`span`,{className:`typography-body text-text p-md block`,children:`I'm a Checkbox Card C`})})]}),h.args={disabled:!0,name:`checkbox-card`},g={render:()=>(0,u.jsx)(o,{})},m.__docgenInfo={description:``,methods:[],displayName:`Playground`},h.__docgenInfo={description:``,methods:[],displayName:`Disabled`},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`(args: React.ComponentProps<typeof CheckboxCard> & Record<string, unknown>) => {
  const [checkedA, setCheckedA] = React.useState(true);
  const [checkedB, setCheckedB] = React.useState(false);
  const [checkedC, setCheckedC] = React.useState(false);
  return <div className={cardRowClassName}>
      <CheckboxCard {...args} checked={checkedA} onChange={event => {
      action("onChange")(event);
      setCheckedA(event.target.checked);
    }} className="h-[218px] w-[388px] shrink-0">
        <span className="typography-body text-text p-md block">
          I&apos;m a Checkbox Card A
        </span>
      </CheckboxCard>
      <CheckboxCard {...args} checked={checkedB} onChange={event => {
      action("onChange")(event);
      setCheckedB(event.target.checked);
    }} className="h-[218px] w-[388px] shrink-0">
        <span className="typography-body text-text p-md block">
          I&apos;m a Checkbox Card B
        </span>
      </CheckboxCard>
      <CheckboxCard {...args} checked={checkedC} onChange={event => {
      action("onChange")(event);
      setCheckedC(event.target.checked);
    }} className="h-[218px] w-[388px] shrink-0">
        <span className="typography-body text-text p-md block">
          I&apos;m a Checkbox Card C
        </span>
      </CheckboxCard>
    </div>;
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`(args: React.ComponentProps<typeof CheckboxCard> & Record<string, unknown>) => {
  return <div className={cardRowClassName}>
      <CheckboxCard {...args} checked disabled onChange={event => action("onChange")(event)} className="h-[218px] w-[388px] shrink-0">
        <span className="typography-body text-text p-md block">
          I&apos;m a Checkbox Card A
        </span>
      </CheckboxCard>
      <CheckboxCard {...args} checked={false} disabled onChange={event => action("onChange")(event)} className="h-[218px] w-[388px] shrink-0">
        <span className="typography-body text-text p-md block">
          I&apos;m a Checkbox Card B
        </span>
      </CheckboxCard>
      <CheckboxCard {...args} checked={false} disabled onChange={event => action("onChange")(event)} className="h-[218px] w-[388px] shrink-0">
        <span className="typography-body text-text p-md block">
          I&apos;m a Checkbox Card C
        </span>
      </CheckboxCard>
    </div>;
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <CardSkeleton />
}`,...g.parameters?.docs?.source}}},_=[`Playground`,`Disabled`,`Skeleton`]}))();export{h as Disabled,m as Playground,g as Skeleton,_ as __namedExportsOrder,f as default};