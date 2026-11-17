import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{$a as n,Fc as r,Fs as i,G as a,Hi as o,K as s,ao as c,bc as l,es as u,fs as d,ps as f,t as p,ws as m}from"./iframe-CwyRacPm.js";import{n as h,t as g}from"./figmaDesign-DLesXS3c.js";var _,v,y,b,x,S,C,w,T,E,D,O;e((()=>{p(),n(),_=t(r(),1),h(),v=l(),y=[{value:`de`,label:`Deutsch`},{value:`et`,label:`Eesti`},{value:`en`,label:`English`},{value:`es`,label:`Español`},{value:`fr`,label:`Français`},{value:`it`,label:`Italiano`},{value:`nl`,label:`Nederlands`},{value:`pl`,label:`Polski`},{value:`pt`,label:`Português`}],b=[{value:`studio`,label:`Studio`,description:`Manage studios, devices and members`,icon:(0,v.jsx)(o,{size:24,color:`red`,icon:(0,v.jsx)(m,{})})},{value:`planner`,label:`Planner`,description:`Schedule classes and workouts`,icon:(0,v.jsx)(o,{size:24,color:`blue`,icon:(0,v.jsx)(f,{})})},{value:`insights`,label:`Insights`,description:`Reports on attendance and usage`,icon:(0,v.jsx)(o,{size:24,color:`green`,icon:(0,v.jsx)(d,{})})},{value:`floor`,label:`Floor`,description:`The timer running on studio displays`,icon:(0,v.jsx)(o,{size:24,color:`purple`,icon:(0,v.jsx)(u,{})})},{value:`coach`,label:`Coach`,description:`Not available on your plan`,icon:(0,v.jsx)(o,{size:24,color:`gray`,icon:(0,v.jsx)(c,{})}),disabled:!0}],x={component:a,title:`Components/SearchableModal`,tags:[`autodocs`],args:{open:!1,items:y,defaultValue:`en`,searchPlaceholder:`Search your language`},argTypes:{open:{control:{type:`boolean`}},loadingValue:{control:{type:`select`},options:[null,...y.map(e=>e.value)]}},parameters:{design:g(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=5368-6253`),docs:{description:{component:"A dialog whose only content is a searchable list of options. Picking an option marks it and keeps the dialog open; the consumer decides when to close. Pass `loadingValue` while a choice is being applied to show a spinner in that row."}}}},S=e=>{let[t,n]=(0,_.useState)(e.open),[r,o]=(0,_.useState)(e.defaultValue??null);return(0,_.useEffect)(()=>{n(e.open)},[e.open]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(i,{label:`Selected: ${e.items.find(e=>e.value===r)?.label??`-`}`,onClick:()=>n(!0)}),(0,v.jsx)(a,{...e,open:t,onClose:()=>n(!1),value:r,onChange:e=>o(e)})]})},C={render:e=>(0,v.jsx)(S,{...e})},w={parameters:{a11y:{test:`todo`}},args:{open:!0,loadingValue:`de`},render:e=>(0,v.jsx)(S,{...e})},T={parameters:{a11y:{test:`todo`}},args:{open:!0,searchValue:`Deutschland`},render:e=>(0,v.jsx)(S,{...e})},E={parameters:{a11y:{test:`todo`},docs:{description:{story:"Items with a `description` use the product layout: a leading `ProductIcon`, the label and a secondary line."}}},args:{open:!0,items:b,defaultValue:`studio`,searchPlaceholder:`Search products`},render:e=>(0,v.jsx)(S,{...e})},D={name:`SearchableModalListItem`,parameters:{docs:{description:{story:`The row used inside the list.`}}},render:()=>(0,v.jsxs)(`ul`,{className:`max-w-modal-md gap-xs m-0 flex list-none flex-col p-0`,children:[(0,v.jsx)(s,{label:`Enabled`}),(0,v.jsx)(s,{label:`Selected`,selected:!0}),(0,v.jsx)(s,{label:`Loading`,selected:!0,loading:!0}),(0,v.jsx)(s,{label:`Highlighted match`,highlight:`match`}),(0,v.jsx)(s,{label:`Disabled`,disabled:!0}),(0,v.jsx)(s,{label:`Product`,description:`Description`,icon:(0,v.jsx)(o,{size:24,color:`red`,icon:(0,v.jsx)(m,{})})}),(0,v.jsx)(s,{label:`Product selected`,description:`Description`,icon:(0,v.jsx)(o,{size:24,color:`red`,icon:(0,v.jsx)(m,{})}),selected:!0}),(0,v.jsx)(s,{label:`Product disabled`,description:`Description`,icon:(0,v.jsx)(o,{size:24,color:`gray`,icon:(0,v.jsx)(m,{})}),disabled:!0})]})},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => <Playground {...args} />
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  // Starts open, so axe sees floating-ui's focus guards and the aria-hidden
  // page behind the dialog (aria-hidden-focus) - a known finding of the modal
  // focus manager, not of this component. Downgraded like SidePanel does.
  parameters: {
    a11y: {
      test: "todo"
    }
  },
  args: {
    open: true,
    loadingValue: "de"
  },
  render: args => <Playground {...args} />
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  // Starts open, so axe sees floating-ui's focus guards and the aria-hidden
  // page behind the dialog (aria-hidden-focus) - a known finding of the modal
  // focus manager, not of this component. Downgraded like SidePanel does.
  parameters: {
    a11y: {
      test: "todo"
    }
  },
  args: {
    open: true,
    searchValue: "Deutschland"
  },
  render: args => <Playground {...args} />
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  // Starts open, so axe sees floating-ui's focus guards and the aria-hidden
  // page behind the dialog (aria-hidden-focus) - a known finding of the modal
  // focus manager, not of this component. Downgraded like SidePanel does.
  parameters: {
    a11y: {
      test: "todo"
    },
    docs: {
      description: {
        story: "Items with a \`description\` use the product layout: a leading \`ProductIcon\`, the label and a secondary line."
      }
    }
  },
  args: {
    open: true,
    items: products,
    defaultValue: "studio",
    searchPlaceholder: "Search products"
  },
  render: args => <Playground {...args} />
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: "SearchableModalListItem",
  parameters: {
    docs: {
      description: {
        story: "The row used inside the list."
      }
    }
  },
  render: () => <ul className="max-w-modal-md gap-xs m-0 flex list-none flex-col p-0">
      <SearchableModalListItem label="Enabled" />
      <SearchableModalListItem label="Selected" selected />
      <SearchableModalListItem label="Loading" selected loading />
      <SearchableModalListItem label="Highlighted match" highlight="match" />
      <SearchableModalListItem label="Disabled" disabled />
      <SearchableModalListItem label="Product" description="Description" icon={<ProductIcon size={24} color="red" icon={<IconBarbell />} />} />
      <SearchableModalListItem label="Product selected" description="Description" icon={<ProductIcon size={24} color="red" icon={<IconBarbell />} />} selected />
      <SearchableModalListItem label="Product disabled" description="Description" icon={<ProductIcon size={24} color="gray" icon={<IconBarbell />} />} disabled />
    </ul>
}`,...D.parameters?.docs?.source}}},O=[`Default`,`Loading`,`NoResults`,`Products`,`ListItem`]}))();export{C as Default,D as ListItem,w as Loading,T as NoResults,E as Products,O as __namedExportsOrder,x as default};