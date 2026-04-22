import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{b9 as b,ba as f,b8 as u,bb as c}from"./ContextMenu-ByChsCan.js";import"./index-CY-HDqYb.js";import{I}from"./IconEdit-BSD7tDn4.js";import"./index-A6zbrgSY.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";const L={component:c,title:"Components/OverflowMenu/OverflowMenuItem",argTypes:{size:{control:{type:"inline-radio"},options:u},disabled:{control:{type:"boolean"}},danger:{control:{type:"boolean"}},showDivider:{control:{type:"boolean"}},positionInList:{control:{type:"inline-radio"},options:f},layout:{control:{type:"inline-radio"},options:b}},args:{label:"Menu item",size:"medium",layout:"menu",positionInList:"middle",onClick:()=>{}}},o={},a=[{key:"default",props:{}},{key:"disabled",props:{disabled:!0}},{key:"danger",props:{danger:!0}},{key:"icon",props:{icon:I}},{key:"divider",props:{showDivider:!0}}],s={parameters:{controls:{disable:!0}},render:w=>{const y=u.toReversed();return e.jsx("div",{className:"gap-xlg grid w-full max-w-[1400px]",style:{display:"grid",gridTemplateColumns:`repeat(${a.length}, minmax(0, 1fr))`},children:y.map((n,v)=>a.map((r,g)=>{const x=`${n}-${r.key}`;return e.jsxs("div",{style:{gridColumn:`${g+1} / span 1`,gridRow:`${v+1} / span 1`},children:[w.showLabels&&e.jsxs("p",{className:"typography-body-small text-text mb-sm",children:["size=",n,", ",r.key]}),e.jsx("div",{className:"w-full max-w-[230px] min-w-[192px]",children:e.jsx(c,{label:"Menu item",size:n,onClick:()=>{},...r.props})})]},x)}))})},args:{showLabels:!1}};var t,l,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:"{}",...(i=(l=o.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var m,p,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: (args: {
    showLabels?: boolean;
  }) => {
    const rows = OverflowMenuItemSizes.toReversed();
    return <div className="gap-xlg grid w-full max-w-[1400px]" style={{
      display: "grid",
      gridTemplateColumns: \`repeat(\${overflowMenuItemOverviewColumns.length}, minmax(0, 1fr))\`
    }}>
        {rows.map((size, rowIndex) => overflowMenuItemOverviewColumns.map((col, columnIndex) => {
        const key = \`\${size}-\${col.key}\`;
        return <div key={key} style={{
          gridColumn: \`\${columnIndex + 1} / span 1\`,
          gridRow: \`\${rowIndex + 1} / span 1\`
        }}>
                {args.showLabels && <p className="typography-body-small text-text mb-sm">
                    size={size}, {col.key}
                  </p>}
                <div className="w-full max-w-[230px] min-w-[192px]">
                  <OverflowMenuItem label="Menu item" size={size} onClick={() => {}} {...col.props} />
                </div>
              </div>;
      }))}
      </div>;
  },
  args: {
    showLabels: false
  }
}`,...(d=(p=s.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const j=["Playground","Overview"];export{s as Overview,o as Playground,j as __namedExportsOrder,L as default};
