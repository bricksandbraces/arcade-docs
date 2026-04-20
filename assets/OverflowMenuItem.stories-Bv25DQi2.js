import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{bc as b,bd as f,bb as u,be as c}from"./ContextMenuList-C-aM8myr.js";import"./index-CY-HDqYb.js";import{I}from"./IconEdit-DrlvRgaI.js";import"./index-A6zbrgSY.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";import"./index-ZRCHFLd-.js";import"./sizes-BpUsT7VU.js";import"./colors-CoOIoG7W.js";const R={component:c,title:"Components/OverflowMenu/OverflowMenuItem",argTypes:{size:{control:{type:"inline-radio"},options:u},disabled:{control:{type:"boolean"}},danger:{control:{type:"boolean"}},showDivider:{control:{type:"boolean"}},positionInList:{control:{type:"inline-radio"},options:f},layout:{control:{type:"inline-radio"},options:b}},args:{label:"Menu item",size:"medium",layout:"menu",positionInList:"middle",onClick:()=>{}}},o={},t=[{key:"default",props:{}},{key:"disabled",props:{disabled:!0}},{key:"danger",props:{danger:!0}},{key:"icon",props:{icon:I}},{key:"divider",props:{showDivider:!0}}],r={parameters:{controls:{disable:!0}},render:w=>{const y=u.toReversed();return e.jsx("div",{className:"gap-xlg grid w-full max-w-[1400px]",style:{display:"grid",gridTemplateColumns:`repeat(${t.length}, minmax(0, 1fr))`},children:y.map((s,v)=>t.map((n,g)=>{const x=`${s}-${n.key}`;return e.jsxs("div",{style:{gridColumn:`${g+1} / span 1`,gridRow:`${v+1} / span 1`},children:[w.showLabels&&e.jsxs("p",{className:"typography-body-small text-text mb-sm",children:["size=",s,", ",n.key]}),e.jsx("div",{className:"w-full max-w-[230px] min-w-[192px]",children:e.jsx(c,{label:"Menu item",size:s,onClick:()=>{},...n.props})})]},x)}))})},args:{showLabels:!1}};var a,l,i;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(i=(l=o.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var m,p,d;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const S=["Playground","Overview"];export{r as Overview,o as Playground,S as __namedExportsOrder,R as default};
