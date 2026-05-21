import{n as e}from"./chunk-jRWAZmH_.js";import{Sr as t,_r as n,eo as r,ho as i,t as a}from"./iframe-DdNEwH1W.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y,b;e((()=>{a(),i(),o=r(),{action:s}=__STORYBOOK_MODULE_ACTIONS__,c={title:`Display & Data/Avatar/Avatar`,component:t,tags:[`autodocs`],parameters:{docs:{description:{component:`Circular representation of a user, showing an image, memoji, initials or fallback icon. Use in headers, comment threads, and member lists.`}}}},l=e=>(0,o.jsx)(t,{...e,image:e.media===`image`?(0,o.jsx)(`img`,{src:`/arcade-docs/assets/image-sample.png`,alt:`Franklin Kudos Profile`,className:`size-full object-cover`}):void 0,memoji:e.media===`memoji`?(0,o.jsx)(`img`,{src:`/arcade-docs/assets/memoji-sample.png`,alt:`Franklin Kudos Memoji`,className:`scale-[1.4] object-cover`}):void 0}),l.args={state:`Online`,size:`medium`,name:`Franklin Kudos`,media:`none`},u={description:`The state of the indicator`,control:{type:`select`},options:[void 0,`Online`,`Offline`,`Busy`,`Pending`,`Notification`]},l.argTypes={state:u,size:{description:`The size of the avatar`,control:{type:`select`},options:[`small`,`medium`,`large`]},name:{description:`The name of the avatar`,control:{type:`text`}},media:{description:`Optional media source for the avatar`,control:{type:`select`},options:[`image`,`memoji`,`none`]}},d=s(`onClick`),f={parameters:{controls:{disable:!0}},render:e=>{let n=[`large`,`medium`,`small`],r=[{media:`image`,name:`Franklin Kudos`},{media:`memoji`,name:`Franklin Kudos`},{media:`none`,name:`Franklin Kudos`},{media:`none`,name:``}];return(0,o.jsx)(`div`,{className:`gap-x-lg gap-y-md grid grid-cols-4`,children:n.map(n=>r.map((r,i)=>(0,o.jsx)(t,{state:e.state,size:n,name:r.name,image:r.media===`image`?(0,o.jsx)(`img`,{src:`/arcade-docs/assets/image-sample.png`,alt:`Franklin Kudos Profile`,className:`size-full object-cover`}):void 0,memoji:r.media===`memoji`?(0,o.jsx)(`img`,{src:`/arcade-docs/assets/memoji-sample.png`,alt:`Franklin Kudos Memoji`,className:`scale-[1.4] object-cover`}):void 0},`${n}-${i}`)))})},argTypes:{state:u}},p={parameters:{controls:{disable:!0}},render:()=>{let e=[`large`,`medium`,`small`],n=[{media:`image`,name:`Franklin Kudos`},{media:`memoji`,name:`Franklin Kudos`},{media:`none`,name:`Franklin Kudos`},{media:`none`,name:``}];return(0,o.jsx)(`div`,{className:`gap-x-lg gap-y-md grid grid-cols-4`,children:e.map(e=>n.map((n,r)=>(0,o.jsx)(t,{state:`Online`,size:e,name:n.name,onClick:d,image:n.media===`image`?(0,o.jsx)(`img`,{src:`/arcade-docs/assets/image-sample.png`,alt:`Franklin Kudos Profile`,className:`size-full object-cover`}):void 0,memoji:n.media===`memoji`?(0,o.jsx)(`img`,{src:`/arcade-docs/assets/memoji-sample.png`,alt:`Franklin Kudos Memoji`,className:`scale-[1.4] object-cover`}):void 0},`${e}-${r}`)))})}},m={parameters:{controls:{disable:!0}},render:()=>{let e=[`large`,`medium`,`small`],n=[{media:`image`,name:`Franklin Kudos`},{media:`memoji`,name:`Franklin Kudos`},{media:`none`,name:`Franklin Kudos`},{media:`none`,name:``}];return(0,o.jsx)(`div`,{className:`gap-x-lg gap-y-md grid grid-cols-4`,children:e.map(e=>n.map((n,r)=>(0,o.jsx)(t,{state:`Online`,size:e,name:n.name,href:`#`,image:n.media===`image`?(0,o.jsx)(`img`,{src:`/arcade-docs/assets/image-sample.png`,alt:`Franklin Kudos Profile`,className:`size-full object-cover`}):void 0,memoji:n.media===`memoji`?(0,o.jsx)(`img`,{src:`/arcade-docs/assets/memoji-sample.png`,alt:`Franklin Kudos Memoji`,className:`scale-[1.4] object-cover`}):void 0},`${e}-${r}`)))})}},h={parameters:{controls:{disable:!0}},render:()=>{let e=[`large`,`medium`,`small`],n=[{media:`image`,name:`Franklin Kudos`},{media:`memoji`,name:`Franklin Kudos`},{media:`none`,name:`Franklin Kudos`},{media:`none`,name:``}];return(0,o.jsx)(`div`,{className:`gap-x-lg gap-y-md grid grid-cols-4`,children:e.map(e=>n.map((n,r)=>(0,o.jsx)(t,{state:`Online`,size:e,name:n.name,disabled:!0,onClick:d,image:n.media===`image`?(0,o.jsx)(`img`,{src:`/arcade-docs/assets/image-sample.png`,alt:`Franklin Kudos Profile`,className:`size-full object-cover`}):void 0,memoji:n.media===`memoji`?(0,o.jsx)(`img`,{src:`/arcade-docs/assets/memoji-sample.png`,alt:`Franklin Kudos Memoji`,className:`scale-[1.4] object-cover`}):void 0},`${e}-${r}`)))})}},g={render:()=>(0,o.jsx)(n,{})},_=({href:e,children:t,...n})=>(0,o.jsx)(`a`,{...n,href:e,"data-next-link":`true`,children:t}),v=({src:e,alt:t,className:n})=>(0,o.jsx)(`img`,{src:e,alt:t,className:n,"data-next-image":`true`}),y={parameters:{controls:{disable:!0},docs:{description:{story:"End-to-end Next.js integration: `linkComponent={NextLink}` for routing, `next/image` via the `image` slot. The rendered nodes below carry `data-next-link` / `data-next-image` so the substitution is visible."}}},render:()=>(0,o.jsx)(`div`,{className:`gap-lg flex items-center`,children:(0,o.jsx)(t,{size:`large`,name:`Franklin Kudos`,href:`/profile`,linkComponent:_,image:(0,o.jsx)(v,{src:`/arcade-docs/assets/image-sample.png`,alt:`Franklin Kudos Profile`,className:`size-full object-cover`})})})},l.__docgenInfo={description:``,methods:[],displayName:`Playground`},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:'(args: React.ComponentProps<typeof Avatar> & Record<string, any>) => {\n  return <Avatar {...args} image={args.media === "image" ? <img src={`${import.meta.env.BASE_URL}assets/image-sample.png`} alt="Franklin Kudos Profile" className="size-full object-cover" /> : undefined} memoji={args.media === "memoji" ? <img src={`${import.meta.env.BASE_URL}assets/memoji-sample.png`} alt="Franklin Kudos Memoji" className="scale-[1.4] object-cover" /> : undefined} />;\n}',...l.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "End-to-end Next.js integration: \`linkComponent={NextLink}\` for routing, \`next/image\` via the \`image\` slot. The rendered nodes below carry \`data-next-link\` / \`data-next-image\` so the substitution is visible."
      }
    }
  },
  render: () => <div className="gap-lg flex items-center">
      <Avatar size="large" name="Franklin Kudos" href="/profile" linkComponent={MockNextLink} image={<MockNextImage src={\`\${import.meta.env.BASE_URL}assets/image-sample.png\`} alt="Franklin Kudos Profile" className="size-full object-cover" />} />
    </div>
}`,...y.parameters?.docs?.source},description:{story:'Demonstrates how a Next.js consumer integrates Arcade\'s `Avatar`:\n\n- `linkComponent` accepts `next/link`\'s `Link` for SPA navigation when an\n  `href` is set.\n- The `image` slot accepts any React node, so `next/image`\'s `Image` drops\n  in directly. The Arcade container already sets size and rounding —\n  `<Image fill … />` fills it.\n\n```tsx\nimport NextLink from "next/link";\nimport NextImage from "next/image";\n\n<Avatar\n  name="Franklin Kudos"\n  href="/profile"\n  linkComponent={NextLink}\n  image={<NextImage fill src="/me.png" alt="Franklin" />}\n/>\n```',...y.parameters?.docs?.description}}},b=[`Playground`,`Static`,`Clickable`,`Link`,`Disabled`,`Skeleton`,`WithNext`]}))();export{p as Clickable,h as Disabled,m as Link,l as Playground,g as Skeleton,f as Static,y as WithNext,b as __namedExportsOrder,c as default};