import{n as e}from"./chunk-jRWAZmH_.js";import{Ir as t,Mo as n,Ur as r,Wr as i,qo as a,t as o}from"./iframe-Cm-nuzEn.js";import{n as s,t as c}from"./figmaDesign-CO6i5n9C.js";var l,u,d,f,p,m,h;e((()=>{o(),a(),s(),l=n(),{action:u}=__STORYBOOK_MODULE_ACTIONS__,d={title:`Display & Data/Badge/Badge`,component:r,tags:[`autodocs`],parameters:{design:c(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=2123-20112`),docs:{description:{component:`Small colored label for status, counts, or metadata. Use inline next to text to flag state or categorize items.`}}}},f=({text:e,showCloseButton:t,...n})=>(0,l.jsx)(`div`,{children:(0,l.jsx)(r,{...n,type:t?`filter`:void 0,onDelete:t?u(`onDelete`):void 0,children:e})}),f.args={color:`red`,text:`Badge`,showCloseButton:!1},f.argTypes={color:{description:`The color of the badge`,control:{type:`select`},options:i},showCloseButton:{name:`Close button`,description:`Renders the filter badge with a dismiss control`,control:{type:`boolean`},table:{category:`Playground`}},text:{description:`Label text`,control:{type:`text`},table:{category:`Playground`}}},p={render:e=>{let{text:t,showCloseButton:n,...a}=e;return(0,l.jsx)(`div`,{className:`gap-x-md flex`,children:i.map(e=>(0,l.jsx)(r,{color:e,...a,type:n?`filter`:void 0,onDelete:n?u(`onDelete`):void 0,children:t},e))})},args:{text:`Badge`,showCloseButton:!1},argTypes:{color:{control:!1,table:{disable:!0}},type:{control:!1,table:{disable:!0}},id:{control:!1,table:{disable:!0}},className:{control:!1,table:{disable:!0}},onDelete:{control:!1,table:{disable:!0}},buttonProps:{control:!1,table:{disable:!0}},showCloseButton:{name:`Close button`,description:`Renders each badge as a filter badge with a dismiss control`,control:{type:`boolean`},table:{category:`Overview`}},text:{description:`Label text`,control:{type:`text`},table:{category:`Overview`}}}},m={render:()=>(0,l.jsx)(t,{})},f.__docgenInfo={description:``,methods:[],displayName:`Playground`,props:{text:{required:!1,tsType:{name:`string`},description:``},showCloseButton:{required:!1,tsType:{name:`boolean`},description:``}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`({
  text,
  showCloseButton,
  ...args
}: React.ComponentProps<typeof Badge> & {
  text?: string;
  showCloseButton?: boolean;
}) => {
  return <div>
      <Badge {...args} type={showCloseButton ? "filter" : undefined} onDelete={showCloseButton ? action("onDelete") : undefined}>
        {text}
      </Badge>
    </div>;
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      text,
      showCloseButton,
      ...rest
    } = args;
    return <div className="gap-x-md flex">
        {BadgeColors.map(color => <Badge key={color} color={color} {...rest} type={showCloseButton ? "filter" : undefined} onDelete={showCloseButton ? action("onDelete") : undefined}>
            {text}
          </Badge>)}
      </div>;
  },
  args: {
    text: "Badge",
    showCloseButton: false
  },
  argTypes: {
    color: {
      control: false,
      table: {
        disable: true
      }
    },
    type: {
      control: false,
      table: {
        disable: true
      }
    },
    id: {
      control: false,
      table: {
        disable: true
      }
    },
    className: {
      control: false,
      table: {
        disable: true
      }
    },
    onDelete: {
      control: false,
      table: {
        disable: true
      }
    },
    buttonProps: {
      control: false,
      table: {
        disable: true
      }
    },
    showCloseButton: {
      name: "Close button",
      description: "Renders each badge as a filter badge with a dismiss control",
      control: {
        type: "boolean"
      },
      table: {
        category: "Overview"
      }
    },
    text: {
      description: "Label text",
      control: {
        type: "text"
      },
      table: {
        category: "Overview"
      }
    }
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <BadgeSkeleton />
}`,...m.parameters?.docs?.source}}},h=[`Playground`,`Overview`,`Skeleton`]}))();export{p as Overview,f as Playground,m as Skeleton,h as __namedExportsOrder,d as default};