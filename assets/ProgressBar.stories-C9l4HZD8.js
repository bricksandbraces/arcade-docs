import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{ea as n,h as r,ha as i,m as a,t as o}from"./iframe-D3A0Qfxl.js";var s,c,l,u,d,f,p,m,h;e((()=>{o(),s=t(i(),1),c=n(),{action:l}=__STORYBOOK_MODULE_ACTIONS__,u={title:`Components/ProgressBar/ProgressBar`,component:a,tags:[`autodocs`],argTypes:{direction:{control:`inline-radio`,options:r},current:{control:{type:`number`,min:0}}},parameters:{layout:`padded`,docs:{description:{component:`Step-based progress indicator showing where the user is in a multi-step flow. Use for wizards, onboarding, and checkouts.`}}}},d=[{id:`1`,label:`Progress Item`},{id:`2`,label:`Progress Item`},{id:`3`,label:`Progress Item`},{id:`4`,label:`Progress Item`}],f={args:{direction:`horizontal`,current:1,items:d}},p={args:{direction:`horizontal`,items:d},render:e=>{function t(){let[t,n]=s.useState(0),r=(e.items?.length??1)-1;return(0,c.jsxs)(`div`,{className:`gap-lg flex w-full max-w-[720px] flex-col`,children:[(0,c.jsx)(a,{...e,current:t}),(0,c.jsxs)(`div`,{className:`gap-sm flex`,children:[(0,c.jsx)(`button`,{type:`button`,className:`bg-background-hover text-text px-md py-sm typography-label rounded-sm`,onClick:()=>n(e=>Math.min(e+1,r)),children:`Next Step`}),(0,c.jsx)(`button`,{type:`button`,className:`bg-background-hover text-text px-md py-sm typography-label rounded-sm`,onClick:()=>n(0),children:`Reset`})]})]})}return(0,c.jsx)(t,{})},parameters:{docs:{description:{story:`Demonstrates completion transitions: checkmark pop-in and indicator fill from 0 to 100% using decelerate-sm + duration-md.`}}}},m={args:{direction:`horizontal`,current:1,items:[{id:`account`,label:`Account`,href:`https://example.com/account`},{id:`plan`,label:`Plan`,onLabelClick:()=>l(`onLabelClick`)(`plan`)},{id:`payment`,label:`Payment`},{id:`review`,label:`Review`,href:`https://example.com/review`}]},parameters:{docs:{description:{story:"Label interactions per item: set `href` or `onLabelClick` to make text clickable via Link. Items without either stay static and have no link hover animation."}}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    direction: "horizontal",
    current: 1,
    items: figmaItems
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h=[`Playground`,`CompletionAnimation`,`InteractiveLabels`]}))();export{p as CompletionAnimation,m as InteractiveLabels,f as Playground,h as __namedExportsOrder,u as default};