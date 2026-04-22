import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{bY as l}from"./ContextMenu-CkvOQcf9.js";import{c as n}from"./index-A6zbrgSY.js";import{g as d,S as c,c as m,d as p,s as x,a as b}from"./TypographyTokenRow-oxUDiMvT.js";import"./StorybookHeader-CM2hL85X.js";import"./index-CY-HDqYb.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";const S={title:"Essentials/Sizes/Border",parameters:{docs:{description:{component:"Border width tokens from the design system. Preview boxes are 64×64px."}}}},s=()=>{const i=d(l);return e.jsx(c,{title:"Border",children:e.jsxs("section",{className:m,children:[e.jsxs("div",{role:"row",className:n(p,x),children:[e.jsx("div",{className:"typography-label-semibold text-text min-w-0 truncate font-semibold",children:"Token"}),e.jsx("div",{className:"typography-label-semibold text-text min-w-0 truncate font-semibold",children:"Size"}),e.jsx("div",{className:"typography-label-semibold text-text min-w-0 truncate font-semibold",children:"Preview"})]}),e.jsx("div",{className:"gap-sm flex flex-col",role:"presentation",children:i.map(o=>e.jsx(b,{cssVar:o.cssVar,previewKind:"border",value:o.value},o.key))})]})})};s.__docgenInfo={description:"",methods:[],displayName:"Border"};s.__docgenInfo={description:"",methods:[],displayName:"Border"};var r,a,t;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
  const rows = getBorderRows(borders);
  return <SizeDocsShell title="Border">
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
          {rows.map(row => <SizeTokenRow key={row.key} cssVar={row.cssVar} previewKind="border" value={row.value} />)}
        </div>
      </section>
    </SizeDocsShell>;
}`,...(t=(a=s.parameters)==null?void 0:a.docs)==null?void 0:t.source}}};const B=["Border"];export{s as Border,B as __namedExportsOrder,S as default};
