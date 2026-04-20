import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{am as a,ap as H,aq as p}from"./ContextMenuList-CrHLZopD.js";import"./index-CY-HDqYb.js";import"./index-A6zbrgSY.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";import"./index-ZRCHFLd-.js";import"./sizes-BpUsT7VU.js";import"./colors-CoOIoG7W.js";const _={title:"WIP Components/Header/Dropdown/Button",component:a,argTypes:{selected:{control:"boolean"},disabled:{control:"boolean"},expanded:{control:"boolean"},children:{control:"text"}}},d={args:{children:"Dropdown",selected:!1,disabled:!1,expanded:!1}},o={render:()=>e.jsx("div",{className:"gap-md flex flex-col",children:H.map(s=>e.jsxs("div",{className:"gap-md flex items-center",children:[e.jsxs("span",{className:"w-20 text-sm",children:[s,":"]}),e.jsx(a,{selected:s==="selected",children:s==="selected"?"Selected":"Enabled"})]},s))})},t={render:()=>e.jsx("div",{className:"gap-md flex flex-col",children:p.map(s=>e.jsxs("div",{className:"gap-md flex items-center",children:[e.jsxs("span",{className:"w-20 text-sm",children:[s,":"]}),e.jsxs(a,{expanded:s==="open",children:["Dropdown ",s]})]},s))})},r={render:()=>e.jsxs("div",{className:"gap-md flex flex-col",children:[e.jsx(a,{disabled:!0,children:"Disabled Closed"}),e.jsx(a,{disabled:!0,expanded:!0,children:"Disabled Open"})]})},l={render:()=>e.jsxs("div",{className:"gap-lg flex flex-col",children:[e.jsx("div",{className:"font-semibold",children:"All State Combinations"}),H.map(s=>p.map(n=>e.jsxs("div",{className:"gap-md flex items-center",children:[e.jsxs("span",{className:"w-32 text-sm",children:[s," + ",n,":"]}),e.jsxs(a,{selected:s==="selected",expanded:n==="open",children:[s," ",n]})]},`${s}-${n}`))),e.jsx("div",{className:"mt-md font-semibold",children:"Disabled States"}),p.map(s=>e.jsxs("div",{className:"gap-md flex items-center",children:[e.jsxs("span",{className:"w-32 text-sm",children:["disabled + ",s,":"]}),e.jsxs(a,{disabled:!0,expanded:s==="open",children:["disabled ",s]})]},`disabled-${s}`))]})};var i,c,m;d.parameters={...d.parameters,docs:{...(i=d.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    children: "Dropdown",
    selected: false,
    disabled: false,
    expanded: false
  }
}`,...(m=(c=d.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var x,u,f;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div className="gap-md flex flex-col">
      {HeaderDropdownButtonStates.map(state => <div key={state} className="gap-md flex items-center">
          <span className="w-20 text-sm">{state}:</span>
          <HeaderDropdownButton selected={state === "selected"}>
            {state === "selected" ? "Selected" : "Enabled"}
          </HeaderDropdownButton>
        </div>)}
    </div>
}`,...(f=(u=o.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var b,w,D;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div className="gap-md flex flex-col">
      {HeaderDropdownButtonExpansions.map(expansion => <div key={expansion} className="gap-md flex items-center">
          <span className="w-20 text-sm">{expansion}:</span>
          <HeaderDropdownButton expanded={expansion === "open"}>
            Dropdown {expansion}
          </HeaderDropdownButton>
        </div>)}
    </div>
}`,...(D=(w=t.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var v,g,N;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div className="gap-md flex flex-col">
      <HeaderDropdownButton disabled>Disabled Closed</HeaderDropdownButton>
      <HeaderDropdownButton disabled expanded>
        Disabled Open
      </HeaderDropdownButton>
    </div>
}`,...(N=(g=r.parameters)==null?void 0:g.docs)==null?void 0:N.source}}};var h,j,B;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div className="gap-lg flex flex-col">
      <div className="font-semibold">All State Combinations</div>
      {HeaderDropdownButtonStates.map(state => HeaderDropdownButtonExpansions.map(expansion => <div key={\`\${state}-\${expansion}\`} className="gap-md flex items-center">
            <span className="w-32 text-sm">
              {state} + {expansion}:
            </span>
            <HeaderDropdownButton selected={state === "selected"} expanded={expansion === "open"}>
              {state} {expansion}
            </HeaderDropdownButton>
          </div>))}
      <div className="mt-md font-semibold">Disabled States</div>
      {HeaderDropdownButtonExpansions.map(expansion => <div key={\`disabled-\${expansion}\`} className="gap-md flex items-center">
          <span className="w-32 text-sm">disabled + {expansion}:</span>
          <HeaderDropdownButton disabled expanded={expansion === "open"}>
            disabled {expansion}
          </HeaderDropdownButton>
        </div>)}
    </div>
}`,...(B=(j=l.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};const q=["Playground","States","Expansions","Disabled","AllStates"];export{l as AllStates,r as Disabled,t as Expansions,d as Playground,o as States,q as __namedExportsOrder,_ as default};
