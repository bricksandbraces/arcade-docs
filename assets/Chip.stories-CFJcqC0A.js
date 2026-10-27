import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Hs as n,Mi as r,ji as i,rc as a,t as o}from"./iframe-C-RHIpW1.js";import{n as s,t as c}from"./figmaDesign-DDiUnvXT.js";var l,u,d,f,p,m;e((()=>{o(),l=t(a(),1),s(),u=n(),d={title:`Buttons & Actions/Chip`,component:i,tags:[`autodocs`],parameters:{design:c(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=5437-7335`),docs:{description:{component:"Toggleable chip for picking one or more options. `inverse` draws unselected chips on the base background for use on a secondary surface."}}},argTypes:{variant:{control:`inline-radio`,options:r}},args:{children:`Filter`,selected:!1,inverse:!1,variant:`rectangular`,disabled:!1}},f={render:e=>{let[t,n]=(0,l.useState)(e.selected??!1);return(0,u.jsx)(`div`,{className:e.inverse?`bg-background-secondary p-md rounded-md`:`p-md`,children:(0,u.jsx)(i,{...e,selected:t,onClick:()=>n(e=>!e)})})}},p={render:()=>(0,u.jsx)(`div`,{className:`gap-lg flex flex-col`,children:r.map(e=>(0,u.jsxs)(`div`,{className:`gap-lg flex`,children:[(0,u.jsxs)(`div`,{className:`gap-sm p-md flex items-start`,children:[(0,u.jsx)(i,{variant:e,children:`Filter`}),(0,u.jsx)(i,{variant:e,selected:!0,children:`Filter`}),(0,u.jsx)(i,{variant:e,disabled:!0,children:`Filter`}),(0,u.jsx)(i,{variant:e,selected:!0,disabled:!0,children:`Filter`})]}),(0,u.jsxs)(`div`,{className:`gap-sm bg-background-secondary p-md flex items-start rounded-md`,children:[(0,u.jsx)(i,{variant:e,inverse:!0,children:`Filter`}),(0,u.jsx)(i,{variant:e,inverse:!0,selected:!0,children:`Filter`}),(0,u.jsx)(i,{variant:e,inverse:!0,disabled:!0,children:`Filter`})]})]},e))})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [selected, setSelected] = useState(args.selected ?? false);
    return <div className={args.inverse ? "bg-background-secondary p-md rounded-md" : "p-md"}>
        <Chip {...args} selected={selected} onClick={() => setSelected(prev => !prev)} />
      </div>;
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className="gap-lg flex flex-col">
      {ChipVariants.map(variant => <div key={variant} className="gap-lg flex">
          <div className="gap-sm p-md flex items-start">
            <Chip variant={variant}>Filter</Chip>
            <Chip variant={variant} selected>
              Filter
            </Chip>
            <Chip variant={variant} disabled>
              Filter
            </Chip>
            <Chip variant={variant} selected disabled>
              Filter
            </Chip>
          </div>
          <div className="gap-sm bg-background-secondary p-md flex items-start rounded-md">
            <Chip variant={variant} inverse>
              Filter
            </Chip>
            <Chip variant={variant} inverse selected>
              Filter
            </Chip>
            <Chip variant={variant} inverse disabled>
              Filter
            </Chip>
          </div>
        </div>)}
    </div>
}`,...p.parameters?.docs?.source}}},m=[`Playground`,`Variants`]}))();export{f as Playground,p as Variants,m as __namedExportsOrder,d as default};