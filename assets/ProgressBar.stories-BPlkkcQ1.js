import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Ps as n,_ as r,i,lr as a,v as o,ys as s}from"./iframe-BNKOs80O.js";import{n as c,t as l}from"./figmaDesign-CO6i5n9C.js";var u,d,f,p,m,h,g,_,v,y;e((()=>{i(),u=t(n(),1),c(),d=s(),{action:f}=__STORYBOOK_MODULE_ACTIONS__,p={title:`Feedback & Status/ProgressBar/ProgressBar`,component:r,tags:[`autodocs`],argTypes:{direction:{control:`inline-radio`,options:o},current:{control:{type:`number`,min:0}}},parameters:{design:l(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System`),layout:`padded`,docs:{description:{component:`Step-based progress indicator showing where the user is in a multi-step flow. Use for wizards, onboarding, and checkouts.`}}}},m=[{id:`1`,label:`Progress Item`},{id:`2`,label:`Progress Item`},{id:`3`,label:`Progress Item`},{id:`4`,label:`Progress Item`}],h={args:{direction:`horizontal`,current:1,items:m}},g={args:{direction:`horizontal`,items:m},render:e=>{function t(){let[t,n]=u.useState(0),i=(e.items?.length??1)-1;return(0,d.jsxs)(`div`,{className:`gap-lg flex w-full max-w-[720px] flex-col`,children:[(0,d.jsx)(r,{...e,current:t}),(0,d.jsxs)(`div`,{className:`gap-sm flex`,children:[(0,d.jsx)(`button`,{type:`button`,className:`bg-background-hover text-text px-md py-sm typography-label rounded-sm`,onClick:()=>n(e=>Math.min(e+1,i)),children:`Next Step`}),(0,d.jsx)(`button`,{type:`button`,className:`bg-background-hover text-text px-md py-sm typography-label rounded-sm`,onClick:()=>n(0),children:`Reset`})]})]})}return(0,d.jsx)(t,{})},parameters:{docs:{description:{story:`Demonstrates completion transitions: checkmark pop-in and indicator fill from 0 to 100% using decelerate-sm + duration-md.`}}}},_={args:{direction:`horizontal`,current:1,items:[{id:`account`,label:`Account`,href:`https://example.com/account`},{id:`plan`,label:`Plan`,onLabelClick:()=>f(`onLabelClick`)(`plan`)},{id:`payment`,label:`Payment`},{id:`review`,label:`Review`,href:`https://example.com/review`}]},parameters:{docs:{description:{story:"Label interactions per item: set `href` or `onLabelClick` to make text clickable via Link. Items without either stay static and have no link hover animation."}}}},v={render:()=>(0,d.jsx)(a,{})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    direction: "horizontal",
    current: 1,
    items: figmaItems
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    direction: "horizontal",
    items: figmaItems
  },
  render: args => {
    function Demo() {
      const [current, setCurrent] = React.useState(0);
      const maxIndex = (args.items?.length ?? 1) - 1;
      return <div className="gap-lg flex w-full max-w-[720px] flex-col">
          <Progressbar {...args} current={current} />
          <div className="gap-sm flex">
            <button type="button" className="bg-background-hover text-text px-md py-sm typography-label rounded-sm" onClick={() => setCurrent(prev => Math.min(prev + 1, maxIndex))}>
              Next Step
            </button>
            <button type="button" className="bg-background-hover text-text px-md py-sm typography-label rounded-sm" onClick={() => setCurrent(0)}>
              Reset
            </button>
          </div>
        </div>;
    }
    return <Demo />;
  },
  parameters: {
    docs: {
      description: {
        story: "Demonstrates completion transitions: checkmark pop-in and indicator fill from 0 to 100% using decelerate-sm + duration-md."
      }
    }
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    direction: "horizontal",
    current: 1,
    items: [{
      id: "account",
      label: "Account",
      href: "https://example.com/account"
    }, {
      id: "plan",
      label: "Plan",
      onLabelClick: () => action("onLabelClick")("plan")
    }, {
      id: "payment",
      label: "Payment"
    }, {
      id: "review",
      label: "Review",
      href: "https://example.com/review"
    }]
  },
  parameters: {
    docs: {
      description: {
        story: "Label interactions per item: set \`href\` or \`onLabelClick\` to make text clickable via Link. Items without either stay static and have no link hover animation."
      }
    }
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <ProgressBarSkeleton />
}`,...v.parameters?.docs?.source}}},y=[`Playground`,`CompletionAnimation`,`InteractiveLabels`,`Skeleton`]}))();export{g as CompletionAnimation,_ as InteractiveLabels,h as Playground,v as Skeleton,y as __namedExportsOrder,p as default};