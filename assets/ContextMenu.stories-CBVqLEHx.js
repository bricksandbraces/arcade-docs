import{n as e}from"./chunk-jRWAZmH_.js";import{Ba as t,Ca as n,Ea as r,Ji as i,Oa as a,Qa as o,Ua as s,Va as c,Wa as l,Ya as u,co as d,d as f,da as p,eo as m,ha as h,l as g,lo as _,os as v,t as y,ta as b,u as x,uo as S,za as C}from"./iframe-CVgNtwa1.js";import{n as w,t as T}from"./figmaDesign-CO6i5n9C.js";var E,D,O,k,A;e((()=>{y(),b(),w(),E=v(),D={title:`Overlays & Menus/ContextMenu/ContextMenu`,component:g,tags:[`autodocs`],argTypes:{size:{control:`inline-radio`,options:x}},args:{size:`medium`},parameters:{design:T(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=3861-205`),layout:`centered`,docs:{description:{component:["Right-click menu attached to a trigger surface. Compose entries with `ContextMenuListItem` (optionally nested via `submenu`) and `Divider` for grouping.",``,"Breaking change from earlier versions: `ContextMenuList` was removed - compose items directly as `ContextMenu` children."].join(`
`)}}}},O=`select-none rounded-md border border-dashed border-border p-xlg text-center text-text typography-body-small`,k={render:e=>(0,E.jsxs)(g,{size:e.size,ariaLabel:`File actions`,trigger:(0,E.jsx)(`div`,{className:O,children:`Right-click anywhere in this area`}),children:[(0,E.jsx)(f,{label:`Cut`,shortcut:`⌘X`,IconLeft:u,onClick:()=>console.log(`Cut`)}),(0,E.jsx)(f,{label:`Copy`,shortcut:`⌘C`,IconLeft:o,onClick:()=>console.log(`Copy`)}),(0,E.jsx)(f,{label:`Paste`,shortcut:`⌘V`,IconLeft:m,onClick:()=>console.log(`Paste`)}),(0,E.jsx)(i,{}),(0,E.jsx)(f,{label:`Edit`,shortcut:`⌘E`,IconLeft:s,onClick:()=>console.log(`Edit`)}),(0,E.jsx)(f,{label:`Share`,IconLeft:h,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(f,{label:`Email`,IconLeft:r,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(f,{label:`New message`,IconLeft:r}),(0,E.jsx)(f,{label:`Reply to thread`,IconLeft:n})]})}),(0,E.jsx)(f,{label:`Copy link`,IconLeft:a,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(f,{label:`Full URL`,IconLeft:a}),(0,E.jsx)(f,{label:`Short URL`,IconLeft:a})]})}),(0,E.jsx)(f,{label:`Social`,IconLeft:h,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(f,{label:`Post to X`,IconLeft:d}),(0,E.jsx)(f,{label:`Share on LinkedIn`,IconLeft:_}),(0,E.jsx)(f,{label:`Share on Facebook`,IconLeft:S})]})})]})}),(0,E.jsx)(f,{label:`Download`,IconLeft:l,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(f,{label:`As PDF`,IconLeft:t}),(0,E.jsx)(f,{label:`As PNG`,IconLeft:C}),(0,E.jsx)(f,{label:`As CSV`,IconLeft:c})]})}),(0,E.jsx)(i,{}),(0,E.jsx)(f,{label:`Delete`,kind:`danger`,shortcut:`⌫`,IconLeft:p,onClick:()=>console.log(`Delete`)})]})},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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