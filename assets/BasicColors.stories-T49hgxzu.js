import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Ha as n,Oo as r,Qa as i,Ua as a,cn as o,ln as s,po as c,t as l}from"./iframe-CS3hq5x3.js";import{n as u}from"./storybook-CZf-Ke0b.js";import{C as d,N as f,O as p,S as m,T as h,b as g,t as _,w as v}from"./docs-BD9Vy8ub.js";var y,b,x,S,C,w;e((()=>{l(),n(),y=t(i(),1),b=t(r(),1),_(),x=c(),S={title:`Arcade Foundation/Colors/Color Primitives`,parameters:{a11y:{test:`off`},chromatic:{disableSnapshot:!0}}},C=()=>{let[e,t]=(0,b.useState)(`light`),n=p(a),r=()=>(0,x.jsx)(`div`,{className:m,children:(0,x.jsx)(`div`,{className:d,children:n.map(({group:t,items:n})=>(0,x.jsxs)(`section`,{className:v,children:[(0,x.jsx)(`h2`,{className:`typography-headline-03 text-text font-light capitalize`,children:t}),(0,x.jsxs)(`div`,{role:`row`,className:(0,y.default)(h,f),children:[(0,x.jsx)(`div`,{className:`typography-label-semibold text-text min-w-0 truncate font-semibold`,children:`Name`}),(0,x.jsx)(`div`,{className:`typography-label-semibold text-text min-w-0 truncate font-semibold`,children:`CSS Token`}),(0,x.jsx)(`div`,{className:`typography-label-semibold text-text min-w-0 truncate font-semibold`,children:`HEX value`}),(0,x.jsx)(`div`,{className:`typography-label-semibold text-text min-w-0 truncate font-semibold`,children:`Preview`})]}),(0,x.jsx)(`div`,{className:`gap-sm flex flex-col`,role:`presentation`,children:n.map(({key:t,cssVar:n})=>(0,x.jsx)(g,{cssVar:n,previewTheme:e,tokenKey:t},t))})]},t))})});return(0,x.jsx)(`div`,{className:`gap-xlg text-text typography-body flex w-full min-w-0 flex-col`,children:(0,x.jsxs)(`div`,{className:`gap-xlg flex min-w-0 flex-col`,children:[(0,x.jsx)(u,{title:`Color Primitives`,className:`px-[80px] pt-[80px] pb-[48px]`}),(0,x.jsxs)(`div`,{className:`basic-colors-tabs`,children:[(0,x.jsx)(`style`,{children:`
              .basic-colors-tabs > div > div:first-child {
                display: none !important;
              }
            `}),(0,x.jsxs)(s,{selectedId:e,onChange:e=>{(e===`light`||e===`dark`)&&t(e)},size:`md`,radius:`sharp`,withSpacing:!1,tabListClassName:`ml-[calc(80px-2*var(--spacing-lg)+4px)] mr-[calc(80px-var(--spacing-lg))]`,children:[(0,x.jsx)(o,{id:`light`,label:`Light mode`,children:(0,x.jsx)(`div`,{className:`gap-lg -m-lg flex flex-col`,children:r()})}),(0,x.jsx)(o,{id:`dark`,label:`Dark mode`,children:(0,x.jsx)(`div`,{className:`gap-lg -m-lg flex flex-col`,children:r()})})]})]})]})})},C.__docgenInfo={description:``,methods:[],displayName:`ColorPrimitives`},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
  const [theme, setTheme] = useState<ThemeTabId>("light");
  const groups = groupPrimitiveEntries(primitives);
  const renderGroupSections = () => <div className={colorDocsGroupedPanelClassName}>
      <div className={colorDocsGroupedPanelInnerClassName}>
        {groups.map(({
        group,
        items
      }) => <section key={group} className={colorDocsGroupedSectionClassName}>
            <h2 className="typography-headline-03 text-text font-light capitalize">
              {group}
            </h2>
            <div role="row" className={cx(docsTableHeaderRowClassName, semanticTokenTableGridColsClassName)}>
              <div className="typography-label-semibold text-text min-w-0 truncate font-semibold">
                Name
              </div>
              <div className="typography-label-semibold text-text min-w-0 truncate font-semibold">
                CSS Token
              </div>
              <div className="typography-label-semibold text-text min-w-0 truncate font-semibold">
                HEX value
              </div>
              <div className="typography-label-semibold text-text min-w-0 truncate font-semibold">
                Preview
              </div>
            </div>
            <div className="gap-sm flex flex-col" role="presentation">
              {items.map(({
            key,
            cssVar
          }) => <BasicColorRow key={key} cssVar={cssVar} previewTheme={theme} tokenKey={key} />)}
            </div>
          </section>)}
      </div>
    </div>;
  return <div className="gap-xlg text-text typography-body flex w-full min-w-0 flex-col">
      <div className="gap-xlg flex min-w-0 flex-col">
        <StorybookHeader title="Color Primitives" className="px-[80px] pt-[80px] pb-[48px]" />
        <div className="basic-colors-tabs">
          <style>
            {\`
              .basic-colors-tabs > div > div:first-child {
                display: none !important;
              }
            \`}
          </style>
          <Tabs selectedId={theme} onChange={id => {
          if (id === "light" || id === "dark") {
            setTheme(id);
          }
        }} size="md" radius="sharp" withSpacing={false} tabListClassName="ml-[calc(80px-2*var(--spacing-lg)+4px)] mr-[calc(80px-var(--spacing-lg))]">
            <Tab id="light" label="Light mode">
              <div className="gap-lg -m-lg flex flex-col">
                {renderGroupSections()}
              </div>
            </Tab>
            <Tab id="dark" label="Dark mode">
              <div className="gap-lg -m-lg flex flex-col">
                {renderGroupSections()}
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>;
}`,...C.parameters?.docs?.source}}},w=[`ColorPrimitives`]}))();export{C as ColorPrimitives,w as __namedExportsOrder,S as default};