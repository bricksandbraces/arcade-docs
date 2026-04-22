import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{bt as p,bu as d}from"./ContextMenu-BIXelnGu.js";import"./index-CY-HDqYb.js";import"./index-A6zbrgSY.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";const y={title:"Components/Avatar/StateIndicator",component:p},e={args:{state:"Online"},argTypes:{state:{description:"The state of the indicator",control:{type:"select"},options:["Online","Offline","Busy","Pending","Notification"],defaultValue:"Online"}}},t={parameters:{controls:{disable:!0}},render:()=>a.jsx("div",{className:"gap-xlg flex flex-row",children:d.map(n=>a.jsx(p,{state:n},n))})};var r,s,o;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(o=(s=e.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};var i,c,l;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="gap-xlg flex flex-row">
      {State.map(state => <StateIndicator key={state} state={state} />)}
    </div>
}`,...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const v=["Playground","Overview"];export{t as Overview,e as Playground,v as __namedExportsOrder,y as default};
