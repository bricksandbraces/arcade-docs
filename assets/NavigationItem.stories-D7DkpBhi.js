import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{b4 as f,b5 as S,b2 as t,b1 as i}from"./ContextMenu-DwPyJibk.js";import{R as y}from"./index-CY-HDqYb.js";import{c as l}from"./index-A6zbrgSY.js";import{I as a}from"./IconDashboard-qX6Na7DR.js";import{I as j}from"./IconSettings-BwJCAciI.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";const R={title:"Fabian Supervision/Navigation/NavigationItem",component:t,argTypes:{level:{control:"inline-radio",options:S},size:{control:"inline-radio",options:f},selected:{control:"boolean"},disabled:{control:"boolean"},expandable:{control:"boolean"},expanded:{control:"boolean"},title:{control:"text"},tooltip:{control:"text"}},args:{title:"Dashboard",level:1,expandable:!1,selected:!1,disabled:!1,size:"default"},decorators:[r=>e.jsx("div",{className:l("p-lg","w-72","bg-background"),children:e.jsx(r,{})})]},n={args:{icon:a}},s={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{className:l("gap-xlg","flex","flex-col"),children:[e.jsxs("section",{className:l("gap-md","flex","flex-col"),children:[e.jsx("h3",{className:l("typography-headline-04","text-text"),children:"Level 1 - default size"}),e.jsx(t,{title:"Enabled",icon:a}),e.jsx(t,{title:"Selected",icon:a,selected:!0}),e.jsx(t,{title:"Disabled",icon:a,disabled:!0}),e.jsx(t,{title:"Expandable (collapsed)",icon:i,expandable:!0}),e.jsxs(t,{title:"Expandable (expanded)",icon:i,expandable:!0,defaultExpanded:!0,children:[e.jsx(t,{title:"Nested item",level:2}),e.jsx(t,{title:"Another nested",level:2})]})]}),e.jsxs("section",{className:l("gap-md","flex","flex-col"),children:[e.jsx("h3",{className:l("typography-headline-04","text-text"),children:"Level 2"}),e.jsx(t,{title:"Nested enabled",level:2}),e.jsx(t,{title:"Nested selected",level:2,selected:!0}),e.jsx(t,{title:"Nested disabled",level:2,disabled:!0})]}),e.jsxs("section",{className:l("gap-md","flex","flex-col"),children:[e.jsx("h3",{className:l("typography-headline-04","text-text"),children:"Small - icon only with tooltip"}),e.jsxs("div",{className:l("gap-sm","flex","flex-col","w-16"),children:[e.jsx(t,{size:"small",icon:a,tooltip:"Dashboard"}),e.jsx(t,{size:"small",icon:i,tooltip:"Projects",selected:!0}),e.jsx(t,{size:"small",icon:j,tooltip:"Settings",disabled:!0})]})]})]})},o={parameters:{controls:{disable:!0}},render:function(){const[d,x]=y.useState("projects");return e.jsxs("div",{className:l("gap-sm","flex","flex-col"),children:[e.jsx(t,{title:"Dashboard",icon:a,selected:d===null}),e.jsxs(t,{title:"Projects",icon:i,expandable:!0,expanded:d==="projects",onExpandedChange:c=>x(c?"projects":null),children:[e.jsx(t,{title:"All projects",level:2}),e.jsx(t,{title:"Archived",level:2}),e.jsx(t,{title:"Templates",level:2,disabled:!0})]}),e.jsxs(t,{title:"Settings",icon:j,expandable:!0,expanded:d==="settings",onExpandedChange:c=>x(c?"settings":null),children:[e.jsx(t,{title:"Profile",level:2}),e.jsx(t,{title:"Billing",level:2})]})]})}};var p,m,g;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    icon: IconDashboard
  }
}`,...(g=(m=n.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var v,b,h;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(h=(b=s.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var N,I,u;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(u=(I=o.parameters)==null?void 0:I.docs)==null?void 0:u.source}}};const L=["Playground","Overview","Expandable"];export{o as Expandable,s as Overview,n as Playground,L as __namedExportsOrder,R as default};
