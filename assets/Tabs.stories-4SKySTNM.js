import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{dn as n,fn as r,hn as i,ki as a,ko as o,ln as s,mn as c,mo as l,pn as u,t as d,un as f,vi as p,yn as m}from"./iframe-DrybGsO8.js";function h(e,t){let n=new Map(e.map(e=>[e.id,e])),r=t.map(e=>n.get(e)).filter(e=>!!e);return r.length===e.length?r:e}function g(e){let[t,n]=(0,v.useState)([{id:`tab1`,label:`Tab 1`},{id:`tab2`,label:`Tab 2`,showLeftDivider:!0},{id:`tab3`,label:`Tab 3`,disabled:!0},{id:`tab4`,label:`Tab 4`,showLeftDivider:!0}]),[r,i]=(0,v.useState)(t[0]?.id??`tab1`);return(0,y.jsx)(f,{...e,selectedId:r,onChange:e=>{b(`onChange`)(e),i(e)},onCloseTab:e=>{b(`onCloseTab`)(e),n(t=>t.filter(t=>t.id!==e))},onReorder:e=>{b(`onReorder`)(e),n(t=>h(t,e))},children:t.map(e=>(0,y.jsx)(s,{id:e.id,label:e.label,disabled:e.disabled,showLeftDivider:e.showLeftDivider,IconLeft:e.id===`tab1`?a:void 0,IconRight:e.id===`tab2`?a:void 0,children:(0,y.jsx)(`span`,{})},e.id))})}function _(e){let[t,a]=(0,v.useState)([{id:`a`,label:`Overview`,content:(0,y.jsx)(`p`,{className:`typography-body-small text-text-secondary`,children:`Panel content for Overview.`})},{id:`b`,label:`Settings`,content:(0,y.jsx)(`p`,{className:`typography-body-small text-text-secondary`,children:`Panel content for Settings.`})},{id:`c`,label:`Disabled`,disabled:!0,content:(0,y.jsx)(`span`,{children:`Not shown`})}]),[o,s]=(0,v.useState)(0),c=(0,v.useMemo)(()=>i(t,o),[t,o]);return(0,y.jsxs)(`div`,{className:`gap-xlg flex min-h-[320px] w-full max-w-3xl flex-col`,children:[(0,y.jsxs)(`div`,{className:`border-border p-md rounded-md border`,children:[(0,y.jsx)(`p`,{className:`typography-body-small text-text-secondary mb-sm`,children:`Tab list region (isolated)`}),(0,y.jsx)(n,{...e,items:t,selectedIndex:o,onIndexChange:e=>{b(`onIndexChange`)(e),s(e)},onCloseTab:e.variant===`container`?(e,t)=>{b(`onCloseTab`)(e,t),a(n=>{let r=n.filter(t=>t.id!==e);return s(e=>r.length===0?0:e>t?e-1:Math.min(e,r.length-1)),r})}:void 0,onReorder:e=>{b(`onReorder`)(e),a(t=>h(t,e))}})]}),(0,y.jsxs)(`div`,{className:`border-border p-lg flex-1 rounded-md border`,children:[(0,y.jsx)(`p`,{className:`typography-body-small text-text-secondary mb-sm`,children:`Panel region (isolated, same state)`}),(0,y.jsx)(r,{items:t,selectedIndex:c,onIndexChange:e=>{b(`panels onIndexChange`)(e),s(e)}})]})]})}var v,y,b,x,S,C,w,T,E,D,O,k,A;e((()=>{d(),p(),v=t(o(),1),y=l(),{action:b}=__STORYBOOK_MODULE_ACTIONS__,x="\nUse **`TabsList`** and **`TabsPanels`** as separate components. Share the same `items` array and `selectedIndex` state in the parent.\n\n- **`TabsList`**: required `items`, `selectedIndex`, `onIndexChange`.\n- **`TabsPanels`**: required `items`, `selectedIndex`; optional `onIndexChange` to sync invalid indices (same as list).\n- Use **`resolveEffectiveTabIndex(items, selectedIndex)`** if you need the clamped index before rendering panels.\n\n```tsx\nconst [items, setItems] = useState<TabsItem[]>([...]);\nconst [selectedIndex, setSelectedIndex] = useState(0);\n\n<TabsList\n  items={items}\n  selectedIndex={selectedIndex}\n  onIndexChange={setSelectedIndex}\n/>\n<TabsPanels items={items} selectedIndex={selectedIndex} />\n```\n",S={component:f,title:`Navigation/Tabs`,tags:[`autodocs`],args:{variant:`standard`,size:`md`,radius:`rounded`,fullWidth:!1,withSpacing:!1,draggable:!1},argTypes:{size:{description:`Size of the tabs`,control:{type:`select`},options:[`sm`,`md`,`lg`]},fullWidth:{description:`Whether the tabs take up the full width`,control:{type:`boolean`}},withSpacing:{description:`Adds 8px spacing between tab items`,control:{type:`boolean`}},draggable:{description:`Enables drag-and-drop reordering`,control:{type:`boolean`}},radius:{control:{type:`inline-radio`},options:u},variant:{control:{type:`inline-radio`},options:c}},render:e=>(0,y.jsx)(g,{...e}),parameters:{docs:{description:{component:`Tabbed navigation inside a view, with optional close and reorder behaviors. Use for switching between related panes of the same object.`}}}},C={},w=[`Overview`,`Qualifications`,`Availability & Absence`,`Compensation`,`History & Notes`,`Documents`,`Equipment`].map((e,t)=>({id:`overflow-${t}`,label:e,content:null})),T=({width:e})=>{let[t,r]=(0,v.useState)(0),i=w[t].id;return(0,y.jsxs)(`div`,{className:`border-border p-md rounded-md border`,style:{width:e},children:[(0,y.jsx)(n,{items:w,selectedIndex:t,onIndexChange:r,size:`sm`}),(0,y.jsx)(`div`,{role:`tabpanel`,id:`panel-${i}`,"aria-labelledby":`tab-${i}`,className:`pt-md typography-body-small text-text-accent`,children:w[t].label})]})},E={name:`Overflow affordance`,parameters:{docs:{description:{story:`Guards the overflow measurement: the fitting strip must never show a scroll button, the narrow one must always show one, including while the active indicator animates between tabs.`}}},render:()=>(0,y.jsxs)(`div`,{className:`gap-xlg flex flex-col`,children:[(0,y.jsx)(T,{width:960}),(0,y.jsx)(T,{width:360})]})},D={name:`Split list and panels`,parameters:{docs:{description:{story:x}}},args:{variant:`standard`,size:`md`,radius:`rounded`,fullWidth:!1,withSpacing:!1,draggable:!1},argTypes:S.argTypes,render:e=>(0,y.jsx)(_,{variant:e.variant,size:e.size,radius:e.radius,fullWidth:e.fullWidth,withSpacing:e.withSpacing,draggable:e.draggable})},O={name:`Draggable tabs`,args:{variant:`container`,size:`md`,radius:`rounded`,fullWidth:!1,withSpacing:!1,draggable:!0},argTypes:S.argTypes,render:e=>(0,y.jsx)(g,{...e})},k={render:()=>(0,y.jsx)(m,{})},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{}`,...C.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: "Overflow affordance",
  parameters: {
    docs: {
      description: {
        story: "Guards the overflow measurement: the fitting strip must never show a scroll button, the narrow one must always show one, including while the active indicator animates between tabs."
      }
    }
  },
  render: () => <div className="gap-xlg flex flex-col">
      <OverflowStrip width={960} />
      <OverflowStrip width={360} />
    </div>
}`,...E.parameters?.docs?.source},description:{story:`Two strips with the same tabs: the upper one has room for all of them, the
lower one does not.

The distinction has to hold *while the indicator moves* - it springs to the
selected tab over roughly half a second, and the strip measures differently
mid-flight than at rest. Switching tabs here used to leave the upper strip
with a scroll button pointing at nothing, so check both strips across
several frames rather than in one screenshot.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <TabsSkeleton />
}`,...k.parameters?.docs?.source}}},A=[`Playground`,`OverflowAffordance`,`SplitListAndPanels`,`DraggableTabs`,`Skeleton`]}))();export{O as DraggableTabs,E as OverflowAffordance,C as Playground,k as Skeleton,D as SplitListAndPanels,A as __namedExportsOrder,S as default};