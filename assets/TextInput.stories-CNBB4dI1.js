import{n as e}from"./chunk-jRWAZmH_.js";import{Ca as t,Ji as n,Sa as r,Ta as i,qc as a,ri as o,t as s,wa as c}from"./iframe-BmBSRsrc.js";import{n as l,t as u}from"./figmaDesign-D2IpkIki.js";import{n as d,t as f}from"./surfaceStoryShell-Do0iB157.js";var p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A;e((()=>{d(),s(),l(),p=a(),{expect:m,waitFor:h,within:g}=__STORYBOOK_MODULE_TEST__,_={title:`Components/TextInput`,component:n,tags:[`autodocs`],argTypes:{surface:{control:`inline-radio`,options:c},size:{control:`inline-radio`,options:r},disabled:{control:`boolean`},readOnly:{control:`boolean`},loading:{control:`boolean`},successMessage:{control:`text`},errorMessage:{control:`text`},hideLabel:{control:`boolean`},label:{control:`text`},placeholder:{control:`text`},state:{control:`inline-radio`,options:t},aiStatus:{control:`inline-radio`,options:[void 0,...i]}},args:{surface:`default`,errorMessage:`Error Message`,warningMessage:`Warning Message`,successMessage:`Success`,loadingMessage:`Loading...`,helperText:`Helper Text`,id:`playground-text-input`,label:`Label`,placeholder:`Placeholder text...`,size:`medium`},parameters:{design:u(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=2345-1233`),docs:{description:{component:`Standard labeled text input with validation states. Use as the default single-line field in forms.`}}}},v={args:{}},y={args:{label:`Email address`,size:`large`,disabled:!0,value:`hendrik@bricksandbraces.com`,helperText:void 0,placeholder:void 0},render:e=>(0,p.jsx)(`div`,{className:`w-[150px]`,children:(0,p.jsx)(n,{...e})})},b={args:{id:`read-only-text-input`,label:`Organization URL`,defaultValue:`bricksandbraces`,readOnly:!0,helperText:void 0},play:async({canvas:e,canvasElement:t,userEvent:n})=>{let r=e.getByLabelText(`Organization URL`);await m(r).toHaveAttribute(`readonly`),await m(r).toBeEnabled();let i=g(t.ownerDocument.body),a=t.querySelector(`[data-input-read-only-indicator]`);await m(a).toBeInTheDocument(),await m(i.queryByRole(`tooltip`)).not.toBeInTheDocument(),await n.hover(a),await m(await i.findByRole(`tooltip`)).toHaveTextContent(`Not editable`),await n.unhover(a),await m(i.queryByRole(`tooltip`)).not.toBeInTheDocument(),await n.tab(),await m(r).toHaveFocus(),await m(await i.findByRole(`tooltip`)).toHaveTextContent(`Not editable`),await n.click(t),await m(r).not.toHaveFocus(),await m(i.queryByRole(`tooltip`)).not.toBeInTheDocument()}},x={args:{id:`slot-text-input`,label:`Label`,placeholder:`Placeholder text...`,trailingSlot:(0,p.jsx)(`span`,{className:`typography-label text-text-accent`,children:`ID`})},render:e=>(0,p.jsx)(n,{...e})},S={parameters:{controls:{disable:!0}},args:{showLabels:!1},render:e=>{let i=r.toReversed().flatMap(e=>[{size:e,loading:!1,disabled:!1,state:`default`},{size:e,loading:!1,disabled:!0,state:`default`},{size:e,loading:!0,disabled:!1,state:`default`},{size:e,loading:!1,disabled:!1,state:`error`},{size:e,loading:!1,disabled:!1,state:`success`}]),a=t;return(0,p.jsx)(`div`,{className:`gap-xlg grid pb-[128px]`,style:{display:`grid`,gridTemplateColumns:`repeat(${a.length}, minmax(0, 1fr))`},children:i.map((t,r)=>a.map((i,a)=>{let o=`${i}-${t.size}-${t.loading?`loading`:`default`}-${t.disabled?`disabled`:`enabled`}-${t.state}`;return(0,p.jsxs)(`div`,{style:{gridColumn:`${a+1} / span 1`,gridRow:`${r+1} / span 1`},children:[e.showLabels&&(0,p.jsxs)(`p`,{className:`typography-body-small text-text`,children:[`size=`,t.size,`, state=`,i,t.loading?`, loading`:``,t.disabled?`, disabled`:``,t.state===`default`?``:`, status=${t.state}`]}),(0,p.jsxs)(`div`,{className:`gap-sm flex flex-col`,children:[(0,p.jsx)(`div`,{className:`pb-[32px]`,children:(0,p.jsx)(n,{id:`${i}-${t.size}-${r}-empty`,label:`Label`,placeholder:`Placeholder text...`,helperText:`Helper Text`,loadingMessage:`Loading...`,errorMessage:`Error Message`,successMessage:`Success`,warningMessage:`Warning Message`,size:t.size,state:t.state,loading:t.loading,disabled:t.disabled})}),(0,p.jsx)(`div`,{className:`pb-[32px]`,children:(0,p.jsx)(n,{id:`${i}-${t.size}-${r}-filled`,label:`Label`,placeholder:`Placeholder text...`,helperText:`Helper Text`,loadingMessage:`Loading...`,errorMessage:`Error Message`,successMessage:`Success`,warningMessage:`Warning Message`,size:t.size,state:t.state,loading:t.loading,disabled:t.disabled,value:`john.doe@example.com`})})]})]},o)}))})}},C=u(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=5965-3910`),w=e=>e.closest(`div:has(> [data-input-inline-surface])`).querySelector(`[data-input-inline-surface]`),T={args:{id:`inline-text-input`,inline:!0,label:`Label`,placeholder:`Placeholder`,helperText:void 0,reserveInlineNotificationHeight:!1},argTypes:{size:{table:{disable:!0}},surface:{table:{disable:!0}}},parameters:{design:C},play:async({canvas:e,canvasElement:t,userEvent:n})=>{let r=e.getByLabelText(`Label`),i=w(r),a=CSS.supports(`field-sizing`,`content`),o=r.getBoundingClientRect().width;await n.click(r),await m(r).toHaveFocus(),await m(r).not.toHaveAttribute(`placeholder`),await h(()=>m(getComputedStyle(i).boxShadow).toBe(`none`)),a&&await m(r.getBoundingClientRect().width).toBeLessThan(o),await n.type(r,`Quarterly revenue forecast`),await m(r).toHaveValue(`Quarterly revenue forecast`),a&&await m(r.getBoundingClientRect().width).toBeGreaterThan(o),await n.clear(r),await n.click(t),await m(r).not.toHaveFocus(),await m(r).toHaveAttribute(`placeholder`,`Placeholder`)}},E={args:{...T.args,id:`inline-keyboard-focus-text-input`},argTypes:T.argTypes,parameters:{design:C},play:async({canvas:e,userEvent:t})=>{let n=e.getByLabelText(`Label`),r=w(n);await t.tab(),await m(n).toHaveFocus(),await h(()=>m(getComputedStyle(r).boxShadow).not.toBe(`none`))}},D={parameters:{controls:{disable:!0},design:C},render:()=>(0,p.jsxs)(`div`,{className:`gap-xlg flex flex-col items-start`,children:[(0,p.jsx)(n,{id:`inline-enabled`,inline:!0,label:`Enabled`,placeholder:`Placeholder`,reserveInlineNotificationHeight:!1}),(0,p.jsx)(n,{id:`inline-filled`,inline:!0,label:`Filled`,placeholder:`Placeholder`,defaultValue:`Text`,reserveInlineNotificationHeight:!1}),(0,p.jsx)(n,{id:`inline-disabled`,inline:!0,label:`Disabled`,placeholder:`Placeholder`,defaultValue:`Text`,disabled:!0,reserveInlineNotificationHeight:!1}),(0,p.jsx)(n,{id:`inline-error`,inline:!0,label:`Error`,placeholder:`Placeholder`,defaultValue:`Text`,state:`error`,errorMessage:`Error Message`}),(0,p.jsx)(n,{id:`inline-warning`,inline:!0,label:`Warning`,placeholder:`Placeholder`,defaultValue:`Text`,state:`warning`,warningMessage:`Warning Message`}),(0,p.jsx)(n,{id:`inline-success`,inline:!0,label:`Success`,placeholder:`Placeholder`,defaultValue:`Text`,state:`success`,reserveInlineNotificationHeight:!1}),(0,p.jsx)(n,{id:`inline-loading`,inline:!0,label:`Loading`,placeholder:`Placeholder`,defaultValue:`Text`,loading:!0,reserveInlineNotificationHeight:!1}),(0,p.jsx)(n,{id:`inline-slot`,inline:!0,label:`Slot`,placeholder:`Placeholder`,defaultValue:`Text`,trailingSlot:(0,p.jsx)(`span`,{className:`typography-label text-text-accent`,children:`ID`}),reserveInlineNotificationHeight:!1})]}),play:async({canvas:e})=>{await m(e.getByLabelText(`Disabled`)).toHaveAttribute(`readonly`);let t=e.getByLabelText(`Error`);await m(t).toHaveAttribute(`aria-invalid`,`true`),await m(t).toHaveAccessibleDescription(`Error Message`),await m(e.getByLabelText(`Warning`)).toHaveAccessibleDescription(`Warning Message`),await m(e.getByLabelText(`Loading`)).toHaveAttribute(`aria-busy`,`true`)}},O={render:()=>(0,p.jsx)(o,{})},k={render:e=>(0,p.jsx)(f,{children:t=>(0,p.jsx)(n,{...e,surface:t})})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source},description:{story:`A disabled input whose value overflows a narrow field. The scroll-overflow fade
must match the \`background-disabled\` surface - not the input surface - so it does
not paint a mismatched band at the trailing edge.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    id: "slot-text-input",
    label: "Label",
    placeholder: "Placeholder text...",
    trailingSlot: <span className="typography-label text-text-accent">ID</span>
  },
  render: args => <TextInput {...args} />
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source},description:{story:`The field for rows and tables: no background, border or side padding, one
height and only as wide as its content. Hover and focus show a soft surface
that reaches 8px past the content on both sides.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source},description:{story:`Reached with the keyboard, the surface carries the focus ring.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <TextInputSkeleton />
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: args => <SurfaceStoryShell>
      {surface => <TextInput {...args} surface={surface} />}
    </SurfaceStoryShell>
}`,...k.parameters?.docs?.source}}},A=[`Playground`,`DisabledOverflow`,`ReadOnly`,`Slot`,`Overview`,`Inline`,`InlineKeyboardFocus`,`InlineStates`,`Skeleton`,`Surfaces`]}))();export{y as DisabledOverflow,T as Inline,E as InlineKeyboardFocus,D as InlineStates,S as Overview,v as Playground,b as ReadOnly,O as Skeleton,x as Slot,k as Surfaces,A as __namedExportsOrder,_ as default};