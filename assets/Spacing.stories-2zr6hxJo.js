import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{b$ as l}from"./ContextMenu-ByChsCan.js";import{c as r}from"./index-A6zbrgSY.js";import{e as c,S as m,c as d,d as p,s as x,a as S}from"./TypographyTokenRow-DOoUjzYb.js";import"./StorybookHeader-CvKvr2B5.js";import"./index-CY-HDqYb.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";const y={title:"Essentials/Sizes/Spacing",parameters:{docs:{description:{component:"Spacing scale tokens. Preview shows two squares with the token applied as flex gap inside a 64×64px cell."}}}},s=()=>{const n=c(l);return e.jsx(m,{title:"Spacing",children:e.jsxs("section",{className:d,children:[e.jsxs("div",{role:"row",className:r(p,x),children:[e.jsx("div",{className:"typography-label-semibold text-text min-w-0 truncate font-semibold",children:"Token"}),e.jsx("div",{className:"typography-label-semibold text-text min-w-0 truncate font-semibold",children:"Size"}),e.jsx("div",{className:"typography-label-semibold text-text min-w-0 truncate font-semibold",children:"Preview"})]}),e.jsx("div",{className:"gap-sm flex flex-col",role:"presentation",children:n.map(a=>e.jsx(S,{cssVar:a.cssVar,previewKind:"spacing",value:a.value},a.key))})]})})};s.__docgenInfo={description:"",methods:[],displayName:"Spacing"};s.__docgenInfo={description:"",methods:[],displayName:"Spacing"};var o,i,t;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
  const rows = getSpacingSizeRows(sizes);
  return <SizeDocsShell title="Spacing">
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
          {rows.map(row => <SizeTokenRow key={row.key} cssVar={row.cssVar} previewKind="spacing" value={row.value} />)}
        </div>
      </section>
    </SizeDocsShell>;
}`,...(t=(i=s.parameters)==null?void 0:i.docs)==null?void 0:t.source}}};const z=["Spacing"];export{s as Spacing,z as __namedExportsOrder,y as default};
