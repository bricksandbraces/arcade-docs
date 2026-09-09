import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Dt as n,Et as r,Mo as i,ni as a,qo as o,ri as s,t as c}from"./iframe-DTfjFPcB.js";import{n as l,t as u}from"./surfaceStoryShell-BgyRf2dq.js";var d,f,p,m,h,g;e((()=>{l(),d=t(o(),1),c(),f=i(),p={title:`Inputs & Controls/TimeInput`,component:r,tags:[`autodocs`],argTypes:{surface:{control:`inline-radio`,options:s},size:{control:`inline-radio`,options:n},disabled:{control:`boolean`},hideLabel:{control:`boolean`},min:{control:`number`},max:{control:`number`},step:{control:`number`},label:{control:`text`},helperText:{control:`text`},state:{control:`inline-radio`,options:a}},args:{surface:`default`,id:`playground-time-input`,label:`Duration`,size:`medium`,step:30,helperText:`Format mm:ss`},parameters:{docs:{description:{component:"Time input built on the same primitives as `NumberInput`. The value is a number of **seconds**; the field displays and parses `mm:ss` (or `h:mm:ss`). The +/- buttons and arrow keys step by `step` seconds (default 30). Use `trailingSlot` to add controls before the steppers (e.g. a colour picker)."}}}},m={render:e=>{let[t,n]=(0,d.useState)(e.value??90);return(0,f.jsx)(r,{...e,value:t,onValueChange:n})}},h={render:e=>(0,f.jsx)(u,{children:t=>(0,f.jsx)(r,{...e,surface:t})})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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