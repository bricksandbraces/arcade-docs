import{n as e}from"./chunk-jRWAZmH_.js";import{Do as t,Oo as n,fs as r,ko as i,ni as a,t as o}from"./iframe-3giZHg2a.js";import{n as s,t as c}from"./figmaDesign-CO6i5n9C.js";var l,u,d,f,p,m,h,g,_,v,y,b;e((()=>{o(),s(),l=r(),{action:u}=__STORYBOOK_MODULE_ACTIONS__,{expect:d,fn:f}=__STORYBOOK_MODULE_TEST__,p=e=>{u(`onClick`)(e)},m={title:`Buttons & Actions/Button`,component:t,tags:[`autodocs`],args:{label:`Button`,disabled:!1,loading:!1,kind:`primary`,size:`medium`,IconLeft:void 0,IconRight:void 0,onClick:p,tooltipContent:`Tooltip text`,tooltipPlacement:`bottom`},parameters:{design:c(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=2104-2841`),docs:{description:{component:`Triggers an action when clicked. Use the primary kind for the main action on a page, secondary or ghost for supporting actions.`}}}},h={args:{kind:`primary`},argTypes:{kind:{description:`The kind of button`,control:{type:`select`},options:[`primary`,`secondary`,`tertiary`,`ghost`,`primary-danger`,`tertiary-danger`,`ghost-danger`,`ghost-compact`,`ghost-danger-compact`],defaultValue:`primary`},size:{description:`The size of the button`,control:{type:`select`},options:[`small`,`medium`,`large`],defaultValue:`medium`},onClick:{control:{disable:!0}},IconLeft:{control:{disable:!0}},IconRight:{control:{disable:!0}}}},g=e=>(0,l.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,className:e.className,children:(0,l.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M12 6v6m0 0v6m0-6h6m-6 0H6`})}),_={parameters:{controls:{disable:!0}},render:e=>{let r=i.toReversed().flatMap(e=>[{size:e,loading:!1,disabled:!1},{size:e,loading:!1,disabled:!0},{size:e,loading:!0,disabled:!1}]),a=n;return(0,l.jsx)(`div`,{className:`gap-xlg grid`,style:{display:`grid`,gridTemplateColumns:`repeat(${a.length}, minmax(0, 1fr))`},children:r.map((n,r)=>a.map((i,a)=>{let o=`${i}-${n.size}-${n.loading?`loading`:`default`}-${n.disabled?`disabled`:`enabled`}`;return(0,l.jsxs)(`div`,{style:{gridColumn:`${a+1} / span 1`,gridRow:`${r+1} / span 1`},children:[e.showLabels&&(0,l.jsxs)(`p`,{className:`typography-body-small text-text`,children:[`size=`,n.size,`, kind=`,i,n.loading?`, loading`:``,n.disabled?`, disabled`:``]}),(0,l.jsxs)(`div`,{className:`gap-sm flex flex-row`,children:[(0,l.jsx)(t,{label:`Button`,kind:i,size:n.size,loading:n.loading,disabled:n.disabled,onClick:p,tooltipContent:e.tooltipContent,tooltipPlacement:e.tooltipPlacement}),(0,l.jsx)(t,{"aria-label":`Icon button`,kind:i,size:n.size,loading:n.loading,disabled:n.disabled,IconLeft:g,onClick:p,tooltipContent:e.tooltipContent,tooltipPlacement:e.tooltipPlacement})]})]},o)}))})},args:{showLabels:!1}},v={args:{kind:`primary`,label:`Click me`,onClick:f()},play:async({args:e,canvas:t,userEvent:n})=>{let r=t.getByRole(`button`,{name:/click me/i});await d(r).toBeEnabled(),await n.click(r),await d(e.onClick).toHaveBeenCalledOnce()}},y={render:()=>(0,l.jsx)(a,{})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    kind: "primary"
  },
  argTypes: {
    kind: {
      description: "The kind of button",
      control: {
        type: "select"
      },
      options: ["primary", "secondary", "tertiary", "ghost", "primary-danger", "tertiary-danger", "ghost-danger", "ghost-compact", "ghost-danger-compact"],
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
}`,...h.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source},description:{story:'Best-practice reference for interaction tests with `@storybook/addon-vitest`.\n\nKey patterns:\n- `fn()` from `storybook/test` creates a spy for `onClick` so it can be asserted on.\n- The `play` context exposes `canvas` (pre-scoped via Testing Library) and a\n  pre-configured `userEvent` - prefer them over importing from `storybook/test`\n  so events fire in the same timing model Vitest/Playwright expect.\n- Use accessible queries (`getByRole`, `getByLabelText`) over test-ids.\n- Assertions via `expect(...)` run in the browser under Vitest and block the\n  story\'s "Pass" state - every story with a `play` is a real test.',...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <ButtonSkeleton />
}`,...y.parameters?.docs?.source}}},b=[`Playground`,`Overview`,`ClickInteraction`,`Skeleton`]}))();export{v as ClickInteraction,_ as Overview,h as Playground,y as Skeleton,b as __namedExportsOrder,m as default};