import{j as t}from"./jsx-runtime-D_zvdyIk.js";const l={sm:"375px",md:"896px",lg:"1152px",xlg:"1408px"},x={title:"Essentials/Breakpoints"},s=()=>{const r=Object.entries(l).map(([n,e])=>({name:n,min:parseInt(e.replace("px",""),10)})).sort((n,e)=>n.min-e.min),d=r.map((n,e)=>{const i=e<r.length-1?r[e+1].min-1:1/0;return{name:n.name,min:n.min,max:i}}),m=.25;return t.jsxs("div",{className:"p-container-2xs text-text typography-body",children:[t.jsx("h3",{children:"Breakpoints"}),t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:d.map(({name:n,min:e,max:i})=>t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[t.jsx("div",{style:{height:"32px",width:`${e*m}px`,backgroundColor:"#ddd",border:"1px solid #aaa",minWidth:"80px"}}),t.jsx("code",{style:{minWidth:"60px"},children:n}),t.jsxs("span",{style:{color:"#666"},children:[e,"px – ",i===1/0?"∞":`${i}px`]})]},n))})]})};s.__docgenInfo={description:"",methods:[],displayName:"Breakpoints"};s.__docgenInfo={description:"",methods:[],displayName:"Breakpoints"};var a,o,p;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  const sortedEntries = Object.entries(breakpoints).map(([name, value]) => ({
    name,
    min: parseInt(value.replace("px", ""), 10)
  })).sort((a, b) => a.min - b.min);
  const items = sortedEntries.map((entry, index) => {
    const max = index < sortedEntries.length - 1 ? sortedEntries[index + 1].min - 1 : Infinity;
    return {
      name: entry.name,
      min: entry.min,
      max
    };
  });
  const scale = 0.25;
  return <div className="p-container-2xs text-text typography-body">
      <h3>Breakpoints</h3>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "1rem"
    }}>
        {items.map(({
        name,
        min,
        max
      }) => <div key={name} style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem"
      }}>
            <div style={{
          height: "32px",
          width: \`\${min * scale}px\`,
          backgroundColor: "#ddd",
          border: "1px solid #aaa",
          minWidth: "80px"
        }} />
            <code style={{
          minWidth: "60px"
        }}>{name}</code>
            <span style={{
          color: "#666"
        }}>
              {min}px – {max === Infinity ? "∞" : \`\${max}px\`}
            </span>
          </div>)}
      </div>
    </div>;
}`,...(p=(o=s.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};const y=["Breakpoints"];export{s as Breakpoints,y as __namedExportsOrder,x as default};
