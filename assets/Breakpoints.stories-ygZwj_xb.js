import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as n}from"./index-A6zbrgSY.js";import{j as r,c as m,a as d,b as c,d as p,k as x,B as N}from"./TypographyTokenRow-B9WdP8NN.js";import{S as b}from"./StorybookHeader-CAxbvJHV.js";import"./index-CY-HDqYb.js";import"./ContextMenuList-DWuYW1Wj.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";const h={sm:"384px",md:"640px",lg:"928px",xl:"1232px","2xl":"1536px"},C={title:"Essentials/Breakpoints",parameters:{docs:{description:{component:"Responsive breakpoint min-width tokens from the design system. Values are ordered from smallest to largest."}}}},s=()=>{const i=r(h);return e.jsx("div",{className:"gap-xlg text-text typography-body flex w-full min-w-0 flex-col",children:e.jsxs("div",{className:"gap-xlg flex min-w-0 flex-col",children:[e.jsx(b,{title:"Breakpoints",className:"px-[80px] pt-[80px] pb-[48px]"}),e.jsx("div",{className:"p-lg",children:e.jsx("div",{className:"gap-lg -m-lg flex flex-col",children:e.jsx("div",{className:m,children:e.jsx("div",{className:d,children:e.jsxs("section",{className:c,children:[e.jsxs("div",{role:"row",className:n(p,x),children:[e.jsx("div",{className:"typography-label-semibold text-text min-w-0 truncate font-semibold",children:"Name"}),e.jsx("div",{className:"typography-label-semibold text-text min-w-0 truncate font-semibold",children:"CSS Token"}),e.jsx("div",{className:"typography-label-semibold text-text min-w-0 truncate font-semibold",children:"Min-width"}),e.jsx("div",{className:"typography-label-semibold text-text min-w-0 truncate font-semibold",children:"Max-width"})]}),e.jsx("div",{className:"gap-sm flex flex-col",role:"presentation",children:i.map(a=>e.jsx(N,{cssVar:a.cssVar,maxWidth:a.maxWidth,minWidth:a.minWidth,name:a.name},a.name))})]})})})})})]})})};s.__docgenInfo={description:"",methods:[],displayName:"Breakpoints"};s.__docgenInfo={description:"",methods:[],displayName:"Breakpoints"};var o,t,l;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
  const rows = getBreakpointDocRows(breakpoints);
  return <div className="gap-xlg text-text typography-body flex w-full min-w-0 flex-col">
      <div className="gap-xlg flex min-w-0 flex-col">
        <StorybookHeader title="Breakpoints" className="px-[80px] pt-[80px] pb-[48px]" />
        <div className="p-lg">
          <div className="gap-lg -m-lg flex flex-col">
            <div className={colorDocsGroupedPanelClassName}>
              <div className={colorDocsGroupedPanelInnerClassName}>
                <section className={colorDocsGroupedSectionClassName}>
                  <div role="row" className={cx(docsTableHeaderRowClassName, breakpointDocsTableGridColsClassName)}>
                    <div className="typography-label-semibold text-text min-w-0 truncate font-semibold">
                      Name
                    </div>
                    <div className="typography-label-semibold text-text min-w-0 truncate font-semibold">
                      CSS Token
                    </div>
                    <div className="typography-label-semibold text-text min-w-0 truncate font-semibold">
                      Min-width
                    </div>
                    <div className="typography-label-semibold text-text min-w-0 truncate font-semibold">
                      Max-width
                    </div>
                  </div>
                  <div className="gap-sm flex flex-col" role="presentation">
                    {rows.map(row => <BreakpointRow key={row.name} cssVar={row.cssVar} maxWidth={row.maxWidth} minWidth={row.minWidth} name={row.name} />)}
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
}`,...(l=(t=s.parameters)==null?void 0:t.docs)==null?void 0:l.source}}};const B=["Breakpoints"];export{s as Breakpoints,B as __namedExportsOrder,C as default};
