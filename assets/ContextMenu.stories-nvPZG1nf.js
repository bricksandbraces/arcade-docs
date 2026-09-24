import{n as e}from"./chunk-jRWAZmH_.js";import{Do as t,Eo as n,Es as r,Oo as i,Ra as a,Ta as o,Va as s,Wa as c,f as l,go as u,ha as d,i as f,ka as p,m,no as h,oa as g,oo as _,p as v,po as y,ro as b,so as x,to as S,vo as C}from"./iframe-BNwjH-n2.js";import{n as w,t as T}from"./figmaDesign-CO6i5n9C.js";var E,D,O,k,A;e((()=>{f(),d(),w(),E=r(),D={title:`Overlays & Menus/ContextMenu/ContextMenu`,component:l,tags:[`autodocs`],argTypes:{size:{control:`inline-radio`,options:v}},args:{size:`medium`},parameters:{design:T(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=3861-205`),layout:`centered`,docs:{description:{component:["Right-click menu attached to a trigger surface. Compose entries with `ContextMenuListItem` (optionally nested via `submenu`) and `Divider` for grouping.",``,"Breaking change from earlier versions: `ContextMenuList` was removed - compose items directly as `ContextMenu` children."].join(`
`)}}}},O=`select-none rounded-md border border-dashed border-border p-xlg text-center text-text typography-body-small`,k={render:e=>(0,E.jsxs)(l,{size:e.size,ariaLabel:`File actions`,trigger:(0,E.jsx)(`div`,{className:O,children:`Right-click anywhere in this area`}),children:[(0,E.jsx)(m,{label:`Cut`,shortcut:`⌘X`,IconLeft:y,onClick:()=>console.log(`Cut`)}),(0,E.jsx)(m,{label:`Copy`,shortcut:`⌘C`,IconLeft:u,onClick:()=>console.log(`Copy`)}),(0,E.jsx)(m,{label:`Paste`,shortcut:`⌘V`,IconLeft:C,onClick:()=>console.log(`Paste`)}),(0,E.jsx)(g,{}),(0,E.jsx)(m,{label:`Edit`,shortcut:`⌘E`,IconLeft:_,onClick:()=>console.log(`Edit`)}),(0,E.jsx)(m,{label:`Share`,IconLeft:p,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(m,{label:`Email`,IconLeft:s,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(m,{label:`New message`,IconLeft:s}),(0,E.jsx)(m,{label:`Reply to thread`,IconLeft:a})]})}),(0,E.jsx)(m,{label:`Copy link`,IconLeft:c,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(m,{label:`Full URL`,IconLeft:c}),(0,E.jsx)(m,{label:`Short URL`,IconLeft:c})]})}),(0,E.jsx)(m,{label:`Social`,IconLeft:p,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(m,{label:`Post to X`,IconLeft:n}),(0,E.jsx)(m,{label:`Share on LinkedIn`,IconLeft:t}),(0,E.jsx)(m,{label:`Share on Facebook`,IconLeft:i})]})})]})}),(0,E.jsx)(m,{label:`Download`,IconLeft:x,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(m,{label:`As PDF`,IconLeft:h}),(0,E.jsx)(m,{label:`As PNG`,IconLeft:S}),(0,E.jsx)(m,{label:`As CSV`,IconLeft:b})]})}),(0,E.jsx)(g,{}),(0,E.jsx)(m,{label:`Delete`,kind:`danger`,shortcut:`⌫`,IconLeft:o,onClick:()=>console.log(`Delete`)})]})},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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