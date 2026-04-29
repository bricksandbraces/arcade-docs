import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Di as n,Hi as r,R as i,t as a,z as o}from"./iframe-DH8ttjhP.js";var s,c,l,u,d,f;e((()=>{a(),s=t(r(),1),c=n(),l={title:`Components/Inputs/Search`,component:i,tags:[`autodocs`],argTypes:{size:{control:`inline-radio`,options:o},disabled:{control:`boolean`},error:{control:`boolean`},placeholder:{control:`text`}},args:{id:`search-playground`,placeholder:`Search...`,size:`medium`,disabled:!1,error:!1},parameters:{docs:{description:{component:`Text input with a leading search icon and clear button. Use for filtering lists or querying across a product.`}}}},u={render:function(e){let[t,n]=s.useState(``);return(0,c.jsx)(i,{...e,value:t,onChange:e=>n(e),onClear:()=>n(``)})}},d={render:()=>(0,c.jsxs)(`div`,{className:`gap-lg flex flex-col`,children:[(0,c.jsxs)(`div`,{className:`gap-sm flex flex-col`,children:[(0,c.jsx)(`span`,{className:`typography-label text-text-label`,children:`Enabled`}),(0,c.jsxs)(`div`,{className:`gap-sm flex flex-col`,children:[(0,c.jsx)(i,{id:`search-overview-enabled-small`,size:`small`,defaultValue:`Arcade`}),(0,c.jsx)(i,{id:`search-overview-enabled-medium`,size:`medium`,defaultValue:`Arcade`}),(0,c.jsx)(i,{id:`search-overview-enabled-large`,size:`large`,defaultValue:`Arcade`})]})]}),(0,c.jsxs)(`div`,{className:`gap-sm flex flex-col`,children:[(0,c.jsx)(`span`,{className:`typography-label text-text-label`,children:`Disabled`}),(0,c.jsxs)(`div`,{className:`gap-sm flex flex-col`,children:[(0,c.jsx)(i,{id:`search-overview-disabled-small`,size:`small`,defaultValue:`Arcade`,disabled:!0}),(0,c.jsx)(i,{id:`search-overview-disabled-medium`,size:`medium`,defaultValue:`Arcade`,disabled:!0}),(0,c.jsx)(i,{id:`search-overview-disabled-large`,size:`large`,defaultValue:`Arcade`,disabled:!0})]})]})]})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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