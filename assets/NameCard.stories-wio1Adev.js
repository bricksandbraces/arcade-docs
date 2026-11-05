import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Qi as n,Qs as r,pc as i,t as a}from"./iframe-U545K7vP.js";import{n as o,t as s}from"./figmaDesign-DDiUnvXT.js";var c,l,u,d,f,p,m,h,g,_,v,y;e((()=>{a(),c=t(i(),1),o(),l=t(i(),1),u=r(),{action:d}=__STORYBOOK_MODULE_ACTIONS__,f={title:`Display & Data/Cards/NameCard`,component:n,tags:[`autodocs`],parameters:{design:s(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=6143-3958`),docs:{description:{component:`Compact selectable card showing a person with avatar, name and description. Acts as a radio, so use it for picking exactly one person or entity from a group.`}}}},p=[{value:`sb`,title:`Sarah Brooks`,description:`Head Coach`,color:`red`},{value:`mk`,title:`Max Keller`,description:`Trainer`,color:`blue`},{value:`lw`,title:`Lena Wolf`,description:`Front Desk`,color:`lime`},{value:`jt`,title:`Jonas Thiel`,description:`Trainer`,color:`orange`}],m=`grid grid-cols-[repeat(auto-fill,162px)] gap-md`,h=e=>{let[t,r]=c.useState(`sb`);return(0,u.jsx)(`div`,{className:m,children:p.map(i=>(0,l.createElement)(n,{...e,key:i.value,name:`name-card`,value:i.value,title:i.title,description:i.description,avatarColor:i.color,checked:t===i.value,onChange:e=>{d(`onChange`)(e),e.target.checked&&r(i.value)}}))})},h.args={disabled:!1},g=()=>(0,u.jsxs)(`div`,{className:m,children:[(0,u.jsx)(n,{name:`name-card-states`,value:`enabled`,title:`Name`,description:`Description`,avatarColor:`red`,checked:!1,onChange:d(`onChange`)}),(0,u.jsx)(n,{name:`name-card-states`,value:`selected`,title:`Name`,description:`Description`,avatarColor:`red`,checked:!0,onChange:d(`onChange`)}),(0,u.jsx)(n,{name:`name-card-states`,value:`disabled`,title:`Name`,description:`Description`,avatarColor:`red`,checked:!1,disabled:!0,onChange:d(`onChange`)})]}),_=()=>(0,u.jsx)(`div`,{className:m,children:(0,u.jsx)(n,{name:`name-card-no-description`,value:`sb`,title:`Sarah Brooks`,avatarColor:`brand`,checked:!1,onChange:d(`onChange`)})}),v=()=>(0,u.jsx)(`div`,{className:`gap-md flex flex-wrap items-start`,children:[{value:`small`,className:`w-[140px] h-[110px]`},{value:`default`,className:`w-[162px]`},{value:`large`,className:`w-[240px] h-[200px]`}].map(e=>(0,u.jsx)(n,{name:`name-card-sizes`,value:e.value,title:`Sarah Brooks`,description:`Head Coach`,avatarColor:`red`,checked:e.value===`large`,onChange:d(`onChange`),className:e.className},e.value))}),h.__docgenInfo={description:``,methods:[],displayName:`Playground`},g.__docgenInfo={description:``,methods:[],displayName:`States`},_.__docgenInfo={description:``,methods:[],displayName:`WithoutDescription`},v.__docgenInfo={description:``,methods:[],displayName:`CustomSize`},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`(args: React.ComponentProps<typeof NameCard> & Record<string, unknown>) => {
  const [selected, setSelected] = React.useState<string>("sb");
  return <div className={cardGridClassName}>
      {people.map(person => <NameCard {...args} key={person.value} name="name-card" value={person.value} title={person.title} description={person.description} avatarColor={person.color} checked={selected === person.value} onChange={event => {
      action("onChange")(event);
      if (event.target.checked) {
        setSelected(person.value);
      }
    }} />)}
    </div>;
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => <div className={cardGridClassName}>
    <NameCard name="name-card-states" value="enabled" title="Name" description="Description" avatarColor="red" checked={false} onChange={action("onChange")} />
    <NameCard name="name-card-states" value="selected" title="Name" description="Description" avatarColor="red" checked onChange={action("onChange")} />
    <NameCard name="name-card-states" value="disabled" title="Name" description="Description" avatarColor="red" checked={false} disabled onChange={action("onChange")} />
  </div>`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => <div className={cardGridClassName}>
    <NameCard name="name-card-no-description" value="sb" title="Sarah Brooks" avatarColor="brand" checked={false} onChange={action("onChange")} />
  </div>`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => <div className="gap-md flex flex-wrap items-start">
    {[{
    value: "small",
    className: "w-[140px] h-[110px]"
  }, {
    value: "default",
    className: "w-[162px]"
  }, {
    value: "large",
    className: "w-[240px] h-[200px]"
  }].map(size => <NameCard key={size.value} name="name-card-sizes" value={size.value} title="Sarah Brooks" description="Head Coach" avatarColor="red" checked={size.value === "large"} onChange={action("onChange")} className={size.className} />)}
  </div>`,...v.parameters?.docs?.source}}},y=[`Playground`,`States`,`WithoutDescription`,`CustomSize`]}))();export{v as CustomSize,h as Playground,g as States,_ as WithoutDescription,y as __namedExportsOrder,f as default};