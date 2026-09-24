import{n as e}from"./chunk-jRWAZmH_.js";import{Fi as t,Fr as n,Ii as r,Kt as i,Pi as a,bs as o,i as s}from"./iframe-DdJMnWtf.js";import{n as c,t as l}from"./figmaDesign-CO6i5n9C.js";import{n as u,t as d}from"./surfaceStoryShell-BE4KYrTe.js";var f,p,m,h,g,_,v,y,b,x,S,C;e((()=>{u(),s(),c(),f=o(),{expect:p,within:m}=__STORYBOOK_MODULE_TEST__,h={title:`Inputs & Controls/TextInput`,component:i,tags:[`autodocs`],argTypes:{surface:{control:`inline-radio`,options:r},size:{control:`inline-radio`,options:a},disabled:{control:`boolean`},readOnly:{control:`boolean`},loading:{control:`boolean`},successMessage:{control:`text`},errorMessage:{control:`text`},hideLabel:{control:`boolean`},label:{control:`text`},placeholder:{control:`text`},state:{control:`inline-radio`,options:t}},args:{surface:`default`,errorMessage:`Error Message`,warningMessage:`Warning Message`,successMessage:`Success`,loadingMessage:`Loading...`,helperText:`Helper Text`,id:`playground-text-input`,label:`Label`,placeholder:`Placeholder text...`,size:`medium`},parameters:{design:l(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=2345-1233`),docs:{description:{component:`Standard labeled text input with validation states. Use as the default single-line field in forms.`}}}},g={args:{}},_={args:{label:`Email address`,size:`large`,disabled:!0,value:`hendrik@bricksandbraces.com`,helperText:void 0,placeholder:void 0},render:e=>(0,f.jsx)(`div`,{className:`w-[150px]`,children:(0,f.jsx)(i,{...e})})},v={args:{id:`read-only-text-input`,label:`Organization URL`,defaultValue:`bricksandbraces`,readOnly:!0,helperText:void 0},play:async({canvas:e,canvasElement:t,userEvent:n})=>{let r=e.getByLabelText(`Organization URL`);await p(r).toHaveAttribute(`readonly`),await p(r).toBeEnabled();let i=m(t.ownerDocument.body),a=t.querySelector(`[data-input-read-only-indicator]`);await p(a).toBeInTheDocument(),await p(i.queryByRole(`tooltip`)).not.toBeInTheDocument(),await n.hover(a),await p(await i.findByRole(`tooltip`)).toHaveTextContent(`Not editable`),await n.unhover(a),await p(i.queryByRole(`tooltip`)).not.toBeInTheDocument(),await n.tab(),await p(r).toHaveFocus(),await p(await i.findByRole(`tooltip`)).toHaveTextContent(`Not editable`),await n.click(t),await p(r).not.toHaveFocus(),await p(i.queryByRole(`tooltip`)).not.toBeInTheDocument()}},y={args:{id:`slot-text-input`,label:`Label`,placeholder:`Placeholder text...`,trailingSlot:(0,f.jsx)(`span`,{className:`typography-label text-text-accent`,children:`ID`})},render:e=>(0,f.jsx)(i,{...e})},b={parameters:{controls:{disable:!0}},args:{showLabels:!1},render:e=>{let n=a.toReversed().flatMap(e=>[{size:e,loading:!1,disabled:!1,state:`default`},{size:e,loading:!1,disabled:!0,state:`default`},{size:e,loading:!0,disabled:!1,state:`default`},{size:e,loading:!1,disabled:!1,state:`error`},{size:e,loading:!1,disabled:!1,state:`success`}]),r=t;return(0,f.jsx)(`div`,{className:`gap-xlg grid pb-[128px]`,style:{display:`grid`,gridTemplateColumns:`repeat(${r.length}, minmax(0, 1fr))`},children:n.map((t,n)=>r.map((r,a)=>{let o=`${r}-${t.size}-${t.loading?`loading`:`default`}-${t.disabled?`disabled`:`enabled`}-${t.state}`;return(0,f.jsxs)(`div`,{style:{gridColumn:`${a+1} / span 1`,gridRow:`${n+1} / span 1`},children:[e.showLabels&&(0,f.jsxs)(`p`,{className:`typography-body-small text-text`,children:[`size=`,t.size,`, state=`,r,t.loading?`, loading`:``,t.disabled?`, disabled`:``,t.state===`default`?``:`, status=${t.state}`]}),(0,f.jsxs)(`div`,{className:`gap-sm flex flex-col`,children:[(0,f.jsx)(`div`,{className:`pb-[32px]`,children:(0,f.jsx)(i,{id:`${r}-${t.size}-${n}-empty`,label:`Label`,placeholder:`Placeholder text...`,helperText:`Helper Text`,loadingMessage:`Loading...`,errorMessage:`Error Message`,successMessage:`Success`,warningMessage:`Warning Message`,size:t.size,state:t.state,loading:t.loading,disabled:t.disabled})}),(0,f.jsx)(`div`,{className:`pb-[32px]`,children:(0,f.jsx)(i,{id:`${r}-${t.size}-${n}-filled`,label:`Label`,placeholder:`Placeholder text...`,helperText:`Helper Text`,loadingMessage:`Loading...`,errorMessage:`Error Message`,successMessage:`Success`,warningMessage:`Warning Message`,size:t.size,state:t.state,loading:t.loading,disabled:t.disabled,value:`john.doe@example.com`})})]})]},o)}))})}},x={render:()=>(0,f.jsx)(n,{})},S={render:e=>(0,f.jsx)(d,{children:t=>(0,f.jsx)(i,{...e,surface:t})})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source},description:{story:`A disabled input whose value overflows a narrow field. The scroll-overflow fade
must match the \`background-disabled\` surface - not the input surface - so it does
not paint a mismatched band at the trailing edge.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    id: "slot-text-input",
    label: "Label",
    placeholder: "Placeholder text...",
    trailingSlot: <span className="typography-label text-text-accent">ID</span>
  },
  render: args => <TextInput {...args} />
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <TextInputSkeleton />
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => <SurfaceStoryShell>
      {surface => <TextInput {...args} surface={surface} />}
    </SurfaceStoryShell>
}`,...S.parameters?.docs?.source}}},C=[`Playground`,`DisabledOverflow`,`ReadOnly`,`Slot`,`Overview`,`Skeleton`,`Surfaces`]}))();export{_ as DisabledOverflow,b as Overview,g as Playground,v as ReadOnly,x as Skeleton,y as Slot,S as Surfaces,C as __namedExportsOrder,h as default};