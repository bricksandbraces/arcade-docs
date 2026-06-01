import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Ba as n,Fi as r,Ii as i,J as a,Ki as o,Li as s,Q as c,Ti as l,X as u,Y as d,Z as f,ai as p,at as m,di as h,ga as g,go as _,it as v,la as y,lt as b,oa as x,pa as S,t as C,ta as w,to as T,tt as E,yi as D}from"./iframe-DQ0luLeR.js";import{r as O,t as k}from"./react-hzjDpolB.js";var A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{C(),p(),A=t(n(),1),k(),j=t(_(),1),M=T(),N={title:`Navigation/Navigation/Navigation`,component:v,tags:[`autodocs`],parameters:{layout:`fullscreen`,docs:{description:{component:`Collapsible side navigation with nested items. Use as the primary app chrome for switching between top-level sections.`}}}},P=e=>`/arcade-docs/assets/${e}`,F=({compact:e})=>{let t=P(e?`logo_small-dark.svg`:`logo_default-dark.svg`),n=P(e?`logo_small-light.svg`:`logo_default-light.svg`);return(0,M.jsx)(a,{compact:e,children:(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(`img`,{src:t,alt:``,className:(0,A.default)(`dark:hidden`,e?`size-full object-contain`:`h-[20px] w-auto max-w-full`)}),(0,M.jsx)(`img`,{src:n,alt:``,className:(0,A.default)(`hidden`,`dark:block`,e?`size-full object-contain`:`h-[20px] w-auto max-w-full`)})]})})},I=[{id:`dashboard`,label:`Dashboard`,icon:o},{id:`projects`,label:`Projects`,icon:s,children:[{id:`projects-all`,label:`All projects`},{id:`projects-archived`,label:`Archived`},{id:`projects-templates`,label:`Templates`,disabled:!0}]},{id:`team`,label:`Team`,icon:h},{id:`reports`,label:`Reports`,icon:w},{id:`settings`,label:`Settings`,icon:D}],L=I.slice(0,3),R=I.slice(3),z=[{id:`help`,label:`Help`,icon:r},{id:`docs`,label:`Documentation`,icon:x}],B=[{id:`l2-overview`,label:`Overview`},{id:`l2-members`,label:`Members`},{id:`l2-settings`,label:`Settings`},{id:`l2-billing`,label:`Billing`,disabled:!0}],V=[o,s,h,w,D,y],H=Array.from({length:30},(e,t)=>({id:`overflow-item-${t}`,label:`Item ${t+1}`,icon:V[t%V.length]})),U=({items:e,expanded:t,selectedId:n,setSelectedId:r,openId:i,setOpenId:a})=>(0,M.jsx)(M.Fragment,{children:e.map(e=>{let o=!!e.children,s=i===e.id,c=n===e.id,l=s&&t;return(0,M.jsx)(E,{title:t?e.label:void 0,size:t?`default`:`small`,icon:e.icon,tooltip:t?void 0:e.label,selected:c&&!s,expandable:o,expanded:l,onExpandedChange:t=>a(t?e.id:null),onClick:()=>{e.children||r(e.id)},children:e.children?.map(e=>(0,M.jsx)(E,{title:e.label,level:2,disabled:e.disabled,selected:n===e.id,onClick:()=>{e.disabled||r(e.id)}},e.id))},e.id)})}),W=({expanded:e,selectedId:t,setSelectedId:n,openId:r,setOpenId:i})=>(0,M.jsx)(`div`,{className:`gap-sm pt-sm flex w-full min-w-0 shrink-0 flex-col`,children:(0,M.jsx)(U,{items:z,expanded:e,selectedId:t,setSelectedId:n,openId:r,setOpenId:i})}),G=({logo:e,logoHoverMinimize:t})=>{let[n,r]=j.useState(!0),[i,a]=j.useState(`dashboard`),[o,s]=j.useState(`projects`);return(0,M.jsxs)(`div`,{className:(0,A.default)(`bg-background-accent`,`flex`,`min-h-screen`),children:[(0,M.jsxs)(v,{expanded:n,onExpandedChange:r,logo:e(n),logoHoverMinimize:t,footer:(0,M.jsx)(W,{expanded:n,selectedId:i,setSelectedId:a,openId:o,setOpenId:s}),children:[(0,M.jsx)(U,{items:L,expanded:n,selectedId:i,setSelectedId:a,openId:o,setOpenId:s}),(0,M.jsx)(d,{children:`Main`}),(0,M.jsx)(U,{items:R,expanded:n,selectedId:i,setSelectedId:a,openId:o,setOpenId:s})]}),(0,M.jsx)(`div`,{className:(0,A.default)(`p-lg`,`typography-body-small`,`text-text`,`flex-1`)})]})},K={render:()=>(0,M.jsx)(G,{logo:e=>(0,M.jsx)(F,{compact:!e}),logoHoverMinimize:!0})},q=({trailingSlot:e})=>(0,M.jsxs)(`div`,{className:`gap-xs flex items-center`,children:[(0,M.jsx)(g,{kind:`ghost`,IconLeft:D,size:`medium`,"aria-label":`Settings`}),(0,M.jsx)(g,{kind:`ghost`,IconLeft:y,size:`medium`,"aria-label":`Notifications`}),(0,M.jsx)(g,{kind:`ghost`,IconLeft:l,size:`medium`,"aria-label":`Menu`}),e]}),J=({drawerTrigger:e}={})=>{let[t,n]=j.useState(`products`);return(0,M.jsx)(m,{title:`Dashboard`,backButton:(0,M.jsx)(g,{kind:`ghost`,IconLeft:S,size:`medium`,"aria-label":`Go back`}),linkGroupOne:(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(b,{selected:t===`products`,onClick:()=>n(`products`),children:`Products`}),(0,M.jsx)(b,{selected:t===`resources`,onClick:()=>n(`resources`),children:`Resources`})]}),actions:(0,M.jsx)(q,{trailingSlot:e})})},Y={parameters:{docs:{description:{story:"Pairs the Navigation sidebar with the Header `WithTwoLinks` setup to show a complete app shell: sidebar on the left, top bar above the content area."}}},render:function(){let[e,t]=j.useState(!0),[n,r]=j.useState(`dashboard`),[i,a]=j.useState(`projects`);return(0,M.jsxs)(`div`,{className:(0,A.default)(`bg-background-accent`,`flex`,`min-h-screen`),children:[(0,M.jsxs)(v,{expanded:e,onExpandedChange:t,logo:(0,M.jsx)(F,{compact:!e}),logoHoverMinimize:!0,footer:(0,M.jsx)(W,{expanded:e,selectedId:n,setSelectedId:r,openId:i,setOpenId:a}),children:[(0,M.jsx)(U,{items:L,expanded:e,selectedId:n,setSelectedId:r,openId:i,setOpenId:a}),(0,M.jsx)(d,{children:`Main`}),(0,M.jsx)(U,{items:R,expanded:e,selectedId:n,setSelectedId:r,openId:i,setOpenId:a})]}),(0,M.jsxs)(`div`,{className:`flex min-w-0 flex-1 flex-col`,children:[(0,M.jsx)(J,{}),(0,M.jsx)(`div`,{className:`p-lg typography-body-small text-text flex-1`})]})]})}},X={name:`withOverflowGradient`,parameters:{docs:{description:{story:`Thirty top-level rows plus a fixed footer strip (Help, Documentation). The bottom scroll-fade sits on the top edge of the footer, like the dialog pattern.`}}},render:function(){let[e,t]=j.useState(!0),[n,r]=j.useState(`overflow-item-0`),[i,a]=j.useState(null);return(0,M.jsxs)(`div`,{className:(0,A.default)(`bg-background-accent`,`flex`,`min-h-screen`),children:[(0,M.jsx)(v,{expanded:e,onExpandedChange:t,logo:(0,M.jsx)(F,{compact:!e}),logoHoverMinimize:!0,footer:(0,M.jsx)(W,{expanded:e,selectedId:n,setSelectedId:r,openId:i,setOpenId:a}),children:(0,M.jsx)(U,{items:H,expanded:e,selectedId:n,setSelectedId:r,openId:i,setOpenId:a})}),(0,M.jsx)(`div`,{className:(0,A.default)(`p-lg`,`typography-body-small`,`text-text`,`flex-1`)})]})}},Z={parameters:{docs:{description:{story:"Wraps a real consumer logo in `NavigationLogo`. The dashed-border placeholder styling is reserved for the empty/sample case and must not appear here."}}},render:()=>(0,M.jsx)(G,{logoHoverMinimize:!0,logo:e=>(0,M.jsx)(a,{compact:!e,children:e?(0,M.jsxs)(`span`,{className:`gap-sm flex items-center`,children:[(0,M.jsx)(`span`,{className:`bg-background-onlight text-text-ondark typography-label flex h-6 w-6 items-center justify-center rounded-md`,children:`A`}),(0,M.jsx)(`span`,{className:`typography-headline-06 text-text font-semibold`,children:`Acme Inc.`})]}):(0,M.jsx)(`span`,{className:`bg-background-onlight text-text-ondark typography-label flex size-full items-center justify-center rounded-md`,children:`A`})})})},Q={name:`withLevel2Sidebar`,parameters:{docs:{description:{story:"Shell uses **CSS Grid**: primary `Navigation` spans the full height of column 1; column 2 has row 1 = **`Header`** (full width of the main column, unaffected by L2) and row 2 = **L2** + scrollable main. Below `md`, an **app icon** in the header opens **`NavigationDrawer`** (L1); choosing **Settings** runs the same **month-slide** transition as the Datepicker calendar, then shows L2 with a **Back** row. Closing the drawer resets its stack: reopening always starts on L1, even if desktop still has **Settings** selected."}}},render:function(){let[e,t]=j.useState(!0),[n,r]=j.useState(`projects`),[a,o]=j.useState(`projects`),[s,l]=j.useState(`l2-overview`),[p,m]=j.useState(!1),[h,_]=j.useState(!1),[y,b]=j.useState(1),x=j.useCallback(e=>{r(t=>{let n=typeof e==`function`?e(t):e;return n===`settings`&&t!==`settings`&&b(1),n})},[]),S=j.useCallback(e=>{r(t=>{let n=typeof e==`function`?e(t):e;return n===`settings`&&t!==`settings`&&(b(1),_(!0)),n})},[]),C=()=>{b(-1),r(`dashboard`),_(!1)},w=()=>{m(!1),_(!1)},T=(0,M.jsx)(g,{kind:`ghost`,IconLeft:i,size:`medium`,"aria-label":`Open navigation`,className:`md:hidden`,onClick:()=>m(!0)}),E=(0,M.jsxs)(v,{layout:`drawer`,drawerCloseInDrawerShell:!0,expanded:!0,onExpandedChange:()=>{},logo:(0,M.jsx)(F,{compact:!1}),footer:(0,M.jsx)(W,{expanded:!0,selectedId:n,setSelectedId:S,openId:a,setOpenId:o}),children:[(0,M.jsx)(U,{items:L,expanded:!0,selectedId:n,setSelectedId:S,openId:a,setOpenId:o}),(0,M.jsx)(d,{children:`Main`}),(0,M.jsx)(U,{items:R,expanded:!0,selectedId:n,setSelectedId:S,openId:a,setOpenId:o})]}),D=(0,M.jsx)(c,{layout:`drawer`,ariaLabel:`Settings sections`,children:B.map(e=>(0,M.jsx)(u,{title:e.label,disabled:e.disabled,selected:s===e.id,onClick:()=>{e.disabled||l(e.id)}},e.id))});return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsxs)(`div`,{className:(0,A.default)(`bg-background-accent`,`grid min-h-[100svh]`,`grid-cols-[auto_minmax(0,1fr)]`,`grid-rows-[auto_minmax(0,1fr)]`),children:[(0,M.jsx)(`div`,{className:`col-start-1 row-span-2 row-start-1 min-h-0`,children:(0,M.jsxs)(v,{expanded:e,onExpandedChange:t,logo:(0,M.jsx)(F,{compact:!e}),logoHoverMinimize:!0,footer:(0,M.jsx)(W,{expanded:e,selectedId:n,setSelectedId:x,openId:a,setOpenId:o}),children:[(0,M.jsx)(U,{items:L,expanded:e,selectedId:n,setSelectedId:x,openId:a,setOpenId:o}),(0,M.jsx)(d,{children:`Main`}),(0,M.jsx)(U,{items:R,expanded:e,selectedId:n,setSelectedId:x,openId:a,setOpenId:o})]})}),(0,M.jsx)(`div`,{className:`col-start-2 row-start-1 min-w-0 self-start`,children:(0,M.jsx)(J,{drawerTrigger:T})}),(0,M.jsxs)(`div`,{className:(0,A.default)(`col-start-2 row-start-2`,`flex min-h-0 min-w-0`),children:[(0,M.jsx)(O,{children:n===`settings`?(0,M.jsx)(c,{ariaLabel:`Settings sections`,children:B.map(e=>(0,M.jsx)(u,{title:e.label,disabled:e.disabled,selected:s===e.id,onClick:()=>{e.disabled||l(e.id)}},e.id))},`navigation-l2`):null}),(0,M.jsx)(`div`,{className:(0,A.default)(`min-h-0 min-w-0 flex-1`,`p-lg`,`typography-body-small`,`text-text`,`overflow-auto`)})]})]}),(0,M.jsx)(f,{open:p,onClose:w,stackDirection:y,showSecondary:h,onBack:C,secondaryTitle:`Settings`,primary:E,secondary:D})]})}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => <NavigationDemo logo={expanded => <StoryNavigationLogo compact={!expanded} />} logoHoverMinimize />
}`,...K.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
          <div className="col-start-1 row-span-2 row-start-1 min-h-0">
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
}`,...Q.parameters?.docs?.source}}},$=[`Playground`,`WithHeader`,`WithOverflowGradient`,`WithCustomLogo`,`WithLevel2Sidebar`]}))();export{K as Playground,Z as WithCustomLogo,Y as WithHeader,Q as WithLevel2Sidebar,X as WithOverflowGradient,$ as __namedExportsOrder,N as default};