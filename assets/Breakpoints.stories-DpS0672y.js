import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Ga as n,Ka as r,Ya as i,uo as a}from"./iframe-CxJo9uef.js";import{n as o}from"./storybook-CSERfiEi.js";import{C as s,D as c,S as l,T as u,t as d,w as f,x as p,y as m}from"./docs-oun3cA_r.js";var h,g,_,v,y;e((()=>{r(),h=t(i(),1),d(),g=a(),_={title:`Arcade Foundation/Breakpoints`,parameters:{a11y:{test:`off`},chromatic:{disableSnapshot:!0}}},v=()=>{let e=c(n);return(0,g.jsx)(`div`,{className:`gap-xlg text-text typography-body flex w-full min-w-0 flex-col`,children:(0,g.jsxs)(`div`,{className:`gap-xlg flex min-w-0 flex-col`,children:[(0,g.jsx)(o,{title:`Breakpoints`,className:`px-[80px] pt-[80px] pb-[48px]`}),(0,g.jsx)(`div`,{className:`p-lg`,children:(0,g.jsx)(`div`,{className:`gap-lg -m-lg flex flex-col`,children:(0,g.jsx)(`div`,{className:l,children:(0,g.jsx)(`div`,{className:s,children:(0,g.jsxs)(`section`,{className:f,children:[(0,g.jsxs)(`div`,{role:`row`,className:(0,h.default)(u,p),children:[(0,g.jsx)(`div`,{className:`typography-label-semibold text-text min-w-0 truncate font-semibold`,children:`Name`}),(0,g.jsx)(`div`,{className:`typography-label-semibold text-text min-w-0 truncate font-semibold`,children:`CSS Token`}),(0,g.jsx)(`div`,{className:`typography-label-semibold text-text min-w-0 truncate font-semibold`,children:`Min-width`}),(0,g.jsx)(`div`,{className:`typography-label-semibold text-text min-w-0 truncate font-semibold`,children:`Max-width`})]}),(0,g.jsx)(`div`,{className:`gap-sm flex flex-col`,role:`presentation`,children:e.map(e=>(0,g.jsx)(m,{cssVar:e.cssVar,maxWidth:e.maxWidth,minWidth:e.minWidth,name:e.name},e.name))})]})})})})})]})})},v.__docgenInfo={description:``,methods:[],displayName:`Breakpoints`},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
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
}`,...v.parameters?.docs?.source}}},y=[`Breakpoints`]}))();export{v as Breakpoints,y as __namedExportsOrder,_ as default};