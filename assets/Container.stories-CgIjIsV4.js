import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{g as n,t as r}from"./iframe-ZXKnLi48.js";import{ei as i,ti as a}from"./src-4oLAFcVt.js";import{T as o,a as s,d as c,m as l,o as u,t as d,w as f}from"./docs-ojnNezwN.js";var p,m,h,g,_;e((()=>{i(),p=t(r(),1),d(),m=n(),h={title:`Essentials/Sizes/Container`,parameters:{a11y:{test:`off`}}},g=()=>{let e=c(a,e=>e.startsWith(`container-`));return(0,m.jsx)(u,{title:`Container`,children:(0,m.jsxs)(`section`,{className:f,children:[(0,m.jsxs)(`div`,{role:`row`,className:(0,p.default)(o,l),children:[(0,m.jsx)(`div`,{className:`typography-label-semibold text-text min-w-0 truncate font-semibold`,children:`Token`}),(0,m.jsx)(`div`,{className:`typography-label-semibold text-text min-w-0 truncate font-semibold`,children:`Size`}),(0,m.jsx)(`div`,{className:`typography-label-semibold text-text min-w-0 truncate font-semibold`,children:`Preview`})]}),(0,m.jsx)(`div`,{className:`gap-sm flex flex-col`,role:`presentation`,children:e.map(e=>(0,m.jsx)(s,{cssVar:e.cssVar,previewKind:`container`,value:e.value},e.key))})]})})},g.__docgenInfo={description:``,methods:[],displayName:`Container`},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
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
}`,...g.parameters?.docs?.source}}},_=[`Container`]}))();export{g as Container,_ as __namedExportsOrder,h as default};