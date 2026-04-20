import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as r}from"./ContextMenuList-pnV3d25g.js";import"./index-CY-HDqYb.js";import{a as O}from"./index-B-lxVbXh.js";import"./index-A6zbrgSY.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";import"./index-ZRCHFLd-.js";import"./sizes-BpUsT7VU.js";import"./colors-CoOIoG7W.js";import"./v4-CtRu48qb.js";const q={title:"Components/Avatar/Avatar",component:r},m=n=>e.jsx(r,{...n,image:n.media==="image"?e.jsx("img",{src:"/assets/image-sample.png",alt:"Franklin Kudos Profile",className:"size-full object-cover"}):void 0,memoji:n.media==="memoji"?e.jsx("img",{src:"/assets/memoji-sample.png",alt:"Franklin Kudos Memoji",className:"scale-[1.4] object-cover"}):void 0});m.args={state:"Online",size:"medium",name:"Franklin Kudos",media:"none"};const $={description:"The state of the indicator",control:{type:"select"},options:[void 0,"Online","Offline","Busy","Pending","Notification"]};m.argTypes={state:$,size:{description:"The size of the avatar",control:{type:"select"},options:["small","medium","large"]},name:{description:"The name of the avatar",control:{type:"text"}},media:{description:"Optional media source for the avatar",control:{type:"select"},options:["image","memoji","none"]}};const h=O("onClick"),t={parameters:{controls:{disable:!0}},render:n=>{const o=["large","medium","small"],s=[{media:"image",name:"Franklin Kudos"},{media:"memoji",name:"Franklin Kudos"},{media:"none",name:"Franklin Kudos"},{media:"none",name:""}];return e.jsx("div",{className:"gap-x-lg gap-y-md grid grid-cols-4",children:o.map(a=>s.map((i,A)=>e.jsx(r,{state:n.state,size:a,name:i.name,image:i.media==="image"?e.jsx("img",{src:"/assets/image-sample.png",alt:"Franklin Kudos Profile",className:"size-full object-cover"}):void 0,memoji:i.media==="memoji"?e.jsx("img",{src:"/assets/memoji-sample.png",alt:"Franklin Kudos Memoji",className:"scale-[1.4] object-cover"}):void 0},`${a}-${A}`)))})},argTypes:{state:$}},l={parameters:{controls:{disable:!0}},render:()=>{const n=["large","medium","small"],o=[{media:"image",name:"Franklin Kudos"},{media:"memoji",name:"Franklin Kudos"},{media:"none",name:"Franklin Kudos"},{media:"none",name:""}];return e.jsx("div",{className:"gap-x-lg gap-y-md grid grid-cols-4",children:n.map(s=>o.map((a,i)=>e.jsx(r,{state:"Online",size:s,name:a.name,onClick:h,image:a.media==="image"?e.jsx("img",{src:"/assets/image-sample.png",alt:"Franklin Kudos Profile",className:"size-full object-cover"}):void 0,memoji:a.media==="memoji"?e.jsx("img",{src:"/assets/memoji-sample.png",alt:"Franklin Kudos Memoji",className:"scale-[1.4] object-cover"}):void 0},`${s}-${i}`)))})}},c={parameters:{controls:{disable:!0}},render:()=>{const n=["large","medium","small"],o=[{media:"image",name:"Franklin Kudos"},{media:"memoji",name:"Franklin Kudos"},{media:"none",name:"Franklin Kudos"},{media:"none",name:""}];return e.jsx("div",{className:"gap-x-lg gap-y-md grid grid-cols-4",children:n.map(s=>o.map((a,i)=>e.jsx(r,{state:"Online",size:s,name:a.name,href:"#",image:a.media==="image"?e.jsx("img",{src:"/assets/image-sample.png",alt:"Franklin Kudos Profile",className:"size-full object-cover"}):void 0,memoji:a.media==="memoji"?e.jsx("img",{src:"/assets/memoji-sample.png",alt:"Franklin Kudos Memoji",className:"scale-[1.4] object-cover"}):void 0},`${s}-${i}`)))})}},d={parameters:{controls:{disable:!0}},render:()=>{const n=["large","medium","small"],o=[{media:"image",name:"Franklin Kudos"},{media:"memoji",name:"Franklin Kudos"},{media:"none",name:"Franklin Kudos"},{media:"none",name:""}];return e.jsx("div",{className:"gap-x-lg gap-y-md grid grid-cols-4",children:n.map(s=>o.map((a,i)=>e.jsx(r,{state:"Online",size:s,name:a.name,disabled:!0,onClick:h,image:a.media==="image"?e.jsx("img",{src:"/assets/image-sample.png",alt:"Franklin Kudos Profile",className:"size-full object-cover"}):void 0,memoji:a.media==="memoji"?e.jsx("img",{src:"/assets/memoji-sample.png",alt:"Franklin Kudos Memoji",className:"scale-[1.4] object-cover"}):void 0},`${s}-${i}`)))})}};m.__docgenInfo={description:"",methods:[],displayName:"Playground"};m.__docgenInfo={description:"",methods:[],displayName:"Playground"};var g,p,u;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:`(args: React.ComponentProps<typeof Avatar> & Record<string, any>) => {
  return <Avatar {...args} image={args.media === "image" ? <img src="/assets/image-sample.png" alt="Franklin Kudos Profile" className="size-full object-cover" /> : undefined} memoji={args.media === "memoji" ? <img src="/assets/memoji-sample.png" alt="Franklin Kudos Memoji" className="scale-[1.4] object-cover" /> : undefined} />;
}`,...(u=(p=m.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var j,f,k;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
        {sizes.map(size => configurations.map((config, colIndex) => <Avatar key={\`\${size}-\${colIndex}\`} state={args.state} size={size} name={config.name} image={config.media === "image" ? <img src="/assets/image-sample.png" alt="Franklin Kudos Profile" className="size-full object-cover" /> : undefined} memoji={config.media === "memoji" ? <img src="/assets/memoji-sample.png" alt="Franklin Kudos Memoji" className="scale-[1.4] object-cover" /> : undefined} />))}
      </div>;
  },
  argTypes: {
    state: stateArg
  }
}`,...(k=(f=t.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var v,F,K;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
        {sizes.map(size => configurations.map((config, colIndex) => <Avatar key={\`\${size}-\${colIndex}\`} state="Online" size={size} name={config.name} onClick={clickAction} image={config.media === "image" ? <img src="/assets/image-sample.png" alt="Franklin Kudos Profile" className="size-full object-cover" /> : undefined} memoji={config.media === "memoji" ? <img src="/assets/memoji-sample.png" alt="Franklin Kudos Memoji" className="scale-[1.4] object-cover" /> : undefined} />))}
      </div>;
  }
}`,...(K=(F=l.parameters)==null?void 0:F.docs)==null?void 0:K.source}}};var x,z,b;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
        {sizes.map(size => configurations.map((config, colIndex) => <Avatar key={\`\${size}-\${colIndex}\`} state="Online" size={size} name={config.name} href="#" image={config.media === "image" ? <img src="/assets/image-sample.png" alt="Franklin Kudos Profile" className="size-full object-cover" /> : undefined} memoji={config.media === "memoji" ? <img src="/assets/memoji-sample.png" alt="Franklin Kudos Memoji" className="scale-[1.4] object-cover" /> : undefined} />))}
      </div>;
  }
}`,...(b=(z=c.parameters)==null?void 0:z.docs)==null?void 0:b.source}}};var N,y,P;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
        {sizes.map(size => configurations.map((config, colIndex) => <Avatar key={\`\${size}-\${colIndex}\`} state="Online" size={size} name={config.name} disabled onClick={clickAction} image={config.media === "image" ? <img src="/assets/image-sample.png" alt="Franklin Kudos Profile" className="size-full object-cover" /> : undefined} memoji={config.media === "memoji" ? <img src="/assets/memoji-sample.png" alt="Franklin Kudos Memoji" className="scale-[1.4] object-cover" /> : undefined} />))}
      </div>;
  }
}`,...(P=(y=d.parameters)==null?void 0:y.docs)==null?void 0:P.source}}};const w=["Playground","Static","Clickable","Link","Disabled"];export{l as Clickable,d as Disabled,c as Link,m as Playground,t as Static,w as __namedExportsOrder,q as default};
