import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{J as n,Ps as r,X as i,Y as a,i as o,is as s,ko as c,la as l,ys as u}from"./iframe-D6wzTZl9.js";import{n as d,t as f}from"./figmaDesign-CO6i5n9C.js";function p(e){return e===`disabled`?`stroke-icon-disabled`:e===`selected`?`stroke-icon`:`stroke-icon-accent`}function m(e,t){return t?`disabled`:e?`selected`:`idle`}function h(e){return e===`disabled`?`disabled`:e===`selected`?`selected`:`idle`}var g,_,v,y,b,x,S,C,w,T,E;e((()=>{o(),l(),g=t(s(),1),_=t(r(),1),d(),v=u(),y={title:`Navigation/Switcher/SwitcherItem`,component:a,tags:[`autodocs`],argTypes:{size:{control:`inline-radio`,options:i},kind:{control:`inline-radio`,options:n},label:{control:`text`},selected:{control:`boolean`},disabled:{control:`boolean`},_selectedValue:{control:{disable:!0},table:{disable:!0}},_onSelect:{control:{disable:!0},table:{disable:!0}},_kind:{control:{disable:!0},table:{disable:!0}}},parameters:{design:f(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=2301-1247`),layout:`padded`},decorators:[e=>(0,v.jsx)(`div`,{role:`tablist`,children:(0,v.jsx)(e,{})})]},b=(e,t,n)=>e===`icon`?(0,v.jsx)(c,{className:(0,g.default)(`size-4`,p(n))}):t,x=({size:e,kind:t,label:n,selected:r,disabled:i})=>{let[o,s]=_.useState(r);_.useEffect(()=>{s(r)},[r]);let c=m(o,i);return(0,v.jsx)(a,{value:`item`,size:e,disabled:i,"aria-label":t===`icon`?n:void 0,_kind:t,_selectedValue:o?`item`:``,_onSelect:()=>!i&&s(e=>!e),children:b(t,n,c)})},S={args:{size:`small`,kind:`text`,label:`Item`,selected:!1,disabled:!1},render:e=>(0,v.jsx)(x,{...e})},C=[{key:`default`,label:`Default`},{key:`selected`,label:`Selected`},{key:`disabled`,label:`Disabled`}],w=({size:e,kind:t,state:n})=>(0,v.jsx)(a,{value:`item`,size:e,disabled:n===`disabled`,"aria-label":t===`icon`?`Item`:void 0,_kind:t,_selectedValue:n===`selected`?`item`:``,children:b(t,`Item`,h(n))}),T={parameters:{controls:{disable:!0}},render:()=>{let e={display:`grid`,gridTemplateColumns:`minmax(6rem,auto) repeat(${i.length*n.length}, minmax(0, 1fr))`};return(0,v.jsxs)(`div`,{className:`gap-xlg flex flex-col`,children:[(0,v.jsxs)(`div`,{className:`gap-md items-end`,style:e,children:[(0,v.jsx)(`span`,{}),i.map(e=>n.map(t=>(0,v.jsxs)(`span`,{className:`typography-body-small text-text-accent capitalize`,children:[e,` · `,t]},`${e}-${t}`)))]}),C.map(t=>(0,v.jsxs)(`div`,{className:`gap-md items-center`,style:e,children:[(0,v.jsx)(`span`,{className:`typography-body-small text-text`,children:t.label}),i.map(e=>n.map(n=>(0,v.jsx)(`div`,{className:`flex items-center justify-start`,children:(0,v.jsx)(w,{size:e,kind:n,state:t.key})},`${e}-${n}`)))]},t.key))]})}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    size: "small",
    kind: "text",
    label: "Item",
    selected: false,
    disabled: false
  },
  render: args => <PlaygroundSwitcherItem {...args} />
}`,...S.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const columnCount = SwitcherItemSizes.length * SwitcherKinds.length;
    const gridStyle: React.CSSProperties = {
      display: "grid",
      gridTemplateColumns: \`minmax(6rem,auto) repeat(\${columnCount}, minmax(0, 1fr))\`
    };
    return <div className="gap-xlg flex flex-col">
        <div className="gap-md items-end" style={gridStyle}>
          <span />
          {SwitcherItemSizes.map(size => SwitcherKinds.map(kind => <span key={\`\${size}-\${kind}\`} className="typography-body-small text-text-accent capitalize">
                {size} · {kind}
              </span>))}
        </div>
        {overviewRows.map(row => <div key={row.key} className="gap-md items-center" style={gridStyle}>
            <span className="typography-body-small text-text">{row.label}</span>
            {SwitcherItemSizes.map(size => SwitcherKinds.map(kind => <div key={\`\${size}-\${kind}\`} className="flex items-center justify-start">
                  <OverviewSwitcherItemCell size={size} kind={kind} state={row.key} />
                </div>))}
          </div>)}
      </div>;
  }
}`,...T.parameters?.docs?.source}}},E=[`Playground`,`Overview`]}))();export{T as Overview,S as Playground,E as __namedExportsOrder,y as default};