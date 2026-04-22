import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as i}from"./index-A6zbrgSY.js";import{f as d,h as c,c as m,d as p,u as x,E as f}from"./TypographyTokenRow-BIdYFNSc.js";import{S as v}from"./StorybookHeader-CuKMbQLm.js";import"./index-CY-HDqYb.js";import"./ContextMenu-BIXelnGu.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";const w=[{name:"Focus",layers:[{type:"drop-shadow",color:"var(--color-border-focus-03)",position:{x:0,y:0},blur:0,spread:1,blendMode:"normal"},{type:"drop-shadow",color:"var(--color-border-focus-02)",position:{x:0,y:0},blur:0,spread:3,blendMode:"normal"},{type:"drop-shadow",color:"var(--color-border-focus-01)",position:{x:0,y:0},blur:0,spread:6,blendMode:"normal"}]},{name:"Shadow",layers:[{type:"drop-shadow",color:"var(--color-shadow)",position:{x:0,y:4},blur:8,spread:0,blendMode:"normal"}]},{name:"Subtle",layers:[{type:"drop-shadow",color:"var(--color-shadow)",position:{x:0,y:2},blur:4,spread:0,blendMode:"normal"}]},{name:"Subtlest",layers:[{type:"drop-shadow",color:"var(--color-shadow)",position:{x:0,y:.5},blur:2,spread:0,blendMode:"normal"}]}],u={Focus:"Focus",Shadow:"Shadow-Default",Subtle:"Shadow-Subtle",Subtlest:"Shadow-Subtlest"};function b(o){return u[o]??o}function l(o){const s=o.toLowerCase();return s==="shadow"?"shadow-default":`shadow-${s}`}function N(){return w.map(o=>({name:b(o.name),cssToken:l(o.name),previewClassName:l(o.name)}))}const D={title:"Essentials/Elevation",parameters:{docs:{description:{component:"Elevation and focus shadow utilities from the design system. Preview uses the same Tailwind classes as production."}}}},a=()=>{const o=N();return e.jsx("div",{className:"gap-xlg text-text typography-body flex w-full min-w-0 flex-col",children:e.jsxs("div",{className:"gap-xlg flex min-w-0 flex-col",children:[e.jsx(v,{title:"Elevation",className:"px-[80px] pt-[80px] pb-[48px]"}),e.jsx("div",{className:"p-lg",children:e.jsx("div",{className:"gap-lg -m-lg flex flex-col",children:e.jsx("div",{className:d,children:e.jsx("div",{className:c,children:e.jsxs("section",{className:m,children:[e.jsxs("div",{role:"row",className:i(p,x),children:[e.jsx("div",{className:"typography-label-semibold text-text min-w-0 truncate font-semibold",children:"Name"}),e.jsx("div",{className:"typography-label-semibold text-text min-w-0 truncate font-semibold",children:"CSS Token"}),e.jsx("div",{className:"typography-label-semibold text-text min-w-0 truncate font-semibold",children:"Preview"})]}),e.jsx("div",{className:"gap-sm flex flex-col",role:"presentation",children:o.map(s=>e.jsx(f,{cssToken:s.cssToken,name:s.name,previewClassName:s.previewClassName},s.name))})]})})})})})]})})};a.__docgenInfo={description:"",methods:[],displayName:"Elevation"};a.__docgenInfo={description:"",methods:[],displayName:"Elevation"};var r,t,n;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
  const rows = getEffectDocRows();
  return <div className="gap-xlg text-text typography-body flex w-full min-w-0 flex-col">
      <div className="gap-xlg flex min-w-0 flex-col">
        <StorybookHeader title="Elevation" className="px-[80px] pt-[80px] pb-[48px]" />
        <div className="p-lg">
          <div className="gap-lg -m-lg flex flex-col">
            <div className={colorDocsGroupedPanelClassName}>
              <div className={colorDocsGroupedPanelInnerClassName}>
                <section className={colorDocsGroupedSectionClassName}>
                  <div role="row" className={cx(docsTableHeaderRowClassName, effectDocsTableGridColsClassName)}>
                    <div className="typography-label-semibold text-text min-w-0 truncate font-semibold">
                      Name
                    </div>
                    <div className="typography-label-semibold text-text min-w-0 truncate font-semibold">
                      CSS Token
                    </div>
                    <div className="typography-label-semibold text-text min-w-0 truncate font-semibold">
                      Preview
                    </div>
                  </div>
                  <div className="gap-sm flex flex-col" role="presentation">
                    {rows.map(row => <EffectRow key={row.name} cssToken={row.cssToken} name={row.name} previewClassName={row.previewClassName} />)}
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
}`,...(n=(t=a.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};const k=["Elevation"];export{a as Elevation,k as __namedExportsOrder,D as default};
