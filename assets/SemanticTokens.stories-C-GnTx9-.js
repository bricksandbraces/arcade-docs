import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Di as n,Ei as r,Mi as i,ca as a,qi as o,t as s,vn as c,yn as l}from"./iframe-BmX5hFjR.js";import{n as u}from"./storybook-b67lHjtq.js";import{C as d,N as f,S as p,T as m,h,k as g,s as _,t as v,w as y}from"./docs-C78L_WF9.js";var b,x,S,C,w,T;e((()=>{s(),n(),b=t(i(),1),x=t(a(),1),v(),S=o(),C={title:`Essentials/Colors/Color Tokens`,parameters:{a11y:{test:`off`},chromatic:{disableSnapshot:!0}}},w=()=>{let[e,t]=(0,x.useState)(`light`),n=g(r.light),i=()=>(0,S.jsx)(`div`,{className:p,children:(0,S.jsx)(`div`,{className:d,children:n.map(({group:t,items:n})=>(0,S.jsxs)(`section`,{className:y,children:[(0,S.jsx)(`h2`,{className:`typography-headline-03 text-text font-light capitalize`,children:t}),(0,S.jsxs)(`div`,{role:`row`,className:(0,b.default)(m,f),children:[(0,S.jsx)(`div`,{className:`typography-label-semibold text-text min-w-0 truncate font-semibold`,children:`Name`}),(0,S.jsx)(`div`,{className:`typography-label-semibold text-text min-w-0 truncate font-semibold`,children:`Description`}),(0,S.jsx)(`div`,{className:`typography-label-semibold text-text min-w-0 truncate font-semibold`,children:`HEX value`}),(0,S.jsx)(`div`,{className:`typography-label-semibold text-text min-w-0 truncate font-semibold`,children:`Preview`})]}),(0,S.jsx)(`div`,{className:`gap-sm flex flex-col`,role:`presentation`,children:n.map(({key:t})=>(0,S.jsx)(_,{tokenKey:t,previewTheme:e,description:h(t)},t))})]},t))})});return(0,S.jsx)(`div`,{className:`gap-xlg text-text typography-body flex w-full min-w-0 flex-col`,children:(0,S.jsxs)(`div`,{className:`gap-xlg flex min-w-0 flex-col`,children:[(0,S.jsx)(u,{title:`Color Tokens`,className:`px-[80px] pt-[80px] pb-[48px]`}),(0,S.jsx)(`div`,{className:`semantic-tokens-tabs`,children:(0,S.jsxs)(l,{selectedId:e,onChange:e=>{(e===`light`||e===`dark`)&&t(e)},size:`md`,radius:`sharp`,withSpacing:!1,tabListClassName:`ml-[calc(80px-2*var(--spacing-lg)+4px)] mr-[calc(80px-var(--spacing-lg))]`,children:[(0,S.jsx)(c,{id:`light`,label:`Light mode`,children:(0,S.jsx)(`div`,{className:`gap-lg -m-lg flex flex-col`,children:i()})}),(0,S.jsx)(c,{id:`dark`,label:`Dark mode`,children:(0,S.jsx)(`div`,{className:`gap-lg -m-lg flex flex-col`,children:i()})})]})})]})})},w.__docgenInfo={description:``,methods:[],displayName:`ColorTokens`},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
  const [theme, setTheme] = useState<ThemeTabId>("light");
  const groups = groupSemanticEntries(semanticals.light);
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
                Description
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
            key
          }) => <SemanticTokenRow key={key} tokenKey={key} previewTheme={theme} description={getSemanticTokenDescription(key)} />)}
            </div>
          </section>)}
      </div>
    </div>;
  return <div className="gap-xlg text-text typography-body flex w-full min-w-0 flex-col">
      <div className="gap-xlg flex min-w-0 flex-col">
        <StorybookHeader title="Color Tokens" className="px-[80px] pt-[80px] pb-[48px]" />
        <div className="semantic-tokens-tabs">
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
}`,...w.parameters?.docs?.source}}},T=[`ColorTokens`]}))();export{w as ColorTokens,T as __namedExportsOrder,C as default};