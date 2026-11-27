import{n as e}from"./chunk-jRWAZmH_.js";import{Ti as t,Vc as n,ia as r,na as i,nl as a,ra as o,t as s}from"./iframe-aH2b30P3.js";import{n as c,t as l}from"./figmaDesign-D2IpkIki.js";import{n as u,t as d}from"./figmaFrame-DYXjspLx.js";var f,p,m,h,g,_,v,y,b,x,S,C;e((()=>{s(),a(),c(),u(),f=n(),{action:p}=__STORYBOOK_MODULE_ACTIONS__,m={title:`Components/Badge`,component:i,tags:[`autodocs`],parameters:{design:l(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=5716-4874`),docs:{description:{component:"Small colored label for status, counts, or metadata. `default` is the rounded pill, `inline` the compact outlined label for tables and running text, `filter` adds a dismiss control. Pass `onClick` to render a default or inline badge as a button."}}}},h=e=>e===`filter`||e===`tag`,g=({text:e,clickable:t,...n})=>(0,f.jsx)(`div`,{children:(0,f.jsx)(i,{...n,onClick:t?p(`onClick`):void 0,onDelete:h(n.type)?p(`onDelete`):void 0,children:e})}),g.args={color:`red`,type:`default`,text:`Badge`,clickable:!1},g.argTypes={color:{description:`The color of the badge`,control:{type:`select`},options:o},type:{description:`The badge kind`,control:{type:`inline-radio`},options:r},clickable:{name:`Clickable`,description:`Passes an onClick, which renders the badge as a button`,control:{type:`boolean`},table:{category:`Playground`}},text:{description:`Label text`,control:{type:`text`},table:{category:`Playground`}}},_={parameters:{controls:{disable:!0}},render:()=>(0,f.jsx)(`div`,{className:`gap-lg flex flex-col items-start`,children:r.map(e=>(0,f.jsx)(`div`,{className:`gap-md flex items-center`,children:o.map(t=>(0,f.jsx)(i,{type:e,color:t,onDelete:h(e)?p(`onDelete`):void 0,children:`Badge`},t))},e))})},v={parameters:{controls:{disable:!0}},render:()=>(0,f.jsxs)(`p`,{className:`typography-body text-text gap-sm flex items-center`,children:[`Status`,(0,f.jsx)(i,{type:`inline`,color:`lime`,children:`Active`}),(0,f.jsx)(i,{type:`inline`,color:`gray`,children:`ID-0042`})]})},y={parameters:{controls:{disable:!0}},render:()=>(0,f.jsx)(`div`,{className:`gap-lg flex flex-col items-start`,children:[`default`,`inline`].map(e=>(0,f.jsxs)(`div`,{className:`gap-md flex items-center`,children:[o.map(t=>(0,f.jsx)(i,{type:e,color:t,onClick:p(`onClick`),children:`Badge`},t)),(0,f.jsx)(i,{type:e,color:`gray`,disabled:!0,onClick:p(`onClick`),children:`Disabled`})]},e))})},b={default:{width:50,height:24,nodes:{red:`2124:20911`,lime:`2124:20866`,blue:`2124:20888`,cyan:`2124:20859`,orange:`2124:20904`,yellow:`2124:20853`,gray:`2124:20880`,brand:`2124:20849`}},inline:{width:50,height:18,nodes:{red:`5716:4809`,lime:`5716:4811`,blue:`5716:4813`,cyan:`5716:4815`,orange:`5716:4817`,yellow:`5716:4819`,gray:`5716:4821`,brand:`5716:4823`}},filter:{width:72,height:24,nodes:{red:`2124:20898`,lime:`2124:20882`,blue:`2124:20860`,cyan:`2124:20877`,orange:`2124:20874`,yellow:`2124:20896`,gray:`2124:20893`,brand:`2124:20868`}},tag:{width:72,height:24,nodes:{red:`6399:569`,lime:`6399:593`,blue:`6399:617`,cyan:`6399:641`,orange:`6399:665`,yellow:`6399:689`,gray:`6399:713`,brand:`6399:737`}}},x={args:{type:`inline`,color:`red`},argTypes:{type:{control:{type:`inline-radio`},options:r},color:{control:{type:`select`},options:o}},render:({type:e=`default`,color:t})=>{let n=b[e];return(0,f.jsx)(d,{node:n.nodes[t],width:n.width,height:n.height,className:`flex items-start`,children:(0,f.jsx)(i,{type:e,color:t,onDelete:h(e)?p(`onDelete`):void 0,children:`Badge`})})}},S={render:()=>(0,f.jsx)(t,{})},g.__docgenInfo={description:``,methods:[],displayName:`Playground`,props:{text:{required:!1,tsType:{name:`string`},description:``},clickable:{required:!1,tsType:{name:`boolean`},description:``}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`({
  text,
  clickable,
  ...args
}: React.ComponentProps<typeof Badge> & {
  text?: string;
  clickable?: boolean;
}) => {
  return <div>
      <Badge {...args} onClick={clickable ? action("onClick") : undefined} onDelete={isDismissible(args.type) ? action("onDelete") : undefined}>
        {text}
      </Badge>
    </div>;
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="gap-lg flex flex-col items-start">
      {BadgeTypes.map(type => <div key={type} className="gap-md flex items-center">
          {BadgeColors.map(color => <Badge key={color} type={type} color={color} onDelete={isDismissible(type) ? action("onDelete") : undefined}>
              Badge
            </Badge>)}
        </div>)}
    </div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <p className="typography-body text-text gap-sm flex items-center">
      Status
      <Badge type="inline" color="lime">
        Active
      </Badge>
      <Badge type="inline" color="gray">
        ID-0042
      </Badge>
    </p>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="gap-lg flex flex-col items-start">
      {(["default", "inline"] as const).map(type => <div key={type} className="gap-md flex items-center">
          {BadgeColors.map(color => <Badge key={color} type={type} color={color} onClick={action("onClick")}>
              Badge
            </Badge>)}
          <Badge type={type} color="gray" disabled onClick={action("onClick")}>
            Disabled
          </Badge>
        </div>)}
    </div>
}`,...y.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    type: "inline",
    color: "red"
  },
  argTypes: {
    type: {
      control: {
        type: "inline-radio"
      },
      options: BadgeTypes
    },
    color: {
      control: {
        type: "select"
      },
      options: BadgeColors
    }
  },
  render: ({
    type = "default",
    color
  }) => {
    const spec = figmaNodes[type];
    return <FigmaFrame node={spec.nodes[color]} width={spec.width} height={spec.height} className="flex items-start">
        <Badge type={type} color={color} onDelete={isDismissible(type) ? action("onDelete") : undefined}>
          Badge
        </Badge>
      </FigmaFrame>;
  }
}`,...x.parameters?.docs?.source},description:{story:"Mirrors one enabled Figma variant 1:1 for `scripts/figma-pixel-diff.mjs`.",...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <BadgeSkeleton />
}`,...S.parameters?.docs?.source}}},C=[`Playground`,`Overview`,`Inline`,`Clickable`,`FigmaSpec`,`Skeleton`]}))();export{y as Clickable,x as FigmaSpec,v as Inline,_ as Overview,g as Playground,S as Skeleton,C as __namedExportsOrder,m as default};