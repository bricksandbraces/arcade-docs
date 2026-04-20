import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{ad as I,ae as M,af as o}from"./ContextMenuList-l6zkpsAq.js";import"./index-CY-HDqYb.js";import"./index-A6zbrgSY.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";import"./index-ZRCHFLd-.js";import"./sizes-BpUsT7VU.js";import"./colors-CoOIoG7W.js";const E={title:"WIP Components/FileUpload/FileItem",component:o,parameters:{layout:"centered"},argTypes:{size:{control:"inline-radio",options:M},state:{control:"inline-radio",options:I},extension:{control:"select",options:["pdf","png","jpg","json","csv","svg"]}}},n={args:{size:"large",state:"uploaded",filename:"Document.pdf",fileSize:"12 MB",description:"Important document",extension:"pdf",onRemove:()=>console.log("Remove file")}},i={args:{state:"uploaded",filename:"Report.pdf",fileSize:"2.5 MB",description:"Monthly report",extension:"pdf",onRemove:()=>console.log("Remove file")}},s={args:{state:"loading",filename:"Uploading.jpg",fileSize:"5.2 MB",description:"Image file",extension:"jpg"}},t={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(o,{filename:"Document.pdf",fileSize:"2.1 MB",description:"PDF document",extension:"pdf",onRemove:()=>console.log("Remove PDF")}),e.jsx(o,{filename:"Image.png",fileSize:"800 KB",description:"PNG image",extension:"png",onRemove:()=>console.log("Remove PNG")}),e.jsx(o,{filename:"Photo.jpg",fileSize:"1.2 MB",description:"JPEG photo",extension:"jpg",onRemove:()=>console.log("Remove JPG")}),e.jsx(o,{filename:"Data.json",fileSize:"45 KB",description:"JSON data",extension:"json",onRemove:()=>console.log("Remove JSON")}),e.jsx(o,{filename:"Spreadsheet.csv",fileSize:"120 KB",description:"CSV spreadsheet",extension:"csv",onRemove:()=>console.log("Remove CSV")}),e.jsx(o,{filename:"Icon.svg",fileSize:"12 KB",description:"SVG icon",extension:"svg",onRemove:()=>console.log("Remove SVG")})]})},l={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(o,{state:"uploaded",filename:"Completed.pdf",fileSize:"3.2 MB",description:"Upload completed",extension:"pdf",onRemove:()=>console.log("Remove file")}),e.jsx(o,{state:"loading",filename:"Uploading.png",fileSize:"1.8 MB",description:"Currently uploading",extension:"png"})]})},a={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(o,{filename:"Very_Long_Filename_That_Might_Overflow_The_Container.pdf",fileSize:"15.7 MB",description:"Large document with very long name",extension:"pdf",onRemove:()=>console.log("Remove file")}),e.jsx(o,{state:"loading",filename:"Another_Extremely_Long_Filename_For_Testing_Purposes.jpg",fileSize:"8.3 MB",description:"Image with extensive description text",extension:"jpg"})]})};var r,m,p;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    size: "large",
    state: "uploaded",
    filename: "Document.pdf",
    fileSize: "12 MB",
    description: "Important document",
    extension: "pdf",
    onRemove: () => console.log("Remove file")
  }
}`,...(p=(m=n.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var d,c,g;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    state: "uploaded",
    filename: "Report.pdf",
    fileSize: "2.5 MB",
    description: "Monthly report",
    extension: "pdf",
    onRemove: () => console.log("Remove file")
  }
}`,...(g=(c=i.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var f,v,x;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    state: "loading",
    filename: "Uploading.jpg",
    fileSize: "5.2 MB",
    description: "Image file",
    extension: "jpg"
  }
}`,...(x=(v=s.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var S,u,R;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <FileItem filename="Document.pdf" fileSize="2.1 MB" description="PDF document" extension="pdf" onRemove={() => console.log("Remove PDF")} />
      <FileItem filename="Image.png" fileSize="800 KB" description="PNG image" extension="png" onRemove={() => console.log("Remove PNG")} />
      <FileItem filename="Photo.jpg" fileSize="1.2 MB" description="JPEG photo" extension="jpg" onRemove={() => console.log("Remove JPG")} />
      <FileItem filename="Data.json" fileSize="45 KB" description="JSON data" extension="json" onRemove={() => console.log("Remove JSON")} />
      <FileItem filename="Spreadsheet.csv" fileSize="120 KB" description="CSV spreadsheet" extension="csv" onRemove={() => console.log("Remove CSV")} />
      <FileItem filename="Icon.svg" fileSize="12 KB" description="SVG icon" extension="svg" onRemove={() => console.log("Remove SVG")} />
    </div>
}`,...(R=(u=t.parameters)==null?void 0:u.docs)==null?void 0:R.source}}};var j,z,_;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <FileItem state="uploaded" filename="Completed.pdf" fileSize="3.2 MB" description="Upload completed" extension="pdf" onRemove={() => console.log("Remove file")} />
      <FileItem state="loading" filename="Uploading.png" fileSize="1.8 MB" description="Currently uploading" extension="png" />
    </div>
}`,...(_=(z=l.parameters)==null?void 0:z.docs)==null?void 0:_.source}}};var F,B,h;a.parameters={...a.parameters,docs:{...(F=a.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <FileItem filename="Very_Long_Filename_That_Might_Overflow_The_Container.pdf" fileSize="15.7 MB" description="Large document with very long name" extension="pdf" onRemove={() => console.log("Remove file")} />
      <FileItem state="loading" filename="Another_Extremely_Long_Filename_For_Testing_Purposes.jpg" fileSize="8.3 MB" description="Image with extensive description text" extension="jpg" />
    </div>
}`,...(h=(B=a.parameters)==null?void 0:B.docs)==null?void 0:h.source}}};const J=["Playground","Uploaded","Loading","DifferentExtensions","AllStates","LongFilenames"];export{l as AllStates,t as DifferentExtensions,s as Loading,a as LongFilenames,n as Playground,i as Uploaded,J as __namedExportsOrder,E as default};
