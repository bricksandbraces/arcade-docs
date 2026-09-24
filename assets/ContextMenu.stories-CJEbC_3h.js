import{n as e}from"./chunk-jRWAZmH_.js";import{Ca as t,Fa as n,Ma as r,Ra as i,So as a,Xa as o,Ya as s,Za as c,bo as l,eo as u,f as d,fo as f,i as p,la as m,m as h,p as g,so as _,ta as v,to as y,uo as b,xo as x,ya as S,ys as C}from"./iframe-DvVpl985.js";import{n as w,t as T}from"./figmaDesign-CO6i5n9C.js";var E,D,O,k,A;e((()=>{p(),m(),w(),E=C(),D={title:`Overlays & Menus/ContextMenu/ContextMenu`,component:d,tags:[`autodocs`],argTypes:{size:{control:`inline-radio`,options:g}},args:{size:`medium`},parameters:{design:T(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=3861-205`),layout:`centered`,docs:{description:{component:["Right-click menu attached to a trigger surface. Compose entries with `ContextMenuListItem` (optionally nested via `submenu`) and `Divider` for grouping.",``,"Breaking change from earlier versions: `ContextMenuList` was removed - compose items directly as `ContextMenu` children."].join(`
`)}}}},O=`select-none rounded-md border border-dashed border-border p-xlg text-center text-text typography-body-small`,k={render:e=>(0,E.jsxs)(d,{size:e.size,ariaLabel:`File actions`,trigger:(0,E.jsx)(`div`,{className:O,children:`Right-click anywhere in this area`}),children:[(0,E.jsx)(h,{label:`Cut`,shortcut:`⌘X`,IconLeft:_,onClick:()=>console.log(`Cut`)}),(0,E.jsx)(h,{label:`Copy`,shortcut:`⌘C`,IconLeft:b,onClick:()=>console.log(`Copy`)}),(0,E.jsx)(h,{label:`Paste`,shortcut:`⌘V`,IconLeft:f,onClick:()=>console.log(`Paste`)}),(0,E.jsx)(v,{}),(0,E.jsx)(h,{label:`Edit`,shortcut:`⌘E`,IconLeft:u,onClick:()=>console.log(`Edit`)}),(0,E.jsx)(h,{label:`Share`,IconLeft:t,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(h,{label:`Email`,IconLeft:n,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(h,{label:`New message`,IconLeft:n}),(0,E.jsx)(h,{label:`Reply to thread`,IconLeft:r})]})}),(0,E.jsx)(h,{label:`Copy link`,IconLeft:i,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(h,{label:`Full URL`,IconLeft:i}),(0,E.jsx)(h,{label:`Short URL`,IconLeft:i})]})}),(0,E.jsx)(h,{label:`Social`,IconLeft:t,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(h,{label:`Post to X`,IconLeft:l}),(0,E.jsx)(h,{label:`Share on LinkedIn`,IconLeft:x}),(0,E.jsx)(h,{label:`Share on Facebook`,IconLeft:a})]})})]})}),(0,E.jsx)(h,{label:`Download`,IconLeft:y,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(h,{label:`As PDF`,IconLeft:o}),(0,E.jsx)(h,{label:`As PNG`,IconLeft:s}),(0,E.jsx)(h,{label:`As CSV`,IconLeft:c})]})}),(0,E.jsx)(v,{}),(0,E.jsx)(h,{label:`Delete`,kind:`danger`,shortcut:`⌫`,IconLeft:S,onClick:()=>console.log(`Delete`)})]})},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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