import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{b0 as g,b1 as S,b2 as r,b3 as N}from"./ContextMenu-DwPyJibk.js";import{R as i}from"./index-CY-HDqYb.js";import{c as p}from"./index-A6zbrgSY.js";import{I as y}from"./IconDashboard-qX6Na7DR.js";import{I as E,a as C}from"./IconUsers-jUzjs7W9.js";import{I as R}from"./IconSettings-BwJCAciI.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";const U={title:"Fabian Supervision/Navigation/Navigation",component:g,parameters:{layout:"fullscreen"}},d={render:function(){const[t,h]=i.useState(!0),[s,l]=i.useState("dashboard"),[u,I]=i.useState("projects"),v=[{id:"dashboard",label:"Dashboard",icon:y},{id:"projects",label:"Projects",icon:S,children:[{id:"projects-all",label:"All projects"},{id:"projects-archived",label:"Archived"},{id:"projects-templates",label:"Templates",disabled:!0}]},{id:"team",label:"Team",icon:E},{id:"reports",label:"Reports",icon:C},{id:"settings",label:"Settings",icon:R}];return a.jsxs("div",{className:p("bg-background-accent","flex","min-h-screen"),children:[a.jsx(g,{expanded:t,onExpandedChange:h,logo:a.jsx(N,{compact:!t}),children:v.map(e=>{var c;const f=!!e.children&&t,o=u===e.id,j=s===e.id;return a.jsx(r,{title:t?e.label:void 0,size:t?"default":"small",icon:e.icon,tooltip:t?void 0:e.label,selected:j&&!o,expandable:f,expanded:o,onExpandedChange:n=>I(n?e.id:null),onClick:()=>{e.children||l(e.id)},children:(c=e.children)==null?void 0:c.map(n=>a.jsx(r,{title:n.label,level:2,disabled:n.disabled,selected:s===n.id,onClick:()=>{n.disabled||l(n.id)}},n.id))},e.id)})}),a.jsx("div",{className:p("p-lg","typography-body-small","text-text","flex-1")})]})}};var m,b,x;d.parameters={...d.parameters,docs:{...(m=d.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(x=(b=d.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};const _=["Playground"];export{d as Playground,_ as __namedExportsOrder,U as default};
