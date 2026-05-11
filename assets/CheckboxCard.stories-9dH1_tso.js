import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Rn as n,ia as r,t as i,ya as a}from"./iframe-CS4X-XGW.js";var o,s,c,l,u,d,f,p;e((()=>{i(),o=t(a(),1),s=r(),{action:c}=__STORYBOOK_MODULE_ACTIONS__,l={title:`Components/CheckboxCard`,component:n,tags:[`autodocs`],parameters:{docs:{description:{component:`Larger selectable card acting as a checkbox, with room for a title and description. Use for multi-select choices that need more explanation than a plain checkbox.`}}}},u=`flex flex-wrap gap-md`,d=e=>{let[t,r]=o.useState(!0),[i,a]=o.useState(!1),[l,d]=o.useState(!1);return(0,s.jsxs)(`div`,{className:u,children:[(0,s.jsx)(n,{...e,checked:t,onChange:e=>{c(`onChange`)(e),r(e.target.checked)},className:`h-[218px] w-[388px] shrink-0`,children:(0,s.jsx)(`span`,{className:`typography-body text-text p-md block`,children:`I'm a Checkbox Card A`})}),(0,s.jsx)(n,{...e,checked:i,onChange:e=>{c(`onChange`)(e),a(e.target.checked)},className:`h-[218px] w-[388px] shrink-0`,children:(0,s.jsx)(`span`,{className:`typography-body text-text p-md block`,children:`I'm a Checkbox Card B`})}),(0,s.jsx)(n,{...e,checked:l,onChange:e=>{c(`onChange`)(e),d(e.target.checked)},className:`h-[218px] w-[388px] shrink-0`,children:(0,s.jsx)(`span`,{className:`typography-body text-text p-md block`,children:`I'm a Checkbox Card C`})})]})},d.args={disabled:!1,name:`checkbox-card`},f=e=>(0,s.jsxs)(`div`,{className:u,children:[(0,s.jsx)(n,{...e,checked:!0,disabled:!0,onChange:e=>c(`onChange`)(e),className:`h-[218px] w-[388px] shrink-0`,children:(0,s.jsx)(`span`,{className:`typography-body text-text p-md block`,children:`I'm a Checkbox Card A`})}),(0,s.jsx)(n,{...e,checked:!1,disabled:!0,onChange:e=>c(`onChange`)(e),className:`h-[218px] w-[388px] shrink-0`,children:(0,s.jsx)(`span`,{className:`typography-body text-text p-md block`,children:`I'm a Checkbox Card B`})}),(0,s.jsx)(n,{...e,checked:!1,disabled:!0,onChange:e=>c(`onChange`)(e),className:`h-[218px] w-[388px] shrink-0`,children:(0,s.jsx)(`span`,{className:`typography-body text-text p-md block`,children:`I'm a Checkbox Card C`})})]}),f.args={disabled:!0,name:`checkbox-card`},d.__docgenInfo={description:``,methods:[],displayName:`Playground`},f.__docgenInfo={description:``,methods:[],displayName:`Disabled`},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`(args: React.ComponentProps<typeof CheckboxCard> & Record<string, unknown>) => {
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`(args: React.ComponentProps<typeof CheckboxCard> & Record<string, unknown>) => {
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
}`,...f.parameters?.docs?.source}}},p=[`Playground`,`Disabled`]}))();export{f as Disabled,d as Playground,p as __namedExportsOrder,l as default};