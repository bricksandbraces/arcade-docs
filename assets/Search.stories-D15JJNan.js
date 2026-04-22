import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{bn as p,bo as a}from"./ContextMenu-CxMNWebl.js";import{R as v}from"./index-CY-HDqYb.js";import"./index-A6zbrgSY.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";const z={title:"WIP Components/Search/Search",component:a,argTypes:{size:{control:"inline-radio",options:p},disabled:{control:"boolean"},error:{control:"boolean"},placeholder:{control:"text"}},args:{id:"search-playground",placeholder:"Search...",size:"medium",disabled:!1,error:!1}},l={render:function(m){const[u,r]=v.useState("");return e.jsx(a,{...m,value:u,onChange:x=>r(x),onClear:()=>r("")})}},s={render:()=>e.jsxs("div",{className:"flex flex-col gap-lg",children:[e.jsxs("div",{className:"flex flex-col gap-sm",children:[e.jsx("span",{className:"typography-label text-text-label",children:"Enabled"}),e.jsxs("div",{className:"flex flex-col gap-sm",children:[e.jsx(a,{id:"search-overview-enabled-small",size:"small",defaultValue:"Arcade"}),e.jsx(a,{id:"search-overview-enabled-medium",size:"medium",defaultValue:"Arcade"}),e.jsx(a,{id:"search-overview-enabled-large",size:"large",defaultValue:"Arcade"})]})]}),e.jsxs("div",{className:"flex flex-col gap-sm",children:[e.jsx("span",{className:"typography-label text-text-label",children:"Disabled"}),e.jsxs("div",{className:"flex flex-col gap-sm",children:[e.jsx(a,{id:"search-overview-disabled-small",size:"small",defaultValue:"Arcade",disabled:!0}),e.jsx(a,{id:"search-overview-disabled-medium",size:"medium",defaultValue:"Arcade",disabled:!0}),e.jsx(a,{id:"search-overview-disabled-large",size:"large",defaultValue:"Arcade",disabled:!0})]})]})]})};var d,i,c;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: function Render(args) {
    const [value, setValue] = React.useState("");
    return <Search {...args} value={value} onChange={next => setValue(next)} onClear={() => setValue("")} />;
  }
}`,...(c=(i=l.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var n,o,t;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-lg">
      <div className="flex flex-col gap-sm">
        <span className="typography-label text-text-label">Enabled</span>
        <div className="flex flex-col gap-sm">
          <Search id="search-overview-enabled-small" size="small" defaultValue="Arcade" />
          <Search id="search-overview-enabled-medium" size="medium" defaultValue="Arcade" />
          <Search id="search-overview-enabled-large" size="large" defaultValue="Arcade" />
        </div>
      </div>
      <div className="flex flex-col gap-sm">
        <span className="typography-label text-text-label">Disabled</span>
        <div className="flex flex-col gap-sm">
          <Search id="search-overview-disabled-small" size="small" defaultValue="Arcade" disabled />
          <Search id="search-overview-disabled-medium" size="medium" defaultValue="Arcade" disabled />
          <Search id="search-overview-disabled-large" size="large" defaultValue="Arcade" disabled />
        </div>
      </div>
    </div>
}`,...(t=(o=s.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};const w=["Playground","Overview"];export{s as Overview,l as Playground,w as __namedExportsOrder,z as default};
