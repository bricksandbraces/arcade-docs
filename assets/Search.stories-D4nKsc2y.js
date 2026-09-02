import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Fo as n,H as r,On as i,Qr as a,U as o,bo as s,t as c}from"./iframe-Bb-sKdHW.js";import{n as l,t as u}from"./surfaceStoryShell-DPQcsNd0.js";var d,f,p,m,h,g,_,v;e((()=>{l(),c(),d=t(n(),1),f=s(),p={title:`Inputs & Controls/Search`,component:r,tags:[`autodocs`],argTypes:{surface:{control:`inline-radio`,options:a},size:{control:`inline-radio`,options:o},disabled:{control:`boolean`},error:{control:`boolean`},placeholder:{control:`text`}},args:{surface:`default`,id:`search-playground`,placeholder:`Search...`,size:`medium`,disabled:!1,error:!1},parameters:{docs:{description:{component:`Text input with a leading search icon and clear button. Use for filtering lists or querying across a product.`}}}},m={render:function(e){let[t,n]=d.useState(``);return(0,f.jsx)(r,{...e,value:t,onChange:e=>n(e),onClear:()=>n(``)})}},h={render:()=>(0,f.jsxs)(`div`,{className:`gap-lg flex flex-col`,children:[(0,f.jsxs)(`div`,{className:`gap-sm flex flex-col`,children:[(0,f.jsx)(`span`,{className:`typography-label text-text-label`,children:`Enabled`}),(0,f.jsxs)(`div`,{className:`gap-sm flex flex-col`,children:[(0,f.jsx)(r,{id:`search-overview-enabled-small`,size:`small`,defaultValue:`Arcade`}),(0,f.jsx)(r,{id:`search-overview-enabled-medium`,size:`medium`,defaultValue:`Arcade`}),(0,f.jsx)(r,{id:`search-overview-enabled-large`,size:`large`,defaultValue:`Arcade`})]})]}),(0,f.jsxs)(`div`,{className:`gap-sm flex flex-col`,children:[(0,f.jsx)(`span`,{className:`typography-label text-text-label`,children:`Disabled`}),(0,f.jsxs)(`div`,{className:`gap-sm flex flex-col`,children:[(0,f.jsx)(r,{id:`search-overview-disabled-small`,size:`small`,defaultValue:`Arcade`,disabled:!0}),(0,f.jsx)(r,{id:`search-overview-disabled-medium`,size:`medium`,defaultValue:`Arcade`,disabled:!0}),(0,f.jsx)(r,{id:`search-overview-disabled-large`,size:`large`,defaultValue:`Arcade`,disabled:!0})]})]})]})},g={render:()=>(0,f.jsx)(i,{})},_={render:e=>(0,f.jsx)(u,{children:t=>(0,f.jsx)(r,{...e,surface:t})})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [value, setValue] = React.useState("");
    return <Search {...args} value={value} onChange={next => setValue(next)} onClear={() => setValue("")} />;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <SearchSkeleton />
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => <SurfaceStoryShell>
      {surface => <Search {...args} surface={surface} />}
    </SurfaceStoryShell>
}`,..._.parameters?.docs?.source}}},v=[`Playground`,`Overview`,`Skeleton`,`Surfaces`]}))();export{h as Overview,m as Playground,g as Skeleton,_ as Surfaces,v as __namedExportsOrder,p as default};