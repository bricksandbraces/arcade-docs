import{n as e}from"./chunk-jRWAZmH_.js";import{Di as t,Hi as n,pn as r,t as i}from"./iframe-Cv5UBGnq.js";var a,o,s,c,l,u,d,f,p,m,h;e((()=>{i(),n(),a=t(),{action:o}=__STORYBOOK_MODULE_ACTIONS__,s={title:`Components/Avatar/Avatar`,component:r,tags:[`autodocs`],parameters:{docs:{description:{component:`Circular representation of a user, showing an image, memoji, initials or fallback icon. Use in headers, comment threads, and member lists.`}}}},c=e=>(0,a.jsx)(r,{...e,image:e.media===`image`?(0,a.jsx)(`img`,{src:`/arcade-docs/assets/image-sample.png`,alt:`Franklin Kudos Profile`,className:`size-full object-cover`}):void 0,memoji:e.media===`memoji`?(0,a.jsx)(`img`,{src:`/arcade-docs/assets/memoji-sample.png`,alt:`Franklin Kudos Memoji`,className:`scale-[1.4] object-cover`}):void 0}),c.args={state:`Online`,size:`medium`,name:`Franklin Kudos`,media:`none`},l={description:`The state of the indicator`,control:{type:`select`},options:[void 0,`Online`,`Offline`,`Busy`,`Pending`,`Notification`]},c.argTypes={state:l,size:{description:`The size of the avatar`,control:{type:`select`},options:[`small`,`medium`,`large`]},name:{description:`The name of the avatar`,control:{type:`text`}},media:{description:`Optional media source for the avatar`,control:{type:`select`},options:[`image`,`memoji`,`none`]}},u=o(`onClick`),d={parameters:{controls:{disable:!0}},render:e=>{let t=[`large`,`medium`,`small`],n=[{media:`image`,name:`Franklin Kudos`},{media:`memoji`,name:`Franklin Kudos`},{media:`none`,name:`Franklin Kudos`},{media:`none`,name:``}];return(0,a.jsx)(`div`,{className:`gap-x-lg gap-y-md grid grid-cols-4`,children:t.map(t=>n.map((n,i)=>(0,a.jsx)(r,{state:e.state,size:t,name:n.name,image:n.media===`image`?(0,a.jsx)(`img`,{src:`/arcade-docs/assets/image-sample.png`,alt:`Franklin Kudos Profile`,className:`size-full object-cover`}):void 0,memoji:n.media===`memoji`?(0,a.jsx)(`img`,{src:`/arcade-docs/assets/memoji-sample.png`,alt:`Franklin Kudos Memoji`,className:`scale-[1.4] object-cover`}):void 0},`${t}-${i}`)))})},argTypes:{state:l}},f={parameters:{controls:{disable:!0}},render:()=>{let e=[`large`,`medium`,`small`],t=[{media:`image`,name:`Franklin Kudos`},{media:`memoji`,name:`Franklin Kudos`},{media:`none`,name:`Franklin Kudos`},{media:`none`,name:``}];return(0,a.jsx)(`div`,{className:`gap-x-lg gap-y-md grid grid-cols-4`,children:e.map(e=>t.map((t,n)=>(0,a.jsx)(r,{state:`Online`,size:e,name:t.name,onClick:u,image:t.media===`image`?(0,a.jsx)(`img`,{src:`/arcade-docs/assets/image-sample.png`,alt:`Franklin Kudos Profile`,className:`size-full object-cover`}):void 0,memoji:t.media===`memoji`?(0,a.jsx)(`img`,{src:`/arcade-docs/assets/memoji-sample.png`,alt:`Franklin Kudos Memoji`,className:`scale-[1.4] object-cover`}):void 0},`${e}-${n}`)))})}},p={parameters:{controls:{disable:!0}},render:()=>{let e=[`large`,`medium`,`small`],t=[{media:`image`,name:`Franklin Kudos`},{media:`memoji`,name:`Franklin Kudos`},{media:`none`,name:`Franklin Kudos`},{media:`none`,name:``}];return(0,a.jsx)(`div`,{className:`gap-x-lg gap-y-md grid grid-cols-4`,children:e.map(e=>t.map((t,n)=>(0,a.jsx)(r,{state:`Online`,size:e,name:t.name,href:`#`,image:t.media===`image`?(0,a.jsx)(`img`,{src:`/arcade-docs/assets/image-sample.png`,alt:`Franklin Kudos Profile`,className:`size-full object-cover`}):void 0,memoji:t.media===`memoji`?(0,a.jsx)(`img`,{src:`/arcade-docs/assets/memoji-sample.png`,alt:`Franklin Kudos Memoji`,className:`scale-[1.4] object-cover`}):void 0},`${e}-${n}`)))})}},m={parameters:{controls:{disable:!0}},render:()=>{let e=[`large`,`medium`,`small`],t=[{media:`image`,name:`Franklin Kudos`},{media:`memoji`,name:`Franklin Kudos`},{media:`none`,name:`Franklin Kudos`},{media:`none`,name:``}];return(0,a.jsx)(`div`,{className:`gap-x-lg gap-y-md grid grid-cols-4`,children:e.map(e=>t.map((t,n)=>(0,a.jsx)(r,{state:`Online`,size:e,name:t.name,disabled:!0,onClick:u,image:t.media===`image`?(0,a.jsx)(`img`,{src:`/arcade-docs/assets/image-sample.png`,alt:`Franklin Kudos Profile`,className:`size-full object-cover`}):void 0,memoji:t.media===`memoji`?(0,a.jsx)(`img`,{src:`/arcade-docs/assets/memoji-sample.png`,alt:`Franklin Kudos Memoji`,className:`scale-[1.4] object-cover`}):void 0},`${e}-${n}`)))})}},c.__docgenInfo={description:``,methods:[],displayName:`Playground`},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:'(args: React.ComponentProps<typeof Avatar> & Record<string, any>) => {\n  return <Avatar {...args} image={args.media === "image" ? <img src={`${import.meta.env.BASE_URL}assets/image-sample.png`} alt="Franklin Kudos Profile" className="size-full object-cover" /> : undefined} memoji={args.media === "memoji" ? <img src={`${import.meta.env.BASE_URL}assets/memoji-sample.png`} alt="Franklin Kudos Memoji" className="scale-[1.4] object-cover" /> : undefined} />;\n}',...c.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
        {sizes.map(size => configurations.map((config, colIndex) => <Avatar key={\`\${size}-\${colIndex}\`} state="Online" size={size} name={config.name} href="#" image={config.media === "image" ? <img src={\`\${import.meta.env.BASE_URL}assets/image-sample.png\`} alt="Franklin Kudos Profile" className="size-full object-cover" /> : undefined} memoji={config.media === "memoji" ? <img src={\`\${import.meta.env.BASE_URL}assets/memoji-sample.png\`} alt="Franklin Kudos Memoji" className="scale-[1.4] object-cover" /> : undefined} />))}
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
        {sizes.map(size => configurations.map((config, colIndex) => <Avatar key={\`\${size}-\${colIndex}\`} state="Online" size={size} name={config.name} disabled onClick={clickAction} image={config.media === "image" ? <img src={\`\${import.meta.env.BASE_URL}assets/image-sample.png\`} alt="Franklin Kudos Profile" className="size-full object-cover" /> : undefined} memoji={config.media === "memoji" ? <img src={\`\${import.meta.env.BASE_URL}assets/memoji-sample.png\`} alt="Franklin Kudos Memoji" className="scale-[1.4] object-cover" /> : undefined} />))}
      </div>;
  }
}`,...m.parameters?.docs?.source}}},h=[`Playground`,`Static`,`Clickable`,`Link`,`Disabled`]}))();export{f as Clickable,m as Disabled,p as Link,c as Playground,d as Static,h as __namedExportsOrder,s as default};