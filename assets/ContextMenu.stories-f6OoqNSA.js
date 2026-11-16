import{n as e}from"./chunk-jRWAZmH_.js";import{$o as t,Ho as n,Io as r,Jo as i,Ka as a,Lo as o,Oa as s,Ro as c,Vo as l,Zo as u,cs as d,d as f,dc as p,l as m,ls as h,no as g,so as _,t as v,u as y,us as b,vo as x,wo as S,xo as C}from"./iframe-BLPEZqnC.js";import{n as w,t as T}from"./figmaDesign-DLesXS3c.js";var E,D,O,k,A;e((()=>{v(),a(),w(),E=p(),D={title:`Components/ContextMenu`,component:m,tags:[`autodocs`],argTypes:{size:{control:`inline-radio`,options:y}},args:{size:`medium`},parameters:{design:T(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=3861-205`),layout:`centered`,docs:{description:{component:["Right-click menu attached to a trigger surface. Compose entries with `ContextMenuListItem` (optionally nested via `submenu`) and `Divider` for grouping.",``,"Breaking change from earlier versions: `ContextMenuList` was removed - compose items directly as `ContextMenu` children."].join(`
`)}}}},O=`select-none rounded-md border border-dashed border-border p-xlg text-center text-text typography-body-small`,k={render:e=>(0,E.jsxs)(m,{size:e.size,ariaLabel:`File actions`,trigger:(0,E.jsx)(`div`,{className:O,children:`Right-click anywhere in this area`}),children:[(0,E.jsx)(f,{label:`Cut`,shortcut:`⌘X`,IconLeft:i,onClick:()=>console.log(`Cut`)}),(0,E.jsx)(f,{label:`Copy`,shortcut:`⌘C`,IconLeft:u,onClick:()=>console.log(`Copy`)}),(0,E.jsx)(f,{label:`Paste`,shortcut:`⌘V`,IconLeft:t,onClick:()=>console.log(`Paste`)}),(0,E.jsx)(s,{}),(0,E.jsx)(f,{label:`Edit`,shortcut:`⌘E`,IconLeft:l,onClick:()=>console.log(`Edit`)}),(0,E.jsx)(f,{label:`Share`,IconLeft:_,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(f,{label:`Email`,IconLeft:C,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(f,{label:`New message`,IconLeft:C}),(0,E.jsx)(f,{label:`Reply to thread`,IconLeft:x})]})}),(0,E.jsx)(f,{label:`Copy link`,IconLeft:S,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(f,{label:`Full URL`,IconLeft:S}),(0,E.jsx)(f,{label:`Short URL`,IconLeft:S})]})}),(0,E.jsx)(f,{label:`Social`,IconLeft:_,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(f,{label:`Post to X`,IconLeft:d}),(0,E.jsx)(f,{label:`Share on LinkedIn`,IconLeft:h}),(0,E.jsx)(f,{label:`Share on Facebook`,IconLeft:b})]})})]})}),(0,E.jsx)(f,{label:`Download`,IconLeft:n,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(f,{label:`As PDF`,IconLeft:o}),(0,E.jsx)(f,{label:`As PNG`,IconLeft:r}),(0,E.jsx)(f,{label:`As CSV`,IconLeft:c})]})}),(0,E.jsx)(s,{}),(0,E.jsx)(f,{label:`Delete`,kind:`danger`,shortcut:`⌫`,IconLeft:g,onClick:()=>console.log(`Delete`)})]})},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A=[`Playground`]}))();export{k as Playground,A as __namedExportsOrder,D as default};