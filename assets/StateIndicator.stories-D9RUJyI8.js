import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{a$ as p,b0 as d}from"./ContextMenuList-C0nT4XLm.js";import"./index-CY-HDqYb.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";import"./index-ZRCHFLd-.js";import"./borders-N_bRvfGw.js";import"./colors-mvAPBTAn.js";const S={title:"F/Avatar/StateIndicator",component:p},e={args:{state:"Online"},argTypes:{state:{description:"The state of the indicator",control:{type:"select"},options:["Online","Offline","Busy","Pending","Notification"],defaultValue:"Online"}}},t={parameters:{controls:{disable:!0}},render:()=>r.jsx("div",{className:"gap-xlg flex flex-row",children:d.map(a=>r.jsx(p,{state:a},a))})};var n,o,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    state: "Online"
  },
  argTypes: {
    state: {
      description: "The state of the indicator",
      control: {
        type: "select"
      },
      options: ["Online", "Offline", "Busy", "Pending", "Notification"],
      defaultValue: "Online"
    }
  }
}`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var i,c,l;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="gap-xlg flex flex-row">
      {State.map(state => <StateIndicator key={state} state={state} />)}
    </div>
}`,...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const h=["Playground","Overview"];export{t as Overview,e as Playground,h as __namedExportsOrder,S as default};
