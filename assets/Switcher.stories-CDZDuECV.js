import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{bB as f,bC as s,bD as t,aH as d,bE as z}from"./ContextMenuList-BJdKMI3z.js";import{R as u}from"./index-CY-HDqYb.js";import"./index-A6zbrgSY.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";import"./index-ZRCHFLd-.js";import"./sizes-BpUsT7VU.js";import"./colors-CoOIoG7W.js";const F={title:"WIP Components/Switcher/Switcher",component:s,argTypes:{kind:{control:"inline-radio",options:f}},parameters:{layout:"padded"}},c={render:function(n){const[a,r]=u.useState("a");return e.jsxs(s,{...n,value:a,onValueChange:r,children:[e.jsx(t,{value:"a",children:"Item"}),e.jsx(t,{value:"b",children:"Item"}),e.jsx(t,{value:"c",children:"Item"})]})},args:{kind:"text"}},i={render:function(){const[n,a]=u.useState("1");return e.jsx(s,{value:n,onValueChange:a,kind:"text",children:["1","2","3","4","5"].map(r=>e.jsx(t,{value:r,children:"Item"},r))})}},o={render:function(){const[n,a]=u.useState("a");return e.jsxs(s,{value:n,onValueChange:a,kind:"icon",children:[e.jsx(t,{value:"a",children:e.jsx(d,{className:"stroke-icon size-4",stroke:1.5})}),e.jsx(t,{value:"b",children:e.jsx(d,{className:"stroke-icon size-4",stroke:1.5})}),e.jsx(t,{value:"c",children:e.jsx(d,{className:"stroke-icon size-4",stroke:1.5})})]})}},l={render:function(){const[n,a]=u.useState("m");return e.jsx("div",{className:"gap-lg flex flex-col",children:z.map(r=>e.jsxs(s,{value:n,onValueChange:a,children:[e.jsx(t,{value:"s",size:r,children:"S"}),e.jsx(t,{value:"m",size:r,children:"M"}),e.jsx(t,{value:"l",size:r,children:"L"})]},r))})}};var h,S,v;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: function Render(args) {
    const [value, setValue] = React.useState("a");
    return <Switcher {...args} value={value} onValueChange={setValue}>
        <SwitcherItem value="a">Item</SwitcherItem>
        <SwitcherItem value="b">Item</SwitcherItem>
        <SwitcherItem value="c">Item</SwitcherItem>
      </Switcher>;
  },
  args: {
    kind: "text"
  }
}`,...(v=(S=c.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var I,p,w;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: function Render() {
    const [value, setValue] = React.useState("1");
    return <Switcher value={value} onValueChange={setValue} kind="text">
        {["1", "2", "3", "4", "5"].map(v => <SwitcherItem key={v} value={v}>
            Item
          </SwitcherItem>)}
      </Switcher>;
  }
}`,...(w=(p=i.parameters)==null?void 0:p.docs)==null?void 0:w.source}}};var x,g,k;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: function Render() {
    const [value, setValue] = React.useState("a");
    return <Switcher value={value} onValueChange={setValue} kind="icon">
        <SwitcherItem value="a">
          <IconArrowRight className="stroke-icon size-4" stroke={1.5} />
        </SwitcherItem>
        <SwitcherItem value="b">
          <IconArrowRight className="stroke-icon size-4" stroke={1.5} />
        </SwitcherItem>
        <SwitcherItem value="c">
          <IconArrowRight className="stroke-icon size-4" stroke={1.5} />
        </SwitcherItem>
      </Switcher>;
  }
}`,...(k=(g=o.parameters)==null?void 0:g.docs)==null?void 0:k.source}}};var j,V,R;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: function Render() {
    const [value, setValue] = React.useState("m");
    return <div className="gap-lg flex flex-col">
        {SwitcherItemSizes.map(size => <Switcher key={size} value={value} onValueChange={setValue}>
            <SwitcherItem value="s" size={size}>
              S
            </SwitcherItem>
            <SwitcherItem value="m" size={size}>
              M
            </SwitcherItem>
            <SwitcherItem value="l" size={size}>
              L
            </SwitcherItem>
          </Switcher>)}
      </div>;
  }
}`,...(R=(V=l.parameters)==null?void 0:V.docs)==null?void 0:R.source}}};const L=["Playground","TextFiveItems","IconKind","ItemSizes"];export{o as IconKind,l as ItemSizes,c as Playground,i as TextFiveItems,L as __namedExportsOrder,F as default};
