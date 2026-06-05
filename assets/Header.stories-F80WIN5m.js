import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Oi as n,Si as r,ci as i,ct as a,fa as o,ga as s,io as c,lt as l,ot as u,t as d,ut as f,ya as p,yo as m}from"./iframe-Cw936qOG.js";var h,g,_,v,y,b,x,S,C,w;e((()=>{d(),i(),h=t(m(),1),g=c(),_={title:`Layout & Structure/Header/Header`,component:u,tags:[`autodocs`],argTypes:{showBackButton:{control:`boolean`},showTitleDivider:{control:`boolean`}},parameters:{layout:`fullscreen`,docs:{description:{component:"Top app bar with optional logo (`logo` + {@link HeaderLogo}), navigation links, and actions."}}}},v=()=>(0,g.jsxs)(`div`,{className:`gap-xs flex items-center`,children:[(0,g.jsx)(p,{kind:`ghost`,IconLeft:r,size:`medium`,"aria-label":`Settings`,tooltipContent:`Settings`,tooltipOpenDelayMs:0}),(0,g.jsx)(p,{kind:`ghost`,IconLeft:o,size:`medium`,"aria-label":`Notifications`,tooltipContent:`Notifications`,tooltipOpenDelayMs:0}),(0,g.jsx)(p,{kind:`ghost`,IconLeft:n,size:`medium`,"aria-label":`Menu`,tooltipContent:`Menu`,tooltipOpenDelayMs:0})]}),y=e=>`/arcade-docs/assets/${e}`,b=()=>(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(`img`,{src:y(`logo_default-dark.svg`),alt:``,className:`h-[20px] w-auto max-w-full dark:hidden`}),(0,g.jsx)(`img`,{src:y(`logo_default-light.svg`),alt:``,className:`hidden h-[20px] w-auto max-w-full dark:block`})]}),x={render:({showBackButton:e=!0,showTitleDivider:t=!0})=>{let[n,r]=(0,h.useState)(`g1-b`);return(0,g.jsx)(u,{title:`Dashboard`,showBackButton:e,showTitleDivider:t,backButton:(0,g.jsx)(p,{kind:`ghost`,IconLeft:s,size:`medium`,"aria-label":`Go back`,tooltipContent:`Go back`,tooltipOpenDelayMs:0}),linkGroupOne:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(f,{selected:n===`g1-a`,onClick:()=>r(`g1-a`),children:`Link`}),(0,g.jsx)(f,{selected:n===`g1-b`,onClick:()=>r(`g1-b`),children:`Link`}),(0,g.jsx)(f,{selected:n===`g1-c`,onClick:()=>r(`g1-c`),children:`Link`})]}),linkGroupTwo:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(f,{selected:n===`g2-a`,onClick:()=>r(`g2-a`),children:`Link`}),(0,g.jsx)(a,{selected:n===`g2-dropdown`,items:[{label:`Link`,onClick:()=>r(`g2-dropdown`)},{label:`Link`,onClick:()=>r(`g2-dropdown`)},{label:`Link`,onClick:()=>r(`g2-dropdown`)}],children:(0,g.jsx)(l,{children:`Link`})}),(0,g.jsx)(f,{selected:n===`g2-c`,onClick:()=>r(`g2-c`),children:`Link`})]}),actions:(0,g.jsx)(v,{})})},args:{showBackButton:!0,showTitleDivider:!0},parameters:{layout:`fullscreen`,controls:{include:[`showBackButton`,`showTitleDivider`]}}},S={parameters:{layout:`fullscreen`,docs:{description:{story:"Optional `logo` slot — pass SVG/img children; `Header` wraps them in `HeaderLogo`. Use `logoHref` for a home link."}}},render:()=>(0,g.jsx)(u,{title:`Dashboard`,showBackButton:!1,logo:(0,g.jsx)(b,{}),logoHref:`#`,actions:(0,g.jsx)(v,{})})},C={args:{showBackButton:!0},parameters:{layout:`fullscreen`,controls:{include:[`showBackButton`]},docs:{description:{story:"Header with exactly two top-level navigation links rendered as `HeaderButton`s. Click a link to make it the active one. Use when the app has only a couple of primary sections."}}},render:function({showBackButton:e=!0}){let[t,n]=(0,h.useState)(`products`);return(0,g.jsx)(u,{title:`Dashboard`,showBackButton:e,backButton:(0,g.jsx)(p,{kind:`ghost`,IconLeft:s,size:`medium`,"aria-label":`Go back`}),linkGroupOne:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(f,{selected:t===`products`,onClick:()=>n(`products`),children:`Products`}),(0,g.jsx)(f,{selected:t===`resources`,onClick:()=>n(`resources`),children:`Resources`})]}),actions:(0,g.jsx)(v,{})})}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w=[`Playground`,`WithLogo`,`WithTwoLinks`]}))();export{x as Playground,S as WithLogo,C as WithTwoLinks,w as __namedExportsOrder,_ as default};