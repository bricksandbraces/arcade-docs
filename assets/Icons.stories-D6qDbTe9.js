import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{$r as n,Ma as r,ei as i,gr as a,qa as o,t as s}from"./iframe-1mzDmMUm.js";import{i as c,n as l}from"./storybook-DchnVRR5.js";import{A as u,C as d,M as f,S as p,_ as m,j as h,t as g,w as _}from"./docs-D7BIThHk.js";var v,y,b,x,S,C;e((()=>{n(),s(),v=t(r(),1),g(),y=o(),b={title:`Arcade Foundation/Icons`,parameters:{a11y:{test:`off`},chromatic:{disableSnapshot:!0}}},x=`grid w-[length:calc(100%+2*var(--spacing-2xlg))] min-w-0 grid-cols-4 gap-sm pt-[20px]`,S=()=>{let e=Object.entries(i).filter(([e])=>e.startsWith(`Icon`));return(0,y.jsx)(`div`,{className:`gap-xlg text-text typography-body flex w-full min-w-0 flex-col`,children:(0,y.jsxs)(`div`,{className:`gap-xlg flex min-w-0 flex-col`,children:[(0,y.jsx)(l,{title:`Icons`,className:`px-[80px] pt-[80px] pb-[48px]`}),(0,y.jsx)(`div`,{className:`p-lg`,children:(0,y.jsx)(`div`,{className:`gap-lg -m-lg flex flex-col`,children:(0,y.jsx)(`div`,{className:p,children:(0,y.jsx)(`div`,{className:d,children:(0,y.jsxs)(`section`,{className:_,children:[(0,y.jsxs)(`div`,{className:`gap-sm flex min-h-0 flex-col`,children:[(0,y.jsx)(`h2`,{className:`typography-headline-03 text-text m-0 font-light`,children:`Tabler icons`}),(0,y.jsxs)(`p`,{className:`typography-body text-text m-0`,children:[`Icons from`,` `,(0,y.jsx)(a,{href:m,inline:!0,label:`@tabler/icons-react`,size:`lg`}),`.`]})]}),(0,y.jsx)(`div`,{className:(0,v.default)(x,`-mx-2xlg`),children:e.map(([e,t])=>(0,y.jsxs)(`div`,{className:u,children:[(0,y.jsx)(`div`,{className:f,children:(0,y.jsx)(t,{size:48,className:`text-text shrink-0`,"aria-hidden":!0})}),(0,y.jsx)(`div`,{className:h,children:(0,y.jsx)(c,{text:e,className:`max-w-full`})})]},e))})]})})})})})]})})},S.__docgenInfo={description:``,methods:[],displayName:`Icons`},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
  const icons = Object.entries(tablerIcons).filter(([name]) => name.startsWith("Icon"));
  return <div className="gap-xlg text-text typography-body flex w-full min-w-0 flex-col">
      <div className="gap-xlg flex min-w-0 flex-col">
        <StorybookHeader title="Icons" className="px-[80px] pt-[80px] pb-[48px]" />
        <div className="p-lg">
          <div className="gap-lg -m-lg flex flex-col">
            <div className={colorDocsGroupedPanelClassName}>
              <div className={colorDocsGroupedPanelInnerClassName}>
                <section className={colorDocsGroupedSectionClassName}>
                  <div className="gap-sm flex min-h-0 flex-col">
                    <h2 className="typography-headline-03 text-text m-0 font-light">
                      Tabler icons
                    </h2>
                    <p className="typography-body text-text m-0">
                      Icons from{" "}
                      <Link href={tablerIconsReactDocumentationHref} inline label="@tabler/icons-react" size="lg" />
                      .
                    </p>
                  </div>
                  <div className={cx(iconGridClassName, "-mx-2xlg")}>
                    {icons.map(([name, Icon]) => {
                    const IconComponent = Icon as ElementType;
                    return <div key={name} className={iconDocCardClassName}>
                          <div className={iconDocCardIconSlotClassName}>
                            <IconComponent size={48} className="text-text shrink-0" aria-hidden />
                          </div>
                          <div className={iconDocCardCodeSlotClassName}>
                            <StorybookInlineCode text={name} className="max-w-full" />
                          </div>
                        </div>;
                  })}
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
}`,...S.parameters?.docs?.source}}},C=[`Icons`]}))();export{S as Icons,C as __namedExportsOrder,b as default};