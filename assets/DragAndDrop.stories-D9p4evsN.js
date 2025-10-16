import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{a6 as O,a7 as a}from"./ContextMenuList-iLopGvLG.js";import"./index-0yr9KlQE.js";import"./index-tymuTqDW.js";import"./index-DotmK1FS.js";import"./index-ChaIqHV-.js";import"./borders-N_bRvfGw.js";import"./colors-mvAPBTAn.js";const q={title:"WIP Components/FileUpload/DragAndDrop",component:a,argTypes:{state:{control:"inline-radio",options:O}}},s={args:{state:"enabled"}},r={render:()=>e.jsxs("div",{className:"gap-lg flex flex-col",children:[e.jsxs("div",{className:"gap-sm flex flex-col",children:[e.jsx("h3",{className:"text-heading-sm",children:"Enabled"}),e.jsx(a,{state:"enabled"})]}),e.jsxs("div",{className:"gap-sm flex flex-col",children:[e.jsx("h3",{className:"text-heading-sm",children:"Hover"}),e.jsx(a,{state:"hover"})]}),e.jsxs("div",{className:"gap-sm flex flex-col",children:[e.jsx("h3",{className:"text-heading-sm",children:"Drop"}),e.jsx(a,{state:"drop"})]}),e.jsxs("div",{className:"gap-sm flex flex-col",children:[e.jsx("h3",{className:"text-heading-sm",children:"Disabled"}),e.jsx(a,{state:"disabled"})]})]})},n={args:{state:"enabled"}},o={args:{state:"hover"}},t={args:{state:"drop"}},l={args:{state:"disabled"}},d={render:()=>e.jsxs("div",{className:"gap-lg flex flex-col",children:[e.jsxs("div",{className:"gap-sm flex flex-col",children:[e.jsx("h3",{className:"text-heading-sm",children:"Interactive Drag and Drop"}),e.jsx("p",{className:"text-body-sm text-text-tertiary",children:"Try dragging files onto this component to see state changes."})]}),e.jsx(a,{state:"enabled",onDrop:F=>{console.log("Files dropped:",F.dataTransfer.files)},onDragOver:()=>{console.log("Drag over")},onDragEnter:()=>{console.log("Drag enter")},onDragLeave:()=>{console.log("Drag leave")}})]})};var c,i,m;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    state: "enabled"
  }
}`,...(m=(i=s.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var p,g,x;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div className="gap-lg flex flex-col">
      <div className="gap-sm flex flex-col">
        <h3 className="text-heading-sm">Enabled</h3>
        <DragAndDrop state="enabled" />
      </div>
      <div className="gap-sm flex flex-col">
        <h3 className="text-heading-sm">Hover</h3>
        <DragAndDrop state="hover" />
      </div>
      <div className="gap-sm flex flex-col">
        <h3 className="text-heading-sm">Drop</h3>
        <DragAndDrop state="drop" />
      </div>
      <div className="gap-sm flex flex-col">
        <h3 className="text-heading-sm">Disabled</h3>
        <DragAndDrop state="disabled" />
      </div>
    </div>
}`,...(x=(g=r.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var h,D,v;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    state: "enabled"
  }
}`,...(v=(D=n.parameters)==null?void 0:D.docs)==null?void 0:v.source}}};var f,u,N;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    state: "hover"
  }
}`,...(N=(u=o.parameters)==null?void 0:u.docs)==null?void 0:N.source}}};var b,j,A;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    state: "drop"
  }
}`,...(A=(j=t.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};var S,y,E;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    state: "disabled"
  }
}`,...(E=(y=l.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};var I,T,H;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    return <div className="gap-lg flex flex-col">
        <div className="gap-sm flex flex-col">
          <h3 className="text-heading-sm">Interactive Drag and Drop</h3>
          <p className="text-body-sm text-text-tertiary">
            Try dragging files onto this component to see state changes.
          </p>
        </div>
        <DragAndDrop state="enabled" onDrop={e => {
        console.log("Files dropped:", e.dataTransfer.files);
      }} onDragOver={() => {
        console.log("Drag over");
      }} onDragEnter={() => {
        console.log("Drag enter");
      }} onDragLeave={() => {
        console.log("Drag leave");
      }} />
      </div>;
  }
}`,...(H=(T=d.parameters)==null?void 0:T.docs)==null?void 0:H.source}}};const w=["Playground","AllStates","Enabled","Hover","Drop","Disabled","Interactive"];export{r as AllStates,l as Disabled,t as Drop,n as Enabled,o as Hover,d as Interactive,s as Playground,w as __namedExportsOrder,q as default};
