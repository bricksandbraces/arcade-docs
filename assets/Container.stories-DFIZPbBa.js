import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{bX as r}from"./ContextMenuList-DeCYJw7n.js";import{c as l}from"./index-A6zbrgSY.js";import{f as c,S as d,b as m,d as p,s as x,e as w}from"./TypographyTokenRow-oHe2lulq.js";import"./StorybookHeader-Bi3FCPKL.js";import"./index-CY-HDqYb.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";const C={title:"Essentials/Sizes/Container",parameters:{docs:{description:{component:"Container spacing tokens (used for padding and fixed slots). Preview squares use the token for width and height inside a 64×64px cell."}}}},s=()=>{const n=c(r,o=>o.startsWith("container-"));return e.jsx(d,{title:"Container",children:e.jsxs("section",{className:m,children:[e.jsxs("div",{role:"row",className:l(p,x),children:[e.jsx("div",{className:"typography-label-semibold text-text min-w-0 truncate font-semibold",children:"Token"}),e.jsx("div",{className:"typography-label-semibold text-text min-w-0 truncate font-semibold",children:"Size"}),e.jsx("div",{className:"typography-label-semibold text-text min-w-0 truncate font-semibold",children:"Preview"})]}),e.jsx("div",{className:"gap-sm flex flex-col",role:"presentation",children:n.map(o=>e.jsx(w,{cssVar:o.cssVar,previewKind:"container",value:o.value},o.key))})]})})};s.__docgenInfo={description:"",methods:[],displayName:"Container"};s.__docgenInfo={description:"",methods:[],displayName:"Container"};var t,a,i;s.parameters={...s.parameters,docs:{...(t=s.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
  const rows = getSortedSizeRows(sizes, key => key.startsWith("container-"));
  return <SizeDocsShell title="Container">
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
          {rows.map(row => <SizeTokenRow key={row.key} cssVar={row.cssVar} previewKind="container" value={row.value} />)}
        </div>
      </section>
    </SizeDocsShell>;
}`,...(i=(a=s.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const g=["Container"];export{s as Container,g as __namedExportsOrder,C as default};
