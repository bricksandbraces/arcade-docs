import{n as e}from"./chunk-jRWAZmH_.js";import{$o as t,Ho as n,Lo as r,Oa as i,Ro as a,So as o,To as s,Uo as c,Xo as l,co as u,d,ds as f,fs as p,l as m,mc as h,ps as g,qa as _,ro as v,t as y,ts as b,u as x,yo as S,zo as C}from"./iframe-DIsD1qwU.js";import{n as w,t as T}from"./figmaDesign-DLesXS3c.js";var E,D,O,k,A;e((()=>{y(),_(),w(),E=h(),D={title:`Components/ContextMenu`,component:m,tags:[`autodocs`],argTypes:{size:{control:`inline-radio`,options:x}},args:{size:`medium`},parameters:{design:T(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=3861-205`),layout:`centered`,docs:{description:{component:["Right-click menu attached to a trigger surface. Compose entries with `ContextMenuListItem` (optionally nested via `submenu`) and `Divider` for grouping.",``,"Breaking change from earlier versions: `ContextMenuList` was removed - compose items directly as `ContextMenu` children."].join(`
`)}}}},O=`select-none rounded-md border border-dashed border-border p-xlg text-center text-text typography-body-small`,k={render:e=>(0,E.jsxs)(m,{size:e.size,ariaLabel:`File actions`,trigger:(0,E.jsx)(`div`,{className:O,children:`Right-click anywhere in this area`}),children:[(0,E.jsx)(d,{label:`Cut`,shortcut:`⌘X`,IconLeft:l,onClick:()=>console.log(`Cut`)}),(0,E.jsx)(d,{label:`Copy`,shortcut:`⌘C`,IconLeft:t,onClick:()=>console.log(`Copy`)}),(0,E.jsx)(d,{label:`Paste`,shortcut:`⌘V`,IconLeft:b,onClick:()=>console.log(`Paste`)}),(0,E.jsx)(i,{}),(0,E.jsx)(d,{label:`Edit`,shortcut:`⌘E`,IconLeft:n,onClick:()=>console.log(`Edit`)}),(0,E.jsx)(d,{label:`Share`,IconLeft:u,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(d,{label:`Email`,IconLeft:o,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(d,{label:`New message`,IconLeft:o}),(0,E.jsx)(d,{label:`Reply to thread`,IconLeft:S})]})}),(0,E.jsx)(d,{label:`Copy link`,IconLeft:s,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(d,{label:`Full URL`,IconLeft:s}),(0,E.jsx)(d,{label:`Short URL`,IconLeft:s})]})}),(0,E.jsx)(d,{label:`Social`,IconLeft:u,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(d,{label:`Post to X`,IconLeft:f}),(0,E.jsx)(d,{label:`Share on LinkedIn`,IconLeft:p}),(0,E.jsx)(d,{label:`Share on Facebook`,IconLeft:g})]})})]})}),(0,E.jsx)(d,{label:`Download`,IconLeft:c,submenu:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(d,{label:`As PDF`,IconLeft:a}),(0,E.jsx)(d,{label:`As PNG`,IconLeft:r}),(0,E.jsx)(d,{label:`As CSV`,IconLeft:C})]})}),(0,E.jsx)(i,{}),(0,E.jsx)(d,{label:`Delete`,kind:`danger`,shortcut:`⌫`,IconLeft:v,onClick:()=>console.log(`Delete`)})]})},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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