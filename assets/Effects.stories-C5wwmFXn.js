import{j as r}from"./jsx-runtime-D_zvdyIk.js";const l=[{name:"Focus",layers:[{type:"drop-shadow",color:"var(--color-border-focus-03)",position:{x:0,y:0},blur:0,spread:1,blendMode:"normal"},{type:"drop-shadow",color:"var(--color-border-focus-02)",position:{x:0,y:0},blur:0,spread:3,blendMode:"normal"},{type:"drop-shadow",color:"var(--color-border-focus-01)",position:{x:0,y:0},blur:0,spread:6,blendMode:"normal"}]},{name:"Shadow",layers:[{type:"drop-shadow",color:"var(--color-shadow)",position:{x:0,y:4},blur:8,spread:0,blendMode:"normal"}]},{name:"Subtle",layers:[{type:"drop-shadow",color:"var(--color-shadow)",position:{x:0,y:2},blur:4,spread:0,blendMode:"normal"}]},{name:"Subtlest",layers:[{type:"drop-shadow",color:"var(--color-shadow)",position:{x:0,y:.5},blur:2,spread:0,blendMode:"normal"}]}],i={title:"Essentials/Effects",decorators:[o=>r.jsx("div",{className:"p-xlg",children:r.jsx(o,{})})]},s=()=>r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:l.map(o=>{const t=o.layers.filter(e=>e.type==="drop-shadow").map(e=>`${e.position.x}px ${e.position.y}px ${e.blur}px ${e.spread}px ${e.color}`).join(", ");return r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[r.jsx("div",{style:{width:"120px",height:"48px",background:"#fff",border:"1px solid #eee",boxShadow:t}}),r.jsxs("code",{style:{minWidth:"160px"},children:["--shadow-",o.name.toLowerCase()==="shadow"?"default":o.name.toLowerCase()]})]},o.name)})});s.__docgenInfo={description:"",methods:[],displayName:"Effects"};s.__docgenInfo={description:"",methods:[],displayName:"Effects"};var a,d,n;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  return <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "24px"
  }}>
      {effectStyles.map(effect => {
      const boxShadows = effect.layers.filter(layer => layer.type === "drop-shadow").map(layer => \`\${layer.position.x}px \${layer.position.y}px \${layer.blur}px \${layer.spread}px \${layer.color}\`).join(", ");
      return <div key={effect.name} style={{
        display: "flex",
        alignItems: "center",
        gap: "12px"
      }}>
            <div style={{
          width: "120px",
          height: "48px",
          background: "#fff",
          border: "1px solid #eee",
          boxShadow: boxShadows
        }} />
            <code style={{
          minWidth: "160px"
        }}>
              --shadow-
              {effect.name.toLowerCase() === "shadow" ? "default" : effect.name.toLowerCase()}
            </code>
          </div>;
    })}
    </div>;
}`,...(n=(d=s.parameters)==null?void 0:d.docs)==null?void 0:n.source}}};const c=["Effects"];export{s as Effects,c as __namedExportsOrder,i as default};
