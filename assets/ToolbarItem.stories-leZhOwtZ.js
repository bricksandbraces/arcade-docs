import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{ai as o,ao as s}from"./ContextMenu-DwPyJibk.js";import"./index-CY-HDqYb.js";import"./index-A6zbrgSY.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";const I={title:"Fabian Supervision/Toolbar/ToolbarItem",component:o,parameters:{layout:"centered"},argTypes:{selected:{control:"boolean"},disabled:{control:"boolean"},"aria-label":{control:"text",description:"Accessible label for icon-only items"},children:{table:{disable:!0}}},args:{selected:!1,disabled:!1,"aria-label":"Next",children:e.jsx(s,{size:16})}},r={},a={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{className:"gap-sm flex flex-col items-center",children:[e.jsx(o,{"aria-label":"Enabled",children:e.jsx(s,{size:16})}),e.jsx(o,{selected:!0,"aria-label":"Selected",children:e.jsx(s,{size:16})}),e.jsx(o,{disabled:!0,"aria-label":"Disabled",children:e.jsx(s,{size:16})})]})};var l,t,i;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(i=(t=r.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};var n,c,d;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="gap-sm flex flex-col items-center">
      <ToolbarItem aria-label="Enabled">
        <IconArrowRight size={16} />
      </ToolbarItem>
      <ToolbarItem selected aria-label="Selected">
        <IconArrowRight size={16} />
      </ToolbarItem>
      <ToolbarItem disabled aria-label="Disabled">
        <IconArrowRight size={16} />
      </ToolbarItem>
    </div>
}`,...(d=(c=a.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const f=["Playground","Overview"];export{a as Overview,r as Playground,f as __namedExportsOrder,I as default};
