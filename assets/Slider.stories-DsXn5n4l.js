import{j as w}from"./jsx-runtime-D_zvdyIk.js";import{r as j}from"./index-0yr9KlQE.js";import{b1 as M}from"./ContextMenuList-iLopGvLG.js";import"./index-tymuTqDW.js";import"./index-DotmK1FS.js";import"./index-ChaIqHV-.js";import"./borders-N_bRvfGw.js";import"./colors-mvAPBTAn.js";const R={title:"F/Slider/Slider",component:M,argTypes:{value:{control:"number"},min:{control:"number"},max:{control:"number"},step:{control:"number"},disabled:{control:"boolean"},label:{control:"text"},errorMessage:{control:"text"},warningMessage:{control:"text"},hideLabel:{control:"boolean"}},args:{label:"Label",value:50,min:0,max:100,step:1,disabled:!1,hideLabel:!1}},e=o=>{const[E,f]=j.useState(o.value||50);return w.jsx(M,{...o,value:E,onChange:f})},r={render:e},a={render:e,args:{label:"Label",value:50,disabled:!0}},s={render:e,args:{label:"Label",value:50,errorMessage:"Error Message",state:"error"}},t={render:e,args:{label:"Label",value:50,warningMessage:"Warning Message",state:"warning"}},n={render:e,args:{label:"Hidden Label",value:75,hideLabel:!0}};var l,i,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: SliderWithState
}`,...(d=(i=r.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var c,u,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: SliderWithState,
  args: {
    label: "Label",
    value: 50,
    disabled: true
  }
}`,...(m=(u=a.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var b,g,p;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: SliderWithState,
  args: {
    label: "Label",
    value: 50,
    errorMessage: "Error Message",
    state: "error"
  }
}`,...(p=(g=s.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var S,L,h;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: SliderWithState,
  args: {
    label: "Label",
    value: 50,
    warningMessage: "Warning Message",
    state: "warning"
  }
}`,...(h=(L=t.parameters)==null?void 0:L.docs)==null?void 0:h.source}}};var v,W,x;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: SliderWithState,
  args: {
    label: "Hidden Label",
    value: 75,
    hideLabel: true
  }
}`,...(x=(W=n.parameters)==null?void 0:W.docs)==null?void 0:x.source}}};const T=["Playground","Disabled","Error","Warning","WithoutLabel"];export{a as Disabled,s as Error,r as Playground,t as Warning,n as WithoutLabel,T as __namedExportsOrder,R as default};
