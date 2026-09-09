import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{H as n,Mo as r,U as i,qa as a,qo as o,t as s}from"./iframe-DTfjFPcB.js";import{n as c,t as l}from"./figmaDesign-CO6i5n9C.js";var u,d,f,p,m,h,g,_,v,y;e((()=>{s(),u=t(o(),1),c(),d=r(),f=[{value:`de`,label:`Deutsch`},{value:`et`,label:`Eesti`},{value:`en`,label:`English`},{value:`es`,label:`Español`},{value:`fr`,label:`Français`},{value:`it`,label:`Italiano`},{value:`nl`,label:`Nederlands`},{value:`pl`,label:`Polski`},{value:`pt`,label:`Português`}],p={component:n,title:`Overlays & Menus/SearchableModal`,tags:[`autodocs`],args:{open:!1,items:f,defaultValue:`en`,searchPlaceholder:`Search your language`},argTypes:{open:{control:{type:`boolean`}},loadingValue:{control:{type:`select`},options:[null,...f.map(e=>e.value)]}},parameters:{design:l(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=5368-6253`),docs:{description:{component:"A dialog whose only content is a searchable list of options. Picking an option marks it and keeps the dialog open; the consumer decides when to close. Pass `loadingValue` while a choice is being applied to show a spinner in that row."}}}},m=e=>{let[t,r]=(0,u.useState)(e.open),[i,o]=(0,u.useState)(e.defaultValue??null);return(0,u.useEffect)(()=>{r(e.open)},[e.open]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a,{label:`Language: ${f.find(e=>e.value===i)?.label??`-`}`,onClick:()=>r(!0)}),(0,d.jsx)(n,{...e,open:t,onClose:()=>r(!1),value:i,onChange:e=>o(e)})]})},h={render:e=>(0,d.jsx)(m,{...e})},g={parameters:{a11y:{test:`todo`}},args:{open:!0,loadingValue:`de`},render:e=>(0,d.jsx)(m,{...e})},_={parameters:{a11y:{test:`todo`}},args:{open:!0,searchValue:`Deutschland`},render:e=>(0,d.jsx)(m,{...e})},v={name:`SearchableModalListItem`,parameters:{docs:{description:{story:`The row used inside the list.`}}},render:()=>(0,d.jsxs)(`ul`,{className:`max-w-modal-md m-0 flex list-none flex-col p-0`,children:[(0,d.jsx)(i,{label:`Enabled`}),(0,d.jsx)(i,{label:`Selected`,selected:!0}),(0,d.jsx)(i,{label:`Loading`,selected:!0,loading:!0}),(0,d.jsx)(i,{label:`Highlighted match`,highlight:`match`}),(0,d.jsx)(i,{label:`Disabled`,disabled:!0})]})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <Playground {...args} />
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y=[`Default`,`Loading`,`NoResults`,`ListItem`]}))();export{h as Default,v as ListItem,g as Loading,_ as NoResults,y as __namedExportsOrder,p as default};