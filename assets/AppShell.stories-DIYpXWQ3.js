import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{$ as n,$i as r,Ba as i,Cr as a,Ei as o,Gi as s,J as c,Jt as l,Q as u,Qt as d,Ri as f,X as p,ai as m,at as h,en as g,et as _,ga as v,go as y,in as b,lt as x,q as S,rn as C,t as w,to as T,ua as E,yi as D}from"./iframe-BmHhhjqm.js";var O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J;e((()=>{w(),m(),O=t(i(),1),k=t(y(),1),A=T(),j={title:`Layout & Structure/AppShell`,component:S,tags:[`autodocs`],parameters:{layout:`fullscreen`,backgrounds:{default:`background-app`},docs:{description:{component:"Top-level application layout. Compound API mirrors Carbon's UI Shell: `AppShell.SideNav`, `AppShell.Header`, `AppShell.Content` (optional desktop L2 + main stack), `AppShell.Main`, `AppShell.SkipLink`, plus `AppShell.NavItem` for rail/drawer. Subscription / role gating via `allowedPaths`."}}}},M=[{path:`/studios`,icon:o,label:`Studios`},{path:`/workouts`,icon:E,label:`Workouts`},{path:`/devices`,icon:s,label:`Devices`},{path:`/settings`,icon:D,label:`Settings`}],N=e=>`/arcade-docs/assets/${e}`,P=(0,A.jsx)(`img`,{src:`https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1600&q=80`,alt:``,className:`size-full object-cover object-top`}),F=()=>{let{railExpanded:e}=n(),t=_()===`rail`&&!e,r=N(t?`logo_small-dark.svg`:`logo_default-dark.svg`),i=N(t?`logo_small-light.svg`:`logo_default-light.svg`);return(0,A.jsx)(c,{compact:t,children:(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(`img`,{src:r,alt:``,className:(0,O.default)(`dark:hidden`,t?`size-full object-contain`:`h-[20px] w-auto max-w-full`)}),(0,A.jsx)(`img`,{src:i,alt:``,className:(0,O.default)(`hidden`,`dark:block`,t?`size-full object-contain`:`h-[20px] w-auto max-w-full`)})]})})},I=()=>(0,A.jsxs)(`div`,{className:`gap-xs flex items-center`,children:[(0,A.jsx)(a,{size:`small`,name:`Ada Lovelace`}),(0,A.jsx)(v,{kind:`ghost`,size:`medium`,variant:`rounded`,IconLeft:r,"aria-label":`Open user menu`})]}),L=(0,A.jsx)(`div`,{className:`px-2xlg pb-2xlg`,children:(0,A.jsxs)(`p`,{className:`typography-body text-text-label`,children:[`Body copy scrolls inside `,(0,A.jsx)(`code`,{className:`text-text`,children:`AppShell.Main`}),`. The rail (desktop) and the drawer (mobile) share the same`,` `,(0,A.jsx)(`code`,{className:`text-text`,children:`AppShell.NavItem`}),` children — try the mobile viewport to open the drawer.`]})}),R=({selectedPath:e})=>M.map(t=>(0,A.jsx)(S.NavItem,{path:t.path,icon:t.icon,label:t.label,selected:e===t.path},t.path)),z=()=>{let[e,t]=k.useState(`/studios`),n=M.find(t=>t.path===e)?.label??`Page`;return(0,A.jsxs)(S,{defaultRailExpanded:!1,children:[(0,A.jsx)(S.SkipLink,{}),(0,A.jsx)(S.SideNav,{logo:(0,A.jsx)(F,{}),children:M.map(n=>(0,A.jsx)(S.NavItem,{path:n.path,icon:n.icon,label:n.label,selected:e===n.path,onClick:()=>t(n.path)},n.path))}),(0,A.jsxs)(S.Body,{children:[(0,A.jsx)(S.Header,{children:(0,A.jsx)(h,{title:`Acme`,showBackButton:!1,linkGroupOne:(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(x,{onClick:()=>{},children:`Report issue`}),(0,A.jsx)(x,{onClick:()=>{},children:`Request feature`})]}),actions:(0,A.jsx)(I,{})})}),(0,A.jsx)(S.Content,{children:(0,A.jsxs)(S.Main,{contentKey:e,children:[(0,A.jsx)(l,{variant:`gradient`,title:n,description:`Overview for the selected section. Switch routes in the rail or drawer to update this hero.`,image:P,actionBleed:`small`,action:(0,A.jsx)(v,{kind:`secondary`,variant:`rounded`,label:`Add new`})}),L]})})]})]})},B={render:()=>(0,A.jsx)(z,{})},V={render:()=>(0,A.jsxs)(S,{allowedPaths:[`/settings`],children:[(0,A.jsx)(S.SkipLink,{}),(0,A.jsx)(S.SideNav,{logo:(0,A.jsx)(F,{}),children:(0,A.jsx)(R,{selectedPath:`/settings`})}),(0,A.jsxs)(S.Body,{children:[(0,A.jsx)(S.Header,{children:(0,A.jsx)(h,{title:`Acme — billing required`,showBackButton:!1,actions:(0,A.jsx)(I,{})})}),(0,A.jsx)(S.Content,{children:(0,A.jsxs)(S.Main,{children:[(0,A.jsx)(l,{variant:`none`,title:`Only /settings is reachable`,description:`Navigation is gated with allowedPaths — other routes are hidden from the rail and drawer.`,actionBleed:`small`,action:(0,A.jsx)(v,{kind:`primary`,variant:`rounded`,label:`Manage billing`})}),L]})})]})]})},H={render:()=>(0,A.jsxs)(S,{defaultRailExpanded:!0,children:[(0,A.jsx)(S.SkipLink,{}),(0,A.jsx)(S.SideNav,{logo:(0,A.jsx)(F,{}),children:(0,A.jsx)(R,{selectedPath:`/studios`})}),(0,A.jsxs)(S.Body,{children:[(0,A.jsx)(S.Header,{children:(0,A.jsx)(h,{title:`Acme`,showBackButton:!1,actions:(0,A.jsx)(I,{})})}),(0,A.jsx)(S.Content,{children:(0,A.jsxs)(S.Main,{children:[(0,A.jsx)(l,{variant:`progressiveBlur`,title:`Studios — with in-page filter influencer`,description:`PageHead sits full-bleed above the grid row. The filter rail is a second influencer inside GridWrapper.`,image:P,actionBleed:`small`,action:(0,A.jsx)(v,{kind:`secondary`,variant:`rounded`,label:`Add studio`})}),(0,A.jsxs)(C,{className:`py-2xlg`,mode:`fullwidth`,children:[(0,A.jsx)(g,{children:(0,A.jsxs)(`aside`,{className:`bg-background-secondary p-md gap-sm flex w-[240px] flex-col rounded-md`,children:[(0,A.jsxs)(`div`,{className:`gap-xs flex items-center`,children:[(0,A.jsx)(f,{size:16}),(0,A.jsx)(`span`,{className:`text-sm font-medium`,children:`Filters`})]}),(0,A.jsx)(v,{kind:`secondary`,size:`small`,label:`By location`}),(0,A.jsx)(v,{kind:`secondary`,size:`small`,label:`By status`})]})}),(0,A.jsx)(d,{children:(0,A.jsx)(b,{sm:4,md:8,lg:16,children:L})})]})]})})]})]})},U=()=>{let[e,t]=k.useState(!1);return(0,A.jsxs)(S,{defaultRailExpanded:!0,l2Open:e,onL2OpenChange:t,children:[(0,A.jsx)(S.SkipLink,{}),(0,A.jsx)(S.SideNav,{logo:(0,A.jsx)(F,{}),children:(0,A.jsx)(R,{selectedPath:`/studios`})}),(0,A.jsxs)(S.Body,{children:[(0,A.jsx)(S.Header,{children:(0,A.jsx)(h,{title:`Acme`,showBackButton:!1,linkGroupOne:(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(x,{onClick:()=>{},children:`Report issue`}),(0,A.jsx)(x,{onClick:()=>{},children:`Request feature`})]}),actions:(0,A.jsx)(I,{})})}),(0,A.jsx)(S.Content,{l2:(0,A.jsxs)(u,{ariaLabel:`Studios section`,children:[(0,A.jsx)(p,{title:`Members`,selected:!0}),(0,A.jsx)(p,{title:`Schedules`}),(0,A.jsx)(p,{title:`Billing`})]}),children:(0,A.jsx)(S.Main,{children:(0,A.jsxs)(`div`,{className:`p-2xlg`,children:[(0,A.jsx)(`h1`,{className:`mb-md text-2xl font-semibold`,children:`Desktop L2 stack`}),(0,A.jsxs)(`p`,{className:`text-text-label mb-lg max-w-prose`,children:[`Matches the App Shell template: container 1 (L2 surface) at z-10, L2 at z-11, main chrome at z-20. Toggle to slide the main panel and reveal L2 (`,(0,A.jsx)(`a`,{className:`text-text-link underline`,href:`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=5007-3488`,target:`_blank`,rel:`noreferrer`,children:`Figma`}),`).`]}),(0,A.jsx)(v,{kind:`secondary`,size:`medium`,label:e?`Cover L2`:`Reveal L2`,onClick:()=>t(!e)})]})})})]})]})},W={render:()=>(0,A.jsx)(U,{})},G=()=>{let[e,t]=k.useState(`/studios`),[n,r]=k.useState(!0),[i,a]=k.useState(`members`),o=e===`/studios`;return(0,A.jsxs)(S,{defaultRailExpanded:!0,l2Open:o?n:!1,onL2OpenChange:r,children:[(0,A.jsx)(S.SkipLink,{}),(0,A.jsx)(S.SideNav,{logo:(0,A.jsx)(F,{}),children:M.map(n=>(0,A.jsx)(S.NavItem,{path:n.path,icon:n.icon,label:n.label,selected:e===n.path,onClick:()=>t(n.path)},n.path))}),(0,A.jsxs)(S.Body,{children:[(0,A.jsx)(S.Header,{children:(0,A.jsx)(h,{title:`Acme`,showBackButton:!1,actions:(0,A.jsx)(I,{})})}),(0,A.jsx)(S.Content,{l2:o?(0,A.jsxs)(u,{ariaLabel:`Studios`,children:[(0,A.jsx)(p,{title:`Members`,selected:i===`members`,onClick:()=>a(`members`)}),(0,A.jsx)(p,{title:`Schedules`,selected:i===`schedules`,onClick:()=>a(`schedules`)}),(0,A.jsx)(p,{title:`Billing`,selected:i===`billing`,onClick:()=>a(`billing`)}),(0,A.jsx)(p,{title:`Integrations`,selected:i===`integrations`,onClick:()=>a(`integrations`)})]}):void 0,children:(0,A.jsx)(S.Main,{contentKey:`${e}:${i}`,children:(0,A.jsxs)(`div`,{className:`p-2xlg`,children:[(0,A.jsx)(`h1`,{className:`mb-md text-2xl font-semibold`,children:M.find(t=>t.path===e)?.label??`App`}),(0,A.jsx)(`p`,{className:`text-text-label mb-lg max-w-prose`,children:o?`L2 lists studio sub-pages. On desktop, use the control below to slide the main panel and show how L2 sits under the chrome stack.`:`Pick **Studios** in the rail to mount L2 navigation next to the main area.`}),o&&(0,A.jsx)(v,{kind:`secondary`,size:`medium`,label:n?`Cover L2`:`Reveal L2`,onClick:()=>r(!n)})]})})})]})]})},K={render:()=>(0,A.jsx)(G,{})},q={render:()=>(0,A.jsxs)(S,{children:[(0,A.jsx)(S.SkipLink,{}),(0,A.jsxs)(S.Body,{children:[(0,A.jsx)(S.Header,{children:(0,A.jsx)(h,{title:`Acme`,showBackButton:!1,linkGroupOne:(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(x,{onClick:()=>{},children:`Report issue`}),(0,A.jsx)(x,{onClick:()=>{},children:`Request feature`})]}),actions:(0,A.jsx)(I,{})})}),(0,A.jsx)(S.Content,{children:(0,A.jsxs)(S.Main,{children:[(0,A.jsx)(l,{variant:`gradient`,title:`No primary navigation`,description:`Omit AppShell.SideNav for auth flows, onboarding, or minimal layouts. Left and right workspace insets match on desktop.`,image:P,actionBleed:`small`,action:(0,A.jsx)(v,{kind:`secondary`,variant:`rounded`,label:`Continue`})}),L]})})]})]})},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <PlaygroundDemo />
}`,...B.parameters?.docs?.source},description:{story:`All slots populated, default settings. Resize the viewport to mobile to see
the drawer take over (the mobile-menu trigger appears on the right of the
header).`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => <AppShell allowedPaths={["/settings"]}>
      <AppShell.SkipLink />
      <AppShell.SideNav logo={<StoryLogo />}>
        <NavItems selectedPath="/settings" />
      </AppShell.SideNav>
      <AppShell.Body>
        <AppShell.Header>
          <Header title="Acme — billing required" showBackButton={false} actions={<DemoHeaderActions />} />
        </AppShell.Header>
        <AppShell.Content>
          <AppShell.Main>
            <PageHead variant="none" title="Only /settings is reachable" description="Navigation is gated with allowedPaths — other routes are hidden from the rail and drawer." actionBleed="small" action={<Button kind="primary" variant="rounded" label="Manage billing" />} />
            {mainScrollHint}
          </AppShell.Main>
        </AppShell.Content>
      </AppShell.Body>
    </AppShell>
}`,...V.parameters?.docs?.source},description:{story:'`allowedPaths` filters `AppShell.NavItem` children out of both rail and\ndrawer. Use case: hide everything except `/settings` while a subscription\nis inactive — the header (including a "Manage billing" CTA) stays\nuntouched.',...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => <AppShell defaultRailExpanded>
      <AppShell.SkipLink />
      <AppShell.SideNav logo={<StoryLogo />}>
        <NavItems selectedPath="/studios" />
      </AppShell.SideNav>
      <AppShell.Body>
        <AppShell.Header>
          <Header title="Acme" showBackButton={false} actions={<DemoHeaderActions />} />
        </AppShell.Header>
        <AppShell.Content>
          <AppShell.Main>
            <PageHead variant="progressiveBlur" title="Studios — with in-page filter influencer" description="PageHead sits full-bleed above the grid row. The filter rail is a second influencer inside GridWrapper." image={demoPageHeadImage} actionBleed="small" action={<Button kind="secondary" variant="rounded" label="Add studio" />} />
            <GridWrapper className="py-2xlg" mode="fullwidth">
              <GridInfluencer>
                <aside className="bg-background-secondary p-md gap-sm flex w-[240px] flex-col rounded-md">
                  <div className="gap-xs flex items-center">
                    <IconFilter size={16} />
                    <span className="text-sm font-medium">Filters</span>
                  </div>
                  <Button kind="secondary" size="small" label="By location" />
                  <Button kind="secondary" size="small" label="By status" />
                </aside>
              </GridInfluencer>
              <Grid>
                <Column sm={4} md={8} lg={16}>
                  {mainScrollHint}
                </Column>
              </Grid>
            </GridWrapper>
          </AppShell.Main>
        </AppShell.Content>
      </AppShell.Body>
    </AppShell>
}`,...H.parameters?.docs?.source},description:{story:"Two influencer levels: `AppShell.SideNav` is the **shell influencer**\n(Carbon's term — it reserves left-side space and the main column adapts);\ninside `AppShell.Main`, a page can use `<GridWrapper>` with its own\n`<GridInfluencer>` for an in-page secondary panel (filters, table-of-\ncontents). The two layers compose without fighting each other.\n\n`Column` spans the full 4 / 8 / 16 columns at every breakpoint so the page\nbody fills the available width next to the in-page filter rail. Without\nexplicit `sm` / `md` spans, `Column` defaults to span-1 below `lg` and the\ncontent would render as a narrow strip. The hero uses {@link PageHead}\nfull-bleed above this grid.",...H.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => <DesktopL2LayersDemo />
}`,...W.parameters?.docs?.source},description:{story:"Desktop layout from the App Shell template: stacked chrome with `l2Open`\ndriving the main surface slide.",...W.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => <WithL2NavigationDemo />
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => <AppShell>
      <AppShell.SkipLink />
      <AppShell.Body>
        <AppShell.Header>
          <Header title="Acme" showBackButton={false} linkGroupOne={<>
                <HeaderButton onClick={() => {}}>Report issue</HeaderButton>
                <HeaderButton onClick={() => {}}>Request feature</HeaderButton>
              </>} actions={<DemoHeaderActions />} />
        </AppShell.Header>
        <AppShell.Content>
          <AppShell.Main>
            <PageHead variant="gradient" title="No primary navigation" description="Omit AppShell.SideNav for auth flows, onboarding, or minimal layouts. Left and right workspace insets match on desktop." image={demoPageHeadImage} actionBleed="small" action={<Button kind="secondary" variant="rounded" label="Continue" />} />
            {mainScrollHint}
          </AppShell.Main>
        </AppShell.Content>
      </AppShell.Body>
    </AppShell>
}`,...q.parameters?.docs?.source},description:{story:"Shell without `<AppShell.SideNav>`: desktop chrome uses the same 8px inset on\nthe left as on the right (`pl-sm` / `pr-sm`). No mobile-menu trigger is shown.",...q.parameters?.docs?.description}}},J=[`Playground`,`GatedRoutes`,`WithGridInfluencer`,`DesktopL2Layers`,`WithL2Navigation`,`WithoutNavigation`]}))();export{W as DesktopL2Layers,V as GatedRoutes,B as Playground,H as WithGridInfluencer,K as WithL2Navigation,q as WithoutNavigation,J as __namedExportsOrder,j as default};