import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Di as n,Er as r,Hi as i,Hr as a,J as o,Jn as s,Lr as c,Qn as l,Y as u,_r as d,ar as f,at as p,ct as m,fi as h,jr as g,q as _,t as v,ur as y,zr as b}from"./iframe-Dox94nfK.js";var x,S,C,w,T,E,D,O,k,A,j,M,N;e((()=>{v(),s(),x=t(h(),1),S=t(i(),1),C=n(),w={title:`Fabian Supervision/Navigation/Navigation`,component:o,tags:[`autodocs`],parameters:{layout:`fullscreen`,docs:{description:{component:`Collapsible side navigation with nested items. Use as the primary app chrome for switching between top-level sections.`}}}},T=[{id:`dashboard`,label:`Dashboard`,icon:r},{id:`projects`,label:`Projects`,icon:d,children:[{id:`projects-all`,label:`All projects`},{id:`projects-archived`,label:`Archived`},{id:`projects-templates`,label:`Templates`,disabled:!0}]},{id:`team`,label:`Team`,icon:l},{id:`reports`,label:`Reports`,icon:g},{id:`settings`,label:`Settings`,icon:f}],E=({logo:e})=>{let[t,n]=S.useState(!0),[r,i]=S.useState(`dashboard`),[a,s]=S.useState(`projects`);return(0,C.jsxs)(`div`,{className:(0,x.default)(`bg-background-accent`,`flex`,`min-h-screen`),children:[(0,C.jsx)(o,{expanded:t,onExpandedChange:n,logo:e(t),children:T.map(e=>{let n=!!e.children&&t,o=a===e.id,c=r===e.id;return(0,C.jsx)(u,{title:t?e.label:void 0,size:t?`default`:`small`,icon:e.icon,tooltip:t?void 0:e.label,selected:c&&!o,expandable:n,expanded:o,onExpandedChange:t=>s(t?e.id:null),onClick:()=>{e.children||i(e.id)},children:e.children?.map(e=>(0,C.jsx)(u,{title:e.label,level:2,disabled:e.disabled,selected:r===e.id,onClick:()=>{e.disabled||i(e.id)}},e.id))},e.id)})}),(0,C.jsx)(`div`,{className:(0,x.default)(`p-lg`,`typography-body-small`,`text-text`,`flex-1`)})]})},D={render:()=>(0,C.jsx)(E,{logo:e=>(0,C.jsx)(_,{compact:!e})})},O=()=>(0,C.jsxs)(`div`,{className:`gap-xs flex items-center`,children:[(0,C.jsx)(a,{kind:`ghost`,IconLeft:f,size:`medium`,"aria-label":`Settings`}),(0,C.jsx)(a,{kind:`ghost`,IconLeft:c,size:`medium`,"aria-label":`Notifications`}),(0,C.jsx)(a,{kind:`ghost`,IconLeft:y,size:`medium`,"aria-label":`Menu`})]}),k=()=>(0,C.jsx)(`div`,{className:`border-border-brand text-text-brand typography-body-small size-container-xs flex items-center justify-center rounded-md border border-dashed`,children:`L`}),A=()=>{let[e,t]=S.useState(`products`);return(0,C.jsx)(p,{title:`Dashboard`,border:!0,companyLogo:(0,C.jsx)(k,{}),backButton:(0,C.jsx)(a,{kind:`ghost`,IconLeft:b,size:`medium`,"aria-label":`Go back`}),linkGroupOne:(0,C.jsxs)(`div`,{className:`gap-xs flex items-center`,children:[(0,C.jsx)(m,{selected:e===`products`,onClick:()=>t(`products`),children:`Products`}),(0,C.jsx)(m,{selected:e===`resources`,onClick:()=>t(`resources`),children:`Resources`})]}),actions:(0,C.jsx)(O,{})})},j={parameters:{docs:{description:{story:"Pairs the Navigation sidebar with the Header `WithTwoLinks` setup to show a complete app shell: sidebar on the left, top bar above the content area."}}},render:function(){let[e,t]=S.useState(!0),[n,r]=S.useState(`dashboard`),[i,a]=S.useState(`projects`);return(0,C.jsxs)(`div`,{className:(0,x.default)(`bg-background-accent`,`flex`,`min-h-screen`),children:[(0,C.jsx)(o,{expanded:e,onExpandedChange:t,logo:(0,C.jsx)(_,{compact:!e}),children:T.map(t=>{let o=!!t.children&&e,s=i===t.id,c=n===t.id;return(0,C.jsx)(u,{title:e?t.label:void 0,size:e?`default`:`small`,icon:t.icon,tooltip:e?void 0:t.label,selected:c&&!s,expandable:o,expanded:s,onExpandedChange:e=>a(e?t.id:null),onClick:()=>{t.children||r(t.id)},children:t.children?.map(e=>(0,C.jsx)(u,{title:e.label,level:2,disabled:e.disabled,selected:n===e.id,onClick:()=>{e.disabled||r(e.id)}},e.id))},t.id)})}),(0,C.jsxs)(`div`,{className:`flex min-w-0 flex-1 flex-col`,children:[(0,C.jsx)(A,{}),(0,C.jsx)(`div`,{className:`p-lg typography-body-small text-text flex-1`})]})]})}},M={parameters:{docs:{description:{story:"Wraps a real consumer logo in `NavigationLogo`. The dashed-border placeholder styling is reserved for the empty/sample case and must not appear here."}}},render:()=>(0,C.jsx)(E,{logo:e=>(0,C.jsx)(_,{compact:!e,children:e?(0,C.jsxs)(`span`,{className:`gap-sm flex items-center`,children:[(0,C.jsx)(`span`,{className:`bg-background-onlight text-text-ondark typography-label flex h-6 w-6 items-center justify-center rounded-md`,children:`A`}),(0,C.jsx)(`span`,{className:`typography-headline-06 text-text font-semibold`,children:`Acme Inc.`})]}):(0,C.jsx)(`span`,{className:`bg-background-onlight text-text-ondark typography-label flex h-6 w-6 items-center justify-center rounded-md`,children:`A`})})})},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <NavigationDemo logo={expanded => <NavigationLogo compact={!expanded} />} />
}`,...D.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Pairs the Navigation sidebar with the Header \`WithTwoLinks\` setup to show a complete app shell: sidebar on the left, top bar above the content area."
      }
    }
  },
  render: function Render() {
    const [expanded, setExpanded] = React.useState(true);
    const [selectedId, setSelectedId] = React.useState<string>("dashboard");
    const [openId, setOpenId] = React.useState<string | null>("projects");
    return <div className={cx("bg-background-accent", "flex", "min-h-screen")}>
        <Navigation expanded={expanded} onExpandedChange={setExpanded} logo={<NavigationLogo compact={!expanded} />}>
          {navItems.map(item => {
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
        <div className="flex min-w-0 flex-1 flex-col">
          <HeaderWithTwoLinks />
          <div className="p-lg typography-body-small text-text flex-1" />
        </div>
      </div>;
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Wraps a real consumer logo in \`NavigationLogo\`. The dashed-border placeholder styling is reserved for the empty/sample case and must not appear here."
      }
    }
  },
  render: () => <NavigationDemo logo={expanded => <NavigationLogo compact={!expanded}>
          {expanded ? <span className="gap-sm flex items-center">
              <span className="bg-background-onlight text-text-ondark typography-label flex h-6 w-6 items-center justify-center rounded-md">
                A
              </span>
              <span className="typography-headline-06 text-text font-semibold">
                Acme Inc.
              </span>
            </span> : <span className="bg-background-onlight text-text-ondark typography-label flex h-6 w-6 items-center justify-center rounded-md">
              A
            </span>}
        </NavigationLogo>} />
}`,...M.parameters?.docs?.source}}},N=[`Playground`,`WithHeader`,`WithCustomLogo`]}))();export{D as Playground,M as WithCustomLogo,j as WithHeader,N as __namedExportsOrder,w as default};