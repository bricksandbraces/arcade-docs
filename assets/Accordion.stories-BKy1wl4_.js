import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{A as n,a as r,b as u}from"./ContextMenuList-BNRGalTU.js";import"./index-CY-HDqYb.js";import"./index-A6zbrgSY.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";import"./index-ZRCHFLd-.js";import"./sizes-BpUsT7VU.js";import"./colors-CoOIoG7W.js";const S={title:"WIP Components/Accordion/Accordion",component:n,parameters:{layout:"padded"}},t="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",o={render:()=>e.jsxs(n,{className:"max-w-lg",children:[e.jsx(r,{title:"Accordion title",size:"medium",defaultOpen:!0,children:t}),e.jsx(r,{title:"Second item",size:"medium",children:t}),e.jsx(r,{title:"Third item",size:"medium",children:t})]})},i={render:()=>e.jsx("div",{className:"gap-xlg flex max-w-4xl flex-col",children:u.map(c=>e.jsx(n,{className:"max-w-lg",children:e.jsx(r,{title:`Title (${c})`,size:c,children:t})},c))})};var m,d,s;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <Accordion className="max-w-lg">
      <AccordionItem title="Accordion title" size="medium" defaultOpen>
        {body}
      </AccordionItem>
      <AccordionItem title="Second item" size="medium">
        {body}
      </AccordionItem>
      <AccordionItem title="Third item" size="medium">
        {body}
      </AccordionItem>
    </Accordion>
}`,...(s=(d=o.parameters)==null?void 0:d.docs)==null?void 0:s.source}}};var a,l,p;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => <div className="gap-xlg flex max-w-4xl flex-col">
      {AccordionItemSizes.map(size => <Accordion key={size} className="max-w-lg">
          <AccordionItem title={\`Title (\${size})\`} size={size}>
            {body}
          </AccordionItem>
        </Accordion>)}
    </div>
}`,...(p=(l=i.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const b=["Playground","Sizes"];export{o as Playground,i as Sizes,b as __namedExportsOrder,S as default};
