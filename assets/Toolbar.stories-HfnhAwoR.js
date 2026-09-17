import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Ji as n,Ln as r,Na as i,Qa as a,Ya as o,bo as s,eo as c,os as l,po as u,t as d,ta as f,ua as p,vt as m,xs as h,yo as g,yt as _}from"./iframe-C8ZRcM3y.js";import{n as v,t as y}from"./figmaDesign-CO6i5n9C.js";var b,x,S,C,w,T,E;e((()=>{d(),f(),b=t(h(),1),v(),x=l(),S={title:`Layout & Structure/Toolbar/Toolbar`,component:_,tags:[`autodocs`],parameters:{design:y(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System`),layout:`centered`,docs:{description:{component:`Compact row of icon buttons grouped with optional dividers. Use for editors and canvases where many quick actions share one bar.`}}}},C={parameters:{controls:{disable:!0}},render:()=>(0,x.jsxs)(_,{children:[(0,x.jsx)(m,{"aria-label":`Undo`,children:(0,x.jsx)(s,{size:16})}),(0,x.jsx)(m,{disabled:!0,"aria-label":`Redo`,children:(0,x.jsx)(g,{size:16})}),(0,x.jsx)(n,{orientation:`vertical`}),(0,x.jsx)(m,{"aria-label":`Cut`,children:(0,x.jsx)(o,{size:16})}),(0,x.jsx)(m,{"aria-label":`Copy`,children:(0,x.jsx)(a,{size:16})}),(0,x.jsx)(m,{disabled:!0,"aria-label":`Paste`,children:(0,x.jsx)(c,{size:16})}),(0,x.jsx)(n,{orientation:`vertical`}),(0,x.jsx)(m,{selected:!0,"aria-label":`Bold`,children:(0,x.jsx)(u,{size:16})}),(0,x.jsx)(m,{selected:!0,"aria-label":`Italic`,children:(0,x.jsx)(i,{size:16})}),(0,x.jsx)(m,{"aria-label":`Underline`,children:(0,x.jsx)(p,{size:16})})]})},w={parameters:{controls:{disable:!0}},render:function(){let[e,t]=(0,b.useState)(`hk-grotesk`);return(0,x.jsxs)(_,{className:`flex-wrap`,children:[(0,x.jsx)(r,{title:`Font`,size:`small`,inline:!0,reserveInlineNotificationHeight:!1,value:e,onChange:t,items:[{label:`HK Grotesk`,value:`hk-grotesk`,style:{fontFamily:`"HK Grotesk", sans-serif`}},{label:`DM Mono`,value:`dm-mono`,style:{fontFamily:`"DM Mono", monospace`}},{label:`Red Hat Mono`,value:`red-hat-mono`,style:{fontFamily:`"Red Hat Mono", monospace`}}]}),(0,x.jsx)(n,{orientation:`vertical`}),(0,x.jsx)(m,{"aria-label":`Undo`,children:(0,x.jsx)(s,{size:16})}),(0,x.jsx)(m,{disabled:!0,"aria-label":`Redo`,children:(0,x.jsx)(g,{size:16})}),(0,x.jsx)(n,{orientation:`vertical`}),(0,x.jsx)(m,{"aria-label":`Cut`,children:(0,x.jsx)(o,{size:16})}),(0,x.jsx)(m,{"aria-label":`Copy`,children:(0,x.jsx)(a,{size:16})}),(0,x.jsx)(m,{disabled:!0,"aria-label":`Paste`,children:(0,x.jsx)(c,{size:16})}),(0,x.jsx)(n,{orientation:`vertical`}),(0,x.jsx)(m,{selected:!0,"aria-label":`Bold`,children:(0,x.jsx)(u,{size:16})}),(0,x.jsx)(m,{selected:!0,"aria-label":`Italic`,children:(0,x.jsx)(i,{size:16})}),(0,x.jsx)(m,{"aria-label":`Underline`,children:(0,x.jsx)(p,{size:16})})]})}},T=C,C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source},description:{story:"Font dropdown: each item uses inline `style` so fonts apply regardless of Tailwind JIT scanning.",...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`Overview`,...T.parameters?.docs?.source}}},E=[`Overview`,`WithFontMenu`,`Playground`]}))();export{C as Overview,T as Playground,w as WithFontMenu,E as __namedExportsOrder,S as default};