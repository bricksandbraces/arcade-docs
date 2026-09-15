import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{$t as n,Go as r,Ja as i,La as a,Qt as o,Zt as s,ga as c,os as l,t as u,ta as d,xs as f}from"./iframe-CVgNtwa1.js";import{n as p,t as m}from"./figmaDesign-CO6i5n9C.js";var h,g,_,v,y,b,x,S,C;e((()=>{u(),d(),h=t(r(),1),g=t(f(),1),p(),_=l(),v={parameters:{design:m(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=2438-38919`)},title:`Navigation/Navigation/NavigationItem`,component:s,tags:[`autodocs`],argTypes:{level:{control:`inline-radio`,options:o},size:{control:`inline-radio`,options:n},selected:{control:`boolean`},disabled:{control:`boolean`},expandable:{control:`boolean`},expanded:{control:`boolean`},title:{control:`text`},tooltip:{control:`text`}},args:{title:`Dashboard`,level:1,expandable:!1,selected:!1,disabled:!1,size:`default`},decorators:[e=>(0,_.jsx)(`div`,{className:(0,h.default)(`p-lg`,`w-72`,`bg-background`),children:(0,_.jsx)(e,{})})]},y={args:{icon:i}},b={parameters:{controls:{disable:!0}},render:()=>(0,_.jsxs)(`div`,{className:(0,h.default)(`gap-xlg`,`flex`,`flex-col`),children:[(0,_.jsxs)(`section`,{className:(0,h.default)(`gap-md`,`flex`,`flex-col`),children:[(0,_.jsx)(`h3`,{className:(0,h.default)(`typography-headline-04`,`text-text`),children:`Level 1 - default size`}),(0,_.jsx)(s,{title:`Enabled`,icon:i}),(0,_.jsx)(s,{title:`Selected`,icon:i,selected:!0}),(0,_.jsx)(s,{title:`Disabled`,icon:i,disabled:!0}),(0,_.jsx)(s,{title:`Expandable (collapsed)`,icon:a,expandable:!0}),(0,_.jsxs)(s,{title:`Expandable (expanded)`,icon:a,expandable:!0,defaultExpanded:!0,children:[(0,_.jsx)(s,{title:`Nested item`,level:2}),(0,_.jsx)(s,{title:`Another nested`,level:2})]})]}),(0,_.jsxs)(`section`,{className:(0,h.default)(`gap-md`,`flex`,`flex-col`),children:[(0,_.jsx)(`h3`,{className:(0,h.default)(`typography-headline-04`,`text-text`),children:`Level 2`}),(0,_.jsx)(s,{title:`Nested enabled`,level:2}),(0,_.jsx)(s,{title:`Nested selected`,level:2,selected:!0}),(0,_.jsx)(s,{title:`Nested disabled`,level:2,disabled:!0})]}),(0,_.jsxs)(`section`,{className:(0,h.default)(`gap-md`,`flex`,`flex-col`),children:[(0,_.jsx)(`h3`,{className:(0,h.default)(`typography-headline-04`,`text-text`),children:`Small - icon only with tooltip`}),(0,_.jsxs)(`div`,{className:(0,h.default)(`gap-sm`,`flex`,`flex-col`,`w-16`),children:[(0,_.jsx)(s,{size:`small`,icon:i,tooltip:`Dashboard`}),(0,_.jsx)(s,{size:`small`,icon:a,tooltip:`Projects`,selected:!0}),(0,_.jsx)(s,{size:`small`,icon:c,tooltip:`Settings`,disabled:!0})]})]})]})},x={parameters:{controls:{disable:!0}},render:function(){let[e,t]=g.useState(`projects`);return(0,_.jsxs)(`div`,{className:(0,h.default)(`gap-sm`,`flex`,`flex-col`),children:[(0,_.jsx)(s,{title:`Dashboard`,icon:i,selected:e===null}),(0,_.jsxs)(s,{title:`Projects`,icon:a,expandable:!0,expanded:e===`projects`,onExpandedChange:e=>t(e?`projects`:null),children:[(0,_.jsx)(s,{title:`All projects`,level:2}),(0,_.jsx)(s,{title:`Archived`,level:2}),(0,_.jsx)(s,{title:`Templates`,level:2,disabled:!0})]}),(0,_.jsxs)(s,{title:`Settings`,icon:c,expandable:!0,expanded:e===`settings`,onExpandedChange:e=>t(e?`settings`:null),children:[(0,_.jsx)(s,{title:`Profile`,level:2}),(0,_.jsx)(s,{title:`Billing`,level:2})]})]})}},S={parameters:{controls:{disable:!0}},render:()=>(0,_.jsxs)(`div`,{className:(0,h.default)(`gap-sm`,`flex`,`flex-col`),children:[(0,_.jsx)(s,{title:`Dashboard`,icon:i,href:`#dashboard`,selected:!0}),(0,_.jsx)(s,{title:`Projects`,icon:a,href:`#projects`}),(0,_.jsx)(s,{title:`Settings`,icon:c,href:`#settings`})]})},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    icon: IconDashboard
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className={cx("gap-xlg", "flex", "flex-col")}>
      <section className={cx("gap-md", "flex", "flex-col")}>
        <h3 className={cx("typography-headline-04", "text-text")}>
          Level 1 - default size
        </h3>
        <NavigationItem title="Enabled" icon={IconDashboard} />
        <NavigationItem title="Selected" icon={IconDashboard} selected />
        <NavigationItem title="Disabled" icon={IconDashboard} disabled />
        <NavigationItem title="Expandable (collapsed)" icon={IconFolder} expandable />
        <NavigationItem title="Expandable (expanded)" icon={IconFolder} expandable defaultExpanded>
          <NavigationItem title="Nested item" level={2} />
          <NavigationItem title="Another nested" level={2} />
        </NavigationItem>
      </section>

      <section className={cx("gap-md", "flex", "flex-col")}>
        <h3 className={cx("typography-headline-04", "text-text")}>Level 2</h3>
        <NavigationItem title="Nested enabled" level={2} />
        <NavigationItem title="Nested selected" level={2} selected />
        <NavigationItem title="Nested disabled" level={2} disabled />
      </section>

      <section className={cx("gap-md", "flex", "flex-col")}>
        <h3 className={cx("typography-headline-04", "text-text")}>
          Small - icon only with tooltip
        </h3>
        <div className={cx("gap-sm", "flex", "flex-col", "w-16")}>
          <NavigationItem size="small" icon={IconDashboard} tooltip="Dashboard" />
          <NavigationItem size="small" icon={IconFolder} tooltip="Projects" selected />
          <NavigationItem size="small" icon={IconSettings} tooltip="Settings" disabled />
        </div>
      </section>
    </div>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: function Render() {
    const [openId, setOpenId] = React.useState<string | null>("projects");
    return <div className={cx("gap-sm", "flex", "flex-col")}>
        <NavigationItem title="Dashboard" icon={IconDashboard} selected={openId === null} />
        <NavigationItem title="Projects" icon={IconFolder} expandable expanded={openId === "projects"} onExpandedChange={next => setOpenId(next ? "projects" : null)}>
          <NavigationItem title="All projects" level={2} />
          <NavigationItem title="Archived" level={2} />
          <NavigationItem title="Templates" level={2} disabled />
        </NavigationItem>
        <NavigationItem title="Settings" icon={IconSettings} expandable expanded={openId === "settings"} onExpandedChange={next => setOpenId(next ? "settings" : null)}>
          <NavigationItem title="Profile" level={2} />
          <NavigationItem title="Billing" level={2} />
        </NavigationItem>
      </div>;
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className={cx("gap-sm", "flex", "flex-col")}>
      <NavigationItem title="Dashboard" icon={IconDashboard} href="#dashboard" selected />
      <NavigationItem title="Projects" icon={IconFolder} href="#projects" />
      <NavigationItem title="Settings" icon={IconSettings} href="#settings" />
    </div>
}`,...S.parameters?.docs?.source},description:{story:"When `href` is set, the row renders as a real anchor (`<a>`) so the browser\nhandles middle-click / open-in-new-tab and the page is reachable without JS.\nPass `linkComponent` (e.g. `next/link`'s `Link`) to hand navigation to an SPA\nrouter for client-side transitions and prefetching. `expandable` items keep\nbutton semantics because the row toggles the child group.",...S.parameters?.docs?.description}}},C=[`Playground`,`Overview`,`Expandable`,`AsLink`]}))();export{S as AsLink,x as Expandable,b as Overview,y as Playground,C as __namedExportsOrder,v as default};