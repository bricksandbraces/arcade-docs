import{n as e}from"./chunk-jRWAZmH_.js";import{Fc as t,Sr as n,Ts as r,Xc as i,ra as a,ro as o,t as s,vo as c}from"./iframe-B5M9Fgk-.js";import{n as l,t as u}from"./figmaDesign-DLesXS3c.js";import{n as d,t as f}from"./figmaFrame-CWjAguZ8.js";var p,m,h,g,_,v,y,b,x;e((()=>{s(),o(),i(),l(),d(),p=t(),m={title:`Components/Callout`,component:a,tags:[`autodocs`],parameters:{design:u(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=6034-887`),layout:`padded`,docs:{description:{component:`Sets a piece of information apart from the controls around it: a title, optionally led by an icon, and a muted description below. Read-only - for facts that should not look like a setting.`}}},argTypes:{title:{control:`text`},description:{control:`text`}}},h={args:{title:`Data sharing`,description:`Class names, times and free spots are shared with the partner. Member data stays in the studio.`},render:e=>(0,p.jsx)(a,{...e,icon:c,className:`max-w-[448px]`})},g={render:()=>(0,p.jsx)(a,{title:`Booking window`,description:`Bookable up to 14 days ahead, cancellable until 2 hours before the class.`,className:`max-w-[448px]`})},_={render:()=>(0,p.jsx)(a,{icon:r,title:`Partner rules`,className:`max-w-[448px]`,description:(0,p.jsxs)(`ul`,{className:`gap-xs pl-lg flex list-disc flex-col`,children:[(0,p.jsx)(`li`,{children:`Bookings close 2 hours before the class.`}),(0,p.jsx)(`li`,{children:`No-shows are reported to the partner.`})]})})},v={render:()=>(0,p.jsxs)(`div`,{className:`gap-xlg flex max-w-[480px] flex-col`,children:[(0,p.jsx)(a,{icon:c,title:`On the page`,description:`Description`}),(0,p.jsx)(n,{className:`p-lg`,children:(0,p.jsx)(a,{icon:c,title:`On a card`,description:`Description`})})]})},y={name:`Figma / Show icon`,render:()=>(0,p.jsx)(f,{node:`6034:886`,width:344,height:76,children:(0,p.jsx)(a,{icon:c,title:`Title`,description:`Description`})})},b={name:`Figma / No icon`,render:()=>(0,p.jsx)(f,{node:`6034:888`,width:344,height:75,children:(0,p.jsx)(a,{title:`Title`,description:`Description`})})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Data sharing",
    description: "Class names, times and free spots are shared with the partner. Member data stays in the studio."
  },
  render: args => <Callout {...args} icon={IconShieldCheck} className="max-w-[448px]" />
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <Callout title="Booking window" description="Bookable up to 14 days ahead, cancellable until 2 hours before the class." className="max-w-[448px]" />
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <Callout icon={IconCalendarTime} title="Partner rules" className="max-w-[448px]" description={<ul className="gap-xs pl-lg flex list-disc flex-col">
          <li>Bookings close 2 hours before the class.</li>
          <li>No-shows are reported to the partner.</li>
        </ul>} />
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div className="gap-xlg flex max-w-[480px] flex-col">
      <Callout icon={IconShieldCheck} title="On the page" description="Description" />
      <Surface className="p-lg">
        <Callout icon={IconShieldCheck} title="On a card" description="Description" />
      </Surface>
    </div>
}`,...v.parameters?.docs?.source},description:{story:`The callout on the page and on a card.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "Figma / Show icon",
  render: () => <FigmaFrame node="6034:886" width={344} height={76}>
      <Callout icon={IconShieldCheck} title="Title" description="Description" />
    </FigmaFrame>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "Figma / No icon",
  render: () => <FigmaFrame node="6034:888" width={344} height={75}>
      <Callout title="Title" description="Description" />
    </FigmaFrame>
}`,...b.parameters?.docs?.source}}},x=[`Playground`,`WithoutIcon`,`WithList`,`OnSurfaces`,`FigmaShowIcon`,`FigmaNoIcon`]}))();export{b as FigmaNoIcon,y as FigmaShowIcon,v as OnSurfaces,h as Playground,_ as WithList,g as WithoutIcon,x as __namedExportsOrder,m as default};