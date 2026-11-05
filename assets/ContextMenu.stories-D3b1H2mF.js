import{n as e}from"./chunk-jRWAZmH_.js";import{Bo as t,Co as n,Fo as r,Oo as i,Pa as a,Qs as o,Ro as s,To as c,Wa as l,Xo as u,Ya as d,Yo as f,Zo as p,ao as m,co as h,d as g,do as _,ko as v,l as y,t as b,u as x,va as S,wo as C}from"./iframe-U545K7vP.js";import{n as w,t as T}from"./figmaDesign-DDiUnvXT.js";var E,D,O,k,A;e((()=>{b(),a(),w(),E=o(),D={title:`Overlays & Menus/ContextMenu/ContextMenu`,component:y,tags:[`autodocs`],argTypes:{size:{control:`inline-radio`,options:x}},args:{size:`medium`},parameters:{design:T(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=3861-205`),layout:`centered`,docs:{description:{component:["Right-click menu attached to a trigger surface. Compose entries with `ContextMenuListItem` (optionally nested via `submenu`) and `Divider` for grouping.",``,"Breaking change from earlier versions: `ContextMenuList` was removed - compose items directly as `ContextMenu` children."].join(`
`)}}}},O=`select-none rounded-md border border-dashed border-border p-xlg text-center text-text typography-body-small`,k={render:e=>(0,E.jsxs)(y,{size:e.size,ariaLabel:`File actions`,trigger:(0,E.jsx)(`div`,{className:O,children:`Right-click anywhere in this area`}),children:[(0,E.jsx)(g,{label:`Cut`,shortcut:`⌘X`,IconLeft:r,onClick:()=>console.log(`Cut`)}),(0,E.jsx)(g,{label:`Copy`,shortcut:`⌘C`,IconLeft:s,onClick:()=>console.log(`Copy`)}),(0,E.jsx)(g,{label:`Paste`,shortcut:`⌘V`,IconLeft:t,onClick:()=>console.log(`Paste`)}),(0,E.jsx)(S,{}),(0,E.jsx)(g,{label:`Edit`,shortcut:`⌘E`,IconLeft:i,onClick:()=>console.log(`Edit`)}),(0,E.jsx)(g,{label:`Share`,IconLeft:d,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(g,{label:`Email`,IconLeft:h,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(g,{label:`New message`,IconLeft:h}),(0,E.jsx)(g,{label:`Reply to thread`,IconLeft:m})]})}),(0,E.jsx)(g,{label:`Copy link`,IconLeft:_,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(g,{label:`Full URL`,IconLeft:_}),(0,E.jsx)(g,{label:`Short URL`,IconLeft:_})]})}),(0,E.jsx)(g,{label:`Social`,IconLeft:d,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(g,{label:`Post to X`,IconLeft:f}),(0,E.jsx)(g,{label:`Share on LinkedIn`,IconLeft:u}),(0,E.jsx)(g,{label:`Share on Facebook`,IconLeft:p})]})})]})}),(0,E.jsx)(g,{label:`Download`,IconLeft:v,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(g,{label:`As PDF`,IconLeft:C}),(0,E.jsx)(g,{label:`As PNG`,IconLeft:n}),(0,E.jsx)(g,{label:`As CSV`,IconLeft:c})]})}),(0,E.jsx)(S,{}),(0,E.jsx)(g,{label:`Delete`,kind:`danger`,shortcut:`⌫`,IconLeft:l,onClick:()=>console.log(`Delete`)})]})},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A=[`Playground`]}))();export{k as Playground,A as __namedExportsOrder,D as default};