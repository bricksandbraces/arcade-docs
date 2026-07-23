import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Do as n,H as r,V as i,fo as a,t as o,wn as s}from"./iframe-Da97yqFL.js";var c,l,u,d,f,p,m;e((()=>{o(),c=t(n(),1),l=a(),u={title:`Inputs & Controls/Search`,component:i,tags:[`autodocs`],argTypes:{size:{control:`inline-radio`,options:r},disabled:{control:`boolean`},error:{control:`boolean`},placeholder:{control:`text`}},args:{id:`search-playground`,placeholder:`Search...`,size:`medium`,disabled:!1,error:!1},parameters:{docs:{description:{component:`Text input with a leading search icon and clear button. Use for filtering lists or querying across a product.`}}}},d={render:function(e){let[t,n]=c.useState(``);return(0,l.jsx)(i,{...e,value:t,onChange:e=>n(e),onClear:()=>n(``)})}},f={render:()=>(0,l.jsxs)(`div`,{className:`gap-lg flex flex-col`,children:[(0,l.jsxs)(`div`,{className:`gap-sm flex flex-col`,children:[(0,l.jsx)(`span`,{className:`typography-label text-text-label`,children:`Enabled`}),(0,l.jsxs)(`div`,{className:`gap-sm flex flex-col`,children:[(0,l.jsx)(i,{id:`search-overview-enabled-small`,size:`small`,defaultValue:`Arcade`}),(0,l.jsx)(i,{id:`search-overview-enabled-medium`,size:`medium`,defaultValue:`Arcade`}),(0,l.jsx)(i,{id:`search-overview-enabled-large`,size:`large`,defaultValue:`Arcade`})]})]}),(0,l.jsxs)(`div`,{className:`gap-sm flex flex-col`,children:[(0,l.jsx)(`span`,{className:`typography-label text-text-label`,children:`Disabled`}),(0,l.jsxs)(`div`,{className:`gap-sm flex flex-col`,children:[(0,l.jsx)(i,{id:`search-overview-disabled-small`,size:`small`,defaultValue:`Arcade`,disabled:!0}),(0,l.jsx)(i,{id:`search-overview-disabled-medium`,size:`medium`,defaultValue:`Arcade`,disabled:!0}),(0,l.jsx)(i,{id:`search-overview-disabled-large`,size:`large`,defaultValue:`Arcade`,disabled:!0})]})]})]})},p={render:()=>(0,l.jsx)(s,{})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [value, setValue] = React.useState("");
    return <Search {...args} value={value} onChange={next => setValue(next)} onClear={() => setValue("")} />;
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <SearchSkeleton />
}`,...p.parameters?.docs?.source}}},m=[`Playground`,`Overview`,`Skeleton`]}))();export{f as Overview,d as Playground,p as Skeleton,m as __namedExportsOrder,u as default};