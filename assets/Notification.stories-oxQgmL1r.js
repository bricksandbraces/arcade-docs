import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{b5 as s,b6 as u,b7 as a}from"./ContextMenuList-CItOUnHf.js";import"./index-CY-HDqYb.js";import{a as f}from"./index-B-lxVbXh.js";import"./index-A6zbrgSY.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";import"./index-ZRCHFLd-.js";import"./sizes-BpUsT7VU.js";import"./colors-CoOIoG7W.js";import"./v4-CtRu48qb.js";const y={title:"Components/Notification/Notification",component:a,argTypes:{kind:{control:{type:"select"},options:[...u]},state:{control:{type:"select"},options:[...s]}}},i={render:t=>e.jsx(a,{...t}),args:{title:"Title",subtitle:"Subtitle",timestamp:new Date().toISOString(),kind:"banner",state:"info",onClose:f("onClose")}},o={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{className:"gap-lg flex flex-row",children:[e.jsx("div",{className:"gap-lg flex flex-col",children:["banner"].map(t=>s.map(n=>e.jsx(a,{title:"Title",subtitle:"Subtitle",kind:t,state:n,onClose:f("onClose"),className:"w-[460px]"},`${t}-${n}`)))}),e.jsx("div",{className:"gap-lg flex flex-col",children:["inline"].map(t=>s.map(n=>e.jsx(a,{title:"Title",kind:t,state:n},`${t}-${n}`)))})]})};var r,l,c;i.parameters={...i.parameters,docs:{...(r=i.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => <Notification {...args} />,
  args: {
    title: "Title",
    subtitle: "Subtitle",
    timestamp: new Date().toISOString(),
    kind: "banner",
    state: "info",
    onClose: action("onClose")
  }
}`,...(c=(l=i.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var p,m,d;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(d=(m=o.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const T=["Playground","Overview"];export{o as Overview,i as Playground,T as __namedExportsOrder,y as default};
