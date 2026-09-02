import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{At as n,Fo as r,Qr as i,Zr as a,bo as o,jt as s,t as c}from"./iframe-B66iW4BB.js";import{n as l,t as u}from"./surfaceStoryShell-B62z1dQr.js";var d,f,p,m,h,g;e((()=>{l(),d=t(r(),1),c(),f=o(),p={title:`Inputs & Controls/TimeInput`,component:n,tags:[`autodocs`],argTypes:{surface:{control:`inline-radio`,options:i},size:{control:`inline-radio`,options:s},disabled:{control:`boolean`},hideLabel:{control:`boolean`},min:{control:`number`},max:{control:`number`},step:{control:`number`},label:{control:`text`},helperText:{control:`text`},state:{control:`inline-radio`,options:a}},args:{surface:`default`,id:`playground-time-input`,label:`Duration`,size:`medium`,step:30,helperText:`Format mm:ss`},parameters:{docs:{description:{component:"Time input built on the same primitives as `NumberInput`. The value is a number of **seconds**; the field displays and parses `mm:ss` (or `h:mm:ss`). The +/- buttons and arrow keys step by `step` seconds (default 30). Use `trailingSlot` to add controls before the steppers (e.g. a colour picker)."}}}},m={render:e=>{let[t,r]=(0,d.useState)(e.value??90);return(0,f.jsx)(n,{...e,value:t,onValueChange:r})}},h={render:e=>(0,f.jsx)(u,{children:t=>(0,f.jsx)(n,{...e,surface:t})})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState<number | undefined>(args.value as number | undefined ?? 90);
    return <TimeInput {...args} value={value} onValueChange={setValue} />;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <SurfaceStoryShell>
      {surface => <TimeInput {...args} surface={surface} />}
    </SurfaceStoryShell>
}`,...h.parameters?.docs?.source}}},g=[`Playground`,`Surfaces`]}))();export{m as Playground,h as Surfaces,g as __namedExportsOrder,p as default};