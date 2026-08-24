import{n as e}from"./chunk-jRWAZmH_.js";import{Fr as t,Ir as n,Or as r,ko as i,mo as a,t as o}from"./iframe-DsWaMiRm.js";var s,c,l,u,d,f,p;e((()=>{o(),i(),s=a(),{action:c}=__STORYBOOK_MODULE_ACTIONS__,l={title:`Display & Data/Badge/Badge`,component:t,tags:[`autodocs`],parameters:{docs:{description:{component:`Small colored label for status, counts, or metadata. Use inline next to text to flag state or categorize items.`}}}},u=({text:e,showCloseButton:n,...r})=>(0,s.jsx)(`div`,{children:(0,s.jsx)(t,{...r,type:n?`filter`:void 0,onDelete:n?c(`onDelete`):void 0,children:e})}),u.args={color:`red`,text:`Badge`,showCloseButton:!1},u.argTypes={color:{description:`The color of the badge`,control:{type:`select`},options:n},showCloseButton:{name:`Close button`,description:`Renders the filter badge with a dismiss control`,control:{type:`boolean`},table:{category:`Playground`}},text:{description:`Label text`,control:{type:`text`},table:{category:`Playground`}}},d={render:e=>{let{text:r,showCloseButton:i,...a}=e;return(0,s.jsx)(`div`,{className:`gap-x-md flex`,children:n.map(e=>(0,s.jsx)(t,{color:e,...a,type:i?`filter`:void 0,onDelete:i?c(`onDelete`):void 0,children:r},e))})},args:{text:`Badge`,showCloseButton:!1},argTypes:{color:{control:!1,table:{disable:!0}},type:{control:!1,table:{disable:!0}},id:{control:!1,table:{disable:!0}},className:{control:!1,table:{disable:!0}},onDelete:{control:!1,table:{disable:!0}},buttonProps:{control:!1,table:{disable:!0}},showCloseButton:{name:`Close button`,description:`Renders each badge as a filter badge with a dismiss control`,control:{type:`boolean`},table:{category:`Overview`}},text:{description:`Label text`,control:{type:`text`},table:{category:`Overview`}}}},f={render:()=>(0,s.jsx)(r,{})},u.__docgenInfo={description:``,methods:[],displayName:`Playground`,props:{text:{required:!1,tsType:{name:`string`},description:``},showCloseButton:{required:!1,tsType:{name:`boolean`},description:``}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`({
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <BadgeSkeleton />
}`,...f.parameters?.docs?.source}}},p=[`Playground`,`Overview`,`Skeleton`]}))();export{d as Overview,u as Playground,f as Skeleton,p as __namedExportsOrder,l as default};