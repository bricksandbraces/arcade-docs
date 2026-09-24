import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Dn as n,Fn as r,Os as i,Us as a,t as o}from"./iframe-Dsvd3Mbg.js";import{n as s,t as c}from"./figmaDesign-DDiUnvXT.js";import{n as l,t as u}from"./figmaFrame-B48bx9w_.js";import{n as d,r as f}from"./figma-DgE6KChR.js";var p,m,h,g,_,v,y,b,x,S;e((()=>{o(),a(),s(),f(),l(),p=i(),m=t(a(),1),h={start:{yellow:`5575:14837`,red:`5575:14913`,green:`5575:14925`,blue:`5575:14937`,cyan:`5575:14949`,orange:`5575:14961`,gray:`5575:14973`,purple:`5575:14985`},middle:{yellow:`5575:14836`,red:`5575:14917`,green:`5575:14929`,blue:`5575:14941`,cyan:`5575:14953`,orange:`5575:14965`,gray:`5575:14977`,purple:`5575:14989`},end:{yellow:`5575:14835`,red:`5575:14918`,green:`5575:14930`,blue:`5575:14942`,cyan:`5575:14954`,orange:`5575:14966`,gray:`5575:14978`,purple:`5575:14990`},fullDay:{yellow:`5575:14905`,red:`5575:14915`,green:`5575:14927`,blue:`5575:14939`,cyan:`5575:14951`,orange:`5575:14963`,gray:`5575:14975`,purple:`5575:14987`}},g={title:`Display & Data/EventCalendar/EventCalendarAllDayAppointment`,component:n,tags:[`autodocs`],parameters:{design:c(d(`5575:14838`))},argTypes:{color:{control:`select`,options:r}},args:{title:`Title`,color:`yellow`},render:e=>(0,p.jsx)(u,{node:h[e.kind][e.color??`yellow`],width:98,height:16,children:(0,p.jsx)(n,{...e})})},_={args:{kind:`start`}},v={args:{kind:`middle`}},y={args:{kind:`end`}},b={args:{kind:`fullDay`}},x={args:{kind:`fullDay`},render:e=>(0,p.jsx)(`div`,{className:`gap-sm flex flex-col`,style:{width:98},children:r.map(t=>(0,m.createElement)(n,{...e,key:t,color:t}))})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    kind: "start"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    kind: "middle"
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    kind: "end"
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    kind: "fullDay"
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    kind: "fullDay"
  },
  render: args => <div className="gap-sm flex flex-col" style={{
    width: 98
  }}>
      {EventCalendarColors.map(color => <EventCalendarAllDayAppointment {...args} key={color} color={color} />)}
    </div>
}`,...x.parameters?.docs?.source}}},S=[`Start`,`Middle`,`End`,`FullDay`,`AllColors`]}))();export{x as AllColors,y as End,b as FullDay,v as Middle,_ as Start,S as __namedExportsOrder,g as default};