import{n as e}from"./chunk-jRWAZmH_.js";import{$a as t,Ea as n,Ga as r,Ja as i,Ma as a,Ua as o,Wa as s,Xi as c,_a as l,d as u,ds as d,fo as f,io as p,ka as m,l as h,mo as g,no as _,pa as v,po as y,qa as b,ra as x,t as S,u as C}from"./iframe-Dxk2N5E-.js";import{n as w,t as T}from"./figmaDesign-CO6i5n9C.js";var E,D,O,k,A;e((()=>{S(),x(),w(),E=d(),D={title:`Overlays & Menus/ContextMenu/ContextMenu`,component:h,tags:[`autodocs`],argTypes:{size:{control:`inline-radio`,options:C}},args:{size:`medium`},parameters:{design:T(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=3861-205`),layout:`centered`,docs:{description:{component:["Right-click menu attached to a trigger surface. Compose entries with `ContextMenuListItem` (optionally nested via `submenu`) and `Divider` for grouping.",``,"Breaking change from earlier versions: `ContextMenuList` was removed - compose items directly as `ContextMenu` children."].join(`
`)}}}},O=`select-none rounded-md border border-dashed border-border p-xlg text-center text-text typography-body-small`,k={render:e=>(0,E.jsxs)(h,{size:e.size,ariaLabel:`File actions`,trigger:(0,E.jsx)(`div`,{className:O,children:`Right-click anywhere in this area`}),children:[(0,E.jsx)(u,{label:`Cut`,shortcut:`⌘X`,IconLeft:t,onClick:()=>console.log(`Cut`)}),(0,E.jsx)(u,{label:`Copy`,shortcut:`⌘C`,IconLeft:_,onClick:()=>console.log(`Copy`)}),(0,E.jsx)(u,{label:`Paste`,shortcut:`⌘V`,IconLeft:p,onClick:()=>console.log(`Paste`)}),(0,E.jsx)(c,{}),(0,E.jsx)(u,{label:`Edit`,shortcut:`⌘E`,IconLeft:b,onClick:()=>console.log(`Edit`)}),(0,E.jsx)(u,{label:`Share`,IconLeft:l,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(u,{label:`Email`,IconLeft:m,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(u,{label:`New message`,IconLeft:m}),(0,E.jsx)(u,{label:`Reply to thread`,IconLeft:n})]})}),(0,E.jsx)(u,{label:`Copy link`,IconLeft:a,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(u,{label:`Full URL`,IconLeft:a}),(0,E.jsx)(u,{label:`Short URL`,IconLeft:a})]})}),(0,E.jsx)(u,{label:`Social`,IconLeft:l,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(u,{label:`Post to X`,IconLeft:f}),(0,E.jsx)(u,{label:`Share on LinkedIn`,IconLeft:y}),(0,E.jsx)(u,{label:`Share on Facebook`,IconLeft:g})]})})]})}),(0,E.jsx)(u,{label:`Download`,IconLeft:i,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(u,{label:`As PDF`,IconLeft:s}),(0,E.jsx)(u,{label:`As PNG`,IconLeft:o}),(0,E.jsx)(u,{label:`As CSV`,IconLeft:r})]})}),(0,E.jsx)(c,{}),(0,E.jsx)(u,{label:`Delete`,kind:`danger`,shortcut:`⌫`,IconLeft:v,onClick:()=>console.log(`Delete`)})]})},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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