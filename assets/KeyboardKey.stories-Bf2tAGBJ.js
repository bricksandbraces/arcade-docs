import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Os as n,Us as r,_a as i,bi as a,t as o,xi as s,yo as c}from"./iframe-BrfqoxEp.js";import{n as l,t as u}from"./figmaDesign-DDiUnvXT.js";var d,f,p,m,h,g,_,v;e((()=>{o(),i(),d=t(r(),1),l(),f=n(),p={title:`Display & Data/KeyboardKey`,component:a,tags:[`autodocs`],argTypes:{kind:{control:`inline-radio`,options:s},children:{control:`text`},Icon:{control:!1}},args:{kind:`filled`,children:`S`},parameters:{layout:`centered`,design:u(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=5546-1320`),docs:{description:{component:"A single key cap for showing keyboard shortcuts next to actions, e.g. in `ContextMenu`. Pass the key label as children and an optional leading `Icon` for a modifier such as ⌘. Renders a native `<kbd>`."}}}},m={},h={args:{Icon:c,iconLabel:`⌘`,children:`A`}},g={args:{Icon:c,iconLabel:`⌘`,children:void 0}},_={render:()=>(0,f.jsx)(`div`,{className:`gap-md grid grid-cols-[repeat(3,max-content)] items-center`,children:s.map(e=>(0,f.jsxs)(d.Fragment,{children:[(0,f.jsx)(a,{kind:e,children:`S`}),(0,f.jsx)(a,{kind:e,Icon:c,iconLabel:`⌘`,children:`A`}),(0,f.jsx)(a,{kind:e,Icon:c,iconLabel:`⌘`})]},e))})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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