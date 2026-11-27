import{n as e}from"./chunk-jRWAZmH_.js";import{Ho as t,Ko as n,Lo as r,Ls as i,Rs as a,Ss as o,To as s,Vc as c,Wa as l,as as u,d,ds as f,fs as p,is as m,l as h,lo as g,os as _,t as v,u as y,ws as b,yo as x,ys as S,zs as C}from"./iframe-aH2b30P3.js";import{n as w,t as T}from"./figmaDesign-D2IpkIki.js";var E,D,O,k,A;e((()=>{v(),g(),w(),E=c(),D={title:`Components/ContextMenu`,component:h,tags:[`autodocs`],argTypes:{size:{control:`inline-radio`,options:y}},args:{size:`medium`},parameters:{design:T(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=3861-205`),layout:`centered`,docs:{description:{component:["Right-click menu attached to a trigger surface. Compose entries with `ContextMenuListItem` (optionally nested via `submenu`) and `Divider` for grouping.",``,"Breaking change from earlier versions: `ContextMenuList` was removed - compose items directly as `ContextMenu` children."].join(`
`)}}}},O=`select-none rounded-md border border-dashed border-border p-xlg text-center text-text typography-body-small`,k={render:e=>(0,E.jsxs)(h,{size:e.size,ariaLabel:`File actions`,trigger:(0,E.jsx)(`div`,{className:O,children:`Right-click anywhere in this area`}),children:[(0,E.jsx)(d,{label:`Cut`,shortcut:`⌘X`,IconLeft:S,onClick:()=>console.log(`Cut`)}),(0,E.jsx)(d,{label:`Copy`,shortcut:`⌘C`,IconLeft:o,onClick:()=>console.log(`Copy`)}),(0,E.jsx)(d,{label:`Paste`,shortcut:`⌘V`,IconLeft:b,onClick:()=>console.log(`Paste`)}),(0,E.jsx)(l,{}),(0,E.jsx)(d,{label:`Edit`,shortcut:`⌘E`,IconLeft:f,onClick:()=>console.log(`Edit`)}),(0,E.jsx)(d,{label:`Share`,IconLeft:s,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(d,{label:`Email`,IconLeft:t,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(d,{label:`New message`,IconLeft:t}),(0,E.jsx)(d,{label:`Reply to thread`,IconLeft:r})]})}),(0,E.jsx)(d,{label:`Copy link`,IconLeft:n,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(d,{label:`Full URL`,IconLeft:n}),(0,E.jsx)(d,{label:`Short URL`,IconLeft:n})]})}),(0,E.jsx)(d,{label:`Social`,IconLeft:s,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(d,{label:`Post to X`,IconLeft:i}),(0,E.jsx)(d,{label:`Share on LinkedIn`,IconLeft:a}),(0,E.jsx)(d,{label:`Share on Facebook`,IconLeft:C})]})})]})}),(0,E.jsx)(d,{label:`Download`,IconLeft:p,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(d,{label:`As PDF`,IconLeft:u}),(0,E.jsx)(d,{label:`As PNG`,IconLeft:m}),(0,E.jsx)(d,{label:`As CSV`,IconLeft:_})]})}),(0,E.jsx)(l,{}),(0,E.jsx)(d,{label:`Delete`,kind:`danger`,shortcut:`⌫`,IconLeft:x,onClick:()=>console.log(`Delete`)})]})},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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