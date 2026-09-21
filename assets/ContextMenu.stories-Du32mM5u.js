import{n as e}from"./chunk-jRWAZmH_.js";import{Aa as t,Da as n,Ga as r,Ja as i,Ka as a,Na as o,Wa as s,Ya as c,Zi as l,ao as u,d,eo as f,fs as p,ho as m,ia as h,l as g,ma as _,mo as v,po as y,ro as b,t as x,u as S,va as C}from"./iframe-DItRHvxc.js";import{n as w,t as T}from"./figmaDesign-CO6i5n9C.js";var E,D,O,k,A;e((()=>{x(),h(),w(),E=p(),D={title:`Overlays & Menus/ContextMenu/ContextMenu`,component:g,tags:[`autodocs`],argTypes:{size:{control:`inline-radio`,options:S}},args:{size:`medium`},parameters:{design:T(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=3861-205`),layout:`centered`,docs:{description:{component:["Right-click menu attached to a trigger surface. Compose entries with `ContextMenuListItem` (optionally nested via `submenu`) and `Divider` for grouping.",``,"Breaking change from earlier versions: `ContextMenuList` was removed - compose items directly as `ContextMenu` children."].join(`
`)}}}},O=`select-none rounded-md border border-dashed border-border p-xlg text-center text-text typography-body-small`,k={render:e=>(0,E.jsxs)(g,{size:e.size,ariaLabel:`File actions`,trigger:(0,E.jsx)(`div`,{className:O,children:`Right-click anywhere in this area`}),children:[(0,E.jsx)(d,{label:`Cut`,shortcut:`⌘X`,IconLeft:f,onClick:()=>console.log(`Cut`)}),(0,E.jsx)(d,{label:`Copy`,shortcut:`⌘C`,IconLeft:b,onClick:()=>console.log(`Copy`)}),(0,E.jsx)(d,{label:`Paste`,shortcut:`⌘V`,IconLeft:u,onClick:()=>console.log(`Paste`)}),(0,E.jsx)(l,{}),(0,E.jsx)(d,{label:`Edit`,shortcut:`⌘E`,IconLeft:i,onClick:()=>console.log(`Edit`)}),(0,E.jsx)(d,{label:`Share`,IconLeft:C,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(d,{label:`Email`,IconLeft:t,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(d,{label:`New message`,IconLeft:t}),(0,E.jsx)(d,{label:`Reply to thread`,IconLeft:n})]})}),(0,E.jsx)(d,{label:`Copy link`,IconLeft:o,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(d,{label:`Full URL`,IconLeft:o}),(0,E.jsx)(d,{label:`Short URL`,IconLeft:o})]})}),(0,E.jsx)(d,{label:`Social`,IconLeft:C,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(d,{label:`Post to X`,IconLeft:y}),(0,E.jsx)(d,{label:`Share on LinkedIn`,IconLeft:v}),(0,E.jsx)(d,{label:`Share on Facebook`,IconLeft:m})]})})]})}),(0,E.jsx)(d,{label:`Download`,IconLeft:c,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(d,{label:`As PDF`,IconLeft:r}),(0,E.jsx)(d,{label:`As PNG`,IconLeft:s}),(0,E.jsx)(d,{label:`As CSV`,IconLeft:a})]})}),(0,E.jsx)(l,{}),(0,E.jsx)(d,{label:`Delete`,kind:`danger`,shortcut:`⌫`,IconLeft:_,onClick:()=>console.log(`Delete`)})]})},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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