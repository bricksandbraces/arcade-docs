import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Os as n,Ri as r,Us as i,Xt as a,t as o,zi as s}from"./iframe-jImnWlHt.js";import{n as c,t as l}from"./figmaDesign-DDiUnvXT.js";import{n as u,t as d}from"./figmaFrame-DV8WZAX4.js";var f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P;e((()=>{o(),f=t(i(),1),c(),u(),p=n(),{expect:m,fn:h,userEvent:g,waitFor:_,within:v}=__STORYBOOK_MODULE_TEST__,y=[{id:`kienberger-allee`,street:`Kienberger Allee`,locality:`Schönefeld, 12529`},{id:`kienberger-strasse`,street:`Kienberger Straße`,locality:`Berlin, 12524`},{id:`kienbaumer-weg`,street:`Kienbaumer Weg`,locality:`Hamburg, 22761`},{id:`kienbraeuer-strasse`,street:`Kienbräuer Straße`,locality:`Buxtehude, 22712`},{id:`kienitzer-strasse`,street:`Kienitzer Straße`,locality:`Berlin, 12053`},{id:`karl-marx-allee`,street:`Karl-Marx-Allee`,locality:`Berlin, 10243`},{id:`kastanienallee`,street:`Kastanienallee`,locality:`Berlin, 10435`},{id:`friedrichstrasse`,street:`Friedrichstraße`,locality:`Berlin, 10117`}],b=e=>{let t=e.trim().toLowerCase();return t?y.filter(e=>e.street.toLowerCase().includes(t)).slice(0,4):[]},x=({initialValue:e=``,suggestions:t,selectedSuggestionId:n=null,onSuggestionSelect:r,...i})=>{let[o,s]=(0,f.useState)(e),[c,l]=(0,f.useState)(n);return(0,p.jsx)(a,{...i,value:o,suggestions:t??b(o),selectedSuggestionId:c,onChange:e=>s(e.currentTarget.value),onSuggestionSelect:e=>{s(e.street),l(e.id),r?.(e)}})},S=250,C=e=>{let[t,n]=(0,f.useState)(``),[r,i]=(0,f.useState)([]),[o,s]=(0,f.useState)(!1),c=(0,f.useRef)(void 0);return(0,f.useEffect)(()=>()=>window.clearTimeout(c.current),[]),(0,p.jsx)(a,{...e,value:t,suggestions:r,loading:o,onChange:e=>{let t=e.currentTarget.value;n(t),i([]),s(!0),window.clearTimeout(c.current),c.current=window.setTimeout(()=>{i(b(t)),s(!1)},S)},onSuggestionSelect:t=>{n(t.street),e.onSuggestionSelect?.(t)}})},w={title:`Inputs & Controls/AddressInput`,component:x,tags:[`autodocs`],argTypes:{size:{control:`inline-radio`,options:r},state:{control:`inline-radio`,options:s},disabled:{control:`boolean`},loading:{control:`boolean`}},args:{id:`address-input`,label:`Address`,placeholder:`Street and house number`,size:`small`,onManualEntry:h(),onSuggestionSelect:h()},parameters:{design:l(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=5719-7833`),docs:{description:{component:"Text field that suggests matching addresses while the user types. The component does no lookup itself: the consumer queries its address service with the typed text and passes the matches as `suggestions`. Arrow keys move through the list, Enter picks, Escape closes."}}},decorators:[e=>(0,p.jsx)(`div`,{className:`h-[440px] w-[320px]`,children:(0,p.jsx)(e,{})})]},T=async(e,t)=>{let n=v(e).getByRole(`combobox`);await g.click(n),await g.keyboard(t);let r=await v(document.body).findByRole(`listbox`);return await _(()=>m(getComputedStyle(r.parentElement).opacity).toBe(`1`)),{field:n,listbox:r}},E={play:async({canvasElement:e})=>{await T(e,`Kienb`)}},D={parameters:{controls:{disable:!0}},render:e=>(0,p.jsx)(d,{node:`5719:9111`,width:256,height:346,children:(0,p.jsx)(x,{...e,className:`w-full max-w-none`,reserveInlineNotificationHeight:!1})}),play:async({canvasElement:e})=>{await T(e,`Kienb`)}},O={parameters:{docs:{description:{story:`Focus stays in the field: the arrow keys move a highlighted row through the list, Enter takes it over and Escape closes the list without picking.`}}},play:async({canvasElement:e,args:t})=>{let{field:n}=await T(e,`Kienb`);await g.keyboard(`{ArrowDown}{ArrowDown}`),await m(document.getElementById(n.getAttribute(`aria-activedescendant`)??``)).toHaveTextContent(`Kienberger Straße`),await g.keyboard(`{Enter}`),await m(t.onSuggestionSelect).toHaveBeenCalledWith(m.objectContaining({id:`kienberger-strasse`})),await m(n).toHaveValue(`Kienberger Straße`),await _(()=>m(v(document.body).queryByRole(`listbox`)).toBeNull()),await g.keyboard(`{Backspace}`),await v(document.body).findByRole(`listbox`),await g.keyboard(`{Escape}`),await _(()=>m(v(document.body).queryByRole(`listbox`)).toBeNull()),await m(n).toHaveAttribute(`aria-expanded`,`false`)}},k={parameters:{docs:{description:{story:"Matches arrive from an address service after a short delay. While `loading` is set, the list keeps the previous matches, so it neither empties nor closes between keystrokes."}}},render:e=>(0,p.jsx)(C,{...e}),play:async({canvasElement:e})=>{let t=v(e).getByRole(`combobox`);await g.click(t),await g.keyboard(`Kienb`);let n=v(document.body);await _(()=>m(n.getAllByRole(`option`)).toHaveLength(5)),await g.keyboard(`e`),await m(n.getAllByRole(`option`)).toHaveLength(5),await _(()=>m(n.getAllByRole(`option`)).toHaveLength(3))}},A={parameters:{docs:{description:{story:"The closing row hands over to a manual address form when the right street is not among the matches. It only shows when `onManualEntry` is set."}}},play:async({canvasElement:e,args:t})=>{await T(e,`Nowhere`);let n=v(document.body).getByRole(`option`,{name:`Enter address manually`});await g.click(n),await m(t.onManualEntry).toHaveBeenCalled()}},j={args:{initialValue:`Kienberger`,selectedSuggestionId:`kienberger-allee`,suggestions:[y[0],y[1],{...y[2],disabled:!0}]},play:async({canvasElement:e})=>{await T(e,` `);let t=v(document.body);await m(t.getByRole(`option`,{selected:!0})).toHaveTextContent(`Kienberger Allee`),await m(t.getByRole(`option`,{name:/Kienbaumer Weg/})).toHaveAttribute(`aria-disabled`,`true`)}},M={args:{initialValue:`Kienb`,loading:!0,suggestions:[]}},N={args:{initialValue:`Kienb`,state:`error`,errorMessage:`We could not find this address.`}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    await openList(canvasElement, "Kienb");
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: args => <FigmaFrame node="5719:9111" width={256} height={346}>
      <AddressInputDemo {...args} className="w-full max-w-none" reserveInlineNotificationHeight={false} />
    </FigmaFrame>,
  play: async ({
    canvasElement
  }) => {
    await openList(canvasElement, "Kienb");
  }
}`,...D.parameters?.docs?.source},description:{story:"1:1 with the open Figma state (small, four matches plus manual entry) for `storybook:figma-diff`.",...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Focus stays in the field: the arrow keys move a highlighted row through the list, Enter takes it over and Escape closes the list without picking."
      }
    }
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const {
      field
    } = await openList(canvasElement, "Kienb");
    await userEvent.keyboard("{ArrowDown}{ArrowDown}");
    const active = document.getElementById(field.getAttribute("aria-activedescendant") ?? "");
    await expect(active).toHaveTextContent("Kienberger Straße");
    await userEvent.keyboard("{Enter}");
    await expect(args.onSuggestionSelect).toHaveBeenCalledWith(expect.objectContaining({
      id: "kienberger-strasse"
    }));
    await expect(field).toHaveValue("Kienberger Straße");
    await waitFor(() => expect(within(document.body).queryByRole("listbox")).toBeNull());
    await userEvent.keyboard("{Backspace}");
    await within(document.body).findByRole("listbox");
    await userEvent.keyboard("{Escape}");
    await waitFor(() => expect(within(document.body).queryByRole("listbox")).toBeNull());
    await expect(field).toHaveAttribute("aria-expanded", "false");
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Matches arrive from an address service after a short delay. While \`loading\` is set, the list keeps the previous matches, so it neither empties nor closes between keystrokes."
      }
    }
  },
  render: args => <AsyncAddressInputDemo {...args} />,
  play: async ({
    canvasElement
  }) => {
    const field = within(canvasElement).getByRole("combobox");
    await userEvent.click(field);
    await userEvent.keyboard("Kienb");
    const body = within(document.body);
    await waitFor(() => expect(body.getAllByRole("option")).toHaveLength(5));
    await userEvent.keyboard("e");
    await expect(body.getAllByRole("option")).toHaveLength(5);
    await waitFor(() => expect(body.getAllByRole("option")).toHaveLength(3));
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "The closing row hands over to a manual address form when the right street is not among the matches. It only shows when \`onManualEntry\` is set."
      }
    }
  },
  play: async ({
    canvasElement,
    args
  }) => {
    await openList(canvasElement, "Nowhere");
    const manual = within(document.body).getByRole("option", {
      name: "Enter address manually"
    });
    await userEvent.click(manual);
    await expect(args.onManualEntry).toHaveBeenCalled();
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    initialValue: "Kienberger",
    selectedSuggestionId: "kienberger-allee",
    suggestions: [ADDRESS_BOOK[0], ADDRESS_BOOK[1], {
      ...ADDRESS_BOOK[2],
      disabled: true
    }]
  },
  play: async ({
    canvasElement
  }) => {
    await openList(canvasElement, " ");
    const body = within(document.body);
    await expect(body.getByRole("option", {
      selected: true
    })).toHaveTextContent("Kienberger Allee");
    await expect(body.getByRole("option", {
      name: /Kienbaumer Weg/
    })).toHaveAttribute("aria-disabled", "true");
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    initialValue: "Kienb",
    loading: true,
    suggestions: []
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    initialValue: "Kienb",
    state: "error",
    errorMessage: "We could not find this address."
  }
}`,...N.parameters?.docs?.source}}},P=[`Playground`,`FigmaOpen`,`KeyboardSelection`,`AsyncLookup`,`ManualEntry`,`SelectedAndDisabledSuggestions`,`Loading`,`ErrorState`]}))();export{k as AsyncLookup,N as ErrorState,D as FigmaOpen,O as KeyboardSelection,M as Loading,A as ManualEntry,E as Playground,j as SelectedAndDisabledSuggestions,P as __namedExportsOrder,w as default};