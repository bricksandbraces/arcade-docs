import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Io as n,Pn as r,Qt as i,Zo as a,Zt as o,oi as s,t as c}from"./iframe-D6-Ak9zf.js";import{n as l,t as u}from"./figmaDesign-CO6i5n9C.js";import{n as d,t as f}from"./surfaceStoryShell-CyM8z6yz.js";var p,m,h,g,_,v,y,b;e((()=>{d(),c(),p=t(a(),1),l(),m=n(),h={title:`Inputs & Controls/Search`,component:o,tags:[`autodocs`],argTypes:{surface:{control:`inline-radio`,options:s},size:{control:`inline-radio`,options:i},disabled:{control:`boolean`},error:{control:`boolean`},placeholder:{control:`text`}},args:{surface:`default`,id:`search-playground`,placeholder:`Search...`,size:`medium`,disabled:!1,error:!1},parameters:{design:u(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=2366-6529`),docs:{description:{component:`Text input with a leading search icon and clear button. Use for filtering lists or querying across a product.`}}}},g={render:function(e){let[t,n]=p.useState(``);return(0,m.jsx)(o,{...e,value:t,onChange:e=>n(e),onClear:()=>n(``)})}},_={render:()=>(0,m.jsxs)(`div`,{className:`gap-lg flex flex-col`,children:[(0,m.jsxs)(`div`,{className:`gap-sm flex flex-col`,children:[(0,m.jsx)(`span`,{className:`typography-label text-text-label`,children:`Enabled`}),(0,m.jsxs)(`div`,{className:`gap-sm flex flex-col`,children:[(0,m.jsx)(o,{id:`search-overview-enabled-small`,size:`small`,defaultValue:`Arcade`}),(0,m.jsx)(o,{id:`search-overview-enabled-medium`,size:`medium`,defaultValue:`Arcade`}),(0,m.jsx)(o,{id:`search-overview-enabled-large`,size:`large`,defaultValue:`Arcade`})]})]}),(0,m.jsxs)(`div`,{className:`gap-sm flex flex-col`,children:[(0,m.jsx)(`span`,{className:`typography-label text-text-label`,children:`Disabled`}),(0,m.jsxs)(`div`,{className:`gap-sm flex flex-col`,children:[(0,m.jsx)(o,{id:`search-overview-disabled-small`,size:`small`,defaultValue:`Arcade`,disabled:!0}),(0,m.jsx)(o,{id:`search-overview-disabled-medium`,size:`medium`,defaultValue:`Arcade`,disabled:!0}),(0,m.jsx)(o,{id:`search-overview-disabled-large`,size:`large`,defaultValue:`Arcade`,disabled:!0})]})]})]})},v={render:()=>(0,m.jsx)(r,{})},y={render:e=>(0,m.jsx)(f,{children:t=>(0,m.jsx)(o,{...e,surface:t})})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [value, setValue] = React.useState("");
    return <Search {...args} value={value} onChange={next => setValue(next)} onClear={() => setValue("")} />;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <SearchSkeleton />
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => <SurfaceStoryShell>
      {surface => <Search {...args} surface={surface} />}
    </SurfaceStoryShell>
}`,...y.parameters?.docs?.source}}},b=[`Playground`,`Overview`,`Skeleton`,`Surfaces`]}))();export{_ as Overview,g as Playground,v as Skeleton,y as Surfaces,b as __namedExportsOrder,h as default};