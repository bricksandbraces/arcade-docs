import{n as e}from"./chunk-jRWAZmH_.js";import{$o as t,As as n,Bo as r,Io as i,Nc as a,Qo as o,Ra as s,as as c,d as l,es as u,gs as d,jo as f,js as p,ks as m,l as h,os as g,po as _,ps as v,ro as y,t as b,u as x,vs as S,yo as C}from"./iframe-DtTt2Npq.js";import{n as w,t as T}from"./figmaDesign-DLesXS3c.js";var E,D,O,k,A;e((()=>{b(),y(),w(),E=a(),D={title:`Components/ContextMenu`,component:h,tags:[`autodocs`],argTypes:{size:{control:`inline-radio`,options:x}},args:{size:`medium`},parameters:{design:T(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=3861-205`),layout:`centered`,docs:{description:{component:["Right-click menu attached to a trigger surface. Compose entries with `ContextMenuListItem` (optionally nested via `submenu`) and `Divider` for grouping.",``,"Breaking change from earlier versions: `ContextMenuList` was removed - compose items directly as `ContextMenu` children."].join(`
`)}}}},O=`select-none rounded-md border border-dashed border-border p-xlg text-center text-text typography-body-small`,k={render:e=>(0,E.jsxs)(h,{size:e.size,ariaLabel:`File actions`,trigger:(0,E.jsx)(`div`,{className:O,children:`Right-click anywhere in this area`}),children:[(0,E.jsx)(l,{label:`Cut`,shortcut:`⌘X`,IconLeft:v,onClick:()=>console.log(`Cut`)}),(0,E.jsx)(l,{label:`Copy`,shortcut:`⌘C`,IconLeft:d,onClick:()=>console.log(`Copy`)}),(0,E.jsx)(l,{label:`Paste`,shortcut:`⌘V`,IconLeft:S,onClick:()=>console.log(`Paste`)}),(0,E.jsx)(s,{}),(0,E.jsx)(l,{label:`Edit`,shortcut:`⌘E`,IconLeft:c,onClick:()=>console.log(`Edit`)}),(0,E.jsx)(l,{label:`Share`,IconLeft:C,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(l,{label:`Email`,IconLeft:i,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(l,{label:`New message`,IconLeft:i}),(0,E.jsx)(l,{label:`Reply to thread`,IconLeft:f})]})}),(0,E.jsx)(l,{label:`Copy link`,IconLeft:r,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(l,{label:`Full URL`,IconLeft:r}),(0,E.jsx)(l,{label:`Short URL`,IconLeft:r})]})}),(0,E.jsx)(l,{label:`Social`,IconLeft:C,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(l,{label:`Post to X`,IconLeft:m}),(0,E.jsx)(l,{label:`Share on LinkedIn`,IconLeft:n}),(0,E.jsx)(l,{label:`Share on Facebook`,IconLeft:p})]})})]})}),(0,E.jsx)(l,{label:`Download`,IconLeft:g,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(l,{label:`As PDF`,IconLeft:t}),(0,E.jsx)(l,{label:`As PNG`,IconLeft:o}),(0,E.jsx)(l,{label:`As CSV`,IconLeft:u})]})}),(0,E.jsx)(s,{}),(0,E.jsx)(l,{label:`Delete`,kind:`danger`,shortcut:`⌫`,IconLeft:_,onClick:()=>console.log(`Delete`)})]})},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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