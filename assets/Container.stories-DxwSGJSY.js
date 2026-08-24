import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{$a as n,Ha as r,Va as i,mo as a}from"./iframe-DsWaMiRm.js";import{T as o,a as s,d as c,m as l,o as u,t as d,w as f}from"./docs-DPv-US_-.js";var p,m,h,g,_;e((()=>{i(),p=t(n(),1),d(),m=a(),h={title:`Arcade Foundation/Sizes/Container`,parameters:{a11y:{test:`off`},chromatic:{disableSnapshot:!0}}},g=()=>{let e=c(r,e=>e.startsWith(`container-`));return(0,m.jsx)(u,{title:`Container`,children:(0,m.jsxs)(`section`,{className:f,children:[(0,m.jsxs)(`div`,{role:`row`,className:(0,p.default)(o,l),children:[(0,m.jsx)(`div`,{className:`typography-label-semibold text-text min-w-0 truncate font-semibold`,children:`Token`}),(0,m.jsx)(`div`,{className:`typography-label-semibold text-text min-w-0 truncate font-semibold`,children:`Size`}),(0,m.jsx)(`div`,{className:`typography-label-semibold text-text min-w-0 truncate font-semibold`,children:`Preview`})]}),(0,m.jsx)(`div`,{className:`gap-sm flex flex-col`,role:`presentation`,children:e.map(e=>(0,m.jsx)(s,{cssVar:e.cssVar,previewKind:`container`,value:e.value},e.key))})]})})},g.__docgenInfo={description:``,methods:[],displayName:`Container`},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
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