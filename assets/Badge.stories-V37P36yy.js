import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{B as a,d as m}from"./ContextMenuList-D_lNAfMU.js";import"./index-CY-HDqYb.js";import{a as g}from"./index-B-lxVbXh.js";import"./index-A6zbrgSY.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";import"./index-ZRCHFLd-.js";import"./sizes-BpUsT7VU.js";import"./colors-CoOIoG7W.js";import"./v4-CtRu48qb.js";const b={title:"Components/Badge/Badge",component:a},e=({text:o,...r})=>n.jsx("div",{children:n.jsx(a,{...r,onDelete:g("onDelete"),children:o})});e.args={color:"red",text:"Badge"};e.argTypes={color:{description:"The color of the badge",control:{type:"select"},options:m}};const t={parameters:{controls:{disable:!0}},render:o=>n.jsx("div",{className:"gap-x-md flex",children:m.map(r=>n.jsx(a,{color:r,...o,onDelete:g("onDelete"),children:o.text},r))}),args:{type:void 0,text:"Badge"},argTypes:{type:{description:"The type of the badge",control:{type:"select"},options:[void 0,"filter"]}}};e.__docgenInfo={description:"",methods:[],displayName:"Playground"};e.__docgenInfo={description:"",methods:[],displayName:"Playground"};var s,d,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`({
  text,
  ...args
}: React.ComponentProps<typeof Badge> & Record<string, any>) => {
  return <div>
      <Badge {...args} onDelete={action("onDelete")}>
        {text}
      </Badge>
    </div>;
}`,...(i=(d=e.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var p,c,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: (args: any) => {
    return <div className="gap-x-md flex">
        {BadgeColors.map(color => <Badge key={color} color={color} {...args} onDelete={action("onDelete")}>
            {args.text}
          </Badge>)}
      </div>;
  },
  args: {
    type: undefined,
    text: "Badge"
  },
  argTypes: {
    type: {
      description: "The type of the badge",
      control: {
        type: "select"
      },
      options: [undefined, "filter"]
    }
  }
}`,...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const P=["Playground","Overview"];export{t as Overview,e as Playground,P as __namedExportsOrder,b as default};
