import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as b}from"./index-CY-HDqYb.js";import{I as S,a5 as f,a7 as r}from"./ContextMenuList-BNRGalTU.js";import{O as M}from"./onCardStoryShell-BJaWLAPz.js";import"./index-A6zbrgSY.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";import"./index-ZRCHFLd-.js";import"./sizes-BpUsT7VU.js";import"./colors-CoOIoG7W.js";const a=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"orange",label:"Orange"}],F={title:"Components/Dropdown/Select",component:r,args:{options:a,placeholder:"Choose an option",size:"medium",state:"default",disabled:!1,inline:!1,fullWidth:!1},argTypes:{size:{control:"inline-radio",options:f},inline:{control:"boolean"},fullWidth:{control:"boolean"},disabled:{control:"boolean"},placeholder:{control:"text"},label:{control:"text"},helperText:{control:"text"},errorMessage:{control:"text"},warningMessage:{control:"text"},successMessage:{control:"text"},hideLabel:{control:"boolean"},state:{control:"inline-radio",options:S}},render:s=>{const[t,i]=b.useState(s.value);return e.jsx(r,{...s,value:t,onChange:c=>{i(c)}})}},o={args:{id:"playground-select",label:"Label",helperText:"Helper text below the field.",errorMessage:"Error message",warningMessage:"Warning message",successMessage:"Erledigt"}},l={args:{id:"on-card-select",label:"Label",helperText:"Helper text below the field.",errorMessage:"Error message",warningMessage:"Warning message",successMessage:"Erledigt",surface:"onCard"},render:s=>{const[t,i]=b.useState(s.value);return e.jsx(M,{children:e.jsx(r,{...s,value:t,onChange:c=>{i(c)}})})}},n={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{className:"gap-xlg grid max-w-[720px] grid-cols-1 md:grid-cols-2",children:[e.jsx(r,{id:"overview-default",label:"Default + helper",placeholder:"Select an option",helperText:"Optional helper text.",options:a}),e.jsx(r,{id:"overview-error",label:"Error + notification",placeholder:"Select an option",state:"error",errorMessage:"This field has an error.",helperText:"Hidden while error is shown.",options:a}),e.jsx(r,{id:"overview-warning",label:"Warning + notification",placeholder:"Select an option",state:"warning",warningMessage:"Please review your choice.",options:a}),e.jsx(r,{id:"overview-success",label:"Success",placeholder:"Select an option",state:"success",successMessage:"Saved",helperText:"Success still shows helper when no error/warning.",options:a,value:"apple"})]})};var p,d,g;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    id: "playground-select",
    label: "Label",
    helperText: "Helper text below the field.",
    errorMessage: "Error message",
    warningMessage: "Warning message",
    successMessage: "Erledigt"
  }
}`,...(g=(d=o.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var u,h,m;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(m=(h=l.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};var x,v,w;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(w=(v=n.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};const P=["Playground","OnCard","Overview"];export{l as OnCard,n as Overview,o as Playground,P as __namedExportsOrder,F as default};
