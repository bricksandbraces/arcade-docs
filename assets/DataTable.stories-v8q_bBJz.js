import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{F as W,G as u,B as R,h as g}from"./ContextMenuList-BhPzpHNE.js";import"./index-CY-HDqYb.js";import"./index-A6zbrgSY.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";import"./index-ZRCHFLd-.js";import"./sizes-BpUsT7VU.js";import"./colors-CoOIoG7W.js";const H=a=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",className:a.className,children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 12h.01M21 12h.01M3 12h.01"})}),U=a=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",className:a.className,children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"})}),O=a=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",className:a.className,children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})}),Y={title:"WIP Components/DataTable/DataTable",component:u,argTypes:{size:{control:"inline-radio",options:W},showFooter:{control:"boolean"},loading:{control:"boolean"},currentPage:{control:"number"},totalPages:{control:"number"},rowsPerPage:{control:"number"}}},s=[{header:"Name",key:"name",sortable:!0},{header:"Email",key:"email",sortable:!0},{header:"Status",key:"status",renderCell:a=>e.jsx(R,{color:a==="active"?"lime":"gray",children:a})},{header:"Role",key:"role"},{header:"Actions",key:"actions",actions:!0,renderCell:()=>e.jsxs("div",{className:"gap-xs flex",children:[e.jsx(g,{kind:"tertiary",size:"small",IconLeft:U,onClick:()=>console.log("Edit clicked"),label:"Edit"}),e.jsx(g,{kind:"tertiary",size:"small",IconLeft:O,onClick:()=>console.log("Delete clicked"),label:"Delete"})]})}],t=[{id:1,name:"John Doe",email:"john@example.com",status:"active",role:"Admin"},{id:2,name:"Jane Smith",email:"jane@example.com",status:"inactive",role:"User"},{id:3,name:"Bob Johnson",email:"bob@example.com",status:"active",role:"Moderator"},{id:4,name:"Alice Brown",email:"alice@example.com",status:"active",role:"User"},{id:5,name:"Charlie Davis",email:"charlie@example.com",status:"inactive",role:"Admin"}],n={args:{title:"User Management",subtitle:"Manage your team members and their permissions",columns:s,data:t,size:"medium",showFooter:!0,currentPage:1,totalPages:3,rowsPerPage:10,rowsPerPageOptions:[5,10,20,50],onPageChange:a=>console.log("Page changed to:",a),onRowsPerPageChange:a=>console.log("Rows per page changed to:",a)}},o={render:()=>e.jsxs("div",{className:"space-y-lg",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"mb-md text-lg font-medium",children:"Large"}),e.jsx(u,{title:"Large DataTable",columns:s.slice(0,3),data:t.slice(0,3),size:"large"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"mb-md text-lg font-medium",children:"Medium"}),e.jsx(u,{title:"Medium DataTable",columns:s.slice(0,3),data:t.slice(0,3),size:"medium"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"mb-md text-lg font-medium",children:"Small"}),e.jsx(u,{title:"Small DataTable",columns:s.slice(0,3),data:t.slice(0,3),size:"small"})]})]})},r={args:{title:"Users with Pagination",columns:s,data:t,size:"medium",showFooter:!0,currentPage:2,totalPages:5,rowsPerPage:3,rowsPerPageOptions:[3,5,10],onPageChange:a=>console.log("Page changed to:",a),onRowsPerPageChange:a=>console.log("Rows per page changed to:",a)}},i={args:{title:"Loading Data",subtitle:"Please wait while we fetch your data",columns:s,data:[],size:"medium",loading:!0,showFooter:!0}},l={args:{title:"No Users Found",subtitle:"There are no users to display",columns:s,data:[],size:"medium",emptyMessage:"No users found. Try adjusting your search criteria.",showFooter:!0}},m={args:{columns:[{header:"Product",key:"product"},{header:"Price",key:"price"},{header:"Category",key:"category"}],data:[{product:"Laptop",price:"$999",category:"Electronics"},{product:"Desk Chair",price:"$299",category:"Furniture"},{product:"Coffee Mug",price:"$15",category:"Kitchen"}],size:"medium"}},d={args:{title:"Projects",columns:[{header:"Project Name",key:"name",sortable:!0},{header:"Status",key:"status",headerActions:e.jsx(g,{kind:"tertiary",size:"small",IconLeft:H,onClick:()=>console.log("Header action clicked"),label:"Options"}),renderCell:a=>e.jsx(R,{color:a==="completed"?"lime":a==="in-progress"?"blue":"gray",children:a})},{header:"Due Date",key:"dueDate",sortable:!0}],data:[{name:"Website Redesign",status:"in-progress",dueDate:"2024-12-01"},{name:"Mobile App",status:"completed",dueDate:"2024-11-15"},{name:"API Integration",status:"pending",dueDate:"2024-12-15"}],size:"medium",showFooter:!0}},c={args:{title:"File Explorer",columns:[{header:"Name",key:"name",width:"40%"},{header:"Size",key:"size",width:"20%"},{header:"Type",key:"type",width:"20%"},{header:"Modified",key:"modified",width:"20%"}],data:[{name:"document.pdf",size:"2.4 MB",type:"PDF",modified:"2 hours ago"},{name:"image.png",size:"856 KB",type:"Image",modified:"1 day ago"},{name:"spreadsheet.xlsx",size:"1.2 MB",type:"Excel",modified:"3 days ago"}],size:"medium"}};var p,h,y;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    title: "User Management",
    subtitle: "Manage your team members and their permissions",
    columns: sampleColumns,
    data: sampleData,
    size: "medium",
    showFooter: true,
    currentPage: 1,
    totalPages: 3,
    rowsPerPage: 10,
    rowsPerPageOptions: [5, 10, 20, 50],
    onPageChange: (page: number) => console.log("Page changed to:", page),
    onRowsPerPageChange: (rowsPerPage: number) => console.log("Rows per page changed to:", rowsPerPage)
  }
}`,...(y=(h=n.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var P,w,b;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div className="space-y-lg">
      <div>
        <h3 className="mb-md text-lg font-medium">Large</h3>
        <DataTable title="Large DataTable" columns={sampleColumns.slice(0, 3)} data={sampleData.slice(0, 3)} size="large" />
      </div>
      <div>
        <h3 className="mb-md text-lg font-medium">Medium</h3>
        <DataTable title="Medium DataTable" columns={sampleColumns.slice(0, 3)} data={sampleData.slice(0, 3)} size="medium" />
      </div>
      <div>
        <h3 className="mb-md text-lg font-medium">Small</h3>
        <DataTable title="Small DataTable" columns={sampleColumns.slice(0, 3)} data={sampleData.slice(0, 3)} size="small" />
      </div>
    </div>
}`,...(b=(w=o.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var x,k,z;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    title: "Users with Pagination",
    columns: sampleColumns,
    data: sampleData,
    size: "medium",
    showFooter: true,
    currentPage: 2,
    totalPages: 5,
    rowsPerPage: 3,
    rowsPerPageOptions: [3, 5, 10],
    onPageChange: (page: number) => console.log("Page changed to:", page),
    onRowsPerPageChange: (rowsPerPage: number) => console.log("Rows per page changed to:", rowsPerPage)
  }
}`,...(z=(k=r.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var D,C,f;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    title: "Loading Data",
    subtitle: "Please wait while we fetch your data",
    columns: sampleColumns,
    data: [],
    size: "medium",
    loading: true,
    showFooter: true
  }
}`,...(f=(C=i.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};var v,j,M;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    title: "No Users Found",
    subtitle: "There are no users to display",
    columns: sampleColumns,
    data: [],
    size: "medium",
    emptyMessage: "No users found. Try adjusting your search criteria.",
    showFooter: true
  }
}`,...(M=(j=l.parameters)==null?void 0:j.docs)==null?void 0:M.source}}};var S,N,T;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    columns: [{
      header: "Product",
      key: "product"
    }, {
      header: "Price",
      key: "price"
    }, {
      header: "Category",
      key: "category"
    }],
    data: [{
      product: "Laptop",
      price: "$999",
      category: "Electronics"
    }, {
      product: "Desk Chair",
      price: "$299",
      category: "Furniture"
    }, {
      product: "Coffee Mug",
      price: "$15",
      category: "Kitchen"
    }],
    size: "medium"
  }
}`,...(T=(N=m.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var L,F,B;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    title: "Projects",
    columns: [{
      header: "Project Name",
      key: "name",
      sortable: true
    }, {
      header: "Status",
      key: "status",
      headerActions: <Button kind="tertiary" size="small" IconLeft={MoreHorizontalIcon} onClick={() => console.log("Header action clicked")} label="Options" />,
      renderCell: (value: string) => <Badge color={value === "completed" ? "lime" : value === "in-progress" ? "blue" : "gray"}>
            {value}
          </Badge>
    }, {
      header: "Due Date",
      key: "dueDate",
      sortable: true
    }],
    data: [{
      name: "Website Redesign",
      status: "in-progress",
      dueDate: "2024-12-01"
    }, {
      name: "Mobile App",
      status: "completed",
      dueDate: "2024-11-15"
    }, {
      name: "API Integration",
      status: "pending",
      dueDate: "2024-12-15"
    }],
    size: "medium",
    showFooter: true
  }
}`,...(B=(F=d.parameters)==null?void 0:F.docs)==null?void 0:B.source}}};var A,I,E;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    title: "File Explorer",
    columns: [{
      header: "Name",
      key: "name",
      width: "40%"
    }, {
      header: "Size",
      key: "size",
      width: "20%"
    }, {
      header: "Type",
      key: "type",
      width: "20%"
    }, {
      header: "Modified",
      key: "modified",
      width: "20%"
    }],
    data: [{
      name: "document.pdf",
      size: "2.4 MB",
      type: "PDF",
      modified: "2 hours ago"
    }, {
      name: "image.png",
      size: "856 KB",
      type: "Image",
      modified: "1 day ago"
    }, {
      name: "spreadsheet.xlsx",
      size: "1.2 MB",
      type: "Excel",
      modified: "3 days ago"
    }],
    size: "medium"
  }
}`,...(E=(I=c.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};const Z=["Playground","AllSizes","WithPagination","LoadingState","EmptyState","SimpleTable","WithHeaderActions","CustomColumnWidths"];export{o as AllSizes,c as CustomColumnWidths,l as EmptyState,i as LoadingState,n as Playground,m as SimpleTable,d as WithHeaderActions,r as WithPagination,Z as __namedExportsOrder,Y as default};
