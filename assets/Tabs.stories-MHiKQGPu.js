import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Di as n,Hi as r,Jn as i,an as a,cn as o,in as s,ln as c,nr as l,on as u,sn as d,t as f,un as p}from"./iframe-CAZ8iI13.js";function m(e,t){let n=new Map(e.map(e=>[e.id,e])),r=t.map(e=>n.get(e)).filter(e=>!!e);return r.length===e.length?r:e}function h(e){let[t,n]=(0,_.useState)([{id:`tab1`,label:`Tab 1`},{id:`tab2`,label:`Tab 2`,showLeftDivider:!0},{id:`tab3`,label:`Tab 3`,disabled:!0},{id:`tab4`,label:`Tab 4`,showLeftDivider:!0}]),[r,i]=(0,_.useState)(t[0]?.id??`tab1`);return(0,v.jsx)(a,{...e,selectedId:r,onChange:e=>{y(`onChange`)(e),i(e)},onCloseTab:e=>{y(`onCloseTab`)(e),n(t=>t.filter(t=>t.id!==e))},onReorder:e=>{y(`onReorder`)(e),n(t=>m(t,e))},children:t.map(e=>(0,v.jsx)(s,{id:e.id,label:e.label,disabled:e.disabled,showLeftDivider:e.showLeftDivider,IconLeft:e.id===`tab1`?l:void 0,IconRight:e.id===`tab2`?l:void 0,children:(0,v.jsx)(`span`,{})},e.id))})}function g(e){let[t,n]=(0,_.useState)([{id:`a`,label:`Overview`,content:(0,v.jsx)(`p`,{className:`typography-body-small text-text-secondary`,children:`Panel content for Overview.`})},{id:`b`,label:`Settings`,content:(0,v.jsx)(`p`,{className:`typography-body-small text-text-secondary`,children:`Panel content for Settings.`})},{id:`c`,label:`Disabled`,disabled:!0,content:(0,v.jsx)(`span`,{children:`Not shown`})}]),[r,i]=(0,_.useState)(0),a=(0,_.useMemo)(()=>p(t,r),[t,r]);return(0,v.jsxs)(`div`,{className:`gap-xlg flex min-h-[320px] w-full max-w-3xl flex-col`,children:[(0,v.jsxs)(`div`,{className:`border-border p-md rounded-md border`,children:[(0,v.jsx)(`p`,{className:`typography-body-small text-text-secondary mb-sm`,children:`Tab list region (isolated)`}),(0,v.jsx)(u,{...e,items:t,selectedIndex:r,onIndexChange:e=>{y(`onIndexChange`)(e),i(e)},onCloseTab:e.variant===`container`?(e,t)=>{y(`onCloseTab`)(e,t),n(n=>{let r=n.filter(t=>t.id!==e);return i(e=>r.length===0?0:e>t?e-1:Math.min(e,r.length-1)),r})}:void 0,onReorder:e=>{y(`onReorder`)(e),n(t=>m(t,e))}})]}),(0,v.jsxs)(`div`,{className:`border-border p-lg flex-1 rounded-md border`,children:[(0,v.jsx)(`p`,{className:`typography-body-small text-text-secondary mb-sm`,children:`Panel region (isolated, same state)`}),(0,v.jsx)(d,{items:t,selectedIndex:a,onIndexChange:e=>{y(`panels onIndexChange`)(e),i(e)}})]})]})}var _,v,y,b,x,S,C,w,T;e((()=>{f(),i(),_=t(r(),1),v=n(),{action:y}=__STORYBOOK_MODULE_ACTIONS__,b="\nUse **`TabsList`** and **`TabsPanels`** as separate components. Share the same `items` array and `selectedIndex` state in the parent.\n\n- **`TabsList`**: required `items`, `selectedIndex`, `onIndexChange`.\n- **`TabsPanels`**: required `items`, `selectedIndex`; optional `onIndexChange` to sync invalid indices (same as list).\n- Use **`resolveEffectiveTabIndex(items, selectedIndex)`** if you need the clamped index before rendering panels.\n\n```tsx\nconst [items, setItems] = useState<TabsItem[]>([...]);\nconst [selectedIndex, setSelectedIndex] = useState(0);\n\n<TabsList\n  items={items}\n  selectedIndex={selectedIndex}\n  onIndexChange={setSelectedIndex}\n/>\n<TabsPanels items={items} selectedIndex={selectedIndex} />\n```\n",x={component:a,title:`Components/Tabs`,tags:[`autodocs`],args:{variant:`standard`,size:`md`,radius:`rounded`,fullWidth:!1,withSpacing:!1,draggable:!1},argTypes:{size:{description:`Size of the tabs`,control:{type:`select`},options:[`sm`,`md`,`lg`]},fullWidth:{description:`Whether the tabs take up the full width`,control:{type:`boolean`}},withSpacing:{description:`Adds 8px spacing between tab items`,control:{type:`boolean`}},draggable:{description:`Enables drag-and-drop reordering`,control:{type:`boolean`}},radius:{control:{type:`inline-radio`},options:o},variant:{control:{type:`inline-radio`},options:c}},render:e=>(0,v.jsx)(h,{...e}),parameters:{docs:{description:{component:`Tabbed navigation inside a view, with optional close and reorder behaviors. Use for switching between related panes of the same object.`}}}},S={},C={name:`Split list and panels`,parameters:{docs:{description:{story:b}}},args:{variant:`standard`,size:`md`,radius:`rounded`,fullWidth:!1,withSpacing:!1,draggable:!1},argTypes:x.argTypes,render:e=>(0,v.jsx)(g,{variant:e.variant,size:e.size,radius:e.radius,fullWidth:e.fullWidth,withSpacing:e.withSpacing,draggable:e.draggable})},w={name:`Draggable tabs`,args:{variant:`container`,size:`md`,radius:`rounded`,fullWidth:!1,withSpacing:!1,draggable:!0},argTypes:x.argTypes,render:e=>(0,v.jsx)(h,{...e})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T=[`Playground`,`SplitListAndPanels`,`DraggableTabs`]}))();export{w as DraggableTabs,S as Playground,C as SplitListAndPanels,T as __namedExportsOrder,x as default};