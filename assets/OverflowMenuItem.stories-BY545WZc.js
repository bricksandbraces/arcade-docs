import{n as e}from"./chunk-jRWAZmH_.js";import{$i as t,Os as n,_a as r,co as i,ea as a,na as o,t as s,ta as c}from"./iframe-BrfqoxEp.js";import{n as l,t as u}from"./figmaDesign-DDiUnvXT.js";var d,f,p,m,h,g;e((()=>{s(),r(),l(),d=n(),f={parameters:{design:u(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=2331-13861`)},component:t,tags:[`autodocs`],title:`Overlays & Menus/OverflowMenu/OverflowMenuItem`,argTypes:{size:{control:{type:`inline-radio`},options:o},disabled:{control:{type:`boolean`}},danger:{control:{type:`boolean`}},showDivider:{control:{type:`boolean`}},positionInList:{control:{type:`inline-radio`},options:c},layout:{control:{type:`inline-radio`},options:a}},args:{label:`Menu item`,size:`medium`,layout:`menu`,positionInList:`middle`,onClick:()=>{}},decorators:[e=>(0,d.jsx)(`div`,{role:`menu`,children:(0,d.jsx)(e,{})})]},p={},m=[{key:`default`,props:{}},{key:`disabled`,props:{disabled:!0}},{key:`danger`,props:{danger:!0}},{key:`icon`,props:{icon:i}},{key:`divider`,props:{showDivider:!0}}],h={parameters:{controls:{disable:!0}},render:e=>{let n=o.toReversed();return(0,d.jsx)(`div`,{className:`gap-xlg grid w-full max-w-[1400px]`,style:{display:`grid`,gridTemplateColumns:`repeat(${m.length}, minmax(0, 1fr))`},children:n.map((n,r)=>m.map((i,a)=>{let o=`${n}-${i.key}`;return(0,d.jsxs)(`div`,{style:{gridColumn:`${a+1} / span 1`,gridRow:`${r+1} / span 1`},children:[e.showLabels&&(0,d.jsxs)(`p`,{className:`typography-body-small text-text mb-sm`,children:[`size=`,n,`, `,i.key]}),(0,d.jsx)(`div`,{className:`w-full max-w-[230px] min-w-[192px]`,children:(0,d.jsx)(t,{label:`Menu item`,size:n,onClick:()=>{},...i.props})})]},o)}))})},args:{showLabels:!1}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{}`,...p.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g=[`Playground`,`Overview`]}))();export{h as Overview,p as Playground,g as __namedExportsOrder,f as default};