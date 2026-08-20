import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{$t as n,Jt as r,X as i,Zr as a,cn as o,ka as s,ko as c,mo as l,t as u}from"./iframe-cx3JRc0s.js";var d,f,p,m,h,g,_,v,y;e((()=>{d=t(c(),1),u(),f=l(),p={title:`Arcade Components/Surface`,component:i,parameters:{a11y:{test:`off`},docs:{description:{component:"Surfaces alternate. Each surface (a `Modal`, `Sheet` or `Surface` box) paints\nitself in one of two background shades and flips the shade for its children,\nso every nested level — and the fields inside it — always contrasts with what\nit sits on. No manual `surface` prop needed; an explicit `surface` still wins.\n\nIn dark mode the two shades are `gray-10` and `gray-15`:\ndialog `gray-10` → card on it `gray-15` → field on the card back to `gray-10`\n→ card on that card `gray-15`, and so on."}}}},m=[{label:`Manager`,value:`manager`},{label:`Member`,value:`member`}],h=({children:e})=>(0,f.jsx)(`p`,{className:`typography-label-small text-text-accent`,children:e}),g={render:()=>(0,f.jsx)(()=>{let[e,t]=(0,d.useState)(!1),[i,a]=(0,d.useState)(``),[c,l]=(0,d.useState)(null);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(s,{label:`Invite member`,onClick:()=>t(!0)}),(0,f.jsx)(n,{open:e,onClose:()=>t(!1),title:`Invite member`,subtitle:`They get an email to join your organization.`,layoutMode:`fixed`,children:(0,f.jsxs)(`div`,{className:`gap-xlg flex flex-col`,children:[(0,f.jsx)(r,{id:`surface-demo-email`,label:`Email`,placeholder:`first.last@example.com`,value:i,onChange:e=>a(e.target.value),size:`large`}),(0,f.jsx)(o,{title:`Select role`,size:`large`,value:c,onChange:e=>l(e),items:m,fullWidth:!0})]})})]})},{})},_={render:()=>(0,f.jsx)(()=>{let[e,t]=(0,d.useState)(!0);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(s,{label:`Open dialog`,onClick:()=>t(!0)}),(0,f.jsx)(n,{open:e,onClose:()=>t(!1),title:`Surface levels`,layoutMode:`fixed`,children:(0,f.jsxs)(`div`,{className:`gap-xlg flex flex-col`,children:[(0,f.jsxs)(`div`,{className:`gap-sm flex flex-col`,children:[(0,f.jsx)(h,{children:`Field on the dialog (matches a card on the dialog)`}),(0,f.jsx)(r,{id:`lvl-dialog-field`,placeholder:`On dialog`})]}),(0,f.jsxs)(i,{className:`gap-sm p-lg flex flex-col`,children:[(0,f.jsx)(h,{children:`Card on the dialog`}),(0,f.jsx)(h,{children:`Field on the card (matches the dialog)`}),(0,f.jsx)(r,{id:`lvl-card-field`,placeholder:`On card`}),(0,f.jsxs)(i,{className:`gap-sm p-lg flex flex-col`,children:[(0,f.jsx)(h,{children:`Card on the card`}),(0,f.jsx)(r,{id:`lvl-card-card-field`,placeholder:`On card²`})]})]})]})})]})},{})},v={render:()=>(0,f.jsx)(a,{surface:`onCard`,children:(0,f.jsxs)(`div`,{className:`bg-background-elevation rounded-lg shadow-default p-lg gap-md border-component border-border flex w-[320px] flex-col`,children:[(0,f.jsx)(h,{children:`Dialog`}),(0,f.jsx)(r,{id:`nest-field-0`,placeholder:`Field on dialog`}),(0,f.jsxs)(i,{className:`gap-md p-lg flex flex-col`,children:[(0,f.jsx)(h,{children:`Card`}),(0,f.jsx)(r,{id:`nest-field-1`,placeholder:`Field on card`}),(0,f.jsxs)(i,{className:`gap-md p-lg flex flex-col`,children:[(0,f.jsx)(h,{children:`Card on card`}),(0,f.jsx)(r,{id:`nest-field-2`,placeholder:`Field on card²`})]})]})]})})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const Demo = () => {
      const [open, setOpen] = useState(false);
      const [email, setEmail] = useState("");
      const [role, setRole] = useState<string | null>(null);
      return <>
          <Button label="Invite member" onClick={() => setOpen(true)} />
          <Modal open={open} onClose={() => setOpen(false)} title="Invite member" subtitle="They get an email to join your organization." layoutMode="fixed">
            <div className="gap-xlg flex flex-col">
              <TextInput id="surface-demo-email" label="Email" placeholder="first.last@example.com" value={email} onChange={e => setEmail(e.target.value)} size="large" />
              <Dropdown title="Select role" size="large" value={role} onChange={v => setRole(v)} items={roleItems} fullWidth />
            </div>
          </Modal>
        </>;
    };
    return <Demo />;
  }
}`,...g.parameters?.docs?.source},description:{story:`The reported scenario: a field inside a Modal contrasts automatically.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => {
    const Demo = () => {
      const [open, setOpen] = useState(true);
      return <>
          <Button label="Open dialog" onClick={() => setOpen(true)} />
          <Modal open={open} onClose={() => setOpen(false)} title="Surface levels" layoutMode="fixed">
            <div className="gap-xlg flex flex-col">
              <div className="gap-sm flex flex-col">
                <Label>Field on the dialog (matches a card on the dialog)</Label>
                <TextInput id="lvl-dialog-field" placeholder="On dialog" />
              </div>
              <Surface className="gap-sm p-lg flex flex-col">
                <Label>Card on the dialog</Label>
                <Label>Field on the card (matches the dialog)</Label>
                <TextInput id="lvl-card-field" placeholder="On card" />
                <Surface className="gap-sm p-lg flex flex-col">
                  <Label>Card on the card</Label>
                  <TextInput id="lvl-card-card-field" placeholder="On card²" />
                </Surface>
              </Surface>
            </div>
          </Modal>
        </>;
    };
    return <Demo />;
  }
}`,..._.parameters?.docs?.source},description:{story:`Level 1 → 2 → 3: dialog → card → input. The field on the dialog matches the
card's background; the field on the card matches the dialog's background.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <SurfaceProvider surface="onCard">
      <div className="bg-background-elevation rounded-lg shadow-default p-lg gap-md border-component border-border flex w-[320px] flex-col">
        <Label>Dialog</Label>
        <TextInput id="nest-field-0" placeholder="Field on dialog" />
        <Surface className="gap-md p-lg flex flex-col">
          <Label>Card</Label>
          <TextInput id="nest-field-1" placeholder="Field on card" />
          <Surface className="gap-md p-lg flex flex-col">
            <Label>Card on card</Label>
            <TextInput id="nest-field-2" placeholder="Field on card²" />
          </Surface>
        </Surface>
      </div>
    </SurfaceProvider>
}`,...v.parameters?.docs?.source},description:{story:'Inline, portal-free version of the same alternation so the steps are visible\nat a glance and snapshotable. `SurfaceProvider surface="onCard"` stands in for\na dialog; each nested `Surface` flips the shade.',...v.parameters?.docs?.description}}},y=[`AutoSurfaceInModal`,`DialogCardInput`,`NestedSurfaces`]}))();export{g as AutoSurfaceInModal,_ as DialogCardInput,v as NestedSurfaces,y as __namedExportsOrder,p as default};