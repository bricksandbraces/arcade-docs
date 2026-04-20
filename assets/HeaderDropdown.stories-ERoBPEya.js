import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{al as d,am as n,an as t,ao as r}from"./ContextMenuList-CMnuhwhv.js";import"./index-CY-HDqYb.js";import"./index-A6zbrgSY.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";import"./index-ZRCHFLd-.js";import"./sizes-BpUsT7VU.js";import"./colors-CoOIoG7W.js";const z={title:"WIP Components/Header/Dropdown",component:d,argTypes:{selected:{control:"boolean"},disabled:{control:"boolean"},open:{control:"boolean"}}},o={render:c=>e.jsxs(d,{selected:c.selected,disabled:c.disabled,open:c.open,children:[e.jsx(n,{children:"Dropdown"}),e.jsxs(t,{children:[e.jsx(r,{children:"Item Title"}),e.jsx(r,{children:"Item Title"}),e.jsx(r,{children:"Item Title"}),e.jsx(r,{children:"Item Title"})]})]}),args:{selected:!1,disabled:!1,open:!1}},s={render:()=>e.jsxs(d,{selected:!0,children:[e.jsx(n,{children:"Selected Dropdown"}),e.jsxs(t,{children:[e.jsx(r,{children:"Item Title"}),e.jsx(r,{children:"Item Title"}),e.jsx(r,{children:"Item Title"})]})]})},a={render:()=>e.jsxs(d,{disabled:!0,children:[e.jsx(n,{children:"Disabled Dropdown"}),e.jsxs(t,{children:[e.jsx(r,{children:"Item Title"}),e.jsx(r,{children:"Item Title"})]})]})},i={render:()=>e.jsxs(d,{open:!0,children:[e.jsx(n,{children:"Always Open"}),e.jsxs(t,{children:[e.jsx(r,{children:"Item Title"}),e.jsx(r,{children:"Item Title"}),e.jsx(r,{children:"Item Title"})]})]})},l={render:()=>e.jsxs(d,{children:[e.jsx(n,{children:"Many Items"}),e.jsxs(t,{children:[e.jsx(r,{children:"First Item"}),e.jsx(r,{children:"Second Item"}),e.jsx(r,{children:"Third Item"}),e.jsx(r,{children:"Fourth Item"}),e.jsx(r,{children:"Fifth Item"}),e.jsx(r,{children:"Sixth Item"})]})]})},m={render:()=>e.jsxs(d,{children:[e.jsx(n,{children:"Mixed States"}),e.jsxs(t,{children:[e.jsx(r,{children:"Enabled Item"}),e.jsx(r,{disabled:!0,children:"Disabled Item"}),e.jsx(r,{children:"Another Item"}),e.jsx(r,{disabled:!0,children:"Another Disabled"}),e.jsx(r,{children:"Final Item"})]})]})},p={render:()=>e.jsxs("div",{className:"gap-lg flex flex-col",children:[e.jsx("div",{className:"font-semibold",children:"All State Combinations"}),e.jsxs("div",{className:"gap-md flex items-center",children:[e.jsx("span",{className:"w-32 text-sm",children:"default:"}),e.jsxs(d,{children:[e.jsx(n,{children:"Default"}),e.jsxs(t,{children:[e.jsx(r,{children:"Item 1"}),e.jsx(r,{children:"Item 2"})]})]})]}),e.jsxs("div",{className:"gap-md flex items-center",children:[e.jsx("span",{className:"w-32 text-sm",children:"selected:"}),e.jsxs(d,{selected:!0,children:[e.jsx(n,{children:"Selected"}),e.jsxs(t,{children:[e.jsx(r,{children:"Item 1"}),e.jsx(r,{children:"Item 2"})]})]})]}),e.jsxs("div",{className:"gap-md flex items-center",children:[e.jsx("span",{className:"w-32 text-sm",children:"disabled:"}),e.jsxs(d,{disabled:!0,children:[e.jsx(n,{children:"Disabled"}),e.jsxs(t,{children:[e.jsx(r,{children:"Item 1"}),e.jsx(r,{children:"Item 2"})]})]})]}),e.jsxs("div",{className:"gap-md flex items-center",children:[e.jsx("span",{className:"w-32 text-sm",children:"selected + disabled:"}),e.jsxs(d,{selected:!0,disabled:!0,children:[e.jsx(n,{children:"Selected + Disabled"}),e.jsxs(t,{children:[e.jsx(r,{children:"Item 1"}),e.jsx(r,{children:"Item 2"})]})]})]})]})};var D,w,I;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => <HeaderDropdown selected={args.selected} disabled={args.disabled} open={args.open}>
      <HeaderDropdownButton>Dropdown</HeaderDropdownButton>
      <HeaderDropdownList>
        <HeaderDropdownListItem>Item Title</HeaderDropdownListItem>
        <HeaderDropdownListItem>Item Title</HeaderDropdownListItem>
        <HeaderDropdownListItem>Item Title</HeaderDropdownListItem>
        <HeaderDropdownListItem>Item Title</HeaderDropdownListItem>
      </HeaderDropdownList>
    </HeaderDropdown>,
  args: {
    selected: false,
    disabled: false,
    open: false
  }
}`,...(I=(w=o.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var H,x,h;s.parameters={...s.parameters,docs:{...(H=s.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <HeaderDropdown selected>
      <HeaderDropdownButton>Selected Dropdown</HeaderDropdownButton>
      <HeaderDropdownList>
        <HeaderDropdownListItem>Item Title</HeaderDropdownListItem>
        <HeaderDropdownListItem>Item Title</HeaderDropdownListItem>
        <HeaderDropdownListItem>Item Title</HeaderDropdownListItem>
      </HeaderDropdownList>
    </HeaderDropdown>
}`,...(h=(x=s.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var L,j,u;a.parameters={...a.parameters,docs:{...(L=a.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <HeaderDropdown disabled>
      <HeaderDropdownButton>Disabled Dropdown</HeaderDropdownButton>
      <HeaderDropdownList>
        <HeaderDropdownListItem>Item Title</HeaderDropdownListItem>
        <HeaderDropdownListItem>Item Title</HeaderDropdownListItem>
      </HeaderDropdownList>
    </HeaderDropdown>
}`,...(u=(j=a.parameters)==null?void 0:j.docs)==null?void 0:u.source}}};var b,f,T;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <HeaderDropdown open>
      <HeaderDropdownButton>Always Open</HeaderDropdownButton>
      <HeaderDropdownList>
        <HeaderDropdownListItem>Item Title</HeaderDropdownListItem>
        <HeaderDropdownListItem>Item Title</HeaderDropdownListItem>
        <HeaderDropdownListItem>Item Title</HeaderDropdownListItem>
      </HeaderDropdownList>
    </HeaderDropdown>
}`,...(T=(f=i.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};var g,S,B;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <HeaderDropdown>
      <HeaderDropdownButton>Many Items</HeaderDropdownButton>
      <HeaderDropdownList>
        <HeaderDropdownListItem>First Item</HeaderDropdownListItem>
        <HeaderDropdownListItem>Second Item</HeaderDropdownListItem>
        <HeaderDropdownListItem>Third Item</HeaderDropdownListItem>
        <HeaderDropdownListItem>Fourth Item</HeaderDropdownListItem>
        <HeaderDropdownListItem>Fifth Item</HeaderDropdownListItem>
        <HeaderDropdownListItem>Sixth Item</HeaderDropdownListItem>
      </HeaderDropdownList>
    </HeaderDropdown>
}`,...(B=(S=l.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};var N,v,A;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <HeaderDropdown>
      <HeaderDropdownButton>Mixed States</HeaderDropdownButton>
      <HeaderDropdownList>
        <HeaderDropdownListItem>Enabled Item</HeaderDropdownListItem>
        <HeaderDropdownListItem disabled>Disabled Item</HeaderDropdownListItem>
        <HeaderDropdownListItem>Another Item</HeaderDropdownListItem>
        <HeaderDropdownListItem disabled>
          Another Disabled
        </HeaderDropdownListItem>
        <HeaderDropdownListItem>Final Item</HeaderDropdownListItem>
      </HeaderDropdownList>
    </HeaderDropdown>
}`,...(A=(v=m.parameters)==null?void 0:v.docs)==null?void 0:A.source}}};var F,y,M;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div className="gap-lg flex flex-col">
      <div className="font-semibold">All State Combinations</div>

      <div className="gap-md flex items-center">
        <span className="w-32 text-sm">default:</span>
        <HeaderDropdown>
          <HeaderDropdownButton>Default</HeaderDropdownButton>
          <HeaderDropdownList>
            <HeaderDropdownListItem>Item 1</HeaderDropdownListItem>
            <HeaderDropdownListItem>Item 2</HeaderDropdownListItem>
          </HeaderDropdownList>
        </HeaderDropdown>
      </div>

      <div className="gap-md flex items-center">
        <span className="w-32 text-sm">selected:</span>
        <HeaderDropdown selected>
          <HeaderDropdownButton>Selected</HeaderDropdownButton>
          <HeaderDropdownList>
            <HeaderDropdownListItem>Item 1</HeaderDropdownListItem>
            <HeaderDropdownListItem>Item 2</HeaderDropdownListItem>
          </HeaderDropdownList>
        </HeaderDropdown>
      </div>

      <div className="gap-md flex items-center">
        <span className="w-32 text-sm">disabled:</span>
        <HeaderDropdown disabled>
          <HeaderDropdownButton>Disabled</HeaderDropdownButton>
          <HeaderDropdownList>
            <HeaderDropdownListItem>Item 1</HeaderDropdownListItem>
            <HeaderDropdownListItem>Item 2</HeaderDropdownListItem>
          </HeaderDropdownList>
        </HeaderDropdown>
      </div>

      <div className="gap-md flex items-center">
        <span className="w-32 text-sm">selected + disabled:</span>
        <HeaderDropdown selected disabled>
          <HeaderDropdownButton>Selected + Disabled</HeaderDropdownButton>
          <HeaderDropdownList>
            <HeaderDropdownListItem>Item 1</HeaderDropdownListItem>
            <HeaderDropdownListItem>Item 2</HeaderDropdownListItem>
          </HeaderDropdownList>
        </HeaderDropdown>
      </div>
    </div>
}`,...(M=(y=p.parameters)==null?void 0:y.docs)==null?void 0:M.source}}};const G=["Playground","Selected","Disabled","ForcedOpen","WithManyItems","WithMixedStates","AllCombinations"];export{p as AllCombinations,a as Disabled,i as ForcedOpen,o as Playground,s as Selected,l as WithManyItems,m as WithMixedStates,G as __namedExportsOrder,z as default};
