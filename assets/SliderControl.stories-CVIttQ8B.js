import{j as b}from"./jsx-runtime-D_zvdyIk.js";import{r as o}from"./index-0yr9KlQE.js";import{b2 as p}from"./ContextMenuList-iLopGvLG.js";import"./index-tymuTqDW.js";import"./index-DotmK1FS.js";import"./index-ChaIqHV-.js";import"./borders-N_bRvfGw.js";import"./colors-mvAPBTAn.js";const E={title:"F/Slider/SliderControl",component:p,argTypes:{value:{control:{type:"range",min:0,max:100,step:1}},min:{control:{type:"number"}},max:{control:{type:"number"}},step:{control:{type:"number"}},disabled:{control:"boolean"}}},u=e=>{const[c,a]=o.useState(e.value||50);return o.useEffect(()=>{a(e.value)},[e.value]),b.jsx(p,{...e,value:c,onChange:a})},r={render:u,args:{value:50,min:0,max:100,step:1,disabled:!1}},t={render:u,args:{value:30,min:0,max:100,step:1,disabled:!0}};var n,s,l;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: SliderControlWithState,
  args: {
    value: 50,
    min: 0,
    max: 100,
    step: 1,
    disabled: false
  }
}`,...(l=(s=r.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var m,i,d;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: SliderControlWithState,
  args: {
    value: 30,
    min: 0,
    max: 100,
    step: 1,
    disabled: true
  }
}`,...(d=(i=t.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const j=["Playground","Disabled"];export{t as Disabled,r as Playground,j as __namedExportsOrder,E as default};
