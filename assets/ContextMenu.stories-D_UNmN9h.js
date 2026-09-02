import{n as e}from"./chunk-jRWAZmH_.js";import{Ki as t,Pi as n,Sa as r,Vi as i,Wi as a,ba as o,d as s,hi as c,ia as l,ji as u,l as d,ma as f,na as p,oa as m,pa as h,ra as g,sa as _,t as v,u as y,ua as b,vo as x,xa as S,xi as C}from"./iframe-Bu5mwsKt.js";var w,T,E,D,O;e((()=>{v(),C(),w=x(),T={title:`Overlays & Menus/ContextMenu/ContextMenu`,component:d,tags:[`autodocs`],argTypes:{size:{control:`inline-radio`,options:y}},args:{size:`medium`},parameters:{layout:`centered`,docs:{description:{component:["Right-click menu attached to a trigger surface. Compose entries with `ContextMenuListItem` (optionally nested via `submenu`) and `Divider` for grouping.",``,"Breaking change from earlier versions: `ContextMenuList` was removed — compose items directly as `ContextMenu` children."].join(`
`)}}}},E=`select-none rounded-md border border-dashed border-border p-xlg text-center text-text typography-body-small`,D={render:e=>(0,w.jsxs)(d,{size:e.size,ariaLabel:`File actions`,trigger:(0,w.jsx)(`div`,{className:E,children:`Right-click anywhere in this area`}),children:[(0,w.jsx)(s,{label:`Cut`,shortcut:`⌘X`,IconLeft:b,onClick:()=>console.log(`Cut`)}),(0,w.jsx)(s,{label:`Copy`,shortcut:`⌘C`,IconLeft:h,onClick:()=>console.log(`Copy`)}),(0,w.jsx)(s,{label:`Paste`,shortcut:`⌘V`,IconLeft:f,onClick:()=>console.log(`Paste`)}),(0,w.jsx)(c,{}),(0,w.jsx)(s,{label:`Edit`,shortcut:`⌘E`,IconLeft:m,onClick:()=>console.log(`Edit`)}),(0,w.jsx)(s,{label:`Share`,IconLeft:n,submenu:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(s,{label:`Email`,IconLeft:a,submenu:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(s,{label:`New message`,IconLeft:a}),(0,w.jsx)(s,{label:`Reply to thread`,IconLeft:i})]})}),(0,w.jsx)(s,{label:`Copy link`,IconLeft:t,submenu:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(s,{label:`Full URL`,IconLeft:t}),(0,w.jsx)(s,{label:`Short URL`,IconLeft:t})]})}),(0,w.jsx)(s,{label:`Social`,IconLeft:n,submenu:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(s,{label:`Post to X`,IconLeft:o}),(0,w.jsx)(s,{label:`Share on LinkedIn`,IconLeft:S}),(0,w.jsx)(s,{label:`Share on Facebook`,IconLeft:r})]})})]})}),(0,w.jsx)(s,{label:`Download`,IconLeft:_,submenu:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(s,{label:`As PDF`,IconLeft:g}),(0,w.jsx)(s,{label:`As PNG`,IconLeft:p}),(0,w.jsx)(s,{label:`As CSV`,IconLeft:l})]})}),(0,w.jsx)(c,{}),(0,w.jsx)(s,{label:`Delete`,kind:`danger`,shortcut:`⌫`,IconLeft:u,onClick:()=>console.log(`Delete`)})]})},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: args => <ContextMenu size={args.size} ariaLabel="File actions" trigger={<div className={targetClasses}>Right-click anywhere in this area</div>}>
      <ContextMenuListItem label="Cut" shortcut="⌘X" IconLeft={IconCut} onClick={() => console.log("Cut")} />
      <ContextMenuListItem label="Copy" shortcut="⌘C" IconLeft={IconCopy} onClick={() => console.log("Copy")} />
      <ContextMenuListItem label="Paste" shortcut="⌘V" IconLeft={IconClipboard} onClick={() => console.log("Paste")} />
      <Divider />
      <ContextMenuListItem label="Edit" shortcut="⌘E" IconLeft={IconEdit} onClick={() => console.log("Edit")} />
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
      <ContextMenuListItem label="Delete" kind="danger" shortcut="⌫" IconLeft={IconTrash} onClick={() => console.log("Delete")} />
    </ContextMenu>
}`,...D.parameters?.docs?.source}}},O=[`Playground`]}))();export{D as Playground,O as __namedExportsOrder,T as default};