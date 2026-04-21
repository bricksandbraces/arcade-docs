import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{bE as W,bF as N,bG as P,bH as R,w as x,bI as E,bJ as A,bK as q}from"./ContextMenuList-DU-bfPtc.js";import{r as c}from"./index-CY-HDqYb.js";import{a as o}from"./index-B-lxVbXh.js";import"./index-A6zbrgSY.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";import"./index-ZRCHFLd-.js";import"./sizes-BpUsT7VU.js";import"./colors-CoOIoG7W.js";import"./v4-CtRu48qb.js";function C(a,n){const d=new Map(a.map(t=>[t.id,t])),r=n.map(t=>d.get(t)).filter(t=>!!t);return r.length!==a.length?a:r}function D(a){var p;const[n,d]=c.useState([{id:"tab1",label:"Tab 1"},{id:"tab2",label:"Tab 2",showLeftDivider:!0},{id:"tab3",label:"Tab 3",disabled:!0},{id:"tab4",label:"Tab 4",showLeftDivider:!0}]),[r,t]=c.useState(((p=n[0])==null?void 0:p.id)??"tab1");return s.jsx(P,{...a,selectedId:r,onChange:e=>{o("onChange")(e),t(e)},onCloseTab:e=>{o("onCloseTab")(e),d(i=>i.filter(u=>u.id!==e))},onReorder:e=>{o("onReorder")(e),d(i=>C(i,e))},children:n.map(e=>s.jsx(R,{id:e.id,label:e.label,disabled:e.disabled,showLeftDivider:e.showLeftDivider,IconLeft:e.id==="tab1"?x:void 0,IconRight:e.id==="tab2"?x:void 0,children:s.jsx("span",{})},e.id))})}function M(a){const[n,d]=c.useState([{id:"a",label:"Overview",content:s.jsx("p",{className:"typography-body-small text-text-secondary",children:"Panel content for Overview."})},{id:"b",label:"Settings",content:s.jsx("p",{className:"typography-body-small text-text-secondary",children:"Panel content for Settings."})},{id:"c",label:"Disabled",disabled:!0,content:s.jsx("span",{children:"Not shown"})}]),[r,t]=c.useState(0),p=c.useMemo(()=>E(n,r),[n,r]);return s.jsxs("div",{className:"gap-xlg flex min-h-[320px] w-full max-w-3xl flex-col",children:[s.jsxs("div",{className:"border-border rounded-md border p-md",children:[s.jsx("p",{className:"typography-body-small text-text-secondary mb-sm",children:"Tab list region (isolated)"}),s.jsx(A,{...a,items:n,selectedIndex:r,onIndexChange:e=>{o("onIndexChange")(e),t(e)},onCloseTab:a.variant==="container"?(e,i)=>{o("onCloseTab")(e,i),d(u=>{const h=u.filter(l=>l.id!==e);return t(l=>h.length===0?0:l>i?l-1:Math.min(l,h.length-1)),h})}:void 0,onReorder:e=>{o("onReorder")(e),d(i=>C(i,e))}})]}),s.jsxs("div",{className:"border-border rounded-md border p-lg flex-1",children:[s.jsx("p",{className:"typography-body-small text-text-secondary mb-sm",children:"Panel region (isolated, same state)"}),s.jsx(q,{items:n,selectedIndex:p,onIndexChange:e=>{o("panels onIndexChange")(e),t(e)}})]})]})}const O="\nUse **`TabsList`** and **`TabsPanels`** as separate components. Share the same `items` array and `selectedIndex` state in the parent.\n\n- **`TabsList`**: required `items`, `selectedIndex`, `onIndexChange`.\n- **`TabsPanels`**: required `items`, `selectedIndex`; optional `onIndexChange` to sync invalid indices (same as list).\n- Use **`resolveEffectiveTabIndex(items, selectedIndex)`** if you need the clamped index before rendering panels.\n\n```tsx\nconst [items, setItems] = useState<TabsItem[]>([...]);\nconst [selectedIndex, setSelectedIndex] = useState(0);\n\n<TabsList\n  items={items}\n  selectedIndex={selectedIndex}\n  onIndexChange={setSelectedIndex}\n/>\n<TabsPanels items={items} selectedIndex={selectedIndex} />\n```\n",z={component:P,title:"Components/Tabs",args:{variant:"standard",size:"md",radius:"rounded",fullWidth:!1,withSpacing:!1,draggable:!1},argTypes:{size:{description:"Size of the tabs",control:{type:"select"},options:["sm","md","lg"]},fullWidth:{description:"Whether the tabs take up the full width",control:{type:"boolean"}},withSpacing:{description:"Adds 8px spacing between tab items",control:{type:"boolean"}},draggable:{description:"Enables drag-and-drop reordering",control:{type:"boolean"}},radius:{control:{type:"inline-radio"},options:N},variant:{control:{type:"inline-radio"},options:W}},render:a=>s.jsx(D,{...a})},b={},g={name:"Split list and panels",parameters:{docs:{description:{story:O}}},args:{variant:"standard",size:"md",radius:"rounded",fullWidth:!1,withSpacing:!1,draggable:!1},argTypes:z.argTypes,render:a=>s.jsx(M,{variant:a.variant,size:a.size,radius:a.radius,fullWidth:a.fullWidth,withSpacing:a.withSpacing,draggable:a.draggable})},m={name:"Draggable tabs",args:{variant:"container",size:"md",radius:"rounded",fullWidth:!1,withSpacing:!1,draggable:!0},argTypes:z.argTypes,render:a=>s.jsx(D,{...a})};var f,y,T;b.parameters={...b.parameters,docs:{...(f=b.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(T=(y=b.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var S,I,v;g.parameters={...g.parameters,docs:{...(S=g.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(v=(I=g.parameters)==null?void 0:I.docs)==null?void 0:v.source}}};var w,j,L;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(L=(j=m.parameters)==null?void 0:j.docs)==null?void 0:L.source}}};const X=["Playground","SplitListAndPanels","DraggableTabs"];export{m as DraggableTabs,b as Playground,g as SplitListAndPanels,X as __namedExportsOrder,z as default};
