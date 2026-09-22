import{n as e}from"./chunk-jRWAZmH_.js";import{Aa as t,Ia as n,Ja as r,Na as i,Qa as a,Ya as o,Za as s,_a as c,_o as l,co as u,ea as d,f,go as p,hs as m,i as h,m as g,oo as _,p as v,qa as y,ro as b,sa as x,vo as S,xa as C}from"./iframe-YAZ8xM7U.js";import{n as w,t as T}from"./figmaDesign-CO6i5n9C.js";var E,D,O,k,A;e((()=>{h(),x(),w(),E=m(),D={title:`Overlays & Menus/ContextMenu/ContextMenu`,component:f,tags:[`autodocs`],argTypes:{size:{control:`inline-radio`,options:v}},args:{size:`medium`},parameters:{design:T(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=3861-205`),layout:`centered`,docs:{description:{component:["Right-click menu attached to a trigger surface. Compose entries with `ContextMenuListItem` (optionally nested via `submenu`) and `Divider` for grouping.",``,"Breaking change from earlier versions: `ContextMenuList` was removed - compose items directly as `ContextMenu` children."].join(`
`)}}}},O=`select-none rounded-md border border-dashed border-border p-xlg text-center text-text typography-body-small`,k={render:e=>(0,E.jsxs)(f,{size:e.size,ariaLabel:`File actions`,trigger:(0,E.jsx)(`div`,{className:O,children:`Right-click anywhere in this area`}),children:[(0,E.jsx)(g,{label:`Cut`,shortcut:`⌘X`,IconLeft:b,onClick:()=>console.log(`Cut`)}),(0,E.jsx)(g,{label:`Copy`,shortcut:`⌘C`,IconLeft:_,onClick:()=>console.log(`Copy`)}),(0,E.jsx)(g,{label:`Paste`,shortcut:`⌘V`,IconLeft:u,onClick:()=>console.log(`Paste`)}),(0,E.jsx)(d,{}),(0,E.jsx)(g,{label:`Edit`,shortcut:`⌘E`,IconLeft:s,onClick:()=>console.log(`Edit`)}),(0,E.jsx)(g,{label:`Share`,IconLeft:C,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(g,{label:`Email`,IconLeft:i,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(g,{label:`New message`,IconLeft:i}),(0,E.jsx)(g,{label:`Reply to thread`,IconLeft:t})]})}),(0,E.jsx)(g,{label:`Copy link`,IconLeft:n,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(g,{label:`Full URL`,IconLeft:n}),(0,E.jsx)(g,{label:`Short URL`,IconLeft:n})]})}),(0,E.jsx)(g,{label:`Social`,IconLeft:C,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(g,{label:`Post to X`,IconLeft:p}),(0,E.jsx)(g,{label:`Share on LinkedIn`,IconLeft:l}),(0,E.jsx)(g,{label:`Share on Facebook`,IconLeft:S})]})})]})}),(0,E.jsx)(g,{label:`Download`,IconLeft:a,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(g,{label:`As PDF`,IconLeft:r}),(0,E.jsx)(g,{label:`As PNG`,IconLeft:y}),(0,E.jsx)(g,{label:`As CSV`,IconLeft:o})]})}),(0,E.jsx)(d,{}),(0,E.jsx)(g,{label:`Delete`,kind:`danger`,shortcut:`⌫`,IconLeft:c,onClick:()=>console.log(`Delete`)})]})},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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