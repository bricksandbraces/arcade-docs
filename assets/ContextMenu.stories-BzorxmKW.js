import{n as e}from"./chunk-jRWAZmH_.js";import{Bc as t,Cs as n,Go as r,Io as i,Is as a,Ls as o,Rs as s,Ua as c,Vo as l,as as u,co as d,d as f,ds as p,is as m,l as h,rs as g,t as _,u as v,us as y,vo as b,vs as x,wo as S,xs as C}from"./iframe-bQfS6TRu.js";import{n as w,t as T}from"./figmaDesign-DLesXS3c.js";var E,D,O,k,A;e((()=>{_(),d(),w(),E=t(),D={title:`Components/ContextMenu`,component:h,tags:[`autodocs`],argTypes:{size:{control:`inline-radio`,options:v}},args:{size:`medium`},parameters:{design:T(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=3861-205`),layout:`centered`,docs:{description:{component:["Right-click menu attached to a trigger surface. Compose entries with `ContextMenuListItem` (optionally nested via `submenu`) and `Divider` for grouping.",``,"Breaking change from earlier versions: `ContextMenuList` was removed - compose items directly as `ContextMenu` children."].join(`
`)}}}},O=`select-none rounded-md border border-dashed border-border p-xlg text-center text-text typography-body-small`,k={render:e=>(0,E.jsxs)(h,{size:e.size,ariaLabel:`File actions`,trigger:(0,E.jsx)(`div`,{className:O,children:`Right-click anywhere in this area`}),children:[(0,E.jsx)(f,{label:`Cut`,shortcut:`⌘X`,IconLeft:x,onClick:()=>console.log(`Cut`)}),(0,E.jsx)(f,{label:`Copy`,shortcut:`⌘C`,IconLeft:C,onClick:()=>console.log(`Copy`)}),(0,E.jsx)(f,{label:`Paste`,shortcut:`⌘V`,IconLeft:n,onClick:()=>console.log(`Paste`)}),(0,E.jsx)(c,{}),(0,E.jsx)(f,{label:`Edit`,shortcut:`⌘E`,IconLeft:y,onClick:()=>console.log(`Edit`)}),(0,E.jsx)(f,{label:`Share`,IconLeft:S,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(f,{label:`Email`,IconLeft:l,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(f,{label:`New message`,IconLeft:l}),(0,E.jsx)(f,{label:`Reply to thread`,IconLeft:i})]})}),(0,E.jsx)(f,{label:`Copy link`,IconLeft:r,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(f,{label:`Full URL`,IconLeft:r}),(0,E.jsx)(f,{label:`Short URL`,IconLeft:r})]})}),(0,E.jsx)(f,{label:`Social`,IconLeft:S,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(f,{label:`Post to X`,IconLeft:a}),(0,E.jsx)(f,{label:`Share on LinkedIn`,IconLeft:o}),(0,E.jsx)(f,{label:`Share on Facebook`,IconLeft:s})]})})]})}),(0,E.jsx)(f,{label:`Download`,IconLeft:p,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(f,{label:`As PDF`,IconLeft:m}),(0,E.jsx)(f,{label:`As PNG`,IconLeft:g}),(0,E.jsx)(f,{label:`As CSV`,IconLeft:u})]})}),(0,E.jsx)(c,{}),(0,E.jsx)(f,{label:`Delete`,kind:`danger`,shortcut:`⌫`,IconLeft:b,onClick:()=>console.log(`Delete`)})]})},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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