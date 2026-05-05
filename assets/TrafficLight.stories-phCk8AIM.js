import{n as e}from"./chunk-jRWAZmH_.js";import{Jt as t,Ki as n,Yt as r,t as i}from"./iframe-DrK9XSuE.js";var a,o,s,c,l,u,d,f,p;e((()=>{i(),a=n(),o={title:`Fabian Supervision/TrafficLight`,component:t,tags:[`autodocs`],argTypes:{state:{control:`inline-radio`,options:r},message:{control:`text`}},args:{state:`error`,message:`Your password is too vague.
Add a special character and numbers to it.`},parameters:{docs:{description:{component:`Three-bar traffic-light indicator. Typical use: visualise password strength next to a PasswordInput in sign-up and change-password flows.`}}}},s={args:{}},c={args:{state:`empty`,message:void 0}},l={args:{state:`error`,message:`Your password is too vague.
Add a special character and numbers to it.`}},u={args:{state:`warning`,message:`Almost there. Mix upper- and lowercase letters.`}},d={args:{state:`success`,message:`Strong password.`}},f={render:()=>(0,a.jsx)(`div`,{className:`flex w-[368px] flex-col gap-xlg`,children:r.map(e=>(0,a.jsx)(t,{state:e,message:`State: ${e}`},e))})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    state: "empty",
    message: undefined
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    state: "error",
    message: "Your password is too vague.\\nAdd a special character and numbers to it."
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    state: "warning",
    message: "Almost there. Mix upper- and lowercase letters."
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    state: "success",
    message: "Strong password."
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-[368px] flex-col gap-xlg">
      {TrafficLightStates.map(state => <TrafficLight key={state} state={state} message={\`State: \${state}\`} />)}
    </div>
}`,...f.parameters?.docs?.source}}},p=[`Playground`,`Empty`,`Error`,`Warning`,`Success`,`States`]}))();export{c as Empty,l as Error,s as Playground,f as States,d as Success,u as Warning,p as __namedExportsOrder,o as default};