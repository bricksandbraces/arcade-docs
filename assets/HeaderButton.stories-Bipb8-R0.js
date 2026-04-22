import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{au as n}from"./ContextMenuList-DeCYJw7n.js";import"./index-CY-HDqYb.js";import"./index-A6zbrgSY.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";const y={title:"WIP Components/Header/Button",component:n,argTypes:{selected:{control:"boolean"},disabled:{control:"boolean"},children:{control:"text"}}},s={args:{selected:!1,disabled:!1,children:"Link"}},a={args:{selected:!1,disabled:!1,children:"Link"}},r={args:{selected:!0,disabled:!1,children:"Link"}},d={args:{selected:!1,disabled:!0,children:"Link"}},l={render:()=>e.jsxs("div",{className:"gap-md flex",children:[e.jsx(n,{selected:!1,disabled:!1,children:"Enabled"}),e.jsx(n,{selected:!0,disabled:!1,children:"Selected"}),e.jsx(n,{selected:!1,disabled:!0,children:"Disabled"})]})};var t,o,c;s.parameters={...s.parameters,docs:{...(t=s.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    selected: false,
    disabled: false,
    children: "Link"
  }
}`,...(c=(o=s.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};var i,m,u;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    selected: false,
    disabled: false,
    children: "Link"
  }
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,b,f;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    selected: true,
    disabled: false,
    children: "Link"
  }
}`,...(f=(b=r.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var g,h,x;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    selected: false,
    disabled: true,
    children: "Link"
  }
}`,...(x=(h=d.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var S,k,B;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div className="gap-md flex">
      <HeaderButton selected={false} disabled={false}>
        Enabled
      </HeaderButton>
      <HeaderButton selected={true} disabled={false}>
        Selected
      </HeaderButton>
      <HeaderButton selected={false} disabled={true}>
        Disabled
      </HeaderButton>
    </div>
}`,...(B=(k=l.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};const P=["Playground","Enabled","Selected","Disabled","AllStates"];export{l as AllStates,d as Disabled,a as Enabled,s as Playground,r as Selected,P as __namedExportsOrder,y as default};
