import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Di as n,Hi as r,Hr as i,Jn as a,Lr as o,ar as s,at as c,ct as l,ot as u,st as d,t as f,ur as p,zr as m}from"./iframe-ChiQ7sZy.js";var h,g,_,v,y,b,x,S,C,w;e((()=>{f(),a(),h=t(r(),1),g=n(),_={title:`Fabian Supervision/Header/Header`,component:c,tags:[`autodocs`],argTypes:{border:{control:`boolean`},showBackButton:{control:`boolean`}},parameters:{layout:`fullscreen`,docs:{description:{component:`Top app bar with slots for logo, navigation links, and actions. Use as the primary header across app pages.`}}}},v=()=>(0,g.jsxs)(`div`,{className:`gap-xs flex items-center`,children:[(0,g.jsx)(l,{children:`Link`}),(0,g.jsx)(l,{selected:!0,children:`Link`}),(0,g.jsx)(l,{children:`Link`})]}),y=()=>(0,g.jsxs)(`div`,{className:`gap-xs flex items-center`,children:[(0,g.jsx)(l,{children:`Link`}),(0,g.jsx)(u,{items:[{label:`Link`,onClick:()=>{}},{label:`Link`,onClick:()=>{}},{label:`Link`,onClick:()=>{}}],children:(0,g.jsx)(d,{children:`Link`})}),(0,g.jsx)(l,{children:`Link`})]}),b=()=>(0,g.jsxs)(`div`,{className:`gap-xs flex items-center`,children:[(0,g.jsx)(i,{kind:`ghost`,IconLeft:s,size:`medium`,"aria-label":`Settings`}),(0,g.jsx)(i,{kind:`ghost`,IconLeft:o,size:`medium`,"aria-label":`Notifications`}),(0,g.jsx)(i,{kind:`ghost`,IconLeft:p,size:`medium`,"aria-label":`Menu`})]}),x=()=>(0,g.jsx)(`div`,{className:`border-border-brand text-text-brand typography-body-small size-container-xs flex items-center justify-center rounded-md border border-dashed`,children:`L`}),S={render:({border:e=!1,showBackButton:t=!0})=>(0,g.jsx)(c,{title:`Dashboard`,border:e,showBackButton:t,companyLogo:(0,g.jsx)(x,{}),backButton:(0,g.jsx)(i,{kind:`ghost`,IconLeft:m,size:`medium`,"aria-label":`Go back`}),linkGroupOne:(0,g.jsx)(v,{}),linkGroupTwo:(0,g.jsx)(y,{}),actions:(0,g.jsx)(b,{})}),args:{border:!1,showBackButton:!0},parameters:{layout:`fullscreen`,controls:{include:[`border`,`showBackButton`]}}},C={args:{border:!0,showBackButton:!0},parameters:{layout:`fullscreen`,controls:{include:[`border`,`showBackButton`]},docs:{description:{story:"Header with exactly two top-level navigation links rendered as `HeaderButton`s. Click a link to make it the active one. Use when the app has only a couple of primary sections."}}},render:function({border:e=!0,showBackButton:t=!0}){let[n,r]=h.useState(`products`);return(0,g.jsx)(c,{title:`Dashboard`,border:e,showBackButton:t,companyLogo:(0,g.jsx)(x,{}),backButton:(0,g.jsx)(i,{kind:`ghost`,IconLeft:m,size:`medium`,"aria-label":`Go back`}),linkGroupOne:(0,g.jsxs)(`div`,{className:`gap-xs flex items-center`,children:[(0,g.jsx)(l,{selected:n===`products`,onClick:()=>r(`products`),children:`Products`}),(0,g.jsx)(l,{selected:n===`resources`,onClick:()=>r(`resources`),children:`Resources`})]}),actions:(0,g.jsx)(b,{})})}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: ({
    border = false,
    showBackButton = true
  }) => <Header title="Dashboard" border={border} showBackButton={showBackButton} companyLogo={<MobileCompanyLogo />} backButton={<Button kind="ghost" IconLeft={IconArrowLeft} size="medium" aria-label="Go back" />} linkGroupOne={<DesktopLinkGroupOne />} linkGroupTwo={<DesktopLinkGroupTwo />} actions={<DesktopActions />} />,
  args: {
    border: false,
    showBackButton: true
  },
  parameters: {
    layout: "fullscreen",
    controls: {
      include: ["border", "showBackButton"]
    }
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    border: true,
    showBackButton: true
  },
  parameters: {
    layout: "fullscreen",
    controls: {
      include: ["border", "showBackButton"]
    },
    docs: {
      description: {
        story: "Header with exactly two top-level navigation links rendered as \`HeaderButton\`s. Click a link to make it the active one. Use when the app has only a couple of primary sections."
      }
    }
  },
  render: function Render({
    border = true,
    showBackButton = true
  }) {
    const [activeLink, setActiveLink] = React.useState<"products" | "resources">("products");
    return <Header title="Dashboard" border={border} showBackButton={showBackButton} companyLogo={<MobileCompanyLogo />} backButton={<Button kind="ghost" IconLeft={IconArrowLeft} size="medium" aria-label="Go back" />} linkGroupOne={<div className="gap-xs flex items-center">
            <HeaderButton selected={activeLink === "products"} onClick={() => setActiveLink("products")}>
              Products
            </HeaderButton>
            <HeaderButton selected={activeLink === "resources"} onClick={() => setActiveLink("resources")}>
              Resources
            </HeaderButton>
          </div>} actions={<DesktopActions />} />;
  }
}`,...C.parameters?.docs?.source}}},w=[`Playground`,`WithTwoLinks`]}))();export{S as Playground,C as WithTwoLinks,w as __namedExportsOrder,_ as default};