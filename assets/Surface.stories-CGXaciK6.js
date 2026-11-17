import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{$t as n,Ar as r,Fc as i,Fs as a,_a as o,bc as s,rr as c,t as l,xa as u,yn as d}from"./iframe-CwyRacPm.js";import{n as f,t as p}from"./figmaDesign-DLesXS3c.js";var m,h,g,_,v,y,b,x,S,C,w,T;e((()=>{m=t(i(),1),l(),f(),h=s(),g={title:`Components/Surface`,component:r,parameters:{a11y:{test:`off`},design:p(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=5220-1159`),docs:{description:{component:"Layers. A dialog or card (`Modal`, `Sheet`, `Surface`, `RadioCard`, `Tile`,\n...) hands its children the level they sit on, so nested cards and the\nfields inside them always contrast with their background. No manual\n`surface` prop needed; an explicit `surface` still wins.\n\nLight mode keeps its values on every level: cards are `card`, fields white.\nDark mode alternates `gray-10` and `gray-15`: a field on a card or dialog is\n`input-02`, a card on a dialog is `card-subtle` (= `input-02`), and a field\non that card is back to `input-01`."}}}},_=[{label:`Manager`,value:`manager`},{label:`Member`,value:`member`}],v=({children:e})=>(0,h.jsx)(`p`,{className:`typography-label-small text-text-accent`,children:e}),y={render:()=>(0,h.jsx)(`div`,{className:`bg-background-app-container p-xlg w-[448px]`,children:(0,h.jsx)(o,{name:`layers-field-on-card`,checked:!1,readOnly:!0,children:(0,h.jsx)(`div`,{className:`p-lg pr-3xlg`,children:(0,h.jsx)(n,{id:`layers-field-on-card-input`,label:`Label`,placeholder:`Placeholder`})})})})},b={render:()=>(0,h.jsx)(d,{open:!0,title:`Modal Title`,subtitle:`Subtitle or Description`,children:(0,h.jsx)(n,{id:`layers-field-on-dialog-input`,label:`Label`,placeholder:`Placeholder`})})},x={render:()=>(0,h.jsx)(d,{open:!0,title:`Modal Title`,subtitle:`Subtitle or Description`,children:(0,h.jsx)(o,{name:`layers-card-on-dialog`,checked:!1,readOnly:!0,children:(0,h.jsx)(`div`,{className:`p-lg pr-3xlg`,children:(0,h.jsx)(n,{id:`layers-card-on-dialog-input`,label:`Label`,placeholder:`Placeholder`})})})})},S={render:()=>(0,h.jsx)(()=>{let[e,t]=(0,m.useState)(!1),[r,i]=(0,m.useState)(``),[o,s]=(0,m.useState)(null);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(a,{label:`Invite member`,onClick:()=>t(!0)}),(0,h.jsx)(d,{open:e,onClose:()=>t(!1),title:`Invite member`,subtitle:`They get an email to join your organization.`,layoutMode:`fixed`,children:(0,h.jsxs)(`div`,{className:`gap-xlg flex flex-col`,children:[(0,h.jsx)(n,{id:`surface-demo-email`,label:`Email`,placeholder:`first.last@example.com`,value:r,onChange:e=>i(e.target.value),size:`large`}),(0,h.jsx)(c,{title:`Select role`,size:`large`,value:o,onChange:e=>s(e),items:_,fullWidth:!0})]})})]})},{})},C={render:()=>(0,h.jsx)(()=>{let[e,t]=(0,m.useState)(!0);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(a,{label:`Open dialog`,onClick:()=>t(!0)}),(0,h.jsx)(d,{open:e,onClose:()=>t(!1),title:`Surface levels`,layoutMode:`fixed`,children:(0,h.jsxs)(`div`,{className:`gap-xlg flex flex-col`,children:[(0,h.jsxs)(`div`,{className:`gap-sm flex flex-col`,children:[(0,h.jsx)(v,{children:`Field on the dialog`}),(0,h.jsx)(n,{id:`lvl-dialog-field`,placeholder:`On dialog`})]}),(0,h.jsxs)(r,{className:`gap-sm p-lg flex flex-col`,children:[(0,h.jsx)(v,{children:`Card on the dialog`}),(0,h.jsx)(v,{children:`Field on the card`}),(0,h.jsx)(n,{id:`lvl-card-field`,placeholder:`On card`}),(0,h.jsxs)(r,{className:`gap-sm p-lg flex flex-col`,children:[(0,h.jsx)(v,{children:`Card on the card`}),(0,h.jsx)(n,{id:`lvl-card-card-field`,placeholder:`On card²`})]})]})]})})]})},{})},w={render:()=>(0,h.jsx)(u,{surface:`onCard`,children:(0,h.jsxs)(`div`,{className:`bg-background-elevation shadow-default p-lg gap-md border-component border-border flex w-[320px] flex-col rounded-lg`,children:[(0,h.jsx)(v,{children:`Dialog`}),(0,h.jsx)(n,{id:`nest-field-0`,placeholder:`Field on dialog`}),(0,h.jsxs)(r,{className:`gap-md p-lg flex flex-col`,children:[(0,h.jsx)(v,{children:`Card`}),(0,h.jsx)(n,{id:`nest-field-1`,placeholder:`Field on card`}),(0,h.jsxs)(r,{className:`gap-md p-lg flex flex-col`,children:[(0,h.jsx)(v,{children:`Card on card`}),(0,h.jsx)(n,{id:`nest-field-2`,placeholder:`Field on card²`})]})]})]})})},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div className="bg-background-app-container p-xlg w-[448px]">
      <RadioCard name="layers-field-on-card" checked={false} readOnly>
        <div className="p-lg pr-3xlg">
          <TextInput id="layers-field-on-card-input" label="Label" placeholder="Placeholder" />
        </div>
      </RadioCard>
    </div>
}`,...y.parameters?.docs?.source},description:{story:'Figma "Layers", row 2: a field on a card on the page container. The card is\n`card`, the field `input-02` (white in light mode, one step up in dark mode).',...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <Modal open title="Modal Title" subtitle="Subtitle or Description">
      <TextInput id="layers-field-on-dialog-input" label="Label" placeholder="Placeholder" />
    </Modal>
}`,...b.parameters?.docs?.source},description:{story:'Figma "Layers", row 3: a field on a dialog is `input-02`, so it stays\nvisible on `elevation` in dark mode.',...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <Modal open title="Modal Title" subtitle="Subtitle or Description">
      <RadioCard name="layers-card-on-dialog" checked={false} readOnly>
        <div className="p-lg pr-3xlg">
          <TextInput id="layers-card-on-dialog-input" label="Label" placeholder="Placeholder" />
        </div>
      </RadioCard>
    </Modal>
}`,...x.parameters?.docs?.source},description:{story:'Figma "Layers", row 4: a card on a dialog steps up to `card-subtle`\n(`input-02` in dark mode, `card` in light mode) and the field on that card\ngoes back to `input-01`.',...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source},description:{story:`A field inside a Modal contrasts automatically.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    const Demo = () => {
      const [open, setOpen] = useState(true);
      return <>
          <Button label="Open dialog" onClick={() => setOpen(true)} />
          <Modal open={open} onClose={() => setOpen(false)} title="Surface levels" layoutMode="fixed">
            <div className="gap-xlg flex flex-col">
              <div className="gap-sm flex flex-col">
                <Label>Field on the dialog</Label>
                <TextInput id="lvl-dialog-field" placeholder="On dialog" />
              </div>
              <Surface className="gap-sm p-lg flex flex-col">
                <Label>Card on the dialog</Label>
                <Label>Field on the card</Label>
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
}`,...C.parameters?.docs?.source},description:{story:`Level 1 → 2 → 3: dialog → card → input. In dark mode the field on the dialog
matches the card's background and the field on the card matches the
dialog's background.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <SurfaceProvider surface="onCard">
      <div className="bg-background-elevation shadow-default p-lg gap-md border-component border-border flex w-[320px] flex-col rounded-lg">
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
}`,...w.parameters?.docs?.source},description:{story:'Inline, portal-free version of the same alternation so the steps are visible\nat a glance and snapshotable. `SurfaceProvider surface="onCard"` stands in for\na dialog; each nested `Surface` flips the shade.',...w.parameters?.docs?.description}}},T=[`FieldOnCard`,`FieldOnDialog`,`CardOnDialog`,`AutoSurfaceInModal`,`DialogCardInput`,`NestedSurfaces`]}))();export{S as AutoSurfaceInModal,x as CardOnDialog,C as DialogCardInput,y as FieldOnCard,b as FieldOnDialog,w as NestedSurfaces,T as __namedExportsOrder,g as default};