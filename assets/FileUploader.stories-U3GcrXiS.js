import{am as m,an as g}from"./ContextMenuList-BM0Gkwdy.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-CY-HDqYb.js";import"./index-A6zbrgSY.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";import"./index-ZRCHFLd-.js";import"./sizes-BpUsT7VU.js";import"./colors-CoOIoG7W.js";const y={title:"WIP Components/FileUpload/FileUploader",component:g,argTypes:{variant:{control:"inline-radio",options:m}}},o={args:{variant:"default",title:"Upload files",description:"Max file size is 500kb. Supported file types are .png and .pdf.",buttonLabel:"Choose files",onFileSelect:e=>{console.log("Files selected:",e)},onFileRemove:e=>{console.log("File removed:",e)},onDrop:e=>{console.log("Files dropped:",e.dataTransfer.files)},files:[{id:"1",filename:"document.pdf",fileSize:"2.1 MB",description:"Important document",extension:"pdf",state:"uploaded"},{id:"2",filename:"image.png",fileSize:"456 KB",extension:"png",state:"loading"}]}},n={args:{variant:"default",onFileSelect:e=>{console.log("Files selected:",e)}}},l={args:{variant:"drag-drop",onFileSelect:e=>{console.log("Files selected:",e)},onDrop:e=>{console.log("Files dropped:",e.dataTransfer.files)}}};var s,a,i;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
    }, {
      id: "2",
      filename: "image.png",
      fileSize: "456 KB",
      extension: "png",
      state: "loading"
    }]
  }
}`,...(i=(a=o.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var r,t,d;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    variant: "default",
    onFileSelect: files => {
      console.log("Files selected:", files);
    }
  }
}`,...(d=(t=n.parameters)==null?void 0:t.docs)==null?void 0:d.source}}};var p,c,f;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: "drag-drop",
    onFileSelect: files => {
      console.log("Files selected:", files);
    },
    onDrop: e => {
      console.log("Files dropped:", e.dataTransfer.files);
    }
  }
}`,...(f=(c=l.parameters)==null?void 0:c.docs)==null?void 0:f.source}}};const I=["Playground","Default","DragDrop"];export{n as Default,l as DragDrop,o as Playground,I as __namedExportsOrder,y as default};
