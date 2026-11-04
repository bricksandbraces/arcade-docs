import{n as e}from"./chunk-jRWAZmH_.js";import{Ao as t,Co as n,Fo as r,Ga as i,Go as a,Ko as o,No as s,Va as c,Wo as l,_a as u,bo as d,d as f,io as p,ja as m,l as h,qs as g,so as _,t as v,to as y,u as b,vo as x,wo as S,yo as C}from"./iframe-BtGtF-Dr.js";import{n as w,t as T}from"./figmaDesign-DDiUnvXT.js";var E,D,O,k,A;e((()=>{v(),m(),w(),E=g(),D={title:`Overlays & Menus/ContextMenu/ContextMenu`,component:h,tags:[`autodocs`],argTypes:{size:{control:`inline-radio`,options:b}},args:{size:`medium`},parameters:{design:T(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=3861-205`),layout:`centered`,docs:{description:{component:["Right-click menu attached to a trigger surface. Compose entries with `ContextMenuListItem` (optionally nested via `submenu`) and `Divider` for grouping.",``,"Breaking change from earlier versions: `ContextMenuList` was removed - compose items directly as `ContextMenu` children."].join(`
`)}}}},O=`select-none rounded-md border border-dashed border-border p-xlg text-center text-text typography-body-small`,k={render:e=>(0,E.jsxs)(h,{size:e.size,ariaLabel:`File actions`,trigger:(0,E.jsx)(`div`,{className:O,children:`Right-click anywhere in this area`}),children:[(0,E.jsx)(f,{label:`Cut`,shortcut:`⌘X`,IconLeft:t,onClick:()=>console.log(`Cut`)}),(0,E.jsx)(f,{label:`Copy`,shortcut:`⌘C`,IconLeft:s,onClick:()=>console.log(`Copy`)}),(0,E.jsx)(f,{label:`Paste`,shortcut:`⌘V`,IconLeft:r,onClick:()=>console.log(`Paste`)}),(0,E.jsx)(u,{}),(0,E.jsx)(f,{label:`Edit`,shortcut:`⌘E`,IconLeft:n,onClick:()=>console.log(`Edit`)}),(0,E.jsx)(f,{label:`Share`,IconLeft:i,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(f,{label:`Email`,IconLeft:p,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(f,{label:`New message`,IconLeft:p}),(0,E.jsx)(f,{label:`Reply to thread`,IconLeft:y})]})}),(0,E.jsx)(f,{label:`Copy link`,IconLeft:_,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(f,{label:`Full URL`,IconLeft:_}),(0,E.jsx)(f,{label:`Short URL`,IconLeft:_})]})}),(0,E.jsx)(f,{label:`Social`,IconLeft:i,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(f,{label:`Post to X`,IconLeft:l}),(0,E.jsx)(f,{label:`Share on LinkedIn`,IconLeft:a}),(0,E.jsx)(f,{label:`Share on Facebook`,IconLeft:o})]})})]})}),(0,E.jsx)(f,{label:`Download`,IconLeft:S,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(f,{label:`As PDF`,IconLeft:C}),(0,E.jsx)(f,{label:`As PNG`,IconLeft:x}),(0,E.jsx)(f,{label:`As CSV`,IconLeft:d})]})}),(0,E.jsx)(u,{}),(0,E.jsx)(f,{label:`Delete`,kind:`danger`,shortcut:`⌫`,IconLeft:c,onClick:()=>console.log(`Delete`)})]})},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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