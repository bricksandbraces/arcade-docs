import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Br as n,Cr as r,Xr as i,dr as a,dt as o,ea as s,ha as c,lt as l,t as u,ut as d,zi as f}from"./iframe-D3A0Qfxl.js";var p,m,h,g,_,v,y,b;e((()=>{u(),a(),p=t(f(),1),m=t(c(),1),h=s(),g={title:`Components/Navigation/NavigationItem`,component:l,argTypes:{level:{control:`inline-radio`,options:d},size:{control:`inline-radio`,options:o},selected:{control:`boolean`},disabled:{control:`boolean`},expandable:{control:`boolean`},expanded:{control:`boolean`},title:{control:`text`},tooltip:{control:`text`}},args:{title:`Dashboard`,level:1,expandable:!1,selected:!1,disabled:!1,size:`default`},decorators:[e=>(0,h.jsx)(`div`,{className:(0,p.default)(`p-lg`,`w-72`,`bg-background`),children:(0,h.jsx)(e,{})})]},_={args:{icon:i}},v={parameters:{controls:{disable:!0}},render:()=>(0,h.jsxs)(`div`,{className:(0,p.default)(`gap-xlg`,`flex`,`flex-col`),children:[(0,h.jsxs)(`section`,{className:(0,p.default)(`gap-md`,`flex`,`flex-col`),children:[(0,h.jsx)(`h3`,{className:(0,p.default)(`typography-headline-04`,`text-text`),children:`Level 1 - default size`}),(0,h.jsx)(l,{title:`Enabled`,icon:i}),(0,h.jsx)(l,{title:`Selected`,icon:i,selected:!0}),(0,h.jsx)(l,{title:`Disabled`,icon:i,disabled:!0}),(0,h.jsx)(l,{title:`Expandable (collapsed)`,icon:n,expandable:!0}),(0,h.jsxs)(l,{title:`Expandable (expanded)`,icon:n,expandable:!0,defaultExpanded:!0,children:[(0,h.jsx)(l,{title:`Nested item`,level:2}),(0,h.jsx)(l,{title:`Another nested`,level:2})]})]}),(0,h.jsxs)(`section`,{className:(0,p.default)(`gap-md`,`flex`,`flex-col`),children:[(0,h.jsx)(`h3`,{className:(0,p.default)(`typography-headline-04`,`text-text`),children:`Level 2`}),(0,h.jsx)(l,{title:`Nested enabled`,level:2}),(0,h.jsx)(l,{title:`Nested selected`,level:2,selected:!0}),(0,h.jsx)(l,{title:`Nested disabled`,level:2,disabled:!0})]}),(0,h.jsxs)(`section`,{className:(0,p.default)(`gap-md`,`flex`,`flex-col`),children:[(0,h.jsx)(`h3`,{className:(0,p.default)(`typography-headline-04`,`text-text`),children:`Small - icon only with tooltip`}),(0,h.jsxs)(`div`,{className:(0,p.default)(`gap-sm`,`flex`,`flex-col`,`w-16`),children:[(0,h.jsx)(l,{size:`small`,icon:i,tooltip:`Dashboard`}),(0,h.jsx)(l,{size:`small`,icon:n,tooltip:`Projects`,selected:!0}),(0,h.jsx)(l,{size:`small`,icon:r,tooltip:`Settings`,disabled:!0})]})]})]})},y={parameters:{controls:{disable:!0}},render:function(){let[e,t]=m.useState(`projects`);return(0,h.jsxs)(`div`,{className:(0,p.default)(`gap-sm`,`flex`,`flex-col`),children:[(0,h.jsx)(l,{title:`Dashboard`,icon:i,selected:e===null}),(0,h.jsxs)(l,{title:`Projects`,icon:n,expandable:!0,expanded:e===`projects`,onExpandedChange:e=>t(e?`projects`:null),children:[(0,h.jsx)(l,{title:`All projects`,level:2}),(0,h.jsx)(l,{title:`Archived`,level:2}),(0,h.jsx)(l,{title:`Templates`,level:2,disabled:!0})]}),(0,h.jsxs)(l,{title:`Settings`,icon:r,expandable:!0,expanded:e===`settings`,onExpandedChange:e=>t(e?`settings`:null),children:[(0,h.jsx)(l,{title:`Profile`,level:2}),(0,h.jsx)(l,{title:`Billing`,level:2})]})]})}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    icon: IconDashboard
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b=[`Playground`,`Overview`,`Expandable`]}))();export{y as Expandable,v as Overview,_ as Playground,b as __namedExportsOrder,g as default};