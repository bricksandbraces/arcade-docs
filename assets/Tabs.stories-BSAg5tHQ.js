import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Ga as n,Tc as r,ar as i,cr as a,fr as o,ir as s,no as c,nr as l,or as u,rr as d,sr as f,t as p,tr as m,uc as h}from"./iframe-BGZyYePL.js";import{n as g,t as _}from"./figmaDesign-DLesXS3c.js";function v(e,t){let n=new Map(e.map(e=>[e.id,e])),r=t.map(e=>n.get(e)).filter(e=>!!e);return r.length===e.length?r:e}function y(e){let[t,n]=(0,S.useState)([{id:`tab1`,label:`Tab 1`},{id:`tab2`,label:`Tab 2`,showLeftDivider:!0},{id:`tab3`,label:`Tab 3`,disabled:!0},{id:`tab4`,label:`Tab 4`,showLeftDivider:!0}]),[r,i]=(0,S.useState)(t[0]?.id??`tab1`);return(0,C.jsx)(l,{...e,selectedId:r,onChange:e=>{w(`onChange`)(e),i(e)},onCloseTab:e=>{w(`onCloseTab`)(e),n(t=>t.filter(t=>t.id!==e))},onReorder:e=>{w(`onReorder`)(e),n(t=>v(t,e))},children:t.map(e=>(0,C.jsx)(m,{id:e.id,label:e.label,disabled:e.disabled,showLeftDivider:e.showLeftDivider,IconLeft:e.id===`tab1`?c:void 0,IconRight:e.id===`tab2`?c:void 0,children:(0,C.jsx)(`span`,{})},e.id))})}function b(e){let[t,n]=(0,S.useState)([{id:`a`,label:`Overview`,content:(0,C.jsx)(`p`,{className:`typography-body-small text-text-secondary`,children:`Panel content for Overview.`})},{id:`b`,label:`Settings`,content:(0,C.jsx)(`p`,{className:`typography-body-small text-text-secondary`,children:`Panel content for Settings.`})},{id:`c`,label:`Disabled`,disabled:!0,content:(0,C.jsx)(`span`,{children:`Not shown`})}]),[r,o]=(0,S.useState)(0),c=(0,S.useMemo)(()=>a(t,r),[t,r]);return(0,C.jsxs)(`div`,{className:`gap-xlg flex min-h-[320px] w-full max-w-3xl flex-col`,children:[(0,C.jsxs)(`div`,{className:`border-border p-md rounded-md border`,children:[(0,C.jsx)(`p`,{className:`typography-body-small text-text-secondary mb-sm`,children:`Tab list region (isolated)`}),(0,C.jsx)(s,{...e,items:t,selectedIndex:r,onIndexChange:e=>{w(`onIndexChange`)(e),o(e)},onCloseTab:e.variant===`container`?(e,t)=>{w(`onCloseTab`)(e,t),n(n=>{let r=n.filter(t=>t.id!==e);return o(e=>r.length===0?0:e>t?e-1:Math.min(e,r.length-1)),r})}:void 0,onReorder:e=>{w(`onReorder`)(e),n(t=>v(t,e))}})]}),(0,C.jsxs)(`div`,{className:`border-border p-lg flex-1 rounded-md border`,children:[(0,C.jsx)(`p`,{className:`typography-body-small text-text-secondary mb-sm`,children:`Panel region (isolated, same state)`}),(0,C.jsx)(i,{items:t,selectedIndex:c,onIndexChange:e=>{w(`panels onIndexChange`)(e),o(e)}})]})]})}function x(){let[e,t]=(0,S.useState)(!0),[n,r]=(0,S.useState)(!1),[i,a]=(0,S.useState)([]),[o,c]=(0,S.useState)(2),[l,u]=(0,S.useState)(2),[d,f]=(0,S.useState)(2);return(0,C.jsxs)(`div`,{className:`gap-lg flex flex-col items-start`,children:[(0,C.jsx)(`button`,{type:`button`,onClick:()=>t(e=>!e),children:`Toggle hidden parent`}),(0,C.jsx)(`div`,{hidden:e,className:`w-full`,"data-testid":`hidden-parent`,children:(0,C.jsx)(s,{items:P,selectedIndex:o,onIndexChange:c})}),(0,C.jsx)(`button`,{type:`button`,onClick:()=>r(e=>!e),children:`Toggle mounted`}),n&&(0,C.jsx)(`div`,{className:`w-full`,"data-testid":`mounted`,children:(0,C.jsx)(s,{items:P,selectedIndex:l,onIndexChange:u})}),(0,C.jsx)(`button`,{type:`button`,onClick:()=>a(P),children:`Load late items`}),(0,C.jsx)(`div`,{className:`w-full`,"data-testid":`late-items`,children:(0,C.jsx)(s,{items:i,selectedIndex:d,onIndexChange:f})})]})}var S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L;e((()=>{p(),n(),S=t(r(),1),g(),C=h(),{action:w}=__STORYBOOK_MODULE_ACTIONS__,T="\nUse **`TabsList`** and **`TabsPanels`** as separate components. Share the same `items` array and `selectedIndex` state in the parent.\n\n- **`TabsList`**: required `items`, `selectedIndex`, `onIndexChange`.\n- **`TabsPanels`**: required `items`, `selectedIndex`; optional `onIndexChange` to sync invalid indices (same as list).\n- Use **`resolveEffectiveTabIndex(items, selectedIndex)`** if you need the clamped index before rendering panels.\n\n```tsx\nconst [items, setItems] = useState<TabsItem[]>([...]);\nconst [selectedIndex, setSelectedIndex] = useState(0);\n\n<TabsList\n  items={items}\n  selectedIndex={selectedIndex}\n  onIndexChange={setSelectedIndex}\n/>\n<TabsPanels items={items} selectedIndex={selectedIndex} />\n```\n",E={component:l,title:`Components/Tabs`,tags:[`autodocs`],args:{variant:`standard`,size:`md`,radius:`rounded`,fullWidth:!1,withSpacing:!1,draggable:!1,indicatorWidth:`full`},argTypes:{size:{description:`Size of the tabs`,control:{type:`select`},options:[`sm`,`md`,`lg`]},fullWidth:{description:`Whether the tabs take up the full width`,control:{type:`boolean`}},withSpacing:{description:`Adds 8px spacing between tab items`,control:{type:`boolean`}},draggable:{description:`Enables drag-and-drop reordering`,control:{type:`boolean`}},radius:{control:{type:`inline-radio`},options:u},variant:{control:{type:`inline-radio`},options:f},indicatorWidth:{description:`Whether the active indicator spans the whole tab or only its icons and label (standard variant only)`,control:{type:`inline-radio`},options:d}},render:e=>(0,C.jsx)(y,{...e}),parameters:{design:_(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=2172-1040`),docs:{description:{component:`Tabbed navigation inside a view, with optional close and reorder behaviors. Use for switching between related panes of the same object.`}}}},D={},O={name:`Content-width indicator`,args:{indicatorWidth:`content`},parameters:{design:_(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=5632-34151`),docs:{description:{story:`The active indicator hugs the tab's icons and label instead of spanning the whole tab.`}}}},k=[`Overview`,`Qualifications`,`Availability & Absence`,`Compensation`,`History & Notes`,`Documents`,`Equipment`].map((e,t)=>({id:`overflow-${t}`,label:e,content:null})),A=({width:e})=>{let[t,n]=(0,S.useState)(0),r=k[t].id;return(0,C.jsxs)(`div`,{className:`border-border p-md rounded-md border`,style:{width:e},children:[(0,C.jsx)(s,{items:k,selectedIndex:t,onIndexChange:n,size:`sm`}),(0,C.jsx)(`div`,{role:`tabpanel`,id:`panel-${r}`,"aria-labelledby":`tab-${r}`,className:`pt-md typography-body-small text-text-accent`,children:k[t].label})]})},j={name:`Overflow affordance`,parameters:{docs:{description:{story:`Guards the overflow measurement: the fitting strip must never show a scroll button, the narrow one must always show one, including while the active indicator animates between tabs.`}}},render:()=>(0,C.jsxs)(`div`,{className:`gap-xlg flex flex-col`,children:[(0,C.jsx)(A,{width:960}),(0,C.jsx)(A,{width:360})]})},M={name:`Split list and panels`,parameters:{docs:{description:{story:T}}},args:{variant:`standard`,size:`md`,radius:`rounded`,fullWidth:!1,withSpacing:!1,draggable:!1},argTypes:E.argTypes,render:e=>(0,C.jsx)(b,{variant:e.variant,size:e.size,radius:e.radius,fullWidth:e.fullWidth,withSpacing:e.withSpacing,draggable:e.draggable})},N={name:`Draggable tabs`,args:{variant:`container`,size:`md`,radius:`rounded`,fullWidth:!1,withSpacing:!1,draggable:!0},argTypes:E.argTypes,render:e=>(0,C.jsx)(y,{...e})},P=[{id:`first`,label:`First`},{id:`second`,label:`Second`},{id:`third`,label:`Third`}],F={render:()=>(0,C.jsx)(x,{}),parameters:{docs:{description:{story:`The indicator appears in place the first time it can be placed, whether the tabs are revealed, mounted or loaded late. Only later selection changes animate.`}}}},I={render:()=>(0,C.jsx)(o,{})},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source},description:{story:`Two strips with the same tabs: the upper one has room for all of them, the
lower one does not.

The distinction has to hold *while the indicator moves* - it springs to the
selected tab over roughly half a second, and the strip measures differently
mid-flight than at rest. Switching tabs here used to leave the upper strip
with a scroll button pointing at nothing, so check both strips across
several frames rather than in one screenshot.`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <TabsFirstReveal />,
  parameters: {
    docs: {
      description: {
        story: "The indicator appears in place the first time it can be placed, whether the tabs are revealed, mounted or loaded late. Only later selection changes animate."
      }
    }
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <TabsSkeleton />
}`,...I.parameters?.docs?.source}}},L=[`Playground`,`ContentIndicator`,`OverflowAffordance`,`SplitListAndPanels`,`DraggableTabs`,`FirstReveal`,`Skeleton`]}))();export{O as ContentIndicator,N as DraggableTabs,F as FirstReveal,j as OverflowAffordance,D as Playground,I as Skeleton,M as SplitListAndPanels,L as __namedExportsOrder,E as default};