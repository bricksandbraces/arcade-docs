import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{An as n,Cr as r,Ct as i,Vr as a,Yr as o,bt as s,dr as c,ea as l,ha as u,hi as d,ht as f,it as p,kr as m,nt as h,pt as g,rt as _,t as v,ti as y,tt as b,ui as x,vt as S,yt as C,zi as w}from"./iframe-BPPPz4sC.js";var T,E,D,O,k,A,j,M,N,P,F,I,L,R,z;e((()=>{v(),c(),T=t(w(),1),E=t(u(),1),D=l(),O={title:`Components/AppShell`,component:b,tags:[`autodocs`],parameters:{layout:`fullscreen`,docs:{description:{component:"Top-level application layout. Compound API mirrors Carbon's UI Shell: `AppShell.SideNav` (Carbon's shell influencer), `AppShell.Header`, `AppShell.Main`, `AppShell.SkipLink`, plus a thin `AppShell.NavItem` wrapper that auto-switches presentation between rail (collapsed) and drawer (mobile). Subscription / role gating via `allowedPaths`."}}}},k=[{path:`/studios`,icon:m,label:`Studios`},{path:`/workouts`,icon:x,label:`Workouts`},{path:`/devices`,icon:o,label:`Devices`},{path:`/settings`,icon:r,label:`Settings`}],A=e=>`/arcade-docs/assets/${e}`,j=()=>{let{railExpanded:e}=h(),t=_()===`rail`&&!e,n=A(t?`logo_small-dark.svg`:`logo_default-dark.svg`),r=A(t?`logo_small-light.svg`:`logo_default-light.svg`);return(0,D.jsx)(p,{compact:t,children:(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(`img`,{src:n,alt:``,className:(0,T.default)(`dark:hidden`,t?`size-full object-contain`:`h-[20px] w-auto max-w-full`)}),(0,D.jsx)(`img`,{src:r,alt:``,className:(0,T.default)(`hidden`,`dark:block`,t?`size-full object-contain`:`h-[20px] w-auto max-w-full`)})]})})},M=()=>(0,D.jsxs)(`div`,{className:`gap-xs flex items-center`,children:[(0,D.jsx)(n,{size:`small`,name:`Ada Lovelace`}),(0,D.jsx)(d,{kind:`ghost`,size:`medium`,variant:`rounded`,IconLeft:y,"aria-label":`Open user menu`})]}),N=({title:e})=>(0,D.jsxs)(`div`,{className:`p-2xlg`,children:[(0,D.jsx)(`h1`,{className:`mb-md text-2xl font-semibold`,children:e}),(0,D.jsx)(`p`,{className:`text-text-label`,children:'Page content scrolls inside `AppShell.Main`. The rail (desktop) and the drawer (mobile) share the same `AppShell.NavItem` children — try the "Mobile" viewport to see the drawer.'})]}),P=({selectedPath:e})=>k.map(t=>(0,D.jsx)(b.NavItem,{path:t.path,icon:t.icon,label:t.label,selected:e===t.path},t.path)),F=()=>{let[e,t]=E.useState(`/studios`);return(0,D.jsxs)(b,{defaultRailExpanded:!1,children:[(0,D.jsx)(b.SkipLink,{}),(0,D.jsx)(b.SideNav,{logo:(0,D.jsx)(j,{}),children:k.map(n=>(0,D.jsx)(b.NavItem,{path:n.path,icon:n.icon,label:n.label,selected:e===n.path,onClick:()=>t(n.path)},n.path))}),(0,D.jsxs)(b.Body,{children:[(0,D.jsx)(b.Header,{children:(0,D.jsx)(s,{title:`Acme`,showBackButton:!1,linkGroupOne:(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(i,{onClick:()=>{},children:`Report issue`}),(0,D.jsx)(i,{onClick:()=>{},children:`Request feature`})]}),actions:(0,D.jsx)(M,{})})}),(0,D.jsx)(b.Main,{children:(0,D.jsx)(N,{title:`Studios`})})]})]})},I={render:()=>(0,D.jsx)(F,{})},L={render:()=>(0,D.jsxs)(b,{allowedPaths:[`/settings`],children:[(0,D.jsx)(b.SkipLink,{}),(0,D.jsx)(b.SideNav,{logo:(0,D.jsx)(j,{}),children:(0,D.jsx)(P,{selectedPath:`/settings`})}),(0,D.jsxs)(b.Body,{children:[(0,D.jsx)(b.Header,{children:(0,D.jsx)(s,{title:`Acme — billing required`,showBackButton:!1,actions:(0,D.jsx)(M,{})})}),(0,D.jsx)(b.Main,{children:(0,D.jsx)(N,{title:`Only /settings is reachable`})})]})]})},R={render:()=>(0,D.jsxs)(b,{defaultRailExpanded:!0,children:[(0,D.jsx)(b.SkipLink,{}),(0,D.jsx)(b.SideNav,{logo:(0,D.jsx)(j,{}),children:(0,D.jsx)(P,{selectedPath:`/studios`})}),(0,D.jsxs)(b.Body,{children:[(0,D.jsx)(b.Header,{children:(0,D.jsx)(s,{title:`Acme`,showBackButton:!1,actions:(0,D.jsx)(M,{})})}),(0,D.jsx)(b.Main,{children:(0,D.jsxs)(S,{className:`py-2xlg`,mode:`fullwidth`,children:[(0,D.jsx)(f,{children:(0,D.jsxs)(`aside`,{className:`bg-background-secondary p-md gap-sm flex w-[240px] flex-col rounded-md`,children:[(0,D.jsxs)(`div`,{className:`gap-xs flex items-center`,children:[(0,D.jsx)(a,{size:16}),(0,D.jsx)(`span`,{className:`text-sm font-medium`,children:`Filters`})]}),(0,D.jsx)(d,{kind:`secondary`,size:`small`,label:`By location`}),(0,D.jsx)(d,{kind:`secondary`,size:`small`,label:`By status`})]})}),(0,D.jsx)(g,{children:(0,D.jsx)(C,{sm:4,md:8,lg:16,children:(0,D.jsx)(N,{title:`Studios — with in-page filter influencer`})})})]})})]})]})},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <PlaygroundDemo />
}`,...I.parameters?.docs?.source},description:{story:`All slots populated, default settings. Resize the viewport to mobile to see
the drawer take over (the mobile-menu trigger appears on the right of the
header).`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <AppShell allowedPaths={["/settings"]}>
      <AppShell.SkipLink />
      <AppShell.SideNav logo={<StoryLogo />}>
        <NavItems selectedPath="/settings" />
      </AppShell.SideNav>
      <AppShell.Body>
        <AppShell.Header>
          <Header title="Acme — billing required" showBackButton={false} actions={<DemoHeaderActions />} />
        </AppShell.Header>
        <AppShell.Main>
          <PageContent title="Only /settings is reachable" />
        </AppShell.Main>
      </AppShell.Body>
    </AppShell>
}`,...L.parameters?.docs?.source},description:{story:'`allowedPaths` filters `AppShell.NavItem` children out of both rail and\ndrawer. Use case: hide everything except `/settings` while a subscription\nis inactive — the header (including a "Manage billing" CTA) stays\nuntouched.',...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => <AppShell defaultRailExpanded>
      <AppShell.SkipLink />
      <AppShell.SideNav logo={<StoryLogo />}>
        <NavItems selectedPath="/studios" />
      </AppShell.SideNav>
      <AppShell.Body>
        <AppShell.Header>
          <Header title="Acme" showBackButton={false} actions={<DemoHeaderActions />} />
        </AppShell.Header>
        <AppShell.Main>
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
                <PageContent title="Studios — with in-page filter influencer" />
              </Column>
            </Grid>
          </GridWrapper>
        </AppShell.Main>
      </AppShell.Body>
    </AppShell>
}`,...R.parameters?.docs?.source},description:{story:"Two influencer levels: `AppShell.SideNav` is the **shell influencer**\n(Carbon's term — it reserves left-side space and the main column adapts);\ninside `AppShell.Main`, a page can use `<GridWrapper>` with its own\n`<GridInfluencer>` for an in-page secondary panel (filters, table-of-\ncontents). The two layers compose without fighting each other.\n\n`Column` spans the full 4 / 8 / 16 columns at every breakpoint so the page\ncontent fills the available width next to the in-page filter rail. Without\nexplicit `sm` / `md` spans, `Column` defaults to span-1 below `lg` and the\ncontent would render as a narrow strip.",...R.parameters?.docs?.description}}},z=[`Playground`,`GatedRoutes`,`WithGridInfluencer`]}))();export{L as GatedRoutes,I as Playground,R as WithGridInfluencer,z as __namedExportsOrder,O as default};