import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Cn as n,Dn as r,Mo as i,Oi as a,Sn as o,_n as s,bn as c,qo as l,t as u,vn as d,xn as f,yn as p,zi as m}from"./iframe-ZaKetqne.js";import{n as h,t as g}from"./figmaDesign-CO6i5n9C.js";function _(e,t){let n=new Map(e.map(e=>[e.id,e])),r=t.map(e=>n.get(e)).filter(e=>!!e);return r.length===e.length?r:e}function v(e){let[t,n]=(0,b.useState)([{id:`tab1`,label:`Tab 1`},{id:`tab2`,label:`Tab 2`,showLeftDivider:!0},{id:`tab3`,label:`Tab 3`,disabled:!0},{id:`tab4`,label:`Tab 4`,showLeftDivider:!0}]),[r,i]=(0,b.useState)(t[0]?.id??`tab1`);return(0,x.jsx)(d,{...e,selectedId:r,onChange:e=>{S(`onChange`)(e),i(e)},onCloseTab:e=>{S(`onCloseTab`)(e),n(t=>t.filter(t=>t.id!==e))},onReorder:e=>{S(`onReorder`)(e),n(t=>_(t,e))},children:t.map(e=>(0,x.jsx)(s,{id:e.id,label:e.label,disabled:e.disabled,showLeftDivider:e.showLeftDivider,IconLeft:e.id===`tab1`?m:void 0,IconRight:e.id===`tab2`?m:void 0,children:(0,x.jsx)(`span`,{})},e.id))})}function y(e){let[t,r]=(0,b.useState)([{id:`a`,label:`Overview`,content:(0,x.jsx)(`p`,{className:`typography-body-small text-text-secondary`,children:`Panel content for Overview.`})},{id:`b`,label:`Settings`,content:(0,x.jsx)(`p`,{className:`typography-body-small text-text-secondary`,children:`Panel content for Settings.`})},{id:`c`,label:`Disabled`,disabled:!0,content:(0,x.jsx)(`span`,{children:`Not shown`})}]),[i,a]=(0,b.useState)(0),o=(0,b.useMemo)(()=>n(t,i),[t,i]);return(0,x.jsxs)(`div`,{className:`gap-xlg flex min-h-[320px] w-full max-w-3xl flex-col`,children:[(0,x.jsxs)(`div`,{className:`border-border p-md rounded-md border`,children:[(0,x.jsx)(`p`,{className:`typography-body-small text-text-secondary mb-sm`,children:`Tab list region (isolated)`}),(0,x.jsx)(p,{...e,items:t,selectedIndex:i,onIndexChange:e=>{S(`onIndexChange`)(e),a(e)},onCloseTab:e.variant===`container`?(e,t)=>{S(`onCloseTab`)(e,t),r(n=>{let r=n.filter(t=>t.id!==e);return a(e=>r.length===0?0:e>t?e-1:Math.min(e,r.length-1)),r})}:void 0,onReorder:e=>{S(`onReorder`)(e),r(t=>_(t,e))}})]}),(0,x.jsxs)(`div`,{className:`border-border p-lg flex-1 rounded-md border`,children:[(0,x.jsx)(`p`,{className:`typography-body-small text-text-secondary mb-sm`,children:`Panel region (isolated, same state)`}),(0,x.jsx)(c,{items:t,selectedIndex:o,onIndexChange:e=>{S(`panels onIndexChange`)(e),a(e)}})]})]})}var b,x,S,C,w,T,E,D,O,k,A,j,M;e((()=>{u(),a(),b=t(l(),1),h(),x=i(),{action:S}=__STORYBOOK_MODULE_ACTIONS__,C="\nUse **`TabsList`** and **`TabsPanels`** as separate components. Share the same `items` array and `selectedIndex` state in the parent.\n\n- **`TabsList`**: required `items`, `selectedIndex`, `onIndexChange`.\n- **`TabsPanels`**: required `items`, `selectedIndex`; optional `onIndexChange` to sync invalid indices (same as list).\n- Use **`resolveEffectiveTabIndex(items, selectedIndex)`** if you need the clamped index before rendering panels.\n\n```tsx\nconst [items, setItems] = useState<TabsItem[]>([...]);\nconst [selectedIndex, setSelectedIndex] = useState(0);\n\n<TabsList\n  items={items}\n  selectedIndex={selectedIndex}\n  onIndexChange={setSelectedIndex}\n/>\n<TabsPanels items={items} selectedIndex={selectedIndex} />\n```\n",w={component:d,title:`Navigation/Tabs`,tags:[`autodocs`],args:{variant:`standard`,size:`md`,radius:`rounded`,fullWidth:!1,withSpacing:!1,draggable:!1},argTypes:{size:{description:`Size of the tabs`,control:{type:`select`},options:[`sm`,`md`,`lg`]},fullWidth:{description:`Whether the tabs take up the full width`,control:{type:`boolean`}},withSpacing:{description:`Adds 8px spacing between tab items`,control:{type:`boolean`}},draggable:{description:`Enables drag-and-drop reordering`,control:{type:`boolean`}},radius:{control:{type:`inline-radio`},options:f},variant:{control:{type:`inline-radio`},options:o}},render:e=>(0,x.jsx)(v,{...e}),parameters:{design:g(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=2172-1040`),docs:{description:{component:`Tabbed navigation inside a view, with optional close and reorder behaviors. Use for switching between related panes of the same object.`}}}},T={},E=[`Overview`,`Qualifications`,`Availability & Absence`,`Compensation`,`History & Notes`,`Documents`,`Equipment`].map((e,t)=>({id:`overflow-${t}`,label:e,content:null})),D=({width:e})=>{let[t,n]=(0,b.useState)(0),r=E[t].id;return(0,x.jsxs)(`div`,{className:`border-border p-md rounded-md border`,style:{width:e},children:[(0,x.jsx)(p,{items:E,selectedIndex:t,onIndexChange:n,size:`sm`}),(0,x.jsx)(`div`,{role:`tabpanel`,id:`panel-${r}`,"aria-labelledby":`tab-${r}`,className:`pt-md typography-body-small text-text-accent`,children:E[t].label})]})},O={name:`Overflow affordance`,parameters:{docs:{description:{story:`Guards the overflow measurement: the fitting strip must never show a scroll button, the narrow one must always show one, including while the active indicator animates between tabs.`}}},render:()=>(0,x.jsxs)(`div`,{className:`gap-xlg flex flex-col`,children:[(0,x.jsx)(D,{width:960}),(0,x.jsx)(D,{width:360})]})},k={name:`Split list and panels`,parameters:{docs:{description:{story:C}}},args:{variant:`standard`,size:`md`,radius:`rounded`,fullWidth:!1,withSpacing:!1,draggable:!1},argTypes:w.argTypes,render:e=>(0,x.jsx)(y,{variant:e.variant,size:e.size,radius:e.radius,fullWidth:e.fullWidth,withSpacing:e.withSpacing,draggable:e.draggable})},A={name:`Draggable tabs`,args:{variant:`container`,size:`md`,radius:`rounded`,fullWidth:!1,withSpacing:!1,draggable:!0},argTypes:w.argTypes,render:e=>(0,x.jsx)(v,{...e})},j={render:()=>(0,x.jsx)(r,{})},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{}`,...T.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source},description:{story:`Two strips with the same tabs: the upper one has room for all of them, the
lower one does not.

The distinction has to hold *while the indicator moves* - it springs to the
selected tab over roughly half a second, and the strip measures differently
mid-flight than at rest. Switching tabs here used to leave the upper strip
with a scroll button pointing at nothing, so check both strips across
several frames rather than in one screenshot.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <TabsSkeleton />
}`,...j.parameters?.docs?.source}}},M=[`Playground`,`OverflowAffordance`,`SplitListAndPanels`,`DraggableTabs`,`Skeleton`]}))();export{A as DraggableTabs,O as OverflowAffordance,T as Playground,j as Skeleton,k as SplitListAndPanels,M as __namedExportsOrder,w as default};