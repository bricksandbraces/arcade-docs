import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{aY as i,aZ as x,G as u}from"./ContextMenu-CxMNWebl.js";import{R as o}from"./index-CY-HDqYb.js";import{I as g}from"./IconLayoutSidebarRightExpand-kkEJvmlj.js";import"./index-A6zbrgSY.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";const R={title:"WIP Components/Navigation/Navigation",component:i,parameters:{layout:"fullscreen"}};function v(){return e.jsx("div",{className:"border-border-brand text-text-brand typography-body-small flex h-6 items-center justify-center rounded-lg border border-dashed px-2 py-1",children:"Logo"})}const t={render:function(){const[n,l]=o.useState(!0),[p,c]=o.useState(null);return e.jsxs("div",{className:"bg-background-accent flex min-h-screen",children:[e.jsx(i,{expanded:n,onExpandedChange:l,logo:e.jsx(v,{}),children:[1,2,3,4].map(a=>e.jsx(x,{title:n?"Item Title":void 0,icon:u,expandable:n,expanded:p===a,onExpandedChange:m=>c(m?a:null),tooltip:n?void 0:"Item Title",trailingSlot:n?e.jsx(g,{className:"stroke-icon-accent size-4",stroke:1.5}):null},a))}),e.jsx("div",{className:"p-lg typography-body-small text-text",children:"Content area"})]})}};var d,r,s;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: function Render() {
    const [navExpanded, setNavExpanded] = React.useState(true);
    const [openItemId, setOpenItemId] = React.useState<number | null>(null);
    return <div className="bg-background-accent flex min-h-screen">
        <Navigation expanded={navExpanded} onExpandedChange={setNavExpanded} logo={<LogoSlot />}>
          {[1, 2, 3, 4].map(i => <NavigationItem key={i} title={navExpanded ? "Item Title" : undefined} icon={IconSquareRounded} expandable={navExpanded} expanded={openItemId === i} onExpandedChange={next => setOpenItemId(next ? i : null)} tooltip={!navExpanded ? "Item Title" : undefined} trailingSlot={navExpanded ? <IconLayoutSidebarRightExpand className="stroke-icon-accent size-4" stroke={1.5} /> : null} />)}
        </Navigation>
        <div className="p-lg typography-body-small text-text">Content area</div>
      </div>;
  }
}`,...(s=(r=t.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const j=["Playground"];export{t as Playground,j as __namedExportsOrder,R as default};
