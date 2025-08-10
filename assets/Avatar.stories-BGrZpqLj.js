import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{V as n}from"./index.esm-BZzBWmuZ.js";import"./index-D4lIrffr.js";import"./index-C7yw4mlf.js";import"./index-BQQLSK9g.js";import"./index-DsJinFGm.js";const N={title:"Components/Avatar/Avatar",component:n},e=i=>a.jsx(n,{...i,image:i.media==="image"?a.jsx("img",{src:"/assets/image-sample.png",alt:"Franklin Kudos Profile",className:"size-full object-cover"}):void 0,memoji:i.media==="memoji"?a.jsx("img",{src:"/assets/memoji-sample.png",alt:"Franklin Kudos Memoji",className:"scale-[1.4] object-cover"}):void 0});e.args={state:"Online",size:"medium",name:"Franklin Kudos",media:"none"};const p={description:"The state of the indicator",control:{type:"select"},options:[void 0,"Online","Offline","Busy","Pending","Notification"]};e.argTypes={state:p,size:{description:"The size of the avatar",control:{type:"select"},options:["small","medium","large"]},name:{description:"The name of the avatar",control:{type:"text"}},media:{description:"Optional media source for the avatar",control:{type:"select"},options:["image","memoji","none"]}};const s=i=>{const u=["large","medium","small"],j=[{media:"image",name:"Franklin Kudos"},{media:"memoji",name:"Franklin Kudos"},{media:"none",name:"Franklin Kudos"},{media:"none",name:""}];return a.jsx("div",{className:"gap-x-lg gap-y-md grid grid-cols-4",children:u.map(m=>j.map((o,v)=>a.jsx(n,{state:i.state,size:m,name:o.name,image:o.media==="image"?a.jsx("img",{src:"/assets/image-sample.png",alt:"Franklin Kudos Profile",className:"size-full object-cover"}):void 0,memoji:o.media==="memoji"?a.jsx("img",{src:"/assets/memoji-sample.png",alt:"Franklin Kudos Memoji",className:"scale-[1.4] object-cover"}):void 0},`${m}-${v}`)))})};s.argTypes={state:p};e.__docgenInfo={description:"",methods:[],displayName:"Playground"};s.__docgenInfo={description:"",methods:[],displayName:"Overview"};e.__docgenInfo={description:"",methods:[],displayName:"Playground"};s.__docgenInfo={description:"",methods:[],displayName:"Overview"};var r,t,d;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`(args: React.ComponentProps<typeof Avatar> & Record<string, any>) => {
  return <Avatar {...args} image={args.media === "image" ? <img src="/assets/image-sample.png" alt="Franklin Kudos Profile" className="size-full object-cover" /> : undefined} memoji={args.media === "memoji" ? <img src="/assets/memoji-sample.png" alt="Franklin Kudos Memoji" className="scale-[1.4] object-cover" /> : undefined} />;
}`,...(d=(t=e.parameters)==null?void 0:t.docs)==null?void 0:d.source}}};var l,c,g;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`(args: any) => {
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
}`,...(g=(c=s.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};const z=["Playground","Overview"];export{s as Overview,e as Playground,z as __namedExportsOrder,N as default};
