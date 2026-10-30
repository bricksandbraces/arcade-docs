import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Ds as n,Hs as r,nt as i,t as a}from"./iframe-CQm8b4Bh.js";import{n as o,t as s}from"./figmaDesign-DDiUnvXT.js";var c,l,u,d,f,p,m,h,g;e((()=>{a(),c=t(n(),1),o(),l=r(),{expect:u}=__STORYBOOK_MODULE_TEST__,d={title:`Navigation/Navigation/NavigationLogo`,component:i,tags:[`autodocs`],decorators:[e=>(0,l.jsx)(`div`,{className:(0,c.default)(`bg-background`,`p-lg`,`w-fit`),children:(0,l.jsx)(e,{})})],parameters:{design:s(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=2439-40795`),controls:{disable:!0}}},f={render:()=>(0,l.jsxs)(`div`,{className:(0,c.default)(`gap-md`,`flex`,`flex-col`,`items-start`),children:[(0,l.jsx)(i,{compact:!1,label:`Logo`,compactLabel:`L`}),(0,l.jsx)(i,{compact:!0,label:`Logo`,compactLabel:`L`})]})},p={render:()=>(0,l.jsxs)(`div`,{className:(0,c.default)(`gap-md`,`flex`,`flex-col`,`items-start`),children:[(0,l.jsx)(i,{children:(0,l.jsx)(`span`,{className:`typography-headline-06 font-semibold`,children:`Acme Inc.`})}),(0,l.jsx)(i,{compact:!0,children:(0,l.jsx)(`span`,{className:`bg-background-brand text-text-inverse typography-label flex h-6 w-6 items-center justify-center rounded-md`,children:`A`})})]})},m={render:()=>(0,l.jsxs)(`div`,{className:(0,c.default)(`gap-md`,`flex`,`flex-col`,`items-start`),children:[(0,l.jsx)(i,{href:`#home`,children:(0,l.jsx)(`span`,{className:`typography-headline-06 font-semibold`,children:`Acme Inc.`})}),(0,l.jsx)(i,{compact:!0,href:`#home`,children:(0,l.jsx)(`span`,{className:`bg-background-brand text-text-inverse typography-label flex h-6 w-6 items-center justify-center rounded-md`,children:`A`})})]}),play:async({canvas:e,userEvent:t})=>{await t.tab(),await u(e.getAllByRole(`link`,{name:`Home`})[0]).toHaveFocus()}},h=f,f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div className={cx("gap-md", "flex", "flex-col", "items-start")}>
      <NavigationLogo compact={false} label="Logo" compactLabel="L" />
      <NavigationLogo compact label="Logo" compactLabel="L" />
    </div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className={cx("gap-md", "flex", "flex-col", "items-start")}>
      <NavigationLogo>
        <span className="typography-headline-06 font-semibold">Acme Inc.</span>
      </NavigationLogo>
      <NavigationLogo compact>
        <span className="bg-background-brand text-text-inverse typography-label flex h-6 w-6 items-center justify-center rounded-md">
          A
        </span>
      </NavigationLogo>
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className={cx("gap-md", "flex", "flex-col", "items-start")}>
      <NavigationLogo href="#home">
        <span className="typography-headline-06 font-semibold">Acme Inc.</span>
      </NavigationLogo>
      <NavigationLogo compact href="#home">
        <span className="bg-background-brand text-text-inverse typography-label flex h-6 w-6 items-center justify-center rounded-md">
          A
        </span>
      </NavigationLogo>
    </div>,
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.tab();
    await expect(canvas.getAllByRole("link", {
      name: "Home"
    })[0]).toHaveFocus();
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`Overview`,...h.parameters?.docs?.source}}},g=[`Overview`,`WithCustomLogo`,`AsLink`,`Playground`]}))();export{m as AsLink,f as Overview,h as Playground,p as WithCustomLogo,g as __namedExportsOrder,d as default};