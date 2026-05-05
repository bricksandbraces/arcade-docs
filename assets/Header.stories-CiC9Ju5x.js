import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Di as n,Hi as r,Hr as i,Jn as a,Lr as o,ar as s,at as c,ct as l,ot as u,st as d,t as f,ur as p,zr as m}from"./iframe-QfUBFbw6.js";var h,g,_,v,y,b,x,S;e((()=>{f(),a(),h=t(r(),1),g=n(),_={title:`Components/Header/Header`,component:c,tags:[`autodocs`],argTypes:{showBackButton:{control:`boolean`}},parameters:{layout:`fullscreen`,docs:{description:{component:`Top app bar with slots for logo, navigation links, and actions. Use as the primary header across app pages.`}}}},v=()=>(0,g.jsxs)(`div`,{className:`gap-xs flex items-center`,children:[(0,g.jsx)(i,{kind:`ghost`,IconLeft:s,size:`medium`,"aria-label":`Settings`,tooltipContent:`Settings`,tooltipOpenDelayMs:0}),(0,g.jsx)(i,{kind:`ghost`,IconLeft:o,size:`medium`,"aria-label":`Notifications`,tooltipContent:`Notifications`,tooltipOpenDelayMs:0}),(0,g.jsx)(i,{kind:`ghost`,IconLeft:p,size:`medium`,"aria-label":`Menu`,tooltipContent:`Menu`,tooltipOpenDelayMs:0})]}),y=()=>(0,g.jsx)(`div`,{className:`border-border-brand text-text-brand typography-body-small size-container-xs flex items-center justify-center rounded-md border border-dashed`,children:`L`}),b={render:({showBackButton:e=!0})=>{let[t,n]=(0,h.useState)(`g1-b`);return(0,g.jsx)(c,{title:`Dashboard`,showBackButton:e,companyLogo:(0,g.jsx)(y,{}),backButton:(0,g.jsx)(i,{kind:`ghost`,IconLeft:m,size:`medium`,"aria-label":`Go back`,tooltipContent:`Go back`,tooltipOpenDelayMs:0}),linkGroupOne:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(l,{selected:t===`g1-a`,onClick:()=>n(`g1-a`),children:`Link`}),(0,g.jsx)(l,{selected:t===`g1-b`,onClick:()=>n(`g1-b`),children:`Link`}),(0,g.jsx)(l,{selected:t===`g1-c`,onClick:()=>n(`g1-c`),children:`Link`})]}),linkGroupTwo:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(l,{selected:t===`g2-a`,onClick:()=>n(`g2-a`),children:`Link`}),(0,g.jsx)(u,{selected:t===`g2-dropdown`,items:[{label:`Link`,onClick:()=>n(`g2-dropdown`)},{label:`Link`,onClick:()=>n(`g2-dropdown`)},{label:`Link`,onClick:()=>n(`g2-dropdown`)}],children:(0,g.jsx)(d,{children:`Link`})}),(0,g.jsx)(l,{selected:t===`g2-c`,onClick:()=>n(`g2-c`),children:`Link`})]}),actions:(0,g.jsx)(v,{})})},args:{showBackButton:!0},parameters:{layout:`fullscreen`,controls:{include:[`showBackButton`]}}},x={args:{showBackButton:!0},parameters:{layout:`fullscreen`,controls:{include:[`showBackButton`]},docs:{description:{story:"Header with exactly two top-level navigation links rendered as `HeaderButton`s. Click a link to make it the active one. Use when the app has only a couple of primary sections."}}},render:function({showBackButton:e=!0}){let[t,n]=(0,h.useState)(`products`);return(0,g.jsx)(c,{title:`Dashboard`,showBackButton:e,companyLogo:(0,g.jsx)(y,{}),backButton:(0,g.jsx)(i,{kind:`ghost`,IconLeft:m,size:`medium`,"aria-label":`Go back`}),linkGroupOne:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(l,{selected:t===`products`,onClick:()=>n(`products`),children:`Products`}),(0,g.jsx)(l,{selected:t===`resources`,onClick:()=>n(`resources`),children:`Resources`})]}),actions:(0,g.jsx)(v,{})})}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: ({
    showBackButton = true
  }) => {
    const [selectedKey, setSelectedKey] =
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useState<HeaderNavSelection>("g1-b");
    return <Header title="Dashboard" showBackButton={showBackButton} companyLogo={<MobileCompanyLogo />} backButton={<Button kind="ghost" IconLeft={IconArrowLeft} size="medium" aria-label="Go back" tooltipContent="Go back" tooltipOpenDelayMs={0} />} linkGroupOne={<>
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
    return <Header title="Dashboard" showBackButton={showBackButton} companyLogo={<MobileCompanyLogo />} backButton={<Button kind="ghost" IconLeft={IconArrowLeft} size="medium" aria-label="Go back" />} linkGroupOne={<>
            <HeaderButton selected={activeLink === "products"} onClick={() => setActiveLink("products")}>
              Products
            </HeaderButton>
            <HeaderButton selected={activeLink === "resources"} onClick={() => setActiveLink("resources")}>
              Resources
            </HeaderButton>
          </>} actions={<DesktopActions />} />;
  }
}`,...x.parameters?.docs?.source}}},S=[`Playground`,`WithTwoLinks`]}))();export{b as Playground,x as WithTwoLinks,S as __namedExportsOrder,_ as default};