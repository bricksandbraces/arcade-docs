import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Br as n,Qn as r,So as i,Vr as a,ht as o,ia as s,so as c,t as l,ui as u}from"./iframe-DIpUluzl.js";import{n as d,t as f}from"./onCardStoryShell-CZLlC4LN.js";var p,m,h,g,_,v,y,b,x,S;e((()=>{p=t(i(),1),u(),l(),d(),m=c(),h=[{value:`apple`,label:`Apple`},{value:`banana`,label:`Banana`},{value:`orange`,label:`Orange`}],g={title:`Overlays & Menus/Dropdown/Select`,component:o,tags:[`autodocs`],args:{options:h,placeholder:`Choose an option`,size:`medium`,state:`default`,disabled:!1,inline:!1,fullWidth:!1},argTypes:{size:{control:`inline-radio`,options:n},inline:{control:`boolean`},fullWidth:{control:`boolean`},disabled:{control:`boolean`},placeholder:{control:`text`},label:{control:`text`},helperText:{control:`text`},errorMessage:{control:`text`},warningMessage:{control:`text`},successMessage:{control:`text`},hideLabel:{control:`boolean`},state:{control:`inline-radio`,options:a}},render:e=>{let[t,n]=(0,p.useState)(e.value);return(0,m.jsx)(o,{...e,value:t,onChange:e=>{n(e)}})},parameters:{docs:{description:{component:`Native select field styled to match the design system. Use when the browser's built-in picker is acceptable and you don't need a rich Dropdown menu.`}}}},_={args:{id:`playground-select`,label:`Label`,helperText:`Helper text below the field.`,errorMessage:`Error message`,warningMessage:`Warning message`,successMessage:`Erledigt`}},v={args:{id:`slot-select`,label:`Label`,helperText:`Helper text below the field.`,successMessage:`Saved`,state:`success`},render:e=>{let[t,n]=(0,p.useState)(e.value);return(0,m.jsx)(o,{...e,value:t,onChange:e=>{n(e)},leadingSlot:(0,m.jsx)(s,{size:12,className:`stroke-icon-info`}),trailingSlot:(0,m.jsx)(`span`,{className:`typography-label-small text-text-accent`,children:`Slot`})})}},y={args:{id:`on-card-select`,label:`Label`,helperText:`Helper text below the field.`,errorMessage:`Error message`,warningMessage:`Warning message`,successMessage:`Erledigt`,surface:`onCard`},render:e=>{let[t,n]=(0,p.useState)(e.value);return(0,m.jsx)(f,{children:(0,m.jsx)(o,{...e,value:t,onChange:e=>{n(e)}})})}},b={parameters:{controls:{disable:!0}},render:()=>(0,m.jsxs)(`div`,{className:`gap-xlg grid max-w-[720px] grid-cols-1 md:grid-cols-2`,children:[(0,m.jsx)(o,{id:`overview-default`,label:`Default + helper`,placeholder:`Select an option`,helperText:`Optional helper text.`,options:h}),(0,m.jsx)(o,{id:`overview-error`,label:`Error + notification`,placeholder:`Select an option`,state:`error`,errorMessage:`This field has an error.`,helperText:`Hidden while error is shown.`,options:h}),(0,m.jsx)(o,{id:`overview-warning`,label:`Warning + notification`,placeholder:`Select an option`,state:`warning`,warningMessage:`Please review your choice.`,options:h}),(0,m.jsx)(o,{id:`overview-success`,label:`Success`,placeholder:`Select an option`,state:`success`,successMessage:`Saved`,helperText:`Success still shows helper when no error/warning.`,options:h,value:`apple`})]})},x={args:{showLabel:!0},argTypes:{showLabel:{control:`boolean`}},render:({showLabel:e})=>(0,m.jsx)(r,{showLabel:e})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    id: "playground-select",
    label: "Label",
    helperText: "Helper text below the field.",
    errorMessage: "Error message",
    warningMessage: "Warning message",
    successMessage: "Erledigt"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    showLabel: true
  },
  argTypes: {
    showLabel: {
      control: "boolean"
    }
  },
  render: ({
    showLabel
  }: {
    showLabel?: boolean;
  }) => <SelectSkeleton showLabel={showLabel} />
}`,...x.parameters?.docs?.source}}},S=[`Playground`,`Slot`,`OnCard`,`Overview`,`Skeleton`]}))();export{y as OnCard,b as Overview,_ as Playground,x as Skeleton,v as Slot,S as __namedExportsOrder,g as default};