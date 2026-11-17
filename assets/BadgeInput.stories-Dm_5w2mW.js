import{n as e}from"./chunk-jRWAZmH_.js";import{Zt as t,bc as n,da as r,fa as i,t as a,ua as o}from"./iframe-CwyRacPm.js";import{n as s,t as c}from"./figmaDesign-DLesXS3c.js";import{n as l,t as u}from"./surfaceStoryShell-DHX7sIuO.js";var d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I;e((()=>{a(),s(),l(),d=n(),{expect:f,fn:p,userEvent:m,within:h}=__STORYBOOK_MODULE_TEST__,g=[{value:`yoga`,label:`Yoga`},{value:`pilates`,label:`Pilates`},{value:`strength`,label:`Strength`},{value:`cardio`,label:`Cardio`},{value:`mobility`,label:`Mobility`},{value:`beginner`,label:`Beginner`},{value:`advanced`,label:`Advanced`},{value:`outdoor`,label:`Outdoor`}],_={title:`Components/BadgeInput`,component:t,tags:[`autodocs`],argTypes:{surface:{control:`inline-radio`,options:i},size:{control:`inline-radio`,options:o},state:{control:`inline-radio`,options:r},disabled:{control:`boolean`},loading:{control:`boolean`},creatable:{control:`boolean`},inline:{control:`boolean`},widthMode:{control:`inline-radio`,options:[`default`,`hug`]},maxWidth:{control:`number`}},args:{id:`badge-input`,label:`Tags`,placeholder:`Add tags`,size:`small`,items:g,onChange:p(),onCreate:p()},parameters:{design:c(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=6385-2497`),docs:{description:{component:"Field that holds a set of tags. Clicking into it opens the list of `items`; typing narrows the list. Enter adds the typed text as a new tag, Backspace in the empty field removes the last one. Ctrl or Cmd with A marks every tag, Backspace or Delete then removes them all. Arrow keys move through the list, Escape closes it."}}},decorators:[e=>(0,d.jsx)(`div`,{className:`h-[440px] w-[320px]`,children:(0,d.jsx)(e,{})})]},v=async e=>{let t=h(e).getByRole(`combobox`);return await m.click(t),await h(document.body).findByRole(`listbox`),t},y={play:async({canvasElement:e})=>{await f(await v(e)).toHaveAttribute(`aria-expanded`,`true`),await f(h(document.body).getAllByRole(`option`)).toHaveLength(g.length)}},b={play:async({canvasElement:e,args:t})=>{let n=await v(e);await m.click(h(document.body).getByRole(`option`,{name:`Pilates`})),await f(t.onChange).toHaveBeenLastCalledWith([`pilates`]),await f(n).toHaveFocus(),await f(h(document.body).getByRole(`option`,{selected:!0})).toHaveTextContent(`Pilates`)}},x={parameters:{docs:{description:{story:`Text that matches no item gets a closing row that adds it. Enter takes the typed text without the row having to be picked first. The new tag then joins the list, so it can be picked again after being removed.`}}},play:async({canvasElement:e,args:t})=>{await v(e),await m.keyboard(`Prenatal`),await f(h(document.body).getByRole(`option`,{name:`Create “Prenatal”`})).toBeVisible(),await m.keyboard(`{Enter}`),await f(t.onCreate).toHaveBeenCalledWith(`Prenatal`),await f(t.onChange).toHaveBeenLastCalledWith([`Prenatal`]),await f(h(e).getByRole(`button`,{name:`Remove Prenatal`})).toBeVisible(),await f(h(document.body).getByRole(`option`,{name:`Prenatal`,selected:!0})).toBeVisible()}},S={args:{defaultValue:[`yoga`]},play:async({canvasElement:e,args:t})=>{let n=await v(e);await m.keyboard(`{ArrowDown}{ArrowDown}{Enter}`),await f(t.onChange).toHaveBeenLastCalledWith([`yoga`,`pilates`]),await m.keyboard(`{Backspace}`),await f(t.onChange).toHaveBeenLastCalledWith([`yoga`]),await m.keyboard(`{Escape}`),await f(n).toHaveAttribute(`aria-expanded`,`false`)}},C={args:{defaultValue:[`yoga`,`strength`,`beginner`,`outdoor`]}},w={args:{creatable:!1},parameters:{docs:{description:{story:"With `creatable` off the field only takes tags from the list. Text that matches nothing is not added, and the list gives way to a message saying so."}}},play:async({canvasElement:e,args:t})=>{await v(e),await m.keyboard(`Prenatal`),await f(h(document.body).getByRole(`status`)).toHaveTextContent(`No results for “Prenatal”`),await m.keyboard(`{Enter}`),await f(t.onChange).not.toHaveBeenCalled()}},T={args:{items:g.map(e=>e.value===`cardio`?{...e,disabled:!0}:e)},play:async({canvasElement:e})=>{await v(e),await f(h(document.body).getByRole(`option`,{name:`Cardio`})).toHaveAttribute(`aria-disabled`,`true`)}},E={decorators:[e=>(0,d.jsx)(`div`,{className:`w-[320px]`,children:(0,d.jsx)(e,{})})],render:e=>(0,d.jsx)(`div`,{className:`gap-lg flex flex-col`,children:o.map(n=>(0,d.jsx)(t,{...e,id:`badge-input-${n}`,size:n,defaultValue:[`yoga`,`strength`]},n))})},D={args:{defaultValue:[`yoga`],state:`error`,errorMessage:`Pick at least two tags.`}},O={args:{defaultValue:[`yoga`],state:`warning`,warningMessage:`This tag is no longer in use.`}},k={args:{defaultValue:[`yoga`,`strength`],state:`success`}},A={args:{defaultValue:[`yoga`],loading:!0}},j={args:{defaultValue:[`yoga`,`strength`],disabled:!0}},M={args:{defaultValue:[`yoga`,`strength`,`beginner`]},parameters:{docs:{description:{story:`Ctrl or Cmd with A marks every tag in the field. Backspace or Delete then removes them all at once; any other key lifts the mark.`}}},play:async({canvasElement:e,args:t})=>{await v(e),await m.keyboard(`{Control>}a{/Control}`),await m.keyboard(`{Backspace}`),await f(t.onChange).toHaveBeenLastCalledWith([]),await f(h(e).queryByRole(`button`,{name:/^Remove/})).toBeNull()}},N={args:{widthMode:`hug`,maxWidth:192,defaultValue:[`yoga`]},parameters:{docs:{description:{story:'With `widthMode="hug"` the field is only as wide as its content. `maxWidth` caps it: tags wrap once they reach it, and the list always takes exactly that width.'}}},play:async({canvasElement:e})=>{await v(e),await f(h(document.body).getByRole(`listbox`).parentElement).toHaveStyle({width:`192px`})}},P={args:{inline:!0,hideLabel:!0,defaultValue:[`yoga`,`strength`]},parameters:{docs:{description:{story:`The inline field follows the inline Input: no background, border or side padding, only as wide as its content. Hover and focus show a soft surface that reaches 8px past the content on both sides.`}}}},F={decorators:[e=>(0,d.jsx)(e,{})],render:e=>(0,d.jsx)(u,{children:n=>(0,d.jsx)(t,{...e,id:`badge-input-${n}`,surface:n,defaultValue:[`yoga`,`strength`]})})},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const field = await focusField(canvasElement);
    await expect(field).toHaveAttribute("aria-expanded", "true");
    await expect(within(document.body).getAllByRole("option")).toHaveLength(TAGS.length);
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement,
    args
  }) => {
    const field = await focusField(canvasElement);
    await userEvent.click(within(document.body).getByRole("option", {
      name: "Pilates"
    }));
    await expect(args.onChange).toHaveBeenLastCalledWith(["pilates"]);
    await expect(field).toHaveFocus();
    await expect(within(document.body).getByRole("option", {
      selected: true
    })).toHaveTextContent("Pilates");
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Text that matches no item gets a closing row that adds it. Enter takes the typed text without the row having to be picked first. The new tag then joins the list, so it can be picked again after being removed."
      }
    }
  },
  play: async ({
    canvasElement,
    args
  }) => {
    await focusField(canvasElement);
    await userEvent.keyboard("Prenatal");
    await expect(within(document.body).getByRole("option", {
      name: "Create \\u201cPrenatal\\u201d"
    })).toBeVisible();
    await userEvent.keyboard("{Enter}");
    await expect(args.onCreate).toHaveBeenCalledWith("Prenatal");
    await expect(args.onChange).toHaveBeenLastCalledWith(["Prenatal"]);
    await expect(within(canvasElement).getByRole("button", {
      name: "Remove Prenatal"
    })).toBeVisible();
    await expect(within(document.body).getByRole("option", {
      name: "Prenatal",
      selected: true
    })).toBeVisible();
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: ["yoga"]
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const field = await focusField(canvasElement);
    await userEvent.keyboard("{ArrowDown}{ArrowDown}{Enter}");
    await expect(args.onChange).toHaveBeenLastCalledWith(["yoga", "pilates"]);
    await userEvent.keyboard("{Backspace}");
    await expect(args.onChange).toHaveBeenLastCalledWith(["yoga"]);
    await userEvent.keyboard("{Escape}");
    await expect(field).toHaveAttribute("aria-expanded", "false");
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: ["yoga", "strength", "beginner", "outdoor"]
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    creatable: false
  },
  parameters: {
    docs: {
      description: {
        story: "With \`creatable\` off the field only takes tags from the list. Text that matches nothing is not added, and the list gives way to a message saying so."
      }
    }
  },
  play: async ({
    canvasElement,
    args
  }) => {
    await focusField(canvasElement);
    await userEvent.keyboard("Prenatal");
    await expect(within(document.body).getByRole("status")).toHaveTextContent("No results for \\u201cPrenatal\\u201d");
    await userEvent.keyboard("{Enter}");
    await expect(args.onChange).not.toHaveBeenCalled();
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    items: TAGS.map(tag => tag.value === "cardio" ? {
      ...tag,
      disabled: true
    } : tag)
  },
  play: async ({
    canvasElement
  }) => {
    await focusField(canvasElement);
    await expect(within(document.body).getByRole("option", {
      name: "Cardio"
    })).toHaveAttribute("aria-disabled", "true");
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div className="w-[320px]">
        <Story />
      </div>],
  render: args => <div className="gap-lg flex flex-col">
      {InputSizes.map(size => <BadgeInput key={size} {...args} id={\`badge-input-\${size}\`} size={size} defaultValue={["yoga", "strength"]} />)}
    </div>
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: ["yoga"],
    state: "error",
    errorMessage: "Pick at least two tags."
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: ["yoga"],
    state: "warning",
    warningMessage: "This tag is no longer in use."
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: ["yoga", "strength"],
    state: "success"
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: ["yoga"],
    loading: true
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: ["yoga", "strength"],
    disabled: true
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: ["yoga", "strength", "beginner"]
  },
  parameters: {
    docs: {
      description: {
        story: "Ctrl or Cmd with A marks every tag in the field. Backspace or Delete then removes them all at once; any other key lifts the mark."
      }
    }
  },
  play: async ({
    canvasElement,
    args
  }) => {
    await focusField(canvasElement);
    await userEvent.keyboard("{Control>}a{/Control}");
    await userEvent.keyboard("{Backspace}");
    await expect(args.onChange).toHaveBeenLastCalledWith([]);
    await expect(within(canvasElement).queryByRole("button", {
      name: /^Remove/
    })).toBeNull();
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    widthMode: "hug",
    maxWidth: 192,
    defaultValue: ["yoga"]
  },
  parameters: {
    docs: {
      description: {
        story: 'With \`widthMode="hug"\` the field is only as wide as its content. \`maxWidth\` caps it: tags wrap once they reach it, and the list always takes exactly that width.'
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    await focusField(canvasElement);
    const listbox = within(document.body).getByRole("listbox");
    await expect(listbox.parentElement).toHaveStyle({
      width: "192px"
    });
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    inline: true,
    hideLabel: true,
    defaultValue: ["yoga", "strength"]
  },
  parameters: {
    docs: {
      description: {
        story: "The inline field follows the inline Input: no background, border or side padding, only as wide as its content. Hover and focus show a soft surface that reaches 8px past the content on both sides."
      }
    }
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <Story />],
  render: args => <SurfaceStoryShell>
      {surface => <BadgeInput {...args} id={\`badge-input-\${surface}\`} surface={surface} defaultValue={["yoga", "strength"]} />}
    </SurfaceStoryShell>
}`,...F.parameters?.docs?.source}}},I=[`Default`,`PickFromList`,`CreateWithEnter`,`KeyboardNavigation`,`Filled`,`ListOnly`,`DisabledItems`,`Sizes`,`ErrorState`,`WarningState`,`SuccessState`,`Loading`,`Disabled`,`SelectAllAndDelete`,`HugWithMaxWidth`,`Inline`,`Surfaces`]}))();export{x as CreateWithEnter,y as Default,j as Disabled,T as DisabledItems,D as ErrorState,C as Filled,N as HugWithMaxWidth,P as Inline,S as KeyboardNavigation,w as ListOnly,A as Loading,b as PickFromList,M as SelectAllAndDelete,E as Sizes,k as SuccessState,F as Surfaces,O as WarningState,I as __namedExportsOrder,_ as default};