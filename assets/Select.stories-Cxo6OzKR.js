import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Fi as n,Ii as r,Pi as i,Ps as a,i as o,la as s,po as c,vt as l,ys as u,zr as d}from"./iframe-V2Vd6Pm7.js";import{n as f,t as p}from"./figmaDesign-CO6i5n9C.js";import{n as m,t as h}from"./surfaceStoryShell-DWDX6TVN.js";var g,_,v,y,b,x,S,C,w,T;e((()=>{m(),g=t(a(),1),s(),o(),f(),_=u(),v=[{value:`apple`,label:`Apple`},{value:`banana`,label:`Banana`},{value:`orange`,label:`Orange`}],y={title:`Overlays & Menus/Dropdown/Select`,component:l,tags:[`autodocs`],args:{surface:`default`,options:v,placeholder:`Choose an option`,size:`medium`,state:`default`,disabled:!1,inline:!1,fullWidth:!1},argTypes:{surface:{control:`inline-radio`,options:r},size:{control:`inline-radio`,options:i},inline:{control:`boolean`},fullWidth:{control:`boolean`},disabled:{control:`boolean`},placeholder:{control:`text`},label:{control:`text`},helperText:{control:`text`},errorMessage:{control:`text`},warningMessage:{control:`text`},successMessage:{control:`text`},hideLabel:{control:`boolean`},state:{control:`inline-radio`,options:n}},render:e=>{let[t,n]=(0,g.useState)(e.value);return(0,_.jsx)(l,{...e,value:t,onChange:e=>{n(e)}})},parameters:{design:p(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=4513-3142`),docs:{description:{component:`Native select field styled to match the design system. Use when the browser's built-in picker is acceptable and you don't need a rich Dropdown menu.`}}}},b={args:{id:`playground-select`,label:`Label`,helperText:`Helper text below the field.`,errorMessage:`Error message`,warningMessage:`Warning message`,successMessage:`Erledigt`}},x={args:{id:`slot-select`,label:`Label`,helperText:`Helper text below the field.`,successMessage:`Saved`,state:`success`},render:e=>{let[t,n]=(0,g.useState)(e.value);return(0,_.jsx)(l,{...e,value:t,onChange:e=>{n(e)},leadingSlot:(0,_.jsx)(c,{size:12,className:`stroke-icon-info`}),trailingSlot:(0,_.jsx)(`span`,{className:`typography-label-small text-text-accent`,children:`Slot`})})}},S={parameters:{controls:{disable:!0}},render:()=>(0,_.jsxs)(`div`,{className:`gap-xlg grid max-w-[720px] grid-cols-1 md:grid-cols-2`,children:[(0,_.jsx)(l,{id:`overview-default`,label:`Default + helper`,placeholder:`Select an option`,helperText:`Optional helper text.`,options:v}),(0,_.jsx)(l,{id:`overview-error`,label:`Error + notification`,placeholder:`Select an option`,state:`error`,errorMessage:`This field has an error.`,helperText:`Hidden while error is shown.`,options:v}),(0,_.jsx)(l,{id:`overview-warning`,label:`Warning + notification`,placeholder:`Select an option`,state:`warning`,warningMessage:`Please review your choice.`,options:v}),(0,_.jsx)(l,{id:`overview-success`,label:`Success`,placeholder:`Select an option`,state:`success`,successMessage:`Saved`,helperText:`Success still shows helper when no error/warning.`,options:v,value:`apple`})]})},C={args:{showLabel:!0},argTypes:{showLabel:{control:`boolean`}},render:({showLabel:e})=>(0,_.jsx)(d,{showLabel:e})},w={render:e=>(0,_.jsx)(h,{children:t=>(0,_.jsx)(l,{...e,id:`select-${t}`,surface:t})})},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    id: "playground-select",
    label: "Label",
    helperText: "Helper text below the field.",
    errorMessage: "Error message",
    warningMessage: "Warning message",
    successMessage: "Erledigt"
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => <SurfaceStoryShell>
      {surface => <Select {...args} id={\`select-\${surface}\`} surface={surface} />}
    </SurfaceStoryShell>
}`,...w.parameters?.docs?.source}}},T=[`Playground`,`Slot`,`Overview`,`Skeleton`,`Surfaces`]}))();export{S as Overview,b as Playground,C as Skeleton,x as Slot,w as Surfaces,T as __namedExportsOrder,y as default};