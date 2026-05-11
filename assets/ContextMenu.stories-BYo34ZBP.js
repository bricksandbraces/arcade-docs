import{n as e}from"./chunk-jRWAZmH_.js";import{Dr as t,Fr as n,Jr as r,Lr as i,Mr as a,Qr as o,Yr as s,Zr as c,ci as l,d as u,gr as d,ia as f,l as p,li as m,ni as h,qr as g,ri as _,si as v,t as y,ti as b,u as x,ur as S,wr as C}from"./iframe-CS4X-XGW.js";var w,T,E,D,O;e((()=>{y(),d(),w=f(),T={title:`Fabian Supervision/ContextMenu/ContextMenu`,component:p,tags:[`autodocs`],argTypes:{size:{control:`inline-radio`,options:x}},args:{size:`medium`},parameters:{layout:`centered`,docs:{description:{component:["Right-click menu attached to a trigger surface. Compose entries with `ContextMenuListItem` (optionally nested via `submenu`) and `Divider` for grouping.",``,"Breaking change from earlier versions: `ContextMenuList` was removed — compose items directly as `ContextMenu` children."].join(`
`)}}}},E=`select-none rounded-md border border-dashed border-border p-xlg text-center text-text typography-body-small`,D={render:e=>(0,w.jsxs)(p,{size:e.size,ariaLabel:`File actions`,trigger:(0,w.jsx)(`div`,{className:E,children:`Right-click anywhere in this area`}),children:[(0,w.jsx)(u,{label:`Cut`,shortcut:`⌘X`,IconLeft:b,onClick:()=>console.log(`Cut`)}),(0,w.jsx)(u,{label:`Copy`,shortcut:`⌘C`,IconLeft:h,onClick:()=>console.log(`Copy`)}),(0,w.jsx)(u,{label:`Paste`,shortcut:`⌘V`,IconLeft:_,onClick:()=>console.log(`Paste`)}),(0,w.jsx)(S,{}),(0,w.jsx)(u,{label:`Edit`,shortcut:`⌘E`,IconLeft:c,onClick:()=>console.log(`Edit`)}),(0,w.jsx)(u,{label:`Share`,IconLeft:t,submenu:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(u,{label:`Email`,IconLeft:n,submenu:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(u,{label:`New message`,IconLeft:n}),(0,w.jsx)(u,{label:`Reply to thread`,IconLeft:a})]})}),(0,w.jsx)(u,{label:`Copy link`,IconLeft:i,submenu:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(u,{label:`Full URL`,IconLeft:i}),(0,w.jsx)(u,{label:`Short URL`,IconLeft:i})]})}),(0,w.jsx)(u,{label:`Social`,IconLeft:t,submenu:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(u,{label:`Post to X`,IconLeft:v}),(0,w.jsx)(u,{label:`Share on LinkedIn`,IconLeft:l}),(0,w.jsx)(u,{label:`Share on Facebook`,IconLeft:m})]})})]})}),(0,w.jsx)(u,{label:`Download`,IconLeft:o,submenu:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(u,{label:`As PDF`,IconLeft:r}),(0,w.jsx)(u,{label:`As PNG`,IconLeft:g}),(0,w.jsx)(u,{label:`As CSV`,IconLeft:s})]})}),(0,w.jsx)(S,{}),(0,w.jsx)(u,{label:`Delete`,kind:`danger`,shortcut:`⌫`,IconLeft:C,onClick:()=>console.log(`Delete`)})]})},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O=[`Playground`]}))();export{D as Playground,O as __namedExportsOrder,T as default};