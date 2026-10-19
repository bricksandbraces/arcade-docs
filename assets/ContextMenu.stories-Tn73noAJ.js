import{n as e}from"./chunk-jRWAZmH_.js";import{Ao as t,Ma as n,Oa as r,Va as i,Wa as a,ao as o,d as s,go as c,io as l,jo as u,ko as d,ks as f,l as p,lo as m,oa as h,oo as g,qa as _,t as v,u as y,uo as b,va as x,xo as S,yo as C}from"./iframe-BqvyX73F.js";import{n as w,t as T}from"./figmaDesign-DDiUnvXT.js";var E,D,O,k,A;e((()=>{v(),x(),w(),E=f(),D={title:`Overlays & Menus/ContextMenu/ContextMenu`,component:p,tags:[`autodocs`],argTypes:{size:{control:`inline-radio`,options:y}},args:{size:`medium`},parameters:{design:T(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=3861-205`),layout:`centered`,docs:{description:{component:["Right-click menu attached to a trigger surface. Compose entries with `ContextMenuListItem` (optionally nested via `submenu`) and `Divider` for grouping.",``,"Breaking change from earlier versions: `ContextMenuList` was removed - compose items directly as `ContextMenu` children."].join(`
`)}}}},O=`select-none rounded-md border border-dashed border-border p-xlg text-center text-text typography-body-small`,k={render:e=>(0,E.jsxs)(p,{size:e.size,ariaLabel:`File actions`,trigger:(0,E.jsx)(`div`,{className:O,children:`Right-click anywhere in this area`}),children:[(0,E.jsx)(s,{label:`Cut`,shortcut:`⌘X`,IconLeft:c,onClick:()=>console.log(`Cut`)}),(0,E.jsx)(s,{label:`Copy`,shortcut:`⌘C`,IconLeft:C,onClick:()=>console.log(`Copy`)}),(0,E.jsx)(s,{label:`Paste`,shortcut:`⌘V`,IconLeft:S,onClick:()=>console.log(`Paste`)}),(0,E.jsx)(h,{}),(0,E.jsx)(s,{label:`Edit`,shortcut:`⌘E`,IconLeft:m,onClick:()=>console.log(`Edit`)}),(0,E.jsx)(s,{label:`Share`,IconLeft:n,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(s,{label:`Email`,IconLeft:a,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(s,{label:`New message`,IconLeft:a}),(0,E.jsx)(s,{label:`Reply to thread`,IconLeft:i})]})}),(0,E.jsx)(s,{label:`Copy link`,IconLeft:_,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(s,{label:`Full URL`,IconLeft:_}),(0,E.jsx)(s,{label:`Short URL`,IconLeft:_})]})}),(0,E.jsx)(s,{label:`Social`,IconLeft:n,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(s,{label:`Post to X`,IconLeft:d}),(0,E.jsx)(s,{label:`Share on LinkedIn`,IconLeft:t}),(0,E.jsx)(s,{label:`Share on Facebook`,IconLeft:u})]})})]})}),(0,E.jsx)(s,{label:`Download`,IconLeft:b,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(s,{label:`As PDF`,IconLeft:o}),(0,E.jsx)(s,{label:`As PNG`,IconLeft:l}),(0,E.jsx)(s,{label:`As CSV`,IconLeft:g})]})}),(0,E.jsx)(h,{}),(0,E.jsx)(s,{label:`Delete`,kind:`danger`,shortcut:`⌫`,IconLeft:r,onClick:()=>console.log(`Delete`)})]})},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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