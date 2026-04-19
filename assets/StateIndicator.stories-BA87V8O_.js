import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{by as l,bz as d}from"./ContextMenuList-Bxd96GLq.js";import"./index-CY-HDqYb.js";import"./index-A6zbrgSY.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";import"./index-ZRCHFLd-.js";import"./sizes-BpUsT7VU.js";import"./colors-CoOIoG7W.js";const h={title:"Components/Avatar/StateIndicator",component:l},e={args:{state:"Online"},argTypes:{state:{description:"The state of the indicator",control:{type:"select"},options:["Online","Offline","Busy","Pending","Notification"],defaultValue:"Online"}}},t={parameters:{controls:{disable:!0}},render:()=>r.jsx("div",{className:"gap-xlg flex flex-row",children:d.map(n=>r.jsx(l,{state:n},n))})};var a,o,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var i,p,c;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="gap-xlg flex flex-row">
      {State.map(state => <StateIndicator key={state} state={state} />)}
    </div>
}`,...(c=(p=t.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const b=["Playground","Overview"];export{t as Overview,e as Playground,b as __namedExportsOrder,h as default};
