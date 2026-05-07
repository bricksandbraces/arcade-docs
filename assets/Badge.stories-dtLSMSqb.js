import{n as e}from"./chunk-jRWAZmH_.js";import{On as t,ca as n,kn as r,qi as i,t as a}from"./iframe-BmX5hFjR.js";var o,s,c,l,u,d;e((()=>{a(),n(),o=i(),{action:s}=__STORYBOOK_MODULE_ACTIONS__,c={title:`Components/Badge/Badge`,component:t,tags:[`autodocs`],parameters:{docs:{description:{component:`Small colored label for status, counts, or metadata. Use inline next to text to flag state or categorize items.`}}}},l=({text:e,showCloseButton:n,...r})=>(0,o.jsx)(`div`,{children:(0,o.jsx)(t,{...r,type:n?`filter`:void 0,onDelete:n?s(`onDelete`):void 0,children:e})}),l.args={color:`red`,text:`Badge`,showCloseButton:!1},l.argTypes={color:{description:`The color of the badge`,control:{type:`select`},options:r},showCloseButton:{name:`Close button`,description:`Renders the filter badge with a dismiss control`,control:{type:`boolean`},table:{category:`Playground`}},text:{description:`Label text`,control:{type:`text`},table:{category:`Playground`}}},u={render:e=>{let{text:n,showCloseButton:i,...a}=e;return(0,o.jsx)(`div`,{className:`gap-x-md flex`,children:r.map(e=>(0,o.jsx)(t,{color:e,...a,type:i?`filter`:void 0,onDelete:i?s(`onDelete`):void 0,children:n},e))})},args:{text:`Badge`,showCloseButton:!1},argTypes:{color:{control:!1,table:{disable:!0}},type:{control:!1,table:{disable:!0}},id:{control:!1,table:{disable:!0}},className:{control:!1,table:{disable:!0}},onDelete:{control:!1,table:{disable:!0}},buttonProps:{control:!1,table:{disable:!0}},showCloseButton:{name:`Close button`,description:`Renders each badge as a filter badge with a dismiss control`,control:{type:`boolean`},table:{category:`Overview`}},text:{description:`Label text`,control:{type:`text`},table:{category:`Overview`}}}},l.__docgenInfo={description:``,methods:[],displayName:`Playground`,props:{text:{required:!1,tsType:{name:`string`},description:``},showCloseButton:{required:!1,tsType:{name:`boolean`},description:``}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`({
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d=[`Playground`,`Overview`]}))();export{u as Overview,l as Playground,d as __namedExportsOrder,c as default};