import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as j}from"./index-CY-HDqYb.js";import{b as w,a as d}from"./ContextMenu-DwPyJibk.js";import"./index-A6zbrgSY.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";const k={title:"Fabian Supervision/Accordion/AccordionItem",component:d,parameters:{layout:"padded"},argTypes:{size:{control:"inline-radio",options:w},disabled:{control:"boolean"},defaultOpen:{control:"boolean"},title:{control:"text"}},args:{title:"Accordion title",size:"medium",defaultOpen:!1,disabled:!1,children:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."},render:e=>n.jsx("div",{className:"w-[512px] max-w-full",children:n.jsx(d,{...e})})},r={},a={args:{defaultOpen:!0}},s={args:{disabled:!0}},o={args:{disabled:!0,defaultOpen:!0}},t={render:e=>n.jsx("div",{className:"gap-md flex w-[512px] max-w-full flex-col",children:w.map(i=>j.createElement(d,{...e,key:i,size:i,title:`${e.title} (${i})`}))})};var l,c,m;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,u,g;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    defaultOpen: true
  }
}`,...(g=(u=a.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var f,x,b;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(b=(x=s.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var O,S,z;o.parameters={...o.parameters,docs:{...(O=o.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultOpen: true
  }
}`,...(z=(S=o.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var A,y,v;t.parameters={...t.parameters,docs:{...(A=t.parameters)==null?void 0:A.docs,source:{originalSource:'{\n  render: args => <div className="gap-md flex w-[512px] max-w-full flex-col">\n      {AccordionItemSizes.map(size => <AccordionItem {...args} key={size} size={size} title={`${args.title} (${size})`} />)}\n    </div>\n}',...(v=(y=t.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};const P=["Playground","Open","Disabled","DisabledOpen","AllSizes"];export{t as AllSizes,s as Disabled,o as DisabledOpen,a as Open,r as Playground,P as __namedExportsOrder,k as default};
