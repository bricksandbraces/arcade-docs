import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{$a as n,Ds as r,Ei as i,Es as a,Fc as o,Fs as s,Is as c,Ls as l,Ro as u,bc as d,fo as f,t as p,yo as m}from"./iframe-D2hLWV5X.js";import{n as h,t as g}from"./figmaDesign-DLesXS3c.js";var _,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P;e((()=>{p(),n(),_=t(o(),1),h(),v=d(),{action:y}=__STORYBOOK_MODULE_ACTIONS__,{expect:b,fn:x}=__STORYBOOK_MODULE_TEST__,S=e=>{y(`onClick`)(e)},C={title:`Components/Button`,component:s,tags:[`autodocs`],args:{label:`Button`,disabled:!1,loading:!1,kind:`primary`,size:`medium`,IconLeft:void 0,IconRight:void 0,onClick:S,tooltipContent:`Tooltip text`,tooltipPlacement:`bottom`},parameters:{design:g(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=2104-2841`),docs:{description:{component:`Triggers an action when clicked. Use the primary kind for the main action on a page, secondary or ghost for supporting actions.`}}}},w={args:{kind:`primary`},argTypes:{kind:{description:`The kind of button`,control:{type:`select`},options:[`primary`,`primary-light`,`secondary`,`tertiary`,`ghost`,`primary-danger`,`tertiary-danger`,`ghost-danger`,`ghost-compact`,`ghost-danger-compact`],defaultValue:`primary`},size:{description:`The size of the button`,control:{type:`select`},options:[`small`,`medium`,`large`],defaultValue:`medium`},onClick:{control:{disable:!0}},IconLeft:{control:{disable:!0}},IconRight:{control:{disable:!0}},feedback:{description:`Text or number that pops out above the button on click`,control:{type:`text`}}}},T=e=>(0,v.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,className:e.className,children:(0,v.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M12 6v6m0 0v6m0-6h6m-6 0H6`})}),E={parameters:{controls:{disable:!0}},render:e=>{let t=l.toReversed().flatMap(e=>[{size:e,loading:!1,disabled:!1},{size:e,loading:!1,disabled:!0},{size:e,loading:!0,disabled:!0},{size:e,loading:!0,disabled:!1}]),n=c;return(0,v.jsx)(`div`,{className:`gap-xlg grid`,style:{display:`grid`,gridTemplateColumns:`repeat(${n.length}, minmax(0, 1fr))`},children:t.map((t,r)=>n.map((n,i)=>{let a=`${n}-${t.size}-${t.loading?`loading`:`default`}-${t.disabled?`disabled`:`enabled`}`;return(0,v.jsxs)(`div`,{style:{gridColumn:`${i+1} / span 1`,gridRow:`${r+1} / span 1`},children:[e.showLabels&&(0,v.jsxs)(`p`,{className:`typography-body-small text-text`,children:[`size=`,t.size,`, kind=`,n,t.loading?`, loading`:``,t.disabled?`, disabled`:``]}),(0,v.jsxs)(`div`,{className:`gap-sm flex flex-row`,children:[(0,v.jsx)(s,{label:`Button`,kind:n,size:t.size,loading:t.loading,disabled:t.disabled,onClick:S,tooltipContent:e.tooltipContent,tooltipPlacement:e.tooltipPlacement}),(0,v.jsx)(s,{"aria-label":`Icon button`,kind:n,size:t.size,loading:t.loading,disabled:t.disabled,IconLeft:T,onClick:S,tooltipContent:e.tooltipContent,tooltipPlacement:e.tooltipPlacement})]})]},a)}))})},args:{showLabels:!1}},D={parameters:{controls:{disable:!0}},render:e=>(0,v.jsx)(`div`,{className:`gap-lg flex flex-col`,children:l.toReversed().map(t=>(0,v.jsxs)(`div`,{className:`gap-xlg flex flex-row`,children:[(0,v.jsx)(s,{...e,size:t,IconLeft:r}),(0,v.jsx)(s,{...e,size:t,IconRight:a})]},t))})},O={args:{kind:`primary`,label:`Click me`,onClick:x()},play:async({args:e,canvas:t,userEvent:n})=>{let r=t.getByRole(`button`,{name:/click me/i});await b(r).toBeEnabled(),await n.click(r),await b(e.onClick).toHaveBeenCalledOnce()}},k=()=>{let[e,t]=(0,_.useState)(0);return(0,v.jsx)(s,{label:`Add to cart`,IconLeft:f,feedback:e,onClick:()=>t(e=>e+1)})},A={parameters:{controls:{disable:!0}},render:()=>(0,v.jsxs)(`div`,{className:`gap-4xlg pt-3xlg flex flex-col`,children:[(0,v.jsxs)(`div`,{className:`gap-lg flex flex-row items-center`,children:[(0,v.jsx)(k,{}),(0,v.jsx)(s,{label:`Save`,kind:`secondary`,feedback:`Saved`}),(0,v.jsx)(s,{"aria-label":`Like`,IconLeft:u,feedback:`+1`})]}),(0,v.jsx)(`div`,{className:`gap-x-lg gap-y-4xlg flex flex-row flex-wrap items-center`,children:c.map(e=>(0,v.jsx)(s,{label:e,kind:e,feedback:`Copied`},e))})]})},j=()=>{let[e,t]=(0,_.useState)(0);return(0,v.jsxs)(`div`,{className:`gap-lg flex flex-row items-center`,children:[(0,v.jsx)(s,{label:`Add product`,kind:`secondary`,IconLeft:m,onClick:()=>t(e=>e+1)}),(0,v.jsx)(s,{"aria-label":`Open cart, ${e} items`,kind:`primary-light`,variant:`rounded`,IconLeft:f,feedback:e>0?e:void 0,feedbackTrigger:`change`})]})},M={parameters:{controls:{disable:!0}},render:()=>(0,v.jsx)(`div`,{className:`pt-3xlg`,children:(0,v.jsx)(j,{})}),play:async({canvas:e,userEvent:t})=>{let n=e.getByRole(`button`,{name:`Add product`});await t.click(n),await b(e.getByRole(`status`)).toHaveTextContent(`1`),await t.click(n),await b(e.getByRole(`status`)).toHaveTextContent(`2`)}},N={render:()=>(0,v.jsx)(i,{})},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source},description:{story:'Best-practice reference for interaction tests with `@storybook/addon-vitest`.\n\nKey patterns:\n- `fn()` from `storybook/test` creates a spy for `onClick` so it can be asserted on.\n- The `play` context exposes `canvas` (pre-scoped via Testing Library) and a\n  pre-configured `userEvent` - prefer them over importing from `storybook/test`\n  so events fire in the same timing model Vitest/Playwright expect.\n- Use accessible queries (`getByRole`, `getByLabelText`) over test-ids.\n- Assertions via `expect(...)` run in the browser under Vitest and block the\n  story\'s "Pass" state - every story with a `play` is a real test.',...O.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source},description:{story:`\`feedback\` pops a text or number out of the button on every click, in the
button's own color. For a counter, pass the value it should read after the
click.`,...A.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="pt-3xlg">
      <CartOnChangeExample />
    </div>,
  play: async ({
    canvas,
    userEvent
  }) => {
    const add = canvas.getByRole("button", {
      name: "Add product"
    });
    await userEvent.click(add);
    await expect(canvas.getByRole("status")).toHaveTextContent("1");
    await userEvent.click(add);
    await expect(canvas.getByRole("status")).toHaveTextContent("2");
  }
}`,...M.parameters?.docs?.source},description:{story:'With `feedbackTrigger="change"` the bubble replays whenever `feedback`\nchanges, wherever the change comes from: here the cart button pops its\ncount when a product is added elsewhere, not when it is clicked itself.',...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <ButtonSkeleton />
}`,...N.parameters?.docs?.source}}},P=[`Playground`,`Overview`,`WithIcons`,`ClickInteraction`,`ClickFeedback`,`FeedbackOnChange`,`Skeleton`]}))();export{A as ClickFeedback,O as ClickInteraction,M as FeedbackOnChange,E as Overview,w as Playground,N as Skeleton,D as WithIcons,P as __namedExportsOrder,C as default};