import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{T as n,b as r,ea as i,t as a,x as o,zi as s}from"./iframe-Ds1wyhK1.js";var c,l,u,d,f,p,m,h;e((()=>{a(),c=t(s(),1),l=i(),u={title:`Components/FileUpload/FileUploader`,component:r,tags:[`autodocs`,`!test`],argTypes:{variant:{control:`inline-radio`,options:o},dragDropKind:{control:`inline-radio`,options:n},disabled:{control:`boolean`},multiple:{control:`boolean`}},parameters:{docs:{description:{component:`Drop target and file list for uploading one or more files. Use in forms or dedicated upload panels.`}}}},d=[{id:`1`,filename:`Filename.pdf`,extension:`pdf`,state:`uploaded`},{id:`2`,filename:`Filename.pdf`,extension:`pdf`,state:`uploading`,progress:60},{id:`3`,filename:`Filename.pdf`,extension:`pdf`,state:`error`,errorText:`This file could not be uploaded.`}],f={render:()=>(0,l.jsxs)(`div`,{className:(0,c.default)(`gap-2xlg flex flex-col`),children:[(0,l.jsx)(r,{variant:`button`,title:`Upload files`,description:`Max file size is 500kb. Supported file types are .png and .pdf.`,files:d,onFileRemove:()=>void 0}),(0,l.jsx)(r,{variant:`drag-drop`,dragDropKind:`inline`,title:`Upload files`,description:`Max file size is 500kb. Supported file types are .png and .pdf.`,files:d,onFileRemove:()=>void 0}),(0,l.jsx)(r,{variant:`drag-drop`,dragDropKind:`default`,title:`Upload files`,description:`Max file size is 500kb. Supported file types are .png and .pdf.`,files:d,onFileRemove:()=>void 0})]})},p={args:{variant:`drag-drop`,dragDropKind:`inline`,title:`Upload files`,description:`Max file size is 500kb. Supported file types are .png and .pdf.`,files:d}},m={args:{variant:`drag-drop`,dragDropKind:`default`,title:`Upload files`,description:`Max file size is 500kb. Supported file types are .png and .pdf.`,files:d}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div className={cx("gap-2xlg flex flex-col")}>
      <FileUploader variant="button" title="Upload files" description="Max file size is 500kb. Supported file types are .png and .pdf." files={demoFiles} onFileRemove={() => undefined} />
      <FileUploader variant="drag-drop" dragDropKind="inline" title="Upload files" description="Max file size is 500kb. Supported file types are .png and .pdf." files={demoFiles} onFileRemove={() => undefined} />
      <FileUploader variant="drag-drop" dragDropKind="default" title="Upload files" description="Max file size is 500kb. Supported file types are .png and .pdf." files={demoFiles} onFileRemove={() => undefined} />
    </div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "drag-drop",
    dragDropKind: "inline",
    title: "Upload files",
    description: "Max file size is 500kb. Supported file types are .png and .pdf.",
    files: demoFiles
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "drag-drop",
    dragDropKind: "default",
    title: "Upload files",
    description: "Max file size is 500kb. Supported file types are .png and .pdf.",
    files: demoFiles
  }
}`,...m.parameters?.docs?.source}}},h=[`Overview`,`DragDropInline`,`DragDropDefault`]}))();export{m as DragDropDefault,p as DragDropInline,f as Overview,h as __namedExportsOrder,u as default};