import{n as e}from"./chunk-jRWAZmH_.js";import{Cr as t,Di as n,Dr as r,Hn as i,Jn as a,Mr as o,Nr as s,Or as c,Pr as l,br as u,dr as d,fr as f,i as p,ir as m,kr as h,lr as g,n as _,r as v,t as y,tr as b,wr as x,xr as S,yr as C}from"./iframe-Dox94nfK.js";var w,T,E,D,O;e((()=>{y(),a(),w=n(),T={title:`Hendrik Supervision/ContextMenu/ContextMenu`,component:_,tags:[`autodocs`],argTypes:{size:{control:`inline-radio`,options:v}},args:{size:`medium`},parameters:{layout:`centered`,docs:{description:{component:["Right-click menu attached to a trigger surface. Compose entries with `ContextMenuListItem` (optionally nested via `submenu`) and `Divider` for grouping.",``,"Breaking change from earlier versions: `ContextMenuList` was removed — compose items directly as `ContextMenu` children."].join(`
`)}}}},E=`select-none rounded-md border border-dashed border-border p-xlg text-center text-text typography-body-small`,D={render:e=>(0,w.jsxs)(_,{size:e.size,ariaLabel:`File actions`,trigger:(0,w.jsx)(`div`,{className:E,children:`Right-click anywhere in this area`}),children:[(0,w.jsx)(p,{label:`Cut`,shortcut:`⌘X`,IconLeft:r}),(0,w.jsx)(p,{label:`Copy`,shortcut:`⌘C`,IconLeft:c}),(0,w.jsx)(p,{label:`Paste`,shortcut:`⌘V`,IconLeft:h}),(0,w.jsx)(i,{}),(0,w.jsx)(p,{label:`Edit`,shortcut:`⌘E`,IconLeft:t}),(0,w.jsx)(p,{label:`Share`,IconLeft:m,submenu:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(p,{label:`Email`,IconLeft:d,submenu:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(p,{label:`New message`,IconLeft:d}),(0,w.jsx)(p,{label:`Reply to thread`,IconLeft:g})]})}),(0,w.jsx)(p,{label:`Copy link`,IconLeft:f,submenu:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(p,{label:`Full URL`,IconLeft:f}),(0,w.jsx)(p,{label:`Short URL`,IconLeft:f})]})}),(0,w.jsx)(p,{label:`Social`,IconLeft:m,submenu:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(p,{label:`Post to X`,IconLeft:o}),(0,w.jsx)(p,{label:`Share on LinkedIn`,IconLeft:s}),(0,w.jsx)(p,{label:`Share on Facebook`,IconLeft:l})]})})]})}),(0,w.jsx)(p,{label:`Download`,IconLeft:x,submenu:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(p,{label:`As PDF`,IconLeft:u}),(0,w.jsx)(p,{label:`As PNG`,IconLeft:C}),(0,w.jsx)(p,{label:`As CSV`,IconLeft:S})]})}),(0,w.jsx)(i,{}),(0,w.jsx)(p,{label:`Delete`,kind:`danger`,shortcut:`⌫`,IconLeft:b})]})},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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