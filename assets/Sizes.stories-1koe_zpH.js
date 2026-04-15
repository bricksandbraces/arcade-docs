import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{s as a,b as p}from"./sizes-BpUsT7VU.js";const x={"max-w-modal-lg":"704px","min-w-modal-lg":"704px","max-w-modal-md":"480px","min-w-modal-md":"480px","max-w-modal-sm":"375px","min-w-modal-sm":"375px","max-w-modal-xlg":"960px","min-w-modal-xlg":"960px"},c={title:"Essentials/Sizes"},s=()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx("h3",{children:"Sizes"}),Object.entries(a).map(([n,i])=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[e.jsx("div",{style:{background:"#ddd",width:n.startsWith("radius")?"40px":i,height:"24px",borderRadius:n.startsWith("radius")?i:"0px",minWidth:"40px"}}),e.jsx("code",{style:{minWidth:"160px"},children:n}),e.jsx("span",{children:i})]},n))]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx("h3",{children:"Borders"}),Object.entries(p).map(([n,i])=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[e.jsx("div",{style:{width:"80px",height:"24px",background:"#fff",border:`${i} solid #000`}}),e.jsx("code",{style:{minWidth:"160px"},children:n}),e.jsx("span",{children:i})]},n))]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx("h3",{children:"Modals"}),Object.entries(x).map(([n,i])=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[e.jsx("div",{style:{background:"#eee",width:i,height:"200px",minWidth:"40px"}}),e.jsx("code",{style:{minWidth:"160px"},children:n}),e.jsx("span",{children:i})]},n))]})]});s.__docgenInfo={description:"",methods:[],displayName:"Sizes"};s.__docgenInfo={description:"",methods:[],displayName:"Sizes"};var d,l,t;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  return <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "24px"
  }}>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "16px"
    }}>
        <h3>Sizes</h3>
        {Object.entries(sizes).map(([key, value]) => <div key={key} style={{
        display: "flex",
        alignItems: "center",
        gap: "12px"
      }}>
            <div style={{
          background: "#ddd",
          width: key.startsWith("radius") ? "40px" : value,
          height: "24px",
          borderRadius: key.startsWith("radius") ? value : "0px",
          minWidth: "40px"
        }} />
            <code style={{
          minWidth: "160px"
        }}>{key}</code>
            <span>{value}</span>
          </div>)}
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "16px"
    }}>
        <h3>Borders</h3>
        {Object.entries(borders).map(([key, value]) => <div key={key} style={{
        display: "flex",
        alignItems: "center",
        gap: "12px"
      }}>
            <div style={{
          width: "80px",
          height: "24px",
          background: "#fff",
          border: \`\${value} solid #000\`
        }} />
            <code style={{
          minWidth: "160px"
        }}>{key}</code>
            <span>{value}</span>
          </div>)}
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "16px"
    }}>
        <h3>Modals</h3>
        {Object.entries(modals).map(([key, value]) => <div key={key} style={{
        display: "flex",
        alignItems: "center",
        gap: "12px"
      }}>
            <div style={{
          background: "#eee",
          width: value,
          height: "200px",
          minWidth: "40px"
        }} />
            <code style={{
          minWidth: "160px"
        }}>{key}</code>
            <span>{value}</span>
          </div>)}
      </div>
    </div>;
}`,...(t=(l=s.parameters)==null?void 0:l.docs)==null?void 0:t.source}}};const m=["Sizes"];export{s as Sizes,m as __namedExportsOrder,c as default};
