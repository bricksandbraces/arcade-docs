import{n as e}from"./chunk-jRWAZmH_.js";import{Cr as t,Dr as n,Gr as r,Hr as i,Ki as a,Kr as o,Lr as s,Qr as c,Rr as l,Tr as u,Vr as d,Xr as f,Zr as p,d as m,hr as h,l as g,qr as _,sr as v,t as y,tr as b,u as x,vr as S,zr as C}from"./iframe-Bg00cy7E.js";var w,T,E,D,O;e((()=>{y(),v(),w=a(),T={title:`Hendrik Supervision/ContextMenu/ContextMenu`,component:g,tags:[`autodocs`],argTypes:{size:{control:`inline-radio`,options:x}},args:{size:`medium`},parameters:{layout:`centered`,docs:{description:{component:["Right-click menu attached to a trigger surface. Compose entries with `ContextMenuListItem` (optionally nested via `submenu`) and `Divider` for grouping.",``,"Breaking change from earlier versions: `ContextMenuList` was removed — compose items directly as `ContextMenu` children."].join(`
`)}}}},E=`select-none rounded-md border border-dashed border-border p-xlg text-center text-text typography-body-small`,D={render:e=>(0,w.jsxs)(g,{size:e.size,ariaLabel:`File actions`,trigger:(0,w.jsx)(`div`,{className:E,children:`Right-click anywhere in this area`}),children:[(0,w.jsx)(m,{label:`Cut`,shortcut:`⌘X`,IconLeft:r}),(0,w.jsx)(m,{label:`Copy`,shortcut:`⌘C`,IconLeft:o}),(0,w.jsx)(m,{label:`Paste`,shortcut:`⌘V`,IconLeft:_}),(0,w.jsx)(b,{}),(0,w.jsx)(m,{label:`Edit`,shortcut:`⌘E`,IconLeft:d}),(0,w.jsx)(m,{label:`Share`,IconLeft:S,submenu:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(m,{label:`Email`,IconLeft:u,submenu:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(m,{label:`New message`,IconLeft:u}),(0,w.jsx)(m,{label:`Reply to thread`,IconLeft:t})]})}),(0,w.jsx)(m,{label:`Copy link`,IconLeft:n,submenu:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(m,{label:`Full URL`,IconLeft:n}),(0,w.jsx)(m,{label:`Short URL`,IconLeft:n})]})}),(0,w.jsx)(m,{label:`Social`,IconLeft:S,submenu:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(m,{label:`Post to X`,IconLeft:f}),(0,w.jsx)(m,{label:`Share on LinkedIn`,IconLeft:p}),(0,w.jsx)(m,{label:`Share on Facebook`,IconLeft:c})]})})]})}),(0,w.jsx)(m,{label:`Download`,IconLeft:i,submenu:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(m,{label:`As PDF`,IconLeft:l}),(0,w.jsx)(m,{label:`As PNG`,IconLeft:s}),(0,w.jsx)(m,{label:`As CSV`,IconLeft:C})]})}),(0,w.jsx)(b,{}),(0,w.jsx)(m,{label:`Delete`,kind:`danger`,shortcut:`⌫`,IconLeft:h})]})},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: args => <ContextMenu size={args.size} ariaLabel="File actions" trigger={<div className={targetClasses}>Right-click anywhere in this area</div>}>
      <ContextMenuListItem label="Cut" shortcut="⌘X" IconLeft={IconCut} />
      <ContextMenuListItem label="Copy" shortcut="⌘C" IconLeft={IconCopy} />
      <ContextMenuListItem label="Paste" shortcut="⌘V" IconLeft={IconClipboard} />
      <Divider />
      <ContextMenuListItem label="Edit" shortcut="⌘E" IconLeft={IconEdit} />
      <ContextMenuListItem label="Share" IconLeft={IconShare} submenu={<>
            <ContextMenuListItem label="Email" IconLeft={IconMail} submenu={<>
                  <ContextMenuListItem label="New message" IconLeft={IconMail} />
                  <ContextMenuListItem label="Reply to thread" IconLeft={IconMessages} />
                </>} />
            <ContextMenuListItem label="Copy link" IconLeft={IconLink} submenu={<>
                  <ContextMenuListItem label="Full URL" IconLeft={IconLink} />
                  <ContextMenuListItem label="Short URL" IconLeft={IconLink} />
                </>} />
            <ContextMenuListItem label="Social" IconLeft={IconShare} submenu={<>
                  <ContextMenuListItem label="Post to X" IconLeft={IconBrandX} />
                  <ContextMenuListItem label="Share on LinkedIn" IconLeft={IconBrandLinkedin} />
                  <ContextMenuListItem label="Share on Facebook" IconLeft={IconBrandFacebook} />
                </>} />
          </>} />
      <ContextMenuListItem label="Download" IconLeft={IconDownload} submenu={<>
            <ContextMenuListItem label="As PDF" IconLeft={IconFileTypePdf} />
            <ContextMenuListItem label="As PNG" IconLeft={IconFileTypePng} />
            <ContextMenuListItem label="As CSV" IconLeft={IconFileTypeCsv} />
          </>} />
      <Divider />
      <ContextMenuListItem label="Delete" kind="danger" shortcut="⌫" IconLeft={IconTrash} />
    </ContextMenu>
}`,...D.parameters?.docs?.source}}},O=[`Playground`]}))();export{D as Playground,O as __namedExportsOrder,T as default};