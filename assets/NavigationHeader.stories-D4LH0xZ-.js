import{n as e}from"./chunk-jRWAZmH_.js";import{Ss as t,fo as n,ko as r,on as i,qc as a,rt as o,t as s,un as c}from"./iframe-BmBSRsrc.js";import{n as l,t as u}from"./figmaDesign-D2IpkIki.js";var d,f,p,m,h;e((()=>{s(),n(),l(),d=a(),f={parameters:{design:u(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=4892-11782`),docs:{description:{component:"Section label inside `Navigation` and `NavigationL2`. Without the `expanded` prop it follows the parent rail and hides while the rail is collapsed."}}},title:`Components/Navigation/NavigationHeader`,component:o,tags:[`autodocs`],argTypes:{expanded:{control:`boolean`},children:{control:`text`}},args:{expanded:!0,children:`Main`},decorators:[e=>(0,d.jsx)(`div`,{className:`p-lg bg-background w-72`,children:(0,d.jsx)(e,{})})]},p={},m={parameters:{controls:{disable:!0}},render:()=>(0,d.jsx)(c.Provider,{value:!0,children:(0,d.jsxs)(`div`,{className:`gap-sm flex flex-col`,children:[(0,d.jsx)(o,{children:`Main`}),(0,d.jsx)(i,{title:`Dashboard`,icon:t,selected:!0}),(0,d.jsx)(i,{title:`Settings`,icon:r})]})})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <NavigationExpandedContext.Provider value={true}>
      <div className="gap-sm flex flex-col">
        <NavigationHeader>Main</NavigationHeader>
        <NavigationItem title="Dashboard" icon={IconDashboard} selected />
        <NavigationItem title="Settings" icon={IconSettings} />
      </div>
    </NavigationExpandedContext.Provider>
}`,...m.parameters?.docs?.source}}},h=[`Playground`,`FollowsNavigation`]}))();export{m as FollowsNavigation,p as Playground,h as __namedExportsOrder,f as default};