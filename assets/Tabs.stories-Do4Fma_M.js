import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Di as n,Do as r,cn as i,dn as a,fn as o,fo as s,gi as c,ln as l,mn as u,pn as d,t as f,un as p,vn as m}from"./iframe-DA-3URkH.js";function h(e,t){let n=new Map(e.map(e=>[e.id,e])),r=t.map(e=>n.get(e)).filter(e=>!!e);return r.length===e.length?r:e}function g(e){let[t,r]=(0,v.useState)([{id:`tab1`,label:`Tab 1`},{id:`tab2`,label:`Tab 2`,showLeftDivider:!0},{id:`tab3`,label:`Tab 3`,disabled:!0},{id:`tab4`,label:`Tab 4`,showLeftDivider:!0}]),[a,o]=(0,v.useState)(t[0]?.id??`tab1`);return(0,y.jsx)(l,{...e,selectedId:a,onChange:e=>{b(`onChange`)(e),o(e)},onCloseTab:e=>{b(`onCloseTab`)(e),r(t=>t.filter(t=>t.id!==e))},onReorder:e=>{b(`onReorder`)(e),r(t=>h(t,e))},children:t.map(e=>(0,y.jsx)(i,{id:e.id,label:e.label,disabled:e.disabled,showLeftDivider:e.showLeftDivider,IconLeft:e.id===`tab1`?n:void 0,IconRight:e.id===`tab2`?n:void 0,children:(0,y.jsx)(`span`,{})},e.id))})}function _(e){let[t,n]=(0,v.useState)([{id:`a`,label:`Overview`,content:(0,y.jsx)(`p`,{className:`typography-body-small text-text-secondary`,children:`Panel content for Overview.`})},{id:`b`,label:`Settings`,content:(0,y.jsx)(`p`,{className:`typography-body-small text-text-secondary`,children:`Panel content for Settings.`})},{id:`c`,label:`Disabled`,disabled:!0,content:(0,y.jsx)(`span`,{children:`Not shown`})}]),[r,i]=(0,v.useState)(0),o=(0,v.useMemo)(()=>u(t,r),[t,r]);return(0,y.jsxs)(`div`,{className:`gap-xlg flex min-h-[320px] w-full max-w-3xl flex-col`,children:[(0,y.jsxs)(`div`,{className:`border-border p-md rounded-md border`,children:[(0,y.jsx)(`p`,{className:`typography-body-small text-text-secondary mb-sm`,children:`Tab list region (isolated)`}),(0,y.jsx)(p,{...e,items:t,selectedIndex:r,onIndexChange:e=>{b(`onIndexChange`)(e),i(e)},onCloseTab:e.variant===`container`?(e,t)=>{b(`onCloseTab`)(e,t),n(n=>{let r=n.filter(t=>t.id!==e);return i(e=>r.length===0?0:e>t?e-1:Math.min(e,r.length-1)),r})}:void 0,onReorder:e=>{b(`onReorder`)(e),n(t=>h(t,e))}})]}),(0,y.jsxs)(`div`,{className:`border-border p-lg flex-1 rounded-md border`,children:[(0,y.jsx)(`p`,{className:`typography-body-small text-text-secondary mb-sm`,children:`Panel region (isolated, same state)`}),(0,y.jsx)(a,{items:t,selectedIndex:o,onIndexChange:e=>{b(`panels onIndexChange`)(e),i(e)}})]})]})}var v,y,b,x,S,C,w,T,E,D;e((()=>{f(),c(),v=t(r(),1),y=s(),{action:b}=__STORYBOOK_MODULE_ACTIONS__,x="\nUse **`TabsList`** and **`TabsPanels`** as separate components. Share the same `items` array and `selectedIndex` state in the parent.\n\n- **`TabsList`**: required `items`, `selectedIndex`, `onIndexChange`.\n- **`TabsPanels`**: required `items`, `selectedIndex`; optional `onIndexChange` to sync invalid indices (same as list).\n- Use **`resolveEffectiveTabIndex(items, selectedIndex)`** if you need the clamped index before rendering panels.\n\n```tsx\nconst [items, setItems] = useState<TabsItem[]>([...]);\nconst [selectedIndex, setSelectedIndex] = useState(0);\n\n<TabsList\n  items={items}\n  selectedIndex={selectedIndex}\n  onIndexChange={setSelectedIndex}\n/>\n<TabsPanels items={items} selectedIndex={selectedIndex} />\n```\n",S={component:l,title:`Navigation/Tabs`,tags:[`autodocs`],args:{variant:`standard`,size:`md`,radius:`rounded`,fullWidth:!1,withSpacing:!1,draggable:!1},argTypes:{size:{description:`Size of the tabs`,control:{type:`select`},options:[`sm`,`md`,`lg`]},fullWidth:{description:`Whether the tabs take up the full width`,control:{type:`boolean`}},withSpacing:{description:`Adds 8px spacing between tab items`,control:{type:`boolean`}},draggable:{description:`Enables drag-and-drop reordering`,control:{type:`boolean`}},radius:{control:{type:`inline-radio`},options:o},variant:{control:{type:`inline-radio`},options:d}},render:e=>(0,y.jsx)(g,{...e}),parameters:{docs:{description:{component:`Tabbed navigation inside a view, with optional close and reorder behaviors. Use for switching between related panes of the same object.`}}}},C={},w={name:`Split list and panels`,parameters:{docs:{description:{story:x}}},args:{variant:`standard`,size:`md`,radius:`rounded`,fullWidth:!1,withSpacing:!1,draggable:!1},argTypes:S.argTypes,render:e=>(0,y.jsx)(_,{variant:e.variant,size:e.size,radius:e.radius,fullWidth:e.fullWidth,withSpacing:e.withSpacing,draggable:e.draggable})},T={name:`Draggable tabs`,args:{variant:`container`,size:`md`,radius:`rounded`,fullWidth:!1,withSpacing:!1,draggable:!0},argTypes:S.argTypes,render:e=>(0,y.jsx)(g,{...e})},E={render:()=>(0,y.jsx)(m,{})},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: "Split list and panels",
  parameters: {
    docs: {
      description: {
        story: splitLayoutDocs
      }
    }
  },
  args: {
    variant: "standard",
    size: "md",
    radius: "rounded",
    fullWidth: false,
    withSpacing: false,
    draggable: false
  },
  argTypes: meta.argTypes,
  render: args => <SplitListAndPanelsDemo variant={args.variant} size={args.size} radius={args.radius} fullWidth={args.fullWidth} withSpacing={args.withSpacing} draggable={args.draggable} />
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: "Draggable tabs",
  args: {
    variant: "container",
    size: "md",
    radius: "rounded",
    fullWidth: false,
    withSpacing: false,
    draggable: true
  },
  argTypes: meta.argTypes,
  render: args => <TabsPlayground {...args} />
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <TabsSkeleton />
}`,...E.parameters?.docs?.source}}},D=[`Playground`,`SplitListAndPanels`,`DraggableTabs`,`Skeleton`]}))();export{T as DraggableTabs,C as Playground,E as Skeleton,w as SplitListAndPanels,D as __namedExportsOrder,S as default};