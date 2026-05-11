import{n as e}from"./chunk-jRWAZmH_.js";import{Kr as t,dr as n,ea as r,er as i,nr as a,rr as o,t as s,tr as c}from"./iframe-Ds1wyhK1.js";var l,u,d,f,p,m;e((()=>{s(),n(),l=r(),u={component:i,title:`Components/OverflowMenu/OverflowMenuItem`,argTypes:{size:{control:{type:`inline-radio`},options:o},disabled:{control:{type:`boolean`}},danger:{control:{type:`boolean`}},showDivider:{control:{type:`boolean`}},positionInList:{control:{type:`inline-radio`},options:a},layout:{control:{type:`inline-radio`},options:c}},args:{label:`Menu item`,size:`medium`,layout:`menu`,positionInList:`middle`,onClick:()=>{}},decorators:[e=>(0,l.jsx)(`div`,{role:`menu`,children:(0,l.jsx)(e,{})})]},d={},f=[{key:`default`,props:{}},{key:`disabled`,props:{disabled:!0}},{key:`danger`,props:{danger:!0}},{key:`icon`,props:{icon:t}},{key:`divider`,props:{showDivider:!0}}],p={parameters:{controls:{disable:!0}},render:e=>{let t=o.toReversed();return(0,l.jsx)(`div`,{className:`gap-xlg grid w-full max-w-[1400px]`,style:{display:`grid`,gridTemplateColumns:`repeat(${f.length}, minmax(0, 1fr))`},children:t.map((t,n)=>f.map((r,a)=>{let o=`${t}-${r.key}`;return(0,l.jsxs)(`div`,{style:{gridColumn:`${a+1} / span 1`,gridRow:`${n+1} / span 1`},children:[e.showLabels&&(0,l.jsxs)(`p`,{className:`typography-body-small text-text mb-sm`,children:[`size=`,t,`, `,r.key]}),(0,l.jsx)(`div`,{className:`w-full max-w-[230px] min-w-[192px]`,children:(0,l.jsx)(i,{label:`Menu item`,size:t,onClick:()=>{},...r.props})})]},o)}))})},args:{showLabels:!1}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{}`,...d.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m=[`Playground`,`Overview`]}))();export{p as Overview,d as Playground,m as __namedExportsOrder,u as default};