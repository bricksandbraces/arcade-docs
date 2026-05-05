import{n as e}from"./chunk-jRWAZmH_.js";import{Ar as t,Br as n,Dr as r,Er as i,Fr as a,Kn as o,Nr as s,Pi as c,Pr as l,Qn as u,Rr as d,Tr as f,ar as p,cr as m,gr as h,hr as g,i as _,kr as v,n as y,pr as b,r as x,t as S,zr as C}from"./iframe-CppZwykT.js";var w,T,E,D,O;e((()=>{S(),u(),w=c(),T={title:`Hendrik Supervision/ContextMenu/ContextMenu`,component:y,tags:[`autodocs`],argTypes:{size:{control:`inline-radio`,options:x}},args:{size:`medium`},parameters:{layout:`centered`,docs:{description:{component:["Right-click menu attached to a trigger surface. Compose entries with `ContextMenuListItem` (optionally nested via `submenu`) and `Divider` for grouping.",``,"Breaking change from earlier versions: `ContextMenuList` was removed — compose items directly as `ContextMenu` children."].join(`
`)}}}},E=`select-none rounded-md border border-dashed border-border p-xlg text-center text-text typography-body-small`,D={render:e=>(0,w.jsxs)(y,{size:e.size,ariaLabel:`File actions`,trigger:(0,w.jsx)(`div`,{className:E,children:`Right-click anywhere in this area`}),children:[(0,w.jsx)(_,{label:`Cut`,shortcut:`⌘X`,IconLeft:s}),(0,w.jsx)(_,{label:`Copy`,shortcut:`⌘C`,IconLeft:l}),(0,w.jsx)(_,{label:`Paste`,shortcut:`⌘V`,IconLeft:a}),(0,w.jsx)(o,{}),(0,w.jsx)(_,{label:`Edit`,shortcut:`⌘E`,IconLeft:v}),(0,w.jsx)(_,{label:`Share`,IconLeft:m,submenu:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(_,{label:`Email`,IconLeft:g,submenu:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(_,{label:`New message`,IconLeft:g}),(0,w.jsx)(_,{label:`Reply to thread`,IconLeft:b})]})}),(0,w.jsx)(_,{label:`Copy link`,IconLeft:h,submenu:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(_,{label:`Full URL`,IconLeft:h}),(0,w.jsx)(_,{label:`Short URL`,IconLeft:h})]})}),(0,w.jsx)(_,{label:`Social`,IconLeft:m,submenu:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(_,{label:`Post to X`,IconLeft:d}),(0,w.jsx)(_,{label:`Share on LinkedIn`,IconLeft:C}),(0,w.jsx)(_,{label:`Share on Facebook`,IconLeft:n})]})})]})}),(0,w.jsx)(_,{label:`Download`,IconLeft:t,submenu:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(_,{label:`As PDF`,IconLeft:i}),(0,w.jsx)(_,{label:`As PNG`,IconLeft:f}),(0,w.jsx)(_,{label:`As CSV`,IconLeft:r})]})}),(0,w.jsx)(o,{}),(0,w.jsx)(_,{label:`Delete`,kind:`danger`,shortcut:`⌫`,IconLeft:p})]})},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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