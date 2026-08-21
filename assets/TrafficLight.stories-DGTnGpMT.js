import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Rt as n,ko as r,mo as i,t as a,zt as o}from"./iframe-ys9-gXlz.js";var s,c,l,u,d,f,p,m,h,g,_,v;e((()=>{a(),s=t(r(),1),c=i(),l={title:`Feedback & Status/TrafficLight`,component:n,tags:[`autodocs`],argTypes:{state:{control:`inline-radio`,options:o},message:{control:`text`}},args:{state:`error`,message:`Your password is too vague.
Add a special character and numbers to it.`},parameters:{docs:{description:{component:`Three-bar traffic-light indicator. Typical use: visualise password strength next to a PasswordInput in sign-up and change-password flows.`}}}},u={args:{}},d={args:{state:`empty`,message:void 0}},f={args:{state:`error`,message:`Your password is too vague.
Add a special character and numbers to it.`}},p={args:{state:`warning`,message:`Almost there. Mix upper- and lowercase letters.`}},m={args:{state:`success`,message:`Strong password.`}},h={render:()=>(0,c.jsx)(`div`,{className:`gap-xlg flex w-[368px] flex-col`,children:o.map(e=>(0,c.jsx)(n,{state:e,message:`State: ${e}`},e))})},g=[`empty`,`error`,`warning`,`success`],_={parameters:{docs:{description:{story:"Left-to-right fill (width 0%→100%, `duration-sm`, `ease-decelerate-sm`, stagger). Animation only runs when `state` updates — this story cycles every 900ms."}}},render:function(){let[e,t]=s.useState(0),r=g[e%g.length];return s.useEffect(()=>{let e=window.setInterval(()=>{t(e=>e+1)},900);return()=>window.clearInterval(e)},[]),(0,c.jsx)(`div`,{className:`w-[368px]`,children:(0,c.jsx)(n,{state:r,message:`Cycle: ${r} (ease-decelerate-sm, stagger left → right)`})})}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    state: "empty",
    message: undefined
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    state: "error",
    message: "Your password is too vague.\\nAdd a special character and numbers to it."
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    state: "warning",
    message: "Almost there. Mix upper- and lowercase letters."
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    state: "success",
    message: "Strong password."
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className="gap-xlg flex w-[368px] flex-col">
      {TrafficLightStates.map(state => <TrafficLight key={state} state={state} message={\`State: \${state}\`} />)}
    </div>
}`,...h.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Left-to-right fill (width 0%→100%, \`duration-sm\`, \`ease-decelerate-sm\`, stagger). Animation only runs when \`state\` updates — this story cycles every 900ms."
      }
    }
  },
  render: function BarFillAnimationDemo() {
    const [step, setStep] = React.useState(0);
    const trafficState = animationCycleStates[step % animationCycleStates.length];
    React.useEffect(() => {
      const id = window.setInterval(() => {
        setStep(previous => previous + 1);
      }, 900);
      return () => window.clearInterval(id);
    }, []);
    return <div className="w-[368px]">
        <TrafficLight state={trafficState} message={\`Cycle: \${trafficState} (ease-decelerate-sm, stagger left → right)\`} />
      </div>;
  }
}`,..._.parameters?.docs?.source}}},v=[`Playground`,`Empty`,`Error`,`Warning`,`Success`,`States`,`BarFillAnimation`]}))();export{_ as BarFillAnimation,d as Empty,f as Error,u as Playground,h as States,m as Success,p as Warning,v as __namedExportsOrder,l as default};