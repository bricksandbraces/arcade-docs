import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{s as I,t as n,u,v as L,D as s,w as m,x as d,y as x,z as b}from"./ContextMenu-ByChsCan.js";import"./index-CY-HDqYb.js";import{I as f,a,b as l,c as C,d as o,e as h,f as p,g as M}from"./IconShare-BnvrlcCw.js";import{I as j}from"./IconEdit-BSD7tDn4.js";import{I as g}from"./IconTrash-zv8R8xfd.js";import"./index-A6zbrgSY.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";const T={title:"Fabian Supervision/ContextMenu/ContextMenu",component:I,parameters:{layout:"centered",docs:{description:{component:"Breaking change: `ContextMenuList` was removed. `ContextMenu` now uses the `OverflowMenu` shell internally; compose menus directly with `ContextMenuListItem` and optional `Divider` children."}}}},y="select-none rounded-md border border-dashed border-border p-xlg text-center text-text typography-body-small",t={render:()=>e.jsxs(I,{ariaLabel:"File actions",trigger:e.jsx("div",{className:y,children:"Right-click anywhere in this area"}),children:[e.jsx(n,{label:"Cut",shortcut:"⌘X",IconLeft:u}),e.jsx(n,{label:"Copy",shortcut:"⌘C",IconLeft:L}),e.jsx(n,{label:"Paste",shortcut:"⌘V",IconLeft:f}),e.jsx(s,{}),e.jsx(n,{label:"Edit",shortcut:"⌘E",IconLeft:j}),e.jsx(n,{label:"Share",IconLeft:a,submenu:e.jsxs(e.Fragment,{children:[e.jsx(n,{label:"Email",IconLeft:l,submenu:e.jsxs(e.Fragment,{children:[e.jsx(n,{label:"New message",IconLeft:l}),e.jsx(n,{label:"Reply to thread",IconLeft:C})]})}),e.jsx(n,{label:"Copy link",IconLeft:o,submenu:e.jsxs(e.Fragment,{children:[e.jsx(n,{label:"Full URL",IconLeft:o}),e.jsx(n,{label:"Short URL",IconLeft:o})]})}),e.jsx(n,{label:"Social",IconLeft:a,submenu:e.jsxs(e.Fragment,{children:[e.jsx(n,{label:"Post to X",IconLeft:h}),e.jsx(n,{label:"Share on LinkedIn",IconLeft:p}),e.jsx(n,{label:"Share on Facebook",IconLeft:M})]})})]})}),e.jsx(n,{label:"Download",IconLeft:m,submenu:e.jsxs(e.Fragment,{children:[e.jsx(n,{label:"As PDF",IconLeft:d}),e.jsx(n,{label:"As PNG",IconLeft:x}),e.jsx(n,{label:"As CSV",IconLeft:b})]})}),e.jsx(s,{}),e.jsx(n,{label:"Delete",kind:"danger",shortcut:"⌫",IconLeft:g})]})};var c,r,i;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <ContextMenu ariaLabel="File actions" trigger={<div className={targetClasses}>
          Right-click anywhere in this area
        </div>}>
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
}`,...(i=(r=t.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const B=["Playground"];export{t as Playground,B as __namedExportsOrder,T as default};
