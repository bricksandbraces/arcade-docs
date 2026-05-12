import{n as e}from"./chunk-jRWAZmH_.js";import{Br as t,Er as n,Fr as r,Qr as i,Rr as a,Xr as o,Zr as s,_r as c,ci as l,d as u,da as d,dr as f,ei as p,gi as m,hi as h,ii as g,kr as _,l as v,mi as y,si as b,t as x,ti as S,u as C}from"./iframe-BY85Oiue.js";var w,T,E,D,O;e((()=>{x(),c(),w=d(),T={title:`Overlays & Menus/ContextMenu/ContextMenu`,component:v,tags:[`autodocs`],argTypes:{size:{control:`inline-radio`,options:C}},args:{size:`medium`},parameters:{layout:`centered`,docs:{description:{component:["Right-click menu attached to a trigger surface. Compose entries with `ContextMenuListItem` (optionally nested via `submenu`) and `Divider` for grouping.",``,"Breaking change from earlier versions: `ContextMenuList` was removed — compose items directly as `ContextMenu` children."].join(`
`)}}}},E=`select-none rounded-md border border-dashed border-border p-xlg text-center text-text typography-body-small`,D={render:e=>(0,w.jsxs)(v,{size:e.size,ariaLabel:`File actions`,trigger:(0,w.jsx)(`div`,{className:E,children:`Right-click anywhere in this area`}),children:[(0,w.jsx)(u,{label:`Cut`,shortcut:`⌘X`,IconLeft:g,onClick:()=>console.log(`Cut`)}),(0,w.jsx)(u,{label:`Copy`,shortcut:`⌘C`,IconLeft:b,onClick:()=>console.log(`Copy`)}),(0,w.jsx)(u,{label:`Paste`,shortcut:`⌘V`,IconLeft:l,onClick:()=>console.log(`Paste`)}),(0,w.jsx)(f,{}),(0,w.jsx)(u,{label:`Edit`,shortcut:`⌘E`,IconLeft:p,onClick:()=>console.log(`Edit`)}),(0,w.jsx)(u,{label:`Share`,IconLeft:_,submenu:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(u,{label:`Email`,IconLeft:a,submenu:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(u,{label:`New message`,IconLeft:a}),(0,w.jsx)(u,{label:`Reply to thread`,IconLeft:r})]})}),(0,w.jsx)(u,{label:`Copy link`,IconLeft:t,submenu:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(u,{label:`Full URL`,IconLeft:t}),(0,w.jsx)(u,{label:`Short URL`,IconLeft:t})]})}),(0,w.jsx)(u,{label:`Social`,IconLeft:_,submenu:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(u,{label:`Post to X`,IconLeft:y}),(0,w.jsx)(u,{label:`Share on LinkedIn`,IconLeft:h}),(0,w.jsx)(u,{label:`Share on Facebook`,IconLeft:m})]})})]})}),(0,w.jsx)(u,{label:`Download`,IconLeft:S,submenu:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(u,{label:`As PDF`,IconLeft:s}),(0,w.jsx)(u,{label:`As PNG`,IconLeft:o}),(0,w.jsx)(u,{label:`As CSV`,IconLeft:i})]})}),(0,w.jsx)(f,{}),(0,w.jsx)(u,{label:`Delete`,kind:`danger`,shortcut:`⌫`,IconLeft:n,onClick:()=>console.log(`Delete`)})]})},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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