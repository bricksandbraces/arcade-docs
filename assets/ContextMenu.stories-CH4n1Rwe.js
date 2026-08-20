import{n as e}from"./chunk-jRWAZmH_.js";import{$i as t,Bi as n,Hi as r,Li as i,Oi as a,Qi as o,_a as s,d as c,ea as l,fi as u,ga as d,ji as f,l as p,la as m,mo as h,na as g,oa as _,ra as v,t as y,u as b,ua as x,va as S,vi as C}from"./iframe-cx3JRc0s.js";var w,T,E,D,O;e((()=>{y(),C(),w=h(),T={title:`Overlays & Menus/ContextMenu/ContextMenu`,component:p,tags:[`autodocs`],argTypes:{size:{control:`inline-radio`,options:b}},args:{size:`medium`},parameters:{layout:`centered`,docs:{description:{component:["Right-click menu attached to a trigger surface. Compose entries with `ContextMenuListItem` (optionally nested via `submenu`) and `Divider` for grouping.",``,"Breaking change from earlier versions: `ContextMenuList` was removed — compose items directly as `ContextMenu` children."].join(`
`)}}}},E=`select-none rounded-md border border-dashed border-border p-xlg text-center text-text typography-body-small`,D={render:e=>(0,w.jsxs)(p,{size:e.size,ariaLabel:`File actions`,trigger:(0,w.jsx)(`div`,{className:E,children:`Right-click anywhere in this area`}),children:[(0,w.jsx)(c,{label:`Cut`,shortcut:`⌘X`,IconLeft:_,onClick:()=>console.log(`Cut`)}),(0,w.jsx)(c,{label:`Copy`,shortcut:`⌘C`,IconLeft:m,onClick:()=>console.log(`Copy`)}),(0,w.jsx)(c,{label:`Paste`,shortcut:`⌘V`,IconLeft:x,onClick:()=>console.log(`Paste`)}),(0,w.jsx)(u,{}),(0,w.jsx)(c,{label:`Edit`,shortcut:`⌘E`,IconLeft:g,onClick:()=>console.log(`Edit`)}),(0,w.jsx)(c,{label:`Share`,IconLeft:f,submenu:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(c,{label:`Email`,IconLeft:n,submenu:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(c,{label:`New message`,IconLeft:n}),(0,w.jsx)(c,{label:`Reply to thread`,IconLeft:i})]})}),(0,w.jsx)(c,{label:`Copy link`,IconLeft:r,submenu:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(c,{label:`Full URL`,IconLeft:r}),(0,w.jsx)(c,{label:`Short URL`,IconLeft:r})]})}),(0,w.jsx)(c,{label:`Social`,IconLeft:f,submenu:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(c,{label:`Post to X`,IconLeft:d}),(0,w.jsx)(c,{label:`Share on LinkedIn`,IconLeft:s}),(0,w.jsx)(c,{label:`Share on Facebook`,IconLeft:S})]})})]})}),(0,w.jsx)(c,{label:`Download`,IconLeft:v,submenu:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(c,{label:`As PDF`,IconLeft:t}),(0,w.jsx)(c,{label:`As PNG`,IconLeft:o}),(0,w.jsx)(c,{label:`As CSV`,IconLeft:l})]})}),(0,w.jsx)(u,{}),(0,w.jsx)(c,{label:`Delete`,kind:`danger`,shortcut:`⌫`,IconLeft:a,onClick:()=>console.log(`Delete`)})]})},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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