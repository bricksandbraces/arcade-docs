import{n as e}from"./chunk-jRWAZmH_.js";import{Ci as t,Os as n,Si as r,Us as i,di as a,t as o,wi as s}from"./iframe-jImnWlHt.js";import{n as c,t as l}from"./figmaDesign-DDiUnvXT.js";import{n as u,t as d}from"./figmaFrame-DV8WZAX4.js";var f,p,m,h,g,_,v,y,b,x,S;e((()=>{o(),i(),c(),u(),f=n(),{action:p}=__STORYBOOK_MODULE_ACTIONS__,m={title:`Display & Data/Badge/Badge`,component:r,tags:[`autodocs`],parameters:{design:l(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=5716-4874`),docs:{description:{component:"Small colored label for status, counts, or metadata. `default` is the rounded pill, `inline` the compact outlined label for tables and running text, `filter` adds a dismiss control. Pass `onClick` to render a default or inline badge as a button."}}}},h=({text:e,clickable:t,...n})=>(0,f.jsx)(`div`,{children:(0,f.jsx)(r,{...n,onClick:t?p(`onClick`):void 0,onDelete:n.type===`filter`?p(`onDelete`):void 0,children:e})}),h.args={color:`red`,type:`default`,text:`Badge`,clickable:!1},h.argTypes={color:{description:`The color of the badge`,control:{type:`select`},options:t},type:{description:`The badge kind`,control:{type:`inline-radio`},options:s},clickable:{name:`Clickable`,description:`Passes an onClick, which renders the badge as a button`,control:{type:`boolean`},table:{category:`Playground`}},text:{description:`Label text`,control:{type:`text`},table:{category:`Playground`}}},g={parameters:{controls:{disable:!0}},render:()=>(0,f.jsx)(`div`,{className:`gap-lg flex flex-col items-start`,children:s.map(e=>(0,f.jsx)(`div`,{className:`gap-md flex items-center`,children:t.map(t=>(0,f.jsx)(r,{type:e,color:t,onDelete:e===`filter`?p(`onDelete`):void 0,children:`Badge`},t))},e))})},_={parameters:{controls:{disable:!0}},render:()=>(0,f.jsxs)(`p`,{className:`typography-body text-text gap-sm flex items-center`,children:[`Status`,(0,f.jsx)(r,{type:`inline`,color:`lime`,children:`Active`}),(0,f.jsx)(r,{type:`inline`,color:`gray`,children:`ID-0042`})]})},v={parameters:{controls:{disable:!0}},render:()=>(0,f.jsx)(`div`,{className:`gap-lg flex flex-col items-start`,children:[`default`,`inline`].map(e=>(0,f.jsxs)(`div`,{className:`gap-md flex items-center`,children:[t.map(t=>(0,f.jsx)(r,{type:e,color:t,onClick:p(`onClick`),children:`Badge`},t)),(0,f.jsx)(r,{type:e,color:`gray`,disabled:!0,onClick:p(`onClick`),children:`Disabled`})]},e))})},y={default:{width:50,height:24,nodes:{red:`2124:20911`,lime:`2124:20866`,blue:`2124:20888`,cyan:`2124:20859`,orange:`2124:20904`,yellow:`2124:20853`,gray:`2124:20880`,brand:`2124:20849`}},inline:{width:50,height:18,nodes:{red:`5716:4809`,lime:`5716:4811`,blue:`5716:4813`,cyan:`5716:4815`,orange:`5716:4817`,yellow:`5716:4819`,gray:`5716:4821`,brand:`5716:4823`}},filter:{width:72,height:24,nodes:{red:`2124:20898`,lime:`2124:20882`,blue:`2124:20860`,cyan:`2124:20877`,orange:`2124:20874`,yellow:`2124:20896`,gray:`2124:20893`,brand:`2124:20868`}}},b={args:{type:`inline`,color:`red`},argTypes:{type:{control:{type:`inline-radio`},options:s},color:{control:{type:`select`},options:t}},render:({type:e=`default`,color:t})=>{let n=y[e];return(0,f.jsx)(d,{node:n.nodes[t],width:n.width,height:n.height,className:`flex items-start`,children:(0,f.jsx)(r,{type:e,color:t,onDelete:e===`filter`?p(`onDelete`):void 0,children:`Badge`})})}},x={render:()=>(0,f.jsx)(a,{})},h.__docgenInfo={description:``,methods:[],displayName:`Playground`,props:{text:{required:!1,tsType:{name:`string`},description:``},clickable:{required:!1,tsType:{name:`boolean`},description:``}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`({
  text,
  clickable,
  ...args
}: React.ComponentProps<typeof Badge> & {
  text?: string;
  clickable?: boolean;
}) => {
  return <div>
      <Badge {...args} onClick={clickable ? action("onClick") : undefined} onDelete={args.type === "filter" ? action("onDelete") : undefined}>
        {text}
      </Badge>
    </div>;
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="gap-lg flex flex-col items-start">
      {BadgeTypes.map(type => <div key={type} className="gap-md flex items-center">
          {BadgeColors.map(color => <Badge key={color} type={type} color={color} onDelete={type === "filter" ? action("onDelete") : undefined}>
              Badge
            </Badge>)}
        </div>)}
    </div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
        <Badge type={type} color={color} onDelete={type === "filter" ? action("onDelete") : undefined}>
          Badge
        </Badge>
      </FigmaFrame>;
  }
}`,...b.parameters?.docs?.source},description:{story:"Mirrors one enabled Figma variant 1:1 for `scripts/figma-pixel-diff.mjs`.",...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <BadgeSkeleton />
}`,...x.parameters?.docs?.source}}},S=[`Playground`,`Overview`,`Inline`,`Clickable`,`FigmaSpec`,`Skeleton`]}))();export{v as Clickable,b as FigmaSpec,_ as Inline,g as Overview,h as Playground,x as Skeleton,S as __namedExportsOrder,m as default};