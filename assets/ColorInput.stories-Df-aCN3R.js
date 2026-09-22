import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Ai as n,Ds as r,Mi as i,St as a,fs as o,ji as s,t as c}from"./iframe-BdpsU0Re.js";import{n as l,t as u}from"./figmaDesign-CO6i5n9C.js";import{n as d,t as f}from"./surfaceStoryShell-DW8TOtZk.js";var p,m,h,g,_,v,y,b,x,S,C,w,T,E,D;e((()=>{d(),p=t(r(),1),c(),l(),m=o(),{action:h}=__STORYBOOK_MODULE_ACTIONS__,g={title:`Inputs & Controls/ColorInput`,component:a,tags:[`autodocs`],argTypes:{surface:{control:`inline-radio`,options:i},size:{control:`inline-radio`,options:n},state:{control:`inline-radio`,options:s},disabled:{control:`boolean`},hideLabel:{control:`boolean`},disablePicker:{control:`boolean`},loading:{control:`boolean`},label:{control:`text`},placeholder:{control:`text`},helperText:{control:`text`},successMessage:{control:`text`},warningMessage:{control:`text`},errorMessage:{control:`text`},loadingMessage:{control:`text`}},args:{surface:`default`,id:`playground-color-input`,label:`Brand color`,placeholder:`000000`,size:`medium`,helperText:`Enter a hex value or pick one from the palette`,errorMessage:`Please enter a valid hex color`,warningMessage:`This color may not meet contrast requirements`,successMessage:`Color saved`,loadingMessage:`Saving...`},parameters:{design:u(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=5088-819&m=dev`),docs:{description:{component:"Hex color input with an integrated ColorPicker popover. Use for theme, brand, and component color settings. The leading `#` is visual only - the value is normalised to `#RRGGBB`."}}}},_={args:{},render:e=>{let[t,n]=(0,p.useState)(`#0291FF`);return(0,m.jsxs)(`div`,{className:`gap-md flex flex-col`,children:[(0,m.jsx)(a,{...e,value:t,onValueChange:n}),(0,m.jsxs)(`div`,{className:`typography-label text-text-accent`,children:[`Current value: `,(0,m.jsx)(`code`,{children:t??`-`})]})]})}},v=({size:e})=>{let[t,n]=(0,p.useState)(`#10B981`);return(0,m.jsx)(a,{id:`color-input-${e}`,label:`${e.charAt(0).toUpperCase()+e.slice(1)} size`,size:e,value:t,onValueChange:n})},y={parameters:{controls:{disable:!0}},render:()=>(0,m.jsx)(`div`,{className:`gap-lg flex flex-col`,children:n.map(e=>(0,m.jsx)(v,{size:e},e))})},b={args:{id:`error-color-input`,label:`Accent color`,state:`error`,errorMessage:`Please enter a valid hex color`},render:e=>{let[t,n]=(0,p.useState)(`#GGGGGG`);return(0,m.jsx)(a,{...e,value:t,onValueChange:n})}},x={args:{id:`warning-color-input`,label:`Background color`,state:`warning`,warningMessage:`Low contrast against body text`},render:e=>{let[t,n]=(0,p.useState)(`#F0F1F2`);return(0,m.jsx)(a,{...e,value:t,onValueChange:n})}},S={args:{id:`success-color-input`,label:`Brand color`,state:`success`,successMessage:`Looks good!`},render:e=>{let[t,n]=(0,p.useState)(`#0D9467`);return(0,m.jsx)(a,{...e,value:t,onValueChange:n})}},C={args:{id:`loading-color-input`,label:`Theme color`,loading:!0,loadingMessage:`Saving...`},render:e=>{let[t,n]=(0,p.useState)(`#FF923F`);return(0,m.jsx)(a,{...e,value:t,onValueChange:n})}},w={args:{id:`disabled-color-input`,label:`Theme color`,disabled:!0},render:e=>(0,m.jsx)(a,{...e,defaultValue:`#6366F1`,onValueChange:()=>{}})},T={args:{id:`no-picker-color-input`,label:`Hex value`,disablePicker:!0,helperText:`Type a hex value - picker is disabled`},render:e=>{let[t,n]=(0,p.useState)(`#15171A`);return(0,m.jsx)(a,{...e,value:t,onValueChange:n})}},E={render:e=>(0,m.jsx)(f,{children:t=>(0,m.jsx)(a,{...e,id:`color-input-${t}`,surface:t,value:`#6366F1`,onValueChange:h(`onValueChange`)})})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="gap-lg flex flex-col">
      {InputSizes.map(size => <SizeRow key={size} size={size} />)}
    </div>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    id: "disabled-color-input",
    label: "Theme color",
    disabled: true
  },
  render: args => <ColorInput {...args} defaultValue="#6366F1" onValueChange={() => {}} />
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: args => <SurfaceStoryShell>
      {surface => <ColorInput {...args} id={\`color-input-\${surface}\`} surface={surface} value="#6366F1" onValueChange={action("onValueChange")} />}
    </SurfaceStoryShell>
}`,...E.parameters?.docs?.source}}},D=[`Playground`,`Sizes`,`WithError`,`WithWarning`,`WithSuccess`,`Loading`,`Disabled`,`WithoutPicker`,`Surfaces`]}))();export{w as Disabled,C as Loading,_ as Playground,y as Sizes,E as Surfaces,b as WithError,S as WithSuccess,x as WithWarning,T as WithoutPicker,D as __namedExportsOrder,g as default};