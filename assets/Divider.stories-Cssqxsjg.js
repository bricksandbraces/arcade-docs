import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{a4 as o}from"./ContextMenuList-BM0Gkwdy.js";import"./index-CY-HDqYb.js";import"./index-A6zbrgSY.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";import"./index-ZRCHFLd-.js";import"./sizes-BpUsT7VU.js";import"./colors-CoOIoG7W.js";const y={title:"Components/Divider",component:o},t=r=>e.jsx("div",{className:"flex h-[calc(100dvh-64px)] w-[calc(100vw-64px)]",children:e.jsx(o,{...r})});t.args={orientation:"horizontal",width:"1"};t.argTypes={orientation:{description:"The orientation of the divider",control:{type:"select"},options:["horizontal","vertical"],defaultValue:"horizontal"},width:{description:"The width of the divider",control:{type:"select"},options:["0.5","1","2"],defaultValue:"1"}};const i={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{className:"flex h-64 w-full flex-col items-center justify-center gap-8",children:[e.jsxs("div",{className:"flex w-full flex-col gap-4",children:[e.jsx("p",{className:"text-sm font-medium",children:"Horizontal"}),["0.5","1","2"].map(r=>e.jsx(o,{orientation:"horizontal",width:r},r))]}),e.jsxs("div",{className:"flex h-full flex-row items-center justify-center gap-4",children:[e.jsx("p",{className:"mr-4 text-sm font-medium",children:"Vertical"}),["0.5","1","2"].map(r=>e.jsx(o,{orientation:"vertical",width:r},r))]})]})};t.__docgenInfo={description:"",methods:[],displayName:"Playground"};t.__docgenInfo={description:"",methods:[],displayName:"Playground"};var a,s,n;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`(args: React.ComponentProps<typeof Divider>) => {
  return <div className="flex h-[calc(100dvh-64px)] w-[calc(100vw-64px)]">
      <Divider {...args} />
    </div>;
}`,...(n=(s=t.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="flex h-64 w-full flex-col items-center justify-center gap-8">
      <div className="flex w-full flex-col gap-4">
        <p className="text-sm font-medium">Horizontal</p>
        {["0.5", "1", "2"].map(width => <Divider key={width} orientation="horizontal" width={width as "0.5" | "1" | "2"} />)}
      </div>

      <div className="flex h-full flex-row items-center justify-center gap-4">
        <p className="mr-4 text-sm font-medium">Vertical</p>
        {["0.5", "1", "2"].map(width => <Divider key={width} orientation="vertical" width={width as "0.5" | "1" | "2"} />)}
      </div>
    </div>
}`,...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const j=["Playground","Overview"];export{i as Overview,t as Playground,j as __namedExportsOrder,y as default};
