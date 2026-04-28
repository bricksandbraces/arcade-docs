import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Di as n,Hi as r,On as i,t as a}from"./iframe-g3u2SE_6.js";var o,s,c,l,u,d,f,p;e((()=>{a(),o=t(r(),1),s=n(),{action:c}=__STORYBOOK_MODULE_ACTIONS__,l={title:`Components/RadioCard`,component:i,tags:[`autodocs`],parameters:{docs:{description:{component:`Larger selectable card acting as a radio, with room for a title and description. Use for exclusive choices that need more context than a plain RadioButton.`}}}},u=`flex flex-wrap gap-md`,d=e=>{let[t,n]=o.useState(`a`);return(0,s.jsxs)(`div`,{className:u,children:[(0,s.jsx)(i,{...e,name:`radio-card`,value:`a`,checked:t===`a`,onChange:e=>{c(`onChange`)(e),e.target.checked&&n(`a`)},className:`h-[218px] w-[388px] shrink-0`,children:(0,s.jsx)(`span`,{className:`typography-body text-text p-md block`,children:`I'm a Radio Card A`})}),(0,s.jsx)(i,{...e,name:`radio-card`,value:`b`,checked:t===`b`,onChange:e=>{c(`onChange`)(e),e.target.checked&&n(`b`)},className:`h-[218px] w-[388px] shrink-0`,children:(0,s.jsx)(`span`,{className:`typography-body text-text p-md block`,children:`I'm a Radio Card B`})}),(0,s.jsx)(i,{...e,name:`radio-card`,value:`c`,checked:t===`c`,onChange:e=>{c(`onChange`)(e),e.target.checked&&n(`c`)},className:`h-[218px] w-[388px] shrink-0`,children:(0,s.jsx)(`span`,{className:`typography-body text-text p-md block`,children:`I'm a Radio Card C`})})]})},d.args={disabled:!1,name:`radio-card`},f=e=>(0,s.jsxs)(`div`,{className:u,children:[(0,s.jsx)(i,{...e,name:`radio-card-disabled`,value:`a`,checked:!0,disabled:!0,onChange:e=>c(`onChange`)(e),className:`h-[218px] w-[388px] shrink-0`,children:(0,s.jsx)(`span`,{className:`typography-body text-text p-md block`,children:`I'm a Radio Card A`})}),(0,s.jsx)(i,{...e,name:`radio-card-disabled`,value:`b`,checked:!1,disabled:!0,onChange:e=>c(`onChange`)(e),className:`h-[218px] w-[388px] shrink-0`,children:(0,s.jsx)(`span`,{className:`typography-body text-text p-md block`,children:`I'm a Radio Card B`})}),(0,s.jsx)(i,{...e,name:`radio-card-disabled`,value:`c`,checked:!1,disabled:!0,onChange:e=>c(`onChange`)(e),className:`h-[218px] w-[388px] shrink-0`,children:(0,s.jsx)(`span`,{className:`typography-body text-text p-md block`,children:`I'm a Radio Card C`})})]}),f.args={disabled:!0,name:`radio-card`},d.__docgenInfo={description:``,methods:[],displayName:`Playground`},f.__docgenInfo={description:``,methods:[],displayName:`Disabled`},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`(args: React.ComponentProps<typeof RadioCard> & Record<string, unknown>) => {
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`(args: React.ComponentProps<typeof RadioCard> & Record<string, unknown>) => {
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
}`,...f.parameters?.docs?.source}}},p=[`Playground`,`Disabled`]}))();export{f as Disabled,d as Playground,p as __namedExportsOrder,l as default};