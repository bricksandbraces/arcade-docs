import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{An as n,Ct as r,Ir as i,Pi as a,Qn as o,Yi as s,jn as c,t as l}from"./iframe-CppZwykT.js";import{n as u,t as d}from"./onCardStoryShell-qE7HjK3I.js";var f,p,m,h,g,_,v,y,b;e((()=>{f=t(s(),1),o(),l(),u(),p=a(),m=[{value:`apple`,label:`Apple`},{value:`banana`,label:`Banana`},{value:`orange`,label:`Orange`}],h={title:`Components/Dropdown/Select`,component:r,tags:[`autodocs`],args:{options:m,placeholder:`Choose an option`,size:`medium`,state:`default`,disabled:!1,inline:!1,fullWidth:!1},argTypes:{size:{control:`inline-radio`,options:n},inline:{control:`boolean`},fullWidth:{control:`boolean`},disabled:{control:`boolean`},placeholder:{control:`text`},label:{control:`text`},helperText:{control:`text`},errorMessage:{control:`text`},warningMessage:{control:`text`},successMessage:{control:`text`},hideLabel:{control:`boolean`},state:{control:`inline-radio`,options:c}},render:e=>{let[t,n]=(0,f.useState)(e.value);return(0,p.jsx)(r,{...e,value:t,onChange:e=>{n(e)}})},parameters:{docs:{description:{component:`Native select field styled to match the design system. Use when the browser's built-in picker is acceptable and you don't need a rich Dropdown menu.`}}}},g={args:{id:`playground-select`,label:`Label`,helperText:`Helper text below the field.`,errorMessage:`Error message`,warningMessage:`Warning message`,successMessage:`Erledigt`}},_={args:{id:`slot-select`,label:`Label`,helperText:`Helper text below the field.`,successMessage:`Saved`,state:`success`},render:e=>{let[t,n]=(0,f.useState)(e.value);return(0,p.jsx)(r,{...e,value:t,onChange:e=>{n(e)},leadingSlot:(0,p.jsx)(i,{size:12,className:`stroke-icon-info`}),trailingSlot:(0,p.jsx)(`span`,{className:`typography-label-small text-text-accent`,children:`Slot`})})}},v={args:{id:`on-card-select`,label:`Label`,helperText:`Helper text below the field.`,errorMessage:`Error message`,warningMessage:`Warning message`,successMessage:`Erledigt`,surface:`onCard`},render:e=>{let[t,n]=(0,f.useState)(e.value);return(0,p.jsx)(d,{children:(0,p.jsx)(r,{...e,value:t,onChange:e=>{n(e)}})})}},y={parameters:{controls:{disable:!0}},render:()=>(0,p.jsxs)(`div`,{className:`gap-xlg grid max-w-[720px] grid-cols-1 md:grid-cols-2`,children:[(0,p.jsx)(r,{id:`overview-default`,label:`Default + helper`,placeholder:`Select an option`,helperText:`Optional helper text.`,options:m}),(0,p.jsx)(r,{id:`overview-error`,label:`Error + notification`,placeholder:`Select an option`,state:`error`,errorMessage:`This field has an error.`,helperText:`Hidden while error is shown.`,options:m}),(0,p.jsx)(r,{id:`overview-warning`,label:`Warning + notification`,placeholder:`Select an option`,state:`warning`,warningMessage:`Please review your choice.`,options:m}),(0,p.jsx)(r,{id:`overview-success`,label:`Success`,placeholder:`Select an option`,state:`success`,successMessage:`Saved`,helperText:`Success still shows helper when no error/warning.`,options:m,value:`apple`})]})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    id: "playground-select",
    label: "Label",
    helperText: "Helper text below the field.",
    errorMessage: "Error message",
    warningMessage: "Warning message",
    successMessage: "Erledigt"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    id: "slot-select",
    label: "Label",
    helperText: "Helper text below the field.",
    successMessage: "Saved",
    state: "success"
  },
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [fieldValue, setFieldValue] = useState<string | undefined>(args.value);
    return <Select {...args} value={fieldValue} onChange={v => {
      setFieldValue(v);
    }} leadingSlot={<IconCircle size={12} className="stroke-icon-info" />} trailingSlot={<span className="typography-label-small text-text-accent">Slot</span>} />;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    id: "on-card-select",
    label: "Label",
    helperText: "Helper text below the field.",
    errorMessage: "Error message",
    warningMessage: "Warning message",
    successMessage: "Erledigt",
    surface: "onCard"
  },
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [fieldValue, setFieldValue] = useState<string | undefined>(args.value);
    return <OnCardStoryShell>
        <Select {...args} value={fieldValue} onChange={v => {
        setFieldValue(v);
      }} />
      </OnCardStoryShell>;
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="gap-xlg grid max-w-[720px] grid-cols-1 md:grid-cols-2">
      <Select id="overview-default" label="Default + helper" placeholder="Select an option" helperText="Optional helper text." options={sampleOptions} />
      <Select id="overview-error" label="Error + notification" placeholder="Select an option" state="error" errorMessage="This field has an error." helperText="Hidden while error is shown." options={sampleOptions} />
      <Select id="overview-warning" label="Warning + notification" placeholder="Select an option" state="warning" warningMessage="Please review your choice." options={sampleOptions} />
      <Select id="overview-success" label="Success" placeholder="Select an option" state="success" successMessage="Saved" helperText="Success still shows helper when no error/warning." options={sampleOptions} value="apple" />
    </div>
}`,...y.parameters?.docs?.source}}},b=[`Playground`,`Slot`,`OnCard`,`Overview`]}))();export{v as OnCard,y as Overview,g as Playground,_ as Slot,b as __namedExportsOrder,h as default};