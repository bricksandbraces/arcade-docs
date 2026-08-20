import{n as e}from"./chunk-jRWAZmH_.js";import{Aa as t,Er as n,ja as r,ka as i,mo as a,t as o}from"./iframe-cx3JRc0s.js";var s,c,l,u,d,f,p,m,h,g,_,v;e((()=>{o(),s=a(),{action:c}=__STORYBOOK_MODULE_ACTIONS__,{expect:l,fn:u}=__STORYBOOK_MODULE_TEST__,d=e=>{c(`onClick`)(e)},f={title:`Buttons & Actions/Button`,component:i,tags:[`autodocs`],args:{label:`Button`,disabled:!1,loading:!1,kind:`primary`,size:`medium`,IconLeft:void 0,IconRight:void 0,onClick:d,tooltipContent:`Tooltip text`,tooltipPlacement:`bottom`},parameters:{docs:{description:{component:`Triggers an action when clicked. Use the primary kind for the main action on a page, secondary or ghost for supporting actions.`}}}},p={args:{kind:`primary`},argTypes:{kind:{description:`The kind of button`,control:{type:`select`},options:[`primary`,`secondary`,`tertiary`,`ghost`,`primary-danger`,`tertiary-danger`,`ghost-danger`],defaultValue:`primary`},size:{description:`The size of the button`,control:{type:`select`},options:[`small`,`medium`,`large`],defaultValue:`medium`},onClick:{control:{disable:!0}},IconLeft:{control:{disable:!0}},IconRight:{control:{disable:!0}}}},m=e=>(0,s.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,className:e.className,children:(0,s.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M12 6v6m0 0v6m0-6h6m-6 0H6`})}),h={parameters:{controls:{disable:!0}},render:e=>{let n=r.toReversed().flatMap(e=>[{size:e,loading:!1,disabled:!1},{size:e,loading:!1,disabled:!0},{size:e,loading:!0,disabled:!1}]),a=t;return(0,s.jsx)(`div`,{className:`gap-xlg grid`,style:{display:`grid`,gridTemplateColumns:`repeat(${a.length}, minmax(0, 1fr))`},children:n.map((t,n)=>a.map((r,a)=>{let o=`${r}-${t.size}-${t.loading?`loading`:`default`}-${t.disabled?`disabled`:`enabled`}`;return(0,s.jsxs)(`div`,{style:{gridColumn:`${a+1} / span 1`,gridRow:`${n+1} / span 1`},children:[e.showLabels&&(0,s.jsxs)(`p`,{className:`typography-body-small text-text`,children:[`size=`,t.size,`, kind=`,r,t.loading?`, loading`:``,t.disabled?`, disabled`:``]}),(0,s.jsxs)(`div`,{className:`gap-sm flex flex-row`,children:[(0,s.jsx)(i,{label:`Button`,kind:r,size:t.size,loading:t.loading,disabled:t.disabled,onClick:d,tooltipContent:e.tooltipContent,tooltipPlacement:e.tooltipPlacement}),(0,s.jsx)(i,{"aria-label":`Icon button`,kind:r,size:t.size,loading:t.loading,disabled:t.disabled,IconLeft:m,onClick:d,tooltipContent:e.tooltipContent,tooltipPlacement:e.tooltipPlacement})]})]},o)}))})},args:{showLabels:!1}},g={args:{kind:`primary`,label:`Click me`,onClick:u()},play:async({args:e,canvas:t,userEvent:n})=>{let r=t.getByRole(`button`,{name:/click me/i});await l(r).toBeEnabled(),await n.click(r),await l(e.onClick).toHaveBeenCalledOnce()}},_={render:()=>(0,s.jsx)(n,{})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    kind: "primary"
  },
  argTypes: {
    kind: {
      description: "The kind of button",
      control: {
        type: "select"
      },
      options: ["primary", "secondary", "tertiary", "ghost", "primary-danger", "tertiary-danger", "ghost-danger"],
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
    }
  }
}`,...p.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source},description:{story:'Best-practice reference for interaction tests with `@storybook/addon-vitest`.\n\nKey patterns:\n- `fn()` from `storybook/test` creates a spy for `onClick` so it can be asserted on.\n- The `play` context exposes `canvas` (pre-scoped via Testing Library) and a\n  pre-configured `userEvent` — prefer them over importing from `storybook/test`\n  so events fire in the same timing model Vitest/Playwright expect.\n- Use accessible queries (`getByRole`, `getByLabelText`) over test-ids.\n- Assertions via `expect(...)` run in the browser under Vitest and block the\n  story\'s "Pass" state — every story with a `play` is a real test.',...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <ButtonSkeleton />
}`,..._.parameters?.docs?.source}}},v=[`Playground`,`Overview`,`ClickInteraction`,`Skeleton`]}))();export{g as ClickInteraction,h as Overview,p as Playground,_ as Skeleton,v as __namedExportsOrder,f as default};