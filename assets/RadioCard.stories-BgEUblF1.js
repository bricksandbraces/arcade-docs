import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{So as n,Wr as r,so as i,t as a,vr as o}from"./iframe-CECP9sMu.js";var s,c,l,u,d,f,p,m,h;e((()=>{a(),s=t(n(),1),c=i(),{action:l}=__STORYBOOK_MODULE_ACTIONS__,u={title:`Display & Data/Cards/RadioCard`,component:r,tags:[`autodocs`],parameters:{docs:{description:{component:`Larger selectable card acting as a radio, with room for a title and description. Use for exclusive choices that need more context than a plain RadioButton.`}}}},d=`flex flex-wrap gap-md`,f=e=>{let[t,n]=s.useState(`a`);return(0,c.jsxs)(`div`,{className:d,children:[(0,c.jsx)(r,{...e,name:`radio-card`,value:`a`,checked:t===`a`,onChange:e=>{l(`onChange`)(e),e.target.checked&&n(`a`)},className:`h-[218px] w-[388px] shrink-0`,children:(0,c.jsx)(`span`,{className:`typography-body text-text p-md block`,children:`I'm a Radio Card A`})}),(0,c.jsx)(r,{...e,name:`radio-card`,value:`b`,checked:t===`b`,onChange:e=>{l(`onChange`)(e),e.target.checked&&n(`b`)},className:`h-[218px] w-[388px] shrink-0`,children:(0,c.jsx)(`span`,{className:`typography-body text-text p-md block`,children:`I'm a Radio Card B`})}),(0,c.jsx)(r,{...e,name:`radio-card`,value:`c`,checked:t===`c`,onChange:e=>{l(`onChange`)(e),e.target.checked&&n(`c`)},className:`h-[218px] w-[388px] shrink-0`,children:(0,c.jsx)(`span`,{className:`typography-body text-text p-md block`,children:`I'm a Radio Card C`})})]})},f.args={disabled:!1,name:`radio-card`},p=e=>(0,c.jsxs)(`div`,{className:d,children:[(0,c.jsx)(r,{...e,name:`radio-card-disabled`,value:`a`,checked:!0,disabled:!0,onChange:e=>l(`onChange`)(e),className:`h-[218px] w-[388px] shrink-0`,children:(0,c.jsx)(`span`,{className:`typography-body text-text p-md block`,children:`I'm a Radio Card A`})}),(0,c.jsx)(r,{...e,name:`radio-card-disabled`,value:`b`,checked:!1,disabled:!0,onChange:e=>l(`onChange`)(e),className:`h-[218px] w-[388px] shrink-0`,children:(0,c.jsx)(`span`,{className:`typography-body text-text p-md block`,children:`I'm a Radio Card B`})}),(0,c.jsx)(r,{...e,name:`radio-card-disabled`,value:`c`,checked:!1,disabled:!0,onChange:e=>l(`onChange`)(e),className:`h-[218px] w-[388px] shrink-0`,children:(0,c.jsx)(`span`,{className:`typography-body text-text p-md block`,children:`I'm a Radio Card C`})})]}),p.args={disabled:!0,name:`radio-card`},m={render:()=>(0,c.jsx)(o,{})},f.__docgenInfo={description:``,methods:[],displayName:`Playground`},p.__docgenInfo={description:``,methods:[],displayName:`Disabled`},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`(args: React.ComponentProps<typeof RadioCard> & Record<string, unknown>) => {
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
  render: () => <CardSkeleton />
}`,...m.parameters?.docs?.source}}},h=[`Playground`,`Disabled`,`Skeleton`]}))();export{p as Disabled,f as Playground,m as Skeleton,h as __namedExportsOrder,u as default};