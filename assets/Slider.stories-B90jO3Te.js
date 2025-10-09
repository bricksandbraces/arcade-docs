import{j as V}from"./jsx-runtime-D_zvdyIk.js";import{r as $}from"./index-0yr9KlQE.js";import{a$ as I}from"./ContextMenuList-B2WBBjRu.js";import"./index-tymuTqDW.js";import"./index-DotmK1FS.js";import"./index-ChaIqHV-.js";import"./borders-N_bRvfGw.js";import"./colors-mvAPBTAn.js";const K={title:"WIP Components/Slider/Slider",component:I,argTypes:{value:{control:"number"},min:{control:"number"},max:{control:"number"},step:{control:"number"},disabled:{control:"boolean"},label:{control:"text"},errorMessage:{control:"text"},warningMessage:{control:"text"},hideLabel:{control:"boolean"}},args:{label:"Label",value:50,min:0,max:100,step:1,disabled:!1,hideLabel:!1}},e=d=>{const[O,T]=$.useState(d.value||50);return V.jsx(I,{...d,value:O,onChange:T})},r={render:e},a={render:e,args:{label:"Label",value:50}},s={render:e,args:{label:"Label",value:50,disabled:!0}},n={render:e,args:{label:"Label",value:50,errorMessage:"Error Message"}},t={render:e,args:{label:"Label",value:50,warningMessage:"Warning Message"}},o={render:e,args:{label:"Custom Range",value:25,min:10,max:90,step:5}},l={render:e,args:{value:30,"aria-label":"Slider without visible label"}},i={render:e,args:{label:"Hidden Label",value:75,hideLabel:!0}};var c,u,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: SliderWithState
}`,...(m=(u=r.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var b,p,g;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: SliderWithState,
  args: {
    label: "Label",
    value: 50
  }
}`,...(g=(p=a.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var S,v,L;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: SliderWithState,
  args: {
    label: "Label",
    value: 50,
    disabled: true
  }
}`,...(L=(v=s.parameters)==null?void 0:v.docs)==null?void 0:L.source}}};var h,W,x;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: SliderWithState,
  args: {
    label: "Label",
    value: 50,
    errorMessage: "Error Message"
  }
}`,...(x=(W=n.parameters)==null?void 0:W.docs)==null?void 0:x.source}}};var M,f,E;t.parameters={...t.parameters,docs:{...(M=t.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: SliderWithState,
  args: {
    label: "Label",
    value: 50,
    warningMessage: "Warning Message"
  }
}`,...(E=(f=t.parameters)==null?void 0:f.docs)==null?void 0:E.source}}};var C,w,R;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: SliderWithState,
  args: {
    label: "Custom Range",
    value: 25,
    min: 10,
    max: 90,
    step: 5
  }
}`,...(R=(w=o.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};var D,H,j;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: SliderWithState,
  args: {
    value: 30,
    "aria-label": "Slider without visible label"
  }
}`,...(j=(H=l.parameters)==null?void 0:H.docs)==null?void 0:j.source}}};var y,P,_;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: SliderWithState,
  args: {
    label: "Hidden Label",
    value: 75,
    hideLabel: true
  }
}`,...(_=(P=i.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};const N=["Playground","Default","Disabled","Error","Warning","CustomRange","WithoutLabel","HiddenLabel"];export{o as CustomRange,a as Default,s as Disabled,n as Error,i as HiddenLabel,r as Playground,t as Warning,l as WithoutLabel,N as __namedExportsOrder,K as default};
