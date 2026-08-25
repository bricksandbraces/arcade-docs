import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Ao as n,h as r,ho as i,kn as a,m as o,t as s}from"./iframe-BY_c1jds.js";var c,l,u,d,f,p,m,h,g,_;e((()=>{s(),c=t(n(),1),l=i(),{action:u}=__STORYBOOK_MODULE_ACTIONS__,d={title:`Feedback & Status/ProgressBar/ProgressBar`,component:o,tags:[`autodocs`],argTypes:{direction:{control:`inline-radio`,options:r},current:{control:{type:`number`,min:0}}},parameters:{layout:`padded`,docs:{description:{component:`Step-based progress indicator showing where the user is in a multi-step flow. Use for wizards, onboarding, and checkouts.`}}}},f=[{id:`1`,label:`Progress Item`},{id:`2`,label:`Progress Item`},{id:`3`,label:`Progress Item`},{id:`4`,label:`Progress Item`}],p={args:{direction:`horizontal`,current:1,items:f}},m={args:{direction:`horizontal`,items:f},render:e=>{function t(){let[t,n]=c.useState(0),r=(e.items?.length??1)-1;return(0,l.jsxs)(`div`,{className:`gap-lg flex w-full max-w-[720px] flex-col`,children:[(0,l.jsx)(o,{...e,current:t}),(0,l.jsxs)(`div`,{className:`gap-sm flex`,children:[(0,l.jsx)(`button`,{type:`button`,className:`bg-background-hover text-text px-md py-sm typography-label rounded-sm`,onClick:()=>n(e=>Math.min(e+1,r)),children:`Next Step`}),(0,l.jsx)(`button`,{type:`button`,className:`bg-background-hover text-text px-md py-sm typography-label rounded-sm`,onClick:()=>n(0),children:`Reset`})]})]})}return(0,l.jsx)(t,{})},parameters:{docs:{description:{story:`Demonstrates completion transitions: checkmark pop-in and indicator fill from 0 to 100% using decelerate-sm + duration-md.`}}}},h={args:{direction:`horizontal`,current:1,items:[{id:`account`,label:`Account`,href:`https://example.com/account`},{id:`plan`,label:`Plan`,onLabelClick:()=>u(`onLabelClick`)(`plan`)},{id:`payment`,label:`Payment`},{id:`review`,label:`Review`,href:`https://example.com/review`}]},parameters:{docs:{description:{story:"Label interactions per item: set `href` or `onLabelClick` to make text clickable via Link. Items without either stay static and have no link hover animation."}}}},g={render:()=>(0,l.jsx)(a,{})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    direction: "horizontal",
    current: 1,
    items: figmaItems
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <ProgressBarSkeleton />
}`,...g.parameters?.docs?.source}}},_=[`Playground`,`CompletionAnimation`,`InteractiveLabels`,`Skeleton`]}))();export{m as CompletionAnimation,h as InteractiveLabels,p as Playground,g as Skeleton,_ as __namedExportsOrder,d as default};