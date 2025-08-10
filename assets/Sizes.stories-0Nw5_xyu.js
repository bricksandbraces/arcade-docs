import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{b as l}from"./borders-N_bRvfGw.js";const a={"max-w-modal-lg":"704px","min-w-modal-lg":"704px","max-w-modal-md":"480px","min-w-modal-md":"480px","max-w-modal-sm":"375px","min-w-modal-sm":"375px","max-w-modal-xlg":"960px","min-w-modal-xlg":"960px"},t={"container-4xs":"4px","container-3xs":"8px","container-2xs":"16px","container-xs":"24px","container-sm":"32px","container-md":"40px","container-lg":"48px","container-xlg":"64px","radius-xs":"2px","radius-sm":"4px","radius-md":"8px","radius-lg":"16px","radius-xlg":"32px","radius-2xlg":"48px","radius-max":"1000px","spacing-2xs":"2px","spacing-xs":"4px","spacing-sm":"8px","spacing-md":"12px","spacing-lg":"16px","spacing-xlg":"24px","spacing-2xlg":"32px","spacing-3xlg":"40px","spacing-4xlg":"64px",0:"0px"},o={title:"Essentials/Sizes"},i=()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx("h3",{children:"Sizes"}),Object.entries(t).map(([n,s])=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[e.jsx("div",{style:{background:"#ddd",width:n.startsWith("radius")?"40px":s,height:"24px",borderRadius:n.startsWith("radius")?s:"0px",minWidth:"40px"}}),e.jsx("code",{style:{minWidth:"160px"},children:n}),e.jsx("span",{children:s})]},n))]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx("h3",{children:"Borders"}),Object.entries(l).map(([n,s])=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[e.jsx("div",{style:{width:"80px",height:"24px",background:"#fff",border:`${s} solid #000`}}),e.jsx("code",{style:{minWidth:"160px"},children:n}),e.jsx("span",{children:s})]},n))]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx("h3",{children:"Modals"}),Object.entries(a).map(([n,s])=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[e.jsx("div",{style:{background:"#eee",width:s,height:"200px",minWidth:"40px"}}),e.jsx("code",{style:{minWidth:"160px"},children:n}),e.jsx("span",{children:s})]},n))]})]});i.__docgenInfo={description:"",methods:[],displayName:"Sizes"};i.__docgenInfo={description:"",methods:[],displayName:"Sizes"};var d,x,p;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
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
}`,...(p=(x=i.parameters)==null?void 0:x.docs)==null?void 0:p.source}}};const m=["Sizes"];export{i as Sizes,m as __namedExportsOrder,o as default};
