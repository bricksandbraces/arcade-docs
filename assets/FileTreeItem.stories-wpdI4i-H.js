import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{R as I}from"./index-CY-HDqYb.js";import{a4 as b,a5 as ee,a6 as l}from"./ContextMenuList-DA_OViit.js";import"./index-A6zbrgSY.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";import"./index-ZRCHFLd-.js";import"./sizes-BpUsT7VU.js";import"./colors-CoOIoG7W.js";const ue={title:"WIP Components/FileTree/FileTreeItem",component:l,argTypes:{kind:{control:"inline-radio",options:ee},state:{control:"inline-radio",options:b},open:{control:"boolean"},disabled:{control:"boolean"},selected:{control:"boolean"},title:{control:"text"}}},d={args:{kind:"file",state:"enabled",open:!1,disabled:!1,selected:!1,title:"README.md"}},o={args:{kind:"folder",state:"enabled",open:!1,disabled:!1,selected:!1,title:"src"}},r={args:{kind:"folder",state:"enabled",open:!0,disabled:!1,selected:!1,title:"components"}},i={args:{kind:"file",state:"enabled",open:!1,disabled:!1,selected:!0,title:"Button.tsx"}},c={args:{kind:"folder",state:"enabled",open:!1,disabled:!1,selected:!0,title:"utils"}},p={args:{kind:"file",state:"enabled",open:!1,disabled:!0,selected:!1,title:"locked.txt"}},m={args:{kind:"folder",state:"enabled",open:!1,disabled:!0,selected:!1,title:"private"}},u={render:()=>t.jsx("div",{className:"space-y-1",children:ee.map(e=>t.jsx(l,{kind:e,title:e==="folder"?"Example Folder":"example.txt",open:e==="folder"},e))})},f={render:()=>t.jsx("div",{className:"space-y-1",children:b.map(e=>t.jsx(l,{kind:"file",state:e,title:`File ${e}`,disabled:e==="disabled",selected:e==="selected"},e))})},g={render:()=>t.jsx("div",{className:"space-y-1",children:b.map(e=>t.jsx(l,{kind:"folder",state:e,title:`Folder ${e}`,open:!1,disabled:e==="disabled",selected:e==="selected"},e))})},S={render:()=>{const[e,te]=I.useState(null),[a,se]=I.useState(new Set),n=s=>{te(s)},F=(s,le)=>{const x=new Set(a);le?x.add(s):x.delete(s),se(x)};return t.jsxs("div",{className:"w-64 space-y-1",children:[t.jsx(l,{kind:"folder",title:"src",open:a.has("src"),selected:e==="src",onSelect:()=>n("src"),onToggle:s=>F("src",s)}),t.jsx(l,{kind:"folder",title:"components",open:a.has("components"),selected:e==="components",onSelect:()=>n("components"),onToggle:s=>F("components",s)}),t.jsx(l,{kind:"file",title:"Button.tsx",selected:e==="Button.tsx",onSelect:()=>n("Button.tsx")}),t.jsx(l,{kind:"file",title:"Input.tsx",selected:e==="Input.tsx",onSelect:()=>n("Input.tsx")}),t.jsx(l,{kind:"folder",title:"utils",open:a.has("utils"),selected:e==="utils",onSelect:()=>n("utils"),onToggle:s=>F("utils",s)}),t.jsx(l,{kind:"file",title:"index.ts",selected:e==="index.ts",onSelect:()=>n("index.ts")})]})}};var k,T,h;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    kind: "file",
    state: "enabled",
    open: false,
    disabled: false,
    selected: false,
    title: "README.md"
  }
}`,...(h=(T=d.parameters)==null?void 0:T.docs)==null?void 0:h.source}}};var v,j,y;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    kind: "folder",
    state: "enabled",
    open: false,
    disabled: false,
    selected: false,
    title: "src"
  }
}`,...(y=(j=o.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var w,O,B;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    kind: "folder",
    state: "enabled",
    open: true,
    disabled: false,
    selected: false,
    title: "components"
  }
}`,...(B=(O=r.parameters)==null?void 0:O.docs)==null?void 0:B.source}}};var E,N,R;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    kind: "file",
    state: "enabled",
    open: false,
    disabled: false,
    selected: true,
    title: "Button.tsx"
  }
}`,...(R=(N=i.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var A,D,K;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    kind: "folder",
    state: "enabled",
    open: false,
    disabled: false,
    selected: true,
    title: "utils"
  }
}`,...(K=(D=c.parameters)==null?void 0:D.docs)==null?void 0:K.source}}};var $,C,P;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    kind: "file",
    state: "enabled",
    open: false,
    disabled: true,
    selected: false,
    title: "locked.txt"
  }
}`,...(P=(C=p.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};var M,_,W;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    kind: "folder",
    state: "enabled",
    open: false,
    disabled: true,
    selected: false,
    title: "private"
  }
}`,...(W=(_=m.parameters)==null?void 0:_.docs)==null?void 0:W.source}}};var q,z,G;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div className="space-y-1">
      {FileTreeItemKinds.map(kind => <FileTreeItem key={kind} kind={kind} title={kind === "folder" ? "Example Folder" : "example.txt"} open={kind === "folder"} />)}
    </div>
}`,...(G=(z=u.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var H,J,L;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div className="space-y-1">
      {FileTreeItemStates.map(state => <FileTreeItem key={state} kind="file" state={state} title={\`File \${state}\`} disabled={state === "disabled"} selected={state === "selected"} />)}
    </div>
}`,...(L=(J=f.parameters)==null?void 0:J.docs)==null?void 0:L.source}}};var Q,U,V;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <div className="space-y-1">
      {FileTreeItemStates.map(state => <FileTreeItem key={state} kind="folder" state={state} title={\`Folder \${state}\`} open={false} disabled={state === "disabled"} selected={state === "selected"} />)}
    </div>
}`,...(V=(U=g.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};var X,Y,Z;S.parameters={...S.parameters,docs:{...(X=S.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => {
    const [selectedItem, setSelectedItem] = React.useState<string | null>(null);
    const [openFolders, setOpenFolders] = React.useState<Set<string>>(new Set());
    const handleSelect = (itemId: string) => {
      setSelectedItem(itemId);
    };
    const handleToggle = (folderId: string, open: boolean) => {
      const newOpenFolders = new Set(openFolders);
      if (open) {
        newOpenFolders.add(folderId);
      } else {
        newOpenFolders.delete(folderId);
      }
      setOpenFolders(newOpenFolders);
    };
    return <div className="w-64 space-y-1">
        <FileTreeItem kind="folder" title="src" open={openFolders.has("src")} selected={selectedItem === "src"} onSelect={() => handleSelect("src")} onToggle={open => handleToggle("src", open)} />
        <FileTreeItem kind="folder" title="components" open={openFolders.has("components")} selected={selectedItem === "components"} onSelect={() => handleSelect("components")} onToggle={open => handleToggle("components", open)} />
        <FileTreeItem kind="file" title="Button.tsx" selected={selectedItem === "Button.tsx"} onSelect={() => handleSelect("Button.tsx")} />
        <FileTreeItem kind="file" title="Input.tsx" selected={selectedItem === "Input.tsx"} onSelect={() => handleSelect("Input.tsx")} />
        <FileTreeItem kind="folder" title="utils" open={openFolders.has("utils")} selected={selectedItem === "utils"} onSelect={() => handleSelect("utils")} onToggle={open => handleToggle("utils", open)} />
        <FileTreeItem kind="file" title="index.ts" selected={selectedItem === "index.ts"} onSelect={() => handleSelect("index.ts")} />
      </div>;
  }
}`,...(Z=(Y=S.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const fe=["Playground","FolderClosed","FolderOpen","FileSelected","FolderSelected","FileDisabled","FolderDisabled","AllKinds","AllStates","FolderStates","Interactive"];export{u as AllKinds,f as AllStates,p as FileDisabled,i as FileSelected,o as FolderClosed,m as FolderDisabled,r as FolderOpen,c as FolderSelected,g as FolderStates,S as Interactive,d as Playground,fe as __namedExportsOrder,ue as default};
