import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{b as o}from"./index.esm-CJrvQL_v.js";import"./index-D4lIrffr.js";import"./index-C7yw4mlf.js";import"./index-BQQLSK9g.js";import"./index-DsJinFGm.js";const u={title:"Components/Divider",component:o},t=i=>e.jsx("div",{className:"flex h-[calc(100dvh-64px)] w-[calc(100vw-64px)]",children:e.jsx(o,{...i})});t.args={orientation:"horizontal",width:"1"};t.argTypes={orientation:{description:"The orientation of the divider",control:{type:"select"},options:["horizontal","vertical"],defaultValue:"horizontal"},width:{description:"The width of the divider",control:{type:"select"},options:["0.5","1","2"],defaultValue:"1"}};const r=()=>e.jsxs("div",{className:"flex h-64 w-full flex-col items-center justify-center gap-8",children:[e.jsxs("div",{className:"flex w-full flex-col gap-4",children:[e.jsx("p",{className:"text-sm font-medium",children:"Horizontal"}),["0.5","1","2"].map(i=>e.jsx(o,{orientation:"horizontal",width:i},i))]}),e.jsxs("div",{className:"flex h-full flex-row items-center justify-center gap-4",children:[e.jsx("p",{className:"mr-4 text-sm font-medium",children:"Vertical"}),["0.5","1","2"].map(i=>e.jsx(o,{orientation:"vertical",width:i},i))]})]});t.__docgenInfo={description:"",methods:[],displayName:"Playground"};r.__docgenInfo={description:"",methods:[],displayName:"Overview"};t.__docgenInfo={description:"",methods:[],displayName:"Playground"};r.__docgenInfo={description:"",methods:[],displayName:"Overview"};var s,a,n;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`(args: React.ComponentProps<typeof Divider>) => {
  return <div className="flex h-[calc(100dvh-64px)] w-[calc(100vw-64px)]">
      <Divider {...args} />
    </div>;
}`,...(n=(a=t.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};var l,d,c;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  return <div className="flex h-64 w-full flex-col items-center justify-center gap-8">
      <div className="flex w-full flex-col gap-4">
        <p className="text-sm font-medium">Horizontal</p>
        {["0.5", "1", "2"].map(width => <Divider key={width} orientation="horizontal" width={width as "0.5" | "1" | "2"} />)}
      </div>

      <div className="flex h-full flex-row items-center justify-center gap-4">
        <p className="mr-4 text-sm font-medium">Vertical</p>
        {["0.5", "1", "2"].map(width => <Divider key={width} orientation="vertical" width={width as "0.5" | "1" | "2"} />)}
      </div>
    </div>;
}`,...(c=(d=r.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const w=["Playground","Overview"];export{r as Overview,t as Playground,w as __namedExportsOrder,u as default};
