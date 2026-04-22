import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./index-CY-HDqYb.js";import{I as C,W as T,Z as r,_ as y}from"./ContextMenu-DwPyJibk.js";import{O as V}from"./onCardStoryShell-BJaWLAPz.js";import"./index-A6zbrgSY.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";const t=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"orange",label:"Orange"}],N={title:"Components/Dropdown/Select",component:r,args:{options:t,placeholder:"Choose an option",size:"medium",state:"default",disabled:!1,inline:!1,fullWidth:!1},argTypes:{size:{control:"inline-radio",options:T},inline:{control:"boolean"},fullWidth:{control:"boolean"},disabled:{control:"boolean"},placeholder:{control:"text"},label:{control:"text"},helperText:{control:"text"},errorMessage:{control:"text"},warningMessage:{control:"text"},successMessage:{control:"text"},hideLabel:{control:"boolean"},state:{control:"inline-radio",options:C}},render:s=>{const[a,l]=p.useState(s.value);return e.jsx(r,{...s,value:a,onChange:n=>{l(n)}})}},o={args:{id:"playground-select",label:"Label",helperText:"Helper text below the field.",errorMessage:"Error message",warningMessage:"Warning message",successMessage:"Erledigt"}},i={args:{id:"slot-select",label:"Label",helperText:"Helper text below the field.",successMessage:"Saved",state:"success"},render:s=>{const[a,l]=p.useState(s.value);return e.jsx(r,{...s,value:a,onChange:n=>{l(n)},leadingSlot:e.jsx(y,{size:12,className:"stroke-icon-info"}),trailingSlot:e.jsx("span",{className:"typography-label-small text-text-accent",children:"Slot"})})}},c={args:{id:"on-card-select",label:"Label",helperText:"Helper text below the field.",errorMessage:"Error message",warningMessage:"Warning message",successMessage:"Erledigt",surface:"onCard"},render:s=>{const[a,l]=p.useState(s.value);return e.jsx(V,{children:e.jsx(r,{...s,value:a,onChange:n=>{l(n)}})})}},d={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{className:"gap-xlg grid max-w-[720px] grid-cols-1 md:grid-cols-2",children:[e.jsx(r,{id:"overview-default",label:"Default + helper",placeholder:"Select an option",helperText:"Optional helper text.",options:t}),e.jsx(r,{id:"overview-error",label:"Error + notification",placeholder:"Select an option",state:"error",errorMessage:"This field has an error.",helperText:"Hidden while error is shown.",options:t}),e.jsx(r,{id:"overview-warning",label:"Warning + notification",placeholder:"Select an option",state:"warning",warningMessage:"Please review your choice.",options:t}),e.jsx(r,{id:"overview-success",label:"Success",placeholder:"Select an option",state:"success",successMessage:"Saved",helperText:"Success still shows helper when no error/warning.",options:t,value:"apple"})]})};var g,u,h;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    id: "playground-select",
    label: "Label",
    helperText: "Helper text below the field.",
    errorMessage: "Error message",
    warningMessage: "Warning message",
    successMessage: "Erledigt"
  }
}`,...(h=(u=o.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var m,x,S;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    id: "slot-select",
    label: "Label",
    helperText: "Helper text below the field.",
    successMessage: "Saved",
    state: "success"
  },
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [fieldValue, setFieldValue] = useState<string | undefined>(args.value);
    return <Select {...args} value={fieldValue} onChange={v => {
      setFieldValue(v);
    }} leadingSlot={<IconCircle size={12} className="stroke-icon-info" />} trailingSlot={<span className="typography-label-small text-text-accent">Slot</span>} />;
  }
}`,...(S=(x=i.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var v,b,f;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    id: "on-card-select",
    label: "Label",
    helperText: "Helper text below the field.",
    errorMessage: "Error message",
    warningMessage: "Warning message",
    successMessage: "Erledigt",
    surface: "onCard"
  },
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [fieldValue, setFieldValue] = useState<string | undefined>(args.value);
    return <OnCardStoryShell>
        <Select {...args} value={fieldValue} onChange={v => {
        setFieldValue(v);
      }} />
      </OnCardStoryShell>;
  }
}`,...(f=(b=c.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var w,M,O;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="gap-xlg grid max-w-[720px] grid-cols-1 md:grid-cols-2">
      <Select id="overview-default" label="Default + helper" placeholder="Select an option" helperText="Optional helper text." options={sampleOptions} />
      <Select id="overview-error" label="Error + notification" placeholder="Select an option" state="error" errorMessage="This field has an error." helperText="Hidden while error is shown." options={sampleOptions} />
      <Select id="overview-warning" label="Warning + notification" placeholder="Select an option" state="warning" warningMessage="Please review your choice." options={sampleOptions} />
      <Select id="overview-success" label="Success" placeholder="Select an option" state="success" successMessage="Saved" helperText="Success still shows helper when no error/warning." options={sampleOptions} value="apple" />
    </div>
}`,...(O=(M=d.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};const z=["Playground","Slot","OnCard","Overview"];export{c as OnCard,d as Overview,o as Playground,i as Slot,z as __namedExportsOrder,N as default};
