import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{bm as r}from"./ContextMenuList-UUP63zD1.js";import{R as g}from"./index-CY-HDqYb.js";import{a as t}from"./index-B-lxVbXh.js";import"./index-A6zbrgSY.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";import"./v4-CtRu48qb.js";const w={title:"Components/RadioCard",component:r},C="flex flex-wrap gap-md",s=n=>{const[e,c]=g.useState("a");return a.jsxs("div",{className:C,children:[a.jsx(r,{...n,name:"radio-card",value:"a",checked:e==="a",onChange:d=>{t("onChange")(d),d.target.checked&&c("a")},className:"h-[218px] w-[388px] shrink-0",children:a.jsx("span",{className:"typography-body text-text p-md block",children:"I'm a Radio Card A"})}),a.jsx(r,{...n,name:"radio-card",value:"b",checked:e==="b",onChange:d=>{t("onChange")(d),d.target.checked&&c("b")},className:"h-[218px] w-[388px] shrink-0",children:a.jsx("span",{className:"typography-body text-text p-md block",children:"I'm a Radio Card B"})}),a.jsx(r,{...n,name:"radio-card",value:"c",checked:e==="c",onChange:d=>{t("onChange")(d),d.target.checked&&c("c")},className:"h-[218px] w-[388px] shrink-0",children:a.jsx("span",{className:"typography-body text-text p-md block",children:"I'm a Radio Card C"})})]})};s.args={disabled:!1,name:"radio-card"};const o=n=>a.jsxs("div",{className:C,children:[a.jsx(r,{...n,name:"radio-card-disabled",value:"a",checked:!0,disabled:!0,onChange:e=>t("onChange")(e),className:"h-[218px] w-[388px] shrink-0",children:a.jsx("span",{className:"typography-body text-text p-md block",children:"I'm a Radio Card A"})}),a.jsx(r,{...n,name:"radio-card-disabled",value:"b",checked:!1,disabled:!0,onChange:e=>t("onChange")(e),className:"h-[218px] w-[388px] shrink-0",children:a.jsx("span",{className:"typography-body text-text p-md block",children:"I'm a Radio Card B"})}),a.jsx(r,{...n,name:"radio-card-disabled",value:"c",checked:!1,disabled:!0,onChange:e=>t("onChange")(e),className:"h-[218px] w-[388px] shrink-0",children:a.jsx("span",{className:"typography-body text-text p-md block",children:"I'm a Radio Card C"})})]});o.args={disabled:!0,name:"radio-card"};s.__docgenInfo={description:"",methods:[],displayName:"Playground"};o.__docgenInfo={description:"",methods:[],displayName:"Disabled"};s.__docgenInfo={description:"",methods:[],displayName:"Playground"};o.__docgenInfo={description:"",methods:[],displayName:"Disabled"};var i,p,l;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`(args: React.ComponentProps<typeof RadioCard> & Record<string, unknown>) => {
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
}`,...(l=(p=s.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var m,h,x;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`(args: React.ComponentProps<typeof RadioCard> & Record<string, unknown>) => {
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
}`,...(x=(h=o.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const j=["Playground","Disabled"];export{o as Disabled,s as Playground,j as __namedExportsOrder,w as default};
