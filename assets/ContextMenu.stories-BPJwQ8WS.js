import{n as e}from"./chunk-jRWAZmH_.js";import{$i as t,Ei as n,Gi as r,Hi as i,Ki as a,Qi as o,Ui as s,Vi as c,Yi as l,_i as u,aa as d,bi as f,d as p,ji as m,ki as h,l as g,oa as _,ro as v,sa as y,si as b,t as x,ti as S,u as C}from"./iframe-C1Q2u2SU.js";var w,T,E,D,O;e((()=>{x(),b(),w=v(),T={title:`Overlays & Menus/ContextMenu/ContextMenu`,component:g,tags:[`autodocs`],argTypes:{size:{control:`inline-radio`,options:C}},args:{size:`medium`},parameters:{layout:`centered`,docs:{description:{component:["Right-click menu attached to a trigger surface. Compose entries with `ContextMenuListItem` (optionally nested via `submenu`) and `Divider` for grouping.",``,"Breaking change from earlier versions: `ContextMenuList` was removed — compose items directly as `ContextMenu` children."].join(`
`)}}}},E=`select-none rounded-md border border-dashed border-border p-xlg text-center text-text typography-body-small`,D={render:e=>(0,w.jsxs)(g,{size:e.size,ariaLabel:`File actions`,trigger:(0,w.jsx)(`div`,{className:E,children:`Right-click anywhere in this area`}),children:[(0,w.jsx)(p,{label:`Cut`,shortcut:`⌘X`,IconLeft:l,onClick:()=>console.log(`Cut`)}),(0,w.jsx)(p,{label:`Copy`,shortcut:`⌘C`,IconLeft:o,onClick:()=>console.log(`Copy`)}),(0,w.jsx)(p,{label:`Paste`,shortcut:`⌘V`,IconLeft:t,onClick:()=>console.log(`Paste`)}),(0,w.jsx)(S,{}),(0,w.jsx)(p,{label:`Edit`,shortcut:`⌘E`,IconLeft:r,onClick:()=>console.log(`Edit`)}),(0,w.jsx)(p,{label:`Share`,IconLeft:f,submenu:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(p,{label:`Email`,IconLeft:h,submenu:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(p,{label:`New message`,IconLeft:h}),(0,w.jsx)(p,{label:`Reply to thread`,IconLeft:n})]})}),(0,w.jsx)(p,{label:`Copy link`,IconLeft:m,submenu:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(p,{label:`Full URL`,IconLeft:m}),(0,w.jsx)(p,{label:`Short URL`,IconLeft:m})]})}),(0,w.jsx)(p,{label:`Social`,IconLeft:f,submenu:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(p,{label:`Post to X`,IconLeft:d}),(0,w.jsx)(p,{label:`Share on LinkedIn`,IconLeft:_}),(0,w.jsx)(p,{label:`Share on Facebook`,IconLeft:y})]})})]})}),(0,w.jsx)(p,{label:`Download`,IconLeft:a,submenu:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(p,{label:`As PDF`,IconLeft:i}),(0,w.jsx)(p,{label:`As PNG`,IconLeft:c}),(0,w.jsx)(p,{label:`As CSV`,IconLeft:s})]})}),(0,w.jsx)(S,{}),(0,w.jsx)(p,{label:`Delete`,kind:`danger`,shortcut:`⌫`,IconLeft:u,onClick:()=>console.log(`Delete`)})]})},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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