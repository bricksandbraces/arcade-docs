import{n as e}from"./chunk-jRWAZmH_.js";import{$i as t,Ea as n,Fa as r,Hi as i,Ia as a,Mo as o,Oi as s,Pa as c,Ri as l,Sa as u,Ta as d,Xi as f,_a as p,d as m,fa as h,ga as g,l as _,ma as v,pa as y,t as b,ta as x,u as S,xi as C}from"./iframe-DTfjFPcB.js";import{n as w,t as T}from"./figmaDesign-CO6i5n9C.js";var E,D,O,k,A;e((()=>{b(),s(),w(),E=o(),D={title:`Overlays & Menus/ContextMenu/ContextMenu`,component:_,tags:[`autodocs`],argTypes:{size:{control:`inline-radio`,options:S}},args:{size:`medium`},parameters:{design:T(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=3861-205`),layout:`centered`,docs:{description:{component:["Right-click menu attached to a trigger surface. Compose entries with `ContextMenuListItem` (optionally nested via `submenu`) and `Divider` for grouping.",``,"Breaking change from earlier versions: `ContextMenuList` was removed - compose items directly as `ContextMenu` children."].join(`
`)}}}},O=`select-none rounded-md border border-dashed border-border p-xlg text-center text-text typography-body-small`,k={render:e=>(0,E.jsxs)(_,{size:e.size,ariaLabel:`File actions`,trigger:(0,E.jsx)(`div`,{className:O,children:`Right-click anywhere in this area`}),children:[(0,E.jsx)(m,{label:`Cut`,shortcut:`⌘X`,IconLeft:u,onClick:()=>console.log(`Cut`)}),(0,E.jsx)(m,{label:`Copy`,shortcut:`⌘C`,IconLeft:d,onClick:()=>console.log(`Copy`)}),(0,E.jsx)(m,{label:`Paste`,shortcut:`⌘V`,IconLeft:n,onClick:()=>console.log(`Paste`)}),(0,E.jsx)(C,{}),(0,E.jsx)(m,{label:`Edit`,shortcut:`⌘E`,IconLeft:g,onClick:()=>console.log(`Edit`)}),(0,E.jsx)(m,{label:`Share`,IconLeft:i,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(m,{label:`Email`,IconLeft:t,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(m,{label:`New message`,IconLeft:t}),(0,E.jsx)(m,{label:`Reply to thread`,IconLeft:f})]})}),(0,E.jsx)(m,{label:`Copy link`,IconLeft:x,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(m,{label:`Full URL`,IconLeft:x}),(0,E.jsx)(m,{label:`Short URL`,IconLeft:x})]})}),(0,E.jsx)(m,{label:`Social`,IconLeft:i,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(m,{label:`Post to X`,IconLeft:c}),(0,E.jsx)(m,{label:`Share on LinkedIn`,IconLeft:r}),(0,E.jsx)(m,{label:`Share on Facebook`,IconLeft:a})]})})]})}),(0,E.jsx)(m,{label:`Download`,IconLeft:p,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(m,{label:`As PDF`,IconLeft:y}),(0,E.jsx)(m,{label:`As PNG`,IconLeft:h}),(0,E.jsx)(m,{label:`As CSV`,IconLeft:v})]})}),(0,E.jsx)(C,{}),(0,E.jsx)(m,{label:`Delete`,kind:`danger`,shortcut:`⌫`,IconLeft:l,onClick:()=>console.log(`Delete`)})]})},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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