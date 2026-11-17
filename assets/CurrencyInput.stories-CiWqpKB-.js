import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Fc as n,Ft as r,It as i,Lt as a,bc as o,da as s,fa as c,t as l,ua as u}from"./iframe-D2hLWV5X.js";import{n as d,t as f}from"./figmaDesign-DLesXS3c.js";import{n as p,t as m}from"./surfaceStoryShell-CB7rbKNO.js";var h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B;e((()=>{h=t(n(),1),l(),d(),p(),g=o(),_=t(n(),1),{expect:v,fn:y}=__STORYBOOK_MODULE_TEST__,b={title:`Components/CurrencyInput`,component:r,tags:[`autodocs`],argTypes:{surface:{control:`inline-radio`,options:c},size:{control:`inline-radio`,options:u},state:{control:`inline-radio`,options:s},currency:{control:`text`},locale:{control:`text`},currencyDisplay:{control:`inline-radio`,options:i},currencyPosition:{control:`inline-radio`,options:[void 0,...a]},min:{control:`number`},max:{control:`number`},disabled:{control:`boolean`},readOnly:{control:`boolean`},loading:{control:`boolean`},hideLabel:{control:`boolean`},inline:{control:`boolean`},label:{control:`text`},placeholder:{control:`text`},helperText:{control:`text`},errorMessage:{control:`text`},warningMessage:{control:`text`},successMessage:{control:`text`}},args:{surface:`default`,id:`playground-currency-input`,label:`Label`,currency:`USD`,locale:`en-US`,currencyDisplay:`symbol`,size:`medium`,helperText:`Helper Text`,errorMessage:`Error Message`,warningMessage:`Warning Message`,successMessage:`Success`,loadingMessage:`Loading...`},parameters:{design:f(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=6392-6977`),docs:{description:{component:`Money field with the currency shown next to the amount. The amount is typed as plain digits and formatted for the locale once the field is left; the value travels as a number. Use for prices, fees and budgets in a fixed currency.`}}}},x={render:e=>{let[t,n]=(0,h.useState)(e.value??null);return(0,g.jsx)(r,{...e,value:t,onValueChange:e=>n(e??null)})}},S={render:e=>(0,g.jsx)(`div`,{className:`gap-lg flex flex-col`,children:u.map(t=>(0,_.createElement)(r,{...e,key:t,id:`currency-input-${t}`,label:`${t.charAt(0).toUpperCase()+t.slice(1)} Size`,size:t,defaultValue:1234.5}))})},C=[{id:`usd`,label:`US dollar, English`,currency:`USD`,locale:`en-US`},{id:`eur`,label:`Euro, German`,currency:`EUR`,locale:`de-DE`},{id:`gbp`,label:`Pound sterling, English`,currency:`GBP`,locale:`en-GB`},{id:`jpy`,label:`Yen, Japanese`,currency:`JPY`,locale:`ja-JP`}],w={parameters:{docs:{description:{story:`Symbol, its side of the field, the separators and the number of decimal places all follow the currency and the locale.`}}},render:e=>(0,g.jsx)(`div`,{className:`gap-lg flex flex-col`,children:C.map(t=>(0,_.createElement)(r,{...e,key:t.id,id:`currency-input-${t.id}`,label:t.label,currency:t.currency,locale:t.locale,defaultValue:1234.5}))})},T={args:{id:`code-currency-input`,label:`Amount`,currency:`CHF`,locale:`de-CH`,currencyDisplay:`code`,currencyPosition:`trailing`,defaultValue:1234.5}},E={args:{id:`format-currency-input`,label:`Price`,onValueChange:y()},play:async({args:e,canvas:t,userEvent:n})=>{let r=t.getByLabelText(`Price`);await n.click(r),await n.keyboard(`1,234.5`),await v(r).toHaveValue(`1,234.5`),await v(e.onValueChange).toHaveBeenLastCalledWith(1234.5),await n.tab(),await v(r).toHaveValue(`1,234.50`),await n.click(r),await v(r).toHaveValue(`1234.50`),await n.tab()}},D={args:{id:`min-max-currency-input`,label:`Budget`,helperText:`Between $10 and $500`,min:10,max:500,onValueChange:y()},play:async({args:e,canvas:t,userEvent:n})=>{let r=t.getByLabelText(`Budget`);await n.click(r),await n.keyboard(`9999`),await n.tab(),await v(r).toHaveValue(`500.00`),await v(e.onValueChange).toHaveBeenLastCalledWith(500)}},O={args:{id:`error-currency-input`,label:`Price`,state:`error`,errorMessage:`Enter a price above zero`,defaultValue:0}},k={args:{id:`warning-currency-input`,label:`Price`,state:`warning`,warningMessage:`This is below the usual price`,defaultValue:1.5}},A={args:{id:`success-currency-input`,label:`Price`,state:`success`,defaultValue:42}},j={args:{id:`loading-currency-input`,label:`Price`,loading:!0,defaultValue:100}},M={args:{id:`disabled-currency-input`,label:`Price`,disabled:!0,defaultValue:42}},N={args:{id:`read-only-currency-input`,label:`Total`,readOnly:!0,defaultValue:1234.5,onValueChange:y()},play:async({args:e,canvas:t,canvasElement:n,userEvent:r})=>{let i=t.getByLabelText(`Total`);await v(i).toHaveAttribute(`readonly`),await v(n.querySelector(`[data-input-read-only-indicator]`)).toBeInTheDocument(),await r.click(i),await r.keyboard(`9`),await v(i).toHaveValue(`1,234.50`),await v(e.onValueChange).not.toHaveBeenCalled(),await r.click(n)}},P={args:{id:`no-label-currency-input`,label:`Price`,hideLabel:!0}},F={render:e=>(0,g.jsx)(m,{children:t=>(0,g.jsx)(r,{...e,id:`surface-currency-input-${t}`,surface:t})})},I=f(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=6416-137`),L={args:{id:`inline-currency-input`,inline:!0,label:`Label`,helperText:void 0,reserveInlineNotificationHeight:!1,onValueChange:y()},argTypes:{size:{table:{disable:!0}},surface:{table:{disable:!0}}},parameters:{design:I},play:async({args:e,canvas:t,userEvent:n})=>{let r=t.getByLabelText(`Label`);await v(r).toHaveAttribute(`placeholder`,`0.00`),await n.click(r),await v(r).not.toHaveAttribute(`placeholder`),await n.keyboard(`1234,5`),await v(e.onValueChange).toHaveBeenLastCalledWith(1234.5),await n.tab(),await v(r).toHaveValue(`1,234.50`)}},R={inline:!0,currency:`USD`,locale:`en-US`,defaultValue:1234.5,reserveInlineNotificationHeight:!1},z={parameters:{controls:{disable:!0},design:I},render:()=>(0,g.jsxs)(`div`,{className:`gap-xlg flex flex-col items-start`,children:[(0,g.jsx)(r,{...R,id:`inline-currency-enabled`,label:`Enabled`,defaultValue:void 0}),(0,g.jsx)(r,{...R,id:`inline-currency-filled`,label:`Filled`}),(0,g.jsx)(r,{...R,id:`inline-currency-trailing`,label:`Trailing currency`,currency:`EUR`,locale:`de-DE`}),(0,g.jsx)(r,{...R,id:`inline-currency-code`,label:`Currency code`,currency:`CHF`,locale:`de-CH`,currencyDisplay:`code`,currencyPosition:`trailing`}),(0,g.jsx)(r,{...R,id:`inline-currency-disabled`,label:`Disabled`,disabled:!0}),(0,g.jsx)(r,{...R,id:`inline-currency-error`,label:`Error`,state:`error`,errorMessage:`Error Message`,reserveInlineNotificationHeight:!0}),(0,g.jsx)(r,{...R,id:`inline-currency-warning`,label:`Warning`,state:`warning`,warningMessage:`Warning Message`,reserveInlineNotificationHeight:!0}),(0,g.jsx)(r,{...R,id:`inline-currency-success`,label:`Success`,state:`success`}),(0,g.jsx)(r,{...R,id:`inline-currency-loading`,label:`Loading`,loading:!0})]}),play:async({canvas:e})=>{await v(e.getByLabelText(`Disabled`)).toHaveAttribute(`readonly`),await v(e.getByLabelText(`Trailing currency`)).toHaveValue(`1.234,50`);let t=e.getByLabelText(`Error`);await v(t).toHaveAttribute(`aria-invalid`,`true`),await v(t).toHaveAccessibleDescription(`$ Error Message`),await v(e.getByLabelText(`Loading`)).toHaveAttribute(`aria-busy`,`true`)}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState<number | null>(args.value ?? null);
    return <CurrencyInput {...args} value={value} onValueChange={next => setValue(next ?? null)} />;
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:'{\n  render: args => <div className="gap-lg flex flex-col">\n      {InputSizes.map(size => <CurrencyInput {...args} key={size} id={`currency-input-${size}`} label={`${size.charAt(0).toUpperCase() + size.slice(1)} Size`} size={size} defaultValue={1234.5} />)}\n    </div>\n}',...S.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Symbol, its side of the field, the separators and the number of decimal places all follow the currency and the locale."
      }
    }
  },
  render: args => <div className="gap-lg flex flex-col">
      {currencyExamples.map(example => <CurrencyInput {...args} key={example.id} id={\`currency-input-\${example.id}\`} label={example.label} currency={example.currency} locale={example.locale} defaultValue={1234.5} />)}
    </div>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    id: "code-currency-input",
    label: "Amount",
    currency: "CHF",
    locale: "de-CH",
    currencyDisplay: "code",
    currencyPosition: "trailing",
    defaultValue: 1234.5
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    id: "format-currency-input",
    label: "Price",
    onValueChange: fn()
  },
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    const input = canvas.getByLabelText("Price");
    await userEvent.click(input);
    await userEvent.keyboard("1,234.5");
    await expect(input).toHaveValue("1,234.5");
    await expect(args.onValueChange).toHaveBeenLastCalledWith(1234.5);
    await userEvent.tab();
    await expect(input).toHaveValue("1,234.50");
    await userEvent.click(input);
    await expect(input).toHaveValue("1234.50");
    await userEvent.tab();
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    id: "min-max-currency-input",
    label: "Budget",
    helperText: "Between $10 and $500",
    min: 10,
    max: 500,
    onValueChange: fn()
  },
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    const input = canvas.getByLabelText("Budget");
    await userEvent.click(input);
    await userEvent.keyboard("9999");
    await userEvent.tab();
    await expect(input).toHaveValue("500.00");
    await expect(args.onValueChange).toHaveBeenLastCalledWith(500);
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    id: "error-currency-input",
    label: "Price",
    state: "error",
    errorMessage: "Enter a price above zero",
    defaultValue: 0
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    id: "warning-currency-input",
    label: "Price",
    state: "warning",
    warningMessage: "This is below the usual price",
    defaultValue: 1.5
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    id: "success-currency-input",
    label: "Price",
    state: "success",
    defaultValue: 42
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    id: "loading-currency-input",
    label: "Price",
    loading: true,
    defaultValue: 100
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    id: "disabled-currency-input",
    label: "Price",
    disabled: true,
    defaultValue: 42
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    id: "read-only-currency-input",
    label: "Total",
    readOnly: true,
    defaultValue: 1234.5,
    onValueChange: fn()
  },
  play: async ({
    args,
    canvas,
    canvasElement,
    userEvent
  }) => {
    const input = canvas.getByLabelText("Total");
    await expect(input).toHaveAttribute("readonly");
    await expect(canvasElement.querySelector("[data-input-read-only-indicator]")).toBeInTheDocument();
    await userEvent.click(input);
    await userEvent.keyboard("9");
    await expect(input).toHaveValue("1,234.50");
    await expect(args.onValueChange).not.toHaveBeenCalled();
    await userEvent.click(canvasElement);
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    id: "no-label-currency-input",
    label: "Price",
    hideLabel: true
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: args => <SurfaceStoryShell>
      {surface => <CurrencyInput {...args} id={\`surface-currency-input-\${surface}\`} surface={surface} />}
    </SurfaceStoryShell>
}`,...F.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    id: "inline-currency-input",
    inline: true,
    label: "Label",
    helperText: undefined,
    reserveInlineNotificationHeight: false,
    onValueChange: fn()
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
    args,
    canvas,
    userEvent
  }) => {
    const input = canvas.getByLabelText("Label");
    await expect(input).toHaveAttribute("placeholder", "0.00");
    await userEvent.click(input);
    await expect(input).not.toHaveAttribute("placeholder");
    await userEvent.keyboard("1234,5");
    await expect(args.onValueChange).toHaveBeenLastCalledWith(1234.5);
    await userEvent.tab();
    await expect(input).toHaveValue("1,234.50");
  }
}`,...L.parameters?.docs?.source},description:{story:`The field for rows and tables: no background, border or side padding, one
height and only as wide as the amount. The currency stays next to it.`,...L.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    design: inlineDesign
  },
  render: () => <div className="gap-xlg flex flex-col items-start">
      <CurrencyInput {...inlineStateProps} id="inline-currency-enabled" label="Enabled" defaultValue={undefined} />
      <CurrencyInput {...inlineStateProps} id="inline-currency-filled" label="Filled" />
      <CurrencyInput {...inlineStateProps} id="inline-currency-trailing" label="Trailing currency" currency="EUR" locale="de-DE" />
      <CurrencyInput {...inlineStateProps} id="inline-currency-code" label="Currency code" currency="CHF" locale="de-CH" currencyDisplay="code" currencyPosition="trailing" />
      <CurrencyInput {...inlineStateProps} id="inline-currency-disabled" label="Disabled" disabled />
      <CurrencyInput {...inlineStateProps} id="inline-currency-error" label="Error" state="error" errorMessage="Error Message" reserveInlineNotificationHeight />
      <CurrencyInput {...inlineStateProps} id="inline-currency-warning" label="Warning" state="warning" warningMessage="Warning Message" reserveInlineNotificationHeight />
      <CurrencyInput {...inlineStateProps} id="inline-currency-success" label="Success" state="success" />
      <CurrencyInput {...inlineStateProps} id="inline-currency-loading" label="Loading" loading />
    </div>,
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByLabelText("Disabled")).toHaveAttribute("readonly");
    await expect(canvas.getByLabelText("Trailing currency")).toHaveValue("1.234,50");
    const error = canvas.getByLabelText("Error");
    await expect(error).toHaveAttribute("aria-invalid", "true");
    await expect(error).toHaveAccessibleDescription("$ Error Message");
    await expect(canvas.getByLabelText("Loading")).toHaveAttribute("aria-busy", "true");
  }
}`,...z.parameters?.docs?.source}}},B=[`Playground`,`Sizes`,`Currencies`,`CurrencyCode`,`FormatsOnBlur`,`WithMinMax`,`WithError`,`WithWarning`,`WithSuccess`,`Loading`,`Disabled`,`ReadOnly`,`WithoutLabel`,`Surfaces`,`Inline`,`InlineStates`]}))();export{w as Currencies,T as CurrencyCode,M as Disabled,E as FormatsOnBlur,L as Inline,z as InlineStates,j as Loading,x as Playground,N as ReadOnly,S as Sizes,F as Surfaces,O as WithError,D as WithMinMax,A as WithSuccess,k as WithWarning,P as WithoutLabel,B as __namedExportsOrder,b as default};