import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Ca as n,Si as r,To as i,Ui as a,_a as o,aa as s,bt as c,in as l,na as u,oa as d,pi as f,si as p,t as m,uo as h,wa as g,yt as _}from"./iframe-CxJo9uef.js";var v,y,b,x,S,C,w;e((()=>{m(),f(),v=t(i(),1),y=h(),b={title:`Layout & Structure/Toolbar/Toolbar`,component:c,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:`Compact row of icon buttons grouped with optional dividers. Use for editors and canvases where many quick actions share one bar.`}}}},x={parameters:{controls:{disable:!0}},render:()=>(0,y.jsxs)(c,{children:[(0,y.jsx)(_,{"aria-label":`Undo`,children:(0,y.jsx)(g,{size:16})}),(0,y.jsx)(_,{disabled:!0,"aria-label":`Redo`,children:(0,y.jsx)(n,{size:16})}),(0,y.jsx)(p,{orientation:`vertical`}),(0,y.jsx)(_,{"aria-label":`Cut`,children:(0,y.jsx)(u,{size:16})}),(0,y.jsx)(_,{"aria-label":`Copy`,children:(0,y.jsx)(s,{size:16})}),(0,y.jsx)(_,{disabled:!0,"aria-label":`Paste`,children:(0,y.jsx)(d,{size:16})}),(0,y.jsx)(p,{orientation:`vertical`}),(0,y.jsx)(_,{selected:!0,"aria-label":`Bold`,children:(0,y.jsx)(o,{size:16})}),(0,y.jsx)(_,{selected:!0,"aria-label":`Italic`,children:(0,y.jsx)(a,{size:16})}),(0,y.jsx)(_,{"aria-label":`Underline`,children:(0,y.jsx)(r,{size:16})})]})},S={parameters:{controls:{disable:!0}},render:function(){let[e,t]=(0,v.useState)(`hk-grotesk`);return(0,y.jsxs)(c,{className:`flex-wrap`,children:[(0,y.jsx)(l,{title:`Font`,size:`small`,inline:!0,reserveInlineNotificationHeight:!1,value:e,onChange:t,items:[{label:`HK Grotesk`,value:`hk-grotesk`,style:{fontFamily:`"HK Grotesk", sans-serif`}},{label:`DM Mono`,value:`dm-mono`,style:{fontFamily:`"DM Mono", monospace`}},{label:`Red Hat Mono`,value:`red-hat-mono`,style:{fontFamily:`"Red Hat Mono", monospace`}}]}),(0,y.jsx)(p,{orientation:`vertical`}),(0,y.jsx)(_,{"aria-label":`Undo`,children:(0,y.jsx)(g,{size:16})}),(0,y.jsx)(_,{disabled:!0,"aria-label":`Redo`,children:(0,y.jsx)(n,{size:16})}),(0,y.jsx)(p,{orientation:`vertical`}),(0,y.jsx)(_,{"aria-label":`Cut`,children:(0,y.jsx)(u,{size:16})}),(0,y.jsx)(_,{"aria-label":`Copy`,children:(0,y.jsx)(s,{size:16})}),(0,y.jsx)(_,{disabled:!0,"aria-label":`Paste`,children:(0,y.jsx)(d,{size:16})}),(0,y.jsx)(p,{orientation:`vertical`}),(0,y.jsx)(_,{selected:!0,"aria-label":`Bold`,children:(0,y.jsx)(o,{size:16})}),(0,y.jsx)(_,{selected:!0,"aria-label":`Italic`,children:(0,y.jsx)(a,{size:16})}),(0,y.jsx)(_,{"aria-label":`Underline`,children:(0,y.jsx)(r,{size:16})})]})}},C=x,x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Toolbar>
      <ToolbarItem aria-label="Undo">
        <IconArrowBackUp size={16} />
      </ToolbarItem>
      <ToolbarItem disabled aria-label="Redo">
        <IconArrowForwardUp size={16} />
      </ToolbarItem>
      <Divider orientation="vertical" />
      <ToolbarItem aria-label="Cut">
        <IconCut size={16} />
      </ToolbarItem>
      <ToolbarItem aria-label="Copy">
        <IconCopy size={16} />
      </ToolbarItem>
      <ToolbarItem disabled aria-label="Paste">
        <IconClipboard size={16} />
      </ToolbarItem>
      <Divider orientation="vertical" />
      <ToolbarItem selected aria-label="Bold">
        <IconBold size={16} />
      </ToolbarItem>
      <ToolbarItem selected aria-label="Italic">
        <IconItalic size={16} />
      </ToolbarItem>
      <ToolbarItem aria-label="Underline">
        <IconUnderline size={16} />
      </ToolbarItem>
    </Toolbar>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: function FontMenuToolbar() {
    const [font, setFont] = useState<string | null>("hk-grotesk");
    const fontItems = [{
      label: "HK Grotesk",
      value: "hk-grotesk",
      style: {
        fontFamily: '"HK Grotesk", sans-serif'
      }
    }, {
      label: "DM Mono",
      value: "dm-mono",
      style: {
        fontFamily: '"DM Mono", monospace'
      }
    }, {
      label: "Red Hat Mono",
      value: "red-hat-mono",
      style: {
        fontFamily: '"Red Hat Mono", monospace'
      }
    }];
    return <Toolbar className="flex-wrap">
        <Dropdown title="Font" size="small" inline reserveInlineNotificationHeight={false} value={font} onChange={setFont} items={fontItems} />
        <Divider orientation="vertical" />
        <ToolbarItem aria-label="Undo">
          <IconArrowBackUp size={16} />
        </ToolbarItem>
        <ToolbarItem disabled aria-label="Redo">
          <IconArrowForwardUp size={16} />
        </ToolbarItem>
        <Divider orientation="vertical" />
        <ToolbarItem aria-label="Cut">
          <IconCut size={16} />
        </ToolbarItem>
        <ToolbarItem aria-label="Copy">
          <IconCopy size={16} />
        </ToolbarItem>
        <ToolbarItem disabled aria-label="Paste">
          <IconClipboard size={16} />
        </ToolbarItem>
        <Divider orientation="vertical" />
        <ToolbarItem selected aria-label="Bold">
          <IconBold size={16} />
        </ToolbarItem>
        <ToolbarItem selected aria-label="Italic">
          <IconItalic size={16} />
        </ToolbarItem>
        <ToolbarItem aria-label="Underline">
          <IconUnderline size={16} />
        </ToolbarItem>
      </Toolbar>;
  }
}`,...S.parameters?.docs?.source},description:{story:"Font dropdown: each item uses inline `style` so fonts apply regardless of Tailwind JIT scanning.",...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`Overview`,...C.parameters?.docs?.source}}},w=[`Overview`,`WithFontMenu`,`Playground`]}))();export{x as Overview,C as Playground,S as WithFontMenu,w as __namedExportsOrder,b as default};