import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Et as n,Tc as r,aa as i,ia as a,t as o,uc as s}from"./iframe-BpP19uzV.js";import{n as c,t as l}from"./figmaDesign-DLesXS3c.js";var u,d,f,p,m,h,g,_,v;e((()=>{u=t(r(),1),o(),c(),d=s(),{expect:f}=__STORYBOOK_MODULE_TEST__,p={component:n,title:`Overlays & Menus/NumberDropdown`,tags:[`autodocs`],args:{size:`small`,min:1,max:10,step:1,disabled:!1},argTypes:{size:{control:`inline-radio`,options:a},state:{control:`inline-radio`,options:i},disabled:{control:`boolean`}},render:e=>{let[t,r]=(0,u.useState)(1);return(0,d.jsx)(n,{...e,value:t,onChange:r})},parameters:{design:l(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=6098-323`),docs:{description:{component:`Compact native select for picking a number, e.g. a quantity or rows per page. The trigger hugs its value; the option list is the platform's own picker.`}}}},m={args:{id:`playground-number-dropdown`,label:`Quantity`,hideLabel:!0},play:async({canvas:e,userEvent:t})=>{let n=e.getByRole(`combobox`,{name:`Quantity`});await f(n).toHaveValue(`1`),await t.selectOptions(n,`3`),await f(n).toHaveValue(`3`),await f(n.parentElement).toHaveTextContent(`3`)}},h={args:{id:`custom-options-number-dropdown`,label:`Rows per page`,hideLabel:!0,options:[10,25,50,100]},render:e=>{let[t,r]=(0,u.useState)(25);return(0,d.jsx)(n,{...e,value:t,onChange:r})}},g={args:{id:`disabled-number-dropdown`,label:`Quantity`,hideLabel:!0,disabled:!0}},_={parameters:{controls:{disable:!0}},render:()=>(0,d.jsx)(`div`,{className:`gap-lg flex items-start`,children:a.map(e=>(0,d.jsx)(n,{id:`number-dropdown-${e}`,label:`Quantity (${e})`,hideLabel:!0,size:e,value:1},e))})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    id: "playground-number-dropdown",
    label: "Quantity",
    hideLabel: true
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    const select = canvas.getByRole("combobox", {
      name: "Quantity"
    });
    await expect(select).toHaveValue("1");
    await userEvent.selectOptions(select, "3");
    await expect(select).toHaveValue("3");
    await expect(select.parentElement).toHaveTextContent("3");
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    id: "custom-options-number-dropdown",
    label: "Rows per page",
    hideLabel: true,
    options: [10, 25, 50, 100]
  },
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState<number | null>(25);
    return <NumberDropdown {...args} value={value} onChange={setValue} />;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    id: "disabled-number-dropdown",
    label: "Quantity",
    hideLabel: true,
    disabled: true
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="gap-lg flex items-start">
      {InputSizes.map(size => <NumberDropdown key={size} id={\`number-dropdown-\${size}\`} label={\`Quantity (\${size})\`} hideLabel size={size} value={1} />)}
    </div>
}`,..._.parameters?.docs?.source}}},v=[`Playground`,`CustomOptions`,`Disabled`,`Sizes`]}))();export{h as CustomOptions,g as Disabled,m as Playground,_ as Sizes,v as __namedExportsOrder,p as default};