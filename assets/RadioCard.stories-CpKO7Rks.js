import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Hi as n,Os as r,Us as i,dr as a,t as o}from"./iframe-jImnWlHt.js";import{n as s,t as c}from"./figmaDesign-DDiUnvXT.js";var l,u,d,f,p,m,h,g,_,v;e((()=>{o(),l=t(i(),1),s(),u=r(),{action:d}=__STORYBOOK_MODULE_ACTIONS__,f={title:`Display & Data/Cards/RadioCard`,component:n,tags:[`autodocs`],parameters:{design:c(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=2172-664`),docs:{description:{component:`Larger selectable card acting as a radio, with room for a title and description. Use for exclusive choices that need more context than a plain RadioButton.`}}}},p=`flex flex-wrap gap-md`,m=e=>{let[t,r]=l.useState(`a`);return(0,u.jsxs)(`div`,{className:p,children:[(0,u.jsx)(n,{...e,name:`radio-card`,value:`a`,checked:t===`a`,onChange:e=>{d(`onChange`)(e),e.target.checked&&r(`a`)},className:`h-[218px] w-[388px] shrink-0`,children:(0,u.jsx)(`span`,{className:`typography-body text-text p-md block`,children:`I'm a Radio Card A`})}),(0,u.jsx)(n,{...e,name:`radio-card`,value:`b`,checked:t===`b`,onChange:e=>{d(`onChange`)(e),e.target.checked&&r(`b`)},className:`h-[218px] w-[388px] shrink-0`,children:(0,u.jsx)(`span`,{className:`typography-body text-text p-md block`,children:`I'm a Radio Card B`})}),(0,u.jsx)(n,{...e,name:`radio-card`,value:`c`,checked:t===`c`,onChange:e=>{d(`onChange`)(e),e.target.checked&&r(`c`)},className:`h-[218px] w-[388px] shrink-0`,children:(0,u.jsx)(`span`,{className:`typography-body text-text p-md block`,children:`I'm a Radio Card C`})})]})},m.args={disabled:!1,name:`radio-card`},h=e=>(0,u.jsxs)(`div`,{className:p,children:[(0,u.jsx)(n,{...e,name:`radio-card-disabled`,value:`a`,checked:!0,disabled:!0,onChange:e=>d(`onChange`)(e),className:`h-[218px] w-[388px] shrink-0`,children:(0,u.jsx)(`span`,{className:`typography-body text-text p-md block`,children:`I'm a Radio Card A`})}),(0,u.jsx)(n,{...e,name:`radio-card-disabled`,value:`b`,checked:!1,disabled:!0,onChange:e=>d(`onChange`)(e),className:`h-[218px] w-[388px] shrink-0`,children:(0,u.jsx)(`span`,{className:`typography-body text-text p-md block`,children:`I'm a Radio Card B`})}),(0,u.jsx)(n,{...e,name:`radio-card-disabled`,value:`c`,checked:!1,disabled:!0,onChange:e=>d(`onChange`)(e),className:`h-[218px] w-[388px] shrink-0`,children:(0,u.jsx)(`span`,{className:`typography-body text-text p-md block`,children:`I'm a Radio Card C`})})]}),h.args={disabled:!0,name:`radio-card`},g={render:()=>(0,u.jsxs)(`div`,{className:`gap-md flex w-[388px] flex-col`,children:[(0,u.jsx)(a,{}),(0,u.jsx)(a,{})]})},_=()=>{let[e,t]=l.useState(`a`);return(0,u.jsx)(`div`,{className:`bg-background-elevation gap-md p-xlg flex w-[420px] flex-col rounded-lg`,children:[`a`,`b`].map(r=>(0,u.jsx)(n,{name:`radio-card-elevation`,value:r,surface:`onCard`,checked:e===r,onChange:e=>{d(`onChange`)(e),e.target.checked&&t(r)},children:(0,u.jsxs)(`span`,{className:`typography-body text-text p-md block`,children:[`I'm on an elevated surface (`,r.toUpperCase(),`)`]})},r))})},_.parameters={docs:{description:{story:'`surface="onElevation"` for cards placed on an already-elevated surface (e.g. inside a Modal). The mock elevation below uses `bg-background-elevation`; the default surface would collide with it in dark mode, `onElevation` stays a distinct layer.'}}},m.__docgenInfo={description:``,methods:[],displayName:`Playground`},h.__docgenInfo={description:``,methods:[],displayName:`Disabled`},_.__docgenInfo={description:``,methods:[],displayName:`OnElevation`},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`(args: React.ComponentProps<typeof RadioCard> & Record<string, unknown>) => {
  const [selected, setSelected] = React.useState<"a" | "b" | "c">("a");
  return <div className={cardRowClassName}>
      <RadioCard {...args} name="radio-card" value="a" checked={selected === "a"} onChange={event => {
      action("onChange")(event);
      if (event.target.checked) {
        setSelected("a");
      }
    }} className="h-[218px] w-[388px] shrink-0">
        <span className="typography-body text-text p-md block">
          I&apos;m a Radio Card A
        </span>
      </RadioCard>
      <RadioCard {...args} name="radio-card" value="b" checked={selected === "b"} onChange={event => {
      action("onChange")(event);
      if (event.target.checked) {
        setSelected("b");
      }
    }} className="h-[218px] w-[388px] shrink-0">
        <span className="typography-body text-text p-md block">
          I&apos;m a Radio Card B
        </span>
      </RadioCard>
      <RadioCard {...args} name="radio-card" value="c" checked={selected === "c"} onChange={event => {
      action("onChange")(event);
      if (event.target.checked) {
        setSelected("c");
      }
    }} className="h-[218px] w-[388px] shrink-0">
        <span className="typography-body text-text p-md block">
          I&apos;m a Radio Card C
        </span>
      </RadioCard>
    </div>;
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`(args: React.ComponentProps<typeof RadioCard> & Record<string, unknown>) => {
  return <div className={cardRowClassName}>
      <RadioCard {...args} name="radio-card-disabled" value="a" checked disabled onChange={event => action("onChange")(event)} className="h-[218px] w-[388px] shrink-0">
        <span className="typography-body text-text p-md block">
          I&apos;m a Radio Card A
        </span>
      </RadioCard>
      <RadioCard {...args} name="radio-card-disabled" value="b" checked={false} disabled onChange={event => action("onChange")(event)} className="h-[218px] w-[388px] shrink-0">
        <span className="typography-body text-text p-md block">
          I&apos;m a Radio Card B
        </span>
      </RadioCard>
      <RadioCard {...args} name="radio-card-disabled" value="c" checked={false} disabled onChange={event => action("onChange")(event)} className="h-[218px] w-[388px] shrink-0">
        <span className="typography-body text-text p-md block">
          I&apos;m a Radio Card C
        </span>
      </RadioCard>
    </div>;
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div className="gap-md flex w-[388px] flex-col">
      <RadioCardSkeleton />
      <RadioCardSkeleton />
    </div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  const [selected, setSelected] = React.useState<"a" | "b">("a");
  return <div className="bg-background-elevation gap-md p-xlg flex w-[420px] flex-col rounded-lg">
      {(["a", "b"] as const).map(value => <RadioCard key={value} name="radio-card-elevation" value={value} surface="onCard" checked={selected === value} onChange={event => {
      action("onChange")(event);
      if (event.target.checked) setSelected(value);
    }}>
          <span className="typography-body text-text p-md block">
            I&apos;m on an elevated surface ({value.toUpperCase()})
          </span>
        </RadioCard>)}
    </div>;
}`,..._.parameters?.docs?.source}}},v=[`Playground`,`Disabled`,`Skeleton`,`OnElevation`]}))();export{h as Disabled,_ as OnElevation,m as Playground,g as Skeleton,v as __namedExportsOrder,f as default};