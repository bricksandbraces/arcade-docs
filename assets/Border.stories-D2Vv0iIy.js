import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Xa as n,Ya as r,Za as i,fo as a}from"./iframe-B8ovF2Kg.js";import{T as o,a as s,l as c,m as l,o as u,t as d,w as f}from"./docs-BRYaD6sJ.js";var p,m,h,g,_;e((()=>{n(),p=t(i(),1),d(),m=a(),h={title:`Arcade Foundation/Sizes/Border`,parameters:{a11y:{test:`off`},chromatic:{disableSnapshot:!0}}},g=()=>{let e=c(r);return(0,m.jsx)(u,{title:`Border`,children:(0,m.jsxs)(`section`,{className:f,children:[(0,m.jsxs)(`div`,{role:`row`,className:(0,p.default)(o,l),children:[(0,m.jsx)(`div`,{className:`typography-label-semibold text-text min-w-0 truncate font-semibold`,children:`Token`}),(0,m.jsx)(`div`,{className:`typography-label-semibold text-text min-w-0 truncate font-semibold`,children:`Size`}),(0,m.jsx)(`div`,{className:`typography-label-semibold text-text min-w-0 truncate font-semibold`,children:`Preview`})]}),(0,m.jsx)(`div`,{className:`gap-sm flex flex-col`,role:`presentation`,children:e.map(e=>(0,m.jsx)(s,{cssVar:e.cssVar,previewKind:`border`,value:e.value},e.key))})]})})},g.__docgenInfo={description:``,methods:[],displayName:`Border`},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
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
}`,...g.parameters?.docs?.source}}},_=[`Border`]}))();export{g as Border,_ as __namedExportsOrder,h as default};