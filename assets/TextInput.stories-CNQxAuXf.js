import{n as e}from"./chunk-jRWAZmH_.js";import{Bi as t,Nc as n,Yr as r,ga as i,ha as a,ma as o,t as s}from"./iframe-Cv20BaAW.js";import{n as c,t as l}from"./figmaDesign-DLesXS3c.js";import{n as u,t as d}from"./surfaceStoryShell-1QbwSQhB.js";var f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k;e((()=>{u(),s(),c(),f=n(),{expect:p,waitFor:m,within:h}=__STORYBOOK_MODULE_TEST__,g={title:`Components/TextInput`,component:t,tags:[`autodocs`],argTypes:{surface:{control:`inline-radio`,options:i},size:{control:`inline-radio`,options:o},disabled:{control:`boolean`},readOnly:{control:`boolean`},loading:{control:`boolean`},successMessage:{control:`text`},errorMessage:{control:`text`},hideLabel:{control:`boolean`},label:{control:`text`},placeholder:{control:`text`},state:{control:`inline-radio`,options:a}},args:{surface:`default`,errorMessage:`Error Message`,warningMessage:`Warning Message`,successMessage:`Success`,loadingMessage:`Loading...`,helperText:`Helper Text`,id:`playground-text-input`,label:`Label`,placeholder:`Placeholder text...`,size:`medium`},parameters:{design:l(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=2345-1233`),docs:{description:{component:`Standard labeled text input with validation states. Use as the default single-line field in forms.`}}}},_={args:{}},v={args:{label:`Email address`,size:`large`,disabled:!0,value:`hendrik@bricksandbraces.com`,helperText:void 0,placeholder:void 0},render:e=>(0,f.jsx)(`div`,{className:`w-[150px]`,children:(0,f.jsx)(t,{...e})})},y={args:{id:`read-only-text-input`,label:`Organization URL`,defaultValue:`bricksandbraces`,readOnly:!0,helperText:void 0},play:async({canvas:e,canvasElement:t,userEvent:n})=>{let r=e.getByLabelText(`Organization URL`);await p(r).toHaveAttribute(`readonly`),await p(r).toBeEnabled();let i=h(t.ownerDocument.body),a=t.querySelector(`[data-input-read-only-indicator]`);await p(a).toBeInTheDocument(),await p(i.queryByRole(`tooltip`)).not.toBeInTheDocument(),await n.hover(a),await p(await i.findByRole(`tooltip`)).toHaveTextContent(`Not editable`),await n.unhover(a),await p(i.queryByRole(`tooltip`)).not.toBeInTheDocument(),await n.tab(),await p(r).toHaveFocus(),await p(await i.findByRole(`tooltip`)).toHaveTextContent(`Not editable`),await n.click(t),await p(r).not.toHaveFocus(),await p(i.queryByRole(`tooltip`)).not.toBeInTheDocument()}},b={args:{id:`slot-text-input`,label:`Label`,placeholder:`Placeholder text...`,trailingSlot:(0,f.jsx)(`span`,{className:`typography-label text-text-accent`,children:`ID`})},render:e=>(0,f.jsx)(t,{...e})},x={parameters:{controls:{disable:!0}},args:{showLabels:!1},render:e=>{let n=o.toReversed().flatMap(e=>[{size:e,loading:!1,disabled:!1,state:`default`},{size:e,loading:!1,disabled:!0,state:`default`},{size:e,loading:!0,disabled:!1,state:`default`},{size:e,loading:!1,disabled:!1,state:`error`},{size:e,loading:!1,disabled:!1,state:`success`}]),r=a;return(0,f.jsx)(`div`,{className:`gap-xlg grid pb-[128px]`,style:{display:`grid`,gridTemplateColumns:`repeat(${r.length}, minmax(0, 1fr))`},children:n.map((n,i)=>r.map((r,a)=>{let o=`${r}-${n.size}-${n.loading?`loading`:`default`}-${n.disabled?`disabled`:`enabled`}-${n.state}`;return(0,f.jsxs)(`div`,{style:{gridColumn:`${a+1} / span 1`,gridRow:`${i+1} / span 1`},children:[e.showLabels&&(0,f.jsxs)(`p`,{className:`typography-body-small text-text`,children:[`size=`,n.size,`, state=`,r,n.loading?`, loading`:``,n.disabled?`, disabled`:``,n.state===`default`?``:`, status=${n.state}`]}),(0,f.jsxs)(`div`,{className:`gap-sm flex flex-col`,children:[(0,f.jsx)(`div`,{className:`pb-[32px]`,children:(0,f.jsx)(t,{id:`${r}-${n.size}-${i}-empty`,label:`Label`,placeholder:`Placeholder text...`,helperText:`Helper Text`,loadingMessage:`Loading...`,errorMessage:`Error Message`,successMessage:`Success`,warningMessage:`Warning Message`,size:n.size,state:n.state,loading:n.loading,disabled:n.disabled})}),(0,f.jsx)(`div`,{className:`pb-[32px]`,children:(0,f.jsx)(t,{id:`${r}-${n.size}-${i}-filled`,label:`Label`,placeholder:`Placeholder text...`,helperText:`Helper Text`,loadingMessage:`Loading...`,errorMessage:`Error Message`,successMessage:`Success`,warningMessage:`Warning Message`,size:n.size,state:n.state,loading:n.loading,disabled:n.disabled,value:`john.doe@example.com`})})]})]},o)}))})}},S=l(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=5965-3910`),C=e=>e.closest(`div:has(> [data-input-inline-surface])`).querySelector(`[data-input-inline-surface]`),w={args:{id:`inline-text-input`,inline:!0,label:`Label`,placeholder:`Placeholder`,helperText:void 0,reserveInlineNotificationHeight:!1},argTypes:{size:{table:{disable:!0}},surface:{table:{disable:!0}}},parameters:{design:S},play:async({canvas:e,canvasElement:t,userEvent:n})=>{let r=e.getByLabelText(`Label`),i=C(r),a=CSS.supports(`field-sizing`,`content`),o=r.getBoundingClientRect().width;await n.click(r),await p(r).toHaveFocus(),await p(r).not.toHaveAttribute(`placeholder`),await m(()=>p(getComputedStyle(i).boxShadow).toBe(`none`)),a&&await p(r.getBoundingClientRect().width).toBeLessThan(o),await n.type(r,`Quarterly revenue forecast`),await p(r).toHaveValue(`Quarterly revenue forecast`),a&&await p(r.getBoundingClientRect().width).toBeGreaterThan(o),await n.clear(r),await n.click(t),await p(r).not.toHaveFocus(),await p(r).toHaveAttribute(`placeholder`,`Placeholder`)}},T={args:{...w.args,id:`inline-keyboard-focus-text-input`},argTypes:w.argTypes,parameters:{design:S},play:async({canvas:e,userEvent:t})=>{let n=e.getByLabelText(`Label`),r=C(n);await t.tab(),await p(n).toHaveFocus(),await m(()=>p(getComputedStyle(r).boxShadow).not.toBe(`none`))}},E={parameters:{controls:{disable:!0},design:S},render:()=>(0,f.jsxs)(`div`,{className:`gap-xlg flex flex-col items-start`,children:[(0,f.jsx)(t,{id:`inline-enabled`,inline:!0,label:`Enabled`,placeholder:`Placeholder`,reserveInlineNotificationHeight:!1}),(0,f.jsx)(t,{id:`inline-filled`,inline:!0,label:`Filled`,placeholder:`Placeholder`,defaultValue:`Text`,reserveInlineNotificationHeight:!1}),(0,f.jsx)(t,{id:`inline-disabled`,inline:!0,label:`Disabled`,placeholder:`Placeholder`,defaultValue:`Text`,disabled:!0,reserveInlineNotificationHeight:!1}),(0,f.jsx)(t,{id:`inline-error`,inline:!0,label:`Error`,placeholder:`Placeholder`,defaultValue:`Text`,state:`error`,errorMessage:`Error Message`}),(0,f.jsx)(t,{id:`inline-warning`,inline:!0,label:`Warning`,placeholder:`Placeholder`,defaultValue:`Text`,state:`warning`,warningMessage:`Warning Message`}),(0,f.jsx)(t,{id:`inline-success`,inline:!0,label:`Success`,placeholder:`Placeholder`,defaultValue:`Text`,state:`success`,reserveInlineNotificationHeight:!1}),(0,f.jsx)(t,{id:`inline-loading`,inline:!0,label:`Loading`,placeholder:`Placeholder`,defaultValue:`Text`,loading:!0,reserveInlineNotificationHeight:!1}),(0,f.jsx)(t,{id:`inline-slot`,inline:!0,label:`Slot`,placeholder:`Placeholder`,defaultValue:`Text`,trailingSlot:(0,f.jsx)(`span`,{className:`typography-label text-text-accent`,children:`ID`}),reserveInlineNotificationHeight:!1})]}),play:async({canvas:e})=>{await p(e.getByLabelText(`Disabled`)).toHaveAttribute(`readonly`);let t=e.getByLabelText(`Error`);await p(t).toHaveAttribute(`aria-invalid`,`true`),await p(t).toHaveAccessibleDescription(`Error Message`),await p(e.getByLabelText(`Warning`)).toHaveAccessibleDescription(`Warning Message`),await p(e.getByLabelText(`Loading`)).toHaveAttribute(`aria-busy`,`true`)}},D={render:()=>(0,f.jsx)(r,{})},O={render:e=>(0,f.jsx)(d,{children:n=>(0,f.jsx)(t,{...e,surface:n})})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {}
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Email address",
    size: "large",
    disabled: true,
    value: "hendrik@bricksandbraces.com",
    helperText: undefined,
    placeholder: undefined
  },
  render: args => <div className="w-[150px]">
      <TextInput {...args} />
    </div>
}`,...v.parameters?.docs?.source},description:{story:`A disabled input whose value overflows a narrow field. The scroll-overflow fade
must match the \`background-disabled\` surface - not the input surface - so it does
not paint a mismatched band at the trailing edge.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    id: "read-only-text-input",
    label: "Organization URL",
    defaultValue: "bricksandbraces",
    readOnly: true,
    helperText: undefined
  },
  play: async ({
    canvas,
    canvasElement,
    userEvent
  }) => {
    const input = canvas.getByLabelText("Organization URL");
    await expect(input).toHaveAttribute("readonly");
    await expect(input).toBeEnabled();
    const body = within(canvasElement.ownerDocument.body);
    const indicator = canvasElement.querySelector("[data-input-read-only-indicator]");
    await expect(indicator).toBeInTheDocument();
    await expect(body.queryByRole("tooltip")).not.toBeInTheDocument();
    await userEvent.hover(indicator!);
    await expect(await body.findByRole("tooltip")).toHaveTextContent("Not editable");
    await userEvent.unhover(indicator!);
    await expect(body.queryByRole("tooltip")).not.toBeInTheDocument();
    await userEvent.tab();
    await expect(input).toHaveFocus();
    await expect(await body.findByRole("tooltip")).toHaveTextContent("Not editable");
    await userEvent.click(canvasElement);
    await expect(input).not.toHaveFocus();
    await expect(body.queryByRole("tooltip")).not.toBeInTheDocument();
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    id: "slot-text-input",
    label: "Label",
    placeholder: "Placeholder text...",
    trailingSlot: <span className="typography-label text-text-accent">ID</span>
  },
  render: args => <TextInput {...args} />
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  args: {
    showLabels: false
  },
  render: (args: any) => {
    const rows = InputSizes.toReversed().flatMap(size => [{
      size,
      loading: false,
      disabled: false,
      state: "default" as const
    }, {
      size,
      loading: false,
      disabled: true,
      state: "default" as const
    }, {
      size,
      loading: true,
      disabled: false,
      state: "default" as const
    }, {
      size,
      loading: false,
      disabled: false,
      state: "error" as const
    }, {
      size,
      loading: false,
      disabled: false,
      state: "success" as const
    }]);
    const OverviewStates = InputStates;
    return <div className="gap-xlg grid pb-[128px]" style={{
      display: "grid",
      gridTemplateColumns: \`repeat(\${OverviewStates.length}, minmax(0, 1fr))\`
    }}>
        {rows.map((rowConfig, rowIndex) => {
        return OverviewStates.map((state, columnIndex) => {
          const key = \`\${state}-\${rowConfig.size}-\${rowConfig.loading ? "loading" : "default"}-\${rowConfig.disabled ? "disabled" : "enabled"}-\${rowConfig.state}\`;
          return <div key={key} style={{
            gridColumn: \`\${columnIndex + 1} / span 1\`,
            gridRow: \`\${rowIndex + 1} / span 1\`
          }}>
                {args.showLabels && <p className="typography-body-small text-text">
                    size={rowConfig.size}, state={state}
                    {rowConfig.loading ? ", loading" : ""}
                    {rowConfig.disabled ? ", disabled" : ""}
                    {rowConfig.state !== "default" ? \`, status=\${rowConfig.state}\` : ""}
                  </p>}
                <div className="gap-sm flex flex-col">
                  <div className="pb-[32px]">
                    <TextInput id={\`\${state}-\${rowConfig.size}-\${rowIndex}-empty\`} label="Label" placeholder="Placeholder text..." helperText="Helper Text" loadingMessage="Loading..." errorMessage="Error Message" successMessage="Success" warningMessage="Warning Message" size={rowConfig.size} state={rowConfig.state} loading={rowConfig.loading} disabled={rowConfig.disabled} />
                  </div>
                  <div className="pb-[32px]">
                    <TextInput id={\`\${state}-\${rowConfig.size}-\${rowIndex}-filled\`} label="Label" placeholder="Placeholder text..." helperText="Helper Text" loadingMessage="Loading..." errorMessage="Error Message" successMessage="Success" warningMessage="Warning Message" size={rowConfig.size} state={rowConfig.state} loading={rowConfig.loading} disabled={rowConfig.disabled} value="john.doe@example.com" />
                  </div>
                </div>
              </div>;
        });
      })}
      </div>;
  }
}`,...x.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    id: "inline-text-input",
    inline: true,
    label: "Label",
    placeholder: "Placeholder",
    helperText: undefined,
    reserveInlineNotificationHeight: false
  },
  argTypes: {
    size: {
      table: {
        disable: true
      }
    },
    surface: {
      table: {
        disable: true
      }
    }
  },
  parameters: {
    design: inlineDesign
  },
  play: async ({
    canvas,
    canvasElement,
    userEvent
  }) => {
    const input = canvas.getByLabelText("Label");
    const surface = getInlineSurface(input);
    const hugsContent = CSS.supports("field-sizing", "content");
    const placeholderWidth = input.getBoundingClientRect().width;
    await userEvent.click(input);
    await expect(input).toHaveFocus();
    await expect(input).not.toHaveAttribute("placeholder");
    await waitFor(() => expect(getComputedStyle(surface).boxShadow).toBe("none"));
    if (hugsContent) {
      await expect(input.getBoundingClientRect().width).toBeLessThan(placeholderWidth);
    }
    await userEvent.type(input, "Quarterly revenue forecast");
    await expect(input).toHaveValue("Quarterly revenue forecast");
    if (hugsContent) {
      await expect(input.getBoundingClientRect().width).toBeGreaterThan(placeholderWidth);
    }
    await userEvent.clear(input);
    await userEvent.click(canvasElement);
    await expect(input).not.toHaveFocus();
    await expect(input).toHaveAttribute("placeholder", "Placeholder");
  }
}`,...w.parameters?.docs?.source},description:{story:`The field for rows and tables: no background, border or side padding, one
height and only as wide as its content. Hover and focus show a soft surface
that reaches 8px past the content on both sides.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    ...Inline.args,
    id: "inline-keyboard-focus-text-input"
  },
  argTypes: Inline.argTypes,
  parameters: {
    design: inlineDesign
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    const input = canvas.getByLabelText("Label");
    const surface = getInlineSurface(input);
    await userEvent.tab();
    await expect(input).toHaveFocus();
    await waitFor(() => expect(getComputedStyle(surface).boxShadow).not.toBe("none"));
  }
}`,...T.parameters?.docs?.source},description:{story:`Reached with the keyboard, the surface carries the focus ring.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    design: inlineDesign
  },
  render: () => <div className="gap-xlg flex flex-col items-start">
      <TextInput id="inline-enabled" inline label="Enabled" placeholder="Placeholder" reserveInlineNotificationHeight={false} />
      <TextInput id="inline-filled" inline label="Filled" placeholder="Placeholder" defaultValue="Text" reserveInlineNotificationHeight={false} />
      <TextInput id="inline-disabled" inline label="Disabled" placeholder="Placeholder" defaultValue="Text" disabled reserveInlineNotificationHeight={false} />
      <TextInput id="inline-error" inline label="Error" placeholder="Placeholder" defaultValue="Text" state="error" errorMessage="Error Message" />
      <TextInput id="inline-warning" inline label="Warning" placeholder="Placeholder" defaultValue="Text" state="warning" warningMessage="Warning Message" />
      <TextInput id="inline-success" inline label="Success" placeholder="Placeholder" defaultValue="Text" state="success" reserveInlineNotificationHeight={false} />
      <TextInput id="inline-loading" inline label="Loading" placeholder="Placeholder" defaultValue="Text" loading reserveInlineNotificationHeight={false} />
      <TextInput id="inline-slot" inline label="Slot" placeholder="Placeholder" defaultValue="Text" trailingSlot={<span className="typography-label text-text-accent">ID</span>} reserveInlineNotificationHeight={false} />
    </div>,
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByLabelText("Disabled")).toHaveAttribute("readonly");
    const error = canvas.getByLabelText("Error");
    await expect(error).toHaveAttribute("aria-invalid", "true");
    await expect(error).toHaveAccessibleDescription("Error Message");
    await expect(canvas.getByLabelText("Warning")).toHaveAccessibleDescription("Warning Message");
    await expect(canvas.getByLabelText("Loading")).toHaveAttribute("aria-busy", "true");
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <TextInputSkeleton />
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: args => <SurfaceStoryShell>
      {surface => <TextInput {...args} surface={surface} />}
    </SurfaceStoryShell>
}`,...O.parameters?.docs?.source}}},k=[`Playground`,`DisabledOverflow`,`ReadOnly`,`Slot`,`Overview`,`Inline`,`InlineKeyboardFocus`,`InlineStates`,`Skeleton`,`Surfaces`]}))();export{v as DisabledOverflow,w as Inline,T as InlineKeyboardFocus,E as InlineStates,x as Overview,_ as Playground,y as ReadOnly,D as Skeleton,b as Slot,O as Surfaces,k as __namedExportsOrder,g as default};