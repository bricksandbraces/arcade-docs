import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Fo as n,Qr as r,Xr as i,Zr as a,bo as o,kt as s,t as c}from"./iframe-Bb-sKdHW.js";import{n as l,t as u}from"./surfaceStoryShell-DPQcsNd0.js";var d,f,p,m,h,g,_,v,y,b,x,S,C,w,T;e((()=>{l(),d=t(n(),1),c(),f=o(),{action:p}=__STORYBOOK_MODULE_ACTIONS__,m={title:`Inputs & Controls/ColorInput`,component:s,tags:[`autodocs`],argTypes:{surface:{control:`inline-radio`,options:r},size:{control:`inline-radio`,options:i},state:{control:`inline-radio`,options:a},disabled:{control:`boolean`},hideLabel:{control:`boolean`},disablePicker:{control:`boolean`},loading:{control:`boolean`},label:{control:`text`},placeholder:{control:`text`},helperText:{control:`text`},successMessage:{control:`text`},warningMessage:{control:`text`},errorMessage:{control:`text`},loadingMessage:{control:`text`}},args:{surface:`default`,id:`playground-color-input`,label:`Brand color`,placeholder:`000000`,size:`medium`,helperText:`Enter a hex value or pick one from the palette`,errorMessage:`Please enter a valid hex color`,warningMessage:`This color may not meet contrast requirements`,successMessage:`Color saved`,loadingMessage:`Saving...`},parameters:{docs:{description:{component:"Hex color input with an integrated ColorPicker popover. Use for theme, brand, and component color settings. The leading `#` is visual only - the value is normalised to `#RRGGBB`."}}}},h={args:{},render:e=>{let[t,n]=(0,d.useState)(`#0291FF`);return(0,f.jsxs)(`div`,{className:`gap-md flex flex-col`,children:[(0,f.jsx)(s,{...e,value:t,onValueChange:n}),(0,f.jsxs)(`div`,{className:`typography-label text-text-accent`,children:[`Current value: `,(0,f.jsx)(`code`,{children:t??`-`})]})]})}},g=({size:e})=>{let[t,n]=(0,d.useState)(`#10B981`);return(0,f.jsx)(s,{id:`color-input-${e}`,label:`${e.charAt(0).toUpperCase()+e.slice(1)} size`,size:e,value:t,onValueChange:n})},_={parameters:{controls:{disable:!0}},render:()=>(0,f.jsx)(`div`,{className:`gap-lg flex flex-col`,children:i.map(e=>(0,f.jsx)(g,{size:e},e))})},v={args:{id:`error-color-input`,label:`Accent color`,state:`error`,errorMessage:`Please enter a valid hex color`},render:e=>{let[t,n]=(0,d.useState)(`#GGGGGG`);return(0,f.jsx)(s,{...e,value:t,onValueChange:n})}},y={args:{id:`warning-color-input`,label:`Background color`,state:`warning`,warningMessage:`Low contrast against body text`},render:e=>{let[t,n]=(0,d.useState)(`#F0F1F2`);return(0,f.jsx)(s,{...e,value:t,onValueChange:n})}},b={args:{id:`success-color-input`,label:`Brand color`,state:`success`,successMessage:`Looks good!`},render:e=>{let[t,n]=(0,d.useState)(`#0D9467`);return(0,f.jsx)(s,{...e,value:t,onValueChange:n})}},x={args:{id:`loading-color-input`,label:`Theme color`,loading:!0,loadingMessage:`Saving...`},render:e=>{let[t,n]=(0,d.useState)(`#FF923F`);return(0,f.jsx)(s,{...e,value:t,onValueChange:n})}},S={args:{id:`disabled-color-input`,label:`Theme color`,disabled:!0},render:e=>(0,f.jsx)(s,{...e,defaultValue:`#6366F1`,onValueChange:()=>{}})},C={args:{id:`no-picker-color-input`,label:`Hex value`,disablePicker:!0,helperText:`Type a hex value - picker is disabled`},render:e=>{let[t,n]=(0,d.useState)(`#15171A`);return(0,f.jsx)(s,{...e,value:t,onValueChange:n})}},w={render:e=>(0,f.jsx)(u,{children:t=>(0,f.jsx)(s,{...e,id:`color-input-${t}`,surface:t,value:`#6366F1`,onValueChange:p(`onValueChange`)})})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {},
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState<string | undefined>("#0291FF");
    return <div className="gap-md flex flex-col">
        <ColorInput {...args} value={value} onValueChange={setValue} />
        <div className="typography-label text-text-accent">
          Current value: <code>{value ?? "-"}</code>
        </div>
      </div>;
  }
}`,...h.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="gap-lg flex flex-col">
      {InputSizes.map(size => <SizeRow key={size} size={size} />)}
    </div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    id: "disabled-color-input",
    label: "Theme color",
    disabled: true
  },
  render: args => <ColorInput {...args} defaultValue="#6366F1" onValueChange={() => {}} />
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    id: "no-picker-color-input",
    label: "Hex value",
    disablePicker: true,
    helperText: "Type a hex value - picker is disabled"
  },
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState<string | undefined>("#15171A");
    return <ColorInput {...args} value={value} onValueChange={setValue} />;
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => <SurfaceStoryShell>
      {surface => <ColorInput {...args} id={\`color-input-\${surface}\`} surface={surface} value="#6366F1" onValueChange={action("onValueChange")} />}
    </SurfaceStoryShell>
}`,...w.parameters?.docs?.source}}},T=[`Playground`,`Sizes`,`WithError`,`WithWarning`,`WithSuccess`,`Loading`,`Disabled`,`WithoutPicker`,`Surfaces`]}))();export{S as Disabled,x as Loading,h as Playground,_ as Sizes,w as Surfaces,v as WithError,b as WithSuccess,y as WithWarning,C as WithoutPicker,T as __namedExportsOrder,m as default};