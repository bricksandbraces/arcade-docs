import{n as e}from"./chunk-jRWAZmH_.js";import{Fi as t,Ji as n,Li as r,Mi as i,Qi as a,Si as o,Ti as s,Yi as c,Zi as l,aa as u,d,da as f,fa as p,fi as m,ia as h,l as g,lo as _,oi as v,pa as y,qi as b,t as x,ta as S,u as C}from"./iframe-HHFr5MkK.js";var w,T,E,D,O;e((()=>{x(),m(),w=_(),T={title:`Overlays & Menus/ContextMenu/ContextMenu`,component:g,tags:[`autodocs`],argTypes:{size:{control:`inline-radio`,options:C}},args:{size:`medium`},parameters:{layout:`centered`,docs:{description:{component:["Right-click menu attached to a trigger surface. Compose entries with `ContextMenuListItem` (optionally nested via `submenu`) and `Divider` for grouping.",``,"Breaking change from earlier versions: `ContextMenuList` was removed — compose items directly as `ContextMenu` children."].join(`
`)}}}},E=`select-none rounded-md border border-dashed border-border p-xlg text-center text-text typography-body-small`,D={render:e=>(0,w.jsxs)(g,{size:e.size,ariaLabel:`File actions`,trigger:(0,w.jsx)(`div`,{className:E,children:`Right-click anywhere in this area`}),children:[(0,w.jsx)(d,{label:`Cut`,shortcut:`⌘X`,IconLeft:S,onClick:()=>console.log(`Cut`)}),(0,w.jsx)(d,{label:`Copy`,shortcut:`⌘C`,IconLeft:h,onClick:()=>console.log(`Copy`)}),(0,w.jsx)(d,{label:`Paste`,shortcut:`⌘V`,IconLeft:u,onClick:()=>console.log(`Paste`)}),(0,w.jsx)(v,{}),(0,w.jsx)(d,{label:`Edit`,shortcut:`⌘E`,IconLeft:l,onClick:()=>console.log(`Edit`)}),(0,w.jsx)(d,{label:`Share`,IconLeft:s,submenu:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(d,{label:`Email`,IconLeft:t,submenu:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(d,{label:`New message`,IconLeft:t}),(0,w.jsx)(d,{label:`Reply to thread`,IconLeft:i})]})}),(0,w.jsx)(d,{label:`Copy link`,IconLeft:r,submenu:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(d,{label:`Full URL`,IconLeft:r}),(0,w.jsx)(d,{label:`Short URL`,IconLeft:r})]})}),(0,w.jsx)(d,{label:`Social`,IconLeft:s,submenu:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(d,{label:`Post to X`,IconLeft:f}),(0,w.jsx)(d,{label:`Share on LinkedIn`,IconLeft:p}),(0,w.jsx)(d,{label:`Share on Facebook`,IconLeft:y})]})})]})}),(0,w.jsx)(d,{label:`Download`,IconLeft:a,submenu:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(d,{label:`As PDF`,IconLeft:n}),(0,w.jsx)(d,{label:`As PNG`,IconLeft:b}),(0,w.jsx)(d,{label:`As CSV`,IconLeft:c})]})}),(0,w.jsx)(v,{}),(0,w.jsx)(d,{label:`Delete`,kind:`danger`,shortcut:`⌫`,IconLeft:o,onClick:()=>console.log(`Delete`)})]})},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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