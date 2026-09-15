import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Ft as n,Pt as r,is as i,t as a,ys as o}from"./iframe-COa7Xbk1.js";import{n as s,t as c}from"./figmaDesign-CO6i5n9C.js";var l,u,d,f,p,m,h,g,_,v,y,b;e((()=>{a(),l=t(o(),1),s(),u=i(),d={title:`Feedback & Status/TrafficLight`,component:r,tags:[`autodocs`],argTypes:{state:{control:`inline-radio`,options:n},message:{control:`text`}},args:{state:`error`,message:`Your password is too vague.
Add a special character and numbers to it.`},parameters:{design:c(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=4956-12065`),docs:{description:{component:`Three-bar traffic-light indicator. Typical use: visualise password strength next to a PasswordInput in sign-up and change-password flows.`}}}},f={args:{}},p={args:{state:`empty`,message:void 0}},m={args:{state:`error`,message:`Your password is too vague.
Add a special character and numbers to it.`}},h={args:{state:`warning`,message:`Almost there. Mix upper- and lowercase letters.`}},g={args:{state:`success`,message:`Strong password.`}},_={render:()=>(0,u.jsx)(`div`,{className:`gap-xlg flex w-[368px] flex-col`,children:n.map(e=>(0,u.jsx)(r,{state:e,message:`State: ${e}`},e))})},v=[`empty`,`error`,`warning`,`success`],y={parameters:{docs:{description:{story:"Left-to-right fill (width 0%→100%, `duration-sm`, `ease-decelerate-sm`, stagger). Animation only runs when `state` updates - this story cycles every 900ms."}}},render:function(){let[e,t]=l.useState(0),n=v[e%v.length];return l.useEffect(()=>{let e=window.setInterval(()=>{t(e=>e+1)},900);return()=>window.clearInterval(e)},[]),(0,u.jsx)(`div`,{className:`w-[368px]`,children:(0,u.jsx)(r,{state:n,message:`Cycle: ${n} (ease-decelerate-sm, stagger left → right)`})})}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    state: "empty",
    message: undefined
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    state: "error",
    message: "Your password is too vague.\\nAdd a special character and numbers to it."
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    state: "warning",
    message: "Almost there. Mix upper- and lowercase letters."
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    state: "success",
    message: "Strong password."
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div className="gap-xlg flex w-[368px] flex-col">
      {TrafficLightStates.map(state => <TrafficLight key={state} state={state} message={\`State: \${state}\`} />)}
    </div>
}`,..._.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Left-to-right fill (width 0%→100%, \`duration-sm\`, \`ease-decelerate-sm\`, stagger). Animation only runs when \`state\` updates - this story cycles every 900ms."
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
}`,...y.parameters?.docs?.source}}},b=[`Playground`,`Empty`,`Error`,`Warning`,`Success`,`States`,`BarFillAnimation`]}))();export{y as BarFillAnimation,p as Empty,m as Error,f as Playground,_ as States,g as Success,h as Warning,b as __namedExportsOrder,d as default};