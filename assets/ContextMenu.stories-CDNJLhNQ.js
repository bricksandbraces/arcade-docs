import{n as e}from"./chunk-jRWAZmH_.js";import{Aa as t,Bi as n,Ca as r,Di as i,Li as a,Ma as o,Oo as s,Qi as c,Sa as l,Xi as u,bi as d,d as f,da as p,ja as m,l as h,la as g,ma as _,pa as v,qi as y,t as b,u as x,ua as S,ya as C}from"./iframe-CWtmor6b.js";var w,T,E,D,O;e((()=>{b(),i(),w=s(),T={title:`Overlays & Menus/ContextMenu/ContextMenu`,component:h,tags:[`autodocs`],argTypes:{size:{control:`inline-radio`,options:x}},args:{size:`medium`},parameters:{layout:`centered`,docs:{description:{component:["Right-click menu attached to a trigger surface. Compose entries with `ContextMenuListItem` (optionally nested via `submenu`) and `Divider` for grouping.",``,"Breaking change from earlier versions: `ContextMenuList` was removed — compose items directly as `ContextMenu` children."].join(`
`)}}}},E=`select-none rounded-md border border-dashed border-border p-xlg text-center text-text typography-body-small`,D={render:e=>(0,w.jsxs)(h,{size:e.size,ariaLabel:`File actions`,trigger:(0,w.jsx)(`div`,{className:E,children:`Right-click anywhere in this area`}),children:[(0,w.jsx)(f,{label:`Cut`,shortcut:`⌘X`,IconLeft:C,onClick:()=>console.log(`Cut`)}),(0,w.jsx)(f,{label:`Copy`,shortcut:`⌘C`,IconLeft:l,onClick:()=>console.log(`Copy`)}),(0,w.jsx)(f,{label:`Paste`,shortcut:`⌘V`,IconLeft:r,onClick:()=>console.log(`Paste`)}),(0,w.jsx)(d,{}),(0,w.jsx)(f,{label:`Edit`,shortcut:`⌘E`,IconLeft:v,onClick:()=>console.log(`Edit`)}),(0,w.jsx)(f,{label:`Share`,IconLeft:n,submenu:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(f,{label:`Email`,IconLeft:u,submenu:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(f,{label:`New message`,IconLeft:u}),(0,w.jsx)(f,{label:`Reply to thread`,IconLeft:y})]})}),(0,w.jsx)(f,{label:`Copy link`,IconLeft:c,submenu:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(f,{label:`Full URL`,IconLeft:c}),(0,w.jsx)(f,{label:`Short URL`,IconLeft:c})]})}),(0,w.jsx)(f,{label:`Social`,IconLeft:n,submenu:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(f,{label:`Post to X`,IconLeft:t}),(0,w.jsx)(f,{label:`Share on LinkedIn`,IconLeft:m}),(0,w.jsx)(f,{label:`Share on Facebook`,IconLeft:o})]})})]})}),(0,w.jsx)(f,{label:`Download`,IconLeft:_,submenu:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(f,{label:`As PDF`,IconLeft:S}),(0,w.jsx)(f,{label:`As PNG`,IconLeft:g}),(0,w.jsx)(f,{label:`As CSV`,IconLeft:p})]})}),(0,w.jsx)(d,{}),(0,w.jsx)(f,{label:`Delete`,kind:`danger`,shortcut:`⌫`,IconLeft:a,onClick:()=>console.log(`Delete`)})]})},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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