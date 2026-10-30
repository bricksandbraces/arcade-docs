import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Hs as n,ea as r,mr as i,rc as a,t as o}from"./iframe-CQm8b4Bh.js";import{n as s,t as c}from"./figmaDesign-DDiUnvXT.js";var l,u,d,f,p,m,h,g,_,v,y;e((()=>{o(),l=t(a(),1),s(),u=n(),{action:d}=__STORYBOOK_MODULE_ACTIONS__,f={title:`Display & Data/Cards/RadioCard`,component:r,tags:[`autodocs`],parameters:{design:c(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=2172-664`),docs:{description:{component:`Larger selectable card acting as a radio, with room for a title and description. Use for exclusive choices that need more context than a plain RadioButton.`}}}},p=`flex flex-wrap gap-md`,m=e=>{let[t,n]=l.useState(`a`);return(0,u.jsxs)(`div`,{className:p,children:[(0,u.jsx)(r,{...e,name:`radio-card`,value:`a`,checked:t===`a`,onChange:e=>{d(`onChange`)(e),e.target.checked&&n(`a`)},className:`h-[218px] w-[388px] shrink-0`,children:(0,u.jsx)(`span`,{className:`typography-body text-text p-md block`,children:`I'm a Radio Card A`})}),(0,u.jsx)(r,{...e,name:`radio-card`,value:`b`,checked:t===`b`,onChange:e=>{d(`onChange`)(e),e.target.checked&&n(`b`)},className:`h-[218px] w-[388px] shrink-0`,children:(0,u.jsx)(`span`,{className:`typography-body text-text p-md block`,children:`I'm a Radio Card B`})}),(0,u.jsx)(r,{...e,name:`radio-card`,value:`c`,checked:t===`c`,onChange:e=>{d(`onChange`)(e),e.target.checked&&n(`c`)},className:`h-[218px] w-[388px] shrink-0`,children:(0,u.jsx)(`span`,{className:`typography-body text-text p-md block`,children:`I'm a Radio Card C`})})]})},m.args={disabled:!1,name:`radio-card`},h=e=>(0,u.jsxs)(`div`,{className:p,children:[(0,u.jsx)(r,{...e,name:`radio-card-disabled`,value:`a`,checked:!0,disabled:!0,onChange:e=>d(`onChange`)(e),className:`h-[218px] w-[388px] shrink-0`,children:(0,u.jsx)(`span`,{className:`typography-body text-text p-md block`,children:`I'm a Radio Card A`})}),(0,u.jsx)(r,{...e,name:`radio-card-disabled`,value:`b`,checked:!1,disabled:!0,onChange:e=>d(`onChange`)(e),className:`h-[218px] w-[388px] shrink-0`,children:(0,u.jsx)(`span`,{className:`typography-body text-text p-md block`,children:`I'm a Radio Card B`})}),(0,u.jsx)(r,{...e,name:`radio-card-disabled`,value:`c`,checked:!1,disabled:!0,onChange:e=>d(`onChange`)(e),className:`h-[218px] w-[388px] shrink-0`,children:(0,u.jsx)(`span`,{className:`typography-body text-text p-md block`,children:`I'm a Radio Card C`})})]}),h.args={disabled:!0,name:`radio-card`},g=e=>{let[t,n]=l.useState(`monthly`);return(0,u.jsxs)(`div`,{className:`gap-md flex w-[388px] flex-col`,children:[(0,u.jsx)(r,{...e,name:`radio-card-centered`,value:`monthly`,indicatorPosition:`center-right`,checked:t===`monthly`,onChange:e=>{d(`onChange`)(e),e.target.checked&&n(`monthly`)},children:(0,u.jsxs)(`span`,{className:`gap-2xs p-lg pr-4xlg flex flex-col`,children:[(0,u.jsx)(`span`,{className:`typography-label-semibold text-text`,children:`Monthly`}),(0,u.jsx)(`span`,{className:`typography-body-small text-text-secondary`,children:`Billed once per period, cancel anytime.`})]})}),(0,u.jsx)(r,{...e,name:`radio-card-centered`,value:`yearly`,indicatorPosition:`center-right`,checked:t===`yearly`,onChange:e=>{d(`onChange`)(e),e.target.checked&&n(`yearly`)},children:(0,u.jsxs)(`span`,{className:`gap-2xs p-lg pr-4xlg flex flex-col`,children:[(0,u.jsx)(`span`,{className:`typography-label-semibold text-text`,children:`Yearly`}),(0,u.jsx)(`span`,{className:`typography-body-small text-text-secondary`,children:`Billed once per period, cancel anytime.`})]})})]})},g.args={disabled:!1},_={render:()=>(0,u.jsxs)(`div`,{className:`gap-md flex w-[388px] flex-col`,children:[(0,u.jsx)(i,{}),(0,u.jsx)(i,{})]})},v=()=>{let[e,t]=l.useState(`a`);return(0,u.jsx)(`div`,{className:`bg-background-elevation gap-md p-xlg flex w-[420px] flex-col rounded-lg`,children:[`a`,`b`].map(n=>(0,u.jsx)(r,{name:`radio-card-elevation`,value:n,surface:`onCard`,checked:e===n,onChange:e=>{d(`onChange`)(e),e.target.checked&&t(n)},children:(0,u.jsxs)(`span`,{className:`typography-body text-text p-md block`,children:[`I'm on an elevated surface (`,n.toUpperCase(),`)`]})},n))})},v.parameters={docs:{description:{story:'`surface="onElevation"` for cards placed on an already-elevated surface (e.g. inside a Modal). The mock elevation below uses `bg-background-elevation`; the default surface would collide with it in dark mode, `onElevation` stays a distinct layer.'}}},m.__docgenInfo={description:``,methods:[],displayName:`Playground`},h.__docgenInfo={description:``,methods:[],displayName:`Disabled`},g.__docgenInfo={description:``,methods:[],displayName:`CenteredIndicator`},v.__docgenInfo={description:``,methods:[],displayName:`OnElevation`},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`(args: React.ComponentProps<typeof RadioCard> & Record<string, unknown>) => {
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`(args: React.ComponentProps<typeof RadioCard> & Record<string, unknown>) => {
  const [selected, setSelected] = React.useState<"monthly" | "yearly">("monthly");
  return <div className="gap-md flex w-[388px] flex-col">
      <RadioCard {...args} name="radio-card-centered" value="monthly" indicatorPosition="center-right" checked={selected === "monthly"} onChange={event => {
      action("onChange")(event);
      if (event.target.checked) {
        setSelected("monthly");
      }
    }}>
        <span className="gap-2xs p-lg pr-4xlg flex flex-col">
          <span className="typography-label-semibold text-text">Monthly</span>
          <span className="typography-body-small text-text-secondary">
            Billed once per period, cancel anytime.
          </span>
        </span>
      </RadioCard>
      <RadioCard {...args} name="radio-card-centered" value="yearly" indicatorPosition="center-right" checked={selected === "yearly"} onChange={event => {
      action("onChange")(event);
      if (event.target.checked) {
        setSelected("yearly");
      }
    }}>
        <span className="gap-2xs p-lg pr-4xlg flex flex-col">
          <span className="typography-label-semibold text-text">Yearly</span>
          <span className="typography-body-small text-text-secondary">
            Billed once per period, cancel anytime.
          </span>
        </span>
      </RadioCard>
    </div>;
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div className="gap-md flex w-[388px] flex-col">
      <RadioCardSkeleton />
      <RadioCardSkeleton />
    </div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
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
}`,...v.parameters?.docs?.source}}},y=[`Playground`,`Disabled`,`CenteredIndicator`,`Skeleton`,`OnElevation`]}))();export{g as CenteredIndicator,h as Disabled,v as OnElevation,m as Playground,_ as Skeleton,y as __namedExportsOrder,f as default};