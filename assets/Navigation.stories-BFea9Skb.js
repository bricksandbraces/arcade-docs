import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Fr as n,Gr as r,Ir as i,Mi as a,Pr as o,Tr as s,Xr as c,_t as l,ai as u,at as d,br as f,bt as p,ca as m,ci as h,cr as g,ei as _,fr as v,it as ee,lt as y,nt as b,ot as x,qi as S,ri as C,rt as w,t as T,tt as E}from"./iframe-BmX5hFjR.js";import{r as D,t as O}from"./react-Dq0V8s40.js";var k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{T(),g(),k=t(a(),1),O(),A=t(m(),1),j=S(),M={title:`Components/Navigation/Navigation`,component:y,tags:[`autodocs`],parameters:{layout:`fullscreen`,docs:{description:{component:`Collapsible side navigation with nested items. Use as the primary app chrome for switching between top-level sections.`}}}},N=e=>`/arcade-docs/assets/${e}`,P=({compact:e})=>{let t=N(e?`logo_small-dark.svg`:`logo_default-dark.svg`),n=N(e?`logo_small-light.svg`:`logo_default-light.svg`);return(0,j.jsx)(E,{compact:e,children:(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(`img`,{src:t,alt:``,className:(0,k.default)(`dark:hidden`,e?`size-full object-contain`:`h-[20px] w-auto max-w-full`)}),(0,j.jsx)(`img`,{src:n,alt:``,className:(0,k.default)(`hidden`,`dark:block`,e?`size-full object-contain`:`h-[20px] w-auto max-w-full`)})]})})},F=[{id:`dashboard`,label:`Dashboard`,icon:r},{id:`projects`,label:`Projects`,icon:i,children:[{id:`projects-all`,label:`All projects`},{id:`projects-archived`,label:`Archived`},{id:`projects-templates`,label:`Templates`,disabled:!0}]},{id:`team`,label:`Team`,icon:v},{id:`reports`,label:`Reports`,icon:c},{id:`settings`,label:`Settings`,icon:f}],I=F.slice(0,3),L=F.slice(3),R=[{id:`help`,label:`Help`,icon:o},{id:`docs`,label:`Documentation`,icon:_}],z=[{id:`l2-overview`,label:`Overview`},{id:`l2-members`,label:`Members`},{id:`l2-settings`,label:`Settings`},{id:`l2-billing`,label:`Billing`,disabled:!0}],B=[r,i,v,c,f,C],V=Array.from({length:30},(e,t)=>({id:`overflow-item-${t}`,label:`Item ${t+1}`,icon:B[t%B.length]})),H=({items:e,expanded:t,selectedId:n,setSelectedId:r,openId:i,setOpenId:a})=>(0,j.jsx)(j.Fragment,{children:e.map(e=>{let o=!!e.children,s=i===e.id,c=n===e.id,l=s&&t;return(0,j.jsx)(x,{title:t?e.label:void 0,size:t?`default`:`small`,icon:e.icon,tooltip:t?void 0:e.label,selected:c&&!s,expandable:o,expanded:l,onExpandedChange:t=>a(t?e.id:null),onClick:()=>{e.children||r(e.id)},children:e.children?.map(e=>(0,j.jsx)(x,{title:e.label,level:2,disabled:e.disabled,selected:n===e.id,onClick:()=>{e.disabled||r(e.id)}},e.id))},e.id)})}),U=({expanded:e,selectedId:t,setSelectedId:n,openId:r,setOpenId:i})=>(0,j.jsx)(`div`,{className:`flex min-w-0 w-full shrink-0 flex-col gap-sm pt-sm`,children:(0,j.jsx)(H,{items:R,expanded:e,selectedId:t,setSelectedId:n,openId:r,setOpenId:i})}),W=({logo:e,logoHoverMinimize:t})=>{let[n,r]=A.useState(!0),[i,a]=A.useState(`dashboard`),[o,s]=A.useState(`projects`);return(0,j.jsxs)(`div`,{className:(0,k.default)(`bg-background-accent`,`flex`,`min-h-screen`),children:[(0,j.jsxs)(y,{expanded:n,onExpandedChange:r,logo:e(n),logoHoverMinimize:t,footer:(0,j.jsx)(U,{expanded:n,selectedId:i,setSelectedId:a,openId:o,setOpenId:s}),children:[(0,j.jsx)(H,{items:I,expanded:n,selectedId:i,setSelectedId:a,openId:o,setOpenId:s}),(0,j.jsx)(b,{children:`Main`}),(0,j.jsx)(H,{items:L,expanded:n,selectedId:i,setSelectedId:a,openId:o,setOpenId:s})]}),(0,j.jsx)(`div`,{className:(0,k.default)(`p-lg`,`typography-body-small`,`text-text`,`flex-1`)})]})},G={render:()=>(0,j.jsx)(W,{logo:e=>(0,j.jsx)(P,{compact:!e}),logoHoverMinimize:!0})},K=({trailingSlot:e})=>(0,j.jsxs)(`div`,{className:`gap-xs flex items-center`,children:[(0,j.jsx)(h,{kind:`ghost`,IconLeft:f,size:`medium`,"aria-label":`Settings`}),(0,j.jsx)(h,{kind:`ghost`,IconLeft:C,size:`medium`,"aria-label":`Notifications`}),(0,j.jsx)(h,{kind:`ghost`,IconLeft:s,size:`medium`,"aria-label":`Menu`}),e]}),q=()=>(0,j.jsx)(E,{compact:!0,children:(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(`img`,{src:N(`logo_small-dark.svg`),alt:``,className:`size-full object-contain dark:hidden`}),(0,j.jsx)(`img`,{src:N(`logo_small-light.svg`),alt:``,className:`hidden size-full object-contain dark:block`})]})}),J=({drawerTrigger:e}={})=>{let[t,n]=A.useState(`products`);return(0,j.jsx)(l,{title:`Dashboard`,companyLogo:(0,j.jsx)(q,{}),companyLogoHref:`#`,backButton:(0,j.jsx)(h,{kind:`ghost`,IconLeft:u,size:`medium`,"aria-label":`Go back`}),linkGroupOne:(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(p,{selected:t===`products`,onClick:()=>n(`products`),children:`Products`}),(0,j.jsx)(p,{selected:t===`resources`,onClick:()=>n(`resources`),children:`Resources`})]}),actions:(0,j.jsx)(K,{trailingSlot:e})})},Y={parameters:{docs:{description:{story:"Pairs the Navigation sidebar with the Header `WithTwoLinks` setup to show a complete app shell: sidebar on the left, top bar above the content area."}}},render:function(){let[e,t]=A.useState(!0),[n,r]=A.useState(`dashboard`),[i,a]=A.useState(`projects`);return(0,j.jsxs)(`div`,{className:(0,k.default)(`bg-background-accent`,`flex`,`min-h-screen`),children:[(0,j.jsxs)(y,{expanded:e,onExpandedChange:t,logo:(0,j.jsx)(P,{compact:!e}),logoHoverMinimize:!0,footer:(0,j.jsx)(U,{expanded:e,selectedId:n,setSelectedId:r,openId:i,setOpenId:a}),children:[(0,j.jsx)(H,{items:I,expanded:e,selectedId:n,setSelectedId:r,openId:i,setOpenId:a}),(0,j.jsx)(b,{children:`Main`}),(0,j.jsx)(H,{items:L,expanded:e,selectedId:n,setSelectedId:r,openId:i,setOpenId:a})]}),(0,j.jsxs)(`div`,{className:`flex min-w-0 flex-1 flex-col`,children:[(0,j.jsx)(J,{}),(0,j.jsx)(`div`,{className:`p-lg typography-body-small text-text flex-1`})]})]})}},X={name:`withOverflowGradient`,parameters:{docs:{description:{story:`Thirty top-level rows plus a fixed footer strip (Help, Documentation). The bottom scroll-fade sits on the top edge of the footer, like the dialog pattern.`}}},render:function(){let[e,t]=A.useState(!0),[n,r]=A.useState(`overflow-item-0`),[i,a]=A.useState(null);return(0,j.jsxs)(`div`,{className:(0,k.default)(`bg-background-accent`,`flex`,`min-h-screen`),children:[(0,j.jsx)(y,{expanded:e,onExpandedChange:t,logo:(0,j.jsx)(P,{compact:!e}),logoHoverMinimize:!0,footer:(0,j.jsx)(U,{expanded:e,selectedId:n,setSelectedId:r,openId:i,setOpenId:a}),children:(0,j.jsx)(H,{items:V,expanded:e,selectedId:n,setSelectedId:r,openId:i,setOpenId:a})}),(0,j.jsx)(`div`,{className:(0,k.default)(`p-lg`,`typography-body-small`,`text-text`,`flex-1`)})]})}},Z={parameters:{docs:{description:{story:"Wraps a real consumer logo in `NavigationLogo`. The dashed-border placeholder styling is reserved for the empty/sample case and must not appear here."}}},render:()=>(0,j.jsx)(W,{logoHoverMinimize:!0,logo:e=>(0,j.jsx)(E,{compact:!e,children:e?(0,j.jsxs)(`span`,{className:`gap-sm flex items-center`,children:[(0,j.jsx)(`span`,{className:`bg-background-onlight text-text-ondark typography-label flex h-6 w-6 items-center justify-center rounded-md`,children:`A`}),(0,j.jsx)(`span`,{className:`typography-headline-06 text-text font-semibold`,children:`Acme Inc.`})]}):(0,j.jsx)(`span`,{className:`bg-background-onlight text-text-ondark typography-label flex size-full items-center justify-center rounded-md`,children:`A`})})})},Q={name:`withLevel2Sidebar`,parameters:{docs:{description:{story:"Shell uses **CSS Grid**: primary `Navigation` spans the full height of column 1; column 2 has row 1 = **`Header`** (full width of the main column, unaffected by L2) and row 2 = **L2** + scrollable main. Below `md`, an **app icon** in the header opens **`NavigationDrawer`** (L1); choosing **Settings** runs the same **month-slide** transition as the Datepicker calendar, then shows L2 with a **Back** row. Closing the drawer resets its stack: reopening always starts on L1, even if desktop still has **Settings** selected."}}},render:function(){let[e,t]=A.useState(!0),[r,i]=A.useState(`projects`),[a,o]=A.useState(`projects`),[s,c]=A.useState(`l2-overview`),[l,u]=A.useState(!1),[f,p]=A.useState(!1),[m,g]=A.useState(1),_=A.useCallback(e=>{i(t=>{let n=typeof e==`function`?e(t):e;return n===`settings`&&t!==`settings`&&g(1),n})},[]),v=A.useCallback(e=>{i(t=>{let n=typeof e==`function`?e(t):e;return n===`settings`&&t!==`settings`&&(g(1),p(!0)),n})},[]),x=()=>{g(-1),i(`dashboard`),p(!1)},S=()=>{u(!1),p(!1)},C=(0,j.jsx)(h,{kind:`ghost`,IconLeft:n,size:`medium`,"aria-label":`Open navigation`,className:`md:hidden`,onClick:()=>u(!0)}),T=(0,j.jsxs)(y,{layout:`drawer`,drawerCloseInDrawerShell:!0,expanded:!0,onExpandedChange:()=>{},logo:(0,j.jsx)(P,{compact:!1}),footer:(0,j.jsx)(U,{expanded:!0,selectedId:r,setSelectedId:v,openId:a,setOpenId:o}),children:[(0,j.jsx)(H,{items:I,expanded:!0,selectedId:r,setSelectedId:v,openId:a,setOpenId:o}),(0,j.jsx)(b,{children:`Main`}),(0,j.jsx)(H,{items:L,expanded:!0,selectedId:r,setSelectedId:v,openId:a,setOpenId:o})]}),E=(0,j.jsx)(d,{layout:`drawer`,ariaLabel:`Settings sections`,children:z.map(e=>(0,j.jsx)(w,{title:e.label,disabled:e.disabled,selected:s===e.id,onClick:()=>{e.disabled||c(e.id)}},e.id))});return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(`div`,{className:(0,k.default)(`bg-background-accent`,`grid min-h-[100svh]`,`grid-cols-[auto_minmax(0,1fr)]`,`grid-rows-[auto_minmax(0,1fr)]`),children:[(0,j.jsx)(`div`,{className:`col-start-1 row-start-1 row-span-2 min-h-0`,children:(0,j.jsxs)(y,{expanded:e,onExpandedChange:t,logo:(0,j.jsx)(P,{compact:!e}),logoHoverMinimize:!0,footer:(0,j.jsx)(U,{expanded:e,selectedId:r,setSelectedId:_,openId:a,setOpenId:o}),children:[(0,j.jsx)(H,{items:I,expanded:e,selectedId:r,setSelectedId:_,openId:a,setOpenId:o}),(0,j.jsx)(b,{children:`Main`}),(0,j.jsx)(H,{items:L,expanded:e,selectedId:r,setSelectedId:_,openId:a,setOpenId:o})]})}),(0,j.jsx)(`div`,{className:`col-start-2 row-start-1 min-w-0 self-start`,children:(0,j.jsx)(J,{drawerTrigger:C})}),(0,j.jsxs)(`div`,{className:(0,k.default)(`col-start-2 row-start-2`,`flex min-h-0 min-w-0`),children:[(0,j.jsx)(D,{children:r===`settings`?(0,j.jsx)(d,{ariaLabel:`Settings sections`,children:z.map(e=>(0,j.jsx)(w,{title:e.label,disabled:e.disabled,selected:s===e.id,onClick:()=>{e.disabled||c(e.id)}},e.id))},`navigation-l2`):null}),(0,j.jsx)(`div`,{className:(0,k.default)(`min-h-0 min-w-0 flex-1`,`p-lg`,`typography-body-small`,`text-text`,`overflow-auto`)})]})]}),(0,j.jsx)(ee,{open:l,onClose:S,stackDirection:m,showSecondary:f,onBack:x,secondaryTitle:`Settings`,primary:T,secondary:E})]})}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => <NavigationDemo logo={expanded => <StoryNavigationLogo compact={!expanded} />} logoHoverMinimize />
}`,...G.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
        <Navigation expanded={expanded} onExpandedChange={setExpanded} logo={<StoryNavigationLogo compact={!expanded} />} logoHoverMinimize footer={<StoryNavigationFooter expanded={expanded} selectedId={selectedId} setSelectedId={setSelectedId} openId={openId} setOpenId={setOpenId} />}>
          <StoryNavigationItemRows items={navItemsBeforeHeader} expanded={expanded} selectedId={selectedId} setSelectedId={setSelectedId} openId={openId} setOpenId={setOpenId} />
          <NavigationHeader>Main</NavigationHeader>
          <StoryNavigationItemRows items={navItemsAfterHeader} expanded={expanded} selectedId={selectedId} setSelectedId={setSelectedId} openId={openId} setOpenId={setOpenId} />
        </Navigation>
        <div className="flex min-w-0 flex-1 flex-col">
          <HeaderWithTwoLinks />
          <div className="p-lg typography-body-small text-text flex-1" />
        </div>
      </div>;
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: "withOverflowGradient",
  parameters: {
    docs: {
      description: {
        story: "Thirty top-level rows plus a fixed footer strip (Help, Documentation). The bottom scroll-fade sits on the top edge of the footer, like the dialog pattern."
      }
    }
  },
  render: function WithOverflowGradientRender() {
    const [expanded, setExpanded] = React.useState(true);
    const [selectedId, setSelectedId] = React.useState<string>("overflow-item-0");
    const [openId, setOpenId] = React.useState<string | null>(null);
    return <div className={cx("bg-background-accent", "flex", "min-h-screen")}>
        <Navigation expanded={expanded} onExpandedChange={setExpanded} logo={<StoryNavigationLogo compact={!expanded} />} logoHoverMinimize footer={<StoryNavigationFooter expanded={expanded} selectedId={selectedId} setSelectedId={setSelectedId} openId={openId} setOpenId={setOpenId} />}>
          <StoryNavigationItemRows items={navItemsOverflowGradient} expanded={expanded} selectedId={selectedId} setSelectedId={setSelectedId} openId={openId} setOpenId={setOpenId} />
        </Navigation>
        <div className={cx("p-lg", "typography-body-small", "text-text", "flex-1")} />
      </div>;
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Wraps a real consumer logo in \`NavigationLogo\`. The dashed-border placeholder styling is reserved for the empty/sample case and must not appear here."
      }
    }
  },
  render: () => <NavigationDemo logoHoverMinimize logo={expanded => <NavigationLogo compact={!expanded}>
          {expanded ? <span className="gap-sm flex items-center">
              <span className="bg-background-onlight text-text-ondark typography-label flex h-6 w-6 items-center justify-center rounded-md">
                A
              </span>
              <span className="typography-headline-06 text-text font-semibold">
                Acme Inc.
              </span>
            </span> : <span className="bg-background-onlight text-text-ondark typography-label flex size-full items-center justify-center rounded-md">
              A
            </span>}
        </NavigationLogo>} />
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  name: "withLevel2Sidebar",
  parameters: {
    docs: {
      description: {
        story: "Shell uses **CSS Grid**: primary \`Navigation\` spans the full height of column 1; column 2 has row 1 = **\`Header\`** (full width of the main column, unaffected by L2) and row 2 = **L2** + scrollable main. Below \`md\`, an **app icon** in the header opens **\`NavigationDrawer\`** (L1); choosing **Settings** runs the same **month-slide** transition as the Datepicker calendar, then shows L2 with a **Back** row. Closing the drawer resets its stack: reopening always starts on L1, even if desktop still has **Settings** selected."
      }
    }
  },
  render: function WithLevel2SidebarRender() {
    const [expanded, setExpanded] = React.useState(true);
    const [selectedId, setSelectedId] = React.useState<string>("projects");
    const [openId, setOpenId] = React.useState<string | null>("projects");
    const [l2SelectedId, setL2SelectedId] = React.useState("l2-overview");
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    /** L2 stack inside the mobile drawer only — reset when the drawer closes so reopen always starts on L1. */
    const [drawerShowL2, setDrawerShowL2] = React.useState(false);
    const [navStackDir, setNavStackDir] = React.useState<1 | -1>(1);
    const setSelectedIdWithStack = React.useCallback((value: React.SetStateAction<string>) => {
      setSelectedId(prev => {
        const next = typeof value === "function" ? value(prev) : value;
        if (next === "settings" && prev !== "settings") {
          setNavStackDir(1);
        }
        return next;
      });
    }, []);
    const setSelectedIdWithStackDrawer = React.useCallback((value: React.SetStateAction<string>) => {
      setSelectedId(prev => {
        const next = typeof value === "function" ? value(prev) : value;
        if (next === "settings" && prev !== "settings") {
          setNavStackDir(1);
          setDrawerShowL2(true);
        }
        return next;
      });
    }, []);
    const handleDrawerL2Back = () => {
      setNavStackDir(-1);
      setSelectedId("dashboard");
      setDrawerShowL2(false);
    };
    const handleDrawerClose = () => {
      setDrawerOpen(false);
      setDrawerShowL2(false);
    };
    const drawerTrigger = <Button kind="ghost" IconLeft={IconGridDots} size="medium" aria-label="Open navigation" className="md:hidden" onClick={() => setDrawerOpen(true)} />;
    const drawerPrimary = <Navigation layout="drawer" drawerCloseInDrawerShell expanded onExpandedChange={() => {}} logo={<StoryNavigationLogo compact={false} />} footer={<StoryNavigationFooter expanded selectedId={selectedId} setSelectedId={setSelectedIdWithStackDrawer} openId={openId} setOpenId={setOpenId} />}>
        <StoryNavigationItemRows items={navItemsBeforeHeader} expanded selectedId={selectedId} setSelectedId={setSelectedIdWithStackDrawer} openId={openId} setOpenId={setOpenId} />
        <NavigationHeader>Main</NavigationHeader>
        <StoryNavigationItemRows items={navItemsAfterHeader} expanded selectedId={selectedId} setSelectedId={setSelectedIdWithStackDrawer} openId={openId} setOpenId={setOpenId} />
      </Navigation>;
    const drawerSecondary = <NavigationL2 layout="drawer" ariaLabel="Settings sections">
        {l2NavItems.map(item => <NavigationL2Item key={item.id} title={item.label} disabled={item.disabled} selected={l2SelectedId === item.id} onClick={() => {
        if (!item.disabled) setL2SelectedId(item.id);
      }} />)}
      </NavigationL2>;
    return <>
        <div className={cx("bg-background-accent", "grid min-h-[100svh]", "grid-cols-[auto_minmax(0,1fr)]", "grid-rows-[auto_minmax(0,1fr)]")}>
          <div className="col-start-1 row-start-1 row-span-2 min-h-0">
            <Navigation expanded={expanded} onExpandedChange={setExpanded} logo={<StoryNavigationLogo compact={!expanded} />} logoHoverMinimize footer={<StoryNavigationFooter expanded={expanded} selectedId={selectedId} setSelectedId={setSelectedIdWithStack} openId={openId} setOpenId={setOpenId} />}>
              <StoryNavigationItemRows items={navItemsBeforeHeader} expanded={expanded} selectedId={selectedId} setSelectedId={setSelectedIdWithStack} openId={openId} setOpenId={setOpenId} />
              <NavigationHeader>Main</NavigationHeader>
              <StoryNavigationItemRows items={navItemsAfterHeader} expanded={expanded} selectedId={selectedId} setSelectedId={setSelectedIdWithStack} openId={openId} setOpenId={setOpenId} />
            </Navigation>
          </div>
          <div className="col-start-2 row-start-1 min-w-0 self-start">
            <HeaderWithTwoLinks drawerTrigger={drawerTrigger} />
          </div>
          <div className={cx("col-start-2 row-start-2", "flex min-h-0 min-w-0")}>
            <AnimatePresence>
              {selectedId === "settings" ? <NavigationL2 key="navigation-l2" ariaLabel="Settings sections">
                  {l2NavItems.map(item => <NavigationL2Item key={item.id} title={item.label} disabled={item.disabled} selected={l2SelectedId === item.id} onClick={() => {
                if (!item.disabled) setL2SelectedId(item.id);
              }} />)}
                </NavigationL2> : null}
            </AnimatePresence>
            <div className={cx("min-h-0 min-w-0 flex-1", "p-lg", "typography-body-small", "text-text", "overflow-auto")} />
          </div>
        </div>
        <NavigationDrawer open={drawerOpen} onClose={handleDrawerClose} stackDirection={navStackDir} showSecondary={drawerShowL2} onBack={handleDrawerL2Back} secondaryTitle="Settings" primary={drawerPrimary} secondary={drawerSecondary} />
      </>;
  }
}`,...Q.parameters?.docs?.source}}},$=[`Playground`,`WithHeader`,`WithOverflowGradient`,`WithCustomLogo`,`WithLevel2Sidebar`]}))();export{G as Playground,Z as WithCustomLogo,Y as WithHeader,Q as WithLevel2Sidebar,X as WithOverflowGradient,$ as __namedExportsOrder,M as default};