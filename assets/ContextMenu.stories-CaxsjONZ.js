import{n as e}from"./chunk-jRWAZmH_.js";import{$r as t,Bi as n,Ii as r,Li as i,Mi as a,Ni as o,Pi as s,Qi as c,Si as l,Ui as u,Wi as d,Xi as f,Zi as p,_i as m,bi as h,ci as g,d as _,di as v,l as y,qa as b,qr as x,t as S,u as C}from"./iframe-1mzDmMUm.js";var w,T,E,D,O;e((()=>{S(),t(),w=b(),T={title:`Overlays & Menus/ContextMenu/ContextMenu`,component:y,tags:[`autodocs`],argTypes:{size:{control:`inline-radio`,options:C}},args:{size:`medium`},parameters:{layout:`centered`,docs:{description:{component:["Right-click menu attached to a trigger surface. Compose entries with `ContextMenuListItem` (optionally nested via `submenu`) and `Divider` for grouping.",``,"Breaking change from earlier versions: `ContextMenuList` was removed — compose items directly as `ContextMenu` children."].join(`
`)}}}},E=`select-none rounded-md border border-dashed border-border p-xlg text-center text-text typography-body-small`,D={render:e=>(0,w.jsxs)(y,{size:e.size,ariaLabel:`File actions`,trigger:(0,w.jsx)(`div`,{className:E,children:`Right-click anywhere in this area`}),children:[(0,w.jsx)(_,{label:`Cut`,shortcut:`⌘X`,IconLeft:n,onClick:()=>console.log(`Cut`)}),(0,w.jsx)(_,{label:`Copy`,shortcut:`⌘C`,IconLeft:u,onClick:()=>console.log(`Copy`)}),(0,w.jsx)(_,{label:`Paste`,shortcut:`⌘V`,IconLeft:d,onClick:()=>console.log(`Paste`)}),(0,w.jsx)(x,{}),(0,w.jsx)(_,{label:`Edit`,shortcut:`⌘E`,IconLeft:r,onClick:()=>console.log(`Edit`)}),(0,w.jsx)(_,{label:`Share`,IconLeft:v,submenu:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(_,{label:`Email`,IconLeft:h,submenu:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(_,{label:`New message`,IconLeft:h}),(0,w.jsx)(_,{label:`Reply to thread`,IconLeft:m})]})}),(0,w.jsx)(_,{label:`Copy link`,IconLeft:l,submenu:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(_,{label:`Full URL`,IconLeft:l}),(0,w.jsx)(_,{label:`Short URL`,IconLeft:l})]})}),(0,w.jsx)(_,{label:`Social`,IconLeft:v,submenu:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(_,{label:`Post to X`,IconLeft:f}),(0,w.jsx)(_,{label:`Share on LinkedIn`,IconLeft:p}),(0,w.jsx)(_,{label:`Share on Facebook`,IconLeft:c})]})})]})}),(0,w.jsx)(_,{label:`Download`,IconLeft:i,submenu:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(_,{label:`As PDF`,IconLeft:o}),(0,w.jsx)(_,{label:`As PNG`,IconLeft:a}),(0,w.jsx)(_,{label:`As CSV`,IconLeft:s})]})}),(0,w.jsx)(x,{}),(0,w.jsx)(_,{label:`Delete`,kind:`danger`,shortcut:`⌫`,IconLeft:g,onClick:()=>console.log(`Delete`)})]})},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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