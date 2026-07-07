import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{H as n,Ka as r,So as i,U as a,V as o,so as s,t as c,ui as l,va as u}from"./iframe-CKKfkoYu.js";function d(e){return e===`disabled`?`stroke-icon-disabled`:e===`selected`?`stroke-icon`:`stroke-icon-accent`}function f(e,t){return t?`disabled`:e?`selected`:`idle`}function p(e){return e===`disabled`?`disabled`:e===`selected`?`selected`:`idle`}var m,h,g,_,v,y,b,x,S,C,w;e((()=>{c(),l(),m=t(r(),1),h=t(i(),1),g=s(),_={title:`Navigation/Switcher/SwitcherItem`,component:n,tags:[`autodocs`],argTypes:{size:{control:`inline-radio`,options:a},kind:{control:`inline-radio`,options:o},label:{control:`text`},selected:{control:`boolean`},disabled:{control:`boolean`},_selectedValue:{control:{disable:!0},table:{disable:!0}},_onSelect:{control:{disable:!0},table:{disable:!0}},_kind:{control:{disable:!0},table:{disable:!0}}},parameters:{layout:`padded`},decorators:[e=>(0,g.jsx)(`div`,{role:`tablist`,children:(0,g.jsx)(e,{})})]},v=(e,t,n)=>e===`icon`?(0,g.jsx)(u,{className:(0,m.default)(`size-4`,d(n))}):t,y=({size:e,kind:t,label:r,selected:i,disabled:a})=>{let[o,s]=h.useState(i);h.useEffect(()=>{s(i)},[i]);let c=f(o,a);return(0,g.jsx)(n,{value:`item`,size:e,disabled:a,"aria-label":t===`icon`?r:void 0,_kind:t,_selectedValue:o?`item`:``,_onSelect:()=>!a&&s(e=>!e),children:v(t,r,c)})},b={args:{size:`small`,kind:`text`,label:`Item`,selected:!1,disabled:!1},render:e=>(0,g.jsx)(y,{...e})},x=[{key:`default`,label:`Default`},{key:`selected`,label:`Selected`},{key:`disabled`,label:`Disabled`}],S=({size:e,kind:t,state:r})=>(0,g.jsx)(n,{value:`item`,size:e,disabled:r===`disabled`,"aria-label":t===`icon`?`Item`:void 0,_kind:t,_selectedValue:r===`selected`?`item`:``,children:v(t,`Item`,p(r))}),C={parameters:{controls:{disable:!0}},render:()=>{let e={display:`grid`,gridTemplateColumns:`minmax(6rem,auto) repeat(${a.length*o.length}, minmax(0, 1fr))`};return(0,g.jsxs)(`div`,{className:`gap-xlg flex flex-col`,children:[(0,g.jsxs)(`div`,{className:`gap-md items-end`,style:e,children:[(0,g.jsx)(`span`,{}),a.map(e=>o.map(t=>(0,g.jsxs)(`span`,{className:`typography-body-small text-text-accent capitalize`,children:[e,` · `,t]},`${e}-${t}`)))]}),x.map(t=>(0,g.jsxs)(`div`,{className:`gap-md items-center`,style:e,children:[(0,g.jsx)(`span`,{className:`typography-body-small text-text`,children:t.label}),a.map(e=>o.map(n=>(0,g.jsx)(`div`,{className:`flex items-center justify-start`,children:(0,g.jsx)(S,{size:e,kind:n,state:t.key})},`${e}-${n}`)))]},t.key))]})}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    size: "small",
    kind: "text",
    label: "Item",
    selected: false,
    disabled: false
  },
  render: args => <PlaygroundSwitcherItem {...args} />
}`,...b.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w=[`Playground`,`Overview`]}))();export{C as Overview,b as Playground,w as __namedExportsOrder,_ as default};