import{n as e}from"./chunk-jRWAZmH_.js";import{Ai as t,Bi as n,Ci as r,Da as i,Fo as a,La as o,Qi as s,Ra as c,Wi as l,d as u,ga as d,ha as f,ka as p,l as m,ma as h,ra as g,t as _,ta as v,u as y,va as b,wa as x,ya as S,za as C}from"./iframe-RQUrcOP9.js";import{n as w,t as T}from"./figmaDesign-CO6i5n9C.js";var E,D,O,k,A;e((()=>{_(),t(),w(),E=a(),D={title:`Overlays & Menus/ContextMenu/ContextMenu`,component:m,tags:[`autodocs`],argTypes:{size:{control:`inline-radio`,options:y}},args:{size:`medium`},parameters:{design:T(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=3861-205`),layout:`centered`,docs:{description:{component:["Right-click menu attached to a trigger surface. Compose entries with `ContextMenuListItem` (optionally nested via `submenu`) and `Divider` for grouping.",``,"Breaking change from earlier versions: `ContextMenuList` was removed - compose items directly as `ContextMenu` children."].join(`
`)}}}},O=`select-none rounded-md border border-dashed border-border p-xlg text-center text-text typography-body-small`,k={render:e=>(0,E.jsxs)(m,{size:e.size,ariaLabel:`File actions`,trigger:(0,E.jsx)(`div`,{className:O,children:`Right-click anywhere in this area`}),children:[(0,E.jsx)(u,{label:`Cut`,shortcut:`⌘X`,IconLeft:x,onClick:()=>console.log(`Cut`)}),(0,E.jsx)(u,{label:`Copy`,shortcut:`⌘C`,IconLeft:i,onClick:()=>console.log(`Copy`)}),(0,E.jsx)(u,{label:`Paste`,shortcut:`⌘V`,IconLeft:p,onClick:()=>console.log(`Paste`)}),(0,E.jsx)(r,{}),(0,E.jsx)(u,{label:`Edit`,shortcut:`⌘E`,IconLeft:b,onClick:()=>console.log(`Edit`)}),(0,E.jsx)(u,{label:`Share`,IconLeft:l,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(u,{label:`Email`,IconLeft:v,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(u,{label:`New message`,IconLeft:v}),(0,E.jsx)(u,{label:`Reply to thread`,IconLeft:s})]})}),(0,E.jsx)(u,{label:`Copy link`,IconLeft:g,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(u,{label:`Full URL`,IconLeft:g}),(0,E.jsx)(u,{label:`Short URL`,IconLeft:g})]})}),(0,E.jsx)(u,{label:`Social`,IconLeft:l,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(u,{label:`Post to X`,IconLeft:o}),(0,E.jsx)(u,{label:`Share on LinkedIn`,IconLeft:c}),(0,E.jsx)(u,{label:`Share on Facebook`,IconLeft:C})]})})]})}),(0,E.jsx)(u,{label:`Download`,IconLeft:S,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(u,{label:`As PDF`,IconLeft:f}),(0,E.jsx)(u,{label:`As PNG`,IconLeft:h}),(0,E.jsx)(u,{label:`As CSV`,IconLeft:d})]})}),(0,E.jsx)(r,{}),(0,E.jsx)(u,{label:`Delete`,kind:`danger`,shortcut:`⌫`,IconLeft:n,onClick:()=>console.log(`Delete`)})]})},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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