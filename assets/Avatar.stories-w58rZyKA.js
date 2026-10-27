import{n as e}from"./chunk-jRWAZmH_.js";import{Ci as t,Hs as n,Si as r,hi as i,rc as a,t as o}from"./iframe-C-RHIpW1.js";import{n as s,t as c}from"./figmaDesign-DDiUnvXT.js";var l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w;e((()=>{o(),a(),s(),l=n(),{action:u}=__STORYBOOK_MODULE_ACTIONS__,d={title:`Display & Data/Avatar/Avatar`,component:r,tags:[`autodocs`],parameters:{design:c(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=2127-26200`),docs:{description:{component:`Circular representation of a user, showing an image, memoji, initials or fallback icon. Use in headers, comment threads, and member lists.`}}}},f=e=>(0,l.jsx)(r,{...e,image:e.media===`image`?(0,l.jsx)(`img`,{src:`/arcade-docs/assets/image-sample.png`,alt:`Franklin Kudos Profile`,className:`size-full object-cover`}):void 0,memoji:e.media===`memoji`?(0,l.jsx)(`img`,{src:`/arcade-docs/assets/memoji-sample.png`,alt:`Franklin Kudos Memoji`,className:`scale-[1.4] object-cover`}):void 0}),f.args={state:`Online`,size:`medium`,name:`Franklin Kudos`,media:`none`,color:void 0},p={description:`The state of the indicator`,control:{type:`select`},options:[void 0,`Online`,`Offline`,`Busy`,`Pending`,`Notification`]},f.argTypes={state:p,size:{description:`The size of the avatar`,control:{type:`select`},options:[`small`,`medium`,`large`]},name:{description:`The name of the avatar`,control:{type:`text`}},media:{description:`Optional media source for the avatar`,control:{type:`select`},options:[`image`,`memoji`,`none`]},color:{description:`Optional alternative color. Applies to initials, icon and memoji avatars.`,control:{type:`select`},options:[void 0,...t]}},m=u(`onClick`),h={parameters:{controls:{disable:!0}},render:e=>{let t=[`large`,`medium`,`small`],n=[{media:`image`,name:`Franklin Kudos`},{media:`memoji`,name:`Franklin Kudos`},{media:`none`,name:`Franklin Kudos`},{media:`none`,name:``}];return(0,l.jsx)(`div`,{className:`gap-x-lg gap-y-md grid grid-cols-4`,children:t.map(t=>n.map((n,i)=>(0,l.jsx)(r,{state:e.state,size:t,name:n.name,image:n.media===`image`?(0,l.jsx)(`img`,{src:`/arcade-docs/assets/image-sample.png`,alt:`Franklin Kudos Profile`,className:`size-full object-cover`}):void 0,memoji:n.media===`memoji`?(0,l.jsx)(`img`,{src:`/arcade-docs/assets/memoji-sample.png`,alt:`Franklin Kudos Memoji`,className:`scale-[1.4] object-cover`}):void 0},`${t}-${i}`)))})},argTypes:{state:p}},g={parameters:{controls:{disable:!0}},render:()=>{let e=[`large`,`medium`,`small`],t=[{media:`image`,name:`Franklin Kudos`},{media:`memoji`,name:`Franklin Kudos`},{media:`none`,name:`Franklin Kudos`},{media:`none`,name:``}];return(0,l.jsx)(`div`,{className:`gap-x-lg gap-y-md grid grid-cols-4`,children:e.map(e=>t.map((t,n)=>(0,l.jsx)(r,{state:`Online`,size:e,name:t.name,onClick:m,image:t.media===`image`?(0,l.jsx)(`img`,{src:`/arcade-docs/assets/image-sample.png`,alt:`Franklin Kudos Profile`,className:`size-full object-cover`}):void 0,memoji:t.media===`memoji`?(0,l.jsx)(`img`,{src:`/arcade-docs/assets/memoji-sample.png`,alt:`Franklin Kudos Memoji`,className:`scale-[1.4] object-cover`}):void 0},`${e}-${n}`)))})}},_={parameters:{controls:{disable:!0}},render:()=>{let e=[`large`,`medium`,`small`],t=[{media:`image`,name:`Franklin Kudos`},{media:`memoji`,name:`Franklin Kudos`},{media:`none`,name:`Franklin Kudos`},{media:`none`,name:``}];return(0,l.jsx)(`div`,{className:`gap-x-lg gap-y-md grid grid-cols-4`,children:e.map(e=>t.map((t,n)=>(0,l.jsx)(r,{state:`Online`,size:e,name:t.name,href:`#`,image:t.media===`image`?(0,l.jsx)(`img`,{src:`/arcade-docs/assets/image-sample.png`,alt:`Franklin Kudos Profile`,className:`size-full object-cover`}):void 0,memoji:t.media===`memoji`?(0,l.jsx)(`img`,{src:`/arcade-docs/assets/memoji-sample.png`,alt:`Franklin Kudos Memoji`,className:`scale-[1.4] object-cover`}):void 0},`${e}-${n}`)))})}},v={parameters:{controls:{disable:!0}},render:()=>{let e=[`large`,`medium`,`small`],t=[{media:`image`,name:`Franklin Kudos`},{media:`memoji`,name:`Franklin Kudos`},{media:`none`,name:`Franklin Kudos`},{media:`none`,name:``}];return(0,l.jsx)(`div`,{className:`gap-x-lg gap-y-md grid grid-cols-4`,children:e.map(e=>t.map((t,n)=>(0,l.jsx)(r,{state:`Online`,size:e,name:t.name,disabled:!0,onClick:m,image:t.media===`image`?(0,l.jsx)(`img`,{src:`/arcade-docs/assets/image-sample.png`,alt:`Franklin Kudos Profile`,className:`size-full object-cover`}):void 0,memoji:t.media===`memoji`?(0,l.jsx)(`img`,{src:`/arcade-docs/assets/memoji-sample.png`,alt:`Franklin Kudos Memoji`,className:`scale-[1.4] object-cover`}):void 0},`${e}-${n}`)))})}},y={parameters:{controls:{disable:!0},docs:{description:{story:`Alternative colors tint background, border and initials/icon, matching the Badge palette. Image avatars and disabled avatars ignore the color.`}}},render:()=>(0,l.jsx)(`div`,{className:`gap-x-lg gap-y-md grid w-fit grid-cols-7`,children:[{media:`none`,name:`Franklin Kudos`},{media:`none`,name:``},{media:`memoji`,name:`Franklin Kudos`}].map((e,n)=>t.map(t=>(0,l.jsx)(r,{color:t,size:`large`,name:e.name,onClick:m,memoji:e.media===`memoji`?(0,l.jsx)(`img`,{src:`/arcade-docs/assets/memoji-sample.png`,alt:`Franklin Kudos Memoji`,className:`scale-[1.4] object-cover`}):void 0},`${n}-${t}`)))})},b={render:()=>(0,l.jsx)(i,{})},x=({href:e,children:t,...n})=>(0,l.jsx)(`a`,{...n,href:e,"data-next-link":`true`,children:t}),S=({src:e,alt:t,className:n})=>(0,l.jsx)(`img`,{src:e,alt:t,className:n,"data-next-image":`true`}),C={parameters:{controls:{disable:!0},docs:{description:{story:"End-to-end Next.js integration: `linkComponent={NextLink}` for routing, `next/image` via the `image` slot. The rendered nodes below carry `data-next-link` / `data-next-image` so the substitution is visible."}}},render:()=>(0,l.jsx)(`div`,{className:`gap-lg flex items-center`,children:(0,l.jsx)(r,{size:`large`,name:`Franklin Kudos`,href:`/profile`,linkComponent:x,image:(0,l.jsx)(S,{src:`/arcade-docs/assets/image-sample.png`,alt:`Franklin Kudos Profile`,className:`size-full object-cover`})})})},f.__docgenInfo={description:``,methods:[],displayName:`Playground`},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:'(args: React.ComponentProps<typeof Avatar> & Record<string, any>) => {\n  return <Avatar {...args} image={args.media === "image" ? <img src={`${import.meta.env.BASE_URL}assets/image-sample.png`} alt="Franklin Kudos Profile" className="size-full object-cover" /> : undefined} memoji={args.media === "memoji" ? <img src={`${import.meta.env.BASE_URL}assets/memoji-sample.png`} alt="Franklin Kudos Memoji" className="scale-[1.4] object-cover" /> : undefined} />;\n}',...f.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
        {sizes.map(size => configurations.map((config, colIndex) => <Avatar key={\`\${size}-\${colIndex}\`} state="Online" size={size} name={config.name} onClick={clickAction} image={config.media === "image" ? <img src={\`\${import.meta.env.BASE_URL}assets/image-sample.png\`} alt="Franklin Kudos Profile" className="size-full object-cover" /> : undefined} memoji={config.media === "memoji" ? <img src={\`\${import.meta.env.BASE_URL}assets/memoji-sample.png\`} alt="Franklin Kudos Memoji" className="scale-[1.4] object-cover" /> : undefined} />))}
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
        {sizes.map(size => configurations.map((config, colIndex) => <Avatar key={\`\${size}-\${colIndex}\`} state="Online" size={size} name={config.name} href="#" image={config.media === "image" ? <img src={\`\${import.meta.env.BASE_URL}assets/image-sample.png\`} alt="Franklin Kudos Profile" className="size-full object-cover" /> : undefined} memoji={config.media === "memoji" ? <img src={\`\${import.meta.env.BASE_URL}assets/memoji-sample.png\`} alt="Franklin Kudos Memoji" className="scale-[1.4] object-cover" /> : undefined} />))}
      </div>;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "Alternative colors tint background, border and initials/icon, matching the Badge palette. Image avatars and disabled avatars ignore the color."
      }
    }
  },
  render: () => {
    const configurations = [{
      media: "none" as const,
      name: "Franklin Kudos"
    }, {
      media: "none" as const,
      name: ""
    }, {
      media: "memoji" as const,
      name: "Franklin Kudos"
    }];
    return <div className="gap-x-lg gap-y-md grid w-fit grid-cols-7">
        {configurations.map((config, rowIndex) => AvatarColors.map(color => <Avatar key={\`\${rowIndex}-\${color}\`} color={color} size="large" name={config.name} onClick={clickAction} memoji={config.media === "memoji" ? <img src={\`\${import.meta.env.BASE_URL}assets/memoji-sample.png\`} alt="Franklin Kudos Memoji" className="scale-[1.4] object-cover" /> : undefined} />))}
      </div>;
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <AvatarSkeleton />
}`,...b.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source},description:{story:'Demonstrates how a Next.js consumer integrates Arcade\'s `Avatar`:\n\n- `linkComponent` accepts `next/link`\'s `Link` for SPA navigation when an\n  `href` is set.\n- The `image` slot accepts any React node, so `next/image`\'s `Image` drops\n  in directly. The Arcade container already sets size and rounding -\n  `<Image fill ... />` fills it.\n\n```tsx\nimport NextLink from "next/link";\nimport NextImage from "next/image";\n\n<Avatar\n  name="Franklin Kudos"\n  href="/profile"\n  linkComponent={NextLink}\n  image={<NextImage fill src="/me.png" alt="Franklin" />}\n/>\n```',...C.parameters?.docs?.description}}},w=[`Playground`,`Static`,`Clickable`,`Link`,`Disabled`,`Colors`,`Skeleton`,`WithNext`]}))();export{g as Clickable,y as Colors,v as Disabled,_ as Link,f as Playground,b as Skeleton,h as Static,C as WithNext,w as __namedExportsOrder,d as default};