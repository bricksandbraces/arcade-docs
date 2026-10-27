import{n as e}from"./chunk-jRWAZmH_.js";import{$a as t,Ho as n,Hs as r,No as i,Oo as a,So as o,Ua as s,Uo as c,Wo as l,_a as u,_o as d,ao as f,d as p,go as m,jo as h,ka as g,l as _,no as v,t as y,u as b,vo as x,xo as S,za as C}from"./iframe-C-RHIpW1.js";import{n as w,t as T}from"./figmaDesign-DDiUnvXT.js";var E,D,O,k,A;e((()=>{y(),g(),w(),E=r(),D={title:`Overlays & Menus/ContextMenu/ContextMenu`,component:_,tags:[`autodocs`],argTypes:{size:{control:`inline-radio`,options:b}},args:{size:`medium`},parameters:{design:T(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=3861-205`),layout:`centered`,docs:{description:{component:["Right-click menu attached to a trigger surface. Compose entries with `ContextMenuListItem` (optionally nested via `submenu`) and `Divider` for grouping.",``,"Breaking change from earlier versions: `ContextMenuList` was removed - compose items directly as `ContextMenu` children."].join(`
`)}}}},O=`select-none rounded-md border border-dashed border-border p-xlg text-center text-text typography-body-small`,k={render:e=>(0,E.jsxs)(_,{size:e.size,ariaLabel:`File actions`,trigger:(0,E.jsx)(`div`,{className:O,children:`Right-click anywhere in this area`}),children:[(0,E.jsx)(p,{label:`Cut`,shortcut:`⌘X`,IconLeft:a,onClick:()=>console.log(`Cut`)}),(0,E.jsx)(p,{label:`Copy`,shortcut:`⌘C`,IconLeft:h,onClick:()=>console.log(`Copy`)}),(0,E.jsx)(p,{label:`Paste`,shortcut:`⌘V`,IconLeft:i,onClick:()=>console.log(`Paste`)}),(0,E.jsx)(u,{}),(0,E.jsx)(p,{label:`Edit`,shortcut:`⌘E`,IconLeft:S,onClick:()=>console.log(`Edit`)}),(0,E.jsx)(p,{label:`Share`,IconLeft:s,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(p,{label:`Email`,IconLeft:v,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(p,{label:`New message`,IconLeft:v}),(0,E.jsx)(p,{label:`Reply to thread`,IconLeft:t})]})}),(0,E.jsx)(p,{label:`Copy link`,IconLeft:f,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(p,{label:`Full URL`,IconLeft:f}),(0,E.jsx)(p,{label:`Short URL`,IconLeft:f})]})}),(0,E.jsx)(p,{label:`Social`,IconLeft:s,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(p,{label:`Post to X`,IconLeft:n}),(0,E.jsx)(p,{label:`Share on LinkedIn`,IconLeft:c}),(0,E.jsx)(p,{label:`Share on Facebook`,IconLeft:l})]})})]})}),(0,E.jsx)(p,{label:`Download`,IconLeft:o,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(p,{label:`As PDF`,IconLeft:d}),(0,E.jsx)(p,{label:`As PNG`,IconLeft:m}),(0,E.jsx)(p,{label:`As CSV`,IconLeft:x})]})}),(0,E.jsx)(u,{}),(0,E.jsx)(p,{label:`Delete`,kind:`danger`,shortcut:`⌫`,IconLeft:C,onClick:()=>console.log(`Delete`)})]})},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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