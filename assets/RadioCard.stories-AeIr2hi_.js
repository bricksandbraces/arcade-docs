import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Ao as n,En as r,Xr as i,ho as a,t as o}from"./iframe-CoSOMK-m.js";var s,c,l,u,d,f,p,m,h,g;e((()=>{o(),s=t(n(),1),c=a(),{action:l}=__STORYBOOK_MODULE_ACTIONS__,u={title:`Display & Data/Cards/RadioCard`,component:i,tags:[`autodocs`],parameters:{docs:{description:{component:`Larger selectable card acting as a radio, with room for a title and description. Use for exclusive choices that need more context than a plain RadioButton.`}}}},d=`flex flex-wrap gap-md`,f=e=>{let[t,n]=s.useState(`a`);return(0,c.jsxs)(`div`,{className:d,children:[(0,c.jsx)(i,{...e,name:`radio-card`,value:`a`,checked:t===`a`,onChange:e=>{l(`onChange`)(e),e.target.checked&&n(`a`)},className:`h-[218px] w-[388px] shrink-0`,children:(0,c.jsx)(`span`,{className:`typography-body text-text p-md block`,children:`I'm a Radio Card A`})}),(0,c.jsx)(i,{...e,name:`radio-card`,value:`b`,checked:t===`b`,onChange:e=>{l(`onChange`)(e),e.target.checked&&n(`b`)},className:`h-[218px] w-[388px] shrink-0`,children:(0,c.jsx)(`span`,{className:`typography-body text-text p-md block`,children:`I'm a Radio Card B`})}),(0,c.jsx)(i,{...e,name:`radio-card`,value:`c`,checked:t===`c`,onChange:e=>{l(`onChange`)(e),e.target.checked&&n(`c`)},className:`h-[218px] w-[388px] shrink-0`,children:(0,c.jsx)(`span`,{className:`typography-body text-text p-md block`,children:`I'm a Radio Card C`})})]})},f.args={disabled:!1,name:`radio-card`},p=e=>(0,c.jsxs)(`div`,{className:d,children:[(0,c.jsx)(i,{...e,name:`radio-card-disabled`,value:`a`,checked:!0,disabled:!0,onChange:e=>l(`onChange`)(e),className:`h-[218px] w-[388px] shrink-0`,children:(0,c.jsx)(`span`,{className:`typography-body text-text p-md block`,children:`I'm a Radio Card A`})}),(0,c.jsx)(i,{...e,name:`radio-card-disabled`,value:`b`,checked:!1,disabled:!0,onChange:e=>l(`onChange`)(e),className:`h-[218px] w-[388px] shrink-0`,children:(0,c.jsx)(`span`,{className:`typography-body text-text p-md block`,children:`I'm a Radio Card B`})}),(0,c.jsx)(i,{...e,name:`radio-card-disabled`,value:`c`,checked:!1,disabled:!0,onChange:e=>l(`onChange`)(e),className:`h-[218px] w-[388px] shrink-0`,children:(0,c.jsx)(`span`,{className:`typography-body text-text p-md block`,children:`I'm a Radio Card C`})})]}),p.args={disabled:!0,name:`radio-card`},m={render:()=>(0,c.jsxs)(`div`,{className:`gap-md flex w-[388px] flex-col`,children:[(0,c.jsx)(r,{}),(0,c.jsx)(r,{})]})},h=()=>{let[e,t]=s.useState(`a`);return(0,c.jsx)(`div`,{className:`bg-background-elevation gap-md p-xlg flex w-[420px] flex-col rounded-lg`,children:[`a`,`b`].map(n=>(0,c.jsx)(i,{name:`radio-card-elevation`,value:n,surface:`onCard`,checked:e===n,onChange:e=>{l(`onChange`)(e),e.target.checked&&t(n)},children:(0,c.jsxs)(`span`,{className:`typography-body text-text p-md block`,children:[`I'm on an elevated surface (`,n.toUpperCase(),`)`]})},n))})},h.parameters={docs:{description:{story:'`surface="onElevation"` for cards placed on an already-elevated surface (e.g. inside a Modal). The mock elevation below uses `bg-background-elevation`; the default surface would collide with it in dark mode, `onElevation` stays a distinct layer.'}}},f.__docgenInfo={description:``,methods:[],displayName:`Playground`},p.__docgenInfo={description:``,methods:[],displayName:`Disabled`},h.__docgenInfo={description:``,methods:[],displayName:`OnElevation`},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`(args: React.ComponentProps<typeof RadioCard> & Record<string, unknown>) => {
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`(args: React.ComponentProps<typeof RadioCard> & Record<string, unknown>) => {
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="gap-md flex w-[388px] flex-col">
      <RadioCardSkeleton />
      <RadioCardSkeleton />
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
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
}`,...h.parameters?.docs?.source}}},g=[`Playground`,`Disabled`,`Skeleton`,`OnElevation`]}))();export{p as Disabled,h as OnElevation,f as Playground,m as Skeleton,g as __namedExportsOrder,u as default};