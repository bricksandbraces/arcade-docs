import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{bw as o,bv as c,by as d,aK as k}from"./ContextMenu-CxMNWebl.js";import{R as u}from"./index-CY-HDqYb.js";import{c as I}from"./index-A6zbrgSY.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";const T={title:"Components/Fabian Supervision/Switcher/SwitcherItem",component:d,argTypes:{size:{control:"inline-radio",options:c},kind:{control:"inline-radio",options:o},label:{control:"text"},selected:{control:"boolean"},disabled:{control:"boolean"},_selectedValue:{control:{disable:!0},table:{disable:!0}},_onSelect:{control:{disable:!0},table:{disable:!0}},_kind:{control:{disable:!0},table:{disable:!0}}},parameters:{layout:"padded"}};function j(e){return e==="disabled"?"stroke-icon-disabled":e==="selected"?"stroke-icon":"stroke-icon-accent"}function z(e,s){return s?"disabled":e?"selected":"idle"}const f=(e,s,t)=>e==="icon"?a.jsx(k,{className:I("size-4",j(t)),stroke:1.5}):s,N=({size:e,kind:s,label:t,selected:r,disabled:n})=>{const[m,p]=u.useState(r);u.useEffect(()=>{p(r)},[r]);const v=z(m,n);return a.jsx(d,{value:"item",size:e,disabled:n,"aria-label":s==="icon"?t:void 0,_kind:s,_selectedValue:m?"item":"",_onSelect:()=>!n&&p(w=>!w),children:f(s,t,v)})},l={args:{size:"small",kind:"text",label:"Item",selected:!1,disabled:!1},render:e=>a.jsx(N,{...e})},C=[{key:"default",label:"Default"},{key:"selected",label:"Selected"},{key:"disabled",label:"Disabled"}];function _(e){return e==="disabled"?"disabled":e==="selected"?"selected":"idle"}const $=({size:e,kind:s,state:t})=>a.jsx(d,{value:"item",size:e,disabled:t==="disabled","aria-label":s==="icon"?"Item":void 0,_kind:s,_selectedValue:t==="selected"?"item":"",children:f(s,"Item",_(t))}),i={parameters:{controls:{disable:!0}},render:()=>{const s={display:"grid",gridTemplateColumns:`minmax(6rem,auto) repeat(${c.length*o.length}, minmax(0, 1fr))`};return a.jsxs("div",{className:"gap-xlg flex flex-col",children:[a.jsxs("div",{className:"gap-md items-end",style:s,children:[a.jsx("span",{}),c.map(t=>o.map(r=>a.jsxs("span",{className:"typography-body-small text-text-accent capitalize",children:[t," · ",r]},`${t}-${r}`)))]}),C.map(t=>a.jsxs("div",{className:"gap-md items-center",style:s,children:[a.jsx("span",{className:"typography-body-small text-text",children:t.label}),c.map(r=>o.map(n=>a.jsx("div",{className:"flex items-center justify-start",children:a.jsx($,{size:r,kind:n,state:t.key})},`${r}-${n}`)))]},t.key))]})}};var y,b,x;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    size: "small",
    kind: "text",
    label: "Item",
    selected: false,
    disabled: false
  },
  render: args => <PlaygroundSwitcherItem {...args} />
}`,...(x=(b=l.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var S,g,h;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
            <span className="typography-body-small text-text">
              {row.label}
            </span>
            {SwitcherItemSizes.map(size => SwitcherKinds.map(kind => <div key={\`\${size}-\${kind}\`} className="flex items-center justify-start">
                  <OverviewSwitcherItemCell size={size} kind={kind} state={row.key} />
                </div>))}
          </div>)}
      </div>;
  }
}`,...(h=(g=i.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const D=["Playground","Overview"];export{i as Overview,l as Playground,D as __namedExportsOrder,T as default};
