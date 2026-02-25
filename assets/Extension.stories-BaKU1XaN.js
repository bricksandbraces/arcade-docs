import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{ab as _,ac as b}from"./ContextMenuList-C0nT4XLm.js";import"./index-CY-HDqYb.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";import"./index-ZRCHFLd-.js";import"./borders-N_bRvfGw.js";import"./colors-mvAPBTAn.js";const B={title:"WIP Components/FileUpload/Extension",component:b,argTypes:{extension:{control:"inline-radio",options:_}}},s={args:{extension:"pdf"}},r={render:()=>e.jsx("div",{className:"gap-md flex items-center",children:_.map(p=>e.jsxs("div",{className:"gap-xs flex flex-col items-center",children:[e.jsx(b,{extension:p}),e.jsx("span",{className:"text-text-secondary text-xs",children:p})]},p))})},n={args:{extension:"pdf"}},a={args:{extension:"png"}},o={args:{extension:"jpg"}},t={args:{extension:"json"}},c={args:{extension:"csv"}},i={args:{extension:"svg"}};var m,d,x;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    extension: "pdf"
  }
}`,...(x=(d=s.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var l,g,u;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <div className="gap-md flex items-center">
      {ExtensionTypes.map(extension => <div key={extension} className="gap-xs flex flex-col items-center">
          <Extension extension={extension} />
          <span className="text-text-secondary text-xs">{extension}</span>
        </div>)}
    </div>
}`,...(u=(g=r.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var S,f,j;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    extension: "pdf"
  }
}`,...(j=(f=n.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var v,N,E;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    extension: "png"
  }
}`,...(E=(N=a.parameters)==null?void 0:N.docs)==null?void 0:E.source}}};var P,y,G;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    extension: "jpg"
  }
}`,...(G=(y=o.parameters)==null?void 0:y.docs)==null?void 0:G.source}}};var J,V,h;t.parameters={...t.parameters,docs:{...(J=t.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    extension: "json"
  }
}`,...(h=(V=t.parameters)==null?void 0:V.docs)==null?void 0:h.source}}};var C,F,O;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    extension: "csv"
  }
}`,...(O=(F=c.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};var T,A,D;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    extension: "svg"
  }
}`,...(D=(A=i.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};const H=["Playground","AllExtensions","PDF","PNG","JPG","JSON","CSV","SVG"];export{r as AllExtensions,c as CSV,o as JPG,t as JSON,n as PDF,a as PNG,s as Playground,i as SVG,H as __namedExportsOrder,B as default};
