import{n as e}from"./chunk-jRWAZmH_.js";import{$r as t,Ar as n,Dr as r,Hr as i,Kr as a,Mr as o,Qr as s,Sr as c,Ur as l,Wr as u,Zr as d,ai as f,ar as p,d as m,dr as h,ea as g,ii as _,l as v,qr as y,ri as b,t as x,u as S,yr as C}from"./iframe-D3A0Qfxl.js";var w,T,E,D,O;e((()=>{x(),h(),w=g(),T={title:`Fabian Supervision/ContextMenu/ContextMenu`,component:v,tags:[`autodocs`],argTypes:{size:{control:`inline-radio`,options:S}},args:{size:`medium`},parameters:{layout:`centered`,docs:{description:{component:["Right-click menu attached to a trigger surface. Compose entries with `ContextMenuListItem` (optionally nested via `submenu`) and `Divider` for grouping.",``,"Breaking change from earlier versions: `ContextMenuList` was removed — compose items directly as `ContextMenu` children."].join(`
`)}}}},E=`select-none rounded-md border border-dashed border-border p-xlg text-center text-text typography-body-small`,D={render:e=>(0,w.jsxs)(v,{size:e.size,ariaLabel:`File actions`,trigger:(0,w.jsx)(`div`,{className:E,children:`Right-click anywhere in this area`}),children:[(0,w.jsx)(m,{label:`Cut`,shortcut:`⌘X`,IconLeft:d,onClick:()=>console.log(`Cut`)}),(0,w.jsx)(m,{label:`Copy`,shortcut:`⌘C`,IconLeft:s,onClick:()=>console.log(`Copy`)}),(0,w.jsx)(m,{label:`Paste`,shortcut:`⌘V`,IconLeft:t,onClick:()=>console.log(`Paste`)}),(0,w.jsx)(p,{}),(0,w.jsx)(m,{label:`Edit`,shortcut:`⌘E`,IconLeft:a,onClick:()=>console.log(`Edit`)}),(0,w.jsx)(m,{label:`Share`,IconLeft:c,submenu:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(m,{label:`Email`,IconLeft:n,submenu:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(m,{label:`New message`,IconLeft:n}),(0,w.jsx)(m,{label:`Reply to thread`,IconLeft:r})]})}),(0,w.jsx)(m,{label:`Copy link`,IconLeft:o,submenu:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(m,{label:`Full URL`,IconLeft:o}),(0,w.jsx)(m,{label:`Short URL`,IconLeft:o})]})}),(0,w.jsx)(m,{label:`Social`,IconLeft:c,submenu:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(m,{label:`Post to X`,IconLeft:b}),(0,w.jsx)(m,{label:`Share on LinkedIn`,IconLeft:_}),(0,w.jsx)(m,{label:`Share on Facebook`,IconLeft:f})]})})]})}),(0,w.jsx)(m,{label:`Download`,IconLeft:y,submenu:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(m,{label:`As PDF`,IconLeft:l}),(0,w.jsx)(m,{label:`As PNG`,IconLeft:i}),(0,w.jsx)(m,{label:`As CSV`,IconLeft:u})]})}),(0,w.jsx)(p,{}),(0,w.jsx)(m,{label:`Delete`,kind:`danger`,shortcut:`⌫`,IconLeft:C,onClick:()=>console.log(`Delete`)})]})},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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