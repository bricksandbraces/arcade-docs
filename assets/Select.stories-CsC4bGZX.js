import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Jr as n,Mo as r,Xr as i,Yr as a,_o as o,bi as s,ma as c,or as l,t as u,vt as d}from"./iframe-dCkyJnNO.js";import{n as f,t as p}from"./surfaceStoryShell-CSBrh0RL.js";var m,h,g,_,v,y,b,x,S,C;e((()=>{f(),m=t(r(),1),s(),u(),h=o(),g=[{value:`apple`,label:`Apple`},{value:`banana`,label:`Banana`},{value:`orange`,label:`Orange`}],_={title:`Overlays & Menus/Dropdown/Select`,component:d,tags:[`autodocs`],args:{surface:`default`,options:g,placeholder:`Choose an option`,size:`medium`,state:`default`,disabled:!1,inline:!1,fullWidth:!1},argTypes:{surface:{control:`inline-radio`,options:i},size:{control:`inline-radio`,options:n},inline:{control:`boolean`},fullWidth:{control:`boolean`},disabled:{control:`boolean`},placeholder:{control:`text`},label:{control:`text`},helperText:{control:`text`},errorMessage:{control:`text`},warningMessage:{control:`text`},successMessage:{control:`text`},hideLabel:{control:`boolean`},state:{control:`inline-radio`,options:a}},render:e=>{let[t,n]=(0,m.useState)(e.value);return(0,h.jsx)(d,{...e,value:t,onChange:e=>{n(e)}})},parameters:{docs:{description:{component:`Native select field styled to match the design system. Use when the browser's built-in picker is acceptable and you don't need a rich Dropdown menu.`}}}},v={args:{id:`playground-select`,label:`Label`,helperText:`Helper text below the field.`,errorMessage:`Error message`,warningMessage:`Warning message`,successMessage:`Erledigt`}},y={args:{id:`slot-select`,label:`Label`,helperText:`Helper text below the field.`,successMessage:`Saved`,state:`success`},render:e=>{let[t,n]=(0,m.useState)(e.value);return(0,h.jsx)(d,{...e,value:t,onChange:e=>{n(e)},leadingSlot:(0,h.jsx)(c,{size:12,className:`stroke-icon-info`}),trailingSlot:(0,h.jsx)(`span`,{className:`typography-label-small text-text-accent`,children:`Slot`})})}},b={parameters:{controls:{disable:!0}},render:()=>(0,h.jsxs)(`div`,{className:`gap-xlg grid max-w-[720px] grid-cols-1 md:grid-cols-2`,children:[(0,h.jsx)(d,{id:`overview-default`,label:`Default + helper`,placeholder:`Select an option`,helperText:`Optional helper text.`,options:g}),(0,h.jsx)(d,{id:`overview-error`,label:`Error + notification`,placeholder:`Select an option`,state:`error`,errorMessage:`This field has an error.`,helperText:`Hidden while error is shown.`,options:g}),(0,h.jsx)(d,{id:`overview-warning`,label:`Warning + notification`,placeholder:`Select an option`,state:`warning`,warningMessage:`Please review your choice.`,options:g}),(0,h.jsx)(d,{id:`overview-success`,label:`Success`,placeholder:`Select an option`,state:`success`,successMessage:`Saved`,helperText:`Success still shows helper when no error/warning.`,options:g,value:`apple`})]})},x={args:{showLabel:!0},argTypes:{showLabel:{control:`boolean`}},render:({showLabel:e})=>(0,h.jsx)(l,{showLabel:e})},S={render:e=>(0,h.jsx)(p,{children:t=>(0,h.jsx)(d,{...e,id:`select-${t}`,surface:t})})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    id: "playground-select",
    label: "Label",
    helperText: "Helper text below the field.",
    errorMessage: "Error message",
    warningMessage: "Warning message",
    successMessage: "Erledigt"
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => <SurfaceStoryShell>
      {surface => <Select {...args} id={\`select-\${surface}\`} surface={surface} />}
    </SurfaceStoryShell>
}`,...S.parameters?.docs?.source}}},C=[`Playground`,`Slot`,`Overview`,`Skeleton`,`Surfaces`]}))();export{b as Overview,v as Playground,x as Skeleton,y as Slot,S as Surfaces,C as __namedExportsOrder,_ as default};