import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as d}from"./index-A6zbrgSY.js";import{S as m,c as n,d as r,q as c,r as p,M as x}from"./TypographyTokenRow-BIdYFNSc.js";import"./StorybookHeader-CuKMbQLm.js";import"./index-CY-HDqYb.js";import"./ContextMenu-BIXelnGu.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";const h={"max-w-modal-lg":"704px","min-w-modal-lg":"704px","max-w-modal-md":"480px","min-w-modal-md":"480px","max-w-modal-sm":"375px","min-w-modal-sm":"375px","max-w-modal-xlg":"960px","min-w-modal-xlg":"960px"},y={title:"Essentials/Sizes/Modal",parameters:{docs:{description:{component:"Modal min- and max-width utilities. There is no visual preview; values come from the token source."}}}},o=()=>{const i=p(h);return e.jsx(m,{title:"Modal",children:e.jsxs("section",{className:n,children:[e.jsxs("div",{role:"row",className:d(r,c),children:[e.jsx("div",{className:"typography-label-semibold text-text min-w-0 truncate font-semibold",children:"Token"}),e.jsx("div",{className:"typography-label-semibold text-text min-w-0 truncate font-semibold",children:"Min-width"}),e.jsx("div",{className:"typography-label-semibold text-text min-w-0 truncate font-semibold",children:"Max-width"})]}),e.jsx("div",{className:"gap-sm flex flex-col",role:"presentation",children:i.map(a=>e.jsx(x,{maxWidth:a.maxWidth,minWidth:a.minWidth,tokenLabel:a.tokenLabel},a.sizeId))})]})})};o.__docgenInfo={description:"",methods:[],displayName:"Modal"};o.__docgenInfo={description:"",methods:[],displayName:"Modal"};var s,t,l;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
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
}`,...(l=(t=o.parameters)==null?void 0:t.docs)==null?void 0:l.source}}};const S=["Modal"];export{o as Modal,S as __namedExportsOrder,y as default};
