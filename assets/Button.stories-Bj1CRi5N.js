import{n as e}from"./chunk-jRWAZmH_.js";import{Hs as t,Qo as n,Zo as r,as as i,fi as a,is as o,ka as s,rs as c,t as l}from"./iframe-CQm8b4Bh.js";import{n as u,t as d}from"./figmaDesign-DDiUnvXT.js";var f,p,m,h,g,_,v,y,b,x,S,C,w;e((()=>{l(),s(),u(),f=t(),{action:p}=__STORYBOOK_MODULE_ACTIONS__,{expect:m,fn:h}=__STORYBOOK_MODULE_TEST__,g=e=>{p(`onClick`)(e)},_={title:`Buttons & Actions/Button`,component:c,tags:[`autodocs`],args:{label:`Button`,disabled:!1,loading:!1,kind:`primary`,size:`medium`,IconLeft:void 0,IconRight:void 0,onClick:g,tooltipContent:`Tooltip text`,tooltipPlacement:`bottom`},parameters:{design:d(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=2104-2841`),docs:{description:{component:`Triggers an action when clicked. Use the primary kind for the main action on a page, secondary or ghost for supporting actions.`}}}},v={args:{kind:`primary`},argTypes:{kind:{description:`The kind of button`,control:{type:`select`},options:[`primary`,`primary-light`,`secondary`,`tertiary`,`ghost`,`primary-danger`,`tertiary-danger`,`ghost-danger`,`ghost-compact`,`ghost-danger-compact`],defaultValue:`primary`},size:{description:`The size of the button`,control:{type:`select`},options:[`small`,`medium`,`large`],defaultValue:`medium`},onClick:{control:{disable:!0}},IconLeft:{control:{disable:!0}},IconRight:{control:{disable:!0}}}},y=e=>(0,f.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,className:e.className,children:(0,f.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M12 6v6m0 0v6m0-6h6m-6 0H6`})}),b={parameters:{controls:{disable:!0}},render:e=>{let t=i.toReversed().flatMap(e=>[{size:e,loading:!1,disabled:!1},{size:e,loading:!1,disabled:!0},{size:e,loading:!0,disabled:!0},{size:e,loading:!0,disabled:!1}]),n=o;return(0,f.jsx)(`div`,{className:`gap-xlg grid`,style:{display:`grid`,gridTemplateColumns:`repeat(${n.length}, minmax(0, 1fr))`},children:t.map((t,r)=>n.map((n,i)=>{let a=`${n}-${t.size}-${t.loading?`loading`:`default`}-${t.disabled?`disabled`:`enabled`}`;return(0,f.jsxs)(`div`,{style:{gridColumn:`${i+1} / span 1`,gridRow:`${r+1} / span 1`},children:[e.showLabels&&(0,f.jsxs)(`p`,{className:`typography-body-small text-text`,children:[`size=`,t.size,`, kind=`,n,t.loading?`, loading`:``,t.disabled?`, disabled`:``]}),(0,f.jsxs)(`div`,{className:`gap-sm flex flex-row`,children:[(0,f.jsx)(c,{label:`Button`,kind:n,size:t.size,loading:t.loading,disabled:t.disabled,onClick:g,tooltipContent:e.tooltipContent,tooltipPlacement:e.tooltipPlacement}),(0,f.jsx)(c,{"aria-label":`Icon button`,kind:n,size:t.size,loading:t.loading,disabled:t.disabled,IconLeft:y,onClick:g,tooltipContent:e.tooltipContent,tooltipPlacement:e.tooltipPlacement})]})]},a)}))})},args:{showLabels:!1}},x={parameters:{controls:{disable:!0}},render:e=>(0,f.jsx)(`div`,{className:`gap-lg flex flex-col`,children:i.toReversed().map(t=>(0,f.jsxs)(`div`,{className:`gap-xlg flex flex-row`,children:[(0,f.jsx)(c,{...e,size:t,IconLeft:n}),(0,f.jsx)(c,{...e,size:t,IconRight:r})]},t))})},S={args:{kind:`primary`,label:`Click me`,onClick:h()},play:async({args:e,canvas:t,userEvent:n})=>{let r=t.getByRole(`button`,{name:/click me/i});await m(r).toBeEnabled(),await n.click(r),await m(e.onClick).toHaveBeenCalledOnce()}},C={render:()=>(0,f.jsx)(a,{})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
    }
  }
}`,...v.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source},description:{story:'Best-practice reference for interaction tests with `@storybook/addon-vitest`.\n\nKey patterns:\n- `fn()` from `storybook/test` creates a spy for `onClick` so it can be asserted on.\n- The `play` context exposes `canvas` (pre-scoped via Testing Library) and a\n  pre-configured `userEvent` - prefer them over importing from `storybook/test`\n  so events fire in the same timing model Vitest/Playwright expect.\n- Use accessible queries (`getByRole`, `getByLabelText`) over test-ids.\n- Assertions via `expect(...)` run in the browser under Vitest and block the\n  story\'s "Pass" state - every story with a `play` is a real test.',...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <ButtonSkeleton />
}`,...C.parameters?.docs?.source}}},w=[`Playground`,`Overview`,`WithIcons`,`ClickInteraction`,`Skeleton`]}))();export{S as ClickInteraction,b as Overview,v as Playground,C as Skeleton,x as WithIcons,w as __namedExportsOrder,_ as default};