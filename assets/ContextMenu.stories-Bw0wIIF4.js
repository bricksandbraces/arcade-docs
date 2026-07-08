import{n as e}from"./chunk-jRWAZmH_.js";import{$i as t,Ai as n,Ci as r,Fi as i,Gi as a,Ki as o,Ni as s,Xi as c,Yi as l,bi as u,d,da as f,ii as p,l as m,la as h,na as g,qi as _,ra as v,so as y,t as b,u as x,ua as S,ui as C}from"./iframe-wiHC-9as.js";var w,T,E,D,O;e((()=>{b(),C(),w=y(),T={title:`Overlays & Menus/ContextMenu/ContextMenu`,component:m,tags:[`autodocs`],argTypes:{size:{control:`inline-radio`,options:x}},args:{size:`medium`},parameters:{layout:`centered`,docs:{description:{component:["Right-click menu attached to a trigger surface. Compose entries with `ContextMenuListItem` (optionally nested via `submenu`) and `Divider` for grouping.",``,"Breaking change from earlier versions: `ContextMenuList` was removed — compose items directly as `ContextMenu` children."].join(`
`)}}}},E=`select-none rounded-md border border-dashed border-border p-xlg text-center text-text typography-body-small`,D={render:e=>(0,w.jsxs)(m,{size:e.size,ariaLabel:`File actions`,trigger:(0,w.jsx)(`div`,{className:E,children:`Right-click anywhere in this area`}),children:[(0,w.jsx)(d,{label:`Cut`,shortcut:`⌘X`,IconLeft:t,onClick:()=>console.log(`Cut`)}),(0,w.jsx)(d,{label:`Copy`,shortcut:`⌘C`,IconLeft:g,onClick:()=>console.log(`Copy`)}),(0,w.jsx)(d,{label:`Paste`,shortcut:`⌘V`,IconLeft:v,onClick:()=>console.log(`Paste`)}),(0,w.jsx)(p,{}),(0,w.jsx)(d,{label:`Edit`,shortcut:`⌘E`,IconLeft:l,onClick:()=>console.log(`Edit`)}),(0,w.jsx)(d,{label:`Share`,IconLeft:r,submenu:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(d,{label:`Email`,IconLeft:s,submenu:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(d,{label:`New message`,IconLeft:s}),(0,w.jsx)(d,{label:`Reply to thread`,IconLeft:n})]})}),(0,w.jsx)(d,{label:`Copy link`,IconLeft:i,submenu:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(d,{label:`Full URL`,IconLeft:i}),(0,w.jsx)(d,{label:`Short URL`,IconLeft:i})]})}),(0,w.jsx)(d,{label:`Social`,IconLeft:r,submenu:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(d,{label:`Post to X`,IconLeft:h}),(0,w.jsx)(d,{label:`Share on LinkedIn`,IconLeft:S}),(0,w.jsx)(d,{label:`Share on Facebook`,IconLeft:f})]})})]})}),(0,w.jsx)(d,{label:`Download`,IconLeft:c,submenu:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(d,{label:`As PDF`,IconLeft:o}),(0,w.jsx)(d,{label:`As PNG`,IconLeft:a}),(0,w.jsx)(d,{label:`As CSV`,IconLeft:_})]})}),(0,w.jsx)(p,{}),(0,w.jsx)(d,{label:`Delete`,kind:`danger`,shortcut:`⌫`,IconLeft:u,onClick:()=>console.log(`Delete`)})]})},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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