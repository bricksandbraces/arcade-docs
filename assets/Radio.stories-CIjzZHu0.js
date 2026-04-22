import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as h,r as f}from"./index-CY-HDqYb.js";import{bj as s}from"./ContextMenu-F_nDtnvK.js";import"./index-A6zbrgSY.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";const N={title:"Components/RadioButton/Radio",component:s,argTypes:{checked:{control:"boolean"},disabled:{control:"boolean"},readonly:{control:"boolean"}}},y=a=>{const[p,d]=h.useState(a.checked||!1);return f.useEffect(()=>{d(a.checked||!1)},[a.checked]),e.jsx(s,{...a,checked:p,onChange:x=>{!a.disabled&&!a.readonly&&d(x.target.checked)}})},n={render:a=>e.jsx(y,{...a}),args:{checked:!1,disabled:!1,readonly:!1}},c={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{className:"gap-lg flex flex-col",children:[e.jsxs("div",{className:"gap-md flex items-center",children:[e.jsx("span",{className:"typography-body-small text-text-accent w-20",children:"Enabled:"}),e.jsxs("div",{className:"gap-sm flex items-center",children:[e.jsx(s,{checked:!1}),e.jsx(s,{checked:!0})]})]}),e.jsxs("div",{className:"gap-md flex items-center",children:[e.jsx("span",{className:"typography-body-small text-text-accent w-20",children:"Readonly:"}),e.jsxs("div",{className:"gap-sm flex items-center",children:[e.jsx(s,{checked:!1,readonly:!0}),e.jsx(s,{checked:!0,readonly:!0})]})]}),e.jsxs("div",{className:"gap-md flex items-center",children:[e.jsx("span",{className:"typography-body-small text-text-accent w-20",children:"Disabled:"}),e.jsxs("div",{className:"gap-sm flex items-center",children:[e.jsx(s,{checked:!1,disabled:!0}),e.jsx(s,{checked:!0,disabled:!0})]})]})]})};var t,l,r;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => <PlaygroundRadio {...args} />,
  args: {
    checked: false,
    disabled: false,
    readonly: false
  }
}`,...(r=(l=n.parameters)==null?void 0:l.docs)==null?void 0:r.source}}};var o,i,m;c.parameters={...c.parameters,docs:{...(o=c.parameters)==null?void 0:o.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="gap-lg flex flex-col">
      <div className="gap-md flex items-center">
        <span className="typography-body-small text-text-accent w-20">
          Enabled:
        </span>
        <div className="gap-sm flex items-center">
          <Radio checked={false} />
          <Radio checked={true} />
        </div>
      </div>
      <div className="gap-md flex items-center">
        <span className="typography-body-small text-text-accent w-20">
          Readonly:
        </span>
        <div className="gap-sm flex items-center">
          <Radio checked={false} readonly />
          <Radio checked={true} readonly />
        </div>
      </div>
      <div className="gap-md flex items-center">
        <span className="typography-body-small text-text-accent w-20">
          Disabled:
        </span>
        <div className="gap-sm flex items-center">
          <Radio checked={false} disabled />
          <Radio checked={true} disabled />
        </div>
      </div>
    </div>
}`,...(m=(i=c.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const R=["Playground","Overview"];export{c as Overview,n as Playground,R as __namedExportsOrder,N as default};
