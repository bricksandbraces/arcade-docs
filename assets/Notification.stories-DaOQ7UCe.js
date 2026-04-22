import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{aZ as s,a_ as u,a$ as o}from"./ContextMenu-FljLXSaK.js";import"./index-CY-HDqYb.js";import{a as f}from"./index-B-lxVbXh.js";import"./index-A6zbrgSY.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";import"./v4-CtRu48qb.js";const $={title:"Components/Notification/Notification",component:o,argTypes:{kind:{control:{type:"select"},options:[...u]},state:{control:{type:"select"},options:[...s]}}},a={render:t=>e.jsx(o,{...t}),args:{title:"Title",subtitle:"Subtitle",timestamp:new Date().toISOString(),kind:"banner",state:"info",onClose:f("onClose")}},i={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{className:"gap-lg flex flex-row",children:[e.jsx("div",{className:"gap-lg flex flex-col",children:["banner"].map(t=>s.map(n=>e.jsx(o,{title:"Title",subtitle:"Subtitle",kind:t,state:n,onClose:f("onClose"),className:"w-[460px]"},`${t}-${n}`)))}),e.jsx("div",{className:"gap-lg flex flex-col",children:["inline"].map(t=>s.map(n=>e.jsx(o,{title:"Title",kind:t,state:n},`${t}-${n}`)))})]})};var r,l,c;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => <Notification {...args} />,
  args: {
    title: "Title",
    subtitle: "Subtitle",
    timestamp: new Date().toISOString(),
    kind: "banner",
    state: "info",
    onClose: action("onClose")
  }
}`,...(c=(l=a.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var p,m,d;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="gap-lg flex flex-row">
      <div className="gap-lg flex flex-col">
        {(["banner"] as const).map(kind => {
        return NotificationStates.map(state => {
          return <Notification key={\`\${kind}-\${state}\`} title={"Title"} subtitle="Subtitle" kind={kind} state={state} onClose={action("onClose")} className="w-[460px]" />;
        });
      })}
      </div>
      <div className="gap-lg flex flex-col">
        {(["inline"] as const).map(kind => {
        return NotificationStates.map(state => {
          return <Notification key={\`\${kind}-\${state}\`} title={"Title"} kind={kind} state={state} />;
        });
      })}
      </div>
    </div>
}`,...(d=(m=i.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const j=["Playground","Overview"];export{i as Overview,a as Playground,j as __namedExportsOrder,$ as default};
