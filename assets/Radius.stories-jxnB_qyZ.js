import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{b$ as l}from"./ContextMenu-DwPyJibk.js";import{c as n}from"./index-A6zbrgSY.js";import{b as d,S as c,c as m,d as p,s as u,a as x}from"./TypographyTokenRow-D5ymhauR.js";import"./StorybookHeader-C6LbWsEF.js";import"./index-CY-HDqYb.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";const R={title:"Essentials/Sizes/Radius",parameters:{docs:{description:{component:"Corner radius tokens. Preview boxes are 64×64px with the radius applied."}}}},s=()=>{const r=d(l,a=>a.startsWith("radius-"));return e.jsx(c,{title:"Radius",children:e.jsxs("section",{className:m,children:[e.jsxs("div",{role:"row",className:n(p,u),children:[e.jsx("div",{className:"typography-label-semibold text-text min-w-0 truncate font-semibold",children:"Token"}),e.jsx("div",{className:"typography-label-semibold text-text min-w-0 truncate font-semibold",children:"Size"}),e.jsx("div",{className:"typography-label-semibold text-text min-w-0 truncate font-semibold",children:"Preview"})]}),e.jsx("div",{className:"gap-sm flex flex-col",role:"presentation",children:r.map(a=>e.jsx(x,{cssVar:a.cssVar,previewKind:"radius",value:a.value},a.key))})]})})};s.__docgenInfo={description:"",methods:[],displayName:"Radius"};s.__docgenInfo={description:"",methods:[],displayName:"Radius"};var o,i,t;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
  const rows = getSortedSizeRows(sizes, key => key.startsWith("radius-"));
  return <SizeDocsShell title="Radius">
      <section className={colorDocsGroupedSectionClassName}>
        <div role="row" className={cx(docsTableHeaderRowClassName, sizeDocsTableGridColsClassName)}>
          <div className="typography-label-semibold text-text min-w-0 truncate font-semibold">
            Token
          </div>
          <div className="typography-label-semibold text-text min-w-0 truncate font-semibold">
            Size
          </div>
          <div className="typography-label-semibold text-text min-w-0 truncate font-semibold">
            Preview
          </div>
        </div>
        <div className="gap-sm flex flex-col" role="presentation">
          {rows.map(row => <SizeTokenRow key={row.key} cssVar={row.cssVar} previewKind="radius" value={row.value} />)}
        </div>
      </section>
    </SizeDocsShell>;
}`,...(t=(i=s.parameters)==null?void 0:i.docs)==null?void 0:t.source}}};const z=["Radius"];export{s as Radius,z as __namedExportsOrder,R as default};
