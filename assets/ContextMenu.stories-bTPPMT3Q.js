import{n as e}from"./chunk-jRWAZmH_.js";import{$i as t,Oi as n,Ri as r,Ui as i,Vi as a,_a as o,d as s,da as c,ea as l,fi as u,ho as d,ia as f,ji as p,l as m,ra as h,sa as g,t as _,ta as v,u as y,ua as b,va as x,vi as S,ya as C}from"./iframe-B3Vux_tj.js";var w,T,E,D,O;e((()=>{_(),S(),w=d(),T={title:`Overlays & Menus/ContextMenu/ContextMenu`,component:m,tags:[`autodocs`],argTypes:{size:{control:`inline-radio`,options:y}},args:{size:`medium`},parameters:{layout:`centered`,docs:{description:{component:["Right-click menu attached to a trigger surface. Compose entries with `ContextMenuListItem` (optionally nested via `submenu`) and `Divider` for grouping.",``,"Breaking change from earlier versions: `ContextMenuList` was removed — compose items directly as `ContextMenu` children."].join(`
`)}}}},E=`select-none rounded-md border border-dashed border-border p-xlg text-center text-text typography-body-small`,D={render:e=>(0,w.jsxs)(m,{size:e.size,ariaLabel:`File actions`,trigger:(0,w.jsx)(`div`,{className:E,children:`Right-click anywhere in this area`}),children:[(0,w.jsx)(s,{label:`Cut`,shortcut:`⌘X`,IconLeft:g,onClick:()=>console.log(`Cut`)}),(0,w.jsx)(s,{label:`Copy`,shortcut:`⌘C`,IconLeft:b,onClick:()=>console.log(`Copy`)}),(0,w.jsx)(s,{label:`Paste`,shortcut:`⌘V`,IconLeft:c,onClick:()=>console.log(`Paste`)}),(0,w.jsx)(u,{}),(0,w.jsx)(s,{label:`Edit`,shortcut:`⌘E`,IconLeft:h,onClick:()=>console.log(`Edit`)}),(0,w.jsx)(s,{label:`Share`,IconLeft:p,submenu:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(s,{label:`Email`,IconLeft:a,submenu:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(s,{label:`New message`,IconLeft:a}),(0,w.jsx)(s,{label:`Reply to thread`,IconLeft:r})]})}),(0,w.jsx)(s,{label:`Copy link`,IconLeft:i,submenu:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(s,{label:`Full URL`,IconLeft:i}),(0,w.jsx)(s,{label:`Short URL`,IconLeft:i})]})}),(0,w.jsx)(s,{label:`Social`,IconLeft:p,submenu:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(s,{label:`Post to X`,IconLeft:o}),(0,w.jsx)(s,{label:`Share on LinkedIn`,IconLeft:x}),(0,w.jsx)(s,{label:`Share on Facebook`,IconLeft:C})]})})]})}),(0,w.jsx)(s,{label:`Download`,IconLeft:f,submenu:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(s,{label:`As PDF`,IconLeft:l}),(0,w.jsx)(s,{label:`As PNG`,IconLeft:t}),(0,w.jsx)(s,{label:`As CSV`,IconLeft:v})]})}),(0,w.jsx)(u,{}),(0,w.jsx)(s,{label:`Delete`,kind:`danger`,shortcut:`⌫`,IconLeft:n,onClick:()=>console.log(`Delete`)})]})},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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