import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Hs as n,Ni as r,rc as i,t as a}from"./iframe-C-RHIpW1.js";import{n as o,t as s}from"./figmaDesign-DDiUnvXT.js";var c,l,u,d,f,p;e((()=>{a(),c=t(i(),1),o(),l=n(),u={title:`Display & Data/Badge/FilterBadge`,component:r,tags:[`autodocs`],parameters:{design:s(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=5427-1693`),docs:{description:{component:"Toggleable chip for a single filter option. `inverse` draws unselected chips on the base background for use on a secondary surface."}}},args:{children:`Filter`,selected:!1,inverse:!1,disabled:!1}},d={render:e=>{let[t,n]=(0,c.useState)(e.selected??!1);return(0,l.jsx)(`div`,{className:e.inverse?`bg-background-secondary p-md rounded-md`:`p-md`,children:(0,l.jsx)(r,{...e,selected:t,onClick:()=>n(e=>!e)})})}},f={render:()=>(0,l.jsxs)(`div`,{className:`gap-lg flex`,children:[(0,l.jsxs)(`div`,{className:`gap-sm p-md flex flex-col items-start`,children:[(0,l.jsx)(r,{selected:!1,children:`Filter`}),(0,l.jsx)(r,{selected:!0,children:`Filter`}),(0,l.jsx)(r,{selected:!1,disabled:!0,children:`Filter`}),(0,l.jsx)(r,{selected:!0,disabled:!0,children:`Filter`})]}),(0,l.jsxs)(`div`,{className:`gap-sm bg-background-secondary p-md flex flex-col items-start rounded-md`,children:[(0,l.jsx)(r,{selected:!1,inverse:!0,children:`Filter`}),(0,l.jsx)(r,{selected:!0,inverse:!0,children:`Filter`}),(0,l.jsx)(r,{selected:!1,inverse:!0,disabled:!0,children:`Filter`})]})]})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [selected, setSelected] = useState(args.selected ?? false);
    return <div className={args.inverse ? "bg-background-secondary p-md rounded-md" : "p-md"}>
        <FilterBadge {...args} selected={selected} onClick={() => setSelected(prev => !prev)} />
      </div>;
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div className="gap-lg flex">
      <div className="gap-sm p-md flex flex-col items-start">
        <FilterBadge selected={false}>Filter</FilterBadge>
        <FilterBadge selected>Filter</FilterBadge>
        <FilterBadge selected={false} disabled>
          Filter
        </FilterBadge>
        <FilterBadge selected disabled>
          Filter
        </FilterBadge>
      </div>
      <div className="gap-sm bg-background-secondary p-md flex flex-col items-start rounded-md">
        <FilterBadge selected={false} inverse>
          Filter
        </FilterBadge>
        <FilterBadge selected inverse>
          Filter
        </FilterBadge>
        <FilterBadge selected={false} inverse disabled>
          Filter
        </FilterBadge>
      </div>
    </div>
}`,...f.parameters?.docs?.source}}},p=[`Playground`,`Variants`]}))();export{d as Playground,f as Variants,p as __namedExportsOrder,u as default};