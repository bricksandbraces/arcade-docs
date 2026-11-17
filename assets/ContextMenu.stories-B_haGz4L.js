import{n as e}from"./chunk-jRWAZmH_.js";import{Bo as t,Co as n,Eo as r,Ja as i,Ro as a,Uo as o,Wo as s,Zo as c,bo as l,d as u,es as d,fs as f,hc as p,io as m,ka as h,l as g,lo as _,ms as v,ns as y,ps as b,t as x,u as S,zo as C}from"./iframe-BV9aNDwF.js";import{n as w,t as T}from"./figmaDesign-DLesXS3c.js";var E,D,O,k,A;e((()=>{x(),i(),w(),E=p(),D={title:`Components/ContextMenu`,component:g,tags:[`autodocs`],argTypes:{size:{control:`inline-radio`,options:S}},args:{size:`medium`},parameters:{design:T(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=3861-205`),layout:`centered`,docs:{description:{component:["Right-click menu attached to a trigger surface. Compose entries with `ContextMenuListItem` (optionally nested via `submenu`) and `Divider` for grouping.",``,"Breaking change from earlier versions: `ContextMenuList` was removed - compose items directly as `ContextMenu` children."].join(`
`)}}}},O=`select-none rounded-md border border-dashed border-border p-xlg text-center text-text typography-body-small`,k={render:e=>(0,E.jsxs)(g,{size:e.size,ariaLabel:`File actions`,trigger:(0,E.jsx)(`div`,{className:O,children:`Right-click anywhere in this area`}),children:[(0,E.jsx)(u,{label:`Cut`,shortcut:`⌘X`,IconLeft:c,onClick:()=>console.log(`Cut`)}),(0,E.jsx)(u,{label:`Copy`,shortcut:`⌘C`,IconLeft:d,onClick:()=>console.log(`Copy`)}),(0,E.jsx)(u,{label:`Paste`,shortcut:`⌘V`,IconLeft:y,onClick:()=>console.log(`Paste`)}),(0,E.jsx)(h,{}),(0,E.jsx)(u,{label:`Edit`,shortcut:`⌘E`,IconLeft:o,onClick:()=>console.log(`Edit`)}),(0,E.jsx)(u,{label:`Share`,IconLeft:_,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(u,{label:`Email`,IconLeft:n,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(u,{label:`New message`,IconLeft:n}),(0,E.jsx)(u,{label:`Reply to thread`,IconLeft:l})]})}),(0,E.jsx)(u,{label:`Copy link`,IconLeft:r,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(u,{label:`Full URL`,IconLeft:r}),(0,E.jsx)(u,{label:`Short URL`,IconLeft:r})]})}),(0,E.jsx)(u,{label:`Social`,IconLeft:_,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(u,{label:`Post to X`,IconLeft:f}),(0,E.jsx)(u,{label:`Share on LinkedIn`,IconLeft:b}),(0,E.jsx)(u,{label:`Share on Facebook`,IconLeft:v})]})})]})}),(0,E.jsx)(u,{label:`Download`,IconLeft:s,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(u,{label:`As PDF`,IconLeft:C}),(0,E.jsx)(u,{label:`As PNG`,IconLeft:a}),(0,E.jsx)(u,{label:`As CSV`,IconLeft:t})]})}),(0,E.jsx)(h,{}),(0,E.jsx)(u,{label:`Delete`,kind:`danger`,shortcut:`⌫`,IconLeft:m,onClick:()=>console.log(`Delete`)})]})},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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