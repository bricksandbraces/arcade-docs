import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Tr as n,_t as r,ai as i,br as a,bt as o,ca as s,ci as c,cr as l,qi as u,ri as d,t as f,tt as p,vt as m,yt as h}from"./iframe-BmX5hFjR.js";var g,_,v,y,b,x,S,C,w;e((()=>{f(),l(),g=t(s(),1),_=u(),v={title:`Components/Header/Header`,component:r,tags:[`autodocs`],argTypes:{showBackButton:{control:`boolean`}},parameters:{layout:`fullscreen`,docs:{description:{component:`Top app bar with slots for logo, navigation links, and actions. Use as the primary header across app pages.`}}}},y=()=>(0,_.jsxs)(`div`,{className:`gap-xs flex items-center`,children:[(0,_.jsx)(c,{kind:`ghost`,IconLeft:a,size:`medium`,"aria-label":`Settings`,tooltipContent:`Settings`,tooltipOpenDelayMs:0}),(0,_.jsx)(c,{kind:`ghost`,IconLeft:d,size:`medium`,"aria-label":`Notifications`,tooltipContent:`Notifications`,tooltipOpenDelayMs:0}),(0,_.jsx)(c,{kind:`ghost`,IconLeft:n,size:`medium`,"aria-label":`Menu`,tooltipContent:`Menu`,tooltipOpenDelayMs:0})]}),b=e=>`/arcade-docs/assets/${e}`,x=()=>(0,_.jsx)(p,{compact:!0,children:(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(`img`,{src:b(`logo_small-dark.svg`),alt:``,className:`size-full object-contain dark:hidden`}),(0,_.jsx)(`img`,{src:b(`logo_small-light.svg`),alt:``,className:`hidden size-full object-contain dark:block`})]})}),S={render:({showBackButton:e=!0})=>{let[t,n]=(0,g.useState)(`g1-b`);return(0,_.jsx)(r,{title:`Dashboard`,showBackButton:e,companyLogo:(0,_.jsx)(x,{}),companyLogoHref:`#`,backButton:(0,_.jsx)(c,{kind:`ghost`,IconLeft:i,size:`medium`,"aria-label":`Go back`,tooltipContent:`Go back`,tooltipOpenDelayMs:0}),linkGroupOne:(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(o,{selected:t===`g1-a`,onClick:()=>n(`g1-a`),children:`Link`}),(0,_.jsx)(o,{selected:t===`g1-b`,onClick:()=>n(`g1-b`),children:`Link`}),(0,_.jsx)(o,{selected:t===`g1-c`,onClick:()=>n(`g1-c`),children:`Link`})]}),linkGroupTwo:(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(o,{selected:t===`g2-a`,onClick:()=>n(`g2-a`),children:`Link`}),(0,_.jsx)(m,{selected:t===`g2-dropdown`,items:[{label:`Link`,onClick:()=>n(`g2-dropdown`)},{label:`Link`,onClick:()=>n(`g2-dropdown`)},{label:`Link`,onClick:()=>n(`g2-dropdown`)}],children:(0,_.jsx)(h,{children:`Link`})}),(0,_.jsx)(o,{selected:t===`g2-c`,onClick:()=>n(`g2-c`),children:`Link`})]}),actions:(0,_.jsx)(y,{})})},args:{showBackButton:!0},parameters:{layout:`fullscreen`,controls:{include:[`showBackButton`]}}},C={args:{showBackButton:!0},parameters:{layout:`fullscreen`,controls:{include:[`showBackButton`]},docs:{description:{story:"Header with exactly two top-level navigation links rendered as `HeaderButton`s. Click a link to make it the active one. Use when the app has only a couple of primary sections."}}},render:function({showBackButton:e=!0}){let[t,n]=(0,g.useState)(`products`);return(0,_.jsx)(r,{title:`Dashboard`,showBackButton:e,companyLogo:(0,_.jsx)(x,{}),companyLogoHref:`#`,backButton:(0,_.jsx)(c,{kind:`ghost`,IconLeft:i,size:`medium`,"aria-label":`Go back`}),linkGroupOne:(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(o,{selected:t===`products`,onClick:()=>n(`products`),children:`Products`}),(0,_.jsx)(o,{selected:t===`resources`,onClick:()=>n(`resources`),children:`Resources`})]}),actions:(0,_.jsx)(y,{})})}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: ({
    showBackButton = true
  }) => {
    const [selectedKey, setSelectedKey] =
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useState<HeaderNavSelection>("g1-b");
    return <Header title="Dashboard" showBackButton={showBackButton} companyLogo={<MobileCompanyLogo />} companyLogoHref="#" backButton={<Button kind="ghost" IconLeft={IconArrowLeft} size="medium" aria-label="Go back" tooltipContent="Go back" tooltipOpenDelayMs={0} />} linkGroupOne={<>
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
    showBackButton: true
  },
  parameters: {
    layout: "fullscreen",
    controls: {
      include: ["showBackButton"]
    }
  }
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
    return <Header title="Dashboard" showBackButton={showBackButton} companyLogo={<MobileCompanyLogo />} companyLogoHref="#" backButton={<Button kind="ghost" IconLeft={IconArrowLeft} size="medium" aria-label="Go back" />} linkGroupOne={<>
            <HeaderButton selected={activeLink === "products"} onClick={() => setActiveLink("products")}>
              Products
            </HeaderButton>
            <HeaderButton selected={activeLink === "resources"} onClick={() => setActiveLink("resources")}>
              Resources
            </HeaderButton>
          </>} actions={<DesktopActions />} />;
  }
}`,...C.parameters?.docs?.source}}},w=[`Playground`,`WithTwoLinks`]}))();export{S as Playground,C as WithTwoLinks,w as __namedExportsOrder,v as default};