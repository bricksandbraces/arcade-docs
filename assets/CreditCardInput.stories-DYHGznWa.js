import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Bi as n,Lt as r,Os as i,Ri as a,Rt as o,Us as s,t as c}from"./iframe-Dsvd3Mbg.js";import{n as l,t as u}from"./figmaDesign-DDiUnvXT.js";import{n as d,t as f}from"./figmaFrame-B48bx9w_.js";function p(e){let t=e.replace(/\D/g,``);return t?_.find(([,e])=>e.test(t))?.[0]??`unknown`:`unknown`}function m(e){return e.replace(/\D/g,``).slice(0,19).replace(/(\d{4})(?=\d)/g,`$1 `)}function h({id:e,value:t,onChange:n,placeholder:r,disabled:i}){return(0,g.jsx)(`input`,{id:e,value:m(t),onChange:e=>n(e.target.value),placeholder:r,disabled:i,inputMode:`numeric`,autoComplete:`off`,"aria-label":`Card number`,className:`typography-body-small text-text placeholder:text-text-placeholder disabled:text-text-disabled disabled:placeholder:text-text-disabled w-full min-w-0 bg-transparent outline-none disabled:cursor-not-allowed`})}var g,_,v=e((()=>{g=i(),_=[[`visa`,/^4/],[`mastercard`,/^(5[1-5]|2[2-7])/],[`amex`,/^3[47]/],[`diners`,/^3(0[0-5]|[68])/],[`jcb`,/^35/],[`discover`,/^6(011|5)/],[`unionpay`,/^62/]],h.__docgenInfo={description:`Stand-in for a provider's hosted card number field (e.g. Stripe's
\`CardNumberElement\`), styled the way the provider is configured to draw.
Never collect real card numbers in a plain input.`,methods:[],displayName:`DemoCardNumberField`,props:{id:{required:!0,tsType:{name:`string`},description:``},value:{required:!0,tsType:{name:`string`},description:``},onChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:``},placeholder:{required:!1,tsType:{name:`string`},description:``},disabled:{required:!1,tsType:{name:`boolean`},description:``}}}}));function y({defaultNumber:e,placeholder:t,brand:n,...i}){let[a,o]=(0,x.useState)(e);return(0,S.jsx)(r,{...i,brand:n??p(a),children:(0,S.jsx)(h,{id:i.id,value:a,onChange:o,placeholder:t,disabled:i.disabled})})}function b(e,t){return{parameters:{controls:{disable:!0}},render:n=>(0,S.jsx)(f,{node:e,width:192,height:62,children:(0,S.jsx)(y,{...n,...t,id:`figma-${e}`,label:`Label`,hideNotificationContainer:!0})})}}var x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R;e((()=>{c(),x=t(s(),1),l(),d(),v(),S=i(),{expect:C,fn:w,userEvent:T,within:E}=__STORYBOOK_MODULE_TEST__,D={title:`Inputs & Controls/CreditCardInput`,component:r,tags:[`autodocs`],argTypes:{size:{control:`inline-radio`,options:a},surface:{control:`inline-radio`,options:n},state:{control:`inline-radio`,options:o},loading:{control:`boolean`},disabled:{control:`boolean`},hideLabel:{control:`boolean`},defaultNumber:{control:`text`,description:`Story only: the number the stand-in field starts with. Its brand is derived like a payment provider would report it.`}},args:{id:`playground-credit-card`,label:`Card number`,size:`medium`,state:`default`,errorMessage:`Your card number is incomplete.`,warningMessage:`This card expires soon.`,helperText:``,loading:!1,disabled:!1,defaultNumber:``,placeholder:`1234 1234 1234 1234`},parameters:{design:u(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=5720-9150`),docs:{description:{component:"Label, frame and states around a card number field. The field itself comes from the payment provider (e.g. Stripe's `CardNumberElement`) so the number never touches the page; pass the brand it reports to show the network's badge. The stories use a plain stand-in input for the provider's field."}}}},O={render:e=>(0,S.jsx)(y,{...e},e.id)},k={args:{id:`filled-credit-card`,defaultNumber:`5555555555554444`},render:e=>(0,S.jsx)(y,{...e})},A={parameters:{controls:{disable:!0}},render:e=>(0,S.jsx)(`div`,{className:`gap-lg grid grid-cols-2`,children:[[`visa`,`4242424242424242`],[`mastercard`,`5555555555554444`],[`amex`,`378282246310005`],[`discover`,`6011111111111117`],[`diners`,`3056930009020004`],[`jcb`,`3566002020360505`],[`unionpay`,`6200000000000005`],[`unknown`,`9999999999999995`]].map(([t,n])=>(0,S.jsx)(y,{...e,id:`network-${t}`,label:t,defaultNumber:n,hideNotificationContainer:!0},t))})},j={parameters:{controls:{disable:!0}},render:e=>(0,S.jsx)(`div`,{className:`gap-x-xlg grid grid-cols-3`,children:[{name:`enabled`,defaultNumber:``},{name:`filled`,defaultNumber:`5555555555554444`},{name:`error`,defaultNumber:`5555555555554444`,state:`error`},{name:`warning`,defaultNumber:`5555555555554444`,state:`warning`},{name:`loading`,defaultNumber:`5555555555554444`,loading:!0},{name:`disabled`,defaultNumber:``,disabled:!0}].flatMap(t=>a.map(n=>(0,S.jsx)(y,{...e,...t,id:`overview-${t.name}-${n}`,label:`Label`,size:n},`${t.name}-${n}`)))})},M={args:{id:`on-card-credit-card`,surface:`onCard`},render:e=>(0,S.jsx)(`div`,{className:`bg-background-card p-xlg rounded-md`,children:(0,S.jsx)(y,{...e})})},N={args:{id:`focus-credit-card`},render:e=>(0,S.jsx)(y,{...e}),play:async({canvasElement:e})=>{let t=E(e),n=t.getByPlaceholderText(`1234 1234 1234 1234`),r=t.getByRole(`group`,{name:`Card number`});await T.click(t.getByText(`Card number`)),await C(n).toHaveFocus(),n.blur(),await T.pointer({keys:`[MouseLeft]`,target:r,coords:{offsetX:2,offsetY:2}}),await C(n).toHaveFocus(),await T.keyboard(`4242`),await C(e.querySelector(`[data-payment-method='visa']`)).toBeInTheDocument()}},P={args:{id:`request-focus-credit-card`,onRequestFocus:w()},render:e=>(0,S.jsx)(y,{...e}),play:async({args:e,canvasElement:t})=>{let n=E(t);await T.click(n.getByText(`Card number`)),await C(e.onRequestFocus).toHaveBeenCalledTimes(1)}},F=b(`5720:9164`,{defaultNumber:``}),I=b(`5720:9251`,{defaultNumber:`1234123412341234`,brand:`mastercard`}),L=b(`5720:9449`,{defaultNumber:``,disabled:!0}),O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: args => <StandInCreditCardInput key={args.id} {...args} />
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    id: "filled-credit-card",
    defaultNumber: "5555555555554444"
  },
  render: args => <StandInCreditCardInput {...args} />
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: args => <div className="gap-lg grid grid-cols-2">
      {[["visa", "4242424242424242"], ["mastercard", "5555555555554444"], ["amex", "378282246310005"], ["discover", "6011111111111117"], ["diners", "3056930009020004"], ["jcb", "3566002020360505"], ["unionpay", "6200000000000005"], ["unknown", "9999999999999995"]].map(([brand, number]) => <StandInCreditCardInput key={brand} {...args} id={\`network-\${brand}\`} label={brand} defaultNumber={number} hideNotificationContainer />)}
    </div>
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: args => {
    const rows = [{
      name: "enabled",
      defaultNumber: ""
    }, {
      name: "filled",
      defaultNumber: "5555555555554444"
    }, {
      name: "error",
      defaultNumber: "5555555555554444",
      state: "error"
    }, {
      name: "warning",
      defaultNumber: "5555555555554444",
      state: "warning"
    }, {
      name: "loading",
      defaultNumber: "5555555555554444",
      loading: true
    }, {
      name: "disabled",
      defaultNumber: "",
      disabled: true
    }] as const;
    return <div className="gap-x-xlg grid grid-cols-3">
        {rows.flatMap(row => InputSizes.map(size => <StandInCreditCardInput key={\`\${row.name}-\${size}\`} {...args} {...row} id={\`overview-\${row.name}-\${size}\`} label="Label" size={size} />))}
      </div>;
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    id: "on-card-credit-card",
    surface: "onCard"
  },
  render: args => <div className="bg-background-card p-xlg rounded-md">
      <StandInCreditCardInput {...args} />
    </div>
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    id: "focus-credit-card"
  },
  render: args => <StandInCreditCardInput {...args} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const field = canvas.getByPlaceholderText("1234 1234 1234 1234");
    const group = canvas.getByRole("group", {
      name: "Card number"
    });
    await userEvent.click(canvas.getByText("Card number"));
    await expect(field).toHaveFocus();
    field.blur();
    await userEvent.pointer({
      keys: "[MouseLeft]",
      target: group,
      coords: {
        offsetX: 2,
        offsetY: 2
      }
    });
    await expect(field).toHaveFocus();
    await userEvent.keyboard("4242");
    await expect(canvasElement.querySelector("[data-payment-method='visa']")).toBeInTheDocument();
  }
}`,...N.parameters?.docs?.source},description:{story:`Clicking the label or the frame hands focus to the field inside.`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    id: "request-focus-credit-card",
    onRequestFocus: fn()
  },
  render: args => <StandInCreditCardInput {...args} />,
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByText("Card number"));
    await expect(args.onRequestFocus).toHaveBeenCalledTimes(1);
  }
}`,...P.parameters?.docs?.source},description:{story:`A hosted field cannot be focused from outside, so the consumer takes the click.`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`figmaStory("5720:9164", {
  defaultNumber: ""
})`,...F.parameters?.docs?.source},description:{story:'Figma "Size=Medium, State=Enabled" at its exact size, for `scripts/figma-pixel-diff.mjs`.',...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`figmaStory("5720:9251", {
  defaultNumber: "1234123412341234",
  brand: "mastercard"
})`,...I.parameters?.docs?.source},description:{story:`Figma "Size=Medium, State=Filled".`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`figmaStory("5720:9449", {
  defaultNumber: "",
  disabled: true
})`,...L.parameters?.docs?.source},description:{story:`Figma "Size=Medium, State=Disabled".`,...L.parameters?.docs?.description}}},R=[`Playground`,`Filled`,`Networks`,`Overview`,`OnCard`,`FocusForwarding`,`RequestFocus`,`FigmaEnabled`,`FigmaFilled`,`FigmaDisabled`]}))();export{L as FigmaDisabled,F as FigmaEnabled,I as FigmaFilled,k as Filled,N as FocusForwarding,A as Networks,M as OnCard,j as Overview,O as Playground,P as RequestFocus,R as __namedExportsOrder,D as default};