import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{af as t}from"./ContextMenuList-B2WBBjRu.js";import"./index-0yr9KlQE.js";import"./index-tymuTqDW.js";import"./index-DotmK1FS.js";import"./index-ChaIqHV-.js";import"./borders-N_bRvfGw.js";import"./colors-mvAPBTAn.js";const A={title:"WIP Components/Header/Button",component:t,argTypes:{selected:{control:"boolean"},disabled:{control:"boolean"},children:{control:"text"}}},s={args:{selected:!1,disabled:!1,children:"Link"}},a={args:{selected:!1,disabled:!1,children:"Link"}},r={args:{selected:!0,disabled:!1,children:"Link"}},d={args:{selected:!1,disabled:!0,children:"Link"}},l={render:()=>e.jsxs("div",{className:"gap-md flex",children:[e.jsx(t,{selected:!1,disabled:!1,children:"Enabled"}),e.jsx(t,{selected:!0,disabled:!1,children:"Selected"}),e.jsx(t,{selected:!1,disabled:!0,children:"Disabled"})]})};var n,o,c;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    selected: false,
    disabled: false,
    children: "Link"
  }
}`,...(c=(o=s.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};var i,m,p;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    selected: false,
    disabled: false,
    children: "Link"
  }
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,f,b;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    selected: true,
    disabled: false,
    children: "Link"
  }
}`,...(b=(f=r.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var g,h,x;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(B=(k=l.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};const N=["Playground","Enabled","Selected","Disabled","AllStates"];export{l as AllStates,d as Disabled,a as Enabled,s as Playground,r as Selected,N as __namedExportsOrder,A as default};
