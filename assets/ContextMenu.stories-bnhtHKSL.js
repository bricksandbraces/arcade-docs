import{n as e}from"./chunk-jRWAZmH_.js";import{Bi as t,Ei as n,Fi as r,Qi as i,Ri as a,Xi as o,Zi as s,ca as c,d as l,ea as u,fo as d,ga as f,gi as p,ha as m,ia as h,ki as g,l as _,ma as v,sa as y,t as b,ta as x,u as S,ui as C}from"./iframe-4eq8CAan.js";var w,T,E,D,O;e((()=>{b(),p(),w=d(),T={title:`Overlays & Menus/ContextMenu/ContextMenu`,component:_,tags:[`autodocs`],argTypes:{size:{control:`inline-radio`,options:S}},args:{size:`medium`},parameters:{layout:`centered`,docs:{description:{component:["Right-click menu attached to a trigger surface. Compose entries with `ContextMenuListItem` (optionally nested via `submenu`) and `Divider` for grouping.",``,"Breaking change from earlier versions: `ContextMenuList` was removed — compose items directly as `ContextMenu` children."].join(`
`)}}}},E=`select-none rounded-md border border-dashed border-border p-xlg text-center text-text typography-body-small`,D={render:e=>(0,w.jsxs)(_,{size:e.size,ariaLabel:`File actions`,trigger:(0,w.jsx)(`div`,{className:E,children:`Right-click anywhere in this area`}),children:[(0,w.jsx)(l,{label:`Cut`,shortcut:`⌘X`,IconLeft:h,onClick:()=>console.log(`Cut`)}),(0,w.jsx)(l,{label:`Copy`,shortcut:`⌘C`,IconLeft:y,onClick:()=>console.log(`Copy`)}),(0,w.jsx)(l,{label:`Paste`,shortcut:`⌘V`,IconLeft:c,onClick:()=>console.log(`Paste`)}),(0,w.jsx)(C,{}),(0,w.jsx)(l,{label:`Edit`,shortcut:`⌘E`,IconLeft:u,onClick:()=>console.log(`Edit`)}),(0,w.jsx)(l,{label:`Share`,IconLeft:g,submenu:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(l,{label:`Email`,IconLeft:a,submenu:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(l,{label:`New message`,IconLeft:a}),(0,w.jsx)(l,{label:`Reply to thread`,IconLeft:r})]})}),(0,w.jsx)(l,{label:`Copy link`,IconLeft:t,submenu:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(l,{label:`Full URL`,IconLeft:t}),(0,w.jsx)(l,{label:`Short URL`,IconLeft:t})]})}),(0,w.jsx)(l,{label:`Social`,IconLeft:g,submenu:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(l,{label:`Post to X`,IconLeft:v}),(0,w.jsx)(l,{label:`Share on LinkedIn`,IconLeft:m}),(0,w.jsx)(l,{label:`Share on Facebook`,IconLeft:f})]})})]})}),(0,w.jsx)(l,{label:`Download`,IconLeft:x,submenu:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(l,{label:`As PDF`,IconLeft:s}),(0,w.jsx)(l,{label:`As PNG`,IconLeft:o}),(0,w.jsx)(l,{label:`As CSV`,IconLeft:i})]})}),(0,w.jsx)(C,{}),(0,w.jsx)(l,{label:`Delete`,kind:`danger`,shortcut:`⌫`,IconLeft:n,onClick:()=>console.log(`Delete`)})]})},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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