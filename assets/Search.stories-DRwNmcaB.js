import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{K as n,ea as r,ha as i,q as a,t as o}from"./iframe-mOkBvvs0.js";var s,c,l,u,d,f;e((()=>{o(),s=t(i(),1),c=r(),l={title:`Components/Inputs/Search`,component:n,tags:[`autodocs`],argTypes:{size:{control:`inline-radio`,options:a},disabled:{control:`boolean`},error:{control:`boolean`},placeholder:{control:`text`}},args:{id:`search-playground`,placeholder:`Search...`,size:`medium`,disabled:!1,error:!1},parameters:{docs:{description:{component:`Text input with a leading search icon and clear button. Use for filtering lists or querying across a product.`}}}},u={render:function(e){let[t,r]=s.useState(``);return(0,c.jsx)(n,{...e,value:t,onChange:e=>r(e),onClear:()=>r(``)})}},d={render:()=>(0,c.jsxs)(`div`,{className:`gap-lg flex flex-col`,children:[(0,c.jsxs)(`div`,{className:`gap-sm flex flex-col`,children:[(0,c.jsx)(`span`,{className:`typography-label text-text-label`,children:`Enabled`}),(0,c.jsxs)(`div`,{className:`gap-sm flex flex-col`,children:[(0,c.jsx)(n,{id:`search-overview-enabled-small`,size:`small`,defaultValue:`Arcade`}),(0,c.jsx)(n,{id:`search-overview-enabled-medium`,size:`medium`,defaultValue:`Arcade`}),(0,c.jsx)(n,{id:`search-overview-enabled-large`,size:`large`,defaultValue:`Arcade`})]})]}),(0,c.jsxs)(`div`,{className:`gap-sm flex flex-col`,children:[(0,c.jsx)(`span`,{className:`typography-label text-text-label`,children:`Disabled`}),(0,c.jsxs)(`div`,{className:`gap-sm flex flex-col`,children:[(0,c.jsx)(n,{id:`search-overview-disabled-small`,size:`small`,defaultValue:`Arcade`,disabled:!0}),(0,c.jsx)(n,{id:`search-overview-disabled-medium`,size:`medium`,defaultValue:`Arcade`,disabled:!0}),(0,c.jsx)(n,{id:`search-overview-disabled-large`,size:`large`,defaultValue:`Arcade`,disabled:!0})]})]})]})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [value, setValue] = React.useState("");
    return <Search {...args} value={value} onChange={next => setValue(next)} onClear={() => setValue("")} />;
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="gap-lg flex flex-col">
      <div className="gap-sm flex flex-col">
        <span className="typography-label text-text-label">Enabled</span>
        <div className="gap-sm flex flex-col">
          <Search id="search-overview-enabled-small" size="small" defaultValue="Arcade" />
          <Search id="search-overview-enabled-medium" size="medium" defaultValue="Arcade" />
          <Search id="search-overview-enabled-large" size="large" defaultValue="Arcade" />
        </div>
      </div>
      <div className="gap-sm flex flex-col">
        <span className="typography-label text-text-label">Disabled</span>
        <div className="gap-sm flex flex-col">
          <Search id="search-overview-disabled-small" size="small" defaultValue="Arcade" disabled />
          <Search id="search-overview-disabled-medium" size="medium" defaultValue="Arcade" disabled />
          <Search id="search-overview-disabled-large" size="large" defaultValue="Arcade" disabled />
        </div>
      </div>
    </div>
}`,...d.parameters?.docs?.source}}},f=[`Playground`,`Overview`]}))();export{d as Overview,u as Playground,f as __namedExportsOrder,l as default};