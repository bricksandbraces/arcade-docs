import{n as e}from"./chunk-jRWAZmH_.js";import{As as t,_t as n,cc as r,fo as i,gt as a,qc as o,t as s,vt as c}from"./iframe-BmBSRsrc.js";import{n as l,t as u}from"./figmaDesign-D2IpkIki.js";var d,f,p,m,h,g,_;e((()=>{s(),i(),l(),d=o(),{action:f}=__STORYBOOK_MODULE_ACTIONS__,p={title:`Components/List`,component:n,tags:[`autodocs`],parameters:{design:u(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=6314-1349`),docs:{description:{component:"Stack of `ListItem` rows, as used in the settings. For typographic ordered or unordered lists in body content use `TextList`."}}},decorators:[e=>(0,d.jsx)(`div`,{className:`max-w-[720px]`,children:(0,d.jsx)(e,{})})]},m={render:e=>(0,d.jsxs)(n,{...e,children:[(0,d.jsx)(c,{label:`Email`,value:`hello@example.com`,statusIcon:(0,d.jsx)(t,{"aria-hidden":!0,className:`text-icon-success size-lg`}),trailing:(0,d.jsx)(r,{kind:`secondary`,size:`small`,label:`Change`,onClick:f(`change`)})}),(0,d.jsx)(c,{label:`Language`,value:`English`,onClick:f(`language`)}),(0,d.jsx)(c,{label:`Billing`,value:`Monthly`,href:`#billing`})]})},h={render:e=>(0,d.jsxs)(n,{...e,children:[(0,d.jsx)(c,{label:`Two-factor authentication`,value:`On`,description:`A code from your authenticator app is required at sign-in.`,onClick:f(`two-factor`)}),(0,d.jsx)(c,{label:`Sessions`,value:`3 active`,description:`Devices that are currently signed in to your account.`,onClick:f(`sessions`)})]})},g={render:e=>(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a,{id:`list-account`,label:`Account`}),(0,d.jsxs)(n,{...e,"aria-labelledby":`list-account`,children:[(0,d.jsx)(c,{label:`Email`,value:`hello@example.com`,href:`#email`}),(0,d.jsx)(c,{label:`Password`,value:`Last changed 3 months ago`,href:`#password`})]}),(0,d.jsx)(a,{id:`list-preferences`,label:`Preferences`}),(0,d.jsxs)(n,{...e,"aria-labelledby":`list-preferences`,children:[(0,d.jsx)(c,{label:`Language`,value:`English`,onClick:f(`language`)}),(0,d.jsx)(c,{label:`Theme`,value:`System`,disabled:!0,onClick:f(`theme`)})]})]})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <List {...args}>
      <ListItem label="Email" value="hello@example.com" statusIcon={<IconCircleCheck aria-hidden className="text-icon-success size-lg" />} trailing={<Button kind="secondary" size="small" label="Change" onClick={action("change")} />} />
      <ListItem label="Language" value="English" onClick={action("language")} />
      <ListItem label="Billing" value="Monthly" href="#billing" />
    </List>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <List {...args}>
      <ListItem label="Two-factor authentication" value="On" description="A code from your authenticator app is required at sign-in." onClick={action("two-factor")} />
      <ListItem label="Sessions" value="3 active" description="Devices that are currently signed in to your account." onClick={action("sessions")} />
    </List>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <>
      <ListHeader id="list-account" label="Account" />
      <List {...args} aria-labelledby="list-account">
        <ListItem label="Email" value="hello@example.com" href="#email" />
        <ListItem label="Password" value="Last changed 3 months ago" href="#password" />
      </List>
      <ListHeader id="list-preferences" label="Preferences" />
      <List {...args} aria-labelledby="list-preferences">
        <ListItem label="Language" value="English" onClick={action("language")} />
        <ListItem label="Theme" value="System" disabled onClick={action("theme")} />
      </List>
    </>
}`,...g.parameters?.docs?.source}}},_=[`Playground`,`WithDescriptions`,`WithHeaders`]}))();export{m as Playground,h as WithDescriptions,g as WithHeaders,_ as __namedExportsOrder,p as default};