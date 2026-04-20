import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as I}from"./index-CY-HDqYb.js";import{a3 as v}from"./ContextMenuList-DA_OViit.js";import"./index-A6zbrgSY.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";import"./index-ZRCHFLd-.js";import"./sizes-BpUsT7VU.js";import"./colors-CoOIoG7W.js";const le={title:"WIP Components/FileTree/FileTree",component:v,parameters:{layout:"centered",docs:{description:{component:"FileTree component for displaying hierarchical file structures with expandable folders and selectable items."}}},argTypes:{data:{description:"Array of file tree nodes",control:{type:"object"}},selectedId:{description:"ID of the currently selected node",control:{type:"text"}},expandedIds:{description:"Array of IDs for expanded nodes",control:{type:"object"}}}},r=[{id:"src",title:"src",kind:"folder",children:[{id:"components",title:"components",kind:"folder",children:[{id:"button",title:"Button.tsx",kind:"file"},{id:"input",title:"Input.tsx",kind:"file"}]},{id:"utils",title:"utils",kind:"folder",children:[{id:"helpers",title:"helpers.ts",kind:"file"}]},{id:"app",title:"App.tsx",kind:"file"},{id:"index",title:"index.ts",kind:"file"}]},{id:"public",title:"public",kind:"folder",children:[{id:"favicon",title:"favicon.ico",kind:"file"},{id:"manifest",title:"manifest.json",kind:"file"}]},{id:"package",title:"package.json",kind:"file"},{id:"readme",title:"README.md",kind:"file"}],U=t=>{const[n,s]=I.useState(t.selectedId),[k,i]=I.useState(t.expandedIds||[]);return e.jsx("div",{className:"p-4",children:e.jsx(v,{...t,selectedId:n,expandedIds:k,onSelect:(d,l)=>{s(d),console.log("Selected:",d,l)},onToggle:(d,l)=>{i(h=>h.includes(d)?h.filter(Q=>Q!==d):[...h,d]),console.log("Toggled:",d,l)}})})},a={args:{data:r,selectedId:void 0,expandedIds:[]},render:U},o={args:{data:r,selectedId:"button",expandedIds:["src","components"]}},c={args:{data:r,selectedId:void 0,expandedIds:["src"]}},p={args:{data:r,selectedId:void 0,expandedIds:["src","components","utils","public"]}},m={args:{data:[{id:"single",title:"single-file.tsx",kind:"file"}],selectedId:void 0,expandedIds:[]}},f={args:{data:[{id:"empty",title:"empty-folder",kind:"folder",children:[]},{id:"file",title:"file.txt",kind:"file"}],selectedId:void 0,expandedIds:[]}},u={args:{data:[{id:"level1",title:"level1",kind:"folder",children:[{id:"level2",title:"level2",kind:"folder",children:[{id:"level3",title:"level3",kind:"folder",children:[{id:"deep-file",title:"deep-file.txt",kind:"file"}]}]}]}],selectedId:"deep-file",expandedIds:["level1","level2","level3"]}},g={args:{data:[{id:"node_modules",title:"node_modules",kind:"folder",children:Array.from({length:10},(t,n)=>({id:`package-${n}`,title:`package-${n}`,kind:"folder",children:[{id:`package-${n}-file`,title:"package.json",kind:"file"}]}))},{id:"src-large",title:"src",kind:"folder",children:Array.from({length:15},(t,n)=>({id:`file-${n}`,title:`file-${n}.tsx`,kind:"file"}))}],selectedId:void 0,expandedIds:[]}},V=()=>{const[t,n]=I.useState(),[s,k]=I.useState([]);return e.jsxs("div",{className:"flex gap-8 p-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"mb-4 text-lg font-semibold",children:"File Tree"}),e.jsx(v,{data:r,selectedId:t,expandedIds:s,onSelect:i=>{n(i)},onToggle:i=>{k(d=>d.includes(i)?d.filter(l=>l!==i):[...d,i])}})]}),e.jsxs("div",{className:"min-w-48",children:[e.jsx("h3",{className:"mb-4 text-lg font-semibold",children:"State"}),e.jsxs("div",{className:"space-y-2 text-sm",children:[e.jsxs("div",{children:[e.jsx("strong",{children:"Selected:"})," ",t||"None"]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Expanded:"})," ",s.length>0?s.join(", "):"None"]})]})]})]})},x={render:V};var y,S,j;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    selectedId: undefined,
    expandedIds: []
  },
  render: PlaygroundComponent
}`,...(j=(S=a.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var b,E,F;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    selectedId: "button",
    expandedIds: ["src", "components"]
  }
}`,...(F=(E=o.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var T,D,N;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    selectedId: undefined,
    expandedIds: ["src"]
  }
}`,...(N=(D=c.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var _,$,A;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    selectedId: undefined,
    expandedIds: ["src", "components", "utils", "public"]
  }
}`,...(A=($=p.parameters)==null?void 0:$.docs)==null?void 0:A.source}}};var P,C,W;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    data: [{
      id: "single",
      title: "single-file.tsx",
      kind: "file"
    }],
    selectedId: undefined,
    expandedIds: []
  }
}`,...(W=(C=m.parameters)==null?void 0:C.docs)==null?void 0:W.source}}};var w,L,R;f.parameters={...f.parameters,docs:{...(w=f.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    data: [{
      id: "empty",
      title: "empty-folder",
      kind: "folder",
      children: []
    }, {
      id: "file",
      title: "file.txt",
      kind: "file"
    }],
    selectedId: undefined,
    expandedIds: []
  }
}`,...(R=(L=f.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};var B,M,O;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    data: [{
      id: "level1",
      title: "level1",
      kind: "folder",
      children: [{
        id: "level2",
        title: "level2",
        kind: "folder",
        children: [{
          id: "level3",
          title: "level3",
          kind: "folder",
          children: [{
            id: "deep-file",
            title: "deep-file.txt",
            kind: "file"
          }]
        }]
      }]
    }],
    selectedId: "deep-file",
    expandedIds: ["level1", "level2", "level3"]
  }
}`,...(O=(M=u.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var q,z,G;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    data: [{
      id: "node_modules",
      title: "node_modules",
      kind: "folder",
      children: Array.from({
        length: 10
      }, (_, i) => ({
        id: \`package-\${i}\`,
        title: \`package-\${i}\`,
        kind: "folder" as const,
        children: [{
          id: \`package-\${i}-file\`,
          title: "package.json",
          kind: "file" as const
        }]
      }))
    }, {
      id: "src-large",
      title: "src",
      kind: "folder",
      children: Array.from({
        length: 15
      }, (_, i) => ({
        id: \`file-\${i}\`,
        title: \`file-\${i}.tsx\`,
        kind: "file" as const
      }))
    }],
    selectedId: undefined,
    expandedIds: []
  }
}`,...(G=(z=g.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var H,J,K;x.parameters={...x.parameters,docs:{...(H=x.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: InteractiveComponent
}`,...(K=(J=x.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const re=["Playground","WithSelection","PartiallyExpanded","FullyExpanded","SingleFile","EmptyFolder","DeepNesting","LargeFileTree","Interactive"];export{u as DeepNesting,f as EmptyFolder,p as FullyExpanded,x as Interactive,g as LargeFileTree,c as PartiallyExpanded,a as Playground,m as SingleFile,o as WithSelection,re as __namedExportsOrder,le as default};
