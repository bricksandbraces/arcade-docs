import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{O as ie,I as de,P as le,Q as ce,R as s}from"./ContextMenuList-iLopGvLG.js";import{r as i}from"./index-0yr9KlQE.js";import{a as l}from"./index-B-lxVbXh.js";import"./index-tymuTqDW.js";import"./index-DotmK1FS.js";import"./index-ChaIqHV-.js";import"./borders-N_bRvfGw.js";import"./colors-mvAPBTAn.js";import"./v4-CtRu48qb.js";const ke={title:"F/Inputs/DateInput",component:s,argTypes:{kind:{control:"inline-radio",options:ce},size:{control:"inline-radio",options:le},disabled:{control:"boolean"},loading:{control:"boolean"},state:{control:"inline-radio",options:de},errorMessage:{control:"text"},warningMessage:{control:"text"},successMessage:{control:"text"},loadingMessage:{control:"text"},helperText:{control:"text"},label:{control:"text"},placeholder:{control:"text"},direction:{control:"inline-radio",options:ie}},args:{errorMessage:"Error Message",warningMessage:"Warning Message",successMessage:"Erledigt",loadingMessage:"Lädt...",helperText:"Helper Text"},render:e=>{if(e.kind==="single"){const[n,t]=i.useState(e.value||null);return r.jsx(s,{...e,kind:"single",value:n??null,onChange:a=>{l("onChange")(a),t(a)}})}else{const[n,t]=i.useState([e.startValue||null,e.endValue||null]);return r.jsx(s,{...e,kind:"range",startValue:n==null?void 0:n[0],endValue:n==null?void 0:n[1],onRangeChange:(a,o)=>{l("onRangeChange")(a,o),t([a,o])}})}}},d={args:{id:"playground-date-input",label:"Date",placeholder:"DD.MM.YYYY",kind:"single",size:"medium"}},c={args:{id:"range-date-input",label:"Date Range",placeholder:"DD.MM.YYYY - DD.MM.YYYY",kind:"range",size:"medium",direction:"horizontal"}},u={args:{id:"range-vertical-date-input",label:"Date Range",placeholder:"DD.MM.YYYY - DD.MM.YYYY",kind:"range",size:"medium",direction:"vertical"}},g={render:()=>r.jsx("div",{className:"gap-lg flex flex-col",children:le.map(e=>r.jsx(s,{id:`date-input-${e}`,label:`${e.charAt(0).toUpperCase()+e.slice(1)} Size`,placeholder:"DD.MM.YYYY",kind:"single",value:new Date("2024-12-15"),onChange:n=>l("onChange")(n),size:e},e))})},p={args:{id:"error-date-input",label:"Date",placeholder:"DD.MM.YYYY",state:"error",errorMessage:"Please enter a valid date",kind:"single",size:"medium"}},m={render:()=>{const[e,n]=i.useState(new Date("2024-12-15")),t={id:"success-date-input",label:"Date",placeholder:"DD.MM.YYYY",state:"success",successMessage:"Looks good!",kind:"single",size:"medium",value:e,onChange:a=>{l("onChange")(a),n(a)}};return r.jsx(s,{...t})}},D={render:()=>{const[e,n]=i.useState(new Date("2024-12-15"));return r.jsx(s,{id:"warning-date-input",label:"Date",placeholder:"DD.MM.YYYY",state:"warning",warningMessage:"This date is in the past",kind:"single",size:"medium",value:e,onChange:t=>{l("onChange")(t),n(t)}})}},Y={render:()=>{const[e,n]=i.useState(null),t={id:"helper-date-input",label:"Date",placeholder:"DD.MM.YYYY",helperText:"Please select your preferred date",kind:"single",size:"medium",value:e,onChange:a=>{l("onChange")(a),n(a)}};return r.jsx(s,{...t})}},h={args:{id:"loading-date-input",label:"Date",loading:!0,placeholder:"DD.MM.YYYY",kind:"single",size:"medium",value:new Date("2024-12-15")}},M={args:{id:"disabled-date-input",label:"Date",placeholder:"DD.MM.YYYY",disabled:!0,kind:"single",size:"medium",value:new Date("2024-12-15")}},S={args:{id:"range-values-date-input",label:"Event Period",placeholder:"DD.MM.YYYY - DD.MM.YYYY",kind:"range",size:"medium",startValue:new Date(2024,11,20),endValue:new Date(2024,11,25)}},b={render:()=>{const[e,n]=i.useState([null,null]),t={id:"range-error-date-input",label:"Event Period",kind:"range",size:"medium",startValue:e[0],endValue:e[1],startState:"error",startErrorMessage:"Start date is required",endState:"error",endErrorMessage:"End date must be after start date",onRangeChange:(a,o)=>{l("onRangeChange")(a,o),n([a,o])}};return r.jsx(s,{...t})}},k={render:()=>{const[e,n]=i.useState([new Date(2024,11,20),new Date(2024,11,25)]),t={id:"range-success-date-input",label:"Event Period",kind:"range",size:"medium",startValue:e[0],endValue:e[1],startState:"success",startSuccessMessage:"Valid start date",endState:"success",endSuccessMessage:"Valid end date",onRangeChange:(a,o)=>{l("onRangeChange")(a,o),n([a,o])}};return r.jsx(s,{...t})}};var v,R,z;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    id: "playground-date-input",
    label: "Date",
    placeholder: "DD.MM.YYYY",
    kind: "single",
    size: "medium"
  }
}`,...(z=(R=d.parameters)==null?void 0:R.docs)==null?void 0:z.source}}};var x,V,C;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    id: "range-date-input",
    label: "Date Range",
    placeholder: "DD.MM.YYYY - DD.MM.YYYY",
    kind: "range",
    size: "medium",
    direction: "horizontal"
  }
}`,...(C=(V=c.parameters)==null?void 0:V.docs)==null?void 0:C.source}}};var w,E,f;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    id: "range-vertical-date-input",
    label: "Date Range",
    placeholder: "DD.MM.YYYY - DD.MM.YYYY",
    kind: "range",
    size: "medium",
    direction: "vertical"
  }
}`,...(f=(E=u.parameters)==null?void 0:E.docs)==null?void 0:f.source}}};var W,I,P;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:'{\n  render: () => <div className="gap-lg flex flex-col">\n      {DateInputSizes.map(size => <DateInput key={size} id={`date-input-${size}`} label={`${size.charAt(0).toUpperCase() + size.slice(1)} Size`} placeholder="DD.MM.YYYY" kind="single" value={new Date("2024-12-15")} onChange={date => action("onChange")(date)} size={size} />)}\n    </div>\n}',...(P=(I=g.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var j,y,T;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    id: "error-date-input",
    label: "Date",
    placeholder: "DD.MM.YYYY",
    state: "error",
    errorMessage: "Please enter a valid date",
    kind: "single",
    size: "medium"
  }
}`,...(T=(y=p.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var L,$,H;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState<Date | null>(new Date("2024-12-15"));
    const props = {
      id: "success-date-input",
      label: "Date",
      placeholder: "DD.MM.YYYY",
      state: "success" as const,
      successMessage: "Looks good!",
      kind: "single" as const,
      size: "medium" as const,
      value: value,
      onChange: (date: Date | null) => {
        action("onChange")(date);
        setValue(date);
      }
    };
    return <DateInput {...props} />;
  }
}`,...(H=($=m.parameters)==null?void 0:$.docs)==null?void 0:H.source}}};var q,A,N;D.parameters={...D.parameters,docs:{...(q=D.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState<Date | null>(new Date("2024-12-15"));
    return <DateInput id="warning-date-input" label="Date" placeholder="DD.MM.YYYY" state="warning" warningMessage="This date is in the past" kind="single" size="medium" value={value} onChange={date => {
      action("onChange")(date);
      setValue(date);
    }} />;
  }
}`,...(N=(A=D.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};var O,U,_;Y.parameters={...Y.parameters,docs:{...(O=Y.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState<Date | null>(null);
    const props = {
      id: "helper-date-input",
      label: "Date",
      placeholder: "DD.MM.YYYY",
      helperText: "Please select your preferred date",
      kind: "single" as const,
      size: "medium" as const,
      value: value,
      onChange: (date: Date | null) => {
        action("onChange")(date);
        setValue(date);
      }
    };
    return <DateInput {...props} />;
  }
}`,...(_=(U=Y.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};var F,K,Q;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    id: "loading-date-input",
    label: "Date",
    loading: true,
    placeholder: "DD.MM.YYYY",
    kind: "single",
    size: "medium",
    value: new Date("2024-12-15")
  }
}`,...(Q=(K=h.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var B,G,J;M.parameters={...M.parameters,docs:{...(B=M.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    id: "disabled-date-input",
    label: "Date",
    placeholder: "DD.MM.YYYY",
    disabled: true,
    kind: "single",
    size: "medium",
    value: new Date("2024-12-15")
  }
}`,...(J=(G=M.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var X,Z,ee;S.parameters={...S.parameters,docs:{...(X=S.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    id: "range-values-date-input",
    label: "Event Period",
    placeholder: "DD.MM.YYYY - DD.MM.YYYY",
    kind: "range",
    size: "medium",
    startValue: new Date(2024, 11, 20),
    endValue: new Date(2024, 11, 25)
  }
}`,...(ee=(Z=S.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ne,ae,te;b.parameters={...b.parameters,docs:{...(ne=b.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedRange, setSelectedRange] = useState<[Date | null, Date | null]>([null, null]);
    const props = {
      id: "range-error-date-input",
      label: "Event Period",
      kind: "range" as const,
      size: "medium" as const,
      startValue: selectedRange[0],
      endValue: selectedRange[1],
      startState: "error" as const,
      startErrorMessage: "Start date is required",
      endState: "error" as const,
      endErrorMessage: "End date must be after start date",
      onRangeChange: (start: Date | null, end: Date | null) => {
        action("onRangeChange")(start, end);
        setSelectedRange([start, end]);
      }
    };
    return <DateInput {...props} />;
  }
}`,...(te=(ae=b.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var se,re,oe;k.parameters={...k.parameters,docs:{...(se=k.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedRange, setSelectedRange] = useState<[Date | null, Date | null]>([new Date(2024, 11, 20), new Date(2024, 11, 25)]);
    const props = {
      id: "range-success-date-input",
      label: "Event Period",
      kind: "range" as const,
      size: "medium" as const,
      startValue: selectedRange[0],
      endValue: selectedRange[1],
      startState: "success" as const,
      startSuccessMessage: "Valid start date",
      endState: "success" as const,
      endSuccessMessage: "Valid end date",
      onRangeChange: (start: Date | null, end: Date | null) => {
        action("onRangeChange")(start, end);
        setSelectedRange([start, end]);
      }
    };
    return <DateInput {...props} />;
  }
}`,...(oe=(re=k.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};const ve=["Playground","Range","RangeVertical","Sizes","WithError","WithSuccess","WithWarning","WithHelper","Loading","Disabled","RangeWithValues","RangeWithErrors","RangeWithSuccess"];export{M as Disabled,h as Loading,d as Playground,c as Range,u as RangeVertical,b as RangeWithErrors,k as RangeWithSuccess,S as RangeWithValues,g as Sizes,p as WithError,Y as WithHelper,m as WithSuccess,D as WithWarning,ve as __namedExportsOrder,ke as default};
