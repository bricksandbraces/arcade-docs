import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as r}from"./index-A6zbrgSY.js";import{c as n,a as p,b as c,d,t as m,i as x,T as y}from"./TypographyTokenRow-CPLWTrkK.js";import{S as g}from"./StorybookHeader-Cv2d7vXW.js";import"./index-CY-HDqYb.js";import"./ContextMenuList-UUP63zD1.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";const h="The quick brown fox jumps over the lazy dog.",k={title:"Essentials/Typography",parameters:{docs:{description:{component:"Typography utilities from the design system. Specs match the generated `@utility` definitions in arcade-tokens; headline 01–04 font sizes scale at the listed min-width breakpoints."}}}},s=()=>{const i=x();return e.jsx("div",{className:"gap-xlg text-text typography-body flex w-full min-w-0 flex-col",children:e.jsxs("div",{className:"gap-xlg flex min-w-0 flex-col",children:[e.jsx(g,{title:"Typography",className:"px-[80px] pt-[80px] pb-[48px]"}),e.jsx("div",{className:"p-lg",children:e.jsx("div",{className:"gap-lg -m-lg flex flex-col",children:e.jsx("div",{className:n,children:e.jsx("div",{className:p,children:e.jsxs("section",{className:c,children:[e.jsxs("div",{role:"row",className:r(d,m),children:[e.jsx("div",{className:"typography-label-semibold text-text min-w-0 truncate font-semibold",children:"Token"}),e.jsx("div",{className:"typography-label-semibold text-text min-w-0 truncate font-semibold",children:"Specs"}),e.jsx("div",{className:"typography-label-semibold text-text min-w-0 truncate font-semibold",children:"Preview"})]}),e.jsx("div",{className:"gap-sm flex flex-col",role:"presentation",children:i.map(a=>e.jsx(y,{previewText:h,row:a},a.utilityToken))})]})})})})})]})})};s.__docgenInfo={description:"",methods:[],displayName:"Typography"};s.__docgenInfo={description:"",methods:[],displayName:"Typography"};var o,l,t;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
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
}`,...(t=(l=s.parameters)==null?void 0:l.docs)==null?void 0:t.source}}};const C=["Typography"];export{s as Typography,C as __namedExportsOrder,k as default};
