import{n as e}from"./chunk-jRWAZmH_.js";import{Br as t,Dr as n,Fr as r,Hr as i,Ii as a,Ir as o,Jn as s,Lr as c,Mr as l,Or as u,Vr as d,_r as f,er as p,hr as m,i as h,jr as g,kr as _,n as v,r as y,sr as b,t as x,ur as S,vr as C}from"./iframe-B1mIPWxP.js";var w,T,E,D,O;e((()=>{x(),p(),w=a(),T={title:`Hendrik Supervision/ContextMenu/ContextMenu`,component:v,tags:[`autodocs`],argTypes:{size:{control:`inline-radio`,options:y}},args:{size:`medium`},parameters:{layout:`centered`,docs:{description:{component:["Right-click menu attached to a trigger surface. Compose entries with `ContextMenuListItem` (optionally nested via `submenu`) and `Divider` for grouping.",``,"Breaking change from earlier versions: `ContextMenuList` was removed — compose items directly as `ContextMenu` children."].join(`
`)}}}},E=`select-none rounded-md border border-dashed border-border p-xlg text-center text-text typography-body-small`,D={render:e=>(0,w.jsxs)(v,{size:e.size,ariaLabel:`File actions`,trigger:(0,w.jsx)(`div`,{className:E,children:`Right-click anywhere in this area`}),children:[(0,w.jsx)(h,{label:`Cut`,shortcut:`⌘X`,IconLeft:r}),(0,w.jsx)(h,{label:`Copy`,shortcut:`⌘C`,IconLeft:o}),(0,w.jsx)(h,{label:`Paste`,shortcut:`⌘V`,IconLeft:c}),(0,w.jsx)(s,{}),(0,w.jsx)(h,{label:`Edit`,shortcut:`⌘E`,IconLeft:g}),(0,w.jsx)(h,{label:`Share`,IconLeft:S,submenu:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(h,{label:`Email`,IconLeft:f,submenu:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(h,{label:`New message`,IconLeft:f}),(0,w.jsx)(h,{label:`Reply to thread`,IconLeft:m})]})}),(0,w.jsx)(h,{label:`Copy link`,IconLeft:C,submenu:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(h,{label:`Full URL`,IconLeft:C}),(0,w.jsx)(h,{label:`Short URL`,IconLeft:C})]})}),(0,w.jsx)(h,{label:`Social`,IconLeft:S,submenu:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(h,{label:`Post to X`,IconLeft:t}),(0,w.jsx)(h,{label:`Share on LinkedIn`,IconLeft:d}),(0,w.jsx)(h,{label:`Share on Facebook`,IconLeft:i})]})})]})}),(0,w.jsx)(h,{label:`Download`,IconLeft:l,submenu:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(h,{label:`As PDF`,IconLeft:u}),(0,w.jsx)(h,{label:`As PNG`,IconLeft:n}),(0,w.jsx)(h,{label:`As CSV`,IconLeft:_})]})}),(0,w.jsx)(s,{}),(0,w.jsx)(h,{label:`Delete`,kind:`danger`,shortcut:`⌫`,IconLeft:b})]})},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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