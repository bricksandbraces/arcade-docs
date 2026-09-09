import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Gt as n,Mo as r,Oi as i,Ui as a,Vi as o,Xt as s,ja as c,qa as l,qi as u,qo as d,t as f}from"./iframe-DTfjFPcB.js";var p,m,h,g,_,v,y,b,x,S,C,w,T;e((()=>{f(),i(),p=t(d(),1),m=r(),h=[{value:`general`,label:`General`,icon:a},{value:`organization`,label:`Organization`,icon:c},{value:`access`,label:`Access`,icon:o},{value:`branding`,label:`Branding`,icon:u}],g={general:`Account`,organization:`Organization`,access:`Access`,branding:`Branding`},_={component:s,title:`Overlays & Menus/SplitViewModal`,tags:[`autodocs`],args:{open:!1,title:`Settings`,items:h,defaultValue:`general`,searchable:!0,sectionSubtitle:`Subtitle or Description`},argTypes:{open:{control:{type:`boolean`}},loading:{control:{type:`boolean`}},busy:{control:{type:`boolean`}},searchable:{control:{type:`boolean`}},value:{control:{type:`select`},options:h.map(e=>e.value)}},parameters:{docs:{description:{component:"A dialog whose content is split into sections: a searchable sidebar lists them from `md` up, a tab strip below. The consumer renders the content of the current section as children and moves between sections through `value` / `onValueChange`. Set `loading` while a change saves: the close button gives way to a spinner until it is cleared. Set `busy` while the content is still being fetched: the whole dialog sits behind a centred loader."}}}},v=e=>{let[t,r]=(0,p.useState)(e.open),[i,a]=(0,p.useState)(e.value??e.defaultValue??``);return(0,p.useEffect)(()=>{r(e.open)},[e.open]),(0,p.useEffect)(()=>{e.value!==void 0&&a(e.value)},[e.value]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(l,{label:`Open settings`,onClick:()=>r(!0)}),(0,m.jsx)(s,{...e,open:t,onClose:()=>r(!1),value:i,onValueChange:e=>a(e),sectionTitle:g[i]??i,children:(0,m.jsxs)(`div`,{className:`gap-lg flex flex-col`,children:[(0,m.jsx)(n,{id:`${i}-name`,label:`Name`,placeholder:`Name`}),(0,m.jsx)(n,{id:`${i}-email`,label:`Email`,placeholder:`Email`})]})})]})},y={render:e=>(0,m.jsx)(v,{...e})},b={parameters:{a11y:{test:`todo`}},args:{open:!0},render:e=>(0,m.jsx)(v,{...e})},x={parameters:{a11y:{test:`todo`}},args:{open:!0,primaryButton:{label:`Save`,onClick:()=>{}},secondaryButton:{label:`Cancel`,onClick:()=>{}}},render:e=>(0,m.jsx)(v,{...e})},S={parameters:{a11y:{test:`todo`}},args:{open:!0,loading:!0},render:e=>(0,m.jsx)(v,{...e})},C={parameters:{a11y:{test:`todo`}},args:{open:!0,busy:!0},render:e=>(0,m.jsx)(v,{...e})},w={parameters:{a11y:{test:`todo`},viewport:{defaultViewport:`mobile1`}},args:{open:!0},render:e=>(0,m.jsx)(v,{...e})},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => <Playground {...args} />
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  // Starts open, so axe sees floating-ui's focus guards and the aria-hidden
  // page behind the dialog (aria-hidden-focus) - a known finding of the modal
  // focus manager, not of this component. Downgraded like SidePanel does.
  parameters: {
    a11y: {
      test: "todo"
    }
  },
  args: {
    open: true
  },
  render: args => <Playground {...args} />
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  parameters: {
    a11y: {
      test: "todo"
    }
  },
  args: {
    open: true,
    primaryButton: {
      label: "Save",
      onClick: () => {}
    },
    secondaryButton: {
      label: "Cancel",
      onClick: () => {}
    }
  },
  render: args => <Playground {...args} />
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: {
    a11y: {
      test: "todo"
    }
  },
  args: {
    open: true,
    loading: true
  },
  render: args => <Playground {...args} />
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  parameters: {
    a11y: {
      test: "todo"
    }
  },
  args: {
    open: true,
    busy: true
  },
  render: args => <Playground {...args} />
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: {
    a11y: {
      test: "todo"
    },
    viewport: {
      defaultViewport: "mobile1"
    }
  },
  args: {
    open: true
  },
  render: args => <Playground {...args} />
}`,...w.parameters?.docs?.source}}},T=[`Default`,`Open`,`WithFooter`,`Loading`,`Busy`,`Mobile`]}))();export{C as Busy,y as Default,S as Loading,w as Mobile,b as Open,x as WithFooter,T as __namedExportsOrder,_ as default};