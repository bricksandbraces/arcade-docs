import{n as e}from"./chunk-jRWAZmH_.js";import{$a as t,Ja as n,La as r,Pa as i,Sa as a,Xa as o,Ya as s,bo as c,ca as l,do as u,ea as d,eo as f,f as p,i as m,ja as h,lo as g,m as _,oo as v,p as y,va as b,vs as x,xo as S,yo as C}from"./iframe-vatATh5Q.js";import{n as w,t as T}from"./figmaDesign-CO6i5n9C.js";var E,D,O,k,A;e((()=>{m(),l(),w(),E=x(),D={title:`Overlays & Menus/ContextMenu/ContextMenu`,component:p,tags:[`autodocs`],argTypes:{size:{control:`inline-radio`,options:y}},args:{size:`medium`},parameters:{design:T(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=3861-205`),layout:`centered`,docs:{description:{component:["Right-click menu attached to a trigger surface. Compose entries with `ContextMenuListItem` (optionally nested via `submenu`) and `Divider` for grouping.",``,"Breaking change from earlier versions: `ContextMenuList` was removed - compose items directly as `ContextMenu` children."].join(`
`)}}}},O=`select-none rounded-md border border-dashed border-border p-xlg text-center text-text typography-body-small`,k={render:e=>(0,E.jsxs)(p,{size:e.size,ariaLabel:`File actions`,trigger:(0,E.jsx)(`div`,{className:O,children:`Right-click anywhere in this area`}),children:[(0,E.jsx)(_,{label:`Cut`,shortcut:`⌘X`,IconLeft:v,onClick:()=>console.log(`Cut`)}),(0,E.jsx)(_,{label:`Copy`,shortcut:`⌘C`,IconLeft:g,onClick:()=>console.log(`Copy`)}),(0,E.jsx)(_,{label:`Paste`,shortcut:`⌘V`,IconLeft:u,onClick:()=>console.log(`Paste`)}),(0,E.jsx)(d,{}),(0,E.jsx)(_,{label:`Edit`,shortcut:`⌘E`,IconLeft:t,onClick:()=>console.log(`Edit`)}),(0,E.jsx)(_,{label:`Share`,IconLeft:a,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(_,{label:`Email`,IconLeft:i,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(_,{label:`New message`,IconLeft:i}),(0,E.jsx)(_,{label:`Reply to thread`,IconLeft:h})]})}),(0,E.jsx)(_,{label:`Copy link`,IconLeft:r,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(_,{label:`Full URL`,IconLeft:r}),(0,E.jsx)(_,{label:`Short URL`,IconLeft:r})]})}),(0,E.jsx)(_,{label:`Social`,IconLeft:a,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(_,{label:`Post to X`,IconLeft:C}),(0,E.jsx)(_,{label:`Share on LinkedIn`,IconLeft:c}),(0,E.jsx)(_,{label:`Share on Facebook`,IconLeft:S})]})})]})}),(0,E.jsx)(_,{label:`Download`,IconLeft:f,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(_,{label:`As PDF`,IconLeft:s}),(0,E.jsx)(_,{label:`As PNG`,IconLeft:n}),(0,E.jsx)(_,{label:`As CSV`,IconLeft:o})]})}),(0,E.jsx)(d,{}),(0,E.jsx)(_,{label:`Delete`,kind:`danger`,shortcut:`⌫`,IconLeft:b,onClick:()=>console.log(`Delete`)})]})},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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