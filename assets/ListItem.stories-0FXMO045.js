import{n as e}from"./chunk-jRWAZmH_.js";import{As as t,_t as n,aa as r,cc as i,es as a,fo as o,js as s,qc as c,t as l,vt as u}from"./iframe-BmBSRsrc.js";import{n as d,t as f}from"./figmaDesign-D2IpkIki.js";var p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O;e((()=>{l(),o(),d(),p=c(),{action:m}=__STORYBOOK_MODULE_ACTIONS__,h={title:`Components/List/ListItem`,component:u,tags:[`autodocs`],parameters:{design:f(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=6318-123`),docs:{description:{component:"One line of a `List`. A static row carries its own `trailing` content; with `href` or `onClick` the whole row is the target and drives the hover and pressed state of its arrow button."}}},args:{label:`Label`,value:`Value`},decorators:[e=>(0,p.jsx)(n,{className:`max-w-[720px]`,children:(0,p.jsx)(e,{})})]},g={args:{trailing:(0,p.jsx)(i,{kind:`secondary`,size:`small`,label:`Button`})}},_={args:{onClick:m(`click`)}},v={args:{disabled:!0,trailing:(0,p.jsx)(i,{kind:`secondary`,size:`small`,label:`Button`,disabled:!0})}},y={args:{disabled:!0,onClick:m(`click`)}},b={args:{href:`#settings`}},x={args:{description:`Description`,onClick:m(`click`)}},S={args:{statusIcon:(0,p.jsx)(t,{"aria-hidden":!0,className:`text-icon-success size-lg`})}},C={args:{leading:(0,p.jsx)(a,{"aria-hidden":!0,className:`text-icon size-lg`}),onClick:m(`click`)}},w={args:{middle:(0,p.jsxs)(`span`,{className:`gap-xs flex items-center`,children:[(0,p.jsx)(`span`,{className:`typography-body-small text-text`,children:`Label`}),(0,p.jsx)(r,{type:`inline`,color:`lime`,children:`Beta`})]}),statusIcon:(0,p.jsx)(t,{"aria-hidden":!0,className:`text-icon-success size-lg`}),trailing:(0,p.jsx)(i,{kind:`secondary`,size:`small`,label:`Button`})}},T={args:{onClick:m(`click`),trailing:(0,p.jsx)(s,{"aria-hidden":!0,className:`text-icon size-lg`})}},E={args:{value:void 0}},D={args:{label:`A label that is long enough to run out of space in a narrow row`,value:`A value that is just as long and has to be truncated as well`,onClick:m(`click`)}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    trailing: <Button kind="secondary" size="small" label="Button" />
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    onClick: action("click")
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    trailing: <Button kind="secondary" size="small" label="Button" disabled />
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    onClick: action("click")
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    href: "#settings"
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    description: "Description",
    onClick: action("click")
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    statusIcon: <IconCircleCheck aria-hidden className="text-icon-success size-lg" />
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    leading: <IconLanguage aria-hidden className="text-icon size-lg" />,
    onClick: action("click")
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    middle: <span className="gap-xs flex items-center">
        <span className="typography-body-small text-text">Label</span>
        <Badge type="inline" color="lime">
          Beta
        </Badge>
      </span>,
    statusIcon: <IconCircleCheck aria-hidden className="text-icon-success size-lg" />,
    trailing: <Button kind="secondary" size="small" label="Button" />
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    onClick: action("click"),
    trailing: <IconChevronRight aria-hidden className="text-icon size-lg" />
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    value: undefined
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    label: "A label that is long enough to run out of space in a narrow row",
    value: "A value that is just as long and has to be truncated as well",
    onClick: action("click")
  }
}`,...D.parameters?.docs?.source}}},O=[`Static`,`Clickable`,`StaticDisabled`,`ClickableDisabled`,`AsLink`,`WithDescription`,`WithStatusIcon`,`WithLeading`,`WithMiddle`,`ClickableWithCustomTrailing`,`LabelOnly`,`LongContent`]}))();export{b as AsLink,_ as Clickable,y as ClickableDisabled,T as ClickableWithCustomTrailing,E as LabelOnly,D as LongContent,g as Static,v as StaticDisabled,x as WithDescription,C as WithLeading,w as WithMiddle,S as WithStatusIcon,O as __namedExportsOrder,h as default};