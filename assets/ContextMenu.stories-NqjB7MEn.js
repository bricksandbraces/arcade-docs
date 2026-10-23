import{n as e}from"./chunk-jRWAZmH_.js";import{Aa as t,Fo as n,No as r,Ns as i,Pa as a,Po as o,So as s,Wa as c,Xa as l,ba as u,ca as d,co as f,d as p,fo as m,l as h,lo as g,po as _,qa as v,so as y,t as b,u as x,wo as S,yo as C}from"./iframe-4Rs6YMw6.js";import{n as w,t as T}from"./figmaDesign-DDiUnvXT.js";var E,D,O,k,A;e((()=>{b(),u(),w(),E=i(),D={title:`Overlays & Menus/ContextMenu/ContextMenu`,component:h,tags:[`autodocs`],argTypes:{size:{control:`inline-radio`,options:x}},args:{size:`medium`},parameters:{design:T(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=3861-205`),layout:`centered`,docs:{description:{component:["Right-click menu attached to a trigger surface. Compose entries with `ContextMenuListItem` (optionally nested via `submenu`) and `Divider` for grouping.",``,"Breaking change from earlier versions: `ContextMenuList` was removed - compose items directly as `ContextMenu` children."].join(`
`)}}}},O=`select-none rounded-md border border-dashed border-border p-xlg text-center text-text typography-body-small`,k={render:e=>(0,E.jsxs)(h,{size:e.size,ariaLabel:`File actions`,trigger:(0,E.jsx)(`div`,{className:O,children:`Right-click anywhere in this area`}),children:[(0,E.jsx)(p,{label:`Cut`,shortcut:`⌘X`,IconLeft:C,onClick:()=>console.log(`Cut`)}),(0,E.jsx)(p,{label:`Copy`,shortcut:`⌘C`,IconLeft:s,onClick:()=>console.log(`Copy`)}),(0,E.jsx)(p,{label:`Paste`,shortcut:`⌘V`,IconLeft:S,onClick:()=>console.log(`Paste`)}),(0,E.jsx)(d,{}),(0,E.jsx)(p,{label:`Edit`,shortcut:`⌘E`,IconLeft:m,onClick:()=>console.log(`Edit`)}),(0,E.jsx)(p,{label:`Share`,IconLeft:a,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(p,{label:`Email`,IconLeft:v,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(p,{label:`New message`,IconLeft:v}),(0,E.jsx)(p,{label:`Reply to thread`,IconLeft:c})]})}),(0,E.jsx)(p,{label:`Copy link`,IconLeft:l,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(p,{label:`Full URL`,IconLeft:l}),(0,E.jsx)(p,{label:`Short URL`,IconLeft:l})]})}),(0,E.jsx)(p,{label:`Social`,IconLeft:a,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(p,{label:`Post to X`,IconLeft:r}),(0,E.jsx)(p,{label:`Share on LinkedIn`,IconLeft:o}),(0,E.jsx)(p,{label:`Share on Facebook`,IconLeft:n})]})})]})}),(0,E.jsx)(p,{label:`Download`,IconLeft:_,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(p,{label:`As PDF`,IconLeft:f}),(0,E.jsx)(p,{label:`As PNG`,IconLeft:y}),(0,E.jsx)(p,{label:`As CSV`,IconLeft:g})]})}),(0,E.jsx)(d,{}),(0,E.jsx)(p,{label:`Delete`,kind:`danger`,shortcut:`⌫`,IconLeft:t,onClick:()=>console.log(`Delete`)})]})},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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