import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{aX as j,aY as N,aW as t}from"./ContextMenuList-BJdKMI3z.js";import"./index-CY-HDqYb.js";import"./index-A6zbrgSY.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";import"./index-ZRCHFLd-.js";import"./sizes-BpUsT7VU.js";import"./colors-CoOIoG7W.js";const A={title:"Components/List/ListItem",component:t,argTypes:{level:{control:"inline-radio",options:N},type:{control:"inline-radio",options:j},index:{control:"number"}}},n={args:{level:1,type:"unordered",index:1,children:"List item text"}},r={render:()=>e.jsxs("div",{className:"gap-lg flex flex-col",children:[e.jsxs("div",{className:"gap-sm flex flex-col",children:[e.jsx("span",{className:"typography-body-small text-text-accent",children:"Level 1"}),e.jsxs("div",{className:"gap-sm flex flex-col",children:[e.jsx(t,{level:1,type:"ordered",index:1,children:"First ordered item at level 1"}),e.jsx(t,{level:1,type:"ordered",index:2,children:"Second ordered item at level 1"}),e.jsx(t,{level:1,type:"unordered",children:"First unordered item at level 1"}),e.jsx(t,{level:1,type:"unordered",children:"Second unordered item at level 1"})]})]}),e.jsxs("div",{className:"gap-sm flex flex-col",children:[e.jsx("span",{className:"typography-body-small text-text-accent",children:"Level 2"}),e.jsxs("div",{className:"gap-sm flex flex-col",children:[e.jsx(t,{level:2,type:"ordered",index:1,children:"First ordered item at level 2"}),e.jsx(t,{level:2,type:"ordered",index:2,children:"Second ordered item at level 2"}),e.jsx(t,{level:2,type:"unordered",children:"First unordered item at level 2"}),e.jsx(t,{level:2,type:"unordered",children:"Second unordered item at level 2"})]})]})]})},d={render:()=>e.jsxs("div",{className:"gap-lg flex flex-col",children:[e.jsxs("div",{className:"gap-sm flex flex-col",children:[e.jsx("span",{className:"typography-body-small text-text-accent",children:"Ordered Lists"}),e.jsxs("div",{className:"gap-sm flex flex-col",children:[e.jsx(t,{level:1,type:"ordered",index:1,children:"First item"}),e.jsx(t,{level:1,type:"ordered",index:2,children:"Second item"}),e.jsx(t,{level:2,type:"ordered",index:1,children:"Nested first item (a.)"}),e.jsx(t,{level:2,type:"ordered",index:2,children:"Nested second item (b.)"})]})]}),e.jsxs("div",{className:"gap-sm flex flex-col",children:[e.jsx("span",{className:"typography-body-small text-text-accent",children:"Unordered Lists"}),e.jsxs("div",{className:"gap-sm flex flex-col",children:[e.jsx(t,{level:1,type:"unordered",children:"First item with dash (–)"}),e.jsx(t,{level:1,type:"unordered",children:"Second item with dash (–)"}),e.jsx(t,{level:2,type:"unordered",children:"Nested first item with bullet (•)"}),e.jsx(t,{level:2,type:"unordered",children:"Nested second item with bullet (•)"})]})]})]})},s={render:()=>e.jsxs("div",{className:"gap-sm flex flex-col",children:[e.jsx(t,{level:1,type:"ordered",index:1,children:"First main item"}),e.jsx(t,{level:2,type:"ordered",index:1,children:"First sub-item under main item 1"}),e.jsx(t,{level:2,type:"ordered",index:2,children:"Second sub-item under main item 1"}),e.jsx(t,{level:1,type:"ordered",index:2,children:"Second main item"}),e.jsx(t,{level:2,type:"unordered",children:"Mixed type: unordered sub-item under ordered main item"}),e.jsx(t,{level:1,type:"unordered",children:"Third main item (unordered)"}),e.jsx(t,{level:2,type:"unordered",children:"Sub-item under unordered main item"})]})},l={render:()=>e.jsxs("div",{className:"gap-sm flex max-w-md flex-col",children:[e.jsx(t,{level:1,type:"ordered",index:1,children:"This is a very long list item that demonstrates how the component handles text wrapping and maintains proper alignment with the marker. The text should wrap naturally while keeping the marker aligned at the top."}),e.jsx(t,{level:2,type:"ordered",index:1,children:"This is a nested item with equally long content to show that nested items also handle text wrapping properly while maintaining their indentation and marker alignment."}),e.jsx(t,{level:1,type:"unordered",children:"Another long item using unordered markers to demonstrate consistent behavior across different marker types and levels."})]})};var i,a,o;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    level: 1,
    type: "unordered",
    index: 1,
    children: "List item text"
  }
}`,...(o=(a=n.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};var m,c,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div className="gap-lg flex flex-col">
      <div className="gap-sm flex flex-col">
        <span className="typography-body-small text-text-accent">Level 1</span>
        <div className="gap-sm flex flex-col">
          <ListItem level={1} type="ordered" index={1}>
            First ordered item at level 1
          </ListItem>
          <ListItem level={1} type="ordered" index={2}>
            Second ordered item at level 1
          </ListItem>
          <ListItem level={1} type="unordered">
            First unordered item at level 1
          </ListItem>
          <ListItem level={1} type="unordered">
            Second unordered item at level 1
          </ListItem>
        </div>
      </div>
      <div className="gap-sm flex flex-col">
        <span className="typography-body-small text-text-accent">Level 2</span>
        <div className="gap-sm flex flex-col">
          <ListItem level={2} type="ordered" index={1}>
            First ordered item at level 2
          </ListItem>
          <ListItem level={2} type="ordered" index={2}>
            Second ordered item at level 2
          </ListItem>
          <ListItem level={2} type="unordered">
            First unordered item at level 2
          </ListItem>
          <ListItem level={2} type="unordered">
            Second unordered item at level 2
          </ListItem>
        </div>
      </div>
    </div>
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var x,v,h;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div className="gap-lg flex flex-col">
      <div className="gap-sm flex flex-col">
        <span className="typography-body-small text-text-accent">
          Ordered Lists
        </span>
        <div className="gap-sm flex flex-col">
          <ListItem level={1} type="ordered" index={1}>
            First item
          </ListItem>
          <ListItem level={1} type="ordered" index={2}>
            Second item
          </ListItem>
          <ListItem level={2} type="ordered" index={1}>
            Nested first item (a.)
          </ListItem>
          <ListItem level={2} type="ordered" index={2}>
            Nested second item (b.)
          </ListItem>
        </div>
      </div>
      <div className="gap-sm flex flex-col">
        <span className="typography-body-small text-text-accent">
          Unordered Lists
        </span>
        <div className="gap-sm flex flex-col">
          <ListItem level={1} type="unordered">
            First item with dash (–)
          </ListItem>
          <ListItem level={1} type="unordered">
            Second item with dash (–)
          </ListItem>
          <ListItem level={2} type="unordered">
            Nested first item with bullet (•)
          </ListItem>
          <ListItem level={2} type="unordered">
            Nested second item with bullet (•)
          </ListItem>
        </div>
      </div>
    </div>
}`,...(h=(v=d.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var y,u,L;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div className="gap-sm flex flex-col">
      <ListItem level={1} type="ordered" index={1}>
        First main item
      </ListItem>
      <ListItem level={2} type="ordered" index={1}>
        First sub-item under main item 1
      </ListItem>
      <ListItem level={2} type="ordered" index={2}>
        Second sub-item under main item 1
      </ListItem>
      <ListItem level={1} type="ordered" index={2}>
        Second main item
      </ListItem>
      <ListItem level={2} type="unordered">
        Mixed type: unordered sub-item under ordered main item
      </ListItem>
      <ListItem level={1} type="unordered">
        Third main item (unordered)
      </ListItem>
      <ListItem level={2} type="unordered">
        Sub-item under unordered main item
      </ListItem>
    </div>
}`,...(L=(u=s.parameters)==null?void 0:u.docs)==null?void 0:L.source}}};var g,f,I;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div className="gap-sm flex max-w-md flex-col">
      <ListItem level={1} type="ordered" index={1}>
        This is a very long list item that demonstrates how the component
        handles text wrapping and maintains proper alignment with the marker.
        The text should wrap naturally while keeping the marker aligned at the
        top.
      </ListItem>
      <ListItem level={2} type="ordered" index={1}>
        This is a nested item with equally long content to show that nested
        items also handle text wrapping properly while maintaining their
        indentation and marker alignment.
      </ListItem>
      <ListItem level={1} type="unordered">
        Another long item using unordered markers to demonstrate consistent
        behavior across different marker types and levels.
      </ListItem>
    </div>
}`,...(I=(f=l.parameters)==null?void 0:f.docs)==null?void 0:I.source}}};const E=["Playground","Levels","Types","NestedStructure","LongContent"];export{r as Levels,l as LongContent,s as NestedStructure,n as Playground,d as Types,E as __namedExportsOrder,A as default};
