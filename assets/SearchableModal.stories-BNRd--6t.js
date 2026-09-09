import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Co as n,H as r,Ra as i,Ro as a,U as o,t as s}from"./iframe-K9qsHq0w.js";var c,l,u,d,f,p,m,h,g,_;e((()=>{s(),c=t(a(),1),l=n(),u=[{value:`de`,label:`Deutsch`},{value:`et`,label:`Eesti`},{value:`en`,label:`English`},{value:`es`,label:`Español`},{value:`fr`,label:`Français`},{value:`it`,label:`Italiano`},{value:`nl`,label:`Nederlands`},{value:`pl`,label:`Polski`},{value:`pt`,label:`Português`}],d={component:r,title:`Overlays & Menus/SearchableModal`,tags:[`autodocs`],args:{open:!1,items:u,defaultValue:`en`,searchPlaceholder:`Search your language`},argTypes:{open:{control:{type:`boolean`}},loadingValue:{control:{type:`select`},options:[null,...u.map(e=>e.value)]}},parameters:{docs:{description:{component:"A dialog whose only content is a searchable list of options. Picking an option marks it and keeps the dialog open; the consumer decides when to close. Pass `loadingValue` while a choice is being applied to show a spinner in that row."}}}},f=e=>{let[t,n]=(0,c.useState)(e.open),[a,o]=(0,c.useState)(e.defaultValue??null);return(0,c.useEffect)(()=>{n(e.open)},[e.open]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i,{label:`Language: ${u.find(e=>e.value===a)?.label??`-`}`,onClick:()=>n(!0)}),(0,l.jsx)(r,{...e,open:t,onClose:()=>n(!1),value:a,onChange:e=>o(e)})]})},p={render:e=>(0,l.jsx)(f,{...e})},m={parameters:{a11y:{test:`todo`}},args:{open:!0,loadingValue:`de`},render:e=>(0,l.jsx)(f,{...e})},h={parameters:{a11y:{test:`todo`}},args:{open:!0,searchValue:`Deutschland`},render:e=>(0,l.jsx)(f,{...e})},g={name:`SearchableModalListItem`,parameters:{docs:{description:{story:`The row used inside the list.`}}},render:()=>(0,l.jsxs)(`ul`,{className:`max-w-modal-md m-0 flex list-none flex-col p-0`,children:[(0,l.jsx)(o,{label:`Enabled`}),(0,l.jsx)(o,{label:`Selected`,selected:!0}),(0,l.jsx)(o,{label:`Loading`,selected:!0,loading:!0}),(0,l.jsx)(o,{label:`Highlighted match`,highlight:`match`}),(0,l.jsx)(o,{label:`Disabled`,disabled:!0})]})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <Playground {...args} />
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "SearchableModalListItem",
  parameters: {
    docs: {
      description: {
        story: "The row used inside the list."
      }
    }
  },
  render: () => <ul className="max-w-modal-md m-0 flex list-none flex-col p-0">
      <SearchableModalListItem label="Enabled" />
      <SearchableModalListItem label="Selected" selected />
      <SearchableModalListItem label="Loading" selected loading />
      <SearchableModalListItem label="Highlighted match" highlight="match" />
      <SearchableModalListItem label="Disabled" disabled />
    </ul>
}`,...g.parameters?.docs?.source}}},_=[`Default`,`Loading`,`NoResults`,`ListItem`]}))();export{p as Default,g as ListItem,m as Loading,h as NoResults,_ as __namedExportsOrder,d as default};