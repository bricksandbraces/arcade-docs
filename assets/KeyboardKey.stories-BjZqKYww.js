import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Di as n,Ei as r,Hs as i,Mo as a,ka as o,rc as s,t as c}from"./iframe-CQm8b4Bh.js";import{n as l,t as u}from"./figmaDesign-DDiUnvXT.js";var d,f,p,m,h,g,_,v;e((()=>{c(),o(),d=t(s(),1),l(),f=i(),p={title:`Display & Data/KeyboardKey`,component:r,tags:[`autodocs`],argTypes:{kind:{control:`inline-radio`,options:n},children:{control:`text`},Icon:{control:!1}},args:{kind:`filled`,children:`S`},parameters:{layout:`centered`,design:u(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=5546-1320`),docs:{description:{component:"A single key cap for showing keyboard shortcuts next to actions, e.g. in `ContextMenu`. Pass the key label as children and an optional leading `Icon` for a modifier such as ⌘. Renders a native `<kbd>`."}}}},m={},h={args:{Icon:a,iconLabel:`⌘`,children:`A`}},g={args:{Icon:a,iconLabel:`⌘`,children:void 0}},_={render:()=>(0,f.jsx)(`div`,{className:`gap-md grid grid-cols-[repeat(3,max-content)] items-center`,children:n.map(e=>(0,f.jsxs)(d.Fragment,{children:[(0,f.jsx)(r,{kind:e,children:`S`}),(0,f.jsx)(r,{kind:e,Icon:a,iconLabel:`⌘`,children:`A`}),(0,f.jsx)(r,{kind:e,Icon:a,iconLabel:`⌘`})]},e))})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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