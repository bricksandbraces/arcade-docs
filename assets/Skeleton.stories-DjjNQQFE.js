import{n as e}from"./chunk-jRWAZmH_.js";import{Mr as t,mo as n,t as r}from"./iframe-DHa9KU7b.js";var i,a,o,s,c;e((()=>{r(),i=n(),a={title:`Feedback & Status/Skeleton`,component:t,tags:[`autodocs`],argTypes:{shape:{control:`inline-radio`,options:[`rectangle`,`circle`]},animate:{control:`boolean`}}},o={args:{shape:`rectangle`,animate:!0},render:e=>(0,i.jsxs)(`div`,{className:`gap-lg flex flex-col`,children:[(0,i.jsxs)(`div`,{className:`gap-md flex items-center`,children:[(0,i.jsx)(t,{...e,shape:`circle`,width:32,height:32}),(0,i.jsxs)(`div`,{className:`gap-sm flex flex-1 flex-col`,children:[(0,i.jsx)(t,{...e,height:14,className:`w-[40%]`}),(0,i.jsx)(t,{...e,height:14,className:`w-[70%]`})]})]}),(0,i.jsx)(t,{...e,height:140,className:`w-full`})]})},s={render:()=>(0,i.jsx)(`div`,{className:`gap-md flex flex-col`,children:(0,i.jsx)(t,{className:`h-[120px] w-full rounded-md`})})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    shape: "rectangle",
    animate: true
  },
  render: (args: any) => <div className="gap-lg flex flex-col">
      <div className="gap-md flex items-center">
        <SkeletonPrimitive {...args} shape="circle" width={32} height={32} />
        <div className="gap-sm flex flex-1 flex-col">
          <SkeletonPrimitive {...args} height={14} className="w-[40%]" />
          <SkeletonPrimitive {...args} height={14} className="w-[70%]" />
        </div>
      </div>
      <SkeletonPrimitive {...args} height={140} className="w-full" />
    </div>
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="gap-md flex flex-col">
      <SkeletonPrimitive className="h-[120px] w-full rounded-md" />
    </div>
}`,...s.parameters?.docs?.source}}},c=[`Playground`,`Skeleton`]}))();export{o as Playground,s as Skeleton,c as __namedExportsOrder,a as default};