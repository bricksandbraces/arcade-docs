import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Di as n,Hi as r,J as i,K as a,Tr as o,Zn as s,fi as c,gr as l,ir as u,jr as d,q as f,qn as p,t as m}from"./iframe-g3u2SE_6.js";var h,g,_,v,y,b;e((()=>{m(),p(),h=t(c(),1),g=t(r(),1),_=n(),v={title:`Fabian Supervision/Navigation/Navigation`,component:f,tags:[`autodocs`],parameters:{layout:`fullscreen`,docs:{description:{component:`Collapsible side navigation with nested items. Use as the primary app chrome for switching between top-level sections.`}}}},y={render:function(){let[e,t]=g.useState(!0),[n,r]=g.useState(`dashboard`),[c,p]=g.useState(`projects`),m=[{id:`dashboard`,label:`Dashboard`,icon:o},{id:`projects`,label:`Projects`,icon:l,children:[{id:`projects-all`,label:`All projects`},{id:`projects-archived`,label:`Archived`},{id:`projects-templates`,label:`Templates`,disabled:!0}]},{id:`team`,label:`Team`,icon:s},{id:`reports`,label:`Reports`,icon:d},{id:`settings`,label:`Settings`,icon:u}];return(0,_.jsxs)(`div`,{className:(0,h.default)(`bg-background-accent`,`flex`,`min-h-screen`),children:[(0,_.jsx)(f,{expanded:e,onExpandedChange:t,logo:(0,_.jsx)(a,{compact:!e}),children:m.map(t=>{let a=!!t.children&&e,o=c===t.id,s=n===t.id;return(0,_.jsx)(i,{title:e?t.label:void 0,size:e?`default`:`small`,icon:t.icon,tooltip:e?void 0:t.label,selected:s&&!o,expandable:a,expanded:o,onExpandedChange:e=>p(e?t.id:null),onClick:()=>{t.children||r(t.id)},children:t.children?.map(e=>(0,_.jsx)(i,{title:e.label,level:2,disabled:e.disabled,selected:n===e.id,onClick:()=>{e.disabled||r(e.id)}},e.id))},t.id)})}),(0,_.jsx)(`div`,{className:(0,h.default)(`p-lg`,`typography-body-small`,`text-text`,`flex-1`)})]})}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [expanded, setExpanded] = React.useState(true);
    const [selectedId, setSelectedId] = React.useState<string>("dashboard");
    const [openId, setOpenId] = React.useState<string | null>("projects");
    type Item = {
      id: string;
      label: string;
      icon: React.ComponentType<{
        className?: string;
      }>;
      children?: {
        id: string;
        label: string;
        disabled?: boolean;
      }[];
    };
    const items: Item[] = [{
      id: "dashboard",
      label: "Dashboard",
      icon: IconDashboard
    }, {
      id: "projects",
      label: "Projects",
      icon: IconFolder,
      children: [{
        id: "projects-all",
        label: "All projects"
      }, {
        id: "projects-archived",
        label: "Archived"
      }, {
        id: "projects-templates",
        label: "Templates",
        disabled: true
      }]
    }, {
      id: "team",
      label: "Team",
      icon: IconUsers
    }, {
      id: "reports",
      label: "Reports",
      icon: IconChartBar
    }, {
      id: "settings",
      label: "Settings",
      icon: IconSettings
    }];
    return <div className={cx("bg-background-accent", "flex", "min-h-screen")}>
        <Navigation expanded={expanded} onExpandedChange={setExpanded} logo={<NavigationLogo compact={!expanded} />}>
          {items.map(item => {
          const isExpandable = Boolean(item.children) && expanded;
          const isOpen = openId === item.id;
          const isSelected = selectedId === item.id;
          return <NavigationItem key={item.id} title={expanded ? item.label : undefined} size={expanded ? "default" : "small"} icon={item.icon} tooltip={!expanded ? item.label : undefined} selected={isSelected && !isOpen} expandable={isExpandable} expanded={isOpen} onExpandedChange={next => setOpenId(next ? item.id : null)} onClick={() => {
            if (!item.children) setSelectedId(item.id);
          }}>
                {item.children?.map(child => <NavigationItem key={child.id} title={child.label} level={2} disabled={child.disabled} selected={selectedId === child.id} onClick={() => {
              if (!child.disabled) setSelectedId(child.id);
            }} />)}
              </NavigationItem>;
        })}
        </Navigation>
        <div className={cx("p-lg", "typography-body-small", "text-text", "flex-1")} />
      </div>;
  }
}`,...y.parameters?.docs?.source}}},b=[`Playground`]}))();export{y as Playground,b as __namedExportsOrder,v as default};