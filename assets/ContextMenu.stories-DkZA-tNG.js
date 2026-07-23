import{n as e}from"./chunk-jRWAZmH_.js";import{$i as t,Ci as n,Ei as r,Ii as i,Ji as a,Ni as o,Qi as s,Ri as c,Xi as l,Yi as u,aa as d,d as f,fa as p,l as m,ma as h,na as g,oa as _,pa as v,pi as y,si as b,t as x,u as S,uo as C}from"./iframe-CxJo9uef.js";var w,T,E,D,O;e((()=>{x(),y(),w=C(),T={title:`Overlays & Menus/ContextMenu/ContextMenu`,component:m,tags:[`autodocs`],argTypes:{size:{control:`inline-radio`,options:S}},args:{size:`medium`},parameters:{layout:`centered`,docs:{description:{component:["Right-click menu attached to a trigger surface. Compose entries with `ContextMenuListItem` (optionally nested via `submenu`) and `Divider` for grouping.",``,"Breaking change from earlier versions: `ContextMenuList` was removed — compose items directly as `ContextMenu` children."].join(`
`)}}}},E=`select-none rounded-md border border-dashed border-border p-xlg text-center text-text typography-body-small`,D={render:e=>(0,w.jsxs)(m,{size:e.size,ariaLabel:`File actions`,trigger:(0,w.jsx)(`div`,{className:E,children:`Right-click anywhere in this area`}),children:[(0,w.jsx)(f,{label:`Cut`,shortcut:`⌘X`,IconLeft:g,onClick:()=>console.log(`Cut`)}),(0,w.jsx)(f,{label:`Copy`,shortcut:`⌘C`,IconLeft:d,onClick:()=>console.log(`Copy`)}),(0,w.jsx)(f,{label:`Paste`,shortcut:`⌘V`,IconLeft:_,onClick:()=>console.log(`Paste`)}),(0,w.jsx)(b,{}),(0,w.jsx)(f,{label:`Edit`,shortcut:`⌘E`,IconLeft:s,onClick:()=>console.log(`Edit`)}),(0,w.jsx)(f,{label:`Share`,IconLeft:r,submenu:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(f,{label:`Email`,IconLeft:i,submenu:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(f,{label:`New message`,IconLeft:i}),(0,w.jsx)(f,{label:`Reply to thread`,IconLeft:o})]})}),(0,w.jsx)(f,{label:`Copy link`,IconLeft:c,submenu:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(f,{label:`Full URL`,IconLeft:c}),(0,w.jsx)(f,{label:`Short URL`,IconLeft:c})]})}),(0,w.jsx)(f,{label:`Social`,IconLeft:r,submenu:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(f,{label:`Post to X`,IconLeft:p}),(0,w.jsx)(f,{label:`Share on LinkedIn`,IconLeft:v}),(0,w.jsx)(f,{label:`Share on Facebook`,IconLeft:h})]})})]})}),(0,w.jsx)(f,{label:`Download`,IconLeft:t,submenu:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(f,{label:`As PDF`,IconLeft:u}),(0,w.jsx)(f,{label:`As PNG`,IconLeft:a}),(0,w.jsx)(f,{label:`As CSV`,IconLeft:l})]})}),(0,w.jsx)(b,{}),(0,w.jsx)(f,{label:`Delete`,kind:`danger`,shortcut:`⌫`,IconLeft:n,onClick:()=>console.log(`Delete`)})]})},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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