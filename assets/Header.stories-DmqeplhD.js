import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Co as n,Do as r,Ds as i,Oa as a,ct as o,fs as s,ia as c,lt as l,ot as u,t as d,ut as f,ya as p,yo as m}from"./iframe-DItRHvxc.js";import{n as h,t as g}from"./figmaDesign-CO6i5n9C.js";var _,v,y,b,x,S,C,w,T,E,D;e((()=>{d(),c(),_=t(i(),1),h(),v=s(),y={title:`Layout & Structure/Header/Header`,component:u,tags:[`autodocs`],argTypes:{showBackButton:{control:`boolean`},showTitleDivider:{control:`boolean`}},parameters:{design:g(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=5097-807`),layout:`fullscreen`,docs:{description:{component:"Top app bar with optional logo (`logo` + {@link HeaderLogo}), navigation links, and actions."}}}},b=()=>(0,v.jsxs)(`div`,{className:`gap-xs flex items-center`,children:[(0,v.jsx)(r,{kind:`ghost`,IconLeft:p,size:`medium`,"aria-label":`Settings`,tooltipContent:`Settings`}),(0,v.jsx)(r,{kind:`ghost`,IconLeft:m,size:`medium`,"aria-label":`Notifications`,tooltipContent:`Notifications`}),(0,v.jsx)(r,{kind:`ghost`,IconLeft:a,size:`medium`,"aria-label":`Menu`,tooltipContent:`Menu`})]}),x=e=>`/arcade-docs/assets/${e}`,S=()=>(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(`img`,{src:x(`logo_default-dark.svg`),alt:``,className:`h-[20px] w-auto max-w-full dark:hidden`}),(0,v.jsx)(`img`,{src:x(`logo_default-light.svg`),alt:``,className:`hidden h-[20px] w-auto max-w-full dark:block`})]}),C={render:({showBackButton:e=!0,showTitleDivider:t=!0})=>{let[i,a]=(0,_.useState)(`g1-b`);return(0,v.jsx)(u,{title:`Dashboard`,showBackButton:e,showTitleDivider:t,backButton:(0,v.jsx)(r,{kind:`ghost`,IconLeft:n,size:`medium`,"aria-label":`Go back`,tooltipContent:`Go back`}),linkGroupOne:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(f,{selected:i===`g1-a`,onClick:()=>a(`g1-a`),children:`Link`}),(0,v.jsx)(f,{selected:i===`g1-b`,onClick:()=>a(`g1-b`),children:`Link`}),(0,v.jsx)(f,{selected:i===`g1-c`,onClick:()=>a(`g1-c`),children:`Link`})]}),linkGroupTwo:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(f,{selected:i===`g2-a`,onClick:()=>a(`g2-a`),children:`Link`}),(0,v.jsx)(o,{selected:i===`g2-dropdown`,items:[{label:`Link`,onClick:()=>a(`g2-dropdown`)},{label:`Link`,onClick:()=>a(`g2-dropdown`)},{label:`Link`,onClick:()=>a(`g2-dropdown`)}],children:(0,v.jsx)(l,{children:`Link`})}),(0,v.jsx)(f,{selected:i===`g2-c`,onClick:()=>a(`g2-c`),children:`Link`})]}),actions:(0,v.jsx)(b,{})})},args:{showBackButton:!0,showTitleDivider:!0},parameters:{layout:`fullscreen`,controls:{include:[`showBackButton`,`showTitleDivider`]}}},w={parameters:{layout:`fullscreen`,docs:{description:{story:"Optional `logo` slot - pass SVG/img children; `Header` wraps them in `HeaderLogo`. Use `logoHref` for a home link."}}},render:()=>(0,v.jsx)(u,{title:`Dashboard`,showBackButton:!1,logo:(0,v.jsx)(S,{}),logoHref:`#`,actions:(0,v.jsx)(b,{})})},T={parameters:{layout:`fullscreen`,docs:{description:{story:"Pass `titleHref` to make the title a link (e.g. back to Home). It uses `linkComponent` when provided (framework `Link`), otherwise a native anchor. `titleLinkLabel` overrides the accessible name, which defaults to the visible title."}}},render:()=>(0,v.jsx)(u,{title:`Dashboard`,titleHref:`#`,titleLinkLabel:`Go to home`,showBackButton:!1,actions:(0,v.jsx)(b,{})})},E={args:{showBackButton:!0},parameters:{layout:`fullscreen`,controls:{include:[`showBackButton`]},docs:{description:{story:"Header with exactly two top-level navigation links rendered as `HeaderButton`s. Click a link to make it the active one. Use when the app has only a couple of primary sections."}}},render:function({showBackButton:e=!0}){let[t,i]=(0,_.useState)(`products`);return(0,v.jsx)(u,{title:`Dashboard`,showBackButton:e,backButton:(0,v.jsx)(r,{kind:`ghost`,IconLeft:n,size:`medium`,"aria-label":`Go back`}),linkGroupOne:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(f,{selected:t===`products`,onClick:()=>i(`products`),children:`Products`}),(0,v.jsx)(f,{selected:t===`resources`,onClick:()=>i(`resources`),children:`Resources`})]}),actions:(0,v.jsx)(b,{})})}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: ({
    showBackButton = true,
    showTitleDivider = true
  }) => {
    const [selectedKey, setSelectedKey] =
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useState<HeaderNavSelection>("g1-b");
    return <Header title="Dashboard" showBackButton={showBackButton} showTitleDivider={showTitleDivider} backButton={<Button kind="ghost" IconLeft={IconArrowLeft} size="medium" aria-label="Go back" tooltipContent="Go back" />} linkGroupOne={<>
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        story: "Optional \`logo\` slot - pass SVG/img children; \`Header\` wraps them in \`HeaderLogo\`. Use \`logoHref\` for a home link."
      }
    }
  },
  render: () => <Header title="Dashboard" showBackButton={false} logo={<StoryHeaderWordmark />} logoHref="#" actions={<DesktopActions />} />
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        story: "Pass \`titleHref\` to make the title a link (e.g. back to Home). It uses \`linkComponent\` when provided (framework \`Link\`), otherwise a native anchor. \`titleLinkLabel\` overrides the accessible name, which defaults to the visible title."
      }
    }
  },
  render: () => <Header title="Dashboard" titleHref="#" titleLinkLabel="Go to home" showBackButton={false} actions={<DesktopActions />} />
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D=[`Playground`,`WithLogo`,`WithClickableTitle`,`WithTwoLinks`]}))();export{C as Playground,T as WithClickableTitle,w as WithLogo,E as WithTwoLinks,D as __namedExportsOrder,y as default};