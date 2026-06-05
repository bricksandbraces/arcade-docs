import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Fa as n,Ia as r,Ua as i,io as a}from"./iframe-Cw936qOG.js";import{T as o,c as s,o as c,p as l,t as u,u as d,w as f}from"./docs-SLuEohcg.js";var p,m,h,g,_;e((()=>{n(),p=t(i(),1),u(),m=a(),h={title:`Arcade Foundation/Sizes/Modal`,parameters:{a11y:{test:`off`},chromatic:{disableSnapshot:!0}}},g=()=>{let e=d(r);return(0,m.jsx)(c,{title:`Modal`,children:(0,m.jsxs)(`section`,{className:f,children:[(0,m.jsxs)(`div`,{role:`row`,className:(0,p.default)(o,l),children:[(0,m.jsx)(`div`,{className:`typography-label-semibold text-text min-w-0 truncate font-semibold`,children:`Token`}),(0,m.jsx)(`div`,{className:`typography-label-semibold text-text min-w-0 truncate font-semibold`,children:`Min-width`}),(0,m.jsx)(`div`,{className:`typography-label-semibold text-text min-w-0 truncate font-semibold`,children:`Max-width`})]}),(0,m.jsx)(`div`,{className:`gap-sm flex flex-col`,role:`presentation`,children:e.map(e=>(0,m.jsx)(s,{maxWidth:e.maxWidth,minWidth:e.minWidth,tokenLabel:e.tokenLabel},e.sizeId))})]})})},g.__docgenInfo={description:``,methods:[],displayName:`Modal`},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  const rows = getModalDocRows(modals);
  return <SizeDocsShell title="Modal">
      <section className={colorDocsGroupedSectionClassName}>
        <div role="row" className={cx(docsTableHeaderRowClassName, modalDocsTableGridColsClassName)}>
          <div className="typography-label-semibold text-text min-w-0 truncate font-semibold">
            Token
          </div>
          <div className="typography-label-semibold text-text min-w-0 truncate font-semibold">
            Min-width
          </div>
          <div className="typography-label-semibold text-text min-w-0 truncate font-semibold">
            Max-width
          </div>
        </div>
        <div className="gap-sm flex flex-col" role="presentation">
          {rows.map(row => <ModalTokenRow key={row.sizeId} maxWidth={row.maxWidth} minWidth={row.minWidth} tokenLabel={row.tokenLabel} />)}
        </div>
      </section>
    </SizeDocsShell>;
}`,...g.parameters?.docs?.source}}},_=[`Modal`]}))();export{g as Modal,_ as __namedExportsOrder,h as default};