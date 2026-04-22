import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{B as a,d as g}from"./ContextMenu-D_7vNk0Q.js";import"./index-CY-HDqYb.js";import{a as m}from"./index-B-lxVbXh.js";import"./index-A6zbrgSY.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";import"./v4-CtRu48qb.js";const P={title:"Components/Badge/Badge",component:a},e=({text:s,showCloseButton:t,...o})=>r.jsx("div",{children:r.jsx(a,{...o,type:t?"filter":void 0,onDelete:t?m("onDelete"):void 0,children:s})});e.args={color:"red",text:"Badge",showCloseButton:!1};e.argTypes={color:{description:"The color of the badge",control:{type:"select"},options:g},showCloseButton:{name:"Close button",description:"Renders the filter badge with a dismiss control",control:{type:"boolean"},table:{category:"Playground"}},text:{description:"Label text",control:{type:"text"},table:{category:"Playground"}}};const n={render:s=>{const{text:t,showCloseButton:o,...f}=s;return r.jsx("div",{className:"gap-x-md flex",children:g.map(l=>r.jsx(a,{color:l,...f,type:o?"filter":void 0,onDelete:o?m("onDelete"):void 0,children:t},l))})},args:{text:"Badge",showCloseButton:!1},argTypes:{color:{control:!1,table:{disable:!0}},type:{control:!1,table:{disable:!0}},id:{control:!1,table:{disable:!0}},className:{control:!1,table:{disable:!0}},onDelete:{control:!1,table:{disable:!0}},buttonProps:{control:!1,table:{disable:!0}},showCloseButton:{name:"Close button",description:"Renders each badge as a filter badge with a dismiss control",control:{type:"boolean"},table:{category:"Overview"}},text:{description:"Label text",control:{type:"text"},table:{category:"Overview"}}}};e.__docgenInfo={description:"",methods:[],displayName:"Playground",props:{text:{required:!1,tsType:{name:"string"},description:""},showCloseButton:{required:!1,tsType:{name:"boolean"},description:""}}};e.__docgenInfo={description:"",methods:[],displayName:"Playground",props:{text:{required:!1,tsType:{name:"string"},description:""},showCloseButton:{required:!1,tsType:{name:"boolean"},description:""}}};var i,d,c;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`({
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
}`,...(c=(d=e.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var p,u,b;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(b=(u=n.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};const T=["Playground","Overview"];export{n as Overview,e as Playground,T as __namedExportsOrder,P as default};
