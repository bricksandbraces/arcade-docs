import{n as e}from"./chunk-jRWAZmH_.js";import{Hr as t,Lr as n,Mo as r,qo as i,t as a}from"./iframe-a8-f9nXR.js";import{n as o,t as s}from"./figmaDesign-CO6i5n9C.js";var c,l,u,d,f,p,m,h,g,_,v,y,b,x,S;e((()=>{a(),i(),o(),c=r(),{action:l}=__STORYBOOK_MODULE_ACTIONS__,u={title:`Display & Data/Avatar/Avatar`,component:t,tags:[`autodocs`],parameters:{design:s(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=2127-26200`),docs:{description:{component:`Circular representation of a user, showing an image, memoji, initials or fallback icon. Use in headers, comment threads, and member lists.`}}}},d=e=>(0,c.jsx)(t,{...e,image:e.media===`image`?(0,c.jsx)(`img`,{src:`/arcade-docs/assets/image-sample.png`,alt:`Franklin Kudos Profile`,className:`size-full object-cover`}):void 0,memoji:e.media===`memoji`?(0,c.jsx)(`img`,{src:`/arcade-docs/assets/memoji-sample.png`,alt:`Franklin Kudos Memoji`,className:`scale-[1.4] object-cover`}):void 0}),d.args={state:`Online`,size:`medium`,name:`Franklin Kudos`,media:`none`},f={description:`The state of the indicator`,control:{type:`select`},options:[void 0,`Online`,`Offline`,`Busy`,`Pending`,`Notification`]},d.argTypes={state:f,size:{description:`The size of the avatar`,control:{type:`select`},options:[`small`,`medium`,`large`]},name:{description:`The name of the avatar`,control:{type:`text`}},media:{description:`Optional media source for the avatar`,control:{type:`select`},options:[`image`,`memoji`,`none`]}},p=l(`onClick`),m={parameters:{controls:{disable:!0}},render:e=>{let n=[`large`,`medium`,`small`],r=[{media:`image`,name:`Franklin Kudos`},{media:`memoji`,name:`Franklin Kudos`},{media:`none`,name:`Franklin Kudos`},{media:`none`,name:``}];return(0,c.jsx)(`div`,{className:`gap-x-lg gap-y-md grid grid-cols-4`,children:n.map(n=>r.map((r,i)=>(0,c.jsx)(t,{state:e.state,size:n,name:r.name,image:r.media===`image`?(0,c.jsx)(`img`,{src:`/arcade-docs/assets/image-sample.png`,alt:`Franklin Kudos Profile`,className:`size-full object-cover`}):void 0,memoji:r.media===`memoji`?(0,c.jsx)(`img`,{src:`/arcade-docs/assets/memoji-sample.png`,alt:`Franklin Kudos Memoji`,className:`scale-[1.4] object-cover`}):void 0},`${n}-${i}`)))})},argTypes:{state:f}},h={parameters:{controls:{disable:!0}},render:()=>{let e=[`large`,`medium`,`small`],n=[{media:`image`,name:`Franklin Kudos`},{media:`memoji`,name:`Franklin Kudos`},{media:`none`,name:`Franklin Kudos`},{media:`none`,name:``}];return(0,c.jsx)(`div`,{className:`gap-x-lg gap-y-md grid grid-cols-4`,children:e.map(e=>n.map((n,r)=>(0,c.jsx)(t,{state:`Online`,size:e,name:n.name,onClick:p,image:n.media===`image`?(0,c.jsx)(`img`,{src:`/arcade-docs/assets/image-sample.png`,alt:`Franklin Kudos Profile`,className:`size-full object-cover`}):void 0,memoji:n.media===`memoji`?(0,c.jsx)(`img`,{src:`/arcade-docs/assets/memoji-sample.png`,alt:`Franklin Kudos Memoji`,className:`scale-[1.4] object-cover`}):void 0},`${e}-${r}`)))})}},g={parameters:{controls:{disable:!0}},render:()=>{let e=[`large`,`medium`,`small`],n=[{media:`image`,name:`Franklin Kudos`},{media:`memoji`,name:`Franklin Kudos`},{media:`none`,name:`Franklin Kudos`},{media:`none`,name:``}];return(0,c.jsx)(`div`,{className:`gap-x-lg gap-y-md grid grid-cols-4`,children:e.map(e=>n.map((n,r)=>(0,c.jsx)(t,{state:`Online`,size:e,name:n.name,href:`#`,image:n.media===`image`?(0,c.jsx)(`img`,{src:`/arcade-docs/assets/image-sample.png`,alt:`Franklin Kudos Profile`,className:`size-full object-cover`}):void 0,memoji:n.media===`memoji`?(0,c.jsx)(`img`,{src:`/arcade-docs/assets/memoji-sample.png`,alt:`Franklin Kudos Memoji`,className:`scale-[1.4] object-cover`}):void 0},`${e}-${r}`)))})}},_={parameters:{controls:{disable:!0}},render:()=>{let e=[`large`,`medium`,`small`],n=[{media:`image`,name:`Franklin Kudos`},{media:`memoji`,name:`Franklin Kudos`},{media:`none`,name:`Franklin Kudos`},{media:`none`,name:``}];return(0,c.jsx)(`div`,{className:`gap-x-lg gap-y-md grid grid-cols-4`,children:e.map(e=>n.map((n,r)=>(0,c.jsx)(t,{state:`Online`,size:e,name:n.name,disabled:!0,onClick:p,image:n.media===`image`?(0,c.jsx)(`img`,{src:`/arcade-docs/assets/image-sample.png`,alt:`Franklin Kudos Profile`,className:`size-full object-cover`}):void 0,memoji:n.media===`memoji`?(0,c.jsx)(`img`,{src:`/arcade-docs/assets/memoji-sample.png`,alt:`Franklin Kudos Memoji`,className:`scale-[1.4] object-cover`}):void 0},`${e}-${r}`)))})}},v={render:()=>(0,c.jsx)(n,{})},y=({href:e,children:t,...n})=>(0,c.jsx)(`a`,{...n,href:e,"data-next-link":`true`,children:t}),b=({src:e,alt:t,className:n})=>(0,c.jsx)(`img`,{src:e,alt:t,className:n,"data-next-image":`true`}),x={parameters:{controls:{disable:!0},docs:{description:{story:"End-to-end Next.js integration: `linkComponent={NextLink}` for routing, `next/image` via the `image` slot. The rendered nodes below carry `data-next-link` / `data-next-image` so the substitution is visible."}}},render:()=>(0,c.jsx)(`div`,{className:`gap-lg flex items-center`,children:(0,c.jsx)(t,{size:`large`,name:`Franklin Kudos`,href:`/profile`,linkComponent:y,image:(0,c.jsx)(b,{src:`/arcade-docs/assets/image-sample.png`,alt:`Franklin Kudos Profile`,className:`size-full object-cover`})})})},d.__docgenInfo={description:``,methods:[],displayName:`Playground`},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:'(args: React.ComponentProps<typeof Avatar> & Record<string, any>) => {\n  return <Avatar {...args} image={args.media === "image" ? <img src={`${import.meta.env.BASE_URL}assets/image-sample.png`} alt="Franklin Kudos Profile" className="size-full object-cover" /> : undefined} memoji={args.media === "memoji" ? <img src={`${import.meta.env.BASE_URL}assets/memoji-sample.png`} alt="Franklin Kudos Memoji" className="scale-[1.4] object-cover" /> : undefined} />;\n}',...d.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
        {sizes.map(size => configurations.map((config, colIndex) => <Avatar key={\`\${size}-\${colIndex}\`} state="Online" size={size} name={config.name} onClick={clickAction} image={config.media === "image" ? <img src={\`\${import.meta.env.BASE_URL}assets/image-sample.png\`} alt="Franklin Kudos Profile" className="size-full object-cover" /> : undefined} memoji={config.media === "memoji" ? <img src={\`\${import.meta.env.BASE_URL}assets/memoji-sample.png\`} alt="Franklin Kudos Memoji" className="scale-[1.4] object-cover" /> : undefined} />))}
      </div>;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <AvatarSkeleton />
}`,...v.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source},description:{story:'Demonstrates how a Next.js consumer integrates Arcade\'s `Avatar`:\n\n- `linkComponent` accepts `next/link`\'s `Link` for SPA navigation when an\n  `href` is set.\n- The `image` slot accepts any React node, so `next/image`\'s `Image` drops\n  in directly. The Arcade container already sets size and rounding -\n  `<Image fill ... />` fills it.\n\n```tsx\nimport NextLink from "next/link";\nimport NextImage from "next/image";\n\n<Avatar\n  name="Franklin Kudos"\n  href="/profile"\n  linkComponent={NextLink}\n  image={<NextImage fill src="/me.png" alt="Franklin" />}\n/>\n```',...x.parameters?.docs?.description}}},S=[`Playground`,`Static`,`Clickable`,`Link`,`Disabled`,`Skeleton`,`WithNext`]}))();export{h as Clickable,_ as Disabled,g as Link,d as Playground,v as Skeleton,m as Static,x as WithNext,S as __namedExportsOrder,u as default};