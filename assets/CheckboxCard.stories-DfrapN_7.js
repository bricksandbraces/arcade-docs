import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{n as t}from"./ContextMenuList-D_gCgxLB.js";import{R as r}from"./index-CY-HDqYb.js";import{a as d}from"./index-B-lxVbXh.js";import"./index-A6zbrgSY.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";import"./index-ZRCHFLd-.js";import"./sizes-BpUsT7VU.js";import"./colors-CoOIoG7W.js";import"./v4-CtRu48qb.js";const P={title:"Components/CheckboxCard",component:t},l="flex flex-wrap gap-md",c=n=>{const[s,i]=r.useState(!0),[b,g]=r.useState(!1),[y,N]=r.useState(!1);return e.jsxs("div",{className:l,children:[e.jsx(t,{...n,checked:s,onChange:a=>{d("onChange")(a),i(a.target.checked)},className:"h-[218px] w-[388px] shrink-0",children:e.jsx("span",{className:"typography-body text-text p-md block",children:"I'm a Checkbox Card A"})}),e.jsx(t,{...n,checked:b,onChange:a=>{d("onChange")(a),g(a.target.checked)},className:"h-[218px] w-[388px] shrink-0",children:e.jsx("span",{className:"typography-body text-text p-md block",children:"I'm a Checkbox Card B"})}),e.jsx(t,{...n,checked:y,onChange:a=>{d("onChange")(a),N(a.target.checked)},className:"h-[218px] w-[388px] shrink-0",children:e.jsx("span",{className:"typography-body text-text p-md block",children:"I'm a Checkbox Card C"})})]})};c.args={disabled:!1,name:"checkbox-card"};const o=n=>e.jsxs("div",{className:l,children:[e.jsx(t,{...n,checked:!0,disabled:!0,onChange:s=>d("onChange")(s),className:"h-[218px] w-[388px] shrink-0",children:e.jsx("span",{className:"typography-body text-text p-md block",children:"I'm a Checkbox Card A"})}),e.jsx(t,{...n,checked:!1,disabled:!0,onChange:s=>d("onChange")(s),className:"h-[218px] w-[388px] shrink-0",children:e.jsx("span",{className:"typography-body text-text p-md block",children:"I'm a Checkbox Card B"})}),e.jsx(t,{...n,checked:!1,disabled:!0,onChange:s=>d("onChange")(s),className:"h-[218px] w-[388px] shrink-0",children:e.jsx("span",{className:"typography-body text-text p-md block",children:"I'm a Checkbox Card C"})})]});o.args={disabled:!0,name:"checkbox-card"};c.__docgenInfo={description:"",methods:[],displayName:"Playground"};o.__docgenInfo={description:"",methods:[],displayName:"Disabled"};c.__docgenInfo={description:"",methods:[],displayName:"Playground"};o.__docgenInfo={description:"",methods:[],displayName:"Disabled"};var h,p,C;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`(args: React.ComponentProps<typeof CheckboxCard> & Record<string, unknown>) => {
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
}`,...(C=(p=c.parameters)==null?void 0:p.docs)==null?void 0:C.source}}};var x,m,k;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`(args: React.ComponentProps<typeof CheckboxCard> & Record<string, unknown>) => {
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
}`,...(k=(m=o.parameters)==null?void 0:m.docs)==null?void 0:k.source}}};const D=["Playground","Disabled"];export{o as Disabled,c as Playground,D as __namedExportsOrder,P as default};
