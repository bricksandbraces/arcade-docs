import{n as e}from"./chunk-jRWAZmH_.js";import{Za as t,fo as n,gr as r,t as i,xr as a}from"./iframe-D1tTUzW4.js";var o,s,c,l,u,d,f,p,m,h,g,_;e((()=>{i(),n(),o=t(),{action:s}=__STORYBOOK_MODULE_ACTIONS__,c={title:`Display & Data/Avatar/Avatar`,component:a,tags:[`autodocs`],parameters:{docs:{description:{component:`Circular representation of a user, showing an image, memoji, initials or fallback icon. Use in headers, comment threads, and member lists.`}}}},l=e=>(0,o.jsx)(a,{...e,image:e.media===`image`?(0,o.jsx)(`img`,{src:`/arcade-docs/assets/image-sample.png`,alt:`Franklin Kudos Profile`,className:`size-full object-cover`}):void 0,memoji:e.media===`memoji`?(0,o.jsx)(`img`,{src:`/arcade-docs/assets/memoji-sample.png`,alt:`Franklin Kudos Memoji`,className:`scale-[1.4] object-cover`}):void 0}),l.args={state:`Online`,size:`medium`,name:`Franklin Kudos`,media:`none`},u={description:`The state of the indicator`,control:{type:`select`},options:[void 0,`Online`,`Offline`,`Busy`,`Pending`,`Notification`]},l.argTypes={state:u,size:{description:`The size of the avatar`,control:{type:`select`},options:[`small`,`medium`,`large`]},name:{description:`The name of the avatar`,control:{type:`text`}},media:{description:`Optional media source for the avatar`,control:{type:`select`},options:[`image`,`memoji`,`none`]}},d=s(`onClick`),f={parameters:{controls:{disable:!0}},render:e=>{let t=[`large`,`medium`,`small`],n=[{media:`image`,name:`Franklin Kudos`},{media:`memoji`,name:`Franklin Kudos`},{media:`none`,name:`Franklin Kudos`},{media:`none`,name:``}];return(0,o.jsx)(`div`,{className:`gap-x-lg gap-y-md grid grid-cols-4`,children:t.map(t=>n.map((n,r)=>(0,o.jsx)(a,{state:e.state,size:t,name:n.name,image:n.media===`image`?(0,o.jsx)(`img`,{src:`/arcade-docs/assets/image-sample.png`,alt:`Franklin Kudos Profile`,className:`size-full object-cover`}):void 0,memoji:n.media===`memoji`?(0,o.jsx)(`img`,{src:`/arcade-docs/assets/memoji-sample.png`,alt:`Franklin Kudos Memoji`,className:`scale-[1.4] object-cover`}):void 0},`${t}-${r}`)))})},argTypes:{state:u}},p={parameters:{controls:{disable:!0}},render:()=>{let e=[`large`,`medium`,`small`],t=[{media:`image`,name:`Franklin Kudos`},{media:`memoji`,name:`Franklin Kudos`},{media:`none`,name:`Franklin Kudos`},{media:`none`,name:``}];return(0,o.jsx)(`div`,{className:`gap-x-lg gap-y-md grid grid-cols-4`,children:e.map(e=>t.map((t,n)=>(0,o.jsx)(a,{state:`Online`,size:e,name:t.name,onClick:d,image:t.media===`image`?(0,o.jsx)(`img`,{src:`/arcade-docs/assets/image-sample.png`,alt:`Franklin Kudos Profile`,className:`size-full object-cover`}):void 0,memoji:t.media===`memoji`?(0,o.jsx)(`img`,{src:`/arcade-docs/assets/memoji-sample.png`,alt:`Franklin Kudos Memoji`,className:`scale-[1.4] object-cover`}):void 0},`${e}-${n}`)))})}},m={parameters:{controls:{disable:!0}},render:()=>{let e=[`large`,`medium`,`small`],t=[{media:`image`,name:`Franklin Kudos`},{media:`memoji`,name:`Franklin Kudos`},{media:`none`,name:`Franklin Kudos`},{media:`none`,name:``}];return(0,o.jsx)(`div`,{className:`gap-x-lg gap-y-md grid grid-cols-4`,children:e.map(e=>t.map((t,n)=>(0,o.jsx)(a,{state:`Online`,size:e,name:t.name,href:`#`,image:t.media===`image`?(0,o.jsx)(`img`,{src:`/arcade-docs/assets/image-sample.png`,alt:`Franklin Kudos Profile`,className:`size-full object-cover`}):void 0,memoji:t.media===`memoji`?(0,o.jsx)(`img`,{src:`/arcade-docs/assets/memoji-sample.png`,alt:`Franklin Kudos Memoji`,className:`scale-[1.4] object-cover`}):void 0},`${e}-${n}`)))})}},h={parameters:{controls:{disable:!0}},render:()=>{let e=[`large`,`medium`,`small`],t=[{media:`image`,name:`Franklin Kudos`},{media:`memoji`,name:`Franklin Kudos`},{media:`none`,name:`Franklin Kudos`},{media:`none`,name:``}];return(0,o.jsx)(`div`,{className:`gap-x-lg gap-y-md grid grid-cols-4`,children:e.map(e=>t.map((t,n)=>(0,o.jsx)(a,{state:`Online`,size:e,name:t.name,disabled:!0,onClick:d,image:t.media===`image`?(0,o.jsx)(`img`,{src:`/arcade-docs/assets/image-sample.png`,alt:`Franklin Kudos Profile`,className:`size-full object-cover`}):void 0,memoji:t.media===`memoji`?(0,o.jsx)(`img`,{src:`/arcade-docs/assets/memoji-sample.png`,alt:`Franklin Kudos Memoji`,className:`scale-[1.4] object-cover`}):void 0},`${e}-${n}`)))})}},g={render:()=>(0,o.jsx)(r,{})},l.__docgenInfo={description:``,methods:[],displayName:`Playground`},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:'(args: React.ComponentProps<typeof Avatar> & Record<string, any>) => {\n  return <Avatar {...args} image={args.media === "image" ? <img src={`${import.meta.env.BASE_URL}assets/image-sample.png`} alt="Franklin Kudos Profile" className="size-full object-cover" /> : undefined} memoji={args.media === "memoji" ? <img src={`${import.meta.env.BASE_URL}assets/memoji-sample.png`} alt="Franklin Kudos Memoji" className="scale-[1.4] object-cover" /> : undefined} />;\n}',...l.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: (args: any) => {
    const sizes = ["large", "medium", "small"] as const;
    const configurations = [{
      media: "image",
      name: "Franklin Kudos"
    }, {
      media: "memoji",
      name: "Franklin Kudos"
    }, {
      media: "none",
      name: "Franklin Kudos"
    }, {
      media: "none",
      name: ""
    }];
    return <div className="gap-x-lg gap-y-md grid grid-cols-4">
        {sizes.map(size => configurations.map((config, colIndex) => <Avatar key={\`\${size}-\${colIndex}\`} state={args.state} size={size} name={config.name} image={config.media === "image" ? <img src={\`\${import.meta.env.BASE_URL}assets/image-sample.png\`} alt="Franklin Kudos Profile" className="size-full object-cover" /> : undefined} memoji={config.media === "memoji" ? <img src={\`\${import.meta.env.BASE_URL}assets/memoji-sample.png\`} alt="Franklin Kudos Memoji" className="scale-[1.4] object-cover" /> : undefined} />))}
      </div>;
  },
  argTypes: {
    state: stateArg
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const sizes = ["large", "medium", "small"] as const;
    const configurations = [{
      media: "image" as const,
      name: "Franklin Kudos"
    }, {
      media: "memoji" as const,
      name: "Franklin Kudos"
    }, {
      media: "none" as const,
      name: "Franklin Kudos"
    }, {
      media: "none" as const,
      name: ""
    }];
    return <div className="gap-x-lg gap-y-md grid grid-cols-4">
        {sizes.map(size => configurations.map((config, colIndex) => <Avatar key={\`\${size}-\${colIndex}\`} state="Online" size={size} name={config.name} onClick={clickAction} image={config.media === "image" ? <img src={\`\${import.meta.env.BASE_URL}assets/image-sample.png\`} alt="Franklin Kudos Profile" className="size-full object-cover" /> : undefined} memoji={config.media === "memoji" ? <img src={\`\${import.meta.env.BASE_URL}assets/memoji-sample.png\`} alt="Franklin Kudos Memoji" className="scale-[1.4] object-cover" /> : undefined} />))}
      </div>;
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const sizes = ["large", "medium", "small"] as const;
    const configurations = [{
      media: "image" as const,
      name: "Franklin Kudos"
    }, {
      media: "memoji" as const,
      name: "Franklin Kudos"
    }, {
      media: "none" as const,
      name: "Franklin Kudos"
    }, {
      media: "none" as const,
      name: ""
    }];
    return <div className="gap-x-lg gap-y-md grid grid-cols-4">
        {sizes.map(size => configurations.map((config, colIndex) => <Avatar key={\`\${size}-\${colIndex}\`} state="Online" size={size} name={config.name} href="#" image={config.media === "image" ? <img src={\`\${import.meta.env.BASE_URL}assets/image-sample.png\`} alt="Franklin Kudos Profile" className="size-full object-cover" /> : undefined} memoji={config.media === "memoji" ? <img src={\`\${import.meta.env.BASE_URL}assets/memoji-sample.png\`} alt="Franklin Kudos Memoji" className="scale-[1.4] object-cover" /> : undefined} />))}
      </div>;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const sizes = ["large", "medium", "small"] as const;
    const configurations = [{
      media: "image" as const,
      name: "Franklin Kudos"
    }, {
      media: "memoji" as const,
      name: "Franklin Kudos"
    }, {
      media: "none" as const,
      name: "Franklin Kudos"
    }, {
      media: "none" as const,
      name: ""
    }];
    return <div className="gap-x-lg gap-y-md grid grid-cols-4">
        {sizes.map(size => configurations.map((config, colIndex) => <Avatar key={\`\${size}-\${colIndex}\`} state="Online" size={size} name={config.name} disabled onClick={clickAction} image={config.media === "image" ? <img src={\`\${import.meta.env.BASE_URL}assets/image-sample.png\`} alt="Franklin Kudos Profile" className="size-full object-cover" /> : undefined} memoji={config.media === "memoji" ? <img src={\`\${import.meta.env.BASE_URL}assets/memoji-sample.png\`} alt="Franklin Kudos Memoji" className="scale-[1.4] object-cover" /> : undefined} />))}
      </div>;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <AvatarSkeleton />
}`,...g.parameters?.docs?.source}}},_=[`Playground`,`Static`,`Clickable`,`Link`,`Disabled`,`Skeleton`]}))();export{p as Clickable,h as Disabled,m as Link,l as Playground,g as Skeleton,f as Static,_ as __namedExportsOrder,c as default};