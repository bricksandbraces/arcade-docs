import{n as e}from"./chunk-jRWAZmH_.js";import{Ii as t,Ji as n,Ki as r,Pi as i,Xi as a,Zi as o,ai as s,co as c,d as l,da as u,di as d,ea as f,fa as p,ia as m,ji as h,l as g,qi as _,ra as v,t as y,u as b,ua as x,wi as S,xi as C}from"./iframe-M7vOl6ig.js";var w,T,E,D,O;e((()=>{y(),d(),w=c(),T={title:`Overlays & Menus/ContextMenu/ContextMenu`,component:g,tags:[`autodocs`],argTypes:{size:{control:`inline-radio`,options:b}},args:{size:`medium`},parameters:{layout:`centered`,docs:{description:{component:["Right-click menu attached to a trigger surface. Compose entries with `ContextMenuListItem` (optionally nested via `submenu`) and `Divider` for grouping.",``,"Breaking change from earlier versions: `ContextMenuList` was removed — compose items directly as `ContextMenu` children."].join(`
`)}}}},E=`select-none rounded-md border border-dashed border-border p-xlg text-center text-text typography-body-small`,D={render:e=>(0,w.jsxs)(g,{size:e.size,ariaLabel:`File actions`,trigger:(0,w.jsx)(`div`,{className:E,children:`Right-click anywhere in this area`}),children:[(0,w.jsx)(l,{label:`Cut`,shortcut:`⌘X`,IconLeft:f,onClick:()=>console.log(`Cut`)}),(0,w.jsx)(l,{label:`Copy`,shortcut:`⌘C`,IconLeft:v,onClick:()=>console.log(`Copy`)}),(0,w.jsx)(l,{label:`Paste`,shortcut:`⌘V`,IconLeft:m,onClick:()=>console.log(`Paste`)}),(0,w.jsx)(s,{}),(0,w.jsx)(l,{label:`Edit`,shortcut:`⌘E`,IconLeft:a,onClick:()=>console.log(`Edit`)}),(0,w.jsx)(l,{label:`Share`,IconLeft:S,submenu:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(l,{label:`Email`,IconLeft:i,submenu:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(l,{label:`New message`,IconLeft:i}),(0,w.jsx)(l,{label:`Reply to thread`,IconLeft:h})]})}),(0,w.jsx)(l,{label:`Copy link`,IconLeft:t,submenu:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(l,{label:`Full URL`,IconLeft:t}),(0,w.jsx)(l,{label:`Short URL`,IconLeft:t})]})}),(0,w.jsx)(l,{label:`Social`,IconLeft:S,submenu:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(l,{label:`Post to X`,IconLeft:x}),(0,w.jsx)(l,{label:`Share on LinkedIn`,IconLeft:u}),(0,w.jsx)(l,{label:`Share on Facebook`,IconLeft:p})]})})]})}),(0,w.jsx)(l,{label:`Download`,IconLeft:o,submenu:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(l,{label:`As PDF`,IconLeft:_}),(0,w.jsx)(l,{label:`As PNG`,IconLeft:r}),(0,w.jsx)(l,{label:`As CSV`,IconLeft:n})]})}),(0,w.jsx)(s,{}),(0,w.jsx)(l,{label:`Delete`,kind:`danger`,shortcut:`⌫`,IconLeft:C,onClick:()=>console.log(`Delete`)})]})},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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