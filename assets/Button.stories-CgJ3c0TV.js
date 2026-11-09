import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Ao as n,Ds as r,Es as i,Ga as a,Si as o,Tc as s,Ts as c,_s as l,gs as u,io as d,t as f,uc as p}from"./iframe-BGZyYePL.js";import{n as m,t as h}from"./figmaDesign-DLesXS3c.js";var g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j;e((()=>{f(),a(),g=t(s(),1),m(),_=p(),{action:v}=__STORYBOOK_MODULE_ACTIONS__,{expect:y,fn:b}=__STORYBOOK_MODULE_TEST__,x=e=>{v(`onClick`)(e)},S={title:`Components/Button`,component:c,tags:[`autodocs`],args:{label:`Button`,disabled:!1,loading:!1,kind:`primary`,size:`medium`,IconLeft:void 0,IconRight:void 0,onClick:x,tooltipContent:`Tooltip text`,tooltipPlacement:`bottom`},parameters:{design:h(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=2104-2841`),docs:{description:{component:`Triggers an action when clicked. Use the primary kind for the main action on a page, secondary or ghost for supporting actions.`}}}},C={args:{kind:`primary`},argTypes:{kind:{description:`The kind of button`,control:{type:`select`},options:[`primary`,`primary-light`,`secondary`,`tertiary`,`ghost`,`primary-danger`,`tertiary-danger`,`ghost-danger`,`ghost-compact`,`ghost-danger-compact`],defaultValue:`primary`},size:{description:`The size of the button`,control:{type:`select`},options:[`small`,`medium`,`large`],defaultValue:`medium`},onClick:{control:{disable:!0}},IconLeft:{control:{disable:!0}},IconRight:{control:{disable:!0}},feedback:{description:`Text or number that pops out above the button on click`,control:{type:`text`}}}},w=e=>(0,_.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,className:e.className,children:(0,_.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M12 6v6m0 0v6m0-6h6m-6 0H6`})}),T={parameters:{controls:{disable:!0}},render:e=>{let t=r.toReversed().flatMap(e=>[{size:e,loading:!1,disabled:!1},{size:e,loading:!1,disabled:!0},{size:e,loading:!0,disabled:!0},{size:e,loading:!0,disabled:!1}]),n=i;return(0,_.jsx)(`div`,{className:`gap-xlg grid`,style:{display:`grid`,gridTemplateColumns:`repeat(${n.length}, minmax(0, 1fr))`},children:t.map((t,r)=>n.map((n,i)=>{let a=`${n}-${t.size}-${t.loading?`loading`:`default`}-${t.disabled?`disabled`:`enabled`}`;return(0,_.jsxs)(`div`,{style:{gridColumn:`${i+1} / span 1`,gridRow:`${r+1} / span 1`},children:[e.showLabels&&(0,_.jsxs)(`p`,{className:`typography-body-small text-text`,children:[`size=`,t.size,`, kind=`,n,t.loading?`, loading`:``,t.disabled?`, disabled`:``]}),(0,_.jsxs)(`div`,{className:`gap-sm flex flex-row`,children:[(0,_.jsx)(c,{label:`Button`,kind:n,size:t.size,loading:t.loading,disabled:t.disabled,onClick:x,tooltipContent:e.tooltipContent,tooltipPlacement:e.tooltipPlacement}),(0,_.jsx)(c,{"aria-label":`Icon button`,kind:n,size:t.size,loading:t.loading,disabled:t.disabled,IconLeft:w,onClick:x,tooltipContent:e.tooltipContent,tooltipPlacement:e.tooltipPlacement})]})]},a)}))})},args:{showLabels:!1}},E={parameters:{controls:{disable:!0}},render:e=>(0,_.jsx)(`div`,{className:`gap-lg flex flex-col`,children:r.toReversed().map(t=>(0,_.jsxs)(`div`,{className:`gap-xlg flex flex-row`,children:[(0,_.jsx)(c,{...e,size:t,IconLeft:l}),(0,_.jsx)(c,{...e,size:t,IconRight:u})]},t))})},D={args:{kind:`primary`,label:`Click me`,onClick:b()},play:async({args:e,canvas:t,userEvent:n})=>{let r=t.getByRole(`button`,{name:/click me/i});await y(r).toBeEnabled(),await n.click(r),await y(e.onClick).toHaveBeenCalledOnce()}},O=()=>{let[e,t]=(0,g.useState)(0);return(0,_.jsx)(c,{label:`Add to cart`,IconLeft:d,feedback:e,onClick:()=>t(e=>e+1)})},k={parameters:{controls:{disable:!0}},render:()=>(0,_.jsxs)(`div`,{className:`gap-4xlg pt-3xlg flex flex-col`,children:[(0,_.jsxs)(`div`,{className:`gap-lg flex flex-row items-center`,children:[(0,_.jsx)(O,{}),(0,_.jsx)(c,{label:`Save`,kind:`secondary`,feedback:`Saved`}),(0,_.jsx)(c,{"aria-label":`Like`,IconLeft:n,feedback:`+1`})]}),(0,_.jsx)(`div`,{className:`gap-x-lg gap-y-4xlg flex flex-row flex-wrap items-center`,children:i.map(e=>(0,_.jsx)(c,{label:e,kind:e,feedback:`Copied`},e))})]})},A={render:()=>(0,_.jsx)(o,{})},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    kind: "primary"
  },
  argTypes: {
    kind: {
      description: "The kind of button",
      control: {
        type: "select"
      },
      options: ["primary", "primary-light", "secondary", "tertiary", "ghost", "primary-danger", "tertiary-danger", "ghost-danger", "ghost-compact", "ghost-danger-compact"],
      defaultValue: "primary"
    },
    size: {
      description: "The size of the button",
      control: {
        type: "select"
      },
      options: ["small", "medium", "large"],
      defaultValue: "medium"
    },
    onClick: {
      control: {
        disable: true
      }
    },
    IconLeft: {
      control: {
        disable: true
      }
    },
    IconRight: {
      control: {
        disable: true
      }
    },
    feedback: {
      description: "Text or number that pops out above the button on click",
      control: {
        type: "text"
      }
    }
  }
}`,...C.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: args => {
    const rows = ButtonSizes.toReversed().flatMap(size => [{
      size,
      loading: false,
      disabled: false
    }, {
      size,
      loading: false,
      disabled: true
    }, {
      size,
      loading: true,
      disabled: true
    }, {
      size,
      loading: true,
      disabled: false
    }]);
    const OverviewKinds = ButtonKinds;
    return <div className="gap-xlg grid" style={{
      display: "grid",
      gridTemplateColumns: \`repeat(\${OverviewKinds.length}, minmax(0, 1fr))\`
    }}>
        {rows.map((rowConfig, rowIndex) => {
        return OverviewKinds.map((kind, columnIndex) => {
          const key = \`\${kind}-\${rowConfig.size}-\${rowConfig.loading ? "loading" : "default"}-\${rowConfig.disabled ? "disabled" : "enabled"}\`;
          return <div key={key} style={{
            gridColumn: \`\${columnIndex + 1} / span 1\`,
            gridRow: \`\${rowIndex + 1} / span 1\`
          }}>
                {args.showLabels && <p className="typography-body-small text-text">
                    size={rowConfig.size}, kind={kind}
                    {rowConfig.loading ? ", loading" : ""}
                    {rowConfig.disabled ? ", disabled" : ""}
                  </p>}
                <div className="gap-sm flex flex-row">
                  <Button label="Button" kind={kind} size={rowConfig.size} loading={rowConfig.loading} disabled={rowConfig.disabled} onClick={clickAction} tooltipContent={args.tooltipContent} tooltipPlacement={args.tooltipPlacement} />
                  <Button aria-label="Icon button" kind={kind} size={rowConfig.size} loading={rowConfig.loading} disabled={rowConfig.disabled} IconLeft={SampleIcon} onClick={clickAction} tooltipContent={args.tooltipContent} tooltipPlacement={args.tooltipPlacement} />
                </div>
              </div>;
        });
      })}
      </div>;
  },
  args: {
    showLabels: false
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: args => <div className="gap-lg flex flex-col">
      {ButtonSizes.toReversed().map(size => <div key={size} className="gap-xlg flex flex-row">
          <Button {...args} size={size} IconLeft={IconArrowLeft} />
          <Button {...args} size={size} IconRight={IconArrowRight} />
        </div>)}
    </div>
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    kind: "primary",
    label: "Click me",
    onClick: fn()
  },
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    const button = canvas.getByRole("button", {
      name: /click me/i
    });
    await expect(button).toBeEnabled();
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalledOnce();
  }
}`,...D.parameters?.docs?.source},description:{story:'Best-practice reference for interaction tests with `@storybook/addon-vitest`.\n\nKey patterns:\n- `fn()` from `storybook/test` creates a spy for `onClick` so it can be asserted on.\n- The `play` context exposes `canvas` (pre-scoped via Testing Library) and a\n  pre-configured `userEvent` - prefer them over importing from `storybook/test`\n  so events fire in the same timing model Vitest/Playwright expect.\n- Use accessible queries (`getByRole`, `getByLabelText`) over test-ids.\n- Assertions via `expect(...)` run in the browser under Vitest and block the\n  story\'s "Pass" state - every story with a `play` is a real test.',...D.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="gap-4xlg pt-3xlg flex flex-col">
      <div className="gap-lg flex flex-row items-center">
        <CartFeedbackExample />
        <Button label="Save" kind="secondary" feedback="Saved" />
        <Button aria-label="Like" IconLeft={IconHeart} feedback="+1" />
      </div>
      <div className="gap-x-lg gap-y-4xlg flex flex-row flex-wrap items-center">
        {ButtonKinds.map(kind => <Button key={kind} label={kind} kind={kind} feedback="Copied" />)}
      </div>
    </div>
}`,...k.parameters?.docs?.source},description:{story:`\`feedback\` pops a text or number out of the button on every click, in the
button's own color. For a counter, pass the value it should read after the
click.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <ButtonSkeleton />
}`,...A.parameters?.docs?.source}}},j=[`Playground`,`Overview`,`WithIcons`,`ClickInteraction`,`ClickFeedback`,`Skeleton`]}))();export{k as ClickFeedback,D as ClickInteraction,T as Overview,C as Playground,A as Skeleton,E as WithIcons,j as __namedExportsOrder,S as default};