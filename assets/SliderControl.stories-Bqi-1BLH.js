import{j as R}from"./jsx-runtime-D_zvdyIk.js";import{r as D}from"./index-0yr9KlQE.js";import{b2 as M}from"./ContextMenuList-Dq92F7hd.js";import"./index-tymuTqDW.js";import"./index-DotmK1FS.js";import"./index-ChaIqHV-.js";import"./borders-N_bRvfGw.js";import"./colors-mvAPBTAn.js";const A={title:"WIP Components/Slider/SliderControl",component:M,parameters:{layout:"centered"},argTypes:{value:{control:{type:"range",min:0,max:100,step:1}},min:{control:{type:"number"}},max:{control:{type:"number"}},step:{control:{type:"number"}},disabled:{control:"boolean"}}},e=l=>{const[j,P]=D.useState(l.value||50);return R.jsx(M,{...l,value:j,onChange:P})},r={render:e,args:{value:50,min:0,max:100,step:1,disabled:!1}},a={render:e,args:{value:60,min:0,max:100,step:1,disabled:!1}},n={render:e,args:{value:30,min:0,max:100,step:1,disabled:!0}},s={render:e,args:{value:25,min:0,max:50,step:5,disabled:!1}},t={render:e,args:{value:0,min:0,max:100,step:1,disabled:!1}},o={render:e,args:{value:100,min:0,max:100,step:1,disabled:!1}};var m,d,i;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: SliderControlWithState,
  args: {
    value: 50,
    min: 0,
    max: 100,
    step: 1,
    disabled: false
  }
}`,...(i=(d=r.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var p,c,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: SliderControlWithState,
  args: {
    value: 60,
    min: 0,
    max: 100,
    step: 1,
    disabled: false
  }
}`,...(u=(c=a.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var g,S,b;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: SliderControlWithState,
  args: {
    value: 30,
    min: 0,
    max: 100,
    step: 1,
    disabled: true
  }
}`,...(b=(S=n.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var x,v,f;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: SliderControlWithState,
  args: {
    value: 25,
    min: 0,
    max: 50,
    step: 5,
    disabled: false
  }
}`,...(f=(v=s.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var C,h,y;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: SliderControlWithState,
  args: {
    value: 0,
    min: 0,
    max: 100,
    step: 1,
    disabled: false
  }
}`,...(y=(h=t.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var W,E,V;o.parameters={...o.parameters,docs:{...(W=o.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: SliderControlWithState,
  args: {
    value: 100,
    min: 0,
    max: 100,
    step: 1,
    disabled: false
  }
}`,...(V=(E=o.parameters)==null?void 0:E.docs)==null?void 0:V.source}}};const B=["Playground","Enabled","Disabled","CustomRange","MinimalValue","MaximalValue"];export{s as CustomRange,n as Disabled,a as Enabled,o as MaximalValue,t as MinimalValue,r as Playground,B as __namedExportsOrder,A as default};
