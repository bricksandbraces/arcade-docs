import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Io as n,T as r,b as i,t as a,x as o,xo as s}from"./iframe-CPClxiO6.js";import{n as c,t as l}from"./figmaDesign-CO6i5n9C.js";var u,d,f,p,m,h,g,_,v;e((()=>{a(),u=t(s(),1),c(),d=n(),f={title:`Inputs & Controls/FileUpload/FileUploader`,component:i,tags:[`autodocs`,`!test`],argTypes:{variant:{control:`inline-radio`,options:o},dragDropKind:{control:`inline-radio`,options:r},disabled:{control:`boolean`},multiple:{control:`boolean`}},parameters:{design:l(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=2608-13597`),docs:{description:{component:`Drop target and file list for uploading one or more files. Use in forms or dedicated upload panels.`}}}},p=[{id:`1`,filename:`Filename.pdf`,extension:`pdf`,state:`uploaded`},{id:`2`,filename:`Filename.pdf`,extension:`pdf`,state:`uploading`,progress:60},{id:`3`,filename:`Filename.pdf`,extension:`pdf`,state:`error`,errorText:`This file could not be uploaded.`}],m={render:()=>(0,d.jsxs)(`div`,{className:(0,u.default)(`gap-2xlg flex flex-col`),children:[(0,d.jsx)(i,{variant:`button`,title:`Upload files`,description:`Max file size is 500kb. Supported file types are .png and .pdf.`,files:p,onFileRemove:()=>void 0}),(0,d.jsx)(i,{variant:`drag-drop`,dragDropKind:`inline`,title:`Upload files`,description:`Max file size is 500kb. Supported file types are .png and .pdf.`,files:p,onFileRemove:()=>void 0}),(0,d.jsx)(i,{variant:`drag-drop`,dragDropKind:`default`,title:`Upload files`,description:`Max file size is 500kb. Supported file types are .png and .pdf.`,files:p,onFileRemove:()=>void 0})]})},h={args:{variant:`drag-drop`,dragDropKind:`inline`,title:`Upload files`,description:`Max file size is 500kb. Supported file types are .png and .pdf.`,files:p}},g={args:{variant:`drag-drop`,dragDropKind:`default`,title:`Upload files`,description:`Max file size is 500kb. Supported file types are .png and .pdf.`,files:p}},_=m,m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className={cx("gap-2xlg flex flex-col")}>
      <FileUploader variant="button" title="Upload files" description="Max file size is 500kb. Supported file types are .png and .pdf." files={demoFiles} onFileRemove={() => undefined} />
      <FileUploader variant="drag-drop" dragDropKind="inline" title="Upload files" description="Max file size is 500kb. Supported file types are .png and .pdf." files={demoFiles} onFileRemove={() => undefined} />
      <FileUploader variant="drag-drop" dragDropKind="default" title="Upload files" description="Max file size is 500kb. Supported file types are .png and .pdf." files={demoFiles} onFileRemove={() => undefined} />
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "drag-drop",
    dragDropKind: "inline",
    title: "Upload files",
    description: "Max file size is 500kb. Supported file types are .png and .pdf.",
    files: demoFiles
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "drag-drop",
    dragDropKind: "default",
    title: "Upload files",
    description: "Max file size is 500kb. Supported file types are .png and .pdf.",
    files: demoFiles
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`Overview`,..._.parameters?.docs?.source}}},v=[`Overview`,`DragDropInline`,`DragDropDefault`,`Playground`]}))();export{g as DragDropDefault,h as DragDropInline,m as Overview,_ as Playground,v as __namedExportsOrder,f as default};