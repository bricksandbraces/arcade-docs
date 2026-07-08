import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Sa as n,So as r,ct as i,ha as a,ji as o,lt as s,ot as c,so as l,t as u,ui as d,ut as f,wi as p,ya as m}from"./iframe-wZ4TEM6N.js";var h,g,_,v,y,b,x,S,C,w,T;e((()=>{u(),d(),h=t(r(),1),g=l(),_={title:`Layout & Structure/Header/Header`,component:c,tags:[`autodocs`],argTypes:{showBackButton:{control:`boolean`},showTitleDivider:{control:`boolean`}},parameters:{layout:`fullscreen`,docs:{description:{component:"Top app bar with optional logo (`logo` + {@link HeaderLogo}), navigation links, and actions."}}}},v=()=>(0,g.jsxs)(`div`,{className:`gap-xs flex items-center`,children:[(0,g.jsx)(n,{kind:`ghost`,IconLeft:p,size:`medium`,"aria-label":`Settings`,tooltipContent:`Settings`,tooltipOpenDelayMs:0}),(0,g.jsx)(n,{kind:`ghost`,IconLeft:a,size:`medium`,"aria-label":`Notifications`,tooltipContent:`Notifications`,tooltipOpenDelayMs:0}),(0,g.jsx)(n,{kind:`ghost`,IconLeft:o,size:`medium`,"aria-label":`Menu`,tooltipContent:`Menu`,tooltipOpenDelayMs:0})]}),y=e=>`/arcade-docs/assets/${e}`,b=()=>(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(`img`,{src:y(`logo_default-dark.svg`),alt:``,className:`h-[20px] w-auto max-w-full dark:hidden`}),(0,g.jsx)(`img`,{src:y(`logo_default-light.svg`),alt:``,className:`hidden h-[20px] w-auto max-w-full dark:block`})]}),x={render:({showBackButton:e=!0,showTitleDivider:t=!0})=>{let[r,a]=(0,h.useState)(`g1-b`);return(0,g.jsx)(c,{title:`Dashboard`,showBackButton:e,showTitleDivider:t,backButton:(0,g.jsx)(n,{kind:`ghost`,IconLeft:m,size:`medium`,"aria-label":`Go back`,tooltipContent:`Go back`,tooltipOpenDelayMs:0}),linkGroupOne:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(f,{selected:r===`g1-a`,onClick:()=>a(`g1-a`),children:`Link`}),(0,g.jsx)(f,{selected:r===`g1-b`,onClick:()=>a(`g1-b`),children:`Link`}),(0,g.jsx)(f,{selected:r===`g1-c`,onClick:()=>a(`g1-c`),children:`Link`})]}),linkGroupTwo:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(f,{selected:r===`g2-a`,onClick:()=>a(`g2-a`),children:`Link`}),(0,g.jsx)(i,{selected:r===`g2-dropdown`,items:[{label:`Link`,onClick:()=>a(`g2-dropdown`)},{label:`Link`,onClick:()=>a(`g2-dropdown`)},{label:`Link`,onClick:()=>a(`g2-dropdown`)}],children:(0,g.jsx)(s,{children:`Link`})}),(0,g.jsx)(f,{selected:r===`g2-c`,onClick:()=>a(`g2-c`),children:`Link`})]}),actions:(0,g.jsx)(v,{})})},args:{showBackButton:!0,showTitleDivider:!0},parameters:{layout:`fullscreen`,controls:{include:[`showBackButton`,`showTitleDivider`]}}},S={parameters:{layout:`fullscreen`,docs:{description:{story:"Optional `logo` slot — pass SVG/img children; `Header` wraps them in `HeaderLogo`. Use `logoHref` for a home link."}}},render:()=>(0,g.jsx)(c,{title:`Dashboard`,showBackButton:!1,logo:(0,g.jsx)(b,{}),logoHref:`#`,actions:(0,g.jsx)(v,{})})},C={parameters:{layout:`fullscreen`,docs:{description:{story:"Pass `titleHref` to make the title a link (e.g. back to Home). It uses `linkComponent` when provided (framework `Link`), otherwise a native anchor. `titleLinkLabel` overrides the accessible name, which defaults to the visible title."}}},render:()=>(0,g.jsx)(c,{title:`Dashboard`,titleHref:`#`,titleLinkLabel:`Go to home`,showBackButton:!1,actions:(0,g.jsx)(v,{})})},w={args:{showBackButton:!0},parameters:{layout:`fullscreen`,controls:{include:[`showBackButton`]},docs:{description:{story:"Header with exactly two top-level navigation links rendered as `HeaderButton`s. Click a link to make it the active one. Use when the app has only a couple of primary sections."}}},render:function({showBackButton:e=!0}){let[t,r]=(0,h.useState)(`products`);return(0,g.jsx)(c,{title:`Dashboard`,showBackButton:e,backButton:(0,g.jsx)(n,{kind:`ghost`,IconLeft:m,size:`medium`,"aria-label":`Go back`}),linkGroupOne:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(f,{selected:t===`products`,onClick:()=>r(`products`),children:`Products`}),(0,g.jsx)(f,{selected:t===`resources`,onClick:()=>r(`resources`),children:`Resources`})]}),actions:(0,g.jsx)(v,{})})}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: ({
    showBackButton = true,
    showTitleDivider = true
  }) => {
    const [selectedKey, setSelectedKey] =
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useState<HeaderNavSelection>("g1-b");
    return <Header title="Dashboard" showBackButton={showBackButton} showTitleDivider={showTitleDivider} backButton={<Button kind="ghost" IconLeft={IconArrowLeft} size="medium" aria-label="Go back" tooltipContent="Go back" tooltipOpenDelayMs={0} />} linkGroupOne={<>
            <HeaderButton selected={selectedKey === "g1-a"} onClick={() => setSelectedKey("g1-a")}>
              Link
            </HeaderButton>
            <HeaderButton selected={selectedKey === "g1-b"} onClick={() => setSelectedKey("g1-b")}>
              Link
            </HeaderButton>
            <HeaderButton selected={selectedKey === "g1-c"} onClick={() => setSelectedKey("g1-c")}>
              Link
            </HeaderButton>
          </>} linkGroupTwo={<>
            <HeaderButton selected={selectedKey === "g2-a"} onClick={() => setSelectedKey("g2-a")}>
              Link
            </HeaderButton>
            <HeaderDropdown selected={selectedKey === "g2-dropdown"} items={[{
        label: "Link",
        onClick: () => setSelectedKey("g2-dropdown")
      }, {
        label: "Link",
        onClick: () => setSelectedKey("g2-dropdown")
      }, {
        label: "Link",
        onClick: () => setSelectedKey("g2-dropdown")
      }]}>
              <HeaderDropdownButton>Link</HeaderDropdownButton>
            </HeaderDropdown>
            <HeaderButton selected={selectedKey === "g2-c"} onClick={() => setSelectedKey("g2-c")}>
              Link
            </HeaderButton>
          </>} actions={<DesktopActions />} />;
  },
  args: {
    showBackButton: true,
    showTitleDivider: true
  },
  parameters: {
    layout: "fullscreen",
    controls: {
      include: ["showBackButton", "showTitleDivider"]
    }
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        story: "Optional \`logo\` slot — pass SVG/img children; \`Header\` wraps them in \`HeaderLogo\`. Use \`logoHref\` for a home link."
      }
    }
  },
  render: () => <Header title="Dashboard" showBackButton={false} logo={<StoryHeaderWordmark />} logoHref="#" actions={<DesktopActions />} />
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        story: "Pass \`titleHref\` to make the title a link (e.g. back to Home). It uses \`linkComponent\` when provided (framework \`Link\`), otherwise a native anchor. \`titleLinkLabel\` overrides the accessible name, which defaults to the visible title."
      }
    }
  },
  render: () => <Header title="Dashboard" titleHref="#" titleLinkLabel="Go to home" showBackButton={false} actions={<DesktopActions />} />
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    showBackButton: true
  },
  parameters: {
    layout: "fullscreen",
    controls: {
      include: ["showBackButton"]
    },
    docs: {
      description: {
        story: "Header with exactly two top-level navigation links rendered as \`HeaderButton\`s. Click a link to make it the active one. Use when the app has only a couple of primary sections."
      }
    }
  },
  render: function Render({
    showBackButton = true
  }) {
    const [activeLink, setActiveLink] = useState<"products" | "resources">("products");
    return <Header title="Dashboard" showBackButton={showBackButton} backButton={<Button kind="ghost" IconLeft={IconArrowLeft} size="medium" aria-label="Go back" />} linkGroupOne={<>
            <HeaderButton selected={activeLink === "products"} onClick={() => setActiveLink("products")}>
              Products
            </HeaderButton>
            <HeaderButton selected={activeLink === "resources"} onClick={() => setActiveLink("resources")}>
              Resources
            </HeaderButton>
          </>} actions={<DesktopActions />} />;
  }
}`,...w.parameters?.docs?.source}}},T=[`Playground`,`WithLogo`,`WithClickableTitle`,`WithTwoLinks`]}))();export{x as Playground,C as WithClickableTitle,S as WithLogo,w as WithTwoLinks,T as __namedExportsOrder,_ as default};