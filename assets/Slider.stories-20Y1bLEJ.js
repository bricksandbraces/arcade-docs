import{j as V}from"./jsx-runtime-D_zvdyIk.js";import{r as k}from"./index-0yr9KlQE.js";import{aQ as O}from"./ContextMenuList-pvZaRry1.js";import"./NumberInput-LKINkquG.js";import"./index-tymuTqDW.js";import"./index-DotmK1FS.js";import"./borders-N_bRvfGw.js";import"./colors-mvAPBTAn.js";import"./index-ChaIqHV-.js";const N={title:"Components/Slider/Slider",component:O,argTypes:{value:{control:"number"},min:{control:"number"},max:{control:"number"},step:{control:"number"},disabled:{control:"boolean"},label:{control:"text"},errorMessage:{control:"text"},warningMessage:{control:"text"},hideLabel:{control:"boolean"}},args:{label:"Label",value:50,min:0,max:100,step:1,disabled:!1,hideLabel:!1}},e=d=>{const[Q,T]=k.useState(d.value||50);return V.jsx(O,{...d,value:Q,onChange:T})},r={render:e},a={render:e,args:{label:"Label",value:50}},s={render:e,args:{label:"Label",value:50,disabled:!0}},n={render:e,args:{label:"Label",value:50,errorMessage:"Error Message"}},t={render:e,args:{label:"Label",value:50,warningMessage:"Warning Message"}},o={render:e,args:{label:"Custom Range",value:25,min:10,max:90,step:5}},l={render:e,args:{value:30,"aria-label":"Slider without visible label"}},i={render:e,args:{label:"Hidden Label",value:75,hideLabel:!0}};var c,u,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: SliderWithState
}`,...(m=(u=r.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var p,b,g;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: SliderWithState,
  args: {
    label: "Label",
    value: 50
  }
}`,...(g=(b=a.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var S,v,L;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(_=(P=i.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};const U=["Playground","Default","Disabled","Error","Warning","CustomRange","WithoutLabel","HiddenLabel"];export{o as CustomRange,a as Default,s as Disabled,n as Error,i as HiddenLabel,r as Playground,t as Warning,l as WithoutLabel,U as __namedExportsOrder,N as default};
