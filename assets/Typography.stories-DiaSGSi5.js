import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Di as n,fi as r}from"./iframe-DWMpUj-P.js";import{n as i}from"./storybook-BYporwFY.js";import{C as a,S as o,T as s,i as c,n as l,r as u,t as d,w as f}from"./docs-CxbUlxoq.js";var p,m,h,g,_,v;e((()=>{p=t(r(),1),d(),m=n(),h=`The quick brown fox jumps over the lazy dog.`,g={title:`Essentials/Typography`,parameters:{a11y:{test:`off`}}},_=()=>{let e=u();return(0,m.jsx)(`div`,{className:`gap-xlg text-text typography-body flex w-full min-w-0 flex-col`,children:(0,m.jsxs)(`div`,{className:`gap-xlg flex min-w-0 flex-col`,children:[(0,m.jsx)(i,{title:`Typography`,className:`px-[80px] pt-[80px] pb-[48px]`}),(0,m.jsx)(`div`,{className:`p-lg`,children:(0,m.jsx)(`div`,{className:`gap-lg -m-lg flex flex-col`,children:(0,m.jsx)(`div`,{className:o,children:(0,m.jsx)(`div`,{className:a,children:(0,m.jsxs)(`section`,{className:f,children:[(0,m.jsxs)(`div`,{role:`row`,className:(0,p.default)(s,c),children:[(0,m.jsx)(`div`,{className:`typography-label-semibold text-text min-w-0 truncate font-semibold`,children:`Token`}),(0,m.jsx)(`div`,{className:`typography-label-semibold text-text min-w-0 truncate font-semibold`,children:`Specs`}),(0,m.jsx)(`div`,{className:`typography-label-semibold text-text min-w-0 truncate font-semibold`,children:`Preview`})]}),(0,m.jsx)(`div`,{className:`gap-sm flex flex-col`,role:`presentation`,children:e.map(e=>(0,m.jsx)(l,{previewText:h,row:e},e.utilityToken))})]})})})})})]})})},_.__docgenInfo={description:``,methods:[],displayName:`Typography`},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  const rows = getTypographyDocRows();
  return <div className="gap-xlg text-text typography-body flex w-full min-w-0 flex-col">
      <div className="gap-xlg flex min-w-0 flex-col">
        <StorybookHeader title="Typography" className="px-[80px] pt-[80px] pb-[48px]" />
        <div className="p-lg">
          <div className="gap-lg -m-lg flex flex-col">
            <div className={colorDocsGroupedPanelClassName}>
              <div className={colorDocsGroupedPanelInnerClassName}>
                <section className={colorDocsGroupedSectionClassName}>
                  <div role="row" className={cx(docsTableHeaderRowClassName, typographyDocsTableGridColsClassName)}>
                    <div className="typography-label-semibold text-text min-w-0 truncate font-semibold">
                      Token
                    </div>
                    <div className="typography-label-semibold text-text min-w-0 truncate font-semibold">
                      Specs
                    </div>
                    <div className="typography-label-semibold text-text min-w-0 truncate font-semibold">
                      Preview
                    </div>
                  </div>
                  <div className="gap-sm flex flex-col" role="presentation">
                    {rows.map(row => <TypographyTokenRow key={row.utilityToken} previewText={PREVIEW_BODY} row={row} />)}
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
}`,..._.parameters?.docs?.source}}},v=[`Typography`]}))();export{_ as Typography,v as __namedExportsOrder,g as default};