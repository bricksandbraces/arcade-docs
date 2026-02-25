import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as h,r as f}from"./index-CY-HDqYb.js";import{aU as s}from"./ContextMenuList-C0nT4XLm.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";import"./index-ZRCHFLd-.js";import"./borders-N_bRvfGw.js";import"./colors-mvAPBTAn.js";const w={title:"F/RadioButton/Radio",component:s,argTypes:{checked:{control:"boolean"},disabled:{control:"boolean"}}},g=a=>{const[p,r]=h.useState(a.checked||!1);return f.useEffect(()=>{r(a.checked||!1)},[a.checked]),e.jsx(s,{...a,checked:p,onChange:x=>!a.disabled&&r(x.target.checked)})},c={render:a=>e.jsx(g,{...a}),args:{checked:!1,disabled:!1}},t={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{className:"gap-lg flex flex-col",children:[e.jsxs("div",{className:"gap-md flex items-center",children:[e.jsx("span",{className:"typography-body-small text-text-accent w-20",children:"Enabled:"}),e.jsxs("div",{className:"gap-sm flex items-center",children:[e.jsx(s,{checked:!1}),e.jsx(s,{checked:!0})]})]}),e.jsxs("div",{className:"gap-md flex items-center",children:[e.jsx("span",{className:"typography-body-small text-text-accent w-20",children:"Disabled:"}),e.jsxs("div",{className:"gap-sm flex items-center",children:[e.jsx(s,{checked:!1,disabled:!0}),e.jsx(s,{checked:!0,disabled:!0})]})]})]})};var d,n,l;c.parameters={...c.parameters,docs:{...(d=c.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <PlaygroundRadio {...args} />,
  args: {
    checked: false,
    disabled: false
  }
}`,...(l=(n=c.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var o,i,m;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
          Disabled:
        </span>
        <div className="gap-sm flex items-center">
          <Radio checked={false} disabled />
          <Radio checked={true} disabled />
        </div>
      </div>
    </div>
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const E=["Playground","Overview"];export{t as Overview,c as Playground,E as __namedExportsOrder,w as default};
