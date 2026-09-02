import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{T as n,b as r,io as i,t as a,x as o,yo as s}from"./iframe-BXRL_JkN.js";var c,l,u,d,f,p,m,h,g;e((()=>{a(),c=t(i(),1),l=s(),u={title:`Inputs & Controls/FileUpload/FileUploader`,component:r,tags:[`autodocs`,`!test`],argTypes:{variant:{control:`inline-radio`,options:o},dragDropKind:{control:`inline-radio`,options:n},disabled:{control:`boolean`},multiple:{control:`boolean`}},parameters:{docs:{description:{component:`Drop target and file list for uploading one or more files. Use in forms or dedicated upload panels.`}}}},d=[{id:`1`,filename:`Filename.pdf`,extension:`pdf`,state:`uploaded`},{id:`2`,filename:`Filename.pdf`,extension:`pdf`,state:`uploading`,progress:60},{id:`3`,filename:`Filename.pdf`,extension:`pdf`,state:`error`,errorText:`This file could not be uploaded.`}],f={render:()=>(0,l.jsxs)(`div`,{className:(0,c.default)(`gap-2xlg flex flex-col`),children:[(0,l.jsx)(r,{variant:`button`,title:`Upload files`,description:`Max file size is 500kb. Supported file types are .png and .pdf.`,files:d,onFileRemove:()=>void 0}),(0,l.jsx)(r,{variant:`drag-drop`,dragDropKind:`inline`,title:`Upload files`,description:`Max file size is 500kb. Supported file types are .png and .pdf.`,files:d,onFileRemove:()=>void 0}),(0,l.jsx)(r,{variant:`drag-drop`,dragDropKind:`default`,title:`Upload files`,description:`Max file size is 500kb. Supported file types are .png and .pdf.`,files:d,onFileRemove:()=>void 0})]})},p={args:{variant:`drag-drop`,dragDropKind:`inline`,title:`Upload files`,description:`Max file size is 500kb. Supported file types are .png and .pdf.`,files:d}},m={args:{variant:`drag-drop`,dragDropKind:`default`,title:`Upload files`,description:`Max file size is 500kb. Supported file types are .png and .pdf.`,files:d}},h=f,f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`Overview`,...h.parameters?.docs?.source}}},g=[`Overview`,`DragDropInline`,`DragDropDefault`,`Playground`]}))();export{m as DragDropDefault,p as DragDropInline,f as Overview,h as Playground,g as __namedExportsOrder,u as default};