import{n as e}from"./chunk-jRWAZmH_.js";import{Bo as t,Fo as n,Vo as r,bs as i,i as a,zo as o}from"./iframe-DxZG8z-m.js";import{n as s,t as c}from"./figmaDesign-CO6i5n9C.js";var l,u,d,f,p,m,h,g,_,v;e((()=>{a(),s(),l=i(),{expect:u,waitFor:d,within:f}=__STORYBOOK_MODULE_TEST__,p={title:`Overlays & Menus/Tooltip`,component:o,tags:[`autodocs`],argTypes:{type:{control:`inline-radio`,options:r},placement:{control:`inline-radio`,options:t},highContrast:{control:`boolean`}},parameters:{design:c(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=2445-49655&m=dev`),docs:{description:{component:`Floating label shown on hover or focus, explaining an icon or abbreviated control. Use for short clarifying text only.`}}}},m={args:{type:`default`,content:`Tooltip`,placement:`top`,open:!0,children:(0,l.jsx)(`div`,{className:`size-4xlg border border-amber-400`})},decorators:[e=>(0,l.jsx)(`div`,{className:`flex h-64 items-center justify-center`,children:(0,l.jsx)(e,{})})]},h={parameters:{controls:{disable:!0},docs:{description:{story:`Toggletip mode: the tooltip opens and closes on click (or Enter/Space on a focusable trigger) instead of hover/focus. Outside press and Escape close it - use for info triggers that must also work on touch devices.`}}},render:()=>(0,l.jsx)(`div`,{className:`flex h-64 items-center justify-center`,children:(0,l.jsx)(o,{type:`container`,title:`Price breakdown`,content:`Click the trigger again, press Escape or click outside to close this toggletip.`,placement:`top`,openOnClick:!0,children:(0,l.jsx)(n,{kind:`secondary`,size:`small`,label:`Toggle tooltip`,onClick:()=>{}})})})},g={parameters:{controls:{disable:!0},docs:{description:{story:`A click cancels a pending open, but moving the pointer on the trigger afterwards starts the open delay again - a navigation link that was just clicked still explains itself without leaving and re-entering it.`}}},render:()=>(0,l.jsx)(`div`,{className:`flex h-64 items-center justify-center`,children:(0,l.jsx)(o,{content:`Studios`,placement:`right`,openDelayMs:300,children:(0,l.jsx)(n,{kind:`secondary`,size:`small`,label:`Navigate`,onClick:()=>{}})})}),play:async({canvas:e,canvasElement:t,userEvent:n})=>{let r=f(t.ownerDocument.body),i=e.getByRole(`button`,{name:`Navigate`});await n.click(i),await new Promise(e=>setTimeout(e,400)),await u(r.queryByRole(`tooltip`)).not.toBeInTheDocument();let a=i.getBoundingClientRect();await n.pointer({target:i,coords:{clientX:a.left+4,clientY:a.top+4}}),await d(()=>u(r.getByRole(`tooltip`)).toHaveTextContent(`Studios`),{timeout:1500}),await n.unhover(i),await u(r.queryByRole(`tooltip`)).not.toBeInTheDocument()}},_={parameters:{controls:{disable:!0}},render:()=>(0,l.jsxs)(`div`,{className:`mx-auto space-y-12 p-8 px-[250px]`,children:[(0,l.jsxs)(`div`,{className:`space-y-6`,children:[(0,l.jsxs)(`h3`,{className:`typography-headline-06 text-text`,children:[(0,l.jsx)(`code`,{children:`default`}),` Tooltips`]}),(0,l.jsxs)(`div`,{className:`space-y-8`,children:[(0,l.jsxs)(`div`,{className:`flex justify-center gap-4 pt-12`,children:[(0,l.jsx)(o,{content:`Tooltip`,placement:`top-start`,children:(0,l.jsx)(n,{className:`w-[150px]`,kind:`primary`,size:`small`,label:`Top Start`,onClick:()=>{}})}),(0,l.jsx)(o,{content:`Tooltip`,placement:`top`,children:(0,l.jsx)(n,{className:`w-[150px]`,kind:`primary`,size:`small`,label:`Top`,onClick:()=>{}})}),(0,l.jsx)(o,{content:`Tooltip`,placement:`top-end`,children:(0,l.jsx)(n,{className:`w-[150px]`,kind:`primary`,size:`small`,label:`Top End`,onClick:()=>{}})})]}),(0,l.jsxs)(`div`,{className:`flex items-center justify-between px-12`,children:[(0,l.jsxs)(`div`,{className:`flex flex-col items-center gap-4`,children:[(0,l.jsx)(o,{content:`Tooltip`,placement:`left-start`,children:(0,l.jsx)(n,{kind:`primary`,size:`small`,label:`Left Start`,onClick:()=>{}})}),(0,l.jsx)(o,{content:`Tooltip`,placement:`left`,children:(0,l.jsx)(n,{kind:`primary`,size:`small`,label:`Left`,onClick:()=>{}})}),(0,l.jsx)(o,{content:`Tooltip`,placement:`left-end`,children:(0,l.jsx)(n,{kind:`primary`,size:`small`,label:`Left End`,onClick:()=>{}})})]}),(0,l.jsxs)(`div`,{className:`flex flex-col items-center gap-4`,children:[(0,l.jsx)(o,{content:`Tooltip`,placement:`right-start`,children:(0,l.jsx)(n,{kind:`primary`,size:`small`,label:`Right Start`,onClick:()=>{}})}),(0,l.jsx)(o,{content:`Tooltip`,placement:`right`,children:(0,l.jsx)(n,{kind:`primary`,size:`small`,label:`Right`,onClick:()=>{}})}),(0,l.jsx)(o,{content:`Tooltip`,placement:`right-end`,children:(0,l.jsx)(n,{kind:`primary`,size:`small`,label:`Right End`,onClick:()=>{}})})]})]}),(0,l.jsxs)(`div`,{className:`flex justify-center gap-4 pb-12`,children:[(0,l.jsx)(o,{content:`Tooltip`,placement:`bottom-start`,children:(0,l.jsx)(n,{className:`w-[150px]`,kind:`primary`,size:`small`,label:`Bottom Start`,onClick:()=>{}})}),(0,l.jsx)(o,{content:`Tooltip`,placement:`bottom`,children:(0,l.jsx)(n,{className:`w-[150px]`,kind:`primary`,size:`small`,label:`Bottom`,onClick:()=>{}})}),(0,l.jsx)(o,{content:`Tooltip`,placement:`bottom-end`,children:(0,l.jsx)(n,{className:`w-[150px]`,kind:`primary`,size:`small`,label:`Bottom End`,onClick:()=>{}})})]})]})]}),(0,l.jsxs)(`div`,{className:`space-y-6`,children:[(0,l.jsxs)(`h3`,{className:`typography-headline-06 text-text`,children:[(0,l.jsx)(`code`,{children:`container`}),` Tooltips`]}),(0,l.jsxs)(`div`,{className:`space-y-8`,children:[(0,l.jsxs)(`div`,{className:`flex justify-center gap-4 pt-12`,children:[(0,l.jsx)(o,{type:`container`,title:`Tooltip`,content:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus ante, pretium nec tempus sit amet, mattis mattis quam. Morbi ultrices molestie elit, a hendrerit mi iaculis consequat.`,placement:`top-start`,children:(0,l.jsx)(n,{kind:`secondary`,size:`small`,label:`Top Start`,onClick:()=>{}})}),(0,l.jsx)(o,{type:`container`,title:`Tooltip`,content:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus ante, pretium nec tempus sit amet, mattis mattis quam. Morbi ultrices molestie elit, a hendrerit mi iaculis consequat.`,placement:`top`,children:(0,l.jsx)(n,{kind:`secondary`,size:`small`,label:`Top`,onClick:()=>{}})}),(0,l.jsx)(o,{type:`container`,title:`Tooltip`,content:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus ante, pretium nec tempus sit amet, mattis mattis quam. Morbi ultrices molestie elit, a hendrerit mi iaculis consequat.`,placement:`top-end`,children:(0,l.jsx)(n,{kind:`secondary`,size:`small`,label:`Top End`,onClick:()=>{}})})]}),(0,l.jsxs)(`div`,{className:`flex items-center justify-between px-12`,children:[(0,l.jsxs)(`div`,{className:`flex flex-col items-center gap-4`,children:[(0,l.jsx)(o,{type:`container`,title:`Tooltip`,content:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus ante, pretium nec tempus sit amet, mattis mattis quam. Morbi ultrices molestie elit, a hendrerit mi iaculis consequat.`,placement:`left-start`,children:(0,l.jsx)(n,{kind:`secondary`,size:`small`,label:`Left Start`,onClick:()=>{}})}),(0,l.jsx)(o,{type:`container`,title:`Tooltip`,content:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus ante, pretium nec tempus sit amet, mattis mattis quam. Morbi ultrices molestie elit, a hendrerit mi iaculis consequat.`,placement:`left`,children:(0,l.jsx)(n,{kind:`secondary`,size:`small`,label:`Left`,onClick:()=>{}})}),(0,l.jsx)(o,{type:`container`,title:`Tooltip`,content:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus ante, pretium nec tempus sit amet, mattis mattis quam. Morbi ultrices molestie elit, a hendrerit mi iaculis consequat.`,placement:`left-end`,children:(0,l.jsx)(n,{kind:`secondary`,size:`small`,label:`Left End`,onClick:()=>{}})})]}),(0,l.jsxs)(`div`,{className:`flex flex-col items-center gap-4`,children:[(0,l.jsx)(o,{type:`container`,title:`Tooltip`,content:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus ante, pretium nec tempus sit amet, mattis mattis quam. Morbi ultrices molestie elit, a hendrerit mi iaculis consequat.`,placement:`right-start`,children:(0,l.jsx)(n,{kind:`secondary`,size:`small`,label:`Right Start`,onClick:()=>{}})}),(0,l.jsx)(o,{type:`container`,title:`Tooltip`,content:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus ante, pretium nec tempus sit amet, mattis mattis quam. Morbi ultrices molestie elit, a hendrerit mi iaculis consequat.`,placement:`right`,children:(0,l.jsx)(n,{kind:`secondary`,size:`small`,label:`Right`,onClick:()=>{}})}),(0,l.jsx)(o,{type:`container`,title:`Tooltip`,content:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus ante, pretium nec tempus sit amet, mattis mattis quam. Morbi ultrices molestie elit, a hendrerit mi iaculis consequat.`,placement:`right-end`,children:(0,l.jsx)(n,{kind:`secondary`,size:`small`,label:`Right End`,onClick:()=>{}})})]})]}),(0,l.jsxs)(`div`,{className:`flex justify-center gap-4 pb-12`,children:[(0,l.jsx)(o,{type:`container`,title:`Tooltip`,content:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus ante, pretium nec tempus sit amet, mattis mattis quam. Morbi ultrices molestie elit, a hendrerit mi iaculis consequat.`,placement:`bottom-start`,children:(0,l.jsx)(n,{kind:`secondary`,size:`small`,label:`Bottom Start`,onClick:()=>{}})}),(0,l.jsx)(o,{type:`container`,title:`Tooltip`,content:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus ante, pretium nec tempus sit amet, mattis mattis quam. Morbi ultrices molestie elit, a hendrerit mi iaculis consequat.`,placement:`bottom`,children:(0,l.jsx)(n,{kind:`secondary`,size:`small`,label:`Bottom`,onClick:()=>{}})}),(0,l.jsx)(o,{type:`container`,title:`Tooltip`,content:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus ante, pretium nec tempus sit amet, mattis mattis quam. Morbi ultrices molestie elit, a hendrerit mi iaculis consequat.`,placement:`bottom-end`,children:(0,l.jsx)(n,{kind:`secondary`,size:`small`,label:`Bottom End`,onClick:()=>{}})})]})]})]}),(0,l.jsxs)(`div`,{className:`space-y-6`,children:[(0,l.jsx)(`h3`,{className:`typography-headline-06 text-text`,children:`High contrast mode`}),(0,l.jsxs)(`div`,{className:`flex flex-wrap items-center justify-center gap-8 pt-8`,children:[(0,l.jsx)(o,{content:`Tooltip`,placement:`top`,highContrast:!0,open:!0,children:(0,l.jsx)(`div`,{className:`size-4xlg border border-amber-400`})}),(0,l.jsx)(o,{type:`container`,title:`Tooltip`,content:`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,placement:`top`,highContrast:!0,open:!0,children:(0,l.jsx)(`div`,{className:`size-4xlg border border-amber-400`})})]})]})]})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    type: "default",
    content: "Tooltip",
    placement: "top",
    open: true,
    children: <div className="size-4xlg border border-amber-400"></div>
  },
  decorators: [Story => <div className="flex h-64 items-center justify-center">
        <Story />
      </div>]
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "Toggletip mode: the tooltip opens and closes on click (or Enter/Space on a focusable trigger) instead of hover/focus. Outside press and Escape close it - use for info triggers that must also work on touch devices."
      }
    }
  },
  render: () => <div className="flex h-64 items-center justify-center">
      <Tooltip type="container" title="Price breakdown" content="Click the trigger again, press Escape or click outside to close this toggletip." placement="top" openOnClick>
        <Button kind="secondary" size="small" label="Toggle tooltip" onClick={() => {}} />
      </Tooltip>
    </div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "A click cancels a pending open, but moving the pointer on the trigger afterwards starts the open delay again - a navigation link that was just clicked still explains itself without leaving and re-entering it."
      }
    }
  },
  render: () => <div className="flex h-64 items-center justify-center">
      <Tooltip content="Studios" placement="right" openDelayMs={300}>
        <Button kind="secondary" size="small" label="Navigate" onClick={() => {}} />
      </Tooltip>
    </div>,
  play: async ({
    canvas,
    canvasElement,
    userEvent
  }) => {
    const body = within(canvasElement.ownerDocument.body);
    const trigger = canvas.getByRole("button", {
      name: "Navigate"
    });
    await userEvent.click(trigger);
    await new Promise(resolve => setTimeout(resolve, 400));
    await expect(body.queryByRole("tooltip")).not.toBeInTheDocument();
    const box = trigger.getBoundingClientRect();
    await userEvent.pointer({
      target: trigger,
      coords: {
        clientX: box.left + 4,
        clientY: box.top + 4
      }
    });
    await waitFor(() => expect(body.getByRole("tooltip")).toHaveTextContent("Studios"), {
      timeout: 1500
    });
    await userEvent.unhover(trigger);
    await expect(body.queryByRole("tooltip")).not.toBeInTheDocument();
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="mx-auto space-y-12 p-8 px-[250px]">
      {/* Default Tooltips */}
      <div className="space-y-6">
        <h3 className="typography-headline-06 text-text">
          <code>default</code> Tooltips
        </h3>
        <div className="space-y-8">
          {/* Top placements */}
          <div className="flex justify-center gap-4 pt-12">
            <Tooltip content="Tooltip" placement="top-start">
              <Button className="w-[150px]" kind="primary" size="small" label="Top Start" onClick={() => {}} />
            </Tooltip>
            <Tooltip content="Tooltip" placement="top">
              <Button className="w-[150px]" kind="primary" size="small" label="Top" onClick={() => {}} />
            </Tooltip>
            <Tooltip content="Tooltip" placement="top-end">
              <Button className="w-[150px]" kind="primary" size="small" label="Top End" onClick={() => {}} />
            </Tooltip>
          </div>

          {/* Side placements */}
          <div className="flex items-center justify-between px-12">
            <div className="flex flex-col items-center gap-4">
              <Tooltip content="Tooltip" placement="left-start">
                <Button kind="primary" size="small" label="Left Start" onClick={() => {}} />
              </Tooltip>
              <Tooltip content="Tooltip" placement="left">
                <Button kind="primary" size="small" label="Left" onClick={() => {}} />
              </Tooltip>
              <Tooltip content="Tooltip" placement="left-end">
                <Button kind="primary" size="small" label="Left End" onClick={() => {}} />
              </Tooltip>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Tooltip content="Tooltip" placement="right-start">
                <Button kind="primary" size="small" label="Right Start" onClick={() => {}} />
              </Tooltip>
              <Tooltip content="Tooltip" placement="right">
                <Button kind="primary" size="small" label="Right" onClick={() => {}} />
              </Tooltip>
              <Tooltip content="Tooltip" placement="right-end">
                <Button kind="primary" size="small" label="Right End" onClick={() => {}} />
              </Tooltip>
            </div>
          </div>

          {/* Bottom placements */}
          <div className="flex justify-center gap-4 pb-12">
            <Tooltip content="Tooltip" placement="bottom-start">
              <Button className="w-[150px]" kind="primary" size="small" label="Bottom Start" onClick={() => {}} />
            </Tooltip>
            <Tooltip content="Tooltip" placement="bottom">
              <Button className="w-[150px]" kind="primary" size="small" label="Bottom" onClick={() => {}} />
            </Tooltip>
            <Tooltip content="Tooltip" placement="bottom-end">
              <Button className="w-[150px]" kind="primary" size="small" label="Bottom End" onClick={() => {}} />
            </Tooltip>
          </div>
        </div>
      </div>

      {/* Container Tooltips */}
      <div className="space-y-6">
        <h3 className="typography-headline-06 text-text">
          <code>container</code> Tooltips
        </h3>
        <div className="space-y-8">
          {/* Top placements */}
          <div className="flex justify-center gap-4 pt-12">
            <Tooltip type="container" title="Tooltip" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus ante, pretium nec tempus sit amet, mattis mattis quam. Morbi ultrices molestie elit, a hendrerit mi iaculis consequat." placement="top-start">
              <Button kind="secondary" size="small" label="Top Start" onClick={() => {}} />
            </Tooltip>
            <Tooltip type="container" title="Tooltip" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus ante, pretium nec tempus sit amet, mattis mattis quam. Morbi ultrices molestie elit, a hendrerit mi iaculis consequat." placement="top">
              <Button kind="secondary" size="small" label="Top" onClick={() => {}} />
            </Tooltip>
            <Tooltip type="container" title="Tooltip" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus ante, pretium nec tempus sit amet, mattis mattis quam. Morbi ultrices molestie elit, a hendrerit mi iaculis consequat." placement="top-end">
              <Button kind="secondary" size="small" label="Top End" onClick={() => {}} />
            </Tooltip>
          </div>

          {/* Side placements */}
          <div className="flex items-center justify-between px-12">
            <div className="flex flex-col items-center gap-4">
              <Tooltip type="container" title="Tooltip" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus ante, pretium nec tempus sit amet, mattis mattis quam. Morbi ultrices molestie elit, a hendrerit mi iaculis consequat." placement="left-start">
                <Button kind="secondary" size="small" label="Left Start" onClick={() => {}} />
              </Tooltip>
              <Tooltip type="container" title="Tooltip" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus ante, pretium nec tempus sit amet, mattis mattis quam. Morbi ultrices molestie elit, a hendrerit mi iaculis consequat." placement="left">
                <Button kind="secondary" size="small" label="Left" onClick={() => {}} />
              </Tooltip>
              <Tooltip type="container" title="Tooltip" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus ante, pretium nec tempus sit amet, mattis mattis quam. Morbi ultrices molestie elit, a hendrerit mi iaculis consequat." placement="left-end">
                <Button kind="secondary" size="small" label="Left End" onClick={() => {}} />
              </Tooltip>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Tooltip type="container" title="Tooltip" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus ante, pretium nec tempus sit amet, mattis mattis quam. Morbi ultrices molestie elit, a hendrerit mi iaculis consequat." placement="right-start">
                <Button kind="secondary" size="small" label="Right Start" onClick={() => {}} />
              </Tooltip>
              <Tooltip type="container" title="Tooltip" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus ante, pretium nec tempus sit amet, mattis mattis quam. Morbi ultrices molestie elit, a hendrerit mi iaculis consequat." placement="right">
                <Button kind="secondary" size="small" label="Right" onClick={() => {}} />
              </Tooltip>
              <Tooltip type="container" title="Tooltip" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus ante, pretium nec tempus sit amet, mattis mattis quam. Morbi ultrices molestie elit, a hendrerit mi iaculis consequat." placement="right-end">
                <Button kind="secondary" size="small" label="Right End" onClick={() => {}} />
              </Tooltip>
            </div>
          </div>

          {/* Bottom placements */}
          <div className="flex justify-center gap-4 pb-12">
            <Tooltip type="container" title="Tooltip" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus ante, pretium nec tempus sit amet, mattis mattis quam. Morbi ultrices molestie elit, a hendrerit mi iaculis consequat." placement="bottom-start">
              <Button kind="secondary" size="small" label="Bottom Start" onClick={() => {}} />
            </Tooltip>
            <Tooltip type="container" title="Tooltip" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus ante, pretium nec tempus sit amet, mattis mattis quam. Morbi ultrices molestie elit, a hendrerit mi iaculis consequat." placement="bottom">
              <Button kind="secondary" size="small" label="Bottom" onClick={() => {}} />
            </Tooltip>
            <Tooltip type="container" title="Tooltip" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus ante, pretium nec tempus sit amet, mattis mattis quam. Morbi ultrices molestie elit, a hendrerit mi iaculis consequat." placement="bottom-end">
              <Button kind="secondary" size="small" label="Bottom End" onClick={() => {}} />
            </Tooltip>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="typography-headline-06 text-text">High contrast mode</h3>
        <div className="flex flex-wrap items-center justify-center gap-8 pt-8">
          <Tooltip content="Tooltip" placement="top" highContrast open>
            <div className="size-4xlg border border-amber-400" />
          </Tooltip>
          <Tooltip type="container" title="Tooltip" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." placement="top" highContrast open>
            <div className="size-4xlg border border-amber-400" />
          </Tooltip>
        </div>
      </div>
    </div>
}`,..._.parameters?.docs?.source}}},v=[`Playground`,`OpenOnClick`,`ReopensAfterClick`,`Overview`]}))();export{h as OpenOnClick,_ as Overview,m as Playground,g as ReopensAfterClick,v as __namedExportsOrder,p as default};