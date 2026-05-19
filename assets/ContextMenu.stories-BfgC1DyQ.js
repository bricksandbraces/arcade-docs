import{n as e}from"./chunk-jRWAZmH_.js";import{Bi as t,Ci as n,Ei as r,Hi as i,Ki as a,Oi as o,Qr as s,Ri as c,Ui as l,Xi as u,Yi as d,_i as f,d as p,eo as m,ia as h,ii as g,l as _,mi as v,na as y,ra as b,t as x,u as S,zi as C}from"./iframe-u_HCFVUp.js";var w,T,E,D,O;e((()=>{x(),g(),w=m(),T={title:`Overlays & Menus/ContextMenu/ContextMenu`,component:_,tags:[`autodocs`],argTypes:{size:{control:`inline-radio`,options:S}},args:{size:`medium`},parameters:{layout:`centered`,docs:{description:{component:["Right-click menu attached to a trigger surface. Compose entries with `ContextMenuListItem` (optionally nested via `submenu`) and `Divider` for grouping.",``,"Breaking change from earlier versions: `ContextMenuList` was removed — compose items directly as `ContextMenu` children."].join(`
`)}}}},E=`select-none rounded-md border border-dashed border-border p-xlg text-center text-text typography-body-small`,D={render:e=>(0,w.jsxs)(_,{size:e.size,ariaLabel:`File actions`,trigger:(0,w.jsx)(`div`,{className:E,children:`Right-click anywhere in this area`}),children:[(0,w.jsx)(p,{label:`Cut`,shortcut:`⌘X`,IconLeft:a,onClick:()=>console.log(`Cut`)}),(0,w.jsx)(p,{label:`Copy`,shortcut:`⌘C`,IconLeft:d,onClick:()=>console.log(`Copy`)}),(0,w.jsx)(p,{label:`Paste`,shortcut:`⌘V`,IconLeft:u,onClick:()=>console.log(`Paste`)}),(0,w.jsx)(s,{}),(0,w.jsx)(p,{label:`Edit`,shortcut:`⌘E`,IconLeft:i,onClick:()=>console.log(`Edit`)}),(0,w.jsx)(p,{label:`Share`,IconLeft:f,submenu:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(p,{label:`Email`,IconLeft:r,submenu:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(p,{label:`New message`,IconLeft:r}),(0,w.jsx)(p,{label:`Reply to thread`,IconLeft:n})]})}),(0,w.jsx)(p,{label:`Copy link`,IconLeft:o,submenu:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(p,{label:`Full URL`,IconLeft:o}),(0,w.jsx)(p,{label:`Short URL`,IconLeft:o})]})}),(0,w.jsx)(p,{label:`Social`,IconLeft:f,submenu:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(p,{label:`Post to X`,IconLeft:y}),(0,w.jsx)(p,{label:`Share on LinkedIn`,IconLeft:b}),(0,w.jsx)(p,{label:`Share on Facebook`,IconLeft:h})]})})]})}),(0,w.jsx)(p,{label:`Download`,IconLeft:l,submenu:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(p,{label:`As PDF`,IconLeft:C}),(0,w.jsx)(p,{label:`As PNG`,IconLeft:c}),(0,w.jsx)(p,{label:`As CSV`,IconLeft:t})]})}),(0,w.jsx)(s,{}),(0,w.jsx)(p,{label:`Delete`,kind:`danger`,shortcut:`⌫`,IconLeft:v,onClick:()=>console.log(`Delete`)})]})},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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