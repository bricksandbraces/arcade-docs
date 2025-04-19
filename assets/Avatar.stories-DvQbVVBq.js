import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{a as n}from"./index.esm-Dy8HIj2c.js";import"./index-D4lIrffr.js";import"./index-BQQLSK9g.js";import"./index-DsJinFGm.js";const F={title:"Components/Avatar",component:n,decorators:[s=>e.jsx("div",{className:"p-xlg",children:e.jsx(s,{})})]},a=s=>e.jsx(n,{...s,image:s.media==="image"?e.jsx("img",{src:"/assets/image-sample.png",alt:"Franklin Kudos Profile",className:"size-full object-cover"}):void 0,memoji:s.media==="memoji"?e.jsx("img",{src:"/assets/memoji-sample.png",alt:"Franklin Kudos Memoji",className:"scale-[1.4] object-cover"}):void 0});a.args={state:"Online",size:"medium",name:"Franklin Kudos",media:"none"};const p={description:"The state of the indicator",control:{type:"select"},options:[void 0,"Online","Offline","Busy","Pending","Notification"]};a.argTypes={state:p,size:{description:"The size of the avatar",control:{type:"select"},options:["small","medium","large"]},name:{description:"The name of the avatar",control:{type:"text"}},media:{description:"Optional media source for the avatar",control:{type:"select"},options:["image","memoji","none"]}};const i=s=>{const u=["large","medium","small"],j=[{media:"image",name:"Franklin Kudos"},{media:"memoji",name:"Franklin Kudos"},{media:"none",name:"Franklin Kudos"},{media:"none",name:""}];return e.jsx("div",{className:"gap-x-lg gap-y-md grid grid-cols-4",children:u.map(m=>j.map((o,v)=>e.jsx(n,{state:s.state,size:m,name:o.name,image:o.media==="image"?e.jsx("img",{src:"/assets/image-sample.png",alt:"Franklin Kudos Profile",className:"size-full object-cover"}):void 0,memoji:o.media==="memoji"?e.jsx("img",{src:"/assets/memoji-sample.png",alt:"Franklin Kudos Memoji",className:"scale-[1.4] object-cover"}):void 0},`${m}-${v}`)))})};i.argTypes={state:p};a.__docgenInfo={description:"",methods:[],displayName:"Playground"};i.__docgenInfo={description:"",methods:[],displayName:"Overview"};a.__docgenInfo={description:"",methods:[],displayName:"Playground"};i.__docgenInfo={description:"",methods:[],displayName:"Overview"};var r,t,d;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`(args: React.ComponentProps<typeof Avatar> & Record<string, any>) => {
  return <Avatar {...args} image={args.media === "image" ? <img src="/assets/image-sample.png" alt="Franklin Kudos Profile" className="size-full object-cover" /> : undefined} memoji={args.media === "memoji" ? <img src="/assets/memoji-sample.png" alt="Franklin Kudos Memoji" className="scale-[1.4] object-cover" /> : undefined} />;
}`,...(d=(t=a.parameters)==null?void 0:t.docs)==null?void 0:d.source}}};var l,c,g;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`(args: any) => {
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
}`,...(g=(c=i.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};const K=["Playground","Overview"];export{i as Overview,a as Playground,K as __namedExportsOrder,F as default};
