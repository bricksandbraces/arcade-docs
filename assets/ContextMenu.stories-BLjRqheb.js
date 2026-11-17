import{n as e}from"./chunk-jRWAZmH_.js";import{$a as t,Go as n,Jo as r,Oo as i,Pa as a,To as o,Uo as s,Wo as c,Yo as l,_s as u,as as d,bc as f,d as p,jo as m,l as h,lo as g,mo as _,ns as v,ss as y,t as b,u as x,vs as S,ys as C}from"./iframe-CwyRacPm.js";import{n as w,t as T}from"./figmaDesign-DLesXS3c.js";var E,D,O,k,A;e((()=>{b(),t(),w(),E=f(),D={title:`Components/ContextMenu`,component:h,tags:[`autodocs`],argTypes:{size:{control:`inline-radio`,options:x}},args:{size:`medium`},parameters:{design:T(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=3861-205`),layout:`centered`,docs:{description:{component:["Right-click menu attached to a trigger surface. Compose entries with `ContextMenuListItem` (optionally nested via `submenu`) and `Divider` for grouping.",``,"Breaking change from earlier versions: `ContextMenuList` was removed - compose items directly as `ContextMenu` children."].join(`
`)}}}},O=`select-none rounded-md border border-dashed border-border p-xlg text-center text-text typography-body-small`,k={render:e=>(0,E.jsxs)(h,{size:e.size,ariaLabel:`File actions`,trigger:(0,E.jsx)(`div`,{className:O,children:`Right-click anywhere in this area`}),children:[(0,E.jsx)(p,{label:`Cut`,shortcut:`⌘X`,IconLeft:v,onClick:()=>console.log(`Cut`)}),(0,E.jsx)(p,{label:`Copy`,shortcut:`⌘C`,IconLeft:d,onClick:()=>console.log(`Copy`)}),(0,E.jsx)(p,{label:`Paste`,shortcut:`⌘V`,IconLeft:y,onClick:()=>console.log(`Paste`)}),(0,E.jsx)(a,{}),(0,E.jsx)(p,{label:`Edit`,shortcut:`⌘E`,IconLeft:r,onClick:()=>console.log(`Edit`)}),(0,E.jsx)(p,{label:`Share`,IconLeft:_,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(p,{label:`Email`,IconLeft:i,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(p,{label:`New message`,IconLeft:i}),(0,E.jsx)(p,{label:`Reply to thread`,IconLeft:o})]})}),(0,E.jsx)(p,{label:`Copy link`,IconLeft:m,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(p,{label:`Full URL`,IconLeft:m}),(0,E.jsx)(p,{label:`Short URL`,IconLeft:m})]})}),(0,E.jsx)(p,{label:`Social`,IconLeft:_,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(p,{label:`Post to X`,IconLeft:u}),(0,E.jsx)(p,{label:`Share on LinkedIn`,IconLeft:S}),(0,E.jsx)(p,{label:`Share on Facebook`,IconLeft:C})]})})]})}),(0,E.jsx)(p,{label:`Download`,IconLeft:l,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(p,{label:`As PDF`,IconLeft:c}),(0,E.jsx)(p,{label:`As PNG`,IconLeft:s}),(0,E.jsx)(p,{label:`As CSV`,IconLeft:n})]})}),(0,E.jsx)(a,{}),(0,E.jsx)(p,{label:`Delete`,kind:`danger`,shortcut:`⌫`,IconLeft:g,onClick:()=>console.log(`Delete`)})]})},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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