import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{ay as w,az as r,aA as o,aB as x}from"./ContextMenuList-Dq92F7hd.js";import{r as k}from"./index-0yr9KlQE.js";import"./index-tymuTqDW.js";import"./index-DotmK1FS.js";import"./index-ChaIqHV-.js";import"./borders-N_bRvfGw.js";import"./colors-mvAPBTAn.js";const l=({className:e})=>n.jsxs("svg",{className:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n.jsx("path",{d:"M2 6L8 1.5L14 6V13C14 13.2652 13.8946 13.5196 13.7071 13.7071C13.5196 13.8946 13.2652 14 13 14H3C2.73478 14 2.48043 13.8946 2.29289 13.7071C2.10536 13.5196 2 13.2652 2 13V6Z",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M6 14V8H10V14",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round"})]}),d=({className:e})=>n.jsxs("svg",{className:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n.jsx("path",{d:"M8 8C10.2091 8 12 6.20914 12 4C12 1.79086 10.2091 0 8 0C5.79086 0 4 1.79086 4 4C4 6.20914 5.79086 8 8 8Z",fill:"currentColor"}),n.jsx("path",{d:"M8 10C3.58172 10 0 13.5817 0 18H16C16 13.5817 12.4183 10 8 10Z",fill:"currentColor"})]}),c=({className:e})=>n.jsxs("svg",{className:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n.jsx("path",{d:"M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M12.93 6.42998C12.8336 6.19995 12.6872 5.99372 12.5 5.82998L11.74 5.25998C11.5528 5.09624 11.3466 4.94985 11.12 4.82998C10.8934 4.71012 10.6506 4.61885 10.4 4.55998L9.86 4.43998C9.60936 4.38064 9.35064 4.38064 9.1 4.43998L8.56 4.55998C8.30936 4.61885 8.06664 4.71012 7.84 4.82998C7.61336 4.94985 7.40719 5.09624 7.22 5.25998L6.46 5.82998C6.27281 5.99372 6.12642 6.19995 6.03 6.42998L5.91 6.96998C5.85064 7.22062 5.85064 7.47934 5.91 7.72998L6.03 8.26998C6.12642 8.50001 6.27281 8.70624 6.46 8.86998L7.22 9.43998C7.40719 9.60372 7.61336 9.75011 7.84 9.86998C8.06664 9.98984 8.30936 10.0811 8.56 10.14L9.1 10.26C9.35064 10.3194 9.60936 10.3194 9.86 10.26L10.4 10.14C10.6506 10.0811 10.8934 9.98984 11.12 9.86998C11.3466 9.75011 11.5528 9.60372 11.74 9.43998L12.5 8.86998C12.6872 8.70624 12.8336 8.50001 12.93 8.26998L13.05 7.72998C13.1094 7.47934 13.1094 7.22062 13.05 6.96998L12.93 6.42998Z",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round"})]}),P={title:"WIP Components/Navigation",component:r,argTypes:{expansion:{control:"inline-radio",options:w},onToggle:{action:"toggled"},logo:{control:!1},children:{control:!1},className:{control:"text"}},args:{expansion:"expanded",logo:n.jsx("div",{children:"Logo"}),children:n.jsxs(n.Fragment,{children:[n.jsx(o,{icon:l,title:"Home"}),n.jsx(o,{icon:d,title:"Profile"}),n.jsx(o,{icon:c,title:"Settings"})]})}},t={render:e=>{const[i,y]=k.useState(e.expansion||"expanded"),I=()=>{var p;y(i==="expanded"?"collapsed":"expanded"),(p=e.onToggle)==null||p.call(e)};return n.jsx("div",{style:{height:"600px",display:"flex"},children:n.jsx(r,{...e,expansion:i,onToggle:I,logo:n.jsx(x,{size:i==="expanded"?"default":"small",children:n.jsx("div",{style:{width:"100%",height:"100%",backgroundColor:"#007bff",borderRadius:"4px",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:i==="expanded"?"12px":"8px"},children:"LOGO"})}),children:n.jsxs(n.Fragment,{children:[n.jsx(o,{icon:l,title:i==="expanded"?"Home":void 0,variant:i==="expanded"?"default":"small"}),n.jsx(o,{icon:d,title:i==="expanded"?"Profile":void 0,variant:i==="expanded"?"default":"small"}),n.jsx(o,{icon:c,title:i==="expanded"?"Settings":void 0,variant:i==="expanded"?"default":"small"})]})})})}},a={args:{expansion:"expanded",logo:n.jsx(x,{size:"default",children:n.jsx("div",{style:{width:"100%",height:"100%",backgroundColor:"#007bff",borderRadius:"4px",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:"12px"},children:"LOGO"})}),children:n.jsxs(n.Fragment,{children:[n.jsx(o,{icon:l,title:"Home",variant:"default"}),n.jsx(o,{icon:d,title:"Profile",variant:"default"}),n.jsx(o,{icon:c,title:"Settings",variant:"default"})]})},render:e=>n.jsx("div",{style:{height:"600px",display:"flex"},children:n.jsx(r,{...e})})},s={args:{expansion:"collapsed",logo:n.jsx(x,{size:"small",children:n.jsx("div",{style:{width:"100%",height:"100%",backgroundColor:"#007bff",borderRadius:"4px",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:"8px"},children:"L"})}),children:n.jsxs(n.Fragment,{children:[n.jsx(o,{icon:l,variant:"small"}),n.jsx(o,{icon:d,variant:"small"}),n.jsx(o,{icon:c,variant:"small"})]})},render:e=>n.jsx("div",{style:{height:"600px",display:"flex"},children:n.jsx(r,{...e})})};var g,h,m;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [expansion, setExpansion] = useState(args.expansion || "expanded");
    const handleToggle = () => {
      setExpansion(expansion === "expanded" ? "collapsed" : "expanded");
      args.onToggle?.();
    };
    return <div style={{
      height: "600px",
      display: "flex"
    }}>
        <Navigation {...args} expansion={expansion} onToggle={handleToggle} logo={<NavigationLogo size={expansion === "expanded" ? "default" : "small"}>
              <div style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#007bff",
          borderRadius: "4px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: expansion === "expanded" ? "12px" : "8px"
        }}>
                LOGO
              </div>
            </NavigationLogo>} children={<>
              <NavigationItem icon={HomeIcon} title={expansion === "expanded" ? "Home" : undefined} variant={expansion === "expanded" ? "default" : "small"} />
              <NavigationItem icon={UserIcon} title={expansion === "expanded" ? "Profile" : undefined} variant={expansion === "expanded" ? "default" : "small"} />
              <NavigationItem icon={SettingsIcon} title={expansion === "expanded" ? "Settings" : undefined} variant={expansion === "expanded" ? "default" : "small"} />
            </>} />
      </div>;
  }
}`,...(m=(h=t.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};var f,v,u;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    expansion: "expanded",
    logo: <NavigationLogo size="default">
        <div style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#007bff",
        borderRadius: "4px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontSize: "12px"
      }}>
          LOGO
        </div>
      </NavigationLogo>,
    children: <>
        <NavigationItem icon={HomeIcon} title="Home" variant="default" />
        <NavigationItem icon={UserIcon} title="Profile" variant="default" />
        <NavigationItem icon={SettingsIcon} title="Settings" variant="default" />
      </>
  },
  render: args => <div style={{
    height: "600px",
    display: "flex"
  }}>
      <Navigation {...args} />
    </div>
}`,...(u=(v=a.parameters)==null?void 0:v.docs)==null?void 0:u.source}}};var C,j,L;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    expansion: "collapsed",
    logo: <NavigationLogo size="small">
        <div style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#007bff",
        borderRadius: "4px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontSize: "8px"
      }}>
          L
        </div>
      </NavigationLogo>,
    children: <>
        <NavigationItem icon={HomeIcon} variant="small" />
        <NavigationItem icon={UserIcon} variant="small" />
        <NavigationItem icon={SettingsIcon} variant="small" />
      </>
  },
  render: args => <div style={{
    height: "600px",
    display: "flex"
  }}>
      <Navigation {...args} />
    </div>
}`,...(L=(j=s.parameters)==null?void 0:j.docs)==null?void 0:L.source}}};const R=["Playground","Expanded","Collapsed"];export{s as Collapsed,a as Expanded,t as Playground,R as __namedExportsOrder,P as default};
