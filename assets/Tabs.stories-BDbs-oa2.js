import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{$n as n,Gn as r,Hn as i,Jn as a,Kn as o,Ps as s,Un as c,Wn as l,Yn as u,ba as d,i as f,la as p,qn as m,ys as h}from"./iframe-BNKOs80O.js";import{n as g,t as _}from"./figmaDesign-CO6i5n9C.js";function v(e,t){let n=new Map(e.map(e=>[e.id,e])),r=t.map(e=>n.get(e)).filter(e=>!!e);return r.length===e.length?r:e}function y(e){let[t,n]=(0,x.useState)([{id:`tab1`,label:`Tab 1`},{id:`tab2`,label:`Tab 2`,showLeftDivider:!0},{id:`tab3`,label:`Tab 3`,disabled:!0},{id:`tab4`,label:`Tab 4`,showLeftDivider:!0}]),[r,a]=(0,x.useState)(t[0]?.id??`tab1`);return(0,S.jsx)(c,{...e,selectedId:r,onChange:e=>{C(`onChange`)(e),a(e)},onCloseTab:e=>{C(`onCloseTab`)(e),n(t=>t.filter(t=>t.id!==e))},onReorder:e=>{C(`onReorder`)(e),n(t=>v(t,e))},children:t.map(e=>(0,S.jsx)(i,{id:e.id,label:e.label,disabled:e.disabled,showLeftDivider:e.showLeftDivider,IconLeft:e.id===`tab1`?d:void 0,IconRight:e.id===`tab2`?d:void 0,children:(0,S.jsx)(`span`,{})},e.id))})}function b(e){let[t,n]=(0,x.useState)([{id:`a`,label:`Overview`,content:(0,S.jsx)(`p`,{className:`typography-body-small text-text-secondary`,children:`Panel content for Overview.`})},{id:`b`,label:`Settings`,content:(0,S.jsx)(`p`,{className:`typography-body-small text-text-secondary`,children:`Panel content for Settings.`})},{id:`c`,label:`Disabled`,disabled:!0,content:(0,S.jsx)(`span`,{children:`Not shown`})}]),[i,a]=(0,x.useState)(0),s=(0,x.useMemo)(()=>u(t,i),[t,i]);return(0,S.jsxs)(`div`,{className:`gap-xlg flex min-h-[320px] w-full max-w-3xl flex-col`,children:[(0,S.jsxs)(`div`,{className:`border-border p-md rounded-md border`,children:[(0,S.jsx)(`p`,{className:`typography-body-small text-text-secondary mb-sm`,children:`Tab list region (isolated)`}),(0,S.jsx)(r,{...e,items:t,selectedIndex:i,onIndexChange:e=>{C(`onIndexChange`)(e),a(e)},onCloseTab:e.variant===`container`?(e,t)=>{C(`onCloseTab`)(e,t),n(n=>{let r=n.filter(t=>t.id!==e);return a(e=>r.length===0?0:e>t?e-1:Math.min(e,r.length-1)),r})}:void 0,onReorder:e=>{C(`onReorder`)(e),n(t=>v(t,e))}})]}),(0,S.jsxs)(`div`,{className:`border-border p-lg flex-1 rounded-md border`,children:[(0,S.jsx)(`p`,{className:`typography-body-small text-text-secondary mb-sm`,children:`Panel region (isolated, same state)`}),(0,S.jsx)(o,{items:t,selectedIndex:s,onIndexChange:e=>{C(`panels onIndexChange`)(e),a(e)}})]})]})}var x,S,C,w,T,E,D,O,k,A,j,M,N,P;e((()=>{f(),p(),x=t(s(),1),g(),S=h(),{action:C}=__STORYBOOK_MODULE_ACTIONS__,w="\nUse **`TabsList`** and **`TabsPanels`** as separate components. Share the same `items` array and `selectedIndex` state in the parent.\n\n- **`TabsList`**: required `items`, `selectedIndex`, `onIndexChange`.\n- **`TabsPanels`**: required `items`, `selectedIndex`; optional `onIndexChange` to sync invalid indices (same as list).\n- Use **`resolveEffectiveTabIndex(items, selectedIndex)`** if you need the clamped index before rendering panels.\n\n```tsx\nconst [items, setItems] = useState<TabsItem[]>([...]);\nconst [selectedIndex, setSelectedIndex] = useState(0);\n\n<TabsList\n  items={items}\n  selectedIndex={selectedIndex}\n  onIndexChange={setSelectedIndex}\n/>\n<TabsPanels items={items} selectedIndex={selectedIndex} />\n```\n",T={component:c,title:`Navigation/Tabs`,tags:[`autodocs`],args:{variant:`standard`,size:`md`,radius:`rounded`,fullWidth:!1,withSpacing:!1,draggable:!1,indicatorWidth:`full`},argTypes:{size:{description:`Size of the tabs`,control:{type:`select`},options:[`sm`,`md`,`lg`]},fullWidth:{description:`Whether the tabs take up the full width`,control:{type:`boolean`}},withSpacing:{description:`Adds 8px spacing between tab items`,control:{type:`boolean`}},draggable:{description:`Enables drag-and-drop reordering`,control:{type:`boolean`}},radius:{control:{type:`inline-radio`},options:m},variant:{control:{type:`inline-radio`},options:a},indicatorWidth:{description:`Whether the active indicator spans the whole tab or only its icons and label (standard variant only)`,control:{type:`inline-radio`},options:l}},render:e=>(0,S.jsx)(y,{...e}),parameters:{design:_(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=2172-1040`),docs:{description:{component:`Tabbed navigation inside a view, with optional close and reorder behaviors. Use for switching between related panes of the same object.`}}}},E={},D={name:`Content-width indicator`,args:{indicatorWidth:`content`},parameters:{design:_(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=5632-34151`),docs:{description:{story:`The active indicator hugs the tab's icons and label instead of spanning the whole tab.`}}}},O=[`Overview`,`Qualifications`,`Availability & Absence`,`Compensation`,`History & Notes`,`Documents`,`Equipment`].map((e,t)=>({id:`overflow-${t}`,label:e,content:null})),k=({width:e})=>{let[t,n]=(0,x.useState)(0),i=O[t].id;return(0,S.jsxs)(`div`,{className:`border-border p-md rounded-md border`,style:{width:e},children:[(0,S.jsx)(r,{items:O,selectedIndex:t,onIndexChange:n,size:`sm`}),(0,S.jsx)(`div`,{role:`tabpanel`,id:`panel-${i}`,"aria-labelledby":`tab-${i}`,className:`pt-md typography-body-small text-text-accent`,children:O[t].label})]})},A={name:`Overflow affordance`,parameters:{docs:{description:{story:`Guards the overflow measurement: the fitting strip must never show a scroll button, the narrow one must always show one, including while the active indicator animates between tabs.`}}},render:()=>(0,S.jsxs)(`div`,{className:`gap-xlg flex flex-col`,children:[(0,S.jsx)(k,{width:960}),(0,S.jsx)(k,{width:360})]})},j={name:`Split list and panels`,parameters:{docs:{description:{story:w}}},args:{variant:`standard`,size:`md`,radius:`rounded`,fullWidth:!1,withSpacing:!1,draggable:!1},argTypes:T.argTypes,render:e=>(0,S.jsx)(b,{variant:e.variant,size:e.size,radius:e.radius,fullWidth:e.fullWidth,withSpacing:e.withSpacing,draggable:e.draggable})},M={name:`Draggable tabs`,args:{variant:`container`,size:`md`,radius:`rounded`,fullWidth:!1,withSpacing:!1,draggable:!0},argTypes:T.argTypes,render:e=>(0,S.jsx)(y,{...e})},N={render:()=>(0,S.jsx)(n,{})},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: "Content-width indicator",
  args: {
    indicatorWidth: "content"
  },
  parameters: {
    design: figmaDesign("https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=5632-34151"),
    docs: {
      description: {
        story: "The active indicator hugs the tab's icons and label instead of spanning the whole tab."
      }
    }
  }
}`,...D.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source},description:{story:`Two strips with the same tabs: the upper one has room for all of them, the
lower one does not.

The distinction has to hold *while the indicator moves* - it springs to the
selected tab over roughly half a second, and the strip measures differently
mid-flight than at rest. Switching tabs here used to leave the upper strip
with a scroll button pointing at nothing, so check both strips across
several frames rather than in one screenshot.`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <TabsSkeleton />
}`,...N.parameters?.docs?.source}}},P=[`Playground`,`ContentIndicator`,`OverflowAffordance`,`SplitListAndPanels`,`DraggableTabs`,`Skeleton`]}))();export{D as ContentIndicator,M as DraggableTabs,A as OverflowAffordance,E as Playground,N as Skeleton,j as SplitListAndPanels,P as __namedExportsOrder,T as default};