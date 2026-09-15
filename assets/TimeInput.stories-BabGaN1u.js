import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Di as n,Et as r,Oi as i,Tt as a,Wt as o,is as s,t as c,ys as l}from"./iframe-D-W_c7x8.js";import{n as u,t as d}from"./surfaceStoryShell-Fwb9OW0P.js";var f,p,m,h,g,_,v;e((()=>{u(),f=t(l(),1),c(),p=s(),m={title:`Inputs & Controls/TimeInput`,component:a,tags:[`autodocs`],argTypes:{surface:{control:`inline-radio`,options:i},size:{control:`inline-radio`,options:r},disabled:{control:`boolean`},hideLabel:{control:`boolean`},min:{control:`number`},max:{control:`number`},step:{control:`number`},label:{control:`text`},helperText:{control:`text`},state:{control:`inline-radio`,options:n}},args:{surface:`default`,id:`playground-time-input`,label:`Duration`,size:`medium`,step:30,helperText:`Format mm:ss`},parameters:{docs:{description:{component:"Time input built on the same primitives as `NumberInput`. The value is a number of **seconds**; the field displays and parses `mm:ss` (or `h:mm:ss`). The +/- buttons and arrow keys step by `step` seconds (default 30). Use `trailingSlot` to add controls before the steppers (e.g. a colour picker)."}}}},h={render:e=>{let[t,n]=(0,f.useState)(e.value??90);return(0,p.jsx)(a,{...e,value:t,onValueChange:n})}},g={parameters:{docs:{description:{story:`A message longer than the reserved line grows the message slot and pushes the next field down.`}}},args:{id:`long-error-time-input`,state:`error`,errorMessage:`Enter a duration between 0:30 and 59:30 in steps of 30 seconds.`},render:e=>{let[t,n]=(0,f.useState)(90);return(0,p.jsxs)(`div`,{className:`flex w-[240px] flex-col`,children:[(0,p.jsx)(a,{...e,value:t,onValueChange:n}),(0,p.jsx)(o,{id:`long-error-time-next`,label:`Next field`,placeholder:`Placeholder text...`})]})}},_={render:e=>(0,p.jsx)(d,{children:t=>(0,p.jsx)(a,{...e,surface:t})})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState<number | undefined>(args.value as number | undefined ?? 90);
    return <TimeInput {...args} value={value} onValueChange={setValue} />;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "A message longer than the reserved line grows the message slot and pushes the next field down."
      }
    }
  },
  args: {
    id: "long-error-time-input",
    state: "error",
    errorMessage: "Enter a duration between 0:30 and 59:30 in steps of 30 seconds."
  },
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState<number | undefined>(90);
    return <div className="flex w-[240px] flex-col">
        <TimeInput {...args} value={value} onValueChange={setValue} />
        <TextInput id="long-error-time-next" label="Next field" placeholder="Placeholder text..." />
      </div>;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => <SurfaceStoryShell>
      {surface => <TimeInput {...args} surface={surface} />}
    </SurfaceStoryShell>
}`,..._.parameters?.docs?.source}}},v=[`Playground`,`LongErrorMessage`,`Surfaces`]}))();export{g as LongErrorMessage,h as Playground,_ as Surfaces,v as __namedExportsOrder,m as default};