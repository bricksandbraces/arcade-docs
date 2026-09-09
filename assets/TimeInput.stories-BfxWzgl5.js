import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{$r as n,Bo as r,Mt as i,Nt as a,To as o,ei as s,t as c}from"./iframe-Cjmc8IvS.js";import{n as l,t as u}from"./surfaceStoryShell-Phj1qkf1.js";var d,f,p,m,h,g;e((()=>{l(),d=t(r(),1),c(),f=o(),p={title:`Inputs & Controls/TimeInput`,component:i,tags:[`autodocs`],argTypes:{surface:{control:`inline-radio`,options:s},size:{control:`inline-radio`,options:a},disabled:{control:`boolean`},hideLabel:{control:`boolean`},min:{control:`number`},max:{control:`number`},step:{control:`number`},label:{control:`text`},helperText:{control:`text`},state:{control:`inline-radio`,options:n}},args:{surface:`default`,id:`playground-time-input`,label:`Duration`,size:`medium`,step:30,helperText:`Format mm:ss`},parameters:{docs:{description:{component:"Time input built on the same primitives as `NumberInput`. The value is a number of **seconds**; the field displays and parses `mm:ss` (or `h:mm:ss`). The +/- buttons and arrow keys step by `step` seconds (default 30). Use `trailingSlot` to add controls before the steppers (e.g. a colour picker)."}}}},m={render:e=>{let[t,n]=(0,d.useState)(e.value??90);return(0,f.jsx)(i,{...e,value:t,onValueChange:n})}},h={render:e=>(0,f.jsx)(u,{children:t=>(0,f.jsx)(i,{...e,surface:t})})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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