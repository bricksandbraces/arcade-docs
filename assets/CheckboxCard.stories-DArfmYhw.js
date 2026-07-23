import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Mr as n,To as r,br as i,t as a,uo as o}from"./iframe-CxJo9uef.js";var s,c,l,u,d,f,p,m,h;e((()=>{a(),s=t(r(),1),c=o(),{action:l}=__STORYBOOK_MODULE_ACTIONS__,u={title:`Display & Data/Cards/CheckboxCard`,component:n,tags:[`autodocs`],parameters:{docs:{description:{component:`Larger selectable card acting as a checkbox, with room for a title and description. Use for multi-select choices that need more explanation than a plain checkbox.`}}}},d=`flex flex-wrap gap-md`,f=e=>{let[t,r]=s.useState(!0),[i,a]=s.useState(!1),[o,u]=s.useState(!1);return(0,c.jsxs)(`div`,{className:d,children:[(0,c.jsx)(n,{...e,checked:t,onChange:e=>{l(`onChange`)(e),r(e.target.checked)},className:`h-[218px] w-[388px] shrink-0`,children:(0,c.jsx)(`span`,{className:`typography-body text-text p-md block`,children:`I'm a Checkbox Card A`})}),(0,c.jsx)(n,{...e,checked:i,onChange:e=>{l(`onChange`)(e),a(e.target.checked)},className:`h-[218px] w-[388px] shrink-0`,children:(0,c.jsx)(`span`,{className:`typography-body text-text p-md block`,children:`I'm a Checkbox Card B`})}),(0,c.jsx)(n,{...e,checked:o,onChange:e=>{l(`onChange`)(e),u(e.target.checked)},className:`h-[218px] w-[388px] shrink-0`,children:(0,c.jsx)(`span`,{className:`typography-body text-text p-md block`,children:`I'm a Checkbox Card C`})})]})},f.args={disabled:!1,name:`checkbox-card`},p=e=>(0,c.jsxs)(`div`,{className:d,children:[(0,c.jsx)(n,{...e,checked:!0,disabled:!0,onChange:e=>l(`onChange`)(e),className:`h-[218px] w-[388px] shrink-0`,children:(0,c.jsx)(`span`,{className:`typography-body text-text p-md block`,children:`I'm a Checkbox Card A`})}),(0,c.jsx)(n,{...e,checked:!1,disabled:!0,onChange:e=>l(`onChange`)(e),className:`h-[218px] w-[388px] shrink-0`,children:(0,c.jsx)(`span`,{className:`typography-body text-text p-md block`,children:`I'm a Checkbox Card B`})}),(0,c.jsx)(n,{...e,checked:!1,disabled:!0,onChange:e=>l(`onChange`)(e),className:`h-[218px] w-[388px] shrink-0`,children:(0,c.jsx)(`span`,{className:`typography-body text-text p-md block`,children:`I'm a Checkbox Card C`})})]}),p.args={disabled:!0,name:`checkbox-card`},m={render:()=>(0,c.jsx)(i,{})},f.__docgenInfo={description:``,methods:[],displayName:`Playground`},p.__docgenInfo={description:``,methods:[],displayName:`Disabled`},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`(args: React.ComponentProps<typeof CheckboxCard> & Record<string, unknown>) => {
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`(args: React.ComponentProps<typeof CheckboxCard> & Record<string, unknown>) => {
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <CardSkeleton />
}`,...m.parameters?.docs?.source}}},h=[`Playground`,`Disabled`,`Skeleton`]}))();export{p as Disabled,f as Playground,m as Skeleton,h as __namedExportsOrder,u as default};