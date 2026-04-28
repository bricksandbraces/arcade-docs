import{n as e}from"./chunk-jRWAZmH_.js";import{Cr as t,Di as n,Dr as r,Er as i,Mr as a,Nr as o,Pr as s,Sr as c,Vn as l,br as u,cr as d,dr as f,er as p,kr as m,n as h,qn as g,r as _,rr as v,t as y,ur as b,vr as x,yr as S}from"./iframe-C5-awFnQ.js";var C,w,T,E,D;e((()=>{y(),g(),C=n(),w={title:`Fabian Supervision/ContextMenu/ContextMenu`,component:h,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:["Right-click menu attached to a trigger surface. Compose entries with `ContextMenuListItem` (optionally nested via `submenu`) and `Divider` for grouping.",``,"Breaking change from earlier versions: `ContextMenuList` was removed — compose items directly as `ContextMenu` children."].join(`
`)}}}},T=`select-none rounded-md border border-dashed border-border p-xlg text-center text-text typography-body-small`,E={render:()=>(0,C.jsxs)(h,{ariaLabel:`File actions`,trigger:(0,C.jsx)(`div`,{className:T,children:`Right-click anywhere in this area`}),children:[(0,C.jsx)(_,{label:`Cut`,shortcut:`⌘X`,IconLeft:i}),(0,C.jsx)(_,{label:`Copy`,shortcut:`⌘C`,IconLeft:r}),(0,C.jsx)(_,{label:`Paste`,shortcut:`⌘V`,IconLeft:m}),(0,C.jsx)(l,{}),(0,C.jsx)(_,{label:`Edit`,shortcut:`⌘E`,IconLeft:c}),(0,C.jsx)(_,{label:`Share`,IconLeft:v,submenu:(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(_,{label:`Email`,IconLeft:b,submenu:(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(_,{label:`New message`,IconLeft:b}),(0,C.jsx)(_,{label:`Reply to thread`,IconLeft:d})]})}),(0,C.jsx)(_,{label:`Copy link`,IconLeft:f,submenu:(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(_,{label:`Full URL`,IconLeft:f}),(0,C.jsx)(_,{label:`Short URL`,IconLeft:f})]})}),(0,C.jsx)(_,{label:`Social`,IconLeft:v,submenu:(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(_,{label:`Post to X`,IconLeft:a}),(0,C.jsx)(_,{label:`Share on LinkedIn`,IconLeft:o}),(0,C.jsx)(_,{label:`Share on Facebook`,IconLeft:s})]})})]})}),(0,C.jsx)(_,{label:`Download`,IconLeft:t,submenu:(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(_,{label:`As PDF`,IconLeft:S}),(0,C.jsx)(_,{label:`As PNG`,IconLeft:x}),(0,C.jsx)(_,{label:`As CSV`,IconLeft:u})]})}),(0,C.jsx)(l,{}),(0,C.jsx)(_,{label:`Delete`,kind:`danger`,shortcut:`⌫`,IconLeft:p})]})},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <ContextMenu ariaLabel="File actions" trigger={<div className={targetClasses}>Right-click anywhere in this area</div>}>
      <ContextMenuListItem label="Cut" shortcut="⌘X" IconLeft={IconCut} />
      <ContextMenuListItem label="Copy" shortcut="⌘C" IconLeft={IconCopy} />
      <ContextMenuListItem label="Paste" shortcut="⌘V" IconLeft={IconClipboard} />
      <Divider />
      <ContextMenuListItem label="Edit" shortcut="⌘E" IconLeft={IconEdit} />
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
      <ContextMenuListItem label="Delete" kind="danger" shortcut="⌫" IconLeft={IconTrash} />
    </ContextMenu>
}`,...E.parameters?.docs?.source}}},D=[`Playground`]}))();export{E as Playground,D as __namedExportsOrder,w as default};