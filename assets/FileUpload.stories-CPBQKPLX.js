import{ag as t,ah as s}from"./ContextMenuList-DS-QXGCp.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-CY-HDqYb.js";import"./index-A6zbrgSY.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";import"./index-ZRCHFLd-.js";import"./sizes-BpUsT7VU.js";import"./colors-CoOIoG7W.js";const F={title:"WIP Components/FileUpload/FileUpload",component:s,argTypes:{variant:{control:"inline-radio",options:t}}},o={args:{variant:"default",title:"Upload files",description:"Max file size is 500kb. Supported file types are .png and .pdf.",buttonLabel:"Choose files",onFileSelect:e=>{console.log("Files selected:",e)},onFileRemove:e=>{console.log("File removed:",e)},onDrop:e=>{console.log("Files dropped:",e.dataTransfer.files)},files:[{id:"1",filename:"document.pdf",fileSize:"2.1 MB",description:"Important document",extension:"pdf",state:"uploaded"}]}};var n,i,l;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    variant: "default",
    title: "Upload files",
    description: "Max file size is 500kb. Supported file types are .png and .pdf.",
    buttonLabel: "Choose files",
    onFileSelect: files => {
      console.log("Files selected:", files);
    },
    onFileRemove: fileId => {
      console.log("File removed:", fileId);
    },
    onDrop: e => {
      console.log("Files dropped:", e.dataTransfer.files);
    },
    files: [{
      id: "1",
      filename: "document.pdf",
      fileSize: "2.1 MB",
      description: "Important document",
      extension: "pdf",
      state: "uploaded"
    }]
  }
}`,...(l=(i=o.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const v=["Playground"];export{o as Playground,v as __namedExportsOrder,F as default};
