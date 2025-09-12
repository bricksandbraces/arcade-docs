import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{R as k}from"./index-0yr9KlQE.js";import{X as b,Y as ee,Z as l}from"./ContextMenuList-pvZaRry1.js";import"./NumberInput-LKINkquG.js";import"./index-tymuTqDW.js";import"./index-DotmK1FS.js";import"./borders-N_bRvfGw.js";import"./colors-mvAPBTAn.js";import"./index-ChaIqHV-.js";const ue={title:"Components/FileTree/FileTreeItem",component:l,argTypes:{kind:{control:"inline-radio",options:ee},state:{control:"inline-radio",options:b},open:{control:"boolean"},disabled:{control:"boolean"},selected:{control:"boolean"},title:{control:"text"}}},o={args:{kind:"file",state:"enabled",open:!1,disabled:!1,selected:!1,title:"README.md"}},a={args:{kind:"folder",state:"enabled",open:!1,disabled:!1,selected:!1,title:"src"}},r={args:{kind:"folder",state:"enabled",open:!0,disabled:!1,selected:!1,title:"components"}},i={args:{kind:"file",state:"enabled",open:!1,disabled:!1,selected:!0,title:"Button.tsx"}},c={args:{kind:"folder",state:"enabled",open:!1,disabled:!1,selected:!0,title:"utils"}},p={args:{kind:"file",state:"enabled",open:!1,disabled:!0,selected:!1,title:"locked.txt"}},m={args:{kind:"folder",state:"enabled",open:!1,disabled:!0,selected:!1,title:"private"}},u={render:()=>t.jsx("div",{className:"space-y-1",children:ee.map(e=>t.jsx(l,{kind:e,title:e==="folder"?"Example Folder":"example.txt",open:e==="folder"},e))})},f={render:()=>t.jsx("div",{className:"space-y-1",children:b.map(e=>t.jsx(l,{kind:"file",state:e,title:`File ${e}`,disabled:e==="disabled",selected:e==="selected"},e))})},g={render:()=>t.jsx("div",{className:"space-y-1",children:b.map(e=>t.jsx(l,{kind:"folder",state:e,title:`Folder ${e}`,open:!1,disabled:e==="disabled",selected:e==="selected"},e))})},S={render:()=>{const[e,te]=k.useState(null),[d,se]=k.useState(new Set),n=s=>{te(s)},F=(s,le)=>{const x=new Set(d);le?x.add(s):x.delete(s),se(x)};return t.jsxs("div",{className:"w-64 space-y-1",children:[t.jsx(l,{kind:"folder",title:"src",open:d.has("src"),selected:e==="src",onSelect:()=>n("src"),onToggle:s=>F("src",s)}),t.jsx(l,{kind:"folder",title:"components",open:d.has("components"),selected:e==="components",onSelect:()=>n("components"),onToggle:s=>F("components",s)}),t.jsx(l,{kind:"file",title:"Button.tsx",selected:e==="Button.tsx",onSelect:()=>n("Button.tsx")}),t.jsx(l,{kind:"file",title:"Input.tsx",selected:e==="Input.tsx",onSelect:()=>n("Input.tsx")}),t.jsx(l,{kind:"folder",title:"utils",open:d.has("utils"),selected:e==="utils",onSelect:()=>n("utils"),onToggle:s=>F("utils",s)}),t.jsx(l,{kind:"file",title:"index.ts",selected:e==="index.ts",onSelect:()=>n("index.ts")})]})}};var I,T,h;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    kind: "file",
    state: "enabled",
    open: false,
    disabled: false,
    selected: false,
    title: "README.md"
  }
}`,...(h=(T=o.parameters)==null?void 0:T.docs)==null?void 0:h.source}}};var v,j,y;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    kind: "folder",
    state: "enabled",
    open: false,
    disabled: false,
    selected: false,
    title: "src"
  }
}`,...(y=(j=a.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var w,O,B;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(K=(D=c.parameters)==null?void 0:D.docs)==null?void 0:K.source}}};var $,C,M;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    kind: "file",
    state: "enabled",
    open: false,
    disabled: true,
    selected: false,
    title: "locked.txt"
  }
}`,...(M=(C=p.parameters)==null?void 0:C.docs)==null?void 0:M.source}}};var P,_,X;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    kind: "folder",
    state: "enabled",
    open: false,
    disabled: true,
    selected: false,
    title: "private"
  }
}`,...(X=(_=m.parameters)==null?void 0:_.docs)==null?void 0:X.source}}};var Y,Z,q;u.parameters={...u.parameters,docs:{...(Y=u.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <div className="space-y-1">
      {FileTreeItemKinds.map(kind => <FileTreeItem key={kind} kind={kind} title={kind === "folder" ? "Example Folder" : "example.txt"} open={kind === "folder"} />)}
    </div>
}`,...(q=(Z=u.parameters)==null?void 0:Z.docs)==null?void 0:q.source}}};var z,G,H;f.parameters={...f.parameters,docs:{...(z=f.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div className="space-y-1">
      {FileTreeItemStates.map(state => <FileTreeItem key={state} kind="file" state={state} title={\`File \${state}\`} disabled={state === "disabled"} selected={state === "selected"} />)}
    </div>
}`,...(H=(G=f.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var J,L,Q;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <div className="space-y-1">
      {FileTreeItemStates.map(state => <FileTreeItem key={state} kind="folder" state={state} title={\`Folder \${state}\`} open={false} disabled={state === "disabled"} selected={state === "selected"} />)}
    </div>
}`,...(Q=(L=g.parameters)==null?void 0:L.docs)==null?void 0:Q.source}}};var U,V,W;S.parameters={...S.parameters,docs:{...(U=S.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(W=(V=S.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};const fe=["Playground","FolderClosed","FolderOpen","FileSelected","FolderSelected","FileDisabled","FolderDisabled","AllKinds","AllStates","FolderStates","Interactive"];export{u as AllKinds,f as AllStates,p as FileDisabled,i as FileSelected,a as FolderClosed,m as FolderDisabled,r as FolderOpen,c as FolderSelected,g as FolderStates,S as Interactive,o as Playground,fe as __namedExportsOrder,ue as default};
