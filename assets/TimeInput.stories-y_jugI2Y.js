import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Ct as n,Ds as r,Ht as i,Mi as a,fs as o,ji as s,t as c,wt as l}from"./iframe-RYiXY6gz.js";import{n as u,t as d}from"./surfaceStoryShell-DGrZ_RIT.js";var f,p,m,h,g,_,v;e((()=>{u(),f=t(r(),1),c(),p=o(),m={title:`Inputs & Controls/TimeInput`,component:n,tags:[`autodocs`],argTypes:{surface:{control:`inline-radio`,options:a},size:{control:`inline-radio`,options:l},disabled:{control:`boolean`},hideLabel:{control:`boolean`},min:{control:`number`},max:{control:`number`},step:{control:`number`},label:{control:`text`},helperText:{control:`text`},state:{control:`inline-radio`,options:s}},args:{surface:`default`,id:`playground-time-input`,label:`Duration`,size:`medium`,step:30,helperText:`Format mm:ss`},parameters:{docs:{description:{component:"Time input built on the same primitives as `NumberInput`. The value is a number of **seconds**; the field displays and parses `mm:ss` (or `h:mm:ss`). The +/- buttons and arrow keys step by `step` seconds (default 30). Use `trailingSlot` to add controls before the steppers (e.g. a colour picker)."}}}},h={render:e=>{let[t,r]=(0,f.useState)(e.value??90);return(0,p.jsx)(n,{...e,value:t,onValueChange:r})}},g={parameters:{docs:{description:{story:`A message longer than the reserved line grows the message slot and pushes the next field down.`}}},args:{id:`long-error-time-input`,state:`error`,errorMessage:`Enter a duration between 0:30 and 59:30 in steps of 30 seconds.`},render:e=>{let[t,r]=(0,f.useState)(90);return(0,p.jsxs)(`div`,{className:`flex w-[240px] flex-col`,children:[(0,p.jsx)(n,{...e,value:t,onValueChange:r}),(0,p.jsx)(i,{id:`long-error-time-next`,label:`Next field`,placeholder:`Placeholder text...`})]})}},_={render:e=>(0,p.jsx)(d,{children:t=>(0,p.jsx)(n,{...e,surface:t})})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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