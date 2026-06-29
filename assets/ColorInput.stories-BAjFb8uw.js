import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Br as n,So as r,Tt as i,Vr as a,so as o,t as s}from"./iframe-BboXRCbI.js";import{n as c,t as l}from"./onCardStoryShell-CNS2dIs6.js";var u,d,f,p,m,h,g,_,v,y,b,x,S,C;e((()=>{u=t(r(),1),s(),c(),d=o(),f={title:`Inputs & Controls/ColorInput`,component:i,tags:[`autodocs`],argTypes:{size:{control:`inline-radio`,options:n},state:{control:`inline-radio`,options:a},disabled:{control:`boolean`},hideLabel:{control:`boolean`},disablePicker:{control:`boolean`},loading:{control:`boolean`},label:{control:`text`},placeholder:{control:`text`},helperText:{control:`text`},successMessage:{control:`text`},warningMessage:{control:`text`},errorMessage:{control:`text`},loadingMessage:{control:`text`}},args:{id:`playground-color-input`,label:`Brand color`,placeholder:`000000`,size:`medium`,helperText:`Enter a hex value or pick one from the palette`,errorMessage:`Please enter a valid hex color`,warningMessage:`This color may not meet contrast requirements`,successMessage:`Color saved`,loadingMessage:`Saving...`},parameters:{docs:{description:{component:"Hex color input with an integrated ColorPicker popover. Use for theme, brand, and component color settings. The leading `#` is visual only — the value is normalised to `#RRGGBB`."}}}},p={args:{},render:e=>{let[t,n]=(0,u.useState)(`#0291FF`);return(0,d.jsxs)(`div`,{className:`gap-md flex flex-col`,children:[(0,d.jsx)(i,{...e,value:t,onValueChange:n}),(0,d.jsxs)(`div`,{className:`typography-label text-text-accent`,children:[`Current value: `,(0,d.jsx)(`code`,{children:t??`—`})]})]})}},m={args:{surface:`onCard`},render:e=>{let[t,n]=(0,u.useState)(`#6366F1`);return(0,d.jsx)(l,{children:(0,d.jsx)(i,{...e,value:t,onValueChange:n,surface:`onCard`})})}},h=({size:e})=>{let[t,n]=(0,u.useState)(`#10B981`);return(0,d.jsx)(i,{id:`color-input-${e}`,label:`${e.charAt(0).toUpperCase()+e.slice(1)} size`,size:e,value:t,onValueChange:n})},g={parameters:{controls:{disable:!0}},render:()=>(0,d.jsx)(`div`,{className:`gap-lg flex flex-col`,children:n.map(e=>(0,d.jsx)(h,{size:e},e))})},_={args:{id:`error-color-input`,label:`Accent color`,state:`error`,errorMessage:`Please enter a valid hex color`},render:e=>{let[t,n]=(0,u.useState)(`#GGGGGG`);return(0,d.jsx)(i,{...e,value:t,onValueChange:n})}},v={args:{id:`warning-color-input`,label:`Background color`,state:`warning`,warningMessage:`Low contrast against body text`},render:e=>{let[t,n]=(0,u.useState)(`#F0F1F2`);return(0,d.jsx)(i,{...e,value:t,onValueChange:n})}},y={args:{id:`success-color-input`,label:`Brand color`,state:`success`,successMessage:`Looks good!`},render:e=>{let[t,n]=(0,u.useState)(`#0D9467`);return(0,d.jsx)(i,{...e,value:t,onValueChange:n})}},b={args:{id:`loading-color-input`,label:`Theme color`,loading:!0,loadingMessage:`Saving...`},render:e=>{let[t,n]=(0,u.useState)(`#FF923F`);return(0,d.jsx)(i,{...e,value:t,onValueChange:n})}},x={args:{id:`disabled-color-input`,label:`Theme color`,disabled:!0},render:e=>(0,d.jsx)(i,{...e,defaultValue:`#6366F1`,onValueChange:()=>{}})},S={args:{id:`no-picker-color-input`,label:`Hex value`,disablePicker:!0,helperText:`Type a hex value — picker is disabled`},render:e=>{let[t,n]=(0,u.useState)(`#15171A`);return(0,d.jsx)(i,{...e,value:t,onValueChange:n})}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {},
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState<string | undefined>("#0291FF");
    return <div className="gap-md flex flex-col">
        <ColorInput {...args} value={value} onValueChange={setValue} />
        <div className="typography-label text-text-accent">
          Current value: <code>{value ?? "—"}</code>
        </div>
      </div>;
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    surface: "onCard"
  },
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState<string | undefined>("#6366F1");
    return <OnCardStoryShell>
        <ColorInput {...args} value={value} onValueChange={setValue} surface="onCard" />
      </OnCardStoryShell>;
  }
}`,...m.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="gap-lg flex flex-col">
      {InputSizes.map(size => <SizeRow key={size} size={size} />)}
    </div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    id: "error-color-input",
    label: "Accent color",
    state: "error",
    errorMessage: "Please enter a valid hex color"
  },
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState<string | undefined>("#GGGGGG");
    return <ColorInput {...args} value={value} onValueChange={setValue} />;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    id: "warning-color-input",
    label: "Background color",
    state: "warning",
    warningMessage: "Low contrast against body text"
  },
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState<string | undefined>("#F0F1F2");
    return <ColorInput {...args} value={value} onValueChange={setValue} />;
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    id: "success-color-input",
    label: "Brand color",
    state: "success",
    successMessage: "Looks good!"
  },
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState<string | undefined>("#0D9467");
    return <ColorInput {...args} value={value} onValueChange={setValue} />;
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    id: "loading-color-input",
    label: "Theme color",
    loading: true,
    loadingMessage: "Saving..."
  },
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState<string | undefined>("#FF923F");
    return <ColorInput {...args} value={value} onValueChange={setValue} />;
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    id: "disabled-color-input",
    label: "Theme color",
    disabled: true
  },
  render: args => <ColorInput {...args} defaultValue="#6366F1" onValueChange={() => {}} />
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    id: "no-picker-color-input",
    label: "Hex value",
    disablePicker: true,
    helperText: "Type a hex value — picker is disabled"
  },
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState<string | undefined>("#15171A");
    return <ColorInput {...args} value={value} onValueChange={setValue} />;
  }
}`,...S.parameters?.docs?.source}}},C=[`Playground`,`OnCard`,`Sizes`,`WithError`,`WithWarning`,`WithSuccess`,`Loading`,`Disabled`,`WithoutPicker`]}))();export{x as Disabled,b as Loading,m as OnCard,p as Playground,g as Sizes,_ as WithError,y as WithSuccess,v as WithWarning,S as WithoutPicker,C as __namedExportsOrder,f as default};