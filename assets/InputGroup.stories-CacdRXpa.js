import{n as e}from"./chunk-jRWAZmH_.js";import{$o as t,Ji as n,Qi as r,Si as i,Wt as a,lo as o,t as s,xi as c}from"./iframe-DAdTAyfZ.js";import{n as l,t as u}from"./figmaDesign-CO6i5n9C.js";import{n as d,t as f}from"./onCardStoryShell-BuxciRQj.js";function p(e){let t=e.closest(`.input-center`)?.parentElement,n=t?.parentElement,r=e.ownerDocument.querySelector(`label[for="${e.id}"]`);return{group:n&&getComputedStyle(n).backgroundColor,field:t&&getComputedStyle(t).backgroundColor,text:getComputedStyle(e).color,label:r&&getComputedStyle(r).color}}var m,h,g,_,v,y,b,x,S,C,w;e((()=>{n(),s(),d(),l(),m=t(),{expect:h}=__STORYBOOK_MODULE_TEST__,g={title:`Inputs & Controls/InputGroup`,component:a,tags:[`autodocs`],argTypes:{size:{control:`inline-radio`,options:c},disabled:{control:`boolean`},readOnly:{control:`boolean`},loading:{control:`boolean`},successMessage:{control:`text`},errorMessage:{control:`text`},hideLabel:{control:`boolean`},label:{control:`text`},placeholder:{control:`text`},prefix:{control:`text`},suffix:{control:`text`},state:{control:`inline-radio`,options:i}},args:{errorMessage:`Error Message`,warningMessage:`Warning Message`,successMessage:`Success`,loadingMessage:`Loading...`,helperText:`Helper Text`,id:`playground-input-group`,label:`Website`,placeholder:`yourdomain`,prefix:`https://`,suffix:`.com`,size:`medium`},parameters:{design:u(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=5023-726`),docs:{description:{component:"Text input with a prefix and/or suffix affix. Use the affixes to provide units, protocols, domains, or icons that contextualize the input value. The middle field is a regular text input that supports the same validation states as `TextInput`."}}}},_={args:{}},v={args:{id:`prefix-only-input-group`,label:`Amount`,placeholder:`0.00`,prefix:`€`,suffix:void 0}},y={args:{id:`suffix-only-input-group`,label:`Weight`,placeholder:`0`,prefix:void 0,suffix:`kg`}},b={args:{id:`icon-affix-input-group`,label:`Email address`,placeholder:`name@example`,prefix:(0,m.jsx)(o,{className:`stroke-icon-accent size-4`,"aria-hidden":!0}),suffix:(0,m.jsx)(r,{className:`stroke-icon-accent size-4`,"aria-hidden":!0})}},x={parameters:{docs:{description:{story:"`readOnly` keeps the enabled look while preventing edits. The value stays focusable and selectable, e.g. to copy it."}}},args:{defaultValue:`bricksandbraces`},render:e=>(0,m.jsxs)(`div`,{className:`gap-lg flex flex-col`,children:[(0,m.jsx)(a,{...e,id:`editable-input-group`,label:`Editable website`}),(0,m.jsx)(a,{...e,id:`read-only-input-group`,label:`Read-only website`,readOnly:!0})]}),play:async({canvas:e,canvasElement:t,userEvent:n})=>{let r=e.getByLabelText(`Editable website`),i=e.getByLabelText(`Read-only website`);await h(i).toHaveAttribute(`readonly`),await h(i).toBeEnabled(),await h(r).not.toHaveAttribute(`readonly`),await h(i.closest(`.input-center`)?.parentElement).toContainElement(t.querySelector(`[data-input-read-only-indicator]`)),await h(t.querySelectorAll(`[data-input-read-only-indicator]`)).toHaveLength(1),await h(p(i)).toEqual(p(r)),await n.type(i,`-edited`),await h(i).toHaveValue(`bricksandbraces`),await n.click(t),await h(i).not.toHaveFocus()}},S={args:{surface:`onCard`},render:e=>(0,m.jsx)(f,{children:(0,m.jsx)(a,{...e})})},C={parameters:{controls:{disable:!0}},args:{showLabels:!1},render:e=>{let t=c.toReversed().flatMap(e=>[{size:e,loading:!1,disabled:!1,state:`default`},{size:e,loading:!1,disabled:!0,state:`default`},{size:e,loading:!0,disabled:!1,state:`default`},{size:e,loading:!1,disabled:!1,state:`error`},{size:e,loading:!1,disabled:!1,state:`success`}]),n=i;return(0,m.jsx)(`div`,{className:`gap-xlg grid pb-[128px]`,style:{display:`grid`,gridTemplateColumns:`repeat(${n.length}, minmax(0, 1fr))`},children:t.map((t,r)=>n.map((n,i)=>{let o=`${n}-${t.size}-${t.loading?`loading`:`default`}-${t.disabled?`disabled`:`enabled`}-${t.state}`;return(0,m.jsxs)(`div`,{style:{gridColumn:`${i+1} / span 1`,gridRow:`${r+1} / span 1`},children:[e.showLabels&&(0,m.jsxs)(`p`,{className:`typography-body-small text-text`,children:[`size=`,t.size,`, state=`,n,t.loading?`, loading`:``,t.disabled?`, disabled`:``,t.state===`default`?``:`, status=${t.state}`]}),(0,m.jsxs)(`div`,{className:`gap-sm flex flex-col`,children:[(0,m.jsx)(`div`,{className:`pb-[32px]`,children:(0,m.jsx)(a,{id:`${n}-${t.size}-${r}-empty`,label:`Label`,placeholder:`Placeholder`,prefix:`https://`,suffix:`.com`,helperText:`Helper Text`,loadingMessage:`Loading...`,errorMessage:`Error Message`,successMessage:`Success`,warningMessage:`Warning Message`,size:t.size,state:t.state,loading:t.loading,disabled:t.disabled})}),(0,m.jsx)(`div`,{className:`pb-[32px]`,children:(0,m.jsx)(a,{id:`${n}-${t.size}-${r}-filled`,label:`Label`,placeholder:`Placeholder`,prefix:`https://`,suffix:`.com`,helperText:`Helper Text`,loadingMessage:`Loading...`,errorMessage:`Error Message`,successMessage:`Success`,warningMessage:`Warning Message`,size:t.size,state:t.state,loading:t.loading,disabled:t.disabled,defaultValue:`example`})})]})]},o)}))})}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {}
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    id: "prefix-only-input-group",
    label: "Amount",
    placeholder: "0.00",
    prefix: "€",
    suffix: undefined
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    id: "suffix-only-input-group",
    label: "Weight",
    placeholder: "0",
    prefix: undefined,
    suffix: "kg"
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    id: "icon-affix-input-group",
    label: "Email address",
    placeholder: "name@example",
    prefix: <IconAt className="stroke-icon-accent size-4" aria-hidden />,
    suffix: <IconWorld className="stroke-icon-accent size-4" aria-hidden />
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "\`readOnly\` keeps the enabled look while preventing edits. The value stays focusable and selectable, e.g. to copy it."
      }
    }
  },
  args: {
    defaultValue: "bricksandbraces"
  },
  render: args => <div className="gap-lg flex flex-col">
      <InputGroup {...args} id="editable-input-group" label="Editable website" />
      <InputGroup {...args} id="read-only-input-group" label="Read-only website" readOnly />
    </div>,
  play: async ({
    canvas,
    canvasElement,
    userEvent
  }) => {
    const editable = canvas.getByLabelText("Editable website");
    const readOnly = canvas.getByLabelText("Read-only website");
    await expect(readOnly).toHaveAttribute("readonly");
    await expect(readOnly).toBeEnabled();
    await expect(editable).not.toHaveAttribute("readonly");
    await expect(readOnly.closest(".input-center")?.parentElement).toContainElement(canvasElement.querySelector("[data-input-read-only-indicator]"));
    await expect(canvasElement.querySelectorAll("[data-input-read-only-indicator]")).toHaveLength(1);
    await expect(readFieldLook(readOnly)).toEqual(readFieldLook(editable));
    await userEvent.type(readOnly, "-edited");
    await expect(readOnly).toHaveValue("bricksandbraces");
    await userEvent.click(canvasElement);
    await expect(readOnly).not.toHaveFocus();
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    surface: "onCard"
  },
  render: args => <OnCardStoryShell>
      <InputGroup {...args} />
    </OnCardStoryShell>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
                    <InputGroup id={\`\${state}-\${rowConfig.size}-\${rowIndex}-empty\`} label="Label" placeholder="Placeholder" prefix="https://" suffix=".com" helperText="Helper Text" loadingMessage="Loading..." errorMessage="Error Message" successMessage="Success" warningMessage="Warning Message" size={rowConfig.size} state={rowConfig.state} loading={rowConfig.loading} disabled={rowConfig.disabled} />
                  </div>
                  <div className="pb-[32px]">
                    <InputGroup id={\`\${state}-\${rowConfig.size}-\${rowIndex}-filled\`} label="Label" placeholder="Placeholder" prefix="https://" suffix=".com" helperText="Helper Text" loadingMessage="Loading..." errorMessage="Error Message" successMessage="Success" warningMessage="Warning Message" size={rowConfig.size} state={rowConfig.state} loading={rowConfig.loading} disabled={rowConfig.disabled} defaultValue="example" />
                  </div>
                </div>
              </div>;
        });
      })}
      </div>;
  }
}`,...C.parameters?.docs?.source}}},w=[`Playground`,`PrefixOnly`,`SuffixOnly`,`IconAffixes`,`ReadOnly`,`OnCard`,`Overview`]}))();export{b as IconAffixes,S as OnCard,C as Overview,_ as Playground,v as PrefixOnly,x as ReadOnly,y as SuffixOnly,w as __namedExportsOrder,g as default};