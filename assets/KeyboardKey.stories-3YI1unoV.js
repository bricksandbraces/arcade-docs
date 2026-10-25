import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Ca as n,Ci as r,Eo as i,Is as a,Zs as o,t as s,wi as c}from"./iframe-B8D8LVFg.js";import{n as l,t as u}from"./figmaDesign-DDiUnvXT.js";var d,f,p,m,h,g,_,v;e((()=>{s(),n(),d=t(o(),1),l(),f=a(),p={title:`Display & Data/KeyboardKey`,component:r,tags:[`autodocs`],argTypes:{kind:{control:`inline-radio`,options:c},children:{control:`text`},Icon:{control:!1}},args:{kind:`filled`,children:`S`},parameters:{layout:`centered`,design:u(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=5546-1320`),docs:{description:{component:"A single key cap for showing keyboard shortcuts next to actions, e.g. in `ContextMenu`. Pass the key label as children and an optional leading `Icon` for a modifier such as ⌘. Renders a native `<kbd>`."}}}},m={},h={args:{Icon:i,iconLabel:`⌘`,children:`A`}},g={args:{Icon:i,iconLabel:`⌘`,children:void 0}},_={render:()=>(0,f.jsx)(`div`,{className:`gap-md grid grid-cols-[repeat(3,max-content)] items-center`,children:c.map(e=>(0,f.jsxs)(d.Fragment,{children:[(0,f.jsx)(r,{kind:e,children:`S`}),(0,f.jsx)(r,{kind:e,Icon:i,iconLabel:`⌘`,children:`A`}),(0,f.jsx)(r,{kind:e,Icon:i,iconLabel:`⌘`})]},e))})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    Icon: IconCommand,
    iconLabel: "⌘",
    children: "A"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    Icon: IconCommand,
    iconLabel: "⌘",
    children: undefined
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div className="gap-md grid grid-cols-[repeat(3,max-content)] items-center">
      {KeyboardKeyKinds.map(kind => <React.Fragment key={kind}>
          <KeyboardKey kind={kind}>S</KeyboardKey>
          <KeyboardKey kind={kind} Icon={IconCommand} iconLabel="⌘">
            A
          </KeyboardKey>
          <KeyboardKey kind={kind} Icon={IconCommand} iconLabel="⌘" />
        </React.Fragment>)}
    </div>
}`,..._.parameters?.docs?.source}}},v=[`Playground`,`WithIcon`,`IconOnly`,`Overview`]}))();export{g as IconOnly,_ as Overview,m as Playground,h as WithIcon,v as __namedExportsOrder,p as default};